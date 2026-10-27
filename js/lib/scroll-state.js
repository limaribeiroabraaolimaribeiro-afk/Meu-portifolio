export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export function createScrollState() {
  const sections = [...document.querySelectorAll("[data-chapter]")];
  let markers = [];
  function measure() {
    markers = sections.map((el) => ({
      el,
      id: el.dataset.chapter,
      top: el.getBoundingClientRect().top + scrollY,
      height: el.offsetHeight,
    }));
  }
  measure();
  function at(y = scrollY) {
    const probe = y + innerHeight * 0.2;
    let index = 0;
    for (let i = 0; i < markers.length; i++) {
      if (probe >= markers[i].top) index = i;
      else break;
    }
    const marker = markers[index];
    return {
      index,
      marker,
      progress: clamp((probe - marker.top) / Math.max(1, marker.height)),
      time: index + clamp((probe - marker.top) / Math.max(1, marker.height)),
    };
  }
  return {
    sections,
    measure,
    at,
    get markers() {
      return markers;
    },
  };
}
