import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import node from '@astrojs/node'; // Importa el adaptador

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: node(), // Configura el adaptador,
  mode: 'ssr'
});
