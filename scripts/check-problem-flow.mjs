import assert from 'node:assert/strict';
import {problemFlowState} from '../js/three/problem-flow.js';
const samples=Array.from({length:1001},(_,i)=>problemFlowState(i/1000));
for(const [i,s] of samples.entries()){
 assert(Number.isFinite(s.x)&&Number.isFinite(s.y));
 assert(s.x>=.3249&&s.x<=.4551,'Cube must stop before the disconnected target');
 assert(s.y>=.1699&&s.y<=.7501);
 if(i){const previous=samples[i-1];assert(Math.hypot(s.x-previous.x,s.y-previous.y)<.005,'Continuous scroll path');}
}
assert.deepEqual(problemFlowState(-1),problemFlowState(0));
assert.deepEqual(problemFlowState(2),problemFlowState(1));
assert.equal(problemFlowState(1).blocked,true);
assert.equal(problemFlowState(1).row,2);
for(let i=1000;i>=0;i--)assert.deepEqual(problemFlowState(i/1000),samples[i],'Reverse scroll must retrace the same path');
console.log('Fluxo: percurso contínuo, lacunas preservadas, limites e scroll reverso passaram.');
