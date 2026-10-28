"""Prepare ignored static files for internal preview. No deployment identity."""
from pathlib import Path
import json,shutil
ROOT=Path(__file__).resolve().parents[1]; OUT=ROOT/'dist'
for relative in ['index.html','favicon.svg','robots.txt','sitemap.xml','css/portfolio.css','css/portrait-opening.css','css/notebook-cinema.css','css/solutions-story.css','css/intelligence-cinema.css','css/result-cinema.css','js/projects-config.js','js/app.bundle.js','js/scene.bundle.js']:
    target=OUT/relative;target.parent.mkdir(exist_ok=True,parents=True);shutil.copyfile(ROOT/relative,target)
for folder,pattern in [('img','*.webp'),('fonts','*'),('servicos','*.html'),('projetos','*.html'),('preview','cubo-premium.html')]:
    for source in (ROOT/folder).rglob(pattern):
        if source.is_file():
            target=OUT/source.relative_to(ROOT);target.parent.mkdir(exist_ok=True,parents=True);shutil.copyfile(source,target)
(ROOT/'.openai').mkdir(exist_ok=True);(ROOT/'.openai/hosting.json').write_text(json.dumps({'static':{'directory':'dist'}})+'\n')
print('Prévia estática pronta. Nenhuma publicação realizada.')
