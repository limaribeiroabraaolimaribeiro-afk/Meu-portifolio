const clamp=n=>Math.max(0,Math.min(1,Number.isFinite(n)?n:0));
const ease=n=>{const p=clamp(n);return p*p*(3-2*p);};
export function contactFilmState(progress,now=0){
 const p=clamp(progress),t=Math.max(0,Number.isFinite(now)?now:0)*.001;
 return {p,t,open:ease(p/.42),plan:ease((p-.18)/.65),finish:ease((p-.68)/.3),
  yaw:-.24+.60*Math.sin(p*Math.PI*.85),lift:Math.sin(t*.65)*.045,flow:(t*.16)%1,
  phase:Math.min(2,Math.floor(p*3))};
}
