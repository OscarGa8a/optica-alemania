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

## Tasks
- T1 [S1,S2,S3]: Copiar `docs/home/home_copy.md` y actualizar copys en `src/data/siteConfig.ts` y componentes del Home | Route: inline | Status: done | Commit: 94080c4
- T2 [S4]: Verificación con build y Playwright test (`node scripts/test-landing.mjs`) | Route: inline | Status: done | Commit: 94080c4

## Log
L1: "rey vamos a empezar a modificar los copys de las secciones de cada apgina, empecemos por home donde su copy es home copy que no esta en este worktree sino en el repo princial, para que lo analices y sobre todo tengas tu criterior de si es mejor el nuevo copy o el viejo que esta, analizalo seccion por seccion antes de implementar por favor"
L2: Análisis sección por sección presentado al usuario y aprobado con la directiva: "de acuerdo con tu analisis rey, implemente de acuerdo a lo que analizaste".
