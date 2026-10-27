# Implementação e revisão da V2 clara

## Auditoria e preservação

A base de produção analisada foi `69959dea9918509978383ab9c4ac6a2f57b7c9a1`, em `master`. A revisão clara parte da branch de preview existente no commit `2448eca7ee4c3cf44ad11d37eb3e3b8c7d0227f9`.

O repositório original usa HTML, CSS e JavaScript sem framework, configuração central em `js/projects-config.js`, imagens, `api/chat.js` com SDK Anthropic e `vercel.json` com duração da função. Não existe roteador de aplicação a migrar. A V2 preserva hospedagem estática, `/api/chat`, contrato de entrada/saída, WhatsApp `5547992101675`, contatos, CNAME, robots e sitemap. Esses arquivos de integração não foram modificados nesta revisão. Todas as imagens anteriores foram mantidas.

Os sete projetos originais são HTML renderizado previamente e continuam filtráveis. Fotografias genéricas, depoimentos e estatísticas sem comprovação não foram incorporados. O briefing mais recente muda a direção para branco/creme e solicita o nome Nexa Store; o case usa esse nome, enquanto a referência e URL existentes de Nexa Story continuam no arquivo. Não se afirma uma mudança factual na loja publicada.

## Direção e arquitetura

A paleta utiliza creme `#F4F0E8`, branco quente, grafite e laranja original `#ff7a00`. Manrope e Space Grotesk são locais. A maior parte do site é clara; diagnóstico, IA e encerramento usam preto para contraste. Não há áudio nem carregamento bloqueante.

Uma única cena procedural acompanha onze capítulos. A rolagem nativa controla o relógio GSAP, que interpola câmera, personagem, organização, forma, caminho e luz. Não há scroll hijacking. Estados são determinísticos e reversíveis; o menu pode saltar diretamente para qualquer capítulo. A UI calcula as coordenadas reais dos nós da timeline para posicionar o personagem no desktop e no celular.

O personagem tem cubo arredondado, olhos neutros e membros mecânicos. A caminhada depende da rolagem. Uma InstancedMesh reutiliza microcubos para caos → dispersão → esfera → ponte → cubo estável. A esfera sólida cresce enquanto os microcubos recuam. Uma grade wireframe materializa o diagnóstico. A rede de IA conecta pontos sem representar robô ou cérebro. O caminho curvo laranja termina em uma saída iluminada.

As seis soluções e os quatro cases ficam em HTML. No celular, usam rolagem lateral nativa com snap. Cases possuem abas ARIA e teclas de seta/Home/End; a aba Solução mostra o fluxo, e Experiência permite consultar a interface real/acervo e os links existentes. Cards recebem inclinação discreta somente com ponteiro preciso e movimento permitido. O retrato real fornecido foi recortado apenas pelo layout e comprimido com transparência preservada.

## Fontes e imagens dos cases

| Case | Evidência conferida | Apresentação desta V2 |
| --- | --- | --- |
| Day Lanches | `index.html`, cardápio, carrinho, endereço/localização e checkout InfinitePay | Capa fornecida identificada como apresentação visual; captura real disponível na aba Experiência. |
| Smart Billingg | `index.html`, `recibos.html`, `cobranca-publica.js`, `receipt-pdf.js` | Componentes reais de layout e painel montados localmente, sem scripts de rede. Valores comerciais substituídos por “—”. A imagem fornecida com R$ 12.480 e percentuais não foi usada. |
| Anarosa | README, `catalog-service.js`, `cart-service.js`; catálogo, busca, variações e carrinho | Capa fornecida identificada como apresentação visual; captura do catálogo disponível. Não se afirma homologação de pagamentos nem aumento de conversão. |
| Nexa Store / arquivo Nexa Story | Configuração original e JavaScript público `comandosjs.js?v=20260529e`; checkout, Pix e consulta de pedidos | Capa fornecida identificada como apresentação visual. Acervo e endereço anteriores preservados. Não se afirmam produtos, marca atual ou resultados a partir da capa. |

Hashes da auditoria anterior permanecem em `source-review.json`. Nenhum banco de dados de cliente foi acessado e nenhum desses projetos foi alterado.

## Orçamento, SEO e acessibilidade

O diálogo e o controlador do assistente foram mantidos em templates separados. A página usa a mesma rota e provedor; a revisão não altera a função existente. Mensagens continuam sendo texto simples. O arquivo portátil não chama o provedor e oferece link do WhatsApp com o problema preenchido. Nenhuma mensagem é enviada automaticamente.

H1 único, hierarquia, IDs sem duplicatas, metadados, canonical, Open Graph, Twitter, Person schema, arquivos locais e alt texts foram verificados. O texto principal não depende do Canvas. O menu usa foco controlado, fundo inerte e Escape; o diálogo nativo restaura o foco. Áreas de toque têm pelo menos 44 px. O modo reduzido remove a cena e os trechos fixos, preservando leitura, imagens, abas e contato.

## Orçamento técnico e medições

Nenhum modelo 3D, HDR, textura remota ou pós-processamento. Recursos geométricos compartilhados, instancing, textura procedural pequena de sombra e imagens WebP. DPR máximo: alta 1,6; média 1,25; leve 1. Quantidade de microcubos: 125/64/27. Canvas reduz para 27 e oito blocos de contexto; limita a 30 FPS. Renderização suspensa fora da experiência e com aba oculta. Recursos, observers e timeline são liberados ao sair, respeitando bfcache.

Bundles gzip: app 6.728 bytes e cena 159.966 bytes. A cena carrega depois do HTML, sem bloquear a leitura. Os quatro novos WebPs somam 323.784 bytes. O preview portátil completo possui 1.748.707 bytes, incluindo fontes, scripts e imagens. Os detalhes de todos os arquivos estão em `performance-budget.json`.

A matriz de oito larguras passou sem overflow: 360, 390, 412, 430, 768, 1366, 1440 e 1920 px. Todos mantêm H1 único, quatro cases, seis soluções, sete projetos e nenhuma imagem carregada com erro. Os resultados estruturais estão em `viewport-results.json`.

No HTML portátil local, LCP 212 ms e CLS 0,002. A sessão remota não tem WebGL e o compositor ficou próximo de 1 FPS. INP bruto 7.712 ms, atraso de entrada 12 ms e processamento 0 ms; a espera de apresentação domina a amostra. Esses números não demonstram fluidez ou Core Web Vitals de celular real. Não se reivindica a meta de 60 FPS como atingida. `interaction-results.json` conserva os dados e os limites de interpretação.

## Verificações realizadas

- Builds dos bundles e HTML; sintaxe dos bundles e da função existente; diff sem problemas de whitespace.
- Formações de 27/64/125 instâncias, posições únicas, valores finitos, raio da esfera, cinco fases e equivalência de avanço/retorno/salto direto.
- Matriz responsiva e inspeção visual do hero desktop/mobile, esfera mobile, ponte, timeline vertical, cases, retrato e CTA final.
- Menu/Escape e fundo inerte; abas por teclado; controle lateral entre cases; filtro do arquivo; FAQ; modo reduzido e restauração de animação.
- Diálogo, restauração de foco, envio no modo portátil, mensagem de indisponibilidade da IA e WhatsApp preenchido.
- HTML portátil autocontido e `noindex`; integrações existentes sem alterações nesta revisão.

## Antes de produção

Aprovação visual de Abraão; teste em celular físico, inclusive navegador do Instagram; WebGL/GPU e FPS sustentado; Core Web Vitals em rede móvel; chamada real ao assistente no preview autenticado. O preview não é uma declaração de homologação desses pontos. Não houve merge, troca de domínio ou deploy de produção.
