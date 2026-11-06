import { createImageUrlBuilder } from '@sanity/image-url';
import type { SpaceImage } from '../../data/siteConfig';

export const imageBuilder = createImageUrlBuilder({
  projectId: 'wlz1r3ue',
  dataset: 'production',
});

export function urlForImage(source: any) {
  return imageBuilder.image(source);
}

export function optimizeImageUrl(
  urlOrSource: string | any,
  options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'png' | 'jpg';
    fit?: 'crop' | 'max' | 'fill' | 'clip' | 'scale';
  }
): string {
  if (!urlOrSource) return '';
  if (typeof urlOrSource === 'string' && !urlOrSource.includes('cdn.sanity.io')) {
    return urlOrSource;
  }
  try {
    let builder = imageBuilder.image(urlOrSource);
    if (options?.width) builder = builder.width(options.width);
    if (options?.height) builder = builder.height(options.height);
    if (options?.quality) builder = builder.quality(options.quality);
    if (options?.fit) builder = builder.fit(options.fit);
    builder = builder.format(options?.format || 'webp');
    return builder.url();
  } catch {
    return typeof urlOrSource === 'string' ? urlOrSource : '';
  }
}

export function buildSpaceImage(
  source: any,
  index: number,
  fallback: SpaceImage
): SpaceImage {
  if (!source || !source.asset) {
    return fallback;
  }

  const isFeatured = index === 0;
  const width = isFeatured ? 1200 : 960;
  const height = isFeatured ? 900 : 720;
  const smWidth = isFeatured ? 640 : 480;
  const smHeight = isFeatured ? 480 : 360;

  // URL principal optimizada en WebP con crop y hotspot del CMS
  const src = urlForImage(source)
    .width(width)
    .height(height)
    .fit('crop')
    .format('webp')
    .quality(84)
    .url();

  // Versión liviana para viewport móvil / pantallas reducidas
  const smSrc = urlForImage(source)
    .width(smWidth)
    .height(smHeight)
    .fit('crop')
    .format('webp')
    .quality(82)
    .url();

  const srcset = `${smSrc} ${smWidth}w, ${src} ${width}w`;

  // Versión de alta fidelidad para el lightbox modal en pantalla completa
  const lightboxSrc = urlForImage(source)
    .width(1800)
    .fit('max')
    .format('webp')
    .quality(85)
    .url();

  return {
    src,
    srcset,
    lightboxSrc,
    alt:
      typeof source.alt === 'string' && source.alt.trim().length > 0
        ? source.alt.trim()
        : fallback.alt,
    width,
    height,
  };
}
