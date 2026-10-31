import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const OUT_DIR = path.resolve(ROOT_DIR, 'public', 'images');

const imageConfigs = [
  // 1. Hero
  {
    name: 'hero-desktop',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'home', '1_home_desktop_image2.png'))
      ? path.join(ROOT_DIR, 'docs', 'home', '1_home_desktop_image2.png')
      : path.join(ROOT_DIR, 'public', 'images', 'home', '1_home_desktop_image2.png'),
    width: 1672,
    height: 941,
    fit: 'cover',
    quality: 82,
  },
  {
    name: 'hero-mobile',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'home', '1_home_mobile_image2.png'))
      ? path.join(ROOT_DIR, 'docs', 'home', '1_home_mobile_image2.png')
      : path.join(ROOT_DIR, 'public', 'images', 'home', '1_home_mobile_image2.png'),
    width: 941,
    height: 1672,
    fit: 'cover',
    quality: 82,
  },

  // 2. About
  {
    name: 'about-optometrist',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'home', '2_quienes_somos_image2.jpeg'))
      ? path.join(ROOT_DIR, 'docs', 'home', '2_quienes_somos_image2.jpeg')
      : path.join(ROOT_DIR, 'public', 'images', 'home', '2_quienes_somos_image2.png'),
    width: 1536,
    height: 1024,
    fit: 'cover',
    quality: 82,
  },

  // 3. Services
  {
    name: 'service-featured-consultation',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'home', '3_nuestros_servicios_image1.jpeg'))
      ? path.join(ROOT_DIR, 'docs', 'home', '3_nuestros_servicios_image1.jpeg')
      : path.join(ROOT_DIR, 'public', 'images', 'home', '3_nuestros_servicios_image1.png'),
    width: 1080,
    height: 720,
    fit: 'cover',
    quality: 84,
  },
  {
    name: 'service-optometry',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'home', '3_nuestros_servicios_image2.png'))
      ? path.join(ROOT_DIR, 'docs', 'home', '3_nuestros_servicios_image2.png')
      : path.join(ROOT_DIR, 'public', 'images', 'home', '3_nuestros_servicios_image2.png'),
    width: 360,
    height: 240,
    fit: 'cover',
    quality: 84,
  },
  {
    name: 'service-contact-lenses',
    src: path.join(ROOT_DIR, 'public', 'images', 'home', '3_nuestros_servicios_image3.webp'),
    width: 360,
    height: 240,
    fit: 'cover',
    quality: 84,
  },
  {
    name: 'service-tonometry',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'home', '3_nuestros_servicios_image4.png'))
      ? path.join(ROOT_DIR, 'docs', 'home', '3_nuestros_servicios_image4.png')
      : path.join(ROOT_DIR, 'public', 'images', 'home', '3_nuestros_servicios_image4.png'),
    width: 360,
    height: 240,
    fit: 'cover',
    quality: 84,
  },
  {
    name: 'service-dry-eye',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'home', '3_nuestros_servicios_image5.png'))
      ? path.join(ROOT_DIR, 'docs', 'home', '3_nuestros_servicios_image5.png')
      : path.join(ROOT_DIR, 'public', 'images', 'home', '3_nuestros_servicios_image5.png'),
    width: 360,
    height: 240,
    fit: 'cover',
    quality: 84,
  },

  // 4. Tech
  {
    name: 'tech-volk-inview',
    src: path.join(ROOT_DIR, 'public', 'images', 'home', '4_tecnologia_accion_image1.png'),
    width: 1672,
    height: 941,
    fit: 'cover',
    quality: 82,
  },
  {
    name: 'tech-farnsworth-d15',
    src: path.join(ROOT_DIR, 'public', 'images', 'home', '4_tecnologia_accion_image2.png'),
    width: 1672,
    height: 941,
    fit: 'cover',
    quality: 82,
  },

  // 5. Space
  {
    name: 'space-facade-main',
    src: path.join(ROOT_DIR, 'public', 'images', 'home', '5_nuestro_espacio_image1.webp'),
    width: 1028,
    height: 624,
    fit: 'cover',
    quality: 82,
  },
  {
    name: 'space-frames-display',
    src: path.join(ROOT_DIR, 'public', 'images', 'home', '5_nuestro_espacio_image2.webp'),
    width: 632,
    height: 296,
    fit: 'cover',
    quality: 82,
  },
  {
    name: 'space-consulting-room',
    src: path.join(ROOT_DIR, 'public', 'images', 'home', '5_nuestro_espacio_image3.webp'),
    width: 632,
    height: 296,
    fit: 'cover',
    quality: 82,
  },

  // 6. Kids Vision
  {
    name: 'kids-vision-preview',
    src: path.join(ROOT_DIR, 'public', 'images', 'home', '6_visual_infantil_image.png'),
    width: 799,
    height: 533,
    fit: 'cover',
    quality: 82,
  },

  // 7. Frames
  {
    name: 'frames-prescription',
    src: path.join(ROOT_DIR, 'public', 'images', 'home', '7_monturas_image1.webp'),
    width: 540,
    height: 615,
    fit: 'cover',
    quality: 82,
  },
  {
    name: 'frames-sunglasses',
    src: path.join(ROOT_DIR, 'public', 'images', 'home', '7_monturas_image2.webp'),
    width: 540,
    height: 615,
    fit: 'cover',
    quality: 82,
  },
  {
    name: 'frames-kids',
    src: path.join(ROOT_DIR, 'public', 'images', 'home', '7_monturas_image3.webp'),
    width: 540,
    height: 615,
    fit: 'cover',
    quality: 82,
  },

  // 7.5 Cofrem Discount Logo
  {
    name: 'cofrem-discount-logo',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'home', 'logo_descuentos_cofrem.png'))
      ? path.join(ROOT_DIR, 'docs', 'home', 'logo_descuentos_cofrem.png')
      : path.join(ROOT_DIR, 'public', 'images', 'home', '8_beneficios_cofrem_descuentos.png'),
    width: 520,
    height: 400,
    fit: 'inside',
    quality: 88,
  },

  // 8. Trajectory Partner Logos (max rendered height 112px, width ~200px -> 400x250 Retina 2x)
  {
    name: 'partner-palmeras-carabao',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'home', '9_nuestra_trayectoria_image2.png'))
      ? path.join(ROOT_DIR, 'docs', 'home', '9_nuestra_trayectoria_image2.png')
      : path.join(ROOT_DIR, 'public', 'images', 'home', '8_nuestra_trayectoria_image2.webp'),
    width: 400,
    height: 250,
    fit: 'inside',
    quality: 88,
  },
  {
    name: 'partner-cofrem',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'home', 'logo_cofrem.png'))
      ? path.join(ROOT_DIR, 'docs', 'home', 'logo_cofrem.png')
      : path.join(ROOT_DIR, 'public', 'images', 'home', '8_nuestra_trayectoria_cofrem.webp'),
    width: 400,
    height: 250,
    fit: 'inside',
    quality: 88,
  },
  {
    name: 'partner-crismasol',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'home', '9_nuestra_trayectoria_image4.png'))
      ? path.join(ROOT_DIR, 'docs', 'home', '9_nuestra_trayectoria_image4.png')
      : path.join(ROOT_DIR, 'public', 'images', 'home', '8_nuestra_trayectoria_image4.webp'),
    width: 400,
    height: 250,
    fit: 'inside',
    quality: 88,
  },
  {
    name: 'partner-entrepalmas',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'home', '9_nuestra_trayectoria_image5.png'))
      ? path.join(ROOT_DIR, 'docs', 'home', '9_nuestra_trayectoria_image5.png')
      : path.join(ROOT_DIR, 'public', 'images', 'home', '8_nuestra_trayectoria_image5.webp'),
    width: 400,
    height: 250,
    fit: 'inside',
    quality: 88,
  },
  {
    name: 'partner-copalma',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'home', '9_nuestra_trayectoria_image1.png'))
      ? path.join(ROOT_DIR, 'docs', 'home', '9_nuestra_trayectoria_image1.png')
      : path.join(ROOT_DIR, 'public', 'images', 'home', '8_nuestra_trayectoria_image1.webp'),
    width: 400,
    height: 250,
    fit: 'inside',
    quality: 88,
  },

  // 9. Contact
  {
    name: 'contact-map',
    src: path.join(ROOT_DIR, 'public', 'images', 'home', '9_contacto_map.webp'),
    width: 1656,
    height: 811,
    fit: 'cover',
    quality: 84,
  },
  {
    name: 'contact-facade-route',
    src: fs.existsSync(path.join(ROOT_DIR, 'docs', 'preview_video_como_llegar.png'))
      ? path.join(ROOT_DIR, 'docs', 'preview_video_como_llegar.png')
      : path.join(ROOT_DIR, 'public', 'images', 'home', '9_contacto_image.png'),
    width: 720,
    height: 1080,
    fit: 'cover',
    quality: 84,
  },

  // 10. Brand Logo
  {
    name: 'logo',
    src: path.join(ROOT_DIR, 'docs', 'logo.png'),
    width: 724,
    height: 241,
    fit: 'inside',
    quality: 90,
  },
];

async function run() {
  console.log(`Starting image optimization to ${OUT_DIR} (WebP only, no PNGs)...`);
  let totalOrig = 0;
  let totalNew = 0;
  const results = [];

  for (const cfg of imageConfigs) {
    if (!fs.existsSync(cfg.src)) {
      console.warn(`⚠️ Source missing for ${cfg.name}: ${cfg.src}`);
      continue;
    }

    const origSize = fs.statSync(cfg.src).size;
    totalOrig += origSize;

    const outWebp = path.join(OUT_DIR, `${cfg.name}.webp`);

    let pipeline = sharp(cfg.src).resize({
      width: cfg.width,
      height: cfg.height,
      fit: cfg.fit || 'cover',
      withoutEnlargement: true,
    });

    pipeline = pipeline.webp({
      quality: cfg.quality || 82,
      effort: 6,
    });

    await pipeline.toFile(outWebp);

    const newMeta = await sharp(outWebp).metadata();
    const newSize = fs.statSync(outWebp).size;
    totalNew += newSize;

    results.push({
      name: `${cfg.name}.webp`,
      dimensions: `${newMeta.width}x${newMeta.height}`,
      origKB: (origSize / 1024).toFixed(1),
      newKB: (newSize / 1024).toFixed(1),
      reduction: `${(((origSize - newSize) / origSize) * 100).toFixed(1)}%`,
    });

    console.log(`✅ ${cfg.name}.webp: ${newMeta.width}x${newMeta.height} (${(newSize / 1024).toFixed(1)} KB)`);
  }

  console.log(`\n🎉 Processed ${results.length} images.`);
  console.log(`Total payload: ${(totalOrig / 1024).toFixed(1)} KB -> ${(totalNew / 1024).toFixed(1)} KB (-${(((totalOrig - totalNew) / totalOrig) * 100).toFixed(1)}%)`);
}

run().catch(console.error);
