import { gsap } from "gsap";
/* A paused timeline is scrubbed by native scroll. Holds make each idea readable;
   camera, object, gate, route and light share one time source. */
export function createDirector(markers) {
  const base = {
    cx: 6,
    cy: 5.4,
    cz: 10.8,
    tx: 0,
    ty: 0,
    tz: -1,
    cubeX: 0,
    cubeY: 0.5,
    cubeZ: 0,
    rx: 0.2,
    ry: -0.5,
    rz: 0.1,
    order: 0,
    gate: 0,
    bridge: 0,
    screen: 0,
    screenTurn: -0.22,
    screenScale: 0.7,
    world: 1,
    light: 1,
    about: 0,
    frameY: -0.2,
  };
  const states = markers.map((m, i) => {
    const s = { ...base };
    switch (m.id) {
      case "inicio":
        break;
      case "solucao":
        Object.assign(s, {
          cx: 4.7,
          cy: 4.2,
          cz: 9.5,
          cubeX: -1.4,
          cubeZ: -0.8,
          ry: 0.4,
          gate: 1,
          light: 1.15,
        });
        break;
      case "problema":
        Object.assign(s, {
          cx: 4.5,
          cy: 3.6,
          cz: 9.4,
          cubeX: 0,
          cubeZ: 0,
          gate: 1,
          ry: 0,
          light: 0.7,
        });
        break;
      case "diagnostico":
        Object.assign(s, {
          cx: 2.6,
          cy: 2.7,
          cz: 7.2,
          cubeX: 0,
          cubeY: 0.25,
          cubeZ: 0,
          gate: 1,
          ry: 0.15,
          light: 0.9,
        });
        break;
      case "entender":
        Object.assign(s, {
          cx: 2,
          cy: 2.6,
          cz: 7.6,
          cubeX: 0,
          cubeY: 0.2,
          cubeZ: -0.4,
          gate: 0.5,
          order: 0.25,
          ry: 0,
          light: 1.25,
        });
        break;
      case "transformacao":
        Object.assign(s, {
          cx: 5,
          cy: 6.2,
          cz: 10.2,
          cubeX: 0,
          cubeY: 0.25,
          cubeZ: -2,
          gate: 0,
          order: 0.8,
          bridge: 1,
          ry: 0,
          light: 1.25,
        });
        break;
      case "projetos":
        Object.assign(s, {
          order: 1,
          bridge: 1,
          cx: 5.5,
          cy: 5.2,
          cz: 10.7,
          cubeY: 0.25,
          cubeZ: -2,
          ry: 0,
        });
        break;
      case "inteligencia":
        Object.assign(s, {
          order: 1,
          bridge: 1,
          cx: 2.7,
          cy: 6,
          cz: 10,
          cubeX: 0,
          cubeY: 0.2,
          cubeZ: -2,
          ry: 0,
          light: 1.35,
        });
        break;
      case "sobre":
        Object.assign(s, { world: 0, about: 1 });
        break;
      case "resolvido":
        Object.assign(s, {
          order: 1,
          bridge: 1,
          cx: 4.5,
          cy: 6.5,
          cz: 11,
          cubeY: 0.25,
          cubeZ: 0,
          ry: 0,
          rx: 0,
          rz: 0,
        });
        break;
      case "evoluindo":
        Object.assign(s, {
          order: 1,
          bridge: 1,
          cx: 4.8,
          cy: 5.9,
          cz: 10.5,
          cubeY: 0.25,
          cubeZ: 0,
          ry: 0,
          rx: 0,
          rz: 0,
        });
        break;
      case "contato":
        Object.assign(s, {
          order: 1,
          bridge: 1,
          cx: 4.4,
          cy: 6.2,
          cz: 11.4,
          cubeY: 0.25,
          cubeZ: 0,
          ry: 0,
          rx: 0,
          rz: 0,
          light: 0.85,
        });
        break;
      default:
        if (m.id.startsWith("case-")) {
          const p = Number(m.id.split("-").at(-1)),
            smart = m.id.startsWith("case-smart");
          Object.assign(s, {
            cx: 0.25 + (3 - p) * 0.2,
            cy: 2.6,
            cz: 9.5 - p * 0.22,
            tx: 0,
            ty: 1.85,
            tz: 0,
            cubeX: smart ? -2.3 + p * 1.5 : 0,
            cubeY: smart ? -0.25 : 0.4,
            cubeZ: 1,
            ry: smart ? 0 : 0.35,
            rx: 0,
            rz: 0,
            gate: 0,
            order: smart ? p / 3 : 1,
            bridge: smart ? p / 3 : 0,
            screen: p === 0 ? 0.82 : 1,
            screenTurn: [-0.25, -0.12, 0.02, 0.08][p],
            screenScale: [0.68, 0.9, 1, 1.05][p],
            world: smart ? 0.23 : 0.1,
            light: 1,
            frameY: 0.2,
          });
        }
    }
    return s;
  });
  const state = { ...states[0] };
  const clock = { time: 0 };
  const timeline = gsap.timeline({ paused: true });
  timeline.to(clock, {
    time: states.length,
    duration: states.length,
    ease: "none",
  });
  const ease = gsap.parseEase("power2.inOut");
  return {
    state,
    seek(time) {
      timeline.time(Math.max(0, Math.min(states.length - 0.001, time)), true);
      const index = Math.min(states.length - 1, Math.floor(clock.time));
      const current = states[index],
        previous = states[Math.max(0, index - 1)];
      const duration =
        current.about > 0 ? 0.16 : current.screen > 0 ? 0.3 : 0.48;
      const weight =
        index === 0 ? 1 : ease(Math.min(1, (clock.time - index) / duration));
      for (const key of Object.keys(current))
        state[key] = previous[key] + (current[key] - previous[key]) * weight;
    },
    dispose() {
      timeline.kill();
    },
  };
}
