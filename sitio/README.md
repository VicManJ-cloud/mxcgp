# MX Consultores en Gestión Pública — sitio web

Sitio institucional estático construido con [Astro](https://astro.build). El
contenido proviene de un guion aprobado y la identidad visual de un manual de
marca.

## El repositorio está partido en dos

```
mxce/
  sitio/       ← esto. Todo lo necesario para construir y publicar. Va en git.
  recursos/    ← material de trabajo. NO va en git, solo existe en la máquina.
```

`recursos/` guarda los documentos originales del cliente (el guion y el manual
de identidad en `.docx`), las capturas de revisión y `PENDIENTES.md` con lo que
falta resolver antes de publicar. Nada de eso hace falta para que el sitio
funcione, y son documentos del cliente, así que quedan fuera del control de
versiones.

**Consecuencia:** quien clone el repositorio obtiene un sitio que compila y
funciona, pero no ve esas notas. Si `recursos/` se borra de esta computadora,
no hay copia en git — conviene respaldarlo aparte.

## Requisitos

- Node.js 18 o superior (probado con Node 24.12 y npm 11.6)

## Comandos

Todos se ejecutan **desde `sitio/`**, no desde la raíz del repositorio.

```bash
cd sitio
npm install      # instala dependencias (una sola vez)
npm run dev      # servidor local en http://localhost:4321 con recarga automática
npm run build    # genera el sitio final en dist/
npm run preview  # sirve dist/ para revisarlo antes de publicar
```

`npm run build` produce HTML, CSS e imágenes estáticas en `dist/`. **Eso es todo
lo que se sube al hosting**: Astro y Node no se necesitan en el servidor.

## Estructura

```
sitio/
  src/
    data/site.js         Fuente única de datos: menú, los 6 servicios, correo.
    layouts/Base.astro   <head>, metadatos, SEO, cabecera y pie comunes.
    components/          Header, Footer, Logotipo, Orbe, Glifo, Entregables…
    pages/               Una página por archivo; la ruta sale del nombre.
    styles/global.css    Tokens de color, tipografía y componentes compartidos.
    assets/logo/         Logotipos en SVG, insertados en línea.
  public/
    logo/mx-horizontal.png   Solo para la vista previa social (og:image).
    favicon.svg
  astro.config.mjs       Dominio del sitio y opciones de compilación.
```

### Dónde editar qué

| Quiero cambiar…                    | Archivo                          |
| ---------------------------------- | -------------------------------- |
| Un servicio, o agregar uno nuevo   | `src/data/site.js` → `servicios` |
| El menú de navegación              | `src/data/site.js` → `navegacion`|
| El correo de contacto              | `src/data/site.js` → `empresa`   |
| Colores, tipografía, espaciado     | `src/styles/global.css`          |
| El texto de una página             | `src/pages/<pagina>.astro`       |

Los servicios se escriben **una sola vez** en `site.js` y se pintan solos en
Inicio, en Servicios y en el desplegable del formulario de contacto.

## Identidad visual

El sistema combina tres cosas: el núcleo del manual de marca, el lenguaje
estructural de la referencia de estilo entregada, y una paleta de acento
derivada del propio logotipo.

### Paleta

| Rol | Token | Hex | Notas |
| --- | --- | --- | --- |
| Lienzo oscuro | `--lienzo` | `#111218` | Negro del manual con matiz índigo |
| Superficie clara | `--papel` | `#ffffff` | Banda clara |
| Tarjeta elevada | `--hueso` | `#f4f3ee` | Off-white cálido, nunca blanco puro al elevar |
| Acento sobre claro | `--indigo` | `#3f4795` | Botones, enlaces, palabra de acento — 8.25:1 |
| Acento sobre oscuro | `--indigo-vivo` | `#7c86f0` | Misma función invertida — 5.81:1 |
| Secundario | `--ambar` | `#e0a63c` | **Solo sobre oscuro.** Sobre claro usa `--ambar-oscuro` |

El índigo no es arbitrario: se muestreó del logotipo en
`../recursos/docs/WhatsApp Image…jpeg`, que resultó ser un índigo desaturado en H 240°
(≈ `#50506F`). La paleta de acento se construyó saturando y ajustando ese
tono hasta alcanzar contraste AA o superior en cada par en uso.

**Regla del ámbar:** `#e0a63c` sobre blanco da 2.75:1 y falla accesibilidad.
Sobre superficie clara siempre `--ambar-oscuro` (`#7a5a16`, 6.36:1).

### Tipografía

| Familia | Uso | Sustituye a |
| --- | --- | --- |
| Archivo | Solo display: héroes y títulos de banda | Ozik |
| Inter | Todo lo demás: nav, cuerpo, botones, tarjetas | Aeonik |
| Instrument Serif | Acento editorial, una cita en Nosotros | — |

Autoalojadas vía `@fontsource`: cero peticiones a terceros, sin parpadeo.
Solo se descargan los subconjuntos latinos (~100 KB en total).

### Desviaciones del manual

Tres, todas deliberadas y autorizadas por el cliente:

1. **Tipografía.** El manual indica Arial / Helvetica Neue. Se usan Archivo e
   Inter, del mismo género (grotescas neutras) pero con mejor rendimiento en
   pantalla y el interletrado negativo que pide la referencia.
2. **Color de acento.** El manual define cuatro colores sin acento. Se añadió
   el índigo derivado del propio logotipo y un ámbar de uso restringido.
3. **Gris de texto.** `#888888` sobre blanco da 3.5:1 y no alcanza AA para
   texto corrido; se usa `#5c5c5c` para párrafos secundarios.

El logotipo, en cambio, se respeta sin cambios en las cuatro variantes del
manual.

## Contacto: por qué no hay formulario

La página de Contacto ofrece el correo y un botón que abre el programa de
correo del visitante con el asunto y una plantilla ya redactadas.

Es una decisión deliberada, no una carencia. Un formulario convierte al sitio
en punto de recolección de datos personales, y eso obliga a publicar un aviso
de privacidad validado por un abogado conforme a la LFPDPPP. Sin formulario,
el sitio **no recibe, no almacena y no transmite nada**: la plantilla se
construye al compilar y viaja dentro del propio enlace `mailto:`.

Para no perder la información que el formulario recogía, la página explica
qué conviene incluir en el primer correo (institución, cargo, servicio de
interés y el reto concreto), y la plantilla ya trae esos campos.

**Si alguna vez se reinstala un formulario**, el aviso de privacidad vuelve a
ser obligatorio. El borrador está conservado en
`src/pages/_aviso-privacidad.astro` —el guion bajo impide que Astro le genere
ruta— con los pasos anotados en su cabecera.

## Publicación

`dist/` es estático puro y funciona en cualquier hosting: Netlify, Vercel,
Cloudflare Pages, GitHub Pages o un servidor propio.

Antes de publicar, revisar `../recursos/PENDIENTES.md`. Queda un asunto
bloqueante que no se resuelve desde el código: validar las afirmaciones de la
sección Nosotros.
