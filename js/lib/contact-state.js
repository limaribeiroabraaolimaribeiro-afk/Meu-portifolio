const clamp=n=>Math.max(0,Math.min(1,Number.isFinite(n)?n:0));
const ease=n=>{const p=clamp(n);return p*p*(3-2*p);};
export function contactLayerOpen(progress,order=0){
 const p=clamp(progress),rank=Math.max(0,Math.min(6,order));
 return ease((p-.22-rank*.012)/.18)*(1-ease((p-.65+rank*.004)/.15));
}
export function contactFilmState(progress,now=0){
 const p=clamp(progress),t=Math.max(0,Number.isFinite(now)?now:0)*.001;
 const back=ease((p-.02)/.17)*(1-ease((p-.82)/.09));
 return {p,t,back,open:contactLayerOpen(p),plan:ease((p-.22)/.27),finish:ease((p-.65)/.15),
  tilt:ease((p-.18)/.18)*(1-ease((p-.76)/.08)),reveal:ease((p-.93)/.055),
  yaw:-.17+Math.PI*back,lift:Math.sin(t*.65)*.025,flow:(t*.16)%1,
  phase:p<.21?0:p<.49?1:p<.64?2:p<.82?3:p<.93?4:5};
}
