// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  site: 'https://joelitorepos.github.io',
  base: "/mi-portfolio/",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
