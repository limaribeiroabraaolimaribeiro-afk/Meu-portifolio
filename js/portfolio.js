// Portfolio — Abraão Lima Ribeiro

// ── LINKS DO WHATSAPP ──────────────────────────────────────────
// Usa WHATSAPP_NUMBER / WHATSAPP_MESSAGE de js/projects-config.js
(function setupWhatsappLinks() {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  const ctaUrl = `${baseUrl}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  document.querySelectorAll('.whatsapp-link').forEach(el => {
    el.href = ctaUrl;
  });

  const floatBtn = document.getElementById('whatsappFloat');
  if (floatBtn) floatBtn.href = baseUrl;
})();

// ── RENDERIZAÇÃO DOS CARDS DE PROJETOS ─────────────────────────
(function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const projects = [...PROJECTS].sort((a, b) => (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0));

  grid.innerHTML = projects.map(p => {
    const cardClass = `proj-card${p.destaque ? ' featured reveal' : ' reveal'}`;
    const badge = p.destaque ? '<span class="proj-badge">Destaque</span>' : '';
    const tags = p.tags.map(t => `<span>${t}</span>`).join('');

    const prodBtn = p.urlProd
      ? `<a class="btn btn-primary btn-sm" href="${p.urlProd}" target="_blank" rel="noopener">Ver projeto online</a>`
      : `<span class="btn btn-primary btn-sm btn-disabled">Ver projeto online</span>`;

    const githubBtn = p.urlGithub
      ? `<a class="btn btn-outline btn-sm" href="${p.urlGithub}" target="_blank" rel="noopener">GitHub</a>`
      : '';

    return `
      <div class="${cardClass}">
        ${badge}
        <h3 class="proj-name">${p.nome}</h3>
        <p class="proj-desc">${p.descricao}</p>
        <div class="proj-tags">${tags}</div>
        <div class="proj-actions">${prodBtn}${githubBtn}</div>
      </div>
    `;
  }).join('');

  // Reaplica o observer de animação aos cards recém-criados
  observeReveals();
})();

// ── MENU MOBILE ─────────────────────────────────────────────────
(function setupMobileNav() {
  const header = document.getElementById('header');
  const toggle = document.getElementById('navToggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    header.classList.toggle('open');
  });

  header.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => header.classList.remove('open'));
  });
})();

// ── ANIMAÇÃO DE ENTRADA AO ROLAR ────────────────────────────────
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
  }

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    revealObserver.observe(el);
  });
}
observeReveals();
