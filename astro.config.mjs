import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [tailwind(), react()],
  output: "static",
  site: "https://holiemood.com"
  // adapter: vercel(),
});
