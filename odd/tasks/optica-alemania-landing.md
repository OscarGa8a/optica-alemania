# Feature: Óptica Alemania — Concept Demo Landing Page
Branch: feat/hero-refinement
Delivery Strategy: ask-on-risk
Test Runner: pnpm build && pnpm test && pnpm test:visual && pnpm test:lighthouse

## Specs
S1: "buen dia mi rey, hoy vamos a trabajar en este proyecto en astro + tailwind, aun no esta inicializado y tienes las secciones e informacion en docs/ quiero que leas la skill concept-demo para que entiendas de que trata todo lo que vamos a hacer"
S2: "si rey, empecemos por favor"
S3: Canonical Scaffolding: Astro con Tailwind CSS v4 (@tailwindcss/vite), TypeScript estricto, @fontsource/inter, @fontsource/instrument-serif, lucide-astro, sharp.
S4: Design Tokens en Tailwind v4 (@theme): tokens semánticos corporativos (#1464D9, #182D53, #52617B, #F3F6FA, #F3F1EE, #EAF2FF, #E1E8F0), tipografía fluida y curva editorial cubic-bezier(0.16, 1, 0.3, 1).
S5: Capa de datos centralizada: src/data/siteConfig.ts (teléfonos de Villavicencio, horarios, dirección, navegación, contenidos) y src/utils/whatsapp.ts.
S6: Base Layout y Header/Navbar responsivo con logotipo y botón de atención.
S7: Sección 1 — Hero (src/components/Hero.astro) ajustado fielmente a 1_home_desktop.png y 1_home_mobile.png.
S8: Sección 2 — Quiénes Somos (src/components/AboutSection.astro) con imágenes y layout fiel.
S9: Sección 3 — Nuestros Servicios (src/components/ServicesSection.astro).
S10: Sección 4 — Tecnología en Acción (src/components/TechSection.astro).
S11: Sección 5 — Nuestro Espacio (src/components/SpaceSection.astro).
S12: Sección 6 — Salud Visual Infantil (src/components/KidsVisionSection.astro).
S13: Sección 7 — Monturas y Colección (src/components/EyewearSection.astro).
S14: Sección 8 — Nuestra Trayectoria (src/components/HistorySection.astro).
S15: Sección 9 — Contacto y Citas (src/components/ContactSection.astro).
S16: Sección 10 — Footer Institucional (src/components/Footer.astro).
S17: Certificación visual Playwright: 0 errores de consola, 0 404s, 0 scroll horizontal en 1440x900 y 390x844.
S18: Integración de estándares de ingeniería desde oscar-dev-projects (PLAYBOOK.md, compare-screenshots.mjs, run-lighthouse.mjs, _headers, vercel.json, robots.txt con crawlers de IA, llms.txt y llms-full.txt, aislamiento de staging en doble capa y Analytics.astro).
S19: Evaluación y optimización del Hero con las herramientas del Playbook: imágenes WebP (-95.4% de peso), dimensiones explícitas (CLS 0), atributos data-event de analítica, coincidencia de etiquetas accesibles WCAG 2.2 y certificación Google Lighthouse (Desktop 100/100/100/100, Mobile 95/100/100/100).

## Tasks
- T1 [S3]: Andamiaje canónico (Astro + Tailwind v4 + dependencias base) | Route: inline | Status: done | Commit: b170f8e (PR #1)
- T2 [S4]: Configuración de Design Tokens en global.css (@theme) | Route: inline | Status: done | Commit: b170f8e (PR #1)
- T3 [S5]: Capa de datos centralizada siteConfig.ts y whatsapp.ts | Route: inline | Status: done | Commit: b170f8e (PR #1)
- T4 [S6]: Layout base (Layout.astro) y Navbar responsivo (Navbar.astro) adaptativo con scroll | Route: inline | Status: done | Commit: 13c3c2b (PR #2)
- T5 [S7]: Implementación Sección 1 — Hero (Hero.astro) con bleed editorial desktop y vertical mobile | Route: inline | Status: done | Commit: 13c3c2b (PR #2)
- T6 [S17]: Harness de verificación Playwright (scripts/test-landing.mjs) y certificación visual del Hero (0 errores, 0 404s, 0 overflow) | Route: inline | Status: done | Commit: 13c3c2b (PR #2)
- T8 [S18]: Incorporación de PLAYBOOK.md, scripts de comparativa visual side-by-side y auditoría Lighthouse, infraestructura de cabeceras, AI-SEO y Analytics | Route: inline | Status: done | Commit: 60a8eed (PR #2)
- T9 [S19]: Optimización integral del Hero (WebP picture, dimensiones CLS=0, data-event GTM, certificación Lighthouse 100/100/100/100) | Route: inline | Status: done | Commit: pending
- T7 [S7,S8]: Puerta de aprobación con el usuario y preparación Sección 2 — Quiénes Somos | Route: inline | Status: in-progress | Commit: pending

## Log
L1: "buen dia mi rey, hoy vamos a trabajar en este proyecto en astro + tailwind, aun no esta inicializado y tienes las secciones e informacion en docs/ quiero que leas la skill concept-demo para que entiendas de que trata todo lo que vamos a hacer"
L2: "si rey, empecemos por favor"
L3: Andamiaje completado y fusionado en main vía PR #1. Sincronizado localmente.
L4: "hecho rey, sinceroniza main y continua verificando el hero con playw y mira que visualmente este igual lo hehco contra los mockups"
L5: Sección 1 (Hero) y Navbar completamente verificados. Navbar con transparencia inicial y adaptación en scroll; Hero con Instrument Serif + Inter, fondos fotográficos full-bleed, degradados editoriales, CTA WhatsApp y link secundario. Playwright test 100% aprobado (1440x900 y 390x844: 0 errores de consola, 0 404s, 0 overflow). Capturas generadas y auditadas contra mockups. Commit: 13c3c2b, PR #2 abierto y mergeado.
L6: "rey hay una cosas que quizas se me olvidod ecirte y quizas tuviste que hacerlas de cero para el tema de playw y quizas otras cosas mas que lleguemos a necesitar en este concept demo como algunos scripts y demas, por eso quiero que vayas al repositirio que se llama oscar-dev-projects y copies de alla lo que necesitemos por favor, tanto para el concept demo como para lo que menciona el documento PLAYBOOK.md que esta alla por favor, primero revisa bien rey y pasa lo que necesites antes de continuar"
L7: Incorporado docs/PLAYBOOK.md, scripts/compare-screenshots.mjs (generador de composiciones side-by-side con Sharp), scripts/run-lighthouse.mjs (auditoría Google Lighthouse automatizada), favicon.svg vectorizado, cabeceras de seguridad y caché (_headers, vercel.json), robots.txt completo para crawlers de IA (GPTBot, ClaudeBot, etc.), especificación llms.txt y llms-full.txt (llmstxt.org), arquitectura de aislamiento de staging en doble capa y Analytics.astro con deferred GTM/GA4. Suite completa de build, Playwright y comparativa visual ejecutada y aprobada 100%. Commit: 60a8eed.
L8: "mergeado, sincroniza main. y quiero que ya con estas herramientas que ya tienes, evalues el hero que hiciste a ver si pasa o tienes que modificar cosas y lo haces"
L9: Sincronizado main (cfe48de). Evaluación integral del Hero ejecutada contra los estándares del PLAYBOOK:
- Optimización de imágenes a WebP (-95.4% reducción: de 1.8MB a 83KB) usando elementos <picture> con fallback a PNG y decodificación asíncrona.
- Dimensiones explícitas width/height añadidas a las imágenes del Hero para garantizar CLS = 0.
- Atributos semánticos data-event="whatsapp_cta", data-event-location="hero_primary" / "header_cta" y data-event="services_scroll" conectados con Analytics.astro para medición Zero-TBT.
- Corrección de accesibilidad WCAG 2.5.3 (Label in Name) y contraste WCAG 2.2 AA.
- Auditoría Google Lighthouse superada con éxito rotundo: Desktop: 100/100/100/100 (Perf 100, A11y 100, BP 100, SEO 100), Mobile: 95/100/100/100 (Perf 95, A11y 100, BP 100, SEO 100).
- Suite de Playwright y comparativa visual Sharp 100% aprobadas.
