# Implementação e revisão da nova versão

## Base preservada

A análise partiu do commit de produção `69959dea9918509978383ab9c4ac6a2f57b7c9a1`, em `master`, e do primeiro rascunho `26391fcf733701f7d4ed913f3a1b7c66240fe069`.

A arquitetura original contém HTML, CSS, JavaScript sem framework, configuração central em `js/projects-config.js`, imagens, `api/chat.js` com SDK Anthropic e `vercel.json` com duração da função. Não existe roteador de aplicação que precise ser migrado. A atualização preserva a estrutura de hospedagem estática, a rota `/api/chat`, o formato de entrada/saída, o número de WhatsApp, os contatos, o CNAME, robots e sitemap. As imagens antigas foram mantidas.

Os sete projetos originais são renderizados em HTML e continuam filtráveis. Depoimentos e fotografias genéricas sem comprovação não são apresentados. O novo conteúdo não atribui percentuais, vendas ou faturamento a projetos. O nome público Nexa Story foi preservado, em vez de substituir a marca por “Nexa Store”.

## Direção e implementação

Paleta: `#111111`, `#F4F0E8`, laranja original `#ff7a00`. Manrope e Space Grotesk são locais. O cubo é o protagonista: encontra um bloqueio, aproxima-se do diagnóstico e conduz o alinhamento das estruturas e a construção de um caminho. Os blocos possuem posições finais distintas e um corredor central livre.

Uma cena acompanha o filme inteiro. GSAP fornece um relógio pausado controlado pela posição nativa do documento. Estados numéricos e easing compõem câmera, cubo, organização, passagem, caminho, interface e luz. A interpolação é determinística para rolagem reversa e saltos do menu, verificada em `scripts/check-director.mjs`. Não há Lenis, Framer Motion ou React adicionados sem necessidade.

Cada case tem quatro momentos de texto no DOM. A mesma superfície 3D recebe a apresentação do projeto e muda de escala, rotação e enquadramento. As próximas texturas são carregadas conforme o visitante se aproxima. O diagnóstico reduz o deslocamento; o final alinha a estrutura. A seção humana usa a fotografia original. O CTA preserva o WhatsApp existente e faz uma pergunta sobre a rotina do negócio.

## Evidências dos cases

| Case | Conteúdo conferido | Visual |
| --- | --- | --- |
| Day Lanches | `index.html`, cardápio, carrinho, endereço/localização e checkout InfinitePay | Captura do site público, categoria Hambúrguer. Estado de atendimento e valores são os do site no momento da captura. |
| Smart Billingg | `index.html`, `recibos.html`, `cobranca-publica.js`, `receipt-pdf.js` | Componentes reais de layout e painel, montados localmente sem scripts de rede. Valores substituídos por “—”, sem dados de clientes. |
| Nexa Story | Configuração original e JavaScript público `comandosjs.js?v=20260529e`; funções de checkout, Pix e consulta de pedidos | Apresentação do acervo existente. A loja atual solicita cadastro; não houve login nem transação. O visual é identificado como acervo. |
| Anarosa | README, `catalog-service.js`, `cart-service.js`; catálogo, busca, variações e carrinho | Captura do catálogo público. Não se afirma homologação de integrações de pagamento ou resultados comerciais. |

Hashes das fontes consultadas estão em `source-review.json`. O escopo da implementação não inclui mudanças nesses projetos ou acesso aos seus bancos.

## Performance e acessibilidade

Geometria procedural compartilhada, sem modelos externos, HDR, pós-processamento, nuvens de partículas ou áudio. Texturas WebP de 1200 × 824. DPR limitado em 1,6 / 1,25 / 1. Quantidade de blocos e taxa de renderização variam por qualidade. Geometrias, materiais, texturas, observadores e timeline são liberados ao sair da página; sessões em bfcache são preservadas.

WebGL tem materiais foscos, luz de recorte e sombra suave com textura procedural pequena. Canvas usa caixas simples e projeção da geometria com iluminação por face. É uma alternativa visual, não uma confirmação de renderização por GPU. Na ausência de ambas as opções, a página oferece a versão estática com texto e imagens.

Há renderização suspensa fora do filme e em aba oculta; o Canvas é limitado a 30 FPS. A sessão de navegador remoto registrou FPS irregular em repouso, embora o custo de desenho observado tenha sido de poucos milissegundos. Esse ambiente não permite concluir a taxa sustentada em dispositivo real. A meta de 60 FPS precisa ser homologada em WebGL em aparelho compatível.

O menu usa foco controlado e conteúdo de fundo inerte; Escape fecha. O diálogo é nativo, restaura o foco e trata texto do visitante/provedor como texto simples. Alvos interativos têm pelo menos 44 px. O modo de leitura mantém os quatro cases com imagens. `prefers-reduced-motion` define a experiência inicial. A troca manual de modo recarrega a página para não mudar o comprimento da história no meio da leitura.

## Verificações

- Build dos dois bundles e verificação sintática da função existente.
- Verificação automatizada da timeline: avanço, retorno e salto direto para o mesmo estado.
- Matriz de 360 / 390 / 412 / 430 / 768 / 1366 / 1440 / 1920 px: H1 único, 4 cases, 7 projetos, imagens sem erro e ausência de overflow horizontal.
- Inspeção visual das aberturas, case móvel em 360 px e case/CTA no desktop.
- Menu/Escape, links de âncora, filtros, FAQ, preferência de qualidade e movimento reduzido.
- Prévia portátil sem dependências locais externas e comportamento offline do assistente.
- LCP, CLS, INP, tamanho comprimido dos bundles e amostras de tempo de quadro documentados. Não são medidas de campo.

## Pendências antes de produção

Revisão visual e aprovação de Abraão; teste em celular físico com WebGL, inclusive retorno do Instagram e memória; medição sustentada de FPS e Core Web Vitals com rede móvel; chamada real à API em preview autenticado com a configuração existente. Não foi feito merge, troca de domínio ou deploy de produção.
