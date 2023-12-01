import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    runes: true,
  },
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

export default config;
