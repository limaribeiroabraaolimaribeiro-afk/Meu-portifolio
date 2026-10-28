export function initMicrointeractions(isReduced) {
  if (isReduced() || !matchMedia("(hover:hover) and (pointer:fine)").matches)
    return;
  document.querySelectorAll("[data-tilt]").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect(),
        x = (e.clientX - r.left) / r.width - 0.5,
        y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--rx", `${-y * 4}deg`);
      el.style.setProperty("--ry", `${x * 4}deg`);
    });
    el.addEventListener("pointerleave", () => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    });
  });
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.035}px,${(e.clientY - r.top - r.height / 2) * 0.07}px)`;
    });
    el.addEventListener("pointerleave", () => (el.style.transform = ""));
  });
}
