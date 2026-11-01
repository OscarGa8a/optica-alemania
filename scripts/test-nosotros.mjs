import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const SCREENSHOTS_DIR = path.resolve(ROOT_DIR, process.env.SCREENSHOTS_DIR || 'docs/screenshots/about');

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
  console.log('🚀 Starting Nosotros Page Playwright Verification...');
  const server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  const port = typeof address === 'object' && address ? address.port : 4321;
  const baseUrl = `http://127.0.0.1:${port}/nosotros`;
  console.log(`🌐 Server running at ${baseUrl}`);

  let failed = false;
  const browser = await chromium.launch({ headless: true });

  const viewports = [
    {
      name: 'desktop',
      width: 1440,
      height: 900,
      heroScreenshot: '1_hero_desktop_actual.png',
      trajectoryScreenshot: '2_nuestra_trayectoria_desktop_actual.png',
      purposeScreenshot: '3_nuestro_proposito_desktop_actual.png',
      teamScreenshot: '4_nuestro_equipo_desktop_actual.png',
      spacesScreenshot: '5_nuestros_espacio_desktop_actual.png',
      ctaScreenshot: '6_estamos_para_ti_desktop_actual.png',
    },
    {
      name: 'mobile',
      width: 390,
      height: 844,
      heroScreenshot: '1_hero_mobile_actual.png',
      trajectoryScreenshot: '2_nuestra_trayectoria_mobile_actual.png',
      purposeScreenshot: '3_nuestro_proposito_mobile_actual.png',
      teamScreenshot: '4_nuestro_equipo_mobile_actual.png',
      spacesScreenshot: '5_nuestros_espacio_mobile_actual.png',
      ctaScreenshot: '6_estamos_para_ti_mobile_actual.png',
    },
  ];

  try {
    for (const vp of viewports) {
      console.log(`\n📱 Testing Viewport: ${vp.name.toUpperCase()} (${vp.width}x${vp.height})`);
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 1,
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
        failedRequests.push(`${req.url()} (${req.failure()?.errorText || 'failed'})`);
      });

      page.on('response', (res) => {
        if (res.status() >= 400) {
          failedRequests.push(`${res.url()} [HTTP ${res.status()}]`);
        }
      });

      await page.goto(baseUrl, { waitUntil: 'networkidle' });

      // Pin the hero's typography and palette to the shared design tokens.
      await page.evaluate(() => document.fonts.ready);
      const heroStyles = await page.locator('#inicio').evaluate((hero) => {
        const heading = hero.querySelector('h1');
        const accent = heading.querySelector('span');
        const lead = hero.querySelector('p');
        const headingStyle = getComputedStyle(heading);
        const accentStyle = getComputedStyle(accent);
        const leadStyle = getComputedStyle(lead);
        const bounds = heading.getBoundingClientRect();
        return {
          displayFamily: headingStyle.fontFamily,
          headingWeight: headingStyle.fontWeight,
          accentWeight: accentStyle.fontWeight,
          headingColor: headingStyle.color,
          accentColor: accentStyle.color,
          bodyFamily: leadStyle.fontFamily,
          bodyColor: leadStyle.color,
          fits: bounds.left >= 0 && bounds.right <= innerWidth && heading.scrollWidth <= heading.clientWidth,
          historyLink: hero.querySelector('a').getAttribute('href'),
        };
      });
      const heroMatchesSystem = heroStyles.displayFamily.includes('Instrument Serif')
        && heroStyles.headingWeight === '400'
        && heroStyles.accentWeight === '400'
        && heroStyles.headingColor === 'rgb(24, 45, 83)'
        && heroStyles.accentColor === 'rgb(20, 100, 217)'
        && heroStyles.bodyFamily.includes('Inter')
        && (
          heroStyles.bodyColor === 'oklch(0.279 0.041 260.031)' ||
          heroStyles.bodyColor === 'rgb(30, 41, 59)' ||
          heroStyles.bodyColor === 'rgb(82, 97, 123)'
        )
        && heroStyles.fits
        && heroStyles.historyLink === '#trayectoria';
      if (!heroMatchesSystem) {
        console.error(`❌ [${vp.name}] Hero design system mismatch:`, heroStyles);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Hero typography, colors, text fit and history link match the design system`);
      }

      // Pin Hero CTA button to shared Button variant="link" (blue idle -> darker navy hover)
      const heroCtaMatches = await page.locator('#inicio a[data-event="history_click"]').evaluate((link) => {
        const cls = [...link.classList];
        return cls.includes('text-brand-primary') && cls.includes('hover:text-brand-heading');
      });
      if (!heroCtaMatches) {
        console.error(`❌ [${vp.name}] Expected Hero CTA to use Button variant="link" (text-brand-primary hover:text-brand-heading)`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Hero CTA uses Button variant="link" (blue idle -> darker hover)`);
      }

      // Pin Vision block in #proposito and #estamos-para-ti section to bg-brand-midnight (#0B1B36 -> rgb(11, 27, 54))
      const midnightCheck = await page.evaluate(() => {
        const visionBlock = document.querySelector('#proposito .grid > div:nth-child(2)');
        const ctaSection = document.querySelector('#estamos-para-ti');
        const visionBg = visionBlock ? getComputedStyle(visionBlock).backgroundColor : null;
        const ctaBg = ctaSection ? getComputedStyle(ctaSection).backgroundColor : null;
        return {
          visionHasMidnightClass: visionBlock ? visionBlock.classList.contains('bg-brand-midnight') : false,
          ctaHasMidnightClass: ctaSection ? ctaSection.classList.contains('bg-brand-midnight') : false,
          visionBg,
          ctaBg,
        };
      });
      if (
        !midnightCheck.visionHasMidnightClass ||
        !midnightCheck.ctaHasMidnightClass ||
        midnightCheck.visionBg !== 'rgb(11, 27, 54)' ||
        midnightCheck.ctaBg !== 'rgb(11, 27, 54)'
      ) {
        console.error(`❌ [${vp.name}] Expected Vision block and #estamos-para-ti to use bg-brand-midnight (rgb(11, 27, 54)):`, midnightCheck);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Vision block and #estamos-para-ti use bg-brand-midnight (rgb(11, 27, 54))`);
      }

      // 1. Check Console Errors
      if (consoleErrors.length > 0) {
        console.error(`❌ [${vp.name}] Console Errors detected:`, consoleErrors);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Console Errors: 0`);
      }

      // 2. Check 404 / Failed requests
      if (failedRequests.length > 0) {
        console.error(`❌ [${vp.name}] Failed network requests:`, failedRequests);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Failed Requests (404/network): 0`);
      }

      // 3. Check Horizontal Overflow
      const overflow = await page.evaluate(() => {
        const docEl = document.documentElement;
        const bodyEl = document.body;
        const scrollWidth = Math.max(docEl.scrollWidth, bodyEl.scrollWidth);
        const clientWidth = docEl.clientWidth;
        return {
          scrollWidth,
          clientWidth,
          hasOverflow: scrollWidth > clientWidth,
        };
      });

      if (overflow.hasOverflow) {
        console.error(
          `❌ [${vp.name}] Horizontal Overflow detected: scrollWidth (${overflow.scrollWidth}) > clientWidth (${overflow.clientWidth})`
        );
        failed = true;
      } else {
        console.log(
          `✅ [${vp.name}] Horizontal Overflow: None (${overflow.scrollWidth}px <= ${overflow.clientWidth}px)`
        );
      }

      // 4. Capture section screenshots
      const sections = [
        { id: '#inicio', file: vp.heroScreenshot, label: 'Hero' },
        { id: '#trayectoria', file: vp.trajectoryScreenshot, label: 'Nuestra Trayectoria' },
        { id: '#proposito', file: vp.purposeScreenshot, label: 'Nuestro Propósito' },
        { id: '#equipo', file: vp.teamScreenshot, label: 'Nuestro Equipo' },
        { id: '#espacios', file: vp.spacesScreenshot, label: 'Nuestros Espacios' },
        { id: '#estamos-para-ti', file: vp.ctaScreenshot, label: 'Estamos Para Ti' },
      ];

      for (const sec of sections) {
        const el = page.locator(sec.id);
        if (await el.count() > 0) {
          await el.scrollIntoViewIfNeeded();
          await page.waitForTimeout(150);
          await el.locator('img').evaluateAll((imgs) => {
            return Promise.all(imgs.map((img) => {
              if (img.complete && img.naturalWidth > 0) return true;
              return new Promise((resolve) => {
                img.addEventListener('load', resolve, { once: true });
                img.addEventListener('error', resolve, { once: true });
              });
            }));
          });

          if (sec.id !== '#inicio') {
            await page.evaluate(() => {
              const header = document.querySelector('#site-header');
              if (header) header.style.setProperty('display', 'none', 'important');
            });
          }
          await el.screenshot({
            path: path.join(SCREENSHOTS_DIR, sec.file),
          });
          if (sec.id !== '#inicio') {
            await page.evaluate(() => {
              const header = document.querySelector('#site-header');
              if (header) header.style.removeProperty('display');
            });
          }
          console.log(`📸 [${vp.name}] Captured: ${sec.label} -> ${sec.file}`);
        } else {
          console.warn(`⚠️ [${vp.name}] Section locator not found: ${sec.id}`);
        }
      }

      await context.close();
    }
  } catch (err) {
    console.error('Fatal test error:', err);
    failed = true;
  } finally {
    await browser.close();
    server.close();
  }

  if (failed) {
    console.error('\n❌ Playwright verification failed with errors.');
    process.exit(1);
  } else {
    console.log('\n🎉 All Nosotros Page Playwright checks passed cleanly (0 errors, 0 404s, 0 overflow)!');
  }
}

run();
