"""Package a reviewable offline HTML without deploying production."""
from pathlib import Path
import base64,mimetypes,re
ROOT=Path(__file__).resolve().parents[1]
def data_uri(relative):
    p=ROOT/relative;mime=mimetypes.guess_type(p.name)[0] or 'application/octet-stream'
    return 'data:'+mime+';base64,'+base64.b64encode(p.read_bytes()).decode()
html=(ROOT/'index.html').read_text().replace('<html lang="pt-BR"','<html data-standalone="true" lang="pt-BR"').replace('content="index, follow"','content="noindex, nofollow"')
html=re.sub(r'<link\b(?=[^>]*\brel="preload")[^>]*>','',html)
css=(ROOT/'css/portfolio.css').read_text()+'\n'+(ROOT/'css/portrait-opening.css').read_text()+'\n'+(ROOT/'css/notebook-cinema.css').read_text()
css=re.sub(r'''url\(["']?([^"')]+)["']?\)''',lambda m:"url('"+data_uri(str((Path('css')/m[1]).as_posix()).replace('css/../',''))+"')",css)
html=re.sub(r'<link\b[^>]*href="css/portfolio.css(?:\?[^"]*)?"[^>]*>',lambda m:'<style>'+css+'</style>',html)
html=re.sub(r'<link\b[^>]*href="css/portrait-opening.css[^"]*"[^>]*>','',html)
html=re.sub(r'<link\b[^>]*href="css/notebook-cinema.css[^"]*"[^>]*>','',html)
for source in ['js/projects-config.js','js/app.bundle.js','js/scene.bundle.js']:
    script=(ROOT/source).read_text()
    script=re.sub(r'''(["'])(img/[^"'\n]+\.webp)\1''',lambda m:'"'+data_uri(m[2])+'"',script)
    html=re.sub(r'<script\b[^>]*src="'+re.escape(source)+r'(?:\?[^"]*)?"[^>]*>\s*</script>','',html)
    html=html.replace('</body>','<script>'+script.replace('</script','<\\/script')+'</script></body>')
html=re.sub(r'(<(?:img|source)\b[^>]*(?:src|srcset)=")(img/[^"\n]+\.webp)(")',lambda m:m[1]+data_uri(m[2])+m[3],html)
html=re.sub(r'(data-project-screen=")(img/[^"]+\.webp)(")',lambda m:m[1]+data_uri(m[2])+m[3],html)
html=html.replace('"favicon.svg"','"'+data_uri('favicon.svg')+'"')
output=ROOT/'preview/portfolio-3d.html';output.parent.mkdir(exist_ok=True);output.write_text(html)
print(f'Prévia portátil: {output.stat().st_size} bytes')
# The review copy opens directly on the implemented scene, after fonts establish layout.
entry='''<script>addEventListener('load',()=>document.fonts.ready.then(()=>{requestAnimationFrame(()=>requestAnimationFrame(()=>{const s=document.querySelector('#projetos'),p=s.querySelector('.section-pin'),i=s.querySelector('.cinematic-intro');scrollTo({top:s.offsetTop+i.offsetHeight+(s.offsetHeight-i.offsetHeight-p.offsetHeight)*.04,behavior:'instant'});}));}));</script>'''
(ROOT/'preview/notebook-cinema.html').write_text(html.replace('</body>',entry+'</body>'))
