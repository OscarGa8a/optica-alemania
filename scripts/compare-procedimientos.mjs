import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_PROCEDIMIENTOS = path.resolve(ROOT_DIR, 'docs', 'procedimientos');
const SCREENSHOTS_DIR = path.resolve(ROOT_DIR, 'docs', 'screenshots', 'procedimientos');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

// Brand frame background color: deep clinic navy #182D53
const BG_COLOR = { r: 24, g: 45, b: 83, alpha: 1 };

const SECTIONS = [
  {
    id: '1_hero',
    name: 'Sección 1 — Hero Procedimientos',
    mockupDesktop: path.join(DOCS_PROCEDIMIENTOS, '1_hero_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '1_hero_desktop_actual.png'),
    mockupMobile: path.join(DOCS_PROCEDIMIENTOS, '1_hero_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '1_hero_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '1_hero_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '1_hero_mobile_comparison.png'),
  },
  {
    id: '2_tecnologia',
    name: 'Sección 2 — Tecnología Volk InView',
    mockupDesktop: path.join(DOCS_PROCEDIMIENTOS, '2_tecnologia_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '2_tecnologia_desktop_actual.png'),
    mockupMobile: path.join(DOCS_PROCEDIMIENTOS, '2_tecnologia_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '2_tecnologia_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '2_tecnologia_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '2_tecnologia_mobile_comparison.png'),
  },
  {
    id: '3_vision_color',
    name: 'Sección 3 — Visión del Color (Farnsworth D-15)',
    mockupDesktop: path.join(DOCS_PROCEDIMIENTOS, '3_vision_color_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '3_vision_color_desktop_actual.png'),
    mockupMobile: path.join(DOCS_PROCEDIMIENTOS, '3_vision_color_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '3_vision_color_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '3_vision_color_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '3_vision_color_mobile_comparison.png'),
  },
  {
    id: '4_nuestro_trabajo',
    name: 'Sección 4 — Galería: Más de Nuestro Trabajo',
    mockupDesktop: path.join(DOCS_PROCEDIMIENTOS, '4_nuestro_trabajo_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '4_nuestro_trabajo_desktop_actual.png'),
    mockupMobile: path.join(DOCS_PROCEDIMIENTOS, '4_nuestro_trabajo_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '4_nuestro_trabajo_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '4_nuestro_trabajo_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '4_nuestro_trabajo_mobile_comparison.png'),
  },
  {
    id: '5_contact',
    name: 'Sección 5 — Banner de Contacto / Conversión',
    mockupDesktop: path.join(DOCS_PROCEDIMIENTOS, '5_contact_desktop.png'),
    actualDesktop: path.join(SCREENSHOTS_DIR, '5_contact_desktop_actual.png'),
    mockupMobile: path.join(DOCS_PROCEDIMIENTOS, '5_contact_mobile.png'),
    actualMobile: path.join(SCREENSHOTS_DIR, '5_contact_mobile_actual.png'),
    desktopComparisonOut: path.join(SCREENSHOTS_DIR, '5_contact_desktop_comparison.png'),
    mobileComparisonOut: path.join(SCREENSHOTS_DIR, '5_contact_mobile_comparison.png'),
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

  const headerHeight = 70;
  const padding = 20;
  const totalWidth = (mockMeta.width || 0) + (actualMeta.width || 0) + padding * 3;
  const totalHeight = targetHeight + headerHeight + padding * 2;

  const titleSvg = `
    <svg width="${totalWidth}" height="${headerHeight}">
      <text x="${padding + 10}" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="bold" fill="#60A5FA">
        DISEÑO OFICIAL (MOCKUP FIGMA)
      </text>
      <text x="${(mockMeta.width || 0) + padding * 2 + 10}" y="42" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="bold" fill="#34D399">
        RENDER ACTUAL (ASTRO + PLAYWRIGHT)
      </text>
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
        input: Buffer.from(titleSvg),
        top: padding,
        left: 0,
      },
      {
        input: mockBuffer,
        top: headerHeight + padding,
        left: padding,
      },
      {
        input: actualBuffer,
        top: headerHeight + padding,
        left: (mockMeta.width || 0) + padding * 2,
      },
    ])
    .png()
    .toFile(outputPath);

  return true;
}

async function run() {
  console.log('🎨 Generating Side-by-Side Visual Comparisons for Procedimientos...');

  for (const sec of SECTIONS) {
    console.log(`\n📸 Processing: ${sec.name}`);

    // Desktop comparison
    const deskOk = await createSideBySide(
      sec.mockupDesktop,
      sec.actualDesktop,
      sec.desktopComparisonOut,
      900
    );
    if (deskOk) {
      console.log(`  ✅ Desktop: ${path.basename(sec.desktopComparisonOut)}`);
    }

    // Mobile comparison
    const mobOk = await createSideBySide(
      sec.mockupMobile,
      sec.actualMobile,
      sec.mobileComparisonOut,
      900
    );
    if (mobOk) {
      console.log(`  ✅ Mobile: ${path.basename(sec.mobileComparisonOut)}`);
    }
  }

  console.log('\n🎉 ¡Comparativas visuales generadas exitosamente en docs/screenshots/procedimientos/!');
}

run();
