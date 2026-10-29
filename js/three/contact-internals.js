import * as THREE from 'three';

const clamp=n=>Math.max(0,Math.min(1,n));
const ease=n=>{const p=clamp(n);return p*p*(3-2*p);};
const window=(p,a,b)=>ease((p-a)/.035)*(1-ease((p-b+.035)/.035));

// An original, illustrative handset, built as real nested assemblies. The
// exploded positions are functions of progress, so a reverse seek reassembles
// every fastener, lens, contact and flex cable without accumulating drift.
export function createContactInternals({parent,low,geo,mat,textures,boxGeo,planeGeo,palette}){
 const {graphite,black,copper,silver,ceramic,light,pale,violet}=palette;
 const boardMat=mat({color:'#163b30',roughness:.65,metalness:.23});
 const cellMat=mat({color:'#373a37',roughness:.63,metalness:.35});
 const glass=mat({color:'#83728d',roughness:.15,metalness:.75});
 const darkGlass=mat({color:'#202823',roughness:.14,metalness:.7});
 const unitTorus=geo(new THREE.TorusGeometry(1,.075,low?3:6,low?20:48));
 const unitDisc=geo(new THREE.CylinderGeometry(1,1,1,low?12:32));
 const ballGeo=geo(new THREE.IcosahedronGeometry(1,low?0:1));
 const layers=[],bolts=[],cameraStacks=[];
 const dummy=new THREE.Object3D(),a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3();
 const v=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
 const entry=(x,y,z,w,h,d,rz=0)=>({x,y,z,w,h,d,rz});
 function box(w,h,d,m,g,x=0,y=0,z=0){const o=new THREE.Mesh(boxGeo,m);o.scale.set(w,h,d);o.position.set(x,y,z);o.renderOrder=5;g.add(o);return o;}
 function disc(r,d,m,g,x=0,y=0,z=0){const o=new THREE.Mesh(unitDisc,m);o.rotation.x=Math.PI/2;o.scale.set(r,d,r);o.position.set(x,y,z);o.renderOrder=5;g.add(o);return o;}
 function ring(r,m,g,x=0,y=0,z=0){const o=new THREE.Mesh(unitTorus,m);o.scale.setScalar(r);o.position.set(x,y,z);o.renderOrder=5;g.add(o);return o;}
 function batch(items,m,g,geometry=boxGeo){
  const mesh=new THREE.InstancedMesh(geometry,m,items.length);mesh.renderOrder=7;g.add(mesh);
  items.forEach((e,i)=>{dummy.position.set(e.x,e.y,e.z);dummy.rotation.set(0,0,e.rz||0);dummy.scale.set(e.w,e.h,e.d);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);});
  return mesh;
 }
 function component(name,home,destination,start,rotation=[0,0,0],owner=parent){
  const g=new THREE.Group();g.name=`contact-${name}`;g.position.copy(home);owner.add(g);
  const item={g,home,destination,start,rotation};layers.push(item);return g;
 }
 function artwork(w,h,draw){
  const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;const ctx=canvas.getContext('2d');draw(ctx,w,h);
  const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=low?1:4;textures.add(t);return t;
 }
 function face(w,h,map,g,x,y,z){const o=new THREE.Mesh(planeGeo,mat({map,color:'#ffffff',toneMapped:false},true));o.scale.set(w,h,1);o.position.set(x,y,z);o.renderOrder=6;g.add(o);return o;}
 const pcbTexture=artwork(512,512,(ctx,w,h)=>{
  ctx.fillStyle='#14372c';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#719275';ctx.lineWidth=2;
  for(let i=0;i<52;i++){
   const side=i%4,k=Math.floor(i/4),x=28+k*35,y=25+k*35;
   ctx.beginPath();if(side<2){ctx.moveTo(x,side?0:h);ctx.lineTo(x,side?60:430);ctx.lineTo(x+18,side?78:412);ctx.lineTo(x+18,256+(k%3)*25);}else{ctx.moveTo(side===2?0:w,y);ctx.lineTo(side===2?65:440,y);ctx.lineTo(side===2?85:420,y+20);ctx.lineTo(256+(k%3)*18,y+20);}ctx.stroke();
  }
  ctx.fillStyle='#d8b77c';for(let i=0;i<90;i++){ctx.beginPath();ctx.arc(18+(i*67)%475,17+(i*101)%475,2.3,0,Math.PI*2);ctx.fill();}
  ctx.fillStyle='#b9c4a7';ctx.font='13px Manrope, Arial';ctx.fillText('AB / LOGIC ASSEMBLY',22,487);
 });
 const batteryTexture=artwork(384,512,(ctx,w,h)=>{
  ctx.fillStyle='#30352f';ctx.fillRect(0,0,w,h);ctx.fillStyle='#e7dfc9';ctx.font='600 30px Manrope, Arial';ctx.fillText('Li-ion',31,71);
  ctx.font='15px Manrope, Arial';['RECHARGEABLE CELL','POWER / 01','NOMINAL 3.85 V','ILLUSTRATIVE ASSEMBLY'].forEach((s,i)=>ctx.fillText(s,32,111+i*28));
  ctx.strokeStyle='#9da28f';ctx.lineWidth=2;ctx.strokeRect(33,277,98,49);ctx.fillStyle='#9da28f';ctx.fillRect(131,290,8,21);ctx.fillRect(42,286,78,31);
  ctx.font='34px Manrope, Arial';ctx.fillText('+',294,72);ctx.fillText('−',294,119);
  ctx.fillStyle='#c4b998';for(let i=0;i<49;i++)ctx.fillRect(32+i*6.4,374,1+i%3,47+(i%4)*3);
  ctx.font='12px Manrope, Arial';ctx.fillText('ENERGY MODULE  /  AB-01',32,465);
 });
 const chipTexture=artwork(256,256,(ctx,w,h)=>{
  ctx.fillStyle='#323a38';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#a0a69c';ctx.lineWidth=3;ctx.strokeRect(10,10,w-20,h-20);
  ctx.fillStyle='#e7dfcb';ctx.font='600 47px Manrope, Arial';ctx.fillText('AB',28,93);ctx.font='17px Manrope, Arial';ctx.fillText('PROCESSOR',29,135);ctx.font='12px Manrope, Arial';ctx.fillText('SYSTEM / CORE',29,166);ctx.fillText('MEMORY STACK',29,187);ctx.beginPath();ctx.arc(222,226,4,0,7);ctx.fill();
 });

 // Rear skeleton, shielding and thermal stack, visible behind the battery.
 const chassis=component('chassis',v(0,0,-.12),v(.20,.02,-.88),.14,[.05,-.16,0]);
 box(1.54,3.22,.035,graphite,chassis);
 const rails=[];for(const side of [-1,1]){rails.push(entry(side*.77,0,.03,.035,3.2,.09));for(let i=0;i<5;i++)rails.push(entry(side*.74,-1.43+i*.70,.058,.08,.12,.08));}
 batch(rails,silver,chassis);
 const thermal=component('thermal',v(0,-.09,-.055),v(-.47,-.04,-.44),.20,[0,-.22,-.04]);
 box(1.36,2.83,.025,ceramic,thermal);
 box(1.23,2.68,.012,graphite,thermal,0,0,.023);
 for(let i=0;i<(low?10:15);i++)ring(.27+i*.015,copper,thermal,0,-.23,.047+i*.001);
 const thermalTrace=[];for(let i=0;i<8;i++)thermalTrace.push(entry(-.54+i*.022,.69,.055,.010,1.04,.009));batch(thermalTrace,copper,thermal);
 box(.33,.29,.015,silver,thermal,-.34,1.07,.05);

 // Battery pouch, folded seam, adhesive release tabs, connector and terminals.
 const battery=component('battery',v(0,-.47,.06),v(.72,-.62,.84),.18,[.03,-.32,-.08]);
 box(1.17,1.54,.17,ceramic,battery);box(1.11,1.46,.025,cellMat,battery,0,0,.095);
 face(1.04,1.37,batteryTexture,battery,0,0,.112);
 const batterySeams=[];for(const side of [-1,1]){batterySeams.push(entry(side*.576,0,.09,.022,1.49,.026));batterySeams.push(entry(0,side*.748,.09,1.14,.025,.027));}
 batch(batterySeams,silver,battery);
 for(const side of [-1,1]){box(.18,.24,.02,pale,battery,side*.33,-.84,.02);box(.13,.034,.025,copper,battery,side*.33,-.87,.036);}
 const terminals=[];for(let i=0;i<6;i++)terminals.push(entry(-.13+i*.051,.84,.07,.028,.10,.018));batch(terminals,copper,battery);
 box(.38,.11,.075,black,battery,0,.78,.015);

 // Logic board: solder mask, etched traces, RF cans, passives, test points,
 // socket teeth and a separate processor/RAM/BGA package.
 const logic=component('logic-board',v(.03,.94,.06),v(.45,1.00,.52),.29,[-.11,.20,.03]);
 box(1.43,.96,.07,boardMat,logic);face(1.40,.93,pcbTexture,logic,0,0,.041);
 const passives=[],caps=[],pads=[],teeth=[];
 for(let i=0;i<(low?44:88);i++){
  const side=i%4,k=Math.floor(i/4),span=(low?11:22),u=k/(span-1);
  const x=side<2?-.62+u*1.24:(side===2?-.61:.61),y=side<2?(side===0?-.37:.37):-.30+u*.60;
  passives.push(entry(x,y,.071,.040+(i%3)*.007,.027,.037,(i%2)*Math.PI/2));
  caps.push(entry(x-.014,y,.075,.009,.032,.045));caps.push(entry(x+.014,y,.075,.009,.032,.045));
 }
 for(let i=0;i<(low?24:48);i++)pads.push(entry(-.65+(i%12)*.118,-.43+Math.floor(i/12)*.275,.053,.017,.017,.015));
 batch(passives,graphite,logic);batch(caps,silver,logic);batch(pads,copper,logic,ballGeo);
 box(.23,.27,.065,silver,logic,-.48,.06,.078);box(.21,.25,.018,graphite,logic,-.48,.06,.12);
 box(.24,.31,.07,silver,logic,.48,.06,.078);box(.18,.24,.015,ceramic,logic,.48,.06,.12);
 for(let i=0;i<8;i++){box(.015,.019,.011,black,logic,-.55+i%4*.045,.005+Math.floor(i/4)*.10,.134);}
 const socket=box(.74,.65,.035,black,logic,0,.015,.064);socket.name='contact-cpu-socket';
 for(let i=0;i<(low?48:80);i++){
  const k=i%(low?12:20),n=low?12:20,side=Math.floor(i/n),u=k/(n-1);
  teeth.push(entry(side<2?-.35+u*.70:side===2?-.37:.37,side<2?side===0?-.322:.352:-.29+u*.61,.095,side<2?.018:.055,side<2?.055:.018,.019));
 }batch(teeth,copper,logic);
 const processor=component('processor',v(0,.015,.12),v(.07,.04,.73),.40,[-.22,.28,-.08],logic);
 box(.59,.55,.033,copper,processor);box(.55,.51,.055,graphite,processor,0,0,.04);face(.52,.48,chipTexture,processor,0,0,.071);
 processor.children.forEach(o=>{o.renderOrder=o.material?.map?8:7;});
 const solder=[];const ballRows=low?7:12;
 for(let row=0;row<ballRows;row++)for(let col=0;col<ballRows;col++)solder.push(entry((col/(ballRows-1)-.5)*.48,(row/(ballRows-1)-.5)*.44,-.037,.013,.013,.013));
 batch(solder,silver,processor,ballGeo);
 const memory=component('memory',v(0,0,-.017),v(-.40,-.20,-.23),.41,[.06,-.11,.05],processor);
 box(.51,.47,.04,boardMat,memory);box(.44,.39,.025,black,memory,0,0,.03);
 const memContacts=[];for(let i=0;i<20;i++)memContacts.push(entry(-.22+(i%10)*.049,i<10?-.23:.23,.015,.024,.049,.022));batch(memContacts,copper,memory);

 // Three genuine optical stacks: sensor die, filter, aperture, individual
 // lens elements and threaded barrel sleeves, all separating in depth.
 const cameras=component('camera-array',v(-.48,1.18,-.10),v(1.03,1.18,1.03),.53,[-.04,.13,.04]);
 const mount=box(.79,.88,.045,graphite,cameras,.13,-.14,-.05);mount.name='contact-camera-mount';
 for(let i=0;i<3;i++){
  const assembly=new THREE.Group();assembly.name=`contact-optics-${i}`;assembly.position.set(i===1?.43:0,i===2?-.44:0,0);cameras.add(assembly);
  box(.33,.33,.045,copper,assembly);box(.25,.25,.017,black,assembly,0,0,.034);box(.17,.17,.012,glass,assembly,0,0,.049);
  const lensParts=[];
  for(let j=0;j<(low?4:6);j++){
   const piece=new THREE.Group();piece.name=`contact-lens-${i}-${j}`;assembly.add(piece);
   const radius=.142-j*.009;disc(radius,.025,j%2?darkGlass:glass,piece);ring(radius+.010,silver,piece,0,0,.015);
   if(j===1){const blades=[];for(let k=0;k<6;k++){const angle=k*Math.PI/3;blades.push(entry(Math.cos(angle)*.07,Math.sin(angle)*.07,.019,.027,.065,.008,angle+.35));}batch(blades,black,piece);}
   lensParts.push({piece,home:.07+j*.027,index:j});
  }
  const barrel=disc(.178,.13,graphite,assembly,0,0,.12);ring(.18,copper,assembly,0,0,.20);cameraStacks.push({assembly,lensParts,barrel,index:i});
 }
 cameras.traverse(o=>{if(o.isMesh)o.renderOrder=7;});

 // Daughterboard with an actual open USB-C shell and contact tongue. Speaker
 // grille holes and a cutaway linear vibration motor flank the port.
 const io=component('io-board',v(0,-1.38,.065),v(.25,-1.48,.51),.65,[.10,-.12,-.03]);
 box(1.35,.36,.065,boardMat,io);face(1.30,.32,pcbTexture,io,0,0,.039);
 const port=new THREE.Group();io.add(port);port.name='contact-usb-c';port.position.set(0,-.13,.12);
 box(.38,.025,.19,silver,port,0,.073,0);box(.38,.025,.19,silver,port,0,-.073,0);box(.027,.12,.19,silver,port,-.182,0,0);box(.027,.12,.19,silver,port,.182,0,0);
 box(.27,.022,.16,black,port,0,0,.008);const contacts=[];for(let i=0;i<12;i++)contacts.push(entry(-.123+i*.022,0,.092,.009,.025,.022));batch(contacts,copper,port);
 const ioBits=[];for(let i=0;i<20;i++)ioBits.push(entry(-.57+i%10*.126,.075+Math.floor(i/10)*.086,.071,.038,.025,.045));batch(ioBits,ceramic,io);
 const speaker=component('speaker',v(-.47,-.12,.12),v(-.86,-.22,.38),.68,[.09,-.16,-.05],io);
 box(.43,.28,.16,black,speaker);box(.39,.25,.012,silver,speaker,0,0,.09);const grille=[];
 for(let row=0;row<3;row++)for(let col=0;col<7;col++)grille.push(entry(-.15+col*.05,-.075+row*.075,.102,.016,.016,.008));batch(grille,black,speaker,ballGeo);
 const haptic=component('haptic',v(.48,-.10,.11),v(.89,-.15,.39),.71,[.02,.19,.10],io);
 box(.43,.23,.15,silver,haptic);box(.37,.19,.025,graphite,haptic,0,0,.085);
 const coil=[];for(let i=0;i<(low?12:24);i++)coil.push(entry(-.15+i/(low?11:23)*.30,0,.108,.008,.14,.011));batch(coil,copper,haptic);
 const hapticMass=box(.13,.16,.027,ceramic,haptic,0,0,.13);
 for(const assembly of [port,speaker,haptic])assembly.traverse(o=>{if(o.isMesh)o.renderOrder=7;});

 // Captive screws remain attached to their exact chassis holes when closed.
 const fasteners=new THREE.Group();fasteners.name='contact-fasteners';parent.add(fasteners);
 for(let i=0;i<10;i++){
  const x=(i%2?1:-1)*.71,y=-1.45+Math.floor(i/2)*.72;
  const g=new THREE.Group();g.position.set(x,y,.03);fasteners.add(g);disc(.036,.055,silver,g);box(.042,.008,.006,black,g,0,0,.031);box(.008,.042,.006,black,g,0,0,.031);bolts.push({g,x,y});
 }

 // Flexible copper interconnects follow the moving endpoints. A rectangular
 // cross-section and printed parallel conductors read as flex PCB, not wires.
 const flexTexture=artwork(128,64,(ctx,w,h)=>{ctx.fillStyle='#7c431c';ctx.fillRect(0,0,w,h);ctx.fillStyle='#dca65a';for(let i=0;i<6;i++)ctx.fillRect(8+i*20,0,5,h);});
 const flexMat=mat({map:flexTexture,color:'#ffffff',side:THREE.DoubleSide,toneMapped:false},true),flexes=[];
 for(const [from,to,offset] of [[logic,battery,-.27],[logic,io,.43],[logic,cameras,-.42]]){
  const n=low?14:28,g=geo(new THREE.BufferGeometry()),positions=new Float32Array((n+1)*6),uv=new Float32Array((n+1)*4),indices=[];
  for(let i=0;i<=n;i++){uv.set([0,i/n,1,i/n],i*4);if(i<n){const k=i*2;indices.push(k,k+1,k+2,k+1,k+3,k+2);}}
  g.setAttribute('position',new THREE.BufferAttribute(positions,3).setUsage(THREE.DynamicDrawUsage));g.setAttribute('uv',new THREE.BufferAttribute(uv,2));g.setIndex(indices);
  const mesh=new THREE.Mesh(g,flexMat);mesh.frustumCulled=false;mesh.renderOrder=5;parent.add(mesh);flexes.push({mesh,from,to,offset,n,positions});
 }
 const focusParts=[battery,logic,processor,cameras,io];
 const focusNames=['BATERIA E ALIMENTAÇÃO','PLACA LÓGICA','PROCESSADOR E MEMÓRIA','LENTES E SENSORES','CONEXÕES, SOM E VIBRAÇÃO'];
 const focusRanges=[[.19,.32],[.32,.44],[.44,.56],[.56,.69],[.69,.83]];
 const focus=new THREE.Vector3();
 function update(p,t,burst){
  const closing=1-ease((p-.84)/.14);
  layers.forEach(({g,home,destination,start,rotation})=>{
   const amount=ease((p-start)/.11)*closing;
   g.position.lerpVectors(home,destination,amount);g.rotation.set(rotation[0]*amount,rotation[1]*amount,rotation[2]*amount);
   g.scale.setScalar(1);
   g.userData.separation=amount;
  });
  bolts.forEach(({g,x,y},i)=>{const amount=ease((p-.12-i*.004)/.13)*closing;g.position.set(x*(1+amount*.08),y,.03+amount*(.30+i%3*.045));g.rotation.z=amount*Math.PI*3;});
  cameraStacks.forEach(({lensParts,barrel,index})=>{
   const amount=ease((p-.54-index*.018)/.12)*closing;
   lensParts.forEach(({piece,home,index:j})=>{piece.position.z=home+amount*(.08+j*.11);piece.rotation.set(amount*.08*Math.sin(j),amount*.09*Math.cos(j),0);});
   barrel.position.z=.12-amount*.13;barrel.scale.y=.13*(1-amount*.60);
  });
  hapticMass.position.x=Math.sin(t*13)*.023*window(p,.68,.84);
  let index=-1,weight=0;
  focusRanges.forEach(([start,end],i)=>{const w=window(p,start,end);if(w>weight){weight=w;index=i;}});
  if(index>=0){const selected=focusParts[index];selected.scale.setScalar(1+weight*(index===2?.23:.10));selected.position.z+=weight*.13;if(index===2)selected.rotation.y+=Math.PI*.95*window(p,.47,.55);}
  parent.updateMatrixWorld(true);
  for(const f of flexes){
   parent.worldToLocal(f.from.getWorldPosition(a));parent.worldToLocal(f.to.getWorldPosition(b));a.x+=f.offset;a.z+=.10;b.z+=.10;
   for(let i=0;i<=f.n;i++){
    const u=i/f.n;c.lerpVectors(a,b,u);c.x+=Math.sin(u*Math.PI)*.13*burst;c.z+=Math.sin(u*Math.PI)*(.12+burst*.19);
    f.positions.set([c.x-.047,c.y,c.z,c.x+.047,c.y,c.z],i*6);
   }f.mesh.geometry.attributes.position.needsUpdate=true;
  }
  focus.set(0,0,0);
  if(index>=0){parent.worldToLocal(focusParts[index].getWorldPosition(focus));focus.multiplyScalar(weight);}
  return {focus,weight,index,label:index>=0?focusNames[index]:'',open:ease((p-.14)/.14)*closing};
 }
 return {update,layers};
}
