import {resultFilmState} from './result-state.js';
export function initResultFilm(isReduced,onLayout){
 const section=document.getElementById('resultado');if(!section)return;
 const root=document.documentElement,track=section.querySelector('.result-track'),pin=section.querySelector('.result-pin');
 const chapters=[...section.querySelectorAll('[data-result-chapter]')],nav=[...section.querySelectorAll('[data-result-nav]')];
 const counter=section.querySelector('[data-result-count]'),instruction=section.querySelector('[data-result-instruction]');
 const tall=matchMedia('(min-height:540px)');let enhanced=false,queued=false,previous=-1,distance=1;
 function update(){
  queued=false;const rect=pin.getBoundingClientRect();
  root.dataset.resultFilm=String(enhanced&&rect.top<=2&&rect.bottom>innerHeight*.45);
  if(!enhanced)return;
  const p=Math.max(0,Math.min(1,-track.getBoundingClientRect().top/distance)),s=resultFilmState(p);
  if(previous!==s.index){
   chapters.forEach((el,i)=>{el.hidden=i!==s.index;el.inert=i!==s.index;});
   nav.forEach((el,i)=>{if(i===s.index)el.setAttribute('aria-current','step');else el.removeAttribute('aria-current');});
   counter.textContent=`0${s.index+1} / 04`;section.dataset.resultIndex=s.index;previous=s.index;
  }
  chapters[s.index].style.setProperty('--result-copy-opacity',s.copyOpacity.toFixed(4));
  track.style.setProperty('--result-progress',p.toFixed(5));
  nav.forEach((el,i)=>el.style.setProperty('--fill',i<s.index?1:i===s.index?s.local:0));
  instruction.textContent=p>.92?'O PRÓXIMO CAMINHO PODE SER O SEU ↓':'ROLE PARA TRANSFORMAR A OPERAÇÃO ↓';
 }
 function request(){if(!queued){queued=true;requestAnimationFrame(update);}}
 function measure(){
  const next=!isReduced()&&tall.matches;
  if(enhanced!==next){enhanced=next;section.classList.toggle('is-enhanced',next);previous=-1;
   if(!next){chapters.forEach(el=>{el.hidden=false;el.inert=false;el.style.removeProperty('--result-copy-opacity');});nav.forEach(el=>el.removeAttribute('aria-current'));root.dataset.resultFilm='false';}
   onLayout();
  }
  distance=Math.max(1,track.offsetHeight-pin.offsetHeight);request();
 }
 nav.forEach((el,i)=>el.addEventListener('click',e=>{
  if(!enhanced||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();
  const start=scrollY+track.getBoundingClientRect().top,span=Math.max(1,track.offsetHeight-pin.offsetHeight);
  scrollTo({top:start+span*((i+.72)/4),behavior:'smooth'});
 }));
 const fallback=()=>requestAnimationFrame(measure),observer=new ResizeObserver(measure);observer.observe(document.querySelector('main'));
 addEventListener('scroll',request,{passive:true});addEventListener('resize',measure,{passive:true});addEventListener('portfolio:graphics-fallback',fallback);tall.addEventListener('change',measure);document.fonts.ready.then(measure);
 addEventListener('pagehide',e=>{if(e.persisted)return;observer.disconnect();removeEventListener('scroll',request);removeEventListener('resize',measure);removeEventListener('portfolio:graphics-fallback',fallback);tall.removeEventListener('change',measure);});measure();
}
