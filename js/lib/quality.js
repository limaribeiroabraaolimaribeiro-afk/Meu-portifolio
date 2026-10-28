export const QUALITY = {
  high: { dpr: 1.6, blocks: 18, grid: 5, bevel: 3, fps: 60 },
  medium: { dpr: 1.25, blocks: 12, grid: 4, bevel: 2, fps: 60 },
  low: { dpr: 1, blocks: 8, grid: 3, bevel: 1, fps: 30 },
};
export function chooseQuality() {
  let stored = "auto";
  try {
    stored = localStorage.getItem("portfolio-quality") || "auto";
  } catch {}
  if (QUALITY[stored]) return stored;
  const cores = navigator.hardwareConcurrency || 4,
    memory = navigator.deviceMemory || 4;
  return cores <= 2 || memory <= 2
    ? "low"
    : innerWidth < 900 || memory <= 4
      ? "medium"
      : "high";
}
