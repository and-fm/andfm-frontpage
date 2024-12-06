import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
// import react from "@astrojs/react";
import compress from "astro-compress";
import critters from "astro-critters";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.and.fm",
  devToolbar: {
    enabled: false,
  },
  build: {
    inlineStylesheets: "always",
  },
  integrations: [tailwind(), prefetch(), critters(), compress(), sitemap()],
});
