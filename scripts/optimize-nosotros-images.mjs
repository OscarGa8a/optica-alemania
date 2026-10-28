import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const IMAGES_DIR = path.resolve(ROOT_DIR, 'public', 'images', 'about');

const configs = [
  {
    name: '1_hero_desktop_image',
    src: path.join(IMAGES_DIR, '1_hero_desktop_image.png'),
    outWebp: path.join(IMAGES_DIR, '1_hero_desktop_image.webp'),
    maxWidth: 1672,
    maxHeight: 941,
    quality: 82,
  },
  {
    name: '1_hero_mobile_image',
    src: path.join(IMAGES_DIR, '1_hero_mobile_image.png'),
    outWebp: path.join(IMAGES_DIR, '1_hero_mobile_image.webp'),
    maxWidth: 941,
    maxHeight: 1671,
    quality: 82,
  },
  {
    name: '2_nuestra_trayectoria_image',
    src: path.join(IMAGES_DIR, '2_nuestra_trayectoria_image.png'),
    outWebp: path.join(IMAGES_DIR, '2_nuestra_trayectoria_image.webp'),
    maxWidth: 1536,
    maxHeight: 1024,
    quality: 82,
  },
  {
    name: '4_nuestro_equipo_image1',
    src: path.join(IMAGES_DIR, '4_nuestro_equipo_image1.png'),
    outWebp: path.join(IMAGES_DIR, '4_nuestro_equipo_image1.webp'),
    maxWidth: 1536,
    maxHeight: 532,
    quality: 82,
  },
  {
    name: '4_nuestro_equipo_image2',
    src: path.join(IMAGES_DIR, '4_nuestro_equipo_image2.png'),
    outWebp: path.join(IMAGES_DIR, '4_nuestro_equipo_image2.webp'),
    maxWidth: 1536,
    maxHeight: 477,
    quality: 82,
  },
  {
    name: '5_nuestros_espacio_image',
    src: path.join(IMAGES_DIR, '5_nuestros_espacio_image.png'),
    outWebp: path.join(IMAGES_DIR, '5_nuestros_espacio_image.webp'),
    maxWidth: 1672,
    maxHeight: 941,
    quality: 82,
  },
  {
    name: 'assets',
    src: path.join(IMAGES_DIR, 'assets.png'),
    outWebp: path.join(IMAGES_DIR, 'assets.webp'),
    maxWidth: 1774,
    maxHeight: 887,
    quality: 85,
    alphaQuality: 90,
  },
];

async function run() {
  console.log('Optimizing images for /nosotros with Sharp...');
  let totalOrig = 0;
  let totalNew = 0;

  for (const cfg of configs) {
    if (!fs.existsSync(cfg.src)) {
      console.warn(`⚠️ Missing source: ${cfg.src}`);
      continue;
    }
    const origSize = fs.statSync(cfg.src).size;
    totalOrig += origSize;

    const img = sharp(cfg.src);
    const meta = await img.metadata();
    
    let pipeline = sharp(cfg.src).resize({
      width: cfg.maxWidth,
      height: cfg.maxHeight,
      fit: 'inside',
      withoutEnlargement: true,
    });

    if (cfg.name === 'assets') {
      pipeline = pipeline.webp({ quality: cfg.quality, alphaQuality: cfg.alphaQuality, effort: 6 });
    } else {
      pipeline = pipeline.webp({ quality: cfg.quality, effort: 6 });
    }

    await pipeline.toFile(cfg.outWebp);
    const newMeta = await sharp(cfg.outWebp).metadata();
    const newSize = fs.statSync(cfg.outWebp).size;
    totalNew += newSize;

    console.log(
      `✅ ${cfg.name}: ${meta.width}x${meta.height} (${(origSize/1024).toFixed(1)} KB PNG) -> ${newMeta.width}x${newMeta.height} (${(newSize/1024).toFixed(1)} KB WebP) [-${(((origSize - newSize)/origSize)*100).toFixed(1)}%]`
    );
  }

  console.log(`\n🎉 Total payload reduction: ${(totalOrig/1024).toFixed(1)} KB -> ${(totalNew/1024).toFixed(1)} KB (-${(((totalOrig - totalNew)/totalOrig)*100).toFixed(1)}% reduction)`);
}

run();
