<script lang="ts">
  import type { PageData } from "./$types";
  import Resume from "./components/Resume.svelte";

  let { data } = $props<{ data: PageData }>();
</script>

<svelte:head>
  <title>Kévin Combriat's Résumé</title>
</svelte:head>

<div class="root">
  <Resume resume={data.resume} />
</div>

<style lang="postcss">
  .root {
    @apply flex justify-center;
  }
</style>
