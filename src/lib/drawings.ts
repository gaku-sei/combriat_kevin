export type Vec2 = [x: number, y: number];

export type Vertices = Vec2[];

export function verticesToPolygonPoints(vertices: Vertices) {
  return vertices.map(([x, y]) => `${x},${y}`).join(" ");
}
