import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
      precompress: false,
      strict: true,
    }),
  },
  paths: {
    base: process.argv.includes("dev") ? "" : "/combriat_kevin",
  },
};
