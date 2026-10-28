const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
export const ease = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * t * (t * (t * 6 - 15) + 10); };

// A reversible score, measured in four shots. No timers or accumulated transforms.
export function notebookState(progress, count = 4) {
  const p = clamp(Number.isFinite(progress) ? progress : 0);
  const time = clamp((p - .055) / .91, 0, 1) * count;
  const index = Math.min(count - 1, Math.floor(time));
  const local = time - index;
  return {
    p, time, index, local,
    dock: ease(.19, .64, local),
    cameraDock: ease(.19, .64, local) * (1-ease(.87,1,local)),
    phase: local < .24 ? 0 : local < .70 ? 1 : 2,
    entrance: ease(0, .075, p),
    finish: ease(.95, 1, p),
    pulse: Math.sin(Math.PI * ease(.48, .76, local)),
  };
}

export function notebookPanelPose(time, index) {
  const t = time - index;
  const queue = Math.max(0, -t), reveal = ease(0, .19, t), dock = ease(.19, .64, t);
  const angle=queue*1.75;
  const start = [1.35*Math.cos(angle)-1.50*Math.sin(angle), 3.10+Math.sin(queue*1.20)*.65+queue*.05, -1.25-queue*.65];
  const hero = [-.10, 3.12, 1.35];
  return {
    t, dock, visible: t < .64,
    position: start.map((v, k) => v + (hero[k] - v) * reveal),
    scale: (.79 / (1 + queue * .12)) + (1 - .79 / (1 + queue * .12)) * reveal,
    yaw: (-.24 - queue * .08) * (1 - reveal) + .09 * reveal,
    roll: (.055 + queue * .025) * (1 - reveal),
  };
}
