import { defineConfig } from "astro/config";

// Static site generation — outputs to ./dist, perfect for Cloudflare Pages.
export default defineConfig({
  site: "https://prajalkulkarni.com",
  output: "static",
  build: { format: "file" }, // emits /journey.html etc. (clean, portable URLs)
  compressHTML: true,
});
