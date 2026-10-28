const clamp=n=>Math.max(0,Math.min(1,Number.isFinite(n)?n:0));
export const resultEase=n=>{const x=clamp(n);return x*x*(3-2*x);};
const between=(p,a,b)=>resultEase((p-a)/(b-a));
// Scroll is a seekable film timeline. Reversing never depends on previous frames.
export function resultFilmState(progress,now=0){
 const p=clamp(progress),t=Math.max(0,Number.isFinite(now)?now:0)*.001;
 const shots=[[-.55,.22,1.06],[-.18,.65,.94],[.24,.28,.89],[.53,.48,1.02],[.60,.45,1.03]];
 const shot=Math.min(3,Math.floor(p*4)),local=p===1?1:p*4-shot,u=resultEase(local);
 const pose=shots[shot].map((v,i)=>v+(shots[shot+1][i]-v)*u);
 return {p,t,index:shot,local,organize:between(p,.08,.38),connect:between(p,.28,.59),
  operate:between(p,.49,.73),evolve:between(p,.70,.94),yaw:pose[0],elevation:pose[1],zoom:pose[2],
  pulse:(t*.17)%1,drift:Math.sin(t*.5)*.045,copyOpacity:1-.75*between(local,.90,1)*(shot<3?1:0)};
}
