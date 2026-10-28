# Feature: Óptica Alemania — Página Nosotros (/nosotros)
Branch: main
Delivery Strategy: ask-on-risk
Test Runner: pnpm build && node scripts/test-nosotros.mjs && node scripts/compare-about.mjs
PR: https://github.com/OscarGa8a/optica-alemania/pull/7 (merged) | PR Refinamiento: https://github.com/OscarGa8a/optica-alemania/pull/15

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
L7: Verificación profunda con Playwright sección por sección respecto a los mockups y afinación estética (commit c38695c):
- Sección 1: Incorporada marca de agua del arco visual de marca a gran escala sobre el fondo del Hero.
- Sección 2: Ajustado layout a composición full-bleed lateral en desktop con esquina redondeada y banner superior en mobile con fondo clínico (#F4F7FC).
- Sección 3: Bento cards con escala editorial completa (min-h 640px), arco gráfico decorativo en Card 01 y filigrana invertida en Card 02.
- Sección 4 y 5: Ajustados fondos a tono clínico institucional (#F4F7FC) y redimensionados contenedores fotográficos.
- Sección 6: Ampliada altura del banner a min-h 640px, centrada la filigrana de ojo y ajustada tipografía editorial.
- Regeneradas todas las comparativas visuales side-by-side y certificada la suite sin errores ni overflow.
L8: PR #7 mergeado en main (d64d57c). Sincronizados repositorio principal local y worktree.
L9: Rediseño de AboutHero a full-bleed (100% ancho y alto, gradiente suave translúcido antes del centro, eliminación de líneas azules, tipografía fluida clamp en H1), alineación horizontal simétrica de Navbar con Hero, y reemplazo del logo de texto por imagen de marca oficial (docs/logo.png) con conmutación dinámica claro/oscuro. PR #14 abierto en GitHub (rama: feat/about-hero-and-logo).
L10: Refinamiento integral de las Secciones 2 a 6 de Nosotros y del Footer Institucional contra mockups oficiales:
- Eliminación global de líneas horizontales decorativas en eyebrows para consistencia de diseño.
- Sección 2 (Trayectoria): Orden responsivo corregido (texto primero, foto después) y padding horizontal unificado.
- Sección 3 (Propósito): Bento cards 50/50 full-bleed sin clases arbitrarias ni corchetes.
- Sección 4 (Equipo): Grid asimétrico 8/4 cols en desktop con encuadre editorial exacto de fotos de equipo.
- Sección 5 (Espacios): Título y eyebrow corregidos a 'NUESTROS ESPACIOS' y foto panorámica de exhibición/consultorios.
- Sección 6 (Estamos Para Ti): Titular en 4 líneas con 'escucharte.' en itálica, botón WhatsApp al 100% en mobile, botón secundario ghost pill centrado al 100% en mobile, y filigrana de ojo desplazada al 50% fuera del margen derecho.
- Footer Institucional: Remoción de ola blanca decorativa superior, border-t superior para separación limpia en desktop, filigrana de ojo reposicionada, iconos de contacto en azul primario sólido y blanco, adición de horario de atención, eliminación de duplicidad de Instagram dejándolo exclusivamente en los botones sociales con icono oficial de WhatsApp, eliminación de enlaces legales no existentes con balance geográfico editorial, y remoción de 'Monturas' del menú Explora.
- Cero corchetes arbitrarios y verificación automatizada Playwright en desktop (1440px) y mobile (390px).
