import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import {contactFilmState,contactLayerOpen} from '../js/lib/contact-state.js';
import {createContactCinema} from '../js/three/contact-cinema.js';
import {SoftwareRenderer} from '../js/software-renderer.js';

const steps=Array.from({length:401},(_,i)=>i/400),states=steps.map(p=>contactFilmState(p,12345));
for(let i=steps.length-1;i>=0;i--)assert.deepEqual(contactFilmState(steps[i],12345),states[i]);
for(const p of [-1,0,.4,1,2,NaN,Infinity])for(const t of [-1,0,12345,1e7,NaN,Infinity]){
 const s=contactFilmState(p,t);assert(Object.values(s).every(Number.isFinite));assert(s.phase>=0&&s.phase<6);
 for(const key of ['open','plan','finish','flow','tilt','reveal','back'])assert(s[key]>=0&&s[key]<=1);
}
assert.equal(contactFilmState(1).plan,1);assert.equal(contactFilmState(0).plan,0);
assert.notEqual(contactFilmState(.7,1000).flow,contactFilmState(.7,3000).flow);
assert.notEqual(contactFilmState(.7,1000).lift,contactFilmState(.7,3000).lift);
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert.equal([...html.matchAll(/data-scene-window="contato"/g)].length,1);assert(html.includes('css/contact-cinema.css?v=contact-film-20261029'));
assert(!html.includes('class="scene-window contact-window"'));assert(html.includes('Conversar no WhatsApp'));assert(html.includes('Prefiro começar pelo assistente'));
const noop=()=>{},world={dataset:{}},context={createRadialGradient:()=>({addColorStop:noop})};
for(const k of ['beginPath','roundRect','fill','fillRect','fillText','moveTo','lineTo','stroke','strokeRect','clearRect','arc'])context[k]=noop;
globalThis.document={querySelector:()=>world,createElement:()=>({width:0,height:0,getContext:()=>context})};
for(const software of [true,false]){
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,.9,.1,100),model=createContactCinema({scene,software,quality:'high'}),resources=new Set();let meshes=0;
 model.group.traverse(o=>{if(o.isMesh){meshes++;resources.add(o.geometry);resources.add(o.material);if(o.material.map)resources.add(o.material.map);}});
 assert(meshes<500);
 const snapshot=()=>{
  const values=[...camera.position.toArray(),...camera.quaternion.toArray()];
  model.group.traverse(o=>{values.push(...o.position.toArray(),...o.quaternion.toArray(),...o.scale.toArray(),o.renderOrder);if(o.isInstancedMesh)values.push(...o.instanceMatrix.array);if(o.geometry?.attributes.position)values.push(...o.geometry.attributes.position.array);});assert(values.every(Number.isFinite));return values;
 };
 for(const mobile of [false,true])for(const aspect of [.70,1,1.5,2.1]){
  camera.aspect=aspect;
  for(const p of [0,.10,.21,.52,.8,.87,1]){model.update(p,12345,camera,{mobile});const a=snapshot();model.update(1-p,25000,camera,{mobile});model.update(p,12345,camera,{mobile});assert.deepEqual(snapshot(),a);}
  for(const p of [.10,.21,.52,.74,.87]){
   model.update(p,12345,camera,{mobile});model.group.updateMatrixWorld(true);
   for(const name of ['display','frame','back-cover'])model.group.getObjectByName(`contact-${name}`).traverse(o=>{
    if(!o.isMesh)return;const pos=o.geometry.attributes.position,v=new THREE.Vector3();
    for(let i=0;i<pos.count;i++){v.fromBufferAttribute(pos,i).applyMatrix4(o.matrixWorld).project(camera);assert(Math.abs(v.x)<1&&Math.abs(v.y)<1,`${name} clipped at ${aspect}`);}
   });
  }
 }
 model.update(.8,1000,camera);const idle=snapshot();model.update(.8,3000,camera);assert.notDeepEqual(snapshot(),idle);
 // Reference composition: whole parallel layers with genuine depth gaps.
 // No fragmented screen or front-facing pile of unrelated components.
 const part=name=>model.group.getObjectByName(`contact-${name}`);
 const partNames=['chassis','thermal','battery','logic-board','processor','memory','camera-array','io-board','speaker','haptic'];
 const closed=()=>partNames.map(name=>[...part(name).position.toArray(),...part(name).quaternion.toArray()]);
 model.update(0,0,camera);const assembled=closed();model.update(1,0,camera);assert.deepEqual(closed(),assembled);
 model.update(.52,1000,camera);model.group.updateMatrixWorld(true);
 const parallel=['display','chassis','battery','logic-board','thermal','camera-array','back-cover'];
 const handset=part('handset'),normal=new THREE.Vector3(),quat=new THREE.Quaternion(),previous=new THREE.Vector3(),position=new THREE.Vector3();
 part('display').getWorldQuaternion(quat);normal.set(0,0,1).applyQuaternion(quat);
 for(let i=0;i<parallel.length;i++){
  const o=part(parallel[i]);assert(o);const n=new THREE.Vector3(0,0,1).applyQuaternion(o.getWorldQuaternion(quat));assert(Math.abs(n.dot(normal))>.9999);
  handset.worldToLocal(o.getWorldPosition(position));if(i)assert(previous.z-position.z>.60,parallel[i]);previous.copy(position);
 }
 assert.equal(part('whole-screen').geometry.attributes.position.count,4);
 const glassVertices=Array.from(part('whole-screen').geometry.attributes.position.array),screenMap=part('whole-screen').material.map;
 for(const p of steps){
  model.update(p,1000,camera);const s=contactFilmState(p);
  assert.equal(part('turntable').rotation.y,Math.PI*s.back);
  assert(part('display').position.z>=.18);assert(part('back-cover').position.z<=-.15);
  if(s.open>0)assert.equal(s.back,1,'Opening before rear turn finishes');
  if(p<.22||p>=.80)assert.equal(part('mechanism').visible,false,'Internals painted through assembled glass');
  if(s.reveal>0){assert.equal(s.back,0);assert.equal(s.tilt,0);assert(partNames.every(n=>part(n).userData.separation===0));assert.equal(part('display').position.z,.18);assert.equal(part('back-cover').position.z,-.15);}
  if(s.back<1&&p>.21)assert(partNames.every(n=>part(n).userData.separation===0),'Returning to front before reconstruction');
  assert.deepEqual(Array.from(part('whole-screen').geometry.attributes.position.array),glassVertices);assert.equal(part('whole-screen').material.map,screenMap);
 }
 // The same physical surfaces remain assigned to front and rear throughout.
 // A half-turn, rather than a material swap or paint-order toggle, reveals them.
 const facing=o=>{const n=new THREE.Vector3(0,0,1).applyQuaternion(o.getWorldQuaternion(new THREE.Quaternion())),toCamera=camera.position.clone().sub(o.getWorldPosition(new THREE.Vector3())).normalize();return n.dot(toCamera);};
 for(const p of [0,.21,.81,1]){model.update(p,1000,camera);model.group.updateMatrixWorld(true);const rear=p>.19&&p<.82;assert.equal(facing(part('whole-screen'))<0,rear);assert.equal(facing(part('back-cover'))>0,rear);}
 for(let rank=0;rank<=6;rank++){assert.equal(contactLayerOpen(.50,rank),1);assert.equal(contactLayerOpen(.83,rank),0);assert.equal(contactLayerOpen(.21,rank),0);}
 assert.equal(contactFilmState(.92).reveal,0);assert.equal(contactFilmState(1).reveal,1);
 assert(part('fasteners').children.length===10);assert(part('usb-c').children.length>=6);
 let disposed=0;resources.forEach(r=>r.addEventListener('dispose',()=>disposed++));model.dispose();assert.equal(disposed,resources.size);assert.equal(scene.children.length,0);
 console.log(`Contact: ${meshes} meshes, reversible assembly, eight camera layouts, idle motion and resource disposal (${software?'Canvas':'WebGL'}).`);
}
// The fallback must draw only the revealed part of a path, including empty and
// partially revealed geometry. Previously it always drew the entire index buffer.
let fills=0;const ctx={setTransform:noop,clearRect:noop,beginPath:noop,moveTo:noop,lineTo:noop,closePath:noop,fill:()=>fills++,stroke:noop};
const canvas={getContext:()=>ctx},renderer=new SoftwareRenderer(canvas);renderer.setSize(320,240);
const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,4/3,.1,100);camera.position.z=4;camera.lookAt(0,0,0);camera.updateProjectionMatrix();
const geometry=new THREE.PlaneGeometry(1,1),material=new THREE.MeshBasicMaterial({color:'#fff'});scene.add(new THREE.Mesh(geometry,material));
for(const [start,count,expected] of [[0,0,0],[0,3,1],[3,3,1],[0,Infinity,2]]){fills=0;geometry.setDrawRange(start,count);renderer.render(scene,camera);assert.equal(fills,expected);}
geometry.dispose();material.dispose();console.log('Contact timeline: 401 reverse seeks, generated markup and Canvas path reveal passed.');
