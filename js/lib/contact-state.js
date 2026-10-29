const clamp=n=>Math.max(0,Math.min(1,Number.isFinite(n)?n:0));
const ease=n=>{const p=clamp(n);return p*p*(3-2*p);};
export function contactMessageLift(progress,index=0){
 return ease((clamp(progress)-[.08,.30,.52][Math.max(0,Math.min(2,index))])/.18);
}
// Retained for the archived handset model. The live contact film never opens
// the phone or imports the internal hardware assemblies.
export function contactLayerOpen(progress,order=0){
 const p=clamp(progress),rank=Math.max(0,Math.min(6,order));
 return ease((p-.22-rank*.012)/.18)*(1-ease((p-.65+rank*.004)/.15));
}
export function contactFilmState(progress,now=0){
 const p=clamp(progress),t=Math.max(0,Number.isFinite(now)?now:0)*.001;
 return {p,t,message1:contactMessageLift(p,0),message2:contactMessageLift(p,1),message3:contactMessageLift(p,2),
  dock:ease((p-.79)/.11),reveal:ease((p-.90)/.075),yaw:-.11+.18*ease(p/.78),
  lift:Math.sin(t*.65)*.018,flow:(t*.16)%1,
  phase:p<.08?0:p<.30?1:p<.52?2:p<.79?3:p<.90?4:5};
}
