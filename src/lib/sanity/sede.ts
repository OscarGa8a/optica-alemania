import { sanityClient } from "sanity:client";
import { siteConfig, type SpaceImage } from "../../data/siteConfig";
import { buildSpaceImage } from "./image";

export interface SanitySedeImage {
  _key?: string;
  alt?: string;
  asset?: any;
  crop?: any;
  hotspot?: any;
}

export async function obtenerFotosSede(): Promise<SpaceImage[]> {
  try {
    const datos = await sanityClient.fetch<{
      fotosSede: SanitySedeImage[] | null;
    } | null>(`
      *[_type == "inicioMultimedia"][0] {
        fotosSede[] {
          _key,
          alt,
          asset,
          crop,
          hotspot
        }
      }
    `);

    const fallbackImages = siteConfig.space.images;
    const cmsFotos = (datos?.fotosSede ?? []).filter((foto) => Boolean(foto?.asset));

    return fallbackImages.map((fallback, index) => {
      const cmsFoto = cmsFotos[index];
      if (!cmsFoto) {
        return fallback;
      }
      return buildSpaceImage(cmsFoto, index, fallback);
    });
  } catch (error) {
    console.warn("No se pudieron cargar las fotos de la sede desde Sanity, usando fallback local:", error);
    return siteConfig.space.images;
  }
}
