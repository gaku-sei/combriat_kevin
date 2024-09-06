<script lang="ts">
  import type { PageData } from "./$types";
  import Resume from "../resume/components/Resume.svelte";

  type Props = { data: PageData };

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>Kévin Combriat's Résumé</title>
</svelte:head>

<div class="root">
  <Resume resume={data.resume} />
</div>

<style lang="postcss">
  .root {
    @apply flex justify-center bg-slate-900 text-slate-700;
  }
</style>
