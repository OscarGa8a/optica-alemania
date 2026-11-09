import { sanityClient } from "sanity:client";

export interface VideoCMS {
  _id: string;
  titulo: string;
  url: string | null;
  portada: string | null;
}

// Videos de la página Inicio
export async function obtenerVideosInicio() {
  const datos = await sanityClient.fetch<{
    atencion: VideoCMS | null;
    comoLlegar: VideoCMS | null;
    procedimientos: VideoCMS[] | null;
  } | null>(`
    *[_type == "inicioMultimedia"][0] {
      "atencion": videoAtencionReferencia->{
        _id,
        titulo,
        "url": archivo.asset->url,
        "portada": portada.asset->url
      },

      "comoLlegar": videoComoLlegarReferencia->{
        _id,
        titulo,
        "url": archivo.asset->url,
        "portada": portada.asset->url
      },

      "procedimientos": videosProcedimientos[]->{
        _id,
        titulo,
        "url": archivo.asset->url,
        "portada": portada.asset->url
      }
    }
  `);

  return {
    atencion: datos?.atencion ?? null,
    comoLlegar: datos?.comoLlegar ?? null,
    procedimientos:
      (datos?.procedimientos ?? []).filter(
        (video): video is VideoCMS & { url: string } => Boolean(video?.url)
      ),
  };
}

// Videos de la página Procedimientos
export async function obtenerVideosProcedimientos() {
  const datos = await sanityClient.fetch<{
    videos: VideoCMS[] | null;
  } | null>(`
    *[_type == "procedimientosMultimedia"][0] {
      "videos": videosProcedimientos[]->{
        _id,
        titulo,
        "url": archivo.asset->url,
        "portada": portada.asset->url
      }
    }
  `);

  return (datos?.videos ?? []).filter(
    (video): video is VideoCMS & { url: string } => Boolean(video?.url)
  );
}

// Video de la página Contacto
export async function obtenerVideoContacto() {
  const datos = await sanityClient.fetch<{
    video: VideoCMS | null;
  } | null>(`
    *[_type == "contactoMultimedia"][0] {
      "video": videoComoLlegarReferencia->{
        _id,
        titulo,
        "url": archivo.asset->url,
        "portada": portada.asset->url
      }
    }
  `);

  return datos?.video ?? null;
}
