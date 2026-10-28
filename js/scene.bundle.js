(()=>{var vl="170";var If=0,Nh=1,Lf=2;var Hu=1,Df=2,Kn=3,Mi=0,ke=1,Tn=2,yi=0,Cs=1,Oh=2,Fh=3,Bh=4,Uf=5,Gi=100,Nf=101,Of=102,Ff=103,Bf=104,zf=200,kf=201,Vf=202,Hf=203,Ka=204,Qa=205,Gf=206,Wf=207,Xf=208,qf=209,Yf=210,Zf=211,Jf=212,$f=213,Kf=214,ja=0,tc=1,ec=2,Ds=3,nc=4,ic=5,sc=6,rc=7,Gu=0,Qf=1,jf=2,vi=0,tp=1,ep=2,np=3,Pr=4,ip=5,sp=6,rp=7;var Wu=300,Us=301,Ns=302,oc=303,ac=304,Wo=306,cc=1e3,qi=1001,lc=1002,an=1003,op=1004;var $r=1005;var Nn=1006,xa=1007;var Yi=1008;var ei=1009,Xu=1010,qu=1011,Er=1012,Ml=1013,Zi=1014,On=1015,Ir=1016,Sl=1017,bl=1018,Os=1020,Yu=35902,Zu=1021,Ju=1022,An=1023,$u=1024,Ku=1025,Ps=1026,Fs=1027,El=1028,wl=1029,Qu=1030,Tl=1031;var Al=1033,Mo=33776,So=33777,bo=33778,Eo=33779,hc=35840,uc=35841,dc=35842,fc=35843,pc=36196,mc=37492,gc=37496,_c=37808,xc=37809,yc=37810,vc=37811,Mc=37812,Sc=37813,bc=37814,Ec=37815,wc=37816,Tc=37817,Ac=37818,Rc=37819,Cc=37820,Pc=37821,wo=36492,Ic=36494,Lc=36495,ju=36283,Dc=36284,Uc=36285,Nc=36286;var To=2300,Oc=2301,ya=2302,zh=2400,kh=2401,Vh=2402;var ap=3200,cp=3201;var td=0,lp=1,xi="",Ee="srgb",Ws="srgb-linear",Xo="linear",se="srgb";var ds=7680;var Hh=519,hp=512,up=513,dp=514,ed=515,fp=516,pp=517,mp=518,gp=519,Gh=35044,qo=35048;var Wh="300 es",jn=2e3,Ao=2001,Si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xh=1234567,yr=Math.PI/180,wr=180/Math.PI;function Xs(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[s&255]+Fe[s>>8&255]+Fe[s>>16&255]+Fe[s>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Ie(s,t,e){return Math.max(t,Math.min(e,s))}function Rl(s,t){return(s%t+t)%t}function _p(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function xp(s,t,e){return s!==t?(e-s)/(t-s):0}function vr(s,t,e){return(1-e)*s+e*t}function yp(s,t,e,n){return vr(s,t,1-Math.exp(-e*n))}function vp(s,t=1){return t-Math.abs(Rl(s,t*2)-t)}function Mp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Sp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function bp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ep(s,t){return s+Math.random()*(t-s)}function wp(s){return s*(.5-Math.random())}function Tp(s){s!==void 0&&(Xh=s);let t=Xh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ap(s){return s*yr}function Rp(s){return s*wr}function Cp(s){return(s&s-1)===0&&s!==0}function Pp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ip(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Lp(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*_,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*_,a*l);break;case"ZYZ":s.set(c*_,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function As(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function We(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var gn={DEG2RAD:yr,RAD2DEG:wr,generateUUID:Xs,clamp:Ie,euclideanModulo:Rl,mapLinear:_p,inverseLerp:xp,lerp:vr,damp:yp,pingpong:vp,smoothstep:Mp,smootherstep:Sp,randInt:bp,randFloat:Ep,randFloatSpread:wp,seededRandom:Tp,degToRad:Ap,radToDeg:Rp,isPowerOfTwo:Cp,ceilPowerOfTwo:Pp,floorPowerOfTwo:Ip,setQuaternionFromProperEuler:Lp,normalize:We,denormalize:As},Nt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],S=i[1],v=i[4],x=i[7],T=i[2],E=i[5],A=i[8];return r[0]=o*g+a*S+c*T,r[3]=o*m+a*v+c*E,r[6]=o*p+a*x+c*A,r[1]=l*g+h*S+u*T,r[4]=l*m+h*v+u*E,r[7]=l*p+h*x+u*A,r[2]=d*g+f*S+_*T,r[5]=d*m+f*v+_*E,r[8]=d*p+f*x+_*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*l-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*c)*g,t[5]=(i*r-a*e)*g,t[6]=f*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(va.makeScale(t,e)),this}rotate(t){return this.premultiply(va.makeRotation(-t)),this}translate(t,e){return this.premultiply(va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},va=new Gt;function nd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ro(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dp(){let s=Ro("canvas");return s.style.display="block",s}var qh={};function _r(s){s in qh||(qh[s]=!0,console.warn(s))}function Up(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Np(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Op(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var jt={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?Xo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Yh=[.64,.33,.3,.6,.15,.06],Zh=[.2126,.7152,.0722],Jh=[.3127,.329],$h=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kh=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[Ws]:{primaries:Yh,whitePoint:Jh,transfer:Xo,toXYZ:$h,fromXYZ:Kh,luminanceCoefficients:Zh,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:Yh,whitePoint:Jh,transfer:se,toXYZ:$h,fromXYZ:Kh,luminanceCoefficients:Zh,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}});var fs,Fc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fs===void 0&&(fs=Ro("canvas")),fs.width=t.width,fs.height=t.height;let n=fs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ro("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fp=0,Co=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Xs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ma(i[o].image)):r.push(Ma(i[o]))}else r=Ma(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ma(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bp=0,Ke=class s extends Si{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=qi,i=qi,r=Nn,o=Yi,a=An,c=ei,l=s.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Xs(),this.name="",this.source=new Co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cc:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case lc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cc:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case lc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Wu;Ke.DEFAULT_ANISOTROPY=1;var re=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,x=(f+1)/2,T=(p+1)/2,E=(h+d)/4,A=(u+g)/4,C=(_+m)/4;return v>x&&v>T?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=A/n):x>T?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=C/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=A/r,i=C/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-g)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bc=class extends Si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Co(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends Bc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Po=class extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var zc=class extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||c!==d||l!==f||h!==_){let m=1-a,p=c*d+l*f+h*_+u*g,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let T=Math.sqrt(v),E=Math.atan2(T,p*S);m=Math.sin(m*E)/T,a=Math.sin(a*E)/T}let x=a*S;if(c=c*m+d*x,l=l*m+f*x,h=h*m+_*x,u=u*m+g*x,m===1-a){let T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*f-l*d,t[e+1]=c*_+h*d+l*u-a*f,t[e+2]=l*_+h*f+a*d-c*u,t[e+3]=h*_-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sa.copy(this).projectOnVector(t),this.sub(Sa)}reflect(t){return this.sub(Sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sa=new L,Qh=new Rn,ii=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),Qr.subVectors(this.max,hr),ps.subVectors(t.a,hr),ms.subVectors(t.b,hr),gs.subVectors(t.c,hr),di.subVectors(ms,ps),fi.subVectors(gs,ms),Oi.subVectors(ps,gs);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Oi.z,Oi.y,di.z,0,-di.x,fi.z,0,-fi.x,Oi.z,0,-Oi.x,-di.y,di.x,0,-fi.y,fi.x,0,-Oi.y,Oi.x,0];return!ba(e,ps,ms,gs,Qr)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,ps,ms,gs,Qr))?!1:(jr.crossVectors(di,fi),e=[jr.x,jr.y,jr.z],ba(e,ps,ms,gs,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qn=[new L,new L,new L,new L,new L,new L,new L,new L],bn=new L,Kr=new ii,ps=new L,ms=new L,gs=new L,di=new L,fi=new L,Oi=new L,hr=new L,Qr=new L,jr=new L,Fi=new L;function ba(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Fi.fromArray(s,r);let a=i.x*Math.abs(Fi.x)+i.y*Math.abs(Fi.y)+i.z*Math.abs(Fi.z),c=t.dot(Fi),l=e.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var zp=new ii,ur=new L,Ea=new L,Ji=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);let e=ur.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ur,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(Ea)),this.expandByPoint(ur.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new L,wa=new L,to=new L,pi=new L,Ta=new L,eo=new L,Aa=new L,kc=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wa.copy(t).add(e).multiplyScalar(.5),to.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(wa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(to),a=pi.dot(this.direction),c=-pi.dot(to),l=pi.lengthSq(),h=Math.abs(1-o*o),u,d,f,_;if(h>0)if(u=o*c-a,d=o*a-c,_=r*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(wa).addScaledVector(to,d),f}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,i,r){Ta.subVectors(e,t),eo.subVectors(n,t),Aa.crossVectors(Ta,eo);let o=this.direction.dot(Aa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);let c=a*this.direction.dot(eo.crossVectors(pi,eo));if(c<0)return null;let l=a*this.direction.dot(Ta.cross(pi));if(l<0||c+l>o)return null;let h=-a*pi.dot(Aa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,_,g,m)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),o=1/_s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+_*l,e[5]=d-g*l,e[9]=-a*c,e[2]=g-d*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,_=l*h,g=l*u;e[0]=d+g*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=g+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,_=l*h,g=l*u;e[0]=d-g*a,e[4]=-o*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=_*l-f,e[8]=d*l+g,e[1]=c*u,e[5]=g*l+d,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){let d=o*c,f=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kp,t,Vp)}lookAt(t,e,n){let i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),mi.crossVectors(n,rn),mi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),mi.crossVectors(n,rn)),mi.normalize(),no.crossVectors(rn,mi),i[0]=mi.x,i[4]=no.x,i[8]=rn.x,i[1]=mi.y,i[5]=no.y,i[9]=rn.y,i[2]=mi.z,i[6]=no.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],S=n[3],v=n[7],x=n[11],T=n[15],E=i[0],A=i[4],C=i[8],M=i[12],y=i[1],P=i[5],z=i[9],O=i[13],G=i[2],J=i[6],D=i[10],Q=i[14],W=i[3],st=i[7],$=i[11],nt=i[15];return r[0]=o*E+a*y+c*G+l*W,r[4]=o*A+a*P+c*J+l*st,r[8]=o*C+a*z+c*D+l*$,r[12]=o*M+a*O+c*Q+l*nt,r[1]=h*E+u*y+d*G+f*W,r[5]=h*A+u*P+d*J+f*st,r[9]=h*C+u*z+d*D+f*$,r[13]=h*M+u*O+d*Q+f*nt,r[2]=_*E+g*y+m*G+p*W,r[6]=_*A+g*P+m*J+p*st,r[10]=_*C+g*z+m*D+p*$,r[14]=_*M+g*O+m*Q+p*nt,r[3]=S*E+v*y+x*G+T*W,r[7]=S*A+v*P+x*J+T*st,r[11]=S*C+v*z+x*D+T*$,r[15]=S*M+v*O+x*Q+T*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+g*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],S=u*m*l-g*d*l+g*c*f-a*m*f-u*c*p+a*d*p,v=_*d*l-h*m*l-_*c*f+o*m*f+h*c*p-o*d*p,x=h*g*l-_*u*l+_*a*f-o*g*f-h*a*p+o*u*p,T=_*u*c-h*g*c-_*a*d+o*g*d+h*a*m-o*u*m,E=e*S+n*v+i*x+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return t[0]=S*A,t[1]=(g*d*r-u*m*r-g*i*f+n*m*f+u*i*p-n*d*p)*A,t[2]=(a*m*r-g*c*r+g*i*l-n*m*l-a*i*p+n*c*p)*A,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*A,t[4]=v*A,t[5]=(h*m*r-_*d*r+_*i*f-e*m*f-h*i*p+e*d*p)*A,t[6]=(_*c*r-o*m*r-_*i*l+e*m*l+o*i*p-e*c*p)*A,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*A,t[8]=x*A,t[9]=(_*u*r-h*g*r-_*n*f+e*g*f+h*n*p-e*u*p)*A,t[10]=(o*g*r-_*a*r+_*n*l-e*g*l-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*A,t[12]=T*A,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*A,t[14]=(_*a*i-o*g*i-_*n*c+e*g*c+o*n*m-e*a*m)*A,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,_=r*u,g=o*h,m=o*u,p=a*u,S=c*l,v=c*h,x=c*u,T=n.x,E=n.y,A=n.z;return i[0]=(1-(g+p))*T,i[1]=(f+x)*T,i[2]=(_-v)*T,i[3]=0,i[4]=(f-x)*E,i[5]=(1-(d+p))*E,i[6]=(m+S)*E,i[7]=0,i[8]=(_+v)*A,i[9]=(m-S)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=_s.set(i[0],i[1],i[2]).length(),o=_s.set(i[4],i[5],i[6]).length(),a=_s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],En.copy(this);let l=1/r,h=1/o,u=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=jn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,_;if(a===jn)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ao)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=jn){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h,_,g;if(a===jn)_=(o+r)*u,g=-2*u;else if(a===Ao)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},_s=new L,En=new ee,kp=new L(0,0,0),Vp=new L(1,1,1),mi=new L,no=new L,rn=new L,jh=new ee,tu=new Rn,mn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tu.setFromEuler(this),this.setFromQuaternion(tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var Io=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hp=0,eu=new L,xs=new Rn,Zn=new ee,io=new L,dr=new L,Gp=new L,Wp=new Rn,nu=new L(1,0,0),iu=new L(0,1,0),su=new L(0,0,1),ru={type:"added"},Xp={type:"removed"},ys={type:"childadded",child:null},Ra={type:"childremoved",child:null},fe=class s extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new mn,n=new Rn,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new Gt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(nu,t)}rotateY(t){return this.rotateOnAxis(iu,t)}rotateZ(t){return this.rotateOnAxis(su,t)}translateOnAxis(t,e){return eu.copy(t).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nu,t)}translateY(t){return this.translateOnAxis(iu,t)}translateZ(t){return this.translateOnAxis(su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?io.copy(t):io.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(dr,io,this.up):Zn.lookAt(io,dr,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),xs.setFromRotationMatrix(Zn),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ru),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xp),Ra.child=t,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ru),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,Gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Wp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};fe.DEFAULT_UP=new L(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new L,Jn=new L,Ca=new L,$n=new L,vs=new L,Ms=new L,ou=new L,Pa=new L,Ia=new L,La=new L,Da=new re,Ua=new re,Na=new re,Wi=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),wn.subVectors(t,e),i.cross(wn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){wn.subVectors(i,e),Jn.subVectors(n,e),Ca.subVectors(t,e);let o=wn.dot(wn),a=wn.dot(Jn),c=wn.dot(Ca),l=Jn.dot(Jn),h=Jn.dot(Ca),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(o,$n.y),c.addScaledVector(a,$n.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Da.setScalar(0),Ua.setScalar(0),Na.setScalar(0),Da.fromBufferAttribute(t,e),Ua.fromBufferAttribute(t,n),Na.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Da,r.x),o.addScaledVector(Ua,r.y),o.addScaledVector(Na,r.z),o}static isFrontFacing(t,e,n,i){return wn.subVectors(n,e),Jn.subVectors(t,e),wn.cross(Jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),wn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;vs.subVectors(i,n),Ms.subVectors(r,n),Pa.subVectors(t,n);let c=vs.dot(Pa),l=Ms.dot(Pa);if(c<=0&&l<=0)return e.copy(n);Ia.subVectors(t,i);let h=vs.dot(Ia),u=Ms.dot(Ia);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(vs,o);La.subVectors(t,r);let f=vs.dot(La),_=Ms.dot(La);if(_>=0&&f<=_)return e.copy(r);let g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Ms,a);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return ou.subVectors(r,i),a=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(ou,a);let p=1/(m+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(vs,o).addScaledVector(Ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},so={h:0,s:0,l:0};function Oa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=Rl(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Oa(o,r,t+1/3),this.g=Oa(o,r,t),this.b=Oa(o,r,t-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let n=id[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return jt.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ie(Be.r*255,0,255))*65536+Math.round(Ie(Be.g*255,0,255))*256+Math.round(Ie(Be.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Be.copy(this),e);let n=Be.r,i=Be.g,r=Be.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ee){jt.fromWorkingColorSpace(Be.copy(this),t);let e=Be.r,n=Be.g,i=Be.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(so);let n=vr(gi.h,so.h,e),i=vr(gi.s,so.s,e),r=vr(gi.l,so.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new Bt;Bt.NAMES=id;var qp=0,$i=class extends Si{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Xs(),this.name="",this.blending=Cs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=Qa,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Qa&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ye=class extends $i{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new L,ro=new Nt,cn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gh,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ro.fromBufferAttribute(this,e),ro.applyMatrix3(t),this.setXY(e,ro.x,ro.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=As(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=As(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=As(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=As(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=As(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),i=We(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),i=We(i,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gh&&(t.usage=this.usage),t}};var Lo=class extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Do=class extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qe=class extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yp=0,pn=new ee,Fa=new fe,Ss=new L,on=new ii,fr=new ii,Pe=new L,si=class s extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nd(t)?Do:Lo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Fa.lookAt(t),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qe(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(on.min,fr.min),on.expandByPoint(Pe),Pe.addVectors(on.max,fr.max),on.expandByPoint(Pe)):(on.expandByPoint(fr.min),on.expandByPoint(fr.max))}on.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Pe.fromBufferAttribute(a,l),c&&(Ss.fromBufferAttribute(t,l),Pe.add(Ss)),i=Math.max(i,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new L,c[C]=new L;let l=new L,h=new L,u=new L,d=new Nt,f=new Nt,_=new Nt,g=new L,m=new L;function p(C,M,y){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,M),_.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(d),_.sub(d);let P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(P),a[C].add(g),a[M].add(g),a[y].add(g),c[C].add(m),c[M].add(m),c[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,M=S.length;C<M;++C){let y=S[C],P=y.start,z=y.count;for(let O=P,G=P+z;O<G;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let v=new L,x=new L,T=new L,E=new L;function A(C){T.fromBufferAttribute(i,C),E.copy(T);let M=a[C];v.copy(M),v.sub(T.multiplyScalar(T.dot(M))).normalize(),x.crossVectors(E,M);let P=x.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,P)}for(let C=0,M=S.length;C<M;++C){let y=S[C],P=y.start,z=y.count;for(let O=P,G=P+z;O<G;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*h;for(let p=0;p<h;p++)d[_++]=l[f++]}return new cn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},au=new ee,Bi=new kc,oo=new Ji,cu=new L,ao=new L,co=new L,lo=new L,Ba=new L,ho=new L,lu=new L,uo=new L,zt=class extends fe{constructor(t=new si,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){ho.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ba.fromBufferAttribute(u,t),o?ho.addScaledVector(Ba,h):ho.addScaledVector(Ba.sub(e),h))}e.add(ho)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(oo.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(oo,cu)===null||Bi.origin.distanceToSquared(cu)>(t.far-t.near)**2))&&(au.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(au),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,T=v;x<T;x+=3){let E=a.getX(x),A=a.getX(x+1),C=a.getX(x+2);i=fo(this,p,t,n,l,h,u,E,A,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let S=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);i=fo(this,o,t,n,l,h,u,S,v,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,T=v;x<T;x+=3){let E=x,A=x+1,C=x+2;i=fo(this,p,t,n,l,h,u,E,A,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let S=m,v=m+1,x=m+2;i=fo(this,o,t,n,l,h,u,S,v,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Zp(s,t,e,n,i,r,o,a){let c;if(t.side===ke?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Mi,a),c===null)return null;uo.copy(a),uo.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(uo);return l<e.near||l>e.far?null:{distance:l,point:uo.clone(),object:s}}function fo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,ao),s.getVertexPosition(c,co),s.getVertexPosition(l,lo);let h=Zp(s,t,e,n,ao,co,lo,lu);if(h){let u=new L;Wi.getBarycoord(lu,ao,co,lo,u),i&&(h.uv=Wi.getInterpolatedAttribute(i,a,c,l,u,new Nt)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,a,c,l,u,new Nt)),o&&(h.normal=Wi.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};Wi.getNormal(ao,co,lo,d.normal),h.face=d,h.barycoord=u}return h}var ye=class s extends si{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(u,2));function _(g,m,p,S,v,x,T,E,A,C,M){let y=x/A,P=T/C,z=x/2,O=T/2,G=E/2,J=A+1,D=C+1,Q=0,W=0,st=new L;for(let $=0;$<D;$++){let nt=$*P-O;for(let ct=0;ct<J;ct++){let pt=ct*y-z;st[g]=pt*S,st[m]=nt*v,st[p]=G,l.push(st.x,st.y,st.z),st[g]=0,st[m]=0,st[p]=E>0?1:-1,h.push(st.x,st.y,st.z),u.push(ct/A),u.push(1-$/C),Q+=1}}for(let $=0;$<C;$++)for(let nt=0;nt<A;nt++){let ct=d+nt+J*$,pt=d+nt+J*($+1),U=d+(nt+1)+J*($+1),k=d+(nt+1)+J*$;c.push(ct,pt,k),c.push(pt,U,k),W+=6}a.addGroup(f,W,M),f+=W,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Bs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Xe(s){let t={};for(let e=0;e<s.length;e++){let n=Bs(s[e]);for(let i in n)t[i]=n[i]}return t}function Jp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function sd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var $p={clone:Bs,merge:Xe},Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends $i{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=Jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Uo=class extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_i=new L,hu=new Nt,uu=new Nt,ze=class extends Uo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,hu,uu),e.subVectors(uu,hu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(yr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},bs=-90,Es=1,Vc=class extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ze(bs,Es,t,e);i.layers=this.layers,this.add(i);let r=new ze(bs,Es,t,e);r.layers=this.layers,this.add(r);let o=new ze(bs,Es,t,e);o.layers=this.layers,this.add(o);let a=new ze(bs,Es,t,e);a.layers=this.layers,this.add(a);let c=new ze(bs,Es,t,e);c.layers=this.layers,this.add(c);let l=new ze(bs,Es,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},No=class extends Ke{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Us,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Hc=class extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new No(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ye(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:yi});r.uniforms.tEquirect.value=e;let o=new zt(i,r),a=e.minFilter;return e.minFilter===Yi&&(e.minFilter=Nn),new Vc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},za=new L,jp=new L,tm=new Gt,Qn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=za.subVectors(n,e).cross(jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(za),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||tm.getNormalMatrix(t),i=this.coplanarPoint(za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new Ji,po=new L,Tr=class{constructor(t=new Qn,e=new Qn,n=new Qn,i=new Qn,r=new Qn,o=new Qn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],S=i[13],v=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+_,x+S).normalize(),n[3].setComponents(c-o,d-h,m-_,x-S).normalize(),n[4].setComponents(c-a,d-u,m-g,x-v).normalize(),e===jn)n[5].setComponents(c+a,d+u,m+g,x+v).normalize();else if(e===Ao)n[5].setComponents(a,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(po.x=i.normal.x>0?t.max.x:t.min.x,po.y=i.normal.y>0?t.max.y:t.min.y,po.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rd(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function em(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let g=u[f];s.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var ln=class s extends si{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let S=p*d-o;for(let v=0;v<l;v++){let x=v*u-r;_.push(x,-S,0),g.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let v=S+l*p,x=S+l*(p+1),T=S+1+l*(p+1),E=S+1+l*p;f.push(v,x,E),f.push(x,T,E)}this.setIndex(f),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(g,3)),this.setAttribute("uv",new qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
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
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
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
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
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
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mm=`#ifdef USE_IRIDESCENCE
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
#endif`,gm=`#ifdef USE_BUMPMAP
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wm=`#define PI 3.141592653589793
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
} // validated`,Tm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Am=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Um=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gm=`#ifdef USE_GRADIENTMAP
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
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jm=`PhysicalMaterial material;
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
#endif`,tg=`struct PhysicalMaterial {
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
}`,eg=`
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ug=`#if defined( USE_POINTS_UV )
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
#endif`,dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`#ifdef USE_MORPHTARGETS
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
#endif`,xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eg=`#ifdef USE_NORMALMAP
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
#endif`,wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kg=`float getShadowMask() {
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
}`,Vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
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
#endif`,Gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,Xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,e0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n0=`uniform sampler2D t2D;
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`#include <common>
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
}`,c0=`#if DEPTH_PACKING == 3200
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
}`,l0=`#define DISTANCE
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
}`,h0=`#define DISTANCE
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 diffuse;
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
}`,_0=`#define LAMBERT
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
}`,x0=`#define LAMBERT
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
}`,y0=`#define MATCAP
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
}`,v0=`#define MATCAP
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
}`,M0=`#define NORMAL
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
}`,S0=`#define NORMAL
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
}`,b0=`#define PHONG
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
}`,E0=`#define PHONG
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
}`,w0=`#define STANDARD
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
}`,T0=`#define STANDARD
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
}`,A0=`#define TOON
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
}`,R0=`#define TOON
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
}`,C0=`uniform float size;
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
}`,P0=`uniform vec3 diffuse;
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
}`,I0=`#include <common>
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
}`,L0=`uniform vec3 color;
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
}`,D0=`uniform float rotation;
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
}`,U0=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:om,alphatest_pars_fragment:am,aomap_fragment:cm,aomap_pars_fragment:lm,batching_pars_vertex:hm,batching_vertex:um,begin_vertex:dm,beginnormal_vertex:fm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:_m,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:ym,clipping_planes_vertex:vm,color_fragment:Mm,color_pars_fragment:Sm,color_pars_vertex:bm,color_vertex:Em,common:wm,cube_uv_reflection_fragment:Tm,defaultnormal_vertex:Am,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Pm,emissivemap_pars_fragment:Im,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Um,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Om,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:Zm,envmap_vertex:Bm,fog_vertex:zm,fog_pars_vertex:km,fog_fragment:Vm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Gm,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:qm,lights_pars_begin:Ym,lights_toon_fragment:Jm,lights_toon_pars_fragment:$m,lights_phong_fragment:Km,lights_phong_pars_fragment:Qm,lights_physical_fragment:jm,lights_physical_pars_fragment:tg,lights_fragment_begin:eg,lights_fragment_maps:ng,lights_fragment_end:ig,logdepthbuf_fragment:sg,logdepthbuf_pars_fragment:rg,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:ag,map_fragment:cg,map_pars_fragment:lg,map_particle_fragment:hg,map_particle_pars_fragment:ug,metalnessmap_fragment:dg,metalnessmap_pars_fragment:fg,morphinstance_vertex:pg,morphcolor_vertex:mg,morphnormal_vertex:gg,morphtarget_pars_vertex:_g,morphtarget_vertex:xg,normal_fragment_begin:yg,normal_fragment_maps:vg,normal_pars_fragment:Mg,normal_pars_vertex:Sg,normal_vertex:bg,normalmap_pars_fragment:Eg,clearcoat_normal_fragment_begin:wg,clearcoat_normal_fragment_maps:Tg,clearcoat_pars_fragment:Ag,iridescence_pars_fragment:Rg,opaque_fragment:Cg,packing:Pg,premultiplied_alpha_fragment:Ig,project_vertex:Lg,dithering_fragment:Dg,dithering_pars_fragment:Ug,roughnessmap_fragment:Ng,roughnessmap_pars_fragment:Og,shadowmap_pars_fragment:Fg,shadowmap_pars_vertex:Bg,shadowmap_vertex:zg,shadowmask_pars_fragment:kg,skinbase_vertex:Vg,skinning_pars_vertex:Hg,skinning_vertex:Gg,skinnormal_vertex:Wg,specularmap_fragment:Xg,specularmap_pars_fragment:qg,tonemapping_fragment:Yg,tonemapping_pars_fragment:Zg,transmission_fragment:Jg,transmission_pars_fragment:$g,uv_pars_fragment:Kg,uv_pars_vertex:Qg,uv_vertex:jg,worldpos_vertex:t0,background_vert:e0,background_frag:n0,backgroundCube_vert:i0,backgroundCube_frag:s0,cube_vert:r0,cube_frag:o0,depth_vert:a0,depth_frag:c0,distanceRGBA_vert:l0,distanceRGBA_frag:h0,equirect_vert:u0,equirect_frag:d0,linedashed_vert:f0,linedashed_frag:p0,meshbasic_vert:m0,meshbasic_frag:g0,meshlambert_vert:_0,meshlambert_frag:x0,meshmatcap_vert:y0,meshmatcap_frag:v0,meshnormal_vert:M0,meshnormal_frag:S0,meshphong_vert:b0,meshphong_frag:E0,meshphysical_vert:w0,meshphysical_frag:T0,meshtoon_vert:A0,meshtoon_frag:R0,points_vert:C0,points_frag:P0,shadow_vert:I0,shadow_frag:L0,sprite_vert:D0,sprite_frag:U0},xt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Un={basic:{uniforms:Xe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Xe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Xe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Xe([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Xe([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Xe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Xe([xt.points,xt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Xe([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Xe([xt.common,xt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Xe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Xe([xt.sprite,xt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Xe([xt.common,xt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Xe([xt.lights,xt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Un.physical={uniforms:Xe([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var mo={r:0,b:0,g:0},ki=new mn,N0=new ee;function O0(s,t,e,n,i,r,o){let a=new Bt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function _(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function g(S){let v=!1,x=_(S);x===null?p(a,c):x&&x.isColor&&(p(x,1),v=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,v){let x=_(v);x&&(x.isCubeTexture||x.mapping===Wo)?(h===void 0&&(h=new zt(new ye(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Bs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ki.copy(v.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(N0.makeRotationFromEuler(ki)),h.material.toneMapped=jt.getTransfer(x.colorSpace)!==se,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new zt(new ln(2,2),new Fn({name:"BackgroundMaterial",uniforms:Bs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=jt.getTransfer(x.colorSpace)!==se,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,v){S.getRGB(mo,sd(s)),n.buffers.color.setClear(mo.r,mo.g,mo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:g,addToRenderList:m}}function F0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(y,P,z,O,G){let J=!1,D=u(O,z,P);r!==D&&(r=D,l(r.object)),J=f(y,O,z,G),J&&_(y,O,z,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,x(y,P,z,O),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,P,z){let O=z.wireframe===!0,G=n[y.id];G===void 0&&(G={},n[y.id]=G);let J=G[P.id];J===void 0&&(J={},G[P.id]=J);let D=J[O];return D===void 0&&(D=d(c()),J[O]=D),D}function d(y){let P=[],z=[],O=[];for(let G=0;G<e;G++)P[G]=0,z[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:O,object:y,attributes:{},index:null}}function f(y,P,z,O){let G=r.attributes,J=P.attributes,D=0,Q=z.getAttributes();for(let W in Q)if(Q[W].location>=0){let $=G[W],nt=J[W];if(nt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),$===void 0||$.attribute!==nt||nt&&$.data!==nt.data)return!0;D++}return r.attributesNum!==D||r.index!==O}function _(y,P,z,O){let G={},J=P.attributes,D=0,Q=z.getAttributes();for(let W in Q)if(Q[W].location>=0){let $=J[W];$===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&($=y.instanceColor));let nt={};nt.attribute=$,$&&$.data&&(nt.data=$.data),G[W]=nt,D++}r.attributes=G,r.attributesNum=D,r.index=O}function g(){let y=r.newAttributes;for(let P=0,z=y.length;P<z;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){let z=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;z[y]=1,O[y]===0&&(s.enableVertexAttribArray(y),O[y]=1),G[y]!==P&&(s.vertexAttribDivisor(y,P),G[y]=P)}function S(){let y=r.newAttributes,P=r.enabledAttributes;for(let z=0,O=P.length;z<O;z++)P[z]!==y[z]&&(s.disableVertexAttribArray(z),P[z]=0)}function v(y,P,z,O,G,J,D){D===!0?s.vertexAttribIPointer(y,P,z,G,J):s.vertexAttribPointer(y,P,z,O,G,J)}function x(y,P,z,O){g();let G=O.attributes,J=z.getAttributes(),D=P.defaultAttributeValues;for(let Q in J){let W=J[Q];if(W.location>=0){let st=G[Q];if(st===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){let $=st.normalized,nt=st.itemSize,ct=t.get(st);if(ct===void 0)continue;let pt=ct.buffer,U=ct.type,k=ct.bytesPerElement,ot=U===s.INT||U===s.UNSIGNED_INT||st.gpuType===Ml;if(st.isInterleavedBufferAttribute){let K=st.data,_t=K.stride,St=st.offset;if(K.isInstancedInterleavedBuffer){for(let Dt=0;Dt<W.locationSize;Dt++)p(W.location+Dt,K.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Dt=0;Dt<W.locationSize;Dt++)m(W.location+Dt);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let Dt=0;Dt<W.locationSize;Dt++)v(W.location+Dt,nt/W.locationSize,U,$,_t*k,(St+nt/W.locationSize*Dt)*k,ot)}else{if(st.isInstancedBufferAttribute){for(let K=0;K<W.locationSize;K++)p(W.location+K,st.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let K=0;K<W.locationSize;K++)m(W.location+K);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let K=0;K<W.locationSize;K++)v(W.location+K,nt/W.locationSize,U,$,nt*k,nt/W.locationSize*K*k,ot)}}else if(D!==void 0){let $=D[Q];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(W.location,$);break;case 3:s.vertexAttrib3fv(W.location,$);break;case 4:s.vertexAttrib4fv(W.location,$);break;default:s.vertexAttrib1fv(W.location,$)}}}}S()}function T(){C();for(let y in n){let P=n[y];for(let z in P){let O=P[z];for(let G in O)h(O[G].object),delete O[G];delete P[z]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let z in P){let O=P[z];for(let G in O)h(O[G].object),delete O[G];delete P[z]}delete n[y.id]}function A(y){for(let P in n){let z=n[P];if(z[y.id]===void 0)continue;let O=z[y.id];for(let G in O)h(O[G].object),delete O[G];delete z[y.id]}}function C(){M(),o=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function B0(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function z0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==An&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===Ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ei&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==On&&!C)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:T,maxSamples:E}}function k0(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Qn,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,v=S*4,x=p.clippingState||null;c.value=x,x=h(_,d,v,f);for(let T=0;T!==v;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=c.value,_!==!0||m===null){let p=f+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==g;++v,x+=4)o.copy(u[v]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function V0(s){let t=new WeakMap;function e(o,a){return a===oc?o.mapping=Us:a===ac&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===oc||a===ac)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Hc(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var zs=class extends Uo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rs=4,du=[.125,.215,.35,.446,.526,.582],Xi=20,ka=new zs,fu=new Bt,Va=null,Ha=0,Ga=0,Wa=!1,Hi=(1+Math.sqrt(5))/2,ws=1/Hi,pu=[new L(-Hi,ws,0),new L(Hi,ws,0),new L(-ws,0,Hi),new L(ws,0,Hi),new L(0,Hi,-ws),new L(0,Hi,ws),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],ks=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Va=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Va,Ha,Ga),this._renderer.xr.enabled=Wa,t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Va=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Ir,format:An,colorSpace:Ws,depthBuffer:!1},i=mu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H0(r)),this._blurMaterial=G0(r,t,e)}return i}_compileMaterial(t){let e=new zt(this._lodPlanes[0],t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,i){let a=new ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(fu),h.toneMapping=vi,h.autoClear=!1;let f=new Ye({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),_=new zt(new ye,f),g=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(fu),g=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;go(i,S*v,p>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Us||t.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_u()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;go(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pu[(i-r-1)%pu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new zt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Xi;m>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);let p=[],S=0;for(let A=0;A<Xi;++A){let C=A/g,M=Math.exp(-C*C/2);p.push(M),A===0?S+=M:A<m&&(S+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;let x=this._sizeLods[i],T=3*x*(i>v-Rs?i-v+Rs:0),E=4*(this._cubeSize-x);go(e,T,E,3*x,2*x),c.setRenderTarget(e),c.render(u,ka)}};function H0(s){let t=[],e=[],n=[],i=s,r=s-Rs+1+du.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Rs?c=du[o-s+Rs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*f),v=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,C=E>2?0:-1,M=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];S.set(M,g*_*E),v.set(d,m*_*E);let y=[E,E,E,E,E,E];x.set(y,p*_*E)}let T=new si;T.setAttribute("position",new cn(S,g)),T.setAttribute("uv",new cn(v,m)),T.setAttribute("faceIndex",new cn(x,p)),t.push(T),i>Rs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function mu(s,t,e){let n=new ni(s,t,e);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function G0(s,t,e){let n=new Float32Array(Xi),i=new L(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function gu(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function _u(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Cl(){return`

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
	`}function W0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===oc||c===ac,h=c===Us||c===Ns;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ks(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new ks(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function X0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&_r("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function q0(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);for(let _ in d.morphAttributes){let g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let _ in d)t.update(d[_],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let _ in f){let g=f[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let S=f.array;g=f.version;for(let v=0,x=S.length;v<x;v+=3){let T=S[v+0],E=S[v+1],A=S[v+2];d.push(T,E,E,A,A,T)}}else if(_!==void 0){let S=_.array;g=_.version;for(let v=0,x=S.length/3-1;v<x;v+=3){let T=v+0,E=v+1,A=v+2;d.push(T,E,E,A,A,T)}}else return;let m=new(nd(d)?Do:Lo)(d,1);m.version=g;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Y0(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,d*o,_),e.update(f,n,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function u(d,f,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let p=0;for(let S=0;S<_;S++)p+=f[S]*g[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Z0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function J0(s,t,e){let n=new WeakMap,i=new re;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let M=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],v=0;f===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let x=a.attributes.position.count*v,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*T*4*u),A=new Po(E,x,T,u);A.type=On,A.needsUpdate=!0;let C=v*4;for(let y=0;y<u;y++){let P=m[y],z=p[y],O=S[y],G=x*T*4*y;for(let J=0;J<P.count;J++){let D=J*C;f===!0&&(i.fromBufferAttribute(P,J),E[G+D+0]=i.x,E[G+D+1]=i.y,E[G+D+2]=i.z,E[G+D+3]=0),_===!0&&(i.fromBufferAttribute(z,J),E[G+D+4]=i.x,E[G+D+5]=i.y,E[G+D+6]=i.z,E[G+D+7]=0),g===!0&&(i.fromBufferAttribute(O,J),E[G+D+8]=i.x,E[G+D+9]=i.y,E[G+D+10]=i.z,E[G+D+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new Nt(x,T)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];let _=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function $0(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Oo=class extends Ke{constructor(t,e,n,i,r,o,a,c,l,h=Ps){if(h!==Ps&&h!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ps&&(n=Zi),n===void 0&&h===Fs&&(n=Os),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},od=new Ke,xu=new Oo(1,1),ad=new Po,cd=new zc,ld=new No,yu=[],vu=[],Mu=new Float32Array(16),Su=new Float32Array(9),bu=new Float32Array(4);function qs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=yu[i];if(r===void 0&&(r=new Float32Array(i),yu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function we(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Te(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Yo(s,t){let e=vu[t];e===void 0&&(e=new Int32Array(t),vu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function K0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Q0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}function j0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}function t_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}function e_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;bu.set(n),s.uniformMatrix2fv(this.addr,!1,bu),Te(e,n)}}function n_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Su.set(n),s.uniformMatrix3fv(this.addr,!1,Su),Te(e,n)}}function i_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,n))return;Mu.set(n),s.uniformMatrix4fv(this.addr,!1,Mu),Te(e,n)}}function s_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function r_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}function o_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}function a_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}function c_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function l_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}function h_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}function u_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}function d_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(xu.compareFunction=ed,r=xu):r=od,e.setTexture2D(t||r,i)}function f_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cd,i)}function p_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ld,i)}function m_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ad,i)}function g_(s){switch(s){case 5126:return K0;case 35664:return Q0;case 35665:return j0;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return o_;case 35669:case 35673:return a_;case 5125:return c_;case 36294:return l_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}function __(s,t){s.uniform1fv(this.addr,t)}function x_(s,t){let e=qs(t,this.size,2);s.uniform2fv(this.addr,e)}function y_(s,t){let e=qs(t,this.size,3);s.uniform3fv(this.addr,e)}function v_(s,t){let e=qs(t,this.size,4);s.uniform4fv(this.addr,e)}function M_(s,t){let e=qs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function S_(s,t){let e=qs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function b_(s,t){let e=qs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function E_(s,t){s.uniform1iv(this.addr,t)}function w_(s,t){s.uniform2iv(this.addr,t)}function T_(s,t){s.uniform3iv(this.addr,t)}function A_(s,t){s.uniform4iv(this.addr,t)}function R_(s,t){s.uniform1uiv(this.addr,t)}function C_(s,t){s.uniform2uiv(this.addr,t)}function P_(s,t){s.uniform3uiv(this.addr,t)}function I_(s,t){s.uniform4uiv(this.addr,t)}function L_(s,t,e){let n=this.cache,i=t.length,r=Yo(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||od,r[o])}function D_(s,t,e){let n=this.cache,i=t.length,r=Yo(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||cd,r[o])}function U_(s,t,e){let n=this.cache,i=t.length,r=Yo(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ld,r[o])}function N_(s,t,e){let n=this.cache,i=t.length,r=Yo(e,i);we(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ad,r[o])}function O_(s){switch(s){case 5126:return __;case 35664:return x_;case 35665:return y_;case 35666:return v_;case 35674:return M_;case 35675:return S_;case 35676:return b_;case 5124:case 35670:return E_;case 35667:case 35671:return w_;case 35668:case 35672:return T_;case 35669:case 35673:return A_;case 5125:return R_;case 36294:return C_;case 36295:return P_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return N_}}var Gc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=g_(e.type)}},Wc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O_(e.type)}},Xc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Xa=/(\w+)(\])?(\[|\.)?/g;function Eu(s,t){s.seq.push(t),s.map[t.id]=t}function F_(s,t,e){let n=s.name,i=n.length;for(Xa.lastIndex=0;;){let r=Xa.exec(n),o=Xa.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Eu(e,l===void 0?new Gc(a,s,t):new Wc(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Xc(a),Eu(e,u)),e=u}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);F_(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function wu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var B_=37297,z_=0;function k_(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Tu=new Gt;function V_(s){jt._getMatrix(Tu,jt.workingColorSpace,s);let t=`mat3( ${Tu.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(s)){case Xo:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Au(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+k_(s.getShaderSource(t),o)}else return i}function H_(s,t){let e=V_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function G_(s,t){let e;switch(t){case tp:e="Linear";break;case ep:e="Reinhard";break;case np:e="Cineon";break;case Pr:e="ACESFilmic";break;case sp:e="AgX";break;case rp:e="Neutral";break;case ip:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _o=new L;function W_(){jt.getLuminanceCoefficients(_o);let s=_o.x.toFixed(4),t=_o.y.toFixed(4),e=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function q_(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Y_(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function xr(s){return s!==""}function Ru(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(s){return s.replace(Z_,$_)}var J_=new Map;function $_(s,t){let e=Zt[t];if(e===void 0){let n=J_.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qc(e)}var K_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(s){return s.replace(K_,Q_)}function Q_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Iu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function j_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Df?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function tx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Us:case Ns:t="ENVMAP_TYPE_CUBE";break;case Wo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ex(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ns:t="ENVMAP_MODE_REFRACTION";break}return t}function nx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gu:t="ENVMAP_BLENDING_MULTIPLY";break;case Qf:t="ENVMAP_BLENDING_MIX";break;case jf:t="ENVMAP_BLENDING_ADD";break}return t}function ix(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sx(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=j_(e),l=tx(e),h=ex(e),u=nx(e),d=ix(e),f=X_(e),_=q_(r),g=i.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==vi?G_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,H_("linearToOutputTexel",e.outputColorSpace),W_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),o=qc(o),o=Ru(o,e),o=Cu(o,e),a=qc(a),a=Ru(a,e),a=Cu(a,e),o=Pu(o),a=Pu(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=S+m+o,x=S+p+a,T=wu(i,i.VERTEX_SHADER,v),E=wu(i,i.FRAGMENT_SHADER,x);i.attachShader(g,T),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(P){if(s.debug.checkShaderErrors){let z=i.getProgramInfoLog(g).trim(),O=i.getShaderInfoLog(T).trim(),G=i.getShaderInfoLog(E).trim(),J=!0,D=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,T,E);else{let Q=Au(i,T,"vertex"),W=Au(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+Q+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||G==="")&&(D=!1);D&&(P.diagnostics={runnable:J,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(T),i.deleteShader(E),C=new Ls(i,g),M=Y_(i,g)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,B_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=E,this}var rx=0,Yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zc(t),e.set(t,n)),n}},Zc=class{constructor(t){this.id=rx++,this.code=t,this.usedTimes=0}};function ox(s,t,e,n,i,r,o){let a=new Io,c=new Yc,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,P,z,O){let G=z.fog,J=O.geometry,D=M.isMeshStandardMaterial?z.environment:null,Q=(M.isMeshStandardMaterial?e:t).get(M.envMap||D),W=Q&&Q.mapping===Wo?Q.image.height:null,st=_[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let $=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,nt=$!==void 0?$.length:0,ct=0;J.morphAttributes.position!==void 0&&(ct=1),J.morphAttributes.normal!==void 0&&(ct=2),J.morphAttributes.color!==void 0&&(ct=3);let pt,U,k,ot;if(st){let Yt=Un[st];pt=Yt.vertexShader,U=Yt.fragmentShader}else pt=M.vertexShader,U=M.fragmentShader,c.update(M),k=c.getVertexShaderID(M),ot=c.getFragmentShaderID(M);let K=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),St=O.isInstancedMesh===!0,Dt=O.isBatchedMesh===!0,Ft=!!M.map,bt=!!M.matcap,Wt=!!Q,N=!!M.aoMap,Ce=!!M.lightMap,kt=!!M.bumpMap,Ut=!!M.normalMap,Et=!!M.displacementMap,$t=!!M.emissiveMap,wt=!!M.metalnessMap,R=!!M.roughnessMap,b=M.anisotropy>0,H=M.clearcoat>0,et=M.dispersion>0,at=M.iridescence>0,j=M.sheen>0,Tt=M.transmission>0,mt=b&&!!M.anisotropyMap,yt=H&&!!M.clearcoatMap,Jt=H&&!!M.clearcoatNormalMap,dt=H&&!!M.clearcoatRoughnessMap,vt=at&&!!M.iridescenceMap,it=at&&!!M.iridescenceThicknessMap,X=j&&!!M.sheenColorMap,Z=j&&!!M.sheenRoughnessMap,gt=!!M.specularMap,rt=!!M.specularColorMap,Lt=!!M.specularIntensityMap,I=Tt&&!!M.transmissionMap,lt=Tt&&!!M.thicknessMap,V=!!M.gradientMap,tt=!!M.alphaMap,ht=M.alphaTest>0,ut=!!M.alphaHash,At=!!M.extensions,Xt=vi;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Xt=s.toneMapping);let Qt={shaderID:st,shaderType:M.type,shaderName:M.name,vertexShader:pt,fragmentShader:U,defines:M.defines,customVertexShaderID:k,customFragmentShaderID:ot,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&O._colorsTexture!==null,instancing:St,instancingColor:St&&O.instanceColor!==null,instancingMorph:St&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ws,alphaToCoverage:!!M.alphaToCoverage,map:Ft,matcap:bt,envMap:Wt,envMapMode:Wt&&Q.mapping,envMapCubeUVHeight:W,aoMap:N,lightMap:Ce,bumpMap:kt,normalMap:Ut,displacementMap:d&&Et,emissiveMap:$t,normalMapObjectSpace:Ut&&M.normalMapType===lp,normalMapTangentSpace:Ut&&M.normalMapType===td,metalnessMap:wt,roughnessMap:R,anisotropy:b,anisotropyMap:mt,clearcoat:H,clearcoatMap:yt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:dt,dispersion:et,iridescence:at,iridescenceMap:vt,iridescenceThicknessMap:it,sheen:j,sheenColorMap:X,sheenRoughnessMap:Z,specularMap:gt,specularColorMap:rt,specularIntensityMap:Lt,transmission:Tt,transmissionMap:I,thicknessMap:lt,gradientMap:V,opaque:M.transparent===!1&&M.blending===Cs&&M.alphaToCoverage===!1,alphaMap:tt,alphaTest:ht,alphaHash:ut,combine:M.combine,mapUv:Ft&&g(M.map.channel),aoMapUv:N&&g(M.aoMap.channel),lightMapUv:Ce&&g(M.lightMap.channel),bumpMapUv:kt&&g(M.bumpMap.channel),normalMapUv:Ut&&g(M.normalMap.channel),displacementMapUv:Et&&g(M.displacementMap.channel),emissiveMapUv:$t&&g(M.emissiveMap.channel),metalnessMapUv:wt&&g(M.metalnessMap.channel),roughnessMapUv:R&&g(M.roughnessMap.channel),anisotropyMapUv:mt&&g(M.anisotropyMap.channel),clearcoatMapUv:yt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:it&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:X&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Z&&g(M.sheenRoughnessMap.channel),specularMapUv:gt&&g(M.specularMap.channel),specularColorMapUv:rt&&g(M.specularColorMap.channel),specularIntensityMapUv:Lt&&g(M.specularIntensityMap.channel),transmissionMapUv:I&&g(M.transmissionMap.channel),thicknessMapUv:lt&&g(M.thicknessMap.channel),alphaMapUv:tt&&g(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ut||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!J.attributes.uv&&(Ft||tt),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:_t,skinning:O.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:ct,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Ft&&M.map.isVideoTexture===!0&&jt.getTransfer(M.map.colorSpace)===se,decodeVideoTextureEmissive:$t&&M.emissiveMap.isVideoTexture===!0&&jt.getTransfer(M.emissiveMap.colorSpace)===se,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Tn,flipSided:M.side===ke,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:At&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&M.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function p(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(S(y,M),v(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function S(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){let y=_[M.type],P;if(y){let z=Un[y];P=$p.clone(z.uniforms)}else P=M.uniforms;return P}function T(M,y){let P;for(let z=0,O=h.length;z<O;z++){let G=h[z];if(G.cacheKey===y){P=G,++P.usedTimes;break}}return P===void 0&&(P=new sx(s,y,M,r),h.push(P)),P}function E(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function A(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:C}}function ax(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function cx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Lu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Du(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,_,g,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function a(u,d,f,_,g,m){let p=o(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,_,g,m){let p=o(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||cx),n.length>1&&n.sort(d||Lu),i.length>1&&i.sort(d||Lu)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function lx(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Du,s.set(n,[o])):i>=r.length?(o=new Du,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function hx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Bt};break;case"SpotLight":e={position:new L,direction:new L,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function ux(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var dx=0;function fx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function px(s){let t=new hx,e=ux(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let i=new L,r=new ee,o=new ee;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,S=0,v=0,x=0,T=0,E=0,A=0;l.sort(fx);for(let M=0,y=l.length;M<y;M++){let P=l[M],z=P.color,O=P.intensity,G=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*O,u+=z.g*O,d+=z.b*O;else if(P.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(P.sh.coefficients[D],O);A++}else if(P.isDirectionalLight){let D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,W=e.get(P);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=P.shadow.matrix,S++}n.directional[f]=D,f++}else if(P.isSpotLight){let D=t.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(z).multiplyScalar(O),D.distance=G,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,n.spot[g]=D;let Q=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,Q.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[g]=Q.matrix,P.castShadow){let W=e.get(P);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=J,x++}g++}else if(P.isRectAreaLight){let D=t.get(P);D.color.copy(z).multiplyScalar(O),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=D,m++}else if(P.isPointLight){let D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){let Q=P.shadow,W=e.get(P);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=P.shadow.matrix,v++}n.point[_]=D,_++}else if(P.isHemisphereLight){let D=t.get(P);D.skyColor.copy(P.color).multiplyScalar(O),D.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=D,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==T||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,C.directionalLength=f,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=T,C.numLightProbes=A,n.version=dx++)}function c(l,h){let u=0,d=0,f=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let v=l[p];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(v.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Uu(s){let t=new px(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function mx(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Uu(s),t.set(i,[a])):r>=o.length?(a=new Uu(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Jc=class extends $i{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$c=class extends $i{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},gx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_x=`uniform sampler2D shadow_pass;
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
}`;function xx(s,t,e){let n=new Tr,i=new Nt,r=new Nt,o=new re,a=new Jc({depthPacking:cp}),c=new $c,l={},h=e.maxTextureSize,u={[Mi]:ke,[ke]:Mi,[Tn]:Tn},d=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:gx,fragmentShader:_x}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new si;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new zt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu;let p=this.type;this.render=function(E,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),z=s.state;z.setBlending(yi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let O=p!==Kn&&this.type===Kn,G=p===Kn&&this.type!==Kn;for(let J=0,D=E.length;J<D;J++){let Q=E[J],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let st=W.getFrameExtents();if(i.multiply(st),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,W.mapSize.y=r.y)),W.map===null||O===!0||G===!0){let nt=this.type!==Kn?{minFilter:an,magFilter:an}:{};W.map!==null&&W.map.dispose(),W.map=new ni(i.x,i.y,nt),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let $=W.getViewportCount();for(let nt=0;nt<$;nt++){let ct=W.getViewport(nt);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),z.viewport(o),W.updateMatrices(Q,nt),n=W.getFrustum(),x(A,C,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===Kn&&S(W,C),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,y,P)};function S(E,A){let C=t.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ni(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,C,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,C,f,g,null)}function v(E,A,C,M){let y=null,P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?c:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let z=y.uuid,O=A.uuid,G=l[z];G===void 0&&(G={},l[z]=G);let J=G[O];J===void 0&&(J=y.clone(),G[O]=J,A.addEventListener("dispose",T)),y=J}if(y.visible=A.visible,y.wireframe=A.wireframe,M===Kn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let z=s.properties.get(y);z.light=C}return y}function x(E,A,C,M,y){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Kn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let O=t.update(E),G=E.material;if(Array.isArray(G)){let J=O.groups;for(let D=0,Q=J.length;D<Q;D++){let W=J[D],st=G[W.materialIndex];if(st&&st.visible){let $=v(E,st,M,y);E.onBeforeShadow(s,E,A,C,O,$,W),s.renderBufferDirect(C,null,O,$,E,W),E.onAfterShadow(s,E,A,C,O,$,W)}}}else if(G.visible){let J=v(E,G,M,y);E.onBeforeShadow(s,E,A,C,O,J,null),s.renderBufferDirect(C,null,O,J,E,null),E.onAfterShadow(s,E,A,C,O,J,null)}}let z=E.children;for(let O=0,G=z.length;O<G;O++)x(z[O],A,C,M,y)}function T(E){E.target.removeEventListener("dispose",T);for(let C in l){let M=l[C],y=E.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var yx={[ja]:tc,[ec]:sc,[nc]:rc,[Ds]:ic,[tc]:ja,[sc]:ec,[rc]:nc,[ic]:Ds};function vx(s,t){function e(){let I=!1,lt=new re,V=null,tt=new re(0,0,0,0);return{setMask:function(ht){V!==ht&&!I&&(s.colorMask(ht,ht,ht,ht),V=ht)},setLocked:function(ht){I=ht},setClear:function(ht,ut,At,Xt,Qt){Qt===!0&&(ht*=Xt,ut*=Xt,At*=Xt),lt.set(ht,ut,At,Xt),tt.equals(lt)===!1&&(s.clearColor(ht,ut,At,Xt),tt.copy(lt))},reset:function(){I=!1,V=null,tt.set(-1,0,0,0)}}}function n(){let I=!1,lt=!1,V=null,tt=null,ht=null;return{setReversed:function(ut){if(lt!==ut){let At=t.get("EXT_clip_control");lt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT);let Xt=ht;ht=null,this.setClear(Xt)}lt=ut},getReversed:function(){return lt},setTest:function(ut){ut?K(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(ut){V!==ut&&!I&&(s.depthMask(ut),V=ut)},setFunc:function(ut){if(lt&&(ut=yx[ut]),tt!==ut){switch(ut){case ja:s.depthFunc(s.NEVER);break;case tc:s.depthFunc(s.ALWAYS);break;case ec:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case nc:s.depthFunc(s.EQUAL);break;case ic:s.depthFunc(s.GEQUAL);break;case sc:s.depthFunc(s.GREATER);break;case rc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=ut}},setLocked:function(ut){I=ut},setClear:function(ut){ht!==ut&&(lt&&(ut=1-ut),s.clearDepth(ut),ht=ut)},reset:function(){I=!1,V=null,tt=null,ht=null,lt=!1}}}function i(){let I=!1,lt=null,V=null,tt=null,ht=null,ut=null,At=null,Xt=null,Qt=null;return{setTest:function(Yt){I||(Yt?K(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(Yt){lt!==Yt&&!I&&(s.stencilMask(Yt),lt=Yt)},setFunc:function(Yt,Ot,Ht){(V!==Yt||tt!==Ot||ht!==Ht)&&(s.stencilFunc(Yt,Ot,Ht),V=Yt,tt=Ot,ht=Ht)},setOp:function(Yt,Ot,Ht){(ut!==Yt||At!==Ot||Xt!==Ht)&&(s.stencilOp(Yt,Ot,Ht),ut=Yt,At=Ot,Xt=Ht)},setLocked:function(Yt){I=Yt},setClear:function(Yt){Qt!==Yt&&(s.clearStencil(Yt),Qt=Yt)},reset:function(){I=!1,lt=null,V=null,tt=null,ht=null,ut=null,At=null,Xt=null,Qt=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,S=null,v=null,x=null,T=null,E=null,A=new Bt(0,0,0),C=0,M=!1,y=null,P=null,z=null,O=null,G=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,Q=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),D=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),D=Q>=2);let st=null,$={},nt=s.getParameter(s.SCISSOR_BOX),ct=s.getParameter(s.VIEWPORT),pt=new re().fromArray(nt),U=new re().fromArray(ct);function k(I,lt,V,tt){let ht=new Uint8Array(4),ut=s.createTexture();s.bindTexture(I,ut),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let At=0;At<V;At++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(lt+At,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return ut}let ot={};ot[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),ot[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ot[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(s.DEPTH_TEST),o.setFunc(Ds),kt(!1),Ut(Nh),K(s.CULL_FACE),N(yi);function K(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function _t(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function St(I,lt){return u[I]!==lt?(s.bindFramebuffer(I,lt),u[I]=lt,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=lt),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function Dt(I,lt){let V=f,tt=!1;if(I){V=d.get(lt),V===void 0&&(V=[],d.set(lt,V));let ht=I.textures;if(V.length!==ht.length||V[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,At=ht.length;ut<At;ut++)V[ut]=s.COLOR_ATTACHMENT0+ut;V.length=ht.length,tt=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,tt=!0);tt&&s.drawBuffers(V)}function Ft(I){return _!==I?(s.useProgram(I),_=I,!0):!1}let bt={[Gi]:s.FUNC_ADD,[Nf]:s.FUNC_SUBTRACT,[Of]:s.FUNC_REVERSE_SUBTRACT};bt[Ff]=s.MIN,bt[Bf]=s.MAX;let Wt={[zf]:s.ZERO,[kf]:s.ONE,[Vf]:s.SRC_COLOR,[Ka]:s.SRC_ALPHA,[Yf]:s.SRC_ALPHA_SATURATE,[Xf]:s.DST_COLOR,[Gf]:s.DST_ALPHA,[Hf]:s.ONE_MINUS_SRC_COLOR,[Qa]:s.ONE_MINUS_SRC_ALPHA,[qf]:s.ONE_MINUS_DST_COLOR,[Wf]:s.ONE_MINUS_DST_ALPHA,[Zf]:s.CONSTANT_COLOR,[Jf]:s.ONE_MINUS_CONSTANT_COLOR,[$f]:s.CONSTANT_ALPHA,[Kf]:s.ONE_MINUS_CONSTANT_ALPHA};function N(I,lt,V,tt,ht,ut,At,Xt,Qt,Yt){if(I===yi){g===!0&&(_t(s.BLEND),g=!1);return}if(g===!1&&(K(s.BLEND),g=!0),I!==Uf){if(I!==m||Yt!==M){if((p!==Gi||x!==Gi)&&(s.blendEquation(s.FUNC_ADD),p=Gi,x=Gi),Yt)switch(I){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oh:s.blendFunc(s.ONE,s.ONE);break;case Fh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,v=null,T=null,E=null,A.set(0,0,0),C=0,m=I,M=Yt}return}ht=ht||lt,ut=ut||V,At=At||tt,(lt!==p||ht!==x)&&(s.blendEquationSeparate(bt[lt],bt[ht]),p=lt,x=ht),(V!==S||tt!==v||ut!==T||At!==E)&&(s.blendFuncSeparate(Wt[V],Wt[tt],Wt[ut],Wt[At]),S=V,v=tt,T=ut,E=At),(Xt.equals(A)===!1||Qt!==C)&&(s.blendColor(Xt.r,Xt.g,Xt.b,Qt),A.copy(Xt),C=Qt),m=I,M=!1}function Ce(I,lt){I.side===Tn?_t(s.CULL_FACE):K(s.CULL_FACE);let V=I.side===ke;lt&&(V=!V),kt(V),I.blending===Cs&&I.transparent===!1?N(yi):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let tt=I.stencilWrite;a.setTest(tt),tt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),$t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(I){y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),y=I)}function Ut(I){I!==If?(K(s.CULL_FACE),I!==P&&(I===Nh?s.cullFace(s.BACK):I===Lf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),P=I}function Et(I){I!==z&&(D&&s.lineWidth(I),z=I)}function $t(I,lt,V){I?(K(s.POLYGON_OFFSET_FILL),(O!==lt||G!==V)&&(s.polygonOffset(lt,V),O=lt,G=V)):_t(s.POLYGON_OFFSET_FILL)}function wt(I){I?K(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function R(I){I===void 0&&(I=s.TEXTURE0+J-1),st!==I&&(s.activeTexture(I),st=I)}function b(I,lt,V){V===void 0&&(st===null?V=s.TEXTURE0+J-1:V=st);let tt=$[V];tt===void 0&&(tt={type:void 0,texture:void 0},$[V]=tt),(tt.type!==I||tt.texture!==lt)&&(st!==V&&(s.activeTexture(V),st=V),s.bindTexture(I,lt||ot[I]),tt.type=I,tt.texture=lt)}function H(){let I=$[st];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function et(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(I){pt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),pt.copy(I))}function Z(I){U.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),U.copy(I))}function gt(I,lt){let V=l.get(lt);V===void 0&&(V=new WeakMap,l.set(lt,V));let tt=V.get(I);tt===void 0&&(tt=s.getUniformBlockIndex(lt,I.name),V.set(I,tt))}function rt(I,lt){let tt=l.get(lt).get(I);c.get(lt)!==tt&&(s.uniformBlockBinding(lt,tt,I.__bindingPointIndex),c.set(lt,tt))}function Lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,$={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,S=null,v=null,x=null,T=null,E=null,A=new Bt(0,0,0),C=0,M=!1,y=null,P=null,z=null,O=null,G=null,pt.set(0,0,s.canvas.width,s.canvas.height),U.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:_t,bindFramebuffer:St,drawBuffers:Dt,useProgram:Ft,setBlending:N,setMaterial:Ce,setFlipSided:kt,setCullFace:Ut,setLineWidth:Et,setPolygonOffset:$t,setScissorTest:wt,activeTexture:R,bindTexture:b,unbindTexture:H,compressedTexImage2D:et,compressedTexImage3D:at,texImage2D:vt,texImage3D:it,updateUBOMapping:gt,uniformBlockBinding:rt,texStorage2D:Jt,texStorage3D:dt,texSubImage2D:j,texSubImage3D:Tt,compressedTexSubImage2D:mt,compressedTexSubImage3D:yt,scissor:X,viewport:Z,reset:Lt}}function Nu(s,t,e,n){let i=Mx(n);switch(e){case Zu:return s*t;case $u:return s*t;case Ku:return s*t*2;case El:return s*t/i.components*i.byteLength;case wl:return s*t/i.components*i.byteLength;case Qu:return s*t*2/i.components*i.byteLength;case Tl:return s*t*2/i.components*i.byteLength;case Ju:return s*t*3/i.components*i.byteLength;case An:return s*t*4/i.components*i.byteLength;case Al:return s*t*4/i.components*i.byteLength;case Mo:case So:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case bo:case Eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case uc:case fc:return Math.max(s,16)*Math.max(t,8)/4;case hc:case dc:return Math.max(s,8)*Math.max(t,8)/2;case pc:case mc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case gc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _c:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case yc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case vc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case bc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case wc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Cc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case wo:case Ic:case Lc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ju:case Dc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Uc:case Nc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mx(s){switch(s){case ei:case Xu:return{byteLength:1,components:1};case Er:case qu:case Ir:return{byteLength:2,components:1};case Sl:case bl:return{byteLength:2,components:4};case Zi:case Ml:case On:return{byteLength:4,components:1};case Yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Sx(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,b){return f?new OffscreenCanvas(R,b):Ro("canvas")}function g(R,b,H){let et=1,at=wt(R);if((at.width>H||at.height>H)&&(et=H/Math.max(at.width,at.height)),et<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let j=Math.floor(et*at.width),Tt=Math.floor(et*at.height);u===void 0&&(u=_(j,Tt));let mt=b?_(j,Tt):u;return mt.width=j,mt.height=Tt,mt.getContext("2d").drawImage(R,0,0,j,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+j+"x"+Tt+")."),mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(R,b,H,et,at=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=b;if(b===s.RED&&(H===s.FLOAT&&(j=s.R32F),H===s.HALF_FLOAT&&(j=s.R16F),H===s.UNSIGNED_BYTE&&(j=s.R8)),b===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.R8UI),H===s.UNSIGNED_SHORT&&(j=s.R16UI),H===s.UNSIGNED_INT&&(j=s.R32UI),H===s.BYTE&&(j=s.R8I),H===s.SHORT&&(j=s.R16I),H===s.INT&&(j=s.R32I)),b===s.RG&&(H===s.FLOAT&&(j=s.RG32F),H===s.HALF_FLOAT&&(j=s.RG16F),H===s.UNSIGNED_BYTE&&(j=s.RG8)),b===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RG8UI),H===s.UNSIGNED_SHORT&&(j=s.RG16UI),H===s.UNSIGNED_INT&&(j=s.RG32UI),H===s.BYTE&&(j=s.RG8I),H===s.SHORT&&(j=s.RG16I),H===s.INT&&(j=s.RG32I)),b===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGB8UI),H===s.UNSIGNED_SHORT&&(j=s.RGB16UI),H===s.UNSIGNED_INT&&(j=s.RGB32UI),H===s.BYTE&&(j=s.RGB8I),H===s.SHORT&&(j=s.RGB16I),H===s.INT&&(j=s.RGB32I)),b===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),H===s.UNSIGNED_INT&&(j=s.RGBA32UI),H===s.BYTE&&(j=s.RGBA8I),H===s.SHORT&&(j=s.RGBA16I),H===s.INT&&(j=s.RGBA32I)),b===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),b===s.RGBA){let Tt=at?Xo:jt.getTransfer(et);H===s.FLOAT&&(j=s.RGBA32F),H===s.HALF_FLOAT&&(j=s.RGBA16F),H===s.UNSIGNED_BYTE&&(j=Tt===se?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(R,b){let H;return R?b===null||b===Zi||b===Os?H=s.DEPTH24_STENCIL8:b===On?H=s.DEPTH32F_STENCIL8:b===Er&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zi||b===Os?H=s.DEPTH_COMPONENT24:b===On?H=s.DEPTH_COMPONENT32F:b===Er&&(H=s.DEPTH_COMPONENT16),H}function T(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==an&&R.minFilter!==Nn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function E(R){let b=R.target;b.removeEventListener("dispose",E),C(b),b.isVideoTexture&&h.delete(b)}function A(R){let b=R.target;b.removeEventListener("dispose",A),y(b)}function C(R){let b=n.get(R);if(b.__webglInit===void 0)return;let H=R.source,et=d.get(H);if(et){let at=et[b.__cacheKey];at.usedTimes--,at.usedTimes===0&&M(R),Object.keys(et).length===0&&d.delete(H)}n.remove(R)}function M(R){let b=n.get(R);s.deleteTexture(b.__webglTexture);let H=R.source,et=d.get(H);delete et[b.__cacheKey],o.memory.textures--}function y(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(b.__webglFramebuffer[et]))for(let at=0;at<b.__webglFramebuffer[et].length;at++)s.deleteFramebuffer(b.__webglFramebuffer[et][at]);else s.deleteFramebuffer(b.__webglFramebuffer[et]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[et])}else{if(Array.isArray(b.__webglFramebuffer))for(let et=0;et<b.__webglFramebuffer.length;et++)s.deleteFramebuffer(b.__webglFramebuffer[et]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let et=0;et<b.__webglColorRenderbuffer.length;et++)b.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[et]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let H=R.textures;for(let et=0,at=H.length;et<at;et++){let j=n.get(H[et]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(H[et])}n.remove(R)}let P=0;function z(){P=0}function O(){let R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function G(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function J(R,b){let H=n.get(R);if(R.isVideoTexture&&Et(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){let et=R.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(H,R,b);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+b)}function D(R,b){let H=n.get(R);if(R.version>0&&H.__version!==R.version){U(H,R,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+b)}function Q(R,b){let H=n.get(R);if(R.version>0&&H.__version!==R.version){U(H,R,b);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+b)}function W(R,b){let H=n.get(R);if(R.version>0&&H.__version!==R.version){k(H,R,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+b)}let st={[cc]:s.REPEAT,[qi]:s.CLAMP_TO_EDGE,[lc]:s.MIRRORED_REPEAT},$={[an]:s.NEAREST,[op]:s.NEAREST_MIPMAP_NEAREST,[$r]:s.NEAREST_MIPMAP_LINEAR,[Nn]:s.LINEAR,[xa]:s.LINEAR_MIPMAP_NEAREST,[Yi]:s.LINEAR_MIPMAP_LINEAR},nt={[hp]:s.NEVER,[gp]:s.ALWAYS,[up]:s.LESS,[ed]:s.LEQUAL,[dp]:s.EQUAL,[mp]:s.GEQUAL,[fp]:s.GREATER,[pp]:s.NOTEQUAL};function ct(R,b){if(b.type===On&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Nn||b.magFilter===xa||b.magFilter===$r||b.magFilter===Yi||b.minFilter===Nn||b.minFilter===xa||b.minFilter===$r||b.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,st[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,st[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,st[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,$[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,$[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===an||b.minFilter!==$r&&b.minFilter!==Yi||b.type===On&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function pt(R,b){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",E));let et=b.source,at=d.get(et);at===void 0&&(at={},d.set(et,at));let j=G(b);if(j!==R.__cacheKey){at[j]===void 0&&(at[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),at[j].usedTimes++;let Tt=at[R.__cacheKey];Tt!==void 0&&(at[R.__cacheKey].usedTimes--,Tt.usedTimes===0&&M(b)),R.__cacheKey=j,R.__webglTexture=at[j].texture}return H}function U(R,b,H){let et=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(et=s.TEXTURE_3D);let at=pt(R,b),j=b.source;e.bindTexture(et,R.__webglTexture,s.TEXTURE0+H);let Tt=n.get(j);if(j.version!==Tt.__version||at===!0){e.activeTexture(s.TEXTURE0+H);let mt=jt.getPrimaries(jt.workingColorSpace),yt=b.colorSpace===xi?null:jt.getPrimaries(b.colorSpace),Jt=b.colorSpace===xi||mt===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let dt=g(b.image,!1,i.maxTextureSize);dt=$t(b,dt);let vt=r.convert(b.format,b.colorSpace),it=r.convert(b.type),X=v(b.internalFormat,vt,it,b.colorSpace,b.isVideoTexture);ct(et,b);let Z,gt=b.mipmaps,rt=b.isVideoTexture!==!0,Lt=Tt.__version===void 0||at===!0,I=j.dataReady,lt=T(b,dt);if(b.isDepthTexture)X=x(b.format===Fs,b.type),Lt&&(rt?e.texStorage2D(s.TEXTURE_2D,1,X,dt.width,dt.height):e.texImage2D(s.TEXTURE_2D,0,X,dt.width,dt.height,0,vt,it,null));else if(b.isDataTexture)if(gt.length>0){rt&&Lt&&e.texStorage2D(s.TEXTURE_2D,lt,X,gt[0].width,gt[0].height);for(let V=0,tt=gt.length;V<tt;V++)Z=gt[V],rt?I&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,Z.width,Z.height,vt,it,Z.data):e.texImage2D(s.TEXTURE_2D,V,X,Z.width,Z.height,0,vt,it,Z.data);b.generateMipmaps=!1}else rt?(Lt&&e.texStorage2D(s.TEXTURE_2D,lt,X,dt.width,dt.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt.width,dt.height,vt,it,dt.data)):e.texImage2D(s.TEXTURE_2D,0,X,dt.width,dt.height,0,vt,it,dt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){rt&&Lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,X,gt[0].width,gt[0].height,dt.depth);for(let V=0,tt=gt.length;V<tt;V++)if(Z=gt[V],b.format!==An)if(vt!==null)if(rt){if(I)if(b.layerUpdates.size>0){let ht=Nu(Z.width,Z.height,b.format,b.type);for(let ut of b.layerUpdates){let At=Z.data.subarray(ut*ht/Z.data.BYTES_PER_ELEMENT,(ut+1)*ht/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,ut,Z.width,Z.height,1,vt,At)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,Z.width,Z.height,dt.depth,vt,Z.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,X,Z.width,Z.height,dt.depth,0,Z.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,Z.width,Z.height,dt.depth,vt,it,Z.data):e.texImage3D(s.TEXTURE_2D_ARRAY,V,X,Z.width,Z.height,dt.depth,0,vt,it,Z.data)}else{rt&&Lt&&e.texStorage2D(s.TEXTURE_2D,lt,X,gt[0].width,gt[0].height);for(let V=0,tt=gt.length;V<tt;V++)Z=gt[V],b.format!==An?vt!==null?rt?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,Z.width,Z.height,vt,Z.data):e.compressedTexImage2D(s.TEXTURE_2D,V,X,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?I&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,Z.width,Z.height,vt,it,Z.data):e.texImage2D(s.TEXTURE_2D,V,X,Z.width,Z.height,0,vt,it,Z.data)}else if(b.isDataArrayTexture)if(rt){if(Lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,X,dt.width,dt.height,dt.depth),I)if(b.layerUpdates.size>0){let V=Nu(dt.width,dt.height,b.format,b.type);for(let tt of b.layerUpdates){let ht=dt.data.subarray(tt*V/dt.data.BYTES_PER_ELEMENT,(tt+1)*V/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,dt.width,dt.height,1,vt,it,ht)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,vt,it,dt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,X,dt.width,dt.height,dt.depth,0,vt,it,dt.data);else if(b.isData3DTexture)rt?(Lt&&e.texStorage3D(s.TEXTURE_3D,lt,X,dt.width,dt.height,dt.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,vt,it,dt.data)):e.texImage3D(s.TEXTURE_3D,0,X,dt.width,dt.height,dt.depth,0,vt,it,dt.data);else if(b.isFramebufferTexture){if(Lt)if(rt)e.texStorage2D(s.TEXTURE_2D,lt,X,dt.width,dt.height);else{let V=dt.width,tt=dt.height;for(let ht=0;ht<lt;ht++)e.texImage2D(s.TEXTURE_2D,ht,X,V,tt,0,vt,it,null),V>>=1,tt>>=1}}else if(gt.length>0){if(rt&&Lt){let V=wt(gt[0]);e.texStorage2D(s.TEXTURE_2D,lt,X,V.width,V.height)}for(let V=0,tt=gt.length;V<tt;V++)Z=gt[V],rt?I&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,vt,it,Z):e.texImage2D(s.TEXTURE_2D,V,X,vt,it,Z);b.generateMipmaps=!1}else if(rt){if(Lt){let V=wt(dt);e.texStorage2D(s.TEXTURE_2D,lt,X,V.width,V.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,it,dt)}else e.texImage2D(s.TEXTURE_2D,0,X,vt,it,dt);m(b)&&p(et),Tt.__version=j.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function k(R,b,H){if(b.image.length!==6)return;let et=pt(R,b),at=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);let j=n.get(at);if(at.version!==j.__version||et===!0){e.activeTexture(s.TEXTURE0+H);let Tt=jt.getPrimaries(jt.workingColorSpace),mt=b.colorSpace===xi?null:jt.getPrimaries(b.colorSpace),yt=b.colorSpace===xi||Tt===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Jt=b.isCompressedTexture||b.image[0].isCompressedTexture,dt=b.image[0]&&b.image[0].isDataTexture,vt=[];for(let tt=0;tt<6;tt++)!Jt&&!dt?vt[tt]=g(b.image[tt],!0,i.maxCubemapSize):vt[tt]=dt?b.image[tt].image:b.image[tt],vt[tt]=$t(b,vt[tt]);let it=vt[0],X=r.convert(b.format,b.colorSpace),Z=r.convert(b.type),gt=v(b.internalFormat,X,Z,b.colorSpace),rt=b.isVideoTexture!==!0,Lt=j.__version===void 0||et===!0,I=at.dataReady,lt=T(b,it);ct(s.TEXTURE_CUBE_MAP,b);let V;if(Jt){rt&&Lt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,gt,it.width,it.height);for(let tt=0;tt<6;tt++){V=vt[tt].mipmaps;for(let ht=0;ht<V.length;ht++){let ut=V[ht];b.format!==An?X!==null?rt?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht,0,0,ut.width,ut.height,X,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht,gt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht,0,0,ut.width,ut.height,X,Z,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht,gt,ut.width,ut.height,0,X,Z,ut.data)}}}else{if(V=b.mipmaps,rt&&Lt){V.length>0&&lt++;let tt=wt(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,gt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(dt){rt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,vt[tt].width,vt[tt].height,X,Z,vt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,gt,vt[tt].width,vt[tt].height,0,X,Z,vt[tt].data);for(let ht=0;ht<V.length;ht++){let At=V[ht].image[tt].image;rt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht+1,0,0,At.width,At.height,X,Z,At.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht+1,gt,At.width,At.height,0,X,Z,At.data)}}else{rt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,X,Z,vt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,gt,X,Z,vt[tt]);for(let ht=0;ht<V.length;ht++){let ut=V[ht];rt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht+1,0,0,X,Z,ut.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ht+1,gt,X,Z,ut.image[tt])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),j.__version=at.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ot(R,b,H,et,at,j){let Tt=r.convert(H.format,H.colorSpace),mt=r.convert(H.type),yt=v(H.internalFormat,Tt,mt,H.colorSpace),Jt=n.get(b),dt=n.get(H);if(dt.__renderTarget=b,!Jt.__hasExternalTextures){let vt=Math.max(1,b.width>>j),it=Math.max(1,b.height>>j);at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,j,yt,vt,it,b.depth,0,Tt,mt,null):e.texImage2D(at,j,yt,vt,it,0,Tt,mt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),Ut(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,at,dt.__webglTexture,0,kt(b)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,at,dt.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function K(R,b,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){let et=b.depthTexture,at=et&&et.isDepthTexture?et.type:null,j=x(b.stencilBuffer,at),Tt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=kt(b);Ut(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,j,b.width,b.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,j,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,j,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,R)}else{let et=b.textures;for(let at=0;at<et.length;at++){let j=et[at],Tt=r.convert(j.format,j.colorSpace),mt=r.convert(j.type),yt=v(j.internalFormat,Tt,mt,j.colorSpace),Jt=kt(b);H&&Ut(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,yt,b.width,b.height):Ut(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,yt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,yt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _t(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let et=n.get(b.depthTexture);et.__renderTarget=b,(!et.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);let at=et.__webglTexture,j=kt(b);if(b.depthTexture.format===Ps)Ut(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0);else if(b.depthTexture.format===Fs)Ut(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function St(R){let b=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let et=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),et){let at=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,et.removeEventListener("dispose",at)};et.addEventListener("dispose",at),b.__depthDisposeCallback=at}b.__boundDepthTexture=et}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");_t(b.__webglFramebuffer,R)}else if(H){b.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[et]),b.__webglDepthbuffer[et]===void 0)b.__webglDepthbuffer[et]=s.createRenderbuffer(),K(b.__webglDepthbuffer[et],R,!1);else{let at=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[et];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),K(b.__webglDepthbuffer,R,!1);else{let et=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,at)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(R,b,H){let et=n.get(R);b!==void 0&&ot(et.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&St(R)}function Ft(R){let b=R.texture,H=n.get(R),et=n.get(b);R.addEventListener("dispose",A);let at=R.textures,j=R.isWebGLCubeRenderTarget===!0,Tt=at.length>1;if(Tt||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=b.version,o.memory.textures++),j){H.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[mt]=[];for(let yt=0;yt<b.mipmaps.length;yt++)H.__webglFramebuffer[mt][yt]=s.createFramebuffer()}else H.__webglFramebuffer[mt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let mt=0;mt<b.mipmaps.length;mt++)H.__webglFramebuffer[mt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let mt=0,yt=at.length;mt<yt;mt++){let Jt=n.get(at[mt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&Ut(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let mt=0;mt<at.length;mt++){let yt=at[mt];H.__webglColorRenderbuffer[mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[mt]);let Jt=r.convert(yt.format,yt.colorSpace),dt=r.convert(yt.type),vt=v(yt.internalFormat,Jt,dt,yt.colorSpace,R.isXRRenderTarget===!0),it=kt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,vt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,H.__webglColorRenderbuffer[mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),K(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),ct(s.TEXTURE_CUBE_MAP,b);for(let mt=0;mt<6;mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)ot(H.__webglFramebuffer[mt][yt],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,yt);else ot(H.__webglFramebuffer[mt],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(b)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let mt=0,yt=at.length;mt<yt;mt++){let Jt=at[mt],dt=n.get(Jt);e.bindTexture(s.TEXTURE_2D,dt.__webglTexture),ct(s.TEXTURE_2D,Jt),ot(H.__webglFramebuffer,R,Jt,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,0),m(Jt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let mt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(mt,et.__webglTexture),ct(mt,b),b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)ot(H.__webglFramebuffer[yt],R,b,s.COLOR_ATTACHMENT0,mt,yt);else ot(H.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,mt,0);m(b)&&p(mt),e.unbindTexture()}R.depthBuffer&&St(R)}function bt(R){let b=R.textures;for(let H=0,et=b.length;H<et;H++){let at=b[H];if(m(at)){let j=S(R),Tt=n.get(at).__webglTexture;e.bindTexture(j,Tt),p(j),e.unbindTexture()}}}let Wt=[],N=[];function Ce(R){if(R.samples>0){if(Ut(R)===!1){let b=R.textures,H=R.width,et=R.height,at=s.COLOR_BUFFER_BIT,j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(R),mt=b.length>1;if(mt)for(let yt=0;yt<b.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let yt=0;yt<b.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),mt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);let Jt=n.get(b[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,H,et,0,0,H,et,at,s.NEAREST),c===!0&&(Wt.length=0,N.length=0,Wt.push(s.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Wt.push(j),N.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),mt)for(let yt=0;yt<b.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);let Jt=n.get(b[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function kt(R){return Math.min(i.maxSamples,R.samples)}function Ut(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function $t(R,b){let H=R.colorSpace,et=R.format,at=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Ws&&H!==xi&&(jt.getTransfer(H)===se?(et!==An||at!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function wt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=D,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=Dt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Ut}function bx(s,t){function e(n,i=xi){let r,o=jt.getTransfer(i);if(n===ei)return s.UNSIGNED_BYTE;if(n===Sl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===bl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Xu)return s.BYTE;if(n===qu)return s.SHORT;if(n===Er)return s.UNSIGNED_SHORT;if(n===Ml)return s.INT;if(n===Zi)return s.UNSIGNED_INT;if(n===On)return s.FLOAT;if(n===Ir)return s.HALF_FLOAT;if(n===Zu)return s.ALPHA;if(n===Ju)return s.RGB;if(n===An)return s.RGBA;if(n===$u)return s.LUMINANCE;if(n===Ku)return s.LUMINANCE_ALPHA;if(n===Ps)return s.DEPTH_COMPONENT;if(n===Fs)return s.DEPTH_STENCIL;if(n===El)return s.RED;if(n===wl)return s.RED_INTEGER;if(n===Qu)return s.RG;if(n===Tl)return s.RG_INTEGER;if(n===Al)return s.RGBA_INTEGER;if(n===Mo||n===So||n===bo||n===Eo)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hc||n===uc||n===dc||n===fc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pc||n===mc||n===gc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pc||n===mc)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_c||n===xc||n===yc||n===vc||n===Mc||n===Sc||n===bc||n===Ec||n===wc||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_c)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ec)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ac)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===Ic||n===Lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wo)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ju||n===Dc||n===Uc||n===Nc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Kc=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},de=class extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ex={type:"move"},Mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ex)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tx=`
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

}`,Qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Ke,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Fn({vertexShader:wx,fragmentShader:Tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jc=class extends Si{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,_=null,g=new Qc,m=e.getContextAttributes(),p=null,S=null,v=[],x=[],T=new Nt,E=null,A=new ze;A.viewport=new re;let C=new ze;C.viewport=new re;let M=[A,C],y=new Kc,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let k=v[U];return k===void 0&&(k=new Mr,v[U]=k),k.getTargetRaySpace()},this.getControllerGrip=function(U){let k=v[U];return k===void 0&&(k=new Mr,v[U]=k),k.getGripSpace()},this.getHand=function(U){let k=v[U];return k===void 0&&(k=new Mr,v[U]=k),k.getHandSpace()};function O(U){let k=x.indexOf(U.inputSource);if(k===-1)return;let ot=v[k];ot!==void 0&&(ot.update(U.inputSource,U.frame,l||o),ot.dispatchEvent({type:U.type,data:U.inputSource}))}function G(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",J);for(let U=0;U<v.length;U++){let k=x[U];k!==null&&(x[U]=null,v[U].disconnect(k))}P=null,z=null,g.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,S=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",G),i.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){let k={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,k),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new ni(f.framebufferWidth,f.framebufferHeight,{format:An,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let k=null,ot=null,K=null;m.depth&&(K=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=m.stencil?Fs:Ps,ot=m.stencil?Os:Zi);let _t={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(_t),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new ni(d.textureWidth,d.textureHeight,{format:An,type:ei,depthTexture:new Oo(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(U){for(let k=0;k<U.removed.length;k++){let ot=U.removed[k],K=x.indexOf(ot);K>=0&&(x[K]=null,v[K].disconnect(ot))}for(let k=0;k<U.added.length;k++){let ot=U.added[k],K=x.indexOf(ot);if(K===-1){for(let St=0;St<v.length;St++)if(St>=x.length){x.push(ot),K=St;break}else if(x[St]===null){x[St]=ot,K=St;break}if(K===-1)break}let _t=v[K];_t&&_t.connect(ot)}}let D=new L,Q=new L;function W(U,k,ot){D.setFromMatrixPosition(k.matrixWorld),Q.setFromMatrixPosition(ot.matrixWorld);let K=D.distanceTo(Q),_t=k.projectionMatrix.elements,St=ot.projectionMatrix.elements,Dt=_t[14]/(_t[10]-1),Ft=_t[14]/(_t[10]+1),bt=(_t[9]+1)/_t[5],Wt=(_t[9]-1)/_t[5],N=(_t[8]-1)/_t[0],Ce=(St[8]+1)/St[0],kt=Dt*N,Ut=Dt*Ce,Et=K/(-N+Ce),$t=Et*-N;if(k.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX($t),U.translateZ(Et),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),_t[10]===-1)U.projectionMatrix.copy(k.projectionMatrix),U.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let wt=Dt+Et,R=Ft+Et,b=kt-$t,H=Ut+(K-$t),et=bt*Ft/R*wt,at=Wt*Ft/R*wt;U.projectionMatrix.makePerspective(b,H,et,at,wt,R),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function st(U,k){k===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(k.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;let k=U.near,ot=U.far;g.texture!==null&&(g.depthNear>0&&(k=g.depthNear),g.depthFar>0&&(ot=g.depthFar)),y.near=C.near=A.near=k,y.far=C.far=A.far=ot,(P!==y.near||z!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,z=y.far),A.layers.mask=U.layers.mask|2,C.layers.mask=U.layers.mask|4,y.layers.mask=A.layers.mask|C.layers.mask;let K=U.parent,_t=y.cameras;st(y,K);for(let St=0;St<_t.length;St++)st(_t[St],K);_t.length===2?W(y,A,C):y.projectionMatrix.copy(A.projectionMatrix),$(U,y,K)};function $(U,k,ot){ot===null?U.matrix.copy(k.matrixWorld):(U.matrix.copy(ot.matrixWorld),U.matrix.invert(),U.matrix.multiply(k.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(k.projectionMatrix),U.projectionMatrixInverse.copy(k.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=wr*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(U){c=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let nt=null;function ct(U,k){if(h=k.getViewerPose(l||o),_=k,h!==null){let ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let K=!1;ot.length!==y.cameras.length&&(y.cameras.length=0,K=!0);for(let St=0;St<ot.length;St++){let Dt=ot[St],Ft=null;if(f!==null)Ft=f.getViewport(Dt);else{let Wt=u.getViewSubImage(d,Dt);Ft=Wt.viewport,St===0&&(t.setRenderTargetTextures(S,Wt.colorTexture,d.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(S))}let bt=M[St];bt===void 0&&(bt=new ze,bt.layers.enable(St),bt.viewport=new re,M[St]=bt),bt.matrix.fromArray(Dt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Dt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),St===0&&(y.matrix.copy(bt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),K===!0&&y.cameras.push(bt)}let _t=i.enabledFeatures;if(_t&&_t.includes("depth-sensing")){let St=u.getDepthInformation(ot[0]);St&&St.isValid&&St.texture&&g.init(t,St,i.renderState)}}for(let ot=0;ot<v.length;ot++){let K=x[ot],_t=v[ot];K!==null&&_t!==void 0&&_t.update(K,k,l||o)}nt&&nt(U,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),_=null}let pt=new rd;pt.setAnimationLoop(ct),this.setAnimationLoop=function(U){nt=U},this.dispose=function(){}}},Vi=new mn,Ax=new ee;function Rx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),v=S.envMap,x=S.envMapRotation;v&&(m.envMap.value=v,Vi.copy(x),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(Vi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cx(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,v){let x=v.program;n.uniformBlockBinding(S,x)}function l(S,v){let x=i[S.id];x===void 0&&(_(S),x=h(S),i[S.id]=x,S.addEventListener("dispose",m));let T=v.program;n.updateUBOMapping(S,T);let E=t.render.frame;r[S.id]!==E&&(d(S),r[S.id]=E)}function h(S){let v=u();S.__bindingPointIndex=v;let x=s.createBuffer(),T=S.__size,E=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,T,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let v=i[S.id],x=S.uniforms,T=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,A=x.length;E<A;E++){let C=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,y=C.length;M<y;M++){let P=C[M];if(f(P,E,M,T)===!0){let z=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],G=0;for(let J=0;J<O.length;J++){let D=O[J],Q=g(D);typeof D=="number"||typeof D=="boolean"?(P.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,z+G,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=0,P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=0,P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=0):(D.toArray(P.__data,G),G+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,v,x,T){let E=S.value,A=v+"_"+x;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:T[A]=E.clone(),!0;{let C=T[A];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return T[A]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function _(S){let v=S.uniforms,x=0,T=16;for(let A=0,C=v.length;A<C;A++){let M=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,P=M.length;y<P;y++){let z=M[y],O=Array.isArray(z.value)?z.value:[z.value];for(let G=0,J=O.length;G<J;G++){let D=O[G],Q=g(D),W=x%T,st=W%Q.boundary,$=W+st;x+=st,$!==0&&T-$<Q.storage&&(x+=T-$),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=Q.storage}}}let E=x%T;return E>0&&(x+=T-E),S.__size=x,S.__cache={},this}function g(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){let v=S.target;v.removeEventListener("dispose",m);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var Vs=class{constructor(t={}){let{canvas:e=Dp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,S=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=vi,this.toneMappingExposure=1;let x=this,T=!1,E=0,A=0,C=null,M=-1,y=null,P=new re,z=new re,O=null,G=new Bt(0),J=0,D=e.width,Q=e.height,W=1,st=null,$=null,nt=new re(0,0,D,Q),ct=new re(0,0,D,Q),pt=!1,U=new Tr,k=!1,ot=!1,K=new ee,_t=new ee,St=new L,Dt=new re,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},bt=!1;function Wt(){return C===null?W:1}let N=n;function Ce(w,F){return e.getContext(w,F)}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vl}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ut,!1),N===null){let F="webgl2";if(N=Ce(F,w),N===null)throw Ce(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let kt,Ut,Et,$t,wt,R,b,H,et,at,j,Tt,mt,yt,Jt,dt,vt,it,X,Z,gt,rt,Lt,I;function lt(){kt=new X0(N),kt.init(),rt=new bx(N,kt),Ut=new z0(N,kt,t,rt),Et=new vx(N,kt),Ut.reverseDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),$t=new Z0(N),wt=new ax,R=new Sx(N,kt,Et,wt,Ut,rt,$t),b=new V0(x),H=new W0(x),et=new em(N),Lt=new F0(N,et),at=new q0(N,et,$t,Lt),j=new $0(N,at,et,$t),X=new J0(N,Ut,R),dt=new k0(wt),Tt=new ox(x,b,H,kt,Ut,Lt,dt),mt=new Rx(x,wt),yt=new lx,Jt=new mx(kt),it=new O0(x,b,H,Et,j,f,c),vt=new xx(x,j,Ut),I=new Cx(N,$t,Ut,Et),Z=new B0(N,kt,$t),gt=new Y0(N,kt,$t),$t.programs=Tt.programs,x.capabilities=Ut,x.extensions=kt,x.properties=wt,x.renderLists=yt,x.shadowMap=vt,x.state=Et,x.info=$t}lt();let V=new jc(x,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=kt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=kt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(D,Q,!1))},this.getSize=function(w){return w.set(D,Q)},this.setSize=function(w,F,q=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,Q=F,e.width=Math.floor(w*W),e.height=Math.floor(F*W),q===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(D*W,Q*W).floor()},this.setDrawingBufferSize=function(w,F,q){D=w,Q=F,W=q,e.width=Math.floor(w*q),e.height=Math.floor(F*q),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(nt)},this.setViewport=function(w,F,q,Y){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,F,q,Y),Et.viewport(P.copy(nt).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(ct)},this.setScissor=function(w,F,q,Y){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,F,q,Y),Et.scissor(z.copy(ct).multiplyScalar(W).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(w){Et.setScissorTest(pt=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(w=!0,F=!0,q=!0){let Y=0;if(w){let B=!1;if(C!==null){let ft=C.texture.format;B=ft===Al||ft===Tl||ft===wl}if(B){let ft=C.texture.type,Mt=ft===ei||ft===Zi||ft===Er||ft===Os||ft===Sl||ft===bl,Rt=it.getClearColor(),Ct=it.getClearAlpha(),Vt=Rt.r,qt=Rt.g,Pt=Rt.b;Mt?(_[0]=Vt,_[1]=qt,_[2]=Pt,_[3]=Ct,N.clearBufferuiv(N.COLOR,0,_)):(g[0]=Vt,g[1]=qt,g[2]=Pt,g[3]=Ct,N.clearBufferiv(N.COLOR,0,g))}else Y|=N.COLOR_BUFFER_BIT}F&&(Y|=N.DEPTH_BUFFER_BIT),q&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),yt.dispose(),Jt.dispose(),wt.dispose(),b.dispose(),H.dispose(),j.dispose(),Lt.dispose(),I.dispose(),Tt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Oe),V.removeEventListener("sessionend",Wn),be.stop()};function tt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let w=$t.autoReset,F=vt.enabled,q=vt.autoUpdate,Y=vt.needsUpdate,B=vt.type;lt(),$t.autoReset=w,vt.enabled=F,vt.autoUpdate=q,vt.needsUpdate=Y,vt.type=B}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function At(w){let F=w.target;F.removeEventListener("dispose",At),Xt(F)}function Xt(w){Qt(w),wt.remove(w)}function Qt(w){let F=wt.get(w).programs;F!==void 0&&(F.forEach(function(q){Tt.releaseProgram(q)}),w.isShaderMaterial&&Tt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,q,Y,B,ft){F===null&&(F=Ft);let Mt=B.isMesh&&B.matrixWorld.determinant()<0,Rt=Rf(w,F,q,Y,B);Et.setMaterial(Y,Mt);let Ct=q.index,Vt=1;if(Y.wireframe===!0){if(Ct=at.getWireframeAttribute(q),Ct===void 0)return;Vt=2}let qt=q.drawRange,Pt=q.attributes.position,te=qt.start*Vt,ce=(qt.start+qt.count)*Vt;ft!==null&&(te=Math.max(te,ft.start*Vt),ce=Math.min(ce,(ft.start+ft.count)*Vt)),Ct!==null?(te=Math.max(te,0),ce=Math.min(ce,Ct.count)):Pt!=null&&(te=Math.max(te,0),ce=Math.min(ce,Pt.count));let le=ce-te;if(le<0||le===1/0)return;Lt.setup(B,Y,Rt,q,Ct);let $e,ne=Z;if(Ct!==null&&($e=et.get(Ct),ne=gt,ne.setIndex($e)),B.isMesh)Y.wireframe===!0?(Et.setLineWidth(Y.wireframeLinewidth*Wt()),ne.setMode(N.LINES)):ne.setMode(N.TRIANGLES);else if(B.isLine){let It=Y.linewidth;It===void 0&&(It=1),Et.setLineWidth(It*Wt()),B.isLineSegments?ne.setMode(N.LINES):B.isLineLoop?ne.setMode(N.LINE_LOOP):ne.setMode(N.LINE_STRIP)}else B.isPoints?ne.setMode(N.POINTS):B.isSprite&&ne.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ne.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))ne.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let It=B._multiDrawStarts,Xn=B._multiDrawCounts,ie=B._multiDrawCount,Sn=Ct?et.get(Ct).bytesPerElement:1,us=wt.get(Y).currentProgram.getUniforms();for(let sn=0;sn<ie;sn++)us.setValue(N,"_gl_DrawID",sn),ne.render(It[sn]/Sn,Xn[sn])}else if(B.isInstancedMesh)ne.renderInstances(te,le,B.count);else if(q.isInstancedBufferGeometry){let It=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Xn=Math.min(q.instanceCount,It);ne.renderInstances(te,le,Xn)}else ne.render(te,le)};function Yt(w,F,q){w.transparent===!0&&w.side===Tn&&w.forceSinglePass===!1?(w.side=ke,w.needsUpdate=!0,Jr(w,F,q),w.side=Mi,w.needsUpdate=!0,Jr(w,F,q),w.side=Tn):Jr(w,F,q)}this.compile=function(w,F,q=null){q===null&&(q=w),p=Jt.get(q),p.init(F),v.push(p),q.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==q&&w.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let Y=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ft=B.material;if(ft)if(Array.isArray(ft))for(let Mt=0;Mt<ft.length;Mt++){let Rt=ft[Mt];Yt(Rt,q,B),Y.add(Rt)}else Yt(ft,q,B),Y.add(ft)}),v.pop(),p=null,Y},this.compileAsync=function(w,F,q=null){let Y=this.compile(w,F,q);return new Promise(B=>{function ft(){if(Y.forEach(function(Mt){wt.get(Mt).currentProgram.isReady()&&Y.delete(Mt)}),Y.size===0){B(w);return}setTimeout(ft,10)}kt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Ot=null;function Ht(w){Ot&&Ot(w)}function Oe(){be.stop()}function Wn(){be.start()}let be=new rd;be.setAnimationLoop(Ht),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(w){Ot=w,V.setAnimationLoop(w),w===null?be.stop():be.start()},V.addEventListener("sessionstart",Oe),V.addEventListener("sessionend",Wn),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(F),F=V.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,F,C),p=Jt.get(w,v.length),p.init(F),v.push(p),_t.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),U.setFromProjectionMatrix(_t),ot=this.localClippingEnabled,k=dt.init(this.clippingPlanes,ot),m=yt.get(w,S.length),m.init(),S.push(m),V.enabled===!0&&V.isPresenting===!0){let ft=x.xr.getDepthSensingMesh();ft!==null&&ar(ft,F,-1/0,x.sortObjects)}ar(w,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(st,$),bt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,bt&&it.addToRenderList(m,w),this.info.render.frame++,k===!0&&dt.beginShadows();let q=p.state.shadowsArray;vt.render(q,w,F),k===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){let ft=F.cameras;if(B.length>0)for(let Mt=0,Rt=ft.length;Mt<Rt;Mt++){let Ct=ft[Mt];Ph(Y,B,w,Ct)}bt&&it.render(w);for(let Mt=0,Rt=ft.length;Mt<Rt;Mt++){let Ct=ft[Mt];Ch(m,w,Ct,Ct.viewport)}}else B.length>0&&Ph(Y,B,w,F),bt&&it.render(w),Ch(m,w,F);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(x,w,F),Lt.resetDefaultState(),M=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],k===!0&&dt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ar(w,F,q,Y){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||U.intersectsSprite(w)){Y&&Dt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_t);let Mt=j.update(w),Rt=w.material;Rt.visible&&m.push(w,Mt,Rt,q,Dt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||U.intersectsObject(w))){let Mt=j.update(w),Rt=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Dt.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Dt.copy(Mt.boundingSphere.center)),Dt.applyMatrix4(w.matrixWorld).applyMatrix4(_t)),Array.isArray(Rt)){let Ct=Mt.groups;for(let Vt=0,qt=Ct.length;Vt<qt;Vt++){let Pt=Ct[Vt],te=Rt[Pt.materialIndex];te&&te.visible&&m.push(w,Mt,te,q,Dt.z,Pt)}}else Rt.visible&&m.push(w,Mt,Rt,q,Dt.z,null)}}let ft=w.children;for(let Mt=0,Rt=ft.length;Mt<Rt;Mt++)ar(ft[Mt],F,q,Y)}function Ch(w,F,q,Y){let B=w.opaque,ft=w.transmissive,Mt=w.transparent;p.setupLightsView(q),k===!0&&dt.setGlobalState(x.clippingPlanes,q),Y&&Et.viewport(P.copy(Y)),B.length>0&&Zr(B,F,q),ft.length>0&&Zr(ft,F,q),Mt.length>0&&Zr(Mt,F,q),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Ph(w,F,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new ni(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Ir:ei,minFilter:Yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let ft=p.state.transmissionRenderTarget[Y.id],Mt=Y.viewport||P;ft.setSize(Mt.z,Mt.w);let Rt=x.getRenderTarget();x.setRenderTarget(ft),x.getClearColor(G),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),bt&&it.render(q);let Ct=x.toneMapping;x.toneMapping=vi;let Vt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),k===!0&&dt.setGlobalState(x.clippingPlanes,Y),Zr(w,q,Y),R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft),kt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Pt=0,te=F.length;Pt<te;Pt++){let ce=F[Pt],le=ce.object,$e=ce.geometry,ne=ce.material,It=ce.group;if(ne.side===Tn&&le.layers.test(Y.layers)){let Xn=ne.side;ne.side=ke,ne.needsUpdate=!0,Ih(le,q,Y,$e,ne,It),ne.side=Xn,ne.needsUpdate=!0,qt=!0}}qt===!0&&(R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft))}x.setRenderTarget(Rt),x.setClearColor(G,J),Vt!==void 0&&(Y.viewport=Vt),x.toneMapping=Ct}function Zr(w,F,q){let Y=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ft=w.length;B<ft;B++){let Mt=w[B],Rt=Mt.object,Ct=Mt.geometry,Vt=Y===null?Mt.material:Y,qt=Mt.group;Rt.layers.test(q.layers)&&Ih(Rt,F,q,Ct,Vt,qt)}}function Ih(w,F,q,Y,B,ft){w.onBeforeRender(x,F,q,Y,B,ft),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(x,F,q,Y,w,ft),B.transparent===!0&&B.side===Tn&&B.forceSinglePass===!1?(B.side=ke,B.needsUpdate=!0,x.renderBufferDirect(q,F,Y,B,w,ft),B.side=Mi,B.needsUpdate=!0,x.renderBufferDirect(q,F,Y,B,w,ft),B.side=Tn):x.renderBufferDirect(q,F,Y,B,w,ft),w.onAfterRender(x,F,q,Y,B,ft)}function Jr(w,F,q){F.isScene!==!0&&(F=Ft);let Y=wt.get(w),B=p.state.lights,ft=p.state.shadowsArray,Mt=B.state.version,Rt=Tt.getParameters(w,B.state,ft,F,q),Ct=Tt.getProgramCacheKey(Rt),Vt=Y.programs;Y.environment=w.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(w.isMeshStandardMaterial?H:b).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Vt===void 0&&(w.addEventListener("dispose",At),Vt=new Map,Y.programs=Vt);let qt=Vt.get(Ct);if(qt!==void 0){if(Y.currentProgram===qt&&Y.lightsStateVersion===Mt)return Dh(w,Rt),qt}else Rt.uniforms=Tt.getUniforms(w),w.onBeforeCompile(Rt,x),qt=Tt.acquireProgram(Rt,Ct),Vt.set(Ct,qt),Y.uniforms=Rt.uniforms;let Pt=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=dt.uniform),Dh(w,Rt),Y.needsLights=Pf(w),Y.lightsStateVersion=Mt,Y.needsLights&&(Pt.ambientLightColor.value=B.state.ambient,Pt.lightProbe.value=B.state.probe,Pt.directionalLights.value=B.state.directional,Pt.directionalLightShadows.value=B.state.directionalShadow,Pt.spotLights.value=B.state.spot,Pt.spotLightShadows.value=B.state.spotShadow,Pt.rectAreaLights.value=B.state.rectArea,Pt.ltc_1.value=B.state.rectAreaLTC1,Pt.ltc_2.value=B.state.rectAreaLTC2,Pt.pointLights.value=B.state.point,Pt.pointLightShadows.value=B.state.pointShadow,Pt.hemisphereLights.value=B.state.hemi,Pt.directionalShadowMap.value=B.state.directionalShadowMap,Pt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pt.spotShadowMap.value=B.state.spotShadowMap,Pt.spotLightMatrix.value=B.state.spotLightMatrix,Pt.spotLightMap.value=B.state.spotLightMap,Pt.pointShadowMap.value=B.state.pointShadowMap,Pt.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=qt,Y.uniformsList=null,qt}function Lh(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=Ls.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Dh(w,F){let q=wt.get(w);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Rf(w,F,q,Y,B){F.isScene!==!0&&(F=Ft),R.resetTextureUnits();let ft=F.fog,Mt=Y.isMeshStandardMaterial?F.environment:null,Rt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ws,Ct=(Y.isMeshStandardMaterial?H:b).get(Y.envMap||Mt),Vt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,qt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pt=!!q.morphAttributes.position,te=!!q.morphAttributes.normal,ce=!!q.morphAttributes.color,le=vi;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(le=x.toneMapping);let $e=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ne=$e!==void 0?$e.length:0,It=wt.get(Y),Xn=p.state.lights;if(k===!0&&(ot===!0||w!==y)){let fn=w===y&&Y.id===M;dt.setState(Y,w,fn)}let ie=!1;Y.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Xn.state.version||It.outputColorSpace!==Rt||B.isBatchedMesh&&It.batching===!1||!B.isBatchedMesh&&It.batching===!0||B.isBatchedMesh&&It.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&It.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&It.instancing===!1||!B.isInstancedMesh&&It.instancing===!0||B.isSkinnedMesh&&It.skinning===!1||!B.isSkinnedMesh&&It.skinning===!0||B.isInstancedMesh&&It.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&It.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&It.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&It.instancingMorph===!1&&B.morphTexture!==null||It.envMap!==Ct||Y.fog===!0&&It.fog!==ft||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==dt.numPlanes||It.numIntersection!==dt.numIntersection)||It.vertexAlphas!==Vt||It.vertexTangents!==qt||It.morphTargets!==Pt||It.morphNormals!==te||It.morphColors!==ce||It.toneMapping!==le||It.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,It.__version=Y.version);let Sn=It.currentProgram;ie===!0&&(Sn=Jr(Y,F,B));let us=!1,sn=!1,cr=!1,he=Sn.getUniforms(),Dn=It.uniforms;if(Et.useProgram(Sn.program)&&(us=!0,sn=!0,cr=!0),Y.id!==M&&(M=Y.id,sn=!0),us||y!==w){Et.buffers.depth.getReversed()?(K.copy(w.projectionMatrix),Np(K),Op(K),he.setValue(N,"projectionMatrix",K)):he.setValue(N,"projectionMatrix",w.projectionMatrix),he.setValue(N,"viewMatrix",w.matrixWorldInverse);let hi=he.map.cameraPosition;hi!==void 0&&hi.setValue(N,St.setFromMatrixPosition(w.matrixWorld)),Ut.logarithmicDepthBuffer&&he.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&he.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,sn=!0,cr=!0)}if(B.isSkinnedMesh){he.setOptional(N,B,"bindMatrix"),he.setOptional(N,B,"bindMatrixInverse");let fn=B.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),he.setValue(N,"boneTexture",fn.boneTexture,R))}B.isBatchedMesh&&(he.setOptional(N,B,"batchingTexture"),he.setValue(N,"batchingTexture",B._matricesTexture,R),he.setOptional(N,B,"batchingIdTexture"),he.setValue(N,"batchingIdTexture",B._indirectTexture,R),he.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null&&he.setValue(N,"batchingColorTexture",B._colorsTexture,R));let lr=q.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&X.update(B,q,Sn),(sn||It.receiveShadow!==B.receiveShadow)&&(It.receiveShadow=B.receiveShadow,he.setValue(N,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Dn.envMap.value=Ct,Dn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(Dn.envMapIntensity.value=F.environmentIntensity),sn&&(he.setValue(N,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&Cf(Dn,cr),ft&&Y.fog===!0&&mt.refreshFogUniforms(Dn,ft),mt.refreshMaterialUniforms(Dn,Y,W,Q,p.state.transmissionRenderTarget[w.id]),Ls.upload(N,Lh(It),Dn,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ls.upload(N,Lh(It),Dn,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&he.setValue(N,"center",B.center),he.setValue(N,"modelViewMatrix",B.modelViewMatrix),he.setValue(N,"normalMatrix",B.normalMatrix),he.setValue(N,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let fn=Y.uniformsGroups;for(let hi=0,ui=fn.length;hi<ui;hi++){let Uh=fn[hi];I.update(Uh,Sn),I.bind(Uh,Sn)}}return Sn}function Cf(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Pf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,F,q){wt.get(w.texture).__webglTexture=F,wt.get(w.depthTexture).__webglTexture=q;let Y=wt.get(w);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){let q=wt.get(w);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,q=0){C=w,E=F,A=q;let Y=!0,B=null,ft=!1,Mt=!1;if(w){let Ct=wt.get(w);if(Ct.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1;else if(Ct.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Ct.__hasExternalTextures)R.rebindTextures(w,wt.get(w.texture).__webglTexture,wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Pt=w.depthTexture;if(Ct.__boundDepthTexture!==Pt){if(Pt!==null&&wt.has(Pt)&&(w.width!==Pt.image.width||w.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}let Vt=w.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Mt=!0);let qt=wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qt[F])?B=qt[F][q]:B=qt[F],ft=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?B=wt.get(w).__webglMultisampledFramebuffer:Array.isArray(qt)?B=qt[q]:B=qt,P.copy(w.viewport),z.copy(w.scissor),O=w.scissorTest}else P.copy(nt).multiplyScalar(W).floor(),z.copy(ct).multiplyScalar(W).floor(),O=pt;if(Et.bindFramebuffer(N.FRAMEBUFFER,B)&&Y&&Et.drawBuffers(w,B),Et.viewport(P),Et.scissor(z),Et.setScissorTest(O),ft){let Ct=wt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ct.__webglTexture,q)}else if(Mt){let Ct=wt.get(w.texture),Vt=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.__webglTexture,q||0,Vt)}M=-1},this.readRenderTargetPixels=function(w,F,q,Y,B,ft,Mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Rt=Rt[Mt]),Rt){Et.bindFramebuffer(N.FRAMEBUFFER,Rt);try{let Ct=w.texture,Vt=Ct.format,qt=Ct.type;if(!Ut.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-Y&&q>=0&&q<=w.height-B&&N.readPixels(F,q,Y,B,rt.convert(Vt),rt.convert(qt),ft)}finally{let Ct=C!==null?wt.get(C).__webglFramebuffer:null;Et.bindFramebuffer(N.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(w,F,q,Y,B,ft,Mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(Rt=Rt[Mt]),Rt){let Ct=w.texture,Vt=Ct.format,qt=Ct.type;if(!Ut.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-Y&&q>=0&&q<=w.height-B){Et.bindFramebuffer(N.FRAMEBUFFER,Rt);let Pt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.bufferData(N.PIXEL_PACK_BUFFER,ft.byteLength,N.STREAM_READ),N.readPixels(F,q,Y,B,rt.convert(Vt),rt.convert(qt),0);let te=C!==null?wt.get(C).__webglFramebuffer:null;Et.bindFramebuffer(N.FRAMEBUFFER,te);let ce=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Up(N,ce,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ft),N.deleteBuffer(Pt),N.deleteSync(ce),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,q=0){w.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);let Y=Math.pow(2,-q),B=Math.floor(w.image.width*Y),ft=Math.floor(w.image.height*Y),Mt=F!==null?F.x:0,Rt=F!==null?F.y:0;R.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Mt,Rt,B,ft),Et.unbindTexture()},this.copyTextureToTexture=function(w,F,q=null,Y=null,B=0){w.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1],F=arguments[2],B=arguments[3]||0,q=null);let ft,Mt,Rt,Ct,Vt,qt,Pt,te,ce,le=w.isCompressedTexture?w.mipmaps[B]:w.image;q!==null?(ft=q.max.x-q.min.x,Mt=q.max.y-q.min.y,Rt=q.isBox3?q.max.z-q.min.z:1,Ct=q.min.x,Vt=q.min.y,qt=q.isBox3?q.min.z:0):(ft=le.width,Mt=le.height,Rt=le.depth||1,Ct=0,Vt=0,qt=0),Y!==null?(Pt=Y.x,te=Y.y,ce=Y.z):(Pt=0,te=0,ce=0);let $e=rt.convert(F.format),ne=rt.convert(F.type),It;F.isData3DTexture?(R.setTexture3D(F,0),It=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),It=N.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),It=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);let Xn=N.getParameter(N.UNPACK_ROW_LENGTH),ie=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Sn=N.getParameter(N.UNPACK_SKIP_PIXELS),us=N.getParameter(N.UNPACK_SKIP_ROWS),sn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,le.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ct),N.pixelStorei(N.UNPACK_SKIP_ROWS,Vt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,qt);let cr=w.isDataArrayTexture||w.isData3DTexture,he=F.isDataArrayTexture||F.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Dn=wt.get(w),lr=wt.get(F),fn=wt.get(Dn.__renderTarget),hi=wt.get(lr.__renderTarget);Et.bindFramebuffer(N.READ_FRAMEBUFFER,fn.__webglFramebuffer),Et.bindFramebuffer(N.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let ui=0;ui<Rt;ui++)cr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,wt.get(w).__webglTexture,B,qt+ui),w.isDepthTexture?(he&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,wt.get(F).__webglTexture,B,ce+ui),N.blitFramebuffer(Ct,Vt,ft,Mt,Pt,te,ft,Mt,N.DEPTH_BUFFER_BIT,N.NEAREST)):he?N.copyTexSubImage3D(It,B,Pt,te,ce+ui,Ct,Vt,ft,Mt):N.copyTexSubImage2D(It,B,Pt,te,ce+ui,Ct,Vt,ft,Mt);Et.bindFramebuffer(N.READ_FRAMEBUFFER,null),Et.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else he?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(It,B,Pt,te,ce,ft,Mt,Rt,$e,ne,le.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(It,B,Pt,te,ce,ft,Mt,Rt,$e,le.data):N.texSubImage3D(It,B,Pt,te,ce,ft,Mt,Rt,$e,ne,le):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,Pt,te,ft,Mt,$e,ne,le.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,Pt,te,le.width,le.height,$e,le.data):N.texSubImage2D(N.TEXTURE_2D,B,Pt,te,ft,Mt,$e,ne,le);N.pixelStorei(N.UNPACK_ROW_LENGTH,Xn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ie),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Sn),N.pixelStorei(N.UNPACK_SKIP_ROWS,us),N.pixelStorei(N.UNPACK_SKIP_IMAGES,sn),B===0&&F.generateMipmaps&&N.generateMipmap(It),Et.unbindTexture()},this.copyTextureToTexture3D=function(w,F,q=null,Y=null,B=0){return w.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,w=arguments[2],F=arguments[3],B=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,q,Y,B)},this.initRenderTarget=function(w){wt.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Et.unbindTexture()},this.resetState=function(){E=0,A=0,C=null,Et.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var bi=class extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var tl=class extends Ke{constructor(t=null,e=1,n=1,i,r,o,a,c,l=an,h=an,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fo=class extends cn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ts=new ee,Ou=new ee,xo=[],Fu=new ii,Px=new ee,pr=new zt,mr=new Ji,Cn=class extends zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Px)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),Fu.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(Fu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),mr.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(n),t.ray.intersectsSphere(mr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ts),Ou.multiplyMatrices(n,Ts),pr.matrixWorld=Ou,pr.raycast(t,xo);for(let o=0,a=xo.length;o<a;o++){let c=xo[o];c.instanceId=r,c.object=this,e.push(c)}xo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new tl(new Float32Array(i*this.count),i,this.count,El,On));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Bn=class extends Ke{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new Nt:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,i=[],r=[],o=[],a=new L,c=new ee;for(let f=0;f<=t;f++){let _=f/t;i[f]=this.getTangentAt(_,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Ie(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,_))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ie(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Bo=class extends Pn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Nt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},el=class extends Bo{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Pl(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var yo=new L,qa=new Pl,Ya=new Pl,Za=new Pl,Ar=class extends Pn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(yo.subVectors(i[0],i[1]).add(i[0]),l=yo);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(yo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=yo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),qa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,g,m),Ya.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,g,m),Za.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ya.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Za.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(qa.calc(c),Ya.calc(c),Za.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Bu(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Ix(s,t){let e=1-s;return e*e*t}function Lx(s,t){return 2*(1-s)*s*t}function Dx(s,t){return s*s*t}function Sr(s,t,e,n){return Ix(s,t)+Lx(s,e)+Dx(s,n)}function Ux(s,t){let e=1-s;return e*e*e*t}function Nx(s,t){let e=1-s;return 3*e*e*s*t}function Ox(s,t){return 3*(1-s)*s*s*t}function Fx(s,t){return s*s*s*t}function br(s,t,e,n,i){return Ux(s,t)+Nx(s,e)+Ox(s,n)+Fx(s,i)}var nl=class extends Pn{constructor(t=new Nt,e=new Nt,n=new Nt,i=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Nt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(br(t,i.x,r.x,o.x,a.x),br(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},il=class extends Pn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(br(t,i.x,r.x,o.x,a.x),br(t,i.y,r.y,o.y,a.y),br(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sl=class extends Pn{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rl=class extends Pn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ol=class extends Pn{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Sr(t,i.x,r.x,o.x),Sr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends Pn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Sr(t,i.x,r.x,o.x),Sr(t,i.y,r.y,o.y),Sr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},al=class extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Bu(a,c.x,l.x,h.x,u.x),Bu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Nt().fromArray(i))}return this}},Bx=Object.freeze({__proto__:null,ArcCurve:el,CatmullRomCurve3:Ar,CubicBezierCurve:nl,CubicBezierCurve3:il,EllipseCurve:Bo,LineCurve:sl,LineCurve3:rl,QuadraticBezierCurve:ol,QuadraticBezierCurve3:zo,SplineCurve:al});var ko=class s extends si{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,d=new L,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){let S=[],v=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){let E=T/e;u.x=-t*Math.cos(i+E*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+E*r)*Math.sin(o+v*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(E+x,1-v),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let v=h[p][S+1],x=h[p][S],T=h[p+1][S],E=h[p+1][S+1];(p!==0||o>0)&&f.push(v,x,E),(p!==n-1||c<Math.PI)&&f.push(x,T,E)}this.setIndex(f),this.setAttribute("position",new qe(_,3)),this.setAttribute("normal",new qe(g,3)),this.setAttribute("uv",new qe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Rr=class s extends si{constructor(t=new zo(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new Nt,h=new L,u=[],d=[],f=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(f,2));function g(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),S(),p()}function m(v){h=t.getPointAt(v/e,h);let x=o.normals[v],T=o.binormals[v];for(let E=0;E<=i;E++){let A=E/i*Math.PI*2,C=Math.sin(A),M=-Math.cos(A);c.x=M*x.x+C*T.x,c.y=M*x.y+C*T.y,c.z=M*x.z+C*T.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let x=1;x<=i;x++){let T=(i+1)*(v-1)+(x-1),E=(i+1)*v+(x-1),A=(i+1)*v+x,C=(i+1)*(v-1)+x;_.push(T,E,C),_.push(E,A,C)}}function S(){for(let v=0;v<=e;v++)for(let x=0;x<=i;x++)l.x=v/e,l.y=x/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Bx[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ae=class extends $i{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=td,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ki=class extends Ae{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function vo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function zx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Hs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cl=class extends Hs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zh,endingEnd:zh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case kh:r=t,a=2*e-n;break;case Vh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case kh:o=t,c=2*n-e;break;case Vh:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,S=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,v=(-1-f)*m+(1.5+f)*g+.5*_,x=f*m-f*g;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+S*o[l+T]+v*o[c+T]+x*o[u+T];return r}},ll=class extends Hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},hl=class extends Hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},In=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vo(e,this.TimeBufferType),this.values=vo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vo(t.times,Array),values:vo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new cl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case To:e=this.InterpolantFactoryMethodDiscrete;break;case Oc:e=this.InterpolantFactoryMethodLinear;break;case ya:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return To;case this.InterpolantFactoryMethodLinear:return Oc;case this.InterpolantFactoryMethodSmooth:return ya}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&zx(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ya,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[d+_]||g!==e[f+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Oc;var Qi=class extends In{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=To;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends In{};ul.prototype.ValueTypeName="color";var dl=class extends In{};dl.prototype.ValueTypeName="number";var fl=class extends Hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)Rn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Vo=class extends In{InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}};Vo.prototype.ValueTypeName="quaternion";Vo.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends In{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=To;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends In{};pl.prototype.ValueTypeName="vector";var ml=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],_=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}},kx=new ml,gl=class{constructor(t){this.manager=t!==void 0?t:kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cr=class extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Gs=class extends Cr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ja=new ee,zu=new L,ku=new L,Ho=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(zu),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),Ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Vu=new ee,gr=new L,$a=new L,_l=class extends Ho{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gr.setFromMatrixPosition(t.matrixWorld),n.position.copy(gr),$a.copy(n.position),$a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($a),n.updateMatrixWorld(),i.makeTranslation(-gr.x,-gr.y,-gr.z),Vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu)}},Go=class extends Cr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _l}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},xl=class extends Ho{constructor(){super(new zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ei=class extends Cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new xl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Il="\\[\\]\\.:\\/",Vx=new RegExp("["+Il+"]","g"),Ll="[^"+Il+"]",Hx="[^"+Il.replace("\\.","")+"]",Gx=/((?:WC+[\/:])*)/.source.replace("WC",Ll),Wx=/(WCOD+)?/.source.replace("WCOD",Hx),Xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ll),qx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ll),Yx=new RegExp("^"+Gx+Wx+Xx+qx+"$"),Zx=["material","materials","bones","map"],yl=class{constructor(t,e,n){let i=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vx,"")}static parseTrackName(t){let e=Yx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Zx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=yl;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Iv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);var Zo={high:{dpr:1.6,blocks:18,grid:5,bevel:3,fps:60},medium:{dpr:1.25,blocks:12,grid:4,bevel:2,fps:60},low:{dpr:1,blocks:8,grid:3,bevel:1,fps:30}};function Lr(){let s="auto";try{s=localStorage.getItem("portfolio-quality")||"auto"}catch{}if(Zo[s])return s;let t=navigator.hardwareConcurrency||4,e=navigator.deviceMemory||4;return t<=2||e<=2?"low":innerWidth<900||e<=4?"medium":"high"}var Dr=new L;function _n(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;Dr.copy(t),Dr[n]=0,Dr.normalize();let l=.5*o/(o+a),h=1-Dr.angleTo(s)/c;return Math.sign(Dr[e])===1?h*l:a/(o+a)+l+l*(1-h)}var Ln=class extends ye{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,c=new L,l=new L(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,_=new L,g=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:_.set(1,0,0),d[p+0]=_n(_,c,"z","y",r,n),d[p+1]=1-_n(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),d[p+0]=1-_n(_,c,"z","y",r,n),d[p+1]=1-_n(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),d[p+0]=1-_n(_,c,"x","z",r,t),d[p+1]=_n(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[p+0]=1-_n(_,c,"x","z",r,t),d[p+1]=1-_n(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[p+0]=1-_n(_,c,"x","y",r,t),d[p+1]=1-_n(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),d[p+0]=_n(_,c,"x","y",r,t),d[p+1]=1-_n(_,c,"y","x",r,e);break}}};var Jo=class extends bi{constructor(){super();let t=new ye;t.deleteAttribute("uv");let e=new Ae({side:ke}),n=new Ae,i=new Go(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new zt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new zt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new zt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new zt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new zt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new zt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new zt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new zt(t,Zs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new zt(t,Zs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let _=new zt(t,Zs(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);let g=new zt(t,Zs(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let m=new zt(t,Zs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new zt(t,Zs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Zs(s){let t=new Ye;return t.color.setScalar(s),t}function $o({size:s=2,software:t=!1,orange:e}={}){let n=new de,i=new de,r=[],o=e||new Ki({color:"#e96c0c",metalness:.48,roughness:.38,clearcoat:.08,clearcoatRoughness:.5,envMapIntensity:.7}),a=new Ki({color:"#e96c0c",metalness:.5,roughness:.46,envMapIntensity:.65}),c=new Ae({color:"#211e19",metalness:.5,roughness:.4}),l=t?new ye(1,1,1):new Ln(1,1,1,4,.0325),h=t?new ln(.91*s,.91*s):new Ln(.91*s,.91*s,.0125*s,3,.006*s),u=new ye(.006*s,.0225*s,.0015*s),d=new zt(l,a);d.scale.setScalar(s),d.renderOrder=2,n.add(d,i);let f=new Bt(t?"#dc630c":"#e96c0c"),_=new Bt("#25211c");for(let[p,S]of[[0,0,1],[0,0,-1],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0]].entries()){let v=new zt(h,o),x=new L(...S);if(v.renderOrder=3,v.quaternion.setFromUnitVectors(new L(0,0,1),x),v.position.copy(x).multiplyScalar(.504*s),i.add(v),r.push({part:v,normal:x}),p===0)for(let T=0;T<7;T++){let E=new zt(u,c);E.renderOrder=4,E.position.set((-.325+T*.012)*s,-.325*s,.008*s),v.add(E)}}function g({fracture:p=0,spread:S=0}={}){let v=gn.clamp(p,0,1),x=gn.clamp(S,0,1);d.visible=i.visible=v<.8,d.scale.setScalar(s*Math.max(.001,1-v)),i.scale.setScalar(Math.max(.001,1-v)),r.forEach(({part:T,normal:E})=>T.position.copy(E).multiplyScalar((.504+x*.31)*s)),a.color.copy(f).lerp(_,x)}function m(){l.dispose(),h.dispose(),u.dispose(),a.dispose(),c.dispose(),e||o.dispose()}return{group:n,core:d,panelsGroup:i,panels:r,orange:o,update:g,dispose:m}}function Ko(s,t){let e=new ks(s),n=new Jo,i=e.fromScene(n,.04);return t.environment=i.texture,e.dispose(),n.dispose(),i}var Js=class{constructor(t){if(this.canvas=t,this.context=t.getContext("2d",{alpha:!0}),!this.context)throw new Error("Canvas unavailable");this.capabilities={getMaxAnisotropy:()=>1},this.pixelRatio=1,this.mvp=new ee,this.normalMatrix=new Gt,this.vector=new L,this.normal=new L,this.light=new L(-.5,.8,.9).normalize(),this.half=new L(-.2,.4,1).normalize()}setPixelRatio(t){this.pixelRatio=Math.min(t,1.25)}setSize(t,e){this.width=t,this.height=e,this.canvas.width=Math.round(t*this.pixelRatio),this.canvas.height=Math.round(e*this.pixelRatio)}render(t,e){let n=this.context,i=this.width,r=this.height,o=this.pixelRatio;n.setTransform(o,0,0,o,0,0),n.clearRect(0,0,i,r),t.updateMatrixWorld(),e.updateMatrixWorld(),e.matrixWorldInverse.copy(e.matrixWorld).invert();let a=[],c=new ee().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),l=(f,_,g=null)=>{if(!f.isMesh||f.userData.skipSoftware)return;let m=f.material;if(!m||m.opacity<.005)return;let p=f.geometry,S=p.attributes.position,v=p.attributes.uv,x=p.attributes.normal,T=p.index;if(!S)return;this.mvp.multiplyMatrices(c,_),this.normalMatrix.getNormalMatrix(_);let E=[];for(let C=0;C<S.count;C++)this.vector.fromBufferAttribute(S,C).applyMatrix4(this.mvp),E.push({x:(this.vector.x*.5+.5)*i,y:(-.5*this.vector.y+.5)*r,z:this.vector.z});let A=T?T.count:S.count;for(let C=0;C<A;C+=3){let M=T?T.getX(C):C,y=T?T.getX(C+1):C+1,P=T?T.getX(C+2):C+2,z=E[M],O=E[y],G=E[P];if(z.z>1||z.z<-1||O.z>1||G.z>1)continue;let J=(O.x-z.x)*(G.y-z.y)-(O.y-z.y)*(G.x-z.x);if(m.side!==Tn&&J>=0||Math.max(z.x,O.x,G.x)<0||Math.min(z.x,O.x,G.x)>i||Math.max(z.y,O.y,G.y)<0||Math.min(z.y,O.y,G.y)>r)continue;let D=1,Q=0,W=0;!m.isMeshBasicMaterial&&x&&(this.normal.set(x.getX(M)+x.getX(y)+x.getX(P),x.getY(M)+x.getY(y)+x.getY(P),x.getZ(M)+x.getZ(y)+x.getZ(P)).applyMatrix3(this.normalMatrix).normalize(),D=.26+Math.max(0,this.normal.dot(this.light))*.9,Q=Math.pow(Math.max(0,this.normal.dot(this.half)),24)*.05,W=Math.pow(1-Math.abs(this.normal.z),4)*.035);let st=m.color.clone();g&&st.multiply(g),st.convertLinearToSRGB();let $=[st.r,st.g,st.b].map((pt,U)=>Math.round(Math.min(1,pt*D+Q*(U===0?1:U===1?.82:.63)+W*(U===0?.9:U===1?.36:.16))*255)),nt=null;if(m.map?.image&&v){let pt=m.map.image;nt={img:pt,uv:[M,y,P].map(U=>({x:v.getX(U)*pt.width,y:(1-v.getY(U))*pt.height}))}}let ct=null;if(!nt&&p.type==="BoxGeometry"&&T&&C%6===0){ct=[...new Set(Array.from({length:6},(ot,K)=>T.getX(C+K)))].map(ot=>E[ot]);let U=ct.reduce((ot,K)=>ot+K.x,0)/4,k=ct.reduce((ot,K)=>ot+K.y,0)/4;ct.sort((ot,K)=>Math.atan2(ot.y-k,ot.x-U)-Math.atan2(K.y-k,K.x-U)),C+=3}a.push({a:z,b:O,c:G,z:ct?ct.reduce((pt,U)=>pt+U.z,0)/4:(z.z+O.z+G.z)/3,color:`rgb(${$.join(",")})`,alpha:m.opacity,order:f.renderOrder,tex:nt,quad:ct})}},h=new ee,u=new ee,d=new Bt;t.traverseVisible(f=>{if(!(!f.isMesh||f.userData.skipSoftware))if(f.isInstancedMesh)for(let _=0;_<f.count;_++)f.getMatrixAt(_,h),u.multiplyMatrices(f.matrixWorld,h),f.instanceColor&&f.getColorAt(_,d),l(f,u,f.instanceColor?d:null);else l(f,f.matrixWorld)}),a.sort((f,_)=>f.order-_.order||_.z-f.z);for(let f of a){if(n.globalAlpha=f.alpha,f.tex){this.drawTexture(f);continue}n.fillStyle=f.color,n.strokeStyle=f.color,n.lineWidth=.5,n.beginPath();let _=f.quad||[f.a,f.b,f.c];n.moveTo(_[0].x,_[0].y);for(let g of _.slice(1))n.lineTo(g.x,g.y);n.closePath(),n.fill(),n.stroke()}n.globalAlpha=1}drawTexture(t){let e=this.context,[n,i,r]=t.tex.uv,[o,a,c]=[t.a,t.b,t.c],l=n.x*(i.y-r.y)+i.x*(r.y-n.y)+r.x*(n.y-i.y);if(Math.abs(l)<.001)return;let h=(o.x*(i.y-r.y)+a.x*(r.y-n.y)+c.x*(n.y-i.y))/l,u=(o.y*(i.y-r.y)+a.y*(r.y-n.y)+c.y*(n.y-i.y))/l,d=(o.x*(r.x-i.x)+a.x*(n.x-r.x)+c.x*(i.x-n.x))/l,f=(o.y*(r.x-i.x)+a.y*(n.x-r.x)+c.y*(i.x-n.x))/l,_=(o.x*(i.x*r.y-r.x*i.y)+a.x*(r.x*n.y-n.x*r.y)+c.x*(n.x*i.y-i.x*n.y))/l,g=(o.y*(i.x*r.y-r.x*i.y)+a.y*(r.x*n.y-n.x*r.y)+c.y*(n.x*i.y-i.x*n.y))/l;e.save(),e.beginPath();let m=(o.x+a.x+c.x)/3,p=(o.y+a.y+c.y)/3,S=v=>{let x=v.x-m,T=v.y-p,E=Math.hypot(x,T)||1;return[v.x+x/E*.7,v.y+T/E*.7]};e.moveTo(...S(o)),e.lineTo(...S(a)),e.lineTo(...S(c)),e.closePath(),e.clip(),e.transform(h,u,d,f,_,g),e.drawImage(t.tex.img,0,0),e.restore()}};function hd(){if(!document.querySelector("#world"))return;let s=document.documentElement,t=document.querySelector(".art"),e=document.querySelector("#world"),n=document.querySelector(".portrait-opening")||document.querySelector("#journey"),i=document.querySelector("#portrait"),r=matchMedia("(prefers-reduced-motion: reduce)"),o=()=>r.matches||s.classList.contains("reduced-motion"),a=(U,k,ot)=>{let K=gn.clamp((ot-U)/(k-U),0,1);return K*K*(3-2*K)},c,l=!1;try{c=new Vs({canvas:e,alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{l=!0;try{c=new Js(e)}catch{s.dataset.renderer="static"}}let h=new bi,u=new zs(-4,4,2.7,-2.7,.1,30);u.position.z=10;let d;c&&!l&&(c.outputColorSpace=Ee,c.toneMapping=Pr,c.toneMappingExposure=1,d=Ko(c,h)),h.add(new Gs("#fff5e5","#635446",1.6));let f=new Ei("#fff8ee",2.8);f.position.set(-3,6,5),h.add(f);let _=$o({size:1.85,software:l});h.add(_.group),_.group.rotation.set(.22,-.49,-.05),_.group.traverse(U=>{U.isMesh&&(U.material.transparent=!0)});let g=JSON.parse(document.querySelector("#samples").textContent),m=Lr(),p=l?448:m==="low"?224:m==="medium"||innerWidth<700?448:896,S=new ye(1,1,1),v=new Ae({color:"#ffffff",metalness:.35,roughness:.48,transparent:!0}),x=new Cn(S,v,p);x.instanceMatrix.setUsage(qo),x.frustumCulled=!1,h.add(x);let T=new L,E=new fe,A=new Bt,C=U=>{let k=Math.sin((U+1)*127.1)*43758.5453;return k-Math.floor(k)},M=Array.from({length:p},(U,k)=>{let ot=g[Math.floor(k*g.length/p)],K=Math.ceil(Math.cbrt(p));return{start:new L((k%K/(K-1)-.5)*1.72,(Math.floor(k/K)%K/(K-1)-.5)*1.72,(Math.floor(k/K/K)/(K-1)-.5)*1.72).applyEuler(_.group.rotation),target:new L((ot[0]-.5)*2.85,(.5-ot[1])*3.8,0),color:new Bt(ot[2]),phase:C(k)*Math.PI*2,radius:.8+C(k+9)*.9,height:(C(k+28)-.5)*3.5,speed:.45+C(k+7)*.4}}),y=0,P=0,z=0,O=0,G=!0,J=!0,D=[["Seu neg\xF3cio tem<br>um <em>problema?</em>","Eu transformo em<br>solu\xE7\xE3o digital.","01 / O PONTO DE PARTIDA"],["Separar para<br><em>entender.</em>","Cada parte revela<br>um caminho poss\xEDvel.","02 / INVESTIGA\xC7\xC3O"],["Conectar faz<br><em>tomar forma.</em>","O movimento encontra dire\xE7\xE3o.","03 / CONEX\xC3O"],["Por tr\xE1s da solu\xE7\xE3o,<br><em>Abra\xE3o.</em>","Abra\xE3o Lima Ribeiro<br>Desenvolvedor de solu\xE7\xF5es digitais.","04 / QUEM RESOLVE"]],Q=-1;function W(){let U=y<.24?0:y<.57?1:y<.83?2:3;U!==Q&&(Q=U,document.querySelector("#headline").innerHTML=D[U][0],document.querySelector("#subline").innerHTML=D[U][1],document.querySelector("#chapter").textContent=D[U][2]),s.style.setProperty("--progress",y),i.style.opacity=a(.82,.97,y),i.setAttribute("aria-hidden",String(y<.83)),i.style.filter=`blur(${(1-a(.8,.96,y))*9}px)`,n.dataset.progress=y.toFixed(3),n.dataset.phase=String(U)}function st(){let U=n.getBoundingClientRect();P=gn.clamp(-U.top/(U.height-innerHeight),0,1),J=!0}addEventListener("scroll",st,{passive:!0});let $=()=>{if(!c)return;let U=t.getBoundingClientRect();c.setPixelRatio(Math.min(devicePixelRatio||1,l?1:innerWidth<700?1.25:1.6)),c.setSize(U.width,U.height,!1),u.left=-2.7*U.width/U.height,u.right=2.7*U.width/U.height,u.updateProjectionMatrix(),J=!0,st()},nt=new ResizeObserver($);nt.observe(t),$();function ct(U){if(z=requestAnimationFrame(ct),!G||document.hidden)return;let k=Math.min((U-O)/1e3||.016,.06);if(k<(l?1/24:1/60)*.85||(O=U,y=o()?P:gn.damp(y,P,9,k),Math.abs(y-P)<1e-4&&(y=P),W(),!c))return;if(o()){if(_.group.visible=y<.5,x.visible=!1,i.style.opacity=y<.5?0:1,!J)return;J=!1,c.render(h,u);return}let ot=a(.12,.43,y),K=a(.53,.78,y),_t=a(.83,.98,y);_.group.visible=y<.17,_.group.position.y=Math.sin(U*5e-4)*.025;let St=1-a(.08,.17,y);_.group.traverse(Ft=>{Ft.isMesh&&(Ft.material.opacity=St)}),x.visible=y>.17&&y<.985,v.opacity=a(.17,.23,y)*(1-_t);let Dt=U*25e-5;if(x.visible)for(let Ft=0;Ft<p;Ft++){let bt=M[Ft],Wt=bt.phase+Dt*bt.speed,N=Math.cos(Wt)*bt.radius,Ce=bt.height+Math.sin(Wt*1.65+bt.phase)*.32,kt=Math.sin(Wt)*.8;E.position.copy(bt.start).lerp(T.set(N,Ce,kt),ot).lerp(bt.target,K);let Ut=Math.sin(U*.0017+bt.phase)*.14*ot*(1-K);E.position.y+=Ut;let Et=gn.lerp(.205,l?.1:.088,K);E.scale.setScalar(Et*(1-_t*.25)),E.rotation.set(Wt*(1-K),Wt*.8*(1-K),Wt*.6*(1-K)),E.updateMatrix(),x.setMatrixAt(Ft,E.matrix),A.set("#ed790e").lerp(bt.color,a(.67,.86,y)),x.setColorAt(Ft,A)}x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),c.render(h,u),s.dataset.renderer=l?"canvas":"webgl"}z=requestAnimationFrame(ct);let pt=new IntersectionObserver(([U])=>{G=U.isIntersecting,s.dataset.portraitVisible=String(G)});pt.observe(n),r.addEventListener("change",()=>{J=!0}),addEventListener("pagehide",U=>{U.persisted||(cancelAnimationFrame(z),nt.disconnect(),pt.disconnect(),_.dispose(),S.dispose(),v.dispose(),d?.dispose(),c?.dispose?.())}),st(),W()}var ud=s=>Math.max(0,Math.min(1,s)),wi=(s,t,e)=>{let n=ud((e-s)/(t-s));return n*n*(3-2*n)},Le=(s,t,e)=>s.map((n,i)=>n+(t[i]-n)*e),Ti=[[-2,.65,1.6],[2,.65,.35],[-.35,.65,-2.25]],Jx=.43,$x=.61;function Dl(s){let t=ud(s),[e,n,i]=Ti,r=Le(e,n,.36),o=Le(n,i,.36),a=Le(i,e,.36),c,l=t<.35?0:t<.7?1:2;if(t<.2)c=Le(e,r,wi(0,.2,t));else if(t<.3)c=[...r];else if(t<.4){let u=wi(.3,.4,t);c=Le(r,n,u),c[1]+=Math.sin(u*Math.PI)*1.05}else if(t<.55)c=Le(n,o,wi(.4,.55,t));else if(t<.65)c=[...o];else if(t<.75){let u=wi(.65,.75,t);c=Le(o,i,u),c[1]+=Math.sin(u*Math.PI)*1.05}else c=Le(i,a,wi(.75,.9,t));let h=Le([0,.3,0],c,.24+wi(.12,.92,t)*.18);return{p:t,phase:l,actor:c,focus:h,blocked:t>=.2&&t<=.3||t>=.55&&t<=.65||t>=.9,yaw:-.45+t*1.3,zoom:1-wi(.08,.95,t)*.24}}function dd({scene:s,software:t=!1,quality:e="high"}){let n=new de;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=[],a=$=>(i.add($),$),c=$=>(r.add($),$),l=a(new ye(1,1,1)),h=t||e==="low"?l:a(new Ln(1,1,1,2,.045)),u=c(new Ae({color:"#272824",metalness:.36,roughness:.57})),d=c(new Ae({color:"#111310",metalness:.25,roughness:.72})),f=c(new Ae({color:"#e1d6c3",metalness:.26,roughness:.48})),_=c(new Ae({color:"#635341",metalness:.6,roughness:.46})),g=c(new Ye({color:"#fa760d",toneMapped:!1})),m=c(new Ye({color:"#7d3e14",toneMapped:!1})),p=c(new Ye({color:"#e8ceb0",toneMapped:!1}));function S($,nt,ct=u,pt=!1){let U=new zt(pt?h:l,ct);return U.position.set(...$),U.scale.set(...nt),n.add(U),U}function v($,nt,ct,pt){let U=new L(...$),k=new L(...nt),ot=k.clone().sub(U),K=S(U.clone().add(k).multiplyScalar(.5).toArray(),[ct,ot.length(),ct],pt);return K.quaternion.setFromUnitVectors(new L(0,1,0),ot.normalize()),K}S([0,-.34,-.2],[6.8,.28,6.2],d,!0).renderOrder=-20,S([0,-.5,-.2],[7.05,.08,6.45],u).renderOrder=-21;let x=new Cn(l,u,t||e==="low"?32:80),T=new fe;n.add(x),x.renderOrder=-19;for(let $=0;$<x.count;$++){let nt=($%10-4.5)*.64,ct=(Math.floor($/10)-3.5)*.7;T.position.set(nt,-.16,ct),T.scale.set(.61,.025,.67),T.updateMatrix(),x.setMatrixAt($,T.matrix)}let E=[];for(let $=0;$<3;$++){let[nt,,ct]=Ti[$];S([nt,.04,ct],[1.56,.34,1.5],u,!0),S([nt,.23,ct],[1.38,.1,1.31],_),S([nt,.32,ct],[1.26,.1,1.18],d,!0),S([nt,.39,ct],[1.1,.045,.99],f,!0);for(let k=0;k<(t||e==="low"?3:6);k++)S([nt-.43+k*.17,.48,ct-.38],[.055,.17,.16],u);S([nt,.5,ct+.45],[.92,.035,.025],m);let pt=S([nt,.505,ct+.45],[.6,.04,.032],g);E.push(pt);let U=[.9,1.35,1.08][$];S([nt+.48,.4+U/2,ct-.38],[.28,U,.3],u,!0),S([nt+.48,.42+U,ct-.38],[.24,.025,.24],f);for(let k=0;k<3;k++)S([nt+.48,.65+k*.21,ct-.212],[.15,.025,.012],k===$?g:_)}let A=[],C=[];for(let $=0;$<3;$++){let nt=Ti[$],ct=Ti[($+1)%3],pt=new L(...ct).sub(new L(...nt)).normalize(),U=new L(-pt.z,0,pt.x);for(let[_t,St]of[[.12,Jx],[$x,.88]]){for(let bt of[-1,1]){let Wt=new L(...Le(nt,ct,_t)).addScaledVector(U,bt*.15),N=new L(...Le(nt,ct,St)).addScaledVector(U,bt*.15);Wt.y=N.y=.39,v(Wt.toArray(),N.toArray(),.075,u),Wt.y=N.y=.438,v(Wt.toArray(),N.toArray(),.018,_t===.12?g:m)}let Dt=Le(nt,ct,_t),Ft=Le(nt,ct,St);Dt[1]=Ft[1]=.35,v(Dt,Ft,.16,_)}for(let _t of[.21,.78]){let St=Le(nt,ct,_t);S([St[0],.03,St[2]],[.18,.6,.18],u)}let k=Le(nt,ct,.48),ot=S([k[0],.79,k[2]],[.035,.68,.52],u,!0);ot.rotation.y=-Math.atan2(pt.z,pt.x),A.push(ot);let K=S([k[0]-.018,.81,k[2]],[.018,.49,.025],g);K.rotation.y=ot.rotation.y,C.push(K);for(let _t=0;_t<3;_t++){let St=Le(nt,ct,.49+_t*.035);S([St[0],.2-_t*.12,St[2]],[.07,.07,.07],_t===0?_:u)}}for(let[$,nt,ct]of[[-2.9,-1.1,.8],[2.8,1.9,.65],[1.6,-2.9,.5]]){S([$,ct/2-.14,nt],[.55,ct,.7],u,!0);for(let pt=0;pt<3;pt++)S([$-.16+pt*.16,ct-.12,nt+.355],[.045,.12,.014],f)}for(let $=0;$<4;$++)S([-2.6+$*.16,-.135,2.6],[.07,.02,.14],$===0?g:_);let M=t||e==="low"?12:24,y=new Cn(l,g,M);if(y.frustumCulled=!1,n.add(y),!t){let $=document.createElement("canvas");$.width=$.height=64;let nt=$.getContext("2d"),ct=nt.createRadialGradient(32,32,0,32,32,32);ct.addColorStop(0,"rgba(255,110,15,.32)"),ct.addColorStop(1,"rgba(255,110,15,0)"),nt.fillStyle=ct,nt.fillRect(0,0,64,64);let pt=new Bn($);o.push(pt);let U=c(new Ye({map:pt,transparent:!0,depthWrite:!1,toneMapped:!1})),k=a(new ln(2.7,2.7));for(let ot of Ti){let K=new zt(k,U);K.position.set(ot[0],-.115,ot[2]),K.rotation.x=-Math.PI/2,n.add(K)}}let P=document.querySelector(".cinematic-flow"),z=[...P?.querySelectorAll(".film-act")||[]],O=[...P?.querySelectorAll("[data-island]")||[]],G=-1,J=-1,D=0,Q=new L;function W($,nt,ct){let pt=Dl($);n.visible=!0;let U=M/3;for(let k=0;k<M;k++){let ot=Math.floor(k/U),K=ot===pt.phase,_t=((K?nt*12e-5:0)+k%U/U)%1*.38,St=Ti[ot],Dt=Ti[(ot+1)%3],Ft=Le(St,Dt,_t),bt=wi(.3,.38,_t),Wt=.065*(K?1:.35)*(1-bt*.85);T.position.set(Ft[0],.52,Ft[2]),T.rotation.set(0,nt*2e-4+k,0),T.scale.set(Wt,.025,Wt),T.updateMatrix(),y.setMatrixAt(k,T.matrix)}return y.instanceMatrix.needsUpdate=!0,A.forEach((k,ot)=>{k.position.y=.79+(ot===pt.phase?Math.sin(nt*.0018)*.025:0)}),C.forEach((k,ot)=>{k.visible=ot===pt.phase,k.scale.y=pt.blocked?.44+Math.sin(nt*.004)*.06:.28}),E.forEach((k,ot)=>{k.scale.x=ot===pt.phase?.6+Math.sin(nt*.002)*.09:.3}),P&&(P.dataset.rendered="true",P.dataset.cinemaPhase=String(pt.phase),P.dataset.cinemaProgress=pt.p.toFixed(3),P.dataset.cinemaBlocked=String(pt.blocked),G!==pt.phase&&(G=pt.phase,z.forEach((k,ot)=>k.dataset.active=String(ot===pt.phase))),(J!==$||D!==ct.aspect)&&(ct.updateMatrixWorld(),J=$,D=ct.aspect,O.forEach((k,ot)=>{let K=Ti[ot];Q.set(K[0],1.95,K[2]).project(ct),k.style.left=(Q.x*.5+.5)*100+"%",k.style.top=(-Q.y*.5+.5)*100+"%",k.style.opacity=Q.z<1&&Math.abs(Q.x)<.85?"1":"0"}))),pt}function st(){s.remove(n),i.forEach($=>$.dispose()),r.forEach($=>$.dispose()),o.forEach($=>$.dispose())}return{group:n,update:W,dispose:st}}var Ul=(s,t=0,e=1)=>Math.max(t,Math.min(e,s)),zn=(s,t,e)=>{let n=Ul((e-s)/(t-s));return n*n*n*(n*(n*6-15)+10)};function Qo(s,t=4){let e=Ul(Number.isFinite(s)?s:0),n=Ul((e-.055)/.91,0,1)*t,i=Math.min(t-1,Math.floor(n)),r=n-i;return{p:e,time:n,index:i,local:r,dock:zn(.19,.64,r),cameraDock:zn(.19,.64,r)*(1-zn(.87,1,r)),phase:r<.24?0:r<.7?1:2,entrance:zn(0,.075,e),finish:zn(.95,1,e),pulse:Math.sin(Math.PI*zn(.48,.76,r))}}function fd(s,t){let e=s-t,n=Math.max(0,-e),i=zn(0,.19,e),r=zn(.19,.64,e),o=n*1.75,a=[1.35*Math.cos(o)-1.5*Math.sin(o),3.1+Math.sin(n*1.2)*.65+n*.05,-1.25-n*.65],c=[-.1,3.12,1.35];return{t:e,dock:r,visible:e<.64,position:a.map((l,h)=>l+(c[h]-l)*i),scale:.79/(1+n*.12)+(1-.79/(1+n*.12))*i,yaw:(-.24-n*.08)*(1-i)+.09*i,roll:(.055+n*.025)*(1-i)}}function pd({scene:s,software:t=!1,quality:e="medium"}){let n=new de;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=new Set,a=t||e==="low",c=document.querySelector("[data-notebook-stage]"),l=c.querySelector(".notebook-world"),h=[...c.querySelectorAll("[data-project-screen]")],u=X=>(i.add(X),X),d=(X,Z=!1)=>{let gt=Z?new Ye(X):new Ae({roughness:.38,metalness:.65,...X});return r.add(gt),gt},f=d({color:"#53534e",roughness:.32,metalness:.85}),_=d({color:"#a8a79e",roughness:.23,metalness:.88}),g=d({color:"#20221f",roughness:.5}),m=d({color:"#10120f",roughness:.7}),p=d({color:"#ed791d",roughness:.3,metalness:.56}),S=d({color:"#f18c36",toneMapped:!1},!0),v=u(a?new ye(1,1,1):new Ln(1,1,1,2,.035)),x=u(new ye(1,1,1)),T=u(new ln(4.22,2.6375,a?8:12,a?5:8));function E(X,Z,gt,rt,Lt=n,I=!1){let lt=new zt(I?x:v,rt);return lt.scale.set(X,Z,gt),Lt.add(lt),lt}function A(X,Z,gt){let rt=new Cn(v,Z,X);return rt.frustumCulled=!1,gt.add(rt),rt}let C=new fe;function M(X,Z,gt,rt,Lt,I,lt,V){C.position.set(gt,rt,Lt),C.rotation.set(0,0,0),C.scale.set(I,lt,V),C.updateMatrix(),X.setMatrixAt(Z,C.matrix)}let y=new de;n.add(y),E(4.88,.16,3.22,f,y).position.set(0,-.94,.72);let P=E(4.75,.045,3.08,_,y);P.position.set(0,-.847,.7),P.renderOrder=1;let z=E(4.65,.025,2.94,f,y);z.position.set(0,-.817,.7),z.renderOrder=2;let O=E(4.4,.018,1.49,m,y);O.position.set(0,-.796,.24),O.renderOrder=3;let G=A(65,g,y);G.renderOrder=4;for(let X=0;X<5;X++)for(let Z=0;Z<13;Z++)M(G,X*13+Z,-1.91+Z*.319,-.775,-.32+X*.272,.278,.038,.222);let J=E(1.7,.024,.18,g,y);J.position.set(0,-.765,.98),J.renderOrder=4;let D=E(1.64,.012,.83,_,y);D.position.set(0,-.789,1.67),D.renderOrder=3;let Q=E(1.59,.015,.78,f,y);Q.position.set(0,-.777,1.67),Q.renderOrder=4;let W=A(a?16:32,m,y);W.renderOrder=4;for(let X=0;X<W.count;X++){let Z=X<W.count/2?-1:1,gt=X%(W.count/2);M(W,X,Z*2.3,-.78,-.35+gt*(1.35/(W.count/2)),.022,.008,.035)}for(let X of[-1.58,1.58])E(.76,.18,.2,g,y).position.set(X,-.78,-.78);for(let X of[-2.446,2.446])for(let Z of[.05,.5])E(.008,.05,.23,m,y).position.set(X,-.94,Z);E(.065,.026,.016,S,y).position.set(2.14,-.91,2.337),E(1.1,.018,.014,g,y).position.set(0,-.87,2.34);let st=new de;st.position.set(0,-.76,-.78),st.rotation.x=-.105,y.add(st);let $=E(4.88,3.05,.105,f,st);$.position.y=1.51,$.renderOrder=5;let nt=E(4.74,2.92,.024,_,st);nt.position.set(0,1.52,.065),nt.renderOrder=6;let ct=E(4.68,2.86,.025,m,st);ct.position.set(0,1.52,.084),ct.renderOrder=7;let pt=d({color:"#171b16",toneMapped:!1},!0),U=document.createElement("canvas");U.width=768,U.height=480;let k=U.getContext("2d");k.fillStyle="#171b16",k.fillRect(0,0,768,480),k.fillStyle="#e6ded0",k.font="500 40px Arial",k.fillText("dev.abraao",66,209),k.fillStyle="#f58a2b",k.fillRect(68,244,48,2),k.font="10px Arial",k.fillText("O PROBLEMA ENCONTRA SEU CAMINHO.",68,282);let ot=new Bn(U);ot.colorSpace=Ee,o.add(ot),pt.map=ot,pt.color.set("#ffffff");let K=new zt(T,pt);K.position.set(0,1.53,.105),K.renderOrder=8,st.add(K);let _t=new fe;_t.position.copy(K.position),_t.position.z-=.055,st.add(_t);let St=E(.045,.023,.006,g,st);St.position.set(0,2.913,.103),St.renderOrder=8;for(let X=0;X<9;X++){let Z=E(.009,.025,.005,X===8?p:_,st);Z.position.set(-.09+X*.021,.095,.104),Z.renderOrder=8}let Dt=d({color:"#e48639",transparent:!0,opacity:.08,toneMapped:!1},!0),Ft=E(4.35,.018,.016,Dt,st);Ft.position.set(0,.175,.112),Ft.renderOrder=9;let bt=document.createElement("canvas");bt.width=bt.height=64;let Wt=bt.getContext("2d"),N=Wt.createRadialGradient(32,32,0,32,32,32);N.addColorStop(0,"#25221990"),N.addColorStop(1,"#25221900"),Wt.fillStyle=N,Wt.fillRect(0,0,64,64);let Ce=new Bn(bt);o.add(Ce);let kt=new zt(u(new ln(6.4,4.5)),d({map:Ce,transparent:!0,depthWrite:!1},!0));kt.rotation.x=-Math.PI/2,kt.position.set(0,-1.125,.5),n.add(kt),kt.renderOrder=-7;let Ut=h.map((X,Z)=>{let gt=new de;n.add(gt);let rt=d({color:Z===0?"#d88034":"#a3a093",roughness:.32,metalness:.7}),Lt=E(4.34,2.76,.065,rt,gt),I=E(4.27,2.69,.022,m,gt);I.position.z=.039;let lt=d({color:"#f4f0e8",toneMapped:!1},!0),V=new zt(T,lt);V.position.z=.055,gt.add(V);let tt=E(.22,.06,.016,p,gt);return tt.position.set(-1.9,1.405,.01),{board:gt,frame:Lt,inset:I,face:V,tab:tt,faceMat:lt,border:rt,texture:null,el:X}}),Et=0;n.traverse(X=>{X.isMesh&&Et++}),c.dataset.notebookMeshes=String(Et);let $t=new L,wt=new Rn,R=new Rn,b=new mn,H=new L,et=new L,at=new L,j=-1,Tt=!1,mt=!1,yt=0;function Jt(X,Z){let gt=document.createElement("canvas");gt.width=a?768:1024,gt.height=gt.width/1.6;let rt=gt.getContext("2d");if(Z!=="nexa")rt.drawImage(X,0,0,X.width,Math.min(X.height,X.width/1.6),0,0,gt.width,gt.height);else{let lt=function(V,tt){let[ht,ut,At]=V,[Xt,Qt,Yt]=tt,Ot=ht[0]*(ut[1]-At[1])+ut[0]*(At[1]-ht[1])+At[0]*(ht[1]-ut[1]),Ht=be=>[(Xt[be]*(ut[1]-At[1])+Qt[be]*(At[1]-ht[1])+Yt[be]*(ht[1]-ut[1]))/Ot,(Xt[be]*(At[0]-ut[0])+Qt[be]*(ht[0]-At[0])+Yt[be]*(ut[0]-ht[0]))/Ot,(Xt[be]*(ut[0]*At[1]-At[0]*ut[1])+Qt[be]*(At[0]*ht[1]-ht[0]*At[1])+Yt[be]*(ht[0]*ut[1]-ut[0]*ht[1]))/Ot],Oe=Ht(0),Wn=Ht(1);rt.save(),rt.beginPath(),rt.moveTo(...Xt),rt.lineTo(...Qt),rt.lineTo(...Yt),rt.closePath(),rt.clip(),rt.transform(Oe[0],Wn[0],Oe[1],Wn[1],Oe[2],Wn[2]),rt.drawImage(X,0,0),rt.restore()},I=[[188,38],[735,38],[749,375],[177,375]].map(([V,tt])=>[V/1100*X.width,tt/434*X.height]);lt([I[0],I[1],I[2]],[[0,0],[gt.width,0],[gt.width,gt.height]]),lt([I[0],I[2],I[3]],[[0,0],[gt.width,gt.height],[0,gt.height]])}let Lt=new Bn(gt);return Lt.colorSpace=Ee,Lt.anisotropy=a?1:4,o.add(Lt),Lt}function dt(){mt||Tt||(mt=!0,Ut.forEach(X=>{let Z=new Image;Z.decoding="async",Z.onload=()=>{Tt||(X.texture=Jt(Z,X.el.dataset.projectKind),X.faceMat.map=X.texture,X.faceMat.needsUpdate=!0,c.dataset.screensReady=String(++yt))},Z.onerror=()=>{c.dataset.screenError="true"},Z.src=X.el.dataset.projectScreen}))}let vt=new IntersectionObserver(X=>{X.some(Z=>Z.isIntersecting)&&(dt(),vt.disconnect())},{rootMargin:"1200px"});vt.observe(l);function it(X,Z,gt){dt();let rt=Qo(X,Ut.length),Lt=innerWidth<=700;n.rotation.y=.07-Math.sin(rt.p*Math.PI)*.07,n.position.y=-.12+rt.entrance*.12,y.rotation.y=Math.sin(rt.local*Math.PI)*.025,st.rotation.x=-.105-Math.sin(rt.local*Math.PI)*.025,s.updateMatrixWorld(!0),_t.getWorldPosition(H),_t.getWorldQuaternion(wt);let I=.012*Math.sin(Z*75e-5);Ut.forEach((V,tt)=>{let ht=fd(rt.time,tt);if(V.board.visible=ht.visible,!ht.visible)return;let ut=30-(tt-rt.index)*4;V.frame.renderOrder=ut,V.inset.renderOrder=ut+1,V.face.renderOrder=ut+2,V.tab.renderOrder=ut+2,$t.set(...ht.position),$t.y+=I*(1-ht.dock),Lt&&($t.x*=.72);let At=n.worldToLocal(H.clone());et.copy($t).add(new L(-.4,.2,0)),at.copy(At).add(new L(.25,.72,1.1));let Xt=ht.dock,Qt=1-Xt;V.board.position.copy($t).multiplyScalar(Qt**3).addScaledVector(et,3*Qt*Qt*Xt).addScaledVector(at,3*Qt*Xt*Xt).addScaledVector(At,Xt**3),b.set(.035,ht.yaw,ht.roll),R.setFromEuler(b);let Yt=n.quaternion.clone().invert().multiply(wt);V.board.quaternion.copy(R).slerp(Yt,Xt),V.board.scale.setScalar(ht.scale+(1-ht.scale)*Xt);let Ot=1-zn(.76,1,Xt);V.frame.material.transparent=!0,V.frame.material.opacity=Ot,V.inset.visible=Ot>.01,V.tab.visible=Ot>.2});let lt=rt.dock>.998?rt.index:Math.max(0,rt.index-1);return Ut[lt].texture&&(j!==lt||K.material.map!==Ut[lt].texture)&&(K.material=Ut[lt].faceMat,j=lt),rt.index===0&&rt.dock<=.998&&(K.material=pt,j=-1),K.visible=!0,Dt.opacity=.12+rt.pulse*.7,l.dataset.rendered="true",c.dataset.docking=rt.dock.toFixed(3),rt}return{group:n,update:it,dispose(){Tt=!0,vt.disconnect(),s.remove(n),n.traverse(X=>{X.isInstancedMesh&&X.dispose()}),i.forEach(X=>X.dispose()),r.forEach(X=>X.dispose()),o.forEach(X=>X.dispose())}}}function md(s){let t=[...document.querySelectorAll("[data-scene-window]")].map(o=>({el:o,id:o.dataset.sceneWindow,section:o.closest("[data-chapter]")})),e=!0,n=null,i=()=>{e=!0},r=new ResizeObserver(i);return t.forEach(({el:o})=>r.observe(o)),addEventListener("scroll",i,{passive:!0}),addEventListener("resize",i,{passive:!0}),{read(){if(!e)return n;e=!1;let o=document.getElementById("header").offsetHeight,a=null,c=0;for(let S of t){let v=S.el.getBoundingClientRect(),x=Math.max(0,Math.min(innerHeight,v.bottom)-Math.max(o,v.top)),T=Math.max(0,Math.min(innerWidth,v.right)-Math.max(0,v.left));T*x>c&&(c=T*x,a={...S,rect:v})}if(!a||c<800)return s.style.visibility="hidden",n=null,null;let{rect:l,section:h,id:u}=a,d=h.getBoundingClientRect(),f=h.querySelector(".section-pin"),_=h.querySelector(".cinematic-intro")?.offsetHeight||0,g=f&&getComputedStyle(f).position==="sticky",m=Math.max(0,Math.min(1,g?(-d.top-_)/Math.max(1,d.height-_-f.offsetHeight):(innerHeight*.45-d.top)/Math.max(1,d.height)));s.parentElement!==a.el&&a.el.appendChild(s),Object.assign(s.style,{left:"0",top:"0",width:`${l.width}px`,height:`${l.height}px`});let p=u==="problema"&&!g?Math.max(0,Math.min(1,(innerHeight*.85-l.top)/(l.height+innerHeight*.35))):m;return n={id:u,progress:p,width:Math.round(l.width),height:Math.round(l.height),rect:l},s.dataset.scene=u,s.dataset.progress=p.toFixed(4),n},invalidate:i,dispose(){r.disconnect(),removeEventListener("scroll",i),removeEventListener("resize",i)}}}function ri(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function bd(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var en={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ks={duration:.5,overwrite:!1,delay:0},jl,Ue,pe,yn=1e8,ae=1/yn,Hl=Math.PI*2,Kx=Hl/4,Qx=0,Ed=Math.sqrt,jx=Math.cos,ty=Math.sin,Re=function(t){return typeof t=="string"},_e=function(t){return typeof t=="function"},ai=function(t){return typeof t=="number"},ca=function(t){return typeof t>"u"},Hn=function(t){return typeof t=="object"},tn=function(t){return t!==!1},th=function(){return typeof window<"u"},jo=function(t){return _e(t)||Re(t)},wd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ve=Array.isArray,Gl=/(?:-?\.?\d|\.)+/gi,eh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Nl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nh=/[+-]=-?[.\d]+/,Td=/[^,'"\[\]\s]+/gi,ey=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,me,kn,Wl,ih,un={},ia={},Ad,Rd=function(t){return(ia=Qs(t,un))&&He},la=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},zr=function(t,e){return!e&&console.warn(t)},Cd=function(t,e){return t&&(un[t]=e)&&ia&&(ia[t]=e)||un},kr=function(){return 0},ny={suppressEvents:!0,isStart:!0,kill:!1},ta={suppressEvents:!0,kill:!1},iy={suppressEvents:!0},sh={},Ri=[],Xl={},Pd,Qe={},Ol={},gd=30,ea=[],rh="",oh=function(t){var e=t[0],n,i;if(Hn(e)||_e(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ea.length;i--&&!ea[i].targetTest(e););n=ea[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new hh(t[i],n)))||t.splice(i,1);return t},Ci=function(t){return t._gsap||oh(vn(t))[0]._gsap},ah=function(t,e,n){return(n=t[e])&&_e(n)?t[e]():ca(n)&&t.getAttribute&&t.getAttribute(e)||n},Ze=function(t,e){return(t=t.split(",")).forEach(e)||t},xe=function(t){return Math.round(t*1e5)/1e5||0},Se=function(t){return Math.round(t*1e7)/1e7||0},ss=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},sy=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},sa=function(){var t=Ri.length,e=Ri.slice(0),n,i;for(Xl={},Ri.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ch=function(t){return!!(t._initted||t._startAt||t.add)},Id=function(t,e,n,i){Ri.length&&!Ue&&sa(),t.render(e,n,i||!!(Ue&&e<0&&ch(t))),Ri.length&&!Ue&&sa()},Ld=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Td).length<2?e:Re(t)?t.trim():t},Dd=function(t){return t},dn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ry=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Qs=function(t,e){for(var n in e)t[n]=e[n];return t},_d=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Hn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},ra=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Or=function(t){var e=t.parent||me,n=t.keyframes?ry(Ve(t.keyframes)):dn;if(tn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},oy=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Ud=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},ha=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Pi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ts=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},ay=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ql=function(t,e,n,i){return t._startAt&&(Ue?t._startAt.revert(ta):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},cy=function s(t){return!t||t._ts&&s(t.parent)},xd=function(t){return t._repeat?js(t._tTime,t=t.duration()+t._rDelay)*t:0},js=function(t,e){var n=Math.floor(t=Se(t/e));return t&&n===t?n-1:n},oa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ua=function(t){return t._end=Se(t._start+(t._tDur/Math.abs(t._ts||t._rts||ae)||0))},da=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Se(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ua(t),n._dirty||ts(n,t)),t},Nd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=oa(t.rawTime(),e),(!e._dur||Gr(0,e.totalDuration(),n)-e._tTime>ae)&&e.render(n,!0)),ts(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ae}},Vn=function(t,e,n,i){return e.parent&&Pi(e),e._start=Se((ai(n)?n:n||t!==me?xn(t,n,e):t._time)+e._delay),e._end=Se(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ud(t,e,"_first","_last",t._sort?"_start":0),Yl(e)||(t._recent=e),i||Nd(t,e),t._ts<0&&da(t,t._tTime),t},Od=function(t,e){return(un.ScrollTrigger||la("scrollTrigger",e))&&un.ScrollTrigger.create(e,t)},Fd=function(t,e,n,i,r){if(fh(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Ue&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Pd!==je.frame)return Ri.push(t),t._lazy=[r,i],1},ly=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Yl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},hy=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&ly(t)&&!(!t._initted&&Yl(t))||(t._ts<0||t._dp._ts<0)&&!Yl(t))?0:1,a=t._rDelay,c=0,l,h,u;if(a&&t._repeat&&(c=Gr(0,t._tDur,e),h=js(c,a),t._yoyo&&h&1&&(o=1-o),h!==js(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Ue||i||t._zTime===ae||!e&&t._zTime){if(!t._initted&&Fd(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?ae:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&ql(t,e,n,!0),t._onUpdate&&!n&&hn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&hn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Pi(t,1),!n&&!Ue&&(hn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},uy=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},tr=function(t,e,n,i){var r=t._repeat,o=Se(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Se(o*(r+1)+t._rDelay*r):o,a>0&&!i&&da(t,t._tTime=t._tDur*a),t.parent&&ua(t),n||ts(t.parent,t),t},yd=function(t){return t instanceof De?ts(t):tr(t,t._dur)},dy={_start:0,endTime:kr,totalDuration:kr},xn=function s(t,e,n){var i=t.labels,r=t._recent||dy,o=t.duration()>=yn?r.endTime(!1):t._dur,a,c,l;return Re(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(Ve(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},Fr=function(t,e,n){var i=ai(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=tn(c.vars.inherit)&&c.parent;o.immediateRender=tn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new ve(e[0],o,e[r+1])},Ii=function(t,e){return t||t===0?e(t):e},Gr=function(t,e,n){return n<t?t:n>e?e:n},Ne=function(t,e){return!Re(t)||!(e=ey.exec(t))?"":e[1]},fy=function(t,e,n){return Ii(n,function(i){return Gr(t,e,i)})},Zl=[].slice,Bd=function(t,e){return t&&Hn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Hn(t[0]))&&!t.nodeType&&t!==kn},py=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Re(i)&&!e||Bd(i,1)?(r=n).push.apply(r,vn(i)):n.push(i)})||n},vn=function(t,e,n){return pe&&!e&&pe.selector?pe.selector(t):Re(t)&&!n&&(Wl||!er())?Zl.call((e||ih).querySelectorAll(t),0):Ve(t)?py(t,n):Bd(t)?Zl.call(t,0):t?[t]:[]},Jl=function(t){return t=vn(t)[0]||zr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return vn(e,n.querySelectorAll?n:n===t?zr("Invalid scope")||ih.createElement("div"):t)}},zd=function(t){return t.sort(function(){return .5-Math.random()})},kd=function(t){if(_e(t))return t;var e=Hn(t)?t:{each:t},n=es(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,h=i,u=i;return Re(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,m=o[g],p,S,v,x,T,E,A,C,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,yn])[1],!M){for(A=-yn;A<(A=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],p=c?Math.min(M,g)*h-.5:i%M,S=M===yn?0:c?g*u/M-.5:i/M|0,A=0,C=yn,E=0;E<g;E++)v=E%M-p,x=S-(E/M|0),m[E]=T=l?Math.abs(l==="y"?x:v):Ed(v*v+x*x),T>A&&(A=T),T<C&&(C=T);i==="random"&&zd(m),m.max=A-C,m.min=C,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(M>g?g-1:l?l==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Ne(e.amount||e.each)||0,n=n&&g<0?Jd(n):n}return g=(m[d]-m.min)/m.max||0,Se(m.b+(n?n(g):g)*m.v)+m.u}},$l=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Se(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ai(n)?0:Ne(n))}},Vd=function(t,e){var n=Ve(t),i,r;return!n&&Hn(t)&&(i=n=t.radius||yn,t.values?(t=vn(t.values),(r=!ai(t[0]))&&(i*=i)):t=$l(t.increment)),Ii(e,n?_e(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=yn,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-a,f=t[u].y-c,d=d*d+f*f):d=Math.abs(t[u]-a),d<l&&(l=d,h=u);return h=!i||l<=i?t[h]:o,r||h===o||ai(o)?h:h+Ne(o)}:$l(t))},Hd=function(t,e,n,i){return Ii(Ve(t)?!e:n===!0?!!(n=0):!i,function(){return Ve(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},my=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},gy=function(t,e){return function(n){return t(parseFloat(n))+(e||Ne(n))}},_y=function(t,e,n){return Wd(t,e,0,1,n)},Gd=function(t,e,n){return Ii(n,function(i){return t[~~e(i)]})},xy=function s(t,e,n){var i=e-t;return Ve(t)?Gd(t,s(0,t.length),e):Ii(n,function(r){return(i+(r-t)%i)%i+t})},yy=function s(t,e,n){var i=e-t,r=i*2;return Ve(t)?Gd(t,s(0,t.length-1),e):Ii(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},nr=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?Td:Gl),n+=t.substr(e,i-e)+Hd(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Wd=function(t,e,n,i,r){var o=e-t,a=i-n;return Ii(r,function(c){return n+((c-t)/o*a||0)})},vy=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=Re(t),a={},c,l,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Ve(t)&&!Ve(e)){for(h=[],u=t.length,d=u-2,l=1;l<u;l++)h.push(s(t[l-1],t[l]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=Qs(Ve(t)?[]:{},t));if(!h){for(c in e)uh.call(a,t,c,"get",e[c]);r=function(_){return gh(_,a)||(o?t.p:t)}}}return Ii(n,r)},vd=function(t,e,n){var i=t.labels,r=yn,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},hn=function(t,e,n){var i=t.vars,r=i[e],o=pe,a=t._ctx,c,l,h;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&Ri.length&&sa(),a&&(pe=a),h=c?r.apply(l,c):r.call(l),pe=o,h},Ur=function(t){return Pi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ue),t.progress()<1&&hn(t,"onInterrupt"),t},$s,Xd=[],qd=function(t){if(t)if(t=!t.name&&t.default||t,th()||t.headless){var e=t.name,n=_e(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:kr,render:gh,add:uh,kill:Oy,modifier:Ny,rawVars:0},o={targetTest:0,get:0,getSetter:fa,aliases:{},register:0};if(er(),t!==i){if(Qe[e])return;dn(i,dn(ra(t,r),o)),Qs(i.prototype,Qs(r,ra(t,o))),Qe[i.prop=e]=i,t.targetTest&&(ea.push(i),sh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Cd(e,i),t.register&&t.register(He,i,Je)}else Xd.push(t)},oe=255,Nr={aqua:[0,oe,oe],lime:[0,oe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,oe],navy:[0,0,128],white:[oe,oe,oe],olive:[128,128,0],yellow:[oe,oe,0],orange:[oe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[oe,0,0],pink:[oe,192,203],cyan:[0,oe,oe],transparent:[oe,oe,oe,0]},Fl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*oe+.5|0},Yd=function(t,e,n){var i=t?ai(t)?[t>>16,t>>8&oe,t&oe]:0:Nr.black,r,o,a,c,l,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Nr[t])i=Nr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&oe,i&oe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&oe,t&oe]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Gl),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(l+1):h+l-h*l,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Fl(c+1/3,r,o),i[1]=Fl(c,r,o),i[2]=Fl(c-1/3,r,o);else if(~t.indexOf("="))return i=t.match(eh),n&&i.length<4&&(i[3]=1),i}else i=t.match(Gl)||Nr.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/oe,o=i[1]/oe,a=i[2]/oe,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?c=l=0:(f=u-d,l=h>.5?f/(2-u-d):f/(u+d),c=u===r?(o-a)/f+(o<a?6:0):u===o?(a-r)/f+2:(r-o)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Zd=function(t){var e=[],n=[],i=-1;return t.split(oi).forEach(function(r){var o=r.match(is)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Md=function(t,e,n){var i="",r=(t+i).match(oi),o=e?"hsla(":"rgba(",a=0,c,l,h,u;if(!r)return t;if(r=r.map(function(d){return(d=Yd(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Zd(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(oi,"1").split(is),u=l.length-1;a<u;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!l)for(l=t.split(oi),u=l.length-1;a<u;a++)i+=l[a]+r[a];return i+l[u]},oi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Nr)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),My=/hsl[a]?\(/,lh=function(t){var e=t.join(" "),n;if(oi.lastIndex=0,oi.test(e))return n=My.test(e),t[1]=Md(t[1],n),t[0]=Md(t[0],n,Zd(t[1])),!0},Vr,je=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,h,u,d,f,_=function g(m){var p=s()-i,S=m===!0,v,x,T,E;if((p>t||p<0)&&(n+=p-e),i+=p,T=i-n,v=T-o,(v>0||S)&&(E=++u.frame,d=T-u.time*1e3,u.time=T=T/1e3,o+=v+(v>=r?4:r-v),x=1),S||(c=l(g)),x)for(f=0;f<a.length;f++)a[f](T,d,E,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Ad&&(!Wl&&th()&&(kn=Wl=window,ih=kn.document||{},un.gsap=He,(kn.gsapVersions||(kn.gsapVersions=[])).push(He.version),Rd(ia||kn.GreenSockGlobals||!kn.gsap&&kn||{}),Xd.forEach(qd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Vr=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),Vr=0,l=kr},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,p,S){var v=p?function(x,T,E,A){m(x,T,E,A),u.remove(v)}:m;return u.remove(m),a[S?"unshift":"push"](v),er(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u}(),er=function(){return!Vr&&je.wake()},Kt={},Sy=/^[\d.\-M][\d.\-,\s]/,by=/["']/g,Ey=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(by,"").trim():+l,i=c.substr(a+1).trim();return e},wy=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Ty=function(t){var e=(t+"").split("("),n=Kt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Ey(e[1])]:wy(t).split(",").map(Ld)):Kt._CE&&Sy.test(t)?Kt._CE("",t):n},Jd=function(t){return function(e){return 1-t(1-e)}},$d=function s(t,e){for(var n=t._first,i;n;)n instanceof De?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},es=function(t,e){return t&&(_e(t)?t:Kt[t]||Ty(t))||e},rs=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Ze(t,function(a){Kt[a]=un[a]=r,Kt[o=a.toLowerCase()]=n;for(var c in r)Kt[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Kt[a+"."+c]=r[c]}),r},Kd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Bl=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Hl*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*ty((h-o)*r)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:Kd(a);return r=Hl/r,c.config=function(l,h){return s(t,l,h)},c},zl=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Kd(n);return i.config=function(r){return s(t,r)},i};Ze("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;rs(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Kt.Linear.easeNone=Kt.none=Kt.Linear.easeIn;rs("Elastic",Bl("in"),Bl("out"),Bl());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};rs("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);rs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});rs("Circ",function(s){return-(Ed(1-s*s)-1)});rs("Sine",function(s){return s===1?1:-jx(s*Kx)+1});rs("Back",zl("in"),zl("out"),zl());Kt.SteppedEase=Kt.steps=un.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-ae;return function(a){return((i*Gr(0,o,a)|0)+r)*n}}};Ks.ease=Kt["quad.out"];Ze("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return rh+=s+","+s+"Params,"});var hh=function(t,e){this.id=Qx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ah,this.set=e?e.getSetter:fa},Hr=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,tr(this,+e.duration,1,1),this.data=e.data,pe&&(this._ctx=pe,pe.data.push(this)),Vr||je.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,tr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(er(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(da(this,n),!r._dp||r.parent||Nd(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ae||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Id(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+xd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+xd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?js(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ae?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?oa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ae?0:this._rts,this.totalTime(Gr(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),ua(this),ay(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(er(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ae&&(this._tTime-=ae)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Vn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?oa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=iy);var i=Ue;return Ue=n,ch(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ue=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,yd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,yd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(xn(this,n),tn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,tn(i)),this._dur||(this._zTime=-ae),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ae:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ae,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ae)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=_e(n)?n:Dd,a=function(){var l=i.then;i.then=null,_e(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Ur(this)},s}();dn(Hr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ae,_prom:0,_ps:!1,_rts:1});var De=function(s){bd(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=tn(n.sortChildren),me&&Vn(n.parent||me,ri(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Od(ri(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Fr(0,arguments,this),this},e.from=function(i,r,o){return Fr(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Fr(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Or(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ve(i,r,xn(this,o),1),this},e.call=function(i,r,o){return Vn(this,ve.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,c,l,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=h,o.parent=this,new ve(i,o,xn(this,c)),this},e.staggerFrom=function(i,r,o,a,c,l,h){return o.runBackwards=1,Or(o).immediateRender=tn(o.immediateRender),this.staggerTo(i,r,o,a,c,l,h)},e.staggerFromTo=function(i,r,o,a,c,l,h,u){return a.startAt=o,Or(a).immediateRender=tn(a.immediateRender),this.staggerTo(i,r,a,c,l,h,u)},e.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:Se(i),u=this._zTime<0!=i<0&&(this._initted||!l),d,f,_,g,m,p,S,v,x,T,E,A;if(this!==me&&h>c&&i>=0&&(h=c),h!==this._tTime||o||u){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),d=h,x=this._start,v=this._ts,p=!v,u&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=Se(h%m),h===c?(g=this._repeat,d=l):(T=Se(h/m),g=~~T,g&&g===T&&(d=l,g--),d>l&&(d=l)),T=js(this._tTime,m),!a&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),E&&g&1&&(d=l-d,A=1),g!==T&&!this._lock){var C=E&&T&1,M=C===(E&&g&1);if(g<T&&(C=!C),a=C?0:h%l?l:h,this._lock=1,this.render(a||(A?0:Se(g*m)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&hn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,M&&(this._lock=2,a=C?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;$d(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=uy(this,Se(a),Se(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!r&&!T&&(hn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!p){S=0,_&&(h+=this._zTime=-ae);break}}f=_}else{f=this._last;for(var y=i<0?i:d;f;){if(_=f._prev,(f._act||y<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,r,o||Ue&&ch(f)),d!==this._time||!this._ts&&!p){S=0,_&&(h+=this._zTime=y?-ae:ae);break}}f=_}}if(S&&!r&&(this.pause(),S.render(d>=a?0:-ae)._zTime=d>=a?1:-1,this._ts))return this._start=x,ua(this),this.render(i,r,o);this._onUpdate&&!r&&hn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Pi(this,1),!r&&!(i<0&&!a)&&(h||a||!c)&&(hn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(ai(r)||(r=xn(this,r,i)),!(i instanceof Hr)){if(Ve(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Re(i))return this.addLabel(i,r);if(_e(i))i=ve.delayedCall(0,i);else return this}return this!==i?Vn(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-yn);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof ve?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return Re(i)?this.removeLabel(i):_e(i)?this.killTweensOf(i):(i.parent===this&&ha(this,i),i===this._recent&&(this._recent=this._last),ts(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Se(je.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=xn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=ve.delayedCall(0,r||kr,o);return a.data="isPause",this._hasPause=1,Vn(this,a,xn(this,i))},e.removePause=function(i){var r=this._first;for(i=xn(this,i);r;)r._start===i&&r.data==="isPause"&&Pi(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Ai!==a[c]&&a[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=vn(i),c=this._first,l=ai(r),h;c;)c instanceof ve?sy(c._targets,a)&&(l?(!Ai||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(h=c.getTweensOf(a,r)).length&&o.push.apply(o,h),c=c._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=xn(o,i),c=r,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,f,_=ve.to(o,dn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||ae,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());_._dur!==m&&tr(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,dn({startAt:{time:xn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),vd(this,xn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),vd(this,xn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ae)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return ts(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ts(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,c=yn,l,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,Vn(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;tr(o,o===me&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(me._ts&&(Id(me,oa(i,me)),Pd=je.frame),je.frame>=gd){gd+=en.autoSleep||120;var r=me._first;if((!r||!r._ts)&&en.autoSleep&&je._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||je.sleep()}}},t}(Hr);dn(De.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ay=function(t,e,n,i,r,o,a){var c=new Je(this._pt,t,e,0,1,mh,null,r),l=0,h=0,u,d,f,_,g,m,p,S;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=nr(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),d=n.match(Nl)||[];u=Nl.exec(i);)_=u[0],g=i.substring(l,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?ss(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},l=Nl.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(nh.test(i)||p)&&(c.e=0),this._pt=c,c},uh=function(t,e,n,i,r,o,a,c,l,h){_e(i)&&(i=i(r||0,t,o));var u=t[e],d=n!=="get"?n:_e(u)?l?t[e.indexOf("set")||!_e(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,f=_e(u)?l?Ly:tf:ph,_;if(Re(i)&&(~i.indexOf("random(")&&(i=nr(i)),i.charAt(1)==="="&&(_=ss(d,i)+(Ne(d)||0),(_||_===0)&&(i=_))),!h||d!==i||Kl)return!isNaN(d*i)&&i!==""?(_=new Je(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?Uy:ef,0,f),l&&(_.fp=l),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&la(e,i),Ay.call(this,t,e,d,i,f,c||en.stringFilter,l))},Ry=function(t,e,n,i,r){if(_e(t)&&(t=Br(t,r,e,n,i)),!Hn(t)||t.style&&t.nodeType||Ve(t)||wd(t))return Re(t)?Br(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Br(t[a],r,e,n,i);return o},dh=function(t,e,n,i,r,o){var a,c,l,h;if(Qe[t]&&(a=new Qe[t]).init(r,a.rawVars?e[t]:Ry(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new Je(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==$s))for(l=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)l[a._props[h]]=c;return a},Ai,Kl,fh=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,S=p&&p.data==="nested"?p.vars.targets:m,v=t._overwrite==="auto"&&!jl,x=t.timeline,T,E,A,C,M,y,P,z,O,G,J,D,Q;if(x&&(!d||!r)&&(r="none"),t._ease=es(r,Ks.ease),t._yEase=u?Jd(es(u===!0?r:u,Ks.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(z=m[0]?Ci(m[0]).harness:0,D=z&&i[z.prop],T=ra(i,sh),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?ta:ny),g._lazy=0),o){if(Pi(t._startAt=ve.set(m,dn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&tn(c),startAt:null,delay:0,onUpdate:l&&function(){return hn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ue||!a&&!f)&&t._startAt.revert(ta),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),A=dn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&tn(c),immediateRender:a,stagger:0,parent:p},T),D&&(A[z.prop]=D),Pi(t._startAt=ve.set(m,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ue?t._startAt.revert(ta):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,ae,ae);else if(!e)return}for(t._pt=t._ptCache=0,c=_&&tn(c)||c&&!_,E=0;E<m.length;E++){if(M=m[E],P=M._gsap||oh(m)[E]._gsap,t._ptLookup[E]=G={},Xl[P.id]&&Ri.length&&sa(),J=S===m?E:S.indexOf(M),z&&(O=new z).init(M,D||T,t,J,S)!==!1&&(t._pt=C=new Je(t._pt,M,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(W){G[W]=C}),O.priority&&(y=1)),!z||D)for(A in T)Qe[A]&&(O=dh(A,T,t,J,M,S))?O.priority&&(y=1):G[A]=C=uh.call(t,M,A,"get",T[A],J,S,0,i.stringFilter);t._op&&t._op[E]&&t.kill(M,t._op[E]),v&&t._pt&&(Ai=t,me.killTweensOf(M,G,t.globalTime(e)),Q=!t.parent,Ai=0),t._pt&&c&&(Xl[P.id]=1)}y&&_h(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!Q,d&&e<=0&&x.render(yn,!0,!0)},Cy=function(t,e,n,i,r,o,a,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Kl=1,t.vars[e]="+=0",fh(t,a),Kl=0,c?zr(e+" not eligible for reset"):1;l.push(h)}for(f=l.length;f--;)u=l[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=xe(n)+Ne(u.e)),u.b&&(u.b=h.s+Ne(u.b))},Py=function(t,e){var n=t[0]?Ci(t[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return e;r=Qs({},e);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},Iy=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Ve(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Br=function(t,e,n,i,r){return _e(t)?t.call(e,n,i,r):Re(t)&&~t.indexOf("random(")?nr(t):t},Qd=rh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",jd={};Ze(Qd+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return jd[s]=1});var ve=function(s){bd(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Or(i))||this;var c=a.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,f=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,S=i.parent||me,v=(Ve(n)||wd(n)?ai(n[0]):"length"in i)?[n]:vn(n),x,T,E,A,C,M,y,P;if(a._targets=v.length?oh(v):zr("GSAP target "+n+" not found. https://gsap.com",!en.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||jo(l)||jo(h)){if(i=a.vars,x=a.timeline=new De({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:v}),x.kill(),x.parent=x._dp=ri(a),x._start=0,d||jo(l)||jo(h)){if(A=v.length,y=d&&kd(d),Hn(d))for(C in d)~Qd.indexOf(C)&&(P||(P={}),P[C]=d[C]);for(T=0;T<A;T++)E=ra(i,jd),E.stagger=0,p&&(E.yoyoEase=p),P&&Qs(E,P),M=v[T],E.duration=+Br(l,ri(a),T,M,v),E.delay=(+Br(h,ri(a),T,M,v)||0)-a._delay,!d&&A===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),x.to(M,E,y?y(T,M,v):0),x._ease=Kt.none;x.duration()?l=h=0:a.timeline=0}else if(_){Or(dn(x.vars.defaults,{ease:"none"})),x._ease=es(_.ease||i.ease||"none");var z=0,O,G,J;if(Ve(_))_.forEach(function(D){return x.to(v,D,">")}),x.duration();else{E={};for(C in _)C==="ease"||C==="easeEach"||Iy(C,_[C],E,_.easeEach);for(C in E)for(O=E[C].sort(function(D,Q){return D.t-Q.t}),z=0,T=0;T<O.length;T++)G=O[T],J={ease:G.e,duration:(G.t-(T?O[T-1].t:0))/100*l},J[C]=G.v,x.to(v,J,z),z+=J.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||a.duration(l=x.duration())}else a.timeline=0;return f===!0&&!jl&&(Ai=ri(a),me.killTweensOf(v),Ai=0),Vn(S,ri(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!l&&!_&&a._start===Se(S._time)&&tn(u)&&cy(ri(a))&&S.data!=="nested")&&(a._tTime=-ae,a.render(Math.max(0,-h)||0)),m&&Od(ri(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-ae&&!h?c:i<ae?0:i,d,f,_,g,m,p,S,v,x;if(!l)hy(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,v=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(d=Se(u%g),u===c?(_=this._repeat,d=l):(m=Se(u/g),_=~~m,_&&_===m?(d=l,_--):d>l&&(d=l)),p=this._yoyo&&_&1,p&&(x=this._yEase,d=l-d),m=js(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(v&&this._yEase&&$d(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Se(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Fd(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(x||this._ease)(d/l),this._from&&(this.ratio=S=1-S),!a&&u&&!r&&!m&&(hn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&ql(this,i,r,o),hn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&hn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ql(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Pi(this,1),!r&&!(h&&!a)&&(u||a||p)&&(hn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,c){Vr||je.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||fh(this,l),h=this._ease(l/this._dur),Cy(this,i,r,o,a,h,l,c)?this.resetTo(i,r,o,a,1):(da(this,0),this.parent||Ud(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ur(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ue),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ai&&Ai.vars.overwrite!==!0)._first||Ur(this),this.parent&&o!==this.timeline.totalDuration()&&tr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?vn(i):a,l=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!r||r==="all")&&oy(a,c))return r==="all"&&(this._pt=0),Ur(this);for(u=this._op=this._op||[],r!=="all"&&(Re(r)&&(g={},Ze(r,function(S){return g[S]=1}),r=g),r=Py(a,r)),p=a.length;p--;)if(~c.indexOf(a[p])){d=l[p],r==="all"?(u[p]=r,_=d,f={}):(f=u[p]=u[p]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ha(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&Ur(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Fr(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Fr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return me.killTweensOf(i,r,o)},t}(Hr);dn(ve.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ze("staggerTo,staggerFrom,staggerFromTo",function(s){ve[s]=function(){var t=new De,e=Zl.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var ph=function(t,e,n){return t[e]=n},tf=function(t,e,n){return t[e](n)},Ly=function(t,e,n,i){return t[e](i.fp,n)},Dy=function(t,e,n){return t.setAttribute(e,n)},fa=function(t,e){return _e(t[e])?tf:ca(t[e])&&t.setAttribute?Dy:ph},ef=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Uy=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},mh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},gh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Ny=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},Oy=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ha(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Fy=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},_h=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Je=function(){function s(e,n,i,r,o,a,c,l,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||ef,this.d=c||this,this.set=l||ph,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Fy,this.m=n,this.mt=r,this.tween=i},s}();Ze(rh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return sh[s]=1});un.TweenMax=un.TweenLite=ve;un.TimelineLite=un.TimelineMax=De;me=new De({sortChildren:!1,defaults:Ks,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});en.stringFilter=lh;var ns=[],na={},By=[],Sd=0,zy=0,kl=function(t){return(na[t]||By).map(function(e){return e()})},Ql=function(){var t=Date.now(),e=[];t-Sd>2&&(kl("matchMediaInit"),ns.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=kn.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),kl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Sd=t,kl("matchMedia"))},nf=function(){function s(e,n){this.selector=n&&Jl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=zy++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){_e(n)&&(r=i,i=n,n=_e);var o=this,a=function(){var l=pe,h=o.selector,u;return l&&l!==o&&l.data.push(o),r&&(o.selector=Jl(r)),pe=o,u=i.apply(o,arguments),_e(u)&&o._r.push(u),pe=l,o.selector=h,o.isReverted=!1,u};return o.last=a,n===_e?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},t.ignore=function(n){var i=pe;pe=null,n(this),pe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof ve&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof De?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof ve)&&l.revert&&l.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ns.length;o--;)ns[o].id===this.id&&ns.splice(o,1)},t.revert=function(n){this.kill(n||{})},s}(),ky=function(){function s(e){this.contexts=[],this.scope=e,pe&&pe.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Hn(n)||(n={matches:n});var o=new nf(0,r||this.scope),a=o.conditions={},c,l,h;pe&&!o.selector&&(o.selector=pe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?h=1:(c=kn.matchMedia(n[l]),c&&(ns.indexOf(o)<0&&ns.push(o),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener(Ql):c.addEventListener("change",Ql)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),aa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return qd(i)})},timeline:function(t){return new De(t)},getTweensOf:function(t,e){return me.getTweensOf(t,e)},getProperty:function(t,e,n,i){Re(t)&&(t=vn(t)[0]);var r=Ci(t||{}).get,o=n?Dd:Ld;return n==="native"&&(n=""),t&&(e?o((Qe[e]&&Qe[e].get||r)(t,e,n,i)):function(a,c,l){return o((Qe[a]&&Qe[a].get||r)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=vn(t),t.length>1){var i=t.map(function(h){return He.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=Qe[e],a=Ci(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(h){var u=new o;$s._pt=0,u.init(t,n?h+n:h,$s,0,[t]),u.render(1,u),$s._pt&&gh(1,$s)}:a.set(t,c);return o?l:function(h){return l(t,c,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=He.to(t,dn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,l,h){return r.resetTo(e,c,l,h)};return o.tween=r,o},isTweening:function(t){return me.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=es(t.ease,Ks.ease)),_d(Ks,t||{})},config:function(t){return _d(en,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Qe[a]&&!un[a]&&zr(e+" effect requires "+a+" plugin.")}),Ol[e]=function(a,c,l){return n(vn(a),dn(c||{},r),l)},o&&(De.prototype[e]=function(a,c,l){return this.add(Ol[e](a,Hn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Kt[t]=es(e)},parseEase:function(t,e){return arguments.length?es(t,e):Kt},getById:function(t){return me.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new De(t),i,r;for(n.smoothChildTiming=tn(t.smoothChildTiming),me.remove(n),n._dp=0,n._time=n._tTime=me._time,i=me._first;i;)r=i._next,(e||!(!i._dur&&i instanceof ve&&i.vars.onComplete===i._targets[0]))&&Vn(n,i,i._start-i._delay),i=r;return Vn(me,n,0),n},context:function(t,e){return t?new nf(t,e):pe},matchMedia:function(t){return new ky(t)},matchMediaRefresh:function(){return ns.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ql()},addEventListener:function(t,e){var n=na[t]||(na[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=na[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:xy,wrapYoyo:yy,distribute:kd,random:Hd,snap:Vd,normalize:_y,getUnit:Ne,clamp:fy,splitColor:Yd,toArray:vn,selector:Jl,mapRange:Wd,pipe:my,unitize:gy,interpolate:vy,shuffle:zd},install:Rd,effects:Ol,ticker:je,updateRoot:De.updateRoot,plugins:Qe,globalTimeline:me,core:{PropTween:Je,globals:Cd,Tween:ve,Timeline:De,Animation:Hr,getCache:Ci,_removeLinkedListItem:ha,reverting:function(){return Ue},context:function(t){return t&&pe&&(pe.data.push(t),t._ctx=pe),pe},suppressOverwrites:function(t){return jl=t}}};Ze("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return aa[s]=ve[s]});je.add(De.updateRoot);$s=aa.to({},{duration:0});var Vy=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Hy=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Vy(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Vl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(Re(r)&&(c={},Ze(r,function(h){return c[h]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}Hy(a,r)}}}},He=aa.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Ue?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Vl("roundProps",$l),Vl("modifiers"),Vl("snap",Vd))||aa;ve.version=De.version=He.version="3.13.0";Ad=1;th()&&er();var Gy=Kt.Power0,Wy=Kt.Power1,Xy=Kt.Power2,qy=Kt.Power3,Yy=Kt.Power4,Zy=Kt.Linear,Jy=Kt.Quad,$y=Kt.Cubic,Ky=Kt.Quart,Qy=Kt.Quint,jy=Kt.Strong,tv=Kt.Elastic,ev=Kt.Back,nv=Kt.SteppedEase,iv=Kt.Bounce,sv=Kt.Sine,rv=Kt.Expo,ov=Kt.Circ;var sf,Li,sr,bh,ls,av,rf,Eh,cv=function(){return typeof window<"u"},li={},cs=180/Math.PI,rr=Math.PI/180,ir=Math.atan2,of=1e8,wh=/([A-Z])/g,lv=/(left|right|width|margin|padding|x)/i,hv=/[\s,\(]\S/,Gn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},uv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},dv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},fv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},pf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},mf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},pv=function(t,e,n){return t.style[e]=n},mv=function(t,e,n){return t.style.setProperty(e,n)},gv=function(t,e,n){return t._gsap[e]=n},_v=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},xv=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},yv=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},ge="transform",nn=ge+"Origin",vv=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in li&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Gn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ci(i,a)}):this.tfm[t]=o.x?o[t]:ci(i,t),t===nn&&(this.tfm.zOrigin=o.zOrigin);else return Gn.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(ge)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(nn,e,"")),t=ge}(r||e)&&this.props.push(t,e,r[t])},gf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Mv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(wh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Eh(),(!r||!r.isStart)&&!n[ge]&&(gf(n),i.zOrigin&&n[nn]&&(n[nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},_f=function(t,e){var n={target:t,props:[],revert:Mv,save:vv};return t._gsap||He.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},xf,vh=function(t,e){var n=Li.createElementNS?Li.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Li.createElement(t);return n&&n.style?n:Li.createElement(t)},Mn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(wh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,or(e)||e,1)||""},af="O,Moz,ms,Ms,Webkit".split(","),or=function(t,e,n){var i=e||ls,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(af[o]+t in r););return o<0?null:(o===3?"ms":o>=0?af[o]:"")+t},Mh=function(){cv()&&window.document&&(sf=window,Li=sf.document,sr=Li.documentElement,ls=vh("div")||{style:{}},av=vh("div"),ge=or(ge),nn=ge+"Origin",ls.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xf=!!or("perspective"),Eh=He.core.reverting,bh=1)},cf=function(t){var e=t.ownerSVGElement,n=vh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),sr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),sr.removeChild(n),r},lf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},yf=function(t){var e,n;try{e=t.getBBox()}catch{e=cf(t),n=1}return e&&(e.width||e.height)||n||(e=cf(t)),e&&!e.width&&!e.x&&!e.y?{x:+lf(t,["x","cx","x1"])||0,y:+lf(t,["y","cy","y1"])||0,width:0,height:0}:e},vf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&yf(t))},hs=function(t,e){if(e){var n=t.style,i;e in li&&e!==nn&&(e=ge),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(wh,"-$1").toLowerCase())):n.removeAttribute(e)}},Di=function(t,e,n,i,r,o){var a=new Je(t._pt,e,n,0,1,o?mf:pf);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},hf={deg:1,rad:1,turn:1},Sv={grid:1,flex:1},Ui=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=ls.style,c=lv.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,m,p;if(i===o||!r||hf[i]||hf[o])return r;if(o!=="px"&&!d&&(r=s(t,e,n,"px")),p=t.getCTM&&vf(t),(f||o==="%")&&(li[e]||~e.indexOf("adius")))return _=p?t.getBBox()[c?"width":"height"]:t[h],xe(f?r/_*u:r/100*_);if(a[c?"width":"height"]=u+(d?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Li||!g.appendChild)&&(g=Li.body),m=g._gsap,m&&f&&m.width&&c&&m.time===je.time&&!m.uncache)return xe(r/m.width*u);if(f&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+i,_=t[h],S?t.style[e]=S:hs(t,e)}else(f||o==="%")&&!Sv[Mn(g,"display")]&&(a.position=Mn(t,"position")),g===t&&(a.position="static"),g.appendChild(ls),_=ls[h],g.removeChild(ls),a.position="absolute";return c&&f&&(m=Ci(g),m.time=je.time,m.width=g[h]),xe(d?_*r/u:_&&r?u/_*r:0)},ci=function(t,e,n,i){var r;return bh||Mh(),e in Gn&&e!=="transform"&&(e=Gn[e],~e.indexOf(",")&&(e=e.split(",")[0])),li[e]&&e!=="transform"?(r=qr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ma(Mn(t,nn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=pa[e]&&pa[e](t,e,n)||Mn(t,e)||ah(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ui(t,e,r,n)+n:r},bv=function(t,e,n,i){if(!n||n==="none"){var r=or(e,t,1),o=r&&Mn(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Mn(t,"borderTopColor"))}var a=new Je(this._pt,t.style,e,0,1,mh),c=0,l=0,h,u,d,f,_,g,m,p,S,v,x,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Mn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Mn(t,e)||i,g?t.style[e]=g:hs(t,e)),h=[n,i],lh(h),n=h[0],i=h[1],d=n.match(is)||[],T=i.match(is)||[],T.length){for(;u=is.exec(i);)m=u[0],S=i.substring(c,u.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=d[l++]||"")&&(f=parseFloat(g)||0,x=g.substr((f+"").length),m.charAt(1)==="="&&(m=ss(f,m)+x),p=parseFloat(m),v=m.substr((p+"").length),c=is.lastIndex-v.length,v||(v=v||en.units[e]||x,c===i.length&&(i+=v,a.e+=v)),x!==v&&(f=Ui(t,e,g,v)||0),a._pt={_next:a._pt,p:S||l===1?S:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?mf:pf;return nh.test(i)&&(a.e=0),this._pt=a,a},uf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ev=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=uf[n]||n,e[1]=uf[i]||i,e.join(" ")},wv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],li[a]&&(c=1,a=a==="transformOrigin"?nn:ge),hs(n,a);c&&(hs(n,ge),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",qr(n,1),o.uncache=1,gf(i)))}},pa={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Je(t._pt,e,n,0,0,wv);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Xr=[1,0,0,1,0,0],Mf={},Sf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},df=function(t){var e=Mn(t,ge);return Sf(e)?Xr:e.substr(7).match(eh).map(xe)},Th=function(t,e){var n=t._gsap||Ci(t),i=t.style,r=df(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Xr:r):(r===Xr&&!t.offsetParent&&t!==sr&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,a=t.nextElementSibling,sr.appendChild(t)),r=df(t),c?i.display=c:hs(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):sr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Sh=function(t,e,n,i,r,o){var a=t._gsap,c=r||Th(t,!0),l=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=c[0],_=c[1],g=c[2],m=c[3],p=c[4],S=c[5],v=e.split(" "),x=parseFloat(v[0])||0,T=parseFloat(v[1])||0,E,A,C,M;n?c!==Xr&&(A=f*m-_*g)&&(C=x*(m/A)+T*(-g/A)+(g*S-m*p)/A,M=x*(-_/A)+T*(f/A)-(f*S-_*p)/A,x=C,T=M):(E=yf(t),x=E.x+(~v[0].indexOf("%")?x/100*E.width:x),T=E.y+(~(v[1]||v[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&a.smooth?(p=x-l,S=T-h,a.xOffset=u+(p*f+S*g)-p,a.yOffset=d+(p*_+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[nn]="0px 0px",o&&(Di(o,a,"xOrigin",l,x),Di(o,a,"yOrigin",h,T),Di(o,a,"xOffset",u,a.xOffset),Di(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+T)},qr=function(t,e){var n=t._gsap||new hh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),l=Mn(t,nn)||"0",h,u,d,f,_,g,m,p,S,v,x,T,E,A,C,M,y,P,z,O,G,J,D,Q,W,st,$,nt,ct,pt,U,k;return h=u=d=g=m=p=S=v=x=0,f=_=1,n.svg=!!(t.getCTM&&vf(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[ge]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ge]!=="none"?c[ge]:"")),i.scale=i.rotate=i.translate="none"),A=Th(t,n.svg),n.svg&&(n.uncache?(W=t.getBBox(),l=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",Q=""):Q=!e&&t.getAttribute("data-svg-origin"),Sh(t,Q||l,!!Q||n.originIsAbsolute,n.smooth!==!1,A)),T=n.xOrigin||0,E=n.yOrigin||0,A!==Xr&&(P=A[0],z=A[1],O=A[2],G=A[3],h=J=A[4],u=D=A[5],A.length===6?(f=Math.sqrt(P*P+z*z),_=Math.sqrt(G*G+O*O),g=P||z?ir(z,P)*cs:0,S=O||G?ir(O,G)*cs+g:0,S&&(_*=Math.abs(Math.cos(S*rr))),n.svg&&(h-=T-(T*P+E*O),u-=E-(T*z+E*G))):(k=A[6],pt=A[7],$=A[8],nt=A[9],ct=A[10],U=A[11],h=A[12],u=A[13],d=A[14],C=ir(k,ct),m=C*cs,C&&(M=Math.cos(-C),y=Math.sin(-C),Q=J*M+$*y,W=D*M+nt*y,st=k*M+ct*y,$=J*-y+$*M,nt=D*-y+nt*M,ct=k*-y+ct*M,U=pt*-y+U*M,J=Q,D=W,k=st),C=ir(-O,ct),p=C*cs,C&&(M=Math.cos(-C),y=Math.sin(-C),Q=P*M-$*y,W=z*M-nt*y,st=O*M-ct*y,U=G*y+U*M,P=Q,z=W,O=st),C=ir(z,P),g=C*cs,C&&(M=Math.cos(C),y=Math.sin(C),Q=P*M+z*y,W=J*M+D*y,z=z*M-P*y,D=D*M-J*y,P=Q,J=W),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=xe(Math.sqrt(P*P+z*z+O*O)),_=xe(Math.sqrt(D*D+k*k)),C=ir(J,D),S=Math.abs(C)>2e-4?C*cs:0,x=U?1/(U<0?-U:U):0),n.svg&&(Q=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Sf(Mn(t,ge)),Q&&t.setAttribute("transform",Q))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(f*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=xe(f),n.scaleY=xe(_),n.rotation=xe(g)+a,n.rotationX=xe(m)+a,n.rotationY=xe(p)+a,n.skewX=S+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[nn]=ma(l)),n.xOffset=n.yOffset=0,n.force3D=en.force3D,n.renderTransform=n.svg?Av:xf?bf:Tv,n.uncache=0,n},ma=function(t){return(t=t.split(" "))[0]+" "+t[1]},xh=function(t,e,n){var i=Ne(e);return xe(parseFloat(e)+parseFloat(Ui(t,"x",n+"px",i)))+i},Tv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bf(t,e)},os="0deg",Wr="0px",as=") ",bf=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,v=n.zOrigin,x="",T=p==="auto"&&t&&t!==1||p===!0;if(v&&(u!==os||h!==os)){var E=parseFloat(h)*rr,A=Math.sin(E),C=Math.cos(E),M;E=parseFloat(u)*rr,M=Math.cos(E),o=xh(S,o,A*M*-v),a=xh(S,a,-Math.sin(E)*-v),c=xh(S,c,C*M*-v+v)}m!==Wr&&(x+="perspective("+m+as),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(T||o!==Wr||a!==Wr||c!==Wr)&&(x+=c!==Wr||T?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+as),l!==os&&(x+="rotate("+l+as),h!==os&&(x+="rotateY("+h+as),u!==os&&(x+="rotateX("+u+as),(d!==os||f!==os)&&(x+="skew("+d+", "+f+as),(_!==1||g!==1)&&(x+="scale("+_+", "+g+as),S.style[ge]=x||"translate(0, 0)"},Av=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,v=parseFloat(o),x=parseFloat(a),T,E,A,C,M;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=rr,l*=rr,T=Math.cos(c)*u,E=Math.sin(c)*u,A=Math.sin(c-l)*-d,C=Math.cos(c-l)*d,l&&(h*=rr,M=Math.tan(l-h),M=Math.sqrt(1+M*M),A*=M,C*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),T*=M,E*=M)),T=xe(T),E=xe(E),A=xe(A),C=xe(C)):(T=u,C=d,E=A=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=Ui(f,"x",o,"px"),x=Ui(f,"y",a,"px")),(_||g||m||p)&&(v=xe(v+_-(_*T+g*A)+m),x=xe(x+g-(_*E+g*C)+p)),(i||r)&&(M=f.getBBox(),v=xe(v+i/100*M.width),x=xe(x+r/100*M.height)),M="matrix("+T+","+E+","+A+","+C+","+v+","+x+")",f.setAttribute("transform",M),S&&(f.style[ge]=M)},Rv=function(t,e,n,i,r){var o=360,a=Re(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?cs:1),l=c-i,h=i+l+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),u==="cw"&&l<0?l=(l+o*of)%o-~~(l/o)*o:u==="ccw"&&l>0&&(l=(l-o*of)%o-~~(l/o)*o)),t._pt=d=new Je(t._pt,e,n,i,l,uv),d.e=h,d.u="deg",t._props.push(n),d},ff=function(t,e){for(var n in e)t[n]=e[n];return t},Cv=function(t,e,n){var i=ff({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,h,u,d,f,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[ge]=e,a=qr(n,1),hs(n,ge),n.setAttribute("transform",l)):(l=getComputedStyle(n)[ge],o[ge]=e,a=qr(n,1),o[ge]=l);for(c in li)l=i[c],h=a[c],l!==h&&r.indexOf(c)<0&&(f=Ne(l),_=Ne(h),u=f!==_?Ui(n,c,l,_):parseFloat(l),d=parseFloat(h),t._pt=new Je(t._pt,a,c,u,d-u,yh),t._pt.u=_||0,t._props.push(c));ff(a,i)};Ze("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});pa[t>1?"border"+s:s]=function(a,c,l,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return ci(a,_,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(c,f,u)}});var Ah={name:"css",register:Mh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,c=n.vars.startAt,l,h,u,d,f,_,g,m,p,S,v,x,T,E,A,C;bh||Mh(),this.styles=this.styles||_f(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Qe[g]&&dh(g,e,n,i,t,r)))){if(f=typeof h,_=pa[g],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=nr(h)),_)_(this,t,g,h,n)&&(A=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",oi.lastIndex=0,oi.test(l)||(m=Ne(l),p=Ne(h)),p?m!==p&&(l=Ui(t,g,l,p)+p):m&&(h+=m),this.add(a,"setProperty",l,h,i,r,0,0,g),o.push(g),C.push(g,0,a[g]);else if(f!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,t,r):c[g],Re(l)&&~l.indexOf("random(")&&(l=nr(l)),Ne(l+"")||l==="auto"||(l+=en.units[g]||Ne(ci(t,g))||""),(l+"").charAt(1)==="="&&(l=ci(t,g))):l=ci(t,g),d=parseFloat(l),S=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),g in Gn&&(g==="autoAlpha"&&(d===1&&ci(t,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,a.visibility),Di(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Gn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in li,v){if(this.styles.save(g),f==="string"&&h.substring(0,6)==="var(--"&&(h=Mn(t,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),x||(T=t._gsap,T.renderTransform&&!e.parseTransform||qr(t,e.parseTransform),E=e.smoothOrigin!==!1&&T.smooth,x=this._pt=new Je(this._pt,a,ge,0,1,T.renderTransform,T,0,-1),x.dep=1),g==="scale")this._pt=new Je(this._pt,T,"scaleY",T.scaleY,(S?ss(T.scaleY,S+u):u)-T.scaleY||0,yh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(nn,0,a[nn]),h=Ev(h),T.svg?Sh(t,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==T.zOrigin&&Di(this,T,"zOrigin",T.zOrigin,p),Di(this,a,g,ma(l),ma(h)));continue}else if(g==="svgOrigin"){Sh(t,h,1,E,0,this);continue}else if(g in Mf){Rv(this,T,g,d,S?ss(d,S+h):h);continue}else if(g==="smoothOrigin"){Di(this,T,"smooth",T.smooth,h);continue}else if(g==="force3D"){T[g]=h;continue}else if(g==="transform"){Cv(this,h,t);continue}}else g in a||(g=or(g)||g);if(v||(u||u===0)&&(d||d===0)&&!hv.test(h)&&g in a)m=(l+"").substr((d+"").length),u||(u=0),p=Ne(h)||(g in en.units?en.units[g]:m),m!==p&&(d=Ui(t,g,l,p)),this._pt=new Je(this._pt,v?T:a,g,d,(S?ss(d,S+u):u)-d,!v&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?fv:yh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=dv);else if(g in a)bv.call(this,t,g,l,S?S+h:h);else if(g in t)this.add(t,g,l||t[g],S?S+h:h,i,r);else if(g!=="parseTransform"){la(g,h);continue}v||(g in a?C.push(g,0,a[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,l||t[g])),o.push(g)}}A&&_h(this)},render:function(t,e){if(e.tween._time||!Eh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ci,aliases:Gn,getSetter:function(t,e,n){var i=Gn[e];return i&&i.indexOf(",")<0&&(e=i),e in li&&e!==nn&&(t._gsap.x||ci(t,"x"))?n&&rf===n?e==="scale"?_v:gv:(rf=n||{})&&(e==="scale"?xv:yv):t.style&&!ca(t.style[e])?pv:~e.indexOf("-")?mv:fa(t,e)},core:{_removeProperty:hs,_getMatrix:Th}};He.utils.checkPrefix=or;He.core.getStyleSaver=_f;(function(s,t,e,n){var i=Ze(s+","+t+","+e,function(r){li[r]=1});Ze(t,function(r){en.units[r]="deg",Mf[r]=1}),Gn[i[13]]=s+","+t,Ze(n,function(r){var o=r.split(":");Gn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ze("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){en.units[s]="px"});He.registerPlugin(Ah);var ga=He.registerPlugin(Ah)||He,rM=ga.core.Tween;var aM=Math.PI*2,Yr=(s,t=0,e=1)=>Math.min(e,Math.max(t,s));function Rh(s){let t=s*s*s,e=[],n=[],i=[],r=[],o=[],a=[],c=new Set,l=(h,u,d)=>{let f=[h,u,d].join(":");c.has(f)||(c.add(f),a.push([h,u,d]))};for(let h=-5;h<=5;h++)for(let u=-2;u<=2;u++)l(h*.4,.9,u*.4);for(let h of[-1.6,1.6])for(let u of[-.4,.4])for(let d=-3;d<=1;d++)l(h,d*.4,u);for(let h of[-2.4,2.4])for(let u=-2;u<=3;u++)for(let d of[-.8,0,.8])l(h,u*.4,d);for(let h of[-2.8,2.8])for(let u=-2;u<=1;u++)for(let d of[-.4,.4])l(h,u*.4,d);for(let h=0;h<t;h++){let u=h%s,d=Math.floor(h/s)%s,f=Math.floor(h/(s*s)),_=[(u-(s-1)/2)*1.65/s,(d-(s-1)/2)*1.65/s,(f-(s-1)/2)*1.65/s];e.push(_);let g=h*2.399963229728653,m=1.25+h*37%17/17*.95;n.push([Math.cos(g)*m,Math.sin(h*1.7)*1.45,Math.sin(g)*m*.75]),i.push([Math.cos(g)*1.75,Math.sin(h*1.7)*1.15,Math.sin(g)*1.3]);let p=1-(h+.5)/t*2,S=Math.sqrt(1-p*p);r.push([Math.cos(g)*S*1.6,p*1.6,Math.sin(g)*S*1.6]),o.push(a[Math.round(h/(t-1)*(a.length-1))])}return{count:t,n:s,formations:[e,n,i,r,o,e]}}function Ef(s){let t=[0,1,1.15,2,3,4],e=0;for(;e<t.length-2&&s>t[e+1];)e++;return{from:e,to:e+1,weight:Yr((s-t[e])/(t[e+1]-t[e]))}}function wf(s){if(s<=0||s>=4)return 0;let t=Yr(s/.3),e=1-Yr((s-3.72)/.28);return Math.min(t,e)}function Tf(s){let t=Yr(s)*5,e=Math.min(4,Math.floor(t)),n=Yr((t-e)/.38),i=n*n*(3-2*n),r=[0,1,1.15,2,3,4];return r[e]+(r[e+1]-r[e])*i}var _a=s=>Math.max(0,Math.min(1,s)),Ni=["inicio","problema","diagnostico","transformacao","solucoes","projetos","processo","inteligencia","sobre","resultado","contato"];function Af(){let s={cx:4.5,cy:3.3,cz:8.4,tx:0,ty:-.1,tz:-.1,actorX:0,actorY:0,actorZ:0,yaw:.18,actorScale:1,pose:1,shape:0,order:.52,props:1,panel:1,path:1,wire:0,network:0,portal:0,opacity:1,screenX:.74,screenY:.52,mobileX:.49,mobileY:.76,mobileDistance:1.4,light:1.1,walk:0,walkAmp:.25},t={inicio:{...s},problema:{...s,cx:3.4,cy:2.6,cz:8.8,actorX:-.35,yaw:.25,order:0,path:.2,mobileY:.69,mobileDistance:1.35},diagnostico:{...s,cx:2.4,cy:2.2,cz:8.8,yaw:.2,order:.25,props:.28,path:.15,wire:1,pose:.1,mobileY:.76,mobileDistance:1.55,light:1.35,walkAmp:0},transformacao:{...s,cx:2.3,cy:2.1,cz:12,actorY:.4,props:.15,order:.7,path:.5,pose:1,wire:0,screenX:.73,screenY:.5,mobileY:.65,mobileDistance:1.55,light:1.2,walkAmp:0},solucoes:{...s,opacity:0,props:0,walkAmp:0},projetos:{...s,opacity:0,props:0,walkAmp:0},processo:{...s,cx:0,cy:1.8,cz:12,actorScale:.6,props:0,path:0,screenX:.14,screenY:.54,mobileX:.87,mobileY:.44,mobileDistance:1.1,walkAmp:1},inteligencia:{...s,cx:3.2,cy:3.6,cz:11.5,actorScale:.62,pose:0,props:0,path:0,network:1,screenX:.74,screenY:.53,mobileY:.72,mobileDistance:1.55,light:1.25,walkAmp:0},sobre:{...s,opacity:0,props:0,walkAmp:0},resultado:{...s,cx:4.5,cy:4,cz:10.2,order:1,yaw:0,path:1,mobileY:.73,mobileDistance:1.4,walkAmp:0},contato:{...s,cx:5.2,cy:3.5,cz:11,tx:1,ty:.1,tz:-1,actorX:-.4,actorZ:.2,order:1,props:.3,path:1,portal:1,screenX:.77,mobileY:.73,mobileDistance:1.5,light:1.2,walkAmp:.6}};for(let a of Ni)a!=="inicio"&&(t[a].panel=0);let e={...s},n={time:0},i=ga.timeline({paused:!0}).to(n,{time:Ni.length,duration:Ni.length,ease:"none"}),r=ga.parseEase("power2.inOut");function o(a,c){let l=Math.max(0,Ni.indexOf(a)),h=_a(c);i.time(l+h,!0);let u=_a(n.time-l),d=t[Ni[l]],f={...t[Ni[Math.max(0,l-1)]]};Ni[l-1]==="processo"&&(f.screenX=.86,f.mobileY=.79);let _=d.opacity===0?.08:Ni[l]==="transformacao"?.1:.28,g=l===0?1:r(_a(u/_));for(let m of Object.keys(d))e[m]=f[m]+(d[m]-f[m])*g;if(e.shape=a==="transformacao"?Tf(u):0,a==="transformacao"){e.order=u,e.actorY=.4,e.yaw=-.2+u*.7;let m=S=>{let v=_a(S);return v*v*(3-2*v)},p=m((e.shape-2.2)/.6)*(1-m((e.shape-3.6)/.4));e.cz=12+p*1.5,e.mobileDistance=1.55+p*.25}return a==="problema"&&(e.walk=u*Math.PI*3),a==="inicio"&&(e.walk=u*Math.PI*2),a==="processo"&&(e.screenX=.14+u*.72,e.mobileY=.44+u*.35,e.walk=u*Math.PI*16,e.opacity=1),a==="contato"&&(e.actorX=-.4+u*2.6,e.actorZ=.2-u*2.7,e.walk=u*Math.PI*5),e}return{state:e,seek:o,dispose(){i.kill()}}}hd();var Ge=document.documentElement;Ge.classList.contains("reduced-motion")||Pv();function Pv(){let s=document.getElementById("sceneStage"),t=document.getElementById("sceneCanvas"),e,n=!1,i=Lr(),r=Zo[i],o=innerWidth<=700;try{e=new Vs({canvas:t,alpha:!0,antialias:i!=="low",powerPreference:"high-performance"}),e.outputColorSpace=Ee,e.toneMapping=Pr,e.toneMappingExposure=1.1}catch{n=!0;let it=t.cloneNode();t.replaceWith(it),t=it;try{e=new Js(t)}catch{dispatchEvent(new Event("portfolio:graphics-fallback"));return}}Ge.dataset.renderer=n?"canvas":"webgl";let a=new bi,c=new ze(38,1,.1,100),l=new Set,h=new Set,u=new Set,d=new ye(1,1,1);l.add(d);let f=n?d:new Ln(1,1,1,3,.0325);l.add(f);function _(it={},X=!1){let Z=X?new Ye(it):new Ae({roughness:.7,metalness:.08,...it});return h.add(Z),Z}let g=new Ki({color:"#e96c0c",roughness:.38,metalness:.48,clearcoat:.08,clearcoatRoughness:.5,envMapIntensity:.7}),m=_({color:"#272623",roughness:.85}),p=_({color:"#f4f0e8",roughness:.72}),S=_({color:"#111111",roughness:.6}),v=_({color:"#ff7a00",toneMapped:!1},!0),x=_({color:"#ff9b35",transparent:!0,opacity:.6,toneMapped:!1},!0);h.add(g);let T=null;function E(it,X,Z,gt,rt=a,Lt=!0){let I=new zt(Lt?f:d,gt);return I.scale.set(it,X,Z),rt.add(I),I}function A(it,X,Z,gt,rt=a){let Lt=new L(...it),I=new L(...X),lt=I.clone().sub(Lt),V=E(Z,lt.length(),Z,gt,rt,!1);return V.position.copy(Lt).add(I).multiplyScalar(.5),V.quaternion.setFromUnitVectors(new L(0,1,0),lt.normalize()),V}if(!n){T=Ko(e,a),a.add(new Gs("#fff4e5","#5d4937",1.4));let it=new Ei("#fff6e8",2.5);it.position.set(-4,7,6),a.add(it);let X=new Ei("#ff9c44",.45);X.position.set(5,4,-4),a.add(X);let Z=new Ei("#ffffff",.5);Z.position.set(3,2,7),a.add(Z)}let C=new de,M=new de;a.add(C),C.add(M);let y=$o({size:1.65,software:n,orange:g});M.add(y.group),Ge.dataset.cubeDesign="premium-modular";let P=new Cn(f,g,125);P.instanceMatrix.setUsage(qo),P.frustumCulled=!1,M.add(P);let z=Rh(n?3:r.grid);P.count=z.count;let O=new ko(1.6,n?10:28,n?7:18);l.add(O);let G=new zt(O,g);M.add(G),G.visible=!1;let J=new de;M.add(J);let D=1.02;for(let[it,X]of[[[-D,-D,-D],[D,-D,-D]],[[-D,D,-D],[D,D,-D]],[[-D,-D,D],[D,-D,D]],[[-D,D,D],[D,D,D]],[[-D,-D,-D],[-D,D,-D]],[[D,-D,-D],[D,D,-D]],[[-D,-D,D],[-D,D,D]],[[D,-D,D],[D,D,D]],[[-D,-D,-D],[-D,-D,D]],[[D,-D,-D],[D,-D,D]],[[-D,D,-D],[-D,D,D]],[[D,D,-D],[D,D,D]]])A(it,X,.012,x,J);let Q=new de;a.add(Q);let W=[];for(let it=0;it<18;it++){let X=.35+it%4*.34,Z=E(.68,X,.68,it%3===0?m:p,Q),gt=it*2.39996+.4,rt=new L(Math.sign(Math.cos(gt))*(2+Math.abs(Math.cos(gt))*.9),-1.5+X/2,-2.2-Math.abs(Math.sin(gt))*1.2),Lt=new L([-3.7,-2.5,-1.3,1.3,2.5,3.7][it%6],-1.5+X/2,-3.8+Math.floor(it/6)*1.25);W.push({mesh:Z,height:X,chaos:rt,ordered:Lt,angle:(it%5-2)*.18})}let st=new de;a.add(st);let $=[[-5,-1.49,3],[-3.3,-1.49,2.2],[-2,-1.49,.9],[-.7,-1.49,.35],[.4,-1.49,-.5],[1.1,-1.49,-1.1],[2.3,-1.49,-1.7],[3.1,-1.49,-2.6]],nt=new Ar($.map(it=>new L(...it))),ct=[];if(n){let it=nt.getPoints(24),X=_({color:"#ff7a00",transparent:!0,opacity:.08},!0);for(let Z=0;Z<it.length-1;Z++)ct.push(A(it[Z].toArray(),it[Z+1].toArray(),.045,v,st)),A(it[Z].toArray(),it[Z+1].toArray(),.14,X,st)}else{let it=new Rr(nt,64,.025,6,!1);l.add(it),st.add(new zt(it,v));let X=new Rr(nt,48,.08,6,!1);l.add(X),st.add(new zt(X,_({color:"#ff7a00",transparent:!0,opacity:.07,depthWrite:!1},!0)))}C.traverse(it=>{it.isMesh&&(it.renderOrder=Math.max(2,it.renderOrder))});let pt=document.createElement("canvas");pt.width=pt.height=64;let U=pt.getContext("2d"),k=U.createRadialGradient(32,32,1,32,32,32);k.addColorStop(0,"#00000060"),k.addColorStop(1,"#00000000"),U.fillStyle=k,U.fillRect(0,0,64,64);let ot=new Bn(pt);u.add(ot);let K=_({map:ot,transparent:!0,depthWrite:!1},!0),_t=new ln(3.6,3.6);l.add(_t);let St=new zt(_t,K);St.rotation.x=-Math.PI/2,St.position.y=-1.51,St.userData.skipSoftware=!0,a.add(St);let Dt=new de;a.add(Dt);let Ft=[[0,0,0],[-2,1,-.5],[2,.8,-.1],[-1.6,-.65,1.2],[1.8,-.65,1.1],[-.7,1.5,-1.4],[.6,-.85,-1.1]];Ft.slice(1).forEach((it,X)=>{let Z=E(.3,.3,.3,X%2?p:g,Dt);Z.position.set(...it),Z.rotation.y=X*.5});for(let[it,X]of[[0,1],[0,2],[0,3],[0,4],[1,5],[2,5],[3,6],[4,6]])A(Ft[it],Ft[X],.025,v,Dt);let bt=new de;a.add(bt),bt.position.set(3.5,.1,-3.1),bt.rotation.y=-.12;let Wt=_({color:"#fff7df",toneMapped:!1},!0);E(.16,3.8,.25,v,bt).position.x=-1.14,E(.16,3.8,.25,v,bt).position.x=1.14,E(2.4,.16,.25,v,bt).position.y=1.82,E(2.12,3.52,.04,Wt,bt,!1).position.set(0,-.02,-.12),E(2.5,.1,1.4,p,bt).position.set(0,-1.84,.4);let kt=Af(),Ut=new fe,Et=new L,$t=md(s),wt=0,R=0,b=!1,H=0,et=0,at=0,j=0,Tt=0,mt=0;function yt(){o=innerWidth<=700,$t.invalidate(),wt=R=0,i=Lr(),r=Zo[i],Ge.dataset.quality=i,e.setPixelRatio(Math.min(devicePixelRatio||1,r.dpr,n?1.25:2)),z=Rh(n?3:r.grid),P.count=z.count,Ge.dataset.microcubes=String(P.count),Ge.dataset.graphicsInitialized="true"}let Jt=dd({scene:a,software:n,quality:i}),dt=pd({scene:a,software:n,quality:i});yt(),addEventListener("resize",yt,{passive:!0}),addEventListener("portfolio:quality",yt),matchMedia("(hover:hover) and (pointer:fine)").matches&&addEventListener("pointermove",it=>{Tt=(it.clientX/innerWidth-.5)*.1,mt=(it.clientY/innerHeight-.5)*.05},{passive:!0});function vt(it){if(b||(et=requestAnimationFrame(vt),document.hidden||Ge.classList.contains("reduced-motion")))return;let X=1e3/(n?30:r.fps);if(it-H<X-.5)return;H=it-(it-H)%X;let Z=$t.read();if(!Z){Ge.dataset.cinemaImmersive="false";return}Ge.dataset.cinemaImmersive=String(Z.id==="problema"&&Z.rect.top<=2&&Z.rect.bottom>Math.min(innerHeight*.45,300)),(wt!==Z.width||R!==Z.height)&&(wt=Z.width,R=Z.height,e.setSize(wt,R,!1),c.aspect=wt/R);let gt=performance.now(),rt=Z.id,Lt=Z.progress,I=kt.seek(rt,Lt),lt=wt/R;s.style.setProperty("--scene-opacity","1"),Ge.dataset.morphShape=I.shape.toFixed(3),Ge.dataset.sceneOrder=I.order.toFixed(3),c.clearViewOffset(),Et.set(0,-.3,0);let V=Math.max(4,4.4/lt);if(rt==="transformacao"&&(Et.y=.25,V=Math.max(4.5,6.8/lt)),rt==="inteligencia"&&(V=Math.max(4.5,5.7/lt)),rt==="contato"&&(Et.set(1.15,-.2,-1.1),V=Math.max(5.3,8.5/lt)),rt==="processo"){I.actorScale=1,V=o?2.9/lt:3.25;let Ot=[...document.querySelectorAll(".process-node")],Ht=Ot[0].getBoundingClientRect(),Oe=Ot.at(-1).getBoundingClientRect(),Wn=Math.max(0,Math.min(1,(Lt-.1)/.8)),be=o?.5:(Ht.x+Ht.width/2+(Oe.x-Ht.x)*Wn-Z.rect.left)/wt,ar=o?Math.max(.1,Math.min(.85,(Ht.y+Ht.height/2+(Oe.y-Ht.y)*Wn-Z.rect.top)/R)):.48;c.setViewOffset(wt,R,(.5-be)*wt,(.5-ar)*R,wt,R)}let tt=V/(2*Math.tan(gn.degToRad(c.fov/2)));c.position.set(I.cx+Tt,I.cy+mt,I.cz).sub(Et).normalize().multiplyScalar(tt).add(Et);let ht=Dl(Lt);if(Jt.group.visible=rt==="problema",dt.group.visible=rt==="projetos",rt==="problema"){let Ht=Math.max(6.4,5.8/lt)*ht.zoom/(2*Math.tan(gn.degToRad(c.fov/2)));Et.set(...ht.focus);let Oe=.52+Lt*.3;c.position.set(Math.sin(Oe)*.77,.78,Math.cos(Oe)*.9).normalize().multiplyScalar(Ht).add(Et)}if(rt==="projetos"){let Ot=Qo(Lt),Oe=Math.max(7,6.3/lt)*(1-Ot.cameraDock*.16)/(2*Math.tan(gn.degToRad(c.fov/2)));Et.set(0,1.1-Ot.cameraDock*.6,.18),c.position.set(.18-Ot.cameraDock*.13,.2+Math.sin(Ot.local*Math.PI)*.035,1).normalize().multiplyScalar(Oe).add(Et)}if(c.lookAt(Et),c.updateProjectionMatrix(),C.position.set(I.actorX,I.actorY+(rt==="inicio"?Math.sin(it*8e-4)*.018:0),I.actorZ),C.rotation.y=I.yaw+(rt==="inicio"?Math.sin(it*7e-4)*.075:0),C.scale.setScalar(I.actorScale),rt==="problema"){let Ot=Jt.update(Lt,it,c);C.position.set(...Ot.actor),C.position.y+=.3,C.scale.setScalar(.45),C.rotation.set(0,Ot.yaw,0)}else C.rotation.x=0;M.rotation.z=0;let ut=wf(I.shape),At=Math.max(0,1-Math.abs(I.shape-2)/.34),Xt=Ef(I.shape),Qt=z.formations[Xt.from],Yt=z.formations[Xt.to];if(y.update({fracture:ut,spread:rt==="problema"&&ht.blocked?.2:rt==="diagnostico"?Math.sin(Lt*Math.PI)**2*.45:0}),P.visible=ut>.005&&At<.98,P.visible){let Ot=(1.65/z.n-.016)*(I.shape>1.2&&I.shape<3.7?.72:1);for(let Ht=0;Ht<P.count;Ht++)Ut.position.set(Qt[Ht][0]+(Yt[Ht][0]-Qt[Ht][0])*Xt.weight,Qt[Ht][1]+(Yt[Ht][1]-Qt[Ht][1])*Xt.weight,Qt[Ht][2]+(Yt[Ht][2]-Qt[Ht][2])*Xt.weight),Ut.rotation.set(Ht%3*.23*ut,Ht%5*.3*ut,Ht%4*.13*ut),(I.shape<.05||I.shape>3.95)&&Ut.rotation.set(0,0,0),Ut.scale.setScalar(Ot*ut*(1-At*.9)),Ut.updateMatrix(),P.setMatrixAt(Ht,Ut.matrix);P.instanceMatrix.needsUpdate=!0}G.visible=At>.01,G.scale.setScalar(At),J.visible=I.wire>.02,J.scale.setScalar(Math.max(.01,I.wire)),Q.visible=I.props>.02&&rt!=="inicio"&&rt!=="problema",Q.scale.setScalar(Math.max(.01,I.props)),W.forEach((Ot,Ht)=>{if(Ot.mesh.visible=Ht<(rt==="inicio"?3:n?8:r.blocks),Ot.mesh.scale.set(.68,Ot.height,.68),Ot.mesh.position.lerpVectors(Ot.chaos,Ot.ordered,I.order),rt==="inicio"&&Ht<3){let Oe=[[-2.05,-1.25,-.75],[1.9,-1.3,-1.6],[.6,-1.38,-3.2]];Ot.mesh.position.set(...Oe[Ht]),Ot.mesh.scale.set(.64,Ht===0?.48:.34,.64)}Ot.mesh.rotation.set(Ot.angle*(1-I.order),Ot.angle*2*(1-I.order),Ot.angle*(1-I.order))}),st.visible=I.path>.02&&rt!=="processo"&&rt!=="problema",st.scale.setScalar(Math.max(.02,I.path)),Dt.visible=I.network>.02,Dt.scale.setScalar(Math.max(.01,I.network)),bt.visible=I.portal>.02,bt.scale.setScalar(Math.max(.01,I.portal)),St.visible=rt!=="problema",St.position.x=C.position.x,St.position.z=C.position.z,St.scale.setScalar(I.actorScale),K.opacity=(1-ut*.6)*.85,C.visible=rt!=="projetos",rt==="projetos"&&(Q.visible=st.visible=Dt.visible=bt.visible=St.visible=!1,dt.update(Lt,it,c)),n?e.render(a,c):(e.toneMappingExposure=rt==="problema"?.88:I.light*.92,e.render(a,c),Ge.dataset.drawCalls=String(e.info.render.calls),Ge.dataset.triangles=String(e.info.render.triangles)),s.style.visibility="visible",Ge.dataset.frameMs=String(Math.round((performance.now()-gt)*10)/10),s.classList.contains("is-ready")||(s.classList.add("is-ready"),Ge.dataset.sceneReady="true"),at++,j||(j=it),it-j>1600&&(Ge.dataset.fps=String(Math.round(at*1e3/(it-j)*10)/10),at=0,j=it)}t.addEventListener("webglcontextlost",it=>{it.preventDefault(),dispatchEvent(new Event("portfolio:graphics-fallback"))}),addEventListener("pagehide",it=>{if(!it.persisted){b=!0,cancelAnimationFrame(et),removeEventListener("resize",yt),removeEventListener("portfolio:quality",yt),$t.dispose(),kt.dispose(),y.dispose(),Jt.dispose(),dt.dispose(),T?.dispose();for(let X of l)X.dispose();for(let X of h)X.dispose();for(let X of u)X.dispose();e.dispose?.()}}),et=requestAnimationFrame(vt)}})();
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
