<script lang="ts">
  import portrait from "$lib/assets/portrait.jpg";
  import Link from "$lib/components/Link.svelte";
  import { verticesToPolygonPoints, type Vertices } from "$lib/drawings";

  import Polygons from "./Polygons.svelte";
  import type { Profile } from "../types";

  type Props = {
    pictureHeight: number;
    profile: Profile;
  };

  let { pictureHeight, profile } = $props<Props>();
  let pictureMask = $state<SVGElement>();

  const pictureMaskUrl = $derived(
    pictureMask
      ? `url('data:image/svg+xml;charset=utf-8,${pictureMask.outerHTML}')`
      : null,
  );

  const maskVertices = verticesToPolygonPoints([
    [0, 0],
    [100, 0],
    [100, 100 * 0.5],
    [100 * 0.35, 100],
    [0, 100 * 0.8],
    [0, 0],
  ]);

  const aboutPolygons = (size: number) => [
    {
      opacity: 0.3,
      vertices: [
        [size, size * 0.05],
        [size * 0.25, size * 0.04],
        [size * 0.05, size * 0.3],
        [size * 0.6, size * 0.99],
        [size, size],
      ] satisfies Vertices,
    },
    {
      opacity: 0.1,
      vertices: [
        [size, size * 0.04],
        [size * 0.23, size * 0.03],
        [size * 0.02, size * 0.29],
        [size * 0.57, size * 0.98],
        [size, size * 0.99],
      ] satisfies Vertices,
    },
  ];

  const skillsPolygons = (size: number) => [
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
</script>

<svg
  class="hidden"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
  bind:this={pictureMask}
>
  <polygon fill="black" points={maskVertices} />
</svg>

<div class="profile">
  <div>
    {#if pictureMaskUrl}
      <img
        class="portrait-img"
        src={portrait}
        alt="Kévin Combriat's Portrait"
        style:--height="{pictureHeight}px"
        style:--mask-image={pictureMaskUrl}
      />
    {/if}
  </div>
  <div class="profile-basics">
    <div>
      <span class="profile-basics-label">Email: </span>
      <Link href="mailto:{profile.email}">
        {profile.email}
      </Link>
    </div>
    <div>
      <span class="profile-basics-label">Address: </span>
      <span class="profile-basics-value">
        {profile.location.city} - {profile.location.country}
      </span>
    </div>
    <div>
      <span class="profile-basics-label">Profiles: </span>
      <span>
        {#each profile.profiles as { network, url }, i (network)}
          {#if i !== 0}
            &nbsp;-
          {/if}
          <Link href={url}>{network}</Link>
        {/each}
      </span>
    </div>
    <div class="profile-name">
      <div>{profile.first_name}</div>
      <div>{profile.last_name}</div>
    </div>
    <div class="profile-position">
      {profile.position}
    </div>
  </div>
</div>

<div class="profile-about">
  <div class="profile-about-polygons">
    <Polygons polygons={aboutPolygons} />
  </div>
  <div class="profile-about-label">Profile</div>
  <div class="profile-about-value">
    {@html profile.about}
  </div>
</div>

<div class="profile-skills">
  <div class="profile-skills-polygons">
    <Polygons polygons={skillsPolygons} />
  </div>

  <ul class="profile-key-skills-list">
    <li class="profile-key-skills">
      <span class="profile-key-skills-label">Key Skills: </span>
      {#each profile.key_skills as key_skill, i (key_skill)}
        {#if i !== 0}&nbsp;-{/if}
        <span class="profile-key-skills-value">{@html key_skill}</span>
      {/each}
    </li>

    <li class="profile-key-skills">
      <span class="profile-key-skills-label">Key Languages: </span>
      {#each profile.key_languages as key_language, i (key_language)}
        {#if i !== 0}&nbsp;-{/if}
        <span class="profile-key-skills-value">{@html key_language}</span>
      {/each}
    </li>

    <li class="profile-key-skills">
      <span class="profile-key-skills-label">Key Technologies: </span>
      {#each profile.key_technologies as key_technology, i (key_technology)}
        {#if i !== 0}&nbsp;-{/if}
        <span class="profile-key-skills-value">{@html key_technology}</span>
      {/each}
    </li>
  </ul>
</div>

<style lang="postcss">
  .profile {
    @apply flex flex-col md:flex-row justify-between;
  }

  .profile-basics {
    @apply max-w-[400px] pr-12 py-2 pl-8 md:pl-4 pt-8 md:pt-4;
  }

  .profile-basics-label {
    @apply font-semibold;
  }

  .profile-basics-value {
    @apply text-indigo-400;
  }

  .profile-name {
    @apply text-5xl font-semibold pt-8;
  }

  .profile-position {
    @apply text-2xl font-semibold text-indigo-400 pt-2;
  }

  .profile-about {
    @apply relative w-full pt-6 px-8 md:pl-64;
  }

  .profile-about-polygons {
    @apply hidden md:block absolute right-0 top-0 w-40 h-48 pointer-events-none;
  }

  .profile-about-label {
    @apply text-lg font-semibold;
  }

  .profile-about-value {
    @apply pt-2;
  }

  .profile-skills {
    @apply relative w-full px-8 pt-4 md:mt-16;
  }

  .profile-skills-polygons {
    @apply absolute left-0 top-0 w-44 h-56 pointer-events-none;
  }

  .profile-key-skills-list {
    @apply list-disc list-inside;
  }

  .profile-key-skills {
    @apply w-full;
  }

  .profile-key-skills:not(:first-child) {
    @apply pt-4;
  }

  .profile-key-skills-label {
    @apply text-lg font-semibold;
  }

  .profile-key-skills-value {
    @apply font-semibold underline underline-offset-4 text-indigo-800;
  }

  .portrait-img {
    @apply h-[var(--height)] object-cover aspect-video;

    mask-image: var(--mask-image);
    -webkit-mask-image: var(--mask-image);
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-position: center;
    mask-size: 100% 100%;
    -webkit-mask-size: 100% 100%;
  }
</style>
