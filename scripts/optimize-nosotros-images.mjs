import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const OUT_DIR = path.resolve(ROOT_DIR, 'public', 'images');

const imageConfigs = [
  // 1. Hero Desktop
  {
    name: 'nosotros-hero-desktop',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'about', '1_hero_desktop_image2.png'))
      ? path.join(ROOT_DIR, 'docs', 'about', '1_hero_desktop_image2.png')
      : path.join(ROOT_DIR, 'public', 'images', 'about', '1_hero_desktop_image2.png'),
    width: 1672,
    height: 941,
    fit: 'cover',
    quality: 82,
  },
  // 1. Hero Mobile
  {
    name: 'nosotros-hero-mobile',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'about', '1_hero_mobile_image2.png'))
      ? path.join(ROOT_DIR, 'docs', 'about', '1_hero_mobile_image2.png')
      : path.join(ROOT_DIR, 'public', 'images', 'about', '1_hero_mobile_image2.png'),
    width: 941,
    height: 1671,
    fit: 'cover',
    quality: 82,
  },
  // 2. Trayectoria
  {
    name: 'nosotros-trayectoria',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'about', '2_nuestra_trayectoria_image2.jpeg'))
      ? path.join(ROOT_DIR, 'docs', 'about', '2_nuestra_trayectoria_image2.jpeg')
      : path.join(ROOT_DIR, 'public', 'images', 'about', '2_nuestra_trayectoria_image2.jpeg'),
    width: 1536,
    height: 1024,
    fit: 'cover',
    quality: 82,
  },
  // 4. Equipo - Card 1 (Atención / Counter)
  {
    name: 'nosotros-equipo-atencion',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'about', '4_nuestro_equipo_image1.jpeg'))
      ? path.join(ROOT_DIR, 'docs', 'about', '4_nuestro_equipo_image1.jpeg')
      : path.join(ROOT_DIR, 'public', 'images', 'about', '4_nuestro_equipo_image1.jpeg'),
    width: 1536,
    height: 1024,
    fit: 'cover',
    quality: 82,
  },
  // 4. Equipo - Card 2 (Examen optométrico)
  {
    name: 'nosotros-equipo-examen',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'about', '4_nuestro_equipo_image2.jpeg'))
      ? path.join(ROOT_DIR, 'docs', 'about', '4_nuestro_equipo_image2.jpeg')
      : path.join(ROOT_DIR, 'public', 'images', 'about', '4_nuestro_equipo_image2.jpeg'),
    width: 1080,
    height: 720,
    fit: 'cover',
    quality: 82,
  },
  // 5. Espacios (Showroom / Instalaciones)
  {
    name: 'nosotros-espacios',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'about', '5_nuestros_espacio_image.png'))
      ? path.join(ROOT_DIR, 'docs', 'about', '5_nuestros_espacio_image.png')
      : path.join(ROOT_DIR, 'public', 'images', 'about', '5_nuestros_espacio_image.png'),
    width: 1672,
    height: 941,
    fit: 'cover',
    quality: 82,
  },
];

async function run() {
  console.log('🚀 Optimizing Nosotros Page images directly to public/images/ as pure WebP...\n');
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  let totalOrig = 0;
  let totalNew = 0;

  for (const cfg of imageConfigs) {
    if (!fs.existsSync(cfg.src)) {
      console.warn(`⚠️ Source not found: ${cfg.src}`);
      continue;
    }

    const origSize = fs.statSync(cfg.src).size;
    totalOrig += origSize;
    const dest = path.join(OUT_DIR, `${cfg.name}.webp`);

    await sharp(cfg.src)
      .resize({
        width: cfg.width,
        height: cfg.height,
        fit: cfg.fit || 'cover',
        withoutEnlargement: true,
      })
      .webp({ quality: cfg.quality || 82, effort: 6 })
      .toFile(dest);

    const newSize = fs.statSync(dest).size;
    totalNew += newSize;
    const meta = await sharp(dest).metadata();
    const reduction = (((origSize - newSize) / origSize) * 100).toFixed(1);

    console.log(
      `✅ ${cfg.name}.webp: ${meta.width}x${meta.height} (${(origSize / 1024).toFixed(1)} KB) -> ${(newSize / 1024).toFixed(1)} KB WebP [-${reduction}%]`
    );
  }

  const overallReduction = (((totalOrig - totalNew) / totalOrig) * 100).toFixed(1);
  console.log(
    `\n🎉 Total Nosotros images payload: ${(totalOrig / 1024).toFixed(1)} KB -> ${(totalNew / 1024).toFixed(1)} KB (-${overallReduction}% reduction)`
  );
}

run();
