export function initCases(isReduced, onLayout) {
  document.querySelectorAll(".case-card").forEach((card) => {
    const tabs = [...card.querySelectorAll("[role=tab]")];
    function select(index, focus = false) {
      tabs.forEach((tab, i) => {
        const active = i === index;
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
        document.getElementById(tab.getAttribute("aria-controls")).hidden =
          !active;
      });
      if (focus) tabs[index].focus({ preventScroll: true });
      onLayout();
    }
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => select(index));
      tab.addEventListener("keydown", (e) => {
        let next = index;
        if (e.key === "ArrowRight") next = (index + 1) % tabs.length;
        else if (e.key === "ArrowLeft")
          next = (index + tabs.length - 1) % tabs.length;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = tabs.length - 1;
        else return;
        e.preventDefault();
        select(next, true);
      });
    });
  });
  const track = document.getElementById("caseTrack"),
    cards = [...track.querySelectorAll(".case-card")],
    counter = document.getElementById("caseCounter"),
    controls = [...document.querySelectorAll("[data-case-direction]")];
  let current = 0,
    queued = false;
  function update() {
    queued = false;
    if (innerWidth > 700) {
      counter.textContent = "04 PROJETOS";
      return;
    }
    const left = track.scrollLeft,
      step = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : 1;
    current = Math.max(
      0,
      Math.min(cards.length - 1, Math.round(left / Math.max(1, step))),
    );
    counter.textContent = `${String(current + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
    controls.forEach(
      (btn) =>
        (btn.disabled =
          (+btn.dataset.caseDirection < 0 && current === 0) ||
          (+btn.dataset.caseDirection > 0 && current === cards.length - 1)),
    );
  }
  track.addEventListener(
    "scroll",
    () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  addEventListener("resize", update, { passive: true });
  controls.forEach((btn) =>
    btn.addEventListener("click", () => {
      const next = Math.max(
        0,
        Math.min(cards.length - 1, current + +btn.dataset.caseDirection),
      );
      const target = cards[next].offsetLeft - cards[0].offsetLeft;
      track.scrollTo({
        left: target,
        behavior: isReduced() ? "instant" : "smooth",
      });
    }),
  );
  update();
}
