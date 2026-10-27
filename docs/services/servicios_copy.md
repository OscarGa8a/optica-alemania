# Óptica Alemania — Servicios | Copy web y SEO

**Versión:** 1.0 — propuesta editorial completa para revisión y aprobación  
**Fecha:** 24 de octubre de 2026  
**Proyecto:** Óptica Alemania · Villavicencio, Meta  
**Alcance:** Fase 1 — sitio institucional (sin catálogo comercial ni agendamiento en línea)  
**Página:** Servicios  
**Ruta propuesta:** `/servicios`  
**Documentos relacionados:** `optica_alemania_home_copy.md` y `optica_alemania_nosotros_copy.md`.

> **Cómo usar este documento.** Los bloques **COPY WEB** contienen texto visible propuesto para publicar en los componentes del diseño aprobado. Los apartados **Notas de implementación**, **SEO**, **Accesibilidad** y **Validaciones** son internos; **no aparecen en la web**. El texto se encuentra listo para revisión editorial, **no equivale a la aprobación clínica del establecimiento**. Los nombres y el alcance de los servicios, los horarios, las condiciones de atención y las imágenes deben contrastarse con Óptica Alemania antes del lanzamiento. No se han inventado precios, profesionales, diagnósticos, capacidades de urgencia ni garantías.

---

## 0. Objetivo editorial y arquitectura

### Propósito

Explicar qué servicios de optometría y evaluaciones visuales pueden consultarse en Óptica Alemania, ayudar a las personas a encontrar información comprensible y ofrecer un contacto contextualizado por WhatsApp cuando deseen preguntar por un servicio concreto.

### Diferenciación entre páginas

- **Home:** presenta la oferta de forma resumida y orienta hacia Servicios.
- **Nosotros:** identidad, trayectoria, personas e instalaciones del negocio.
- **Servicios (esta página):** **qué se ofrece**, para qué sirve cada evaluación en términos generales y cómo consultar disponibilidad.
- **Procedimientos:** **cómo se realiza** una selección de evaluaciones, usando material auténtico y autorizado.
- **Contacto:** dirección, horarios y canales oficiales de contacto.

### Audiencia y tono

- Personas que buscan consulta optométrica o información sobre una prueba específica en Villavicencio.
- Pacientes que no conocen los términos técnicos y quieren orientarse antes de contactar.
- Familias que necesitan consultar las condiciones de atención infantil.

**Voz:** profesional, clara, serena y cercana. Trato de **tú**, sin alarmismo. Explicar el propósito general de las pruebas sin indicar diagnósticos, tratamientos ni decisiones médicas a partir de una descripción web. Evitar frases como «detectamos todas las enfermedades», «la tecnología más avanzada», «diagnóstico garantizado» o «urgencias 24/7».

### Estructura aprobada (8 secciones + Footer)

1. Hero — Servicios de Óptica Alemania.
2. Explora nuestros servicios — Navegación por categorías.
3. Atención visual — Dos servicios.
4. Evaluaciones especializadas — Cinco pruebas.
5. Urgencias oculares — Alcance y consulta de disponibilidad.
6. Conoce nuestros procedimientos — Puente a la página de Procedimientos.
7. Preguntas frecuentes — Cinco respuestas prácticas.
8. Cierre / Contacto — Consulta por WhatsApp.
9. Footer global — Reutilizar componente y datos del Home.

**No añadir secciones, carruseles, reserva online ni nuevas funcionalidades de comercio electrónico.**

---

## 1. SEO on-page

| Campo | Copy / configuración recomendada |
|---|---|
| **Slug** | `/servicios` |
| **Meta title** | `Servicios de optometría en Villavicencio | Óptica Alemania` |
| **Meta description** | `Conoce los servicios de Óptica Alemania en Villavicencio: consulta de optometría, lentes de contacto y evaluaciones visuales especializadas.` |
| **OG title** | `Servicios de salud visual | Óptica Alemania` |
| **OG description** | `Explora nuestra atención optométrica, las evaluaciones visuales disponibles y cómo consultar cada servicio en Villavicencio.` |
| **H1 único** | `Cuidado visual pensado para ti.` |
| **Búsqueda principal** | `servicios de optometría en Villavicencio` |
| **Búsquedas relacionadas** | `consulta de optometría`, `adaptación de lentes de contacto`, `presión intraocular`, `retinofotografía`, `evaluación de ojo seco`, `prueba Farnsworth` |
| **Idioma** | `es-CO` |
| **Canonical** | Dominio público definitivo + `/servicios` (no usar el dominio de demostración como canonical de producción) |

**Jerarquía semántica:** un único `h1` en Hero; `h2` para los bloques principales; `h3` para servicios individuales y preguntas cuando tenga sentido. Los nombres técnicos deben conservarse si el negocio los valida. Evitar repetir «Villavicencio» en cada tarjeta: la relevancia local se comunica mediante la marca, la localización y la metadata.

**Criterio de indexación:** si la página continúa temporalmente en `optica-alemania.oscardev.co`, respetar la decisión de no indexar la demo hasta la publicación autorizada. Los metadatos aquí propuestos son para la web final.

---

# COPY WEB — SECCIÓN 01 · HERO

**ID sugerido:** `#inicio-servicios`  
**Objetivo:** presentar la oferta profesional de manera comprensible y permitir que el visitante explore la página.

**Eyebrow**  
`NUESTROS SERVICIOS`

**H1**  
`Cuidado visual pensado para ti.`

**Descripción**  
`Conoce los servicios de optometría y las evaluaciones visuales que puedes consultar en Óptica Alemania, en Villavicencio. Encuentra información clara para dar tu siguiente paso.`

**CTA principal**  
- **Texto:** `Explorar servicios`  
- **Destino:** `#explora-servicios`.

**CTA secundario:** no introducirlo si el Hero aprobado solo contempla una acción. Si el diseño ya incluye un segundo CTA, utilizar `Consultar por WhatsApp` y el mensaje general de contacto definido en el apartado 11.

**Notas editoriales y de diseño**
- Mantener composición e imagen aprobadas, Header transparente sobre el Hero si así está definido.
- No utilizar cifras de experiencia, superlativos, ofertas ni promesas de diagnóstico.
- En mobile, mantener el mismo H1. Resolver saltos de línea desde la maquetación sin crear otro titular SEO.
- **Estado del copy:** propuesta editorial publicable tras validar la oferta del negocio.

---

# COPY WEB — SECCIÓN 02 · EXPLORA NUESTROS SERVICIOS

**ID sugerido:** `#explora-servicios`  
**Objetivo:** servir como índice interno de la oferta, con tres categorías claras.

**Eyebrow**  
`ENCUENTRA LO QUE NECESITAS`

**H2**  
`Encuentra la atención que buscas.`

**Introducción**  
`Explora nuestras áreas de atención y conoce las evaluaciones disponibles. Puedes consultar cada servicio antes de visitarnos.`

### Tarjeta 01 — Atención visual

**Título (H3)**  
`Atención visual`

**Descripción**  
`Consulta de optometría especializada y adaptación de lentes de contacto.`

**Acción**  
`Ver servicios` → `#atencion-visual`.

### Tarjeta 02 — Evaluaciones especializadas

**Título (H3)**  
`Evaluaciones especializadas`

**Descripción**  
`Pruebas orientadas a explorar diferentes aspectos de la visión y la salud ocular.`

**Acción**  
`Ver evaluaciones` → `#evaluaciones-especializadas`.

### Tarjeta 03 — Urgencias oculares

**Título (H3)**  
`Urgencias oculares`

**Descripción**  
`Conoce el alcance y la disponibilidad de esta atención antes de acudir a nuestra sede.`

**Acción**  
`Consultar atención` → `#urgencias-oculares`.

**Nota UX:** estas tres tarjetas son **enlaces de navegación interna**, no CTA que saquen de inmediato al usuario de la página. Los botones y sus destinos deben mantener una misma convención visual. La tercera tarjeta no implica servicio médico de urgencias ni disponibilidad inmediata.

---

# COPY WEB — SECCIÓN 03 · ATENCIÓN VISUAL

**ID sugerido:** `#atencion-visual`  
**Objetivo:** explicar los dos servicios centrales de consulta y orientación visual.

**Eyebrow**  
`ATENCIÓN VISUAL`

**H2**  
`El primer paso para conocer tu visión.`

**Introducción**  
`Cada persona tiene necesidades visuales distintas. Conoce las opciones de valoración y adaptación que puedes consultar con nuestro equipo.`

## Servicio AV-01 — Consulta de optometría especializada

**Título (H3)**  
`Consulta de optometría especializada`

**Descripción**  
`Una consulta para valorar diferentes aspectos de tu visión, conversar sobre las molestias o dificultades que puedas presentar y conocer las recomendaciones que correspondan según la evaluación profesional.`

**Microcopy opcional, si el diseño incluye una línea de apoyo**  
`Consulta por disponibilidad y condiciones de atención.`

**CTA**  
- **Texto:** `Consultar este servicio`
- **Destino:** WhatsApp oficial verificado.
- **Mensaje precargado:** `Hola, visité la página de Servicios de Óptica Alemania y quisiera información sobre la consulta de optometría especializada.`

**Revisión clínica obligatoria:** confirmar qué incluye la consulta, si realmente se denomina «especializada», qué profesionales la realizan y qué pruebas pueden cobrarse por separado. No afirmar que incluye todas las evaluaciones listadas en esta página.

## Servicio AV-02 — Adaptación de lentes de contacto

**Título (H3)**  
`Adaptación de lentes de contacto`

**Descripción**  
`La adaptación de lentes de contacto requiere valorar las características de tus ojos y el tipo de lente adecuado para tu caso. Consulta cómo se realiza este proceso y qué necesitas para comenzar.`

**Microcopy opcional**  
`Pregunta por la valoración y las opciones disponibles.`

**CTA**  
- **Texto:** `Consultar este servicio`
- **Destino:** WhatsApp oficial verificado.
- **Mensaje precargado:** `Hola, quisiera información sobre la adaptación de lentes de contacto en Óptica Alemania.`

**Revisión clínica obligatoria:** confirmar tipos de lentes adaptados, criterios de elegibilidad, controles y condiciones. No garantizar que todas las personas sean candidatas ni que todas las marcas o tipos de lentes estén disponibles.

**Nota de composición:** la extensión de los textos permite mantener dos bloques editoriales diferenciados, tal como se diseñaron para desktop y mobile. Si una tarjeta queda demasiado larga, resumir el microcopy opcional antes de modificar el cuerpo principal.

---

# COPY WEB — SECCIÓN 04 · EVALUACIONES ESPECIALIZADAS

**ID sugerido:** `#evaluaciones-especializadas`  
**Objetivo:** describir brevemente cinco pruebas, con nombre identificable y explicación comprensible.

**Eyebrow**  
`EVALUACIONES ESPECIALIZADAS`

**H2**  
`Exploramos diferentes aspectos de tu visión.`

**Introducción**  
`Conoce algunas pruebas que pueden aportar información durante una evaluación visual. La indicación de cada una depende de las necesidades del paciente y del criterio profesional.`

## Evaluación EE-01 — Medición de presión intraocular

**Título (H3)**  
`Medición de presión intraocular`

**Descripción**  
`Esta prueba mide la presión dentro del ojo y aporta un dato que puede ser relevante durante la evaluación de la salud ocular.`

**CTA**  
`Consultar evaluación` → WhatsApp.

**Mensaje precargado**  
`Hola, quisiera información sobre la medición de presión intraocular en Óptica Alemania.`

**Nota clínica:** la tonometría **no diagnostica por sí sola glaucoma**. Confirmar el método utilizado por la óptica antes de describir el procedimiento.

## Evaluación EE-02 — Evaluación de ojo seco

**Título (H3)**  
`Evaluación de ojo seco`

**Descripción**  
`Consulta por las pruebas disponibles para valorar molestias relacionadas con la sequedad ocular y obtener orientación sobre la evaluación que corresponda.`

**CTA**  
`Consultar evaluación` → WhatsApp.

**Mensaje precargado**  
`Hola, quisiera información sobre la evaluación de ojo seco en Óptica Alemania.`

**Nota clínica:** confirmar qué pruebas realiza la empresa. No atribuirle automáticamente prueba de Schirmer, tiempo de ruptura lagrimal, meibografía u otras técnicas específicas.

## Evaluación EE-03 — Visión del color: Ishihara y Farnsworth

**Título (H3)**  
`Evaluación de visión del color`

**Subtítulo opcional**  
`Test de Ishihara y Farnsworth D-15`

**Descripción**  
`Estas pruebas permiten explorar cómo distingues determinados colores. Ishihara utiliza láminas y Farnsworth D-15 emplea fichas cromáticas que se organizan según sus tonalidades.`

**CTA**  
`Consultar evaluación` → WhatsApp.

**Mensaje precargado**  
`Hola, quisiera información sobre las pruebas de visión del color Ishihara y Farnsworth D-15.`

**Nota clínica:** validar que ambos test se realizan en la sede y bajo qué condiciones. No presentarlos como pruebas equivalentes ni prometer detección de cualquier alteración visual.

## Evaluación EE-04 — Examen digital por retroiluminación

**Título (H3)**  
`Examen digital por retroiluminación`

**Descripción editorial provisional — NO PUBLICAR SIN REVISIÓN TÉCNICA**  
`Consulta con nuestro equipo en qué consiste el examen digital por retroiluminación, cuál es su finalidad y cuándo puede indicarse.`

**CTA**  
`Consultar evaluación` → WhatsApp.

**Mensaje precargado**  
`Hola, quisiera información sobre el examen digital por retroiluminación que aparece en la página de Óptica Alemania.`

**BLOQUEO DE PUBLICACIÓN:** la denominación proviene del material trabajado, pero **no tenemos definición técnica validada**. Pedir al profesional: nombre correcto del examen, estructura ocular evaluada, equipo utilizado y objetivo. Sustituir esta descripción genérica por una explicación breve y precisa tras su aprobación. **No equipararlo por cuenta propia con retinofotografía u otra técnica.**

## Evaluación EE-05 — Retinofotografía

**Título (H3)**  
`Retinofotografía`

**Descripción**  
`Consiste en obtener imágenes de la retina que pueden utilizarse como apoyo documental durante una valoración visual, de acuerdo con el criterio del profesional.`

**CTA**  
`Consultar evaluación` → WhatsApp.

**Mensaje precargado**  
`Hola, quisiera información sobre la retinofotografía en Óptica Alemania.`

**Nota clínica:** comprobar equipo, tipo de imagen obtenida y alcance real de la prestación. No afirmar que la fotografía por sí sola permite diagnosticar todas las enfermedades oculares.

### Regla común para las cinco evaluaciones

- Mantener el mismo texto de botón `Consultar evaluación`, con **un mensaje de WhatsApp distinto para cada servicio**.
- Evitar horarios, precios, resultados o tiempos de entrega no confirmados.
- Si una evaluación no se presta efectivamente, **no publicar su tarjeta**; reajustar la maquetación sin sustituirla por un servicio inventado.
- Las etiquetas auxiliares no deben aparecer si no existen en el diseño aprobado.

---

# COPY WEB — SECCIÓN 05 · URGENCIAS OCULARES

**ID sugerido:** `#urgencias-oculares`  
**Objetivo:** explicar el alcance real de esta categoría y orientar responsablemente al visitante.

**Eyebrow**  
`ATENCIÓN OCULAR`

**H2**  
`¿Necesitas orientación por una molestia ocular?`

**Descripción principal — versión prudente**  
`Si necesitas información sobre la atención disponible para molestias oculares, contáctanos para conocer qué casos podemos recibir y en qué horarios. La atención depende de la valoración y de los servicios habilitados en nuestra sede.`

**Advertencia de seguridad, visible al visitante**  
`Si presentas pérdida repentina de visión, dolor ocular intenso, una lesión importante o una sustancia química en el ojo, acude de inmediato a un servicio de urgencias médicas. No esperes una respuesta por WhatsApp.`

**CTA**  
- **Texto:** `Consultar disponibilidad de atención`
- **Destino:** WhatsApp empresarial, **solo para información no urgente o administrativa**.
- **Mensaje precargado:** `Hola, quisiera conocer qué atención ocular tienen disponible, los horarios y cómo funciona el proceso de consulta.`

**BLOQUEO DE PUBLICACIÓN / revisión con cliente:**
- Confirmar si «Urgencias oculares» es el nombre oficial de una prestación real; si no lo es, renombrar la sección según el alcance efectivamente ofrecido.
- Identificar qué tipos de situaciones reciben y cuáles deben remitir a un servicio médico externo.
- Confirmar profesionales responsables y horarios; no suponer disponibilidad 24 horas, turnos de emergencia ni atención inmediata.
- Si no hay capacidad de urgencias médicas, el copy **no debe presentarla como un servicio de emergencias hospitalarias**.
- La advertencia de seguridad no es reemplazo de evaluación profesional.

**Nota UX:** la advertencia debe estar visible, no escondida en un tooltip, modal ni una pregunta frecuente. El botón de WhatsApp no debe ser la única respuesta ofrecida a síntomas agudos.

---

# COPY WEB — SECCIÓN 06 · CONOCE NUESTROS PROCEDIMIENTOS

**ID sugerido:** `#conoce-procedimientos`  
**Objetivo:** mostrar evidencia real de algunas evaluaciones y enlazar hacia `/procedimientos` sin duplicar esa página.

**Eyebrow**  
`CONOCE NUESTROS PROCEDIMIENTOS`

**H2**  
`Mira cómo realizamos nuestras evaluaciones.`

**Descripción**  
`Descubre algunos procedimientos de atención visual a través de fotografías y videos reales de nuestra óptica. Conoce qué se hace y para qué sirve cada evaluación.`

### Recurso 01 — Exploración de retina

**Título visible**  
`Imágenes de la retina con Volk iNview`

**Descripción breve**  
`Conoce cómo se utiliza este dispositivo para obtener imágenes de la retina durante una exploración ocular.`

**Enlace**  
`Conocer el procedimiento` → `/procedimientos` o ancla confirmada del procedimiento.

**Etiqueta accesible del video**  
`Reproducir video de la exploración retinal con Volk iNview en Óptica Alemania`.

### Recurso 02 — Visión del color

**Título visible**  
`Prueba de Farnsworth D-15`

**Descripción breve**  
`Observa una evaluación que utiliza fichas de colores para explorar la capacidad de diferenciar tonalidades.`

**Enlace**  
`Conocer el procedimiento` → `/procedimientos` o ancla confirmada de la prueba.

**Etiqueta accesible del video**  
`Reproducir video de la prueba de Farnsworth D-15 en Óptica Alemania`.

**CTA de sección**  
`Ver nuestros procedimientos` → `/procedimientos`.

**Notas de autenticidad y técnica**
- Utilizar únicamente fotografías y videos **reales, autorizados y representativos de los procedimientos que efectivamente realiza la empresa**.
- Verificar si el dispositivo registrado corresponde exactamente a Volk iNview y cuál es la finalidad de la exploración; no atribuirle capacidades no demostradas.
- No presentar el video de Farnsworth con un nombre que corresponda a láminas de Ishihara.
- Mantener el comportamiento de videos definido en diseño (autoplay sin sonido al entrar al viewport, pausa al salir) con controles accesibles y respeto por preferencias de movimiento. El comportamiento es instrucción técnica, no copy visible.
- **Si los videos no están disponibles o autorizados, no usar recreaciones como si fueran evidencia de procedimientos reales.**

---

# COPY WEB — SECCIÓN 07 · PREGUNTAS FRECUENTES

**ID sugerido:** `#preguntas-frecuentes`  
**Objetivo:** anticipar inquietudes prácticas y reducir fricción antes de contactar. Cinco preguntas, sin inventar políticas del negocio.

**Eyebrow**  
`PREGUNTAS FRECUENTES`

**H2**  
`Resolvamos tus dudas.`

**Descripción introductoria**  
`Encuentra información útil antes de visitarnos. Si necesitas detalles sobre un servicio, puedes escribirnos directamente.`

### FAQ-01 — ¿Necesito agendar una cita para recibir atención?

**Respuesta propuesta**  
`La disponibilidad puede depender del servicio que necesites. Te recomendamos escribirnos antes de visitarnos para confirmar horarios, condiciones de atención y si debes programar tu consulta.`

**Estado:** pendiente de confirmar la política real de citas y atención por orden de llegada. Evitar escribir «atendemos sin cita» o «es obligatorio reservar» sin respaldo.

### FAQ-02 — ¿Cómo puedo saber qué evaluación visual necesito?

**Respuesta propuesta**  
`Cada evaluación cumple una finalidad distinta. Si tienes dudas, consulta por nuestros servicios y explica qué información necesitas. La elección de una prueba debe basarse en una valoración profesional, no únicamente en una descripción de internet.`

**Estado:** consejo informativo general; no promover autodiagnóstico.

### FAQ-03 — ¿Cómo puedo consultar el precio de un servicio?

**Respuesta propuesta**  
`Puedes escribirnos por WhatsApp e indicarnos el nombre del servicio que te interesa. Así podrás solicitar información sobre el valor vigente y las condiciones de atención antes de venir.`

**Estado:** no inventar tarifas, descuentos ni valores aproximados.

### FAQ-04 — ¿Realizan atención visual para niños?

**Respuesta propuesta**  
`Puedes consultar por nuestra atención visual infantil y conocer las condiciones para la valoración de niños. Escríbenos para confirmar disponibilidad, edades atendidas y cualquier indicación previa a la visita.`

**Estado:** confirmar edades, profesionales y condiciones reales. Vincular con la sección infantil del Home solo si existe ancla estable.

### FAQ-05 — ¿Dónde queda Óptica Alemania?

**Respuesta propuesta**  
`Estamos en el sector de Barzal, en Villavicencio. En nuestra página de Contacto puedes consultar la dirección, los horarios y abrir la ubicación en el mapa para planear tu visita.`

**Enlace en respuesta, si el diseño lo contempla:** `Ver ubicación y contacto` → `/contacto`.

**Estado:** dirección exacta y horarios en Contacto deben ser datos centralizados y verificados.

**CTA opcional de sección, solo si existe en el mockup**  
`¿Tienes otra pregunta? Escríbenos` → WhatsApp empresarial.

**Notas de implementación:** los títulos de pregunta deben ser controles de acordeón accesibles si el diseño los utiliza (`button` con `aria-expanded` y región asociada). Las cinco respuestas deben existir en el HTML para lectura y accesibilidad, no cargarse únicamente tras interacción. No usar FAQPage structured data esperando resultados enriquecidos; priorizar contenido útil y las políticas vigentes del buscador.

---

# COPY WEB — SECCIÓN 08 · CIERRE / CONTACTO

**ID sugerido:** `#consulta-servicios`  
**Objetivo:** facilitar la consulta de un servicio y cerrar la página con una acción clara.

**Eyebrow**  
`ESTAMOS PARA AYUDARTE`

**H2**  
`¿Tienes dudas sobre algún servicio?`

**Descripción**  
`Escríbenos para consultar disponibilidad, conocer las condiciones de atención y resolver tus preguntas sobre los servicios de Óptica Alemania.`

**CTA principal**  
- **Texto:** `Consultar por WhatsApp`
- **Destino:** WhatsApp empresarial verificado.
- **Mensaje precargado:** `Hola, visité la página de Servicios de Óptica Alemania y quisiera información sobre la atención disponible.`

**CTA secundario:** si la composición aprobada contempla una segunda acción, utilizar `Ver contacto y ubicación` → `/contacto`. No añadir un formulario ni sistema de reservas que no exista.

**Nota:** el cierre debe ser breve; ya explicamos qué servicios consultar. No repetir aquí toda la lista de evaluaciones.

---

# COPY WEB — FOOTER GLOBAL

**Fuente única:** reutilizar el Footer global definido en `optica_alemania_home_copy.md`, con estas pautas:

- Marca y logotipo **oficial**.
- Navegación real: Inicio (`/`), Nosotros (`/nosotros`), Servicios (`/servicios`), Procedimientos (`/procedimientos`), Contacto (`/contacto`).
- Dirección, WhatsApp, teléfonos, horario y redes sociales tomados de datos **verificados y centralizados**, no copiados manualmente entre páginas.
- No incluir Catálogo de la Fase 2 mientras no se publique.
- Copyright con año dinámico o configuración única del sitio.
- No inventar sellos, acreditaciones, convenios ni reseñas.

---

## 9. Mapa completo de enlaces y CTA

| Origen | Texto visible | Destino / comportamiento |
|---|---|---|
| Hero | Explorar servicios | `#explora-servicios` |
| Categoría Atención visual | Ver servicios | `#atencion-visual` |
| Categoría Evaluaciones | Ver evaluaciones | `#evaluaciones-especializadas` |
| Categoría Urgencias | Consultar atención | `#urgencias-oculares` |
| Consulta de optometría | Consultar este servicio | WhatsApp con contexto del servicio |
| Lentes de contacto | Consultar este servicio | WhatsApp con contexto del servicio |
| Cinco evaluaciones | Consultar evaluación | WhatsApp con contexto de cada prueba |
| Urgencias oculares | Consultar disponibilidad de atención | WhatsApp administrativo; mantener advertencia médica visible |
| Recurso audiovisual de retina | Conocer el procedimiento | `/procedimientos` / ancla específica |
| Recurso audiovisual de color | Conocer el procedimiento | `/procedimientos` / ancla específica |
| Procedimientos | Ver nuestros procedimientos | `/procedimientos` |
| FAQ ubicación | Ver ubicación y contacto | `/contacto` |
| Cierre | Consultar por WhatsApp | WhatsApp general de Servicios |
| Cierre secundario, si aplica | Ver contacto y ubicación | `/contacto` |

**Enlaces de WhatsApp:** utilizar un único número **confirmado por el cliente** y construir las URLs desde configuración, con el mensaje URL-encoded. No fijar números provisionales ni inventar un enlace. Para cada servicio, reutilizar un componente de CTA con el texto de mensaje correspondiente. Si no hay anclas correspondientes en la página Procedimientos, enlazar a la ruta general, no a IDs inexistentes.

---

## 10. Accesibilidad, textos alternativos y microcopy técnico

### Imágenes (textos modelo que requieren correspondencia con la foto final)

1. **Hero:** `Profesional de Óptica Alemania durante una atención visual en sus instalaciones` — usar solamente si la foto realmente muestra a una profesional de la empresa.
2. **Consulta de optometría:** `Profesional realizando una evaluación visual a una persona en consulta`.
3. **Lentes de contacto:** `Profesional orientando a una persona durante la adaptación de lentes de contacto`.
4. **Presión intraocular:** `Prueba de medición de presión intraocular durante una evaluación` — únicamente si esa prueba se ve realmente.
5. **Test de visión del color:** `Fichas de colores utilizadas en una prueba de Farnsworth D-15` — solo para un recurso que muestre esas fichas.
6. **Retinofotografía:** `Procedimiento de obtención de una imagen retinal` — solo si la imagen lo representa fielmente.

**Regla:** estas líneas son **plantillas**, no `alt` definitivos. Deben ajustarse a las fotografías reales. Imágenes meramente decorativas: `alt=""`. No atribuir identidades, equipamientos o actividades no visibles. No repetir palabras clave locales artificialmente.

### Controles y navegación

- Botones WhatsApp con nombre accesible contextual, por ejemplo: `Consultar por WhatsApp la adaptación de lentes de contacto`.
- Anclas internas con desplazamiento suave opcional y desplazamiento corregido por Header sticky (`scroll-margin-top`).
- En mobile, controles táctiles cómodos, contrastes suficientes y textos sin truncamiento.
- Videos con subtítulos o alternativa textual cuando exista voz o información relevante; controles visibles y accesibles aunque el autoplay sea silenciado.
- No depender exclusivamente del color para identificar enlaces o estado activo.
- Descripciones cortas en las tarjetas; los contenidos de FAQs no deben esconder datos necesarios para una decisión importante.

---

## 11. Datos operativos pendientes de contrastar

Los siguientes datos se conocen como **referencias históricas del proyecto**, no como verificación de publicación:

| Dato | Referencia previa | Revisión requerida |
|---|---|---|
| Dirección | Calle 35 #34-36, Barzal, Villavicencio, Meta | Confirmar dirección exacta, enlace Maps y forma comercial de escribirla |
| Teléfono / WhatsApp | +57 311 201 7302 | Confirmar si atiende WhatsApp y es el número oficial vigente |
| Horario | Lunes a viernes 8:30 a. m.–6:00 p. m.; sábado 8:30 a. m.–3:00 p. m. | Confirmar vigencia y si los servicios tienen horarios distintos |
| Citas | No verificado | Confirmar si son obligatorias, opcionales o por orden de llegada |
| Tarifas | No suministradas | No publicar cifras sin lista oficial aprobada |
| Atención infantil | Se muestra en material de proyecto | Validar edades, condiciones y autorización de imágenes de menores |
| Consulta especializada | Nombre reportado | Validar alcance, profesionales y denominación |
| Evaluaciones especializadas | Cinco pruebas reportadas | Validar existencia, nombres, técnica y condiciones de cada una |
| Urgencias oculares | Servicio reportado | **Validación prioritaria de capacidad, condiciones y horarios** |
| Videos de procedimientos | Material aportado al proyecto | Verificar autenticidad, denominación y autorización de uso |

---

## 12. Revisión clínica previa a publicación

| Prioridad | Punto | Pregunta concreta para el cliente/profesional | Decisión editorial |
|---|---|---|---|
| **Alta** | Urgencias oculares | ¿Qué situaciones atienden, quién las recibe y en qué horario? | Mantener denominación solo si describe un servicio real; conservar advertencia médica |
| **Alta** | Examen digital por retroiluminación | ¿Cuál es el nombre técnico, equipo utilizado y finalidad del examen? | Sustituir descripción provisional antes de publicar |
| Alta | Consulta especializada | ¿Qué diferencia esta consulta de una consulta general y qué incluye? | Ajustar promesas implícitas y descripciones |
| Media | Test de ojo seco | ¿Qué pruebas concretas se realizan? | Mantener descripción general o especificar pruebas verificadas |
| Media | Ishihara y Farnsworth D-15 | ¿Realizan ambos? ¿Son servicios separados? | Ajustar título, microcopy y tarifas si procede |
| Media | Retinofotografía / Volk iNview | ¿El nombre y dispositivo del video corresponden al procedimiento ofertado? | Unificar denominación entre Home, Servicios y Procedimientos |
| Media | Adaptación de lentes de contacto | ¿Qué tipos de lentes adaptan y en qué condiciones? | Precisar sin prometer disponibilidad universal |
| Media | Citas y horarios | ¿Cómo se solicita atención y cuáles son los horarios vigentes? | Publicar FAQs y contacto definitivos |
| Media | Fotografías y videos | ¿Son del establecimiento y tienen las autorizaciones necesarias? | No atribuir recursos conceptuales a la empresa |

**Regla de salida:** si un dato clínico central no obtiene validación, no presentarlo como servicio confirmado. El texto provisional para revisión interna puede permanecer en este archivo, pero **no debe desplegarse automáticamente a producción**.

---

## 13. Checklist de implementación y QA

- [ ] Confirmar con el cliente los ocho servicios y agrupación **2 + 5 + 1**.
- [ ] Revisar y aprobar el H1 y todos los H2 frente a las composiciones desktop/mobile aprobadas.
- [ ] Usar una sola fuente de verdad para teléfono, horarios, dirección y redes.
- [ ] Verificar todos los enlaces internos, IDs de sección y rutas.
- [ ] Codificar correctamente los mensajes de WhatsApp de cada tarjeta.
- [ ] Conservar la advertencia para situaciones de emergencia ocular.
- [ ] Validar los textos técnicos de retroiluminación y alcance de urgencias.
- [ ] Revisar nombres y equipos que aparecen en los dos videos.
- [ ] Confirmar autorizaciones de las fotografías y los videos.
- [ ] Revisar longitud de tarjetas y acordeones en dispositivos móviles.
- [ ] Un solo `h1`, con jerarquía correcta de encabezados.
- [ ] Revisar `alt`, accesibilidad de acordeones, reproducción de video y contraste.
- [ ] Aprobar title, description, Open Graph, canonical y estrategia de indexación.
- [ ] Mantener el Footer global y las rutas idénticas a Home y Nosotros.
- [ ] No agregar Catálogo ni una promesa de reserva en línea en esta primera entrega.

---

## 14. Estado del documento

**V1 editorial completa para revisión.** Se entregan textos propuestos para las ocho secciones, siete descripciones de servicios individuales más un bloque de urgencias (estructura 2 + 5 + 1), cinco FAQs redactadas, CTA contextuales, estrategia SEO, navegación y notas de implementación.

**Pendientes de aprobación prioritarios:**

1. Alcance de la atención bajo el rótulo «Urgencias oculares».
2. Finalidad y terminología del «examen digital por retroiluminación».
3. Validación de nombres y alcance de las demás evaluaciones.
4. Horarios, teléfono/WhatsApp y condiciones de citas.
5. Correspondencia entre videos, fotografías y servicios representados.

La aprobación del copy no sustituye la confirmación clínica ni la revisión de los datos institucionales. Con esas validaciones, el documento podrá consolidarse en una **V2 lista para implementación**.
