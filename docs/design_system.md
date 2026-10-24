# Óptica Alemania — Design System del Catálogo

**Proyecto:** Óptica Alemania, Villavicencio, Colombia  
**Módulo:** Catálogo comercial (propuesta de Fase 2)  
**Versión:** 1.0 — 24 de octubre de 2026  
**Estado:** Especificación visual conceptual; no forma parte de la primera entrega del sitio  
**Alcance:** Página `/catalogo`, vista de detalle `/catalogo/[slug]`, filtros y estados asociados, desktop y mobile

---

## 1. Propósito y relación con el sitio principal

El catálogo permite descubrir monturas, gafas de sol, lentes de contacto y otras soluciones ópticas **solo si forman parte de la oferta confirmada** por Óptica Alemania. Su función prevista es inspirar, ayudar a encontrar un producto y conducir a una consulta específica por WhatsApp. **No es una tienda en línea:** no incluye carrito, checkout, pagos, envíos ni reservas de inventario.

Este Design System **extiende**, pero no reemplaza, la identidad institucional del sitio existente (Home, Nosotros, Servicios, Procedimientos y Contacto). Se conservan el logotipo oficial, la familia tipográfica, los azules corporativos y el encabezado/pie compartidos. La diferencia del catálogo está en su **dirección editorial de moda**, las imágenes de producto y el peso de los controles de exploración.

**Principios:**

1. **Producto primero:** fotografías claras y consistentes, sin ornamentos que distraigan.
2. **Editorial, no ostentoso:** atractivo y contemporáneo, pero cercano y accesible.
3. **Explorar sin fricción:** navegación, filtros y búsqueda transparentes.
4. **Sin promesas inventadas:** precios, marcas, materiales, disponibilidad y beneficios únicamente si el cliente los valida.
5. **Accesible y responsive:** todo control debe ser utilizable con teclado, táctil y tecnologías asistivas.
6. **Propuesta futura explícita:** diseños conceptuales separados de lo contratado en la Fase 1.

## 2. Fundamentos de marca

### 2.1 Logotipo

- Usar **exclusivamente el archivo oficial facilitado por el cliente**; no reproducirlo ni reinterpretarlo con IA o tipografía aproximada.
- Mantener proporción, área de seguridad y legibilidad sobre fotografía. Si el fondo no garantiza contraste, incorporar gradiente localizado o superficie translúcida muy discreta.
- El logotipo en mockups generados mediante IA es ilustrativo y **no debe convertirse en activo de producción**.
- En la Fase 1 no se agrega «Catálogo» al menú publicado; su presencia en el header solo aplica al concepto de Fase 2.

### 2.2 Paleta de referencia

| Token | Valor | Aplicación |
|---|---|---|
| `brand.primary` | `#1464D9` | CTA primario, enlaces destacados, estados seleccionados |
| `brand.primaryBright` | `#1464F4` | Acento editorial, hover ilustrativo; usar sin sustituir indiscriminadamente el primario |
| `text.heading` | `#182D53` | Titulares, navegación, información principal |
| `text.body` | `#52617B` | Texto explicativo y metadatos legibles |
| `surface.default` | `#FFFFFF` | Fondos de contenido y tarjetas |
| `surface.cool` | `#F3F6FA` | Secciones alternas y controles secundarios |
| `surface.warm` | `#F3F1EE` | Hero editorial y fondos fotográficos del catálogo |
| `surface.blueSoft` | `#EAF2FF` | Cierre comercial y realces muy sutiles |
| `border.default` | `#E1E8F0` | Divisores y bordes ligeros |
| `state.error` | `#B42318` | Errores informativos (no usar como decoración) |
| `state.success` | `#16794A` | Confirmaciones reales, si aplica |

**Reglas de uso:** mayormente neutros cálidos/blancos; azul como señal de acción y jerarquía. No crear fondos azules gigantes en el listado. Verificar contraste WCAG de las combinaciones finales, especialmente azul sobre superficies claras.

### 2.3 Tipografía

- **Instrument Serif**: titulares editoriales (`h1`, `h2`) y palabras enfatizadas en cursiva, como *«mira diferente.»*. No usar en filtros, precios o detalles técnicos.
- **Inter**: navegación, cuerpo, botones, etiquetas, metadatos, referencias, precios y formulario.
- Fallback: serif del sistema para titulares y sans-serif del sistema para UI; controlar `font-display: swap` y fuentes optimizadas.

| Rol | Desktop | Mobile | Peso / notas |
|---|---|---|---|
| Hero H1 | `clamp(3.5rem, 5vw, 5.5rem)` | `clamp(2.65rem, 10vw, 4rem)` | Instrument Serif; `line-height: .98–1.08` |
| Título sección H2 | `clamp(2.25rem, 3.3vw, 3.5rem)` | `2–2.5rem` | Instrument Serif; énfasis opcional en azul cursiva |
| Título tarjeta | `1rem–1.125rem` | `.875rem–1rem` | Inter 600 |
| Precio | `1.1–1.3rem` | `1rem–1.125rem` | Inter 600–700, alto contraste |
| Texto principal | `1rem–1.125rem` | `1rem` | Inter 400, interlineado 1.5–1.7 |
| Texto auxiliar | `.875rem` | `.8125–.875rem` | Inter 400/500 |
| Eyebrow editorial | `.75rem` | `.6875–.75rem` | Inter 600, mayúsculas y tracking moderado |
| Botones | `.9–1rem` | `.9–1rem` | Inter 600 |

**Legibilidad:** no truncar el precio ni el nombre completo en la ficha detallada. Evitar párrafos superpuestos a rostros o gafas.

### 2.4 Retícula y espaciado

- Contenedor desktop: `max-width: 1280px` (hasta `1360px` si el header global lo requiere); ancho fluido `width: calc(100% - 2 * gutter)`.
- Gutters: desktop `48–64px`, tablet `24–32px`, mobile `20–24px`.
- Breakpoints de referencia: mobile `< 640px`, tablet `640–1023px`, desktop `≥ 1024px`; ajustar tras pruebas reales de composición.
- Espaciado: escala base de 4px: `4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96`.
- Separación entre secciones: desktop `80–112px`, mobile `56–72px`; en el listado, los filtros y las tarjetas tienen ritmo más compacto.
- Foco en evitar scroll horizontal a 320px de ancho.

### 2.5 Bordes, elevación y movimiento

- `radius.sm = 8px`; `radius.md = 12px`; `radius.lg = 18px`; `radius.xl = 24px`; `radius.pill = 999px`.
- Tarjetas de producto: marco sutil o fondo claro; **sin sombras prominentes**.
- Imágenes editoriales: esquinas redondeadas de `16–24px` fuera del Hero; imágenes del Hero a sangre.
- Sombras solo para header sticky, drawers o popovers cuando se requiera separación del fondo.
- Transiciones discretas `150–250ms` para botones, filtros y estados hover; respetar `prefers-reduced-motion`.
- No animar continuamente texto, precio o fotografías de producto.

## 3. Fotografía y dirección artística

### 3.1 Hero

- Una **persona adulta** con montura visible; encuadre editorial natural en tres cuartos, expresión relajada, sin poses exageradas.
- Desktop: figura principalmente a la derecha; espacio visual libre a la izquierda para el titular. Fotografía integrada al lienzo, sin borde de columna visible.
- Mobile: encuadre específico vertical con copy y CTA arriba, persona abajo; mantener rostro y gafas visibles sin taparlos con texto.
- Fondo cálido/crema; luz natural o de estudio suave, no estética hospitalaria ni saturación excesiva.
- Hero desktop aproximadamente `70–80svh`, sin imposición rígida; permitir que la siguiente sección asome cuando sea posible. En mobile, altura adaptada al contenido y a la fotografía: no forzar `100vh`.

### 3.2 Fotos de categorías y productos

- Categorías: retratos verticales consistentes para «Hombres», «Mujeres», «Niños» (personas reales/fotografías con autorización al implementarse).
- Producto: fondo claro homogéneo, relación recomendada `1:1` o `4:5`; recortes que preserven las varillas y la silueta completa de la montura.
- Vista detalle: foto frontal, tres cuartos, lateral y detalle según disponibilidad de imágenes auténticas.
- Evitar marcas o referencias ficticias presentadas como existentes.
- Compresión adaptativa con `srcset`, `sizes`, lazy load bajo el pliegue; priorizar imagen del Hero para LCP. Considerar AVIF/WebP y ancho acorde al dispositivo.
- Accesibilidad: alt objetivo («Montura rectangular color carey, vista frontal»); no «imagen de producto» repetido.

## 4. Componentes visuales

### 4.1 Header del catálogo (reutilizado)

- Header global con logo real, «Inicio», «Nosotros», «Servicios», «Procedimientos», «Catálogo», «Contacto», WhatsApp; solo en el **concepto Fase 2**.
- Estado inicial **transparente** sobre Hero; pasar a blanco/superficie sólida al desplazarse.
- «Catálogo» activo en azul con indicador discreto; accesibilidad `aria-current="page"`.
- Mobile: logo y botón de menú; WhatsApp puede mantenerse si cabe sin comprimir branding o producir desbordamiento.

### 4.2 Botones

| Variante | Apariencia | Uso |
|---|---|---|
| Primario | Azul `#1464D9`, texto blanco, pill | «Explorar colección», «Consultar este producto» |
| Secundario | Superficie blanca o transparente, borde azul o gris | «Limpiar filtros», acciones alternativas |
| Texto | Texto azul + flecha | «Ver detalles», navegación secundaria |
| Icono | Control circular/cuadrado con `aria-label` | Abrir filtros, cerrar drawer, búsqueda |

- Alto táctil mínimo objetivo: **44px**; recomendado **48px** para CTAs principales.
- Estados obligatorios: default, hover, focus visible, active, disabled y loading cuando corresponda.
- CTA no debe decir «Comprar ahora» en este alcance.

### 4.3 Tarjeta de categoría

- Imagen editorial vertical, nombre legible («Hombres», «Mujeres», «Niños») y affordance de navegación.
- Desktop: tres columnas iguales, con buen espacio entre ellas.
- Mobile: tarjetas compactas legibles; tres elementos en stack o carrusel accesible si mejora el ancho; no depender exclusivamente del hover.
- Activación: aplica filtro `publico` y desplaza al catálogo o navega a una URL equivalente.

### 4.4 Tarjeta de producto

**Jerarquía:** imagen → tipo/marca opcional → nombre/referencia → precio verificado o «Consultar precio» → acceso a detalle.

- Desktop: de 3 a 4 columnas de productos según ancho total disponible; con barra lateral, iniciar en **3 columnas**.
- Tablet: 2–3 columnas.
- Mobile: 2 columnas si hay ≥ 360px útiles y la legibilidad lo permite; 1 columna a anchos pequeños o con nombres/precios largos.
- No superponer sellos innecesarios a la foto.
- Precio: COP con separadores locales (`$ 249.000`) **solo como formato**, nunca utilizar ese ejemplo como precio real. Si el precio depende de la fórmula o tratamiento, usar «Consultar precio» o «Desde $…» únicamente si el mínimo está confirmado.
- No mostrar «Disponible», «Agotado» o descuentos sin datos de inventario confirmados.

### 4.5 Panel de filtros y búsqueda

**Desktop:** barra lateral `240–280px`, secciones plegables por público, tipo, rango de precio, marca, color. **Mobile:** botón «Filtros» que abre bottom sheet/drawer con encabezado, controles, «Limpiar» y «Ver resultados» fijos en zona inferior.

- Filtros principales: público (`todos`, `hombres`, `mujeres`, `ninos`, `unisex`), tipo (`monturas`, `gafas-sol`, `lentes-contacto`, `lentes-oftalmicos`), precio (cuando haya precio comparable).
- Marca y color solo si hay suficientes productos para que resulten útiles.
- Las opciones pueden variar por tipo: no atribuir a lentes formulados filtros que no correspondan a su naturaleza.
- Ordenar: destacados, precio ascendente, descendente, novedades **solo si existe fecha de incorporación real**.
- Búsqueda por referencia/nombre/marca. Mostrar chips removibles de filtros activos y botón «Limpiar todo».
- Los filtros deben ser combinables, reversibles, anunciados a lector de pantalla y preservables en la URL.

### 4.6 Detalle del producto

- Breadcrumb: `Catálogo / [Tipo] / [Nombre]`.
- Desktop: galería 55–60% a la izquierda, detalles 40–45% a la derecha.
- Mobile: galería sobre datos y CTA; vista sin zoom confuso ni carruseles automáticos.
- Mínimos: nombre, referencia, tipo, fotografías, precio o consulta, atributos apropiados y botón «Consultar este producto».
- CTA WhatsApp prepara mensaje con referencia y enlace del artículo, sin enviar automáticamente ni atribuir disponibilidad.
- Opcional: productos similares solo con datos reales y sin romper el objetivo principal.

### 4.7 Cierre comercial

- Banda compacta azul pálido `#EAF2FF`; título «¿No encuentras lo que buscas?» y botón WhatsApp.
- No sumar un segundo Hero ni repetir grandes fondos oscuros.
- Footer: exactamente el componente institucional aprobado, sin crear una versión independiente.

## 5. Estados y patrones de interacción

| Estado | Comportamiento visual |
|---|---|
| Catálogo inicial | Productos destacados o catálogo general, filtros limpios |
| Filtros aplicados | Chips activos, conteo real, orden consistente |
| Cargando | Skeletons estables sin saltos de layout; mensaje accesible |
| Sin resultados | Mensaje claro, filtros actuales y acción «Limpiar filtros» |
| Error de carga | Mensaje recuperable y acción «Reintentar» |
| Catálogo vacío | Mensaje editorial sobrio; no fingir productos disponibles |
| Producto sin precio | «Consultar precio» |
| Producto no publicado | No accesible desde el catálogo; detalle resuelve 404 si no debe mostrarse |
| Filtro mobile abierto | Fondo atenuado, enfoque dentro del panel, cierre explícito y con Escape |

No usar toasts para comunicar resultados que deban permanecer visibles. El número de resultados y los filtros activos se actualizan sin perder el enfoque innecesariamente.

## 6. Accesibilidad y calidad

- Objetivo **WCAG 2.2 AA** para contrastes, foco, navegación por teclado, nombres accesibles y controles.
- Jerarquía semántica única: un H1 por vista, H2 para secciones, listas de productos estructuradas.
- Imágenes no textuales: `alt` descriptivo; imágenes puramente decorativas con alt vacío.
- Inputs con etiquetas reales, errores anunciados, orden de tabulación lógico.
- Los iconos de filtros, búsqueda, cierre y flechas nunca deben ser el único indicador de propósito.
- Tamaño y separación de los objetivos táctiles adecuados para mobile.
- Evitar bloquear el scroll del documento tras cerrar el panel de filtros.
- Buenas prácticas Core Web Vitals: Hero priorizado, CLS minimizado, imágenes responsivas, carga diferida para imágenes secundarias.

## 7. Referencia de tokens CSS (orientativa)

```css
:root {
  --oa-blue: #1464D9;
  --oa-blue-bright: #1464F4;
  --oa-navy: #182D53;
  --oa-text-muted: #52617B;
  --oa-white: #FFFFFF;
  --oa-surface-cool: #F3F6FA;
  --oa-surface-warm: #F3F1EE;
  --oa-surface-soft-blue: #EAF2FF;
  --oa-border: #E1E8F0;
  --oa-radius-sm: 8px;
  --oa-radius-md: 12px;
  --oa-radius-lg: 18px;
  --oa-radius-xl: 24px;
  --oa-radius-pill: 999px;
  --oa-container: 1280px;
  --oa-font-display: 'Instrument Serif', Georgia, serif;
  --oa-font-ui: Inter, system-ui, sans-serif;
}
```

Este bloque expresa el objetivo visual; adaptarlo a los tokens ya existentes en el proyecto para **evitar duplicación**.

## 8. Reglas de implementación futura y alcance

- **Fase 1:** no desarrollar, no publicar en navegación, no crear contenido de productos en el CMS existente.
- **Fase 2:** ampliar el CMS para datos estructurados de productos (no solo media), acordar quién administra los artículos y quién valida los precios.
- Usar fotografías y logotipo originales autorizados en producción; las imágenes generadas son únicamente referencias del diseño.
- Validar productos, categorías, marcas y precios **antes de publicar**. No afirmar stock ni disponibilidad si no existe un proceso de actualización confiable.
- El DS se considera aprobado al validar mockups desktop/mobile, contraste, componentes, tipografías y la coherencia con la web principal.

---

**Dependencias de diseño:** Blueprint del Catálogo (documento complementario) y Design System global ya aprobado para Óptica Alemania.
