<script lang="ts">
  import type { Resume } from "../types";
  import Profile from "./Profile.svelte";
  import Works from "./Works.svelte";
  import Educations from "./Educations.svelte";
  import Skills from "./Skills.svelte";
  import Languages from "./Languages.svelte";

  type Props = { resume: Resume };

  let { resume } = $props<Props>();
</script>

<div class="resume">
  <div class="profile">
    <Profile profile={resume.basics} />
  </div>
  <div class="experience">
    <div class="experience-header-wrapper">
      <div class="experience-header">
        <div class="experience-header-name">
          {resume.basics.first_name}{" "}{resume.basics.last_name}
        </div>
        <div class="experience-header-position">
          {resume.basics.position}
        </div>
      </div>
    </div>
    <Works works={resume.works} />
    <Educations educations={resume.educations} />
    <Skills skills={resume.skills} />
    <Languages languages={resume.languages} />
  </div>
</div>

<style lang="postcss">
  .resume {
    @apply relative flex flex-col sm:flex-row w-full max-w-[880px] print:w-full bg-slate-100 print:bg-white break-words h-full sm:h-screen print:h-full;
  }

  .profile {
    @apply w-full sm:w-[280px] bg-indigo-100 shrink-0 bg-opacity-70 overflow-auto sticky pb-0;
  }

  @media print {
    .profile {
      mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
    }
  }

  .experience {
    @apply pb-20 print:pb-0 overflow-auto;
  }

  .experience-header-wrapper {
    @apply hidden sm:flex w-full px-6 pt-2 pb-1 static sm:sticky print:static top-0 z-10 bg-slate-100 print:bg-white;
  }

  .experience-header {
    @apply flex flex-col items-center w-full py-2 bg-indigo-100 bg-opacity-70;
  }

  .experience-header-name {
    @apply w-full text-center text-5xl font-semibold;
  }

  .experience-header-position {
    @apply w-full pt-2 text-center text-2xl font-semibold text-indigo-400;
  }

  .final-polygons {
    @apply absolute right-0 bottom-0 w-80 h-72 pointer-events-none print:hidden;
  }
</style>
