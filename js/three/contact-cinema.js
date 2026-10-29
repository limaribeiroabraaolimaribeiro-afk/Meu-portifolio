import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {contactFilmState,contactLayerOpen} from '../lib/contact-state.js';
import {createContactInternals} from './contact-internals.js';
const ease=n=>{const p=Math.max(0,Math.min(1,n));return p*p*(3-2*p);};

// An exploded handset in parallel physical layers, followed by reconstruction
// and the contact reveal. One seekable timeline controls the whole sequence.
export function createContactCinema({scene,software=false,quality='medium'}){
 const group=new THREE.Group();group.visible=false;scene.add(group);
 const world=document.querySelector('.contact-world'),low=software||quality==='low';
 const geometries=new Set(),materials=new Set(),textures=new Set();
 const geo=g=>(geometries.add(g),g),mat=(o,basic=false)=>{const m=basic?new THREE.MeshBasicMaterial(o):new THREE.MeshStandardMaterial({roughness:.30,metalness:.62,...o});materials.add(m);return m;};
 const graphite=mat({color:'#282c31',roughness:.33,metalness:.72}),black=mat({color:'#0c1414'}),copper=mat({color:'#cf833c',roughness:.23,metalness:.8}),trim=mat({color:'#d6dce3',roughness:.22,metalness:.84});
 const silver=trim,ceramic=mat({color:'#8a96a8',metalness:.72,roughness:.28});
 const light=mat({color:'#ffd297',toneMapped:false},true),pale=mat({color:'#e4e7ee',toneMapped:false},true),violet=mat({color:'#c6a9ff',toneMapped:false},true),ice=mat({color:'#a3e2eb',toneMapped:false},true);
 const dim=mat({color:'#b38ff0',transparent:true,opacity:.30,depthWrite:false,toneMapped:false},true);
 const boxGeo=geo(new THREE.BoxGeometry(1,1,1));
 const planeGeo=geo(new THREE.PlaneGeometry(1,1));
 const roundGeo=geo(new RoundedBoxGeometry(1,1,1,low?1:3,.055));
 const ringGeo=geo(new THREE.TorusGeometry(1,.075,low?4:8,low?18:40));
 const discGeo=geo(new THREE.CylinderGeometry(1,1,1,low?16:40));
 function box(w,h,d,m,parent,x=0,y=0,z=0,order=0){const o=new THREE.Mesh(roundGeo,m);o.scale.set(w,h,d);o.position.set(x,y,z);o.renderOrder=order;parent.add(o);return o;}
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
 const turntable=new THREE.Group();turntable.name='contact-turntable';group.add(turntable);
 const phone=new THREE.Group();phone.name='contact-handset';turntable.add(phone);
 const display=new THREE.Group();display.name='contact-display';phone.add(display);
 box(1.84,3.72,.10,graphite,display);
 box(1.76,3.60,.035,black,display,0,0,.057,1);
 const screen=face(1.62,3.39,makeTexture('phone'),display,.082,2);screen.name='contact-whole-screen';
 box(.57,.083,.018,black,display,0,1.61,.094,3);
 box(.38,.018,.025,trim,display,0,1.605,.109,4);
 box(.40,.032,.020,pale,display,0,-1.69,.101,3);
 box(1.76,3.63,.012,ceramic,display,0,0,-.059);
 // A real open frame, rather than an opaque block hiding its contents.
 const frame=new THREE.Group();frame.name='contact-frame';phone.add(frame);
 function contour(w,h,r,Path=THREE.Shape){
  const s=new Path(),x=w/2,y=h/2;s.moveTo(-x+r,-y);s.lineTo(x-r,-y);s.quadraticCurveTo(x,-y,x,-y+r);s.lineTo(x,y-r);s.quadraticCurveTo(x,y,x-r,y);s.lineTo(-x+r,y);s.quadraticCurveTo(-x,y,-x,y-r);s.lineTo(-x,-y+r);s.quadraticCurveTo(-x,-y,-x+r,-y);return s;
 }
 const shape=contour(1.89,3.79,.18);shape.holes.push(contour(1.72,3.61,.14,THREE.Path));
 const frameMesh=new THREE.Mesh(geo(new THREE.ExtrudeGeometry(shape,{depth:.16,bevelEnabled:!low,bevelSize:.012,bevelThickness:.012,bevelSegments:2,curveSegments:low?4:10})),copper);frameMesh.position.z=-.08;frame.add(frameMesh);
 box(.045,.44,.09,copper,frame,.963,.5,0);
 box(.04,.22,.09,trim,frame,-.963,.68,0);box(.04,.36,.09,trim,frame,-.963,.18,0);
 for(let i=0;i<9;i++)box(.027,.023,.03,black,frame,-.34+i*.085,-1.892,0);
 // The uppermost cover retains the copper identity of the handset. Its camera
 // barrels and machined seams move with the cover as a single complete piece.
 const cover=new THREE.Group();cover.name='contact-back-cover';cover.rotation.y=Math.PI;phone.add(cover);
 box(1.88,3.78,.10,copper,cover);
 box(1.80,3.68,.012,mat({color:'#e99b54',roughness:.36,metalness:.72}),cover,0,0,.059,1);
 box(.93,1.01,.07,copper,cover,-.32,1.13,.10,2);
 const coverLensMat=mat({color:'#161f1d',roughness:.12,metalness:.65});
 for(let i=0;i<3;i++){
  const x=-.56+(i===1?.45:0),y=1.39-(i===2?.46:0);
  const socket=new THREE.Mesh(discGeo,black);socket.rotation.x=Math.PI/2;socket.scale.set(.198,.075,.198);socket.position.set(x,y,.164);socket.renderOrder=3;cover.add(socket);
  const rim=new THREE.Mesh(ringGeo,trim);rim.scale.setScalar(.176);rim.position.set(x,y,.209);rim.renderOrder=4;cover.add(rim);
  const glass=new THREE.Mesh(discGeo,coverLensMat);glass.rotation.x=Math.PI/2;glass.scale.set(.151,.013,.151);glass.position.set(x,y,.218);glass.renderOrder=5;cover.add(glass);
  const highlight=box(.043,.012,.005,ceramic,cover,x-.046,y+.047,.229,6);highlight.rotation.z=-.4;
 }
 const stampCanvas=document.createElement('canvas');stampCanvas.width=256;stampCanvas.height=192;const sc=stampCanvas.getContext('2d');sc.fillStyle='#8a431c';sc.font='700 90px Arial';sc.textAlign='center';sc.fillText('a.',128,105);sc.font='16px Arial';sc.fillText('dev.abraao',128,145);
 const stampTexture=new THREE.CanvasTexture(stampCanvas);stampTexture.colorSpace=THREE.SRGBColorSpace;textures.add(stampTexture);
 const stamp=new THREE.Mesh(planeGeo,mat({map:stampTexture,color:'#fff',transparent:true,toneMapped:false},true));stamp.scale.set(.72,.54,1);stamp.position.set(0,-.1,.07);cover.add(stamp);
 const mechanism=new THREE.Group();mechanism.name='contact-mechanism';mechanism.rotation.y=Math.PI;phone.add(mechanism);
 const internals=createContactInternals({parent:mechanism,low,geo,mat,textures,boxGeo,planeGeo,palette:{graphite,black,copper,silver:trim,ceramic,light,pale,violet}});
 if(!software){const key=new THREE.PointLight('#fff0d8',19,17);key.position.set(-3,5,5);group.add(key);const rim=new THREE.PointLight('#efad70',12,15);rim.position.set(4,-1,3);group.add(rim);}
 const look=new THREE.Vector3(),direction=new THREE.Vector3(),corner=new THREE.Vector3(),depthPosition=new THREE.Vector3(),viewInverse=new THREE.Quaternion();
 // The Canvas fallback sorts complete physical assemblies by their current
 // camera depth. Front and back never swap fixed paint priorities mid-spin.
 function depthOrder(g,camera){
  if(g.isMesh){g.geometry.computeBoundingBox();g.geometry.boundingBox.getCenter(depthPosition).applyMatrix4(g.matrixWorld);}else g.getWorldPosition(depthPosition);
  const base=depthPosition.applyMatrix4(camera.matrixWorldInverse).z*10000;
  g.traverse(o=>{if(o.isMesh){if(o.userData.localOrder===undefined)o.userData.localOrder=o.renderOrder;o.renderOrder=base+o.userData.localOrder;}});
 }
 function update(progress,now,camera,viewport={}){
  const s=contactFilmState(progress,now),{t,p,open,tilt,reveal}=s,mobile=viewport.mobile??camera.aspect<1.2;
  phone.position.set(Math.sin(t*.24)*.018,-.27*tilt+s.lift,0);
  turntable.rotation.y=Math.PI*s.back;
  phone.rotation.set(.035+1.065*tilt,-.17+.10*tilt+Math.sin(t*.13)*.018,-.08+.94*tilt);
  const displayOpen=contactLayerOpen(p,6),frameOpen=contactLayerOpen(p,5),coverOpen=contactLayerOpen(p,0);
  display.position.set(0,0,.18+(2.25-.18)*displayOpen);
  frame.position.set(0,0,1.28*frameOpen);
  cover.position.set(0,0,-.15-3.37*coverOpen);
  internals.update(p,t,open);mechanism.visible=open>.005&&p>.22&&p<.80;
  // Fit all eight corners of the complete layer envelope in camera space.
  // This keeps the copper cover and bottom glass in frame even on narrow phones.
  const minZ=Math.min(-.38,cover.position.z-.28),maxZ=Math.max(.28,display.position.z+.12),tan=Math.tan(THREE.MathUtils.degToRad(camera.fov/2));
  phone.updateWorldMatrix(true,false);look.set(0,0,(minZ+maxZ)/2).applyMatrix4(phone.matrixWorld);
  direction.set(.13+.07*tilt,.18+.11*tilt,1).normalize();camera.position.copy(direction).add(look);camera.lookAt(look);viewInverse.copy(camera.quaternion).invert();
  let filmDistance=0;
  for(const x of [-1.03,1.03])for(const y of [-1.95,1.95])for(const z of [minZ,maxZ]){
   corner.set(x,y,z).applyMatrix4(phone.matrixWorld).sub(look).applyQuaternion(viewInverse);
   filmDistance=Math.max(filmDistance,Math.abs(corner.x)*1.04/(tan*camera.aspect)+corner.z,Math.abs(corner.y)*1.04/tan+corner.z);
  }
  const contactFit=Math.max(mobile?5.8:6.45,(mobile?8.0:8.2)/camera.aspect),distance=THREE.MathUtils.lerp(filmDistance,contactFit/(2*tan),reveal);
  camera.position.copy(direction).multiplyScalar(distance).add(look);camera.lookAt(look);camera.updateProjectionMatrix();camera.updateMatrixWorld(true);
  phone.updateWorldMatrix(true,true);depthOrder(display,camera);depthOrder(frame,camera);depthOrder(cover,camera);
  internals.layers.forEach(({g})=>depthOrder(g,camera));internals.fasteners.children.forEach(g=>depthOrder(g,camera));internals.flexes.forEach(({mesh})=>depthOrder(mesh,camera));
  world.dataset.rendered='true';world.dataset.filmProgress=p.toFixed(4);world.dataset.motionTime=t.toFixed(2);world.dataset.packetPhase=s.flow.toFixed(4);world.dataset.cameraYaw=s.yaw.toFixed(4);world.dataset.backTurn=s.back.toFixed(4);world.dataset.explosion=open.toFixed(4);world.dataset.contactReveal=reveal.toFixed(4);world.dataset.internalPart=['turning-back','opening','parallel-layers','rebuilding','turning-front','contact'][s.phase];return s;
 }
 let count=0;group.traverse(o=>{if(o.isMesh)count++;});world.dataset.contactMeshes=count;
 return {group,update,dispose(){scene.remove(group);group.traverse(o=>{if(o.isInstancedMesh)o.dispose();});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());}};
}
