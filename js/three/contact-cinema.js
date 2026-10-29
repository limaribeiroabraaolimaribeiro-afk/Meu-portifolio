import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {contactFilmState} from '../lib/contact-state.js';
const ease=n=>{const p=Math.max(0,Math.min(1,n));return p*p*(3-2*p);};

// A conversation becomes a project route. One shared renderer, no new render loop.
export function createContactCinema({scene,software=false,quality='medium'}){
 const group=new THREE.Group();group.visible=false;scene.add(group);
 const low=software||quality==='low',world=document.querySelector('.contact-world');
 const geometries=new Set(),materials=new Set(),textures=new Set();
 const geo=g=>(geometries.add(g),g),mat=(o,basic=false)=>{const m=basic?new THREE.MeshBasicMaterial(o):new THREE.MeshStandardMaterial({roughness:.29,metalness:.68,...o});materials.add(m);return m;};
 const graphite=mat({color:'#292723'}),black=mat({color:'#11130f'}),copper=mat({color:'#c87530',roughness:.25,metalness:.78}),trim=mat({color:'#b6a48a'});
 const light=mat({color:'#ffb770',toneMapped:false},true),dim=mat({color:'#c48c53',transparent:true,opacity:.22,depthWrite:false,toneMapped:false},true);
 const pale=mat({color:'#eee0be',toneMapped:false},true);
 const boxGeo=geo(low?new THREE.BoxGeometry(1,1,1):new RoundedBoxGeometry(1,1,1,3,.09));
 const planeGeo=geo(new THREE.PlaneGeometry(1,1,low?4:10,low?6:12));
 const sphereGeo=geo(new THREE.SphereGeometry(1,low?6:12,low?4:8));
 const torusGeo=geo(new THREE.TorusGeometry(1,.012,low?3:5,low?44:88));
 const dummy=new THREE.Object3D(),point=new THREE.Vector3(),up=new THREE.Vector3(0,1,0);
 function box(w,h,d,m,parent,x=0,y=0,z=0,order=0){const o=new THREE.Mesh(boxGeo,m);o.scale.set(w,h,d);o.position.set(x,y,z);o.renderOrder=order;parent.add(o);return o;}
 function round(c,x,y,w,h,r,color){c.fillStyle=color;c.beginPath();c.roundRect(x,y,w,h,r);c.fill();}
 function label(c,s,x,y,size=22,color='#e3d9c4',bold=false){c.font=`${bold?700:400} ${size}px Arial`;c.fillStyle=color;c.fillText(s,x,y);}
 function makeTexture(kind,index=0){
  const canvas=document.createElement('canvas');canvas.width=kind==='phone'?512:640;canvas.height=kind==='phone'?1024:350;
  const c=canvas.getContext('2d'),w=canvas.width,h=canvas.height;
  round(c,0,0,w,h,kind==='phone'?34:12,'#1b211b');
  if(kind==='phone'){
   round(c,0,0,w,172,32,'#252f25');c.fillStyle='#f19343';c.beginPath();c.arc(65,102,28,0,7);c.fill();
   label(c,'a.',48,113,29,'#241a0d',true);label(c,'dev.abraao',110,99,30,'#f3e6cc',true);label(c,'CONVERSA INICIAL',112,130,13,'#aaa58b');
   label(c,'O próximo passo começa aqui.',29,214,18,'#b6b69a');
   round(c,25,255,385,176,18,'#333c2d');['Quero melhorar','a rotina do meu','negócio.'].forEach((s,i)=>label(c,s,48,305+i*45,30,'#eee4cd'));
   round(c,89,471,396,179,18,'#ce823a');['Me conta onde','o processo está','travando.'].forEach((s,i)=>label(c,s,112,522+i*45,30,'#201d11',true));
   round(c,25,691,385,133,18,'#333c2d');['Vamos encontrar','um caminho.'].forEach((s,i)=>label(c,s,48,741+i*44,30,'#eee4cd'));
   round(c,23,905,466,70,30,'#30392a');label(c,'Conte seu desafio...',47,948,21,'#9eaa8d');c.fillStyle='#dc9449';c.beginPath();c.arc(454,940,24,0,7);c.fill();label(c,'↗',441,950,29,'#201f12',true);
  }else{
   const names=['ENTENDER','DEFINIR','CONSTRUIR'],sub=['Seu contexto. Sua rotina.','Um caminho que faça sentido.','Uma solução com propósito.'];
   label(c,`0${index+1} / DO CONTEXTO À AÇÃO`,30,43,14,'#c69664');c.fillStyle='#6b6952';c.fillRect(30,66,w-60,1);
   label(c,names[index],30,128,47,'#f1e3c8',true);label(c,sub[index],31,175,23,'#acb497');
   for(let j=0;j<3;j++){round(c,30,213+j*34,(w-60)*[.94,.74,.50][j],11,3,j===2?'#b47b3c':'#46553a');}
   c.fillStyle='#dd9a53';c.fillRect(w-44,104,9,55);
  }
  const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=low?1:4;textures.add(t);return t;
 }
 function face(w,h,texture,parent,z,order=8){const o=new THREE.Mesh(planeGeo,mat({map:texture,color:'#fff',toneMapped:false},true));o.scale.set(w,h,1);o.position.z=z;o.renderOrder=order;parent.add(o);return o;}
 const phone=new THREE.Group();group.add(phone);
 box(1.89,3.79,.22,copper,phone,0,0,-.055,3);
 box(1.83,3.73,.25,graphite,phone,0,0,0,4);
 box(1.72,3.58,.025,black,phone,0,0,.136,5);
 face(1.62,3.39,makeTexture('phone'),phone,.155,8);
 box(.57,.083,.018,black,phone,0,1.61,.171,9);
 box(.38,.018,.025,trim,phone,0,1.605,.186,10);
 box(.40,.032,.020,pale,phone,0,-1.69,.179,9);
 box(.045,.44,.09,copper,phone,.963,.5,-.01,3);
 box(.04,.22,.09,trim,phone,-.963,.68,-.01,3);
 box(.04,.36,.09,trim,phone,-.963,.18,-.01,3);
 // Tiny physical typing lights and a moving scan on the glass keep it alive.
 const typing=[];for(let i=0;i<3;i++){const o=new THREE.Mesh(sphereGeo,light);o.scale.setScalar(.025);o.position.set(-.54+i*.09,-1.19,.178);o.renderOrder=10;phone.add(o);typing.push(o);}
 const modules=[];
 const poses=[[1.57,1.24,-.35],[2.06,-.08,.08],[1.42,-1.35,.57]];
 for(let i=0;i<3;i++){
  const g=new THREE.Group();group.add(g);box(2.08,1.17,.10,trim,g,0,0,-.015,5);box(2.02,1.11,.045,black,g,0,0,.06,6);face(1.94,1.04,makeTexture('plan',i),g,.091);
  box(.32,.025,.02,light,g,-.71,.605,.06,9);
  for(let j=0;j<4;j++)box(.028,.028,.03,j===i?light:trim,g,-.71+j*.10,-.59,.03,4);
  modules.push({g,pose:new THREE.Vector3(...poses[i]),rest:(i-1)*-.08});
 }
 // A speech-shaped ribbon provides depth and carries the conversation into the plan.
 const bubblePoints=[[-2.54,1.65,-.85],[-2.22,2.25,-.90],[.85,2.4,-.9],[2.6,1.78,-.9],[2.84,-1.38,-.5],[1.70,-2.05,-.1],[-.55,-1.97,-.35],[-1.08,-2.43,-.30],[-1.12,-1.97,-.35],[-2.50,-1.1,-.6],[-2.54,1.65,-.85]];
 const bubbleCurve=new THREE.CatmullRomCurve3(bubblePoints.map(p=>new THREE.Vector3(...p))),ribbonGeo=geo(new THREE.TubeGeometry(bubbleCurve,low?58:112,.026,low?3:5,false));
 const ribbon=new THREE.Mesh(ribbonGeo,copper);ribbon.renderOrder=-2;group.add(ribbon);
 const innerRibbon=new THREE.Mesh(geo(new THREE.TubeGeometry(bubbleCurve,low?58:112,.010,low?3:5,false)),light);innerRibbon.renderOrder=-1;group.add(innerRibbon);
 const ribbonPulses=new THREE.InstancedMesh(sphereGeo,light,12);ribbonPulses.frustumCulled=false;ribbonPulses.renderOrder=1;group.add(ribbonPulses);
 const links=modules.map((o,i)=>{
  const start=new THREE.Vector3(-.75,.32-i*.23,.4),end=o.pose.clone();end.x-=.8;
  const mid=start.clone().lerp(end,.5);mid.y+=i===1?-.3:.35;mid.z+=.50;
  const path=new THREE.QuadraticBezierCurve3(start,mid,end),segments=low?18:32,sides=low?3:5;
  const g=geo(new THREE.TubeGeometry(path,segments,.015,sides,false)),m=new THREE.Mesh(g,i===1?light:dim);m.renderOrder=2;group.add(m);return {path,mesh:m,segments,sides};
 });
 const packets=new THREE.InstancedMesh(sphereGeo,light,18);packets.frustumCulled=false;packets.renderOrder=4;group.add(packets);
 const notes=[];
 for(let i=0;i<3;i++){
  const g=new THREE.Group();group.add(g);box(.39,.28,.027,graphite,g,0,0,0,5);box(.32,.018,.01,light,g,0,.09,.022,6);
  for(let j=0;j<3;j++)box(j===2?.17:.29,.01,.01,j===2?light:pale,g,-.02,.038-j*.05,.022,6);notes.push(g);
 }
 const dais=new THREE.Group();group.add(dais);
 const floor=new THREE.Mesh(geo(new THREE.CylinderGeometry(2.95,3.07,.13,low?32:72)),graphite);floor.position.set(0,-2.25,0);floor.scale.z=.57;floor.renderOrder=-15;dais.add(floor);
 const discRings=[];for(let i=0;i<3;i++){const r=new THREE.Mesh(torusGeo,i===1?light:dim);r.scale.setScalar(1.95+i*.44);r.rotation.x=-Math.PI/2;r.position.set(0,-2.15-i*.022,0);r.renderOrder=-13;dais.add(r);discRings.push(r);}
 const ticks=new THREE.InstancedMesh(boxGeo,trim,low?32:64);ticks.renderOrder=-12;dais.add(ticks);
 const dust=new THREE.InstancedMesh(sphereGeo,dim,low?24:48);dust.frustumCulled=false;group.add(dust);
 const haloCanvas=document.createElement('canvas');haloCanvas.width=haloCanvas.height=128;
 const ctx=haloCanvas.getContext('2d'),gradient=ctx.createRadialGradient(64,64,1,64,64,64);gradient.addColorStop(0,'#e9a35d40');gradient.addColorStop(.3,'#c0752520');gradient.addColorStop(1,'#c0752500');ctx.fillStyle=gradient;ctx.fillRect(0,0,128,128);
 const haloTex=new THREE.CanvasTexture(haloCanvas);textures.add(haloTex);
 const halo=new THREE.Mesh(geo(new THREE.PlaneGeometry(8,7)),mat({map:haloTex,color:'#fff',transparent:true,depthWrite:false,opacity:.7,toneMapped:false},true));halo.renderOrder=-30;group.add(halo);
 const look=new THREE.Vector3(),direction=new THREE.Vector3();
 function stamp(mesh,i,p,scale,ry=0){dummy.position.copy(p);dummy.rotation.set(0,ry,0);dummy.scale.setScalar(scale);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);}
 function update(progress,now,camera,viewport={}){
  const s=contactFilmState(progress,now),{t}=s,mobile=viewport.mobile??camera.aspect<1.2;
  phone.position.set(-1.14+.18*s.finish,.12+s.lift,-.08);phone.rotation.set(.055+.04*Math.sin(t*.27),-.24+.20*s.open+Math.sin(t*.23)*.045,-.10+.07*s.open);
  modules.forEach((o,i)=>{
   const local=ease((s.plan-i*.09)/.80),left=1-local;
   o.g.position.copy(o.pose);o.g.position.x+=left*(1.9+i*.3);o.g.position.y+=left*(i%2?-1.45:1.75)+Math.sin(t*.55+i)*.045;
   o.g.position.z-=left*2.1;o.g.rotation.set(left*.22,o.rest+left*.55,Math.sin(t*.3+i)*.012);o.g.scale.setScalar(.55+.45*local);
  });
  typing.forEach((o,i)=>{o.scale.setScalar(.018+(.5+.5*Math.sin(t*3.1-i*.9))*.015);});
  const ribbonFill=.18+.82*s.open;ribbon.geometry.setDrawRange(0,Math.floor(ribbonFill*(low?58:112))*(low?3:5)*6);innerRibbon.geometry.setDrawRange(0,ribbon.geometry.drawRange.count);
  ribbon.rotation.y=innerRibbon.rotation.y=Math.sin(t*.28)*.032;
  for(let i=0;i<12;i++){
   const head=Math.floor(i/4),trail=i%4,u=(t*.075+head/3-trail*.008+1)%1;
   bubbleCurve.getPoint(u,point);point.applyAxisAngle(up,ribbon.rotation.y);
   stamp(ribbonPulses,i,point,u<ribbonFill?(trail===0?.047:.029-trail*.006):0);
  }ribbonPulses.instanceMatrix.needsUpdate=true;
  links.forEach((l,i)=>{
   const join=ease((s.plan-i*.08)/.75);l.mesh.geometry.setDrawRange(0,Math.floor(join*l.segments)*l.sides*6);
   for(let j=0;j<6;j++){const u=(t*(.15+i*.013)-j*.025+i*.23+1)%1;l.path.getPoint(u,point);stamp(packets,i*6+j,point,join*(j===0?.067:.036-j*.004));}
   l.path.getPoint((t*.10+i*.28)%1,notes[i].position);notes[i].position.y+=.10;notes[i].scale.setScalar(join*.88);
  });packets.instanceMatrix.needsUpdate=true;
  dais.position.y=-.8*(1-s.open);dais.rotation.y=Math.sin(t*.14)*.025;
  discRings.forEach((r,i)=>r.rotation.z=t*(i%2?-.055:.035));
  for(let i=0;i<ticks.count;i++){const a=i/ticks.count*Math.PI*2+t*.035;dummy.position.set(Math.cos(a)*2.84,-2.14,Math.sin(a)*1.57);dummy.rotation.set(0,-a,0);dummy.scale.set(.018,.018,i%4===0?.13:.06);dummy.updateMatrix();ticks.setMatrixAt(i,dummy.matrix);}ticks.instanceMatrix.needsUpdate=true;
  for(let i=0;i<dust.count;i++){const a=i*2.39996+t*.02;point.set(Math.cos(a)*(2.8+i%5*.16),Math.sin(i*4.3+t*.12)*2.4,Math.sin(a)*1.5-1);stamp(dust,i,point,.011+i%3*.003);}dust.instanceMatrix.needsUpdate=true;
  look.set(.05,-.08,0);const yaw=s.yaw*(mobile?.65:1)+Math.sin(t*.13)*.018;
  const fit=Math.max(mobile?5.2:6.35,(mobile?6.65:7.4)/camera.aspect)*(1.04-.1*s.open+.04*s.finish);
  const distance=fit/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2)));
  direction.set(Math.sin(yaw),.15+.16*s.plan,Math.cos(yaw)).normalize();camera.position.copy(direction).multiplyScalar(distance).add(look);camera.lookAt(look);camera.updateProjectionMatrix();camera.updateMatrixWorld(true);
  notes.forEach(g=>g.quaternion.copy(camera.quaternion));halo.position.set(0,.1,-2.3);halo.quaternion.copy(camera.quaternion);halo.scale.setScalar(.9+Math.sin(t*.5)*.035);
  world.dataset.rendered='true';world.dataset.filmProgress=s.p.toFixed(4);world.dataset.motionTime=t.toFixed(2);world.dataset.packetPhase=s.flow.toFixed(4);world.dataset.cameraYaw=yaw.toFixed(4);return s;
 }
 let count=0;group.traverse(o=>{if(o.isMesh)count++;});world.dataset.contactMeshes=count;
 return {group,update,dispose(){scene.remove(group);group.traverse(o=>{if(o.isInstancedMesh)o.dispose();});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());}};
}
