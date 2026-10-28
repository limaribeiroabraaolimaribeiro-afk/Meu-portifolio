import assert from 'node:assert/strict';
import {notebookState,notebookPanelPose} from '../js/three/notebook-state.js';
import * as THREE from 'three';
import {createNotebookCinema} from '../js/three/notebook-cinema.js';

// The camera must not jump when control passes to a new case.
for(let i=1;i<4;i++){
  const boundary=.055+i/4*.91;
  const before=notebookState(boundary-1e-7),after=notebookState(boundary+1e-7);
  assert.equal(before.index,i-1);assert.equal(after.index,i);
  assert.ok(Math.abs(before.cameraDock-after.cameraDock)<1e-5);
  const a=notebookPanelPose(before.time,i),b=notebookPanelPose(after.time,i);
  assert.ok(Math.hypot(...a.position.map((v,k)=>v-b.position[k]))<1e-4);
}
// Docking is monotonic within a shot; every case reaches the exact display plane.
for(let i=0;i<4;i++){
  let previous=0;
  for(let step=0;step<=100;step++){
    const state=notebookState(.055+(i+step/100)/4*.91);
    if(state.index!==i)continue;
    assert.ok(state.dock>=previous-1e-8);previous=state.dock;
  }
  assert.equal(notebookState(.055+(i+.76)/4*.91).dock,1);
}
// Forward and backward seeking produce identical transforms; out-of-range inputs are safe.
for(const p of [-1,0,.1,.3,.6,.9,1,2,NaN]){
  const state=notebookState(p);assert.ok(state.index>=0&&state.index<4);
  assert.ok(Number.isFinite(state.cameraDock));
  for(let i=0;i<4;i++)assert.deepEqual(notebookPanelPose(state.time,i),notebookPanelPose(notebookState(p).time,i));
}
console.log('Notebook: four complete docks, continuous handoffs, reverse seeking and bounds passed.');

// Exercise both geometry levels, instanced transforms and GPU resource ownership.
const world={dataset:{}};
const sources=['day','smart','anarosa','nexa'].map(kind=>({dataset:{projectKind:kind,projectScreen:''}}));
const stage={dataset:{},querySelector:()=>world,querySelectorAll:()=>sources};
globalThis.innerWidth=390;
globalThis.document={querySelector:()=>stage,createElement:()=>({width:0,height:0,getContext:()=>({createRadialGradient:()=>({addColorStop(){}}),fillRect(){},fillText(){}})})};
globalThis.IntersectionObserver=class{observe(){}disconnect(){}};
globalThis.Image=class{};
for(const software of [true,false]){
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,.9,.1,100);camera.position.set(1,3,12);camera.lookAt(0,1,0);camera.updateMatrixWorld();
 const model=createNotebookCinema({scene,software,quality:'high'}),resources=new Set();let meshes=0;
 model.group.traverse(o=>{if(o.isMesh){meshes++;resources.add(o.geometry);resources.add(o.material);if(o.material.map)resources.add(o.material.map);}});
 assert(meshes<110,'Procedural detail has a bounded draw budget');
 for(const p of [0,.148,.228,.455,.683,.91,1,.148,0])model.update(p,p*1000,camera);
 model.group.traverse(o=>{assert([...o.matrixWorld.elements].every(Number.isFinite));if(o.isInstancedMesh)assert([...o.instanceMatrix.array].every(Number.isFinite));});
 let disposed=0;resources.forEach(r=>r.addEventListener('dispose',()=>disposed++));model.dispose();
 assert.equal(disposed,resources.size);assert.equal(scene.children.length,0);
 console.log(`Notebook: ${meshes} meshes, valid instances and full resource disposal (${software?'Canvas':'WebGL'}).`);
}
