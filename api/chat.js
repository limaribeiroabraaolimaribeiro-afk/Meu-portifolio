const Anthropic = require("@anthropic-ai/sdk");

const SYSTEM_PROMPT = `Você é uma assistente comercial do Abraão.dev. Sua função é conversar com possíveis clientes que querem sites, sistemas, automações, cardápios digitais, landing pages ou soluções com IA.

Regras:
- Fale em português brasileiro, linguagem simples e direta.
- Faça perguntas uma por vez para entender o projeto.
- Descubra: tipo de projeto, nome do negócio, o que o cliente faz/vende, funcionalidades desejadas (WhatsApp, pagamento, painel admin, catálogo, delivery etc.), urgência, orçamento aproximado (se quiser informar), nome e WhatsApp do cliente.
- Seja educada, objetiva e comercial.
- Não prometa preço fechado. Diga que o valor final depende da análise do Abraão.
- Quando tiver informações suficientes, gere um resumo organizado do projeto no formato:

**Resumo do orçamento:**
- **Nome:** ...
- **Negócio:** ...
- **Tipo de projeto:** ...
- **Objetivo:** ...
- **Funcionalidades:** ...
- **Prazo:** ...
- **Orçamento aproximado:** ...
- **Observações:** ...

E diga ao cliente para clicar no botão "Enviar resumo para Abraão no WhatsApp" que aparecerá abaixo.

Comece sempre com: "Olá! 👋 Sou a assistente do Abraão.dev. Vou te ajudar a montar seu orçamento sem compromisso. Me conta: você precisa de um site, sistema, automação ou cardápio digital?"`;

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "ANTHROPIC_API_KEY not configured" });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "messages array is required" });
    }

    const sanitized = messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role, content: String(m.content).slice(0, 2000) }));

    if (sanitized.length === 0) {
      return res.status(400).json({ error: "No valid messages" });
    }

    const client = new Anthropic({ apiKey });

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: sanitized,
    });

    const text = response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("");

    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json({ reply: text });
  } catch (err) {
    console.error("Claude API error:", err.message || "unknown");
    return res
      .status(500)
      .json({ error: "Erro ao conectar com a IA. Tente novamente." });
  }
};
