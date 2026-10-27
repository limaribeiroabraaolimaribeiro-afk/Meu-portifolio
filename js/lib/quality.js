export const QUALITY = {
  high: { dpr: 1.6, blocks: 34, bevel: 3, fps: 60 },
  medium: { dpr: 1.25, blocks: 24, bevel: 2, fps: 60 },
  low: { dpr: 1, blocks: 16, bevel: 1, fps: 30 },
};
export function chooseQuality() {
  let stored = "auto";
  try {
    stored = localStorage.getItem("portfolio-quality") || "auto";
  } catch {}
  if (QUALITY[stored]) return stored;
  const cores = navigator.hardwareConcurrency || 4,
    memory = navigator.deviceMemory || 4;
  return memory <= 2 || cores <= 2
    ? "low"
    : innerWidth < 900 || memory <= 4
      ? "medium"
      : "high";
}
