"""Create a portable, offline preview without deploying the production site."""
from pathlib import Path
import base64
import mimetypes
import re

ROOT = Path(__file__).resolve().parents[1]

def data_uri(relative):
    path = ROOT / relative
    mime = mimetypes.guess_type(path.name)[0] or 'application/octet-stream'
    return 'data:' + mime + ';base64,' + base64.b64encode(path.read_bytes()).decode()

html = (ROOT / 'index.html').read_text()
html = html.replace('<html lang="pt-BR"', '<html data-standalone="true" lang="pt-BR"')
html = html.replace('content="index, follow"', 'content="noindex, nofollow"')
html = re.sub(r'<link\b(?=[^>]*\brel="preload")[^>]*>', '', html)
css = (ROOT / 'css/portfolio.css').read_text()
css = re.sub(r'''url\(["']?([^"')]+)["']?\)''', lambda m: "url('" + data_uri(str((Path('css') / m[1]).as_posix()).replace('css/../', '')) + "')", css)
html = re.sub(r'<link\b[^>]*href="css/portfolio.css"[^>]*>', lambda m: '<style>' + css + '</style>', html)
for source in ['js/projects-config.js', 'js/portfolio.js', 'js/scene.bundle.js']:
    script = (ROOT / source).read_text()
    if source.endswith('projects-config.js'):
        script = re.sub(r'"(img/[^"\n]+\.jpg)"', lambda m: '"' + data_uri(m[1].replace('.jpg', '.webp')) + '"', script)
    # Inline scripts execute after the markup, just as the deferred source scripts do.
    html = html.replace(f'<script src="{source}" defer></script>', '')
    html = html.replace('</body>', '<script>' + script.replace('</script', '<\\/script') + '</script></body>')
for path in ['img/portrait.webp', 'favicon.svg']:
    html = html.replace('"' + path + '"', '"' + data_uri(path) + '"')
output = ROOT / 'preview/portfolio-3d.html'
output.parent.mkdir(exist_ok=True)
output.write_text(html)
print(f'Prévia gerada: {output.name} ({output.stat().st_size // 1024} KB)')
