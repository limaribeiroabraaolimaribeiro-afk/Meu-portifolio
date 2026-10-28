# Investigação cinematográfica

Revisão dirigida pela gravação mobile enviada pelo proprietário. Substitui o diagrama frontal por um cenário procedural com três plataformas, níveis de base, placas chanfradas, trilhos duplos, suportes, torres, aletas, indicadores e comportas. O cubo premium atravessa o cenário e faz pausas nos pontos de falha. Cada pausa corresponde a uma situação de negócio descrita no HTML.

Scroll sincroniza câmera em órbita, aproximação gradual, deslocamento do cubo, abertura parcial do objeto e três legendas narrativas. Apenas o canal em investigação mantém tráfego intenso; os sinais desaparecem antes de atravessar a falha. Nenhuma lacuna é reparada nesta cena. A conclusão prepara o diagnóstico. Sem controles de player, áudio ou autoplay de vídeo.

A página mantém o creme como base e contém a iluminação escura em um cenário delimitado. A cena usa o renderizador e Three.js existentes. Detalhes repetidos e sinais usam instancing, materiais compartilhados, geometria reduzida no LOW/Canvas e DPR/FPS conforme o sistema de qualidade existente. Luz de piso em WebGL usa textura procedural de 64 × 64, sem bloom, shadow maps ou download de HDR/modelos. Meshes limitadas a menos de 200; todos os recursos são descartados.

Movimento reduzido e ausência de JS preservam ilustração vetorial e três relações de negócio no DOM. A narrativa usa section sticky adaptada ao celular, sem interceptar eventos de toque/scroll.

Validação: builds completos; testes existentes da timeline; check-cinematic-problem.mjs para continuidade, pausas, reversão, limites, preservação de lacunas, matrizes e descarte nas geometrias WebGL/Canvas; sintaxe e diff. Inspeção em desktop e iframes mobile 360/390/430 px, sem overflow e com as três fases alcançáveis. Saída para diagnóstico conferida; modo reduzido conferido. Ambiente remoto sem WebGL: inspeção visual em Canvas, sem promessa de 60 FPS em GPU física. Bundle de cena aproximadamente 594 KB minificado, sem novos assets remotos. Backend, orçamento com IA, WhatsApp e SEO preservados.
