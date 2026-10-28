const clamp = value => Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));

export function solutionsState(progress, count = 6) {
  const p = clamp(progress), total = Math.max(1, Math.floor(count) || 1);
  const index = Math.min(total - 1, Math.floor(p * total));
  const local = p === 1 ? 1 : p * total - index;
  return {
    index, local, beat: local < .26 ? 0 : local < .53 ? 1 : 2,
    builds: [-.1, .26, .53].map(start => {
      const t = clamp((local - start) / .18);
      return t * t * (3 - 2 * t);
    }),
  };
}
