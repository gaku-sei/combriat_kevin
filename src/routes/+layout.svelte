<script lang="ts">
  import { resolve } from "$app/paths";

  import favicon from "$lib/assets/favicon.svg";

  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div
  class="text-md pointer-events-none sticky top-4 ml-auto flex justify-end gap-x-1 bg-transparent pr-6 md:text-sm print:hidden"
>
  <a href={resolve("/")} class="pointer-events-auto hover:underline">EN</a> /
  <a href={resolve("/fr")} class="pointer-events-auto hover:underline">FR</a>
</div>

{@render children?.()}
