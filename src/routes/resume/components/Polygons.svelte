<script lang="ts">
  import { verticesToPolygonPoints, type Vertices } from "$lib/drawings";

  type Props = {
    polygons: (size: number) => { opacity: number; vertices: Vertices }[];
  };

  let { polygons: polygonsBuilder } = $props<Props>();

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
  {#each polygons as { opacity, vertices }}
    <polygon
      fill="rgb(129 140 248)"
      {opacity}
      points={verticesToPolygonPoints(vertices)}
    />
  {/each}
</svg>
