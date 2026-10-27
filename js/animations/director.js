import { gsap } from "gsap";
import { morphAt } from "../three/morph-targets.js";
const clamp = (v) => Math.max(0, Math.min(1, v));
export const CHAPTERS = [
  "inicio",
  "problema",
  "diagnostico",
  "transformacao",
  "solucoes",
  "projetos",
  "processo",
  "inteligencia",
  "sobre",
  "resultado",
  "contato",
];
export function createDirector() {
  const base = {
    cx: 4.5,
    cy: 3.3,
    cz: 8.4,
    tx: 0,
    ty: -0.1,
    tz: -0.1,
    actorX: 0,
    actorY: 0,
    actorZ: 0,
    yaw: 0.18,
    actorScale: 1,
    pose: 1,
    shape: 0,
    order: 0.52,
    props: 1,
    panel: 1,
    path: 1,
    wire: 0,
    network: 0,
    portal: 0,
    opacity: 1,
    screenX: 0.74,
    screenY: 0.52,
    mobileX: 0.49,
    mobileY: 0.76,
    mobileDistance: 1.4,
    light: 1.1,
    walk: 0,
    walkAmp: 0.25,
  };
  const states = {
    inicio: { ...base },
    problema: {
      ...base,
      cx: 3.4,
      cy: 2.6,
      cz: 8.8,
      actorX: -0.35,
      yaw: 0.25,
      order: 0,
      path: 0.2,
      mobileY: 0.69,
      mobileDistance: 1.35,
    },
    diagnostico: {
      ...base,
      cx: 2.4,
      cy: 2.2,
      cz: 8.8,
      yaw: 0.2,
      order: 0.25,
      props: 0.28,
      path: 0.15,
      wire: 1,
      pose: 0.1,
      mobileY: 0.76,
      mobileDistance: 1.55,
      light: 1.35,
      walkAmp: 0,
    },
    transformacao: {
      ...base,
      cx: 2.3,
      cy: 2.1,
      cz: 12,
      actorY: 0.4,
      props: 0.15,
      order: 0.7,
      path: 0.5,
      pose: 1,
      wire: 0,
      screenX: 0.73,
      screenY: 0.5,
      mobileY: 0.65,
      mobileDistance: 1.55,
      light: 1.2,
      walkAmp: 0,
    },
    solucoes: { ...base, opacity: 0, props: 0, walkAmp: 0 },
    projetos: { ...base, opacity: 0, props: 0, walkAmp: 0 },
    processo: {
      ...base,
      cx: 0,
      cy: 1.8,
      cz: 12,
      actorScale: 0.6,
      props: 0,
      path: 0,
      screenX: 0.14,
      screenY: 0.54,
      mobileX: 0.87,
      mobileY: 0.44,
      mobileDistance: 1.1,
      walkAmp: 1,
    },
    inteligencia: {
      ...base,
      cx: 3.2,
      cy: 3.6,
      cz: 11.5,
      actorScale: 0.62,
      pose: 0,
      props: 0,
      path: 0,
      network: 1,
      screenX: 0.74,
      screenY: 0.53,
      mobileY: 0.72,
      mobileDistance: 1.55,
      light: 1.25,
      walkAmp: 0,
    },
    sobre: { ...base, opacity: 0, props: 0, walkAmp: 0 },
    resultado: {
      ...base,
      cx: 4.5,
      cy: 4,
      cz: 10.2,
      order: 1,
      yaw: 0,
      path: 1,
      mobileY: 0.73,
      mobileDistance: 1.4,
      walkAmp: 0,
    },
    contato: {
      ...base,
      cx: 5.2,
      cy: 3.5,
      cz: 11,
      tx: 1,
      ty: 0.1,
      tz: -1,
      actorX: -0.4,
      actorZ: 0.2,
      order: 1,
      props: 0.3,
      path: 1,
      portal: 1,
      screenX: 0.77,
      mobileY: 0.73,
      mobileDistance: 1.5,
      light: 1.2,
      walkAmp: 0.6,
    },
  };
  for (const id of CHAPTERS) if (id !== "inicio") states[id].panel = 0;
  const state = { ...base },
    clock = { time: 0 },
    timeline = gsap.timeline({ paused: true }).to(clock, {
      time: CHAPTERS.length,
      duration: CHAPTERS.length,
      ease: "none",
    }),
    ease = gsap.parseEase("power2.inOut");
  function seek(id, progress) {
    const index = Math.max(0, CHAPTERS.indexOf(id)),
      requested = clamp(progress);
    timeline.time(index + requested, true);
    const p = clamp(clock.time - index);
    const current = states[CHAPTERS[index]],
      previous = { ...states[CHAPTERS[Math.max(0, index - 1)]] };
    if (CHAPTERS[index - 1] === "processo") {
      previous.screenX = 0.86;
      previous.mobileY = 0.79;
    }
    const duration =
      current.opacity === 0
        ? 0.08
        : CHAPTERS[index] === "transformacao"
          ? 0.1
          : 0.28;
    const w = index === 0 ? 1 : ease(clamp(p / duration));
    for (const key of Object.keys(current))
      state[key] = previous[key] + (current[key] - previous[key]) * w;
    state.shape = id === "transformacao" ? morphAt(p) : 0;
    if (id === "transformacao") {
      state.order = p;
      state.actorY = 0.4;
      state.yaw = -0.2 + p * 0.7;
      const ease = (x) => {
        const t = clamp(x);
        return t * t * (3 - 2 * t);
      };
      const boost =
        ease((state.shape - 2.2) / 0.6) * (1 - ease((state.shape - 3.6) / 0.4));
      state.cz = 12 + boost * 1.5;
      state.mobileDistance = 1.55 + boost * 0.25;
    }
    if (id === "problema") state.walk = p * Math.PI * 3;
    if (id === "inicio") state.walk = p * Math.PI * 2;
    if (id === "processo") {
      state.screenX = 0.14 + p * 0.72;
      state.mobileY = 0.44 + p * 0.35;
      state.walk = p * Math.PI * 16;
      state.opacity = 1;
    }
    if (id === "contato") {
      state.actorX = -0.4 + p * 2.6;
      state.actorZ = 0.2 - p * 2.7;
      state.walk = p * Math.PI * 5;
    }
    return state;
  }
  return {
    state,
    seek,
    dispose() {
      timeline.kill();
    },
  };
}
