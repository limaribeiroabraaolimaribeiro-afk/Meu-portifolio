import * as THREE from 'three';
import {chooseQuality} from '../lib/quality.js';
import {createPremiumShell,applyStudioEnvironment} from './premium-shell.js';
import {SoftwareRenderer} from '../software-renderer.js';
export function initPortraitMotion(){
if(!document.querySelector('#world'))return;
const root=document.documentElement, stage=document.querySelector('.art'),canvas=document.querySelector('#world'),track=document.querySelector('.portrait-opening')||document.querySelector('#journey'),range=document.querySelector('#progress'),play=document.querySelector('#play'),photo=document.querySelector('#portrait');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const isReduced=()=>reduced.matches||root.classList.contains('reduced-motion');
const smooth=(a,b,x)=>{const t=THREE.MathUtils.clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
let renderer,software=false;
try{renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});}catch{software=true;try{renderer=new SoftwareRenderer(canvas);}catch{root.dataset.renderer='static';}}
const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-4,4,2.7,-2.7,.1,30);camera.position.z=10;
let env;if(renderer&&!software){renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1;env=applyStudioEnvironment(renderer,scene);}
scene.add(new THREE.HemisphereLight('#fff5e5','#635446',1.6));const light=new THREE.DirectionalLight('#fff8ee',2.8);light.position.set(-3,6,5);scene.add(light);
const shell=createPremiumShell({size:1.85,software});scene.add(shell.group);shell.group.rotation.set(.22,-.49,-.05);shell.group.traverse(o=>{if(o.isMesh){o.material.transparent=true;}});
const samples=JSON.parse(document.querySelector('#samples').textContent);const quality=chooseQuality();const count=software?448:quality==='low'?224:quality==='medium'||innerWidth<700?448:896;
const geometry=new THREE.BoxGeometry(1,1,1),material=new THREE.MeshStandardMaterial({color:'#ffffff',metalness:.35,roughness:.48,transparent:true});
const swarm=new THREE.InstancedMesh(geometry,material,count);swarm.instanceMatrix.setUsage(THREE.DynamicDrawUsage);swarm.frustumCulled=false;scene.add(swarm);
const orbit=new THREE.Vector3(),dummy=new THREE.Object3D(),color=new THREE.Color(),seed=i=>{const n=Math.sin((i+1)*127.1)*43758.5453;return n-Math.floor(n);};
const particles=Array.from({length:count},(_,i)=>{const s=samples[Math.floor(i*samples.length/count)],n=Math.ceil(Math.cbrt(count));const start=new THREE.Vector3(((i%n)/(n-1)-.5)*1.72,((Math.floor(i/n)%n)/(n-1)-.5)*1.72,((Math.floor(i/n/n))/(n-1)-.5)*1.72).applyEuler(shell.group.rotation);return{start,target:new THREE.Vector3((s[0]-.5)*2.85,(.5-s[1])*3.8,0),color:new THREE.Color(s[2]),phase:seed(i)*Math.PI*2,radius:.8+seed(i+9)*.9,height:(seed(i+28)-.5)*3.5,speed:.45+seed(i+7)*.4};});
let p=0,desired=0,autoplay=false,autoStart=0,raf=0,last=0,active=true,dirty=true;
const titles=[['Seu negócio tem<br>um <em>problema?</em>','Eu transformo em<br>solução digital.','01 / O PONTO DE PARTIDA'],['Separar para<br><em>entender.</em>','Cada parte revela<br>um caminho possível.','02 / INVESTIGAÇÃO'],['Conectar faz<br><em>tomar forma.</em>','O movimento encontra direção.','03 / CONEXÃO'],['Por trás da solução,<br><em>Abraão.</em>','Abraão Lima Ribeiro<br>Desenvolvedor de soluções digitais.','04 / QUEM RESOLVE']];
let chapter=-1;function ui(){const index=p<.24?0:p<.57?1:p<.83?2:3;if(index!==chapter){chapter=index;document.querySelector('#headline').innerHTML=titles[index][0];document.querySelector('#subline').innerHTML=titles[index][1];document.querySelector('#chapter').textContent=titles[index][2];document.querySelectorAll('[data-step]').forEach((b,i)=>b.setAttribute('aria-current',String(i===index)));}range.value=String(Math.round(p*1000));root.style.setProperty('--progress',p);photo.style.opacity=smooth(.82,.97,p);photo.setAttribute('aria-hidden',String(p<.83));photo.style.filter=`blur(${(1-smooth(.80,.96,p))*9}px)`;track.dataset.progress=p.toFixed(3);track.dataset.phase=String(index);document.querySelector('#percent').textContent=Math.round(p*100)+'%';}
function fromScroll(){if(autoplay)return;const r=track.getBoundingClientRect();desired=THREE.MathUtils.clamp(-r.top/(r.height-innerHeight),0,1);dirty=true;}
addEventListener('scroll',fromScroll,{passive:true});
function seek(value){autoplay=false;play.textContent='Assistir sequência ↗';desired=p=value;const top=track.offsetTop+value*(track.offsetHeight-innerHeight);window.scrollTo({top,behavior:'instant'});dirty=true;ui();}
range.oninput=()=>seek(+range.value/1000);document.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>seek(+b.dataset.step));
play.onclick=()=>{if(autoplay){autoplay=false;window.scrollTo({top:track.offsetTop+p*(track.offsetHeight-innerHeight),behavior:'instant'});play.textContent='Continuar sequência ↗';return;}if(isReduced()){seek(p<.5?1:0);return;}if(p>.98)seek(0);autoplay=true;autoStart=performance.now()-p*14000;play.textContent='Pausar sequência Ⅱ';};
for(const event of ['wheel','touchstart'])addEventListener(event,()=>{if(autoplay){autoplay=false;play.textContent='Assistir sequência ↗';}},{passive:true});
const resize=()=>{if(!renderer)return;const r=stage.getBoundingClientRect();renderer.setPixelRatio(Math.min(devicePixelRatio||1,software?1:innerWidth<700?1.25:1.6));renderer.setSize(r.width,r.height,false);camera.left=-2.7*r.width/r.height;camera.right=2.7*r.width/r.height;camera.updateProjectionMatrix();dirty=true;fromScroll();};
const observer=new ResizeObserver(resize);observer.observe(stage);resize();
function frame(now){raf=requestAnimationFrame(frame);if(!active||document.hidden)return;const dt=Math.min((now-last)/1000||.016,.06);if(dt<(software?1/24:1/60)*.85)return;last=now;
if(autoplay){desired=THREE.MathUtils.clamp((now-autoStart)/14000,0,1);if(desired===1){autoplay=false;play.textContent='Rever sequência ↺';window.scrollTo({top:track.offsetTop+(track.offsetHeight-innerHeight),behavior:'instant'});}}
p=isReduced()?desired:THREE.MathUtils.damp(p,desired,9,dt);if(Math.abs(p-desired)<.0001)p=desired;ui();
if(!renderer)return;if(isReduced()){shell.group.visible=p<.5;swarm.visible=false;photo.style.opacity=p<.5?0:1;if(!dirty)return;dirty=false;renderer.render(scene,camera);return;}
const release=smooth(.12,.43,p),gather=smooth(.53,.78,p),reveal=smooth(.83,.98,p);shell.group.visible=p<.225;shell.group.position.y=Math.sin(now*.0005)*.025;const shellAlpha=1-smooth(.13,.225,p);shell.group.traverse(o=>{if(o.isMesh)o.material.opacity=shellAlpha;});
swarm.visible=p>.13&&p<.985;material.opacity=smooth(.13,.22,p)*(1-reveal);const idle=now*.00025;
if(swarm.visible)for(let i=0;i<count;i++){const a=particles[i],angle=a.phase+idle*a.speed;const orbitX=Math.cos(angle)*a.radius,orbitY=a.height+Math.sin(angle*1.65+a.phase)*.32,orbitZ=Math.sin(angle)*.8;
dummy.position.copy(a.start).lerp(orbit.set(orbitX,orbitY,orbitZ),release).lerp(a.target,gather);const oscillation=Math.sin(now*.0017+a.phase)*.14*release*(1-gather);dummy.position.y+=oscillation;
const size=THREE.MathUtils.lerp(.205,software?.10:.088,gather);dummy.scale.setScalar(size*(1-reveal*.25));dummy.rotation.set(angle*(1-gather),angle*.8*(1-gather),angle*.6*(1-gather));dummy.updateMatrix();swarm.setMatrixAt(i,dummy.matrix);
{color.set('#ed790e').lerp(a.color,smooth(.67,.86,p));swarm.setColorAt(i,color);}}
swarm.instanceMatrix.needsUpdate=true;if(swarm.instanceColor)swarm.instanceColor.needsUpdate=true;renderer.render(scene,camera);root.dataset.renderer=software?'canvas':'webgl';}
raf=requestAnimationFrame(frame);const visibility=new IntersectionObserver(([e])=>{active=e.isIntersecting;root.dataset.portraitVisible=String(active);});visibility.observe(track);
reduced.addEventListener('change',()=>{autoplay=false;dirty=true;});addEventListener('pagehide',e=>{if(e.persisted)return;cancelAnimationFrame(raf);observer.disconnect();visibility.disconnect();shell.dispose();geometry.dispose();material.dispose();env?.dispose();renderer?.dispose?.();});
fromScroll();ui();
}
