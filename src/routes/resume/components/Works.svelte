<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import { formatDate } from "$lib/date";
  import type { Vertices } from "$lib/drawings";

  import type { Work } from "../types";
  import Polygons from "./Polygons.svelte";

  type Props = { works: Work[] };

  let { works } = $props<Props>();

  const polygonsLeft = (size: number) => [
    {
      opacity: 0.2,
      vertices: [
        [0, 0],
        [size * 0.72, 0],
        [size, size * 0.28],
        [size * 0.5, size],
        [0, size],
      ] satisfies Vertices,
    },
  ];
  const polygonsRight = (size: number) => [
    {
      opacity: 0.2,
      vertices: [
        [size, 0],
        [size * 0.28, 0],
        [0, size * 0.28],
        [size * 0.5, size],
        [size, size],
      ] satisfies Vertices,
    },
  ];
</script>

<div class="works">
  <div class="works-label">Professional Experience</div>

  {#each works as { position, company, industry, website, place, start_date, end_date, highlights, summary }, i (company)}
    {@const odd = i & 1}
    <div class="works-entry">
      <div class="works-polygons" class:works-polygons-left={odd}>
        {#if odd}
          <Polygons polygons={polygonsLeft} />
        {:else}
          <Polygons polygons={polygonsRight} />
        {/if}
      </div>
      <div class="works-content">
        <div class="works-position">
          {position}
        </div>
        <div class="works-position-details">
          <div class="works-company">
            {#if website}
              <Link href={website}>{company}</Link>, {place}
            {:else}
              {company}, {place}
            {/if}
            {#if industry}
              <span class="text-sm">({industry})</span>
            {/if}
          </div>
          <div class="works-dates">
            {formatDate(new Date(start_date))} - {formatDate(
              new Date(end_date),
            )}
          </div>
        </div>
        <ul class="works-highlights">
          {#each highlights as highlight}
            <li>{@html highlight}</li>
          {/each}
        </ul>
        <div class="works-summary">
          {@html summary}
        </div>
      </div>
    </div>
  {/each}
</div>

<style lang="postcss">
  .works {
    @apply w-full pt-12;
  }

  .works-label {
    @apply font-semibold text-2xl px-8;
  }

  .works-entry {
    @apply relative;
  }

  .works-polygons {
    @apply absolute right-0 top-28 w-40 h-44 pointer-events-none;
  }

  .works-polygons-left {
    @apply left-0;
  }

  .works-content {
    @apply px-8;
  }

  .works-position {
    @apply pt-8 font-semibold text-xl text-indigo-400;
  }

  .works-position-details {
    @apply flex flex-col md:flex-row justify-between font-semibold text-lg pt-4;
  }

  .works-dates {
    @apply self-end md:self-auto shrink-0;
  }

  .works-highlights {
    @apply list-disc list-inside pt-2;
  }

  .works-summary {
    @apply pt-2 indent-8;
  }
</style>
