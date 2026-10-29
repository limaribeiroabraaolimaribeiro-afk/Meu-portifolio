import {contactFilmState} from './contact-state.js';
export function initContactFilm(isReduced,onLayout){
 const section=document.getElementById('contato'),pin=section.querySelector('.contact-pin'),root=document.documentElement;
 const phase=section.querySelector('[data-contact-phase]'),caption=section.querySelector('[data-contact-caption]');
 const content=section.querySelector('.contact-content'),skip=section.querySelector('[data-contact-skip]');
 const phases=[['01 / UMA CONVERSA','O próximo passo começa aqui.'],['02 / SEU CONTEXTO','Você traz o que precisa melhorar.'],['03 / ENTENDER O DESAFIO','Eu ajudo a encontrar o caminho.'],['04 / UM PRÓXIMO PASSO','Uma conversa começa a ganhar forma.'],['05 / VAMOS CONVERSAR','Seu contexto faz a diferença.'],['06 / O PRÓXIMO PASSO','Uma conversa começa um novo caminho.']];
 const tall=matchMedia('(min-height:570px)');let enhanced=false,queued=false,previous=-1;
 function update(){
  queued=false;const rect=pin.getBoundingClientRect();root.dataset.contactFilm=String(rect.top<innerHeight*.3&&rect.bottom>innerHeight*.4);
  if(!enhanced){content.inert=false;content.removeAttribute('aria-hidden');section.dataset.contactReady='true';return;}const sr=section.getBoundingClientRect(),p=Math.max(0,Math.min(1,-sr.top/Math.max(1,sr.height-pin.offsetHeight))),s=contactFilmState(p);
  section.style.setProperty('--contact-progress',p.toFixed(5));
  section.style.setProperty('--contact-reveal',s.reveal.toFixed(5));section.dataset.contactReady=String(s.reveal>.001);
  const hidden=s.reveal<.92;content.inert=hidden;if(hidden)content.setAttribute('aria-hidden','true');else content.removeAttribute('aria-hidden');
  if(previous!==s.phase){phase.textContent=phases[s.phase][0];caption.textContent=phases[s.phase][1];previous=s.phase;}
 }
 function request(){if(!queued){queued=true;requestAnimationFrame(update);}}
 function skipFilm(){const sr=section.getBoundingClientRect();scrollTo({top:scrollY+sr.top+(sr.height-pin.offsetHeight)*.985,behavior:'smooth'});}
 skip.addEventListener('click',skipFilm);
 function measure(){const next=!isReduced()&&tall.matches;if(next!==enhanced){enhanced=next;section.classList.toggle('is-enhanced',next);onLayout();}request();}
 const fallback=()=>requestAnimationFrame(measure),observer=new ResizeObserver(measure);observer.observe(document.querySelector('main'));
 addEventListener('scroll',request,{passive:true});addEventListener('resize',measure,{passive:true});addEventListener('portfolio:graphics-fallback',fallback);tall.addEventListener('change',measure);document.fonts.ready.then(measure);
 addEventListener('pagehide',e=>{if(e.persisted)return;observer.disconnect();skip.removeEventListener('click',skipFilm);removeEventListener('scroll',request);removeEventListener('resize',measure);removeEventListener('portfolio:graphics-fallback',fallback);tall.removeEventListener('change',measure);});measure();
}
