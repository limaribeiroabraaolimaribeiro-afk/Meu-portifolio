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
        ? `<a class="btn btn-primary btn-sm" href="${p.urlProd}" target="_blank" rel="noopener">Ver projeto ${p.destaque ? '<span class="btn-arrow">&gt;</span>' : ''}</a>`
        : `<span class="btn btn-primary btn-sm btn-disabled">Ver projeto</span>`;

      const similarMsg = encodeURIComponent(`Olá! Vi o projeto "${p.nome}" no seu portfólio e quero algo parecido para o meu negócio.`);
      const similarLabel = p.destaque ? 'Orçamento' : 'Falar sobre algo parecido';
      const similarBtn = `<a class="btn btn-outline btn-sm" href="${baseUrl}?text=${similarMsg}" target="_blank" rel="noopener">${similarLabel}</a>`;

      const desc = p.destaque ? p.descricao : (p.subtitulo || p.descricao);

      const techPills = p.destaque
        ? `<div class="proj-tech-under">${p.tags.slice(0, 3).map(t => {
            const key = t.toLowerCase();
            const cls = key === 'html' ? 'tech-html' : key === 'css' ? 'tech-css' : key.includes('javascript') ? 'tech-js' : '';
            return `<span class="tech-pill ${cls}">${t}</span>`;
          }).join('')}</div>`
        : '';

      const mediaBlock = p.destaque
        ? `<div class="proj-media">
            ${badge}
            <span class="proj-media-icon">${p.icone || '💻'}</span>
            ${p.imagem ? `<img src="${p.imagem}" alt="Preview do projeto ${p.nome}" loading="lazy" onerror="this.style.display='none'">` : ''}
          </div>`
        : `<div class="proj-media">
            <span class="proj-media-icon">${p.icone || '💻'}</span>
            ${p.imagem ? `<img src="${p.imagem}" alt="Preview do projeto ${p.nome}" loading="lazy" onerror="this.style.display='none'">` : ''}
          </div>`;

      const leftCol = p.destaque
        ? `<div class="proj-featured-left">${mediaBlock}${techPills}</div>`
        : mediaBlock;

      return `
        <div class="${cardClass}">
          ${p.destaque ? '' : badge}
          ${leftCol}
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

// ── MENU MOBILE — OVERLAY PREMIUM ───────────────────────────────
try {
  const header = document.getElementById('header');
  const toggle = document.getElementById('navToggle');

  if (header && toggle) {
    const waBase = `https://wa.me/${WHATSAPP_NUMBER}`;
    const waUrl = `${waBase}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    const overlay = document.createElement('div');
    overlay.className = 'mob-menu';
    overlay.innerHTML = `
      <div class="mob-menu__bg"></div>
      <div class="mob-menu__scroll">
        <header class="mob-menu__top">
          <a href="#inicio" class="mob-menu__logo">Abraão<span>.dev</span></a>
          <button class="mob-menu__close" aria-label="Fechar menu">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"><line x1="2" y1="2" x2="20" y2="20"/><line x1="20" y1="2" x2="2" y2="20"/></svg>
          </button>
        </header>

        <section class="mob-menu__hero">
          <h2 class="mob-menu__title">Vamos transformar<br><span>sua presença digital</span></h2>
          <p class="mob-menu__sub">Sites, sistemas e automações que geram <strong>resultados reais</strong> para o seu negócio.</p>
          <div class="mob-menu__ctas">
            <a href="${waUrl}" class="mob-menu__btn mob-menu__btn--wa" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="#fff"><path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.39.7 4.617 1.91 6.49L4 29l7.69-1.86A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm5.6 16.471c-.307-.154-1.815-.896-2.097-.998-.281-.103-.486-.154-.69.154-.205.307-.793.997-.972 1.203-.179.205-.358.23-.665.077-.307-.154-1.295-.477-2.466-1.523-.911-.812-1.527-1.815-1.706-2.122-.179-.307-.019-.473.135-.626.139-.138.307-.358.46-.538.154-.179.205-.307.307-.512.103-.205.051-.384-.026-.538-.077-.154-.69-1.663-.945-2.278-.249-.598-.502-.517-.69-.527l-.588-.01c-.205 0-.538.077-.819.384-.281.307-1.073 1.05-1.073 2.56 0 1.51 1.099 2.97 1.252 3.175.154.205 2.163 3.302 5.24 4.632.732.316 1.303.505 1.748.646.734.234 1.402.2 1.93.121.589-.088 1.815-.742 2.071-1.459.256-.717.256-1.331.179-1.459-.077-.128-.281-.205-.588-.358Z"/></svg>
              Falar no WhatsApp
            </a>
            <a href="#projetos" class="mob-menu__btn mob-menu__btn--outline mob-menu__nav-link">Ver portfólio &gt;</a>
          </div>
        </section>

        <nav class="mob-menu__nav">
          <a href="#inicio" class="mob-menu__item mob-menu__item--active mob-menu__nav-link">
            <span class="mob-menu__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff7a00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span>
            <span class="mob-menu__label">Início</span>
            <span class="mob-menu__arrow">&gt;</span>
          </a>
          <a href="#servicos" class="mob-menu__item mob-menu__nav-link">
            <span class="mob-menu__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff7a00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>
            <span class="mob-menu__label">Serviços</span>
            <span class="mob-menu__arrow">&gt;</span>
          </a>
          <a href="#projetos" class="mob-menu__item mob-menu__nav-link">
            <span class="mob-menu__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff7a00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></span>
            <span class="mob-menu__label">Portfólio</span>
            <span class="mob-menu__arrow">&gt;</span>
          </a>
          <a href="#sobre" class="mob-menu__item mob-menu__nav-link">
            <span class="mob-menu__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff7a00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
            <span class="mob-menu__label">Sobre mim</span>
            <span class="mob-menu__arrow">&gt;</span>
          </a>
          <a href="#depoimentos" class="mob-menu__item mob-menu__nav-link">
            <span class="mob-menu__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff7a00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span>
            <span class="mob-menu__label">Depoimentos</span>
            <span class="mob-menu__arrow">&gt;</span>
          </a>
          <a href="#contato" class="mob-menu__item mob-menu__nav-link">
            <span class="mob-menu__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff7a00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
            <span class="mob-menu__label">Contato</span>
            <span class="mob-menu__arrow">&gt;</span>
          </a>
        </nav>

        <section class="mob-menu__specs">
          <h3 class="mob-menu__specs-title"><span class="mob-menu__specs-bolt">&#9889;</span> MINHAS <span>ESPECIALIDADES</span></h3>
          <div class="mob-menu__specs-grid">
            <div class="mob-menu__spec">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff7a00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              <strong>Sites Profissionais</strong>
              <span>Design moderno e alta conversão.</span>
            </div>
            <div class="mob-menu__spec">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff7a00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>
              <strong>Sistemas Web</strong>
              <span>Soluções completas e escaláveis.</span>
            </div>
            <div class="mob-menu__spec">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff7a00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <strong>Automações WhatsApp</strong>
              <span>Atendimento 24/7 e mais vendas.</span>
            </div>
            <div class="mob-menu__spec">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff7a00" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
              <strong>Landing Pages</strong>
              <span>Páginas que vendem e geram leads.</span>
            </div>
          </div>
        </section>

        <section class="mob-menu__footer">
          <div class="mob-menu__footer-left">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff7a00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
            <div>
              <strong>Tecnologia, estratégia e automação</strong>
              <span>para impulsionar o crescimento do seu negócio.</span>
            </div>
          </div>
          <div class="mob-menu__stats">
            <div class="mob-menu__stat">
              <strong>+20</strong><span>Projetos entregues</span>
            </div>
            <div class="mob-menu__stat">
              <strong>+15</strong><span>Clientes satisfeitos</span>
            </div>
            <div class="mob-menu__stat">
              <strong>100%</strong><span>Foco em resultados</span>
            </div>
          </div>
        </section>
      </div>
    `;
    document.body.appendChild(overlay);

    function openMenu() {
      overlay.classList.add('active');
      document.body.classList.add('menu-open');
    }

    function closeMenu() {
      overlay.classList.remove('active');
      document.body.classList.remove('menu-open');
      header.classList.remove('open');
    }

    toggle.addEventListener('click', () => {
      if (overlay.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    overlay.querySelector('.mob-menu__close').addEventListener('click', closeMenu);

    overlay.querySelectorAll('.mob-menu__nav-link').forEach(link => {
      link.addEventListener('click', () => closeMenu());
    });

    overlay.querySelector('.mob-menu__logo').addEventListener('click', () => closeMenu());
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

// ── CHAT IA — ORÇAMENTO ────────────────────────────────────────
try {
  const orcBtn = document.getElementById('orcamentoFloat');
  const orcOverlay = document.getElementById('orcamentoOverlay');
  const orcClose = document.getElementById('orcamentoClose');
  const orcChat = document.getElementById('orcamentoChat');
  const orcForm = document.getElementById('orcamentoForm');
  const orcInput = document.getElementById('orcamentoInput');
  const orcSendBtn = document.getElementById('orcamentoSendBtn');
  const orcStatus = document.getElementById('orcamentoStatus');
  const orcWaWrap = document.getElementById('orcamentoChatWa');
  const orcWaBtn = document.getElementById('orcamentoWaBtn');

  if (orcBtn && orcOverlay && orcChat) {
    let chatHistory = [];
    let isLoading = false;

    function addMessage(role, text) {
      const div = document.createElement('div');
      div.className = `chat-msg chat-msg--${role === 'assistant' ? 'ai' : 'user'}`;
      div.innerHTML = formatText(text);
      orcChat.appendChild(div);
      orcChat.scrollTop = orcChat.scrollHeight;

      if (role === 'assistant' && text.includes('Resumo do orçamento')) {
        showWaButton(text);
      }
    }

    function formatText(text) {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
    }

    function showTyping() {
      const el = document.createElement('div');
      el.className = 'chat-typing';
      el.id = 'chatTyping';
      el.innerHTML = '<span></span><span></span><span></span>';
      orcChat.appendChild(el);
      orcChat.scrollTop = orcChat.scrollHeight;
    }

    function removeTyping() {
      const el = document.getElementById('chatTyping');
      if (el) el.remove();
    }

    function showWaButton(aiText) {
      const plain = aiText
        .replace(/\*\*/g, '')
        .replace(/\*/g, '');

      const lines = plain.split('\n');
      const summaryStart = lines.findIndex(l => l.toLowerCase().includes('resumo do orçamento'));
      const summaryLines = summaryStart >= 0 ? lines.slice(summaryStart) : lines.slice(-10);
      const summaryText = summaryLines.join('\n').trim();

      const waMsg = `Olá Abraão, fiz meu orçamento com a IA:\n\n${summaryText}\n\nQuero conversar sobre esse projeto.`;
      orcWaBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;
      orcWaWrap.style.display = 'block';
    }

    async function sendToAI(userMessage) {
      chatHistory.push({ role: 'user', content: userMessage });
      addMessage('user', userMessage);
      orcInput.value = '';

      isLoading = true;
      orcSendBtn.disabled = true;
      orcStatus.textContent = 'Digitando...';
      showTyping();

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: chatHistory }),
        });

        removeTyping();

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.error || 'Erro na API');
        }

        const data = await res.json();
        const reply = data.reply;

        chatHistory.push({ role: 'assistant', content: reply });
        addMessage('assistant', reply);
      } catch (err) {
        removeTyping();
        addMessage('assistant', 'Desculpe, tive um problema ao processar sua mensagem. Tente novamente ou fale diretamente no WhatsApp.');
        console.error('Chat AI error:', err);
      } finally {
        isLoading = false;
        orcSendBtn.disabled = false;
        orcStatus.textContent = 'Online';
        orcInput.focus();
      }
    }

    function openChat() {
      orcOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';

      if (chatHistory.length === 0) {
        const greeting = 'Olá! 👋 Sou a assistente do Abraão.dev. Vou te ajudar a montar seu orçamento sem compromisso.\n\nMe conta: você precisa de um site, sistema, automação ou cardápio digital?';
        chatHistory.push({ role: 'assistant', content: greeting });
        addMessage('assistant', greeting);
      }

      setTimeout(() => orcInput.focus(), 300);
    }

    function closeChat() {
      orcOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    orcBtn.addEventListener('click', openChat);
    orcClose.addEventListener('click', closeChat);
    orcOverlay.addEventListener('click', (e) => {
      if (e.target === orcOverlay) closeChat();
    });

    orcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = orcInput.value.trim();
      if (!msg || isLoading) return;
      sendToAI(msg);
    });

  }
} catch (err) {
  console.error('Falha ao configurar chat de orçamento:', err);
}
