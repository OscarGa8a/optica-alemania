# Feature: Óptica Alemania — Página de Servicios (Concept Demo)
Branch: worktree/service-page
Delivery Strategy: ask-on-risk
Test Runner: pnpm build && node scripts/test-services.mjs && node scripts/compare-services-screenshots.mjs

## Specs
S1: "rey continuemos con la pagina de services o nosotros aplciando lo que dice la skill concept-demo por favor, analiza todo y me dices si esta claro para empezar. El contenido de la pagina esta en @[docs/services]"
S2: "autorizo rey, dale"
S3: Instalación de dependencias (pnpm install) y verificación del entorno en worktree-service-page.
S4: Modelado de capa de datos centralizada para Servicios en `src/data/siteConfig.ts` (sin textos hardcodeados en componentes).
S5: Sección 1 — Hero de Servicios (`src/components/services/ServicesHero.astro`) ajustado fielmente a `1_hero_desktop.png` y `1_hero_mobile.png` con tipografía Instrument Serif + Inter, fondos optimizados y enlace suave a servicios.
S6: Sección 2 — Explora nuestros servicios (`src/components/services/ServicesOverview.astro`) con 3 tarjetas pilares y transición de onda superior.
S7: Sección 3 — 01 / Atención visual a tu medida (`src/components/services/VisualCareDetail.astro`) con bloques alternados de consulta y lentes de contacto.
S8: Sección 4 — 02 / Evaluaciones especializadas (`src/components/services/SpecializedTests.astro`) con listado de 5 pruebas y banner tecnológico.
S9: Sección 5 — 03 / Urgencias oculares (`src/components/services/EyeEmergencies.astro`) con CTA de disponibilidad y advertencia médica.
S10: Sección 6 — 04 / Procedimientos en video (`src/components/services/ProceduresPreview.astro`) estilo dark navy editorial con previews.
S11: Sección 7 — 07 / Preguntas frecuentes (`src/components/services/ServicesFaq.astro`) acordeón interactivo y contacto directo.
S12: Sección 8 — Tu próximo paso / CTA Cierre (`src/components/services/ServicesCta.astro`) banner azul con enlace WhatsApp.
S13: Integración de página completa en `src/pages/servicios.astro` con `Navbar.astro` activo en Servicios y `Footer.astro`.
S14: Harness de verificación Playwright y comparativas visuales side-by-side (0 errores de consola, 0 404s, 0 scroll horizontal en 1440x900 y 390x844).

## Tasks
- T1 [S3]: Instalación y verificación del entorno (pnpm install en worktree-service-page) | Route: inline | Status: done | Commit: 86ba379
- T2 [S4]: Capa de datos centralizada siteConfig.ts para Servicios | Route: inline | Status: done | Commit: 86ba379
- T3 [S5,S14]: Implementación y certificación Sección 1 — Hero de Servicios (ServicesHero.astro) con Playwright y comparativa Sharp | Route: inline | Status: done | Commit: 86ba379
- T4 [S5]: Puerta de aprobación Sección 1 con el usuario | Route: inline | Status: done | Commit: 86ba379
- T5 [S6,S14]: Implementación y certificación Sección 2 — Explora nuestros servicios (ServicesOverview.astro) | Route: inline | Status: done | Commit: 9befe87
- T6 [S6]: Puerta de aprobación Sección 2 con el usuario | Route: inline | Status: in-progress | Commit: -
- T7 [S7,S14]: Implementación y certificación Sección 3 — Atención visual a tu medida (VisualCareDetail.astro) | Route: inline | Status: pending | Commit: -
- T8 [S7]: Puerta de aprobación Sección 3 con el usuario | Route: inline | Status: pending | Commit: -
- T9 [S8,S14]: Implementación y certificación Sección 4 — Evaluaciones especializadas (SpecializedTests.astro) | Route: inline | Status: pending | Commit: -
- T10 [S8]: Puerta de aprobación Sección 4 con el usuario | Route: inline | Status: pending | Commit: -
- T11 [S9,S14]: Implementación y certificación Sección 5 — Urgencias oculares (EyeEmergencies.astro) | Route: inline | Status: pending | Commit: -
- T12 [S9]: Puerta de aprobación Sección 5 con el usuario | Route: inline | Status: pending | Commit: -
- T13 [S10,S14]: Implementación y certificación Sección 6 — Procedimientos en video (ProceduresPreview.astro) | Route: inline | Status: pending | Commit: -
- T14 [S10]: Puerta de aprobación Sección 6 con el usuario | Route: inline | Status: pending | Commit: -
- T15 [S11,S14]: Implementación y certificación Sección 7 — Preguntas frecuentes (ServicesFaq.astro) | Route: inline | Status: pending | Commit: -
- T16 [S11]: Puerta de aprobación Sección 7 con el usuario | Route: inline | Status: pending | Commit: -
- T17 [S12,S14]: Implementación y certificación Sección 8 — Tu próximo paso / CTA Cierre (ServicesCta.astro) | Route: inline | Status: pending | Commit: -
- T18 [S12]: Puerta de aprobación Sección 8 con el usuario | Route: inline | Status: pending | Commit: -
- T19 [S13,S14]: Integración final de la página de Servicios y verificación integral | Route: inline | Status: pending | Commit: -

## Log
L1: "rey continuemos con la pagina de services o nosotros aplciando lo que dice la skill concept-demo por favor, analiza todo y me dices si esta claro para empezar. El contenido de la pagina esta en @[docs/services]"
L2: "autorizo rey, dale"
L3: "continua rey" — Sección 1 Hero certificada visualmente con Playwright (0 console errors, 0 broken assets, 0 overflow) y comparativa side-by-side Sharp generada y aprobada (commit 86ba379). Inicio Sección 2 (Explora nuestros servicios).
L4: "como va eso rey? ya va mucha demora" — Implementación y verificación de Sección 2 (Explora nuestros servicios) finalizada: ServicesOverview.astro, datos en siteConfig.ts, 0 console errors, 0 404s, 0 overflow en desktop (1440px) y mobile (390px), comparativas side-by-side generadas. Presentación de resultados para puerta de aprobación.
