import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const optimizations = [
  {
    name: 'services-hero-desktop.webp',
    input: 'docs/services/1_hero_desktok_image.png',
    width: 1672,
    height: 941,
    fit: 'cover',
    position: 'center',
    quality: 82,
    desc: 'Hero Desktop (Full viewport cover, 16:9 standard matching Home/Nosotros)'
  },
  {
    name: 'services-hero-mobile.webp',
    input: 'docs/services/1_hero_mobile_image.png',
    width: 941,
    height: 1672,
    fit: 'cover',
    position: 'center',
    quality: 80,
    desc: 'Hero Mobile (Full mobile screen cover, ~9:16 standard matching Home/Nosotros)'
  },
  {
    name: 'service-ocular-emergencies.webp',
    input: 'docs/services/2_nuestros_servicios_image4.png',
    width: 360,
    height: 240,
    fit: 'cover',
    position: 'center',
    quality: 84,
    desc: 'Overview Thumbnail Card 03 (360x240, 2.5x retina density for 144x96 CSS container)'
  },
  {
    name: 'services-optometria-consulta.webp',
    input: 'docs/services/3_atencion_visual_image1.jpeg',
    width: 1440,
    height: 810,
    fit: 'cover',
    position: 'center',
    quality: 82,
    desc: 'Visual Care Item 01 (1440x810, 16:9 aspect-video for 737px CSS container, ~2x retina)'
  },
  {
    name: 'services-lentes-contacto-adaptacion.webp',
    input: 'docs/services/3_atencion_visual_image2.jpeg',
    width: 1280,
    height: 720,
    fit: 'cover',
    position: 'center',
    quality: 82,
    desc: 'Visual Care Item 02 (1280x720, 16:9 aspect-video unscaled native width, ~1.74x retina)'
  },
  {
    name: 'services-evaluaciones-especializadas.webp',
    input: 'docs/services/4_evaluaciones_especializadas_image.jpeg',
    width: 1280,
    height: 720,
    fit: 'cover',
    position: 'center',
    quality: 82,
    desc: 'Specialized Tests Featured (1280x720, 16:9 aspect-video for 526px CSS container, 2.43x retina)'
  }
];

const targetDir = 'public/images';

console.log('🚀 Starting optimization of Services images to WebP...');

for (const item of optimizations) {
  const destPath = path.join(targetDir, item.name);
  const inputStat = fs.statSync(item.input);
  
  await sharp(item.input)
    .resize(item.width, item.height, { fit: item.fit, position: item.position })
    .webp({ quality: item.quality, effort: 6 })
    .toFile(destPath);
    
  const outputStat = fs.statSync(destPath);
  const savings = ((1 - outputStat.size / inputStat.size) * 100).toFixed(1);
  
  console.log(`✅ ${item.name} (${item.width}x${item.height}):`);
  console.log(`   Before: ${(inputStat.size / 1024).toFixed(1)} KB | After: ${(outputStat.size / 1024).toFixed(1)} KB | Savings: ${savings}%`);
  console.log(`   Purpose: ${item.desc}\n`);
}

console.log('🎉 All images generated successfully in public/images/!');
