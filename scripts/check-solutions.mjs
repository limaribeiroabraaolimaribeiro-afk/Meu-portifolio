import assert from 'node:assert/strict';
import fs from 'node:fs';
import {solutionsState} from '../js/lib/solutions-state.js';

// Every solution reaches a complete, readable pose before the next one appears.
for (let i=0;i<6;i++) {
  const state=solutionsState((i+.78)/6);
  assert.equal(state.index,i);assert.deepEqual(state.builds,[1,1,1]);
  if(i){assert.equal(solutionsState(i/6-1e-8).index,i-1);assert.equal(solutionsState(i/6+1e-8).index,i);}
}
// Reverse seeking must recover the exact earlier assembly, without accumulated state.
const points=Array.from({length:601},(_,i)=>i/600),poses=points.map(p=>solutionsState(p));
for(let i=points.length-1;i>=0;i--)assert.deepEqual(solutionsState(points[i]),poses[i]);
for(const p of [-2,0,1,2,NaN,Infinity]){
  const state=solutionsState(p);assert(state.index>=0&&state.index<6);
  assert(state.builds.every(n=>Number.isFinite(n)&&n>=0&&n<=1));
}
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert.equal([...html.matchAll(/data-solution-scene\b/g)].length,6);
assert.equal([...html.matchAll(/<g data-build=/g)].length,18);
assert(html.includes('css/solutions-story.css?v=solutions-cinema-20261028'));
assert(!html.includes('Deslize para explorar as soluções'));
console.log('Solutions: six complete assemblies, 601 reverse seeks, boundaries and generated production markup passed.');

// The travelling camera reaches each next set with the same pose from either side.
const {solutionsFilmState}=await import('../js/lib/solutions-state.js');
for(let i=1;i<6;i++){
 const a=solutionsFilmState(i/6-1e-8),b=solutionsFilmState(i/6+1e-8);
 for(const key of ['x','yaw','zoom'])assert(Math.abs(a[key]-b[key])<1e-5,`Continuous camera ${key} at shot ${i}`);
}
for(const p of points){const s=solutionsFilmState(p);assert([s.x,s.yaw,s.zoom,s.assemble,s.connect,s.resolve,s.copyOpacity].every(Number.isFinite));}
console.log('Film: continuous camera handoffs, finite poses and reverse seeking passed.');
