"""Build the isolated, self-contained cube study. Does not change the home scene."""
from pathlib import Path
import subprocess
R=Path(__file__).resolve().parents[1]
(R/'.openai').mkdir(exist_ok=True)
subprocess.run([str(R/'node_modules/.bin/esbuild'),str(R/'js/three/premium-study.js'),'--bundle','--minify','--format=iife','--target=es2020','--outfile='+str(R/'.openai/cube-premium.bundle.js')],check=True)
s=(R/'scripts/templates/cube-study.html').read_text();js=(R/'.openai/cube-premium.bundle.js').read_text().replace('</script','<\\/script')
out=R/'preview/cubo-premium.html';out.write_text(s.replace('<script src="cube-premium.bundle.js"></script>','<script>'+js+'</script>'))
print(f'Cubo isolado: {out.stat().st_size} bytes, sem assets remotos.')
