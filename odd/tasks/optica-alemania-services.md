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
- T6 [S6]: Puerta de aprobación Sección 2 con el usuario | Route: inline | Status: done | Commit: 9befe87
- T7 [S7,S14]: Implementación y certificación Sección 3 — Atención visual a tu medida (VisualCareDetail.astro) | Route: inline | Status: done | Commit: e242726
- T8 [S7]: Puerta de aprobación Sección 3 con el usuario | Route: inline | Status: done | Commit: e242726
- T9 [S8,S14]: Implementación y certificación Sección 4 — Evaluaciones especializadas (SpecializedTests.astro) | Route: inline | Status: done | Commit: 43a90bd
- T10 [S8]: Puerta de aprobación Sección 4 con el usuario | Route: inline | Status: done | Commit: 43a90bd
- T11 [S9,S14]: Implementación y certificación Sección 5 — Urgencias oculares (EyeEmergencies.astro) | Route: inline | Status: done | Commit: fac158c
- T12 [S9]: Puerta de aprobación Sección 5 con el usuario | Route: inline | Status: done | Commit: fac158c
- T13 [S10,S14]: Implementación y certificación Sección 6 — Procedimientos en video (ProceduresPreview.astro) | Route: inline | Status: done | Commit: f528a92
- T14 [S10]: Puerta de aprobación Sección 6 con el usuario | Route: inline | Status: done | Commit: d7a366c
- T15 [S11,S14]: Implementación y certificación Sección 7 — Preguntas frecuentes (ServicesFaq.astro) | Route: inline | Status: done | Commit: 749b166
- T16 [S11]: Puerta de aprobación Sección 7 con el usuario | Route: inline | Status: done | Commit: 749b166
- T17 [S12,S14]: Implementación y certificación Sección 8 — Tu próximo paso / CTA Cierre (ServicesCta.astro) | Route: inline | Status: done | Commit: 872359c
- T18 [S12]: Puerta de aprobación Sección 8 con el usuario | Route: inline | Status: pending | Commit: -
- T19 [S13,S14]: Integración final de la página de Servicios y verificación integral | Route: inline | Status: pending | Commit: -

## Log
L1: "rey continuemos con la pagina de services o nosotros aplciando lo que dice la skill concept-demo por favor, analiza todo y me dices si esta claro para empezar. El contenido de la pagina esta en @[docs/services]"
L2: "autorizo rey, dale"
L3: "continua rey" — Sección 1 Hero certificada visualmente con Playwright (0 console errors, 0 broken assets, 0 overflow) y comparativa side-by-side Sharp generada y aprobada (commit 86ba379). Inicio Sección 2 (Explora nuestros servicios).
L4: "como va eso rey? ya va mucha demora" — Implementación y verificación de Sección 2 (Explora nuestros servicios) finalizada: ServicesOverview.astro, datos en siteConfig.ts, 0 console errors, 0 404s, 0 overflow en desktop (1440px) y mobile (390px), comparativas side-by-side generadas. Presentación de resultados para puerta de aprobación.
L5: "Arrancar directamente con la Tarea T7: Implementación y certificación de la Sección 3 — 01 / Atención visual a tu medida (docs/services/3_atencion_visual_desktop.png y 3_atencion_visual_mobile.png) en src/components/services/VisualCareDetail.astro y datos en src/data/siteConfig.ts." — Sección 2 aprobada por el usuario. T6 marcada done. T7 iniciada.
L6: "Implementación y certificación de Sección 3 (01 / Atención visual a tu medida) completada: VisualCareDetail.astro, datos en siteConfig.ts, imágenes webp optimizadas, 0 errores de consola, 0 404s, 0 overflow horizontal en viewports desktop (1440px) y mobile (390px). Comparativas Sharp side-by-side generadas y auditadas en docs/screenshots/services/."
L7: "continua rey, siguiente seccion" — Sección 3 aprobada por el usuario. T8 marcada done. T9 (Sección 4 — 02 / Evaluaciones especializadas) iniciada.
L8: "continua rey, siguiente seccion" — Sección 4 aprobada y comprometida (43a90bd). T9 y T10 marcadas done. T11 (Sección 5 — 03 / Urgencias oculares) en progreso.
L9: Implementación y certificación de Sección 5 (03 / Urgencias oculares) finalizada: EyeEmergencies.astro, capa de datos en siteConfig.ts, 0 errores de consola, 0 404s, 0 scroll horizontal en 1440px y 390px, comparativas side-by-side generadas y validadas contra docs/services/5_urgencias_oculares_desktop.png y 5_urgencias_oculares_mobile.png (commit fac158c). T11 marcada done. Puerta de aprobación T12 abierta.
L10: "si rey, siguiente seccion" / "conitnua rey" — Sección 5 aprobada por el usuario. T12 marcada done. T13 (Sección 6 — 04 / Procedimientos en video) iniciada.
L11: Implementación y certificación de Sección 6 (04 / Procedimientos en video) finalizada: ProceduresPreview.astro, capa de datos en siteConfig.ts, imágenes webp optimizadas para Volk InView y Farnsworth D-15, 0 errores de consola, 0 404s, 0 scroll horizontal en 1440px y 390px, comparativas side-by-side generadas en docs/screenshots/services/6_procedimientos_desktop_comparison.png y mobile. T13 completada; puerta de aprobación T14 abierta.
L12: "perfecto rey, queda otra seccion?" — Sección 6 aprobada por el usuario. T14 marcada done. Se informa al usuario sobre las 2 secciones restantes (Sección 7 FAQ y Sección 8 CTA Cierre).
L13: "conitnua la otra rey por favor" — Implementación y certificación de Sección 7 (07 / Preguntas frecuentes) finalizada: ServicesFaq.astro, capa de datos centralizada en siteConfig.ts, acordeón interactivo accesible con soporte táctil y teclado, bloque de contacto directo WhatsApp (versión outline brand en desktop y responsive móvil), 0 errores de consola, 0 404s, 0 overflow horizontal en viewports 1440x900 y 390x844. Comparativas Sharp side-by-side generadas en docs/screenshots/services/7_faq_desktop_comparison.png y mobile. T15 marcada done. Puerta de aprobación T16 abierta.
L14: "apruebo, continua rey" / "conitnua rey" — Sección 7 aprobada por el usuario. T16 marcada done. Implementación y certificación de Sección 8 (Tu próximo paso / CTA Cierre) finalizada: ServicesCta.astro, capa de datos en siteConfig.ts (servicesPage.cta), banner en azul profundo con curvas orgánicas de lentes oftálmicos, botón de acción WhatsApp, 0 errores de consola, 0 404s, 0 overflow horizontal en 1440x900 y 390x844. Comparativas Sharp side-by-side generadas en docs/screenshots/services/8_cta_desktop_comparison.png y mobile. T17 marcada done. Puerta de aprobación T18 abierta.
