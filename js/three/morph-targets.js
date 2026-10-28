/* Reproducible formations. No random particle emitter: every cell has a role. */
const TAU = Math.PI * 2,
  clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export function createMorphTargets(n) {
  const count = n * n * n,
    grid = [],
    chaos = [],
    cloud = [],
    sphere = [],
    structure = [];
  const slots = [],
    seen = new Set();
  const add = (x, y, z) => {
    const k = [x, y, z].join(":");
    if (!seen.has(k)) {
      seen.add(k);
      slots.push([x, y, z]);
    }
  };
  for (let x = -5; x <= 5; x++)
    for (let z = -2; z <= 2; z++) add(x * 0.4, 0.9, z * 0.4);
  for (const x of [-1.6, 1.6])
    for (const z of [-0.4, 0.4])
      for (let y = -3; y <= 1; y++) add(x, y * 0.4, z);
  for (const x of [-2.4, 2.4])
    for (let y = -2; y <= 3; y++)
      for (const z of [-0.8, 0, 0.8]) add(x, y * 0.4, z);
  for (const x of [-2.8, 2.8])
    for (let y = -2; y <= 1; y++)
      for (const z of [-0.4, 0.4]) add(x, y * 0.4, z);
  for (let i = 0; i < count; i++) {
    const x = i % n,
      y = Math.floor(i / n) % n,
      z = Math.floor(i / (n * n));
    const g = [
      ((x - (n - 1) / 2) * 1.65) / n,
      ((y - (n - 1) / 2) * 1.65) / n,
      ((z - (n - 1) / 2) * 1.65) / n,
    ];
    grid.push(g);
    const a = i * 2.399963229728653,
      r = 1.25 + (((i * 37) % 17) / 17) * 0.95;
    chaos.push([
      Math.cos(a) * r,
      Math.sin(i * 1.7) * 1.45,
      Math.sin(a) * r * 0.75,
    ]);
    cloud.push([
      Math.cos(a) * 1.75,
      Math.sin(i * 1.7) * 1.15,
      Math.sin(a) * 1.3,
    ]);
    const sy = 1 - ((i + 0.5) / count) * 2,
      sr = Math.sqrt(1 - sy * sy);
    sphere.push([Math.cos(a) * sr * 1.6, sy * 1.6, Math.sin(a) * sr * 1.6]);
    structure.push(slots[Math.round((i / (count - 1)) * (slots.length - 1))]);
  }
  return {
    count,
    n,
    formations: [grid, chaos, cloud, sphere, structure, grid],
  };
}
export function shapeSegment(shape) {
  const stops = [0, 1, 1.15, 2, 3, 4];
  let i = 0;
  while (i < stops.length - 2 && shape > stops[i + 1]) i++;
  return {
    from: i,
    to: i + 1,
    weight: clamp((shape - stops[i]) / (stops[i + 1] - stops[i])),
  };
}
export function fractureAt(shape) {
  if (shape <= 0 || shape >= 4) return 0;
  const up = clamp(shape / 0.3),
    down = 1 - clamp((shape - 3.72) / 0.28);
  return Math.min(up, down);
}
export function morphAt(progress) {
  const p = clamp(progress) * 5,
    index = Math.min(4, Math.floor(p)),
    fraction = clamp((p - index) / 0.38),
    ease = fraction * fraction * (3 - 2 * fraction),
    steps = [0, 1, 1.15, 2, 3, 4];
  return steps[index] + (steps[index + 1] - steps[index]) * ease;
}
