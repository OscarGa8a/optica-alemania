import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const OUT_DIR = path.resolve(ROOT_DIR, 'public', 'images');

const jobs = [
  // 1. Nosotros - Trayectoria
  {
    src: path.join(OUT_DIR, 'nosotros-trayectoria.webp'),
    out: path.join(OUT_DIR, 'nosotros-trayectoria.webp'),
    width: 1080,
    quality: 78,
  },
  {
    src: path.join(OUT_DIR, 'nosotros-trayectoria.webp'),
    out: path.join(OUT_DIR, 'nosotros-trayectoria-sm.webp'),
    width: 640,
    quality: 78,
  },

  // 2. Nosotros - Equipo Atención
  {
    src: path.join(OUT_DIR, 'nosotros-equipo-atencion.webp'),
    out: path.join(OUT_DIR, 'nosotros-equipo-atencion.webp'),
    width: 1080,
    quality: 78,
  },
  {
    src: path.join(OUT_DIR, 'nosotros-equipo-atencion.webp'),
    out: path.join(OUT_DIR, 'nosotros-equipo-atencion-sm.webp'),
    width: 640,
    quality: 78,
  },

  // 3. Nosotros - Equipo Examen
  {
    src: path.join(OUT_DIR, 'nosotros-equipo-examen.webp'),
    out: path.join(OUT_DIR, 'nosotros-equipo-examen.webp'),
    width: 800,
    quality: 78,
  },
  {
    src: path.join(OUT_DIR, 'nosotros-equipo-examen.webp'),
    out: path.join(OUT_DIR, 'nosotros-equipo-examen-sm.webp'),
    width: 540,
    quality: 78,
  },

  // 4. Servicios - Consulta de Optometría
  {
    src: path.join(OUT_DIR, 'services-optometria-consulta.webp'),
    out: path.join(OUT_DIR, 'services-optometria-consulta.webp'),
    width: 1080,
    quality: 78,
  },
  {
    src: path.join(OUT_DIR, 'services-optometria-consulta.webp'),
    out: path.join(OUT_DIR, 'services-optometria-consulta-sm.webp'),
    width: 640,
    quality: 78,
  },

  // 5. Servicios - Lentes de Contacto
  {
    src: path.join(OUT_DIR, 'services-lentes-contacto-adaptacion.webp'),
    out: path.join(OUT_DIR, 'services-lentes-contacto-adaptacion.webp'),
    width: 1080,
    quality: 78,
  },
  {
    src: path.join(OUT_DIR, 'services-lentes-contacto-adaptacion.webp'),
    out: path.join(OUT_DIR, 'services-lentes-contacto-adaptacion-sm.webp'),
    width: 640,
    quality: 78,
  },

  // 6. Servicios - Evaluaciones Especializadas
  {
    src: path.join(OUT_DIR, 'services-evaluaciones-especializadas.webp'),
    out: path.join(OUT_DIR, 'services-evaluaciones-especializadas.webp'),
    width: 960,
    quality: 78,
  },
  {
    src: path.join(OUT_DIR, 'services-evaluaciones-especializadas.webp'),
    out: path.join(OUT_DIR, 'services-evaluaciones-especializadas-sm.webp'),
    width: 640,
    quality: 78,
  },
];

async function main() {
  console.log('Optimizing responsive images for Nosotros and Servicios...');
  for (const job of jobs) {
    if (!fs.existsSync(job.src)) {
      console.warn(`Source not found: ${job.src}`);
      continue;
    }

    const tempOut = job.out + '.tmp';
    await sharp(job.src)
      .resize(job.width)
      .webp({ quality: job.quality, effort: 6 })
      .toFile(tempOut);

    fs.renameSync(tempOut, job.out);
    const stat = fs.statSync(job.out);
    console.log(`✓ Generated ${path.basename(job.out)} (${(stat.size / 1024).toFixed(1)} KiB)`);
  }
  console.log('Optimization complete!');
}

main().catch((err) => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
