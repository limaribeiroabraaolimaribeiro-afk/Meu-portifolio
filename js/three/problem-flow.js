// Normalized coordinates shared by the SVG map and the camera-aligned cube.
const clamp=(x)=>Math.max(0,Math.min(1,x));
const ease=(a,b,p)=>{const t=clamp((p-a)/(b-a));return t*t*(3-2*t);};
export function problemFlowState(progress){
 const p=clamp(progress);let x,y,row;
 if(p<.22){x=.325+.13*ease(0,.22,p);y=.17;row=0;}
 else if(p<.34){const t=ease(.22,.34,p);x=.455-.13*t;y=.17+.29*t;row=t<.5?0:1;}
 else if(p<.55){x=.325+.13*ease(.34,.55,p);y=.46;row=1;}
 else if(p<.67){const t=ease(.55,.67,p);x=.455-.13*t;y=.46+.29*t;row=t<.5?1:2;}
 else{x=.325+.13*ease(.67,.91,p);y=.75;row=2;}
 return{x,y,row,blocked:p>=.91||(p>=.18&&p<.25)||(p>=.51&&p<.58)};
}
export function createProblemFlow(){
 const map=document.querySelector('.problem-flow');
 const rows=[...(map?.querySelectorAll('.flow-row')||[])];let previous=-1;
 return{update(p){const state=problemFlowState(p);if(map){map.dataset.rendered='true';map.dataset.blocked=String(state.blocked);map.dataset.flowProgress=p.toFixed(3);if(previous!==state.row){previous=state.row;map.dataset.activeRow=String(state.row);rows.forEach((r,i)=>r.dataset.active=String(i===state.row));}}return state;}};
}
