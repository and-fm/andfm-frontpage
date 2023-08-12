import { defineConfig, sharpImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import compress from "astro-compress";

import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), prefetch(), critters(), compress()],
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService()
  }
});