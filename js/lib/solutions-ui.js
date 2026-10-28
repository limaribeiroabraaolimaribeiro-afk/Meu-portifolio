import {solutionsFilmState} from './solutions-state.js';

export function initSolutions(isReduced,onLayout){
 const section=document.getElementById('solucoes');if(!section)return;
 const root=document.documentElement,track=section.querySelector('.ss-track'),pin=section.querySelector('.ss-pin');
 const scenes=[...section.querySelectorAll('[data-solution-scene]')],nav=[...section.querySelectorAll('[data-nav]')];
 const beats=scenes.map(s=>[...s.querySelectorAll('.ss-beats li')]);
 const counter=section.querySelector('#ss-counter'),progressLabel=section.querySelector('#ss-progress'),instruction=section.querySelector('#ss-instruction');
 const phase=section.querySelector('[data-film-phase]'),caption=section.querySelector('[data-film-beat]');
 const tall=matchMedia('(min-height:600px)');let enhanced=false,queued=false,distance=1,previous=-1;
 function update(){
  queued=false;
  const rect=pin.getBoundingClientRect();
  root.dataset.solutionsFilm=String(enhanced&&rect.top<=2&&rect.bottom>innerHeight*.45);
  if(!enhanced)return;
  const p=Math.max(0,Math.min(1,-track.getBoundingClientRect().top/distance)),state=solutionsFilmState(p);
  if(previous!==state.index){
   scenes.forEach((s,i)=>{s.hidden=i!==state.index;s.inert=i!==state.index;});
   nav.forEach((a,i)=>{if(i===state.index)a.setAttribute('aria-current','step');else a.removeAttribute('aria-current');});
   counter.textContent=`0${state.index+1} / 06`;progressLabel.textContent=`0${state.index+1} — 06`;
   section.dataset.solutionIndex=state.index;previous=state.index;
  }
  phase.textContent=`0${state.beat+1} / EM CENA`;
  caption.textContent=beats[state.index][state.beat].textContent.slice(2).trim();
  beats[state.index].forEach((el,i)=>el.classList.toggle('ss-current',i===state.beat));
  scenes[state.index].style.setProperty('--copy-opacity',state.copyOpacity.toFixed(4));
  scenes[state.index].style.setProperty('--copy-offset',`${(1-state.copyOpacity)*12}px`);
  section.querySelector('.solutions-beat').style.opacity=state.copyOpacity.toFixed(4);
  track.style.setProperty('--film-progress',p.toFixed(5));
  nav.forEach((a,i)=>a.style.setProperty('--fill',i<state.index?1:i===state.index?state.local:0));
  instruction.textContent=state.index===5&&state.local>.8?'CONTINUE PARA VER OS PROJETOS ↓':'ROLE PARA AVANÇAR A CENA';
 }
 function request(){if(!queued){queued=true;requestAnimationFrame(update);}}
 function measure(){
  const next=!isReduced()&&tall.matches;
  if(enhanced!==next){enhanced=next;section.classList.toggle('is-enhanced',next);previous=-1;
   if(!next){scenes.forEach(s=>{s.hidden=false;s.inert=false;s.style.removeProperty('--copy-opacity');});nav.forEach(a=>a.removeAttribute('aria-current'));root.dataset.solutionsFilm='false';}
   onLayout();
  }
  distance=Math.max(1,track.offsetHeight-pin.offsetHeight);request();
 }
 nav.forEach((a,i)=>a.addEventListener('click',e=>{if(!enhanced||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();const bounds=track.getBoundingClientRect(),start=scrollY+bounds.top,span=Math.max(1,track.offsetHeight-pin.offsetHeight);scrollTo({top:start+span*((i+.73)/6),behavior:'smooth'});}));
 const fallback=()=>requestAnimationFrame(measure);
 addEventListener('scroll',request,{passive:true});addEventListener('resize',measure,{passive:true});addEventListener('portfolio:graphics-fallback',fallback);tall.addEventListener('change',measure);
 const observer=new ResizeObserver(measure);observer.observe(document.querySelector('main'));document.fonts.ready.then(measure);
 addEventListener('pagehide',e=>{if(e.persisted)return;observer.disconnect();removeEventListener('scroll',request);removeEventListener('resize',measure);removeEventListener('portfolio:graphics-fallback',fallback);tall.removeEventListener('change',measure);});measure();
}
