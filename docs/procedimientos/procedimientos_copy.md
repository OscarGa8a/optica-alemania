# Óptica Alemania — Copy web: Procedimientos

**Proyecto:** Óptica Alemania · Villavicencio, Meta, Colombia  
**Página:** Procedimientos  
**Ruta de publicación:** `/procedimientos`  
**Documento:** `optica_alemania_procedimientos_copy.md`  
**Versión:** V1 editorial · 24 de octubre de 2026  
**Estado:** texto completo para revisión y aprobación; **no publicar afirmaciones clínicas ni recursos audiovisuales sin la validación indicada**  
**Alcance:** sitio institucional — Fase 1. No incluye Catálogo (Fase 2).

---

## 0. Cómo utilizar este documento

Este archivo es el **copy propuesto para implementar** siguiendo la composición desktop y mobile ya aprobada. Incluye los textos visibles, el destino de cada interacción y las notas que el equipo de desarrollo necesita para evitar interpretaciones.

**Convenciones de estado**

- **LISTO PARA REVISIÓN:** redacción propuesta; se puede evaluar editorialmente sin cambiar el diseño.
- **VALIDAR CON EL CLIENTE:** dato, nombre técnico, procedimiento, soporte audiovisual o política que requiere confirmación de Óptica Alemania antes de producción.
- **CONDICIONAL:** sección o elemento que solamente debe publicarse si existen materiales verificables suficientes.
- **GLOBAL:** recurso o contenido compartido con las otras páginas; no duplicar su fuente de verdad.

**Principio editorial:** esta página muestra *cómo se realizan algunas evaluaciones*; la página `/servicios` explica *qué servicios hay y para qué se consultan*. Evitar copiar textos largos de una página en la otra.

**Nota clínica:** el contenido informa de manera general sobre evaluaciones visuales. No reemplaza una consulta ni permite prometer diagnósticos, tratamientos o resultados. Ninguna prueba debe describirse como suficiente por sí sola para detectar o descartar todas las enfermedades oculares.

---

## 1. Identidad de la página y SEO

| Campo | Contenido propuesto |
|---|---|
| `slug` | `/procedimientos` |
| `metaTitle` | `Procedimientos visuales en Villavicencio | Óptica Alemania` |
| `metaDescription` | `Conoce cómo se realizan algunas evaluaciones visuales en Óptica Alemania Villavicencio, como la evaluación retinal y el test de Farnsworth D-15.` |
| H1 | `Así realizamos nuestras evaluaciones, paso a paso.` |
| Intención de búsqueda | Conocer los procedimientos y la tecnología utilizada por Óptica Alemania |
| Términos de apoyo | Evaluación retinal; imágenes de retina; Volk iNview; test de Farnsworth D-15; percepción del color; evaluaciones visuales en Villavicencio |
| `canonical` | URL absoluta del dominio oficial definitivo + `/procedimientos` (**no** asumir que el subdominio de demostración será el dominio oficial) |
| Idioma | `es-CO` |
| Open Graph | Título y descripción consistentes con esta página; imagen del establecimiento o procedimiento **real y autorizado** |

**Jerarquía recomendada:** H1 solo en el Hero. Un H2 en los bloques principales de evaluación retinal, Farnsworth, videos adicionales (si se publica) y contacto. Los títulos concretos de videos dentro de la sección opcional pueden ser H3.

**Enlazado interno:**
- `/servicios`: descripción y disponibilidad de los servicios.
- `/contacto`: ubicación, horario y canales de contacto.
- `/nosotros`: presentación institucional, únicamente si el diseño global lo requiere.
- `/procedimientos#evaluacion-retinal` y `/procedimientos#farnsworth-d15`: enlaces profundos desde Servicios, si aportan valor.

**Evitar:** repetición forzada de «óptica en Villavicencio» en todos los encabezados, años de experiencia sin confirmar, promesas clínicas, o páginas independientes por prueba sin contenido suficiente.

---

# COPY VISIBLE — POR SECCIONES

## 2. Sección 01 — Hero

**ID sugerido:** `#inicio`  
**Estado:** LISTO PARA REVISIÓN  
**Objetivo:** explicar qué muestra la página y dirigir al primer procedimiento.  
**Composición aprobada:** hero editorial con jerarquía tipográfica; no convertirlo en un reproductor automático.

### Textos definitivos propuestos

**Eyebrow**  
`CONOCE NUESTROS PROCEDIMIENTOS`

**H1**  
`Así realizamos nuestras evaluaciones, paso a paso.`

**Descripción**  
`Descubre algunos de nuestros procedimientos visuales a través de videos que muestran cómo se realizan en Óptica Alemania, en Villavicencio.`

**CTA principal**  
`Explorar procedimientos`  
**Destino:** ancla `#evaluacion-retinal`.  
**Comportamiento:** desplazamiento suave si el usuario no solicita movimiento reducido; en caso contrario, salto directo al ancla.

### Notas para implementación

- Mantener el titular, la descripción y el botón en las posiciones del mockup aprobado.
- El título puede destacar `paso a paso` en Instrument Serif itálica con azul de marca, sin cambiar el contenido del H1 en el DOM.
- Si la demostración no contiene una secuencia completa, «paso a paso» funciona como título editorial, pero debe revisarse contra el montaje final para no sugerir una guía exhaustiva.
- No incluir años, certificaciones, supuestos resultados ni tecnologías adicionales en el Hero.
- El Hero **no requiere video en autoplay**.

---

## 3. Sección 02 — Evaluación retinal con Volk iNview

**ID:** `#evaluacion-retinal`  
**Estado:** REDACCIÓN PREPARADA · VALIDAR CON EL CLIENTE  
**Objetivo:** identificar el procedimiento mostrado y explicar en lenguaje accesible qué documenta.  
**Composición aprobada:** bloque editorial con video auténtico y descripción contextual.

### Textos visibles

**Eyebrow**  
`EVALUACIÓN RETINAL · VOLK INVIEW`

**H2**  
`Evaluación retinal de cerca.`

**Descripción principal**  
`La evaluación retinal permite observar y registrar imágenes del fondo del ojo. Con herramientas de captura como Volk iNview es posible obtener imágenes que apoyan la documentación de esta zona. En este video te mostramos cómo se desarrolla el procedimiento en nuestra óptica. La interpretación de los hallazgos y la necesidad de otras evaluaciones corresponden al profesional que realiza la valoración.`

**Etiqueta de video**  
`Evaluación retinal con Volk iNview`

**Apoyo breve bajo el video (solo si el diseño reserva este espacio)**  
`Conoce el proceso de captura de imágenes retinales.`

**Acción contextual opcional, si aparece en el mockup**  
`Consultar esta evaluación`  
**Destino:** WhatsApp oficial con mensaje prellenado:  
`Hola, quisiera información sobre la evaluación retinal en Óptica Alemania.`

**Alternativa editorial de cuerpo reducido (si la composición no admite el párrafo largo)**  
`Conoce cómo se obtienen imágenes de la retina durante una evaluación visual. En este video mostramos parte del procedimiento y la tecnología utilizada en Óptica Alemania.`

### Validaciones obligatorias

1. Confirmar que el dispositivo que aparece en el video es efectivamente **Volk iNview** y verificar la forma oficial de escribir su nombre y modelo.
2. Confirmar que el video corresponde a una evaluación realizada por Óptica Alemania, no una demostración externa o material de referencia.
3. Verificar si el material enseña realmente la *captura* de imágenes del fondo del ojo o únicamente el uso del dispositivo; ajustar el pie de video al contenido observable.
4. Validar la descripción con el profesional responsable. No asegurar que esta prueba detecta, descarta o diagnostica por sí sola enfermedades concretas.
5. Contar con autorización de uso de imágenes del paciente y del personal cuando sea aplicable.

### Accesibilidad y metadatos del video

- `videoTitle`: `Evaluación retinal con Volk iNview` (**provisional hasta validación**).
- `ariaLabel` para activar el video: `Reproducir video de evaluación retinal`.
- `poster`: fotograma real del video, optimizado y aprobado.
- `caption` visible: `Evaluación retinal con Volk iNview`.
- `transcript`: incluir transcripción revisada **si hay voz explicativa**; los videos sin voz deben conservar descripción textual suficiente.
- Descripción accesible sugerida, **adaptar tras ver el material**: `Video de una evaluación retinal realizada con un dispositivo de captura de imágenes del fondo del ojo.`

---

## 4. Sección 03 — Test de Farnsworth D-15

**ID:** `#farnsworth-d15`  
**Estado:** REDACCIÓN PREPARADA · VALIDAR CON EL CLIENTE  
**Objetivo:** explicar qué se evalúa y qué hace el paciente durante la prueba.  
**Composición aprobada:** bloque editorial y video de la prueba de percepción cromática.

### Textos visibles

**Eyebrow**  
`PERCEPCIÓN DEL COLOR · FARNSWORTH D-15`

**H2**  
`Cada color cuenta una historia.`

**Descripción principal**  
`El test de Farnsworth D-15 es una prueba utilizada para evaluar la discriminación de colores. Durante el ejercicio, la persona organiza una serie de fichas cromáticas según la similitud de sus tonalidades. En este video puedes conocer cómo se lleva a cabo la actividad y observar una parte del proceso de evaluación de la percepción del color.`

**Etiqueta de video**  
`Test de Farnsworth D-15`

**Apoyo breve bajo el video (si corresponde)**  
`Una prueba para explorar cómo distinguimos diferentes tonalidades.`

**Acción contextual opcional, si está prevista en el diseño**  
`Consultar esta prueba`  
**Destino:** WhatsApp oficial con mensaje prellenado:  
`Hola, quisiera información sobre el test de Farnsworth D-15 en Óptica Alemania.`

**Alternativa editorial reducida**  
`Durante el test de Farnsworth D-15 se organizan fichas de distintos tonos para evaluar la discriminación cromática. Mira cómo se realiza esta prueba en Óptica Alemania.`

### Validaciones obligatorias

1. Confirmar que el video corresponde **específicamente al Farnsworth D-15** y no a otra prueba cromática.
2. No confundir la prueba con las láminas de **Ishihara**: son evaluaciones relacionadas, pero distintas.
3. No afirmar que el test determina por sí solo todos los tipos o grados de alteraciones cromáticas.
4. Revisar con el profesional la descripción del protocolo realmente utilizado.
5. Verificar autorización del material audiovisual.

### Accesibilidad y metadatos del video

- `videoTitle`: `Test de Farnsworth D-15`.
- `ariaLabel`: `Reproducir video del test de Farnsworth D-15`.
- `poster`: fotograma real, mostrando el material de prueba solo si es visible en la grabación.
- `caption`: `Test de Farnsworth D-15`.
- `transcript`: cuando el video contenga explicaciones habladas.
- Descripción accesible provisional: `Video demostrativo de la organización de fichas de colores durante el test de Farnsworth D-15.` **Validar contra los fotogramas reales.**

---

## 5. Sección 04 — Más de nuestra atención

**ID:** `#mas-de-nuestra-atencion`  
**Estado:** **CONDICIONAL — NO PUBLICAR SIN DOS VIDEOS ADICIONALES REALES Y AUTORIZADOS**  
**Objetivo:** ampliar la evidencia visual sin duplicar los dos procedimientos anteriores.  
**Composición aprobada V2:** título editorial amplio arriba y **dos videos de tamaño equivalente** debajo, en dos columnas desktop y disposición vertical mobile. Se descarta la versión anterior de tres columnas comprimidas.

### Textos visibles del bloque (si se activa)

**Eyebrow**  
`MÁS DE NUESTRA ATENCIÓN`

**H2**  
`Otros momentos del cuidado visual.`

**Descripción general**  
`Conoce otros momentos de la atención en Óptica Alemania a través de videos de nuestros espacios y evaluaciones.`

### Video A — Propuesta condicional

**Título provisional (H3)**  
`Evaluación optométrica`

**Descripción breve**  
`Una mirada a cómo se desarrolla parte de la consulta visual.`

**Control accesible**  
`Reproducir video de evaluación optométrica`

**Estado:** ACTIVAR ÚNICAMENTE si existe un video real que muestre esa actividad y el contenido ha sido validado por el negocio. Cambiar el título si la grabación corresponde a otra evaluación.

### Video B — Propuesta condicional

**Título provisional (H3)**  
`Atención visual infantil`

**Descripción breve**  
`Conoce un momento de la atención visual dirigida a niños.`

**Control accesible**  
`Reproducir video de atención visual infantil`

**Estado:** ACTIVAR ÚNICAMENTE si existe un video auténtico de ese servicio, con autorización expresa y adecuada para publicar la imagen de menores de edad. Si no existe autorización suficiente, no publicar este video ni sustituirlo por un niño generado con IA presentado como paciente real.

### Condiciones de publicación

- Se requieren dos materiales adicionales que **no repitan** las capturas retinal y Farnsworth ya exhibidas.
- Los videos deben identificarse correctamente y corresponder a procedimientos ofrecidos realmente por Óptica Alemania.
- No completar espacios vacíos con videos de stock o material artificial presentado como evidencia del establecimiento.
- Si solo existe un video válido, **omitir la sección completa en esta versión**, salvo decisión editorial y rediseño expresamente aprobados.
- Al omitirla, la página enlaza directamente desde el bloque 03 al cierre de contacto.

---

## 6. Sección 05 — Orientación y contacto

**ID:** `#contacto-procedimientos`  
**Estado:** LISTO PARA REVISIÓN  
**Objetivo:** permitir que el visitante solicite información sobre una evaluación después de ver las demostraciones.  
**Composición aprobada:** cierre editorial de fondo azul pálido, composición asimétrica y dos CTA; sin formulario nuevo.

### Textos visibles

**Eyebrow**  
`ESTAMOS PARA ORIENTARTE`

**H2**  
`¿Quieres conocer más sobre nuestras evaluaciones?`

**Descripción**  
`Si tienes preguntas sobre alguno de nuestros procedimientos visuales, escríbenos. En Óptica Alemania podemos orientarte sobre la información y disponibilidad de nuestros servicios.`

**CTA principal**  
`Hablar por WhatsApp`  
**Destino:** WhatsApp oficial del negocio (número pendiente de contraste final).  
**Mensaje prellenado:**  
`Hola, vi los procedimientos en la página web de Óptica Alemania y quisiera más información sobre las evaluaciones visuales.`

**CTA secundario**  
`Explorar servicios`  
**Destino:** `/servicios`.

**No agregar:** reserva confirmada sin sistema de agenda, descuentos, formulario adicional, asesoramiento clínico personalizado automático ni promesa de respuesta inmediata.

---

## 7. Footer global — Reutilización

**Estado:** GLOBAL. Reutilizar el Footer aprobado del sitio institucional y su fuente de contenido compartida. No mantener copias divergentes del teléfono, dirección, horarios, logo ni redes sociales en las cinco páginas.

**Navegación general:** Inicio · Nosotros · Servicios · Procedimientos · Contacto.

**Enlaces:** usar rutas reales ya implementadas. No publicar todavía el Catálogo de Fase 2 en la navegación global.

**Datos de contacto:** heredar de la configuración global después de verificar con Óptica Alemania.

---

# ESPECIFICACIONES DE INTERACCIÓN Y CONTENIDO AUDIOVISUAL

## 8. Reglas para videos

**Comportamiento del sitio previamente acordado:**

1. Los videos interiores pueden comenzar automáticamente **sin sonido** cuando entran en el viewport, siempre que la plataforma y la configuración del usuario lo permitan.
2. Pausar cuando salgan del área visible; evitar varios videos reproduciéndose simultáneamente.
3. Incluir controles perceptibles y accesibles de **reproducir / pausar**; controles de sonido si hay pista de audio.
4. No iniciar autoplay cuando el usuario prefiera **movimiento reducido** (`prefers-reduced-motion: reduce`); ofrecer reproducción manual.
5. No transmitir audio de manera automática. No depender de escuchar el video para comprender la sección.
6. Portada optimizada que corresponda al video auténtico. Evitar pantallas negras o imágenes genéricas si existe un fotograma apto.
7. Cargar el archivo de manera eficiente, evitando transferencias innecesarias en mobile; controlar `preload`, poster y entrada al viewport.
8. Si el video contiene voz, publicar **subtítulos revisados** y una transcripción cuando corresponda. No inventar lo que dice el audio.
9. Si está embebido en iframe de tercero, comprobar que pueda implementarse este comportamiento y los controles antes de prometerlo.
10. La CMS puede administrar **medios** (videos y portadas), mientras que textos, títulos y SEO permanecen en el código Astro según la decisión del proyecto.

**Accesibilidad:** los controles deben ser alcanzables con teclado, tener nombre accesible y mostrar estado de pausa/reproducción. No usar únicamente un icono sin etiqueta. Deben poder operarse en táctil.

## 9. Esquema editorial recomendado para cada video

```yaml
id: evaluacion-retinal
section: evaluacion-retinal
title: "Evaluación retinal con Volk iNview"   # VALIDAR
shortDescription: "Conoce el proceso de captura de imágenes retinales."
media: "[RUTA_ASSET_REAL_DESDE_CMS]"
poster: "[PORTADA_REAL_APROBADA]"
captions: "[ARCHIVO_VTT_SI_APLICA]"
transcript: "[TEXTO_REVISADO_SI_APLICA]"
publicationAuthorized: false  # cambiar únicamente después de confirmar permisos
clinicalReviewed: false        # cambiar únicamente después de revisión profesional
```

El ejemplo **no** representa un registro real publicado en Sanity ni implica que los permisos estén concedidos.

## 10. Mapa de botones, destinos y mensajes

| Ubicación | Texto visible | Tipo | Destino / comportamiento |
|---|---|---|---|
| Hero | Explorar procedimientos | Interno | `#evaluacion-retinal` |
| Evaluación retinal (si se conserva el CTA contextual) | Consultar esta evaluación | WhatsApp | Mensaje sobre evaluación retinal |
| Farnsworth (si se conserva el CTA contextual) | Consultar esta prueba | WhatsApp | Mensaje sobre Farnsworth D-15 |
| Cierre | Hablar por WhatsApp | Principal | WhatsApp oficial, mensaje sobre procedimientos |
| Cierre | Explorar servicios | Secundario | `/servicios` |
| Footer | Enlaces del sitio | Global | Rutas aprobadas del sitio institucional |

### Formación del enlace de WhatsApp

**No incrustar en el copy un número no verificado.** Implementar mediante `siteConfig.whatsappNumber` o equivalente, en formato internacional (solo dígitos) confirmado por el cliente. Codificar el texto del mensaje con `encodeURIComponent`.

Ejemplo conceptual de plantilla: `https://wa.me/{NUMERO_VERIFICADO}?text={MENSAJE_CODIFICADO}`.

El botón **no** confirma una cita ni indica disponibilidad inmediata. Abrir enlace en condiciones accesibles y evitar ventanas imprevistas cuando sea posible.

---

# ACCESIBILIDAD, METADATOS Y CALIDAD EDITORIAL

## 11. Textos alternativos y fotografía

Los textos alternativos se deben redactar **después de seleccionar los activos reales**. Ejemplos provisionales que deberán cotejarse visualmente:

- Imagen del Hero, si es informativa: `Profesional de Óptica Alemania durante una evaluación visual.`
- Portada de evaluación retinal: `Equipo utilizado para registrar imágenes de la retina durante una evaluación.`
- Portada de Farnsworth: `Fichas de diferentes colores utilizadas durante una prueba de discriminación cromática.`
- Fotograma de optometría: `Profesional realizando una evaluación visual en el consultorio.`
- Fotograma de atención infantil: `Profesional durante una evaluación visual infantil.` (solo si la imagen real tiene permiso de uso).

**Importante:** si una imagen es meramente decorativa o su información ya se comunica en texto contiguo, utilizar `alt=""` cuando corresponda. No atribuir a fotografías conceptuales una ubicación o profesional real. No repetir listas de palabras clave en los `alt`.

## 12. SEO técnico y marcado estructurado

- Implementar `title`, `meta description`, canonical y metadatos sociales específicos de `/procedimientos`.
- Usar `WebPage` y `BreadcrumbList` solo con datos correctos, URLs definitivas y el marcado que realmente corresponda.
- Considerar `VideoObject` **solo** para videos reales publicados con información correcta (`name`, `description`, `thumbnailUrl`, `uploadDate` cuando se conozca, `contentUrl` o `embedUrl` según el caso). No inventar fechas, duraciones ni miniaturas.
- Evitar schemas de afirmaciones médicas o credenciales no respaldadas.
- Mantener consistencia en los nombres y rutas: `/servicios` y `/procedimientos` no deben intentar posicionarse con textos idénticos.
- Si el sitio está en un subdominio de demostración, aplicar la política de indexación decidida para la demo; no configurarlo como sitio oficial de la empresa sin aprobación.

## 13. Control de repetición con Servicios

| En Servicios | En Procedimientos |
|---|---|
| «¿Qué incluye la consulta o evaluación?» | «¿Cómo se desarrolla la actividad que se ve en el video?» |
| Descripción breve de cada servicio | Contexto de las grabaciones y recursos reales |
| Oferta y categorías de atención | Prueba visual del entorno y del proceso |
| Consulta por servicio concreto | Consulta sobre los procedimientos mostrados |

**No agregar** a Procedimientos la lista de los ocho servicios, otro FAQ completo ni fichas clínicas largas. Para ello existe la página Servicios.

---

# MATRIZ DE VALIDACIÓN PREPUBLICACIÓN

## 14. Información que debe confirmar Óptica Alemania

| Prioridad | Elemento | Estado actual | Requisito antes de publicar |
|---|---|---|---|
| Alta | Identidad del equipo Volk iNview | No validado en este documento | Confirmar modelo, procedimiento y video correspondiente |
| Alta | Descripción clínica de evaluación retinal | Propuesta general | Revisión profesional y ajuste al alcance real |
| Alta | Identidad de Farnsworth D-15 | No validado en este documento | Confirmar que el video es D-15, no Ishihara ni otra prueba |
| Alta | Descripción clínica de Farnsworth | Propuesta general | Revisión profesional del protocolo |
| Alta | Videos originales y derechos | Sin inventario comprobado | Obtener archivos auténticos, permiso de uso y portadas |
| Crítica si hay menor | Video de atención infantil | Condicional | Confirmar autorización adecuada de uso de imagen |
| Alta | Videos adicionales A y B | Condicional | Confirmar dos videos distintos o no publicar sección 04 |
| Media | Audio y subtítulos | Por revisar | Verificar audio real, subtítulos y transcripciones |
| Alta | WhatsApp de contacto | Sin validación en esta versión | Confirmar número oficial y mensaje inicial |
| Media | URL del dominio final | Pendiente | Ajustar canonical y metadatos sociales |
| Media | Textos alternativos | Provisionales | Revisar contra imágenes efectivamente publicadas |

### Criterios de aprobación editorial

- [ ] El cliente confirma que ambos procedimientos se realizan efectivamente en Óptica Alemania.
- [ ] Un profesional responsable revisa la terminología y el alcance de cada evaluación.
- [ ] Los videos representan lo que indican sus títulos y descripciones.
- [ ] Existen permisos para personas identificables, especialmente menores.
- [ ] La sección de videos adicionales se publica únicamente si cumple las condiciones.
- [ ] Todos los CTA llevan a rutas y canales reales.
- [ ] Los metadatos corresponden al dominio final.
- [ ] La versión mobile conserva la información esencial y los controles de video son accesibles.
- [ ] No se publican afirmaciones de diagnóstico, certificaciones o resultados no demostrados.

---

## 15. Resumen ejecutivo para desarrollo

**Orden definitivo de renderizado**

1. `HeroProcedimientos` — siempre.
2. `EvaluacionRetinal` — publicar después de validación clínica y audiovisual.
3. `FarnsworthD15` — publicar después de validación clínica y audiovisual.
4. `MasDeNuestraAtencion` — **condicional**, dos videos adicionales reales o se omite.
5. `CTAProcedimientos` — siempre.
6. `Footer` — global.

**Invariantes:** no rediseñar los mockups aprobados, no añadir componentes comerciales no definidos, no duplicar la página Servicios, no generar logotipos alternativos ni presentar imágenes de IA como evidencia real del negocio.

**Estado del documento:** V1 editorial completa para revisión. Los textos propuestos quedan preparados para Astro, pero la aprobación de las afirmaciones clínicas y los materiales audiovisuales corresponde al negocio y al profesional responsable.
