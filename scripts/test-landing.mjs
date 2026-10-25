import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const SCREENSHOTS_DIR = path.resolve(ROOT_DIR, 'docs', 'screenshots');

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
  console.log('🚀 Starting Concept Demo Playwright Verification...');
  const server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  const port = typeof address === 'object' && address ? address.port : 4321;
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`🌐 Server running at ${baseUrl}`);

  let failed = false;
  const browser = await chromium.launch({ headless: true });

  const viewports = [
    {
      name: 'desktop',
      width: 1440,
      height: 900,
      heroScreenshot: '1_hero_desktop_actual.png',
      aboutScreenshot: '2_quienes_somos_desktop_actual.png',
    },
    {
      name: 'mobile',
      width: 390,
      height: 844,
      heroScreenshot: '1_hero_mobile_actual.png',
      aboutScreenshot: '2_quienes_somos_mobile_actual.png',
    },
  ];

  for (const vp of viewports) {
    console.log(`\n🔍 Testing Viewport: ${vp.name} (${vp.width}x${vp.height})...`);
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
    });

    const consoleErrors = [];
    const failedRequests = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('response', (response) => {
      if (response.status() >= 400) {
        failedRequests.push(`${response.status()} ${response.url()}`);
      }
    });

    await page.goto(baseUrl, { waitUntil: 'networkidle' });

    // Global assertions
    if (consoleErrors.length > 0) {
      console.error(`❌ [${vp.name}] Console Errors detected:`, consoleErrors);
      failed = true;
    } else {
      console.log(`✅ [${vp.name}] 0 console errors`);
    }

    if (failedRequests.length > 0) {
      console.error(`❌ [${vp.name}] Broken resources (404/500):`, failedRequests);
      failed = true;
    } else {
      console.log(`✅ [${vp.name}] 0 broken resources`);
    }

    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    if (hasHorizontalOverflow) {
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      console.error(
        `❌ [${vp.name}] Horizontal overflow detected! scrollWidth=${scrollWidth} > innerWidth=${vp.width}`
      );
      failed = true;
    } else {
      console.log(`✅ [${vp.name}] 0 horizontal overflow`);
    }

    // Section 1 — Hero screenshot & verification
    const heroShotPath = path.join(SCREENSHOTS_DIR, vp.heroScreenshot);
    await page.screenshot({ path: heroShotPath, fullPage: false });
    console.log(`📸 [${vp.name}] Hero screenshot saved: ${path.relative(ROOT_DIR, heroShotPath)}`);

    // Section 2 — Quiénes Somos verification
    const aboutSection = page.locator('#nosotros');
    const aboutCount = await aboutSection.count();
    if (aboutCount === 0) {
      console.error(`❌ [${vp.name}] Section #nosotros not found!`);
      failed = true;
    } else {
      console.log(`✅ [${vp.name}] Section #nosotros exists`);

      // Verify heading text
      const headingText = await aboutSection.locator('h2').textContent();
      if (!headingText || !headingText.includes('Quiénes somos')) {
        console.error(`❌ [${vp.name}] Expected H2 to include 'Quiénes somos', got: '${headingText}'`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] H2 contains 'Quiénes somos'`);
      }

      // Verify image rendered properly
      const imgNaturalWidth = await aboutSection.locator('img').evaluate((img) => img.naturalWidth);
      if (!imgNaturalWidth || imgNaturalWidth === 0) {
        console.error(`❌ [${vp.name}] About section image failed to load or has 0 naturalWidth!`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] About image loaded (naturalWidth: ${imgNaturalWidth}px)`);
      }

      // Verify CTA link
      const cta = aboutSection.locator('a[data-event="history_click"]');
      const ctaHref = await cta.getAttribute('href');
      if (ctaHref !== '#trayectoria') {
        console.error(`❌ [${vp.name}] Expected CTA href='#trayectoria', got: '${ctaHref}'`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] CTA link verified (href: ${ctaHref}, data-event: history_click)`);
      }

      // Scroll into view and screenshot the section without sticky header obscuring it
      await aboutSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300); // Allow any smooth scroll/render to settle

      // Temporarily hide sticky header for clean section screenshot
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });

      const aboutShotPath = path.join(SCREENSHOTS_DIR, vp.aboutScreenshot);
      await aboutSection.screenshot({ path: aboutShotPath });
      console.log(`📸 [${vp.name}] Quiénes Somos screenshot saved: ${path.relative(ROOT_DIR, aboutShotPath)}`);

      // Restore header visibility
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
    }

    await page.close();
  }

  await browser.close();
  server.close();

  if (failed) {
    console.error('\n❌ Playwright verification failed.');
    process.exit(1);
  } else {
    console.log('\n🎉 Playwright verification PASSED for all viewports and sections!');
    process.exit(0);
  }
}

run().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
