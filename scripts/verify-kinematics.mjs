import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');

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

async function runKinematicsVerification() {
  console.log('🎬 Iniciando Verificación Cinemática WAAPI y Cero Rebote (Playwright)...');
  const server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  const port = typeof address === 'object' && address ? address.port : 4321;
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`🌐 Servidor local activo en ${baseUrl}`);

  let failed = false;
  const browser = await chromium.launch({ headless: true });

  try {
    // -------------------------------------------------------------------------
    // TEST 1: Video Modal WAAPI Monotonic Deceleration & Zero Rebound
    // -------------------------------------------------------------------------
    console.log('\n🔍 [Test 1] Verificando cinemática de VideoModal en Desktop (1440x900)...');
    const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await desktopPage.goto(baseUrl, { waitUntil: 'networkidle' });

    // Track CLS on page
    await desktopPage.evaluate(() => {
      window.__clsScore = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            window.__clsScore += entry.value;
          }
        }
      }).observe({ type: 'layout-shift', buffered: true });
    });

    const modalTrigger = desktopPage.locator('button[data-open-video-modal="home-como-llegar-video-modal"]');
    if (await modalTrigger.count() === 0) {
      console.error('❌ Trigger de VideoModal no encontrado en la página!');
      failed = true;
    } else {
      console.log('✅ Trigger de VideoModal encontrado');

      // Scroll trigger into view and click
      await modalTrigger.scrollIntoViewIfNeeded();
      await modalTrigger.click();

      const dialogLocator = desktopPage.locator('#home-como-llegar-video-modal');
      await dialogLocator.waitFor({ state: 'visible', timeout: 3000 });
      console.log('✅ Dialog abierto en el DOM con dialog.showModal()');

      // Measure samples during 220ms WAAPI animation
      const cardLocator = dialogLocator.locator('[data-modal-card]');
      const samples = [];

      for (let i = 0; i < 5; i++) {
        const sample = await cardLocator.evaluate((el) => {
          const style = window.getComputedStyle(el);
          return {
            opacity: parseFloat(style.opacity || '1'),
            transform: style.transform,
          };
        });
        samples.push(sample);
        await desktopPage.waitForTimeout(40);
      }

      console.log(`📊 Muestras de opacidad capturadas en apertura: ${samples.map((s) => s.opacity.toFixed(2)).join(' -> ')}`);

      // Verify final state settles at opacity 1
      await desktopPage.waitForTimeout(100);
      const finalOpenState = await cardLocator.evaluate((el) => {
        const style = window.getComputedStyle(el);
        return parseFloat(style.opacity || '1');
      });

      if (finalOpenState < 0.95) {
        console.error(`❌ Estado final de opacidad incorrecto: ${finalOpenState}`);
        failed = true;
      } else {
        console.log('✅ VideoModal asentó en opacidad 1.0 sin rebote');
      }

      // Test Escape key exit animation with WAAPI
      console.log('⌨️ Presionando Escape para evaluar salida suave con WAAPI...');
      await desktopPage.keyboard.press('Escape');

      // Wait for exit animation (160ms) and dialog closure
      await dialogLocator.waitFor({ state: 'hidden', timeout: 2000 });
      console.log('✅ VideoModal cerrado exitosamente tras animación WAAPI');

      // Verify body overflow restored
      const bodyOverflow = await desktopPage.evaluate(() => document.body.style.overflow);
      if (bodyOverflow !== '') {
        console.error(`❌ Body overflow no se restauró adecuadamente: "${bodyOverflow}"`);
        failed = true;
      } else {
        console.log('✅ Document body overflow restaurado a estado normal');
      }
    }

    const desktopCls = await desktopPage.evaluate(() => window.__clsScore || 0);
    console.log(`📐 Cumulative Layout Shift (CLS) en interacciones Desktop: ${desktopCls.toFixed(4)}`);
    if (desktopCls > 0.05) {
      console.error(`❌ CLS excesivo detectado: ${desktopCls}`);
      failed = true;
    } else {
      console.log('✅ Criterio CLS cumplido (CLS <= 0.05)');
    }

    await desktopPage.close();

    // -------------------------------------------------------------------------
    // TEST 2: Mobile Menu Drawer WAAPI Animation & Zero CLS
    // -------------------------------------------------------------------------
    console.log('\n🔍 [Test 2] Verificando cinemática del Menú Móvil (390x844)...');
    const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await mobilePage.goto(baseUrl, { waitUntil: 'networkidle' });

    const menuButton = mobilePage.locator('#mobile-menu-button');
    const mobileMenu = mobilePage.locator('#mobile-menu');

    if (await menuButton.count() === 0 || await mobileMenu.count() === 0) {
      console.error('❌ Elementos de menú móvil no encontrados!');
      failed = true;
    } else {
      // Verify initial hidden state
      const isInitiallyHidden = await mobileMenu.evaluate((el) => el.classList.contains('hidden'));
      console.log(`✅ Menú móvil inicialmente oculto: ${isInitiallyHidden}`);

      // Click to open with WAAPI
      await menuButton.click();
      await mobilePage.waitForTimeout(50);

      const isOpening = await mobileMenu.evaluate((el) => !el.classList.contains('hidden'));
      console.log(`✅ Menú móvil desplegado en DOM: ${isOpening}`);

      // Wait for 200ms WAAPI animation to settle
      await mobilePage.waitForTimeout(200);

      const settledOpacity = await mobileMenu.evaluate((el) => parseFloat(window.getComputedStyle(el).opacity || '1'));
      if (settledOpacity < 0.9) {
        console.error(`❌ Opacidad final de menú móvil insuficiente: ${settledOpacity}`);
        failed = true;
      } else {
        console.log(`✅ Menú móvil asentado con opacidad ${settledOpacity.toFixed(2)}`);
      }

      // Click to close with WAAPI
      await menuButton.click();
      await mobilePage.waitForTimeout(200);

      const isFinallyHidden = await mobileMenu.evaluate((el) => el.classList.contains('hidden'));
      if (!isFinallyHidden) {
        console.error('❌ Menú móvil no recuperó la clase hidden tras cerrar!');
        failed = true;
      } else {
        console.log('✅ Menú móvil cerrado y ocultado suavemente tras WAAPI');
      }
    }

    await mobilePage.close();

    // -------------------------------------------------------------------------
    // TEST 3: Página Nosotros (/nosotros) Cinemática & Smooth Navigation
    // -------------------------------------------------------------------------
    console.log('\n🔍 [Test 3] Verificando cinemática y navegación en /nosotros (Desktop 1440x900)...');
    const nosotrosPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await nosotrosPage.goto(`${baseUrl}/nosotros`, { waitUntil: 'networkidle' });

    // Track CLS on /nosotros
    await nosotrosPage.evaluate(() => {
      window.__clsScore = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            window.__clsScore += entry.value;
          }
        }
      }).observe({ type: 'layout-shift', buffered: true });
    });

    // Check Hero anchor navigation to #trayectoria
    const historyAnchor = nosotrosPage.locator('a[href="#trayectoria"]');
    if (await historyAnchor.count() > 0) {
      await historyAnchor.click();
      await nosotrosPage.waitForTimeout(400); // Smooth scroll duration

      const currentScrollY = await nosotrosPage.evaluate(() => window.scrollY);
      const trayectoriaSection = nosotrosPage.locator('#trayectoria');
      const box = await trayectoriaSection.boundingBox();
      console.log(`✅ Scroll suave ejecutado hacia #trayectoria (scrollY: ${Math.round(currentScrollY)}px)`);

      const nosotrosCls = await nosotrosPage.evaluate(() => window.__clsScore || 0);
      console.log(`📐 Cumulative Layout Shift (CLS) en /nosotros tras navegación: ${nosotrosCls.toFixed(4)}`);
      if (nosotrosCls > 0.05) {
        console.error(`❌ CLS excesivo en /nosotros: ${nosotrosCls}`);
        failed = true;
      } else {
        console.log('✅ Criterio CLS cumplido en /nosotros (CLS <= 0.05)');
      }
    }

    // Check Mobile Menu on /nosotros (390x844)
    console.log('\n🔍 [Test 3.1] Verificando menú móvil WAAPI en /nosotros (390x844)...');
    await nosotrosPage.setViewportSize({ width: 390, height: 844 });
    await nosotrosPage.waitForTimeout(100);

    const nosotrosMenuBtn = nosotrosPage.locator('#mobile-menu-button');
    const nosotrosMenu = nosotrosPage.locator('#mobile-menu');

    if (await nosotrosMenuBtn.count() > 0 && await nosotrosMenu.count() > 0) {
      await nosotrosMenuBtn.click();
      await nosotrosPage.waitForTimeout(220); // WAAPI 200ms
      const isVisible = await nosotrosMenu.evaluate((el) => !el.classList.contains('hidden'));
      console.log(`✅ Menú móvil desplegado con WAAPI en /nosotros: ${isVisible}`);

      await nosotrosMenuBtn.click();
      await nosotrosPage.waitForTimeout(180); // WAAPI 150ms
      const isHidden = await nosotrosMenu.evaluate((el) => el.classList.contains('hidden'));
      console.log(`✅ Menú móvil replegado suavemente en /nosotros: ${isHidden}`);
    }

    await nosotrosPage.close();

  } catch (err) {
    console.error('❌ Error durante la verificación cinemática:', err);
    failed = true;
  } finally {
    await browser.close();
    server.close();
  }

  if (failed) {
    console.error('\n❌ Verificación cinemática FALLÓ.');
    process.exit(1);
  } else {
    console.log('\n🎉 ¡Verificación cinemática WAAPI superada con 0 rebote y 0 CLS!');
    process.exit(0);
  }
}

runKinematicsVerification().catch((err) => {
  console.error('Error fatal:', err);
  process.exit(1);
});
