import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
const clamp=x=>Math.max(0,Math.min(1,x));
const smooth=(a,b,p)=>{const t=clamp((p-a)/(b-a));return t*t*(3-2*t);};
const mix=(a,b,t)=>a.map((v,i)=>v+(b[i]-v)*t);
export const ISLANDS=[[-2,.65,1.6],[2,.65,.35],[-.35,.65,-2.25]];
export const GAP_START=.43, GAP_END=.61;
export function cinematicState(progress){
 const p=clamp(progress),[a,b,c]=ISLANDS,stop0=mix(a,b,.36),stop1=mix(b,c,.36),stop2=mix(c,a,.36);
 let actor,phase=p<.35?0:p<.70?1:2;
 if(p<.2)actor=mix(a,stop0,smooth(0,.2,p));
 else if(p<.30)actor=[...stop0];
 else if(p<.40){const t=smooth(.30,.40,p);actor=mix(stop0,b,t);actor[1]+=Math.sin(t*Math.PI)*1.05;}
 else if(p<.55)actor=mix(b,stop1,smooth(.40,.55,p));
 else if(p<.65)actor=[...stop1];
 else if(p<.75){const t=smooth(.65,.75,p);actor=mix(stop1,c,t);actor[1]+=Math.sin(t*Math.PI)*1.05;}
 else actor=mix(c,stop2,smooth(.75,.90,p));
 const focus=mix([0,.3,0],actor,.24+smooth(.12,.92,p)*.18);
 return{p,phase,actor,focus,blocked:(p>=.2&&p<=.30)||(p>=.55&&p<=.65)||p>=.90,yaw:-.45+p*1.3,zoom:1-smooth(.08,.95,p)*.24};
}
export function createCinematicProblem({scene,software=false,quality='high'}){
 const group=new THREE.Group();group.visible=false;scene.add(group);
 const geometries=new Set(),materials=new Set(),textures=[];
 const geo=g=>{geometries.add(g);return g;},mat=m=>{materials.add(m);return m;};
 const unit=geo(new THREE.BoxGeometry(1,1,1)),rounded=software||quality==='low'?unit:geo(new RoundedBoxGeometry(1,1,1,2,.045));
 const graphite=mat(new THREE.MeshStandardMaterial({color:'#272824',metalness:.36,roughness:.57}));
 const black=mat(new THREE.MeshStandardMaterial({color:'#111310',metalness:.25,roughness:.72}));
 const cream=mat(new THREE.MeshStandardMaterial({color:'#e1d6c3',metalness:.26,roughness:.48}));
 const metal=mat(new THREE.MeshStandardMaterial({color:'#635341',metalness:.6,roughness:.46}));
 const orange=mat(new THREE.MeshBasicMaterial({color:'#fa760d',toneMapped:false}));
 const dim=mat(new THREE.MeshBasicMaterial({color:'#7d3e14',toneMapped:false}));
 const pale=mat(new THREE.MeshBasicMaterial({color:'#e8ceb0',toneMapped:false}));
 function box(pos,scale,material=graphite,bevel=false){const m=new THREE.Mesh(bevel?rounded:unit,material);m.position.set(...pos);m.scale.set(...scale);group.add(m);return m;}
 function beam(a,b,width,material){const from=new THREE.Vector3(...a),to=new THREE.Vector3(...b),delta=to.clone().sub(from);const m=box(from.clone().add(to).multiplyScalar(.5).toArray(),[width,delta.length(),width],material);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());return m;}
 // A stepped set with physical depth, service wells and independent routing levels.
 box([0,-.34,-.2],[6.8,.28,6.2],black,true).renderOrder=-20;
 box([0,-.5,-.2],[7.05,.08,6.45],graphite).renderOrder=-21;
 const tiles=new THREE.InstancedMesh(unit,graphite,software||quality==='low'?32:80),dummy=new THREE.Object3D();group.add(tiles);tiles.renderOrder=-19;
 for(let i=0;i<tiles.count;i++){const x=(i%10-4.5)*.64,z=(Math.floor(i/10)-3.5)*.7;dummy.position.set(x,-.16,z);dummy.scale.set(.61,.025,.67);dummy.updateMatrix();tiles.setMatrixAt(i,dummy.matrix);}
 const wells=[];
 for(let i=0;i<3;i++){
  const [x,,z]=ISLANDS[i];
  box([x,.04,z],[1.56,.34,1.5],graphite,true);
  box([x,.23,z],[1.38,.10,1.31],metal);
  box([x,.32,z],[1.26,.10,1.18],black,true);
  box([x,.39,z],[1.1,.045,.99],cream,true);
  // Precision recesses, backplane fins and an optical strip.
  for(let j=0;j<(software||quality==='low'?3:6);j++)box([x-.43+j*.17,.48,z-.38],[.055,.17,.16],graphite);
  box([x,.50,z+.45],[.92,.035,.025],dim);
  const led=box([x,.505,z+.45],[.60,.04,.032],orange);wells.push(led);
  const towerHeight=[.9,1.35,1.08][i];
  box([x+.48,.4+towerHeight/2,z-.38],[.28,towerHeight,.30],graphite,true);
  box([x+.48,.42+towerHeight,z-.38],[.24,.025,.24],cream);
  for(let j=0;j<3;j++)box([x+.48,.65+j*.21,z-.212],[.15,.025,.012],j===i?orange:metal);
 }
 // Three rail pairs: the absence in the center is intentional and never repaired here.
 const gates=[],pulses=[];
 for(let i=0;i<3;i++){
  const a=ISLANDS[i],b=ISLANDS[(i+1)%3],direction=new THREE.Vector3(...b).sub(new THREE.Vector3(...a)).normalize(),side=new THREE.Vector3(-direction.z,0,direction.x);
  for(const [start,end] of [[.12,GAP_START],[GAP_END,.88]]){
   for(const sign of [-1,1]){const p0=new THREE.Vector3(...mix(a,b,start)).addScaledVector(side,sign*.15),p1=new THREE.Vector3(...mix(a,b,end)).addScaledVector(side,sign*.15);p0.y=p1.y=.39;beam(p0.toArray(),p1.toArray(),.075,graphite);p0.y=p1.y=.438;beam(p0.toArray(),p1.toArray(),.018,start===.12?orange:dim);}
   const p0=mix(a,b,start),p1=mix(a,b,end);p0[1]=p1[1]=.35;beam(p0,p1,.16,metal);
  }
  for(const t of [.21,.78]){const p=mix(a,b,t);box([p[0],.03,p[2]],[.18,.60,.18],graphite);}
  const gatePos=mix(a,b,.48),gate=box([gatePos[0],.79,gatePos[2]],[.035,.68,.52],graphite,true);gate.rotation.y=-Math.atan2(direction.z,direction.x);gates.push(gate);
  const bar=box([gatePos[0]-.018,.81,gatePos[2]],[.018,.49,.025],orange);bar.rotation.y=gate.rotation.y;pulses.push(bar);
  // A few stalled fragments make the break visible without a particle cloud.
  for(let j=0;j<3;j++){const point=mix(a,b,.49+j*.035);box([point[0],.20-j*.12,point[2]],[.07,.07,.07],j===0?metal:graphite);}
 }
 // Foreground architecture gives the camera a near plane and subtle parallax.
 for(const [x,z,height] of [[-2.9,-1.1,.8],[2.8,1.9,.65],[1.6,-2.9,.5]]){
  box([x,height/2-.14,z],[.55,height,.7],graphite,true);
  for(let j=0;j<3;j++)box([x-.16+j*.16,height-.12,z+.355],[.045,.12,.014],cream);
 }
 for(let i=0;i<4;i++)box([-2.6+i*.16,-.135,2.6],[.07,.02,.14],i===0?orange:metal);
 const packetCount=software?12:quality==='low'?12:24;
 const packets=new THREE.InstancedMesh(unit,orange,packetCount);packets.frustumCulled=false;group.add(packets);
 // Warm, baked-style pools of light. No real-time shadow maps or external textures.
 if(!software){const canvas=document.createElement('canvas');canvas.width=canvas.height=64;const ctx=canvas.getContext('2d');const g=ctx.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,'rgba(255,110,15,.32)');g.addColorStop(1,'rgba(255,110,15,0)');ctx.fillStyle=g;ctx.fillRect(0,0,64,64);const tex=new THREE.CanvasTexture(canvas);textures.push(tex);const glowMat=mat(new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false,toneMapped:false}));const plane=geo(new THREE.PlaneGeometry(2.7,2.7));for(const p of ISLANDS){const light=new THREE.Mesh(plane,glowMat);light.position.set(p[0],-.115,p[2]);light.rotation.x=-Math.PI/2;group.add(light);}}
 const map=document.querySelector('.cinematic-flow'),acts=[...(map?.querySelectorAll('.film-act')||[])],labels=[...(map?.querySelectorAll('[data-island]')||[])];let previous=-1,lastProjection=-1,lastAspect=0;
 const temp=new THREE.Vector3();
 function update(progress,time,camera){const state=cinematicState(progress);group.visible=true;
  const per=packetCount/3;
  for(let i=0;i<packetCount;i++){const line=Math.floor(i/per),selected=line===state.phase,t=(((selected?time*.00012:0)+(i%per)/per)%1)*.38;const a=ISLANDS[line],b=ISLANDS[(line+1)%3],point=mix(a,b,t);const arrival=smooth(.30,.38,t),size=.065*(selected?1:.35)*(1-arrival*.85);dummy.position.set(point[0],.52,point[2]);dummy.rotation.set(0,time*.0002+i,0);dummy.scale.set(size,.025,size);dummy.updateMatrix();packets.setMatrixAt(i,dummy.matrix);}packets.instanceMatrix.needsUpdate=true;
  gates.forEach((g,i)=>{g.position.y=.79+(i===state.phase?Math.sin(time*.0018)*.025:0);});
  pulses.forEach((bar,i)=>{bar.visible=i===state.phase;bar.scale.y=state.blocked?.44+Math.sin(time*.004)*.06:.28;});
  wells.forEach((led,i)=>{led.scale.x=i===state.phase?.6+Math.sin(time*.002)*.09:.30;});
  if(map){map.dataset.rendered='true';map.dataset.cinemaPhase=String(state.phase);map.dataset.cinemaProgress=state.p.toFixed(3);map.dataset.cinemaBlocked=String(state.blocked);if(previous!==state.phase){previous=state.phase;acts.forEach((a,i)=>a.dataset.active=String(i===state.phase));}
   if(lastProjection!==progress||lastAspect!==camera.aspect){camera.updateMatrixWorld();lastProjection=progress;lastAspect=camera.aspect;labels.forEach((el,i)=>{const p=ISLANDS[i];temp.set(p[0],1.95,p[2]).project(camera);el.style.left=(temp.x*.5+.5)*100+'%';el.style.top=(-temp.y*.5+.5)*100+'%';el.style.opacity=temp.z<1&&Math.abs(temp.x)<.85?'1':'0';});}
  }
  return state;
 }
 function dispose(){scene.remove(group);geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());}
 return{group,update,dispose};
}
