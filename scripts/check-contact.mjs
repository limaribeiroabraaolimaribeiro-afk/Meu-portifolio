import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import {contactFilmState,contactMessageLift} from '../js/lib/contact-state.js';
import {createContactCinema} from '../js/three/contact-cinema.js';
import {SoftwareRenderer} from '../js/software-renderer.js';
const steps=Array.from({length:401},(_,i)=>i/400),states=steps.map(p=>contactFilmState(p,12345));
for(let i=steps.length-1;i>=0;i--)assert.deepEqual(contactFilmState(steps[i],12345),states[i]);
for(const p of [-1,0,.4,1,2,NaN,Infinity])for(const t of [-1,0,12345,1e7,NaN,Infinity]){
 const s=contactFilmState(p,t);assert(Object.values(s).every(Number.isFinite));assert(s.phase>=0&&s.phase<6);
 for(const key of ['message1','message2','message3','dock','reveal','flow'])assert(s[key]>=0&&s[key]<=1);
 assert(s.message1>=s.message2&&s.message2>=s.message3);
 if(s.reveal>0)assert.equal(s.message3,1);
}
for(let i=0;i<3;i++){let previous=0;for(const p of steps){const rise=contactMessageLift(p,i);assert(rise>=previous);previous=rise;}assert.equal(previous,1);}
assert.deepEqual([0,1,2].map(i=>contactMessageLift(.27,i)),[1,0,0]);
assert.deepEqual([0,1,2].map(i=>contactMessageLift(.49,i)),[1,1,0]);
assert.deepEqual([0,1,2].map(i=>contactMessageLift(.71,i)),[1,1,1]);
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert.equal([...html.matchAll(/data-scene-window="contato"/g)].length,1);assert(html.includes('Conversar no WhatsApp'));assert(html.includes('Prefiro começar pelo assistente'));assert(html.includes('A rolagem faz as mensagens saírem da tela'));
const source=fs.readFileSync(new URL('../js/three/contact-cinema.js',import.meta.url),'utf8');assert(!source.includes('contact-internals'));assert(!source.includes('contactLayerOpen'));
const noop=()=>{},world={dataset:{}},context={createRadialGradient:()=>({addColorStop:noop}),createLinearGradient:()=>({addColorStop:noop})};
for(const k of ['beginPath','roundRect','fill','fillRect','fillText','moveTo','lineTo','stroke','strokeRect','clearRect','arc'])context[k]=noop;
globalThis.document={querySelector:()=>world,createElement:()=>({width:0,height:0,getContext:()=>context})};
for(const software of [true,false]){
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,.9,.1,100),model=createContactCinema({scene,software,quality:'high'}),resources=new Set();let meshes=0;
 model.group.traverse(o=>{if(o.isMesh){meshes++;resources.add(o.geometry);resources.add(o.material);if(o.material.map)resources.add(o.material.map);if(o.material.envMap)resources.add(o.material.envMap);}});assert(meshes<75);
 const phone=model.group.getObjectByName('contact-handset'),messages=[1,2,3].map(i=>model.group.getObjectByName(`contact-message-${i}`)),screen=model.group.getObjectByName('contact-whole-screen'),map=screen.material.map;
 assert(!model.group.getObjectByName('contact-mechanism'));assert(messages.every(Boolean));
 const physical=[...resources].filter(r=>r.isMaterial&&r.userData.contactStudio);assert(physical.length>=3);for(const m of physical){assert(m.isMeshPhysicalMaterial);assert(m.envMap?.isTexture);}
 const fixedParts=phone.children.map(o=>[...o.position.toArray(),...o.quaternion.toArray(),...o.scale.toArray()]);
 const snapshot=()=>{const values=[...camera.position.toArray(),...camera.quaternion.toArray()];model.group.traverse(o=>values.push(...o.position.toArray(),...o.quaternion.toArray(),...o.scale.toArray(),o.renderOrder));assert(values.every(Number.isFinite));return values;};
 for(const mobile of [false,true])for(const aspect of [.60,.70,1,1.5,2.1]){
  camera.aspect=aspect;
  for(const p of [0,.10,.20,.27,.36,.49,.61,.71,.85,1]){
   model.update(p,12345,camera,{mobile});const a=snapshot();model.update(1-p,25000,camera,{mobile});model.update(p,12345,camera,{mobile});assert.deepEqual(snapshot(),a);
   model.group.updateMatrixWorld(true);
   for(const object of [phone,...messages.filter(m=>m.visible)])object.traverse(o=>{
    if(!o.isMesh)return;const pos=o.geometry.attributes.position,v=new THREE.Vector3();for(let i=0;i<pos.count;i++){v.fromBufferAttribute(pos,i).applyMatrix4(o.matrixWorld).project(camera);assert(Math.abs(v.x)<1&&Math.abs(v.y)<1,`${object.name} clipped at ${aspect}, ${p}`);}
   });
   const normal=new THREE.Vector3(0,0,1).applyQuaternion(phone.getWorldQuaternion(new THREE.Quaternion()));assert(normal.y>.80,'Phone must remain lying screen-up');assert(normal.dot(camera.position.clone().sub(phone.getWorldPosition(new THREE.Vector3())).normalize())>0,'Front glass must face the viewer');
   assert.deepEqual(phone.children.map(o=>[...o.position.toArray(),...o.quaternion.toArray(),...o.scale.toArray()]),fixedParts,'No handset disassembly');assert.equal(screen.material.map,map);
  }
 }
 for(const [p,visible] of [[0,0],[.27,1],[.49,2],[.71,3],[1,3]]){model.update(p,1000,camera);assert.equal(messages.filter(m=>m.visible).length,visible);assert.equal(Number(world.dataset.messagesVisible),visible);}
 model.update(.71,1000,camera);const a=snapshot();model.update(.71,3000,camera);assert.notDeepEqual(snapshot(),a);
 let disposed=0;resources.forEach(r=>r.addEventListener('dispose',()=>disposed++));model.dispose();assert.equal(disposed,resources.size);assert.equal(scene.children.length,0);
 console.log(`Contact: ${meshes} meshes, screen-up intact handset, three sequential flights, ten camera layouts, reversible seeking and complete disposal (${software?'Canvas':'WebGL'}).`);
}
let fills=0;const ctx={setTransform:noop,clearRect:noop,beginPath:noop,moveTo:noop,lineTo:noop,closePath:noop,fill:()=>fills++,stroke:noop};
const renderer=new SoftwareRenderer({getContext:()=>ctx});renderer.setSize(320,240);const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,4/3,.1,100);camera.position.z=4;camera.lookAt(0,0,0);camera.updateProjectionMatrix();
const geometry=new THREE.PlaneGeometry(1,1),material=new THREE.MeshBasicMaterial({color:'#fff'});scene.add(new THREE.Mesh(geometry,material));
for(const [start,count,expected] of [[0,0,0],[0,3,1],[3,3,1],[0,Infinity,2]]){fills=0;geometry.setDrawRange(start,count);renderer.render(scene,camera);assert.equal(fills,expected);}
geometry.dispose();material.dispose();console.log('Contact: 401 reverse seeks, sequential messages, preserved contact links and Canvas path reveal passed.');
