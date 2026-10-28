# Prévia — do cubo ao retrato

Estudo isolado em `preview/cubo-retrato.html`. A página inicial, API, WhatsApp e deploy de produção não foram alterados.

Sequência: cubo premium → separação → enxame com oscilação vertical e órbitas → silhueta baseada no alpha da foto real → revelação do retrato original → continuação conceitual do diagnóstico.

Scroll nativo, barra de progresso, etapas com botões e sequência opcional de 14 segundos. O movimento respeita a preferência de movimento reduzido; nesse modo a narrativa alterna entre cubo e retrato. A foto existente é reutilizada sem geração de identidade ou edição.

GPU: instancing, 896 peças em desktop / 448 mobile, DPR limitado a 1,6 / 1,25. Fallback Canvas: 448 peças e cadência limitada a 24fps; sem Canvas, retrato estático. Nenhum asset externo, áudio ou requisição de API. Recursos são descartados no pagehide e frames pausam fora da seção ou em aba oculta.

Gerar: `python scripts/build-portrait-preview.py` (requer dependências existentes e Pillow). Saída HTML independente de aproximadamente 777 KB, incluindo foto e fonte. Meta noindex/nofollow.

Validação: sintaxe JS, build, diff, navegação entre etapas no desktop e em iframe mobile 390 × 844. O ambiente remoto não oferece WebGL: a inspeção usa fallback Canvas; FPS sustentado em celular físico ainda não foi medido.

## Integração aprovada na home

Após aprovação expressa do proprietário, a abertura substitui a primeira cena da home. `portrait-motion.js` exporta a inicialização, importada por `scene.js`: a home usa um único bundle com Three.js compartilhado. O renderizador da abertura pausa fora do viewport. A foto é um asset local reutilizado, as amostras da silhueta são embutidas no HTML, sem chamadas externas.

CSS isolado em `css/portrait-opening.css`; texto inicial, H1 e CTAs existem no HTML. Movimento reduzido mostra retrato estático e mantém navegação/contato. Assistente flutuante fica oculto apenas enquanto a abertura ocupa a tela, evitando sobreposição com os controles; contato e CTA continuam disponíveis. Novas URLs de assets invalidam o cache anterior. O SEO e o backend existentes são preservados.

Build completo, teste da timeline, sintaxe e diff passaram. Home integrada conferida em desktop e iframe mobile de 390 × 844, incluindo escolha do retrato e navegação à esfera da cena seguinte. Inspeção remota em Canvas; sem comprovação de 60 FPS em GPU física.
