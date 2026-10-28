import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { createPremiumShell } from "./premium-shell.js";
import { notebookState, notebookPanelPose, ease } from "./notebook-state.js";

// One procedural prop, four photographs of interfaces, one reversible camera score.
// The same scene runs in the existing Canvas renderer when WebGL is unavailable.
export function createNotebookCinema({scene, software=false, quality="medium"}) {
  const group=new THREE.Group(); group.visible=false; scene.add(group);
  const geometries=new Set(), materials=new Set(), textures=new Set();
  const low=software || quality==="low", stage=document.querySelector("[data-notebook-stage]");
  const world=stage.querySelector(".notebook-world");
  const sources=[...stage.querySelectorAll("[data-project-screen]")];
  const geo=g=>(geometries.add(g),g), material=(o,basic=false)=>{const m=basic?new THREE.MeshBasicMaterial(o):new THREE.MeshStandardMaterial({roughness:.38,metalness:.65,...o});materials.add(m);return m;};
  const metal=material({color:"#53534e",roughness:.32,metalness:.85});
  const edge=material({color:"#a8a79e",roughness:.23,metalness:.88});
  const graphite=material({color:"#20221f",roughness:.5});
  const black=material({color:"#10120f",roughness:.7});
  const ceramic=material({color:"#dedbd2",roughness:.62,metalness:.14});
  const orange=material({color:"#ed791d",roughness:.3,metalness:.56});
  const light=material({color:"#f18c36",toneMapped:false},true);
  const boxGeo=geo(low?new THREE.BoxGeometry(1,1,1):new RoundedBoxGeometry(1,1,1,2,.035));
  const sharpGeo=geo(new THREE.BoxGeometry(1,1,1));
  const planeGeo=geo(new THREE.PlaneGeometry(4.22,2.6375,low?8:12,low?5:8));
  function box(w,h,d,mat,parent=group,sharp=false) {const m=new THREE.Mesh(sharp?sharpGeo:boxGeo,mat);m.scale.set(w,h,d);parent.add(m);return m;}
  function rod(a,b,r,mat,parent=group) {const v=new THREE.Vector3(...a),end=new THREE.Vector3(...b),delta=end.clone().sub(v),m=box(r,delta.length(),r,mat,parent,true);m.position.copy(v).add(end).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());return m;}
  function instances(count,mat,parent) {const mesh=new THREE.InstancedMesh(boxGeo,mat,count);mesh.frustumCulled=false;parent.add(mesh);return mesh;}
  const dummy=new THREE.Object3D();
  function stamp(mesh,i,x,y,z,sx,sy,sz) {dummy.position.set(x,y,z);dummy.rotation.set(0,0,0);dummy.scale.set(sx,sy,sz);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);}

  // Recessed display, hinge barrels, milled deck, keyboard and trackpad.
  const laptop=new THREE.Group();group.add(laptop);
  box(4.88,.16,3.22,metal,laptop).position.set(0,-.94,.72);
  const lip=box(4.75,.045,3.08,edge,laptop);lip.position.set(0,-.847,.70);lip.renderOrder=1;
  const deck=box(4.65,.025,2.94,metal,laptop);deck.position.set(0,-.817,.70);deck.renderOrder=2;
  const well=box(4.40,.018,1.49,black,laptop);well.position.set(0,-.796,.24);well.renderOrder=3;
  const keys=instances(65,graphite,laptop);
  keys.renderOrder=4;
  for(let row=0;row<5;row++) for(let col=0;col<13;col++)stamp(keys,row*13+col,-1.91+col*.319,-.775,-.32+row*.272,.278,.038,.222);
  const space=box(1.70,.024,.18,graphite,laptop);space.position.set(0,-.765,.98);space.renderOrder=4;
  const trackEdge=box(1.64,.012,.83,edge,laptop);trackEdge.position.set(0,-.789,1.67);trackEdge.renderOrder=3;
  const track=box(1.59,.015,.78,metal,laptop);track.position.set(0,-.777,1.67);track.renderOrder=4;
  const vents=instances(low?16:32,black,laptop);
  vents.renderOrder=4;
  for(let i=0;i<vents.count;i++){const side=i<vents.count/2?-1:1,k=i%(vents.count/2);stamp(vents,i,side*2.30,-.78,-.35+k*(1.35/(vents.count/2)),.022,.008,.035);}
  for(const x of [-1.58,1.58]){const hinge=box(.76,.18,.20,graphite,laptop);hinge.position.set(x,-.78,-.78);}
  for(const x of [-2.446,2.446]) for(const z of [.05,.50]) box(.008,.050,.23,black,laptop).position.set(x,-.94,z);
  box(.065,.026,.016,light,laptop).position.set(2.14,-.91,2.337);
  box(1.1,.018,.014,graphite,laptop).position.set(0,-.87,2.34);
  const lid=new THREE.Group();lid.position.set(0,-.76,-.78);lid.rotation.x=-.105;laptop.add(lid);
  const lidBack=box(4.88,3.05,.105,metal,lid);lidBack.position.y=1.51;lidBack.renderOrder=5;
  const lidTrim=box(4.74,2.92,.024,edge,lid);lidTrim.position.set(0,1.52,.065);lidTrim.renderOrder=6;
  const bezel=box(4.68,2.86,.025,black,lid);bezel.position.set(0,1.52,.084);bezel.renderOrder=7;
  const blank=material({color:"#171b16",toneMapped:false},true);
  const idleCanvas=document.createElement("canvas");idleCanvas.width=768;idleCanvas.height=480;
  const idle=idleCanvas.getContext("2d");idle.fillStyle="#171b16";idle.fillRect(0,0,768,480);
  idle.fillStyle="#e6ded0";idle.font="500 40px Arial";idle.fillText("dev.abraao",66,209);
  idle.fillStyle="#f58a2b";idle.fillRect(68,244,48,2);idle.font="10px Arial";idle.fillText("O PROBLEMA ENCONTRA SEU CAMINHO.",68,282);
  const idleTexture=new THREE.CanvasTexture(idleCanvas);idleTexture.colorSpace=THREE.SRGBColorSpace;textures.add(idleTexture);
  blank.map=idleTexture;blank.color.set("#ffffff");
  const display=new THREE.Mesh(planeGeo,blank);display.position.set(0,1.53,.105);display.renderOrder=8;lid.add(display);
  const screenAnchor=new THREE.Object3D();screenAnchor.position.copy(display.position);screenAnchor.position.z-=.055;lid.add(screenAnchor);
  const lens=box(.045,.023,.006,graphite,lid);lens.position.set(0,2.913,.103);lens.renderOrder=8;
  for(let i=0;i<9;i++){const mark=box(.009,.025,.005,i===8?orange:edge,lid);mark.position.set(-.09+i*.021,.095,.104);mark.renderOrder=8;}
  const seamMat=material({color:"#e48639",transparent:true,opacity:.08,toneMapped:false},true);
  const seam=box(4.35,.018,.016,seamMat,lid);seam.position.set(0,.175,.112);seam.renderOrder=9;

  // A studio plinth with warm inlaid paths, not a floating field of particles.
  box(7.30,.12,5.30,ceramic).position.set(0,-1.24,.40);
  box(7.39,.055,5.39,edge).position.set(0,-1.335,.40);
  box(7.15,.035,5.15,ceramic).position.set(0,-1.155,.40);
  const route=[[-3.5,-1.128,1.7],[-2.7,-1.128,1.7],[-2.7,-1.128,2.8],[2.7,-1.128,2.8],[2.7,-1.128,-1.8],[3.5,-1.128,-1.8]];
  for(let i=0;i<route.length-1;i++)rod(route[i],route[i+1],.019,orange);
  for(const x of [-3.45,3.45])for(const z of [-1.95,2.8]){box(.12,.008,.012,edge).position.set(x,-1.12,z);box(.012,.008,.12,edge).position.set(x,-1.12,z);}
  const shadowCanvas=document.createElement("canvas");shadowCanvas.width=shadowCanvas.height=64;
  const ctx=shadowCanvas.getContext("2d"),gradient=ctx.createRadialGradient(32,32,0,32,32,32);gradient.addColorStop(0,"#25221990");gradient.addColorStop(1,"#25221900");ctx.fillStyle=gradient;ctx.fillRect(0,0,64,64);
  const shadowTexture=new THREE.CanvasTexture(shadowCanvas);textures.add(shadowTexture);
  const shadow=new THREE.Mesh(geo(new THREE.PlaneGeometry(6.4,4.5)),material({map:shadowTexture,transparent:true,depthWrite:false},true));shadow.rotation.x=-Math.PI/2;shadow.position.set(0,-1.125,.5);group.add(shadow);
  // Coarse Canvas painter ordering keeps the plinth behind the finer equipment.
  group.children.filter(m=>m.isMesh).forEach(m=>m.renderOrder=-8);
  shadow.renderOrder=-7;

  const panels=sources.map((el,i)=>{
    const board=new THREE.Group();group.add(board);
    const border=material({color:i===0?"#d88034":"#a3a093",roughness:.32,metalness:.7});
    const frame=box(4.34,2.76,.065,border,board);
    const inset=box(4.27,2.69,.022,black,board);inset.position.z=.039;
    const faceMat=material({color:"#f4f0e8",toneMapped:false},true);
    const face=new THREE.Mesh(planeGeo,faceMat);face.position.z=.055;board.add(face);
    const tab=box(.22,.06,.016,orange,board);tab.position.set(-1.90,1.405,.01);
    return {board,frame,inset,face,tab,faceMat,border,texture:null,el};
  });
  const guideCube=createPremiumShell({size:.38,software});group.add(guideCube.group);
  guideCube.group.position.set(-2.87,-.91,1.80);
  const modules=instances(low?20:34,orange,group);modules.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  modules.renderOrder=11;
  let meshCount=0;group.traverse(m=>{if(m.isMesh)meshCount++;});stage.dataset.notebookMeshes=String(meshCount);
  const scratchPosition=new THREE.Vector3(),scratchQuaternion=new THREE.Quaternion(),hoverQuaternion=new THREE.Quaternion(),rotation=new THREE.Euler();
  const targetPosition=new THREE.Vector3(),controlA=new THREE.Vector3(),controlB=new THREE.Vector3();
  let lastIndex=-1,disposed=false,loading=false,ready=0;

  // Rectify only the screen area in the supplied Nexa presentation at render time.
  // This keeps the provenance honest and avoids a photograph of a laptop inside a laptop.
  function screenTexture(image,kind) {
    const canvas=document.createElement("canvas");canvas.width=low?768:1024;canvas.height=canvas.width/1.6;
    const c=canvas.getContext("2d");
    if(kind!=="nexa") c.drawImage(image,0,0,image.width,Math.min(image.height,image.width/1.6),0,0,canvas.width,canvas.height);
    else {
      const q=[[188,38],[735,38],[749,375],[177,375]].map(([x,y])=>[x/1100*image.width,y/434*image.height]);
      function triangle(s,d){const [s0,s1,s2]=s,[d0,d1,d2]=d,det=s0[0]*(s1[1]-s2[1])+s1[0]*(s2[1]-s0[1])+s2[0]*(s0[1]-s1[1]);
        const coeff=k=>[(d0[k]*(s1[1]-s2[1])+d1[k]*(s2[1]-s0[1])+d2[k]*(s0[1]-s1[1]))/det,(d0[k]*(s2[0]-s1[0])+d1[k]*(s0[0]-s2[0])+d2[k]*(s1[0]-s0[0]))/det,(d0[k]*(s1[0]*s2[1]-s2[0]*s1[1])+d1[k]*(s2[0]*s0[1]-s0[0]*s2[1])+d2[k]*(s0[0]*s1[1]-s1[0]*s0[1]))/det];
        const x=coeff(0),y=coeff(1);c.save();c.beginPath();c.moveTo(...d0);c.lineTo(...d1);c.lineTo(...d2);c.closePath();c.clip();c.transform(x[0],y[0],x[1],y[1],x[2],y[2]);c.drawImage(image,0,0);c.restore();}
      triangle([q[0],q[1],q[2]],[[0,0],[canvas.width,0],[canvas.width,canvas.height]]);
      triangle([q[0],q[2],q[3]],[[0,0],[canvas.width,canvas.height],[0,canvas.height]]);
    }
    const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=low?1:4;textures.add(texture);return texture;
  }
  function preload() {
    if(loading||disposed)return;loading=true;
    panels.forEach(panel=>{
      const image=new Image();image.decoding="async";
      image.onload=()=>{if(disposed)return;panel.texture=screenTexture(image,panel.el.dataset.projectKind);panel.faceMat.map=panel.texture;panel.faceMat.needsUpdate=true;stage.dataset.screensReady=String(++ready);};
      image.onerror=()=>{stage.dataset.screenError="true";};
      image.src=panel.el.dataset.projectScreen;
    });
  }
  const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){preload();observer.disconnect();}},{rootMargin:"1200px"});observer.observe(world);

  function update(progress,now,camera) {
    preload();
    const state=notebookState(progress,panels.length),mobile=innerWidth<=700;
    group.rotation.y=.07-Math.sin(state.p*Math.PI)*.07;
    group.position.y=-.12+state.entrance*.12;
    laptop.rotation.y=Math.sin(state.local*Math.PI)*.025;
    lid.rotation.x=-.105-Math.sin(state.local*Math.PI)*.025;
    scene.updateMatrixWorld(true);
    screenAnchor.getWorldPosition(targetPosition);screenAnchor.getWorldQuaternion(scratchQuaternion);
    const hover=.012*Math.sin(now*.00075);
    panels.forEach((panel,i)=>{
      const pose=notebookPanelPose(state.time,i);panel.board.visible=pose.visible;
      if(!pose.visible)return;
      const layer=30-(i-state.index)*4;
      panel.frame.renderOrder=layer;panel.inset.renderOrder=layer+1;panel.face.renderOrder=layer+2;panel.tab.renderOrder=layer+2;
      scratchPosition.set(...pose.position);scratchPosition.y+=hover*(1-pose.dock);
      if(mobile){scratchPosition.x*=.72;}
      // Convert the world-space screen anchor back to the common prop's local space.
      const localTarget=group.worldToLocal(targetPosition.clone());
      controlA.copy(scratchPosition).add(new THREE.Vector3(-.40,.20,0));
      controlB.copy(localTarget).add(new THREE.Vector3(.25,.72,1.1));
      const d=pose.dock,inv=1-d;
      panel.board.position.copy(scratchPosition).multiplyScalar(inv**3).addScaledVector(controlA,3*inv*inv*d).addScaledVector(controlB,3*inv*d*d).addScaledVector(localTarget,d**3);
      rotation.set(.035,pose.yaw,pose.roll);hoverQuaternion.setFromEuler(rotation);
      const targetQ=group.quaternion.clone().invert().multiply(scratchQuaternion);
      panel.board.quaternion.copy(hoverQuaternion).slerp(targetQ,d);
      panel.board.scale.setScalar(pose.scale+(1-pose.scale)*d);
      const trim=1-ease(.76,1,d);panel.frame.material.transparent=true;panel.frame.material.opacity=trim;panel.inset.visible=trim>.01;panel.tab.visible=trim>.20;
    });
    // The screen remains on the previous case while the next interface approaches.
    const displayIndex=state.dock>.998?state.index:Math.max(0,state.index-1);
    if(panels[displayIndex].texture && (lastIndex!==displayIndex||display.material.map!==panels[displayIndex].texture)){
      display.material=panels[displayIndex].faceMat;lastIndex=displayIndex;
    }
    if(state.index===0&&state.dock<=.998){display.material=blank;lastIndex=-1;}
    display.visible=true;
    seamMat.opacity=.12+state.pulse*.70;
    const build=ease(.12,.42,state.local)*(1-ease(.72,.90,state.local));
    guideCube.update({fracture:build,spread:build*.25});
    modules.visible=build>.001;
    if(modules.visible)for(let i=0;i<modules.count;i++){
      const t=i/(modules.count-1),angle=t*Math.PI*1.3+state.local*1.2;
      const start=new THREE.Vector3(-2.87,-.91,1.80),end=group.worldToLocal(targetPosition.clone());
      dummy.position.lerpVectors(start,end,t);dummy.position.y+=Math.sin(t*Math.PI)*(1.25+build*.65);dummy.position.z+=Math.sin(angle)*.12*build;
      dummy.rotation.set(t*.7,t*1.5+state.local,t*.3);dummy.scale.setScalar((.035+Math.sin(t*Math.PI)*.018)*build);dummy.updateMatrix();modules.setMatrixAt(i,dummy.matrix);
    }
    modules.instanceMatrix.needsUpdate=modules.visible;
    world.dataset.rendered="true";stage.dataset.docking=state.dock.toFixed(3);
    return state;
  }
  return {group,update,dispose(){disposed=true;observer.disconnect();scene.remove(group);group.traverse(m=>{if(m.isInstancedMesh)m.dispose();});guideCube.dispose();geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());}};
}
