import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';

// Shared geometry and material language for the approved study and scroll narrative.
export function createPremiumShell({size=2,software=false,orange:providedOrange}={}) {
  const group=new THREE.Group(),panelsGroup=new THREE.Group(),panels=[];
  const orange=providedOrange||new THREE.MeshPhysicalMaterial({color:'#e96c0c',metalness:.48,roughness:.38,clearcoat:.08,clearcoatRoughness:.5,envMapIntensity:.7});
  const shell=new THREE.MeshPhysicalMaterial({color:'#e96c0c',metalness:.5,roughness:.46,envMapIntensity:.65});
  const dark=new THREE.MeshStandardMaterial({color:'#211e19',metalness:.5,roughness:.4});
  const block=software?new THREE.BoxGeometry(1,1,1):new RoundedBoxGeometry(1,1,1,4,.0325);
  const plate=software?new THREE.PlaneGeometry(.91*size,.91*size):new RoundedBoxGeometry(.91*size,.91*size,.0125*size,3,.006*size);
  const mark=new THREE.BoxGeometry(.006*size,.0225*size,.0015*size);
  const core=new THREE.Mesh(block,shell);core.scale.setScalar(size);core.renderOrder=2;group.add(core,panelsGroup);
  const baseColor=new THREE.Color(software?'#dc630c':'#e96c0c'),innerColor=new THREE.Color('#25211c');
  for(const [i,n] of [[0,0,1],[0,0,-1],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0]].entries()) {
    const part=new THREE.Mesh(plate,orange),normal=new THREE.Vector3(...n);part.renderOrder=3;
    part.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),normal);
    part.position.copy(normal).multiplyScalar(.504*size);panelsGroup.add(part);panels.push({part,normal});
    if(i===0) for(let k=0;k<7;k++){const line=new THREE.Mesh(mark,dark);line.renderOrder=4;line.position.set((-.325+k*.012)*size,-.325*size,.008*size);part.add(line);}
  }
  function update({fracture=0,spread=0}={}) {
    const f=THREE.MathUtils.clamp(fracture,0,1),open=THREE.MathUtils.clamp(spread,0,1);
    core.visible=panelsGroup.visible=f<.8;
    core.scale.setScalar(size*Math.max(.001,1-f));panelsGroup.scale.setScalar(Math.max(.001,1-f));
    panels.forEach(({part,normal})=>part.position.copy(normal).multiplyScalar((.504+open*.31)*size));
    shell.color.copy(baseColor).lerp(innerColor,open);
  }
  function dispose(){block.dispose();plate.dispose();mark.dispose();shell.dispose();dark.dispose();if(!providedOrange)orange.dispose();}
  return {group,core,panelsGroup,panels,orange,update,dispose};
}
export function applyStudioEnvironment(renderer,scene) {
  const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment(),environment=pmrem.fromScene(room,.04);
  scene.environment=environment.texture;pmrem.dispose();room.dispose();return environment;
}
