import {contactFilmState} from './contact-state.js';
export function initContactFilm(isReduced,onLayout){
 const section=document.getElementById('contato'),pin=section.querySelector('.contact-pin'),root=document.documentElement;
 const phase=section.querySelector('[data-contact-phase]'),caption=section.querySelector('[data-contact-caption]');
 const phases=[['01 / ENTENDER','Uma conversa revela o que precisa mudar.'],['02 / DEFINIR','O contexto se transforma em um caminho.'],['03 / CONSTRUIR','Uma solução começa a ganhar forma.']];
 const tall=matchMedia('(min-height:570px)');let enhanced=false,queued=false,previous=-1;
 function update(){
  queued=false;const rect=pin.getBoundingClientRect();root.dataset.contactFilm=String(rect.top<innerHeight*.3&&rect.bottom>innerHeight*.4);
  if(!enhanced)return;const sr=section.getBoundingClientRect(),p=Math.max(0,Math.min(1,-sr.top/Math.max(1,sr.height-pin.offsetHeight))),s=contactFilmState(p);
  section.style.setProperty('--contact-progress',p.toFixed(5));
  if(previous!==s.phase){phase.textContent=phases[s.phase][0];caption.textContent=phases[s.phase][1];previous=s.phase;}
 }
 function request(){if(!queued){queued=true;requestAnimationFrame(update);}}
 function measure(){const next=!isReduced()&&tall.matches;if(next!==enhanced){enhanced=next;section.classList.toggle('is-enhanced',next);onLayout();}request();}
 const fallback=()=>requestAnimationFrame(measure),observer=new ResizeObserver(measure);observer.observe(document.querySelector('main'));
 addEventListener('scroll',request,{passive:true});addEventListener('resize',measure,{passive:true});addEventListener('portfolio:graphics-fallback',fallback);tall.addEventListener('change',measure);document.fonts.ready.then(measure);
 addEventListener('pagehide',e=>{if(e.persisted)return;observer.disconnect();removeEventListener('scroll',request);removeEventListener('resize',measure);removeEventListener('portfolio:graphics-fallback',fallback);tall.removeEventListener('change',measure);});measure();
}
