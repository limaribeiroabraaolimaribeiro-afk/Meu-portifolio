import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {resultFilmState,resultEase} from '../lib/result-state.js';

// A physical atlas of a business: records dock into stations, links carry actions,
// a command surface lifts out of the structure and new paths rise behind it.
export function createResultCinema({scene,software=false,quality='medium'}){
 const group=new THREE.Group();group.visible=false;scene.add(group);
 const world=document.querySelector('.result-world'),low=software||quality==='low';
 const geometries=new Set(),materials=new Set(),textures=new Set();
 const geo=g=>(geometries.add(g),g),mat=(o,basic=false)=>{const m=basic?new THREE.MeshBasicMaterial(o):new THREE.MeshStandardMaterial({roughness:.35,metalness:.62,...o});materials.add(m);return m;};
 const graphite=mat({color:'#2a3e37'}),edge=mat({color:'#819a82',metalness:.8}),black=mat({color:'#101e1b'}),gold=mat({color:'#d08843',roughness:.25,metalness:.72});
 const light=mat({color:'#ffc27a',toneMapped:false},true),sage=mat({color:'#a4cbb3',toneMapped:false},true);
 const trace=mat({color:'#d38f4d',transparent:true,opacity:.6,toneMapped:false},true),faint=mat({color:'#8daf9a',transparent:true,opacity:.16,toneMapped:false,depthWrite:false},true);
 const boxGeo=geo(low?new THREE.BoxGeometry(1,1,1):new RoundedBoxGeometry(1,1,1,2,.045));
 const planeGeo=geo(new THREE.PlaneGeometry(1,1,low?3:9,low?2:5));
 const sphereGeo=geo(new THREE.SphereGeometry(1,low?6:10,low?4:7));
 const ringGeo=geo(new THREE.TorusGeometry(1,.013,low?3:5,low?44:80));
 const dummy=new THREE.Object3D(),point=new THREE.Vector3(),axis=new THREE.Vector3(0,1,0);
 function box(w,h,d,m,parent,x=0,y=0,z=0,order=0){const o=new THREE.Mesh(boxGeo,m);o.scale.set(w,h,d);o.position.set(x,y,z);o.renderOrder=order;parent.add(o);return o;}
 function ring(r,m,parent,x=0,y=0,z=0){const o=new THREE.Mesh(ringGeo,m);o.scale.setScalar(r);o.position.set(x,y,z);parent.add(o);return o;}
 function text(c,s,x,y,size=18,color='#dbdfc9',bold=false){c.font=`${bold?700:400} ${size}px Arial`;c.fillStyle=color;c.fillText(s,x,y);}
 function rect(c,x,y,w,h,r,color){c.fillStyle=color;c.beginPath();c.roundRect(x,y,w,h,r);c.fill();}
 function texture(kind,title,lines=[]){
  const canvas=document.createElement('canvas');canvas.width=kind==='dashboard'?1024:512;canvas.height=kind==='dashboard'?640:340;
  const c=canvas.getContext('2d'),w=canvas.width,h=canvas.height;
  rect(c,0,0,w,h,14,kind==='dashboard'?'#e4e0d1':'#152b25');
  if(kind==='dashboard'){
   rect(c,0,0,w,65,12,'#243e33');text(c,'seu.negócio',30,43,27,'#efe4c9',true);text(c,'OPERAÇÃO CONECTADA',690,41,16,'#b7c5a7');
   text(c,'Uma visão. O mesmo caminho.',35,118,32,'#253a2b',true);text(c,'Do primeiro contato à próxima entrega.',36,152,19,'#7a8069');
   const heads=['RECEBER','PREPARAR','ENTREGAR'];
   heads.forEach((s,i)=>{
    const x=34+i*325;rect(c,x,187,306,205,9,'#d3d6c1');rect(c,x+17,204,272,30,5,i===2?'#bf8a4e':'#bfc8ad');text(c,s,x+30,225,14,'#31452c',true);
    text(c,['Pedido recebido','Equipe em ação','Pronto para seguir'][i],x+18,275,20,'#253c2a',true);
    text(c,['Cliente e contexto','Informação disponível','Atualização registrada'][i],x+18,307,15,'#6a795e');
    rect(c,x+18,343,270,4,2,'#bac3a7');rect(c,x+18,343,270*(i===0?1:i===1?.7:.45),4,2,'#b47d40');
   });
   text(c,'CLAREZA PARA O PRÓXIMO PASSO',37,440,15,'#6b795e',true);
   c.strokeStyle='#c4c9b3';c.lineWidth=1;for(let j=0;j<3;j++){c.beginPath();c.moveTo(36,470+j*55);c.lineTo(640,470+j*55);c.stroke();}
   c.strokeStyle='#aa6c2a';c.lineWidth=4;c.beginPath();[[40,558],[130,540],[210,548],[310,502],[420,509],[520,475],[635,455]].forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.stroke();
   rect(c,690,428,300,175,9,'#294332');text(c,'EQUIPE',715,466,14,'#d8b576');text(c,'Contexto',715,511,27,'#e3e0c8',true);text(c,'compartilhado.',715,547,27,'#e3e0c8',true);text(c,'Cada parte sabe o próximo passo.',715,577,12,'#acbc9d');
  }else{
   text(c,'SEU NEGÓCIO / '+title,26,38,12,'#bba97d',true);c.fillStyle='#6f805f';c.fillRect(26,55,w-52,1);
   text(c,title,26,108,34,'#f0e4c9',true);text(c,lines[0]||'A informação encontra direção.',26,145,17,'#a4b89c');
   lines.slice(1,4).forEach((s,i)=>{const y=181+i*47;rect(c,24,y,w-48,36,5,i===2?'#73572e':'#2a4534');c.fillStyle=i===2?'#e8b673':'#8da37b';c.beginPath();c.arc(42,y+18,3,0,7);c.fill();text(c,s,56,y+24,15,i===2?'#f2deb6':'#c1ceb0');});
  }
  const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=low?1:4;textures.add(t);return t;
 }
 function screen(w,h,kind,title,lines,parent){
  const g=new THREE.Group();parent.add(g);
  box(w+.12,h+.12,.12,edge,g,0,0,0,5);box(w+.055,h+.055,.045,black,g,0,0,.075,6);
  const face=new THREE.Mesh(planeGeo,mat({map:texture(kind,title,lines),color:'#fff',toneMapped:false},true));face.scale.set(w,h,1);face.position.z=.108;face.renderOrder=8;g.add(face);
  box(.32,.023,.025,light,g,-w/2+.24,h/2+.085,.08,9);return g;
 }
 const structure=new THREE.Group();group.add(structure);
 const plates=[];
 for(let i=0;i<9;i++){
  const g=new THREE.Group();structure.add(g);const col=i%3,row=Math.floor(i/3);
  box(2.24,.17,1.5,graphite,g,0,0,0,-10);box(2.26,.027,1.51,gold,g,0,-.11,0,-10);
  box(1.88,.014,.018,trace,g,0,.095,.59,-8);
  box(.018,.015,1.18,faint,g,-.96,.095,0,-8);
  const led=box(.12,.035,.07,light,g,.84,.08,.61,-7);
  plates.push({g,x:(col-1)*2.34,y:-1.72,z:(row-1)*1.6,led});
 }
 // Four business stations, with their own trays, consoles and illuminated data ports.
 const stations=[],roles=[
  ['CLIENTES',['Um só histórico.','Contato','Contexto','Próximo passo'],[-2.78,.60,.2],[-4.1,1.65,1.4]],
  ['PEDIDOS',['O caminho da entrega.','Receber','Preparar','Entregar'],[2.78,.63,.1],[4.2,-.4,1.8]],
  ['ESTOQUE',['A operação acompanha.','Entrada','Reserva','Saída'],[-2.65,-.85,1.5],[-3.25,-1.25,3]],
  ['FINANCEIRO',['O registro continua.','Registrar','Conferir','Acompanhar'],[2.65,-.82,1.45],[3.75,2.1,-.8]]
 ];
 roles.forEach(([title,lines,pose,scatter],i)=>{
  const g=new THREE.Group();group.add(g);const panel=screen(1.87,1.24,'station',title,lines,g);
  panel.rotation.y=(i%2?-.10:.10);box(1.92,.08,.70,black,g,0,-.73,-.06,-3);box(1.92,.025,.045,trace,g,0,-.68,.30,2);
  const port=ring(.12,light,g,0,-.78,.34);port.rotation.x=Math.PI/2;
  const pedestal=box(.12,.55,.12,edge,g,0,-1.0,-.17,-4);
  const beacons=[];for(let j=0;j<3;j++)beacons.push(box(.11,.018,.035,sage,g,-.55+j*.21,-.69,.26,4));
  const scan=box(1.68,.009,.007,trace,panel,0,-.48,.119,9);
  stations.push({g,panel,pedestal,port,beacons,scan,pose:new THREE.Vector3(...pose),scatter:new THREE.Vector3(...scatter)});
 });
 const command=new THREE.Group();group.add(command);
 const mainScreen=screen(3.5,2.18,'dashboard','',[],command);mainScreen.position.set(0,.55,-.15);
 const screenSpine=box(.14,.9,.18,gold,command,0,-.98,-.20,-4);
 const deck=box(3.7,.13,1.45,graphite,command,0,-1.40,.12,-5);
 const controls=new THREE.InstancedMesh(boxGeo,edge,low?12:24);command.add(controls);controls.renderOrder=3;
 for(let i=0;i<controls.count;i++){dummy.position.set(-1.52+(i%8)*.43,-1.31,-.24+Math.floor(i/8)*.29);dummy.rotation.set(0,0,0);dummy.scale.set(.28,.025,.14);dummy.updateMatrix();controls.setMatrixAt(i,dummy.matrix);}
 const processRings=[];
 for(let i=0;i<3;i++){const r=ring(.56+i*.17,i===1?trace:faint,command,0,-.89,.48);r.rotation.x=Math.PI/2;r.renderOrder=-1;processRings.push(r);}
 const processDisc=new THREE.Mesh(geo(new THREE.CylinderGeometry(.47,.47,.10,low?16:32)),gold);processDisc.position.set(0,-.87,.48);command.add(processDisc);
 // A segmented scaffold and trace map appear from below before the screens dock.
 const scaffold=new THREE.Group();group.add(scaffold);const railSegments=[];
 for(let i=0;i<3;i++){
  const r=ring(2.65+i*.28,i===0?trace:faint,scaffold,0,-1.65-i*.13,0);r.rotation.x=-Math.PI/2;r.scale.y*=.69;r.renderOrder=-12;railSegments.push(r);
 }
 const struts=new THREE.InstancedMesh(boxGeo,edge,16);struts.renderOrder=-11;scaffold.add(struts);
 for(let i=0;i<16;i++){const a=i/16*Math.PI*2;dummy.position.set(Math.cos(a)*3.0,-1.99,Math.sin(a)*1.9);dummy.rotation.set(0,-a,0);dummy.scale.set(.055,.45,.055);dummy.updateMatrix();struts.setMatrixAt(i,dummy.matrix);}
 const compass=new THREE.InstancedMesh(boxGeo,trace,low?32:64);compass.renderOrder=-12;scaffold.add(compass);
 // Curved, swept conduits are refilled in place as the stations travel.
 const segments=low?16:28,sides=low?3:5,links=[];
 function conduit(i,a,b){
  const positions=new Float32Array((segments+1)*(sides+1)*3),idx=[];
  for(let k=0;k<segments;k++)for(let j=0;j<sides;j++){const n=k*(sides+1)+j,m=n+sides+1;idx.push(n,m,n+1,m,m+1,n+1);}
  const geometry=geo(new THREE.BufferGeometry());geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));geometry.setIndex(idx);
  const mesh=new THREE.Mesh(geometry,i%3===0?sage:trace);mesh.frustumCulled=false;mesh.renderOrder=2;group.add(mesh);
  const link={mesh,geometry,positions,a:new THREE.Vector3(),b:new THREE.Vector3(),c:new THREE.Vector3(),from:a,to:b,index:i};links.push(link);return link;
 }
 for(let i=0;i<4;i++)conduit(i,i,-1);
 for(let i=0;i<4;i++)conduit(i+4,i,(i+1)%4);
 const tangent=new THREE.Vector3(),normal=new THREE.Vector3(),binormal=new THREE.Vector3(),work=new THREE.Vector3();
 function at(l,u,out){const q=1-u;return out.copy(l.a).multiplyScalar(q*q).addScaledVector(l.c,2*q*u).addScaledVector(l.b,u*u);}
 function fillTube(l,t,connected){
  l.a.copy(stations[l.from].g.position);l.a.y-=.73;l.a.z+=.15;
  if(l.to===-1)l.b.set(0,-1.0+command.position.y,.5);else{l.b.copy(stations[l.to].g.position);l.b.y-=.73;l.b.z+=.15;}
  l.c.copy(l.a).lerp(l.b,.5);l.c.y-=.35;l.c.z+=.35+Math.sin(t*.42+l.index)*.18;
  for(let k=0;k<=segments;k++){
   const u=k/segments;at(l,u,point);tangent.copy(l.c).sub(l.a).multiplyScalar(2*(1-u)).addScaledVector(work.copy(l.b).sub(l.c),2*u).normalize();
   normal.crossVectors(tangent,axis);if(normal.lengthSq()<.01)normal.set(1,0,0);else normal.normalize();binormal.crossVectors(tangent,normal).normalize();
   for(let j=0;j<=sides;j++){const a=j/sides*Math.PI*2,idx=(k*(sides+1)+j)*3,r=.012;
    l.positions[idx]=point.x+r*(normal.x*Math.cos(a)+binormal.x*Math.sin(a));l.positions[idx+1]=point.y+r*(normal.y*Math.cos(a)+binormal.y*Math.sin(a));l.positions[idx+2]=point.z+r*(normal.z*Math.cos(a)+binormal.z*Math.sin(a));
   }
  }
  l.geometry.attributes.position.needsUpdate=true;l.geometry.setDrawRange(0,Math.floor(connected*segments)*sides*6);l.mesh.visible=connected>.005;
 }
 const packets=new THREE.InstancedMesh(sphereGeo,light,links.length*4);packets.frustumCulled=false;packets.instanceMatrix.setUsage(THREE.DynamicDrawUsage);packets.renderOrder=4;group.add(packets);
 // Miniature records travel on the same links as the light pulses.
 const records=[];
 for(let i=0;i<4;i++){
  const g=new THREE.Group();group.add(g);box(.45,.29,.025,black,g,0,0,0,5);
  box(.42,.018,.009,light,g,0,.116,.017,6);
  for(let j=0;j<3;j++)box(j===2?.17:.32,.012,.009,j===2?light:sage,g,j===2?-.075:0,.052-j*.052,.017,6);
  records.push(g);
 }
 // Evolution is represented by new physical paths, not a claim of sales or growth.
 const future=new THREE.Group();group.add(future);const terraces=[],barHeights=[.50,.85,1.25,1.75,2.3,2.85,3.45];
 for(let i=0;i<7;i++){
  const g=new THREE.Group();future.add(g);const column=box(.43,1,.48,i%3===0?gold:graphite,g,0,.5,0,-3);
  const cap=box(.46,.035,.51,light,g,0,1.02,0,0);terraces.push({g,column,cap,height:barHeights[i],x:-2.45+i*.81});
 }
 const growthPoints=terraces.map(o=>new THREE.Vector3(o.x,-1.58+o.height+.14,-2.0)),growthCurve=new THREE.CatmullRomCurve3(growthPoints);
 const growthLine=new THREE.Mesh(geo(new THREE.TubeGeometry(growthCurve,low?32:72,.023,low?3:5,false)),light);growthLine.renderOrder=2;future.add(growthLine);
 const futurePanel=screen(2.7,.89,'station','PRÓXIMO PASSO',['Clareza para continuar.','Ajustar · conectar · evoluir'],future);futurePanel.position.set(.30,2.2,-2.4);futurePanel.scale.setScalar(.8);
 const pathfinder=new THREE.Mesh(sphereGeo,light);pathfinder.scale.setScalar(.07);future.add(pathfinder);
 const satellites=new THREE.InstancedMesh(boxGeo,gold,low?18:36);satellites.frustumCulled=false;satellites.instanceMatrix.setUsage(THREE.DynamicDrawUsage);group.add(satellites);
 const dust=new THREE.InstancedMesh(sphereGeo,faint,low?26:64);dust.frustumCulled=false;group.add(dust);
 const haloCanvas=document.createElement('canvas');haloCanvas.width=haloCanvas.height=128;
 const hc=haloCanvas.getContext('2d'),gradient=hc.createRadialGradient(64,64,1,64,64,64);gradient.addColorStop(0,'#eab46d38');gradient.addColorStop(.3,'#72b59a16');gradient.addColorStop(1,'#72b59a00');hc.fillStyle=gradient;hc.fillRect(0,0,128,128);
 const haloTexture=new THREE.CanvasTexture(haloCanvas);textures.add(haloTexture);
 const halo=new THREE.Mesh(geo(new THREE.PlaneGeometry(10,8)),mat({map:haloTexture,color:'#fff',transparent:true,opacity:.65,depthWrite:false,toneMapped:false},true));halo.renderOrder=-30;group.add(halo);
 const look=new THREE.Vector3(),cameraDirection=new THREE.Vector3();
 function stamp(mesh,i,x,y,z,w,h,d,rx=0,ry=0,rz=0){dummy.position.set(x,y,z);dummy.rotation.set(rx,ry,rz);dummy.scale.set(w,h,d);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);}
 function update(progress,now,camera,viewport={}){
  const s=resultFilmState(progress,now),{t}=s,small=viewport.mobile??camera.aspect<1.2;
  group.rotation.set(0,0,0);group.position.set(0,0,0);
  plates.forEach((o,i)=>{
   const local=resultEase((s.organize-i*.025)/.80),left=1-local;
   o.g.position.set(o.x+Math.sin(i*3.3)*left*2.6,o.y-left*(1.8+i*.13),o.z+Math.cos(i*2.1)*left*2.4);
   o.g.rotation.set(left*(i%2?.65:-.65),left*(i-4)*.26,0);o.g.scale.setScalar(.45+.55*local);o.led.visible=s.connect>.1;
  });
  stations.forEach((o,i)=>{
   const local=resultEase((s.organize-i*.035)/.84),left=1-local,arc=Math.sin(local*Math.PI);
   o.g.position.lerpVectors(o.scatter,o.pose,local);o.g.position.y+=Math.sin(t*.57+i)*(.12*left+.025)+arc*(i%2?.7:-.5);o.g.position.z+=arc*.8;
   o.g.rotation.set(left*(i%2?.26:-.20),left*(i%2?-.42:.42),left*(i%2?.12:-.10));
   o.panel.rotation.x=-.04+left*.14;o.pedestal.scale.y=Math.max(.01,s.organize);o.port.rotation.z=t*.5+i;
   o.beacons.forEach((led,j)=>led.scale.y=.018*(.5+.5*Math.sin(t*2.3+i+j)));
   o.scan.position.y=-.50+((t*.18+i*.25)%1)*1.0;o.scan.visible=s.connect>.2;
  });
  command.position.set(0,-2.7*(1-s.organize),-.15*(1-s.operate));command.scale.setScalar(.30+.70*s.organize);command.visible=s.organize>.005;
  mainScreen.position.y=.55+.70*(1-s.operate);mainScreen.rotation.x=-.22*(1-s.operate);mainScreen.rotation.y=Math.sin(t*.27)*.012;
  deck.position.y=-1.40-.75*(1-s.operate);screenSpine.scale.y=.9+.5*(1-s.operate);
  processRings.forEach((r,i)=>{r.rotation.z=t*(i%2?-.32:.22)+i*.7;r.scale.setScalar((.56+i*.17)*(1+Math.sin(t*.8+i)*.04));});
  processDisc.rotation.y=t*.3;
  scaffold.position.y=-1.2*(1-s.organize);scaffold.scale.setScalar(.8+.2*s.organize);scaffold.visible=s.organize>.01;
  railSegments.forEach((o,i)=>o.rotation.z=t*(i%2?.025:-.035));
  for(let i=0;i<compass.count;i++){const a=i/compass.count*Math.PI*2+t*.025;stamp(compass,i,Math.cos(a)*3.62,-1.8,Math.sin(a)*2.4,.028,.018,i%4===0?.19:.075,0,-a,0);}
  compass.instanceMatrix.needsUpdate=true;
  links.forEach((l,i)=>{
   const connected=resultEase((s.connect-i*.028)/.78);fillTube(l,t,connected);
   for(let j=0;j<4;j++){
    const u=(t*(.15+i*.006)-j*.035+i*.107+1)%1;at(l,u,point);
    const scale=connected*(s.operate*.6+.4)*(j===0?.066:.038-j*.006);
    stamp(packets,i*4+j,point.x,point.y,point.z,scale,scale,scale);
   }
  });packets.instanceMatrix.needsUpdate=true;packets.visible=s.connect>.001;
  records.forEach((record,i)=>{
   const u=(t*.12+i*.23)%1;at(links[i],u,record.position);record.position.y+=.12;
   record.scale.setScalar(s.operate*(.6+.4*Math.sin(u*Math.PI)));record.visible=s.operate>.005;
  });
  future.visible=s.evolve>.001;future.scale.setScalar(Math.max(.001,s.evolve));
  terraces.forEach((o,i)=>{const local=resultEase((s.evolve-i*.04)/.72),h=Math.max(.02,o.height*local);o.g.position.set(o.x,-1.58,-2.0);o.column.scale.y=h;o.column.position.y=h/2;o.cap.position.y=h+.025;});
  growthLine.geometry.setDrawRange(0,Math.floor(s.evolve*(low?32:72))*(low?3:5)*6);growthCurve.getPointAt((t*.13)%1,pathfinder.position);futurePanel.position.y=2.15+Math.sin(t*.6)*.045;
  for(let i=0;i<satellites.count;i++){
   const a=i*2.39996+t*.035,r=3.2+(i%4)*.34,left=1-s.organize;
   const x=Math.cos(a)*r*(.5+left*.8),y=-1.1+Math.sin(a)*.5+left*(Math.cos(i)*2.7),z=Math.sin(a)*r*.70;
   const size=.042+(i%3)*.015;stamp(satellites,i,x,y,z,size,size*.38,size,t*.12+i,t*.16+i,0);
  }satellites.instanceMatrix.needsUpdate=true;
  for(let i=0;i<dust.count;i++){const a=i*2.39996+t*.014,r=3.7+(i%7)*.17;stamp(dust,i,Math.cos(a)*r,Math.sin(i*4.7+t*.12)*2.4,Math.sin(a)*2.7-1,.012,.012,.012);}
  dust.instanceMatrix.needsUpdate=true;
  const yaw=s.yaw*(small?.63:1)+Math.sin(t*.13)*.018;
  look.set(0,-.20+s.evolve*.26,0);
  const fit=Math.max(small?5.5:7.2,(small?10.7:11.8)/camera.aspect)*s.zoom;
  const distance=fit/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2)));
  cameraDirection.set(Math.sin(yaw),s.elevation*(small?.76:1),Math.cos(yaw)).normalize();
  camera.position.copy(cameraDirection).multiplyScalar(distance).add(look);camera.lookAt(look);camera.updateProjectionMatrix();camera.updateMatrixWorld(true);
  records.forEach(record=>record.quaternion.copy(camera.quaternion));
  halo.position.set(0,-.4,-3.0);halo.quaternion.copy(camera.quaternion);halo.scale.setScalar(.90+Math.sin(t*.45)*.04);
  world.dataset.rendered='true';world.dataset.filmProgress=s.p.toFixed(4);world.dataset.motionTime=t.toFixed(2);world.dataset.packetPhase=s.pulse.toFixed(4);world.dataset.cameraYaw=yaw.toFixed(4);
  return s;
 }
 let meshCount=0;group.traverse(o=>{if(o.isMesh)meshCount++;});world.dataset.resultMeshes=meshCount;
 return {group,update,dispose(){scene.remove(group);group.traverse(o=>{if(o.isInstancedMesh)o.dispose();});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());}};
}
