import * as THREE from 'three';

// Product-lighting maps belong to this handset only. They do not alter the
// shared scene, page palette or the lighting of any other portfolio chapter.
export function createContactMaterials({mat,textures,low}){
 function canvasTexture(w,h,draw){
  const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;draw(canvas.getContext('2d'),w,h);
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=low?1:4;textures.add(texture);return texture;
 }
 const environment=canvasTexture(1024,512,(c,w,h)=>{
  c.fillStyle='#11100e';c.fillRect(0,0,w,h);
  const band=c.createLinearGradient(0,0,0,h);[[0,'#25231e'],[.24,'#44413a'],[.48,'#181714'],[.75,'#070806'],[1,'#34332c']].forEach(([s,v])=>band.addColorStop(s,v));c.fillStyle=band;c.fillRect(0,0,w,h);
  for(const [x,y,bw,bh,color] of [[110,90,58,240,'#fff3dc'],[177,90,9,240,'#fffdf6'],[660,70,150,70,'#fffdfa'],[838,137,28,220,'#cf9f72'],[425,280,70,130,'#55544c']]){
   c.fillStyle=color;c.fillRect(x,y,bw,bh);
  }
 });environment.mapping=THREE.EquirectangularReflectionMapping;
 function metalTexture(base,bright,dark,w=512,h=1024){return canvasTexture(w,h,(c)=>{
  const g=c.createLinearGradient(0,0,w,h*.2);[[0,dark],[.16,base],[.39,bright],[.46,base],[.72,dark],[1,base]].forEach(([s,v])=>g.addColorStop(s,v));c.fillStyle=g;c.fillRect(0,0,w,h);
  for(let i=0;i<h;i+=2){c.fillStyle=i%7===0?'rgba(255,241,213,.055)':'rgba(21,17,12,.035)';c.fillRect(0,i,w,1);}
 });}
 const copperMap=metalTexture('#d57e35','#edac68','#a64e23');
 const silverMap=metalTexture('#a9adb0','#f1eee3','#646e70');
 const graphiteMap=metalTexture('#242827','#3e4341','#101715');
 function physical(options){
  const m=mat(options);m.envMap=environment;m.envMapIntensity=1.05;m.userData.contactStudio=true;return m;
 }
 return {
  copper:physical({color:'#e59a52',metalness:.92,roughness:.24,clearcoat:.32,clearcoatRoughness:.18}),
  copperFace:physical({color:'#ffffff',map:copperMap,metalness:.88,roughness:.27,clearcoat:.38,clearcoatRoughness:.20}),
  silver:physical({color:'#c8cdca',metalness:.96,roughness:.19}),
  silverFace:physical({color:'#ffffff',map:silverMap,metalness:.94,roughness:.23}),
  graphite:physical({color:'#222825',metalness:.64,roughness:.31}),
  graphiteFace:physical({color:'#ffffff',map:graphiteMap,metalness:.50,roughness:.40}),
  glass:physical({color:'#0c1412',metalness:.38,roughness:.09,clearcoat:1,clearcoatRoughness:.08}),
  ceramic:physical({color:'#767d79',metalness:.73,roughness:.29})
 };
}
