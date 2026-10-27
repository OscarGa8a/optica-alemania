# Feature: Óptica Alemania — Actualización de Copys de Páginas
Branch: worktree/copy-pages
Delivery Strategy: ask-on-risk
Test Runner: pnpm build && node scripts/test-landing.mjs

## Specs
S1: "rey vamos a empezar a modificar los copys de las secciones de cada apgina, empecemos por home donde su copy es home copy que no esta en este worktree sino en el repo princial, para que lo analices y sobre todo tengas tu criterior de si es mejor el nuevo copy o el viejo que esta, analizalo seccion por seccion antes de implementar por favor"
S2: "de acuerdo con tu analisis rey, implemente de acuerdo a lo que analizaste"
S3: Actualizar copys y metadatos del Home (`src/data/siteConfig.ts`, `src/layouts/Layout.astro`, `src/pages/index.astro` y componentes del Home) siguiendo las decisiones acordadas:
    - SEO: Meta title `Óptica Alemania en Villavicencio | Optometría y salud visual`, meta description geolocalizada en Barzal con llamada a WhatsApp, OG title/description actualizados.
    - Hero: Párrafo unificado destacando sede Barzal y atención optométrica, CTA 2 navegando a `/servicios`, mensaje WhatsApp preciso.
    - Quiénes somos: H2 promovido a `Detrás de cada mirada, hay personas que cuidan de ti.`, eyebrow `CONÓCENOS`, nuevo párrafo de escucha y confianza, CTA a `/nosotros`.
    - Servicios: Conservar H2 visual `Atención visual para cada necesidad.`, actualizar descripción orientando al catálogo completo, actualizar títulos y descripciones de las 4 tarjetas bento y CTA a `/servicios`.
    - Tecnología: H2 `La tecnología detrás de cada evaluación.`, títulos y descripciones con rigor técnico sin sobrepromesas para Volk iNview y Farnsworth D-15, CTA a `/procedimientos`.
    - Nuestro Espacio: Eyebrow `CONOCE NUESTRA SEDE`, H2 `Conoce dónde cuidamos tu visión.`, párrafo con sede Barzal, CTA `Cómo llegar` a `/contacto#ubicacion`.
    - Salud Infantil: Eyebrow `ATENCIÓN VISUAL INFANTIL`, H2 `Su manera de descubrir el mundo también merece atención.`, párrafo enfocado en exploración y aprendizaje infantil, CTA a WhatsApp.
    - Monturas: Párrafo enfocado en estilo personal y orientación del asesor, CTA `Consultar monturas` a WhatsApp.
    - Trayectoria: Eyebrow `CONFIANZA QUE NOS ACOMPAÑA`, H2 `Empresas que han confiado en nosotros.`, párrafo de relaciones y confianza.
    - Contacto y Ubicación: Eyebrow `ENCUÉNTRANOS EN VILLAVICENCIO`, H2 `Nos vemos en Barzal.`, párrafo invitando a revisar llegada y horarios, CTAs a Google Maps y `/contacto`.
    - Footer: Descripción enriquecida semánticamente, enlaces actualizados a `/`, `/nosotros`, `/servicios`, `/procedimientos`, `/contacto`.
S4: Verificación estricta con `pnpm build` y `node scripts/test-landing.mjs`.
S5: "ahora sigue la de nosotros/about rey"
S6: "ajustalo rey"
S7: Actualizar metadatos y componentes de `/nosotros` (`src/pages/nosotros.astro`, `AboutHero.astro`, `AboutTrajectory.astro`, `AboutPurpose.astro`, `AboutTeam.astro`, `AboutSpaces.astro`, `AboutCta.astro`):
    - SEO: `Nosotros | Óptica Alemania en Villavicencio`, meta description geolocalizada en Barzal.
    - Hero: Eyebrow `NOSOTROS · ÓPTICA ALEMANIA`, nuevo párrafo de bienvenida institucional.
    - Trayectoria: Párrafos de historia viva ligados a las personas y a la comunidad de Villavicencio.
    - Propósito: Misión y visión con enfoque en escucha, información comprensible y confianza comunitaria.
    - Equipo: Párrafo centrado en empatía y conversación clara y respetuosa.
    - Espacios: Eyebrow `NUESTRAS INSTALACIONES`, mención a la sede de Barzal para familiarizarse antes de la visita.
    - Cierre / Estamos para ti: Doble CTA de conversión (Botón primario de WhatsApp con mensaje contextual + enlace secundario a Servicios).
S8: Verificación estricta con `pnpm build` y `node scripts/test-nosotros.mjs`.
S9: "ahora procedimientos rey" / "si rey, dale"
S10: Actualizar metadatos y componentes de `/procedimientos` (`src/pages/procedimientos.astro`, `ProcedimientosHero.astro`, `ProcedimientosVolk.astro`, `ProcedimientosFarnsworth.astro`, `ProcedimientosGallery.astro`, `ProcedimientosCta.astro`):
    - SEO: `Procedimientos visuales en Villavicencio | Óptica Alemania`, meta description orientada a evaluaciones visuales como evaluación retinal y Farnsworth D-15.
    - Hero: Subtítulo fluido destacando videos de procedimientos en Óptica Alemania Villavicencio.
    - Volk iNview: Eyebrow `EVALUACIÓN RETINAL · VOLK INVIEW`, descripción con precisión clínica delimitando la interpretación profesional, mensaje WhatsApp contextual conciso.
    - Farnsworth D-15: Eyebrow `PERCEPCIÓN DEL COLOR · FARNSWORTH D-15`, H2 `Cada color cuenta una historia.`, descripción de discriminación cromática organizando fichas según similitud de tonalidades, mensaje WhatsApp contextual.
    - Galería / Más de nuestra atención: Eyebrow `MÁS DE NUESTRA ATENCIÓN`, H2 `Otros momentos del cuidado visual.`, descripciones de consulta visual y atención infantil.
    - Cierre / Estamos para orientarte: Eyebrow `ESTAMOS PARA ORIENTARTE`, párrafo invitando a consultar dudas y disponibilidad, mensaje WhatsApp identificando procedencia de la consulta web, CTA secundario a servicios.
S11: Verificación estricta con `pnpm build` y `node scripts/test-procedimientos.mjs`.

## Tasks
- T1 [S1,S2,S3]: Copiar `docs/home/home_copy.md` y actualizar copys en `src/data/siteConfig.ts` y componentes del Home | Route: inline | Status: done | Commit: 2772342
- T2 [S4]: Verificación con build y Playwright test (`node scripts/test-landing.mjs`) | Route: inline | Status: done | Commit: 2772342
- T3 [S5,S6,S7]: Implementar actualización de copys de `/nosotros` en `src/pages/nosotros.astro` y componentes `src/components/about/*` | Route: inline | Status: done | Commit: c4fb806
- T4 [S8]: Verificación con build y Playwright test (`node scripts/test-nosotros.mjs`) | Route: inline | Status: done | Commit: c4fb806
- T5 [S9,S10]: Implementar actualización de copys de `/procedimientos` en `src/pages/procedimientos.astro` y componentes `src/components/procedimientos/*` | Route: inline | Status: pending | Commit: pending
- T6 [S11]: Verificación con build y Playwright test (`node scripts/test-procedimientos.mjs`) | Route: inline | Status: pending | Commit: pending

## Log
L1: "rey vamos a empezar a modificar los copys de las secciones de cada apgina, empecemos por home donde su copy es home copy que no esta en este worktree sino en el repo princial, para que lo analices y sobre todo tengas tu criterior de si es mejor el nuevo copy o el viejo que esta, analizalo seccion por seccion antes de implementar por favor"
L2: Análisis sección por sección presentado al usuario y aprobado con la directiva: "de acuerdo con tu analisis rey, implemente de acuerdo a lo que analizaste".
L3: Home implementado y certificado en commit 2772342.
L4: Usuario solicita continuar con Nosotros ("ahora sigue la de nosotros/about rey"), se presenta análisis sección por sección y se aprueba con la directiva: "ajustalo rey".
L5: Nosotros implementado y certificado en commit c4fb806.
L6: Usuario solicita continuar con Procedimientos ("ahora procedimientos rey"), se presenta análisis sección por sección y se aprueba con la directiva: "si rey, dale".
