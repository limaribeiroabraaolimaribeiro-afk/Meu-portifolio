(()=>{var Jl="170";var Mp=0,lu=1,Sp=2;var yd=1,Ep=2,li=3,Oi=0,nn=1,Mn=2,Li=0,js=1,hu=2,uu=3,du=4,bp=5,rs=100,Tp=101,wp=102,Ap=103,Rp=104,Cp=200,Pp=201,Ip=202,Dp=203,Ac=204,Rc=205,Lp=206,Up=207,Op=208,Np=209,Fp=210,Bp=211,zp=212,kp=213,Hp=214,Cc=0,Pc=1,Ic=2,ir=3,Dc=4,Lc=5,Uc=6,Oc=7,vd=0,Vp=1,Gp=2,Ui=0,Wp=1,Xp=2,qp=3,io=4,Yp=5,Zp=6,$p=7;var Md=300,sr=301,rr=302,Nc=303,Fc=304,va=306,Bc=1e3,cs=1001,zc=1002,Sn=1003,Jp=1004;var Eo=1005;var Zn=1006,Za=1007;var ls=1008;var fi=1009,Sd=1010,Ed=1011,Zr=1012,Kl=1013,hs=1014,$n=1015,so=1016,Ql=1017,jl=1018,or=1020,bd=35902,Td=1021,wd=1022,Gn=1023,Ad=1024,Rd=1025,tr=1026,ar=1027,th=1028,eh=1029,Cd=1030,nh=1031;var ih=1033,$o=33776,Jo=33777,Ko=33778,Qo=33779,kc=35840,Hc=35841,Vc=35842,Gc=35843,Wc=36196,Xc=37492,qc=37496,Yc=37808,Zc=37809,$c=37810,Jc=37811,Kc=37812,Qc=37813,jc=37814,tl=37815,el=37816,nl=37817,il=37818,sl=37819,rl=37820,ol=37821,jo=36492,al=36494,cl=36495,Pd=36283,ll=36284,hl=36285,ul=36286;var ta=2300,dl=2301,$a=2302,fu=2400,pu=2401,mu=2402;var Kp=3200,Qp=3201;var Id=0,jp=1,Di="",ge="srgb",gr="srgb-linear",Ma="linear",me="srgb";var Os=7680;var gu=519,tm=512,em=513,nm=514,Dd=515,im=516,sm=517,rm=518,om=519,_u=35044,bn=35048;var xu="300 es",ui=2e3,ea=2001,Ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=1234567,Vr=Math.PI/180,$r=180/Math.PI;function ys(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[s&255]+je[s>>8&255]+je[s>>16&255]+je[s>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Ze(s,t,e){return Math.max(t,Math.min(e,s))}function sh(s,t){return(s%t+t)%t}function am(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function cm(s,t,e){return s!==t?(e-s)/(t-s):0}function Gr(s,t,e){return(1-e)*s+e*t}function lm(s,t,e,n){return Gr(s,t,1-Math.exp(-e*n))}function hm(s,t=1){return t-Math.abs(sh(s,t*2)-t)}function um(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function dm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function fm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function pm(s,t){return s+Math.random()*(t-s)}function mm(s){return s*(.5-Math.random())}function gm(s){s!==void 0&&(yu=s);let t=yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _m(s){return s*Vr}function xm(s){return s*$r}function ym(s){return(s&s-1)===0&&s!==0}function vm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Mm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sm(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Js(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function an(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ne={DEG2RAD:Vr,RAD2DEG:$r,generateUUID:ys,clamp:Ze,euclideanModulo:sh,mapLinear:am,inverseLerp:cm,lerp:Gr,damp:lm,pingpong:hm,smoothstep:um,smootherstep:dm,randInt:fm,randFloat:pm,randFloatSpread:mm,seededRandom:gm,degToRad:_m,radToDeg:xm,isPowerOfTwo:ym,ceilPowerOfTwo:vm,floorPowerOfTwo:Mm,setQuaternionFromProperEuler:Sm,normalize:an,denormalize:Js},Wt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ie=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],v=i[4],x=i[7],A=i[2],b=i[5],w=i[8];return r[0]=o*_+a*M+c*A,r[3]=o*m+a*v+c*b,r[6]=o*p+a*x+c*w,r[1]=l*_+h*M+u*A,r[4]=l*m+h*v+u*b,r[7]=l*p+h*x+u*w,r[2]=d*_+f*M+g*A,r[5]=d*m+f*v+g*b,r[8]=d*p+f*x+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ja.makeScale(t,e)),this}rotate(t){return this.premultiply(Ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ja=new ie;function Ld(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function na(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Em(){let s=na("canvas");return s.style.display="block",s}var vu={};function kr(s){s in vu||(vu[s]=!0,console.warn(s))}function bm(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Tm(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wm(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ae={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?Ma:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function er(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Mu=[.64,.33,.3,.6,.15,.06],Su=[.2126,.7152,.0722],Eu=[.3127,.329],bu=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tu=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[gr]:{primaries:Mu,whitePoint:Eu,transfer:Ma,toXYZ:bu,fromXYZ:Tu,luminanceCoefficients:Su,workingColorSpaceConfig:{unpackColorSpace:ge},outputColorSpaceConfig:{drawingBufferColorSpace:ge}},[ge]:{primaries:Mu,whitePoint:Eu,transfer:me,toXYZ:bu,fromXYZ:Tu,luminanceCoefficients:Su,outputColorSpaceConfig:{drawingBufferColorSpace:ge}}});var Ns,fl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ns===void 0&&(Ns=na("canvas")),Ns.width=t.width,Ns.height=t.height;let n=Ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=na("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Am=0,ia=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=ys(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ka(i[o].image)):r.push(Ka(i[o]))}else r=Ka(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ka(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rm=0,dn=class s extends Ni{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=cs,i=cs,r=Zn,o=ls,a=Gn,c=fi,l=s.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=ys(),this.name="",this.source=new ia(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Md)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bc:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case zc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bc:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case zc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Md;dn.DEFAULT_ANISOTROPY=1;var _e=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,x=(f+1)/2,A=(p+1)/2,b=(h+d)/4,w=(u+_)/4,P=(g+m)/4;return v>x&&v>A?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=w/n):x>A?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=P/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=w/r,i=P/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pl=class extends Ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ia(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends pl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},sa=class extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ml=class extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var En=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let A=Math.sqrt(v),b=Math.atan2(A,p*M);m=Math.sin(m*b)/A,a=Math.sin(a*b)/A}let x=a*M;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qa=new L,wu=new En,mi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox)),bo.applyMatrix4(t.matrixWorld),this.union(bo)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lr),To.subVectors(this.max,Lr),Fs.subVectors(t.a,Lr),Bs.subVectors(t.b,Lr),zs.subVectors(t.c,Lr),wi.subVectors(Bs,Fs),Ai.subVectors(zs,Bs),Qi.subVectors(Fs,zs);let e=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Qi.z,Qi.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Qi.z,0,-Qi.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Qi.y,Qi.x,0];return!ja(e,Fs,Bs,zs,To)||(e=[1,0,0,0,1,0,0,0,1],!ja(e,Fs,Bs,zs,To))?!1:(wo.crossVectors(wi,Ai),e=[wo.x,wo.y,wo.z],ja(e,Fs,Bs,zs,To))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},si=[new L,new L,new L,new L,new L,new L,new L,new L],kn=new L,bo=new mi,Fs=new L,Bs=new L,zs=new L,wi=new L,Ai=new L,Qi=new L,Lr=new L,To=new L,wo=new L,ji=new L;function ja(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ji.fromArray(s,r);let a=i.x*Math.abs(ji.x)+i.y*Math.abs(ji.y)+i.z*Math.abs(ji.z),c=t.dot(ji),l=e.dot(ji),h=n.dot(ji);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Cm=new mi,Ur=new L,tc=new L,us=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Cm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);let e=Ur.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ur,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(tc)),this.expandByPoint(Ur.copy(t.center).sub(tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ri=new L,ec=new L,Ao=new L,Ri=new L,nc=new L,Ro=new L,ic=new L,gl=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ec.copy(t).add(e).multiplyScalar(.5),Ao.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(ec);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ao),a=Ri.dot(this.direction),c=-Ri.dot(Ao),l=Ri.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ec).addScaledVector(Ao,d),f}intersectSphere(t,e){ri.subVectors(t.center,this.origin);let n=ri.dot(this.direction),i=ri.dot(ri)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,i,r){nc.subVectors(e,t),Ro.subVectors(n,t),ic.crossVectors(nc,Ro);let o=this.direction.dot(ic),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,t);let c=a*this.direction.dot(Ro.crossVectors(Ri,Ro));if(c<0)return null;let l=a*this.direction.dot(nc.cross(Ri));if(l<0||c+l>o)return null;let h=-a*Ri.dot(ic);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ks.setFromMatrixColumn(t,0).length(),r=1/ks.setFromMatrixColumn(t,1).length(),o=1/ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pm,t,Im)}lookAt(t,e,n){let i=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ci.crossVectors(n,yn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ci.crossVectors(n,yn)),Ci.normalize(),Co.crossVectors(yn,Ci),i[0]=Ci.x,i[4]=Co.x,i[8]=yn.x,i[1]=Ci.y,i[5]=Co.y,i[9]=yn.y,i[2]=Ci.z,i[6]=Co.z,i[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],v=n[7],x=n[11],A=n[15],b=i[0],w=i[4],P=i[8],S=i[12],y=i[1],C=i[5],H=i[9],z=i[13],V=i[2],Y=i[6],D=i[10],ot=i[14],$=i[3],ct=i[7],it=i[11],dt=i[15];return r[0]=o*b+a*y+c*V+l*$,r[4]=o*w+a*C+c*Y+l*ct,r[8]=o*P+a*H+c*D+l*it,r[12]=o*S+a*z+c*ot+l*dt,r[1]=h*b+u*y+d*V+f*$,r[5]=h*w+u*C+d*Y+f*ct,r[9]=h*P+u*H+d*D+f*it,r[13]=h*S+u*z+d*ot+f*dt,r[2]=g*b+_*y+m*V+p*$,r[6]=g*w+_*C+m*Y+p*ct,r[10]=g*P+_*H+m*D+p*it,r[14]=g*S+_*z+m*ot+p*dt,r[3]=M*b+v*y+x*V+A*$,r[7]=M*w+v*C+x*Y+A*ct,r[11]=M*P+v*H+x*D+A*it,r[15]=M*S+v*z+x*ot+A*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,v=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,A=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,b=e*M+n*v+i*x+r*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return t[0]=M*w,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*w,t[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*w,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*w,t[4]=v*w,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*w,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*p-e*c*p)*w,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*w,t[8]=x*w,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*w,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*w,t[12]=A*w,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*w,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*m-e*a*m)*w,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,M=c*l,v=c*h,x=c*u,A=n.x,b=n.y,w=n.z;return i[0]=(1-(_+p))*A,i[1]=(f+x)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(f-x)*b,i[5]=(1-(d+p))*b,i[6]=(m+M)*b,i[7]=0,i[8]=(g+v)*w,i[9]=(m-M)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=ks.set(i[0],i[1],i[2]).length(),o=ks.set(i[4],i[5],i[6]).length(),a=ks.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Hn.copy(this);let l=1/r,h=1/o,u=1/a;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,e.setFromRotationMatrix(Hn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ui){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(a===ui)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ea)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ui){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h,g,_;if(a===ui)g=(o+r)*u,_=-2*u;else if(a===ea)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ks=new L,Hn=new he,Pm=new L(0,0,0),Im=new L(1,1,1),Ci=new L,Co=new L,yn=new L,Au=new he,Ru=new En,Pn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Au,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ru.setFromEuler(this),this.setFromQuaternion(Ru,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var ra=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dm=0,Cu=new L,Hs=new En,oi=new he,Po=new L,Or=new L,Lm=new L,Um=new En,Pu=new L(1,0,0),Iu=new L(0,1,0),Du=new L(0,0,1),Lu={type:"added"},Om={type:"removed"},Vs={type:"childadded",child:null},sc={type:"childremoved",child:null},le=class s extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Pn,n=new En,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new he},normalMatrix:{value:new ie}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(Pu,t)}rotateY(t){return this.rotateOnAxis(Iu,t)}rotateZ(t){return this.rotateOnAxis(Du,t)}translateOnAxis(t,e){return Cu.copy(t).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pu,t)}translateY(t){return this.translateOnAxis(Iu,t)}translateZ(t){return this.translateOnAxis(Du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Po.copy(t):Po.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Or,Po,this.up):oi.lookAt(Po,Or,this.up),this.quaternion.setFromRotationMatrix(oi),i&&(oi.extractRotation(i.matrixWorld),Hs.setFromRotationMatrix(oi),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lu),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Om),sc.child=t,this.dispatchEvent(sc),sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lu),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,t,Lm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Um,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};le.DEFAULT_UP=new L(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new L,ai=new L,rc=new L,ci=new L,Gs=new L,Ws=new L,Uu=new L,oc=new L,ac=new L,cc=new L,lc=new _e,hc=new _e,uc=new _e,os=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Vn.subVectors(t,e),i.cross(Vn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Vn.subVectors(i,e),ai.subVectors(n,e),rc.subVectors(t,e);let o=Vn.dot(Vn),a=Vn.dot(ai),c=Vn.dot(rc),l=ai.dot(ai),h=ai.dot(rc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ci.x),c.addScaledVector(o,ci.y),c.addScaledVector(a,ci.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return lc.setScalar(0),hc.setScalar(0),uc.setScalar(0),lc.fromBufferAttribute(t,e),hc.fromBufferAttribute(t,n),uc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(lc,r.x),o.addScaledVector(hc,r.y),o.addScaledVector(uc,r.z),o}static isFrontFacing(t,e,n,i){return Vn.subVectors(n,e),ai.subVectors(t,e),Vn.cross(ai).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Vn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Gs.subVectors(i,n),Ws.subVectors(r,n),oc.subVectors(t,n);let c=Gs.dot(oc),l=Ws.dot(oc);if(c<=0&&l<=0)return e.copy(n);ac.subVectors(t,i);let h=Gs.dot(ac),u=Ws.dot(ac);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Gs,o);cc.subVectors(t,r);let f=Gs.dot(cc),g=Ws.dot(cc);if(g>=0&&f<=g)return e.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ws,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Uu.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Uu,a);let p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Io={h:0,s:0,l:0};function dc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=sh(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=dc(o,r,t+1/3),this.g=dc(o,r,t),this.b=dc(o,r,t-1/3)}return ae.toWorkingColorSpace(this,i),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){let n=Ud[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return ae.fromWorkingColorSpace(tn.copy(this),t),Math.round(Ze(tn.r*255,0,255))*65536+Math.round(Ze(tn.g*255,0,255))*256+Math.round(Ze(tn.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(tn.copy(this),e);let n=tn.r,i=tn.g,r=tn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=ge){ae.fromWorkingColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,i=tn.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(Io);let n=Gr(Pi.h,Io.h,e),i=Gr(Pi.s,Io.s,e),r=Gr(Pi.l,Io.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new ee;ee.NAMES=Ud;var Nm=0,ds=class extends Ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=ys(),this.name="",this.blending=js,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=Rc,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ac&&(n.blendSrc=this.blendSrc),this.blendDst!==Rc&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ce=class extends ds{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new L,Do=new Wt,ze=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_u,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Do.fromBufferAttribute(this,e),Do.applyMatrix3(t),this.setXY(e,Do.x,Do.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Js(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Js(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Js(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Js(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),i=an(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_u&&(t.usage=this.usage),t}};var oa=class extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var aa=class extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ee=class extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},Fm=0,Cn=new he,fc=new le,Xs=new L,vn=new mi,Nr=new mi,Ye=new L,He=class s extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ld(t)?aa:oa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return fc.lookAt(t),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ee(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(vn.min,Nr.min),vn.expandByPoint(Ye),Ye.addVectors(vn.max,Nr.max),vn.expandByPoint(Ye)):(vn.expandByPoint(Nr.min),vn.expandByPoint(Nr.max))}vn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ye));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ye.fromBufferAttribute(a,l),c&&(Xs.fromBufferAttribute(t,l),Ye.add(Xs)),i=Math.max(i,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new L,c[P]=new L;let l=new L,h=new L,u=new L,d=new Wt,f=new Wt,g=new Wt,_=new L,m=new L;function p(P,S,y){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(_),a[S].add(_),a[y].add(_),c[P].add(m),c[S].add(m),c[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,S=M.length;P<S;++P){let y=M[P],C=y.start,H=y.count;for(let z=C,V=C+H;z<V;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let v=new L,x=new L,A=new L,b=new L;function w(P){A.fromBufferAttribute(i,P),b.copy(A);let S=a[P];v.copy(S),v.sub(A.multiplyScalar(A.dot(S))).normalize(),x.crossVectors(b,S);let C=x.dot(c[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,C)}for(let P=0,S=M.length;P<S;++P){let y=M[P],C=y.start,H=y.count;for(let z=C,V=C+H;z<V;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new ze(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ou=new he,ts=new gl,Lo=new us,Nu=new L,Uo=new L,Oo=new L,No=new L,pc=new L,Fo=new L,Fu=new L,Bo=new L,Ht=class extends le{constructor(t=new He,e=new Ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Fo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(pc.fromBufferAttribute(u,t),o?Fo.addScaledVector(pc,h):Fo.addScaledVector(pc.sub(e),h))}e.add(Fo)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(Lo.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Lo,Nu)===null||ts.origin.distanceToSquared(Nu)>(t.far-t.near)**2))&&(Ou.copy(r).invert(),ts.copy(t.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,A=v;x<A;x+=3){let b=a.getX(x),w=a.getX(x+1),P=a.getX(x+2);i=zo(this,p,t,n,l,h,u,b,w,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);i=zo(this,o,t,n,l,h,u,M,v,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,A=v;x<A;x+=3){let b=x,w=x+1,P=x+2;i=zo(this,p,t,n,l,h,u,b,w,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=m,v=m+1,x=m+2;i=zo(this,o,t,n,l,h,u,M,v,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Bm(s,t,e,n,i,r,o,a){let c;if(t.side===nn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Oi,a),c===null)return null;Bo.copy(a),Bo.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Bo);return l<e.near||l>e.far?null:{distance:l,point:Bo.clone(),object:s}}function zo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Uo),s.getVertexPosition(c,Oo),s.getVertexPosition(l,No);let h=Bm(s,t,e,n,Uo,Oo,No,Fu);if(h){let u=new L;os.getBarycoord(Fu,Uo,Oo,No,u),i&&(h.uv=os.getInterpolatedAttribute(i,a,c,l,u,new Wt)),r&&(h.uv1=os.getInterpolatedAttribute(r,a,c,l,u,new Wt)),o&&(h.normal=os.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};os.getNormal(Uo,Oo,No,d.normal),h.face=d,h.barycoord=u}return h}var fe=class s extends He{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2));function g(_,m,p,M,v,x,A,b,w,P,S){let y=x/w,C=A/P,H=x/2,z=A/2,V=b/2,Y=w+1,D=P+1,ot=0,$=0,ct=new L;for(let it=0;it<D;it++){let dt=it*C-z;for(let Ct=0;Ct<Y;Ct++){let G=Ct*y-H;ct[_]=G*M,ct[m]=dt*v,ct[p]=V,l.push(ct.x,ct.y,ct.z),ct[_]=0,ct[m]=0,ct[p]=b>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Ct/w),u.push(1-it/P),ot+=1}}for(let it=0;it<P;it++)for(let dt=0;dt<w;dt++){let Ct=d+dt+Y*it,G=d+dt+Y*(it+1),O=d+(dt+1)+Y*(it+1),k=d+(dt+1)+Y*it;c.push(Ct,G,k),c.push(G,O,k),$+=6}a.addGroup(f,$,S),f+=$,d+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function cn(s){let t={};for(let e=0;e<s.length;e++){let n=cr(s[e]);for(let i in n)t[i]=n[i]}return t}function zm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Od(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var km={clone:cr,merge:cn},Hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jn=class extends ds{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hm,this.fragmentShader=Vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.uniformsGroups=zm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ca=class extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ii=new L,Bu=new Wt,zu=new Wt,en=class extends ca{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,Bu,zu),e.subVectors(zu,Bu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},qs=-90,Ys=1,_l=class extends le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new en(qs,Ys,t,e);i.layers=this.layers,this.add(i);let r=new en(qs,Ys,t,e);r.layers=this.layers,this.add(r);let o=new en(qs,Ys,t,e);o.layers=this.layers,this.add(o);let a=new en(qs,Ys,t,e);a.layers=this.layers,this.add(a);let c=new en(qs,Ys,t,e);c.layers=this.layers,this.add(c);let l=new en(qs,Ys,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},la=class extends dn{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:sr,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xl=class extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new la(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fe(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Li});r.uniforms.tEquirect.value=e;let o=new Ht(i,r),a=e.minFilter;return e.minFilter===ls&&(e.minFilter=Zn),new _l(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},mc=new L,Gm=new L,Wm=new ie,hi=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=mc.subVectors(n,e).cross(Gm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(mc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wm.getNormalMatrix(t),i=this.coplanarPoint(mc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new us,ko=new L,Jr=class{constructor(t=new hi,e=new hi,n=new hi,i=new hi,r=new hi,o=new hi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],v=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+g,x+M).normalize(),n[3].setComponents(c-o,d-h,m-g,x-M).normalize(),n[4].setComponents(c-a,d-u,m-_,x-v).normalize(),e===ui)n[5].setComponents(c+a,d+u,m+_,x+v).normalize();else if(e===ea)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ko.x=i.normal.x>0?t.max.x:t.min.x,ko.y=i.normal.y>0?t.max.y:t.min.y,ko.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nd(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Xm(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var De=class s extends He{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let M=p*d-o;for(let v=0;v<l;v++){let x=v*u-r;g.push(x,-M,0),_.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let v=M+l*p,x=M+l*(p+1),A=M+1+l*(p+1),b=M+1+l*p;f.push(v,x,b),f.push(x,A,b)}this.setIndex(f),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(_,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},qm=`#ifdef USE_ALPHAHASH
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
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,O0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
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
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
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
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
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
}`,E_=`uniform float rotation;
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
}`,b_=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:qm,alphahash_pars_fragment:Ym,alphamap_fragment:Zm,alphamap_pars_fragment:$m,alphatest_fragment:Jm,alphatest_pars_fragment:Km,aomap_fragment:Qm,aomap_pars_fragment:jm,batching_pars_vertex:t0,batching_vertex:e0,begin_vertex:n0,beginnormal_vertex:i0,bsdfs:s0,iridescence_fragment:r0,bumpmap_pars_fragment:o0,clipping_planes_fragment:a0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:l0,clipping_planes_vertex:h0,color_fragment:u0,color_pars_fragment:d0,color_pars_vertex:f0,color_vertex:p0,common:m0,cube_uv_reflection_fragment:g0,defaultnormal_vertex:_0,displacementmap_pars_vertex:x0,displacementmap_vertex:y0,emissivemap_fragment:v0,emissivemap_pars_fragment:M0,colorspace_fragment:S0,colorspace_pars_fragment:E0,envmap_fragment:b0,envmap_common_pars_fragment:T0,envmap_pars_fragment:w0,envmap_pars_vertex:A0,envmap_physical_pars_fragment:B0,envmap_vertex:R0,fog_vertex:C0,fog_pars_vertex:P0,fog_fragment:I0,fog_pars_fragment:D0,gradientmap_pars_fragment:L0,lightmap_pars_fragment:U0,lights_lambert_fragment:O0,lights_lambert_pars_fragment:N0,lights_pars_begin:F0,lights_toon_fragment:z0,lights_toon_pars_fragment:k0,lights_phong_fragment:H0,lights_phong_pars_fragment:V0,lights_physical_fragment:G0,lights_physical_pars_fragment:W0,lights_fragment_begin:X0,lights_fragment_maps:q0,lights_fragment_end:Y0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:$0,logdepthbuf_pars_vertex:J0,logdepthbuf_vertex:K0,map_fragment:Q0,map_pars_fragment:j0,map_particle_fragment:tg,map_particle_pars_fragment:eg,metalnessmap_fragment:ng,metalnessmap_pars_fragment:ig,morphinstance_vertex:sg,morphcolor_vertex:rg,morphnormal_vertex:og,morphtarget_pars_vertex:ag,morphtarget_vertex:cg,normal_fragment_begin:lg,normal_fragment_maps:hg,normal_pars_fragment:ug,normal_pars_vertex:dg,normal_vertex:fg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:gg,clearcoat_pars_fragment:_g,iridescence_pars_fragment:xg,opaque_fragment:yg,packing:vg,premultiplied_alpha_fragment:Mg,project_vertex:Sg,dithering_fragment:Eg,dithering_pars_fragment:bg,roughnessmap_fragment:Tg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:Rg,shadowmap_vertex:Cg,shadowmask_pars_fragment:Pg,skinbase_vertex:Ig,skinning_pars_vertex:Dg,skinning_vertex:Lg,skinnormal_vertex:Ug,specularmap_fragment:Og,specularmap_pars_fragment:Ng,tonemapping_fragment:Fg,tonemapping_pars_fragment:Bg,transmission_fragment:zg,transmission_pars_fragment:kg,uv_pars_fragment:Hg,uv_pars_vertex:Vg,uv_vertex:Gg,worldpos_vertex:Wg,background_vert:Xg,background_frag:qg,backgroundCube_vert:Yg,backgroundCube_frag:Zg,cube_vert:$g,cube_frag:Jg,depth_vert:Kg,depth_frag:Qg,distanceRGBA_vert:jg,distanceRGBA_frag:t_,equirect_vert:e_,equirect_frag:n_,linedashed_vert:i_,linedashed_frag:s_,meshbasic_vert:r_,meshbasic_frag:o_,meshlambert_vert:a_,meshlambert_frag:c_,meshmatcap_vert:l_,meshmatcap_frag:h_,meshnormal_vert:u_,meshnormal_frag:d_,meshphong_vert:f_,meshphong_frag:p_,meshphysical_vert:m_,meshphysical_frag:g_,meshtoon_vert:__,meshtoon_frag:x_,points_vert:y_,points_frag:v_,shadow_vert:M_,shadow_frag:S_,sprite_vert:E_,sprite_frag:b_},qt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Yn={basic:{uniforms:cn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:cn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new ee(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:cn([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:cn([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:cn([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new ee(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:cn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:cn([qt.points,qt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:cn([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:cn([qt.common,qt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:cn([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:cn([qt.sprite,qt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:cn([qt.common,qt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:cn([qt.lights,qt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Yn.physical={uniforms:cn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var Ho={r:0,b:0,g:0},ns=new Pn,T_=new he;function w_(s,t,e,n,i,r,o){let a=new ee(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1,x=g(M);x===null?p(a,c):x&&x.isColor&&(p(x,1),v=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,v){let x=g(v);x&&(x.isCubeTexture||x.mapping===va)?(h===void 0&&(h=new Ht(new fe(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:cr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ns.copy(v.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(T_.makeRotationFromEuler(ns)),h.material.toneMapped=ae.getTransfer(x.colorSpace)!==me,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ht(new De(2,2),new Jn({name:"BackgroundMaterial",uniforms:cr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ae.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,v){M.getRGB(Ho,Od(s)),n.buffers.color.setClear(Ho.r,Ho.g,Ho.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:m}}function A_(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(y,C,H,z,V){let Y=!1,D=u(z,H,C);r!==D&&(r=D,l(r.object)),Y=f(y,z,H,V),Y&&g(y,z,H,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(y,C,H,z),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,C,H){let z=H.wireframe===!0,V=n[y.id];V===void 0&&(V={},n[y.id]=V);let Y=V[C.id];Y===void 0&&(Y={},V[C.id]=Y);let D=Y[z];return D===void 0&&(D=d(c()),Y[z]=D),D}function d(y){let C=[],H=[],z=[];for(let V=0;V<e;V++)C[V]=0,H[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:z,object:y,attributes:{},index:null}}function f(y,C,H,z){let V=r.attributes,Y=C.attributes,D=0,ot=H.getAttributes();for(let $ in ot)if(ot[$].location>=0){let it=V[$],dt=Y[$];if(dt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor)),it===void 0||it.attribute!==dt||dt&&it.data!==dt.data)return!0;D++}return r.attributesNum!==D||r.index!==z}function g(y,C,H,z){let V={},Y=C.attributes,D=0,ot=H.getAttributes();for(let $ in ot)if(ot[$].location>=0){let it=Y[$];it===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(it=y.instanceColor));let dt={};dt.attribute=it,it&&it.data&&(dt.data=it.data),V[$]=dt,D++}r.attributes=V,r.attributesNum=D,r.index=z}function _(){let y=r.newAttributes;for(let C=0,H=y.length;C<H;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){let H=r.newAttributes,z=r.enabledAttributes,V=r.attributeDivisors;H[y]=1,z[y]===0&&(s.enableVertexAttribArray(y),z[y]=1),V[y]!==C&&(s.vertexAttribDivisor(y,C),V[y]=C)}function M(){let y=r.newAttributes,C=r.enabledAttributes;for(let H=0,z=C.length;H<z;H++)C[H]!==y[H]&&(s.disableVertexAttribArray(H),C[H]=0)}function v(y,C,H,z,V,Y,D){D===!0?s.vertexAttribIPointer(y,C,H,V,Y):s.vertexAttribPointer(y,C,H,z,V,Y)}function x(y,C,H,z){_();let V=z.attributes,Y=H.getAttributes(),D=C.defaultAttributeValues;for(let ot in Y){let $=Y[ot];if($.location>=0){let ct=V[ot];if(ct===void 0&&(ot==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),ot==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),ct!==void 0){let it=ct.normalized,dt=ct.itemSize,Ct=t.get(ct);if(Ct===void 0)continue;let G=Ct.buffer,O=Ct.type,k=Ct.bytesPerElement,Z=O===s.INT||O===s.UNSIGNED_INT||ct.gpuType===Kl;if(ct.isInterleavedBufferAttribute){let N=ct.data,st=N.stride,xt=ct.offset;if(N.isInstancedInterleavedBuffer){for(let It=0;It<$.locationSize;It++)p($.location+It,N.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let It=0;It<$.locationSize;It++)m($.location+It);s.bindBuffer(s.ARRAY_BUFFER,G);for(let It=0;It<$.locationSize;It++)v($.location+It,dt/$.locationSize,O,it,st*k,(xt+dt/$.locationSize*It)*k,Z)}else{if(ct.isInstancedBufferAttribute){for(let N=0;N<$.locationSize;N++)p($.location+N,ct.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let N=0;N<$.locationSize;N++)m($.location+N);s.bindBuffer(s.ARRAY_BUFFER,G);for(let N=0;N<$.locationSize;N++)v($.location+N,dt/$.locationSize,O,it,dt*k,dt/$.locationSize*N*k,Z)}}else if(D!==void 0){let it=D[ot];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv($.location,it);break;case 3:s.vertexAttrib3fv($.location,it);break;case 4:s.vertexAttrib4fv($.location,it);break;default:s.vertexAttrib1fv($.location,it)}}}}M()}function A(){P();for(let y in n){let C=n[y];for(let H in C){let z=C[H];for(let V in z)h(z[V].object),delete z[V];delete C[H]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;let C=n[y.id];for(let H in C){let z=C[H];for(let V in z)h(z[V].object),delete z[V];delete C[H]}delete n[y.id]}function w(y){for(let C in n){let H=n[C];if(H[y.id]===void 0)continue;let z=H[y.id];for(let V in z)h(z[V].object),delete z[V];delete H[y.id]}}function P(){S(),o=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function R_(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function C_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Gn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let P=w===so&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==fi&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==$n&&!P)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:A,maxSamples:b}}function P_(s){let t=this,e=null,n=0,i=!1,r=!1,o=new hi,a=new ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,v=M*4,x=p.clippingState||null;c.value=x,x=h(g,d,v,f);for(let A=0;A!==v;++A)x[A]=e[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function I_(s){let t=new WeakMap;function e(o,a){return a===Nc?o.mapping=sr:a===Fc&&(o.mapping=rr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Nc||a===Fc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new xl(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var lr=class extends ca{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ks=4,ku=[.125,.215,.35,.446,.526,.582],as=20,gc=new lr,Hu=new ee,_c=null,xc=0,yc=0,vc=!1,ss=(1+Math.sqrt(5))/2,Zs=1/ss,Vu=[new L(-ss,Zs,0),new L(ss,Zs,0),new L(-Zs,0,ss),new L(Zs,0,ss),new L(0,ss,-Zs),new L(0,ss,Zs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],hr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){_c=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_c,xc,yc),this._renderer.xr.enabled=vc,t.scissorTest=!1,Vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_c=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:so,format:Gn,colorSpace:gr,depthBuffer:!1},i=Gu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D_(r)),this._blurMaterial=L_(r,t,e)}return i}_compileMaterial(t){let e=new Ht(this._lodPlanes[0],t);this._renderer.compile(e,gc)}_sceneToCubeUV(t,e,n,i){let a=new en(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Hu),h.toneMapping=Ui,h.autoClear=!1;let f=new Ce({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new Ht(new fe,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Hu),_=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;Vo(i,M*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===sr||t.mapping===rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Vo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,gc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vu[(i-r-1)%Vu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ht(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*as-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):as;m>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);let p=[],M=0;for(let w=0;w<as;++w){let P=w/_,S=Math.exp(-P*P/2);p.push(S),w===0?M+=S:w<m&&(M+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let x=this._sizeLods[i],A=3*x*(i>v-Ks?i-v+Ks:0),b=4*(this._cubeSize-x);Vo(e,A,b,3*x,2*x),c.setRenderTarget(e),c.render(u,gc)}};function D_(s){let t=[],e=[],n=[],i=s,r=s-Ks+1+ku.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Ks?c=ku[o-s+Ks-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let b=0;b<f;b++){let w=b%3*2/3-1,P=b>2?0:-1,S=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];M.set(S,_*g*b),v.set(d,m*g*b);let y=[b,b,b,b,b,b];x.set(y,p*g*b)}let A=new He;A.setAttribute("position",new ze(M,_)),A.setAttribute("uv",new ze(v,m)),A.setAttribute("faceIndex",new ze(x,p)),t.push(A),i>Ks&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gu(s,t,e){let n=new pi(s,t,e);return n.texture.mapping=va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function L_(s,t,e){let n=new Float32Array(as),i=new L(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rh(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Wu(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Xu(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function rh(){return`

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
	`}function U_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Nc||c===Fc,h=c===sr||c===rr;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new hr(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new hr(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function O_(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&kr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function N_(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let M=f.array;_=f.version;for(let v=0,x=M.length;v<x;v+=3){let A=M[v+0],b=M[v+1],w=M[v+2];d.push(A,b,b,w,w,A)}}else if(g!==void 0){let M=g.array;_=g.version;for(let v=0,x=M.length/3-1;v<x;v+=3){let A=v+0,b=v+1,w=v+2;d.push(A,b,b,w,w,A)}}else return;let m=new(Ld(d)?aa:oa)(d,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function F_(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function B_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function z_(s,t,e){let n=new WeakMap,i=new _e;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*A*4*u),w=new sa(b,x,A,u);w.type=$n,w.needsUpdate=!0;let P=v*4;for(let y=0;y<u;y++){let C=m[y],H=p[y],z=M[y],V=x*A*4*y;for(let Y=0;Y<C.count;Y++){let D=Y*P;f===!0&&(i.fromBufferAttribute(C,Y),b[V+D+0]=i.x,b[V+D+1]=i.y,b[V+D+2]=i.z,b[V+D+3]=0),g===!0&&(i.fromBufferAttribute(H,Y),b[V+D+4]=i.x,b[V+D+5]=i.y,b[V+D+6]=i.z,b[V+D+7]=0),_===!0&&(i.fromBufferAttribute(z,Y),b[V+D+8]=i.x,b[V+D+9]=i.y,b[V+D+10]=i.z,b[V+D+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new Wt(x,A)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function k_(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var ha=class extends dn{constructor(t,e,n,i,r,o,a,c,l,h=tr){if(h!==tr&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===tr&&(n=hs),n===void 0&&h===ar&&(n=or),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Sn,this.minFilter=c!==void 0?c:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fd=new dn,qu=new ha(1,1),Bd=new sa,zd=new ml,kd=new la,Yu=[],Zu=[],$u=new Float32Array(16),Ju=new Float32Array(9),Ku=new Float32Array(4);function _r(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Yu[i];if(r===void 0&&(r=new Float32Array(i),Yu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Sa(s,t){let e=Zu[t];e===void 0&&(e=new Int32Array(t),Zu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function H_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function V_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2fv(this.addr,t),Ge(e,t)}}function G_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;s.uniform3fv(this.addr,t),Ge(e,t)}}function W_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4fv(this.addr,t),Ge(e,t)}}function X_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;Ku.set(n),s.uniformMatrix2fv(this.addr,!1,Ku),Ge(e,n)}}function q_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;Ju.set(n),s.uniformMatrix3fv(this.addr,!1,Ju),Ge(e,n)}}function Y_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;$u.set(n),s.uniformMatrix4fv(this.addr,!1,$u),Ge(e,n)}}function Z_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function $_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2iv(this.addr,t),Ge(e,t)}}function J_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3iv(this.addr,t),Ge(e,t)}}function K_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4iv(this.addr,t),Ge(e,t)}}function Q_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function j_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2uiv(this.addr,t),Ge(e,t)}}function tx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3uiv(this.addr,t),Ge(e,t)}}function ex(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4uiv(this.addr,t),Ge(e,t)}}function nx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(qu.compareFunction=Dd,r=qu):r=Fd,e.setTexture2D(t||r,i)}function ix(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||zd,i)}function sx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||kd,i)}function rx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Bd,i)}function ox(s){switch(s){case 5126:return H_;case 35664:return V_;case 35665:return G_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return Z_;case 35667:case 35671:return $_;case 35668:case 35672:return J_;case 35669:case 35673:return K_;case 5125:return Q_;case 36294:return j_;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}function ax(s,t){s.uniform1fv(this.addr,t)}function cx(s,t){let e=_r(t,this.size,2);s.uniform2fv(this.addr,e)}function lx(s,t){let e=_r(t,this.size,3);s.uniform3fv(this.addr,e)}function hx(s,t){let e=_r(t,this.size,4);s.uniform4fv(this.addr,e)}function ux(s,t){let e=_r(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function dx(s,t){let e=_r(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function fx(s,t){let e=_r(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function px(s,t){s.uniform1iv(this.addr,t)}function mx(s,t){s.uniform2iv(this.addr,t)}function gx(s,t){s.uniform3iv(this.addr,t)}function _x(s,t){s.uniform4iv(this.addr,t)}function xx(s,t){s.uniform1uiv(this.addr,t)}function yx(s,t){s.uniform2uiv(this.addr,t)}function vx(s,t){s.uniform3uiv(this.addr,t)}function Mx(s,t){s.uniform4uiv(this.addr,t)}function Sx(s,t,e){let n=this.cache,i=t.length,r=Sa(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Fd,r[o])}function Ex(s,t,e){let n=this.cache,i=t.length,r=Sa(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||zd,r[o])}function bx(s,t,e){let n=this.cache,i=t.length,r=Sa(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||kd,r[o])}function Tx(s,t,e){let n=this.cache,i=t.length,r=Sa(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Bd,r[o])}function wx(s){switch(s){case 5126:return ax;case 35664:return cx;case 35665:return lx;case 35666:return hx;case 35674:return ux;case 35675:return dx;case 35676:return fx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return xx;case 36294:return yx;case 36295:return vx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Tx}}var yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ox(e.type)}},vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wx(e.type)}},Ml=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Mc=/(\w+)(\])?(\[|\.)?/g;function Qu(s,t){s.seq.push(t),s.map[t.id]=t}function Ax(s,t,e){let n=s.name,i=n.length;for(Mc.lastIndex=0;;){let r=Mc.exec(n),o=Mc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Qu(e,l===void 0?new yl(a,s,t):new vl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Ml(a),Qu(e,u)),e=u}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Ax(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function ju(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Rx=37297,Cx=0;function Px(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var td=new ie;function Ix(s){ae._getMatrix(td,ae.workingColorSpace,s);let t=`mat3( ${td.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(s)){case Ma:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ed(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Px(s.getShaderSource(t),o)}else return i}function Dx(s,t){let e=Ix(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Lx(s,t){let e;switch(t){case Wp:e="Linear";break;case Xp:e="Reinhard";break;case qp:e="Cineon";break;case io:e="ACESFilmic";break;case Zp:e="AgX";break;case $p:e="Neutral";break;case Yp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Go=new L;function Ux(){ae.getLuminanceCoefficients(Go);let s=Go.x.toFixed(4),t=Go.y.toFixed(4),e=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ox(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function Nx(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Hr(s){return s!==""}function nd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function id(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(s){return s.replace(Bx,kx)}var zx=new Map;function kx(s,t){let e=re[t];if(e===void 0){let n=zx.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sl(e)}var Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(s){return s.replace(Hx,Vx)}function Vx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function rd(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Gx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ep?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function Wx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case sr:case rr:t="ENVMAP_TYPE_CUBE";break;case va:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function qx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case vd:t="ENVMAP_BLENDING_MULTIPLY";break;case Vp:t="ENVMAP_BLENDING_MIX";break;case Gp:t="ENVMAP_BLENDING_ADD";break}return t}function Yx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zx(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Gx(e),l=Wx(e),h=Xx(e),u=qx(e),d=Yx(e),f=Ox(e),g=Nx(r),_=i.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hr).join(`
`),p.length>0&&(p+=`
`)):(m=[rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),p=[rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?re.tonemapping_pars_fragment:"",e.toneMapping!==Ui?Lx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,Dx("linearToOutputTexel",e.outputColorSpace),Ux(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),o=Sl(o),o=nd(o,e),o=id(o,e),a=Sl(a),a=nd(a,e),a=id(a,e),o=sd(o),a=sd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=M+m+o,x=M+p+a,A=ju(i,i.VERTEX_SHADER,v),b=ju(i,i.FRAGMENT_SHADER,x);i.attachShader(_,A),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(C){if(s.debug.checkShaderErrors){let H=i.getProgramInfoLog(_).trim(),z=i.getShaderInfoLog(A).trim(),V=i.getShaderInfoLog(b).trim(),Y=!0,D=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,b);else{let ot=ed(i,A,"vertex"),$=ed(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+ot+`
`+$)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||V==="")&&(D=!1);D&&(C.diagnostics={runnable:Y,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(A),i.deleteShader(b),P=new nr(i,_),S=Fx(i,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,Rx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}var $x=0,El=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bl(t),e.set(t,n)),n}},bl=class{constructor(t){this.id=$x++,this.code=t,this.usedTimes=0}};function Jx(s,t,e,n,i,r,o){let a=new ra,c=new El,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,C,H,z){let V=H.fog,Y=z.geometry,D=S.isMeshStandardMaterial?H.environment:null,ot=(S.isMeshStandardMaterial?e:t).get(S.envMap||D),$=ot&&ot.mapping===va?ot.image.height:null,ct=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let it=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,dt=it!==void 0?it.length:0,Ct=0;Y.morphAttributes.position!==void 0&&(Ct=1),Y.morphAttributes.normal!==void 0&&(Ct=2),Y.morphAttributes.color!==void 0&&(Ct=3);let G,O,k,Z;if(ct){let K=Yn[ct];G=K.vertexShader,O=K.fragmentShader}else G=S.vertexShader,O=S.fragmentShader,c.update(S),k=c.getVertexShaderID(S),Z=c.getFragmentShaderID(S);let N=s.getRenderTarget(),st=s.state.buffers.depth.getReversed(),xt=z.isInstancedMesh===!0,It=z.isBatchedMesh===!0,Lt=!!S.map,q=!!S.matcap,rt=!!ot,F=!!S.aoMap,Ft=!!S.lightMap,At=!!S.bumpMap,Ot=!!S.normalMap,tt=!!S.displacementMap,Nt=!!S.emissiveMap,lt=!!S.metalnessMap,T=!!S.roughnessMap,E=S.anisotropy>0,W=S.clearcoat>0,Q=S.dispersion>0,Tt=S.iridescence>0,ht=S.sheen>0,pt=S.transmission>0,yt=E&&!!S.anisotropyMap,St=W&&!!S.clearcoatMap,Xt=W&&!!S.clearcoatNormalMap,ut=W&&!!S.clearcoatRoughnessMap,Mt=Tt&&!!S.iridescenceMap,Vt=Tt&&!!S.iridescenceThicknessMap,ft=ht&&!!S.sheenColorMap,Et=ht&&!!S.sheenRoughnessMap,Bt=!!S.specularMap,at=!!S.specularColorMap,bt=!!S.specularIntensityMap,U=pt&&!!S.transmissionMap,Pt=pt&&!!S.thicknessMap,X=!!S.gradientMap,mt=!!S.alphaMap,B=S.alphaTest>0,nt=!!S.alphaHash,Dt=!!S.extensions,Gt=Ui;S.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Gt=s.toneMapping);let R={shaderID:ct,shaderType:S.type,shaderName:S.name,vertexShader:G,fragmentShader:O,defines:S.defines,customVertexShaderID:k,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:It,batchingColor:It&&z._colorsTexture!==null,instancing:xt,instancingColor:xt&&z.instanceColor!==null,instancingMorph:xt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?s.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:gr,alphaToCoverage:!!S.alphaToCoverage,map:Lt,matcap:q,envMap:rt,envMapMode:rt&&ot.mapping,envMapCubeUVHeight:$,aoMap:F,lightMap:Ft,bumpMap:At,normalMap:Ot,displacementMap:d&&tt,emissiveMap:Nt,normalMapObjectSpace:Ot&&S.normalMapType===jp,normalMapTangentSpace:Ot&&S.normalMapType===Id,metalnessMap:lt,roughnessMap:T,anisotropy:E,anisotropyMap:yt,clearcoat:W,clearcoatMap:St,clearcoatNormalMap:Xt,clearcoatRoughnessMap:ut,dispersion:Q,iridescence:Tt,iridescenceMap:Mt,iridescenceThicknessMap:Vt,sheen:ht,sheenColorMap:ft,sheenRoughnessMap:Et,specularMap:Bt,specularColorMap:at,specularIntensityMap:bt,transmission:pt,transmissionMap:U,thicknessMap:Pt,gradientMap:X,opaque:S.transparent===!1&&S.blending===js&&S.alphaToCoverage===!1,alphaMap:mt,alphaTest:B,alphaHash:nt,combine:S.combine,mapUv:Lt&&_(S.map.channel),aoMapUv:F&&_(S.aoMap.channel),lightMapUv:Ft&&_(S.lightMap.channel),bumpMapUv:At&&_(S.bumpMap.channel),normalMapUv:Ot&&_(S.normalMap.channel),displacementMapUv:tt&&_(S.displacementMap.channel),emissiveMapUv:Nt&&_(S.emissiveMap.channel),metalnessMapUv:lt&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:yt&&_(S.anisotropyMap.channel),clearcoatMapUv:St&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(S.sheenRoughnessMap.channel),specularMapUv:Bt&&_(S.specularMap.channel),specularColorMapUv:at&&_(S.specularColorMap.channel),specularIntensityMapUv:bt&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:Pt&&_(S.thicknessMap.channel),alphaMapUv:mt&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ot||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(Lt||mt),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:st,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Ct,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Lt&&S.map.isVideoTexture===!0&&ae.getTransfer(S.map.colorSpace)===me,decodeVideoTextureEmissive:Nt&&S.emissiveMap.isVideoTexture===!0&&ae.getTransfer(S.emissiveMap.colorSpace)===me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mn,flipSided:S.side===nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Dt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&S.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return R.vertexUv1s=l.has(1),R.vertexUv2s=l.has(2),R.vertexUv3s=l.has(3),l.clear(),R}function p(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)y.push(C),y.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(M(y,S),v(y,S),y.push(s.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function v(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let y=g[S.type],C;if(y){let H=Yn[y];C=km.clone(H.uniforms)}else C=S.uniforms;return C}function A(S,y){let C;for(let H=0,z=h.length;H<z;H++){let V=h[H];if(V.cacheKey===y){C=V,++C.usedTimes;break}}return C===void 0&&(C=new Zx(s,y,S,r),h.push(C)),C}function b(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function w(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:P}}function Kx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Qx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function od(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ad(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Qx),n.length>1&&n.sort(d||od),i.length>1&&i.sort(d||od)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function jx(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new ad,s.set(n,[o])):i>=r.length?(o=new ad,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function ty(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new ee};break;case"SpotLight":e={position:new L,direction:new L,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function ey(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ny=0;function iy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function sy(s){let t=new ty,e=ey(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let i=new L,r=new he,o=new he;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,v=0,x=0,A=0,b=0,w=0;l.sort(iy);for(let S=0,y=l.length;S<y;S++){let C=l[S],H=C.color,z=C.intensity,V=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=H.r*z,u+=H.g*z,d+=H.b*z;else if(C.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(C.sh.coefficients[D],z);w++}else if(C.isDirectionalLight){let D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ot=C.shadow,$=e.get(C);$.shadowIntensity=ot.intensity,$.shadowBias=ot.bias,$.shadowNormalBias=ot.normalBias,$.shadowRadius=ot.radius,$.shadowMapSize=ot.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=C.shadow.matrix,M++}n.directional[f]=D,f++}else if(C.isSpotLight){let D=t.get(C);D.position.setFromMatrixPosition(C.matrixWorld),D.color.copy(H).multiplyScalar(z),D.distance=V,D.coneCos=Math.cos(C.angle),D.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),D.decay=C.decay,n.spot[_]=D;let ot=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,ot.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[_]=ot.matrix,C.castShadow){let $=e.get(C);$.shadowIntensity=ot.intensity,$.shadowBias=ot.bias,$.shadowNormalBias=ot.normalBias,$.shadowRadius=ot.radius,$.shadowMapSize=ot.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=Y,x++}_++}else if(C.isRectAreaLight){let D=t.get(C);D.color.copy(H).multiplyScalar(z),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=D,m++}else if(C.isPointLight){let D=t.get(C);if(D.color.copy(C.color).multiplyScalar(C.intensity),D.distance=C.distance,D.decay=C.decay,C.castShadow){let ot=C.shadow,$=e.get(C);$.shadowIntensity=ot.intensity,$.shadowBias=ot.bias,$.shadowNormalBias=ot.normalBias,$.shadowRadius=ot.radius,$.shadowMapSize=ot.mapSize,$.shadowCameraNear=ot.camera.near,$.shadowCameraFar=ot.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=D,g++}else if(C.isHemisphereLight){let D=t.get(C);D.skyColor.copy(C.color).multiplyScalar(z),D.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[p]=D,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qt.LTC_FLOAT_1,n.rectAreaLTC2=qt.LTC_FLOAT_2):(n.rectAreaLTC1=qt.LTC_HALF_1,n.rectAreaLTC2=qt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==v||P.numSpotShadows!==x||P.numSpotMaps!==A||P.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=v,P.numSpotShadows=x,P.numSpotMaps=A,P.numLightProbes=w,n.version=ny++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let v=l[p];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(v.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function cd(s){let t=new sy(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ry(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new cd(s),t.set(i,[a])):r>=o.length?(a=new cd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Tl=class extends ds{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wl=class extends ds{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},oy=`void main() {
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
}`;function cy(s,t,e){let n=new Jr,i=new Wt,r=new Wt,o=new _e,a=new Tl({depthPacking:Qp}),c=new wl,l={},h=e.maxTextureSize,u={[Oi]:nn,[nn]:Oi,[Mn]:Mn},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:oy,fragmentShader:ay}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new He;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yd;let p=this.type;this.render=function(b,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let S=s.getRenderTarget(),y=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Li),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let z=p!==li&&this.type===li,V=p===li&&this.type!==li;for(let Y=0,D=b.length;Y<D;Y++){let ot=b[Y],$=ot.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);let ct=$.getFrameExtents();if(i.multiply(ct),r.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ct.x),i.x=r.x*ct.x,$.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ct.y),i.y=r.y*ct.y,$.mapSize.y=r.y)),$.map===null||z===!0||V===!0){let dt=this.type!==li?{minFilter:Sn,magFilter:Sn}:{};$.map!==null&&$.map.dispose(),$.map=new pi(i.x,i.y,dt),$.map.texture.name=ot.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();let it=$.getViewportCount();for(let dt=0;dt<it;dt++){let Ct=$.getViewport(dt);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),H.viewport(o),$.updateMatrices(ot,dt),n=$.getFrustum(),x(w,P,$.camera,ot,this.type)}$.isPointLightShadow!==!0&&this.type===li&&M($,P),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,y,C)};function M(b,w){let P=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new pi(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,P,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,P,f,_,null)}function v(b,w,P,S){let y=null,C=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)y=C;else if(y=P.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let H=y.uuid,z=w.uuid,V=l[H];V===void 0&&(V={},l[H]=V);let Y=V[z];Y===void 0&&(Y=y.clone(),V[z]=Y,w.addEventListener("dispose",A)),y=Y}if(y.visible=w.visible,y.wireframe=w.wireframe,S===li?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let H=s.properties.get(y);H.light=P}return y}function x(b,w,P,S,y){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===li)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);let z=t.update(b),V=b.material;if(Array.isArray(V)){let Y=z.groups;for(let D=0,ot=Y.length;D<ot;D++){let $=Y[D],ct=V[$.materialIndex];if(ct&&ct.visible){let it=v(b,ct,S,y);b.onBeforeShadow(s,b,w,P,z,it,$),s.renderBufferDirect(P,null,z,it,b,$),b.onAfterShadow(s,b,w,P,z,it,$)}}}else if(V.visible){let Y=v(b,V,S,y);b.onBeforeShadow(s,b,w,P,z,Y,null),s.renderBufferDirect(P,null,z,Y,b,null),b.onAfterShadow(s,b,w,P,z,Y,null)}}let H=b.children;for(let z=0,V=H.length;z<V;z++)x(H[z],w,P,S,y)}function A(b){b.target.removeEventListener("dispose",A);for(let P in l){let S=l[P],y=b.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var ly={[Cc]:Pc,[Ic]:Uc,[Dc]:Oc,[ir]:Lc,[Pc]:Cc,[Uc]:Ic,[Oc]:Dc,[Lc]:ir};function hy(s,t){function e(){let U=!1,Pt=new _e,X=null,mt=new _e(0,0,0,0);return{setMask:function(B){X!==B&&!U&&(s.colorMask(B,B,B,B),X=B)},setLocked:function(B){U=B},setClear:function(B,nt,Dt,Gt,R){R===!0&&(B*=Gt,nt*=Gt,Dt*=Gt),Pt.set(B,nt,Dt,Gt),mt.equals(Pt)===!1&&(s.clearColor(B,nt,Dt,Gt),mt.copy(Pt))},reset:function(){U=!1,X=null,mt.set(-1,0,0,0)}}}function n(){let U=!1,Pt=!1,X=null,mt=null,B=null;return{setReversed:function(nt){if(Pt!==nt){let Dt=t.get("EXT_clip_control");Pt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);let Gt=B;B=null,this.setClear(Gt)}Pt=nt},getReversed:function(){return Pt},setTest:function(nt){nt?N(s.DEPTH_TEST):st(s.DEPTH_TEST)},setMask:function(nt){X!==nt&&!U&&(s.depthMask(nt),X=nt)},setFunc:function(nt){if(Pt&&(nt=ly[nt]),mt!==nt){switch(nt){case Cc:s.depthFunc(s.NEVER);break;case Pc:s.depthFunc(s.ALWAYS);break;case Ic:s.depthFunc(s.LESS);break;case ir:s.depthFunc(s.LEQUAL);break;case Dc:s.depthFunc(s.EQUAL);break;case Lc:s.depthFunc(s.GEQUAL);break;case Uc:s.depthFunc(s.GREATER);break;case Oc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}mt=nt}},setLocked:function(nt){U=nt},setClear:function(nt){B!==nt&&(Pt&&(nt=1-nt),s.clearDepth(nt),B=nt)},reset:function(){U=!1,X=null,mt=null,B=null,Pt=!1}}}function i(){let U=!1,Pt=null,X=null,mt=null,B=null,nt=null,Dt=null,Gt=null,R=null;return{setTest:function(K){U||(K?N(s.STENCIL_TEST):st(s.STENCIL_TEST))},setMask:function(K){Pt!==K&&!U&&(s.stencilMask(K),Pt=K)},setFunc:function(K,Rt,wt){(X!==K||mt!==Rt||B!==wt)&&(s.stencilFunc(K,Rt,wt),X=K,mt=Rt,B=wt)},setOp:function(K,Rt,wt){(nt!==K||Dt!==Rt||Gt!==wt)&&(s.stencilOp(K,Rt,wt),nt=K,Dt=Rt,Gt=wt)},setLocked:function(K){U=K},setClear:function(K){R!==K&&(s.clearStencil(K),R=K)},reset:function(){U=!1,Pt=null,X=null,mt=null,B=null,nt=null,Dt=null,Gt=null,R=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,v=null,x=null,A=null,b=null,w=new ee(0,0,0),P=0,S=!1,y=null,C=null,H=null,z=null,V=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,ot=0,$=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec($)[1]),D=ot>=1):$.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),D=ot>=2);let ct=null,it={},dt=s.getParameter(s.SCISSOR_BOX),Ct=s.getParameter(s.VIEWPORT),G=new _e().fromArray(dt),O=new _e().fromArray(Ct);function k(U,Pt,X,mt){let B=new Uint8Array(4),nt=s.createTexture();s.bindTexture(U,nt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<X;Dt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(Pt,0,s.RGBA,1,1,mt,0,s.RGBA,s.UNSIGNED_BYTE,B):s.texImage2D(Pt+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,B);return nt}let Z={};Z[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(s.DEPTH_TEST),o.setFunc(ir),At(!1),Ot(lu),N(s.CULL_FACE),F(Li);function N(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function st(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function xt(U,Pt){return u[U]!==Pt?(s.bindFramebuffer(U,Pt),u[U]=Pt,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Pt),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Pt),!0):!1}function It(U,Pt){let X=f,mt=!1;if(U){X=d.get(Pt),X===void 0&&(X=[],d.set(Pt,X));let B=U.textures;if(X.length!==B.length||X[0]!==s.COLOR_ATTACHMENT0){for(let nt=0,Dt=B.length;nt<Dt;nt++)X[nt]=s.COLOR_ATTACHMENT0+nt;X.length=B.length,mt=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,mt=!0);mt&&s.drawBuffers(X)}function Lt(U){return g!==U?(s.useProgram(U),g=U,!0):!1}let q={[rs]:s.FUNC_ADD,[Tp]:s.FUNC_SUBTRACT,[wp]:s.FUNC_REVERSE_SUBTRACT};q[Ap]=s.MIN,q[Rp]=s.MAX;let rt={[Cp]:s.ZERO,[Pp]:s.ONE,[Ip]:s.SRC_COLOR,[Ac]:s.SRC_ALPHA,[Fp]:s.SRC_ALPHA_SATURATE,[Op]:s.DST_COLOR,[Lp]:s.DST_ALPHA,[Dp]:s.ONE_MINUS_SRC_COLOR,[Rc]:s.ONE_MINUS_SRC_ALPHA,[Np]:s.ONE_MINUS_DST_COLOR,[Up]:s.ONE_MINUS_DST_ALPHA,[Bp]:s.CONSTANT_COLOR,[zp]:s.ONE_MINUS_CONSTANT_COLOR,[kp]:s.CONSTANT_ALPHA,[Hp]:s.ONE_MINUS_CONSTANT_ALPHA};function F(U,Pt,X,mt,B,nt,Dt,Gt,R,K){if(U===Li){_===!0&&(st(s.BLEND),_=!1);return}if(_===!1&&(N(s.BLEND),_=!0),U!==bp){if(U!==m||K!==S){if((p!==rs||x!==rs)&&(s.blendEquation(s.FUNC_ADD),p=rs,x=rs),K)switch(U){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hu:s.blendFunc(s.ONE,s.ONE);break;case uu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case du:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case uu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case du:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,v=null,A=null,b=null,w.set(0,0,0),P=0,m=U,S=K}return}B=B||Pt,nt=nt||X,Dt=Dt||mt,(Pt!==p||B!==x)&&(s.blendEquationSeparate(q[Pt],q[B]),p=Pt,x=B),(X!==M||mt!==v||nt!==A||Dt!==b)&&(s.blendFuncSeparate(rt[X],rt[mt],rt[nt],rt[Dt]),M=X,v=mt,A=nt,b=Dt),(Gt.equals(w)===!1||R!==P)&&(s.blendColor(Gt.r,Gt.g,Gt.b,R),w.copy(Gt),P=R),m=U,S=!1}function Ft(U,Pt){U.side===Mn?st(s.CULL_FACE):N(s.CULL_FACE);let X=U.side===nn;Pt&&(X=!X),At(X),U.blending===js&&U.transparent===!1?F(Li):F(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let mt=U.stencilWrite;a.setTest(mt),mt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Nt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?N(s.SAMPLE_ALPHA_TO_COVERAGE):st(s.SAMPLE_ALPHA_TO_COVERAGE)}function At(U){y!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),y=U)}function Ot(U){U!==Mp?(N(s.CULL_FACE),U!==C&&(U===lu?s.cullFace(s.BACK):U===Sp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):st(s.CULL_FACE),C=U}function tt(U){U!==H&&(D&&s.lineWidth(U),H=U)}function Nt(U,Pt,X){U?(N(s.POLYGON_OFFSET_FILL),(z!==Pt||V!==X)&&(s.polygonOffset(Pt,X),z=Pt,V=X)):st(s.POLYGON_OFFSET_FILL)}function lt(U){U?N(s.SCISSOR_TEST):st(s.SCISSOR_TEST)}function T(U){U===void 0&&(U=s.TEXTURE0+Y-1),ct!==U&&(s.activeTexture(U),ct=U)}function E(U,Pt,X){X===void 0&&(ct===null?X=s.TEXTURE0+Y-1:X=ct);let mt=it[X];mt===void 0&&(mt={type:void 0,texture:void 0},it[X]=mt),(mt.type!==U||mt.texture!==Pt)&&(ct!==X&&(s.activeTexture(X),ct=X),s.bindTexture(U,Pt||Z[U]),mt.type=U,mt.texture=Pt)}function W(){let U=it[ct];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(U){G.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),G.copy(U))}function Et(U){O.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),O.copy(U))}function Bt(U,Pt){let X=l.get(Pt);X===void 0&&(X=new WeakMap,l.set(Pt,X));let mt=X.get(U);mt===void 0&&(mt=s.getUniformBlockIndex(Pt,U.name),X.set(U,mt))}function at(U,Pt){let mt=l.get(Pt).get(U);c.get(Pt)!==mt&&(s.uniformBlockBinding(Pt,mt,U.__bindingPointIndex),c.set(Pt,mt))}function bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ct=null,it={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,v=null,x=null,A=null,b=null,w=new ee(0,0,0),P=0,S=!1,y=null,C=null,H=null,z=null,V=null,G.set(0,0,s.canvas.width,s.canvas.height),O.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:N,disable:st,bindFramebuffer:xt,drawBuffers:It,useProgram:Lt,setBlending:F,setMaterial:Ft,setFlipSided:At,setCullFace:Ot,setLineWidth:tt,setPolygonOffset:Nt,setScissorTest:lt,activeTexture:T,bindTexture:E,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:Tt,texImage2D:Mt,texImage3D:Vt,updateUBOMapping:Bt,uniformBlockBinding:at,texStorage2D:Xt,texStorage3D:ut,texSubImage2D:ht,texSubImage3D:pt,compressedTexSubImage2D:yt,compressedTexSubImage3D:St,scissor:ft,viewport:Et,reset:bt}}function ld(s,t,e,n){let i=uy(n);switch(e){case Td:return s*t;case Ad:return s*t;case Rd:return s*t*2;case th:return s*t/i.components*i.byteLength;case eh:return s*t/i.components*i.byteLength;case Cd:return s*t*2/i.components*i.byteLength;case nh:return s*t*2/i.components*i.byteLength;case wd:return s*t*3/i.components*i.byteLength;case Gn:return s*t*4/i.components*i.byteLength;case ih:return s*t*4/i.components*i.byteLength;case $o:case Jo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ko:case Qo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hc:case Gc:return Math.max(s,16)*Math.max(t,8)/4;case kc:case Vc:return Math.max(s,8)*Math.max(t,8)/2;case Wc:case Xc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case qc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case $c:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case jc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case tl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case el:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case nl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case il:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case sl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case rl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ol:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case jo:case al:case cl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Pd:case ll:return Math.ceil(s/4)*Math.ceil(t/4)*8;case hl:case ul:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uy(s){switch(s){case fi:case Sd:return{byteLength:1,components:1};case Zr:case Ed:case so:return{byteLength:2,components:1};case Ql:case jl:return{byteLength:2,components:4};case hs:case Kl:case $n:return{byteLength:4,components:1};case bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function dy(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Wt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,E){return f?new OffscreenCanvas(T,E):na("canvas")}function _(T,E,W){let Q=1,Tt=lt(T);if((Tt.width>W||Tt.height>W)&&(Q=W/Math.max(Tt.width,Tt.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ht=Math.floor(Q*Tt.width),pt=Math.floor(Q*Tt.height);u===void 0&&(u=g(ht,pt));let yt=E?g(ht,pt):u;return yt.width=ht,yt.height=pt,yt.getContext("2d").drawImage(T,0,0,ht,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+ht+"x"+pt+")."),yt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(T,E,W,Q,Tt=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ht=E;if(E===s.RED&&(W===s.FLOAT&&(ht=s.R32F),W===s.HALF_FLOAT&&(ht=s.R16F),W===s.UNSIGNED_BYTE&&(ht=s.R8)),E===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(ht=s.R8UI),W===s.UNSIGNED_SHORT&&(ht=s.R16UI),W===s.UNSIGNED_INT&&(ht=s.R32UI),W===s.BYTE&&(ht=s.R8I),W===s.SHORT&&(ht=s.R16I),W===s.INT&&(ht=s.R32I)),E===s.RG&&(W===s.FLOAT&&(ht=s.RG32F),W===s.HALF_FLOAT&&(ht=s.RG16F),W===s.UNSIGNED_BYTE&&(ht=s.RG8)),E===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(ht=s.RG8UI),W===s.UNSIGNED_SHORT&&(ht=s.RG16UI),W===s.UNSIGNED_INT&&(ht=s.RG32UI),W===s.BYTE&&(ht=s.RG8I),W===s.SHORT&&(ht=s.RG16I),W===s.INT&&(ht=s.RG32I)),E===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),W===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),W===s.UNSIGNED_INT&&(ht=s.RGB32UI),W===s.BYTE&&(ht=s.RGB8I),W===s.SHORT&&(ht=s.RGB16I),W===s.INT&&(ht=s.RGB32I)),E===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),W===s.UNSIGNED_INT&&(ht=s.RGBA32UI),W===s.BYTE&&(ht=s.RGBA8I),W===s.SHORT&&(ht=s.RGBA16I),W===s.INT&&(ht=s.RGBA32I)),E===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),E===s.RGBA){let pt=Tt?Ma:ae.getTransfer(Q);W===s.FLOAT&&(ht=s.RGBA32F),W===s.HALF_FLOAT&&(ht=s.RGBA16F),W===s.UNSIGNED_BYTE&&(ht=pt===me?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function x(T,E){let W;return T?E===null||E===hs||E===or?W=s.DEPTH24_STENCIL8:E===$n?W=s.DEPTH32F_STENCIL8:E===Zr&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===hs||E===or?W=s.DEPTH_COMPONENT24:E===$n?W=s.DEPTH_COMPONENT32F:E===Zr&&(W=s.DEPTH_COMPONENT16),W}function A(T,E){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Sn&&T.minFilter!==Zn?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function b(T){let E=T.target;E.removeEventListener("dispose",b),P(E),E.isVideoTexture&&h.delete(E)}function w(T){let E=T.target;E.removeEventListener("dispose",w),y(E)}function P(T){let E=n.get(T);if(E.__webglInit===void 0)return;let W=T.source,Q=d.get(W);if(Q){let Tt=Q[E.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&S(T),Object.keys(Q).length===0&&d.delete(W)}n.remove(T)}function S(T){let E=n.get(T);s.deleteTexture(E.__webglTexture);let W=T.source,Q=d.get(W);delete Q[E.__cacheKey],o.memory.textures--}function y(T){let E=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let Tt=0;Tt<E.__webglFramebuffer[Q].length;Tt++)s.deleteFramebuffer(E.__webglFramebuffer[Q][Tt]);else s.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)s.deleteFramebuffer(E.__webglFramebuffer[Q]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let W=T.textures;for(let Q=0,Tt=W.length;Q<Tt;Q++){let ht=n.get(W[Q]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),o.memory.textures--),n.remove(W[Q])}n.remove(T)}let C=0;function H(){C=0}function z(){let T=C;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),C+=1,T}function V(T){let E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function Y(T,E){let W=n.get(T);if(T.isVideoTexture&&tt(T),T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){let Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(W,T,E);return}}e.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+E)}function D(T,E){let W=n.get(T);if(T.version>0&&W.__version!==T.version){O(W,T,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+E)}function ot(T,E){let W=n.get(T);if(T.version>0&&W.__version!==T.version){O(W,T,E);return}e.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+E)}function $(T,E){let W=n.get(T);if(T.version>0&&W.__version!==T.version){k(W,T,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+E)}let ct={[Bc]:s.REPEAT,[cs]:s.CLAMP_TO_EDGE,[zc]:s.MIRRORED_REPEAT},it={[Sn]:s.NEAREST,[Jp]:s.NEAREST_MIPMAP_NEAREST,[Eo]:s.NEAREST_MIPMAP_LINEAR,[Zn]:s.LINEAR,[Za]:s.LINEAR_MIPMAP_NEAREST,[ls]:s.LINEAR_MIPMAP_LINEAR},dt={[tm]:s.NEVER,[om]:s.ALWAYS,[em]:s.LESS,[Dd]:s.LEQUAL,[nm]:s.EQUAL,[rm]:s.GEQUAL,[im]:s.GREATER,[sm]:s.NOTEQUAL};function Ct(T,E){if(E.type===$n&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Zn||E.magFilter===Za||E.magFilter===Eo||E.magFilter===ls||E.minFilter===Zn||E.minFilter===Za||E.minFilter===Eo||E.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,ct[E.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,ct[E.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,ct[E.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,it[E.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,it[E.minFilter]),E.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,dt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==Eo&&E.minFilter!==ls||E.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function G(T,E){let W=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",b));let Q=E.source,Tt=d.get(Q);Tt===void 0&&(Tt={},d.set(Q,Tt));let ht=V(E);if(ht!==T.__cacheKey){Tt[ht]===void 0&&(Tt[ht]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,W=!0),Tt[ht].usedTimes++;let pt=Tt[T.__cacheKey];pt!==void 0&&(Tt[T.__cacheKey].usedTimes--,pt.usedTimes===0&&S(E)),T.__cacheKey=ht,T.__webglTexture=Tt[ht].texture}return W}function O(T,E,W){let Q=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=s.TEXTURE_3D);let Tt=G(T,E),ht=E.source;e.bindTexture(Q,T.__webglTexture,s.TEXTURE0+W);let pt=n.get(ht);if(ht.version!==pt.__version||Tt===!0){e.activeTexture(s.TEXTURE0+W);let yt=ae.getPrimaries(ae.workingColorSpace),St=E.colorSpace===Di?null:ae.getPrimaries(E.colorSpace),Xt=E.colorSpace===Di||yt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let ut=_(E.image,!1,i.maxTextureSize);ut=Nt(E,ut);let Mt=r.convert(E.format,E.colorSpace),Vt=r.convert(E.type),ft=v(E.internalFormat,Mt,Vt,E.colorSpace,E.isVideoTexture);Ct(Q,E);let Et,Bt=E.mipmaps,at=E.isVideoTexture!==!0,bt=pt.__version===void 0||Tt===!0,U=ht.dataReady,Pt=A(E,ut);if(E.isDepthTexture)ft=x(E.format===ar,E.type),bt&&(at?e.texStorage2D(s.TEXTURE_2D,1,ft,ut.width,ut.height):e.texImage2D(s.TEXTURE_2D,0,ft,ut.width,ut.height,0,Mt,Vt,null));else if(E.isDataTexture)if(Bt.length>0){at&&bt&&e.texStorage2D(s.TEXTURE_2D,Pt,ft,Bt[0].width,Bt[0].height);for(let X=0,mt=Bt.length;X<mt;X++)Et=Bt[X],at?U&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,Et.width,Et.height,Mt,Vt,Et.data):e.texImage2D(s.TEXTURE_2D,X,ft,Et.width,Et.height,0,Mt,Vt,Et.data);E.generateMipmaps=!1}else at?(bt&&e.texStorage2D(s.TEXTURE_2D,Pt,ft,ut.width,ut.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut.width,ut.height,Mt,Vt,ut.data)):e.texImage2D(s.TEXTURE_2D,0,ft,ut.width,ut.height,0,Mt,Vt,ut.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){at&&bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,ft,Bt[0].width,Bt[0].height,ut.depth);for(let X=0,mt=Bt.length;X<mt;X++)if(Et=Bt[X],E.format!==Gn)if(Mt!==null)if(at){if(U)if(E.layerUpdates.size>0){let B=ld(Et.width,Et.height,E.format,E.type);for(let nt of E.layerUpdates){let Dt=Et.data.subarray(nt*B/Et.data.BYTES_PER_ELEMENT,(nt+1)*B/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,nt,Et.width,Et.height,1,Mt,Dt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,Et.width,Et.height,ut.depth,Mt,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,ft,Et.width,Et.height,ut.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,Et.width,Et.height,ut.depth,Mt,Vt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,ft,Et.width,Et.height,ut.depth,0,Mt,Vt,Et.data)}else{at&&bt&&e.texStorage2D(s.TEXTURE_2D,Pt,ft,Bt[0].width,Bt[0].height);for(let X=0,mt=Bt.length;X<mt;X++)Et=Bt[X],E.format!==Gn?Mt!==null?at?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,Et.width,Et.height,Mt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,X,ft,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?U&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,Et.width,Et.height,Mt,Vt,Et.data):e.texImage2D(s.TEXTURE_2D,X,ft,Et.width,Et.height,0,Mt,Vt,Et.data)}else if(E.isDataArrayTexture)if(at){if(bt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,ft,ut.width,ut.height,ut.depth),U)if(E.layerUpdates.size>0){let X=ld(ut.width,ut.height,E.format,E.type);for(let mt of E.layerUpdates){let B=ut.data.subarray(mt*X/ut.data.BYTES_PER_ELEMENT,(mt+1)*X/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,mt,ut.width,ut.height,1,Mt,Vt,B)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Mt,Vt,ut.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ft,ut.width,ut.height,ut.depth,0,Mt,Vt,ut.data);else if(E.isData3DTexture)at?(bt&&e.texStorage3D(s.TEXTURE_3D,Pt,ft,ut.width,ut.height,ut.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Mt,Vt,ut.data)):e.texImage3D(s.TEXTURE_3D,0,ft,ut.width,ut.height,ut.depth,0,Mt,Vt,ut.data);else if(E.isFramebufferTexture){if(bt)if(at)e.texStorage2D(s.TEXTURE_2D,Pt,ft,ut.width,ut.height);else{let X=ut.width,mt=ut.height;for(let B=0;B<Pt;B++)e.texImage2D(s.TEXTURE_2D,B,ft,X,mt,0,Mt,Vt,null),X>>=1,mt>>=1}}else if(Bt.length>0){if(at&&bt){let X=lt(Bt[0]);e.texStorage2D(s.TEXTURE_2D,Pt,ft,X.width,X.height)}for(let X=0,mt=Bt.length;X<mt;X++)Et=Bt[X],at?U&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,Mt,Vt,Et):e.texImage2D(s.TEXTURE_2D,X,ft,Mt,Vt,Et);E.generateMipmaps=!1}else if(at){if(bt){let X=lt(ut);e.texStorage2D(s.TEXTURE_2D,Pt,ft,X.width,X.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,Vt,ut)}else e.texImage2D(s.TEXTURE_2D,0,ft,Mt,Vt,ut);m(E)&&p(Q),pt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function k(T,E,W){if(E.image.length!==6)return;let Q=G(T,E),Tt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+W);let ht=n.get(Tt);if(Tt.version!==ht.__version||Q===!0){e.activeTexture(s.TEXTURE0+W);let pt=ae.getPrimaries(ae.workingColorSpace),yt=E.colorSpace===Di?null:ae.getPrimaries(E.colorSpace),St=E.colorSpace===Di||pt===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Xt=E.isCompressedTexture||E.image[0].isCompressedTexture,ut=E.image[0]&&E.image[0].isDataTexture,Mt=[];for(let mt=0;mt<6;mt++)!Xt&&!ut?Mt[mt]=_(E.image[mt],!0,i.maxCubemapSize):Mt[mt]=ut?E.image[mt].image:E.image[mt],Mt[mt]=Nt(E,Mt[mt]);let Vt=Mt[0],ft=r.convert(E.format,E.colorSpace),Et=r.convert(E.type),Bt=v(E.internalFormat,ft,Et,E.colorSpace),at=E.isVideoTexture!==!0,bt=ht.__version===void 0||Q===!0,U=Tt.dataReady,Pt=A(E,Vt);Ct(s.TEXTURE_CUBE_MAP,E);let X;if(Xt){at&&bt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,Bt,Vt.width,Vt.height);for(let mt=0;mt<6;mt++){X=Mt[mt].mipmaps;for(let B=0;B<X.length;B++){let nt=X[B];E.format!==Gn?ft!==null?at?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B,0,0,nt.width,nt.height,ft,nt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B,Bt,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B,0,0,nt.width,nt.height,ft,Et,nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B,Bt,nt.width,nt.height,0,ft,Et,nt.data)}}}else{if(X=E.mipmaps,at&&bt){X.length>0&&Pt++;let mt=lt(Mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,Bt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(ut){at?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Mt[mt].width,Mt[mt].height,ft,Et,Mt[mt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Bt,Mt[mt].width,Mt[mt].height,0,ft,Et,Mt[mt].data);for(let B=0;B<X.length;B++){let Dt=X[B].image[mt].image;at?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B+1,0,0,Dt.width,Dt.height,ft,Et,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B+1,Bt,Dt.width,Dt.height,0,ft,Et,Dt.data)}}else{at?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ft,Et,Mt[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Bt,ft,Et,Mt[mt]);for(let B=0;B<X.length;B++){let nt=X[B];at?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B+1,0,0,ft,Et,nt.image[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B+1,Bt,ft,Et,nt.image[mt])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),ht.__version=Tt.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function Z(T,E,W,Q,Tt,ht){let pt=r.convert(W.format,W.colorSpace),yt=r.convert(W.type),St=v(W.internalFormat,pt,yt,W.colorSpace),Xt=n.get(E),ut=n.get(W);if(ut.__renderTarget=E,!Xt.__hasExternalTextures){let Mt=Math.max(1,E.width>>ht),Vt=Math.max(1,E.height>>ht);Tt===s.TEXTURE_3D||Tt===s.TEXTURE_2D_ARRAY?e.texImage3D(Tt,ht,St,Mt,Vt,E.depth,0,pt,yt,null):e.texImage2D(Tt,ht,St,Mt,Vt,0,pt,yt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),Ot(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,Tt,ut.__webglTexture,0,At(E)):(Tt===s.TEXTURE_2D||Tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,Tt,ut.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function N(T,E,W){if(s.bindRenderbuffer(s.RENDERBUFFER,T),E.depthBuffer){let Q=E.depthTexture,Tt=Q&&Q.isDepthTexture?Q.type:null,ht=x(E.stencilBuffer,Tt),pt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=At(E);Ot(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,ht,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,ht,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ht,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,T)}else{let Q=E.textures;for(let Tt=0;Tt<Q.length;Tt++){let ht=Q[Tt],pt=r.convert(ht.format,ht.colorSpace),yt=r.convert(ht.type),St=v(ht.internalFormat,pt,yt,ht.colorSpace),Xt=At(E);W&&Ot(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,St,E.width,E.height):Ot(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,St,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,St,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function st(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);let Tt=Q.__webglTexture,ht=At(E);if(E.depthTexture.format===tr)Ot(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Tt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Tt,0);else if(E.depthTexture.format===ar)Ot(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Tt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function xt(T){let E=n.get(T),W=T.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==T.depthTexture){let Q=T.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){let Tt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",Tt)};Q.addEventListener("dispose",Tt),E.__depthDisposeCallback=Tt}E.__boundDepthTexture=Q}if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");st(E.__webglFramebuffer,T)}else if(W){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=s.createRenderbuffer(),N(E.__webglDepthbuffer[Q],T,!1);else{let Tt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,ht)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),N(E.__webglDepthbuffer,T,!1);else{let Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(T,E,W){let Q=n.get(T);E!==void 0&&Z(Q.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&xt(T)}function Lt(T){let E=T.texture,W=n.get(T),Q=n.get(E);T.addEventListener("dispose",w);let Tt=T.textures,ht=T.isWebGLCubeRenderTarget===!0,pt=Tt.length>1;if(pt||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=E.version,o.memory.textures++),ht){W.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[yt]=[];for(let St=0;St<E.mipmaps.length;St++)W.__webglFramebuffer[yt][St]=s.createFramebuffer()}else W.__webglFramebuffer[yt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let yt=0;yt<E.mipmaps.length;yt++)W.__webglFramebuffer[yt]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(pt)for(let yt=0,St=Tt.length;yt<St;yt++){let Xt=n.get(Tt[yt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&Ot(T)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let yt=0;yt<Tt.length;yt++){let St=Tt[yt];W.__webglColorRenderbuffer[yt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[yt]);let Xt=r.convert(St.format,St.colorSpace),ut=r.convert(St.type),Mt=v(St.internalFormat,Xt,ut,St.colorSpace,T.isXRRenderTarget===!0),Vt=At(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,Mt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,W.__webglColorRenderbuffer[yt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),N(W.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Ct(s.TEXTURE_CUBE_MAP,E);for(let yt=0;yt<6;yt++)if(E.mipmaps&&E.mipmaps.length>0)for(let St=0;St<E.mipmaps.length;St++)Z(W.__webglFramebuffer[yt][St],T,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,St);else Z(W.__webglFramebuffer[yt],T,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(E)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let yt=0,St=Tt.length;yt<St;yt++){let Xt=Tt[yt],ut=n.get(Xt);e.bindTexture(s.TEXTURE_2D,ut.__webglTexture),Ct(s.TEXTURE_2D,Xt),Z(W.__webglFramebuffer,T,Xt,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,0),m(Xt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let yt=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(yt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(yt,Q.__webglTexture),Ct(yt,E),E.mipmaps&&E.mipmaps.length>0)for(let St=0;St<E.mipmaps.length;St++)Z(W.__webglFramebuffer[St],T,E,s.COLOR_ATTACHMENT0,yt,St);else Z(W.__webglFramebuffer,T,E,s.COLOR_ATTACHMENT0,yt,0);m(E)&&p(yt),e.unbindTexture()}T.depthBuffer&&xt(T)}function q(T){let E=T.textures;for(let W=0,Q=E.length;W<Q;W++){let Tt=E[W];if(m(Tt)){let ht=M(T),pt=n.get(Tt).__webglTexture;e.bindTexture(ht,pt),p(ht),e.unbindTexture()}}}let rt=[],F=[];function Ft(T){if(T.samples>0){if(Ot(T)===!1){let E=T.textures,W=T.width,Q=T.height,Tt=s.COLOR_BUFFER_BIT,ht=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=n.get(T),yt=E.length>1;if(yt)for(let St=0;St<E.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let St=0;St<E.length;St++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Tt|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Tt|=s.STENCIL_BUFFER_BIT)),yt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,pt.__webglColorRenderbuffer[St]);let Xt=n.get(E[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,W,Q,0,0,W,Q,Tt,s.NEAREST),c===!0&&(rt.length=0,F.length=0,rt.push(s.COLOR_ATTACHMENT0+St),T.depthBuffer&&T.resolveDepthBuffer===!1&&(rt.push(ht),F.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),yt)for(let St=0;St<E.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,pt.__webglColorRenderbuffer[St]);let Xt=n.get(E[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,Xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let E=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function At(T){return Math.min(i.maxSamples,T.samples)}function Ot(T){let E=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function tt(T){let E=o.render.frame;h.get(T)!==E&&(h.set(T,E),T.update())}function Nt(T,E){let W=T.colorSpace,Q=T.format,Tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||W!==gr&&W!==Di&&(ae.getTransfer(W)===me?(Q!==Gn||Tt!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function lt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=D,this.setTexture3D=ot,this.setTextureCube=$,this.rebindTextures=It,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Ot}function fy(s,t){function e(n,i=Di){let r,o=ae.getTransfer(i);if(n===fi)return s.UNSIGNED_BYTE;if(n===Ql)return s.UNSIGNED_SHORT_4_4_4_4;if(n===jl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===bd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Sd)return s.BYTE;if(n===Ed)return s.SHORT;if(n===Zr)return s.UNSIGNED_SHORT;if(n===Kl)return s.INT;if(n===hs)return s.UNSIGNED_INT;if(n===$n)return s.FLOAT;if(n===so)return s.HALF_FLOAT;if(n===Td)return s.ALPHA;if(n===wd)return s.RGB;if(n===Gn)return s.RGBA;if(n===Ad)return s.LUMINANCE;if(n===Rd)return s.LUMINANCE_ALPHA;if(n===tr)return s.DEPTH_COMPONENT;if(n===ar)return s.DEPTH_STENCIL;if(n===th)return s.RED;if(n===eh)return s.RED_INTEGER;if(n===Cd)return s.RG;if(n===nh)return s.RG_INTEGER;if(n===ih)return s.RGBA_INTEGER;if(n===$o||n===Jo||n===Ko||n===Qo)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kc||n===Hc||n===Vc||n===Gc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wc||n===Xc||n===qc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wc||n===Xc)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yc||n===Zc||n===$c||n===Jc||n===Kc||n===Qc||n===jc||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$c)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===el)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===il)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ol)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jo||n===al||n===cl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===jo)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pd||n===ll||n===hl||n===ul)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Al=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Zt=class extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}},py={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(py)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},my=`
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

}`,Rl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new dn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Jn({vertexShader:my,fragmentShader:gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new De(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cl=class extends Ni{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,_=new Rl,m=e.getContextAttributes(),p=null,M=null,v=[],x=[],A=new Wt,b=null,w=new en;w.viewport=new _e;let P=new en;P.viewport=new _e;let S=[w,P],y=new Al,C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let k=v[O];return k===void 0&&(k=new Wr,v[O]=k),k.getTargetRaySpace()},this.getControllerGrip=function(O){let k=v[O];return k===void 0&&(k=new Wr,v[O]=k),k.getGripSpace()},this.getHand=function(O){let k=v[O];return k===void 0&&(k=new Wr,v[O]=k),k.getHandSpace()};function z(O){let k=x.indexOf(O.inputSource);if(k===-1)return;let Z=v[k];Z!==void 0&&(Z.update(O.inputSource,O.frame,l||o),Z.dispatchEvent({type:O.type,data:O.inputSource}))}function V(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Y);for(let O=0;O<v.length;O++){let k=x[O];k!==null&&(x[O]=null,v[O].disconnect(k))}C=null,H=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,G.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){let k={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,k),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new pi(f.framebufferWidth,f.framebufferHeight,{format:Gn,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let k=null,Z=null,N=null;m.depth&&(N=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=m.stencil?ar:tr,Z=m.stencil?or:hs);let st={colorFormat:e.RGBA8,depthFormat:N,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(st),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new pi(d.textureWidth,d.textureHeight,{format:Gn,type:fi,depthTexture:new ha(d.textureWidth,d.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(O){for(let k=0;k<O.removed.length;k++){let Z=O.removed[k],N=x.indexOf(Z);N>=0&&(x[N]=null,v[N].disconnect(Z))}for(let k=0;k<O.added.length;k++){let Z=O.added[k],N=x.indexOf(Z);if(N===-1){for(let xt=0;xt<v.length;xt++)if(xt>=x.length){x.push(Z),N=xt;break}else if(x[xt]===null){x[xt]=Z,N=xt;break}if(N===-1)break}let st=v[N];st&&st.connect(Z)}}let D=new L,ot=new L;function $(O,k,Z){D.setFromMatrixPosition(k.matrixWorld),ot.setFromMatrixPosition(Z.matrixWorld);let N=D.distanceTo(ot),st=k.projectionMatrix.elements,xt=Z.projectionMatrix.elements,It=st[14]/(st[10]-1),Lt=st[14]/(st[10]+1),q=(st[9]+1)/st[5],rt=(st[9]-1)/st[5],F=(st[8]-1)/st[0],Ft=(xt[8]+1)/xt[0],At=It*F,Ot=It*Ft,tt=N/(-F+Ft),Nt=tt*-F;if(k.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Nt),O.translateZ(tt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),st[10]===-1)O.projectionMatrix.copy(k.projectionMatrix),O.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let lt=It+tt,T=Lt+tt,E=At-Nt,W=Ot+(N-Nt),Q=q*Lt/T*lt,Tt=rt*Lt/T*lt;O.projectionMatrix.makePerspective(E,W,Q,Tt,lt,T),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function ct(O,k){k===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(k.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;let k=O.near,Z=O.far;_.texture!==null&&(_.depthNear>0&&(k=_.depthNear),_.depthFar>0&&(Z=_.depthFar)),y.near=P.near=w.near=k,y.far=P.far=w.far=Z,(C!==y.near||H!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,H=y.far),w.layers.mask=O.layers.mask|2,P.layers.mask=O.layers.mask|4,y.layers.mask=w.layers.mask|P.layers.mask;let N=O.parent,st=y.cameras;ct(y,N);for(let xt=0;xt<st.length;xt++)ct(st[xt],N);st.length===2?$(y,w,P):y.projectionMatrix.copy(w.projectionMatrix),it(O,y,N)};function it(O,k,Z){Z===null?O.matrix.copy(k.matrixWorld):(O.matrix.copy(Z.matrixWorld),O.matrix.invert(),O.matrix.multiply(k.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(k.projectionMatrix),O.projectionMatrixInverse.copy(k.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=$r*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(O){c=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let dt=null;function Ct(O,k){if(h=k.getViewerPose(l||o),g=k,h!==null){let Z=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let N=!1;Z.length!==y.cameras.length&&(y.cameras.length=0,N=!0);for(let xt=0;xt<Z.length;xt++){let It=Z[xt],Lt=null;if(f!==null)Lt=f.getViewport(It);else{let rt=u.getViewSubImage(d,It);Lt=rt.viewport,xt===0&&(t.setRenderTargetTextures(M,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(M))}let q=S[xt];q===void 0&&(q=new en,q.layers.enable(xt),q.viewport=new _e,S[xt]=q),q.matrix.fromArray(It.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(It.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),xt===0&&(y.matrix.copy(q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),N===!0&&y.cameras.push(q)}let st=i.enabledFeatures;if(st&&st.includes("depth-sensing")){let xt=u.getDepthInformation(Z[0]);xt&&xt.isValid&&xt.texture&&_.init(t,xt,i.renderState)}}for(let Z=0;Z<v.length;Z++){let N=x[Z],st=v[Z];N!==null&&st!==void 0&&st.update(N,k,l||o)}dt&&dt(O,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}let G=new Nd;G.setAnimationLoop(Ct),this.setAnimationLoop=function(O){dt=O},this.dispose=function(){}}},is=new Pn,_y=new he;function xy(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Od(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),v=M.envMap,x=M.envMapRotation;v&&(m.envMap.value=v,is.copy(x),is.x*=-1,is.y*=-1,is.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(_y.makeRotationFromEuler(is)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yy(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){let x=v.program;n.uniformBlockBinding(M,x)}function l(M,v){let x=i[M.id];x===void 0&&(g(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",m));let A=v.program;n.updateUBOMapping(M,A);let b=t.render.frame;r[M.id]!==b&&(d(M),r[M.id]=b)}function h(M){let v=u();M.__bindingPointIndex=v;let x=s.createBuffer(),A=M.__size,b=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,A,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let v=i[M.id],x=M.uniforms,A=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,w=x.length;b<w;b++){let P=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,y=P.length;S<y;S++){let C=P[S];if(f(C,b,S,A)===!0){let H=C.__offset,z=Array.isArray(C.value)?C.value:[C.value],V=0;for(let Y=0;Y<z.length;Y++){let D=z[Y],ot=_(D);typeof D=="number"||typeof D=="boolean"?(C.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,H+V,C.__data)):D.isMatrix3?(C.__data[0]=D.elements[0],C.__data[1]=D.elements[1],C.__data[2]=D.elements[2],C.__data[3]=0,C.__data[4]=D.elements[3],C.__data[5]=D.elements[4],C.__data[6]=D.elements[5],C.__data[7]=0,C.__data[8]=D.elements[6],C.__data[9]=D.elements[7],C.__data[10]=D.elements[8],C.__data[11]=0):(D.toArray(C.__data,V),V+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,v,x,A){let b=M.value,w=v+"_"+x;if(A[w]===void 0)return typeof b=="number"||typeof b=="boolean"?A[w]=b:A[w]=b.clone(),!0;{let P=A[w];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return A[w]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(M){let v=M.uniforms,x=0,A=16;for(let w=0,P=v.length;w<P;w++){let S=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,C=S.length;y<C;y++){let H=S[y],z=Array.isArray(H.value)?H.value:[H.value];for(let V=0,Y=z.length;V<Y;V++){let D=z[V],ot=_(D),$=x%A,ct=$%ot.boundary,it=$+ct;x+=ct,it!==0&&A-it<ot.storage&&(x+=A-it),H.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=ot.storage}}}let b=x%A;return b>0&&(x+=A-b),M.__size=x,M.__cache={},this}function _(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){let v=M.target;v.removeEventListener("dispose",m);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var ur=class{constructor(t={}){let{canvas:e=Em(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this.toneMapping=Ui,this.toneMappingExposure=1;let x=this,A=!1,b=0,w=0,P=null,S=-1,y=null,C=new _e,H=new _e,z=null,V=new ee(0),Y=0,D=e.width,ot=e.height,$=1,ct=null,it=null,dt=new _e(0,0,D,ot),Ct=new _e(0,0,D,ot),G=!1,O=new Jr,k=!1,Z=!1,N=new he,st=new he,xt=new L,It=new _e,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},q=!1;function rt(){return P===null?$:1}let F=n;function Ft(I,j){return e.getContext(I,j)}try{let I={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jl}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",nt,!1),F===null){let j="webgl2";if(F=Ft(j,I),F===null)throw Ft(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let At,Ot,tt,Nt,lt,T,E,W,Q,Tt,ht,pt,yt,St,Xt,ut,Mt,Vt,ft,Et,Bt,at,bt,U;function Pt(){At=new O_(F),At.init(),at=new fy(F,At),Ot=new C_(F,At,t,at),tt=new hy(F,At),Ot.reverseDepthBuffer&&d&&tt.buffers.depth.setReversed(!0),Nt=new B_(F),lt=new Kx,T=new dy(F,At,tt,lt,Ot,at,Nt),E=new I_(x),W=new U_(x),Q=new Xm(F),bt=new A_(F,Q),Tt=new N_(F,Q,Nt,bt),ht=new k_(F,Tt,Q,Nt),ft=new z_(F,Ot,T),ut=new P_(lt),pt=new Jx(x,E,W,At,Ot,bt,ut),yt=new xy(x,lt),St=new jx,Xt=new ry(At),Vt=new w_(x,E,W,tt,ht,f,c),Mt=new cy(x,ht,Ot),U=new yy(F,Nt,Ot,tt),Et=new R_(F,At,Nt),Bt=new F_(F,At,Nt),Nt.programs=pt.programs,x.capabilities=Ot,x.extensions=At,x.properties=lt,x.renderLists=St,x.shadowMap=Mt,x.state=tt,x.info=Nt}Pt();let X=new Cl(x,F);this.xr=X,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let I=At.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=At.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(I){I!==void 0&&($=I,this.setSize(D,ot,!1))},this.getSize=function(I){return I.set(D,ot)},this.setSize=function(I,j,gt=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=I,ot=j,e.width=Math.floor(I*$),e.height=Math.floor(j*$),gt===!0&&(e.style.width=I+"px",e.style.height=j+"px"),this.setViewport(0,0,I,j)},this.getDrawingBufferSize=function(I){return I.set(D*$,ot*$).floor()},this.setDrawingBufferSize=function(I,j,gt){D=I,ot=j,$=gt,e.width=Math.floor(I*gt),e.height=Math.floor(j*gt),this.setViewport(0,0,I,j)},this.getCurrentViewport=function(I){return I.copy(C)},this.getViewport=function(I){return I.copy(dt)},this.setViewport=function(I,j,gt,_t){I.isVector4?dt.set(I.x,I.y,I.z,I.w):dt.set(I,j,gt,_t),tt.viewport(C.copy(dt).multiplyScalar($).round())},this.getScissor=function(I){return I.copy(Ct)},this.setScissor=function(I,j,gt,_t){I.isVector4?Ct.set(I.x,I.y,I.z,I.w):Ct.set(I,j,gt,_t),tt.scissor(H.copy(Ct).multiplyScalar($).round())},this.getScissorTest=function(){return G},this.setScissorTest=function(I){tt.setScissorTest(G=I)},this.setOpaqueSort=function(I){ct=I},this.setTransparentSort=function(I){it=I},this.getClearColor=function(I){return I.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(I=!0,j=!0,gt=!0){let _t=0;if(I){let et=!1;if(P!==null){let kt=P.texture.format;et=kt===ih||kt===nh||kt===eh}if(et){let kt=P.texture.type,Yt=kt===fi||kt===hs||kt===Zr||kt===or||kt===Ql||kt===jl,Jt=Vt.getClearColor(),Kt=Vt.getClearAlpha(),ne=Jt.r,se=Jt.g,Qt=Jt.b;Yt?(g[0]=ne,g[1]=se,g[2]=Qt,g[3]=Kt,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=ne,_[1]=se,_[2]=Qt,_[3]=Kt,F.clearBufferiv(F.COLOR,0,_))}else _t|=F.COLOR_BUFFER_BIT}j&&(_t|=F.DEPTH_BUFFER_BIT),gt&&(_t|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(_t)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),St.dispose(),Xt.dispose(),lt.dispose(),E.dispose(),W.dispose(),ht.dispose(),bt.dispose(),U.dispose(),pt.dispose(),X.dispose(),X.removeEventListener("sessionstart",zt),X.removeEventListener("sessionend",Ut),J.stop()};function mt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let I=Nt.autoReset,j=Mt.enabled,gt=Mt.autoUpdate,_t=Mt.needsUpdate,et=Mt.type;Pt(),Nt.autoReset=I,Mt.enabled=j,Mt.autoUpdate=gt,Mt.needsUpdate=_t,Mt.type=et}function nt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Dt(I){let j=I.target;j.removeEventListener("dispose",Dt),Gt(j)}function Gt(I){R(I),lt.remove(I)}function R(I){let j=lt.get(I).programs;j!==void 0&&(j.forEach(function(gt){pt.releaseProgram(gt)}),I.isShaderMaterial&&pt.releaseShaderCache(I))}this.renderBufferDirect=function(I,j,gt,_t,et,kt){j===null&&(j=Lt);let Yt=et.isMesh&&et.matrixWorld.determinant()<0,Jt=xp(I,j,gt,_t,et);tt.setMaterial(_t,Yt);let Kt=gt.index,ne=1;if(_t.wireframe===!0){if(Kt=Tt.getWireframeAttribute(gt),Kt===void 0)return;ne=2}let se=gt.drawRange,Qt=gt.attributes.position,ce=se.start*ne,Se=(se.start+se.count)*ne;kt!==null&&(ce=Math.max(ce,kt.start*ne),Se=Math.min(Se,(kt.start+kt.count)*ne)),Kt!==null?(ce=Math.max(ce,0),Se=Math.min(Se,Kt.count)):Qt!=null&&(ce=Math.max(ce,0),Se=Math.min(Se,Qt.count));let be=Se-ce;if(be<0||be===1/0)return;bt.setup(et,_t,Jt,gt,Kt);let un,ue=Et;if(Kt!==null&&(un=Q.get(Kt),ue=Bt,ue.setIndex(un)),et.isMesh)_t.wireframe===!0?(tt.setLineWidth(_t.wireframeLinewidth*rt()),ue.setMode(F.LINES)):ue.setMode(F.TRIANGLES);else if(et.isLine){let jt=_t.linewidth;jt===void 0&&(jt=1),tt.setLineWidth(jt*rt()),et.isLineSegments?ue.setMode(F.LINES):et.isLineLoop?ue.setMode(F.LINE_LOOP):ue.setMode(F.LINE_STRIP)}else et.isPoints?ue.setMode(F.POINTS):et.isSprite&&ue.setMode(F.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)ue.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))ue.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let jt=et._multiDrawStarts,ii=et._multiDrawCounts,de=et._multiDrawCount,zn=Kt?Q.get(Kt).bytesPerElement:1,Us=lt.get(_t).currentProgram.getUniforms();for(let xn=0;xn<de;xn++)Us.setValue(F,"_gl_DrawID",xn),ue.render(jt[xn]/zn,ii[xn])}else if(et.isInstancedMesh)ue.renderInstances(ce,be,et.count);else if(gt.isInstancedBufferGeometry){let jt=gt._maxInstanceCount!==void 0?gt._maxInstanceCount:1/0,ii=Math.min(gt.instanceCount,jt);ue.renderInstances(ce,be,ii)}else ue.render(ce,be)};function K(I,j,gt){I.transparent===!0&&I.side===Mn&&I.forceSinglePass===!1?(I.side=nn,I.needsUpdate=!0,Ei(I,j,gt),I.side=Oi,I.needsUpdate=!0,Ei(I,j,gt),I.side=Mn):Ei(I,j,gt)}this.compile=function(I,j,gt=null){gt===null&&(gt=I),p=Xt.get(gt),p.init(j),v.push(p),gt.traverseVisible(function(et){et.isLight&&et.layers.test(j.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),I!==gt&&I.traverseVisible(function(et){et.isLight&&et.layers.test(j.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),p.setupLights();let _t=new Set;return I.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let kt=et.material;if(kt)if(Array.isArray(kt))for(let Yt=0;Yt<kt.length;Yt++){let Jt=kt[Yt];K(Jt,gt,et),_t.add(Jt)}else K(kt,gt,et),_t.add(kt)}),v.pop(),p=null,_t},this.compileAsync=function(I,j,gt=null){let _t=this.compile(I,j,gt);return new Promise(et=>{function kt(){if(_t.forEach(function(Yt){lt.get(Yt).currentProgram.isReady()&&_t.delete(Yt)}),_t.size===0){et(I);return}setTimeout(kt,10)}At.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let Rt=null;function wt(I){Rt&&Rt(I)}function zt(){J.stop()}function Ut(){J.start()}let J=new Nd;J.setAnimationLoop(wt),typeof self<"u"&&J.setContext(self),this.setAnimationLoop=function(I){Rt=I,X.setAnimationLoop(I),I===null?J.stop():J.start()},X.addEventListener("sessionstart",zt),X.addEventListener("sessionend",Ut),this.render=function(I,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(j),j=X.getCamera()),I.isScene===!0&&I.onBeforeRender(x,I,j,P),p=Xt.get(I,v.length),p.init(j),v.push(p),st.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),O.setFromProjectionMatrix(st),Z=this.localClippingEnabled,k=ut.init(this.clippingPlanes,Z),m=St.get(I,M.length),m.init(),M.push(m),X.enabled===!0&&X.isPresenting===!0){let kt=x.xr.getDepthSensingMesh();kt!==null&&vt(kt,j,-1/0,x.sortObjects)}vt(I,j,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ct,it),q=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,q&&Vt.addToRenderList(m,I),this.info.render.frame++,k===!0&&ut.beginShadows();let gt=p.state.shadowsArray;Mt.render(gt,I,j),k===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();let _t=m.opaque,et=m.transmissive;if(p.setupLights(),j.isArrayCamera){let kt=j.cameras;if(et.length>0)for(let Yt=0,Jt=kt.length;Yt<Jt;Yt++){let Kt=kt[Yt];te(_t,et,I,Kt)}q&&Vt.render(I);for(let Yt=0,Jt=kt.length;Yt<Jt;Yt++){let Kt=kt[Yt];$t(m,I,Kt,Kt.viewport)}}else et.length>0&&te(_t,et,I,j),q&&Vt.render(I),$t(m,I,j);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),I.isScene===!0&&I.onAfterRender(x,I,j),bt.resetDefaultState(),S=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],k===!0&&ut.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function vt(I,j,gt,_t){if(I.visible===!1)return;if(I.layers.test(j.layers)){if(I.isGroup)gt=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(j);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||O.intersectsSprite(I)){_t&&It.setFromMatrixPosition(I.matrixWorld).applyMatrix4(st);let Yt=ht.update(I),Jt=I.material;Jt.visible&&m.push(I,Yt,Jt,gt,It.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||O.intersectsObject(I))){let Yt=ht.update(I),Jt=I.material;if(_t&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),It.copy(I.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),It.copy(Yt.boundingSphere.center)),It.applyMatrix4(I.matrixWorld).applyMatrix4(st)),Array.isArray(Jt)){let Kt=Yt.groups;for(let ne=0,se=Kt.length;ne<se;ne++){let Qt=Kt[ne],ce=Jt[Qt.materialIndex];ce&&ce.visible&&m.push(I,Yt,ce,gt,It.z,Qt)}}else Jt.visible&&m.push(I,Yt,Jt,gt,It.z,null)}}let kt=I.children;for(let Yt=0,Jt=kt.length;Yt<Jt;Yt++)vt(kt[Yt],j,gt,_t)}function $t(I,j,gt,_t){let et=I.opaque,kt=I.transmissive,Yt=I.transparent;p.setupLightsView(gt),k===!0&&ut.setGlobalState(x.clippingPlanes,gt),_t&&tt.viewport(C.copy(_t)),et.length>0&&pe(et,j,gt),kt.length>0&&pe(kt,j,gt),Yt.length>0&&pe(Yt,j,gt),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function te(I,j,gt,_t){if((gt.isScene===!0?gt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[_t.id]===void 0&&(p.state.transmissionRenderTarget[_t.id]=new pi(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?so:fi,minFilter:ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let kt=p.state.transmissionRenderTarget[_t.id],Yt=_t.viewport||C;kt.setSize(Yt.z,Yt.w);let Jt=x.getRenderTarget();x.setRenderTarget(kt),x.getClearColor(V),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),q&&Vt.render(gt);let Kt=x.toneMapping;x.toneMapping=Ui;let ne=_t.viewport;if(_t.viewport!==void 0&&(_t.viewport=void 0),p.setupLightsView(_t),k===!0&&ut.setGlobalState(x.clippingPlanes,_t),pe(I,gt,_t),T.updateMultisampleRenderTarget(kt),T.updateRenderTargetMipmap(kt),At.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Qt=0,ce=j.length;Qt<ce;Qt++){let Se=j[Qt],be=Se.object,un=Se.geometry,ue=Se.material,jt=Se.group;if(ue.side===Mn&&be.layers.test(_t.layers)){let ii=ue.side;ue.side=nn,ue.needsUpdate=!0,qe(be,gt,_t,un,ue,jt),ue.side=ii,ue.needsUpdate=!0,se=!0}}se===!0&&(T.updateMultisampleRenderTarget(kt),T.updateRenderTargetMipmap(kt))}x.setRenderTarget(Jt),x.setClearColor(V,Y),ne!==void 0&&(_t.viewport=ne),x.toneMapping=Kt}function pe(I,j,gt){let _t=j.isScene===!0?j.overrideMaterial:null;for(let et=0,kt=I.length;et<kt;et++){let Yt=I[et],Jt=Yt.object,Kt=Yt.geometry,ne=_t===null?Yt.material:_t,se=Yt.group;Jt.layers.test(gt.layers)&&qe(Jt,j,gt,Kt,ne,se)}}function qe(I,j,gt,_t,et,kt){I.onBeforeRender(x,j,gt,_t,et,kt),I.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),et.onBeforeRender(x,j,gt,_t,I,kt),et.transparent===!0&&et.side===Mn&&et.forceSinglePass===!1?(et.side=nn,et.needsUpdate=!0,x.renderBufferDirect(gt,j,_t,et,I,kt),et.side=Oi,et.needsUpdate=!0,x.renderBufferDirect(gt,j,_t,et,I,kt),et.side=Mn):x.renderBufferDirect(gt,j,_t,et,I,kt),I.onAfterRender(x,j,gt,_t,et,kt)}function Ei(I,j,gt){j.isScene!==!0&&(j=Lt);let _t=lt.get(I),et=p.state.lights,kt=p.state.shadowsArray,Yt=et.state.version,Jt=pt.getParameters(I,et.state,kt,j,gt),Kt=pt.getProgramCacheKey(Jt),ne=_t.programs;_t.environment=I.isMeshStandardMaterial?j.environment:null,_t.fog=j.fog,_t.envMap=(I.isMeshStandardMaterial?W:E).get(I.envMap||_t.environment),_t.envMapRotation=_t.environment!==null&&I.envMap===null?j.environmentRotation:I.envMapRotation,ne===void 0&&(I.addEventListener("dispose",Dt),ne=new Map,_t.programs=ne);let se=ne.get(Kt);if(se!==void 0){if(_t.currentProgram===se&&_t.lightsStateVersion===Yt)return au(I,Jt),se}else Jt.uniforms=pt.getUniforms(I),I.onBeforeCompile(Jt,x),se=pt.acquireProgram(Jt,Kt),ne.set(Kt,se),_t.uniforms=Jt.uniforms;let Qt=_t.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Qt.clippingPlanes=ut.uniform),au(I,Jt),_t.needsLights=vp(I),_t.lightsStateVersion=Yt,_t.needsLights&&(Qt.ambientLightColor.value=et.state.ambient,Qt.lightProbe.value=et.state.probe,Qt.directionalLights.value=et.state.directional,Qt.directionalLightShadows.value=et.state.directionalShadow,Qt.spotLights.value=et.state.spot,Qt.spotLightShadows.value=et.state.spotShadow,Qt.rectAreaLights.value=et.state.rectArea,Qt.ltc_1.value=et.state.rectAreaLTC1,Qt.ltc_2.value=et.state.rectAreaLTC2,Qt.pointLights.value=et.state.point,Qt.pointLightShadows.value=et.state.pointShadow,Qt.hemisphereLights.value=et.state.hemi,Qt.directionalShadowMap.value=et.state.directionalShadowMap,Qt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Qt.spotShadowMap.value=et.state.spotShadowMap,Qt.spotLightMatrix.value=et.state.spotLightMatrix,Qt.spotLightMap.value=et.state.spotLightMap,Qt.pointShadowMap.value=et.state.pointShadowMap,Qt.pointShadowMatrix.value=et.state.pointShadowMatrix),_t.currentProgram=se,_t.uniformsList=null,se}function Ls(I){if(I.uniformsList===null){let j=I.currentProgram.getUniforms();I.uniformsList=nr.seqWithValue(j.seq,I.uniforms)}return I.uniformsList}function au(I,j){let gt=lt.get(I);gt.outputColorSpace=j.outputColorSpace,gt.batching=j.batching,gt.batchingColor=j.batchingColor,gt.instancing=j.instancing,gt.instancingColor=j.instancingColor,gt.instancingMorph=j.instancingMorph,gt.skinning=j.skinning,gt.morphTargets=j.morphTargets,gt.morphNormals=j.morphNormals,gt.morphColors=j.morphColors,gt.morphTargetsCount=j.morphTargetsCount,gt.numClippingPlanes=j.numClippingPlanes,gt.numIntersection=j.numClipIntersection,gt.vertexAlphas=j.vertexAlphas,gt.vertexTangents=j.vertexTangents,gt.toneMapping=j.toneMapping}function xp(I,j,gt,_t,et){j.isScene!==!0&&(j=Lt),T.resetTextureUnits();let kt=j.fog,Yt=_t.isMeshStandardMaterial?j.environment:null,Jt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:gr,Kt=(_t.isMeshStandardMaterial?W:E).get(_t.envMap||Yt),ne=_t.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,se=!!gt.attributes.tangent&&(!!_t.normalMap||_t.anisotropy>0),Qt=!!gt.morphAttributes.position,ce=!!gt.morphAttributes.normal,Se=!!gt.morphAttributes.color,be=Ui;_t.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(be=x.toneMapping);let un=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,ue=un!==void 0?un.length:0,jt=lt.get(_t),ii=p.state.lights;if(k===!0&&(Z===!0||I!==y)){let Rn=I===y&&_t.id===S;ut.setState(_t,I,Rn)}let de=!1;_t.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==ii.state.version||jt.outputColorSpace!==Jt||et.isBatchedMesh&&jt.batching===!1||!et.isBatchedMesh&&jt.batching===!0||et.isBatchedMesh&&jt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&jt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&jt.instancing===!1||!et.isInstancedMesh&&jt.instancing===!0||et.isSkinnedMesh&&jt.skinning===!1||!et.isSkinnedMesh&&jt.skinning===!0||et.isInstancedMesh&&jt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&jt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&jt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&jt.instancingMorph===!1&&et.morphTexture!==null||jt.envMap!==Kt||_t.fog===!0&&jt.fog!==kt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==ut.numPlanes||jt.numIntersection!==ut.numIntersection)||jt.vertexAlphas!==ne||jt.vertexTangents!==se||jt.morphTargets!==Qt||jt.morphNormals!==ce||jt.morphColors!==Se||jt.toneMapping!==be||jt.morphTargetsCount!==ue)&&(de=!0):(de=!0,jt.__version=_t.version);let zn=jt.currentProgram;de===!0&&(zn=Ei(_t,j,et));let Us=!1,xn=!1,Ir=!1,Te=zn.getUniforms(),qn=jt.uniforms;if(tt.useProgram(zn.program)&&(Us=!0,xn=!0,Ir=!0),_t.id!==S&&(S=_t.id,xn=!0),Us||y!==I){tt.buffers.depth.getReversed()?(N.copy(I.projectionMatrix),Tm(N),wm(N),Te.setValue(F,"projectionMatrix",N)):Te.setValue(F,"projectionMatrix",I.projectionMatrix),Te.setValue(F,"viewMatrix",I.matrixWorldInverse);let bi=Te.map.cameraPosition;bi!==void 0&&bi.setValue(F,xt.setFromMatrixPosition(I.matrixWorld)),Ot.logarithmicDepthBuffer&&Te.setValue(F,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(_t.isMeshPhongMaterial||_t.isMeshToonMaterial||_t.isMeshLambertMaterial||_t.isMeshBasicMaterial||_t.isMeshStandardMaterial||_t.isShaderMaterial)&&Te.setValue(F,"isOrthographic",I.isOrthographicCamera===!0),y!==I&&(y=I,xn=!0,Ir=!0)}if(et.isSkinnedMesh){Te.setOptional(F,et,"bindMatrix"),Te.setOptional(F,et,"bindMatrixInverse");let Rn=et.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Te.setValue(F,"boneTexture",Rn.boneTexture,T))}et.isBatchedMesh&&(Te.setOptional(F,et,"batchingTexture"),Te.setValue(F,"batchingTexture",et._matricesTexture,T),Te.setOptional(F,et,"batchingIdTexture"),Te.setValue(F,"batchingIdTexture",et._indirectTexture,T),Te.setOptional(F,et,"batchingColorTexture"),et._colorsTexture!==null&&Te.setValue(F,"batchingColorTexture",et._colorsTexture,T));let Dr=gt.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&ft.update(et,gt,zn),(xn||jt.receiveShadow!==et.receiveShadow)&&(jt.receiveShadow=et.receiveShadow,Te.setValue(F,"receiveShadow",et.receiveShadow)),_t.isMeshGouraudMaterial&&_t.envMap!==null&&(qn.envMap.value=Kt,qn.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),_t.isMeshStandardMaterial&&_t.envMap===null&&j.environment!==null&&(qn.envMapIntensity.value=j.environmentIntensity),xn&&(Te.setValue(F,"toneMappingExposure",x.toneMappingExposure),jt.needsLights&&yp(qn,Ir),kt&&_t.fog===!0&&yt.refreshFogUniforms(qn,kt),yt.refreshMaterialUniforms(qn,_t,$,ot,p.state.transmissionRenderTarget[I.id]),nr.upload(F,Ls(jt),qn,T)),_t.isShaderMaterial&&_t.uniformsNeedUpdate===!0&&(nr.upload(F,Ls(jt),qn,T),_t.uniformsNeedUpdate=!1),_t.isSpriteMaterial&&Te.setValue(F,"center",et.center),Te.setValue(F,"modelViewMatrix",et.modelViewMatrix),Te.setValue(F,"normalMatrix",et.normalMatrix),Te.setValue(F,"modelMatrix",et.matrixWorld),_t.isShaderMaterial||_t.isRawShaderMaterial){let Rn=_t.uniformsGroups;for(let bi=0,Ti=Rn.length;bi<Ti;bi++){let cu=Rn[bi];U.update(cu,zn),U.bind(cu,zn)}}return zn}function yp(I,j){I.ambientLightColor.needsUpdate=j,I.lightProbe.needsUpdate=j,I.directionalLights.needsUpdate=j,I.directionalLightShadows.needsUpdate=j,I.pointLights.needsUpdate=j,I.pointLightShadows.needsUpdate=j,I.spotLights.needsUpdate=j,I.spotLightShadows.needsUpdate=j,I.rectAreaLights.needsUpdate=j,I.hemisphereLights.needsUpdate=j}function vp(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(I,j,gt){lt.get(I.texture).__webglTexture=j,lt.get(I.depthTexture).__webglTexture=gt;let _t=lt.get(I);_t.__hasExternalTextures=!0,_t.__autoAllocateDepthBuffer=gt===void 0,_t.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),_t.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,j){let gt=lt.get(I);gt.__webglFramebuffer=j,gt.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(I,j=0,gt=0){P=I,b=j,w=gt;let _t=!0,et=null,kt=!1,Yt=!1;if(I){let Kt=lt.get(I);if(Kt.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(F.FRAMEBUFFER,null),_t=!1;else if(Kt.__webglFramebuffer===void 0)T.setupRenderTarget(I);else if(Kt.__hasExternalTextures)T.rebindTextures(I,lt.get(I.texture).__webglTexture,lt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Qt=I.depthTexture;if(Kt.__boundDepthTexture!==Qt){if(Qt!==null&&lt.has(Qt)&&(I.width!==Qt.image.width||I.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(I)}}let ne=I.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Yt=!0);let se=lt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(se[j])?et=se[j][gt]:et=se[j],kt=!0):I.samples>0&&T.useMultisampledRTT(I)===!1?et=lt.get(I).__webglMultisampledFramebuffer:Array.isArray(se)?et=se[gt]:et=se,C.copy(I.viewport),H.copy(I.scissor),z=I.scissorTest}else C.copy(dt).multiplyScalar($).floor(),H.copy(Ct).multiplyScalar($).floor(),z=G;if(tt.bindFramebuffer(F.FRAMEBUFFER,et)&&_t&&tt.drawBuffers(I,et),tt.viewport(C),tt.scissor(H),tt.setScissorTest(z),kt){let Kt=lt.get(I.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,Kt.__webglTexture,gt)}else if(Yt){let Kt=lt.get(I.texture),ne=j||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Kt.__webglTexture,gt||0,ne)}S=-1},this.readRenderTargetPixels=function(I,j,gt,_t,et,kt,Yt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=lt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Yt!==void 0&&(Jt=Jt[Yt]),Jt){tt.bindFramebuffer(F.FRAMEBUFFER,Jt);try{let Kt=I.texture,ne=Kt.format,se=Kt.type;if(!Ot.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=I.width-_t&&gt>=0&&gt<=I.height-et&&F.readPixels(j,gt,_t,et,at.convert(ne),at.convert(se),kt)}finally{let Kt=P!==null?lt.get(P).__webglFramebuffer:null;tt.bindFramebuffer(F.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(I,j,gt,_t,et,kt,Yt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=lt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Yt!==void 0&&(Jt=Jt[Yt]),Jt){let Kt=I.texture,ne=Kt.format,se=Kt.type;if(!Ot.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=I.width-_t&&gt>=0&&gt<=I.height-et){tt.bindFramebuffer(F.FRAMEBUFFER,Jt);let Qt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Qt),F.bufferData(F.PIXEL_PACK_BUFFER,kt.byteLength,F.STREAM_READ),F.readPixels(j,gt,_t,et,at.convert(ne),at.convert(se),0);let ce=P!==null?lt.get(P).__webglFramebuffer:null;tt.bindFramebuffer(F.FRAMEBUFFER,ce);let Se=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await bm(F,Se,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Qt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,kt),F.deleteBuffer(Qt),F.deleteSync(Se),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,j=null,gt=0){I.isTexture!==!0&&(kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,I=arguments[1]);let _t=Math.pow(2,-gt),et=Math.floor(I.image.width*_t),kt=Math.floor(I.image.height*_t),Yt=j!==null?j.x:0,Jt=j!==null?j.y:0;T.setTexture2D(I,0),F.copyTexSubImage2D(F.TEXTURE_2D,gt,0,0,Yt,Jt,et,kt),tt.unbindTexture()},this.copyTextureToTexture=function(I,j,gt=null,_t=null,et=0){I.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture function signature has changed."),_t=arguments[0]||null,I=arguments[1],j=arguments[2],et=arguments[3]||0,gt=null);let kt,Yt,Jt,Kt,ne,se,Qt,ce,Se,be=I.isCompressedTexture?I.mipmaps[et]:I.image;gt!==null?(kt=gt.max.x-gt.min.x,Yt=gt.max.y-gt.min.y,Jt=gt.isBox3?gt.max.z-gt.min.z:1,Kt=gt.min.x,ne=gt.min.y,se=gt.isBox3?gt.min.z:0):(kt=be.width,Yt=be.height,Jt=be.depth||1,Kt=0,ne=0,se=0),_t!==null?(Qt=_t.x,ce=_t.y,Se=_t.z):(Qt=0,ce=0,Se=0);let un=at.convert(j.format),ue=at.convert(j.type),jt;j.isData3DTexture?(T.setTexture3D(j,0),jt=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(T.setTexture2DArray(j,0),jt=F.TEXTURE_2D_ARRAY):(T.setTexture2D(j,0),jt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);let ii=F.getParameter(F.UNPACK_ROW_LENGTH),de=F.getParameter(F.UNPACK_IMAGE_HEIGHT),zn=F.getParameter(F.UNPACK_SKIP_PIXELS),Us=F.getParameter(F.UNPACK_SKIP_ROWS),xn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,be.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Kt),F.pixelStorei(F.UNPACK_SKIP_ROWS,ne),F.pixelStorei(F.UNPACK_SKIP_IMAGES,se);let Ir=I.isDataArrayTexture||I.isData3DTexture,Te=j.isDataArrayTexture||j.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let qn=lt.get(I),Dr=lt.get(j),Rn=lt.get(qn.__renderTarget),bi=lt.get(Dr.__renderTarget);tt.bindFramebuffer(F.READ_FRAMEBUFFER,Rn.__webglFramebuffer),tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Ti=0;Ti<Jt;Ti++)Ir&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,lt.get(I).__webglTexture,et,se+Ti),I.isDepthTexture?(Te&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,lt.get(j).__webglTexture,et,Se+Ti),F.blitFramebuffer(Kt,ne,kt,Yt,Qt,ce,kt,Yt,F.DEPTH_BUFFER_BIT,F.NEAREST)):Te?F.copyTexSubImage3D(jt,et,Qt,ce,Se+Ti,Kt,ne,kt,Yt):F.copyTexSubImage2D(jt,et,Qt,ce,Se+Ti,Kt,ne,kt,Yt);tt.bindFramebuffer(F.READ_FRAMEBUFFER,null),tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Te?I.isDataTexture||I.isData3DTexture?F.texSubImage3D(jt,et,Qt,ce,Se,kt,Yt,Jt,un,ue,be.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(jt,et,Qt,ce,Se,kt,Yt,Jt,un,be.data):F.texSubImage3D(jt,et,Qt,ce,Se,kt,Yt,Jt,un,ue,be):I.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,et,Qt,ce,kt,Yt,un,ue,be.data):I.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,et,Qt,ce,be.width,be.height,un,be.data):F.texSubImage2D(F.TEXTURE_2D,et,Qt,ce,kt,Yt,un,ue,be);F.pixelStorei(F.UNPACK_ROW_LENGTH,ii),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,de),F.pixelStorei(F.UNPACK_SKIP_PIXELS,zn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Us),F.pixelStorei(F.UNPACK_SKIP_IMAGES,xn),et===0&&j.generateMipmaps&&F.generateMipmap(jt),tt.unbindTexture()},this.copyTextureToTexture3D=function(I,j,gt=null,_t=null,et=0){return I.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),gt=arguments[0]||null,_t=arguments[1]||null,I=arguments[2],j=arguments[3],et=arguments[4]||0),kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,j,gt,_t,et)},this.initRenderTarget=function(I){lt.get(I).__webglFramebuffer===void 0&&T.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?T.setTextureCube(I,0):I.isData3DTexture?T.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?T.setTexture2DArray(I,0):T.setTexture2D(I,0),tt.unbindTexture()},this.resetState=function(){b=0,w=0,P=null,tt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var Fi=class extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Pl=class extends dn{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Sn,h=Sn,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ua=class extends ze{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$s=new he,hd=new he,Wo=[],ud=new mi,vy=new he,Fr=new Ht,Br=new us,xe=class extends Ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ua(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,vy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),ud.copy(t.boundingBox).applyMatrix4($s),this.boundingBox.union(ud)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),Br.copy(t.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),t.ray.intersectsSphere(Br)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,$s),hd.multiplyMatrices(n,$s),Fr.matrixWorld=hd,Fr.raycast(t,Wo);for(let o=0,a=Wo.length;o<a;o++){let c=Wo[o];c.instanceId=r,c.object=this,e.push(c)}Wo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ua(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pl(new Float32Array(i*this.count),i,this.count,th,$n));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Le=class extends dn{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new Wt:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,i=[],r=[],o=[],a=new L,c=new he;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ze(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ze(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Kr=class extends In{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Wt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Il=class extends Kr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function oh(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Xo=new L,Sc=new oh,Ec=new oh,bc=new oh,fs=class extends In{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Xo.subVectors(i[0],i[1]).add(i[0]),l=Xo);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Xo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Sc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Ec.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),bc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ec.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),bc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Sc.calc(c),Ec.calc(c),bc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function dd(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function My(s,t){let e=1-s;return e*e*t}function Sy(s,t){return 2*(1-s)*s*t}function Ey(s,t){return s*s*t}function Xr(s,t,e,n){return My(s,t)+Sy(s,e)+Ey(s,n)}function by(s,t){let e=1-s;return e*e*e*t}function Ty(s,t){let e=1-s;return 3*e*e*s*t}function wy(s,t){return 3*(1-s)*s*s*t}function Ay(s,t){return s*s*s*t}function qr(s,t,e,n,i){return by(s,t)+Ty(s,e)+wy(s,n)+Ay(s,i)}var da=class extends In{constructor(t=new Wt,e=new Wt,n=new Wt,i=new Wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Wt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qr(t,i.x,r.x,o.x,a.x),qr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Dl=class extends In{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qr(t,i.x,r.x,o.x,a.x),qr(t,i.y,r.y,o.y,a.y),qr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends In{constructor(t=new Wt,e=new Wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Wt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ll=class extends In{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends In{constructor(t=new Wt,e=new Wt,n=new Wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Wt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Xr(t,i.x,r.x,o.x),Xr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dr=class extends In{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Xr(t,i.x,r.x,o.x),Xr(t,i.y,r.y,o.y),Xr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Wt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(dd(a,c.x,l.x,h.x,u.x),dd(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Wt().fromArray(i))}return this}},ga=Object.freeze({__proto__:null,ArcCurve:Il,CatmullRomCurve3:fs,CubicBezierCurve:da,CubicBezierCurve3:Dl,EllipseCurve:Kr,LineCurve:fa,LineCurve3:Ll,QuadraticBezierCurve:pa,QuadraticBezierCurve3:dr,SplineCurve:ma}),Ul=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ga[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new ga[i.type]().fromJSON(i))}return this}},fr=class extends Ul{constructor(t){super(),this.type="Path",this.currentPoint=new Wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new fa(this.currentPoint.clone(),new Wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new pa(this.currentPoint.clone(),new Wt(t,e),new Wt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new da(this.currentPoint.clone(),new Wt(t,e),new Wt(n,i),new Wt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ma(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new Kr(t,e,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Bi=class s extends He{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(f,2));function M(){let x=new L,A=new L,b=0,w=(e-t)/n;for(let P=0;P<=r;P++){let S=[],y=P/r,C=y*(e-t)+t;for(let H=0;H<=i;H++){let z=H/i,V=z*c+a,Y=Math.sin(V),D=Math.cos(V);A.x=C*Y,A.y=-y*n+m,A.z=C*D,u.push(A.x,A.y,A.z),x.set(Y,w,D).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-y),S.push(g++)}_.push(S)}for(let P=0;P<i;P++)for(let S=0;S<r;S++){let y=_[S][P],C=_[S+1][P],H=_[S+1][P+1],z=_[S][P+1];(t>0||S!==0)&&(h.push(y,C,z),b+=3),(e>0||S!==r-1)&&(h.push(C,H,z),b+=3)}l.addGroup(p,b,0),p+=b}function v(x){let A=g,b=new Wt,w=new L,P=0,S=x===!0?t:e,y=x===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;let C=g;for(let H=0;H<=i;H++){let V=H/i*c+a,Y=Math.cos(V),D=Math.sin(V);w.x=S*D,w.y=m*y,w.z=S*Y,u.push(w.x,w.y,w.z),d.push(0,y,0),b.x=Y*.5+.5,b.y=D*.5*y+.5,f.push(b.x,b.y),g++}for(let H=0;H<i;H++){let z=A+H,V=C+H;x===!0?h.push(V,V+1,z):h.push(V+1,V,z),P+=3}l.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ol=class s extends He{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(r.slice(),3)),this.setAttribute("uv",new Ee(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let v=new L,x=new L,A=new L;for(let b=0;b<e.length;b+=3)f(e[b+0],v),f(e[b+1],x),f(e[b+2],A),c(v,x,A,M)}function c(M,v,x,A){let b=A+1,w=[];for(let P=0;P<=b;P++){w[P]=[];let S=M.clone().lerp(x,P/b),y=v.clone().lerp(x,P/b),C=b-P;for(let H=0;H<=C;H++)H===0&&P===b?w[P][H]=S:w[P][H]=S.clone().lerp(y,H/C)}for(let P=0;P<b;P++)for(let S=0;S<2*(b-P)-1;S++){let y=Math.floor(S/2);S%2===0?(d(w[P][y+1]),d(w[P+1][y]),d(w[P][y])):(d(w[P][y+1]),d(w[P+1][y+1]),d(w[P+1][y]))}}function l(M){let v=new L;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(M),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){let M=new L;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];let x=m(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;o.push(x,1-A)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let v=o[M+0],x=o[M+2],A=o[M+4],b=Math.max(v,x,A),w=Math.min(v,x,A);b>.9&&w<.1&&(v<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,v){let x=M*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){let M=new L,v=new L,x=new L,A=new L,b=new Wt,w=new Wt,P=new Wt;for(let S=0,y=0;S<r.length;S+=9,y+=6){M.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),b.set(o[y+0],o[y+1]),w.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),A.copy(M).add(v).add(x).divideScalar(3);let C=m(A);_(b,y+0,M,C),_(w,y+2,v,C),_(P,y+4,x,C)}}function _(M,v,x,A){A<0&&M.x===1&&(o[v]=M.x-1),x.x===0&&x.z===0&&(o[v]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Qr=class extends fr{constructor(t){super(t),this.uuid=ys(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new fr().fromJSON(i))}return this}},Ry={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Hd(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=Ly(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return jr(r,o,e,a,c,f,0),o}};function Hd(s,t,e,n,i){let r,o;if(i===Wy(s,t,e,n)>0)for(r=t;r<e;r+=n)o=fd(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=fd(r,s[r],s[r+1],o);return o&&Ea(o,o.next)&&(eo(o),o=o.next),o}function ps(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ea(e,e.next)||Re(e.prev,e,e.next)===0)){if(eo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function jr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&By(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Py(s,n,i,r):Cy(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),eo(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Iy(ps(s),t,e),jr(s,t,e,n,i,r,2)):o===2&&Dy(s,t,e,n,i,r):jr(ps(s),t,e,n,i,r,1);break}}}function Cy(s){let t=s.prev,e=s,n=s.next;if(Re(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Qs(i,a,r,c,o,l,g.x,g.y)&&Re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Py(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Re(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Nl(f,g,t,e,n),M=Nl(_,m,t,e,n),v=s.prevZ,x=s.nextZ;for(;v&&v.z>=p&&x&&x.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Qs(a,h,c,u,l,d,v.x,v.y)&&Re(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Qs(a,h,c,u,l,d,x.x,x.y)&&Re(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Qs(a,h,c,u,l,d,v.x,v.y)&&Re(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Qs(a,h,c,u,l,d,x.x,x.y)&&Re(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Iy(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Ea(i,r)&&Vd(i,n,n.next,r)&&to(i,r)&&to(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),eo(n),eo(n.next),n=s=r),n=n.next}while(n!==s);return ps(n)}function Dy(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hy(o,a)){let c=Gd(o,a);o=ps(o,o.next),c=ps(c,c.next),jr(o,t,e,n,i,r,0),jr(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Ly(s,t,e,n){let i=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Hd(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(ky(l));for(i.sort(Uy),r=0;r<i.length;r++)e=Oy(i[r],e);return e}function Uy(s,t){return s.x-t.x}function Oy(s,t){let e=Ny(s,t);if(!e)return t;let n=Gd(e,s);return ps(n,n.next),ps(e,e.next)}function Ny(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Qs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),to(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Fy(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Fy(s,t){return Re(s.prev,s,t.prev)<0&&Re(t.next,s,s.next)<0}function By(s,t,e,n){let i=s;do i.z===0&&(i.z=Nl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,zy(i)}function zy(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function Nl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ky(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Qs(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Hy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Vy(s,t)&&(to(s,t)&&to(t,s)&&Gy(s,t)&&(Re(s.prev,s,t.prev)||Re(s,t.prev,t))||Ea(s,t)&&Re(s.prev,s,s.next)>0&&Re(t.prev,t,t.next)>0)}function Re(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ea(s,t){return s.x===t.x&&s.y===t.y}function Vd(s,t,e,n){let i=Yo(Re(s,t,e)),r=Yo(Re(s,t,n)),o=Yo(Re(e,n,s)),a=Yo(Re(e,n,t));return!!(i!==r&&o!==a||i===0&&qo(s,e,t)||r===0&&qo(s,n,t)||o===0&&qo(e,s,n)||a===0&&qo(e,t,n))}function qo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Yo(s){return s>0?1:s<0?-1:0}function Vy(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Vd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function to(s,t){return Re(s.prev,s,s.next)<0?Re(s,t,s.next)>=0&&Re(s,s.prev,t)>=0:Re(s,t,s.prev)<0||Re(s,s.next,t)<0}function Gy(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Gd(s,t){let e=new Fl(s.i,s.x,s.y),n=new Fl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function fd(s,t,e,n){let i=new Fl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function eo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Fl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wy(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Yr=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];pd(t),md(n,t);let o=t.length;e.forEach(pd);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,md(n,e[c]);let a=Ry.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function pd(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function md(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var _a=class s extends He{constructor(t=new Qr([new Wt(.5,.5),new Wt(-.5,.5),new Wt(-.5,-.5),new Wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Ee(i,3)),this.setAttribute("uv",new Ee(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Xy,v,x=!1,A,b,w,P;p&&(v=p.getSpacedPoints(h),x=!0,d=!1,A=p.computeFrenetFrames(h,!1),b=new L,w=new L,P=new L),d||(m=0,f=0,g=0,_=0);let S=a.extractPoints(l),y=S.shape,C=S.holes;if(!Yr.isClockWise(y)){y=y.reverse();for(let q=0,rt=C.length;q<rt;q++){let F=C[q];Yr.isClockWise(F)&&(C[q]=F.reverse())}}let z=Yr.triangulateShape(y,C),V=y;for(let q=0,rt=C.length;q<rt;q++){let F=C[q];y=y.concat(F)}function Y(q,rt,F){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(rt,F)}let D=y.length,ot=z.length;function $(q,rt,F){let Ft,At,Ot,tt=q.x-rt.x,Nt=q.y-rt.y,lt=F.x-q.x,T=F.y-q.y,E=tt*tt+Nt*Nt,W=tt*T-Nt*lt;if(Math.abs(W)>Number.EPSILON){let Q=Math.sqrt(E),Tt=Math.sqrt(lt*lt+T*T),ht=rt.x-Nt/Q,pt=rt.y+tt/Q,yt=F.x-T/Tt,St=F.y+lt/Tt,Xt=((yt-ht)*T-(St-pt)*lt)/(tt*T-Nt*lt);Ft=ht+tt*Xt-q.x,At=pt+Nt*Xt-q.y;let ut=Ft*Ft+At*At;if(ut<=2)return new Wt(Ft,At);Ot=Math.sqrt(ut/2)}else{let Q=!1;tt>Number.EPSILON?lt>Number.EPSILON&&(Q=!0):tt<-Number.EPSILON?lt<-Number.EPSILON&&(Q=!0):Math.sign(Nt)===Math.sign(T)&&(Q=!0),Q?(Ft=-Nt,At=tt,Ot=Math.sqrt(E)):(Ft=tt,At=Nt,Ot=Math.sqrt(E/2))}return new Wt(Ft/Ot,At/Ot)}let ct=[];for(let q=0,rt=V.length,F=rt-1,Ft=q+1;q<rt;q++,F++,Ft++)F===rt&&(F=0),Ft===rt&&(Ft=0),ct[q]=$(V[q],V[F],V[Ft]);let it=[],dt,Ct=ct.concat();for(let q=0,rt=C.length;q<rt;q++){let F=C[q];dt=[];for(let Ft=0,At=F.length,Ot=At-1,tt=Ft+1;Ft<At;Ft++,Ot++,tt++)Ot===At&&(Ot=0),tt===At&&(tt=0),dt[Ft]=$(F[Ft],F[Ot],F[tt]);it.push(dt),Ct=Ct.concat(dt)}for(let q=0;q<m;q++){let rt=q/m,F=f*Math.cos(rt*Math.PI/2),Ft=g*Math.sin(rt*Math.PI/2)+_;for(let At=0,Ot=V.length;At<Ot;At++){let tt=Y(V[At],ct[At],Ft);N(tt.x,tt.y,-F)}for(let At=0,Ot=C.length;At<Ot;At++){let tt=C[At];dt=it[At];for(let Nt=0,lt=tt.length;Nt<lt;Nt++){let T=Y(tt[Nt],dt[Nt],Ft);N(T.x,T.y,-F)}}}let G=g+_;for(let q=0;q<D;q++){let rt=d?Y(y[q],Ct[q],G):y[q];x?(w.copy(A.normals[0]).multiplyScalar(rt.x),b.copy(A.binormals[0]).multiplyScalar(rt.y),P.copy(v[0]).add(w).add(b),N(P.x,P.y,P.z)):N(rt.x,rt.y,0)}for(let q=1;q<=h;q++)for(let rt=0;rt<D;rt++){let F=d?Y(y[rt],Ct[rt],G):y[rt];x?(w.copy(A.normals[q]).multiplyScalar(F.x),b.copy(A.binormals[q]).multiplyScalar(F.y),P.copy(v[q]).add(w).add(b),N(P.x,P.y,P.z)):N(F.x,F.y,u/h*q)}for(let q=m-1;q>=0;q--){let rt=q/m,F=f*Math.cos(rt*Math.PI/2),Ft=g*Math.sin(rt*Math.PI/2)+_;for(let At=0,Ot=V.length;At<Ot;At++){let tt=Y(V[At],ct[At],Ft);N(tt.x,tt.y,u+F)}for(let At=0,Ot=C.length;At<Ot;At++){let tt=C[At];dt=it[At];for(let Nt=0,lt=tt.length;Nt<lt;Nt++){let T=Y(tt[Nt],dt[Nt],Ft);x?N(T.x,T.y+v[h-1].y,v[h-1].x+F):N(T.x,T.y,u+F)}}}O(),k();function O(){let q=i.length/3;if(d){let rt=0,F=D*rt;for(let Ft=0;Ft<ot;Ft++){let At=z[Ft];st(At[2]+F,At[1]+F,At[0]+F)}rt=h+m*2,F=D*rt;for(let Ft=0;Ft<ot;Ft++){let At=z[Ft];st(At[0]+F,At[1]+F,At[2]+F)}}else{for(let rt=0;rt<ot;rt++){let F=z[rt];st(F[2],F[1],F[0])}for(let rt=0;rt<ot;rt++){let F=z[rt];st(F[0]+D*h,F[1]+D*h,F[2]+D*h)}}n.addGroup(q,i.length/3-q,0)}function k(){let q=i.length/3,rt=0;Z(V,rt),rt+=V.length;for(let F=0,Ft=C.length;F<Ft;F++){let At=C[F];Z(At,rt),rt+=At.length}n.addGroup(q,i.length/3-q,1)}function Z(q,rt){let F=q.length;for(;--F>=0;){let Ft=F,At=F-1;At<0&&(At=q.length-1);for(let Ot=0,tt=h+m*2;Ot<tt;Ot++){let Nt=D*Ot,lt=D*(Ot+1),T=rt+Ft+Nt,E=rt+At+Nt,W=rt+At+lt,Q=rt+Ft+lt;xt(T,E,W,Q)}}}function N(q,rt,F){c.push(q),c.push(rt),c.push(F)}function st(q,rt,F){It(q),It(rt),It(F);let Ft=i.length/3,At=M.generateTopUV(n,i,Ft-3,Ft-2,Ft-1);Lt(At[0]),Lt(At[1]),Lt(At[2])}function xt(q,rt,F,Ft){It(q),It(rt),It(Ft),It(rt),It(F),It(Ft);let At=i.length/3,Ot=M.generateSideWallUV(n,i,At-6,At-3,At-2,At-1);Lt(Ot[0]),Lt(Ot[1]),Lt(Ot[3]),Lt(Ot[1]),Lt(Ot[2]),Lt(Ot[3])}function It(q){i.push(c[q*3+0]),i.push(c[q*3+1]),i.push(c[q*3+2])}function Lt(q){r.push(q.x),r.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return qy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ga[i.type]().fromJSON(i)),new s(n,t.options)}},Xy={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new Wt(r,o),new Wt(a,c),new Wt(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Wt(o,1-c),new Wt(l,1-u),new Wt(d,1-g),new Wt(_,1-p)]:[new Wt(a,1-c),new Wt(h,1-u),new Wt(f,1-g),new Wt(m,1-p)]}};function qy(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var zi=class s extends Ol{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Kn=class s extends He{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,d=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let M=[],v=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){let b=A/e;u.x=-t*Math.cos(i+b*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+b*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(b+x,1-v),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let v=h[p][M+1],x=h[p][M],A=h[p+1][M],b=h[p+1][M+1];(p!==0||o>0)&&f.push(v,x,b),(p!==n-1||c<Math.PI)&&f.push(x,A,b)}this.setIndex(f),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(_,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Dn=class s extends He{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var gi=class s extends He{constructor(t=new dr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new Wt,h=new L,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(f,2));function _(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),M(),p()}function m(v){h=t.getPointAt(v/e,h);let x=o.normals[v],A=o.binormals[v];for(let b=0;b<=i;b++){let w=b/i*Math.PI*2,P=Math.sin(w),S=-Math.cos(w);c.x=S*x.x+P*A.x,c.y=S*x.y+P*A.y,c.z=S*x.z+P*A.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let x=1;x<=i;x++){let A=(i+1)*(v-1)+(x-1),b=(i+1)*v+(x-1),w=(i+1)*v+x,P=(i+1)*(v-1)+x;g.push(A,b,P),g.push(b,w,P)}}function M(){for(let v=0;v<=e;v++)for(let x=0;x<=i;x++)l.x=v/e,l.y=x/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new ga[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ye=class extends ds{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Id,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ms=class extends ye{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Zo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Yy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var pr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bl=class extends pr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fu,endingEnd:fu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case pu:r=t,a=2*e-n;break;case mu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case pu:o=t,c=2*n-e;break;case mu:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+M*o[l+A]+v*o[c+A]+x*o[u+A];return r}},zl=class extends pr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},kl=class extends pr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Wn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zo(e,this.TimeBufferType),this.values=Zo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zo(t.times,Array),values:Zo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ta:e=this.InterpolantFactoryMethodDiscrete;break;case dl:e=this.InterpolantFactoryMethodLinear;break;case $a:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return dl;case this.InterpolantFactoryMethodSmooth:return $a}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Yy(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$a,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=dl;var gs=class extends Wn{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=ta;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Wn{};Hl.prototype.ValueTypeName="color";var Vl=class extends Wn{};Vl.prototype.ValueTypeName="number";var Gl=class extends pr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)En.slerpFlat(r,0,o,l-a,o,l,c);return r}},xa=class extends Wn{InterpolantFactoryMethodLinear(t){return new Gl(this.times,this.values,this.getValueSize(),t)}};xa.prototype.ValueTypeName="quaternion";xa.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends Wn{constructor(t,e,n){super(t,e,n)}};_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=ta;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Wl=class extends Wn{};Wl.prototype.ValueTypeName="vector";var Xl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Zy=new Xl,ql=class{constructor(t){this.manager=t!==void 0?t:Zy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ql.DEFAULT_MATERIAL_NAME="__DEFAULT";var no=class extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},mr=class extends no{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Tc=new he,gd=new L,_d=new L,ya=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;gd.setFromMatrixPosition(t.matrixWorld),e.position.copy(gd),_d.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_d),e.updateMatrixWorld(),Tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var xd=new he,zr=new L,wc=new L,Yl=class extends ya{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Wt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zr.setFromMatrixPosition(t.matrixWorld),n.position.copy(zr),wc.copy(n.position),wc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wc),n.updateMatrixWorld(),i.makeTranslation(-zr.x,-zr.y,-zr.z),xd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd)}},xs=class extends no{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Zl=class extends ya{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ki=class extends no{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new Zl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ah="\\[\\]\\.:\\/",$y=new RegExp("["+ah+"]","g"),ch="[^"+ah+"]",Jy="[^"+ah.replace("\\.","")+"]",Ky=/((?:WC+[\/:])*)/.source.replace("WC",ch),Qy=/(WCOD+)?/.source.replace("WCOD",Jy),jy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),tv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),ev=new RegExp("^"+Ky+Qy+jy+tv+"$"),nv=["material","materials","bones","map"],$l=class{constructor(t,e,n){let i=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($y,"")}static parseTrackName(t){let e=ev.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);nv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=$l;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);var ba={high:{dpr:1.6,blocks:18,grid:5,bevel:3,fps:60},medium:{dpr:1.25,blocks:12,grid:4,bevel:2,fps:60},low:{dpr:1,blocks:8,grid:3,bevel:1,fps:30}};function ro(){let s="auto";try{s=localStorage.getItem("portfolio-quality")||"auto"}catch{}if(ba[s])return s;let t=navigator.hardwareConcurrency||4,e=navigator.deviceMemory||4;return t<=2||e<=2?"low":innerWidth<900||e<=4?"medium":"high"}var oo=new L;function Ln(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;oo.copy(t),oo[n]=0,oo.normalize();let l=.5*o/(o+a),h=1-oo.angleTo(s)/c;return Math.sign(oo[e])===1?h*l:a/(o+a)+l+l*(1-h)}var We=class extends fe{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,c=new L,l=new L(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new L,_=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Ln(g,c,"z","y",r,n),d[p+1]=1-Ln(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-Ln(g,c,"z","y",r,n),d[p+1]=1-Ln(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-Ln(g,c,"x","z",r,t),d[p+1]=Ln(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-Ln(g,c,"x","z",r,t),d[p+1]=1-Ln(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-Ln(g,c,"x","y",r,t),d[p+1]=1-Ln(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=Ln(g,c,"x","y",r,t),d[p+1]=1-Ln(g,c,"y","x",r,e);break}}};var Ta=class extends Fi{constructor(){super();let t=new fe;t.deleteAttribute("uv");let e=new ye({side:nn}),n=new ye,i=new xs(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Ht(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ht(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Ht(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new Ht(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Ht(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Ht(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Ht(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Ht(t,xr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Ht(t,xr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new Ht(t,xr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new Ht(t,xr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let m=new Ht(t,xr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Ht(t,xr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function xr(s){let t=new Ce;return t.color.setScalar(s),t}function wa({size:s=2,software:t=!1,orange:e}={}){let n=new Zt,i=new Zt,r=[],o=e||new ms({color:"#e96c0c",metalness:.48,roughness:.38,clearcoat:.08,clearcoatRoughness:.5,envMapIntensity:.7}),a=new ms({color:"#e96c0c",metalness:.5,roughness:.46,envMapIntensity:.65}),c=new ye({color:"#211e19",metalness:.5,roughness:.4}),l=t?new fe(1,1,1):new We(1,1,1,4,.0325),h=t?new De(.91*s,.91*s):new We(.91*s,.91*s,.0125*s,3,.006*s),u=new fe(.006*s,.0225*s,.0015*s),d=new Ht(l,a);d.scale.setScalar(s),d.renderOrder=2,n.add(d,i);let f=new ee(t?"#dc630c":"#e96c0c"),g=new ee("#25211c");for(let[p,M]of[[0,0,1],[0,0,-1],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0]].entries()){let v=new Ht(h,o),x=new L(...M);if(v.renderOrder=3,v.quaternion.setFromUnitVectors(new L(0,0,1),x),v.position.copy(x).multiplyScalar(.504*s),i.add(v),r.push({part:v,normal:x}),p===0)for(let A=0;A<7;A++){let b=new Ht(u,c);b.renderOrder=4,b.position.set((-.325+A*.012)*s,-.325*s,.008*s),v.add(b)}}function _({fracture:p=0,spread:M=0}={}){let v=Ne.clamp(p,0,1),x=Ne.clamp(M,0,1);d.visible=i.visible=v<.8,d.scale.setScalar(s*Math.max(.001,1-v)),i.scale.setScalar(Math.max(.001,1-v)),r.forEach(({part:A,normal:b})=>A.position.copy(b).multiplyScalar((.504+x*.31)*s)),a.color.copy(f).lerp(g,x)}function m(){l.dispose(),h.dispose(),u.dispose(),a.dispose(),c.dispose(),e||o.dispose()}return{group:n,core:d,panelsGroup:i,panels:r,orange:o,update:_,dispose:m}}function Aa(s,t){let e=new hr(s),n=new Ta,i=e.fromScene(n,.04);return t.environment=i.texture,e.dispose(),n.dispose(),i}var yr=class{constructor(t){if(this.canvas=t,this.context=t.getContext("2d",{alpha:!0}),!this.context)throw new Error("Canvas unavailable");this.capabilities={getMaxAnisotropy:()=>1},this.pixelRatio=1,this.mvp=new he,this.normalMatrix=new ie,this.vector=new L,this.normal=new L,this.light=new L(-.5,.8,.9).normalize(),this.half=new L(-.2,.4,1).normalize()}setPixelRatio(t){this.pixelRatio=Math.min(t,1.25)}setSize(t,e){this.width=t,this.height=e,this.canvas.width=Math.round(t*this.pixelRatio),this.canvas.height=Math.round(e*this.pixelRatio)}render(t,e){let n=this.context,i=this.width,r=this.height,o=this.pixelRatio;n.setTransform(o,0,0,o,0,0),n.clearRect(0,0,i,r),t.updateMatrixWorld(),e.updateMatrixWorld(),e.matrixWorldInverse.copy(e.matrixWorld).invert();let a=[],c=new he().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),l=(f,g,_=null)=>{if(!f.isMesh||f.userData.skipSoftware)return;let m=f.material;if(!m||m.opacity<.005)return;let p=f.geometry,M=p.attributes.position,v=p.attributes.uv,x=p.attributes.normal,A=p.index;if(!M)return;this.mvp.multiplyMatrices(c,g),this.normalMatrix.getNormalMatrix(g);let b=[];for(let y=0;y<M.count;y++)this.vector.fromBufferAttribute(M,y).applyMatrix4(this.mvp),b.push({x:(this.vector.x*.5+.5)*i,y:(-.5*this.vector.y+.5)*r,z:this.vector.z});let w=A?A.count:M.count,P=Math.max(0,p.drawRange.start||0),S=Math.min(w,P+p.drawRange.count);for(let y=P;y<S;y+=3){let C=A?A.getX(y):y,H=A?A.getX(y+1):y+1,z=A?A.getX(y+2):y+2,V=b[C],Y=b[H],D=b[z];if(V.z>1||V.z<-1||Y.z>1||D.z>1)continue;let ot=(Y.x-V.x)*(D.y-V.y)-(Y.y-V.y)*(D.x-V.x);if(m.side!==Mn&&ot>=0||Math.max(V.x,Y.x,D.x)<0||Math.min(V.x,Y.x,D.x)>i||Math.max(V.y,Y.y,D.y)<0||Math.min(V.y,Y.y,D.y)>r)continue;let $=1,ct=0,it=0;!m.isMeshBasicMaterial&&x&&(this.normal.set(x.getX(C)+x.getX(H)+x.getX(z),x.getY(C)+x.getY(H)+x.getY(z),x.getZ(C)+x.getZ(H)+x.getZ(z)).applyMatrix3(this.normalMatrix).normalize(),$=.26+Math.max(0,this.normal.dot(this.light))*.9,ct=Math.pow(Math.max(0,this.normal.dot(this.half)),24)*.05,it=Math.pow(1-Math.abs(this.normal.z),4)*.035);let dt=m.color.clone();_&&dt.multiply(_),dt.convertLinearToSRGB();let Ct=[dt.r,dt.g,dt.b].map((k,Z)=>Math.round(Math.min(1,k*$+ct*(Z===0?1:Z===1?.82:.63)+it*(Z===0?.9:Z===1?.36:.16))*255)),G=null;if(m.map?.image&&v){let k=m.map.image;G={img:k,uv:[C,H,z].map(Z=>({x:v.getX(Z)*k.width,y:(1-v.getY(Z))*k.height}))}}let O=null;if(!G&&p.type==="BoxGeometry"&&A&&y%6===0&&y+6<=S){O=[...new Set(Array.from({length:6},(st,xt)=>A.getX(y+xt)))].map(st=>b[st]);let Z=O.reduce((st,xt)=>st+xt.x,0)/4,N=O.reduce((st,xt)=>st+xt.y,0)/4;O.sort((st,xt)=>Math.atan2(st.y-N,st.x-Z)-Math.atan2(xt.y-N,xt.x-Z)),y+=3}a.push({a:V,b:Y,c:D,z:O?O.reduce((k,Z)=>k+Z.z,0)/4:(V.z+Y.z+D.z)/3,color:`rgb(${Ct.join(",")})`,alpha:m.opacity,order:f.renderOrder,tex:G,quad:O})}},h=new he,u=new he,d=new ee;t.traverseVisible(f=>{if(!(!f.isMesh||f.userData.skipSoftware))if(f.isInstancedMesh)for(let g=0;g<f.count;g++)f.getMatrixAt(g,h),u.multiplyMatrices(f.matrixWorld,h),f.instanceColor&&f.getColorAt(g,d),l(f,u,f.instanceColor?d:null);else l(f,f.matrixWorld)}),a.sort((f,g)=>f.order-g.order||g.z-f.z);for(let f of a){if(n.globalAlpha=f.alpha,f.tex){this.drawTexture(f);continue}n.fillStyle=f.color,n.strokeStyle=f.color,n.lineWidth=.5,n.beginPath();let g=f.quad||[f.a,f.b,f.c];n.moveTo(g[0].x,g[0].y);for(let _ of g.slice(1))n.lineTo(_.x,_.y);n.closePath(),n.fill(),n.stroke()}n.globalAlpha=1}drawTexture(t){let e=this.context,[n,i,r]=t.tex.uv,[o,a,c]=[t.a,t.b,t.c],l=n.x*(i.y-r.y)+i.x*(r.y-n.y)+r.x*(n.y-i.y);if(Math.abs(l)<.001)return;let h=(o.x*(i.y-r.y)+a.x*(r.y-n.y)+c.x*(n.y-i.y))/l,u=(o.y*(i.y-r.y)+a.y*(r.y-n.y)+c.y*(n.y-i.y))/l,d=(o.x*(r.x-i.x)+a.x*(n.x-r.x)+c.x*(i.x-n.x))/l,f=(o.y*(r.x-i.x)+a.y*(n.x-r.x)+c.y*(i.x-n.x))/l,g=(o.x*(i.x*r.y-r.x*i.y)+a.x*(r.x*n.y-n.x*r.y)+c.x*(n.x*i.y-i.x*n.y))/l,_=(o.y*(i.x*r.y-r.x*i.y)+a.y*(r.x*n.y-n.x*r.y)+c.y*(n.x*i.y-i.x*n.y))/l;e.save(),e.beginPath();let m=(o.x+a.x+c.x)/3,p=(o.y+a.y+c.y)/3,M=v=>{let x=v.x-m,A=v.y-p,b=Math.hypot(x,A)||1;return[v.x+x/b*.7,v.y+A/b*.7]};e.moveTo(...M(o)),e.lineTo(...M(a)),e.lineTo(...M(c)),e.closePath(),e.clip(),e.transform(h,u,d,f,g,_),e.drawImage(t.tex.img,0,0),e.restore()}};function Wd(){if(!document.querySelector("#world"))return;let s=document.documentElement,t=document.querySelector(".art"),e=document.querySelector("#world"),n=document.querySelector(".portrait-opening")||document.querySelector("#journey"),i=document.querySelector("#portrait"),r=matchMedia("(prefers-reduced-motion: reduce)"),o=()=>r.matches||s.classList.contains("reduced-motion"),a=(O,k,Z)=>{let N=Ne.clamp((Z-O)/(k-O),0,1);return N*N*(3-2*N)},c,l=!1;try{c=new ur({canvas:e,alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{l=!0;try{c=new yr(e)}catch{s.dataset.renderer="static"}}let h=new Fi,u=new lr(-4,4,2.7,-2.7,.1,30);u.position.z=10;let d;c&&!l&&(c.outputColorSpace=ge,c.toneMapping=io,c.toneMappingExposure=1,d=Aa(c,h)),h.add(new mr("#fff5e5","#635446",1.6));let f=new ki("#fff8ee",2.8);f.position.set(-3,6,5),h.add(f);let g=wa({size:1.85,software:l});h.add(g.group),g.group.rotation.set(.22,-.49,-.05),g.group.traverse(O=>{O.isMesh&&(O.material.transparent=!0)});let _=JSON.parse(document.querySelector("#samples").textContent),m=ro(),p=l?448:m==="low"?224:m==="medium"||innerWidth<700?448:896,M=new fe(1,1,1),v=new ye({color:"#ffffff",metalness:.35,roughness:.48,transparent:!0}),x=new xe(M,v,p);x.instanceMatrix.setUsage(bn),x.frustumCulled=!1,h.add(x);let A=new L,b=new le,w=new ee,P=O=>{let k=Math.sin((O+1)*127.1)*43758.5453;return k-Math.floor(k)},S=Array.from({length:p},(O,k)=>{let Z=_[Math.floor(k*_.length/p)],N=Math.ceil(Math.cbrt(p));return{start:new L((k%N/(N-1)-.5)*1.72,(Math.floor(k/N)%N/(N-1)-.5)*1.72,(Math.floor(k/N/N)/(N-1)-.5)*1.72).applyEuler(g.group.rotation),target:new L((Z[0]-.5)*2.85,(.5-Z[1])*3.8,0),color:new ee(Z[2]),phase:P(k)*Math.PI*2,radius:.8+P(k+9)*.9,height:(P(k+28)-.5)*3.5,speed:.45+P(k+7)*.4}}),y=0,C=0,H=0,z=0,V=!0,Y=!0,D=[["Seu neg\xF3cio tem<br>um <em>problema?</em>","Eu transformo em<br>solu\xE7\xE3o digital.","01 / O PONTO DE PARTIDA"],["Separar para<br><em>entender.</em>","Cada parte revela<br>um caminho poss\xEDvel.","02 / INVESTIGA\xC7\xC3O"],["Conectar faz<br><em>tomar forma.</em>","O movimento encontra dire\xE7\xE3o.","03 / CONEX\xC3O"],["Por tr\xE1s da solu\xE7\xE3o,<br><em>Abra\xE3o.</em>","Abra\xE3o Lima Ribeiro<br>Desenvolvedor de solu\xE7\xF5es digitais.","04 / QUEM RESOLVE"]],ot=-1;function $(){let O=y<.24?0:y<.57?1:y<.83?2:3;O!==ot&&(ot=O,document.querySelector("#headline").innerHTML=D[O][0],document.querySelector("#subline").innerHTML=D[O][1],document.querySelector("#chapter").textContent=D[O][2]),s.style.setProperty("--progress",y),i.style.opacity=a(.82,.97,y),i.setAttribute("aria-hidden",String(y<.83)),i.style.filter=`blur(${(1-a(.8,.96,y))*9}px)`,n.dataset.progress=y.toFixed(3),n.dataset.phase=String(O)}function ct(){let O=n.getBoundingClientRect();C=Ne.clamp(-O.top/(O.height-innerHeight),0,1),Y=!0}addEventListener("scroll",ct,{passive:!0});let it=()=>{if(!c)return;let O=t.getBoundingClientRect();c.setPixelRatio(Math.min(devicePixelRatio||1,l?1:innerWidth<700?1.25:1.6)),c.setSize(O.width,O.height,!1),u.left=-2.7*O.width/O.height,u.right=2.7*O.width/O.height,u.updateProjectionMatrix(),Y=!0,ct()},dt=new ResizeObserver(it);dt.observe(t),it();function Ct(O){if(H=requestAnimationFrame(Ct),!V||document.hidden)return;let k=Math.min((O-z)/1e3||.016,.06);if(k<(l?1/24:1/60)*.85||(z=O,y=o()?C:Ne.damp(y,C,9,k),Math.abs(y-C)<1e-4&&(y=C),$(),!c))return;if(o()){if(g.group.visible=y<.5,x.visible=!1,i.style.opacity=y<.5?0:1,!Y)return;Y=!1,c.render(h,u);return}let Z=a(.12,.43,y),N=a(.53,.78,y),st=a(.83,.98,y);g.group.visible=y<.17,g.group.position.y=Math.sin(O*5e-4)*.025;let xt=1-a(.08,.17,y);g.group.traverse(Lt=>{Lt.isMesh&&(Lt.material.opacity=xt)}),x.visible=y>.17&&y<.985,v.opacity=a(.17,.23,y)*(1-st);let It=O*25e-5;if(x.visible)for(let Lt=0;Lt<p;Lt++){let q=S[Lt],rt=q.phase+It*q.speed,F=Math.cos(rt)*q.radius,Ft=q.height+Math.sin(rt*1.65+q.phase)*.32,At=Math.sin(rt)*.8;b.position.copy(q.start).lerp(A.set(F,Ft,At),Z).lerp(q.target,N);let Ot=Math.sin(O*.0017+q.phase)*.14*Z*(1-N);b.position.y+=Ot;let tt=Ne.lerp(.205,l?.1:.088,N);b.scale.setScalar(tt*(1-st*.25)),b.rotation.set(rt*(1-N),rt*.8*(1-N),rt*.6*(1-N)),b.updateMatrix(),x.setMatrixAt(Lt,b.matrix),w.set("#ed790e").lerp(q.color,a(.67,.86,y)),x.setColorAt(Lt,w)}x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),c.render(h,u),s.dataset.renderer=l?"canvas":"webgl"}H=requestAnimationFrame(Ct);let G=new IntersectionObserver(([O])=>{V=O.isIntersecting,s.dataset.portraitVisible=String(V)});G.observe(n),r.addEventListener("change",()=>{Y=!0}),addEventListener("pagehide",O=>{O.persisted||(cancelAnimationFrame(H),dt.disconnect(),G.disconnect(),g.dispose(),M.dispose(),v.dispose(),d?.dispose(),c?.dispose?.())}),ct(),$()}var Xd=s=>Math.max(0,Math.min(1,s)),Hi=(s,t,e)=>{let n=Xd((e-s)/(t-s));return n*n*(3-2*n)},$e=(s,t,e)=>s.map((n,i)=>n+(t[i]-n)*e),Vi=[[-2,.65,1.6],[2,.65,.35],[-.35,.65,-2.25]],iv=.43,sv=.61;function lh(s){let t=Xd(s),[e,n,i]=Vi,r=$e(e,n,.36),o=$e(n,i,.36),a=$e(i,e,.36),c,l=t<.35?0:t<.7?1:2;if(t<.2)c=$e(e,r,Hi(0,.2,t));else if(t<.3)c=[...r];else if(t<.4){let u=Hi(.3,.4,t);c=$e(r,n,u),c[1]+=Math.sin(u*Math.PI)*1.05}else if(t<.55)c=$e(n,o,Hi(.4,.55,t));else if(t<.65)c=[...o];else if(t<.75){let u=Hi(.65,.75,t);c=$e(o,i,u),c[1]+=Math.sin(u*Math.PI)*1.05}else c=$e(i,a,Hi(.75,.9,t));let h=$e([0,.3,0],c,.24+Hi(.12,.92,t)*.18);return{p:t,phase:l,actor:c,focus:h,blocked:t>=.2&&t<=.3||t>=.55&&t<=.65||t>=.9,yaw:-.45+t*1.3,zoom:1-Hi(.08,.95,t)*.24}}function qd({scene:s,software:t=!1,quality:e="high"}){let n=new Zt;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=[],a=it=>(i.add(it),it),c=it=>(r.add(it),it),l=a(new fe(1,1,1)),h=t||e==="low"?l:a(new We(1,1,1,2,.045)),u=c(new ye({color:"#272824",metalness:.36,roughness:.57})),d=c(new ye({color:"#111310",metalness:.25,roughness:.72})),f=c(new ye({color:"#e1d6c3",metalness:.26,roughness:.48})),g=c(new ye({color:"#635341",metalness:.6,roughness:.46})),_=c(new Ce({color:"#fa760d",toneMapped:!1})),m=c(new Ce({color:"#7d3e14",toneMapped:!1})),p=c(new Ce({color:"#e8ceb0",toneMapped:!1}));function M(it,dt,Ct=u,G=!1){let O=new Ht(G?h:l,Ct);return O.position.set(...it),O.scale.set(...dt),n.add(O),O}function v(it,dt,Ct,G){let O=new L(...it),k=new L(...dt),Z=k.clone().sub(O),N=M(O.clone().add(k).multiplyScalar(.5).toArray(),[Ct,Z.length(),Ct],G);return N.quaternion.setFromUnitVectors(new L(0,1,0),Z.normalize()),N}M([0,-.34,-.2],[6.8,.28,6.2],d,!0).renderOrder=-20,M([0,-.5,-.2],[7.05,.08,6.45],u).renderOrder=-21;let x=new xe(l,u,t||e==="low"?32:80),A=new le;n.add(x),x.renderOrder=-19;for(let it=0;it<x.count;it++){let dt=(it%10-4.5)*.64,Ct=(Math.floor(it/10)-3.5)*.7;A.position.set(dt,-.16,Ct),A.scale.set(.61,.025,.67),A.updateMatrix(),x.setMatrixAt(it,A.matrix)}let b=[];for(let it=0;it<3;it++){let[dt,,Ct]=Vi[it];M([dt,.04,Ct],[1.56,.34,1.5],u,!0),M([dt,.23,Ct],[1.38,.1,1.31],g),M([dt,.32,Ct],[1.26,.1,1.18],d,!0),M([dt,.39,Ct],[1.1,.045,.99],f,!0);for(let k=0;k<(t||e==="low"?3:6);k++)M([dt-.43+k*.17,.48,Ct-.38],[.055,.17,.16],u);M([dt,.5,Ct+.45],[.92,.035,.025],m);let G=M([dt,.505,Ct+.45],[.6,.04,.032],_);b.push(G);let O=[.9,1.35,1.08][it];M([dt+.48,.4+O/2,Ct-.38],[.28,O,.3],u,!0),M([dt+.48,.42+O,Ct-.38],[.24,.025,.24],f);for(let k=0;k<3;k++)M([dt+.48,.65+k*.21,Ct-.212],[.15,.025,.012],k===it?_:g)}let w=[],P=[];for(let it=0;it<3;it++){let dt=Vi[it],Ct=Vi[(it+1)%3],G=new L(...Ct).sub(new L(...dt)).normalize(),O=new L(-G.z,0,G.x);for(let[st,xt]of[[.12,iv],[sv,.88]]){for(let q of[-1,1]){let rt=new L(...$e(dt,Ct,st)).addScaledVector(O,q*.15),F=new L(...$e(dt,Ct,xt)).addScaledVector(O,q*.15);rt.y=F.y=.39,v(rt.toArray(),F.toArray(),.075,u),rt.y=F.y=.438,v(rt.toArray(),F.toArray(),.018,st===.12?_:m)}let It=$e(dt,Ct,st),Lt=$e(dt,Ct,xt);It[1]=Lt[1]=.35,v(It,Lt,.16,g)}for(let st of[.21,.78]){let xt=$e(dt,Ct,st);M([xt[0],.03,xt[2]],[.18,.6,.18],u)}let k=$e(dt,Ct,.48),Z=M([k[0],.79,k[2]],[.035,.68,.52],u,!0);Z.rotation.y=-Math.atan2(G.z,G.x),w.push(Z);let N=M([k[0]-.018,.81,k[2]],[.018,.49,.025],_);N.rotation.y=Z.rotation.y,P.push(N);for(let st=0;st<3;st++){let xt=$e(dt,Ct,.49+st*.035);M([xt[0],.2-st*.12,xt[2]],[.07,.07,.07],st===0?g:u)}}for(let[it,dt,Ct]of[[-2.9,-1.1,.8],[2.8,1.9,.65],[1.6,-2.9,.5]]){M([it,Ct/2-.14,dt],[.55,Ct,.7],u,!0);for(let G=0;G<3;G++)M([it-.16+G*.16,Ct-.12,dt+.355],[.045,.12,.014],f)}for(let it=0;it<4;it++)M([-2.6+it*.16,-.135,2.6],[.07,.02,.14],it===0?_:g);let S=t||e==="low"?12:24,y=new xe(l,_,S);if(y.frustumCulled=!1,n.add(y),!t){let it=document.createElement("canvas");it.width=it.height=64;let dt=it.getContext("2d"),Ct=dt.createRadialGradient(32,32,0,32,32,32);Ct.addColorStop(0,"rgba(255,110,15,.32)"),Ct.addColorStop(1,"rgba(255,110,15,0)"),dt.fillStyle=Ct,dt.fillRect(0,0,64,64);let G=new Le(it);o.push(G);let O=c(new Ce({map:G,transparent:!0,depthWrite:!1,toneMapped:!1})),k=a(new De(2.7,2.7));for(let Z of Vi){let N=new Ht(k,O);N.position.set(Z[0],-.115,Z[2]),N.rotation.x=-Math.PI/2,n.add(N)}}let C=document.querySelector(".cinematic-flow"),H=[...C?.querySelectorAll(".film-act")||[]],z=[...C?.querySelectorAll("[data-island]")||[]],V=-1,Y=-1,D=0,ot=new L;function $(it,dt,Ct){let G=lh(it);n.visible=!0;let O=S/3;for(let k=0;k<S;k++){let Z=Math.floor(k/O),N=Z===G.phase,st=((N?dt*12e-5:0)+k%O/O)%1*.38,xt=Vi[Z],It=Vi[(Z+1)%3],Lt=$e(xt,It,st),q=Hi(.3,.38,st),rt=.065*(N?1:.35)*(1-q*.85);A.position.set(Lt[0],.52,Lt[2]),A.rotation.set(0,dt*2e-4+k,0),A.scale.set(rt,.025,rt),A.updateMatrix(),y.setMatrixAt(k,A.matrix)}return y.instanceMatrix.needsUpdate=!0,w.forEach((k,Z)=>{k.position.y=.79+(Z===G.phase?Math.sin(dt*.0018)*.025:0)}),P.forEach((k,Z)=>{k.visible=Z===G.phase,k.scale.y=G.blocked?.44+Math.sin(dt*.004)*.06:.28}),b.forEach((k,Z)=>{k.scale.x=Z===G.phase?.6+Math.sin(dt*.002)*.09:.3}),C&&(C.dataset.rendered="true",C.dataset.cinemaPhase=String(G.phase),C.dataset.cinemaProgress=G.p.toFixed(3),C.dataset.cinemaBlocked=String(G.blocked),V!==G.phase&&(V=G.phase,H.forEach((k,Z)=>k.dataset.active=String(Z===G.phase))),(Y!==it||D!==Ct.aspect)&&(Ct.updateMatrixWorld(),Y=it,D=Ct.aspect,z.forEach((k,Z)=>{let N=Vi[Z];ot.set(N[0],1.95,N[2]).project(Ct),k.style.left=(ot.x*.5+.5)*100+"%",k.style.top=(-ot.y*.5+.5)*100+"%",k.style.opacity=ot.z<1&&Math.abs(ot.x)<.85?"1":"0"}))),G}function ct(){s.remove(n),i.forEach(it=>it.dispose()),r.forEach(it=>it.dispose()),o.forEach(it=>it.dispose())}return{group:n,update:$,dispose:ct}}var hh=(s,t=0,e=1)=>Math.max(t,Math.min(e,s)),Qn=(s,t,e)=>{let n=hh((e-s)/(t-s));return n*n*n*(n*(n*6-15)+10)};function Ra(s,t=4){let e=hh(Number.isFinite(s)?s:0),n=hh((e-.055)/.91,0,1)*t,i=Math.min(t-1,Math.floor(n)),r=n-i;return{p:e,time:n,index:i,local:r,dock:Qn(.19,.64,r),cameraDock:Qn(.19,.64,r)*(1-Qn(.87,1,r)),phase:r<.24?0:r<.7?1:2,entrance:Qn(0,.075,e),finish:Qn(.95,1,e),pulse:Math.sin(Math.PI*Qn(.48,.76,r))}}function Yd(s,t){let e=s-t,n=Math.max(0,-e),i=Qn(0,.19,e),r=Qn(.19,.64,e),o=n*1.75,a=[1.35*Math.cos(o)-1.5*Math.sin(o),3.1+Math.sin(n*1.2)*.65+n*.05,-1.25-n*.65],c=[-.1,3.12,1.35];return{t:e,dock:r,visible:e<.64,position:a.map((l,h)=>l+(c[h]-l)*i),scale:.79/(1+n*.12)+(1-.79/(1+n*.12))*i,yaw:(-.24-n*.08)*(1-i)+.09*i,roll:(.055+n*.025)*(1-i)}}function Zd({scene:s,software:t=!1,quality:e="medium"}){let n=new Zt;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=new Set,a=t||e==="low",c=document.querySelector("[data-notebook-stage]"),l=c.querySelector(".notebook-world"),h=[...c.querySelectorAll("[data-project-screen]")],u=ft=>(i.add(ft),ft),d=(ft,Et=!1)=>{let Bt=Et?new Ce(ft):new ye({roughness:.38,metalness:.65,...ft});return r.add(Bt),Bt},f=d({color:"#53534e",roughness:.32,metalness:.85}),g=d({color:"#a8a79e",roughness:.23,metalness:.88}),_=d({color:"#20221f",roughness:.5}),m=d({color:"#10120f",roughness:.7}),p=d({color:"#ed791d",roughness:.3,metalness:.56}),M=d({color:"#f18c36",toneMapped:!1},!0),v=u(a?new fe(1,1,1):new We(1,1,1,2,.035)),x=u(new fe(1,1,1)),A=u(new De(4.22,2.6375,a?8:12,a?5:8));function b(ft,Et,Bt,at,bt=n,U=!1){let Pt=new Ht(U?x:v,at);return Pt.scale.set(ft,Et,Bt),bt.add(Pt),Pt}function w(ft,Et,Bt){let at=new xe(v,Et,ft);return at.frustumCulled=!1,Bt.add(at),at}let P=new le;function S(ft,Et,Bt,at,bt,U,Pt,X){P.position.set(Bt,at,bt),P.rotation.set(0,0,0),P.scale.set(U,Pt,X),P.updateMatrix(),ft.setMatrixAt(Et,P.matrix)}let y=new Zt;n.add(y),b(4.88,.16,3.22,f,y).position.set(0,-.94,.72);let C=b(4.75,.045,3.08,g,y);C.position.set(0,-.847,.7),C.renderOrder=1;let H=b(4.65,.025,2.94,f,y);H.position.set(0,-.817,.7),H.renderOrder=2;let z=b(4.4,.018,1.49,m,y);z.position.set(0,-.796,.24),z.renderOrder=3;let V=w(65,_,y);V.renderOrder=4;for(let ft=0;ft<5;ft++)for(let Et=0;Et<13;Et++)S(V,ft*13+Et,-1.91+Et*.319,-.775,-.32+ft*.272,.278,.038,.222);let Y=b(1.7,.024,.18,_,y);Y.position.set(0,-.765,.98),Y.renderOrder=4;let D=b(1.64,.012,.83,g,y);D.position.set(0,-.789,1.67),D.renderOrder=3;let ot=b(1.59,.015,.78,f,y);ot.position.set(0,-.777,1.67),ot.renderOrder=4;let $=w(a?16:32,m,y);$.renderOrder=4;for(let ft=0;ft<$.count;ft++){let Et=ft<$.count/2?-1:1,Bt=ft%($.count/2);S($,ft,Et*2.3,-.78,-.35+Bt*(1.35/($.count/2)),.022,.008,.035)}for(let ft of[-1.58,1.58])b(.76,.18,.2,_,y).position.set(ft,-.78,-.78);for(let ft of[-2.446,2.446])for(let Et of[.05,.5])b(.008,.05,.23,m,y).position.set(ft,-.94,Et);b(.065,.026,.016,M,y).position.set(2.14,-.91,2.337),b(1.1,.018,.014,_,y).position.set(0,-.87,2.34);let ct=new Zt;ct.position.set(0,-.76,-.78),ct.rotation.x=-.105,y.add(ct);let it=b(4.88,3.05,.105,f,ct);it.position.y=1.51,it.renderOrder=5;let dt=b(4.74,2.92,.024,g,ct);dt.position.set(0,1.52,.065),dt.renderOrder=6;let Ct=b(4.68,2.86,.025,m,ct);Ct.position.set(0,1.52,.084),Ct.renderOrder=7;let G=d({color:"#171b16",toneMapped:!1},!0),O=document.createElement("canvas");O.width=768,O.height=480;let k=O.getContext("2d");k.fillStyle="#171b16",k.fillRect(0,0,768,480),k.fillStyle="#e6ded0",k.font="500 40px Arial",k.fillText("dev.abraao",66,209),k.fillStyle="#f58a2b",k.fillRect(68,244,48,2),k.font="10px Arial",k.fillText("O PROBLEMA ENCONTRA SEU CAMINHO.",68,282);let Z=new Le(O);Z.colorSpace=ge,o.add(Z),G.map=Z,G.color.set("#ffffff");let N=new Ht(A,G);N.position.set(0,1.53,.105),N.renderOrder=8,ct.add(N);let st=new le;st.position.copy(N.position),st.position.z-=.055,ct.add(st);let xt=b(.045,.023,.006,_,ct);xt.position.set(0,2.913,.103),xt.renderOrder=8;for(let ft=0;ft<9;ft++){let Et=b(.009,.025,.005,ft===8?p:g,ct);Et.position.set(-.09+ft*.021,.095,.104),Et.renderOrder=8}let It=d({color:"#e48639",transparent:!0,opacity:.08,toneMapped:!1},!0),Lt=b(4.35,.018,.016,It,ct);Lt.position.set(0,.175,.112),Lt.renderOrder=9;let q=document.createElement("canvas");q.width=q.height=64;let rt=q.getContext("2d"),F=rt.createRadialGradient(32,32,0,32,32,32);F.addColorStop(0,"#25221990"),F.addColorStop(1,"#25221900"),rt.fillStyle=F,rt.fillRect(0,0,64,64);let Ft=new Le(q);o.add(Ft);let At=new Ht(u(new De(6.4,4.5)),d({map:Ft,transparent:!0,depthWrite:!1},!0));At.rotation.x=-Math.PI/2,At.position.set(0,-1.125,.5),n.add(At),At.renderOrder=-7;let Ot=h.map((ft,Et)=>{let Bt=new Zt;n.add(Bt);let at=d({color:Et===0?"#d88034":"#a3a093",roughness:.32,metalness:.7}),bt=b(4.34,2.76,.065,at,Bt),U=b(4.27,2.69,.022,m,Bt);U.position.z=.039;let Pt=d({color:"#f4f0e8",toneMapped:!1},!0),X=new Ht(A,Pt);X.position.z=.055,Bt.add(X);let mt=b(.22,.06,.016,p,Bt);return mt.position.set(-1.9,1.405,.01),{board:Bt,frame:bt,inset:U,face:X,tab:mt,faceMat:Pt,border:at,texture:null,el:ft}}),tt=0;n.traverse(ft=>{ft.isMesh&&tt++}),c.dataset.notebookMeshes=String(tt);let Nt=new L,lt=new En,T=new En,E=new Pn,W=new L,Q=new L,Tt=new L,ht=-1,pt=!1,yt=!1,St=0;function Xt(ft,Et){let Bt=document.createElement("canvas");Bt.width=a?768:1024,Bt.height=Bt.width/1.6;let at=Bt.getContext("2d");if(Et!=="nexa")at.drawImage(ft,0,0,ft.width,Math.min(ft.height,ft.width/1.6),0,0,Bt.width,Bt.height);else{let Pt=function(X,mt){let[B,nt,Dt]=X,[Gt,R,K]=mt,Rt=B[0]*(nt[1]-Dt[1])+nt[0]*(Dt[1]-B[1])+Dt[0]*(B[1]-nt[1]),wt=J=>[(Gt[J]*(nt[1]-Dt[1])+R[J]*(Dt[1]-B[1])+K[J]*(B[1]-nt[1]))/Rt,(Gt[J]*(Dt[0]-nt[0])+R[J]*(B[0]-Dt[0])+K[J]*(nt[0]-B[0]))/Rt,(Gt[J]*(nt[0]*Dt[1]-Dt[0]*nt[1])+R[J]*(Dt[0]*B[1]-B[0]*Dt[1])+K[J]*(B[0]*nt[1]-nt[0]*B[1]))/Rt],zt=wt(0),Ut=wt(1);at.save(),at.beginPath(),at.moveTo(...Gt),at.lineTo(...R),at.lineTo(...K),at.closePath(),at.clip(),at.transform(zt[0],Ut[0],zt[1],Ut[1],zt[2],Ut[2]),at.drawImage(ft,0,0),at.restore()},U=[[188,38],[735,38],[749,375],[177,375]].map(([X,mt])=>[X/1100*ft.width,mt/434*ft.height]);Pt([U[0],U[1],U[2]],[[0,0],[Bt.width,0],[Bt.width,Bt.height]]),Pt([U[0],U[2],U[3]],[[0,0],[Bt.width,Bt.height],[0,Bt.height]])}let bt=new Le(Bt);return bt.colorSpace=ge,bt.anisotropy=a?1:4,o.add(bt),bt}function ut(){yt||pt||(yt=!0,Ot.forEach(ft=>{let Et=new Image;Et.decoding="async",Et.onload=()=>{pt||(ft.texture=Xt(Et,ft.el.dataset.projectKind),ft.faceMat.map=ft.texture,ft.faceMat.needsUpdate=!0,c.dataset.screensReady=String(++St))},Et.onerror=()=>{c.dataset.screenError="true"},Et.src=ft.el.dataset.projectScreen}))}let Mt=new IntersectionObserver(ft=>{ft.some(Et=>Et.isIntersecting)&&(ut(),Mt.disconnect())},{rootMargin:"1200px"});Mt.observe(l);function Vt(ft,Et,Bt){ut();let at=Ra(ft,Ot.length),bt=innerWidth<=700;n.rotation.y=.07-Math.sin(at.p*Math.PI)*.07,n.position.y=-.12+at.entrance*.12,y.rotation.y=Math.sin(at.local*Math.PI)*.025,ct.rotation.x=-.105-Math.sin(at.local*Math.PI)*.025,s.updateMatrixWorld(!0),st.getWorldPosition(W),st.getWorldQuaternion(lt);let U=.012*Math.sin(Et*75e-5);Ot.forEach((X,mt)=>{let B=Yd(at.time,mt);if(X.board.visible=B.visible,!B.visible)return;let nt=30-(mt-at.index)*4;X.frame.renderOrder=nt,X.inset.renderOrder=nt+1,X.face.renderOrder=nt+2,X.tab.renderOrder=nt+2,Nt.set(...B.position),Nt.y+=U*(1-B.dock),bt&&(Nt.x*=.72);let Dt=n.worldToLocal(W.clone());Q.copy(Nt).add(new L(-.4,.2,0)),Tt.copy(Dt).add(new L(.25,.72,1.1));let Gt=B.dock,R=1-Gt;X.board.position.copy(Nt).multiplyScalar(R**3).addScaledVector(Q,3*R*R*Gt).addScaledVector(Tt,3*R*Gt*Gt).addScaledVector(Dt,Gt**3),E.set(.035,B.yaw,B.roll),T.setFromEuler(E);let K=n.quaternion.clone().invert().multiply(lt);X.board.quaternion.copy(T).slerp(K,Gt),X.board.scale.setScalar(B.scale+(1-B.scale)*Gt);let Rt=1-Qn(.76,1,Gt);X.frame.material.transparent=!0,X.frame.material.opacity=Rt,X.inset.visible=Rt>.01,X.tab.visible=Rt>.2});let Pt=at.dock>.998?at.index:Math.max(0,at.index-1);return Ot[Pt].texture&&(ht!==Pt||N.material.map!==Ot[Pt].texture)&&(N.material=Ot[Pt].faceMat,ht=Pt),at.index===0&&at.dock<=.998&&(N.material=G,ht=-1),N.visible=!0,It.opacity=.12+at.pulse*.7,l.dataset.rendered="true",c.dataset.docking=at.dock.toFixed(3),at}return{group:n,update:Vt,dispose(){pt=!0,Mt.disconnect(),s.remove(n),n.traverse(ft=>{ft.isInstancedMesh&&ft.dispose()}),i.forEach(ft=>ft.dispose()),r.forEach(ft=>ft.dispose()),o.forEach(ft=>ft.dispose())}}}var uh=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0));function rv(s,t=6){let e=uh(s),n=Math.max(1,Math.floor(t)||1),i=Math.min(n-1,Math.floor(e*n)),r=e===1?1:e*n-i;return{index:i,local:r,beat:r<.26?0:r<.53?1:2,builds:[-.1,.26,.53].map(o=>{let a=uh((r-o)/.18);return a*a*(3-2*a)})}}var Un=(s,t,e)=>{let n=uh((e-s)/(t-s));return n*n*n*(n*(n*6-15)+10)};function $d(s){let t=rv(s),e=t.local,n=t.index<5?Un(.84,1,e):0,i=t.index+n,r=Un(.04,.76,e);return{...t,travel:n,focus:i,x:i*14,yaw:(.44-r*.68)*(1-n)+.44*n,zoom:(1-Un(.1,.51,e)*.17)*(1-n)+n,assemble:Un(.025,.43,e),connect:Un(.25,.69,e),resolve:Un(.52,.78,e),copyOpacity:Un(0,.07,e)*(1-Un(.84,.98,e))}}function Jd({scene:s,software:t=!1,quality:e="medium"}){let n=new Zt;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=new Set,a=[],c=t||e==="low",l=document.querySelector(".solutions-world"),h=G=>(i.add(G),G),u=(G,O=!1)=>{let k=O?new Ce(G):new ye({roughness:.37,metalness:.68,...G});return r.add(k),k},d=u({color:"#454b40"}),f=u({color:"#b6a382",roughness:.28,metalness:.8}),g=u({color:"#171e18",roughness:.6}),_=u({color:"#d1742b",roughness:.3,metalness:.75}),m=u({color:"#ffa04a",toneMapped:!1},!0),p=u({color:"#b98245",toneMapped:!1,transparent:!0,opacity:.25},!0),M=h(c?new fe(1,1,1):new We(1,1,1,2,.045)),v=h(new De(1,1,c?2:8,c?2:5)),x=h(new Kn(1,c?10:18,c?7:12)),A=h(new Dn(1,.012,c?3:5,c?32:64)),b=new le;function w(G,O,k,Z,N){let st=new Ht(M,Z);return st.scale.set(G,O,k),N.add(st),st}function P(G,O,k=p){let Z=new Ht(A,k);return Z.scale.setScalar(G),O.add(Z),Z}function S(G,O,k,Z,N,st,xt,It){b.position.set(k,Z,N),b.scale.set(st,xt,It),b.rotation.set(0,0,0),b.updateMatrix(),G.setMatrixAt(O,b.matrix)}function y(G,O,k,Z,N,st,xt){G.fillStyle=xt,G.beginPath(),G.roundRect(O,k,Z,N,st),G.fill()}function C(G,O,k,Z,N=18,st="#e6e0d0",xt=!1){G.fillStyle=st,G.font=`${xt?700:400} ${N}px Arial`,G.fillText(O,k,Z)}function H(G,O,k,Z,N="#464b3f"){G.fillStyle=N,G.fillRect(O,k,Z,1)}function z(G,O,k=""){let Z=document.createElement("canvas");Z.width=G==="main"?1024:640,Z.height=G==="main"?640:380;let N=Z.getContext("2d"),st=Z.width,xt=Z.height;if(y(N,0,0,st,xt,16,"#162019"),N.strokeStyle="#77674c",N.lineWidth=2,N.strokeRect(1,1,st-2,xt-2),G==="main"){y(N,0,0,st,53,12,"#293025"),[0,1,2].forEach(q=>{N.fillStyle=q?"#766b56":"#ef984b",N.beginPath(),N.arc(29+q*19,27,4,0,7),N.fill()}),y(N,350,17,320,22,5,"#151e17"),C(N,"seunegocio.com.br",440,33,12,"#aea891"),C(N,"seu.neg\xF3cio",55,108,28,"#f1ebdc",!0),C(N,"UM PR\xD3XIMO PASSO.",56,163,12,"#e79b58"),C(N,"Uma boa ideia",55,231,48,"#f3eddf",!0),C(N,"ganha presen\xE7a.",55,287,48,"#ed9b52",!0),C(N,"Clareza para entender. Um caminho para agir.",57,335,18,"#a9b19f"),y(N,55,370,235,48,7,"#de883d"),C(N,"Vamos conversar  \u2197",81,401,18,"#152018",!0);let Lt=N.createLinearGradient(660,150,850,440);Lt.addColorStop(0,"#d4914b"),Lt.addColorStop(1,"#694324"),N.fillStyle=Lt,N.beginPath(),N.arc(789,282,125,0,7),N.fill(),N.strokeStyle="#f2c99b",N.lineWidth=2,N.beginPath(),N.ellipse(789,282,145,39,-.45,0,7),N.stroke();for(let q=0;q<3;q++)y(N,55+q*310,481,285,110,8,"#263027"),C(N,["Seu neg\xF3cio","Sua hist\xF3ria","Seu pr\xF3ximo passo"][q],75+q*310,520,18,"#e5deca",!0),H(N,75+q*310,545,185,"#7c785e"),H(N,75+q*310,561,140,"#535d4b")}else if(G==="dashboard"){y(N,0,0,st,xt,12,"#e8e2d4"),y(N,0,0,125,xt,12,"#1d291f"),C(N,"opera\xE7\xE3o",18,40,21,"#f0e8d5",!0),["Vis\xE3o geral","Clientes","Pedidos","Relat\xF3rios"].forEach((Lt,q)=>{q||y(N,11,72,103,30,4,"#d58a43"),C(N,Lt,23,93+q*53,13,q?"#aab29d":"#122015",!q)}),C(N,"A rotina, conectada.",151,44,25,"#202b20",!0),["CLIENTES","PEDIDOS","EQUIPE"].forEach((Lt,q)=>{y(N,150+q*158,68,145,68,6,"#d6d4c3"),C(N,Lt,164+q*158,91,10,"#75745e"),C(N,["Organizados","Em dia","No mesmo fluxo"][q],164+q*158,117,14,"#293226",!0)}),C(N,"PEDIDOS EM ANDAMENTO",153,170,11,"#686b55");for(let Lt=0;Lt<4;Lt++){let q=204+Lt*43;C(N,["Pedido recebido","Dados conferidos","Em prepara\xE7\xE3o","Pronto para seguir"][Lt],153,q,15,"#343c2e"),y(N,486,q-17,121,24,4,Lt===3?"#c99155":"#d8d5c6"),C(N,["Recebido","Conferido","Em andamento","Conclu\xEDdo"][Lt],498,q,10,"#5c492f"),H(N,153,q+14,454,"#c8c6b5")}}else C(N,"dev.abraao / SOLU\xC7\xD5ES",34,42,11,"#b6a480"),H(N,34,63,st-68,"#605c46"),C(N,O,34,128,G==="module"?O.length>18?35:52:O.length>24?24:30,"#f1e7d2",!0),C(N,k,34,169,16,"#a8b19c"),G==="code"?["quando uma mensagem chegar","  \u2192 conferir os dados","  \u2192 registrar o pedido","  \u2192 enviar a confirma\xE7\xE3o"].forEach((Lt,q)=>C(N,Lt,35,218+q*30,16,q===3?"#f0a05a":"#a7b99d")):G==="answer"?(y(N,32,200,st-64,128,7,"#29392a"),C(N,"PR\xD3XIMO PASSO",49,229,11,"#e5a15e"),C(N,"Organizar a informa\xE7\xE3o.",49,267,23,"#f0e6ce",!0),C(N,"A decis\xE3o continua com voc\xEA.",49,300,15,"#acb89b")):G==="module"?[0,1,2].forEach(Lt=>{y(N,33,204+Lt*43,st-66,31,5,Lt===2?"#b97936":"#304330"),C(N,["CONTEXTO","FLUXO","PRONTO PARA SEGUIR"][Lt],49,225+Lt*43,12,Lt===2?"#fff1d3":"#bfc6ae")}):(y(N,33,207,st-66,89,7,"#283a2b"),C(N,"Informa\xE7\xE3o conectada",50,243,20,"#dcdcc4",!0),C(N,"Tudo segue no mesmo caminho.",50,274,15,"#a6b79b"),N.fillStyle="#e99546",N.fillRect(34,xt-29,st-68,3));let It=new Le(Z);return It.colorSpace=ge,It.anisotropy=c?1:4,o.add(It),It}function V(G,O,k,Z,N,st){let xt=new Zt;st.add(xt);let It=w(G+.1,O+.1,.1,f,xt);It.renderOrder=5;let Lt=w(G+.045,O+.045,.04,g,xt);Lt.position.z=.065,Lt.renderOrder=6;let q=u({color:"#ffffff",map:z(k,Z,N),toneMapped:!1},!0),rt=new Ht(v,q);rt.scale.set(G,O,1),rt.position.z=.092,rt.renderOrder=8,xt.add(rt);let F=w(.45,.025,.035,m,xt);return F.position.set(-G/2+.36,O/2+.07,.03),F.renderOrder=9,xt}function Y(G,O,k,Z=2.12){return V(Z,Z*.59375,"module",G,O,k)}function D(G,O,k,Z=.6){let N=new L(...G),st=new L(...O),xt=N.clone().lerp(st,.5);xt.z+=Z,xt.y+=.24;let It=new dr(N,xt,st),Lt=new Ht(h(new gi(It,c?12:24,.018,c?3:5,!1)),_);Lt.renderOrder=2,k.add(Lt);let q=new Ht(x,m);return q.scale.setScalar(.065),k.add(q),{mesh:Lt,path:It,packet:q}}function ot(G){let O=new Zt;O.position.x=G*14,n.add(O);let k=w(9,.07,5,g,O);k.position.set(0,-1.75,-.1),k.renderOrder=-10,w(8.3,.012,.035,p,O).position.set(0,-1.7,2.2);let N=P(2.9,O,p);N.rotation.x=-Math.PI/2,N.position.y=-1.69,N.renderOrder=-5;let st=new xe(M,f,c?12:24);O.add(st);for(let It=0;It<st.count;It++){let Lt=It/st.count*Math.PI*2;S(st,It,Math.cos(Lt)*3.02,-1.69,Math.sin(Lt)*2.1,.035,.018,.1)}let xt={g:O,items:[],wires:[],rings:[N]};return a.push(xt),xt}function $(G,O,k,Z,N,st=0,xt=0,It=0){return O.userData.pose={x:k,y:Z,z:N,order:st,rx:xt,ry:It},G.items.push(O),O}{let G=ot(0),O=V(5.55,3.47,"main","","",G.g);$(G,O,-.35,.15,-.35,0,0,.08);let k=V(1.05,2.1,"module","Seu neg\xF3cio","Feito para conectar.",G.g);$(G,k,2.35,-.56,1.1,2,-.03,-.18);let Z=Y("PRESEN\xC7A","Um caminho claro para o cliente.",G.g,2.25);$(G,Z,-2.2,1.58,.95,1,.02,.13);let N=D([1.5,-1.5,.1],[2.35,-.7,1],G.g,.2);G.wires.push(N)}{let G=ot(1),O=V(5.65,3.36,"dashboard","","",G.g);$(G,O,0,.2,-.2,0,0,-.08);let k=Y("PEDIDO ORGANIZADO","Do atendimento \xE0 opera\xE7\xE3o.",G.g,2.5);$(G,k,-1.95,-.63,1.25,1,.05,.15);let Z=Y("EQUIPE CONECTADA","A mesma informa\xE7\xE3o para todos.",G.g,2.35);$(G,Z,2.2,1.28,.65,2,-.02,-.15),G.wires.push(D([-2,-.9,1.1],[1.3,-1.1,.15],G.g,.35))}{let G=ot(2),O=[[-2.35,.85,-.35],[-.6,1.15,-.85],[1.6,.55,-.25],[2.15,-1,1.15]];["MENSAGEM","CONFERIR","REGISTRAR","CONFIRMAR"].forEach((Z,N)=>{let st=Y(Z,["O cliente inicia.","O contexto \xE9 verificado.","O pedido encontra seu lugar.","A resposta chega ao cliente."][N],G.g,1.85);$(G,st,...O[N],N,.02,(N-1.5)*-.09),N&&G.wires.push(D(O[N-1],O[N],G.g,.7))});let k=V(2.75,1.64,"code","UMA REGRA. UM CAMINHO.","O trabalho segue entre as etapas.",G.g);$(G,k,-1.5,-.95,1.3,2,.03,.18)}{let G=ot(3),O=new Ht(h(new zi(.68,c?0:1)),_);G.g.add(O),$(G,O,0,.15,.1,0);for(let N=0;N<3;N++){let st=P(1.05+N*.22,G.g,N===1?m:p);st.rotation.set(.4+N*.8,.5+N*.6,.1),G.rings.push(st)}let k=[[-2.1,.9,-.15],[1.8,1.22,-.65],[-2.05,-.95,.85]];["DOCUMENTOS","HIST\xD3RICO","SEU PROCESSO"].forEach((N,st)=>{let xt=Y(N,"Informa\xE7\xE3o com o contexto certo.",G.g,1.75);$(G,xt,...k[st],st,.02,st===1?-.15:.16),G.wires.push(D(k[st],[0,.15,.1],G.g,.5))});let Z=V(2.85,1.69,"answer","INFORMA\xC7\xC3O QUE AJUDA A AGIR","Uma resposta nasce do contexto.",G.g);$(G,Z,1.65,-.85,1.1,3,0,-.14)}{let G=ot(4),O=new Zt;G.g.add(O),$(G,O,0,0,.1,0),w(1.2,1.75,.65,d,O),w(1.29,1.84,.12,f,O).position.z=-.27,Y("CONECTAR","A informa\xE7\xE3o continua.",O,1.6).position.set(0,0,.43);for(let st=0;st<5;st++)w(.045,.13,.03,m,O).position.set(-.43+st*.215,-1.02,.36);let Z=[[-2.5,1,-.65],[.15,1.8,-.85],[2.6,.95,-.45],[-2.5,-.9,.9],[.15,-1.45,1.2],[2.55,-.85,1]];["ATENDIMENTO","CLIENTES","VENDAS","FINANCEIRO","PEDIDOS","ESTOQUE"].forEach((st,xt)=>{let It=Y(st,"Dados no mesmo fluxo.",G.g,1.62);$(G,It,...Z[xt],1+xt*.2,0,(xt%3-1)*-.16),G.wires.push(D([0,.05,.28],Z[xt],G.g,.7))});let N=P(2.25,G.g,p);N.rotation.x=1.1,N.position.set(0,-.1,0),G.rings.push(N)}{let G=ot(5);w(5.6,3.5,.1,d,G.g).position.set(0,.15,-.55);let k=[[-1.73,.64,0],[.2,.64,.1],[2.02,.64,.05],[-1.35,-.83,.55],[1.25,-.83,.65]];["ATENDIMENTO","OPERA\xC7\xC3O","AUTOMA\xC7\xC3O","INFORMA\xC7\xC3O","EVOLU\xC7\xC3O"].forEach((N,st)=>{let xt=st<3?1.65:2.35,It=Y(N,"Constru\xEDdo para o seu cen\xE1rio.",G.g,xt);$(G,It,...k[st],st*.6,0,(st-2)*.025)});let Z=Y("SEU NEG\xD3CIO","Cada parte tem um motivo.",G.g,2.3);$(G,Z,.75,1.7,1.05,3,-.04,-.13);for(let N=0;N<4;N++)G.wires.push(D(k[N],k[N+1],G.g,.15))}let ct=new xe(x,p,c?18:40);n.add(ct);let it=new L,dt=0;n.traverse(G=>{G.isMesh&&dt++}),l.dataset.cinemaMeshes=dt,a.forEach(G=>G.rings.forEach(O=>O.userData.rest=O.rotation.toArray().slice(0,3)));function Ct(G,O,k){let Z=$d(G),N=innerWidth<=700,st=k.aspect,xt=new L(Z.x,.1,.05),Lt=Math.max(6.25,(N?8.5:8.1)/st)*(1-(1-Z.zoom)*.7)/(2*Math.tan(Ne.degToRad(k.fov/2))),q=Z.yaw*(N?.7:1);k.position.set(Math.sin(q)*Lt,1.25+Lt*.12,Math.cos(q)*Lt).add(xt),k.lookAt(xt),k.updateProjectionMatrix(),a.forEach((rt,F)=>{if(rt.g.visible=Math.abs(F-Z.focus)<1.06,!rt.g.visible)return;let Ft=F===Z.index?Z.local:F>Z.index?0:1,At=Un(.025,.43,Ft),Ot=Un(.25,.69,Ft);rt.items.forEach((tt,Nt)=>{let lt=tt.userData.pose,T=Un(.02+lt.order*.045,.43+lt.order*.045,Ft),E=1-T;tt.position.set(lt.x+E*(Nt%2?2.3:-2.3),lt.y+E*(1.45+lt.order*.2),lt.z-E*(2.6+lt.order*.3)),tt.rotation.set(lt.rx+E*.18,lt.ry+E*(Nt%2?.5:-.5),E*(Nt%2?.09:-.09)),tt.scale.setScalar(.76+T*.24),F===3&&Nt===0&&(tt.rotation.y=O*12e-5,tt.rotation.z=O*8e-5)}),rt.wires.forEach((tt,Nt)=>{tt.mesh.scale.setScalar(Math.max(.001,Ot)),tt.mesh.visible=Ot>.02,tt.packet.visible=Ot>.7,tt.path.getPoint((O*18e-5+Nt*.17)%1,it),tt.packet.position.copy(it),tt.packet.scale.setScalar(.045+Z.resolve*.025)}),rt.rings.forEach((tt,Nt)=>{if(Nt){let lt=tt.userData.rest;tt.rotation.set(lt[0],lt[1]+O*4e-5,lt[2]+O*6e-5)}})});for(let rt=0;rt<ct.count;rt++){let F=Z.x+Math.sin(rt*23.4)*5.5,Ft=Math.sin(rt*5.1+O*1e-4)*2.4,At=Math.cos(rt*6.8)*3.8-1;S(ct,rt,F,Ft,At,.012,.012,.012)}return ct.instanceMatrix.needsUpdate=!0,l.dataset.rendered="true",l.dataset.cameraShot=Z.index,l.dataset.cameraTravel=Z.travel.toFixed(3),Z}return{group:n,update:Ct,dispose(){s.remove(n),n.traverse(G=>{G.isInstancedMesh&&G.dispose()}),i.forEach(G=>G.dispose()),r.forEach(G=>G.dispose()),o.forEach(G=>G.dispose())}}}var dh=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0)),vs=s=>{let t=dh(s);return t*t*(3-2*t)};function _i(s,t=0){let e=dh(s),n=Math.max(0,Math.min(6,t));return vs((e-.035-n*.018)/.24)*(1-vs((e-.64+n*.008)/.18))}function Kd(s,t=0){let e=dh(s),n=Math.max(0,Number.isFinite(t)?t:0)*.001;return{p:e,t:n,open:_i(e),plan:vs((e-.035)/.35),finish:vs((e-.62)/.2),tilt:vs(e/.22)*(1-vs((e-.76)/.1)),reveal:vs((e-.87)/.095),yaw:-.17-.16*Math.sin(e*Math.PI),lift:Math.sin(n*.65)*.025,flow:n*.16%1,phase:e<.34?0:e<.62?1:e<.87?2:3}}var ov=s=>Math.max(0,Math.min(1,s)),Qd=s=>{let t=ov(s);return t*t*(3-2*t)},av=(s,t,e)=>Qd((s-t)/.035)*(1-Qd((s-e+.035)/.035));function jd({parent:s,low:t,geo:e,mat:n,textures:i,boxGeo:r,planeGeo:o,palette:a}){let{graphite:c,black:l,copper:h,silver:u,ceramic:d,light:f,pale:g,violet:_}=a,m=n({color:"#163b30",roughness:.65,metalness:.23}),p=n({color:"#ce8b46",roughness:.63,metalness:.35}),M=n({color:"#83728d",roughness:.15,metalness:.75}),v=n({color:"#202823",roughness:.14,metalness:.7}),x=e(new Dn(1,.075,t?3:6,t?20:48)),A=e(new Bi(1,1,1,t?12:32)),b=e(new zi(1,t?0:1)),w=[],P=[],S=[],y=new le,C=new L,H=new L,z=new L,V=(R=0,K=0,Rt=0)=>new L(R,K,Rt),Y=(R,K,Rt,wt,zt,Ut,J=0)=>({x:R,y:K,z:Rt,w:wt,h:zt,d:Ut,rz:J});function D(R,K,Rt,wt,zt,Ut=0,J=0,vt=0){let $t=new Ht(r,wt);return $t.scale.set(R,K,Rt),$t.position.set(Ut,J,vt),$t.renderOrder=5,zt.add($t),$t}function ot(R,K,Rt,wt,zt=0,Ut=0,J=0){let vt=new Ht(A,Rt);return vt.rotation.x=Math.PI/2,vt.scale.set(R,K,R),vt.position.set(zt,Ut,J),vt.renderOrder=5,wt.add(vt),vt}function $(R,K,Rt,wt=0,zt=0,Ut=0){let J=new Ht(x,K);return J.scale.setScalar(R),J.position.set(wt,zt,Ut),J.renderOrder=5,Rt.add(J),J}function ct(R,K,Rt,wt=r){let zt=new xe(wt,K,R.length);return zt.renderOrder=7,Rt.add(zt),R.forEach((Ut,J)=>{y.position.set(Ut.x,Ut.y,Ut.z),y.rotation.set(0,0,Ut.rz||0),y.scale.set(Ut.w,Ut.h,Ut.d),y.updateMatrix(),zt.setMatrixAt(J,y.matrix)}),zt}function it(R,K,Rt,wt,zt=[0,0,0],Ut=s){let J=new Zt;J.name=`contact-${R}`,J.position.copy(K),Ut.add(J);let vt={g:J,home:K,destination:Rt,start:wt,rotation:zt};return w.push(vt),J}function dt(R,K,Rt){let wt=document.createElement("canvas");wt.width=R,wt.height=K;let zt=wt.getContext("2d");Rt(zt,R,K);let Ut=new Le(wt);return Ut.colorSpace=ge,Ut.anisotropy=t?1:4,i.add(Ut),Ut}function Ct(R,K,Rt,wt,zt,Ut,J){let vt=new Ht(o,n({map:Rt,color:"#ffffff",toneMapped:!1},!0));return vt.scale.set(R,K,1),vt.position.set(zt,Ut,J),vt.renderOrder=6,wt.add(vt),vt}let G=dt(512,512,(R,K,Rt)=>{R.fillStyle="#14372c",R.fillRect(0,0,K,Rt),R.strokeStyle="#719275",R.lineWidth=2;for(let wt=0;wt<52;wt++){let zt=wt%4,Ut=Math.floor(wt/4),J=28+Ut*35,vt=25+Ut*35;R.beginPath(),zt<2?(R.moveTo(J,zt?0:Rt),R.lineTo(J,zt?60:430),R.lineTo(J+18,zt?78:412),R.lineTo(J+18,256+Ut%3*25)):(R.moveTo(zt===2?0:K,vt),R.lineTo(zt===2?65:440,vt),R.lineTo(zt===2?85:420,vt+20),R.lineTo(256+Ut%3*18,vt+20)),R.stroke()}R.fillStyle="#d8b77c";for(let wt=0;wt<90;wt++)R.beginPath(),R.arc(18+wt*67%475,17+wt*101%475,2.3,0,Math.PI*2),R.fill();R.fillStyle="#b9c4a7",R.font="13px Manrope, Arial",R.fillText("AB / LOGIC ASSEMBLY",22,487)}),O=dt(384,512,(R,K,Rt)=>{R.fillStyle="#ce8b46",R.fillRect(0,0,K,Rt),R.fillStyle="#302719",R.font="600 30px Manrope, Arial",R.fillText("Li-ion",31,71),R.font="15px Manrope, Arial",["RECHARGEABLE CELL","POWER / 01","NOMINAL 3.85 V","ILLUSTRATIVE ASSEMBLY"].forEach((wt,zt)=>R.fillText(wt,32,111+zt*28)),R.strokeStyle="#9da28f",R.lineWidth=2,R.strokeRect(33,277,98,49),R.fillStyle="#9da28f",R.fillRect(131,290,8,21),R.fillRect(42,286,78,31),R.font="34px Manrope, Arial",R.fillText("+",294,72),R.fillText("\u2212",294,119),R.fillStyle="#53452e";for(let wt=0;wt<49;wt++)R.fillRect(32+wt*6.4,374,1+wt%3,47+wt%4*3);R.font="12px Manrope, Arial",R.fillText("ENERGY MODULE  /  AB-01",32,465)}),k=dt(256,256,(R,K,Rt)=>{R.fillStyle="#323a38",R.fillRect(0,0,K,Rt),R.strokeStyle="#a0a69c",R.lineWidth=3,R.strokeRect(10,10,K-20,Rt-20),R.fillStyle="#e7dfcb",R.font="600 47px Manrope, Arial",R.fillText("AB",28,93),R.font="17px Manrope, Arial",R.fillText("PROCESSOR",29,135),R.font="12px Manrope, Arial",R.fillText("SYSTEM / CORE",29,166),R.fillText("MEMORY STACK",29,187),R.beginPath(),R.arc(222,226,4,0,7),R.fill()}),Z=it("chassis",V(0,0,-.12),V(.2,.02,-.88),.14,[.05,-.16,0]);D(1.54,3.22,.035,c,Z);let N=[];for(let R of[-1,1]){N.push(Y(R*.77,0,.03,.035,3.2,.09));for(let K=0;K<5;K++)N.push(Y(R*.74,-1.43+K*.7,.058,.08,.12,.08))}ct(N,u,Z);let st=it("thermal",V(0,-.09,-.055),V(-.47,-.04,-.44),.2,[0,-.22,-.04]);D(1.36,2.83,.025,d,st),D(1.23,2.68,.012,c,st,0,0,.023);for(let R=0;R<(t?10:15);R++)$(.27+R*.015,h,st,0,-.23,.047+R*.001);let xt=[];for(let R=0;R<8;R++)xt.push(Y(-.54+R*.022,.69,.055,.01,1.04,.009));ct(xt,h,st),D(.33,.29,.015,u,st,-.34,1.07,.05);for(let R of[-1,1]){D(.055,2.63,.055,u,st,R*.64,0,.02);for(let K of[-1.24,1.24])$(.035,l,st,R*.54,K,.05)}let It=it("battery",V(0,-.47,.06),V(.72,-.62,.84),.18,[.03,-.32,-.08]);D(1.17,1.54,.17,d,It),D(1.11,1.46,.025,p,It,0,0,.095),Ct(1.04,1.37,O,It,0,0,.112);let Lt=[];for(let R of[-1,1])Lt.push(Y(R*.576,0,.09,.022,1.49,.026)),Lt.push(Y(0,R*.748,.09,1.14,.025,.027));ct(Lt,u,It);for(let R of[-1,1])D(.18,.24,.02,g,It,R*.33,-.84,.02),D(.13,.034,.025,h,It,R*.33,-.87,.036);let q=[];for(let R=0;R<6;R++)q.push(Y(-.13+R*.051,.84,.07,.028,.1,.018));ct(q,h,It),D(.38,.11,.075,l,It,0,.78,.015);let rt=it("logic-board",V(.03,.94,.06),V(.45,1,.52),.29,[-.11,.2,.03]);D(1.43,.96,.07,m,rt),Ct(1.4,.93,G,rt,0,0,.041),D(.46,1.9,.07,m,rt,-.48,-1.34,0),Ct(.43,1.86,G,rt,-.48,-1.34,.041),D(.82,.5,.07,m,rt,.12,-2.03,0),Ct(.79,.47,G,rt,.12,-2.03,.041);let F=[],Ft=[];for(let R=0;R<(t?14:26);R++){let K=R%2?-.49:.1,Rt=R%2?-.73-Math.floor(R/2)*.205:-1.92+R%3*.15;F.push(Y(K,Rt,.1,R%2?.25:.28,R%2?.13:.12,.075));for(let wt=0;wt<4;wt++)Ft.push(Y(K-.12+wt*.08,Rt-.08,.08,.021,.035,.025))}ct(F,c,rt),ct(Ft,u,rt),D(.45,.36,.023,h,rt,-.46,-1.08,.151),D(.3,.28,.025,h,rt,.45,.08,.16);let At=[],Ot=[],tt=[],Nt=[];for(let R=0;R<(t?44:88);R++){let K=R%4,Rt=Math.floor(R/4),wt=t?11:22,zt=Rt/(wt-1),Ut=K<2?-.62+zt*1.24:K===2?-.61:.61,J=K<2?K===0?-.37:.37:-.3+zt*.6;At.push(Y(Ut,J,.071,.04+R%3*.007,.027,.037,R%2*Math.PI/2)),Ot.push(Y(Ut-.014,J,.075,.009,.032,.045)),Ot.push(Y(Ut+.014,J,.075,.009,.032,.045))}for(let R=0;R<(t?24:48);R++)tt.push(Y(-.65+R%12*.118,-.43+Math.floor(R/12)*.275,.053,.017,.017,.015));ct(At,c,rt),ct(Ot,u,rt),ct(tt,h,rt,b),D(.23,.27,.065,u,rt,-.48,.06,.078),D(.21,.25,.018,c,rt,-.48,.06,.12),D(.24,.31,.07,u,rt,.48,.06,.078),D(.18,.24,.015,d,rt,.48,.06,.12);for(let R=0;R<8;R++)D(.015,.019,.011,l,rt,-.55+R%4*.045,.005+Math.floor(R/4)*.1,.134);let lt=D(.74,.65,.035,l,rt,0,.015,.064);lt.name="contact-cpu-socket";for(let R=0;R<(t?48:80);R++){let K=R%(t?12:20),Rt=t?12:20,wt=Math.floor(R/Rt),zt=K/(Rt-1);Nt.push(Y(wt<2?-.35+zt*.7:wt===2?-.37:.37,wt<2?wt===0?-.322:.352:-.29+zt*.61,.095,wt<2?.018:.055,wt<2?.055:.018,.019))}ct(Nt,h,rt);let T=it("processor",V(0,.015,.12),V(.07,.04,.73),.4,[-.22,.28,-.08],rt);D(.59,.55,.033,h,T),D(.55,.51,.055,c,T,0,0,.04),Ct(.52,.48,k,T,0,0,.071),T.children.forEach(R=>{R.renderOrder=R.material?.map?8:7});let E=[],W=t?7:12;for(let R=0;R<W;R++)for(let K=0;K<W;K++)E.push(Y((K/(W-1)-.5)*.48,(R/(W-1)-.5)*.44,-.037,.013,.013,.013));ct(E,u,T,b);let Q=it("memory",V(0,0,-.017),V(-.4,-.2,-.23),.41,[.06,-.11,.05],T);D(.51,.47,.04,m,Q),D(.44,.39,.025,l,Q,0,0,.03);let Tt=[];for(let R=0;R<20;R++)Tt.push(Y(-.22+R%10*.049,R<10?-.23:.23,.015,.024,.049,.022));ct(Tt,h,Q);let ht=it("camera-array",V(-.48,1.18,-.1),V(1.03,1.18,1.03),.53,[-.04,.13,.04]),pt=D(.79,.88,.045,c,ht,.13,-.14,-.05);pt.name="contact-camera-mount";for(let R=0;R<3;R++){let K=new Zt;K.name=`contact-optics-${R}`,K.position.set(R===1?.43:0,R===2?-.44:0,0),ht.add(K),D(.33,.33,.045,h,K),D(.25,.25,.017,l,K,0,0,.034),D(.17,.17,.012,M,K,0,0,.049);let Rt=[];for(let zt=0;zt<(t?4:6);zt++){let Ut=new Zt;Ut.name=`contact-lens-${R}-${zt}`,K.add(Ut);let J=.142-zt*.009;if(ot(J,.025,zt%2?v:M,Ut),$(J+.01,u,Ut,0,0,.015),zt===1){let vt=[];for(let $t=0;$t<6;$t++){let te=$t*Math.PI/3;vt.push(Y(Math.cos(te)*.07,Math.sin(te)*.07,.019,.027,.065,.008,te+.35))}ct(vt,l,Ut)}Rt.push({piece:Ut,home:.07+zt*.027,index:zt})}let wt=ot(.178,.13,c,K,0,0,.12);$(.18,h,K,0,0,.2),S.push({assembly:K,lensParts:Rt,barrel:wt,index:R})}ht.traverse(R=>{R.isMesh&&(R.renderOrder=7)});let yt=it("io-board",V(0,-1.38,.065),V(.25,-1.48,.51),.65,[.1,-.12,-.03]);D(1.35,.36,.065,m,yt),Ct(1.3,.32,G,yt,0,0,.039);let St=new Zt;yt.add(St),St.name="contact-usb-c",St.position.set(0,-.13,.12),D(.38,.025,.19,u,St,0,.073,0),D(.38,.025,.19,u,St,0,-.073,0),D(.027,.12,.19,u,St,-.182,0,0),D(.027,.12,.19,u,St,.182,0,0),D(.27,.022,.16,l,St,0,0,.008);let Xt=[];for(let R=0;R<12;R++)Xt.push(Y(-.123+R*.022,0,.092,.009,.025,.022));ct(Xt,h,St);let ut=[];for(let R=0;R<20;R++)ut.push(Y(-.57+R%10*.126,.075+Math.floor(R/10)*.086,.071,.038,.025,.045));ct(ut,d,yt);let Mt=it("speaker",V(-.47,-.12,.12),V(-.86,-.22,.38),.68,[.09,-.16,-.05],yt);D(.43,.28,.16,l,Mt),D(.39,.25,.012,u,Mt,0,0,.09);let Vt=[];for(let R=0;R<3;R++)for(let K=0;K<7;K++)Vt.push(Y(-.15+K*.05,-.075+R*.075,.102,.016,.016,.008));ct(Vt,l,Mt,b);let ft=it("haptic",V(.48,-.1,.11),V(.89,-.15,.39),.71,[.02,.19,.1],yt);D(.43,.23,.15,u,ft),D(.37,.19,.025,c,ft,0,0,.085);let Et=[];for(let R=0;R<(t?12:24);R++)Et.push(Y(-.15+R/(t?11:23)*.3,0,.108,.008,.14,.011));ct(Et,h,ft);let Bt=D(.13,.16,.027,d,ft,0,0,.13);for(let R of[St,Mt,ft])R.traverse(K=>{K.isMesh&&(K.renderOrder=7)});let at=new Zt;at.name="contact-fasteners",s.add(at);for(let R=0;R<10;R++){let K=(R%2?1:-1)*.71,Rt=-1.45+Math.floor(R/2)*.72,wt=new Zt;wt.position.set(K,Rt,.03),at.add(wt),ot(.036,.055,u,wt),D(.042,.008,.006,l,wt,0,0,.031),D(.008,.042,.006,l,wt,0,0,.031),P.push({g:wt,x:K,y:Rt})}let bt=dt(128,64,(R,K,Rt)=>{R.fillStyle="#7c431c",R.fillRect(0,0,K,Rt),R.fillStyle="#dca65a";for(let wt=0;wt<6;wt++)R.fillRect(8+wt*20,0,5,Rt)}),U=n({map:bt,color:"#ffffff",side:Mn,toneMapped:!1},!0),Pt=[];for(let[R,K,Rt]of[[rt,It,-.27],[rt,yt,.43],[rt,ht,-.42]]){let wt=t?14:28,zt=e(new He),Ut=new Float32Array((wt+1)*6),J=new Float32Array((wt+1)*4),vt=[];for(let te=0;te<=wt;te++)if(J.set([0,te/wt,1,te/wt],te*4),te<wt){let pe=te*2;vt.push(pe,pe+1,pe+2,pe+1,pe+3,pe+2)}zt.setAttribute("position",new ze(Ut,3).setUsage(bn)),zt.setAttribute("uv",new ze(J,2)),zt.setIndex(vt);let $t=new Ht(zt,U);$t.frustumCulled=!1,$t.renderOrder=5,s.add($t),Pt.push({mesh:$t,from:R,to:K,offset:Rt,n:wt,positions:Ut})}let X=[It,rt,T,ht,yt],mt=["BATERIA E ALIMENTA\xC7\xC3O","PLACA L\xD3GICA","PROCESSADOR E MEM\xD3RIA","LENTES E SENSORES","CONEX\xD5ES, SOM E VIBRA\xC7\xC3O"],B=[[.19,.32],[.32,.44],[.44,.56],[.56,.69],[.69,.83]],nt=new L,Dt={chassis:{to:V(0,0,-1.28),rank:5,order:10},thermal:{to:V(0,-.09,1.75),rank:1,order:50},battery:{to:V(0,-.42,-.27),rank:4,order:30},"logic-board":{to:V(.03,.94,.74),rank:3,order:40},processor:{to:V(0,.015,.27),rank:3,order:40},memory:{to:V(0,0,-.08),rank:3,order:40},"camera-array":{to:V(-.48,1.18,2.65),rank:2,order:60},"io-board":{to:V(0,-1.38,-1.26),rank:5,order:10},speaker:{to:V(-.47,-.12,.12),rank:5,order:10},haptic:{to:V(.48,-.1,.11),rank:5,order:10}};w.forEach(R=>{let K=Dt[R.g.name.replace("contact-","")];Object.assign(R,K),R.g.traverse(Rt=>{Rt.isMesh&&Rt.userData.localOrder===void 0&&(Rt.userData.localOrder=Rt.renderOrder)})});function Gt(R,K,Rt){w.forEach(({g:Ut,home:J,to:vt,rank:$t,order:te})=>{let pe=_i(R,$t);Ut.position.lerpVectors(J,vt,pe),Ut.rotation.set(0,0,0),Ut.scale.setScalar(1),Ut.userData.separation=pe,Ut.traverse(qe=>{qe.isMesh&&(qe.renderOrder=te+qe.userData.localOrder)})}),P.forEach(({g:Ut,x:J,y:vt},$t)=>{let te=_i(R,5);Ut.position.set(J*(1+te*.12),vt,.03+te*(-.64+$t%3*.02)),Ut.rotation.z=te*Math.PI*3,Ut.traverse(pe=>{pe.isMesh&&(pe.renderOrder=28)})}),S.forEach(({lensParts:Ut,barrel:J,index:vt})=>{let $t=_i(R,2);Ut.forEach(({piece:te,home:pe,index:qe})=>{te.position.z=pe+$t*qe*.025,te.rotation.set(0,0,0)}),J.position.z=.12-$t*.13,J.scale.y=.13*(1-$t*.6)}),Bt.position.x=Math.sin(K*13)*.013*Rt;let wt=-1,zt=0;B.forEach(([Ut,J],vt)=>{let $t=av(R,Ut,J);$t>zt&&(zt=$t,wt=vt)}),s.updateMatrixWorld(!0);for(let Ut of Pt){s.worldToLocal(Ut.from.getWorldPosition(C)),s.worldToLocal(Ut.to.getWorldPosition(H)),C.x+=Ut.offset,C.z+=.1,H.z+=.1;for(let J=0;J<=Ut.n;J++){let vt=J/Ut.n;z.lerpVectors(C,H,vt),z.x+=Math.sin(vt*Math.PI)*.13*Rt,z.z+=Math.sin(vt*Math.PI)*(.12+Rt*.19),Ut.positions.set([z.x-.047,z.y,z.z,z.x+.047,z.y,z.z],J*6)}Ut.mesh.geometry.attributes.position.needsUpdate=!0,Ut.mesh.renderOrder=43}return nt.set(0,0,0),wt>=0&&(s.worldToLocal(X[wt].getWorldPosition(nt)),nt.multiplyScalar(zt)),{focus:nt,weight:zt,index:wt,label:wt>=0?mt[wt]:"",open:Rt}}return{update:Gt,layers:w}}function tf({scene:s,software:t=!1,quality:e="medium"}){let n=new Zt;n.visible=!1,s.add(n);let i=document.querySelector(".contact-world"),r=t||e==="low",o=new Set,a=new Set,c=new Set,l=tt=>(o.add(tt),tt),h=(tt,Nt=!1)=>{let lt=Nt?new Ce(tt):new ye({roughness:.3,metalness:.62,...tt});return a.add(lt),lt},u=h({color:"#282c31",roughness:.33,metalness:.72}),d=h({color:"#0c1414"}),f=h({color:"#cf833c",roughness:.23,metalness:.8}),g=h({color:"#d6dce3",roughness:.22,metalness:.84}),_=g,m=h({color:"#8a96a8",metalness:.72,roughness:.28}),p=h({color:"#ffd297",toneMapped:!1},!0),M=h({color:"#e4e7ee",toneMapped:!1},!0),v=h({color:"#c6a9ff",toneMapped:!1},!0),x=h({color:"#a3e2eb",toneMapped:!1},!0),A=h({color:"#b38ff0",transparent:!0,opacity:.3,depthWrite:!1,toneMapped:!1},!0),b=l(new fe(1,1,1)),w=l(new De(1,1)),P=l(new We(1,1,1,r?1:3,.055)),S=l(new Dn(1,.075,r?4:8,r?18:40)),y=l(new Bi(1,1,1,r?16:40));function C(tt,Nt,lt,T,E,W=0,Q=0,Tt=0,ht=0){let pt=new Ht(P,T);return pt.scale.set(tt,Nt,lt),pt.position.set(W,Q,Tt),pt.renderOrder=ht,E.add(pt),pt}function H(tt,Nt,lt,T,E,W,Q){tt.fillStyle=Q,tt.beginPath(),tt.roundRect(Nt,lt,T,E,W),tt.fill()}function z(tt,Nt,lt,T,E=22,W="#e3d9c4",Q=!1){tt.font=`${Q?700:400} ${E}px Arial`,tt.fillStyle=W,tt.fillText(Nt,lt,T)}function V(tt,Nt=0){let lt=document.createElement("canvas");lt.width=tt==="phone"?512:640,lt.height=tt==="phone"?1024:350;let T=lt.getContext("2d"),E=lt.width,W=lt.height;if(H(T,0,0,E,W,tt==="phone"?34:12,"#1b211b"),tt==="phone")H(T,0,0,E,172,32,"#252f25"),T.fillStyle="#f19343",T.beginPath(),T.arc(65,102,28,0,7),T.fill(),z(T,"a.",48,113,29,"#241a0d",!0),z(T,"dev.abraao",110,99,30,"#f3e6cc",!0),z(T,"CONVERSA INICIAL",112,130,13,"#aaa58b"),z(T,"O pr\xF3ximo passo come\xE7a aqui.",29,214,18,"#b6b69a"),H(T,25,255,385,176,18,"#333c2d"),["Quero melhorar","a rotina do meu","neg\xF3cio."].forEach((Tt,ht)=>z(T,Tt,48,305+ht*45,30,"#eee4cd")),H(T,89,471,396,179,18,"#ce823a"),["Me conta onde","o processo est\xE1","travando."].forEach((Tt,ht)=>z(T,Tt,112,522+ht*45,30,"#201d11",!0)),H(T,25,691,385,133,18,"#333c2d"),["Vamos encontrar","um caminho."].forEach((Tt,ht)=>z(T,Tt,48,741+ht*44,30,"#eee4cd")),H(T,23,905,466,70,30,"#30392a"),z(T,"Conte seu desafio...",47,948,21,"#9eaa8d"),T.fillStyle="#dc9449",T.beginPath(),T.arc(454,940,24,0,7),T.fill(),z(T,"\u2197",441,950,29,"#201f12",!0);else{let Tt=["ENTENDER","DEFINIR","CONSTRUIR"],ht=["Seu contexto. Sua rotina.","Um caminho que fa\xE7a sentido.","Uma solu\xE7\xE3o com prop\xF3sito."];z(T,`0${Nt+1} / DO CONTEXTO \xC0 A\xC7\xC3O`,30,43,14,"#c69664"),T.fillStyle="#6b6952",T.fillRect(30,66,E-60,1),z(T,Tt[Nt],30,128,47,"#f1e3c8",!0),z(T,ht[Nt],31,175,23,"#acb497");for(let pt=0;pt<3;pt++)H(T,30,213+pt*34,(E-60)*[.94,.74,.5][pt],11,3,pt===2?"#b47b3c":"#46553a");T.fillStyle="#dd9a53",T.fillRect(E-44,104,9,55)}let Q=new Le(lt);return Q.colorSpace=ge,Q.anisotropy=r?1:4,c.add(Q),Q}function Y(tt,Nt,lt,T,E,W=8){let Q=new Ht(w,h({map:lt,color:"#fff",toneMapped:!1},!0));return Q.scale.set(tt,Nt,1),Q.position.z=E,Q.renderOrder=W,T.add(Q),Q}let D=new Zt;D.name="contact-handset",n.add(D);let ot=new Zt;ot.name="contact-display",D.add(ot),C(1.84,3.72,.1,u,ot),C(1.76,3.6,.035,d,ot,0,0,.057,1);let $=Y(1.62,3.39,V("phone"),ot,.082,2);$.name="contact-whole-screen",C(.57,.083,.018,d,ot,0,1.61,.094,3),C(.38,.018,.025,g,ot,0,1.605,.109,4),C(.4,.032,.02,M,ot,0,-1.69,.101,3),C(1.76,3.63,.012,m,ot,0,0,-.059);let ct=new Zt;ct.name="contact-frame",D.add(ct);function it(tt,Nt,lt,T=Qr){let E=new T,W=tt/2,Q=Nt/2;return E.moveTo(-W+lt,-Q),E.lineTo(W-lt,-Q),E.quadraticCurveTo(W,-Q,W,-Q+lt),E.lineTo(W,Q-lt),E.quadraticCurveTo(W,Q,W-lt,Q),E.lineTo(-W+lt,Q),E.quadraticCurveTo(-W,Q,-W,Q-lt),E.lineTo(-W,-Q+lt),E.quadraticCurveTo(-W,-Q,-W+lt,-Q),E}let dt=it(1.89,3.79,.18);dt.holes.push(it(1.72,3.61,.14,fr));let Ct=new Ht(l(new _a(dt,{depth:.16,bevelEnabled:!r,bevelSize:.012,bevelThickness:.012,bevelSegments:2,curveSegments:r?4:10})),f);Ct.position.z=-.08,ct.add(Ct),C(.045,.44,.09,f,ct,.963,.5,0),C(.04,.22,.09,g,ct,-.963,.68,0),C(.04,.36,.09,g,ct,-.963,.18,0);for(let tt=0;tt<9;tt++)C(.027,.023,.03,d,ct,-.34+tt*.085,-1.892,0);let G=new Zt;G.name="contact-back-cover",D.add(G),C(1.88,3.78,.1,f,G),C(1.8,3.68,.012,h({color:"#e99b54",roughness:.36,metalness:.72}),G,0,0,.059,1),C(.93,1.01,.07,f,G,-.32,1.13,.1,2);let O=h({color:"#161f1d",roughness:.12,metalness:.65});for(let tt=0;tt<3;tt++){let Nt=-.56+(tt===1?.45:0),lt=1.39-(tt===2?.46:0),T=new Ht(y,d);T.rotation.x=Math.PI/2,T.scale.set(.198,.075,.198),T.position.set(Nt,lt,.164),T.renderOrder=3,G.add(T);let E=new Ht(S,g);E.scale.setScalar(.176),E.position.set(Nt,lt,.209),E.renderOrder=4,G.add(E);let W=new Ht(y,O);W.rotation.x=Math.PI/2,W.scale.set(.151,.013,.151),W.position.set(Nt,lt,.218),W.renderOrder=5,G.add(W);let Q=C(.043,.012,.005,m,G,Nt-.046,lt+.047,.229,6);Q.rotation.z=-.4}let k=document.createElement("canvas");k.width=256,k.height=192;let Z=k.getContext("2d");Z.fillStyle="#8a431c",Z.font="700 90px Arial",Z.textAlign="center",Z.fillText("a.",128,105),Z.font="16px Arial",Z.fillText("dev.abraao",128,145);let N=new Le(k);N.colorSpace=ge,c.add(N);let st=new Ht(w,h({map:N,color:"#fff",transparent:!0,toneMapped:!1},!0));st.scale.set(.72,.54,1),st.position.set(0,-.1,.07),G.add(st);let xt=new Zt;D.add(xt);let It=jd({parent:xt,low:r,geo:l,mat:h,textures:c,boxGeo:b,planeGeo:w,palette:{graphite:u,black:d,copper:f,silver:g,ceramic:m,light:p,pale:M,violet:v}});if(!t){let tt=new xs("#fff0d8",19,17);tt.position.set(-3,5,5),n.add(tt);let Nt=new xs("#efad70",12,15);Nt.position.set(4,-1,3),n.add(Nt)}let Lt=new L,q=new L,rt=new L,F=new En;function Ft(tt,Nt){tt.traverse(lt=>{lt.isMesh&&(lt.userData.localOrder===void 0&&(lt.userData.localOrder=lt.renderOrder),lt.renderOrder=Nt+lt.userData.localOrder)})}function At(tt,Nt,lt,T={}){let E=Kd(tt,Nt),{t:W,p:Q,open:Tt,tilt:ht,reveal:pt}=E,yt=T.mobile??lt.aspect<1.2;D.position.set(Math.sin(W*.24)*.018,-.27*ht+E.lift,0),D.rotation.set(.035-1.13*ht,-.17+.1*ht+Math.sin(W*.13)*.018,-.08-.78*ht);let St=_i(Q,6),Xt=_i(Q,5),ut=_i(Q,0);ot.position.set(0,0,.18+(-2.25-.18)*St),ct.position.set(0,0,-1.28*Xt),G.position.set(0,0,-.15+3.67*ut),Ft(ot,St>.015?-10:90),Ft(ct,10),Ft(G,ut>.015?80:0),It.update(Q,W,Tt),xt.visible=ht>.015&&Q<.86;let Mt=Math.min(-.28,ot.position.z-.12),Vt=Math.max(.38,G.position.z+.28),ft=Math.tan(Ne.degToRad(lt.fov/2));D.updateWorldMatrix(!0,!1),Lt.set(0,0,(Mt+Vt)/2).applyMatrix4(D.matrixWorld),q.set(.13+.07*ht,.18+.11*ht,1).normalize(),lt.position.copy(q).add(Lt),lt.lookAt(Lt),F.copy(lt.quaternion).invert();let Et=0;for(let bt of[-1.03,1.03])for(let U of[-1.95,1.95])for(let Pt of[Mt,Vt])rt.set(bt,U,Pt).applyMatrix4(D.matrixWorld).sub(Lt).applyQuaternion(F),Et=Math.max(Et,Math.abs(rt.x)*1.04/(ft*lt.aspect)+rt.z,Math.abs(rt.y)*1.04/ft+rt.z);let Bt=Math.max(yt?5.8:6.45,(yt?8:8.2)/lt.aspect),at=Ne.lerp(Et,Bt/(2*ft),pt);return lt.position.copy(q).multiplyScalar(at).add(Lt),lt.lookAt(Lt),lt.updateProjectionMatrix(),lt.updateMatrixWorld(!0),i.dataset.rendered="true",i.dataset.filmProgress=Q.toFixed(4),i.dataset.motionTime=W.toFixed(2),i.dataset.packetPhase=E.flow.toFixed(4),i.dataset.cameraYaw=E.yaw.toFixed(4),i.dataset.explosion=Tt.toFixed(4),i.dataset.contactReveal=pt.toFixed(4),i.dataset.internalPart=Q<.34?"opening":Q<.62?"parallel-layers":Q<.87?"rebuilding":"contact",E}let Ot=0;return n.traverse(tt=>{tt.isMesh&&Ot++}),i.dataset.contactMeshes=Ot,{group:n,update:At,dispose(){s.remove(n),n.traverse(tt=>{tt.isInstancedMesh&&tt.dispose()}),o.forEach(tt=>tt.dispose()),a.forEach(tt=>tt.dispose()),c.forEach(tt=>tt.dispose())}}}var ef=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0)),Ms=s=>{let t=ef(s);return t*t*(3-2*t)},ao=(s,t,e)=>Ms((s-t)/(e-t));function nf(s,t=0){let e=ef(s),n=Math.max(0,Number.isFinite(t)?t:0)*.001,i=[[-.55,.22,1.06],[-.18,.65,.94],[.24,.28,.89],[.53,.48,1.02],[.6,.45,1.03]],r=Math.min(3,Math.floor(e*4)),o=e===1?1:e*4-r,a=Ms(o),c=i[r].map((l,h)=>l+(i[r+1][h]-l)*a);return{p:e,t:n,index:r,local:o,organize:ao(e,.08,.38),connect:ao(e,.28,.59),operate:ao(e,.49,.73),evolve:ao(e,.7,.94),yaw:c[0],elevation:c[1],zoom:c[2],pulse:n*.17%1,drift:Math.sin(n*.5)*.045,copyOpacity:1-.75*ao(o,.9,1)*(r<3?1:0)}}function sf({scene:s,software:t=!1,quality:e="medium"}){let n=new Zt;n.visible=!1,s.add(n);let i=document.querySelector(".result-world"),r=t||e==="low",o=new Set,a=new Set,c=new Set,l=B=>(o.add(B),B),h=(B,nt=!1)=>{let Dt=nt?new Ce(B):new ye({roughness:.35,metalness:.62,...B});return a.add(Dt),Dt},u=h({color:"#2a3e37"}),d=h({color:"#819a82",metalness:.8}),f=h({color:"#101e1b"}),g=h({color:"#d08843",roughness:.25,metalness:.72}),_=h({color:"#ffc27a",toneMapped:!1},!0),m=h({color:"#a4cbb3",toneMapped:!1},!0),p=h({color:"#d38f4d",transparent:!0,opacity:.6,toneMapped:!1},!0),M=h({color:"#8daf9a",transparent:!0,opacity:.16,toneMapped:!1,depthWrite:!1},!0),v=l(r?new fe(1,1,1):new We(1,1,1,2,.045)),x=l(new De(1,1,r?3:9,r?2:5)),A=l(new Kn(1,r?6:10,r?4:7)),b=l(new Dn(1,.013,r?3:5,r?44:80)),w=new le,P=new L,S=new L(0,1,0);function y(B,nt,Dt,Gt,R,K=0,Rt=0,wt=0,zt=0){let Ut=new Ht(v,Gt);return Ut.scale.set(B,nt,Dt),Ut.position.set(K,Rt,wt),Ut.renderOrder=zt,R.add(Ut),Ut}function C(B,nt,Dt,Gt=0,R=0,K=0){let Rt=new Ht(b,nt);return Rt.scale.setScalar(B),Rt.position.set(Gt,R,K),Dt.add(Rt),Rt}function H(B,nt,Dt,Gt,R=18,K="#dbdfc9",Rt=!1){B.font=`${Rt?700:400} ${R}px Arial`,B.fillStyle=K,B.fillText(nt,Dt,Gt)}function z(B,nt,Dt,Gt,R,K,Rt){B.fillStyle=Rt,B.beginPath(),B.roundRect(nt,Dt,Gt,R,K),B.fill()}function V(B,nt,Dt=[]){let Gt=document.createElement("canvas");Gt.width=B==="dashboard"?1024:512,Gt.height=B==="dashboard"?640:340;let R=Gt.getContext("2d"),K=Gt.width,Rt=Gt.height;if(z(R,0,0,K,Rt,14,B==="dashboard"?"#e4e0d1":"#152b25"),B==="dashboard"){z(R,0,0,K,65,12,"#243e33"),H(R,"seu.neg\xF3cio",30,43,27,"#efe4c9",!0),H(R,"OPERA\xC7\xC3O CONECTADA",690,41,16,"#b7c5a7"),H(R,"Uma vis\xE3o. O mesmo caminho.",35,118,32,"#253a2b",!0),H(R,"Do primeiro contato \xE0 pr\xF3xima entrega.",36,152,19,"#7a8069"),["RECEBER","PREPARAR","ENTREGAR"].forEach((Ut,J)=>{let vt=34+J*325;z(R,vt,187,306,205,9,"#d3d6c1"),z(R,vt+17,204,272,30,5,J===2?"#bf8a4e":"#bfc8ad"),H(R,Ut,vt+30,225,14,"#31452c",!0),H(R,["Pedido recebido","Equipe em a\xE7\xE3o","Pronto para seguir"][J],vt+18,275,20,"#253c2a",!0),H(R,["Cliente e contexto","Informa\xE7\xE3o dispon\xEDvel","Atualiza\xE7\xE3o registrada"][J],vt+18,307,15,"#6a795e"),z(R,vt+18,343,270,4,2,"#bac3a7"),z(R,vt+18,343,270*(J===0?1:J===1?.7:.45),4,2,"#b47d40")}),H(R,"CLAREZA PARA O PR\xD3XIMO PASSO",37,440,15,"#6b795e",!0),R.strokeStyle="#c4c9b3",R.lineWidth=1;for(let Ut=0;Ut<3;Ut++)R.beginPath(),R.moveTo(36,470+Ut*55),R.lineTo(640,470+Ut*55),R.stroke();R.strokeStyle="#aa6c2a",R.lineWidth=4,R.beginPath(),[[40,558],[130,540],[210,548],[310,502],[420,509],[520,475],[635,455]].forEach(([Ut,J],vt)=>vt?R.lineTo(Ut,J):R.moveTo(Ut,J)),R.stroke(),z(R,690,428,300,175,9,"#294332"),H(R,"EQUIPE",715,466,14,"#d8b576"),H(R,"Contexto",715,511,27,"#e3e0c8",!0),H(R,"compartilhado.",715,547,27,"#e3e0c8",!0),H(R,"Cada parte sabe o pr\xF3ximo passo.",715,577,12,"#acbc9d")}else H(R,"SEU NEG\xD3CIO / "+nt,26,38,12,"#bba97d",!0),R.fillStyle="#6f805f",R.fillRect(26,55,K-52,1),H(R,nt,26,108,34,"#f0e4c9",!0),H(R,Dt[0]||"A informa\xE7\xE3o encontra dire\xE7\xE3o.",26,145,17,"#a4b89c"),Dt.slice(1,4).forEach((zt,Ut)=>{let J=181+Ut*47;z(R,24,J,K-48,36,5,Ut===2?"#73572e":"#2a4534"),R.fillStyle=Ut===2?"#e8b673":"#8da37b",R.beginPath(),R.arc(42,J+18,3,0,7),R.fill(),H(R,zt,56,J+24,15,Ut===2?"#f2deb6":"#c1ceb0")});let wt=new Le(Gt);return wt.colorSpace=ge,wt.anisotropy=r?1:4,c.add(wt),wt}function Y(B,nt,Dt,Gt,R,K){let Rt=new Zt;K.add(Rt),y(B+.12,nt+.12,.12,d,Rt,0,0,0,5),y(B+.055,nt+.055,.045,f,Rt,0,0,.075,6);let wt=new Ht(x,h({map:V(Dt,Gt,R),color:"#fff",toneMapped:!1},!0));return wt.scale.set(B,nt,1),wt.position.z=.108,wt.renderOrder=8,Rt.add(wt),y(.32,.023,.025,_,Rt,-B/2+.24,nt/2+.085,.08,9),Rt}let D=new Zt;n.add(D);let ot=[];for(let B=0;B<9;B++){let nt=new Zt;D.add(nt);let Dt=B%3,Gt=Math.floor(B/3);y(2.24,.17,1.5,u,nt,0,0,0,-10),y(2.26,.027,1.51,g,nt,0,-.11,0,-10),y(1.88,.014,.018,p,nt,0,.095,.59,-8),y(.018,.015,1.18,M,nt,-.96,.095,0,-8);let R=y(.12,.035,.07,_,nt,.84,.08,.61,-7);ot.push({g:nt,x:(Dt-1)*2.34,y:-1.72,z:(Gt-1)*1.6,led:R})}let $=[];[["CLIENTES",["Um s\xF3 hist\xF3rico.","Contato","Contexto","Pr\xF3ximo passo"],[-2.78,.6,.2],[-4.1,1.65,1.4]],["PEDIDOS",["O caminho da entrega.","Receber","Preparar","Entregar"],[2.78,.63,.1],[4.2,-.4,1.8]],["ESTOQUE",["A opera\xE7\xE3o acompanha.","Entrada","Reserva","Sa\xEDda"],[-2.65,-.85,1.5],[-3.25,-1.25,3]],["FINANCEIRO",["O registro continua.","Registrar","Conferir","Acompanhar"],[2.65,-.82,1.45],[3.75,2.1,-.8]]].forEach(([B,nt,Dt,Gt],R)=>{let K=new Zt;n.add(K);let Rt=Y(1.87,1.24,"station",B,nt,K);Rt.rotation.y=R%2?-.1:.1,y(1.92,.08,.7,f,K,0,-.73,-.06,-3),y(1.92,.025,.045,p,K,0,-.68,.3,2);let wt=C(.12,_,K,0,-.78,.34);wt.rotation.x=Math.PI/2;let zt=y(.12,.55,.12,d,K,0,-1,-.17,-4),Ut=[];for(let vt=0;vt<3;vt++)Ut.push(y(.11,.018,.035,m,K,-.55+vt*.21,-.69,.26,4));let J=y(1.68,.009,.007,p,Rt,0,-.48,.119,9);$.push({g:K,panel:Rt,pedestal:zt,port:wt,beacons:Ut,scan:J,pose:new L(...Dt),scatter:new L(...Gt)})});let it=new Zt;n.add(it);let dt=Y(3.5,2.18,"dashboard","",[],it);dt.position.set(0,.55,-.15);let Ct=y(.14,.9,.18,g,it,0,-.98,-.2,-4),G=y(3.7,.13,1.45,u,it,0,-1.4,.12,-5),O=new xe(v,d,r?12:24);it.add(O),O.renderOrder=3;for(let B=0;B<O.count;B++)w.position.set(-1.52+B%8*.43,-1.31,-.24+Math.floor(B/8)*.29),w.rotation.set(0,0,0),w.scale.set(.28,.025,.14),w.updateMatrix(),O.setMatrixAt(B,w.matrix);let k=[];for(let B=0;B<3;B++){let nt=C(.56+B*.17,B===1?p:M,it,0,-.89,.48);nt.rotation.x=Math.PI/2,nt.renderOrder=-1,k.push(nt)}let Z=new Ht(l(new Bi(.47,.47,.1,r?16:32)),g);Z.position.set(0,-.87,.48),it.add(Z);let N=new Zt;n.add(N);let st=[];for(let B=0;B<3;B++){let nt=C(2.65+B*.28,B===0?p:M,N,0,-1.65-B*.13,0);nt.rotation.x=-Math.PI/2,nt.scale.y*=.69,nt.renderOrder=-12,st.push(nt)}let xt=new xe(v,d,16);xt.renderOrder=-11,N.add(xt);for(let B=0;B<16;B++){let nt=B/16*Math.PI*2;w.position.set(Math.cos(nt)*3,-1.99,Math.sin(nt)*1.9),w.rotation.set(0,-nt,0),w.scale.set(.055,.45,.055),w.updateMatrix(),xt.setMatrixAt(B,w.matrix)}let It=new xe(v,p,r?32:64);It.renderOrder=-12,N.add(It);let Lt=r?16:28,q=r?3:5,rt=[];function F(B,nt,Dt){let Gt=new Float32Array((Lt+1)*(q+1)*3),R=[];for(let zt=0;zt<Lt;zt++)for(let Ut=0;Ut<q;Ut++){let J=zt*(q+1)+Ut,vt=J+q+1;R.push(J,vt,J+1,vt,vt+1,J+1)}let K=l(new He);K.setAttribute("position",new ze(Gt,3)),K.setIndex(R);let Rt=new Ht(K,B%3===0?m:p);Rt.frustumCulled=!1,Rt.renderOrder=2,n.add(Rt);let wt={mesh:Rt,geometry:K,positions:Gt,a:new L,b:new L,c:new L,from:nt,to:Dt,index:B};return rt.push(wt),wt}for(let B=0;B<4;B++)F(B,B,-1);for(let B=0;B<4;B++)F(B+4,B,(B+1)%4);let Ft=new L,At=new L,Ot=new L,tt=new L;function Nt(B,nt,Dt){let Gt=1-nt;return Dt.copy(B.a).multiplyScalar(Gt*Gt).addScaledVector(B.c,2*Gt*nt).addScaledVector(B.b,nt*nt)}function lt(B,nt,Dt){B.a.copy($[B.from].g.position),B.a.y-=.73,B.a.z+=.15,B.to===-1?B.b.set(0,-1+it.position.y,.5):(B.b.copy($[B.to].g.position),B.b.y-=.73,B.b.z+=.15),B.c.copy(B.a).lerp(B.b,.5),B.c.y-=.35,B.c.z+=.35+Math.sin(nt*.42+B.index)*.18;for(let Gt=0;Gt<=Lt;Gt++){let R=Gt/Lt;Nt(B,R,P),Ft.copy(B.c).sub(B.a).multiplyScalar(2*(1-R)).addScaledVector(tt.copy(B.b).sub(B.c),2*R).normalize(),At.crossVectors(Ft,S),At.lengthSq()<.01?At.set(1,0,0):At.normalize(),Ot.crossVectors(Ft,At).normalize();for(let K=0;K<=q;K++){let Rt=K/q*Math.PI*2,wt=(Gt*(q+1)+K)*3,zt=.012;B.positions[wt]=P.x+zt*(At.x*Math.cos(Rt)+Ot.x*Math.sin(Rt)),B.positions[wt+1]=P.y+zt*(At.y*Math.cos(Rt)+Ot.y*Math.sin(Rt)),B.positions[wt+2]=P.z+zt*(At.z*Math.cos(Rt)+Ot.z*Math.sin(Rt))}}B.geometry.attributes.position.needsUpdate=!0,B.geometry.setDrawRange(0,Math.floor(Dt*Lt)*q*6),B.mesh.visible=Dt>.005}let T=new xe(A,_,rt.length*4);T.frustumCulled=!1,T.instanceMatrix.setUsage(bn),T.renderOrder=4,n.add(T);let E=[];for(let B=0;B<4;B++){let nt=new Zt;n.add(nt),y(.45,.29,.025,f,nt,0,0,0,5),y(.42,.018,.009,_,nt,0,.116,.017,6);for(let Dt=0;Dt<3;Dt++)y(Dt===2?.17:.32,.012,.009,Dt===2?_:m,nt,Dt===2?-.075:0,.052-Dt*.052,.017,6);E.push(nt)}let W=new Zt;n.add(W);let Q=[],Tt=[.5,.85,1.25,1.75,2.3,2.85,3.45];for(let B=0;B<7;B++){let nt=new Zt;W.add(nt);let Dt=y(.43,1,.48,B%3===0?g:u,nt,0,.5,0,-3),Gt=y(.46,.035,.51,_,nt,0,1.02,0,0);Q.push({g:nt,column:Dt,cap:Gt,height:Tt[B],x:-2.45+B*.81})}let ht=Q.map(B=>new L(B.x,-1.58+B.height+.14,-2)),pt=new fs(ht),yt=new Ht(l(new gi(pt,r?32:72,.023,r?3:5,!1)),_);yt.renderOrder=2,W.add(yt);let St=Y(2.7,.89,"station","PR\xD3XIMO PASSO",["Clareza para continuar.","Ajustar \xB7 conectar \xB7 evoluir"],W);St.position.set(.3,2.2,-2.4),St.scale.setScalar(.8);let Xt=new Ht(A,_);Xt.scale.setScalar(.07),W.add(Xt);let ut=new xe(v,g,r?18:36);ut.frustumCulled=!1,ut.instanceMatrix.setUsage(bn),n.add(ut);let Mt=new xe(A,M,r?26:64);Mt.frustumCulled=!1,n.add(Mt);let Vt=document.createElement("canvas");Vt.width=Vt.height=128;let ft=Vt.getContext("2d"),Et=ft.createRadialGradient(64,64,1,64,64,64);Et.addColorStop(0,"#eab46d38"),Et.addColorStop(.3,"#72b59a16"),Et.addColorStop(1,"#72b59a00"),ft.fillStyle=Et,ft.fillRect(0,0,128,128);let Bt=new Le(Vt);c.add(Bt);let at=new Ht(l(new De(10,8)),h({map:Bt,color:"#fff",transparent:!0,opacity:.65,depthWrite:!1,toneMapped:!1},!0));at.renderOrder=-30,n.add(at);let bt=new L,U=new L;function Pt(B,nt,Dt,Gt,R,K,Rt,wt,zt=0,Ut=0,J=0){w.position.set(Dt,Gt,R),w.rotation.set(zt,Ut,J),w.scale.set(K,Rt,wt),w.updateMatrix(),B.setMatrixAt(nt,w.matrix)}function X(B,nt,Dt,Gt={}){let R=nf(B,nt),{t:K}=R,Rt=Gt.mobile??Dt.aspect<1.2;n.rotation.set(0,0,0),n.position.set(0,0,0),ot.forEach((J,vt)=>{let $t=Ms((R.organize-vt*.025)/.8),te=1-$t;J.g.position.set(J.x+Math.sin(vt*3.3)*te*2.6,J.y-te*(1.8+vt*.13),J.z+Math.cos(vt*2.1)*te*2.4),J.g.rotation.set(te*(vt%2?.65:-.65),te*(vt-4)*.26,0),J.g.scale.setScalar(.45+.55*$t),J.led.visible=R.connect>.1}),$.forEach((J,vt)=>{let $t=Ms((R.organize-vt*.035)/.84),te=1-$t,pe=Math.sin($t*Math.PI);J.g.position.lerpVectors(J.scatter,J.pose,$t),J.g.position.y+=Math.sin(K*.57+vt)*(.12*te+.025)+pe*(vt%2?.7:-.5),J.g.position.z+=pe*.8,J.g.rotation.set(te*(vt%2?.26:-.2),te*(vt%2?-.42:.42),te*(vt%2?.12:-.1)),J.panel.rotation.x=-.04+te*.14,J.pedestal.scale.y=Math.max(.01,R.organize),J.port.rotation.z=K*.5+vt,J.beacons.forEach((qe,Ei)=>qe.scale.y=.018*(.5+.5*Math.sin(K*2.3+vt+Ei))),J.scan.position.y=-.5+(K*.18+vt*.25)%1*1,J.scan.visible=R.connect>.2}),it.position.set(0,-2.7*(1-R.organize),-.15*(1-R.operate)),it.scale.setScalar(.3+.7*R.organize),it.visible=R.organize>.005,dt.position.y=.55+.7*(1-R.operate),dt.rotation.x=-.22*(1-R.operate),dt.rotation.y=Math.sin(K*.27)*.012,G.position.y=-1.4-.75*(1-R.operate),Ct.scale.y=.9+.5*(1-R.operate),k.forEach((J,vt)=>{J.rotation.z=K*(vt%2?-.32:.22)+vt*.7,J.scale.setScalar((.56+vt*.17)*(1+Math.sin(K*.8+vt)*.04))}),Z.rotation.y=K*.3,N.position.y=-1.2*(1-R.organize),N.scale.setScalar(.8+.2*R.organize),N.visible=R.organize>.01,st.forEach((J,vt)=>J.rotation.z=K*(vt%2?.025:-.035));for(let J=0;J<It.count;J++){let vt=J/It.count*Math.PI*2+K*.025;Pt(It,J,Math.cos(vt)*3.62,-1.8,Math.sin(vt)*2.4,.028,.018,J%4===0?.19:.075,0,-vt,0)}It.instanceMatrix.needsUpdate=!0,rt.forEach((J,vt)=>{let $t=Ms((R.connect-vt*.028)/.78);lt(J,K,$t);for(let te=0;te<4;te++){let pe=(K*(.15+vt*.006)-te*.035+vt*.107+1)%1;Nt(J,pe,P);let qe=$t*(R.operate*.6+.4)*(te===0?.066:.038-te*.006);Pt(T,vt*4+te,P.x,P.y,P.z,qe,qe,qe)}}),T.instanceMatrix.needsUpdate=!0,T.visible=R.connect>.001,E.forEach((J,vt)=>{let $t=(K*.12+vt*.23)%1;Nt(rt[vt],$t,J.position),J.position.y+=.12,J.scale.setScalar(R.operate*(.6+.4*Math.sin($t*Math.PI))),J.visible=R.operate>.005}),W.visible=R.evolve>.001,W.scale.setScalar(Math.max(.001,R.evolve)),Q.forEach((J,vt)=>{let $t=Ms((R.evolve-vt*.04)/.72),te=Math.max(.02,J.height*$t);J.g.position.set(J.x,-1.58,-2),J.column.scale.y=te,J.column.position.y=te/2,J.cap.position.y=te+.025}),yt.geometry.setDrawRange(0,Math.floor(R.evolve*(r?32:72))*(r?3:5)*6),pt.getPointAt(K*.13%1,Xt.position),St.position.y=2.15+Math.sin(K*.6)*.045;for(let J=0;J<ut.count;J++){let vt=J*2.39996+K*.035,$t=3.2+J%4*.34,te=1-R.organize,pe=Math.cos(vt)*$t*(.5+te*.8),qe=-1.1+Math.sin(vt)*.5+te*(Math.cos(J)*2.7),Ei=Math.sin(vt)*$t*.7,Ls=.042+J%3*.015;Pt(ut,J,pe,qe,Ei,Ls,Ls*.38,Ls,K*.12+J,K*.16+J,0)}ut.instanceMatrix.needsUpdate=!0;for(let J=0;J<Mt.count;J++){let vt=J*2.39996+K*.014,$t=3.7+J%7*.17;Pt(Mt,J,Math.cos(vt)*$t,Math.sin(J*4.7+K*.12)*2.4,Math.sin(vt)*2.7-1,.012,.012,.012)}Mt.instanceMatrix.needsUpdate=!0;let wt=R.yaw*(Rt?.63:1)+Math.sin(K*.13)*.018;bt.set(0,-.2+R.evolve*.26,0);let Ut=Math.max(Rt?5.5:7.2,(Rt?10.7:11.8)/Dt.aspect)*R.zoom/(2*Math.tan(Ne.degToRad(Dt.fov/2)));return U.set(Math.sin(wt),R.elevation*(Rt?.76:1),Math.cos(wt)).normalize(),Dt.position.copy(U).multiplyScalar(Ut).add(bt),Dt.lookAt(bt),Dt.updateProjectionMatrix(),Dt.updateMatrixWorld(!0),E.forEach(J=>J.quaternion.copy(Dt.quaternion)),at.position.set(0,-.4,-3),at.quaternion.copy(Dt.quaternion),at.scale.setScalar(.9+Math.sin(K*.45)*.04),i.dataset.rendered="true",i.dataset.filmProgress=R.p.toFixed(4),i.dataset.motionTime=K.toFixed(2),i.dataset.packetPhase=R.pulse.toFixed(4),i.dataset.cameraYaw=wt.toFixed(4),R}let mt=0;return n.traverse(B=>{B.isMesh&&mt++}),i.dataset.resultMeshes=mt,{group:n,update:X,dispose(){s.remove(n),n.traverse(B=>{B.isInstancedMesh&&B.dispose()}),o.forEach(B=>B.dispose()),a.forEach(B=>B.dispose()),c.forEach(B=>B.dispose())}}}var cv=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0));function lv(s,t){let e=Math.max(0,Number.isFinite(t)?t:0)*.001,n=cv(s);return{t:e,p:n,breath:.5+.5*Math.sin(e*.82),yaw:e*.22+n*.7,orbit:.26*Math.sin(e*.15)+n*.55,lift:Math.sin(e*.72)*.13,phase:Math.floor((e/9+n*1.4)%3),active:Math.floor(e/3.8)%4}}function rf({scene:s,software:t=!1,quality:e="medium"}){let n=new Zt;n.visible=!1,s.add(n);let i=t||e==="low",r=new Set,o=new Set,a=new Set,c=document.querySelector(".intelligence-world"),l=[...c.querySelectorAll("[data-reactor-label]")],h=document.querySelector("[data-reactor-phase]"),u=document.querySelector("[data-reactor-copy]"),d=pt=>(r.add(pt),pt),f=(pt,yt=!1)=>{let St=yt?new Ce(pt):new ye({roughness:.28,metalness:.65,...pt});return o.add(St),St},g=f({color:"#f68a27",roughness:.27,metalness:.64}),_=f({color:"#35413a",metalness:.8}),m=f({color:"#cbd9ca",roughness:.3,metalness:.72}),p=f({color:"#ffb85b",toneMapped:!1},!0),M=f({color:"#e9f4d9",toneMapped:!1},!0),v=f({color:"#d67d31",toneMapped:!1,transparent:!0,opacity:.68},!0),x=f({color:"#69a99f",toneMapped:!1,transparent:!0,opacity:.34},!0),A=f({color:"#af9a66",toneMapped:!1,transparent:!0,opacity:.19},!0),b=d(i?new fe(1,1,1):new We(1,1,1,2,.07)),w=d(new Kn(1,i?7:12,i?5:9)),P=d(new Dn(1,.009,i?3:5,i?44:80)),S=new le,y=new L,C=new L,H=new Zt;n.add(H);let z=i?3:4,V=z**3,Y=new xe(b,g,V);Y.frustumCulled=!1,Y.instanceMatrix.setUsage(bn),H.add(Y);let D=new Ht(d(new zi(.4,i?0:1)),p);H.add(D);let ot=new Zt;H.add(ot);function $(pt,yt,St,Xt,ut){let Mt=new L(...pt),Vt=new L(...yt),ft=Vt.clone().sub(Mt),Et=new Ht(b,Xt);return Et.position.copy(Mt).add(Vt).multiplyScalar(.5),Et.scale.set(St,ft.length(),St),Et.quaternion.setFromUnitVectors(new L(0,1,0),ft.normalize()),ut.add(Et),Et}let ct=[];for(let pt of[-1,1])for(let yt of[-1,1])for(let St of[-1,1])ct.push([pt*.85,yt*.85,St*.85]);for(let pt=0;pt<ct.length;pt++)for(let yt=pt+1;yt<ct.length;yt++)ct[pt].filter((St,Xt)=>St!==ct[yt][Xt]).length===1&&$(ct[pt],ct[yt],.012,v,ot);let it=[];for(let pt=0;pt<5;pt++){let yt=new Ht(P,pt===1?v:pt===3?x:A),St=1.28+pt*.34;yt.scale.setScalar(St),n.add(yt),it.push(yt)}let dt=Array.from({length:4},(pt,yt)=>{let St=new Zt;n.add(St);let Xt=new Ht(b,yt%2?m:g);Xt.scale.setScalar(.25),St.add(Xt);let ut=new Ht(P,yt%2?x:v);ut.scale.setScalar(.43),St.add(ut);let Mt=new Ht(P,A);Mt.scale.setScalar(.53),Mt.rotation.x=Math.PI/2,St.add(Mt);let Vt=new Ht(w,p);return Vt.scale.setScalar(.075),St.add(Vt),{g:St,cube:Xt,rim:ut,rim2:Mt,nucleus:Vt,base:[-2.45,2.45,-2.15,2.35][yt],y:[1.25,.95,-1.25,-1.3][yt],z:[-.5,-.2,.65,.8][yt]}}),Ct=i?18:30,G=i?3:5;function O(pt){let yt=d(new He),St=new Float32Array((Ct+1)*(G+1)*3),Xt=[];for(let Mt=0;Mt<Ct;Mt++)for(let Vt=0;Vt<G;Vt++){let ft=Mt*(G+1)+Vt,Et=ft+G+1;Xt.push(ft,Et,ft+1,Et,Et+1,ft+1)}yt.setAttribute("position",new ze(St,3)),yt.setIndex(Xt);let ut=new Ht(yt,pt%3===1?x:v);return ut.frustumCulled=!1,ut.renderOrder=-1,n.add(ut),{mesh:ut,positions:St,geometry:yt,a:new L,b:new L,c:new L,index:pt}}let k=Array.from({length:8},(pt,yt)=>O(yt)),Z=new xe(w,p,k.length*4);Z.frustumCulled=!1,Z.instanceMatrix.setUsage(bn),n.add(Z);let N=new xe(w,A,i?62:128);N.frustumCulled=!1,N.instanceMatrix.setUsage(bn),n.add(N);let st=new xe(b,v,i?32:64);st.frustumCulled=!1,n.add(st);let xt=document.createElement("canvas");xt.width=xt.height=128;let It=xt.getContext("2d"),Lt=It.createRadialGradient(64,64,0,64,64,64);Lt.addColorStop(0,"#ffb04b60"),Lt.addColorStop(.25,"#ec872620"),Lt.addColorStop(1,"#ec872600"),It.fillStyle=Lt,It.fillRect(0,0,128,128);let q=new Le(xt);a.add(q);let rt=f({map:q,color:"#ffffff",transparent:!0,depthWrite:!1,opacity:.75,toneMapped:!1},!0),F=new Ht(d(new De(5,5)),rt);F.renderOrder=-20,n.add(F);let Ft=new L,At=new L,Ot=new L,tt=new L,Nt=new L(0,1,0);function lt(pt,yt,St){let Xt=1-yt;return St.copy(pt.a).multiplyScalar(Xt*Xt).addScaledVector(pt.c,2*Xt*yt).addScaledVector(pt.b,yt*yt)}function T(pt,yt){let{a:St,b:Xt,c:ut,positions:Mt}=pt;pt.index<4?(St.set(0,Math.sin(yt*.72)*.13,0),Xt.copy(dt[pt.index].g.position)):(St.copy(dt[pt.index-4].g.position),Xt.copy(dt[(pt.index-3)%4].g.position)),ut.copy(St).lerp(Xt,.5),ut.z+=Math.sin(yt*.41+pt.index*.9)*.72+(pt.index<4?.75:-.6),ut.y+=Math.sin(yt*.55+pt.index)*.38;for(let Vt=0;Vt<=Ct;Vt++){let ft=Vt/Ct;lt(pt,ft,Ft),At.copy(ut).sub(St).multiplyScalar(2*(1-ft)).addScaledVector(y.copy(Xt).sub(ut),2*ft).normalize(),Ot.crossVectors(At,Nt),Ot.lengthSq()<.01?Ot.set(1,0,0):Ot.normalize(),tt.crossVectors(At,Ot).normalize();for(let Et=0;Et<=G;Et++){let Bt=Et/G*Math.PI*2,at=(Vt*(G+1)+Et)*3,bt=.011;Mt[at]=Ft.x+bt*(Ot.x*Math.cos(Bt)+tt.x*Math.sin(Bt)),Mt[at+1]=Ft.y+bt*(Ot.y*Math.cos(Bt)+tt.y*Math.sin(Bt)),Mt[at+2]=Ft.z+bt*(Ot.z*Math.cos(Bt)+tt.z*Math.sin(Bt))}}pt.geometry.attributes.position.needsUpdate=!0}function E(pt,yt,St,Xt,ut=0){S.position.copy(St),S.rotation.set(ut,ut*.7,0),S.scale.setScalar(Xt),S.updateMatrix(),pt.setMatrixAt(yt,S.matrix)}let W=[["01 / CONTEXTO","A informa\xE7\xE3o encontra suas conex\xF5es."],["02 / INTELIG\xCANCIA","O contexto ajuda a enxergar o pr\xF3ximo passo."],["03 / A\xC7\xC3O","Atendimento e opera\xE7\xE3o seguem no mesmo fluxo."]],Q=-1;function Tt(pt,yt,St,Xt={width:800,height:600}){let ut=lv(pt,yt),{t:Mt}=ut;H.position.y=ut.lift,H.rotation.set(.18+Math.sin(Mt*.27)*.12,ut.yaw,Math.sin(Mt*.31)*.13),D.rotation.set(Mt*.12,-Mt*.18,Mt*.08),D.scale.setScalar(.84+ut.breath*.23),ot.rotation.set(-Mt*.06,Mt*.04,.1),ot.scale.setScalar(1.03+ut.breath*.07);let Vt=.13+ut.breath*.29,ft=1.16/z;for(let bt=0;bt<V;bt++){let U=(bt%z-(z-1)/2)*ft,Pt=(Math.floor(bt/z)%z-(z-1)/2)*ft,X=(Math.floor(bt/(z*z))-(z-1)/2)*ft;Ft.set(U,Pt,X);let mt=Ft.length()||1;Ft.multiplyScalar(1+Vt/mt),Ft.y+=Math.sin(Mt*1.1+bt*.7)*.015,E(Y,bt,Ft,ft*.83,.035*Math.sin(Mt*.6+bt))}Y.instanceMatrix.needsUpdate=!0,it.forEach((bt,U)=>{bt.position.y=ut.lift*.4,bt.rotation.set(.3+U*.46+Math.sin(Mt*.15+U)*.12,.25+U*.52+Mt*(U%2?.045:-.036),Mt*(U%2?-.085:.055)+U*.62)}),dt.forEach((bt,U)=>{bt.g.position.set(bt.base+Math.sin(Mt*.38+U*1.7)*.22,bt.y+Math.cos(Mt*.46+U)*.22,bt.z+Math.sin(Mt*.34+U*1.1)*.4),bt.cube.rotation.set(Mt*(U%2?.25:-.22),Mt*.35+U,.25+Math.sin(Mt*.4+U)*.2),bt.rim.rotation.set(.2+Math.sin(Mt*.3+U)*.35,Mt*.18+U,Mt*.12),bt.rim2.rotation.z=-Mt*.12,bt.nucleus.position.set(Math.cos(Mt*.7+U)*.36,Math.sin(Mt*.7+U)*.36,.04)}),k.forEach(bt=>{T(bt,Mt);for(let U=0;U<4;U++){let Pt=(Mt*(.11+bt.index*.003)+U*.035+bt.index*.137)%1;lt(bt,Pt,Ft),E(Z,bt.index*4+U,Ft,U===0?.072:.044-U*.008)}}),Z.instanceMatrix.needsUpdate=!0;for(let bt=0;bt<N.count;bt++){let U=bt*2.39996+Mt*(bt%2?.024:-.019),Pt=1.4+bt%19*.12;Ft.set(Math.cos(U)*Pt,Math.sin(U)*Pt*.7,Math.sin(bt*5.1+Mt*.09)*1.7-.7),E(N,bt,Ft,.012+bt%4*.003)}N.instanceMatrix.needsUpdate=!0;for(let bt=0;bt<st.count;bt++){let U=bt/st.count*Math.PI*2+Mt*.1;Ft.set(Math.cos(U)*2.9,Math.sin(U)*2.9*.66,-.7),S.position.copy(Ft),S.rotation.set(.2,0,U),S.scale.set(.017,.065,.012),S.updateMatrix(),st.setMatrixAt(bt,S.matrix)}st.instanceMatrix.needsUpdate=!0;let Et=new L(0,.04,0),at=Math.max(5.15,6.9/St.aspect)*(1-.055*Math.sin(Mt*.21))/(2*Math.tan(Ne.degToRad(St.fov/2)));return St.position.set(Math.sin(ut.orbit)*at,.62+Math.sin(Mt*.17)*.18,Math.cos(ut.orbit)*at).add(Et),St.lookAt(Et),St.updateProjectionMatrix(),St.updateMatrixWorld(!0),F.position.set(0,ut.lift*.4,-1.1),F.quaternion.copy(St.quaternion),F.scale.setScalar(.92+ut.breath*.1),s.updateMatrixWorld(!0),dt.forEach((bt,U)=>{C.copy(bt.g.position),C.y+=U<2?.52:-.48,C.project(St);let Pt=Math.max(.15,Math.min(.85,C.x*.5+.5))*Xt.width,X=Math.max(.12,Math.min(.88,-C.y*.5+.5))*Xt.height;l[U]&&(l[U].style.transform=`translate3d(${Pt.toFixed(2)}px,${X.toFixed(2)}px,0) translate(-50%,-50%)`,l[U].dataset.active=String(ut.active===U))}),ut.phase!==Q&&(h&&(h.textContent=W[ut.phase][0]),u&&(u.textContent=W[ut.phase][1]),Q=ut.phase),c.dataset.rendered="true",c.dataset.motionTime=Mt.toFixed(2),c.dataset.coreYaw=ut.yaw.toFixed(3),c.dataset.packetPhase=(Mt*.11%1).toFixed(3),ut}let ht=0;return n.traverse(pt=>{pt.isMesh&&ht++}),c.dataset.reactorMeshes=ht,{group:n,update:Tt,dispose(){s.remove(n),n.traverse(pt=>{pt.isInstancedMesh&&pt.dispose()}),r.forEach(pt=>pt.dispose()),o.forEach(pt=>pt.dispose()),a.forEach(pt=>pt.dispose())}}}function of(s){let t=[...document.querySelectorAll("[data-scene-window]")].map(o=>({el:o,id:o.dataset.sceneWindow,section:o.closest("[data-chapter]")})),e=!0,n=null,i=()=>{e=!0},r=new ResizeObserver(i);return t.forEach(({el:o})=>r.observe(o)),addEventListener("scroll",i,{passive:!0}),addEventListener("resize",i,{passive:!0}),{read(){if(!e)return n;e=!1;let o=document.getElementById("header").offsetHeight,a=null,c=0;for(let M of t){let v=M.el.getBoundingClientRect(),x=Math.max(0,Math.min(innerHeight,v.bottom)-Math.max(o,v.top)),A=Math.max(0,Math.min(innerWidth,v.right)-Math.max(0,v.left));A*x>c&&(c=A*x,a={...M,rect:v})}if(!a||c<800)return s.style.visibility="hidden",n=null,null;let{rect:l,section:h,id:u}=a,d=h.getBoundingClientRect(),f=h.querySelector(".section-pin"),g=h.querySelector(".cinematic-intro")?.offsetHeight||0,_=f&&getComputedStyle(f).position==="sticky",m=Math.max(0,Math.min(1,_?(-d.top-g)/Math.max(1,d.height-g-f.offsetHeight):(innerHeight*.45-d.top)/Math.max(1,d.height)));s.parentElement!==a.el&&a.el.appendChild(s),Object.assign(s.style,{left:"0",top:"0",width:`${l.width}px`,height:`${l.height}px`});let p=u==="problema"&&!_?Math.max(0,Math.min(1,(innerHeight*.85-l.top)/(l.height+innerHeight*.35))):m;return n={id:u,progress:p,width:Math.round(l.width),height:Math.round(l.height),rect:l},s.dataset.scene=u,s.dataset.progress=p.toFixed(4),n},invalidate:i,dispose(){r.disconnect(),removeEventListener("scroll",i),removeEventListener("resize",i)}}}function xi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function pf(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Mr={duration:.5,overwrite:!1,delay:0},Ih,Ke,Ae,Nn=1e8,Me=1/Nn,vh=Math.PI*2,hv=vh/4,uv=0,mf=Math.sqrt,dv=Math.cos,fv=Math.sin,Xe=function(t){return typeof t=="string"},Ue=function(t){return typeof t=="function"},vi=function(t){return typeof t=="number"},Ba=function(t){return typeof t>"u"},ei=function(t){return typeof t=="object"},mn=function(t){return t!==!1},Dh=function(){return typeof window<"u"},Ca=function(t){return Ue(t)||Xe(t)},gf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},sn=Array.isArray,Mh=/(?:-?\.?\d|\.)+/gi,Lh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Uh=/[+-]=-?[.\d]+/,_f=/[^,'"\[\]\s]+/gi,pv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pe,jn,Sh,Oh,wn={},La={},xf,yf=function(t){return(La=Sr(t,wn))&&rn},za=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},po=function(t,e){return!e&&console.warn(t)},vf=function(t,e){return t&&(wn[t]=e)&&La&&(La[t]=e)||wn},mo=function(){return 0},mv={suppressEvents:!0,isStart:!0,kill:!1},Pa={suppressEvents:!0,kill:!1},gv={suppressEvents:!0},Nh={},Wi=[],Eh={},Mf,fn={},ph={},af=30,Ia=[],Fh="",Bh=function(t){var e=t[0],n,i;if(ei(e)||Ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ia.length;i--&&!Ia[i].targetTest(e););n=Ia[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Vh(t[i],n)))||t.splice(i,1);return t},Xi=function(t){return t._gsap||Bh(Fn(t))[0]._gsap},zh=function(t,e,n){return(n=t[e])&&Ue(n)?t[e]():Ba(n)&&t.getAttribute&&t.getAttribute(e)||n},ln=function(t,e){return(t=t.split(",")).forEach(e)||t},Oe=function(t){return Math.round(t*1e5)/1e5||0},ke=function(t){return Math.round(t*1e7)/1e7||0},ws=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},_v=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ua=function(){var t=Wi.length,e=Wi.slice(0),n,i;for(Eh={},Wi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},kh=function(t){return!!(t._initted||t._startAt||t.add)},Sf=function(t,e,n,i){Wi.length&&!Ke&&Ua(),t.render(e,n,i||!!(Ke&&e<0&&kh(t))),Wi.length&&!Ke&&Ua()},Ef=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(_f).length<2?e:Xe(t)?t.trim():t},bf=function(t){return t},An=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},xv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Sr=function(t,e){for(var n in e)t[n]=e[n];return t},cf=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ei(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Oa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ho=function(t){var e=t.parent||Pe,n=t.keyframes?xv(sn(t.keyframes)):An;if(mn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},yv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Tf=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},ka=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},qi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ss=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},vv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},bh=function(t,e,n,i){return t._startAt&&(Ke?t._startAt.revert(Pa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Mv=function s(t){return!t||t._ts&&s(t.parent)},lf=function(t){return t._repeat?Er(t._tTime,t=t.duration()+t._rDelay)*t:0},Er=function(t,e){var n=Math.floor(t=ke(t/e));return t&&n===t?n-1:n},Na=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ha=function(t){return t._end=ke(t._start+(t._tDur/Math.abs(t._ts||t._rts||Me)||0))},Va=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ke(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ha(t),n._dirty||Ss(n,t)),t},wf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Na(t.rawTime(),e),(!e._dur||xo(0,e.totalDuration(),n)-e._tTime>Me)&&e.render(n,!0)),Ss(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Me}},ti=function(t,e,n,i){return e.parent&&qi(e),e._start=ke((vi(n)?n:n||t!==Pe?On(t,n,e):t._time)+e._delay),e._end=ke(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Tf(t,e,"_first","_last",t._sort?"_start":0),Th(e)||(t._recent=e),i||wf(t,e),t._ts<0&&Va(t,t._tTime),t},Af=function(t,e){return(wn.ScrollTrigger||za("scrollTrigger",e))&&wn.ScrollTrigger.create(e,t)},Rf=function(t,e,n,i,r){if(Xh(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Ke&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Mf!==pn.frame)return Wi.push(t),t._lazy=[r,i],1},Sv=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Th=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ev=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Sv(t)&&!(!t._initted&&Th(t))||(t._ts<0||t._dp._ts<0)&&!Th(t))?0:1,a=t._rDelay,c=0,l,h,u;if(a&&t._repeat&&(c=xo(0,t._tDur,e),h=Er(c,a),t._yoyo&&h&1&&(o=1-o),h!==Er(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Ke||i||t._zTime===Me||!e&&t._zTime){if(!t._initted&&Rf(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?Me:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&bh(t,e,n,!0),t._onUpdate&&!n&&Tn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&Tn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&qi(t,1),!n&&!Ke&&(Tn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},bv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},br=function(t,e,n,i){var r=t._repeat,o=ke(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:ke(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Va(t,t._tTime=t._tDur*a),t.parent&&Ha(t),n||Ss(t.parent,t),t},hf=function(t){return t instanceof Je?Ss(t):br(t,t._dur)},Tv={_start:0,endTime:mo,totalDuration:mo},On=function s(t,e,n){var i=t.labels,r=t._recent||Tv,o=t.duration()>=Nn?r.endTime(!1):t._dur,a,c,l;return Xe(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(sn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},uo=function(t,e,n){var i=vi(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=mn(c.vars.inherit)&&c.parent;o.immediateRender=mn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Fe(e[0],o,e[r+1])},Yi=function(t,e){return t||t===0?e(t):e},xo=function(t,e,n){return n<t?t:n>e?e:n},Qe=function(t,e){return!Xe(t)||!(e=pv.exec(t))?"":e[1]},wv=function(t,e,n){return Yi(n,function(i){return xo(t,e,i)})},wh=[].slice,Cf=function(t,e){return t&&ei(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ei(t[0]))&&!t.nodeType&&t!==jn},Av=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Xe(i)&&!e||Cf(i,1)?(r=n).push.apply(r,Fn(i)):n.push(i)})||n},Fn=function(t,e,n){return Ae&&!e&&Ae.selector?Ae.selector(t):Xe(t)&&!n&&(Sh||!Tr())?wh.call((e||Oh).querySelectorAll(t),0):sn(t)?Av(t,n):Cf(t)?wh.call(t,0):t?[t]:[]},Ah=function(t){return t=Fn(t)[0]||po("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Fn(e,n.querySelectorAll?n:n===t?po("Invalid scope")||Oh.createElement("div"):t)}},Pf=function(t){return t.sort(function(){return .5-Math.random()})},If=function(t){if(Ue(t))return t;var e=ei(t)?t:{each:t},n=Es(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,h=i,u=i;return Xe(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||e).length,m=o[_],p,M,v,x,A,b,w,P,S;if(!m){if(S=e.grid==="auto"?0:(e.grid||[1,Nn])[1],!S){for(w=-Nn;w<(w=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],p=c?Math.min(S,_)*h-.5:i%S,M=S===Nn?0:c?_*u/S-.5:i/S|0,w=0,P=Nn,b=0;b<_;b++)v=b%S-p,x=M-(b/S|0),m[b]=A=l?Math.abs(l==="y"?x:v):mf(v*v+x*x),A>w&&(w=A),A<P&&(P=A);i==="random"&&Pf(m),m.max=w-P,m.min=P,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:l?l==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Qe(e.amount||e.each)||0,n=n&&_<0?kf(n):n}return _=(m[d]-m.min)/m.max||0,ke(m.b+(n?n(_):_)*m.v)+m.u}},Rh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ke(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(vi(n)?0:Qe(n))}},Df=function(t,e){var n=sn(t),i,r;return!n&&ei(t)&&(i=n=t.radius||Nn,t.values?(t=Fn(t.values),(r=!vi(t[0]))&&(i*=i)):t=Rh(t.increment)),Yi(e,n?Ue(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=Nn,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-a,f=t[u].y-c,d=d*d+f*f):d=Math.abs(t[u]-a),d<l&&(l=d,h=u);return h=!i||l<=i?t[h]:o,r||h===o||vi(o)?h:h+Qe(o)}:Rh(t))},Lf=function(t,e,n,i){return Yi(sn(t)?!e:n===!0?!!(n=0):!i,function(){return sn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Rv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Cv=function(t,e){return function(n){return t(parseFloat(n))+(e||Qe(n))}},Pv=function(t,e,n){return Of(t,e,0,1,n)},Uf=function(t,e,n){return Yi(n,function(i){return t[~~e(i)]})},Iv=function s(t,e,n){var i=e-t;return sn(t)?Uf(t,s(0,t.length),e):Yi(n,function(r){return(i+(r-t)%i)%i+t})},Dv=function s(t,e,n){var i=e-t,r=i*2;return sn(t)?Uf(t,s(0,t.length-1),e):Yi(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},wr=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?_f:Mh),n+=t.substr(e,i-e)+Lf(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Of=function(t,e,n,i,r){var o=e-t,a=i-n;return Yi(r,function(c){return n+((c-t)/o*a||0)})},Lv=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=Xe(t),a={},c,l,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(sn(t)&&!sn(e)){for(h=[],u=t.length,d=u-2,l=1;l<u;l++)h.push(s(t[l-1],t[l]));u--,r=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=e}else i||(t=Sr(sn(t)?[]:{},t));if(!h){for(c in e)Gh.call(a,t,c,"get",e[c]);r=function(g){return Zh(g,a)||(o?t.p:t)}}}return Yi(n,r)},uf=function(t,e,n){var i=t.labels,r=Nn,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},Tn=function(t,e,n){var i=t.vars,r=i[e],o=Ae,a=t._ctx,c,l,h;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&Wi.length&&Ua(),a&&(Ae=a),h=c?r.apply(l,c):r.call(l),Ae=o,h},co=function(t){return qi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ke),t.progress()<1&&Tn(t,"onInterrupt"),t},vr,Nf=[],Ff=function(t){if(t)if(t=!t.name&&t.default||t,Dh()||t.headless){var e=t.name,n=Ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:mo,render:Zh,add:Gh,kill:$v,modifier:Zv,rawVars:0},o={targetTest:0,get:0,getSetter:Ga,aliases:{},register:0};if(Tr(),t!==i){if(fn[e])return;An(i,An(Oa(t,r),o)),Sr(i.prototype,Sr(r,Oa(t,o))),fn[i.prop=e]=i,t.targetTest&&(Ia.push(i),Nh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}vf(e,i),t.register&&t.register(rn,i,hn)}else Nf.push(t)},ve=255,lo={aqua:[0,ve,ve],lime:[0,ve,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ve],navy:[0,0,128],white:[ve,ve,ve],olive:[128,128,0],yellow:[ve,ve,0],orange:[ve,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ve,0,0],pink:[ve,192,203],cyan:[0,ve,ve],transparent:[ve,ve,ve,0]},mh=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ve+.5|0},Bf=function(t,e,n){var i=t?vi(t)?[t>>16,t>>8&ve,t&ve]:0:lo.black,r,o,a,c,l,h,u,d,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),lo[t])i=lo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ve,i&ve,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ve,t&ve]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Mh),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(l+1):h+l-h*l,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=mh(c+1/3,r,o),i[1]=mh(c,r,o),i[2]=mh(c-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Lh),n&&i.length<4&&(i[3]=1),i}else i=t.match(Mh)||lo.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/ve,o=i[1]/ve,a=i[2]/ve,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?c=l=0:(f=u-d,l=h>.5?f/(2-u-d):f/(u+d),c=u===r?(o-a)/f+(o<a?6:0):u===o?(a-r)/f+2:(r-o)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},zf=function(t){var e=[],n=[],i=-1;return t.split(yi).forEach(function(r){var o=r.match(Ts)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},df=function(t,e,n){var i="",r=(t+i).match(yi),o=e?"hsla(":"rgba(",a=0,c,l,h,u;if(!r)return t;if(r=r.map(function(d){return(d=Bf(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=zf(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(yi,"1").split(Ts),u=l.length-1;a<u;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!l)for(l=t.split(yi),u=l.length-1;a<u;a++)i+=l[a]+r[a];return i+l[u]},yi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in lo)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Uv=/hsl[a]?\(/,Hh=function(t){var e=t.join(" "),n;if(yi.lastIndex=0,yi.test(e))return n=Uv.test(e),t[1]=df(t[1],n),t[0]=df(t[0],n,zf(t[1])),!0},go,pn=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,h,u,d,f,g=function _(m){var p=s()-i,M=m===!0,v,x,A,b;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,v=A-o,(v>0||M)&&(b=++u.frame,d=A-u.time*1e3,u.time=A=A/1e3,o+=v+(v>=r?4:r-v),x=1),M||(c=l(_)),x)for(f=0;f<a.length;f++)a[f](A,d,b,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){xf&&(!Sh&&Dh()&&(jn=Sh=window,Oh=jn.document||{},wn.gsap=rn,(jn.gsapVersions||(jn.gsapVersions=[])).push(rn.version),yf(La||jn.GreenSockGlobals||!jn.gsap&&jn||{}),Nf.forEach(Ff)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},go=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),go=0,l=mo},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,p,M){var v=p?function(x,A,b,w){m(x,A,b,w),u.remove(v)}:m;return u.remove(m),a[M?"unshift":"push"](v),Tr(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u}(),Tr=function(){return!go&&pn.wake()},oe={},Ov=/^[\d.\-M][\d.\-,\s]/,Nv=/["']/g,Fv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(Nv,"").trim():+l,i=c.substr(a+1).trim();return e},Bv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},zv=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Fv(e[1])]:Bv(t).split(",").map(Ef)):oe._CE&&Ov.test(t)?oe._CE("",t):n},kf=function(t){return function(e){return 1-t(1-e)}},Hf=function s(t,e){for(var n=t._first,i;n;)n instanceof Je?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Es=function(t,e){return t&&(Ue(t)?t:oe[t]||zv(t))||e},As=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return ln(t,function(a){oe[a]=wn[a]=r,oe[o=a.toLowerCase()]=n;for(var c in r)oe[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=oe[a+"."+c]=r[c]}),r},Vf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},gh=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/vh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*fv((h-o)*r)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:Vf(a);return r=vh/r,c.config=function(l,h){return s(t,l,h)},c},_h=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Vf(n);return i.config=function(r){return s(t,r)},i};ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;As(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;As("Elastic",gh("in"),gh("out"),gh());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};As("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);As("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});As("Circ",function(s){return-(mf(1-s*s)-1)});As("Sine",function(s){return s===1?1:-dv(s*hv)+1});As("Back",_h("in"),_h("out"),_h());oe.SteppedEase=oe.steps=wn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Me;return function(a){return((i*xo(0,o,a)|0)+r)*n}}};Mr.ease=oe["quad.out"];ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Fh+=s+","+s+"Params,"});var Vh=function(t,e){this.id=uv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:zh,this.set=e?e.getSetter:Ga},_o=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,br(this,+e.duration,1,1),this.data=e.data,Ae&&(this._ctx=Ae,Ae.data.push(this)),go||pn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,br(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Tr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Va(this,n),!r._dp||r.parent||wf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ti(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Me||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Sf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+lf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+lf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Er(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Me?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Na(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Me?0:this._rts,this.totalTime(xo(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Ha(this),vv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Tr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Me&&(this._tTime-=Me)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ti(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Na(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=gv);var i=Ke;return Ke=n,kh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ke=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(On(this,n),mn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,mn(i)),this._dur||(this._zTime=-Me),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Me:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Me,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Me)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=Ue(n)?n:bf,a=function(){var l=i.then;i.then=null,Ue(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){co(this)},s}();An(_o.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Me,_prom:0,_ps:!1,_rts:1});var Je=function(s){pf(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=mn(n.sortChildren),Pe&&ti(n.parent||Pe,xi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Af(xi(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return uo(0,arguments,this),this},e.from=function(i,r,o){return uo(1,arguments,this),this},e.fromTo=function(i,r,o,a){return uo(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,ho(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Fe(i,r,On(this,o),1),this},e.call=function(i,r,o){return ti(this,Fe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,c,l,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=h,o.parent=this,new Fe(i,o,On(this,c)),this},e.staggerFrom=function(i,r,o,a,c,l,h){return o.runBackwards=1,ho(o).immediateRender=mn(o.immediateRender),this.staggerTo(i,r,o,a,c,l,h)},e.staggerFromTo=function(i,r,o,a,c,l,h,u){return a.startAt=o,ho(a).immediateRender=mn(a.immediateRender),this.staggerTo(i,r,a,c,l,h,u)},e.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:ke(i),u=this._zTime<0!=i<0&&(this._initted||!l),d,f,g,_,m,p,M,v,x,A,b,w;if(this!==Pe&&h>c&&i>=0&&(h=c),h!==this._tTime||o||u){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),d=h,x=this._start,v=this._ts,p=!v,u&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=ke(h%m),h===c?(_=this._repeat,d=l):(A=ke(h/m),_=~~A,_&&_===A&&(d=l,_--),d>l&&(d=l)),A=Er(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),b&&_&1&&(d=l-d,w=1),_!==A&&!this._lock){var P=b&&A&1,S=P===(b&&_&1);if(_<A&&(P=!P),a=P?0:h%l?l:h,this._lock=1,this.render(a||(w?0:ke(_*m)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&Tn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,S&&(this._lock=2,a=P?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Hf(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=bv(this,ke(a),ke(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!r&&!A&&(Tn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!p){M=0,g&&(h+=this._zTime=-Me);break}}f=g}else{f=this._last;for(var y=i<0?i:d;f;){if(g=f._prev,(f._act||y<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,r,o||Ke&&kh(f)),d!==this._time||!this._ts&&!p){M=0,g&&(h+=this._zTime=y?-Me:Me);break}}f=g}}if(M&&!r&&(this.pause(),M.render(d>=a?0:-Me)._zTime=d>=a?1:-1,this._ts))return this._start=x,Ha(this),this.render(i,r,o);this._onUpdate&&!r&&Tn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&qi(this,1),!r&&!(i<0&&!a)&&(h||a||!c)&&(Tn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(vi(r)||(r=On(this,r,i)),!(i instanceof _o)){if(sn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Xe(i))return this.addLabel(i,r);if(Ue(i))i=Fe.delayedCall(0,i);else return this}return this!==i?ti(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Nn);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Fe?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return Xe(i)?this.removeLabel(i):Ue(i)?this.killTweensOf(i):(i.parent===this&&ka(this,i),i===this._recent&&(this._recent=this._last),Ss(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ke(pn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=On(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Fe.delayedCall(0,r||mo,o);return a.data="isPause",this._hasPause=1,ti(this,a,On(this,i))},e.removePause=function(i){var r=this._first;for(i=On(this,i);r;)r._start===i&&r.data==="isPause"&&qi(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Gi!==a[c]&&a[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Fn(i),c=this._first,l=vi(r),h;c;)c instanceof Fe?_v(c._targets,a)&&(l?(!Gi||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(h=c.getTweensOf(a,r)).length&&o.push.apply(o,h),c=c._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=On(o,i),c=r,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,f,g=Fe.to(o,An({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Me,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==m&&br(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},r));return d?g.render(0):g},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,An({startAt:{time:On(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),uf(this,On(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),uf(this,On(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Me)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return Ss(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ss(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,c=Nn,l,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,ti(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;br(o,o===Pe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Pe._ts&&(Sf(Pe,Na(i,Pe)),Mf=pn.frame),pn.frame>=af){af+=gn.autoSleep||120;var r=Pe._first;if((!r||!r._ts)&&gn.autoSleep&&pn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||pn.sleep()}}},t}(_o);An(Je.prototype,{_lock:0,_hasPause:0,_forcing:0});var kv=function(t,e,n,i,r,o,a){var c=new hn(this._pt,t,e,0,1,Yh,null,r),l=0,h=0,u,d,f,g,_,m,p,M;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=wr(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),d=n.match(fh)||[];u=fh.exec(i);)g=u[0],_=i.substring(l,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?ws(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},l=fh.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(Uh.test(i)||p)&&(c.e=0),this._pt=c,c},Gh=function(t,e,n,i,r,o,a,c,l,h){Ue(i)&&(i=i(r||0,t,o));var u=t[e],d=n!=="get"?n:Ue(u)?l?t[e.indexOf("set")||!Ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,f=Ue(u)?l?Xv:Xf:qh,g;if(Xe(i)&&(~i.indexOf("random(")&&(i=wr(i)),i.charAt(1)==="="&&(g=ws(d,i)+(Qe(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Ch)return!isNaN(d*i)&&i!==""?(g=new hn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?Yv:qf,0,f),l&&(g.fp=l),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&za(e,i),kv.call(this,t,e,d,i,f,c||gn.stringFilter,l))},Hv=function(t,e,n,i,r){if(Ue(t)&&(t=fo(t,r,e,n,i)),!ei(t)||t.style&&t.nodeType||sn(t)||gf(t))return Xe(t)?fo(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=fo(t[a],r,e,n,i);return o},Wh=function(t,e,n,i,r,o){var a,c,l,h;if(fn[t]&&(a=new fn[t]).init(r,a.rawVars?e[t]:Hv(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new hn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==vr))for(l=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)l[a._props[h]]=c;return a},Gi,Ch,Xh=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,v=t._overwrite==="auto"&&!Ih,x=t.timeline,A,b,w,P,S,y,C,H,z,V,Y,D,ot;if(x&&(!d||!r)&&(r="none"),t._ease=Es(r,Mr.ease),t._yEase=u?kf(Es(u===!0?r:u,Mr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(H=m[0]?Xi(m[0]).harness:0,D=H&&i[H.prop],A=Oa(i,Nh),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&g?Pa:mv),_._lazy=0),o){if(qi(t._startAt=Fe.set(m,An({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&mn(c),startAt:null,delay:0,onUpdate:l&&function(){return Tn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ke||!a&&!f)&&t._startAt.revert(Pa),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),w=An({overwrite:!1,data:"isFromStart",lazy:a&&!_&&mn(c),immediateRender:a,stagger:0,parent:p},A),D&&(w[H.prop]=D),qi(t._startAt=Fe.set(m,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ke?t._startAt.revert(Pa):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Me,Me);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&mn(c)||c&&!g,b=0;b<m.length;b++){if(S=m[b],C=S._gsap||Bh(m)[b]._gsap,t._ptLookup[b]=V={},Eh[C.id]&&Wi.length&&Ua(),Y=M===m?b:M.indexOf(S),H&&(z=new H).init(S,D||A,t,Y,M)!==!1&&(t._pt=P=new hn(t._pt,S,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function($){V[$]=P}),z.priority&&(y=1)),!H||D)for(w in A)fn[w]&&(z=Wh(w,A,t,Y,S,M))?z.priority&&(y=1):V[w]=P=Gh.call(t,S,w,"get",A[w],Y,M,0,i.stringFilter);t._op&&t._op[b]&&t.kill(S,t._op[b]),v&&t._pt&&(Gi=t,Pe.killTweensOf(S,V,t.globalTime(e)),ot=!t.parent,Gi=0),t._pt&&c&&(Eh[C.id]=1)}y&&$h(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!ot,d&&e<=0&&x.render(Nn,!0,!0)},Vv=function(t,e,n,i,r,o,a,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Ch=1,t.vars[e]="+=0",Xh(t,a),Ch=0,c?po(e+" not eligible for reset"):1;l.push(h)}for(f=l.length;f--;)u=l[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Oe(n)+Qe(u.e)),u.b&&(u.b=h.s+Qe(u.b))},Gv=function(t,e){var n=t[0]?Xi(t[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return e;r=Sr({},e);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},Wv=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(sn(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},fo=function(t,e,n,i,r){return Ue(t)?t.call(e,n,i,r):Xe(t)&&~t.indexOf("random(")?wr(t):t},Gf=Fh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Wf={};ln(Gf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Wf[s]=1});var Fe=function(s){pf(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:ho(i))||this;var c=a.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,f=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,M=i.parent||Pe,v=(sn(n)||gf(n)?vi(n[0]):"length"in i)?[n]:Fn(n),x,A,b,w,P,S,y,C;if(a._targets=v.length?Bh(v):po("GSAP target "+n+" not found. https://gsap.com",!gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||Ca(l)||Ca(h)){if(i=a.vars,x=a.timeline=new Je({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:v}),x.kill(),x.parent=x._dp=xi(a),x._start=0,d||Ca(l)||Ca(h)){if(w=v.length,y=d&&If(d),ei(d))for(P in d)~Gf.indexOf(P)&&(C||(C={}),C[P]=d[P]);for(A=0;A<w;A++)b=Oa(i,Wf),b.stagger=0,p&&(b.yoyoEase=p),C&&Sr(b,C),S=v[A],b.duration=+fo(l,xi(a),A,S,v),b.delay=(+fo(h,xi(a),A,S,v)||0)-a._delay,!d&&w===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),x.to(S,b,y?y(A,S,v):0),x._ease=oe.none;x.duration()?l=h=0:a.timeline=0}else if(g){ho(An(x.vars.defaults,{ease:"none"})),x._ease=Es(g.ease||i.ease||"none");var H=0,z,V,Y;if(sn(g))g.forEach(function(D){return x.to(v,D,">")}),x.duration();else{b={};for(P in g)P==="ease"||P==="easeEach"||Wv(P,g[P],b,g.easeEach);for(P in b)for(z=b[P].sort(function(D,ot){return D.t-ot.t}),H=0,A=0;A<z.length;A++)V=z[A],Y={ease:V.e,duration:(V.t-(A?z[A-1].t:0))/100*l},Y[P]=V.v,x.to(v,Y,H),H+=Y.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||a.duration(l=x.duration())}else a.timeline=0;return f===!0&&!Ih&&(Gi=xi(a),Pe.killTweensOf(v),Gi=0),ti(M,xi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!l&&!g&&a._start===ke(M._time)&&mn(u)&&Mv(xi(a))&&M.data!=="nested")&&(a._tTime=-Me,a.render(Math.max(0,-h)||0)),m&&Af(xi(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-Me&&!h?c:i<Me?0:i,d,f,g,_,m,p,M,v,x;if(!l)Ev(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,v=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(d=ke(u%_),u===c?(g=this._repeat,d=l):(m=ke(u/_),g=~~m,g&&g===m?(d=l,g--):d>l&&(d=l)),p=this._yoyo&&g&1,p&&(x=this._yEase,d=l-d),m=Er(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(v&&this._yEase&&Hf(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(ke(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Rf(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(x||this._ease)(d/l),this._from&&(this.ratio=M=1-M),!a&&u&&!r&&!m&&(Tn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&bh(this,i,r,o),Tn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Tn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&bh(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&qi(this,1),!r&&!(h&&!a)&&(u||a||p)&&(Tn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,c){go||pn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Xh(this,l),h=this._ease(l/this._dur),Vv(this,i,r,o,a,h,l,c)?this.resetTo(i,r,o,a,1):(Va(this,0),this.parent||Tf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?co(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ke),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Gi&&Gi.vars.overwrite!==!0)._first||co(this),this.parent&&o!==this.timeline.totalDuration()&&br(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?Fn(i):a,l=this._ptLookup,h=this._pt,u,d,f,g,_,m,p;if((!r||r==="all")&&yv(a,c))return r==="all"&&(this._pt=0),co(this);for(u=this._op=this._op||[],r!=="all"&&(Xe(r)&&(_={},ln(r,function(M){return _[M]=1}),r=_),r=Gv(a,r)),p=a.length;p--;)if(~c.indexOf(a[p])){d=l[p],r==="all"?(u[p]=r,g=d,f={}):(f=u[p]=u[p]||{},g=r);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ka(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&co(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return uo(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return uo(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Pe.killTweensOf(i,r,o)},t}(_o);An(Fe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ln("staggerTo,staggerFrom,staggerFromTo",function(s){Fe[s]=function(){var t=new Je,e=wh.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var qh=function(t,e,n){return t[e]=n},Xf=function(t,e,n){return t[e](n)},Xv=function(t,e,n,i){return t[e](i.fp,n)},qv=function(t,e,n){return t.setAttribute(e,n)},Ga=function(t,e){return Ue(t[e])?Xf:Ba(t[e])&&t.setAttribute?qv:qh},qf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Yv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Yh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Zh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Zv=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},$v=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ka(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Jv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},$h=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},hn=function(){function s(e,n,i,r,o,a,c,l,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||qf,this.d=c||this,this.set=l||qh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Jv,this.m=n,this.mt=r,this.tween=i},s}();ln(Fh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Nh[s]=1});wn.TweenMax=wn.TweenLite=Fe;wn.TimelineLite=wn.TimelineMax=Je;Pe=new Je({sortChildren:!1,defaults:Mr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gn.stringFilter=Hh;var bs=[],Da={},Kv=[],ff=0,Qv=0,xh=function(t){return(Da[t]||Kv).map(function(e){return e()})},Ph=function(){var t=Date.now(),e=[];t-ff>2&&(xh("matchMediaInit"),bs.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=jn.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),xh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ff=t,xh("matchMedia"))},Yf=function(){function s(e,n){this.selector=n&&Ah(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Qv++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ue(n)&&(r=i,i=n,n=Ue);var o=this,a=function(){var l=Ae,h=o.selector,u;return l&&l!==o&&l.data.push(o),r&&(o.selector=Ah(r)),Ae=o,u=i.apply(o,arguments),Ue(u)&&o._r.push(u),Ae=l,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ue?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},t.ignore=function(n){var i=Ae;Ae=null,n(this),Ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Fe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof Je?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Fe)&&l.revert&&l.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=bs.length;o--;)bs[o].id===this.id&&bs.splice(o,1)},t.revert=function(n){this.kill(n||{})},s}(),jv=function(){function s(e){this.contexts=[],this.scope=e,Ae&&Ae.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){ei(n)||(n={matches:n});var o=new Yf(0,r||this.scope),a=o.conditions={},c,l,h;Ae&&!o.selector&&(o.selector=Ae.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?h=1:(c=jn.matchMedia(n[l]),c&&(bs.indexOf(o)<0&&bs.push(o),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener(Ph):c.addEventListener("change",Ph)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Fa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Ff(i)})},timeline:function(t){return new Je(t)},getTweensOf:function(t,e){return Pe.getTweensOf(t,e)},getProperty:function(t,e,n,i){Xe(t)&&(t=Fn(t)[0]);var r=Xi(t||{}).get,o=n?bf:Ef;return n==="native"&&(n=""),t&&(e?o((fn[e]&&fn[e].get||r)(t,e,n,i)):function(a,c,l){return o((fn[a]&&fn[a].get||r)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=Fn(t),t.length>1){var i=t.map(function(h){return rn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=fn[e],a=Xi(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(h){var u=new o;vr._pt=0,u.init(t,n?h+n:h,vr,0,[t]),u.render(1,u),vr._pt&&Zh(1,vr)}:a.set(t,c);return o?l:function(h){return l(t,c,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=rn.to(t,An((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,l,h){return r.resetTo(e,c,l,h)};return o.tween=r,o},isTweening:function(t){return Pe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Es(t.ease,Mr.ease)),cf(Mr,t||{})},config:function(t){return cf(gn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!fn[a]&&!wn[a]&&po(e+" effect requires "+a+" plugin.")}),ph[e]=function(a,c,l){return n(Fn(a),An(c||{},r),l)},o&&(Je.prototype[e]=function(a,c,l){return this.add(ph[e](a,ei(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){oe[t]=Es(e)},parseEase:function(t,e){return arguments.length?Es(t,e):oe},getById:function(t){return Pe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Je(t),i,r;for(n.smoothChildTiming=mn(t.smoothChildTiming),Pe.remove(n),n._dp=0,n._time=n._tTime=Pe._time,i=Pe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Fe&&i.vars.onComplete===i._targets[0]))&&ti(n,i,i._start-i._delay),i=r;return ti(Pe,n,0),n},context:function(t,e){return t?new Yf(t,e):Ae},matchMedia:function(t){return new jv(t)},matchMediaRefresh:function(){return bs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ph()},addEventListener:function(t,e){var n=Da[t]||(Da[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Da[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Iv,wrapYoyo:Dv,distribute:If,random:Lf,snap:Df,normalize:Pv,getUnit:Qe,clamp:wv,splitColor:Bf,toArray:Fn,selector:Ah,mapRange:Of,pipe:Rv,unitize:Cv,interpolate:Lv,shuffle:Pf},install:yf,effects:ph,ticker:pn,updateRoot:Je.updateRoot,plugins:fn,globalTimeline:Pe,core:{PropTween:hn,globals:vf,Tween:Fe,Timeline:Je,Animation:_o,getCache:Xi,_removeLinkedListItem:ka,reverting:function(){return Ke},context:function(t){return t&&Ae&&(Ae.data.push(t),t._ctx=Ae),Ae},suppressOverwrites:function(t){return Ih=t}}};ln("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Fa[s]=Fe[s]});pn.add(Je.updateRoot);vr=Fa.to({},{duration:0});var t1=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},e1=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=t1(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},yh=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(Xe(r)&&(c={},ln(r,function(h){return c[h]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}e1(a,r)}}}},rn=Fa.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Ke?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},yh("roundProps",Rh),yh("modifiers"),yh("snap",Df))||Fa;Fe.version=Je.version=rn.version="3.13.0";xf=1;Dh()&&Tr();var n1=oe.Power0,i1=oe.Power1,s1=oe.Power2,r1=oe.Power3,o1=oe.Power4,a1=oe.Linear,c1=oe.Quad,l1=oe.Cubic,h1=oe.Quart,u1=oe.Quint,d1=oe.Strong,f1=oe.Elastic,p1=oe.Back,m1=oe.SteppedEase,g1=oe.Bounce,_1=oe.Sine,x1=oe.Expo,y1=oe.Circ;var Zf,Zi,Rr,eu,Is,v1,$f,nu,M1=function(){return typeof window<"u"},Si={},Ps=180/Math.PI,Cr=Math.PI/180,Ar=Math.atan2,Jf=1e8,iu=/([A-Z])/g,S1=/(left|right|width|margin|padding|x)/i,E1=/[\s,\(]\S/,ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Kh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},b1=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},T1=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},w1=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},sp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},rp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},A1=function(t,e,n){return t.style[e]=n},R1=function(t,e,n){return t.style.setProperty(e,n)},C1=function(t,e,n){return t._gsap[e]=n},P1=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},I1=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},D1=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Ie="transform",_n=Ie+"Origin",L1=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in Si&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ni[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Mi(i,a)}):this.tfm[t]=o.x?o[t]:Mi(i,t),t===_n&&(this.tfm.zOrigin=o.zOrigin);else return ni.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Ie)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(_n,e,"")),t=Ie}(r||e)&&this.props.push(t,e,r[t])},op=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},U1=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(iu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=nu(),(!r||!r.isStart)&&!n[Ie]&&(op(n),i.zOrigin&&n[_n]&&(n[_n]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ap=function(t,e){var n={target:t,props:[],revert:U1,save:L1};return t._gsap||rn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},cp,Qh=function(t,e){var n=Zi.createElementNS?Zi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Zi.createElement(t);return n&&n.style?n:Zi.createElement(t)},Bn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(iu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Pr(e)||e,1)||""},Kf="O,Moz,ms,Ms,Webkit".split(","),Pr=function(t,e,n){var i=e||Is,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Kf[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Kf[o]:"")+t},jh=function(){M1()&&window.document&&(Zf=window,Zi=Zf.document,Rr=Zi.documentElement,Is=Qh("div")||{style:{}},v1=Qh("div"),Ie=Pr(Ie),_n=Ie+"Origin",Is.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cp=!!Pr("perspective"),nu=rn.core.reverting,eu=1)},Qf=function(t){var e=t.ownerSVGElement,n=Qh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Rr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Rr.removeChild(n),r},jf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},lp=function(t){var e,n;try{e=t.getBBox()}catch{e=Qf(t),n=1}return e&&(e.width||e.height)||n||(e=Qf(t)),e&&!e.width&&!e.x&&!e.y?{x:+jf(t,["x","cx","x1"])||0,y:+jf(t,["y","cy","y1"])||0,width:0,height:0}:e},hp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&lp(t))},Ds=function(t,e){if(e){var n=t.style,i;e in Si&&e!==_n&&(e=Ie),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(iu,"-$1").toLowerCase())):n.removeAttribute(e)}},$i=function(t,e,n,i,r,o){var a=new hn(t._pt,e,n,0,1,o?rp:sp);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},tp={deg:1,rad:1,turn:1},O1={grid:1,flex:1},Ji=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Is.style,c=S1.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,m,p;if(i===o||!r||tp[i]||tp[o])return r;if(o!=="px"&&!d&&(r=s(t,e,n,"px")),p=t.getCTM&&hp(t),(f||o==="%")&&(Si[e]||~e.indexOf("adius")))return g=p?t.getBBox()[c?"width":"height"]:t[h],Oe(f?r/g*u:r/100*g);if(a[c?"width":"height"]=u+(d?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Zi||!_.appendChild)&&(_=Zi.body),m=_._gsap,m&&f&&m.width&&c&&m.time===pn.time&&!m.uncache)return Oe(r/m.width*u);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,g=t[h],M?t.style[e]=M:Ds(t,e)}else(f||o==="%")&&!O1[Bn(_,"display")]&&(a.position=Bn(t,"position")),_===t&&(a.position="static"),_.appendChild(Is),g=Is[h],_.removeChild(Is),a.position="absolute";return c&&f&&(m=Xi(_),m.time=pn.time,m.width=_[h]),Oe(d?g*r/u:g&&r?u/g*r:0)},Mi=function(t,e,n,i){var r;return eu||jh(),e in ni&&e!=="transform"&&(e=ni[e],~e.indexOf(",")&&(e=e.split(",")[0])),Si[e]&&e!=="transform"?(r=Mo(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Xa(Bn(t,_n))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Wa[e]&&Wa[e](t,e,n)||Bn(t,e)||zh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ji(t,e,r,n)+n:r},N1=function(t,e,n,i){if(!n||n==="none"){var r=Pr(e,t,1),o=r&&Bn(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Bn(t,"borderTopColor"))}var a=new hn(this._pt,t.style,e,0,1,Yh),c=0,l=0,h,u,d,f,g,_,m,p,M,v,x,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Bn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Bn(t,e)||i,_?t.style[e]=_:Ds(t,e)),h=[n,i],Hh(h),n=h[0],i=h[1],d=n.match(Ts)||[],A=i.match(Ts)||[],A.length){for(;u=Ts.exec(i);)m=u[0],M=i.substring(c,u.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=d[l++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=ws(f,m)+x),p=parseFloat(m),v=m.substr((p+"").length),c=Ts.lastIndex-v.length,v||(v=v||gn.units[e]||x,c===i.length&&(i+=v,a.e+=v)),x!==v&&(f=Ji(t,e,_,v)||0),a._pt={_next:a._pt,p:M||l===1?M:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?rp:sp;return Uh.test(i)&&(a.e=0),this._pt=a,a},ep={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},F1=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=ep[n]||n,e[1]=ep[i]||i,e.join(" ")},B1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],Si[a]&&(c=1,a=a==="transformOrigin"?_n:Ie),Ds(n,a);c&&(Ds(n,Ie),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Mo(n,1),o.uncache=1,op(i)))}},Wa={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new hn(t._pt,e,n,0,0,B1);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},vo=[1,0,0,1,0,0],up={},dp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},np=function(t){var e=Bn(t,Ie);return dp(e)?vo:e.substr(7).match(Lh).map(Oe)},su=function(t,e){var n=t._gsap||Xi(t),i=t.style,r=np(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?vo:r):(r===vo&&!t.offsetParent&&t!==Rr&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,a=t.nextElementSibling,Rr.appendChild(t)),r=np(t),c?i.display=c:Ds(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):Rr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},tu=function(t,e,n,i,r,o){var a=t._gsap,c=r||su(t,!0),l=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=c[0],g=c[1],_=c[2],m=c[3],p=c[4],M=c[5],v=e.split(" "),x=parseFloat(v[0])||0,A=parseFloat(v[1])||0,b,w,P,S;n?c!==vo&&(w=f*m-g*_)&&(P=x*(m/w)+A*(-_/w)+(_*M-m*p)/w,S=x*(-g/w)+A*(f/w)-(f*M-g*p)/w,x=P,A=S):(b=lp(t),x=b.x+(~v[0].indexOf("%")?x/100*b.width:x),A=b.y+(~(v[1]||v[0]).indexOf("%")?A/100*b.height:A)),i||i!==!1&&a.smooth?(p=x-l,M=A-h,a.xOffset=u+(p*f+M*_)-p,a.yOffset=d+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[_n]="0px 0px",o&&($i(o,a,"xOrigin",l,x),$i(o,a,"yOrigin",h,A),$i(o,a,"xOffset",u,a.xOffset),$i(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+A)},Mo=function(t,e){var n=t._gsap||new Vh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),l=Bn(t,_n)||"0",h,u,d,f,g,_,m,p,M,v,x,A,b,w,P,S,y,C,H,z,V,Y,D,ot,$,ct,it,dt,Ct,G,O,k;return h=u=d=_=m=p=M=v=x=0,f=g=1,n.svg=!!(t.getCTM&&hp(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Ie]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ie]!=="none"?c[Ie]:"")),i.scale=i.rotate=i.translate="none"),w=su(t,n.svg),n.svg&&(n.uncache?($=t.getBBox(),l=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",ot=""):ot=!e&&t.getAttribute("data-svg-origin"),tu(t,ot||l,!!ot||n.originIsAbsolute,n.smooth!==!1,w)),A=n.xOrigin||0,b=n.yOrigin||0,w!==vo&&(C=w[0],H=w[1],z=w[2],V=w[3],h=Y=w[4],u=D=w[5],w.length===6?(f=Math.sqrt(C*C+H*H),g=Math.sqrt(V*V+z*z),_=C||H?Ar(H,C)*Ps:0,M=z||V?Ar(z,V)*Ps+_:0,M&&(g*=Math.abs(Math.cos(M*Cr))),n.svg&&(h-=A-(A*C+b*z),u-=b-(A*H+b*V))):(k=w[6],G=w[7],it=w[8],dt=w[9],Ct=w[10],O=w[11],h=w[12],u=w[13],d=w[14],P=Ar(k,Ct),m=P*Ps,P&&(S=Math.cos(-P),y=Math.sin(-P),ot=Y*S+it*y,$=D*S+dt*y,ct=k*S+Ct*y,it=Y*-y+it*S,dt=D*-y+dt*S,Ct=k*-y+Ct*S,O=G*-y+O*S,Y=ot,D=$,k=ct),P=Ar(-z,Ct),p=P*Ps,P&&(S=Math.cos(-P),y=Math.sin(-P),ot=C*S-it*y,$=H*S-dt*y,ct=z*S-Ct*y,O=V*y+O*S,C=ot,H=$,z=ct),P=Ar(H,C),_=P*Ps,P&&(S=Math.cos(P),y=Math.sin(P),ot=C*S+H*y,$=Y*S+D*y,H=H*S-C*y,D=D*S-Y*y,C=ot,Y=$),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Oe(Math.sqrt(C*C+H*H+z*z)),g=Oe(Math.sqrt(D*D+k*k)),P=Ar(Y,D),M=Math.abs(P)>2e-4?P*Ps:0,x=O?1/(O<0?-O:O):0),n.svg&&(ot=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!dp(Bn(t,Ie)),ot&&t.setAttribute("transform",ot))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Oe(f),n.scaleY=Oe(g),n.rotation=Oe(_)+a,n.rotationX=Oe(m)+a,n.rotationY=Oe(p)+a,n.skewX=M+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[_n]=Xa(l)),n.xOffset=n.yOffset=0,n.force3D=gn.force3D,n.renderTransform=n.svg?k1:cp?fp:z1,n.uncache=0,n},Xa=function(t){return(t=t.split(" "))[0]+" "+t[1]},Jh=function(t,e,n){var i=Qe(e);return Oe(parseFloat(e)+parseFloat(Ji(t,"x",n+"px",i)))+i},z1=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,fp(t,e)},Rs="0deg",yo="0px",Cs=") ",fp=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,v=n.zOrigin,x="",A=p==="auto"&&t&&t!==1||p===!0;if(v&&(u!==Rs||h!==Rs)){var b=parseFloat(h)*Cr,w=Math.sin(b),P=Math.cos(b),S;b=parseFloat(u)*Cr,S=Math.cos(b),o=Jh(M,o,w*S*-v),a=Jh(M,a,-Math.sin(b)*-v),c=Jh(M,c,P*S*-v+v)}m!==yo&&(x+="perspective("+m+Cs),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(A||o!==yo||a!==yo||c!==yo)&&(x+=c!==yo||A?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Cs),l!==Rs&&(x+="rotate("+l+Cs),h!==Rs&&(x+="rotateY("+h+Cs),u!==Rs&&(x+="rotateX("+u+Cs),(d!==Rs||f!==Rs)&&(x+="skew("+d+", "+f+Cs),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Cs),M.style[Ie]=x||"translate(0, 0)"},k1=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,v=parseFloat(o),x=parseFloat(a),A,b,w,P,S;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Cr,l*=Cr,A=Math.cos(c)*u,b=Math.sin(c)*u,w=Math.sin(c-l)*-d,P=Math.cos(c-l)*d,l&&(h*=Cr,S=Math.tan(l-h),S=Math.sqrt(1+S*S),w*=S,P*=S,h&&(S=Math.tan(h),S=Math.sqrt(1+S*S),A*=S,b*=S)),A=Oe(A),b=Oe(b),w=Oe(w),P=Oe(P)):(A=u,P=d,b=w=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=Ji(f,"x",o,"px"),x=Ji(f,"y",a,"px")),(g||_||m||p)&&(v=Oe(v+g-(g*A+_*w)+m),x=Oe(x+_-(g*b+_*P)+p)),(i||r)&&(S=f.getBBox(),v=Oe(v+i/100*S.width),x=Oe(x+r/100*S.height)),S="matrix("+A+","+b+","+w+","+P+","+v+","+x+")",f.setAttribute("transform",S),M&&(f.style[Ie]=S)},H1=function(t,e,n,i,r){var o=360,a=Xe(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?Ps:1),l=c-i,h=i+l+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),u==="cw"&&l<0?l=(l+o*Jf)%o-~~(l/o)*o:u==="ccw"&&l>0&&(l=(l-o*Jf)%o-~~(l/o)*o)),t._pt=d=new hn(t._pt,e,n,i,l,b1),d.e=h,d.u="deg",t._props.push(n),d},ip=function(t,e){for(var n in e)t[n]=e[n];return t},V1=function(t,e,n){var i=ip({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,h,u,d,f,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ie]=e,a=Mo(n,1),Ds(n,Ie),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Ie],o[Ie]=e,a=Mo(n,1),o[Ie]=l);for(c in Si)l=i[c],h=a[c],l!==h&&r.indexOf(c)<0&&(f=Qe(l),g=Qe(h),u=f!==g?Ji(n,c,l,g):parseFloat(l),d=parseFloat(h),t._pt=new hn(t._pt,a,c,u,d-u,Kh),t._pt.u=g||0,t._props.push(c));ip(a,i)};ln("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Wa[t>1?"border"+s:s]=function(a,c,l,h,u){var d,f;if(arguments.length<4)return d=o.map(function(g){return Mi(a,g,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(c,f,u)}});var ru={name:"css",register:jh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,c=n.vars.startAt,l,h,u,d,f,g,_,m,p,M,v,x,A,b,w,P;eu||jh(),this.styles=this.styles||ap(t),P=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(fn[_]&&Wh(_,e,n,i,t,r)))){if(f=typeof h,g=Wa[_],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=wr(h)),g)g(this,t,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",yi.lastIndex=0,yi.test(l)||(m=Qe(l),p=Qe(h)),p?m!==p&&(l=Ji(t,_,l,p)+p):m&&(h+=m),this.add(a,"setProperty",l,h,i,r,0,0,_),o.push(_),P.push(_,0,a[_]);else if(f!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,t,r):c[_],Xe(l)&&~l.indexOf("random(")&&(l=wr(l)),Qe(l+"")||l==="auto"||(l+=gn.units[_]||Qe(Mi(t,_))||""),(l+"").charAt(1)==="="&&(l=Mi(t,_))):l=Mi(t,_),d=parseFloat(l),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),_ in ni&&(_==="autoAlpha"&&(d===1&&Mi(t,"visibility")==="hidden"&&u&&(d=0),P.push("visibility",0,a.visibility),$i(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=ni[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Si,v){if(this.styles.save(_),f==="string"&&h.substring(0,6)==="var(--"&&(h=Bn(t,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),x||(A=t._gsap,A.renderTransform&&!e.parseTransform||Mo(t,e.parseTransform),b=e.smoothOrigin!==!1&&A.smooth,x=this._pt=new hn(this._pt,a,Ie,0,1,A.renderTransform,A,0,-1),x.dep=1),_==="scale")this._pt=new hn(this._pt,A,"scaleY",A.scaleY,(M?ws(A.scaleY,M+u):u)-A.scaleY||0,Kh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(_n,0,a[_n]),h=F1(h),A.svg?tu(t,h,0,b,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&$i(this,A,"zOrigin",A.zOrigin,p),$i(this,a,_,Xa(l),Xa(h)));continue}else if(_==="svgOrigin"){tu(t,h,1,b,0,this);continue}else if(_ in up){H1(this,A,_,d,M?ws(d,M+h):h);continue}else if(_==="smoothOrigin"){$i(this,A,"smooth",A.smooth,h);continue}else if(_==="force3D"){A[_]=h;continue}else if(_==="transform"){V1(this,h,t);continue}}else _ in a||(_=Pr(_)||_);if(v||(u||u===0)&&(d||d===0)&&!E1.test(h)&&_ in a)m=(l+"").substr((d+"").length),u||(u=0),p=Qe(h)||(_ in gn.units?gn.units[_]:m),m!==p&&(d=Ji(t,_,l,p)),this._pt=new hn(this._pt,v?A:a,_,d,(M?ws(d,M+u):u)-d,!v&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?w1:Kh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=T1);else if(_ in a)N1.call(this,t,_,l,M?M+h:h);else if(_ in t)this.add(t,_,l||t[_],M?M+h:h,i,r);else if(_!=="parseTransform"){za(_,h);continue}v||(_ in a?P.push(_,0,a[_]):typeof t[_]=="function"?P.push(_,2,t[_]()):P.push(_,1,l||t[_])),o.push(_)}}w&&$h(this)},render:function(t,e){if(e.tween._time||!nu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Mi,aliases:ni,getSetter:function(t,e,n){var i=ni[e];return i&&i.indexOf(",")<0&&(e=i),e in Si&&e!==_n&&(t._gsap.x||Mi(t,"x"))?n&&$f===n?e==="scale"?P1:C1:($f=n||{})&&(e==="scale"?I1:D1):t.style&&!Ba(t.style[e])?A1:~e.indexOf("-")?R1:Ga(t,e)},core:{_removeProperty:Ds,_getMatrix:su}};rn.utils.checkPrefix=Pr;rn.core.getStyleSaver=ap;(function(s,t,e,n){var i=ln(s+","+t+","+e,function(r){Si[r]=1});ln(t,function(r){gn.units[r]="deg",up[r]=1}),ni[i[13]]=s+","+t,ln(n,function(r){var o=r.split(":");ni[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){gn.units[s]="px"});rn.registerPlugin(ru);var qa=rn.registerPlugin(ru)||rn,OM=qa.core.Tween;var FM=Math.PI*2,So=(s,t=0,e=1)=>Math.min(e,Math.max(t,s));function ou(s){let t=s*s*s,e=[],n=[],i=[],r=[],o=[],a=[],c=new Set,l=(h,u,d)=>{let f=[h,u,d].join(":");c.has(f)||(c.add(f),a.push([h,u,d]))};for(let h=-5;h<=5;h++)for(let u=-2;u<=2;u++)l(h*.4,.9,u*.4);for(let h of[-1.6,1.6])for(let u of[-.4,.4])for(let d=-3;d<=1;d++)l(h,d*.4,u);for(let h of[-2.4,2.4])for(let u=-2;u<=3;u++)for(let d of[-.8,0,.8])l(h,u*.4,d);for(let h of[-2.8,2.8])for(let u=-2;u<=1;u++)for(let d of[-.4,.4])l(h,u*.4,d);for(let h=0;h<t;h++){let u=h%s,d=Math.floor(h/s)%s,f=Math.floor(h/(s*s)),g=[(u-(s-1)/2)*1.65/s,(d-(s-1)/2)*1.65/s,(f-(s-1)/2)*1.65/s];e.push(g);let _=h*2.399963229728653,m=1.25+h*37%17/17*.95;n.push([Math.cos(_)*m,Math.sin(h*1.7)*1.45,Math.sin(_)*m*.75]),i.push([Math.cos(_)*1.75,Math.sin(h*1.7)*1.15,Math.sin(_)*1.3]);let p=1-(h+.5)/t*2,M=Math.sqrt(1-p*p);r.push([Math.cos(_)*M*1.6,p*1.6,Math.sin(_)*M*1.6]),o.push(a[Math.round(h/(t-1)*(a.length-1))])}return{count:t,n:s,formations:[e,n,i,r,o,e]}}function pp(s){let t=[0,1,1.15,2,3,4],e=0;for(;e<t.length-2&&s>t[e+1];)e++;return{from:e,to:e+1,weight:So((s-t[e])/(t[e+1]-t[e]))}}function mp(s){if(s<=0||s>=4)return 0;let t=So(s/.3),e=1-So((s-3.72)/.28);return Math.min(t,e)}function gp(s){let t=So(s)*5,e=Math.min(4,Math.floor(t)),n=So((t-e)/.38),i=n*n*(3-2*n),r=[0,1,1.15,2,3,4];return r[e]+(r[e+1]-r[e])*i}var Ya=s=>Math.max(0,Math.min(1,s)),Ki=["inicio","problema","diagnostico","transformacao","solucoes","projetos","processo","inteligencia","sobre","resultado","contato"];function _p(){let s={cx:4.5,cy:3.3,cz:8.4,tx:0,ty:-.1,tz:-.1,actorX:0,actorY:0,actorZ:0,yaw:.18,actorScale:1,pose:1,shape:0,order:.52,props:1,panel:1,path:1,wire:0,network:0,portal:0,opacity:1,screenX:.74,screenY:.52,mobileX:.49,mobileY:.76,mobileDistance:1.4,light:1.1,walk:0,walkAmp:.25},t={inicio:{...s},problema:{...s,cx:3.4,cy:2.6,cz:8.8,actorX:-.35,yaw:.25,order:0,path:.2,mobileY:.69,mobileDistance:1.35},diagnostico:{...s,cx:2.4,cy:2.2,cz:8.8,yaw:.2,order:.25,props:.28,path:.15,wire:1,pose:.1,mobileY:.76,mobileDistance:1.55,light:1.35,walkAmp:0},transformacao:{...s,cx:2.3,cy:2.1,cz:12,actorY:.4,props:.15,order:.7,path:.5,pose:1,wire:0,screenX:.73,screenY:.5,mobileY:.65,mobileDistance:1.55,light:1.2,walkAmp:0},solucoes:{...s,opacity:0,props:0,walkAmp:0},projetos:{...s,opacity:0,props:0,walkAmp:0},processo:{...s,cx:0,cy:1.8,cz:12,actorScale:.6,props:0,path:0,screenX:.14,screenY:.54,mobileX:.87,mobileY:.44,mobileDistance:1.1,walkAmp:1},inteligencia:{...s,cx:3.2,cy:3.6,cz:11.5,actorScale:.62,pose:0,props:0,path:0,network:1,screenX:.74,screenY:.53,mobileY:.72,mobileDistance:1.55,light:1.25,walkAmp:0},sobre:{...s,opacity:0,props:0,walkAmp:0},resultado:{...s,cx:4.5,cy:4,cz:10.2,order:1,yaw:0,path:1,mobileY:.73,mobileDistance:1.4,walkAmp:0},contato:{...s,cx:5.2,cy:3.5,cz:11,tx:1,ty:.1,tz:-1,actorX:-.4,actorZ:.2,order:1,props:.3,path:1,portal:1,screenX:.77,mobileY:.73,mobileDistance:1.5,light:1.2,walkAmp:.6}};for(let a of Ki)a!=="inicio"&&(t[a].panel=0);let e={...s},n={time:0},i=qa.timeline({paused:!0}).to(n,{time:Ki.length,duration:Ki.length,ease:"none"}),r=qa.parseEase("power2.inOut");function o(a,c){let l=Math.max(0,Ki.indexOf(a)),h=Ya(c);i.time(l+h,!0);let u=Ya(n.time-l),d=t[Ki[l]],f={...t[Ki[Math.max(0,l-1)]]};Ki[l-1]==="processo"&&(f.screenX=.86,f.mobileY=.79);let g=d.opacity===0?.08:Ki[l]==="transformacao"?.1:.28,_=l===0?1:r(Ya(u/g));for(let m of Object.keys(d))e[m]=f[m]+(d[m]-f[m])*_;if(e.shape=a==="transformacao"?gp(u):0,a==="transformacao"){e.order=u,e.actorY=.4,e.yaw=-.2+u*.7;let m=M=>{let v=Ya(M);return v*v*(3-2*v)},p=m((e.shape-2.2)/.6)*(1-m((e.shape-3.6)/.4));e.cz=12+p*1.5,e.mobileDistance=1.55+p*.25}return a==="problema"&&(e.walk=u*Math.PI*3),a==="inicio"&&(e.walk=u*Math.PI*2),a==="processo"&&(e.screenX=.14+u*.72,e.mobileY=.44+u*.35,e.walk=u*Math.PI*16,e.opacity=1),a==="contato"&&(e.actorX=-.4+u*2.6,e.actorZ=.2-u*2.7,e.walk=u*Math.PI*5),e}return{state:e,seek:o,dispose(){i.kill()}}}Wd();var on=document.documentElement;on.classList.contains("reduced-motion")||G1();function G1(){let s=document.getElementById("sceneStage"),t=document.getElementById("sceneCanvas"),e,n=!1,i=ro(),r=ba[i],o=innerWidth<=700;try{e=new ur({canvas:t,alpha:!0,antialias:i!=="low",powerPreference:"high-performance"}),e.outputColorSpace=ge,e.toneMapping=io,e.toneMappingExposure=1.1}catch{n=!0;let at=t.cloneNode();t.replaceWith(at),t=at;try{e=new yr(t)}catch{dispatchEvent(new Event("portfolio:graphics-fallback"));return}}on.dataset.renderer=n?"canvas":"webgl";let a=new Fi,c=new en(38,1,.1,100),l=new Set,h=new Set,u=new Set,d=new fe(1,1,1);l.add(d);let f=n?d:new We(1,1,1,3,.0325);l.add(f);function g(at={},bt=!1){let U=bt?new Ce(at):new ye({roughness:.7,metalness:.08,...at});return h.add(U),U}let _=new ms({color:"#e96c0c",roughness:.38,metalness:.48,clearcoat:.08,clearcoatRoughness:.5,envMapIntensity:.7}),m=g({color:"#272623",roughness:.85}),p=g({color:"#f4f0e8",roughness:.72}),M=g({color:"#111111",roughness:.6}),v=g({color:"#ff7a00",toneMapped:!1},!0),x=g({color:"#ff9b35",transparent:!0,opacity:.6,toneMapped:!1},!0);h.add(_);let A=null;function b(at,bt,U,Pt,X=a,mt=!0){let B=new Ht(mt?f:d,Pt);return B.scale.set(at,bt,U),X.add(B),B}function w(at,bt,U,Pt,X=a){let mt=new L(...at),B=new L(...bt),nt=B.clone().sub(mt),Dt=b(U,nt.length(),U,Pt,X,!1);return Dt.position.copy(mt).add(B).multiplyScalar(.5),Dt.quaternion.setFromUnitVectors(new L(0,1,0),nt.normalize()),Dt}if(!n){A=Aa(e,a),a.add(new mr("#fff4e5","#5d4937",1.4));let at=new ki("#fff6e8",2.5);at.position.set(-4,7,6),a.add(at);let bt=new ki("#ff9c44",.45);bt.position.set(5,4,-4),a.add(bt);let U=new ki("#ffffff",.5);U.position.set(3,2,7),a.add(U)}let P=new Zt,S=new Zt;a.add(P),P.add(S);let y=wa({size:1.65,software:n,orange:_});S.add(y.group),on.dataset.cubeDesign="premium-modular";let C=new xe(f,_,125);C.instanceMatrix.setUsage(bn),C.frustumCulled=!1,S.add(C);let H=ou(n?3:r.grid);C.count=H.count;let z=new Kn(1.6,n?10:28,n?7:18);l.add(z);let V=new Ht(z,_);S.add(V),V.visible=!1;let Y=new Zt;S.add(Y);let D=1.02;for(let[at,bt]of[[[-D,-D,-D],[D,-D,-D]],[[-D,D,-D],[D,D,-D]],[[-D,-D,D],[D,-D,D]],[[-D,D,D],[D,D,D]],[[-D,-D,-D],[-D,D,-D]],[[D,-D,-D],[D,D,-D]],[[-D,-D,D],[-D,D,D]],[[D,-D,D],[D,D,D]],[[-D,-D,-D],[-D,-D,D]],[[D,-D,-D],[D,-D,D]],[[-D,D,-D],[-D,D,D]],[[D,D,-D],[D,D,D]]])w(at,bt,.012,x,Y);let ot=new Zt;a.add(ot);let $=[];for(let at=0;at<18;at++){let bt=.35+at%4*.34,U=b(.68,bt,.68,at%3===0?m:p,ot),Pt=at*2.39996+.4,X=new L(Math.sign(Math.cos(Pt))*(2+Math.abs(Math.cos(Pt))*.9),-1.5+bt/2,-2.2-Math.abs(Math.sin(Pt))*1.2),mt=new L([-3.7,-2.5,-1.3,1.3,2.5,3.7][at%6],-1.5+bt/2,-3.8+Math.floor(at/6)*1.25);$.push({mesh:U,height:bt,chaos:X,ordered:mt,angle:(at%5-2)*.18})}let ct=new Zt;a.add(ct);let it=[[-5,-1.49,3],[-3.3,-1.49,2.2],[-2,-1.49,.9],[-.7,-1.49,.35],[.4,-1.49,-.5],[1.1,-1.49,-1.1],[2.3,-1.49,-1.7],[3.1,-1.49,-2.6]],dt=new fs(it.map(at=>new L(...at))),Ct=[];if(n){let at=dt.getPoints(24),bt=g({color:"#ff7a00",transparent:!0,opacity:.08},!0);for(let U=0;U<at.length-1;U++)Ct.push(w(at[U].toArray(),at[U+1].toArray(),.045,v,ct)),w(at[U].toArray(),at[U+1].toArray(),.14,bt,ct)}else{let at=new gi(dt,64,.025,6,!1);l.add(at),ct.add(new Ht(at,v));let bt=new gi(dt,48,.08,6,!1);l.add(bt),ct.add(new Ht(bt,g({color:"#ff7a00",transparent:!0,opacity:.07,depthWrite:!1},!0)))}P.traverse(at=>{at.isMesh&&(at.renderOrder=Math.max(2,at.renderOrder))});let G=document.createElement("canvas");G.width=G.height=64;let O=G.getContext("2d"),k=O.createRadialGradient(32,32,1,32,32,32);k.addColorStop(0,"#00000060"),k.addColorStop(1,"#00000000"),O.fillStyle=k,O.fillRect(0,0,64,64);let Z=new Le(G);u.add(Z);let N=g({map:Z,transparent:!0,depthWrite:!1},!0),st=new De(3.6,3.6);l.add(st);let xt=new Ht(st,N);xt.rotation.x=-Math.PI/2,xt.position.y=-1.51,xt.userData.skipSoftware=!0,a.add(xt);let It=new Zt;a.add(It);let Lt=[[0,0,0],[-2,1,-.5],[2,.8,-.1],[-1.6,-.65,1.2],[1.8,-.65,1.1],[-.7,1.5,-1.4],[.6,-.85,-1.1]];Lt.slice(1).forEach((at,bt)=>{let U=b(.3,.3,.3,bt%2?p:_,It);U.position.set(...at),U.rotation.y=bt*.5});for(let[at,bt]of[[0,1],[0,2],[0,3],[0,4],[1,5],[2,5],[3,6],[4,6]])w(Lt[at],Lt[bt],.025,v,It);let q=new Zt;a.add(q),q.position.set(3.5,.1,-3.1),q.rotation.y=-.12;let rt=g({color:"#fff7df",toneMapped:!1},!0);b(.16,3.8,.25,v,q).position.x=-1.14,b(.16,3.8,.25,v,q).position.x=1.14,b(2.4,.16,.25,v,q).position.y=1.82,b(2.12,3.52,.04,rt,q,!1).position.set(0,-.02,-.12),b(2.5,.1,1.4,p,q).position.set(0,-1.84,.4);let At=_p(),Ot=new le,tt=new L,Nt=of(s),lt=0,T=0,E=!1,W=0,Q=0,Tt=0,ht=0,pt=0,yt=0;function St(){o=innerWidth<=700,Nt.invalidate(),lt=T=0,i=ro(),r=ba[i],on.dataset.quality=i,e.setPixelRatio(Math.min(devicePixelRatio||1,r.dpr,n?1.25:2)),H=ou(n?3:r.grid),C.count=H.count,on.dataset.microcubes=String(C.count),on.dataset.graphicsInitialized="true"}let Xt=qd({scene:a,software:n,quality:i}),ut=Zd({scene:a,software:n,quality:i}),Mt=Jd({scene:a,software:n,quality:i}),Vt=rf({scene:a,software:n,quality:i}),ft=sf({scene:a,software:n,quality:i}),Et=tf({scene:a,software:n,quality:i});St(),addEventListener("resize",St,{passive:!0}),addEventListener("portfolio:quality",St),matchMedia("(hover:hover) and (pointer:fine)").matches&&addEventListener("pointermove",at=>{pt=(at.clientX/innerWidth-.5)*.1,yt=(at.clientY/innerHeight-.5)*.05},{passive:!0});function Bt(at){if(E||(Q=requestAnimationFrame(Bt),document.hidden||on.classList.contains("reduced-motion")))return;let bt=1e3/(n?30:r.fps);if(at-W<bt-.5)return;W=at-(at-W)%bt;let U=Nt.read();if(!U){on.dataset.cinemaImmersive="false";return}on.dataset.cinemaImmersive=String(U.id==="problema"&&U.rect.top<=2&&U.rect.bottom>Math.min(innerHeight*.45,300)),(lt!==U.width||T!==U.height)&&(lt=U.width,T=U.height,e.setSize(lt,T,!1),c.aspect=lt/T);let Pt=performance.now(),X=U.id,mt=U.progress,B=At.seek(X,mt),nt=lt/T;s.style.setProperty("--scene-opacity","1"),on.dataset.morphShape=B.shape.toFixed(3),on.dataset.sceneOrder=B.order.toFixed(3),c.clearViewOffset(),tt.set(0,-.3,0);let Dt=Math.max(4,4.4/nt);if(X==="transformacao"&&(tt.y=.25,Dt=Math.max(4.5,6.8/nt)),X==="inteligencia"&&(Dt=Math.max(4.5,5.7/nt)),X==="contato"&&(tt.set(1.15,-.2,-1.1),Dt=Math.max(5.3,8.5/nt)),X==="processo"){B.actorScale=1,Dt=o?2.9/nt:3.25;let J=[...document.querySelectorAll(".process-node")],vt=J[0].getBoundingClientRect(),$t=J.at(-1).getBoundingClientRect(),te=Math.max(0,Math.min(1,(mt-.1)/.8)),pe=o?.5:(vt.x+vt.width/2+($t.x-vt.x)*te-U.rect.left)/lt,qe=o?Math.max(.1,Math.min(.85,(vt.y+vt.height/2+($t.y-vt.y)*te-U.rect.top)/T)):.48;c.setViewOffset(lt,T,(.5-pe)*lt,(.5-qe)*T,lt,T)}let Gt=Dt/(2*Math.tan(Ne.degToRad(c.fov/2)));c.position.set(B.cx+pt,B.cy+yt,B.cz).sub(tt).normalize().multiplyScalar(Gt).add(tt);let R=lh(mt);if(Xt.group.visible=X==="problema",ut.group.visible=X==="projetos",Mt.group.visible=X==="solucoes",Vt.group.visible=X==="inteligencia",ft.group.visible=X==="resultado",Et.group.visible=X==="contato",X==="problema"){let vt=Math.max(6.4,5.8/nt)*R.zoom/(2*Math.tan(Ne.degToRad(c.fov/2)));tt.set(...R.focus);let $t=.52+mt*.3;c.position.set(Math.sin($t)*.77,.78,Math.cos($t)*.9).normalize().multiplyScalar(vt).add(tt)}if(X==="projetos"){let J=Ra(mt),$t=Math.max(7,6.3/nt)*(1-J.cameraDock*.16)/(2*Math.tan(Ne.degToRad(c.fov/2)));tt.set(0,1.1-J.cameraDock*.6,.18),c.position.set(.18-J.cameraDock*.13,.2+Math.sin(J.local*Math.PI)*.035,1).normalize().multiplyScalar($t).add(tt)}if(c.lookAt(tt),c.updateProjectionMatrix(),P.position.set(B.actorX,B.actorY+(X==="inicio"?Math.sin(at*8e-4)*.018:0),B.actorZ),P.rotation.y=B.yaw+(X==="inicio"?Math.sin(at*7e-4)*.075:0),P.scale.setScalar(B.actorScale),X==="problema"){let J=Xt.update(mt,at,c);P.position.set(...J.actor),P.position.y+=.3,P.scale.setScalar(.45),P.rotation.set(0,J.yaw,0)}else P.rotation.x=0;S.rotation.z=0;let K=mp(B.shape),Rt=Math.max(0,1-Math.abs(B.shape-2)/.34),wt=pp(B.shape),zt=H.formations[wt.from],Ut=H.formations[wt.to];if(y.update({fracture:K,spread:X==="problema"&&R.blocked?.2:X==="diagnostico"?Math.sin(mt*Math.PI)**2*.45:0}),C.visible=K>.005&&Rt<.98,C.visible){let J=(1.65/H.n-.016)*(B.shape>1.2&&B.shape<3.7?.72:1);for(let vt=0;vt<C.count;vt++)Ot.position.set(zt[vt][0]+(Ut[vt][0]-zt[vt][0])*wt.weight,zt[vt][1]+(Ut[vt][1]-zt[vt][1])*wt.weight,zt[vt][2]+(Ut[vt][2]-zt[vt][2])*wt.weight),Ot.rotation.set(vt%3*.23*K,vt%5*.3*K,vt%4*.13*K),(B.shape<.05||B.shape>3.95)&&Ot.rotation.set(0,0,0),Ot.scale.setScalar(J*K*(1-Rt*.9)),Ot.updateMatrix(),C.setMatrixAt(vt,Ot.matrix);C.instanceMatrix.needsUpdate=!0}V.visible=Rt>.01,V.scale.setScalar(Rt),Y.visible=B.wire>.02,Y.scale.setScalar(Math.max(.01,B.wire)),ot.visible=B.props>.02&&X!=="inicio"&&X!=="problema",ot.scale.setScalar(Math.max(.01,B.props)),$.forEach((J,vt)=>{if(J.mesh.visible=vt<(X==="inicio"?3:n?8:r.blocks),J.mesh.scale.set(.68,J.height,.68),J.mesh.position.lerpVectors(J.chaos,J.ordered,B.order),X==="inicio"&&vt<3){let $t=[[-2.05,-1.25,-.75],[1.9,-1.3,-1.6],[.6,-1.38,-3.2]];J.mesh.position.set(...$t[vt]),J.mesh.scale.set(.64,vt===0?.48:.34,.64)}J.mesh.rotation.set(J.angle*(1-B.order),J.angle*2*(1-B.order),J.angle*(1-B.order))}),ct.visible=B.path>.02&&X!=="processo"&&X!=="problema",ct.scale.setScalar(Math.max(.02,B.path)),It.visible=B.network>.02,It.scale.setScalar(Math.max(.01,B.network)),q.visible=B.portal>.02,q.scale.setScalar(Math.max(.01,B.portal)),xt.visible=X!=="problema",xt.position.x=P.position.x,xt.position.z=P.position.z,xt.scale.setScalar(B.actorScale),N.opacity=(1-K*.6)*.85,P.visible=X!=="projetos"&&X!=="solucoes"&&X!=="inteligencia"&&X!=="resultado"&&X!=="contato",X==="projetos"&&(ot.visible=ct.visible=It.visible=q.visible=xt.visible=!1,ut.update(mt,at,c)),X==="solucoes"&&(ot.visible=ct.visible=It.visible=q.visible=xt.visible=!1,Mt.update(mt,at,c)),X==="inteligencia"&&(ot.visible=ct.visible=It.visible=q.visible=xt.visible=!1,Vt.update(mt,at,c,{width:lt,height:T})),X==="resultado"&&(ot.visible=ct.visible=It.visible=q.visible=xt.visible=!1,ft.update(mt,at,c,{mobile:o})),X==="contato"&&(ot.visible=ct.visible=It.visible=q.visible=xt.visible=!1,Et.update(mt,at,c,{mobile:o})),n?e.render(a,c):(e.toneMappingExposure=X==="problema"?.88:X==="solucoes"?1.05:X==="inteligencia"?1.12:X==="resultado"?1.04:X==="contato"?1.06:B.light*.92,e.render(a,c),on.dataset.drawCalls=String(e.info.render.calls),on.dataset.triangles=String(e.info.render.triangles)),s.style.visibility="visible",on.dataset.frameMs=String(Math.round((performance.now()-Pt)*10)/10),s.classList.contains("is-ready")||(s.classList.add("is-ready"),on.dataset.sceneReady="true"),Tt++,ht||(ht=at),at-ht>1600&&(on.dataset.fps=String(Math.round(Tt*1e3/(at-ht)*10)/10),Tt=0,ht=at)}t.addEventListener("webglcontextlost",at=>{at.preventDefault(),dispatchEvent(new Event("portfolio:graphics-fallback"))}),addEventListener("pagehide",at=>{if(!at.persisted){E=!0,cancelAnimationFrame(Q),removeEventListener("resize",St),removeEventListener("portfolio:quality",St),Nt.dispose(),At.dispose(),y.dispose(),Xt.dispose(),ut.dispose(),Mt.dispose(),Vt.dispose(),ft.dispose(),Et.dispose(),A?.dispose();for(let bt of l)bt.dispose();for(let bt of h)bt.dispose();for(let bt of u)bt.dispose();e.dispose?.()}}),Q=requestAnimationFrame(Bt)}})();
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
