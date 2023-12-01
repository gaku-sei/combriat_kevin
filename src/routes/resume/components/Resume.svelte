<script lang="ts">
  import type { Vertices } from "$lib/drawings";

  import type { Resume } from "../types";
  import Profile from "./Profile.svelte";
  import Works from "./Works.svelte";
  import Educations from "./Educations.svelte";
  import Skills from "./Skills.svelte";
  import Polygons from "./Polygons.svelte";
  import Languages from "./Languages.svelte";

  type Props = { resume: Resume };

  const pictureHeight = 240;

  let { resume } = $props<Props>();

  const lastPolygons = (size: number) => [
    {
      opacity: 0.4,
      vertices: [
        [0, size],
        [0, size * 0.5],
        [size * 0.7, 0],
        [size, size * 0.2],
        [size, size],
      ] satisfies Vertices,
    },
  ];
</script>

<div class="resume">
  <Profile {pictureHeight} profile={resume.basics} />
  <Works works={resume.works} />
  <Educations educations={resume.educations} />
  <Skills skills={resume.skills} />
  <Languages languages={resume.languages} />
  <div class="final-polygons">
    <Polygons polygons={lastPolygons} />
  </div>
</div>

<style lang="postcss">
  .resume {
    @apply relative flex flex-col w-full max-w-[880px] print:w-full bg-slate-100 print:bg-white pb-24 print:pb-0 break-words;
  }

  .final-polygons {
    @apply absolute right-0 bottom-0 w-80 h-72 pointer-events-none print:hidden;
  }
</style>
