import assert from 'node:assert/strict';
import * as THREE from 'three';
import {cinematicState,createCinematicProblem,ISLANDS,GAP_START,GAP_END} from '../js/three/cinematic-problem.js';
const samples=Array.from({length:1001},(_,i)=>cinematicState(i/1000));
for(const [i,s] of samples.entries()){
 assert([...s.actor,...s.focus,s.zoom,s.yaw].every(Number.isFinite));
 assert(s.zoom>=.75&&s.zoom<=1);
 if(i)assert(Math.hypot(...s.actor.map((v,j)=>v-samples[i-1].actor[j]))<.1,'Continuous camera subject path');
}
for(const [a,b] of [[.20,.25],[.25,.30],[.55,.60],[.60,.65],[.90,1]])assert.deepEqual(cinematicState(a).actor,cinematicState(b).actor,'Investigator holds at the blocked path');
for(let i=1000;i>=0;i--)assert.deepEqual(cinematicState(i/1000),samples[i]);
assert.deepEqual(cinematicState(-1),cinematicState(0));assert.deepEqual(cinematicState(2),cinematicState(1));
assert(GAP_START>.38&&GAP_END>GAP_START,'Signal particles cannot cross the gap');
globalThis.document={querySelector:()=>null,createElement:()=>({width:64,height:64,getContext:()=>({createRadialGradient:()=>({addColorStop(){}}),fillRect(){}})})};
for(const software of [true,false]){const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(36,1,.1,80);camera.position.set(7,6,9);camera.lookAt(0,0,0);camera.updateMatrixWorld();
const model=createCinematicProblem({scene,software,quality:'high'});let meshes=0;const gs=new Set(),ms=new Set();model.group.traverse(o=>{if(o.isMesh){meshes++;gs.add(o.geometry);ms.add(o.material);}});assert(meshes<200,'Bound procedural detail count');
for(const p of [0,.25,.6,.95,.5,0])model.update(p,1000+p*1000,camera);
model.group.traverse(o=>{if(o.isInstancedMesh)assert([...o.instanceMatrix.array].every(Number.isFinite));});
let disposed=0;for(const r of [...gs,...ms])r.addEventListener('dispose',()=>disposed++);model.dispose();assert.equal(disposed,gs.size+ms.size);assert.equal(scene.children.length,0);
console.log(`Cinema: percurso contínuo, pausas, reversão, lacunas e descarte passaram; ${meshes} malhas no modo ${software?'Canvas':'WebGL'}.`);
}
