import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import env from "node:process";

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      fallback: "index.html",
    }),
    paths: {
      base: env.NODE_ENV === "production" ? "/combriat-kevin" : "",
    },
  },
};
