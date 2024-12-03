import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
// import react from "@astrojs/react";
import compress from "astro-compress";
import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "always",
  },
  integrations: [tailwind(), prefetch(), critters(), compress()],
});
