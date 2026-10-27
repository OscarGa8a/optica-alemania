# Óptica Alemania — Copy web V1 | Contacto

**Proyecto:** Óptica Alemania Villavicencio  
**Página:** Contacto  
**Ruta propuesta:** `/contacto`  
**Versión:** 1.0 — 24 de octubre de 2026  
**Estado:** redacción V1 para revisión y aprobación del cliente  
**Alcance:** sitio institucional, Fase 1. Sin formulario, pagos ni reserva de citas en línea.

> **Criterio editorial:** este archivo contiene la redacción propuesta para publicar y, por separado, las notas de implementación y los datos que deben verificarse. Las frases identificadas como pendientes no deben interpretarse como afirmaciones comprobadas. La página conserva los dos bloques aprobados y el Footer global.

---

## 1. Ficha SEO de la página

| Campo | Texto / especificación |
|---|---|
| `slug` | `/contacto` |
| `lang` | `es-CO` |
| `metaTitle` | `Contacto y ubicación | Óptica Alemania Villavicencio` |
| `metaDescription` | `Encuentra Óptica Alemania en Barzal, Villavicencio. Consulta nuestra dirección, horarios de atención y cómo llegar. Contáctanos por WhatsApp o teléfono.` |
| `h1` | `Hablemos de tu visión.` |
| Tema principal | Contacto y ubicación de Óptica Alemania Villavicencio |
| Temas relacionados | Óptica Alemania Barzal; dirección; teléfono; horarios; cómo llegar |
| Canonical | `{DOMINIO_OFICIAL}/contacto` — configurar solo tras definir el dominio oficial |
| Open Graph title | `Contacto y ubicación | Óptica Alemania Villavicencio` |
| Open Graph description | Mismo contenido de `metaDescription` |
| Open Graph image | Fotografía **real y autorizada** de la fachada o del establecimiento, en formato social |

### Jerarquía de encabezados

- **H1:** Hablemos de tu visión.
- **H2:** Nos vemos en Barzal.
- **H3:** Te mostramos cómo llegar. (subbloque del video, dentro de la segunda sección).

No añadir un segundo H1 para palabras clave. Los campos de contacto como «Nuestra dirección» y «Horarios de atención» pueden representarse como etiquetas o subtítulos semánticos según el componente.

### Criterios SEO

- Incluir «Óptica Alemania» y «Villavicencio» en el contexto de la página sin repetirlos de forma forzada en todos los títulos.
- Mantener nombre, dirección y teléfono consistentes con Home, Footer y los datos estructurados globales, previa validación.
- No duplicar aquí el contenido de Servicios ni Procedimientos.
- En la **demo comercial**, conservar `noindex` si esa es la configuración aprobada. Habilitar indexación y canonical oficial solo al lanzar el sitio en el dominio autorizado.

---

## 2. Sección 01 — Hero: Hablemos de tu visión

**Identificador sugerido:** `contacto-hero`  
**Objetivo:** permitir que el visitante elija inmediatamente entre escribir y llamar.  
**Tratamiento visual aprobado:** Hero de la página de Contacto, sin un formulario adicional.

### Copy final V1

**Eyebrow**  
`CONTACTO · ÓPTICA ALEMANIA`

**H1**  
`Hablemos de tu visión.`

**Descripción**  
`¿Tienes preguntas sobre nuestros servicios o necesitas información antes de visitarnos? Escríbenos o llámanos para resolver tus dudas y conocer las opciones de atención disponibles.`

**CTA principal**  
- Etiqueta visible: `Escribir por WhatsApp`
- Etiqueta accesible sugerida: `Escribir a Óptica Alemania por WhatsApp`
- Destino: WhatsApp oficial, **pendiente de confirmar**.
- Mensaje sugerido precargado:

> Hola, quisiera recibir información sobre los servicios de Óptica Alemania.

**CTA secundario**  
- Etiqueta visible: `Llamar ahora`
- Etiqueta accesible sugerida: `Llamar a Óptica Alemania`
- Destino propuesto, **sujeto a confirmación del número:** `tel:+573112017302`

### Reglas editoriales del Hero

- Conservar exactamente un H1.
- No incluir dirección ni horarios en el Hero; se muestran en el bloque inmediatamente siguiente.
- No decir «respuesta inmediata», «disponibles las 24 horas», «agenda garantizada» ni «atención sin cita» sin confirmación.
- WhatsApp y llamada representan **consulta de información**, no reserva automática de cita.
- Si se necesita reducir longitud en mobile, usar la misma redacción siempre que quepa; no recortar información esencial.

---

## 3. Sección 02 — Nos vemos en Barzal

**Identificador sugerido:** `ubicacion`  
**Objetivo:** comunicar con claridad dónde se encuentra la óptica, cómo contactarla, cuándo visitarla y cómo llegar.  
**Tratamiento visual aprobado:** información práctica + mapa interactivo + video de ruta **debajo del mapa**.

### Copy final V1 — Introducción

**Eyebrow**  
`DÓNDE ENCONTRARNOS`

**H2**  
`Nos vemos en Barzal.`

**Descripción**  
`Estamos en Villavicencio. Aquí encontrarás nuestra dirección, los horarios de referencia y las opciones para llegar a Óptica Alemania.`

### Copy final V1 — Datos visibles

**Bloque de dirección**  
- Etiqueta: `Nuestra dirección`
- Valor de referencia: `Calle 35 #34-36, Barzal, Villavicencio, Meta, Colombia`
- Nota de estado: **VALIDAR con el establecimiento la escritura exacta y el pin antes de publicar**.

**Bloque de horarios**  
- Etiqueta: `Horarios de atención`
- Línea 1 de referencia: `Lunes a viernes: 8:30 a. m. – 6:00 p. m.`
- Línea 2 de referencia: `Sábados: 8:30 a. m. – 3:00 p. m.`
- Nota de estado: **VALIDAR horarios vigentes**. No atribuir un horario dominical si no está confirmado; si el cliente confirma que no abre los domingos, agregar expresamente `Domingos: cerrado`.

**Bloque telefónico**  
- Etiqueta: `Teléfono`
- Valor de referencia: `+57 311 201 7302`
- Acción accesible: `Llamar a Óptica Alemania`
- Nota de estado: **VALIDAR** el teléfono actual y si ese mismo número es el canal oficial de WhatsApp.

### Copy final V1 — Mapa

**Etiqueta del mapa**  
`Ubícanos en el mapa`

**CTA principal del mapa**  
`Cómo llegar`

**Etiqueta accesible sugerida**  
`Abrir indicaciones para llegar a Óptica Alemania en una aplicación de mapas`

**Destino**  
`{URL_MAPA_OFICIAL_VERIFICADA}`

**Comportamiento:** abrir una aplicación o servicio de mapas con el **pin preciso** del establecimiento. El embed y el enlace deben referirse a la misma sede; no utilizar una búsqueda genérica que pueda llevar a otra óptica homónima.

**Texto alternativo / alternativa al iframe**  
`Óptica Alemania, Calle 35 #34-36, barrio Barzal, Villavicencio, Meta. Ver indicaciones para llegar.`

> La dirección anterior es dato de referencia del proyecto y requiere validación final. El mapa real debe cargarse desde un identificador o URL confirmado, no desde coordenadas inventadas.

### Copy final V1 — Video de cómo llegar

**Ubicación visual:** inmediatamente debajo del mapa.

**Eyebrow**  
`¿VIENES POR PRIMERA VEZ?`

**H3**  
`Te mostramos cómo llegar.`

**Descripción**  
`Mira nuestro recorrido en video para reconocer el lugar y encontrar más fácilmente la entrada de la óptica.`

**Etiqueta del control**  
`Reproducir video`

**Etiqueta accesible del control**  
`Reproducir video de cómo llegar a Óptica Alemania`

**Pie de video opcional, solo si el diseño lo requiere**  
`Recorrido hasta nuestra sede en el barrio Barzal, Villavicencio.`

**Portada:** fotograma auténtico y autorizado del trayecto o fachada real; no usar una fachada generada para representar el negocio.

**Transcripción/subtítulos:** producir una transcripción fiel si existe narración, explicación hablada o información audible relevante. Si aparecen instrucciones escritas dentro del video, asegurar su legibilidad y una alternativa accesible.

### Comportamiento del video

- Reproducción **manual**: sin autoplay al entrar al viewport.
- Controles visibles de reproducir/pausar, progreso y volumen cuando haya audio.
- No iniciar audio automáticamente.
- Cargar portada previamente y diferir el video cuando sea posible para optimizar rendimiento.
- El video no sustituye al mapa, la dirección ni el botón «Cómo llegar».
- No incluir referencias de distancias, cruces, puntos de referencia o tiempos de trayecto sin comprobarlos en el material real.

---

## 4. Footer compartido — Referencia editorial

**Esta página no tiene un Footer exclusivo.** Reutilizar exactamente el componente de las demás páginas de la Fase 1.

### Elementos de contenido global

**Nombre de marca**  
`Óptica Alemania`

**Descripción institucional sugerida para el Footer global**  
`Conoce nuestros servicios de atención visual y encuéntranos en Villavicencio, Meta.`

> Esta descripción es una **propuesta para unificar con el Footer global**. No sobrescribir un copy global ya aprobado sin una revisión cruzada con Home, Nosotros, Servicios y Procedimientos.

**Navegación**  
- `Inicio` → `/`
- `Nosotros` → `/nosotros`
- `Servicios` → `/servicios`
- `Procedimientos` → `/procedimientos`
- `Contacto` → `/contacto`

**Dirección, horarios y contacto:** reutilizar las mismas variables de datos verificadas empleadas en la sección «Nos vemos en Barzal», sin copiar valores manualmente a distintos componentes.

**Redes sociales:** incluir únicamente perfiles oficiales confirmados. La cuenta de referencia del proyecto es `https://www.instagram.com/opticaalemania/`; comprobar que sigue perteneciendo a la sede correspondiente.

**Copyright sugerido**  
`© {AÑO_ACTUAL} Óptica Alemania. Todos los derechos reservados.`

**Catálogo:** NO incluir un enlace de navegación activo en Fase 1; pertenece a una futura Fase 2.

---

## 5. Matriz de CTA y destinos

| Elemento | Copy visible | Destino / acción | Estado |
|---|---|---|---|
| Hero, botón 1 | Escribir por WhatsApp | `{WHATSAPP_URL_OFICIAL}` + mensaje precargado | Confirmar número WhatsApp |
| Hero, botón 2 | Llamar ahora | `tel:+573112017302` | Confirmar número |
| Ubicación | Cómo llegar | `{URL_MAPA_OFICIAL_VERIFICADA}` | Confirmar pin y URL |
| Video | Reproducir video | Reproductor local/embebido | Requiere archivo real |
| Footer | Inicio | `/` | Ruta prevista |
| Footer | Nosotros | `/nosotros` | Ruta prevista |
| Footer | Servicios | `/servicios` | Ruta prevista |
| Footer | Procedimientos | `/procedimientos` | Ruta prevista |
| Footer | Contacto | `/contacto` | Ruta prevista |

### WhatsApp: implementación recomendada

No activar un enlace `wa.me` con el número de teléfono de referencia hasta confirmar que ese número corresponde al WhatsApp oficial.

Cuando el cliente confirme el número, construir el enlace en la aplicación con el patrón:

```text
https://wa.me/{NUMERO_EN_FORMATO_INTERNACIONAL_SIN_SIGNO_MAS}?text={MENSAJE_CODIFICADO}
```

El texto precargado debe construirse con `encodeURIComponent` y abrirse desde un enlace accesible, sin exponer una «reserva de cita» no implementada.

---

## 6. SEO técnico, accesibilidad y datos estructurados

### Imágenes y video

- **Foto del Hero, si existe:** redactar el `alt` a partir de la fotografía final. Evitar `alt="Óptica Alemania en Villavicencio"` si la imagen solo es decorativa y no muestra el lugar.
- **Fachada real:** ejemplo condicionado a la foto final: `Fachada de Óptica Alemania en el barrio Barzal de Villavicencio`.
- **Mapa:** conservar una dirección textual completa y un enlace independiente; no dejar la ubicación solo dentro de un iframe.
- **Video:** portada auténtica, control etiquetado y subtítulos/transcripción cuando corresponda.
- Si una imagen es puramente decorativa y la información ya está en texto, usar `alt=""`.

### Navegación, controles y performance

- Los CTA deben ser enlaces reales, no elementos visuales que imitan botones sin acción.
- Contraste suficiente, foco visible y áreas táctiles adecuadas.
- El mapa embebido debe tener `title` descriptivo.
- Evitar bloquear la interacción con overlays decorativos.
- Aplicar carga diferida a mapa y video cuando sea compatible con la experiencia aprobada.
- Mantener disponible el teléfono textual incluso cuando el usuario no pueda abrir WhatsApp.

### Datos estructurados

Utilizar un único origen de datos validado para el marcado `LocalBusiness`/subtipo que corresponda, la dirección postal y horarios. Solo publicar propiedades sustentadas por datos reales. No añadir valoraciones, reseñas, geocoordenadas, correos ni servicios no verificados para intentar enriquecer resultados.

### Astro + Sanity

- **Astro:** H1/H2/H3, copy, CTA, SEO y datos del negocio centralizados en configuración.
- **Sanity:** permitir sustituir los recursos audiovisuales aprobados —por ejemplo video y portada— sin modificar desde CMS los textos estratégicos/SEO, conforme al alcance del proyecto.
- Validar que el componente global del Footer consuma los mismos datos de dirección/horarios/teléfono que Contacto.

---

## 7. Lista de aprobación del cliente

Antes de marcar esta V1 como **copy listo para publicación**, confirmar:

- [ ] Dirección exacta: Calle 35 #34-36, Barzal, Villavicencio (incluida la escritura oficial).
- [ ] Pin del mapa y URL de «Cómo llegar» apuntan al establecimiento correcto.
- [ ] Número telefónico actual y enlace `tel:`.
- [ ] Número oficial de WhatsApp y autorización para utilizarlo en la web.
- [ ] Horario vigente de lunes a viernes.
- [ ] Horario vigente de sábados y eventual información de domingos/festivos.
- [ ] Material real y autorizado para portada y video de cómo llegar.
- [ ] Disponibilidad de subtítulos/transcripción si el video tiene narración.
- [ ] URL definitiva del dominio y tratamiento correcto de indexación.
- [ ] Texto compartido del Footer consistente con todas las demás páginas.
- [ ] Aprobación editorial de los titulares, descripciones y etiquetas.

---

## 8. Resumen de copy listo para trasladar a componentes

> Este bloque recopila **solo el contenido visible principal**, sin notas editoriales, para facilitar la implementación.

### Hero

**CONTACTO · ÓPTICA ALEMANIA**

# Hablemos de tu visión.

¿Tienes preguntas sobre nuestros servicios o necesitas información antes de visitarnos? Escríbenos o llámanos para resolver tus dudas y conocer las opciones de atención disponibles.

**Escribir por WhatsApp** · **Llamar ahora**

### Ubicación

**DÓNDE ENCONTRARNOS**

## Nos vemos en Barzal.

Estamos en Villavicencio. Aquí encontrarás nuestra dirección, los horarios de referencia y las opciones para llegar a Óptica Alemania.

**Nuestra dirección**  
Calle 35 #34-36, Barzal, Villavicencio, Meta, Colombia

**Horarios de atención**  
Lunes a viernes: 8:30 a. m. – 6:00 p. m.  
Sábados: 8:30 a. m. – 3:00 p. m.

**Teléfono**  
+57 311 201 7302

**Ubícanos en el mapa**  
**Cómo llegar**

**¿VIENES POR PRIMERA VEZ?**

### Te mostramos cómo llegar.

Mira nuestro recorrido en video para reconocer el lugar y encontrar más fácilmente la entrada de la óptica.

**Reproducir video**

> **Aviso de publicación:** dirección, horarios, teléfono y mapa aún deben ser ratificados por el cliente antes del lanzamiento; se incluyen para revisión editorial y preparación técnica.

---

**Fin del documento — Óptica Alemania · Contacto Copy V1.**
