import type { APIRoute } from 'astro';
import {
  obtenerVideosInicio,
  obtenerVideosProcedimientos,
  obtenerVideoContacto,
} from '../lib/sanity/videos';
import { siteConfig } from '../data/siteConfig';

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });
}

function resolveAbsoluteUrl(pathOrUrl: string, baseUrl: string): string {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }
  return `${baseUrl.replace(/\/$/, '')}${pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`}`;
}

interface VideoEntry {
  title: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  duration?: number;
}

function renderVideoXml(video: VideoEntry): string {
  return `    <video:video>
      <video:thumbnail_loc>${escapeXml(video.thumbnailUrl)}</video:thumbnail_loc>
      <video:title>${escapeXml(video.title)}</video:title>
      <video:description>${escapeXml(video.description)}</video:description>
      <video:content_loc>${escapeXml(video.contentUrl)}</video:content_loc>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>${video.duration ? `\n      <video:duration>${video.duration}</video:duration>` : ''}
    </video:video>`;
}

export const GET: APIRoute = async () => {
  const baseUrl = import.meta.env.PUBLIC_SITE_URL || 'https://opticaalemania.co';
  const cleanBase = baseUrl.replace(/\/$/, '');
  const today = new Date().toISOString().split('T')[0];

  // Fetch videos from Sanity with resilient fallbacks
  let videosInicio: Awaited<ReturnType<typeof obtenerVideosInicio>> | null = null;
  let videosProcedimientos: Awaited<ReturnType<typeof obtenerVideosProcedimientos>> = [];
  let videoContacto: Awaited<ReturnType<typeof obtenerVideoContacto>> | null = null;

  try {
    const [resInicio, resProcedimientos, resContacto] = await Promise.allSettled([
      obtenerVideosInicio(),
      obtenerVideosProcedimientos(),
      obtenerVideoContacto(),
    ]);

    if (resInicio.status === 'fulfilled') {
      videosInicio = resInicio.value;
    }
    if (resProcedimientos.status === 'fulfilled') {
      videosProcedimientos = resProcedimientos.value;
    }
    if (resContacto.status === 'fulfilled') {
      videoContacto = resContacto.value;
    }
  } catch (err) {
    console.warn('[sitemap.xml] Error fetching Sanity videos, falling back to static config', err);
  }

  // --- Home Videos ---
  const homeVideos: VideoEntry[] = [];
  const arrivalVideoUrl = videosInicio?.atencion?.url || siteConfig.arrival.video.videoSrc;
  const arrivalPoster = videosInicio?.atencion?.portada || siteConfig.arrival.video.poster;

  if (arrivalVideoUrl) {
    homeVideos.push({
      title: 'Conoce nuestra atención en Óptica Alemania Villavicencio',
      description: siteConfig.arrival.description,
      thumbnailUrl: resolveAbsoluteUrl(arrivalPoster, cleanBase),
      contentUrl: arrivalVideoUrl,
      duration: 25,
    });
  }

  // --- Procedimientos Videos ---
  const procedimientosVideos: VideoEntry[] = [];

  const videoVolk = videosProcedimientos.find((v) => /volk/i.test(v.titulo)) ?? videosProcedimientos[1];
  const videoFarnsworth = videosProcedimientos.find((v) => /farnsworth/i.test(v.titulo)) ?? videosProcedimientos[2];
  const videoInfantil = videosProcedimientos.find((v) => /infan/i.test(v.titulo)) ?? videosProcedimientos[0];

  const volkUrl = videoVolk?.url;
  const volkPoster = videoVolk?.portada || siteConfig.procedimientosPage.volk.video.poster;
  if (volkUrl) {
    procedimientosVideos.push({
      title: 'Evaluación retinal con Volk iNview | Óptica Alemania Villavicencio',
      description: siteConfig.procedimientosPage.volk.description,
      thumbnailUrl: resolveAbsoluteUrl(volkPoster, cleanBase),
      contentUrl: volkUrl,
      duration: 19,
    });
  }

  const farnsworthUrl = videoFarnsworth?.url;
  const farnsworthPoster = videoFarnsworth?.portada || siteConfig.procedimientosPage.farnsworth.video.poster;
  if (farnsworthUrl) {
    procedimientosVideos.push({
      title: 'Test de visión del color Farnsworth D-15 | Óptica Alemania Villavicencio',
      description: siteConfig.procedimientosPage.farnsworth.description,
      thumbnailUrl: resolveAbsoluteUrl(farnsworthPoster, cleanBase),
      contentUrl: farnsworthUrl,
      duration: 18,
    });
  }

  const infantilUrl = videoInfantil?.url;
  const infantilPoster = videoInfantil?.portada || siteConfig.procedimientosPage.gallery.cards[0].poster;
  if (infantilUrl) {
    procedimientosVideos.push({
      title: 'Atención visual infantil | Óptica Alemania Villavicencio',
      description: siteConfig.procedimientosPage.gallery.cards[0].description,
      thumbnailUrl: resolveAbsoluteUrl(infantilPoster, cleanBase),
      contentUrl: infantilUrl,
      duration: 230,
    });
  }

  // --- Contacto Videos ---
  const contactoVideos: VideoEntry[] = [];
  const contactVideoUrl = videoContacto?.url;
  const contactPoster = videoContacto?.portada || siteConfig.contactSection.facadeImage.src;
  if (contactVideoUrl) {
    contactoVideos.push({
      title: 'Cómo llegar a Óptica Alemania Villavicencio en Barzal',
      description: 'Descubre el recorrido paso a paso para llegar a nuestra sede de salud visual en Barzal, Villavicencio.',
      thumbnailUrl: resolveAbsoluteUrl(contactPoster, cleanBase),
      contentUrl: contactVideoUrl,
    });
  }

  // Build the complete sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${cleanBase}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>${homeVideos.map((v) => `\n${renderVideoXml(v)}`).join('')}
  </url>
  <url>
    <loc>${cleanBase}/servicios/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${cleanBase}/nosotros/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${cleanBase}/procedimientos/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>${procedimientosVideos.map((v) => `\n${renderVideoXml(v)}`).join('')}
  </url>
  <url>
    <loc>${cleanBase}/contacto/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>${contactoVideos.map((v) => `\n${renderVideoXml(v)}`).join('')}
  </url>
</urlset>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
};
