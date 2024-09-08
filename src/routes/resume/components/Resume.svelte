<script lang="ts">
  import type { Resume } from "../types";
  import Profile from "./Profile.svelte";
  import Works from "./Works.svelte";
  import Educations from "./Educations.svelte";
  import Skills from "./Skills.svelte";
  import Languages from "./Languages.svelte";

  type Props = { resume: Resume };

  let { resume }: Props = $props();
</script>

<div class="resume">
  <div class="profile">
    <Profile profile={resume.basics} />
  </div>
  <div class="experience">
    <Works works={resume.works} />
    <Educations educations={resume.educations} />
    <Skills skills={resume.skills} />
    <Languages languages={resume.languages} />
  </div>
</div>

<style lang="postcss">
  .resume {
    @apply relative flex flex-col w-full max-w-[880px] break-words;
    @apply sm:flex-row;
    @apply print:w-full;
  }

  .profile {
    @apply w-full shrink-0 overflow-auto pb-0;
    @apply sm:w-[280px];
  }

  .experience {
    @apply pb-24;
    @apply sm:pb-12;
  }
</style>
