# Prévia do portfólio 3D

Novo layout de apresentação para Abraão Dev, preparado na branch `feat/portfolio-3d-preview` para avaliação antes de qualquer integração com `master`.

## Experiência

- Escultura 3D original na abertura; a rolagem nativa conduz a transição para site, painel de gestão e fluxo de automação.
- Cenas em Three.js com alternativa de projeção da mesma geometria em Canvas quando WebGL não está disponível.
- Celular com composição própria; menu acessível, filtros dos sete projetos existentes, FAQ, WhatsApp e assistente de projetos.
- Fotografias e apresentações dos projetos do repositório, otimizadas em WebP. Fontes locais e geometria procedural: a página não depende de CDNs.
- Preferência de movimento reduzido do sistema e botão para alternar, com conteúdo completo em formato estático. Renderização pausada fora da experiência e quando a aba está oculta.
- Ilustrações de sistemas sem captura existente são identificadas como visuais ilustrativos. Depoimentos e métricas sem comprovação não fazem parte da nova apresentação.

## Desenvolvimento

```sh
npm ci
npm run build:scene
npm run preview:bundle
```

O arquivo `preview/portfolio-3d.html` reúne HTML, estilos, scripts, fontes e imagens. Pode ser aberto diretamente em um navegador para avaliação, sem servidor. Nessa versão, o assistente informa que a IA não está disponível e oferece a continuação pelo WhatsApp. Nenhuma mensagem é enviada automaticamente.

O site usa `js/projects-config.js` como fonte dos contatos, textos e links existentes. Os metadados de categorias e a ordem da seleção visual estão em `js/portfolio.js`. O código 3D está em `js/scene.js`; a alternativa Canvas, em `js/software-renderer.js`. `js/scene.bundle.js` é gerado e versionado para manter a hospedagem estática atual.

Para a prévia interna com Sites, `npm run preview:prepare` cria o diretório ignorado `dist/` e o manifesto local. Nenhum ID de Site, publicação ou troca de domínio é necessário.

## Validação e limites

- Build do bundle e verificação de sintaxe dos scripts.
- Navegação, mudança dos capítulos na rolagem, filtros, menu móvel, abertura e fechamento do diálogo, FAQ e movimento reduzido verificados no navegador.
- Layout inspecionado em desktop e em viewport de 390 × 844 dentro de iframe. Isso não substitui um teste em aparelho físico.
- O navegador de teste não oferece WebGL. A alternativa Canvas foi inspecionada nas cenas; a aparência e a performance da renderização por GPU ainda precisam de validação em dispositivo compatível.
- `api/chat.js` e sua configuração permanecem como no repositório original. A chamada real ao provedor de IA não foi executada nesta avaliação.
- O arquivo portátil tem `noindex`; os metadados indexáveis do site principal são preservados.

## Produção

Não foi feito merge nem publicação em produção. A aprovação visual deve acontecer antes de integrar a branch. Na etapa de publicação, confirmar a prévia no aparelho do usuário e a hospedagem da API existente.
