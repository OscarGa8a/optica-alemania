# Feature: Óptica Alemania — Página Nosotros (/nosotros)
Branch: worktree/about-page
Delivery Strategy: ask-on-risk
Test Runner: pnpm build && node scripts/test-nosotros.mjs && node scripts/compare-about.mjs

## Specs
S1: "Implementar la página 'Nosotros' de Óptica Alemania Villavicencio basada en los mockups y recursos de docs/about/ en la ruta /nosotros con Astro + Tailwind CSS."
S2: "Cumplir con los estándares de ingeniería de docs/PLAYBOOK.md: cero scroll horizontal, CLS = 0 (dimensiones explícitas width/height), imágenes WebP optimizadas con picture fallback, atributos semánticos data-event para analítica y marcado accesible WCAG 2.2 AA."
S3: "Directiva de ejecución: Paso 1 (Implementación visual de las 6 secciones de docs/about/) y Paso 3 (Verificación Playwright a 1440x900 y 390x844 + comparativas side-by-side con Sharp). Omitir Lighthouse hasta fotografía definitiva y no abrir PRs hasta solicitud explícita."
S4: "Sección 1 — Hero Sobre Nosotros: Eyebrow 'SOBRE NOSOTROS', titular 'Personas detrás de cada mirada.', descripción, enlace 'Conoce nuestra historia →' hacia #trayectoria e imagen editorial con encuadre desktop y mobile."
S5: "Sección 2 — Nuestra Trayectoria: Composición con foto editorial redondeada a la izquierda, eyebrow 'NUESTRA TRAYECTORIA', titular 'La experiencia está en cada detalle.', párrafos de historia y stat '+28 Años de experiencia en el sector óptico.'."
S6: "Sección 3 — Nuestro Propósito: Tarjetas Bento divididas: Tarjeta 01 ('01 / NUESTRO PROPÓSITO', 'Nuestra misión.') con fondo claro y Tarjeta 02 ('02 / HACIA DÓNDE VAMOS', 'Nuestra visión.') con fondo azul marino institucional (#0C254E / #0E2B54)."
S7: "Sección 4 — Nuestro Equipo: Eyebrow 'NUESTRO EQUIPO', titular 'La atención comienza con las personas.', texto explicativo de atención cercana y cuadrícula con dos tarjetas fotográficas del equipo profesional."
S8: "Sección 5 — Nuestros Espacios: Eyebrow 'NUESTROS ESPACIOS', titular 'Así es nuestra óptica.', descripción de consultorios y exhibición, y fotografía panorámica redondeada de la óptica."
S9: "Sección 6 — Estamos Para Ti: Banner institucional azul marino con las ondas gráficas de assets.png, titular 'Ahora que nos conoces, queremos escucharte.', descripción y CTA 'Explorar servicios →' hacia /#servicios."
S10: "Ruta y Navegación: Página /nosotros (src/pages/nosotros.astro), actualización de Navbar.astro para marcar 'Nosotros' como activo y permitir navegación bidireccional entre la home y /nosotros, e integración con Layout.astro y Footer.astro."
S11: "Certificación Visual Playwright: Script de prueba automatizado (scripts/test-nosotros.mjs) y comparador visual side-by-side (scripts/compare-about.mjs) verificando 0 errores de consola, 0 404s y 0 scroll horizontal en 1440px y 390px."

## Tasks
- T1 [S2,S4,S5,S7,S8,S9]: Optimización y staging de imágenes WebP/PNG en public/images/about/ | Route: inline | Status: done | Commit: 91d6274
- T2 [S4]: Sección 1 — Hero Sobre Nosotros (AboutHero.astro) | Route: inline | Status: done | Commit: 91d6274
- T3 [S5]: Sección 2 — Nuestra Trayectoria (AboutTrajectory.astro) | Route: inline | Status: done | Commit: 91d6274
- T4 [S6]: Sección 3 — Nuestro Propósito (AboutPurpose.astro) | Route: inline | Status: done | Commit: 91d6274
- T5 [S7]: Sección 4 — Nuestro Equipo (AboutTeam.astro) | Route: inline | Status: done | Commit: 91d6274
- T6 [S8]: Sección 5 — Nuestros Espacios (AboutSpaces.astro) | Route: inline | Status: done | Commit: 91d6274
- T7 [S9]: Sección 6 — Estamos Para Ti (AboutCta.astro) | Route: inline | Status: done | Commit: 91d6274
- T8 [S10]: Ensamblaje de página /nosotros (src/pages/nosotros.astro), actualización de Navbar.astro y Footer.astro | Route: inline | Status: done | Commit: 91d6274
- T9 [S11]: Suite de certificación Playwright y comparativas visuales Sharp (scripts/test-nosotros.mjs, scripts/compare-about.mjs) | Route: inline | Status: done | Commit: 91d6274

## Log
L1: "Implementar la página 'Nosotros' de Óptica Alemania Villavicencio basada en los mockups y recursos de docs/about/ en la ruta /nosotros."
L2: ODD task file inicializado con 9 tareas planificadas. Procediendo con T1 (optimización de activos de imagen a WebP).
L3: T1 completada: optimizados y convertidos 7 recursos fotográficos a formato WebP (-83% a -95% reducción) con dimensiones CLS=0 y fallbacks PNG en public/images/about/.
L4: T2 a T7 completadas: implementadas con fidelidad editorial las 6 secciones en src/components/about/ (AboutHero, AboutTrajectory, AboutPurpose, AboutTeam, AboutSpaces, AboutCta).
L5: T8 completada: ruta /nosotros ensamblada en src/pages/nosotros.astro, Navbar.astro actualizado con soporte de tema claro y enlaces inter-página, y Footer.astro adaptado.
L6: T9 completada: suite de Playwright ejecutada (pnpm test:nosotros) con 0 errores de consola, 0 404s y 0 scroll horizontal en desktop (1440px) y mobile (390px). 12 composiciones side-by-side generadas en docs/screenshots/about/. Suite existente de la home (pnpm test) 100% aprobada sin regresiones.
