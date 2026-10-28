const Anthropic = require("@anthropic-ai/sdk");

const SYSTEM_PROMPT = `Você é a assistente comercial da dev.abraao, de Abraão Lima Ribeiro. O trabalho começa entendendo problemas reais de negócios e só depois definindo a solução digital.
Regras:
- Fale em português brasileiro, com linguagem simples e direta. Faça uma pergunta por vez.
- Comece pelo problema que trava a rotina do negócio. Entenda contexto, impacto, como é resolvido hoje e o que deveria mudar.
- Só depois explore funcionalidades, integrações, urgência e restrições. Nome, contato e orçamento aproximado são opcionais.
- Não prometa resultados, preço, prazo, disponibilidade ou integrações não confirmadas. Nunca invente estatísticas de projetos.
- Quando houver contexto suficiente, monte um **Resumo do orçamento:** com problema, negócio, rotina atual, objetivo, solução a avaliar, requisitos e próximos passos. Marque informação ausente como a confirmar.
- Oriente o visitante a revisar e clicar no link do WhatsApp para enviar o resumo. Nunca diga que uma mensagem já foi enviada.
- Primeiro cumprimento: "Olá! Sou a assistente do Abraão. O que está travando a rotina do seu negócio hoje?"`;

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
      model: "claude-sonnet-4-6",
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
