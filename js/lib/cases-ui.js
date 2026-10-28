function initCases(isReduced, onLayout) {
  const section = document.getElementById("projetos"), track = document.getElementById("caseTrack"), cards = [...track.querySelectorAll(".case-card")], counter = document.getElementById("caseCounter"), controls = [...section.querySelectorAll("[data-case-direction]")], motion = document.getElementById("caseMotionToggle");
  let current = 0, queued = false, paused = isReduced();
  function setMotion() {
    section.classList.toggle("motion-paused", paused);
    motion.setAttribute("aria-pressed", String(paused));
    motion.textContent = isReduced() ? "Movimento reduzido" : paused ? "Ativar movimento \u21BB" : "Pausar movimento \u2161";
    motion.disabled = isReduced();
  }
  motion.addEventListener("click", () => {
    paused = !paused;
    setMotion();
  });
  setMotion();
  function go(index) {
    const next = Math.max(0, Math.min(cards.length - 1, index));
    track.scrollTo({ left: cards[next].offsetLeft - (track.clientWidth - cards[next].offsetWidth) / 2, behavior: isReduced() ? "instant" : "smooth" });
  }
  function update() {
    queued = false;
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = Infinity;
    cards.forEach((card, i) => {
      const distance = (card.offsetLeft + card.offsetWidth / 2 - center) / card.offsetWidth, d = Math.max(-1.2, Math.min(1.2, distance));
      if (Math.abs(distance) < nearest) {
        nearest = Math.abs(distance);
        current = i;
      }
      card.classList.toggle("is-near", Math.abs(distance) < 1.1);
      card.style.setProperty("--card-yaw", `${isReduced() ? 0 : d * -12}deg`);
      card.style.setProperty("--card-roll", `${isReduced() ? 0 : d * 1.6}deg`);
      card.style.setProperty("--card-depth", `${isReduced() ? 0 : -Math.min(1, Math.abs(d)) * 65}px`);
    });
    cards.forEach((card, i) => card.classList.toggle("is-current", i === current));
    const label = `${String(current + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
    if (counter.textContent !== label) counter.textContent = label;
    controls.forEach((btn) => btn.disabled = +btn.dataset.caseDirection < 0 ? current === 0 : current === cards.length - 1);
    track.dataset.activeCase = cards[current].id;
  }
  const request = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  };
  track.addEventListener("scroll", request, { passive: true });
  addEventListener("resize", request, { passive: true });
  controls.forEach((btn) => btn.addEventListener("click", () => go(current + +btn.dataset.caseDirection)));
  track.addEventListener("keydown", (e) => {
    if (e.target !== track) return;
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      go(current + (e.key === "ArrowRight" ? 1 : -1));
    }
    if (e.key === "Home" || e.key === "End") {
      e.preventDefault();
      go(e.key === "Home" ? 0 : cards.length - 1);
    }
  });
  cards.forEach((card, cardIndex) => {
    const tabs = [...card.querySelectorAll("[role=tab]")];
    function select(index, focus = false) {
      tabs.forEach((tab, i) => {
        const active = i === index;
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
        document.getElementById(tab.getAttribute("aria-controls")).hidden = !active;
      });
      if (focus) tabs[index].focus({ preventScroll: true });
      onLayout();
    }
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => select(index));
      tab.addEventListener("keydown", (e) => {
        let next = index;
        if (e.key === "ArrowRight") next = (index + 1) % tabs.length;
        else if (e.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = tabs.length - 1;
        else return;
        e.preventDefault();
        select(next, true);
      });
    });
    card.addEventListener("focusin", () => {
      if (cardIndex !== current) go(cardIndex);
    });
  });
  const observer = new IntersectionObserver((entries) => section.classList.toggle("is-visible", entries[0].isIntersecting), { rootMargin: "80px" });
  observer.observe(section);
  document.addEventListener("visibilitychange", () => section.classList.toggle("page-hidden", document.hidden));
  addEventListener("portfolio:graphics-fallback", () => {
    paused = true;
    setMotion();
    update();
  });
  update();
  addEventListener("pagehide", (e) => {
    if (!e.persisted) observer.disconnect();
  });
}
export {
  initCases
};
