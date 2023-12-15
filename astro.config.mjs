import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import sentry from "@sentry/astro";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://genai-blog.vercel.app/',
  integrations: [tailwind(), mdx(), svelte(), sentry({
    dsn: "https://ae18d6deff77e66b880cbf009a4d015e@o4506305828290560.ingest.sentry.io/4506396468641792",
    sourceMapsUploadOptions: {
      project: "genai-blog",
      authToken: process.env.SENTRY_AUTH_TOKEN
    }
  }), partytown(), sitemap()]
});
