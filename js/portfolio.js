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
  if (floatBtn) floatBtn.href = ctaUrl;
} catch (err) {
  console.error('Falha ao configurar links do WhatsApp:', err);
}

// ── RENDERIZAÇÃO DOS CARDS DE PROJETOS ─────────────────────────
try {
  const grid = document.getElementById('projectsGrid');

  if (grid && typeof PROJECTS !== 'undefined') {
    const projects = [...PROJECTS].sort((a, b) => (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0));
    const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

    grid.innerHTML = projects.map(p => {
      const accentClass = p.accent ? ` proj-card--${p.accent}` : '';
      const cardClass = `proj-card reveal${p.destaque ? ' featured' : ''}${accentClass}`;
      const badge = p.destaque ? '<span class="proj-badge">Destaque</span>' : '';
      const tags = p.tags.map(t => `<span>${t}</span>`).join('');

      const prodBtn = p.urlProd
        ? `<a class="btn btn-primary btn-sm" href="${p.urlProd}" target="_blank" rel="noopener">Ver projeto</a>`
        : `<span class="btn btn-primary btn-sm btn-disabled">Ver projeto</span>`;

      const similarMsg = encodeURIComponent(`Olá! Vi o projeto "${p.nome}" no seu portfólio e quero algo parecido para o meu negócio.`);
      const similarBtn = `<a class="btn btn-outline btn-sm" href="${baseUrl}?text=${similarMsg}" target="_blank" rel="noopener">Falar sobre algo parecido</a>`;

      const desc = p.destaque ? p.descricao : (p.subtitulo || p.descricao);

      return `
        <div class="${cardClass}">
          ${badge}
          <div class="proj-media">
            <span class="proj-media-icon">${p.icone || '💻'}</span>
            <img src="${p.imagem}" alt="Preview do projeto ${p.nome}" loading="lazy" onerror="this.remove()">
          </div>
          <div class="proj-body">
            <h3 class="proj-name">${p.nome}</h3>
            <p class="proj-desc">${desc}</p>
            <p class="proj-problem"><strong>Resolve:</strong> ${p.problema}</p>
            <div class="proj-tags">${tags}</div>
            <div class="proj-actions">${prodBtn}${similarBtn}</div>
          </div>
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
