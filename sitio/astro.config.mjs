// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // El flujo de GitHub Pages inyecta la URL y la ruta base reales: mientras no
  // haya dominio propio, el sitio vive en <usuario>.github.io/<repositorio>/.
  site: process.env.SITIO_URL || 'https://cgpmx.com',
  base: process.env.SITIO_BASE || '/',
  build: { format: 'directory' },
});
