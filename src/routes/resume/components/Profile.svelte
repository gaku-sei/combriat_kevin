<script lang="ts">
  import portrait from "$lib/assets/portrait.png";
  import Link from "$lib/components/Link.svelte";
  import { verticesToPolygonPoints } from "$lib/drawings";

  import type { Profile } from "../types";

  type Props = {
    profile: Profile;
  };

  let { profile }: Props = $props();
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
  <div class="portrait-img-wrapper">
    {#if pictureMaskUrl}
      <img
        class="portrait-img"
        src={portrait}
        alt="Kévin Combriat's Portrait"
        style:--mask-image={pictureMaskUrl}
      />
    {/if}
  </div>
  <div class="profile-content">
    <div class="profile-name">
      {profile.first_name}{" "}{profile.last_name}
    </div>

    <div class="profile-position">
      {profile.position}
    </div>

    {#if profile.about.length > 0}
      <div class="profile-about">
        {#each profile.about as about}
          <div class="profile-about-entry">
            <em>{@html about}</em>
          </div>
        {/each}
      </div>
    {/if}

    <div class="profile-contacts">
      <div class="profile-contacts-title">Contacts</div>
      <ul class="profile-contacts-content">
        <li>
          <span class="profile-contacts-address">
            {profile.location.city} - {profile.location.country}
          </span>
        </li>
        <li>
          <Link href="mailto:{profile.email}">
            {profile.email}
          </Link>
        </li>
        <li>
          <span
            >{#each profile.profiles as { network, url }, i (network)}{#if i !== 0}&nbsp;-&nbsp;{/if}<Link
                href={url}>{network}</Link
              >
            {/each}
          </span>
        </li>
      </ul>
    </div>

    {#if profile.skills && profile.skills.length > 0}
      <div class="profile-skills">
        <div class="profile-skills-title">Skills</div>
        <ul class="profile-skills-content">
          {#each profile.skills as { name, duration } (name)}
            <li>
              <span class="profile-skills-content-name">{name}</span> - {duration}
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</div>

<style lang="postcss">
  .profile {
    @apply w-full flex flex-col pb-8 bg-indigo-100;
    @apply sm:pb-0 sm:bg-transparent;
  }

  .portrait-img-wrapper {
    @apply w-full aspect-video isolate relative;
  }

  .portrait-img {
    @apply w-full object-scale-down aspect-video bg-slate-900;

    mask-image: var(--mask-image);
    -webkit-mask-image: var(--mask-image);
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-position: center;
    mask-size: 100% 100%;
    -webkit-mask-size: 100% 100%;
  }

  .profile-content {
    @apply w-full px-6 flex flex-col;
    @apply sm:px-2;
    @apply print:px-6;
  }

  .profile-name {
    @apply w-full pt-12 text-center text-4xl font-semibold;
    @apply sm:pt-4 sm:text-left sm:font-bold;
    @apply print:pt-6;
  }

  .profile-position {
    @apply w-full pt-2 text-center text-2xl text-indigo-500;
    @apply sm:text-left sm:text-xl;
  }

  .profile-about {
    @apply w-full pt-8 px-2 text-xl font-semibold text-justify;
    @apply sm:px-0 sm:text-base;
  }

  .profile-about-entry {
    @apply w-full indent-8;
    @apply sm:px-0;
  }

  .profile-contacts {
    @apply pt-12;
    @apply sm:pt-8;
  }

  .profile-contacts-title {
    @apply text-3xl;
  }

  .profile-contacts-content {
    @apply list-disc list-inside text-xl;
    @apply sm:text-sm;
  }

  .profile-contacts-address {
    @apply text-indigo-500;
  }

  .profile-skills {
    @apply pt-12;
    @apply sm:pt-8;
  }

  .profile-skills-title {
    @apply text-3xl;
  }

  .profile-skills-content {
    @apply list-disc list-inside text-xl;
    @apply sm:text-sm;
  }

  .profile-skills-content-name {
    @apply font-semibold text-indigo-800;
  }
</style>
