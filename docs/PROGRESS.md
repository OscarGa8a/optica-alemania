# PROGRESS — Óptica Alemania

Fecha de esta actualización: 27 nov 2026, 2:01 a. m., America/Bogota

## Rama actual: `feat/seo-local` (plan SEO on-page v2)

Base prevista: `origin/main` (`b882a13`, ya incluye el merge del PR #68 / `fix/enlaces-barra-final`). Esta rama no se fusiona ni se despliega a producción hasta un OK de publicación de Oscar.

### Aprobación del plan (27 nov 2026, 1:41 a. m., America/Bogota)

Oscar aprobó el plan SEO on-page v2 (transmitido vía NEXUS). Ese OK cubre **preparar y dejar lista la vista previa en `feat/seo-local`**. **No es aprobación para publicar**: no se abre PR, no se fusiona a `main` y no se despliega a producción.

### Cambio de alcance (27 nov 2026, 1:17 a. m., America/Bogota)

Oscar, vía NEXUS, recortó el encargo: el cliente no va a pagar programación extra. La v2 del plan de Marketing (`plan-seo-local-optica-alemania.md` y `brief.md`, 27 nov 2026, 1:17 a. m.) manda sobre el brief anterior.

- **Sí:** title, meta, og, H1, H2, textos menores y JSON-LD solo en las 5 páginas que ya existen (`/`, `/servicios/`, `/nosotros/`, `/procedimientos/`, `/contacto/`). Corrección de encabezados ya detectados. Coherencia de `llms.txt` / `llms-full.txt` (barra final, «Barzal»).
- **No:** páginas nuevas, secciones nuevas, columna «Servicios» en el footer, URLs nuevas en sitemap o llms, ni rediseño. No se creó `/servicios/[slug]/` ni `src/data/servicios.ts`.

### Hecho

#### Encabezados y footer en un solo bloque (27 nov 2026, ~2:00 a. m., America/Bogota)

Pedido de Oscar para la preview, sin publicar:

- **H2 de `/procedimientos/`** («¿Quieres conocer más sobre nuestras evaluaciones?»): un solo `<h2>` con el texto completo dentro y solo «evaluaciones?» en un `<span>` de color. Los saltos de línea van con `max-w-xl` y `text-balance`, no con un span por línea ni con `hidden`/`sm:block`. En escritorio el corte de línea queda un poco distinto al de producción (antes «evaluaciones?» iba forzado a su propia línea; ahora «nuestras evaluaciones?» puede ir junto). En 375 px el ritmo visual es el mismo.
- Se revisaron el resto de H1/H2/H3: no quedaba ningún otro encabezado con el patrón de spans duplicados por breakpoint (`hidden sm:block` + `block sm:hidden`). Hay H2 que parten la frase en `<span class="block">` para el diseño (una sola copia del texto); no se reescribieron.
- **Footer unificado:** un solo bloque responsive (columna en móvil, grid de 12 en `lg+`). Títulos EXPLORA/CONTACTO en `<p>`. Se conservan enlaces, dirección, teléfonos, horario e iconos, y los `data-event` de navegación, `phone_call` y `footer_whatsapp_click` / `footer_social_click`. En móvil se mantienen chevrones (`lg:hidden` solo en el icono, no duplica el enlace). Comparación visual con producción a 375 px y 1280 px: el diseño se sostiene.
- **No se tocó** la sección «TE MOSTRAMOS EL CAMINO» de `/contacto/` (los dos textos ya eran `<span>`; el único encabezado sigue siendo el H3 «¿Es tu primera visita?»; el título del modal ya iba en `<p>`).
- El pie de la lightbox de imágenes era un `<footer>` adicional en home y `/nosotros/`. Se cambió a `<div>` con las mismas clases, para que en el DOM solo quede el `<footer id="footer">` de sitio. El diseño del lightbox no cambia.
- Capturas de producción (antes) y del `dist` local (después), 375 y 1280 px, en `/workspace/optica-shots/`.
- En el HTML generado: 1 `<footer>` y 1 H1 por página; ningún H2 repetido; 5 enlaces de nav y 1 WhatsApp en el footer (antes había el doble por la copia móvil).

- Títulos, metas y `og:title`/`og:description` de las 5 páginas según la v2. H1 nuevos; la frase emocional deja de ser H1. En home y contacto, el `<p>` del hero se actualizó con el texto menor de la v2 (esas páginas ya tenían un lead; no se apiló un segundo párrafo). En `/nosotros/` y `/procedimientos/`, el H1 anterior quedó como subtítulo `<p>`.
- H2 y textos menores de la v2 aplicados en las 5 páginas. Grafía unificada: «Volk iNview».
- Encabezados: títulos EXPLORA/CONTACTO del footer (desktop y móvil) pasaron de `<h3>` a `<p>`. En la home, el título «Descubre el recorrido hasta nuestra óptica.» del bloque Cómo llegar (variantes desktop/móvil) pasó de `<h3>` a `<p>`. Autores de reseñas: `<h3>` → `<p>`. CTA de `/procedimientos/`: un solo H2 (se eliminó la duplicación de la misma frase en spans desktop/móvil). No hay tarjetas de reseñas clonadas por JS (son dos bloques responsive con `hidden`/`lg:hidden`); no se puso `aria-hidden` estático en el carrusel móvil, para no ocultarlo a lectores de pantalla en móvil.
- JSON-LD alineado a `schema_site.json` y `schema_servicios.json`:
  - Un solo `Optician` `@id` `https://opticaalemania.co/#optician` en el layout.
  - Coordenadas del pin en todo el sitio: `4.1480008`, `-73.6381595` (reemplazan `4.142/-73.6266` y el Optician anidado de `/contacto/` con `4.1438/-73.6376`, que se eliminó).
  - `hasMap` con el short link de Maps; `sameAs` solo Instagram, Facebook y TikTok. Facebook queda en `sameAs` con `https://www.facebook.com/opticaalemaniavillavicencio/` (Oscar confirmó que es la página oficial y está activa; ya no es pendiente).
  - Horario en dos tramos: lun–vie `09:00–12:00` y `14:00–18:00`; sábado `09:00–12:00` y `13:00–15:00`. Domingo omitido.
  - Sin `legalName`, `priceRange` ni `aggregateRating`.
  - Home: se quitó el `FAQPage` (las preguntas no son visibles; este alcance no agrega secciones).
  - `/servicios/`: `MedicalWebPage` + `BreadcrumbList` + `FAQPage` con las 4 preguntas visibles.
  - Interiores: `AboutPage` / `MedicalWebPage` / `ContactPage` con `name`/`description` del title/meta, referencia al Optician por `@id`, y `BreadcrumbList`.
- En los H1 y H2 que se reescribieron, se dejó un espacio al final de cada tramo partido en `<span>` o `<br />`, para que el texto concatenado (sin CSS) coincida con la frase de la v2. Visualmente las líneas no cambian. Los H2 que no se tocaban siguen el patrón anterior del sitio (p. ej. «Empresas que hanconfiado en nosotros.»).
- Verificación local: `pnpm build` y los tests funcionales (`test`, `test:nosotros`, `test:services`, `test:contacto`, `test:procedimientos`) en verde. En `dist/`, el JSON-LD parsea, hay un solo `Optician` por página, no hay «POR CONFIRMAR» ni `legalName`/`priceRange`/`aggregateRating`, y el bloque global coincide con `schema_site.json`; el de `/servicios/` coincide con `schema_servicios.json`. No se pudo validar en Rich Results Test ni en validator.schema.org sin navegador: no hay API pública documentada (el validador de schema.org no está pensado para uso automatizado). Queda pendiente validarlos a mano sobre la preview cuando esté en línea.
- `public/llms.txt` y `public/llms-full.txt`: «Barzal Bajo» → «Barzal». Las barras finales de los enlaces internos ya venían de `fix/enlaces-barra-final` (ahora en `main`). No se añadieron URLs nuevas. Se dejó «Más de 30 años» (ver pendiente).

### Pendiente del cliente

1. **Años de trayectoria (sigue sin confirmar):** `/nosotros/` conserva «+28 Años de experiencia» y el H2 pasó a la fórmula de respaldo de la v2, «Nuestra historia en Villavicencio». `llms.txt` y `llms-full.txt` conservan «Más de 30 años». No se cambió el número en ningún lado.
2. Facebook: **ya no es pendiente** (confirmado por Oscar; permanece en `sameAs`).

### Decisiones

- Se siguió la v2, no el brief de páginas de servicio.
- El copy de las páginas vive en el repo (`siteConfig` y componentes); no se escribió en Sanity.
- No se tocó Cloudflare, no hay PR ni merge a `main`, ni despliegue a producción.

### Pendiente de publicación

- OK de Oscar, vía NEXUS, para abrir PR / merge a `main` y publicar.
- Hallazgo previo: `https://www.opticaalemania.co` responde **522**. Fuera de este encargo.

---

## Anexo: trabajo previo de barras finales (ya en `main`, PR #68)

El merge `b882a13` incorporó `fix/enlaces-barra-final`. Resumen: menú, canonicals y sitemap ya tenían barra desde el PR #66 (10 nov); esta rama alineó `llms.txt`, `llms-full.txt`, el `url` del JSON-LD y un test. Producción se dispara con merge a `main`. El conector CF de Oscar no tiene acceso a la cuenta de producción. El 522 de `www` no se tocó.
