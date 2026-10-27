function createSceneWindows(stage) {
  const windows = [...document.querySelectorAll("[data-scene-window]")].map((el) => ({ el, id: el.dataset.sceneWindow, section: el.closest("[data-chapter]") }));
  let dirty = true, active = null;
  const invalidate = () => {
    dirty = true;
  }, observer = new ResizeObserver(invalidate);
  windows.forEach(({ el }) => observer.observe(el));
  addEventListener("scroll", invalidate, { passive: true });
  addEventListener("resize", invalidate, { passive: true });
  return { read() {
    if (!dirty) return active;
    dirty = false;
    const topLimit = document.getElementById("header").offsetHeight;
    let best = null, bestArea = 0;
    for (const item of windows) {
      const rect2 = item.el.getBoundingClientRect(), h = Math.max(0, Math.min(innerHeight, rect2.bottom) - Math.max(topLimit, rect2.top)), w = Math.max(0, Math.min(innerWidth, rect2.right) - Math.max(0, rect2.left));
      if (w * h > bestArea) {
        bestArea = w * h;
        best = { ...item, rect: rect2 };
      }
    }
    if (!best || bestArea < 800) {
      stage.style.visibility = "hidden";
      active = null;
      return null;
    }
    const { rect, section, id } = best, sr = section.getBoundingClientRect(), pin = section.querySelector(".section-pin"), pinned = pin && getComputedStyle(pin).position === "sticky", progress = Math.max(0, Math.min(1, pinned ? -sr.top / Math.max(1, sr.height - pin.offsetHeight) : (innerHeight * 0.45 - sr.top) / Math.max(1, sr.height)));
    if (stage.parentElement !== best.el) best.el.appendChild(stage);
    Object.assign(stage.style, { left: "0", top: "0", width: `${rect.width}px`, height: `${rect.height}px` });
    active = { id, progress, width: Math.round(rect.width), height: Math.round(rect.height), rect };
    stage.dataset.scene = id;
    stage.dataset.progress = progress.toFixed(4);
    return active;
  }, invalidate, dispose() {
    observer.disconnect();
    removeEventListener("scroll", invalidate);
    removeEventListener("resize", invalidate);
  } };
}
export {
  createSceneWindows
};
