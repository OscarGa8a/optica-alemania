import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const OUT_DIR = path.resolve(ROOT_DIR, 'public', 'images');

const jobs = [
  // 1. Logo
  {
    src: path.join(ROOT_DIR, 'docs', 'logo.png'),
    out: path.join(OUT_DIR, 'logo.webp'),
    width: 420,
    fit: 'inside',
    quality: 80,
  },
  {
    src: path.join(ROOT_DIR, 'docs', 'logo.png'),
    out: path.join(OUT_DIR, 'logo-sm.webp'),
    width: 280,
    fit: 'inside',
    quality: 80,
  },

  // 2. Space Images (1-5 desktop + sm variants)
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '5_nuestro_espacio_image1.webp'),
    fallbackSrc: path.join(OUT_DIR, 'space-1.webp'),
    out: path.join(OUT_DIR, 'space-1.webp'),
    width: 1200,
    height: 900,
    fit: 'cover',
    quality: 76,
  },
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '5_nuestro_espacio_image1.webp'),
    fallbackSrc: path.join(OUT_DIR, 'space-1.webp'),
    out: path.join(OUT_DIR, 'space-1-sm.webp'),
    width: 640,
    height: 480,
    fit: 'cover',
    quality: 76,
  },
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '5_nuestro_espacio_image2.webp'),
    fallbackSrc: path.join(OUT_DIR, 'space-2.webp'),
    out: path.join(OUT_DIR, 'space-2.webp'),
    width: 960,
    height: 720,
    fit: 'cover',
    quality: 76,
  },
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '5_nuestro_espacio_image2.webp'),
    fallbackSrc: path.join(OUT_DIR, 'space-2.webp'),
    out: path.join(OUT_DIR, 'space-2-sm.webp'),
    width: 480,
    height: 360,
    fit: 'cover',
    quality: 76,
  },
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '5_nuestro_espacio_image3.webp'),
    fallbackSrc: path.join(OUT_DIR, 'space-3.webp'),
    out: path.join(OUT_DIR, 'space-3.webp'),
    width: 960,
    height: 720,
    fit: 'cover',
    quality: 76,
  },
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '5_nuestro_espacio_image3.webp'),
    fallbackSrc: path.join(OUT_DIR, 'space-3.webp'),
    out: path.join(OUT_DIR, 'space-3-sm.webp'),
    width: 480,
    height: 360,
    fit: 'cover',
    quality: 76,
  },
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '5_nuestro_espacio_image4.webp'),
    fallbackSrc: path.join(OUT_DIR, 'space-4.webp'),
    out: path.join(OUT_DIR, 'space-4.webp'),
    width: 960,
    height: 720,
    fit: 'cover',
    quality: 76,
  },
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '5_nuestro_espacio_image4.webp'),
    fallbackSrc: path.join(OUT_DIR, 'space-4.webp'),
    out: path.join(OUT_DIR, 'space-4-sm.webp'),
    width: 480,
    height: 360,
    fit: 'cover',
    quality: 76,
  },
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '5_nuestro_espacio_image5.webp'),
    fallbackSrc: path.join(OUT_DIR, 'space-5.webp'),
    out: path.join(OUT_DIR, 'space-5.webp'),
    width: 960,
    height: 720,
    fit: 'cover',
    quality: 76,
  },
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '5_nuestro_espacio_image5.webp'),
    fallbackSrc: path.join(OUT_DIR, 'space-5.webp'),
    out: path.join(OUT_DIR, 'space-5-sm.webp'),
    width: 480,
    height: 360,
    fit: 'cover',
    quality: 76,
  },

  // 3. About Optometrist
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '2_quienes_somos_image.jpeg'),
    fallbackSrc: path.join(OUT_DIR, 'about-optometrist.webp'),
    out: path.join(OUT_DIR, 'about-optometrist.webp'),
    width: 1080,
    height: 720,
    fit: 'cover',
    quality: 78,
  },
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '2_quienes_somos_image.jpeg'),
    fallbackSrc: path.join(OUT_DIR, 'about-optometrist.webp'),
    out: path.join(OUT_DIR, 'about-optometrist-sm.webp'),
    width: 640,
    height: 427,
    fit: 'cover',
    quality: 76,
  },

  // 4. Service Featured Consultation
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '3_nuestros_servicios_image1.jpeg'),
    fallbackSrc: path.join(OUT_DIR, 'service-featured-consultation.webp'),
    out: path.join(OUT_DIR, 'service-featured-consultation.webp'),
    width: 960,
    height: 640,
    fit: 'cover',
    quality: 78,
  },
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '3_nuestros_servicios_image1.jpeg'),
    fallbackSrc: path.join(OUT_DIR, 'service-featured-consultation.webp'),
    out: path.join(OUT_DIR, 'service-featured-consultation-sm.webp'),
    width: 640,
    height: 427,
    fit: 'cover',
    quality: 76,
  },

  // 5. Service Thumbnails
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '3_nuestros_servicios_image2.png'),
    fallbackSrc: path.join(OUT_DIR, 'service-optometry.webp'),
    out: path.join(OUT_DIR, 'service-optometry.webp'),
    width: 240,
    height: 160,
    fit: 'cover',
    quality: 78,
  },
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '3_nuestros_servicios_image3.webp'),
    fallbackSrc: path.join(OUT_DIR, 'service-contact-lenses.webp'),
    out: path.join(OUT_DIR, 'service-contact-lenses.webp'),
    width: 240,
    height: 160,
    fit: 'cover',
    quality: 78,
  },
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '3_nuestros_servicios_image4.png'),
    fallbackSrc: path.join(OUT_DIR, 'service-tonometry.webp'),
    out: path.join(OUT_DIR, 'service-tonometry.webp'),
    width: 240,
    height: 160,
    fit: 'cover',
    quality: 78,
  },
  {
    src: path.join(ROOT_DIR, 'docs', 'home', '3_nuestros_servicios_image5.png'),
    fallbackSrc: path.join(OUT_DIR, 'service-dry-eye.webp'),
    out: path.join(OUT_DIR, 'service-dry-eye.webp'),
    width: 240,
    height: 160,
    fit: 'cover',
    quality: 78,
  },
];

async function main() {
  console.log('Optimizing responsive web vitals images...');
  for (const job of jobs) {
    const inputPath = fs.existsSync(job.src) ? job.src : job.fallbackSrc;
    if (!inputPath || !fs.existsSync(inputPath)) {
      console.warn(`Source not found for ${job.out}`);
      continue;
    }

    const resizeOptions = {
      width: job.width,
      height: job.height,
      fit: job.fit || 'cover',
    };

    const tempOut = job.out + '.tmp';
    await sharp(inputPath)
      .resize(resizeOptions)
      .webp({ quality: job.quality, effort: 6 })
      .toFile(tempOut);

    fs.renameSync(tempOut, job.out);
    const stat = fs.statSync(job.out);
    console.log(`✓ Generated ${path.basename(job.out)} (${(stat.size / 1024).toFixed(1)} KiB)`);
  }
  console.log('All images optimized successfully!');
}

main().catch((err) => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
