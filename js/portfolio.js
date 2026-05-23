// Portfolio — Abraão Lima Ribeiro

let current = 1;
const TOTAL = 7;

function render() {
  document.getElementById('cur').textContent = current;
  document.getElementById('tot').textContent = TOTAL;

  document.querySelectorAll('.slide').forEach(el => {
    const n = +el.dataset.slide;
    el.classList.toggle('active', n === current);
    el.classList.toggle('exit',   n !== current);
  });

  document.querySelectorAll('.nav-dot').forEach((d, i) => {
    d.classList.toggle('on', i + 1 === current);
  });

  document.getElementById('prevBtn').disabled = current === 1;
  document.getElementById('nextBtn').disabled = current === TOTAL;
}

function go(dir) {
  const n = current + dir;
  if (n < 1 || n > TOTAL) return;
  current = n;
  render();
}

function jump(n) {
  current = Math.max(1, Math.min(TOTAL, n));
  render();
}

// Teclado
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   go(-1);
  // P = imprimir/exportar todos os slides
  if (e.key === 'p' || e.key === 'P') {
    // Antes de imprimir: tornar todos os slides visíveis via classe especial
    // (o @media print já usa display:block em .slide)
    window.print();
  }
});

// Swipe (mobile)
let tx = 0;
document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend',   e => {
  const d = tx - e.changedTouches[0].clientX;
  if (Math.abs(d) > 50) go(d > 0 ? 1 : -1);
});

render();
