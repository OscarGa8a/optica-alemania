# Feature: Óptica Alemania — Página Contacto (/contacto)
Branch: feat/contact-page
Delivery Strategy: ask-on-risk
Test Runner: pnpm build && node scripts/test-contacto.mjs && node scripts/compare-contact.mjs

## Specs
S1: "Implementar la página 'Contacto' de Óptica Alemania Villavicencio basada en los mockups y recursos de docs/contact/ en la ruta /contacto con Astro + Tailwind CSS."
S2: "Cumplir con los estándares de ingeniería de docs/PLAYBOOK.md: cero scroll horizontal, CLS = 0 (dimensiones explícitas width/height), imágenes WebP optimizadas con picture fallback, atributos semánticos data-event para analítica y marcado accesible WCAG 2.2 AA."
S3: "Directiva de ejecución: Paso 1 (Implementación visual de las 2 secciones de docs/contact/) y Paso 3 (Verificación Playwright a 1440x900 y 390x844 + comparativas side-by-side con Sharp). Omitir Lighthouse hasta fotografía definitiva y no abrir PRs hasta solicitud explícita."
S4: "Sección 1 — Hero Contacto: Eyebrow 'CONTACTO · ÓPTICA ALEMANIA', titular 'Hablemos de tu visión.', párrafo explicativo, botón principal 'Escríbenos por WhatsApp' y botón secundario 'Llamar ahora', con la marca de agua del arco visual de fondo."
S5: "Sección 2 — Encuéntranos en Villavicencio & Te mostramos el camino: Subsección de ubicación con titular 'Nos vemos en Barzal.', detalles de dirección, horarios, teléfonos y enlace a Google Maps, junto con el mapa ilustrado de Barzal; y tarjeta 'Te mostramos el camino' con video thumbnail de fachada (2_ubicacion_image) y botón de reproducción."
S6: "Ruta y Navegación: Página /contacto (src/pages/contacto.astro), actualización de Navbar.astro para marcar 'Contacto' como activo y permitir navegación bidireccional entre la home, /nosotros y /contacto, e integración con Layout.astro y Footer.astro."
S7: "Certificación Visual Playwright: Script de prueba automatizado (scripts/test-contacto.mjs) y comparador visual side-by-side (scripts/compare-contact.mjs) verificando 0 errores de consola, 0 404s y 0 scroll horizontal en 1440px y 390px."

## Tasks
- T1 [S2,S4,S5]: Optimización y staging de imágenes WebP/PNG en public/images/contact/ | Route: inline | Status: completed | Commit: 2ef8b8f
- T2 [S4]: Sección 1 — Hero Contacto (ContactHero.astro) | Route: inline | Status: completed | Commit: 2ef8b8f
- T3 [S5]: Sección 2 — Ubicación y Video de Recorrido (ContactLocation.astro) | Route: inline | Status: completed | Commit: 2ef8b8f
- T4 [S6]: Ensamblaje de página /contacto (src/pages/contacto.astro), actualización de Navbar.astro y Footer.astro | Route: inline | Status: completed | Commit: 2ef8b8f
- T5 [S7]: Suite de certificación Playwright y comparativas visuales Sharp (scripts/test-contacto.mjs, scripts/compare-contact.mjs) | Route: inline | Status: completed | Commit: 2ef8b8f

## Log
L1: "rey la de contacto ahora por favor, servicios lo estoy haciendo en otro worktree"
L2: ODD task file inicializado con 5 tareas planificadas. Procediendo con T1 (optimización de activos de imagen de docs/contact a public/images/contact).
L3: T1 a T5 completadas exitosamente. Todas las secciones visuales implementadas con estándares de PLAYBOOK.md y responsive en 1440px y 390px.
L4: Ejecución de suite de certificación Playwright (`pnpm test:contacto` y `pnpm test:nosotros`) certificando: 0 errores de consola, 0 peticiones 404/fallidas y 0 scroll horizontal. Comparativas visuales Sharp side-by-side generadas en `docs/screenshots/contact/`.
L5: Commit 2ef8b8f consolidando la implementación completa y suites de prueba de la página Contacto.
L6: Verificación forense y ajuste visual con Playwright contra mockups: se incorporó en ContactLocation.astro el botón principal de conversión 'Contactar por WhatsApp', la cuadrícula responsiva de 4 columnas en mobile para los datos de contacto (Dirección, Teléfonos, Horarios, Instagram), y la sincronización del header en la captura del hero. Certificación 100% limpia.
