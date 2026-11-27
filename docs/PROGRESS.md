# PROGRESS — Óptica Alemania

Fecha de esta actualización: 27 nov 2026, 4:10 a. m., America/Bogota

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
  - Home: el `FAQPage` se mantiene (cambio aprobado por Oscar el 27 nov 2026, ~2:05 a. m., que reemplaza lo que decía la v2). Sale del mismo array que la sección visible (ver más abajo).
  - `/servicios/`: `MedicalWebPage` + `BreadcrumbList` + `FAQPage` con las 4 preguntas visibles.
  - Interiores: `AboutPage` / `MedicalWebPage` / `ContactPage` con `name`/`description` del title/meta, referencia al Optician por `@id`, y `BreadcrumbList`.
- En los H1 y H2 que se reescribieron, se dejó un espacio al final de cada tramo partido en `<span>` o `<br />`, para que el texto concatenado (sin CSS) coincida con la frase de la v2. Visualmente las líneas no cambian. Los H2 que no se tocaban siguen el patrón anterior del sitio (p. ej. «Empresas que hanconfiado en nosotros.»).
- Verificación local: `pnpm build` y los tests funcionales (`test`, `test:nosotros`, `test:services`, `test:contacto`, `test:procedimientos`) en verde. En `dist/`, el JSON-LD parsea, hay un solo `Optician` por página, no hay «POR CONFIRMAR» ni `legalName`/`priceRange`/`aggregateRating`, y el bloque global coincide con `schema_site.json`; el de `/servicios/` coincide con `schema_servicios.json`. No se pudo validar en Rich Results Test ni en validator.schema.org sin navegador: no hay API pública documentada (el validador de schema.org no está pensado para uso automatizado). Queda pendiente validarlos a mano sobre la preview cuando esté en línea.
- `public/llms.txt` y `public/llms-full.txt`: «Barzal Bajo» → «Barzal». Las barras finales de los enlaces internos ya venían de `fix/enlaces-barra-final` (ahora en `main`). No se añadieron URLs nuevas. Se dejó «Más de 30 años» (ver pendiente).


#### FAQ visible en la home (27 nov 2026, ~2:20 a. m., America/Bogota)

Cambio aprobado por Oscar para la preview de `feat/seo-local`, sin publicar: no se quita el `FAQPage` de la home (reemplaza ese punto de la v2).

- Se reutilizó el componente de `/servicios/` (`ServicesFaq.astro`), con el mismo estilo, acordeón y JS. El componente ahora puede recibir las preguntas por props; en `/servicios/` se sigue invocando sin props, con el mismo aspecto y comportamiento.
- Las 4 preguntas y respuestas del JSON-LD original de la home viven en `src/data/homeFaq.ts`. La sección visible y el `FAQPage` (`@id` `https://opticaalemania.co/#faq`) salen de ese mismo array; en el HTML generado coinciden carácter por carácter. El HTML de la respuesta de Cofrem no lleva marcas (`<b>`, `<i>`, etc.).
- Ubicación: entre `#resenas` (reseñas) y `#contacto` (bloque final de contacto), con `id="preguntas-frecuentes-inicio"`.
- IDs del acordeón y del H2 propios de la home (`home-faq-accordion`, `home-faq-heading`, `home-ubicacion`…). El JS busca `[data-faq-accordion]` para no chocar con `/servicios/` ni en navegación con view transitions. `data-event-location` del WhatsApp de esta sección: `home_faq`.
- Capturas de la sección a 375 px y 1280 px en `/workspace/optica-shots/after-home-faq-375.png` y `after-home-faq-1280.png`.
- Verificación: `pnpm build` y los 5 tests funcionales en verde. Un solo `<footer>` y un solo H1 en la home; sin H2 repetidos ni IDs duplicados; 0 «POR CONFIRMAR» en `dist/`.


#### Arreglos QA de la preview (27 nov 2026, ~2:40–3:00 a. m., America/Bogota)

Marketing revisó https://feat-seo-local.optica-alemania-cth.pages.dev (`qa-preview-seo-v2.md`). Los arreglos van solo en `feat/seo-local`, sin PR, merge ni deploy a producción. Donde choca con Marketing, mandan las decisiones de Oscar (2:52 a. m.).

Obligatorios:
- Se quitó `"medicalSpecialty": "Optometric"` del `Optician` en el layout (no aplica a ese typo; validator.schema.org lo marcaba UNKNOWN_FIELD).
- FAQ del home (mismo array para visible y JSON-LD): «Barzal Bajo» → «Barzal» en la respuesta 01; «a.m.»/«p.m.» → «a. m.»/«p. m.» en la 02.
- Menú del footer: «Inicio» apunta a `/` y «Procedimientos» a `/procedimientos/` (antes `#inicio` / `#tecnologia` o `/#tecnologia`). Ese ancla en home era intencional para scroll en la misma página (y con ClientRouter); se corrigió igual. El menú del header ya iba a las URLs de página; no se cambió. El logo del footer sigue yendo a `#inicio` / `/#inicio` (no forma parte del menú EXPLORA).
- `llms.txt` y `llms-full.txt`: `/#visual-infantil` → `/#infantil`. El ancla `#infantil` existe en el HTML de la home (`KidsVisionSection`).
- GTM: el ID y la carga diferida no cambian. `_loadGTM` solo corre si `location.hostname` es `opticaalemania.co` o `www.opticaalemania.co`. En un probe del mismo `dist` con hostname `*.pages.dev` no hay petición a `googletagmanager.com`; en `opticaalemania.co` y `www.opticaalemania.co` sí carga `gtm.js?id=GTM-5GSR6FH7`. El iframe `noscript` quedó resuelto en la ronda 2 (ver abajo): ya no se emite en builds de rama.

Opcionales hechos:
- H2 de la FAQ del home: «Preguntas frecuentes», exactamente así, por decisión de Oscar (no «sobre Óptica Alemania»). El componente parte el H2 en dos `<span class="block">`; la segunda va en cursiva y color primario. Se usó el patrón natural de dos palabras: «Preguntas» + «frecuentes». El texto concatenado (con espacio) es «Preguntas frecuentes». El H2 de `/servicios/` no cambia («Preguntas frecuentes sobre nuestros servicios»).
- Se recuperaron como `<p>` de subtítulo, con el estilo que ya existía, las frases «Cuidamos tu visión con experiencia y tecnología.» (home) y «Hablemos de tu visión.» (`/contacto/`). Debajo se mantuvo el texto menor de la v2. No se tocó el H1 ni el subtítulo de `/nosotros/` (NEXUS agrupará después la revisión visual de las 5 páginas).

Opcional no hecho:
- Unificar el bloque «¿Tienes otra pregunta?» en un solo nodo. Hoy son dos variantes `lg:block` / `lg:hidden` (una visible). Dejarlo en un solo bloque sin cambiar el diseño no sale fácil: en escritorio va en la columna pegajosa izquierda y en móvil debajo del acordeón. No se tocó, ni en home ni en `/servicios/`.

Capturas (375 y 1280 px) en `/workspace/optica-shots/`: `after-qa-home-faq-*.png`, `after-qa-home-hero-*.png`, `after-qa-contacto-hero-*.png`.

`pnpm build` y los 5 tests funcionales en verde. Años de trayectoria no se tocaron.


#### Ronda 2 de QA y GTM solo en el build de main (27 nov 2026, ~3:13–3:17 a. m., America/Bogota)

Marketing cerró la ronda 2 de QA de la preview: todo pasa, y validator.schema.org da 0 errores en las 5 URLs. Quedaba un detalle de GTM, solo en `feat/seo-local` (sin PR, merge ni deploy a producción).

- El `<noscript>` con `https://www.googletagmanager.com/ns.html?id=GTM-5GSR6FH7` (y, en el mismo flag, el script inline de GTM) ya no se genera en el HTML de las previews. Condición de build: `process.env.CF_PAGES_BRANCH === 'main'`. Es la opción más simple y robusta con Cloudflare Pages integrado a Git: `CF_PAGES_BRANCH` lo define CF, no hace falta una variable extra (`PUBLIC_ENABLE_GTM`) en el dashboard, y el build de `main` sigue emitiendo GTM igual que hoy (mismo ID `GTM-5GSR6FH7` y misma carga diferida).
- Si `CF_PAGES_BRANCH` no está definido (build local, `pnpm build`), el HTML sí incluye GTM, para que un build local quede equivalente a `main`. La segunda barrera sigue siendo el chequeo de hostname en tiempo de ejecución (solo `opticaalemania.co` y `www.opticaalemania.co`).
- Verificado: `CF_PAGES_BRANCH=main pnpm build` incluye noscript y script con `GTM-5GSR6FH7` en las 5 páginas; `CF_PAGES_BRANCH=feat/seo-local pnpm build` no contiene `googletagmanager` en ninguna. `pnpm build` (local, variable unset) y los 5 tests funcionales en verde.


#### Revisión visual de la preview (NEXUS, 27 nov 2026, ~3:34–4:10 a. m., America/Bogota)

Ajustes de la revisión visual hecha sobre el deploy de `137f633`, aplicados en `feat/seo-local` a partir de `2ef63a0`. Sin PR, merge ni deploy a producción. No se tocaron los años de trayectoria ni el JSON-LD (title/meta de las 5 páginas iguales).

1. `/nosotros/`: el subtítulo volvió a «Conoce nuestra historia y el compromiso que nos mueve en el cuidado de tu salud visual.». En el H1, `cada&nbsp;mirada` evita que «mirada» quede sola.
2. H1 del Home: se reorganizó el corte y el orden de las palabras (se informa en el reporte). Queda «Óptica Alemania:» / «tu óptica en el Barzal, Villavicencio», con las keywords Óptica, Villavicencio y Barzal. `Barzal,&nbsp;Villavicencio` evita que Villavicencio quede colgando. Title/meta/JSON-LD no cambian.
3. Home y `/contacto/`: se mantienen los dos subtítulos; en pantallas pequeñas se redujo el tamaño (`text-xs`) y el interlineado/márgenes (`leading-snug`, menos `mt`). En `sm+` el ritmo anterior se conserva.
4. Palabras solas: se usaron `&nbsp;` o `<br>` manual, sin un span por línea para forzar el wrap.
   - Tech: `tu&nbsp;visión:` y `Farnsworth&nbsp;D-15`.
   - Infantil: `descubrir&nbsp;el&nbsp;mundo` y `merece&nbsp;atención`; el H2 en `lg+` baja de `text-6xl` a `text-5xl` para que «también merece atención» quepa en la columna. Corte: «descubrir el mundo» / «también merece atención».
   - Home «Dirección y horarios…»: `el&nbsp;Barzal` (el problema era en escritorio).
   - Servicios, subtítulo del hero: `en&nbsp;Villavicencio`.
   - Procedimientos, H2 de la galería: «Más evaluaciones» / «en video:» / «atención visual infantil» (con `<br>`).
   - Contacto H1: «Contacto y cómo llegar» / «a Óptica Alemania» / «en Villavicencio» (con `<br>`). En móvil el H1 pasa a `text-3xl` para que las 3 líneas quepan.
   - Contacto H2: «Dirección, horarios» / «y teléfonos en el Barzal»; en `lg+` el tamaño baja a `text-6xl` para que el corte quepa en la columna.
5. Procedimientos, subtítulo: se restauró el texto de producción/main, «Descubre en video cómo realizamos algunos de nuestros procedimientos visuales en Óptica Alemania Villavicencio.» (`hero.description`). Ya no se repite el H1 viejo.
6. El logo del footer ahora apunta a `/`. El del header ya iba a `/`.
7. FAQ: se aumentó el padding inferior de la sección (`pb-32` en móvil, `sm:pb-24`, `lg:pb-28`) para que el botón flotante de WhatsApp no tape una respuesta abierta al final de la sección (vale para home y `/servicios/`, mismo componente). Si el usuario deja una respuesta a media página justo detrás del botón, el solapamiento genérico del FAB puede seguir ocurriendo, igual que en el resto del sitio.

Capturas a 390 px y 1280 px en `/workspace/optica-shots/after-visual-*-390.png` y `after-visual-*-1280.png`. `pnpm build` y los 5 tests en verde (en `test-landing.mjs`, las aserciones de H2 normalizan `&nbsp;` a espacio). 1 H1 por página.

Ajuste posterior (27 nov 2026, ~4:28–4:30 a. m., America/Bogota), todavía en `feat/seo-local` y sin cambiar textos: en el deploy de `3e5ca0d` el H1 del home a 1280 px se partía en tres líneas porque la segunda («tu óptica en el Barzal, Villavicencio») se pasaba por ~2 px del `max-w-3xl`. Se limitó el tamaño en `lg+` (`3.5rem` / `4rem` / `4.75rem`) para el corte de dos líneas que pedía la revisión. El H2 «Dirección y horarios…» en escritorio seguía partiendo «el Barzal» a renglón propio por el `xl:text-8xl` en una columna estrecha; en `lg+` baja a `2.9rem` / `text-6xl` y queda «Dirección y horarios:» / «nos vemos en el Barzal». En móvil (390 px) esos dos encabezados no cambian de corte. `pnpm build` y los 5 tests en verde. JSON-LD y la cuenta de H1 no se tocan.

#### Ronda 2 de la revisión visual (NEXUS, 27 nov 2026, ~4:54–5:16 a. m., America/Bogota)

Ajustes sobre `593c6ba`, solo en `feat/seo-local`. Sin PR, merge ni deploy a producción. No se cambiaron textos, fotos ni años. JSON-LD y la cuenta de H1 no se tocan.

1. Contraste de heroes en escritorio: se amplió el degradado claro del Home (`w-[88%]` / `xl:w-[80%]` / `2xl:w-[70%]`, con paradas más opacas) para que la cursiva «tu óptica en el Barzal, Villavicencio» quede sobre zona clara a 1024 y 1280 px. En `/nosotros/` se alargó y se opaquizó el degradado, se limitó el ancho del bloque (`lg:max-w-xl xl:max-w-2xl`) y se topó el H1 en `xl+`, de modo que «cada mirada» baja a su línea y no queda sobre el portátil. El H1 del Home en escritorio se mantiene en dos líneas, sin palabras solas. A 1440 px el contraste, que ya era bueno, se conserva.
2. Palabras solas en H2, unidas con `&nbsp;` a la anterior (sin cambiar el texto):
   - Home «Nuestra óptica en el Barzal, Villavicencio»: se quitó el `span.block` de «Villavicencio» y quedó `Barzal,&nbsp;Villavicencio`.
   - Nosotros «Nuestra historia en Villavicencio»: se quitó el `<br>` y quedó `en&nbsp;Villavicencio`.
   - Cofrem a 1280: `lente&nbsp;oftálmico`. En el código y en pantalla el adjetivo es «oftálmico», no hay errata «olfálmico».
   - Servicios «Consulta de optometría y adaptación de lentes de contacto»: `de&nbsp;contacto`.
   - Servicios «Procedimientos en video: Volk iNview y Farnsworth D-15»: `Farnsworth&nbsp;D-15`.
   - De paso, también se unieron wrap huérfanos reales: Home «cuidan de&nbsp;ti.» (aparecía a 1024) y el H2 de cierre de Procedimientos «nuestras&nbsp;evaluaciones?». Se dejaron cortes editoriales de dos líneas que no son un wrap accidental: «Preguntas» / «frecuentes» (decisión previa de Oscar), «Nuestra» / «misión.» y «Nuestra» / «visión.», «Hablemos.» y el H2 de cierre de Nosotros con `<br>` manual («escucharte.»).
3. FAQ: en móvil, `pb-40` en la sección, `pb-24` en la respuesta del último ítem y `scroll-margin-bottom`, más un scroll al abrir si la respuesta queda detrás del botón flotante. Solo se tocó el componente de la FAQ, no el botón del sitio. «oftálmicos.» y «corresponda.» quedan por encima del botón.

Se actualizó la aserción de diseño del H1 del Home en `scripts/test-landing.mjs`: el degradado de escritorio ya no mide la mitad exacta del hero. `pnpm build` y los 5 tests en verde. Capturas a 390, 1024, 1280 y 1440 px en `/workspace/optica-shots/after-visual2-*.jpg` (JPG recortados, < 400 KB).

#### Ajuste del vacío en la FAQ (27 nov 2026, ~5:23–5:26 a. m., America/Bogota)

NEXUS aprobó el hero de `d3f0aa1` y pidió quitar el relleno interno (`pb-24`) que dejaba un hueco en la última tarjeta abierta de la FAQ. Se eliminó esa clase. La holgura frente al botón flotante de WhatsApp (56 px) queda en el `pb-40` de la sección en móvil, el `scroll-margin-bottom` de los ítems y el scroll al abrir que ya existía. El componente es compartido (home y `/servicios/`). No se tocó el botón flotante. `pnpm build` y los 5 tests en verde. Capturas en `/workspace/optica-shots/after-visual3-*-open-390.jpg`.

#### Animación del acordeón FAQ (27 nov 2026, ~11:24–11:30 a. m., America/Bogota)

Oscar (vía NEXUS) reportó que, al abrir una pregunta frecuente, la animación se frenaba y la tarjeta se abría de golpe. El acordeón solo existe en Inicio y `/servicios/` (componente compartido `ServicesFaq.astro`); en `/nosotros/` no hay FAQ.

Causa: la apertura medía `scrollHeight` y animaba `height` con Web Animations después de quitar `hidden` (`display: none`) y poner `block`, sin fijar `height: 0` en el mismo frame. Eso podía pintar el panel ya abierto, interrumpir o desalinear la animación, y al terminar se pasaba a `height: auto` (salto). El scroll al abrir, si se disparaba mal, también podía pelear con la transición.

Solución: la altura se anima con CSS `grid-template-rows: 0fr → 1fr` (el hijo `.faq-answer-clip` lleva `overflow: hidden` y `min-height: 0`; el padding/margen queda en el nieto `.faq-answer-body`, para que no salte). Nada de `max-height` fijo ni WAAPI sobre `height`. El scroll que aparta el botón flotante de WhatsApp en móvil corre en `transitionend` (con fallback), no a mitad de la animación. Se mantienen el `pb-40` de la sección y el `scroll-margin-bottom`. `prefers-reduced-motion` deja la apertura/cierre instantáneos. Se re-inicializa en `astro:page-load` (ClientRouter) y `aria-expanded` / `aria-hidden` / `inert` se actualizan al abrir y cerrar.

`pnpm build` y los 5 tests en verde. JSON-LD y el gating de GTM no se tocaron. 1 H1 por página. Tiras de la animación (tras el deploy) en `/workspace/optica-shots/faq-anim-*.jpg`.

#### Restauración del degradado del hero (27 nov 2026, ~12:14 p. m., America/Bogota)

Oscar (vía NEXUS) pidió revertir el degradado blanco que se amplió en `d3f0aa1` (y los ajustes de overlay de `3e5ca0d`/`593c6ba`): en el hero de Inicio cubría a la paciente y dejaba la mitad izquierda de la foto lavada. En producción (`main`, `b882a13`) el degradado solo aclara la zona del texto.

Se restauró el overlay de escritorio **exactamente** como en `b882a13`:
- Home (`Hero.astro`): `w-1/2 bg-gradient-to-r from-white via-white/80 to-transparent`.
- Nosotros (`AboutHero.astro`): `from-brand-ice/90 via-brand-mist/80 via-30% to-brand-mist/20 to-42% to-transparent to-50%`.
- Servicios, Procedimientos y Contacto no tenían cambios de overlay, imagen, `object-position` ni recorte frente a producción; no se tocó su foto ni su degradado. La aserción de `scripts/test-landing.mjs` volvió a exigir que el degradado de escritorio mida la mitad del hero.

Para que el H1 nuevo no invada la foto (sin volver a alargar el degradado): se limitó el `max-width` y se bajó un poco el tamaño en desktop. El H1 de Inicio puede ocupar 3 líneas; se mantienen el `&nbsp;` de «Barzal, Villavicencio» y la lectura a 390 px. En Nosotros, el H1 parte en escritorio tras «Óptica Alemania» para no cruzar la cara; en móvil sigue en una sola línea + la cursiva. En Procedimientos se topó el tamaño en `lg+` para que «Procedimientos visuales» no se parta ni se monte en el equipo. El resto de cambios (FAQ y su animación de `bae1607`, subtítulos, SEO, JSON-LD, gating de GTM) se mantiene. `pnpm build` y los 5 tests en verde. 1 H1 por página. Comparativas producción vs preview en `/workspace/optica-shots/hero-compare-*.jpg`.

#### Escala unificada de los H1 del hero (27 nov 2026, ~12:27 p. m., America/Bogota)

Oscar (vía NEXUS) pidió que los H1 del hero de Inicio, Nosotros, Servicios, Procedimientos y Contacto compartan la misma escala en cada ancho, porque al cambiar de página el tamaño se veía distinto. Se tomó como referencia el H1 de Inicio en producción (`main`, `b882a13`): `clamp(2.15rem, 1.25rem + 3.6vw, 5.5rem)`, que en pantalla da 34,4 px (390), 56,86 px (1024), 66,08 px (1280) y 71,84 px (1440). En producción esas cifras no eran iguales en todas las páginas (Contacto llegaba a 48/72/96 px; Procedimientos usaba otro clamp).

Se añadió la clase compartida `.hero-title` en `src/styles/global.css` (tamaño, interlineado y un `max-width` común: 100% en móvil y, en escritorio, `min(100%, 50vw − padding)` para que el título largo baje de línea en vez de achicarse y se quede en la mitad izquierda). Se quitaron los topes por página de `abb5805` (`lg:text-[2.5rem]`, `3.25rem`, `2.85rem` y los de Procedimientos). No se tocó el degradado ni la foto. Se mantiene el `&nbsp;` de «Barzal, Villavicencio», «cada mirada», «cómo llegar», «Óptica Alemania» y «en Villavicencio».

Nota: con la escala de producción de Inicio, en 1024 px la línea inseparable «Barzal, Villavicencio» (~396 px de ancho, borde derecho ~436 px) se monta sobre el pelo/rostro de la paciente (la zona segura termina antes, ~340–380 px). Un `max-width` común más estrecho no lo evita: esa cadena no parte y desbordaría el recuadro. No se inventó una excepción de tamaño ni de ancho. En 1280/1440 el solape es menor. En Contacto el H1 queda antes de la mitad y de la iris, aunque en 1024/1280 la primera línea aún roza el arranque izquierdo del arco.

`pnpm build` y los 5 tests en verde. 1 H1 por página. Comparativas en `/workspace/optica-shots/hero-compare-*.jpg`.

### Pendiente del cliente

1. **Años de trayectoria (sigue sin confirmar):** `/nosotros/` conserva «+28 Años de experiencia» y el H2 pasó a la fórmula de respaldo de la v2, «Nuestra historia en Villavicencio». `llms.txt` y `llms-full.txt` conservan «Más de 30 años». No se cambió el número en ningún lado.
2. Facebook: **ya no es pendiente** (confirmado por Oscar; permanece en `sameAs`).
3. **Convenio Cofrem: confirmado por Oscar (27 nov 2026, 2:52 a. m., America/Bogota).** El convenio está vigente. La pregunta y la respuesta de la FAQ del home se quedan tal cual («Sí, como afiliados al Club Descuentos Cofrem ofrecemos 15% de descuento en monturas y 10% en lentes oftálmicos.»). Ya no es un pendiente.
4. «Barzal Bajo» en la FAQ del home: **ya no es pendiente** (pasó a «Barzal» en el texto visible y en el JSON-LD, 27 nov 2026, arreglo QA).

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
