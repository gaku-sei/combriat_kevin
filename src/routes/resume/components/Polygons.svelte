<script lang="ts">
  import { verticesToPolygonPoints, type Vertices } from "$lib/drawings";

  type Props = {
    polygons: (size: number) => { opacity?: number; vertices: Vertices }[];
  };

  let { polygons: polygonsBuilder }: Props = $props();

  const size = 100;
  const polygons = $derived(polygonsBuilder(size));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="100%"
  height="100%"
  viewBox="0 0 {size} {size}"
  preserveAspectRatio="none"
>
  {#each polygons as { opacity = 1, vertices }}
    <polygon
      fill="rgb(224 231 255)"
      {opacity}
      points={verticesToPolygonPoints(vertices)}
    />
  {/each}
</svg>
