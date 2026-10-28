"""Build a standalone, noindex motion study. Does not modify the live homepage."""
from pathlib import Path
import base64, json, subprocess
from PIL import Image
R=Path(__file__).resolve().parents[1]
subprocess.run([str(R/'node_modules/.bin/esbuild'),str(R/'js/three/portrait-study-entry.js'),'--bundle','--minify','--format=iife','--target=es2020','--outfile='+str(R/'.openai/portrait-motion.bundle.js')],check=True)
im=Image.open(R/'img/v2/portrait.webp').convert('RGBA');w,h=im.size
# Sample original alpha and colors; preserve the supplied photograph unchanged.
samples=[]
for y in range(12,h,23):
 for x in range(12,w,23):
  r,g,b,a=im.getpixel((x,y))
  if a>180:samples.append([round(x/w,4),round(y/h,4),'#%02x%02x%02x'%(r,g,b)])
html=(R/'scripts/templates/portrait-study.html').read_text()
for key,value in {'__FONT__':base64.b64encode((R/'fonts/space-grotesk-bold.ttf').read_bytes()).decode(),'__PHOTO__':base64.b64encode((R/'img/v2/portrait.webp').read_bytes()).decode(),'__SAMPLES__':json.dumps(samples,separators=(',',':')),'__SCRIPT__':(R/'.openai/portrait-motion.bundle.js').read_text().replace('</script','<\\/script')}.items():html=html.replace(key,value)
out=R/'preview/cubo-retrato.html';out.write_text(html);print(f'{out.name}: {len(samples)} silhouette samples, {out.stat().st_size} bytes')
