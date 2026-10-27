# Feature: Óptica Alemania — Actualización de Copys de Páginas
Branch: worktree/copy-pages
Delivery Strategy: ask-on-risk
Test Runner: pnpm build && node scripts/test-landing.mjs

## Specs
S1: "rey vamos a empezar a modificar los copys de las secciones de cada apgina, empecemos por home donde su copy es home copy que no esta en este worktree sino en el repo princial, para que lo analices y sobre todo tengas tu criterior de si es mejor el nuevo copy o el viejo que esta, analizalo seccion por seccion antes de implementar por favor"
S2: "de acuerdo con tu analisis rey, implemente de acuerdo a lo que analizaste"
S3: Actualizar copys y metadatos del Home (`src/data/siteConfig.ts`, `src/layouts/Layout.astro`, `src/pages/index.astro` y componentes del Home).
S4: Verificación estricta con `pnpm build` y `node scripts/test-landing.mjs`.
S5: "ahora sigue la de nosotros/about rey"
S6: "ajustalo rey"
S7: Actualizar metadatos y componentes de `/nosotros` (`src/pages/nosotros.astro`, `AboutHero.astro`, `AboutTrajectory.astro`, `AboutPurpose.astro`, `AboutTeam.astro`, `AboutSpaces.astro`, `AboutCta.astro`).
S8: Verificación estricta con `pnpm build` y `node scripts/test-nosotros.mjs`.
S9: "ahora procedimientos rey" / "si rey, dale"
S10: Actualizar metadatos y componentes de `/procedimientos` (`src/pages/procedimientos.astro`, `ProcedimientosHero.astro`, `ProcedimientosVolk.astro`, `ProcedimientosFarnsworth.astro`, `ProcedimientosGallery.astro`, `ProcedimientosCta.astro`).
S11: Verificación estricta con `pnpm build` y `node scripts/test-procedimientos.mjs`.
S12: "si rey, analizalo"
S13: "si, ajustalo rey"
S14: Actualizar metadatos y componentes de `/contacto` (`src/pages/contacto.astro`, `ContactHero.astro`, `ContactLocation.astro`):
    - SEO: `Contacto y ubicación | Óptica Alemania Villavicencio`, meta description geolocalizada en Barzal con foco en horarios y cómo llegar.
    - Hero: Párrafo enfocado en responder dudas antes de visitarnos, botón WhatsApp `Escribir por WhatsApp` con mensaje para solicitar información.
    - Ubicación: Eyebrow `DÓNDE ENCONTRARNOS`, descripción clara sobre dirección, horarios y opciones para llegar.
    - Horarios: Discriminar lunes a viernes (8:30 a. m. – 6:00 p. m.) y sábados (8:30 a. m. – 3:00 p. m.).
    - Video de Recorrido: Eyebrow `¿VIENES POR PRIMERA VEZ?`, H3 `Te mostramos cómo llegar.`, descripción para reconocer la entrada y fachada de la sede.
S15: Verificación estricta con `pnpm build` y `node scripts/test-contacto.mjs`.

## Tasks
- T1 [S1,S2,S3]: Copiar `docs/home/home_copy.md` y actualizar copys en `src/data/siteConfig.ts` y componentes del Home | Route: inline | Status: done | Commit: 2772342
- T2 [S4]: Verificación con build y Playwright test (`node scripts/test-landing.mjs`) | Route: inline | Status: done | Commit: 2772342
- T3 [S5,S6,S7]: Implementar actualización de copys de `/nosotros` en `src/pages/nosotros.astro` y componentes `src/components/about/*` | Route: inline | Status: done | Commit: c4fb806
- T4 [S8]: Verificación con build y Playwright test (`node scripts/test-nosotros.mjs`) | Route: inline | Status: done | Commit: c4fb806
- T5 [S9,S10]: Implementar actualización de copys de `/procedimientos` en `src/pages/procedimientos.astro` y componentes `src/components/procedimientos/*` | Route: inline | Status: done | Commit: fea5c36
- T6 [S11]: Verificación con build y Playwright test (`node scripts/test-procedimientos.mjs`) | Route: inline | Status: done | Commit: fea5c36
- T7 [S12,S13,S14]: Implementar actualización de copys de `/contacto` en `src/pages/contacto.astro` y componentes `src/components/contact/*` | Route: inline | Status: in-progress | Commit: pending
- T8 [S15]: Verificación con build y Playwright test (`node scripts/test-contacto.mjs`) | Route: inline | Status: pending | Commit: pending

## Log
L1: "rey vamos a empezar a modificar los copys de las secciones de cada apgina, empecemos por home donde su copy es home copy que no esta en este worktree sino en el repo princial, para que lo analices y sobre todo tengas tu criterior de si es mejor el nuevo copy o el viejo que esta, analizalo seccion por seccion antes de implementar por favor"
L2: Análisis sección por sección presentado al usuario y aprobado con la directiva: "de acuerdo con tu analisis rey, implemente de acuerdo a lo que analizaste".
L3: Home implementado y certificado en commit 2772342.
L4: Usuario solicita continuar con Nosotros ("ahora sigue la de nosotros/about rey"), se presenta análisis sección por sección y se aprueba con la directiva: "ajustalo rey".
L5: Nosotros implementado y certificado en commit c4fb806.
L6: Usuario solicita continuar con Procedimientos ("ahora procedimientos rey"), se presenta análisis sección por sección y se aprueba con la directiva: "si rey, dale".
L7: Procedimientos implementado y certificado en commit fea5c36 con build y Playwright test (0 errores consola, 0 404s, 0 overflow).
L8: Usuario solicita continuar con Contacto ("si rey, analizalo"), se presenta análisis sección por sección y se aprueba con la directiva: "si, ajustalo rey".
