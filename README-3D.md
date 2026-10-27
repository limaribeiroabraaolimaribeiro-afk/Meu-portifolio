# dev.abraao — V2 clara em preview

Nova experiência na branch `feat/portfolio-3d-preview`, aguardando revisão de Abraão. **Não integrar com `master` nem publicar no domínio principal antes da aprovação.**

## Abrir a experiência

`preview/portfolio-3d.html` contém fontes, scripts e imagens incorporados. Abra em um navegador e role normalmente; não depende de servidor nem de CDN. Links externos levam aos projetos e contatos existentes. Neste arquivo portátil, o assistente explica que a IA depende do ambiente Vercel e prepara a continuação pelo WhatsApp, sem enviar mensagens automaticamente.

O preview da branch no Vercel pode exigir acesso à conta do proprietário. A proteção de acesso, o domínio e a configuração da API foram preservados.

## Direção da V2

Creme e branco predominantes, preto para contraste, laranja original `#ff7a00`. O personagem é um cubo com expressão discreta e membros mecânicos: acompanha a rolagem, investiga o caos, se divide em microcubos, forma esfera e ponte, se recompõe e segue até uma saída iluminada. Não é o logotipo.

Onze capítulos conectam problema, diagnóstico, transformação, soluções, projetos, processo, IA, pessoa, resultado e contato. A abertura apresenta os dois CTAs. O diagnóstico inclui grade e wireframe. A transformação tem cinco fases controladas por scroll e botões acessíveis. Seis soluções usam cards claros; no celular há rolagem lateral nativa. Quatro cases têm abas de problema, solução e experiência. A timeline do processo passa de horizontal para vertical no celular, com o personagem acompanhando as etapas. A foto fornecida de Abraão é utilizada sem alterar sua aparência.

Day Lanches, Smart Billingg, Anarosa e Nexa Store usam conteúdo conferido. As apresentações fornecidas estão identificadas como apresentações visuais; capturas reais ou de acervo ficam disponíveis na aba Experiência. O Smart usa componentes reais em demonstração sem dados de clientes; a imagem fornecida com números comerciais não foi usada. Nenhuma métrica de negócio foi inventada.

Nexa Store é o nome solicitado no novo briefing. O arquivo original Nexa Story e seu endereço existente foram preservados; não se afirma que a loja publicada foi renomeada. Os sete projetos originais continuam no arquivo filtrável.

WhatsApp, e-mail, redes, FAQ e assistente permanecem disponíveis. Esta revisão não modifica `api/chat.js`, `js/projects-config.js`, `vercel.json`, CNAME, robots ou sitemap.

## Desenvolvimento

```sh
npm ci
npm run build:all
npm run check:director
npm run preview:bundle
npm run preview:prepare
```

A arquitetura estática original foi mantida. Three.js e GSAP já estavam na branch; não foram adicionados React, Lenis ou bibliotecas duplicadas. Os bundles são versionados para a hospedagem atual. Não foi criado um script `build` padrão que altere o comportamento do Vercel.

- `scripts/render-page.py` e `scripts/templates/`: HTML semântico, metadados e diálogo.
- `data/cases.json`: conteúdo, imagens e evidências dos cases.
- `js/animations/director.js`: relógio GSAP e direção reversível da cena.
- `js/animations/scroll-ui.js`: capítulos, fases e coordenadas da timeline responsiva.
- `js/three/morph-targets.js`: formações determinísticas compartilhadas pelo WebGL e Canvas.
- `js/scene.js`: personagem, instâncias, câmera, caminho, wireframe, rede e saída.
- `js/software-renderer.js`: alternativa Canvas, inclusive InstancedMesh.
- `js/lib/`: qualidade, métricas, abas e microinterações.
- `js/portfolio.js`: navegação, preferências, contato e assistente.

## Acesso e performance

Todo o conteúdo principal está no DOM, com H1 único e hierarquia de títulos. Canonical, Open Graph, Twitter, Person schema, sitemap, robots e alt texts foram preservados/verificados. Fontes locais e WebP; nenhum modelo externo, HDR, pós-processamento ou áudio.

Qualidade alta/média/leve limita DPR a 1,6/1,25/1 e instâncias a 125/64/27. O fallback Canvas usa 27 instâncias e no máximo oito blocos de contexto. A renderização pausa fora do filme e em aba oculta. A meta é 60 FPS no WebGL alta/média; modo leve e Canvas limitam a 30 FPS. Esses limites não são resultados comprovados em celular físico.

`prefers-reduced-motion` define o modo inicial; o visitante também pode escolher o modo de leitura. Sem renderização, texto, cards, retrato, imagens e contato continuam disponíveis. Menu com foco controlado e Escape, diálogo nativo com foco restaurado, tabs por teclado e alvos de pelo menos 44 px.

## Validação e limites

360, 390, 412, 430, 768, 1366, 1440 e 1920 px: nenhum overflow horizontal, quatro cases, seis soluções e sete projetos preservados. Build, sintaxe, estados do morph, retorno e saltos diretos passaram. Menu/Escape, abas por teclado, passagem entre cases, filtros, FAQ, movimento reduzido e fallback offline do assistente foram conferidos.

O navegador remoto tem WebGL desativado: as capturas são da alternativa Canvas. O HTML portátil registrou LCP local de 212 ms e CLS de 0,002, sem rede móvel simulada. O compositor remoto operou perto de 1 FPS e registrou INP de 7.712 ms, com 12 ms de atraso de entrada e 0 ms de processamento; essa amostra não comprova desempenho em aparelho real. Os valores brutos estão em `docs/interaction-results.json`.

Ainda precisam de homologação antes da produção: WebGL/GPU, celular físico, FPS sustentado, Core Web Vitals em rede móvel e chamada real à API autenticada do preview. Não houve merge, troca de domínio, envio de mensagem, transação ou publicação em produção.

Relatório: `docs/IMPLEMENTACAO-3D.md`. Capturas atuais: `preview/portfolio-desktop.jpg`, `portfolio-mobile.jpg`, `portfolio-morph.jpg`, `portfolio-case.jpg`, `portfolio-sobre.jpg` e `portfolio-contato.jpg`.
