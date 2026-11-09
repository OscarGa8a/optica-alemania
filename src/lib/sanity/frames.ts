import { sanityClient } from "sanity:client";
import { siteConfig, type FrameCategory } from "../../data/siteConfig";
import { urlForImage } from "./image";

export interface SanityFrameImage {
  alt?: string;
  asset?: any;
  crop?: any;
  hotspot?: any;
}

export interface SanityFotosMonturas {
  mujer?: SanityFrameImage | null;
  hombre?: SanityFrameImage | null;
  ninos?: SanityFrameImage | null;
}

export async function obtenerFotosMonturas(): Promise<FrameCategory[]> {
  const fallbackCategories = siteConfig.frames.categories;

  try {
    const datos = await sanityClient.fetch<{
      fotosMonturas: SanityFotosMonturas | null;
    } | null>(`
      *[_type == "inicioMultimedia"][0] {
        fotosMonturas {
          mujer {
            alt,
            asset,
            crop,
            hotspot
          },
          hombre {
            alt,
            asset,
            crop,
            hotspot
          },
          ninos {
            alt,
            asset,
            crop,
            hotspot
          }
        }
      }
    `);

    const cmsMonturas = datos?.fotosMonturas;
    if (!cmsMonturas) {
      return fallbackCategories;
    }

    return fallbackCategories.map((category) => {
      const cmsImage =
        category.id === "mujer"
          ? cmsMonturas.mujer
          : category.id === "hombre"
          ? cmsMonturas.hombre
          : category.id === "ninos"
          ? cmsMonturas.ninos
          : null;

      if (!cmsImage?.asset) {
        return category;
      }

      const imageUrl = urlForImage(cmsImage)
        .width(category.image.width || 540)
        .height(category.image.height || 615)
        .fit("crop")
        .format("webp")
        .url();

      return {
        ...category,
        image: {
          ...category.image,
          src: imageUrl || category.image.src,
          alt: cmsImage.alt || category.image.alt,
        },
      };
    });
  } catch (error) {
    console.warn(
      "No se pudieron cargar las fotos de monturas desde Sanity, usando fallback local:",
      error
    );
    return fallbackCategories;
  }
}
