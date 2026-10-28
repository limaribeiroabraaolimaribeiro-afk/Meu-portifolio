(()=>{var Il="170";var Xf=0,Gh=1,qf=2;var $u=1,Yf=2,oi=3,Di=0,Qe=1,On=2,Pi=0,Ws=1,Wh=2,Xh=3,qh=4,Zf=5,es=100,Jf=101,$f=102,Kf=103,Qf=104,jf=200,tp=201,ep=202,np=203,ac=204,cc=205,ip=206,sp=207,rp=208,op=209,ap=210,cp=211,lp=212,hp=213,up=214,lc=0,hc=1,uc=2,Zs=3,dc=4,fc=5,pc=6,mc=7,Ku=0,dp=1,fp=2,Ii=0,pp=1,mp=2,gp=3,Gr=4,_p=5,xp=6,yp=7;var Qu=300,Js=301,$s=302,gc=303,_c=304,ea=306,xc=1e3,ss=1001,yc=1002,yn=1003,vp=1004;var co=1005;var Xn=1006,Ra=1007;var rs=1008;var hi=1009,ju=1010,td=1011,zr=1012,Dl=1013,os=1014,qn=1015,Wr=1016,Ll=1017,Ul=1018,Ks=1020,ed=35902,nd=1021,id=1022,Fn=1023,sd=1024,rd=1025,Xs=1026,Qs=1027,Nl=1028,Ol=1029,od=1030,Fl=1031;var Bl=1033,Lo=33776,Uo=33777,No=33778,Oo=33779,vc=35840,Mc=35841,Sc=35842,bc=35843,Ec=36196,wc=37492,Tc=37496,Ac=37808,Rc=37809,Cc=37810,Pc=37811,Ic=37812,Dc=37813,Lc=37814,Uc=37815,Nc=37816,Oc=37817,Fc=37818,Bc=37819,zc=37820,kc=37821,Fo=36492,Hc=36494,Vc=36495,ad=36283,Gc=36284,Wc=36285,Xc=36286;var Bo=2300,qc=2301,Ca=2302,Yh=2400,Zh=2401,Jh=2402;var Mp=3200,Sp=3201;var cd=0,bp=1,Ci="",Te="srgb",ar="srgb-linear",na="linear",de="srgb";var As=7680;var $h=519,Ep=512,wp=513,Tp=514,ld=515,Ap=516,Rp=517,Cp=518,Pp=519,Kh=35044,Hn=35048;var Qh="300 es",ci=2e3,zo=2001,Li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jh=1234567,Ur=Math.PI/180,kr=180/Math.PI;function cr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[s&255]+Je[s>>8&255]+Je[s>>16&255]+Je[s>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function ke(s,t,e){return Math.max(t,Math.min(e,s))}function zl(s,t){return(s%t+t)%t}function Ip(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Dp(s,t,e){return s!==t?(e-s)/(t-s):0}function Nr(s,t,e){return(1-e)*s+e*t}function Lp(s,t,e,n){return Nr(s,t,1-Math.exp(-e*n))}function Up(s,t=1){return t-Math.abs(zl(s,t*2)-t)}function Np(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Op(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Fp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Bp(s,t){return s+Math.random()*(t-s)}function zp(s){return s*(.5-Math.random())}function kp(s){s!==void 0&&(jh=s);let t=jh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hp(s){return s*Ur}function Vp(s){return s*kr}function Gp(s){return(s&s-1)===0&&s!==0}function Wp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Xp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qp(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function sn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var He={DEG2RAD:Ur,RAD2DEG:kr,generateUUID:cr,clamp:ke,euclideanModulo:zl,mapLinear:Ip,inverseLerp:Dp,lerp:Nr,damp:Lp,pingpong:Up,smoothstep:Np,smootherstep:Op,randInt:Fp,randFloat:Bp,randFloatSpread:zp,seededRandom:kp,degToRad:Hp,radToDeg:Vp,isPowerOfTwo:Gp,ceilPowerOfTwo:Wp,floorPowerOfTwo:Xp,setQuaternionFromProperEuler:qp,normalize:sn,denormalize:Vs},Yt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},te=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],v=i[4],x=i[7],A=i[2],b=i[5],w=i[8];return r[0]=o*_+a*S+c*A,r[3]=o*m+a*v+c*b,r[6]=o*p+a*x+c*w,r[1]=l*_+h*S+u*A,r[4]=l*m+h*v+u*b,r[7]=l*p+h*x+u*w,r[2]=d*_+f*S+g*A,r[5]=d*m+f*v+g*b,r[8]=d*p+f*x+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Pa.makeScale(t,e)),this}rotate(t){return this.premultiply(Pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Pa=new te;function hd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ko(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yp(){let s=ko("canvas");return s.style.display="block",s}var tu={};function Dr(s){s in tu||(tu[s]=!0,console.warn(s))}function Zp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Jp(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $p(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var se={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?na:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var eu=[.64,.33,.3,.6,.15,.06],nu=[.2126,.7152,.0722],iu=[.3127,.329],su=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ru=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[ar]:{primaries:eu,whitePoint:iu,transfer:na,toXYZ:su,fromXYZ:ru,luminanceCoefficients:nu,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:eu,whitePoint:iu,transfer:de,toXYZ:su,fromXYZ:ru,luminanceCoefficients:nu,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}});var Rs,Yc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rs===void 0&&(Rs=ko("canvas")),Rs.width=t.width,Rs.height=t.height;let n=Rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ko("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kp=0,Ho=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=cr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ia(i[o].image)):r.push(Ia(i[o]))}else r=Ia(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ia(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qp=0,ln=class s extends Li{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ss,i=ss,r=Xn,o=rs,a=Fn,c=hi,l=s.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=cr(),this.name="",this.source=new Ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xc:t.x=t.x-Math.floor(t.x);break;case ss:t.x=t.x<0?0:1;break;case yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xc:t.y=t.y-Math.floor(t.y);break;case ss:t.y=t.y<0?0:1;break;case yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Qu;ln.DEFAULT_ANISOTROPY=1;var fe=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,x=(f+1)/2,A=(p+1)/2,b=(h+d)/4,w=(u+_)/4,T=(g+m)/4;return v>x&&v>A?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=w/n):x>A?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=T/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=w/r,i=T/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zc=class extends Li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ln(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ho(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends Zc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Vo=class extends ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jc=class extends ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*_,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let A=Math.sqrt(v),b=Math.atan2(A,p*S);m=Math.sin(m*b)/A,a=Math.sin(a*b)/A}let x=a*S;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ou.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Da.copy(this).projectOnVector(t),this.sub(Da)}reflect(t){return this.sub(Da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Da=new I,ou=new Bn,di=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lo.copy(n.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),ho.subVectors(this.max,wr),Cs.subVectors(t.a,wr),Ps.subVectors(t.b,wr),Is.subVectors(t.c,wr),bi.subVectors(Ps,Cs),Ei.subVectors(Is,Ps),Zi.subVectors(Cs,Is);let e=[0,-bi.z,bi.y,0,-Ei.z,Ei.y,0,-Zi.z,Zi.y,bi.z,0,-bi.x,Ei.z,0,-Ei.x,Zi.z,0,-Zi.x,-bi.y,bi.x,0,-Ei.y,Ei.x,0,-Zi.y,Zi.x,0];return!La(e,Cs,Ps,Is,ho)||(e=[1,0,0,0,1,0,0,0,1],!La(e,Cs,Ps,Is,ho))?!1:(uo.crossVectors(bi,Ei),e=[uo.x,uo.y,uo.z],La(e,Cs,Ps,Is,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ei=[new I,new I,new I,new I,new I,new I,new I,new I],Ln=new I,lo=new di,Cs=new I,Ps=new I,Is=new I,bi=new I,Ei=new I,Zi=new I,wr=new I,ho=new I,uo=new I,Ji=new I;function La(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ji.fromArray(s,r);let a=i.x*Math.abs(Ji.x)+i.y*Math.abs(Ji.y)+i.z*Math.abs(Ji.z),c=t.dot(Ji),l=e.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var jp=new di,Tr=new I,Ua=new I,as=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);let e=Tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Tr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(Ua)),this.expandByPoint(Tr.copy(t.center).sub(Ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ni=new I,Na=new I,fo=new I,wi=new I,Oa=new I,po=new I,Fa=new I,$c=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Na.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(Na);let r=t.distanceTo(e)*.5,o=-this.direction.dot(fo),a=wi.dot(this.direction),c=-wi.dot(fo),l=wi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Na).addScaledVector(fo,d),f}intersectSphere(t,e){ni.subVectors(t.center,this.origin);let n=ni.dot(this.direction),i=ni.dot(ni)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,i,r){Oa.subVectors(e,t),po.subVectors(n,t),Fa.crossVectors(Oa,po);let o=this.direction.dot(Fa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,t);let c=a*this.direction.dot(po.crossVectors(wi,po));if(c<0)return null;let l=a*this.direction.dot(Oa.cross(wi));if(l<0||c+l>o)return null;let h=-a*wi.dot(Fa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ds.setFromMatrixColumn(t,0).length(),r=1/Ds.setFromMatrixColumn(t,1).length(),o=1/Ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tm,t,em)}lookAt(t,e,n){let i=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Ti.crossVectors(n,_n),Ti.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Ti.crossVectors(n,_n)),Ti.normalize(),mo.crossVectors(_n,Ti),i[0]=Ti.x,i[4]=mo.x,i[8]=_n.x,i[1]=Ti.y,i[5]=mo.y,i[9]=_n.y,i[2]=Ti.z,i[6]=mo.z,i[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],v=n[7],x=n[11],A=n[15],b=i[0],w=i[4],T=i[8],M=i[12],y=i[1],C=i[5],F=i[9],z=i[13],V=i[2],K=i[6],N=i[10],nt=i[14],G=i[3],lt=i[7],Q=i[11],dt=i[15];return r[0]=o*b+a*y+c*V+l*G,r[4]=o*w+a*C+c*K+l*lt,r[8]=o*T+a*F+c*N+l*Q,r[12]=o*M+a*z+c*nt+l*dt,r[1]=h*b+u*y+d*V+f*G,r[5]=h*w+u*C+d*K+f*lt,r[9]=h*T+u*F+d*N+f*Q,r[13]=h*M+u*z+d*nt+f*dt,r[2]=g*b+_*y+m*V+p*G,r[6]=g*w+_*C+m*K+p*lt,r[10]=g*T+_*F+m*N+p*Q,r[14]=g*M+_*z+m*nt+p*dt,r[3]=S*b+v*y+x*V+A*G,r[7]=S*w+v*C+x*K+A*lt,r[11]=S*T+v*F+x*N+A*Q,r[15]=S*M+v*z+x*nt+A*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,v=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,A=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,b=e*S+n*v+i*x+r*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return t[0]=S*w,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*w,t[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*w,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*w,t[4]=v*w,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*w,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*p-e*c*p)*w,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*w,t[8]=x*w,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*w,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*w,t[12]=A*w,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*w,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*m-e*a*m)*w,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,S=c*l,v=c*h,x=c*u,A=n.x,b=n.y,w=n.z;return i[0]=(1-(_+p))*A,i[1]=(f+x)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(f-x)*b,i[5]=(1-(d+p))*b,i[6]=(m+S)*b,i[7]=0,i[8]=(g+v)*w,i[9]=(m-S)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ds.set(i[0],i[1],i[2]).length(),o=Ds.set(i[4],i[5],i[6]).length(),a=Ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Un.copy(this);let l=1/r,h=1/o,u=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,e.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ci){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(a===ci)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===zo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ci){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h,g,_;if(a===ci)g=(o+r)*u,_=-2*u;else if(a===zo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ds=new I,Un=new oe,tm=new I(0,0,0),em=new I(1,1,1),Ti=new I,mo=new I,_n=new I,au=new oe,cu=new Bn,wn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(au,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cu.setFromEuler(this),this.setFromQuaternion(cu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var Go=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nm=0,lu=new I,Ls=new Bn,ii=new oe,go=new I,Ar=new I,im=new I,sm=new Bn,hu=new I(1,0,0),uu=new I(0,1,0),du=new I(0,0,1),fu={type:"added"},rm={type:"removed"},Us={type:"childadded",child:null},Ba={type:"childremoved",child:null},he=class s extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new wn,n=new Bn,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new te}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(hu,t)}rotateY(t){return this.rotateOnAxis(uu,t)}rotateZ(t){return this.rotateOnAxis(du,t)}translateOnAxis(t,e){return lu.copy(t).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hu,t)}translateY(t){return this.translateOnAxis(uu,t)}translateZ(t){return this.translateOnAxis(du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?go.copy(t):go.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Ar,go,this.up):ii.lookAt(go,Ar,this.up),this.quaternion.setFromRotationMatrix(ii),i&&(ii.extractRotation(i.matrixWorld),Ls.setFromRotationMatrix(ii),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fu),Us.child=t,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rm),Ba.child=t,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fu),Us.child=t,this.dispatchEvent(Us),Us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t,im),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,sm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};he.DEFAULT_UP=new I(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new I,si=new I,za=new I,ri=new I,Ns=new I,Os=new I,pu=new I,ka=new I,Ha=new I,Va=new I,Ga=new fe,Wa=new fe,Xa=new fe,ns=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Nn.subVectors(t,e),i.cross(Nn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Nn.subVectors(i,e),si.subVectors(n,e),za.subVectors(t,e);let o=Nn.dot(Nn),a=Nn.dot(si),c=Nn.dot(za),l=si.dot(si),h=si.dot(za),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ri.x),c.addScaledVector(o,ri.y),c.addScaledVector(a,ri.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Ga.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Ga.fromBufferAttribute(t,e),Wa.fromBufferAttribute(t,n),Xa.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ga,r.x),o.addScaledVector(Wa,r.y),o.addScaledVector(Xa,r.z),o}static isFrontFacing(t,e,n,i){return Nn.subVectors(n,e),si.subVectors(t,e),Nn.cross(si).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Nn.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Ns.subVectors(i,n),Os.subVectors(r,n),ka.subVectors(t,n);let c=Ns.dot(ka),l=Os.dot(ka);if(c<=0&&l<=0)return e.copy(n);Ha.subVectors(t,i);let h=Ns.dot(Ha),u=Os.dot(Ha);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ns,o);Va.subVectors(t,r);let f=Ns.dot(Va),g=Os.dot(Va);if(g>=0&&f<=g)return e.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Os,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return pu.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(pu,a);let p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Ns,o).addScaledVector(Os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},_o={h:0,s:0,l:0};function qa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=zl(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=qa(o,r,t+1/3),this.g=qa(o,r,t),this.b=qa(o,r,t-1/3)}return se.toWorkingColorSpace(this,i),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let n=ud[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return se.fromWorkingColorSpace($e.copy(this),t),Math.round(ke($e.r*255,0,255))*65536+Math.round(ke($e.g*255,0,255))*256+Math.round(ke($e.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace($e.copy(this),e);let n=$e.r,i=$e.g,r=$e.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Te){se.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,i=$e.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(_o);let n=Nr(Ai.h,_o.h,e),i=Nr(Ai.s,_o.s,e),r=Nr(Ai.l,_o.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new $t;$t.NAMES=ud;var om=0,cs=class extends Li{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=cr(),this.name="",this.blending=Ws,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=cc,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ac&&(n.blendSrc=this.blendSrc),this.blendDst!==cc&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(n.stencilFail=this.stencilFail),this.stencilZFail!==As&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ie=class extends cs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Ku,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new I,xo=new Yt,Ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kh,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),i=sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kh&&(t.usage=this.usage),t}};var Wo=class extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xo=class extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ee=class extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},am=0,En=new oe,Ya=new he,Fs=new I,xn=new di,Rr=new di,ze=new I,je=class s extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hd(t)?Xo:Wo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return Ya.lookAt(t),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ee(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(xn.min,Rr.min),xn.expandByPoint(ze),ze.addVectors(xn.max,Rr.max),xn.expandByPoint(ze)):(xn.expandByPoint(Rr.min),xn.expandByPoint(Rr.max))}xn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ze.fromBufferAttribute(a,l),c&&(Fs.fromBufferAttribute(t,l),ze.add(Fs)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new I,c[T]=new I;let l=new I,h=new I,u=new I,d=new Yt,f=new Yt,g=new Yt,_=new I,m=new I;function p(T,M,y){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[T].add(_),a[M].add(_),a[y].add(_),c[T].add(m),c[M].add(m),c[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let T=0,M=S.length;T<M;++T){let y=S[T],C=y.start,F=y.count;for(let z=C,V=C+F;z<V;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let v=new I,x=new I,A=new I,b=new I;function w(T){A.fromBufferAttribute(i,T),b.copy(A);let M=a[T];v.copy(M),v.sub(A.multiplyScalar(A.dot(M))).normalize(),x.crossVectors(b,M);let C=x.dot(c[T])<0?-1:1;o.setXYZW(T,v.x,v.y,v.z,C)}for(let T=0,M=S.length;T<M;++T){let y=S[T],C=y.start,F=y.count;for(let z=C,V=C+F;z<V;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mu=new oe,$i=new $c,yo=new as,gu=new I,vo=new I,Mo=new I,So=new I,Za=new I,bo=new I,_u=new I,Eo=new I,Nt=class extends he{constructor(t=new je,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Za.fromBufferAttribute(u,t),o?bo.addScaledVector(Za,h):bo.addScaledVector(Za.sub(e),h))}e.add(bo)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(yo.containsPoint($i.origin)===!1&&($i.intersectSphere(yo,gu)===null||$i.origin.distanceToSquared(gu)>(t.far-t.near)**2))&&(mu.copy(r).invert(),$i.copy(t.ray).applyMatrix4(mu),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,A=v;x<A;x+=3){let b=a.getX(x),w=a.getX(x+1),T=a.getX(x+2);i=wo(this,p,t,n,l,h,u,b,w,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);i=wo(this,o,t,n,l,h,u,S,v,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,A=v;x<A;x+=3){let b=x,w=x+1,T=x+2;i=wo(this,p,t,n,l,h,u,b,w,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=m,v=m+1,x=m+2;i=wo(this,o,t,n,l,h,u,S,v,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function cm(s,t,e,n,i,r,o,a){let c;if(t.side===Qe?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Di,a),c===null)return null;Eo.copy(a),Eo.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Eo);return l<e.near||l>e.far?null:{distance:l,point:Eo.clone(),object:s}}function wo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,vo),s.getVertexPosition(c,Mo),s.getVertexPosition(l,So);let h=cm(s,t,e,n,vo,Mo,So,_u);if(h){let u=new I;ns.getBarycoord(_u,vo,Mo,So,u),i&&(h.uv=ns.getInterpolatedAttribute(i,a,c,l,u,new Yt)),r&&(h.uv1=ns.getInterpolatedAttribute(r,a,c,l,u,new Yt)),o&&(h.normal=ns.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new I,materialIndex:0};ns.getNormal(vo,Mo,So,d.normal),h.face=d,h.barycoord=u}return h}var pe=class s extends je{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2));function g(_,m,p,S,v,x,A,b,w,T,M){let y=x/w,C=A/T,F=x/2,z=A/2,V=b/2,K=w+1,N=T+1,nt=0,G=0,lt=new I;for(let Q=0;Q<N;Q++){let dt=Q*C-z;for(let St=0;St<K;St++){let k=St*y-F;lt[_]=k*S,lt[m]=dt*v,lt[p]=V,l.push(lt.x,lt.y,lt.z),lt[_]=0,lt[m]=0,lt[p]=b>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(St/w),u.push(1-Q/T),nt+=1}}for(let Q=0;Q<T;Q++)for(let dt=0;dt<w;dt++){let St=d+dt+K*Q,k=d+dt+K*(Q+1),D=d+(dt+1)+K*(Q+1),B=d+(dt+1)+K*Q;c.push(St,k,B),c.push(k,D,B),G+=6}a.addGroup(f,G,M),f+=G,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function js(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function rn(s){let t={};for(let e=0;e<s.length;e++){let n=js(s[e]);for(let i in n)t[i]=n[i]}return t}function lm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function dd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var hm={clone:js,merge:rn},um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends cs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=um,this.fragmentShader=dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=lm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},qo=class extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ri=new I,xu=new Yt,yu=new Yt,Ke=class extends qo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,xu,yu),e.subVectors(yu,xu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Bs=-90,zs=1,Kc=class extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ke(Bs,zs,t,e);i.layers=this.layers,this.add(i);let r=new Ke(Bs,zs,t,e);r.layers=this.layers,this.add(r);let o=new Ke(Bs,zs,t,e);o.layers=this.layers,this.add(o);let a=new Ke(Bs,zs,t,e);a.layers=this.layers,this.add(a);let c=new Ke(Bs,zs,t,e);c.layers=this.layers,this.add(c);let l=new Ke(Bs,zs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Yo=class extends ln{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Js,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qc=class extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Yo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pe(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:Pi});r.uniforms.tEquirect.value=e;let o=new Nt(i,r),a=e.minFilter;return e.minFilter===rs&&(e.minFilter=Xn),new Kc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Ja=new I,fm=new I,pm=new te,ai=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ja.subVectors(n,e).cross(fm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ja),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pm.getNormalMatrix(t),i=this.coplanarPoint(Ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ki=new as,To=new I,Hr=class{constructor(t=new ai,e=new ai,n=new ai,i=new ai,r=new ai,o=new ai){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],v=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+g,x+S).normalize(),n[3].setComponents(c-o,d-h,m-g,x-S).normalize(),n[4].setComponents(c-a,d-u,m-_,x-v).normalize(),e===ci)n[5].setComponents(c+a,d+u,m+_,x+v).normalize();else if(e===zo)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(To.x=i.normal.x>0?t.max.x:t.min.x,To.y=i.normal.y>0?t.max.y:t.min.y,To.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(To)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fd(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function mm(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Ue=class s extends je{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let S=p*d-o;for(let v=0;v<l;v++){let x=v*u-r;g.push(x,-S,0),_.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let v=S+l*p,x=S+l*(p+1),A=S+1+l*(p+1),b=S+1+l*p;f.push(v,x,b),f.push(x,A,b)}this.setIndex(f),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(_,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_m=`#ifdef USE_ALPHAHASH
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
#endif`,xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sm=`#ifdef USE_AOMAP
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
#endif`,bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Em=`#ifdef USE_BATCHING
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
#endif`,wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cm=`#ifdef USE_IRIDESCENCE
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
#endif`,Pm=`#ifdef USE_BUMPMAP
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
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zm=`#define PI 3.141592653589793
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
} // validated`,km=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hm=`vec3 transformedNormal = objectNormal;
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
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ig=`#ifdef USE_GRADIENTMAP
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
}`,sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ag=`uniform bool receiveShadow;
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
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fg=`PhysicalMaterial material;
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
#endif`,pg=`struct PhysicalMaterial {
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
}`,mg=`
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
#endif`,gg=`#if defined( RE_IndirectDiffuse )
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
#endif`,_g=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wg=`#if defined( USE_POINTS_UV )
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
#endif`,Tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`#ifdef USE_MORPHTARGETS
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
#endif`,Dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bg=`#ifdef USE_NORMALMAP
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
#endif`,zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t0=`float getShadowMask() {
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
}`,e0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,m0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g0=`uniform sampler2D t2D;
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`#include <common>
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
}`,S0=`#if DEPTH_PACKING == 3200
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
}`,b0=`#define DISTANCE
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
}`,E0=`#define DISTANCE
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`uniform float scale;
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#include <common>
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
}`,P0=`uniform vec3 diffuse;
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
}`,I0=`#define LAMBERT
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
}`,D0=`#define LAMBERT
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
}`,L0=`#define MATCAP
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
}`,U0=`#define MATCAP
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
}`,N0=`#define NORMAL
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
}`,O0=`#define NORMAL
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
}`,F0=`#define PHONG
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
}`,B0=`#define PHONG
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
}`,z0=`#define STANDARD
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
}`,k0=`#define STANDARD
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
}`,H0=`#define TOON
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
}`,V0=`#define TOON
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
}`,G0=`uniform float size;
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#include <common>
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
}`,q0=`uniform vec3 color;
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
}`,Y0=`uniform float rotation;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:gm,alphahash_pars_fragment:_m,alphamap_fragment:xm,alphamap_pars_fragment:ym,alphatest_fragment:vm,alphatest_pars_fragment:Mm,aomap_fragment:Sm,aomap_pars_fragment:bm,batching_pars_vertex:Em,batching_vertex:wm,begin_vertex:Tm,beginnormal_vertex:Am,bsdfs:Rm,iridescence_fragment:Cm,bumpmap_pars_fragment:Pm,clipping_planes_fragment:Im,clipping_planes_pars_fragment:Dm,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Um,color_fragment:Nm,color_pars_fragment:Om,color_pars_vertex:Fm,color_vertex:Bm,common:zm,cube_uv_reflection_fragment:km,defaultnormal_vertex:Hm,displacementmap_pars_vertex:Vm,displacementmap_vertex:Gm,emissivemap_fragment:Wm,emissivemap_pars_fragment:Xm,colorspace_fragment:qm,colorspace_pars_fragment:Ym,envmap_fragment:Zm,envmap_common_pars_fragment:Jm,envmap_pars_fragment:$m,envmap_pars_vertex:Km,envmap_physical_pars_fragment:cg,envmap_vertex:Qm,fog_vertex:jm,fog_pars_vertex:tg,fog_fragment:eg,fog_pars_fragment:ng,gradientmap_pars_fragment:ig,lightmap_pars_fragment:sg,lights_lambert_fragment:rg,lights_lambert_pars_fragment:og,lights_pars_begin:ag,lights_toon_fragment:lg,lights_toon_pars_fragment:hg,lights_phong_fragment:ug,lights_phong_pars_fragment:dg,lights_physical_fragment:fg,lights_physical_pars_fragment:pg,lights_fragment_begin:mg,lights_fragment_maps:gg,lights_fragment_end:_g,logdepthbuf_fragment:xg,logdepthbuf_pars_fragment:yg,logdepthbuf_pars_vertex:vg,logdepthbuf_vertex:Mg,map_fragment:Sg,map_pars_fragment:bg,map_particle_fragment:Eg,map_particle_pars_fragment:wg,metalnessmap_fragment:Tg,metalnessmap_pars_fragment:Ag,morphinstance_vertex:Rg,morphcolor_vertex:Cg,morphnormal_vertex:Pg,morphtarget_pars_vertex:Ig,morphtarget_vertex:Dg,normal_fragment_begin:Lg,normal_fragment_maps:Ug,normal_pars_fragment:Ng,normal_pars_vertex:Og,normal_vertex:Fg,normalmap_pars_fragment:Bg,clearcoat_normal_fragment_begin:zg,clearcoat_normal_fragment_maps:kg,clearcoat_pars_fragment:Hg,iridescence_pars_fragment:Vg,opaque_fragment:Gg,packing:Wg,premultiplied_alpha_fragment:Xg,project_vertex:qg,dithering_fragment:Yg,dithering_pars_fragment:Zg,roughnessmap_fragment:Jg,roughnessmap_pars_fragment:$g,shadowmap_pars_fragment:Kg,shadowmap_pars_vertex:Qg,shadowmap_vertex:jg,shadowmask_pars_fragment:t0,skinbase_vertex:e0,skinning_pars_vertex:n0,skinning_vertex:i0,skinnormal_vertex:s0,specularmap_fragment:r0,specularmap_pars_fragment:o0,tonemapping_fragment:a0,tonemapping_pars_fragment:c0,transmission_fragment:l0,transmission_pars_fragment:h0,uv_pars_fragment:u0,uv_pars_vertex:d0,uv_vertex:f0,worldpos_vertex:p0,background_vert:m0,background_frag:g0,backgroundCube_vert:_0,backgroundCube_frag:x0,cube_vert:y0,cube_frag:v0,depth_vert:M0,depth_frag:S0,distanceRGBA_vert:b0,distanceRGBA_frag:E0,equirect_vert:w0,equirect_frag:T0,linedashed_vert:A0,linedashed_frag:R0,meshbasic_vert:C0,meshbasic_frag:P0,meshlambert_vert:I0,meshlambert_frag:D0,meshmatcap_vert:L0,meshmatcap_frag:U0,meshnormal_vert:N0,meshnormal_frag:O0,meshphong_vert:F0,meshphong_frag:B0,meshphysical_vert:z0,meshphysical_frag:k0,meshtoon_vert:H0,meshtoon_frag:V0,points_vert:G0,points_frag:W0,shadow_vert:X0,shadow_frag:q0,sprite_vert:Y0,sprite_frag:Z0},Ut={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Wn={basic:{uniforms:rn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:rn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new $t(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:rn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:rn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:rn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new $t(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:rn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:rn([Ut.points,Ut.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:rn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:rn([Ut.common,Ut.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:rn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:rn([Ut.sprite,Ut.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:rn([Ut.common,Ut.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:rn([Ut.lights,Ut.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Wn.physical={uniforms:rn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var Ao={r:0,b:0,g:0},Qi=new wn,J0=new oe;function $0(s,t,e,n,i,r,o){let a=new $t(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function _(S){let v=!1,x=g(S);x===null?p(a,c):x&&x.isColor&&(p(x,1),v=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,v){let x=g(v);x&&(x.isCubeTexture||x.mapping===ea)?(h===void 0&&(h=new Nt(new pe(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:js(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Qi.copy(v.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(J0.makeRotationFromEuler(Qi)),h.material.toneMapped=se.getTransfer(x.colorSpace)!==de,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Nt(new Ue(2,2),new Yn({name:"BackgroundMaterial",uniforms:js(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=se.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,v){S.getRGB(Ao,dd(s)),n.buffers.color.setClear(Ao.r,Ao.g,Ao.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:_,addToRenderList:m}}function K0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(y,C,F,z,V){let K=!1,N=u(z,F,C);r!==N&&(r=N,l(r.object)),K=f(y,z,F,V),K&&g(y,z,F,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(y,C,F,z),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,C,F){let z=F.wireframe===!0,V=n[y.id];V===void 0&&(V={},n[y.id]=V);let K=V[C.id];K===void 0&&(K={},V[C.id]=K);let N=K[z];return N===void 0&&(N=d(c()),K[z]=N),N}function d(y){let C=[],F=[],z=[];for(let V=0;V<e;V++)C[V]=0,F[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:z,object:y,attributes:{},index:null}}function f(y,C,F,z){let V=r.attributes,K=C.attributes,N=0,nt=F.getAttributes();for(let G in nt)if(nt[G].location>=0){let Q=V[G],dt=K[G];if(dt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor)),Q===void 0||Q.attribute!==dt||dt&&Q.data!==dt.data)return!0;N++}return r.attributesNum!==N||r.index!==z}function g(y,C,F,z){let V={},K=C.attributes,N=0,nt=F.getAttributes();for(let G in nt)if(nt[G].location>=0){let Q=K[G];Q===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));let dt={};dt.attribute=Q,Q&&Q.data&&(dt.data=Q.data),V[G]=dt,N++}r.attributes=V,r.attributesNum=N,r.index=z}function _(){let y=r.newAttributes;for(let C=0,F=y.length;C<F;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){let F=r.newAttributes,z=r.enabledAttributes,V=r.attributeDivisors;F[y]=1,z[y]===0&&(s.enableVertexAttribArray(y),z[y]=1),V[y]!==C&&(s.vertexAttribDivisor(y,C),V[y]=C)}function S(){let y=r.newAttributes,C=r.enabledAttributes;for(let F=0,z=C.length;F<z;F++)C[F]!==y[F]&&(s.disableVertexAttribArray(F),C[F]=0)}function v(y,C,F,z,V,K,N){N===!0?s.vertexAttribIPointer(y,C,F,V,K):s.vertexAttribPointer(y,C,F,z,V,K)}function x(y,C,F,z){_();let V=z.attributes,K=F.getAttributes(),N=C.defaultAttributeValues;for(let nt in K){let G=K[nt];if(G.location>=0){let lt=V[nt];if(lt===void 0&&(nt==="instanceMatrix"&&y.instanceMatrix&&(lt=y.instanceMatrix),nt==="instanceColor"&&y.instanceColor&&(lt=y.instanceColor)),lt!==void 0){let Q=lt.normalized,dt=lt.itemSize,St=t.get(lt);if(St===void 0)continue;let k=St.buffer,D=St.type,B=St.bytesPerElement,q=D===s.INT||D===s.UNSIGNED_INT||lt.gpuType===Dl;if(lt.isInterleavedBufferAttribute){let L=lt.data,st=L.stride,xt=lt.offset;if(L.isInstancedInterleavedBuffer){for(let At=0;At<G.locationSize;At++)p(G.location+At,L.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let At=0;At<G.locationSize;At++)m(G.location+At);s.bindBuffer(s.ARRAY_BUFFER,k);for(let At=0;At<G.locationSize;At++)v(G.location+At,dt/G.locationSize,D,Q,st*B,(xt+dt/G.locationSize*At)*B,q)}else{if(lt.isInstancedBufferAttribute){for(let L=0;L<G.locationSize;L++)p(G.location+L,lt.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let L=0;L<G.locationSize;L++)m(G.location+L);s.bindBuffer(s.ARRAY_BUFFER,k);for(let L=0;L<G.locationSize;L++)v(G.location+L,dt/G.locationSize,D,Q,dt*B,dt/G.locationSize*L*B,q)}}else if(N!==void 0){let Q=N[nt];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(G.location,Q);break;case 3:s.vertexAttrib3fv(G.location,Q);break;case 4:s.vertexAttrib4fv(G.location,Q);break;default:s.vertexAttrib1fv(G.location,Q)}}}}S()}function A(){T();for(let y in n){let C=n[y];for(let F in C){let z=C[F];for(let V in z)h(z[V].object),delete z[V];delete C[F]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;let C=n[y.id];for(let F in C){let z=C[F];for(let V in z)h(z[V].object),delete z[V];delete C[F]}delete n[y.id]}function w(y){for(let C in n){let F=n[C];if(F[y.id]===void 0)continue;let z=F[y.id];for(let V in z)h(z[V].object),delete z[V];delete F[y.id]}}function T(){M(),o=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Q0(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function j0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Fn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let T=w===Wr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==hi&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==qn&&!T)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:A,maxSamples:b}}function t_(s){let t=this,e=null,n=0,i=!1,r=!1,o=new ai,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,v=S*4,x=p.clippingState||null;c.value=x,x=h(g,d,v,f);for(let A=0;A!==v;++A)x[A]=e[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function e_(s){let t=new WeakMap;function e(o,a){return a===gc?o.mapping=Js:a===_c&&(o.mapping=$s),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===gc||a===_c)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Qc(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var tr=class extends qo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gs=4,vu=[.125,.215,.35,.446,.526,.582],is=20,$a=new tr,Mu=new $t,Ka=null,Qa=0,ja=0,tc=!1,ts=(1+Math.sqrt(5))/2,ks=1/ts,Su=[new I(-ts,ks,0),new I(ts,ks,0),new I(-ks,0,ts),new I(ks,0,ts),new I(0,ts,-ks),new I(0,ts,ks),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],er=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ka=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ka,Qa,ja),this._renderer.xr.enabled=tc,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Js||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ka=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Wr,format:Fn,colorSpace:ar,depthBuffer:!1},i=bu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n_(r)),this._blurMaterial=i_(r,t,e)}return i}_compileMaterial(t){let e=new Nt(this._lodPlanes[0],t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,n,i){let a=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Mu),h.toneMapping=Ii,h.autoClear=!1;let f=new Ie({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new Nt(new pe,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Mu),_=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;Ro(i,S*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Js||t.mapping===$s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ro(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,$a)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Su[(i-r-1)%Su.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Nt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*is-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):is;m>is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${is}`);let p=[],S=0;for(let w=0;w<is;++w){let T=w/_,M=Math.exp(-T*T/2);p.push(M),w===0?S+=M:w<m&&(S+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let x=this._sizeLods[i],A=3*x*(i>v-Gs?i-v+Gs:0),b=4*(this._cubeSize-x);Ro(e,A,b,3*x,2*x),c.setRenderTarget(e),c.render(u,$a)}};function n_(s){let t=[],e=[],n=[],i=s,r=s-Gs+1+vu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Gs?c=vu[o-s+Gs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let b=0;b<f;b++){let w=b%3*2/3-1,T=b>2?0:-1,M=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];S.set(M,_*g*b),v.set(d,m*g*b);let y=[b,b,b,b,b,b];x.set(y,p*g*b)}let A=new je;A.setAttribute("position",new Ve(S,_)),A.setAttribute("uv",new Ve(v,m)),A.setAttribute("faceIndex",new Ve(x,p)),t.push(A),i>Gs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bu(s,t,e){let n=new ui(s,t,e);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function i_(s,t,e){let n=new Float32Array(is),i=new I(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Eu(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function wu(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function kl(){return`

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
	`}function s_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===gc||c===_c,h=c===Js||c===$s;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new er(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new er(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function r_(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Dr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function o_(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let S=f.array;_=f.version;for(let v=0,x=S.length;v<x;v+=3){let A=S[v+0],b=S[v+1],w=S[v+2];d.push(A,b,b,w,w,A)}}else if(g!==void 0){let S=g.array;_=g.version;for(let v=0,x=S.length/3-1;v<x;v+=3){let A=v+0,b=v+1,w=v+2;d.push(A,b,b,w,w,A)}}else return;let m=new(hd(d)?Xo:Wo)(d,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function a_(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function c_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function l_(s,t,e){let n=new WeakMap,i=new fe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let M=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*A*4*u),w=new Vo(b,x,A,u);w.type=qn,w.needsUpdate=!0;let T=v*4;for(let y=0;y<u;y++){let C=m[y],F=p[y],z=S[y],V=x*A*4*y;for(let K=0;K<C.count;K++){let N=K*T;f===!0&&(i.fromBufferAttribute(C,K),b[V+N+0]=i.x,b[V+N+1]=i.y,b[V+N+2]=i.z,b[V+N+3]=0),g===!0&&(i.fromBufferAttribute(F,K),b[V+N+4]=i.x,b[V+N+5]=i.y,b[V+N+6]=i.z,b[V+N+7]=0),_===!0&&(i.fromBufferAttribute(z,K),b[V+N+8]=i.x,b[V+N+9]=i.y,b[V+N+10]=i.z,b[V+N+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new Yt(x,A)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function h_(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Zo=class extends ln{constructor(t,e,n,i,r,o,a,c,l,h=Xs){if(h!==Xs&&h!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xs&&(n=os),n===void 0&&h===Qs&&(n=Ks),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:yn,this.minFilter=c!==void 0?c:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},pd=new ln,Tu=new Zo(1,1),md=new Vo,gd=new Jc,_d=new Yo,Au=[],Ru=[],Cu=new Float32Array(16),Pu=new Float32Array(9),Iu=new Float32Array(4);function lr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Au[i];if(r===void 0&&(r=new Float32Array(i),Au[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Oe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Fe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ia(s,t){let e=Ru[t];e===void 0&&(e=new Int32Array(t),Ru[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function u_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function d_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2fv(this.addr,t),Fe(e,t)}}function f_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;s.uniform3fv(this.addr,t),Fe(e,t)}}function p_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4fv(this.addr,t),Fe(e,t)}}function m_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Iu.set(n),s.uniformMatrix2fv(this.addr,!1,Iu),Fe(e,n)}}function g_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Pu.set(n),s.uniformMatrix3fv(this.addr,!1,Pu),Fe(e,n)}}function __(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Cu.set(n),s.uniformMatrix4fv(this.addr,!1,Cu),Fe(e,n)}}function x_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function y_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2iv(this.addr,t),Fe(e,t)}}function v_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3iv(this.addr,t),Fe(e,t)}}function M_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4iv(this.addr,t),Fe(e,t)}}function S_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function b_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2uiv(this.addr,t),Fe(e,t)}}function E_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3uiv(this.addr,t),Fe(e,t)}}function w_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4uiv(this.addr,t),Fe(e,t)}}function T_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Tu.compareFunction=ld,r=Tu):r=pd,e.setTexture2D(t||r,i)}function A_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gd,i)}function R_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_d,i)}function C_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||md,i)}function P_(s){switch(s){case 5126:return u_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return __;case 5124:case 35670:return x_;case 35667:case 35671:return y_;case 35668:case 35672:return v_;case 35669:case 35673:return M_;case 5125:return S_;case 36294:return b_;case 36295:return E_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}function I_(s,t){s.uniform1fv(this.addr,t)}function D_(s,t){let e=lr(t,this.size,2);s.uniform2fv(this.addr,e)}function L_(s,t){let e=lr(t,this.size,3);s.uniform3fv(this.addr,e)}function U_(s,t){let e=lr(t,this.size,4);s.uniform4fv(this.addr,e)}function N_(s,t){let e=lr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function O_(s,t){let e=lr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function F_(s,t){let e=lr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function B_(s,t){s.uniform1iv(this.addr,t)}function z_(s,t){s.uniform2iv(this.addr,t)}function k_(s,t){s.uniform3iv(this.addr,t)}function H_(s,t){s.uniform4iv(this.addr,t)}function V_(s,t){s.uniform1uiv(this.addr,t)}function G_(s,t){s.uniform2uiv(this.addr,t)}function W_(s,t){s.uniform3uiv(this.addr,t)}function X_(s,t){s.uniform4uiv(this.addr,t)}function q_(s,t,e){let n=this.cache,i=t.length,r=ia(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||pd,r[o])}function Y_(s,t,e){let n=this.cache,i=t.length,r=ia(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||gd,r[o])}function Z_(s,t,e){let n=this.cache,i=t.length,r=ia(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||_d,r[o])}function J_(s,t,e){let n=this.cache,i=t.length,r=ia(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||md,r[o])}function $_(s){switch(s){case 5126:return I_;case 35664:return D_;case 35665:return L_;case 35666:return U_;case 35674:return N_;case 35675:return O_;case 35676:return F_;case 5124:case 35670:return B_;case 35667:case 35671:return z_;case 35668:case 35672:return k_;case 35669:case 35673:return H_;case 5125:return V_;case 36294:return G_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return J_}}var jc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=P_(e.type)}},tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$_(e.type)}},el=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},ec=/(\w+)(\])?(\[|\.)?/g;function Du(s,t){s.seq.push(t),s.map[t.id]=t}function K_(s,t,e){let n=s.name,i=n.length;for(ec.lastIndex=0;;){let r=ec.exec(n),o=ec.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Du(e,l===void 0?new jc(a,s,t):new tl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new el(a),Du(e,u)),e=u}}}var Ys=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);K_(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Lu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Q_=37297,j_=0;function tx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Uu=new te;function ex(s){se._getMatrix(Uu,se.workingColorSpace,s);let t=`mat3( ${Uu.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(s)){case na:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Nu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+tx(s.getShaderSource(t),o)}else return i}function nx(s,t){let e=ex(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ix(s,t){let e;switch(t){case pp:e="Linear";break;case mp:e="Reinhard";break;case gp:e="Cineon";break;case Gr:e="ACESFilmic";break;case xp:e="AgX";break;case yp:e="Neutral";break;case _p:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Co=new I;function sx(){se.getLuminanceCoefficients(Co);let s=Co.x.toFixed(4),t=Co.y.toFixed(4),e=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function ox(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ax(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Lr(s){return s!==""}function Ou(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(s){return s.replace(cx,hx)}var lx=new Map;function hx(s,t){let e=ne[t];if(e===void 0){let n=lx.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return nl(e)}var ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(s){return s.replace(ux,dx)}function dx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function fx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Yf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function px(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Js:case $s:t="ENVMAP_TYPE_CUBE";break;case ea:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $s:t="ENVMAP_MODE_REFRACTION";break}return t}function gx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ku:t="ENVMAP_BLENDING_MULTIPLY";break;case dp:t="ENVMAP_BLENDING_MIX";break;case fp:t="ENVMAP_BLENDING_ADD";break}return t}function _x(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xx(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=fx(e),l=px(e),h=mx(e),u=gx(e),d=_x(e),f=rx(e),g=ox(r),_=i.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(m=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?ne.tonemapping_pars_fragment:"",e.toneMapping!==Ii?ix("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,nx("linearToOutputTexel",e.outputColorSpace),sx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),o=nl(o),o=Ou(o,e),o=Fu(o,e),a=nl(a),a=Ou(a,e),a=Fu(a,e),o=Bu(o),a=Bu(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=S+m+o,x=S+p+a,A=Lu(i,i.VERTEX_SHADER,v),b=Lu(i,i.FRAGMENT_SHADER,x);i.attachShader(_,A),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(C){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(_).trim(),z=i.getShaderInfoLog(A).trim(),V=i.getShaderInfoLog(b).trim(),K=!0,N=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,b);else{let nt=Nu(i,A,"vertex"),G=Nu(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+nt+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(z===""||V==="")&&(N=!1);N&&(C.diagnostics={runnable:K,programLog:F,vertexShader:{log:z,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(A),i.deleteShader(b),T=new Ys(i,_),M=ax(i,_)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,Q_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}var yx=0,il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new sl(t),e.set(t,n)),n}},sl=class{constructor(t){this.id=yx++,this.code=t,this.usedTimes=0}};function vx(s,t,e,n,i,r,o){let a=new Go,c=new il,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,C,F,z){let V=F.fog,K=z.geometry,N=M.isMeshStandardMaterial?F.environment:null,nt=(M.isMeshStandardMaterial?e:t).get(M.envMap||N),G=nt&&nt.mapping===ea?nt.image.height:null,lt=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let Q=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,dt=Q!==void 0?Q.length:0,St=0;K.morphAttributes.position!==void 0&&(St=1),K.morphAttributes.normal!==void 0&&(St=2),K.morphAttributes.color!==void 0&&(St=3);let k,D,B,q;if(lt){let wt=Wn[lt];k=wt.vertexShader,D=wt.fragmentShader}else k=M.vertexShader,D=M.fragmentShader,c.update(M),B=c.getVertexShaderID(M),q=c.getFragmentShaderID(M);let L=s.getRenderTarget(),st=s.state.buffers.depth.getReversed(),xt=z.isInstancedMesh===!0,At=z.isBatchedMesh===!0,Tt=!!M.map,vt=!!M.matcap,kt=!!nt,H=!!M.aoMap,Qt=!!M.lightMap,Vt=!!M.bumpMap,Ft=!!M.normalMap,Rt=!!M.displacementMap,Zt=!!M.emissiveMap,Pt=!!M.metalnessMap,P=!!M.roughnessMap,E=M.anisotropy>0,Z=M.clearcoat>0,yt=M.dispersion>0,bt=M.iridescence>0,ht=M.sheen>0,gt=M.transmission>0,_t=E&&!!M.anisotropyMap,Mt=Z&&!!M.clearcoatMap,Bt=Z&&!!M.clearcoatNormalMap,rt=Z&&!!M.clearcoatRoughnessMap,ut=bt&&!!M.iridescenceMap,Dt=bt&&!!M.iridescenceThicknessMap,ct=ht&&!!M.sheenColorMap,mt=ht&&!!M.sheenRoughnessMap,tt=!!M.specularMap,ft=!!M.specularColorMap,pt=!!M.specularIntensityMap,U=gt&&!!M.transmissionMap,j=gt&&!!M.thicknessMap,Y=!!M.gradientMap,J=!!M.alphaMap,O=M.alphaTest>0,$=!!M.alphaHash,Et=!!M.extensions,It=Ii;M.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(It=s.toneMapping);let at={shaderID:lt,shaderType:M.type,shaderName:M.name,vertexShader:k,fragmentShader:D,defines:M.defines,customVertexShaderID:B,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:At,batchingColor:At&&z._colorsTexture!==null,instancing:xt,instancingColor:xt&&z.instanceColor!==null,instancingMorph:xt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:L===null?s.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ar,alphaToCoverage:!!M.alphaToCoverage,map:Tt,matcap:vt,envMap:kt,envMapMode:kt&&nt.mapping,envMapCubeUVHeight:G,aoMap:H,lightMap:Qt,bumpMap:Vt,normalMap:Ft,displacementMap:d&&Rt,emissiveMap:Zt,normalMapObjectSpace:Ft&&M.normalMapType===bp,normalMapTangentSpace:Ft&&M.normalMapType===cd,metalnessMap:Pt,roughnessMap:P,anisotropy:E,anisotropyMap:_t,clearcoat:Z,clearcoatMap:Mt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:rt,dispersion:yt,iridescence:bt,iridescenceMap:ut,iridescenceThicknessMap:Dt,sheen:ht,sheenColorMap:ct,sheenRoughnessMap:mt,specularMap:tt,specularColorMap:ft,specularIntensityMap:pt,transmission:gt,transmissionMap:U,thicknessMap:j,gradientMap:Y,opaque:M.transparent===!1&&M.blending===Ws&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:O,alphaHash:$,combine:M.combine,mapUv:Tt&&_(M.map.channel),aoMapUv:H&&_(M.aoMap.channel),lightMapUv:Qt&&_(M.lightMap.channel),bumpMapUv:Vt&&_(M.bumpMap.channel),normalMapUv:Ft&&_(M.normalMap.channel),displacementMapUv:Rt&&_(M.displacementMap.channel),emissiveMapUv:Zt&&_(M.emissiveMap.channel),metalnessMapUv:Pt&&_(M.metalnessMap.channel),roughnessMapUv:P&&_(M.roughnessMap.channel),anisotropyMapUv:_t&&_(M.anisotropyMap.channel),clearcoatMapUv:Mt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(M.sheenRoughnessMap.channel),specularMapUv:tt&&_(M.specularMap.channel),specularColorMapUv:ft&&_(M.specularColorMap.channel),specularIntensityMapUv:pt&&_(M.specularIntensityMap.channel),transmissionMapUv:U&&_(M.transmissionMap.channel),thicknessMapUv:j&&_(M.thicknessMap.channel),alphaMapUv:J&&_(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ft||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(Tt||J),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:st,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:St,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:Tt&&M.map.isVideoTexture===!0&&se.getTransfer(M.map.colorSpace)===de,decodeVideoTextureEmissive:Zt&&M.emissiveMap.isVideoTexture===!0&&se.getTransfer(M.emissiveMap.colorSpace)===de,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===On,flipSided:M.side===Qe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Et&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&M.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function p(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)y.push(C),y.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(S(y,M),v(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function S(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){let y=g[M.type],C;if(y){let F=Wn[y];C=hm.clone(F.uniforms)}else C=M.uniforms;return C}function A(M,y){let C;for(let F=0,z=h.length;F<z;F++){let V=h[F];if(V.cacheKey===y){C=V,++C.usedTimes;break}}return C===void 0&&(C=new xx(s,y,M,r),h.push(C)),C}function b(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function w(M){c.remove(M)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:T}}function Mx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Sx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ku(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Hu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Sx),n.length>1&&n.sort(d||ku),i.length>1&&i.sort(d||ku)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function bx(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Hu,s.set(n,[o])):i>=r.length?(o=new Hu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Ex(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new $t};break;case"SpotLight":e={position:new I,direction:new I,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function wx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Tx=0;function Ax(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Rx(s){let t=new Ex,e=wx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let i=new I,r=new oe,o=new oe;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,v=0,x=0,A=0,b=0,w=0;l.sort(Ax);for(let M=0,y=l.length;M<y;M++){let C=l[M],F=C.color,z=C.intensity,V=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=F.r*z,u+=F.g*z,d+=F.b*z;else if(C.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(C.sh.coefficients[N],z);w++}else if(C.isDirectionalLight){let N=t.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let nt=C.shadow,G=e.get(C);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=C.shadow.matrix,S++}n.directional[f]=N,f++}else if(C.isSpotLight){let N=t.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(F).multiplyScalar(z),N.distance=V,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,n.spot[_]=N;let nt=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,nt.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[_]=nt.matrix,C.castShadow){let G=e.get(C);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=K,x++}_++}else if(C.isRectAreaLight){let N=t.get(C);N.color.copy(F).multiplyScalar(z),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=N,m++}else if(C.isPointLight){let N=t.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){let nt=C.shadow,G=e.get(C);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,G.shadowCameraNear=nt.camera.near,G.shadowCameraFar=nt.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=N,g++}else if(C.isHemisphereLight){let N=t.get(C);N.skyColor.copy(C.color).multiplyScalar(z),N.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[p]=N,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==f||T.pointLength!==g||T.spotLength!==_||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==S||T.numPointShadows!==v||T.numSpotShadows!==x||T.numSpotMaps!==A||T.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,T.directionalLength=f,T.pointLength=g,T.spotLength=_,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=S,T.numPointShadows=v,T.numSpotShadows=x,T.numSpotMaps=A,T.numLightProbes=w,n.version=Tx++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let v=l[p];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(v.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Vu(s){let t=new Rx(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Cx(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Vu(s),t.set(i,[a])):r>=o.length?(a=new Vu(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var rl=class extends cs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ol=class extends cs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ix=`uniform sampler2D shadow_pass;
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
}`;function Dx(s,t,e){let n=new Hr,i=new Yt,r=new Yt,o=new fe,a=new rl({depthPacking:Sp}),c=new ol,l={},h=e.maxTextureSize,u={[Di]:Qe,[Qe]:Di,[On]:On},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:Px,fragmentShader:Ix}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new je;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Nt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$u;let p=this.type;this.render=function(b,w,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let M=s.getRenderTarget(),y=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Pi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=p!==oi&&this.type===oi,V=p===oi&&this.type!==oi;for(let K=0,N=b.length;K<N;K++){let nt=b[K],G=nt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let lt=G.getFrameExtents();if(i.multiply(lt),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/lt.x),i.x=r.x*lt.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/lt.y),i.y=r.y*lt.y,G.mapSize.y=r.y)),G.map===null||z===!0||V===!0){let dt=this.type!==oi?{minFilter:yn,magFilter:yn}:{};G.map!==null&&G.map.dispose(),G.map=new ui(i.x,i.y,dt),G.map.texture.name=nt.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let Q=G.getViewportCount();for(let dt=0;dt<Q;dt++){let St=G.getViewport(dt);o.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),F.viewport(o),G.updateMatrices(nt,dt),n=G.getFrustum(),x(w,T,G.camera,nt,this.type)}G.isPointLightShadow!==!0&&this.type===oi&&S(G,T),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,y,C)};function S(b,w){let T=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ui(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,T,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,T,f,_,null)}function v(b,w,T,M){let y=null,C=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)y=C;else if(y=T.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let F=y.uuid,z=w.uuid,V=l[F];V===void 0&&(V={},l[F]=V);let K=V[z];K===void 0&&(K=y.clone(),V[z]=K,w.addEventListener("dispose",A)),y=K}if(y.visible=w.visible,y.wireframe=w.wireframe,M===oi?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let F=s.properties.get(y);F.light=T}return y}function x(b,w,T,M,y){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===oi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);let z=t.update(b),V=b.material;if(Array.isArray(V)){let K=z.groups;for(let N=0,nt=K.length;N<nt;N++){let G=K[N],lt=V[G.materialIndex];if(lt&&lt.visible){let Q=v(b,lt,M,y);b.onBeforeShadow(s,b,w,T,z,Q,G),s.renderBufferDirect(T,null,z,Q,b,G),b.onAfterShadow(s,b,w,T,z,Q,G)}}}else if(V.visible){let K=v(b,V,M,y);b.onBeforeShadow(s,b,w,T,z,K,null),s.renderBufferDirect(T,null,z,K,b,null),b.onAfterShadow(s,b,w,T,z,K,null)}}let F=b.children;for(let z=0,V=F.length;z<V;z++)x(F[z],w,T,M,y)}function A(b){b.target.removeEventListener("dispose",A);for(let T in l){let M=l[T],y=b.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var Lx={[lc]:hc,[uc]:pc,[dc]:mc,[Zs]:fc,[hc]:lc,[pc]:uc,[mc]:dc,[fc]:Zs};function Ux(s,t){function e(){let U=!1,j=new fe,Y=null,J=new fe(0,0,0,0);return{setMask:function(O){Y!==O&&!U&&(s.colorMask(O,O,O,O),Y=O)},setLocked:function(O){U=O},setClear:function(O,$,Et,It,at){at===!0&&(O*=It,$*=It,Et*=It),j.set(O,$,Et,It),J.equals(j)===!1&&(s.clearColor(O,$,Et,It),J.copy(j))},reset:function(){U=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let U=!1,j=!1,Y=null,J=null,O=null;return{setReversed:function($){if(j!==$){let Et=t.get("EXT_clip_control");j?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT);let It=O;O=null,this.setClear(It)}j=$},getReversed:function(){return j},setTest:function($){$?L(s.DEPTH_TEST):st(s.DEPTH_TEST)},setMask:function($){Y!==$&&!U&&(s.depthMask($),Y=$)},setFunc:function($){if(j&&($=Lx[$]),J!==$){switch($){case lc:s.depthFunc(s.NEVER);break;case hc:s.depthFunc(s.ALWAYS);break;case uc:s.depthFunc(s.LESS);break;case Zs:s.depthFunc(s.LEQUAL);break;case dc:s.depthFunc(s.EQUAL);break;case fc:s.depthFunc(s.GEQUAL);break;case pc:s.depthFunc(s.GREATER);break;case mc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=$}},setLocked:function($){U=$},setClear:function($){O!==$&&(j&&($=1-$),s.clearDepth($),O=$)},reset:function(){U=!1,Y=null,J=null,O=null,j=!1}}}function i(){let U=!1,j=null,Y=null,J=null,O=null,$=null,Et=null,It=null,at=null;return{setTest:function(wt){U||(wt?L(s.STENCIL_TEST):st(s.STENCIL_TEST))},setMask:function(wt){j!==wt&&!U&&(s.stencilMask(wt),j=wt)},setFunc:function(wt,zt,Jt){(Y!==wt||J!==zt||O!==Jt)&&(s.stencilFunc(wt,zt,Jt),Y=wt,J=zt,O=Jt)},setOp:function(wt,zt,Jt){($!==wt||Et!==zt||It!==Jt)&&(s.stencilOp(wt,zt,Jt),$=wt,Et=zt,It=Jt)},setLocked:function(wt){U=wt},setClear:function(wt){at!==wt&&(s.clearStencil(wt),at=wt)},reset:function(){U=!1,j=null,Y=null,J=null,O=null,$=null,Et=null,It=null,at=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,v=null,x=null,A=null,b=null,w=new $t(0,0,0),T=0,M=!1,y=null,C=null,F=null,z=null,V=null,K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,nt=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=nt>=1):G.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=nt>=2);let lt=null,Q={},dt=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),k=new fe().fromArray(dt),D=new fe().fromArray(St);function B(U,j,Y,J){let O=new Uint8Array(4),$=s.createTexture();s.bindTexture(U,$),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Et=0;Et<Y;Et++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,O):s.texImage2D(j+Et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,O);return $}let q={};q[s.TEXTURE_2D]=B(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=B(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=B(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=B(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),L(s.DEPTH_TEST),o.setFunc(Zs),Vt(!1),Ft(Gh),L(s.CULL_FACE),H(Pi);function L(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function st(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function xt(U,j){return u[U]!==j?(s.bindFramebuffer(U,j),u[U]=j,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=j),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=j),!0):!1}function At(U,j){let Y=f,J=!1;if(U){Y=d.get(j),Y===void 0&&(Y=[],d.set(j,Y));let O=U.textures;if(Y.length!==O.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let $=0,Et=O.length;$<Et;$++)Y[$]=s.COLOR_ATTACHMENT0+$;Y.length=O.length,J=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,J=!0);J&&s.drawBuffers(Y)}function Tt(U){return g!==U?(s.useProgram(U),g=U,!0):!1}let vt={[es]:s.FUNC_ADD,[Jf]:s.FUNC_SUBTRACT,[$f]:s.FUNC_REVERSE_SUBTRACT};vt[Kf]=s.MIN,vt[Qf]=s.MAX;let kt={[jf]:s.ZERO,[tp]:s.ONE,[ep]:s.SRC_COLOR,[ac]:s.SRC_ALPHA,[ap]:s.SRC_ALPHA_SATURATE,[rp]:s.DST_COLOR,[ip]:s.DST_ALPHA,[np]:s.ONE_MINUS_SRC_COLOR,[cc]:s.ONE_MINUS_SRC_ALPHA,[op]:s.ONE_MINUS_DST_COLOR,[sp]:s.ONE_MINUS_DST_ALPHA,[cp]:s.CONSTANT_COLOR,[lp]:s.ONE_MINUS_CONSTANT_COLOR,[hp]:s.CONSTANT_ALPHA,[up]:s.ONE_MINUS_CONSTANT_ALPHA};function H(U,j,Y,J,O,$,Et,It,at,wt){if(U===Pi){_===!0&&(st(s.BLEND),_=!1);return}if(_===!1&&(L(s.BLEND),_=!0),U!==Zf){if(U!==m||wt!==M){if((p!==es||x!==es)&&(s.blendEquation(s.FUNC_ADD),p=es,x=es),wt)switch(U){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wh:s.blendFunc(s.ONE,s.ONE);break;case Xh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,v=null,A=null,b=null,w.set(0,0,0),T=0,m=U,M=wt}return}O=O||j,$=$||Y,Et=Et||J,(j!==p||O!==x)&&(s.blendEquationSeparate(vt[j],vt[O]),p=j,x=O),(Y!==S||J!==v||$!==A||Et!==b)&&(s.blendFuncSeparate(kt[Y],kt[J],kt[$],kt[Et]),S=Y,v=J,A=$,b=Et),(It.equals(w)===!1||at!==T)&&(s.blendColor(It.r,It.g,It.b,at),w.copy(It),T=at),m=U,M=!1}function Qt(U,j){U.side===On?st(s.CULL_FACE):L(s.CULL_FACE);let Y=U.side===Qe;j&&(Y=!Y),Vt(Y),U.blending===Ws&&U.transparent===!1?H(Pi):H(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Zt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?L(s.SAMPLE_ALPHA_TO_COVERAGE):st(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(U){y!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),y=U)}function Ft(U){U!==Xf?(L(s.CULL_FACE),U!==C&&(U===Gh?s.cullFace(s.BACK):U===qf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):st(s.CULL_FACE),C=U}function Rt(U){U!==F&&(N&&s.lineWidth(U),F=U)}function Zt(U,j,Y){U?(L(s.POLYGON_OFFSET_FILL),(z!==j||V!==Y)&&(s.polygonOffset(j,Y),z=j,V=Y)):st(s.POLYGON_OFFSET_FILL)}function Pt(U){U?L(s.SCISSOR_TEST):st(s.SCISSOR_TEST)}function P(U){U===void 0&&(U=s.TEXTURE0+K-1),lt!==U&&(s.activeTexture(U),lt=U)}function E(U,j,Y){Y===void 0&&(lt===null?Y=s.TEXTURE0+K-1:Y=lt);let J=Q[Y];J===void 0&&(J={type:void 0,texture:void 0},Q[Y]=J),(J.type!==U||J.texture!==j)&&(lt!==Y&&(s.activeTexture(Y),lt=Y),s.bindTexture(U,j||q[U]),J.type=U,J.texture=j)}function Z(){let U=Q[lt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function yt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Bt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(U){k.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),k.copy(U))}function mt(U){D.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),D.copy(U))}function tt(U,j){let Y=l.get(j);Y===void 0&&(Y=new WeakMap,l.set(j,Y));let J=Y.get(U);J===void 0&&(J=s.getUniformBlockIndex(j,U.name),Y.set(U,J))}function ft(U,j){let J=l.get(j).get(U);c.get(j)!==J&&(s.uniformBlockBinding(j,J,U.__bindingPointIndex),c.set(j,J))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},lt=null,Q={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,v=null,x=null,A=null,b=null,w=new $t(0,0,0),T=0,M=!1,y=null,C=null,F=null,z=null,V=null,k.set(0,0,s.canvas.width,s.canvas.height),D.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:L,disable:st,bindFramebuffer:xt,drawBuffers:At,useProgram:Tt,setBlending:H,setMaterial:Qt,setFlipSided:Vt,setCullFace:Ft,setLineWidth:Rt,setPolygonOffset:Zt,setScissorTest:Pt,activeTexture:P,bindTexture:E,unbindTexture:Z,compressedTexImage2D:yt,compressedTexImage3D:bt,texImage2D:ut,texImage3D:Dt,updateUBOMapping:tt,uniformBlockBinding:ft,texStorage2D:Bt,texStorage3D:rt,texSubImage2D:ht,texSubImage3D:gt,compressedTexSubImage2D:_t,compressedTexSubImage3D:Mt,scissor:ct,viewport:mt,reset:pt}}function Gu(s,t,e,n){let i=Nx(n);switch(e){case nd:return s*t;case sd:return s*t;case rd:return s*t*2;case Nl:return s*t/i.components*i.byteLength;case Ol:return s*t/i.components*i.byteLength;case od:return s*t*2/i.components*i.byteLength;case Fl:return s*t*2/i.components*i.byteLength;case id:return s*t*3/i.components*i.byteLength;case Fn:return s*t*4/i.components*i.byteLength;case Bl:return s*t*4/i.components*i.byteLength;case Lo:case Uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case No:case Oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mc:case bc:return Math.max(s,16)*Math.max(t,8)/4;case vc:case Sc:return Math.max(s,8)*Math.max(t,8)/2;case Ec:case wc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Tc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case zc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case kc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Fo:case Hc:case Vc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ad:case Gc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Wc:case Xc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Nx(s){switch(s){case hi:case ju:return{byteLength:1,components:1};case zr:case td:case Wr:return{byteLength:2,components:1};case Ll:case Ul:return{byteLength:2,components:4};case os:case Dl:case qn:return{byteLength:4,components:1};case ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Ox(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Yt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return f?new OffscreenCanvas(P,E):ko("canvas")}function _(P,E,Z){let yt=1,bt=Pt(P);if((bt.width>Z||bt.height>Z)&&(yt=Z/Math.max(bt.width,bt.height)),yt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ht=Math.floor(yt*bt.width),gt=Math.floor(yt*bt.height);u===void 0&&(u=g(ht,gt));let _t=E?g(ht,gt):u;return _t.width=ht,_t.height=gt,_t.getContext("2d").drawImage(P,0,0,ht,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+ht+"x"+gt+")."),_t}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(P,E,Z,yt,bt=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ht=E;if(E===s.RED&&(Z===s.FLOAT&&(ht=s.R32F),Z===s.HALF_FLOAT&&(ht=s.R16F),Z===s.UNSIGNED_BYTE&&(ht=s.R8)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ht=s.R8UI),Z===s.UNSIGNED_SHORT&&(ht=s.R16UI),Z===s.UNSIGNED_INT&&(ht=s.R32UI),Z===s.BYTE&&(ht=s.R8I),Z===s.SHORT&&(ht=s.R16I),Z===s.INT&&(ht=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(ht=s.RG32F),Z===s.HALF_FLOAT&&(ht=s.RG16F),Z===s.UNSIGNED_BYTE&&(ht=s.RG8)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ht=s.RG8UI),Z===s.UNSIGNED_SHORT&&(ht=s.RG16UI),Z===s.UNSIGNED_INT&&(ht=s.RG32UI),Z===s.BYTE&&(ht=s.RG8I),Z===s.SHORT&&(ht=s.RG16I),Z===s.INT&&(ht=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),Z===s.UNSIGNED_INT&&(ht=s.RGB32UI),Z===s.BYTE&&(ht=s.RGB8I),Z===s.SHORT&&(ht=s.RGB16I),Z===s.INT&&(ht=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),Z===s.UNSIGNED_INT&&(ht=s.RGBA32UI),Z===s.BYTE&&(ht=s.RGBA8I),Z===s.SHORT&&(ht=s.RGBA16I),Z===s.INT&&(ht=s.RGBA32I)),E===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),E===s.RGBA){let gt=bt?na:se.getTransfer(yt);Z===s.FLOAT&&(ht=s.RGBA32F),Z===s.HALF_FLOAT&&(ht=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ht=gt===de?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function x(P,E){let Z;return P?E===null||E===os||E===Ks?Z=s.DEPTH24_STENCIL8:E===qn?Z=s.DEPTH32F_STENCIL8:E===zr&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===os||E===Ks?Z=s.DEPTH_COMPONENT24:E===qn?Z=s.DEPTH_COMPONENT32F:E===zr&&(Z=s.DEPTH_COMPONENT16),Z}function A(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==yn&&P.minFilter!==Xn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function b(P){let E=P.target;E.removeEventListener("dispose",b),T(E),E.isVideoTexture&&h.delete(E)}function w(P){let E=P.target;E.removeEventListener("dispose",w),y(E)}function T(P){let E=n.get(P);if(E.__webglInit===void 0)return;let Z=P.source,yt=d.get(Z);if(yt){let bt=yt[E.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&M(P),Object.keys(yt).length===0&&d.delete(Z)}n.remove(P)}function M(P){let E=n.get(P);s.deleteTexture(E.__webglTexture);let Z=P.source,yt=d.get(Z);delete yt[E.__cacheKey],o.memory.textures--}function y(P){let E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(E.__webglFramebuffer[yt]))for(let bt=0;bt<E.__webglFramebuffer[yt].length;bt++)s.deleteFramebuffer(E.__webglFramebuffer[yt][bt]);else s.deleteFramebuffer(E.__webglFramebuffer[yt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[yt])}else{if(Array.isArray(E.__webglFramebuffer))for(let yt=0;yt<E.__webglFramebuffer.length;yt++)s.deleteFramebuffer(E.__webglFramebuffer[yt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let yt=0;yt<E.__webglColorRenderbuffer.length;yt++)E.__webglColorRenderbuffer[yt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[yt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let Z=P.textures;for(let yt=0,bt=Z.length;yt<bt;yt++){let ht=n.get(Z[yt]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),o.memory.textures--),n.remove(Z[yt])}n.remove(P)}let C=0;function F(){C=0}function z(){let P=C;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),C+=1,P}function V(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function K(P,E){let Z=n.get(P);if(P.isVideoTexture&&Rt(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){let yt=P.image;if(yt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(Z,P,E);return}}e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function N(P,E){let Z=n.get(P);if(P.version>0&&Z.__version!==P.version){D(Z,P,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function nt(P,E){let Z=n.get(P);if(P.version>0&&Z.__version!==P.version){D(Z,P,E);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function G(P,E){let Z=n.get(P);if(P.version>0&&Z.__version!==P.version){B(Z,P,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}let lt={[xc]:s.REPEAT,[ss]:s.CLAMP_TO_EDGE,[yc]:s.MIRRORED_REPEAT},Q={[yn]:s.NEAREST,[vp]:s.NEAREST_MIPMAP_NEAREST,[co]:s.NEAREST_MIPMAP_LINEAR,[Xn]:s.LINEAR,[Ra]:s.LINEAR_MIPMAP_NEAREST,[rs]:s.LINEAR_MIPMAP_LINEAR},dt={[Ep]:s.NEVER,[Pp]:s.ALWAYS,[wp]:s.LESS,[ld]:s.LEQUAL,[Tp]:s.EQUAL,[Cp]:s.GEQUAL,[Ap]:s.GREATER,[Rp]:s.NOTEQUAL};function St(P,E){if(E.type===qn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Xn||E.magFilter===Ra||E.magFilter===co||E.magFilter===rs||E.minFilter===Xn||E.minFilter===Ra||E.minFilter===co||E.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,lt[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,lt[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,lt[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Q[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,dt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yn||E.minFilter!==co&&E.minFilter!==rs||E.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function k(P,E){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",b));let yt=E.source,bt=d.get(yt);bt===void 0&&(bt={},d.set(yt,bt));let ht=V(E);if(ht!==P.__cacheKey){bt[ht]===void 0&&(bt[ht]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),bt[ht].usedTimes++;let gt=bt[P.__cacheKey];gt!==void 0&&(bt[P.__cacheKey].usedTimes--,gt.usedTimes===0&&M(E)),P.__cacheKey=ht,P.__webglTexture=bt[ht].texture}return Z}function D(P,E,Z){let yt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(yt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(yt=s.TEXTURE_3D);let bt=k(P,E),ht=E.source;e.bindTexture(yt,P.__webglTexture,s.TEXTURE0+Z);let gt=n.get(ht);if(ht.version!==gt.__version||bt===!0){e.activeTexture(s.TEXTURE0+Z);let _t=se.getPrimaries(se.workingColorSpace),Mt=E.colorSpace===Ci?null:se.getPrimaries(E.colorSpace),Bt=E.colorSpace===Ci||_t===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let rt=_(E.image,!1,i.maxTextureSize);rt=Zt(E,rt);let ut=r.convert(E.format,E.colorSpace),Dt=r.convert(E.type),ct=v(E.internalFormat,ut,Dt,E.colorSpace,E.isVideoTexture);St(yt,E);let mt,tt=E.mipmaps,ft=E.isVideoTexture!==!0,pt=gt.__version===void 0||bt===!0,U=ht.dataReady,j=A(E,rt);if(E.isDepthTexture)ct=x(E.format===Qs,E.type),pt&&(ft?e.texStorage2D(s.TEXTURE_2D,1,ct,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,ct,rt.width,rt.height,0,ut,Dt,null));else if(E.isDataTexture)if(tt.length>0){ft&&pt&&e.texStorage2D(s.TEXTURE_2D,j,ct,tt[0].width,tt[0].height);for(let Y=0,J=tt.length;Y<J;Y++)mt=tt[Y],ft?U&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,mt.width,mt.height,ut,Dt,mt.data):e.texImage2D(s.TEXTURE_2D,Y,ct,mt.width,mt.height,0,ut,Dt,mt.data);E.generateMipmaps=!1}else ft?(pt&&e.texStorage2D(s.TEXTURE_2D,j,ct,rt.width,rt.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,ut,Dt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,ct,rt.width,rt.height,0,ut,Dt,rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ft&&pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,j,ct,tt[0].width,tt[0].height,rt.depth);for(let Y=0,J=tt.length;Y<J;Y++)if(mt=tt[Y],E.format!==Fn)if(ut!==null)if(ft){if(U)if(E.layerUpdates.size>0){let O=Gu(mt.width,mt.height,E.format,E.type);for(let $ of E.layerUpdates){let Et=mt.data.subarray($*O/mt.data.BYTES_PER_ELEMENT,($+1)*O/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,$,mt.width,mt.height,1,ut,Et)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,mt.width,mt.height,rt.depth,ut,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,ct,mt.width,mt.height,rt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,mt.width,mt.height,rt.depth,ut,Dt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,ct,mt.width,mt.height,rt.depth,0,ut,Dt,mt.data)}else{ft&&pt&&e.texStorage2D(s.TEXTURE_2D,j,ct,tt[0].width,tt[0].height);for(let Y=0,J=tt.length;Y<J;Y++)mt=tt[Y],E.format!==Fn?ut!==null?ft?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,mt.width,mt.height,ut,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?U&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,mt.width,mt.height,ut,Dt,mt.data):e.texImage2D(s.TEXTURE_2D,Y,ct,mt.width,mt.height,0,ut,Dt,mt.data)}else if(E.isDataArrayTexture)if(ft){if(pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,j,ct,rt.width,rt.height,rt.depth),U)if(E.layerUpdates.size>0){let Y=Gu(rt.width,rt.height,E.format,E.type);for(let J of E.layerUpdates){let O=rt.data.subarray(J*Y/rt.data.BYTES_PER_ELEMENT,(J+1)*Y/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,rt.width,rt.height,1,ut,Dt,O)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ut,Dt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ct,rt.width,rt.height,rt.depth,0,ut,Dt,rt.data);else if(E.isData3DTexture)ft?(pt&&e.texStorage3D(s.TEXTURE_3D,j,ct,rt.width,rt.height,rt.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ut,Dt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,ct,rt.width,rt.height,rt.depth,0,ut,Dt,rt.data);else if(E.isFramebufferTexture){if(pt)if(ft)e.texStorage2D(s.TEXTURE_2D,j,ct,rt.width,rt.height);else{let Y=rt.width,J=rt.height;for(let O=0;O<j;O++)e.texImage2D(s.TEXTURE_2D,O,ct,Y,J,0,ut,Dt,null),Y>>=1,J>>=1}}else if(tt.length>0){if(ft&&pt){let Y=Pt(tt[0]);e.texStorage2D(s.TEXTURE_2D,j,ct,Y.width,Y.height)}for(let Y=0,J=tt.length;Y<J;Y++)mt=tt[Y],ft?U&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ut,Dt,mt):e.texImage2D(s.TEXTURE_2D,Y,ct,ut,Dt,mt);E.generateMipmaps=!1}else if(ft){if(pt){let Y=Pt(rt);e.texStorage2D(s.TEXTURE_2D,j,ct,Y.width,Y.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,Dt,rt)}else e.texImage2D(s.TEXTURE_2D,0,ct,ut,Dt,rt);m(E)&&p(yt),gt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function B(P,E,Z){if(E.image.length!==6)return;let yt=k(P,E),bt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+Z);let ht=n.get(bt);if(bt.version!==ht.__version||yt===!0){e.activeTexture(s.TEXTURE0+Z);let gt=se.getPrimaries(se.workingColorSpace),_t=E.colorSpace===Ci?null:se.getPrimaries(E.colorSpace),Mt=E.colorSpace===Ci||gt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Bt=E.isCompressedTexture||E.image[0].isCompressedTexture,rt=E.image[0]&&E.image[0].isDataTexture,ut=[];for(let J=0;J<6;J++)!Bt&&!rt?ut[J]=_(E.image[J],!0,i.maxCubemapSize):ut[J]=rt?E.image[J].image:E.image[J],ut[J]=Zt(E,ut[J]);let Dt=ut[0],ct=r.convert(E.format,E.colorSpace),mt=r.convert(E.type),tt=v(E.internalFormat,ct,mt,E.colorSpace),ft=E.isVideoTexture!==!0,pt=ht.__version===void 0||yt===!0,U=bt.dataReady,j=A(E,Dt);St(s.TEXTURE_CUBE_MAP,E);let Y;if(Bt){ft&&pt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,j,tt,Dt.width,Dt.height);for(let J=0;J<6;J++){Y=ut[J].mipmaps;for(let O=0;O<Y.length;O++){let $=Y[O];E.format!==Fn?ct!==null?ft?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,O,0,0,$.width,$.height,ct,$.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,O,tt,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,O,0,0,$.width,$.height,ct,mt,$.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,O,tt,$.width,$.height,0,ct,mt,$.data)}}}else{if(Y=E.mipmaps,ft&&pt){Y.length>0&&j++;let J=Pt(ut[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,j,tt,J.width,J.height)}for(let J=0;J<6;J++)if(rt){ft?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ut[J].width,ut[J].height,ct,mt,ut[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,tt,ut[J].width,ut[J].height,0,ct,mt,ut[J].data);for(let O=0;O<Y.length;O++){let Et=Y[O].image[J].image;ft?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,O+1,0,0,Et.width,Et.height,ct,mt,Et.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,O+1,tt,Et.width,Et.height,0,ct,mt,Et.data)}}else{ft?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ct,mt,ut[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,tt,ct,mt,ut[J]);for(let O=0;O<Y.length;O++){let $=Y[O];ft?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,O+1,0,0,ct,mt,$.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,O+1,tt,ct,mt,$.image[J])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),ht.__version=bt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function q(P,E,Z,yt,bt,ht){let gt=r.convert(Z.format,Z.colorSpace),_t=r.convert(Z.type),Mt=v(Z.internalFormat,gt,_t,Z.colorSpace),Bt=n.get(E),rt=n.get(Z);if(rt.__renderTarget=E,!Bt.__hasExternalTextures){let ut=Math.max(1,E.width>>ht),Dt=Math.max(1,E.height>>ht);bt===s.TEXTURE_3D||bt===s.TEXTURE_2D_ARRAY?e.texImage3D(bt,ht,Mt,ut,Dt,E.depth,0,gt,_t,null):e.texImage2D(bt,ht,Mt,ut,Dt,0,gt,_t,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Ft(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,bt,rt.__webglTexture,0,Vt(E)):(bt===s.TEXTURE_2D||bt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,yt,bt,rt.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function L(P,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){let yt=E.depthTexture,bt=yt&&yt.isDepthTexture?yt.type:null,ht=x(E.stencilBuffer,bt),gt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=Vt(E);Ft(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t,ht,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,ht,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ht,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,P)}else{let yt=E.textures;for(let bt=0;bt<yt.length;bt++){let ht=yt[bt],gt=r.convert(ht.format,ht.colorSpace),_t=r.convert(ht.type),Mt=v(ht.internalFormat,gt,_t,ht.colorSpace),Bt=Vt(E);Z&&Ft(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,Mt,E.width,E.height):Ft(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Bt,Mt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Mt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function st(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let yt=n.get(E.depthTexture);yt.__renderTarget=E,(!yt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);let bt=yt.__webglTexture,ht=Vt(E);if(E.depthTexture.format===Xs)Ft(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,bt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,bt,0);else if(E.depthTexture.format===Qs)Ft(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,bt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function xt(P){let E=n.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let yt=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),yt){let bt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,yt.removeEventListener("dispose",bt)};yt.addEventListener("dispose",bt),E.__depthDisposeCallback=bt}E.__boundDepthTexture=yt}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");st(E.__webglFramebuffer,P)}else if(Z){E.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[yt]),E.__webglDepthbuffer[yt]===void 0)E.__webglDepthbuffer[yt]=s.createRenderbuffer(),L(E.__webglDepthbuffer[yt],P,!1);else{let bt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer[yt];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,ht)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),L(E.__webglDepthbuffer,P,!1);else{let yt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,bt),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,bt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function At(P,E,Z){let yt=n.get(P);E!==void 0&&q(yt.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&xt(P)}function Tt(P){let E=P.texture,Z=n.get(P),yt=n.get(E);P.addEventListener("dispose",w);let bt=P.textures,ht=P.isWebGLCubeRenderTarget===!0,gt=bt.length>1;if(gt||(yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture()),yt.__version=E.version,o.memory.textures++),ht){Z.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[_t]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)Z.__webglFramebuffer[_t][Mt]=s.createFramebuffer()}else Z.__webglFramebuffer[_t]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let _t=0;_t<E.mipmaps.length;_t++)Z.__webglFramebuffer[_t]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(gt)for(let _t=0,Mt=bt.length;_t<Mt;_t++){let Bt=n.get(bt[_t]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&Ft(P)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let _t=0;_t<bt.length;_t++){let Mt=bt[_t];Z.__webglColorRenderbuffer[_t]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[_t]);let Bt=r.convert(Mt.format,Mt.colorSpace),rt=r.convert(Mt.type),ut=v(Mt.internalFormat,Bt,rt,Mt.colorSpace,P.isXRRenderTarget===!0),Dt=Vt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ut,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,Z.__webglColorRenderbuffer[_t])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),L(Z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,yt.__webglTexture),St(s.TEXTURE_CUBE_MAP,E);for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)q(Z.__webglFramebuffer[_t][Mt],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Mt);else q(Z.__webglFramebuffer[_t],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(E)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let _t=0,Mt=bt.length;_t<Mt;_t++){let Bt=bt[_t],rt=n.get(Bt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),St(s.TEXTURE_2D,Bt),q(Z.__webglFramebuffer,P,Bt,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,0),m(Bt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let _t=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,yt.__webglTexture),St(_t,E),E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)q(Z.__webglFramebuffer[Mt],P,E,s.COLOR_ATTACHMENT0,_t,Mt);else q(Z.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,_t,0);m(E)&&p(_t),e.unbindTexture()}P.depthBuffer&&xt(P)}function vt(P){let E=P.textures;for(let Z=0,yt=E.length;Z<yt;Z++){let bt=E[Z];if(m(bt)){let ht=S(P),gt=n.get(bt).__webglTexture;e.bindTexture(ht,gt),p(ht),e.unbindTexture()}}}let kt=[],H=[];function Qt(P){if(P.samples>0){if(Ft(P)===!1){let E=P.textures,Z=P.width,yt=P.height,bt=s.COLOR_BUFFER_BIT,ht=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(P),_t=E.length>1;if(_t)for(let Mt=0;Mt<E.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Mt=0;Mt<E.length;Mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(bt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(bt|=s.STENCIL_BUFFER_BIT)),_t){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[Mt]);let Bt=n.get(E[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Bt,0)}s.blitFramebuffer(0,0,Z,yt,0,0,Z,yt,bt,s.NEAREST),c===!0&&(kt.length=0,H.length=0,kt.push(s.COLOR_ATTACHMENT0+Mt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(kt.push(ht),H.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_t)for(let Mt=0;Mt<E.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,gt.__webglColorRenderbuffer[Mt]);let Bt=n.get(E[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,Bt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Vt(P){return Math.min(i.maxSamples,P.samples)}function Ft(P){let E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Rt(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Zt(P,E){let Z=P.colorSpace,yt=P.format,bt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==ar&&Z!==Ci&&(se.getTransfer(Z)===de?(yt!==Fn||bt!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function Pt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=N,this.setTexture3D=nt,this.setTextureCube=G,this.rebindTextures=At,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Ft}function Fx(s,t){function e(n,i=Ci){let r,o=se.getTransfer(i);if(n===hi)return s.UNSIGNED_BYTE;if(n===Ll)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ed)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ju)return s.BYTE;if(n===td)return s.SHORT;if(n===zr)return s.UNSIGNED_SHORT;if(n===Dl)return s.INT;if(n===os)return s.UNSIGNED_INT;if(n===qn)return s.FLOAT;if(n===Wr)return s.HALF_FLOAT;if(n===nd)return s.ALPHA;if(n===id)return s.RGB;if(n===Fn)return s.RGBA;if(n===sd)return s.LUMINANCE;if(n===rd)return s.LUMINANCE_ALPHA;if(n===Xs)return s.DEPTH_COMPONENT;if(n===Qs)return s.DEPTH_STENCIL;if(n===Nl)return s.RED;if(n===Ol)return s.RED_INTEGER;if(n===od)return s.RG;if(n===Fl)return s.RG_INTEGER;if(n===Bl)return s.RGBA_INTEGER;if(n===Lo||n===Uo||n===No||n===Oo)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vc||n===Mc||n===Sc||n===bc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ec||n===wc||n===Tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ec||n===wc)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Dc||n===Lc||n===Uc||n===Nc||n===Oc||n===Fc||n===Bc||n===zc||n===kc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ic)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===Hc||n===Vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ad||n===Gc||n===Wc||n===Xc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var al=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Kt=class extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bx={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kx=`
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

}`,cl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new ln,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Yn({vertexShader:zx,fragmentShader:kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new Ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ll=class extends Li{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,_=new cl,m=e.getContextAttributes(),p=null,S=null,v=[],x=[],A=new Yt,b=null,w=new Ke;w.viewport=new fe;let T=new Ke;T.viewport=new fe;let M=[w,T],y=new al,C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let B=v[D];return B===void 0&&(B=new Or,v[D]=B),B.getTargetRaySpace()},this.getControllerGrip=function(D){let B=v[D];return B===void 0&&(B=new Or,v[D]=B),B.getGripSpace()},this.getHand=function(D){let B=v[D];return B===void 0&&(B=new Or,v[D]=B),B.getHandSpace()};function z(D){let B=x.indexOf(D.inputSource);if(B===-1)return;let q=v[B];q!==void 0&&(q.update(D.inputSource,D.frame,l||o),q.dispatchEvent({type:D.type,data:D.inputSource}))}function V(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",K);for(let D=0;D<v.length;D++){let B=x[D];B!==null&&(x[D]=null,v[D].disconnect(B))}C=null,F=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,S=null,k.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",V),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){let B={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,B),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new ui(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let B=null,q=null,L=null;m.depth&&(L=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,B=m.stencil?Qs:Xs,q=m.stencil?Ks:os);let st={colorFormat:e.RGBA8,depthFormat:L,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(st),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new ui(d.textureWidth,d.textureHeight,{format:Fn,type:hi,depthTexture:new Zo(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(D){for(let B=0;B<D.removed.length;B++){let q=D.removed[B],L=x.indexOf(q);L>=0&&(x[L]=null,v[L].disconnect(q))}for(let B=0;B<D.added.length;B++){let q=D.added[B],L=x.indexOf(q);if(L===-1){for(let xt=0;xt<v.length;xt++)if(xt>=x.length){x.push(q),L=xt;break}else if(x[xt]===null){x[xt]=q,L=xt;break}if(L===-1)break}let st=v[L];st&&st.connect(q)}}let N=new I,nt=new I;function G(D,B,q){N.setFromMatrixPosition(B.matrixWorld),nt.setFromMatrixPosition(q.matrixWorld);let L=N.distanceTo(nt),st=B.projectionMatrix.elements,xt=q.projectionMatrix.elements,At=st[14]/(st[10]-1),Tt=st[14]/(st[10]+1),vt=(st[9]+1)/st[5],kt=(st[9]-1)/st[5],H=(st[8]-1)/st[0],Qt=(xt[8]+1)/xt[0],Vt=At*H,Ft=At*Qt,Rt=L/(-H+Qt),Zt=Rt*-H;if(B.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Zt),D.translateZ(Rt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),st[10]===-1)D.projectionMatrix.copy(B.projectionMatrix),D.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{let Pt=At+Rt,P=Tt+Rt,E=Vt-Zt,Z=Ft+(L-Zt),yt=vt*Tt/P*Pt,bt=kt*Tt/P*Pt;D.projectionMatrix.makePerspective(E,Z,yt,bt,Pt,P),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function lt(D,B){B===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(B.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;let B=D.near,q=D.far;_.texture!==null&&(_.depthNear>0&&(B=_.depthNear),_.depthFar>0&&(q=_.depthFar)),y.near=T.near=w.near=B,y.far=T.far=w.far=q,(C!==y.near||F!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,F=y.far),w.layers.mask=D.layers.mask|2,T.layers.mask=D.layers.mask|4,y.layers.mask=w.layers.mask|T.layers.mask;let L=D.parent,st=y.cameras;lt(y,L);for(let xt=0;xt<st.length;xt++)lt(st[xt],L);st.length===2?G(y,w,T):y.projectionMatrix.copy(w.projectionMatrix),Q(D,y,L)};function Q(D,B,q){q===null?D.matrix.copy(B.matrixWorld):(D.matrix.copy(q.matrixWorld),D.matrix.invert(),D.matrix.multiply(B.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(B.projectionMatrix),D.projectionMatrixInverse.copy(B.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=kr*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(D){c=D,d!==null&&(d.fixedFoveation=D),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=D)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let dt=null;function St(D,B){if(h=B.getViewerPose(l||o),g=B,h!==null){let q=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let L=!1;q.length!==y.cameras.length&&(y.cameras.length=0,L=!0);for(let xt=0;xt<q.length;xt++){let At=q[xt],Tt=null;if(f!==null)Tt=f.getViewport(At);else{let kt=u.getViewSubImage(d,At);Tt=kt.viewport,xt===0&&(t.setRenderTargetTextures(S,kt.colorTexture,d.ignoreDepthValues?void 0:kt.depthStencilTexture),t.setRenderTarget(S))}let vt=M[xt];vt===void 0&&(vt=new Ke,vt.layers.enable(xt),vt.viewport=new fe,M[xt]=vt),vt.matrix.fromArray(At.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(At.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),xt===0&&(y.matrix.copy(vt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),L===!0&&y.cameras.push(vt)}let st=i.enabledFeatures;if(st&&st.includes("depth-sensing")){let xt=u.getDepthInformation(q[0]);xt&&xt.isValid&&xt.texture&&_.init(t,xt,i.renderState)}}for(let q=0;q<v.length;q++){let L=x[q],st=v[q];L!==null&&st!==void 0&&st.update(L,B,l||o)}dt&&dt(D,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),g=null}let k=new fd;k.setAnimationLoop(St),this.setAnimationLoop=function(D){dt=D},this.dispose=function(){}}},ji=new wn,Hx=new oe;function Vx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,dd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),v=S.envMap,x=S.envMapRotation;v&&(m.envMap.value=v,ji.copy(x),ji.x*=-1,ji.y*=-1,ji.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(ji)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gx(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,v){let x=v.program;n.uniformBlockBinding(S,x)}function l(S,v){let x=i[S.id];x===void 0&&(g(S),x=h(S),i[S.id]=x,S.addEventListener("dispose",m));let A=v.program;n.updateUBOMapping(S,A);let b=t.render.frame;r[S.id]!==b&&(d(S),r[S.id]=b)}function h(S){let v=u();S.__bindingPointIndex=v;let x=s.createBuffer(),A=S.__size,b=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,A,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let v=i[S.id],x=S.uniforms,A=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,w=x.length;b<w;b++){let T=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,y=T.length;M<y;M++){let C=T[M];if(f(C,b,M,A)===!0){let F=C.__offset,z=Array.isArray(C.value)?C.value:[C.value],V=0;for(let K=0;K<z.length;K++){let N=z[K],nt=_(N);typeof N=="number"||typeof N=="boolean"?(C.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,F+V,C.__data)):N.isMatrix3?(C.__data[0]=N.elements[0],C.__data[1]=N.elements[1],C.__data[2]=N.elements[2],C.__data[3]=0,C.__data[4]=N.elements[3],C.__data[5]=N.elements[4],C.__data[6]=N.elements[5],C.__data[7]=0,C.__data[8]=N.elements[6],C.__data[9]=N.elements[7],C.__data[10]=N.elements[8],C.__data[11]=0):(N.toArray(C.__data,V),V+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,v,x,A){let b=S.value,w=v+"_"+x;if(A[w]===void 0)return typeof b=="number"||typeof b=="boolean"?A[w]=b:A[w]=b.clone(),!0;{let T=A[w];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return A[w]=b,!0}else if(T.equals(b)===!1)return T.copy(b),!0}return!1}function g(S){let v=S.uniforms,x=0,A=16;for(let w=0,T=v.length;w<T;w++){let M=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,C=M.length;y<C;y++){let F=M[y],z=Array.isArray(F.value)?F.value:[F.value];for(let V=0,K=z.length;V<K;V++){let N=z[V],nt=_(N),G=x%A,lt=G%nt.boundary,Q=G+lt;x+=lt,Q!==0&&A-Q<nt.storage&&(x+=A-Q),F.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=nt.storage}}}let b=x%A;return b>0&&(x+=A-b),S.__size=x,S.__cache={},this}function _(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){let v=S.target;v.removeEventListener("dispose",m);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var nr=class{constructor(t={}){let{canvas:e=Yp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,S=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this.toneMapping=Ii,this.toneMappingExposure=1;let x=this,A=!1,b=0,w=0,T=null,M=-1,y=null,C=new fe,F=new fe,z=null,V=new $t(0),K=0,N=e.width,nt=e.height,G=1,lt=null,Q=null,dt=new fe(0,0,N,nt),St=new fe(0,0,N,nt),k=!1,D=new Hr,B=!1,q=!1,L=new oe,st=new oe,xt=new I,At=new fe,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vt=!1;function kt(){return T===null?G:1}let H=n;function Qt(R,W){return e.getContext(R,W)}try{let R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Il}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",O,!1),e.addEventListener("webglcontextcreationerror",$,!1),H===null){let W="webgl2";if(H=Qt(W,R),H===null)throw Qt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Vt,Ft,Rt,Zt,Pt,P,E,Z,yt,bt,ht,gt,_t,Mt,Bt,rt,ut,Dt,ct,mt,tt,ft,pt,U;function j(){Vt=new r_(H),Vt.init(),ft=new Fx(H,Vt),Ft=new j0(H,Vt,t,ft),Rt=new Ux(H,Vt),Ft.reverseDepthBuffer&&d&&Rt.buffers.depth.setReversed(!0),Zt=new c_(H),Pt=new Mx,P=new Ox(H,Vt,Rt,Pt,Ft,ft,Zt),E=new e_(x),Z=new s_(x),yt=new mm(H),pt=new K0(H,yt),bt=new o_(H,yt,Zt,pt),ht=new h_(H,bt,yt,Zt),ct=new l_(H,Ft,P),rt=new t_(Pt),gt=new vx(x,E,Z,Vt,Ft,pt,rt),_t=new Vx(x,Pt),Mt=new bx,Bt=new Cx(Vt),Dt=new $0(x,E,Z,Rt,ht,f,c),ut=new Dx(x,ht,Ft),U=new Gx(H,Zt,Ft,Rt),mt=new Q0(H,Vt,Zt),tt=new a_(H,Vt,Zt),Zt.programs=gt.programs,x.capabilities=Ft,x.extensions=Vt,x.properties=Pt,x.renderLists=Mt,x.shadowMap=ut,x.state=Rt,x.info=Zt}j();let Y=new ll(x,H);this.xr=Y,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let R=Vt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Vt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(N,nt,!1))},this.getSize=function(R){return R.set(N,nt)},this.setSize=function(R,W,et=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,nt=W,e.width=Math.floor(R*G),e.height=Math.floor(W*G),et===!0&&(e.style.width=R+"px",e.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(N*G,nt*G).floor()},this.setDrawingBufferSize=function(R,W,et){N=R,nt=W,G=et,e.width=Math.floor(R*et),e.height=Math.floor(W*et),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(dt)},this.setViewport=function(R,W,et,it){R.isVector4?dt.set(R.x,R.y,R.z,R.w):dt.set(R,W,et,it),Rt.viewport(C.copy(dt).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(St)},this.setScissor=function(R,W,et,it){R.isVector4?St.set(R.x,R.y,R.z,R.w):St.set(R,W,et,it),Rt.scissor(F.copy(St).multiplyScalar(G).round())},this.getScissorTest=function(){return k},this.setScissorTest=function(R){Rt.setScissorTest(k=R)},this.setOpaqueSort=function(R){lt=R},this.setTransparentSort=function(R){Q=R},this.getClearColor=function(R){return R.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(R=!0,W=!0,et=!0){let it=0;if(R){let X=!1;if(T!==null){let Ct=T.texture.format;X=Ct===Bl||Ct===Fl||Ct===Ol}if(X){let Ct=T.texture.type,Ot=Ct===hi||Ct===os||Ct===zr||Ct===Ks||Ct===Ll||Ct===Ul,Gt=Dt.getClearColor(),Wt=Dt.getClearAlpha(),jt=Gt.r,ee=Gt.g,Xt=Gt.b;Ot?(g[0]=jt,g[1]=ee,g[2]=Xt,g[3]=Wt,H.clearBufferuiv(H.COLOR,0,g)):(_[0]=jt,_[1]=ee,_[2]=Xt,_[3]=Wt,H.clearBufferiv(H.COLOR,0,_))}else it|=H.COLOR_BUFFER_BIT}W&&(it|=H.DEPTH_BUFFER_BIT),et&&(it|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",O,!1),e.removeEventListener("webglcontextcreationerror",$,!1),Mt.dispose(),Bt.dispose(),Pt.dispose(),E.dispose(),Z.dispose(),ht.dispose(),pt.dispose(),U.dispose(),gt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ue),Y.removeEventListener("sessionend",Ht),ot.stop()};function J(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let R=Zt.autoReset,W=ut.enabled,et=ut.autoUpdate,it=ut.needsUpdate,X=ut.type;j(),Zt.autoReset=R,ut.enabled=W,ut.autoUpdate=et,ut.needsUpdate=it,ut.type=X}function $(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Et(R){let W=R.target;W.removeEventListener("dispose",Et),It(W)}function It(R){at(R),Pt.remove(R)}function at(R){let W=Pt.get(R).programs;W!==void 0&&(W.forEach(function(et){gt.releaseProgram(et)}),R.isShaderMaterial&&gt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,et,it,X,Ct){W===null&&(W=Tt);let Ot=X.isMesh&&X.matrixWorld.determinant()<0,Gt=Vf(R,W,et,it,X);Rt.setMaterial(it,Ot);let Wt=et.index,jt=1;if(it.wireframe===!0){if(Wt=bt.getWireframeAttribute(et),Wt===void 0)return;jt=2}let ee=et.drawRange,Xt=et.attributes.position,re=ee.start*jt,_e=(ee.start+ee.count)*jt;Ct!==null&&(re=Math.max(re,Ct.start*jt),_e=Math.min(_e,(Ct.start+Ct.count)*jt)),Wt!==null?(re=Math.max(re,0),_e=Math.min(_e,Wt.count)):Xt!=null&&(re=Math.max(re,0),_e=Math.min(_e,Xt.count));let ve=_e-re;if(ve<0||ve===1/0)return;pt.setup(X,it,Gt,et,Wt);let cn,ce=mt;if(Wt!==null&&(cn=yt.get(Wt),ce=tt,ce.setIndex(cn)),X.isMesh)it.wireframe===!0?(Rt.setLineWidth(it.wireframeLinewidth*kt()),ce.setMode(H.LINES)):ce.setMode(H.TRIANGLES);else if(X.isLine){let qt=it.linewidth;qt===void 0&&(qt=1),Rt.setLineWidth(qt*kt()),X.isLineSegments?ce.setMode(H.LINES):X.isLineLoop?ce.setMode(H.LINE_LOOP):ce.setMode(H.LINE_STRIP)}else X.isPoints?ce.setMode(H.POINTS):X.isSprite&&ce.setMode(H.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ce.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))ce.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let qt=X._multiDrawStarts,ti=X._multiDrawCounts,le=X._multiDrawCount,Dn=Wt?yt.get(Wt).bytesPerElement:1,Ts=Pt.get(it).currentProgram.getUniforms();for(let gn=0;gn<le;gn++)Ts.setValue(H,"_gl_DrawID",gn),ce.render(qt[gn]/Dn,ti[gn])}else if(X.isInstancedMesh)ce.renderInstances(re,ve,X.count);else if(et.isInstancedBufferGeometry){let qt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,ti=Math.min(et.instanceCount,qt);ce.renderInstances(re,ve,ti)}else ce.render(re,ve)};function wt(R,W,et){R.transparent===!0&&R.side===On&&R.forceSinglePass===!1?(R.side=Qe,R.needsUpdate=!0,vi(R,W,et),R.side=Di,R.needsUpdate=!0,vi(R,W,et),R.side=On):vi(R,W,et)}this.compile=function(R,W,et=null){et===null&&(et=R),p=Bt.get(et),p.init(W),v.push(p),et.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),R!==et&&R.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let it=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Ct=X.material;if(Ct)if(Array.isArray(Ct))for(let Ot=0;Ot<Ct.length;Ot++){let Gt=Ct[Ot];wt(Gt,et,X),it.add(Gt)}else wt(Ct,et,X),it.add(Ct)}),v.pop(),p=null,it},this.compileAsync=function(R,W,et=null){let it=this.compile(R,W,et);return new Promise(X=>{function Ct(){if(it.forEach(function(Ot){Pt.get(Ot).currentProgram.isReady()&&it.delete(Ot)}),it.size===0){X(R);return}setTimeout(Ct,10)}Vt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let zt=null;function Jt(R){zt&&zt(R)}function ue(){ot.stop()}function Ht(){ot.start()}let ot=new fd;ot.setAnimationLoop(Jt),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(R){zt=R,Y.setAnimationLoop(R),R===null?ot.stop():ot.start()},Y.addEventListener("sessionstart",ue),Y.addEventListener("sessionend",Ht),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(W),W=Y.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,W,T),p=Bt.get(R,v.length),p.init(W),v.push(p),st.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),D.setFromProjectionMatrix(st),q=this.localClippingEnabled,B=rt.init(this.clippingPlanes,q),m=Mt.get(R,S.length),m.init(),S.push(m),Y.enabled===!0&&Y.isPresenting===!0){let Ct=x.xr.getDepthSensingMesh();Ct!==null&&Lt(Ct,W,-1/0,x.sortObjects)}Lt(R,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(lt,Q),vt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,vt&&Dt.addToRenderList(m,R),this.info.render.frame++,B===!0&&rt.beginShadows();let et=p.state.shadowsArray;ut.render(et,R,W),B===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let it=m.opaque,X=m.transmissive;if(p.setupLights(),W.isArrayCamera){let Ct=W.cameras;if(X.length>0)for(let Ot=0,Gt=Ct.length;Ot<Gt;Ot++){let Wt=Ct[Ot];ae(it,X,R,Wt)}vt&&Dt.render(R);for(let Ot=0,Gt=Ct.length;Ot<Gt;Ot++){let Wt=Ct[Ot];ye(m,R,Wt,Wt.viewport)}}else X.length>0&&ae(it,X,R,W),vt&&Dt.render(R),ye(m,R,W);T!==null&&(P.updateMultisampleRenderTarget(T),P.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(x,R,W),pt.resetDefaultState(),M=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],B===!0&&rt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Lt(R,W,et,it){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||D.intersectsSprite(R)){it&&At.setFromMatrixPosition(R.matrixWorld).applyMatrix4(st);let Ot=ht.update(R),Gt=R.material;Gt.visible&&m.push(R,Ot,Gt,et,At.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||D.intersectsObject(R))){let Ot=ht.update(R),Gt=R.material;if(it&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),At.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),At.copy(Ot.boundingSphere.center)),At.applyMatrix4(R.matrixWorld).applyMatrix4(st)),Array.isArray(Gt)){let Wt=Ot.groups;for(let jt=0,ee=Wt.length;jt<ee;jt++){let Xt=Wt[jt],re=Gt[Xt.materialIndex];re&&re.visible&&m.push(R,Ot,re,et,At.z,Xt)}}else Gt.visible&&m.push(R,Ot,Gt,et,At.z,null)}}let Ct=R.children;for(let Ot=0,Gt=Ct.length;Ot<Gt;Ot++)Lt(Ct[Ot],W,et,it)}function ye(R,W,et,it){let X=R.opaque,Ct=R.transmissive,Ot=R.transparent;p.setupLightsView(et),B===!0&&rt.setGlobalState(x.clippingPlanes,et),it&&Rt.viewport(C.copy(it)),X.length>0&&mn(X,W,et),Ct.length>0&&mn(Ct,W,et),Ot.length>0&&mn(Ot,W,et),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function ae(R,W,et,it){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[it.id]===void 0&&(p.state.transmissionRenderTarget[it.id]=new ui(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Wr:hi,minFilter:rs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));let Ct=p.state.transmissionRenderTarget[it.id],Ot=it.viewport||C;Ct.setSize(Ot.z,Ot.w);let Gt=x.getRenderTarget();x.setRenderTarget(Ct),x.getClearColor(V),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),vt&&Dt.render(et);let Wt=x.toneMapping;x.toneMapping=Ii;let jt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),p.setupLightsView(it),B===!0&&rt.setGlobalState(x.clippingPlanes,it),mn(R,et,it),P.updateMultisampleRenderTarget(Ct),P.updateRenderTargetMipmap(Ct),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Xt=0,re=W.length;Xt<re;Xt++){let _e=W[Xt],ve=_e.object,cn=_e.geometry,ce=_e.material,qt=_e.group;if(ce.side===On&&ve.layers.test(it.layers)){let ti=ce.side;ce.side=Qe,ce.needsUpdate=!0,Vn(ve,et,it,cn,ce,qt),ce.side=ti,ce.needsUpdate=!0,ee=!0}}ee===!0&&(P.updateMultisampleRenderTarget(Ct),P.updateRenderTargetMipmap(Ct))}x.setRenderTarget(Gt),x.setClearColor(V,K),jt!==void 0&&(it.viewport=jt),x.toneMapping=Wt}function mn(R,W,et){let it=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Ct=R.length;X<Ct;X++){let Ot=R[X],Gt=Ot.object,Wt=Ot.geometry,jt=it===null?Ot.material:it,ee=Ot.group;Gt.layers.test(et.layers)&&Vn(Gt,W,et,Wt,jt,ee)}}function Vn(R,W,et,it,X,Ct){R.onBeforeRender(x,W,et,it,X,Ct),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(x,W,et,it,R,Ct),X.transparent===!0&&X.side===On&&X.forceSinglePass===!1?(X.side=Qe,X.needsUpdate=!0,x.renderBufferDirect(et,W,it,X,R,Ct),X.side=Di,X.needsUpdate=!0,x.renderBufferDirect(et,W,it,X,R,Ct),X.side=On):x.renderBufferDirect(et,W,it,X,R,Ct),R.onAfterRender(x,W,et,it,X,Ct)}function vi(R,W,et){W.isScene!==!0&&(W=Tt);let it=Pt.get(R),X=p.state.lights,Ct=p.state.shadowsArray,Ot=X.state.version,Gt=gt.getParameters(R,X.state,Ct,W,et),Wt=gt.getProgramCacheKey(Gt),jt=it.programs;it.environment=R.isMeshStandardMaterial?W.environment:null,it.fog=W.fog,it.envMap=(R.isMeshStandardMaterial?Z:E).get(R.envMap||it.environment),it.envMapRotation=it.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",Et),jt=new Map,it.programs=jt);let ee=jt.get(Wt);if(ee!==void 0){if(it.currentProgram===ee&&it.lightsStateVersion===Ot)return Hh(R,Gt),ee}else Gt.uniforms=gt.getUniforms(R),R.onBeforeCompile(Gt,x),ee=gt.acquireProgram(Gt,Wt),jt.set(Wt,ee),it.uniforms=Gt.uniforms;let Xt=it.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xt.clippingPlanes=rt.uniform),Hh(R,Gt),it.needsLights=Wf(R),it.lightsStateVersion=Ot,it.needsLights&&(Xt.ambientLightColor.value=X.state.ambient,Xt.lightProbe.value=X.state.probe,Xt.directionalLights.value=X.state.directional,Xt.directionalLightShadows.value=X.state.directionalShadow,Xt.spotLights.value=X.state.spot,Xt.spotLightShadows.value=X.state.spotShadow,Xt.rectAreaLights.value=X.state.rectArea,Xt.ltc_1.value=X.state.rectAreaLTC1,Xt.ltc_2.value=X.state.rectAreaLTC2,Xt.pointLights.value=X.state.point,Xt.pointLightShadows.value=X.state.pointShadow,Xt.hemisphereLights.value=X.state.hemi,Xt.directionalShadowMap.value=X.state.directionalShadowMap,Xt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xt.spotShadowMap.value=X.state.spotShadowMap,Xt.spotLightMatrix.value=X.state.spotLightMatrix,Xt.spotLightMap.value=X.state.spotLightMap,Xt.pointShadowMap.value=X.state.pointShadowMap,Xt.pointShadowMatrix.value=X.state.pointShadowMatrix),it.currentProgram=ee,it.uniformsList=null,ee}function ws(R){if(R.uniformsList===null){let W=R.currentProgram.getUniforms();R.uniformsList=Ys.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Hh(R,W){let et=Pt.get(R);et.outputColorSpace=W.outputColorSpace,et.batching=W.batching,et.batchingColor=W.batchingColor,et.instancing=W.instancing,et.instancingColor=W.instancingColor,et.instancingMorph=W.instancingMorph,et.skinning=W.skinning,et.morphTargets=W.morphTargets,et.morphNormals=W.morphNormals,et.morphColors=W.morphColors,et.morphTargetsCount=W.morphTargetsCount,et.numClippingPlanes=W.numClippingPlanes,et.numIntersection=W.numClipIntersection,et.vertexAlphas=W.vertexAlphas,et.vertexTangents=W.vertexTangents,et.toneMapping=W.toneMapping}function Vf(R,W,et,it,X){W.isScene!==!0&&(W=Tt),P.resetTextureUnits();let Ct=W.fog,Ot=it.isMeshStandardMaterial?W.environment:null,Gt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ar,Wt=(it.isMeshStandardMaterial?Z:E).get(it.envMap||Ot),jt=it.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ee=!!et.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Xt=!!et.morphAttributes.position,re=!!et.morphAttributes.normal,_e=!!et.morphAttributes.color,ve=Ii;it.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ve=x.toneMapping);let cn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ce=cn!==void 0?cn.length:0,qt=Pt.get(it),ti=p.state.lights;if(B===!0&&(q===!0||R!==y)){let bn=R===y&&it.id===M;rt.setState(it,R,bn)}let le=!1;it.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==ti.state.version||qt.outputColorSpace!==Gt||X.isBatchedMesh&&qt.batching===!1||!X.isBatchedMesh&&qt.batching===!0||X.isBatchedMesh&&qt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&qt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&qt.instancing===!1||!X.isInstancedMesh&&qt.instancing===!0||X.isSkinnedMesh&&qt.skinning===!1||!X.isSkinnedMesh&&qt.skinning===!0||X.isInstancedMesh&&qt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&qt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&qt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&qt.instancingMorph===!1&&X.morphTexture!==null||qt.envMap!==Wt||it.fog===!0&&qt.fog!==Ct||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==rt.numPlanes||qt.numIntersection!==rt.numIntersection)||qt.vertexAlphas!==jt||qt.vertexTangents!==ee||qt.morphTargets!==Xt||qt.morphNormals!==re||qt.morphColors!==_e||qt.toneMapping!==ve||qt.morphTargetsCount!==ce)&&(le=!0):(le=!0,qt.__version=it.version);let Dn=qt.currentProgram;le===!0&&(Dn=vi(it,W,X));let Ts=!1,gn=!1,br=!1,Me=Dn.getUniforms(),Gn=qt.uniforms;if(Rt.useProgram(Dn.program)&&(Ts=!0,gn=!0,br=!0),it.id!==M&&(M=it.id,gn=!0),Ts||y!==R){Rt.buffers.depth.getReversed()?(L.copy(R.projectionMatrix),Jp(L),$p(L),Me.setValue(H,"projectionMatrix",L)):Me.setValue(H,"projectionMatrix",R.projectionMatrix),Me.setValue(H,"viewMatrix",R.matrixWorldInverse);let Mi=Me.map.cameraPosition;Mi!==void 0&&Mi.setValue(H,xt.setFromMatrixPosition(R.matrixWorld)),Ft.logarithmicDepthBuffer&&Me.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Me.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,gn=!0,br=!0)}if(X.isSkinnedMesh){Me.setOptional(H,X,"bindMatrix"),Me.setOptional(H,X,"bindMatrixInverse");let bn=X.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Me.setValue(H,"boneTexture",bn.boneTexture,P))}X.isBatchedMesh&&(Me.setOptional(H,X,"batchingTexture"),Me.setValue(H,"batchingTexture",X._matricesTexture,P),Me.setOptional(H,X,"batchingIdTexture"),Me.setValue(H,"batchingIdTexture",X._indirectTexture,P),Me.setOptional(H,X,"batchingColorTexture"),X._colorsTexture!==null&&Me.setValue(H,"batchingColorTexture",X._colorsTexture,P));let Er=et.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0)&&ct.update(X,et,Dn),(gn||qt.receiveShadow!==X.receiveShadow)&&(qt.receiveShadow=X.receiveShadow,Me.setValue(H,"receiveShadow",X.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Gn.envMap.value=Wt,Gn.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&W.environment!==null&&(Gn.envMapIntensity.value=W.environmentIntensity),gn&&(Me.setValue(H,"toneMappingExposure",x.toneMappingExposure),qt.needsLights&&Gf(Gn,br),Ct&&it.fog===!0&&_t.refreshFogUniforms(Gn,Ct),_t.refreshMaterialUniforms(Gn,it,G,nt,p.state.transmissionRenderTarget[R.id]),Ys.upload(H,ws(qt),Gn,P)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Ys.upload(H,ws(qt),Gn,P),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Me.setValue(H,"center",X.center),Me.setValue(H,"modelViewMatrix",X.modelViewMatrix),Me.setValue(H,"normalMatrix",X.normalMatrix),Me.setValue(H,"modelMatrix",X.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){let bn=it.uniformsGroups;for(let Mi=0,Si=bn.length;Mi<Si;Mi++){let Vh=bn[Mi];U.update(Vh,Dn),U.bind(Vh,Dn)}}return Dn}function Gf(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Wf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,W,et){Pt.get(R.texture).__webglTexture=W,Pt.get(R.depthTexture).__webglTexture=et;let it=Pt.get(R);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=et===void 0,it.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){let et=Pt.get(R);et.__webglFramebuffer=W,et.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,et=0){T=R,b=W,w=et;let it=!0,X=null,Ct=!1,Ot=!1;if(R){let Wt=Pt.get(R);if(Wt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(H.FRAMEBUFFER,null),it=!1;else if(Wt.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(Wt.__hasExternalTextures)P.rebindTextures(R,Pt.get(R.texture).__webglTexture,Pt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Xt=R.depthTexture;if(Wt.__boundDepthTexture!==Xt){if(Xt!==null&&Pt.has(Xt)&&(R.width!==Xt.image.width||R.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}let jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Ot=!0);let ee=Pt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[W])?X=ee[W][et]:X=ee[W],Ct=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?X=Pt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?X=ee[et]:X=ee,C.copy(R.viewport),F.copy(R.scissor),z=R.scissorTest}else C.copy(dt).multiplyScalar(G).floor(),F.copy(St).multiplyScalar(G).floor(),z=k;if(Rt.bindFramebuffer(H.FRAMEBUFFER,X)&&it&&Rt.drawBuffers(R,X),Rt.viewport(C),Rt.scissor(F),Rt.setScissorTest(z),Ct){let Wt=Pt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Wt.__webglTexture,et)}else if(Ot){let Wt=Pt.get(R.texture),jt=W||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Wt.__webglTexture,et||0,jt)}M=-1},this.readRenderTargetPixels=function(R,W,et,it,X,Ct,Ot){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Pt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Gt=Gt[Ot]),Gt){Rt.bindFramebuffer(H.FRAMEBUFFER,Gt);try{let Wt=R.texture,jt=Wt.format,ee=Wt.type;if(!Ft.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-it&&et>=0&&et<=R.height-X&&H.readPixels(W,et,it,X,ft.convert(jt),ft.convert(ee),Ct)}finally{let Wt=T!==null?Pt.get(T).__webglFramebuffer:null;Rt.bindFramebuffer(H.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,W,et,it,X,Ct,Ot){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=Pt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Gt=Gt[Ot]),Gt){let Wt=R.texture,jt=Wt.format,ee=Wt.type;if(!Ft.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-it&&et>=0&&et<=R.height-X){Rt.bindFramebuffer(H.FRAMEBUFFER,Gt);let Xt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Xt),H.bufferData(H.PIXEL_PACK_BUFFER,Ct.byteLength,H.STREAM_READ),H.readPixels(W,et,it,X,ft.convert(jt),ft.convert(ee),0);let re=T!==null?Pt.get(T).__webglFramebuffer:null;Rt.bindFramebuffer(H.FRAMEBUFFER,re);let _e=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Zp(H,_e,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Xt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ct),H.deleteBuffer(Xt),H.deleteSync(_e),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,et=0){R.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);let it=Math.pow(2,-et),X=Math.floor(R.image.width*it),Ct=Math.floor(R.image.height*it),Ot=W!==null?W.x:0,Gt=W!==null?W.y:0;P.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,et,0,0,Ot,Gt,X,Ct),Rt.unbindTexture()},this.copyTextureToTexture=function(R,W,et=null,it=null,X=0){R.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),it=arguments[0]||null,R=arguments[1],W=arguments[2],X=arguments[3]||0,et=null);let Ct,Ot,Gt,Wt,jt,ee,Xt,re,_e,ve=R.isCompressedTexture?R.mipmaps[X]:R.image;et!==null?(Ct=et.max.x-et.min.x,Ot=et.max.y-et.min.y,Gt=et.isBox3?et.max.z-et.min.z:1,Wt=et.min.x,jt=et.min.y,ee=et.isBox3?et.min.z:0):(Ct=ve.width,Ot=ve.height,Gt=ve.depth||1,Wt=0,jt=0,ee=0),it!==null?(Xt=it.x,re=it.y,_e=it.z):(Xt=0,re=0,_e=0);let cn=ft.convert(W.format),ce=ft.convert(W.type),qt;W.isData3DTexture?(P.setTexture3D(W,0),qt=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),qt=H.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),qt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);let ti=H.getParameter(H.UNPACK_ROW_LENGTH),le=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Dn=H.getParameter(H.UNPACK_SKIP_PIXELS),Ts=H.getParameter(H.UNPACK_SKIP_ROWS),gn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,ve.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ve.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Wt),H.pixelStorei(H.UNPACK_SKIP_ROWS,jt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ee);let br=R.isDataArrayTexture||R.isData3DTexture,Me=W.isDataArrayTexture||W.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Gn=Pt.get(R),Er=Pt.get(W),bn=Pt.get(Gn.__renderTarget),Mi=Pt.get(Er.__renderTarget);Rt.bindFramebuffer(H.READ_FRAMEBUFFER,bn.__webglFramebuffer),Rt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Si=0;Si<Gt;Si++)br&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pt.get(R).__webglTexture,X,ee+Si),R.isDepthTexture?(Me&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pt.get(W).__webglTexture,X,_e+Si),H.blitFramebuffer(Wt,jt,Ct,Ot,Xt,re,Ct,Ot,H.DEPTH_BUFFER_BIT,H.NEAREST)):Me?H.copyTexSubImage3D(qt,X,Xt,re,_e+Si,Wt,jt,Ct,Ot):H.copyTexSubImage2D(qt,X,Xt,re,_e+Si,Wt,jt,Ct,Ot);Rt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Me?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(qt,X,Xt,re,_e,Ct,Ot,Gt,cn,ce,ve.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(qt,X,Xt,re,_e,Ct,Ot,Gt,cn,ve.data):H.texSubImage3D(qt,X,Xt,re,_e,Ct,Ot,Gt,cn,ce,ve):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,Xt,re,Ct,Ot,cn,ce,ve.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,Xt,re,ve.width,ve.height,cn,ve.data):H.texSubImage2D(H.TEXTURE_2D,X,Xt,re,Ct,Ot,cn,ce,ve);H.pixelStorei(H.UNPACK_ROW_LENGTH,ti),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,le),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Dn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ts),H.pixelStorei(H.UNPACK_SKIP_IMAGES,gn),X===0&&W.generateMipmaps&&H.generateMipmap(qt),Rt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,et=null,it=null,X=0){return R.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,it=arguments[1]||null,R=arguments[2],W=arguments[3],X=arguments[4]||0),Dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,et,it,X)},this.initRenderTarget=function(R){Pt.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Rt.unbindTexture()},this.resetState=function(){b=0,w=0,T=null,Rt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var Ui=class extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var hl=class extends ln{constructor(t=null,e=1,n=1,i,r,o,a,c,l=yn,h=yn,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jo=class extends Ve{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Hs=new oe,Wu=new oe,Po=[],Xu=new di,Wx=new oe,Cr=new Nt,Pr=new as,xe=class extends Nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Jo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),Xu.copy(t.boundingBox).applyMatrix4(Hs),this.boundingBox.union(Xu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),Pr.copy(t.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Cr.geometry=this.geometry,Cr.material=this.material,Cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),t.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Hs),Wu.multiplyMatrices(n,Hs),Cr.matrixWorld=Wu,Cr.raycast(t,Po);for(let o=0,a=Po.length;o<a;o++){let c=Po[o];c.instanceId=r,c.object=this,e.push(c)}Po.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new hl(new Float32Array(i*this.count),i,this.count,Nl,qn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ge=class extends ln{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new Yt:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,i=[],r=[],o=[],a=new I,c=new oe;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ke(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ke(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},$o=class extends zn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Yt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ul=class extends $o{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hl(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Io=new I,nc=new Hl,ic=new Hl,sc=new Hl,ls=class extends zn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Io.subVectors(i[0],i[1]).add(i[0]),l=Io);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Io.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Io),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),nc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),ic.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),sc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ic.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),sc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(nc.calc(c),ic.calc(c),sc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function qu(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Xx(s,t){let e=1-s;return e*e*t}function qx(s,t){return 2*(1-s)*s*t}function Yx(s,t){return s*s*t}function Fr(s,t,e,n){return Xx(s,t)+qx(s,e)+Yx(s,n)}function Zx(s,t){let e=1-s;return e*e*e*t}function Jx(s,t){let e=1-s;return 3*e*e*s*t}function $x(s,t){return 3*(1-s)*s*s*t}function Kx(s,t){return s*s*s*t}function Br(s,t,e,n,i){return Zx(s,t)+Jx(s,e)+$x(s,n)+Kx(s,i)}var dl=class extends zn{constructor(t=new Yt,e=new Yt,n=new Yt,i=new Yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Yt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Br(t,i.x,r.x,o.x,a.x),Br(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fl=class extends zn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Br(t,i.x,r.x,o.x,a.x),Br(t,i.y,r.y,o.y,a.y),Br(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pl=class extends zn{constructor(t=new Yt,e=new Yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Yt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ml=class extends zn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gl=class extends zn{constructor(t=new Yt,e=new Yt,n=new Yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Yt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Fr(t,i.x,r.x,o.x),Fr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ir=class extends zn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Fr(t,i.x,r.x,o.x),Fr(t,i.y,r.y,o.y),Fr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_l=class extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Yt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(qu(a,c.x,l.x,h.x,u.x),qu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Yt().fromArray(i))}return this}},Qx=Object.freeze({__proto__:null,ArcCurve:ul,CatmullRomCurve3:ls,CubicBezierCurve:dl,CubicBezierCurve3:fl,EllipseCurve:$o,LineCurve:pl,LineCurve3:ml,QuadraticBezierCurve:gl,QuadraticBezierCurve3:ir,SplineCurve:_l});var Ko=class s extends je{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;S(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(f,2));function S(){let x=new I,A=new I,b=0,w=(e-t)/n;for(let T=0;T<=r;T++){let M=[],y=T/r,C=y*(e-t)+t;for(let F=0;F<=i;F++){let z=F/i,V=z*c+a,K=Math.sin(V),N=Math.cos(V);A.x=C*K,A.y=-y*n+m,A.z=C*N,u.push(A.x,A.y,A.z),x.set(K,w,N).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-y),M.push(g++)}_.push(M)}for(let T=0;T<i;T++)for(let M=0;M<r;M++){let y=_[M][T],C=_[M+1][T],F=_[M+1][T+1],z=_[M][T+1];(t>0||M!==0)&&(h.push(y,C,z),b+=3),(e>0||M!==r-1)&&(h.push(C,F,z),b+=3)}l.addGroup(p,b,0),p+=b}function v(x){let A=g,b=new Yt,w=new I,T=0,M=x===!0?t:e,y=x===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;let C=g;for(let F=0;F<=i;F++){let V=F/i*c+a,K=Math.cos(V),N=Math.sin(V);w.x=M*N,w.y=m*y,w.z=M*K,u.push(w.x,w.y,w.z),d.push(0,y,0),b.x=K*.5+.5,b.y=N*.5*y+.5,f.push(b.x,b.y),g++}for(let F=0;F<i;F++){let z=A+F,V=C+F;x===!0?h.push(V,V+1,z):h.push(V+1,V,z),T+=3}l.addGroup(p,T,x===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var xl=class s extends je{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(r.slice(),3)),this.setAttribute("uv",new Ee(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let v=new I,x=new I,A=new I;for(let b=0;b<e.length;b+=3)f(e[b+0],v),f(e[b+1],x),f(e[b+2],A),c(v,x,A,S)}function c(S,v,x,A){let b=A+1,w=[];for(let T=0;T<=b;T++){w[T]=[];let M=S.clone().lerp(x,T/b),y=v.clone().lerp(x,T/b),C=b-T;for(let F=0;F<=C;F++)F===0&&T===b?w[T][F]=M:w[T][F]=M.clone().lerp(y,F/C)}for(let T=0;T<b;T++)for(let M=0;M<2*(b-T)-1;M++){let y=Math.floor(M/2);M%2===0?(d(w[T][y+1]),d(w[T+1][y]),d(w[T][y])):(d(w[T][y+1]),d(w[T+1][y+1]),d(w[T+1][y]))}}function l(S){let v=new I;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(S),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){let S=new I;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let x=m(S)/2/Math.PI+.5,A=p(S)/Math.PI+.5;o.push(x,1-A)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){let v=o[S+0],x=o[S+2],A=o[S+4],b=Math.max(v,x,A),w=Math.min(v,x,A);b>.9&&w<.1&&(v<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),A<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,v){let x=S*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){let S=new I,v=new I,x=new I,A=new I,b=new Yt,w=new Yt,T=new Yt;for(let M=0,y=0;M<r.length;M+=9,y+=6){S.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),b.set(o[y+0],o[y+1]),w.set(o[y+2],o[y+3]),T.set(o[y+4],o[y+5]),A.copy(S).add(v).add(x).divideScalar(3);let C=m(A);_(b,y+0,S,C),_(w,y+2,v,C),_(T,y+4,x,C)}}function _(S,v,x,A){A<0&&S.x===1&&(o[v]=S.x-1),x.x===0&&x.z===0&&(o[v]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var sr=class s extends xl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Zn=class s extends je{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,d=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let S=[],v=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){let b=A/e;u.x=-t*Math.cos(i+b*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+b*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(b+x,1-v),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let v=h[p][S+1],x=h[p][S],A=h[p+1][S],b=h[p+1][S+1];(p!==0||o>0)&&f.push(v,x,b),(p!==n-1||c<Math.PI)&&f.push(x,A,b)}this.setIndex(f),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(_,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ni=class s extends je{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,S=(i+1)*f+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var fi=class s extends je{constructor(t=new ir(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,c=new I,l=new Yt,h=new I,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(f,2));function _(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),S(),p()}function m(v){h=t.getPointAt(v/e,h);let x=o.normals[v],A=o.binormals[v];for(let b=0;b<=i;b++){let w=b/i*Math.PI*2,T=Math.sin(w),M=-Math.cos(w);c.x=M*x.x+T*A.x,c.y=M*x.y+T*A.y,c.z=M*x.z+T*A.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let x=1;x<=i;x++){let A=(i+1)*(v-1)+(x-1),b=(i+1)*v+(x-1),w=(i+1)*v+x,T=(i+1)*(v-1)+x;g.push(A,b,T),g.push(b,w,T)}}function S(){for(let v=0;v<=e;v++)for(let x=0;x<=i;x++)l.x=v/e,l.y=x/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Qx[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Se=class extends cs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},hs=class extends Se{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Do(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function jx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var rr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yl=class extends rr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yh,endingEnd:Yh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zh:r=t,a=2*e-n;break;case Jh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zh:o=t,c=2*n-e;break;case Jh:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,S=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+S*o[l+A]+v*o[c+A]+x*o[u+A];return r}},vl=class extends rr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Ml=class extends rr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},kn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Do(e,this.TimeBufferType),this.values=Do(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Do(t.times,Array),values:Do(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Bo:e=this.InterpolantFactoryMethodDiscrete;break;case qc:e=this.InterpolantFactoryMethodLinear;break;case Ca:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return qc;case this.InterpolantFactoryMethodSmooth:return Ca}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&jx(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ca,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=qc;var us=class extends kn{constructor(t,e,n){super(t,e,n)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Bo;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Sl=class extends kn{};Sl.prototype.ValueTypeName="color";var bl=class extends kn{};bl.prototype.ValueTypeName="number";var El=class extends rr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)Bn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Qo=class extends kn{InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}};Qo.prototype.ValueTypeName="quaternion";Qo.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends kn{constructor(t,e,n){super(t,e,n)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Bo;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends kn{};wl.prototype.ValueTypeName="vector";var Tl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},ty=new Tl,Al=class{constructor(t){this.manager=t!==void 0?t:ty,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Al.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=class extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},or=class extends Vr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},rc=new oe,Yu=new I,Zu=new I,jo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Yu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yu),Zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zu),e.updateMatrixWorld(),rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ju=new oe,Ir=new I,oc=new I,Rl=class extends jo{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Yt(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ir.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ir),oc.copy(n.position),oc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(oc),n.updateMatrixWorld(),i.makeTranslation(-Ir.x,-Ir.y,-Ir.z),Ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju)}},ta=class extends Vr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Cl=class extends jo{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oi=class extends Vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new Cl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Vl="\\[\\]\\.:\\/",ey=new RegExp("["+Vl+"]","g"),Gl="[^"+Vl+"]",ny="[^"+Vl.replace("\\.","")+"]",iy=/((?:WC+[\/:])*)/.source.replace("WC",Gl),sy=/(WCOD+)?/.source.replace("WCOD",ny),ry=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),ay=new RegExp("^"+iy+sy+ry+oy+"$"),cy=["material","materials","bones","map"],Pl=class{constructor(t,e,n){let i=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ey,"")}static parseTrackName(t){let e=ay.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);cy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Pl;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il);var sa={high:{dpr:1.6,blocks:18,grid:5,bevel:3,fps:60},medium:{dpr:1.25,blocks:12,grid:4,bevel:2,fps:60},low:{dpr:1,blocks:8,grid:3,bevel:1,fps:30}};function Xr(){let s="auto";try{s=localStorage.getItem("portfolio-quality")||"auto"}catch{}if(sa[s])return s;let t=navigator.hardwareConcurrency||4,e=navigator.deviceMemory||4;return t<=2||e<=2?"low":innerWidth<900||e<=4?"medium":"high"}var qr=new I;function Tn(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;qr.copy(t),qr[n]=0,qr.normalize();let l=.5*o/(o+a),h=1-qr.angleTo(s)/c;return Math.sign(qr[e])===1?h*l:a/(o+a)+l+l*(1-h)}var We=class extends pe{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new I,c=new I,l=new I(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new I,_=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Tn(g,c,"z","y",r,n),d[p+1]=1-Tn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-Tn(g,c,"z","y",r,n),d[p+1]=1-Tn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-Tn(g,c,"x","z",r,t),d[p+1]=Tn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-Tn(g,c,"x","z",r,t),d[p+1]=1-Tn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-Tn(g,c,"x","y",r,t),d[p+1]=1-Tn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=Tn(g,c,"x","y",r,t),d[p+1]=1-Tn(g,c,"y","x",r,e);break}}};var ra=class extends Ui{constructor(){super();let t=new pe;t.deleteAttribute("uv");let e=new Se({side:Qe}),n=new Se,i=new ta(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Nt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Nt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Nt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new Nt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Nt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Nt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Nt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Nt(t,hr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Nt(t,hr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new Nt(t,hr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new Nt(t,hr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let m=new Nt(t,hr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Nt(t,hr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function hr(s){let t=new Ie;return t.color.setScalar(s),t}function oa({size:s=2,software:t=!1,orange:e}={}){let n=new Kt,i=new Kt,r=[],o=e||new hs({color:"#e96c0c",metalness:.48,roughness:.38,clearcoat:.08,clearcoatRoughness:.5,envMapIntensity:.7}),a=new hs({color:"#e96c0c",metalness:.5,roughness:.46,envMapIntensity:.65}),c=new Se({color:"#211e19",metalness:.5,roughness:.4}),l=t?new pe(1,1,1):new We(1,1,1,4,.0325),h=t?new Ue(.91*s,.91*s):new We(.91*s,.91*s,.0125*s,3,.006*s),u=new pe(.006*s,.0225*s,.0015*s),d=new Nt(l,a);d.scale.setScalar(s),d.renderOrder=2,n.add(d,i);let f=new $t(t?"#dc630c":"#e96c0c"),g=new $t("#25211c");for(let[p,S]of[[0,0,1],[0,0,-1],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0]].entries()){let v=new Nt(h,o),x=new I(...S);if(v.renderOrder=3,v.quaternion.setFromUnitVectors(new I(0,0,1),x),v.position.copy(x).multiplyScalar(.504*s),i.add(v),r.push({part:v,normal:x}),p===0)for(let A=0;A<7;A++){let b=new Nt(u,c);b.renderOrder=4,b.position.set((-.325+A*.012)*s,-.325*s,.008*s),v.add(b)}}function _({fracture:p=0,spread:S=0}={}){let v=He.clamp(p,0,1),x=He.clamp(S,0,1);d.visible=i.visible=v<.8,d.scale.setScalar(s*Math.max(.001,1-v)),i.scale.setScalar(Math.max(.001,1-v)),r.forEach(({part:A,normal:b})=>A.position.copy(b).multiplyScalar((.504+x*.31)*s)),a.color.copy(f).lerp(g,x)}function m(){l.dispose(),h.dispose(),u.dispose(),a.dispose(),c.dispose(),e||o.dispose()}return{group:n,core:d,panelsGroup:i,panels:r,orange:o,update:_,dispose:m}}function aa(s,t){let e=new er(s),n=new ra,i=e.fromScene(n,.04);return t.environment=i.texture,e.dispose(),n.dispose(),i}var ur=class{constructor(t){if(this.canvas=t,this.context=t.getContext("2d",{alpha:!0}),!this.context)throw new Error("Canvas unavailable");this.capabilities={getMaxAnisotropy:()=>1},this.pixelRatio=1,this.mvp=new oe,this.normalMatrix=new te,this.vector=new I,this.normal=new I,this.light=new I(-.5,.8,.9).normalize(),this.half=new I(-.2,.4,1).normalize()}setPixelRatio(t){this.pixelRatio=Math.min(t,1.25)}setSize(t,e){this.width=t,this.height=e,this.canvas.width=Math.round(t*this.pixelRatio),this.canvas.height=Math.round(e*this.pixelRatio)}render(t,e){let n=this.context,i=this.width,r=this.height,o=this.pixelRatio;n.setTransform(o,0,0,o,0,0),n.clearRect(0,0,i,r),t.updateMatrixWorld(),e.updateMatrixWorld(),e.matrixWorldInverse.copy(e.matrixWorld).invert();let a=[],c=new oe().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),l=(f,g,_=null)=>{if(!f.isMesh||f.userData.skipSoftware)return;let m=f.material;if(!m||m.opacity<.005)return;let p=f.geometry,S=p.attributes.position,v=p.attributes.uv,x=p.attributes.normal,A=p.index;if(!S)return;this.mvp.multiplyMatrices(c,g),this.normalMatrix.getNormalMatrix(g);let b=[];for(let T=0;T<S.count;T++)this.vector.fromBufferAttribute(S,T).applyMatrix4(this.mvp),b.push({x:(this.vector.x*.5+.5)*i,y:(-.5*this.vector.y+.5)*r,z:this.vector.z});let w=A?A.count:S.count;for(let T=0;T<w;T+=3){let M=A?A.getX(T):T,y=A?A.getX(T+1):T+1,C=A?A.getX(T+2):T+2,F=b[M],z=b[y],V=b[C];if(F.z>1||F.z<-1||z.z>1||V.z>1)continue;let K=(z.x-F.x)*(V.y-F.y)-(z.y-F.y)*(V.x-F.x);if(m.side!==On&&K>=0||Math.max(F.x,z.x,V.x)<0||Math.min(F.x,z.x,V.x)>i||Math.max(F.y,z.y,V.y)<0||Math.min(F.y,z.y,V.y)>r)continue;let N=1,nt=0,G=0;!m.isMeshBasicMaterial&&x&&(this.normal.set(x.getX(M)+x.getX(y)+x.getX(C),x.getY(M)+x.getY(y)+x.getY(C),x.getZ(M)+x.getZ(y)+x.getZ(C)).applyMatrix3(this.normalMatrix).normalize(),N=.26+Math.max(0,this.normal.dot(this.light))*.9,nt=Math.pow(Math.max(0,this.normal.dot(this.half)),24)*.05,G=Math.pow(1-Math.abs(this.normal.z),4)*.035);let lt=m.color.clone();_&&lt.multiply(_),lt.convertLinearToSRGB();let Q=[lt.r,lt.g,lt.b].map((k,D)=>Math.round(Math.min(1,k*N+nt*(D===0?1:D===1?.82:.63)+G*(D===0?.9:D===1?.36:.16))*255)),dt=null;if(m.map?.image&&v){let k=m.map.image;dt={img:k,uv:[M,y,C].map(D=>({x:v.getX(D)*k.width,y:(1-v.getY(D))*k.height}))}}let St=null;if(!dt&&p.type==="BoxGeometry"&&A&&T%6===0){St=[...new Set(Array.from({length:6},(q,L)=>A.getX(T+L)))].map(q=>b[q]);let D=St.reduce((q,L)=>q+L.x,0)/4,B=St.reduce((q,L)=>q+L.y,0)/4;St.sort((q,L)=>Math.atan2(q.y-B,q.x-D)-Math.atan2(L.y-B,L.x-D)),T+=3}a.push({a:F,b:z,c:V,z:St?St.reduce((k,D)=>k+D.z,0)/4:(F.z+z.z+V.z)/3,color:`rgb(${Q.join(",")})`,alpha:m.opacity,order:f.renderOrder,tex:dt,quad:St})}},h=new oe,u=new oe,d=new $t;t.traverseVisible(f=>{if(!(!f.isMesh||f.userData.skipSoftware))if(f.isInstancedMesh)for(let g=0;g<f.count;g++)f.getMatrixAt(g,h),u.multiplyMatrices(f.matrixWorld,h),f.instanceColor&&f.getColorAt(g,d),l(f,u,f.instanceColor?d:null);else l(f,f.matrixWorld)}),a.sort((f,g)=>f.order-g.order||g.z-f.z);for(let f of a){if(n.globalAlpha=f.alpha,f.tex){this.drawTexture(f);continue}n.fillStyle=f.color,n.strokeStyle=f.color,n.lineWidth=.5,n.beginPath();let g=f.quad||[f.a,f.b,f.c];n.moveTo(g[0].x,g[0].y);for(let _ of g.slice(1))n.lineTo(_.x,_.y);n.closePath(),n.fill(),n.stroke()}n.globalAlpha=1}drawTexture(t){let e=this.context,[n,i,r]=t.tex.uv,[o,a,c]=[t.a,t.b,t.c],l=n.x*(i.y-r.y)+i.x*(r.y-n.y)+r.x*(n.y-i.y);if(Math.abs(l)<.001)return;let h=(o.x*(i.y-r.y)+a.x*(r.y-n.y)+c.x*(n.y-i.y))/l,u=(o.y*(i.y-r.y)+a.y*(r.y-n.y)+c.y*(n.y-i.y))/l,d=(o.x*(r.x-i.x)+a.x*(n.x-r.x)+c.x*(i.x-n.x))/l,f=(o.y*(r.x-i.x)+a.y*(n.x-r.x)+c.y*(i.x-n.x))/l,g=(o.x*(i.x*r.y-r.x*i.y)+a.x*(r.x*n.y-n.x*r.y)+c.x*(n.x*i.y-i.x*n.y))/l,_=(o.y*(i.x*r.y-r.x*i.y)+a.y*(r.x*n.y-n.x*r.y)+c.y*(n.x*i.y-i.x*n.y))/l;e.save(),e.beginPath();let m=(o.x+a.x+c.x)/3,p=(o.y+a.y+c.y)/3,S=v=>{let x=v.x-m,A=v.y-p,b=Math.hypot(x,A)||1;return[v.x+x/b*.7,v.y+A/b*.7]};e.moveTo(...S(o)),e.lineTo(...S(a)),e.lineTo(...S(c)),e.closePath(),e.clip(),e.transform(h,u,d,f,g,_),e.drawImage(t.tex.img,0,0),e.restore()}};function xd(){if(!document.querySelector("#world"))return;let s=document.documentElement,t=document.querySelector(".art"),e=document.querySelector("#world"),n=document.querySelector(".portrait-opening")||document.querySelector("#journey"),i=document.querySelector("#portrait"),r=matchMedia("(prefers-reduced-motion: reduce)"),o=()=>r.matches||s.classList.contains("reduced-motion"),a=(D,B,q)=>{let L=He.clamp((q-D)/(B-D),0,1);return L*L*(3-2*L)},c,l=!1;try{c=new nr({canvas:e,alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{l=!0;try{c=new ur(e)}catch{s.dataset.renderer="static"}}let h=new Ui,u=new tr(-4,4,2.7,-2.7,.1,30);u.position.z=10;let d;c&&!l&&(c.outputColorSpace=Te,c.toneMapping=Gr,c.toneMappingExposure=1,d=aa(c,h)),h.add(new or("#fff5e5","#635446",1.6));let f=new Oi("#fff8ee",2.8);f.position.set(-3,6,5),h.add(f);let g=oa({size:1.85,software:l});h.add(g.group),g.group.rotation.set(.22,-.49,-.05),g.group.traverse(D=>{D.isMesh&&(D.material.transparent=!0)});let _=JSON.parse(document.querySelector("#samples").textContent),m=Xr(),p=l?448:m==="low"?224:m==="medium"||innerWidth<700?448:896,S=new pe(1,1,1),v=new Se({color:"#ffffff",metalness:.35,roughness:.48,transparent:!0}),x=new xe(S,v,p);x.instanceMatrix.setUsage(Hn),x.frustumCulled=!1,h.add(x);let A=new I,b=new he,w=new $t,T=D=>{let B=Math.sin((D+1)*127.1)*43758.5453;return B-Math.floor(B)},M=Array.from({length:p},(D,B)=>{let q=_[Math.floor(B*_.length/p)],L=Math.ceil(Math.cbrt(p));return{start:new I((B%L/(L-1)-.5)*1.72,(Math.floor(B/L)%L/(L-1)-.5)*1.72,(Math.floor(B/L/L)/(L-1)-.5)*1.72).applyEuler(g.group.rotation),target:new I((q[0]-.5)*2.85,(.5-q[1])*3.8,0),color:new $t(q[2]),phase:T(B)*Math.PI*2,radius:.8+T(B+9)*.9,height:(T(B+28)-.5)*3.5,speed:.45+T(B+7)*.4}}),y=0,C=0,F=0,z=0,V=!0,K=!0,N=[["Seu neg\xF3cio tem<br>um <em>problema?</em>","Eu transformo em<br>solu\xE7\xE3o digital.","01 / O PONTO DE PARTIDA"],["Separar para<br><em>entender.</em>","Cada parte revela<br>um caminho poss\xEDvel.","02 / INVESTIGA\xC7\xC3O"],["Conectar faz<br><em>tomar forma.</em>","O movimento encontra dire\xE7\xE3o.","03 / CONEX\xC3O"],["Por tr\xE1s da solu\xE7\xE3o,<br><em>Abra\xE3o.</em>","Abra\xE3o Lima Ribeiro<br>Desenvolvedor de solu\xE7\xF5es digitais.","04 / QUEM RESOLVE"]],nt=-1;function G(){let D=y<.24?0:y<.57?1:y<.83?2:3;D!==nt&&(nt=D,document.querySelector("#headline").innerHTML=N[D][0],document.querySelector("#subline").innerHTML=N[D][1],document.querySelector("#chapter").textContent=N[D][2]),s.style.setProperty("--progress",y),i.style.opacity=a(.82,.97,y),i.setAttribute("aria-hidden",String(y<.83)),i.style.filter=`blur(${(1-a(.8,.96,y))*9}px)`,n.dataset.progress=y.toFixed(3),n.dataset.phase=String(D)}function lt(){let D=n.getBoundingClientRect();C=He.clamp(-D.top/(D.height-innerHeight),0,1),K=!0}addEventListener("scroll",lt,{passive:!0});let Q=()=>{if(!c)return;let D=t.getBoundingClientRect();c.setPixelRatio(Math.min(devicePixelRatio||1,l?1:innerWidth<700?1.25:1.6)),c.setSize(D.width,D.height,!1),u.left=-2.7*D.width/D.height,u.right=2.7*D.width/D.height,u.updateProjectionMatrix(),K=!0,lt()},dt=new ResizeObserver(Q);dt.observe(t),Q();function St(D){if(F=requestAnimationFrame(St),!V||document.hidden)return;let B=Math.min((D-z)/1e3||.016,.06);if(B<(l?1/24:1/60)*.85||(z=D,y=o()?C:He.damp(y,C,9,B),Math.abs(y-C)<1e-4&&(y=C),G(),!c))return;if(o()){if(g.group.visible=y<.5,x.visible=!1,i.style.opacity=y<.5?0:1,!K)return;K=!1,c.render(h,u);return}let q=a(.12,.43,y),L=a(.53,.78,y),st=a(.83,.98,y);g.group.visible=y<.17,g.group.position.y=Math.sin(D*5e-4)*.025;let xt=1-a(.08,.17,y);g.group.traverse(Tt=>{Tt.isMesh&&(Tt.material.opacity=xt)}),x.visible=y>.17&&y<.985,v.opacity=a(.17,.23,y)*(1-st);let At=D*25e-5;if(x.visible)for(let Tt=0;Tt<p;Tt++){let vt=M[Tt],kt=vt.phase+At*vt.speed,H=Math.cos(kt)*vt.radius,Qt=vt.height+Math.sin(kt*1.65+vt.phase)*.32,Vt=Math.sin(kt)*.8;b.position.copy(vt.start).lerp(A.set(H,Qt,Vt),q).lerp(vt.target,L);let Ft=Math.sin(D*.0017+vt.phase)*.14*q*(1-L);b.position.y+=Ft;let Rt=He.lerp(.205,l?.1:.088,L);b.scale.setScalar(Rt*(1-st*.25)),b.rotation.set(kt*(1-L),kt*.8*(1-L),kt*.6*(1-L)),b.updateMatrix(),x.setMatrixAt(Tt,b.matrix),w.set("#ed790e").lerp(vt.color,a(.67,.86,y)),x.setColorAt(Tt,w)}x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),c.render(h,u),s.dataset.renderer=l?"canvas":"webgl"}F=requestAnimationFrame(St);let k=new IntersectionObserver(([D])=>{V=D.isIntersecting,s.dataset.portraitVisible=String(V)});k.observe(n),r.addEventListener("change",()=>{K=!0}),addEventListener("pagehide",D=>{D.persisted||(cancelAnimationFrame(F),dt.disconnect(),k.disconnect(),g.dispose(),S.dispose(),v.dispose(),d?.dispose(),c?.dispose?.())}),lt(),G()}var yd=s=>Math.max(0,Math.min(1,s)),Fi=(s,t,e)=>{let n=yd((e-s)/(t-s));return n*n*(3-2*n)},Xe=(s,t,e)=>s.map((n,i)=>n+(t[i]-n)*e),Bi=[[-2,.65,1.6],[2,.65,.35],[-.35,.65,-2.25]],ly=.43,hy=.61;function Wl(s){let t=yd(s),[e,n,i]=Bi,r=Xe(e,n,.36),o=Xe(n,i,.36),a=Xe(i,e,.36),c,l=t<.35?0:t<.7?1:2;if(t<.2)c=Xe(e,r,Fi(0,.2,t));else if(t<.3)c=[...r];else if(t<.4){let u=Fi(.3,.4,t);c=Xe(r,n,u),c[1]+=Math.sin(u*Math.PI)*1.05}else if(t<.55)c=Xe(n,o,Fi(.4,.55,t));else if(t<.65)c=[...o];else if(t<.75){let u=Fi(.65,.75,t);c=Xe(o,i,u),c[1]+=Math.sin(u*Math.PI)*1.05}else c=Xe(i,a,Fi(.75,.9,t));let h=Xe([0,.3,0],c,.24+Fi(.12,.92,t)*.18);return{p:t,phase:l,actor:c,focus:h,blocked:t>=.2&&t<=.3||t>=.55&&t<=.65||t>=.9,yaw:-.45+t*1.3,zoom:1-Fi(.08,.95,t)*.24}}function vd({scene:s,software:t=!1,quality:e="high"}){let n=new Kt;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=[],a=Q=>(i.add(Q),Q),c=Q=>(r.add(Q),Q),l=a(new pe(1,1,1)),h=t||e==="low"?l:a(new We(1,1,1,2,.045)),u=c(new Se({color:"#272824",metalness:.36,roughness:.57})),d=c(new Se({color:"#111310",metalness:.25,roughness:.72})),f=c(new Se({color:"#e1d6c3",metalness:.26,roughness:.48})),g=c(new Se({color:"#635341",metalness:.6,roughness:.46})),_=c(new Ie({color:"#fa760d",toneMapped:!1})),m=c(new Ie({color:"#7d3e14",toneMapped:!1})),p=c(new Ie({color:"#e8ceb0",toneMapped:!1}));function S(Q,dt,St=u,k=!1){let D=new Nt(k?h:l,St);return D.position.set(...Q),D.scale.set(...dt),n.add(D),D}function v(Q,dt,St,k){let D=new I(...Q),B=new I(...dt),q=B.clone().sub(D),L=S(D.clone().add(B).multiplyScalar(.5).toArray(),[St,q.length(),St],k);return L.quaternion.setFromUnitVectors(new I(0,1,0),q.normalize()),L}S([0,-.34,-.2],[6.8,.28,6.2],d,!0).renderOrder=-20,S([0,-.5,-.2],[7.05,.08,6.45],u).renderOrder=-21;let x=new xe(l,u,t||e==="low"?32:80),A=new he;n.add(x),x.renderOrder=-19;for(let Q=0;Q<x.count;Q++){let dt=(Q%10-4.5)*.64,St=(Math.floor(Q/10)-3.5)*.7;A.position.set(dt,-.16,St),A.scale.set(.61,.025,.67),A.updateMatrix(),x.setMatrixAt(Q,A.matrix)}let b=[];for(let Q=0;Q<3;Q++){let[dt,,St]=Bi[Q];S([dt,.04,St],[1.56,.34,1.5],u,!0),S([dt,.23,St],[1.38,.1,1.31],g),S([dt,.32,St],[1.26,.1,1.18],d,!0),S([dt,.39,St],[1.1,.045,.99],f,!0);for(let B=0;B<(t||e==="low"?3:6);B++)S([dt-.43+B*.17,.48,St-.38],[.055,.17,.16],u);S([dt,.5,St+.45],[.92,.035,.025],m);let k=S([dt,.505,St+.45],[.6,.04,.032],_);b.push(k);let D=[.9,1.35,1.08][Q];S([dt+.48,.4+D/2,St-.38],[.28,D,.3],u,!0),S([dt+.48,.42+D,St-.38],[.24,.025,.24],f);for(let B=0;B<3;B++)S([dt+.48,.65+B*.21,St-.212],[.15,.025,.012],B===Q?_:g)}let w=[],T=[];for(let Q=0;Q<3;Q++){let dt=Bi[Q],St=Bi[(Q+1)%3],k=new I(...St).sub(new I(...dt)).normalize(),D=new I(-k.z,0,k.x);for(let[st,xt]of[[.12,ly],[hy,.88]]){for(let vt of[-1,1]){let kt=new I(...Xe(dt,St,st)).addScaledVector(D,vt*.15),H=new I(...Xe(dt,St,xt)).addScaledVector(D,vt*.15);kt.y=H.y=.39,v(kt.toArray(),H.toArray(),.075,u),kt.y=H.y=.438,v(kt.toArray(),H.toArray(),.018,st===.12?_:m)}let At=Xe(dt,St,st),Tt=Xe(dt,St,xt);At[1]=Tt[1]=.35,v(At,Tt,.16,g)}for(let st of[.21,.78]){let xt=Xe(dt,St,st);S([xt[0],.03,xt[2]],[.18,.6,.18],u)}let B=Xe(dt,St,.48),q=S([B[0],.79,B[2]],[.035,.68,.52],u,!0);q.rotation.y=-Math.atan2(k.z,k.x),w.push(q);let L=S([B[0]-.018,.81,B[2]],[.018,.49,.025],_);L.rotation.y=q.rotation.y,T.push(L);for(let st=0;st<3;st++){let xt=Xe(dt,St,.49+st*.035);S([xt[0],.2-st*.12,xt[2]],[.07,.07,.07],st===0?g:u)}}for(let[Q,dt,St]of[[-2.9,-1.1,.8],[2.8,1.9,.65],[1.6,-2.9,.5]]){S([Q,St/2-.14,dt],[.55,St,.7],u,!0);for(let k=0;k<3;k++)S([Q-.16+k*.16,St-.12,dt+.355],[.045,.12,.014],f)}for(let Q=0;Q<4;Q++)S([-2.6+Q*.16,-.135,2.6],[.07,.02,.14],Q===0?_:g);let M=t||e==="low"?12:24,y=new xe(l,_,M);if(y.frustumCulled=!1,n.add(y),!t){let Q=document.createElement("canvas");Q.width=Q.height=64;let dt=Q.getContext("2d"),St=dt.createRadialGradient(32,32,0,32,32,32);St.addColorStop(0,"rgba(255,110,15,.32)"),St.addColorStop(1,"rgba(255,110,15,0)"),dt.fillStyle=St,dt.fillRect(0,0,64,64);let k=new Ge(Q);o.push(k);let D=c(new Ie({map:k,transparent:!0,depthWrite:!1,toneMapped:!1})),B=a(new Ue(2.7,2.7));for(let q of Bi){let L=new Nt(B,D);L.position.set(q[0],-.115,q[2]),L.rotation.x=-Math.PI/2,n.add(L)}}let C=document.querySelector(".cinematic-flow"),F=[...C?.querySelectorAll(".film-act")||[]],z=[...C?.querySelectorAll("[data-island]")||[]],V=-1,K=-1,N=0,nt=new I;function G(Q,dt,St){let k=Wl(Q);n.visible=!0;let D=M/3;for(let B=0;B<M;B++){let q=Math.floor(B/D),L=q===k.phase,st=((L?dt*12e-5:0)+B%D/D)%1*.38,xt=Bi[q],At=Bi[(q+1)%3],Tt=Xe(xt,At,st),vt=Fi(.3,.38,st),kt=.065*(L?1:.35)*(1-vt*.85);A.position.set(Tt[0],.52,Tt[2]),A.rotation.set(0,dt*2e-4+B,0),A.scale.set(kt,.025,kt),A.updateMatrix(),y.setMatrixAt(B,A.matrix)}return y.instanceMatrix.needsUpdate=!0,w.forEach((B,q)=>{B.position.y=.79+(q===k.phase?Math.sin(dt*.0018)*.025:0)}),T.forEach((B,q)=>{B.visible=q===k.phase,B.scale.y=k.blocked?.44+Math.sin(dt*.004)*.06:.28}),b.forEach((B,q)=>{B.scale.x=q===k.phase?.6+Math.sin(dt*.002)*.09:.3}),C&&(C.dataset.rendered="true",C.dataset.cinemaPhase=String(k.phase),C.dataset.cinemaProgress=k.p.toFixed(3),C.dataset.cinemaBlocked=String(k.blocked),V!==k.phase&&(V=k.phase,F.forEach((B,q)=>B.dataset.active=String(q===k.phase))),(K!==Q||N!==St.aspect)&&(St.updateMatrixWorld(),K=Q,N=St.aspect,z.forEach((B,q)=>{let L=Bi[q];nt.set(L[0],1.95,L[2]).project(St),B.style.left=(nt.x*.5+.5)*100+"%",B.style.top=(-nt.y*.5+.5)*100+"%",B.style.opacity=nt.z<1&&Math.abs(nt.x)<.85?"1":"0"}))),k}function lt(){s.remove(n),i.forEach(Q=>Q.dispose()),r.forEach(Q=>Q.dispose()),o.forEach(Q=>Q.dispose())}return{group:n,update:G,dispose:lt}}var Xl=(s,t=0,e=1)=>Math.max(t,Math.min(e,s)),Jn=(s,t,e)=>{let n=Xl((e-s)/(t-s));return n*n*n*(n*(n*6-15)+10)};function ca(s,t=4){let e=Xl(Number.isFinite(s)?s:0),n=Xl((e-.055)/.91,0,1)*t,i=Math.min(t-1,Math.floor(n)),r=n-i;return{p:e,time:n,index:i,local:r,dock:Jn(.19,.64,r),cameraDock:Jn(.19,.64,r)*(1-Jn(.87,1,r)),phase:r<.24?0:r<.7?1:2,entrance:Jn(0,.075,e),finish:Jn(.95,1,e),pulse:Math.sin(Math.PI*Jn(.48,.76,r))}}function Md(s,t){let e=s-t,n=Math.max(0,-e),i=Jn(0,.19,e),r=Jn(.19,.64,e),o=n*1.75,a=[1.35*Math.cos(o)-1.5*Math.sin(o),3.1+Math.sin(n*1.2)*.65+n*.05,-1.25-n*.65],c=[-.1,3.12,1.35];return{t:e,dock:r,visible:e<.64,position:a.map((l,h)=>l+(c[h]-l)*i),scale:.79/(1+n*.12)+(1-.79/(1+n*.12))*i,yaw:(-.24-n*.08)*(1-i)+.09*i,roll:(.055+n*.025)*(1-i)}}function Sd({scene:s,software:t=!1,quality:e="medium"}){let n=new Kt;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=new Set,a=t||e==="low",c=document.querySelector("[data-notebook-stage]"),l=c.querySelector(".notebook-world"),h=[...c.querySelectorAll("[data-project-screen]")],u=ct=>(i.add(ct),ct),d=(ct,mt=!1)=>{let tt=mt?new Ie(ct):new Se({roughness:.38,metalness:.65,...ct});return r.add(tt),tt},f=d({color:"#53534e",roughness:.32,metalness:.85}),g=d({color:"#a8a79e",roughness:.23,metalness:.88}),_=d({color:"#20221f",roughness:.5}),m=d({color:"#10120f",roughness:.7}),p=d({color:"#ed791d",roughness:.3,metalness:.56}),S=d({color:"#f18c36",toneMapped:!1},!0),v=u(a?new pe(1,1,1):new We(1,1,1,2,.035)),x=u(new pe(1,1,1)),A=u(new Ue(4.22,2.6375,a?8:12,a?5:8));function b(ct,mt,tt,ft,pt=n,U=!1){let j=new Nt(U?x:v,ft);return j.scale.set(ct,mt,tt),pt.add(j),j}function w(ct,mt,tt){let ft=new xe(v,mt,ct);return ft.frustumCulled=!1,tt.add(ft),ft}let T=new he;function M(ct,mt,tt,ft,pt,U,j,Y){T.position.set(tt,ft,pt),T.rotation.set(0,0,0),T.scale.set(U,j,Y),T.updateMatrix(),ct.setMatrixAt(mt,T.matrix)}let y=new Kt;n.add(y),b(4.88,.16,3.22,f,y).position.set(0,-.94,.72);let C=b(4.75,.045,3.08,g,y);C.position.set(0,-.847,.7),C.renderOrder=1;let F=b(4.65,.025,2.94,f,y);F.position.set(0,-.817,.7),F.renderOrder=2;let z=b(4.4,.018,1.49,m,y);z.position.set(0,-.796,.24),z.renderOrder=3;let V=w(65,_,y);V.renderOrder=4;for(let ct=0;ct<5;ct++)for(let mt=0;mt<13;mt++)M(V,ct*13+mt,-1.91+mt*.319,-.775,-.32+ct*.272,.278,.038,.222);let K=b(1.7,.024,.18,_,y);K.position.set(0,-.765,.98),K.renderOrder=4;let N=b(1.64,.012,.83,g,y);N.position.set(0,-.789,1.67),N.renderOrder=3;let nt=b(1.59,.015,.78,f,y);nt.position.set(0,-.777,1.67),nt.renderOrder=4;let G=w(a?16:32,m,y);G.renderOrder=4;for(let ct=0;ct<G.count;ct++){let mt=ct<G.count/2?-1:1,tt=ct%(G.count/2);M(G,ct,mt*2.3,-.78,-.35+tt*(1.35/(G.count/2)),.022,.008,.035)}for(let ct of[-1.58,1.58])b(.76,.18,.2,_,y).position.set(ct,-.78,-.78);for(let ct of[-2.446,2.446])for(let mt of[.05,.5])b(.008,.05,.23,m,y).position.set(ct,-.94,mt);b(.065,.026,.016,S,y).position.set(2.14,-.91,2.337),b(1.1,.018,.014,_,y).position.set(0,-.87,2.34);let lt=new Kt;lt.position.set(0,-.76,-.78),lt.rotation.x=-.105,y.add(lt);let Q=b(4.88,3.05,.105,f,lt);Q.position.y=1.51,Q.renderOrder=5;let dt=b(4.74,2.92,.024,g,lt);dt.position.set(0,1.52,.065),dt.renderOrder=6;let St=b(4.68,2.86,.025,m,lt);St.position.set(0,1.52,.084),St.renderOrder=7;let k=d({color:"#171b16",toneMapped:!1},!0),D=document.createElement("canvas");D.width=768,D.height=480;let B=D.getContext("2d");B.fillStyle="#171b16",B.fillRect(0,0,768,480),B.fillStyle="#e6ded0",B.font="500 40px Arial",B.fillText("dev.abraao",66,209),B.fillStyle="#f58a2b",B.fillRect(68,244,48,2),B.font="10px Arial",B.fillText("O PROBLEMA ENCONTRA SEU CAMINHO.",68,282);let q=new Ge(D);q.colorSpace=Te,o.add(q),k.map=q,k.color.set("#ffffff");let L=new Nt(A,k);L.position.set(0,1.53,.105),L.renderOrder=8,lt.add(L);let st=new he;st.position.copy(L.position),st.position.z-=.055,lt.add(st);let xt=b(.045,.023,.006,_,lt);xt.position.set(0,2.913,.103),xt.renderOrder=8;for(let ct=0;ct<9;ct++){let mt=b(.009,.025,.005,ct===8?p:g,lt);mt.position.set(-.09+ct*.021,.095,.104),mt.renderOrder=8}let At=d({color:"#e48639",transparent:!0,opacity:.08,toneMapped:!1},!0),Tt=b(4.35,.018,.016,At,lt);Tt.position.set(0,.175,.112),Tt.renderOrder=9;let vt=document.createElement("canvas");vt.width=vt.height=64;let kt=vt.getContext("2d"),H=kt.createRadialGradient(32,32,0,32,32,32);H.addColorStop(0,"#25221990"),H.addColorStop(1,"#25221900"),kt.fillStyle=H,kt.fillRect(0,0,64,64);let Qt=new Ge(vt);o.add(Qt);let Vt=new Nt(u(new Ue(6.4,4.5)),d({map:Qt,transparent:!0,depthWrite:!1},!0));Vt.rotation.x=-Math.PI/2,Vt.position.set(0,-1.125,.5),n.add(Vt),Vt.renderOrder=-7;let Ft=h.map((ct,mt)=>{let tt=new Kt;n.add(tt);let ft=d({color:mt===0?"#d88034":"#a3a093",roughness:.32,metalness:.7}),pt=b(4.34,2.76,.065,ft,tt),U=b(4.27,2.69,.022,m,tt);U.position.z=.039;let j=d({color:"#f4f0e8",toneMapped:!1},!0),Y=new Nt(A,j);Y.position.z=.055,tt.add(Y);let J=b(.22,.06,.016,p,tt);return J.position.set(-1.9,1.405,.01),{board:tt,frame:pt,inset:U,face:Y,tab:J,faceMat:j,border:ft,texture:null,el:ct}}),Rt=0;n.traverse(ct=>{ct.isMesh&&Rt++}),c.dataset.notebookMeshes=String(Rt);let Zt=new I,Pt=new Bn,P=new Bn,E=new wn,Z=new I,yt=new I,bt=new I,ht=-1,gt=!1,_t=!1,Mt=0;function Bt(ct,mt){let tt=document.createElement("canvas");tt.width=a?768:1024,tt.height=tt.width/1.6;let ft=tt.getContext("2d");if(mt!=="nexa")ft.drawImage(ct,0,0,ct.width,Math.min(ct.height,ct.width/1.6),0,0,tt.width,tt.height);else{let j=function(Y,J){let[O,$,Et]=Y,[It,at,wt]=J,zt=O[0]*($[1]-Et[1])+$[0]*(Et[1]-O[1])+Et[0]*(O[1]-$[1]),Jt=ot=>[(It[ot]*($[1]-Et[1])+at[ot]*(Et[1]-O[1])+wt[ot]*(O[1]-$[1]))/zt,(It[ot]*(Et[0]-$[0])+at[ot]*(O[0]-Et[0])+wt[ot]*($[0]-O[0]))/zt,(It[ot]*($[0]*Et[1]-Et[0]*$[1])+at[ot]*(Et[0]*O[1]-O[0]*Et[1])+wt[ot]*(O[0]*$[1]-$[0]*O[1]))/zt],ue=Jt(0),Ht=Jt(1);ft.save(),ft.beginPath(),ft.moveTo(...It),ft.lineTo(...at),ft.lineTo(...wt),ft.closePath(),ft.clip(),ft.transform(ue[0],Ht[0],ue[1],Ht[1],ue[2],Ht[2]),ft.drawImage(ct,0,0),ft.restore()},U=[[188,38],[735,38],[749,375],[177,375]].map(([Y,J])=>[Y/1100*ct.width,J/434*ct.height]);j([U[0],U[1],U[2]],[[0,0],[tt.width,0],[tt.width,tt.height]]),j([U[0],U[2],U[3]],[[0,0],[tt.width,tt.height],[0,tt.height]])}let pt=new Ge(tt);return pt.colorSpace=Te,pt.anisotropy=a?1:4,o.add(pt),pt}function rt(){_t||gt||(_t=!0,Ft.forEach(ct=>{let mt=new Image;mt.decoding="async",mt.onload=()=>{gt||(ct.texture=Bt(mt,ct.el.dataset.projectKind),ct.faceMat.map=ct.texture,ct.faceMat.needsUpdate=!0,c.dataset.screensReady=String(++Mt))},mt.onerror=()=>{c.dataset.screenError="true"},mt.src=ct.el.dataset.projectScreen}))}let ut=new IntersectionObserver(ct=>{ct.some(mt=>mt.isIntersecting)&&(rt(),ut.disconnect())},{rootMargin:"1200px"});ut.observe(l);function Dt(ct,mt,tt){rt();let ft=ca(ct,Ft.length),pt=innerWidth<=700;n.rotation.y=.07-Math.sin(ft.p*Math.PI)*.07,n.position.y=-.12+ft.entrance*.12,y.rotation.y=Math.sin(ft.local*Math.PI)*.025,lt.rotation.x=-.105-Math.sin(ft.local*Math.PI)*.025,s.updateMatrixWorld(!0),st.getWorldPosition(Z),st.getWorldQuaternion(Pt);let U=.012*Math.sin(mt*75e-5);Ft.forEach((Y,J)=>{let O=Md(ft.time,J);if(Y.board.visible=O.visible,!O.visible)return;let $=30-(J-ft.index)*4;Y.frame.renderOrder=$,Y.inset.renderOrder=$+1,Y.face.renderOrder=$+2,Y.tab.renderOrder=$+2,Zt.set(...O.position),Zt.y+=U*(1-O.dock),pt&&(Zt.x*=.72);let Et=n.worldToLocal(Z.clone());yt.copy(Zt).add(new I(-.4,.2,0)),bt.copy(Et).add(new I(.25,.72,1.1));let It=O.dock,at=1-It;Y.board.position.copy(Zt).multiplyScalar(at**3).addScaledVector(yt,3*at*at*It).addScaledVector(bt,3*at*It*It).addScaledVector(Et,It**3),E.set(.035,O.yaw,O.roll),P.setFromEuler(E);let wt=n.quaternion.clone().invert().multiply(Pt);Y.board.quaternion.copy(P).slerp(wt,It),Y.board.scale.setScalar(O.scale+(1-O.scale)*It);let zt=1-Jn(.76,1,It);Y.frame.material.transparent=!0,Y.frame.material.opacity=zt,Y.inset.visible=zt>.01,Y.tab.visible=zt>.2});let j=ft.dock>.998?ft.index:Math.max(0,ft.index-1);return Ft[j].texture&&(ht!==j||L.material.map!==Ft[j].texture)&&(L.material=Ft[j].faceMat,ht=j),ft.index===0&&ft.dock<=.998&&(L.material=k,ht=-1),L.visible=!0,At.opacity=.12+ft.pulse*.7,l.dataset.rendered="true",c.dataset.docking=ft.dock.toFixed(3),ft}return{group:n,update:Dt,dispose(){gt=!0,ut.disconnect(),s.remove(n),n.traverse(ct=>{ct.isInstancedMesh&&ct.dispose()}),i.forEach(ct=>ct.dispose()),r.forEach(ct=>ct.dispose()),o.forEach(ct=>ct.dispose())}}}var ql=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0));function uy(s,t=6){let e=ql(s),n=Math.max(1,Math.floor(t)||1),i=Math.min(n-1,Math.floor(e*n)),r=e===1?1:e*n-i;return{index:i,local:r,beat:r<.26?0:r<.53?1:2,builds:[-.1,.26,.53].map(o=>{let a=ql((r-o)/.18);return a*a*(3-2*a)})}}var An=(s,t,e)=>{let n=ql((e-s)/(t-s));return n*n*n*(n*(n*6-15)+10)};function bd(s){let t=uy(s),e=t.local,n=t.index<5?An(.84,1,e):0,i=t.index+n,r=An(.04,.76,e);return{...t,travel:n,focus:i,x:i*14,yaw:(.44-r*.68)*(1-n)+.44*n,zoom:(1-An(.1,.51,e)*.17)*(1-n)+n,assemble:An(.025,.43,e),connect:An(.25,.69,e),resolve:An(.52,.78,e),copyOpacity:An(0,.07,e)*(1-An(.84,.98,e))}}function Ed({scene:s,software:t=!1,quality:e="medium"}){let n=new Kt;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=new Set,a=[],c=t||e==="low",l=document.querySelector(".solutions-world"),h=k=>(i.add(k),k),u=(k,D=!1)=>{let B=D?new Ie(k):new Se({roughness:.37,metalness:.68,...k});return r.add(B),B},d=u({color:"#454b40"}),f=u({color:"#b6a382",roughness:.28,metalness:.8}),g=u({color:"#171e18",roughness:.6}),_=u({color:"#d1742b",roughness:.3,metalness:.75}),m=u({color:"#ffa04a",toneMapped:!1},!0),p=u({color:"#b98245",toneMapped:!1,transparent:!0,opacity:.25},!0),S=h(c?new pe(1,1,1):new We(1,1,1,2,.045)),v=h(new Ue(1,1,c?2:8,c?2:5)),x=h(new Zn(1,c?10:18,c?7:12)),A=h(new Ni(1,.012,c?3:5,c?32:64)),b=new he;function w(k,D,B,q,L){let st=new Nt(S,q);return st.scale.set(k,D,B),L.add(st),st}function T(k,D,B=p){let q=new Nt(A,B);return q.scale.setScalar(k),D.add(q),q}function M(k,D,B,q,L,st,xt,At){b.position.set(B,q,L),b.scale.set(st,xt,At),b.rotation.set(0,0,0),b.updateMatrix(),k.setMatrixAt(D,b.matrix)}function y(k,D,B,q,L,st,xt){k.fillStyle=xt,k.beginPath(),k.roundRect(D,B,q,L,st),k.fill()}function C(k,D,B,q,L=18,st="#e6e0d0",xt=!1){k.fillStyle=st,k.font=`${xt?700:400} ${L}px Arial`,k.fillText(D,B,q)}function F(k,D,B,q,L="#464b3f"){k.fillStyle=L,k.fillRect(D,B,q,1)}function z(k,D,B=""){let q=document.createElement("canvas");q.width=k==="main"?1024:640,q.height=k==="main"?640:380;let L=q.getContext("2d"),st=q.width,xt=q.height;if(y(L,0,0,st,xt,16,"#162019"),L.strokeStyle="#77674c",L.lineWidth=2,L.strokeRect(1,1,st-2,xt-2),k==="main"){y(L,0,0,st,53,12,"#293025"),[0,1,2].forEach(vt=>{L.fillStyle=vt?"#766b56":"#ef984b",L.beginPath(),L.arc(29+vt*19,27,4,0,7),L.fill()}),y(L,350,17,320,22,5,"#151e17"),C(L,"seunegocio.com.br",440,33,12,"#aea891"),C(L,"seu.neg\xF3cio",55,108,28,"#f1ebdc",!0),C(L,"UM PR\xD3XIMO PASSO.",56,163,12,"#e79b58"),C(L,"Uma boa ideia",55,231,48,"#f3eddf",!0),C(L,"ganha presen\xE7a.",55,287,48,"#ed9b52",!0),C(L,"Clareza para entender. Um caminho para agir.",57,335,18,"#a9b19f"),y(L,55,370,235,48,7,"#de883d"),C(L,"Vamos conversar  \u2197",81,401,18,"#152018",!0);let Tt=L.createLinearGradient(660,150,850,440);Tt.addColorStop(0,"#d4914b"),Tt.addColorStop(1,"#694324"),L.fillStyle=Tt,L.beginPath(),L.arc(789,282,125,0,7),L.fill(),L.strokeStyle="#f2c99b",L.lineWidth=2,L.beginPath(),L.ellipse(789,282,145,39,-.45,0,7),L.stroke();for(let vt=0;vt<3;vt++)y(L,55+vt*310,481,285,110,8,"#263027"),C(L,["Seu neg\xF3cio","Sua hist\xF3ria","Seu pr\xF3ximo passo"][vt],75+vt*310,520,18,"#e5deca",!0),F(L,75+vt*310,545,185,"#7c785e"),F(L,75+vt*310,561,140,"#535d4b")}else if(k==="dashboard"){y(L,0,0,st,xt,12,"#e8e2d4"),y(L,0,0,125,xt,12,"#1d291f"),C(L,"opera\xE7\xE3o",18,40,21,"#f0e8d5",!0),["Vis\xE3o geral","Clientes","Pedidos","Relat\xF3rios"].forEach((Tt,vt)=>{vt||y(L,11,72,103,30,4,"#d58a43"),C(L,Tt,23,93+vt*53,13,vt?"#aab29d":"#122015",!vt)}),C(L,"A rotina, conectada.",151,44,25,"#202b20",!0),["CLIENTES","PEDIDOS","EQUIPE"].forEach((Tt,vt)=>{y(L,150+vt*158,68,145,68,6,"#d6d4c3"),C(L,Tt,164+vt*158,91,10,"#75745e"),C(L,["Organizados","Em dia","No mesmo fluxo"][vt],164+vt*158,117,14,"#293226",!0)}),C(L,"PEDIDOS EM ANDAMENTO",153,170,11,"#686b55");for(let Tt=0;Tt<4;Tt++){let vt=204+Tt*43;C(L,["Pedido recebido","Dados conferidos","Em prepara\xE7\xE3o","Pronto para seguir"][Tt],153,vt,15,"#343c2e"),y(L,486,vt-17,121,24,4,Tt===3?"#c99155":"#d8d5c6"),C(L,["Recebido","Conferido","Em andamento","Conclu\xEDdo"][Tt],498,vt,10,"#5c492f"),F(L,153,vt+14,454,"#c8c6b5")}}else C(L,"dev.abraao / SOLU\xC7\xD5ES",34,42,11,"#b6a480"),F(L,34,63,st-68,"#605c46"),C(L,D,34,128,k==="module"?D.length>18?35:52:D.length>24?24:30,"#f1e7d2",!0),C(L,B,34,169,16,"#a8b19c"),k==="code"?["quando uma mensagem chegar","  \u2192 conferir os dados","  \u2192 registrar o pedido","  \u2192 enviar a confirma\xE7\xE3o"].forEach((Tt,vt)=>C(L,Tt,35,218+vt*30,16,vt===3?"#f0a05a":"#a7b99d")):k==="answer"?(y(L,32,200,st-64,128,7,"#29392a"),C(L,"PR\xD3XIMO PASSO",49,229,11,"#e5a15e"),C(L,"Organizar a informa\xE7\xE3o.",49,267,23,"#f0e6ce",!0),C(L,"A decis\xE3o continua com voc\xEA.",49,300,15,"#acb89b")):k==="module"?[0,1,2].forEach(Tt=>{y(L,33,204+Tt*43,st-66,31,5,Tt===2?"#b97936":"#304330"),C(L,["CONTEXTO","FLUXO","PRONTO PARA SEGUIR"][Tt],49,225+Tt*43,12,Tt===2?"#fff1d3":"#bfc6ae")}):(y(L,33,207,st-66,89,7,"#283a2b"),C(L,"Informa\xE7\xE3o conectada",50,243,20,"#dcdcc4",!0),C(L,"Tudo segue no mesmo caminho.",50,274,15,"#a6b79b"),L.fillStyle="#e99546",L.fillRect(34,xt-29,st-68,3));let At=new Ge(q);return At.colorSpace=Te,At.anisotropy=c?1:4,o.add(At),At}function V(k,D,B,q,L,st){let xt=new Kt;st.add(xt);let At=w(k+.1,D+.1,.1,f,xt);At.renderOrder=5;let Tt=w(k+.045,D+.045,.04,g,xt);Tt.position.z=.065,Tt.renderOrder=6;let vt=u({color:"#ffffff",map:z(B,q,L),toneMapped:!1},!0),kt=new Nt(v,vt);kt.scale.set(k,D,1),kt.position.z=.092,kt.renderOrder=8,xt.add(kt);let H=w(.45,.025,.035,m,xt);return H.position.set(-k/2+.36,D/2+.07,.03),H.renderOrder=9,xt}function K(k,D,B,q=2.12){return V(q,q*.59375,"module",k,D,B)}function N(k,D,B,q=.6){let L=new I(...k),st=new I(...D),xt=L.clone().lerp(st,.5);xt.z+=q,xt.y+=.24;let At=new ir(L,xt,st),Tt=new Nt(h(new fi(At,c?12:24,.018,c?3:5,!1)),_);Tt.renderOrder=2,B.add(Tt);let vt=new Nt(x,m);return vt.scale.setScalar(.065),B.add(vt),{mesh:Tt,path:At,packet:vt}}function nt(k){let D=new Kt;D.position.x=k*14,n.add(D);let B=w(9,.07,5,g,D);B.position.set(0,-1.75,-.1),B.renderOrder=-10,w(8.3,.012,.035,p,D).position.set(0,-1.7,2.2);let L=T(2.9,D,p);L.rotation.x=-Math.PI/2,L.position.y=-1.69,L.renderOrder=-5;let st=new xe(S,f,c?12:24);D.add(st);for(let At=0;At<st.count;At++){let Tt=At/st.count*Math.PI*2;M(st,At,Math.cos(Tt)*3.02,-1.69,Math.sin(Tt)*2.1,.035,.018,.1)}let xt={g:D,items:[],wires:[],rings:[L]};return a.push(xt),xt}function G(k,D,B,q,L,st=0,xt=0,At=0){return D.userData.pose={x:B,y:q,z:L,order:st,rx:xt,ry:At},k.items.push(D),D}{let k=nt(0),D=V(5.55,3.47,"main","","",k.g);G(k,D,-.35,.15,-.35,0,0,.08);let B=V(1.05,2.1,"module","Seu neg\xF3cio","Feito para conectar.",k.g);G(k,B,2.35,-.56,1.1,2,-.03,-.18);let q=K("PRESEN\xC7A","Um caminho claro para o cliente.",k.g,2.25);G(k,q,-2.2,1.58,.95,1,.02,.13);let L=N([1.5,-1.5,.1],[2.35,-.7,1],k.g,.2);k.wires.push(L)}{let k=nt(1),D=V(5.65,3.36,"dashboard","","",k.g);G(k,D,0,.2,-.2,0,0,-.08);let B=K("PEDIDO ORGANIZADO","Do atendimento \xE0 opera\xE7\xE3o.",k.g,2.5);G(k,B,-1.95,-.63,1.25,1,.05,.15);let q=K("EQUIPE CONECTADA","A mesma informa\xE7\xE3o para todos.",k.g,2.35);G(k,q,2.2,1.28,.65,2,-.02,-.15),k.wires.push(N([-2,-.9,1.1],[1.3,-1.1,.15],k.g,.35))}{let k=nt(2),D=[[-2.35,.85,-.35],[-.6,1.15,-.85],[1.6,.55,-.25],[2.15,-1,1.15]];["MENSAGEM","CONFERIR","REGISTRAR","CONFIRMAR"].forEach((q,L)=>{let st=K(q,["O cliente inicia.","O contexto \xE9 verificado.","O pedido encontra seu lugar.","A resposta chega ao cliente."][L],k.g,1.85);G(k,st,...D[L],L,.02,(L-1.5)*-.09),L&&k.wires.push(N(D[L-1],D[L],k.g,.7))});let B=V(2.75,1.64,"code","UMA REGRA. UM CAMINHO.","O trabalho segue entre as etapas.",k.g);G(k,B,-1.5,-.95,1.3,2,.03,.18)}{let k=nt(3),D=new Nt(h(new sr(.68,c?0:1)),_);k.g.add(D),G(k,D,0,.15,.1,0);for(let L=0;L<3;L++){let st=T(1.05+L*.22,k.g,L===1?m:p);st.rotation.set(.4+L*.8,.5+L*.6,.1),k.rings.push(st)}let B=[[-2.1,.9,-.15],[1.8,1.22,-.65],[-2.05,-.95,.85]];["DOCUMENTOS","HIST\xD3RICO","SEU PROCESSO"].forEach((L,st)=>{let xt=K(L,"Informa\xE7\xE3o com o contexto certo.",k.g,1.75);G(k,xt,...B[st],st,.02,st===1?-.15:.16),k.wires.push(N(B[st],[0,.15,.1],k.g,.5))});let q=V(2.85,1.69,"answer","INFORMA\xC7\xC3O QUE AJUDA A AGIR","Uma resposta nasce do contexto.",k.g);G(k,q,1.65,-.85,1.1,3,0,-.14)}{let k=nt(4),D=new Kt;k.g.add(D),G(k,D,0,0,.1,0),w(1.2,1.75,.65,d,D),w(1.29,1.84,.12,f,D).position.z=-.27,K("CONECTAR","A informa\xE7\xE3o continua.",D,1.6).position.set(0,0,.43);for(let st=0;st<5;st++)w(.045,.13,.03,m,D).position.set(-.43+st*.215,-1.02,.36);let q=[[-2.5,1,-.65],[.15,1.8,-.85],[2.6,.95,-.45],[-2.5,-.9,.9],[.15,-1.45,1.2],[2.55,-.85,1]];["ATENDIMENTO","CLIENTES","VENDAS","FINANCEIRO","PEDIDOS","ESTOQUE"].forEach((st,xt)=>{let At=K(st,"Dados no mesmo fluxo.",k.g,1.62);G(k,At,...q[xt],1+xt*.2,0,(xt%3-1)*-.16),k.wires.push(N([0,.05,.28],q[xt],k.g,.7))});let L=T(2.25,k.g,p);L.rotation.x=1.1,L.position.set(0,-.1,0),k.rings.push(L)}{let k=nt(5);w(5.6,3.5,.1,d,k.g).position.set(0,.15,-.55);let B=[[-1.73,.64,0],[.2,.64,.1],[2.02,.64,.05],[-1.35,-.83,.55],[1.25,-.83,.65]];["ATENDIMENTO","OPERA\xC7\xC3O","AUTOMA\xC7\xC3O","INFORMA\xC7\xC3O","EVOLU\xC7\xC3O"].forEach((L,st)=>{let xt=st<3?1.65:2.35,At=K(L,"Constru\xEDdo para o seu cen\xE1rio.",k.g,xt);G(k,At,...B[st],st*.6,0,(st-2)*.025)});let q=K("SEU NEG\xD3CIO","Cada parte tem um motivo.",k.g,2.3);G(k,q,.75,1.7,1.05,3,-.04,-.13);for(let L=0;L<4;L++)k.wires.push(N(B[L],B[L+1],k.g,.15))}let lt=new xe(x,p,c?18:40);n.add(lt);let Q=new I,dt=0;n.traverse(k=>{k.isMesh&&dt++}),l.dataset.cinemaMeshes=dt,a.forEach(k=>k.rings.forEach(D=>D.userData.rest=D.rotation.toArray().slice(0,3)));function St(k,D,B){let q=bd(k),L=innerWidth<=700,st=B.aspect,xt=new I(q.x,.1,.05),Tt=Math.max(6.25,(L?8.5:8.1)/st)*(1-(1-q.zoom)*.7)/(2*Math.tan(He.degToRad(B.fov/2))),vt=q.yaw*(L?.7:1);B.position.set(Math.sin(vt)*Tt,1.25+Tt*.12,Math.cos(vt)*Tt).add(xt),B.lookAt(xt),B.updateProjectionMatrix(),a.forEach((kt,H)=>{if(kt.g.visible=Math.abs(H-q.focus)<1.06,!kt.g.visible)return;let Qt=H===q.index?q.local:H>q.index?0:1,Vt=An(.025,.43,Qt),Ft=An(.25,.69,Qt);kt.items.forEach((Rt,Zt)=>{let Pt=Rt.userData.pose,P=An(.02+Pt.order*.045,.43+Pt.order*.045,Qt),E=1-P;Rt.position.set(Pt.x+E*(Zt%2?2.3:-2.3),Pt.y+E*(1.45+Pt.order*.2),Pt.z-E*(2.6+Pt.order*.3)),Rt.rotation.set(Pt.rx+E*.18,Pt.ry+E*(Zt%2?.5:-.5),E*(Zt%2?.09:-.09)),Rt.scale.setScalar(.76+P*.24),H===3&&Zt===0&&(Rt.rotation.y=D*12e-5,Rt.rotation.z=D*8e-5)}),kt.wires.forEach((Rt,Zt)=>{Rt.mesh.scale.setScalar(Math.max(.001,Ft)),Rt.mesh.visible=Ft>.02,Rt.packet.visible=Ft>.7,Rt.path.getPoint((D*18e-5+Zt*.17)%1,Q),Rt.packet.position.copy(Q),Rt.packet.scale.setScalar(.045+q.resolve*.025)}),kt.rings.forEach((Rt,Zt)=>{if(Zt){let Pt=Rt.userData.rest;Rt.rotation.set(Pt[0],Pt[1]+D*4e-5,Pt[2]+D*6e-5)}})});for(let kt=0;kt<lt.count;kt++){let H=q.x+Math.sin(kt*23.4)*5.5,Qt=Math.sin(kt*5.1+D*1e-4)*2.4,Vt=Math.cos(kt*6.8)*3.8-1;M(lt,kt,H,Qt,Vt,.012,.012,.012)}return lt.instanceMatrix.needsUpdate=!0,l.dataset.rendered="true",l.dataset.cameraShot=q.index,l.dataset.cameraTravel=q.travel.toFixed(3),q}return{group:n,update:St,dispose(){s.remove(n),n.traverse(k=>{k.isInstancedMesh&&k.dispose()}),i.forEach(k=>k.dispose()),r.forEach(k=>k.dispose()),o.forEach(k=>k.dispose())}}}var wd=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0)),fs=s=>{let t=wd(s);return t*t*(3-2*t)},Yr=(s,t,e)=>fs((s-t)/(e-t));function Td(s,t=0){let e=wd(s),n=Math.max(0,Number.isFinite(t)?t:0)*.001,i=[[-.55,.22,1.06],[-.18,.65,.94],[.24,.28,.89],[.53,.48,1.02],[.6,.45,1.03]],r=Math.min(3,Math.floor(e*4)),o=e===1?1:e*4-r,a=fs(o),c=i[r].map((l,h)=>l+(i[r+1][h]-l)*a);return{p:e,t:n,index:r,local:o,organize:Yr(e,.08,.38),connect:Yr(e,.28,.59),operate:Yr(e,.49,.73),evolve:Yr(e,.7,.94),yaw:c[0],elevation:c[1],zoom:c[2],pulse:n*.17%1,drift:Math.sin(n*.5)*.045,copyOpacity:1-.75*Yr(o,.9,1)*(r<3?1:0)}}function Ad({scene:s,software:t=!1,quality:e="medium"}){let n=new Kt;n.visible=!1,s.add(n);let i=document.querySelector(".result-world"),r=t||e==="low",o=new Set,a=new Set,c=new Set,l=O=>(o.add(O),O),h=(O,$=!1)=>{let Et=$?new Ie(O):new Se({roughness:.35,metalness:.62,...O});return a.add(Et),Et},u=h({color:"#2a3e37"}),d=h({color:"#819a82",metalness:.8}),f=h({color:"#101e1b"}),g=h({color:"#d08843",roughness:.25,metalness:.72}),_=h({color:"#ffc27a",toneMapped:!1},!0),m=h({color:"#a4cbb3",toneMapped:!1},!0),p=h({color:"#d38f4d",transparent:!0,opacity:.6,toneMapped:!1},!0),S=h({color:"#8daf9a",transparent:!0,opacity:.16,toneMapped:!1,depthWrite:!1},!0),v=l(r?new pe(1,1,1):new We(1,1,1,2,.045)),x=l(new Ue(1,1,r?3:9,r?2:5)),A=l(new Zn(1,r?6:10,r?4:7)),b=l(new Ni(1,.013,r?3:5,r?44:80)),w=new he,T=new I,M=new I(0,1,0);function y(O,$,Et,It,at,wt=0,zt=0,Jt=0,ue=0){let Ht=new Nt(v,It);return Ht.scale.set(O,$,Et),Ht.position.set(wt,zt,Jt),Ht.renderOrder=ue,at.add(Ht),Ht}function C(O,$,Et,It=0,at=0,wt=0){let zt=new Nt(b,$);return zt.scale.setScalar(O),zt.position.set(It,at,wt),Et.add(zt),zt}function F(O,$,Et,It,at=18,wt="#dbdfc9",zt=!1){O.font=`${zt?700:400} ${at}px Arial`,O.fillStyle=wt,O.fillText($,Et,It)}function z(O,$,Et,It,at,wt,zt){O.fillStyle=zt,O.beginPath(),O.roundRect($,Et,It,at,wt),O.fill()}function V(O,$,Et=[]){let It=document.createElement("canvas");It.width=O==="dashboard"?1024:512,It.height=O==="dashboard"?640:340;let at=It.getContext("2d"),wt=It.width,zt=It.height;if(z(at,0,0,wt,zt,14,O==="dashboard"?"#e4e0d1":"#152b25"),O==="dashboard"){z(at,0,0,wt,65,12,"#243e33"),F(at,"seu.neg\xF3cio",30,43,27,"#efe4c9",!0),F(at,"OPERA\xC7\xC3O CONECTADA",690,41,16,"#b7c5a7"),F(at,"Uma vis\xE3o. O mesmo caminho.",35,118,32,"#253a2b",!0),F(at,"Do primeiro contato \xE0 pr\xF3xima entrega.",36,152,19,"#7a8069"),["RECEBER","PREPARAR","ENTREGAR"].forEach((Ht,ot)=>{let Lt=34+ot*325;z(at,Lt,187,306,205,9,"#d3d6c1"),z(at,Lt+17,204,272,30,5,ot===2?"#bf8a4e":"#bfc8ad"),F(at,Ht,Lt+30,225,14,"#31452c",!0),F(at,["Pedido recebido","Equipe em a\xE7\xE3o","Pronto para seguir"][ot],Lt+18,275,20,"#253c2a",!0),F(at,["Cliente e contexto","Informa\xE7\xE3o dispon\xEDvel","Atualiza\xE7\xE3o registrada"][ot],Lt+18,307,15,"#6a795e"),z(at,Lt+18,343,270,4,2,"#bac3a7"),z(at,Lt+18,343,270*(ot===0?1:ot===1?.7:.45),4,2,"#b47d40")}),F(at,"CLAREZA PARA O PR\xD3XIMO PASSO",37,440,15,"#6b795e",!0),at.strokeStyle="#c4c9b3",at.lineWidth=1;for(let Ht=0;Ht<3;Ht++)at.beginPath(),at.moveTo(36,470+Ht*55),at.lineTo(640,470+Ht*55),at.stroke();at.strokeStyle="#aa6c2a",at.lineWidth=4,at.beginPath(),[[40,558],[130,540],[210,548],[310,502],[420,509],[520,475],[635,455]].forEach(([Ht,ot],Lt)=>Lt?at.lineTo(Ht,ot):at.moveTo(Ht,ot)),at.stroke(),z(at,690,428,300,175,9,"#294332"),F(at,"EQUIPE",715,466,14,"#d8b576"),F(at,"Contexto",715,511,27,"#e3e0c8",!0),F(at,"compartilhado.",715,547,27,"#e3e0c8",!0),F(at,"Cada parte sabe o pr\xF3ximo passo.",715,577,12,"#acbc9d")}else F(at,"SEU NEG\xD3CIO / "+$,26,38,12,"#bba97d",!0),at.fillStyle="#6f805f",at.fillRect(26,55,wt-52,1),F(at,$,26,108,34,"#f0e4c9",!0),F(at,Et[0]||"A informa\xE7\xE3o encontra dire\xE7\xE3o.",26,145,17,"#a4b89c"),Et.slice(1,4).forEach((ue,Ht)=>{let ot=181+Ht*47;z(at,24,ot,wt-48,36,5,Ht===2?"#73572e":"#2a4534"),at.fillStyle=Ht===2?"#e8b673":"#8da37b",at.beginPath(),at.arc(42,ot+18,3,0,7),at.fill(),F(at,ue,56,ot+24,15,Ht===2?"#f2deb6":"#c1ceb0")});let Jt=new Ge(It);return Jt.colorSpace=Te,Jt.anisotropy=r?1:4,c.add(Jt),Jt}function K(O,$,Et,It,at,wt){let zt=new Kt;wt.add(zt),y(O+.12,$+.12,.12,d,zt,0,0,0,5),y(O+.055,$+.055,.045,f,zt,0,0,.075,6);let Jt=new Nt(x,h({map:V(Et,It,at),color:"#fff",toneMapped:!1},!0));return Jt.scale.set(O,$,1),Jt.position.z=.108,Jt.renderOrder=8,zt.add(Jt),y(.32,.023,.025,_,zt,-O/2+.24,$/2+.085,.08,9),zt}let N=new Kt;n.add(N);let nt=[];for(let O=0;O<9;O++){let $=new Kt;N.add($);let Et=O%3,It=Math.floor(O/3);y(2.24,.17,1.5,u,$,0,0,0,-10),y(2.26,.027,1.51,g,$,0,-.11,0,-10),y(1.88,.014,.018,p,$,0,.095,.59,-8),y(.018,.015,1.18,S,$,-.96,.095,0,-8);let at=y(.12,.035,.07,_,$,.84,.08,.61,-7);nt.push({g:$,x:(Et-1)*2.34,y:-1.72,z:(It-1)*1.6,led:at})}let G=[];[["CLIENTES",["Um s\xF3 hist\xF3rico.","Contato","Contexto","Pr\xF3ximo passo"],[-2.78,.6,.2],[-4.1,1.65,1.4]],["PEDIDOS",["O caminho da entrega.","Receber","Preparar","Entregar"],[2.78,.63,.1],[4.2,-.4,1.8]],["ESTOQUE",["A opera\xE7\xE3o acompanha.","Entrada","Reserva","Sa\xEDda"],[-2.65,-.85,1.5],[-3.25,-1.25,3]],["FINANCEIRO",["O registro continua.","Registrar","Conferir","Acompanhar"],[2.65,-.82,1.45],[3.75,2.1,-.8]]].forEach(([O,$,Et,It],at)=>{let wt=new Kt;n.add(wt);let zt=K(1.87,1.24,"station",O,$,wt);zt.rotation.y=at%2?-.1:.1,y(1.92,.08,.7,f,wt,0,-.73,-.06,-3),y(1.92,.025,.045,p,wt,0,-.68,.3,2);let Jt=C(.12,_,wt,0,-.78,.34);Jt.rotation.x=Math.PI/2;let ue=y(.12,.55,.12,d,wt,0,-1,-.17,-4),Ht=[];for(let Lt=0;Lt<3;Lt++)Ht.push(y(.11,.018,.035,m,wt,-.55+Lt*.21,-.69,.26,4));let ot=y(1.68,.009,.007,p,zt,0,-.48,.119,9);G.push({g:wt,panel:zt,pedestal:ue,port:Jt,beacons:Ht,scan:ot,pose:new I(...Et),scatter:new I(...It)})});let Q=new Kt;n.add(Q);let dt=K(3.5,2.18,"dashboard","",[],Q);dt.position.set(0,.55,-.15);let St=y(.14,.9,.18,g,Q,0,-.98,-.2,-4),k=y(3.7,.13,1.45,u,Q,0,-1.4,.12,-5),D=new xe(v,d,r?12:24);Q.add(D),D.renderOrder=3;for(let O=0;O<D.count;O++)w.position.set(-1.52+O%8*.43,-1.31,-.24+Math.floor(O/8)*.29),w.rotation.set(0,0,0),w.scale.set(.28,.025,.14),w.updateMatrix(),D.setMatrixAt(O,w.matrix);let B=[];for(let O=0;O<3;O++){let $=C(.56+O*.17,O===1?p:S,Q,0,-.89,.48);$.rotation.x=Math.PI/2,$.renderOrder=-1,B.push($)}let q=new Nt(l(new Ko(.47,.47,.1,r?16:32)),g);q.position.set(0,-.87,.48),Q.add(q);let L=new Kt;n.add(L);let st=[];for(let O=0;O<3;O++){let $=C(2.65+O*.28,O===0?p:S,L,0,-1.65-O*.13,0);$.rotation.x=-Math.PI/2,$.scale.y*=.69,$.renderOrder=-12,st.push($)}let xt=new xe(v,d,16);xt.renderOrder=-11,L.add(xt);for(let O=0;O<16;O++){let $=O/16*Math.PI*2;w.position.set(Math.cos($)*3,-1.99,Math.sin($)*1.9),w.rotation.set(0,-$,0),w.scale.set(.055,.45,.055),w.updateMatrix(),xt.setMatrixAt(O,w.matrix)}let At=new xe(v,p,r?32:64);At.renderOrder=-12,L.add(At);let Tt=r?16:28,vt=r?3:5,kt=[];function H(O,$,Et){let It=new Float32Array((Tt+1)*(vt+1)*3),at=[];for(let ue=0;ue<Tt;ue++)for(let Ht=0;Ht<vt;Ht++){let ot=ue*(vt+1)+Ht,Lt=ot+vt+1;at.push(ot,Lt,ot+1,Lt,Lt+1,ot+1)}let wt=l(new je);wt.setAttribute("position",new Ve(It,3)),wt.setIndex(at);let zt=new Nt(wt,O%3===0?m:p);zt.frustumCulled=!1,zt.renderOrder=2,n.add(zt);let Jt={mesh:zt,geometry:wt,positions:It,a:new I,b:new I,c:new I,from:$,to:Et,index:O};return kt.push(Jt),Jt}for(let O=0;O<4;O++)H(O,O,-1);for(let O=0;O<4;O++)H(O+4,O,(O+1)%4);let Qt=new I,Vt=new I,Ft=new I,Rt=new I;function Zt(O,$,Et){let It=1-$;return Et.copy(O.a).multiplyScalar(It*It).addScaledVector(O.c,2*It*$).addScaledVector(O.b,$*$)}function Pt(O,$,Et){O.a.copy(G[O.from].g.position),O.a.y-=.73,O.a.z+=.15,O.to===-1?O.b.set(0,-1+Q.position.y,.5):(O.b.copy(G[O.to].g.position),O.b.y-=.73,O.b.z+=.15),O.c.copy(O.a).lerp(O.b,.5),O.c.y-=.35,O.c.z+=.35+Math.sin($*.42+O.index)*.18;for(let It=0;It<=Tt;It++){let at=It/Tt;Zt(O,at,T),Qt.copy(O.c).sub(O.a).multiplyScalar(2*(1-at)).addScaledVector(Rt.copy(O.b).sub(O.c),2*at).normalize(),Vt.crossVectors(Qt,M),Vt.lengthSq()<.01?Vt.set(1,0,0):Vt.normalize(),Ft.crossVectors(Qt,Vt).normalize();for(let wt=0;wt<=vt;wt++){let zt=wt/vt*Math.PI*2,Jt=(It*(vt+1)+wt)*3,ue=.012;O.positions[Jt]=T.x+ue*(Vt.x*Math.cos(zt)+Ft.x*Math.sin(zt)),O.positions[Jt+1]=T.y+ue*(Vt.y*Math.cos(zt)+Ft.y*Math.sin(zt)),O.positions[Jt+2]=T.z+ue*(Vt.z*Math.cos(zt)+Ft.z*Math.sin(zt))}}O.geometry.attributes.position.needsUpdate=!0,O.geometry.setDrawRange(0,Math.floor(Et*Tt)*vt*6),O.mesh.visible=Et>.005}let P=new xe(A,_,kt.length*4);P.frustumCulled=!1,P.instanceMatrix.setUsage(Hn),P.renderOrder=4,n.add(P);let E=[];for(let O=0;O<4;O++){let $=new Kt;n.add($),y(.45,.29,.025,f,$,0,0,0,5),y(.42,.018,.009,_,$,0,.116,.017,6);for(let Et=0;Et<3;Et++)y(Et===2?.17:.32,.012,.009,Et===2?_:m,$,Et===2?-.075:0,.052-Et*.052,.017,6);E.push($)}let Z=new Kt;n.add(Z);let yt=[],bt=[.5,.85,1.25,1.75,2.3,2.85,3.45];for(let O=0;O<7;O++){let $=new Kt;Z.add($);let Et=y(.43,1,.48,O%3===0?g:u,$,0,.5,0,-3),It=y(.46,.035,.51,_,$,0,1.02,0,0);yt.push({g:$,column:Et,cap:It,height:bt[O],x:-2.45+O*.81})}let ht=yt.map(O=>new I(O.x,-1.58+O.height+.14,-2)),gt=new ls(ht),_t=new Nt(l(new fi(gt,r?32:72,.023,r?3:5,!1)),_);_t.renderOrder=2,Z.add(_t);let Mt=K(2.7,.89,"station","PR\xD3XIMO PASSO",["Clareza para continuar.","Ajustar \xB7 conectar \xB7 evoluir"],Z);Mt.position.set(.3,2.2,-2.4),Mt.scale.setScalar(.8);let Bt=new Nt(A,_);Bt.scale.setScalar(.07),Z.add(Bt);let rt=new xe(v,g,r?18:36);rt.frustumCulled=!1,rt.instanceMatrix.setUsage(Hn),n.add(rt);let ut=new xe(A,S,r?26:64);ut.frustumCulled=!1,n.add(ut);let Dt=document.createElement("canvas");Dt.width=Dt.height=128;let ct=Dt.getContext("2d"),mt=ct.createRadialGradient(64,64,1,64,64,64);mt.addColorStop(0,"#eab46d38"),mt.addColorStop(.3,"#72b59a16"),mt.addColorStop(1,"#72b59a00"),ct.fillStyle=mt,ct.fillRect(0,0,128,128);let tt=new Ge(Dt);c.add(tt);let ft=new Nt(l(new Ue(10,8)),h({map:tt,color:"#fff",transparent:!0,opacity:.65,depthWrite:!1,toneMapped:!1},!0));ft.renderOrder=-30,n.add(ft);let pt=new I,U=new I;function j(O,$,Et,It,at,wt,zt,Jt,ue=0,Ht=0,ot=0){w.position.set(Et,It,at),w.rotation.set(ue,Ht,ot),w.scale.set(wt,zt,Jt),w.updateMatrix(),O.setMatrixAt($,w.matrix)}function Y(O,$,Et,It={}){let at=Td(O,$),{t:wt}=at,zt=It.mobile??Et.aspect<1.2;n.rotation.set(0,0,0),n.position.set(0,0,0),nt.forEach((ot,Lt)=>{let ye=fs((at.organize-Lt*.025)/.8),ae=1-ye;ot.g.position.set(ot.x+Math.sin(Lt*3.3)*ae*2.6,ot.y-ae*(1.8+Lt*.13),ot.z+Math.cos(Lt*2.1)*ae*2.4),ot.g.rotation.set(ae*(Lt%2?.65:-.65),ae*(Lt-4)*.26,0),ot.g.scale.setScalar(.45+.55*ye),ot.led.visible=at.connect>.1}),G.forEach((ot,Lt)=>{let ye=fs((at.organize-Lt*.035)/.84),ae=1-ye,mn=Math.sin(ye*Math.PI);ot.g.position.lerpVectors(ot.scatter,ot.pose,ye),ot.g.position.y+=Math.sin(wt*.57+Lt)*(.12*ae+.025)+mn*(Lt%2?.7:-.5),ot.g.position.z+=mn*.8,ot.g.rotation.set(ae*(Lt%2?.26:-.2),ae*(Lt%2?-.42:.42),ae*(Lt%2?.12:-.1)),ot.panel.rotation.x=-.04+ae*.14,ot.pedestal.scale.y=Math.max(.01,at.organize),ot.port.rotation.z=wt*.5+Lt,ot.beacons.forEach((Vn,vi)=>Vn.scale.y=.018*(.5+.5*Math.sin(wt*2.3+Lt+vi))),ot.scan.position.y=-.5+(wt*.18+Lt*.25)%1*1,ot.scan.visible=at.connect>.2}),Q.position.set(0,-2.7*(1-at.organize),-.15*(1-at.operate)),Q.scale.setScalar(.3+.7*at.organize),Q.visible=at.organize>.005,dt.position.y=.55+.7*(1-at.operate),dt.rotation.x=-.22*(1-at.operate),dt.rotation.y=Math.sin(wt*.27)*.012,k.position.y=-1.4-.75*(1-at.operate),St.scale.y=.9+.5*(1-at.operate),B.forEach((ot,Lt)=>{ot.rotation.z=wt*(Lt%2?-.32:.22)+Lt*.7,ot.scale.setScalar((.56+Lt*.17)*(1+Math.sin(wt*.8+Lt)*.04))}),q.rotation.y=wt*.3,L.position.y=-1.2*(1-at.organize),L.scale.setScalar(.8+.2*at.organize),L.visible=at.organize>.01,st.forEach((ot,Lt)=>ot.rotation.z=wt*(Lt%2?.025:-.035));for(let ot=0;ot<At.count;ot++){let Lt=ot/At.count*Math.PI*2+wt*.025;j(At,ot,Math.cos(Lt)*3.62,-1.8,Math.sin(Lt)*2.4,.028,.018,ot%4===0?.19:.075,0,-Lt,0)}At.instanceMatrix.needsUpdate=!0,kt.forEach((ot,Lt)=>{let ye=fs((at.connect-Lt*.028)/.78);Pt(ot,wt,ye);for(let ae=0;ae<4;ae++){let mn=(wt*(.15+Lt*.006)-ae*.035+Lt*.107+1)%1;Zt(ot,mn,T);let Vn=ye*(at.operate*.6+.4)*(ae===0?.066:.038-ae*.006);j(P,Lt*4+ae,T.x,T.y,T.z,Vn,Vn,Vn)}}),P.instanceMatrix.needsUpdate=!0,P.visible=at.connect>.001,E.forEach((ot,Lt)=>{let ye=(wt*.12+Lt*.23)%1;Zt(kt[Lt],ye,ot.position),ot.position.y+=.12,ot.scale.setScalar(at.operate*(.6+.4*Math.sin(ye*Math.PI))),ot.visible=at.operate>.005}),Z.visible=at.evolve>.001,Z.scale.setScalar(Math.max(.001,at.evolve)),yt.forEach((ot,Lt)=>{let ye=fs((at.evolve-Lt*.04)/.72),ae=Math.max(.02,ot.height*ye);ot.g.position.set(ot.x,-1.58,-2),ot.column.scale.y=ae,ot.column.position.y=ae/2,ot.cap.position.y=ae+.025}),_t.geometry.setDrawRange(0,Math.floor(at.evolve*(r?32:72))*(r?3:5)*6),gt.getPointAt(wt*.13%1,Bt.position),Mt.position.y=2.15+Math.sin(wt*.6)*.045;for(let ot=0;ot<rt.count;ot++){let Lt=ot*2.39996+wt*.035,ye=3.2+ot%4*.34,ae=1-at.organize,mn=Math.cos(Lt)*ye*(.5+ae*.8),Vn=-1.1+Math.sin(Lt)*.5+ae*(Math.cos(ot)*2.7),vi=Math.sin(Lt)*ye*.7,ws=.042+ot%3*.015;j(rt,ot,mn,Vn,vi,ws,ws*.38,ws,wt*.12+ot,wt*.16+ot,0)}rt.instanceMatrix.needsUpdate=!0;for(let ot=0;ot<ut.count;ot++){let Lt=ot*2.39996+wt*.014,ye=3.7+ot%7*.17;j(ut,ot,Math.cos(Lt)*ye,Math.sin(ot*4.7+wt*.12)*2.4,Math.sin(Lt)*2.7-1,.012,.012,.012)}ut.instanceMatrix.needsUpdate=!0;let Jt=at.yaw*(zt?.63:1)+Math.sin(wt*.13)*.018;pt.set(0,-.2+at.evolve*.26,0);let Ht=Math.max(zt?5.5:7.2,(zt?10.7:11.8)/Et.aspect)*at.zoom/(2*Math.tan(He.degToRad(Et.fov/2)));return U.set(Math.sin(Jt),at.elevation*(zt?.76:1),Math.cos(Jt)).normalize(),Et.position.copy(U).multiplyScalar(Ht).add(pt),Et.lookAt(pt),Et.updateProjectionMatrix(),Et.updateMatrixWorld(!0),E.forEach(ot=>ot.quaternion.copy(Et.quaternion)),ft.position.set(0,-.4,-3),ft.quaternion.copy(Et.quaternion),ft.scale.setScalar(.9+Math.sin(wt*.45)*.04),i.dataset.rendered="true",i.dataset.filmProgress=at.p.toFixed(4),i.dataset.motionTime=wt.toFixed(2),i.dataset.packetPhase=at.pulse.toFixed(4),i.dataset.cameraYaw=Jt.toFixed(4),at}let J=0;return n.traverse(O=>{O.isMesh&&J++}),i.dataset.resultMeshes=J,{group:n,update:Y,dispose(){s.remove(n),n.traverse(O=>{O.isInstancedMesh&&O.dispose()}),o.forEach(O=>O.dispose()),a.forEach(O=>O.dispose()),c.forEach(O=>O.dispose())}}}var dy=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0));function fy(s,t){let e=Math.max(0,Number.isFinite(t)?t:0)*.001,n=dy(s);return{t:e,p:n,breath:.5+.5*Math.sin(e*.82),yaw:e*.22+n*.7,orbit:.26*Math.sin(e*.15)+n*.55,lift:Math.sin(e*.72)*.13,phase:Math.floor((e/9+n*1.4)%3),active:Math.floor(e/3.8)%4}}function Rd({scene:s,software:t=!1,quality:e="medium"}){let n=new Kt;n.visible=!1,s.add(n);let i=t||e==="low",r=new Set,o=new Set,a=new Set,c=document.querySelector(".intelligence-world"),l=[...c.querySelectorAll("[data-reactor-label]")],h=document.querySelector("[data-reactor-phase]"),u=document.querySelector("[data-reactor-copy]"),d=gt=>(r.add(gt),gt),f=(gt,_t=!1)=>{let Mt=_t?new Ie(gt):new Se({roughness:.28,metalness:.65,...gt});return o.add(Mt),Mt},g=f({color:"#f68a27",roughness:.27,metalness:.64}),_=f({color:"#35413a",metalness:.8}),m=f({color:"#cbd9ca",roughness:.3,metalness:.72}),p=f({color:"#ffb85b",toneMapped:!1},!0),S=f({color:"#e9f4d9",toneMapped:!1},!0),v=f({color:"#d67d31",toneMapped:!1,transparent:!0,opacity:.68},!0),x=f({color:"#69a99f",toneMapped:!1,transparent:!0,opacity:.34},!0),A=f({color:"#af9a66",toneMapped:!1,transparent:!0,opacity:.19},!0),b=d(i?new pe(1,1,1):new We(1,1,1,2,.07)),w=d(new Zn(1,i?7:12,i?5:9)),T=d(new Ni(1,.009,i?3:5,i?44:80)),M=new he,y=new I,C=new I,F=new Kt;n.add(F);let z=i?3:4,V=z**3,K=new xe(b,g,V);K.frustumCulled=!1,K.instanceMatrix.setUsage(Hn),F.add(K);let N=new Nt(d(new sr(.4,i?0:1)),p);F.add(N);let nt=new Kt;F.add(nt);function G(gt,_t,Mt,Bt,rt){let ut=new I(...gt),Dt=new I(..._t),ct=Dt.clone().sub(ut),mt=new Nt(b,Bt);return mt.position.copy(ut).add(Dt).multiplyScalar(.5),mt.scale.set(Mt,ct.length(),Mt),mt.quaternion.setFromUnitVectors(new I(0,1,0),ct.normalize()),rt.add(mt),mt}let lt=[];for(let gt of[-1,1])for(let _t of[-1,1])for(let Mt of[-1,1])lt.push([gt*.85,_t*.85,Mt*.85]);for(let gt=0;gt<lt.length;gt++)for(let _t=gt+1;_t<lt.length;_t++)lt[gt].filter((Mt,Bt)=>Mt!==lt[_t][Bt]).length===1&&G(lt[gt],lt[_t],.012,v,nt);let Q=[];for(let gt=0;gt<5;gt++){let _t=new Nt(T,gt===1?v:gt===3?x:A),Mt=1.28+gt*.34;_t.scale.setScalar(Mt),n.add(_t),Q.push(_t)}let dt=Array.from({length:4},(gt,_t)=>{let Mt=new Kt;n.add(Mt);let Bt=new Nt(b,_t%2?m:g);Bt.scale.setScalar(.25),Mt.add(Bt);let rt=new Nt(T,_t%2?x:v);rt.scale.setScalar(.43),Mt.add(rt);let ut=new Nt(T,A);ut.scale.setScalar(.53),ut.rotation.x=Math.PI/2,Mt.add(ut);let Dt=new Nt(w,p);return Dt.scale.setScalar(.075),Mt.add(Dt),{g:Mt,cube:Bt,rim:rt,rim2:ut,nucleus:Dt,base:[-2.45,2.45,-2.15,2.35][_t],y:[1.25,.95,-1.25,-1.3][_t],z:[-.5,-.2,.65,.8][_t]}}),St=i?18:30,k=i?3:5;function D(gt){let _t=d(new je),Mt=new Float32Array((St+1)*(k+1)*3),Bt=[];for(let ut=0;ut<St;ut++)for(let Dt=0;Dt<k;Dt++){let ct=ut*(k+1)+Dt,mt=ct+k+1;Bt.push(ct,mt,ct+1,mt,mt+1,ct+1)}_t.setAttribute("position",new Ve(Mt,3)),_t.setIndex(Bt);let rt=new Nt(_t,gt%3===1?x:v);return rt.frustumCulled=!1,rt.renderOrder=-1,n.add(rt),{mesh:rt,positions:Mt,geometry:_t,a:new I,b:new I,c:new I,index:gt}}let B=Array.from({length:8},(gt,_t)=>D(_t)),q=new xe(w,p,B.length*4);q.frustumCulled=!1,q.instanceMatrix.setUsage(Hn),n.add(q);let L=new xe(w,A,i?62:128);L.frustumCulled=!1,L.instanceMatrix.setUsage(Hn),n.add(L);let st=new xe(b,v,i?32:64);st.frustumCulled=!1,n.add(st);let xt=document.createElement("canvas");xt.width=xt.height=128;let At=xt.getContext("2d"),Tt=At.createRadialGradient(64,64,0,64,64,64);Tt.addColorStop(0,"#ffb04b60"),Tt.addColorStop(.25,"#ec872620"),Tt.addColorStop(1,"#ec872600"),At.fillStyle=Tt,At.fillRect(0,0,128,128);let vt=new Ge(xt);a.add(vt);let kt=f({map:vt,color:"#ffffff",transparent:!0,depthWrite:!1,opacity:.75,toneMapped:!1},!0),H=new Nt(d(new Ue(5,5)),kt);H.renderOrder=-20,n.add(H);let Qt=new I,Vt=new I,Ft=new I,Rt=new I,Zt=new I(0,1,0);function Pt(gt,_t,Mt){let Bt=1-_t;return Mt.copy(gt.a).multiplyScalar(Bt*Bt).addScaledVector(gt.c,2*Bt*_t).addScaledVector(gt.b,_t*_t)}function P(gt,_t){let{a:Mt,b:Bt,c:rt,positions:ut}=gt;gt.index<4?(Mt.set(0,Math.sin(_t*.72)*.13,0),Bt.copy(dt[gt.index].g.position)):(Mt.copy(dt[gt.index-4].g.position),Bt.copy(dt[(gt.index-3)%4].g.position)),rt.copy(Mt).lerp(Bt,.5),rt.z+=Math.sin(_t*.41+gt.index*.9)*.72+(gt.index<4?.75:-.6),rt.y+=Math.sin(_t*.55+gt.index)*.38;for(let Dt=0;Dt<=St;Dt++){let ct=Dt/St;Pt(gt,ct,Qt),Vt.copy(rt).sub(Mt).multiplyScalar(2*(1-ct)).addScaledVector(y.copy(Bt).sub(rt),2*ct).normalize(),Ft.crossVectors(Vt,Zt),Ft.lengthSq()<.01?Ft.set(1,0,0):Ft.normalize(),Rt.crossVectors(Vt,Ft).normalize();for(let mt=0;mt<=k;mt++){let tt=mt/k*Math.PI*2,ft=(Dt*(k+1)+mt)*3,pt=.011;ut[ft]=Qt.x+pt*(Ft.x*Math.cos(tt)+Rt.x*Math.sin(tt)),ut[ft+1]=Qt.y+pt*(Ft.y*Math.cos(tt)+Rt.y*Math.sin(tt)),ut[ft+2]=Qt.z+pt*(Ft.z*Math.cos(tt)+Rt.z*Math.sin(tt))}}gt.geometry.attributes.position.needsUpdate=!0}function E(gt,_t,Mt,Bt,rt=0){M.position.copy(Mt),M.rotation.set(rt,rt*.7,0),M.scale.setScalar(Bt),M.updateMatrix(),gt.setMatrixAt(_t,M.matrix)}let Z=[["01 / CONTEXTO","A informa\xE7\xE3o encontra suas conex\xF5es."],["02 / INTELIG\xCANCIA","O contexto ajuda a enxergar o pr\xF3ximo passo."],["03 / A\xC7\xC3O","Atendimento e opera\xE7\xE3o seguem no mesmo fluxo."]],yt=-1;function bt(gt,_t,Mt,Bt={width:800,height:600}){let rt=fy(gt,_t),{t:ut}=rt;F.position.y=rt.lift,F.rotation.set(.18+Math.sin(ut*.27)*.12,rt.yaw,Math.sin(ut*.31)*.13),N.rotation.set(ut*.12,-ut*.18,ut*.08),N.scale.setScalar(.84+rt.breath*.23),nt.rotation.set(-ut*.06,ut*.04,.1),nt.scale.setScalar(1.03+rt.breath*.07);let Dt=.13+rt.breath*.29,ct=1.16/z;for(let pt=0;pt<V;pt++){let U=(pt%z-(z-1)/2)*ct,j=(Math.floor(pt/z)%z-(z-1)/2)*ct,Y=(Math.floor(pt/(z*z))-(z-1)/2)*ct;Qt.set(U,j,Y);let J=Qt.length()||1;Qt.multiplyScalar(1+Dt/J),Qt.y+=Math.sin(ut*1.1+pt*.7)*.015,E(K,pt,Qt,ct*.83,.035*Math.sin(ut*.6+pt))}K.instanceMatrix.needsUpdate=!0,Q.forEach((pt,U)=>{pt.position.y=rt.lift*.4,pt.rotation.set(.3+U*.46+Math.sin(ut*.15+U)*.12,.25+U*.52+ut*(U%2?.045:-.036),ut*(U%2?-.085:.055)+U*.62)}),dt.forEach((pt,U)=>{pt.g.position.set(pt.base+Math.sin(ut*.38+U*1.7)*.22,pt.y+Math.cos(ut*.46+U)*.22,pt.z+Math.sin(ut*.34+U*1.1)*.4),pt.cube.rotation.set(ut*(U%2?.25:-.22),ut*.35+U,.25+Math.sin(ut*.4+U)*.2),pt.rim.rotation.set(.2+Math.sin(ut*.3+U)*.35,ut*.18+U,ut*.12),pt.rim2.rotation.z=-ut*.12,pt.nucleus.position.set(Math.cos(ut*.7+U)*.36,Math.sin(ut*.7+U)*.36,.04)}),B.forEach(pt=>{P(pt,ut);for(let U=0;U<4;U++){let j=(ut*(.11+pt.index*.003)+U*.035+pt.index*.137)%1;Pt(pt,j,Qt),E(q,pt.index*4+U,Qt,U===0?.072:.044-U*.008)}}),q.instanceMatrix.needsUpdate=!0;for(let pt=0;pt<L.count;pt++){let U=pt*2.39996+ut*(pt%2?.024:-.019),j=1.4+pt%19*.12;Qt.set(Math.cos(U)*j,Math.sin(U)*j*.7,Math.sin(pt*5.1+ut*.09)*1.7-.7),E(L,pt,Qt,.012+pt%4*.003)}L.instanceMatrix.needsUpdate=!0;for(let pt=0;pt<st.count;pt++){let U=pt/st.count*Math.PI*2+ut*.1;Qt.set(Math.cos(U)*2.9,Math.sin(U)*2.9*.66,-.7),M.position.copy(Qt),M.rotation.set(.2,0,U),M.scale.set(.017,.065,.012),M.updateMatrix(),st.setMatrixAt(pt,M.matrix)}st.instanceMatrix.needsUpdate=!0;let mt=new I(0,.04,0),ft=Math.max(5.15,6.9/Mt.aspect)*(1-.055*Math.sin(ut*.21))/(2*Math.tan(He.degToRad(Mt.fov/2)));return Mt.position.set(Math.sin(rt.orbit)*ft,.62+Math.sin(ut*.17)*.18,Math.cos(rt.orbit)*ft).add(mt),Mt.lookAt(mt),Mt.updateProjectionMatrix(),Mt.updateMatrixWorld(!0),H.position.set(0,rt.lift*.4,-1.1),H.quaternion.copy(Mt.quaternion),H.scale.setScalar(.92+rt.breath*.1),s.updateMatrixWorld(!0),dt.forEach((pt,U)=>{C.copy(pt.g.position),C.y+=U<2?.52:-.48,C.project(Mt);let j=Math.max(.15,Math.min(.85,C.x*.5+.5))*Bt.width,Y=Math.max(.12,Math.min(.88,-C.y*.5+.5))*Bt.height;l[U]&&(l[U].style.transform=`translate3d(${j.toFixed(2)}px,${Y.toFixed(2)}px,0) translate(-50%,-50%)`,l[U].dataset.active=String(rt.active===U))}),rt.phase!==yt&&(h&&(h.textContent=Z[rt.phase][0]),u&&(u.textContent=Z[rt.phase][1]),yt=rt.phase),c.dataset.rendered="true",c.dataset.motionTime=ut.toFixed(2),c.dataset.coreYaw=rt.yaw.toFixed(3),c.dataset.packetPhase=(ut*.11%1).toFixed(3),rt}let ht=0;return n.traverse(gt=>{gt.isMesh&&ht++}),c.dataset.reactorMeshes=ht,{group:n,update:bt,dispose(){s.remove(n),n.traverse(gt=>{gt.isInstancedMesh&&gt.dispose()}),r.forEach(gt=>gt.dispose()),o.forEach(gt=>gt.dispose()),a.forEach(gt=>gt.dispose())}}}function Cd(s){let t=[...document.querySelectorAll("[data-scene-window]")].map(o=>({el:o,id:o.dataset.sceneWindow,section:o.closest("[data-chapter]")})),e=!0,n=null,i=()=>{e=!0},r=new ResizeObserver(i);return t.forEach(({el:o})=>r.observe(o)),addEventListener("scroll",i,{passive:!0}),addEventListener("resize",i,{passive:!0}),{read(){if(!e)return n;e=!1;let o=document.getElementById("header").offsetHeight,a=null,c=0;for(let S of t){let v=S.el.getBoundingClientRect(),x=Math.max(0,Math.min(innerHeight,v.bottom)-Math.max(o,v.top)),A=Math.max(0,Math.min(innerWidth,v.right)-Math.max(0,v.left));A*x>c&&(c=A*x,a={...S,rect:v})}if(!a||c<800)return s.style.visibility="hidden",n=null,null;let{rect:l,section:h,id:u}=a,d=h.getBoundingClientRect(),f=h.querySelector(".section-pin"),g=h.querySelector(".cinematic-intro")?.offsetHeight||0,_=f&&getComputedStyle(f).position==="sticky",m=Math.max(0,Math.min(1,_?(-d.top-g)/Math.max(1,d.height-g-f.offsetHeight):(innerHeight*.45-d.top)/Math.max(1,d.height)));s.parentElement!==a.el&&a.el.appendChild(s),Object.assign(s.style,{left:"0",top:"0",width:`${l.width}px`,height:`${l.height}px`});let p=u==="problema"&&!_?Math.max(0,Math.min(1,(innerHeight*.85-l.top)/(l.height+innerHeight*.35))):m;return n={id:u,progress:p,width:Math.round(l.width),height:Math.round(l.height),rect:l},s.dataset.scene=u,s.dataset.progress=p.toFixed(4),n},invalidate:i,dispose(){r.disconnect(),removeEventListener("scroll",i),removeEventListener("resize",i)}}}function mi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Fd(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fr={duration:.5,overwrite:!1,delay:0},uh,Ye,we,Cn=1e8,ge=1/Cn,th=Math.PI*2,py=th/4,my=0,Bd=Math.sqrt,gy=Math.cos,_y=Math.sin,Be=function(t){return typeof t=="string"},Ce=function(t){return typeof t=="function"},_i=function(t){return typeof t=="number"},xa=function(t){return typeof t>"u"},Qn=function(t){return typeof t=="object"},dn=function(t){return t!==!1},dh=function(){return typeof window<"u"},la=function(t){return Ce(t)||Be(t)},zd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tn=Array.isArray,eh=/(?:-?\.?\d|\.)+/gi,fh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ph=/[+-]=-?[.\d]+/,kd=/[^,'"\[\]\s]+/gi,xy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ae,$n,nh,mh,Mn={},fa={},Hd,Vd=function(t){return(fa=pr(t,Mn))&&en},ya=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},jr=function(t,e){return!e&&console.warn(t)},Gd=function(t,e){return t&&(Mn[t]=e)&&fa&&(fa[t]=e)||Mn},to=function(){return 0},yy={suppressEvents:!0,isStart:!0,kill:!1},ha={suppressEvents:!0,kill:!1},vy={suppressEvents:!0},gh={},ki=[],ih={},Wd,hn={},Zl={},Pd=30,ua=[],_h="",xh=function(t){var e=t[0],n,i;if(Qn(e)||Ce(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ua.length;i--&&!ua[i].targetTest(e););n=ua[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Sh(t[i],n)))||t.splice(i,1);return t},Hi=function(t){return t._gsap||xh(Pn(t))[0]._gsap},yh=function(t,e,n){return(n=t[e])&&Ce(n)?t[e]():xa(n)&&t.getAttribute&&t.getAttribute(e)||n},on=function(t,e){return(t=t.split(",")).forEach(e)||t},Pe=function(t){return Math.round(t*1e5)/1e5||0},Ne=function(t){return Math.round(t*1e7)/1e7||0},xs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},My=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},pa=function(){var t=ki.length,e=ki.slice(0),n,i;for(ih={},ki.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vh=function(t){return!!(t._initted||t._startAt||t.add)},Xd=function(t,e,n,i){ki.length&&!Ye&&pa(),t.render(e,n,i||!!(Ye&&e<0&&vh(t))),ki.length&&!Ye&&pa()},qd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(kd).length<2?e:Be(t)?t.trim():t},Yd=function(t){return t},Sn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Sy=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},pr=function(t,e){for(var n in e)t[n]=e[n];return t},Id=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Qn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},ma=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},$r=function(t){var e=t.parent||Ae,n=t.keyframes?Sy(tn(t.keyframes)):Sn;if(dn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},by=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Zd=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},va=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Vi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ps=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Ey=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},sh=function(t,e,n,i){return t._startAt&&(Ye?t._startAt.revert(ha):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},wy=function s(t){return!t||t._ts&&s(t.parent)},Dd=function(t){return t._repeat?mr(t._tTime,t=t.duration()+t._rDelay)*t:0},mr=function(t,e){var n=Math.floor(t=Ne(t/e));return t&&n===t?n-1:n},ga=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ma=function(t){return t._end=Ne(t._start+(t._tDur/Math.abs(t._ts||t._rts||ge)||0))},Sa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ne(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ma(t),n._dirty||ps(n,t)),t},Jd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ga(t.rawTime(),e),(!e._dur||io(0,e.totalDuration(),n)-e._tTime>ge)&&e.render(n,!0)),ps(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ge}},Kn=function(t,e,n,i){return e.parent&&Vi(e),e._start=Ne((_i(n)?n:n||t!==Ae?Rn(t,n,e):t._time)+e._delay),e._end=Ne(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Zd(t,e,"_first","_last",t._sort?"_start":0),rh(e)||(t._recent=e),i||Jd(t,e),t._ts<0&&Sa(t,t._tTime),t},$d=function(t,e){return(Mn.ScrollTrigger||ya("scrollTrigger",e))&&Mn.ScrollTrigger.create(e,t)},Kd=function(t,e,n,i,r){if(wh(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Ye&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Wd!==un.frame)return ki.push(t),t._lazy=[r,i],1},Ty=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},rh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ay=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Ty(t)&&!(!t._initted&&rh(t))||(t._ts<0||t._dp._ts<0)&&!rh(t))?0:1,a=t._rDelay,c=0,l,h,u;if(a&&t._repeat&&(c=io(0,t._tDur,e),h=mr(c,a),t._yoyo&&h&1&&(o=1-o),h!==mr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Ye||i||t._zTime===ge||!e&&t._zTime){if(!t._initted&&Kd(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?ge:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&sh(t,e,n,!0),t._onUpdate&&!n&&vn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&vn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Vi(t,1),!n&&!Ye&&(vn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ry=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},gr=function(t,e,n,i){var r=t._repeat,o=Ne(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ne(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Sa(t,t._tTime=t._tDur*a),t.parent&&Ma(t),n||ps(t.parent,t),t},Ld=function(t){return t instanceof qe?ps(t):gr(t,t._dur)},Cy={_start:0,endTime:to,totalDuration:to},Rn=function s(t,e,n){var i=t.labels,r=t._recent||Cy,o=t.duration()>=Cn?r.endTime(!1):t._dur,a,c,l;return Be(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(tn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},Kr=function(t,e,n){var i=_i(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=dn(c.vars.inherit)&&c.parent;o.immediateRender=dn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new De(e[0],o,e[r+1])},Gi=function(t,e){return t||t===0?e(t):e},io=function(t,e,n){return n<t?t:n>e?e:n},Ze=function(t,e){return!Be(t)||!(e=xy.exec(t))?"":e[1]},Py=function(t,e,n){return Gi(n,function(i){return io(t,e,i)})},oh=[].slice,Qd=function(t,e){return t&&Qn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Qn(t[0]))&&!t.nodeType&&t!==$n},Iy=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Be(i)&&!e||Qd(i,1)?(r=n).push.apply(r,Pn(i)):n.push(i)})||n},Pn=function(t,e,n){return we&&!e&&we.selector?we.selector(t):Be(t)&&!n&&(nh||!_r())?oh.call((e||mh).querySelectorAll(t),0):tn(t)?Iy(t,n):Qd(t)?oh.call(t,0):t?[t]:[]},ah=function(t){return t=Pn(t)[0]||jr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Pn(e,n.querySelectorAll?n:n===t?jr("Invalid scope")||mh.createElement("div"):t)}},jd=function(t){return t.sort(function(){return .5-Math.random()})},tf=function(t){if(Ce(t))return t;var e=Qn(t)?t:{each:t},n=ms(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,h=i,u=i;return Be(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||e).length,m=o[_],p,S,v,x,A,b,w,T,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,Cn])[1],!M){for(w=-Cn;w<(w=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],p=c?Math.min(M,_)*h-.5:i%M,S=M===Cn?0:c?_*u/M-.5:i/M|0,w=0,T=Cn,b=0;b<_;b++)v=b%M-p,x=S-(b/M|0),m[b]=A=l?Math.abs(l==="y"?x:v):Bd(v*v+x*x),A>w&&(w=A),A<T&&(T=A);i==="random"&&jd(m),m.max=w-T,m.min=T,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:l?l==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Ze(e.amount||e.each)||0,n=n&&_<0?hf(n):n}return _=(m[d]-m.min)/m.max||0,Ne(m.b+(n?n(_):_)*m.v)+m.u}},ch=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ne(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(_i(n)?0:Ze(n))}},ef=function(t,e){var n=tn(t),i,r;return!n&&Qn(t)&&(i=n=t.radius||Cn,t.values?(t=Pn(t.values),(r=!_i(t[0]))&&(i*=i)):t=ch(t.increment)),Gi(e,n?Ce(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=Cn,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-a,f=t[u].y-c,d=d*d+f*f):d=Math.abs(t[u]-a),d<l&&(l=d,h=u);return h=!i||l<=i?t[h]:o,r||h===o||_i(o)?h:h+Ze(o)}:ch(t))},nf=function(t,e,n,i){return Gi(tn(t)?!e:n===!0?!!(n=0):!i,function(){return tn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Dy=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Ly=function(t,e){return function(n){return t(parseFloat(n))+(e||Ze(n))}},Uy=function(t,e,n){return rf(t,e,0,1,n)},sf=function(t,e,n){return Gi(n,function(i){return t[~~e(i)]})},Ny=function s(t,e,n){var i=e-t;return tn(t)?sf(t,s(0,t.length),e):Gi(n,function(r){return(i+(r-t)%i)%i+t})},Oy=function s(t,e,n){var i=e-t,r=i*2;return tn(t)?sf(t,s(0,t.length-1),e):Gi(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},xr=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?kd:eh),n+=t.substr(e,i-e)+nf(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},rf=function(t,e,n,i,r){var o=e-t,a=i-n;return Gi(r,function(c){return n+((c-t)/o*a||0)})},Fy=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=Be(t),a={},c,l,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(tn(t)&&!tn(e)){for(h=[],u=t.length,d=u-2,l=1;l<u;l++)h.push(s(t[l-1],t[l]));u--,r=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=e}else i||(t=pr(tn(t)?[]:{},t));if(!h){for(c in e)bh.call(a,t,c,"get",e[c]);r=function(g){return Rh(g,a)||(o?t.p:t)}}}return Gi(n,r)},Ud=function(t,e,n){var i=t.labels,r=Cn,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},vn=function(t,e,n){var i=t.vars,r=i[e],o=we,a=t._ctx,c,l,h;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&ki.length&&pa(),a&&(we=a),h=c?r.apply(l,c):r.call(l),we=o,h},Zr=function(t){return Vi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ye),t.progress()<1&&vn(t,"onInterrupt"),t},dr,of=[],af=function(t){if(t)if(t=!t.name&&t.default||t,dh()||t.headless){var e=t.name,n=Ce(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:to,render:Rh,add:bh,kill:jy,modifier:Qy,rawVars:0},o={targetTest:0,get:0,getSetter:ba,aliases:{},register:0};if(_r(),t!==i){if(hn[e])return;Sn(i,Sn(ma(t,r),o)),pr(i.prototype,pr(r,ma(t,o))),hn[i.prop=e]=i,t.targetTest&&(ua.push(i),gh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Gd(e,i),t.register&&t.register(en,i,an)}else of.push(t)},me=255,Jr={aqua:[0,me,me],lime:[0,me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,me],navy:[0,0,128],white:[me,me,me],olive:[128,128,0],yellow:[me,me,0],orange:[me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[me,0,0],pink:[me,192,203],cyan:[0,me,me],transparent:[me,me,me,0]},Jl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*me+.5|0},cf=function(t,e,n){var i=t?_i(t)?[t>>16,t>>8&me,t&me]:0:Jr.black,r,o,a,c,l,h,u,d,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Jr[t])i=Jr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&me,i&me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&me,t&me]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(eh),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(l+1):h+l-h*l,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Jl(c+1/3,r,o),i[1]=Jl(c,r,o),i[2]=Jl(c-1/3,r,o);else if(~t.indexOf("="))return i=t.match(fh),n&&i.length<4&&(i[3]=1),i}else i=t.match(eh)||Jr.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/me,o=i[1]/me,a=i[2]/me,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?c=l=0:(f=u-d,l=h>.5?f/(2-u-d):f/(u+d),c=u===r?(o-a)/f+(o<a?6:0):u===o?(a-r)/f+2:(r-o)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},lf=function(t){var e=[],n=[],i=-1;return t.split(gi).forEach(function(r){var o=r.match(_s)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Nd=function(t,e,n){var i="",r=(t+i).match(gi),o=e?"hsla(":"rgba(",a=0,c,l,h,u;if(!r)return t;if(r=r.map(function(d){return(d=cf(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=lf(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(gi,"1").split(_s),u=l.length-1;a<u;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!l)for(l=t.split(gi),u=l.length-1;a<u;a++)i+=l[a]+r[a];return i+l[u]},gi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Jr)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),By=/hsl[a]?\(/,Mh=function(t){var e=t.join(" "),n;if(gi.lastIndex=0,gi.test(e))return n=By.test(e),t[1]=Nd(t[1],n),t[0]=Nd(t[0],n,lf(t[1])),!0},eo,un=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,h,u,d,f,g=function _(m){var p=s()-i,S=m===!0,v,x,A,b;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,v=A-o,(v>0||S)&&(b=++u.frame,d=A-u.time*1e3,u.time=A=A/1e3,o+=v+(v>=r?4:r-v),x=1),S||(c=l(_)),x)for(f=0;f<a.length;f++)a[f](A,d,b,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Hd&&(!nh&&dh()&&($n=nh=window,mh=$n.document||{},Mn.gsap=en,($n.gsapVersions||($n.gsapVersions=[])).push(en.version),Vd(fa||$n.GreenSockGlobals||!$n.gsap&&$n||{}),of.forEach(af)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},eo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),eo=0,l=to},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,p,S){var v=p?function(x,A,b,w){m(x,A,b,w),u.remove(v)}:m;return u.remove(m),a[S?"unshift":"push"](v),_r(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u}(),_r=function(){return!eo&&un.wake()},ie={},zy=/^[\d.\-M][\d.\-,\s]/,ky=/["']/g,Hy=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(ky,"").trim():+l,i=c.substr(a+1).trim();return e},Vy=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Gy=function(t){var e=(t+"").split("("),n=ie[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Hy(e[1])]:Vy(t).split(",").map(qd)):ie._CE&&zy.test(t)?ie._CE("",t):n},hf=function(t){return function(e){return 1-t(1-e)}},uf=function s(t,e){for(var n=t._first,i;n;)n instanceof qe?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},ms=function(t,e){return t&&(Ce(t)?t:ie[t]||Gy(t))||e},ys=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return on(t,function(a){ie[a]=Mn[a]=r,ie[o=a.toLowerCase()]=n;for(var c in r)ie[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ie[a+"."+c]=r[c]}),r},df=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},$l=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/th*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*_y((h-o)*r)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:df(a);return r=th/r,c.config=function(l,h){return s(t,l,h)},c},Kl=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:df(n);return i.config=function(r){return s(t,r)},i};on("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;ys(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ie.Linear.easeNone=ie.none=ie.Linear.easeIn;ys("Elastic",$l("in"),$l("out"),$l());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};ys("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ys("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});ys("Circ",function(s){return-(Bd(1-s*s)-1)});ys("Sine",function(s){return s===1?1:-gy(s*py)+1});ys("Back",Kl("in"),Kl("out"),Kl());ie.SteppedEase=ie.steps=Mn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-ge;return function(a){return((i*io(0,o,a)|0)+r)*n}}};fr.ease=ie["quad.out"];on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return _h+=s+","+s+"Params,"});var Sh=function(t,e){this.id=my++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:yh,this.set=e?e.getSetter:ba},no=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,gr(this,+e.duration,1,1),this.data=e.data,we&&(this._ctx=we,we.data.push(this)),eo||un.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,gr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(_r(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Sa(this,n),!r._dp||r.parent||Jd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Kn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ge||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Xd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Dd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Dd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?mr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ge?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ga(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ge?0:this._rts,this.totalTime(io(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Ma(this),Ey(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_r(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ge&&(this._tTime-=ge)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Kn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(dn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ga(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=vy);var i=Ye;return Ye=n,vh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ye=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ld(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ld(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Rn(this,n),dn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,dn(i)),this._dur||(this._zTime=-ge),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ge:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ge,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ge)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=Ce(n)?n:Yd,a=function(){var l=i.then;i.then=null,Ce(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Zr(this)},s}();Sn(no.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ge,_prom:0,_ps:!1,_rts:1});var qe=function(s){Fd(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=dn(n.sortChildren),Ae&&Kn(n.parent||Ae,mi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&$d(mi(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Kr(0,arguments,this),this},e.from=function(i,r,o){return Kr(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Kr(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,$r(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new De(i,r,Rn(this,o),1),this},e.call=function(i,r,o){return Kn(this,De.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,c,l,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=h,o.parent=this,new De(i,o,Rn(this,c)),this},e.staggerFrom=function(i,r,o,a,c,l,h){return o.runBackwards=1,$r(o).immediateRender=dn(o.immediateRender),this.staggerTo(i,r,o,a,c,l,h)},e.staggerFromTo=function(i,r,o,a,c,l,h,u){return a.startAt=o,$r(a).immediateRender=dn(a.immediateRender),this.staggerTo(i,r,a,c,l,h,u)},e.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:Ne(i),u=this._zTime<0!=i<0&&(this._initted||!l),d,f,g,_,m,p,S,v,x,A,b,w;if(this!==Ae&&h>c&&i>=0&&(h=c),h!==this._tTime||o||u){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),d=h,x=this._start,v=this._ts,p=!v,u&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=Ne(h%m),h===c?(_=this._repeat,d=l):(A=Ne(h/m),_=~~A,_&&_===A&&(d=l,_--),d>l&&(d=l)),A=mr(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),b&&_&1&&(d=l-d,w=1),_!==A&&!this._lock){var T=b&&A&1,M=T===(b&&_&1);if(_<A&&(T=!T),a=T?0:h%l?l:h,this._lock=1,this.render(a||(w?0:Ne(_*m)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&vn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,M&&(this._lock=2,a=T?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;uf(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Ry(this,Ne(a),Ne(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!r&&!A&&(vn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=-ge);break}}f=g}else{f=this._last;for(var y=i<0?i:d;f;){if(g=f._prev,(f._act||y<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,r,o||Ye&&vh(f)),d!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=y?-ge:ge);break}}f=g}}if(S&&!r&&(this.pause(),S.render(d>=a?0:-ge)._zTime=d>=a?1:-1,this._ts))return this._start=x,Ma(this),this.render(i,r,o);this._onUpdate&&!r&&vn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Vi(this,1),!r&&!(i<0&&!a)&&(h||a||!c)&&(vn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(_i(r)||(r=Rn(this,r,i)),!(i instanceof no)){if(tn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Be(i))return this.addLabel(i,r);if(Ce(i))i=De.delayedCall(0,i);else return this}return this!==i?Kn(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Cn);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof De?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return Be(i)?this.removeLabel(i):Ce(i)?this.killTweensOf(i):(i.parent===this&&va(this,i),i===this._recent&&(this._recent=this._last),ps(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ne(un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Rn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=De.delayedCall(0,r||to,o);return a.data="isPause",this._hasPause=1,Kn(this,a,Rn(this,i))},e.removePause=function(i){var r=this._first;for(i=Rn(this,i);r;)r._start===i&&r.data==="isPause"&&Vi(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)zi!==a[c]&&a[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Pn(i),c=this._first,l=_i(r),h;c;)c instanceof De?My(c._targets,a)&&(l?(!zi||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(h=c.getTweensOf(a,r)).length&&o.push.apply(o,h),c=c._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Rn(o,i),c=r,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,f,g=De.to(o,Sn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||ge,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());g._dur!==m&&gr(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},r));return d?g.render(0):g},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,Sn({startAt:{time:Rn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ud(this,Rn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ud(this,Rn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ge)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return ps(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ps(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,c=Cn,l,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Kn(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;gr(o,o===Ae&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ae._ts&&(Xd(Ae,ga(i,Ae)),Wd=un.frame),un.frame>=Pd){Pd+=fn.autoSleep||120;var r=Ae._first;if((!r||!r._ts)&&fn.autoSleep&&un._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||un.sleep()}}},t}(no);Sn(qe.prototype,{_lock:0,_hasPause:0,_forcing:0});var Wy=function(t,e,n,i,r,o,a){var c=new an(this._pt,t,e,0,1,Ah,null,r),l=0,h=0,u,d,f,g,_,m,p,S;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=xr(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),d=n.match(Yl)||[];u=Yl.exec(i);)g=u[0],_=i.substring(l,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?xs(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},l=Yl.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(ph.test(i)||p)&&(c.e=0),this._pt=c,c},bh=function(t,e,n,i,r,o,a,c,l,h){Ce(i)&&(i=i(r||0,t,o));var u=t[e],d=n!=="get"?n:Ce(u)?l?t[e.indexOf("set")||!Ce(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,f=Ce(u)?l?Jy:mf:Th,g;if(Be(i)&&(~i.indexOf("random(")&&(i=xr(i)),i.charAt(1)==="="&&(g=xs(d,i)+(Ze(d)||0),(g||g===0)&&(i=g))),!h||d!==i||lh)return!isNaN(d*i)&&i!==""?(g=new an(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?Ky:gf,0,f),l&&(g.fp=l),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&ya(e,i),Wy.call(this,t,e,d,i,f,c||fn.stringFilter,l))},Xy=function(t,e,n,i,r){if(Ce(t)&&(t=Qr(t,r,e,n,i)),!Qn(t)||t.style&&t.nodeType||tn(t)||zd(t))return Be(t)?Qr(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Qr(t[a],r,e,n,i);return o},Eh=function(t,e,n,i,r,o){var a,c,l,h;if(hn[t]&&(a=new hn[t]).init(r,a.rawVars?e[t]:Xy(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new an(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==dr))for(l=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)l[a._props[h]]=c;return a},zi,lh,wh=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,S=p&&p.data==="nested"?p.vars.targets:m,v=t._overwrite==="auto"&&!uh,x=t.timeline,A,b,w,T,M,y,C,F,z,V,K,N,nt;if(x&&(!d||!r)&&(r="none"),t._ease=ms(r,fr.ease),t._yEase=u?hf(ms(u===!0?r:u,fr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(F=m[0]?Hi(m[0]).harness:0,N=F&&i[F.prop],A=ma(i,gh),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&g?ha:yy),_._lazy=0),o){if(Vi(t._startAt=De.set(m,Sn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&dn(c),startAt:null,delay:0,onUpdate:l&&function(){return vn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ye||!a&&!f)&&t._startAt.revert(ha),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),w=Sn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&dn(c),immediateRender:a,stagger:0,parent:p},A),N&&(w[F.prop]=N),Vi(t._startAt=De.set(m,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ye?t._startAt.revert(ha):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,ge,ge);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&dn(c)||c&&!g,b=0;b<m.length;b++){if(M=m[b],C=M._gsap||xh(m)[b]._gsap,t._ptLookup[b]=V={},ih[C.id]&&ki.length&&pa(),K=S===m?b:S.indexOf(M),F&&(z=new F).init(M,N||A,t,K,S)!==!1&&(t._pt=T=new an(t._pt,M,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(G){V[G]=T}),z.priority&&(y=1)),!F||N)for(w in A)hn[w]&&(z=Eh(w,A,t,K,M,S))?z.priority&&(y=1):V[w]=T=bh.call(t,M,w,"get",A[w],K,S,0,i.stringFilter);t._op&&t._op[b]&&t.kill(M,t._op[b]),v&&t._pt&&(zi=t,Ae.killTweensOf(M,V,t.globalTime(e)),nt=!t.parent,zi=0),t._pt&&c&&(ih[C.id]=1)}y&&Ch(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!nt,d&&e<=0&&x.render(Cn,!0,!0)},qy=function(t,e,n,i,r,o,a,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return lh=1,t.vars[e]="+=0",wh(t,a),lh=0,c?jr(e+" not eligible for reset"):1;l.push(h)}for(f=l.length;f--;)u=l[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Pe(n)+Ze(u.e)),u.b&&(u.b=h.s+Ze(u.b))},Yy=function(t,e){var n=t[0]?Hi(t[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return e;r=pr({},e);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},Zy=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(tn(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Qr=function(t,e,n,i,r){return Ce(t)?t.call(e,n,i,r):Be(t)&&~t.indexOf("random(")?xr(t):t},ff=_h+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",pf={};on(ff+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return pf[s]=1});var De=function(s){Fd(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:$r(i))||this;var c=a.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,f=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,S=i.parent||Ae,v=(tn(n)||zd(n)?_i(n[0]):"length"in i)?[n]:Pn(n),x,A,b,w,T,M,y,C;if(a._targets=v.length?xh(v):jr("GSAP target "+n+" not found. https://gsap.com",!fn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||la(l)||la(h)){if(i=a.vars,x=a.timeline=new qe({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:v}),x.kill(),x.parent=x._dp=mi(a),x._start=0,d||la(l)||la(h)){if(w=v.length,y=d&&tf(d),Qn(d))for(T in d)~ff.indexOf(T)&&(C||(C={}),C[T]=d[T]);for(A=0;A<w;A++)b=ma(i,pf),b.stagger=0,p&&(b.yoyoEase=p),C&&pr(b,C),M=v[A],b.duration=+Qr(l,mi(a),A,M,v),b.delay=(+Qr(h,mi(a),A,M,v)||0)-a._delay,!d&&w===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),x.to(M,b,y?y(A,M,v):0),x._ease=ie.none;x.duration()?l=h=0:a.timeline=0}else if(g){$r(Sn(x.vars.defaults,{ease:"none"})),x._ease=ms(g.ease||i.ease||"none");var F=0,z,V,K;if(tn(g))g.forEach(function(N){return x.to(v,N,">")}),x.duration();else{b={};for(T in g)T==="ease"||T==="easeEach"||Zy(T,g[T],b,g.easeEach);for(T in b)for(z=b[T].sort(function(N,nt){return N.t-nt.t}),F=0,A=0;A<z.length;A++)V=z[A],K={ease:V.e,duration:(V.t-(A?z[A-1].t:0))/100*l},K[T]=V.v,x.to(v,K,F),F+=K.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||a.duration(l=x.duration())}else a.timeline=0;return f===!0&&!uh&&(zi=mi(a),Ae.killTweensOf(v),zi=0),Kn(S,mi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!l&&!g&&a._start===Ne(S._time)&&dn(u)&&wy(mi(a))&&S.data!=="nested")&&(a._tTime=-ge,a.render(Math.max(0,-h)||0)),m&&$d(mi(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-ge&&!h?c:i<ge?0:i,d,f,g,_,m,p,S,v,x;if(!l)Ay(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,v=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(d=Ne(u%_),u===c?(g=this._repeat,d=l):(m=Ne(u/_),g=~~m,g&&g===m?(d=l,g--):d>l&&(d=l)),p=this._yoyo&&g&1,p&&(x=this._yEase,d=l-d),m=mr(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(v&&this._yEase&&uf(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Ne(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Kd(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(x||this._ease)(d/l),this._from&&(this.ratio=S=1-S),!a&&u&&!r&&!m&&(vn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&sh(this,i,r,o),vn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&vn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&sh(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Vi(this,1),!r&&!(h&&!a)&&(u||a||p)&&(vn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,c){eo||un.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||wh(this,l),h=this._ease(l/this._dur),qy(this,i,r,o,a,h,l,c)?this.resetTo(i,r,o,a,1):(Sa(this,0),this.parent||Zd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Zr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ye),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,zi&&zi.vars.overwrite!==!0)._first||Zr(this),this.parent&&o!==this.timeline.totalDuration()&&gr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?Pn(i):a,l=this._ptLookup,h=this._pt,u,d,f,g,_,m,p;if((!r||r==="all")&&by(a,c))return r==="all"&&(this._pt=0),Zr(this);for(u=this._op=this._op||[],r!=="all"&&(Be(r)&&(_={},on(r,function(S){return _[S]=1}),r=_),r=Yy(a,r)),p=a.length;p--;)if(~c.indexOf(a[p])){d=l[p],r==="all"?(u[p]=r,g=d,f={}):(f=u[p]=u[p]||{},g=r);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&va(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Zr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Kr(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Kr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Ae.killTweensOf(i,r,o)},t}(no);Sn(De.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});on("staggerTo,staggerFrom,staggerFromTo",function(s){De[s]=function(){var t=new qe,e=oh.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Th=function(t,e,n){return t[e]=n},mf=function(t,e,n){return t[e](n)},Jy=function(t,e,n,i){return t[e](i.fp,n)},$y=function(t,e,n){return t.setAttribute(e,n)},ba=function(t,e){return Ce(t[e])?mf:xa(t[e])&&t.setAttribute?$y:Th},gf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Ky=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ah=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Rh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Qy=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},jy=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?va(this,e,"_pt"):e.dep||(n=1),e=i;return!n},tv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Ch=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},an=function(){function s(e,n,i,r,o,a,c,l,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||gf,this.d=c||this,this.set=l||Th,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=tv,this.m=n,this.mt=r,this.tween=i},s}();on(_h+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return gh[s]=1});Mn.TweenMax=Mn.TweenLite=De;Mn.TimelineLite=Mn.TimelineMax=qe;Ae=new qe({sortChildren:!1,defaults:fr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fn.stringFilter=Mh;var gs=[],da={},ev=[],Od=0,nv=0,Ql=function(t){return(da[t]||ev).map(function(e){return e()})},hh=function(){var t=Date.now(),e=[];t-Od>2&&(Ql("matchMediaInit"),gs.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=$n.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),Ql("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Od=t,Ql("matchMedia"))},_f=function(){function s(e,n){this.selector=n&&ah(n),this.data=[],this._r=[],this.isReverted=!1,this.id=nv++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ce(n)&&(r=i,i=n,n=Ce);var o=this,a=function(){var l=we,h=o.selector,u;return l&&l!==o&&l.data.push(o),r&&(o.selector=ah(r)),we=o,u=i.apply(o,arguments),Ce(u)&&o._r.push(u),we=l,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ce?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},t.ignore=function(n){var i=we;we=null,n(this),we=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof De&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof qe?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof De)&&l.revert&&l.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=gs.length;o--;)gs[o].id===this.id&&gs.splice(o,1)},t.revert=function(n){this.kill(n||{})},s}(),iv=function(){function s(e){this.contexts=[],this.scope=e,we&&we.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Qn(n)||(n={matches:n});var o=new _f(0,r||this.scope),a=o.conditions={},c,l,h;we&&!o.selector&&(o.selector=we.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?h=1:(c=$n.matchMedia(n[l]),c&&(gs.indexOf(o)<0&&gs.push(o),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener(hh):c.addEventListener("change",hh)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),_a={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return af(i)})},timeline:function(t){return new qe(t)},getTweensOf:function(t,e){return Ae.getTweensOf(t,e)},getProperty:function(t,e,n,i){Be(t)&&(t=Pn(t)[0]);var r=Hi(t||{}).get,o=n?Yd:qd;return n==="native"&&(n=""),t&&(e?o((hn[e]&&hn[e].get||r)(t,e,n,i)):function(a,c,l){return o((hn[a]&&hn[a].get||r)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=Pn(t),t.length>1){var i=t.map(function(h){return en.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=hn[e],a=Hi(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(h){var u=new o;dr._pt=0,u.init(t,n?h+n:h,dr,0,[t]),u.render(1,u),dr._pt&&Rh(1,dr)}:a.set(t,c);return o?l:function(h){return l(t,c,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=en.to(t,Sn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,l,h){return r.resetTo(e,c,l,h)};return o.tween=r,o},isTweening:function(t){return Ae.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ms(t.ease,fr.ease)),Id(fr,t||{})},config:function(t){return Id(fn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!hn[a]&&!Mn[a]&&jr(e+" effect requires "+a+" plugin.")}),Zl[e]=function(a,c,l){return n(Pn(a),Sn(c||{},r),l)},o&&(qe.prototype[e]=function(a,c,l){return this.add(Zl[e](a,Qn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){ie[t]=ms(e)},parseEase:function(t,e){return arguments.length?ms(t,e):ie},getById:function(t){return Ae.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new qe(t),i,r;for(n.smoothChildTiming=dn(t.smoothChildTiming),Ae.remove(n),n._dp=0,n._time=n._tTime=Ae._time,i=Ae._first;i;)r=i._next,(e||!(!i._dur&&i instanceof De&&i.vars.onComplete===i._targets[0]))&&Kn(n,i,i._start-i._delay),i=r;return Kn(Ae,n,0),n},context:function(t,e){return t?new _f(t,e):we},matchMedia:function(t){return new iv(t)},matchMediaRefresh:function(){return gs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||hh()},addEventListener:function(t,e){var n=da[t]||(da[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=da[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Ny,wrapYoyo:Oy,distribute:tf,random:nf,snap:ef,normalize:Uy,getUnit:Ze,clamp:Py,splitColor:cf,toArray:Pn,selector:ah,mapRange:rf,pipe:Dy,unitize:Ly,interpolate:Fy,shuffle:jd},install:Vd,effects:Zl,ticker:un,updateRoot:qe.updateRoot,plugins:hn,globalTimeline:Ae,core:{PropTween:an,globals:Gd,Tween:De,Timeline:qe,Animation:no,getCache:Hi,_removeLinkedListItem:va,reverting:function(){return Ye},context:function(t){return t&&we&&(we.data.push(t),t._ctx=we),we},suppressOverwrites:function(t){return uh=t}}};on("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return _a[s]=De[s]});un.add(qe.updateRoot);dr=_a.to({},{duration:0});var sv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},rv=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=sv(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},jl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(Be(r)&&(c={},on(r,function(h){return c[h]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}rv(a,r)}}}},en=_a.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Ye?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},jl("roundProps",ch),jl("modifiers"),jl("snap",ef))||_a;De.version=qe.version=en.version="3.13.0";Hd=1;dh()&&_r();var ov=ie.Power0,av=ie.Power1,cv=ie.Power2,lv=ie.Power3,hv=ie.Power4,uv=ie.Linear,dv=ie.Quad,fv=ie.Cubic,pv=ie.Quart,mv=ie.Quint,gv=ie.Strong,_v=ie.Elastic,xv=ie.Back,yv=ie.SteppedEase,vv=ie.Bounce,Mv=ie.Sine,Sv=ie.Expo,bv=ie.Circ;var xf,Wi,vr,Nh,bs,Ev,yf,Oh,wv=function(){return typeof window<"u"},yi={},Ss=180/Math.PI,Mr=Math.PI/180,yr=Math.atan2,vf=1e8,Fh=/([A-Z])/g,Tv=/(left|right|width|margin|padding|x)/i,Av=/[\s,\(]\S/,jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ih=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Rv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Pv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Rf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Cf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Iv=function(t,e,n){return t.style[e]=n},Dv=function(t,e,n){return t.style.setProperty(e,n)},Lv=function(t,e,n){return t._gsap[e]=n},Uv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Nv=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Ov=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Re="transform",pn=Re+"Origin",Fv=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in yi&&r){if(this.tfm=this.tfm||{},t!=="transform")t=jn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=xi(i,a)}):this.tfm[t]=o.x?o[t]:xi(i,t),t===pn&&(this.tfm.zOrigin=o.zOrigin);else return jn.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Re)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pn,e,"")),t=Re}(r||e)&&this.props.push(t,e,r[t])},Pf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Bv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Fh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Oh(),(!r||!r.isStart)&&!n[Re]&&(Pf(n),i.zOrigin&&n[pn]&&(n[pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},If=function(t,e){var n={target:t,props:[],revert:Bv,save:Fv};return t._gsap||en.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Df,Dh=function(t,e){var n=Wi.createElementNS?Wi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Wi.createElement(t);return n&&n.style?n:Wi.createElement(t)},In=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Fh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Sr(e)||e,1)||""},Mf="O,Moz,ms,Ms,Webkit".split(","),Sr=function(t,e,n){var i=e||bs,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Mf[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Mf[o]:"")+t},Lh=function(){wv()&&window.document&&(xf=window,Wi=xf.document,vr=Wi.documentElement,bs=Dh("div")||{style:{}},Ev=Dh("div"),Re=Sr(Re),pn=Re+"Origin",bs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Df=!!Sr("perspective"),Oh=en.core.reverting,Nh=1)},Sf=function(t){var e=t.ownerSVGElement,n=Dh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),vr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),vr.removeChild(n),r},bf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Lf=function(t){var e,n;try{e=t.getBBox()}catch{e=Sf(t),n=1}return e&&(e.width||e.height)||n||(e=Sf(t)),e&&!e.width&&!e.x&&!e.y?{x:+bf(t,["x","cx","x1"])||0,y:+bf(t,["y","cy","y1"])||0,width:0,height:0}:e},Uf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Lf(t))},Es=function(t,e){if(e){var n=t.style,i;e in yi&&e!==pn&&(e=Re),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Fh,"-$1").toLowerCase())):n.removeAttribute(e)}},Xi=function(t,e,n,i,r,o){var a=new an(t._pt,e,n,0,1,o?Cf:Rf);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Ef={deg:1,rad:1,turn:1},zv={grid:1,flex:1},qi=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=bs.style,c=Tv.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,m,p;if(i===o||!r||Ef[i]||Ef[o])return r;if(o!=="px"&&!d&&(r=s(t,e,n,"px")),p=t.getCTM&&Uf(t),(f||o==="%")&&(yi[e]||~e.indexOf("adius")))return g=p?t.getBBox()[c?"width":"height"]:t[h],Pe(f?r/g*u:r/100*g);if(a[c?"width":"height"]=u+(d?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Wi||!_.appendChild)&&(_=Wi.body),m=_._gsap,m&&f&&m.width&&c&&m.time===un.time&&!m.uncache)return Pe(r/m.width*u);if(f&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+i,g=t[h],S?t.style[e]=S:Es(t,e)}else(f||o==="%")&&!zv[In(_,"display")]&&(a.position=In(t,"position")),_===t&&(a.position="static"),_.appendChild(bs),g=bs[h],_.removeChild(bs),a.position="absolute";return c&&f&&(m=Hi(_),m.time=un.time,m.width=_[h]),Pe(d?g*r/u:g&&r?u/g*r:0)},xi=function(t,e,n,i){var r;return Nh||Lh(),e in jn&&e!=="transform"&&(e=jn[e],~e.indexOf(",")&&(e=e.split(",")[0])),yi[e]&&e!=="transform"?(r=oo(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:wa(In(t,pn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ea[e]&&Ea[e](t,e,n)||In(t,e)||yh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?qi(t,e,r,n)+n:r},kv=function(t,e,n,i){if(!n||n==="none"){var r=Sr(e,t,1),o=r&&In(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=In(t,"borderTopColor"))}var a=new an(this._pt,t.style,e,0,1,Ah),c=0,l=0,h,u,d,f,g,_,m,p,S,v,x,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=In(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=In(t,e)||i,_?t.style[e]=_:Es(t,e)),h=[n,i],Mh(h),n=h[0],i=h[1],d=n.match(_s)||[],A=i.match(_s)||[],A.length){for(;u=_s.exec(i);)m=u[0],S=i.substring(c,u.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=d[l++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=xs(f,m)+x),p=parseFloat(m),v=m.substr((p+"").length),c=_s.lastIndex-v.length,v||(v=v||fn.units[e]||x,c===i.length&&(i+=v,a.e+=v)),x!==v&&(f=qi(t,e,_,v)||0),a._pt={_next:a._pt,p:S||l===1?S:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?Cf:Rf;return ph.test(i)&&(a.e=0),this._pt=a,a},wf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Hv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=wf[n]||n,e[1]=wf[i]||i,e.join(" ")},Vv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],yi[a]&&(c=1,a=a==="transformOrigin"?pn:Re),Es(n,a);c&&(Es(n,Re),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",oo(n,1),o.uncache=1,Pf(i)))}},Ea={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new an(t._pt,e,n,0,0,Vv);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},ro=[1,0,0,1,0,0],Nf={},Of=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Tf=function(t){var e=In(t,Re);return Of(e)?ro:e.substr(7).match(fh).map(Pe)},Bh=function(t,e){var n=t._gsap||Hi(t),i=t.style,r=Tf(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?ro:r):(r===ro&&!t.offsetParent&&t!==vr&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,a=t.nextElementSibling,vr.appendChild(t)),r=Tf(t),c?i.display=c:Es(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):vr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Uh=function(t,e,n,i,r,o){var a=t._gsap,c=r||Bh(t,!0),l=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=c[0],g=c[1],_=c[2],m=c[3],p=c[4],S=c[5],v=e.split(" "),x=parseFloat(v[0])||0,A=parseFloat(v[1])||0,b,w,T,M;n?c!==ro&&(w=f*m-g*_)&&(T=x*(m/w)+A*(-_/w)+(_*S-m*p)/w,M=x*(-g/w)+A*(f/w)-(f*S-g*p)/w,x=T,A=M):(b=Lf(t),x=b.x+(~v[0].indexOf("%")?x/100*b.width:x),A=b.y+(~(v[1]||v[0]).indexOf("%")?A/100*b.height:A)),i||i!==!1&&a.smooth?(p=x-l,S=A-h,a.xOffset=u+(p*f+S*_)-p,a.yOffset=d+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[pn]="0px 0px",o&&(Xi(o,a,"xOrigin",l,x),Xi(o,a,"yOrigin",h,A),Xi(o,a,"xOffset",u,a.xOffset),Xi(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+A)},oo=function(t,e){var n=t._gsap||new Sh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),l=In(t,pn)||"0",h,u,d,f,g,_,m,p,S,v,x,A,b,w,T,M,y,C,F,z,V,K,N,nt,G,lt,Q,dt,St,k,D,B;return h=u=d=_=m=p=S=v=x=0,f=g=1,n.svg=!!(t.getCTM&&Uf(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Re]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Re]!=="none"?c[Re]:"")),i.scale=i.rotate=i.translate="none"),w=Bh(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),l=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",nt=""):nt=!e&&t.getAttribute("data-svg-origin"),Uh(t,nt||l,!!nt||n.originIsAbsolute,n.smooth!==!1,w)),A=n.xOrigin||0,b=n.yOrigin||0,w!==ro&&(C=w[0],F=w[1],z=w[2],V=w[3],h=K=w[4],u=N=w[5],w.length===6?(f=Math.sqrt(C*C+F*F),g=Math.sqrt(V*V+z*z),_=C||F?yr(F,C)*Ss:0,S=z||V?yr(z,V)*Ss+_:0,S&&(g*=Math.abs(Math.cos(S*Mr))),n.svg&&(h-=A-(A*C+b*z),u-=b-(A*F+b*V))):(B=w[6],k=w[7],Q=w[8],dt=w[9],St=w[10],D=w[11],h=w[12],u=w[13],d=w[14],T=yr(B,St),m=T*Ss,T&&(M=Math.cos(-T),y=Math.sin(-T),nt=K*M+Q*y,G=N*M+dt*y,lt=B*M+St*y,Q=K*-y+Q*M,dt=N*-y+dt*M,St=B*-y+St*M,D=k*-y+D*M,K=nt,N=G,B=lt),T=yr(-z,St),p=T*Ss,T&&(M=Math.cos(-T),y=Math.sin(-T),nt=C*M-Q*y,G=F*M-dt*y,lt=z*M-St*y,D=V*y+D*M,C=nt,F=G,z=lt),T=yr(F,C),_=T*Ss,T&&(M=Math.cos(T),y=Math.sin(T),nt=C*M+F*y,G=K*M+N*y,F=F*M-C*y,N=N*M-K*y,C=nt,K=G),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Pe(Math.sqrt(C*C+F*F+z*z)),g=Pe(Math.sqrt(N*N+B*B)),T=yr(K,N),S=Math.abs(T)>2e-4?T*Ss:0,x=D?1/(D<0?-D:D):0),n.svg&&(nt=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Of(In(t,Re)),nt&&t.setAttribute("transform",nt))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(f*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Pe(f),n.scaleY=Pe(g),n.rotation=Pe(_)+a,n.rotationX=Pe(m)+a,n.rotationY=Pe(p)+a,n.skewX=S+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[pn]=wa(l)),n.xOffset=n.yOffset=0,n.force3D=fn.force3D,n.renderTransform=n.svg?Wv:Df?Ff:Gv,n.uncache=0,n},wa=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ph=function(t,e,n){var i=Ze(e);return Pe(parseFloat(e)+parseFloat(qi(t,"x",n+"px",i)))+i},Gv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ff(t,e)},vs="0deg",so="0px",Ms=") ",Ff=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,v=n.zOrigin,x="",A=p==="auto"&&t&&t!==1||p===!0;if(v&&(u!==vs||h!==vs)){var b=parseFloat(h)*Mr,w=Math.sin(b),T=Math.cos(b),M;b=parseFloat(u)*Mr,M=Math.cos(b),o=Ph(S,o,w*M*-v),a=Ph(S,a,-Math.sin(b)*-v),c=Ph(S,c,T*M*-v+v)}m!==so&&(x+="perspective("+m+Ms),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(A||o!==so||a!==so||c!==so)&&(x+=c!==so||A?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Ms),l!==vs&&(x+="rotate("+l+Ms),h!==vs&&(x+="rotateY("+h+Ms),u!==vs&&(x+="rotateX("+u+Ms),(d!==vs||f!==vs)&&(x+="skew("+d+", "+f+Ms),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Ms),S.style[Re]=x||"translate(0, 0)"},Wv=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,v=parseFloat(o),x=parseFloat(a),A,b,w,T,M;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Mr,l*=Mr,A=Math.cos(c)*u,b=Math.sin(c)*u,w=Math.sin(c-l)*-d,T=Math.cos(c-l)*d,l&&(h*=Mr,M=Math.tan(l-h),M=Math.sqrt(1+M*M),w*=M,T*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),A*=M,b*=M)),A=Pe(A),b=Pe(b),w=Pe(w),T=Pe(T)):(A=u,T=d,b=w=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=qi(f,"x",o,"px"),x=qi(f,"y",a,"px")),(g||_||m||p)&&(v=Pe(v+g-(g*A+_*w)+m),x=Pe(x+_-(g*b+_*T)+p)),(i||r)&&(M=f.getBBox(),v=Pe(v+i/100*M.width),x=Pe(x+r/100*M.height)),M="matrix("+A+","+b+","+w+","+T+","+v+","+x+")",f.setAttribute("transform",M),S&&(f.style[Re]=M)},Xv=function(t,e,n,i,r){var o=360,a=Be(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?Ss:1),l=c-i,h=i+l+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),u==="cw"&&l<0?l=(l+o*vf)%o-~~(l/o)*o:u==="ccw"&&l>0&&(l=(l-o*vf)%o-~~(l/o)*o)),t._pt=d=new an(t._pt,e,n,i,l,Rv),d.e=h,d.u="deg",t._props.push(n),d},Af=function(t,e){for(var n in e)t[n]=e[n];return t},qv=function(t,e,n){var i=Af({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,h,u,d,f,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Re]=e,a=oo(n,1),Es(n,Re),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Re],o[Re]=e,a=oo(n,1),o[Re]=l);for(c in yi)l=i[c],h=a[c],l!==h&&r.indexOf(c)<0&&(f=Ze(l),g=Ze(h),u=f!==g?qi(n,c,l,g):parseFloat(l),d=parseFloat(h),t._pt=new an(t._pt,a,c,u,d-u,Ih),t._pt.u=g||0,t._props.push(c));Af(a,i)};on("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Ea[t>1?"border"+s:s]=function(a,c,l,h,u){var d,f;if(arguments.length<4)return d=o.map(function(g){return xi(a,g,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(c,f,u)}});var zh={name:"css",register:Lh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,c=n.vars.startAt,l,h,u,d,f,g,_,m,p,S,v,x,A,b,w,T;Nh||Lh(),this.styles=this.styles||If(t),T=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(hn[_]&&Eh(_,e,n,i,t,r)))){if(f=typeof h,g=Ea[_],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=xr(h)),g)g(this,t,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",gi.lastIndex=0,gi.test(l)||(m=Ze(l),p=Ze(h)),p?m!==p&&(l=qi(t,_,l,p)+p):m&&(h+=m),this.add(a,"setProperty",l,h,i,r,0,0,_),o.push(_),T.push(_,0,a[_]);else if(f!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,t,r):c[_],Be(l)&&~l.indexOf("random(")&&(l=xr(l)),Ze(l+"")||l==="auto"||(l+=fn.units[_]||Ze(xi(t,_))||""),(l+"").charAt(1)==="="&&(l=xi(t,_))):l=xi(t,_),d=parseFloat(l),S=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),_ in jn&&(_==="autoAlpha"&&(d===1&&xi(t,"visibility")==="hidden"&&u&&(d=0),T.push("visibility",0,a.visibility),Xi(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=jn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in yi,v){if(this.styles.save(_),f==="string"&&h.substring(0,6)==="var(--"&&(h=In(t,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),x||(A=t._gsap,A.renderTransform&&!e.parseTransform||oo(t,e.parseTransform),b=e.smoothOrigin!==!1&&A.smooth,x=this._pt=new an(this._pt,a,Re,0,1,A.renderTransform,A,0,-1),x.dep=1),_==="scale")this._pt=new an(this._pt,A,"scaleY",A.scaleY,(S?xs(A.scaleY,S+u):u)-A.scaleY||0,Ih),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){T.push(pn,0,a[pn]),h=Hv(h),A.svg?Uh(t,h,0,b,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&Xi(this,A,"zOrigin",A.zOrigin,p),Xi(this,a,_,wa(l),wa(h)));continue}else if(_==="svgOrigin"){Uh(t,h,1,b,0,this);continue}else if(_ in Nf){Xv(this,A,_,d,S?xs(d,S+h):h);continue}else if(_==="smoothOrigin"){Xi(this,A,"smooth",A.smooth,h);continue}else if(_==="force3D"){A[_]=h;continue}else if(_==="transform"){qv(this,h,t);continue}}else _ in a||(_=Sr(_)||_);if(v||(u||u===0)&&(d||d===0)&&!Av.test(h)&&_ in a)m=(l+"").substr((d+"").length),u||(u=0),p=Ze(h)||(_ in fn.units?fn.units[_]:m),m!==p&&(d=qi(t,_,l,p)),this._pt=new an(this._pt,v?A:a,_,d,(S?xs(d,S+u):u)-d,!v&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Pv:Ih),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=Cv);else if(_ in a)kv.call(this,t,_,l,S?S+h:h);else if(_ in t)this.add(t,_,l||t[_],S?S+h:h,i,r);else if(_!=="parseTransform"){ya(_,h);continue}v||(_ in a?T.push(_,0,a[_]):typeof t[_]=="function"?T.push(_,2,t[_]()):T.push(_,1,l||t[_])),o.push(_)}}w&&Ch(this)},render:function(t,e){if(e.tween._time||!Oh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:xi,aliases:jn,getSetter:function(t,e,n){var i=jn[e];return i&&i.indexOf(",")<0&&(e=i),e in yi&&e!==pn&&(t._gsap.x||xi(t,"x"))?n&&yf===n?e==="scale"?Uv:Lv:(yf=n||{})&&(e==="scale"?Nv:Ov):t.style&&!xa(t.style[e])?Iv:~e.indexOf("-")?Dv:ba(t,e)},core:{_removeProperty:Es,_getMatrix:Bh}};en.utils.checkPrefix=Sr;en.core.getStyleSaver=If;(function(s,t,e,n){var i=on(s+","+t+","+e,function(r){yi[r]=1});on(t,function(r){fn.units[r]="deg",Nf[r]=1}),jn[i[13]]=s+","+t,on(n,function(r){var o=r.split(":");jn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){fn.units[s]="px"});en.registerPlugin(zh);var Ta=en.registerPlugin(zh)||en,DM=Ta.core.Tween;var UM=Math.PI*2,ao=(s,t=0,e=1)=>Math.min(e,Math.max(t,s));function kh(s){let t=s*s*s,e=[],n=[],i=[],r=[],o=[],a=[],c=new Set,l=(h,u,d)=>{let f=[h,u,d].join(":");c.has(f)||(c.add(f),a.push([h,u,d]))};for(let h=-5;h<=5;h++)for(let u=-2;u<=2;u++)l(h*.4,.9,u*.4);for(let h of[-1.6,1.6])for(let u of[-.4,.4])for(let d=-3;d<=1;d++)l(h,d*.4,u);for(let h of[-2.4,2.4])for(let u=-2;u<=3;u++)for(let d of[-.8,0,.8])l(h,u*.4,d);for(let h of[-2.8,2.8])for(let u=-2;u<=1;u++)for(let d of[-.4,.4])l(h,u*.4,d);for(let h=0;h<t;h++){let u=h%s,d=Math.floor(h/s)%s,f=Math.floor(h/(s*s)),g=[(u-(s-1)/2)*1.65/s,(d-(s-1)/2)*1.65/s,(f-(s-1)/2)*1.65/s];e.push(g);let _=h*2.399963229728653,m=1.25+h*37%17/17*.95;n.push([Math.cos(_)*m,Math.sin(h*1.7)*1.45,Math.sin(_)*m*.75]),i.push([Math.cos(_)*1.75,Math.sin(h*1.7)*1.15,Math.sin(_)*1.3]);let p=1-(h+.5)/t*2,S=Math.sqrt(1-p*p);r.push([Math.cos(_)*S*1.6,p*1.6,Math.sin(_)*S*1.6]),o.push(a[Math.round(h/(t-1)*(a.length-1))])}return{count:t,n:s,formations:[e,n,i,r,o,e]}}function Bf(s){let t=[0,1,1.15,2,3,4],e=0;for(;e<t.length-2&&s>t[e+1];)e++;return{from:e,to:e+1,weight:ao((s-t[e])/(t[e+1]-t[e]))}}function zf(s){if(s<=0||s>=4)return 0;let t=ao(s/.3),e=1-ao((s-3.72)/.28);return Math.min(t,e)}function kf(s){let t=ao(s)*5,e=Math.min(4,Math.floor(t)),n=ao((t-e)/.38),i=n*n*(3-2*n),r=[0,1,1.15,2,3,4];return r[e]+(r[e+1]-r[e])*i}var Aa=s=>Math.max(0,Math.min(1,s)),Yi=["inicio","problema","diagnostico","transformacao","solucoes","projetos","processo","inteligencia","sobre","resultado","contato"];function Hf(){let s={cx:4.5,cy:3.3,cz:8.4,tx:0,ty:-.1,tz:-.1,actorX:0,actorY:0,actorZ:0,yaw:.18,actorScale:1,pose:1,shape:0,order:.52,props:1,panel:1,path:1,wire:0,network:0,portal:0,opacity:1,screenX:.74,screenY:.52,mobileX:.49,mobileY:.76,mobileDistance:1.4,light:1.1,walk:0,walkAmp:.25},t={inicio:{...s},problema:{...s,cx:3.4,cy:2.6,cz:8.8,actorX:-.35,yaw:.25,order:0,path:.2,mobileY:.69,mobileDistance:1.35},diagnostico:{...s,cx:2.4,cy:2.2,cz:8.8,yaw:.2,order:.25,props:.28,path:.15,wire:1,pose:.1,mobileY:.76,mobileDistance:1.55,light:1.35,walkAmp:0},transformacao:{...s,cx:2.3,cy:2.1,cz:12,actorY:.4,props:.15,order:.7,path:.5,pose:1,wire:0,screenX:.73,screenY:.5,mobileY:.65,mobileDistance:1.55,light:1.2,walkAmp:0},solucoes:{...s,opacity:0,props:0,walkAmp:0},projetos:{...s,opacity:0,props:0,walkAmp:0},processo:{...s,cx:0,cy:1.8,cz:12,actorScale:.6,props:0,path:0,screenX:.14,screenY:.54,mobileX:.87,mobileY:.44,mobileDistance:1.1,walkAmp:1},inteligencia:{...s,cx:3.2,cy:3.6,cz:11.5,actorScale:.62,pose:0,props:0,path:0,network:1,screenX:.74,screenY:.53,mobileY:.72,mobileDistance:1.55,light:1.25,walkAmp:0},sobre:{...s,opacity:0,props:0,walkAmp:0},resultado:{...s,cx:4.5,cy:4,cz:10.2,order:1,yaw:0,path:1,mobileY:.73,mobileDistance:1.4,walkAmp:0},contato:{...s,cx:5.2,cy:3.5,cz:11,tx:1,ty:.1,tz:-1,actorX:-.4,actorZ:.2,order:1,props:.3,path:1,portal:1,screenX:.77,mobileY:.73,mobileDistance:1.5,light:1.2,walkAmp:.6}};for(let a of Yi)a!=="inicio"&&(t[a].panel=0);let e={...s},n={time:0},i=Ta.timeline({paused:!0}).to(n,{time:Yi.length,duration:Yi.length,ease:"none"}),r=Ta.parseEase("power2.inOut");function o(a,c){let l=Math.max(0,Yi.indexOf(a)),h=Aa(c);i.time(l+h,!0);let u=Aa(n.time-l),d=t[Yi[l]],f={...t[Yi[Math.max(0,l-1)]]};Yi[l-1]==="processo"&&(f.screenX=.86,f.mobileY=.79);let g=d.opacity===0?.08:Yi[l]==="transformacao"?.1:.28,_=l===0?1:r(Aa(u/g));for(let m of Object.keys(d))e[m]=f[m]+(d[m]-f[m])*_;if(e.shape=a==="transformacao"?kf(u):0,a==="transformacao"){e.order=u,e.actorY=.4,e.yaw=-.2+u*.7;let m=S=>{let v=Aa(S);return v*v*(3-2*v)},p=m((e.shape-2.2)/.6)*(1-m((e.shape-3.6)/.4));e.cz=12+p*1.5,e.mobileDistance=1.55+p*.25}return a==="problema"&&(e.walk=u*Math.PI*3),a==="inicio"&&(e.walk=u*Math.PI*2),a==="processo"&&(e.screenX=.14+u*.72,e.mobileY=.44+u*.35,e.walk=u*Math.PI*16,e.opacity=1),a==="contato"&&(e.actorX=-.4+u*2.6,e.actorZ=.2-u*2.7,e.walk=u*Math.PI*5),e}return{state:e,seek:o,dispose(){i.kill()}}}xd();var nn=document.documentElement;nn.classList.contains("reduced-motion")||Yv();function Yv(){let s=document.getElementById("sceneStage"),t=document.getElementById("sceneCanvas"),e,n=!1,i=Xr(),r=sa[i],o=innerWidth<=700;try{e=new nr({canvas:t,alpha:!0,antialias:i!=="low",powerPreference:"high-performance"}),e.outputColorSpace=Te,e.toneMapping=Gr,e.toneMappingExposure=1.1}catch{n=!0;let tt=t.cloneNode();t.replaceWith(tt),t=tt;try{e=new ur(t)}catch{dispatchEvent(new Event("portfolio:graphics-fallback"));return}}nn.dataset.renderer=n?"canvas":"webgl";let a=new Ui,c=new Ke(38,1,.1,100),l=new Set,h=new Set,u=new Set,d=new pe(1,1,1);l.add(d);let f=n?d:new We(1,1,1,3,.0325);l.add(f);function g(tt={},ft=!1){let pt=ft?new Ie(tt):new Se({roughness:.7,metalness:.08,...tt});return h.add(pt),pt}let _=new hs({color:"#e96c0c",roughness:.38,metalness:.48,clearcoat:.08,clearcoatRoughness:.5,envMapIntensity:.7}),m=g({color:"#272623",roughness:.85}),p=g({color:"#f4f0e8",roughness:.72}),S=g({color:"#111111",roughness:.6}),v=g({color:"#ff7a00",toneMapped:!1},!0),x=g({color:"#ff9b35",transparent:!0,opacity:.6,toneMapped:!1},!0);h.add(_);let A=null;function b(tt,ft,pt,U,j=a,Y=!0){let J=new Nt(Y?f:d,U);return J.scale.set(tt,ft,pt),j.add(J),J}function w(tt,ft,pt,U,j=a){let Y=new I(...tt),J=new I(...ft),O=J.clone().sub(Y),$=b(pt,O.length(),pt,U,j,!1);return $.position.copy(Y).add(J).multiplyScalar(.5),$.quaternion.setFromUnitVectors(new I(0,1,0),O.normalize()),$}if(!n){A=aa(e,a),a.add(new or("#fff4e5","#5d4937",1.4));let tt=new Oi("#fff6e8",2.5);tt.position.set(-4,7,6),a.add(tt);let ft=new Oi("#ff9c44",.45);ft.position.set(5,4,-4),a.add(ft);let pt=new Oi("#ffffff",.5);pt.position.set(3,2,7),a.add(pt)}let T=new Kt,M=new Kt;a.add(T),T.add(M);let y=oa({size:1.65,software:n,orange:_});M.add(y.group),nn.dataset.cubeDesign="premium-modular";let C=new xe(f,_,125);C.instanceMatrix.setUsage(Hn),C.frustumCulled=!1,M.add(C);let F=kh(n?3:r.grid);C.count=F.count;let z=new Zn(1.6,n?10:28,n?7:18);l.add(z);let V=new Nt(z,_);M.add(V),V.visible=!1;let K=new Kt;M.add(K);let N=1.02;for(let[tt,ft]of[[[-N,-N,-N],[N,-N,-N]],[[-N,N,-N],[N,N,-N]],[[-N,-N,N],[N,-N,N]],[[-N,N,N],[N,N,N]],[[-N,-N,-N],[-N,N,-N]],[[N,-N,-N],[N,N,-N]],[[-N,-N,N],[-N,N,N]],[[N,-N,N],[N,N,N]],[[-N,-N,-N],[-N,-N,N]],[[N,-N,-N],[N,-N,N]],[[-N,N,-N],[-N,N,N]],[[N,N,-N],[N,N,N]]])w(tt,ft,.012,x,K);let nt=new Kt;a.add(nt);let G=[];for(let tt=0;tt<18;tt++){let ft=.35+tt%4*.34,pt=b(.68,ft,.68,tt%3===0?m:p,nt),U=tt*2.39996+.4,j=new I(Math.sign(Math.cos(U))*(2+Math.abs(Math.cos(U))*.9),-1.5+ft/2,-2.2-Math.abs(Math.sin(U))*1.2),Y=new I([-3.7,-2.5,-1.3,1.3,2.5,3.7][tt%6],-1.5+ft/2,-3.8+Math.floor(tt/6)*1.25);G.push({mesh:pt,height:ft,chaos:j,ordered:Y,angle:(tt%5-2)*.18})}let lt=new Kt;a.add(lt);let Q=[[-5,-1.49,3],[-3.3,-1.49,2.2],[-2,-1.49,.9],[-.7,-1.49,.35],[.4,-1.49,-.5],[1.1,-1.49,-1.1],[2.3,-1.49,-1.7],[3.1,-1.49,-2.6]],dt=new ls(Q.map(tt=>new I(...tt))),St=[];if(n){let tt=dt.getPoints(24),ft=g({color:"#ff7a00",transparent:!0,opacity:.08},!0);for(let pt=0;pt<tt.length-1;pt++)St.push(w(tt[pt].toArray(),tt[pt+1].toArray(),.045,v,lt)),w(tt[pt].toArray(),tt[pt+1].toArray(),.14,ft,lt)}else{let tt=new fi(dt,64,.025,6,!1);l.add(tt),lt.add(new Nt(tt,v));let ft=new fi(dt,48,.08,6,!1);l.add(ft),lt.add(new Nt(ft,g({color:"#ff7a00",transparent:!0,opacity:.07,depthWrite:!1},!0)))}T.traverse(tt=>{tt.isMesh&&(tt.renderOrder=Math.max(2,tt.renderOrder))});let k=document.createElement("canvas");k.width=k.height=64;let D=k.getContext("2d"),B=D.createRadialGradient(32,32,1,32,32,32);B.addColorStop(0,"#00000060"),B.addColorStop(1,"#00000000"),D.fillStyle=B,D.fillRect(0,0,64,64);let q=new Ge(k);u.add(q);let L=g({map:q,transparent:!0,depthWrite:!1},!0),st=new Ue(3.6,3.6);l.add(st);let xt=new Nt(st,L);xt.rotation.x=-Math.PI/2,xt.position.y=-1.51,xt.userData.skipSoftware=!0,a.add(xt);let At=new Kt;a.add(At);let Tt=[[0,0,0],[-2,1,-.5],[2,.8,-.1],[-1.6,-.65,1.2],[1.8,-.65,1.1],[-.7,1.5,-1.4],[.6,-.85,-1.1]];Tt.slice(1).forEach((tt,ft)=>{let pt=b(.3,.3,.3,ft%2?p:_,At);pt.position.set(...tt),pt.rotation.y=ft*.5});for(let[tt,ft]of[[0,1],[0,2],[0,3],[0,4],[1,5],[2,5],[3,6],[4,6]])w(Tt[tt],Tt[ft],.025,v,At);let vt=new Kt;a.add(vt),vt.position.set(3.5,.1,-3.1),vt.rotation.y=-.12;let kt=g({color:"#fff7df",toneMapped:!1},!0);b(.16,3.8,.25,v,vt).position.x=-1.14,b(.16,3.8,.25,v,vt).position.x=1.14,b(2.4,.16,.25,v,vt).position.y=1.82,b(2.12,3.52,.04,kt,vt,!1).position.set(0,-.02,-.12),b(2.5,.1,1.4,p,vt).position.set(0,-1.84,.4);let Vt=Hf(),Ft=new he,Rt=new I,Zt=Cd(s),Pt=0,P=0,E=!1,Z=0,yt=0,bt=0,ht=0,gt=0,_t=0;function Mt(){o=innerWidth<=700,Zt.invalidate(),Pt=P=0,i=Xr(),r=sa[i],nn.dataset.quality=i,e.setPixelRatio(Math.min(devicePixelRatio||1,r.dpr,n?1.25:2)),F=kh(n?3:r.grid),C.count=F.count,nn.dataset.microcubes=String(C.count),nn.dataset.graphicsInitialized="true"}let Bt=vd({scene:a,software:n,quality:i}),rt=Sd({scene:a,software:n,quality:i}),ut=Ed({scene:a,software:n,quality:i}),Dt=Rd({scene:a,software:n,quality:i}),ct=Ad({scene:a,software:n,quality:i});Mt(),addEventListener("resize",Mt,{passive:!0}),addEventListener("portfolio:quality",Mt),matchMedia("(hover:hover) and (pointer:fine)").matches&&addEventListener("pointermove",tt=>{gt=(tt.clientX/innerWidth-.5)*.1,_t=(tt.clientY/innerHeight-.5)*.05},{passive:!0});function mt(tt){if(E||(yt=requestAnimationFrame(mt),document.hidden||nn.classList.contains("reduced-motion")))return;let ft=1e3/(n?30:r.fps);if(tt-Z<ft-.5)return;Z=tt-(tt-Z)%ft;let pt=Zt.read();if(!pt){nn.dataset.cinemaImmersive="false";return}nn.dataset.cinemaImmersive=String(pt.id==="problema"&&pt.rect.top<=2&&pt.rect.bottom>Math.min(innerHeight*.45,300)),(Pt!==pt.width||P!==pt.height)&&(Pt=pt.width,P=pt.height,e.setSize(Pt,P,!1),c.aspect=Pt/P);let U=performance.now(),j=pt.id,Y=pt.progress,J=Vt.seek(j,Y),O=Pt/P;s.style.setProperty("--scene-opacity","1"),nn.dataset.morphShape=J.shape.toFixed(3),nn.dataset.sceneOrder=J.order.toFixed(3),c.clearViewOffset(),Rt.set(0,-.3,0);let $=Math.max(4,4.4/O);if(j==="transformacao"&&(Rt.y=.25,$=Math.max(4.5,6.8/O)),j==="inteligencia"&&($=Math.max(4.5,5.7/O)),j==="contato"&&(Rt.set(1.15,-.2,-1.1),$=Math.max(5.3,8.5/O)),j==="processo"){J.actorScale=1,$=o?2.9/O:3.25;let Ht=[...document.querySelectorAll(".process-node")],ot=Ht[0].getBoundingClientRect(),Lt=Ht.at(-1).getBoundingClientRect(),ye=Math.max(0,Math.min(1,(Y-.1)/.8)),ae=o?.5:(ot.x+ot.width/2+(Lt.x-ot.x)*ye-pt.rect.left)/Pt,mn=o?Math.max(.1,Math.min(.85,(ot.y+ot.height/2+(Lt.y-ot.y)*ye-pt.rect.top)/P)):.48;c.setViewOffset(Pt,P,(.5-ae)*Pt,(.5-mn)*P,Pt,P)}let Et=$/(2*Math.tan(He.degToRad(c.fov/2)));c.position.set(J.cx+gt,J.cy+_t,J.cz).sub(Rt).normalize().multiplyScalar(Et).add(Rt);let It=Wl(Y);if(Bt.group.visible=j==="problema",rt.group.visible=j==="projetos",ut.group.visible=j==="solucoes",Dt.group.visible=j==="inteligencia",ct.group.visible=j==="resultado",j==="problema"){let ot=Math.max(6.4,5.8/O)*It.zoom/(2*Math.tan(He.degToRad(c.fov/2)));Rt.set(...It.focus);let Lt=.52+Y*.3;c.position.set(Math.sin(Lt)*.77,.78,Math.cos(Lt)*.9).normalize().multiplyScalar(ot).add(Rt)}if(j==="projetos"){let Ht=ca(Y),Lt=Math.max(7,6.3/O)*(1-Ht.cameraDock*.16)/(2*Math.tan(He.degToRad(c.fov/2)));Rt.set(0,1.1-Ht.cameraDock*.6,.18),c.position.set(.18-Ht.cameraDock*.13,.2+Math.sin(Ht.local*Math.PI)*.035,1).normalize().multiplyScalar(Lt).add(Rt)}if(c.lookAt(Rt),c.updateProjectionMatrix(),T.position.set(J.actorX,J.actorY+(j==="inicio"?Math.sin(tt*8e-4)*.018:0),J.actorZ),T.rotation.y=J.yaw+(j==="inicio"?Math.sin(tt*7e-4)*.075:0),T.scale.setScalar(J.actorScale),j==="problema"){let Ht=Bt.update(Y,tt,c);T.position.set(...Ht.actor),T.position.y+=.3,T.scale.setScalar(.45),T.rotation.set(0,Ht.yaw,0)}else T.rotation.x=0;M.rotation.z=0;let at=zf(J.shape),wt=Math.max(0,1-Math.abs(J.shape-2)/.34),zt=Bf(J.shape),Jt=F.formations[zt.from],ue=F.formations[zt.to];if(y.update({fracture:at,spread:j==="problema"&&It.blocked?.2:j==="diagnostico"?Math.sin(Y*Math.PI)**2*.45:0}),C.visible=at>.005&&wt<.98,C.visible){let Ht=(1.65/F.n-.016)*(J.shape>1.2&&J.shape<3.7?.72:1);for(let ot=0;ot<C.count;ot++)Ft.position.set(Jt[ot][0]+(ue[ot][0]-Jt[ot][0])*zt.weight,Jt[ot][1]+(ue[ot][1]-Jt[ot][1])*zt.weight,Jt[ot][2]+(ue[ot][2]-Jt[ot][2])*zt.weight),Ft.rotation.set(ot%3*.23*at,ot%5*.3*at,ot%4*.13*at),(J.shape<.05||J.shape>3.95)&&Ft.rotation.set(0,0,0),Ft.scale.setScalar(Ht*at*(1-wt*.9)),Ft.updateMatrix(),C.setMatrixAt(ot,Ft.matrix);C.instanceMatrix.needsUpdate=!0}V.visible=wt>.01,V.scale.setScalar(wt),K.visible=J.wire>.02,K.scale.setScalar(Math.max(.01,J.wire)),nt.visible=J.props>.02&&j!=="inicio"&&j!=="problema",nt.scale.setScalar(Math.max(.01,J.props)),G.forEach((Ht,ot)=>{if(Ht.mesh.visible=ot<(j==="inicio"?3:n?8:r.blocks),Ht.mesh.scale.set(.68,Ht.height,.68),Ht.mesh.position.lerpVectors(Ht.chaos,Ht.ordered,J.order),j==="inicio"&&ot<3){let Lt=[[-2.05,-1.25,-.75],[1.9,-1.3,-1.6],[.6,-1.38,-3.2]];Ht.mesh.position.set(...Lt[ot]),Ht.mesh.scale.set(.64,ot===0?.48:.34,.64)}Ht.mesh.rotation.set(Ht.angle*(1-J.order),Ht.angle*2*(1-J.order),Ht.angle*(1-J.order))}),lt.visible=J.path>.02&&j!=="processo"&&j!=="problema",lt.scale.setScalar(Math.max(.02,J.path)),At.visible=J.network>.02,At.scale.setScalar(Math.max(.01,J.network)),vt.visible=J.portal>.02,vt.scale.setScalar(Math.max(.01,J.portal)),xt.visible=j!=="problema",xt.position.x=T.position.x,xt.position.z=T.position.z,xt.scale.setScalar(J.actorScale),L.opacity=(1-at*.6)*.85,T.visible=j!=="projetos"&&j!=="solucoes"&&j!=="inteligencia"&&j!=="resultado",j==="projetos"&&(nt.visible=lt.visible=At.visible=vt.visible=xt.visible=!1,rt.update(Y,tt,c)),j==="solucoes"&&(nt.visible=lt.visible=At.visible=vt.visible=xt.visible=!1,ut.update(Y,tt,c)),j==="inteligencia"&&(nt.visible=lt.visible=At.visible=vt.visible=xt.visible=!1,Dt.update(Y,tt,c,{width:Pt,height:P})),j==="resultado"&&(nt.visible=lt.visible=At.visible=vt.visible=xt.visible=!1,ct.update(Y,tt,c,{mobile:o})),n?e.render(a,c):(e.toneMappingExposure=j==="problema"?.88:j==="solucoes"?1.05:j==="inteligencia"?1.12:j==="resultado"?1.04:J.light*.92,e.render(a,c),nn.dataset.drawCalls=String(e.info.render.calls),nn.dataset.triangles=String(e.info.render.triangles)),s.style.visibility="visible",nn.dataset.frameMs=String(Math.round((performance.now()-U)*10)/10),s.classList.contains("is-ready")||(s.classList.add("is-ready"),nn.dataset.sceneReady="true"),bt++,ht||(ht=tt),tt-ht>1600&&(nn.dataset.fps=String(Math.round(bt*1e3/(tt-ht)*10)/10),bt=0,ht=tt)}t.addEventListener("webglcontextlost",tt=>{tt.preventDefault(),dispatchEvent(new Event("portfolio:graphics-fallback"))}),addEventListener("pagehide",tt=>{if(!tt.persisted){E=!0,cancelAnimationFrame(yt),removeEventListener("resize",Mt),removeEventListener("portfolio:quality",Mt),Zt.dispose(),Vt.dispose(),y.dispose(),Bt.dispose(),rt.dispose(),ut.dispose(),Dt.dispose(),ct.dispose(),A?.dispose();for(let ft of l)ft.dispose();for(let ft of h)ft.dispose();for(let ft of u)ft.dispose();e.dispose?.()}}),yt=requestAnimationFrame(mt)}})();
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
