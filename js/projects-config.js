// ============================================================
// CONFIGURAÇÃO CENTRAL — PROJETOS E CONTATO
// Edite apenas este arquivo para atualizar links, imagens e textos.
// ============================================================

// ✏️ Número de WhatsApp (formato internacional, sem espaços/símbolos)
// Trocar aqui atualiza TODOS os botões de WhatsApp do site.
const WHATSAPP_NUMBER = "5547992101675";

// ✏️ Mensagem padrão dos botões gerais de WhatsApp
const WHATSAPP_MESSAGE = "Olá, vi seu portfólio e tenho interesse em um projeto";

// ✏️ Lista de projetos exibidos na seção "Projetos desenvolvidos"
//
// - destaque: true   → aparece primeiro e com card maior / badge "Destaque"
// - urlProd: null    → botão "Ver projeto" fica desabilitado
// - urlGithub: null  → não exibe botão "Código-fonte"
// - imagem: caminho para o print/mockup do projeto
//   → TODO: SUBSTITUIR_IMAGEM_AQUI = ainda não existe o arquivo, troque
//     por "img/projects/nome-do-arquivo.png" quando tiver o print real
// - icone: emoji usado como placeholder visual enquanto não há imagem
const PROJECTS = [
  {
    id: "nexa-story",
    nome: "Nexa Story",
    icone: "🛍️",
    imagem: "img/Nexa-Story.jpg",
    descricao: "E-commerce completo com vitrine de produtos, carrinho, checkout, painel administrativo, notificações e fluxo de pedidos.",
    problema: "Ideal para marcas de beleza e cuidados pessoais que querem vender online com aparência profissional, sem depender de marketplaces.",
    tags: ["React", "Node.js", "E-commerce", "Mercado Pago"],
    urlProd: "https://www.nexastory.com.br",
    urlGithub: null,
    destaque: false
  },
  {
    id: "day-lanches",
    nome: "Day Lanches",
    icone: "🍔",
    imagem: "img/Day-Lanches.jpg",
    descricao: "Cardápio digital online para lanchonete, com pedidos diretos pelo site, visual atrativo e navegação rápida pelo celular.",
    problema: "Resolve a dependência de aplicativos de delivery: o cliente pede direto pelo site, sem taxas por venda.",
    tags: ["HTML", "CSS", "JavaScript", "Cardápio Digital"],
    urlProd: "https://www.daylanches.com.br",
    urlGithub: "https://github.com/limaribeiroabraaolimaribeiro-afk/DayLanches",
    destaque: true
  },
  {
    id: "funcionario-ia",
    nome: "Funcionário de IA / Automação WhatsApp",
    icone: "🤖",
    // TODO: SUBSTITUIR_IMAGEM_AQUI
    imagem: "img/projects/funcionario-ia.png",
    descricao: "Automação inteligente para atendimento no WhatsApp: capta clientes, responde dúvidas automaticamente e organiza as conversas.",
    problema: "Pensado para negócios que perdem vendas por demora no atendimento — a IA responde 24h, mesmo fora do horário comercial.",
    tags: ["Inteligência Artificial", "WhatsApp API", "Automação", "n8n"],
    // TODO: SUBSTITUIR_URL_DO_PROJETO_AQUI
    urlProd: null,
    urlGithub: null,
    destaque: false
  },
  {
    id: "js-autocar",
    nome: "JS Autocar",
    icone: "🚗",
    imagem: "img/Js-autocar.jpg",
    descricao: "Site/sistema para serviços automotivos com apresentação profissional, lista de serviços, agendamento online e área administrativa.",
    problema: "Resolve a desorganização de agendamentos manuais: o cliente marca o horário sozinho e o negócio acompanha tudo pelo painel.",
    tags: ["JavaScript", "Agendamento Online", "PWA"],
    urlProd: "https://js-autocar.onrender.com/",
    urlGithub: "https://github.com/limaribeiroabraaolimaribeiro-afk/JS-Autocar",
    accent: "blue",
    destaque: false
  },
  {
    id: "controle-gastos-pro",
    nome: "Controle de Gastos PRO",
    icone: "📊",
    // TODO: SUBSTITUIR_IMAGEM_AQUI
    imagem: "img/projects/controle-gastos-pro.png",
    descricao: "PWA para controle financeiro com gráficos, histórico de lançamentos, categorias personalizadas, simulações e recursos inteligentes.",
    problema: "Ajuda pessoas e pequenos negócios a enxergarem para onde o dinheiro está indo e planejarem com mais segurança.",
    tags: ["Node.js", "API REST", "PWA"],
    urlProd: "https://limaribeiroabraaolimaribeiro-afk.github.io/controle-gastos/",
    urlGithub: "https://github.com/limaribeiroabraaolimaribeiro-afk/controle-gastos",
    destaque: false
  },
  {
    id: "agrisolo-apontamentos",
    nome: "Agrisolo Apontamentos",
    icone: "🌱",
    imagem: "img/Agrisolo.jpg",
    descricao: "Sistema de apontamentos para operação interna, com identificação por crachá, controle de turno, horímetro e histórico completo de registros.",
    problema: "Substitui anotações em papel por um registro digital confiável, mesmo em áreas sem sinal de internet.",
    tags: ["PWA", "JavaScript", "Offline-first"],
    urlProd: "https://limaribeiroabraaolimaribeiro-afk.github.io/agrisolo/",
    urlGithub: "https://github.com/limaribeiroabraaolimaribeiro-afk/agrisolo",
    destaque: false
  },
  {
    id: "vitrinefy",
    nome: "Vitrinefy",
    icone: "🏬",
    // TODO: SUBSTITUIR_IMAGEM_AQUI
    imagem: "img/projects/vitrinefy.png",
    descricao: "Vitrine digital multi-loja para apresentar produtos com visual atrativo e facilitar o contato direto com o cliente pelo WhatsApp.",
    problema: "Indicado para quem precisa expor o catálogo online rapidamente, sem o custo de uma loja virtual completa.",
    tags: ["HTML", "CSS", "JavaScript", "Vitrine Online"],
    // TODO: SUBSTITUIR_URL_DO_PROJETO_AQUI
    urlProd: null,
    urlGithub: null,
    destaque: false
  },
  {
    id: "trufaspay",
    nome: "TrufasPay",
    icone: "🍫",
    // TODO: SUBSTITUIR_IMAGEM_AQUI
    imagem: "img/projects/trufaspay.png",
    descricao: "PWA para controle de vendas fiadas, com fila de cobrança e disparo automático de mensagens via WhatsApp.",
    problema: "Reduz a inadimplência de pequenos negócios, organizando quem deve, quanto deve e quando cobrar.",
    tags: ["PWA", "JavaScript", "WhatsApp"],
    urlProd: "https://limaribeiroabraaolimaribeiro-afk.github.io/TrufasPay/",
    urlGithub: "https://github.com/limaribeiroabraaolimaribeiro-afk/TrufasPay",
    destaque: false
  }
];
