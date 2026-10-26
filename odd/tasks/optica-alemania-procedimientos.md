# Feature: Óptica Alemania — Página Procedimientos (/procedimientos)
Branch: feat/procedimientos-page
Delivery Strategy: ask-on-risk
Test Runner: pnpm build && node scripts/test-procedimientos.mjs && node scripts/compare-procedimientos.mjs

## Specs
S1: "Implementar la página 'Procedimientos' de Óptica Alemania Villavicencio basada en los mockups y recursos de docs/procedimientos/ en la ruta /procedimientos con Astro + Tailwind CSS."
S2: "Cumplir con los estándares de ingeniería de docs/PLAYBOOK.md: cero scroll horizontal, CLS = 0 (dimensiones explícitas width/height), imágenes WebP optimizadas con picture fallback, atributos semánticos data-event para analítica y marcado accesible WCAG 2.2 AA."
S3: "Directiva de ejecución: Paso 1 (Implementación visual de las 5 secciones de docs/procedimientos/) y Paso 3 (Verificación Playwright a 1440x900 y 390x844 + comparativas side-by-side con Sharp). Omitir Lighthouse hasta fotografía definitiva y no abrir PRs hasta solicitud explícita."
S4: "Sección 1 — Hero Procedimientos: Eyebrow 'PROCEDIMIENTOS · ÓPTICA ALEMANIA', titular 'Así realizamos nuestras evaluaciones paso a paso.' (con 'paso a paso.' en itálica azul), párrafo 'Descubre en video cómo realizamos algunos de nuestros procedimientos visuales en Óptica Alemania Villavicencio.', CTA 'Explorar procedimientos →' hacia ancla #evaluaciones, e imagen responsiva destacada (1_hero_desktop_image / 1_hero_image)."
S5: "Sección 2 — Tecnología Volk InView: Eyebrow '01 / TECNOLOGÍA EN ACCIÓN', titular 'Evaluación retinal de cerca.' (con 'de cerca.' en itálica azul), párrafo 'Descubre cómo realizamos este procedimiento mediante tecnología Volk InView y conoce parte del proceso de evaluación de la retina en Óptica Alemania Villavicencio.', CTA 'Consultar esta evaluación →' con ícono de WhatsApp, y tarjeta de video preview con controles mockeados (barra de progreso, mute, fullscreen)."
S6: "Sección 3 — Visión del Color Farnsworth D-15: Eyebrow '02 / VISIÓN DEL COLOR', titular 'Test de Farnsworth D-15. Cada color cuenta una historia.' (con 'Cada color cuenta una historia.' en itálica azul), párrafo 'Descubre cómo realizamos esta prueba para evaluar la percepción de los colores en Óptica Alemania Villavicencio.', CTA 'Consultar esta prueba →' con ícono de WhatsApp, y tarjeta de video preview interactiva (play/pausa, timestamp 0:12 / 0:45, scrubber con thumb blanco, audio, fullscreen)."
S7: "Sección 4 — Más de Nuestro Trabajo: Header centrado con eyebrow 'MÁS DE NUESTRO TRABAJO', titular 'La atención está en cada detalle.' (con 'cada detalle.' en itálica azul), párrafo 'Conoce otros momentos de las evaluaciones visuales que realizamos en Óptica Alemania.', y galería de 2 fotografías en consultorio lado a lado (4_nuestro_trabajo_image1.webp y 4_nuestro_trabajo_image2.webp)."
S8: "Sección 5 — Banner de Contacto: Contenedor con gradiente sutil y líneas decorativas, eyebrow 'CONTINUEMOS CUIDANDO TU VISIÓN', titular '¿Quieres conocer más sobre nuestras evaluaciones?' (con 'evaluaciones?' en itálica azul), párrafo 'Nuestro equipo puede orientarte sobre los servicios disponibles y ayudarte a consultar la disponibilidad de atención en Óptica Alemania Villavicencio.', botón principal 'Hablar por WhatsApp →' y enlace secundario 'Explorar servicios →' hacia /servicios."
S9: "Ruta y Navegación: Página /procedimientos (src/pages/procedimientos.astro), actualización de Navbar.astro y Footer.astro para marcar 'Procedimientos' como activo y soportar navegación cruzada entre inicio, /nosotros, /contacto y /procedimientos, con Layout.astro (headerTheme='light')."
S10: "Certificación Visual Playwright: Script de prueba automatizado (scripts/test-procedimientos.mjs) y comparador visual side-by-side (scripts/compare-procedimientos.mjs) verificando 0 errores de consola, 0 404s y 0 scroll horizontal en 1440px y 390px."

## Tasks
- T1 [S2,S4,S5,S6,S7]: Optimización y staging de imágenes WebP/PNG en public/images/procedimientos/ | Route: inline | Status: completed | Commit: e501002
- T2 [S4]: Sección 1 — Hero Procedimientos (ProcedimientosHero.astro) | Route: inline | Status: completed | Commit: e501002
- T3 [S5]: Sección 2 — Volk InView (ProcedimientosVolk.astro) | Route: inline | Status: completed | Commit: e501002
- T4 [S6]: Sección 3 — Farnsworth D-15 (ProcedimientosFarnsworth.astro) | Route: inline | Status: completed | Commit: e501002
- T5 [S7]: Sección 4 — Galería Nuestro Trabajo (ProcedimientosGallery.astro) | Route: inline | Status: completed | Commit: e501002
- T6 [S8]: Sección 5 — Banner Contacto CTA (ProcedimientosCta.astro) | Route: inline | Status: completed | Commit: e501002
- T7 [S9]: Página /procedimientos (src/pages/procedimientos.astro) y actualización de Navbar.astro / Footer.astro | Route: inline | Status: completed | Commit: e501002
- T8 [S10]: Suite de certificación Playwright y comparativas visuales Sharp (scripts/test-procedimientos.mjs, scripts/compare-procedimientos.mjs) | Route: inline | Status: completed | Commit: e501002

## Log
L1: "perfecto rey, ahora hagamos la pagina de procedimientos creo que se llama, analiza antes de empezar rey"
L2: "si rey, dale, arranca"
L3: "conitnua rey" — Refinamiento a fidelidad 1:1 de los 5 componentes (tipografía editorial, orden responsivo mobile, remoción de marcas de agua pesadas, proporción 60% en hero desktop), verificación Playwright completa en verde (0 errores consola, 0 404s, 0 overflow horizontal) y generación de comparativas visuales side-by-side con Sharp.
L4: "haz una verificacion de nuevo, usando el navegador de playw para ver lo que se hizo y comprarlos contra los mockups y modificar lo que haga falta" — Auditoría visual forense con Playwright: adición de subtítulos verbatim en tarjetas de galería ("Una evaluación completa y detallada de la salud visual con tecnología de precisión." / "Cuidado especializado y adaptado a las necesidades de los más pequeños con paciencia y calidez."), padding generoso y escala tipográfica agrandada en CTA Banner, captura de Hero con Navbar incluida para alineación 1:1 en comparativas, y regeneración de comparativas visuales side-by-side Sharp con cero errores. Commit: 21675be.
L5: "por favor pr rey" — Rama `feat/procedimientos-page` publicada en GitHub y Pull Request creado exitosamente: https://github.com/OscarGa8a/optica-alemania/pull/9.
