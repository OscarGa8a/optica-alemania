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
      servicesScreenshot: '3_servicios_desktop_actual.png',
      techScreenshot: '4_tecnologia_desktop_actual.png',
      spaceScreenshot: '5_nuestro_espacio_desktop_actual.png',
      kidsVisionScreenshot: '6_visual_infantil_desktop_actual.png',
      framesScreenshot: '7_monturas_desktop_actual.png',
      cofremScreenshot: '8_club_descuentos_cofrem_desktop_actual.png',
      trajectoryScreenshot: '8_nuestra_trayectoria_desktop_actual.png',
      contactScreenshot: '9_contacto_desktop_actual.png',
      footerScreenshot: '10_footer_desktop_actual.png',
    },
    {
      name: 'mobile',
      width: 390,
      height: 844,
      heroScreenshot: '1_hero_mobile_actual.png',
      aboutScreenshot: '2_quienes_somos_mobile_actual.png',
      servicesScreenshot: '3_servicios_mobile_actual.png',
      techScreenshot: '4_tecnologia_mobile_actual.png',
      spaceScreenshot: '5_nuestro_espacio_mobile_actual.png',
      kidsVisionScreenshot: '6_visual_infantil_mobile_actual.png',
      framesScreenshot: '7_monturas_mobile_actual.png',
      cofremScreenshot: '8_club_descuentos_cofrem_mobile_actual.png',
      trajectoryScreenshot: '8_nuestra_trayectoria_mobile_actual.png',
      contactScreenshot: '9_contacto_mobile_actual.png',
      footerScreenshot: '10_footer_mobile_actual.png',
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

    // Home hero gradient and section typography use the existing design system.
    const designChecks = await page.evaluate(() => {
      const hero = document.querySelector('#inicio');
      const about = document.querySelector('#nosotros');
      const eyebrow = [...about.querySelectorAll('span')].find((span) => span.textContent.trim() === 'CONÓCENOS');
      const heroEyebrow = hero.querySelector('.text-brand-primary');
      const gradient = hero.querySelector('.bg-gradient-to-r');
      const cta = about.querySelector('[data-event="history_click"]');
      return {
        gradient: innerWidth < 1024
          ? getComputedStyle(gradient).display === 'none'
          : Math.abs(gradient.getBoundingClientRect().width - hero.getBoundingClientRect().width / 2) < 1,
        headingFont: getComputedStyle(about.querySelector('h2')).fontFamily === getComputedStyle(hero.querySelector('h1')).fontFamily,
        bodyFont: getComputedStyle(about.querySelector('p')).fontFamily === getComputedStyle(document.body).fontFamily,
        eyebrowColor: getComputedStyle(eyebrow).color === getComputedStyle(heroEyebrow).color,
        noRule: !eyebrow.parentElement.querySelector('[aria-hidden="true"]'),
        sharedLink: (cta.querySelector('span').classList.contains('border-current') || cta.querySelector('span').classList.contains('border-brand-primary')) && Boolean(cta.querySelector('svg')),
        tracking: cta.dataset.eventLocation === 'about_section',
      };
    });
    for (const [check, passed] of Object.entries(designChecks)) {
      console.log(`${passed ? '✅' : '❌'} [${vp.name}] Home design: ${check}`);
      if (!passed) failed = true;
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
      if (!headingText || !headingText.includes('Detrás de cada mirada')) {
        console.error(`❌ [${vp.name}] Expected H2 to include 'Detrás de cada mirada', got: '${headingText}'`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] H2 contains 'Detrás de cada mirada'`);
      }

      // Verify image rendered properly
      const imgNaturalWidth = await aboutSection.locator('img').evaluate((img) => img.naturalWidth);
      if (!imgNaturalWidth || imgNaturalWidth === 0) {
        console.error(`❌ [${vp.name}] About section image failed to load or has 0 naturalWidth!`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] About image loaded (naturalWidth: ${imgNaturalWidth}px)`);
      }

      // Verify hover zoom effect on About image
      const aboutHasHoverScale = await aboutSection.locator('img').evaluate((img) => {
        return [...img.classList].some((c) => c.startsWith('group-hover:scale-') || c.startsWith('hover:scale-'));
      });
      if (!aboutHasHoverScale) {
        console.error(`❌ [${vp.name}] Expected About image to have hover scale effect!`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] About image hover scale effect verified`);
      }

      // Verify CTA link
      const cta = aboutSection.locator('a[data-event="history_click"]');
      const ctaHref = await cta.getAttribute('href');
      if (ctaHref !== '/nosotros') {
        console.error(`❌ [${vp.name}] Expected CTA href='/nosotros', got: '${ctaHref}'`);
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

    // Section 3 — Nuestros Servicios verification
    const servicesSection = page.locator('#servicios');
    const servicesCount = await servicesSection.count();
    if (servicesCount === 0) {
      console.error(`❌ [${vp.name}] Section #servicios not found!`);
      failed = true;
    } else {
      console.log(`✅ [${vp.name}] Section #servicios exists`);

      // Verify heading text
      const headingText = await servicesSection.locator('h2').textContent();
      if (!headingText || !headingText.includes('Atención visual')) {
        console.error(`❌ [${vp.name}] Expected H2 to include 'Atención visual', got: '${headingText}'`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] H2 contains 'Atención visual'`);
      }

      // Verify services list items count (4 services)
      const serviceCards = servicesSection.locator('a[data-event="service_click"]');
      const cardsCount = await serviceCards.count();
      if (cardsCount !== 4) {
        console.error(`❌ [${vp.name}] Expected 4 service items, got: ${cardsCount}`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] 4 service items verified`);
      }

      // Verify featured image
      const featuredImgWidth = await servicesSection.locator('img').first().evaluate((img) => img.naturalWidth);
      if (!featuredImgWidth || featuredImgWidth === 0) {
        console.error(`❌ [${vp.name}] Featured image failed to load or has 0 naturalWidth!`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Services featured image loaded (naturalWidth: ${featuredImgWidth}px)`);
      }

      // Verify hover zoom effect on Services featured left image
      const servicesFeaturedHasHoverScale = await servicesSection.locator('img').first().evaluate((img) => {
        return [...img.classList].some((c) => c.startsWith('group-hover:scale-') || c.startsWith('hover:scale-'));
      });
      if (!servicesFeaturedHasHoverScale) {
        console.error(`❌ [${vp.name}] Expected Services featured image to have hover scale effect!`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Services featured image hover scale effect verified`);
      }

      // Verify CTA link
      const cta = servicesSection.locator('a[data-event="services_all_click"]');
      const ctaHref = await cta.getAttribute('href');
      if (ctaHref !== '/servicios') {
        console.error(`❌ [${vp.name}] Expected CTA href='/servicios', got: '${ctaHref}'`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Services CTA link verified (href: ${ctaHref})`);
      }

      // Scroll into view and screenshot the section without sticky header
      await servicesSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);

      // Temporarily hide sticky header for clean section screenshot
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });

      const servicesShotPath = path.join(SCREENSHOTS_DIR, vp.servicesScreenshot);
      await servicesSection.screenshot({ path: servicesShotPath });
      console.log(`📸 [${vp.name}] Servicios screenshot saved: ${path.relative(ROOT_DIR, servicesShotPath)}`);

      // Restore header visibility
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
    }

    // Section 4 — Tecnología en Acción verification
    const techSection = page.locator('#tecnologia');
    const techCount = await techSection.count();
    if (techCount === 0) {
      console.error(`❌ [${vp.name}] Section #tecnologia not found!`);
      failed = true;
    } else {
      console.log(`✅ [${vp.name}] Section #tecnologia exists`);

      // Verify heading text
      const headingText = await techSection.locator('h2').textContent();
      if (!headingText || !headingText.includes('La tecnología detrás')) {
        console.error(`❌ [${vp.name}] Expected H2 to include 'La tecnología detrás', got: '${headingText}'`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] H2 contains 'La tecnología detrás'`);
      }

      // Verify 2 technology showcase articles
      const techArticles = techSection.locator('article');
      const articlesCount = await techArticles.count();
      if (articlesCount !== 2) {
        console.error(`❌ [${vp.name}] Expected 2 technology articles, got: ${articlesCount}`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] 2 technology showcase items verified`);
      }

      // Verify showcase images loaded properly
      const techImages = techSection.locator('article img');
      const imgCount = await techImages.count();
      for (let i = 0; i < imgCount; i++) {
        const naturalWidth = await techImages.nth(i).evaluate((img) => img.naturalWidth);
        if (!naturalWidth || naturalWidth === 0) {
          console.error(`❌ [${vp.name}] Tech image ${i + 1} failed to load!`);
          failed = true;
        }
      }
      console.log(`✅ [${vp.name}] Tech images loaded successfully`);

      // Verify CTA links
      const ctas = techSection.locator('a[data-event="procedure_click"]');
      const ctaCount = await ctas.count();
      if (ctaCount !== 2) {
        console.error(`❌ [${vp.name}] Expected 2 procedure CTA links, got: ${ctaCount}`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] 2 procedure CTA links verified`);
      }

      // Scroll into view and screenshot the section without sticky header
      await techSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);

      // Temporarily hide sticky header for clean section screenshot
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });

      const techShotPath = path.join(SCREENSHOTS_DIR, vp.techScreenshot);
      await techSection.screenshot({ path: techShotPath });
      console.log(`📸 [${vp.name}] Tecnología screenshot saved: ${path.relative(ROOT_DIR, techShotPath)}`);

      // Restore header visibility
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
    }

    // Section 5 — Nuestro Espacio verification
    const spaceSection = page.locator('#espacio');
    const spaceCount = await spaceSection.count();
    if (spaceCount === 0) {
      console.error(`❌ [${vp.name}] Section #espacio not found!`);
      failed = true;
    } else {
      console.log(`✅ [${vp.name}] Section #espacio exists`);

      // Verify heading text
      const headingText = await spaceSection.locator('h2').textContent();
      if (!headingText || !headingText.includes('Conoce dónde')) {
        console.error(`❌ [${vp.name}] Expected H2 to include 'Conoce dónde', got: '${headingText}'`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] H2 contains 'Conoce dónde'`);
      }

      // Verify 3 showcase images loaded properly
      const spaceImages = spaceSection.locator('img');
      const imgCount = await spaceImages.count();
      if (imgCount !== 3) {
        console.error(`❌ [${vp.name}] Expected 3 space images, got: ${imgCount}`);
        failed = true;
      } else {
        for (let i = 0; i < imgCount; i++) {
          const naturalWidth = await spaceImages.nth(i).evaluate((img) => img.naturalWidth);
          if (!naturalWidth || naturalWidth === 0) {
            console.error(`❌ [${vp.name}] Space image ${i + 1} failed to load!`);
            failed = true;
          }
        }
        console.log(`✅ [${vp.name}] 3 space images loaded successfully`);
      }

      // Verify CTA links
      const ctas = spaceSection.locator('a[data-event="space_about_click"]');
      const ctaCount = await ctas.count();
      if (ctaCount < 1) {
        console.error(`❌ [${vp.name}] Expected space CTA link, got: ${ctaCount}`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Space CTA link verified`);
      }

      // Scroll into view and screenshot the section without sticky header
      await spaceSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);

      // Temporarily hide sticky header for clean section screenshot
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });

      const spaceShotPath = path.join(SCREENSHOTS_DIR, vp.spaceScreenshot);
      await spaceSection.screenshot({ path: spaceShotPath });
      console.log(`📸 [${vp.name}] Nuestro Espacio screenshot saved: ${path.relative(ROOT_DIR, spaceShotPath)}`);

      // Restore header visibility
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
    }

    // Section 6 — Salud Visual Infantil verification
    const kidsSection = page.locator('#infantil');
    const kidsCount = await kidsSection.count();
    if (kidsCount === 0) {
      console.error(`❌ [${vp.name}] Section #infantil not found!`);
      failed = true;
    } else {
      console.log(`✅ [${vp.name}] Section #infantil exists`);

      // Verify heading text
      const headingText = await kidsSection.locator('h2').textContent();
      if (!headingText || !headingText.includes('Su manera de')) {
        console.error(`❌ [${vp.name}] Expected H2 to include 'Su manera de', got: '${headingText}'`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] H2 contains 'Su manera de'`);
      }

      // Verify image loaded properly
      const kidsImage = kidsSection.locator('img');
      const naturalWidth = await kidsImage.evaluate((img) => img.naturalWidth);
      if (!naturalWidth || naturalWidth === 0) {
        console.error(`❌ [${vp.name}] Kids vision image failed to load!`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Kids vision image loaded successfully (naturalWidth: ${naturalWidth}px)`);
      }

      // Verify CTA link
      const ctas = kidsSection.locator('a[data-event="whatsapp_cta"][data-event-location="kids_vision"]');
      const ctaCount = await ctas.count();
      if (ctaCount < 1) {
        console.error(`❌ [${vp.name}] Expected kids vision CTA link, got: ${ctaCount}`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Kids vision CTA link verified`);
      }

      // Scroll into view and screenshot the section without sticky header
      await kidsSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);

      // Temporarily hide sticky header for clean section screenshot
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });

      const kidsShotPath = path.join(SCREENSHOTS_DIR, vp.kidsVisionScreenshot);
      await kidsSection.screenshot({ path: kidsShotPath });
      console.log(`📸 [${vp.name}] Salud Visual Infantil screenshot saved: ${path.relative(ROOT_DIR, kidsShotPath)}`);

      // Restore header visibility
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
    }

    // Section 7 — Monturas y Estilo verification
    const framesSection = page.locator('#monturas');
    const framesCount = await framesSection.count();
    if (framesCount === 0) {
      console.error(`❌ [${vp.name}] Section #monturas not found!`);
      failed = true;
    } else {
      console.log(`✅ [${vp.name}] Section #monturas exists`);

      // Verify heading text
      const headingText = await framesSection.locator('h2').textContent();
      if (!headingText || !headingText.includes('Una montura que')) {
        console.error(`❌ [${vp.name}] Expected H2 to include 'Una montura que', got: '${headingText}'`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] H2 contains 'Una montura que'`);
      }

      // Verify 3 categories exist
      const categoryLinks = framesSection.locator('a[data-event="frame_category_click"]');
      const catCount = await categoryLinks.count();
      if (catCount !== 3) {
        console.error(`❌ [${vp.name}] Expected 3 frame categories, got: ${catCount}`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] 3 frame categories verified (Mujer, Hombre, Niños)`);
      }

      // Verify images loaded properly
      const categoryImages = framesSection.locator('img');
      const imgCount = await categoryImages.count();
      let allLoaded = true;
      for (let i = 0; i < imgCount; i++) {
        const naturalWidth = await categoryImages.nth(i).evaluate((img) => img.naturalWidth);
        if (!naturalWidth || naturalWidth === 0) {
          allLoaded = false;
          break;
        }
      }
      if (!allLoaded) {
        console.error(`❌ [${vp.name}] One or more frame category images failed to load!`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] All frame category images loaded successfully`);
      }

      // Verify header CTA link
      const headerCta = framesSection.locator('a[data-event="whatsapp_cta"][data-event-location="frames_header"]');
      const headerCtaCount = await headerCta.count();
      if (headerCtaCount < 1) {
        console.error(`❌ [${vp.name}] Expected frames header CTA link, got: ${headerCtaCount}`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Frames header CTA link verified`);
      }

      // Scroll into view and screenshot the section without sticky header
      await framesSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);

      // Temporarily hide sticky header for clean section screenshot
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });

      const framesShotPath = path.join(SCREENSHOTS_DIR, vp.framesScreenshot);
      await framesSection.screenshot({ path: framesShotPath });
      console.log(`📸 [${vp.name}] Monturas screenshot saved: ${path.relative(ROOT_DIR, framesShotPath)}`);

      // Restore header visibility
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
    }

    // Section 7.5 — Club Descuentos Cofrem verification
    const cofremSection = page.locator('#cofrem');
    const cofremCount = await cofremSection.count();
    if (cofremCount === 0) {
      console.error(`❌ [${vp.name}] Section #cofrem not found!`);
      failed = true;
    } else {
      console.log(`✅ [${vp.name}] Section #cofrem exists`);

      // Verify heading text
      const headingText = await cofremSection.locator('h2').textContent();
      if (!headingText || !headingText.includes('Club descuentos')) {
        console.error(`❌ [${vp.name}] Expected H2 to include 'Club descuentos', got: '${headingText}'`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] H2 contains 'Club descuentos'`);
      }

      // Verify 2 discount benefit cards exist
      const benefitCards = cofremSection.locator('[data-cofrem-benefit]');
      const benefitCount = await benefitCards.count();
      if (benefitCount !== 2) {
        console.error(`❌ [${vp.name}] Expected 2 Cofrem benefit cards, got: ${benefitCount}`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] 2 Cofrem benefit cards verified (15% montura, 10% lente oftálmico)`);
      }

      // Verify Cofrem logo loaded properly
      const cofremLogo = cofremSection.locator('img');
      const logoNaturalWidth = await cofremLogo.first().evaluate((img) => img.naturalWidth);
      if (!logoNaturalWidth || logoNaturalWidth === 0) {
        console.error(`❌ [${vp.name}] Cofrem logo failed to load!`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Cofrem logo loaded successfully (naturalWidth: ${logoNaturalWidth}px)`);
      }

      // Verify WhatsApp CTA button
      const cofremCta = cofremSection.locator('a[data-event="whatsapp_cta"][data-event-location="cofrem_section"]');
      const cofremCtaCount = await cofremCta.count();
      if (cofremCtaCount < 1) {
        console.error(`❌ [${vp.name}] Expected Cofrem WhatsApp CTA button, got: ${cofremCtaCount}`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Cofrem WhatsApp CTA button verified`);
      }

      // Verify Cofrem benefit cards have rounded icon on the left in both mobile and desktop
      const iconLeftRounded = await cofremSection.evaluate((section) => {
        const cards = [...section.querySelectorAll('[data-cofrem-benefit]')];
        return cards.every((card) => {
          const iconWrap = card.firstElementChild;
          const textWrap = card.lastElementChild;
          if (!iconWrap || !textWrap) return false;
          const iconRect = iconWrap.getBoundingClientRect();
          const textRect = textWrap.getBoundingClientRect();
          const style = getComputedStyle(iconWrap);
          return iconRect.left < textRect.left && parseFloat(style.borderRadius) >= 20;
        });
      });
      if (!iconLeftRounded) {
        console.error(`❌ [${vp.name}] Expected Cofrem benefit cards to have rounded icon on the left!`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Cofrem benefit cards have rounded icon on the left`);
      }

      // Verify no arbitrary bracket Tailwind classes exist inside #cofrem
      const arbitraryClasses = await cofremSection.evaluate((section) => {
        const allElements = [section, ...section.querySelectorAll('*')];
        const found = [];
        for (const el of allElements) {
          for (const cls of el.classList) {
            if (cls.includes('[') && cls.includes(']')) {
              found.push(cls);
            }
          }
        }
        return found;
      });
      if (arbitraryClasses.length > 0) {
        console.error(`❌ [${vp.name}] Found arbitrary Tailwind classes in #cofrem: ${arbitraryClasses.join(', ')}`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] 0 arbitrary Tailwind classes in #cofrem`);
      }

      // Scroll into view and screenshot the section without sticky header
      await cofremSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);

      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });

      const cofremShotPath = path.join(SCREENSHOTS_DIR, vp.cofremScreenshot);
      await cofremSection.screenshot({ path: cofremShotPath });
      console.log(`📸 [${vp.name}] Club Descuentos Cofrem screenshot saved: ${path.relative(ROOT_DIR, cofremShotPath)}`);

      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
    }

    // Section 8 — Nuestra Trayectoria verification
    const trajectorySection = page.locator('#trayectoria');
    const trajectoryCount = await trajectorySection.count();
    if (trajectoryCount === 0) {
      console.error(`❌ [${vp.name}] Section #trayectoria not found!`);
      failed = true;
    } else {
      console.log(`✅ [${vp.name}] Section #trayectoria exists`);

      // Verify heading text
      const headingText = await trajectorySection.locator('h2').textContent();
      if (!headingText || !headingText.includes('Empresas que han')) {
        console.error(`❌ [${vp.name}] Expected H2 to include 'Empresas que han', got: '${headingText}'`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] H2 contains 'Empresas que han'`);
      }

      // Verify organization logos loaded properly
      const orgImages = trajectorySection.locator('img');
      const imgCount = await orgImages.count();
      let allLoaded = true;
      for (let i = 0; i < imgCount; i++) {
        const naturalWidth = await orgImages.nth(i).evaluate((img) => img.naturalWidth);
        if (!naturalWidth || naturalWidth === 0) {
          allLoaded = false;
          break;
        }
      }
      if (!allLoaded || imgCount === 0) {
        console.error(`❌ [${vp.name}] One or more organization logos failed to load! (found ${imgCount})`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] All organization logos loaded successfully (${imgCount} images checked)`);
      }

      // Scroll into view and screenshot the section without sticky header
      await trajectorySection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);

      // Temporarily hide sticky header for clean section screenshot
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });

      const trajectoryShotPath = path.join(SCREENSHOTS_DIR, vp.trajectoryScreenshot);
      await trajectorySection.screenshot({ path: trajectoryShotPath });
      console.log(`📸 [${vp.name}] Trayectoria screenshot saved: ${path.relative(ROOT_DIR, trajectoryShotPath)}`);

      // Restore header visibility
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
    }

    // Section 9 — Contacto y Ubicación verification
    const contactSection = page.locator('#contacto');
    const contactCount = await contactSection.count();
    if (contactCount === 0) {
      console.error(`❌ [${vp.name}] Section #contacto not found!`);
      failed = true;
    } else {
      console.log(`✅ [${vp.name}] Section #contacto exists`);

      // Verify heading text
      const headingText = await contactSection.locator('h2').textContent();
      if (!headingText || !headingText.includes('Nos vemos')) {
        console.error(`❌ [${vp.name}] Expected H2 to include 'Nos vemos', got: '${headingText}'`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] H2 contains 'Nos vemos'`);
      }

      // Verify images loaded properly
      const images = contactSection.locator('img');
      const imgCount = await images.count();
      let allLoaded = true;
      for (let i = 0; i < imgCount; i++) {
        const naturalWidth = await images.nth(i).evaluate((img) => img.naturalWidth);
        if (!naturalWidth || naturalWidth === 0) {
          allLoaded = false;
          break;
        }
      }
      if (!allLoaded || imgCount === 0) {
        console.error(`❌ [${vp.name}] One or more contact images failed to load! (found ${imgCount})`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] All contact images loaded successfully (${imgCount} images checked)`);
      }

      // Verify WhatsApp button link
      const whatsappBtn = contactSection.locator('a[data-event="whatsapp_cta"][data-event-location="contact_section"]');
      const btnCount = await whatsappBtn.count();
      if (btnCount === 0) {
        console.error(`❌ [${vp.name}] WhatsApp CTA button not found!`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] WhatsApp CTA button verified`);
      }

      // Verify contact items are vertically stacked (not 4-col horizontal grid) on all viewports
      const contactItemsVertical = await contactSection.evaluate((section) => {
        const list = section.querySelector('[data-contact-list]');
        if (!list) return false;
        const items = [...list.children];
        if (items.length !== 4) return false;
        for (let i = 1; i < items.length; i++) {
          if (items[i].getBoundingClientRect().top <= items[i - 1].getBoundingClientRect().top) {
            return false;
          }
        }
        return true;
      });
      if (!contactItemsVertical) {
        console.error(`❌ [${vp.name}] Expected contact items to be vertically stacked!`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Contact items vertically stacked verified`);
      }

      // Scroll into view and screenshot the section without sticky header
      await contactSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);

      // Temporarily hide sticky header for clean section screenshot
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });

      const contactShotPath = path.join(SCREENSHOTS_DIR, vp.contactScreenshot);
      await contactSection.screenshot({ path: contactShotPath });
      console.log(`📸 [${vp.name}] Contacto screenshot saved: ${path.relative(ROOT_DIR, contactShotPath)}`);

      // Restore header visibility
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });

      // Interactive Verification — Route Video Modal (<dialog>) with WAAPI
      const modalTrigger = contactSection.locator('button[data-open-video-modal="home-como-llegar-video-modal"]');
      if (await modalTrigger.count() > 0) {
        await modalTrigger.click();
        const dialog = page.locator('#home-como-llegar-video-modal');
        await dialog.waitFor({ state: 'visible', timeout: 3000 });
        console.log(`✅ [${vp.name}] Route video modal opened successfully with WAAPI`);

        // Close via Escape with WAAPI smooth exit
        await page.keyboard.press('Escape');
        await dialog.waitFor({ state: 'hidden', timeout: 2000 });
        console.log(`✅ [${vp.name}] Route video modal closed successfully via Escape with WAAPI`);
      }
    }

    // Section 10 — Footer Institucional verification
    const footerElement = page.locator('#footer');
    const footerCount = await footerElement.count();
    if (footerCount === 0) {
      console.error(`❌ [${vp.name}] Section #footer not found!`);
      failed = true;
    } else {
      console.log(`✅ [${vp.name}] Section #footer exists`);

      // Verify footer logo loaded properly
      const footerLogo = footerElement.locator('img[src*="logo"]');
      const logoWidth = await footerLogo.first().evaluate((img) => img.naturalWidth);
      if (!logoWidth || logoWidth === 0) {
        console.error(`❌ [${vp.name}] Footer logo failed to load or has 0 naturalWidth!`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Footer logo loaded successfully (naturalWidth: ${logoWidth}px)`);
      }

      // Verify watermark image loaded properly
      const watermarkImg = footerElement.locator('img[src*="asset.svg"]');
      const watermarkWidth = await watermarkImg.first().evaluate((img) => img.naturalWidth);
      if (!watermarkWidth || watermarkWidth === 0) {
        console.error(`❌ [${vp.name}] Footer watermark image failed to load or has 0 naturalWidth!`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Footer watermark loaded successfully (naturalWidth: ${watermarkWidth}px)`);
      }

      // Verify navigation links
      const navLinks = footerElement.locator('a[data-event="footer_nav_click"]');
      const navCount = await navLinks.count();
      if (navCount === 0) {
        console.error(`❌ [${vp.name}] No footer nav links found!`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Footer nav links verified (${navCount} links found)`);
      }

      // Verify social/whatsapp links
      const whatsappLink = footerElement.locator('a[data-event="footer_whatsapp_click"]');
      const whatsappCount = await whatsappLink.count();
      if (whatsappCount === 0) {
        console.error(`❌ [${vp.name}] Footer WhatsApp link not found!`);
        failed = true;
      } else {
        console.log(`✅ [${vp.name}] Footer WhatsApp link verified`);
      }

      // Scroll into view and screenshot the footer
      await footerElement.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);

      // Temporarily hide sticky header for clean screenshot
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = 'none';
      });

      const footerShotPath = path.join(SCREENSHOTS_DIR, vp.footerScreenshot);
      await footerElement.screenshot({ path: footerShotPath });
      console.log(`📸 [${vp.name}] Footer screenshot saved: ${path.relative(ROOT_DIR, footerShotPath)}`);

      // Restore header visibility
      await page.evaluate(() => {
        const header = document.querySelector('header');
        if (header) header.style.display = '';
      });
    }

    // Interactive Verification — Mobile Menu Drawer (Mobile viewport only)
    if (vp.name === 'mobile') {
      const menuBtn = page.locator('#mobile-menu-button');
      const mobileMenu = page.locator('#mobile-menu');
      if (await menuBtn.count() > 0 && await mobileMenu.count() > 0) {
        await menuBtn.click();
        await page.waitForTimeout(220);
        const isMenuOpen = await mobileMenu.evaluate((el) => !el.classList.contains('hidden'));
        if (isMenuOpen) {
          console.log(`✅ [${vp.name}] Mobile drawer opened smoothly with WAAPI`);
        } else {
          console.error(`❌ [${vp.name}] Mobile drawer failed to open!`);
          failed = true;
        }

        await menuBtn.click();
        await page.waitForTimeout(180);
        const isMenuClosed = await mobileMenu.evaluate((el) => el.classList.contains('hidden'));
        if (isMenuClosed) {
          console.log(`✅ [${vp.name}] Mobile drawer closed smoothly with WAAPI`);
        } else {
          console.error(`❌ [${vp.name}] Mobile drawer failed to close!`);
          failed = true;
        }
      }
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
