import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

const clamp=v=>Math.max(0,Math.min(1,Number.isFinite(v)?v:0));
export function reactorMotion(progress,now){
 const t=Math.max(0,Number.isFinite(now)?now:0)*.001,p=clamp(progress);
 return {t,p,breath:.5+.5*Math.sin(t*.82),yaw:t*.22+p*.7,orbit:.26*Math.sin(t*.15)+p*.55,
   lift:Math.sin(t*.72)*.13,phase:Math.floor((t/9+p*1.4)%3),active:Math.floor(t/3.8)%4};
}

// Every position is a function of time and scroll; nothing waits for another scroll event.
export function createIntelligenceReactor({scene,software=false,quality='medium'}){
 const group=new THREE.Group();group.visible=false;scene.add(group);
 const low=software||quality==='low',geometries=new Set(),materials=new Set(),textures=new Set();
 const world=document.querySelector('.intelligence-world'),labels=[...world.querySelectorAll('[data-reactor-label]')];
 const phaseLabel=document.querySelector('[data-reactor-phase]'),phaseCopy=document.querySelector('[data-reactor-copy]');
 const geo=g=>(geometries.add(g),g),mat=(o,basic=false)=>{const m=basic?new THREE.MeshBasicMaterial(o):new THREE.MeshStandardMaterial({roughness:.28,metalness:.65,...o});materials.add(m);return m;};
 const gold=mat({color:'#f68a27',roughness:.27,metalness:.64}),graphite=mat({color:'#35413a',metalness:.8}),silver=mat({color:'#cbd9ca',roughness:.3,metalness:.72});
 const amber=mat({color:'#ffb85b',toneMapped:false},true),pale=mat({color:'#e9f4d9',toneMapped:false},true);
 const copper=mat({color:'#d67d31',toneMapped:false,transparent:true,opacity:.68},true);
 const teal=mat({color:'#69a99f',toneMapped:false,transparent:true,opacity:.34},true);
 const dim=mat({color:'#af9a66',toneMapped:false,transparent:true,opacity:.19},true);
 const boxGeo=geo(low?new THREE.BoxGeometry(1,1,1):new RoundedBoxGeometry(1,1,1,2,.07));
 const ballGeo=geo(new THREE.SphereGeometry(1,low?7:12,low?5:9));
 const torusGeo=geo(new THREE.TorusGeometry(1,.009,low?3:5,low?44:80));
 const dummy=new THREE.Object3D(),v=new THREE.Vector3(),projected=new THREE.Vector3();
 const core=new THREE.Group();group.add(core);
 const size=low?3:4,count=size**3,cells=new THREE.InstancedMesh(boxGeo,gold,count);cells.frustumCulled=false;cells.instanceMatrix.setUsage(THREE.DynamicDrawUsage);core.add(cells);
 const inner=new THREE.Mesh(geo(new THREE.IcosahedronGeometry(.40,low?0:1)),amber);core.add(inner);
 const cage=new THREE.Group();core.add(cage);
 function rod(a,b,width,m,parent){const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),delta=end.clone().sub(start);const o=new THREE.Mesh(boxGeo,m);o.position.copy(start).add(end).multiplyScalar(.5);o.scale.set(width,delta.length(),width);o.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());parent.add(o);return o;}
 const corners=[];for(const x of [-1,1])for(const y of [-1,1])for(const z of [-1,1])corners.push([x*.85,y*.85,z*.85]);
 for(let i=0;i<corners.length;i++)for(let j=i+1;j<corners.length;j++)if(corners[i].filter((n,k)=>n!==corners[j][k]).length===1)rod(corners[i],corners[j],.012,copper,cage);
 const orbitals=[];
 for(let i=0;i<5;i++){
  const r=new THREE.Mesh(torusGeo,i===1?copper:i===3?teal:dim),radius=1.28+i*.34;r.scale.setScalar(radius);group.add(r);orbitals.push(r);
 }
 const nodes=Array.from({length:4},(_,i)=>{
  const g=new THREE.Group();group.add(g);
  const cube=new THREE.Mesh(boxGeo,i%2?silver:gold);cube.scale.setScalar(.25);g.add(cube);
  const rim=new THREE.Mesh(torusGeo,i%2?teal:copper);rim.scale.setScalar(.43);g.add(rim);
  const rim2=new THREE.Mesh(torusGeo,dim);rim2.scale.setScalar(.53);rim2.rotation.x=Math.PI/2;g.add(rim2);
  const nucleus=new THREE.Mesh(ballGeo,amber);nucleus.scale.setScalar(.075);g.add(nucleus);
  return {g,cube,rim,rim2,nucleus,base:[-2.45,2.45,-2.15,2.35][i],y:[1.25,.95,-1.25,-1.30][i],z:[-.5,-.2,.65,.8][i]};
 });
 // Swept tubes are updated in place, so the connections themselves bend as the nodes move.
 const segments=low?18:30,sides=low?3:5;
 function tube(index){
  const geometry=geo(new THREE.BufferGeometry()),positions=new Float32Array((segments+1)*(sides+1)*3),indices=[];
  for(let i=0;i<segments;i++)for(let j=0;j<sides;j++){const a=i*(sides+1)+j,b=a+sides+1;indices.push(a,b,a+1,b,b+1,a+1);}
  geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));geometry.setIndex(indices);
  const mesh=new THREE.Mesh(geometry,index%3===1?teal:copper);mesh.frustumCulled=false;mesh.renderOrder=-1;group.add(mesh);
  return {mesh,positions,geometry,a:new THREE.Vector3(),b:new THREE.Vector3(),c:new THREE.Vector3(),index};
 }
 const links=Array.from({length:8},(_,i)=>tube(i));
 const photons=new THREE.InstancedMesh(ballGeo,amber,links.length*4);photons.frustumCulled=false;photons.instanceMatrix.setUsage(THREE.DynamicDrawUsage);group.add(photons);
 const stars=new THREE.InstancedMesh(ballGeo,dim,low?62:128);stars.frustumCulled=false;stars.instanceMatrix.setUsage(THREE.DynamicDrawUsage);group.add(stars);
 const ticks=new THREE.InstancedMesh(boxGeo,copper,low?32:64);ticks.frustumCulled=false;group.add(ticks);
 // A texture halo works with both renderers and does not require a postprocessing pass.
 const glowCanvas=document.createElement('canvas');glowCanvas.width=glowCanvas.height=128;
 const ctx=glowCanvas.getContext('2d'),gradient=ctx.createRadialGradient(64,64,0,64,64,64);
 gradient.addColorStop(0,'#ffb04b60');gradient.addColorStop(.25,'#ec872620');gradient.addColorStop(1,'#ec872600');ctx.fillStyle=gradient;ctx.fillRect(0,0,128,128);
 const glowTexture=new THREE.CanvasTexture(glowCanvas);textures.add(glowTexture);
 const haloMat=mat({map:glowTexture,color:'#ffffff',transparent:true,depthWrite:false,opacity:.75,toneMapped:false},true);
 const halo=new THREE.Mesh(geo(new THREE.PlaneGeometry(5,5)),haloMat);halo.renderOrder=-20;group.add(halo);
 const point=new THREE.Vector3(),tangent=new THREE.Vector3(),normal=new THREE.Vector3(),binormal=new THREE.Vector3(),up=new THREE.Vector3(0,1,0);
 function at(link,u,out){const inv=1-u;return out.copy(link.a).multiplyScalar(inv*inv).addScaledVector(link.c,2*inv*u).addScaledVector(link.b,u*u);}
 function updateTube(link,time){
  const {a,b,c,positions}=link;
  if(link.index<4){a.set(0,Math.sin(time*.72)*.13,0);b.copy(nodes[link.index].g.position);}
  else {a.copy(nodes[link.index-4].g.position);b.copy(nodes[(link.index-3)%4].g.position);}
  c.copy(a).lerp(b,.5);c.z+=Math.sin(time*.41+link.index*.9)*.72+(link.index<4?.75:-.6);c.y+=Math.sin(time*.55+link.index)*.38;
  for(let i=0;i<=segments;i++){
   const u=i/segments;at(link,u,point);
   tangent.copy(c).sub(a).multiplyScalar(2*(1-u)).addScaledVector(v.copy(b).sub(c),2*u).normalize();
   normal.crossVectors(tangent,up);if(normal.lengthSq()<.01)normal.set(1,0,0);else normal.normalize();binormal.crossVectors(tangent,normal).normalize();
   for(let j=0;j<=sides;j++){
    const angle=j/sides*Math.PI*2,idx=(i*(sides+1)+j)*3,r=.011;
    positions[idx]=point.x+r*(normal.x*Math.cos(angle)+binormal.x*Math.sin(angle));
    positions[idx+1]=point.y+r*(normal.y*Math.cos(angle)+binormal.y*Math.sin(angle));
    positions[idx+2]=point.z+r*(normal.z*Math.cos(angle)+binormal.z*Math.sin(angle));
   }
  }
  link.geometry.attributes.position.needsUpdate=true;
 }
 function stamp(mesh,i,p,scale,rotation=0){dummy.position.copy(p);dummy.rotation.set(rotation,rotation*.7,0);dummy.scale.setScalar(scale);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);}
 const phases=[['01 / CONTEXTO','A informação encontra suas conexões.'],['02 / INTELIGÊNCIA','O contexto ajuda a enxergar o próximo passo.'],['03 / AÇÃO','Atendimento e operação seguem no mesmo fluxo.']];
 let previous=-1;
 function update(progress,now,camera,viewport={width:800,height:600}){
  const s=reactorMotion(progress,now),{t}=s;
  core.position.y=s.lift;core.rotation.set(.18+Math.sin(t*.27)*.12,s.yaw,Math.sin(t*.31)*.13);
  inner.rotation.set(t*.12,-t*.18,t*.08);inner.scale.setScalar(.84+s.breath*.23);cage.rotation.set(-t*.06,t*.04,.1);cage.scale.setScalar(1.03+s.breath*.07);
  const fract=.13+s.breath*.29,cellSize=1.16/size;
  for(let i=0;i<count;i++){
   const x=(i%size-(size-1)/2)*cellSize,y=(Math.floor(i/size)%size-(size-1)/2)*cellSize,z=(Math.floor(i/(size*size))-(size-1)/2)*cellSize;
   point.set(x,y,z);const len=point.length()||1;point.multiplyScalar(1+fract/len);point.y+=Math.sin(t*1.1+i*.7)*.015;
   stamp(cells,i,point,cellSize*.83,.035*Math.sin(t*.6+i));
  }
  cells.instanceMatrix.needsUpdate=true;
  orbitals.forEach((r,i)=>{r.position.y=s.lift*.4;r.rotation.set(.3+i*.46+Math.sin(t*.15+i)*.12,.25+i*.52+t*(i%2?.045:-.036),t*(i%2?-.085:.055)+i*.62);});
  nodes.forEach((node,i)=>{
   node.g.position.set(node.base+Math.sin(t*.38+i*1.7)*.22,node.y+Math.cos(t*.46+i)*.22,node.z+Math.sin(t*.34+i*1.1)*.40);
   node.cube.rotation.set(t*(i%2?.25:-.22),t*.35+i,.25+Math.sin(t*.4+i)*.2);
   node.rim.rotation.set(.2+Math.sin(t*.3+i)*.35,t*.18+i,t*.12);node.rim2.rotation.z=-t*.12;
   node.nucleus.position.set(Math.cos(t*.7+i)*.36,Math.sin(t*.7+i)*.36,.04);
  });
  links.forEach(link=>{
   updateTube(link,t);
   for(let j=0;j<4;j++){const u=(t*(.11+link.index*.003)+j*.035+link.index*.137)%1;at(link,u,point);stamp(photons,link.index*4+j,point,j===0?.072:.044-j*.008);}
  });
  photons.instanceMatrix.needsUpdate=true;
  for(let i=0;i<stars.count;i++){
   const a=i*2.39996+t*(i%2?.024:-.019),r=1.4+(i%19)*.12;
   point.set(Math.cos(a)*r,Math.sin(a)*r*.70,Math.sin(i*5.1+t*.09)*1.7-.7);stamp(stars,i,point,.012+(i%4)*.003);
  }
  stars.instanceMatrix.needsUpdate=true;
  for(let i=0;i<ticks.count;i++){
   const a=i/ticks.count*Math.PI*2+t*.10;point.set(Math.cos(a)*2.9,Math.sin(a)*2.9*.66,-.7);
   dummy.position.copy(point);dummy.rotation.set(.2,0,a);dummy.scale.set(.017,.065,.012);dummy.updateMatrix();ticks.setMatrixAt(i,dummy.matrix);
  }
  ticks.instanceMatrix.needsUpdate=true;
  const target=new THREE.Vector3(0,.04,0),fit=Math.max(5.15,6.9/camera.aspect)*(1-.055*Math.sin(t*.21));
  const distance=fit/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2)));
  camera.position.set(Math.sin(s.orbit)*distance,.62+Math.sin(t*.17)*.18,Math.cos(s.orbit)*distance).add(target);camera.lookAt(target);camera.updateProjectionMatrix();camera.updateMatrixWorld(true);
  halo.position.set(0,s.lift*.4,-1.1);halo.quaternion.copy(camera.quaternion);halo.scale.setScalar(.92+s.breath*.10);
  scene.updateMatrixWorld(true);
  nodes.forEach((node,i)=>{
   projected.copy(node.g.position);projected.y+=i<2?.52:-.48;projected.project(camera);
   const px=Math.max(.15,Math.min(.85,projected.x*.5+.5))*viewport.width;
   const py=Math.max(.12,Math.min(.88,-projected.y*.5+.5))*viewport.height;
   if(labels[i]){labels[i].style.transform=`translate3d(${px.toFixed(2)}px,${py.toFixed(2)}px,0) translate(-50%,-50%)`;labels[i].dataset.active=String(s.active===i);}
  });
  if(s.phase!==previous){if(phaseLabel)phaseLabel.textContent=phases[s.phase][0];if(phaseCopy)phaseCopy.textContent=phases[s.phase][1];previous=s.phase;}
  world.dataset.rendered='true';world.dataset.motionTime=t.toFixed(2);world.dataset.coreYaw=s.yaw.toFixed(3);world.dataset.packetPhase=((t*.11)%1).toFixed(3);
  return s;
 }
 let meshCount=0;group.traverse(o=>{if(o.isMesh)meshCount++;});world.dataset.reactorMeshes=meshCount;
 return {group,update,dispose(){scene.remove(group);group.traverse(o=>{if(o.isInstancedMesh)o.dispose();});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());}};
}
