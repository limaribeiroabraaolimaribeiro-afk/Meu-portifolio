import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resultFilmState} from '../js/lib/result-state.js';
const points=Array.from({length:1001},(_,i)=>i/1000),poses=points.map(p=>resultFilmState(p,12345));
for(let i=points.length-1;i>=0;i--)assert.deepEqual(resultFilmState(points[i],12345),poses[i]);
for(const p of [...points,-1,2,NaN,Infinity]){
 const s=resultFilmState(p,12345);assert(s.index>=0&&s.index<4);
 for(const key of ['p','organize','connect','operate','evolve','pulse','copyOpacity'])assert(Number.isFinite(s[key])&&s[key]>=0&&s[key]<=1,key);
 for(const key of ['yaw','elevation','zoom','drift'])assert(Number.isFinite(s[key]),key);
}
for(let i=1;i<4;i++){
 const a=resultFilmState(i/4-1e-8),b=resultFilmState(i/4+1e-8);
 for(const key of ['yaw','elevation','zoom','organize','connect','operate','evolve'])assert(Math.abs(a[key]-b[key])<1e-5,`${key} at cut ${i}`);
}
assert.equal(resultFilmState(0).organize,0);for(const k of ['organize','connect','operate','evolve'])assert.equal(resultFilmState(1)[k],1);
assert.notEqual(resultFilmState(.68,1000).pulse,resultFilmState(.68,3000).pulse);
assert.notEqual(resultFilmState(.68,1000).drift,resultFilmState(.68,3000).drift);
for(const t of [-100,NaN,Infinity])assert.equal(resultFilmState(.5,t).t,0);
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert.equal([...html.matchAll(/data-result-chapter\b/g)].length,4);assert.equal([...html.matchAll(/data-result-nav\b/g)].length,4);
assert.equal([...html.matchAll(/data-scene-window="resultado"/g)].length,1);assert(html.includes('css/result-cinema.css?v=result-film-20261028'));
assert(!html.includes('class="scene-window result-window"'));
console.log('Result film: 1001 reverse seeks, continuous camera cuts, four assemblies, idle motion and production markup passed.');

// Exercise the actual scene at both geometry levels, including moving buffers,
// repeated seeking and disposal. Rasterization is covered by the browser review.
const THREE=await import('three');
const {createResultCinema}=await import('../js/three/result-cinema.js');
const world={dataset:{}},noop=()=>{},context={createRadialGradient:()=>({addColorStop:noop})};
for(const key of ['beginPath','roundRect','fill','fillRect','fillText','moveTo','lineTo','stroke','arc'])context[key]=noop;
globalThis.document={querySelector:()=>world,createElement:()=>({width:0,height:0,getContext:()=>context})};
for(const software of [true,false]){
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,.9,.1,100),model=createResultCinema({scene,software,quality:'high'});
 const resources=new Set();let meshes=0;
 model.group.traverse(o=>{if(o.isMesh){meshes++;resources.add(o.geometry);resources.add(o.material);if(o.material.map)resources.add(o.material.map);}});
 assert(meshes<180,'The scene has a bounded draw budget');
 const snapshot=()=>{
  const values=[...camera.position.toArray(),...camera.quaternion.toArray()];
  model.group.traverse(o=>{values.push(...o.position.toArray(),...o.quaternion.toArray(),...o.scale.toArray());if(o.isInstancedMesh)values.push(...o.instanceMatrix.array);if(o.geometry?.attributes.position)values.push(...o.geometry.attributes.position.array);});
  assert(values.every(Number.isFinite));return values;
 };
 for(const aspect of [.72,.95,1.4,2.2]){
  camera.aspect=aspect;
  for(const p of [0,.18,.43,.68,.93,1]){
   model.update(p,12345,camera);const original=snapshot();
   model.update(1-p,25000,camera);model.update(p,12345,camera);assert.deepEqual(snapshot(),original,'Seeking recovers all transforms and vertices');
  }
 }
 model.update(.68,1000,camera);const idleA=snapshot();model.update(.68,3000,camera);assert.notDeepEqual(snapshot(),idleA,'Live data moves at fixed scroll');
 let disposed=0;resources.forEach(r=>r.addEventListener('dispose',()=>disposed++));model.dispose();assert.equal(disposed,resources.size);assert.equal(scene.children.length,0);
 console.log(`Result scene: ${meshes} meshes, four camera ratios, finite geometry, deterministic seeks, live records and complete disposal (${software?'Canvas':'WebGL'}).`);
}
