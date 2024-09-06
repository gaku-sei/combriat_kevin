<script lang="ts">
  import type { Skill } from "../types";

  type Props = { skills: Skill[] };

  let { skills }: Props = $props();
</script>

<div class="skills">
  <div class="skills-label">Skills & Expertise</div>
  <div class="skills-content">
    <ul class="skills-list">
      {#each skills as { name, keywords } (name)}
        <li>
          <span class="skills-entry-label">{name}</span>: {#each keywords as keyword, i (keyword)}{#if i !== 0},&nbsp;
            {/if}{@html keyword}
          {/each}
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="postcss">
  .skills {
    @apply w-full pt-12 break-inside-avoid;
  }

  .skills-label {
    @apply font-semibold text-2xl px-8;
  }

  .skills-content {
    @apply pt-8 px-8;
  }

  .skills-list {
    @apply list-disc list-inside;
  }

  .skills-entry-label {
    @apply text-lg font-semibold;
  }
</style>
