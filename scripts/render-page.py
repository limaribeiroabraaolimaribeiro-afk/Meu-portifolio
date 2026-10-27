"""Render all narrative and original archive content into semantic, indexable HTML."""
from pathlib import Path
import json,html,subprocess
ROOT=Path(__file__).resolve().parents[1]
esc=html.escape
cases=json.loads((ROOT/'data/cases.json').read_text())
projects=json.loads(subprocess.check_output(['node','-e',"const fs=require('fs'),vm=require('vm'); const c={};vm.createContext(c);vm.runInContext(fs.readFileSync('js/projects-config.js','utf8')+'; globalThis.result=PROJECTS;',c);console.log(JSON.stringify(c.result))"],cwd=ROOT))
def beat(id,title,kicker='',body='',extra='',cls='',chapter=None):
    heading='h1' if id=='inicio' else 'h2'
    return f'<section class="beat {cls}" id="{id}" data-chapter="{chapter or id}" aria-labelledby="{id}-title"><div class="beat-pin"><div class="copy"><p class="eyebrow">{kicker}</p><{heading} id="{id}-title">{title}</{heading}>{f"<p class=lead>{body}</p>" if body else ""}{extra}</div></div></section>'
film=[]
film.append(beat('inicio','SEU NEGÓCIO<br>TEM UM<br><span class="orange">PROBLEMA?</span>','DEV.ABRAAO / SOLUÇÕES DIGITAIS',extra='<a class="scroll-cue" href="#solucao"><span class="scroll-line"></span>DESLIZE PARA DESCOBRIR <span>↓</span></a>',cls='hero'))
film.append(beat('solucao','EU TRANSFORMO<br>EM SOLUÇÃO<br><span class="orange">DIGITAL.</span>','01 / O PONTO DE PARTIDA'))
film.append(beat('problema','TODO NEGÓCIO<br>TEM ALGO QUE<br>PODERIA FUNCIONAR<br><span class="orange">MELHOR.</span>','02 / O QUE ESTÁ TRAVANDO','Informações soltas. Caminhos interrompidos. Uma rotina que pede uma solução.'))
film.append(beat('diagnostico','TECNOLOGIA<br>NÃO COMEÇA<br>NO CÓDIGO.','03 / ANTES DE CONSTRUIR'))
film.append(beat('entender','COMEÇA<br>ENTENDENDO<br><span class="orange">O PROBLEMA.</span>','03 / OLHAR MAIS DE PERTO'))
film.append(beat('transformacao','A SOLUÇÃO<br>GANHA <span class="orange">FORMA.</span>','04 / CONECTAR O QUE IMPORTA','A ferramenta vem depois. O caminho começa no que seu negócio precisa resolver.',extra='<ol class="solution-words" aria-label="Soluções possíveis"><li>Sites</li><li>Sistemas</li><li>Automações</li><li>Inteligência artificial</li><li>Integrações</li><li>Soluções sob medida</li></ol>'))
case_nav='<nav class="case-index" aria-label="Escolher um case">'+''.join(f'<a href="#{c["id"]}-problema"><span>0{i+1}</span>{esc(c["name"])}<span>↗</span></a>' for i,c in enumerate(cases))+'</nav>'
film.append(beat('projetos','PROBLEMAS REAIS.<br><span class="orange">CAMINHOS DIFERENTES.</span>','05 / TRABALHOS SELECIONADOS',extra=case_nav,cls='cases-intro'))
for i,c in enumerate(cases):
    film.append(f'<article class="case-story" data-case="{c["id"]}" aria-label="Case {esc(c["name"])}">')
    for j,p in enumerate(c['phases']):
        id=f'{c["id"]}-{["problema","ideia","solucao","experiencia"][j]}'
        links=''
        if j==3:
            if c['url']:links+=f'<a class="text-link" href="{esc(c["url"])}" target="_blank" rel="noopener noreferrer" data-cursor="Explorar">Explorar a experiência <span>↗</span></a>'
            if c['source']:links+=f'<a class="source-link" href="{esc(c["source"])}" target="_blank" rel="noopener noreferrer">Código do projeto ↗</a>'
        visual_note = '<p class=screen-note>'+('APRESENTAÇÃO DO ACERVO DO PROJETO' if c['id']=='nexa' else 'INTERFACE REAL · DEMONSTRAÇÃO SEM DADOS')+'</p>' if c['id'] in ['smart','nexa'] and j>=2 else ''
        flow='<ol class="case-flow" aria-label="Percurso da solução">'+''.join(f'<li style="--i:{k}" class="{"current" if k==min(len(c["flow"])-1,round(j*(len(c["flow"])-1)/3)) else ""}">{esc(v)}</li>' for k,v in enumerate(c['flow']))+'</ol>'
        fig=(f'<figure class="case-shot"><img src="{c["screen"]}" width="1200" height="824" loading="lazy" decoding="async" alt="Interface do projeto {esc(c["name"])}"><figcaption>{esc(c["note"])}</figcaption></figure>' if j==2 else '')
        film.append(f'<section class="beat case-beat" id="{id}" data-chapter="case-{c["id"]}-{j}" data-case-index="{i}" data-phase="{j}" aria-labelledby="{id}-title"><div class="beat-pin"><div class="copy"><p class="eyebrow"><span>0{i+1} / {esc(c["name"])}</span><span>{p["label"]}</span></p><h3 id="{id}-title">{p["title"]}</h3><p class="lead">{p["body"]}</p>{flow}{links}{visual_note}<span class="case-category">{c["category"]}</span></div>{fig}</div></section>')
    film.append('</article>')
film.append(beat('inteligencia','IA NÃO É<br>O PRODUTO.','06 / INTELIGÊNCIA COM PROPÓSITO','É uma ferramenta para resolver o problema certo. Conectando informação, atendimento e operação.'))
film.append(beat('sobre','EU NÃO COMEÇO<br>ESCOLHENDO<br>TECNOLOGIA.','07 / QUEM PENSA A SOLUÇÃO','Começo entendendo o que precisa ser resolvido.',extra='<div class="signature"><strong>Abraão Lima Ribeiro</strong><span>Desenvolvedor de soluções digitais.</span><a href="https://www.linkedin.com/in/abra%C3%A3o-lima-ribeiro-601987320" target="_blank" rel="noopener noreferrer">Mais sobre mim ↗</a></div>',cls='about-beat'))
film[-1]=film[-1].replace('</div></div></section>','</div><figure class="portrait"><img src="img/portrait.webp" alt="Abraão Lima Ribeiro" width="560" height="700" loading="lazy"><figcaption>UMA CONVERSA. UM PROBLEMA. UM CAMINHO.</figcaption></figure></div></section>')
film.append(beat('resolvido','PROBLEMA<br><span class="orange">RESOLVIDO.</span>','08 / TUDO ENCONTRA O SEU LUGAR'))
film.append(beat('evoluindo','NEGÓCIO<br><span class="orange">EVOLUINDO.</span>','08 / O PRÓXIMO PASSO'))
film.append(beat('contato','O QUE ESTÁ<br>TRAVANDO O SEU<br>NEGÓCIO HOJE?','A PRÓXIMA SOLUÇÃO COMEÇA AQUI.',extra='<a class="contact-cta whatsapp-link magnetic" href="https://wa.me/5547992101675" target="_blank" rel="noopener noreferrer" data-cursor="Conversar">ME CONTE O PROBLEMA <span>↗</span></a><button class="assistant-link" data-open-chat>Ou organize a conversa com o assistente ↗</button>',cls='contact-beat'))
archive=[]
for i,p in enumerate(projects):
    category='sites' if p['id'] in ['day-lanches','nexa-story','js-autocar'] else 'sistemas' if p['id'] in ['controle-gastos-pro','agrisolo-apontamentos'] else 'automacao'
    links=''.join(f'<a href="{esc(p[k])}" target="_blank" rel="noopener noreferrer">{label} ↗</a>' for k,label in [('urlProd','Explorar'),('urlGithub','Código')] if p.get(k))
    if not links:links='<a href="https://wa.me/5547992101675" class="whatsapp-link" target="_blank" rel="noopener noreferrer">Conversar sobre a solução ↗</a>'
    archive.append(f'<article class="archive-row" data-category="{category}"><span class="archive-number">{i+1:02}</span><div><h3>{esc(p["nome"])}</h3><p>{esc(p["subtitulo"])}</p></div><div class="archive-links">{links}</div></article>')
dialog=(ROOT/'scripts/templates/dialog.html').read_text().replace('Sua ideia começa aqui.','Qual é o problema?').replace('Conte um pouco da sua ideia…','Conte o que está travando seu negócio…')
head='''<!doctype html>
<html lang="pt-BR" class="reduced-motion">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#111111">
<title>dev.abraao — Do problema à solução digital</title>
<meta name="description" content="Seu negócio tem um problema? Abraão Lima Ribeiro transforma problemas de negócio em sites, sistemas, automações e soluções digitais sob medida.">
<meta name="robots" content="index, follow"><link rel="canonical" href="https://devabraao.com.br/"><link rel="icon" href="favicon.svg" type="image/svg+xml">
<meta property="og:type" content="website"><meta property="og:locale" content="pt_BR"><meta property="og:site_name" content="dev.abraao"><meta property="og:url" content="https://devabraao.com.br/"><meta property="og:title" content="Seu negócio tem um problema? Eu transformo em solução digital."><meta property="og:description" content="Tecnologia começa entendendo o problema. Conheça as soluções de Abraão Lima Ribeiro."><meta property="og:image" content="https://devabraao.com.br/img/foto-hero.jpg"><meta property="og:image:alt" content="Abraão Lima Ribeiro, desenvolvedor de soluções digitais">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="dev.abraao — Do problema à solução digital"><meta name="twitter:description" content="Tecnologia começa entendendo o problema."><meta name="twitter:image" content="https://devabraao.com.br/img/foto-hero.jpg">
<link rel="preload" href="fonts/space-grotesk-bold.ttf" as="font" type="font/ttf" crossorigin><link rel="stylesheet" href="css/portfolio.css">
<script>try{var m=localStorage.getItem('portfolio-motion');if(m==='full'||(m!=='reduced'&&!matchMedia('(prefers-reduced-motion: reduce)').matches))document.documentElement.className='has-motion'}catch(e){if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.className='has-motion'}</script>
<noscript><style>html.has-motion .beat{min-height:auto;height:auto}html.has-motion .beat-pin{position:relative;height:auto;min-height:70vh}html.has-motion .case-shot{display:block}html.has-motion .scene-stage{display:none}html.has-motion .copy{clip-path:none!important}</style></noscript>
<script src="js/projects-config.js" defer></script><script src="js/app.bundle.js" defer></script>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Person","name":"Abraão Lima Ribeiro","alternateName":"dev.abraao","url":"https://devabraao.com.br/","jobTitle":"Desenvolvedor de soluções digitais","sameAs":["https://github.com/limaribeiroabraaolimaribeiro-afk","https://www.linkedin.com/in/abra%C3%A3o-lima-ribeiro-601987320"]}</script>
</head><body>
<a class="skip-link" href="#conteudo">Ir para o conteúdo</a><div class="scroll-meter" aria-hidden="true"><span></span></div>
<header class="header" id="header"><a class="logo" href="#inicio" aria-label="dev.abraao, início"><i class="brand-cube" aria-hidden="true"></i>dev.abraao</a><nav class="nav" id="nav" aria-label="Navegação principal"><a href="#inicio">Início</a><a href="#projetos">Projetos</a><a href="#sobre">Sobre</a><a href="#contato">Contato <span>↗</span></a></nav><button class="menu-toggle" id="navToggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="nav"><span></span><span></span></button></header>
<main id="conteudo"><div class="film" id="experience"><div class="scene-stage" id="sceneStage" aria-hidden="true"><canvas id="sceneCanvas"></canvas><div class="cube-fallback"><div class="css-cube"><i></i><i></i><i></i></div><span>UM PROBLEMA. UM CAMINHO.</span></div><div class="scene-vignette"></div><div class="scene-caption"><span class="chapter-label">O PONTO DE PARTIDA</span><span class="scene-number">01 / 08</span></div></div>
'''
end='''</div><section class="archive section-shell" aria-labelledby="archive-title"><details id="arquivo"><summary><span><span class="eyebrow">O TRABALHO CONTINUA</span><h2 id="archive-title">Outros caminhos construídos.</h2></span><span class="details-plus">+</span></summary><div class="project-filters" aria-label="Filtrar projetos"><button class="active" data-filter="all" aria-pressed="true">Todos <span>07</span></button><button data-filter="sites" aria-pressed="false">Sites & lojas</button><button data-filter="sistemas" aria-pressed="false">Sistemas</button><button data-filter="automacao" aria-pressed="false">Automações</button></div><div id="projectsGrid">'''+''.join(archive)+'''</div></details></section>
<section class="faq section-shell" aria-labelledby="faq-title"><div><p class="eyebrow">ANTES DA PRIMEIRA CONVERSA</p><h2 id="faq-title">Faz sentido para<br>o seu negócio?</h2></div><div class="faq-list"><details><summary>Preciso saber qual tecnologia usar?<span>+</span></summary><p>Não. Começamos pelo que precisa ser resolvido. A escolha técnica vem depois do diagnóstico e do escopo.</p></details><details><summary>Posso melhorar algo que já existe?<span>+</span></summary><p>Sim. Um site ou sistema existente pode ser avaliado antes de decidir o que preservar, integrar ou reconstruir.</p></details><details><summary>Quanto custa e quanto tempo leva?<span>+</span></summary><p>O escopo, as integrações e a complexidade definem o valor e o prazo. Depois da conversa inicial, preparo uma proposta com as etapas do trabalho.</p></details><details><summary>O projeto funciona no celular?<span>+</span></summary><p>A experiência deve considerar quem vai usar e em quais aparelhos. As telas são planejadas para celulares, tablets e computadores, conforme o projeto.</p></details></div></section></main>
<footer class="footer section-shell"><div class="footer-top"><a class="logo" href="#inicio"><i class="brand-cube" aria-hidden="true"></i>dev.abraao</a><p>O problema vem primeiro.<br>A tecnologia vem para resolver.</p><div class="footer-social"><a href="mailto:contato.abraaolima@gmail.com">E-mail ↗</a><a href="https://github.com/limaribeiroabraaolimaribeiro-afk" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.instagram.com/dev.abraao/" target="_blank" rel="noopener noreferrer">Instagram ↗</a></div></div><div class="stack-note"><span>FERRAMENTAS, QUANDO FAZEM SENTIDO.</span><p>React · TypeScript · Vite · Node.js · Supabase · PostgreSQL · Cloudflare · APIs · IA · Three.js</p></div><div class="footer-bottom"><span>© <span id="year">2026</span> Abraão Lima Ribeiro</span><div class="experience-controls"><label for="qualitySelect">Qualidade</label><select id="qualitySelect"><option value="auto">Automática</option><option value="high">Alta</option><option value="medium">Média</option><option value="low">Leve</option></select><button id="motionToggle" aria-pressed="false">◉ <span>Reduzir movimento</span></button></div><a href="#inicio">Voltar ao início ↑</a></div></footer>
<button class="chat-float" id="orcamentoFloat" aria-label="Abrir assistente de projetos" data-open-chat>CONVERSAR <span>↗</span></button><span class="context-cursor" aria-hidden="true"></span>
'''+dialog+'''</body></html>'''
(ROOT/'index.html').write_text(head+'\n'.join(film)+end)
print('HTML semântico gerado: 4 cases e 7 projetos preservados.')
