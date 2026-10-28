import * as THREE from 'three';
import {createPremiumShell,applyStudioEnvironment} from './premium-shell.js';
const root=document.documentElement,stage=document.getElementById('stage'),angle=document.getElementById('angle'),pause=document.getElementById('pause'),structure=document.getElementById('structure'),motion=matchMedia('(prefers-reduced-motion: reduce)');
let paused=motion.matches,opened=false,rotation=32*Math.PI/180,renderer=null,scene,camera,group,panels=[],core,spread=0,target=0,raf=0,last=0,drag=false,previousX=0,dirty=true;
const resources=[];let premium;
function sync(){dirty=true;pause.textContent=paused?'Retomar':'Pausar';pause.setAttribute('aria-pressed',String(paused));structure.textContent=opened?'Recompor estrutura ↙':'Abrir estrutura ↗';structure.setAttribute('aria-pressed',String(opened));root.style.setProperty('--open',opened?'30px':'0px');root.style.setProperty('--turn',rotation*180/Math.PI+'deg');}
pause.onclick=()=>{paused=!paused;sync();};structure.onclick=()=>{opened=!opened;target=opened?1:0;sync();};angle.oninput=()=>{rotation=+angle.value*Math.PI/180;paused=true;sync();};
stage.addEventListener('pointerdown',e=>{drag=true;previousX=e.clientX;stage.setPointerCapture(e.pointerId);});stage.addEventListener('pointermove',e=>{if(!drag)return;rotation+=(e.clientX-previousX)*.008;previousX=e.clientX;paused=true;angle.value=String((rotation*180/Math.PI%360+360)%360);sync();});stage.addEventListener('pointerup',()=>drag=false);stage.addEventListener('pointercancel',()=>drag=false);
motion.addEventListener('change',e=>{paused=e.matches;sync();});sync();
try{renderer=new THREE.WebGLRenderer({canvas:document.getElementById('cubeCanvas'),alpha:true,antialias:true,powerPreference:'low-power'});}catch{root.dataset.renderer='css';}
if(renderer){
 root.dataset.renderer='webgl';renderer.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<700?1.25:1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1;
 scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(32,1,.1,60);camera.position.set(4,2.7,6);camera.lookAt(0,0,0);
 const environment=applyStudioEnvironment(renderer,scene);resources.push(environment);
 scene.add(new THREE.HemisphereLight('#fff4e5','#5d4937',1.4));const light=new THREE.DirectionalLight('#fff6e8',2.5);light.position.set(-3,6,4);scene.add(light);
 premium=createPremiumShell();group=premium.group;scene.add(group);
 const resize=()=>{dirty=true;const r=stage.getBoundingClientRect();renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;const span=Math.max(4.4,4.5/camera.aspect);camera.position.set(4,2.7,6).normalize().multiplyScalar(span/(2*Math.tan(THREE.MathUtils.degToRad(16))));camera.lookAt(0,0,0);camera.updateProjectionMatrix();};const observer=new ResizeObserver(resize);observer.observe(stage);resize();
 let previous=0;function frame(now){raf=requestAnimationFrame(frame);if(document.hidden)return;if(now-last<1000/(innerWidth<700?30:60))return;last=now;const dt=Math.min(.05,(now-previous)/1000||0);previous=now;if(paused&&!drag&&!dirty&&Math.abs(spread-target)<.001)return;dirty=false;if(!paused&&!drag)rotation+=dt*.11;spread=motion.matches?target:THREE.MathUtils.damp(spread,target,4,dt);group.rotation.set(0,rotation,0);premium.update({spread});renderer.render(scene,camera);root.style.setProperty('--turn',rotation*180/Math.PI+'deg');}raf=requestAnimationFrame(frame);
 addEventListener('pagehide',e=>{if(e.persisted)return;cancelAnimationFrame(raf);observer.disconnect();premium.dispose();for(const r of resources)r.dispose();renderer.dispose();});
}else{
 let previous=0;function frame(now){raf=requestAnimationFrame(frame);if(document.hidden)return;const dt=Math.min(.05,(now-previous)/1000||0);previous=now;if(!paused&&!drag){rotation+=dt*.11;root.style.setProperty('--turn',rotation*180/Math.PI+'deg');}}raf=requestAnimationFrame(frame);addEventListener('pagehide',e=>{if(!e.persisted)cancelAnimationFrame(raf);});
}
