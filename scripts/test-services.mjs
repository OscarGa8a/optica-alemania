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

    // 5. Section 2 — Explora nuestros servicios Verification
    const overviewElement = page.locator('#explora-servicios');
    const overviewExists = (await overviewElement.count()) > 0;
    if (!overviewExists) {
      console.error(`❌ [${vp.name}] Section #explora-servicios does not exist!`);
      hasErrors = true;
    } else {
      console.log(`✅ [${vp.name}] Section #explora-servicios exists`);

      const rawH2 = await overviewElement.locator('h2').textContent();
      const h2Text = (rawH2 || '').replace(/\s+/g, ' ');
      if (!h2Text.includes('Encuentra la atención') || !h2Text.includes('que buscas')) {
        console.error(`❌ [${vp.name}] H2 title text mismatch: ${h2Text}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] H2 contains 'Encuentra la atención que buscas'`);
      }

      // Check 3 cards exist
      const cards = overviewElement.locator('a[data-event="service_pillar_click"]');
      const cardsCount = await cards.count();
      if (cardsCount !== 3) {
        console.error(`❌ [${vp.name}] Expected 3 service cards, found: ${cardsCount}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] 3 service cards found`);
      }

      // On desktop, check images are loaded
      if (vp.name === 'desktop') {
        const cardImgs = overviewElement.locator('img[src*="2_overview_image"]');
        const imgCount = await cardImgs.count();
        if (imgCount !== 3) {
          console.error(`❌ [${vp.name}] Expected 3 card images, found: ${imgCount}`);
          hasErrors = true;
        } else {
          for (let i = 0; i < 3; i++) {
            const isLoaded = await cardImgs.nth(i).evaluate((img) => img.complete && img.naturalWidth > 0);
            if (!isLoaded) {
              console.error(`❌ [${vp.name}] Card image ${i + 1} failed to load`);
              hasErrors = true;
            }
          }
          console.log(`✅ [${vp.name}] All 3 card images loaded successfully`);
        }
      }

      // Screenshot of Section 2
      const overviewScreenshotPath = path.join(SCREENSHOTS_DIR, `2_overview_${vp.name}_actual.png`);
      if (vp.name === 'mobile') {
        // Temporarily hide sticky header during element screenshot to avoid overlap
        await page.evaluate(() => {
          const header = document.querySelector('header');
          if (header) header.style.display = 'none';
        });
      }
      await overviewElement.screenshot({
        path: overviewScreenshotPath,
      });
      if (vp.name === 'mobile') {
        await page.evaluate(() => {
          const header = document.querySelector('header');
          if (header) header.style.display = '';
        });
      }
      console.log(`📸 [${vp.name}] Overview screenshot saved: ${path.relative(ROOT_DIR, overviewScreenshotPath)}`);
    }

    // 6. Section 3 — 01 / Atención visual a tu medida Verification
    const visualCareElement = page.locator('#atencion-visual');
    const visualCareExists = (await visualCareElement.count()) > 0;
    if (!visualCareExists) {
      console.error(`❌ [${vp.name}] Section #atencion-visual does not exist!`);
      hasErrors = true;
    } else {
      console.log(`✅ [${vp.name}] Section #atencion-visual exists`);

      const rawH2 = await visualCareElement.locator('h2').textContent();
      const h2Text = (rawH2 || '').replace(/\s+/g, ' ');
      if (!h2Text.includes('Atención visual') || !h2Text.includes('a tu medida')) {
        console.error(`❌ [${vp.name}] H2 title text mismatch: ${h2Text}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] H2 contains 'Atención visual a tu medida'`);
      }

      // Check both services exist
      const serviceArticles = visualCareElement.locator('article');
      const articleCount = await serviceArticles.count();
      if (articleCount !== 2) {
        console.error(`❌ [${vp.name}] Expected 2 service articles, found: ${articleCount}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] 2 service articles found in #atencion-visual`);
      }

      // Check headings of both services
      const h3s = visualCareElement.locator('h3');
      const h3Count = await h3s.count();
      if (h3Count < 2) {
        console.error(`❌ [${vp.name}] Expected at least 2 h3 headings, found: ${h3Count}`);
        hasErrors = true;
      } else {
        const text1 = (await h3s.nth(0).textContent() || '').replace(/\s+/g, ' ');
        const text2 = (await h3s.nth(1).textContent() || '').replace(/\s+/g, ' ');
        if (!text1.includes('Consulta de') || !text1.includes('optometría especializada')) {
          console.error(`❌ [${vp.name}] Service 01 H3 mismatch: ${text1}`);
          hasErrors = true;
        } else {
          console.log(`✅ [${vp.name}] Service 01 H3 contains 'Consulta de optometría especializada'`);
        }

        if (!text2.includes('Adaptación de') || !text2.includes('lentes de contacto')) {
          console.error(`❌ [${vp.name}] Service 02 H3 mismatch: ${text2}`);
          hasErrors = true;
        } else {
          console.log(`✅ [${vp.name}] Service 02 H3 contains 'Adaptación de lentes de contacto'`);
        }
      }

      // Check images loaded successfully
      const serviceImgs = visualCareElement.locator('img[src*="3_atencion_visual_image"]');
      const imgCount = await serviceImgs.count();
      if (imgCount !== 2) {
        console.error(`❌ [${vp.name}] Expected 2 visual care images, found: ${imgCount}`);
        hasErrors = true;
      } else {
        for (let i = 0; i < 2; i++) {
          const isLoaded = await serviceImgs.nth(i).evaluate((img) => img.complete && img.naturalWidth > 0);
          if (!isLoaded) {
            console.error(`❌ [${vp.name}] Visual care image ${i + 1} failed to load`);
            hasErrors = true;
          }
        }
        console.log(`✅ [${vp.name}] Both visual care images loaded successfully`);
      }

      // Check CTAs
      const ctas = visualCareElement.locator('a[data-event="service_detail_cta"]');
      const ctaCount = await ctas.count();
      if (ctaCount !== 2) {
        console.error(`❌ [${vp.name}] Expected 2 detail CTAs, found: ${ctaCount}`);
        hasErrors = true;
      } else {
        for (let i = 0; i < 2; i++) {
          const href = await ctas.nth(i).getAttribute('href');
          if (!href || !href.includes('wa.me/573112017302')) {
            console.error(`❌ [${vp.name}] CTA ${i + 1} href is invalid: ${href}`);
            hasErrors = true;
          }
        }
        console.log(`✅ [${vp.name}] Both WhatsApp CTAs verified`);
      }

      // Screenshot of Section 3
      const visualCareScreenshotPath = path.join(SCREENSHOTS_DIR, `3_atencion_visual_${vp.name}_actual.png`);
      // Scroll into view and ensure images are fully loaded and rendered
      await visualCareElement.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await visualCareElement.locator('img').evaluateAll((imgs) => {
        return Promise.all(imgs.map((img) => {
          if (img.complete && img.naturalWidth > 0) return true;
          return new Promise((resolve) => {
            img.onload = img.onerror = resolve;
          });
        }));
      });
      // Temporarily hide sticky header during element screenshot to avoid any overlap
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });
      await visualCareElement.screenshot({
        path: visualCareScreenshotPath,
      });
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
      console.log(`📸 [${vp.name}] Visual Care screenshot saved: ${path.relative(ROOT_DIR, visualCareScreenshotPath)}`);
    }

    // 7. Section 4 — 02 / Evaluaciones especializadas Verification
    const specTestsElement = page.locator('#evaluaciones-especializadas');
    const specTestsExists = (await specTestsElement.count()) > 0;
    if (!specTestsExists) {
      console.error(`❌ [${vp.name}] Section #evaluaciones-especializadas does not exist!`);
      hasErrors = true;
    } else {
      console.log(`✅ [${vp.name}] Section #evaluaciones-especializadas exists`);

      const rawH2 = await specTestsElement.locator('h2').textContent();
      const h2Text = (rawH2 || '').replace(/\s+/g, ' ');
      if (!h2Text.includes('Conoce nuestras') || !h2Text.includes('evaluaciones') || !h2Text.includes('especializadas')) {
        console.error(`❌ [${vp.name}] H2 title text mismatch: ${h2Text}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] H2 contains 'Conoce nuestras evaluaciones especializadas'`);
      }

      // Check all 5 test items exist
      const testLinks = specTestsElement.locator('a[data-event="specialized_test_click"]');
      const testCount = await testLinks.count();
      if (testCount !== 5) {
        console.error(`❌ [${vp.name}] Expected 5 specialized tests, found: ${testCount}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] 5 specialized test items found`);
      }

      // Check test titles
      const h3s = specTestsElement.locator('h3');
      const h3Count = await h3s.count();
      if (h3Count < 5) {
        console.error(`❌ [${vp.name}] Expected at least 5 h3 titles, found: ${h3Count}`);
        hasErrors = true;
      } else {
        const expectedTests = [
          'Toma de presión intraocular',
          'Test de ojo seco',
          'Test de Ishihara / Farnsworth D-15',
          'Examen digital por retroiluminación',
          'Retinofotografía',
        ];
        for (let i = 0; i < expectedTests.length; i++) {
          const text = (await h3s.nth(i).textContent() || '').replace(/\s+/g, ' ');
          if (!text.includes(expectedTests[i])) {
            console.error(`❌ [${vp.name}] Test ${i + 1} mismatch: ${text}`);
            hasErrors = true;
          }
        }
        console.log(`✅ [${vp.name}] All 5 test titles verified`);
      }

      // Check image is loaded
      const specImg = vp.name === 'desktop'
        ? specTestsElement.locator('.hidden.lg\\:block img[src*="4_evaluaciones_especializadas_image"]')
        : specTestsElement.locator('.block.lg\\:hidden img[src*="4_evaluaciones_especializadas_image"]');
      const isLoaded = await specImg.first().evaluate((img) => img.complete && img.naturalWidth > 0);
      if (!isLoaded) {
        console.error(`❌ [${vp.name}] Specialized tests image failed to load`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] Specialized tests image loaded successfully`);
      }

      // Check technology banner
      const bannerText = await specTestsElement.textContent();
      if (!bannerText.includes('TECNOLOGÍA PARA UNA ATENCIÓN MÁS COMPLETA')) {
        console.error(`❌ [${vp.name}] Technology banner missing`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] Technology banner verified`);
      }

      // Screenshot of Section 4
      const specTestsScreenshotPath = path.join(SCREENSHOTS_DIR, `4_evaluaciones_especializadas_${vp.name}_actual.png`);
      await specTestsElement.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      // Temporarily hide sticky header during element screenshot
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });
      await specTestsElement.screenshot({
        path: specTestsScreenshotPath,
      });
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
      console.log(`📸 [${vp.name}] Specialized Tests screenshot saved: ${path.relative(ROOT_DIR, specTestsScreenshotPath)}`);
    }

    // 8. Section 5 — 03 / Urgencias oculares Verification
    const emergenciesElement = page.locator('#urgencias-oculares');
    const emergenciesExists = (await emergenciesElement.count()) > 0;
    if (!emergenciesExists) {
      console.error(`❌ [${vp.name}] Section #urgencias-oculares does not exist!`);
      hasErrors = true;
    } else {
      console.log(`✅ [${vp.name}] Section #urgencias-oculares exists`);

      // Check H2 Title
      const rawH2 = await emergenciesElement.locator('h2').textContent();
      const h2Text = (rawH2 || '').replace(/\s+/g, ' ');
      if (!h2Text.includes('¿Necesitas atención') || !h2Text.includes('molestia ocular?')) {
        console.error(`❌ [${vp.name}] Urgencias H2 mismatch: ${h2Text}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] H2 contains '¿Necesitas atención por una molestia ocular?'`);
      }

      // Check Description
      const descText = (await emergenciesElement.locator('p').first().textContent() || '').replace(/\s+/g, ' ');
      if (!descText.includes('Consulta con nuestro equipo qué situaciones podemos atender')) {
        console.error(`❌ [${vp.name}] Urgencias description mismatch: ${descText}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] Description verified`);
      }

      // Check CTA link
      const ctaLink = emergenciesElement.locator('a[href*="wa.me"]');
      const ctaCount = await ctaLink.count();
      if (ctaCount < 1) {
        console.error(`❌ [${vp.name}] No WhatsApp CTA button found in #urgencias-oculares`);
        hasErrors = true;
      } else {
        const href = await ctaLink.first().getAttribute('href');
        if (!href || !href.includes('wa.me/573112017302')) {
          console.error(`❌ [${vp.name}] Urgencias CTA href is invalid: ${href}`);
          hasErrors = true;
        } else {
          console.log(`✅ [${vp.name}] WhatsApp CTA button verified`);
        }
      }

      // Check Medical Urgency Disclaimer
      const fullText = await emergenciesElement.textContent();
      if (!fullText.includes('Ante síntomas o lesiones oculares graves') || !fullText.includes('servicio de urgencias médicas')) {
        console.error(`❌ [${vp.name}] Medical disclaimer notice text mismatch`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] Medical disclaimer notice verified`);
      }

      // Screenshot of Section 5
      const emergenciesScreenshotPath = path.join(SCREENSHOTS_DIR, `5_urgencias_oculares_${vp.name}_actual.png`);
      await emergenciesElement.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      // Temporarily hide sticky header during element screenshot
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });
      await emergenciesElement.screenshot({
        path: emergenciesScreenshotPath,
      });
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
      console.log(`📸 [${vp.name}] Urgencias Oculares screenshot saved: ${path.relative(ROOT_DIR, emergenciesScreenshotPath)}`);
    }

    // 9. Section 6 — 04 / Procedimientos en video Verification
    const proceduresElement = page.locator('#procedimientos');
    const proceduresExists = (await proceduresElement.count()) > 0;
    if (!proceduresExists) {
      console.error(`❌ [${vp.name}] Section #procedimientos does not exist!`);
      hasErrors = true;
    } else {
      console.log(`✅ [${vp.name}] Section #procedimientos exists`);

      // Check H2 Title
      const rawH2 = await proceduresElement.locator('h2').textContent();
      const h2Text = (rawH2 || '').replace(/\s+/g, ' ');
      if (!h2Text.includes('Nuestros procedimientos') || !h2Text.includes('de cerca')) {
        console.error(`❌ [${vp.name}] Procedimientos H2 mismatch: ${h2Text}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] H2 contains 'Nuestros procedimientos, de cerca.'`);
      }

      // Check Description
      const descText = (await proceduresElement.locator('p').first().textContent() || '').replace(/\s+/g, ' ');
      if (!descText.includes('Conoce en video cómo realizamos algunas de nuestras evaluaciones visuales')) {
        console.error(`❌ [${vp.name}] Procedimientos description mismatch: ${descText}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] Description verified`);
      }

      // Check Video Cards (2 items)
      const articles = proceduresElement.locator('article');
      const articleCount = await articles.count();
      if (articleCount !== 2) {
        console.error(`❌ [${vp.name}] Expected 2 video procedure cards, found: ${articleCount}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] Found 2 video procedure cards`);

        // Check Card 1
        const card1Text = await articles.nth(0).textContent();
        if (!card1Text.includes('Evaluación retinal con Volk InView') || !card1Text.includes('Ver procedimiento')) {
          console.error(`❌ [${vp.name}] Card 1 text mismatch`);
          hasErrors = true;
        }

        // Check Card 2
        const card2Text = await articles.nth(1).textContent();
        if (!card2Text.includes('Test de Farnsworth D-15') || !card2Text.includes('Ver procedimiento')) {
          console.error(`❌ [${vp.name}] Card 2 text mismatch`);
          hasErrors = true;
        }

        // Check both card images are loaded
        const img1 = articles.nth(0).locator('img');
        const img2 = articles.nth(1).locator('img');
        const isImg1Loaded = await img1.evaluate((img) => img.complete && img.naturalWidth > 0);
        const isImg2Loaded = await img2.evaluate((img) => img.complete && img.naturalWidth > 0);
        if (!isImg1Loaded || !isImg2Loaded) {
          console.error(`❌ [${vp.name}] One or more procedure card images failed to load`);
          hasErrors = true;
        } else {
          console.log(`✅ [${vp.name}] Both procedure card images loaded successfully`);
        }
      }

      // Check Bottom CTA
      const bottomCta = proceduresElement.locator('a[href*="/procedimientos"]').last();
      const bottomCtaText = (await bottomCta.textContent() || '').trim();
      if (!bottomCtaText.includes('Explorar más procedimientos')) {
        console.error(`❌ [${vp.name}] Bottom CTA text mismatch: ${bottomCtaText}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] Bottom CTA verified: 'Explorar más procedimientos'`);
      }

      // Screenshot of Section 6
      const proceduresScreenshotPath = path.join(SCREENSHOTS_DIR, `6_procedimientos_${vp.name}_actual.png`);
      await proceduresElement.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      // Temporarily hide sticky header during element screenshot
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });
      await proceduresElement.screenshot({
        path: proceduresScreenshotPath,
      });
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
      console.log(`📸 [${vp.name}] Procedimientos screenshot saved: ${path.relative(ROOT_DIR, proceduresScreenshotPath)}`);
    }

    // 10. Section 7 — FAQ Verification
    const faqElement = page.locator('#preguntas-frecuentes');
    const faqExists = (await faqElement.count()) > 0;
    if (!faqExists) {
      console.error(`❌ [${vp.name}] Section #preguntas-frecuentes does not exist!`);
      hasErrors = true;
    } else {
      console.log(`✅ [${vp.name}] Section #preguntas-frecuentes exists`);

      // Check Eyebrow
      const eyebrowText = (await faqElement.locator('p.tracking-wider').first().textContent() || '').trim();
      if (!eyebrowText.includes('07 / PREGUNTAS FRECUENTES')) {
        console.error(`❌ [${vp.name}] FAQ Eyebrow mismatch: ${eyebrowText}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] Eyebrow verified: '07 / PREGUNTAS FRECUENTES'`);
      }

      // Check Title
      const rawH2 = await faqElement.locator('#faq-heading').textContent();
      const h2Text = (rawH2 || '').replace(/\s+/g, ' ').trim();
      if (!h2Text.includes('Resolvemos tus') || !h2Text.includes('dudas.')) {
        console.error(`❌ [${vp.name}] FAQ H2 title mismatch: ${h2Text}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] H2 title verified: 'Resolvemos tus dudas.'`);
      }

      // Check Description
      const descText = (await faqElement.locator('p.text-slate-600').first().textContent() || '').trim();
      if (!descText.includes('preguntas más habituales')) {
        console.error(`❌ [${vp.name}] FAQ description mismatch: ${descText}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] Description verified`);
      }

      // Check FAQ Items (4 items)
      const faqItems = faqElement.locator('.faq-item');
      const faqCount = await faqItems.count();
      if (faqCount !== 4) {
        console.error(`❌ [${vp.name}] Expected 4 FAQ items, found: ${faqCount}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] Found 4 FAQ items`);

        // Check item 01 is open by default
        const item1Toggle = faqItems.nth(0).locator('.faq-toggle');
        const item1Expanded = await item1Toggle.getAttribute('aria-expanded');
        const item1Answer = faqItems.nth(0).locator('.faq-answer');
        const item1AnswerVisible = await item1Answer.isVisible();

        if (item1Expanded !== 'true' || !item1AnswerVisible) {
          console.error(`❌ [${vp.name}] Item 01 should be open by default. aria-expanded: ${item1Expanded}, visible: ${item1AnswerVisible}`);
          hasErrors = true;
        } else {
          console.log(`✅ [${vp.name}] Item 01 is open by default`);
        }

        // Test interactive toggle
        const item2Toggle = faqItems.nth(1).locator('.faq-toggle');
        await item2Toggle.click();
        await page.waitForTimeout(200);

        const item2ExpandedAfter = await item2Toggle.getAttribute('aria-expanded');
        const item1ExpandedAfter = await item1Toggle.getAttribute('aria-expanded');

        if (item2ExpandedAfter !== 'true' || item1ExpandedAfter !== 'false') {
          console.error(`❌ [${vp.name}] Accordion toggle failed: Item 2 expanded: ${item2ExpandedAfter}, Item 1 expanded: ${item1ExpandedAfter}`);
          hasErrors = true;
        } else {
          console.log(`✅ [${vp.name}] Accordion interactive toggle works (Item 2 opened, Item 1 closed)`);
        }

        // Restore item 01 open for official screenshot matching mockup
        await item1Toggle.click();
        await page.waitForTimeout(200);
      }

      // Check WhatsApp contact box
      const whatsappLinks = faqElement.locator('a[href*="wa.me"]');
      const waCount = await whatsappLinks.count();
      if (waCount === 0) {
        console.error(`❌ [${vp.name}] WhatsApp contact link not found in FAQ section`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] WhatsApp contact link found (${waCount} instance(s))`);
      }

      // Screenshot of Section 7
      const faqScreenshotPath = path.join(SCREENSHOTS_DIR, `7_faq_${vp.name}_actual.png`);
      await faqElement.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });
      await faqElement.screenshot({
        path: faqScreenshotPath,
      });
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
      console.log(`📸 [${vp.name}] FAQ screenshot saved: ${path.relative(ROOT_DIR, faqScreenshotPath)}`);
    }

    // 11. Section 8 — CTA Cierre Verification
    const ctaElement = page.locator('#contacto-servicios');
    const ctaExists = (await ctaElement.count()) > 0;
    if (!ctaExists) {
      console.error(`❌ [${vp.name}] Section #contacto-servicios does not exist!`);
      hasErrors = true;
    } else {
      console.log(`✅ [${vp.name}] Section #contacto-servicios exists`);

      // Check Eyebrow
      const eyebrowText = (await ctaElement.locator('p.tracking-\\[0\\.2em\\]').first().textContent() || '').trim();
      if (!eyebrowText.includes('TU PRÓXIMO PASO')) {
        console.error(`❌ [${vp.name}] CTA Eyebrow mismatch: ${eyebrowText}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] Eyebrow verified: 'TU PRÓXIMO PASO'`);
      }

      // Check Title
      const rawH2 = await ctaElement.locator('#cta-heading').textContent();
      const h2Text = (rawH2 || '').replace(/\s+/g, ' ').trim();
      if (!h2Text.includes('¿Tienes dudas sobre') || !h2Text.includes('Hablemos.')) {
        console.error(`❌ [${vp.name}] CTA H2 title mismatch: ${h2Text}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] H2 title verified: '¿Tienes dudas sobre nuestros servicios? Hablemos.'`);
      }

      // Check Description
      const descText = (await ctaElement.locator('p.max-w-2xl').first().textContent() || '').trim();
      if (!descText.includes('Cuéntanos qué servicio te interesa')) {
        console.error(`❌ [${vp.name}] CTA description mismatch: ${descText}`);
        hasErrors = true;
      } else {
        console.log(`✅ [${vp.name}] Description verified`);
      }

      // Check WhatsApp CTA Button
      const ctaBtn = ctaElement.locator('a[href*="wa.me"]');
      const ctaBtnCount = await ctaBtn.count();
      if (ctaBtnCount === 0) {
        console.error(`❌ [${vp.name}] WhatsApp CTA button not found`);
        hasErrors = true;
      } else {
        const btnText = (await ctaBtn.first().textContent() || '').trim();
        if (!btnText.includes('Consultar por WhatsApp')) {
          console.error(`❌ [${vp.name}] CTA button text mismatch: ${btnText}`);
          hasErrors = true;
        } else {
          console.log(`✅ [${vp.name}] WhatsApp CTA button verified: 'Consultar por WhatsApp'`);
        }
      }

      // Screenshot of Section 8
      const ctaScreenshotPath = path.join(SCREENSHOTS_DIR, `8_cta_${vp.name}_actual.png`);
      await ctaElement.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });
      await ctaElement.screenshot({
        path: ctaScreenshotPath,
      });
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
      console.log(`📸 [${vp.name}] CTA screenshot saved: ${path.relative(ROOT_DIR, ctaScreenshotPath)}`);
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
