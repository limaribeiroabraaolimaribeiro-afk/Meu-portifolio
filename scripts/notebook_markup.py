"""Semantic case content and the shared 3D stage. No invented outcomes."""
from html import escape as e

def render_notebook(cases, kicker, arrow):
    out=['<section id="projetos" class="section projects notebook-projects scene-section" data-chapter="projetos" data-theme="light" aria-labelledby="projetos-title">']
    out.append('<div class="wrap cinematic-intro notebook-intro"><div class="section-heading"><div>'+kicker(6,'PROJETOS SELECIONADOS')+'<h2 id="projetos-title">Negócios reais.<br><em>Resultados reais.</em></h2></div><div><p>Problemas diferentes. Soluções com contexto.<br>Entre em cada experiência.</p><a class="cinema-entry" href="#projetos-em-cena">Explore os projetos em cena <span aria-hidden="true">↓</span></a></div></div></div>')
    out.append('<div class="section-pin notebook-pin" id="projetos-em-cena"><div class="notebook-set" data-notebook-stage><div class="notebook-topline"><span><i></i> SOLUÇÕES EM FUNCIONAMENTO</span><span class="notebook-shot" aria-hidden="true">CENA 01 / 04</span></div><nav class="notebook-navigation" aria-label="Escolher projeto">')
    for i,c in enumerate(cases):
        out.append(f'<button data-notebook-case="{i}" aria-current="{str(i==0).lower()}"><span>0{i+1}</span><strong>{e(c["name"])}</strong><i aria-hidden="true"></i></button>')
    out.append('</nav><div class="notebook-world scene-window" data-scene-window="projetos" aria-hidden="true"><div class="notebook-static"><div class="static-lid"><img src="img/cases/day.webp" alt="" width="1200" height="824" loading="lazy"></div><div class="static-deck"></div></div><span class="notebook-coordinate">IDEIA → INTERFACE → EXPERIÊNCIA</span></div><div class="notebook-case-copy">')
    labels=['O PROBLEMA','A SOLUÇÃO','A EXPERIÊNCIA']
    for i,c in enumerate(cases):
        source=c['screen'] if c['id']!='nexa' else c['cover']
        out.append(f'<article class="notebook-caption" data-notebook-caption="{i}" data-project-screen="{source}" data-project-kind="{c["id"]}" aria-labelledby="notebook-title-{c["id"]}" {"hidden" if i else ""}><p class="notebook-category">{e(c["category"])}</p><h3 id="notebook-title-{c["id"]}">{e(c["name"])}</h3>')
        for j,phase in enumerate([c['phases'][0],c['phases'][2],c['phases'][3]]):
            out.append(f'<div class="notebook-beat" data-notebook-beat="{j}" {"hidden" if j else ""}><span>{labels[j]}</span><p>{phase["body"]}</p></div>')
        out.append(f'<a class="notebook-case-link" href="#case-{c["id"]}">Conheça a solução {arrow}</a></article>')
    out.append('</div><div class="notebook-scroll"><span aria-hidden="true">ROLE PARA ENTRAR NA EXPERIÊNCIA ↓</span><a href="#cases-em-detalhe">Ler os cases <span aria-hidden="true">↗</span></a><i aria-hidden="true"><b></b></i></div></div></div></section><div class="wrap notebook-library content-layer" id="cases-em-detalhe"><p class="eyebrow">CADA PROJETO TEM UM CONTEXTO</p>')
    for i,c in enumerate(cases):
        out.append(f'<details class="notebook-case-detail" id="case-{c["id"]}"><summary><span class="notebook-library-index">0{i+1}</span><span><small>{e(c["category"])}</small><strong>{e(c["name"])}</strong></span><span class="details-plus" aria-hidden="true">+</span></summary><div class="notebook-detail-body">')
        for p in [c['phases'][0],c['phases'][2],c['phases'][3]]:
            out.append(f'<div><h4>{e(p["label"].capitalize())}</h4><p>{p["body"]}</p></div>')
        out.append('<ul class="notebook-detail-flow">'+''.join(f'<li>{e(v)}</li>' for v in c['flow'])+'</ul>')
        if c.get('url'):
            out.append(f'<a class="text-link" href="{e(c["url"])}" target="_blank" rel="noopener noreferrer">Explorar a experiência {arrow}</a>')
        if c.get('source'):
            out.append(f'<a class="text-link" href="{e(c["source"])}" target="_blank" rel="noopener noreferrer">Código do projeto ↗</a>')
        out.append(f'<figure><img src="{c["screen"]}" alt="{e(c["note"])}" width="1200" height="824" loading="lazy" decoding="async"><figcaption>{e(c["note"])}</figcaption></figure></div></details>')
    out.append('<a class="text-link notebook-archive-link" href="#arquivo">Ver o arquivo de projetos '+arrow+'</a></div>')
    return ''.join(out)
