import { solutionsState } from "./solutions-state.js";

export function initSolutions(isReduced, onLayout) {
  const section = document.getElementById("solucoes");
  if (!section) return;
  const track = section.querySelector(".ss-track"), pin = section.querySelector(".ss-pin");
  const scenes = [...section.querySelectorAll("[data-solution-scene]")];
  const nav = [...section.querySelectorAll("[data-nav]")];
  const builds = scenes.map(scene => [...scene.querySelectorAll("[data-build]")]);
  const beats = scenes.map(scene => [...scene.querySelectorAll(".ss-beats li")]);
  const counter = section.querySelector("#ss-counter"), progressLabel = section.querySelector("#ss-progress");
  const instruction = section.querySelector("#ss-instruction"), tall = matchMedia("(min-height:620px)");
  let enhanced = false, queued = false, top = 0, distance = 1, previous = -1;

  function update() {
    queued = false;
    if (!enhanced) return;
    const progress = Math.max(0, Math.min(1, (scrollY - top) / distance));
    const state = solutionsState(progress, scenes.length);
    if (previous !== state.index) {
      scenes.forEach((scene,i) => { scene.hidden = i !== state.index; scene.inert = i !== state.index; });
      nav.forEach((link,i) => {
        if (i === state.index) link.setAttribute("aria-current", "step");
        else link.removeAttribute("aria-current");
      });
      counter.textContent = `0${state.index + 1} / 06`;
      progressLabel.textContent = `0${state.index + 1} — 06`;
      section.dataset.solutionIndex = state.index;
      previous = state.index;
    }
    instruction.textContent = state.index === scenes.length - 1 && state.local > .75
      ? "CONTINUE PARA VER OS PROJETOS ↓" : "ROLE PARA MONTAR A SOLUÇÃO";
    builds[state.index].forEach((el,i) => {
      const amount = state.builds[i];
      el.style.opacity = amount.toFixed(4);
      el.style.transform = `translate(0,${(1 - amount) * (18 + i * 12)}px)`;
      el.style.setProperty("--reveal", amount.toFixed(4));
    });
    beats[state.index].forEach((el,i) => {
      el.classList.toggle("ss-current", i === state.beat);
      el.classList.toggle("ss-complete", i < state.beat);
    });
    nav.forEach((el,i) => el.style.setProperty("--fill", i < state.index ? 1 : i === state.index ? state.local : 0));
    scenes[state.index].style.setProperty("--turn", `${-4 + state.local * 6}deg`);
  }

  function request() {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }

  function measure() {
    const next = !isReduced() && tall.matches;
    if (enhanced !== next) {
      enhanced = next;
      section.classList.toggle("is-enhanced", enhanced);
      previous = -1;
      if (!enhanced) {
        scenes.forEach(scene => { scene.hidden = false; scene.inert = false; });
        builds.flat().forEach(el => { el.style.opacity = ""; el.style.transform = ""; el.style.removeProperty("--reveal"); });
        nav.forEach(link => link.removeAttribute("aria-current"));
      }
      onLayout();
    }
    top = scrollY + track.getBoundingClientRect().top - 84;
    distance = Math.max(1, track.offsetHeight - pin.offsetHeight);
    request();
  }

  nav.forEach((link,i) => link.addEventListener("click", event => {
    if (!enhanced || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    scrollTo({top:top + distance * ((i + .76) / scenes.length), behavior:"smooth"});
  }));
  const fallback = () => requestAnimationFrame(measure);
  addEventListener("scroll",request,{passive:true});
  addEventListener("resize",measure,{passive:true});
  addEventListener("portfolio:graphics-fallback",fallback);
  tall.addEventListener("change",measure);
  const observer = new ResizeObserver(measure);
  observer.observe(document.querySelector("main"));
  document.fonts.ready.then(measure);
  addEventListener("pagehide",event => {
    if (event.persisted) return;
    observer.disconnect();
    removeEventListener("scroll",request);
    removeEventListener("resize",measure);
    removeEventListener("portfolio:graphics-fallback",fallback);
    tall.removeEventListener("change",measure);
  });
  measure();
}
