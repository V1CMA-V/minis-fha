import db from "@astrojs/db";

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel/serverless";
import auth from "auth-astro";


// https://astro.build/config
export default defineConfig({
  prefetch: true,
  // devToolbar: {
  //   enabled: false,
  // },
  integrations: [tailwind(), preact(), auth(), db()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  })
});