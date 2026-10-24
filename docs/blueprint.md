# Óptica Alemania — Blueprint UX/UI del Catálogo

**Proyecto:** Óptica Alemania, Villavicencio, Colombia  
**Módulo:** Catálogo comercial (propuesta de Fase 2)  
**Versión:** 1.0 — 24 de octubre de 2026  
**Estado:** Blueprint para diseño de mockups; fuera del alcance de implementación de la primera entrega  
**Documento relacionado:** `optica_alemania_catalogo_design_system.md`

---

## 1. Resumen ejecutivo

Diseñar una experiencia comercial y visual para explorar el catálogo de monturas, gafas y otros productos ópticos de Óptica Alemania. El visitante **descubre → elige categoría → filtra → examina un producto → consulta por WhatsApp**.

El sitio institucional de **Fase 1** se mantiene en cinco páginas: Home, Nosotros, Servicios, Procedimientos y Contacto. El catálogo es una **propuesta de Fase 2** que se presenta con mockups y no debe activarse en el menú público de la primera entrega.

### Objetivos UX

1. Facilitar la navegación por público, tipo de producto y precio.
2. Dar protagonismo a la fotografía de productos y a la comparación sencilla.
3. Mostrar precios reales cuando proceda y ofrecer «Consultar precio» cuando dependa de personalización.
4. Reducir el esfuerzo de contacto: mensaje de WhatsApp con artículo y referencia.
5. Mantener continuidad visual con el resto del sitio, con una capa editorial más cercana a moda/eyewear.

### No objetivos (fuera de alcance)

- Carrito, checkout, pagos, domicilios y cuentas de cliente.
- Inventario transaccional o reserva de productos.
- Simulador virtual de gafas o cálculo de fórmula.
- Gestión administrativa del catálogo durante la Fase 1.
- Promociones y precios ficticios para llenar diseños.

## 2. Arquitectura de información

```text
Catálogo [conceptual, Fase 2]
├── 01. Hero — Encuentra tu estilo, mira diferente
├── 02. Explora por categoría
│   ├── Hombres → catálogo filtrado
│   ├── Mujeres → catálogo filtrado
│   └── Niños → catálogo filtrado
├── 03. Nuestra colección
│   ├── Búsqueda
│   ├── Filtros por público, tipo, precio y otros aplicables
│   ├── Ordenamiento
│   ├── Cuadrícula de tarjetas de producto
│   ├── Paginación o cargar más (decisión en Fase 2)
│   └── Estados vacío, carga, error y sin resultados
├── 04. Ayuda — ¿No encuentras lo que buscas?
└── Footer institucional reutilizado

Detalle de producto [ruta secundaria, no página del menú]
├── Breadcrumb / volver al catálogo
├── Galería de fotografías
├── Información: nombre, referencia, marca, atributos
├── Precio o consultar precio
├── CTA consultar producto por WhatsApp
└── Footer institucional

Mobile adicional
└── Panel de filtros abierto (bottom sheet / drawer)
```

**Rutas propuestas para la Fase 2:**

- `/catalogo`
- `/catalogo/[slug]`
- Filtros en URL: `/catalogo?publico=mujeres&tipo=monturas&orden=precio_asc` (ejemplo conceptual de estructura, sin productos inventados).

No crear páginas independientes «/hombres», «/mujeres», «/ninos» salvo justificación posterior de SEO y catálogo suficiente; utilizar filtros enlazables.

## 3. Recorridos de usuario

### Flujo A — Explorar por público

1. Llega a `/catalogo` y ve el Hero.
2. Selecciona «Mujeres» en la sección de categorías.
3. La página dirige el foco hacia «Nuestra colección» y aplica `publico=mujeres`.
4. Ve productos compatibles, el chip «Mujeres» y un resultado actualizado.
5. Abre una tarjeta, examina la ficha y consulta por WhatsApp.

### Flujo B — Encontrar una montura por presupuesto

1. Accede directamente a «Nuestra colección» mediante CTA del Hero.
2. Selecciona `tipo=monturas` y rango de precio (si hay valores confiables).
3. Ordena por «Menor precio».
4. Revisa productos, abre detalles y consulta por WhatsApp.
5. Puede modificar o limpiar filtros sin perder el hilo de navegación.

### Flujo C — Consultar producto sin precio fijo

1. Abre una ficha de lente o producto con precio variable.
2. Ve «Consultar precio» con explicación corta si es necesario.
3. Pulsa «Consultar este producto».
4. WhatsApp abre un mensaje editable con nombre/referencia y URL del artículo.
5. El catálogo **no promete un precio ni disponibilidad** que no esté confirmado.

### Flujo D — No hay coincidencias

1. Combina filtros y la consulta arroja cero artículos.
2. La pantalla explica «No encontramos productos con estos filtros».
3. Ofrece «Limpiar filtros» y/o retirar chips específicos.
4. Conserva contexto y evita un callejón sin salida.

## 4. Especificación de secciones

### 01 — Hero del Catálogo

**Objetivo:** presentar la colección como experiencia atractiva de estilo y llevar al inventario visible.

**Copy conceptual aprobado para mockups:**

- Eyebrow: `COLECCIÓN ÓPTICA ALEMANIA`
- H1: `Encuentra tu estilo, mira diferente.`
- Descripción: `Explora nuestra colección de monturas, gafas y opciones visuales para cada personalidad.`
- CTA: `Explorar colección` → ancla `#coleccion`.

**Desktop:**

- Header global transparente sobre Hero, con «Catálogo» activo **únicamente en los mockups de Fase 2**.
- Fotografía editorial de una persona adulta con gafas en el lado derecho (aprox. 55 %), contenido a la izquierda (aprox. 45 %); fondo neutro cálido integrado, sin división vertical rígida.
- Instrument Serif para el H1, *«mira diferente.»* en cursiva azul.
- Un único botón primario azul; no otras acciones superfluas.
- Altura orientativa 70–80svh, adaptada al contenido; evitar un Hero excesivamente largo.

**Mobile:**

- Header móvil con logo oficial y menú; mantener CTA de WhatsApp del header solo si cabe con buena jerarquía.
- Copy visible primero; modelo con gafas en zona inferior, recorte vertical específico.
- Botón «Explorar colección» de tamaño táctil cómodo, visible antes de un tramo largo de fotografía.
- Sin mockup dentro de dispositivo, sin recortes de la montura ni solapamiento con texto.

**No incluir:** precios, marcas ficticias, tres modelos simultáneos, botones directos para cada género, carrito o descuentos.

**Estado de diseño:** Hero desktop y mobile ya conceptualizados; se deben revisar al montar con activos oficiales, especialmente el logotipo.

### 02 — Explora por categoría

**Objetivo:** navegación rápida al catálogo según público; no debe convertirse en otra tienda independiente.

**Título sugerido:** `Un estilo para cada mirada.`  
**Descripción sugerida:** `Explora nuestra selección y encuentra opciones para ti y tu familia.`

**Elementos:** tres tarjetas editoriales: `Hombres`, `Mujeres`, `Niños`. Mostrar el atributo «Unisex» dentro de filtros cuando aplique, no forzarlo como cuarta tarjeta fotográfica.

**Desktop:**

- Tres retratos/categorías en columnas iguales, proporción fotográfica 3:4 o similar.
- Título y flecha integrados de forma legible; imagen protagonista, sin tarjetas con sombras fuertes.
- Espacio suficiente para que se perciban como navegaciones, no anuncios aislados.

**Mobile:**

- Priorizar tarjetas de buen tamaño; una columna o carrusel con avance evidente si se necesita limitar la altura.
- Título superpuesto únicamente si el contraste está garantizado.
- Interacción con un toque; no depender del hover.

**Acción:** click/tap → set `publico` y desplazamiento/URL al bloque `#coleccion`. Mostrar filtro activo y resultados actualizados.

### 03 — Nuestra colección

**Objetivo:** encontrar y comparar productos con eficiencia. Es la sección funcional central.

**Copy:** título `Nuestra colección`, texto auxiliar corto opcional; campo `Buscar por nombre, marca o referencia`.

**Desktop:**

- Encabezado con título, cantidad real de artículos y selector `Ordenar por`.
- Dos áreas: **sidebar 240–280px** para filtros y **grid 3 columnas** de productos; ampliar a 4 cuando el contenedor/ancho real lo permita sin reducir demasiado cada tarjeta.
- Filtros agrupados y colapsables según necesidad: público; tipo de producto; precio; marca; color. Se muestran únicamente opciones basadas en datos efectivos del catálogo.
- Chips de filtros activos y enlace «Limpiar todo» por encima de resultados si se aplica al menos uno.
- Producto card: imagen clara, tipo/marca, nombre o referencia, precio confirmado o «Consultar precio», acceso a detalle.
- Paginación o «Cargar más»: decidir según volumen/SEO tras obtener número de artículos.

**Mobile:**

- Encabezado, campo de búsqueda y fila de controles `Filtros` + `Ordenar`.
- Botón «Filtros» abre panel desde abajo, con grupos plegables, botón `Limpiar` y acción primaria `Ver resultados`.
- Cuadrícula de dos columnas si hay espacio útil; cambiar a una columna en dispositivos estrechos cuando el texto no quepa.
- Mostrar chips con filtros activos y resultados, sin empujar demasiado abajo el primer producto.
- El panel preserva selecciones durante su apertura y cierre; Escape y botón cerrar. Si se opta por modo «Aplicar», mantener un borrador local hasta confirmación para no crear cambios sorprendentes.

**Modelo de filtros:**

| Grupo | Valores / comportamiento | Reglas |
|---|---|---|
| Público | Todos, Hombres, Mujeres, Niños, Unisex | Un producto unisex puede aparecer en filtros masculino y femenino según definición validada |
| Tipo | Monturas oftálmicas, Gafas de sol, Lentes de contacto, Lentes oftálmicos | Confirmar tipos efectivamente comercializados |
| Precio | Min / max o rangos calculados | Aplicar solo a artículos con precio comparable; evitar filtrar incorrectamente «Consultar precio» |
| Marca | Multiselección | Mostrar solo marcas registradas y aprobadas |
| Color | Multiselección | Usar atributos consistentes; evitar color asignado automáticamente por la imagen |
| Orden | Destacados, menor/mayor precio, novedades | Solo cuando los metadatos permitan un orden verificable |
| Búsqueda | Nombre, referencia y marca | Ignorar mayúsculas/tildes en coincidencias cuando sea posible |

**Estados:** inicial, filtrado, ordenado, búsqueda con resultados, cero resultados, carga, error, catálogo sin artículos, producto retirado. Diseñar mensajes claros y mecanismos de recuperación.

### 04 — Franja de ayuda comercial

**Objetivo:** convertir la indecisión o ausencia de un producto en conversación.

**Copy sugerido:**

- Eyebrow: `ESTAMOS PARA AYUDARTE`
- H2: `¿No encuentras lo que buscas?`
- Texto: `Comunícate con nuestro equipo y consulta por las monturas, lentes y opciones disponibles.`
- CTA: `Consultar por WhatsApp`.

**Desktop:** banda horizontal compacta, fondo azul pálido, copy izquierda y CTA derecha o alineado bajo el texto si conviene. **Mobile:** apilado, botón de ancho cómodo, sin fotografía extra. **Sin formularios**, nuevo Hero ni promesas de asesoría clínica no confirmadas.

### 05 — Footer compartido

Reutilizar el Footer institucional existente con logotipo oficial, enlaces, información comercial y políticas confirmadas. No crear una variación del Footer únicamente para el catálogo.

## 5. Vista secundaria — Detalle de producto

**Ruta conceptual:** `/catalogo/[slug]`.

### Información visible mínima

1. Breadcrumb y acción volver a la colección.
2. Galería con fotografías oficiales del producto (frontal, lateral y detalle cuando existan).
3. Tipo, marca (si aplica), nombre, referencia/SKU y opciones disponibles.
4. Precio fijo **verificado** o «Consultar precio» cuando depende de configuración.
5. Atributos pertinentes: forma, color, material, medidas de montura; para lentes, especificación y condiciones particulares si verificadas.
6. CTA primario `Consultar este producto`.
7. Mensaje orientativo de disponibilidad: **no afirmarla sin información confiable**.

**Desktop:** galería grande izquierda 55–60 %, datos derecha 40–45 %. Si la ficha es larga, CTA visible dentro del flujo, sin elementos fijos que tapen el contenido.

**Mobile:** galería primero; miniaturas o paginación accesibles; después nombre, precio, características y CTA. Botón inferior sticky solo si supera pruebas de usabilidad y no invade contenido/accesibilidad.

**Mensaje de WhatsApp sugerido, dinámico y editable:**

> Hola, vi este producto en el catálogo de Óptica Alemania y quisiera conocer más información: [nombre], referencia [referencia]. Enlace: [URL]. ¿Me pueden ayudar?

No incluir automáticamente datos personales, fórmula visual ni disponibilidad. El teléfono comercial debe venir de la configuración oficial, no estar disperso en componentes.

**Opcional posterior:** «También te puede interesar» con productos realmente relacionados, solo si el catálogo tiene suficiente amplitud.

## 6. Componentes e interacciones clave

| Componente | Acción/estado esperado |
|---|---|
| Header | Transparente sobre Hero, sólido al scroll, «Catálogo» activo solo en Fase 2 |
| CTA Hero | Desplaza a `#coleccion` sin ocultar el título bajo el header sticky |
| Tarjeta categoría | Aplica público y lleva al catálogo filtrado |
| Búsqueda | Coincidencias por atributos indexados; botón para limpiar |
| Filtros desktop | Refrescan grid y chips; reflejan estado en URL |
| Panel mobile | Abre, gestiona, aplica/limpia y cierra con foco correcto |
| Ordenamiento | Reordena artículos válidos preservando filtros |
| Tarjeta producto | Abre URL de detalle; no CTA duplicados innecesarios |
| CTA detalle | Prepara WhatsApp con nombre, referencia y URL |
| Estado vacío | Mensaje, limpiar filtros o volver a categoría general |
| Footer | Reutilizado sin cambios conceptuales |

## 7. Modelo de contenido futuro (propuesta, no implementación)

En Fase 1, Sanity se limita a administración de imágenes y videos del sitio institucional. **Fase 2 requiere un modelo estructurado nuevo**.

```ts
// Interfaz orientativa, no contrato técnico definitivo
interface CatalogProduct {
  id: string;
  slug: string;
  nombre: string;
  referencia: string;
  tipo: 'monturas' | 'gafas-sol' | 'lentes-contacto' | 'lentes-oftalmicos';
  publico: Array<'hombres' | 'mujeres' | 'ninos' | 'unisex'>;
  marca?: string;
  colores?: string[];
  material?: string;
  forma?: string;
  medidas?: Record<string, string>;
  descripcion?: string;
  precioCOP?: number;             // solo si el precio es fijo y validado
  consultarPrecio?: boolean;      // casos variables o personalizados
  imagenes: Array<{ src: string; alt: string }>;
  publicado: boolean;
  destacado?: boolean;
  fechaIncorporacion?: string;
  disponibilidad?: 'consultar' | 'confirmada';
}
```

**Observaciones:**

- Establecer una taxonomía real por categoría antes de crear filtros. No todos los atributos aplican a todos los tipos de producto.
- Precio en COP, no texto libre si se quiere filtrar/ordenar. Validar reglas de precio variable y promociones con el negocio.
- Si no existe inventario sincronizado, evitar presentar la disponibilidad como un dato en tiempo real.
- En producción, imágenes, marcas, detalles y fotografías deben provenir del cliente o de material con licencia de uso. Imágenes generadas solo para mockups.
- SEO: título y descripción específicos de catálogo y ficha; indexación de combinaciones de filtros controlada para evitar duplicados. Definir páginas canónicas y estrategia técnica durante implementación.

## 8. Arquitectura técnica futura sugerida

**Base probable:** Astro (consistente con el sitio institucional) + componentes/islas interactivas ligeras; Tailwind CSS o estilos del sistema existente; Sanity para productos si el cliente aprueba ampliar el CMS. La decisión concreta de framework interactivo, hosting de media y estrategia de renderizado queda para la Fase 2.

- Filtrado y ordenamiento: en cliente para catálogo pequeño; búsqueda/consulta servida o indexada cuando el volumen lo justifique.
- Mantener los parámetros de filtros en URL para compartir búsquedas y conservar navegación atrás/adelante.
- No incluir credenciales ni llamadas de Sanity desde el cliente cuando requieran claves privadas.
- WhatsApp: URL preparada por acción del usuario, con teléfono oficial en configuración centralizada.
- Accesibilidad: controles nativos cuando sea posible, foco restaurado tras cerrar panel mobile, resultados anunciados con `aria-live` no invasivo.
- Rendimiento: fotografías responsivas, lazy load fuera del viewport, reservar proporciones para evitar CLS, priorizar imagen del Hero.
- Analítica futura: eventos de categoría, aplicar filtro, búsqueda, abrir ficha, clic WhatsApp; respetar consentimiento y configuración de privacidad aplicables.

## 9. Estrategia de mockups y orden de trabajo

**Regla de producción:** analizar sección → generar **una** imagen desktop → generar **una** imagen mobile → aprobar → seguir a la siguiente. Imágenes estáticas, sin mockups dibujados dentro de marcos de teléfono.

| Orden | Vista | Desktop | Mobile | Estado |
|---|---|---|---|---|
| 01 | Hero «Encuentra tu estilo, mira diferente» | Sí | Sí | Conceptual generado |
| 02 | Explora por categoría | Sí | Sí | Pendiente |
| 03 | Nuestra colección con filtros/productos | Sí | Sí | Pendiente |
| 04 | Cierre «¿No encuentras lo que buscas?» | Sí | Sí | Pendiente |
| 05 | Detalle individual de producto | Sí | Sí | Pendiente |
| 06 | Panel de filtros abierto | No necesario | Sí | Pendiente |
| 07 | Estado sin resultados | Opcional | Opcional | Mejora futura |

**Entrega conceptual principal:** 11 imágenes: 5 desktop, 5 mobile, 1 adicional mobile con filtros abiertos. Las imágenes son visualización de intención UX/UI, **no reflejan necesariamente la oferta real**.

### Revisiones obligatorias antes de presentar al cliente

- Coherencia con la marca y el resto del sitio.
- Logotipo oficial sustituido por recurso original (no versión inventada por generador de imágenes).
- Copys sin errores; no presentar productos o precios de ejemplo como inventario confirmado.
- Filtros visualmente comprensibles, consistentes en desktop/mobile y accesibles.
- Diferencia explícita entre «catálogo consultivo» y «tienda con compra en línea».
- Las capturas representan posibles futuras funcionalidades, no funcionalidades entregadas ahora.

## 10. Criterios de aceptación del diseño

1. El usuario identifica en pocos segundos que es un catálogo de monturas y gafas de Óptica Alemania.
2. Desde el Hero puede saltar directamente a la colección.
3. Puede seleccionar Hombres, Mujeres o Niños sin perder contexto.
4. En desktop son visibles simultáneamente filtros y productos; mobile tiene control de filtros claro.
5. Cada tarjeta muestra fotografía, identificación y precio confirmado/consulta.
6. Existe navegación a un detalle con fotos, atributos relevantes y CTA de consulta.
7. Cualquier filtro puede retirarse; un resultado cero tiene recuperación clara.
8. Se conserva la identidad visual global, el header transparente en Hero y el footer compartido.
9. No aparece carrito, checkout ni mensaje de compra online.
10. La propuesta permanece **fuera de la primera entrega** y no se presenta como funcionalidad publicada.

## 11. Decisiones pendientes para la Fase 2

Estas preguntas **no bloquean los mockups**, pero deben resolverse antes de implementar:

- Inventario real por categorías, marcas y volumen aproximado de referencias.
- Si incluyen o no gafas de sol, lentes de contacto y lentes oftálmicos en catálogo público.
- Cómo funcionan precios fijos vs. variables y si se publicarán promociones.
- Disponibilidad de fotografías originales y permiso de uso de imágenes con personas.
- Encargado de actualizar catálogo en Sanity; frecuencia y proceso de validación de precios.
- Número oficial de WhatsApp comercial y política de respuesta.
- Búsqueda, paginación y SEO según cantidad real de productos.
- Política para productos descontinuados y fichas que pierden vigencia.

---

**Conclusión:** el concepto tiene una arquitectura contenida y ampliable: **Hero → Categorías → Colección filtrable → Ayuda → Footer**, con detalle de producto y panel de filtros mobile. El objetivo es demostrar el valor de la posible Fase 2 sin confundirla con el alcance contratado de la Fase 1.
