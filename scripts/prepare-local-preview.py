"""Prepare ignored static files for the Sites internal preview daemon."""
from pathlib import Path
import json
import shutil
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'dist'
for relative in ['index.html','favicon.svg','css/portfolio.css','js/projects-config.js','js/portfolio.js','js/scene.bundle.js']:
    target=OUT/relative; target.parent.mkdir(exist_ok=True,parents=True);shutil.copyfile(ROOT/relative,target)
for folder,pattern in [('img','*.webp'),('fonts','*')]:
    (OUT/folder).mkdir(exist_ok=True)
    for source in (ROOT/folder).glob(pattern):shutil.copyfile(source,OUT/folder/source.name)
(ROOT/'.openai').mkdir(exist_ok=True)
(ROOT/'.openai/hosting.json').write_text(json.dumps({'static':{'directory':'dist'}})+'\n')
print('Prévia estática pronta em dist/. Nenhuma publicação realizada.')
