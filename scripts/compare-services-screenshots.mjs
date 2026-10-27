import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_SERVICES = path.resolve(ROOT_DIR, 'docs', 'services');
const SCREENSHOTS_DIR = path.resolve(ROOT_DIR, 'docs', 'screenshots', 'services');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

// Brand frame background color: deep clinic navy #182D53
const BG_COLOR = { r: 24, g: 45, b: 83, alpha: 1 };

const SECTIONS = [
  {
    id: '1_hero',
    name: 'Sección 1 — Hero de Servicios',
    mockupDesktop: path.join(DOCS_SERVICES, '1_hero_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '1_hero_desktop_actual.png'),
    mockupMobile: path.join(DOCS_SERVICES, '1_hero_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '1_hero_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '1_hero_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '1_hero_mobile_comparison.png'),
    desktopHeight: 810,
    mobileHeight: 844,
  },
  {
    id: '2_overview',
    name: 'Sección 2 — Explora nuestros servicios',
    mockupDesktop: path.join(DOCS_SERVICES, '2_nuestros_servicios_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '2_overview_desktop_actual.png'),
    mockupMobile: path.join(DOCS_SERVICES, '2_nuestros_servicios_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '2_overview_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '2_overview_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '2_overview_mobile_comparison.png'),
    desktopHeight: 710,
    mobileHeight: 640,
  },
  {
    id: '3_atencion_visual',
    name: 'Sección 3 — 01 / Atención visual a tu medida',
    mockupDesktop: path.join(DOCS_SERVICES, '3_atencion_visual_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '3_atencion_visual_desktop_actual.png'),
    mockupMobile: path.join(DOCS_SERVICES, '3_atencion_visual_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '3_atencion_visual_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '3_atencion_visual_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '3_atencion_visual_mobile_comparison.png'),
    desktopHeight: null, // auto-calculated from content
    mobileHeight: null, // auto-calculated from content
  },
  {
    id: '4_evaluaciones_especializadas',
    name: 'Sección 4 — 02 / Evaluaciones especializadas',
    mockupDesktop: path.join(DOCS_SERVICES, '4_evaluaciones_especializadas_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '4_evaluaciones_especializadas_desktop_actual.png'),
    mockupMobile: path.join(DOCS_SERVICES, '4_evaluaciones_especializadas_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '4_evaluaciones_especializadas_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '4_evaluaciones_especializadas_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '4_evaluaciones_especializadas_mobile_comparison.png'),
    desktopHeight: null,
    mobileHeight: null,
  },
  {
    id: '5_urgencias_oculares',
    name: 'Sección 5 — 03 / Urgencias oculares',
    mockupDesktop: path.join(DOCS_SERVICES, '5_urgencias_oculares_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '5_urgencias_oculares_desktop_actual.png'),
    mockupMobile: path.join(DOCS_SERVICES, '5_urgencias_oculares_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '5_urgencias_oculares_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '5_urgencias_oculares_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '5_urgencias_oculares_mobile_comparison.png'),
    desktopHeight: null,
    mobileHeight: null,
  },
  {
    id: '6_procedimientos',
    name: 'Sección 6 — 04 / Procedimientos en video',
    mockupDesktop: path.join(DOCS_SERVICES, '6_procedimiento_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '6_procedimientos_desktop_actual.png'),
    mockupMobile: path.join(DOCS_SERVICES, '6_procedimiento_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '6_procedimientos_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '6_procedimientos_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '6_procedimientos_mobile_comparison.png'),
    desktopHeight: null,
    mobileHeight: null,
  },
  {
    id: '7_faq',
    name: 'Sección 7 — 07 / Preguntas frecuentes',
    mockupDesktop: path.join(DOCS_SERVICES, '7_faq_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '7_faq_desktop_actual.png'),
    mockupMobile: path.join(DOCS_SERVICES, '7_faq_desktop_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '7_faq_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '7_faq_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '7_faq_mobile_comparison.png'),
    desktopHeight: null,
    mobileHeight: null,
  },
  {
    id: '8_cta',
    name: 'Sección 8 — Tu próximo paso / CTA Cierre',
    mockupDesktop: path.join(DOCS_SERVICES, '7_contacto_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '8_cta_desktop_actual.png'),
    mockupMobile: path.join(DOCS_SERVICES, '7_contacto_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '8_cta_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '8_cta_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '8_cta_mobile_comparison.png'),
    desktopHeight: null,
    mobileHeight: null,
  },
];

async function createSideBySide(mockupPath, actualPath, outputPath, title, isMobile = false, customHeight = null) {
  if (!fs.existsSync(mockupPath)) {
    console.warn(`⚠️ Mockup not found: ${path.relative(ROOT_DIR, mockupPath)}`);
    return false;
  }
  if (!fs.existsSync(actualPath)) {
    console.warn(`⚠️ Actual screenshot not found: ${path.relative(ROOT_DIR, actualPath)}`);
    return false;
  }

  const mockupMeta = await sharp(mockupPath).metadata();
  const actualMeta = await sharp(actualPath).metadata();

  const targetWidth = isMobile ? 390 : 1440;
  const scaledMockupHeight = Math.round(mockupMeta.height * (targetWidth / mockupMeta.width));
  const scaledActualHeight = Math.round(actualMeta.height * (targetWidth / actualMeta.width));
  const targetHeight = customHeight || Math.max(scaledMockupHeight, scaledActualHeight);

  // Resize both to identical dimensions for clean 1:1 side-by-side comparison without cropping
  const resizedMockup = await sharp(mockupPath)
    .resize(targetWidth, targetHeight, {
      fit: 'contain',
      position: 'top',
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .toBuffer();

  const resizedActual = await sharp(actualPath)
    .resize(targetWidth, targetHeight, {
      fit: 'contain',
      position: 'top',
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .toBuffer();

  const headerHeight = isMobile ? 70 : 60;
  const padding = 20;
  const totalWidth = targetWidth * 2 + padding * 3;
  const totalHeight = targetHeight + headerHeight + padding * 2;

  // Header banner SVG overlay
  const headerSvg = Buffer.from(
    isMobile
      ? `
    <svg width="${totalWidth}" height="${headerHeight}" xmlns="http://www.w3.org/2000/svg">
      <style>
        .title { fill: #FFFFFF; font-family: system-ui, sans-serif; font-size: 14px; font-weight: 600; letter-spacing: 0.05em; }
        .label-left { fill: #93C5FD; font-family: system-ui, sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; }
        .label-right { fill: #34D399; font-family: system-ui, sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.08em; }
      </style>
      <rect x="0" y="0" width="${totalWidth}" height="${headerHeight}" fill="#0f1f38" />
      <text x="${totalWidth / 2}" y="26" text-anchor="middle" class="title">${title}</text>
      <text x="${padding + targetWidth / 2}" y="52" text-anchor="middle" class="label-left">◀ MOCKUP OFICIAL</text>
      <text x="${padding * 2 + targetWidth + targetWidth / 2}" y="52" text-anchor="middle" class="label-right">IMPLEMENTACIÓN PLAYWRIGHT ▶</text>
    </svg>`
      : `
    <svg width="${totalWidth}" height="${headerHeight}" xmlns="http://www.w3.org/2000/svg">
      <style>
        .title { fill: #FFFFFF; font-family: system-ui, sans-serif; font-size: 16px; font-weight: 600; letter-spacing: 0.05em; }
        .label-left { fill: #93C5FD; font-family: system-ui, sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.1em; }
        .label-right { fill: #34D399; font-family: system-ui, sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.1em; }
      </style>
      <rect x="0" y="0" width="${totalWidth}" height="${headerHeight}" fill="#0f1f38" />
      <text x="${padding}" y="36" class="title">${title}</text>
      <text x="${padding + targetWidth / 2}" y="36" text-anchor="middle" class="label-left">◀ MOCKUP OFICIAL</text>
      <text x="${padding * 2 + targetWidth + targetWidth / 2}" y="36" text-anchor="middle" class="label-right">IMPLEMENTACIÓN PLAYWRIGHT ▶</text>
    </svg>`
  );

  await sharp({
    create: {
      width: totalWidth,
      height: totalHeight,
      channels: 4,
      background: BG_COLOR,
    },
  })
    .composite([
      { input: headerSvg, top: 0, left: 0 },
      { input: resizedMockup, top: headerHeight + padding, left: padding },
      { input: resizedActual, top: headerHeight + padding, left: padding * 2 + targetWidth },
    ])
    .png({ quality: 90 })
    .toFile(outputPath);

  console.log(`🖼️  Comparison saved: ${path.relative(ROOT_DIR, outputPath)} (${totalWidth}x${totalHeight})`);
  return true;
}

async function run() {
  console.log('🎨 Generating Concept Demo Side-by-Side Visual Comparisons for Servicios...\n');

  for (const section of SECTIONS) {
    console.log(`📦 Processing ${section.name}...`);
    // Desktop comparison
    await createSideBySide(
      section.mockupDesktop,
      section.actualDesktop,
      section.desktopComparisonOut,
      `${section.name} — Desktop (1440px)`,
      false,
      section.desktopHeight
    );

    // Mobile comparison
    await createSideBySide(
      section.mockupMobile,
      section.actualMobile,
      section.mobileComparisonOut,
      `${section.name} — Mobile (390px)`,
      true,
      section.mobileHeight
    );
  }

  console.log('\n✨ All visual comparisons generated successfully!');
}

run().catch((err) => {
  console.error('Error generating comparisons:', err);
  process.exit(1);
});
