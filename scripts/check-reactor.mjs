import assert from 'node:assert/strict';
import fs from 'node:fs';
import {reactorMotion} from '../js/three/intelligence-reactor.js';

// Keeping scroll fixed must still move the core, satellites, camera, and flow.
for(const p of [0,.25,.5,.75,1]){
 const a=reactorMotion(p,1000),b=reactorMotion(p,4000);
 for(const key of ['yaw','breath','lift','orbit'])assert.notEqual(a[key],b[key],`${key} moves without scrolling`);
 assert.deepEqual(reactorMotion(p,1000),a,'Motion can be sought without accumulating state');
}
for(const p of [-2,0,.5,1,2,NaN,Infinity])for(const time of [-100,0,1000,1e7,NaN,Infinity]){
 const state=reactorMotion(p,time);assert(Object.values(state).every(Number.isFinite));assert(state.phase>=0&&state.phase<3);assert(state.active>=0&&state.active<4);
}
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert(html.includes('css/intelligence-cinema.css?v=reactor-20261028'));
assert.equal([...html.matchAll(/data-reactor-label=/g)].length,4);
assert.equal([...html.matchAll(/data-scene-window="inteligencia"/g)].length,1);
console.log('Reactor: continuous movement without scroll, reversible poses, bounds and four connected roles passed.');
