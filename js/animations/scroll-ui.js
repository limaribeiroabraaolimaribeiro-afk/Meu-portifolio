import { createScrollState, clamp } from "../lib/scroll-state.js";
const CAPTIONS = [
  "Encontrar o que precisa ser resolvido.",
  "Separar as partes para enxergar o todo.",
  "Encontrar um padrão no que estava disperso.",
  "Conectar as partes em um caminho possível.",
  "Uma solução organizada. Pronta para evoluir.",
];
const LABELS = [
  "DO PROBLEMA À SOLUÇÃO",
  "O PROBLEMA",
  "DIAGNÓSTICO",
  "TRANSFORMAÇÃO",
  "SOLUÇÕES DIGITAIS",
  "PROJETOS REAIS",
  "COMO FUNCIONA",
  "INTELIGÊNCIA COM PROPÓSITO",
  "POR TRÁS DA SOLUÇÃO",
  "PROBLEMA RESOLVIDO",
  "UM NOVO CAMINHO",
];
export function initScrollUI(root, isReduced) {
  const scroll = createScrollState(),
    meter = document.querySelector(".scroll-meter span"),
    header = document.getElementById("header"),
    caption = document.querySelector(".chapter-label"),
    number = document.querySelector(".scene-number"),
    morphButtons = [...document.querySelectorAll("[data-morph-stage]")],
    morphCaption = document.querySelector(".morph-caption"),
    morphIndex = document.querySelector(".morph-index");
  let queued = false;
  function morphUI(index) {
    morphButtons.forEach((button, i) => {
      button.parentElement.classList.toggle("is-active", i === index);
      button.setAttribute("aria-current", i === index ? "step" : "false");
    });
    morphCaption.textContent = CAPTIONS[index];
    morphIndex.textContent = `0${index + 1} — 05`;
    root.dataset.morphStage = String(index);
  }
  function update() {
    queued = false;
    const { index, marker, progress } = scroll.at();
    root.dataset.chapter = marker.id;
    root.dataset.chapterProgress = String(progress);
    root.dataset.sceneTheme = marker.el.dataset.theme || "light";
    root.dataset.filmVisible = String(
      scrollY < scroll.markers.at(-1).top + scroll.markers.at(-1).height,
    );
    meter.style.transform = `scaleX(${clamp(scrollY / Math.max(1, root.scrollHeight - innerHeight))})`;
    header.classList.toggle("is-scrolled", scrollY > 35);
    caption.textContent = LABELS[index];
    number.textContent = `${String(index + 1).padStart(2, "0")} / 11`;
    if (marker.id === "transformacao")
      morphUI(Math.min(4, Math.floor(progress * 5)));
    if (marker.id === "processo") {
      const nodes = [...document.querySelectorAll(".process-node")],
        first = nodes[0].getBoundingClientRect(),
        last = nodes.at(-1).getBoundingClientRect(),
        t = clamp((progress - 0.1) / 0.8);
      root.dataset.processScreenX = String(
        (first.x + first.width / 2 + (last.x - first.x) * t) / innerWidth,
      );
      root.dataset.processScreenY = String(
        (first.y + first.height / 2 + (last.y - first.y) * t) / innerHeight -
          (innerWidth <= 700 ? 0.075 : 0.11),
      );
      root.style.setProperty("--process-progress", String(progress));
      document.querySelectorAll(".process-timeline li").forEach((el, i) => {
        const active = Math.min(4, Math.floor(progress * 5));
        el.classList.toggle("is-active", i === active);
        el.classList.toggle("is-complete", i < active);
      });
    }
    if (marker.id === "diagnostico")
      document
        .querySelectorAll(".diagnosis-steps li")
        .forEach((el, i) =>
          el.classList.toggle(
            "is-active",
            i === Math.min(3, Math.floor(progress * 4)),
          ),
        );
  }
  function request() {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  }
  function measure() {
    scroll.measure();
    request();
  }
  addEventListener("scroll", request, { passive: true });
  addEventListener("resize", measure, { passive: true });
  document.fonts.ready.then(measure);
  document
    .querySelectorAll("img")
    .forEach((img) => img.addEventListener("load", measure));
  const observer = new ResizeObserver(measure);
  observer.observe(document.querySelector("main"));
  document
    .querySelectorAll("details")
    .forEach((el) => el.addEventListener("toggle", measure));
  morphButtons.forEach((button) =>
    button.addEventListener("click", () => {
      const index = +button.dataset.morphStage;
      if (isReduced()) {
        morphUI(index);
        return;
      }
      const marker = scroll.markers.find((m) => m.id === "transformacao");
      scrollTo({
        top:
          marker.top +
          ((index + 0.5) / 5) * Math.max(1, marker.height - innerHeight),
        behavior: "smooth",
      });
    }),
  );
  document.querySelectorAll("[data-filter]").forEach((button) =>
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((el) => {
        el.classList.toggle("active", el === button);
        el.setAttribute("aria-pressed", String(el === button));
      });
      document
        .querySelectorAll(".archive-row")
        .forEach(
          (el) =>
            (el.hidden =
              button.dataset.filter !== "all" &&
              button.dataset.filter !== el.dataset.category),
        );
      measure();
    }),
  );
  morphUI(0);
  update();
  return {
    measure,
    dispose() {
      observer.disconnect();
    },
  };
}
