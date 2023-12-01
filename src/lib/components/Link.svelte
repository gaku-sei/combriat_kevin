<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
    href: string;
  };

  let { children, href } = $props<Props>();

  const external = $derived(
    href.startsWith("http://") || href.startsWith("https://"),
  );
</script>

<a
  class="link"
  {href}
  target={external ? "_blank" : null}
  rel={external ? "noopener noreferrer" : null}
>
  {@render children()}
</a>

<style lang="postcss">
  .link {
    @apply text-indigo-400 font-semibold underline;
  }

  .link:hover {
    @apply text-indigo-300;
  }

  .link:visited {
    @apply text-indigo-800;
  }
</style>
