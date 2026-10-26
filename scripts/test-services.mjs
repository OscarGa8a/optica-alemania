import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const SCREENSHOTS_DIR = path.resolve(ROOT_DIR, 'docs', 'screenshots', 'services');

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
  console.log('🚀 Starting Servicios Page Playwright Verification...');
  const server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;
  console.log(`🌐 Server running at ${baseUrl}`);

  const browser = await chromium.launch({ headless: true });

  const viewports = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'mobile', width: 390, height: 844 },
  ];

  let hasErrors = false;

  for (const vp of viewports) {
    console.log(`\n🔍 Testing Viewport: ${vp.name} (${vp.width}x${vp.height})...`);
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
    });

    const consoleErrors = [];
    const brokenResources = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('response', (res) => {
      if (res.status() >= 400) {
        brokenResources.push(`${res.status()} ${res.url()}`);
      }
    });

    await page.goto(`${baseUrl}/servicios/`, { waitUntil: 'networkidle' });

    // 1. Console Errors check
    if (consoleErrors.length > 0) {
      console.error(`❌ [${vp.name}] Console errors detected:`, consoleErrors);
      hasErrors = true;
    } else {
      console.log(`✅ [${vp.name}] 0 console errors`);
    }

    // 2. Broken resources check
    if (brokenResources.length > 0) {
      console.error(`❌ [${vp.name}] Broken resources (404/500):`, brokenResources);
      hasErrors = true;
    } else {
      console.log(`✅ [${vp.name}] 0 broken resources`);
    }

    // 3. Horizontal Overflow check
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    if (overflow) {
      console.error(`❌ [${vp.name}] Horizontal overflow detected!`);
      hasErrors = true;
    } else {
      console.log(`✅ [${vp.name}] 0 horizontal overflow`);
    }

    // 4. Section 1 — Hero Verification
    const heroElement = page.locator('#hero-servicios');
    const heroExists = (await heroElement.count()) > 0;
    if (!heroExists) {
      console.error(`❌ [${vp.name}] Section #hero-servicios does not exist!`);
      hasErrors = true;
    } else {
      console.log(`✅ [${vp.name}] Section #hero-servicios exists`);

      const rawH1 = await heroElement.locator('h1').textContent();
      const h1Text = (rawH1 || '').replace(/\s+/g, ' ');
      if (!h1Text.includes('Servicios de') || !h1Text.includes('optometría') || !h1Text.includes('en Villavicencio')) {
        console.error(`❌ [${vp.name}] H1 title text mismatch: ${h1Text}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] H1 contains 'Servicios de optometría en Villavicencio'`);
      }

      // Check hero image loaded
      const heroImg = vp.name === 'desktop'
        ? heroElement.locator('img[src*="1_hero_desktop_image"]')
        : heroElement.locator('img[src*="1_hero_mobile_image"]');

      const imgCount = await heroImg.count();
      if (imgCount === 0) {
        console.error(`❌ [${vp.name}] Hero image not found in DOM`);
        hasErrors = true;
      } else {
        const isLoaded = await heroImg.first().evaluate((img) => img.complete && img.naturalWidth > 0);
        if (!isLoaded) {
          console.error(`❌ [${vp.name}] Hero image failed to load properly`);
          hasErrors = true;
        } else {
          console.log(`✅ [${vp.name}] Hero image loaded successfully`);
        }
      }

      // Screenshot of Hero + Header
      // For accurate visual comparison with mockup, capture the viewport from top (header + hero)
      const screenshotPath = path.join(SCREENSHOTS_DIR, `1_hero_${vp.name}_actual.png`);
      
      if (vp.name === 'desktop') {
        // Desktop mockup is 1440x810 or 1440x900 viewport capture of the hero section
        await page.screenshot({
          path: screenshotPath,
          clip: { x: 0, y: 0, width: 1440, height: 810 },
        });
      } else {
        // Mobile mockup is 390x844 full mobile screen
        await page.screenshot({
          path: screenshotPath,
          clip: { x: 0, y: 0, width: 390, height: 844 },
        });
      }
      console.log(`📸 [${vp.name}] Hero screenshot saved: ${path.relative(ROOT_DIR, screenshotPath)}`);
    }

    await page.close();
  }

  await browser.close();
  server.close();

  if (hasErrors) {
    console.error('\n❌ Playwright verification failed with errors.');
    process.exit(1);
  } else {
    console.log('\n🎉 Playwright verification PASSED for all viewports!');
  }
}

run().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
