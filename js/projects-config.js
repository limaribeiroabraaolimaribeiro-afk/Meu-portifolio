// ============================================================
// CONFIGURAÇÃO CENTRAL — PROJETOS E CONTATO
// Edite apenas este arquivo para atualizar links e textos.
// ============================================================

// ✏️ Número de WhatsApp (formato internacional, sem espaços/símbolos)
// Trocar aqui atualiza o botão flutuante e a seção de contato.
const WHATSAPP_NUMBER = "5547992101675";

// ✏️ Mensagem padrão enviada pelo botão da seção de contato
const WHATSAPP_MESSAGE = "Olá, vi seu portfólio e tenho interesse em um projeto";

// ✏️ Lista de projetos exibidos na seção "Projetos"
// - destaque: true   → aparece primeiro e com card maior / badge "Destaque"
// - urlProd: null    → mostra botão desabilitado, lembre de preencher
// - urlGithub: null  → não exibe botão "GitHub"
const PROJECTS = [
  {
    id: "nexa-story",
    nome: "Nexa Story",
    descricao: "E-commerce completo para marcas de beleza e cuidados pessoais: catálogo de produtos, carrinho de compras e pagamento online integrado para vender 24 horas por dia.",
    tags: ["React", "Node.js", "E-commerce", "Mercado Pago"],
    // TODO: SUBSTITUIR_URL_DO_PROJETO_AQUI
    urlProd: null,
    urlGithub: null,
    destaque: true
  },
  {
    id: "day-lanches",
    nome: "Day Lanches",
    descricao: "Cardápio digital online para lanchonete, com pedidos diretos pelo site — mais vendas e mais agilidade no atendimento, sem pagar taxas de aplicativos de delivery.",
    tags: ["HTML", "CSS", "JavaScript", "Cardápio Digital"],
    urlProd: "https://www.daylanches.com.br",
    urlGithub: "https://github.com/limaribeiroabraaolimaribeiro-afk/DayLanches",
    destaque: true
  },
  {
    id: "funcionario-ia",
    nome: "Funcionário de IA / Automação WhatsApp",
    descricao: "Atendente virtual com IA que responde clientes no WhatsApp 24h por dia: tira dúvidas, envia cardápio ou catálogo, agenda horários e qualifica leads — sem perder nenhuma venda.",
    tags: ["Inteligência Artificial", "WhatsApp API", "Automação", "n8n"],
    // TODO: SUBSTITUIR_URL_DO_PROJETO_AQUI
    urlProd: null,
    urlGithub: null,
    destaque: true
  },
  {
    id: "js-autocar",
    nome: "JS Autocar",
    descricao: "Sistema de agendamento online para lava-rápidos: os clientes marcam horário sozinhos pelo site e o negócio organiza toda a agenda automaticamente.",
    tags: ["JavaScript", "Agendamento Online", "PWA"],
    // TODO: SUBSTITUIR_URL_DO_PROJETO_AQUI
    urlProd: null,
    urlGithub: "https://github.com/limaribeiroabraaolimaribeiro-afk/JS-Autocar",
    destaque: false
  },
  {
    id: "controle-gastos-pro",
    nome: "Controle de Gastos PRO",
    descricao: "Aplicativo web para controle financeiro pessoal ou empresarial, com registro de gastos por categoria e relatórios visuais para decisões mais rápidas.",
    tags: ["Node.js", "API REST", "Banco de Dados"],
    // TODO: SUBSTITUIR_URL_DO_PROJETO_AQUI
    urlProd: null,
    urlGithub: "https://github.com/limaribeiroabraaolimaribeiro-afk/controle-gastos",
    destaque: false
  },
  {
    id: "agrisolo-apontamentos",
    nome: "Agrisolo Apontamentos",
    descricao: "Sistema PWA para apontamento de serviços no campo: controle de horímetro, turnos e histórico de operações, funcionando até mesmo sem conexão com a internet.",
    tags: ["PWA", "JavaScript", "Offline-first"],
    // TODO: SUBSTITUIR_URL_DO_PROJETO_AQUI
    urlProd: null,
    urlGithub: "https://github.com/limaribeiroabraaolimaribeiro-afk/agrisolo",
    destaque: false
  },
  {
    id: "vitrinefy",
    nome: "Vitrinefy",
    descricao: "Vitrine online para pequenos negócios divulgarem produtos e receberem pedidos direto pelo WhatsApp, sem custo de loja virtual e sem taxas por venda.",
    tags: ["HTML", "CSS", "JavaScript", "Vitrine Online"],
    // TODO: SUBSTITUIR_URL_DO_PROJETO_AQUI
    urlProd: null,
    urlGithub: null,
    destaque: false
  },
  {
    id: "trufaspay",
    nome: "TrufasPay",
    descricao: "PWA para controle de vendas fiadas: organiza pendências de clientes e dispara cobranças automáticas pelo WhatsApp, reduzindo a inadimplência.",
    tags: ["PWA", "JavaScript", "WhatsApp"],
    // TODO: SUBSTITUIR_URL_DO_PROJETO_AQUI
    urlProd: null,
    urlGithub: "https://github.com/limaribeiroabraaolimaribeiro-afk/TrufasPay",
    destaque: false
  }
];
