import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://joelitorepos.github.io',
  base: '/mi-portafolio/',
  output: 'static',
  integrations: [tailwind()]
});