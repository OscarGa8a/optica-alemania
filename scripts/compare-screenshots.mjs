import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_HOME = path.resolve(ROOT_DIR, 'docs', 'home');
const SCREENSHOTS_DIR = path.resolve(ROOT_DIR, 'docs', 'screenshots');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

// Brand frame background color: deep clinic navy #182D53
const BG_COLOR = { r: 24, g: 45, b: 83, alpha: 1 };

const SECTIONS = [
  {
    id: '1_hero',
    name: 'Sección 1 — Hero',
    mockupDesktop: path.join(DOCS_HOME, '1_home_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '1_hero_desktop_actual.png'),
    mockupMobile: path.join(DOCS_HOME, '1_home_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '1_hero_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '1_hero_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '1_hero_mobile_comparison.png'),
  },
  {
    id: '2_quienes_somos',
    name: 'Sección 2 — Quiénes Somos',
    mockupDesktop: path.join(DOCS_HOME, '2_quienes_somos_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '2_quienes_somos_desktop_actual.png'),
    mockupMobile: path.join(DOCS_HOME, '2_quienes_somos_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '2_quienes_somos_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '2_quienes_somos_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '2_quienes_somos_mobile_comparison.png'),
  },
  {
    id: '3_servicios',
    name: 'Sección 3 — Servicios',
    mockupDesktop: path.join(DOCS_HOME, '3_nuestros_servicios_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '3_servicios_desktop_actual.png'),
    mockupMobile: path.join(DOCS_HOME, '3_nuestros_servicios_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '3_servicios_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '3_servicios_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '3_servicios_mobile_comparison.png'),
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

  const totalWidth = (mockMeta.width || 0) + (actualMeta.width || 0);

  await sharp({
    create: {
      width: totalWidth,
      height: targetHeight,
      channels: 4,
      background: BG_COLOR,
    },
  })
    .composite([
      { input: mockBuffer, left: 0, top: 0 },
      { input: actualBuffer, left: mockMeta.width || 0, top: 0 },
    ])
    .png()
    .toFile(outputPath);

  console.log(`✅ Comparativa generada: ${path.relative(ROOT_DIR, outputPath)}`);
  return true;
}

async function run() {
  console.log('🔍 Iniciando generación de comparativas visuales side-by-side...\n');

  for (const section of SECTIONS) {
    if (fs.existsSync(section.actualDesktop) || fs.existsSync(section.actualMobile)) {
      console.log(`📌 Procesando: ${section.name}`);
      
      if (fs.existsSync(section.actualDesktop)) {
        await createSideBySide(
          section.mockupDesktop,
          section.actualDesktop,
          section.desktopComparisonOut,
          900
        );
      }
      
      if (fs.existsSync(section.actualMobile)) {
        await createSideBySide(
          section.mockupMobile,
          section.actualMobile,
          section.mobileComparisonOut,
          844
        );
      }
      console.log('');
    }
  }

  console.log('🎉 Comparativas side-by-side listas.');
}

run().catch((err) => {
  console.error('Fatal error in compare-screenshots:', err);
  process.exit(1);
});
