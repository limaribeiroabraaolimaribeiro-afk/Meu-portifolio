# dev.abraao — prévia cinematográfica

Nova versão na branch `feat/portfolio-3d-preview`, em rascunho para aprovação. **Não integrar com `master` nem publicar no domínio principal antes da aprovação de Abraão.**

## Abrir a experiência

`preview/portfolio-3d.html` é uma versão portátil, com fontes, scripts e imagens incorporados. Abra em um navegador e role normalmente. O arquivo não depende de servidor nem de CDN. Os links externos continuam apontando para os projetos e para o contato existente. O assistente informa que a IA não está disponível nessa prévia e oferece a continuação pelo WhatsApp; nenhuma mensagem é enviada automaticamente.

A prévia da branch no Vercel pode exigir acesso à conta do proprietário. Não foi alterada a proteção de acesso, o domínio, o deploy de produção ou a configuração da API.

## O que mudou

O cubo laranja conduz uma história contínua: bloqueio → diagnóstico → conexão → experiências reais → estruturas alinhadas. A rolagem nativa controla câmera, posição, organização dos blocos, abertura do caminho, luz e formação da interface. Não há sequestro do gesto de toque.

Os quatro cases seguem problema, ideia, solução e experiência: Day Lanches, Smart Billingg, Nexa Story e Anarosa. As telas de Day Lanches e Anarosa são capturas dos sites; Smart usa componentes reais em demonstração local sem dados de clientes. Nexa usa a apresentação já existente no repositório, identificada como acervo, pois a versão atual solicita cadastro. Recursos foram conferidos no código disponível. Nenhuma métrica de negócio foi inventada.

Os sete projetos da configuração original continuam no arquivo de projetos, com filtros e links. WhatsApp, e-mail, redes, FAQ e assistente foram preservados. O prompt comercial do assistente passou a começar pelo problema, mantendo a rota, o contrato e o provedor da API existente.

## Desenvolvimento

```sh
npm ci
npm run build:all
npm run check:director
npm run preview:bundle
npm run preview:prepare
```

O projeto original é estático; foi mantido assim. Three.js e GSAP operam sem introduzir um framework ou bibliotecas de animação duplicadas. Os bundles são versionados para a hospedagem atual. Não foi criado um script `build` padrão que altere o comportamento do Vercel.

- `scripts/render-page.py`: gera HTML semântico completo, incluindo os cases e os sete projetos.
- `data/cases.json`: conteúdo e evidências dos cases.
- `js/animations/director.js`: relógio GSAP, estados e interpolação determinística nos dois sentidos.
- `js/scene.js`: mundo Three.js, câmera, materiais e carregamento progressivo das telas.
- `js/software-renderer.js`: projeção Canvas para ambientes sem WebGL.
- `js/lib/`: rolagem, qualidade e métricas locais.
- `js/portfolio.js`: navegação, preferências, filtros, contato e assistente.
- `scripts/templates/dialog.html`: estrutura do diálogo existente.

## Acesso e performance

O conteúdo principal está no DOM; existe um H1 e hierarquia de títulos. Canonical, sitemap, robots, Open Graph, Twitter e Person schema estão presentes. Fontes são locais e imagens estão em WebP. Nenhum modelo 3D pesado ou áudio é carregado.

Há qualidade automática e modos alta/média/leve, com limite de DPR e redução de geometria. A renderização pausa com a aba oculta e fora da experiência. A meta de WebGL é 60 FPS em alta/média e 30 FPS no modo leve; a alternativa Canvas limita a 30 FPS. **Esses limites são metas, não resultados comprovados em celular físico.**

O sistema respeita `prefers-reduced-motion`; também há um modo de leitura escolhido pelo visitante. Sem animação, os quatro cases mostram imagens e conteúdo integral. A navegação funciona por teclado, com foco visível, link de salto e diálogo nativo. Se a renderização não estiver disponível, o conteúdo continua em HTML.

## Validação e limites

As oito larguras pedidas foram verificadas: 360, 390, 412, 430, 768, 1366, 1440 e 1920 px. Não houve estouro horizontal na matriz. Menu, teclado/Escape, filtros, FAQ, qualidade, movimento reduzido, contato e o comportamento offline do assistente foram revisados. A timeline tem uma verificação de ida, volta e salto direto.

O navegador de revisão não oferece WebGL; portanto as capturas mostram a alternativa Canvas. Os dados de LCP/CLS e tempos de quadro em `docs/` são amostras de laboratório local, sem simular rede móvel. A amostragem de FPS nesta sessão foi irregular e não comprova fluidez em aparelho real. A aparência por GPU, os Core Web Vitals de campo e o teste em celular físico permanecem pendentes antes da produção. A API real de IA não foi chamada e nenhuma compra ou mensagem foi enviada.

O relatório técnico está em `docs/IMPLEMENTACAO-3D.md`.
