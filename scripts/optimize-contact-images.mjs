import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

async function optimizeContactImages() {
  console.log('🖼️ Optimizando imágenes para /contacto...');

  // 1. Assets Desktop (Watermark Hero)
  const assetsSrc = path.join(ROOT_DIR, 'public', 'images', 'contact', 'assets.png');
  const assetsDeskOut = path.join(ROOT_DIR, 'public', 'images', 'contact', 'assets.webp');
  const assetsMobileOut = path.join(ROOT_DIR, 'public', 'images', 'contact', 'assets-mobile.webp');

  if (fs.existsSync(assetsSrc)) {
    await sharp(assetsSrc)
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(assetsDeskOut);
    const deskStat = fs.statSync(assetsDeskOut);
    console.log(`✅ assets.webp (Desktop) optimizado: ${(deskStat.size / 1024).toFixed(1)} KB`);

    await sharp(assetsSrc)
      .resize({ width: 700, withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toFile(assetsMobileOut);
    const mobStat = fs.statSync(assetsMobileOut);
    console.log(`✅ assets-mobile.webp (Mobile) optimizado: ${(mobStat.size / 1024).toFixed(1)} KB`);
  }

  // 2. Ubicación Map
  const mapSrc = path.join(ROOT_DIR, 'public', 'images', 'contact', '2_ubicacion_map.png');
  const mapOut = path.join(ROOT_DIR, 'public', 'images', 'contact', '2_ubicacion_map.webp');
  if (fs.existsSync(mapSrc)) {
    await sharp(mapSrc)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(mapOut);
    const mapStat = fs.statSync(mapOut);
    console.log(`✅ 2_ubicacion_map.webp optimizado: ${(mapStat.size / 1024).toFixed(1)} KB`);
  }

  // 3. Facade Route image
  const facadeSrc = path.join(ROOT_DIR, 'public', 'images', 'contact-facade-route.webp');
  const facadeTmp = path.join(ROOT_DIR, 'public', 'images', 'contact-facade-route-opt.webp');
  if (fs.existsSync(facadeSrc)) {
    await sharp(facadeSrc)
      .resize({ width: 640, height: 960, fit: 'cover' })
      .webp({ quality: 72, effort: 6 })
      .toFile(facadeTmp);
    fs.renameSync(facadeTmp, facadeSrc);
    const facadeStat = fs.statSync(facadeSrc);
    console.log(`✅ contact-facade-route.webp optimizado: ${(facadeStat.size / 1024).toFixed(1)} KB`);
  }

  console.log('🎉 Optimización de imágenes de Contacto completada.');
}

optimizeContactImages().catch((err) => {
  console.error('Error optimizando imágenes:', err);
  process.exit(1);
});
