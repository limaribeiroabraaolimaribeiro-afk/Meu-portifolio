// Portfolio — Abraão Lima Ribeiro
//
// Cada bloco roda isolado em try/catch: se algo falhar (ex.: config
// não carregou), o resto do site continua funcionando normalmente.

// ── LINKS DO WHATSAPP ──────────────────────────────────────────
// Usa WHATSAPP_NUMBER / WHATSAPP_MESSAGE de js/projects-config.js
try {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  const ctaUrl = `${baseUrl}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  document.querySelectorAll('.whatsapp-link').forEach(el => {
    el.href = ctaUrl;
  });

  const floatBtn = document.getElementById('whatsappFloat');
  if (floatBtn) floatBtn.href = baseUrl;
} catch (err) {
  console.error('Falha ao configurar links do WhatsApp:', err);
}

// ── RENDERIZAÇÃO DOS CARDS DE PROJETOS ─────────────────────────
try {
  const grid = document.getElementById('projectsGrid');

  if (grid && typeof PROJECTS !== 'undefined') {
    const projects = [...PROJECTS].sort((a, b) => (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0));

    grid.innerHTML = projects.map(p => {
      const cardClass = `proj-card reveal${p.destaque ? ' featured' : ''}`;
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
  }
} catch (err) {
  console.error('Falha ao renderizar projetos:', err);
}

// ── MENU MOBILE ─────────────────────────────────────────────────
try {
  const header = document.getElementById('header');
  const toggle = document.getElementById('navToggle');

  if (header && toggle) {
    toggle.addEventListener('click', () => {
      header.classList.toggle('open');
    });

    header.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => header.classList.remove('open'));
    });
  }
} catch (err) {
  console.error('Falha ao configurar o menu mobile:', err);
}

// ── ANIMAÇÃO DE ENTRADA AO ROLAR ────────────────────────────────
// O conteúdo já é visível por padrão (CSS); aqui apenas adicionamos
// a animação de fade/slide para quem tem JS habilitado.
try {
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('reveal-init');
      revealObserver.observe(el);
    });
  }
} catch (err) {
  console.error('Falha ao configurar animação de entrada:', err);
}
