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

      // Check Heading Hierarchy and Semantic Structure (A11y)
      const headingCheck = await page.evaluate(() => {
        const h1s = [...document.querySelectorAll('h1')];
        const h2s = [...document.querySelectorAll('h2')];
        return {
          h1Count: h1s.length,
          h1Text: h1s[0]?.textContent?.trim() || '',
          h2Count: h2s.length,
          h2Texts: h2s.map((h) => h.textContent?.replace(/\s+/g, ' ').trim()),
        };
      });

      if (headingCheck.h1Count !== 1) {
        console.error(`❌ [${vp.name}] Expected exactly 1 <h1>, found ${headingCheck.h1Count}`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Heading Hierarchy: Exactly 1 <h1> ("${headingCheck.h1Text.slice(0, 30)}...") and ${headingCheck.h2Count} <h2>s`);
      }

      // Check Images: Valid alt, width, and height attributes
      const imagesCheck = await page.evaluate(() => {
        const imgs = [...document.querySelectorAll('main img')];
        const issues = [];
        for (const img of imgs) {
          const alt = img.getAttribute('alt');
          const isAriaHidden = img.getAttribute('aria-hidden') === 'true' || img.closest('[aria-hidden="true"]');
          if (alt === null) {
            issues.push(`Image without alt: ${img.src}`);
          } else if (alt === '' && !isAriaHidden) {
            issues.push(`Content image with empty alt: ${img.src}`);
          }
          if (!img.getAttribute('width') || !img.getAttribute('height')) {
            issues.push(`Image missing width/height: ${img.src}`);
          }
        }
        return { total: imgs.length, issues };
      });

      if (imagesCheck.issues.length > 0) {
        console.error(`❌ [${vp.name}] Image accessibility/dimension issues:`, imagesCheck.issues);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] All ${imagesCheck.total} images have valid alt attributes and explicit dimensions`);
      }

      // Check Telemetry Data Attributes & Label-in-Name (WCAG 2.5.3)
      const telemetryAndA11y = await page.evaluate(() => {
        const historyCta = document.querySelector('#inicio a[data-event="history_click"]');
        const whatsappCta = document.querySelector('#estamos-para-ti a[data-event="whatsapp_cta"]');
        const servicesCta = document.querySelector('#estamos-para-ti a[data-event="services_click"]');
        const floatingWidget = document.querySelector('aside a[data-event="whatsapp_cta"]');

        const whatsappLabel = whatsappCta?.getAttribute('aria-label') || '';
        const whatsappVisible = whatsappCta?.textContent?.trim() || '';
        const labelInNameOk = whatsappLabel.toLowerCase().includes(whatsappVisible.toLowerCase().slice(0, 15));

        return {
          historyCtaOk: historyCta?.getAttribute('data-event-location') === 'about_hero',
          whatsappCtaOk: whatsappCta?.getAttribute('data-event-location') === 'about_cta',
          servicesCtaOk: servicesCta?.getAttribute('data-event-location') === 'about_cta',
          floatingWidgetOk: floatingWidget?.getAttribute('data-event-location') === 'floating_widget',
          labelInNameOk,
        };
      });

      if (!telemetryAndA11y.historyCtaOk || !telemetryAndA11y.whatsappCtaOk || !telemetryAndA11y.servicesCtaOk || !telemetryAndA11y.floatingWidgetOk) {
        console.error(`❌ [${vp.name}] Telemetry attributes check failed:`, telemetryAndA11y);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Telemetry data-event and data-event-location attributes verified on all CTAs`);
      }

      if (!telemetryAndA11y.labelInNameOk) {
        console.error(`❌ [${vp.name}] WCAG 2.5.3 Label-in-Name mismatch on WhatsApp CTA`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] WCAG 2.5.3 Label-in-Name verified on primary CTA`);
      }

      // Check Schema.org JSON-LD Multigraph
      const schemaOk = await page.evaluate(() => {
        const script = document.querySelector('script[type="application/ld+json"]');
        if (!script) return false;
        try {
          const json = JSON.parse(script.textContent || '{}');
          return json['@context'] === 'https://schema.org' && Array.isArray(json['@graph']) && json['@graph'].length >= 3;
        } catch {
          return false;
        }
      });

      if (!schemaOk) {
        console.error(`❌ [${vp.name}] Schema.org JSON-LD @graph missing or invalid`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Schema.org JSON-LD multigraph parsed and validated`);
      }

      // Test Telemetry Event Dispatcher & dataLayer Buffer (Zero-TBT)
      const dataLayerTest = await page.evaluate(() => {
        window.dataLayer = window.dataLayer || [];
        const initialLen = window.dataLayer.length;
        const ctaBtn = document.querySelector('#inicio a[data-event="history_click"]');
        if (!ctaBtn) return { success: false, reason: 'CTA not found' };
        ctaBtn.click();
        const lastEvent = window.dataLayer[window.dataLayer.length - 1];
        return {
          success: window.dataLayer.length > initialLen && lastEvent?.event === 'cta_click' && lastEvent?.cta_type === 'history_click',
          lastEvent,
        };
      });

      if (!dataLayerTest.success) {
        console.error(`❌ [${vp.name}] dataLayer buffer failed to receive cta_click event:`, dataLayerTest);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Zero-TBT Analytics: click event successfully buffered into window.dataLayer`);
      }

      // Phase 8: Search Console & Staging Isolation Verification
      const indexingAndSeo = await page.evaluate(() => {
        const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
        const robots = document.querySelector('meta[name="robots"]')?.getAttribute('content');
        return {
          canonical,
          robots,
          isCanonicalOk: canonical === 'https://opticaalemania.co/nosotros',
          isRobotsOk: robots === 'index, follow, max-image-preview:large',
        };
      });

      if (!indexingAndSeo.isCanonicalOk || !indexingAndSeo.isRobotsOk) {
        console.error(`❌ [${vp.name}] Indexing & Search Console check failed:`, indexingAndSeo);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Search Console Ready: canonical (${indexingAndSeo.canonical}) and robots (${indexingAndSeo.robots}) verified`);
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
