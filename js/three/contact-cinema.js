import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {contactFilmState,contactMessageLift} from '../lib/contact-state.js';
import {createContactMaterials} from './contact-materials.js';
const ease=n=>{const p=Math.max(0,Math.min(1,n));return p*p*(3-2*p);};

// A conversation leaves an intact handset. Each scroll beat lifts one real
// message bubble from the glass and turns it towards the visitor, reversibly.
export function createContactCinema({scene,software=false,quality='medium'}){
 const group=new THREE.Group();group.name='contact-conversation';group.visible=false;scene.add(group);
 const world=document.querySelector('.contact-world'),low=software||quality==='low';
 const geometries=new Set(),materials=new Set(),textures=new Set();
 const geo=g=>(geometries.add(g),g),mat=(o,basic=false)=>{const m=basic?new THREE.MeshBasicMaterial(o):new THREE.MeshPhysicalMaterial({roughness:.3,metalness:.62,...o});materials.add(m);return m;};
 const product=createContactMaterials({mat,textures,low}),{graphite,copper,silver}=product;
 const black=mat({color:'#0b110e',roughness:.43,metalness:.26});
 const roundGeo=geo(new RoundedBoxGeometry(1,1,1,low?2:4,.035)),planeGeo=geo(new THREE.PlaneGeometry(1,1,4,8));
 function box(w,h,d,m,parent,x=0,y=0,z=0,order=0){const o=new THREE.Mesh(roundGeo,m);o.scale.set(w,h,d);o.position.set(x,y,z);o.renderOrder=order;parent.add(o);return o;}
 function round(c,x,y,w,h,r,color){c.fillStyle=color;c.beginPath();c.roundRect(x,y,w,h,r);c.fill();}
 function label(c,text,x,y,size,color,bold=false){c.font=`${bold?700:400} ${size}px Manrope, Arial`;c.fillStyle=color;c.fillText(text,x,y);}
 function texture(w,h,draw){const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;draw(canvas.getContext('2d'),w,h);const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=low?1:4;textures.add(t);return t;}
 function contour(w,h,r=.15){const s=new THREE.Shape(),x=w/2,y=h/2;s.moveTo(-x+r,-y);s.lineTo(x-r,-y);s.quadraticCurveTo(x,-y,x,-y+r);s.lineTo(x,y-r);s.quadraticCurveTo(x,y,x-r,y);s.lineTo(-x+r,y);s.quadraticCurveTo(-x,y,-x,y-r);s.lineTo(-x,-y+r);s.quadraticCurveTo(-x,-y,-x+r,-y);return s;}
 const phone=new THREE.Group();phone.name='contact-handset';group.add(phone);
 box(1.90,3.80,.16,copper,phone,0,0,0);
 box(1.86,3.75,.08,graphite,phone,0,0,.11,1);
 box(1.76,3.60,.025,black,phone,0,0,.158,2);
 const screenMap=texture(512,1024,(c,w,h)=>{
  const g=c.createLinearGradient(0,0,w,h);g.addColorStop(0,'#27342b');g.addColorStop(1,'#131f17');c.fillStyle=g;c.fillRect(0,0,w,h);
  round(c,0,0,w,175,26,'#2c382d');c.fillStyle='#ed9345';c.beginPath();c.arc(65,99,27,0,7);c.fill();label(c,'a.',48,110,29,'#2a2819',true);
  label(c,'dev.abraao',111,98,30,'#f1eadb',true);label(c,'Uma conversa. Um novo caminho.',112,132,13,'#b6ba9e');
  c.fillStyle='#a8b49a';for(let i=0;i<3;i++){c.beginPath();c.arc(234+i*22,383,4,0,7);c.fill();}
  label(c,'O próximo passo',69,484,32,'#eeeadb',true);label(c,'começa aqui.',69,532,32,'#eeeadb',true);
  label(c,'Seu contexto faz a diferença.',69,590,18,'#a9b69d');
  round(c,25,903,462,72,30,'#303f2f');label(c,'Conte seu desafio...',48,947,20,'#adb799');
  c.fillStyle='#ed9345';c.beginPath();c.arc(450,939,23,0,7);c.fill();label(c,'↗',439,949,27,'#2a2819',true);
 });
 const screenGeometry=geo(new THREE.ShapeGeometry(contour(1.66,3.42,.11),low?8:16));
 const uv=screenGeometry.attributes.uv,pos=screenGeometry.attributes.position;for(let i=0;i<pos.count;i++)uv.setXY(i,(pos.getX(i)+.83)/1.66,(pos.getY(i)+1.71)/3.42);
 const screen=new THREE.Mesh(screenGeometry,mat({map:screenMap,color:'#fff',toneMapped:false},true));screen.name='contact-whole-screen';screen.position.z=.175;screen.renderOrder=3;phone.add(screen);
 box(.54,.073,.016,black,phone,0,1.61,.19,4);box(.32,.014,.01,silver,phone,0,1.61,.2,5);
 box(.36,.025,.009,mat({color:'#d9dbcd'},true),phone,0,-1.66,.185,4);
 box(.036,.40,.083,copper,phone,.967,.48,0);box(.034,.25,.075,silver,phone,-.967,.59,0);box(.034,.33,.075,silver,phone,-.967,.10,0);
 for(const x of [-.938,.938])for(const y of [-1.30,1.48])box(.009,.046,.15,product.ceramic,phone,x,y,0,1);
 for(let i=0;i<7;i++)box(.026,.015,.034,black,phone,-.31+i*.105,-1.903,0);
 box(.29,.018,.075,black,phone,0,-1.91,0);
 // A restrained softbox reflection gives the intact glass a continuous sheen.
 const sheenMap=texture(128,256,(c,w,h)=>{const g=c.createLinearGradient(0,0,w,h*.3);g.addColorStop(0,'rgba(255,243,215,0)');g.addColorStop(.40,'rgba(255,243,215,0)');g.addColorStop(.55,'rgba(255,243,215,.11)');g.addColorStop(.66,'rgba(255,243,215,0)');g.addColorStop(1,'rgba(255,243,215,0)');c.fillStyle=g;c.fillRect(0,0,w,h);});
 const sheen=new THREE.Mesh(planeGeo,mat({map:sheenMap,color:'#fff',transparent:true,depthWrite:false,toneMapped:false},true));sheen.scale.set(1.64,3.39,1);sheen.position.z=.181;sheen.renderOrder=3.5;phone.add(sheen);
 const shadowMap=texture(128,128,(c,w,h)=>{const g=c.createRadialGradient(w/2,h/2,0,w/2,h/2,w/2);g.addColorStop(0,'rgba(0,0,0,.44)');g.addColorStop(.5,'rgba(0,0,0,.20)');g.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=g;c.fillRect(0,0,w,h);});
 const shadow=new THREE.Mesh(planeGeo,mat({map:shadowMap,color:'#fff',transparent:true,depthWrite:false,toneMapped:false},true));shadow.name='contact-soft-shadow';shadow.rotation.x=-Math.PI/2;shadow.scale.set(4.6,3.8,1);shadow.position.set(0,-2.25,0);shadow.renderOrder=-100000;group.add(shadow);
 const words=[['Quero melhorar','a rotina do meu negócio.'],['Me conta onde','o processo está travando.'],['Vamos encontrar','um caminho.']];
 const colors=['#eee7d6','#ed9345','#2c3d2b'],ink=['#263022','#2e2418','#f1eadb'];
 const destinations=[new THREE.Vector3(-.34,2.02,.65),new THREE.Vector3(.34,.80,1.10),new THREE.Vector3(-.17,-.42,1.55)];
 const messages=words.map((lines,index)=>{
  const bubble=new THREE.Group();bubble.name=`contact-message-${index+1}`;group.add(bubble);
  const w=2.68,h=1.04,shape=contour(w,h,.14),tail=new THREE.Shape(),side=index===1?1:-1;
  tail.moveTo(side*.90,-h/2+.10);tail.lineTo(side*1.14,-h/2-.17);tail.lineTo(side*1.16,-h/2+.12);tail.closePath();
  const shell=mat({color:colors[index],metalness:.14,roughness:.34,clearcoat:.30,clearcoatRoughness:.24,envMap:product.copper.envMap,envMapIntensity:.55});
  const body=new THREE.Mesh(geo(new THREE.ExtrudeGeometry([shape,tail],{depth:.055,bevelEnabled:true,bevelThickness:.012,bevelSize:.014,bevelSegments:low?1:2,curveSegments:low?6:12})),shell);body.position.z=-.06;bubble.add(body);
  const map=texture(768,300,(c,cw,ch)=>{
   round(c,0,0,cw,ch,30,colors[index]);label(c,index===1?'dev.abraao':'VOCÊ',35,47,19,index===1?'#614225':index===0?'#6a765e':'#a8bc98',true);
   lines.forEach((line,i)=>label(c,line,35,128+i*64,46,ink[index],index===2));
   label(c,'✓✓',cw-74,ch-24,21,index===1?'#765532':index===0?'#7c866f':'#a8bc98');
  });
  const face=new THREE.Mesh(geo(new THREE.PlaneGeometry(w-.018,h-.018,4,2)),mat({map,color:'#fff',transparent:true,alphaTest:.02,depthWrite:false,toneMapped:false},true));face.position.z=.009;face.renderOrder=2;bubble.add(face);
  const targetQuaternion=new THREE.Quaternion().setFromEuler(new THREE.Euler(-.07,index===1?-.10:.08,index===1?.035:-.025));
  return {bubble,destination:destinations[index],targetQuaternion,index};
 });
 if(!software){const key=new THREE.PointLight('#fff0d8',19,17);key.position.set(-3,5,5);group.add(key);const rim=new THREE.PointLight('#efad70',12,15);rim.position.set(4,-1,3);group.add(rim);}
 const source=new THREE.Vector3(),control1=new THREE.Vector3(),control2=new THREE.Vector3(),normal=new THREE.Vector3(),phoneQuaternion=new THREE.Quaternion(),bounds=new THREE.Box3(),look=new THREE.Vector3(),direction=new THREE.Vector3(),corner=new THREE.Vector3(),viewInverse=new THREE.Quaternion(),depthPosition=new THREE.Vector3(),fitPoints=Array.from({length:80},()=>new THREE.Vector3());
 function depthOrder(assembly,camera){assembly.getWorldPosition(depthPosition);const base=depthPosition.applyMatrix4(camera.matrixWorldInverse).z*10000;assembly.traverse(o=>{if(o.isMesh){if(o.userData.localOrder===undefined)o.userData.localOrder=o.renderOrder;o.renderOrder=base+o.userData.localOrder;}});}
 function update(progress,now,camera,viewport={}){
  const s=contactFilmState(progress,now),{p,t,reveal}=s,mobile=viewport.mobile??camera.aspect<1.2;
  phone.position.set(Math.sin(t*.32)*.012,-1.63+s.lift,-.12);
  phone.rotation.set(-1.10,s.yaw,-.74+Math.sin(t*.16)*.012);
  phone.updateWorldMatrix(true,true);phone.getWorldQuaternion(phoneQuaternion);normal.set(0,0,1).applyQuaternion(phoneQuaternion);
  for(const {bubble,destination,targetQuaternion,index} of messages){
   destination.y=-.42+(index===0?1.22*(s.message2+s.message3):index===1?1.22*s.message3:0);
   const rise=contactMessageLift(p,index);bubble.visible=rise>.001;bubble.userData.rise=rise;
   source.set(index===1?.18:-.14,.65-index*.63,.19).applyMatrix4(phone.matrixWorld);
   control1.copy(source).addScaledVector(normal,.90);control2.copy(destination).add(new THREE.Vector3(index===1?.22:-.16,-.37,.16));
   const inv=1-rise;bubble.position.copy(source).multiplyScalar(inv**3).addScaledVector(control1,3*inv*inv*rise).addScaledVector(control2,3*inv*rise*rise).addScaledVector(destination,rise**3);
   bubble.position.y+=Math.sin(t*.68+index*.7)*.018*rise;
   bubble.quaternion.copy(phoneQuaternion).slerp(targetQuaternion,rise);
   bubble.scale.setScalar(.28+.72*rise);
  }
  group.updateWorldMatrix(true,true);
  // The camera follows the growing conversation. Earlier bubbles rise by one
  // slot as a reply leaves the glass, with no cuts or pre-emptive empty space.
  bounds.makeEmpty();let pointCount=0;
  function fitPoint(x,y,z,quaternion,position){const v=fitPoints[pointCount++].set(x,y,z);if(quaternion)v.applyQuaternion(quaternion).add(position);else v.applyMatrix4(phone.matrixWorld);bounds.expandByPoint(v);}
  for(const x of [-1,1])for(const y of [-1.94,1.94])for(const z of [-.10,.22])fitPoint(x,y,z);
  for(const {bubble} of messages){
   if(bubble.visible)for(const x of [-1.39,1.39])for(const y of [-.72,.57])for(const z of [-.09,.035]){const k=bubble.scale.x;fitPoint(x*k,y*k,z*k,bubble.quaternion,bubble.position);}
  }
  look.copy(bounds.getCenter(corner));direction.set(.06+Math.sin(p*Math.PI)*.10,.13,1).normalize();
  camera.fov=32;camera.position.copy(look).add(direction);camera.lookAt(look);viewInverse.copy(camera.quaternion).invert();const tan=Math.tan(THREE.MathUtils.degToRad(camera.fov/2));let filmDistance=0;
  for(let i=0;i<pointCount;i++){corner.copy(fitPoints[i]).sub(look).applyQuaternion(viewInverse);filmDistance=Math.max(filmDistance,Math.abs(corner.x)*1.055/(tan*camera.aspect)+corner.z,Math.abs(corner.y)*1.055/tan+corner.z);}
  const finalDistance=Math.max(filmDistance,mobile?5.65/(2*tan):5.85/(2*tan));camera.position.copy(direction).multiplyScalar(THREE.MathUtils.lerp(filmDistance,finalDistance,reveal)).add(look);camera.lookAt(look);camera.updateProjectionMatrix();camera.updateMatrixWorld(true);
  depthOrder(phone,camera);messages.forEach(({bubble})=>depthOrder(bubble,camera));
  world.dataset.rendered='true';world.dataset.filmProgress=p.toFixed(4);world.dataset.motionTime=t.toFixed(2);world.dataset.packetPhase=s.flow.toFixed(4);world.dataset.cameraYaw=s.yaw.toFixed(4);world.dataset.contactReveal=reveal.toFixed(4);world.dataset.messagesVisible=String(messages.filter(({bubble})=>bubble.visible).length);world.dataset.messageLifts=messages.map(({bubble})=>bubble.userData.rise.toFixed(3)).join(',');world.dataset.internalPart=['conversation','first-message','reply','next-step','invitation','contact'][s.phase];return s;
 }
 let count=0;group.traverse(o=>{if(o.isMesh)count++;});world.dataset.contactMeshes=count;
 return {group,update,dispose(){scene.remove(group);geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());}};
}
