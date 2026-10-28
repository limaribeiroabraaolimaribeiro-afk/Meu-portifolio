import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {solutionsFilmState,filmEase} from '../lib/solutions-state.js';

// Six physical sets. The camera travels between them in one common studio.
// Canvas textures are local illustrations, shared by WebGL and the Canvas fallback.
export function createSolutionsCinema({scene,software=false,quality='medium'}){
 const group=new THREE.Group();group.visible=false;scene.add(group);
 const geometries=new Set(),materials=new Set(),textures=new Set(),sets=[];
 const low=software||quality==='low',world=document.querySelector('.solutions-world');
 const geo=g=>(geometries.add(g),g);
 const mat=(o,basic=false)=>{const m=basic?new THREE.MeshBasicMaterial(o):new THREE.MeshStandardMaterial({roughness:.37,metalness:.68,...o});materials.add(m);return m;};
 const metal=mat({color:'#454b40'}),trim=mat({color:'#b6a382',roughness:.28,metalness:.8}),dark=mat({color:'#171e18',roughness:.6}),copper=mat({color:'#d1742b',roughness:.3,metalness:.75});
 const glow=mat({color:'#ffa04a',toneMapped:false},true),soft=mat({color:'#b98245',toneMapped:false,transparent:true,opacity:.25},true);
 const boxGeo=geo(low?new THREE.BoxGeometry(1,1,1):new RoundedBoxGeometry(1,1,1,2,.045));
 const planeGeo=geo(new THREE.PlaneGeometry(1,1,low?2:8,low?2:5));
 const sphereGeo=geo(new THREE.SphereGeometry(1,low?10:18,low?7:12));
 const ringGeo=geo(new THREE.TorusGeometry(1,.012,low?3:5,low?32:64));
 const dummy=new THREE.Object3D();
 function box(w,h,d,m,parent){const o=new THREE.Mesh(boxGeo,m);o.scale.set(w,h,d);parent.add(o);return o;}
 function ring(radius,parent,m=soft){const o=new THREE.Mesh(ringGeo,m);o.scale.setScalar(radius);parent.add(o);return o;}
 function stamp(mesh,i,x,y,z,w,h,d){dummy.position.set(x,y,z);dummy.scale.set(w,h,d);dummy.rotation.set(0,0,0);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);}
 function round(c,x,y,w,h,r,color){c.fillStyle=color;c.beginPath();c.roundRect(x,y,w,h,r);c.fill();}
 function label(c,s,x,y,size=18,color='#e6e0d0',bold=false){c.fillStyle=color;c.font=`${bold?700:400} ${size}px Arial`;c.fillText(s,x,y);}
 function rule(c,x,y,w,color='#464b3f'){c.fillStyle=color;c.fillRect(x,y,w,1);}
 function texture(kind,title,subtitle=''){
  const canvas=document.createElement('canvas');canvas.width=kind==='main'?1024:640;canvas.height=kind==='main'?640:380;
  const c=canvas.getContext('2d'),w=canvas.width,h=canvas.height;
  round(c,0,0,w,h,16,'#162019');
  c.strokeStyle='#77674c';c.lineWidth=2;c.strokeRect(1,1,w-2,h-2);
  if(kind==='main'){
   round(c,0,0,w,53,12,'#293025');[0,1,2].forEach(i=>{c.fillStyle=i?'#766b56':'#ef984b';c.beginPath();c.arc(29+i*19,27,4,0,7);c.fill();});
   round(c,350,17,320,22,5,'#151e17');label(c,'seunegocio.com.br',440,33,12,'#aea891');
   label(c,'seu.negócio',55,108,28,'#f1ebdc',true);label(c,'UM PRÓXIMO PASSO.',56,163,12,'#e79b58');
   label(c,'Uma boa ideia',55,231,48,'#f3eddf',true);label(c,'ganha presença.',55,287,48,'#ed9b52',true);
   label(c,'Clareza para entender. Um caminho para agir.',57,335,18,'#a9b19f');
   round(c,55,370,235,48,7,'#de883d');label(c,'Vamos conversar  ↗',81,401,18,'#152018',true);
   const g=c.createLinearGradient(660,150,850,440);g.addColorStop(0,'#d4914b');g.addColorStop(1,'#694324');c.fillStyle=g;c.beginPath();c.arc(789,282,125,0,7);c.fill();
   c.strokeStyle='#f2c99b';c.lineWidth=2;c.beginPath();c.ellipse(789,282,145,39,-.45,0,7);c.stroke();
   for(let i=0;i<3;i++){round(c,55+i*310,481,285,110,8,'#263027');label(c,['Seu negócio','Sua história','Seu próximo passo'][i],75+i*310,520,18,'#e5deca',true);rule(c,75+i*310,545,185,'#7c785e');rule(c,75+i*310,561,140,'#535d4b');}
  }else if(kind==='dashboard'){
   round(c,0,0,w,h,12,'#e8e2d4');round(c,0,0,125,h,12,'#1d291f');label(c,'operação',18,40,21,'#f0e8d5',true);
   ['Visão geral','Clientes','Pedidos','Relatórios'].forEach((s,i)=>{if(!i)round(c,11,72,103,30,4,'#d58a43');label(c,s,23,93+i*53,13,i?'#aab29d':'#122015',!i);});
   label(c,'A rotina, conectada.',151,44,25,'#202b20',true);
   ['CLIENTES','PEDIDOS','EQUIPE'].forEach((s,i)=>{round(c,150+i*158,68,145,68,6,'#d6d4c3');label(c,s,164+i*158,91,10,'#75745e');label(c,['Organizados','Em dia','No mesmo fluxo'][i],164+i*158,117,14,'#293226',true);});
   label(c,'PEDIDOS EM ANDAMENTO',153,170,11,'#686b55');
   for(let i=0;i<4;i++){const y=204+i*43;label(c,['Pedido recebido','Dados conferidos','Em preparação','Pronto para seguir'][i],153,y,15,'#343c2e');round(c,486,y-17,121,24,4,i===3?'#c99155':'#d8d5c6');label(c,['Recebido','Conferido','Em andamento','Concluído'][i],498,y,10,'#5c492f');rule(c,153,y+14,454,'#c8c6b5');}
  }else{
   label(c,'dev.abraao / SOLUÇÕES',34,42,11,'#b6a480');rule(c,34,63,w-68,'#605c46');
   label(c,title,34,128,kind==='module'?(title.length>18?35:52):title.length>24?24:30,'#f1e7d2',true);
   label(c,subtitle,34,169,16,'#a8b19c');
   if(kind==='code'){
    ['quando uma mensagem chegar','  → conferir os dados','  → registrar o pedido','  → enviar a confirmação'].forEach((s,i)=>label(c,s,35,218+i*30,16,i===3?'#f0a05a':'#a7b99d'));
   }else if(kind==='answer'){
    round(c,32,200,w-64,128,7,'#29392a');label(c,'PRÓXIMO PASSO',49,229,11,'#e5a15e');label(c,'Organizar a informação.',49,267,23,'#f0e6ce',true);label(c,'A decisão continua com você.',49,300,15,'#acb89b');
   }else if(kind==='module'){
    [0,1,2].forEach(i=>{round(c,33,204+i*43,w-66,31,5,i===2?'#b97936':'#304330');label(c,['CONTEXTO','FLUXO','PRONTO PARA SEGUIR'][i],49,225+i*43,12,i===2?'#fff1d3':'#bfc6ae');});
   }else{
    round(c,33,207,w-66,89,7,'#283a2b');label(c,'Informação conectada',50,243,20,'#dcdcc4',true);label(c,'Tudo segue no mesmo caminho.',50,274,15,'#a6b79b');
    c.fillStyle='#e99546';c.fillRect(34,h-29,w-68,3);
   }
  }
  const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=low?1:4;textures.add(t);return t;
 }
 function panel(w,h,kind,title,subtitle,parent){
  const g=new THREE.Group();parent.add(g);
  const frame=box(w+.10,h+.10,.10,trim,g);frame.renderOrder=5;
  const inset=box(w+.045,h+.045,.04,dark,g);inset.position.z=.065;inset.renderOrder=6;
  const m=mat({color:'#ffffff',map:texture(kind,title,subtitle),toneMapped:false},true);
  const face=new THREE.Mesh(planeGeo,m);face.scale.set(w,h,1);face.position.z=.092;face.renderOrder=8;g.add(face);
  const tab=box(.45,.025,.035,glow,g);tab.position.set(-w/2+.36,h/2+.07,.03);tab.renderOrder=9;
  return g;
 }
 function chip(title,subtitle,parent,w=2.12){return panel(w,w*.59375,'module',title,subtitle,parent);}
 function connector(a,b,parent,bend=.6){
  const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b);
  const mid=start.clone().lerp(end,.5);mid.z+=bend;mid.y+=.24;
  const path=new THREE.QuadraticBezierCurve3(start,mid,end);
  const mesh=new THREE.Mesh(geo(new THREE.TubeGeometry(path,low?12:24,.018,low?3:5,false)),copper);mesh.renderOrder=2;parent.add(mesh);
  const packet=new THREE.Mesh(sphereGeo,glow);packet.scale.setScalar(.065);parent.add(packet);
  return {mesh,path,packet};
 }
 function stage(i){
  const g=new THREE.Group();g.position.x=i*14;group.add(g);
  const floor=box(9,.07,5,dark,g);floor.position.set(0,-1.75,-.1);floor.renderOrder=-10;
  const line=box(8.3,.012,.035,soft,g);line.position.set(0,-1.70,2.2);
  const halo=ring(2.9,g,soft);halo.rotation.x=-Math.PI/2;halo.position.y=-1.69;halo.renderOrder=-5;
  const marks=new THREE.InstancedMesh(boxGeo,trim,low?12:24);g.add(marks);
  for(let j=0;j<marks.count;j++){const a=j/marks.count*Math.PI*2;stamp(marks,j,Math.cos(a)*3.02,-1.69,Math.sin(a)*2.1,.035,.018,.10);}
  const s={g,items:[],wires:[],rings:[halo]};sets.push(s);return s;
 }
 function moving(s,obj,x,y,z,order=0,rx=0,ry=0){obj.userData.pose={x,y,z,order,rx,ry};s.items.push(obj);return obj;}
 // 01 / Page elements arrive from different depth planes, then become one website.
 {
  const s=stage(0),screen=panel(5.55,3.47,'main','','',s.g);
  moving(s,screen,-.35,.15,-.35,0,0,.08);
  const phone=panel(1.05,2.1,'module','Seu negócio','Feito para conectar.',s.g);moving(s,phone,2.35,-.56,1.10,2,-.03,-.18);
  const presence=chip('PRESENÇA','Um caminho claro para o cliente.',s.g,2.25);moving(s,presence,-2.20,1.58,.95,1,.02,.13);
  const c=connector([1.5,-1.5,.1],[2.35,-.7,1.0],s.g,.2);s.wires.push(c);
 }
 // 02 / A dashboard is lifted into view while records arrive in an operating queue.
 {
  const s=stage(1),screen=panel(5.65,3.36,'dashboard','','',s.g);moving(s,screen,0,.20,-.20,0,0,-.08);
  const record=chip('PEDIDO ORGANIZADO','Do atendimento à operação.',s.g,2.5);moving(s,record,-1.95,-.63,1.25,1,.05,.15);
  const sync=chip('EQUIPE CONECTADA','A mesma informação para todos.',s.g,2.35);moving(s,sync,2.20,1.28,.65,2,-.02,-.15);
  s.wires.push(connector([-2,-.9,1.1],[1.3,-1.1,.15],s.g,.35));
 }
 // 03 / Four physical stages form the route; live packets visibly complete the path.
 {
  const s=stage(2),positions=[[-2.35,.85,-.35],[-.6,1.15,-.85],[1.6,.55,-.25],[2.15,-1.0,1.15]];
  ['MENSAGEM','CONFERIR','REGISTRAR','CONFIRMAR'].forEach((name,j)=>{const o=chip(name,['O cliente inicia.','O contexto é verificado.','O pedido encontra seu lugar.','A resposta chega ao cliente.'][j],s.g,1.85);moving(s,o,...positions[j],j,.02,(j-1.5)*-.09);if(j)s.wires.push(connector(positions[j-1],positions[j],s.g,.7));});
  const logic=panel(2.75,1.64,'code','UMA REGRA. UM CAMINHO.','O trabalho segue entre as etapas.',s.g);moving(s,logic,-1.5,-.95,1.30,2,.03,.18);
 }
 // 04 / Context cards orbit a knowledge core. An answer emerges from their intersection.
 {
  const s=stage(3),core=new THREE.Mesh(geo(new THREE.IcosahedronGeometry(.68,low?0:1)),copper);s.g.add(core);moving(s,core,0,.15,.1,0);
  for(let j=0;j<3;j++){const r=ring(1.05+j*.22,s.g,j===1?glow:soft);r.rotation.set(.4+j*.8,.5+j*.6,.1);s.rings.push(r);}
  const poses=[[-2.10,.9,-.15],[1.80,1.22,-.65],[-2.05,-.95,.85]];
  ['DOCUMENTOS','HISTÓRICO','SEU PROCESSO'].forEach((name,j)=>{const o=chip(name,'Informação com o contexto certo.',s.g,1.75);moving(s,o,...poses[j],j,.02,j===1?-.15:.16);s.wires.push(connector(poses[j],[0,.15,.1],s.g,.5));});
  const answer=panel(2.85,1.69,'answer','INFORMAÇÃO QUE AJUDA A AGIR','Uma resposta nasce do contexto.',s.g);moving(s,answer,1.65,-.85,1.1,3,0,-.14);
 }
 // 05 / A six-port integration engine. Curved conduits carry data between real roles.
 {
  const s=stage(4),hub=new THREE.Group();s.g.add(hub);moving(s,hub,0,0,.1,0);
  box(1.20,1.75,.65,metal,hub);box(1.29,1.84,.12,trim,hub).position.z=-.27;
  const face=chip('CONECTAR','A informação continua.',hub,1.6);face.position.set(0,0,.43);
  for(let j=0;j<5;j++)box(.045,.13,.03,glow,hub).position.set(-.43+j*.215,-1.02,.36);
  const poses=[[-2.5,1.0,-.65],[.15,1.8,-.85],[2.6,.95,-.45],[-2.5,-.9,.9],[.15,-1.45,1.20],[2.55,-.85,1.0]];
  ['ATENDIMENTO','CLIENTES','VENDAS','FINANCEIRO','PEDIDOS','ESTOQUE'].forEach((name,j)=>{const o=chip(name,'Dados no mesmo fluxo.',s.g,1.62);moving(s,o,...poses[j],1+j*.2,0,(j%3-1)*-.16);s.wires.push(connector([0,.05,.28],poses[j],s.g,.7));});
  const r=ring(2.25,s.g,soft);r.rotation.x=1.1;r.position.set(0,-.1,0);s.rings.push(r);
 }
 // 06 / Separate modules dock into a purposeful architecture instead of another template.
 {
  const s=stage(5),back=box(5.6,3.5,.1,metal,s.g);back.position.set(0,.15,-.55);
  const modules=[[-1.73,.64,0],[.2,.64,.1],[2.02,.64,.05],[-1.35,-.83,.55],[1.25,-.83,.65]];
  ['ATENDIMENTO','OPERAÇÃO','AUTOMAÇÃO','INFORMAÇÃO','EVOLUÇÃO'].forEach((name,j)=>{const w=j<3?1.65:2.35,o=chip(name,'Construído para o seu cenário.',s.g,w);moving(s,o,...modules[j],j*.6,0,(j-2)*.025);});
  const seal=chip('SEU NEGÓCIO','Cada parte tem um motivo.',s.g,2.3);moving(s,seal,.75,1.70,1.05,3,-.04,-.13);
  for(let j=0;j<4;j++)s.wires.push(connector(modules[j],modules[j+1],s.g,.15));
 }
 // Very small suspended particles and a studio spine give the travelling camera depth cues.
 const dust=new THREE.InstancedMesh(sphereGeo,soft,low?18:40);group.add(dust);
 const v=new THREE.Vector3();
 let meshCount=0;group.traverse(o=>{if(o.isMesh)meshCount++;});world.dataset.cinemaMeshes=meshCount;
 sets.forEach(s=>s.rings.forEach(r=>r.userData.rest=r.rotation.toArray().slice(0,3)));
 function update(progress,now,camera){
  const state=solutionsFilmState(progress),mobile=innerWidth<=700,aspect=camera.aspect;
  const target=new THREE.Vector3(state.x,.10,.05);
  const fit=Math.max(6.25,(mobile?8.5:8.1)/aspect)*(1-(1-state.zoom)*.7);
  const distance=fit/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2)));
  const yaw=state.yaw*(mobile?.70:1);
  camera.position.set(Math.sin(yaw)*distance,1.25+distance*.12,Math.cos(yaw)*distance).add(target);
  camera.lookAt(target);camera.updateProjectionMatrix();
  sets.forEach((s,i)=>{
   s.g.visible=Math.abs(i-state.focus)<1.06;
   if(!s.g.visible)return;
   const local=i===state.index?state.local:i>state.index?0:1;
   const build=filmEase(.025,.43,local),connect=filmEase(.25,.69,local);
   s.items.forEach((o,j)=>{
    const p=o.userData.pose,t=filmEase(.02+p.order*.045,.43+p.order*.045,local),inv=1-t;
    o.position.set(p.x+inv*(j%2?2.3:-2.3),p.y+inv*(1.45+p.order*.2),p.z-inv*(2.6+p.order*.30));
    o.rotation.set(p.rx+inv*.18,p.ry+inv*(j%2?.5:-.5),inv*(j%2?.09:-.09));
    o.scale.setScalar(.76+t*.24);
    if(i===3&&j===0){o.rotation.y=now*.00012;o.rotation.z=now*.00008;}
   });
   s.wires.forEach((wire,j)=>{
    wire.mesh.scale.setScalar(Math.max(.001,connect));wire.mesh.visible=connect>.02;
    wire.packet.visible=connect>.7;
    wire.path.getPoint(((now*.00018+j*.17)%1),v);wire.packet.position.copy(v);
    wire.packet.scale.setScalar(.045+state.resolve*.025);
   });
   s.rings.forEach((r,j)=>{if(j){const b=r.userData.rest;r.rotation.set(b[0],b[1]+now*.00004,b[2]+now*.00006);}});
  });
  for(let j=0;j<dust.count;j++){
   const x=state.x+Math.sin(j*23.4)*5.5,y=Math.sin(j*5.1+now*.00010)*2.4,z=Math.cos(j*6.8)*3.8-1;
   stamp(dust,j,x,y,z,.012,.012,.012);
  }
  dust.instanceMatrix.needsUpdate=true;
  world.dataset.rendered='true';world.dataset.cameraShot=state.index;world.dataset.cameraTravel=state.travel.toFixed(3);
  return state;
 }
 return {group,update,dispose(){scene.remove(group);group.traverse(o=>{if(o.isInstancedMesh)o.dispose();});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());}};
}
