(()=>{var Kl="170";var Mp=0,hu=1,Sp=2;var vd=1,bp=2,li=3,Ni=0,tn=1,kn=2,Di=0,Ks=1,uu=2,du=3,fu=4,Ep=5,ss=100,wp=101,Tp=102,Ap=103,Rp=104,Cp=200,Pp=201,Ip=202,Dp=203,Cc=204,Pc=205,Lp=206,Up=207,Np=208,Op=209,Fp=210,Bp=211,zp=212,kp=213,Hp=214,Ic=0,Dc=1,Lc=2,er=3,Uc=4,Nc=5,Oc=6,Fc=7,Md=0,Vp=1,Gp=2,Li=0,Wp=1,Xp=2,qp=3,to=4,Yp=5,Zp=6,$p=7;var Sd=300,nr=301,ir=302,Xr=303,Bc=304,Ma=306,zc=1e3,as=1001,kc=1002,Sn=1003,Jp=1004;var Mo=1005;var Zn=1006,Ja=1007;var cs=1008;var fi=1009,bd=1010,Ed=1011,qr=1012,Ql=1013,ls=1014,$n=1015,eo=1016,jl=1017,th=1018,sr=1020,wd=35902,Td=1021,Ad=1022,Hn=1023,Rd=1024,Cd=1025,Qs=1026,rr=1027,eh=1028,nh=1029,Pd=1030,ih=1031;var sh=1033,Yo=33776,Zo=33777,$o=33778,Jo=33779,Hc=35840,Vc=35841,Gc=35842,Wc=35843,Xc=36196,qc=37492,Yc=37496,Zc=37808,$c=37809,Jc=37810,Kc=37811,Qc=37812,jc=37813,tl=37814,el=37815,nl=37816,il=37817,sl=37818,rl=37819,ol=37820,al=37821,Ko=36492,cl=36494,ll=36495,Id=36283,hl=36284,ul=36285,dl=36286;var Qo=2300,fl=2301,Ka=2302,pu=2400,mu=2401,gu=2402;var Kp=3200,Qp=3201;var Dd=0,jp=1,Ii="",ge="srgb",pr="srgb-linear",Sa="linear",pe="srgb";var Ls=7680;var _u=519,tm=512,em=513,nm=514,Ld=515,im=516,sm=517,rm=518,om=519,xu=35044,Wn=35048;var yu="300 es",ui=2e3,jo=2001,Oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vu=1234567,kr=Math.PI/180,Yr=180/Math.PI;function xs(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[s&255]+Ke[s>>8&255]+Ke[s>>16&255]+Ke[s>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function We(s,t,e){return Math.max(t,Math.min(e,s))}function rh(s,t){return(s%t+t)%t}function am(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function cm(s,t,e){return s!==t?(e-s)/(t-s):0}function Hr(s,t,e){return(1-e)*s+e*t}function lm(s,t,e,n){return Hr(s,t,1-Math.exp(-e*n))}function hm(s,t=1){return t-Math.abs(rh(s,t*2)-t)}function um(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function dm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function fm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function pm(s,t){return s+Math.random()*(t-s)}function mm(s){return s*(.5-Math.random())}function gm(s){s!==void 0&&(vu=s);let t=vu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _m(s){return s*kr}function xm(s){return s*Yr}function ym(s){return(s&s-1)===0&&s!==0}function vm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Mm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sm(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ne={DEG2RAD:kr,RAD2DEG:Yr,generateUUID:xs,clamp:We,euclideanModulo:rh,mapLinear:am,inverseLerp:cm,lerp:Hr,damp:lm,pingpong:hm,smoothstep:um,smootherstep:dm,randInt:fm,randFloat:pm,randFloatSpread:mm,seededRandom:gm,degToRad:_m,radToDeg:xm,isPowerOfTwo:ym,ceilPowerOfTwo:vm,floorPowerOfTwo:Mm,setQuaternionFromProperEuler:Sm,normalize:rn,denormalize:Zs},Bt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],y=i[4],x=i[7],A=i[2],E=i[5],w=i[8];return r[0]=o*_+a*M+c*A,r[3]=o*m+a*y+c*E,r[6]=o*p+a*x+c*w,r[1]=l*_+h*M+u*A,r[4]=l*m+h*y+u*E,r[7]=l*p+h*x+u*w,r[2]=d*_+f*M+g*A,r[5]=d*m+f*y+g*E,r[8]=d*p+f*x+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qa.makeScale(t,e)),this}rotate(t){return this.premultiply(Qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qa=new jt;function Ud(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ta(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bm(){let s=ta("canvas");return s.style.display="block",s}var Mu={};function Br(s){s in Mu||(Mu[s]=!0,console.warn(s))}function Em(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function wm(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tm(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var se={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Sa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Su=[.64,.33,.3,.6,.15,.06],bu=[.2126,.7152,.0722],Eu=[.3127,.329],wu=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tu=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[pr]:{primaries:Su,whitePoint:Eu,transfer:Sa,toXYZ:wu,fromXYZ:Tu,luminanceCoefficients:bu,workingColorSpaceConfig:{unpackColorSpace:ge},outputColorSpaceConfig:{drawingBufferColorSpace:ge}},[ge]:{primaries:Su,whitePoint:Eu,transfer:pe,toXYZ:wu,fromXYZ:Tu,luminanceCoefficients:bu,outputColorSpaceConfig:{drawingBufferColorSpace:ge}}});var Us,pl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Us===void 0&&(Us=ta("canvas")),Us.width=t.width,Us.height=t.height;let n=Us.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ta("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Am=0,ea=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=xs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ja(i[o].image)):r.push(ja(i[o]))}else r=ja(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function ja(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rm=0,un=class s extends Oi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=as,i=as,r=Zn,o=cs,a=Hn,c=fi,l=s.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=xs(),this.name="",this.source=new ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zc:t.x=t.x-Math.floor(t.x);break;case as:t.x=t.x<0?0:1;break;case kc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zc:t.y=t.y-Math.floor(t.y);break;case as:t.y=t.y<0?0:1;break;case kc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Sd;un.DEFAULT_ANISOTROPY=1;var me=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,x=(f+1)/2,A=(p+1)/2,E=(h+d)/4,w=(u+_)/4,R=(g+m)/4;return y>x&&y>A?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=E/n,r=w/n):x>A?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=R/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=w/r,i=R/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ml=class extends Oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new un(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ea(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends ml{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},na=class extends un{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gl=class extends un{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var an=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*_,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let A=Math.sqrt(y),E=Math.atan2(A,p*M);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}let x=a*M;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Au.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Au.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tc.copy(this).projectOnVector(t),this.sub(tc)}reflect(t){return this.sub(tc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tc=new I,Au=new an,Vn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),So.copy(n.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),bo.subVectors(this.max,Ir),Ns.subVectors(t.a,Ir),Os.subVectors(t.b,Ir),Fs.subVectors(t.c,Ir),wi.subVectors(Os,Ns),Ti.subVectors(Fs,Os),Ki.subVectors(Ns,Fs);let e=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-Ki.z,Ki.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,Ki.z,0,-Ki.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-Ki.y,Ki.x,0];return!ec(e,Ns,Os,Fs,bo)||(e=[1,0,0,0,1,0,0,0,1],!ec(e,Ns,Os,Fs,bo))?!1:(Eo.crossVectors(wi,Ti),e=[Eo.x,Eo.y,Eo.z],ec(e,Ns,Os,Fs,bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},si=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,So=new Vn,Ns=new I,Os=new I,Fs=new I,wi=new I,Ti=new I,Ki=new I,Ir=new I,bo=new I,Eo=new I,Qi=new I;function ec(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Qi.fromArray(s,r);let a=i.x*Math.abs(Qi.x)+i.y*Math.abs(Qi.y)+i.z*Math.abs(Qi.z),c=t.dot(Qi),l=e.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Cm=new Vn,Dr=new I,nc=new I,hs=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Cm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dr.subVectors(t,this.center);let e=Dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Dr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dr.copy(t.center).add(nc)),this.expandByPoint(Dr.copy(t.center).sub(nc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ri=new I,ic=new I,wo=new I,Ai=new I,sc=new I,To=new I,rc=new I,_l=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ic.copy(t).add(e).multiplyScalar(.5),wo.copy(e).sub(t).normalize(),Ai.copy(this.origin).sub(ic);let r=t.distanceTo(e)*.5,o=-this.direction.dot(wo),a=Ai.dot(this.direction),c=-Ai.dot(wo),l=Ai.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ic).addScaledVector(wo,d),f}intersectSphere(t,e){ri.subVectors(t.center,this.origin);let n=ri.dot(this.direction),i=ri.dot(ri)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,i,r){sc.subVectors(e,t),To.subVectors(n,t),rc.crossVectors(sc,To);let o=this.direction.dot(rc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,t);let c=a*this.direction.dot(To.crossVectors(Ai,To));if(c<0)return null;let l=a*this.direction.dot(sc.cross(Ai));if(l<0||c+l>o)return null;let h=-a*Ai.dot(rc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Bs.setFromMatrixColumn(t,0).length(),r=1/Bs.setFromMatrixColumn(t,1).length(),o=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pm,t,Im)}lookAt(t,e,n){let i=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ri.crossVectors(n,vn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ri.crossVectors(n,vn)),Ri.normalize(),Ao.crossVectors(vn,Ri),i[0]=Ri.x,i[4]=Ao.x,i[8]=vn.x,i[1]=Ri.y,i[5]=Ao.y,i[9]=vn.y,i[2]=Ri.z,i[6]=Ao.z,i[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],y=n[7],x=n[11],A=n[15],E=i[0],w=i[4],R=i[8],S=i[12],v=i[1],C=i[5],z=i[9],k=i[13],W=i[2],$=i[6],O=i[10],it=i[14],Z=i[3],_t=i[7],et=i[11],ht=i[15];return r[0]=o*E+a*v+c*W+l*Z,r[4]=o*w+a*C+c*$+l*_t,r[8]=o*R+a*z+c*O+l*et,r[12]=o*S+a*k+c*it+l*ht,r[1]=h*E+u*v+d*W+f*Z,r[5]=h*w+u*C+d*$+f*_t,r[9]=h*R+u*z+d*O+f*et,r[13]=h*S+u*k+d*it+f*ht,r[2]=g*E+_*v+m*W+p*Z,r[6]=g*w+_*C+m*$+p*_t,r[10]=g*R+_*z+m*O+p*et,r[14]=g*S+_*k+m*it+p*ht,r[3]=M*E+y*v+x*W+A*Z,r[7]=M*w+y*C+x*$+A*_t,r[11]=M*R+y*z+x*O+A*et,r[15]=M*S+y*k+x*it+A*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,y=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,A=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,E=e*M+n*y+i*x+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return t[0]=M*w,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*w,t[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*w,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*w,t[4]=y*w,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*w,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*p-e*c*p)*w,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*w,t[8]=x*w,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*w,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*w,t[12]=A*w,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*w,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*m-e*a*m)*w,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,M=c*l,y=c*h,x=c*u,A=n.x,E=n.y,w=n.z;return i[0]=(1-(_+p))*A,i[1]=(f+x)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(f-x)*E,i[5]=(1-(d+p))*E,i[6]=(m+M)*E,i[7]=0,i[8]=(g+y)*w,i[9]=(m-M)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Bs.set(i[0],i[1],i[2]).length(),o=Bs.set(i[4],i[5],i[6]).length(),a=Bs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Bn.copy(this);let l=1/r,h=1/o,u=1/a;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ui){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(a===ui)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===jo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ui){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h,g,_;if(a===ui)g=(o+r)*u,_=-2*u;else if(a===jo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Bs=new I,Bn=new le,Pm=new I(0,0,0),Im=new I(1,1,1),Ri=new I,Ao=new I,vn=new I,Ru=new le,Cu=new an,dn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var ia=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dm=0,Pu=new I,zs=new an,oi=new le,Ro=new I,Lr=new I,Lm=new I,Um=new an,Iu=new I(1,0,0),Du=new I(0,1,0),Lu=new I(0,0,1),Uu={type:"added"},Nm={type:"removed"},ks={type:"childadded",child:null},oc={type:"childremoved",child:null},de=class s extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new dn,n=new an,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new le},normalMatrix:{value:new jt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(Iu,t)}rotateY(t){return this.rotateOnAxis(Du,t)}rotateZ(t){return this.rotateOnAxis(Lu,t)}translateOnAxis(t,e){return Pu.copy(t).applyQuaternion(this.quaternion),this.position.add(Pu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Iu,t)}translateY(t){return this.translateOnAxis(Du,t)}translateZ(t){return this.translateOnAxis(Lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ro.copy(t):Ro.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Lr,Ro,this.up):oi.lookAt(Ro,Lr,this.up),this.quaternion.setFromRotationMatrix(oi),i&&(oi.extractRotation(i.matrixWorld),zs.setFromRotationMatrix(oi),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uu),ks.child=t,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nm),oc.child=t,this.dispatchEvent(oc),oc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uu),ks.child=t,this.dispatchEvent(ks),ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,t,Lm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,Um,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};de.DEFAULT_UP=new I(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new I,ai=new I,ac=new I,ci=new I,Hs=new I,Vs=new I,Nu=new I,cc=new I,lc=new I,hc=new I,uc=new me,dc=new me,fc=new me,rs=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),zn.subVectors(t,e),i.cross(zn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){zn.subVectors(i,e),ai.subVectors(n,e),ac.subVectors(t,e);let o=zn.dot(zn),a=zn.dot(ai),c=zn.dot(ac),l=ai.dot(ai),h=ai.dot(ac),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ci.x),c.addScaledVector(o,ci.y),c.addScaledVector(a,ci.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return uc.setScalar(0),dc.setScalar(0),fc.setScalar(0),uc.fromBufferAttribute(t,e),dc.fromBufferAttribute(t,n),fc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(uc,r.x),o.addScaledVector(dc,r.y),o.addScaledVector(fc,r.z),o}static isFrontFacing(t,e,n,i){return zn.subVectors(n,e),ai.subVectors(t,e),zn.cross(ai).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),zn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Hs.subVectors(i,n),Vs.subVectors(r,n),cc.subVectors(t,n);let c=Hs.dot(cc),l=Vs.dot(cc);if(c<=0&&l<=0)return e.copy(n);lc.subVectors(t,i);let h=Hs.dot(lc),u=Vs.dot(lc);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Hs,o);hc.subVectors(t,r);let f=Hs.dot(hc),g=Vs.dot(hc);if(g>=0&&f<=g)return e.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Vs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Nu.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Nu,a);let p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Hs,o).addScaledVector(Vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Co={h:0,s:0,l:0};function pc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=rh(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=pc(o,r,t+1/3),this.g=pc(o,r,t),this.b=pc(o,r,t-1/3)}return se.toWorkingColorSpace(this,i),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){let n=Nd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return se.fromWorkingColorSpace(Qe.copy(this),t),Math.round(We(Qe.r*255,0,255))*65536+Math.round(We(Qe.g*255,0,255))*256+Math.round(We(Qe.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Qe.copy(this),e);let n=Qe.r,i=Qe.g,r=Qe.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=ge){se.fromWorkingColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,i=Qe.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(Co);let n=Hr(Ci.h,Co.h,e),i=Hr(Ci.s,Co.s,e),r=Hr(Ci.l,Co.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new Kt;Kt.NAMES=Nd;var Om=0,us=class extends Oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=xs(),this.name="",this.blending=Ks,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cc,this.blendDst=Pc,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cc&&(n.blendSrc=this.blendSrc),this.blendDst!==Pc&&(n.blendDst=this.blendDst),this.blendEquation!==ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_u&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Re=class extends us{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fe=new I,Po=new Bt,qe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xu,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Po.fromBufferAttribute(this,e),Po.applyMatrix3(t),this.setXY(e,Po.x,Po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),i=rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xu&&(t.usage=this.usage),t}};var sa=class extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ra=class extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Fm=0,Rn=new le,mc=new de,Gs=new I,Mn=new Vn,Ur=new Vn,Ge=new I,Xe=class s extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ud(t)?ra:sa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return mc.lookAt(t),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ur.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(Mn.min,Ur.min),Mn.expandByPoint(Ge),Ge.addVectors(Mn.max,Ur.max),Mn.expandByPoint(Ge)):(Mn.expandByPoint(Ur.min),Mn.expandByPoint(Ur.max))}Mn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ge.fromBufferAttribute(a,l),c&&(Gs.fromBufferAttribute(t,l),Ge.add(Gs)),i=Math.max(i,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new I,c[R]=new I;let l=new I,h=new I,u=new I,d=new Bt,f=new Bt,g=new Bt,_=new I,m=new I;function p(R,S,v){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[R].add(_),a[S].add(_),a[v].add(_),c[R].add(m),c[S].add(m),c[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,S=M.length;R<S;++R){let v=M[R],C=v.start,z=v.count;for(let k=C,W=C+z;k<W;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let y=new I,x=new I,A=new I,E=new I;function w(R){A.fromBufferAttribute(i,R),E.copy(A);let S=a[R];y.copy(S),y.sub(A.multiplyScalar(A.dot(S))).normalize(),x.crossVectors(E,S);let C=x.dot(c[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,C)}for(let R=0,S=M.length;R<S;++R){let v=M[R],C=v.start,z=v.count;for(let k=C,W=C+z;k<W;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ou=new le,ji=new _l,Io=new hs,Fu=new I,Do=new I,Lo=new I,Uo=new I,gc=new I,No=new I,Bu=new I,Oo=new I,kt=class extends de{constructor(t=new Xe,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){No.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(gc.fromBufferAttribute(u,t),o?No.addScaledVector(gc,h):No.addScaledVector(gc.sub(e),h))}e.add(No)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(Io.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Io,Fu)===null||ji.origin.distanceToSquared(Fu)>(t.far-t.near)**2))&&(Ou.copy(r).invert(),ji.copy(t.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,A=y;x<A;x+=3){let E=a.getX(x),w=a.getX(x+1),R=a.getX(x+2);i=Fo(this,p,t,n,l,h,u,E,w,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=Fo(this,o,t,n,l,h,u,M,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,A=y;x<A;x+=3){let E=x,w=x+1,R=x+2;i=Fo(this,p,t,n,l,h,u,E,w,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=m,y=m+1,x=m+2;i=Fo(this,o,t,n,l,h,u,M,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Bm(s,t,e,n,i,r,o,a){let c;if(t.side===tn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Ni,a),c===null)return null;Oo.copy(a),Oo.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Oo);return l<e.near||l>e.far?null:{distance:l,point:Oo.clone(),object:s}}function Fo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Do),s.getVertexPosition(c,Lo),s.getVertexPosition(l,Uo);let h=Bm(s,t,e,n,Do,Lo,Uo,Bu);if(h){let u=new I;rs.getBarycoord(Bu,Do,Lo,Uo,u),i&&(h.uv=rs.getInterpolatedAttribute(i,a,c,l,u,new Bt)),r&&(h.uv1=rs.getInterpolatedAttribute(r,a,c,l,u,new Bt)),o&&(h.normal=rs.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new I,materialIndex:0};rs.getNormal(Do,Lo,Uo,d.normal),h.face=d,h.barycoord=u}return h}var _e=class s extends Xe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(_,m,p,M,y,x,A,E,w,R,S){let v=x/w,C=A/R,z=x/2,k=A/2,W=E/2,$=w+1,O=R+1,it=0,Z=0,_t=new I;for(let et=0;et<O;et++){let ht=et*C-k;for(let Rt=0;Rt<$;Rt++){let H=Rt*v-z;_t[_]=H*M,_t[m]=ht*y,_t[p]=W,l.push(_t.x,_t.y,_t.z),_t[_]=0,_t[m]=0,_t[p]=E>0?1:-1,h.push(_t.x,_t.y,_t.z),u.push(Rt/w),u.push(1-et/R),it+=1}}for(let et=0;et<R;et++)for(let ht=0;ht<w;ht++){let Rt=d+ht+$*et,H=d+ht+$*(et+1),U=d+(ht+1)+$*(et+1),B=d+(ht+1)+$*et;c.push(Rt,H,B),c.push(H,U,B),Z+=6}a.addGroup(f,Z,S),f+=Z,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function or(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function on(s){let t={};for(let e=0;e<s.length;e++){let n=or(s[e]);for(let i in n)t[i]=n[i]}return t}function zm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Od(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var km={clone:or,merge:on},Hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jn=class extends us{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hm,this.fragmentShader=Vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=zm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},oa=class extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pi=new I,zu=new Bt,ku=new Bt,je=class extends oa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,zu,ku),e.subVectors(ku,zu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ws=-90,Xs=1,xl=class extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new je(Ws,Xs,t,e);i.layers=this.layers,this.add(i);let r=new je(Ws,Xs,t,e);r.layers=this.layers,this.add(r);let o=new je(Ws,Xs,t,e);o.layers=this.layers,this.add(o);let a=new je(Ws,Xs,t,e);a.layers=this.layers,this.add(a);let c=new je(Ws,Xs,t,e);c.layers=this.layers,this.add(c);let l=new je(Ws,Xs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},aa=class extends un{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:nr,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yl=class extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new aa(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _e(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Di});r.uniforms.tEquirect.value=e;let o=new kt(i,r),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=Zn),new xl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},_c=new I,Gm=new I,Wm=new jt,hi=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=_c.subVectors(n,e).cross(Gm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(_c),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wm.getNormalMatrix(t),i=this.coplanarPoint(_c).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new hs,Bo=new I,Zr=class{constructor(t=new hi,e=new hi,n=new hi,i=new hi,r=new hi,o=new hi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],y=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+g,x+M).normalize(),n[3].setComponents(c-o,d-h,m-g,x-M).normalize(),n[4].setComponents(c-a,d-u,m-_,x-y).normalize(),e===ui)n[5].setComponents(c+a,d+u,m+_,x+y).normalize();else if(e===jo)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Bo.x=i.normal.x>0?t.max.x:t.min.x,Bo.y=i.normal.y>0?t.max.y:t.min.y,Bo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fd(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Xm(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Ce=class s extends Xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let M=p*d-o;for(let y=0;y<l;y++){let x=y*u-r;g.push(x,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let y=M+l*p,x=M+l*(p+1),A=M+1+l*(p+1),E=M+1+l*p;f.push(y,x,E),f.push(x,A,E)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ym=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,e0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,r0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,o0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,m0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,g0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",b0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,U0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,B0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,H0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,W0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,X0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,q0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ug=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,t_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,h_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,d_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,g_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,b_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:qm,alphahash_pars_fragment:Ym,alphamap_fragment:Zm,alphamap_pars_fragment:$m,alphatest_fragment:Jm,alphatest_pars_fragment:Km,aomap_fragment:Qm,aomap_pars_fragment:jm,batching_pars_vertex:t0,batching_vertex:e0,begin_vertex:n0,beginnormal_vertex:i0,bsdfs:s0,iridescence_fragment:r0,bumpmap_pars_fragment:o0,clipping_planes_fragment:a0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:l0,clipping_planes_vertex:h0,color_fragment:u0,color_pars_fragment:d0,color_pars_vertex:f0,color_vertex:p0,common:m0,cube_uv_reflection_fragment:g0,defaultnormal_vertex:_0,displacementmap_pars_vertex:x0,displacementmap_vertex:y0,emissivemap_fragment:v0,emissivemap_pars_fragment:M0,colorspace_fragment:S0,colorspace_pars_fragment:b0,envmap_fragment:E0,envmap_common_pars_fragment:w0,envmap_pars_fragment:T0,envmap_pars_vertex:A0,envmap_physical_pars_fragment:B0,envmap_vertex:R0,fog_vertex:C0,fog_pars_vertex:P0,fog_fragment:I0,fog_pars_fragment:D0,gradientmap_pars_fragment:L0,lightmap_pars_fragment:U0,lights_lambert_fragment:N0,lights_lambert_pars_fragment:O0,lights_pars_begin:F0,lights_toon_fragment:z0,lights_toon_pars_fragment:k0,lights_phong_fragment:H0,lights_phong_pars_fragment:V0,lights_physical_fragment:G0,lights_physical_pars_fragment:W0,lights_fragment_begin:X0,lights_fragment_maps:q0,lights_fragment_end:Y0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:$0,logdepthbuf_pars_vertex:J0,logdepthbuf_vertex:K0,map_fragment:Q0,map_pars_fragment:j0,map_particle_fragment:tg,map_particle_pars_fragment:eg,metalnessmap_fragment:ng,metalnessmap_pars_fragment:ig,morphinstance_vertex:sg,morphcolor_vertex:rg,morphnormal_vertex:og,morphtarget_pars_vertex:ag,morphtarget_vertex:cg,normal_fragment_begin:lg,normal_fragment_maps:hg,normal_pars_fragment:ug,normal_pars_vertex:dg,normal_vertex:fg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:gg,clearcoat_pars_fragment:_g,iridescence_pars_fragment:xg,opaque_fragment:yg,packing:vg,premultiplied_alpha_fragment:Mg,project_vertex:Sg,dithering_fragment:bg,dithering_pars_fragment:Eg,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Tg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:Rg,shadowmap_vertex:Cg,shadowmask_pars_fragment:Pg,skinbase_vertex:Ig,skinning_pars_vertex:Dg,skinning_vertex:Lg,skinnormal_vertex:Ug,specularmap_fragment:Ng,specularmap_pars_fragment:Og,tonemapping_fragment:Fg,tonemapping_pars_fragment:Bg,transmission_fragment:zg,transmission_pars_fragment:kg,uv_pars_fragment:Hg,uv_pars_vertex:Vg,uv_vertex:Gg,worldpos_vertex:Wg,background_vert:Xg,background_frag:qg,backgroundCube_vert:Yg,backgroundCube_frag:Zg,cube_vert:$g,cube_frag:Jg,depth_vert:Kg,depth_frag:Qg,distanceRGBA_vert:jg,distanceRGBA_frag:t_,equirect_vert:e_,equirect_frag:n_,linedashed_vert:i_,linedashed_frag:s_,meshbasic_vert:r_,meshbasic_frag:o_,meshlambert_vert:a_,meshlambert_frag:c_,meshmatcap_vert:l_,meshmatcap_frag:h_,meshnormal_vert:u_,meshnormal_frag:d_,meshphong_vert:f_,meshphong_frag:p_,meshphysical_vert:m_,meshphysical_frag:g_,meshtoon_vert:__,meshtoon_frag:x_,points_vert:y_,points_frag:v_,shadow_vert:M_,shadow_frag:S_,sprite_vert:b_,sprite_frag:E_},Vt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Yn={basic:{uniforms:on([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:on([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:on([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:on([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:on([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:on([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:on([Vt.points,Vt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:on([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:on([Vt.common,Vt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:on([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:on([Vt.sprite,Vt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:on([Vt.common,Vt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:on([Vt.lights,Vt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Yn.physical={uniforms:on([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var zo={r:0,b:0,g:0},es=new dn,w_=new le;function T_(s,t,e,n,i,r,o){let a=new Kt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1,x=g(M);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,y){let x=g(y);x&&(x.isCubeTexture||x.mapping===Ma)?(h===void 0&&(h=new kt(new _e(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:or(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),es.copy(y.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w_.makeRotationFromEuler(es)),h.material.toneMapped=se.getTransfer(x.colorSpace)!==pe,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new kt(new Ce(2,2),new Jn({name:"BackgroundMaterial",uniforms:or(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=se.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,y){M.getRGB(zo,Od(s)),n.buffers.color.setClear(zo.r,zo.g,zo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:m}}function A_(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(v,C,z,k,W){let $=!1,O=u(k,z,C);r!==O&&(r=O,l(r.object)),$=f(v,k,z,W),$&&g(v,k,z,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(v,C,z,k),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,C,z){let k=z.wireframe===!0,W=n[v.id];W===void 0&&(W={},n[v.id]=W);let $=W[C.id];$===void 0&&($={},W[C.id]=$);let O=$[k];return O===void 0&&(O=d(c()),$[k]=O),O}function d(v){let C=[],z=[],k=[];for(let W=0;W<e;W++)C[W]=0,z[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:k,object:v,attributes:{},index:null}}function f(v,C,z,k){let W=r.attributes,$=C.attributes,O=0,it=z.getAttributes();for(let Z in it)if(it[Z].location>=0){let et=W[Z],ht=$[Z];if(ht===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor)),et===void 0||et.attribute!==ht||ht&&et.data!==ht.data)return!0;O++}return r.attributesNum!==O||r.index!==k}function g(v,C,z,k){let W={},$=C.attributes,O=0,it=z.getAttributes();for(let Z in it)if(it[Z].location>=0){let et=$[Z];et===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(et=v.instanceColor));let ht={};ht.attribute=et,et&&et.data&&(ht.data=et.data),W[Z]=ht,O++}r.attributes=W,r.attributesNum=O,r.index=k}function _(){let v=r.newAttributes;for(let C=0,z=v.length;C<z;C++)v[C]=0}function m(v){p(v,0)}function p(v,C){let z=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;z[v]=1,k[v]===0&&(s.enableVertexAttribArray(v),k[v]=1),W[v]!==C&&(s.vertexAttribDivisor(v,C),W[v]=C)}function M(){let v=r.newAttributes,C=r.enabledAttributes;for(let z=0,k=C.length;z<k;z++)C[z]!==v[z]&&(s.disableVertexAttribArray(z),C[z]=0)}function y(v,C,z,k,W,$,O){O===!0?s.vertexAttribIPointer(v,C,z,W,$):s.vertexAttribPointer(v,C,z,k,W,$)}function x(v,C,z,k){_();let W=k.attributes,$=z.getAttributes(),O=C.defaultAttributeValues;for(let it in $){let Z=$[it];if(Z.location>=0){let _t=W[it];if(_t===void 0&&(it==="instanceMatrix"&&v.instanceMatrix&&(_t=v.instanceMatrix),it==="instanceColor"&&v.instanceColor&&(_t=v.instanceColor)),_t!==void 0){let et=_t.normalized,ht=_t.itemSize,Rt=t.get(_t);if(Rt===void 0)continue;let H=Rt.buffer,U=Rt.type,B=Rt.bytesPerElement,Y=U===s.INT||U===s.UNSIGNED_INT||_t.gpuType===Ql;if(_t.isInterleavedBufferAttribute){let D=_t.data,st=D.stride,mt=_t.offset;if(D.isInstancedInterleavedBuffer){for(let Tt=0;Tt<Z.locationSize;Tt++)p(Z.location+Tt,D.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let Tt=0;Tt<Z.locationSize;Tt++)m(Z.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,H);for(let Tt=0;Tt<Z.locationSize;Tt++)y(Z.location+Tt,ht/Z.locationSize,U,et,st*B,(mt+ht/Z.locationSize*Tt)*B,Y)}else{if(_t.isInstancedBufferAttribute){for(let D=0;D<Z.locationSize;D++)p(Z.location+D,_t.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let D=0;D<Z.locationSize;D++)m(Z.location+D);s.bindBuffer(s.ARRAY_BUFFER,H);for(let D=0;D<Z.locationSize;D++)y(Z.location+D,ht/Z.locationSize,U,et,ht*B,ht/Z.locationSize*D*B,Y)}}else if(O!==void 0){let et=O[it];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(Z.location,et);break;case 3:s.vertexAttrib3fv(Z.location,et);break;case 4:s.vertexAttrib4fv(Z.location,et);break;default:s.vertexAttrib1fv(Z.location,et)}}}}M()}function A(){R();for(let v in n){let C=n[v];for(let z in C){let k=C[z];for(let W in k)h(k[W].object),delete k[W];delete C[z]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;let C=n[v.id];for(let z in C){let k=C[z];for(let W in k)h(k[W].object),delete k[W];delete C[z]}delete n[v.id]}function w(v){for(let C in n){let z=n[C];if(z[v.id]===void 0)continue;let k=z[v.id];for(let W in k)h(k[W].object),delete k[W];delete z[v.id]}}function R(){S(),o=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function R_(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function C_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Hn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let R=w===eo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==fi&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==$n&&!R)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:A,maxSamples:E}}function P_(s){let t=this,e=null,n=0,i=!1,r=!1,o=new hi,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,y=M*4,x=p.clippingState||null;c.value=x,x=h(g,d,y,f);for(let A=0;A!==y;++A)x[A]=e[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function I_(s){let t=new WeakMap;function e(o,a){return a===Xr?o.mapping=nr:a===Bc&&(o.mapping=ir),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xr||a===Bc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new yl(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ar=class extends oa{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$s=4,Hu=[.125,.215,.35,.446,.526,.582],os=20,xc=new ar,Vu=new Kt,yc=null,vc=0,Mc=0,Sc=!1,is=(1+Math.sqrt(5))/2,qs=1/is,Gu=[new I(-is,qs,0),new I(is,qs,0),new I(-qs,0,is),new I(qs,0,is),new I(0,is,-qs),new I(0,is,qs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],cr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){yc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yc,vc,Mc),this._renderer.xr.enabled=Sc,t.scissorTest=!1,ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===nr||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:eo,format:Hn,colorSpace:pr,depthBuffer:!1},i=Wu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D_(r)),this._blurMaterial=L_(r,t,e)}return i}_compileMaterial(t){let e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,xc)}_sceneToCubeUV(t,e,n,i){let a=new je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Vu),h.toneMapping=Li,h.autoClear=!1;let f=new Re({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new kt(new _e,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Vu),_=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let y=this._cubeSize;ko(i,M*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===nr||t.mapping===ir;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ko(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,xc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gu[(i-r-1)%Gu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new kt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*os-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):os;m>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);let p=[],M=0;for(let w=0;w<os;++w){let R=w/_,S=Math.exp(-R*R/2);p.push(S),w===0?M+=S:w<m&&(M+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let x=this._sizeLods[i],A=3*x*(i>y-$s?i-y+$s:0),E=4*(this._cubeSize-x);ko(e,A,E,3*x,2*x),c.setRenderTarget(e),c.render(u,xc)}};function D_(s){let t=[],e=[],n=[],i=s,r=s-$s+1+Hu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-$s?c=Hu[o-s+$s-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let E=0;E<f;E++){let w=E%3*2/3-1,R=E>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];M.set(S,_*g*E),y.set(d,m*g*E);let v=[E,E,E,E,E,E];x.set(v,p*g*E)}let A=new Xe;A.setAttribute("position",new qe(M,_)),A.setAttribute("uv",new qe(y,m)),A.setAttribute("faceIndex",new qe(x,p)),t.push(A),i>$s&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wu(s,t,e){let n=new pi(s,t,e);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ko(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function L_(s,t,e){let n=new Float32Array(os),i=new I(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Xu(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function qu(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function oh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function U_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Xr||c===Bc,h=c===nr||c===ir;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new cr(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new cr(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function N_(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Br("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function O_(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let M=f.array;_=f.version;for(let y=0,x=M.length;y<x;y+=3){let A=M[y+0],E=M[y+1],w=M[y+2];d.push(A,E,E,w,w,A)}}else if(g!==void 0){let M=g.array;_=g.version;for(let y=0,x=M.length/3-1;y<x;y+=3){let A=y+0,E=y+1,w=y+2;d.push(A,E,E,w,w,A)}}else return;let m=new(Ud(d)?ra:sa)(d,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function F_(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function B_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function z_(s,t,e){let n=new WeakMap,i=new me;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*A*4*u),w=new na(E,x,A,u);w.type=$n,w.needsUpdate=!0;let R=y*4;for(let v=0;v<u;v++){let C=m[v],z=p[v],k=M[v],W=x*A*4*v;for(let $=0;$<C.count;$++){let O=$*R;f===!0&&(i.fromBufferAttribute(C,$),E[W+O+0]=i.x,E[W+O+1]=i.y,E[W+O+2]=i.z,E[W+O+3]=0),g===!0&&(i.fromBufferAttribute(z,$),E[W+O+4]=i.x,E[W+O+5]=i.y,E[W+O+6]=i.z,E[W+O+7]=0),_===!0&&(i.fromBufferAttribute(k,$),E[W+O+8]=i.x,E[W+O+9]=i.y,E[W+O+10]=i.z,E[W+O+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new Bt(x,A)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function k_(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var ca=class extends un{constructor(t,e,n,i,r,o,a,c,l,h=Qs){if(h!==Qs&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qs&&(n=ls),n===void 0&&h===rr&&(n=sr),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Sn,this.minFilter=c!==void 0?c:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Bd=new un,Yu=new ca(1,1),zd=new na,kd=new gl,Hd=new aa,Zu=[],$u=[],Ju=new Float32Array(16),Ku=new Float32Array(9),Qu=new Float32Array(4);function mr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Zu[i];if(r===void 0&&(r=new Float32Array(i),Zu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ze(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ke(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ba(s,t){let e=$u[t];e===void 0&&(e=new Int32Array(t),$u[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function H_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function V_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2fv(this.addr,t),ke(e,t)}}function G_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;s.uniform3fv(this.addr,t),ke(e,t)}}function W_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4fv(this.addr,t),ke(e,t)}}function X_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Qu.set(n),s.uniformMatrix2fv(this.addr,!1,Qu),ke(e,n)}}function q_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Ku.set(n),s.uniformMatrix3fv(this.addr,!1,Ku),ke(e,n)}}function Y_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;Ju.set(n),s.uniformMatrix4fv(this.addr,!1,Ju),ke(e,n)}}function Z_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function $_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2iv(this.addr,t),ke(e,t)}}function J_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;s.uniform3iv(this.addr,t),ke(e,t)}}function K_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4iv(this.addr,t),ke(e,t)}}function Q_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function j_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;s.uniform2uiv(this.addr,t),ke(e,t)}}function tx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;s.uniform3uiv(this.addr,t),ke(e,t)}}function ex(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;s.uniform4uiv(this.addr,t),ke(e,t)}}function nx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Yu.compareFunction=Ld,r=Yu):r=Bd,e.setTexture2D(t||r,i)}function ix(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||kd,i)}function sx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Hd,i)}function rx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||zd,i)}function ox(s){switch(s){case 5126:return H_;case 35664:return V_;case 35665:return G_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return Z_;case 35667:case 35671:return $_;case 35668:case 35672:return J_;case 35669:case 35673:return K_;case 5125:return Q_;case 36294:return j_;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}function ax(s,t){s.uniform1fv(this.addr,t)}function cx(s,t){let e=mr(t,this.size,2);s.uniform2fv(this.addr,e)}function lx(s,t){let e=mr(t,this.size,3);s.uniform3fv(this.addr,e)}function hx(s,t){let e=mr(t,this.size,4);s.uniform4fv(this.addr,e)}function ux(s,t){let e=mr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function dx(s,t){let e=mr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function fx(s,t){let e=mr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function px(s,t){s.uniform1iv(this.addr,t)}function mx(s,t){s.uniform2iv(this.addr,t)}function gx(s,t){s.uniform3iv(this.addr,t)}function _x(s,t){s.uniform4iv(this.addr,t)}function xx(s,t){s.uniform1uiv(this.addr,t)}function yx(s,t){s.uniform2uiv(this.addr,t)}function vx(s,t){s.uniform3uiv(this.addr,t)}function Mx(s,t){s.uniform4uiv(this.addr,t)}function Sx(s,t,e){let n=this.cache,i=t.length,r=ba(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Bd,r[o])}function bx(s,t,e){let n=this.cache,i=t.length,r=ba(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||kd,r[o])}function Ex(s,t,e){let n=this.cache,i=t.length,r=ba(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Hd,r[o])}function wx(s,t,e){let n=this.cache,i=t.length,r=ba(e,i);ze(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||zd,r[o])}function Tx(s){switch(s){case 5126:return ax;case 35664:return cx;case 35665:return lx;case 35666:return hx;case 35674:return ux;case 35675:return dx;case 35676:return fx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return xx;case 36294:return yx;case 36295:return vx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return wx}}var vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ox(e.type)}},Ml=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tx(e.type)}},Sl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},bc=/(\w+)(\])?(\[|\.)?/g;function ju(s,t){s.seq.push(t),s.map[t.id]=t}function Ax(s,t,e){let n=s.name,i=n.length;for(bc.lastIndex=0;;){let r=bc.exec(n),o=bc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ju(e,l===void 0?new vl(a,s,t):new Ml(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Sl(a),ju(e,u)),e=u}}}var tr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Ax(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function td(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Rx=37297,Cx=0;function Px(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ed=new jt;function Ix(s){se._getMatrix(ed,se.workingColorSpace,s);let t=`mat3( ${ed.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(s)){case Sa:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function nd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Px(s.getShaderSource(t),o)}else return i}function Dx(s,t){let e=Ix(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Lx(s,t){let e;switch(t){case Wp:e="Linear";break;case Xp:e="Reinhard";break;case qp:e="Cineon";break;case to:e="ACESFilmic";break;case Zp:e="AgX";break;case $p:e="Neutral";break;case Yp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ho=new I;function Ux(){se.getLuminanceCoefficients(Ho);let s=Ho.x.toFixed(4),t=Ho.y.toFixed(4),e=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function Ox(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function zr(s){return s!==""}function id(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(s){return s.replace(Bx,kx)}var zx=new Map;function kx(s,t){let e=ne[t];if(e===void 0){let n=zx.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bl(e)}var Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(s){return s.replace(Hx,Vx)}function Vx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function od(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===vd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===bp?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function Wx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case nr:case ir:t="ENVMAP_TYPE_CUBE";break;case Ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ir:t="ENVMAP_MODE_REFRACTION";break}return t}function qx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Md:t="ENVMAP_BLENDING_MULTIPLY";break;case Vp:t="ENVMAP_BLENDING_MIX";break;case Gp:t="ENVMAP_BLENDING_ADD";break}return t}function Yx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zx(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Gx(e),l=Wx(e),h=Xx(e),u=qx(e),d=Yx(e),f=Nx(e),g=Ox(r),_=i.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zr).join(`
`),p.length>0&&(p+=`
`)):(m=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),p=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Li?"#define TONE_MAPPING":"",e.toneMapping!==Li?ne.tonemapping_pars_fragment:"",e.toneMapping!==Li?Lx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Dx("linearToOutputTexel",e.outputColorSpace),Ux(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),o=bl(o),o=id(o,e),o=sd(o,e),a=bl(a),a=id(a,e),a=sd(a,e),o=rd(o),a=rd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=M+m+o,x=M+p+a,A=td(i,i.VERTEX_SHADER,y),E=td(i,i.FRAGMENT_SHADER,x);i.attachShader(_,A),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(C){if(s.debug.checkShaderErrors){let z=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(A).trim(),W=i.getShaderInfoLog(E).trim(),$=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,E);else{let it=nd(i,A,"vertex"),Z=nd(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+it+`
`+Z)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||W==="")&&(O=!1);O&&(C.diagnostics={runnable:$,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(A),i.deleteShader(E),R=new tr(i,_),S=Fx(i,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Rx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}var $x=0,El=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wl(t),e.set(t,n)),n}},wl=class{constructor(t){this.id=$x++,this.code=t,this.usedTimes=0}};function Jx(s,t,e,n,i,r,o){let a=new ia,c=new El,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,C,z,k){let W=z.fog,$=k.geometry,O=S.isMeshStandardMaterial?z.environment:null,it=(S.isMeshStandardMaterial?e:t).get(S.envMap||O),Z=it&&it.mapping===Ma?it.image.height:null,_t=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let et=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ht=et!==void 0?et.length:0,Rt=0;$.morphAttributes.position!==void 0&&(Rt=1),$.morphAttributes.normal!==void 0&&(Rt=2),$.morphAttributes.color!==void 0&&(Rt=3);let H,U,B,Y;if(_t){let Dt=Yn[_t];H=Dt.vertexShader,U=Dt.fragmentShader}else H=S.vertexShader,U=S.fragmentShader,c.update(S),B=c.getVertexShaderID(S),Y=c.getFragmentShaderID(S);let D=s.getRenderTarget(),st=s.state.buffers.depth.getReversed(),mt=k.isInstancedMesh===!0,Tt=k.isBatchedMesh===!0,It=!!S.map,G=!!S.matcap,gt=!!it,N=!!S.aoMap,Ut=!!S.lightMap,wt=!!S.bumpMap,q=!!S.normalMap,j=!!S.displacementMap,St=!!S.emissiveMap,rt=!!S.metalnessMap,T=!!S.roughnessMap,b=S.anisotropy>0,X=S.clearcoat>0,pt=S.dispersion>0,At=S.iridescence>0,at=S.sheen>0,vt=S.transmission>0,xt=b&&!!S.anisotropyMap,bt=X&&!!S.clearcoatMap,zt=X&&!!S.clearcoatNormalMap,Q=X&&!!S.clearcoatRoughnessMap,ft=At&&!!S.iridescenceMap,Ot=At&&!!S.iridescenceThicknessMap,ot=at&&!!S.sheenColorMap,ct=at&&!!S.sheenRoughnessMap,Nt=!!S.specularMap,nt=!!S.specularColorMap,Et=!!S.specularIntensityMap,L=vt&&!!S.transmissionMap,Ct=vt&&!!S.thicknessMap,V=!!S.gradientMap,ut=!!S.alphaMap,F=S.alphaTest>0,tt=!!S.alphaHash,Pt=!!S.extensions,Ht=Li;S.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ht=s.toneMapping);let Mt={shaderID:_t,shaderType:S.type,shaderName:S.name,vertexShader:H,fragmentShader:U,defines:S.defines,customVertexShaderID:B,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&k._colorsTexture!==null,instancing:mt,instancingColor:mt&&k.instanceColor!==null,instancingMorph:mt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:D===null?s.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:pr,alphaToCoverage:!!S.alphaToCoverage,map:It,matcap:G,envMap:gt,envMapMode:gt&&it.mapping,envMapCubeUVHeight:Z,aoMap:N,lightMap:Ut,bumpMap:wt,normalMap:q,displacementMap:d&&j,emissiveMap:St,normalMapObjectSpace:q&&S.normalMapType===jp,normalMapTangentSpace:q&&S.normalMapType===Dd,metalnessMap:rt,roughnessMap:T,anisotropy:b,anisotropyMap:xt,clearcoat:X,clearcoatMap:bt,clearcoatNormalMap:zt,clearcoatRoughnessMap:Q,dispersion:pt,iridescence:At,iridescenceMap:ft,iridescenceThicknessMap:Ot,sheen:at,sheenColorMap:ot,sheenRoughnessMap:ct,specularMap:Nt,specularColorMap:nt,specularIntensityMap:Et,transmission:vt,transmissionMap:L,thicknessMap:Ct,gradientMap:V,opaque:S.transparent===!1&&S.blending===Ks&&S.alphaToCoverage===!1,alphaMap:ut,alphaTest:F,alphaHash:tt,combine:S.combine,mapUv:It&&_(S.map.channel),aoMapUv:N&&_(S.aoMap.channel),lightMapUv:Ut&&_(S.lightMap.channel),bumpMapUv:wt&&_(S.bumpMap.channel),normalMapUv:q&&_(S.normalMap.channel),displacementMapUv:j&&_(S.displacementMap.channel),emissiveMapUv:St&&_(S.emissiveMap.channel),metalnessMapUv:rt&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:xt&&_(S.anisotropyMap.channel),clearcoatMapUv:bt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:zt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ct&&_(S.sheenRoughnessMap.channel),specularMapUv:Nt&&_(S.specularMap.channel),specularColorMapUv:nt&&_(S.specularColorMap.channel),specularIntensityMapUv:Et&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:Ct&&_(S.thicknessMap.channel),alphaMapUv:ut&&_(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(q||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(It||ut),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:st,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Rt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ht,decodeVideoTexture:It&&S.map.isVideoTexture===!0&&se.getTransfer(S.map.colorSpace)===pe,decodeVideoTextureEmissive:St&&S.emissiveMap.isVideoTexture===!0&&se.getTransfer(S.emissiveMap.colorSpace)===pe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===kn,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&S.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function p(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)v.push(C),v.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(M(v,S),y(v,S),v.push(s.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function M(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function y(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let v=g[S.type],C;if(v){let z=Yn[v];C=km.clone(z.uniforms)}else C=S.uniforms;return C}function A(S,v){let C;for(let z=0,k=h.length;z<k;z++){let W=h[z];if(W.cacheKey===v){C=W,++C.usedTimes;break}}return C===void 0&&(C=new Zx(s,v,S,r),h.push(C)),C}function E(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function w(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:R}}function Kx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Qx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ad(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function cd(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Qx),n.length>1&&n.sort(d||ad),i.length>1&&i.sort(d||ad)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function jx(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new cd,s.set(n,[o])):i>=r.length?(o=new cd,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function ty(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Kt};break;case"SpotLight":e={position:new I,direction:new I,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function ey(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ny=0;function iy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function sy(s){let t=new ty,e=ey(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let i=new I,r=new le,o=new le;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,y=0,x=0,A=0,E=0,w=0;l.sort(iy);for(let S=0,v=l.length;S<v;S++){let C=l[S],z=C.color,k=C.intensity,W=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*k,u+=z.g*k,d+=z.b*k;else if(C.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(C.sh.coefficients[O],k);w++}else if(C.isDirectionalLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let it=C.shadow,Z=e.get(C);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=C.shadow.matrix,M++}n.directional[f]=O,f++}else if(C.isSpotLight){let O=t.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(z).multiplyScalar(k),O.distance=W,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,n.spot[_]=O;let it=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,it.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[_]=it.matrix,C.castShadow){let Z=e.get(C);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=$,x++}_++}else if(C.isRectAreaLight){let O=t.get(C);O.color.copy(z).multiplyScalar(k),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=O,m++}else if(C.isPointLight){let O=t.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let it=C.shadow,Z=e.get(C);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,Z.shadowCameraNear=it.camera.near,Z.shadowCameraFar=it.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=O,g++}else if(C.isHemisphereLight){let O=t.get(C);O.skyColor.copy(C.color).multiplyScalar(k),O.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[p]=O,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Vt.LTC_FLOAT_1,n.rectAreaLTC2=Vt.LTC_FLOAT_2):(n.rectAreaLTC1=Vt.LTC_HALF_1,n.rectAreaLTC2=Vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==y||R.numSpotShadows!==x||R.numSpotMaps!==A||R.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=y,R.numSpotShadows=x,R.numSpotMaps=A,R.numLightProbes=w,n.version=ny++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let y=l[p];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(y.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function ld(s){let t=new sy(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ry(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new ld(s),t.set(i,[a])):r>=o.length?(a=new ld(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Tl=class extends us{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Al=class extends us{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ay=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cy(s,t,e){let n=new Zr,i=new Bt,r=new Bt,o=new me,a=new Tl({depthPacking:Qp}),c=new Al,l={},h=e.maxTextureSize,u={[Ni]:tn,[tn]:Ni,[kn]:kn},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:oy,fragmentShader:ay}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Xe;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vd;let p=this.type;this.render=function(E,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let S=s.getRenderTarget(),v=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Di),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=p!==li&&this.type===li,W=p===li&&this.type!==li;for(let $=0,O=E.length;$<O;$++){let it=E[$],Z=it.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);let _t=Z.getFrameExtents();if(i.multiply(_t),r.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/_t.x),i.x=r.x*_t.x,Z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/_t.y),i.y=r.y*_t.y,Z.mapSize.y=r.y)),Z.map===null||k===!0||W===!0){let ht=this.type!==li?{minFilter:Sn,magFilter:Sn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new pi(i.x,i.y,ht),Z.map.texture.name=it.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();let et=Z.getViewportCount();for(let ht=0;ht<et;ht++){let Rt=Z.getViewport(ht);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),z.viewport(o),Z.updateMatrices(it,ht),n=Z.getFrustum(),x(w,R,Z.camera,it,this.type)}Z.isPointLightShadow!==!0&&this.type===li&&M(Z,R),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,v,C)};function M(E,w){let R=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new pi(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(w,null,R,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(w,null,R,f,_,null)}function y(E,w,R,S){let v=null,C=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)v=C;else if(v=R.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let z=v.uuid,k=w.uuid,W=l[z];W===void 0&&(W={},l[z]=W);let $=W[k];$===void 0&&($=v.clone(),W[k]=$,w.addEventListener("dispose",A)),v=$}if(v.visible=w.visible,v.wireframe=w.wireframe,S===li?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let z=s.properties.get(v);z.light=R}return v}function x(E,w,R,S,v){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===li)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let k=t.update(E),W=E.material;if(Array.isArray(W)){let $=k.groups;for(let O=0,it=$.length;O<it;O++){let Z=$[O],_t=W[Z.materialIndex];if(_t&&_t.visible){let et=y(E,_t,S,v);E.onBeforeShadow(s,E,w,R,k,et,Z),s.renderBufferDirect(R,null,k,et,E,Z),E.onAfterShadow(s,E,w,R,k,et,Z)}}}else if(W.visible){let $=y(E,W,S,v);E.onBeforeShadow(s,E,w,R,k,$,null),s.renderBufferDirect(R,null,k,$,E,null),E.onAfterShadow(s,E,w,R,k,$,null)}}let z=E.children;for(let k=0,W=z.length;k<W;k++)x(z[k],w,R,S,v)}function A(E){E.target.removeEventListener("dispose",A);for(let R in l){let S=l[R],v=E.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var ly={[Ic]:Dc,[Lc]:Oc,[Uc]:Fc,[er]:Nc,[Dc]:Ic,[Oc]:Lc,[Fc]:Uc,[Nc]:er};function hy(s,t){function e(){let L=!1,Ct=new me,V=null,ut=new me(0,0,0,0);return{setMask:function(F){V!==F&&!L&&(s.colorMask(F,F,F,F),V=F)},setLocked:function(F){L=F},setClear:function(F,tt,Pt,Ht,Mt){Mt===!0&&(F*=Ht,tt*=Ht,Pt*=Ht),Ct.set(F,tt,Pt,Ht),ut.equals(Ct)===!1&&(s.clearColor(F,tt,Pt,Ht),ut.copy(Ct))},reset:function(){L=!1,V=null,ut.set(-1,0,0,0)}}}function n(){let L=!1,Ct=!1,V=null,ut=null,F=null;return{setReversed:function(tt){if(Ct!==tt){let Pt=t.get("EXT_clip_control");Ct?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);let Ht=F;F=null,this.setClear(Ht)}Ct=tt},getReversed:function(){return Ct},setTest:function(tt){tt?D(s.DEPTH_TEST):st(s.DEPTH_TEST)},setMask:function(tt){V!==tt&&!L&&(s.depthMask(tt),V=tt)},setFunc:function(tt){if(Ct&&(tt=ly[tt]),ut!==tt){switch(tt){case Ic:s.depthFunc(s.NEVER);break;case Dc:s.depthFunc(s.ALWAYS);break;case Lc:s.depthFunc(s.LESS);break;case er:s.depthFunc(s.LEQUAL);break;case Uc:s.depthFunc(s.EQUAL);break;case Nc:s.depthFunc(s.GEQUAL);break;case Oc:s.depthFunc(s.GREATER);break;case Fc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ut=tt}},setLocked:function(tt){L=tt},setClear:function(tt){F!==tt&&(Ct&&(tt=1-tt),s.clearDepth(tt),F=tt)},reset:function(){L=!1,V=null,ut=null,F=null,Ct=!1}}}function i(){let L=!1,Ct=null,V=null,ut=null,F=null,tt=null,Pt=null,Ht=null,Mt=null;return{setTest:function(Dt){L||(Dt?D(s.STENCIL_TEST):st(s.STENCIL_TEST))},setMask:function(Dt){Ct!==Dt&&!L&&(s.stencilMask(Dt),Ct=Dt)},setFunc:function(Dt,Wt,Jt){(V!==Dt||ut!==Wt||F!==Jt)&&(s.stencilFunc(Dt,Wt,Jt),V=Dt,ut=Wt,F=Jt)},setOp:function(Dt,Wt,Jt){(tt!==Dt||Pt!==Wt||Ht!==Jt)&&(s.stencilOp(Dt,Wt,Jt),tt=Dt,Pt=Wt,Ht=Jt)},setLocked:function(Dt){L=Dt},setClear:function(Dt){Mt!==Dt&&(s.clearStencil(Dt),Mt=Dt)},reset:function(){L=!1,Ct=null,V=null,ut=null,F=null,tt=null,Pt=null,Ht=null,Mt=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,y=null,x=null,A=null,E=null,w=new Kt(0,0,0),R=0,S=!1,v=null,C=null,z=null,k=null,W=null,$=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,it=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Z)[1]),O=it>=1):Z.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),O=it>=2);let _t=null,et={},ht=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),H=new me().fromArray(ht),U=new me().fromArray(Rt);function B(L,Ct,V,ut){let F=new Uint8Array(4),tt=s.createTexture();s.bindTexture(L,tt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<V;Pt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(Ct,0,s.RGBA,1,1,ut,0,s.RGBA,s.UNSIGNED_BYTE,F):s.texImage2D(Ct+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,F);return tt}let Y={};Y[s.TEXTURE_2D]=B(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=B(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=B(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=B(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),D(s.DEPTH_TEST),o.setFunc(er),wt(!1),q(hu),D(s.CULL_FACE),N(Di);function D(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function st(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function mt(L,Ct){return u[L]!==Ct?(s.bindFramebuffer(L,Ct),u[L]=Ct,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Ct),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Tt(L,Ct){let V=f,ut=!1;if(L){V=d.get(Ct),V===void 0&&(V=[],d.set(Ct,V));let F=L.textures;if(V.length!==F.length||V[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,Pt=F.length;tt<Pt;tt++)V[tt]=s.COLOR_ATTACHMENT0+tt;V.length=F.length,ut=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,ut=!0);ut&&s.drawBuffers(V)}function It(L){return g!==L?(s.useProgram(L),g=L,!0):!1}let G={[ss]:s.FUNC_ADD,[wp]:s.FUNC_SUBTRACT,[Tp]:s.FUNC_REVERSE_SUBTRACT};G[Ap]=s.MIN,G[Rp]=s.MAX;let gt={[Cp]:s.ZERO,[Pp]:s.ONE,[Ip]:s.SRC_COLOR,[Cc]:s.SRC_ALPHA,[Fp]:s.SRC_ALPHA_SATURATE,[Np]:s.DST_COLOR,[Lp]:s.DST_ALPHA,[Dp]:s.ONE_MINUS_SRC_COLOR,[Pc]:s.ONE_MINUS_SRC_ALPHA,[Op]:s.ONE_MINUS_DST_COLOR,[Up]:s.ONE_MINUS_DST_ALPHA,[Bp]:s.CONSTANT_COLOR,[zp]:s.ONE_MINUS_CONSTANT_COLOR,[kp]:s.CONSTANT_ALPHA,[Hp]:s.ONE_MINUS_CONSTANT_ALPHA};function N(L,Ct,V,ut,F,tt,Pt,Ht,Mt,Dt){if(L===Di){_===!0&&(st(s.BLEND),_=!1);return}if(_===!1&&(D(s.BLEND),_=!0),L!==Ep){if(L!==m||Dt!==S){if((p!==ss||x!==ss)&&(s.blendEquation(s.FUNC_ADD),p=ss,x=ss),Dt)switch(L){case Ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case uu:s.blendFunc(s.ONE,s.ONE);break;case du:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case uu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case du:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,y=null,A=null,E=null,w.set(0,0,0),R=0,m=L,S=Dt}return}F=F||Ct,tt=tt||V,Pt=Pt||ut,(Ct!==p||F!==x)&&(s.blendEquationSeparate(G[Ct],G[F]),p=Ct,x=F),(V!==M||ut!==y||tt!==A||Pt!==E)&&(s.blendFuncSeparate(gt[V],gt[ut],gt[tt],gt[Pt]),M=V,y=ut,A=tt,E=Pt),(Ht.equals(w)===!1||Mt!==R)&&(s.blendColor(Ht.r,Ht.g,Ht.b,Mt),w.copy(Ht),R=Mt),m=L,S=!1}function Ut(L,Ct){L.side===kn?st(s.CULL_FACE):D(s.CULL_FACE);let V=L.side===tn;Ct&&(V=!V),wt(V),L.blending===Ks&&L.transparent===!1?N(Di):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let ut=L.stencilWrite;a.setTest(ut),ut&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),St(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?D(s.SAMPLE_ALPHA_TO_COVERAGE):st(s.SAMPLE_ALPHA_TO_COVERAGE)}function wt(L){v!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),v=L)}function q(L){L!==Mp?(D(s.CULL_FACE),L!==C&&(L===hu?s.cullFace(s.BACK):L===Sp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):st(s.CULL_FACE),C=L}function j(L){L!==z&&(O&&s.lineWidth(L),z=L)}function St(L,Ct,V){L?(D(s.POLYGON_OFFSET_FILL),(k!==Ct||W!==V)&&(s.polygonOffset(Ct,V),k=Ct,W=V)):st(s.POLYGON_OFFSET_FILL)}function rt(L){L?D(s.SCISSOR_TEST):st(s.SCISSOR_TEST)}function T(L){L===void 0&&(L=s.TEXTURE0+$-1),_t!==L&&(s.activeTexture(L),_t=L)}function b(L,Ct,V){V===void 0&&(_t===null?V=s.TEXTURE0+$-1:V=_t);let ut=et[V];ut===void 0&&(ut={type:void 0,texture:void 0},et[V]=ut),(ut.type!==L||ut.texture!==Ct)&&(_t!==V&&(s.activeTexture(V),_t=V),s.bindTexture(L,Ct||Y[L]),ut.type=L,ut.texture=Ct)}function X(){let L=et[_t];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function pt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function zt(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(L){H.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),H.copy(L))}function ct(L){U.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),U.copy(L))}function Nt(L,Ct){let V=l.get(Ct);V===void 0&&(V=new WeakMap,l.set(Ct,V));let ut=V.get(L);ut===void 0&&(ut=s.getUniformBlockIndex(Ct,L.name),V.set(L,ut))}function nt(L,Ct){let ut=l.get(Ct).get(L);c.get(Ct)!==ut&&(s.uniformBlockBinding(Ct,ut,L.__bindingPointIndex),c.set(Ct,ut))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},_t=null,et={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,y=null,x=null,A=null,E=null,w=new Kt(0,0,0),R=0,S=!1,v=null,C=null,z=null,k=null,W=null,H.set(0,0,s.canvas.width,s.canvas.height),U.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:D,disable:st,bindFramebuffer:mt,drawBuffers:Tt,useProgram:It,setBlending:N,setMaterial:Ut,setFlipSided:wt,setCullFace:q,setLineWidth:j,setPolygonOffset:St,setScissorTest:rt,activeTexture:T,bindTexture:b,unbindTexture:X,compressedTexImage2D:pt,compressedTexImage3D:At,texImage2D:ft,texImage3D:Ot,updateUBOMapping:Nt,uniformBlockBinding:nt,texStorage2D:zt,texStorage3D:Q,texSubImage2D:at,texSubImage3D:vt,compressedTexSubImage2D:xt,compressedTexSubImage3D:bt,scissor:ot,viewport:ct,reset:Et}}function hd(s,t,e,n){let i=uy(n);switch(e){case Td:return s*t;case Rd:return s*t;case Cd:return s*t*2;case eh:return s*t/i.components*i.byteLength;case nh:return s*t/i.components*i.byteLength;case Pd:return s*t*2/i.components*i.byteLength;case ih:return s*t*2/i.components*i.byteLength;case Ad:return s*t*3/i.components*i.byteLength;case Hn:return s*t*4/i.components*i.byteLength;case sh:return s*t*4/i.components*i.byteLength;case Yo:case Zo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $o:case Jo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vc:case Wc:return Math.max(s,16)*Math.max(t,8)/4;case Hc:case Gc:return Math.max(s,8)*Math.max(t,8)/2;case Xc:case qc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $c:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Jc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case jc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case tl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case el:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case nl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case il:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case sl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case rl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ol:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case al:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ko:case cl:case ll:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Id:case hl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ul:case dl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uy(s){switch(s){case fi:case bd:return{byteLength:1,components:1};case qr:case Ed:case eo:return{byteLength:2,components:1};case jl:case th:return{byteLength:2,components:4};case ls:case Ql:case $n:return{byteLength:4,components:1};case wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function dy(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Bt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,b){return f?new OffscreenCanvas(T,b):ta("canvas")}function _(T,b,X){let pt=1,At=rt(T);if((At.width>X||At.height>X)&&(pt=X/Math.max(At.width,At.height)),pt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let at=Math.floor(pt*At.width),vt=Math.floor(pt*At.height);u===void 0&&(u=g(at,vt));let xt=b?g(at,vt):u;return xt.width=at,xt.height=vt,xt.getContext("2d").drawImage(T,0,0,at,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+at+"x"+vt+")."),xt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(T,b,X,pt,At=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let at=b;if(b===s.RED&&(X===s.FLOAT&&(at=s.R32F),X===s.HALF_FLOAT&&(at=s.R16F),X===s.UNSIGNED_BYTE&&(at=s.R8)),b===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(at=s.R8UI),X===s.UNSIGNED_SHORT&&(at=s.R16UI),X===s.UNSIGNED_INT&&(at=s.R32UI),X===s.BYTE&&(at=s.R8I),X===s.SHORT&&(at=s.R16I),X===s.INT&&(at=s.R32I)),b===s.RG&&(X===s.FLOAT&&(at=s.RG32F),X===s.HALF_FLOAT&&(at=s.RG16F),X===s.UNSIGNED_BYTE&&(at=s.RG8)),b===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(at=s.RG8UI),X===s.UNSIGNED_SHORT&&(at=s.RG16UI),X===s.UNSIGNED_INT&&(at=s.RG32UI),X===s.BYTE&&(at=s.RG8I),X===s.SHORT&&(at=s.RG16I),X===s.INT&&(at=s.RG32I)),b===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(at=s.RGB8UI),X===s.UNSIGNED_SHORT&&(at=s.RGB16UI),X===s.UNSIGNED_INT&&(at=s.RGB32UI),X===s.BYTE&&(at=s.RGB8I),X===s.SHORT&&(at=s.RGB16I),X===s.INT&&(at=s.RGB32I)),b===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(at=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(at=s.RGBA16UI),X===s.UNSIGNED_INT&&(at=s.RGBA32UI),X===s.BYTE&&(at=s.RGBA8I),X===s.SHORT&&(at=s.RGBA16I),X===s.INT&&(at=s.RGBA32I)),b===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(at=s.RGB9_E5),b===s.RGBA){let vt=At?Sa:se.getTransfer(pt);X===s.FLOAT&&(at=s.RGBA32F),X===s.HALF_FLOAT&&(at=s.RGBA16F),X===s.UNSIGNED_BYTE&&(at=vt===pe?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(at=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(at=s.RGB5_A1)}return(at===s.R16F||at===s.R32F||at===s.RG16F||at===s.RG32F||at===s.RGBA16F||at===s.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function x(T,b){let X;return T?b===null||b===ls||b===sr?X=s.DEPTH24_STENCIL8:b===$n?X=s.DEPTH32F_STENCIL8:b===qr&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ls||b===sr?X=s.DEPTH_COMPONENT24:b===$n?X=s.DEPTH_COMPONENT32F:b===qr&&(X=s.DEPTH_COMPONENT16),X}function A(T,b){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Sn&&T.minFilter!==Zn?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function E(T){let b=T.target;b.removeEventListener("dispose",E),R(b),b.isVideoTexture&&h.delete(b)}function w(T){let b=T.target;b.removeEventListener("dispose",w),v(b)}function R(T){let b=n.get(T);if(b.__webglInit===void 0)return;let X=T.source,pt=d.get(X);if(pt){let At=pt[b.__cacheKey];At.usedTimes--,At.usedTimes===0&&S(T),Object.keys(pt).length===0&&d.delete(X)}n.remove(T)}function S(T){let b=n.get(T);s.deleteTexture(b.__webglTexture);let X=T.source,pt=d.get(X);delete pt[b.__cacheKey],o.memory.textures--}function v(T){let b=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(b.__webglFramebuffer[pt]))for(let At=0;At<b.__webglFramebuffer[pt].length;At++)s.deleteFramebuffer(b.__webglFramebuffer[pt][At]);else s.deleteFramebuffer(b.__webglFramebuffer[pt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[pt])}else{if(Array.isArray(b.__webglFramebuffer))for(let pt=0;pt<b.__webglFramebuffer.length;pt++)s.deleteFramebuffer(b.__webglFramebuffer[pt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pt=0;pt<b.__webglColorRenderbuffer.length;pt++)b.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[pt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let X=T.textures;for(let pt=0,At=X.length;pt<At;pt++){let at=n.get(X[pt]);at.__webglTexture&&(s.deleteTexture(at.__webglTexture),o.memory.textures--),n.remove(X[pt])}n.remove(T)}let C=0;function z(){C=0}function k(){let T=C;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),C+=1,T}function W(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function $(T,b){let X=n.get(T);if(T.isVideoTexture&&j(T),T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){let pt=T.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(X,T,b);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+b)}function O(T,b){let X=n.get(T);if(T.version>0&&X.__version!==T.version){U(X,T,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+b)}function it(T,b){let X=n.get(T);if(T.version>0&&X.__version!==T.version){U(X,T,b);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+b)}function Z(T,b){let X=n.get(T);if(T.version>0&&X.__version!==T.version){B(X,T,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+b)}let _t={[zc]:s.REPEAT,[as]:s.CLAMP_TO_EDGE,[kc]:s.MIRRORED_REPEAT},et={[Sn]:s.NEAREST,[Jp]:s.NEAREST_MIPMAP_NEAREST,[Mo]:s.NEAREST_MIPMAP_LINEAR,[Zn]:s.LINEAR,[Ja]:s.LINEAR_MIPMAP_NEAREST,[cs]:s.LINEAR_MIPMAP_LINEAR},ht={[tm]:s.NEVER,[om]:s.ALWAYS,[em]:s.LESS,[Ld]:s.LEQUAL,[nm]:s.EQUAL,[rm]:s.GEQUAL,[im]:s.GREATER,[sm]:s.NOTEQUAL};function Rt(T,b){if(b.type===$n&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Zn||b.magFilter===Ja||b.magFilter===Mo||b.magFilter===cs||b.minFilter===Zn||b.minFilter===Ja||b.minFilter===Mo||b.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,_t[b.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,_t[b.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,_t[b.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,et[b.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,et[b.minFilter]),b.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ht[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Sn||b.minFilter!==Mo&&b.minFilter!==cs||b.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function H(T,b){let X=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",E));let pt=b.source,At=d.get(pt);At===void 0&&(At={},d.set(pt,At));let at=W(b);if(at!==T.__cacheKey){At[at]===void 0&&(At[at]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),At[at].usedTimes++;let vt=At[T.__cacheKey];vt!==void 0&&(At[T.__cacheKey].usedTimes--,vt.usedTimes===0&&S(b)),T.__cacheKey=at,T.__webglTexture=At[at].texture}return X}function U(T,b,X){let pt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=s.TEXTURE_3D);let At=H(T,b),at=b.source;e.bindTexture(pt,T.__webglTexture,s.TEXTURE0+X);let vt=n.get(at);if(at.version!==vt.__version||At===!0){e.activeTexture(s.TEXTURE0+X);let xt=se.getPrimaries(se.workingColorSpace),bt=b.colorSpace===Ii?null:se.getPrimaries(b.colorSpace),zt=b.colorSpace===Ii||xt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let Q=_(b.image,!1,i.maxTextureSize);Q=St(b,Q);let ft=r.convert(b.format,b.colorSpace),Ot=r.convert(b.type),ot=y(b.internalFormat,ft,Ot,b.colorSpace,b.isVideoTexture);Rt(pt,b);let ct,Nt=b.mipmaps,nt=b.isVideoTexture!==!0,Et=vt.__version===void 0||At===!0,L=at.dataReady,Ct=A(b,Q);if(b.isDepthTexture)ot=x(b.format===rr,b.type),Et&&(nt?e.texStorage2D(s.TEXTURE_2D,1,ot,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,ot,Q.width,Q.height,0,ft,Ot,null));else if(b.isDataTexture)if(Nt.length>0){nt&&Et&&e.texStorage2D(s.TEXTURE_2D,Ct,ot,Nt[0].width,Nt[0].height);for(let V=0,ut=Nt.length;V<ut;V++)ct=Nt[V],nt?L&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,ct.width,ct.height,ft,Ot,ct.data):e.texImage2D(s.TEXTURE_2D,V,ot,ct.width,ct.height,0,ft,Ot,ct.data);b.generateMipmaps=!1}else nt?(Et&&e.texStorage2D(s.TEXTURE_2D,Ct,ot,Q.width,Q.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,Ot,Q.data)):e.texImage2D(s.TEXTURE_2D,0,ot,Q.width,Q.height,0,ft,Ot,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){nt&&Et&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,ot,Nt[0].width,Nt[0].height,Q.depth);for(let V=0,ut=Nt.length;V<ut;V++)if(ct=Nt[V],b.format!==Hn)if(ft!==null)if(nt){if(L)if(b.layerUpdates.size>0){let F=hd(ct.width,ct.height,b.format,b.type);for(let tt of b.layerUpdates){let Pt=ct.data.subarray(tt*F/ct.data.BYTES_PER_ELEMENT,(tt+1)*F/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,tt,ct.width,ct.height,1,ft,Pt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,ct.width,ct.height,Q.depth,ft,ct.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,ot,ct.width,ct.height,Q.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,ct.width,ct.height,Q.depth,ft,Ot,ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,V,ot,ct.width,ct.height,Q.depth,0,ft,Ot,ct.data)}else{nt&&Et&&e.texStorage2D(s.TEXTURE_2D,Ct,ot,Nt[0].width,Nt[0].height);for(let V=0,ut=Nt.length;V<ut;V++)ct=Nt[V],b.format!==Hn?ft!==null?nt?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,ct.width,ct.height,ft,ct.data):e.compressedTexImage2D(s.TEXTURE_2D,V,ot,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?L&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,ct.width,ct.height,ft,Ot,ct.data):e.texImage2D(s.TEXTURE_2D,V,ot,ct.width,ct.height,0,ft,Ot,ct.data)}else if(b.isDataArrayTexture)if(nt){if(Et&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,ot,Q.width,Q.height,Q.depth),L)if(b.layerUpdates.size>0){let V=hd(Q.width,Q.height,b.format,b.type);for(let ut of b.layerUpdates){let F=Q.data.subarray(ut*V/Q.data.BYTES_PER_ELEMENT,(ut+1)*V/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,Q.width,Q.height,1,ft,Ot,F)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,Ot,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ot,Q.width,Q.height,Q.depth,0,ft,Ot,Q.data);else if(b.isData3DTexture)nt?(Et&&e.texStorage3D(s.TEXTURE_3D,Ct,ot,Q.width,Q.height,Q.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,Ot,Q.data)):e.texImage3D(s.TEXTURE_3D,0,ot,Q.width,Q.height,Q.depth,0,ft,Ot,Q.data);else if(b.isFramebufferTexture){if(Et)if(nt)e.texStorage2D(s.TEXTURE_2D,Ct,ot,Q.width,Q.height);else{let V=Q.width,ut=Q.height;for(let F=0;F<Ct;F++)e.texImage2D(s.TEXTURE_2D,F,ot,V,ut,0,ft,Ot,null),V>>=1,ut>>=1}}else if(Nt.length>0){if(nt&&Et){let V=rt(Nt[0]);e.texStorage2D(s.TEXTURE_2D,Ct,ot,V.width,V.height)}for(let V=0,ut=Nt.length;V<ut;V++)ct=Nt[V],nt?L&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,ft,Ot,ct):e.texImage2D(s.TEXTURE_2D,V,ot,ft,Ot,ct);b.generateMipmaps=!1}else if(nt){if(Et){let V=rt(Q);e.texStorage2D(s.TEXTURE_2D,Ct,ot,V.width,V.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,Ot,Q)}else e.texImage2D(s.TEXTURE_2D,0,ot,ft,Ot,Q);m(b)&&p(pt),vt.__version=at.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function B(T,b,X){if(b.image.length!==6)return;let pt=H(T,b),At=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+X);let at=n.get(At);if(At.version!==at.__version||pt===!0){e.activeTexture(s.TEXTURE0+X);let vt=se.getPrimaries(se.workingColorSpace),xt=b.colorSpace===Ii?null:se.getPrimaries(b.colorSpace),bt=b.colorSpace===Ii||vt===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let zt=b.isCompressedTexture||b.image[0].isCompressedTexture,Q=b.image[0]&&b.image[0].isDataTexture,ft=[];for(let ut=0;ut<6;ut++)!zt&&!Q?ft[ut]=_(b.image[ut],!0,i.maxCubemapSize):ft[ut]=Q?b.image[ut].image:b.image[ut],ft[ut]=St(b,ft[ut]);let Ot=ft[0],ot=r.convert(b.format,b.colorSpace),ct=r.convert(b.type),Nt=y(b.internalFormat,ot,ct,b.colorSpace),nt=b.isVideoTexture!==!0,Et=at.__version===void 0||pt===!0,L=At.dataReady,Ct=A(b,Ot);Rt(s.TEXTURE_CUBE_MAP,b);let V;if(zt){nt&&Et&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,Nt,Ot.width,Ot.height);for(let ut=0;ut<6;ut++){V=ft[ut].mipmaps;for(let F=0;F<V.length;F++){let tt=V[F];b.format!==Hn?ot!==null?nt?L&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,F,0,0,tt.width,tt.height,ot,tt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,F,Nt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,F,0,0,tt.width,tt.height,ot,ct,tt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,F,Nt,tt.width,tt.height,0,ot,ct,tt.data)}}}else{if(V=b.mipmaps,nt&&Et){V.length>0&&Ct++;let ut=rt(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,Nt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Q){nt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,ft[ut].width,ft[ut].height,ot,ct,ft[ut].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Nt,ft[ut].width,ft[ut].height,0,ot,ct,ft[ut].data);for(let F=0;F<V.length;F++){let Pt=V[F].image[ut].image;nt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,F+1,0,0,Pt.width,Pt.height,ot,ct,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,F+1,Nt,Pt.width,Pt.height,0,ot,ct,Pt.data)}}else{nt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,ot,ct,ft[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Nt,ot,ct,ft[ut]);for(let F=0;F<V.length;F++){let tt=V[F];nt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,F+1,0,0,ot,ct,tt.image[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,F+1,Nt,ot,ct,tt.image[ut])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),at.__version=At.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Y(T,b,X,pt,At,at){let vt=r.convert(X.format,X.colorSpace),xt=r.convert(X.type),bt=y(X.internalFormat,vt,xt,X.colorSpace),zt=n.get(b),Q=n.get(X);if(Q.__renderTarget=b,!zt.__hasExternalTextures){let ft=Math.max(1,b.width>>at),Ot=Math.max(1,b.height>>at);At===s.TEXTURE_3D||At===s.TEXTURE_2D_ARRAY?e.texImage3D(At,at,bt,ft,Ot,b.depth,0,vt,xt,null):e.texImage2D(At,at,bt,ft,Ot,0,vt,xt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),q(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,At,Q.__webglTexture,0,wt(b)):(At===s.TEXTURE_2D||At>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,At,Q.__webglTexture,at),e.bindFramebuffer(s.FRAMEBUFFER,null)}function D(T,b,X){if(s.bindRenderbuffer(s.RENDERBUFFER,T),b.depthBuffer){let pt=b.depthTexture,At=pt&&pt.isDepthTexture?pt.type:null,at=x(b.stencilBuffer,At),vt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=wt(b);q(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,at,b.width,b.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,at,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,at,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,T)}else{let pt=b.textures;for(let At=0;At<pt.length;At++){let at=pt[At],vt=r.convert(at.format,at.colorSpace),xt=r.convert(at.type),bt=y(at.internalFormat,vt,xt,at.colorSpace),zt=wt(b);X&&q(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,bt,b.width,b.height):q(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,zt,bt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,bt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function st(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let pt=n.get(b.depthTexture);pt.__renderTarget=b,(!pt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);let At=pt.__webglTexture,at=wt(b);if(b.depthTexture.format===Qs)q(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,At,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,At,0);else if(b.depthTexture.format===rr)q(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,At,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,At,0);else throw new Error("Unknown depthTexture format")}function mt(T){let b=n.get(T),X=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){let pt=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){let At=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",At)};pt.addEventListener("dispose",At),b.__depthDisposeCallback=At}b.__boundDepthTexture=pt}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");st(b.__webglFramebuffer,T)}else if(X){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=s.createRenderbuffer(),D(b.__webglDepthbuffer[pt],T,!1);else{let At=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,At,s.RENDERBUFFER,at)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),D(b.__webglDepthbuffer,T,!1);else{let pt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,At),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,At)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(T,b,X){let pt=n.get(T);b!==void 0&&Y(pt.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&mt(T)}function It(T){let b=T.texture,X=n.get(T),pt=n.get(b);T.addEventListener("dispose",w);let At=T.textures,at=T.isWebGLCubeRenderTarget===!0,vt=At.length>1;if(vt||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=b.version,o.memory.textures++),at){X.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[xt]=[];for(let bt=0;bt<b.mipmaps.length;bt++)X.__webglFramebuffer[xt][bt]=s.createFramebuffer()}else X.__webglFramebuffer[xt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let xt=0;xt<b.mipmaps.length;xt++)X.__webglFramebuffer[xt]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(vt)for(let xt=0,bt=At.length;xt<bt;xt++){let zt=n.get(At[xt]);zt.__webglTexture===void 0&&(zt.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&q(T)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let xt=0;xt<At.length;xt++){let bt=At[xt];X.__webglColorRenderbuffer[xt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[xt]);let zt=r.convert(bt.format,bt.colorSpace),Q=r.convert(bt.type),ft=y(bt.internalFormat,zt,Q,bt.colorSpace,T.isXRRenderTarget===!0),Ot=wt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,ft,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,X.__webglColorRenderbuffer[xt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),D(X.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){e.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,b);for(let xt=0;xt<6;xt++)if(b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)Y(X.__webglFramebuffer[xt][bt],T,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,bt);else Y(X.__webglFramebuffer[xt],T,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(b)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let xt=0,bt=At.length;xt<bt;xt++){let zt=At[xt],Q=n.get(zt);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),Rt(s.TEXTURE_2D,zt),Y(X.__webglFramebuffer,T,zt,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,0),m(zt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let xt=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(xt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,pt.__webglTexture),Rt(xt,b),b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)Y(X.__webglFramebuffer[bt],T,b,s.COLOR_ATTACHMENT0,xt,bt);else Y(X.__webglFramebuffer,T,b,s.COLOR_ATTACHMENT0,xt,0);m(b)&&p(xt),e.unbindTexture()}T.depthBuffer&&mt(T)}function G(T){let b=T.textures;for(let X=0,pt=b.length;X<pt;X++){let At=b[X];if(m(At)){let at=M(T),vt=n.get(At).__webglTexture;e.bindTexture(at,vt),p(at),e.unbindTexture()}}}let gt=[],N=[];function Ut(T){if(T.samples>0){if(q(T)===!1){let b=T.textures,X=T.width,pt=T.height,At=s.COLOR_BUFFER_BIT,at=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(T),xt=b.length>1;if(xt)for(let bt=0;bt<b.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let bt=0;bt<b.length;bt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(At|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(At|=s.STENCIL_BUFFER_BIT)),xt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[bt]);let zt=n.get(b[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,zt,0)}s.blitFramebuffer(0,0,X,pt,0,0,X,pt,At,s.NEAREST),c===!0&&(gt.length=0,N.length=0,gt.push(s.COLOR_ATTACHMENT0+bt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(gt.push(at),N.push(at),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xt)for(let bt=0;bt<b.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,vt.__webglColorRenderbuffer[bt]);let zt=n.get(b[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let b=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function wt(T){return Math.min(i.maxSamples,T.samples)}function q(T){let b=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function j(T){let b=o.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}function St(T,b){let X=T.colorSpace,pt=T.format,At=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||X!==pr&&X!==Ii&&(se.getTransfer(X)===pe?(pt!==Hn||At!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function rt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=O,this.setTexture3D=it,this.setTextureCube=Z,this.rebindTextures=Tt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=q}function fy(s,t){function e(n,i=Ii){let r,o=se.getTransfer(i);if(n===fi)return s.UNSIGNED_BYTE;if(n===jl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===th)return s.UNSIGNED_SHORT_5_5_5_1;if(n===wd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===bd)return s.BYTE;if(n===Ed)return s.SHORT;if(n===qr)return s.UNSIGNED_SHORT;if(n===Ql)return s.INT;if(n===ls)return s.UNSIGNED_INT;if(n===$n)return s.FLOAT;if(n===eo)return s.HALF_FLOAT;if(n===Td)return s.ALPHA;if(n===Ad)return s.RGB;if(n===Hn)return s.RGBA;if(n===Rd)return s.LUMINANCE;if(n===Cd)return s.LUMINANCE_ALPHA;if(n===Qs)return s.DEPTH_COMPONENT;if(n===rr)return s.DEPTH_STENCIL;if(n===eh)return s.RED;if(n===nh)return s.RED_INTEGER;if(n===Pd)return s.RG;if(n===ih)return s.RG_INTEGER;if(n===sh)return s.RGBA_INTEGER;if(n===Yo||n===Zo||n===$o||n===Jo)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hc||n===Vc||n===Gc||n===Wc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xc||n===qc||n===Yc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xc||n===qc)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zc||n===$c||n===Jc||n===Kc||n===Qc||n===jc||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$c)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===el)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ol)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===al)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===cl||n===ll)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ko)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Id||n===hl||n===ul||n===dl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Rl=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},$t=class extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}},py={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(py)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},my=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Cl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new un,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Jn({vertexShader:my,fragmentShader:gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new Ce(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pl=class extends Oi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,_=new Cl,m=e.getContextAttributes(),p=null,M=null,y=[],x=[],A=new Bt,E=null,w=new je;w.viewport=new me;let R=new je;R.viewport=new me;let S=[w,R],v=new Rl,C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let B=y[U];return B===void 0&&(B=new Vr,y[U]=B),B.getTargetRaySpace()},this.getControllerGrip=function(U){let B=y[U];return B===void 0&&(B=new Vr,y[U]=B),B.getGripSpace()},this.getHand=function(U){let B=y[U];return B===void 0&&(B=new Vr,y[U]=B),B.getHandSpace()};function k(U){let B=x.indexOf(U.inputSource);if(B===-1)return;let Y=y[B];Y!==void 0&&(Y.update(U.inputSource,U.frame,l||o),Y.dispatchEvent({type:U.type,data:U.inputSource}))}function W(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",$);for(let U=0;U<y.length;U++){let B=x[U];B!==null&&(x[U]=null,y[U].disconnect(B))}C=null,z=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,H.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",W),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){let B={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,B),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new pi(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let B=null,Y=null,D=null;m.depth&&(D=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,B=m.stencil?rr:Qs,Y=m.stencil?sr:ls);let st={colorFormat:e.RGBA8,depthFormat:D,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(st),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new pi(d.textureWidth,d.textureHeight,{format:Hn,type:fi,depthTexture:new ca(d.textureWidth,d.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(U){for(let B=0;B<U.removed.length;B++){let Y=U.removed[B],D=x.indexOf(Y);D>=0&&(x[D]=null,y[D].disconnect(Y))}for(let B=0;B<U.added.length;B++){let Y=U.added[B],D=x.indexOf(Y);if(D===-1){for(let mt=0;mt<y.length;mt++)if(mt>=x.length){x.push(Y),D=mt;break}else if(x[mt]===null){x[mt]=Y,D=mt;break}if(D===-1)break}let st=y[D];st&&st.connect(Y)}}let O=new I,it=new I;function Z(U,B,Y){O.setFromMatrixPosition(B.matrixWorld),it.setFromMatrixPosition(Y.matrixWorld);let D=O.distanceTo(it),st=B.projectionMatrix.elements,mt=Y.projectionMatrix.elements,Tt=st[14]/(st[10]-1),It=st[14]/(st[10]+1),G=(st[9]+1)/st[5],gt=(st[9]-1)/st[5],N=(st[8]-1)/st[0],Ut=(mt[8]+1)/mt[0],wt=Tt*N,q=Tt*Ut,j=D/(-N+Ut),St=j*-N;if(B.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(St),U.translateZ(j),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),st[10]===-1)U.projectionMatrix.copy(B.projectionMatrix),U.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{let rt=Tt+j,T=It+j,b=wt-St,X=q+(D-St),pt=G*It/T*rt,At=gt*It/T*rt;U.projectionMatrix.makePerspective(b,X,pt,At,rt,T),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function _t(U,B){B===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(B.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;let B=U.near,Y=U.far;_.texture!==null&&(_.depthNear>0&&(B=_.depthNear),_.depthFar>0&&(Y=_.depthFar)),v.near=R.near=w.near=B,v.far=R.far=w.far=Y,(C!==v.near||z!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,z=v.far),w.layers.mask=U.layers.mask|2,R.layers.mask=U.layers.mask|4,v.layers.mask=w.layers.mask|R.layers.mask;let D=U.parent,st=v.cameras;_t(v,D);for(let mt=0;mt<st.length;mt++)_t(st[mt],D);st.length===2?Z(v,w,R):v.projectionMatrix.copy(w.projectionMatrix),et(U,v,D)};function et(U,B,Y){Y===null?U.matrix.copy(B.matrixWorld):(U.matrix.copy(Y.matrixWorld),U.matrix.invert(),U.matrix.multiply(B.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(B.projectionMatrix),U.projectionMatrixInverse.copy(B.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Yr*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(U){c=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ht=null;function Rt(U,B){if(h=B.getViewerPose(l||o),g=B,h!==null){let Y=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let D=!1;Y.length!==v.cameras.length&&(v.cameras.length=0,D=!0);for(let mt=0;mt<Y.length;mt++){let Tt=Y[mt],It=null;if(f!==null)It=f.getViewport(Tt);else{let gt=u.getViewSubImage(d,Tt);It=gt.viewport,mt===0&&(t.setRenderTargetTextures(M,gt.colorTexture,d.ignoreDepthValues?void 0:gt.depthStencilTexture),t.setRenderTarget(M))}let G=S[mt];G===void 0&&(G=new je,G.layers.enable(mt),G.viewport=new me,S[mt]=G),G.matrix.fromArray(Tt.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(Tt.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(It.x,It.y,It.width,It.height),mt===0&&(v.matrix.copy(G.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),D===!0&&v.cameras.push(G)}let st=i.enabledFeatures;if(st&&st.includes("depth-sensing")){let mt=u.getDepthInformation(Y[0]);mt&&mt.isValid&&mt.texture&&_.init(t,mt,i.renderState)}}for(let Y=0;Y<y.length;Y++){let D=x[Y],st=y[Y];D!==null&&st!==void 0&&st.update(D,B,l||o)}ht&&ht(U,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),g=null}let H=new Fd;H.setAnimationLoop(Rt),this.setAnimationLoop=function(U){ht=U},this.dispose=function(){}}},ns=new dn,_y=new le;function xy(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Od(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),y=M.envMap,x=M.envMapRotation;y&&(m.envMap.value=y,ns.copy(x),ns.x*=-1,ns.y*=-1,ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(_y.makeRotationFromEuler(ns)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yy(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){let x=y.program;n.uniformBlockBinding(M,x)}function l(M,y){let x=i[M.id];x===void 0&&(g(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",m));let A=y.program;n.updateUBOMapping(M,A);let E=t.render.frame;r[M.id]!==E&&(d(M),r[M.id]=E)}function h(M){let y=u();M.__bindingPointIndex=y;let x=s.createBuffer(),A=M.__size,E=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,A,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let y=i[M.id],x=M.uniforms,A=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let E=0,w=x.length;E<w;E++){let R=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,v=R.length;S<v;S++){let C=R[S];if(f(C,E,S,A)===!0){let z=C.__offset,k=Array.isArray(C.value)?C.value:[C.value],W=0;for(let $=0;$<k.length;$++){let O=k[$],it=_(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,z+W,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):(O.toArray(C.__data,W),W+=it.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,y,x,A){let E=M.value,w=y+"_"+x;if(A[w]===void 0)return typeof E=="number"||typeof E=="boolean"?A[w]=E:A[w]=E.clone(),!0;{let R=A[w];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return A[w]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(M){let y=M.uniforms,x=0,A=16;for(let w=0,R=y.length;w<R;w++){let S=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,C=S.length;v<C;v++){let z=S[v],k=Array.isArray(z.value)?z.value:[z.value];for(let W=0,$=k.length;W<$;W++){let O=k[W],it=_(O),Z=x%A,_t=Z%it.boundary,et=Z+_t;x+=_t,et!==0&&A-et<it.storage&&(x+=A-et),z.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=it.storage}}}let E=x%A;return E>0&&(x+=A-E),M.__size=x,M.__cache={},this}function _(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){let y=M.target;y.removeEventListener("dispose",m);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var lr=class{constructor(t={}){let{canvas:e=bm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this.toneMapping=Li,this.toneMappingExposure=1;let x=this,A=!1,E=0,w=0,R=null,S=-1,v=null,C=new me,z=new me,k=null,W=new Kt(0),$=0,O=e.width,it=e.height,Z=1,_t=null,et=null,ht=new me(0,0,O,it),Rt=new me(0,0,O,it),H=!1,U=new Zr,B=!1,Y=!1,D=new le,st=new le,mt=new I,Tt=new me,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},G=!1;function gt(){return R===null?Z:1}let N=n;function Ut(P,J){return e.getContext(P,J)}try{let P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kl}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",tt,!1),N===null){let J="webgl2";if(N=Ut(J,P),N===null)throw Ut(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let wt,q,j,St,rt,T,b,X,pt,At,at,vt,xt,bt,zt,Q,ft,Ot,ot,ct,Nt,nt,Et,L;function Ct(){wt=new N_(N),wt.init(),nt=new fy(N,wt),q=new C_(N,wt,t,nt),j=new hy(N,wt),q.reverseDepthBuffer&&d&&j.buffers.depth.setReversed(!0),St=new B_(N),rt=new Kx,T=new dy(N,wt,j,rt,q,nt,St),b=new I_(x),X=new U_(x),pt=new Xm(N),Et=new A_(N,pt),At=new O_(N,pt,St,Et),at=new k_(N,At,pt,St),ot=new z_(N,q,T),Q=new P_(rt),vt=new Jx(x,b,X,wt,q,Et,Q),xt=new xy(x,rt),bt=new jx,zt=new ry(wt),Ot=new T_(x,b,X,j,at,f,c),ft=new cy(x,at,q),L=new yy(N,St,q,j),ct=new R_(N,wt,St),Nt=new F_(N,wt,St),St.programs=vt.programs,x.capabilities=q,x.extensions=wt,x.properties=rt,x.renderLists=bt,x.shadowMap=ft,x.state=j,x.info=St}Ct();let V=new Pl(x,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let P=wt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=wt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(P){P!==void 0&&(Z=P,this.setSize(O,it,!1))},this.getSize=function(P){return P.set(O,it)},this.setSize=function(P,J,lt=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,it=J,e.width=Math.floor(P*Z),e.height=Math.floor(J*Z),lt===!0&&(e.style.width=P+"px",e.style.height=J+"px"),this.setViewport(0,0,P,J)},this.getDrawingBufferSize=function(P){return P.set(O*Z,it*Z).floor()},this.setDrawingBufferSize=function(P,J,lt){O=P,it=J,Z=lt,e.width=Math.floor(P*lt),e.height=Math.floor(J*lt),this.setViewport(0,0,P,J)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(ht)},this.setViewport=function(P,J,lt,dt){P.isVector4?ht.set(P.x,P.y,P.z,P.w):ht.set(P,J,lt,dt),j.viewport(C.copy(ht).multiplyScalar(Z).round())},this.getScissor=function(P){return P.copy(Rt)},this.setScissor=function(P,J,lt,dt){P.isVector4?Rt.set(P.x,P.y,P.z,P.w):Rt.set(P,J,lt,dt),j.scissor(z.copy(Rt).multiplyScalar(Z).round())},this.getScissorTest=function(){return H},this.setScissorTest=function(P){j.setScissorTest(H=P)},this.setOpaqueSort=function(P){_t=P},this.setTransparentSort=function(P){et=P},this.getClearColor=function(P){return P.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(P=!0,J=!0,lt=!0){let dt=0;if(P){let K=!1;if(R!==null){let Ft=R.texture.format;K=Ft===sh||Ft===ih||Ft===nh}if(K){let Ft=R.texture.type,Gt=Ft===fi||Ft===ls||Ft===qr||Ft===sr||Ft===jl||Ft===th,Xt=Ot.getClearColor(),qt=Ot.getClearAlpha(),Qt=Xt.r,ee=Xt.g,Yt=Xt.b;Gt?(g[0]=Qt,g[1]=ee,g[2]=Yt,g[3]=qt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Qt,_[1]=ee,_[2]=Yt,_[3]=qt,N.clearBufferiv(N.COLOR,0,_))}else dt|=N.COLOR_BUFFER_BIT}J&&(dt|=N.DEPTH_BUFFER_BIT),lt&&(dt|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),bt.dispose(),zt.dispose(),rt.dispose(),b.dispose(),X.dispose(),at.dispose(),Et.dispose(),L.dispose(),vt.dispose(),V.dispose(),V.removeEventListener("sessionstart",ae),V.removeEventListener("sessionend",te),yt.stop()};function ut(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let P=St.autoReset,J=ft.enabled,lt=ft.autoUpdate,dt=ft.needsUpdate,K=ft.type;Ct(),St.autoReset=P,ft.enabled=J,ft.autoUpdate=lt,ft.needsUpdate=dt,ft.type=K}function tt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Pt(P){let J=P.target;J.removeEventListener("dispose",Pt),Ht(J)}function Ht(P){Mt(P),rt.remove(P)}function Mt(P){let J=rt.get(P).programs;J!==void 0&&(J.forEach(function(lt){vt.releaseProgram(lt)}),P.isShaderMaterial&&vt.releaseShaderCache(P))}this.renderBufferDirect=function(P,J,lt,dt,K,Ft){J===null&&(J=It);let Gt=K.isMesh&&K.matrixWorld.determinant()<0,Xt=xp(P,J,lt,dt,K);j.setMaterial(dt,Gt);let qt=lt.index,Qt=1;if(dt.wireframe===!0){if(qt=At.getWireframeAttribute(lt),qt===void 0)return;Qt=2}let ee=lt.drawRange,Yt=lt.attributes.position,oe=ee.start*Qt,ve=(ee.start+ee.count)*Qt;Ft!==null&&(oe=Math.max(oe,Ft.start*Qt),ve=Math.min(ve,(Ft.start+Ft.count)*Qt)),qt!==null?(oe=Math.max(oe,0),ve=Math.min(ve,qt.count)):Yt!=null&&(oe=Math.max(oe,0),ve=Math.min(ve,Yt.count));let Se=ve-oe;if(Se<0||Se===1/0)return;Et.setup(K,dt,Xt,lt,qt);let hn,he=ct;if(qt!==null&&(hn=pt.get(qt),he=Nt,he.setIndex(hn)),K.isMesh)dt.wireframe===!0?(j.setLineWidth(dt.wireframeLinewidth*gt()),he.setMode(N.LINES)):he.setMode(N.TRIANGLES);else if(K.isLine){let Zt=dt.linewidth;Zt===void 0&&(Zt=1),j.setLineWidth(Zt*gt()),K.isLineSegments?he.setMode(N.LINES):K.isLineLoop?he.setMode(N.LINE_LOOP):he.setMode(N.LINE_STRIP)}else K.isPoints?he.setMode(N.POINTS):K.isSprite&&he.setMode(N.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)he.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(wt.get("WEBGL_multi_draw"))he.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Zt=K._multiDrawStarts,ii=K._multiDrawCounts,ue=K._multiDrawCount,On=qt?pt.get(qt).bytesPerElement:1,Ds=rt.get(dt).currentProgram.getUniforms();for(let yn=0;yn<ue;yn++)Ds.setValue(N,"_gl_DrawID",yn),he.render(Zt[yn]/On,ii[yn])}else if(K.isInstancedMesh)he.renderInstances(oe,Se,K.count);else if(lt.isInstancedBufferGeometry){let Zt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,ii=Math.min(lt.instanceCount,Zt);he.renderInstances(oe,Se,ii)}else he.render(oe,Se)};function Dt(P,J,lt){P.transparent===!0&&P.side===kn&&P.forceSinglePass===!1?(P.side=tn,P.needsUpdate=!0,Si(P,J,lt),P.side=Ni,P.needsUpdate=!0,Si(P,J,lt),P.side=kn):Si(P,J,lt)}this.compile=function(P,J,lt=null){lt===null&&(lt=P),p=zt.get(lt),p.init(J),y.push(p),lt.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),P!==lt&&P.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights();let dt=new Set;return P.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ft=K.material;if(Ft)if(Array.isArray(Ft))for(let Gt=0;Gt<Ft.length;Gt++){let Xt=Ft[Gt];Dt(Xt,lt,K),dt.add(Xt)}else Dt(Ft,lt,K),dt.add(Ft)}),y.pop(),p=null,dt},this.compileAsync=function(P,J,lt=null){let dt=this.compile(P,J,lt);return new Promise(K=>{function Ft(){if(dt.forEach(function(Gt){rt.get(Gt).currentProgram.isReady()&&dt.delete(Gt)}),dt.size===0){K(P);return}setTimeout(Ft,10)}wt.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Wt=null;function Jt(P){Wt&&Wt(P)}function ae(){yt.stop()}function te(){yt.start()}let yt=new Fd;yt.setAnimationLoop(Jt),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(P){Wt=P,V.setAnimationLoop(P),P===null?yt.stop():yt.start()},V.addEventListener("sessionstart",ae),V.addEventListener("sessionend",te),this.render=function(P,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(J),J=V.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,J,R),p=zt.get(P,y.length),p.init(J),y.push(p),st.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),U.setFromProjectionMatrix(st),Y=this.localClippingEnabled,B=Q.init(this.clippingPlanes,Y),m=bt.get(P,M.length),m.init(),M.push(m),V.enabled===!0&&V.isPresenting===!0){let Ft=x.xr.getDepthSensingMesh();Ft!==null&&Lt(Ft,J,-1/0,x.sortObjects)}Lt(P,J,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(_t,et),G=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,G&&Ot.addToRenderList(m,P),this.info.render.frame++,B===!0&&Q.beginShadows();let lt=p.state.shadowsArray;ft.render(lt,P,J),B===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let dt=m.opaque,K=m.transmissive;if(p.setupLights(),J.isArrayCamera){let Ft=J.cameras;if(K.length>0)for(let Gt=0,Xt=Ft.length;Gt<Xt;Gt++){let qt=Ft[Gt];ce(dt,K,P,qt)}G&&Ot.render(P);for(let Gt=0,Xt=Ft.length;Gt<Xt;Gt++){let qt=Ft[Gt];re(m,P,qt,qt.viewport)}}else K.length>0&&ce(dt,K,P,J),G&&Ot.render(P),re(m,P,J);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(x,P,J),Et.resetDefaultState(),S=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],B===!0&&Q.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Lt(P,J,lt,dt){if(P.visible===!1)return;if(P.layers.test(J.layers)){if(P.isGroup)lt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(J);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||U.intersectsSprite(P)){dt&&Tt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(st);let Gt=at.update(P),Xt=P.material;Xt.visible&&m.push(P,Gt,Xt,lt,Tt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||U.intersectsObject(P))){let Gt=at.update(P),Xt=P.material;if(dt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Tt.copy(P.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),Tt.copy(Gt.boundingSphere.center)),Tt.applyMatrix4(P.matrixWorld).applyMatrix4(st)),Array.isArray(Xt)){let qt=Gt.groups;for(let Qt=0,ee=qt.length;Qt<ee;Qt++){let Yt=qt[Qt],oe=Xt[Yt.materialIndex];oe&&oe.visible&&m.push(P,Gt,oe,lt,Tt.z,Yt)}}else Xt.visible&&m.push(P,Gt,Xt,lt,Tt.z,null)}}let Ft=P.children;for(let Gt=0,Xt=Ft.length;Gt<Xt;Gt++)Lt(Ft[Gt],J,lt,dt)}function re(P,J,lt,dt){let K=P.opaque,Ft=P.transmissive,Gt=P.transparent;p.setupLightsView(lt),B===!0&&Q.setGlobalState(x.clippingPlanes,lt),dt&&j.viewport(C.copy(dt)),K.length>0&&xn(K,J,lt),Ft.length>0&&xn(Ft,J,lt),Gt.length>0&&xn(Gt,J,lt),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function ce(P,J,lt,dt){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[dt.id]===void 0&&(p.state.transmissionRenderTarget[dt.id]=new pi(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float")?eo:fi,minFilter:cs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));let Ft=p.state.transmissionRenderTarget[dt.id],Gt=dt.viewport||C;Ft.setSize(Gt.z,Gt.w);let Xt=x.getRenderTarget();x.setRenderTarget(Ft),x.getClearColor(W),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),G&&Ot.render(lt);let qt=x.toneMapping;x.toneMapping=Li;let Qt=dt.viewport;if(dt.viewport!==void 0&&(dt.viewport=void 0),p.setupLightsView(dt),B===!0&&Q.setGlobalState(x.clippingPlanes,dt),xn(P,lt,dt),T.updateMultisampleRenderTarget(Ft),T.updateRenderTargetMipmap(Ft),wt.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Yt=0,oe=J.length;Yt<oe;Yt++){let ve=J[Yt],Se=ve.object,hn=ve.geometry,he=ve.material,Zt=ve.group;if(he.side===kn&&Se.layers.test(dt.layers)){let ii=he.side;he.side=tn,he.needsUpdate=!0,Tn(Se,lt,dt,hn,he,Zt),he.side=ii,he.needsUpdate=!0,ee=!0}}ee===!0&&(T.updateMultisampleRenderTarget(Ft),T.updateRenderTargetMipmap(Ft))}x.setRenderTarget(Xt),x.setClearColor(W,$),Qt!==void 0&&(dt.viewport=Qt),x.toneMapping=qt}function xn(P,J,lt){let dt=J.isScene===!0?J.overrideMaterial:null;for(let K=0,Ft=P.length;K<Ft;K++){let Gt=P[K],Xt=Gt.object,qt=Gt.geometry,Qt=dt===null?Gt.material:dt,ee=Gt.group;Xt.layers.test(lt.layers)&&Tn(Xt,J,lt,qt,Qt,ee)}}function Tn(P,J,lt,dt,K,Ft){P.onBeforeRender(x,J,lt,dt,K,Ft),P.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(x,J,lt,dt,P,Ft),K.transparent===!0&&K.side===kn&&K.forceSinglePass===!1?(K.side=tn,K.needsUpdate=!0,x.renderBufferDirect(lt,J,dt,K,P,Ft),K.side=Ni,K.needsUpdate=!0,x.renderBufferDirect(lt,J,dt,K,P,Ft),K.side=kn):x.renderBufferDirect(lt,J,dt,K,P,Ft),P.onAfterRender(x,J,lt,dt,K,Ft)}function Si(P,J,lt){J.isScene!==!0&&(J=It);let dt=rt.get(P),K=p.state.lights,Ft=p.state.shadowsArray,Gt=K.state.version,Xt=vt.getParameters(P,K.state,Ft,J,lt),qt=vt.getProgramCacheKey(Xt),Qt=dt.programs;dt.environment=P.isMeshStandardMaterial?J.environment:null,dt.fog=J.fog,dt.envMap=(P.isMeshStandardMaterial?X:b).get(P.envMap||dt.environment),dt.envMapRotation=dt.environment!==null&&P.envMap===null?J.environmentRotation:P.envMapRotation,Qt===void 0&&(P.addEventListener("dispose",Pt),Qt=new Map,dt.programs=Qt);let ee=Qt.get(qt);if(ee!==void 0){if(dt.currentProgram===ee&&dt.lightsStateVersion===Gt)return cu(P,Xt),ee}else Xt.uniforms=vt.getUniforms(P),P.onBeforeCompile(Xt,x),ee=vt.acquireProgram(Xt,qt),Qt.set(qt,ee),dt.uniforms=Xt.uniforms;let Yt=dt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Yt.clippingPlanes=Q.uniform),cu(P,Xt),dt.needsLights=vp(P),dt.lightsStateVersion=Gt,dt.needsLights&&(Yt.ambientLightColor.value=K.state.ambient,Yt.lightProbe.value=K.state.probe,Yt.directionalLights.value=K.state.directional,Yt.directionalLightShadows.value=K.state.directionalShadow,Yt.spotLights.value=K.state.spot,Yt.spotLightShadows.value=K.state.spotShadow,Yt.rectAreaLights.value=K.state.rectArea,Yt.ltc_1.value=K.state.rectAreaLTC1,Yt.ltc_2.value=K.state.rectAreaLTC2,Yt.pointLights.value=K.state.point,Yt.pointLightShadows.value=K.state.pointShadow,Yt.hemisphereLights.value=K.state.hemi,Yt.directionalShadowMap.value=K.state.directionalShadowMap,Yt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Yt.spotShadowMap.value=K.state.spotShadowMap,Yt.spotLightMatrix.value=K.state.spotLightMatrix,Yt.spotLightMap.value=K.state.spotLightMap,Yt.pointShadowMap.value=K.state.pointShadowMap,Yt.pointShadowMatrix.value=K.state.pointShadowMatrix),dt.currentProgram=ee,dt.uniformsList=null,ee}function Is(P){if(P.uniformsList===null){let J=P.currentProgram.getUniforms();P.uniformsList=tr.seqWithValue(J.seq,P.uniforms)}return P.uniformsList}function cu(P,J){let lt=rt.get(P);lt.outputColorSpace=J.outputColorSpace,lt.batching=J.batching,lt.batchingColor=J.batchingColor,lt.instancing=J.instancing,lt.instancingColor=J.instancingColor,lt.instancingMorph=J.instancingMorph,lt.skinning=J.skinning,lt.morphTargets=J.morphTargets,lt.morphNormals=J.morphNormals,lt.morphColors=J.morphColors,lt.morphTargetsCount=J.morphTargetsCount,lt.numClippingPlanes=J.numClippingPlanes,lt.numIntersection=J.numClipIntersection,lt.vertexAlphas=J.vertexAlphas,lt.vertexTangents=J.vertexTangents,lt.toneMapping=J.toneMapping}function xp(P,J,lt,dt,K){J.isScene!==!0&&(J=It),T.resetTextureUnits();let Ft=J.fog,Gt=dt.isMeshStandardMaterial?J.environment:null,Xt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:pr,qt=(dt.isMeshStandardMaterial?X:b).get(dt.envMap||Gt),Qt=dt.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ee=!!lt.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),Yt=!!lt.morphAttributes.position,oe=!!lt.morphAttributes.normal,ve=!!lt.morphAttributes.color,Se=Li;dt.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Se=x.toneMapping);let hn=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,he=hn!==void 0?hn.length:0,Zt=rt.get(dt),ii=p.state.lights;if(B===!0&&(Y===!0||P!==v)){let An=P===v&&dt.id===S;Q.setState(dt,P,An)}let ue=!1;dt.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==ii.state.version||Zt.outputColorSpace!==Xt||K.isBatchedMesh&&Zt.batching===!1||!K.isBatchedMesh&&Zt.batching===!0||K.isBatchedMesh&&Zt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Zt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Zt.instancing===!1||!K.isInstancedMesh&&Zt.instancing===!0||K.isSkinnedMesh&&Zt.skinning===!1||!K.isSkinnedMesh&&Zt.skinning===!0||K.isInstancedMesh&&Zt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Zt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Zt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Zt.instancingMorph===!1&&K.morphTexture!==null||Zt.envMap!==qt||dt.fog===!0&&Zt.fog!==Ft||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Q.numPlanes||Zt.numIntersection!==Q.numIntersection)||Zt.vertexAlphas!==Qt||Zt.vertexTangents!==ee||Zt.morphTargets!==Yt||Zt.morphNormals!==oe||Zt.morphColors!==ve||Zt.toneMapping!==Se||Zt.morphTargetsCount!==he)&&(ue=!0):(ue=!0,Zt.__version=dt.version);let On=Zt.currentProgram;ue===!0&&(On=Si(dt,J,K));let Ds=!1,yn=!1,Cr=!1,be=On.getUniforms(),qn=Zt.uniforms;if(j.useProgram(On.program)&&(Ds=!0,yn=!0,Cr=!0),dt.id!==S&&(S=dt.id,yn=!0),Ds||v!==P){j.buffers.depth.getReversed()?(D.copy(P.projectionMatrix),wm(D),Tm(D),be.setValue(N,"projectionMatrix",D)):be.setValue(N,"projectionMatrix",P.projectionMatrix),be.setValue(N,"viewMatrix",P.matrixWorldInverse);let bi=be.map.cameraPosition;bi!==void 0&&bi.setValue(N,mt.setFromMatrixPosition(P.matrixWorld)),q.logarithmicDepthBuffer&&be.setValue(N,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&be.setValue(N,"isOrthographic",P.isOrthographicCamera===!0),v!==P&&(v=P,yn=!0,Cr=!0)}if(K.isSkinnedMesh){be.setOptional(N,K,"bindMatrix"),be.setOptional(N,K,"bindMatrixInverse");let An=K.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),be.setValue(N,"boneTexture",An.boneTexture,T))}K.isBatchedMesh&&(be.setOptional(N,K,"batchingTexture"),be.setValue(N,"batchingTexture",K._matricesTexture,T),be.setOptional(N,K,"batchingIdTexture"),be.setValue(N,"batchingIdTexture",K._indirectTexture,T),be.setOptional(N,K,"batchingColorTexture"),K._colorsTexture!==null&&be.setValue(N,"batchingColorTexture",K._colorsTexture,T));let Pr=lt.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0)&&ot.update(K,lt,On),(yn||Zt.receiveShadow!==K.receiveShadow)&&(Zt.receiveShadow=K.receiveShadow,be.setValue(N,"receiveShadow",K.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(qn.envMap.value=qt,qn.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),dt.isMeshStandardMaterial&&dt.envMap===null&&J.environment!==null&&(qn.envMapIntensity.value=J.environmentIntensity),yn&&(be.setValue(N,"toneMappingExposure",x.toneMappingExposure),Zt.needsLights&&yp(qn,Cr),Ft&&dt.fog===!0&&xt.refreshFogUniforms(qn,Ft),xt.refreshMaterialUniforms(qn,dt,Z,it,p.state.transmissionRenderTarget[P.id]),tr.upload(N,Is(Zt),qn,T)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(tr.upload(N,Is(Zt),qn,T),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&be.setValue(N,"center",K.center),be.setValue(N,"modelViewMatrix",K.modelViewMatrix),be.setValue(N,"normalMatrix",K.normalMatrix),be.setValue(N,"modelMatrix",K.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){let An=dt.uniformsGroups;for(let bi=0,Ei=An.length;bi<Ei;bi++){let lu=An[bi];L.update(lu,On),L.bind(lu,On)}}return On}function yp(P,J){P.ambientLightColor.needsUpdate=J,P.lightProbe.needsUpdate=J,P.directionalLights.needsUpdate=J,P.directionalLightShadows.needsUpdate=J,P.pointLights.needsUpdate=J,P.pointLightShadows.needsUpdate=J,P.spotLights.needsUpdate=J,P.spotLightShadows.needsUpdate=J,P.rectAreaLights.needsUpdate=J,P.hemisphereLights.needsUpdate=J}function vp(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,J,lt){rt.get(P.texture).__webglTexture=J,rt.get(P.depthTexture).__webglTexture=lt;let dt=rt.get(P);dt.__hasExternalTextures=!0,dt.__autoAllocateDepthBuffer=lt===void 0,dt.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),dt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,J){let lt=rt.get(P);lt.__webglFramebuffer=J,lt.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(P,J=0,lt=0){R=P,E=J,w=lt;let dt=!0,K=null,Ft=!1,Gt=!1;if(P){let qt=rt.get(P);if(qt.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(N.FRAMEBUFFER,null),dt=!1;else if(qt.__webglFramebuffer===void 0)T.setupRenderTarget(P);else if(qt.__hasExternalTextures)T.rebindTextures(P,rt.get(P.texture).__webglTexture,rt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Yt=P.depthTexture;if(qt.__boundDepthTexture!==Yt){if(Yt!==null&&rt.has(Yt)&&(P.width!==Yt.image.width||P.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(P)}}let Qt=P.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Gt=!0);let ee=rt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ee[J])?K=ee[J][lt]:K=ee[J],Ft=!0):P.samples>0&&T.useMultisampledRTT(P)===!1?K=rt.get(P).__webglMultisampledFramebuffer:Array.isArray(ee)?K=ee[lt]:K=ee,C.copy(P.viewport),z.copy(P.scissor),k=P.scissorTest}else C.copy(ht).multiplyScalar(Z).floor(),z.copy(Rt).multiplyScalar(Z).floor(),k=H;if(j.bindFramebuffer(N.FRAMEBUFFER,K)&&dt&&j.drawBuffers(P,K),j.viewport(C),j.scissor(z),j.setScissorTest(k),Ft){let qt=rt.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+J,qt.__webglTexture,lt)}else if(Gt){let qt=rt.get(P.texture),Qt=J||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,qt.__webglTexture,lt||0,Qt)}S=-1},this.readRenderTargetPixels=function(P,J,lt,dt,K,Ft,Gt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=rt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt){j.bindFramebuffer(N.FRAMEBUFFER,Xt);try{let qt=P.texture,Qt=qt.format,ee=qt.type;if(!q.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=P.width-dt&&lt>=0&&lt<=P.height-K&&N.readPixels(J,lt,dt,K,nt.convert(Qt),nt.convert(ee),Ft)}finally{let qt=R!==null?rt.get(R).__webglFramebuffer:null;j.bindFramebuffer(N.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(P,J,lt,dt,K,Ft,Gt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=rt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Gt!==void 0&&(Xt=Xt[Gt]),Xt){let qt=P.texture,Qt=qt.format,ee=qt.type;if(!q.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=P.width-dt&&lt>=0&&lt<=P.height-K){j.bindFramebuffer(N.FRAMEBUFFER,Xt);let Yt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Yt),N.bufferData(N.PIXEL_PACK_BUFFER,Ft.byteLength,N.STREAM_READ),N.readPixels(J,lt,dt,K,nt.convert(Qt),nt.convert(ee),0);let oe=R!==null?rt.get(R).__webglFramebuffer:null;j.bindFramebuffer(N.FRAMEBUFFER,oe);let ve=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Em(N,ve,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Yt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ft),N.deleteBuffer(Yt),N.deleteSync(ve),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,J=null,lt=0){P.isTexture!==!0&&(Br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,P=arguments[1]);let dt=Math.pow(2,-lt),K=Math.floor(P.image.width*dt),Ft=Math.floor(P.image.height*dt),Gt=J!==null?J.x:0,Xt=J!==null?J.y:0;T.setTexture2D(P,0),N.copyTexSubImage2D(N.TEXTURE_2D,lt,0,0,Gt,Xt,K,Ft),j.unbindTexture()},this.copyTextureToTexture=function(P,J,lt=null,dt=null,K=0){P.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture function signature has changed."),dt=arguments[0]||null,P=arguments[1],J=arguments[2],K=arguments[3]||0,lt=null);let Ft,Gt,Xt,qt,Qt,ee,Yt,oe,ve,Se=P.isCompressedTexture?P.mipmaps[K]:P.image;lt!==null?(Ft=lt.max.x-lt.min.x,Gt=lt.max.y-lt.min.y,Xt=lt.isBox3?lt.max.z-lt.min.z:1,qt=lt.min.x,Qt=lt.min.y,ee=lt.isBox3?lt.min.z:0):(Ft=Se.width,Gt=Se.height,Xt=Se.depth||1,qt=0,Qt=0,ee=0),dt!==null?(Yt=dt.x,oe=dt.y,ve=dt.z):(Yt=0,oe=0,ve=0);let hn=nt.convert(J.format),he=nt.convert(J.type),Zt;J.isData3DTexture?(T.setTexture3D(J,0),Zt=N.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(T.setTexture2DArray(J,0),Zt=N.TEXTURE_2D_ARRAY):(T.setTexture2D(J,0),Zt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,J.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,J.unpackAlignment);let ii=N.getParameter(N.UNPACK_ROW_LENGTH),ue=N.getParameter(N.UNPACK_IMAGE_HEIGHT),On=N.getParameter(N.UNPACK_SKIP_PIXELS),Ds=N.getParameter(N.UNPACK_SKIP_ROWS),yn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Se.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Se.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,qt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Qt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ee);let Cr=P.isDataArrayTexture||P.isData3DTexture,be=J.isDataArrayTexture||J.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let qn=rt.get(P),Pr=rt.get(J),An=rt.get(qn.__renderTarget),bi=rt.get(Pr.__renderTarget);j.bindFramebuffer(N.READ_FRAMEBUFFER,An.__webglFramebuffer),j.bindFramebuffer(N.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Ei=0;Ei<Xt;Ei++)Cr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,rt.get(P).__webglTexture,K,ee+Ei),P.isDepthTexture?(be&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,rt.get(J).__webglTexture,K,ve+Ei),N.blitFramebuffer(qt,Qt,Ft,Gt,Yt,oe,Ft,Gt,N.DEPTH_BUFFER_BIT,N.NEAREST)):be?N.copyTexSubImage3D(Zt,K,Yt,oe,ve+Ei,qt,Qt,Ft,Gt):N.copyTexSubImage2D(Zt,K,Yt,oe,ve+Ei,qt,Qt,Ft,Gt);j.bindFramebuffer(N.READ_FRAMEBUFFER,null),j.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else be?P.isDataTexture||P.isData3DTexture?N.texSubImage3D(Zt,K,Yt,oe,ve,Ft,Gt,Xt,hn,he,Se.data):J.isCompressedArrayTexture?N.compressedTexSubImage3D(Zt,K,Yt,oe,ve,Ft,Gt,Xt,hn,Se.data):N.texSubImage3D(Zt,K,Yt,oe,ve,Ft,Gt,Xt,hn,he,Se):P.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,K,Yt,oe,Ft,Gt,hn,he,Se.data):P.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,K,Yt,oe,Se.width,Se.height,hn,Se.data):N.texSubImage2D(N.TEXTURE_2D,K,Yt,oe,Ft,Gt,hn,he,Se);N.pixelStorei(N.UNPACK_ROW_LENGTH,ii),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ue),N.pixelStorei(N.UNPACK_SKIP_PIXELS,On),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ds),N.pixelStorei(N.UNPACK_SKIP_IMAGES,yn),K===0&&J.generateMipmaps&&N.generateMipmap(Zt),j.unbindTexture()},this.copyTextureToTexture3D=function(P,J,lt=null,dt=null,K=0){return P.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),lt=arguments[0]||null,dt=arguments[1]||null,P=arguments[2],J=arguments[3],K=arguments[4]||0),Br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,J,lt,dt,K)},this.initRenderTarget=function(P){rt.get(P).__webglFramebuffer===void 0&&T.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?T.setTextureCube(P,0):P.isData3DTexture?T.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?T.setTexture2DArray(P,0):T.setTexture2D(P,0),j.unbindTexture()},this.resetState=function(){E=0,w=0,R=null,j.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var Fi=class extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Il=class extends un{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Sn,h=Sn,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var la=class extends qe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ys=new le,ud=new le,Vo=[],dd=new Vn,vy=new le,Nr=new kt,Or=new hs,Me=class extends kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new la(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,vy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),dd.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(dd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),Or.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),t.ray.intersectsSphere(Or)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ys),ud.multiplyMatrices(n,Ys),Nr.matrixWorld=ud,Nr.raycast(t,Vo);for(let o=0,a=Vo.length;o<a;o++){let c=Vo[o];c.instanceId=r,c.object=this,e.push(c)}Vo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new la(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Il(new Float32Array(i*this.count),i,this.count,eh,$n));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ue=class extends un{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new Bt:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,i=[],r=[],o=[],a=new I,c=new le;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(We(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(We(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},$r=class extends Cn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Bt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Dl=class extends $r{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Go=new I,Ec=new ah,wc=new ah,Tc=new ah,ds=class extends Cn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Go.subVectors(i[0],i[1]).add(i[0]),l=Go);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Go.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Go),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ec.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),wc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),Tc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ec.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),wc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Tc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ec.calc(c),wc.calc(c),Tc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function fd(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function My(s,t){let e=1-s;return e*e*t}function Sy(s,t){return 2*(1-s)*s*t}function by(s,t){return s*s*t}function Gr(s,t,e,n){return My(s,t)+Sy(s,e)+by(s,n)}function Ey(s,t){let e=1-s;return e*e*e*t}function wy(s,t){let e=1-s;return 3*e*e*s*t}function Ty(s,t){return 3*(1-s)*s*s*t}function Ay(s,t){return s*s*s*t}function Wr(s,t,e,n,i){return Ey(s,t)+wy(s,e)+Ty(s,n)+Ay(s,i)}var ha=class extends Cn{constructor(t=new Bt,e=new Bt,n=new Bt,i=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Bt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wr(t,i.x,r.x,o.x,a.x),Wr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ll=class extends Cn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wr(t,i.x,r.x,o.x,a.x),Wr(t,i.y,r.y,o.y,a.y),Wr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ua=class extends Cn{constructor(t=new Bt,e=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Bt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ul=class extends Cn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},da=class extends Cn{constructor(t=new Bt,e=new Bt,n=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Bt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Gr(t,i.x,r.x,o.x),Gr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hr=class extends Cn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Gr(t,i.x,r.x,o.x),Gr(t,i.y,r.y,o.y),Gr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fa=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Bt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(fd(a,c.x,l.x,h.x,u.x),fd(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Bt().fromArray(i))}return this}},pa=Object.freeze({__proto__:null,ArcCurve:Dl,CatmullRomCurve3:ds,CubicBezierCurve:ha,CubicBezierCurve3:Ll,EllipseCurve:$r,LineCurve:ua,LineCurve3:Ul,QuadraticBezierCurve:da,QuadraticBezierCurve3:hr,SplineCurve:fa}),Nl=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pa[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new pa[i.type]().fromJSON(i))}return this}},ma=class extends Nl{constructor(t){super(),this.type="Path",this.currentPoint=new Bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ua(this.currentPoint.clone(),new Bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new da(this.currentPoint.clone(),new Bt(t,e),new Bt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new ha(this.currentPoint.clone(),new Bt(t,e),new Bt(n,i),new Bt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new fa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new $r(t,e,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var ga=class s extends Xe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function M(){let x=new I,A=new I,E=0,w=(e-t)/n;for(let R=0;R<=r;R++){let S=[],v=R/r,C=v*(e-t)+t;for(let z=0;z<=i;z++){let k=z/i,W=k*c+a,$=Math.sin(W),O=Math.cos(W);A.x=C*$,A.y=-v*n+m,A.z=C*O,u.push(A.x,A.y,A.z),x.set($,w,O).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-v),S.push(g++)}_.push(S)}for(let R=0;R<i;R++)for(let S=0;S<r;S++){let v=_[S][R],C=_[S+1][R],z=_[S+1][R+1],k=_[S][R+1];(t>0||S!==0)&&(h.push(v,C,k),E+=3),(e>0||S!==r-1)&&(h.push(C,z,k),E+=3)}l.addGroup(p,E,0),p+=E}function y(x){let A=g,E=new Bt,w=new I,R=0,S=x===!0?t:e,v=x===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let C=g;for(let z=0;z<=i;z++){let W=z/i*c+a,$=Math.cos(W),O=Math.sin(W);w.x=S*O,w.y=m*v,w.z=S*$,u.push(w.x,w.y,w.z),d.push(0,v,0),E.x=$*.5+.5,E.y=O*.5*v+.5,f.push(E.x,E.y),g++}for(let z=0;z<i;z++){let k=A+z,W=C+z;x===!0?h.push(W,W+1,k):h.push(W+1,W,k),R+=3}l.addGroup(p,R,x===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ol=class s extends Xe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let y=new I,x=new I,A=new I;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],x),f(e[E+2],A),c(y,x,A,M)}function c(M,y,x,A){let E=A+1,w=[];for(let R=0;R<=E;R++){w[R]=[];let S=M.clone().lerp(x,R/E),v=y.clone().lerp(x,R/E),C=E-R;for(let z=0;z<=C;z++)z===0&&R===E?w[R][z]=S:w[R][z]=S.clone().lerp(v,z/C)}for(let R=0;R<E;R++)for(let S=0;S<2*(E-R)-1;S++){let v=Math.floor(S/2);S%2===0?(d(w[R][v+1]),d(w[R+1][v]),d(w[R][v])):(d(w[R][v+1]),d(w[R+1][v+1]),d(w[R+1][v]))}}function l(M){let y=new I;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(M),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){let M=new I;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let x=m(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;o.push(x,1-A)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let y=o[M+0],x=o[M+2],A=o[M+4],E=Math.max(y,x,A),w=Math.min(y,x,A);E>.9&&w<.1&&(y<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,y){let x=M*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){let M=new I,y=new I,x=new I,A=new I,E=new Bt,w=new Bt,R=new Bt;for(let S=0,v=0;S<r.length;S+=9,v+=6){M.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),E.set(o[v+0],o[v+1]),w.set(o[v+2],o[v+3]),R.set(o[v+4],o[v+5]),A.copy(M).add(y).add(x).divideScalar(3);let C=m(A);_(E,v+0,M,C),_(w,v+2,y,C),_(R,v+4,x,C)}}function _(M,y,x,A){A<0&&M.x===1&&(o[y]=M.x-1),x.x===0&&x.z===0&&(o[y]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var fs=class extends ma{constructor(t){super(t),this.uuid=xs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new ma().fromJSON(i))}return this}},Ry={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Vd(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=Ly(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Jr(r,o,e,a,c,f,0),o}};function Vd(s,t,e,n,i){let r,o;if(i===Wy(s,t,e,n)>0)for(r=t;r<e;r+=n)o=pd(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=pd(r,s[r],s[r+1],o);return o&&Ea(o,o.next)&&(Qr(o),o=o.next),o}function ps(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ea(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Qr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Jr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&By(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Py(s,n,i,r):Cy(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Qr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Iy(ps(s),t,e),Jr(s,t,e,n,i,r,2)):o===2&&Dy(s,t,e,n,i,r):Jr(ps(s),t,e,n,i,r,1);break}}}function Cy(s){let t=s.prev,e=s,n=s.next;if(Ae(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Js(i,a,r,c,o,l,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Py(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ae(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Fl(f,g,t,e,n),M=Fl(_,m,t,e,n),y=s.prevZ,x=s.nextZ;for(;y&&y.z>=p&&x&&x.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Js(a,h,c,u,l,d,y.x,y.y)&&Ae(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Js(a,h,c,u,l,d,x.x,x.y)&&Ae(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Js(a,h,c,u,l,d,y.x,y.y)&&Ae(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Js(a,h,c,u,l,d,x.x,x.y)&&Ae(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Iy(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Ea(i,r)&&Gd(i,n,n.next,r)&&Kr(i,r)&&Kr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Qr(n),Qr(n.next),n=s=r),n=n.next}while(n!==s);return ps(n)}function Dy(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hy(o,a)){let c=Wd(o,a);o=ps(o,o.next),c=ps(c,c.next),Jr(o,t,e,n,i,r,0),Jr(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Ly(s,t,e,n){let i=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Vd(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(ky(l));for(i.sort(Uy),r=0;r<i.length;r++)e=Ny(i[r],e);return e}function Uy(s,t){return s.x-t.x}function Ny(s,t){let e=Oy(s,t);if(!e)return t;let n=Wd(e,s);return ps(n,n.next),ps(e,e.next)}function Oy(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Js(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Kr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Fy(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Fy(s,t){return Ae(s.prev,s,t.prev)<0&&Ae(t.next,s,s.next)<0}function By(s,t,e,n){let i=s;do i.z===0&&(i.z=Fl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,zy(i)}function zy(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function Fl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ky(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Js(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Hy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Vy(s,t)&&(Kr(s,t)&&Kr(t,s)&&Gy(s,t)&&(Ae(s.prev,s,t.prev)||Ae(s,t.prev,t))||Ea(s,t)&&Ae(s.prev,s,s.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ea(s,t){return s.x===t.x&&s.y===t.y}function Gd(s,t,e,n){let i=Xo(Ae(s,t,e)),r=Xo(Ae(s,t,n)),o=Xo(Ae(e,n,s)),a=Xo(Ae(e,n,t));return!!(i!==r&&o!==a||i===0&&Wo(s,e,t)||r===0&&Wo(s,n,t)||o===0&&Wo(e,s,n)||a===0&&Wo(e,t,n))}function Wo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Xo(s){return s>0?1:s<0?-1:0}function Vy(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Gd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Kr(s,t){return Ae(s.prev,s,s.next)<0?Ae(s,t,s.next)>=0&&Ae(s,s.prev,t)>=0:Ae(s,t,s.prev)<0||Ae(s,s.next,t)<0}function Gy(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Wd(s,t){let e=new Bl(s.i,s.x,s.y),n=new Bl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function pd(s,t,e,n){let i=new Bl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Bl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wy(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Ui=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];md(t),gd(n,t);let o=t.length;e.forEach(md);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,gd(n,e[c]);let a=Ry.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function md(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function gd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var _a=class s extends Xe{constructor(t=new fs([new Bt(.5,.5),new Bt(-.5,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new fe(i,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Xy,y,x=!1,A,E,w,R;p&&(y=p.getSpacedPoints(h),x=!0,d=!1,A=p.computeFrenetFrames(h,!1),E=new I,w=new I,R=new I),d||(m=0,f=0,g=0,_=0);let S=a.extractPoints(l),v=S.shape,C=S.holes;if(!Ui.isClockWise(v)){v=v.reverse();for(let G=0,gt=C.length;G<gt;G++){let N=C[G];Ui.isClockWise(N)&&(C[G]=N.reverse())}}let k=Ui.triangulateShape(v,C),W=v;for(let G=0,gt=C.length;G<gt;G++){let N=C[G];v=v.concat(N)}function $(G,gt,N){return gt||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(gt,N)}let O=v.length,it=k.length;function Z(G,gt,N){let Ut,wt,q,j=G.x-gt.x,St=G.y-gt.y,rt=N.x-G.x,T=N.y-G.y,b=j*j+St*St,X=j*T-St*rt;if(Math.abs(X)>Number.EPSILON){let pt=Math.sqrt(b),At=Math.sqrt(rt*rt+T*T),at=gt.x-St/pt,vt=gt.y+j/pt,xt=N.x-T/At,bt=N.y+rt/At,zt=((xt-at)*T-(bt-vt)*rt)/(j*T-St*rt);Ut=at+j*zt-G.x,wt=vt+St*zt-G.y;let Q=Ut*Ut+wt*wt;if(Q<=2)return new Bt(Ut,wt);q=Math.sqrt(Q/2)}else{let pt=!1;j>Number.EPSILON?rt>Number.EPSILON&&(pt=!0):j<-Number.EPSILON?rt<-Number.EPSILON&&(pt=!0):Math.sign(St)===Math.sign(T)&&(pt=!0),pt?(Ut=-St,wt=j,q=Math.sqrt(b)):(Ut=j,wt=St,q=Math.sqrt(b/2))}return new Bt(Ut/q,wt/q)}let _t=[];for(let G=0,gt=W.length,N=gt-1,Ut=G+1;G<gt;G++,N++,Ut++)N===gt&&(N=0),Ut===gt&&(Ut=0),_t[G]=Z(W[G],W[N],W[Ut]);let et=[],ht,Rt=_t.concat();for(let G=0,gt=C.length;G<gt;G++){let N=C[G];ht=[];for(let Ut=0,wt=N.length,q=wt-1,j=Ut+1;Ut<wt;Ut++,q++,j++)q===wt&&(q=0),j===wt&&(j=0),ht[Ut]=Z(N[Ut],N[q],N[j]);et.push(ht),Rt=Rt.concat(ht)}for(let G=0;G<m;G++){let gt=G/m,N=f*Math.cos(gt*Math.PI/2),Ut=g*Math.sin(gt*Math.PI/2)+_;for(let wt=0,q=W.length;wt<q;wt++){let j=$(W[wt],_t[wt],Ut);D(j.x,j.y,-N)}for(let wt=0,q=C.length;wt<q;wt++){let j=C[wt];ht=et[wt];for(let St=0,rt=j.length;St<rt;St++){let T=$(j[St],ht[St],Ut);D(T.x,T.y,-N)}}}let H=g+_;for(let G=0;G<O;G++){let gt=d?$(v[G],Rt[G],H):v[G];x?(w.copy(A.normals[0]).multiplyScalar(gt.x),E.copy(A.binormals[0]).multiplyScalar(gt.y),R.copy(y[0]).add(w).add(E),D(R.x,R.y,R.z)):D(gt.x,gt.y,0)}for(let G=1;G<=h;G++)for(let gt=0;gt<O;gt++){let N=d?$(v[gt],Rt[gt],H):v[gt];x?(w.copy(A.normals[G]).multiplyScalar(N.x),E.copy(A.binormals[G]).multiplyScalar(N.y),R.copy(y[G]).add(w).add(E),D(R.x,R.y,R.z)):D(N.x,N.y,u/h*G)}for(let G=m-1;G>=0;G--){let gt=G/m,N=f*Math.cos(gt*Math.PI/2),Ut=g*Math.sin(gt*Math.PI/2)+_;for(let wt=0,q=W.length;wt<q;wt++){let j=$(W[wt],_t[wt],Ut);D(j.x,j.y,u+N)}for(let wt=0,q=C.length;wt<q;wt++){let j=C[wt];ht=et[wt];for(let St=0,rt=j.length;St<rt;St++){let T=$(j[St],ht[St],Ut);x?D(T.x,T.y+y[h-1].y,y[h-1].x+N):D(T.x,T.y,u+N)}}}U(),B();function U(){let G=i.length/3;if(d){let gt=0,N=O*gt;for(let Ut=0;Ut<it;Ut++){let wt=k[Ut];st(wt[2]+N,wt[1]+N,wt[0]+N)}gt=h+m*2,N=O*gt;for(let Ut=0;Ut<it;Ut++){let wt=k[Ut];st(wt[0]+N,wt[1]+N,wt[2]+N)}}else{for(let gt=0;gt<it;gt++){let N=k[gt];st(N[2],N[1],N[0])}for(let gt=0;gt<it;gt++){let N=k[gt];st(N[0]+O*h,N[1]+O*h,N[2]+O*h)}}n.addGroup(G,i.length/3-G,0)}function B(){let G=i.length/3,gt=0;Y(W,gt),gt+=W.length;for(let N=0,Ut=C.length;N<Ut;N++){let wt=C[N];Y(wt,gt),gt+=wt.length}n.addGroup(G,i.length/3-G,1)}function Y(G,gt){let N=G.length;for(;--N>=0;){let Ut=N,wt=N-1;wt<0&&(wt=G.length-1);for(let q=0,j=h+m*2;q<j;q++){let St=O*q,rt=O*(q+1),T=gt+Ut+St,b=gt+wt+St,X=gt+wt+rt,pt=gt+Ut+rt;mt(T,b,X,pt)}}}function D(G,gt,N){c.push(G),c.push(gt),c.push(N)}function st(G,gt,N){Tt(G),Tt(gt),Tt(N);let Ut=i.length/3,wt=M.generateTopUV(n,i,Ut-3,Ut-2,Ut-1);It(wt[0]),It(wt[1]),It(wt[2])}function mt(G,gt,N,Ut){Tt(G),Tt(gt),Tt(Ut),Tt(gt),Tt(N),Tt(Ut);let wt=i.length/3,q=M.generateSideWallUV(n,i,wt-6,wt-3,wt-2,wt-1);It(q[0]),It(q[1]),It(q[3]),It(q[1]),It(q[2]),It(q[3])}function Tt(G){i.push(c[G*3+0]),i.push(c[G*3+1]),i.push(c[G*3+2])}function It(G){r.push(G.x),r.push(G.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return qy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new pa[i.type]().fromJSON(i)),new s(n,t.options)}},Xy={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new Bt(r,o),new Bt(a,c),new Bt(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Bt(o,1-c),new Bt(l,1-u),new Bt(d,1-g),new Bt(_,1-p)]:[new Bt(a,1-c),new Bt(h,1-u),new Bt(f,1-g),new Bt(m,1-p)]}};function qy(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ur=class s extends Ol{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var xa=class s extends Xe{constructor(t=new fs([new Bt(0,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new fe(i,3)),this.setAttribute("normal",new fe(r,3)),this.setAttribute("uv",new fe(o,2));function l(h){let u=i.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;Ui.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];Ui.isClockWise(M)===!0&&(g[m]=M.reverse())}let _=Ui.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=_.length;m<p;m++){let M=_[m],y=M[0]+u,x=M[1]+u,A=M[2]+u;n.push(y,x,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Yy(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};function Yy(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var Kn=class s extends Xe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,d=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let M=[],y=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){let E=A/e;u.x=-t*Math.cos(i+E*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+E*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+x,1-y),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let y=h[p][M+1],x=h[p][M],A=h[p+1][M],E=h[p+1][M+1];(p!==0||o>0)&&f.push(y,x,E),(p!==n-1||c<Math.PI)&&f.push(x,A,E)}this.setIndex(f),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Bi=class s extends Xe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var mi=class s extends Xe{constructor(t=new hr(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,c=new I,l=new Bt,h=new I,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),M(),p()}function m(y){h=t.getPointAt(y/e,h);let x=o.normals[y],A=o.binormals[y];for(let E=0;E<=i;E++){let w=E/i*Math.PI*2,R=Math.sin(w),S=-Math.cos(w);c.x=S*x.x+R*A.x,c.y=S*x.y+R*A.y,c.z=S*x.z+R*A.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let x=1;x<=i;x++){let A=(i+1)*(y-1)+(x-1),E=(i+1)*y+(x-1),w=(i+1)*y+x,R=(i+1)*(y-1)+x;g.push(A,E,R),g.push(E,w,R)}}function M(){for(let y=0;y<=e;y++)for(let x=0;x<=i;x++)l.x=y/e,l.y=x/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new pa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ee=class extends us{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dd,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},gi=class extends Ee{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function qo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Zy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var dr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zl=class extends dr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pu,endingEnd:pu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case mu:r=t,a=2*e-n;break;case gu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case mu:o=t,c=2*n-e;break;case gu:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+M*o[l+A]+y*o[c+A]+x*o[u+A];return r}},kl=class extends dr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Hl=class extends dr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Gn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qo(e,this.TimeBufferType),this.values=qo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qo(t.times,Array),values:qo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qo:e=this.InterpolantFactoryMethodDiscrete;break;case fl:e=this.InterpolantFactoryMethodLinear;break;case Ka:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qo;case this.InterpolantFactoryMethodLinear:return fl;case this.InterpolantFactoryMethodSmooth:return Ka}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Zy(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ka,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=fl;var ms=class extends Gn{constructor(t,e,n){super(t,e,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Qo;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends Gn{};Vl.prototype.ValueTypeName="color";var Gl=class extends Gn{};Gl.prototype.ValueTypeName="number";var Wl=class extends dr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)an.slerpFlat(r,0,o,l-a,o,l,c);return r}},ya=class extends Gn{InterpolantFactoryMethodLinear(t){return new Wl(this.times,this.values,this.getValueSize(),t)}};ya.prototype.ValueTypeName="quaternion";ya.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends Gn{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Qo;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends Gn{};Xl.prototype.ValueTypeName="vector";var ql=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},$y=new ql,Yl=class{constructor(t){this.manager=t!==void 0?t:$y,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var jr=class extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},fr=class extends jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ac=new le,_d=new I,xd=new I,va=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;_d.setFromMatrixPosition(t.matrixWorld),e.position.copy(_d),xd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xd),e.updateMatrixWorld(),Ac.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var yd=new le,Fr=new I,Rc=new I,Zl=class extends va{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Bt(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fr),Rc.copy(n.position),Rc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Rc),n.updateMatrixWorld(),i.makeTranslation(-Fr.x,-Fr.y,-Fr.z),yd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd)}},_s=class extends jr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Zl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},$l=class extends va{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zi=class extends jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new $l}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ch="\\[\\]\\.:\\/",Jy=new RegExp("["+ch+"]","g"),lh="[^"+ch+"]",Ky="[^"+ch.replace("\\.","")+"]",Qy=/((?:WC+[\/:])*)/.source.replace("WC",lh),jy=/(WCOD+)?/.source.replace("WCOD",Ky),tv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),ev=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),nv=new RegExp("^"+Qy+jy+tv+ev+"$"),iv=["material","materials","bones","map"],Jl=class{constructor(t,e,n){let i=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jy,"")}static parseTrackName(t){let e=nv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);iv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Jl;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var G1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);var wa={high:{dpr:1.6,blocks:18,grid:5,bevel:3,fps:60},medium:{dpr:1.25,blocks:12,grid:4,bevel:2,fps:60},low:{dpr:1,blocks:8,grid:3,bevel:1,fps:30}};function no(){let s="auto";try{s=localStorage.getItem("portfolio-quality")||"auto"}catch{}if(wa[s])return s;let t=navigator.hardwareConcurrency||4,e=navigator.deviceMemory||4;return t<=2||e<=2?"low":innerWidth<900||e<=4?"medium":"high"}var io=new I;function Pn(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;io.copy(t),io[n]=0,io.normalize();let l=.5*o/(o+a),h=1-io.angleTo(s)/c;return Math.sign(io[e])===1?h*l:a/(o+a)+l+l*(1-h)}var He=class extends _e{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new I,c=new I,l=new I(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new I,_=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Pn(g,c,"z","y",r,n),d[p+1]=1-Pn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-Pn(g,c,"z","y",r,n),d[p+1]=1-Pn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-Pn(g,c,"x","z",r,t),d[p+1]=Pn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-Pn(g,c,"x","z",r,t),d[p+1]=1-Pn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-Pn(g,c,"x","y",r,t),d[p+1]=1-Pn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=Pn(g,c,"x","y",r,t),d[p+1]=1-Pn(g,c,"y","x",r,e);break}}};var Ta=class extends Fi{constructor(){super();let t=new _e;t.deleteAttribute("uv");let e=new Ee({side:tn}),n=new Ee,i=new _s(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new kt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new kt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new kt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new kt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new kt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new kt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new kt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new kt(t,gr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new kt(t,gr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new kt(t,gr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new kt(t,gr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let m=new kt(t,gr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new kt(t,gr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function gr(s){let t=new Re;return t.color.setScalar(s),t}function Aa({size:s=2,software:t=!1,orange:e}={}){let n=new $t,i=new $t,r=[],o=e||new gi({color:"#e96c0c",metalness:.48,roughness:.38,clearcoat:.08,clearcoatRoughness:.5,envMapIntensity:.7}),a=new gi({color:"#e96c0c",metalness:.5,roughness:.46,envMapIntensity:.65}),c=new Ee({color:"#211e19",metalness:.5,roughness:.4}),l=t?new _e(1,1,1):new He(1,1,1,4,.0325),h=t?new Ce(.91*s,.91*s):new He(.91*s,.91*s,.0125*s,3,.006*s),u=new _e(.006*s,.0225*s,.0015*s),d=new kt(l,a);d.scale.setScalar(s),d.renderOrder=2,n.add(d,i);let f=new Kt(t?"#dc630c":"#e96c0c"),g=new Kt("#25211c");for(let[p,M]of[[0,0,1],[0,0,-1],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0]].entries()){let y=new kt(h,o),x=new I(...M);if(y.renderOrder=3,y.quaternion.setFromUnitVectors(new I(0,0,1),x),y.position.copy(x).multiplyScalar(.504*s),i.add(y),r.push({part:y,normal:x}),p===0)for(let A=0;A<7;A++){let E=new kt(u,c);E.renderOrder=4,E.position.set((-.325+A*.012)*s,-.325*s,.008*s),y.add(E)}}function _({fracture:p=0,spread:M=0}={}){let y=Ne.clamp(p,0,1),x=Ne.clamp(M,0,1);d.visible=i.visible=y<.8,d.scale.setScalar(s*Math.max(.001,1-y)),i.scale.setScalar(Math.max(.001,1-y)),r.forEach(({part:A,normal:E})=>A.position.copy(E).multiplyScalar((.504+x*.31)*s)),a.color.copy(f).lerp(g,x)}function m(){l.dispose(),h.dispose(),u.dispose(),a.dispose(),c.dispose(),e||o.dispose()}return{group:n,core:d,panelsGroup:i,panels:r,orange:o,update:_,dispose:m}}function Ra(s,t){let e=new cr(s),n=new Ta,i=e.fromScene(n,.04);return t.environment=i.texture,e.dispose(),n.dispose(),i}var _r=class{constructor(t){if(this.canvas=t,this.context=t.getContext("2d",{alpha:!0}),!this.context)throw new Error("Canvas unavailable");this.capabilities={getMaxAnisotropy:()=>1},this.pixelRatio=1,this.mvp=new le,this.normalMatrix=new jt,this.vector=new I,this.normal=new I,this.light=new I(-.5,.8,.9).normalize(),this.half=new I(-.2,.4,1).normalize(),this.studioHalf=new I,this.studioPosition=new I}setPixelRatio(t){this.pixelRatio=Math.min(t,1.25)}setSize(t,e){this.width=t,this.height=e,this.canvas.width=Math.round(t*this.pixelRatio),this.canvas.height=Math.round(e*this.pixelRatio)}render(t,e){let n=this.context,i=this.width,r=this.height,o=this.pixelRatio;n.setTransform(o,0,0,o,0,0),n.clearRect(0,0,i,r),t.updateMatrixWorld(),e.updateMatrixWorld(),e.matrixWorldInverse.copy(e.matrixWorld).invert();let a=[],c=new le().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),l=(f,g,_=null)=>{if(!f.isMesh||f.userData.skipSoftware)return;let m=f.material;if(!m||m.opacity<.005)return;let p=f.geometry,M=p.attributes.position,y=p.attributes.uv,x=p.attributes.normal,A=p.index;if(!M)return;this.mvp.multiplyMatrices(c,g),this.normalMatrix.getNormalMatrix(g);let E=m.userData.contactStudio===!0;E&&(this.studioPosition.setFromMatrixPosition(g),this.studioHalf.copy(e.position).sub(this.studioPosition).normalize().add(this.light).normalize());let w=[];for(let C=0;C<M.count;C++)this.vector.fromBufferAttribute(M,C).applyMatrix4(this.mvp),w.push({x:(this.vector.x*.5+.5)*i,y:(-.5*this.vector.y+.5)*r,z:this.vector.z});let R=A?A.count:M.count,S=Math.max(0,p.drawRange.start||0),v=Math.min(R,S+p.drawRange.count);for(let C=S;C<v;C+=3){let z=A?A.getX(C):C,k=A?A.getX(C+1):C+1,W=A?A.getX(C+2):C+2,$=w[z],O=w[k],it=w[W];if($.z>1||$.z<-1||O.z>1||it.z>1)continue;let Z=(O.x-$.x)*(it.y-$.y)-(O.y-$.y)*(it.x-$.x);if(m.side!==kn&&Z>=0||Math.max($.x,O.x,it.x)<0||Math.min($.x,O.x,it.x)>i||Math.max($.y,O.y,it.y)<0||Math.min($.y,O.y,it.y)>r)continue;let _t=1,et=0,ht=0;if(!m.isMeshBasicMaterial&&x&&(this.normal.set(x.getX(z)+x.getX(k)+x.getX(W),x.getY(z)+x.getY(k)+x.getY(W),x.getZ(z)+x.getZ(k)+x.getZ(W)).applyMatrix3(this.normalMatrix).normalize(),_t=.26+Math.max(0,this.normal.dot(this.light))*.9,et=Math.pow(Math.max(0,this.normal.dot(this.half)),24)*.05,ht=Math.pow(1-Math.abs(this.normal.z),4)*.035,E)){let Y=m.metalness||0,D=m.roughness??.3;_t=.28+Math.max(0,this.normal.dot(this.light))*.74,et=Math.pow(Math.max(0,this.normal.dot(this.studioHalf)),14+(1-D)*38)*(.08+Y*.26),ht*=1+Y*1.8}let Rt=m.color.clone();_&&Rt.multiply(_),Rt.convertLinearToSRGB();let H=[Rt.r,Rt.g,Rt.b].map((Y,D)=>Math.round(Math.min(1,Y*_t+et*(D===0?1:D===1?.82:.63)+ht*(D===0?.9:D===1?.36:.16))*255)),U=null;if(m.map?.image&&y){let Y=m.map.image;U={img:Y,studio:E,shade:_t,spec:et,uv:[z,k,W].map(D=>({x:y.getX(D)*Y.width,y:(1-y.getY(D))*Y.height}))}}let B=null;if(!U&&p.type==="BoxGeometry"&&A&&C%6===0&&C+6<=v){B=[...new Set(Array.from({length:6},(mt,Tt)=>A.getX(C+Tt)))].map(mt=>w[mt]);let D=B.reduce((mt,Tt)=>mt+Tt.x,0)/4,st=B.reduce((mt,Tt)=>mt+Tt.y,0)/4;B.sort((mt,Tt)=>Math.atan2(mt.y-st,mt.x-D)-Math.atan2(Tt.y-st,Tt.x-D)),C+=3}a.push({a:$,b:O,c:it,z:B?B.reduce((Y,D)=>Y+D.z,0)/4:($.z+O.z+it.z)/3,color:`rgb(${H.join(",")})`,alpha:m.opacity,order:f.renderOrder,tex:U,quad:B})}},h=new le,u=new le,d=new Kt;t.traverseVisible(f=>{if(!(!f.isMesh||f.userData.skipSoftware))if(f.isInstancedMesh)for(let g=0;g<f.count;g++)f.getMatrixAt(g,h),u.multiplyMatrices(f.matrixWorld,h),f.instanceColor&&f.getColorAt(g,d),l(f,u,f.instanceColor?d:null);else l(f,f.matrixWorld)}),a.sort((f,g)=>f.order-g.order||g.z-f.z);for(let f of a){if(n.globalAlpha=f.alpha,f.tex){this.drawTexture(f);continue}n.fillStyle=f.color,n.strokeStyle=f.color,n.lineWidth=.5,n.beginPath();let g=f.quad||[f.a,f.b,f.c];n.moveTo(g[0].x,g[0].y);for(let _ of g.slice(1))n.lineTo(_.x,_.y);n.closePath(),n.fill(),n.stroke()}n.globalAlpha=1}drawTexture(t){let e=this.context,[n,i,r]=t.tex.uv,[o,a,c]=[t.a,t.b,t.c],l=n.x*(i.y-r.y)+i.x*(r.y-n.y)+r.x*(n.y-i.y);if(Math.abs(l)<.001)return;let h=(o.x*(i.y-r.y)+a.x*(r.y-n.y)+c.x*(n.y-i.y))/l,u=(o.y*(i.y-r.y)+a.y*(r.y-n.y)+c.y*(n.y-i.y))/l,d=(o.x*(r.x-i.x)+a.x*(n.x-r.x)+c.x*(i.x-n.x))/l,f=(o.y*(r.x-i.x)+a.y*(n.x-r.x)+c.y*(i.x-n.x))/l,g=(o.x*(i.x*r.y-r.x*i.y)+a.x*(r.x*n.y-n.x*r.y)+c.x*(n.x*i.y-i.x*n.y))/l,_=(o.y*(i.x*r.y-r.x*i.y)+a.y*(r.x*n.y-n.x*r.y)+c.y*(n.x*i.y-i.x*n.y))/l;e.save(),e.beginPath();let m=(o.x+a.x+c.x)/3,p=(o.y+a.y+c.y)/3,M=y=>{let x=y.x-m,A=y.y-p,E=Math.hypot(x,A)||1;return[y.x+x/E*.7,y.y+A/E*.7]};e.moveTo(...M(o)),e.lineTo(...M(a)),e.lineTo(...M(c)),e.closePath(),e.clip(),e.transform(h,u,d,f,g,_),e.drawImage(t.tex.img,0,0),t.tex.studio&&(t.tex.shade<1&&(e.fillStyle=`rgba(0,0,0,${1-t.tex.shade})`,e.fillRect(0,0,t.tex.img.width,t.tex.img.height)),t.tex.spec>.001&&(e.fillStyle=`rgba(255,237,209,${Math.min(.32,t.tex.spec)})`,e.fillRect(0,0,t.tex.img.width,t.tex.img.height))),e.restore()}};function Xd(){if(!document.querySelector("#world"))return;let s=document.documentElement,t=document.querySelector(".art"),e=document.querySelector("#world"),n=document.querySelector(".portrait-opening")||document.querySelector("#journey"),i=document.querySelector("#portrait"),r=matchMedia("(prefers-reduced-motion: reduce)"),o=()=>r.matches||s.classList.contains("reduced-motion"),a=(U,B,Y)=>{let D=Ne.clamp((Y-U)/(B-U),0,1);return D*D*(3-2*D)},c,l=!1;try{c=new lr({canvas:e,alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{l=!0;try{c=new _r(e)}catch{s.dataset.renderer="static"}}let h=new Fi,u=new ar(-4,4,2.7,-2.7,.1,30);u.position.z=10;let d;c&&!l&&(c.outputColorSpace=ge,c.toneMapping=to,c.toneMappingExposure=1,d=Ra(c,h)),h.add(new fr("#fff5e5","#635446",1.6));let f=new zi("#fff8ee",2.8);f.position.set(-3,6,5),h.add(f);let g=Aa({size:1.85,software:l});h.add(g.group),g.group.rotation.set(.22,-.49,-.05),g.group.traverse(U=>{U.isMesh&&(U.material.transparent=!0)});let _=JSON.parse(document.querySelector("#samples").textContent),m=no(),p=l?448:m==="low"?224:m==="medium"||innerWidth<700?448:896,M=new _e(1,1,1),y=new Ee({color:"#ffffff",metalness:.35,roughness:.48,transparent:!0}),x=new Me(M,y,p);x.instanceMatrix.setUsage(Wn),x.frustumCulled=!1,h.add(x);let A=new I,E=new de,w=new Kt,R=U=>{let B=Math.sin((U+1)*127.1)*43758.5453;return B-Math.floor(B)},S=Array.from({length:p},(U,B)=>{let Y=_[Math.floor(B*_.length/p)],D=Math.ceil(Math.cbrt(p));return{start:new I((B%D/(D-1)-.5)*1.72,(Math.floor(B/D)%D/(D-1)-.5)*1.72,(Math.floor(B/D/D)/(D-1)-.5)*1.72).applyEuler(g.group.rotation),target:new I((Y[0]-.5)*2.85,(.5-Y[1])*3.8,0),color:new Kt(Y[2]),phase:R(B)*Math.PI*2,radius:.8+R(B+9)*.9,height:(R(B+28)-.5)*3.5,speed:.45+R(B+7)*.4}}),v=0,C=0,z=0,k=0,W=!0,$=!0,O=[["Seu neg\xF3cio tem<br>um <em>problema?</em>","Eu transformo em<br>solu\xE7\xE3o digital.","01 / O PONTO DE PARTIDA"],["Separar para<br><em>entender.</em>","Cada parte revela<br>um caminho poss\xEDvel.","02 / INVESTIGA\xC7\xC3O"],["Conectar faz<br><em>tomar forma.</em>","O movimento encontra dire\xE7\xE3o.","03 / CONEX\xC3O"],["Por tr\xE1s da solu\xE7\xE3o,<br><em>Abra\xE3o.</em>","Abra\xE3o Lima Ribeiro<br>Desenvolvedor de solu\xE7\xF5es digitais.","04 / QUEM RESOLVE"]],it=-1;function Z(){let U=v<.24?0:v<.57?1:v<.83?2:3;U!==it&&(it=U,document.querySelector("#headline").innerHTML=O[U][0],document.querySelector("#subline").innerHTML=O[U][1],document.querySelector("#chapter").textContent=O[U][2]),s.style.setProperty("--progress",v),i.style.opacity=a(.82,.97,v),i.setAttribute("aria-hidden",String(v<.83)),i.style.filter=`blur(${(1-a(.8,.96,v))*9}px)`,n.dataset.progress=v.toFixed(3),n.dataset.phase=String(U)}function _t(){let U=n.getBoundingClientRect();C=Ne.clamp(-U.top/(U.height-innerHeight),0,1),$=!0}addEventListener("scroll",_t,{passive:!0});let et=()=>{if(!c)return;let U=t.getBoundingClientRect();c.setPixelRatio(Math.min(devicePixelRatio||1,l?1:innerWidth<700?1.25:1.6)),c.setSize(U.width,U.height,!1),u.left=-2.7*U.width/U.height,u.right=2.7*U.width/U.height,u.updateProjectionMatrix(),$=!0,_t()},ht=new ResizeObserver(et);ht.observe(t),et();function Rt(U){if(z=requestAnimationFrame(Rt),!W||document.hidden)return;let B=Math.min((U-k)/1e3||.016,.06);if(B<(l?1/24:1/60)*.85||(k=U,v=o()?C:Ne.damp(v,C,9,B),Math.abs(v-C)<1e-4&&(v=C),Z(),!c))return;if(o()){if(g.group.visible=v<.5,x.visible=!1,i.style.opacity=v<.5?0:1,!$)return;$=!1,c.render(h,u);return}let Y=a(.12,.43,v),D=a(.53,.78,v),st=a(.83,.98,v);g.group.visible=v<.17,g.group.position.y=Math.sin(U*5e-4)*.025;let mt=1-a(.08,.17,v);g.group.traverse(It=>{It.isMesh&&(It.material.opacity=mt)}),x.visible=v>.17&&v<.985,y.opacity=a(.17,.23,v)*(1-st);let Tt=U*25e-5;if(x.visible)for(let It=0;It<p;It++){let G=S[It],gt=G.phase+Tt*G.speed,N=Math.cos(gt)*G.radius,Ut=G.height+Math.sin(gt*1.65+G.phase)*.32,wt=Math.sin(gt)*.8;E.position.copy(G.start).lerp(A.set(N,Ut,wt),Y).lerp(G.target,D);let q=Math.sin(U*.0017+G.phase)*.14*Y*(1-D);E.position.y+=q;let j=Ne.lerp(.205,l?.1:.088,D);E.scale.setScalar(j*(1-st*.25)),E.rotation.set(gt*(1-D),gt*.8*(1-D),gt*.6*(1-D)),E.updateMatrix(),x.setMatrixAt(It,E.matrix),w.set("#ed790e").lerp(G.color,a(.67,.86,v)),x.setColorAt(It,w)}x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),c.render(h,u),s.dataset.renderer=l?"canvas":"webgl"}z=requestAnimationFrame(Rt);let H=new IntersectionObserver(([U])=>{W=U.isIntersecting,s.dataset.portraitVisible=String(W)});H.observe(n),r.addEventListener("change",()=>{$=!0}),addEventListener("pagehide",U=>{U.persisted||(cancelAnimationFrame(z),ht.disconnect(),H.disconnect(),g.dispose(),M.dispose(),y.dispose(),d?.dispose(),c?.dispose?.())}),_t(),Z()}var qd=s=>Math.max(0,Math.min(1,s)),ki=(s,t,e)=>{let n=qd((e-s)/(t-s));return n*n*(3-2*n)},Ye=(s,t,e)=>s.map((n,i)=>n+(t[i]-n)*e),Hi=[[-2,.65,1.6],[2,.65,.35],[-.35,.65,-2.25]],sv=.43,rv=.61;function hh(s){let t=qd(s),[e,n,i]=Hi,r=Ye(e,n,.36),o=Ye(n,i,.36),a=Ye(i,e,.36),c,l=t<.35?0:t<.7?1:2;if(t<.2)c=Ye(e,r,ki(0,.2,t));else if(t<.3)c=[...r];else if(t<.4){let u=ki(.3,.4,t);c=Ye(r,n,u),c[1]+=Math.sin(u*Math.PI)*1.05}else if(t<.55)c=Ye(n,o,ki(.4,.55,t));else if(t<.65)c=[...o];else if(t<.75){let u=ki(.65,.75,t);c=Ye(o,i,u),c[1]+=Math.sin(u*Math.PI)*1.05}else c=Ye(i,a,ki(.75,.9,t));let h=Ye([0,.3,0],c,.24+ki(.12,.92,t)*.18);return{p:t,phase:l,actor:c,focus:h,blocked:t>=.2&&t<=.3||t>=.55&&t<=.65||t>=.9,yaw:-.45+t*1.3,zoom:1-ki(.08,.95,t)*.24}}function Yd({scene:s,software:t=!1,quality:e="high"}){let n=new $t;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=[],a=et=>(i.add(et),et),c=et=>(r.add(et),et),l=a(new _e(1,1,1)),h=t||e==="low"?l:a(new He(1,1,1,2,.045)),u=c(new Ee({color:"#272824",metalness:.36,roughness:.57})),d=c(new Ee({color:"#111310",metalness:.25,roughness:.72})),f=c(new Ee({color:"#e1d6c3",metalness:.26,roughness:.48})),g=c(new Ee({color:"#635341",metalness:.6,roughness:.46})),_=c(new Re({color:"#fa760d",toneMapped:!1})),m=c(new Re({color:"#7d3e14",toneMapped:!1})),p=c(new Re({color:"#e8ceb0",toneMapped:!1}));function M(et,ht,Rt=u,H=!1){let U=new kt(H?h:l,Rt);return U.position.set(...et),U.scale.set(...ht),n.add(U),U}function y(et,ht,Rt,H){let U=new I(...et),B=new I(...ht),Y=B.clone().sub(U),D=M(U.clone().add(B).multiplyScalar(.5).toArray(),[Rt,Y.length(),Rt],H);return D.quaternion.setFromUnitVectors(new I(0,1,0),Y.normalize()),D}M([0,-.34,-.2],[6.8,.28,6.2],d,!0).renderOrder=-20,M([0,-.5,-.2],[7.05,.08,6.45],u).renderOrder=-21;let x=new Me(l,u,t||e==="low"?32:80),A=new de;n.add(x),x.renderOrder=-19;for(let et=0;et<x.count;et++){let ht=(et%10-4.5)*.64,Rt=(Math.floor(et/10)-3.5)*.7;A.position.set(ht,-.16,Rt),A.scale.set(.61,.025,.67),A.updateMatrix(),x.setMatrixAt(et,A.matrix)}let E=[];for(let et=0;et<3;et++){let[ht,,Rt]=Hi[et];M([ht,.04,Rt],[1.56,.34,1.5],u,!0),M([ht,.23,Rt],[1.38,.1,1.31],g),M([ht,.32,Rt],[1.26,.1,1.18],d,!0),M([ht,.39,Rt],[1.1,.045,.99],f,!0);for(let B=0;B<(t||e==="low"?3:6);B++)M([ht-.43+B*.17,.48,Rt-.38],[.055,.17,.16],u);M([ht,.5,Rt+.45],[.92,.035,.025],m);let H=M([ht,.505,Rt+.45],[.6,.04,.032],_);E.push(H);let U=[.9,1.35,1.08][et];M([ht+.48,.4+U/2,Rt-.38],[.28,U,.3],u,!0),M([ht+.48,.42+U,Rt-.38],[.24,.025,.24],f);for(let B=0;B<3;B++)M([ht+.48,.65+B*.21,Rt-.212],[.15,.025,.012],B===et?_:g)}let w=[],R=[];for(let et=0;et<3;et++){let ht=Hi[et],Rt=Hi[(et+1)%3],H=new I(...Rt).sub(new I(...ht)).normalize(),U=new I(-H.z,0,H.x);for(let[st,mt]of[[.12,sv],[rv,.88]]){for(let G of[-1,1]){let gt=new I(...Ye(ht,Rt,st)).addScaledVector(U,G*.15),N=new I(...Ye(ht,Rt,mt)).addScaledVector(U,G*.15);gt.y=N.y=.39,y(gt.toArray(),N.toArray(),.075,u),gt.y=N.y=.438,y(gt.toArray(),N.toArray(),.018,st===.12?_:m)}let Tt=Ye(ht,Rt,st),It=Ye(ht,Rt,mt);Tt[1]=It[1]=.35,y(Tt,It,.16,g)}for(let st of[.21,.78]){let mt=Ye(ht,Rt,st);M([mt[0],.03,mt[2]],[.18,.6,.18],u)}let B=Ye(ht,Rt,.48),Y=M([B[0],.79,B[2]],[.035,.68,.52],u,!0);Y.rotation.y=-Math.atan2(H.z,H.x),w.push(Y);let D=M([B[0]-.018,.81,B[2]],[.018,.49,.025],_);D.rotation.y=Y.rotation.y,R.push(D);for(let st=0;st<3;st++){let mt=Ye(ht,Rt,.49+st*.035);M([mt[0],.2-st*.12,mt[2]],[.07,.07,.07],st===0?g:u)}}for(let[et,ht,Rt]of[[-2.9,-1.1,.8],[2.8,1.9,.65],[1.6,-2.9,.5]]){M([et,Rt/2-.14,ht],[.55,Rt,.7],u,!0);for(let H=0;H<3;H++)M([et-.16+H*.16,Rt-.12,ht+.355],[.045,.12,.014],f)}for(let et=0;et<4;et++)M([-2.6+et*.16,-.135,2.6],[.07,.02,.14],et===0?_:g);let S=t||e==="low"?12:24,v=new Me(l,_,S);if(v.frustumCulled=!1,n.add(v),!t){let et=document.createElement("canvas");et.width=et.height=64;let ht=et.getContext("2d"),Rt=ht.createRadialGradient(32,32,0,32,32,32);Rt.addColorStop(0,"rgba(255,110,15,.32)"),Rt.addColorStop(1,"rgba(255,110,15,0)"),ht.fillStyle=Rt,ht.fillRect(0,0,64,64);let H=new Ue(et);o.push(H);let U=c(new Re({map:H,transparent:!0,depthWrite:!1,toneMapped:!1})),B=a(new Ce(2.7,2.7));for(let Y of Hi){let D=new kt(B,U);D.position.set(Y[0],-.115,Y[2]),D.rotation.x=-Math.PI/2,n.add(D)}}let C=document.querySelector(".cinematic-flow"),z=[...C?.querySelectorAll(".film-act")||[]],k=[...C?.querySelectorAll("[data-island]")||[]],W=-1,$=-1,O=0,it=new I;function Z(et,ht,Rt){let H=hh(et);n.visible=!0;let U=S/3;for(let B=0;B<S;B++){let Y=Math.floor(B/U),D=Y===H.phase,st=((D?ht*12e-5:0)+B%U/U)%1*.38,mt=Hi[Y],Tt=Hi[(Y+1)%3],It=Ye(mt,Tt,st),G=ki(.3,.38,st),gt=.065*(D?1:.35)*(1-G*.85);A.position.set(It[0],.52,It[2]),A.rotation.set(0,ht*2e-4+B,0),A.scale.set(gt,.025,gt),A.updateMatrix(),v.setMatrixAt(B,A.matrix)}return v.instanceMatrix.needsUpdate=!0,w.forEach((B,Y)=>{B.position.y=.79+(Y===H.phase?Math.sin(ht*.0018)*.025:0)}),R.forEach((B,Y)=>{B.visible=Y===H.phase,B.scale.y=H.blocked?.44+Math.sin(ht*.004)*.06:.28}),E.forEach((B,Y)=>{B.scale.x=Y===H.phase?.6+Math.sin(ht*.002)*.09:.3}),C&&(C.dataset.rendered="true",C.dataset.cinemaPhase=String(H.phase),C.dataset.cinemaProgress=H.p.toFixed(3),C.dataset.cinemaBlocked=String(H.blocked),W!==H.phase&&(W=H.phase,z.forEach((B,Y)=>B.dataset.active=String(Y===H.phase))),($!==et||O!==Rt.aspect)&&(Rt.updateMatrixWorld(),$=et,O=Rt.aspect,k.forEach((B,Y)=>{let D=Hi[Y];it.set(D[0],1.95,D[2]).project(Rt),B.style.left=(it.x*.5+.5)*100+"%",B.style.top=(-it.y*.5+.5)*100+"%",B.style.opacity=it.z<1&&Math.abs(it.x)<.85?"1":"0"}))),H}function _t(){s.remove(n),i.forEach(et=>et.dispose()),r.forEach(et=>et.dispose()),o.forEach(et=>et.dispose())}return{group:n,update:Z,dispose:_t}}var uh=(s,t=0,e=1)=>Math.max(t,Math.min(e,s)),Qn=(s,t,e)=>{let n=uh((e-s)/(t-s));return n*n*n*(n*(n*6-15)+10)};function Ca(s,t=4){let e=uh(Number.isFinite(s)?s:0),n=uh((e-.055)/.91,0,1)*t,i=Math.min(t-1,Math.floor(n)),r=n-i;return{p:e,time:n,index:i,local:r,dock:Qn(.19,.64,r),cameraDock:Qn(.19,.64,r)*(1-Qn(.87,1,r)),phase:r<.24?0:r<.7?1:2,entrance:Qn(0,.075,e),finish:Qn(.95,1,e),pulse:Math.sin(Math.PI*Qn(.48,.76,r))}}function Zd(s,t){let e=s-t,n=Math.max(0,-e),i=Qn(0,.19,e),r=Qn(.19,.64,e),o=n*1.75,a=[1.35*Math.cos(o)-1.5*Math.sin(o),3.1+Math.sin(n*1.2)*.65+n*.05,-1.25-n*.65],c=[-.1,3.12,1.35];return{t:e,dock:r,visible:e<.64,position:a.map((l,h)=>l+(c[h]-l)*i),scale:.79/(1+n*.12)+(1-.79/(1+n*.12))*i,yaw:(-.24-n*.08)*(1-i)+.09*i,roll:(.055+n*.025)*(1-i)}}function $d({scene:s,software:t=!1,quality:e="medium"}){let n=new $t;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=new Set,a=t||e==="low",c=document.querySelector("[data-notebook-stage]"),l=c.querySelector(".notebook-world"),h=[...c.querySelectorAll("[data-project-screen]")],u=ot=>(i.add(ot),ot),d=(ot,ct=!1)=>{let Nt=ct?new Re(ot):new Ee({roughness:.38,metalness:.65,...ot});return r.add(Nt),Nt},f=d({color:"#53534e",roughness:.32,metalness:.85}),g=d({color:"#a8a79e",roughness:.23,metalness:.88}),_=d({color:"#20221f",roughness:.5}),m=d({color:"#10120f",roughness:.7}),p=d({color:"#ed791d",roughness:.3,metalness:.56}),M=d({color:"#f18c36",toneMapped:!1},!0),y=u(a?new _e(1,1,1):new He(1,1,1,2,.035)),x=u(new _e(1,1,1)),A=u(new Ce(4.22,2.6375,a?8:12,a?5:8));function E(ot,ct,Nt,nt,Et=n,L=!1){let Ct=new kt(L?x:y,nt);return Ct.scale.set(ot,ct,Nt),Et.add(Ct),Ct}function w(ot,ct,Nt){let nt=new Me(y,ct,ot);return nt.frustumCulled=!1,Nt.add(nt),nt}let R=new de;function S(ot,ct,Nt,nt,Et,L,Ct,V){R.position.set(Nt,nt,Et),R.rotation.set(0,0,0),R.scale.set(L,Ct,V),R.updateMatrix(),ot.setMatrixAt(ct,R.matrix)}let v=new $t;n.add(v),E(4.88,.16,3.22,f,v).position.set(0,-.94,.72);let C=E(4.75,.045,3.08,g,v);C.position.set(0,-.847,.7),C.renderOrder=1;let z=E(4.65,.025,2.94,f,v);z.position.set(0,-.817,.7),z.renderOrder=2;let k=E(4.4,.018,1.49,m,v);k.position.set(0,-.796,.24),k.renderOrder=3;let W=w(65,_,v);W.renderOrder=4;for(let ot=0;ot<5;ot++)for(let ct=0;ct<13;ct++)S(W,ot*13+ct,-1.91+ct*.319,-.775,-.32+ot*.272,.278,.038,.222);let $=E(1.7,.024,.18,_,v);$.position.set(0,-.765,.98),$.renderOrder=4;let O=E(1.64,.012,.83,g,v);O.position.set(0,-.789,1.67),O.renderOrder=3;let it=E(1.59,.015,.78,f,v);it.position.set(0,-.777,1.67),it.renderOrder=4;let Z=w(a?16:32,m,v);Z.renderOrder=4;for(let ot=0;ot<Z.count;ot++){let ct=ot<Z.count/2?-1:1,Nt=ot%(Z.count/2);S(Z,ot,ct*2.3,-.78,-.35+Nt*(1.35/(Z.count/2)),.022,.008,.035)}for(let ot of[-1.58,1.58])E(.76,.18,.2,_,v).position.set(ot,-.78,-.78);for(let ot of[-2.446,2.446])for(let ct of[.05,.5])E(.008,.05,.23,m,v).position.set(ot,-.94,ct);E(.065,.026,.016,M,v).position.set(2.14,-.91,2.337),E(1.1,.018,.014,_,v).position.set(0,-.87,2.34);let _t=new $t;_t.position.set(0,-.76,-.78),_t.rotation.x=-.105,v.add(_t);let et=E(4.88,3.05,.105,f,_t);et.position.y=1.51,et.renderOrder=5;let ht=E(4.74,2.92,.024,g,_t);ht.position.set(0,1.52,.065),ht.renderOrder=6;let Rt=E(4.68,2.86,.025,m,_t);Rt.position.set(0,1.52,.084),Rt.renderOrder=7;let H=d({color:"#171b16",toneMapped:!1},!0),U=document.createElement("canvas");U.width=768,U.height=480;let B=U.getContext("2d");B.fillStyle="#171b16",B.fillRect(0,0,768,480),B.fillStyle="#e6ded0",B.font="500 40px Arial",B.fillText("dev.abraao",66,209),B.fillStyle="#f58a2b",B.fillRect(68,244,48,2),B.font="10px Arial",B.fillText("O PROBLEMA ENCONTRA SEU CAMINHO.",68,282);let Y=new Ue(U);Y.colorSpace=ge,o.add(Y),H.map=Y,H.color.set("#ffffff");let D=new kt(A,H);D.position.set(0,1.53,.105),D.renderOrder=8,_t.add(D);let st=new de;st.position.copy(D.position),st.position.z-=.055,_t.add(st);let mt=E(.045,.023,.006,_,_t);mt.position.set(0,2.913,.103),mt.renderOrder=8;for(let ot=0;ot<9;ot++){let ct=E(.009,.025,.005,ot===8?p:g,_t);ct.position.set(-.09+ot*.021,.095,.104),ct.renderOrder=8}let Tt=d({color:"#e48639",transparent:!0,opacity:.08,toneMapped:!1},!0),It=E(4.35,.018,.016,Tt,_t);It.position.set(0,.175,.112),It.renderOrder=9;let G=document.createElement("canvas");G.width=G.height=64;let gt=G.getContext("2d"),N=gt.createRadialGradient(32,32,0,32,32,32);N.addColorStop(0,"#25221990"),N.addColorStop(1,"#25221900"),gt.fillStyle=N,gt.fillRect(0,0,64,64);let Ut=new Ue(G);o.add(Ut);let wt=new kt(u(new Ce(6.4,4.5)),d({map:Ut,transparent:!0,depthWrite:!1},!0));wt.rotation.x=-Math.PI/2,wt.position.set(0,-1.125,.5),n.add(wt),wt.renderOrder=-7;let q=h.map((ot,ct)=>{let Nt=new $t;n.add(Nt);let nt=d({color:ct===0?"#d88034":"#a3a093",roughness:.32,metalness:.7}),Et=E(4.34,2.76,.065,nt,Nt),L=E(4.27,2.69,.022,m,Nt);L.position.z=.039;let Ct=d({color:"#f4f0e8",toneMapped:!1},!0),V=new kt(A,Ct);V.position.z=.055,Nt.add(V);let ut=E(.22,.06,.016,p,Nt);return ut.position.set(-1.9,1.405,.01),{board:Nt,frame:Et,inset:L,face:V,tab:ut,faceMat:Ct,border:nt,texture:null,el:ot}}),j=0;n.traverse(ot=>{ot.isMesh&&j++}),c.dataset.notebookMeshes=String(j);let St=new I,rt=new an,T=new an,b=new dn,X=new I,pt=new I,At=new I,at=-1,vt=!1,xt=!1,bt=0;function zt(ot,ct){let Nt=document.createElement("canvas");Nt.width=a?768:1024,Nt.height=Nt.width/1.6;let nt=Nt.getContext("2d");if(ct!=="nexa")nt.drawImage(ot,0,0,ot.width,Math.min(ot.height,ot.width/1.6),0,0,Nt.width,Nt.height);else{let Ct=function(V,ut){let[F,tt,Pt]=V,[Ht,Mt,Dt]=ut,Wt=F[0]*(tt[1]-Pt[1])+tt[0]*(Pt[1]-F[1])+Pt[0]*(F[1]-tt[1]),Jt=yt=>[(Ht[yt]*(tt[1]-Pt[1])+Mt[yt]*(Pt[1]-F[1])+Dt[yt]*(F[1]-tt[1]))/Wt,(Ht[yt]*(Pt[0]-tt[0])+Mt[yt]*(F[0]-Pt[0])+Dt[yt]*(tt[0]-F[0]))/Wt,(Ht[yt]*(tt[0]*Pt[1]-Pt[0]*tt[1])+Mt[yt]*(Pt[0]*F[1]-F[0]*Pt[1])+Dt[yt]*(F[0]*tt[1]-tt[0]*F[1]))/Wt],ae=Jt(0),te=Jt(1);nt.save(),nt.beginPath(),nt.moveTo(...Ht),nt.lineTo(...Mt),nt.lineTo(...Dt),nt.closePath(),nt.clip(),nt.transform(ae[0],te[0],ae[1],te[1],ae[2],te[2]),nt.drawImage(ot,0,0),nt.restore()},L=[[188,38],[735,38],[749,375],[177,375]].map(([V,ut])=>[V/1100*ot.width,ut/434*ot.height]);Ct([L[0],L[1],L[2]],[[0,0],[Nt.width,0],[Nt.width,Nt.height]]),Ct([L[0],L[2],L[3]],[[0,0],[Nt.width,Nt.height],[0,Nt.height]])}let Et=new Ue(Nt);return Et.colorSpace=ge,Et.anisotropy=a?1:4,o.add(Et),Et}function Q(){xt||vt||(xt=!0,q.forEach(ot=>{let ct=new Image;ct.decoding="async",ct.onload=()=>{vt||(ot.texture=zt(ct,ot.el.dataset.projectKind),ot.faceMat.map=ot.texture,ot.faceMat.needsUpdate=!0,c.dataset.screensReady=String(++bt))},ct.onerror=()=>{c.dataset.screenError="true"},ct.src=ot.el.dataset.projectScreen}))}let ft=new IntersectionObserver(ot=>{ot.some(ct=>ct.isIntersecting)&&(Q(),ft.disconnect())},{rootMargin:"1200px"});ft.observe(l);function Ot(ot,ct,Nt){Q();let nt=Ca(ot,q.length),Et=innerWidth<=700;n.rotation.y=.07-Math.sin(nt.p*Math.PI)*.07,n.position.y=-.12+nt.entrance*.12,v.rotation.y=Math.sin(nt.local*Math.PI)*.025,_t.rotation.x=-.105-Math.sin(nt.local*Math.PI)*.025,s.updateMatrixWorld(!0),st.getWorldPosition(X),st.getWorldQuaternion(rt);let L=.012*Math.sin(ct*75e-5);q.forEach((V,ut)=>{let F=Zd(nt.time,ut);if(V.board.visible=F.visible,!F.visible)return;let tt=30-(ut-nt.index)*4;V.frame.renderOrder=tt,V.inset.renderOrder=tt+1,V.face.renderOrder=tt+2,V.tab.renderOrder=tt+2,St.set(...F.position),St.y+=L*(1-F.dock),Et&&(St.x*=.72);let Pt=n.worldToLocal(X.clone());pt.copy(St).add(new I(-.4,.2,0)),At.copy(Pt).add(new I(.25,.72,1.1));let Ht=F.dock,Mt=1-Ht;V.board.position.copy(St).multiplyScalar(Mt**3).addScaledVector(pt,3*Mt*Mt*Ht).addScaledVector(At,3*Mt*Ht*Ht).addScaledVector(Pt,Ht**3),b.set(.035,F.yaw,F.roll),T.setFromEuler(b);let Dt=n.quaternion.clone().invert().multiply(rt);V.board.quaternion.copy(T).slerp(Dt,Ht),V.board.scale.setScalar(F.scale+(1-F.scale)*Ht);let Wt=1-Qn(.76,1,Ht);V.frame.material.transparent=!0,V.frame.material.opacity=Wt,V.inset.visible=Wt>.01,V.tab.visible=Wt>.2});let Ct=nt.dock>.998?nt.index:Math.max(0,nt.index-1);return q[Ct].texture&&(at!==Ct||D.material.map!==q[Ct].texture)&&(D.material=q[Ct].faceMat,at=Ct),nt.index===0&&nt.dock<=.998&&(D.material=H,at=-1),D.visible=!0,Tt.opacity=.12+nt.pulse*.7,l.dataset.rendered="true",c.dataset.docking=nt.dock.toFixed(3),nt}return{group:n,update:Ot,dispose(){vt=!0,ft.disconnect(),s.remove(n),n.traverse(ot=>{ot.isInstancedMesh&&ot.dispose()}),i.forEach(ot=>ot.dispose()),r.forEach(ot=>ot.dispose()),o.forEach(ot=>ot.dispose())}}}var dh=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0));function ov(s,t=6){let e=dh(s),n=Math.max(1,Math.floor(t)||1),i=Math.min(n-1,Math.floor(e*n)),r=e===1?1:e*n-i;return{index:i,local:r,beat:r<.26?0:r<.53?1:2,builds:[-.1,.26,.53].map(o=>{let a=dh((r-o)/.18);return a*a*(3-2*a)})}}var In=(s,t,e)=>{let n=dh((e-s)/(t-s));return n*n*n*(n*(n*6-15)+10)};function Jd(s){let t=ov(s),e=t.local,n=t.index<5?In(.84,1,e):0,i=t.index+n,r=In(.04,.76,e);return{...t,travel:n,focus:i,x:i*14,yaw:(.44-r*.68)*(1-n)+.44*n,zoom:(1-In(.1,.51,e)*.17)*(1-n)+n,assemble:In(.025,.43,e),connect:In(.25,.69,e),resolve:In(.52,.78,e),copyOpacity:In(0,.07,e)*(1-In(.84,.98,e))}}function Kd({scene:s,software:t=!1,quality:e="medium"}){let n=new $t;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=new Set,a=[],c=t||e==="low",l=document.querySelector(".solutions-world"),h=H=>(i.add(H),H),u=(H,U=!1)=>{let B=U?new Re(H):new Ee({roughness:.37,metalness:.68,...H});return r.add(B),B},d=u({color:"#454b40"}),f=u({color:"#b6a382",roughness:.28,metalness:.8}),g=u({color:"#171e18",roughness:.6}),_=u({color:"#d1742b",roughness:.3,metalness:.75}),m=u({color:"#ffa04a",toneMapped:!1},!0),p=u({color:"#b98245",toneMapped:!1,transparent:!0,opacity:.25},!0),M=h(c?new _e(1,1,1):new He(1,1,1,2,.045)),y=h(new Ce(1,1,c?2:8,c?2:5)),x=h(new Kn(1,c?10:18,c?7:12)),A=h(new Bi(1,.012,c?3:5,c?32:64)),E=new de;function w(H,U,B,Y,D){let st=new kt(M,Y);return st.scale.set(H,U,B),D.add(st),st}function R(H,U,B=p){let Y=new kt(A,B);return Y.scale.setScalar(H),U.add(Y),Y}function S(H,U,B,Y,D,st,mt,Tt){E.position.set(B,Y,D),E.scale.set(st,mt,Tt),E.rotation.set(0,0,0),E.updateMatrix(),H.setMatrixAt(U,E.matrix)}function v(H,U,B,Y,D,st,mt){H.fillStyle=mt,H.beginPath(),H.roundRect(U,B,Y,D,st),H.fill()}function C(H,U,B,Y,D=18,st="#e6e0d0",mt=!1){H.fillStyle=st,H.font=`${mt?700:400} ${D}px Arial`,H.fillText(U,B,Y)}function z(H,U,B,Y,D="#464b3f"){H.fillStyle=D,H.fillRect(U,B,Y,1)}function k(H,U,B=""){let Y=document.createElement("canvas");Y.width=H==="main"?1024:640,Y.height=H==="main"?640:380;let D=Y.getContext("2d"),st=Y.width,mt=Y.height;if(v(D,0,0,st,mt,16,"#162019"),D.strokeStyle="#77674c",D.lineWidth=2,D.strokeRect(1,1,st-2,mt-2),H==="main"){v(D,0,0,st,53,12,"#293025"),[0,1,2].forEach(G=>{D.fillStyle=G?"#766b56":"#ef984b",D.beginPath(),D.arc(29+G*19,27,4,0,7),D.fill()}),v(D,350,17,320,22,5,"#151e17"),C(D,"seunegocio.com.br",440,33,12,"#aea891"),C(D,"seu.neg\xF3cio",55,108,28,"#f1ebdc",!0),C(D,"UM PR\xD3XIMO PASSO.",56,163,12,"#e79b58"),C(D,"Uma boa ideia",55,231,48,"#f3eddf",!0),C(D,"ganha presen\xE7a.",55,287,48,"#ed9b52",!0),C(D,"Clareza para entender. Um caminho para agir.",57,335,18,"#a9b19f"),v(D,55,370,235,48,7,"#de883d"),C(D,"Vamos conversar  \u2197",81,401,18,"#152018",!0);let It=D.createLinearGradient(660,150,850,440);It.addColorStop(0,"#d4914b"),It.addColorStop(1,"#694324"),D.fillStyle=It,D.beginPath(),D.arc(789,282,125,0,7),D.fill(),D.strokeStyle="#f2c99b",D.lineWidth=2,D.beginPath(),D.ellipse(789,282,145,39,-.45,0,7),D.stroke();for(let G=0;G<3;G++)v(D,55+G*310,481,285,110,8,"#263027"),C(D,["Seu neg\xF3cio","Sua hist\xF3ria","Seu pr\xF3ximo passo"][G],75+G*310,520,18,"#e5deca",!0),z(D,75+G*310,545,185,"#7c785e"),z(D,75+G*310,561,140,"#535d4b")}else if(H==="dashboard"){v(D,0,0,st,mt,12,"#e8e2d4"),v(D,0,0,125,mt,12,"#1d291f"),C(D,"opera\xE7\xE3o",18,40,21,"#f0e8d5",!0),["Vis\xE3o geral","Clientes","Pedidos","Relat\xF3rios"].forEach((It,G)=>{G||v(D,11,72,103,30,4,"#d58a43"),C(D,It,23,93+G*53,13,G?"#aab29d":"#122015",!G)}),C(D,"A rotina, conectada.",151,44,25,"#202b20",!0),["CLIENTES","PEDIDOS","EQUIPE"].forEach((It,G)=>{v(D,150+G*158,68,145,68,6,"#d6d4c3"),C(D,It,164+G*158,91,10,"#75745e"),C(D,["Organizados","Em dia","No mesmo fluxo"][G],164+G*158,117,14,"#293226",!0)}),C(D,"PEDIDOS EM ANDAMENTO",153,170,11,"#686b55");for(let It=0;It<4;It++){let G=204+It*43;C(D,["Pedido recebido","Dados conferidos","Em prepara\xE7\xE3o","Pronto para seguir"][It],153,G,15,"#343c2e"),v(D,486,G-17,121,24,4,It===3?"#c99155":"#d8d5c6"),C(D,["Recebido","Conferido","Em andamento","Conclu\xEDdo"][It],498,G,10,"#5c492f"),z(D,153,G+14,454,"#c8c6b5")}}else C(D,"dev.abraao / SOLU\xC7\xD5ES",34,42,11,"#b6a480"),z(D,34,63,st-68,"#605c46"),C(D,U,34,128,H==="module"?U.length>18?35:52:U.length>24?24:30,"#f1e7d2",!0),C(D,B,34,169,16,"#a8b19c"),H==="code"?["quando uma mensagem chegar","  \u2192 conferir os dados","  \u2192 registrar o pedido","  \u2192 enviar a confirma\xE7\xE3o"].forEach((It,G)=>C(D,It,35,218+G*30,16,G===3?"#f0a05a":"#a7b99d")):H==="answer"?(v(D,32,200,st-64,128,7,"#29392a"),C(D,"PR\xD3XIMO PASSO",49,229,11,"#e5a15e"),C(D,"Organizar a informa\xE7\xE3o.",49,267,23,"#f0e6ce",!0),C(D,"A decis\xE3o continua com voc\xEA.",49,300,15,"#acb89b")):H==="module"?[0,1,2].forEach(It=>{v(D,33,204+It*43,st-66,31,5,It===2?"#b97936":"#304330"),C(D,["CONTEXTO","FLUXO","PRONTO PARA SEGUIR"][It],49,225+It*43,12,It===2?"#fff1d3":"#bfc6ae")}):(v(D,33,207,st-66,89,7,"#283a2b"),C(D,"Informa\xE7\xE3o conectada",50,243,20,"#dcdcc4",!0),C(D,"Tudo segue no mesmo caminho.",50,274,15,"#a6b79b"),D.fillStyle="#e99546",D.fillRect(34,mt-29,st-68,3));let Tt=new Ue(Y);return Tt.colorSpace=ge,Tt.anisotropy=c?1:4,o.add(Tt),Tt}function W(H,U,B,Y,D,st){let mt=new $t;st.add(mt);let Tt=w(H+.1,U+.1,.1,f,mt);Tt.renderOrder=5;let It=w(H+.045,U+.045,.04,g,mt);It.position.z=.065,It.renderOrder=6;let G=u({color:"#ffffff",map:k(B,Y,D),toneMapped:!1},!0),gt=new kt(y,G);gt.scale.set(H,U,1),gt.position.z=.092,gt.renderOrder=8,mt.add(gt);let N=w(.45,.025,.035,m,mt);return N.position.set(-H/2+.36,U/2+.07,.03),N.renderOrder=9,mt}function $(H,U,B,Y=2.12){return W(Y,Y*.59375,"module",H,U,B)}function O(H,U,B,Y=.6){let D=new I(...H),st=new I(...U),mt=D.clone().lerp(st,.5);mt.z+=Y,mt.y+=.24;let Tt=new hr(D,mt,st),It=new kt(h(new mi(Tt,c?12:24,.018,c?3:5,!1)),_);It.renderOrder=2,B.add(It);let G=new kt(x,m);return G.scale.setScalar(.065),B.add(G),{mesh:It,path:Tt,packet:G}}function it(H){let U=new $t;U.position.x=H*14,n.add(U);let B=w(9,.07,5,g,U);B.position.set(0,-1.75,-.1),B.renderOrder=-10,w(8.3,.012,.035,p,U).position.set(0,-1.7,2.2);let D=R(2.9,U,p);D.rotation.x=-Math.PI/2,D.position.y=-1.69,D.renderOrder=-5;let st=new Me(M,f,c?12:24);U.add(st);for(let Tt=0;Tt<st.count;Tt++){let It=Tt/st.count*Math.PI*2;S(st,Tt,Math.cos(It)*3.02,-1.69,Math.sin(It)*2.1,.035,.018,.1)}let mt={g:U,items:[],wires:[],rings:[D]};return a.push(mt),mt}function Z(H,U,B,Y,D,st=0,mt=0,Tt=0){return U.userData.pose={x:B,y:Y,z:D,order:st,rx:mt,ry:Tt},H.items.push(U),U}{let H=it(0),U=W(5.55,3.47,"main","","",H.g);Z(H,U,-.35,.15,-.35,0,0,.08);let B=W(1.05,2.1,"module","Seu neg\xF3cio","Feito para conectar.",H.g);Z(H,B,2.35,-.56,1.1,2,-.03,-.18);let Y=$("PRESEN\xC7A","Um caminho claro para o cliente.",H.g,2.25);Z(H,Y,-2.2,1.58,.95,1,.02,.13);let D=O([1.5,-1.5,.1],[2.35,-.7,1],H.g,.2);H.wires.push(D)}{let H=it(1),U=W(5.65,3.36,"dashboard","","",H.g);Z(H,U,0,.2,-.2,0,0,-.08);let B=$("PEDIDO ORGANIZADO","Do atendimento \xE0 opera\xE7\xE3o.",H.g,2.5);Z(H,B,-1.95,-.63,1.25,1,.05,.15);let Y=$("EQUIPE CONECTADA","A mesma informa\xE7\xE3o para todos.",H.g,2.35);Z(H,Y,2.2,1.28,.65,2,-.02,-.15),H.wires.push(O([-2,-.9,1.1],[1.3,-1.1,.15],H.g,.35))}{let H=it(2),U=[[-2.35,.85,-.35],[-.6,1.15,-.85],[1.6,.55,-.25],[2.15,-1,1.15]];["MENSAGEM","CONFERIR","REGISTRAR","CONFIRMAR"].forEach((Y,D)=>{let st=$(Y,["O cliente inicia.","O contexto \xE9 verificado.","O pedido encontra seu lugar.","A resposta chega ao cliente."][D],H.g,1.85);Z(H,st,...U[D],D,.02,(D-1.5)*-.09),D&&H.wires.push(O(U[D-1],U[D],H.g,.7))});let B=W(2.75,1.64,"code","UMA REGRA. UM CAMINHO.","O trabalho segue entre as etapas.",H.g);Z(H,B,-1.5,-.95,1.3,2,.03,.18)}{let H=it(3),U=new kt(h(new ur(.68,c?0:1)),_);H.g.add(U),Z(H,U,0,.15,.1,0);for(let D=0;D<3;D++){let st=R(1.05+D*.22,H.g,D===1?m:p);st.rotation.set(.4+D*.8,.5+D*.6,.1),H.rings.push(st)}let B=[[-2.1,.9,-.15],[1.8,1.22,-.65],[-2.05,-.95,.85]];["DOCUMENTOS","HIST\xD3RICO","SEU PROCESSO"].forEach((D,st)=>{let mt=$(D,"Informa\xE7\xE3o com o contexto certo.",H.g,1.75);Z(H,mt,...B[st],st,.02,st===1?-.15:.16),H.wires.push(O(B[st],[0,.15,.1],H.g,.5))});let Y=W(2.85,1.69,"answer","INFORMA\xC7\xC3O QUE AJUDA A AGIR","Uma resposta nasce do contexto.",H.g);Z(H,Y,1.65,-.85,1.1,3,0,-.14)}{let H=it(4),U=new $t;H.g.add(U),Z(H,U,0,0,.1,0),w(1.2,1.75,.65,d,U),w(1.29,1.84,.12,f,U).position.z=-.27,$("CONECTAR","A informa\xE7\xE3o continua.",U,1.6).position.set(0,0,.43);for(let st=0;st<5;st++)w(.045,.13,.03,m,U).position.set(-.43+st*.215,-1.02,.36);let Y=[[-2.5,1,-.65],[.15,1.8,-.85],[2.6,.95,-.45],[-2.5,-.9,.9],[.15,-1.45,1.2],[2.55,-.85,1]];["ATENDIMENTO","CLIENTES","VENDAS","FINANCEIRO","PEDIDOS","ESTOQUE"].forEach((st,mt)=>{let Tt=$(st,"Dados no mesmo fluxo.",H.g,1.62);Z(H,Tt,...Y[mt],1+mt*.2,0,(mt%3-1)*-.16),H.wires.push(O([0,.05,.28],Y[mt],H.g,.7))});let D=R(2.25,H.g,p);D.rotation.x=1.1,D.position.set(0,-.1,0),H.rings.push(D)}{let H=it(5);w(5.6,3.5,.1,d,H.g).position.set(0,.15,-.55);let B=[[-1.73,.64,0],[.2,.64,.1],[2.02,.64,.05],[-1.35,-.83,.55],[1.25,-.83,.65]];["ATENDIMENTO","OPERA\xC7\xC3O","AUTOMA\xC7\xC3O","INFORMA\xC7\xC3O","EVOLU\xC7\xC3O"].forEach((D,st)=>{let mt=st<3?1.65:2.35,Tt=$(D,"Constru\xEDdo para o seu cen\xE1rio.",H.g,mt);Z(H,Tt,...B[st],st*.6,0,(st-2)*.025)});let Y=$("SEU NEG\xD3CIO","Cada parte tem um motivo.",H.g,2.3);Z(H,Y,.75,1.7,1.05,3,-.04,-.13);for(let D=0;D<4;D++)H.wires.push(O(B[D],B[D+1],H.g,.15))}let _t=new Me(x,p,c?18:40);n.add(_t);let et=new I,ht=0;n.traverse(H=>{H.isMesh&&ht++}),l.dataset.cinemaMeshes=ht,a.forEach(H=>H.rings.forEach(U=>U.userData.rest=U.rotation.toArray().slice(0,3)));function Rt(H,U,B){let Y=Jd(H),D=innerWidth<=700,st=B.aspect,mt=new I(Y.x,.1,.05),It=Math.max(6.25,(D?8.5:8.1)/st)*(1-(1-Y.zoom)*.7)/(2*Math.tan(Ne.degToRad(B.fov/2))),G=Y.yaw*(D?.7:1);B.position.set(Math.sin(G)*It,1.25+It*.12,Math.cos(G)*It).add(mt),B.lookAt(mt),B.updateProjectionMatrix(),a.forEach((gt,N)=>{if(gt.g.visible=Math.abs(N-Y.focus)<1.06,!gt.g.visible)return;let Ut=N===Y.index?Y.local:N>Y.index?0:1,wt=In(.025,.43,Ut),q=In(.25,.69,Ut);gt.items.forEach((j,St)=>{let rt=j.userData.pose,T=In(.02+rt.order*.045,.43+rt.order*.045,Ut),b=1-T;j.position.set(rt.x+b*(St%2?2.3:-2.3),rt.y+b*(1.45+rt.order*.2),rt.z-b*(2.6+rt.order*.3)),j.rotation.set(rt.rx+b*.18,rt.ry+b*(St%2?.5:-.5),b*(St%2?.09:-.09)),j.scale.setScalar(.76+T*.24),N===3&&St===0&&(j.rotation.y=U*12e-5,j.rotation.z=U*8e-5)}),gt.wires.forEach((j,St)=>{j.mesh.scale.setScalar(Math.max(.001,q)),j.mesh.visible=q>.02,j.packet.visible=q>.7,j.path.getPoint((U*18e-5+St*.17)%1,et),j.packet.position.copy(et),j.packet.scale.setScalar(.045+Y.resolve*.025)}),gt.rings.forEach((j,St)=>{if(St){let rt=j.userData.rest;j.rotation.set(rt[0],rt[1]+U*4e-5,rt[2]+U*6e-5)}})});for(let gt=0;gt<_t.count;gt++){let N=Y.x+Math.sin(gt*23.4)*5.5,Ut=Math.sin(gt*5.1+U*1e-4)*2.4,wt=Math.cos(gt*6.8)*3.8-1;S(_t,gt,N,Ut,wt,.012,.012,.012)}return _t.instanceMatrix.needsUpdate=!0,l.dataset.rendered="true",l.dataset.cameraShot=Y.index,l.dataset.cameraTravel=Y.travel.toFixed(3),Y}return{group:n,update:Rt,dispose(){s.remove(n),n.traverse(H=>{H.isInstancedMesh&&H.dispose()}),i.forEach(H=>H.dispose()),r.forEach(H=>H.dispose()),o.forEach(H=>H.dispose())}}}var fh=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0)),Pa=s=>{let t=fh(s);return t*t*(3-2*t)};function so(s,t=0){return Pa((fh(s)-[.08,.3,.52][Math.max(0,Math.min(2,t))])/.18)}function Qd(s,t=0){let e=fh(s),n=Math.max(0,Number.isFinite(t)?t:0)*.001;return{p:e,t:n,message1:so(e,0),message2:so(e,1),message3:so(e,2),dock:Pa((e-.79)/.11),reveal:Pa((e-.9)/.075),yaw:-.11+.18*Pa(e/.78),lift:Math.sin(n*.65)*.018,flow:n*.16%1,phase:e<.08?0:e<.3?1:e<.52?2:e<.79?3:e<.9?4:5}}function jd({mat:s,textures:t,low:e}){function n(h,u,d){let f=document.createElement("canvas");f.width=h,f.height=u,d(f.getContext("2d"),h,u);let g=new Ue(f);return g.colorSpace=ge,g.anisotropy=e?1:4,t.add(g),g}let i=n(1024,512,(h,u,d)=>{h.fillStyle="#11100e",h.fillRect(0,0,u,d);let f=h.createLinearGradient(0,0,0,d);[[0,"#25231e"],[.24,"#44413a"],[.48,"#181714"],[.75,"#070806"],[1,"#34332c"]].forEach(([g,_])=>f.addColorStop(g,_)),h.fillStyle=f,h.fillRect(0,0,u,d);for(let[g,_,m,p,M]of[[110,90,58,240,"#fff3dc"],[177,90,9,240,"#fffdf6"],[660,70,150,70,"#fffdfa"],[838,137,28,220,"#cf9f72"],[425,280,70,130,"#55544c"]])h.fillStyle=M,h.fillRect(g,_,m,p)});i.mapping=Xr;function r(h,u,d,f=512,g=1024){return n(f,g,_=>{let m=_.createLinearGradient(0,0,f,g*.2);[[0,d],[.16,h],[.39,u],[.46,h],[.72,d],[1,h]].forEach(([p,M])=>m.addColorStop(p,M)),_.fillStyle=m,_.fillRect(0,0,f,g);for(let p=0;p<g;p+=2)_.fillStyle=p%7===0?"rgba(255,241,213,.055)":"rgba(21,17,12,.035)",_.fillRect(0,p,f,1)})}let o=r("#d57e35","#edac68","#a64e23"),a=r("#a9adb0","#f1eee3","#646e70"),c=r("#242827","#3e4341","#101715");function l(h){let u=s(h);return u.envMap=i,u.envMapIntensity=1.05,u.userData.contactStudio=!0,u}return{copper:l({color:"#e59a52",metalness:.92,roughness:.24,clearcoat:.32,clearcoatRoughness:.18}),copperFace:l({color:"#ffffff",map:o,metalness:.88,roughness:.27,clearcoat:.38,clearcoatRoughness:.2}),silver:l({color:"#c8cdca",metalness:.96,roughness:.19}),silverFace:l({color:"#ffffff",map:a,metalness:.94,roughness:.23}),graphite:l({color:"#222825",metalness:.64,roughness:.31}),graphiteFace:l({color:"#ffffff",map:c,metalness:.5,roughness:.4}),glass:l({color:"#0c1412",metalness:.38,roughness:.09,clearcoat:1,clearcoatRoughness:.08}),ceramic:l({color:"#767d79",metalness:.73,roughness:.29})}}function tf({scene:s,software:t=!1,quality:e="medium"}){let n=new $t;n.name="contact-conversation",n.visible=!1,s.add(n);let i=document.querySelector(".contact-world"),r=t||e==="low",o=new Set,a=new Set,c=new Set,l=q=>(o.add(q),q),h=(q,j=!1)=>{let St=j?new Re(q):new gi({roughness:.3,metalness:.62,...q});return a.add(St),St},u=jd({mat:h,textures:c,low:r}),{graphite:d,copper:f,silver:g}=u,_=h({color:"#0b110e",roughness:.43,metalness:.26}),m=l(new He(1,1,1,r?2:4,.035)),p=l(new Ce(1,1,4,8));function M(q,j,St,rt,T,b=0,X=0,pt=0,At=0){let at=new kt(m,rt);return at.scale.set(q,j,St),at.position.set(b,X,pt),at.renderOrder=At,T.add(at),at}function y(q,j,St,rt,T,b,X){q.fillStyle=X,q.beginPath(),q.roundRect(j,St,rt,T,b),q.fill()}function x(q,j,St,rt,T,b,X=!1){q.font=`${X?700:400} ${T}px Manrope, Arial`,q.fillStyle=b,q.fillText(j,St,rt)}function A(q,j,St){let rt=document.createElement("canvas");rt.width=q,rt.height=j,St(rt.getContext("2d"),q,j);let T=new Ue(rt);return T.colorSpace=ge,T.anisotropy=r?1:4,c.add(T),T}function E(q,j,St=.15){let rt=new fs,T=q/2,b=j/2;return rt.moveTo(-T+St,-b),rt.lineTo(T-St,-b),rt.quadraticCurveTo(T,-b,T,-b+St),rt.lineTo(T,b-St),rt.quadraticCurveTo(T,b,T-St,b),rt.lineTo(-T+St,b),rt.quadraticCurveTo(-T,b,-T,b-St),rt.lineTo(-T,-b+St),rt.quadraticCurveTo(-T,-b,-T+St,-b),rt}let w=new $t;w.name="contact-handset",n.add(w),M(1.9,3.8,.16,f,w,0,0,0),M(1.86,3.75,.08,d,w,0,0,.11,1),M(1.76,3.6,.025,_,w,0,0,.158,2);let R=A(512,1024,(q,j,St)=>{let rt=q.createLinearGradient(0,0,j,St);rt.addColorStop(0,"#27342b"),rt.addColorStop(1,"#131f17"),q.fillStyle=rt,q.fillRect(0,0,j,St),y(q,0,0,j,175,26,"#2c382d"),q.fillStyle="#ed9345",q.beginPath(),q.arc(65,99,27,0,7),q.fill(),x(q,"a.",48,110,29,"#2a2819",!0),x(q,"dev.abraao",111,98,30,"#f1eadb",!0),x(q,"Uma conversa. Um novo caminho.",112,132,13,"#b6ba9e"),q.fillStyle="#a8b49a";for(let T=0;T<3;T++)q.beginPath(),q.arc(234+T*22,383,4,0,7),q.fill();x(q,"O pr\xF3ximo passo",69,484,32,"#eeeadb",!0),x(q,"come\xE7a aqui.",69,532,32,"#eeeadb",!0),x(q,"Seu contexto faz a diferen\xE7a.",69,590,18,"#a9b69d"),y(q,25,903,462,72,30,"#303f2f"),x(q,"Conte seu desafio...",48,947,20,"#adb799"),q.fillStyle="#ed9345",q.beginPath(),q.arc(450,939,23,0,7),q.fill(),x(q,"\u2197",439,949,27,"#2a2819",!0)}),S=l(new xa(E(1.66,3.42,.11),r?8:16)),v=S.attributes.uv,C=S.attributes.position;for(let q=0;q<C.count;q++)v.setXY(q,(C.getX(q)+.83)/1.66,(C.getY(q)+1.71)/3.42);let z=new kt(S,h({map:R,color:"#fff",toneMapped:!1},!0));z.name="contact-whole-screen",z.position.z=.175,z.renderOrder=3,w.add(z),M(.54,.073,.016,_,w,0,1.61,.19,4),M(.32,.014,.01,g,w,0,1.61,.2,5),M(.36,.025,.009,h({color:"#d9dbcd"},!0),w,0,-1.66,.185,4),M(.036,.4,.083,f,w,.967,.48,0),M(.034,.25,.075,g,w,-.967,.59,0),M(.034,.33,.075,g,w,-.967,.1,0);for(let q of[-.938,.938])for(let j of[-1.3,1.48])M(.009,.046,.15,u.ceramic,w,q,j,0,1);for(let q=0;q<7;q++)M(.026,.015,.034,_,w,-.31+q*.105,-1.903,0);M(.29,.018,.075,_,w,0,-1.91,0);let k=A(128,256,(q,j,St)=>{let rt=q.createLinearGradient(0,0,j,St*.3);rt.addColorStop(0,"rgba(255,243,215,0)"),rt.addColorStop(.4,"rgba(255,243,215,0)"),rt.addColorStop(.55,"rgba(255,243,215,.11)"),rt.addColorStop(.66,"rgba(255,243,215,0)"),rt.addColorStop(1,"rgba(255,243,215,0)"),q.fillStyle=rt,q.fillRect(0,0,j,St)}),W=new kt(p,h({map:k,color:"#fff",transparent:!0,depthWrite:!1,toneMapped:!1},!0));W.scale.set(1.64,3.39,1),W.position.z=.181,W.renderOrder=3.5,w.add(W);let $=A(128,128,(q,j,St)=>{let rt=q.createRadialGradient(j/2,St/2,0,j/2,St/2,j/2);rt.addColorStop(0,"rgba(0,0,0,.44)"),rt.addColorStop(.5,"rgba(0,0,0,.20)"),rt.addColorStop(1,"rgba(0,0,0,0)"),q.fillStyle=rt,q.fillRect(0,0,j,St)}),O=new kt(p,h({map:$,color:"#fff",transparent:!0,depthWrite:!1,toneMapped:!1},!0));O.name="contact-soft-shadow",O.rotation.x=-Math.PI/2,O.scale.set(4.6,3.8,1),O.position.set(0,-2.25,0),O.renderOrder=-1e5,n.add(O);let it=[["Quero melhorar","a rotina do meu neg\xF3cio."],["Me conta onde","o processo est\xE1 travando."],["Vamos encontrar","um caminho."]],Z=["#eee7d6","#ed9345","#2c3d2b"],_t=["#263022","#2e2418","#f1eadb"],et=[new I(-.34,2.02,.65),new I(.34,.8,1.1),new I(-.17,-.42,1.55)],ht=it.map((q,j)=>{let St=new $t;St.name=`contact-message-${j+1}`,n.add(St);let rt=2.68,T=1.04,b=E(rt,T,.14),X=new fs,pt=j===1?1:-1;X.moveTo(pt*.9,-T/2+.1),X.lineTo(pt*1.14,-T/2-.17),X.lineTo(pt*1.16,-T/2+.12),X.closePath();let At=h({color:Z[j],metalness:.14,roughness:.34,clearcoat:.3,clearcoatRoughness:.24,envMap:u.copper.envMap,envMapIntensity:.55}),at=new kt(l(new _a([b,X],{depth:.055,bevelEnabled:!0,bevelThickness:.012,bevelSize:.014,bevelSegments:r?1:2,curveSegments:r?6:12})),At);at.position.z=-.06,St.add(at);let vt=A(768,300,(zt,Q,ft)=>{y(zt,0,0,Q,ft,30,Z[j]),x(zt,j===1?"dev.abraao":"VOC\xCA",35,47,19,j===1?"#614225":j===0?"#6a765e":"#a8bc98",!0),q.forEach((Ot,ot)=>x(zt,Ot,35,128+ot*64,46,_t[j],j===2)),x(zt,"\u2713\u2713",Q-74,ft-24,21,j===1?"#765532":j===0?"#7c866f":"#a8bc98")}),xt=new kt(l(new Ce(rt-.018,T-.018,4,2)),h({map:vt,color:"#fff",transparent:!0,alphaTest:.02,depthWrite:!1,toneMapped:!1},!0));xt.position.z=.009,xt.renderOrder=2,St.add(xt);let bt=new an().setFromEuler(new dn(-.07,j===1?-.1:.08,j===1?.035:-.025));return{bubble:St,destination:et[j],targetQuaternion:bt,index:j}});if(!t){let q=new _s("#fff0d8",19,17);q.position.set(-3,5,5),n.add(q);let j=new _s("#efad70",12,15);j.position.set(4,-1,3),n.add(j)}let Rt=new I,H=new I,U=new I,B=new I,Y=new an,D=new Vn,st=new I,mt=new I,Tt=new I,It=new an,G=new I,gt=Array.from({length:80},()=>new I);function N(q,j){q.getWorldPosition(G);let St=G.applyMatrix4(j.matrixWorldInverse).z*1e4;q.traverse(rt=>{rt.isMesh&&(rt.userData.localOrder===void 0&&(rt.userData.localOrder=rt.renderOrder),rt.renderOrder=St+rt.userData.localOrder)})}function Ut(q,j,St,rt={}){let T=Qd(q,j),{p:b,t:X,reveal:pt}=T,At=rt.mobile??St.aspect<1.2;w.position.set(Math.sin(X*.32)*.012,-1.63+T.lift,-.12),w.rotation.set(-1.1,T.yaw,-.74+Math.sin(X*.16)*.012),w.updateWorldMatrix(!0,!0),w.getWorldQuaternion(Y),B.set(0,0,1).applyQuaternion(Y);for(let{bubble:Q,destination:ft,targetQuaternion:Ot,index:ot}of ht){ft.y=-.42+(ot===0?1.22*(T.message2+T.message3):ot===1?1.22*T.message3:0);let ct=so(b,ot);Q.visible=ct>.001,Q.userData.rise=ct,Rt.set(ot===1?.18:-.14,.65-ot*.63,.19).applyMatrix4(w.matrixWorld),H.copy(Rt).addScaledVector(B,.9),U.copy(ft).add(new I(ot===1?.22:-.16,-.37,.16));let Nt=1-ct;Q.position.copy(Rt).multiplyScalar(Nt**3).addScaledVector(H,3*Nt*Nt*ct).addScaledVector(U,3*Nt*ct*ct).addScaledVector(ft,ct**3),Q.position.y+=Math.sin(X*.68+ot*.7)*.018*ct,Q.quaternion.copy(Y).slerp(Ot,ct),Q.scale.setScalar(.28+.72*ct)}n.updateWorldMatrix(!0,!0),D.makeEmpty();let at=0;function vt(Q,ft,Ot,ot,ct){let Nt=gt[at++].set(Q,ft,Ot);ot?Nt.applyQuaternion(ot).add(ct):Nt.applyMatrix4(w.matrixWorld),D.expandByPoint(Nt)}for(let Q of[-1,1])for(let ft of[-1.94,1.94])for(let Ot of[-.1,.22])vt(Q,ft,Ot);for(let{bubble:Q}of ht)if(Q.visible)for(let ft of[-1.39,1.39])for(let Ot of[-.72,.57])for(let ot of[-.09,.035]){let ct=Q.scale.x;vt(ft*ct,Ot*ct,ot*ct,Q.quaternion,Q.position)}st.copy(D.getCenter(Tt)),mt.set(.06+Math.sin(b*Math.PI)*.1,.13,1).normalize(),St.fov=32,St.position.copy(st).add(mt),St.lookAt(st),It.copy(St.quaternion).invert();let xt=Math.tan(Ne.degToRad(St.fov/2)),bt=0;for(let Q=0;Q<at;Q++)Tt.copy(gt[Q]).sub(st).applyQuaternion(It),bt=Math.max(bt,Math.abs(Tt.x)*1.055/(xt*St.aspect)+Tt.z,Math.abs(Tt.y)*1.055/xt+Tt.z);let zt=Math.max(bt,At?5.65/(2*xt):5.85/(2*xt));return St.position.copy(mt).multiplyScalar(Ne.lerp(bt,zt,pt)).add(st),St.lookAt(st),St.updateProjectionMatrix(),St.updateMatrixWorld(!0),N(w,St),ht.forEach(({bubble:Q})=>N(Q,St)),i.dataset.rendered="true",i.dataset.filmProgress=b.toFixed(4),i.dataset.motionTime=X.toFixed(2),i.dataset.packetPhase=T.flow.toFixed(4),i.dataset.cameraYaw=T.yaw.toFixed(4),i.dataset.contactReveal=pt.toFixed(4),i.dataset.messagesVisible=String(ht.filter(({bubble:Q})=>Q.visible).length),i.dataset.messageLifts=ht.map(({bubble:Q})=>Q.userData.rise.toFixed(3)).join(","),i.dataset.internalPart=["conversation","first-message","reply","next-step","invitation","contact"][T.phase],T}let wt=0;return n.traverse(q=>{q.isMesh&&wt++}),i.dataset.contactMeshes=wt,{group:n,update:Ut,dispose(){s.remove(n),o.forEach(q=>q.dispose()),a.forEach(q=>q.dispose()),c.forEach(q=>q.dispose())}}}var ef=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0)),ys=s=>{let t=ef(s);return t*t*(3-2*t)},ro=(s,t,e)=>ys((s-t)/(e-t));function nf(s,t=0){let e=ef(s),n=Math.max(0,Number.isFinite(t)?t:0)*.001,i=[[-.55,.22,1.06],[-.18,.65,.94],[.24,.28,.89],[.53,.48,1.02],[.6,.45,1.03]],r=Math.min(3,Math.floor(e*4)),o=e===1?1:e*4-r,a=ys(o),c=i[r].map((l,h)=>l+(i[r+1][h]-l)*a);return{p:e,t:n,index:r,local:o,organize:ro(e,.08,.38),connect:ro(e,.28,.59),operate:ro(e,.49,.73),evolve:ro(e,.7,.94),yaw:c[0],elevation:c[1],zoom:c[2],pulse:n*.17%1,drift:Math.sin(n*.5)*.045,copyOpacity:1-.75*ro(o,.9,1)*(r<3?1:0)}}function sf({scene:s,software:t=!1,quality:e="medium"}){let n=new $t;n.visible=!1,s.add(n);let i=document.querySelector(".result-world"),r=t||e==="low",o=new Set,a=new Set,c=new Set,l=F=>(o.add(F),F),h=(F,tt=!1)=>{let Pt=tt?new Re(F):new Ee({roughness:.35,metalness:.62,...F});return a.add(Pt),Pt},u=h({color:"#2a3e37"}),d=h({color:"#819a82",metalness:.8}),f=h({color:"#101e1b"}),g=h({color:"#d08843",roughness:.25,metalness:.72}),_=h({color:"#ffc27a",toneMapped:!1},!0),m=h({color:"#a4cbb3",toneMapped:!1},!0),p=h({color:"#d38f4d",transparent:!0,opacity:.6,toneMapped:!1},!0),M=h({color:"#8daf9a",transparent:!0,opacity:.16,toneMapped:!1,depthWrite:!1},!0),y=l(r?new _e(1,1,1):new He(1,1,1,2,.045)),x=l(new Ce(1,1,r?3:9,r?2:5)),A=l(new Kn(1,r?6:10,r?4:7)),E=l(new Bi(1,.013,r?3:5,r?44:80)),w=new de,R=new I,S=new I(0,1,0);function v(F,tt,Pt,Ht,Mt,Dt=0,Wt=0,Jt=0,ae=0){let te=new kt(y,Ht);return te.scale.set(F,tt,Pt),te.position.set(Dt,Wt,Jt),te.renderOrder=ae,Mt.add(te),te}function C(F,tt,Pt,Ht=0,Mt=0,Dt=0){let Wt=new kt(E,tt);return Wt.scale.setScalar(F),Wt.position.set(Ht,Mt,Dt),Pt.add(Wt),Wt}function z(F,tt,Pt,Ht,Mt=18,Dt="#dbdfc9",Wt=!1){F.font=`${Wt?700:400} ${Mt}px Arial`,F.fillStyle=Dt,F.fillText(tt,Pt,Ht)}function k(F,tt,Pt,Ht,Mt,Dt,Wt){F.fillStyle=Wt,F.beginPath(),F.roundRect(tt,Pt,Ht,Mt,Dt),F.fill()}function W(F,tt,Pt=[]){let Ht=document.createElement("canvas");Ht.width=F==="dashboard"?1024:512,Ht.height=F==="dashboard"?640:340;let Mt=Ht.getContext("2d"),Dt=Ht.width,Wt=Ht.height;if(k(Mt,0,0,Dt,Wt,14,F==="dashboard"?"#e4e0d1":"#152b25"),F==="dashboard"){k(Mt,0,0,Dt,65,12,"#243e33"),z(Mt,"seu.neg\xF3cio",30,43,27,"#efe4c9",!0),z(Mt,"OPERA\xC7\xC3O CONECTADA",690,41,16,"#b7c5a7"),z(Mt,"Uma vis\xE3o. O mesmo caminho.",35,118,32,"#253a2b",!0),z(Mt,"Do primeiro contato \xE0 pr\xF3xima entrega.",36,152,19,"#7a8069"),["RECEBER","PREPARAR","ENTREGAR"].forEach((te,yt)=>{let Lt=34+yt*325;k(Mt,Lt,187,306,205,9,"#d3d6c1"),k(Mt,Lt+17,204,272,30,5,yt===2?"#bf8a4e":"#bfc8ad"),z(Mt,te,Lt+30,225,14,"#31452c",!0),z(Mt,["Pedido recebido","Equipe em a\xE7\xE3o","Pronto para seguir"][yt],Lt+18,275,20,"#253c2a",!0),z(Mt,["Cliente e contexto","Informa\xE7\xE3o dispon\xEDvel","Atualiza\xE7\xE3o registrada"][yt],Lt+18,307,15,"#6a795e"),k(Mt,Lt+18,343,270,4,2,"#bac3a7"),k(Mt,Lt+18,343,270*(yt===0?1:yt===1?.7:.45),4,2,"#b47d40")}),z(Mt,"CLAREZA PARA O PR\xD3XIMO PASSO",37,440,15,"#6b795e",!0),Mt.strokeStyle="#c4c9b3",Mt.lineWidth=1;for(let te=0;te<3;te++)Mt.beginPath(),Mt.moveTo(36,470+te*55),Mt.lineTo(640,470+te*55),Mt.stroke();Mt.strokeStyle="#aa6c2a",Mt.lineWidth=4,Mt.beginPath(),[[40,558],[130,540],[210,548],[310,502],[420,509],[520,475],[635,455]].forEach(([te,yt],Lt)=>Lt?Mt.lineTo(te,yt):Mt.moveTo(te,yt)),Mt.stroke(),k(Mt,690,428,300,175,9,"#294332"),z(Mt,"EQUIPE",715,466,14,"#d8b576"),z(Mt,"Contexto",715,511,27,"#e3e0c8",!0),z(Mt,"compartilhado.",715,547,27,"#e3e0c8",!0),z(Mt,"Cada parte sabe o pr\xF3ximo passo.",715,577,12,"#acbc9d")}else z(Mt,"SEU NEG\xD3CIO / "+tt,26,38,12,"#bba97d",!0),Mt.fillStyle="#6f805f",Mt.fillRect(26,55,Dt-52,1),z(Mt,tt,26,108,34,"#f0e4c9",!0),z(Mt,Pt[0]||"A informa\xE7\xE3o encontra dire\xE7\xE3o.",26,145,17,"#a4b89c"),Pt.slice(1,4).forEach((ae,te)=>{let yt=181+te*47;k(Mt,24,yt,Dt-48,36,5,te===2?"#73572e":"#2a4534"),Mt.fillStyle=te===2?"#e8b673":"#8da37b",Mt.beginPath(),Mt.arc(42,yt+18,3,0,7),Mt.fill(),z(Mt,ae,56,yt+24,15,te===2?"#f2deb6":"#c1ceb0")});let Jt=new Ue(Ht);return Jt.colorSpace=ge,Jt.anisotropy=r?1:4,c.add(Jt),Jt}function $(F,tt,Pt,Ht,Mt,Dt){let Wt=new $t;Dt.add(Wt),v(F+.12,tt+.12,.12,d,Wt,0,0,0,5),v(F+.055,tt+.055,.045,f,Wt,0,0,.075,6);let Jt=new kt(x,h({map:W(Pt,Ht,Mt),color:"#fff",toneMapped:!1},!0));return Jt.scale.set(F,tt,1),Jt.position.z=.108,Jt.renderOrder=8,Wt.add(Jt),v(.32,.023,.025,_,Wt,-F/2+.24,tt/2+.085,.08,9),Wt}let O=new $t;n.add(O);let it=[];for(let F=0;F<9;F++){let tt=new $t;O.add(tt);let Pt=F%3,Ht=Math.floor(F/3);v(2.24,.17,1.5,u,tt,0,0,0,-10),v(2.26,.027,1.51,g,tt,0,-.11,0,-10),v(1.88,.014,.018,p,tt,0,.095,.59,-8),v(.018,.015,1.18,M,tt,-.96,.095,0,-8);let Mt=v(.12,.035,.07,_,tt,.84,.08,.61,-7);it.push({g:tt,x:(Pt-1)*2.34,y:-1.72,z:(Ht-1)*1.6,led:Mt})}let Z=[];[["CLIENTES",["Um s\xF3 hist\xF3rico.","Contato","Contexto","Pr\xF3ximo passo"],[-2.78,.6,.2],[-4.1,1.65,1.4]],["PEDIDOS",["O caminho da entrega.","Receber","Preparar","Entregar"],[2.78,.63,.1],[4.2,-.4,1.8]],["ESTOQUE",["A opera\xE7\xE3o acompanha.","Entrada","Reserva","Sa\xEDda"],[-2.65,-.85,1.5],[-3.25,-1.25,3]],["FINANCEIRO",["O registro continua.","Registrar","Conferir","Acompanhar"],[2.65,-.82,1.45],[3.75,2.1,-.8]]].forEach(([F,tt,Pt,Ht],Mt)=>{let Dt=new $t;n.add(Dt);let Wt=$(1.87,1.24,"station",F,tt,Dt);Wt.rotation.y=Mt%2?-.1:.1,v(1.92,.08,.7,f,Dt,0,-.73,-.06,-3),v(1.92,.025,.045,p,Dt,0,-.68,.3,2);let Jt=C(.12,_,Dt,0,-.78,.34);Jt.rotation.x=Math.PI/2;let ae=v(.12,.55,.12,d,Dt,0,-1,-.17,-4),te=[];for(let Lt=0;Lt<3;Lt++)te.push(v(.11,.018,.035,m,Dt,-.55+Lt*.21,-.69,.26,4));let yt=v(1.68,.009,.007,p,Wt,0,-.48,.119,9);Z.push({g:Dt,panel:Wt,pedestal:ae,port:Jt,beacons:te,scan:yt,pose:new I(...Pt),scatter:new I(...Ht)})});let et=new $t;n.add(et);let ht=$(3.5,2.18,"dashboard","",[],et);ht.position.set(0,.55,-.15);let Rt=v(.14,.9,.18,g,et,0,-.98,-.2,-4),H=v(3.7,.13,1.45,u,et,0,-1.4,.12,-5),U=new Me(y,d,r?12:24);et.add(U),U.renderOrder=3;for(let F=0;F<U.count;F++)w.position.set(-1.52+F%8*.43,-1.31,-.24+Math.floor(F/8)*.29),w.rotation.set(0,0,0),w.scale.set(.28,.025,.14),w.updateMatrix(),U.setMatrixAt(F,w.matrix);let B=[];for(let F=0;F<3;F++){let tt=C(.56+F*.17,F===1?p:M,et,0,-.89,.48);tt.rotation.x=Math.PI/2,tt.renderOrder=-1,B.push(tt)}let Y=new kt(l(new ga(.47,.47,.1,r?16:32)),g);Y.position.set(0,-.87,.48),et.add(Y);let D=new $t;n.add(D);let st=[];for(let F=0;F<3;F++){let tt=C(2.65+F*.28,F===0?p:M,D,0,-1.65-F*.13,0);tt.rotation.x=-Math.PI/2,tt.scale.y*=.69,tt.renderOrder=-12,st.push(tt)}let mt=new Me(y,d,16);mt.renderOrder=-11,D.add(mt);for(let F=0;F<16;F++){let tt=F/16*Math.PI*2;w.position.set(Math.cos(tt)*3,-1.99,Math.sin(tt)*1.9),w.rotation.set(0,-tt,0),w.scale.set(.055,.45,.055),w.updateMatrix(),mt.setMatrixAt(F,w.matrix)}let Tt=new Me(y,p,r?32:64);Tt.renderOrder=-12,D.add(Tt);let It=r?16:28,G=r?3:5,gt=[];function N(F,tt,Pt){let Ht=new Float32Array((It+1)*(G+1)*3),Mt=[];for(let ae=0;ae<It;ae++)for(let te=0;te<G;te++){let yt=ae*(G+1)+te,Lt=yt+G+1;Mt.push(yt,Lt,yt+1,Lt,Lt+1,yt+1)}let Dt=l(new Xe);Dt.setAttribute("position",new qe(Ht,3)),Dt.setIndex(Mt);let Wt=new kt(Dt,F%3===0?m:p);Wt.frustumCulled=!1,Wt.renderOrder=2,n.add(Wt);let Jt={mesh:Wt,geometry:Dt,positions:Ht,a:new I,b:new I,c:new I,from:tt,to:Pt,index:F};return gt.push(Jt),Jt}for(let F=0;F<4;F++)N(F,F,-1);for(let F=0;F<4;F++)N(F+4,F,(F+1)%4);let Ut=new I,wt=new I,q=new I,j=new I;function St(F,tt,Pt){let Ht=1-tt;return Pt.copy(F.a).multiplyScalar(Ht*Ht).addScaledVector(F.c,2*Ht*tt).addScaledVector(F.b,tt*tt)}function rt(F,tt,Pt){F.a.copy(Z[F.from].g.position),F.a.y-=.73,F.a.z+=.15,F.to===-1?F.b.set(0,-1+et.position.y,.5):(F.b.copy(Z[F.to].g.position),F.b.y-=.73,F.b.z+=.15),F.c.copy(F.a).lerp(F.b,.5),F.c.y-=.35,F.c.z+=.35+Math.sin(tt*.42+F.index)*.18;for(let Ht=0;Ht<=It;Ht++){let Mt=Ht/It;St(F,Mt,R),Ut.copy(F.c).sub(F.a).multiplyScalar(2*(1-Mt)).addScaledVector(j.copy(F.b).sub(F.c),2*Mt).normalize(),wt.crossVectors(Ut,S),wt.lengthSq()<.01?wt.set(1,0,0):wt.normalize(),q.crossVectors(Ut,wt).normalize();for(let Dt=0;Dt<=G;Dt++){let Wt=Dt/G*Math.PI*2,Jt=(Ht*(G+1)+Dt)*3,ae=.012;F.positions[Jt]=R.x+ae*(wt.x*Math.cos(Wt)+q.x*Math.sin(Wt)),F.positions[Jt+1]=R.y+ae*(wt.y*Math.cos(Wt)+q.y*Math.sin(Wt)),F.positions[Jt+2]=R.z+ae*(wt.z*Math.cos(Wt)+q.z*Math.sin(Wt))}}F.geometry.attributes.position.needsUpdate=!0,F.geometry.setDrawRange(0,Math.floor(Pt*It)*G*6),F.mesh.visible=Pt>.005}let T=new Me(A,_,gt.length*4);T.frustumCulled=!1,T.instanceMatrix.setUsage(Wn),T.renderOrder=4,n.add(T);let b=[];for(let F=0;F<4;F++){let tt=new $t;n.add(tt),v(.45,.29,.025,f,tt,0,0,0,5),v(.42,.018,.009,_,tt,0,.116,.017,6);for(let Pt=0;Pt<3;Pt++)v(Pt===2?.17:.32,.012,.009,Pt===2?_:m,tt,Pt===2?-.075:0,.052-Pt*.052,.017,6);b.push(tt)}let X=new $t;n.add(X);let pt=[],At=[.5,.85,1.25,1.75,2.3,2.85,3.45];for(let F=0;F<7;F++){let tt=new $t;X.add(tt);let Pt=v(.43,1,.48,F%3===0?g:u,tt,0,.5,0,-3),Ht=v(.46,.035,.51,_,tt,0,1.02,0,0);pt.push({g:tt,column:Pt,cap:Ht,height:At[F],x:-2.45+F*.81})}let at=pt.map(F=>new I(F.x,-1.58+F.height+.14,-2)),vt=new ds(at),xt=new kt(l(new mi(vt,r?32:72,.023,r?3:5,!1)),_);xt.renderOrder=2,X.add(xt);let bt=$(2.7,.89,"station","PR\xD3XIMO PASSO",["Clareza para continuar.","Ajustar \xB7 conectar \xB7 evoluir"],X);bt.position.set(.3,2.2,-2.4),bt.scale.setScalar(.8);let zt=new kt(A,_);zt.scale.setScalar(.07),X.add(zt);let Q=new Me(y,g,r?18:36);Q.frustumCulled=!1,Q.instanceMatrix.setUsage(Wn),n.add(Q);let ft=new Me(A,M,r?26:64);ft.frustumCulled=!1,n.add(ft);let Ot=document.createElement("canvas");Ot.width=Ot.height=128;let ot=Ot.getContext("2d"),ct=ot.createRadialGradient(64,64,1,64,64,64);ct.addColorStop(0,"#eab46d38"),ct.addColorStop(.3,"#72b59a16"),ct.addColorStop(1,"#72b59a00"),ot.fillStyle=ct,ot.fillRect(0,0,128,128);let Nt=new Ue(Ot);c.add(Nt);let nt=new kt(l(new Ce(10,8)),h({map:Nt,color:"#fff",transparent:!0,opacity:.65,depthWrite:!1,toneMapped:!1},!0));nt.renderOrder=-30,n.add(nt);let Et=new I,L=new I;function Ct(F,tt,Pt,Ht,Mt,Dt,Wt,Jt,ae=0,te=0,yt=0){w.position.set(Pt,Ht,Mt),w.rotation.set(ae,te,yt),w.scale.set(Dt,Wt,Jt),w.updateMatrix(),F.setMatrixAt(tt,w.matrix)}function V(F,tt,Pt,Ht={}){let Mt=nf(F,tt),{t:Dt}=Mt,Wt=Ht.mobile??Pt.aspect<1.2;n.rotation.set(0,0,0),n.position.set(0,0,0),it.forEach((yt,Lt)=>{let re=ys((Mt.organize-Lt*.025)/.8),ce=1-re;yt.g.position.set(yt.x+Math.sin(Lt*3.3)*ce*2.6,yt.y-ce*(1.8+Lt*.13),yt.z+Math.cos(Lt*2.1)*ce*2.4),yt.g.rotation.set(ce*(Lt%2?.65:-.65),ce*(Lt-4)*.26,0),yt.g.scale.setScalar(.45+.55*re),yt.led.visible=Mt.connect>.1}),Z.forEach((yt,Lt)=>{let re=ys((Mt.organize-Lt*.035)/.84),ce=1-re,xn=Math.sin(re*Math.PI);yt.g.position.lerpVectors(yt.scatter,yt.pose,re),yt.g.position.y+=Math.sin(Dt*.57+Lt)*(.12*ce+.025)+xn*(Lt%2?.7:-.5),yt.g.position.z+=xn*.8,yt.g.rotation.set(ce*(Lt%2?.26:-.2),ce*(Lt%2?-.42:.42),ce*(Lt%2?.12:-.1)),yt.panel.rotation.x=-.04+ce*.14,yt.pedestal.scale.y=Math.max(.01,Mt.organize),yt.port.rotation.z=Dt*.5+Lt,yt.beacons.forEach((Tn,Si)=>Tn.scale.y=.018*(.5+.5*Math.sin(Dt*2.3+Lt+Si))),yt.scan.position.y=-.5+(Dt*.18+Lt*.25)%1*1,yt.scan.visible=Mt.connect>.2}),et.position.set(0,-2.7*(1-Mt.organize),-.15*(1-Mt.operate)),et.scale.setScalar(.3+.7*Mt.organize),et.visible=Mt.organize>.005,ht.position.y=.55+.7*(1-Mt.operate),ht.rotation.x=-.22*(1-Mt.operate),ht.rotation.y=Math.sin(Dt*.27)*.012,H.position.y=-1.4-.75*(1-Mt.operate),Rt.scale.y=.9+.5*(1-Mt.operate),B.forEach((yt,Lt)=>{yt.rotation.z=Dt*(Lt%2?-.32:.22)+Lt*.7,yt.scale.setScalar((.56+Lt*.17)*(1+Math.sin(Dt*.8+Lt)*.04))}),Y.rotation.y=Dt*.3,D.position.y=-1.2*(1-Mt.organize),D.scale.setScalar(.8+.2*Mt.organize),D.visible=Mt.organize>.01,st.forEach((yt,Lt)=>yt.rotation.z=Dt*(Lt%2?.025:-.035));for(let yt=0;yt<Tt.count;yt++){let Lt=yt/Tt.count*Math.PI*2+Dt*.025;Ct(Tt,yt,Math.cos(Lt)*3.62,-1.8,Math.sin(Lt)*2.4,.028,.018,yt%4===0?.19:.075,0,-Lt,0)}Tt.instanceMatrix.needsUpdate=!0,gt.forEach((yt,Lt)=>{let re=ys((Mt.connect-Lt*.028)/.78);rt(yt,Dt,re);for(let ce=0;ce<4;ce++){let xn=(Dt*(.15+Lt*.006)-ce*.035+Lt*.107+1)%1;St(yt,xn,R);let Tn=re*(Mt.operate*.6+.4)*(ce===0?.066:.038-ce*.006);Ct(T,Lt*4+ce,R.x,R.y,R.z,Tn,Tn,Tn)}}),T.instanceMatrix.needsUpdate=!0,T.visible=Mt.connect>.001,b.forEach((yt,Lt)=>{let re=(Dt*.12+Lt*.23)%1;St(gt[Lt],re,yt.position),yt.position.y+=.12,yt.scale.setScalar(Mt.operate*(.6+.4*Math.sin(re*Math.PI))),yt.visible=Mt.operate>.005}),X.visible=Mt.evolve>.001,X.scale.setScalar(Math.max(.001,Mt.evolve)),pt.forEach((yt,Lt)=>{let re=ys((Mt.evolve-Lt*.04)/.72),ce=Math.max(.02,yt.height*re);yt.g.position.set(yt.x,-1.58,-2),yt.column.scale.y=ce,yt.column.position.y=ce/2,yt.cap.position.y=ce+.025}),xt.geometry.setDrawRange(0,Math.floor(Mt.evolve*(r?32:72))*(r?3:5)*6),vt.getPointAt(Dt*.13%1,zt.position),bt.position.y=2.15+Math.sin(Dt*.6)*.045;for(let yt=0;yt<Q.count;yt++){let Lt=yt*2.39996+Dt*.035,re=3.2+yt%4*.34,ce=1-Mt.organize,xn=Math.cos(Lt)*re*(.5+ce*.8),Tn=-1.1+Math.sin(Lt)*.5+ce*(Math.cos(yt)*2.7),Si=Math.sin(Lt)*re*.7,Is=.042+yt%3*.015;Ct(Q,yt,xn,Tn,Si,Is,Is*.38,Is,Dt*.12+yt,Dt*.16+yt,0)}Q.instanceMatrix.needsUpdate=!0;for(let yt=0;yt<ft.count;yt++){let Lt=yt*2.39996+Dt*.014,re=3.7+yt%7*.17;Ct(ft,yt,Math.cos(Lt)*re,Math.sin(yt*4.7+Dt*.12)*2.4,Math.sin(Lt)*2.7-1,.012,.012,.012)}ft.instanceMatrix.needsUpdate=!0;let Jt=Mt.yaw*(Wt?.63:1)+Math.sin(Dt*.13)*.018;Et.set(0,-.2+Mt.evolve*.26,0);let te=Math.max(Wt?5.5:7.2,(Wt?10.7:11.8)/Pt.aspect)*Mt.zoom/(2*Math.tan(Ne.degToRad(Pt.fov/2)));return L.set(Math.sin(Jt),Mt.elevation*(Wt?.76:1),Math.cos(Jt)).normalize(),Pt.position.copy(L).multiplyScalar(te).add(Et),Pt.lookAt(Et),Pt.updateProjectionMatrix(),Pt.updateMatrixWorld(!0),b.forEach(yt=>yt.quaternion.copy(Pt.quaternion)),nt.position.set(0,-.4,-3),nt.quaternion.copy(Pt.quaternion),nt.scale.setScalar(.9+Math.sin(Dt*.45)*.04),i.dataset.rendered="true",i.dataset.filmProgress=Mt.p.toFixed(4),i.dataset.motionTime=Dt.toFixed(2),i.dataset.packetPhase=Mt.pulse.toFixed(4),i.dataset.cameraYaw=Jt.toFixed(4),Mt}let ut=0;return n.traverse(F=>{F.isMesh&&ut++}),i.dataset.resultMeshes=ut,{group:n,update:V,dispose(){s.remove(n),n.traverse(F=>{F.isInstancedMesh&&F.dispose()}),o.forEach(F=>F.dispose()),a.forEach(F=>F.dispose()),c.forEach(F=>F.dispose())}}}var av=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0));function cv(s,t){let e=Math.max(0,Number.isFinite(t)?t:0)*.001,n=av(s);return{t:e,p:n,breath:.5+.5*Math.sin(e*.82),yaw:e*.22+n*.7,orbit:.26*Math.sin(e*.15)+n*.55,lift:Math.sin(e*.72)*.13,phase:Math.floor((e/9+n*1.4)%3),active:Math.floor(e/3.8)%4}}function rf({scene:s,software:t=!1,quality:e="medium"}){let n=new $t;n.visible=!1,s.add(n);let i=t||e==="low",r=new Set,o=new Set,a=new Set,c=document.querySelector(".intelligence-world"),l=[...c.querySelectorAll("[data-reactor-label]")],h=document.querySelector("[data-reactor-phase]"),u=document.querySelector("[data-reactor-copy]"),d=vt=>(r.add(vt),vt),f=(vt,xt=!1)=>{let bt=xt?new Re(vt):new Ee({roughness:.28,metalness:.65,...vt});return o.add(bt),bt},g=f({color:"#f68a27",roughness:.27,metalness:.64}),_=f({color:"#35413a",metalness:.8}),m=f({color:"#cbd9ca",roughness:.3,metalness:.72}),p=f({color:"#ffb85b",toneMapped:!1},!0),M=f({color:"#e9f4d9",toneMapped:!1},!0),y=f({color:"#d67d31",toneMapped:!1,transparent:!0,opacity:.68},!0),x=f({color:"#69a99f",toneMapped:!1,transparent:!0,opacity:.34},!0),A=f({color:"#af9a66",toneMapped:!1,transparent:!0,opacity:.19},!0),E=d(i?new _e(1,1,1):new He(1,1,1,2,.07)),w=d(new Kn(1,i?7:12,i?5:9)),R=d(new Bi(1,.009,i?3:5,i?44:80)),S=new de,v=new I,C=new I,z=new $t;n.add(z);let k=i?3:4,W=k**3,$=new Me(E,g,W);$.frustumCulled=!1,$.instanceMatrix.setUsage(Wn),z.add($);let O=new kt(d(new ur(.4,i?0:1)),p);z.add(O);let it=new $t;z.add(it);function Z(vt,xt,bt,zt,Q){let ft=new I(...vt),Ot=new I(...xt),ot=Ot.clone().sub(ft),ct=new kt(E,zt);return ct.position.copy(ft).add(Ot).multiplyScalar(.5),ct.scale.set(bt,ot.length(),bt),ct.quaternion.setFromUnitVectors(new I(0,1,0),ot.normalize()),Q.add(ct),ct}let _t=[];for(let vt of[-1,1])for(let xt of[-1,1])for(let bt of[-1,1])_t.push([vt*.85,xt*.85,bt*.85]);for(let vt=0;vt<_t.length;vt++)for(let xt=vt+1;xt<_t.length;xt++)_t[vt].filter((bt,zt)=>bt!==_t[xt][zt]).length===1&&Z(_t[vt],_t[xt],.012,y,it);let et=[];for(let vt=0;vt<5;vt++){let xt=new kt(R,vt===1?y:vt===3?x:A),bt=1.28+vt*.34;xt.scale.setScalar(bt),n.add(xt),et.push(xt)}let ht=Array.from({length:4},(vt,xt)=>{let bt=new $t;n.add(bt);let zt=new kt(E,xt%2?m:g);zt.scale.setScalar(.25),bt.add(zt);let Q=new kt(R,xt%2?x:y);Q.scale.setScalar(.43),bt.add(Q);let ft=new kt(R,A);ft.scale.setScalar(.53),ft.rotation.x=Math.PI/2,bt.add(ft);let Ot=new kt(w,p);return Ot.scale.setScalar(.075),bt.add(Ot),{g:bt,cube:zt,rim:Q,rim2:ft,nucleus:Ot,base:[-2.45,2.45,-2.15,2.35][xt],y:[1.25,.95,-1.25,-1.3][xt],z:[-.5,-.2,.65,.8][xt]}}),Rt=i?18:30,H=i?3:5;function U(vt){let xt=d(new Xe),bt=new Float32Array((Rt+1)*(H+1)*3),zt=[];for(let ft=0;ft<Rt;ft++)for(let Ot=0;Ot<H;Ot++){let ot=ft*(H+1)+Ot,ct=ot+H+1;zt.push(ot,ct,ot+1,ct,ct+1,ot+1)}xt.setAttribute("position",new qe(bt,3)),xt.setIndex(zt);let Q=new kt(xt,vt%3===1?x:y);return Q.frustumCulled=!1,Q.renderOrder=-1,n.add(Q),{mesh:Q,positions:bt,geometry:xt,a:new I,b:new I,c:new I,index:vt}}let B=Array.from({length:8},(vt,xt)=>U(xt)),Y=new Me(w,p,B.length*4);Y.frustumCulled=!1,Y.instanceMatrix.setUsage(Wn),n.add(Y);let D=new Me(w,A,i?62:128);D.frustumCulled=!1,D.instanceMatrix.setUsage(Wn),n.add(D);let st=new Me(E,y,i?32:64);st.frustumCulled=!1,n.add(st);let mt=document.createElement("canvas");mt.width=mt.height=128;let Tt=mt.getContext("2d"),It=Tt.createRadialGradient(64,64,0,64,64,64);It.addColorStop(0,"#ffb04b60"),It.addColorStop(.25,"#ec872620"),It.addColorStop(1,"#ec872600"),Tt.fillStyle=It,Tt.fillRect(0,0,128,128);let G=new Ue(mt);a.add(G);let gt=f({map:G,color:"#ffffff",transparent:!0,depthWrite:!1,opacity:.75,toneMapped:!1},!0),N=new kt(d(new Ce(5,5)),gt);N.renderOrder=-20,n.add(N);let Ut=new I,wt=new I,q=new I,j=new I,St=new I(0,1,0);function rt(vt,xt,bt){let zt=1-xt;return bt.copy(vt.a).multiplyScalar(zt*zt).addScaledVector(vt.c,2*zt*xt).addScaledVector(vt.b,xt*xt)}function T(vt,xt){let{a:bt,b:zt,c:Q,positions:ft}=vt;vt.index<4?(bt.set(0,Math.sin(xt*.72)*.13,0),zt.copy(ht[vt.index].g.position)):(bt.copy(ht[vt.index-4].g.position),zt.copy(ht[(vt.index-3)%4].g.position)),Q.copy(bt).lerp(zt,.5),Q.z+=Math.sin(xt*.41+vt.index*.9)*.72+(vt.index<4?.75:-.6),Q.y+=Math.sin(xt*.55+vt.index)*.38;for(let Ot=0;Ot<=Rt;Ot++){let ot=Ot/Rt;rt(vt,ot,Ut),wt.copy(Q).sub(bt).multiplyScalar(2*(1-ot)).addScaledVector(v.copy(zt).sub(Q),2*ot).normalize(),q.crossVectors(wt,St),q.lengthSq()<.01?q.set(1,0,0):q.normalize(),j.crossVectors(wt,q).normalize();for(let ct=0;ct<=H;ct++){let Nt=ct/H*Math.PI*2,nt=(Ot*(H+1)+ct)*3,Et=.011;ft[nt]=Ut.x+Et*(q.x*Math.cos(Nt)+j.x*Math.sin(Nt)),ft[nt+1]=Ut.y+Et*(q.y*Math.cos(Nt)+j.y*Math.sin(Nt)),ft[nt+2]=Ut.z+Et*(q.z*Math.cos(Nt)+j.z*Math.sin(Nt))}}vt.geometry.attributes.position.needsUpdate=!0}function b(vt,xt,bt,zt,Q=0){S.position.copy(bt),S.rotation.set(Q,Q*.7,0),S.scale.setScalar(zt),S.updateMatrix(),vt.setMatrixAt(xt,S.matrix)}let X=[["01 / CONTEXTO","A informa\xE7\xE3o encontra suas conex\xF5es."],["02 / INTELIG\xCANCIA","O contexto ajuda a enxergar o pr\xF3ximo passo."],["03 / A\xC7\xC3O","Atendimento e opera\xE7\xE3o seguem no mesmo fluxo."]],pt=-1;function At(vt,xt,bt,zt={width:800,height:600}){let Q=cv(vt,xt),{t:ft}=Q;z.position.y=Q.lift,z.rotation.set(.18+Math.sin(ft*.27)*.12,Q.yaw,Math.sin(ft*.31)*.13),O.rotation.set(ft*.12,-ft*.18,ft*.08),O.scale.setScalar(.84+Q.breath*.23),it.rotation.set(-ft*.06,ft*.04,.1),it.scale.setScalar(1.03+Q.breath*.07);let Ot=.13+Q.breath*.29,ot=1.16/k;for(let Et=0;Et<W;Et++){let L=(Et%k-(k-1)/2)*ot,Ct=(Math.floor(Et/k)%k-(k-1)/2)*ot,V=(Math.floor(Et/(k*k))-(k-1)/2)*ot;Ut.set(L,Ct,V);let ut=Ut.length()||1;Ut.multiplyScalar(1+Ot/ut),Ut.y+=Math.sin(ft*1.1+Et*.7)*.015,b($,Et,Ut,ot*.83,.035*Math.sin(ft*.6+Et))}$.instanceMatrix.needsUpdate=!0,et.forEach((Et,L)=>{Et.position.y=Q.lift*.4,Et.rotation.set(.3+L*.46+Math.sin(ft*.15+L)*.12,.25+L*.52+ft*(L%2?.045:-.036),ft*(L%2?-.085:.055)+L*.62)}),ht.forEach((Et,L)=>{Et.g.position.set(Et.base+Math.sin(ft*.38+L*1.7)*.22,Et.y+Math.cos(ft*.46+L)*.22,Et.z+Math.sin(ft*.34+L*1.1)*.4),Et.cube.rotation.set(ft*(L%2?.25:-.22),ft*.35+L,.25+Math.sin(ft*.4+L)*.2),Et.rim.rotation.set(.2+Math.sin(ft*.3+L)*.35,ft*.18+L,ft*.12),Et.rim2.rotation.z=-ft*.12,Et.nucleus.position.set(Math.cos(ft*.7+L)*.36,Math.sin(ft*.7+L)*.36,.04)}),B.forEach(Et=>{T(Et,ft);for(let L=0;L<4;L++){let Ct=(ft*(.11+Et.index*.003)+L*.035+Et.index*.137)%1;rt(Et,Ct,Ut),b(Y,Et.index*4+L,Ut,L===0?.072:.044-L*.008)}}),Y.instanceMatrix.needsUpdate=!0;for(let Et=0;Et<D.count;Et++){let L=Et*2.39996+ft*(Et%2?.024:-.019),Ct=1.4+Et%19*.12;Ut.set(Math.cos(L)*Ct,Math.sin(L)*Ct*.7,Math.sin(Et*5.1+ft*.09)*1.7-.7),b(D,Et,Ut,.012+Et%4*.003)}D.instanceMatrix.needsUpdate=!0;for(let Et=0;Et<st.count;Et++){let L=Et/st.count*Math.PI*2+ft*.1;Ut.set(Math.cos(L)*2.9,Math.sin(L)*2.9*.66,-.7),S.position.copy(Ut),S.rotation.set(.2,0,L),S.scale.set(.017,.065,.012),S.updateMatrix(),st.setMatrixAt(Et,S.matrix)}st.instanceMatrix.needsUpdate=!0;let ct=new I(0,.04,0),nt=Math.max(5.15,6.9/bt.aspect)*(1-.055*Math.sin(ft*.21))/(2*Math.tan(Ne.degToRad(bt.fov/2)));return bt.position.set(Math.sin(Q.orbit)*nt,.62+Math.sin(ft*.17)*.18,Math.cos(Q.orbit)*nt).add(ct),bt.lookAt(ct),bt.updateProjectionMatrix(),bt.updateMatrixWorld(!0),N.position.set(0,Q.lift*.4,-1.1),N.quaternion.copy(bt.quaternion),N.scale.setScalar(.92+Q.breath*.1),s.updateMatrixWorld(!0),ht.forEach((Et,L)=>{C.copy(Et.g.position),C.y+=L<2?.52:-.48,C.project(bt);let Ct=Math.max(.15,Math.min(.85,C.x*.5+.5))*zt.width,V=Math.max(.12,Math.min(.88,-C.y*.5+.5))*zt.height;l[L]&&(l[L].style.transform=`translate3d(${Ct.toFixed(2)}px,${V.toFixed(2)}px,0) translate(-50%,-50%)`,l[L].dataset.active=String(Q.active===L))}),Q.phase!==pt&&(h&&(h.textContent=X[Q.phase][0]),u&&(u.textContent=X[Q.phase][1]),pt=Q.phase),c.dataset.rendered="true",c.dataset.motionTime=ft.toFixed(2),c.dataset.coreYaw=Q.yaw.toFixed(3),c.dataset.packetPhase=(ft*.11%1).toFixed(3),Q}let at=0;return n.traverse(vt=>{vt.isMesh&&at++}),c.dataset.reactorMeshes=at,{group:n,update:At,dispose(){s.remove(n),n.traverse(vt=>{vt.isInstancedMesh&&vt.dispose()}),r.forEach(vt=>vt.dispose()),o.forEach(vt=>vt.dispose()),a.forEach(vt=>vt.dispose())}}}function of(s){let t=[...document.querySelectorAll("[data-scene-window]")].map(o=>({el:o,id:o.dataset.sceneWindow,section:o.closest("[data-chapter]")})),e=!0,n=null,i=()=>{e=!0},r=new ResizeObserver(i);return t.forEach(({el:o})=>r.observe(o)),addEventListener("scroll",i,{passive:!0}),addEventListener("resize",i,{passive:!0}),{read(){if(!e)return n;e=!1;let o=document.getElementById("header").offsetHeight,a=null,c=0;for(let M of t){let y=M.el.getBoundingClientRect(),x=Math.max(0,Math.min(innerHeight,y.bottom)-Math.max(o,y.top)),A=Math.max(0,Math.min(innerWidth,y.right)-Math.max(0,y.left));A*x>c&&(c=A*x,a={...M,rect:y})}if(!a||c<800)return s.style.visibility="hidden",n=null,null;let{rect:l,section:h,id:u}=a,d=h.getBoundingClientRect(),f=h.querySelector(".section-pin"),g=h.querySelector(".cinematic-intro")?.offsetHeight||0,_=f&&getComputedStyle(f).position==="sticky",m=Math.max(0,Math.min(1,_?(-d.top-g)/Math.max(1,d.height-g-f.offsetHeight):(innerHeight*.45-d.top)/Math.max(1,d.height)));s.parentElement!==a.el&&a.el.appendChild(s),Object.assign(s.style,{left:"0",top:"0",width:`${l.width}px`,height:`${l.height}px`});let p=u==="problema"&&!_?Math.max(0,Math.min(1,(innerHeight*.85-l.top)/(l.height+innerHeight*.35))):m;return n={id:u,progress:p,width:Math.round(l.width),height:Math.round(l.height),rect:l},s.dataset.scene=u,s.dataset.progress=p.toFixed(4),n},invalidate:i,dispose(){r.disconnect(),removeEventListener("scroll",i),removeEventListener("resize",i)}}}function _i(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function pf(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},yr={duration:.5,overwrite:!1,delay:0},Dh,$e,Te,Ln=1e8,ye=1/Ln,Mh=Math.PI*2,lv=Mh/4,hv=0,mf=Math.sqrt,uv=Math.cos,dv=Math.sin,Ve=function(t){return typeof t=="string"},De=function(t){return typeof t=="function"},yi=function(t){return typeof t=="number"},ka=function(t){return typeof t>"u"},ei=function(t){return typeof t=="object"},mn=function(t){return t!==!1},Lh=function(){return typeof window<"u"},Ia=function(t){return De(t)||Ve(t)},gf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},en=Array.isArray,Sh=/(?:-?\.?\d|\.)+/gi,Uh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ph=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nh=/[+-]=-?[.\d]+/,_f=/[^,'"\[\]\s]+/gi,fv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pe,jn,bh,Oh,En={},Na={},xf,yf=function(t){return(Na=vr(t,En))&&nn},Ha=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},uo=function(t,e){return!e&&console.warn(t)},vf=function(t,e){return t&&(En[t]=e)&&Na&&(Na[t]=e)||En},fo=function(){return 0},pv={suppressEvents:!0,isStart:!0,kill:!1},Da={suppressEvents:!0,kill:!1},mv={suppressEvents:!0},Fh={},Gi=[],Eh={},Mf,fn={},mh={},af=30,La=[],Bh="",zh=function(t){var e=t[0],n,i;if(ei(e)||De(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=La.length;i--&&!La[i].targetTest(e););n=La[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Gh(t[i],n)))||t.splice(i,1);return t},Wi=function(t){return t._gsap||zh(Un(t))[0]._gsap},kh=function(t,e,n){return(n=t[e])&&De(n)?t[e]():ka(n)&&t.getAttribute&&t.getAttribute(e)||n},cn=function(t,e){return(t=t.split(",")).forEach(e)||t},Le=function(t){return Math.round(t*1e5)/1e5||0},Be=function(t){return Math.round(t*1e7)/1e7||0},Es=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},gv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Oa=function(){var t=Gi.length,e=Gi.slice(0),n,i;for(Eh={},Gi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Hh=function(t){return!!(t._initted||t._startAt||t.add)},Sf=function(t,e,n,i){Gi.length&&!$e&&Oa(),t.render(e,n,i||!!($e&&e<0&&Hh(t))),Gi.length&&!$e&&Oa()},bf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(_f).length<2?e:Ve(t)?t.trim():t},Ef=function(t){return t},wn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},_v=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},vr=function(t,e){for(var n in e)t[n]=e[n];return t},cf=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ei(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Fa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},co=function(t){var e=t.parent||Pe,n=t.keyframes?_v(en(t.keyframes)):wn;if(mn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},xv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},wf=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Va=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Xi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},vs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},yv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},wh=function(t,e,n,i){return t._startAt&&($e?t._startAt.revert(Da):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},vv=function s(t){return!t||t._ts&&s(t.parent)},lf=function(t){return t._repeat?Mr(t._tTime,t=t.duration()+t._rDelay)*t:0},Mr=function(t,e){var n=Math.floor(t=Be(t/e));return t&&n===t?n-1:n},Ba=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ga=function(t){return t._end=Be(t._start+(t._tDur/Math.abs(t._ts||t._rts||ye)||0))},Wa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Be(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ga(t),n._dirty||vs(n,t)),t},Tf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ba(t.rawTime(),e),(!e._dur||go(0,e.totalDuration(),n)-e._tTime>ye)&&e.render(n,!0)),vs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ye}},ti=function(t,e,n,i){return e.parent&&Xi(e),e._start=Be((yi(n)?n:n||t!==Pe?Dn(t,n,e):t._time)+e._delay),e._end=Be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),wf(t,e,"_first","_last",t._sort?"_start":0),Th(e)||(t._recent=e),i||Tf(t,e),t._ts<0&&Wa(t,t._tTime),t},Af=function(t,e){return(En.ScrollTrigger||Ha("scrollTrigger",e))&&En.ScrollTrigger.create(e,t)},Rf=function(t,e,n,i,r){if(qh(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!$e&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Mf!==pn.frame)return Gi.push(t),t._lazy=[r,i],1},Mv=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Th=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Sv=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Mv(t)&&!(!t._initted&&Th(t))||(t._ts<0||t._dp._ts<0)&&!Th(t))?0:1,a=t._rDelay,c=0,l,h,u;if(a&&t._repeat&&(c=go(0,t._tDur,e),h=Mr(c,a),t._yoyo&&h&1&&(o=1-o),h!==Mr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||$e||i||t._zTime===ye||!e&&t._zTime){if(!t._initted&&Rf(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?ye:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&wh(t,e,n,!0),t._onUpdate&&!n&&bn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&bn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Xi(t,1),!n&&!$e&&(bn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},bv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Sr=function(t,e,n,i){var r=t._repeat,o=Be(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Be(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Wa(t,t._tTime=t._tDur*a),t.parent&&Ga(t),n||vs(t.parent,t),t},hf=function(t){return t instanceof Ze?vs(t):Sr(t,t._dur)},Ev={_start:0,endTime:fo,totalDuration:fo},Dn=function s(t,e,n){var i=t.labels,r=t._recent||Ev,o=t.duration()>=Ln?r.endTime(!1):t._dur,a,c,l;return Ve(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(en(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},lo=function(t,e,n){var i=yi(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=mn(c.vars.inherit)&&c.parent;o.immediateRender=mn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Oe(e[0],o,e[r+1])},qi=function(t,e){return t||t===0?e(t):e},go=function(t,e,n){return n<t?t:n>e?e:n},Je=function(t,e){return!Ve(t)||!(e=fv.exec(t))?"":e[1]},wv=function(t,e,n){return qi(n,function(i){return go(t,e,i)})},Ah=[].slice,Cf=function(t,e){return t&&ei(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ei(t[0]))&&!t.nodeType&&t!==jn},Tv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Ve(i)&&!e||Cf(i,1)?(r=n).push.apply(r,Un(i)):n.push(i)})||n},Un=function(t,e,n){return Te&&!e&&Te.selector?Te.selector(t):Ve(t)&&!n&&(bh||!br())?Ah.call((e||Oh).querySelectorAll(t),0):en(t)?Tv(t,n):Cf(t)?Ah.call(t,0):t?[t]:[]},Rh=function(t){return t=Un(t)[0]||uo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Un(e,n.querySelectorAll?n:n===t?uo("Invalid scope")||Oh.createElement("div"):t)}},Pf=function(t){return t.sort(function(){return .5-Math.random()})},If=function(t){if(De(t))return t;var e=ei(t)?t:{each:t},n=Ms(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,h=i,u=i;return Ve(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||e).length,m=o[_],p,M,y,x,A,E,w,R,S;if(!m){if(S=e.grid==="auto"?0:(e.grid||[1,Ln])[1],!S){for(w=-Ln;w<(w=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],p=c?Math.min(S,_)*h-.5:i%S,M=S===Ln?0:c?_*u/S-.5:i/S|0,w=0,R=Ln,E=0;E<_;E++)y=E%S-p,x=M-(E/S|0),m[E]=A=l?Math.abs(l==="y"?x:y):mf(y*y+x*x),A>w&&(w=A),A<R&&(R=A);i==="random"&&Pf(m),m.max=w-R,m.min=R,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:l?l==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Je(e.amount||e.each)||0,n=n&&_<0?kf(n):n}return _=(m[d]-m.min)/m.max||0,Be(m.b+(n?n(_):_)*m.v)+m.u}},Ch=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Be(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(yi(n)?0:Je(n))}},Df=function(t,e){var n=en(t),i,r;return!n&&ei(t)&&(i=n=t.radius||Ln,t.values?(t=Un(t.values),(r=!yi(t[0]))&&(i*=i)):t=Ch(t.increment)),qi(e,n?De(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=Ln,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-a,f=t[u].y-c,d=d*d+f*f):d=Math.abs(t[u]-a),d<l&&(l=d,h=u);return h=!i||l<=i?t[h]:o,r||h===o||yi(o)?h:h+Je(o)}:Ch(t))},Lf=function(t,e,n,i){return qi(en(t)?!e:n===!0?!!(n=0):!i,function(){return en(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Av=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Rv=function(t,e){return function(n){return t(parseFloat(n))+(e||Je(n))}},Cv=function(t,e,n){return Nf(t,e,0,1,n)},Uf=function(t,e,n){return qi(n,function(i){return t[~~e(i)]})},Pv=function s(t,e,n){var i=e-t;return en(t)?Uf(t,s(0,t.length),e):qi(n,function(r){return(i+(r-t)%i)%i+t})},Iv=function s(t,e,n){var i=e-t,r=i*2;return en(t)?Uf(t,s(0,t.length-1),e):qi(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Er=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?_f:Sh),n+=t.substr(e,i-e)+Lf(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Nf=function(t,e,n,i,r){var o=e-t,a=i-n;return qi(r,function(c){return n+((c-t)/o*a||0)})},Dv=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=Ve(t),a={},c,l,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(en(t)&&!en(e)){for(h=[],u=t.length,d=u-2,l=1;l<u;l++)h.push(s(t[l-1],t[l]));u--,r=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=e}else i||(t=vr(en(t)?[]:{},t));if(!h){for(c in e)Wh.call(a,t,c,"get",e[c]);r=function(g){return $h(g,a)||(o?t.p:t)}}}return qi(n,r)},uf=function(t,e,n){var i=t.labels,r=Ln,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},bn=function(t,e,n){var i=t.vars,r=i[e],o=Te,a=t._ctx,c,l,h;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&Gi.length&&Oa(),a&&(Te=a),h=c?r.apply(l,c):r.call(l),Te=o,h},oo=function(t){return Xi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!$e),t.progress()<1&&bn(t,"onInterrupt"),t},xr,Of=[],Ff=function(t){if(t)if(t=!t.name&&t.default||t,Lh()||t.headless){var e=t.name,n=De(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:fo,render:$h,add:Wh,kill:Zv,modifier:Yv,rawVars:0},o={targetTest:0,get:0,getSetter:Xa,aliases:{},register:0};if(br(),t!==i){if(fn[e])return;wn(i,wn(Fa(t,r),o)),vr(i.prototype,vr(r,Fa(t,o))),fn[i.prop=e]=i,t.targetTest&&(La.push(i),Fh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}vf(e,i),t.register&&t.register(nn,i,ln)}else Of.push(t)},xe=255,ao={aqua:[0,xe,xe],lime:[0,xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xe],navy:[0,0,128],white:[xe,xe,xe],olive:[128,128,0],yellow:[xe,xe,0],orange:[xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xe,0,0],pink:[xe,192,203],cyan:[0,xe,xe],transparent:[xe,xe,xe,0]},gh=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*xe+.5|0},Bf=function(t,e,n){var i=t?yi(t)?[t>>16,t>>8&xe,t&xe]:0:ao.black,r,o,a,c,l,h,u,d,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ao[t])i=ao[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&xe,i&xe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&xe,t&xe]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Sh),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(l+1):h+l-h*l,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=gh(c+1/3,r,o),i[1]=gh(c,r,o),i[2]=gh(c-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Uh),n&&i.length<4&&(i[3]=1),i}else i=t.match(Sh)||ao.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/xe,o=i[1]/xe,a=i[2]/xe,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?c=l=0:(f=u-d,l=h>.5?f/(2-u-d):f/(u+d),c=u===r?(o-a)/f+(o<a?6:0):u===o?(a-r)/f+2:(r-o)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},zf=function(t){var e=[],n=[],i=-1;return t.split(xi).forEach(function(r){var o=r.match(bs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},df=function(t,e,n){var i="",r=(t+i).match(xi),o=e?"hsla(":"rgba(",a=0,c,l,h,u;if(!r)return t;if(r=r.map(function(d){return(d=Bf(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=zf(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(xi,"1").split(bs),u=l.length-1;a<u;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!l)for(l=t.split(xi),u=l.length-1;a<u;a++)i+=l[a]+r[a];return i+l[u]},xi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ao)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Lv=/hsl[a]?\(/,Vh=function(t){var e=t.join(" "),n;if(xi.lastIndex=0,xi.test(e))return n=Lv.test(e),t[1]=df(t[1],n),t[0]=df(t[0],n,zf(t[1])),!0},po,pn=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,h,u,d,f,g=function _(m){var p=s()-i,M=m===!0,y,x,A,E;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,y=A-o,(y>0||M)&&(E=++u.frame,d=A-u.time*1e3,u.time=A=A/1e3,o+=y+(y>=r?4:r-y),x=1),M||(c=l(_)),x)for(f=0;f<a.length;f++)a[f](A,d,E,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){xf&&(!bh&&Lh()&&(jn=bh=window,Oh=jn.document||{},En.gsap=nn,(jn.gsapVersions||(jn.gsapVersions=[])).push(nn.version),yf(Na||jn.GreenSockGlobals||!jn.gsap&&jn||{}),Of.forEach(Ff)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},po=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),po=0,l=fo},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,p,M){var y=p?function(x,A,E,w){m(x,A,E,w),u.remove(y)}:m;return u.remove(m),a[M?"unshift":"push"](y),br(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u}(),br=function(){return!po&&pn.wake()},ie={},Uv=/^[\d.\-M][\d.\-,\s]/,Nv=/["']/g,Ov=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(Nv,"").trim():+l,i=c.substr(a+1).trim();return e},Fv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Bv=function(t){var e=(t+"").split("("),n=ie[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Ov(e[1])]:Fv(t).split(",").map(bf)):ie._CE&&Uv.test(t)?ie._CE("",t):n},kf=function(t){return function(e){return 1-t(1-e)}},Hf=function s(t,e){for(var n=t._first,i;n;)n instanceof Ze?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ms=function(t,e){return t&&(De(t)?t:ie[t]||Bv(t))||e},ws=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return cn(t,function(a){ie[a]=En[a]=r,ie[o=a.toLowerCase()]=n;for(var c in r)ie[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ie[a+"."+c]=r[c]}),r},Vf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},_h=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Mh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*dv((h-o)*r)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:Vf(a);return r=Mh/r,c.config=function(l,h){return s(t,l,h)},c},xh=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Vf(n);return i.config=function(r){return s(t,r)},i};cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;ws(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ie.Linear.easeNone=ie.none=ie.Linear.easeIn;ws("Elastic",_h("in"),_h("out"),_h());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};ws("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ws("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});ws("Circ",function(s){return-(mf(1-s*s)-1)});ws("Sine",function(s){return s===1?1:-uv(s*lv)+1});ws("Back",xh("in"),xh("out"),xh());ie.SteppedEase=ie.steps=En.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-ye;return function(a){return((i*go(0,o,a)|0)+r)*n}}};yr.ease=ie["quad.out"];cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Bh+=s+","+s+"Params,"});var Gh=function(t,e){this.id=hv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:kh,this.set=e?e.getSetter:Xa},mo=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Sr(this,+e.duration,1,1),this.data=e.data,Te&&(this._ctx=Te,Te.data.push(this)),po||pn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Sr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(br(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Wa(this,n),!r._dp||r.parent||Tf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ti(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ye||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Sf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+lf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+lf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Mr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ye?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ba(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ye?0:this._rts,this.totalTime(go(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Ga(this),yv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(br(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ye&&(this._tTime-=ye)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ti(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ba(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=mv);var i=$e;return $e=n,Hh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),$e=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Dn(this,n),mn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,mn(i)),this._dur||(this._zTime=-ye),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ye:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ye,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ye)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=De(n)?n:Ef,a=function(){var l=i.then;i.then=null,De(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){oo(this)},s}();wn(mo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ye,_prom:0,_ps:!1,_rts:1});var Ze=function(s){pf(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=mn(n.sortChildren),Pe&&ti(n.parent||Pe,_i(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Af(_i(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return lo(0,arguments,this),this},e.from=function(i,r,o){return lo(1,arguments,this),this},e.fromTo=function(i,r,o,a){return lo(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,co(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Oe(i,r,Dn(this,o),1),this},e.call=function(i,r,o){return ti(this,Oe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,c,l,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=h,o.parent=this,new Oe(i,o,Dn(this,c)),this},e.staggerFrom=function(i,r,o,a,c,l,h){return o.runBackwards=1,co(o).immediateRender=mn(o.immediateRender),this.staggerTo(i,r,o,a,c,l,h)},e.staggerFromTo=function(i,r,o,a,c,l,h,u){return a.startAt=o,co(a).immediateRender=mn(a.immediateRender),this.staggerTo(i,r,a,c,l,h,u)},e.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:Be(i),u=this._zTime<0!=i<0&&(this._initted||!l),d,f,g,_,m,p,M,y,x,A,E,w;if(this!==Pe&&h>c&&i>=0&&(h=c),h!==this._tTime||o||u){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),d=h,x=this._start,y=this._ts,p=!y,u&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=Be(h%m),h===c?(_=this._repeat,d=l):(A=Be(h/m),_=~~A,_&&_===A&&(d=l,_--),d>l&&(d=l)),A=Mr(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),E&&_&1&&(d=l-d,w=1),_!==A&&!this._lock){var R=E&&A&1,S=R===(E&&_&1);if(_<A&&(R=!R),a=R?0:h%l?l:h,this._lock=1,this.render(a||(w?0:Be(_*m)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&bn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,S&&(this._lock=2,a=R?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Hf(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=bv(this,Be(a),Be(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!r&&!A&&(bn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!p){M=0,g&&(h+=this._zTime=-ye);break}}f=g}else{f=this._last;for(var v=i<0?i:d;f;){if(g=f._prev,(f._act||v<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,r,o||$e&&Hh(f)),d!==this._time||!this._ts&&!p){M=0,g&&(h+=this._zTime=v?-ye:ye);break}}f=g}}if(M&&!r&&(this.pause(),M.render(d>=a?0:-ye)._zTime=d>=a?1:-1,this._ts))return this._start=x,Ga(this),this.render(i,r,o);this._onUpdate&&!r&&bn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Xi(this,1),!r&&!(i<0&&!a)&&(h||a||!c)&&(bn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(yi(r)||(r=Dn(this,r,i)),!(i instanceof mo)){if(en(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Ve(i))return this.addLabel(i,r);if(De(i))i=Oe.delayedCall(0,i);else return this}return this!==i?ti(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ln);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Oe?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return Ve(i)?this.removeLabel(i):De(i)?this.killTweensOf(i):(i.parent===this&&Va(this,i),i===this._recent&&(this._recent=this._last),vs(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Be(pn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Dn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Oe.delayedCall(0,r||fo,o);return a.data="isPause",this._hasPause=1,ti(this,a,Dn(this,i))},e.removePause=function(i){var r=this._first;for(i=Dn(this,i);r;)r._start===i&&r.data==="isPause"&&Xi(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Vi!==a[c]&&a[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Un(i),c=this._first,l=yi(r),h;c;)c instanceof Oe?gv(c._targets,a)&&(l?(!Vi||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(h=c.getTweensOf(a,r)).length&&o.push.apply(o,h),c=c._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Dn(o,i),c=r,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,f,g=Oe.to(o,wn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||ye,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==m&&Sr(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},r));return d?g.render(0):g},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,wn({startAt:{time:Dn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),uf(this,Dn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),uf(this,Dn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ye)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return vs(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),vs(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,c=Ln,l,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,ti(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;Sr(o,o===Pe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Pe._ts&&(Sf(Pe,Ba(i,Pe)),Mf=pn.frame),pn.frame>=af){af+=gn.autoSleep||120;var r=Pe._first;if((!r||!r._ts)&&gn.autoSleep&&pn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||pn.sleep()}}},t}(mo);wn(Ze.prototype,{_lock:0,_hasPause:0,_forcing:0});var zv=function(t,e,n,i,r,o,a){var c=new ln(this._pt,t,e,0,1,Zh,null,r),l=0,h=0,u,d,f,g,_,m,p,M;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Er(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),d=n.match(ph)||[];u=ph.exec(i);)g=u[0],_=i.substring(l,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Es(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},l=ph.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(Nh.test(i)||p)&&(c.e=0),this._pt=c,c},Wh=function(t,e,n,i,r,o,a,c,l,h){De(i)&&(i=i(r||0,t,o));var u=t[e],d=n!=="get"?n:De(u)?l?t[e.indexOf("set")||!De(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,f=De(u)?l?Wv:Xf:Yh,g;if(Ve(i)&&(~i.indexOf("random(")&&(i=Er(i)),i.charAt(1)==="="&&(g=Es(d,i)+(Je(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Ph)return!isNaN(d*i)&&i!==""?(g=new ln(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?qv:qf,0,f),l&&(g.fp=l),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&Ha(e,i),zv.call(this,t,e,d,i,f,c||gn.stringFilter,l))},kv=function(t,e,n,i,r){if(De(t)&&(t=ho(t,r,e,n,i)),!ei(t)||t.style&&t.nodeType||en(t)||gf(t))return Ve(t)?ho(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=ho(t[a],r,e,n,i);return o},Xh=function(t,e,n,i,r,o){var a,c,l,h;if(fn[t]&&(a=new fn[t]).init(r,a.rawVars?e[t]:kv(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new ln(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==xr))for(l=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)l[a._props[h]]=c;return a},Vi,Ph,qh=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,y=t._overwrite==="auto"&&!Dh,x=t.timeline,A,E,w,R,S,v,C,z,k,W,$,O,it;if(x&&(!d||!r)&&(r="none"),t._ease=Ms(r,yr.ease),t._yEase=u?kf(Ms(u===!0?r:u,yr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(z=m[0]?Wi(m[0]).harness:0,O=z&&i[z.prop],A=Fa(i,Fh),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&g?Da:pv),_._lazy=0),o){if(Xi(t._startAt=Oe.set(m,wn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&mn(c),startAt:null,delay:0,onUpdate:l&&function(){return bn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&($e||!a&&!f)&&t._startAt.revert(Da),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),w=wn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&mn(c),immediateRender:a,stagger:0,parent:p},A),O&&(w[z.prop]=O),Xi(t._startAt=Oe.set(m,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&($e?t._startAt.revert(Da):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,ye,ye);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&mn(c)||c&&!g,E=0;E<m.length;E++){if(S=m[E],C=S._gsap||zh(m)[E]._gsap,t._ptLookup[E]=W={},Eh[C.id]&&Gi.length&&Oa(),$=M===m?E:M.indexOf(S),z&&(k=new z).init(S,O||A,t,$,M)!==!1&&(t._pt=R=new ln(t._pt,S,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(Z){W[Z]=R}),k.priority&&(v=1)),!z||O)for(w in A)fn[w]&&(k=Xh(w,A,t,$,S,M))?k.priority&&(v=1):W[w]=R=Wh.call(t,S,w,"get",A[w],$,M,0,i.stringFilter);t._op&&t._op[E]&&t.kill(S,t._op[E]),y&&t._pt&&(Vi=t,Pe.killTweensOf(S,W,t.globalTime(e)),it=!t.parent,Vi=0),t._pt&&c&&(Eh[C.id]=1)}v&&Jh(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!it,d&&e<=0&&x.render(Ln,!0,!0)},Hv=function(t,e,n,i,r,o,a,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Ph=1,t.vars[e]="+=0",qh(t,a),Ph=0,c?uo(e+" not eligible for reset"):1;l.push(h)}for(f=l.length;f--;)u=l[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Le(n)+Je(u.e)),u.b&&(u.b=h.s+Je(u.b))},Vv=function(t,e){var n=t[0]?Wi(t[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return e;r=vr({},e);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},Gv=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(en(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},ho=function(t,e,n,i,r){return De(t)?t.call(e,n,i,r):Ve(t)&&~t.indexOf("random(")?Er(t):t},Gf=Bh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Wf={};cn(Gf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Wf[s]=1});var Oe=function(s){pf(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:co(i))||this;var c=a.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,f=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,M=i.parent||Pe,y=(en(n)||gf(n)?yi(n[0]):"length"in i)?[n]:Un(n),x,A,E,w,R,S,v,C;if(a._targets=y.length?zh(y):uo("GSAP target "+n+" not found. https://gsap.com",!gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||Ia(l)||Ia(h)){if(i=a.vars,x=a.timeline=new Ze({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:y}),x.kill(),x.parent=x._dp=_i(a),x._start=0,d||Ia(l)||Ia(h)){if(w=y.length,v=d&&If(d),ei(d))for(R in d)~Gf.indexOf(R)&&(C||(C={}),C[R]=d[R]);for(A=0;A<w;A++)E=Fa(i,Wf),E.stagger=0,p&&(E.yoyoEase=p),C&&vr(E,C),S=y[A],E.duration=+ho(l,_i(a),A,S,y),E.delay=(+ho(h,_i(a),A,S,y)||0)-a._delay,!d&&w===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),x.to(S,E,v?v(A,S,y):0),x._ease=ie.none;x.duration()?l=h=0:a.timeline=0}else if(g){co(wn(x.vars.defaults,{ease:"none"})),x._ease=Ms(g.ease||i.ease||"none");var z=0,k,W,$;if(en(g))g.forEach(function(O){return x.to(y,O,">")}),x.duration();else{E={};for(R in g)R==="ease"||R==="easeEach"||Gv(R,g[R],E,g.easeEach);for(R in E)for(k=E[R].sort(function(O,it){return O.t-it.t}),z=0,A=0;A<k.length;A++)W=k[A],$={ease:W.e,duration:(W.t-(A?k[A-1].t:0))/100*l},$[R]=W.v,x.to(y,$,z),z+=$.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||a.duration(l=x.duration())}else a.timeline=0;return f===!0&&!Dh&&(Vi=_i(a),Pe.killTweensOf(y),Vi=0),ti(M,_i(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!l&&!g&&a._start===Be(M._time)&&mn(u)&&vv(_i(a))&&M.data!=="nested")&&(a._tTime=-ye,a.render(Math.max(0,-h)||0)),m&&Af(_i(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-ye&&!h?c:i<ye?0:i,d,f,g,_,m,p,M,y,x;if(!l)Sv(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,y=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(d=Be(u%_),u===c?(g=this._repeat,d=l):(m=Be(u/_),g=~~m,g&&g===m?(d=l,g--):d>l&&(d=l)),p=this._yoyo&&g&1,p&&(x=this._yEase,d=l-d),m=Mr(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(y&&this._yEase&&Hf(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Be(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Rf(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(x||this._ease)(d/l),this._from&&(this.ratio=M=1-M),!a&&u&&!r&&!m&&(bn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&wh(this,i,r,o),bn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&bn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&wh(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Xi(this,1),!r&&!(h&&!a)&&(u||a||p)&&(bn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,c){po||pn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||qh(this,l),h=this._ease(l/this._dur),Hv(this,i,r,o,a,h,l,c)?this.resetTo(i,r,o,a,1):(Wa(this,0),this.parent||wf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?oo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!$e),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Vi&&Vi.vars.overwrite!==!0)._first||oo(this),this.parent&&o!==this.timeline.totalDuration()&&Sr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?Un(i):a,l=this._ptLookup,h=this._pt,u,d,f,g,_,m,p;if((!r||r==="all")&&xv(a,c))return r==="all"&&(this._pt=0),oo(this);for(u=this._op=this._op||[],r!=="all"&&(Ve(r)&&(_={},cn(r,function(M){return _[M]=1}),r=_),r=Vv(a,r)),p=a.length;p--;)if(~c.indexOf(a[p])){d=l[p],r==="all"?(u[p]=r,g=d,f={}):(f=u[p]=u[p]||{},g=r);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Va(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&oo(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return lo(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return lo(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Pe.killTweensOf(i,r,o)},t}(mo);wn(Oe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});cn("staggerTo,staggerFrom,staggerFromTo",function(s){Oe[s]=function(){var t=new Ze,e=Ah.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Yh=function(t,e,n){return t[e]=n},Xf=function(t,e,n){return t[e](n)},Wv=function(t,e,n,i){return t[e](i.fp,n)},Xv=function(t,e,n){return t.setAttribute(e,n)},Xa=function(t,e){return De(t[e])?Xf:ka(t[e])&&t.setAttribute?Xv:Yh},qf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},qv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Zh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},$h=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Yv=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},Zv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Va(this,e,"_pt"):e.dep||(n=1),e=i;return!n},$v=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Jh=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},ln=function(){function s(e,n,i,r,o,a,c,l,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||qf,this.d=c||this,this.set=l||Yh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=$v,this.m=n,this.mt=r,this.tween=i},s}();cn(Bh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Fh[s]=1});En.TweenMax=En.TweenLite=Oe;En.TimelineLite=En.TimelineMax=Ze;Pe=new Ze({sortChildren:!1,defaults:yr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gn.stringFilter=Vh;var Ss=[],Ua={},Jv=[],ff=0,Kv=0,yh=function(t){return(Ua[t]||Jv).map(function(e){return e()})},Ih=function(){var t=Date.now(),e=[];t-ff>2&&(yh("matchMediaInit"),Ss.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=jn.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),yh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ff=t,yh("matchMedia"))},Yf=function(){function s(e,n){this.selector=n&&Rh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Kv++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){De(n)&&(r=i,i=n,n=De);var o=this,a=function(){var l=Te,h=o.selector,u;return l&&l!==o&&l.data.push(o),r&&(o.selector=Rh(r)),Te=o,u=i.apply(o,arguments),De(u)&&o._r.push(u),Te=l,o.selector=h,o.isReverted=!1,u};return o.last=a,n===De?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},t.ignore=function(n){var i=Te;Te=null,n(this),Te=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Oe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof Ze?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Oe)&&l.revert&&l.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ss.length;o--;)Ss[o].id===this.id&&Ss.splice(o,1)},t.revert=function(n){this.kill(n||{})},s}(),Qv=function(){function s(e){this.contexts=[],this.scope=e,Te&&Te.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){ei(n)||(n={matches:n});var o=new Yf(0,r||this.scope),a=o.conditions={},c,l,h;Te&&!o.selector&&(o.selector=Te.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?h=1:(c=jn.matchMedia(n[l]),c&&(Ss.indexOf(o)<0&&Ss.push(o),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener(Ih):c.addEventListener("change",Ih)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),za={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Ff(i)})},timeline:function(t){return new Ze(t)},getTweensOf:function(t,e){return Pe.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ve(t)&&(t=Un(t)[0]);var r=Wi(t||{}).get,o=n?Ef:bf;return n==="native"&&(n=""),t&&(e?o((fn[e]&&fn[e].get||r)(t,e,n,i)):function(a,c,l){return o((fn[a]&&fn[a].get||r)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=Un(t),t.length>1){var i=t.map(function(h){return nn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=fn[e],a=Wi(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(h){var u=new o;xr._pt=0,u.init(t,n?h+n:h,xr,0,[t]),u.render(1,u),xr._pt&&$h(1,xr)}:a.set(t,c);return o?l:function(h){return l(t,c,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=nn.to(t,wn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,l,h){return r.resetTo(e,c,l,h)};return o.tween=r,o},isTweening:function(t){return Pe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ms(t.ease,yr.ease)),cf(yr,t||{})},config:function(t){return cf(gn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!fn[a]&&!En[a]&&uo(e+" effect requires "+a+" plugin.")}),mh[e]=function(a,c,l){return n(Un(a),wn(c||{},r),l)},o&&(Ze.prototype[e]=function(a,c,l){return this.add(mh[e](a,ei(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){ie[t]=Ms(e)},parseEase:function(t,e){return arguments.length?Ms(t,e):ie},getById:function(t){return Pe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ze(t),i,r;for(n.smoothChildTiming=mn(t.smoothChildTiming),Pe.remove(n),n._dp=0,n._time=n._tTime=Pe._time,i=Pe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Oe&&i.vars.onComplete===i._targets[0]))&&ti(n,i,i._start-i._delay),i=r;return ti(Pe,n,0),n},context:function(t,e){return t?new Yf(t,e):Te},matchMedia:function(t){return new Qv(t)},matchMediaRefresh:function(){return Ss.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ih()},addEventListener:function(t,e){var n=Ua[t]||(Ua[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ua[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Pv,wrapYoyo:Iv,distribute:If,random:Lf,snap:Df,normalize:Cv,getUnit:Je,clamp:wv,splitColor:Bf,toArray:Un,selector:Rh,mapRange:Nf,pipe:Av,unitize:Rv,interpolate:Dv,shuffle:Pf},install:yf,effects:mh,ticker:pn,updateRoot:Ze.updateRoot,plugins:fn,globalTimeline:Pe,core:{PropTween:ln,globals:vf,Tween:Oe,Timeline:Ze,Animation:mo,getCache:Wi,_removeLinkedListItem:Va,reverting:function(){return $e},context:function(t){return t&&Te&&(Te.data.push(t),t._ctx=Te),Te},suppressOverwrites:function(t){return Dh=t}}};cn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return za[s]=Oe[s]});pn.add(Ze.updateRoot);xr=za.to({},{duration:0});var jv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},t1=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=jv(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},vh=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(Ve(r)&&(c={},cn(r,function(h){return c[h]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}t1(a,r)}}}},nn=za.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)$e?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},vh("roundProps",Ch),vh("modifiers"),vh("snap",Df))||za;Oe.version=Ze.version=nn.version="3.13.0";xf=1;Lh()&&br();var e1=ie.Power0,n1=ie.Power1,i1=ie.Power2,s1=ie.Power3,r1=ie.Power4,o1=ie.Linear,a1=ie.Quad,c1=ie.Cubic,l1=ie.Quart,h1=ie.Quint,u1=ie.Strong,d1=ie.Elastic,f1=ie.Back,p1=ie.SteppedEase,m1=ie.Bounce,g1=ie.Sine,_1=ie.Expo,x1=ie.Circ;var Zf,Yi,Tr,nu,Cs,y1,$f,iu,v1=function(){return typeof window<"u"},Mi={},Rs=180/Math.PI,Ar=Math.PI/180,wr=Math.atan2,Jf=1e8,su=/([A-Z])/g,M1=/(left|right|width|margin|padding|x)/i,S1=/[\s,\(]\S/,ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},b1=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},E1=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},w1=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},sp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},rp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},T1=function(t,e,n){return t.style[e]=n},A1=function(t,e,n){return t.style.setProperty(e,n)},R1=function(t,e,n){return t._gsap[e]=n},C1=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},P1=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},I1=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Ie="transform",_n=Ie+"Origin",D1=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in Mi&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ni[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=vi(i,a)}):this.tfm[t]=o.x?o[t]:vi(i,t),t===_n&&(this.tfm.zOrigin=o.zOrigin);else return ni.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Ie)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(_n,e,"")),t=Ie}(r||e)&&this.props.push(t,e,r[t])},op=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},L1=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(su,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=iu(),(!r||!r.isStart)&&!n[Ie]&&(op(n),i.zOrigin&&n[_n]&&(n[_n]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ap=function(t,e){var n={target:t,props:[],revert:L1,save:D1};return t._gsap||nn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},cp,jh=function(t,e){var n=Yi.createElementNS?Yi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Yi.createElement(t);return n&&n.style?n:Yi.createElement(t)},Nn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(su,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Rr(e)||e,1)||""},Kf="O,Moz,ms,Ms,Webkit".split(","),Rr=function(t,e,n){var i=e||Cs,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Kf[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Kf[o]:"")+t},tu=function(){v1()&&window.document&&(Zf=window,Yi=Zf.document,Tr=Yi.documentElement,Cs=jh("div")||{style:{}},y1=jh("div"),Ie=Rr(Ie),_n=Ie+"Origin",Cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cp=!!Rr("perspective"),iu=nn.core.reverting,nu=1)},Qf=function(t){var e=t.ownerSVGElement,n=jh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Tr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Tr.removeChild(n),r},jf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},lp=function(t){var e,n;try{e=t.getBBox()}catch{e=Qf(t),n=1}return e&&(e.width||e.height)||n||(e=Qf(t)),e&&!e.width&&!e.x&&!e.y?{x:+jf(t,["x","cx","x1"])||0,y:+jf(t,["y","cy","y1"])||0,width:0,height:0}:e},hp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&lp(t))},Ps=function(t,e){if(e){var n=t.style,i;e in Mi&&e!==_n&&(e=Ie),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(su,"-$1").toLowerCase())):n.removeAttribute(e)}},Zi=function(t,e,n,i,r,o){var a=new ln(t._pt,e,n,0,1,o?rp:sp);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},tp={deg:1,rad:1,turn:1},U1={grid:1,flex:1},$i=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Cs.style,c=M1.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,m,p;if(i===o||!r||tp[i]||tp[o])return r;if(o!=="px"&&!d&&(r=s(t,e,n,"px")),p=t.getCTM&&hp(t),(f||o==="%")&&(Mi[e]||~e.indexOf("adius")))return g=p?t.getBBox()[c?"width":"height"]:t[h],Le(f?r/g*u:r/100*g);if(a[c?"width":"height"]=u+(d?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Yi||!_.appendChild)&&(_=Yi.body),m=_._gsap,m&&f&&m.width&&c&&m.time===pn.time&&!m.uncache)return Le(r/m.width*u);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,g=t[h],M?t.style[e]=M:Ps(t,e)}else(f||o==="%")&&!U1[Nn(_,"display")]&&(a.position=Nn(t,"position")),_===t&&(a.position="static"),_.appendChild(Cs),g=Cs[h],_.removeChild(Cs),a.position="absolute";return c&&f&&(m=Wi(_),m.time=pn.time,m.width=_[h]),Le(d?g*r/u:g&&r?u/g*r:0)},vi=function(t,e,n,i){var r;return nu||tu(),e in ni&&e!=="transform"&&(e=ni[e],~e.indexOf(",")&&(e=e.split(",")[0])),Mi[e]&&e!=="transform"?(r=yo(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Ya(Nn(t,_n))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=qa[e]&&qa[e](t,e,n)||Nn(t,e)||kh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?$i(t,e,r,n)+n:r},N1=function(t,e,n,i){if(!n||n==="none"){var r=Rr(e,t,1),o=r&&Nn(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Nn(t,"borderTopColor"))}var a=new ln(this._pt,t.style,e,0,1,Zh),c=0,l=0,h,u,d,f,g,_,m,p,M,y,x,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Nn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Nn(t,e)||i,_?t.style[e]=_:Ps(t,e)),h=[n,i],Vh(h),n=h[0],i=h[1],d=n.match(bs)||[],A=i.match(bs)||[],A.length){for(;u=bs.exec(i);)m=u[0],M=i.substring(c,u.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=d[l++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=Es(f,m)+x),p=parseFloat(m),y=m.substr((p+"").length),c=bs.lastIndex-y.length,y||(y=y||gn.units[e]||x,c===i.length&&(i+=y,a.e+=y)),x!==y&&(f=$i(t,e,_,y)||0),a._pt={_next:a._pt,p:M||l===1?M:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?rp:sp;return Nh.test(i)&&(a.e=0),this._pt=a,a},ep={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},O1=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=ep[n]||n,e[1]=ep[i]||i,e.join(" ")},F1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],Mi[a]&&(c=1,a=a==="transformOrigin"?_n:Ie),Ps(n,a);c&&(Ps(n,Ie),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",yo(n,1),o.uncache=1,op(i)))}},qa={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new ln(t._pt,e,n,0,0,F1);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},xo=[1,0,0,1,0,0],up={},dp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},np=function(t){var e=Nn(t,Ie);return dp(e)?xo:e.substr(7).match(Uh).map(Le)},ru=function(t,e){var n=t._gsap||Wi(t),i=t.style,r=np(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?xo:r):(r===xo&&!t.offsetParent&&t!==Tr&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,a=t.nextElementSibling,Tr.appendChild(t)),r=np(t),c?i.display=c:Ps(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):Tr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},eu=function(t,e,n,i,r,o){var a=t._gsap,c=r||ru(t,!0),l=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=c[0],g=c[1],_=c[2],m=c[3],p=c[4],M=c[5],y=e.split(" "),x=parseFloat(y[0])||0,A=parseFloat(y[1])||0,E,w,R,S;n?c!==xo&&(w=f*m-g*_)&&(R=x*(m/w)+A*(-_/w)+(_*M-m*p)/w,S=x*(-g/w)+A*(f/w)-(f*M-g*p)/w,x=R,A=S):(E=lp(t),x=E.x+(~y[0].indexOf("%")?x/100*E.width:x),A=E.y+(~(y[1]||y[0]).indexOf("%")?A/100*E.height:A)),i||i!==!1&&a.smooth?(p=x-l,M=A-h,a.xOffset=u+(p*f+M*_)-p,a.yOffset=d+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[_n]="0px 0px",o&&(Zi(o,a,"xOrigin",l,x),Zi(o,a,"yOrigin",h,A),Zi(o,a,"xOffset",u,a.xOffset),Zi(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+A)},yo=function(t,e){var n=t._gsap||new Gh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),l=Nn(t,_n)||"0",h,u,d,f,g,_,m,p,M,y,x,A,E,w,R,S,v,C,z,k,W,$,O,it,Z,_t,et,ht,Rt,H,U,B;return h=u=d=_=m=p=M=y=x=0,f=g=1,n.svg=!!(t.getCTM&&hp(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Ie]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ie]!=="none"?c[Ie]:"")),i.scale=i.rotate=i.translate="none"),w=ru(t,n.svg),n.svg&&(n.uncache?(Z=t.getBBox(),l=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",it=""):it=!e&&t.getAttribute("data-svg-origin"),eu(t,it||l,!!it||n.originIsAbsolute,n.smooth!==!1,w)),A=n.xOrigin||0,E=n.yOrigin||0,w!==xo&&(C=w[0],z=w[1],k=w[2],W=w[3],h=$=w[4],u=O=w[5],w.length===6?(f=Math.sqrt(C*C+z*z),g=Math.sqrt(W*W+k*k),_=C||z?wr(z,C)*Rs:0,M=k||W?wr(k,W)*Rs+_:0,M&&(g*=Math.abs(Math.cos(M*Ar))),n.svg&&(h-=A-(A*C+E*k),u-=E-(A*z+E*W))):(B=w[6],H=w[7],et=w[8],ht=w[9],Rt=w[10],U=w[11],h=w[12],u=w[13],d=w[14],R=wr(B,Rt),m=R*Rs,R&&(S=Math.cos(-R),v=Math.sin(-R),it=$*S+et*v,Z=O*S+ht*v,_t=B*S+Rt*v,et=$*-v+et*S,ht=O*-v+ht*S,Rt=B*-v+Rt*S,U=H*-v+U*S,$=it,O=Z,B=_t),R=wr(-k,Rt),p=R*Rs,R&&(S=Math.cos(-R),v=Math.sin(-R),it=C*S-et*v,Z=z*S-ht*v,_t=k*S-Rt*v,U=W*v+U*S,C=it,z=Z,k=_t),R=wr(z,C),_=R*Rs,R&&(S=Math.cos(R),v=Math.sin(R),it=C*S+z*v,Z=$*S+O*v,z=z*S-C*v,O=O*S-$*v,C=it,$=Z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Le(Math.sqrt(C*C+z*z+k*k)),g=Le(Math.sqrt(O*O+B*B)),R=wr($,O),M=Math.abs(R)>2e-4?R*Rs:0,x=U?1/(U<0?-U:U):0),n.svg&&(it=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!dp(Nn(t,Ie)),it&&t.setAttribute("transform",it))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Le(f),n.scaleY=Le(g),n.rotation=Le(_)+a,n.rotationX=Le(m)+a,n.rotationY=Le(p)+a,n.skewX=M+a,n.skewY=y+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[_n]=Ya(l)),n.xOffset=n.yOffset=0,n.force3D=gn.force3D,n.renderTransform=n.svg?z1:cp?fp:B1,n.uncache=0,n},Ya=function(t){return(t=t.split(" "))[0]+" "+t[1]},Kh=function(t,e,n){var i=Je(e);return Le(parseFloat(e)+parseFloat($i(t,"x",n+"px",i)))+i},B1=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,fp(t,e)},Ts="0deg",_o="0px",As=") ",fp=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,y=n.zOrigin,x="",A=p==="auto"&&t&&t!==1||p===!0;if(y&&(u!==Ts||h!==Ts)){var E=parseFloat(h)*Ar,w=Math.sin(E),R=Math.cos(E),S;E=parseFloat(u)*Ar,S=Math.cos(E),o=Kh(M,o,w*S*-y),a=Kh(M,a,-Math.sin(E)*-y),c=Kh(M,c,R*S*-y+y)}m!==_o&&(x+="perspective("+m+As),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(A||o!==_o||a!==_o||c!==_o)&&(x+=c!==_o||A?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+As),l!==Ts&&(x+="rotate("+l+As),h!==Ts&&(x+="rotateY("+h+As),u!==Ts&&(x+="rotateX("+u+As),(d!==Ts||f!==Ts)&&(x+="skew("+d+", "+f+As),(g!==1||_!==1)&&(x+="scale("+g+", "+_+As),M.style[Ie]=x||"translate(0, 0)"},z1=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,y=parseFloat(o),x=parseFloat(a),A,E,w,R,S;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Ar,l*=Ar,A=Math.cos(c)*u,E=Math.sin(c)*u,w=Math.sin(c-l)*-d,R=Math.cos(c-l)*d,l&&(h*=Ar,S=Math.tan(l-h),S=Math.sqrt(1+S*S),w*=S,R*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),A*=S,E*=S)),A=Le(A),E=Le(E),w=Le(w),R=Le(R)):(A=u,R=d,E=w=0),(y&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(y=$i(f,"x",o,"px"),x=$i(f,"y",a,"px")),(g||_||m||p)&&(y=Le(y+g-(g*A+_*w)+m),x=Le(x+_-(g*E+_*R)+p)),(i||r)&&(S=f.getBBox(),y=Le(y+i/100*S.width),x=Le(x+r/100*S.height)),S="matrix("+A+","+E+","+w+","+R+","+y+","+x+")",f.setAttribute("transform",S),M&&(f.style[Ie]=S)},k1=function(t,e,n,i,r){var o=360,a=Ve(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?Rs:1),l=c-i,h=i+l+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),u==="cw"&&l<0?l=(l+o*Jf)%o-~~(l/o)*o:u==="ccw"&&l>0&&(l=(l-o*Jf)%o-~~(l/o)*o)),t._pt=d=new ln(t._pt,e,n,i,l,b1),d.e=h,d.u="deg",t._props.push(n),d},ip=function(t,e){for(var n in e)t[n]=e[n];return t},H1=function(t,e,n){var i=ip({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,h,u,d,f,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ie]=e,a=yo(n,1),Ps(n,Ie),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Ie],o[Ie]=e,a=yo(n,1),o[Ie]=l);for(c in Mi)l=i[c],h=a[c],l!==h&&r.indexOf(c)<0&&(f=Je(l),g=Je(h),u=f!==g?$i(n,c,l,g):parseFloat(l),d=parseFloat(h),t._pt=new ln(t._pt,a,c,u,d-u,Qh),t._pt.u=g||0,t._props.push(c));ip(a,i)};cn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});qa[t>1?"border"+s:s]=function(a,c,l,h,u){var d,f;if(arguments.length<4)return d=o.map(function(g){return vi(a,g,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(c,f,u)}});var ou={name:"css",register:tu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,c=n.vars.startAt,l,h,u,d,f,g,_,m,p,M,y,x,A,E,w,R;nu||tu(),this.styles=this.styles||ap(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(fn[_]&&Xh(_,e,n,i,t,r)))){if(f=typeof h,g=qa[_],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Er(h)),g)g(this,t,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",xi.lastIndex=0,xi.test(l)||(m=Je(l),p=Je(h)),p?m!==p&&(l=$i(t,_,l,p)+p):m&&(h+=m),this.add(a,"setProperty",l,h,i,r,0,0,_),o.push(_),R.push(_,0,a[_]);else if(f!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,t,r):c[_],Ve(l)&&~l.indexOf("random(")&&(l=Er(l)),Je(l+"")||l==="auto"||(l+=gn.units[_]||Je(vi(t,_))||""),(l+"").charAt(1)==="="&&(l=vi(t,_))):l=vi(t,_),d=parseFloat(l),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),_ in ni&&(_==="autoAlpha"&&(d===1&&vi(t,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,a.visibility),Zi(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=ni[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Mi,y){if(this.styles.save(_),f==="string"&&h.substring(0,6)==="var(--"&&(h=Nn(t,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),x||(A=t._gsap,A.renderTransform&&!e.parseTransform||yo(t,e.parseTransform),E=e.smoothOrigin!==!1&&A.smooth,x=this._pt=new ln(this._pt,a,Ie,0,1,A.renderTransform,A,0,-1),x.dep=1),_==="scale")this._pt=new ln(this._pt,A,"scaleY",A.scaleY,(M?Es(A.scaleY,M+u):u)-A.scaleY||0,Qh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(_n,0,a[_n]),h=O1(h),A.svg?eu(t,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&Zi(this,A,"zOrigin",A.zOrigin,p),Zi(this,a,_,Ya(l),Ya(h)));continue}else if(_==="svgOrigin"){eu(t,h,1,E,0,this);continue}else if(_ in up){k1(this,A,_,d,M?Es(d,M+h):h);continue}else if(_==="smoothOrigin"){Zi(this,A,"smooth",A.smooth,h);continue}else if(_==="force3D"){A[_]=h;continue}else if(_==="transform"){H1(this,h,t);continue}}else _ in a||(_=Rr(_)||_);if(y||(u||u===0)&&(d||d===0)&&!S1.test(h)&&_ in a)m=(l+"").substr((d+"").length),u||(u=0),p=Je(h)||(_ in gn.units?gn.units[_]:m),m!==p&&(d=$i(t,_,l,p)),this._pt=new ln(this._pt,y?A:a,_,d,(M?Es(d,M+u):u)-d,!y&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?w1:Qh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=E1);else if(_ in a)N1.call(this,t,_,l,M?M+h:h);else if(_ in t)this.add(t,_,l||t[_],M?M+h:h,i,r);else if(_!=="parseTransform"){Ha(_,h);continue}y||(_ in a?R.push(_,0,a[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,l||t[_])),o.push(_)}}w&&Jh(this)},render:function(t,e){if(e.tween._time||!iu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:vi,aliases:ni,getSetter:function(t,e,n){var i=ni[e];return i&&i.indexOf(",")<0&&(e=i),e in Mi&&e!==_n&&(t._gsap.x||vi(t,"x"))?n&&$f===n?e==="scale"?C1:R1:($f=n||{})&&(e==="scale"?P1:I1):t.style&&!ka(t.style[e])?T1:~e.indexOf("-")?A1:Xa(t,e)},core:{_removeProperty:Ps,_getMatrix:ru}};nn.utils.checkPrefix=Rr;nn.core.getStyleSaver=ap;(function(s,t,e,n){var i=cn(s+","+t+","+e,function(r){Mi[r]=1});cn(t,function(r){gn.units[r]="deg",up[r]=1}),ni[i[13]]=s+","+t,cn(n,function(r){var o=r.split(":");ni[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){gn.units[s]="px"});nn.registerPlugin(ou);var Za=nn.registerPlugin(ou)||nn,LM=Za.core.Tween;var NM=Math.PI*2,vo=(s,t=0,e=1)=>Math.min(e,Math.max(t,s));function au(s){let t=s*s*s,e=[],n=[],i=[],r=[],o=[],a=[],c=new Set,l=(h,u,d)=>{let f=[h,u,d].join(":");c.has(f)||(c.add(f),a.push([h,u,d]))};for(let h=-5;h<=5;h++)for(let u=-2;u<=2;u++)l(h*.4,.9,u*.4);for(let h of[-1.6,1.6])for(let u of[-.4,.4])for(let d=-3;d<=1;d++)l(h,d*.4,u);for(let h of[-2.4,2.4])for(let u=-2;u<=3;u++)for(let d of[-.8,0,.8])l(h,u*.4,d);for(let h of[-2.8,2.8])for(let u=-2;u<=1;u++)for(let d of[-.4,.4])l(h,u*.4,d);for(let h=0;h<t;h++){let u=h%s,d=Math.floor(h/s)%s,f=Math.floor(h/(s*s)),g=[(u-(s-1)/2)*1.65/s,(d-(s-1)/2)*1.65/s,(f-(s-1)/2)*1.65/s];e.push(g);let _=h*2.399963229728653,m=1.25+h*37%17/17*.95;n.push([Math.cos(_)*m,Math.sin(h*1.7)*1.45,Math.sin(_)*m*.75]),i.push([Math.cos(_)*1.75,Math.sin(h*1.7)*1.15,Math.sin(_)*1.3]);let p=1-(h+.5)/t*2,M=Math.sqrt(1-p*p);r.push([Math.cos(_)*M*1.6,p*1.6,Math.sin(_)*M*1.6]),o.push(a[Math.round(h/(t-1)*(a.length-1))])}return{count:t,n:s,formations:[e,n,i,r,o,e]}}function pp(s){let t=[0,1,1.15,2,3,4],e=0;for(;e<t.length-2&&s>t[e+1];)e++;return{from:e,to:e+1,weight:vo((s-t[e])/(t[e+1]-t[e]))}}function mp(s){if(s<=0||s>=4)return 0;let t=vo(s/.3),e=1-vo((s-3.72)/.28);return Math.min(t,e)}function gp(s){let t=vo(s)*5,e=Math.min(4,Math.floor(t)),n=vo((t-e)/.38),i=n*n*(3-2*n),r=[0,1,1.15,2,3,4];return r[e]+(r[e+1]-r[e])*i}var $a=s=>Math.max(0,Math.min(1,s)),Ji=["inicio","problema","diagnostico","transformacao","solucoes","projetos","processo","inteligencia","sobre","resultado","contato"];function _p(){let s={cx:4.5,cy:3.3,cz:8.4,tx:0,ty:-.1,tz:-.1,actorX:0,actorY:0,actorZ:0,yaw:.18,actorScale:1,pose:1,shape:0,order:.52,props:1,panel:1,path:1,wire:0,network:0,portal:0,opacity:1,screenX:.74,screenY:.52,mobileX:.49,mobileY:.76,mobileDistance:1.4,light:1.1,walk:0,walkAmp:.25},t={inicio:{...s},problema:{...s,cx:3.4,cy:2.6,cz:8.8,actorX:-.35,yaw:.25,order:0,path:.2,mobileY:.69,mobileDistance:1.35},diagnostico:{...s,cx:2.4,cy:2.2,cz:8.8,yaw:.2,order:.25,props:.28,path:.15,wire:1,pose:.1,mobileY:.76,mobileDistance:1.55,light:1.35,walkAmp:0},transformacao:{...s,cx:2.3,cy:2.1,cz:12,actorY:.4,props:.15,order:.7,path:.5,pose:1,wire:0,screenX:.73,screenY:.5,mobileY:.65,mobileDistance:1.55,light:1.2,walkAmp:0},solucoes:{...s,opacity:0,props:0,walkAmp:0},projetos:{...s,opacity:0,props:0,walkAmp:0},processo:{...s,cx:0,cy:1.8,cz:12,actorScale:.6,props:0,path:0,screenX:.14,screenY:.54,mobileX:.87,mobileY:.44,mobileDistance:1.1,walkAmp:1},inteligencia:{...s,cx:3.2,cy:3.6,cz:11.5,actorScale:.62,pose:0,props:0,path:0,network:1,screenX:.74,screenY:.53,mobileY:.72,mobileDistance:1.55,light:1.25,walkAmp:0},sobre:{...s,opacity:0,props:0,walkAmp:0},resultado:{...s,cx:4.5,cy:4,cz:10.2,order:1,yaw:0,path:1,mobileY:.73,mobileDistance:1.4,walkAmp:0},contato:{...s,cx:5.2,cy:3.5,cz:11,tx:1,ty:.1,tz:-1,actorX:-.4,actorZ:.2,order:1,props:.3,path:1,portal:1,screenX:.77,mobileY:.73,mobileDistance:1.5,light:1.2,walkAmp:.6}};for(let a of Ji)a!=="inicio"&&(t[a].panel=0);let e={...s},n={time:0},i=Za.timeline({paused:!0}).to(n,{time:Ji.length,duration:Ji.length,ease:"none"}),r=Za.parseEase("power2.inOut");function o(a,c){let l=Math.max(0,Ji.indexOf(a)),h=$a(c);i.time(l+h,!0);let u=$a(n.time-l),d=t[Ji[l]],f={...t[Ji[Math.max(0,l-1)]]};Ji[l-1]==="processo"&&(f.screenX=.86,f.mobileY=.79);let g=d.opacity===0?.08:Ji[l]==="transformacao"?.1:.28,_=l===0?1:r($a(u/g));for(let m of Object.keys(d))e[m]=f[m]+(d[m]-f[m])*_;if(e.shape=a==="transformacao"?gp(u):0,a==="transformacao"){e.order=u,e.actorY=.4,e.yaw=-.2+u*.7;let m=M=>{let y=$a(M);return y*y*(3-2*y)},p=m((e.shape-2.2)/.6)*(1-m((e.shape-3.6)/.4));e.cz=12+p*1.5,e.mobileDistance=1.55+p*.25}return a==="problema"&&(e.walk=u*Math.PI*3),a==="inicio"&&(e.walk=u*Math.PI*2),a==="processo"&&(e.screenX=.14+u*.72,e.mobileY=.44+u*.35,e.walk=u*Math.PI*16,e.opacity=1),a==="contato"&&(e.actorX=-.4+u*2.6,e.actorZ=.2-u*2.7,e.walk=u*Math.PI*5),e}return{state:e,seek:o,dispose(){i.kill()}}}Xd();var sn=document.documentElement;sn.classList.contains("reduced-motion")||V1();function V1(){let s=document.getElementById("sceneStage"),t=document.getElementById("sceneCanvas"),e,n=!1,i=no(),r=wa[i],o=innerWidth<=700;try{e=new lr({canvas:t,alpha:!0,antialias:i!=="low",powerPreference:"high-performance"}),e.outputColorSpace=ge,e.toneMapping=to,e.toneMappingExposure=1.1}catch{n=!0;let nt=t.cloneNode();t.replaceWith(nt),t=nt;try{e=new _r(t)}catch{dispatchEvent(new Event("portfolio:graphics-fallback"));return}}sn.dataset.renderer=n?"canvas":"webgl";let a=new Fi,c=new je(38,1,.1,100),l=new Set,h=new Set,u=new Set,d=new _e(1,1,1);l.add(d);let f=n?d:new He(1,1,1,3,.0325);l.add(f);function g(nt={},Et=!1){let L=Et?new Re(nt):new Ee({roughness:.7,metalness:.08,...nt});return h.add(L),L}let _=new gi({color:"#e96c0c",roughness:.38,metalness:.48,clearcoat:.08,clearcoatRoughness:.5,envMapIntensity:.7}),m=g({color:"#272623",roughness:.85}),p=g({color:"#f4f0e8",roughness:.72}),M=g({color:"#111111",roughness:.6}),y=g({color:"#ff7a00",toneMapped:!1},!0),x=g({color:"#ff9b35",transparent:!0,opacity:.6,toneMapped:!1},!0);h.add(_);let A=null;function E(nt,Et,L,Ct,V=a,ut=!0){let F=new kt(ut?f:d,Ct);return F.scale.set(nt,Et,L),V.add(F),F}function w(nt,Et,L,Ct,V=a){let ut=new I(...nt),F=new I(...Et),tt=F.clone().sub(ut),Pt=E(L,tt.length(),L,Ct,V,!1);return Pt.position.copy(ut).add(F).multiplyScalar(.5),Pt.quaternion.setFromUnitVectors(new I(0,1,0),tt.normalize()),Pt}if(!n){A=Ra(e,a),a.add(new fr("#fff4e5","#5d4937",1.4));let nt=new zi("#fff6e8",2.5);nt.position.set(-4,7,6),a.add(nt);let Et=new zi("#ff9c44",.45);Et.position.set(5,4,-4),a.add(Et);let L=new zi("#ffffff",.5);L.position.set(3,2,7),a.add(L)}let R=new $t,S=new $t;a.add(R),R.add(S);let v=Aa({size:1.65,software:n,orange:_});S.add(v.group),sn.dataset.cubeDesign="premium-modular";let C=new Me(f,_,125);C.instanceMatrix.setUsage(Wn),C.frustumCulled=!1,S.add(C);let z=au(n?3:r.grid);C.count=z.count;let k=new Kn(1.6,n?10:28,n?7:18);l.add(k);let W=new kt(k,_);S.add(W),W.visible=!1;let $=new $t;S.add($);let O=1.02;for(let[nt,Et]of[[[-O,-O,-O],[O,-O,-O]],[[-O,O,-O],[O,O,-O]],[[-O,-O,O],[O,-O,O]],[[-O,O,O],[O,O,O]],[[-O,-O,-O],[-O,O,-O]],[[O,-O,-O],[O,O,-O]],[[-O,-O,O],[-O,O,O]],[[O,-O,O],[O,O,O]],[[-O,-O,-O],[-O,-O,O]],[[O,-O,-O],[O,-O,O]],[[-O,O,-O],[-O,O,O]],[[O,O,-O],[O,O,O]]])w(nt,Et,.012,x,$);let it=new $t;a.add(it);let Z=[];for(let nt=0;nt<18;nt++){let Et=.35+nt%4*.34,L=E(.68,Et,.68,nt%3===0?m:p,it),Ct=nt*2.39996+.4,V=new I(Math.sign(Math.cos(Ct))*(2+Math.abs(Math.cos(Ct))*.9),-1.5+Et/2,-2.2-Math.abs(Math.sin(Ct))*1.2),ut=new I([-3.7,-2.5,-1.3,1.3,2.5,3.7][nt%6],-1.5+Et/2,-3.8+Math.floor(nt/6)*1.25);Z.push({mesh:L,height:Et,chaos:V,ordered:ut,angle:(nt%5-2)*.18})}let _t=new $t;a.add(_t);let et=[[-5,-1.49,3],[-3.3,-1.49,2.2],[-2,-1.49,.9],[-.7,-1.49,.35],[.4,-1.49,-.5],[1.1,-1.49,-1.1],[2.3,-1.49,-1.7],[3.1,-1.49,-2.6]],ht=new ds(et.map(nt=>new I(...nt))),Rt=[];if(n){let nt=ht.getPoints(24),Et=g({color:"#ff7a00",transparent:!0,opacity:.08},!0);for(let L=0;L<nt.length-1;L++)Rt.push(w(nt[L].toArray(),nt[L+1].toArray(),.045,y,_t)),w(nt[L].toArray(),nt[L+1].toArray(),.14,Et,_t)}else{let nt=new mi(ht,64,.025,6,!1);l.add(nt),_t.add(new kt(nt,y));let Et=new mi(ht,48,.08,6,!1);l.add(Et),_t.add(new kt(Et,g({color:"#ff7a00",transparent:!0,opacity:.07,depthWrite:!1},!0)))}R.traverse(nt=>{nt.isMesh&&(nt.renderOrder=Math.max(2,nt.renderOrder))});let H=document.createElement("canvas");H.width=H.height=64;let U=H.getContext("2d"),B=U.createRadialGradient(32,32,1,32,32,32);B.addColorStop(0,"#00000060"),B.addColorStop(1,"#00000000"),U.fillStyle=B,U.fillRect(0,0,64,64);let Y=new Ue(H);u.add(Y);let D=g({map:Y,transparent:!0,depthWrite:!1},!0),st=new Ce(3.6,3.6);l.add(st);let mt=new kt(st,D);mt.rotation.x=-Math.PI/2,mt.position.y=-1.51,mt.userData.skipSoftware=!0,a.add(mt);let Tt=new $t;a.add(Tt);let It=[[0,0,0],[-2,1,-.5],[2,.8,-.1],[-1.6,-.65,1.2],[1.8,-.65,1.1],[-.7,1.5,-1.4],[.6,-.85,-1.1]];It.slice(1).forEach((nt,Et)=>{let L=E(.3,.3,.3,Et%2?p:_,Tt);L.position.set(...nt),L.rotation.y=Et*.5});for(let[nt,Et]of[[0,1],[0,2],[0,3],[0,4],[1,5],[2,5],[3,6],[4,6]])w(It[nt],It[Et],.025,y,Tt);let G=new $t;a.add(G),G.position.set(3.5,.1,-3.1),G.rotation.y=-.12;let gt=g({color:"#fff7df",toneMapped:!1},!0);E(.16,3.8,.25,y,G).position.x=-1.14,E(.16,3.8,.25,y,G).position.x=1.14,E(2.4,.16,.25,y,G).position.y=1.82,E(2.12,3.52,.04,gt,G,!1).position.set(0,-.02,-.12),E(2.5,.1,1.4,p,G).position.set(0,-1.84,.4);let wt=_p(),q=new de,j=new I,St=of(s),rt=0,T=0,b=!1,X=0,pt=0,At=0,at=0,vt=0,xt=0;function bt(){o=innerWidth<=700,St.invalidate(),rt=T=0,i=no(),r=wa[i],sn.dataset.quality=i,e.setPixelRatio(Math.min(devicePixelRatio||1,r.dpr,n?1.25:2)),z=au(n?3:r.grid),C.count=z.count,sn.dataset.microcubes=String(C.count),sn.dataset.graphicsInitialized="true"}let zt=Yd({scene:a,software:n,quality:i}),Q=$d({scene:a,software:n,quality:i}),ft=Kd({scene:a,software:n,quality:i}),Ot=rf({scene:a,software:n,quality:i}),ot=sf({scene:a,software:n,quality:i}),ct=tf({scene:a,software:n,quality:i});bt(),addEventListener("resize",bt,{passive:!0}),addEventListener("portfolio:quality",bt),matchMedia("(hover:hover) and (pointer:fine)").matches&&addEventListener("pointermove",nt=>{vt=(nt.clientX/innerWidth-.5)*.1,xt=(nt.clientY/innerHeight-.5)*.05},{passive:!0});function Nt(nt){if(b||(pt=requestAnimationFrame(Nt),document.hidden||sn.classList.contains("reduced-motion")))return;let Et=1e3/(n?30:r.fps);if(nt-X<Et-.5)return;X=nt-(nt-X)%Et;let L=St.read();if(!L){sn.dataset.cinemaImmersive="false";return}sn.dataset.cinemaImmersive=String(L.id==="problema"&&L.rect.top<=2&&L.rect.bottom>Math.min(innerHeight*.45,300)),(rt!==L.width||T!==L.height)&&(rt=L.width,T=L.height,e.setSize(rt,T,!1),c.aspect=rt/T);let Ct=performance.now(),V=L.id,ut=L.progress,F=wt.seek(V,ut),tt=rt/T;s.style.setProperty("--scene-opacity","1"),sn.dataset.morphShape=F.shape.toFixed(3),sn.dataset.sceneOrder=F.order.toFixed(3),c.clearViewOffset(),c.fov=38,j.set(0,-.3,0);let Pt=Math.max(4,4.4/tt);if(V==="transformacao"&&(j.y=.25,Pt=Math.max(4.5,6.8/tt)),V==="inteligencia"&&(Pt=Math.max(4.5,5.7/tt)),V==="contato"&&(j.set(1.15,-.2,-1.1),Pt=Math.max(5.3,8.5/tt)),V==="processo"){F.actorScale=1,Pt=o?2.9/tt:3.25;let yt=[...document.querySelectorAll(".process-node")],Lt=yt[0].getBoundingClientRect(),re=yt.at(-1).getBoundingClientRect(),ce=Math.max(0,Math.min(1,(ut-.1)/.8)),xn=o?.5:(Lt.x+Lt.width/2+(re.x-Lt.x)*ce-L.rect.left)/rt,Tn=o?Math.max(.1,Math.min(.85,(Lt.y+Lt.height/2+(re.y-Lt.y)*ce-L.rect.top)/T)):.48;c.setViewOffset(rt,T,(.5-xn)*rt,(.5-Tn)*T,rt,T)}let Ht=Pt/(2*Math.tan(Ne.degToRad(c.fov/2)));c.position.set(F.cx+vt,F.cy+xt,F.cz).sub(j).normalize().multiplyScalar(Ht).add(j);let Mt=hh(ut);if(zt.group.visible=V==="problema",Q.group.visible=V==="projetos",ft.group.visible=V==="solucoes",Ot.group.visible=V==="inteligencia",ot.group.visible=V==="resultado",ct.group.visible=V==="contato",V==="problema"){let Lt=Math.max(6.4,5.8/tt)*Mt.zoom/(2*Math.tan(Ne.degToRad(c.fov/2)));j.set(...Mt.focus);let re=.52+ut*.3;c.position.set(Math.sin(re)*.77,.78,Math.cos(re)*.9).normalize().multiplyScalar(Lt).add(j)}if(V==="projetos"){let yt=Ca(ut),re=Math.max(7,6.3/tt)*(1-yt.cameraDock*.16)/(2*Math.tan(Ne.degToRad(c.fov/2)));j.set(0,1.1-yt.cameraDock*.6,.18),c.position.set(.18-yt.cameraDock*.13,.2+Math.sin(yt.local*Math.PI)*.035,1).normalize().multiplyScalar(re).add(j)}if(c.lookAt(j),c.updateProjectionMatrix(),R.position.set(F.actorX,F.actorY+(V==="inicio"?Math.sin(nt*8e-4)*.018:0),F.actorZ),R.rotation.y=F.yaw+(V==="inicio"?Math.sin(nt*7e-4)*.075:0),R.scale.setScalar(F.actorScale),V==="problema"){let yt=zt.update(ut,nt,c);R.position.set(...yt.actor),R.position.y+=.3,R.scale.setScalar(.45),R.rotation.set(0,yt.yaw,0)}else R.rotation.x=0;S.rotation.z=0;let Dt=mp(F.shape),Wt=Math.max(0,1-Math.abs(F.shape-2)/.34),Jt=pp(F.shape),ae=z.formations[Jt.from],te=z.formations[Jt.to];if(v.update({fracture:Dt,spread:V==="problema"&&Mt.blocked?.2:V==="diagnostico"?Math.sin(ut*Math.PI)**2*.45:0}),C.visible=Dt>.005&&Wt<.98,C.visible){let yt=(1.65/z.n-.016)*(F.shape>1.2&&F.shape<3.7?.72:1);for(let Lt=0;Lt<C.count;Lt++)q.position.set(ae[Lt][0]+(te[Lt][0]-ae[Lt][0])*Jt.weight,ae[Lt][1]+(te[Lt][1]-ae[Lt][1])*Jt.weight,ae[Lt][2]+(te[Lt][2]-ae[Lt][2])*Jt.weight),q.rotation.set(Lt%3*.23*Dt,Lt%5*.3*Dt,Lt%4*.13*Dt),(F.shape<.05||F.shape>3.95)&&q.rotation.set(0,0,0),q.scale.setScalar(yt*Dt*(1-Wt*.9)),q.updateMatrix(),C.setMatrixAt(Lt,q.matrix);C.instanceMatrix.needsUpdate=!0}W.visible=Wt>.01,W.scale.setScalar(Wt),$.visible=F.wire>.02,$.scale.setScalar(Math.max(.01,F.wire)),it.visible=F.props>.02&&V!=="inicio"&&V!=="problema",it.scale.setScalar(Math.max(.01,F.props)),Z.forEach((yt,Lt)=>{if(yt.mesh.visible=Lt<(V==="inicio"?3:n?8:r.blocks),yt.mesh.scale.set(.68,yt.height,.68),yt.mesh.position.lerpVectors(yt.chaos,yt.ordered,F.order),V==="inicio"&&Lt<3){let re=[[-2.05,-1.25,-.75],[1.9,-1.3,-1.6],[.6,-1.38,-3.2]];yt.mesh.position.set(...re[Lt]),yt.mesh.scale.set(.64,Lt===0?.48:.34,.64)}yt.mesh.rotation.set(yt.angle*(1-F.order),yt.angle*2*(1-F.order),yt.angle*(1-F.order))}),_t.visible=F.path>.02&&V!=="processo"&&V!=="problema",_t.scale.setScalar(Math.max(.02,F.path)),Tt.visible=F.network>.02,Tt.scale.setScalar(Math.max(.01,F.network)),G.visible=F.portal>.02,G.scale.setScalar(Math.max(.01,F.portal)),mt.visible=V!=="problema",mt.position.x=R.position.x,mt.position.z=R.position.z,mt.scale.setScalar(F.actorScale),D.opacity=(1-Dt*.6)*.85,R.visible=V!=="projetos"&&V!=="solucoes"&&V!=="inteligencia"&&V!=="resultado"&&V!=="contato",V==="projetos"&&(it.visible=_t.visible=Tt.visible=G.visible=mt.visible=!1,Q.update(ut,nt,c)),V==="solucoes"&&(it.visible=_t.visible=Tt.visible=G.visible=mt.visible=!1,ft.update(ut,nt,c)),V==="inteligencia"&&(it.visible=_t.visible=Tt.visible=G.visible=mt.visible=!1,Ot.update(ut,nt,c,{width:rt,height:T})),V==="resultado"&&(it.visible=_t.visible=Tt.visible=G.visible=mt.visible=!1,ot.update(ut,nt,c,{mobile:o})),V==="contato"&&(it.visible=_t.visible=Tt.visible=G.visible=mt.visible=!1,ct.update(ut,nt,c,{mobile:o})),n?e.render(a,c):(e.toneMappingExposure=V==="problema"?.88:V==="solucoes"?1.05:V==="inteligencia"?1.12:V==="resultado"?1.04:V==="contato"?1.06:F.light*.92,e.render(a,c),sn.dataset.drawCalls=String(e.info.render.calls),sn.dataset.triangles=String(e.info.render.triangles)),s.style.visibility="visible",sn.dataset.frameMs=String(Math.round((performance.now()-Ct)*10)/10),s.classList.contains("is-ready")||(s.classList.add("is-ready"),sn.dataset.sceneReady="true"),At++,at||(at=nt),nt-at>1600&&(sn.dataset.fps=String(Math.round(At*1e3/(nt-at)*10)/10),At=0,at=nt)}t.addEventListener("webglcontextlost",nt=>{nt.preventDefault(),dispatchEvent(new Event("portfolio:graphics-fallback"))}),addEventListener("pagehide",nt=>{if(!nt.persisted){b=!0,cancelAnimationFrame(pt),removeEventListener("resize",bt),removeEventListener("portfolio:quality",bt),St.dispose(),wt.dispose(),v.dispose(),zt.dispose(),Q.dispose(),ft.dispose(),Ot.dispose(),ot.dispose(),ct.dispose(),A?.dispose();for(let Et of l)Et.dispose();for(let Et of h)Et.dispose();for(let Et of u)Et.dispose();e.dispose?.()}}),pt=requestAnimationFrame(Nt)}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
