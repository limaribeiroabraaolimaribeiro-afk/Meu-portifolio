# Estudo isolado do cubo e SEO

A nova direção visual é uma peça modular sem rosto ou membros. O acabamento combina laranja acetinado, chanfros discretos, painéis e marcação mínima. O usuário pode pausar, girar com teclado/slider ou arrastar, abrir os painéis e recompor. O render principal usa Three.js, materiais físicos e ambiente procedural; não depende de HDR, modelos ou imagens remotas. A abertura do estudo respeita prefers-reduced-motion. Dispositivos sem WebGL recebem uma versão CSS 3D com os mesmos controles.

O cubo da página principal permanece igual ao publicado. O estudo não foi integrado ao scroll da home.

- Prévia autocontida: `preview/cubo-premium.html`.
- Fonte da apresentação: `scripts/templates/cube-study.html`.
- Cena: `js/three/premium-study.js`.
- Gerar novamente: `npm run preview:cube`.
- Capturas desta revisão mostram CSS 3D: o navegador remoto não fornece WebGL. Iluminação física no aparelho deve ser conferida no preview.

## SEO implementado

Título comercial da home, descrição mais direta e entidades Person/WebSite relacionadas por IDs. Três páginas de serviço e quatro cases com HTML completo, descrição própria, canonical, OG/Twitter, navegação, breadcrumbs e dados estruturados. Serviços incluem Service com o profissional como provider. O conteúdo dos cases vem de `data/cases.json`, preservando limites, imagens reais/demonstrações e a distinção Nexa Store/Nexa Story. Nenhuma estatística ou endereço comercial foi criado.

Links da home permitem descobrir as sete páginas; o sitemap contém oito URLs. Os estudos de preview usam noindex. Não houve solicitação de indexação, validação em conta do Search Console ou afirmação de posição no Google.

`npm run build:all` também regenera as páginas SEO. `docs/premium-seo-review.json` registra a validação de H1, IDs, canonical, links e JSON-LD das oito páginas. `docs/cube-viewport-results.json` registra larguras e controles. WhatsApp, API, configurações de deploy e a cena principal permanecem iguais à produção anterior.
