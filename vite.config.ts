import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import env from "node:process";

export default defineConfig({
  base: env.NODE_ENV === "production" ? "/combriat-kevin" : "",
  plugins: [tailwindcss(), sveltekit()],
});
