# MX Consultores en Gestión Pública — sitio web

Sitio institucional estático construido con [Astro](https://astro.build). El
contenido proviene del guion aprobado y la identidad visual del manual de marca;
ambos documentos originales están en `docs/`.

## Requisitos

- Node.js 18 o superior (probado con Node 24.12 y npm 11.6)

## Comandos

```bash
npm install      # instala dependencias (una sola vez)
npm run dev      # servidor local en http://localhost:4321 con recarga automática
npm run build    # genera el sitio final en dist/
npm run preview  # sirve dist/ para revisarlo antes de publicar
```

`npm run build` produce HTML, CSS e imágenes estáticas en `dist/`. **Eso es todo
lo que se sube al hosting**: Astro y Node no se necesitan en el servidor.

## Estructura

```
src/
  data/site.js          Fuente única de datos: menú, los 6 servicios, correo.
  layouts/Base.astro    <head>, metadatos, SEO, cabecera y pie comunes.
  components/           Header.astro y Footer.astro.
  pages/                Una página por archivo; la ruta sale del nombre.
  styles/global.css     Tokens de color, tipografía y componentes compartidos.
public/
  logo/                 Los 4 PNG del manual (vertical/horizontal, pos/neg).
  favicon.svg
docs/                   Documentos originales: guion y manual de identidad.
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

Conforme al Manual de Identidad Visual (`docs/MX_Consultores_Logo.docx`):

| Color          | Hex       | Uso                                  |
| -------------- | --------- | ------------------------------------ |
| Negro          | `#1A1A1A` | Texto principal, pie, botones        |
| Gris texto     | `#888888` | Etiquetas y metadatos                |
| Gris claro     | `#DDDDDD` | Reglas de 1px y separadores          |
| Blanco         | `#FFFFFF` | Fondo                                |

Tipografía: Arial / Helvetica Neue, según el manual.

**Una desviación deliberada:** `#888888` sobre blanco da 3.5:1 de contraste y no
alcanza el mínimo AA para texto corrido. Se agregó `#5C5C5C`
(`--gris-texto-accesible`) para párrafos secundarios; `#888888` se conserva solo
en etiquetas y metadatos.

## Formulario de contacto

El formulario **no envía correos por sí mismo**: valida los campos y abre el
programa de correo del visitante con el mensaje ya redactado hacia
`inverproyecto30@gmail.com`.

Si más adelante se quiere que envíe directo sin abrir el cliente de correo, se
puede conectar a Formspree o Web3Forms cambiando el manejador `submit` en
`src/pages/contacto.astro` por un `fetch` al endpoint del servicio.

## Publicación

`dist/` es estático puro y funciona en cualquier hosting: Netlify, Vercel,
Cloudflare Pages, GitHub Pages o un servidor propio.

Antes de publicar, revisar `PENDIENTES.md`.
