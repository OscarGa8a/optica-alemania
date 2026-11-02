import { chromium } from 'playwright';
import lighthouse from 'lighthouse';
import http from 'http';
import net from 'net';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');

const mimeTypes = {
  '.html': 'text/html; charset=UTF-8',
  '.txt': 'text/plain; charset=UTF-8',
  '.xml': 'application/xml; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.mjs': 'text/javascript; charset=UTF-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

async function startStaticServer(port = 54321) {
  if (!fs.existsSync(DIST_DIR)) {
    throw new Error(`Directory ${DIST_DIR} does not exist. Run "pnpm build" first.`);
  }

  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath.endsWith('/')) reqPath += 'index.html';
    let filePath = path.join(DIST_DIR, reqPath);
    if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) filePath += '.html';
    if (!fs.existsSync(filePath) && fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath);
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      const acceptEncoding = req.headers['accept-encoding'] || '';
      const isCompressible = /^(text\/|application\/(javascript|json|xml)|image\/svg\+xml)/.test(contentType);

      if (isCompressible && acceptEncoding.includes('gzip')) {
        res.writeHead(200, {
          'Content-Type': contentType,
          'Content-Encoding': 'gzip',
          'Vary': 'Accept-Encoding',
          'Cache-Control': 'no-cache',
        });
        const gzip = zlib.createGzip();
        fs.createReadStream(filePath).pipe(gzip).pipe(res);
      } else {
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-cache',
        });
        fs.createReadStream(filePath).pipe(res);
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  });

  await new Promise((resolve) => server.listen(port, resolve));
  console.log(`🚀 Servidor estático para Lighthouse en: http://127.0.0.1:${port}`);
  return server;
}

async function getFreePort() {
  return new Promise((resolve, reject) => {
    const srv = net.createServer();
    srv.listen(0, '127.0.0.1', () => {
      const address = srv.address();
      const port = typeof address === 'object' && address ? address.port : 9333;
      srv.close(() => resolve(port));
    });
    srv.on('error', reject);
  });
}

async function runLighthouseAudit() {
  console.log('⚡ =======================================================');
  console.log('   AUDITORÍA GOOGLE LIGHTHOUSE - ÓPTICA ALEMANIA');
  console.log('=======================================================\n');

  const serverPort = await getFreePort();
  const server = await startStaticServer(serverPort);
  const debugPort = await getFreePort();

  const browser = await chromium.launch({
    args: [`--remote-debugging-port=${debugPort}`, '--no-sandbox', '--disable-setuid-sandbox'],
  });

  const url = `http://127.0.0.1:${serverPort}/`;

  try {
    console.log('📱 Evaluando categoría Mobile...');
    const mobile = await lighthouse(url, {
      port: debugPort,
      output: 'json',
      formFactor: 'mobile',
      throttlingMethod: 'simulate',
      disableStorageReset: true,
      logLevel: 'error',
    });

    console.log('💻 Evaluando categoría Desktop...');
    const desktop = await lighthouse(url, {
      port: debugPort,
      output: 'json',
      disableStorageReset: true,
      logLevel: 'error',
    }, {
      extends: 'lighthouse:default',
      settings: {
        formFactor: 'desktop',
        disableStorageReset: true,
        screenEmulation: {
          mobile: false,
          width: 1350,
          height: 940,
          deviceScaleFactor: 1,
          disabled: false,
        },
        throttling: {
          rttMs: 40,
          throughputKbps: 10 * 1024,
          cpuSlowdownMultiplier: 1,
        },
      },
    });

    const mobileScores = {
      Performance: Math.round(mobile.lhr.categories.performance.score * 100),
      Accessibility: Math.round(mobile.lhr.categories.accessibility.score * 100),
      BestPractices: Math.round(mobile.lhr.categories['best-practices'].score * 100),
      SEO: Math.round(mobile.lhr.categories.seo.score * 100),
    };

    const desktopScores = {
      Performance: Math.round(desktop.lhr.categories.performance.score * 100),
      Accessibility: Math.round(desktop.lhr.categories.accessibility.score * 100),
      BestPractices: Math.round(desktop.lhr.categories['best-practices'].score * 100),
      SEO: Math.round(desktop.lhr.categories.seo.score * 100),
    };

    console.log('\n📊 RESULTADOS OBTENIDOS:');
    console.log('📱 MOBILE:', mobileScores);
    console.log('💻 DESKTOP:', desktopScores);

    console.log('\n🔍 MOBILE LCP ELEMENT:');
    console.log(JSON.stringify(mobile.lhr.audits['largest-contentful-paint-element']?.details?.items, null, 2));

    function reportAuditFailures(label, lhr) {
      console.log(`\n🔍 AUDITORÍAS CON OPORTUNIDAD DE MEJORA [${label}]:`);
      for (const [key, audit] of Object.entries(lhr.audits)) {
        if (audit.score !== null && audit.score < 1 && audit.scoreDisplayMode !== 'notApplicable' && audit.scoreDisplayMode !== 'informative') {
          console.log(`- [${key}] ${audit.title} (Score: ${audit.score})`);
          if (audit.displayValue) console.log(`   Valor: ${audit.displayValue}`);
          if (audit.explanation) console.log(`   Explicación: ${audit.explanation}`);
          if (audit.details && audit.details.items && audit.details.items.length > 0) {
            console.log(`   Detalles (primeros 3):`, JSON.stringify(audit.details.items.slice(0, 3), null, 2));
          }
        }
      }
    }

    reportAuditFailures('MOBILE ACCESSIBILITY', mobile.lhr);
    reportAuditFailures('MOBILE PERFORMANCE', mobile.lhr);
    reportAuditFailures('DESKTOP ACCESSIBILITY', desktop.lhr);

    const minScore = 90;
    const allPassed =
      Object.values(mobileScores).every((s) => s >= minScore) &&
      Object.values(desktopScores).every((s) => s >= minScore);

    if (allPassed) {
      console.log('\n🏆 ¡CERTIFICACIÓN LIGHTHOUSE APROBADA EXITOSAMENTE! (>= 90/100 en todas las categorías)');
    } else {
      console.warn('\n⚠️ Algunas métricas requieren optimización para alcanzar el estándar.');
    }
  } finally {
    await browser.close();
    server.close();
  }
}

runLighthouseAudit().catch((err) => {
  console.error('Fatal Lighthouse error:', err);
  process.exit(1);
});
