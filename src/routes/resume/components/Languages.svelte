<script lang="ts">
  import type { Language } from "../types";

  type Props = { languages: Language[] };

  let { languages } = $props<Props>();
</script>

<div class="languages">
  <div class="languages-label">Languages</div>
  <div class="languages-content">
    <ul class="languages-list">
      {#each languages as { language, fluency } (language)}
        <li>
          <span class="languages-entry-label">{language}</span>: {fluency}
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="postcss">
  .languages {
    @apply w-full pt-12;
  }

  .languages-label {
    @apply font-semibold text-2xl px-8;
  }

  .languages-content {
    @apply pt-8 px-8;
  }

  .languages-list {
    @apply list-disc list-inside;
  }

  .languages-entry-label {
    @apply text-lg font-semibold;
  }
</style>
