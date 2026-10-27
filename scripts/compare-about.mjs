import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_ABOUT = path.resolve(ROOT_DIR, 'docs', 'about');
const SCREENSHOTS_DIR = path.resolve(ROOT_DIR, 'docs', 'screenshots', 'about');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

// Brand frame background color: deep clinic navy #182D53
const BG_COLOR = { r: 24, g: 45, b: 83, alpha: 1 };

const SECTIONS = [
  {
    id: '1_hero',
    name: 'Sección 1 — Hero Sobre Nosotros',
    mockupDesktop: path.join(DOCS_ABOUT, '1_hero_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '1_hero_desktop_actual.png'),
    mockupMobile: path.join(DOCS_ABOUT, '1_hero_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '1_hero_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '1_hero_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '1_hero_mobile_comparison.png'),
  },
  {
    id: '2_trayectoria',
    name: 'Sección 2 — Nuestra Trayectoria',
    mockupDesktop: path.join(DOCS_ABOUT, '2_nuestra_trayectoria_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '2_nuestra_trayectoria_desktop_actual.png'),
    mockupMobile: path.join(DOCS_ABOUT, '2_nuestra_trayectoria_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '2_nuestra_trayectoria_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '2_nuestra_trayectoria_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '2_nuestra_trayectoria_mobile_comparison.png'),
  },
  {
    id: '3_proposito',
    name: 'Sección 3 — Nuestro Propósito',
    mockupDesktop: path.join(DOCS_ABOUT, '3_nuestro_proposito_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '3_nuestro_proposito_desktop_actual.png'),
    mockupMobile: path.join(DOCS_ABOUT, '3_nuestro_proposito_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '3_nuestro_proposito_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '3_nuestro_proposito_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '3_nuestro_proposito_mobile_comparison.png'),
  },
  {
    id: '4_equipo',
    name: 'Sección 4 — Nuestro Equipo',
    mockupDesktop: path.join(DOCS_ABOUT, '4_nuestro_equipo_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '4_nuestro_equipo_desktop_actual.png'),
    mockupMobile: path.join(DOCS_ABOUT, '4_nuestro_equipo_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '4_nuestro_equipo_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '4_nuestro_equipo_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '4_nuestro_equipo_mobile_comparison.png'),
  },
  {
    id: '5_espacios',
    name: 'Sección 5 — Nuestros Espacios',
    mockupDesktop: path.join(DOCS_ABOUT, '5_nuestros_espacio_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '5_nuestros_espacio_desktop_actual.png'),
    mockupMobile: path.join(DOCS_ABOUT, '5_nuestros_espacio_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '5_nuestros_espacio_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '5_nuestros_espacio_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '5_nuestros_espacio_mobile_comparison.png'),
  },
  {
    id: '6_cta',
    name: 'Sección 6 — Estamos Para Ti',
    mockupDesktop: path.join(DOCS_ABOUT, '6_estamos_para_ti_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '6_estamos_para_ti_desktop_actual.png'),
    mockupMobile: path.join(DOCS_ABOUT, '6_estamos_para_ti_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '6_estamos_para_ti_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '6_estamos_para_ti_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '6_estamos_para_ti_mobile_comparison.png'),
  },
];

async function createSideBySide(
  mockupPath,
  actualPath,
  outputPath,
  targetHeight = 900
) {
  if (!fs.existsSync(mockupPath)) {
    console.warn(`⚠️ Mockup no encontrado: ${mockupPath}`);
    return false;
  }
  if (!fs.existsSync(actualPath)) {
    console.warn(`⚠️ Render actual no encontrado: ${actualPath}`);
    return false;
  }

  const mockBuffer = await sharp(mockupPath).resize({ height: targetHeight }).toBuffer();
  const mockMeta = await sharp(mockBuffer).metadata();

  const actualBuffer = await sharp(actualPath).resize({ height: targetHeight }).toBuffer();
  const actualMeta = await sharp(actualBuffer).metadata();

  const headerHeight = 60;
  const padding = 20;
  const separatorWidth = 4;
  const totalWidth = (mockMeta.width || 0) + (actualMeta.width || 0) + padding * 3 + separatorWidth;
  const totalHeight = targetHeight + headerHeight + padding * 2;

  const mockTitleX = padding + Math.floor((mockMeta.width || 0) / 2);
  const actualTitleX = padding * 2 + (mockMeta.width || 0) + separatorWidth + Math.floor((actualMeta.width || 0) / 2);
  const separatorX = padding + (mockMeta.width || 0) + Math.floor(padding / 2);

  const headerSvg = `
    <svg width="${totalWidth}" height="${headerHeight}">
      <text x="${mockTitleX}" y="40" font-family="sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">
        MOCKUP (DESIGN SPEC)
      </text>
      <text x="${actualTitleX}" y="40" font-family="sans-serif" font-size="20" font-weight="bold" fill="#4C93F7" text-anchor="middle">
        RENDER ACTUAL (PLAYWRIGHT)
      </text>
    </svg>
  `;

  const separatorSvg = `
    <svg width="${separatorWidth}" height="${targetHeight}">
      <rect width="${separatorWidth}" height="${targetHeight}" fill="#3B5278" />
    </svg>
  `;

  await sharp({
    create: {
      width: totalWidth,
      height: totalHeight,
      channels: 4,
      background: BG_COLOR,
    },
  })
    .composite([
      {
        input: Buffer.from(headerSvg),
        top: padding,
        left: 0,
      },
      {
        input: mockBuffer,
        top: headerHeight + padding,
        left: padding,
      },
      {
        input: Buffer.from(separatorSvg),
        top: headerHeight + padding,
        left: separatorX,
      },
      {
        input: actualBuffer,
        top: headerHeight + padding,
        left: padding * 2 + (mockMeta.width || 0) + separatorWidth,
      },
    ])
    .png()
    .toFile(outputPath);

  return true;
}

async function run() {
  console.log('🔍 Generando comparativas visuales side-by-side de la página Nosotros...\n');

  for (const sec of SECTIONS) {
    console.log(`📌 Procesando: ${sec.name}`);

    // Desktop comparison (1440px / 900h)
    const deskSuccess = await createSideBySide(
      sec.mockupDesktop,
      sec.actualDesktop,
      sec.desktopComparisonOut,
      900
    );
    if (deskSuccess) {
      console.log(`   ✅ Desktop comparación creada -> ${path.basename(sec.desktopComparisonOut)}`);
    }

    // Mobile comparison (390px / 844h)
    const mobSuccess = await createSideBySide(
      sec.mockupMobile,
      sec.actualMobile,
      sec.mobileComparisonOut,
      844
    );
    if (mobSuccess) {
      console.log(`   ✅ Mobile comparación creada -> ${path.basename(sec.mobileComparisonOut)}`);
    }
  }

  console.log('\n✨ Todas las composiciones side-by-side de la página Nosotros generadas exitosamente en docs/screenshots/about/');
}

run().catch((err) => {
  console.error('Error al generar comparaciones:', err);
  process.exit(1);
});
