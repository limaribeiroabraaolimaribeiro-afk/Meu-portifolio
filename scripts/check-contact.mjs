import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from 'three';
import {contactFilmState} from '../js/lib/contact-state.js';
import {createContactCinema} from '../js/three/contact-cinema.js';
import {SoftwareRenderer} from '../js/software-renderer.js';

const steps=Array.from({length:401},(_,i)=>i/400),states=steps.map(p=>contactFilmState(p,12345));
for(let i=steps.length-1;i>=0;i--)assert.deepEqual(contactFilmState(steps[i],12345),states[i]);
for(const p of [-1,0,.4,1,2,NaN,Infinity])for(const t of [-1,0,12345,1e7,NaN,Infinity]){
 const s=contactFilmState(p,t);assert(Object.values(s).every(Number.isFinite));assert(s.phase>=0&&s.phase<3);
 for(const key of ['open','plan','finish','flow'])assert(s[key]>=0&&s[key]<=1);
}
assert.equal(contactFilmState(1).plan,1);assert.equal(contactFilmState(0).plan,0);
assert.notEqual(contactFilmState(.7,1000).flow,contactFilmState(.7,3000).flow);
assert.notEqual(contactFilmState(.7,1000).lift,contactFilmState(.7,3000).lift);
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert.equal([...html.matchAll(/data-scene-window="contato"/g)].length,1);assert(html.includes('css/contact-cinema.css?v=contact-film-20261028'));
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
  model.group.traverse(o=>{values.push(...o.position.toArray(),...o.quaternion.toArray(),...o.scale.toArray());if(o.isInstancedMesh)values.push(...o.instanceMatrix.array);if(o.geometry?.attributes.position)values.push(...o.geometry.attributes.position.array);});assert(values.every(Number.isFinite));return values;
 };
 for(const mobile of [false,true])for(const aspect of [.70,1,1.5,2.1]){
  camera.aspect=aspect;
  for(const p of [0,.2,.5,.8,1]){model.update(p,12345,camera,{mobile});const a=snapshot();model.update(1-p,25000,camera,{mobile});model.update(p,12345,camera,{mobile});assert.deepEqual(snapshot(),a);}
 }
 model.update(.8,1000,camera);const idle=snapshot();model.update(.8,3000,camera);assert.notDeepEqual(snapshot(),idle);
 // Physical groups open in order, with a true multi-element optical stack and
 // independently moving processor/RAM packages. Closed poses restore every
 // group exactly; this catches choreography drift and detached flex endpoints.
 const part=name=>model.group.getObjectByName(`contact-${name}`);
 const partNames=['chassis','thermal','battery','logic-board','processor','memory','camera-array','io-board','speaker','haptic'];
 const closed=()=>partNames.map(name=>[...part(name).position.toArray(),...part(name).quaternion.toArray()]);
 model.update(0,0,camera);const assembled=closed();model.update(1,0,camera);assert.deepEqual(closed(),assembled);
 for(const [p,name,next] of [[.29,'battery','processor'],[.42,'logic-board','camera-array'],[.55,'processor','io-board'],[.65,'camera-array','haptic']]){
  model.update(p,1000,camera);assert(part(name).userData.separation>.8,name);assert.equal(part(next).userData.separation,0,next);
 }
 const names=['BATERIA E ALIMENTAÇÃO','PLACA LÓGICA','PROCESSADOR E MEMÓRIA','LENTES E SENSORES','CONEXÕES, SOM E VIBRAÇÃO'];
 [.25,.38,.50,.62,.76].forEach((p,i)=>{model.update(p,1000,camera);assert.equal(world.dataset.internalPart,names[i]);});
 model.update(.50,1000,camera);assert(part('processor').rotation.y>Math.PI*.8);assert(part('memory').position.x<-.25);
 model.update(.70,1000,camera);assert(part('lens-0-3').position.z-part('lens-0-0').position.z>.35);
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
