(()=>{var Dl="170";var Jf=0,Xh=1,Kf=2;var Qu=1,Qf=2,li=3,Ni=0,je=1,zn=2,Li=0,qs=1,qh=2,Yh=3,Zh=4,jf=5,is=100,tp=101,ep=102,np=103,ip=104,sp=200,rp=201,op=202,ap=203,cc=204,lc=205,cp=206,lp=207,hp=208,up=209,dp=210,fp=211,pp=212,mp=213,gp=214,hc=0,uc=1,dc=2,Js=3,fc=4,pc=5,mc=6,gc=7,ju=0,_p=1,xp=2,Ui=0,yp=1,vp=2,Mp=3,Xr=4,Sp=5,Ep=6,bp=7;var td=300,Ks=301,Qs=302,_c=303,xc=304,na=306,yc=1e3,os=1001,vc=1002,vn=1003,wp=1004;var ho=1005;var Yn=1006,Ca=1007;var as=1008;var fi=1009,ed=1010,nd=1011,Hr=1012,Ll=1013,cs=1014,Zn=1015,qr=1016,Ul=1017,Nl=1018,js=1020,id=35902,sd=1021,rd=1022,kn=1023,od=1024,ad=1025,Ys=1026,tr=1027,Ol=1028,Fl=1029,cd=1030,Bl=1031;var zl=1033,No=33776,Oo=33777,Fo=33778,Bo=33779,Mc=35840,Sc=35841,Ec=35842,bc=35843,wc=36196,Tc=37492,Ac=37496,Rc=37808,Cc=37809,Pc=37810,Ic=37811,Dc=37812,Lc=37813,Uc=37814,Nc=37815,Oc=37816,Fc=37817,Bc=37818,zc=37819,kc=37820,Hc=37821,zo=36492,Vc=36494,Gc=36495,ld=36283,Wc=36284,Xc=36285,qc=36286;var ko=2300,Yc=2301,Pa=2302,$h=2400,Jh=2401,Kh=2402;var Tp=3200,Ap=3201;var hd=0,Rp=1,Di="",be="srgb",lr="srgb-linear",ia="linear",me="srgb";var Cs=7680;var Qh=519,Cp=512,Pp=513,Ip=514,ud=515,Dp=516,Lp=517,Up=518,Np=519,jh=35044,on=35048;var tu="300 es",ui=2e3,Ho=2001,Oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=1234567,Or=Math.PI/180,Vr=180/Math.PI;function hr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[s&255]+Je[s>>8&255]+Je[s>>16&255]+Je[s>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function Ge(s,t,e){return Math.max(t,Math.min(e,s))}function kl(s,t){return(s%t+t)%t}function Op(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Fp(s,t,e){return s!==t?(e-s)/(t-s):0}function Fr(s,t,e){return(1-e)*s+e*t}function Bp(s,t,e,n){return Fr(s,t,1-Math.exp(-e*n))}function zp(s,t=1){return t-Math.abs(kl(s,t*2)-t)}function kp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Hp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Vp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Gp(s,t){return s+Math.random()*(t-s)}function Wp(s){return s*(.5-Math.random())}function Xp(s){s!==void 0&&(eu=s);let t=eu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qp(s){return s*Or}function Yp(s){return s*Vr}function Zp(s){return(s&s-1)===0&&s!==0}function $p(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Jp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Kp(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*_,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*_,a*l);break;case"ZYZ":s.set(c*_,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ws(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function sn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Oe={DEG2RAD:Or,RAD2DEG:Vr,generateUUID:hr,clamp:Ge,euclideanModulo:kl,mapLinear:Op,inverseLerp:Fp,lerp:Fr,damp:Bp,pingpong:zp,smoothstep:kp,smootherstep:Hp,randInt:Vp,randFloat:Gp,randFloatSpread:Wp,seededRandom:Xp,degToRad:qp,radToDeg:Yp,isPowerOfTwo:Zp,ceilPowerOfTwo:$p,floorPowerOfTwo:Jp,setQuaternionFromProperEuler:Kp,normalize:sn,denormalize:Ws},$t=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],S=i[1],v=i[4],y=i[7],T=i[2],E=i[5],w=i[8];return r[0]=o*g+a*S+c*T,r[3]=o*m+a*v+c*E,r[6]=o*p+a*y+c*w,r[1]=l*g+h*S+u*T,r[4]=l*m+h*v+u*E,r[7]=l*p+h*y+u*w,r[2]=d*g+f*S+_*T,r[5]=d*m+f*v+_*E,r[8]=d*p+f*y+_*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*l-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*c)*g,t[5]=(i*r-a*e)*g,t[6]=f*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ia.makeScale(t,e)),this}rotate(t){return this.premultiply(Ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ia=new ee;function dd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Vo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qp(){let s=Vo("canvas");return s.style.display="block",s}var nu={};function Ur(s){s in nu||(nu[s]=!0,console.warn(s))}function jp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function tm(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function em(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ae={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?ia:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var iu=[.64,.33,.3,.6,.15,.06],su=[.2126,.7152,.0722],ru=[.3127,.329],ou=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),au=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[lr]:{primaries:iu,whitePoint:ru,transfer:ia,toXYZ:ou,fromXYZ:au,luminanceCoefficients:su,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:iu,whitePoint:ru,transfer:me,toXYZ:ou,fromXYZ:au,luminanceCoefficients:su,outputColorSpaceConfig:{drawingBufferColorSpace:be}}});var Ps,Zc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ps===void 0&&(Ps=Vo("canvas")),Ps.width=t.width,Ps.height=t.height;let n=Ps.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ps}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nm=0,Go=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=hr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Da(i[o].image)):r.push(Da(i[o]))}else r=Da(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Da(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Zc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var im=0,hn=class s extends Oi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=os,i=os,r=Yn,o=as,a=kn,c=fi,l=s.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=hr(),this.name="",this.source=new Go(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==td)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yc:t.x=t.x-Math.floor(t.x);break;case os:t.x=t.x<0?0:1;break;case vc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yc:t.y=t.y-Math.floor(t.y);break;case os:t.y=t.y<0?0:1;break;case vc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=td;hn.DEFAULT_ANISOTROPY=1;var ge=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,y=(f+1)/2,T=(p+1)/2,E=(h+d)/4,w=(u+g)/4,R=(_+m)/4;return v>y&&v>T?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=w/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=R/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=w/r,i=R/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-g)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$c=class extends Oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new hn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Go(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends $c{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Wo=class extends hn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jc=class extends hn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||c!==d||l!==f||h!==_){let m=1-a,p=c*d+l*f+h*_+u*g,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let T=Math.sqrt(v),E=Math.atan2(T,p*S);m=Math.sin(m*E)/T,a=Math.sin(a*E)/T}let y=a*S;if(c=c*m+d*y,l=l*m+f*y,h=h*m+_*y,u=u*m+g*y,m===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*f-l*d,t[e+1]=c*_+h*d+l*u-a*f,t[e+2]=l*_+h*f+a*d-c*u,t[e+3]=h*_-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return La.copy(this).projectOnVector(t),this.sub(La)}reflect(t){return this.sub(La.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},La=new D,cu=new Hn,mi=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),uo.copy(n.boundingBox)),uo.applyMatrix4(t.matrixWorld),this.union(uo)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),fo.subVectors(this.max,Ar),Is.subVectors(t.a,Ar),Ds.subVectors(t.b,Ar),Ls.subVectors(t.c,Ar),Ti.subVectors(Ds,Is),Ai.subVectors(Ls,Ds),Ji.subVectors(Is,Ls);let e=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-Ji.z,Ji.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,Ji.z,0,-Ji.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-Ji.y,Ji.x,0];return!Ua(e,Is,Ds,Ls,fo)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,Is,Ds,Ls,fo))?!1:(po.crossVectors(Ti,Ai),e=[po.x,po.y,po.z],Ua(e,Is,Ds,Ls,fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},si=[new D,new D,new D,new D,new D,new D,new D,new D],On=new D,uo=new mi,Is=new D,Ds=new D,Ls=new D,Ti=new D,Ai=new D,Ji=new D,Ar=new D,fo=new D,po=new D,Ki=new D;function Ua(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ki.fromArray(s,r);let a=i.x*Math.abs(Ki.x)+i.y*Math.abs(Ki.y)+i.z*Math.abs(Ki.z),c=t.dot(Ki),l=e.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var sm=new mi,Rr=new D,Na=new D,ls=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):sm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rr.subVectors(t,this.center);let e=Rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Rr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rr.copy(t.center).add(Na)),this.expandByPoint(Rr.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ri=new D,Oa=new D,mo=new D,Ri=new D,Fa=new D,go=new D,Ba=new D,Kc=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Oa.copy(t).add(e).multiplyScalar(.5),mo.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(Oa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(mo),a=Ri.dot(this.direction),c=-Ri.dot(mo),l=Ri.lengthSq(),h=Math.abs(1-o*o),u,d,f,_;if(h>0)if(u=o*c-a,d=o*a-c,_=r*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Oa).addScaledVector(mo,d),f}intersectSphere(t,e){ri.subVectors(t.center,this.origin);let n=ri.dot(this.direction),i=ri.dot(ri)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,i,r){Fa.subVectors(e,t),go.subVectors(n,t),Ba.crossVectors(Fa,go);let o=this.direction.dot(Ba),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,t);let c=a*this.direction.dot(go.crossVectors(Ri,go));if(c<0)return null;let l=a*this.direction.dot(Fa.cross(Ri));if(l<0||c+l>o)return null;let h=-a*Ri.dot(Ba);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,_,g,m)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),o=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+_*l,e[5]=d-g*l,e[9]=-a*c,e[2]=g-d*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,_=l*h,g=l*u;e[0]=d+g*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=g+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,_=l*h,g=l*u;e[0]=d-g*a,e[4]=-o*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=_*l-f,e[8]=d*l+g,e[1]=c*u,e[5]=g*l+d,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){let d=o*c,f=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rm,t,om)}lookAt(t,e,n){let i=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ci.crossVectors(n,xn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ci.crossVectors(n,xn)),Ci.normalize(),_o.crossVectors(xn,Ci),i[0]=Ci.x,i[4]=_o.x,i[8]=xn.x,i[1]=Ci.y,i[5]=_o.y,i[9]=xn.y,i[2]=Ci.z,i[6]=_o.z,i[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],S=n[3],v=n[7],y=n[11],T=n[15],E=i[0],w=i[4],R=i[8],M=i[12],x=i[1],P=i[5],H=i[9],z=i[13],q=i[2],Z=i[6],F=i[10],rt=i[14],X=i[3],xt=i[7],nt=i[11],pt=i[15];return r[0]=o*E+a*x+c*q+l*X,r[4]=o*w+a*P+c*Z+l*xt,r[8]=o*R+a*H+c*F+l*nt,r[12]=o*M+a*z+c*rt+l*pt,r[1]=h*E+u*x+d*q+f*X,r[5]=h*w+u*P+d*Z+f*xt,r[9]=h*R+u*H+d*F+f*nt,r[13]=h*M+u*z+d*rt+f*pt,r[2]=_*E+g*x+m*q+p*X,r[6]=_*w+g*P+m*Z+p*xt,r[10]=_*R+g*H+m*F+p*nt,r[14]=_*M+g*z+m*rt+p*pt,r[3]=S*E+v*x+y*q+T*X,r[7]=S*w+v*P+y*Z+T*xt,r[11]=S*R+v*H+y*F+T*nt,r[15]=S*M+v*z+y*rt+T*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+g*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],S=u*m*l-g*d*l+g*c*f-a*m*f-u*c*p+a*d*p,v=_*d*l-h*m*l-_*c*f+o*m*f+h*c*p-o*d*p,y=h*g*l-_*u*l+_*a*f-o*g*f-h*a*p+o*u*p,T=_*u*c-h*g*c-_*a*d+o*g*d+h*a*m-o*u*m,E=e*S+n*v+i*y+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return t[0]=S*w,t[1]=(g*d*r-u*m*r-g*i*f+n*m*f+u*i*p-n*d*p)*w,t[2]=(a*m*r-g*c*r+g*i*l-n*m*l-a*i*p+n*c*p)*w,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*w,t[4]=v*w,t[5]=(h*m*r-_*d*r+_*i*f-e*m*f-h*i*p+e*d*p)*w,t[6]=(_*c*r-o*m*r-_*i*l+e*m*l+o*i*p-e*c*p)*w,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*w,t[8]=y*w,t[9]=(_*u*r-h*g*r-_*n*f+e*g*f+h*n*p-e*u*p)*w,t[10]=(o*g*r-_*a*r+_*n*l-e*g*l-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*w,t[12]=T*w,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*w,t[14]=(_*a*i-o*g*i-_*n*c+e*g*c+o*n*m-e*a*m)*w,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,_=r*u,g=o*h,m=o*u,p=a*u,S=c*l,v=c*h,y=c*u,T=n.x,E=n.y,w=n.z;return i[0]=(1-(g+p))*T,i[1]=(f+y)*T,i[2]=(_-v)*T,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(d+p))*E,i[6]=(m+S)*E,i[7]=0,i[8]=(_+v)*w,i[9]=(m-S)*w,i[10]=(1-(d+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Us.set(i[0],i[1],i[2]).length(),o=Us.set(i[4],i[5],i[6]).length(),a=Us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Fn.copy(this);let l=1/r,h=1/o,u=1/a;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,e.setFromRotationMatrix(Fn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ui){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,_;if(a===ui)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ho)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ui){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h,_,g;if(a===ui)_=(o+r)*u,g=-2*u;else if(a===Ho)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Us=new D,Fn=new he,rm=new D(0,0,0),om=new D(1,1,1),Ci=new D,_o=new D,xn=new D,lu=new he,hu=new Hn,An=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hu.setFromEuler(this),this.setFromQuaternion(hu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Xo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},am=0,uu=new D,Ns=new Hn,oi=new he,xo=new D,Cr=new D,cm=new D,lm=new Hn,du=new D(1,0,0),fu=new D(0,1,0),pu=new D(0,0,1),mu={type:"added"},hm={type:"removed"},Os={type:"childadded",child:null},za={type:"childremoved",child:null},le=class s extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new D,e=new An,n=new Hn,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new he},normalMatrix:{value:new ee}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(du,t)}rotateY(t){return this.rotateOnAxis(fu,t)}rotateZ(t){return this.rotateOnAxis(pu,t)}translateOnAxis(t,e){return uu.copy(t).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(du,t)}translateY(t){return this.translateOnAxis(fu,t)}translateZ(t){return this.translateOnAxis(pu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xo.copy(t):xo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Cr,xo,this.up):oi.lookAt(xo,Cr,this.up),this.quaternion.setFromRotationMatrix(oi),i&&(oi.extractRotation(i.matrixWorld),Ns.setFromRotationMatrix(oi),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mu),Os.child=t,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hm),za.child=t,this.dispatchEvent(za),za.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mu),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,t,cm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,lm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};le.DEFAULT_UP=new D(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bn=new D,ai=new D,ka=new D,ci=new D,Fs=new D,Bs=new D,gu=new D,Ha=new D,Va=new D,Ga=new D,Wa=new ge,Xa=new ge,qa=new ge,ss=class s{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Bn.subVectors(t,e),i.cross(Bn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Bn.subVectors(i,e),ai.subVectors(n,e),ka.subVectors(t,e);let o=Bn.dot(Bn),a=Bn.dot(ai),c=Bn.dot(ka),l=ai.dot(ai),h=ai.dot(ka),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ci.x),c.addScaledVector(o,ci.y),c.addScaledVector(a,ci.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Wa.setScalar(0),Xa.setScalar(0),qa.setScalar(0),Wa.fromBufferAttribute(t,e),Xa.fromBufferAttribute(t,n),qa.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Wa,r.x),o.addScaledVector(Xa,r.y),o.addScaledVector(qa,r.z),o}static isFrontFacing(t,e,n,i){return Bn.subVectors(n,e),ai.subVectors(t,e),Bn.cross(ai).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Bn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Fs.subVectors(i,n),Bs.subVectors(r,n),Ha.subVectors(t,n);let c=Fs.dot(Ha),l=Bs.dot(Ha);if(c<=0&&l<=0)return e.copy(n);Va.subVectors(t,i);let h=Fs.dot(Va),u=Bs.dot(Va);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Fs,o);Ga.subVectors(t,r);let f=Fs.dot(Ga),_=Bs.dot(Ga);if(_>=0&&f<=_)return e.copy(r);let g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Bs,a);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return gu.subVectors(r,i),a=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(gu,a);let p=1/(m+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(Fs,o).addScaledVector(Bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Ya(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=kl(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ya(o,r,t+1/3),this.g=Ya(o,r,t),this.b=Ya(o,r,t-1/3)}return ae.toWorkingColorSpace(this,i),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let n=fd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return ae.fromWorkingColorSpace(Ke.copy(this),t),Math.round(Ge(Ke.r*255,0,255))*65536+Math.round(Ge(Ke.g*255,0,255))*256+Math.round(Ge(Ke.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ke.copy(this),e);let n=Ke.r,i=Ke.g,r=Ke.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=be){ae.fromWorkingColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,i=Ke.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(yo);let n=Fr(Pi.h,yo.h,e),i=Fr(Pi.s,yo.s,e),r=Fr(Pi.l,yo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new Qt;Qt.NAMES=fd;var um=0,hs=class extends Oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=hr(),this.name="",this.blending=qs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=lc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cc&&(n.blendSrc=this.blendSrc),this.blendDst!==lc&&(n.blendDst=this.blendDst),this.blendEquation!==is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Re=class extends hs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ue=new D,vo=new $t,We=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jh,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vo.fromBufferAttribute(this,e),vo.applyMatrix3(t),this.setXY(e,vo.x,vo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ws(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),i=sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jh&&(t.usage=this.usage),t}};var qo=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Yo=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _e=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},dm=0,Tn=new he,Za=new le,zs=new D,yn=new mi,Pr=new mi,Ve=new D,Xe=class s extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dd(t)?Yo:qo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(yn.min,Pr.min),yn.expandByPoint(Ve),Ve.addVectors(yn.max,Pr.max),yn.expandByPoint(Ve)):(yn.expandByPoint(Pr.min),yn.expandByPoint(Pr.max))}yn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ve.fromBufferAttribute(a,l),c&&(zs.fromBufferAttribute(t,l),Ve.add(zs)),i=Math.max(i,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new D,c[R]=new D;let l=new D,h=new D,u=new D,d=new $t,f=new $t,_=new $t,g=new D,m=new D;function p(R,M,x){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,M),_.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),_.sub(d);let P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(P),a[R].add(g),a[M].add(g),a[x].add(g),c[R].add(m),c[M].add(m),c[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,M=S.length;R<M;++R){let x=S[R],P=x.start,H=x.count;for(let z=P,q=P+H;z<q;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let v=new D,y=new D,T=new D,E=new D;function w(R){T.fromBufferAttribute(i,R),E.copy(T);let M=a[R];v.copy(M),v.sub(T.multiplyScalar(T.dot(M))).normalize(),y.crossVectors(E,M);let P=y.dot(c[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,P)}for(let R=0,M=S.length;R<M;++R){let x=S[R],P=x.start,H=x.count;for(let z=P,q=P+H;z<q;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){let _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*h;for(let p=0;p<h;p++)d[_++]=l[f++]}return new We(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_u=new he,Qi=new Kc,Mo=new ls,xu=new D,So=new D,Eo=new D,bo=new D,$a=new D,wo=new D,yu=new D,To=new D,Lt=class extends le{constructor(t=new Xe,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){wo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&($a.fromBufferAttribute(u,t),o?wo.addScaledVector($a,h):wo.addScaledVector($a.sub(e),h))}e.add(wo)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(Mo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Mo,xu)===null||Qi.origin.distanceToSquared(xu)>(t.far-t.near)**2))&&(_u.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(_u),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,T=v;y<T;y+=3){let E=a.getX(y),w=a.getX(y+1),R=a.getX(y+2);i=Ao(this,p,t,n,l,h,u,E,w,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let S=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);i=Ao(this,o,t,n,l,h,u,S,v,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,T=v;y<T;y+=3){let E=y,w=y+1,R=y+2;i=Ao(this,p,t,n,l,h,u,E,w,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let S=m,v=m+1,y=m+2;i=Ao(this,o,t,n,l,h,u,S,v,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function fm(s,t,e,n,i,r,o,a){let c;if(t.side===je?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Ni,a),c===null)return null;To.copy(a),To.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(To);return l<e.near||l>e.far?null:{distance:l,point:To.clone(),object:s}}function Ao(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,So),s.getVertexPosition(c,Eo),s.getVertexPosition(l,bo);let h=fm(s,t,e,n,So,Eo,bo,yu);if(h){let u=new D;ss.getBarycoord(yu,So,Eo,bo,u),i&&(h.uv=ss.getInterpolatedAttribute(i,a,c,l,u,new $t)),r&&(h.uv1=ss.getInterpolatedAttribute(r,a,c,l,u,new $t)),o&&(h.normal=ss.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new D,materialIndex:0};ss.getNormal(So,Eo,bo,d.normal),h.face=d,h.barycoord=u}return h}var pe=class s extends Xe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2));function _(g,m,p,S,v,y,T,E,w,R,M){let x=y/w,P=T/R,H=y/2,z=T/2,q=E/2,Z=w+1,F=R+1,rt=0,X=0,xt=new D;for(let nt=0;nt<F;nt++){let pt=nt*P-z;for(let Tt=0;Tt<Z;Tt++){let W=Tt*x-H;xt[g]=W*S,xt[m]=pt*v,xt[p]=q,l.push(xt.x,xt.y,xt.z),xt[g]=0,xt[m]=0,xt[p]=E>0?1:-1,h.push(xt.x,xt.y,xt.z),u.push(Tt/w),u.push(1-nt/R),rt+=1}}for(let nt=0;nt<R;nt++)for(let pt=0;pt<w;pt++){let Tt=d+pt+Z*nt,W=d+pt+Z*(nt+1),U=d+(pt+1)+Z*(nt+1),B=d+(pt+1)+Z*nt;c.push(Tt,W,B),c.push(W,U,B),X+=6}a.addGroup(f,X,M),f+=X,d+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function er(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function rn(s){let t={};for(let e=0;e<s.length;e++){let n=er(s[e]);for(let i in n)t[i]=n[i]}return t}function pm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function pd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var mm={clone:er,merge:rn},gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends hs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gm,this.fragmentShader=_m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=pm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Zo=class extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ii=new D,vu=new $t,Mu=new $t,Qe=class extends Zo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,vu,Mu),e.subVectors(Mu,vu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Or*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ks=-90,Hs=1,Qc=class extends le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Qe(ks,Hs,t,e);i.layers=this.layers,this.add(i);let r=new Qe(ks,Hs,t,e);r.layers=this.layers,this.add(r);let o=new Qe(ks,Hs,t,e);o.layers=this.layers,this.add(o);let a=new Qe(ks,Hs,t,e);a.layers=this.layers,this.add(a);let c=new Qe(ks,Hs,t,e);c.layers=this.layers,this.add(c);let l=new Qe(ks,Hs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},$o=class extends hn{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ks,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},jc=class extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new $o(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pe(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:Li});r.uniforms.tEquirect.value=e;let o=new Lt(i,r),a=e.minFilter;return e.minFilter===as&&(e.minFilter=Yn),new Qc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Ja=new D,xm=new D,ym=new ee,hi=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ja.subVectors(n,e).cross(xm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ja),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ym.getNormalMatrix(t),i=this.coplanarPoint(Ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new ls,Ro=new D,Gr=class{constructor(t=new hi,e=new hi,n=new hi,i=new hi,r=new hi,o=new hi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],S=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-r,d-l,m-f,y-p).normalize(),n[1].setComponents(c+r,d+l,m+f,y+p).normalize(),n[2].setComponents(c+o,d+h,m+_,y+S).normalize(),n[3].setComponents(c-o,d-h,m-_,y-S).normalize(),n[4].setComponents(c-a,d-u,m-g,y-v).normalize(),e===ui)n[5].setComponents(c+a,d+u,m+g,y+v).normalize();else if(e===Ho)n[5].setComponents(a,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ro.x=i.normal.x>0?t.max.x:t.min.x,Ro.y=i.normal.y>0?t.max.y:t.min.y,Ro.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function md(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function vm(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let g=u[f];s.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Te=class s extends Xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let S=p*d-o;for(let v=0;v<l;v++){let y=v*u-r;_.push(y,-S,0),g.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let v=S+l*p,y=S+l*(p+1),T=S+1+l*(p+1),E=S+1+l*p;f.push(v,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new _e(_,3)),this.setAttribute("normal",new _e(g,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sm=`#ifdef USE_ALPHAHASH
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
#endif`,Em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Am=`#ifdef USE_AOMAP
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
#endif`,Rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cm=`#ifdef USE_BATCHING
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
#endif`,Pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Um=`#ifdef USE_IRIDESCENCE
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
#endif`,Nm=`#ifdef USE_BUMPMAP
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
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wm=`#define PI 3.141592653589793
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
} // validated`,Xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qm=`vec3 transformedNormal = objectNormal;
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
#endif`,Ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jm=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c0=`#ifdef USE_GRADIENTMAP
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
}`,l0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d0=`uniform bool receiveShadow;
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
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x0=`PhysicalMaterial material;
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
#endif`,y0=`struct PhysicalMaterial {
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
}`,v0=`
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
#endif`,M0=`#if defined( RE_IndirectDiffuse )
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
#endif`,S0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P0=`#if defined( USE_POINTS_UV )
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
#endif`,I0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`#ifdef USE_MORPHTARGETS
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
#endif`,F0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G0=`#ifdef USE_NORMALMAP
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
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,J0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rg=`float getShadowMask() {
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
}`,og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mg=`uniform sampler2D t2D;
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`#include <common>
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
}`,Ag=`#if DEPTH_PACKING == 3200
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
}`,Rg=`#define DISTANCE
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
}`,Cg=`#define DISTANCE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`uniform float scale;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Og=`#define LAMBERT
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
}`,Fg=`#define LAMBERT
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
}`,Bg=`#define MATCAP
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
}`,zg=`#define MATCAP
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
}`,kg=`#define NORMAL
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
}`,Hg=`#define NORMAL
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
}`,Vg=`#define PHONG
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
}`,Gg=`#define PHONG
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
}`,Wg=`#define STANDARD
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
}`,Xg=`#define STANDARD
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
}`,qg=`#define TOON
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
}`,Yg=`#define TOON
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
}`,Zg=`uniform float size;
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
}`,$g=`uniform vec3 diffuse;
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
}`,Jg=`#include <common>
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
}`,Kg=`uniform vec3 color;
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
}`,Qg=`uniform float rotation;
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
}`,jg=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:Mm,alphahash_pars_fragment:Sm,alphamap_fragment:Em,alphamap_pars_fragment:bm,alphatest_fragment:wm,alphatest_pars_fragment:Tm,aomap_fragment:Am,aomap_pars_fragment:Rm,batching_pars_vertex:Cm,batching_vertex:Pm,begin_vertex:Im,beginnormal_vertex:Dm,bsdfs:Lm,iridescence_fragment:Um,bumpmap_pars_fragment:Nm,clipping_planes_fragment:Om,clipping_planes_pars_fragment:Fm,clipping_planes_pars_vertex:Bm,clipping_planes_vertex:zm,color_fragment:km,color_pars_fragment:Hm,color_pars_vertex:Vm,color_vertex:Gm,common:Wm,cube_uv_reflection_fragment:Xm,defaultnormal_vertex:qm,displacementmap_pars_vertex:Ym,displacementmap_vertex:Zm,emissivemap_fragment:$m,emissivemap_pars_fragment:Jm,colorspace_fragment:Km,colorspace_pars_fragment:Qm,envmap_fragment:jm,envmap_common_pars_fragment:t0,envmap_pars_fragment:e0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:f0,envmap_vertex:i0,fog_vertex:s0,fog_pars_vertex:r0,fog_fragment:o0,fog_pars_fragment:a0,gradientmap_pars_fragment:c0,lightmap_pars_fragment:l0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:u0,lights_pars_begin:d0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:g0,lights_phong_pars_fragment:_0,lights_physical_fragment:x0,lights_physical_pars_fragment:y0,lights_fragment_begin:v0,lights_fragment_maps:M0,lights_fragment_end:S0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:b0,logdepthbuf_pars_vertex:w0,logdepthbuf_vertex:T0,map_fragment:A0,map_pars_fragment:R0,map_particle_fragment:C0,map_particle_pars_fragment:P0,metalnessmap_fragment:I0,metalnessmap_pars_fragment:D0,morphinstance_vertex:L0,morphcolor_vertex:U0,morphnormal_vertex:N0,morphtarget_pars_vertex:O0,morphtarget_vertex:F0,normal_fragment_begin:B0,normal_fragment_maps:z0,normal_pars_fragment:k0,normal_pars_vertex:H0,normal_vertex:V0,normalmap_pars_fragment:G0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:X0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:Y0,opaque_fragment:Z0,packing:$0,premultiplied_alpha_fragment:J0,project_vertex:K0,dithering_fragment:Q0,dithering_pars_fragment:j0,roughnessmap_fragment:tg,roughnessmap_pars_fragment:eg,shadowmap_pars_fragment:ng,shadowmap_pars_vertex:ig,shadowmap_vertex:sg,shadowmask_pars_fragment:rg,skinbase_vertex:og,skinning_pars_vertex:ag,skinning_vertex:cg,skinnormal_vertex:lg,specularmap_fragment:hg,specularmap_pars_fragment:ug,tonemapping_fragment:dg,tonemapping_pars_fragment:fg,transmission_fragment:pg,transmission_pars_fragment:mg,uv_pars_fragment:gg,uv_pars_vertex:_g,uv_vertex:xg,worldpos_vertex:yg,background_vert:vg,background_frag:Mg,backgroundCube_vert:Sg,backgroundCube_frag:Eg,cube_vert:bg,cube_frag:wg,depth_vert:Tg,depth_frag:Ag,distanceRGBA_vert:Rg,distanceRGBA_frag:Cg,equirect_vert:Pg,equirect_frag:Ig,linedashed_vert:Dg,linedashed_frag:Lg,meshbasic_vert:Ug,meshbasic_frag:Ng,meshlambert_vert:Og,meshlambert_frag:Fg,meshmatcap_vert:Bg,meshmatcap_frag:zg,meshnormal_vert:kg,meshnormal_frag:Hg,meshphong_vert:Vg,meshphong_frag:Gg,meshphysical_vert:Wg,meshphysical_frag:Xg,meshtoon_vert:qg,meshtoon_frag:Yg,points_vert:Zg,points_frag:$g,shadow_vert:Jg,shadow_frag:Kg,sprite_vert:Qg,sprite_frag:jg},Ot={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},qn={basic:{uniforms:rn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:rn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:rn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:rn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:rn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:rn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:rn([Ot.points,Ot.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:rn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:rn([Ot.common,Ot.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:rn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:rn([Ot.sprite,Ot.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:rn([Ot.common,Ot.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:rn([Ot.lights,Ot.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};qn.physical={uniforms:rn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Co={r:0,b:0,g:0},ts=new An,t_=new he;function e_(s,t,e,n,i,r,o){let a=new Qt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function _(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function g(S){let v=!1,y=_(S);y===null?p(a,c):y&&y.isColor&&(p(y,1),v=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,v){let y=_(v);y&&(y.isCubeTexture||y.mapping===na)?(h===void 0&&(h=new Lt(new pe(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:er(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ts.copy(v.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(t_.makeRotationFromEuler(ts)),h.material.toneMapped=ae.getTransfer(y.colorSpace)!==me,(u!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Lt(new Te(2,2),new $n({name:"BackgroundMaterial",uniforms:er(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ae.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,v){S.getRGB(Co,pd(s)),n.buffers.color.setClear(Co.r,Co.g,Co.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:g,addToRenderList:m}}function n_(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(x,P,H,z,q){let Z=!1,F=u(z,H,P);r!==F&&(r=F,l(r.object)),Z=f(x,z,H,q),Z&&_(x,z,H,q),q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(x,P,H,z),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return s.createVertexArray()}function l(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,P,H){let z=H.wireframe===!0,q=n[x.id];q===void 0&&(q={},n[x.id]=q);let Z=q[P.id];Z===void 0&&(Z={},q[P.id]=Z);let F=Z[z];return F===void 0&&(F=d(c()),Z[z]=F),F}function d(x){let P=[],H=[],z=[];for(let q=0;q<e;q++)P[q]=0,H[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:z,object:x,attributes:{},index:null}}function f(x,P,H,z){let q=r.attributes,Z=P.attributes,F=0,rt=H.getAttributes();for(let X in rt)if(rt[X].location>=0){let nt=q[X],pt=Z[X];if(pt===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor)),nt===void 0||nt.attribute!==pt||pt&&nt.data!==pt.data)return!0;F++}return r.attributesNum!==F||r.index!==z}function _(x,P,H,z){let q={},Z=P.attributes,F=0,rt=H.getAttributes();for(let X in rt)if(rt[X].location>=0){let nt=Z[X];nt===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(nt=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(nt=x.instanceColor));let pt={};pt.attribute=nt,nt&&nt.data&&(pt.data=nt.data),q[X]=pt,F++}r.attributes=q,r.attributesNum=F,r.index=z}function g(){let x=r.newAttributes;for(let P=0,H=x.length;P<H;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){let H=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;H[x]=1,z[x]===0&&(s.enableVertexAttribArray(x),z[x]=1),q[x]!==P&&(s.vertexAttribDivisor(x,P),q[x]=P)}function S(){let x=r.newAttributes,P=r.enabledAttributes;for(let H=0,z=P.length;H<z;H++)P[H]!==x[H]&&(s.disableVertexAttribArray(H),P[H]=0)}function v(x,P,H,z,q,Z,F){F===!0?s.vertexAttribIPointer(x,P,H,q,Z):s.vertexAttribPointer(x,P,H,z,q,Z)}function y(x,P,H,z){g();let q=z.attributes,Z=H.getAttributes(),F=P.defaultAttributeValues;for(let rt in Z){let X=Z[rt];if(X.location>=0){let xt=q[rt];if(xt===void 0&&(rt==="instanceMatrix"&&x.instanceMatrix&&(xt=x.instanceMatrix),rt==="instanceColor"&&x.instanceColor&&(xt=x.instanceColor)),xt!==void 0){let nt=xt.normalized,pt=xt.itemSize,Tt=t.get(xt);if(Tt===void 0)continue;let W=Tt.buffer,U=Tt.type,B=Tt.bytesPerElement,Y=U===s.INT||U===s.UNSIGNED_INT||xt.gpuType===Ll;if(xt.isInterleavedBufferAttribute){let N=xt.data,et=N.stride,lt=xt.offset;if(N.isInstancedInterleavedBuffer){for(let Rt=0;Rt<X.locationSize;Rt++)p(X.location+Rt,N.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let Rt=0;Rt<X.locationSize;Rt++)m(X.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,W);for(let Rt=0;Rt<X.locationSize;Rt++)v(X.location+Rt,pt/X.locationSize,U,nt,et*B,(lt+pt/X.locationSize*Rt)*B,Y)}else{if(xt.isInstancedBufferAttribute){for(let N=0;N<X.locationSize;N++)p(X.location+N,xt.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let N=0;N<X.locationSize;N++)m(X.location+N);s.bindBuffer(s.ARRAY_BUFFER,W);for(let N=0;N<X.locationSize;N++)v(X.location+N,pt/X.locationSize,U,nt,pt*B,pt/X.locationSize*N*B,Y)}}else if(F!==void 0){let nt=F[rt];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(X.location,nt);break;case 3:s.vertexAttrib3fv(X.location,nt);break;case 4:s.vertexAttrib4fv(X.location,nt);break;default:s.vertexAttrib1fv(X.location,nt)}}}}S()}function T(){R();for(let x in n){let P=n[x];for(let H in P){let z=P[H];for(let q in z)h(z[q].object),delete z[q];delete P[H]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;let P=n[x.id];for(let H in P){let z=P[H];for(let q in z)h(z[q].object),delete z[q];delete P[H]}delete n[x.id]}function w(x){for(let P in n){let H=n[P];if(H[x.id]===void 0)continue;let z=H[x.id];for(let q in z)h(z[q].object),delete z[q];delete H[x.id]}}function R(){M(),o=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function i_(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function s_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==kn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let R=w===qr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==fi&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Zn&&!R)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:T,maxSamples:E}}function r_(s){let t=this,e=null,n=0,i=!1,r=!1,o=new hi,a=new ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,v=S*4,y=p.clippingState||null;c.value=y,y=h(_,d,v,f);for(let T=0;T!==v;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=c.value,_!==!0||m===null){let p=f+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==g;++v,y+=4)o.copy(u[v]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function o_(s){let t=new WeakMap;function e(o,a){return a===_c?o.mapping=Ks:a===xc&&(o.mapping=Qs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===_c||a===xc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new jc(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var nr=class extends Zo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Xs=4,Su=[.125,.215,.35,.446,.526,.582],rs=20,Ka=new nr,Eu=new Qt,Qa=null,ja=0,tc=0,ec=!1,ns=(1+Math.sqrt(5))/2,Vs=1/ns,bu=[new D(-ns,Vs,0),new D(ns,Vs,0),new D(-Vs,0,ns),new D(Vs,0,ns),new D(0,ns,-Vs),new D(0,ns,Vs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],ir=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Qa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qa,ja,tc),this._renderer.xr.enabled=ec,t.scissorTest=!1,Po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ks||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:qr,format:kn,colorSpace:lr,depthBuffer:!1},i=wu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a_(r)),this._blurMaterial=c_(r,t,e)}return i}_compileMaterial(t){let e=new Lt(this._lodPlanes[0],t);this._renderer.compile(e,Ka)}_sceneToCubeUV(t,e,n,i){let a=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Eu),h.toneMapping=Ui,h.autoClear=!1;let f=new Re({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),_=new Lt(new pe,f),g=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(Eu),g=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;Po(i,S*v,p>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ks||t.mapping===Qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Po(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bu[(i-r-1)%bu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Lt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*rs-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);let p=[],S=0;for(let w=0;w<rs;++w){let R=w/g,M=Math.exp(-R*R/2);p.push(M),w===0?S+=M:w<m&&(S+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;let y=this._sizeLods[i],T=3*y*(i>v-Xs?i-v+Xs:0),E=4*(this._cubeSize-y);Po(e,T,E,3*y,2*y),c.setRenderTarget(e),c.render(u,Ka)}};function a_(s){let t=[],e=[],n=[],i=s,r=s-Xs+1+Su.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Xs?c=Su[o-s+Xs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*f),v=new Float32Array(m*_*f),y=new Float32Array(p*_*f);for(let E=0;E<f;E++){let w=E%3*2/3-1,R=E>2?0:-1,M=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];S.set(M,g*_*E),v.set(d,m*_*E);let x=[E,E,E,E,E,E];y.set(x,p*_*E)}let T=new Xe;T.setAttribute("position",new We(S,g)),T.setAttribute("uv",new We(v,m)),T.setAttribute("faceIndex",new We(y,p)),t.push(T),i>Xs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wu(s,t,e){let n=new pi(s,t,e);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Po(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function c_(s,t,e){let n=new Float32Array(rs),i=new D(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Tu(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Au(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Hl(){return`

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
	`}function l_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===_c||c===xc,h=c===Ks||c===Qs;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ir(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new ir(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function h_(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ur("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function u_(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);for(let _ in d.morphAttributes){let g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let _ in d)t.update(d[_],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let _ in f){let g=f[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let S=f.array;g=f.version;for(let v=0,y=S.length;v<y;v+=3){let T=S[v+0],E=S[v+1],w=S[v+2];d.push(T,E,E,w,w,T)}}else if(_!==void 0){let S=_.array;g=_.version;for(let v=0,y=S.length/3-1;v<y;v+=3){let T=v+0,E=v+1,w=v+2;d.push(T,E,E,w,w,T)}}else return;let m=new(dd(d)?Yo:qo)(d,1);m.version=g;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function d_(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,d*o,_),e.update(f,n,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function u(d,f,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let p=0;for(let S=0;S<_;S++)p+=f[S]*g[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function f_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function p_(s,t,e){let n=new WeakMap,i=new ge;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let M=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],v=0;f===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let y=a.attributes.position.count*v,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*u),w=new Wo(E,y,T,u);w.type=Zn,w.needsUpdate=!0;let R=v*4;for(let x=0;x<u;x++){let P=m[x],H=p[x],z=S[x],q=y*T*4*x;for(let Z=0;Z<P.count;Z++){let F=Z*R;f===!0&&(i.fromBufferAttribute(P,Z),E[q+F+0]=i.x,E[q+F+1]=i.y,E[q+F+2]=i.z,E[q+F+3]=0),_===!0&&(i.fromBufferAttribute(H,Z),E[q+F+4]=i.x,E[q+F+5]=i.y,E[q+F+6]=i.z,E[q+F+7]=0),g===!0&&(i.fromBufferAttribute(z,Z),E[q+F+8]=i.x,E[q+F+9]=i.y,E[q+F+10]=i.z,E[q+F+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new $t(y,T)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];let _=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function m_(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Jo=class extends hn{constructor(t,e,n,i,r,o,a,c,l,h=Ys){if(h!==Ys&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ys&&(n=cs),n===void 0&&h===tr&&(n=js),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:vn,this.minFilter=c!==void 0?c:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},gd=new hn,Ru=new Jo(1,1),_d=new Wo,xd=new Jc,yd=new $o,Cu=[],Pu=[],Iu=new Float32Array(16),Du=new Float32Array(9),Lu=new Float32Array(4);function ur(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Cu[i];if(r===void 0&&(r=new Float32Array(i),Cu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ze(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function sa(s,t){let e=Pu[t];e===void 0&&(e=new Int32Array(t),Pu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function g_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function __(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2fv(this.addr,t),ze(e,t)}}function x_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;s.uniform3fv(this.addr,t),ze(e,t)}}function y_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4fv(this.addr,t),ze(e,t)}}function v_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Lu.set(n),s.uniformMatrix2fv(this.addr,!1,Lu),ze(e,n)}}function M_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Du.set(n),s.uniformMatrix3fv(this.addr,!1,Du),ze(e,n)}}function S_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Iu.set(n),s.uniformMatrix4fv(this.addr,!1,Iu),ze(e,n)}}function E_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function b_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2iv(this.addr,t),ze(e,t)}}function w_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3iv(this.addr,t),ze(e,t)}}function T_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4iv(this.addr,t),ze(e,t)}}function A_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function R_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2uiv(this.addr,t),ze(e,t)}}function C_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3uiv(this.addr,t),ze(e,t)}}function P_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4uiv(this.addr,t),ze(e,t)}}function I_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ru.compareFunction=ud,r=Ru):r=gd,e.setTexture2D(t||r,i)}function D_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||xd,i)}function L_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||yd,i)}function U_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||_d,i)}function N_(s){switch(s){case 5126:return g_;case 35664:return __;case 35665:return x_;case 35666:return y_;case 35674:return v_;case 35675:return M_;case 35676:return S_;case 5124:case 35670:return E_;case 35667:case 35671:return b_;case 35668:case 35672:return w_;case 35669:case 35673:return T_;case 5125:return A_;case 36294:return R_;case 36295:return C_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return U_}}function O_(s,t){s.uniform1fv(this.addr,t)}function F_(s,t){let e=ur(t,this.size,2);s.uniform2fv(this.addr,e)}function B_(s,t){let e=ur(t,this.size,3);s.uniform3fv(this.addr,e)}function z_(s,t){let e=ur(t,this.size,4);s.uniform4fv(this.addr,e)}function k_(s,t){let e=ur(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function H_(s,t){let e=ur(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function V_(s,t){let e=ur(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function G_(s,t){s.uniform1iv(this.addr,t)}function W_(s,t){s.uniform2iv(this.addr,t)}function X_(s,t){s.uniform3iv(this.addr,t)}function q_(s,t){s.uniform4iv(this.addr,t)}function Y_(s,t){s.uniform1uiv(this.addr,t)}function Z_(s,t){s.uniform2uiv(this.addr,t)}function $_(s,t){s.uniform3uiv(this.addr,t)}function J_(s,t){s.uniform4uiv(this.addr,t)}function K_(s,t,e){let n=this.cache,i=t.length,r=sa(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||gd,r[o])}function Q_(s,t,e){let n=this.cache,i=t.length,r=sa(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||xd,r[o])}function j_(s,t,e){let n=this.cache,i=t.length,r=sa(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||yd,r[o])}function tx(s,t,e){let n=this.cache,i=t.length,r=sa(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||_d,r[o])}function ex(s){switch(s){case 5126:return O_;case 35664:return F_;case 35665:return B_;case 35666:return z_;case 35674:return k_;case 35675:return H_;case 35676:return V_;case 5124:case 35670:return G_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return q_;case 5125:return Y_;case 36294:return Z_;case 36295:return $_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return tx}}var tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=N_(e.type)}},el=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ex(e.type)}},nl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},nc=/(\w+)(\])?(\[|\.)?/g;function Uu(s,t){s.seq.push(t),s.map[t.id]=t}function nx(s,t,e){let n=s.name,i=n.length;for(nc.lastIndex=0;;){let r=nc.exec(n),o=nc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Uu(e,l===void 0?new tl(a,s,t):new el(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new nl(a),Uu(e,u)),e=u}}}var $s=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);nx(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Nu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var ix=37297,sx=0;function rx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ou=new ee;function ox(s){ae._getMatrix(Ou,ae.workingColorSpace,s);let t=`mat3( ${Ou.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(s)){case ia:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Fu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+rx(s.getShaderSource(t),o)}else return i}function ax(s,t){let e=ox(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cx(s,t){let e;switch(t){case yp:e="Linear";break;case vp:e="Reinhard";break;case Mp:e="Cineon";break;case Xr:e="ACESFilmic";break;case Ep:e="AgX";break;case bp:e="Neutral";break;case Sp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Io=new D;function lx(){ae.getLuminanceCoefficients(Io);let s=Io.x.toFixed(4),t=Io.y.toFixed(4),e=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function ux(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Nr(s){return s!==""}function Bu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(s){return s.replace(fx,mx)}var px=new Map;function mx(s,t){let e=ie[t];if(e===void 0){let n=px.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return il(e)}var gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(s){return s.replace(gx,_x)}function _x(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Hu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function xx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Qf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function yx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ks:case Qs:t="ENVMAP_TYPE_CUBE";break;case na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Qs:t="ENVMAP_MODE_REFRACTION";break}return t}function Mx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ju:t="ENVMAP_BLENDING_MULTIPLY";break;case _p:t="ENVMAP_BLENDING_MIX";break;case xp:t="ENVMAP_BLENDING_ADD";break}return t}function Sx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ex(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=xx(e),l=yx(e),h=vx(e),u=Mx(e),d=Sx(e),f=hx(e),_=ux(r),g=i.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Nr).join(`
`),p.length>0&&(p+=`
`)):(m=[Hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),p=[Hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?ie.tonemapping_pars_fragment:"",e.toneMapping!==Ui?cx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,ax("linearToOutputTexel",e.outputColorSpace),lx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nr).join(`
`)),o=il(o),o=Bu(o,e),o=zu(o,e),a=il(a),a=Bu(a,e),a=zu(a,e),o=ku(o),a=ku(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=S+m+o,y=S+p+a,T=Nu(i,i.VERTEX_SHADER,v),E=Nu(i,i.FRAGMENT_SHADER,y);i.attachShader(g,T),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(P){if(s.debug.checkShaderErrors){let H=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(T).trim(),q=i.getShaderInfoLog(E).trim(),Z=!0,F=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,T,E);else{let rt=Fu(i,T,"vertex"),X=Fu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+rt+`
`+X)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||q==="")&&(F=!1);F&&(P.diagnostics={runnable:Z,programLog:H,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:p}})}i.deleteShader(T),i.deleteShader(E),R=new $s(i,g),M=dx(i,g)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,ix)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=E,this}var bx=0,sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rl(t),e.set(t,n)),n}},rl=class{constructor(t){this.id=bx++,this.code=t,this.usedTimes=0}};function wx(s,t,e,n,i,r,o){let a=new Xo,c=new sl,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,P,H,z){let q=H.fog,Z=z.geometry,F=M.isMeshStandardMaterial?H.environment:null,rt=(M.isMeshStandardMaterial?e:t).get(M.envMap||F),X=rt&&rt.mapping===na?rt.image.height:null,xt=_[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let nt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,pt=nt!==void 0?nt.length:0,Tt=0;Z.morphAttributes.position!==void 0&&(Tt=1),Z.morphAttributes.normal!==void 0&&(Tt=2),Z.morphAttributes.color!==void 0&&(Tt=3);let W,U,B,Y;if(xt){let At=qn[xt];W=At.vertexShader,U=At.fragmentShader}else W=M.vertexShader,U=M.fragmentShader,c.update(M),B=c.getVertexShaderID(M),Y=c.getFragmentShaderID(M);let N=s.getRenderTarget(),et=s.state.buffers.depth.getReversed(),lt=z.isInstancedMesh===!0,Rt=z.isBatchedMesh===!0,Ct=!!M.map,Mt=!!M.matcap,Bt=!!rt,G=!!M.aoMap,Kt=!!M.lightMap,Vt=!!M.bumpMap,zt=!!M.normalMap,Pt=!!M.displacementMap,Zt=!!M.emissiveMap,It=!!M.metalnessMap,I=!!M.roughnessMap,b=M.anisotropy>0,tt=M.clearcoat>0,gt=M.dispersion>0,Et=M.iridescence>0,ut=M.sheen>0,yt=M.transmission>0,vt=b&&!!M.anisotropyMap,St=tt&&!!M.clearcoatMap,Ft=tt&&!!M.clearcoatNormalMap,st=tt&&!!M.clearcoatRoughnessMap,mt=Et&&!!M.iridescenceMap,Ut=Et&&!!M.iridescenceThicknessMap,ht=ut&&!!M.sheenColorMap,_t=ut&&!!M.sheenRoughnessMap,$=!!M.specularMap,k=!!M.specularColorMap,Q=!!M.specularIntensityMap,A=yt&&!!M.transmissionMap,it=yt&&!!M.thicknessMap,O=!!M.gradientMap,j=!!M.alphaMap,L=M.alphaTest>0,V=!!M.alphaHash,ft=!!M.extensions,Nt=Ui;M.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Nt=s.toneMapping);let dt={shaderID:xt,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:U,defines:M.defines,customVertexShaderID:B,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Rt,batchingColor:Rt&&z._colorsTexture!==null,instancing:lt,instancingColor:lt&&z.instanceColor!==null,instancingMorph:lt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?s.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:lr,alphaToCoverage:!!M.alphaToCoverage,map:Ct,matcap:Mt,envMap:Bt,envMapMode:Bt&&rt.mapping,envMapCubeUVHeight:X,aoMap:G,lightMap:Kt,bumpMap:Vt,normalMap:zt,displacementMap:d&&Pt,emissiveMap:Zt,normalMapObjectSpace:zt&&M.normalMapType===Rp,normalMapTangentSpace:zt&&M.normalMapType===hd,metalnessMap:It,roughnessMap:I,anisotropy:b,anisotropyMap:vt,clearcoat:tt,clearcoatMap:St,clearcoatNormalMap:Ft,clearcoatRoughnessMap:st,dispersion:gt,iridescence:Et,iridescenceMap:mt,iridescenceThicknessMap:Ut,sheen:ut,sheenColorMap:ht,sheenRoughnessMap:_t,specularMap:$,specularColorMap:k,specularIntensityMap:Q,transmission:yt,transmissionMap:A,thicknessMap:it,gradientMap:O,opaque:M.transparent===!1&&M.blending===qs&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:L,alphaHash:V,combine:M.combine,mapUv:Ct&&g(M.map.channel),aoMapUv:G&&g(M.aoMap.channel),lightMapUv:Kt&&g(M.lightMap.channel),bumpMapUv:Vt&&g(M.bumpMap.channel),normalMapUv:zt&&g(M.normalMap.channel),displacementMapUv:Pt&&g(M.displacementMap.channel),emissiveMapUv:Zt&&g(M.emissiveMap.channel),metalnessMapUv:It&&g(M.metalnessMap.channel),roughnessMapUv:I&&g(M.roughnessMap.channel),anisotropyMapUv:vt&&g(M.anisotropyMap.channel),clearcoatMapUv:St&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:_t&&g(M.sheenRoughnessMap.channel),specularMapUv:$&&g(M.specularMap.channel),specularColorMapUv:k&&g(M.specularColorMap.channel),specularIntensityMapUv:Q&&g(M.specularIntensityMap.channel),transmissionMapUv:A&&g(M.transmissionMap.channel),thicknessMapUv:it&&g(M.thicknessMap.channel),alphaMapUv:j&&g(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(zt||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(Ct||j),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:et,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Tt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Ct&&M.map.isVideoTexture===!0&&ae.getTransfer(M.map.colorSpace)===me,decodeVideoTextureEmissive:Zt&&M.emissiveMap.isVideoTexture===!0&&ae.getTransfer(M.emissiveMap.colorSpace)===me,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zn,flipSided:M.side===je,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ft&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&M.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function p(M){let x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)x.push(P),x.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(S(x,M),v(x,M),x.push(s.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function S(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function v(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){let x=_[M.type],P;if(x){let H=qn[x];P=mm.clone(H.uniforms)}else P=M.uniforms;return P}function T(M,x){let P;for(let H=0,z=h.length;H<z;H++){let q=h[H];if(q.cacheKey===x){P=q,++P.usedTimes;break}}return P===void 0&&(P=new Ex(s,x,M,r),h.push(P)),P}function E(M){if(--M.usedTimes===0){let x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function w(M){c.remove(M)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:R}}function Tx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Ax(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Vu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Gu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,_,g,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function a(u,d,f,_,g,m){let p=o(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,_,g,m){let p=o(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Ax),n.length>1&&n.sort(d||Vu),i.length>1&&i.sort(d||Vu)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Rx(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Gu,s.set(n,[o])):i>=r.length?(o=new Gu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Cx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Qt};break;case"SpotLight":e={position:new D,direction:new D,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Px(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Ix=0;function Dx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Lx(s){let t=new Cx,e=Px(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let i=new D,r=new he,o=new he;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,S=0,v=0,y=0,T=0,E=0,w=0;l.sort(Dx);for(let M=0,x=l.length;M<x;M++){let P=l[M],H=P.color,z=P.intensity,q=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*z,u+=H.g*z,d+=H.b*z;else if(P.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(P.sh.coefficients[F],z);w++}else if(P.isDirectionalLight){let F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let rt=P.shadow,X=e.get(P);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=P.shadow.matrix,S++}n.directional[f]=F,f++}else if(P.isSpotLight){let F=t.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(H).multiplyScalar(z),F.distance=q,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,n.spot[g]=F;let rt=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,rt.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[g]=rt.matrix,P.castShadow){let X=e.get(P);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=Z,y++}g++}else if(P.isRectAreaLight){let F=t.get(P);F.color.copy(H).multiplyScalar(z),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=F,m++}else if(P.isPointLight){let F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){let rt=P.shadow,X=e.get(P);X.shadowIntensity=rt.intensity,X.shadowBias=rt.bias,X.shadowNormalBias=rt.normalBias,X.shadowRadius=rt.radius,X.shadowMapSize=rt.mapSize,X.shadowCameraNear=rt.camera.near,X.shadowCameraFar=rt.camera.far,n.pointShadow[_]=X,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=P.shadow.matrix,v++}n.point[_]=F,_++}else if(P.isHemisphereLight){let F=t.get(P);F.skyColor.copy(P.color).multiplyScalar(z),F.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=F,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==v||R.numSpotShadows!==y||R.numSpotMaps!==T||R.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,R.directionalLength=f,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=v,R.numSpotShadows=y,R.numSpotMaps=T,R.numLightProbes=w,n.version=Ix++)}function c(l,h){let u=0,d=0,f=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let v=l[p];if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(v.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Wu(s){let t=new Lx(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Ux(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Wu(s),t.set(i,[a])):r>=o.length?(a=new Wu(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ol=class extends hs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},al=class extends hs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ox=`uniform sampler2D shadow_pass;
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
}`;function Fx(s,t,e){let n=new Gr,i=new $t,r=new $t,o=new ge,a=new ol({depthPacking:Ap}),c=new al,l={},h=e.maxTextureSize,u={[Ni]:je,[je]:Ni,[zn]:zn},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:Nx,fragmentShader:Ox}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new Xe;_.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Lt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qu;let p=this.type;this.render=function(E,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=s.getRenderTarget(),x=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Li),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let z=p!==li&&this.type===li,q=p===li&&this.type!==li;for(let Z=0,F=E.length;Z<F;Z++){let rt=E[Z],X=rt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let xt=X.getFrameExtents();if(i.multiply(xt),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/xt.x),i.x=r.x*xt.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/xt.y),i.y=r.y*xt.y,X.mapSize.y=r.y)),X.map===null||z===!0||q===!0){let pt=this.type!==li?{minFilter:vn,magFilter:vn}:{};X.map!==null&&X.map.dispose(),X.map=new pi(i.x,i.y,pt),X.map.texture.name=rt.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let nt=X.getViewportCount();for(let pt=0;pt<nt;pt++){let Tt=X.getViewport(pt);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),H.viewport(o),X.updateMatrices(rt,pt),n=X.getFrustum(),y(w,R,X.camera,rt,this.type)}X.isPointLightShadow!==!0&&this.type===li&&S(X,R),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,x,P)};function S(E,w){let R=t.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new pi(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(w,null,R,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(w,null,R,f,g,null)}function v(E,w,R,M){let x=null,P=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)x=P;else if(x=R.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let H=x.uuid,z=w.uuid,q=l[H];q===void 0&&(q={},l[H]=q);let Z=q[z];Z===void 0&&(Z=x.clone(),q[z]=Z,w.addEventListener("dispose",T)),x=Z}if(x.visible=w.visible,x.wireframe=w.wireframe,M===li?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:u[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let H=s.properties.get(x);H.light=R}return x}function y(E,w,R,M,x){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===li)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let z=t.update(E),q=E.material;if(Array.isArray(q)){let Z=z.groups;for(let F=0,rt=Z.length;F<rt;F++){let X=Z[F],xt=q[X.materialIndex];if(xt&&xt.visible){let nt=v(E,xt,M,x);E.onBeforeShadow(s,E,w,R,z,nt,X),s.renderBufferDirect(R,null,z,nt,E,X),E.onAfterShadow(s,E,w,R,z,nt,X)}}}else if(q.visible){let Z=v(E,q,M,x);E.onBeforeShadow(s,E,w,R,z,Z,null),s.renderBufferDirect(R,null,z,Z,E,null),E.onAfterShadow(s,E,w,R,z,Z,null)}}let H=E.children;for(let z=0,q=H.length;z<q;z++)y(H[z],w,R,M,x)}function T(E){E.target.removeEventListener("dispose",T);for(let R in l){let M=l[R],x=E.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}var Bx={[hc]:uc,[dc]:mc,[fc]:gc,[Js]:pc,[uc]:hc,[mc]:dc,[gc]:fc,[pc]:Js};function zx(s,t){function e(){let A=!1,it=new ge,O=null,j=new ge(0,0,0,0);return{setMask:function(L){O!==L&&!A&&(s.colorMask(L,L,L,L),O=L)},setLocked:function(L){A=L},setClear:function(L,V,ft,Nt,dt){dt===!0&&(L*=Nt,V*=Nt,ft*=Nt),it.set(L,V,ft,Nt),j.equals(it)===!1&&(s.clearColor(L,V,ft,Nt),j.copy(it))},reset:function(){A=!1,O=null,j.set(-1,0,0,0)}}}function n(){let A=!1,it=!1,O=null,j=null,L=null;return{setReversed:function(V){if(it!==V){let ft=t.get("EXT_clip_control");it?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);let Nt=L;L=null,this.setClear(Nt)}it=V},getReversed:function(){return it},setTest:function(V){V?N(s.DEPTH_TEST):et(s.DEPTH_TEST)},setMask:function(V){O!==V&&!A&&(s.depthMask(V),O=V)},setFunc:function(V){if(it&&(V=Bx[V]),j!==V){switch(V){case hc:s.depthFunc(s.NEVER);break;case uc:s.depthFunc(s.ALWAYS);break;case dc:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case fc:s.depthFunc(s.EQUAL);break;case pc:s.depthFunc(s.GEQUAL);break;case mc:s.depthFunc(s.GREATER);break;case gc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=V}},setLocked:function(V){A=V},setClear:function(V){L!==V&&(it&&(V=1-V),s.clearDepth(V),L=V)},reset:function(){A=!1,O=null,j=null,L=null,it=!1}}}function i(){let A=!1,it=null,O=null,j=null,L=null,V=null,ft=null,Nt=null,dt=null;return{setTest:function(At){A||(At?N(s.STENCIL_TEST):et(s.STENCIL_TEST))},setMask:function(At){it!==At&&!A&&(s.stencilMask(At),it=At)},setFunc:function(At,bt,kt){(O!==At||j!==bt||L!==kt)&&(s.stencilFunc(At,bt,kt),O=At,j=bt,L=kt)},setOp:function(At,bt,kt){(V!==At||ft!==bt||Nt!==kt)&&(s.stencilOp(At,bt,kt),V=At,ft=bt,Nt=kt)},setLocked:function(At){A=At},setClear:function(At){dt!==At&&(s.clearStencil(At),dt=At)},reset:function(){A=!1,it=null,O=null,j=null,L=null,V=null,ft=null,Nt=null,dt=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,S=null,v=null,y=null,T=null,E=null,w=new Qt(0,0,0),R=0,M=!1,x=null,P=null,H=null,z=null,q=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,rt=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=rt>=1):X.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=rt>=2);let xt=null,nt={},pt=s.getParameter(s.SCISSOR_BOX),Tt=s.getParameter(s.VIEWPORT),W=new ge().fromArray(pt),U=new ge().fromArray(Tt);function B(A,it,O,j){let L=new Uint8Array(4),V=s.createTexture();s.bindTexture(A,V),s.texParameteri(A,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(A,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ft=0;ft<O;ft++)A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY?s.texImage3D(it,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,L):s.texImage2D(it+ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,L);return V}let Y={};Y[s.TEXTURE_2D]=B(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=B(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=B(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=B(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(s.DEPTH_TEST),o.setFunc(Js),Vt(!1),zt(Xh),N(s.CULL_FACE),G(Li);function N(A){h[A]!==!0&&(s.enable(A),h[A]=!0)}function et(A){h[A]!==!1&&(s.disable(A),h[A]=!1)}function lt(A,it){return u[A]!==it?(s.bindFramebuffer(A,it),u[A]=it,A===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=it),A===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=it),!0):!1}function Rt(A,it){let O=f,j=!1;if(A){O=d.get(it),O===void 0&&(O=[],d.set(it,O));let L=A.textures;if(O.length!==L.length||O[0]!==s.COLOR_ATTACHMENT0){for(let V=0,ft=L.length;V<ft;V++)O[V]=s.COLOR_ATTACHMENT0+V;O.length=L.length,j=!0}}else O[0]!==s.BACK&&(O[0]=s.BACK,j=!0);j&&s.drawBuffers(O)}function Ct(A){return _!==A?(s.useProgram(A),_=A,!0):!1}let Mt={[is]:s.FUNC_ADD,[tp]:s.FUNC_SUBTRACT,[ep]:s.FUNC_REVERSE_SUBTRACT};Mt[np]=s.MIN,Mt[ip]=s.MAX;let Bt={[sp]:s.ZERO,[rp]:s.ONE,[op]:s.SRC_COLOR,[cc]:s.SRC_ALPHA,[dp]:s.SRC_ALPHA_SATURATE,[hp]:s.DST_COLOR,[cp]:s.DST_ALPHA,[ap]:s.ONE_MINUS_SRC_COLOR,[lc]:s.ONE_MINUS_SRC_ALPHA,[up]:s.ONE_MINUS_DST_COLOR,[lp]:s.ONE_MINUS_DST_ALPHA,[fp]:s.CONSTANT_COLOR,[pp]:s.ONE_MINUS_CONSTANT_COLOR,[mp]:s.CONSTANT_ALPHA,[gp]:s.ONE_MINUS_CONSTANT_ALPHA};function G(A,it,O,j,L,V,ft,Nt,dt,At){if(A===Li){g===!0&&(et(s.BLEND),g=!1);return}if(g===!1&&(N(s.BLEND),g=!0),A!==jf){if(A!==m||At!==M){if((p!==is||y!==is)&&(s.blendEquation(s.FUNC_ADD),p=is,y=is),At)switch(A){case qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qh:s.blendFunc(s.ONE,s.ONE);break;case Yh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Yh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}S=null,v=null,T=null,E=null,w.set(0,0,0),R=0,m=A,M=At}return}L=L||it,V=V||O,ft=ft||j,(it!==p||L!==y)&&(s.blendEquationSeparate(Mt[it],Mt[L]),p=it,y=L),(O!==S||j!==v||V!==T||ft!==E)&&(s.blendFuncSeparate(Bt[O],Bt[j],Bt[V],Bt[ft]),S=O,v=j,T=V,E=ft),(Nt.equals(w)===!1||dt!==R)&&(s.blendColor(Nt.r,Nt.g,Nt.b,dt),w.copy(Nt),R=dt),m=A,M=!1}function Kt(A,it){A.side===zn?et(s.CULL_FACE):N(s.CULL_FACE);let O=A.side===je;it&&(O=!O),Vt(O),A.blending===qs&&A.transparent===!1?G(Li):G(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),o.setFunc(A.depthFunc),o.setTest(A.depthTest),o.setMask(A.depthWrite),r.setMask(A.colorWrite);let j=A.stencilWrite;a.setTest(j),j&&(a.setMask(A.stencilWriteMask),a.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),a.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Zt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?N(s.SAMPLE_ALPHA_TO_COVERAGE):et(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(A){x!==A&&(A?s.frontFace(s.CW):s.frontFace(s.CCW),x=A)}function zt(A){A!==Jf?(N(s.CULL_FACE),A!==P&&(A===Xh?s.cullFace(s.BACK):A===Kf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):et(s.CULL_FACE),P=A}function Pt(A){A!==H&&(F&&s.lineWidth(A),H=A)}function Zt(A,it,O){A?(N(s.POLYGON_OFFSET_FILL),(z!==it||q!==O)&&(s.polygonOffset(it,O),z=it,q=O)):et(s.POLYGON_OFFSET_FILL)}function It(A){A?N(s.SCISSOR_TEST):et(s.SCISSOR_TEST)}function I(A){A===void 0&&(A=s.TEXTURE0+Z-1),xt!==A&&(s.activeTexture(A),xt=A)}function b(A,it,O){O===void 0&&(xt===null?O=s.TEXTURE0+Z-1:O=xt);let j=nt[O];j===void 0&&(j={type:void 0,texture:void 0},nt[O]=j),(j.type!==A||j.texture!==it)&&(xt!==O&&(s.activeTexture(O),xt=O),s.bindTexture(A,it||Y[A]),j.type=A,j.texture=it)}function tt(){let A=nt[xt];A!==void 0&&A.type!==void 0&&(s.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function gt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ut(){try{s.texSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function yt(){try{s.texSubImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function vt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function St(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ft(){try{s.texStorage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ut(){try{s.texImage3D.apply(s,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ht(A){W.equals(A)===!1&&(s.scissor(A.x,A.y,A.z,A.w),W.copy(A))}function _t(A){U.equals(A)===!1&&(s.viewport(A.x,A.y,A.z,A.w),U.copy(A))}function $(A,it){let O=l.get(it);O===void 0&&(O=new WeakMap,l.set(it,O));let j=O.get(A);j===void 0&&(j=s.getUniformBlockIndex(it,A.name),O.set(A,j))}function k(A,it){let j=l.get(it).get(A);c.get(it)!==j&&(s.uniformBlockBinding(it,j,A.__bindingPointIndex),c.set(it,j))}function Q(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},xt=null,nt={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,S=null,v=null,y=null,T=null,E=null,w=new Qt(0,0,0),R=0,M=!1,x=null,P=null,H=null,z=null,q=null,W.set(0,0,s.canvas.width,s.canvas.height),U.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:N,disable:et,bindFramebuffer:lt,drawBuffers:Rt,useProgram:Ct,setBlending:G,setMaterial:Kt,setFlipSided:Vt,setCullFace:zt,setLineWidth:Pt,setPolygonOffset:Zt,setScissorTest:It,activeTexture:I,bindTexture:b,unbindTexture:tt,compressedTexImage2D:gt,compressedTexImage3D:Et,texImage2D:mt,texImage3D:Ut,updateUBOMapping:$,uniformBlockBinding:k,texStorage2D:Ft,texStorage3D:st,texSubImage2D:ut,texSubImage3D:yt,compressedTexSubImage2D:vt,compressedTexSubImage3D:St,scissor:ht,viewport:_t,reset:Q}}function Xu(s,t,e,n){let i=kx(n);switch(e){case sd:return s*t;case od:return s*t;case ad:return s*t*2;case Ol:return s*t/i.components*i.byteLength;case Fl:return s*t/i.components*i.byteLength;case cd:return s*t*2/i.components*i.byteLength;case Bl:return s*t*2/i.components*i.byteLength;case rd:return s*t*3/i.components*i.byteLength;case kn:return s*t*4/i.components*i.byteLength;case zl:return s*t*4/i.components*i.byteLength;case No:case Oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Fo:case Bo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sc:case bc:return Math.max(s,16)*Math.max(t,8)/4;case Mc:case Ec:return Math.max(s,8)*Math.max(t,8)/2;case wc:case Tc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case zc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case kc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Hc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case zo:case Vc:case Gc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ld:case Wc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Xc:case qc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kx(s){switch(s){case fi:case ed:return{byteLength:1,components:1};case Hr:case nd:case qr:return{byteLength:2,components:1};case Ul:case Nl:return{byteLength:2,components:4};case cs:case Ll:case Zn:return{byteLength:4,components:1};case id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Hx(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $t,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,b){return f?new OffscreenCanvas(I,b):Vo("canvas")}function g(I,b,tt){let gt=1,Et=It(I);if((Et.width>tt||Et.height>tt)&&(gt=tt/Math.max(Et.width,Et.height)),gt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ut=Math.floor(gt*Et.width),yt=Math.floor(gt*Et.height);u===void 0&&(u=_(ut,yt));let vt=b?_(ut,yt):u;return vt.width=ut,vt.height=yt,vt.getContext("2d").drawImage(I,0,0,ut,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+ut+"x"+yt+")."),vt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function S(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(I,b,tt,gt,Et=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ut=b;if(b===s.RED&&(tt===s.FLOAT&&(ut=s.R32F),tt===s.HALF_FLOAT&&(ut=s.R16F),tt===s.UNSIGNED_BYTE&&(ut=s.R8)),b===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ut=s.R8UI),tt===s.UNSIGNED_SHORT&&(ut=s.R16UI),tt===s.UNSIGNED_INT&&(ut=s.R32UI),tt===s.BYTE&&(ut=s.R8I),tt===s.SHORT&&(ut=s.R16I),tt===s.INT&&(ut=s.R32I)),b===s.RG&&(tt===s.FLOAT&&(ut=s.RG32F),tt===s.HALF_FLOAT&&(ut=s.RG16F),tt===s.UNSIGNED_BYTE&&(ut=s.RG8)),b===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ut=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ut=s.RG16UI),tt===s.UNSIGNED_INT&&(ut=s.RG32UI),tt===s.BYTE&&(ut=s.RG8I),tt===s.SHORT&&(ut=s.RG16I),tt===s.INT&&(ut=s.RG32I)),b===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ut=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ut=s.RGB16UI),tt===s.UNSIGNED_INT&&(ut=s.RGB32UI),tt===s.BYTE&&(ut=s.RGB8I),tt===s.SHORT&&(ut=s.RGB16I),tt===s.INT&&(ut=s.RGB32I)),b===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ut=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ut=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ut=s.RGBA32UI),tt===s.BYTE&&(ut=s.RGBA8I),tt===s.SHORT&&(ut=s.RGBA16I),tt===s.INT&&(ut=s.RGBA32I)),b===s.RGB&&tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ut=s.RGB9_E5),b===s.RGBA){let yt=Et?ia:ae.getTransfer(gt);tt===s.FLOAT&&(ut=s.RGBA32F),tt===s.HALF_FLOAT&&(ut=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ut=yt===me?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ut=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ut=s.RGB5_A1)}return(ut===s.R16F||ut===s.R32F||ut===s.RG16F||ut===s.RG32F||ut===s.RGBA16F||ut===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function y(I,b){let tt;return I?b===null||b===cs||b===js?tt=s.DEPTH24_STENCIL8:b===Zn?tt=s.DEPTH32F_STENCIL8:b===Hr&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===cs||b===js?tt=s.DEPTH_COMPONENT24:b===Zn?tt=s.DEPTH_COMPONENT32F:b===Hr&&(tt=s.DEPTH_COMPONENT16),tt}function T(I,b){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==vn&&I.minFilter!==Yn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function E(I){let b=I.target;b.removeEventListener("dispose",E),R(b),b.isVideoTexture&&h.delete(b)}function w(I){let b=I.target;b.removeEventListener("dispose",w),x(b)}function R(I){let b=n.get(I);if(b.__webglInit===void 0)return;let tt=I.source,gt=d.get(tt);if(gt){let Et=gt[b.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&M(I),Object.keys(gt).length===0&&d.delete(tt)}n.remove(I)}function M(I){let b=n.get(I);s.deleteTexture(b.__webglTexture);let tt=I.source,gt=d.get(tt);delete gt[b.__cacheKey],o.memory.textures--}function x(I){let b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(b.__webglFramebuffer[gt]))for(let Et=0;Et<b.__webglFramebuffer[gt].length;Et++)s.deleteFramebuffer(b.__webglFramebuffer[gt][Et]);else s.deleteFramebuffer(b.__webglFramebuffer[gt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[gt])}else{if(Array.isArray(b.__webglFramebuffer))for(let gt=0;gt<b.__webglFramebuffer.length;gt++)s.deleteFramebuffer(b.__webglFramebuffer[gt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let gt=0;gt<b.__webglColorRenderbuffer.length;gt++)b.__webglColorRenderbuffer[gt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[gt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let tt=I.textures;for(let gt=0,Et=tt.length;gt<Et;gt++){let ut=n.get(tt[gt]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),o.memory.textures--),n.remove(tt[gt])}n.remove(I)}let P=0;function H(){P=0}function z(){let I=P;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),P+=1,I}function q(I){let b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function Z(I,b){let tt=n.get(I);if(I.isVideoTexture&&Pt(I),I.isRenderTargetTexture===!1&&I.version>0&&tt.__version!==I.version){let gt=I.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(tt,I,b);return}}e.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+b)}function F(I,b){let tt=n.get(I);if(I.version>0&&tt.__version!==I.version){U(tt,I,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+b)}function rt(I,b){let tt=n.get(I);if(I.version>0&&tt.__version!==I.version){U(tt,I,b);return}e.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+b)}function X(I,b){let tt=n.get(I);if(I.version>0&&tt.__version!==I.version){B(tt,I,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+b)}let xt={[yc]:s.REPEAT,[os]:s.CLAMP_TO_EDGE,[vc]:s.MIRRORED_REPEAT},nt={[vn]:s.NEAREST,[wp]:s.NEAREST_MIPMAP_NEAREST,[ho]:s.NEAREST_MIPMAP_LINEAR,[Yn]:s.LINEAR,[Ca]:s.LINEAR_MIPMAP_NEAREST,[as]:s.LINEAR_MIPMAP_LINEAR},pt={[Cp]:s.NEVER,[Np]:s.ALWAYS,[Pp]:s.LESS,[ud]:s.LEQUAL,[Ip]:s.EQUAL,[Up]:s.GEQUAL,[Dp]:s.GREATER,[Lp]:s.NOTEQUAL};function Tt(I,b){if(b.type===Zn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Yn||b.magFilter===Ca||b.magFilter===ho||b.magFilter===as||b.minFilter===Yn||b.minFilter===Ca||b.minFilter===ho||b.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,xt[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,xt[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,xt[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,nt[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,nt[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,pt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===vn||b.minFilter!==ho&&b.minFilter!==as||b.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function W(I,b){let tt=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",E));let gt=b.source,Et=d.get(gt);Et===void 0&&(Et={},d.set(gt,Et));let ut=q(b);if(ut!==I.__cacheKey){Et[ut]===void 0&&(Et[ut]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),Et[ut].usedTimes++;let yt=Et[I.__cacheKey];yt!==void 0&&(Et[I.__cacheKey].usedTimes--,yt.usedTimes===0&&M(b)),I.__cacheKey=ut,I.__webglTexture=Et[ut].texture}return tt}function U(I,b,tt){let gt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(gt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(gt=s.TEXTURE_3D);let Et=W(I,b),ut=b.source;e.bindTexture(gt,I.__webglTexture,s.TEXTURE0+tt);let yt=n.get(ut);if(ut.version!==yt.__version||Et===!0){e.activeTexture(s.TEXTURE0+tt);let vt=ae.getPrimaries(ae.workingColorSpace),St=b.colorSpace===Di?null:ae.getPrimaries(b.colorSpace),Ft=b.colorSpace===Di||vt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let st=g(b.image,!1,i.maxTextureSize);st=Zt(b,st);let mt=r.convert(b.format,b.colorSpace),Ut=r.convert(b.type),ht=v(b.internalFormat,mt,Ut,b.colorSpace,b.isVideoTexture);Tt(gt,b);let _t,$=b.mipmaps,k=b.isVideoTexture!==!0,Q=yt.__version===void 0||Et===!0,A=ut.dataReady,it=T(b,st);if(b.isDepthTexture)ht=y(b.format===tr,b.type),Q&&(k?e.texStorage2D(s.TEXTURE_2D,1,ht,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,ht,st.width,st.height,0,mt,Ut,null));else if(b.isDataTexture)if($.length>0){k&&Q&&e.texStorage2D(s.TEXTURE_2D,it,ht,$[0].width,$[0].height);for(let O=0,j=$.length;O<j;O++)_t=$[O],k?A&&e.texSubImage2D(s.TEXTURE_2D,O,0,0,_t.width,_t.height,mt,Ut,_t.data):e.texImage2D(s.TEXTURE_2D,O,ht,_t.width,_t.height,0,mt,Ut,_t.data);b.generateMipmaps=!1}else k?(Q&&e.texStorage2D(s.TEXTURE_2D,it,ht,st.width,st.height),A&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,mt,Ut,st.data)):e.texImage2D(s.TEXTURE_2D,0,ht,st.width,st.height,0,mt,Ut,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&Q&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,ht,$[0].width,$[0].height,st.depth);for(let O=0,j=$.length;O<j;O++)if(_t=$[O],b.format!==kn)if(mt!==null)if(k){if(A)if(b.layerUpdates.size>0){let L=Xu(_t.width,_t.height,b.format,b.type);for(let V of b.layerUpdates){let ft=_t.data.subarray(V*L/_t.data.BYTES_PER_ELEMENT,(V+1)*L/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,V,_t.width,_t.height,1,mt,ft)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,0,_t.width,_t.height,st.depth,mt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,O,ht,_t.width,_t.height,st.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?A&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,0,_t.width,_t.height,st.depth,mt,Ut,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,O,ht,_t.width,_t.height,st.depth,0,mt,Ut,_t.data)}else{k&&Q&&e.texStorage2D(s.TEXTURE_2D,it,ht,$[0].width,$[0].height);for(let O=0,j=$.length;O<j;O++)_t=$[O],b.format!==kn?mt!==null?k?A&&e.compressedTexSubImage2D(s.TEXTURE_2D,O,0,0,_t.width,_t.height,mt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,O,ht,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?A&&e.texSubImage2D(s.TEXTURE_2D,O,0,0,_t.width,_t.height,mt,Ut,_t.data):e.texImage2D(s.TEXTURE_2D,O,ht,_t.width,_t.height,0,mt,Ut,_t.data)}else if(b.isDataArrayTexture)if(k){if(Q&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,ht,st.width,st.height,st.depth),A)if(b.layerUpdates.size>0){let O=Xu(st.width,st.height,b.format,b.type);for(let j of b.layerUpdates){let L=st.data.subarray(j*O/st.data.BYTES_PER_ELEMENT,(j+1)*O/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,st.width,st.height,1,mt,Ut,L)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,mt,Ut,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ht,st.width,st.height,st.depth,0,mt,Ut,st.data);else if(b.isData3DTexture)k?(Q&&e.texStorage3D(s.TEXTURE_3D,it,ht,st.width,st.height,st.depth),A&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,mt,Ut,st.data)):e.texImage3D(s.TEXTURE_3D,0,ht,st.width,st.height,st.depth,0,mt,Ut,st.data);else if(b.isFramebufferTexture){if(Q)if(k)e.texStorage2D(s.TEXTURE_2D,it,ht,st.width,st.height);else{let O=st.width,j=st.height;for(let L=0;L<it;L++)e.texImage2D(s.TEXTURE_2D,L,ht,O,j,0,mt,Ut,null),O>>=1,j>>=1}}else if($.length>0){if(k&&Q){let O=It($[0]);e.texStorage2D(s.TEXTURE_2D,it,ht,O.width,O.height)}for(let O=0,j=$.length;O<j;O++)_t=$[O],k?A&&e.texSubImage2D(s.TEXTURE_2D,O,0,0,mt,Ut,_t):e.texImage2D(s.TEXTURE_2D,O,ht,mt,Ut,_t);b.generateMipmaps=!1}else if(k){if(Q){let O=It(st);e.texStorage2D(s.TEXTURE_2D,it,ht,O.width,O.height)}A&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Ut,st)}else e.texImage2D(s.TEXTURE_2D,0,ht,mt,Ut,st);m(b)&&p(gt),yt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function B(I,b,tt){if(b.image.length!==6)return;let gt=W(I,b),Et=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+tt);let ut=n.get(Et);if(Et.version!==ut.__version||gt===!0){e.activeTexture(s.TEXTURE0+tt);let yt=ae.getPrimaries(ae.workingColorSpace),vt=b.colorSpace===Di?null:ae.getPrimaries(b.colorSpace),St=b.colorSpace===Di||yt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Ft=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,mt=[];for(let j=0;j<6;j++)!Ft&&!st?mt[j]=g(b.image[j],!0,i.maxCubemapSize):mt[j]=st?b.image[j].image:b.image[j],mt[j]=Zt(b,mt[j]);let Ut=mt[0],ht=r.convert(b.format,b.colorSpace),_t=r.convert(b.type),$=v(b.internalFormat,ht,_t,b.colorSpace),k=b.isVideoTexture!==!0,Q=ut.__version===void 0||gt===!0,A=Et.dataReady,it=T(b,Ut);Tt(s.TEXTURE_CUBE_MAP,b);let O;if(Ft){k&&Q&&e.texStorage2D(s.TEXTURE_CUBE_MAP,it,$,Ut.width,Ut.height);for(let j=0;j<6;j++){O=mt[j].mipmaps;for(let L=0;L<O.length;L++){let V=O[L];b.format!==kn?ht!==null?k?A&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,L,0,0,V.width,V.height,ht,V.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,L,$,V.width,V.height,0,V.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?A&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,L,0,0,V.width,V.height,ht,_t,V.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,L,$,V.width,V.height,0,ht,_t,V.data)}}}else{if(O=b.mipmaps,k&&Q){O.length>0&&it++;let j=It(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,it,$,j.width,j.height)}for(let j=0;j<6;j++)if(st){k?A&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,mt[j].width,mt[j].height,ht,_t,mt[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$,mt[j].width,mt[j].height,0,ht,_t,mt[j].data);for(let L=0;L<O.length;L++){let ft=O[L].image[j].image;k?A&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,L+1,0,0,ft.width,ft.height,ht,_t,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,L+1,$,ft.width,ft.height,0,ht,_t,ft.data)}}else{k?A&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ht,_t,mt[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$,ht,_t,mt[j]);for(let L=0;L<O.length;L++){let V=O[L];k?A&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,L+1,0,0,ht,_t,V.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,L+1,$,ht,_t,V.image[j])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),ut.__version=Et.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Y(I,b,tt,gt,Et,ut){let yt=r.convert(tt.format,tt.colorSpace),vt=r.convert(tt.type),St=v(tt.internalFormat,yt,vt,tt.colorSpace),Ft=n.get(b),st=n.get(tt);if(st.__renderTarget=b,!Ft.__hasExternalTextures){let mt=Math.max(1,b.width>>ut),Ut=Math.max(1,b.height>>ut);Et===s.TEXTURE_3D||Et===s.TEXTURE_2D_ARRAY?e.texImage3D(Et,ut,St,mt,Ut,b.depth,0,yt,vt,null):e.texImage2D(Et,ut,St,mt,Ut,0,yt,vt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),zt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,gt,Et,st.__webglTexture,0,Vt(b)):(Et===s.TEXTURE_2D||Et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,gt,Et,st.__webglTexture,ut),e.bindFramebuffer(s.FRAMEBUFFER,null)}function N(I,b,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){let gt=b.depthTexture,Et=gt&&gt.isDepthTexture?gt.type:null,ut=y(b.stencilBuffer,Et),yt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=Vt(b);zt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt,ut,b.width,b.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,ut,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ut,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,I)}else{let gt=b.textures;for(let Et=0;Et<gt.length;Et++){let ut=gt[Et],yt=r.convert(ut.format,ut.colorSpace),vt=r.convert(ut.type),St=v(ut.internalFormat,yt,vt,ut.colorSpace),Ft=Vt(b);tt&&zt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,St,b.width,b.height):zt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft,St,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,St,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function et(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let gt=n.get(b.depthTexture);gt.__renderTarget=b,(!gt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z(b.depthTexture,0);let Et=gt.__webglTexture,ut=Vt(b);if(b.depthTexture.format===Ys)zt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0);else if(b.depthTexture.format===tr)zt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function lt(I){let b=n.get(I),tt=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){let gt=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),gt){let Et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,gt.removeEventListener("dispose",Et)};gt.addEventListener("dispose",Et),b.__depthDisposeCallback=Et}b.__boundDepthTexture=gt}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");et(b.__webglFramebuffer,I)}else if(tt){b.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[gt]),b.__webglDepthbuffer[gt]===void 0)b.__webglDepthbuffer[gt]=s.createRenderbuffer(),N(b.__webglDepthbuffer[gt],I,!1);else{let Et=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer[gt];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,ut)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),N(b.__webglDepthbuffer,I,!1);else{let gt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Et),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,Et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(I,b,tt){let gt=n.get(I);b!==void 0&&Y(gt.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&lt(I)}function Ct(I){let b=I.texture,tt=n.get(I),gt=n.get(b);I.addEventListener("dispose",w);let Et=I.textures,ut=I.isWebGLCubeRenderTarget===!0,yt=Et.length>1;if(yt||(gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture()),gt.__version=b.version,o.memory.textures++),ut){tt.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer[vt]=[];for(let St=0;St<b.mipmaps.length;St++)tt.__webglFramebuffer[vt][St]=s.createFramebuffer()}else tt.__webglFramebuffer[vt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer=[];for(let vt=0;vt<b.mipmaps.length;vt++)tt.__webglFramebuffer[vt]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(yt)for(let vt=0,St=Et.length;vt<St;vt++){let Ft=n.get(Et[vt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&zt(I)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let vt=0;vt<Et.length;vt++){let St=Et[vt];tt.__webglColorRenderbuffer[vt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[vt]);let Ft=r.convert(St.format,St.colorSpace),st=r.convert(St.type),mt=v(St.internalFormat,Ft,st,St.colorSpace,I.isXRRenderTarget===!0),Ut=Vt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,mt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,tt.__webglColorRenderbuffer[vt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),N(tt.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,gt.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,b);for(let vt=0;vt<6;vt++)if(b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)Y(tt.__webglFramebuffer[vt][St],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,St);else Y(tt.__webglFramebuffer[vt],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(b)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let vt=0,St=Et.length;vt<St;vt++){let Ft=Et[vt],st=n.get(Ft);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),Tt(s.TEXTURE_2D,Ft),Y(tt.__webglFramebuffer,I,Ft,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,0),m(Ft)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let vt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(vt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,gt.__webglTexture),Tt(vt,b),b.mipmaps&&b.mipmaps.length>0)for(let St=0;St<b.mipmaps.length;St++)Y(tt.__webglFramebuffer[St],I,b,s.COLOR_ATTACHMENT0,vt,St);else Y(tt.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,vt,0);m(b)&&p(vt),e.unbindTexture()}I.depthBuffer&&lt(I)}function Mt(I){let b=I.textures;for(let tt=0,gt=b.length;tt<gt;tt++){let Et=b[tt];if(m(Et)){let ut=S(I),yt=n.get(Et).__webglTexture;e.bindTexture(ut,yt),p(ut),e.unbindTexture()}}}let Bt=[],G=[];function Kt(I){if(I.samples>0){if(zt(I)===!1){let b=I.textures,tt=I.width,gt=I.height,Et=s.COLOR_BUFFER_BIT,ut=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=n.get(I),vt=b.length>1;if(vt)for(let St=0;St<b.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let St=0;St<b.length;St++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Et|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Et|=s.STENCIL_BUFFER_BIT)),vt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);let Ft=n.get(b[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ft,0)}s.blitFramebuffer(0,0,tt,gt,0,0,tt,gt,Et,s.NEAREST),c===!0&&(Bt.length=0,G.length=0,Bt.push(s.COLOR_ATTACHMENT0+St),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Bt.push(ut),G.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,G)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),vt)for(let St=0;St<b.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);let Ft=n.get(b[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,Ft,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Vt(I){return Math.min(i.maxSamples,I.samples)}function zt(I){let b=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pt(I){let b=o.render.frame;h.get(I)!==b&&(h.set(I,b),I.update())}function Zt(I,b){let tt=I.colorSpace,gt=I.format,Et=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||tt!==lr&&tt!==Di&&(ae.getTransfer(tt)===me?(gt!==kn||Et!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),b}function It(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=F,this.setTexture3D=rt,this.setTextureCube=X,this.rebindTextures=Rt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=zt}function Vx(s,t){function e(n,i=Di){let r,o=ae.getTransfer(i);if(n===fi)return s.UNSIGNED_BYTE;if(n===Ul)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Nl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===id)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ed)return s.BYTE;if(n===nd)return s.SHORT;if(n===Hr)return s.UNSIGNED_SHORT;if(n===Ll)return s.INT;if(n===cs)return s.UNSIGNED_INT;if(n===Zn)return s.FLOAT;if(n===qr)return s.HALF_FLOAT;if(n===sd)return s.ALPHA;if(n===rd)return s.RGB;if(n===kn)return s.RGBA;if(n===od)return s.LUMINANCE;if(n===ad)return s.LUMINANCE_ALPHA;if(n===Ys)return s.DEPTH_COMPONENT;if(n===tr)return s.DEPTH_STENCIL;if(n===Ol)return s.RED;if(n===Fl)return s.RED_INTEGER;if(n===cd)return s.RG;if(n===Bl)return s.RG_INTEGER;if(n===zl)return s.RGBA_INTEGER;if(n===No||n===Oo||n===Fo||n===Bo)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mc||n===Sc||n===Ec||n===bc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wc||n===Tc||n===Ac)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wc||n===Tc)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ac)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rc||n===Cc||n===Pc||n===Ic||n===Dc||n===Lc||n===Uc||n===Nc||n===Oc||n===Fc||n===Bc||n===zc||n===kc||n===Hc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ic)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===Vc||n===Gc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ld||n===Wc||n===Xc||n===qc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var cl=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Jt=class extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gx={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xx=`
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

}`,ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new hn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $n({vertexShader:Wx,fragmentShader:Xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new Te(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hl=class extends Oi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,_=null,g=new ll,m=e.getContextAttributes(),p=null,S=null,v=[],y=[],T=new $t,E=null,w=new Qe;w.viewport=new ge;let R=new Qe;R.viewport=new ge;let M=[w,R],x=new cl,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let B=v[U];return B===void 0&&(B=new Br,v[U]=B),B.getTargetRaySpace()},this.getControllerGrip=function(U){let B=v[U];return B===void 0&&(B=new Br,v[U]=B),B.getGripSpace()},this.getHand=function(U){let B=v[U];return B===void 0&&(B=new Br,v[U]=B),B.getHandSpace()};function z(U){let B=y.indexOf(U.inputSource);if(B===-1)return;let Y=v[B];Y!==void 0&&(Y.update(U.inputSource,U.frame,l||o),Y.dispatchEvent({type:U.type,data:U.inputSource}))}function q(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",Z);for(let U=0;U<v.length;U++){let B=y[U];B!==null&&(y[U]=null,v[U].disconnect(B))}P=null,H=null,g.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,S=null,W.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",q),i.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){let B={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,B),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new pi(f.framebufferWidth,f.framebufferHeight,{format:kn,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let B=null,Y=null,N=null;m.depth&&(N=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,B=m.stencil?tr:Ys,Y=m.stencil?js:cs);let et={colorFormat:e.RGBA8,depthFormat:N,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(et),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new pi(d.textureWidth,d.textureHeight,{format:kn,type:fi,depthTexture:new Jo(d.textureWidth,d.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),W.setContext(i),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(U){for(let B=0;B<U.removed.length;B++){let Y=U.removed[B],N=y.indexOf(Y);N>=0&&(y[N]=null,v[N].disconnect(Y))}for(let B=0;B<U.added.length;B++){let Y=U.added[B],N=y.indexOf(Y);if(N===-1){for(let lt=0;lt<v.length;lt++)if(lt>=y.length){y.push(Y),N=lt;break}else if(y[lt]===null){y[lt]=Y,N=lt;break}if(N===-1)break}let et=v[N];et&&et.connect(Y)}}let F=new D,rt=new D;function X(U,B,Y){F.setFromMatrixPosition(B.matrixWorld),rt.setFromMatrixPosition(Y.matrixWorld);let N=F.distanceTo(rt),et=B.projectionMatrix.elements,lt=Y.projectionMatrix.elements,Rt=et[14]/(et[10]-1),Ct=et[14]/(et[10]+1),Mt=(et[9]+1)/et[5],Bt=(et[9]-1)/et[5],G=(et[8]-1)/et[0],Kt=(lt[8]+1)/lt[0],Vt=Rt*G,zt=Rt*Kt,Pt=N/(-G+Kt),Zt=Pt*-G;if(B.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Zt),U.translateZ(Pt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),et[10]===-1)U.projectionMatrix.copy(B.projectionMatrix),U.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{let It=Rt+Pt,I=Ct+Pt,b=Vt-Zt,tt=zt+(N-Zt),gt=Mt*Ct/I*It,Et=Bt*Ct/I*It;U.projectionMatrix.makePerspective(b,tt,gt,Et,It,I),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function xt(U,B){B===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(B.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;let B=U.near,Y=U.far;g.texture!==null&&(g.depthNear>0&&(B=g.depthNear),g.depthFar>0&&(Y=g.depthFar)),x.near=R.near=w.near=B,x.far=R.far=w.far=Y,(P!==x.near||H!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,H=x.far),w.layers.mask=U.layers.mask|2,R.layers.mask=U.layers.mask|4,x.layers.mask=w.layers.mask|R.layers.mask;let N=U.parent,et=x.cameras;xt(x,N);for(let lt=0;lt<et.length;lt++)xt(et[lt],N);et.length===2?X(x,w,R):x.projectionMatrix.copy(w.projectionMatrix),nt(U,x,N)};function nt(U,B,Y){Y===null?U.matrix.copy(B.matrixWorld):(U.matrix.copy(Y.matrixWorld),U.matrix.invert(),U.matrix.multiply(B.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(B.projectionMatrix),U.projectionMatrixInverse.copy(B.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Vr*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(U){c=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let pt=null;function Tt(U,B){if(h=B.getViewerPose(l||o),_=B,h!==null){let Y=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let N=!1;Y.length!==x.cameras.length&&(x.cameras.length=0,N=!0);for(let lt=0;lt<Y.length;lt++){let Rt=Y[lt],Ct=null;if(f!==null)Ct=f.getViewport(Rt);else{let Bt=u.getViewSubImage(d,Rt);Ct=Bt.viewport,lt===0&&(t.setRenderTargetTextures(S,Bt.colorTexture,d.ignoreDepthValues?void 0:Bt.depthStencilTexture),t.setRenderTarget(S))}let Mt=M[lt];Mt===void 0&&(Mt=new Qe,Mt.layers.enable(lt),Mt.viewport=new ge,M[lt]=Mt),Mt.matrix.fromArray(Rt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(Rt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),lt===0&&(x.matrix.copy(Mt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),N===!0&&x.cameras.push(Mt)}let et=i.enabledFeatures;if(et&&et.includes("depth-sensing")){let lt=u.getDepthInformation(Y[0]);lt&&lt.isValid&&lt.texture&&g.init(t,lt,i.renderState)}}for(let Y=0;Y<v.length;Y++){let N=y[Y],et=v[Y];N!==null&&et!==void 0&&et.update(N,B,l||o)}pt&&pt(U,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),_=null}let W=new md;W.setAnimationLoop(Tt),this.setAnimationLoop=function(U){pt=U},this.dispose=function(){}}},es=new An,qx=new he;function Yx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,pd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),v=S.envMap,y=S.envMapRotation;v&&(m.envMap.value=v,es.copy(y),es.x*=-1,es.y*=-1,es.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(qx.makeRotationFromEuler(es)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zx(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,v){let y=v.program;n.uniformBlockBinding(S,y)}function l(S,v){let y=i[S.id];y===void 0&&(_(S),y=h(S),i[S.id]=y,S.addEventListener("dispose",m));let T=v.program;n.updateUBOMapping(S,T);let E=t.render.frame;r[S.id]!==E&&(d(S),r[S.id]=E)}function h(S){let v=u();S.__bindingPointIndex=v;let y=s.createBuffer(),T=S.__size,E=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let v=i[S.id],y=S.uniforms,T=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,w=y.length;E<w;E++){let R=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,x=R.length;M<x;M++){let P=R[M];if(f(P,E,M,T)===!0){let H=P.__offset,z=Array.isArray(P.value)?P.value:[P.value],q=0;for(let Z=0;Z<z.length;Z++){let F=z[Z],rt=g(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,H+q,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,q),q+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,v,y,T){let E=S.value,w=v+"_"+y;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:T[w]=E.clone(),!0;{let R=T[w];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return T[w]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function _(S){let v=S.uniforms,y=0,T=16;for(let w=0,R=v.length;w<R;w++){let M=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,P=M.length;x<P;x++){let H=M[x],z=Array.isArray(H.value)?H.value:[H.value];for(let q=0,Z=z.length;q<Z;q++){let F=z[q],rt=g(F),X=y%T,xt=X%rt.boundary,nt=X+xt;y+=xt,nt!==0&&T-nt<rt.storage&&(y+=T-nt),H.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=rt.storage}}}let E=y%T;return E>0&&(y+=T-E),S.__size=y,S.__cache={},this}function g(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){let v=S.target;v.removeEventListener("dispose",m);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var sr=class{constructor(t={}){let{canvas:e=Qp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,S=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this.toneMapping=Ui,this.toneMappingExposure=1;let y=this,T=!1,E=0,w=0,R=null,M=-1,x=null,P=new ge,H=new ge,z=null,q=new Qt(0),Z=0,F=e.width,rt=e.height,X=1,xt=null,nt=null,pt=new ge(0,0,F,rt),Tt=new ge(0,0,F,rt),W=!1,U=new Gr,B=!1,Y=!1,N=new he,et=new he,lt=new D,Rt=new ge,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function Bt(){return R===null?X:1}let G=n;function Kt(C,J){return e.getContext(C,J)}try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dl}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",V,!1),G===null){let J="webgl2";if(G=Kt(J,C),G===null)throw Kt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Vt,zt,Pt,Zt,It,I,b,tt,gt,Et,ut,yt,vt,St,Ft,st,mt,Ut,ht,_t,$,k,Q,A;function it(){Vt=new h_(G),Vt.init(),k=new Vx(G,Vt),zt=new s_(G,Vt,t,k),Pt=new zx(G,Vt),zt.reverseDepthBuffer&&d&&Pt.buffers.depth.setReversed(!0),Zt=new f_(G),It=new Tx,I=new Hx(G,Vt,Pt,It,zt,k,Zt),b=new o_(y),tt=new l_(y),gt=new vm(G),Q=new n_(G,gt),Et=new u_(G,gt,Zt,Q),ut=new m_(G,Et,gt,Zt),ht=new p_(G,zt,I),st=new r_(It),yt=new wx(y,b,tt,Vt,zt,Q,st),vt=new Yx(y,It),St=new Rx,Ft=new Ux(Vt),Ut=new e_(y,b,tt,Pt,ut,f,c),mt=new Fx(y,ut,zt),A=new Zx(G,Zt,zt,Pt),_t=new i_(G,Vt,Zt),$=new d_(G,Vt,Zt),Zt.programs=yt.programs,y.capabilities=zt,y.extensions=Vt,y.properties=It,y.renderLists=St,y.shadowMap=mt,y.state=Pt,y.info=Zt}it();let O=new hl(y,G);this.xr=O,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let C=Vt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Vt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(F,rt,!1))},this.getSize=function(C){return C.set(F,rt)},this.setSize=function(C,J,ot=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,rt=J,e.width=Math.floor(C*X),e.height=Math.floor(J*X),ot===!0&&(e.style.width=C+"px",e.style.height=J+"px"),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set(F*X,rt*X).floor()},this.setDrawingBufferSize=function(C,J,ot){F=C,rt=J,X=ot,e.width=Math.floor(C*ot),e.height=Math.floor(J*ot),this.setViewport(0,0,C,J)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(pt)},this.setViewport=function(C,J,ot,ct){C.isVector4?pt.set(C.x,C.y,C.z,C.w):pt.set(C,J,ot,ct),Pt.viewport(P.copy(pt).multiplyScalar(X).round())},this.getScissor=function(C){return C.copy(Tt)},this.setScissor=function(C,J,ot,ct){C.isVector4?Tt.set(C.x,C.y,C.z,C.w):Tt.set(C,J,ot,ct),Pt.scissor(H.copy(Tt).multiplyScalar(X).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(C){Pt.setScissorTest(W=C)},this.setOpaqueSort=function(C){xt=C},this.setTransparentSort=function(C){nt=C},this.getClearColor=function(C){return C.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(C=!0,J=!0,ot=!0){let ct=0;if(C){let K=!1;if(R!==null){let Dt=R.texture.format;K=Dt===zl||Dt===Bl||Dt===Fl}if(K){let Dt=R.texture.type,Ht=Dt===fi||Dt===cs||Dt===Hr||Dt===js||Dt===Ul||Dt===Nl,Wt=Ut.getClearColor(),Xt=Ut.getClearAlpha(),te=Wt.r,ne=Wt.g,qt=Wt.b;Ht?(_[0]=te,_[1]=ne,_[2]=qt,_[3]=Xt,G.clearBufferuiv(G.COLOR,0,_)):(g[0]=te,g[1]=ne,g[2]=qt,g[3]=Xt,G.clearBufferiv(G.COLOR,0,g))}else ct|=G.COLOR_BUFFER_BIT}J&&(ct|=G.DEPTH_BUFFER_BIT),ot&&(ct|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",V,!1),St.dispose(),Ft.dispose(),It.dispose(),b.dispose(),tt.dispose(),ut.dispose(),Q.dispose(),A.dispose(),yt.dispose(),O.dispose(),O.removeEventListener("sessionstart",jt),O.removeEventListener("sessionend",Gt),at.stop()};function j(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let C=Zt.autoReset,J=mt.enabled,ot=mt.autoUpdate,ct=mt.needsUpdate,K=mt.type;it(),Zt.autoReset=C,mt.enabled=J,mt.autoUpdate=ot,mt.needsUpdate=ct,mt.type=K}function V(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ft(C){let J=C.target;J.removeEventListener("dispose",ft),Nt(J)}function Nt(C){dt(C),It.remove(C)}function dt(C){let J=It.get(C).programs;J!==void 0&&(J.forEach(function(ot){yt.releaseProgram(ot)}),C.isShaderMaterial&&yt.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,ot,ct,K,Dt){J===null&&(J=Ct);let Ht=K.isMesh&&K.matrixWorld.determinant()<0,Wt=Yf(C,J,ot,ct,K);Pt.setMaterial(ct,Ht);let Xt=ot.index,te=1;if(ct.wireframe===!0){if(Xt=Et.getWireframeAttribute(ot),Xt===void 0)return;te=2}let ne=ot.drawRange,qt=ot.attributes.position,ce=ne.start*te,Me=(ne.start+ne.count)*te;Dt!==null&&(ce=Math.max(ce,Dt.start*te),Me=Math.min(Me,(Dt.start+Dt.count)*te)),Xt!==null?(ce=Math.max(ce,0),Me=Math.min(Me,Xt.count)):qt!=null&&(ce=Math.max(ce,0),Me=Math.min(Me,qt.count));let Se=Me-ce;if(Se<0||Se===1/0)return;Q.setup(K,ct,Wt,ot,Xt);let ln,de=_t;if(Xt!==null&&(ln=gt.get(Xt),de=$,de.setIndex(ln)),K.isMesh)ct.wireframe===!0?(Pt.setLineWidth(ct.wireframeLinewidth*Bt()),de.setMode(G.LINES)):de.setMode(G.TRIANGLES);else if(K.isLine){let Yt=ct.linewidth;Yt===void 0&&(Yt=1),Pt.setLineWidth(Yt*Bt()),K.isLineSegments?de.setMode(G.LINES):K.isLineLoop?de.setMode(G.LINE_LOOP):de.setMode(G.LINE_STRIP)}else K.isPoints?de.setMode(G.POINTS):K.isSprite&&de.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)de.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))de.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Yt=K._multiDrawStarts,ii=K._multiDrawCounts,fe=K._multiDrawCount,Nn=Xt?gt.get(Xt).bytesPerElement:1,Rs=It.get(ct).currentProgram.getUniforms();for(let _n=0;_n<fe;_n++)Rs.setValue(G,"_gl_DrawID",_n),de.render(Yt[_n]/Nn,ii[_n])}else if(K.isInstancedMesh)de.renderInstances(ce,Se,K.count);else if(ot.isInstancedBufferGeometry){let Yt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,ii=Math.min(ot.instanceCount,Yt);de.renderInstances(ce,Se,ii)}else de.render(ce,Se)};function At(C,J,ot){C.transparent===!0&&C.side===zn&&C.forceSinglePass===!1?(C.side=je,C.needsUpdate=!0,Ei(C,J,ot),C.side=Ni,C.needsUpdate=!0,Ei(C,J,ot),C.side=zn):Ei(C,J,ot)}this.compile=function(C,J,ot=null){ot===null&&(ot=C),p=Ft.get(ot),p.init(J),v.push(p),ot.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),C!==ot&&C.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights();let ct=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Dt=K.material;if(Dt)if(Array.isArray(Dt))for(let Ht=0;Ht<Dt.length;Ht++){let Wt=Dt[Ht];At(Wt,ot,K),ct.add(Wt)}else At(Dt,ot,K),ct.add(Dt)}),v.pop(),p=null,ct},this.compileAsync=function(C,J,ot=null){let ct=this.compile(C,J,ot);return new Promise(K=>{function Dt(){if(ct.forEach(function(Ht){It.get(Ht).currentProgram.isReady()&&ct.delete(Ht)}),ct.size===0){K(C);return}setTimeout(Dt,10)}Vt.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let bt=null;function kt(C){bt&&bt(C)}function jt(){at.stop()}function Gt(){at.start()}let at=new md;at.setAnimationLoop(kt),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(C){bt=C,O.setAnimationLoop(C),C===null?at.stop():at.start()},O.addEventListener("sessionstart",jt),O.addEventListener("sessionend",Gt),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(J),J=O.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,J,R),p=Ft.get(C,v.length),p.init(J),v.push(p),et.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),U.setFromProjectionMatrix(et),Y=this.localClippingEnabled,B=st.init(this.clippingPlanes,Y),m=St.get(C,S.length),m.init(),S.push(m),O.enabled===!0&&O.isPresenting===!0){let Dt=y.xr.getDepthSensingMesh();Dt!==null&&wt(Dt,J,-1/0,y.sortObjects)}wt(C,J,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(xt,nt),Mt=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,Mt&&Ut.addToRenderList(m,C),this.info.render.frame++,B===!0&&st.beginShadows();let ot=p.state.shadowsArray;mt.render(ot,C,J),B===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let ct=m.opaque,K=m.transmissive;if(p.setupLights(),J.isArrayCamera){let Dt=J.cameras;if(K.length>0)for(let Ht=0,Wt=Dt.length;Ht<Wt;Ht++){let Xt=Dt[Ht];re(ct,K,C,Xt)}Mt&&Ut.render(C);for(let Ht=0,Wt=Dt.length;Ht<Wt;Ht++){let Xt=Dt[Ht];se(m,C,Xt,Xt.viewport)}}else K.length>0&&re(ct,K,C,J),Mt&&Ut.render(C),se(m,C,J);R!==null&&(I.updateMultisampleRenderTarget(R),I.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(y,C,J),Q.resetDefaultState(),M=-1,x=null,v.pop(),v.length>0?(p=v[v.length-1],B===!0&&st.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function wt(C,J,ot,ct){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)ot=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||U.intersectsSprite(C)){ct&&Rt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(et);let Ht=ut.update(C),Wt=C.material;Wt.visible&&m.push(C,Ht,Wt,ot,Rt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||U.intersectsObject(C))){let Ht=ut.update(C),Wt=C.material;if(ct&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Rt.copy(C.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),Rt.copy(Ht.boundingSphere.center)),Rt.applyMatrix4(C.matrixWorld).applyMatrix4(et)),Array.isArray(Wt)){let Xt=Ht.groups;for(let te=0,ne=Xt.length;te<ne;te++){let qt=Xt[te],ce=Wt[qt.materialIndex];ce&&ce.visible&&m.push(C,Ht,ce,ot,Rt.z,qt)}}else Wt.visible&&m.push(C,Ht,Wt,ot,Rt.z,null)}}let Dt=C.children;for(let Ht=0,Wt=Dt.length;Ht<Wt;Ht++)wt(Dt[Ht],J,ot,ct)}function se(C,J,ot,ct){let K=C.opaque,Dt=C.transmissive,Ht=C.transparent;p.setupLightsView(ot),B===!0&&st.setGlobalState(y.clippingPlanes,ot),ct&&Pt.viewport(P.copy(ct)),K.length>0&&gn(K,J,ot),Dt.length>0&&gn(Dt,J,ot),Ht.length>0&&gn(Ht,J,ot),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function re(C,J,ot,ct){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ct.id]===void 0&&(p.state.transmissionRenderTarget[ct.id]=new pi(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?qr:fi,minFilter:as,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let Dt=p.state.transmissionRenderTarget[ct.id],Ht=ct.viewport||P;Dt.setSize(Ht.z,Ht.w);let Wt=y.getRenderTarget();y.setRenderTarget(Dt),y.getClearColor(q),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Mt&&Ut.render(ot);let Xt=y.toneMapping;y.toneMapping=Ui;let te=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),p.setupLightsView(ct),B===!0&&st.setGlobalState(y.clippingPlanes,ct),gn(C,ot,ct),I.updateMultisampleRenderTarget(Dt),I.updateRenderTargetMipmap(Dt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let qt=0,ce=J.length;qt<ce;qt++){let Me=J[qt],Se=Me.object,ln=Me.geometry,de=Me.material,Yt=Me.group;if(de.side===zn&&Se.layers.test(ct.layers)){let ii=de.side;de.side=je,de.needsUpdate=!0,bn(Se,ot,ct,ln,de,Yt),de.side=ii,de.needsUpdate=!0,ne=!0}}ne===!0&&(I.updateMultisampleRenderTarget(Dt),I.updateRenderTargetMipmap(Dt))}y.setRenderTarget(Wt),y.setClearColor(q,Z),te!==void 0&&(ct.viewport=te),y.toneMapping=Xt}function gn(C,J,ot){let ct=J.isScene===!0?J.overrideMaterial:null;for(let K=0,Dt=C.length;K<Dt;K++){let Ht=C[K],Wt=Ht.object,Xt=Ht.geometry,te=ct===null?Ht.material:ct,ne=Ht.group;Wt.layers.test(ot.layers)&&bn(Wt,J,ot,Xt,te,ne)}}function bn(C,J,ot,ct,K,Dt){C.onBeforeRender(y,J,ot,ct,K,Dt),C.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(y,J,ot,ct,C,Dt),K.transparent===!0&&K.side===zn&&K.forceSinglePass===!1?(K.side=je,K.needsUpdate=!0,y.renderBufferDirect(ot,J,ct,K,C,Dt),K.side=Ni,K.needsUpdate=!0,y.renderBufferDirect(ot,J,ct,K,C,Dt),K.side=zn):y.renderBufferDirect(ot,J,ct,K,C,Dt),C.onAfterRender(y,J,ot,ct,K,Dt)}function Ei(C,J,ot){J.isScene!==!0&&(J=Ct);let ct=It.get(C),K=p.state.lights,Dt=p.state.shadowsArray,Ht=K.state.version,Wt=yt.getParameters(C,K.state,Dt,J,ot),Xt=yt.getProgramCacheKey(Wt),te=ct.programs;ct.environment=C.isMeshStandardMaterial?J.environment:null,ct.fog=J.fog,ct.envMap=(C.isMeshStandardMaterial?tt:b).get(C.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&C.envMap===null?J.environmentRotation:C.envMapRotation,te===void 0&&(C.addEventListener("dispose",ft),te=new Map,ct.programs=te);let ne=te.get(Xt);if(ne!==void 0){if(ct.currentProgram===ne&&ct.lightsStateVersion===Ht)return Gh(C,Wt),ne}else Wt.uniforms=yt.getUniforms(C),C.onBeforeCompile(Wt,y),ne=yt.acquireProgram(Wt,Xt),te.set(Xt,ne),ct.uniforms=Wt.uniforms;let qt=ct.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qt.clippingPlanes=st.uniform),Gh(C,Wt),ct.needsLights=$f(C),ct.lightsStateVersion=Ht,ct.needsLights&&(qt.ambientLightColor.value=K.state.ambient,qt.lightProbe.value=K.state.probe,qt.directionalLights.value=K.state.directional,qt.directionalLightShadows.value=K.state.directionalShadow,qt.spotLights.value=K.state.spot,qt.spotLightShadows.value=K.state.spotShadow,qt.rectAreaLights.value=K.state.rectArea,qt.ltc_1.value=K.state.rectAreaLTC1,qt.ltc_2.value=K.state.rectAreaLTC2,qt.pointLights.value=K.state.point,qt.pointLightShadows.value=K.state.pointShadow,qt.hemisphereLights.value=K.state.hemi,qt.directionalShadowMap.value=K.state.directionalShadowMap,qt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qt.spotShadowMap.value=K.state.spotShadowMap,qt.spotLightMatrix.value=K.state.spotLightMatrix,qt.spotLightMap.value=K.state.spotLightMap,qt.pointShadowMap.value=K.state.pointShadowMap,qt.pointShadowMatrix.value=K.state.pointShadowMatrix),ct.currentProgram=ne,ct.uniformsList=null,ne}function As(C){if(C.uniformsList===null){let J=C.currentProgram.getUniforms();C.uniformsList=$s.seqWithValue(J.seq,C.uniforms)}return C.uniformsList}function Gh(C,J){let ot=It.get(C);ot.outputColorSpace=J.outputColorSpace,ot.batching=J.batching,ot.batchingColor=J.batchingColor,ot.instancing=J.instancing,ot.instancingColor=J.instancingColor,ot.instancingMorph=J.instancingMorph,ot.skinning=J.skinning,ot.morphTargets=J.morphTargets,ot.morphNormals=J.morphNormals,ot.morphColors=J.morphColors,ot.morphTargetsCount=J.morphTargetsCount,ot.numClippingPlanes=J.numClippingPlanes,ot.numIntersection=J.numClipIntersection,ot.vertexAlphas=J.vertexAlphas,ot.vertexTangents=J.vertexTangents,ot.toneMapping=J.toneMapping}function Yf(C,J,ot,ct,K){J.isScene!==!0&&(J=Ct),I.resetTextureUnits();let Dt=J.fog,Ht=ct.isMeshStandardMaterial?J.environment:null,Wt=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:lr,Xt=(ct.isMeshStandardMaterial?tt:b).get(ct.envMap||Ht),te=ct.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ne=!!ot.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),qt=!!ot.morphAttributes.position,ce=!!ot.morphAttributes.normal,Me=!!ot.morphAttributes.color,Se=Ui;ct.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Se=y.toneMapping);let ln=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,de=ln!==void 0?ln.length:0,Yt=It.get(ct),ii=p.state.lights;if(B===!0&&(Y===!0||C!==x)){let wn=C===x&&ct.id===M;st.setState(ct,C,wn)}let fe=!1;ct.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==ii.state.version||Yt.outputColorSpace!==Wt||K.isBatchedMesh&&Yt.batching===!1||!K.isBatchedMesh&&Yt.batching===!0||K.isBatchedMesh&&Yt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Yt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Yt.instancing===!1||!K.isInstancedMesh&&Yt.instancing===!0||K.isSkinnedMesh&&Yt.skinning===!1||!K.isSkinnedMesh&&Yt.skinning===!0||K.isInstancedMesh&&Yt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Yt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Yt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Yt.instancingMorph===!1&&K.morphTexture!==null||Yt.envMap!==Xt||ct.fog===!0&&Yt.fog!==Dt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==st.numPlanes||Yt.numIntersection!==st.numIntersection)||Yt.vertexAlphas!==te||Yt.vertexTangents!==ne||Yt.morphTargets!==qt||Yt.morphNormals!==ce||Yt.morphColors!==Me||Yt.toneMapping!==Se||Yt.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Yt.__version=ct.version);let Nn=Yt.currentProgram;fe===!0&&(Nn=Ei(ct,J,K));let Rs=!1,_n=!1,wr=!1,Ee=Nn.getUniforms(),Xn=Yt.uniforms;if(Pt.useProgram(Nn.program)&&(Rs=!0,_n=!0,wr=!0),ct.id!==M&&(M=ct.id,_n=!0),Rs||x!==C){Pt.buffers.depth.getReversed()?(N.copy(C.projectionMatrix),tm(N),em(N),Ee.setValue(G,"projectionMatrix",N)):Ee.setValue(G,"projectionMatrix",C.projectionMatrix),Ee.setValue(G,"viewMatrix",C.matrixWorldInverse);let bi=Ee.map.cameraPosition;bi!==void 0&&bi.setValue(G,lt.setFromMatrixPosition(C.matrixWorld)),zt.logarithmicDepthBuffer&&Ee.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Ee.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),x!==C&&(x=C,_n=!0,wr=!0)}if(K.isSkinnedMesh){Ee.setOptional(G,K,"bindMatrix"),Ee.setOptional(G,K,"bindMatrixInverse");let wn=K.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Ee.setValue(G,"boneTexture",wn.boneTexture,I))}K.isBatchedMesh&&(Ee.setOptional(G,K,"batchingTexture"),Ee.setValue(G,"batchingTexture",K._matricesTexture,I),Ee.setOptional(G,K,"batchingIdTexture"),Ee.setValue(G,"batchingIdTexture",K._indirectTexture,I),Ee.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&Ee.setValue(G,"batchingColorTexture",K._colorsTexture,I));let Tr=ot.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0)&&ht.update(K,ot,Nn),(_n||Yt.receiveShadow!==K.receiveShadow)&&(Yt.receiveShadow=K.receiveShadow,Ee.setValue(G,"receiveShadow",K.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Xn.envMap.value=Xt,Xn.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&J.environment!==null&&(Xn.envMapIntensity.value=J.environmentIntensity),_n&&(Ee.setValue(G,"toneMappingExposure",y.toneMappingExposure),Yt.needsLights&&Zf(Xn,wr),Dt&&ct.fog===!0&&vt.refreshFogUniforms(Xn,Dt),vt.refreshMaterialUniforms(Xn,ct,X,rt,p.state.transmissionRenderTarget[C.id]),$s.upload(G,As(Yt),Xn,I)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&($s.upload(G,As(Yt),Xn,I),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Ee.setValue(G,"center",K.center),Ee.setValue(G,"modelViewMatrix",K.modelViewMatrix),Ee.setValue(G,"normalMatrix",K.normalMatrix),Ee.setValue(G,"modelMatrix",K.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){let wn=ct.uniformsGroups;for(let bi=0,wi=wn.length;bi<wi;bi++){let Wh=wn[bi];A.update(Wh,Nn),A.bind(Wh,Nn)}}return Nn}function Zf(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function $f(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,J,ot){It.get(C.texture).__webglTexture=J,It.get(C.depthTexture).__webglTexture=ot;let ct=It.get(C);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=ot===void 0,ct.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,J){let ot=It.get(C);ot.__webglFramebuffer=J,ot.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(C,J=0,ot=0){R=C,E=J,w=ot;let ct=!0,K=null,Dt=!1,Ht=!1;if(C){let Xt=It.get(C);if(Xt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(G.FRAMEBUFFER,null),ct=!1;else if(Xt.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(Xt.__hasExternalTextures)I.rebindTextures(C,It.get(C.texture).__webglTexture,It.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let qt=C.depthTexture;if(Xt.__boundDepthTexture!==qt){if(qt!==null&&It.has(qt)&&(C.width!==qt.image.width||C.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}let te=C.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ht=!0);let ne=It.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ne[J])?K=ne[J][ot]:K=ne[J],Dt=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?K=It.get(C).__webglMultisampledFramebuffer:Array.isArray(ne)?K=ne[ot]:K=ne,P.copy(C.viewport),H.copy(C.scissor),z=C.scissorTest}else P.copy(pt).multiplyScalar(X).floor(),H.copy(Tt).multiplyScalar(X).floor(),z=W;if(Pt.bindFramebuffer(G.FRAMEBUFFER,K)&&ct&&Pt.drawBuffers(C,K),Pt.viewport(P),Pt.scissor(H),Pt.setScissorTest(z),Dt){let Xt=It.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+J,Xt.__webglTexture,ot)}else if(Ht){let Xt=It.get(C.texture),te=J||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xt.__webglTexture,ot||0,te)}M=-1},this.readRenderTargetPixels=function(C,J,ot,ct,K,Dt,Ht){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=It.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(Wt=Wt[Ht]),Wt){Pt.bindFramebuffer(G.FRAMEBUFFER,Wt);try{let Xt=C.texture,te=Xt.format,ne=Xt.type;if(!zt.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-ct&&ot>=0&&ot<=C.height-K&&G.readPixels(J,ot,ct,K,k.convert(te),k.convert(ne),Dt)}finally{let Xt=R!==null?It.get(R).__webglFramebuffer:null;Pt.bindFramebuffer(G.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(C,J,ot,ct,K,Dt,Ht){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=It.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(Wt=Wt[Ht]),Wt){let Xt=C.texture,te=Xt.format,ne=Xt.type;if(!zt.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=C.width-ct&&ot>=0&&ot<=C.height-K){Pt.bindFramebuffer(G.FRAMEBUFFER,Wt);let qt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,qt),G.bufferData(G.PIXEL_PACK_BUFFER,Dt.byteLength,G.STREAM_READ),G.readPixels(J,ot,ct,K,k.convert(te),k.convert(ne),0);let ce=R!==null?It.get(R).__webglFramebuffer:null;Pt.bindFramebuffer(G.FRAMEBUFFER,ce);let Me=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await jp(G,Me,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,qt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Dt),G.deleteBuffer(qt),G.deleteSync(Me),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,J=null,ot=0){C.isTexture!==!0&&(Ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1]);let ct=Math.pow(2,-ot),K=Math.floor(C.image.width*ct),Dt=Math.floor(C.image.height*ct),Ht=J!==null?J.x:0,Wt=J!==null?J.y:0;I.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,ot,0,0,Ht,Wt,K,Dt),Pt.unbindTexture()},this.copyTextureToTexture=function(C,J,ot=null,ct=null,K=0){C.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture function signature has changed."),ct=arguments[0]||null,C=arguments[1],J=arguments[2],K=arguments[3]||0,ot=null);let Dt,Ht,Wt,Xt,te,ne,qt,ce,Me,Se=C.isCompressedTexture?C.mipmaps[K]:C.image;ot!==null?(Dt=ot.max.x-ot.min.x,Ht=ot.max.y-ot.min.y,Wt=ot.isBox3?ot.max.z-ot.min.z:1,Xt=ot.min.x,te=ot.min.y,ne=ot.isBox3?ot.min.z:0):(Dt=Se.width,Ht=Se.height,Wt=Se.depth||1,Xt=0,te=0,ne=0),ct!==null?(qt=ct.x,ce=ct.y,Me=ct.z):(qt=0,ce=0,Me=0);let ln=k.convert(J.format),de=k.convert(J.type),Yt;J.isData3DTexture?(I.setTexture3D(J,0),Yt=G.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(I.setTexture2DArray(J,0),Yt=G.TEXTURE_2D_ARRAY):(I.setTexture2D(J,0),Yt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,J.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,J.unpackAlignment);let ii=G.getParameter(G.UNPACK_ROW_LENGTH),fe=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Nn=G.getParameter(G.UNPACK_SKIP_PIXELS),Rs=G.getParameter(G.UNPACK_SKIP_ROWS),_n=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Se.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Se.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Xt),G.pixelStorei(G.UNPACK_SKIP_ROWS,te),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ne);let wr=C.isDataArrayTexture||C.isData3DTexture,Ee=J.isDataArrayTexture||J.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let Xn=It.get(C),Tr=It.get(J),wn=It.get(Xn.__renderTarget),bi=It.get(Tr.__renderTarget);Pt.bindFramebuffer(G.READ_FRAMEBUFFER,wn.__webglFramebuffer),Pt.bindFramebuffer(G.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let wi=0;wi<Wt;wi++)wr&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,It.get(C).__webglTexture,K,ne+wi),C.isDepthTexture?(Ee&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,It.get(J).__webglTexture,K,Me+wi),G.blitFramebuffer(Xt,te,Dt,Ht,qt,ce,Dt,Ht,G.DEPTH_BUFFER_BIT,G.NEAREST)):Ee?G.copyTexSubImage3D(Yt,K,qt,ce,Me+wi,Xt,te,Dt,Ht):G.copyTexSubImage2D(Yt,K,qt,ce,Me+wi,Xt,te,Dt,Ht);Pt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ee?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Yt,K,qt,ce,Me,Dt,Ht,Wt,ln,de,Se.data):J.isCompressedArrayTexture?G.compressedTexSubImage3D(Yt,K,qt,ce,Me,Dt,Ht,Wt,ln,Se.data):G.texSubImage3D(Yt,K,qt,ce,Me,Dt,Ht,Wt,ln,de,Se):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,K,qt,ce,Dt,Ht,ln,de,Se.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,K,qt,ce,Se.width,Se.height,ln,Se.data):G.texSubImage2D(G.TEXTURE_2D,K,qt,ce,Dt,Ht,ln,de,Se);G.pixelStorei(G.UNPACK_ROW_LENGTH,ii),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,fe),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Nn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Rs),G.pixelStorei(G.UNPACK_SKIP_IMAGES,_n),K===0&&J.generateMipmaps&&G.generateMipmap(Yt),Pt.unbindTexture()},this.copyTextureToTexture3D=function(C,J,ot=null,ct=null,K=0){return C.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,ct=arguments[1]||null,C=arguments[2],J=arguments[3],K=arguments[4]||0),Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,J,ot,ct,K)},this.initRenderTarget=function(C){It.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),Pt.unbindTexture()},this.resetState=function(){E=0,w=0,R=null,Pt.reset(),Q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var Fi=class extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ul=class extends hn{constructor(t=null,e=1,n=1,i,r,o,a,c,l=vn,h=vn,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ko=class extends We{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Gs=new he,qu=new he,Do=[],Yu=new mi,$x=new he,Ir=new Lt,Dr=new ls,ue=class extends Lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ko(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$x)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gs),Yu.copy(t.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Yu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ls),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gs),Dr.copy(t.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),t.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Gs),qu.multiplyMatrices(n,Gs),Ir.matrixWorld=qu,Ir.raycast(t,Do);for(let o=0,a=Do.length;o<a;o++){let c=Do[o];c.instanceId=r,c.object=this,e.push(c)}Do.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ul(new Float32Array(i*this.count),i,this.count,Ol,Zn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ne=class extends hn{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new $t:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,i=[],r=[],o=[],a=new D,c=new he;for(let f=0;f<=t;f++){let _=f/t;i[f]=this.getTangentAt(_,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Ge(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,_))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ge(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Qo=class extends Vn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new $t){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},dl=class extends Qo{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vl(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Lo=new D,ic=new Vl,sc=new Vl,rc=new Vl,gi=class extends Vn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Lo.subVectors(i[0],i[1]).add(i[0]),l=Lo);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Lo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Lo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),ic.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,g,m),sc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,g,m),rc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(ic.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),sc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),rc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ic.calc(c),sc.calc(c),rc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zu(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Jx(s,t){let e=1-s;return e*e*t}function Kx(s,t){return 2*(1-s)*s*t}function Qx(s,t){return s*s*t}function zr(s,t,e,n){return Jx(s,t)+Kx(s,e)+Qx(s,n)}function jx(s,t){let e=1-s;return e*e*e*t}function ty(s,t){let e=1-s;return 3*e*e*s*t}function ey(s,t){return 3*(1-s)*s*s*t}function ny(s,t){return s*s*s*t}function kr(s,t,e,n,i){return jx(s,t)+ty(s,e)+ey(s,n)+ny(s,i)}var fl=class extends Vn{constructor(t=new $t,e=new $t,n=new $t,i=new $t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new $t){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(t,i.x,r.x,o.x,a.x),kr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pl=class extends Vn{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(t,i.x,r.x,o.x,a.x),kr(t,i.y,r.y,o.y,a.y),kr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ml=class extends Vn{constructor(t=new $t,e=new $t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gl=class extends Vn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_l=class extends Vn{constructor(t=new $t,e=new $t,n=new $t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $t){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(zr(t,i.x,r.x,o.x),zr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rr=class extends Vn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(zr(t,i.x,r.x,o.x),zr(t,i.y,r.y,o.y),zr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xl=class extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $t){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Zu(a,c.x,l.x,h.x,u.x),Zu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new $t().fromArray(i))}return this}},iy=Object.freeze({__proto__:null,ArcCurve:dl,CatmullRomCurve3:gi,CubicBezierCurve:fl,CubicBezierCurve3:pl,EllipseCurve:Qo,LineCurve:ml,LineCurve3:gl,QuadraticBezierCurve:_l,QuadraticBezierCurve3:rr,SplineCurve:xl});var or=class s extends Xe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],_=0,g=[],m=n/2,p=0;S(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function S(){let y=new D,T=new D,E=0,w=(e-t)/n;for(let R=0;R<=r;R++){let M=[],x=R/r,P=x*(e-t)+t;for(let H=0;H<=i;H++){let z=H/i,q=z*c+a,Z=Math.sin(q),F=Math.cos(q);T.x=P*Z,T.y=-x*n+m,T.z=P*F,u.push(T.x,T.y,T.z),y.set(Z,w,F).normalize(),d.push(y.x,y.y,y.z),f.push(z,1-x),M.push(_++)}g.push(M)}for(let R=0;R<i;R++)for(let M=0;M<r;M++){let x=g[M][R],P=g[M+1][R],H=g[M+1][R+1],z=g[M][R+1];(t>0||M!==0)&&(h.push(x,P,z),E+=3),(e>0||M!==r-1)&&(h.push(P,H,z),E+=3)}l.addGroup(p,E,0),p+=E}function v(y){let T=_,E=new $t,w=new D,R=0,M=y===!0?t:e,x=y===!0?1:-1;for(let H=1;H<=i;H++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),_++;let P=_;for(let H=0;H<=i;H++){let q=H/i*c+a,Z=Math.cos(q),F=Math.sin(q);w.x=M*F,w.y=m*x,w.z=M*Z,u.push(w.x,w.y,w.z),d.push(0,x,0),E.x=Z*.5+.5,E.y=F*.5*x+.5,f.push(E.x,E.y),_++}for(let H=0;H<i;H++){let z=T+H,q=P+H;y===!0?h.push(q,q+1,z):h.push(q+1,q,z),R+=3}l.addGroup(p,R,y===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var yl=class s extends Xe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let v=new D,y=new D,T=new D;for(let E=0;E<e.length;E+=3)f(e[E+0],v),f(e[E+1],y),f(e[E+2],T),c(v,y,T,S)}function c(S,v,y,T){let E=T+1,w=[];for(let R=0;R<=E;R++){w[R]=[];let M=S.clone().lerp(y,R/E),x=v.clone().lerp(y,R/E),P=E-R;for(let H=0;H<=P;H++)H===0&&R===E?w[R][H]=M:w[R][H]=M.clone().lerp(x,H/P)}for(let R=0;R<E;R++)for(let M=0;M<2*(E-R)-1;M++){let x=Math.floor(M/2);M%2===0?(d(w[R][x+1]),d(w[R+1][x]),d(w[R][x])):(d(w[R][x+1]),d(w[R+1][x+1]),d(w[R+1][x]))}}function l(S){let v=new D;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(S),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let S=new D;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let y=m(S)/2/Math.PI+.5,T=p(S)/Math.PI+.5;o.push(y,1-T)}_(),u()}function u(){for(let S=0;S<o.length;S+=6){let v=o[S+0],y=o[S+2],T=o[S+4],E=Math.max(v,y,T),w=Math.min(v,y,T);E>.9&&w<.1&&(v<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),T<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,v){let y=S*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function _(){let S=new D,v=new D,y=new D,T=new D,E=new $t,w=new $t,R=new $t;for(let M=0,x=0;M<r.length;M+=9,x+=6){S.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),E.set(o[x+0],o[x+1]),w.set(o[x+2],o[x+3]),R.set(o[x+4],o[x+5]),T.copy(S).add(v).add(y).divideScalar(3);let P=m(T);g(E,x+0,S,P),g(w,x+2,v,P),g(R,x+4,y,P)}}function g(S,v,y,T){T<0&&S.x===1&&(o[v]=S.x-1),y.x===0&&y.z===0&&(o[v]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var _i=class s extends yl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Rn=class s extends Xe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,d=new D,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){let S=[],v=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){let E=T/e;u.x=-t*Math.cos(i+E*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+E*r)*Math.sin(o+v*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(E+y,1-v),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let v=h[p][S+1],y=h[p][S],T=h[p+1][S],E=h[p+1][S+1];(p!==0||o>0)&&f.push(v,y,E),(p!==n-1||c<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new _e(_,3)),this.setAttribute("normal",new _e(g,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Jn=class s extends Xe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){let g=_/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){let g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,S=(i+1)*f+_;o.push(g,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},jo=class s extends Xe{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],c=[],l=[],h=[],u=new D,d=new D,f=new D,_=new D,g=new D,m=new D,p=new D;for(let v=0;v<=n;++v){let y=v/n*r*Math.PI*2;S(y,r,o,t,f),S(y+.01,r,o,t,_),m.subVectors(_,f),p.addVectors(_,f),g.crossVectors(m,p),p.crossVectors(g,m),g.normalize(),p.normalize();for(let T=0;T<=i;++T){let E=T/i*Math.PI*2,w=-e*Math.cos(E),R=e*Math.sin(E);u.x=f.x+(w*p.x+R*g.x),u.y=f.y+(w*p.y+R*g.y),u.z=f.z+(w*p.z+R*g.z),c.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),l.push(d.x,d.y,d.z),h.push(v/n),h.push(T/i)}}for(let v=1;v<=n;v++)for(let y=1;y<=i;y++){let T=(i+1)*(v-1)+(y-1),E=(i+1)*v+(y-1),w=(i+1)*v+y,R=(i+1)*(v-1)+y;a.push(T,E,R),a.push(E,w,R)}this.setIndex(a),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(h,2));function S(v,y,T,E,w){let R=Math.cos(v),M=Math.sin(v),x=T/y*v,P=Math.cos(x);w.x=E*(2+P)*.5*R,w.y=E*(2+P)*M*.5,w.z=E*Math.sin(x)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Gn=class s extends Xe{constructor(t=new rr(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,c=new D,l=new $t,h=new D,u=[],d=[],f=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function g(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),S(),p()}function m(v){h=t.getPointAt(v/e,h);let y=o.normals[v],T=o.binormals[v];for(let E=0;E<=i;E++){let w=E/i*Math.PI*2,R=Math.sin(w),M=-Math.cos(w);c.x=M*y.x+R*T.x,c.y=M*y.y+R*T.y,c.z=M*y.z+R*T.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let y=1;y<=i;y++){let T=(i+1)*(v-1)+(y-1),E=(i+1)*v+(y-1),w=(i+1)*v+y,R=(i+1)*(v-1)+y;_.push(T,E,R),_.push(E,w,R)}}function S(){for(let v=0;v<=e;v++)for(let y=0;y<=i;y++)l.x=v/e,l.y=y/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new iy[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var xe=class extends hs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hd,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},us=class extends xe{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Uo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function sy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ar=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vl=class extends ar{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$h,endingEnd:$h}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jh:r=t,a=2*e-n;break;case Kh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Jh:o=t,c=2*n-e;break;case Kh:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,S=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,v=(-1-f)*m+(1.5+f)*g+.5*_,y=f*m-f*g;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+S*o[l+T]+v*o[c+T]+y*o[u+T];return r}},Ml=class extends ar{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Sl=class extends ar{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Wn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Uo(e,this.TimeBufferType),this.values=Uo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Uo(t.times,Array),values:Uo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ko:e=this.InterpolantFactoryMethodDiscrete;break;case Yc:e=this.InterpolantFactoryMethodLinear;break;case Pa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ko;case this.InterpolantFactoryMethodLinear:return Yc;case this.InterpolantFactoryMethodSmooth:return Pa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&sy(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Pa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[d+_]||g!==e[f+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Yc;var ds=class extends Wn{constructor(t,e,n){super(t,e,n)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=ko;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var El=class extends Wn{};El.prototype.ValueTypeName="color";var bl=class extends Wn{};bl.prototype.ValueTypeName="number";var wl=class extends ar{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)Hn.slerpFlat(r,0,o,l-a,o,l,c);return r}},ta=class extends Wn{InterpolantFactoryMethodLinear(t){return new wl(this.times,this.values,this.getValueSize(),t)}};ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends Wn{constructor(t,e,n){super(t,e,n)}};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=ko;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends Wn{};Tl.prototype.ValueTypeName="vector";var Al=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],_=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}},ry=new Al,Rl=class{constructor(t){this.manager=t!==void 0?t:ry,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Rl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wr=class extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},cr=class extends Wr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},oc=new he,$u=new D,Ju=new D,ea=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;$u.setFromMatrixPosition(t.matrixWorld),e.position.copy($u),Ju.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ju),e.updateMatrixWorld(),oc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ku=new he,Lr=new D,ac=new D,Cl=class extends ea{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $t(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Lr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Lr),ac.copy(n.position),ac.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ac),n.updateMatrixWorld(),i.makeTranslation(-Lr.x,-Lr.y,-Lr.z),Ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku)}},ps=class extends Wr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Pl=class extends ea{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bi=class extends Wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new Pl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Gl="\\[\\]\\.:\\/",oy=new RegExp("["+Gl+"]","g"),Wl="[^"+Gl+"]",ay="[^"+Gl.replace("\\.","")+"]",cy=/((?:WC+[\/:])*)/.source.replace("WC",Wl),ly=/(WCOD+)?/.source.replace("WCOD",ay),hy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wl),uy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wl),dy=new RegExp("^"+cy+ly+hy+uy+"$"),fy=["material","materials","bones","map"],Il=class{constructor(t,e,n){let i=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(oy,"")}static parseTrackName(t){let e=dy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);fy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Il;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dl);var ra={high:{dpr:1.6,blocks:18,grid:5,bevel:3,fps:60},medium:{dpr:1.25,blocks:12,grid:4,bevel:2,fps:60},low:{dpr:1,blocks:8,grid:3,bevel:1,fps:30}};function Yr(){let s="auto";try{s=localStorage.getItem("portfolio-quality")||"auto"}catch{}if(ra[s])return s;let t=navigator.hardwareConcurrency||4,e=navigator.deviceMemory||4;return t<=2||e<=2?"low":innerWidth<900||e<=4?"medium":"high"}var Zr=new D;function Cn(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;Zr.copy(t),Zr[n]=0,Zr.normalize();let l=.5*o/(o+a),h=1-Zr.angleTo(s)/c;return Math.sign(Zr[e])===1?h*l:a/(o+a)+l+l*(1-h)}var ke=class extends pe{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new D,c=new D,l=new D(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,_=new D,g=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:_.set(1,0,0),d[p+0]=Cn(_,c,"z","y",r,n),d[p+1]=1-Cn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),d[p+0]=1-Cn(_,c,"z","y",r,n),d[p+1]=1-Cn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),d[p+0]=1-Cn(_,c,"x","z",r,t),d[p+1]=Cn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[p+0]=1-Cn(_,c,"x","z",r,t),d[p+1]=1-Cn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[p+0]=1-Cn(_,c,"x","y",r,t),d[p+1]=1-Cn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),d[p+0]=Cn(_,c,"x","y",r,t),d[p+1]=1-Cn(_,c,"y","x",r,e);break}}};var oa=class extends Fi{constructor(){super();let t=new pe;t.deleteAttribute("uv");let e=new xe({side:je}),n=new xe,i=new ps(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Lt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Lt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Lt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new Lt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Lt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Lt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Lt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Lt(t,dr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Lt(t,dr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let _=new Lt(t,dr(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);let g=new Lt(t,dr(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let m=new Lt(t,dr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Lt(t,dr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function dr(s){let t=new Re;return t.color.setScalar(s),t}function aa({size:s=2,software:t=!1,orange:e}={}){let n=new Jt,i=new Jt,r=[],o=e||new us({color:"#e96c0c",metalness:.48,roughness:.38,clearcoat:.08,clearcoatRoughness:.5,envMapIntensity:.7}),a=new us({color:"#e96c0c",metalness:.5,roughness:.46,envMapIntensity:.65}),c=new xe({color:"#211e19",metalness:.5,roughness:.4}),l=t?new pe(1,1,1):new ke(1,1,1,4,.0325),h=t?new Te(.91*s,.91*s):new ke(.91*s,.91*s,.0125*s,3,.006*s),u=new pe(.006*s,.0225*s,.0015*s),d=new Lt(l,a);d.scale.setScalar(s),d.renderOrder=2,n.add(d,i);let f=new Qt(t?"#dc630c":"#e96c0c"),_=new Qt("#25211c");for(let[p,S]of[[0,0,1],[0,0,-1],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0]].entries()){let v=new Lt(h,o),y=new D(...S);if(v.renderOrder=3,v.quaternion.setFromUnitVectors(new D(0,0,1),y),v.position.copy(y).multiplyScalar(.504*s),i.add(v),r.push({part:v,normal:y}),p===0)for(let T=0;T<7;T++){let E=new Lt(u,c);E.renderOrder=4,E.position.set((-.325+T*.012)*s,-.325*s,.008*s),v.add(E)}}function g({fracture:p=0,spread:S=0}={}){let v=Oe.clamp(p,0,1),y=Oe.clamp(S,0,1);d.visible=i.visible=v<.8,d.scale.setScalar(s*Math.max(.001,1-v)),i.scale.setScalar(Math.max(.001,1-v)),r.forEach(({part:T,normal:E})=>T.position.copy(E).multiplyScalar((.504+y*.31)*s)),a.color.copy(f).lerp(_,y)}function m(){l.dispose(),h.dispose(),u.dispose(),a.dispose(),c.dispose(),e||o.dispose()}return{group:n,core:d,panelsGroup:i,panels:r,orange:o,update:g,dispose:m}}function ca(s,t){let e=new ir(s),n=new oa,i=e.fromScene(n,.04);return t.environment=i.texture,e.dispose(),n.dispose(),i}var fr=class{constructor(t){if(this.canvas=t,this.context=t.getContext("2d",{alpha:!0}),!this.context)throw new Error("Canvas unavailable");this.capabilities={getMaxAnisotropy:()=>1},this.pixelRatio=1,this.mvp=new he,this.normalMatrix=new ee,this.vector=new D,this.normal=new D,this.light=new D(-.5,.8,.9).normalize(),this.half=new D(-.2,.4,1).normalize()}setPixelRatio(t){this.pixelRatio=Math.min(t,1.25)}setSize(t,e){this.width=t,this.height=e,this.canvas.width=Math.round(t*this.pixelRatio),this.canvas.height=Math.round(e*this.pixelRatio)}render(t,e){let n=this.context,i=this.width,r=this.height,o=this.pixelRatio;n.setTransform(o,0,0,o,0,0),n.clearRect(0,0,i,r),t.updateMatrixWorld(),e.updateMatrixWorld(),e.matrixWorldInverse.copy(e.matrixWorld).invert();let a=[],c=new he().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),l=(f,_,g=null)=>{if(!f.isMesh||f.userData.skipSoftware)return;let m=f.material;if(!m||m.opacity<.005)return;let p=f.geometry,S=p.attributes.position,v=p.attributes.uv,y=p.attributes.normal,T=p.index;if(!S)return;this.mvp.multiplyMatrices(c,_),this.normalMatrix.getNormalMatrix(_);let E=[];for(let x=0;x<S.count;x++)this.vector.fromBufferAttribute(S,x).applyMatrix4(this.mvp),E.push({x:(this.vector.x*.5+.5)*i,y:(-.5*this.vector.y+.5)*r,z:this.vector.z});let w=T?T.count:S.count,R=Math.max(0,p.drawRange.start||0),M=Math.min(w,R+p.drawRange.count);for(let x=R;x<M;x+=3){let P=T?T.getX(x):x,H=T?T.getX(x+1):x+1,z=T?T.getX(x+2):x+2,q=E[P],Z=E[H],F=E[z];if(q.z>1||q.z<-1||Z.z>1||F.z>1)continue;let rt=(Z.x-q.x)*(F.y-q.y)-(Z.y-q.y)*(F.x-q.x);if(m.side!==zn&&rt>=0||Math.max(q.x,Z.x,F.x)<0||Math.min(q.x,Z.x,F.x)>i||Math.max(q.y,Z.y,F.y)<0||Math.min(q.y,Z.y,F.y)>r)continue;let X=1,xt=0,nt=0;!m.isMeshBasicMaterial&&y&&(this.normal.set(y.getX(P)+y.getX(H)+y.getX(z),y.getY(P)+y.getY(H)+y.getY(z),y.getZ(P)+y.getZ(H)+y.getZ(z)).applyMatrix3(this.normalMatrix).normalize(),X=.26+Math.max(0,this.normal.dot(this.light))*.9,xt=Math.pow(Math.max(0,this.normal.dot(this.half)),24)*.05,nt=Math.pow(1-Math.abs(this.normal.z),4)*.035);let pt=m.color.clone();g&&pt.multiply(g),pt.convertLinearToSRGB();let Tt=[pt.r,pt.g,pt.b].map((B,Y)=>Math.round(Math.min(1,B*X+xt*(Y===0?1:Y===1?.82:.63)+nt*(Y===0?.9:Y===1?.36:.16))*255)),W=null;if(m.map?.image&&v){let B=m.map.image;W={img:B,uv:[P,H,z].map(Y=>({x:v.getX(Y)*B.width,y:(1-v.getY(Y))*B.height}))}}let U=null;if(!W&&p.type==="BoxGeometry"&&T&&x%6===0&&x+6<=M){U=[...new Set(Array.from({length:6},(et,lt)=>T.getX(x+lt)))].map(et=>E[et]);let Y=U.reduce((et,lt)=>et+lt.x,0)/4,N=U.reduce((et,lt)=>et+lt.y,0)/4;U.sort((et,lt)=>Math.atan2(et.y-N,et.x-Y)-Math.atan2(lt.y-N,lt.x-Y)),x+=3}a.push({a:q,b:Z,c:F,z:U?U.reduce((B,Y)=>B+Y.z,0)/4:(q.z+Z.z+F.z)/3,color:`rgb(${Tt.join(",")})`,alpha:m.opacity,order:f.renderOrder,tex:W,quad:U})}},h=new he,u=new he,d=new Qt;t.traverseVisible(f=>{if(!(!f.isMesh||f.userData.skipSoftware))if(f.isInstancedMesh)for(let _=0;_<f.count;_++)f.getMatrixAt(_,h),u.multiplyMatrices(f.matrixWorld,h),f.instanceColor&&f.getColorAt(_,d),l(f,u,f.instanceColor?d:null);else l(f,f.matrixWorld)}),a.sort((f,_)=>f.order-_.order||_.z-f.z);for(let f of a){if(n.globalAlpha=f.alpha,f.tex){this.drawTexture(f);continue}n.fillStyle=f.color,n.strokeStyle=f.color,n.lineWidth=.5,n.beginPath();let _=f.quad||[f.a,f.b,f.c];n.moveTo(_[0].x,_[0].y);for(let g of _.slice(1))n.lineTo(g.x,g.y);n.closePath(),n.fill(),n.stroke()}n.globalAlpha=1}drawTexture(t){let e=this.context,[n,i,r]=t.tex.uv,[o,a,c]=[t.a,t.b,t.c],l=n.x*(i.y-r.y)+i.x*(r.y-n.y)+r.x*(n.y-i.y);if(Math.abs(l)<.001)return;let h=(o.x*(i.y-r.y)+a.x*(r.y-n.y)+c.x*(n.y-i.y))/l,u=(o.y*(i.y-r.y)+a.y*(r.y-n.y)+c.y*(n.y-i.y))/l,d=(o.x*(r.x-i.x)+a.x*(n.x-r.x)+c.x*(i.x-n.x))/l,f=(o.y*(r.x-i.x)+a.y*(n.x-r.x)+c.y*(i.x-n.x))/l,_=(o.x*(i.x*r.y-r.x*i.y)+a.x*(r.x*n.y-n.x*r.y)+c.x*(n.x*i.y-i.x*n.y))/l,g=(o.y*(i.x*r.y-r.x*i.y)+a.y*(r.x*n.y-n.x*r.y)+c.y*(n.x*i.y-i.x*n.y))/l;e.save(),e.beginPath();let m=(o.x+a.x+c.x)/3,p=(o.y+a.y+c.y)/3,S=v=>{let y=v.x-m,T=v.y-p,E=Math.hypot(y,T)||1;return[v.x+y/E*.7,v.y+T/E*.7]};e.moveTo(...S(o)),e.lineTo(...S(a)),e.lineTo(...S(c)),e.closePath(),e.clip(),e.transform(h,u,d,f,_,g),e.drawImage(t.tex.img,0,0),e.restore()}};function vd(){if(!document.querySelector("#world"))return;let s=document.documentElement,t=document.querySelector(".art"),e=document.querySelector("#world"),n=document.querySelector(".portrait-opening")||document.querySelector("#journey"),i=document.querySelector("#portrait"),r=matchMedia("(prefers-reduced-motion: reduce)"),o=()=>r.matches||s.classList.contains("reduced-motion"),a=(U,B,Y)=>{let N=Oe.clamp((Y-U)/(B-U),0,1);return N*N*(3-2*N)},c,l=!1;try{c=new sr({canvas:e,alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{l=!0;try{c=new fr(e)}catch{s.dataset.renderer="static"}}let h=new Fi,u=new nr(-4,4,2.7,-2.7,.1,30);u.position.z=10;let d;c&&!l&&(c.outputColorSpace=be,c.toneMapping=Xr,c.toneMappingExposure=1,d=ca(c,h)),h.add(new cr("#fff5e5","#635446",1.6));let f=new Bi("#fff8ee",2.8);f.position.set(-3,6,5),h.add(f);let _=aa({size:1.85,software:l});h.add(_.group),_.group.rotation.set(.22,-.49,-.05),_.group.traverse(U=>{U.isMesh&&(U.material.transparent=!0)});let g=JSON.parse(document.querySelector("#samples").textContent),m=Yr(),p=l?448:m==="low"?224:m==="medium"||innerWidth<700?448:896,S=new pe(1,1,1),v=new xe({color:"#ffffff",metalness:.35,roughness:.48,transparent:!0}),y=new ue(S,v,p);y.instanceMatrix.setUsage(on),y.frustumCulled=!1,h.add(y);let T=new D,E=new le,w=new Qt,R=U=>{let B=Math.sin((U+1)*127.1)*43758.5453;return B-Math.floor(B)},M=Array.from({length:p},(U,B)=>{let Y=g[Math.floor(B*g.length/p)],N=Math.ceil(Math.cbrt(p));return{start:new D((B%N/(N-1)-.5)*1.72,(Math.floor(B/N)%N/(N-1)-.5)*1.72,(Math.floor(B/N/N)/(N-1)-.5)*1.72).applyEuler(_.group.rotation),target:new D((Y[0]-.5)*2.85,(.5-Y[1])*3.8,0),color:new Qt(Y[2]),phase:R(B)*Math.PI*2,radius:.8+R(B+9)*.9,height:(R(B+28)-.5)*3.5,speed:.45+R(B+7)*.4}}),x=0,P=0,H=0,z=0,q=!0,Z=!0,F=[["Seu neg\xF3cio tem<br>um <em>problema?</em>","Eu transformo em<br>solu\xE7\xE3o digital.","01 / O PONTO DE PARTIDA"],["Separar para<br><em>entender.</em>","Cada parte revela<br>um caminho poss\xEDvel.","02 / INVESTIGA\xC7\xC3O"],["Conectar faz<br><em>tomar forma.</em>","O movimento encontra dire\xE7\xE3o.","03 / CONEX\xC3O"],["Por tr\xE1s da solu\xE7\xE3o,<br><em>Abra\xE3o.</em>","Abra\xE3o Lima Ribeiro<br>Desenvolvedor de solu\xE7\xF5es digitais.","04 / QUEM RESOLVE"]],rt=-1;function X(){let U=x<.24?0:x<.57?1:x<.83?2:3;U!==rt&&(rt=U,document.querySelector("#headline").innerHTML=F[U][0],document.querySelector("#subline").innerHTML=F[U][1],document.querySelector("#chapter").textContent=F[U][2]),s.style.setProperty("--progress",x),i.style.opacity=a(.82,.97,x),i.setAttribute("aria-hidden",String(x<.83)),i.style.filter=`blur(${(1-a(.8,.96,x))*9}px)`,n.dataset.progress=x.toFixed(3),n.dataset.phase=String(U)}function xt(){let U=n.getBoundingClientRect();P=Oe.clamp(-U.top/(U.height-innerHeight),0,1),Z=!0}addEventListener("scroll",xt,{passive:!0});let nt=()=>{if(!c)return;let U=t.getBoundingClientRect();c.setPixelRatio(Math.min(devicePixelRatio||1,l?1:innerWidth<700?1.25:1.6)),c.setSize(U.width,U.height,!1),u.left=-2.7*U.width/U.height,u.right=2.7*U.width/U.height,u.updateProjectionMatrix(),Z=!0,xt()},pt=new ResizeObserver(nt);pt.observe(t),nt();function Tt(U){if(H=requestAnimationFrame(Tt),!q||document.hidden)return;let B=Math.min((U-z)/1e3||.016,.06);if(B<(l?1/24:1/60)*.85||(z=U,x=o()?P:Oe.damp(x,P,9,B),Math.abs(x-P)<1e-4&&(x=P),X(),!c))return;if(o()){if(_.group.visible=x<.5,y.visible=!1,i.style.opacity=x<.5?0:1,!Z)return;Z=!1,c.render(h,u);return}let Y=a(.12,.43,x),N=a(.53,.78,x),et=a(.83,.98,x);_.group.visible=x<.17,_.group.position.y=Math.sin(U*5e-4)*.025;let lt=1-a(.08,.17,x);_.group.traverse(Ct=>{Ct.isMesh&&(Ct.material.opacity=lt)}),y.visible=x>.17&&x<.985,v.opacity=a(.17,.23,x)*(1-et);let Rt=U*25e-5;if(y.visible)for(let Ct=0;Ct<p;Ct++){let Mt=M[Ct],Bt=Mt.phase+Rt*Mt.speed,G=Math.cos(Bt)*Mt.radius,Kt=Mt.height+Math.sin(Bt*1.65+Mt.phase)*.32,Vt=Math.sin(Bt)*.8;E.position.copy(Mt.start).lerp(T.set(G,Kt,Vt),Y).lerp(Mt.target,N);let zt=Math.sin(U*.0017+Mt.phase)*.14*Y*(1-N);E.position.y+=zt;let Pt=Oe.lerp(.205,l?.1:.088,N);E.scale.setScalar(Pt*(1-et*.25)),E.rotation.set(Bt*(1-N),Bt*.8*(1-N),Bt*.6*(1-N)),E.updateMatrix(),y.setMatrixAt(Ct,E.matrix),w.set("#ed790e").lerp(Mt.color,a(.67,.86,x)),y.setColorAt(Ct,w)}y.instanceMatrix.needsUpdate=!0,y.instanceColor&&(y.instanceColor.needsUpdate=!0),c.render(h,u),s.dataset.renderer=l?"canvas":"webgl"}H=requestAnimationFrame(Tt);let W=new IntersectionObserver(([U])=>{q=U.isIntersecting,s.dataset.portraitVisible=String(q)});W.observe(n),r.addEventListener("change",()=>{Z=!0}),addEventListener("pagehide",U=>{U.persisted||(cancelAnimationFrame(H),pt.disconnect(),W.disconnect(),_.dispose(),S.dispose(),v.dispose(),d?.dispose(),c?.dispose?.())}),xt(),X()}var Md=s=>Math.max(0,Math.min(1,s)),zi=(s,t,e)=>{let n=Md((e-s)/(t-s));return n*n*(3-2*n)},qe=(s,t,e)=>s.map((n,i)=>n+(t[i]-n)*e),ki=[[-2,.65,1.6],[2,.65,.35],[-.35,.65,-2.25]],py=.43,my=.61;function Xl(s){let t=Md(s),[e,n,i]=ki,r=qe(e,n,.36),o=qe(n,i,.36),a=qe(i,e,.36),c,l=t<.35?0:t<.7?1:2;if(t<.2)c=qe(e,r,zi(0,.2,t));else if(t<.3)c=[...r];else if(t<.4){let u=zi(.3,.4,t);c=qe(r,n,u),c[1]+=Math.sin(u*Math.PI)*1.05}else if(t<.55)c=qe(n,o,zi(.4,.55,t));else if(t<.65)c=[...o];else if(t<.75){let u=zi(.65,.75,t);c=qe(o,i,u),c[1]+=Math.sin(u*Math.PI)*1.05}else c=qe(i,a,zi(.75,.9,t));let h=qe([0,.3,0],c,.24+zi(.12,.92,t)*.18);return{p:t,phase:l,actor:c,focus:h,blocked:t>=.2&&t<=.3||t>=.55&&t<=.65||t>=.9,yaw:-.45+t*1.3,zoom:1-zi(.08,.95,t)*.24}}function Sd({scene:s,software:t=!1,quality:e="high"}){let n=new Jt;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=[],a=nt=>(i.add(nt),nt),c=nt=>(r.add(nt),nt),l=a(new pe(1,1,1)),h=t||e==="low"?l:a(new ke(1,1,1,2,.045)),u=c(new xe({color:"#272824",metalness:.36,roughness:.57})),d=c(new xe({color:"#111310",metalness:.25,roughness:.72})),f=c(new xe({color:"#e1d6c3",metalness:.26,roughness:.48})),_=c(new xe({color:"#635341",metalness:.6,roughness:.46})),g=c(new Re({color:"#fa760d",toneMapped:!1})),m=c(new Re({color:"#7d3e14",toneMapped:!1})),p=c(new Re({color:"#e8ceb0",toneMapped:!1}));function S(nt,pt,Tt=u,W=!1){let U=new Lt(W?h:l,Tt);return U.position.set(...nt),U.scale.set(...pt),n.add(U),U}function v(nt,pt,Tt,W){let U=new D(...nt),B=new D(...pt),Y=B.clone().sub(U),N=S(U.clone().add(B).multiplyScalar(.5).toArray(),[Tt,Y.length(),Tt],W);return N.quaternion.setFromUnitVectors(new D(0,1,0),Y.normalize()),N}S([0,-.34,-.2],[6.8,.28,6.2],d,!0).renderOrder=-20,S([0,-.5,-.2],[7.05,.08,6.45],u).renderOrder=-21;let y=new ue(l,u,t||e==="low"?32:80),T=new le;n.add(y),y.renderOrder=-19;for(let nt=0;nt<y.count;nt++){let pt=(nt%10-4.5)*.64,Tt=(Math.floor(nt/10)-3.5)*.7;T.position.set(pt,-.16,Tt),T.scale.set(.61,.025,.67),T.updateMatrix(),y.setMatrixAt(nt,T.matrix)}let E=[];for(let nt=0;nt<3;nt++){let[pt,,Tt]=ki[nt];S([pt,.04,Tt],[1.56,.34,1.5],u,!0),S([pt,.23,Tt],[1.38,.1,1.31],_),S([pt,.32,Tt],[1.26,.1,1.18],d,!0),S([pt,.39,Tt],[1.1,.045,.99],f,!0);for(let B=0;B<(t||e==="low"?3:6);B++)S([pt-.43+B*.17,.48,Tt-.38],[.055,.17,.16],u);S([pt,.5,Tt+.45],[.92,.035,.025],m);let W=S([pt,.505,Tt+.45],[.6,.04,.032],g);E.push(W);let U=[.9,1.35,1.08][nt];S([pt+.48,.4+U/2,Tt-.38],[.28,U,.3],u,!0),S([pt+.48,.42+U,Tt-.38],[.24,.025,.24],f);for(let B=0;B<3;B++)S([pt+.48,.65+B*.21,Tt-.212],[.15,.025,.012],B===nt?g:_)}let w=[],R=[];for(let nt=0;nt<3;nt++){let pt=ki[nt],Tt=ki[(nt+1)%3],W=new D(...Tt).sub(new D(...pt)).normalize(),U=new D(-W.z,0,W.x);for(let[et,lt]of[[.12,py],[my,.88]]){for(let Mt of[-1,1]){let Bt=new D(...qe(pt,Tt,et)).addScaledVector(U,Mt*.15),G=new D(...qe(pt,Tt,lt)).addScaledVector(U,Mt*.15);Bt.y=G.y=.39,v(Bt.toArray(),G.toArray(),.075,u),Bt.y=G.y=.438,v(Bt.toArray(),G.toArray(),.018,et===.12?g:m)}let Rt=qe(pt,Tt,et),Ct=qe(pt,Tt,lt);Rt[1]=Ct[1]=.35,v(Rt,Ct,.16,_)}for(let et of[.21,.78]){let lt=qe(pt,Tt,et);S([lt[0],.03,lt[2]],[.18,.6,.18],u)}let B=qe(pt,Tt,.48),Y=S([B[0],.79,B[2]],[.035,.68,.52],u,!0);Y.rotation.y=-Math.atan2(W.z,W.x),w.push(Y);let N=S([B[0]-.018,.81,B[2]],[.018,.49,.025],g);N.rotation.y=Y.rotation.y,R.push(N);for(let et=0;et<3;et++){let lt=qe(pt,Tt,.49+et*.035);S([lt[0],.2-et*.12,lt[2]],[.07,.07,.07],et===0?_:u)}}for(let[nt,pt,Tt]of[[-2.9,-1.1,.8],[2.8,1.9,.65],[1.6,-2.9,.5]]){S([nt,Tt/2-.14,pt],[.55,Tt,.7],u,!0);for(let W=0;W<3;W++)S([nt-.16+W*.16,Tt-.12,pt+.355],[.045,.12,.014],f)}for(let nt=0;nt<4;nt++)S([-2.6+nt*.16,-.135,2.6],[.07,.02,.14],nt===0?g:_);let M=t||e==="low"?12:24,x=new ue(l,g,M);if(x.frustumCulled=!1,n.add(x),!t){let nt=document.createElement("canvas");nt.width=nt.height=64;let pt=nt.getContext("2d"),Tt=pt.createRadialGradient(32,32,0,32,32,32);Tt.addColorStop(0,"rgba(255,110,15,.32)"),Tt.addColorStop(1,"rgba(255,110,15,0)"),pt.fillStyle=Tt,pt.fillRect(0,0,64,64);let W=new Ne(nt);o.push(W);let U=c(new Re({map:W,transparent:!0,depthWrite:!1,toneMapped:!1})),B=a(new Te(2.7,2.7));for(let Y of ki){let N=new Lt(B,U);N.position.set(Y[0],-.115,Y[2]),N.rotation.x=-Math.PI/2,n.add(N)}}let P=document.querySelector(".cinematic-flow"),H=[...P?.querySelectorAll(".film-act")||[]],z=[...P?.querySelectorAll("[data-island]")||[]],q=-1,Z=-1,F=0,rt=new D;function X(nt,pt,Tt){let W=Xl(nt);n.visible=!0;let U=M/3;for(let B=0;B<M;B++){let Y=Math.floor(B/U),N=Y===W.phase,et=((N?pt*12e-5:0)+B%U/U)%1*.38,lt=ki[Y],Rt=ki[(Y+1)%3],Ct=qe(lt,Rt,et),Mt=zi(.3,.38,et),Bt=.065*(N?1:.35)*(1-Mt*.85);T.position.set(Ct[0],.52,Ct[2]),T.rotation.set(0,pt*2e-4+B,0),T.scale.set(Bt,.025,Bt),T.updateMatrix(),x.setMatrixAt(B,T.matrix)}return x.instanceMatrix.needsUpdate=!0,w.forEach((B,Y)=>{B.position.y=.79+(Y===W.phase?Math.sin(pt*.0018)*.025:0)}),R.forEach((B,Y)=>{B.visible=Y===W.phase,B.scale.y=W.blocked?.44+Math.sin(pt*.004)*.06:.28}),E.forEach((B,Y)=>{B.scale.x=Y===W.phase?.6+Math.sin(pt*.002)*.09:.3}),P&&(P.dataset.rendered="true",P.dataset.cinemaPhase=String(W.phase),P.dataset.cinemaProgress=W.p.toFixed(3),P.dataset.cinemaBlocked=String(W.blocked),q!==W.phase&&(q=W.phase,H.forEach((B,Y)=>B.dataset.active=String(Y===W.phase))),(Z!==nt||F!==Tt.aspect)&&(Tt.updateMatrixWorld(),Z=nt,F=Tt.aspect,z.forEach((B,Y)=>{let N=ki[Y];rt.set(N[0],1.95,N[2]).project(Tt),B.style.left=(rt.x*.5+.5)*100+"%",B.style.top=(-rt.y*.5+.5)*100+"%",B.style.opacity=rt.z<1&&Math.abs(rt.x)<.85?"1":"0"}))),W}function xt(){s.remove(n),i.forEach(nt=>nt.dispose()),r.forEach(nt=>nt.dispose()),o.forEach(nt=>nt.dispose())}return{group:n,update:X,dispose:xt}}var ql=(s,t=0,e=1)=>Math.max(t,Math.min(e,s)),Qn=(s,t,e)=>{let n=ql((e-s)/(t-s));return n*n*n*(n*(n*6-15)+10)};function la(s,t=4){let e=ql(Number.isFinite(s)?s:0),n=ql((e-.055)/.91,0,1)*t,i=Math.min(t-1,Math.floor(n)),r=n-i;return{p:e,time:n,index:i,local:r,dock:Qn(.19,.64,r),cameraDock:Qn(.19,.64,r)*(1-Qn(.87,1,r)),phase:r<.24?0:r<.7?1:2,entrance:Qn(0,.075,e),finish:Qn(.95,1,e),pulse:Math.sin(Math.PI*Qn(.48,.76,r))}}function Ed(s,t){let e=s-t,n=Math.max(0,-e),i=Qn(0,.19,e),r=Qn(.19,.64,e),o=n*1.75,a=[1.35*Math.cos(o)-1.5*Math.sin(o),3.1+Math.sin(n*1.2)*.65+n*.05,-1.25-n*.65],c=[-.1,3.12,1.35];return{t:e,dock:r,visible:e<.64,position:a.map((l,h)=>l+(c[h]-l)*i),scale:.79/(1+n*.12)+(1-.79/(1+n*.12))*i,yaw:(-.24-n*.08)*(1-i)+.09*i,roll:(.055+n*.025)*(1-i)}}function bd({scene:s,software:t=!1,quality:e="medium"}){let n=new Jt;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=new Set,a=t||e==="low",c=document.querySelector("[data-notebook-stage]"),l=c.querySelector(".notebook-world"),h=[...c.querySelectorAll("[data-project-screen]")],u=ht=>(i.add(ht),ht),d=(ht,_t=!1)=>{let $=_t?new Re(ht):new xe({roughness:.38,metalness:.65,...ht});return r.add($),$},f=d({color:"#53534e",roughness:.32,metalness:.85}),_=d({color:"#a8a79e",roughness:.23,metalness:.88}),g=d({color:"#20221f",roughness:.5}),m=d({color:"#10120f",roughness:.7}),p=d({color:"#ed791d",roughness:.3,metalness:.56}),S=d({color:"#f18c36",toneMapped:!1},!0),v=u(a?new pe(1,1,1):new ke(1,1,1,2,.035)),y=u(new pe(1,1,1)),T=u(new Te(4.22,2.6375,a?8:12,a?5:8));function E(ht,_t,$,k,Q=n,A=!1){let it=new Lt(A?y:v,k);return it.scale.set(ht,_t,$),Q.add(it),it}function w(ht,_t,$){let k=new ue(v,_t,ht);return k.frustumCulled=!1,$.add(k),k}let R=new le;function M(ht,_t,$,k,Q,A,it,O){R.position.set($,k,Q),R.rotation.set(0,0,0),R.scale.set(A,it,O),R.updateMatrix(),ht.setMatrixAt(_t,R.matrix)}let x=new Jt;n.add(x),E(4.88,.16,3.22,f,x).position.set(0,-.94,.72);let P=E(4.75,.045,3.08,_,x);P.position.set(0,-.847,.7),P.renderOrder=1;let H=E(4.65,.025,2.94,f,x);H.position.set(0,-.817,.7),H.renderOrder=2;let z=E(4.4,.018,1.49,m,x);z.position.set(0,-.796,.24),z.renderOrder=3;let q=w(65,g,x);q.renderOrder=4;for(let ht=0;ht<5;ht++)for(let _t=0;_t<13;_t++)M(q,ht*13+_t,-1.91+_t*.319,-.775,-.32+ht*.272,.278,.038,.222);let Z=E(1.7,.024,.18,g,x);Z.position.set(0,-.765,.98),Z.renderOrder=4;let F=E(1.64,.012,.83,_,x);F.position.set(0,-.789,1.67),F.renderOrder=3;let rt=E(1.59,.015,.78,f,x);rt.position.set(0,-.777,1.67),rt.renderOrder=4;let X=w(a?16:32,m,x);X.renderOrder=4;for(let ht=0;ht<X.count;ht++){let _t=ht<X.count/2?-1:1,$=ht%(X.count/2);M(X,ht,_t*2.3,-.78,-.35+$*(1.35/(X.count/2)),.022,.008,.035)}for(let ht of[-1.58,1.58])E(.76,.18,.2,g,x).position.set(ht,-.78,-.78);for(let ht of[-2.446,2.446])for(let _t of[.05,.5])E(.008,.05,.23,m,x).position.set(ht,-.94,_t);E(.065,.026,.016,S,x).position.set(2.14,-.91,2.337),E(1.1,.018,.014,g,x).position.set(0,-.87,2.34);let xt=new Jt;xt.position.set(0,-.76,-.78),xt.rotation.x=-.105,x.add(xt);let nt=E(4.88,3.05,.105,f,xt);nt.position.y=1.51,nt.renderOrder=5;let pt=E(4.74,2.92,.024,_,xt);pt.position.set(0,1.52,.065),pt.renderOrder=6;let Tt=E(4.68,2.86,.025,m,xt);Tt.position.set(0,1.52,.084),Tt.renderOrder=7;let W=d({color:"#171b16",toneMapped:!1},!0),U=document.createElement("canvas");U.width=768,U.height=480;let B=U.getContext("2d");B.fillStyle="#171b16",B.fillRect(0,0,768,480),B.fillStyle="#e6ded0",B.font="500 40px Arial",B.fillText("dev.abraao",66,209),B.fillStyle="#f58a2b",B.fillRect(68,244,48,2),B.font="10px Arial",B.fillText("O PROBLEMA ENCONTRA SEU CAMINHO.",68,282);let Y=new Ne(U);Y.colorSpace=be,o.add(Y),W.map=Y,W.color.set("#ffffff");let N=new Lt(T,W);N.position.set(0,1.53,.105),N.renderOrder=8,xt.add(N);let et=new le;et.position.copy(N.position),et.position.z-=.055,xt.add(et);let lt=E(.045,.023,.006,g,xt);lt.position.set(0,2.913,.103),lt.renderOrder=8;for(let ht=0;ht<9;ht++){let _t=E(.009,.025,.005,ht===8?p:_,xt);_t.position.set(-.09+ht*.021,.095,.104),_t.renderOrder=8}let Rt=d({color:"#e48639",transparent:!0,opacity:.08,toneMapped:!1},!0),Ct=E(4.35,.018,.016,Rt,xt);Ct.position.set(0,.175,.112),Ct.renderOrder=9;let Mt=document.createElement("canvas");Mt.width=Mt.height=64;let Bt=Mt.getContext("2d"),G=Bt.createRadialGradient(32,32,0,32,32,32);G.addColorStop(0,"#25221990"),G.addColorStop(1,"#25221900"),Bt.fillStyle=G,Bt.fillRect(0,0,64,64);let Kt=new Ne(Mt);o.add(Kt);let Vt=new Lt(u(new Te(6.4,4.5)),d({map:Kt,transparent:!0,depthWrite:!1},!0));Vt.rotation.x=-Math.PI/2,Vt.position.set(0,-1.125,.5),n.add(Vt),Vt.renderOrder=-7;let zt=h.map((ht,_t)=>{let $=new Jt;n.add($);let k=d({color:_t===0?"#d88034":"#a3a093",roughness:.32,metalness:.7}),Q=E(4.34,2.76,.065,k,$),A=E(4.27,2.69,.022,m,$);A.position.z=.039;let it=d({color:"#f4f0e8",toneMapped:!1},!0),O=new Lt(T,it);O.position.z=.055,$.add(O);let j=E(.22,.06,.016,p,$);return j.position.set(-1.9,1.405,.01),{board:$,frame:Q,inset:A,face:O,tab:j,faceMat:it,border:k,texture:null,el:ht}}),Pt=0;n.traverse(ht=>{ht.isMesh&&Pt++}),c.dataset.notebookMeshes=String(Pt);let Zt=new D,It=new Hn,I=new Hn,b=new An,tt=new D,gt=new D,Et=new D,ut=-1,yt=!1,vt=!1,St=0;function Ft(ht,_t){let $=document.createElement("canvas");$.width=a?768:1024,$.height=$.width/1.6;let k=$.getContext("2d");if(_t!=="nexa")k.drawImage(ht,0,0,ht.width,Math.min(ht.height,ht.width/1.6),0,0,$.width,$.height);else{let it=function(O,j){let[L,V,ft]=O,[Nt,dt,At]=j,bt=L[0]*(V[1]-ft[1])+V[0]*(ft[1]-L[1])+ft[0]*(L[1]-V[1]),kt=at=>[(Nt[at]*(V[1]-ft[1])+dt[at]*(ft[1]-L[1])+At[at]*(L[1]-V[1]))/bt,(Nt[at]*(ft[0]-V[0])+dt[at]*(L[0]-ft[0])+At[at]*(V[0]-L[0]))/bt,(Nt[at]*(V[0]*ft[1]-ft[0]*V[1])+dt[at]*(ft[0]*L[1]-L[0]*ft[1])+At[at]*(L[0]*V[1]-V[0]*L[1]))/bt],jt=kt(0),Gt=kt(1);k.save(),k.beginPath(),k.moveTo(...Nt),k.lineTo(...dt),k.lineTo(...At),k.closePath(),k.clip(),k.transform(jt[0],Gt[0],jt[1],Gt[1],jt[2],Gt[2]),k.drawImage(ht,0,0),k.restore()},A=[[188,38],[735,38],[749,375],[177,375]].map(([O,j])=>[O/1100*ht.width,j/434*ht.height]);it([A[0],A[1],A[2]],[[0,0],[$.width,0],[$.width,$.height]]),it([A[0],A[2],A[3]],[[0,0],[$.width,$.height],[0,$.height]])}let Q=new Ne($);return Q.colorSpace=be,Q.anisotropy=a?1:4,o.add(Q),Q}function st(){vt||yt||(vt=!0,zt.forEach(ht=>{let _t=new Image;_t.decoding="async",_t.onload=()=>{yt||(ht.texture=Ft(_t,ht.el.dataset.projectKind),ht.faceMat.map=ht.texture,ht.faceMat.needsUpdate=!0,c.dataset.screensReady=String(++St))},_t.onerror=()=>{c.dataset.screenError="true"},_t.src=ht.el.dataset.projectScreen}))}let mt=new IntersectionObserver(ht=>{ht.some(_t=>_t.isIntersecting)&&(st(),mt.disconnect())},{rootMargin:"1200px"});mt.observe(l);function Ut(ht,_t,$){st();let k=la(ht,zt.length),Q=innerWidth<=700;n.rotation.y=.07-Math.sin(k.p*Math.PI)*.07,n.position.y=-.12+k.entrance*.12,x.rotation.y=Math.sin(k.local*Math.PI)*.025,xt.rotation.x=-.105-Math.sin(k.local*Math.PI)*.025,s.updateMatrixWorld(!0),et.getWorldPosition(tt),et.getWorldQuaternion(It);let A=.012*Math.sin(_t*75e-5);zt.forEach((O,j)=>{let L=Ed(k.time,j);if(O.board.visible=L.visible,!L.visible)return;let V=30-(j-k.index)*4;O.frame.renderOrder=V,O.inset.renderOrder=V+1,O.face.renderOrder=V+2,O.tab.renderOrder=V+2,Zt.set(...L.position),Zt.y+=A*(1-L.dock),Q&&(Zt.x*=.72);let ft=n.worldToLocal(tt.clone());gt.copy(Zt).add(new D(-.4,.2,0)),Et.copy(ft).add(new D(.25,.72,1.1));let Nt=L.dock,dt=1-Nt;O.board.position.copy(Zt).multiplyScalar(dt**3).addScaledVector(gt,3*dt*dt*Nt).addScaledVector(Et,3*dt*Nt*Nt).addScaledVector(ft,Nt**3),b.set(.035,L.yaw,L.roll),I.setFromEuler(b);let At=n.quaternion.clone().invert().multiply(It);O.board.quaternion.copy(I).slerp(At,Nt),O.board.scale.setScalar(L.scale+(1-L.scale)*Nt);let bt=1-Qn(.76,1,Nt);O.frame.material.transparent=!0,O.frame.material.opacity=bt,O.inset.visible=bt>.01,O.tab.visible=bt>.2});let it=k.dock>.998?k.index:Math.max(0,k.index-1);return zt[it].texture&&(ut!==it||N.material.map!==zt[it].texture)&&(N.material=zt[it].faceMat,ut=it),k.index===0&&k.dock<=.998&&(N.material=W,ut=-1),N.visible=!0,Rt.opacity=.12+k.pulse*.7,l.dataset.rendered="true",c.dataset.docking=k.dock.toFixed(3),k}return{group:n,update:Ut,dispose(){yt=!0,mt.disconnect(),s.remove(n),n.traverse(ht=>{ht.isInstancedMesh&&ht.dispose()}),i.forEach(ht=>ht.dispose()),r.forEach(ht=>ht.dispose()),o.forEach(ht=>ht.dispose())}}}var Yl=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0));function gy(s,t=6){let e=Yl(s),n=Math.max(1,Math.floor(t)||1),i=Math.min(n-1,Math.floor(e*n)),r=e===1?1:e*n-i;return{index:i,local:r,beat:r<.26?0:r<.53?1:2,builds:[-.1,.26,.53].map(o=>{let a=Yl((r-o)/.18);return a*a*(3-2*a)})}}var Pn=(s,t,e)=>{let n=Yl((e-s)/(t-s));return n*n*n*(n*(n*6-15)+10)};function wd(s){let t=gy(s),e=t.local,n=t.index<5?Pn(.84,1,e):0,i=t.index+n,r=Pn(.04,.76,e);return{...t,travel:n,focus:i,x:i*14,yaw:(.44-r*.68)*(1-n)+.44*n,zoom:(1-Pn(.1,.51,e)*.17)*(1-n)+n,assemble:Pn(.025,.43,e),connect:Pn(.25,.69,e),resolve:Pn(.52,.78,e),copyOpacity:Pn(0,.07,e)*(1-Pn(.84,.98,e))}}function Td({scene:s,software:t=!1,quality:e="medium"}){let n=new Jt;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=new Set,a=[],c=t||e==="low",l=document.querySelector(".solutions-world"),h=W=>(i.add(W),W),u=(W,U=!1)=>{let B=U?new Re(W):new xe({roughness:.37,metalness:.68,...W});return r.add(B),B},d=u({color:"#454b40"}),f=u({color:"#b6a382",roughness:.28,metalness:.8}),_=u({color:"#171e18",roughness:.6}),g=u({color:"#d1742b",roughness:.3,metalness:.75}),m=u({color:"#ffa04a",toneMapped:!1},!0),p=u({color:"#b98245",toneMapped:!1,transparent:!0,opacity:.25},!0),S=h(c?new pe(1,1,1):new ke(1,1,1,2,.045)),v=h(new Te(1,1,c?2:8,c?2:5)),y=h(new Rn(1,c?10:18,c?7:12)),T=h(new Jn(1,.012,c?3:5,c?32:64)),E=new le;function w(W,U,B,Y,N){let et=new Lt(S,Y);return et.scale.set(W,U,B),N.add(et),et}function R(W,U,B=p){let Y=new Lt(T,B);return Y.scale.setScalar(W),U.add(Y),Y}function M(W,U,B,Y,N,et,lt,Rt){E.position.set(B,Y,N),E.scale.set(et,lt,Rt),E.rotation.set(0,0,0),E.updateMatrix(),W.setMatrixAt(U,E.matrix)}function x(W,U,B,Y,N,et,lt){W.fillStyle=lt,W.beginPath(),W.roundRect(U,B,Y,N,et),W.fill()}function P(W,U,B,Y,N=18,et="#e6e0d0",lt=!1){W.fillStyle=et,W.font=`${lt?700:400} ${N}px Arial`,W.fillText(U,B,Y)}function H(W,U,B,Y,N="#464b3f"){W.fillStyle=N,W.fillRect(U,B,Y,1)}function z(W,U,B=""){let Y=document.createElement("canvas");Y.width=W==="main"?1024:640,Y.height=W==="main"?640:380;let N=Y.getContext("2d"),et=Y.width,lt=Y.height;if(x(N,0,0,et,lt,16,"#162019"),N.strokeStyle="#77674c",N.lineWidth=2,N.strokeRect(1,1,et-2,lt-2),W==="main"){x(N,0,0,et,53,12,"#293025"),[0,1,2].forEach(Mt=>{N.fillStyle=Mt?"#766b56":"#ef984b",N.beginPath(),N.arc(29+Mt*19,27,4,0,7),N.fill()}),x(N,350,17,320,22,5,"#151e17"),P(N,"seunegocio.com.br",440,33,12,"#aea891"),P(N,"seu.neg\xF3cio",55,108,28,"#f1ebdc",!0),P(N,"UM PR\xD3XIMO PASSO.",56,163,12,"#e79b58"),P(N,"Uma boa ideia",55,231,48,"#f3eddf",!0),P(N,"ganha presen\xE7a.",55,287,48,"#ed9b52",!0),P(N,"Clareza para entender. Um caminho para agir.",57,335,18,"#a9b19f"),x(N,55,370,235,48,7,"#de883d"),P(N,"Vamos conversar  \u2197",81,401,18,"#152018",!0);let Ct=N.createLinearGradient(660,150,850,440);Ct.addColorStop(0,"#d4914b"),Ct.addColorStop(1,"#694324"),N.fillStyle=Ct,N.beginPath(),N.arc(789,282,125,0,7),N.fill(),N.strokeStyle="#f2c99b",N.lineWidth=2,N.beginPath(),N.ellipse(789,282,145,39,-.45,0,7),N.stroke();for(let Mt=0;Mt<3;Mt++)x(N,55+Mt*310,481,285,110,8,"#263027"),P(N,["Seu neg\xF3cio","Sua hist\xF3ria","Seu pr\xF3ximo passo"][Mt],75+Mt*310,520,18,"#e5deca",!0),H(N,75+Mt*310,545,185,"#7c785e"),H(N,75+Mt*310,561,140,"#535d4b")}else if(W==="dashboard"){x(N,0,0,et,lt,12,"#e8e2d4"),x(N,0,0,125,lt,12,"#1d291f"),P(N,"opera\xE7\xE3o",18,40,21,"#f0e8d5",!0),["Vis\xE3o geral","Clientes","Pedidos","Relat\xF3rios"].forEach((Ct,Mt)=>{Mt||x(N,11,72,103,30,4,"#d58a43"),P(N,Ct,23,93+Mt*53,13,Mt?"#aab29d":"#122015",!Mt)}),P(N,"A rotina, conectada.",151,44,25,"#202b20",!0),["CLIENTES","PEDIDOS","EQUIPE"].forEach((Ct,Mt)=>{x(N,150+Mt*158,68,145,68,6,"#d6d4c3"),P(N,Ct,164+Mt*158,91,10,"#75745e"),P(N,["Organizados","Em dia","No mesmo fluxo"][Mt],164+Mt*158,117,14,"#293226",!0)}),P(N,"PEDIDOS EM ANDAMENTO",153,170,11,"#686b55");for(let Ct=0;Ct<4;Ct++){let Mt=204+Ct*43;P(N,["Pedido recebido","Dados conferidos","Em prepara\xE7\xE3o","Pronto para seguir"][Ct],153,Mt,15,"#343c2e"),x(N,486,Mt-17,121,24,4,Ct===3?"#c99155":"#d8d5c6"),P(N,["Recebido","Conferido","Em andamento","Conclu\xEDdo"][Ct],498,Mt,10,"#5c492f"),H(N,153,Mt+14,454,"#c8c6b5")}}else P(N,"dev.abraao / SOLU\xC7\xD5ES",34,42,11,"#b6a480"),H(N,34,63,et-68,"#605c46"),P(N,U,34,128,W==="module"?U.length>18?35:52:U.length>24?24:30,"#f1e7d2",!0),P(N,B,34,169,16,"#a8b19c"),W==="code"?["quando uma mensagem chegar","  \u2192 conferir os dados","  \u2192 registrar o pedido","  \u2192 enviar a confirma\xE7\xE3o"].forEach((Ct,Mt)=>P(N,Ct,35,218+Mt*30,16,Mt===3?"#f0a05a":"#a7b99d")):W==="answer"?(x(N,32,200,et-64,128,7,"#29392a"),P(N,"PR\xD3XIMO PASSO",49,229,11,"#e5a15e"),P(N,"Organizar a informa\xE7\xE3o.",49,267,23,"#f0e6ce",!0),P(N,"A decis\xE3o continua com voc\xEA.",49,300,15,"#acb89b")):W==="module"?[0,1,2].forEach(Ct=>{x(N,33,204+Ct*43,et-66,31,5,Ct===2?"#b97936":"#304330"),P(N,["CONTEXTO","FLUXO","PRONTO PARA SEGUIR"][Ct],49,225+Ct*43,12,Ct===2?"#fff1d3":"#bfc6ae")}):(x(N,33,207,et-66,89,7,"#283a2b"),P(N,"Informa\xE7\xE3o conectada",50,243,20,"#dcdcc4",!0),P(N,"Tudo segue no mesmo caminho.",50,274,15,"#a6b79b"),N.fillStyle="#e99546",N.fillRect(34,lt-29,et-68,3));let Rt=new Ne(Y);return Rt.colorSpace=be,Rt.anisotropy=c?1:4,o.add(Rt),Rt}function q(W,U,B,Y,N,et){let lt=new Jt;et.add(lt);let Rt=w(W+.1,U+.1,.1,f,lt);Rt.renderOrder=5;let Ct=w(W+.045,U+.045,.04,_,lt);Ct.position.z=.065,Ct.renderOrder=6;let Mt=u({color:"#ffffff",map:z(B,Y,N),toneMapped:!1},!0),Bt=new Lt(v,Mt);Bt.scale.set(W,U,1),Bt.position.z=.092,Bt.renderOrder=8,lt.add(Bt);let G=w(.45,.025,.035,m,lt);return G.position.set(-W/2+.36,U/2+.07,.03),G.renderOrder=9,lt}function Z(W,U,B,Y=2.12){return q(Y,Y*.59375,"module",W,U,B)}function F(W,U,B,Y=.6){let N=new D(...W),et=new D(...U),lt=N.clone().lerp(et,.5);lt.z+=Y,lt.y+=.24;let Rt=new rr(N,lt,et),Ct=new Lt(h(new Gn(Rt,c?12:24,.018,c?3:5,!1)),g);Ct.renderOrder=2,B.add(Ct);let Mt=new Lt(y,m);return Mt.scale.setScalar(.065),B.add(Mt),{mesh:Ct,path:Rt,packet:Mt}}function rt(W){let U=new Jt;U.position.x=W*14,n.add(U);let B=w(9,.07,5,_,U);B.position.set(0,-1.75,-.1),B.renderOrder=-10,w(8.3,.012,.035,p,U).position.set(0,-1.7,2.2);let N=R(2.9,U,p);N.rotation.x=-Math.PI/2,N.position.y=-1.69,N.renderOrder=-5;let et=new ue(S,f,c?12:24);U.add(et);for(let Rt=0;Rt<et.count;Rt++){let Ct=Rt/et.count*Math.PI*2;M(et,Rt,Math.cos(Ct)*3.02,-1.69,Math.sin(Ct)*2.1,.035,.018,.1)}let lt={g:U,items:[],wires:[],rings:[N]};return a.push(lt),lt}function X(W,U,B,Y,N,et=0,lt=0,Rt=0){return U.userData.pose={x:B,y:Y,z:N,order:et,rx:lt,ry:Rt},W.items.push(U),U}{let W=rt(0),U=q(5.55,3.47,"main","","",W.g);X(W,U,-.35,.15,-.35,0,0,.08);let B=q(1.05,2.1,"module","Seu neg\xF3cio","Feito para conectar.",W.g);X(W,B,2.35,-.56,1.1,2,-.03,-.18);let Y=Z("PRESEN\xC7A","Um caminho claro para o cliente.",W.g,2.25);X(W,Y,-2.2,1.58,.95,1,.02,.13);let N=F([1.5,-1.5,.1],[2.35,-.7,1],W.g,.2);W.wires.push(N)}{let W=rt(1),U=q(5.65,3.36,"dashboard","","",W.g);X(W,U,0,.2,-.2,0,0,-.08);let B=Z("PEDIDO ORGANIZADO","Do atendimento \xE0 opera\xE7\xE3o.",W.g,2.5);X(W,B,-1.95,-.63,1.25,1,.05,.15);let Y=Z("EQUIPE CONECTADA","A mesma informa\xE7\xE3o para todos.",W.g,2.35);X(W,Y,2.2,1.28,.65,2,-.02,-.15),W.wires.push(F([-2,-.9,1.1],[1.3,-1.1,.15],W.g,.35))}{let W=rt(2),U=[[-2.35,.85,-.35],[-.6,1.15,-.85],[1.6,.55,-.25],[2.15,-1,1.15]];["MENSAGEM","CONFERIR","REGISTRAR","CONFIRMAR"].forEach((Y,N)=>{let et=Z(Y,["O cliente inicia.","O contexto \xE9 verificado.","O pedido encontra seu lugar.","A resposta chega ao cliente."][N],W.g,1.85);X(W,et,...U[N],N,.02,(N-1.5)*-.09),N&&W.wires.push(F(U[N-1],U[N],W.g,.7))});let B=q(2.75,1.64,"code","UMA REGRA. UM CAMINHO.","O trabalho segue entre as etapas.",W.g);X(W,B,-1.5,-.95,1.3,2,.03,.18)}{let W=rt(3),U=new Lt(h(new _i(.68,c?0:1)),g);W.g.add(U),X(W,U,0,.15,.1,0);for(let N=0;N<3;N++){let et=R(1.05+N*.22,W.g,N===1?m:p);et.rotation.set(.4+N*.8,.5+N*.6,.1),W.rings.push(et)}let B=[[-2.1,.9,-.15],[1.8,1.22,-.65],[-2.05,-.95,.85]];["DOCUMENTOS","HIST\xD3RICO","SEU PROCESSO"].forEach((N,et)=>{let lt=Z(N,"Informa\xE7\xE3o com o contexto certo.",W.g,1.75);X(W,lt,...B[et],et,.02,et===1?-.15:.16),W.wires.push(F(B[et],[0,.15,.1],W.g,.5))});let Y=q(2.85,1.69,"answer","INFORMA\xC7\xC3O QUE AJUDA A AGIR","Uma resposta nasce do contexto.",W.g);X(W,Y,1.65,-.85,1.1,3,0,-.14)}{let W=rt(4),U=new Jt;W.g.add(U),X(W,U,0,0,.1,0),w(1.2,1.75,.65,d,U),w(1.29,1.84,.12,f,U).position.z=-.27,Z("CONECTAR","A informa\xE7\xE3o continua.",U,1.6).position.set(0,0,.43);for(let et=0;et<5;et++)w(.045,.13,.03,m,U).position.set(-.43+et*.215,-1.02,.36);let Y=[[-2.5,1,-.65],[.15,1.8,-.85],[2.6,.95,-.45],[-2.5,-.9,.9],[.15,-1.45,1.2],[2.55,-.85,1]];["ATENDIMENTO","CLIENTES","VENDAS","FINANCEIRO","PEDIDOS","ESTOQUE"].forEach((et,lt)=>{let Rt=Z(et,"Dados no mesmo fluxo.",W.g,1.62);X(W,Rt,...Y[lt],1+lt*.2,0,(lt%3-1)*-.16),W.wires.push(F([0,.05,.28],Y[lt],W.g,.7))});let N=R(2.25,W.g,p);N.rotation.x=1.1,N.position.set(0,-.1,0),W.rings.push(N)}{let W=rt(5);w(5.6,3.5,.1,d,W.g).position.set(0,.15,-.55);let B=[[-1.73,.64,0],[.2,.64,.1],[2.02,.64,.05],[-1.35,-.83,.55],[1.25,-.83,.65]];["ATENDIMENTO","OPERA\xC7\xC3O","AUTOMA\xC7\xC3O","INFORMA\xC7\xC3O","EVOLU\xC7\xC3O"].forEach((N,et)=>{let lt=et<3?1.65:2.35,Rt=Z(N,"Constru\xEDdo para o seu cen\xE1rio.",W.g,lt);X(W,Rt,...B[et],et*.6,0,(et-2)*.025)});let Y=Z("SEU NEG\xD3CIO","Cada parte tem um motivo.",W.g,2.3);X(W,Y,.75,1.7,1.05,3,-.04,-.13);for(let N=0;N<4;N++)W.wires.push(F(B[N],B[N+1],W.g,.15))}let xt=new ue(y,p,c?18:40);n.add(xt);let nt=new D,pt=0;n.traverse(W=>{W.isMesh&&pt++}),l.dataset.cinemaMeshes=pt,a.forEach(W=>W.rings.forEach(U=>U.userData.rest=U.rotation.toArray().slice(0,3)));function Tt(W,U,B){let Y=wd(W),N=innerWidth<=700,et=B.aspect,lt=new D(Y.x,.1,.05),Ct=Math.max(6.25,(N?8.5:8.1)/et)*(1-(1-Y.zoom)*.7)/(2*Math.tan(Oe.degToRad(B.fov/2))),Mt=Y.yaw*(N?.7:1);B.position.set(Math.sin(Mt)*Ct,1.25+Ct*.12,Math.cos(Mt)*Ct).add(lt),B.lookAt(lt),B.updateProjectionMatrix(),a.forEach((Bt,G)=>{if(Bt.g.visible=Math.abs(G-Y.focus)<1.06,!Bt.g.visible)return;let Kt=G===Y.index?Y.local:G>Y.index?0:1,Vt=Pn(.025,.43,Kt),zt=Pn(.25,.69,Kt);Bt.items.forEach((Pt,Zt)=>{let It=Pt.userData.pose,I=Pn(.02+It.order*.045,.43+It.order*.045,Kt),b=1-I;Pt.position.set(It.x+b*(Zt%2?2.3:-2.3),It.y+b*(1.45+It.order*.2),It.z-b*(2.6+It.order*.3)),Pt.rotation.set(It.rx+b*.18,It.ry+b*(Zt%2?.5:-.5),b*(Zt%2?.09:-.09)),Pt.scale.setScalar(.76+I*.24),G===3&&Zt===0&&(Pt.rotation.y=U*12e-5,Pt.rotation.z=U*8e-5)}),Bt.wires.forEach((Pt,Zt)=>{Pt.mesh.scale.setScalar(Math.max(.001,zt)),Pt.mesh.visible=zt>.02,Pt.packet.visible=zt>.7,Pt.path.getPoint((U*18e-5+Zt*.17)%1,nt),Pt.packet.position.copy(nt),Pt.packet.scale.setScalar(.045+Y.resolve*.025)}),Bt.rings.forEach((Pt,Zt)=>{if(Zt){let It=Pt.userData.rest;Pt.rotation.set(It[0],It[1]+U*4e-5,It[2]+U*6e-5)}})});for(let Bt=0;Bt<xt.count;Bt++){let G=Y.x+Math.sin(Bt*23.4)*5.5,Kt=Math.sin(Bt*5.1+U*1e-4)*2.4,Vt=Math.cos(Bt*6.8)*3.8-1;M(xt,Bt,G,Kt,Vt,.012,.012,.012)}return xt.instanceMatrix.needsUpdate=!0,l.dataset.rendered="true",l.dataset.cameraShot=Y.index,l.dataset.cameraTravel=Y.travel.toFixed(3),Y}return{group:n,update:Tt,dispose(){s.remove(n),n.traverse(W=>{W.isInstancedMesh&&W.dispose()}),i.forEach(W=>W.dispose()),r.forEach(W=>W.dispose()),o.forEach(W=>W.dispose())}}}var Ad=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0)),Zl=s=>{let t=Ad(s);return t*t*(3-2*t)};function Rd(s,t=0){let e=Ad(s),n=Math.max(0,Number.isFinite(t)?t:0)*.001;return{p:e,t:n,open:Zl(e/.42),plan:Zl((e-.18)/.65),finish:Zl((e-.68)/.3),yaw:-.24+.6*Math.sin(e*Math.PI*.85),lift:Math.sin(n*.65)*.045,flow:n*.16%1,phase:Math.min(2,Math.floor(e*3))}}var _y=s=>{let t=Math.max(0,Math.min(1,s));return t*t*(3-2*t)};function Cd({scene:s,software:t=!1,quality:e="medium"}){let n=new Jt;n.visible=!1,s.add(n);let i=document.querySelector(".contact-world"),r=t||e==="low",o=new Set,a=new Set,c=new Set,l=$=>(o.add($),$),h=($,k=!1)=>{let Q=k?new Re($):new xe({roughness:.3,metalness:.62,...$});return a.add(Q),Q},u=h({color:"#282c31",roughness:.33,metalness:.72}),d=h({color:"#0c1414"}),f=h({color:"#cf833c",roughness:.23,metalness:.8}),_=h({color:"#d6dce3",roughness:.22,metalness:.84}),g=_,m=h({color:"#8a96a8",metalness:.72,roughness:.28}),p=h({color:"#ffd297",toneMapped:!1},!0),S=h({color:"#e4e7ee",toneMapped:!1},!0),v=h({color:"#c6a9ff",toneMapped:!1},!0),y=h({color:"#a3e2eb",toneMapped:!1},!0),T=h({color:"#b38ff0",transparent:!0,opacity:.3,depthWrite:!1,toneMapped:!1},!0),E=l(r?new pe(1,1,1):new ke(1,1,1,3,.065)),w=l(new Te(1,1,r?2:6,r?3:8)),R=l(new _i(1,r?0:1)),M=l(new Jn(1,.012,r?3:5,r?36:80)),x=new le,P=new D,H=new D(0,1,0);function z($,k,Q,A,it,O=0,j=0,L=0,V=0){let ft=new Lt(E,A);return ft.scale.set($,k,Q),ft.position.set(O,j,L),ft.renderOrder=V,it.add(ft),ft}function q($,k,Q,A,it,O,j){$.fillStyle=j,$.beginPath(),$.roundRect(k,Q,A,it,O),$.fill()}function Z($,k,Q,A,it=22,O="#e3d9c4",j=!1){$.font=`${j?700:400} ${it}px Arial`,$.fillStyle=O,$.fillText(k,Q,A)}function F($,k=0){let Q=document.createElement("canvas");Q.width=$==="phone"?512:640,Q.height=$==="phone"?1024:350;let A=Q.getContext("2d"),it=Q.width,O=Q.height;if(q(A,0,0,it,O,$==="phone"?34:12,"#1b211b"),$==="phone")q(A,0,0,it,172,32,"#252f25"),A.fillStyle="#f19343",A.beginPath(),A.arc(65,102,28,0,7),A.fill(),Z(A,"a.",48,113,29,"#241a0d",!0),Z(A,"dev.abraao",110,99,30,"#f3e6cc",!0),Z(A,"CONVERSA INICIAL",112,130,13,"#aaa58b"),Z(A,"O pr\xF3ximo passo come\xE7a aqui.",29,214,18,"#b6b69a"),q(A,25,255,385,176,18,"#333c2d"),["Quero melhorar","a rotina do meu","neg\xF3cio."].forEach((L,V)=>Z(A,L,48,305+V*45,30,"#eee4cd")),q(A,89,471,396,179,18,"#ce823a"),["Me conta onde","o processo est\xE1","travando."].forEach((L,V)=>Z(A,L,112,522+V*45,30,"#201d11",!0)),q(A,25,691,385,133,18,"#333c2d"),["Vamos encontrar","um caminho."].forEach((L,V)=>Z(A,L,48,741+V*44,30,"#eee4cd")),q(A,23,905,466,70,30,"#30392a"),Z(A,"Conte seu desafio...",47,948,21,"#9eaa8d"),A.fillStyle="#dc9449",A.beginPath(),A.arc(454,940,24,0,7),A.fill(),Z(A,"\u2197",441,950,29,"#201f12",!0);else{let L=["ENTENDER","DEFINIR","CONSTRUIR"],V=["Seu contexto. Sua rotina.","Um caminho que fa\xE7a sentido.","Uma solu\xE7\xE3o com prop\xF3sito."];Z(A,`0${k+1} / DO CONTEXTO \xC0 A\xC7\xC3O`,30,43,14,"#c69664"),A.fillStyle="#6b6952",A.fillRect(30,66,it-60,1),Z(A,L[k],30,128,47,"#f1e3c8",!0),Z(A,V[k],31,175,23,"#acb497");for(let ft=0;ft<3;ft++)q(A,30,213+ft*34,(it-60)*[.94,.74,.5][ft],11,3,ft===2?"#b47b3c":"#46553a");A.fillStyle="#dd9a53",A.fillRect(it-44,104,9,55)}let j=new Ne(Q);return j.colorSpace=be,j.anisotropy=r?1:4,c.add(j),j}function rt($,k,Q,A,it,O=8){let j=new Lt(w,h({map:Q,color:"#fff",toneMapped:!1},!0));return j.scale.set($,k,1),j.position.z=it,j.renderOrder=O,A.add(j),j}let X=new Jt;n.add(X);let xt=z(1.89,3.79,.22,f,X,0,0,-.055,3),nt=z(1.83,3.73,.25,u,X,0,0,0,4),pt=z(1.72,3.58,.025,d,X,0,0,.136,6),Tt=F("phone");z(.57,.083,.018,d,X,0,1.61,.171,9),z(.38,.018,.025,_,X,0,1.605,.186,10),z(.4,.032,.02,S,X,0,-1.69,.179,9),z(.045,.44,.09,f,X,.963,.5,-.01,3),z(.04,.22,.09,_,X,-.963,.68,-.01,3),z(.04,.36,.09,_,X,-.963,.18,-.01,3);let W=[];for(let $=0;$<3;$++){let k=new Lt(R,p);k.scale.setScalar(.025),k.position.set(-.54+$*.09,-1.19,.178),k.renderOrder=10,X.add(k),W.push(k)}let U=new Jt;X.add(U);let B=z(1.48,3.07,.1,d,U,0,0,-.03,2),Y=z(1.17,1.54,.17,m,U,0,-.47,.06,3);for(let $=0;$<6;$++)z(.017,1.35,.015,$%2?f:g,U,-.46+$*.185,-.47,.155,4);let N=z(.7,.67,.16,u,U,.07,.78,.07,3);for(let $=0;$<4;$++)z(.07,.08,.12,g,U,-.48+$*.31,1.32,.06,3);let et=new ue(E,f,r?60:100);U.add(et);for(let $=0;$<et.count;$++){let k=Math.floor($/(et.count/4)),Q=$%(et.count/4)/(et.count/4);x.position.set(k<2?k?-.42:.56:-.37+Q*.88,k<2?.44+Q*.68:k===2?.4:1.15,.14),x.scale.set(.035,.065,.045),x.rotation.set(0,0,k<2?Math.PI/2:0),x.updateMatrix(),et.setMatrixAt($,x.matrix)}let lt=new Jt;U.add(lt),lt.position.set(0,.65,.28);let Rt=new Lt(l(new jo(.26,.085,r?40:88,r?5:9,2,3)),g);lt.add(Rt);let Ct=new Lt(l(new _i(.19,r?0:2)),v);lt.add(Ct);let Mt=[];for(let $=0;$<3;$++){let k=new Lt(M,$===1?y:p);k.scale.setScalar(.42+$*.085),k.rotation.set($*.7,.5+$*.6,0),lt.add(k),Mt.push(k)}let Bt=new Jt;X.add(Bt),Bt.position.set(-.48,1.18,-.2);for(let $=0;$<3;$++){let k=new Jt;k.position.set($===1?.45:0,$===2?-.46:0,0),Bt.add(k);let Q=new Lt(l(new or(.18,.2,.1,r?12:32)),u);Q.rotation.x=Math.PI/2,k.add(Q);let A=new Lt(M,g);A.scale.setScalar(.155),A.position.z=-.07,k.add(A);let it=new Lt(l(new Rn(.12,r?8:20,r?6:12)),m);it.scale.z=.35,it.position.z=-.09,k.add(it)}let G=r?6:8,Kt=r?12:16,Vt=[],zt=h({map:Tt,color:"#fff",toneMapped:!1},!0),Pt=new ue(E,u,G*Kt);Pt.frustumCulled=!1,Pt.instanceMatrix.setUsage(on),X.add(Pt),Pt.renderOrder=7;for(let $=0;$<Kt;$++)for(let k=0;k<G;k++){let Q=1.62/G,A=3.39/Kt,it=l(new Te(Q*.992,A*.992)),O=it.attributes.uv;for(let L=0;L<O.count;L++)O.setXY(L,(k+O.getX(L))/G,1-($+1-O.getY(L))/Kt);let j=new Lt(it,zt);j.renderOrder=8,X.add(j),Vt.push({mesh:j,x:(k+.5-G/2)*Q,y:(Kt/2-$-.5)*A,w:Q,h:A,row:$,col:k})}let Zt=new Jt;n.add(Zt);let It=[];for(let $=0;$<(r?22:36);$++){let k=new Jt;Zt.add(k);let Q=.66+$%6*.105;z(.13,Q,.055,$%3===0?f:g,k,0,Q*.28,0,1),z(.023,Q*.85,.018,$%4===0?v:m,k,0,Q*.26,.04,2),z(.046,.047,.028,p,k,0,-Q*.18,.043,3),It.push({g:k,length:Q})}let I=[],b=r?48:96,tt=r?3:6;for(let $=0;$<4;$++){let k=[];for(let O=0;O<=48;O++){let j=O/48,L=j*Math.PI*2*(1.15+$*.04)+$*Math.PI/3,V=1.4+.12*Math.sin(j*Math.PI*2+$);k.push(new D(Math.cos(L)*V,(j-.5)*4.75,Math.sin(L)*V*.72))}let Q=new gi(k),A=l(new Gn(Q,b,.012+$%2*.005,tt,!1)),it=new Lt(A,$%3===0?y:$%3===1?p:T);n.add(it),it.renderOrder=-1,I.push({curve:Q,mesh:it})}let gt=new ue(R,p,r?36:72);gt.frustumCulled=!1,gt.instanceMatrix.setUsage(on),n.add(gt);let Et=new ue(E,g,r?44:92);Et.frustumCulled=!1,Et.instanceMatrix.setUsage(on),n.add(Et);let ut=document.createElement("canvas");ut.width=ut.height=128;let yt=ut.getContext("2d"),vt=yt.createRadialGradient(64,64,0,64,64,64);vt.addColorStop(0,"#b9b9ff38"),vt.addColorStop(.25,"#b7865422"),vt.addColorStop(1,"#b7865400"),yt.fillStyle=vt,yt.fillRect(0,0,128,128);let St=new Ne(ut);c.add(St);let Ft=new Lt(l(new Te(7,7)),h({map:St,color:"#fff",transparent:!0,opacity:.7,depthWrite:!1,toneMapped:!1},!0));if(Ft.renderOrder=-30,n.add(Ft),!t){let $=new ps("#e0d2ff",13,12);$.position.set(-2,3,4),n.add($);let k=new ps("#a7e6f0",9,12);k.position.set(3,-1,-2),n.add(k)}U.traverse($=>{$.isMesh&&($.renderOrder=5)});let st=new D,mt=new D;function Ut($,k,Q,A,it,O,j=0,L=0,V=0){x.position.copy(Q),x.rotation.set(j,L,V),x.scale.set(A,it,O),x.updateMatrix(),$.setMatrixAt(k,x.matrix)}function ht($,k,Q,A={}){let it=Rd($,k),{t:O,p:j}=it,L=A.mobile??Q.aspect<1.2,V=Math.sin(Math.PI*_y((j-.03)/.94))**2,ft=-.16-.38*Math.sin(j*Math.PI)+.12*Math.sin(j*Math.PI*2);X.position.set(-.08+Math.sin(O*.33)*.035,.06+it.lift,.1),X.rotation.set(.06+V*.1,ft+Math.sin(O*.23)*.028,-.11+.17*V),nt.position.z=-V*.38,xt.position.z=-.055-V*.38,pt.visible=V<.025,U.position.z=.07+V*.22,B.position.z=-.12-V*.2,Y.position.z=.05+V*.08,N.position.z=.12+V*.2,lt.rotation.set(O*.12,O*.32,-O*.13),lt.scale.setScalar(.82+V*.9),Rt.rotation.z=-O*.4,Ct.scale.setScalar(.92+Math.sin(O*1.4)*.08),Mt.forEach((bt,kt)=>{bt.rotation.set(.4+kt*.65+O*(kt%2?.25:-.22),kt*.52+O*.15,O*(kt%2?-.24:.17))}),Vt.forEach((bt,kt)=>{let jt=(bt.col+.5)/G,Gt=(bt.row+.5)/Kt,at=(jt-.5)*1.16,wt=Math.sin(at)*1.95+.28*Math.sin(Gt*Math.PI),se=bt.y+.12*Math.sin(Gt*Math.PI*2+O*.55),re=.17+V*(1.17+.38*Math.cos(at)+.15*Math.sin(Gt*Math.PI*2+O*.5));bt.mesh.position.set(bt.x+(wt-bt.x)*V,bt.y+(se-bt.y)*V,re),bt.mesh.rotation.set(Math.cos(Gt*Math.PI*2+O*.5)*V*.1,-at*V*.75,Math.sin(Gt*Math.PI)*V*.035),bt.mesh.updateMatrix(),x.position.copy(bt.mesh.position),x.quaternion.copy(bt.mesh.quaternion),x.position.addScaledVector(P.set(0,0,-1).applyQuaternion(bt.mesh.quaternion),.025),x.scale.set(bt.w*(.99-.04*V),bt.h*(.99-.04*V),.035),x.updateMatrix(),Pt.setMatrixAt(kt,x.matrix)}),Pt.instanceMatrix.needsUpdate=!0,W.forEach((bt,kt)=>{bt.visible=V<.18,bt.scale.setScalar(.018+(.5+.5*Math.sin(O*3.1-kt*.9))*.015)}),Zt.rotation.set(.08,ft*.55+Math.sin(O*.19)*.05,0),It.forEach((bt,kt)=>{let jt=kt%2?1:-1,Gt=Math.floor(kt/2),at=It.length/2,wt=Gt/(at-1),se=-1.25+wt*2.5,re=1.05+V*(.4+.14*Math.sin(wt*Math.PI));bt.g.position.set(jt*(.65+Math.cos(se)*re),Math.sin(se)*2.12+Math.sin(O*.5+kt)*.035,-.55-Math.sin(wt*Math.PI)*.58+V*.32),bt.g.rotation.set(.2*Math.sin(O*.3+kt),jt*(.3+V*.42),jt*(-se*.45+.4+Math.sin(O*.35+kt)*.05)),bt.g.scale.setScalar(.68+V*.36)}),I.forEach((bt,kt)=>{bt.mesh.rotation.y=O*(kt%2?.07:-.055)+ft*.15,bt.mesh.scale.set(1+V*.35,1+V*.08,1+V*.2)});let Nt=gt.count/I.length;for(let bt=0;bt<gt.count;bt++){let kt=Math.floor(bt/Nt),jt=bt%Nt,Gt=I[kt],at=(O*(.12+kt*.007)+kt*.14-jt*.016+1)%1;Gt.curve.getPoint(at,P),P.multiply(Gt.mesh.scale).applyAxisAngle(H,Gt.mesh.rotation.y);let wt=jt===0?.062:Math.max(.01,.034-jt*.002);Ut(gt,bt,P,wt,wt,wt)}gt.instanceMatrix.needsUpdate=!0;for(let bt=0;bt<Et.count;bt++){let kt=bt*2.39996+O*(bt%2?.045:-.038),jt=1.28+bt%9*.1+V*.66;P.set(Math.cos(kt)*jt,Math.sin(bt*2.3+O*.27)*2.24,Math.sin(kt)*jt*.65-.25);let Gt=.028+bt%4*.008;Ut(Et,bt,P,Gt,Gt*(1.5+bt%3*.7),Gt*.35,O*.1+bt,O*.16+bt,O*.11)}Et.instanceMatrix.needsUpdate=!0,st.set(0,.02+V*.12,.1);let At=Math.max(L?5.8:6.45,(L?8:8.2)/Q.aspect)*(1.04-V*.15)/(2*Math.tan(Oe.degToRad(Q.fov/2)));return mt.set(.1+V*.14,.17+V*.25,1).normalize(),Q.position.copy(mt).multiplyScalar(At).add(st),Q.lookAt(st),Q.updateProjectionMatrix(),Q.updateMatrixWorld(!0),Ft.position.set(0,.18,-1.7),Ft.quaternion.copy(Q.quaternion),Ft.scale.setScalar(.9+V*.2+Math.sin(O*.4)*.035),i.dataset.rendered="true",i.dataset.filmProgress=j.toFixed(4),i.dataset.motionTime=O.toFixed(2),i.dataset.packetPhase=it.flow.toFixed(4),i.dataset.cameraYaw=ft.toFixed(4),i.dataset.explosion=V.toFixed(4),it}let _t=0;return n.traverse($=>{$.isMesh&&_t++}),i.dataset.contactMeshes=_t,{group:n,update:ht,dispose(){s.remove(n),n.traverse($=>{$.isInstancedMesh&&$.dispose()}),o.forEach($=>$.dispose()),a.forEach($=>$.dispose()),c.forEach($=>$.dispose())}}}var Pd=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0)),ms=s=>{let t=Pd(s);return t*t*(3-2*t)},$r=(s,t,e)=>ms((s-t)/(e-t));function Id(s,t=0){let e=Pd(s),n=Math.max(0,Number.isFinite(t)?t:0)*.001,i=[[-.55,.22,1.06],[-.18,.65,.94],[.24,.28,.89],[.53,.48,1.02],[.6,.45,1.03]],r=Math.min(3,Math.floor(e*4)),o=e===1?1:e*4-r,a=ms(o),c=i[r].map((l,h)=>l+(i[r+1][h]-l)*a);return{p:e,t:n,index:r,local:o,organize:$r(e,.08,.38),connect:$r(e,.28,.59),operate:$r(e,.49,.73),evolve:$r(e,.7,.94),yaw:c[0],elevation:c[1],zoom:c[2],pulse:n*.17%1,drift:Math.sin(n*.5)*.045,copyOpacity:1-.75*$r(o,.9,1)*(r<3?1:0)}}function Dd({scene:s,software:t=!1,quality:e="medium"}){let n=new Jt;n.visible=!1,s.add(n);let i=document.querySelector(".result-world"),r=t||e==="low",o=new Set,a=new Set,c=new Set,l=L=>(o.add(L),L),h=(L,V=!1)=>{let ft=V?new Re(L):new xe({roughness:.35,metalness:.62,...L});return a.add(ft),ft},u=h({color:"#2a3e37"}),d=h({color:"#819a82",metalness:.8}),f=h({color:"#101e1b"}),_=h({color:"#d08843",roughness:.25,metalness:.72}),g=h({color:"#ffc27a",toneMapped:!1},!0),m=h({color:"#a4cbb3",toneMapped:!1},!0),p=h({color:"#d38f4d",transparent:!0,opacity:.6,toneMapped:!1},!0),S=h({color:"#8daf9a",transparent:!0,opacity:.16,toneMapped:!1,depthWrite:!1},!0),v=l(r?new pe(1,1,1):new ke(1,1,1,2,.045)),y=l(new Te(1,1,r?3:9,r?2:5)),T=l(new Rn(1,r?6:10,r?4:7)),E=l(new Jn(1,.013,r?3:5,r?44:80)),w=new le,R=new D,M=new D(0,1,0);function x(L,V,ft,Nt,dt,At=0,bt=0,kt=0,jt=0){let Gt=new Lt(v,Nt);return Gt.scale.set(L,V,ft),Gt.position.set(At,bt,kt),Gt.renderOrder=jt,dt.add(Gt),Gt}function P(L,V,ft,Nt=0,dt=0,At=0){let bt=new Lt(E,V);return bt.scale.setScalar(L),bt.position.set(Nt,dt,At),ft.add(bt),bt}function H(L,V,ft,Nt,dt=18,At="#dbdfc9",bt=!1){L.font=`${bt?700:400} ${dt}px Arial`,L.fillStyle=At,L.fillText(V,ft,Nt)}function z(L,V,ft,Nt,dt,At,bt){L.fillStyle=bt,L.beginPath(),L.roundRect(V,ft,Nt,dt,At),L.fill()}function q(L,V,ft=[]){let Nt=document.createElement("canvas");Nt.width=L==="dashboard"?1024:512,Nt.height=L==="dashboard"?640:340;let dt=Nt.getContext("2d"),At=Nt.width,bt=Nt.height;if(z(dt,0,0,At,bt,14,L==="dashboard"?"#e4e0d1":"#152b25"),L==="dashboard"){z(dt,0,0,At,65,12,"#243e33"),H(dt,"seu.neg\xF3cio",30,43,27,"#efe4c9",!0),H(dt,"OPERA\xC7\xC3O CONECTADA",690,41,16,"#b7c5a7"),H(dt,"Uma vis\xE3o. O mesmo caminho.",35,118,32,"#253a2b",!0),H(dt,"Do primeiro contato \xE0 pr\xF3xima entrega.",36,152,19,"#7a8069"),["RECEBER","PREPARAR","ENTREGAR"].forEach((Gt,at)=>{let wt=34+at*325;z(dt,wt,187,306,205,9,"#d3d6c1"),z(dt,wt+17,204,272,30,5,at===2?"#bf8a4e":"#bfc8ad"),H(dt,Gt,wt+30,225,14,"#31452c",!0),H(dt,["Pedido recebido","Equipe em a\xE7\xE3o","Pronto para seguir"][at],wt+18,275,20,"#253c2a",!0),H(dt,["Cliente e contexto","Informa\xE7\xE3o dispon\xEDvel","Atualiza\xE7\xE3o registrada"][at],wt+18,307,15,"#6a795e"),z(dt,wt+18,343,270,4,2,"#bac3a7"),z(dt,wt+18,343,270*(at===0?1:at===1?.7:.45),4,2,"#b47d40")}),H(dt,"CLAREZA PARA O PR\xD3XIMO PASSO",37,440,15,"#6b795e",!0),dt.strokeStyle="#c4c9b3",dt.lineWidth=1;for(let Gt=0;Gt<3;Gt++)dt.beginPath(),dt.moveTo(36,470+Gt*55),dt.lineTo(640,470+Gt*55),dt.stroke();dt.strokeStyle="#aa6c2a",dt.lineWidth=4,dt.beginPath(),[[40,558],[130,540],[210,548],[310,502],[420,509],[520,475],[635,455]].forEach(([Gt,at],wt)=>wt?dt.lineTo(Gt,at):dt.moveTo(Gt,at)),dt.stroke(),z(dt,690,428,300,175,9,"#294332"),H(dt,"EQUIPE",715,466,14,"#d8b576"),H(dt,"Contexto",715,511,27,"#e3e0c8",!0),H(dt,"compartilhado.",715,547,27,"#e3e0c8",!0),H(dt,"Cada parte sabe o pr\xF3ximo passo.",715,577,12,"#acbc9d")}else H(dt,"SEU NEG\xD3CIO / "+V,26,38,12,"#bba97d",!0),dt.fillStyle="#6f805f",dt.fillRect(26,55,At-52,1),H(dt,V,26,108,34,"#f0e4c9",!0),H(dt,ft[0]||"A informa\xE7\xE3o encontra dire\xE7\xE3o.",26,145,17,"#a4b89c"),ft.slice(1,4).forEach((jt,Gt)=>{let at=181+Gt*47;z(dt,24,at,At-48,36,5,Gt===2?"#73572e":"#2a4534"),dt.fillStyle=Gt===2?"#e8b673":"#8da37b",dt.beginPath(),dt.arc(42,at+18,3,0,7),dt.fill(),H(dt,jt,56,at+24,15,Gt===2?"#f2deb6":"#c1ceb0")});let kt=new Ne(Nt);return kt.colorSpace=be,kt.anisotropy=r?1:4,c.add(kt),kt}function Z(L,V,ft,Nt,dt,At){let bt=new Jt;At.add(bt),x(L+.12,V+.12,.12,d,bt,0,0,0,5),x(L+.055,V+.055,.045,f,bt,0,0,.075,6);let kt=new Lt(y,h({map:q(ft,Nt,dt),color:"#fff",toneMapped:!1},!0));return kt.scale.set(L,V,1),kt.position.z=.108,kt.renderOrder=8,bt.add(kt),x(.32,.023,.025,g,bt,-L/2+.24,V/2+.085,.08,9),bt}let F=new Jt;n.add(F);let rt=[];for(let L=0;L<9;L++){let V=new Jt;F.add(V);let ft=L%3,Nt=Math.floor(L/3);x(2.24,.17,1.5,u,V,0,0,0,-10),x(2.26,.027,1.51,_,V,0,-.11,0,-10),x(1.88,.014,.018,p,V,0,.095,.59,-8),x(.018,.015,1.18,S,V,-.96,.095,0,-8);let dt=x(.12,.035,.07,g,V,.84,.08,.61,-7);rt.push({g:V,x:(ft-1)*2.34,y:-1.72,z:(Nt-1)*1.6,led:dt})}let X=[];[["CLIENTES",["Um s\xF3 hist\xF3rico.","Contato","Contexto","Pr\xF3ximo passo"],[-2.78,.6,.2],[-4.1,1.65,1.4]],["PEDIDOS",["O caminho da entrega.","Receber","Preparar","Entregar"],[2.78,.63,.1],[4.2,-.4,1.8]],["ESTOQUE",["A opera\xE7\xE3o acompanha.","Entrada","Reserva","Sa\xEDda"],[-2.65,-.85,1.5],[-3.25,-1.25,3]],["FINANCEIRO",["O registro continua.","Registrar","Conferir","Acompanhar"],[2.65,-.82,1.45],[3.75,2.1,-.8]]].forEach(([L,V,ft,Nt],dt)=>{let At=new Jt;n.add(At);let bt=Z(1.87,1.24,"station",L,V,At);bt.rotation.y=dt%2?-.1:.1,x(1.92,.08,.7,f,At,0,-.73,-.06,-3),x(1.92,.025,.045,p,At,0,-.68,.3,2);let kt=P(.12,g,At,0,-.78,.34);kt.rotation.x=Math.PI/2;let jt=x(.12,.55,.12,d,At,0,-1,-.17,-4),Gt=[];for(let wt=0;wt<3;wt++)Gt.push(x(.11,.018,.035,m,At,-.55+wt*.21,-.69,.26,4));let at=x(1.68,.009,.007,p,bt,0,-.48,.119,9);X.push({g:At,panel:bt,pedestal:jt,port:kt,beacons:Gt,scan:at,pose:new D(...ft),scatter:new D(...Nt)})});let nt=new Jt;n.add(nt);let pt=Z(3.5,2.18,"dashboard","",[],nt);pt.position.set(0,.55,-.15);let Tt=x(.14,.9,.18,_,nt,0,-.98,-.2,-4),W=x(3.7,.13,1.45,u,nt,0,-1.4,.12,-5),U=new ue(v,d,r?12:24);nt.add(U),U.renderOrder=3;for(let L=0;L<U.count;L++)w.position.set(-1.52+L%8*.43,-1.31,-.24+Math.floor(L/8)*.29),w.rotation.set(0,0,0),w.scale.set(.28,.025,.14),w.updateMatrix(),U.setMatrixAt(L,w.matrix);let B=[];for(let L=0;L<3;L++){let V=P(.56+L*.17,L===1?p:S,nt,0,-.89,.48);V.rotation.x=Math.PI/2,V.renderOrder=-1,B.push(V)}let Y=new Lt(l(new or(.47,.47,.1,r?16:32)),_);Y.position.set(0,-.87,.48),nt.add(Y);let N=new Jt;n.add(N);let et=[];for(let L=0;L<3;L++){let V=P(2.65+L*.28,L===0?p:S,N,0,-1.65-L*.13,0);V.rotation.x=-Math.PI/2,V.scale.y*=.69,V.renderOrder=-12,et.push(V)}let lt=new ue(v,d,16);lt.renderOrder=-11,N.add(lt);for(let L=0;L<16;L++){let V=L/16*Math.PI*2;w.position.set(Math.cos(V)*3,-1.99,Math.sin(V)*1.9),w.rotation.set(0,-V,0),w.scale.set(.055,.45,.055),w.updateMatrix(),lt.setMatrixAt(L,w.matrix)}let Rt=new ue(v,p,r?32:64);Rt.renderOrder=-12,N.add(Rt);let Ct=r?16:28,Mt=r?3:5,Bt=[];function G(L,V,ft){let Nt=new Float32Array((Ct+1)*(Mt+1)*3),dt=[];for(let jt=0;jt<Ct;jt++)for(let Gt=0;Gt<Mt;Gt++){let at=jt*(Mt+1)+Gt,wt=at+Mt+1;dt.push(at,wt,at+1,wt,wt+1,at+1)}let At=l(new Xe);At.setAttribute("position",new We(Nt,3)),At.setIndex(dt);let bt=new Lt(At,L%3===0?m:p);bt.frustumCulled=!1,bt.renderOrder=2,n.add(bt);let kt={mesh:bt,geometry:At,positions:Nt,a:new D,b:new D,c:new D,from:V,to:ft,index:L};return Bt.push(kt),kt}for(let L=0;L<4;L++)G(L,L,-1);for(let L=0;L<4;L++)G(L+4,L,(L+1)%4);let Kt=new D,Vt=new D,zt=new D,Pt=new D;function Zt(L,V,ft){let Nt=1-V;return ft.copy(L.a).multiplyScalar(Nt*Nt).addScaledVector(L.c,2*Nt*V).addScaledVector(L.b,V*V)}function It(L,V,ft){L.a.copy(X[L.from].g.position),L.a.y-=.73,L.a.z+=.15,L.to===-1?L.b.set(0,-1+nt.position.y,.5):(L.b.copy(X[L.to].g.position),L.b.y-=.73,L.b.z+=.15),L.c.copy(L.a).lerp(L.b,.5),L.c.y-=.35,L.c.z+=.35+Math.sin(V*.42+L.index)*.18;for(let Nt=0;Nt<=Ct;Nt++){let dt=Nt/Ct;Zt(L,dt,R),Kt.copy(L.c).sub(L.a).multiplyScalar(2*(1-dt)).addScaledVector(Pt.copy(L.b).sub(L.c),2*dt).normalize(),Vt.crossVectors(Kt,M),Vt.lengthSq()<.01?Vt.set(1,0,0):Vt.normalize(),zt.crossVectors(Kt,Vt).normalize();for(let At=0;At<=Mt;At++){let bt=At/Mt*Math.PI*2,kt=(Nt*(Mt+1)+At)*3,jt=.012;L.positions[kt]=R.x+jt*(Vt.x*Math.cos(bt)+zt.x*Math.sin(bt)),L.positions[kt+1]=R.y+jt*(Vt.y*Math.cos(bt)+zt.y*Math.sin(bt)),L.positions[kt+2]=R.z+jt*(Vt.z*Math.cos(bt)+zt.z*Math.sin(bt))}}L.geometry.attributes.position.needsUpdate=!0,L.geometry.setDrawRange(0,Math.floor(ft*Ct)*Mt*6),L.mesh.visible=ft>.005}let I=new ue(T,g,Bt.length*4);I.frustumCulled=!1,I.instanceMatrix.setUsage(on),I.renderOrder=4,n.add(I);let b=[];for(let L=0;L<4;L++){let V=new Jt;n.add(V),x(.45,.29,.025,f,V,0,0,0,5),x(.42,.018,.009,g,V,0,.116,.017,6);for(let ft=0;ft<3;ft++)x(ft===2?.17:.32,.012,.009,ft===2?g:m,V,ft===2?-.075:0,.052-ft*.052,.017,6);b.push(V)}let tt=new Jt;n.add(tt);let gt=[],Et=[.5,.85,1.25,1.75,2.3,2.85,3.45];for(let L=0;L<7;L++){let V=new Jt;tt.add(V);let ft=x(.43,1,.48,L%3===0?_:u,V,0,.5,0,-3),Nt=x(.46,.035,.51,g,V,0,1.02,0,0);gt.push({g:V,column:ft,cap:Nt,height:Et[L],x:-2.45+L*.81})}let ut=gt.map(L=>new D(L.x,-1.58+L.height+.14,-2)),yt=new gi(ut),vt=new Lt(l(new Gn(yt,r?32:72,.023,r?3:5,!1)),g);vt.renderOrder=2,tt.add(vt);let St=Z(2.7,.89,"station","PR\xD3XIMO PASSO",["Clareza para continuar.","Ajustar \xB7 conectar \xB7 evoluir"],tt);St.position.set(.3,2.2,-2.4),St.scale.setScalar(.8);let Ft=new Lt(T,g);Ft.scale.setScalar(.07),tt.add(Ft);let st=new ue(v,_,r?18:36);st.frustumCulled=!1,st.instanceMatrix.setUsage(on),n.add(st);let mt=new ue(T,S,r?26:64);mt.frustumCulled=!1,n.add(mt);let Ut=document.createElement("canvas");Ut.width=Ut.height=128;let ht=Ut.getContext("2d"),_t=ht.createRadialGradient(64,64,1,64,64,64);_t.addColorStop(0,"#eab46d38"),_t.addColorStop(.3,"#72b59a16"),_t.addColorStop(1,"#72b59a00"),ht.fillStyle=_t,ht.fillRect(0,0,128,128);let $=new Ne(Ut);c.add($);let k=new Lt(l(new Te(10,8)),h({map:$,color:"#fff",transparent:!0,opacity:.65,depthWrite:!1,toneMapped:!1},!0));k.renderOrder=-30,n.add(k);let Q=new D,A=new D;function it(L,V,ft,Nt,dt,At,bt,kt,jt=0,Gt=0,at=0){w.position.set(ft,Nt,dt),w.rotation.set(jt,Gt,at),w.scale.set(At,bt,kt),w.updateMatrix(),L.setMatrixAt(V,w.matrix)}function O(L,V,ft,Nt={}){let dt=Id(L,V),{t:At}=dt,bt=Nt.mobile??ft.aspect<1.2;n.rotation.set(0,0,0),n.position.set(0,0,0),rt.forEach((at,wt)=>{let se=ms((dt.organize-wt*.025)/.8),re=1-se;at.g.position.set(at.x+Math.sin(wt*3.3)*re*2.6,at.y-re*(1.8+wt*.13),at.z+Math.cos(wt*2.1)*re*2.4),at.g.rotation.set(re*(wt%2?.65:-.65),re*(wt-4)*.26,0),at.g.scale.setScalar(.45+.55*se),at.led.visible=dt.connect>.1}),X.forEach((at,wt)=>{let se=ms((dt.organize-wt*.035)/.84),re=1-se,gn=Math.sin(se*Math.PI);at.g.position.lerpVectors(at.scatter,at.pose,se),at.g.position.y+=Math.sin(At*.57+wt)*(.12*re+.025)+gn*(wt%2?.7:-.5),at.g.position.z+=gn*.8,at.g.rotation.set(re*(wt%2?.26:-.2),re*(wt%2?-.42:.42),re*(wt%2?.12:-.1)),at.panel.rotation.x=-.04+re*.14,at.pedestal.scale.y=Math.max(.01,dt.organize),at.port.rotation.z=At*.5+wt,at.beacons.forEach((bn,Ei)=>bn.scale.y=.018*(.5+.5*Math.sin(At*2.3+wt+Ei))),at.scan.position.y=-.5+(At*.18+wt*.25)%1*1,at.scan.visible=dt.connect>.2}),nt.position.set(0,-2.7*(1-dt.organize),-.15*(1-dt.operate)),nt.scale.setScalar(.3+.7*dt.organize),nt.visible=dt.organize>.005,pt.position.y=.55+.7*(1-dt.operate),pt.rotation.x=-.22*(1-dt.operate),pt.rotation.y=Math.sin(At*.27)*.012,W.position.y=-1.4-.75*(1-dt.operate),Tt.scale.y=.9+.5*(1-dt.operate),B.forEach((at,wt)=>{at.rotation.z=At*(wt%2?-.32:.22)+wt*.7,at.scale.setScalar((.56+wt*.17)*(1+Math.sin(At*.8+wt)*.04))}),Y.rotation.y=At*.3,N.position.y=-1.2*(1-dt.organize),N.scale.setScalar(.8+.2*dt.organize),N.visible=dt.organize>.01,et.forEach((at,wt)=>at.rotation.z=At*(wt%2?.025:-.035));for(let at=0;at<Rt.count;at++){let wt=at/Rt.count*Math.PI*2+At*.025;it(Rt,at,Math.cos(wt)*3.62,-1.8,Math.sin(wt)*2.4,.028,.018,at%4===0?.19:.075,0,-wt,0)}Rt.instanceMatrix.needsUpdate=!0,Bt.forEach((at,wt)=>{let se=ms((dt.connect-wt*.028)/.78);It(at,At,se);for(let re=0;re<4;re++){let gn=(At*(.15+wt*.006)-re*.035+wt*.107+1)%1;Zt(at,gn,R);let bn=se*(dt.operate*.6+.4)*(re===0?.066:.038-re*.006);it(I,wt*4+re,R.x,R.y,R.z,bn,bn,bn)}}),I.instanceMatrix.needsUpdate=!0,I.visible=dt.connect>.001,b.forEach((at,wt)=>{let se=(At*.12+wt*.23)%1;Zt(Bt[wt],se,at.position),at.position.y+=.12,at.scale.setScalar(dt.operate*(.6+.4*Math.sin(se*Math.PI))),at.visible=dt.operate>.005}),tt.visible=dt.evolve>.001,tt.scale.setScalar(Math.max(.001,dt.evolve)),gt.forEach((at,wt)=>{let se=ms((dt.evolve-wt*.04)/.72),re=Math.max(.02,at.height*se);at.g.position.set(at.x,-1.58,-2),at.column.scale.y=re,at.column.position.y=re/2,at.cap.position.y=re+.025}),vt.geometry.setDrawRange(0,Math.floor(dt.evolve*(r?32:72))*(r?3:5)*6),yt.getPointAt(At*.13%1,Ft.position),St.position.y=2.15+Math.sin(At*.6)*.045;for(let at=0;at<st.count;at++){let wt=at*2.39996+At*.035,se=3.2+at%4*.34,re=1-dt.organize,gn=Math.cos(wt)*se*(.5+re*.8),bn=-1.1+Math.sin(wt)*.5+re*(Math.cos(at)*2.7),Ei=Math.sin(wt)*se*.7,As=.042+at%3*.015;it(st,at,gn,bn,Ei,As,As*.38,As,At*.12+at,At*.16+at,0)}st.instanceMatrix.needsUpdate=!0;for(let at=0;at<mt.count;at++){let wt=at*2.39996+At*.014,se=3.7+at%7*.17;it(mt,at,Math.cos(wt)*se,Math.sin(at*4.7+At*.12)*2.4,Math.sin(wt)*2.7-1,.012,.012,.012)}mt.instanceMatrix.needsUpdate=!0;let kt=dt.yaw*(bt?.63:1)+Math.sin(At*.13)*.018;Q.set(0,-.2+dt.evolve*.26,0);let Gt=Math.max(bt?5.5:7.2,(bt?10.7:11.8)/ft.aspect)*dt.zoom/(2*Math.tan(Oe.degToRad(ft.fov/2)));return A.set(Math.sin(kt),dt.elevation*(bt?.76:1),Math.cos(kt)).normalize(),ft.position.copy(A).multiplyScalar(Gt).add(Q),ft.lookAt(Q),ft.updateProjectionMatrix(),ft.updateMatrixWorld(!0),b.forEach(at=>at.quaternion.copy(ft.quaternion)),k.position.set(0,-.4,-3),k.quaternion.copy(ft.quaternion),k.scale.setScalar(.9+Math.sin(At*.45)*.04),i.dataset.rendered="true",i.dataset.filmProgress=dt.p.toFixed(4),i.dataset.motionTime=At.toFixed(2),i.dataset.packetPhase=dt.pulse.toFixed(4),i.dataset.cameraYaw=kt.toFixed(4),dt}let j=0;return n.traverse(L=>{L.isMesh&&j++}),i.dataset.resultMeshes=j,{group:n,update:O,dispose(){s.remove(n),n.traverse(L=>{L.isInstancedMesh&&L.dispose()}),o.forEach(L=>L.dispose()),a.forEach(L=>L.dispose()),c.forEach(L=>L.dispose())}}}var xy=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0));function yy(s,t){let e=Math.max(0,Number.isFinite(t)?t:0)*.001,n=xy(s);return{t:e,p:n,breath:.5+.5*Math.sin(e*.82),yaw:e*.22+n*.7,orbit:.26*Math.sin(e*.15)+n*.55,lift:Math.sin(e*.72)*.13,phase:Math.floor((e/9+n*1.4)%3),active:Math.floor(e/3.8)%4}}function Ld({scene:s,software:t=!1,quality:e="medium"}){let n=new Jt;n.visible=!1,s.add(n);let i=t||e==="low",r=new Set,o=new Set,a=new Set,c=document.querySelector(".intelligence-world"),l=[...c.querySelectorAll("[data-reactor-label]")],h=document.querySelector("[data-reactor-phase]"),u=document.querySelector("[data-reactor-copy]"),d=yt=>(r.add(yt),yt),f=(yt,vt=!1)=>{let St=vt?new Re(yt):new xe({roughness:.28,metalness:.65,...yt});return o.add(St),St},_=f({color:"#f68a27",roughness:.27,metalness:.64}),g=f({color:"#35413a",metalness:.8}),m=f({color:"#cbd9ca",roughness:.3,metalness:.72}),p=f({color:"#ffb85b",toneMapped:!1},!0),S=f({color:"#e9f4d9",toneMapped:!1},!0),v=f({color:"#d67d31",toneMapped:!1,transparent:!0,opacity:.68},!0),y=f({color:"#69a99f",toneMapped:!1,transparent:!0,opacity:.34},!0),T=f({color:"#af9a66",toneMapped:!1,transparent:!0,opacity:.19},!0),E=d(i?new pe(1,1,1):new ke(1,1,1,2,.07)),w=d(new Rn(1,i?7:12,i?5:9)),R=d(new Jn(1,.009,i?3:5,i?44:80)),M=new le,x=new D,P=new D,H=new Jt;n.add(H);let z=i?3:4,q=z**3,Z=new ue(E,_,q);Z.frustumCulled=!1,Z.instanceMatrix.setUsage(on),H.add(Z);let F=new Lt(d(new _i(.4,i?0:1)),p);H.add(F);let rt=new Jt;H.add(rt);function X(yt,vt,St,Ft,st){let mt=new D(...yt),Ut=new D(...vt),ht=Ut.clone().sub(mt),_t=new Lt(E,Ft);return _t.position.copy(mt).add(Ut).multiplyScalar(.5),_t.scale.set(St,ht.length(),St),_t.quaternion.setFromUnitVectors(new D(0,1,0),ht.normalize()),st.add(_t),_t}let xt=[];for(let yt of[-1,1])for(let vt of[-1,1])for(let St of[-1,1])xt.push([yt*.85,vt*.85,St*.85]);for(let yt=0;yt<xt.length;yt++)for(let vt=yt+1;vt<xt.length;vt++)xt[yt].filter((St,Ft)=>St!==xt[vt][Ft]).length===1&&X(xt[yt],xt[vt],.012,v,rt);let nt=[];for(let yt=0;yt<5;yt++){let vt=new Lt(R,yt===1?v:yt===3?y:T),St=1.28+yt*.34;vt.scale.setScalar(St),n.add(vt),nt.push(vt)}let pt=Array.from({length:4},(yt,vt)=>{let St=new Jt;n.add(St);let Ft=new Lt(E,vt%2?m:_);Ft.scale.setScalar(.25),St.add(Ft);let st=new Lt(R,vt%2?y:v);st.scale.setScalar(.43),St.add(st);let mt=new Lt(R,T);mt.scale.setScalar(.53),mt.rotation.x=Math.PI/2,St.add(mt);let Ut=new Lt(w,p);return Ut.scale.setScalar(.075),St.add(Ut),{g:St,cube:Ft,rim:st,rim2:mt,nucleus:Ut,base:[-2.45,2.45,-2.15,2.35][vt],y:[1.25,.95,-1.25,-1.3][vt],z:[-.5,-.2,.65,.8][vt]}}),Tt=i?18:30,W=i?3:5;function U(yt){let vt=d(new Xe),St=new Float32Array((Tt+1)*(W+1)*3),Ft=[];for(let mt=0;mt<Tt;mt++)for(let Ut=0;Ut<W;Ut++){let ht=mt*(W+1)+Ut,_t=ht+W+1;Ft.push(ht,_t,ht+1,_t,_t+1,ht+1)}vt.setAttribute("position",new We(St,3)),vt.setIndex(Ft);let st=new Lt(vt,yt%3===1?y:v);return st.frustumCulled=!1,st.renderOrder=-1,n.add(st),{mesh:st,positions:St,geometry:vt,a:new D,b:new D,c:new D,index:yt}}let B=Array.from({length:8},(yt,vt)=>U(vt)),Y=new ue(w,p,B.length*4);Y.frustumCulled=!1,Y.instanceMatrix.setUsage(on),n.add(Y);let N=new ue(w,T,i?62:128);N.frustumCulled=!1,N.instanceMatrix.setUsage(on),n.add(N);let et=new ue(E,v,i?32:64);et.frustumCulled=!1,n.add(et);let lt=document.createElement("canvas");lt.width=lt.height=128;let Rt=lt.getContext("2d"),Ct=Rt.createRadialGradient(64,64,0,64,64,64);Ct.addColorStop(0,"#ffb04b60"),Ct.addColorStop(.25,"#ec872620"),Ct.addColorStop(1,"#ec872600"),Rt.fillStyle=Ct,Rt.fillRect(0,0,128,128);let Mt=new Ne(lt);a.add(Mt);let Bt=f({map:Mt,color:"#ffffff",transparent:!0,depthWrite:!1,opacity:.75,toneMapped:!1},!0),G=new Lt(d(new Te(5,5)),Bt);G.renderOrder=-20,n.add(G);let Kt=new D,Vt=new D,zt=new D,Pt=new D,Zt=new D(0,1,0);function It(yt,vt,St){let Ft=1-vt;return St.copy(yt.a).multiplyScalar(Ft*Ft).addScaledVector(yt.c,2*Ft*vt).addScaledVector(yt.b,vt*vt)}function I(yt,vt){let{a:St,b:Ft,c:st,positions:mt}=yt;yt.index<4?(St.set(0,Math.sin(vt*.72)*.13,0),Ft.copy(pt[yt.index].g.position)):(St.copy(pt[yt.index-4].g.position),Ft.copy(pt[(yt.index-3)%4].g.position)),st.copy(St).lerp(Ft,.5),st.z+=Math.sin(vt*.41+yt.index*.9)*.72+(yt.index<4?.75:-.6),st.y+=Math.sin(vt*.55+yt.index)*.38;for(let Ut=0;Ut<=Tt;Ut++){let ht=Ut/Tt;It(yt,ht,Kt),Vt.copy(st).sub(St).multiplyScalar(2*(1-ht)).addScaledVector(x.copy(Ft).sub(st),2*ht).normalize(),zt.crossVectors(Vt,Zt),zt.lengthSq()<.01?zt.set(1,0,0):zt.normalize(),Pt.crossVectors(Vt,zt).normalize();for(let _t=0;_t<=W;_t++){let $=_t/W*Math.PI*2,k=(Ut*(W+1)+_t)*3,Q=.011;mt[k]=Kt.x+Q*(zt.x*Math.cos($)+Pt.x*Math.sin($)),mt[k+1]=Kt.y+Q*(zt.y*Math.cos($)+Pt.y*Math.sin($)),mt[k+2]=Kt.z+Q*(zt.z*Math.cos($)+Pt.z*Math.sin($))}}yt.geometry.attributes.position.needsUpdate=!0}function b(yt,vt,St,Ft,st=0){M.position.copy(St),M.rotation.set(st,st*.7,0),M.scale.setScalar(Ft),M.updateMatrix(),yt.setMatrixAt(vt,M.matrix)}let tt=[["01 / CONTEXTO","A informa\xE7\xE3o encontra suas conex\xF5es."],["02 / INTELIG\xCANCIA","O contexto ajuda a enxergar o pr\xF3ximo passo."],["03 / A\xC7\xC3O","Atendimento e opera\xE7\xE3o seguem no mesmo fluxo."]],gt=-1;function Et(yt,vt,St,Ft={width:800,height:600}){let st=yy(yt,vt),{t:mt}=st;H.position.y=st.lift,H.rotation.set(.18+Math.sin(mt*.27)*.12,st.yaw,Math.sin(mt*.31)*.13),F.rotation.set(mt*.12,-mt*.18,mt*.08),F.scale.setScalar(.84+st.breath*.23),rt.rotation.set(-mt*.06,mt*.04,.1),rt.scale.setScalar(1.03+st.breath*.07);let Ut=.13+st.breath*.29,ht=1.16/z;for(let Q=0;Q<q;Q++){let A=(Q%z-(z-1)/2)*ht,it=(Math.floor(Q/z)%z-(z-1)/2)*ht,O=(Math.floor(Q/(z*z))-(z-1)/2)*ht;Kt.set(A,it,O);let j=Kt.length()||1;Kt.multiplyScalar(1+Ut/j),Kt.y+=Math.sin(mt*1.1+Q*.7)*.015,b(Z,Q,Kt,ht*.83,.035*Math.sin(mt*.6+Q))}Z.instanceMatrix.needsUpdate=!0,nt.forEach((Q,A)=>{Q.position.y=st.lift*.4,Q.rotation.set(.3+A*.46+Math.sin(mt*.15+A)*.12,.25+A*.52+mt*(A%2?.045:-.036),mt*(A%2?-.085:.055)+A*.62)}),pt.forEach((Q,A)=>{Q.g.position.set(Q.base+Math.sin(mt*.38+A*1.7)*.22,Q.y+Math.cos(mt*.46+A)*.22,Q.z+Math.sin(mt*.34+A*1.1)*.4),Q.cube.rotation.set(mt*(A%2?.25:-.22),mt*.35+A,.25+Math.sin(mt*.4+A)*.2),Q.rim.rotation.set(.2+Math.sin(mt*.3+A)*.35,mt*.18+A,mt*.12),Q.rim2.rotation.z=-mt*.12,Q.nucleus.position.set(Math.cos(mt*.7+A)*.36,Math.sin(mt*.7+A)*.36,.04)}),B.forEach(Q=>{I(Q,mt);for(let A=0;A<4;A++){let it=(mt*(.11+Q.index*.003)+A*.035+Q.index*.137)%1;It(Q,it,Kt),b(Y,Q.index*4+A,Kt,A===0?.072:.044-A*.008)}}),Y.instanceMatrix.needsUpdate=!0;for(let Q=0;Q<N.count;Q++){let A=Q*2.39996+mt*(Q%2?.024:-.019),it=1.4+Q%19*.12;Kt.set(Math.cos(A)*it,Math.sin(A)*it*.7,Math.sin(Q*5.1+mt*.09)*1.7-.7),b(N,Q,Kt,.012+Q%4*.003)}N.instanceMatrix.needsUpdate=!0;for(let Q=0;Q<et.count;Q++){let A=Q/et.count*Math.PI*2+mt*.1;Kt.set(Math.cos(A)*2.9,Math.sin(A)*2.9*.66,-.7),M.position.copy(Kt),M.rotation.set(.2,0,A),M.scale.set(.017,.065,.012),M.updateMatrix(),et.setMatrixAt(Q,M.matrix)}et.instanceMatrix.needsUpdate=!0;let _t=new D(0,.04,0),k=Math.max(5.15,6.9/St.aspect)*(1-.055*Math.sin(mt*.21))/(2*Math.tan(Oe.degToRad(St.fov/2)));return St.position.set(Math.sin(st.orbit)*k,.62+Math.sin(mt*.17)*.18,Math.cos(st.orbit)*k).add(_t),St.lookAt(_t),St.updateProjectionMatrix(),St.updateMatrixWorld(!0),G.position.set(0,st.lift*.4,-1.1),G.quaternion.copy(St.quaternion),G.scale.setScalar(.92+st.breath*.1),s.updateMatrixWorld(!0),pt.forEach((Q,A)=>{P.copy(Q.g.position),P.y+=A<2?.52:-.48,P.project(St);let it=Math.max(.15,Math.min(.85,P.x*.5+.5))*Ft.width,O=Math.max(.12,Math.min(.88,-P.y*.5+.5))*Ft.height;l[A]&&(l[A].style.transform=`translate3d(${it.toFixed(2)}px,${O.toFixed(2)}px,0) translate(-50%,-50%)`,l[A].dataset.active=String(st.active===A))}),st.phase!==gt&&(h&&(h.textContent=tt[st.phase][0]),u&&(u.textContent=tt[st.phase][1]),gt=st.phase),c.dataset.rendered="true",c.dataset.motionTime=mt.toFixed(2),c.dataset.coreYaw=st.yaw.toFixed(3),c.dataset.packetPhase=(mt*.11%1).toFixed(3),st}let ut=0;return n.traverse(yt=>{yt.isMesh&&ut++}),c.dataset.reactorMeshes=ut,{group:n,update:Et,dispose(){s.remove(n),n.traverse(yt=>{yt.isInstancedMesh&&yt.dispose()}),r.forEach(yt=>yt.dispose()),o.forEach(yt=>yt.dispose()),a.forEach(yt=>yt.dispose())}}}function Ud(s){let t=[...document.querySelectorAll("[data-scene-window]")].map(o=>({el:o,id:o.dataset.sceneWindow,section:o.closest("[data-chapter]")})),e=!0,n=null,i=()=>{e=!0},r=new ResizeObserver(i);return t.forEach(({el:o})=>r.observe(o)),addEventListener("scroll",i,{passive:!0}),addEventListener("resize",i,{passive:!0}),{read(){if(!e)return n;e=!1;let o=document.getElementById("header").offsetHeight,a=null,c=0;for(let S of t){let v=S.el.getBoundingClientRect(),y=Math.max(0,Math.min(innerHeight,v.bottom)-Math.max(o,v.top)),T=Math.max(0,Math.min(innerWidth,v.right)-Math.max(0,v.left));T*y>c&&(c=T*y,a={...S,rect:v})}if(!a||c<800)return s.style.visibility="hidden",n=null,null;let{rect:l,section:h,id:u}=a,d=h.getBoundingClientRect(),f=h.querySelector(".section-pin"),_=h.querySelector(".cinematic-intro")?.offsetHeight||0,g=f&&getComputedStyle(f).position==="sticky",m=Math.max(0,Math.min(1,g?(-d.top-_)/Math.max(1,d.height-_-f.offsetHeight):(innerHeight*.45-d.top)/Math.max(1,d.height)));s.parentElement!==a.el&&a.el.appendChild(s),Object.assign(s.style,{left:"0",top:"0",width:`${l.width}px`,height:`${l.height}px`});let p=u==="problema"&&!g?Math.max(0,Math.min(1,(innerHeight*.85-l.top)/(l.height+innerHeight*.35))):m;return n={id:u,progress:p,width:Math.round(l.width),height:Math.round(l.height),rect:l},s.dataset.scene=u,s.dataset.progress=p.toFixed(4),n},invalidate:i,dispose(){r.disconnect(),removeEventListener("scroll",i),removeEventListener("resize",i)}}}function xi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Vd(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},mr={duration:.5,overwrite:!1,delay:0},fh,Ze,Ae,Dn=1e8,ve=1/Dn,nh=Math.PI*2,vy=nh/4,My=0,Gd=Math.sqrt,Sy=Math.cos,Ey=Math.sin,He=function(t){return typeof t=="string"},Ie=function(t){return typeof t=="function"},vi=function(t){return typeof t=="number"},ya=function(t){return typeof t>"u"},ei=function(t){return typeof t=="object"},fn=function(t){return t!==!1},ph=function(){return typeof window<"u"},ha=function(t){return Ie(t)||He(t)},Wd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tn=Array.isArray,ih=/(?:-?\.?\d|\.)+/gi,mh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ys=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$l=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,gh=/[+-]=-?[.\d]+/,Xd=/[^,'"\[\]\s]+/gi,by=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ce,jn,sh,_h,Sn={},pa={},qd,Yd=function(t){return(pa=gr(t,Sn))&&en},va=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},eo=function(t,e){return!e&&console.warn(t)},Zd=function(t,e){return t&&(Sn[t]=e)&&pa&&(pa[t]=e)||Sn},no=function(){return 0},wy={suppressEvents:!0,isStart:!0,kill:!1},ua={suppressEvents:!0,kill:!1},Ty={suppressEvents:!0},xh={},Vi=[],rh={},$d,un={},Jl={},Nd=30,da=[],yh="",vh=function(t){var e=t[0],n,i;if(ei(e)||Ie(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=da.length;i--&&!da[i].targetTest(e););n=da[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new bh(t[i],n)))||t.splice(i,1);return t},Gi=function(t){return t._gsap||vh(Ln(t))[0]._gsap},Mh=function(t,e,n){return(n=t[e])&&Ie(n)?t[e]():ya(n)&&t.getAttribute&&t.getAttribute(e)||n},an=function(t,e){return(t=t.split(",")).forEach(e)||t},De=function(t){return Math.round(t*1e5)/1e5||0},Fe=function(t){return Math.round(t*1e7)/1e7||0},vs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Ay=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ma=function(){var t=Vi.length,e=Vi.slice(0),n,i;for(rh={},Vi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Sh=function(t){return!!(t._initted||t._startAt||t.add)},Jd=function(t,e,n,i){Vi.length&&!Ze&&ma(),t.render(e,n,i||!!(Ze&&e<0&&Sh(t))),Vi.length&&!Ze&&ma()},Kd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Xd).length<2?e:He(t)?t.trim():t},Qd=function(t){return t},En=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ry=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},gr=function(t,e){for(var n in e)t[n]=e[n];return t},Od=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ei(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},ga=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Qr=function(t){var e=t.parent||Ce,n=t.keyframes?Ry(tn(t.keyframes)):En;if(fn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Cy=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},jd=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ma=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Wi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},gs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Py=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},oh=function(t,e,n,i){return t._startAt&&(Ze?t._startAt.revert(ua):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Iy=function s(t){return!t||t._ts&&s(t.parent)},Fd=function(t){return t._repeat?_r(t._tTime,t=t.duration()+t._rDelay)*t:0},_r=function(t,e){var n=Math.floor(t=Fe(t/e));return t&&n===t?n-1:n},_a=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Sa=function(t){return t._end=Fe(t._start+(t._tDur/Math.abs(t._ts||t._rts||ve)||0))},Ea=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Fe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Sa(t),n._dirty||gs(n,t)),t},tf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=_a(t.rawTime(),e),(!e._dur||ro(0,e.totalDuration(),n)-e._tTime>ve)&&e.render(n,!0)),gs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ve}},ti=function(t,e,n,i){return e.parent&&Wi(e),e._start=Fe((vi(n)?n:n||t!==Ce?In(t,n,e):t._time)+e._delay),e._end=Fe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),jd(t,e,"_first","_last",t._sort?"_start":0),ah(e)||(t._recent=e),i||tf(t,e),t._ts<0&&Ea(t,t._tTime),t},ef=function(t,e){return(Sn.ScrollTrigger||va("scrollTrigger",e))&&Sn.ScrollTrigger.create(e,t)},nf=function(t,e,n,i,r){if(Ah(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Ze&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&$d!==dn.frame)return Vi.push(t),t._lazy=[r,i],1},Dy=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},ah=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ly=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Dy(t)&&!(!t._initted&&ah(t))||(t._ts<0||t._dp._ts<0)&&!ah(t))?0:1,a=t._rDelay,c=0,l,h,u;if(a&&t._repeat&&(c=ro(0,t._tDur,e),h=_r(c,a),t._yoyo&&h&1&&(o=1-o),h!==_r(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Ze||i||t._zTime===ve||!e&&t._zTime){if(!t._initted&&nf(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?ve:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&oh(t,e,n,!0),t._onUpdate&&!n&&Mn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&Mn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Wi(t,1),!n&&!Ze&&(Mn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Uy=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},xr=function(t,e,n,i){var r=t._repeat,o=Fe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Fe(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Ea(t,t._tTime=t._tDur*a),t.parent&&Sa(t),n||gs(t.parent,t),t},Bd=function(t){return t instanceof Ye?gs(t):xr(t,t._dur)},Ny={_start:0,endTime:no,totalDuration:no},In=function s(t,e,n){var i=t.labels,r=t._recent||Ny,o=t.duration()>=Dn?r.endTime(!1):t._dur,a,c,l;return He(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(tn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},jr=function(t,e,n){var i=vi(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=fn(c.vars.inherit)&&c.parent;o.immediateRender=fn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Le(e[0],o,e[r+1])},Xi=function(t,e){return t||t===0?e(t):e},ro=function(t,e,n){return n<t?t:n>e?e:n},$e=function(t,e){return!He(t)||!(e=by.exec(t))?"":e[1]},Oy=function(t,e,n){return Xi(n,function(i){return ro(t,e,i)})},ch=[].slice,sf=function(t,e){return t&&ei(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ei(t[0]))&&!t.nodeType&&t!==jn},Fy=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return He(i)&&!e||sf(i,1)?(r=n).push.apply(r,Ln(i)):n.push(i)})||n},Ln=function(t,e,n){return Ae&&!e&&Ae.selector?Ae.selector(t):He(t)&&!n&&(sh||!yr())?ch.call((e||_h).querySelectorAll(t),0):tn(t)?Fy(t,n):sf(t)?ch.call(t,0):t?[t]:[]},lh=function(t){return t=Ln(t)[0]||eo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ln(e,n.querySelectorAll?n:n===t?eo("Invalid scope")||_h.createElement("div"):t)}},rf=function(t){return t.sort(function(){return .5-Math.random()})},of=function(t){if(Ie(t))return t;var e=ei(t)?t:{each:t},n=_s(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,h=i,u=i;return He(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,m=o[g],p,S,v,y,T,E,w,R,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,Dn])[1],!M){for(w=-Dn;w<(w=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],p=c?Math.min(M,g)*h-.5:i%M,S=M===Dn?0:c?g*u/M-.5:i/M|0,w=0,R=Dn,E=0;E<g;E++)v=E%M-p,y=S-(E/M|0),m[E]=T=l?Math.abs(l==="y"?y:v):Gd(v*v+y*y),T>w&&(w=T),T<R&&(R=T);i==="random"&&rf(m),m.max=w-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(M>g?g-1:l?l==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=$e(e.amount||e.each)||0,n=n&&g<0?mf(n):n}return g=(m[d]-m.min)/m.max||0,Fe(m.b+(n?n(g):g)*m.v)+m.u}},hh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Fe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(vi(n)?0:$e(n))}},af=function(t,e){var n=tn(t),i,r;return!n&&ei(t)&&(i=n=t.radius||Dn,t.values?(t=Ln(t.values),(r=!vi(t[0]))&&(i*=i)):t=hh(t.increment)),Xi(e,n?Ie(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=Dn,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-a,f=t[u].y-c,d=d*d+f*f):d=Math.abs(t[u]-a),d<l&&(l=d,h=u);return h=!i||l<=i?t[h]:o,r||h===o||vi(o)?h:h+$e(o)}:hh(t))},cf=function(t,e,n,i){return Xi(tn(t)?!e:n===!0?!!(n=0):!i,function(){return tn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},By=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},zy=function(t,e){return function(n){return t(parseFloat(n))+(e||$e(n))}},ky=function(t,e,n){return hf(t,e,0,1,n)},lf=function(t,e,n){return Xi(n,function(i){return t[~~e(i)]})},Hy=function s(t,e,n){var i=e-t;return tn(t)?lf(t,s(0,t.length),e):Xi(n,function(r){return(i+(r-t)%i)%i+t})},Vy=function s(t,e,n){var i=e-t,r=i*2;return tn(t)?lf(t,s(0,t.length-1),e):Xi(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},vr=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?Xd:ih),n+=t.substr(e,i-e)+cf(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},hf=function(t,e,n,i,r){var o=e-t,a=i-n;return Xi(r,function(c){return n+((c-t)/o*a||0)})},Gy=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=He(t),a={},c,l,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(tn(t)&&!tn(e)){for(h=[],u=t.length,d=u-2,l=1;l<u;l++)h.push(s(t[l-1],t[l]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=gr(tn(t)?[]:{},t));if(!h){for(c in e)wh.call(a,t,c,"get",e[c]);r=function(_){return Ph(_,a)||(o?t.p:t)}}}return Xi(n,r)},zd=function(t,e,n){var i=t.labels,r=Dn,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},Mn=function(t,e,n){var i=t.vars,r=i[e],o=Ae,a=t._ctx,c,l,h;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&Vi.length&&ma(),a&&(Ae=a),h=c?r.apply(l,c):r.call(l),Ae=o,h},Jr=function(t){return Wi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ze),t.progress()<1&&Mn(t,"onInterrupt"),t},pr,uf=[],df=function(t){if(t)if(t=!t.name&&t.default||t,ph()||t.headless){var e=t.name,n=Ie(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:no,render:Ph,add:wh,kill:rv,modifier:sv,rawVars:0},o={targetTest:0,get:0,getSetter:ba,aliases:{},register:0};if(yr(),t!==i){if(un[e])return;En(i,En(ga(t,r),o)),gr(i.prototype,gr(r,ga(t,o))),un[i.prop=e]=i,t.targetTest&&(da.push(i),xh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Zd(e,i),t.register&&t.register(en,i,cn)}else uf.push(t)},ye=255,Kr={aqua:[0,ye,ye],lime:[0,ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ye],navy:[0,0,128],white:[ye,ye,ye],olive:[128,128,0],yellow:[ye,ye,0],orange:[ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ye,0,0],pink:[ye,192,203],cyan:[0,ye,ye],transparent:[ye,ye,ye,0]},Kl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ye+.5|0},ff=function(t,e,n){var i=t?vi(t)?[t>>16,t>>8&ye,t&ye]:0:Kr.black,r,o,a,c,l,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Kr[t])i=Kr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ye,i&ye,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ye,t&ye]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(ih),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(l+1):h+l-h*l,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Kl(c+1/3,r,o),i[1]=Kl(c,r,o),i[2]=Kl(c-1/3,r,o);else if(~t.indexOf("="))return i=t.match(mh),n&&i.length<4&&(i[3]=1),i}else i=t.match(ih)||Kr.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/ye,o=i[1]/ye,a=i[2]/ye,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?c=l=0:(f=u-d,l=h>.5?f/(2-u-d):f/(u+d),c=u===r?(o-a)/f+(o<a?6:0):u===o?(a-r)/f+2:(r-o)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},pf=function(t){var e=[],n=[],i=-1;return t.split(yi).forEach(function(r){var o=r.match(ys)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},kd=function(t,e,n){var i="",r=(t+i).match(yi),o=e?"hsla(":"rgba(",a=0,c,l,h,u;if(!r)return t;if(r=r.map(function(d){return(d=ff(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=pf(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(yi,"1").split(ys),u=l.length-1;a<u;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!l)for(l=t.split(yi),u=l.length-1;a<u;a++)i+=l[a]+r[a];return i+l[u]},yi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Kr)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Wy=/hsl[a]?\(/,Eh=function(t){var e=t.join(" "),n;if(yi.lastIndex=0,yi.test(e))return n=Wy.test(e),t[1]=kd(t[1],n),t[0]=kd(t[0],n,pf(t[1])),!0},io,dn=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,h,u,d,f,_=function g(m){var p=s()-i,S=m===!0,v,y,T,E;if((p>t||p<0)&&(n+=p-e),i+=p,T=i-n,v=T-o,(v>0||S)&&(E=++u.frame,d=T-u.time*1e3,u.time=T=T/1e3,o+=v+(v>=r?4:r-v),y=1),S||(c=l(g)),y)for(f=0;f<a.length;f++)a[f](T,d,E,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){qd&&(!sh&&ph()&&(jn=sh=window,_h=jn.document||{},Sn.gsap=en,(jn.gsapVersions||(jn.gsapVersions=[])).push(en.version),Yd(pa||jn.GreenSockGlobals||!jn.gsap&&jn||{}),uf.forEach(df)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},io=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),io=0,l=no},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,p,S){var v=p?function(y,T,E,w){m(y,T,E,w),u.remove(v)}:m;return u.remove(m),a[S?"unshift":"push"](v),yr(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u}(),yr=function(){return!io&&dn.wake()},oe={},Xy=/^[\d.\-M][\d.\-,\s]/,qy=/["']/g,Yy=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(qy,"").trim():+l,i=c.substr(a+1).trim();return e},Zy=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},$y=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Yy(e[1])]:Zy(t).split(",").map(Kd)):oe._CE&&Xy.test(t)?oe._CE("",t):n},mf=function(t){return function(e){return 1-t(1-e)}},gf=function s(t,e){for(var n=t._first,i;n;)n instanceof Ye?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},_s=function(t,e){return t&&(Ie(t)?t:oe[t]||$y(t))||e},Ms=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return an(t,function(a){oe[a]=Sn[a]=r,oe[o=a.toLowerCase()]=n;for(var c in r)oe[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=oe[a+"."+c]=r[c]}),r},_f=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ql=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/nh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Ey((h-o)*r)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:_f(a);return r=nh/r,c.config=function(l,h){return s(t,l,h)},c},jl=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:_f(n);return i.config=function(r){return s(t,r)},i};an("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Ms(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Ms("Elastic",Ql("in"),Ql("out"),Ql());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Ms("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ms("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ms("Circ",function(s){return-(Gd(1-s*s)-1)});Ms("Sine",function(s){return s===1?1:-Sy(s*vy)+1});Ms("Back",jl("in"),jl("out"),jl());oe.SteppedEase=oe.steps=Sn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-ve;return function(a){return((i*ro(0,o,a)|0)+r)*n}}};mr.ease=oe["quad.out"];an("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return yh+=s+","+s+"Params,"});var bh=function(t,e){this.id=My++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Mh,this.set=e?e.getSetter:ba},so=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,xr(this,+e.duration,1,1),this.data=e.data,Ae&&(this._ctx=Ae,Ae.data.push(this)),io||dn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,xr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(yr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ea(this,n),!r._dp||r.parent||tf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ti(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ve||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?_r(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ve?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?_a(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ve?0:this._rts,this.totalTime(ro(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Sa(this),Py(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(yr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ve&&(this._tTime-=ve)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ti(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(fn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_a(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Ty);var i=Ze;return Ze=n,Sh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ze=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Bd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(In(this,n),fn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,fn(i)),this._dur||(this._zTime=-ve),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ve:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ve,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ve)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=Ie(n)?n:Qd,a=function(){var l=i.then;i.then=null,Ie(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Jr(this)},s}();En(so.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ve,_prom:0,_ps:!1,_rts:1});var Ye=function(s){Vd(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=fn(n.sortChildren),Ce&&ti(n.parent||Ce,xi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&ef(xi(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return jr(0,arguments,this),this},e.from=function(i,r,o){return jr(1,arguments,this),this},e.fromTo=function(i,r,o,a){return jr(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Qr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Le(i,r,In(this,o),1),this},e.call=function(i,r,o){return ti(this,Le.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,c,l,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=h,o.parent=this,new Le(i,o,In(this,c)),this},e.staggerFrom=function(i,r,o,a,c,l,h){return o.runBackwards=1,Qr(o).immediateRender=fn(o.immediateRender),this.staggerTo(i,r,o,a,c,l,h)},e.staggerFromTo=function(i,r,o,a,c,l,h,u){return a.startAt=o,Qr(a).immediateRender=fn(a.immediateRender),this.staggerTo(i,r,a,c,l,h,u)},e.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:Fe(i),u=this._zTime<0!=i<0&&(this._initted||!l),d,f,_,g,m,p,S,v,y,T,E,w;if(this!==Ce&&h>c&&i>=0&&(h=c),h!==this._tTime||o||u){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),d=h,y=this._start,v=this._ts,p=!v,u&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=Fe(h%m),h===c?(g=this._repeat,d=l):(T=Fe(h/m),g=~~T,g&&g===T&&(d=l,g--),d>l&&(d=l)),T=_r(this._tTime,m),!a&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),E&&g&1&&(d=l-d,w=1),g!==T&&!this._lock){var R=E&&T&1,M=R===(E&&g&1);if(g<T&&(R=!R),a=R?0:h%l?l:h,this._lock=1,this.render(a||(w?0:Fe(g*m)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&Mn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,M&&(this._lock=2,a=R?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;gf(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Uy(this,Fe(a),Fe(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!r&&!T&&(Mn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!p){S=0,_&&(h+=this._zTime=-ve);break}}f=_}else{f=this._last;for(var x=i<0?i:d;f;){if(_=f._prev,(f._act||x<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,r,o||Ze&&Sh(f)),d!==this._time||!this._ts&&!p){S=0,_&&(h+=this._zTime=x?-ve:ve);break}}f=_}}if(S&&!r&&(this.pause(),S.render(d>=a?0:-ve)._zTime=d>=a?1:-1,this._ts))return this._start=y,Sa(this),this.render(i,r,o);this._onUpdate&&!r&&Mn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Wi(this,1),!r&&!(i<0&&!a)&&(h||a||!c)&&(Mn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(vi(r)||(r=In(this,r,i)),!(i instanceof so)){if(tn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(He(i))return this.addLabel(i,r);if(Ie(i))i=Le.delayedCall(0,i);else return this}return this!==i?ti(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Dn);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Le?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return He(i)?this.removeLabel(i):Ie(i)?this.killTweensOf(i):(i.parent===this&&Ma(this,i),i===this._recent&&(this._recent=this._last),gs(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Fe(dn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=In(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Le.delayedCall(0,r||no,o);return a.data="isPause",this._hasPause=1,ti(this,a,In(this,i))},e.removePause=function(i){var r=this._first;for(i=In(this,i);r;)r._start===i&&r.data==="isPause"&&Wi(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Hi!==a[c]&&a[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Ln(i),c=this._first,l=vi(r),h;c;)c instanceof Le?Ay(c._targets,a)&&(l?(!Hi||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(h=c.getTweensOf(a,r)).length&&o.push.apply(o,h),c=c._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=In(o,i),c=r,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,f,_=Le.to(o,En({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||ve,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());_._dur!==m&&xr(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,En({startAt:{time:In(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),zd(this,In(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),zd(this,In(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ve)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return gs(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),gs(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,c=Dn,l,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,ti(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;xr(o,o===Ce&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ce._ts&&(Jd(Ce,_a(i,Ce)),$d=dn.frame),dn.frame>=Nd){Nd+=pn.autoSleep||120;var r=Ce._first;if((!r||!r._ts)&&pn.autoSleep&&dn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||dn.sleep()}}},t}(so);En(Ye.prototype,{_lock:0,_hasPause:0,_forcing:0});var Jy=function(t,e,n,i,r,o,a){var c=new cn(this._pt,t,e,0,1,Ch,null,r),l=0,h=0,u,d,f,_,g,m,p,S;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=vr(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),d=n.match($l)||[];u=$l.exec(i);)_=u[0],g=i.substring(l,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?vs(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},l=$l.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(gh.test(i)||p)&&(c.e=0),this._pt=c,c},wh=function(t,e,n,i,r,o,a,c,l,h){Ie(i)&&(i=i(r||0,t,o));var u=t[e],d=n!=="get"?n:Ie(u)?l?t[e.indexOf("set")||!Ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,f=Ie(u)?l?ev:vf:Rh,_;if(He(i)&&(~i.indexOf("random(")&&(i=vr(i)),i.charAt(1)==="="&&(_=vs(d,i)+($e(d)||0),(_||_===0)&&(i=_))),!h||d!==i||uh)return!isNaN(d*i)&&i!==""?(_=new cn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?iv:Mf,0,f),l&&(_.fp=l),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&va(e,i),Jy.call(this,t,e,d,i,f,c||pn.stringFilter,l))},Ky=function(t,e,n,i,r){if(Ie(t)&&(t=to(t,r,e,n,i)),!ei(t)||t.style&&t.nodeType||tn(t)||Wd(t))return He(t)?to(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=to(t[a],r,e,n,i);return o},Th=function(t,e,n,i,r,o){var a,c,l,h;if(un[t]&&(a=new un[t]).init(r,a.rawVars?e[t]:Ky(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new cn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==pr))for(l=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)l[a._props[h]]=c;return a},Hi,uh,Ah=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,S=p&&p.data==="nested"?p.vars.targets:m,v=t._overwrite==="auto"&&!fh,y=t.timeline,T,E,w,R,M,x,P,H,z,q,Z,F,rt;if(y&&(!d||!r)&&(r="none"),t._ease=_s(r,mr.ease),t._yEase=u?mf(_s(u===!0?r:u,mr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(H=m[0]?Gi(m[0]).harness:0,F=H&&i[H.prop],T=ga(i,xh),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?ua:wy),g._lazy=0),o){if(Wi(t._startAt=Le.set(m,En({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&fn(c),startAt:null,delay:0,onUpdate:l&&function(){return Mn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ze||!a&&!f)&&t._startAt.revert(ua),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),w=En({overwrite:!1,data:"isFromStart",lazy:a&&!g&&fn(c),immediateRender:a,stagger:0,parent:p},T),F&&(w[H.prop]=F),Wi(t._startAt=Le.set(m,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ze?t._startAt.revert(ua):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,ve,ve);else if(!e)return}for(t._pt=t._ptCache=0,c=_&&fn(c)||c&&!_,E=0;E<m.length;E++){if(M=m[E],P=M._gsap||vh(m)[E]._gsap,t._ptLookup[E]=q={},rh[P.id]&&Vi.length&&ma(),Z=S===m?E:S.indexOf(M),H&&(z=new H).init(M,F||T,t,Z,S)!==!1&&(t._pt=R=new cn(t._pt,M,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(X){q[X]=R}),z.priority&&(x=1)),!H||F)for(w in T)un[w]&&(z=Th(w,T,t,Z,M,S))?z.priority&&(x=1):q[w]=R=wh.call(t,M,w,"get",T[w],Z,S,0,i.stringFilter);t._op&&t._op[E]&&t.kill(M,t._op[E]),v&&t._pt&&(Hi=t,Ce.killTweensOf(M,q,t.globalTime(e)),rt=!t.parent,Hi=0),t._pt&&c&&(rh[P.id]=1)}x&&Ih(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!rt,d&&e<=0&&y.render(Dn,!0,!0)},Qy=function(t,e,n,i,r,o,a,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return uh=1,t.vars[e]="+=0",Ah(t,a),uh=0,c?eo(e+" not eligible for reset"):1;l.push(h)}for(f=l.length;f--;)u=l[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=De(n)+$e(u.e)),u.b&&(u.b=h.s+$e(u.b))},jy=function(t,e){var n=t[0]?Gi(t[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return e;r=gr({},e);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},tv=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(tn(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},to=function(t,e,n,i,r){return Ie(t)?t.call(e,n,i,r):He(t)&&~t.indexOf("random(")?vr(t):t},xf=yh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",yf={};an(xf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return yf[s]=1});var Le=function(s){Vd(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Qr(i))||this;var c=a.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,f=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,S=i.parent||Ce,v=(tn(n)||Wd(n)?vi(n[0]):"length"in i)?[n]:Ln(n),y,T,E,w,R,M,x,P;if(a._targets=v.length?vh(v):eo("GSAP target "+n+" not found. https://gsap.com",!pn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||ha(l)||ha(h)){if(i=a.vars,y=a.timeline=new Ye({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:v}),y.kill(),y.parent=y._dp=xi(a),y._start=0,d||ha(l)||ha(h)){if(w=v.length,x=d&&of(d),ei(d))for(R in d)~xf.indexOf(R)&&(P||(P={}),P[R]=d[R]);for(T=0;T<w;T++)E=ga(i,yf),E.stagger=0,p&&(E.yoyoEase=p),P&&gr(E,P),M=v[T],E.duration=+to(l,xi(a),T,M,v),E.delay=(+to(h,xi(a),T,M,v)||0)-a._delay,!d&&w===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),y.to(M,E,x?x(T,M,v):0),y._ease=oe.none;y.duration()?l=h=0:a.timeline=0}else if(_){Qr(En(y.vars.defaults,{ease:"none"})),y._ease=_s(_.ease||i.ease||"none");var H=0,z,q,Z;if(tn(_))_.forEach(function(F){return y.to(v,F,">")}),y.duration();else{E={};for(R in _)R==="ease"||R==="easeEach"||tv(R,_[R],E,_.easeEach);for(R in E)for(z=E[R].sort(function(F,rt){return F.t-rt.t}),H=0,T=0;T<z.length;T++)q=z[T],Z={ease:q.e,duration:(q.t-(T?z[T-1].t:0))/100*l},Z[R]=q.v,y.to(v,Z,H),H+=Z.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||a.duration(l=y.duration())}else a.timeline=0;return f===!0&&!fh&&(Hi=xi(a),Ce.killTweensOf(v),Hi=0),ti(S,xi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!l&&!_&&a._start===Fe(S._time)&&fn(u)&&Iy(xi(a))&&S.data!=="nested")&&(a._tTime=-ve,a.render(Math.max(0,-h)||0)),m&&ef(xi(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-ve&&!h?c:i<ve?0:i,d,f,_,g,m,p,S,v,y;if(!l)Ly(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,v=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(d=Fe(u%g),u===c?(_=this._repeat,d=l):(m=Fe(u/g),_=~~m,_&&_===m?(d=l,_--):d>l&&(d=l)),p=this._yoyo&&_&1,p&&(y=this._yEase,d=l-d),m=_r(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(v&&this._yEase&&gf(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Fe(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(nf(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(d/l),this._from&&(this.ratio=S=1-S),!a&&u&&!r&&!m&&(Mn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&oh(this,i,r,o),Mn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Mn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&oh(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Wi(this,1),!r&&!(h&&!a)&&(u||a||p)&&(Mn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,c){io||dn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ah(this,l),h=this._ease(l/this._dur),Qy(this,i,r,o,a,h,l,c)?this.resetTo(i,r,o,a,1):(Ea(this,0),this.parent||jd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Jr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ze),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Hi&&Hi.vars.overwrite!==!0)._first||Jr(this),this.parent&&o!==this.timeline.totalDuration()&&xr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?Ln(i):a,l=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!r||r==="all")&&Cy(a,c))return r==="all"&&(this._pt=0),Jr(this);for(u=this._op=this._op||[],r!=="all"&&(He(r)&&(g={},an(r,function(S){return g[S]=1}),r=g),r=jy(a,r)),p=a.length;p--;)if(~c.indexOf(a[p])){d=l[p],r==="all"?(u[p]=r,_=d,f={}):(f=u[p]=u[p]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ma(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&Jr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return jr(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return jr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Ce.killTweensOf(i,r,o)},t}(so);En(Le.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});an("staggerTo,staggerFrom,staggerFromTo",function(s){Le[s]=function(){var t=new Ye,e=ch.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Rh=function(t,e,n){return t[e]=n},vf=function(t,e,n){return t[e](n)},ev=function(t,e,n,i){return t[e](i.fp,n)},nv=function(t,e,n){return t.setAttribute(e,n)},ba=function(t,e){return Ie(t[e])?vf:ya(t[e])&&t.setAttribute?nv:Rh},Mf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},iv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ch=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ph=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},sv=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},rv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ma(this,e,"_pt"):e.dep||(n=1),e=i;return!n},ov=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Ih=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},cn=function(){function s(e,n,i,r,o,a,c,l,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Mf,this.d=c||this,this.set=l||Rh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=ov,this.m=n,this.mt=r,this.tween=i},s}();an(yh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return xh[s]=1});Sn.TweenMax=Sn.TweenLite=Le;Sn.TimelineLite=Sn.TimelineMax=Ye;Ce=new Ye({sortChildren:!1,defaults:mr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=Eh;var xs=[],fa={},av=[],Hd=0,cv=0,th=function(t){return(fa[t]||av).map(function(e){return e()})},dh=function(){var t=Date.now(),e=[];t-Hd>2&&(th("matchMediaInit"),xs.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=jn.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),th("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Hd=t,th("matchMedia"))},Sf=function(){function s(e,n){this.selector=n&&lh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=cv++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ie(n)&&(r=i,i=n,n=Ie);var o=this,a=function(){var l=Ae,h=o.selector,u;return l&&l!==o&&l.data.push(o),r&&(o.selector=lh(r)),Ae=o,u=i.apply(o,arguments),Ie(u)&&o._r.push(u),Ae=l,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ie?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},t.ignore=function(n){var i=Ae;Ae=null,n(this),Ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Le&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof Ye?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Le)&&l.revert&&l.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=xs.length;o--;)xs[o].id===this.id&&xs.splice(o,1)},t.revert=function(n){this.kill(n||{})},s}(),lv=function(){function s(e){this.contexts=[],this.scope=e,Ae&&Ae.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){ei(n)||(n={matches:n});var o=new Sf(0,r||this.scope),a=o.conditions={},c,l,h;Ae&&!o.selector&&(o.selector=Ae.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?h=1:(c=jn.matchMedia(n[l]),c&&(xs.indexOf(o)<0&&xs.push(o),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener(dh):c.addEventListener("change",dh)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),xa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return df(i)})},timeline:function(t){return new Ye(t)},getTweensOf:function(t,e){return Ce.getTweensOf(t,e)},getProperty:function(t,e,n,i){He(t)&&(t=Ln(t)[0]);var r=Gi(t||{}).get,o=n?Qd:Kd;return n==="native"&&(n=""),t&&(e?o((un[e]&&un[e].get||r)(t,e,n,i)):function(a,c,l){return o((un[a]&&un[a].get||r)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=Ln(t),t.length>1){var i=t.map(function(h){return en.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=un[e],a=Gi(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(h){var u=new o;pr._pt=0,u.init(t,n?h+n:h,pr,0,[t]),u.render(1,u),pr._pt&&Ph(1,pr)}:a.set(t,c);return o?l:function(h){return l(t,c,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=en.to(t,En((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,l,h){return r.resetTo(e,c,l,h)};return o.tween=r,o},isTweening:function(t){return Ce.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=_s(t.ease,mr.ease)),Od(mr,t||{})},config:function(t){return Od(pn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!un[a]&&!Sn[a]&&eo(e+" effect requires "+a+" plugin.")}),Jl[e]=function(a,c,l){return n(Ln(a),En(c||{},r),l)},o&&(Ye.prototype[e]=function(a,c,l){return this.add(Jl[e](a,ei(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){oe[t]=_s(e)},parseEase:function(t,e){return arguments.length?_s(t,e):oe},getById:function(t){return Ce.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ye(t),i,r;for(n.smoothChildTiming=fn(t.smoothChildTiming),Ce.remove(n),n._dp=0,n._time=n._tTime=Ce._time,i=Ce._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Le&&i.vars.onComplete===i._targets[0]))&&ti(n,i,i._start-i._delay),i=r;return ti(Ce,n,0),n},context:function(t,e){return t?new Sf(t,e):Ae},matchMedia:function(t){return new lv(t)},matchMediaRefresh:function(){return xs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||dh()},addEventListener:function(t,e){var n=fa[t]||(fa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=fa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Hy,wrapYoyo:Vy,distribute:of,random:cf,snap:af,normalize:ky,getUnit:$e,clamp:Oy,splitColor:ff,toArray:Ln,selector:lh,mapRange:hf,pipe:By,unitize:zy,interpolate:Gy,shuffle:rf},install:Yd,effects:Jl,ticker:dn,updateRoot:Ye.updateRoot,plugins:un,globalTimeline:Ce,core:{PropTween:cn,globals:Zd,Tween:Le,Timeline:Ye,Animation:so,getCache:Gi,_removeLinkedListItem:Ma,reverting:function(){return Ze},context:function(t){return t&&Ae&&(Ae.data.push(t),t._ctx=Ae),Ae},suppressOverwrites:function(t){return fh=t}}};an("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return xa[s]=Le[s]});dn.add(Ye.updateRoot);pr=xa.to({},{duration:0});var hv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},uv=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=hv(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},eh=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(He(r)&&(c={},an(r,function(h){return c[h]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}uv(a,r)}}}},en=xa.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Ze?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},eh("roundProps",hh),eh("modifiers"),eh("snap",af))||xa;Le.version=Ye.version=en.version="3.13.0";qd=1;ph()&&yr();var dv=oe.Power0,fv=oe.Power1,pv=oe.Power2,mv=oe.Power3,gv=oe.Power4,_v=oe.Linear,xv=oe.Quad,yv=oe.Cubic,vv=oe.Quart,Mv=oe.Quint,Sv=oe.Strong,Ev=oe.Elastic,bv=oe.Back,wv=oe.SteppedEase,Tv=oe.Bounce,Av=oe.Sine,Rv=oe.Expo,Cv=oe.Circ;var Ef,qi,Sr,Fh,ws,Pv,bf,Bh,Iv=function(){return typeof window<"u"},Si={},bs=180/Math.PI,Er=Math.PI/180,Mr=Math.atan2,wf=1e8,zh=/([A-Z])/g,Dv=/(left|right|width|margin|padding|x)/i,Lv=/[\s,\(]\S/,ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Uv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Nv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ov=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Lf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Uf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Fv=function(t,e,n){return t.style[e]=n},Bv=function(t,e,n){return t.style.setProperty(e,n)},zv=function(t,e,n){return t._gsap[e]=n},kv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Hv=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Vv=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Pe="transform",mn=Pe+"Origin",Gv=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in Si&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ni[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Mi(i,a)}):this.tfm[t]=o.x?o[t]:Mi(i,t),t===mn&&(this.tfm.zOrigin=o.zOrigin);else return ni.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Pe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(mn,e,"")),t=Pe}(r||e)&&this.props.push(t,e,r[t])},Nf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Wv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(zh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Bh(),(!r||!r.isStart)&&!n[Pe]&&(Nf(n),i.zOrigin&&n[mn]&&(n[mn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Of=function(t,e){var n={target:t,props:[],revert:Wv,save:Gv};return t._gsap||en.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Ff,Uh=function(t,e){var n=qi.createElementNS?qi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):qi.createElement(t);return n&&n.style?n:qi.createElement(t)},Un=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(zh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,br(e)||e,1)||""},Tf="O,Moz,ms,Ms,Webkit".split(","),br=function(t,e,n){var i=e||ws,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Tf[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Tf[o]:"")+t},Nh=function(){Iv()&&window.document&&(Ef=window,qi=Ef.document,Sr=qi.documentElement,ws=Uh("div")||{style:{}},Pv=Uh("div"),Pe=br(Pe),mn=Pe+"Origin",ws.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ff=!!br("perspective"),Bh=en.core.reverting,Fh=1)},Af=function(t){var e=t.ownerSVGElement,n=Uh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Sr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Sr.removeChild(n),r},Rf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Bf=function(t){var e,n;try{e=t.getBBox()}catch{e=Af(t),n=1}return e&&(e.width||e.height)||n||(e=Af(t)),e&&!e.width&&!e.x&&!e.y?{x:+Rf(t,["x","cx","x1"])||0,y:+Rf(t,["y","cy","y1"])||0,width:0,height:0}:e},zf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Bf(t))},Ts=function(t,e){if(e){var n=t.style,i;e in Si&&e!==mn&&(e=Pe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(zh,"-$1").toLowerCase())):n.removeAttribute(e)}},Yi=function(t,e,n,i,r,o){var a=new cn(t._pt,e,n,0,1,o?Uf:Lf);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Cf={deg:1,rad:1,turn:1},Xv={grid:1,flex:1},Zi=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=ws.style,c=Dv.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,m,p;if(i===o||!r||Cf[i]||Cf[o])return r;if(o!=="px"&&!d&&(r=s(t,e,n,"px")),p=t.getCTM&&zf(t),(f||o==="%")&&(Si[e]||~e.indexOf("adius")))return _=p?t.getBBox()[c?"width":"height"]:t[h],De(f?r/_*u:r/100*_);if(a[c?"width":"height"]=u+(d?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===qi||!g.appendChild)&&(g=qi.body),m=g._gsap,m&&f&&m.width&&c&&m.time===dn.time&&!m.uncache)return De(r/m.width*u);if(f&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+i,_=t[h],S?t.style[e]=S:Ts(t,e)}else(f||o==="%")&&!Xv[Un(g,"display")]&&(a.position=Un(t,"position")),g===t&&(a.position="static"),g.appendChild(ws),_=ws[h],g.removeChild(ws),a.position="absolute";return c&&f&&(m=Gi(g),m.time=dn.time,m.width=g[h]),De(d?_*r/u:_&&r?u/_*r:0)},Mi=function(t,e,n,i){var r;return Fh||Nh(),e in ni&&e!=="transform"&&(e=ni[e],~e.indexOf(",")&&(e=e.split(",")[0])),Si[e]&&e!=="transform"?(r=co(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Ta(Un(t,mn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=wa[e]&&wa[e](t,e,n)||Un(t,e)||Mh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Zi(t,e,r,n)+n:r},qv=function(t,e,n,i){if(!n||n==="none"){var r=br(e,t,1),o=r&&Un(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Un(t,"borderTopColor"))}var a=new cn(this._pt,t.style,e,0,1,Ch),c=0,l=0,h,u,d,f,_,g,m,p,S,v,y,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Un(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Un(t,e)||i,g?t.style[e]=g:Ts(t,e)),h=[n,i],Eh(h),n=h[0],i=h[1],d=n.match(ys)||[],T=i.match(ys)||[],T.length){for(;u=ys.exec(i);)m=u[0],S=i.substring(c,u.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=d[l++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),m.charAt(1)==="="&&(m=vs(f,m)+y),p=parseFloat(m),v=m.substr((p+"").length),c=ys.lastIndex-v.length,v||(v=v||pn.units[e]||y,c===i.length&&(i+=v,a.e+=v)),y!==v&&(f=Zi(t,e,g,v)||0),a._pt={_next:a._pt,p:S||l===1?S:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?Uf:Lf;return gh.test(i)&&(a.e=0),this._pt=a,a},Pf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Yv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Pf[n]||n,e[1]=Pf[i]||i,e.join(" ")},Zv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],Si[a]&&(c=1,a=a==="transformOrigin"?mn:Pe),Ts(n,a);c&&(Ts(n,Pe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",co(n,1),o.uncache=1,Nf(i)))}},wa={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new cn(t._pt,e,n,0,0,Zv);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},ao=[1,0,0,1,0,0],kf={},Hf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},If=function(t){var e=Un(t,Pe);return Hf(e)?ao:e.substr(7).match(mh).map(De)},kh=function(t,e){var n=t._gsap||Gi(t),i=t.style,r=If(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?ao:r):(r===ao&&!t.offsetParent&&t!==Sr&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,a=t.nextElementSibling,Sr.appendChild(t)),r=If(t),c?i.display=c:Ts(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):Sr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Oh=function(t,e,n,i,r,o){var a=t._gsap,c=r||kh(t,!0),l=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=c[0],_=c[1],g=c[2],m=c[3],p=c[4],S=c[5],v=e.split(" "),y=parseFloat(v[0])||0,T=parseFloat(v[1])||0,E,w,R,M;n?c!==ao&&(w=f*m-_*g)&&(R=y*(m/w)+T*(-g/w)+(g*S-m*p)/w,M=y*(-_/w)+T*(f/w)-(f*S-_*p)/w,y=R,T=M):(E=Bf(t),y=E.x+(~v[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(v[1]||v[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&a.smooth?(p=y-l,S=T-h,a.xOffset=u+(p*f+S*g)-p,a.yOffset=d+(p*_+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[mn]="0px 0px",o&&(Yi(o,a,"xOrigin",l,y),Yi(o,a,"yOrigin",h,T),Yi(o,a,"xOffset",u,a.xOffset),Yi(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},co=function(t,e){var n=t._gsap||new bh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),l=Un(t,mn)||"0",h,u,d,f,_,g,m,p,S,v,y,T,E,w,R,M,x,P,H,z,q,Z,F,rt,X,xt,nt,pt,Tt,W,U,B;return h=u=d=g=m=p=S=v=y=0,f=_=1,n.svg=!!(t.getCTM&&zf(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Pe]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Pe]!=="none"?c[Pe]:"")),i.scale=i.rotate=i.translate="none"),w=kh(t,n.svg),n.svg&&(n.uncache?(X=t.getBBox(),l=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",rt=""):rt=!e&&t.getAttribute("data-svg-origin"),Oh(t,rt||l,!!rt||n.originIsAbsolute,n.smooth!==!1,w)),T=n.xOrigin||0,E=n.yOrigin||0,w!==ao&&(P=w[0],H=w[1],z=w[2],q=w[3],h=Z=w[4],u=F=w[5],w.length===6?(f=Math.sqrt(P*P+H*H),_=Math.sqrt(q*q+z*z),g=P||H?Mr(H,P)*bs:0,S=z||q?Mr(z,q)*bs+g:0,S&&(_*=Math.abs(Math.cos(S*Er))),n.svg&&(h-=T-(T*P+E*z),u-=E-(T*H+E*q))):(B=w[6],W=w[7],nt=w[8],pt=w[9],Tt=w[10],U=w[11],h=w[12],u=w[13],d=w[14],R=Mr(B,Tt),m=R*bs,R&&(M=Math.cos(-R),x=Math.sin(-R),rt=Z*M+nt*x,X=F*M+pt*x,xt=B*M+Tt*x,nt=Z*-x+nt*M,pt=F*-x+pt*M,Tt=B*-x+Tt*M,U=W*-x+U*M,Z=rt,F=X,B=xt),R=Mr(-z,Tt),p=R*bs,R&&(M=Math.cos(-R),x=Math.sin(-R),rt=P*M-nt*x,X=H*M-pt*x,xt=z*M-Tt*x,U=q*x+U*M,P=rt,H=X,z=xt),R=Mr(H,P),g=R*bs,R&&(M=Math.cos(R),x=Math.sin(R),rt=P*M+H*x,X=Z*M+F*x,H=H*M-P*x,F=F*M-Z*x,P=rt,Z=X),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=De(Math.sqrt(P*P+H*H+z*z)),_=De(Math.sqrt(F*F+B*B)),R=Mr(Z,F),S=Math.abs(R)>2e-4?R*bs:0,y=U?1/(U<0?-U:U):0),n.svg&&(rt=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Hf(Un(t,Pe)),rt&&t.setAttribute("transform",rt))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(f*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=De(f),n.scaleY=De(_),n.rotation=De(g)+a,n.rotationX=De(m)+a,n.rotationY=De(p)+a,n.skewX=S+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[mn]=Ta(l)),n.xOffset=n.yOffset=0,n.force3D=pn.force3D,n.renderTransform=n.svg?Jv:Ff?Vf:$v,n.uncache=0,n},Ta=function(t){return(t=t.split(" "))[0]+" "+t[1]},Dh=function(t,e,n){var i=$e(e);return De(parseFloat(e)+parseFloat(Zi(t,"x",n+"px",i)))+i},$v=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Vf(t,e)},Ss="0deg",oo="0px",Es=") ",Vf=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,v=n.zOrigin,y="",T=p==="auto"&&t&&t!==1||p===!0;if(v&&(u!==Ss||h!==Ss)){var E=parseFloat(h)*Er,w=Math.sin(E),R=Math.cos(E),M;E=parseFloat(u)*Er,M=Math.cos(E),o=Dh(S,o,w*M*-v),a=Dh(S,a,-Math.sin(E)*-v),c=Dh(S,c,R*M*-v+v)}m!==oo&&(y+="perspective("+m+Es),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(T||o!==oo||a!==oo||c!==oo)&&(y+=c!==oo||T?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Es),l!==Ss&&(y+="rotate("+l+Es),h!==Ss&&(y+="rotateY("+h+Es),u!==Ss&&(y+="rotateX("+u+Es),(d!==Ss||f!==Ss)&&(y+="skew("+d+", "+f+Es),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Es),S.style[Pe]=y||"translate(0, 0)"},Jv=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,v=parseFloat(o),y=parseFloat(a),T,E,w,R,M;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Er,l*=Er,T=Math.cos(c)*u,E=Math.sin(c)*u,w=Math.sin(c-l)*-d,R=Math.cos(c-l)*d,l&&(h*=Er,M=Math.tan(l-h),M=Math.sqrt(1+M*M),w*=M,R*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),T*=M,E*=M)),T=De(T),E=De(E),w=De(w),R=De(R)):(T=u,R=d,E=w=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Zi(f,"x",o,"px"),y=Zi(f,"y",a,"px")),(_||g||m||p)&&(v=De(v+_-(_*T+g*w)+m),y=De(y+g-(_*E+g*R)+p)),(i||r)&&(M=f.getBBox(),v=De(v+i/100*M.width),y=De(y+r/100*M.height)),M="matrix("+T+","+E+","+w+","+R+","+v+","+y+")",f.setAttribute("transform",M),S&&(f.style[Pe]=M)},Kv=function(t,e,n,i,r){var o=360,a=He(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?bs:1),l=c-i,h=i+l+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),u==="cw"&&l<0?l=(l+o*wf)%o-~~(l/o)*o:u==="ccw"&&l>0&&(l=(l-o*wf)%o-~~(l/o)*o)),t._pt=d=new cn(t._pt,e,n,i,l,Uv),d.e=h,d.u="deg",t._props.push(n),d},Df=function(t,e){for(var n in e)t[n]=e[n];return t},Qv=function(t,e,n){var i=Df({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,h,u,d,f,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Pe]=e,a=co(n,1),Ts(n,Pe),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Pe],o[Pe]=e,a=co(n,1),o[Pe]=l);for(c in Si)l=i[c],h=a[c],l!==h&&r.indexOf(c)<0&&(f=$e(l),_=$e(h),u=f!==_?Zi(n,c,l,_):parseFloat(l),d=parseFloat(h),t._pt=new cn(t._pt,a,c,u,d-u,Lh),t._pt.u=_||0,t._props.push(c));Df(a,i)};an("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});wa[t>1?"border"+s:s]=function(a,c,l,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return Mi(a,_,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(c,f,u)}});var Hh={name:"css",register:Nh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,c=n.vars.startAt,l,h,u,d,f,_,g,m,p,S,v,y,T,E,w,R;Fh||Nh(),this.styles=this.styles||Of(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(un[g]&&Th(g,e,n,i,t,r)))){if(f=typeof h,_=wa[g],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=vr(h)),_)_(this,t,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",yi.lastIndex=0,yi.test(l)||(m=$e(l),p=$e(h)),p?m!==p&&(l=Zi(t,g,l,p)+p):m&&(h+=m),this.add(a,"setProperty",l,h,i,r,0,0,g),o.push(g),R.push(g,0,a[g]);else if(f!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,t,r):c[g],He(l)&&~l.indexOf("random(")&&(l=vr(l)),$e(l+"")||l==="auto"||(l+=pn.units[g]||$e(Mi(t,g))||""),(l+"").charAt(1)==="="&&(l=Mi(t,g))):l=Mi(t,g),d=parseFloat(l),S=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),g in ni&&(g==="autoAlpha"&&(d===1&&Mi(t,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,a.visibility),Yi(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=ni[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Si,v){if(this.styles.save(g),f==="string"&&h.substring(0,6)==="var(--"&&(h=Un(t,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),y||(T=t._gsap,T.renderTransform&&!e.parseTransform||co(t,e.parseTransform),E=e.smoothOrigin!==!1&&T.smooth,y=this._pt=new cn(this._pt,a,Pe,0,1,T.renderTransform,T,0,-1),y.dep=1),g==="scale")this._pt=new cn(this._pt,T,"scaleY",T.scaleY,(S?vs(T.scaleY,S+u):u)-T.scaleY||0,Lh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(mn,0,a[mn]),h=Yv(h),T.svg?Oh(t,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==T.zOrigin&&Yi(this,T,"zOrigin",T.zOrigin,p),Yi(this,a,g,Ta(l),Ta(h)));continue}else if(g==="svgOrigin"){Oh(t,h,1,E,0,this);continue}else if(g in kf){Kv(this,T,g,d,S?vs(d,S+h):h);continue}else if(g==="smoothOrigin"){Yi(this,T,"smooth",T.smooth,h);continue}else if(g==="force3D"){T[g]=h;continue}else if(g==="transform"){Qv(this,h,t);continue}}else g in a||(g=br(g)||g);if(v||(u||u===0)&&(d||d===0)&&!Lv.test(h)&&g in a)m=(l+"").substr((d+"").length),u||(u=0),p=$e(h)||(g in pn.units?pn.units[g]:m),m!==p&&(d=Zi(t,g,l,p)),this._pt=new cn(this._pt,v?T:a,g,d,(S?vs(d,S+u):u)-d,!v&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?Ov:Lh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=Nv);else if(g in a)qv.call(this,t,g,l,S?S+h:h);else if(g in t)this.add(t,g,l||t[g],S?S+h:h,i,r);else if(g!=="parseTransform"){va(g,h);continue}v||(g in a?R.push(g,0,a[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,l||t[g])),o.push(g)}}w&&Ih(this)},render:function(t,e){if(e.tween._time||!Bh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Mi,aliases:ni,getSetter:function(t,e,n){var i=ni[e];return i&&i.indexOf(",")<0&&(e=i),e in Si&&e!==mn&&(t._gsap.x||Mi(t,"x"))?n&&bf===n?e==="scale"?kv:zv:(bf=n||{})&&(e==="scale"?Hv:Vv):t.style&&!ya(t.style[e])?Fv:~e.indexOf("-")?Bv:ba(t,e)},core:{_removeProperty:Ts,_getMatrix:kh}};en.utils.checkPrefix=br;en.core.getStyleSaver=Of;(function(s,t,e,n){var i=an(s+","+t+","+e,function(r){Si[r]=1});an(t,function(r){pn.units[r]="deg",kf[r]=1}),ni[i[13]]=s+","+t,an(n,function(r){var o=r.split(":");ni[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");an("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){pn.units[s]="px"});en.registerPlugin(Hh);var Aa=en.registerPlugin(Hh)||en,V1=Aa.core.Tween;var W1=Math.PI*2,lo=(s,t=0,e=1)=>Math.min(e,Math.max(t,s));function Vh(s){let t=s*s*s,e=[],n=[],i=[],r=[],o=[],a=[],c=new Set,l=(h,u,d)=>{let f=[h,u,d].join(":");c.has(f)||(c.add(f),a.push([h,u,d]))};for(let h=-5;h<=5;h++)for(let u=-2;u<=2;u++)l(h*.4,.9,u*.4);for(let h of[-1.6,1.6])for(let u of[-.4,.4])for(let d=-3;d<=1;d++)l(h,d*.4,u);for(let h of[-2.4,2.4])for(let u=-2;u<=3;u++)for(let d of[-.8,0,.8])l(h,u*.4,d);for(let h of[-2.8,2.8])for(let u=-2;u<=1;u++)for(let d of[-.4,.4])l(h,u*.4,d);for(let h=0;h<t;h++){let u=h%s,d=Math.floor(h/s)%s,f=Math.floor(h/(s*s)),_=[(u-(s-1)/2)*1.65/s,(d-(s-1)/2)*1.65/s,(f-(s-1)/2)*1.65/s];e.push(_);let g=h*2.399963229728653,m=1.25+h*37%17/17*.95;n.push([Math.cos(g)*m,Math.sin(h*1.7)*1.45,Math.sin(g)*m*.75]),i.push([Math.cos(g)*1.75,Math.sin(h*1.7)*1.15,Math.sin(g)*1.3]);let p=1-(h+.5)/t*2,S=Math.sqrt(1-p*p);r.push([Math.cos(g)*S*1.6,p*1.6,Math.sin(g)*S*1.6]),o.push(a[Math.round(h/(t-1)*(a.length-1))])}return{count:t,n:s,formations:[e,n,i,r,o,e]}}function Gf(s){let t=[0,1,1.15,2,3,4],e=0;for(;e<t.length-2&&s>t[e+1];)e++;return{from:e,to:e+1,weight:lo((s-t[e])/(t[e+1]-t[e]))}}function Wf(s){if(s<=0||s>=4)return 0;let t=lo(s/.3),e=1-lo((s-3.72)/.28);return Math.min(t,e)}function Xf(s){let t=lo(s)*5,e=Math.min(4,Math.floor(t)),n=lo((t-e)/.38),i=n*n*(3-2*n),r=[0,1,1.15,2,3,4];return r[e]+(r[e+1]-r[e])*i}var Ra=s=>Math.max(0,Math.min(1,s)),$i=["inicio","problema","diagnostico","transformacao","solucoes","projetos","processo","inteligencia","sobre","resultado","contato"];function qf(){let s={cx:4.5,cy:3.3,cz:8.4,tx:0,ty:-.1,tz:-.1,actorX:0,actorY:0,actorZ:0,yaw:.18,actorScale:1,pose:1,shape:0,order:.52,props:1,panel:1,path:1,wire:0,network:0,portal:0,opacity:1,screenX:.74,screenY:.52,mobileX:.49,mobileY:.76,mobileDistance:1.4,light:1.1,walk:0,walkAmp:.25},t={inicio:{...s},problema:{...s,cx:3.4,cy:2.6,cz:8.8,actorX:-.35,yaw:.25,order:0,path:.2,mobileY:.69,mobileDistance:1.35},diagnostico:{...s,cx:2.4,cy:2.2,cz:8.8,yaw:.2,order:.25,props:.28,path:.15,wire:1,pose:.1,mobileY:.76,mobileDistance:1.55,light:1.35,walkAmp:0},transformacao:{...s,cx:2.3,cy:2.1,cz:12,actorY:.4,props:.15,order:.7,path:.5,pose:1,wire:0,screenX:.73,screenY:.5,mobileY:.65,mobileDistance:1.55,light:1.2,walkAmp:0},solucoes:{...s,opacity:0,props:0,walkAmp:0},projetos:{...s,opacity:0,props:0,walkAmp:0},processo:{...s,cx:0,cy:1.8,cz:12,actorScale:.6,props:0,path:0,screenX:.14,screenY:.54,mobileX:.87,mobileY:.44,mobileDistance:1.1,walkAmp:1},inteligencia:{...s,cx:3.2,cy:3.6,cz:11.5,actorScale:.62,pose:0,props:0,path:0,network:1,screenX:.74,screenY:.53,mobileY:.72,mobileDistance:1.55,light:1.25,walkAmp:0},sobre:{...s,opacity:0,props:0,walkAmp:0},resultado:{...s,cx:4.5,cy:4,cz:10.2,order:1,yaw:0,path:1,mobileY:.73,mobileDistance:1.4,walkAmp:0},contato:{...s,cx:5.2,cy:3.5,cz:11,tx:1,ty:.1,tz:-1,actorX:-.4,actorZ:.2,order:1,props:.3,path:1,portal:1,screenX:.77,mobileY:.73,mobileDistance:1.5,light:1.2,walkAmp:.6}};for(let a of $i)a!=="inicio"&&(t[a].panel=0);let e={...s},n={time:0},i=Aa.timeline({paused:!0}).to(n,{time:$i.length,duration:$i.length,ease:"none"}),r=Aa.parseEase("power2.inOut");function o(a,c){let l=Math.max(0,$i.indexOf(a)),h=Ra(c);i.time(l+h,!0);let u=Ra(n.time-l),d=t[$i[l]],f={...t[$i[Math.max(0,l-1)]]};$i[l-1]==="processo"&&(f.screenX=.86,f.mobileY=.79);let _=d.opacity===0?.08:$i[l]==="transformacao"?.1:.28,g=l===0?1:r(Ra(u/_));for(let m of Object.keys(d))e[m]=f[m]+(d[m]-f[m])*g;if(e.shape=a==="transformacao"?Xf(u):0,a==="transformacao"){e.order=u,e.actorY=.4,e.yaw=-.2+u*.7;let m=S=>{let v=Ra(S);return v*v*(3-2*v)},p=m((e.shape-2.2)/.6)*(1-m((e.shape-3.6)/.4));e.cz=12+p*1.5,e.mobileDistance=1.55+p*.25}return a==="problema"&&(e.walk=u*Math.PI*3),a==="inicio"&&(e.walk=u*Math.PI*2),a==="processo"&&(e.screenX=.14+u*.72,e.mobileY=.44+u*.35,e.walk=u*Math.PI*16,e.opacity=1),a==="contato"&&(e.actorX=-.4+u*2.6,e.actorZ=.2-u*2.7,e.walk=u*Math.PI*5),e}return{state:e,seek:o,dispose(){i.kill()}}}vd();var nn=document.documentElement;nn.classList.contains("reduced-motion")||jv();function jv(){let s=document.getElementById("sceneStage"),t=document.getElementById("sceneCanvas"),e,n=!1,i=Yr(),r=ra[i],o=innerWidth<=700;try{e=new sr({canvas:t,alpha:!0,antialias:i!=="low",powerPreference:"high-performance"}),e.outputColorSpace=be,e.toneMapping=Xr,e.toneMappingExposure=1.1}catch{n=!0;let k=t.cloneNode();t.replaceWith(k),t=k;try{e=new fr(t)}catch{dispatchEvent(new Event("portfolio:graphics-fallback"));return}}nn.dataset.renderer=n?"canvas":"webgl";let a=new Fi,c=new Qe(38,1,.1,100),l=new Set,h=new Set,u=new Set,d=new pe(1,1,1);l.add(d);let f=n?d:new ke(1,1,1,3,.0325);l.add(f);function _(k={},Q=!1){let A=Q?new Re(k):new xe({roughness:.7,metalness:.08,...k});return h.add(A),A}let g=new us({color:"#e96c0c",roughness:.38,metalness:.48,clearcoat:.08,clearcoatRoughness:.5,envMapIntensity:.7}),m=_({color:"#272623",roughness:.85}),p=_({color:"#f4f0e8",roughness:.72}),S=_({color:"#111111",roughness:.6}),v=_({color:"#ff7a00",toneMapped:!1},!0),y=_({color:"#ff9b35",transparent:!0,opacity:.6,toneMapped:!1},!0);h.add(g);let T=null;function E(k,Q,A,it,O=a,j=!0){let L=new Lt(j?f:d,it);return L.scale.set(k,Q,A),O.add(L),L}function w(k,Q,A,it,O=a){let j=new D(...k),L=new D(...Q),V=L.clone().sub(j),ft=E(A,V.length(),A,it,O,!1);return ft.position.copy(j).add(L).multiplyScalar(.5),ft.quaternion.setFromUnitVectors(new D(0,1,0),V.normalize()),ft}if(!n){T=ca(e,a),a.add(new cr("#fff4e5","#5d4937",1.4));let k=new Bi("#fff6e8",2.5);k.position.set(-4,7,6),a.add(k);let Q=new Bi("#ff9c44",.45);Q.position.set(5,4,-4),a.add(Q);let A=new Bi("#ffffff",.5);A.position.set(3,2,7),a.add(A)}let R=new Jt,M=new Jt;a.add(R),R.add(M);let x=aa({size:1.65,software:n,orange:g});M.add(x.group),nn.dataset.cubeDesign="premium-modular";let P=new ue(f,g,125);P.instanceMatrix.setUsage(on),P.frustumCulled=!1,M.add(P);let H=Vh(n?3:r.grid);P.count=H.count;let z=new Rn(1.6,n?10:28,n?7:18);l.add(z);let q=new Lt(z,g);M.add(q),q.visible=!1;let Z=new Jt;M.add(Z);let F=1.02;for(let[k,Q]of[[[-F,-F,-F],[F,-F,-F]],[[-F,F,-F],[F,F,-F]],[[-F,-F,F],[F,-F,F]],[[-F,F,F],[F,F,F]],[[-F,-F,-F],[-F,F,-F]],[[F,-F,-F],[F,F,-F]],[[-F,-F,F],[-F,F,F]],[[F,-F,F],[F,F,F]],[[-F,-F,-F],[-F,-F,F]],[[F,-F,-F],[F,-F,F]],[[-F,F,-F],[-F,F,F]],[[F,F,-F],[F,F,F]]])w(k,Q,.012,y,Z);let rt=new Jt;a.add(rt);let X=[];for(let k=0;k<18;k++){let Q=.35+k%4*.34,A=E(.68,Q,.68,k%3===0?m:p,rt),it=k*2.39996+.4,O=new D(Math.sign(Math.cos(it))*(2+Math.abs(Math.cos(it))*.9),-1.5+Q/2,-2.2-Math.abs(Math.sin(it))*1.2),j=new D([-3.7,-2.5,-1.3,1.3,2.5,3.7][k%6],-1.5+Q/2,-3.8+Math.floor(k/6)*1.25);X.push({mesh:A,height:Q,chaos:O,ordered:j,angle:(k%5-2)*.18})}let xt=new Jt;a.add(xt);let nt=[[-5,-1.49,3],[-3.3,-1.49,2.2],[-2,-1.49,.9],[-.7,-1.49,.35],[.4,-1.49,-.5],[1.1,-1.49,-1.1],[2.3,-1.49,-1.7],[3.1,-1.49,-2.6]],pt=new gi(nt.map(k=>new D(...k))),Tt=[];if(n){let k=pt.getPoints(24),Q=_({color:"#ff7a00",transparent:!0,opacity:.08},!0);for(let A=0;A<k.length-1;A++)Tt.push(w(k[A].toArray(),k[A+1].toArray(),.045,v,xt)),w(k[A].toArray(),k[A+1].toArray(),.14,Q,xt)}else{let k=new Gn(pt,64,.025,6,!1);l.add(k),xt.add(new Lt(k,v));let Q=new Gn(pt,48,.08,6,!1);l.add(Q),xt.add(new Lt(Q,_({color:"#ff7a00",transparent:!0,opacity:.07,depthWrite:!1},!0)))}R.traverse(k=>{k.isMesh&&(k.renderOrder=Math.max(2,k.renderOrder))});let W=document.createElement("canvas");W.width=W.height=64;let U=W.getContext("2d"),B=U.createRadialGradient(32,32,1,32,32,32);B.addColorStop(0,"#00000060"),B.addColorStop(1,"#00000000"),U.fillStyle=B,U.fillRect(0,0,64,64);let Y=new Ne(W);u.add(Y);let N=_({map:Y,transparent:!0,depthWrite:!1},!0),et=new Te(3.6,3.6);l.add(et);let lt=new Lt(et,N);lt.rotation.x=-Math.PI/2,lt.position.y=-1.51,lt.userData.skipSoftware=!0,a.add(lt);let Rt=new Jt;a.add(Rt);let Ct=[[0,0,0],[-2,1,-.5],[2,.8,-.1],[-1.6,-.65,1.2],[1.8,-.65,1.1],[-.7,1.5,-1.4],[.6,-.85,-1.1]];Ct.slice(1).forEach((k,Q)=>{let A=E(.3,.3,.3,Q%2?p:g,Rt);A.position.set(...k),A.rotation.y=Q*.5});for(let[k,Q]of[[0,1],[0,2],[0,3],[0,4],[1,5],[2,5],[3,6],[4,6]])w(Ct[k],Ct[Q],.025,v,Rt);let Mt=new Jt;a.add(Mt),Mt.position.set(3.5,.1,-3.1),Mt.rotation.y=-.12;let Bt=_({color:"#fff7df",toneMapped:!1},!0);E(.16,3.8,.25,v,Mt).position.x=-1.14,E(.16,3.8,.25,v,Mt).position.x=1.14,E(2.4,.16,.25,v,Mt).position.y=1.82,E(2.12,3.52,.04,Bt,Mt,!1).position.set(0,-.02,-.12),E(2.5,.1,1.4,p,Mt).position.set(0,-1.84,.4);let Vt=qf(),zt=new le,Pt=new D,Zt=Ud(s),It=0,I=0,b=!1,tt=0,gt=0,Et=0,ut=0,yt=0,vt=0;function St(){o=innerWidth<=700,Zt.invalidate(),It=I=0,i=Yr(),r=ra[i],nn.dataset.quality=i,e.setPixelRatio(Math.min(devicePixelRatio||1,r.dpr,n?1.25:2)),H=Vh(n?3:r.grid),P.count=H.count,nn.dataset.microcubes=String(P.count),nn.dataset.graphicsInitialized="true"}let Ft=Sd({scene:a,software:n,quality:i}),st=bd({scene:a,software:n,quality:i}),mt=Td({scene:a,software:n,quality:i}),Ut=Ld({scene:a,software:n,quality:i}),ht=Dd({scene:a,software:n,quality:i}),_t=Cd({scene:a,software:n,quality:i});St(),addEventListener("resize",St,{passive:!0}),addEventListener("portfolio:quality",St),matchMedia("(hover:hover) and (pointer:fine)").matches&&addEventListener("pointermove",k=>{yt=(k.clientX/innerWidth-.5)*.1,vt=(k.clientY/innerHeight-.5)*.05},{passive:!0});function $(k){if(b||(gt=requestAnimationFrame($),document.hidden||nn.classList.contains("reduced-motion")))return;let Q=1e3/(n?30:r.fps);if(k-tt<Q-.5)return;tt=k-(k-tt)%Q;let A=Zt.read();if(!A){nn.dataset.cinemaImmersive="false";return}nn.dataset.cinemaImmersive=String(A.id==="problema"&&A.rect.top<=2&&A.rect.bottom>Math.min(innerHeight*.45,300)),(It!==A.width||I!==A.height)&&(It=A.width,I=A.height,e.setSize(It,I,!1),c.aspect=It/I);let it=performance.now(),O=A.id,j=A.progress,L=Vt.seek(O,j),V=It/I;s.style.setProperty("--scene-opacity","1"),nn.dataset.morphShape=L.shape.toFixed(3),nn.dataset.sceneOrder=L.order.toFixed(3),c.clearViewOffset(),Pt.set(0,-.3,0);let ft=Math.max(4,4.4/V);if(O==="transformacao"&&(Pt.y=.25,ft=Math.max(4.5,6.8/V)),O==="inteligencia"&&(ft=Math.max(4.5,5.7/V)),O==="contato"&&(Pt.set(1.15,-.2,-1.1),ft=Math.max(5.3,8.5/V)),O==="processo"){L.actorScale=1,ft=o?2.9/V:3.25;let at=[...document.querySelectorAll(".process-node")],wt=at[0].getBoundingClientRect(),se=at.at(-1).getBoundingClientRect(),re=Math.max(0,Math.min(1,(j-.1)/.8)),gn=o?.5:(wt.x+wt.width/2+(se.x-wt.x)*re-A.rect.left)/It,bn=o?Math.max(.1,Math.min(.85,(wt.y+wt.height/2+(se.y-wt.y)*re-A.rect.top)/I)):.48;c.setViewOffset(It,I,(.5-gn)*It,(.5-bn)*I,It,I)}let Nt=ft/(2*Math.tan(Oe.degToRad(c.fov/2)));c.position.set(L.cx+yt,L.cy+vt,L.cz).sub(Pt).normalize().multiplyScalar(Nt).add(Pt);let dt=Xl(j);if(Ft.group.visible=O==="problema",st.group.visible=O==="projetos",mt.group.visible=O==="solucoes",Ut.group.visible=O==="inteligencia",ht.group.visible=O==="resultado",_t.group.visible=O==="contato",O==="problema"){let wt=Math.max(6.4,5.8/V)*dt.zoom/(2*Math.tan(Oe.degToRad(c.fov/2)));Pt.set(...dt.focus);let se=.52+j*.3;c.position.set(Math.sin(se)*.77,.78,Math.cos(se)*.9).normalize().multiplyScalar(wt).add(Pt)}if(O==="projetos"){let at=la(j),se=Math.max(7,6.3/V)*(1-at.cameraDock*.16)/(2*Math.tan(Oe.degToRad(c.fov/2)));Pt.set(0,1.1-at.cameraDock*.6,.18),c.position.set(.18-at.cameraDock*.13,.2+Math.sin(at.local*Math.PI)*.035,1).normalize().multiplyScalar(se).add(Pt)}if(c.lookAt(Pt),c.updateProjectionMatrix(),R.position.set(L.actorX,L.actorY+(O==="inicio"?Math.sin(k*8e-4)*.018:0),L.actorZ),R.rotation.y=L.yaw+(O==="inicio"?Math.sin(k*7e-4)*.075:0),R.scale.setScalar(L.actorScale),O==="problema"){let at=Ft.update(j,k,c);R.position.set(...at.actor),R.position.y+=.3,R.scale.setScalar(.45),R.rotation.set(0,at.yaw,0)}else R.rotation.x=0;M.rotation.z=0;let At=Wf(L.shape),bt=Math.max(0,1-Math.abs(L.shape-2)/.34),kt=Gf(L.shape),jt=H.formations[kt.from],Gt=H.formations[kt.to];if(x.update({fracture:At,spread:O==="problema"&&dt.blocked?.2:O==="diagnostico"?Math.sin(j*Math.PI)**2*.45:0}),P.visible=At>.005&&bt<.98,P.visible){let at=(1.65/H.n-.016)*(L.shape>1.2&&L.shape<3.7?.72:1);for(let wt=0;wt<P.count;wt++)zt.position.set(jt[wt][0]+(Gt[wt][0]-jt[wt][0])*kt.weight,jt[wt][1]+(Gt[wt][1]-jt[wt][1])*kt.weight,jt[wt][2]+(Gt[wt][2]-jt[wt][2])*kt.weight),zt.rotation.set(wt%3*.23*At,wt%5*.3*At,wt%4*.13*At),(L.shape<.05||L.shape>3.95)&&zt.rotation.set(0,0,0),zt.scale.setScalar(at*At*(1-bt*.9)),zt.updateMatrix(),P.setMatrixAt(wt,zt.matrix);P.instanceMatrix.needsUpdate=!0}q.visible=bt>.01,q.scale.setScalar(bt),Z.visible=L.wire>.02,Z.scale.setScalar(Math.max(.01,L.wire)),rt.visible=L.props>.02&&O!=="inicio"&&O!=="problema",rt.scale.setScalar(Math.max(.01,L.props)),X.forEach((at,wt)=>{if(at.mesh.visible=wt<(O==="inicio"?3:n?8:r.blocks),at.mesh.scale.set(.68,at.height,.68),at.mesh.position.lerpVectors(at.chaos,at.ordered,L.order),O==="inicio"&&wt<3){let se=[[-2.05,-1.25,-.75],[1.9,-1.3,-1.6],[.6,-1.38,-3.2]];at.mesh.position.set(...se[wt]),at.mesh.scale.set(.64,wt===0?.48:.34,.64)}at.mesh.rotation.set(at.angle*(1-L.order),at.angle*2*(1-L.order),at.angle*(1-L.order))}),xt.visible=L.path>.02&&O!=="processo"&&O!=="problema",xt.scale.setScalar(Math.max(.02,L.path)),Rt.visible=L.network>.02,Rt.scale.setScalar(Math.max(.01,L.network)),Mt.visible=L.portal>.02,Mt.scale.setScalar(Math.max(.01,L.portal)),lt.visible=O!=="problema",lt.position.x=R.position.x,lt.position.z=R.position.z,lt.scale.setScalar(L.actorScale),N.opacity=(1-At*.6)*.85,R.visible=O!=="projetos"&&O!=="solucoes"&&O!=="inteligencia"&&O!=="resultado"&&O!=="contato",O==="projetos"&&(rt.visible=xt.visible=Rt.visible=Mt.visible=lt.visible=!1,st.update(j,k,c)),O==="solucoes"&&(rt.visible=xt.visible=Rt.visible=Mt.visible=lt.visible=!1,mt.update(j,k,c)),O==="inteligencia"&&(rt.visible=xt.visible=Rt.visible=Mt.visible=lt.visible=!1,Ut.update(j,k,c,{width:It,height:I})),O==="resultado"&&(rt.visible=xt.visible=Rt.visible=Mt.visible=lt.visible=!1,ht.update(j,k,c,{mobile:o})),O==="contato"&&(rt.visible=xt.visible=Rt.visible=Mt.visible=lt.visible=!1,_t.update(j,k,c,{mobile:o})),n?e.render(a,c):(e.toneMappingExposure=O==="problema"?.88:O==="solucoes"?1.05:O==="inteligencia"?1.12:O==="resultado"?1.04:O==="contato"?1.06:L.light*.92,e.render(a,c),nn.dataset.drawCalls=String(e.info.render.calls),nn.dataset.triangles=String(e.info.render.triangles)),s.style.visibility="visible",nn.dataset.frameMs=String(Math.round((performance.now()-it)*10)/10),s.classList.contains("is-ready")||(s.classList.add("is-ready"),nn.dataset.sceneReady="true"),Et++,ut||(ut=k),k-ut>1600&&(nn.dataset.fps=String(Math.round(Et*1e3/(k-ut)*10)/10),Et=0,ut=k)}t.addEventListener("webglcontextlost",k=>{k.preventDefault(),dispatchEvent(new Event("portfolio:graphics-fallback"))}),addEventListener("pagehide",k=>{if(!k.persisted){b=!0,cancelAnimationFrame(gt),removeEventListener("resize",St),removeEventListener("portfolio:quality",St),Zt.dispose(),Vt.dispose(),x.dispose(),Ft.dispose(),st.dispose(),mt.dispose(),Ut.dispose(),ht.dispose(),_t.dispose(),T?.dispose();for(let Q of l)Q.dispose();for(let Q of h)Q.dispose();for(let Q of u)Q.dispose();e.dispose?.()}}),gt=requestAnimationFrame($)}})();
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
