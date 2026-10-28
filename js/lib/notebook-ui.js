import { notebookState } from "../three/notebook-state.js";

export function initNotebookCases(isReduced, onLayout) {
  const section = document.getElementById("projetos"), pin = section.querySelector(".section-pin"), stage = section.querySelector("[data-notebook-stage]");
  const captions = [...stage.querySelectorAll("[data-notebook-caption]")], buttons = [...stage.querySelectorAll("[data-notebook-case]")];
  const shot = stage.querySelector(".notebook-shot");
  let queued = false, previous = "";
  function update() {
    queued = false;
    const r = section.getBoundingClientRect(), intro = section.querySelector(".cinematic-intro").offsetHeight;
    const p = Math.max(0, Math.min(1, (-r.top - intro) / Math.max(1, section.offsetHeight - intro - pin.offsetHeight)));
    const state = notebookState(p, captions.length), key = `${state.index}:${state.phase}`;
    stage.style.setProperty("--notebook-progress", p.toFixed(4));
    if (key !== previous) {
      captions.forEach((el,i) => {
        el.hidden = i !== state.index;
        el.querySelectorAll("[data-notebook-beat]").forEach((beat,j) => beat.hidden = j !== state.phase);
      });
      buttons.forEach((el,i) => el.setAttribute("aria-current", String(i === state.index)));
      shot.textContent = `CENA 0${state.index + 1} / 0${captions.length}`;
      stage.dataset.caseIndex = state.index;
      stage.dataset.casePhase = state.phase;
      stage.querySelector('.notebook-coordinate').textContent=captions[state.index].dataset.projectKind==='nexa'?'APRESENTAÇÃO VISUAL FORNECIDA':captions[state.index].dataset.projectKind==='smart'?'INTERFACE DEMONSTRATIVA · SEM DADOS DE CLIENTES':'INTERFACE REAL DO PROJETO';
      previous = key;
    }
  }
  const request = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  buttons.forEach((button,i) => button.addEventListener("click", () => {
    if (isReduced()) {
      const detail = document.getElementById(`case-${captions[i].dataset.projectKind}`);
      detail.open = true; detail.scrollIntoView({ block:"start" }); return;
    }
    const intro = section.querySelector(".cinematic-intro").offsetHeight;
    const p = .055 + (i + .73) / captions.length * .91;
    scrollTo({ top:scrollY+section.getBoundingClientRect().top+intro+(section.offsetHeight-intro-pin.offsetHeight)*p, behavior:"smooth" });
  }));
  stage.querySelectorAll(".notebook-case-link").forEach(link => link.addEventListener("click", () => {
    const detail=document.querySelector(link.getAttribute("href")); if(detail) detail.open=true;
  }));
  section.nextElementSibling.querySelectorAll("details").forEach(el => el.addEventListener("toggle",onLayout));
  addEventListener("scroll",request,{passive:true}); addEventListener("resize",request,{passive:true});
  document.fonts.ready.then(request);
  const observer=new ResizeObserver(request);observer.observe(section);
  addEventListener("pagehide",e=>{if(!e.persisted){observer.disconnect();removeEventListener("scroll",request);removeEventListener("resize",request);}});
  update();
}
