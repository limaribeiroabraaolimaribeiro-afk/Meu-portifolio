import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {contactFilmState} from '../lib/contact-state.js';
const ease=n=>{const p=Math.max(0,Math.min(1,n));return p*p*(3-2*p);};

// One physical instrument: a message surface separates into suspended pixels,
// reveals its inner mechanism and reconstructs. All animation is seekable.
export function createContactCinema({scene,software=false,quality='medium'}){
 const group=new THREE.Group();group.visible=false;scene.add(group);
 const world=document.querySelector('.contact-world'),low=software||quality==='low';
 const geometries=new Set(),materials=new Set(),textures=new Set();
 const geo=g=>(geometries.add(g),g),mat=(o,basic=false)=>{const m=basic?new THREE.MeshBasicMaterial(o):new THREE.MeshStandardMaterial({roughness:.30,metalness:.62,...o});materials.add(m);return m;};
 const graphite=mat({color:'#282c31',roughness:.33,metalness:.72}),black=mat({color:'#0c1414'}),copper=mat({color:'#cf833c',roughness:.23,metalness:.8}),trim=mat({color:'#d6dce3',roughness:.22,metalness:.84});
 const silver=trim,ceramic=mat({color:'#8a96a8',metalness:.72,roughness:.28});
 const light=mat({color:'#ffd297',toneMapped:false},true),pale=mat({color:'#e4e7ee',toneMapped:false},true),violet=mat({color:'#c6a9ff',toneMapped:false},true),ice=mat({color:'#a3e2eb',toneMapped:false},true);
 const dim=mat({color:'#b38ff0',transparent:true,opacity:.30,depthWrite:false,toneMapped:false},true);
 const boxGeo=geo(low?new THREE.BoxGeometry(1,1,1):new RoundedBoxGeometry(1,1,1,3,.065));
 const planeGeo=geo(new THREE.PlaneGeometry(1,1,low?2:6,low?3:8));
 const sphereGeo=geo(new THREE.IcosahedronGeometry(1,low?0:1));
 const torusGeo=geo(new THREE.TorusGeometry(1,.012,low?3:5,low?36:80));
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
 const bodyTrim=box(1.89,3.79,.22,copper,phone,0,0,-.055,3);
 const bodyShell=box(1.83,3.73,.25,graphite,phone,0,0,0,4);
 const screenBed=box(1.72,3.58,.025,black,phone,0,0,.136,6);
 const screenTexture=makeTexture('phone');
 box(.57,.083,.018,black,phone,0,1.61,.171,9);
 box(.38,.018,.025,trim,phone,0,1.605,.186,10);
 box(.40,.032,.020,pale,phone,0,-1.69,.179,9);
 box(.045,.44,.09,copper,phone,.963,.5,-.01,3);
 box(.04,.22,.09,trim,phone,-.963,.68,-.01,3);
 box(.04,.36,.09,trim,phone,-.963,.18,-.01,3);
 // Tiny physical typing lights and a moving scan on the glass keep it alive.
 const typing=[];for(let i=0;i<3;i++){const o=new THREE.Mesh(sphereGeo,light);o.scale.setScalar(.025);o.position.set(-.54+i*.09,-1.19,.178);o.renderOrder=10;phone.add(o);typing.push(o);}
 const mechanism=new THREE.Group();phone.add(mechanism);
 // The revealed mechanism has three separated planes, socket blocks, solder
 // contacts, and an optical core. It is still present behind the whole display.
 const board=box(1.48,3.07,.10,black,mechanism,0,0,-.03,2);
 const battery=box(1.17,1.54,.17,ceramic,mechanism,0,-.47,.06,3);
 for(let i=0;i<6;i++)box(.017,1.35,.015,i%2?copper:silver,mechanism,-.46+i*.185,-.47,.155,4);
 const processor=box(.70,.67,.16,graphite,mechanism,.07,.78,.07,3);
 for(let i=0;i<4;i++)box(.07,.08,.12,silver,mechanism,-.48+i*.31,1.32,.06,3);
 const pins=new THREE.InstancedMesh(boxGeo,copper,low?60:100);mechanism.add(pins);
 for(let i=0;i<pins.count;i++){const side=Math.floor(i/(pins.count/4)),u=(i%(pins.count/4))/(pins.count/4);dummy.position.set(side<2?(side?-.42:.56):-.37+u*.88,side<2?.44+u*.68:side===2?.4:1.15,.14);dummy.scale.set(.035,.065,.045);dummy.rotation.set(0,0,side<2?Math.PI/2:0);dummy.updateMatrix();pins.setMatrixAt(i,dummy.matrix);}
 const engine=new THREE.Group();mechanism.add(engine);engine.position.set(0,.65,.28);
 const core=new THREE.Mesh(geo(new THREE.TorusKnotGeometry(.26,.085,low?40:88,low?5:9,2,3)),silver);engine.add(core);
 const lens=new THREE.Mesh(geo(new THREE.IcosahedronGeometry(.19,low?0:2)),violet);engine.add(lens);
 const innerRings=[];for(let i=0;i<3;i++){const r=new THREE.Mesh(torusGeo,i===1?ice:light);r.scale.setScalar(.42+i*.085);r.rotation.set(i*.7,.5+i*.6,0);engine.add(r);innerRings.push(r);}
 // Back optics are visible during the orbit. Every lens has a socket, glass,
 // central aperture and a rim rather than a flat decorative dot.
 const optics=new THREE.Group();phone.add(optics);optics.position.set(-.48,1.18,-.20);
 for(let i=0;i<3;i++){
  const g=new THREE.Group();g.position.set(i===1?.45:0,i===2?-.46:0,0);optics.add(g);
  const socket=new THREE.Mesh(geo(new THREE.CylinderGeometry(.18,.20,.10,low?12:32)),graphite);socket.rotation.x=Math.PI/2;g.add(socket);
  const ring=new THREE.Mesh(torusGeo,silver);ring.scale.setScalar(.155);ring.position.z=-.07;g.add(ring);
  const glass=new THREE.Mesh(geo(new THREE.SphereGeometry(.12,low?8:20,low?6:12)),ceramic);glass.scale.z=.35;glass.position.z=-.09;g.add(glass);
 }
 // The original conversation artwork is cut into real slabs, each with its own
 // UV window. They remain one complete readable screen in the resting poses.
 const cols=low?6:8,rows=low?12:16,tiles=[],tileMat=mat({map:screenTexture,color:'#fff',toneMapped:false},true);
 const tileBacks=new THREE.InstancedMesh(boxGeo,graphite,cols*rows);tileBacks.frustumCulled=false;tileBacks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);phone.add(tileBacks);tileBacks.renderOrder=7;
 for(let row=0;row<rows;row++)for(let col=0;col<cols;col++){
  const w=1.62/cols,h=3.39/rows,g=geo(new THREE.PlaneGeometry(w*.992,h*.992)),uv=g.attributes.uv;
  for(let k=0;k<uv.count;k++)uv.setXY(k,(col+uv.getX(k))/cols,1-(row+1-uv.getY(k))/rows);
  const mesh=new THREE.Mesh(g,tileMat);mesh.renderOrder=8;phone.add(mesh);tiles.push({mesh,x:(col+.5-cols/2)*w,y:(rows/2-row-.5)*h,w,h,row,col});
 }
 // Two articulated mantles unfold around the device. Machined ribs and tiny
 // rivets give their silhouettes a physical scale when the camera approaches.
 const mantle=new THREE.Group();group.add(mantle);const feathers=[];
 for(let i=0;i<(low?22:36);i++){
  const g=new THREE.Group();mantle.add(g);const length=.66+(i%6)*.105;
  box(.13,length,.055,i%3===0?copper:silver,g,0,length*.28,0,1);
  box(.023,length*.85,.018,i%4===0?violet:ceramic,g,0,length*.26,.040,2);
  box(.046,.047,.028,light,g,0,-length*.18,.043,3);feathers.push({g,length});
 }
 const filaments=[],filamentSegments=low?48:96,filamentSides=low?3:6;
 for(let i=0;i<4;i++){
  const pts=[];for(let k=0;k<=48;k++){const u=k/48,a=u*Math.PI*2*(1.15+i*.04)+i*Math.PI/3,r=1.40+.12*Math.sin(u*Math.PI*2+i);pts.push(new THREE.Vector3(Math.cos(a)*r,(u-.5)*4.75,Math.sin(a)*r*.72));}
  const curve=new THREE.CatmullRomCurve3(pts),g=geo(new THREE.TubeGeometry(curve,filamentSegments,.012+i%2*.005,filamentSides,false));
  const mesh=new THREE.Mesh(g,i%3===0?ice:i%3===1?light:dim);group.add(mesh);mesh.renderOrder=-1;filaments.push({curve,mesh});
 }
 const photons=new THREE.InstancedMesh(sphereGeo,light,low?36:72);photons.frustumCulled=false;photons.instanceMatrix.setUsage(THREE.DynamicDrawUsage);group.add(photons);
 const shards=new THREE.InstancedMesh(boxGeo,silver,low?44:92);shards.frustumCulled=false;shards.instanceMatrix.setUsage(THREE.DynamicDrawUsage);group.add(shards);
 const haloCanvas=document.createElement('canvas');haloCanvas.width=haloCanvas.height=128;const ctx=haloCanvas.getContext('2d'),gradient=ctx.createRadialGradient(64,64,0,64,64,64);gradient.addColorStop(0,'#b9b9ff38');gradient.addColorStop(.25,'#b7865422');gradient.addColorStop(1,'#b7865400');ctx.fillStyle=gradient;ctx.fillRect(0,0,128,128);
 const haloTex=new THREE.CanvasTexture(haloCanvas);textures.add(haloTex);const halo=new THREE.Mesh(geo(new THREE.PlaneGeometry(7,7)),mat({map:haloTex,color:'#fff',transparent:true,opacity:.7,depthWrite:false,toneMapped:false},true));halo.renderOrder=-30;group.add(halo);
 if(!software){const key=new THREE.PointLight('#e0d2ff',13,12);key.position.set(-2,3,4);group.add(key);const rim=new THREE.PointLight('#a7e6f0',9,12);rim.position.set(3,-1,-2);group.add(rim);}
 mechanism.traverse(o=>{if(o.isMesh)o.renderOrder=5;});
 const look=new THREE.Vector3(),direction=new THREE.Vector3();
 function stamp(mesh,i,p,w,h,d,rx=0,ry=0,rz=0){dummy.position.copy(p);dummy.rotation.set(rx,ry,rz);dummy.scale.set(w,h,d);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);}
 function update(progress,now,camera,viewport={}){
  const s=contactFilmState(progress,now),{t,p}=s,mobile=viewport.mobile??camera.aspect<1.2;
  const burst=Math.sin(Math.PI*ease((p-.03)/.94))**2;
  const turn=-.16-.38*Math.sin(p*Math.PI)+.12*Math.sin(p*Math.PI*2);
  phone.position.set(-.08+Math.sin(t*.33)*.035,.06+s.lift,.10);
  phone.rotation.set(.06+burst*.10,turn+Math.sin(t*.23)*.028,-.11+.17*burst);
  bodyShell.position.z=-burst*.38;bodyTrim.position.z=-.055-burst*.38;screenBed.visible=burst<.025;mechanism.position.z=.07+burst*.22;board.position.z=-.12-burst*.20;battery.position.z=.05+burst*.08;processor.position.z=.12+burst*.20;
  engine.rotation.set(t*.12,t*.32,-t*.13);engine.scale.setScalar(.82+burst*.9);core.rotation.z=-t*.4;lens.scale.setScalar(.92+Math.sin(t*1.4)*.08);
  innerRings.forEach((r,i)=>{r.rotation.set(.4+i*.65+t*(i%2?.25:-.22),i*.52+t*.15,t*(i%2?-.24:.17));});
  tiles.forEach((o,i)=>{
   const u=(o.col+.5)/cols,v=(o.row+.5)/rows,a=(u-.5)*1.16;
   const tx=Math.sin(a)*1.95+.28*Math.sin(v*Math.PI),ty=o.y+.12*Math.sin(v*Math.PI*2+t*.55);
   const tz=.17+burst*(1.17+.38*Math.cos(a)+.15*Math.sin(v*Math.PI*2+t*.5));
   o.mesh.position.set(o.x+(tx-o.x)*burst,o.y+(ty-o.y)*burst,tz);
   o.mesh.rotation.set(Math.cos(v*Math.PI*2+t*.5)*burst*.10,-a*burst*.75,Math.sin(v*Math.PI)*burst*.035);
   o.mesh.updateMatrix();dummy.position.copy(o.mesh.position);dummy.quaternion.copy(o.mesh.quaternion);dummy.position.addScaledVector(point.set(0,0,-1).applyQuaternion(o.mesh.quaternion),.025);dummy.scale.set(o.w*(.99-.04*burst),o.h*(.99-.04*burst),.035);dummy.updateMatrix();tileBacks.setMatrixAt(i,dummy.matrix);
  });tileBacks.instanceMatrix.needsUpdate=true;
  typing.forEach((o,i)=>{o.visible=burst<.18;o.scale.setScalar(.018+(.5+.5*Math.sin(t*3.1-i*.9))*.015);});
  mantle.rotation.set(.08,turn*.55+Math.sin(t*.19)*.05,0);
  feathers.forEach((o,i)=>{
   const side=i%2?1:-1,k=Math.floor(i/2),n=feathers.length/2,u=k/(n-1),a=-1.25+u*2.5;
   const r=1.05+burst*(.40+.14*Math.sin(u*Math.PI));
   o.g.position.set(side*(.65+Math.cos(a)*r),Math.sin(a)*2.12+Math.sin(t*.5+i)*.035,-.55-Math.sin(u*Math.PI)*.58+burst*.32);
   o.g.rotation.set(.2*Math.sin(t*.3+i),side*(.30+burst*.42),side*(-a*.45+.40+Math.sin(t*.35+i)*.05));
   o.g.scale.setScalar(.68+burst*.36);
  });
  filaments.forEach((f,i)=>{f.mesh.rotation.y=t*(i%2?.07:-.055)+turn*.15;f.mesh.scale.set(1+burst*.35,1+burst*.08,1+burst*.20);});
  const per=photons.count/filaments.length;
  for(let i=0;i<photons.count;i++){
   const k=Math.floor(i/per),j=i%per,f=filaments[k],u=(t*(.12+k*.007)+k*.14-j*.016+1)%1;f.curve.getPoint(u,point);point.multiply(f.mesh.scale).applyAxisAngle(up,f.mesh.rotation.y);
   const size=j===0?.062:Math.max(.010,.034-j*.002);stamp(photons,i,point,size,size,size);
  }photons.instanceMatrix.needsUpdate=true;
  for(let i=0;i<shards.count;i++){
   const a=i*2.39996+t*(i%2?.045:-.038),r=1.28+(i%9)*.10+burst*.66;
   point.set(Math.cos(a)*r,Math.sin(i*2.3+t*.27)*2.24,Math.sin(a)*r*.65-.25);
   const size=.028+i%4*.008;stamp(shards,i,point,size,size*(1.5+i%3*.7),size*.35,t*.1+i,t*.16+i,t*.11);
  }shards.instanceMatrix.needsUpdate=true;
  look.set(0,.02+burst*.12,.1);
  const fit=Math.max(mobile?5.8:6.45,(mobile?8.0:8.2)/camera.aspect)*(1.04-burst*.15);
  const distance=fit/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2)));
  direction.set(.10+burst*.14,.17+burst*.25,1).normalize();camera.position.copy(direction).multiplyScalar(distance).add(look);camera.lookAt(look);camera.updateProjectionMatrix();camera.updateMatrixWorld(true);
  halo.position.set(0,.18,-1.7);halo.quaternion.copy(camera.quaternion);halo.scale.setScalar(.9+burst*.2+Math.sin(t*.4)*.035);
  world.dataset.rendered='true';world.dataset.filmProgress=p.toFixed(4);world.dataset.motionTime=t.toFixed(2);world.dataset.packetPhase=s.flow.toFixed(4);world.dataset.cameraYaw=turn.toFixed(4);world.dataset.explosion=burst.toFixed(4);return s;
 }
 let count=0;group.traverse(o=>{if(o.isMesh)count++;});world.dataset.contactMeshes=count;
 return {group,update,dispose(){scene.remove(group);group.traverse(o=>{if(o.isInstancedMesh)o.dispose();});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());}};
}
