const clamp=n=>Math.max(0,Math.min(1,Number.isFinite(n)?n:0));
const ease=n=>{const p=clamp(n);return p*p*(3-2*p);};
export function contactLayerOpen(progress,order=0){
 const p=clamp(progress),rank=Math.max(0,Math.min(6,order));
 return ease((p-.035-rank*.018)/.24)*(1-ease((p-.64+rank*.008)/.18));
}
export function contactFilmState(progress,now=0){
 const p=clamp(progress),t=Math.max(0,Number.isFinite(now)?now:0)*.001;
 return {p,t,open:contactLayerOpen(p),plan:ease((p-.035)/.35),finish:ease((p-.62)/.20),
  tilt:ease(p/.22)*(1-ease((p-.76)/.10)),reveal:ease((p-.87)/.095),
  yaw:-.17-.16*Math.sin(p*Math.PI),lift:Math.sin(t*.65)*.025,flow:(t*.16)%1,
  phase:p<.34?0:p<.62?1:p<.87?2:3};
}
