import assert from 'node:assert/strict';
import {createPremiumShell} from '../js/three/premium-shell.js';
for(const software of [false,true]){
 const cube=createPremiumShell({size:1.65,software});
 assert.equal(cube.panels.length,6);
 for(const fracture of [0,.3,.79,.8,1,.8,.3,0])for(const spread of [0,.45,1,0]){
  cube.update({fracture,spread});
  assert.equal(cube.core.visible,fracture<.8);
  assert.equal(cube.panelsGroup.visible,fracture<.8);
  const distances=cube.panels.map(({part})=>part.position.length());
  assert.ok(distances.every(v=>Number.isFinite(v)&&Math.abs(v-(.504+.31*spread)*1.65)<1e-8));
  assert.ok(cube.core.scale.toArray().every(v=>v>0&&Number.isFinite(v)));
 }
 cube.update();assert.equal(cube.core.scale.x,1.65);assert.equal(cube.panelsGroup.scale.x,1);
 assert.equal(cube.core.material.color.getHexString(),software?'dc630c':'e96c0c');
 cube.dispose();
}
console.log('Premium shell: six panels, finite transforms, fracture visibility, reverse/reset and software geometry passed.');
