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
      opacity: 0.7,
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
  {#each works as { position, company, industry, website, place, start_date, end_date, skills, context, highlights, summary }, i (company)}
    <div class="works-entry-wrapper">
      {@const odd = i & 1}
      <div class="works-entry" class:pt-8={i > 0}>
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
                <Link href={website}>{company}</Link>
              {:else}
                {company}
              {/if}
              <span class="works-company-details">
                {place}
                {#if industry}
                  <span class="text-sm">({industry})</span>
                {/if}
              </span>
            </div>
            <div class="works-dates">
              {formatDate(new Date(start_date))} - {end_date
                ? formatDate(new Date(end_date))
                : "Present"}
            </div>
          </div>
          {#if context}
            <div class="works-context">({context})</div>
          {/if}
          {#if skills && skills.length > 0}
            <div class="works-skills">
              <span class="works-skills-label">
                <em>Skills:</em>
              </span>
              {#each skills as skill, i}
                {#if i > 0}, {" "}
                {/if}<span class="works-skills-name">{@html skill}</span>
              {/each}
            </div>
          {/if}
          <ul class="works-highlights">
            {#each highlights as highlight}
              <li>{@html highlight}</li>
            {/each}
          </ul>
          {#if summary}
            <div class="works-summary">
              {@html summary}
            </div>
          {/if}
        </div>
      </div>
      {#if i + 1 < works.length}
        <div class="works-separator-wrapper">
          <hr class="works-separator" />
        </div>
      {/if}
    </div>
  {/each}
</div>

<style lang="postcss">
  .works {
    @apply w-full pt-6;
  }

  .works-label {
    @apply font-semibold text-2xl px-8 pb-8;
  }

  .works-entry-wrapper {
    @apply break-inside-avoid;
  }

  .works-separator-wrapper {
    @apply flex justify-center pt-8;
  }

  .works-separator {
    @apply h-0.5 w-4/5 bg-indigo-200 rounded;
  }

  .works-entry {
    @apply relative;
  }

  .works-polygons {
    @apply absolute right-0 top-8 w-40 h-44 pointer-events-none;
  }

  .works-polygons-left {
    @apply left-0;
  }

  .works-content {
    @apply relative px-8;
  }

  .works-company-details {
    @apply text-sm;
  }

  .works-position {
    @apply font-semibold text-xl text-indigo-400;
  }

  .works-position-details {
    @apply flex flex-col sm:flex-row justify-center sm:justify-between sm:items-center font-semibold text-lg pt-4 gap-2;
  }

  .works-dates {
    @apply self-end sm:self-auto shrink-0 text-sm;
  }

  .works-context {
    @apply italic text-sm;
  }

  .works-skills {
    @apply px-6 py-4 text-center;
  }

  .works-skills-label {
    @apply text-base;
  }

  .works-skills-name {
    @apply text-indigo-800 text-base;
  }

  .works-highlights {
    @apply list-disc list-inside pt-2;
  }

  .works-summary {
    @apply pt-2 indent-8;
  }
</style>
