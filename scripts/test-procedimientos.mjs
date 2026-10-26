import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const SCREENSHOTS_DIR = path.resolve(ROOT_DIR, 'docs', 'screenshots', 'procedimientos');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

// Simple static file server for dist/
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
};

function createServer() {
  return http.createServer((req, res) => {
    let reqPath = decodeURI(req.url?.split('?')[0] || '/');
    if (reqPath.endsWith('/')) {
      reqPath += 'index.html';
    } else if (!path.extname(reqPath)) {
      reqPath += '/index.html';
    }

    const filePath = path.join(DIST_DIR, reqPath);
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found: ' + reqPath);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
}

async function run() {
  console.log('🚀 Starting Procedimientos Page Playwright Verification...');
  const server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  const port = typeof address === 'object' && address ? address.port : 3000;
  const baseUrl = `http://127.0.0.1:${port}/procedimientos`;

  const browser = await chromium.launch();
  let hasErrors = false;

  try {
    const viewports = [
      { name: 'desktop', width: 1440, height: 900 },
      { name: 'mobile', width: 390, height: 844 },
    ];

    for (const vp of viewports) {
      console.log(`\n🔍 Verifying Viewport: ${vp.name.toUpperCase()} (${vp.width}x${vp.height})...`);
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 2,
      });

      const page = await context.newPage();
      const consoleErrors = [];
      const failedRequests = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          consoleErrors.push(msg.text());
        }
      });

      page.on('requestfailed', (req) => {
        failedRequests.push(`${req.method()} ${req.url()} - ${req.failure()?.errorText}`);
      });

      page.on('response', (res) => {
        if (res.status() >= 400) {
          failedRequests.push(`${res.status()} ${res.url()}`);
        }
      });

      await page.goto(baseUrl, { waitUntil: 'networkidle' });

      // Check 1: Horizontal scroll check
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      if (scrollWidth > clientWidth) {
        console.error(`❌ Overflow horizontal detectado en ${vp.name}: scrollWidth=${scrollWidth} > clientWidth=${clientWidth}`);
        hasErrors = true;
      } else {
        console.log(`✅ Cero scroll horizontal verificado en ${vp.name} (${scrollWidth} <= ${clientWidth})`);
      }

      // Check 2: Console errors
      if (consoleErrors.length > 0) {
        console.error(`❌ Errores de consola en ${vp.name}:`, consoleErrors);
        hasErrors = true;
      } else {
        console.log(`✅ Cero errores de consola en ${vp.name}`);
      }

      // Check 3: Failed network requests / 404s
      if (failedRequests.length > 0) {
        console.error(`❌ Peticiones fallidas en ${vp.name}:`, failedRequests);
        hasErrors = true;
      } else {
        console.log(`✅ Cero recursos rotos / 404s en ${vp.name}`);
      }

      // Check 4: Section DOM validations
      const sections = [
        { id: '#inicio', label: '1_hero' },
        { id: '#volk-inview', label: '2_tecnologia' },
        { id: '#farnsworth', label: '3_vision_color' },
        { id: '#nuestro-trabajo', label: '4_nuestro_trabajo' },
        { id: '#contacto', label: '5_contact' },
      ];

      for (const sec of sections) {
        const el = page.locator(sec.id);
        const count = await el.count();
        if (count === 0) {
          console.error(`❌ Sección ${sec.label} (${sec.id}) no encontrada en el DOM`);
          hasErrors = true;
        } else {
          // Capture section screenshot
          const screenshotPath = path.join(SCREENSHOTS_DIR, `${sec.label}_${vp.name}_actual.png`);
          await el.screenshot({ path: screenshotPath });
          console.log(`📸 Capturada sección ${sec.label} (${vp.name}) -> ${path.basename(screenshotPath)}`);
        }
      }

      // Full page screenshot
      const fullPagePath = path.join(SCREENSHOTS_DIR, `full_page_${vp.name}_actual.png`);
      await page.screenshot({ path: fullPagePath, fullPage: true });
      console.log(`📸 Captura de página completa guardada: ${path.basename(fullPagePath)}`);

      await context.close();
    }
  } catch (err) {
    console.error('❌ Excepción durante verificación:', err);
    hasErrors = true;
  } finally {
    await browser.close();
    server.close();
  }

  if (hasErrors) {
    console.error('\n❌ Verificación Playwright falló con errores.');
    process.exit(1);
  } else {
    console.log('\n🌟 ¡Verificación Playwright de Procedimientos completada con éxito!');
  }
}

run();
