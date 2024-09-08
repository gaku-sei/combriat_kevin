<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import { formatDate } from "$lib/date";

  import type { Education } from "../types";

  type Props = { educations: Education[] };

  let { educations }: Props = $props();
</script>

<div class="educations">
  <div class="educations-label">Education</div>

  {#each educations as { institution, website, place, start_date, end_date, area } (institution)}
    <div class="educations-entry">
      <div class="educations-content">
        <div class="educations-institution">
          {#if website}
            <Link href={website}>{institution}</Link>
          {:else}
            {institution}
          {/if}
        </div>
        <div class="educations-institution-details">
          <div class="educations-place">
            {area}, {place}
          </div>
          <div class="educations-dates">
            {formatDate(new Date(start_date))} - {formatDate(
              new Date(end_date),
            )}
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>

<style lang="postcss">
  .educations {
    @apply w-full pt-12;
  }

  .educations-label {
    @apply font-semibold text-2xl px-8;
  }

  .educations-entry {
    @apply relative;
  }

  .educations-content {
    @apply px-8;
  }

  .educations-institution {
    @apply pt-8 font-semibold text-xl text-indigo-500;
  }

  .educations-institution-details {
    @apply flex flex-col justify-center font-semibold text-lg pt-4;
    @apply sm:flex-row sm:justify-between sm:items-center;
  }

  .educations-dates {
    @apply self-end shrink-0 text-sm;
    @apply sm:self-auto;
  }
</style>
