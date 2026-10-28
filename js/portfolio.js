import { observeMetrics } from "./lib/metrics.js";
import { initScrollUI } from "./animations/scroll-ui.js";
import { initCases } from "./lib/cases-ui.js";
import { initMicrointeractions } from "./lib/microinteractions.js";
import { chooseQuality } from "./lib/quality.js";
/* Native document scrolling is the only input. All content is present in HTML. */
(() => {
  "use strict";
  const root = document.documentElement;
  let reduced = root.classList.contains("reduced-motion");
  const media = matchMedia("(prefers-reduced-motion: reduce)");
  const motionButton = document.getElementById("motionToggle");
  motionButton.setAttribute("aria-pressed", String(reduced));
  motionButton.querySelector("span").textContent = reduced
    ? "Ativar animações"
    : "Reduzir movimento";
  motionButton.addEventListener("click", () => {
    try {
      localStorage.setItem("portfolio-motion", reduced ? "full" : "reduced");
    } catch {}
    location.reload();
  });
  media.addEventListener("change", () => {
    let stored = null;
    try {
      stored = localStorage.getItem("portfolio-motion");
    } catch {}
    if (!stored) location.reload();
  });
  const quality = document.getElementById("qualitySelect");
  try {
    quality.value = localStorage.getItem("portfolio-quality") || "auto";
  } catch {}
  root.dataset.quality = chooseQuality();
  quality.addEventListener("change", () => {
    try {
      localStorage.setItem("portfolio-quality", quality.value);
    } catch {}
    root.dataset.quality = chooseQuality();
    dispatchEvent(new Event("portfolio:quality"));
  });
  const waBase = `https://wa.me/${WHATSAPP_NUMBER}`;
  const waUrl = `${waBase}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  document
    .querySelectorAll(".whatsapp-link")
    .forEach((el) => (el.href = waUrl));
  document.getElementById("year").textContent = String(
    new Date().getFullYear(),
  );
  const nav = document.getElementById("nav"),
    toggle = document.getElementById("navToggle");
  function setMenuInert(v) {
    document.querySelector("main").inert = v;
    document.querySelector("footer").inert = v;
    document.getElementById("orcamentoFloat").inert = v;
  }
  function closeMenu() {
    setMenuInert(false);
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    document.body.classList.remove("menu-open");
  }
  document.querySelector(".header .logo").addEventListener("click", closeMenu);
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
      const items = [
          ...document.querySelectorAll(".header a,.header button"),
        ].filter((el) => el.getClientRects().length),
        first = items[0],
        last = items.at(-1);
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
  matchMedia("(min-width:701px)").addEventListener("change", (e) => {
    if (e.matches) closeMenu();
  });
  const narrative = initScrollUI(root, () => reduced);
  initCases(
    () => reduced,
    () => narrative.measure(),
  );
  initMicrointeractions(() => reduced);
  if (!reduced && !root.dataset.standalone) {
    const inject = () => {
      const script = document.createElement("script");
      script.src = "js/scene.bundle.js?v=immersive-cinema-20261028";
      script.async = true;
      document.body.append(script);
    };
    if ("requestIdleCallback" in window)
      requestIdleCallback(inject, { timeout: 900 });
    else setTimeout(inject, 60);
  }
  addEventListener("portfolio:graphics-fallback", () => {
    reduced = true;
    root.className = "reduced-motion";
    root.dataset.renderer = "static";
    motionButton.setAttribute("aria-pressed", "true");
    motionButton.querySelector("span").textContent = "Ativar animações";
    document.getElementById("sceneStage").classList.remove("is-ready");
    narrative.measure();
  });
  observeMetrics();
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
          "Olá! Sou a assistente do Abraão.\n\nO que está travando a rotina do seu negócio hoje?";
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
      status.textContent = "Entendendo o problema…";
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
            ? "A conversa com IA não está disponível nesta prévia. Você pode contar o problema diretamente para Abraão pelo WhatsApp."
            : "O assistente não conseguiu responder agora. Você pode continuar sua conversa diretamente com Abraão pelo WhatsApp.",
        );
        wa.href = `${waBase}?text=${encodeURIComponent("Olá, Abraão! O que preciso resolver é: " + content)}`;
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
