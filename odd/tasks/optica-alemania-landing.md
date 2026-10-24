# Feature: Óptica Alemania — Concept Demo Landing Page
Branch: feat/optica-alemania-landing
Delivery Strategy: ask-on-risk
Test Runner: pnpm build && node scripts/test-landing.mjs

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

## Tasks
- T1 [S3]: Andamiaje canónico (Astro + Tailwind v4 + dependencias base) | Route: inline | Status: done | Commit: a1f6be0
- T2 [S4]: Configuración de Design Tokens en global.css (@theme) | Route: inline | Status: done | Commit: a1f6be0
- T3 [S5]: Capa de datos centralizada siteConfig.ts y whatsapp.ts | Route: inline | Status: done | Commit: a1f6be0
- T4 [S6]: Layout base (Layout.astro) y Navbar responsivo (Navbar.astro) | Route: inline | Status: done | Commit: a1f6be0
- T5 [S7]: Implementación Sección 1 — Hero (Hero.astro) y montaje en index.astro | Route: inline | Status: done | Commit: a1f6be0
- T6 [S17]: Harness de verificación Playwright (scripts/test-landing.mjs) y certificación visual del Hero | Route: inline | Status: done | Commit: a1f6be0
- T7 [S7,S8]: Puerta de aprobación con el usuario y preparación Sección 2 | Route: inline | Status: in-progress | Commit: pending

## Log
L1: "buen dia mi rey, hoy vamos a trabajar en este proyecto en astro + tailwind, aun no esta inicializado y tienes las secciones e informacion en docs/ quiero que leas la skill concept-demo para que entiendas de que trata todo lo que vamos a hacer"
L2: "si rey, empecemos por favor"
L3: Andamiaje completado, dependencias instaladas, tokens semánticos definidos, Navbar y Hero implementados, harness Playwright verificado 100% pasando en Desktop y Mobile. Commit a1f6be0.
