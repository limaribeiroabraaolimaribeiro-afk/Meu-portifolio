/* Portfolio interactions. Native scrolling stays in charge of the experience. */
(() => {
  "use strict";
  const root = document.documentElement;
  const media = matchMedia("(prefers-reduced-motion: reduce)");
  let storedMotion = null;
  try {
    storedMotion = localStorage.getItem("portfolio-motion");
  } catch {}
  let reduced =
    storedMotion === "reduced" || (storedMotion !== "full" && media.matches);
  const motionButton = document.getElementById("motionToggle");
  function setMotion(value, persist = false) {
    reduced = value;
    root.classList.toggle("reduced-motion", reduced);
    root.classList.toggle("full-motion", !reduced);
    root.classList.toggle("js-motion", !reduced);
    motionButton.setAttribute("aria-pressed", String(reduced));
    motionButton.querySelector("span").textContent = reduced
      ? "Ativar animações"
      : "Reduzir movimento";
    if (persist) {
      storedMotion = reduced ? "reduced" : "full";
      try {
        localStorage.setItem("portfolio-motion", reduced ? "reduced" : "full");
      } catch {}
    }
    window.dispatchEvent(
      new CustomEvent("portfolio:motion", { detail: { reduced } }),
    );
    updateScroll();
  }
  motionButton.addEventListener("click", () => {
    setMotion(!reduced, true);
    requestAnimationFrame(() =>
      motionButton.scrollIntoView({ block: "center", behavior: "instant" }),
    );
  });
  media.addEventListener("change", (e) => {
    if (storedMotion === null) setMotion(e.matches);
  });
  window.addEventListener("portfolio:graphics-fallback", () => setMotion(true));

  const waBase = `https://wa.me/${WHATSAPP_NUMBER}`;
  const waUrl = `${waBase}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  document.querySelectorAll(".whatsapp-link").forEach((el) => {
    el.href = waUrl;
  });
  document.getElementById("year").textContent = String(
    new Date().getFullYear(),
  );

  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  function setMenuInert(value) {
    document.querySelector("main").inert = value;
    document.querySelector("footer").inert = value;
    document.getElementById("orcamentoFloat").inert = value;
  }
  function closeMenu() {
    setMenuInert(false);
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    document.body.classList.remove("menu-open");
  }
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    document.body.classList.toggle("menu-open", open);
    setMenuInert(open);
    if (open) nav.querySelector("a").focus();
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      closeMenu();
      toggle.focus();
    }
    if (e.key === "Tab" && nav.classList.contains("open")) {
      const focusable = [
        ...document.querySelectorAll(".header a,.header button"),
      ].filter((el) => el.getClientRects().length);
      const first = focusable[0],
        last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
  matchMedia("(min-width: 701px)").addEventListener("change", (e) => {
    if (e.matches) closeMenu();
  });

  const escapeHTML = (str) =>
    String(str).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const meta = {
    "day-lanches": {
      group: "sites",
      label: "CARDÁPIO DIGITAL",
      glow: "#de782523",
    },
    "nexa-story": { group: "sites", label: "E-COMMERCE", glow: "#b48fe523" },
    "js-autocar": {
      group: "sites",
      label: "SITE & AGENDAMENTO",
      glow: "#6c9cf123",
    },
    "agrisolo-apontamentos": {
      group: "sistemas",
      label: "GESTÃO DA OPERAÇÃO",
      glow: "#b98a3523",
    },
    "controle-gastos-pro": {
      group: "sistemas",
      label: "GESTÃO FINANCEIRA",
      title: "Clareza para decidir.",
    },
    "funcionario-ia": {
      group: "automacao",
      label: "WHATSAPP & INTELIGÊNCIA ARTIFICIAL",
      title: "Atendimento conectado.",
    },
    trufaspay: {
      group: "automacao",
      label: "VENDAS & COBRANÇAS",
      title: "Cada venda organizada.",
    },
  };
  const order = [
    "day-lanches",
    "nexa-story",
    "js-autocar",
    "agrisolo-apontamentos",
    "controle-gastos-pro",
    "funcionario-ia",
    "trufaspay",
  ];
  const projects = [...PROJECTS].sort(
    (a, b) => order.indexOf(a.id) - order.indexOf(b.id),
  );
  const demo = (p, m) =>
    p.id === "funcionario-ia"
      ? `<div class="project-demo flow-demo" aria-hidden="true"><div class="flow-node"><span>Uma nova mensagem</span><b>↗</b></div><div class="flow-line"></div><div class="flow-node"><span>Atendimento inteligente</span><b>✳</b></div><div class="flow-line"></div><div class="flow-node"><span>Próximo passo organizado</span><b>✓</b></div></div><span class="demo-illustration">VISUAL ILUSTRATIVO</span>`
      : `<div class="project-demo" aria-hidden="true"><div class="demo-top"><span>${escapeHTML(p.nome)}</span><i class="demo-dot"></i></div><span class="demo-title">${m.title}</span><div class="demo-chart">${[30, 50, 42, 75, 62, 88, 100].map((h) => `<i style="height:${h}%"></i>`).join("")}</div><div class="demo-lines"><i></i><i></i><i></i></div></div><span class="demo-illustration">VISUAL ILUSTRATIVO</span>`;
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = projects
    .map((p, i) => {
      const m = meta[p.id] || { group: "sistemas", label: p.subtitulo };
      const similarUrl = `${waBase}?text=${encodeURIComponent(`Olá, Abraão! Vi o projeto ${p.nome} no seu portfólio e gostaria de conversar sobre uma solução parecida.`)}`;
      const image = p.imagem
        ? `<img src="${escapeHTML(p.imagem.replace(/\.jpg$/, ".webp"))}" alt="Apresentação do projeto ${escapeHTML(p.nome)}" width="1300" height="975" loading="lazy" decoding="async">`
        : demo(p, m);
      return `<article class="project-case reveal${p.destaque ? " featured" : ""}" data-category="${m.group}" style="--project-glow:${m.glow || "#db782b1c"}"><a class="project-media" href="${escapeHTML(p.urlProd || similarUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${p.urlProd ? "Visitar" : "Conversar sobre"} ${escapeHTML(p.nome)}"><span class="project-index">[ ${String(i + 1).padStart(2, "0")} / PROJETO ]</span>${p.destaque ? '<div class="featured-label"><span>PROJETO EM DESTAQUE</span><strong>Da vontade<br>ao pedido.</strong><small>Uma experiência digital para o Day Lanches.</small></div>' : ""}${image}<span class="project-corner" aria-hidden="true">↗</span></a><div class="project-info"><div class="project-info-top"><h3>${escapeHTML(p.nome)}</h3><span class="project-category">${escapeHTML(m.label)}</span></div><p>${escapeHTML(p.descricao)}</p><div class="project-links">${p.urlProd ? `<a href="${escapeHTML(p.urlProd)}" target="_blank" rel="noopener noreferrer">Ver projeto ↗</a>` : ""}<a href="${escapeHTML(similarUrl)}" target="_blank" rel="noopener noreferrer">Quero uma solução assim ↗</a>${p.urlGithub ? `<a href="${escapeHTML(p.urlGithub)}" target="_blank" rel="noopener noreferrer">Código ↗</a>` : ""}</div></div></article>`;
    })
    .join("");
  document.querySelector(
    '.project-filters [data-filter="all"] span',
  ).textContent = String(projects.length).padStart(2, "0");
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((other) => {
        const active = other === button;
        other.classList.toggle("active", active);
        other.setAttribute("aria-pressed", String(active));
      });
      grid.querySelectorAll(".project-case").forEach((card) => {
        card.hidden =
          button.dataset.filter !== "all" &&
          button.dataset.filter !== card.dataset.category;
        if (!card.hidden) card.classList.remove("pending");
      });
      requestAnimationFrame(updateScroll);
    });
  });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("pending");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("pending");
      observer.observe(el);
    });
  }

  const story = document.getElementById("servicos");
  const steps = [...document.querySelectorAll(".story-step")];
  const dots = [...document.querySelectorAll(".story-dots i")];
  const meter = document.querySelector(".scroll-meter span");
  let scrollQueued = false;
  function updateScroll() {
    scrollQueued = false;
    const y = window.scrollY;
    meter.style.transform = `scaleX(${Math.min(1, y / Math.max(1, document.documentElement.scrollHeight - innerHeight))})`;
    const max = Math.max(1, story.offsetHeight - innerHeight);
    const p = Math.max(0, Math.min(1, (y - story.offsetTop) / max));
    const index = Math.min(2, Math.floor(p * 3));
    steps.forEach((step, i) => {
      step.classList.toggle("is-active", i === index);
      step.inert = !reduced && i !== index;
    });
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    document.querySelector(".story-counter").textContent = `0${index + 1} / 03`;
    if (!reduced) {
      root.style.setProperty("--note-y", `${Math.min(y * 0.1, 80)}px`);
      root.style.setProperty("--asterisk-angle", `${y * 0.025}deg`);
    }
  }
  addEventListener(
    "scroll",
    () => {
      if (!scrollQueued) {
        scrollQueued = true;
        requestAnimationFrame(updateScroll);
      }
    },
    { passive: true },
  );
  addEventListener("resize", updateScroll, { passive: true });
  setMotion(reduced);

  const dialog = document.getElementById("chatDialog");
  const messages = document.getElementById("orcamentoChat");
  const input = document.getElementById("orcamentoInput");
  const sendButton = document.getElementById("orcamentoSendBtn");
  const status = document.getElementById("orcamentoStatus");
  const wa = document.getElementById("orcamentoWaBtn");
  const history = [];
  let loading = false;
  let opener = null;
  function addMessage(role, content) {
    const item = document.createElement("div");
    item.className = `chat-msg ${role}`;
    // Treat both model output and user input as plain text.
    item.textContent = content.replace(/\*\*/g, "");
    messages.append(item);
    messages.scrollTop = messages.scrollHeight;
    return item;
  }
  document.querySelectorAll("[data-open-chat]").forEach((button) =>
    button.addEventListener("click", () => {
      opener = button;
      dialog.showModal();
      document.body.style.overflow = "hidden";
      if (!history.length) {
        const greeting =
          "Olá! Sou a assistente do Abraão. Vamos pensar no seu projeto?\n\nMe conta: você precisa de um site, sistema, cardápio digital ou automação?";
        history.push({ role: "assistant", content: greeting });
        addMessage("assistant", greeting);
      }
      input.focus({ preventScroll: true });
    }),
  );
  document
    .getElementById("orcamentoClose")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        dialog.close();
    }
  });
  dialog.addEventListener("close", () => {
    document.body.style.overflow = "";
    opener?.focus({ preventScroll: true });
  });
  document
    .getElementById("orcamentoForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const content = input.value.trim();
      if (!content || loading) return;
      addMessage("user", content);
      input.value = "";
      loading = true;
      sendButton.disabled = true;
      history.push({ role: "user", content });
      status.textContent = "Pensando no seu projeto…";
      const typing = addMessage("typing", "Preparando uma resposta…");
      const abort = new AbortController();
      const timeout = setTimeout(() => abort.abort(), 30000);
      try {
        if (
          location.protocol === "file:" ||
          document.documentElement.dataset.standalone === "true"
        )
          throw new Error("offline-preview");
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history.slice(-24) }),
          signal: abort.signal,
        });
        if (!res.ok) throw new Error("unavailable");
        const data = await res.json();
        if (typeof data.reply !== "string") throw new Error("invalid-response");
        typing.remove();
        history.push({ role: "assistant", content: data.reply });
        addMessage("assistant", data.reply);
        if (/resumo do orçamento/i.test(data.reply)) {
          wa.textContent = "Enviar o resumo para Abraão no WhatsApp ↗";
          wa.href = `${waBase}?text=${encodeURIComponent("Olá, Abraão! Montei este resumo do meu projeto:\n\n" + data.reply.replace(/\*\*/g, ""))}`;
        }
      } catch {
        typing.remove();
        history.pop();
        addMessage(
          "assistant",
          document.documentElement.dataset.standalone === "true" ||
            location.protocol === "file:"
            ? "A conversa com IA não está disponível nesta prévia. Você pode levar sua ideia diretamente para Abraão pelo WhatsApp."
            : "O assistente não conseguiu responder agora. Você pode continuar sua conversa diretamente com Abraão pelo WhatsApp.",
        );
        wa.href = `${waBase}?text=${encodeURIComponent("Olá, Abraão! Minha ideia de projeto é: " + content)}`;
        wa.textContent = "Continuar esta conversa no WhatsApp ↗";
      } finally {
        clearTimeout(timeout);
        loading = false;
        sendButton.disabled = false;
        status.textContent = "Assistente de projetos com IA";
        if (dialog.open) input.focus();
      }
    });
})();
