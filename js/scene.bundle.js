(()=>{var Ll="170";var jf=0,Yh=1,tp=2;var td=1,ep=2,ui=3,Oi=0,nn=1,Mn=2,Li=0,Zs=1,Zh=2,$h=3,Jh=4,np=5,ss=100,ip=101,sp=102,rp=103,op=104,ap=200,cp=201,lp=202,hp=203,lc=204,hc=205,up=206,dp=207,fp=208,pp=209,mp=210,gp=211,_p=212,xp=213,yp=214,uc=0,dc=1,fc=2,Qs=3,pc=4,mc=5,gc=6,_c=7,ed=0,vp=1,Mp=2,Ui=0,Sp=1,Ep=2,bp=3,qr=4,Tp=5,wp=6,Ap=7;var nd=300,js=301,tr=302,xc=303,yc=304,ia=306,vc=1e3,as=1001,Mc=1002,Sn=1003,Rp=1004;var uo=1005;var Kn=1006,Pa=1007;var cs=1008;var mi=1009,id=1010,sd=1011,Vr=1012,Ul=1013,ls=1014,Qn=1015,Yr=1016,Ol=1017,Nl=1018,er=1020,rd=35902,od=1021,ad=1022,Vn=1023,cd=1024,ld=1025,$s=1026,nr=1027,Fl=1028,Bl=1029,hd=1030,zl=1031;var kl=1033,No=33776,Fo=33777,Bo=33778,zo=33779,Sc=35840,Ec=35841,bc=35842,Tc=35843,wc=36196,Ac=37492,Rc=37496,Cc=37808,Pc=37809,Ic=37810,Dc=37811,Lc=37812,Uc=37813,Oc=37814,Nc=37815,Fc=37816,Bc=37817,zc=37818,kc=37819,Hc=37820,Vc=37821,ko=36492,Gc=36494,Wc=36495,ud=36283,Xc=36284,qc=36285,Yc=36286;var Ho=2300,Zc=2301,Ia=2302,Kh=2400,Qh=2401,jh=2402;var Cp=3200,Pp=3201;var dd=0,Ip=1,Di="",ge="srgb",hr="srgb-linear",sa="linear",me="srgb";var Is=7680;var tu=519,Dp=512,Lp=513,Up=514,fd=515,Op=516,Np=517,Fp=518,Bp=519,eu=35044,Ze=35048;var nu="300 es",fi=2e3,Vo=2001,Ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iu=1234567,Fr=Math.PI/180,Gr=180/Math.PI;function ur(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[s&255]+je[s>>8&255]+je[s>>16&255]+je[s>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Ye(s,t,e){return Math.max(t,Math.min(e,s))}function Hl(s,t){return(s%t+t)%t}function zp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function kp(s,t,e){return s!==t?(e-s)/(t-s):0}function Br(s,t,e){return(1-e)*s+e*t}function Hp(s,t,e,n){return Br(s,t,1-Math.exp(-e*n))}function Vp(s,t=1){return t-Math.abs(Hl(s,t*2)-t)}function Gp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Wp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Xp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function qp(s,t){return s+Math.random()*(t-s)}function Yp(s){return s*(.5-Math.random())}function Zp(s){s!==void 0&&(iu=s);let t=iu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $p(s){return s*Fr}function Jp(s){return s*Gr}function Kp(s){return(s&s-1)===0&&s!==0}function Qp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function jp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function tm(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*_,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*_,a*l);break;case"ZYZ":s.set(c*_,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function qs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function an(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Be={DEG2RAD:Fr,RAD2DEG:Gr,generateUUID:ur,clamp:Ye,euclideanModulo:Hl,mapLinear:zp,inverseLerp:kp,lerp:Br,damp:Hp,pingpong:Vp,smoothstep:Gp,smootherstep:Wp,randInt:Xp,randFloat:qp,randFloatSpread:Yp,seededRandom:Zp,degToRad:$p,radToDeg:Jp,isPowerOfTwo:Kp,ceilPowerOfTwo:Qp,floorPowerOfTwo:jp,setQuaternionFromProperEuler:tm,normalize:an,denormalize:qs},jt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ie=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],S=i[1],v=i[4],y=i[7],A=i[2],b=i[5],w=i[8];return r[0]=o*g+a*S+c*A,r[3]=o*m+a*v+c*b,r[6]=o*p+a*y+c*w,r[1]=l*g+h*S+u*A,r[4]=l*m+h*v+u*b,r[7]=l*p+h*y+u*w,r[2]=d*g+f*S+_*A,r[5]=d*m+f*v+_*b,r[8]=d*p+f*y+_*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*l-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*c)*g,t[5]=(i*r-a*e)*g,t[6]=f*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Da.makeScale(t,e)),this}rotate(t){return this.premultiply(Da.makeRotation(-t)),this}translate(t,e){return this.premultiply(Da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Da=new ie;function pd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Go(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function em(){let s=Go("canvas");return s.style.display="block",s}var su={};function Or(s){s in su||(su[s]=!0,console.warn(s))}function nm(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function im(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sm(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ce={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?sa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ru=[.64,.33,.3,.6,.15,.06],ou=[.2126,.7152,.0722],au=[.3127,.329],cu=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[hr]:{primaries:ru,whitePoint:au,transfer:sa,toXYZ:cu,fromXYZ:lu,luminanceCoefficients:ou,workingColorSpaceConfig:{unpackColorSpace:ge},outputColorSpaceConfig:{drawingBufferColorSpace:ge}},[ge]:{primaries:ru,whitePoint:au,transfer:me,toXYZ:cu,fromXYZ:lu,luminanceCoefficients:ou,outputColorSpaceConfig:{drawingBufferColorSpace:ge}}});var Ds,$c=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ds===void 0&&(Ds=Go("canvas")),Ds.width=t.width,Ds.height=t.height;let n=Ds.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Go("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=pi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},rm=0,Wo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=ur(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(La(i[o].image)):r.push(La(i[o]))}else r=La(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function La(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$c.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var om=0,dn=class s extends Ni{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=as,i=as,r=Kn,o=cs,a=Vn,c=mi,l=s.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=ur(),this.name="",this.source=new Wo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vc:t.x=t.x-Math.floor(t.x);break;case as:t.x=t.x<0?0:1;break;case Mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vc:t.y=t.y-Math.floor(t.y);break;case as:t.y=t.y<0?0:1;break;case Mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=nd;dn.DEFAULT_ANISOTROPY=1;var _e=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,y=(f+1)/2,A=(p+1)/2,b=(h+d)/4,w=(u+g)/4,C=(_+m)/4;return v>y&&v>A?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=w/n):y>A?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=C/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=w/r,i=C/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-g)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jc=class extends Ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Wo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gi=class extends Jc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xo=class extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kc=class extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||c!==d||l!==f||h!==_){let m=1-a,p=c*d+l*f+h*_+u*g,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let A=Math.sqrt(v),b=Math.atan2(A,p*S);m=Math.sin(m*b)/A,a=Math.sin(a*b)/A}let y=a*S;if(c=c*m+d*y,l=l*m+f*y,h=h*m+_*y,u=u*m+g*y,m===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*f-l*d,t[e+1]=c*_+h*d+l*u-a*f,t[e+2]=l*_+h*f+a*d-c*u,t[e+3]=h*_-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ua.copy(this).projectOnVector(t),this.sub(Ua)}reflect(t){return this.sub(Ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ua=new U,hu=new Gn,_i=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fo.copy(n.boundingBox)),fo.applyMatrix4(t.matrixWorld),this.union(fo)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rr),po.subVectors(this.max,Rr),Ls.subVectors(t.a,Rr),Us.subVectors(t.b,Rr),Os.subVectors(t.c,Rr),wi.subVectors(Us,Ls),Ai.subVectors(Os,Us),Ki.subVectors(Ls,Os);let e=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Ki.z,Ki.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Ki.z,0,-Ki.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Ki.y,Ki.x,0];return!Oa(e,Ls,Us,Os,po)||(e=[1,0,0,0,1,0,0,0,1],!Oa(e,Ls,Us,Os,po))?!1:(mo.crossVectors(wi,Ai),e=[mo.x,mo.y,mo.z],Oa(e,Ls,Us,Os,po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},oi=[new U,new U,new U,new U,new U,new U,new U,new U],zn=new U,fo=new _i,Ls=new U,Us=new U,Os=new U,wi=new U,Ai=new U,Ki=new U,Rr=new U,po=new U,mo=new U,Qi=new U;function Oa(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Qi.fromArray(s,r);let a=i.x*Math.abs(Qi.x)+i.y*Math.abs(Qi.y)+i.z*Math.abs(Qi.z),c=t.dot(Qi),l=e.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var am=new _i,Cr=new U,Na=new U,hs=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):am.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);let e=Cr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Cr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(Na)),this.expandByPoint(Cr.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new U,Fa=new U,go=new U,Ri=new U,Ba=new U,_o=new U,za=new U,Qc=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Fa.copy(t).add(e).multiplyScalar(.5),go.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(Fa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(go),a=Ri.dot(this.direction),c=-Ri.dot(go),l=Ri.lengthSq(),h=Math.abs(1-o*o),u,d,f,_;if(h>0)if(u=o*c-a,d=o*a-c,_=r*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fa).addScaledVector(go,d),f}intersectSphere(t,e){ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),i=ai.dot(ai)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,i,r){Ba.subVectors(e,t),_o.subVectors(n,t),za.crossVectors(Ba,_o);let o=this.direction.dot(za),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,t);let c=a*this.direction.dot(_o.crossVectors(Ri,_o));if(c<0)return null;let l=a*this.direction.dot(Ba.cross(Ri));if(l<0||c+l>o)return null;let h=-a*Ri.dot(za);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,_,g,m)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ns.setFromMatrixColumn(t,0).length(),r=1/Ns.setFromMatrixColumn(t,1).length(),o=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+_*l,e[5]=d-g*l,e[9]=-a*c,e[2]=g-d*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,_=l*h,g=l*u;e[0]=d+g*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=g+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,_=l*h,g=l*u;e[0]=d-g*a,e[4]=-o*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=_*l-f,e[8]=d*l+g,e[1]=c*u,e[5]=g*l+d,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){let d=o*c,f=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cm,t,lm)}lookAt(t,e,n){let i=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ci.crossVectors(n,yn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ci.crossVectors(n,yn)),Ci.normalize(),xo.crossVectors(yn,Ci),i[0]=Ci.x,i[4]=xo.x,i[8]=yn.x,i[1]=Ci.y,i[5]=xo.y,i[9]=yn.y,i[2]=Ci.z,i[6]=xo.z,i[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],S=n[3],v=n[7],y=n[11],A=n[15],b=i[0],w=i[4],C=i[8],M=i[12],x=i[1],D=i[5],V=i[9],z=i[13],W=i[2],$=i[6],O=i[10],lt=i[14],Z=i[3],ht=i[7],rt=i[11],xt=i[15];return r[0]=o*b+a*x+c*W+l*Z,r[4]=o*w+a*D+c*$+l*ht,r[8]=o*C+a*V+c*O+l*rt,r[12]=o*M+a*z+c*lt+l*xt,r[1]=h*b+u*x+d*W+f*Z,r[5]=h*w+u*D+d*$+f*ht,r[9]=h*C+u*V+d*O+f*rt,r[13]=h*M+u*z+d*lt+f*xt,r[2]=_*b+g*x+m*W+p*Z,r[6]=_*w+g*D+m*$+p*ht,r[10]=_*C+g*V+m*O+p*rt,r[14]=_*M+g*z+m*lt+p*xt,r[3]=S*b+v*x+y*W+A*Z,r[7]=S*w+v*D+y*$+A*ht,r[11]=S*C+v*V+y*O+A*rt,r[15]=S*M+v*z+y*lt+A*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+g*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],S=u*m*l-g*d*l+g*c*f-a*m*f-u*c*p+a*d*p,v=_*d*l-h*m*l-_*c*f+o*m*f+h*c*p-o*d*p,y=h*g*l-_*u*l+_*a*f-o*g*f-h*a*p+o*u*p,A=_*u*c-h*g*c-_*a*d+o*g*d+h*a*m-o*u*m,b=e*S+n*v+i*y+r*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return t[0]=S*w,t[1]=(g*d*r-u*m*r-g*i*f+n*m*f+u*i*p-n*d*p)*w,t[2]=(a*m*r-g*c*r+g*i*l-n*m*l-a*i*p+n*c*p)*w,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*w,t[4]=v*w,t[5]=(h*m*r-_*d*r+_*i*f-e*m*f-h*i*p+e*d*p)*w,t[6]=(_*c*r-o*m*r-_*i*l+e*m*l+o*i*p-e*c*p)*w,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*w,t[8]=y*w,t[9]=(_*u*r-h*g*r-_*n*f+e*g*f+h*n*p-e*u*p)*w,t[10]=(o*g*r-_*a*r+_*n*l-e*g*l-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*w,t[12]=A*w,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*w,t[14]=(_*a*i-o*g*i-_*n*c+e*g*c+o*n*m-e*a*m)*w,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,_=r*u,g=o*h,m=o*u,p=a*u,S=c*l,v=c*h,y=c*u,A=n.x,b=n.y,w=n.z;return i[0]=(1-(g+p))*A,i[1]=(f+y)*A,i[2]=(_-v)*A,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(d+p))*b,i[6]=(m+S)*b,i[7]=0,i[8]=(_+v)*w,i[9]=(m-S)*w,i[10]=(1-(d+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ns.set(i[0],i[1],i[2]).length(),o=Ns.set(i[4],i[5],i[6]).length(),a=Ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],kn.copy(this);let l=1/r,h=1/o,u=1/a;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,e.setFromRotationMatrix(kn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=fi){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,_;if(a===fi)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Vo)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=fi){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h,_,g;if(a===fi)_=(o+r)*u,g=-2*u;else if(a===Vo)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ns=new U,kn=new ue,cm=new U(0,0,0),lm=new U(1,1,1),Ci=new U,xo=new U,yn=new U,uu=new ue,du=new Gn,Cn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return du.setFromEuler(this),this.setFromQuaternion(du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var qo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hm=0,fu=new U,Fs=new Gn,ci=new ue,yo=new U,Pr=new U,um=new U,dm=new Gn,pu=new U(1,0,0),mu=new U(0,1,0),gu=new U(0,0,1),_u={type:"added"},fm={type:"removed"},Bs={type:"childadded",child:null},ka={type:"childremoved",child:null},ae=class s extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new U,e=new Cn,n=new Gn,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new ie}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(pu,t)}rotateY(t){return this.rotateOnAxis(mu,t)}rotateZ(t){return this.rotateOnAxis(gu,t)}translateOnAxis(t,e){return fu.copy(t).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pu,t)}translateY(t){return this.translateOnAxis(mu,t)}translateZ(t){return this.translateOnAxis(gu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yo.copy(t):yo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Pr,yo,this.up):ci.lookAt(yo,Pr,this.up),this.quaternion.setFromRotationMatrix(ci),i&&(ci.extractRotation(i.matrixWorld),Fs.setFromRotationMatrix(ci),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_u),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fm),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_u),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,um),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,dm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ae.DEFAULT_UP=new U(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new U,li=new U,Ha=new U,hi=new U,zs=new U,ks=new U,xu=new U,Va=new U,Ga=new U,Wa=new U,Xa=new _e,qa=new _e,Ya=new _e,rs=class s{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Hn.subVectors(t,e),i.cross(Hn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Hn.subVectors(i,e),li.subVectors(n,e),Ha.subVectors(t,e);let o=Hn.dot(Hn),a=Hn.dot(li),c=Hn.dot(Ha),l=li.dot(li),h=li.dot(Ha),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hi.x),c.addScaledVector(o,hi.y),c.addScaledVector(a,hi.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Xa.setScalar(0),qa.setScalar(0),Ya.setScalar(0),Xa.fromBufferAttribute(t,e),qa.fromBufferAttribute(t,n),Ya.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Xa,r.x),o.addScaledVector(qa,r.y),o.addScaledVector(Ya,r.z),o}static isFrontFacing(t,e,n,i){return Hn.subVectors(n,e),li.subVectors(t,e),Hn.cross(li).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Hn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;zs.subVectors(i,n),ks.subVectors(r,n),Va.subVectors(t,n);let c=zs.dot(Va),l=ks.dot(Va);if(c<=0&&l<=0)return e.copy(n);Ga.subVectors(t,i);let h=zs.dot(Ga),u=ks.dot(Ga);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(zs,o);Wa.subVectors(t,r);let f=zs.dot(Wa),_=ks.dot(Wa);if(_>=0&&f<=_)return e.copy(r);let g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(ks,a);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return xu.subVectors(r,i),a=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(xu,a);let p=1/(m+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(zs,o).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},vo={h:0,s:0,l:0};function Za(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var te=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ce.workingColorSpace){if(t=Hl(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Za(o,r,t+1/3),this.g=Za(o,r,t),this.b=Za(o,r,t-1/3)}return ce.toWorkingColorSpace(this,i),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){let n=md[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return ce.fromWorkingColorSpace(tn.copy(this),t),Math.round(Ye(tn.r*255,0,255))*65536+Math.round(Ye(tn.g*255,0,255))*256+Math.round(Ye(tn.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(tn.copy(this),e);let n=tn.r,i=tn.g,r=tn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=ge){ce.fromWorkingColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,i=tn.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(vo);let n=Br(Pi.h,vo.h,e),i=Br(Pi.s,vo.s,e),r=Br(Pi.l,vo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new te;te.NAMES=md;var pm=0,us=class extends Ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=ur(),this.name="",this.blending=Zs,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=hc,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lc&&(n.blendSrc=this.blendSrc),this.blendDst!==hc&&(n.blendDst=this.blendDst),this.blendEquation!==ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ce=class extends us{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ne=new U,Mo=new jt,Fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=eu,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),i=an(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==eu&&(t.usage=this.usage),t}};var Yo=class extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Zo=class extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},mm=0,Rn=new ue,$a=new ae,Hs=new U,vn=new _i,Ir=new _i,qe=new U,ke=class s extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pd(t)?Zo:Yo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return $a.lookAt(t),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(vn.min,Ir.min),vn.expandByPoint(qe),qe.addVectors(vn.max,Ir.max),vn.expandByPoint(qe)):(vn.expandByPoint(Ir.min),vn.expandByPoint(Ir.max))}vn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)qe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)qe.fromBufferAttribute(a,l),c&&(Hs.fromBufferAttribute(t,l),qe.add(Hs)),i=Math.max(i,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new U,c[C]=new U;let l=new U,h=new U,u=new U,d=new jt,f=new jt,_=new jt,g=new U,m=new U;function p(C,M,x){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,M),_.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),_.sub(d);let D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(D),a[C].add(g),a[M].add(g),a[x].add(g),c[C].add(m),c[M].add(m),c[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,M=S.length;C<M;++C){let x=S[C],D=x.start,V=x.count;for(let z=D,W=D+V;z<W;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let v=new U,y=new U,A=new U,b=new U;function w(C){A.fromBufferAttribute(i,C),b.copy(A);let M=a[C];v.copy(M),v.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(b,M);let D=y.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,D)}for(let C=0,M=S.length;C<M;++C){let x=S[C],D=x.start,V=x.count;for(let z=D,W=D+V;z<W;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){let _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*h;for(let p=0;p<h;p++)d[_++]=l[f++]}return new Fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yu=new ue,ji=new Qc,So=new hs,vu=new U,Eo=new U,bo=new U,To=new U,Ja=new U,wo=new U,Mu=new U,Ao=new U,Lt=class extends ae{constructor(t=new ke,e=new Ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){wo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ja.fromBufferAttribute(u,t),o?wo.addScaledVector(Ja,h):wo.addScaledVector(Ja.sub(e),h))}e.add(wo)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(So.containsPoint(ji.origin)===!1&&(ji.intersectSphere(So,vu)===null||ji.origin.distanceToSquared(vu)>(t.far-t.near)**2))&&(yu.copy(r).invert(),ji.copy(t.ray).applyMatrix4(yu),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,A=v;y<A;y+=3){let b=a.getX(y),w=a.getX(y+1),C=a.getX(y+2);i=Ro(this,p,t,n,l,h,u,b,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let S=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);i=Ro(this,o,t,n,l,h,u,S,v,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,A=v;y<A;y+=3){let b=y,w=y+1,C=y+2;i=Ro(this,p,t,n,l,h,u,b,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let S=m,v=m+1,y=m+2;i=Ro(this,o,t,n,l,h,u,S,v,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function gm(s,t,e,n,i,r,o,a){let c;if(t.side===nn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Oi,a),c===null)return null;Ao.copy(a),Ao.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Ao);return l<e.near||l>e.far?null:{distance:l,point:Ao.clone(),object:s}}function Ro(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Eo),s.getVertexPosition(c,bo),s.getVertexPosition(l,To);let h=gm(s,t,e,n,Eo,bo,To,Mu);if(h){let u=new U;rs.getBarycoord(Mu,Eo,bo,To,u),i&&(h.uv=rs.getInterpolatedAttribute(i,a,c,l,u,new jt)),r&&(h.uv1=rs.getInterpolatedAttribute(r,a,c,l,u,new jt)),o&&(h.normal=rs.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new U,materialIndex:0};rs.getNormal(Eo,bo,To,d.normal),h.face=d,h.barycoord=u}return h}var pe=class s extends ke{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2));function _(g,m,p,S,v,y,A,b,w,C,M){let x=y/w,D=A/C,V=y/2,z=A/2,W=b/2,$=w+1,O=C+1,lt=0,Z=0,ht=new U;for(let rt=0;rt<O;rt++){let xt=rt*D-z;for(let Rt=0;Rt<$;Rt++){let X=Rt*x-V;ht[g]=X*S,ht[m]=xt*v,ht[p]=W,l.push(ht.x,ht.y,ht.z),ht[g]=0,ht[m]=0,ht[p]=b>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(Rt/w),u.push(1-rt/C),lt+=1}}for(let rt=0;rt<C;rt++)for(let xt=0;xt<w;xt++){let Rt=d+xt+$*rt,X=d+xt+$*(rt+1),N=d+(xt+1)+$*(rt+1),k=d+(xt+1)+$*rt;c.push(Rt,X,k),c.push(X,N,k),Z+=6}a.addGroup(f,Z,M),f+=Z,d+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ir(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function cn(s){let t={};for(let e=0;e<s.length;e++){let n=ir(s[e]);for(let i in n)t[i]=n[i]}return t}function _m(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function gd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var xm={clone:ir,merge:cn},ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends us{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ym,this.fragmentShader=vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=_m(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},$o=class extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ii=new U,Su=new jt,Eu=new jt,en=class extends $o{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,Su,Eu),e.subVectors(Eu,Su)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Vs=-90,Gs=1,jc=class extends ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new en(Vs,Gs,t,e);i.layers=this.layers,this.add(i);let r=new en(Vs,Gs,t,e);r.layers=this.layers,this.add(r);let o=new en(Vs,Gs,t,e);o.layers=this.layers,this.add(o);let a=new en(Vs,Gs,t,e);a.layers=this.layers,this.add(a);let c=new en(Vs,Gs,t,e);c.layers=this.layers,this.add(c);let l=new en(Vs,Gs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Jo=class extends dn{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:js,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},tl=class extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Jo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Kn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pe(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Li});r.uniforms.tEquirect.value=e;let o=new Lt(i,r),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=Kn),new jc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Ka=new U,Mm=new U,Sm=new ie,di=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ka.subVectors(n,e).cross(Mm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ka),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sm.getNormalMatrix(t),i=this.coplanarPoint(Ka).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new hs,Co=new U,Wr=class{constructor(t=new di,e=new di,n=new di,i=new di,r=new di,o=new di){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],S=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-r,d-l,m-f,y-p).normalize(),n[1].setComponents(c+r,d+l,m+f,y+p).normalize(),n[2].setComponents(c+o,d+h,m+_,y+S).normalize(),n[3].setComponents(c-o,d-h,m-_,y-S).normalize(),n[4].setComponents(c-a,d-u,m-g,y-v).normalize(),e===fi)n[5].setComponents(c+a,d+u,m+g,y+v).normalize();else if(e===Vo)n[5].setComponents(a,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Co.x=i.normal.x>0?t.max.x:t.min.x,Co.y=i.normal.y>0?t.max.y:t.min.y,Co.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Co)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _d(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Em(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let g=u[f];s.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Te=class s extends ke{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let S=p*d-o;for(let v=0;v<l;v++){let y=v*u-r;_.push(y,-S,0),g.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let v=S+l*p,y=S+l*(p+1),A=S+1+l*(p+1),b=S+1+l*p;f.push(v,y,b),f.push(y,A,b)}this.setIndex(f),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(g,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tm=`#ifdef USE_ALPHAHASH
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
#endif`,wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pm=`#ifdef USE_AOMAP
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
#endif`,Im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
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
#endif`,Lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
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
#endif`,Bm=`#ifdef USE_BUMPMAP
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
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ym=`#define PI 3.141592653589793
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
} // validated`,Zm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$m=`vec3 transformedNormal = objectNormal;
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
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t0="gl_FragColor = linearToOutputTexel( gl_FragColor );",e0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u0=`#ifdef USE_GRADIENTMAP
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
}`,d0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m0=`uniform bool receiveShadow;
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
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,_0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M0=`PhysicalMaterial material;
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
#endif`,S0=`struct PhysicalMaterial {
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
}`,E0=`
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,L0=`#if defined( USE_POINTS_UV )
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
#endif`,U0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`#ifdef USE_MORPHTARGETS
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
#endif`,k0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,V0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q0=`#ifdef USE_NORMALMAP
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
#endif`,Y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,j0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cg=`float getShadowMask() {
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
}`,lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hg=`#ifdef USE_SKINNING
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
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,xg=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bg=`uniform sampler2D t2D;
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`#include <common>
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
}`,Pg=`#if DEPTH_PACKING == 3200
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
}`,Ig=`#define DISTANCE
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
}`,Dg=`#define DISTANCE
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`uniform float scale;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Fg=`#include <common>
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
}`,Bg=`uniform vec3 diffuse;
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
}`,zg=`#define LAMBERT
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
}`,kg=`#define LAMBERT
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
}`,Hg=`#define MATCAP
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
}`,Vg=`#define MATCAP
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
}`,Gg=`#define NORMAL
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
}`,Wg=`#define NORMAL
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
}`,Xg=`#define PHONG
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
}`,qg=`#define PHONG
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
}`,Yg=`#define STANDARD
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
}`,Zg=`#define STANDARD
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
}`,$g=`#define TOON
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
}`,Jg=`#define TOON
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
}`,Kg=`uniform float size;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,jg=`#include <common>
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
}`,t_=`uniform vec3 color;
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
}`,e_=`uniform float rotation;
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
}`,n_=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:bm,alphahash_pars_fragment:Tm,alphamap_fragment:wm,alphamap_pars_fragment:Am,alphatest_fragment:Rm,alphatest_pars_fragment:Cm,aomap_fragment:Pm,aomap_pars_fragment:Im,batching_pars_vertex:Dm,batching_vertex:Lm,begin_vertex:Um,beginnormal_vertex:Om,bsdfs:Nm,iridescence_fragment:Fm,bumpmap_pars_fragment:Bm,clipping_planes_fragment:zm,clipping_planes_pars_fragment:km,clipping_planes_pars_vertex:Hm,clipping_planes_vertex:Vm,color_fragment:Gm,color_pars_fragment:Wm,color_pars_vertex:Xm,color_vertex:qm,common:Ym,cube_uv_reflection_fragment:Zm,defaultnormal_vertex:$m,displacementmap_pars_vertex:Jm,displacementmap_vertex:Km,emissivemap_fragment:Qm,emissivemap_pars_fragment:jm,colorspace_fragment:t0,colorspace_pars_fragment:e0,envmap_fragment:n0,envmap_common_pars_fragment:i0,envmap_pars_fragment:s0,envmap_pars_vertex:r0,envmap_physical_pars_fragment:g0,envmap_vertex:o0,fog_vertex:a0,fog_pars_vertex:c0,fog_fragment:l0,fog_pars_fragment:h0,gradientmap_pars_fragment:u0,lightmap_pars_fragment:d0,lights_lambert_fragment:f0,lights_lambert_pars_fragment:p0,lights_pars_begin:m0,lights_toon_fragment:_0,lights_toon_pars_fragment:x0,lights_phong_fragment:y0,lights_phong_pars_fragment:v0,lights_physical_fragment:M0,lights_physical_pars_fragment:S0,lights_fragment_begin:E0,lights_fragment_maps:b0,lights_fragment_end:T0,logdepthbuf_fragment:w0,logdepthbuf_pars_fragment:A0,logdepthbuf_pars_vertex:R0,logdepthbuf_vertex:C0,map_fragment:P0,map_pars_fragment:I0,map_particle_fragment:D0,map_particle_pars_fragment:L0,metalnessmap_fragment:U0,metalnessmap_pars_fragment:O0,morphinstance_vertex:N0,morphcolor_vertex:F0,morphnormal_vertex:B0,morphtarget_pars_vertex:z0,morphtarget_vertex:k0,normal_fragment_begin:H0,normal_fragment_maps:V0,normal_pars_fragment:G0,normal_pars_vertex:W0,normal_vertex:X0,normalmap_pars_fragment:q0,clearcoat_normal_fragment_begin:Y0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:$0,iridescence_pars_fragment:J0,opaque_fragment:K0,packing:Q0,premultiplied_alpha_fragment:j0,project_vertex:tg,dithering_fragment:eg,dithering_pars_fragment:ng,roughnessmap_fragment:ig,roughnessmap_pars_fragment:sg,shadowmap_pars_fragment:rg,shadowmap_pars_vertex:og,shadowmap_vertex:ag,shadowmask_pars_fragment:cg,skinbase_vertex:lg,skinning_pars_vertex:hg,skinning_vertex:ug,skinnormal_vertex:dg,specularmap_fragment:fg,specularmap_pars_fragment:pg,tonemapping_fragment:mg,tonemapping_pars_fragment:gg,transmission_fragment:_g,transmission_pars_fragment:xg,uv_pars_fragment:yg,uv_pars_vertex:vg,uv_vertex:Mg,worldpos_vertex:Sg,background_vert:Eg,background_frag:bg,backgroundCube_vert:Tg,backgroundCube_frag:wg,cube_vert:Ag,cube_frag:Rg,depth_vert:Cg,depth_frag:Pg,distanceRGBA_vert:Ig,distanceRGBA_frag:Dg,equirect_vert:Lg,equirect_frag:Ug,linedashed_vert:Og,linedashed_frag:Ng,meshbasic_vert:Fg,meshbasic_frag:Bg,meshlambert_vert:zg,meshlambert_frag:kg,meshmatcap_vert:Hg,meshmatcap_frag:Vg,meshnormal_vert:Gg,meshnormal_frag:Wg,meshphong_vert:Xg,meshphong_frag:qg,meshphysical_vert:Yg,meshphysical_frag:Zg,meshtoon_vert:$g,meshtoon_frag:Jg,points_vert:Kg,points_frag:Qg,shadow_vert:jg,shadow_frag:t_,sprite_vert:e_,sprite_frag:n_},Vt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Jn={basic:{uniforms:cn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:cn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new te(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:cn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:cn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:cn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new te(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:cn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:cn([Vt.points,Vt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:cn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:cn([Vt.common,Vt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:cn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:cn([Vt.sprite,Vt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:cn([Vt.common,Vt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:cn([Vt.lights,Vt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Jn.physical={uniforms:cn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var Po={r:0,b:0,g:0},es=new Cn,i_=new ue;function s_(s,t,e,n,i,r,o){let a=new te(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function _(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function g(S){let v=!1,y=_(S);y===null?p(a,c):y&&y.isColor&&(p(y,1),v=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,v){let y=_(v);y&&(y.isCubeTexture||y.mapping===ia)?(h===void 0&&(h=new Lt(new pe(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:ir(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),es.copy(v.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(i_.makeRotationFromEuler(es)),h.material.toneMapped=ce.getTransfer(y.colorSpace)!==me,(u!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Lt(new Te(2,2),new jn({name:"BackgroundMaterial",uniforms:ir(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ce.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,v){S.getRGB(Po,gd(s)),n.buffers.color.setClear(Po.r,Po.g,Po.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:g,addToRenderList:m}}function r_(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(x,D,V,z,W){let $=!1,O=u(z,V,D);r!==O&&(r=O,l(r.object)),$=f(x,z,V,W),$&&_(x,z,V,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(x,D,V,z),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return s.createVertexArray()}function l(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,D,V){let z=V.wireframe===!0,W=n[x.id];W===void 0&&(W={},n[x.id]=W);let $=W[D.id];$===void 0&&($={},W[D.id]=$);let O=$[z];return O===void 0&&(O=d(c()),$[z]=O),O}function d(x){let D=[],V=[],z=[];for(let W=0;W<e;W++)D[W]=0,V[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:z,object:x,attributes:{},index:null}}function f(x,D,V,z){let W=r.attributes,$=D.attributes,O=0,lt=V.getAttributes();for(let Z in lt)if(lt[Z].location>=0){let rt=W[Z],xt=$[Z];if(xt===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(xt=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(xt=x.instanceColor)),rt===void 0||rt.attribute!==xt||xt&&rt.data!==xt.data)return!0;O++}return r.attributesNum!==O||r.index!==z}function _(x,D,V,z){let W={},$=D.attributes,O=0,lt=V.getAttributes();for(let Z in lt)if(lt[Z].location>=0){let rt=$[Z];rt===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor));let xt={};xt.attribute=rt,rt&&rt.data&&(xt.data=rt.data),W[Z]=xt,O++}r.attributes=W,r.attributesNum=O,r.index=z}function g(){let x=r.newAttributes;for(let D=0,V=x.length;D<V;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){let V=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;V[x]=1,z[x]===0&&(s.enableVertexAttribArray(x),z[x]=1),W[x]!==D&&(s.vertexAttribDivisor(x,D),W[x]=D)}function S(){let x=r.newAttributes,D=r.enabledAttributes;for(let V=0,z=D.length;V<z;V++)D[V]!==x[V]&&(s.disableVertexAttribArray(V),D[V]=0)}function v(x,D,V,z,W,$,O){O===!0?s.vertexAttribIPointer(x,D,V,W,$):s.vertexAttribPointer(x,D,V,z,W,$)}function y(x,D,V,z){g();let W=z.attributes,$=V.getAttributes(),O=D.defaultAttributeValues;for(let lt in $){let Z=$[lt];if(Z.location>=0){let ht=W[lt];if(ht===void 0&&(lt==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),lt==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor)),ht!==void 0){let rt=ht.normalized,xt=ht.itemSize,Rt=t.get(ht);if(Rt===void 0)continue;let X=Rt.buffer,N=Rt.type,k=Rt.bytesPerElement,J=N===s.INT||N===s.UNSIGNED_INT||ht.gpuType===Ul;if(ht.isInterleavedBufferAttribute){let F=ht.data,at=F.stride,gt=ht.offset;if(F.isInstancedInterleavedBuffer){for(let Ct=0;Ct<Z.locationSize;Ct++)p(Z.location+Ct,F.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let Ct=0;Ct<Z.locationSize;Ct++)m(Z.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,X);for(let Ct=0;Ct<Z.locationSize;Ct++)v(Z.location+Ct,xt/Z.locationSize,N,rt,at*k,(gt+xt/Z.locationSize*Ct)*k,J)}else{if(ht.isInstancedBufferAttribute){for(let F=0;F<Z.locationSize;F++)p(Z.location+F,ht.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let F=0;F<Z.locationSize;F++)m(Z.location+F);s.bindBuffer(s.ARRAY_BUFFER,X);for(let F=0;F<Z.locationSize;F++)v(Z.location+F,xt/Z.locationSize,N,rt,xt*k,xt/Z.locationSize*F*k,J)}}else if(O!==void 0){let rt=O[lt];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(Z.location,rt);break;case 3:s.vertexAttrib3fv(Z.location,rt);break;case 4:s.vertexAttrib4fv(Z.location,rt);break;default:s.vertexAttrib1fv(Z.location,rt)}}}}S()}function A(){C();for(let x in n){let D=n[x];for(let V in D){let z=D[V];for(let W in z)h(z[W].object),delete z[W];delete D[V]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;let D=n[x.id];for(let V in D){let z=D[V];for(let W in z)h(z[W].object),delete z[W];delete D[V]}delete n[x.id]}function w(x){for(let D in n){let V=n[D];if(V[x.id]===void 0)continue;let z=V[x.id];for(let W in z)h(z[W].object),delete z[W];delete V[x.id]}}function C(){M(),o=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function o_(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function a_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Vn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let C=w===Yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==mi&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Qn&&!C)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:A,maxSamples:b}}function c_(s){let t=this,e=null,n=0,i=!1,r=!1,o=new di,a=new ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,v=S*4,y=p.clippingState||null;c.value=y,y=h(_,d,v,f);for(let A=0;A!==v;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=c.value,_!==!0||m===null){let p=f+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==g;++v,y+=4)o.copy(u[v]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function l_(s){let t=new WeakMap;function e(o,a){return a===xc?o.mapping=js:a===yc&&(o.mapping=tr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===xc||a===yc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new tl(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var sr=class extends $o{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ys=4,bu=[.125,.215,.35,.446,.526,.582],os=20,Qa=new sr,Tu=new te,ja=null,tc=0,ec=0,nc=!1,is=(1+Math.sqrt(5))/2,Ws=1/is,wu=[new U(-is,Ws,0),new U(is,Ws,0),new U(-Ws,0,is),new U(Ws,0,is),new U(0,is,-Ws),new U(0,is,Ws),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],rr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ja=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ja,tc,ec),this._renderer.xr.enabled=nc,t.scissorTest=!1,Io(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===js||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ja=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Yr,format:Vn,colorSpace:hr,depthBuffer:!1},i=Au(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h_(r)),this._blurMaterial=u_(r,t,e)}return i}_compileMaterial(t){let e=new Lt(this._lodPlanes[0],t);this._renderer.compile(e,Qa)}_sceneToCubeUV(t,e,n,i){let a=new en(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Tu),h.toneMapping=Ui,h.autoClear=!1;let f=new Ce({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new Lt(new pe,f),g=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(Tu),g=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;Io(i,S*v,p>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===js||t.mapping===tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Io(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Qa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wu[(i-r-1)%wu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Lt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*os-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):os;m>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);let p=[],S=0;for(let w=0;w<os;++w){let C=w/g,M=Math.exp(-C*C/2);p.push(M),w===0?S+=M:w<m&&(S+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;let y=this._sizeLods[i],A=3*y*(i>v-Ys?i-v+Ys:0),b=4*(this._cubeSize-y);Io(e,A,b,3*y,2*y),c.setRenderTarget(e),c.render(u,Qa)}};function h_(s){let t=[],e=[],n=[],i=s,r=s-Ys+1+bu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Ys?c=bu[o-s+Ys-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*f),v=new Float32Array(m*_*f),y=new Float32Array(p*_*f);for(let b=0;b<f;b++){let w=b%3*2/3-1,C=b>2?0:-1,M=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];S.set(M,g*_*b),v.set(d,m*_*b);let x=[b,b,b,b,b,b];y.set(x,p*_*b)}let A=new ke;A.setAttribute("position",new Fe(S,g)),A.setAttribute("uv",new Fe(v,m)),A.setAttribute("faceIndex",new Fe(y,p)),t.push(A),i>Ys&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Au(s,t,e){let n=new gi(s,t,e);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Io(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function u_(s,t,e){let n=new Float32Array(os),i=new U(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Ru(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Cu(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Vl(){return`

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
	`}function d_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===xc||c===yc,h=c===js||c===tr;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new rr(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new rr(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function f_(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Or("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function p_(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);for(let _ in d.morphAttributes){let g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let _ in d)t.update(d[_],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let _ in f){let g=f[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let S=f.array;g=f.version;for(let v=0,y=S.length;v<y;v+=3){let A=S[v+0],b=S[v+1],w=S[v+2];d.push(A,b,b,w,w,A)}}else if(_!==void 0){let S=_.array;g=_.version;for(let v=0,y=S.length/3-1;v<y;v+=3){let A=v+0,b=v+1,w=v+2;d.push(A,b,b,w,w,A)}}else return;let m=new(pd(d)?Zo:Yo)(d,1);m.version=g;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function m_(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,d*o,_),e.update(f,n,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function u(d,f,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let p=0;for(let S=0;S<_;S++)p+=f[S]*g[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function g_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function __(s,t,e){let n=new WeakMap,i=new _e;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let M=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],v=0;f===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let y=a.attributes.position.count*v,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*A*4*u),w=new Xo(b,y,A,u);w.type=Qn,w.needsUpdate=!0;let C=v*4;for(let x=0;x<u;x++){let D=m[x],V=p[x],z=S[x],W=y*A*4*x;for(let $=0;$<D.count;$++){let O=$*C;f===!0&&(i.fromBufferAttribute(D,$),b[W+O+0]=i.x,b[W+O+1]=i.y,b[W+O+2]=i.z,b[W+O+3]=0),_===!0&&(i.fromBufferAttribute(V,$),b[W+O+4]=i.x,b[W+O+5]=i.y,b[W+O+6]=i.z,b[W+O+7]=0),g===!0&&(i.fromBufferAttribute(z,$),b[W+O+8]=i.x,b[W+O+9]=i.y,b[W+O+10]=i.z,b[W+O+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new jt(y,A)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];let _=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function x_(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Ko=class extends dn{constructor(t,e,n,i,r,o,a,c,l,h=$s){if(h!==$s&&h!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$s&&(n=ls),n===void 0&&h===nr&&(n=er),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Sn,this.minFilter=c!==void 0?c:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xd=new dn,Pu=new Ko(1,1),yd=new Xo,vd=new Kc,Md=new Jo,Iu=[],Du=[],Lu=new Float32Array(16),Uu=new Float32Array(9),Ou=new Float32Array(4);function dr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Iu[i];if(r===void 0&&(r=new Float32Array(i),Iu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function He(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ra(s,t){let e=Du[t];e===void 0&&(e=new Int32Array(t),Du[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function y_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function v_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2fv(this.addr,t),Ve(e,t)}}function M_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;s.uniform3fv(this.addr,t),Ve(e,t)}}function S_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4fv(this.addr,t),Ve(e,t)}}function E_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Ou.set(n),s.uniformMatrix2fv(this.addr,!1,Ou),Ve(e,n)}}function b_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Uu.set(n),s.uniformMatrix3fv(this.addr,!1,Uu),Ve(e,n)}}function T_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Lu.set(n),s.uniformMatrix4fv(this.addr,!1,Lu),Ve(e,n)}}function w_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function A_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2iv(this.addr,t),Ve(e,t)}}function R_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;s.uniform3iv(this.addr,t),Ve(e,t)}}function C_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4iv(this.addr,t),Ve(e,t)}}function P_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function I_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2uiv(this.addr,t),Ve(e,t)}}function D_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;s.uniform3uiv(this.addr,t),Ve(e,t)}}function L_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4uiv(this.addr,t),Ve(e,t)}}function U_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Pu.compareFunction=fd,r=Pu):r=xd,e.setTexture2D(t||r,i)}function O_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vd,i)}function N_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Md,i)}function F_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||yd,i)}function B_(s){switch(s){case 5126:return y_;case 35664:return v_;case 35665:return M_;case 35666:return S_;case 35674:return E_;case 35675:return b_;case 35676:return T_;case 5124:case 35670:return w_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return P_;case 36294:return I_;case 36295:return D_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return F_}}function z_(s,t){s.uniform1fv(this.addr,t)}function k_(s,t){let e=dr(t,this.size,2);s.uniform2fv(this.addr,e)}function H_(s,t){let e=dr(t,this.size,3);s.uniform3fv(this.addr,e)}function V_(s,t){let e=dr(t,this.size,4);s.uniform4fv(this.addr,e)}function G_(s,t){let e=dr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function W_(s,t){let e=dr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function X_(s,t){let e=dr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function q_(s,t){s.uniform1iv(this.addr,t)}function Y_(s,t){s.uniform2iv(this.addr,t)}function Z_(s,t){s.uniform3iv(this.addr,t)}function $_(s,t){s.uniform4iv(this.addr,t)}function J_(s,t){s.uniform1uiv(this.addr,t)}function K_(s,t){s.uniform2uiv(this.addr,t)}function Q_(s,t){s.uniform3uiv(this.addr,t)}function j_(s,t){s.uniform4uiv(this.addr,t)}function tx(s,t,e){let n=this.cache,i=t.length,r=ra(e,i);He(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||xd,r[o])}function ex(s,t,e){let n=this.cache,i=t.length,r=ra(e,i);He(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||vd,r[o])}function nx(s,t,e){let n=this.cache,i=t.length,r=ra(e,i);He(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Md,r[o])}function ix(s,t,e){let n=this.cache,i=t.length,r=ra(e,i);He(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||yd,r[o])}function sx(s){switch(s){case 5126:return z_;case 35664:return k_;case 35665:return H_;case 35666:return V_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return Z_;case 35669:case 35673:return $_;case 5125:return J_;case 36294:return K_;case 36295:return Q_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}var el=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=B_(e.type)}},nl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sx(e.type)}},il=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},ic=/(\w+)(\])?(\[|\.)?/g;function Nu(s,t){s.seq.push(t),s.map[t.id]=t}function rx(s,t,e){let n=s.name,i=n.length;for(ic.lastIndex=0;;){let r=ic.exec(n),o=ic.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Nu(e,l===void 0?new el(a,s,t):new nl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new il(a),Nu(e,u)),e=u}}}var Ks=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);rx(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Fu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var ox=37297,ax=0;function cx(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Bu=new ie;function lx(s){ce._getMatrix(Bu,ce.workingColorSpace,s);let t=`mat3( ${Bu.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(s)){case sa:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function zu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+cx(s.getShaderSource(t),o)}else return i}function hx(s,t){let e=lx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ux(s,t){let e;switch(t){case Sp:e="Linear";break;case Ep:e="Reinhard";break;case bp:e="Cineon";break;case qr:e="ACESFilmic";break;case wp:e="AgX";break;case Ap:e="Neutral";break;case Tp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Do=new U;function dx(){ce.getLuminanceCoefficients(Do);let s=Do.x.toFixed(4),t=Do.y.toFixed(4),e=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function px(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mx(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Nr(s){return s!==""}function ku(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(s){return s.replace(gx,xx)}var _x=new Map;function xx(s,t){let e=re[t];if(e===void 0){let n=_x.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sl(e)}var yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(s){return s.replace(yx,vx)}function vx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Mx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===td?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ep?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function Sx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case js:case tr:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ex(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case tr:t="ENVMAP_MODE_REFRACTION";break}return t}function bx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ed:t="ENVMAP_BLENDING_MULTIPLY";break;case vp:t="ENVMAP_BLENDING_MIX";break;case Mp:t="ENVMAP_BLENDING_ADD";break}return t}function Tx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wx(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Mx(e),l=Sx(e),h=Ex(e),u=bx(e),d=Tx(e),f=fx(e),_=px(r),g=i.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Nr).join(`
`),p.length>0&&(p+=`
`)):(m=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),p=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?re.tonemapping_pars_fragment:"",e.toneMapping!==Ui?ux("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,hx("linearToOutputTexel",e.outputColorSpace),dx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nr).join(`
`)),o=sl(o),o=ku(o,e),o=Hu(o,e),a=sl(a),a=ku(a,e),a=Hu(a,e),o=Vu(o),a=Vu(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=S+m+o,y=S+p+a,A=Fu(i,i.VERTEX_SHADER,v),b=Fu(i,i.FRAGMENT_SHADER,y);i.attachShader(g,A),i.attachShader(g,b),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(D){if(s.debug.checkShaderErrors){let V=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(A).trim(),W=i.getShaderInfoLog(b).trim(),$=!0,O=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,A,b);else{let lt=zu(i,A,"vertex"),Z=zu(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+lt+`
`+Z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||W==="")&&(O=!1);O&&(D.diagnostics={runnable:$,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(A),i.deleteShader(b),C=new Ks(i,g),M=mx(i,g)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,ox)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ax++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=b,this}var Ax=0,rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ol(t),e.set(t,n)),n}},ol=class{constructor(t){this.id=Ax++,this.code=t,this.usedTimes=0}};function Rx(s,t,e,n,i,r,o){let a=new qo,c=new rl,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,D,V,z){let W=V.fog,$=z.geometry,O=M.isMeshStandardMaterial?V.environment:null,lt=(M.isMeshStandardMaterial?e:t).get(M.envMap||O),Z=lt&&lt.mapping===ia?lt.image.height:null,ht=_[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let rt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,xt=rt!==void 0?rt.length:0,Rt=0;$.morphAttributes.position!==void 0&&(Rt=1),$.morphAttributes.normal!==void 0&&(Rt=2),$.morphAttributes.color!==void 0&&(Rt=3);let X,N,k,J;if(ht){let j=Jn[ht];X=j.vertexShader,N=j.fragmentShader}else X=M.vertexShader,N=M.fragmentShader,c.update(M),k=c.getVertexShaderID(M),J=c.getFragmentShaderID(M);let F=s.getRenderTarget(),at=s.state.buffers.depth.getReversed(),gt=z.isInstancedMesh===!0,Ct=z.isBatchedMesh===!0,It=!!M.map,St=!!M.matcap,Ot=!!lt,q=!!M.aoMap,Qt=!!M.lightMap,Wt=!!M.bumpMap,kt=!!M.normalMap,Dt=!!M.displacementMap,qt=!!M.emissiveMap,Ut=!!M.metalnessMap,L=!!M.roughnessMap,T=M.anisotropy>0,et=M.clearcoat>0,vt=M.dispersion>0,wt=M.iridescence>0,pt=M.sheen>0,ft=M.transmission>0,Mt=T&&!!M.anisotropyMap,bt=et&&!!M.clearcoatMap,zt=et&&!!M.clearcoatNormalMap,ct=et&&!!M.clearcoatRoughnessMap,_t=wt&&!!M.iridescenceMap,Nt=wt&&!!M.iridescenceThicknessMap,mt=pt&&!!M.sheenColorMap,yt=pt&&!!M.sheenRoughnessMap,Ft=!!M.specularMap,ot=!!M.specularColorMap,G=!!M.specularIntensityMap,R=ft&&!!M.transmissionMap,st=ft&&!!M.thicknessMap,B=!!M.gradientMap,Q=!!M.alphaMap,I=M.alphaTest>0,E=!!M.alphaHash,Y=!!M.extensions,it=Ui;M.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(it=s.toneMapping);let H={shaderID:ht,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:N,defines:M.defines,customVertexShaderID:k,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&z._colorsTexture!==null,instancing:gt,instancingColor:gt&&z.instanceColor!==null,instancingMorph:gt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:F===null?s.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:hr,alphaToCoverage:!!M.alphaToCoverage,map:It,matcap:St,envMap:Ot,envMapMode:Ot&&lt.mapping,envMapCubeUVHeight:Z,aoMap:q,lightMap:Qt,bumpMap:Wt,normalMap:kt,displacementMap:d&&Dt,emissiveMap:qt,normalMapObjectSpace:kt&&M.normalMapType===Ip,normalMapTangentSpace:kt&&M.normalMapType===dd,metalnessMap:Ut,roughnessMap:L,anisotropy:T,anisotropyMap:Mt,clearcoat:et,clearcoatMap:bt,clearcoatNormalMap:zt,clearcoatRoughnessMap:ct,dispersion:vt,iridescence:wt,iridescenceMap:_t,iridescenceThicknessMap:Nt,sheen:pt,sheenColorMap:mt,sheenRoughnessMap:yt,specularMap:Ft,specularColorMap:ot,specularIntensityMap:G,transmission:ft,transmissionMap:R,thicknessMap:st,gradientMap:B,opaque:M.transparent===!1&&M.blending===Zs&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:I,alphaHash:E,combine:M.combine,mapUv:It&&g(M.map.channel),aoMapUv:q&&g(M.aoMap.channel),lightMapUv:Qt&&g(M.lightMap.channel),bumpMapUv:Wt&&g(M.bumpMap.channel),normalMapUv:kt&&g(M.normalMap.channel),displacementMapUv:Dt&&g(M.displacementMap.channel),emissiveMapUv:qt&&g(M.emissiveMap.channel),metalnessMapUv:Ut&&g(M.metalnessMap.channel),roughnessMapUv:L&&g(M.roughnessMap.channel),anisotropyMapUv:Mt&&g(M.anisotropyMap.channel),clearcoatMapUv:bt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:zt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(M.sheenRoughnessMap.channel),specularMapUv:Ft&&g(M.specularMap.channel),specularColorMapUv:ot&&g(M.specularColorMap.channel),specularIntensityMapUv:G&&g(M.specularIntensityMap.channel),transmissionMapUv:R&&g(M.transmissionMap.channel),thicknessMapUv:st&&g(M.thicknessMap.channel),alphaMapUv:Q&&g(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(kt||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(It||Q),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:at,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Rt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:It&&M.map.isVideoTexture===!0&&ce.getTransfer(M.map.colorSpace)===me,decodeVideoTextureEmissive:qt&&M.emissiveMap.isVideoTexture===!0&&ce.getTransfer(M.emissiveMap.colorSpace)===me,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Mn,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Y&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Y&&M.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return H.vertexUv1s=l.has(1),H.vertexUv2s=l.has(2),H.vertexUv3s=l.has(3),l.clear(),H}function p(M){let x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)x.push(D),x.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(S(x,M),v(x,M),x.push(s.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function S(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function v(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){let x=_[M.type],D;if(x){let V=Jn[x];D=xm.clone(V.uniforms)}else D=M.uniforms;return D}function A(M,x){let D;for(let V=0,z=h.length;V<z;V++){let W=h[V];if(W.cacheKey===x){D=W,++D.usedTimes;break}}return D===void 0&&(D=new wx(s,x,M,r),h.push(D)),D}function b(M){if(--M.usedTimes===0){let x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function w(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:C}}function Cx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Px(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Wu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Xu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,_,g,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function a(u,d,f,_,g,m){let p=o(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,_,g,m){let p=o(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Px),n.length>1&&n.sort(d||Wu),i.length>1&&i.sort(d||Wu)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Ix(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Xu,s.set(n,[o])):i>=r.length?(o=new Xu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Dx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new te};break;case"SpotLight":e={position:new U,direction:new U,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function Lx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Ux=0;function Ox(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Nx(s){let t=new Dx,e=Lx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let i=new U,r=new ue,o=new ue;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,S=0,v=0,y=0,A=0,b=0,w=0;l.sort(Ox);for(let M=0,x=l.length;M<x;M++){let D=l[M],V=D.color,z=D.intensity,W=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=V.r*z,u+=V.g*z,d+=V.b*z;else if(D.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(D.sh.coefficients[O],z);w++}else if(D.isDirectionalLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let lt=D.shadow,Z=e.get(D);Z.shadowIntensity=lt.intensity,Z.shadowBias=lt.bias,Z.shadowNormalBias=lt.normalBias,Z.shadowRadius=lt.radius,Z.shadowMapSize=lt.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=D.shadow.matrix,S++}n.directional[f]=O,f++}else if(D.isSpotLight){let O=t.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(V).multiplyScalar(z),O.distance=W,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,n.spot[g]=O;let lt=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,lt.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[g]=lt.matrix,D.castShadow){let Z=e.get(D);Z.shadowIntensity=lt.intensity,Z.shadowBias=lt.bias,Z.shadowNormalBias=lt.normalBias,Z.shadowRadius=lt.radius,Z.shadowMapSize=lt.mapSize,n.spotShadow[g]=Z,n.spotShadowMap[g]=$,y++}g++}else if(D.isRectAreaLight){let O=t.get(D);O.color.copy(V).multiplyScalar(z),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=O,m++}else if(D.isPointLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){let lt=D.shadow,Z=e.get(D);Z.shadowIntensity=lt.intensity,Z.shadowBias=lt.bias,Z.shadowNormalBias=lt.normalBias,Z.shadowRadius=lt.radius,Z.shadowMapSize=lt.mapSize,Z.shadowCameraNear=lt.camera.near,Z.shadowCameraFar=lt.camera.far,n.pointShadow[_]=Z,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=D.shadow.matrix,v++}n.point[_]=O,_++}else if(D.isHemisphereLight){let O=t.get(D);O.skyColor.copy(D.color).multiplyScalar(z),O.groundColor.copy(D.groundColor).multiplyScalar(z),n.hemi[p]=O,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Vt.LTC_FLOAT_1,n.rectAreaLTC2=Vt.LTC_FLOAT_2):(n.rectAreaLTC1=Vt.LTC_HALF_1,n.rectAreaLTC2=Vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==v||C.numSpotShadows!==y||C.numSpotMaps!==A||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,C.directionalLength=f,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=v,C.numSpotShadows=y,C.numSpotMaps=A,C.numLightProbes=w,n.version=Ux++)}function c(l,h){let u=0,d=0,f=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let v=l[p];if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(v.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function qu(s){let t=new Nx(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Fx(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new qu(s),t.set(i,[a])):r>=o.length?(a=new qu(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var al=class extends us{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cl=class extends us{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zx=`uniform sampler2D shadow_pass;
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
}`;function kx(s,t,e){let n=new Wr,i=new jt,r=new jt,o=new _e,a=new al({depthPacking:Pp}),c=new cl,l={},h=e.maxTextureSize,u={[Oi]:nn,[nn]:Oi,[Mn]:Mn},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:Bx,fragmentShader:zx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new ke;_.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Lt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=td;let p=this.type;this.render=function(b,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let M=s.getRenderTarget(),x=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),V=s.state;V.setBlending(Li),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let z=p!==ui&&this.type===ui,W=p===ui&&this.type!==ui;for(let $=0,O=b.length;$<O;$++){let lt=b[$],Z=lt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);let ht=Z.getFrameExtents();if(i.multiply(ht),r.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ht.x),i.x=r.x*ht.x,Z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ht.y),i.y=r.y*ht.y,Z.mapSize.y=r.y)),Z.map===null||z===!0||W===!0){let xt=this.type!==ui?{minFilter:Sn,magFilter:Sn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new gi(i.x,i.y,xt),Z.map.texture.name=lt.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();let rt=Z.getViewportCount();for(let xt=0;xt<rt;xt++){let Rt=Z.getViewport(xt);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),V.viewport(o),Z.updateMatrices(lt,xt),n=Z.getFrustum(),y(w,C,Z.camera,lt,this.type)}Z.isPointLightShadow!==!0&&this.type===ui&&S(Z,C),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,x,D)};function S(b,w){let C=t.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new gi(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,C,d,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,C,f,g,null)}function v(b,w,C,M){let x=null,D=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)x=D;else if(x=C.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let V=x.uuid,z=w.uuid,W=l[V];W===void 0&&(W={},l[V]=W);let $=W[z];$===void 0&&($=x.clone(),W[z]=$,w.addEventListener("dispose",A)),x=$}if(x.visible=w.visible,x.wireframe=w.wireframe,M===ui?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:u[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let V=s.properties.get(x);V.light=C}return x}function y(b,w,C,M,x){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===ui)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);let z=t.update(b),W=b.material;if(Array.isArray(W)){let $=z.groups;for(let O=0,lt=$.length;O<lt;O++){let Z=$[O],ht=W[Z.materialIndex];if(ht&&ht.visible){let rt=v(b,ht,M,x);b.onBeforeShadow(s,b,w,C,z,rt,Z),s.renderBufferDirect(C,null,z,rt,b,Z),b.onAfterShadow(s,b,w,C,z,rt,Z)}}}else if(W.visible){let $=v(b,W,M,x);b.onBeforeShadow(s,b,w,C,z,$,null),s.renderBufferDirect(C,null,z,$,b,null),b.onAfterShadow(s,b,w,C,z,$,null)}}let V=b.children;for(let z=0,W=V.length;z<W;z++)y(V[z],w,C,M,x)}function A(b){b.target.removeEventListener("dispose",A);for(let C in l){let M=l[C],x=b.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}var Hx={[uc]:dc,[fc]:gc,[pc]:_c,[Qs]:mc,[dc]:uc,[gc]:fc,[_c]:pc,[mc]:Qs};function Vx(s,t){function e(){let R=!1,st=new _e,B=null,Q=new _e(0,0,0,0);return{setMask:function(I){B!==I&&!R&&(s.colorMask(I,I,I,I),B=I)},setLocked:function(I){R=I},setClear:function(I,E,Y,it,H){H===!0&&(I*=it,E*=it,Y*=it),st.set(I,E,Y,it),Q.equals(st)===!1&&(s.clearColor(I,E,Y,it),Q.copy(st))},reset:function(){R=!1,B=null,Q.set(-1,0,0,0)}}}function n(){let R=!1,st=!1,B=null,Q=null,I=null;return{setReversed:function(E){if(st!==E){let Y=t.get("EXT_clip_control");st?Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.ZERO_TO_ONE_EXT):Y.clipControlEXT(Y.LOWER_LEFT_EXT,Y.NEGATIVE_ONE_TO_ONE_EXT);let it=I;I=null,this.setClear(it)}st=E},getReversed:function(){return st},setTest:function(E){E?F(s.DEPTH_TEST):at(s.DEPTH_TEST)},setMask:function(E){B!==E&&!R&&(s.depthMask(E),B=E)},setFunc:function(E){if(st&&(E=Hx[E]),Q!==E){switch(E){case uc:s.depthFunc(s.NEVER);break;case dc:s.depthFunc(s.ALWAYS);break;case fc:s.depthFunc(s.LESS);break;case Qs:s.depthFunc(s.LEQUAL);break;case pc:s.depthFunc(s.EQUAL);break;case mc:s.depthFunc(s.GEQUAL);break;case gc:s.depthFunc(s.GREATER);break;case _c:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=E}},setLocked:function(E){R=E},setClear:function(E){I!==E&&(st&&(E=1-E),s.clearDepth(E),I=E)},reset:function(){R=!1,B=null,Q=null,I=null,st=!1}}}function i(){let R=!1,st=null,B=null,Q=null,I=null,E=null,Y=null,it=null,H=null;return{setTest:function(j){R||(j?F(s.STENCIL_TEST):at(s.STENCIL_TEST))},setMask:function(j){st!==j&&!R&&(s.stencilMask(j),st=j)},setFunc:function(j,Tt,Pt){(B!==j||Q!==Tt||I!==Pt)&&(s.stencilFunc(j,Tt,Pt),B=j,Q=Tt,I=Pt)},setOp:function(j,Tt,Pt){(E!==j||Y!==Tt||it!==Pt)&&(s.stencilOp(j,Tt,Pt),E=j,Y=Tt,it=Pt)},setLocked:function(j){R=j},setClear:function(j){H!==j&&(s.clearStencil(j),H=j)},reset:function(){R=!1,st=null,B=null,Q=null,I=null,E=null,Y=null,it=null,H=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,S=null,v=null,y=null,A=null,b=null,w=new te(0,0,0),C=0,M=!1,x=null,D=null,V=null,z=null,W=null,$=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,lt=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),O=lt>=1):Z.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),O=lt>=2);let ht=null,rt={},xt=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),X=new _e().fromArray(xt),N=new _e().fromArray(Rt);function k(R,st,B,Q){let I=new Uint8Array(4),E=s.createTexture();s.bindTexture(R,E),s.texParameteri(R,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(R,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Y=0;Y<B;Y++)R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,I):s.texImage2D(st+Y,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,I);return E}let J={};J[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(s.DEPTH_TEST),o.setFunc(Qs),Wt(!1),kt(Yh),F(s.CULL_FACE),q(Li);function F(R){h[R]!==!0&&(s.enable(R),h[R]=!0)}function at(R){h[R]!==!1&&(s.disable(R),h[R]=!1)}function gt(R,st){return u[R]!==st?(s.bindFramebuffer(R,st),u[R]=st,R===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=st),R===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=st),!0):!1}function Ct(R,st){let B=f,Q=!1;if(R){B=d.get(st),B===void 0&&(B=[],d.set(st,B));let I=R.textures;if(B.length!==I.length||B[0]!==s.COLOR_ATTACHMENT0){for(let E=0,Y=I.length;E<Y;E++)B[E]=s.COLOR_ATTACHMENT0+E;B.length=I.length,Q=!0}}else B[0]!==s.BACK&&(B[0]=s.BACK,Q=!0);Q&&s.drawBuffers(B)}function It(R){return _!==R?(s.useProgram(R),_=R,!0):!1}let St={[ss]:s.FUNC_ADD,[ip]:s.FUNC_SUBTRACT,[sp]:s.FUNC_REVERSE_SUBTRACT};St[rp]=s.MIN,St[op]=s.MAX;let Ot={[ap]:s.ZERO,[cp]:s.ONE,[lp]:s.SRC_COLOR,[lc]:s.SRC_ALPHA,[mp]:s.SRC_ALPHA_SATURATE,[fp]:s.DST_COLOR,[up]:s.DST_ALPHA,[hp]:s.ONE_MINUS_SRC_COLOR,[hc]:s.ONE_MINUS_SRC_ALPHA,[pp]:s.ONE_MINUS_DST_COLOR,[dp]:s.ONE_MINUS_DST_ALPHA,[gp]:s.CONSTANT_COLOR,[_p]:s.ONE_MINUS_CONSTANT_COLOR,[xp]:s.CONSTANT_ALPHA,[yp]:s.ONE_MINUS_CONSTANT_ALPHA};function q(R,st,B,Q,I,E,Y,it,H,j){if(R===Li){g===!0&&(at(s.BLEND),g=!1);return}if(g===!1&&(F(s.BLEND),g=!0),R!==np){if(R!==m||j!==M){if((p!==ss||y!==ss)&&(s.blendEquation(s.FUNC_ADD),p=ss,y=ss),j)switch(R){case Zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zh:s.blendFunc(s.ONE,s.ONE);break;case $h:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case $h:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}S=null,v=null,A=null,b=null,w.set(0,0,0),C=0,m=R,M=j}return}I=I||st,E=E||B,Y=Y||Q,(st!==p||I!==y)&&(s.blendEquationSeparate(St[st],St[I]),p=st,y=I),(B!==S||Q!==v||E!==A||Y!==b)&&(s.blendFuncSeparate(Ot[B],Ot[Q],Ot[E],Ot[Y]),S=B,v=Q,A=E,b=Y),(it.equals(w)===!1||H!==C)&&(s.blendColor(it.r,it.g,it.b,H),w.copy(it),C=H),m=R,M=!1}function Qt(R,st){R.side===Mn?at(s.CULL_FACE):F(s.CULL_FACE);let B=R.side===nn;st&&(B=!B),Wt(B),R.blending===Zs&&R.transparent===!1?q(Li):q(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);let Q=R.stencilWrite;a.setTest(Q),Q&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),qt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?F(s.SAMPLE_ALPHA_TO_COVERAGE):at(s.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(R){x!==R&&(R?s.frontFace(s.CW):s.frontFace(s.CCW),x=R)}function kt(R){R!==jf?(F(s.CULL_FACE),R!==D&&(R===Yh?s.cullFace(s.BACK):R===tp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):at(s.CULL_FACE),D=R}function Dt(R){R!==V&&(O&&s.lineWidth(R),V=R)}function qt(R,st,B){R?(F(s.POLYGON_OFFSET_FILL),(z!==st||W!==B)&&(s.polygonOffset(st,B),z=st,W=B)):at(s.POLYGON_OFFSET_FILL)}function Ut(R){R?F(s.SCISSOR_TEST):at(s.SCISSOR_TEST)}function L(R){R===void 0&&(R=s.TEXTURE0+$-1),ht!==R&&(s.activeTexture(R),ht=R)}function T(R,st,B){B===void 0&&(ht===null?B=s.TEXTURE0+$-1:B=ht);let Q=rt[B];Q===void 0&&(Q={type:void 0,texture:void 0},rt[B]=Q),(Q.type!==R||Q.texture!==st)&&(ht!==B&&(s.activeTexture(B),ht=B),s.bindTexture(R,st||J[R]),Q.type=R,Q.texture=st)}function et(){let R=rt[ht];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function vt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function wt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pt(){try{s.texSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ft(){try{s.texSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Mt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function zt(){try{s.texStorage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ct(){try{s.texStorage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Nt(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function mt(R){X.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),X.copy(R))}function yt(R){N.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),N.copy(R))}function Ft(R,st){let B=l.get(st);B===void 0&&(B=new WeakMap,l.set(st,B));let Q=B.get(R);Q===void 0&&(Q=s.getUniformBlockIndex(st,R.name),B.set(R,Q))}function ot(R,st){let Q=l.get(st).get(R);c.get(st)!==Q&&(s.uniformBlockBinding(st,Q,R.__bindingPointIndex),c.set(st,Q))}function G(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ht=null,rt={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,S=null,v=null,y=null,A=null,b=null,w=new te(0,0,0),C=0,M=!1,x=null,D=null,V=null,z=null,W=null,X.set(0,0,s.canvas.width,s.canvas.height),N.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:F,disable:at,bindFramebuffer:gt,drawBuffers:Ct,useProgram:It,setBlending:q,setMaterial:Qt,setFlipSided:Wt,setCullFace:kt,setLineWidth:Dt,setPolygonOffset:qt,setScissorTest:Ut,activeTexture:L,bindTexture:T,unbindTexture:et,compressedTexImage2D:vt,compressedTexImage3D:wt,texImage2D:_t,texImage3D:Nt,updateUBOMapping:Ft,uniformBlockBinding:ot,texStorage2D:zt,texStorage3D:ct,texSubImage2D:pt,texSubImage3D:ft,compressedTexSubImage2D:Mt,compressedTexSubImage3D:bt,scissor:mt,viewport:yt,reset:G}}function Yu(s,t,e,n){let i=Gx(n);switch(e){case od:return s*t;case cd:return s*t;case ld:return s*t*2;case Fl:return s*t/i.components*i.byteLength;case Bl:return s*t/i.components*i.byteLength;case hd:return s*t*2/i.components*i.byteLength;case zl:return s*t*2/i.components*i.byteLength;case ad:return s*t*3/i.components*i.byteLength;case Vn:return s*t*4/i.components*i.byteLength;case kl:return s*t*4/i.components*i.byteLength;case No:case Fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Bo:case zo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ec:case Tc:return Math.max(s,16)*Math.max(t,8)/4;case Sc:case bc:return Math.max(s,8)*Math.max(t,8)/2;case wc:case Ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Rc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case zc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case kc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Hc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ko:case Gc:case Wc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ud:case Xc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case qc:case Yc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gx(s){switch(s){case mi:case id:return{byteLength:1,components:1};case Vr:case sd:case Yr:return{byteLength:2,components:1};case Ol:case Nl:return{byteLength:2,components:4};case ls:case Ul:case Qn:return{byteLength:4,components:1};case rd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Wx(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new jt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,T){return f?new OffscreenCanvas(L,T):Go("canvas")}function g(L,T,et){let vt=1,wt=Ut(L);if((wt.width>et||wt.height>et)&&(vt=et/Math.max(wt.width,wt.height)),vt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let pt=Math.floor(vt*wt.width),ft=Math.floor(vt*wt.height);u===void 0&&(u=_(pt,ft));let Mt=T?_(pt,ft):u;return Mt.width=pt,Mt.height=ft,Mt.getContext("2d").drawImage(L,0,0,pt,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+wt.width+"x"+wt.height+") to ("+pt+"x"+ft+")."),Mt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+wt.width+"x"+wt.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){s.generateMipmap(L)}function S(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(L,T,et,vt,wt=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let pt=T;if(T===s.RED&&(et===s.FLOAT&&(pt=s.R32F),et===s.HALF_FLOAT&&(pt=s.R16F),et===s.UNSIGNED_BYTE&&(pt=s.R8)),T===s.RED_INTEGER&&(et===s.UNSIGNED_BYTE&&(pt=s.R8UI),et===s.UNSIGNED_SHORT&&(pt=s.R16UI),et===s.UNSIGNED_INT&&(pt=s.R32UI),et===s.BYTE&&(pt=s.R8I),et===s.SHORT&&(pt=s.R16I),et===s.INT&&(pt=s.R32I)),T===s.RG&&(et===s.FLOAT&&(pt=s.RG32F),et===s.HALF_FLOAT&&(pt=s.RG16F),et===s.UNSIGNED_BYTE&&(pt=s.RG8)),T===s.RG_INTEGER&&(et===s.UNSIGNED_BYTE&&(pt=s.RG8UI),et===s.UNSIGNED_SHORT&&(pt=s.RG16UI),et===s.UNSIGNED_INT&&(pt=s.RG32UI),et===s.BYTE&&(pt=s.RG8I),et===s.SHORT&&(pt=s.RG16I),et===s.INT&&(pt=s.RG32I)),T===s.RGB_INTEGER&&(et===s.UNSIGNED_BYTE&&(pt=s.RGB8UI),et===s.UNSIGNED_SHORT&&(pt=s.RGB16UI),et===s.UNSIGNED_INT&&(pt=s.RGB32UI),et===s.BYTE&&(pt=s.RGB8I),et===s.SHORT&&(pt=s.RGB16I),et===s.INT&&(pt=s.RGB32I)),T===s.RGBA_INTEGER&&(et===s.UNSIGNED_BYTE&&(pt=s.RGBA8UI),et===s.UNSIGNED_SHORT&&(pt=s.RGBA16UI),et===s.UNSIGNED_INT&&(pt=s.RGBA32UI),et===s.BYTE&&(pt=s.RGBA8I),et===s.SHORT&&(pt=s.RGBA16I),et===s.INT&&(pt=s.RGBA32I)),T===s.RGB&&et===s.UNSIGNED_INT_5_9_9_9_REV&&(pt=s.RGB9_E5),T===s.RGBA){let ft=wt?sa:ce.getTransfer(vt);et===s.FLOAT&&(pt=s.RGBA32F),et===s.HALF_FLOAT&&(pt=s.RGBA16F),et===s.UNSIGNED_BYTE&&(pt=ft===me?s.SRGB8_ALPHA8:s.RGBA8),et===s.UNSIGNED_SHORT_4_4_4_4&&(pt=s.RGBA4),et===s.UNSIGNED_SHORT_5_5_5_1&&(pt=s.RGB5_A1)}return(pt===s.R16F||pt===s.R32F||pt===s.RG16F||pt===s.RG32F||pt===s.RGBA16F||pt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function y(L,T){let et;return L?T===null||T===ls||T===er?et=s.DEPTH24_STENCIL8:T===Qn?et=s.DEPTH32F_STENCIL8:T===Vr&&(et=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ls||T===er?et=s.DEPTH_COMPONENT24:T===Qn?et=s.DEPTH_COMPONENT32F:T===Vr&&(et=s.DEPTH_COMPONENT16),et}function A(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Sn&&L.minFilter!==Kn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function b(L){let T=L.target;T.removeEventListener("dispose",b),C(T),T.isVideoTexture&&h.delete(T)}function w(L){let T=L.target;T.removeEventListener("dispose",w),x(T)}function C(L){let T=n.get(L);if(T.__webglInit===void 0)return;let et=L.source,vt=d.get(et);if(vt){let wt=vt[T.__cacheKey];wt.usedTimes--,wt.usedTimes===0&&M(L),Object.keys(vt).length===0&&d.delete(et)}n.remove(L)}function M(L){let T=n.get(L);s.deleteTexture(T.__webglTexture);let et=L.source,vt=d.get(et);delete vt[T.__cacheKey],o.memory.textures--}function x(L){let T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(T.__webglFramebuffer[vt]))for(let wt=0;wt<T.__webglFramebuffer[vt].length;wt++)s.deleteFramebuffer(T.__webglFramebuffer[vt][wt]);else s.deleteFramebuffer(T.__webglFramebuffer[vt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[vt])}else{if(Array.isArray(T.__webglFramebuffer))for(let vt=0;vt<T.__webglFramebuffer.length;vt++)s.deleteFramebuffer(T.__webglFramebuffer[vt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let vt=0;vt<T.__webglColorRenderbuffer.length;vt++)T.__webglColorRenderbuffer[vt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[vt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let et=L.textures;for(let vt=0,wt=et.length;vt<wt;vt++){let pt=n.get(et[vt]);pt.__webglTexture&&(s.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(et[vt])}n.remove(L)}let D=0;function V(){D=0}function z(){let L=D;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),D+=1,L}function W(L){let T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function $(L,T){let et=n.get(L);if(L.isVideoTexture&&Dt(L),L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){let vt=L.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(et,L,T);return}}e.bindTexture(s.TEXTURE_2D,et.__webglTexture,s.TEXTURE0+T)}function O(L,T){let et=n.get(L);if(L.version>0&&et.__version!==L.version){N(et,L,T);return}e.bindTexture(s.TEXTURE_2D_ARRAY,et.__webglTexture,s.TEXTURE0+T)}function lt(L,T){let et=n.get(L);if(L.version>0&&et.__version!==L.version){N(et,L,T);return}e.bindTexture(s.TEXTURE_3D,et.__webglTexture,s.TEXTURE0+T)}function Z(L,T){let et=n.get(L);if(L.version>0&&et.__version!==L.version){k(et,L,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture,s.TEXTURE0+T)}let ht={[vc]:s.REPEAT,[as]:s.CLAMP_TO_EDGE,[Mc]:s.MIRRORED_REPEAT},rt={[Sn]:s.NEAREST,[Rp]:s.NEAREST_MIPMAP_NEAREST,[uo]:s.NEAREST_MIPMAP_LINEAR,[Kn]:s.LINEAR,[Pa]:s.LINEAR_MIPMAP_NEAREST,[cs]:s.LINEAR_MIPMAP_LINEAR},xt={[Dp]:s.NEVER,[Bp]:s.ALWAYS,[Lp]:s.LESS,[fd]:s.LEQUAL,[Up]:s.EQUAL,[Fp]:s.GEQUAL,[Op]:s.GREATER,[Np]:s.NOTEQUAL};function Rt(L,T){if(T.type===Qn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Kn||T.magFilter===Pa||T.magFilter===uo||T.magFilter===cs||T.minFilter===Kn||T.minFilter===Pa||T.minFilter===uo||T.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ht[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ht[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ht[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,rt[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,rt[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,xt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Sn||T.minFilter!==uo&&T.minFilter!==cs||T.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let et=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function X(L,T){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",b));let vt=T.source,wt=d.get(vt);wt===void 0&&(wt={},d.set(vt,wt));let pt=W(T);if(pt!==L.__cacheKey){wt[pt]===void 0&&(wt[pt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,et=!0),wt[pt].usedTimes++;let ft=wt[L.__cacheKey];ft!==void 0&&(wt[L.__cacheKey].usedTimes--,ft.usedTimes===0&&M(T)),L.__cacheKey=pt,L.__webglTexture=wt[pt].texture}return et}function N(L,T,et){let vt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(vt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(vt=s.TEXTURE_3D);let wt=X(L,T),pt=T.source;e.bindTexture(vt,L.__webglTexture,s.TEXTURE0+et);let ft=n.get(pt);if(pt.version!==ft.__version||wt===!0){e.activeTexture(s.TEXTURE0+et);let Mt=ce.getPrimaries(ce.workingColorSpace),bt=T.colorSpace===Di?null:ce.getPrimaries(T.colorSpace),zt=T.colorSpace===Di||Mt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let ct=g(T.image,!1,i.maxTextureSize);ct=qt(T,ct);let _t=r.convert(T.format,T.colorSpace),Nt=r.convert(T.type),mt=v(T.internalFormat,_t,Nt,T.colorSpace,T.isVideoTexture);Rt(vt,T);let yt,Ft=T.mipmaps,ot=T.isVideoTexture!==!0,G=ft.__version===void 0||wt===!0,R=pt.dataReady,st=A(T,ct);if(T.isDepthTexture)mt=y(T.format===nr,T.type),G&&(ot?e.texStorage2D(s.TEXTURE_2D,1,mt,ct.width,ct.height):e.texImage2D(s.TEXTURE_2D,0,mt,ct.width,ct.height,0,_t,Nt,null));else if(T.isDataTexture)if(Ft.length>0){ot&&G&&e.texStorage2D(s.TEXTURE_2D,st,mt,Ft[0].width,Ft[0].height);for(let B=0,Q=Ft.length;B<Q;B++)yt=Ft[B],ot?R&&e.texSubImage2D(s.TEXTURE_2D,B,0,0,yt.width,yt.height,_t,Nt,yt.data):e.texImage2D(s.TEXTURE_2D,B,mt,yt.width,yt.height,0,_t,Nt,yt.data);T.generateMipmaps=!1}else ot?(G&&e.texStorage2D(s.TEXTURE_2D,st,mt,ct.width,ct.height),R&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct.width,ct.height,_t,Nt,ct.data)):e.texImage2D(s.TEXTURE_2D,0,mt,ct.width,ct.height,0,_t,Nt,ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ot&&G&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,mt,Ft[0].width,Ft[0].height,ct.depth);for(let B=0,Q=Ft.length;B<Q;B++)if(yt=Ft[B],T.format!==Vn)if(_t!==null)if(ot){if(R)if(T.layerUpdates.size>0){let I=Yu(yt.width,yt.height,T.format,T.type);for(let E of T.layerUpdates){let Y=yt.data.subarray(E*I/yt.data.BYTES_PER_ELEMENT,(E+1)*I/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,E,yt.width,yt.height,1,_t,Y)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,0,yt.width,yt.height,ct.depth,_t,yt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,B,mt,yt.width,yt.height,ct.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?R&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,B,0,0,0,yt.width,yt.height,ct.depth,_t,Nt,yt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,B,mt,yt.width,yt.height,ct.depth,0,_t,Nt,yt.data)}else{ot&&G&&e.texStorage2D(s.TEXTURE_2D,st,mt,Ft[0].width,Ft[0].height);for(let B=0,Q=Ft.length;B<Q;B++)yt=Ft[B],T.format!==Vn?_t!==null?ot?R&&e.compressedTexSubImage2D(s.TEXTURE_2D,B,0,0,yt.width,yt.height,_t,yt.data):e.compressedTexImage2D(s.TEXTURE_2D,B,mt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?R&&e.texSubImage2D(s.TEXTURE_2D,B,0,0,yt.width,yt.height,_t,Nt,yt.data):e.texImage2D(s.TEXTURE_2D,B,mt,yt.width,yt.height,0,_t,Nt,yt.data)}else if(T.isDataArrayTexture)if(ot){if(G&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,mt,ct.width,ct.height,ct.depth),R)if(T.layerUpdates.size>0){let B=Yu(ct.width,ct.height,T.format,T.type);for(let Q of T.layerUpdates){let I=ct.data.subarray(Q*B/ct.data.BYTES_PER_ELEMENT,(Q+1)*B/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,ct.width,ct.height,1,_t,Nt,I)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,_t,Nt,ct.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,mt,ct.width,ct.height,ct.depth,0,_t,Nt,ct.data);else if(T.isData3DTexture)ot?(G&&e.texStorage3D(s.TEXTURE_3D,st,mt,ct.width,ct.height,ct.depth),R&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,_t,Nt,ct.data)):e.texImage3D(s.TEXTURE_3D,0,mt,ct.width,ct.height,ct.depth,0,_t,Nt,ct.data);else if(T.isFramebufferTexture){if(G)if(ot)e.texStorage2D(s.TEXTURE_2D,st,mt,ct.width,ct.height);else{let B=ct.width,Q=ct.height;for(let I=0;I<st;I++)e.texImage2D(s.TEXTURE_2D,I,mt,B,Q,0,_t,Nt,null),B>>=1,Q>>=1}}else if(Ft.length>0){if(ot&&G){let B=Ut(Ft[0]);e.texStorage2D(s.TEXTURE_2D,st,mt,B.width,B.height)}for(let B=0,Q=Ft.length;B<Q;B++)yt=Ft[B],ot?R&&e.texSubImage2D(s.TEXTURE_2D,B,0,0,_t,Nt,yt):e.texImage2D(s.TEXTURE_2D,B,mt,_t,Nt,yt);T.generateMipmaps=!1}else if(ot){if(G){let B=Ut(ct);e.texStorage2D(s.TEXTURE_2D,st,mt,B.width,B.height)}R&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,Nt,ct)}else e.texImage2D(s.TEXTURE_2D,0,mt,_t,Nt,ct);m(T)&&p(vt),ft.__version=pt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function k(L,T,et){if(T.image.length!==6)return;let vt=X(L,T),wt=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+et);let pt=n.get(wt);if(wt.version!==pt.__version||vt===!0){e.activeTexture(s.TEXTURE0+et);let ft=ce.getPrimaries(ce.workingColorSpace),Mt=T.colorSpace===Di?null:ce.getPrimaries(T.colorSpace),bt=T.colorSpace===Di||ft===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let zt=T.isCompressedTexture||T.image[0].isCompressedTexture,ct=T.image[0]&&T.image[0].isDataTexture,_t=[];for(let Q=0;Q<6;Q++)!zt&&!ct?_t[Q]=g(T.image[Q],!0,i.maxCubemapSize):_t[Q]=ct?T.image[Q].image:T.image[Q],_t[Q]=qt(T,_t[Q]);let Nt=_t[0],mt=r.convert(T.format,T.colorSpace),yt=r.convert(T.type),Ft=v(T.internalFormat,mt,yt,T.colorSpace),ot=T.isVideoTexture!==!0,G=pt.__version===void 0||vt===!0,R=wt.dataReady,st=A(T,Nt);Rt(s.TEXTURE_CUBE_MAP,T);let B;if(zt){ot&&G&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Ft,Nt.width,Nt.height);for(let Q=0;Q<6;Q++){B=_t[Q].mipmaps;for(let I=0;I<B.length;I++){let E=B[I];T.format!==Vn?mt!==null?ot?R&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,I,0,0,E.width,E.height,mt,E.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,I,Ft,E.width,E.height,0,E.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?R&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,I,0,0,E.width,E.height,mt,yt,E.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,I,Ft,E.width,E.height,0,mt,yt,E.data)}}}else{if(B=T.mipmaps,ot&&G){B.length>0&&st++;let Q=Ut(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Ft,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ct){ot?R&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_t[Q].width,_t[Q].height,mt,yt,_t[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ft,_t[Q].width,_t[Q].height,0,mt,yt,_t[Q].data);for(let I=0;I<B.length;I++){let Y=B[I].image[Q].image;ot?R&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,I+1,0,0,Y.width,Y.height,mt,yt,Y.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,I+1,Ft,Y.width,Y.height,0,mt,yt,Y.data)}}else{ot?R&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,mt,yt,_t[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ft,mt,yt,_t[Q]);for(let I=0;I<B.length;I++){let E=B[I];ot?R&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,I+1,0,0,mt,yt,E.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,I+1,Ft,mt,yt,E.image[Q])}}}m(T)&&p(s.TEXTURE_CUBE_MAP),pt.__version=wt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function J(L,T,et,vt,wt,pt){let ft=r.convert(et.format,et.colorSpace),Mt=r.convert(et.type),bt=v(et.internalFormat,ft,Mt,et.colorSpace),zt=n.get(T),ct=n.get(et);if(ct.__renderTarget=T,!zt.__hasExternalTextures){let _t=Math.max(1,T.width>>pt),Nt=Math.max(1,T.height>>pt);wt===s.TEXTURE_3D||wt===s.TEXTURE_2D_ARRAY?e.texImage3D(wt,pt,bt,_t,Nt,T.depth,0,ft,Mt,null):e.texImage2D(wt,pt,bt,_t,Nt,0,ft,Mt,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),kt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,wt,ct.__webglTexture,0,Wt(T)):(wt===s.TEXTURE_2D||wt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&wt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,vt,wt,ct.__webglTexture,pt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function F(L,T,et){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){let vt=T.depthTexture,wt=vt&&vt.isDepthTexture?vt.type:null,pt=y(T.stencilBuffer,wt),ft=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=Wt(T);kt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt,pt,T.width,T.height):et?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,pt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,pt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ft,s.RENDERBUFFER,L)}else{let vt=T.textures;for(let wt=0;wt<vt.length;wt++){let pt=vt[wt],ft=r.convert(pt.format,pt.colorSpace),Mt=r.convert(pt.type),bt=v(pt.internalFormat,ft,Mt,pt.colorSpace),zt=Wt(T);et&&kt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,bt,T.width,T.height):kt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,zt,bt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,bt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function at(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let vt=n.get(T.depthTexture);vt.__renderTarget=T,(!vt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);let wt=vt.__webglTexture,pt=Wt(T);if(T.depthTexture.format===$s)kt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,wt,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,wt,0);else if(T.depthTexture.format===nr)kt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,wt,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,wt,0);else throw new Error("Unknown depthTexture format")}function gt(L){let T=n.get(L),et=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){let vt=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),vt){let wt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,vt.removeEventListener("dispose",wt)};vt.addEventListener("dispose",wt),T.__depthDisposeCallback=wt}T.__boundDepthTexture=vt}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");at(T.__webglFramebuffer,L)}else if(et){T.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[vt]),T.__webglDepthbuffer[vt]===void 0)T.__webglDepthbuffer[vt]=s.createRenderbuffer(),F(T.__webglDepthbuffer[vt],L,!1);else{let wt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[vt];s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,pt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),F(T.__webglDepthbuffer,L,!1);else{let vt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,wt),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,wt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(L,T,et){let vt=n.get(L);T!==void 0&&J(vt.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),et!==void 0&&gt(L)}function It(L){let T=L.texture,et=n.get(L),vt=n.get(T);L.addEventListener("dispose",w);let wt=L.textures,pt=L.isWebGLCubeRenderTarget===!0,ft=wt.length>1;if(ft||(vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture()),vt.__version=T.version,o.memory.textures++),pt){et.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Mt]=[];for(let bt=0;bt<T.mipmaps.length;bt++)et.__webglFramebuffer[Mt][bt]=s.createFramebuffer()}else et.__webglFramebuffer[Mt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Mt=0;Mt<T.mipmaps.length;Mt++)et.__webglFramebuffer[Mt]=s.createFramebuffer()}else et.__webglFramebuffer=s.createFramebuffer();if(ft)for(let Mt=0,bt=wt.length;Mt<bt;Mt++){let zt=n.get(wt[Mt]);zt.__webglTexture===void 0&&(zt.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&kt(L)===!1){et.__webglMultisampledFramebuffer=s.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Mt=0;Mt<wt.length;Mt++){let bt=wt[Mt];et.__webglColorRenderbuffer[Mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,et.__webglColorRenderbuffer[Mt]);let zt=r.convert(bt.format,bt.colorSpace),ct=r.convert(bt.type),_t=v(bt.internalFormat,zt,ct,bt.colorSpace,L.isXRRenderTarget===!0),Nt=Wt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,_t,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,et.__webglColorRenderbuffer[Mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=s.createRenderbuffer(),F(et.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pt){e.bindTexture(s.TEXTURE_CUBE_MAP,vt.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,T);for(let Mt=0;Mt<6;Mt++)if(T.mipmaps&&T.mipmaps.length>0)for(let bt=0;bt<T.mipmaps.length;bt++)J(et.__webglFramebuffer[Mt][bt],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,bt);else J(et.__webglFramebuffer[Mt],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);m(T)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let Mt=0,bt=wt.length;Mt<bt;Mt++){let zt=wt[Mt],ct=n.get(zt);e.bindTexture(s.TEXTURE_2D,ct.__webglTexture),Rt(s.TEXTURE_2D,zt),J(et.__webglFramebuffer,L,zt,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,0),m(zt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let Mt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Mt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Mt,vt.__webglTexture),Rt(Mt,T),T.mipmaps&&T.mipmaps.length>0)for(let bt=0;bt<T.mipmaps.length;bt++)J(et.__webglFramebuffer[bt],L,T,s.COLOR_ATTACHMENT0,Mt,bt);else J(et.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Mt,0);m(T)&&p(Mt),e.unbindTexture()}L.depthBuffer&&gt(L)}function St(L){let T=L.textures;for(let et=0,vt=T.length;et<vt;et++){let wt=T[et];if(m(wt)){let pt=S(L),ft=n.get(wt).__webglTexture;e.bindTexture(pt,ft),p(pt),e.unbindTexture()}}}let Ot=[],q=[];function Qt(L){if(L.samples>0){if(kt(L)===!1){let T=L.textures,et=L.width,vt=L.height,wt=s.COLOR_BUFFER_BIT,pt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=n.get(L),Mt=T.length>1;if(Mt)for(let bt=0;bt<T.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let bt=0;bt<T.length;bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(wt|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(wt|=s.STENCIL_BUFFER_BIT)),Mt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ft.__webglColorRenderbuffer[bt]);let zt=n.get(T[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,zt,0)}s.blitFramebuffer(0,0,et,vt,0,0,et,vt,wt,s.NEAREST),c===!0&&(Ot.length=0,q.length=0,Ot.push(s.COLOR_ATTACHMENT0+bt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ot.push(pt),q.push(pt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Mt)for(let bt=0;bt<T.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,ft.__webglColorRenderbuffer[bt]);let zt=n.get(T[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){let T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Wt(L){return Math.min(i.maxSamples,L.samples)}function kt(L){let T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Dt(L){let T=o.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function qt(L,T){let et=L.colorSpace,vt=L.format,wt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==hr&&et!==Di&&(ce.getTransfer(et)===me?(vt!==Vn||wt!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Ut(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=$,this.setTexture2DArray=O,this.setTexture3D=lt,this.setTextureCube=Z,this.rebindTextures=Ct,this.setupRenderTarget=It,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=kt}function Xx(s,t){function e(n,i=Di){let r,o=ce.getTransfer(i);if(n===mi)return s.UNSIGNED_BYTE;if(n===Ol)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Nl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===rd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===id)return s.BYTE;if(n===sd)return s.SHORT;if(n===Vr)return s.UNSIGNED_SHORT;if(n===Ul)return s.INT;if(n===ls)return s.UNSIGNED_INT;if(n===Qn)return s.FLOAT;if(n===Yr)return s.HALF_FLOAT;if(n===od)return s.ALPHA;if(n===ad)return s.RGB;if(n===Vn)return s.RGBA;if(n===cd)return s.LUMINANCE;if(n===ld)return s.LUMINANCE_ALPHA;if(n===$s)return s.DEPTH_COMPONENT;if(n===nr)return s.DEPTH_STENCIL;if(n===Fl)return s.RED;if(n===Bl)return s.RED_INTEGER;if(n===hd)return s.RG;if(n===zl)return s.RG_INTEGER;if(n===kl)return s.RGBA_INTEGER;if(n===No||n===Fo||n===Bo||n===zo)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sc||n===Ec||n===bc||n===Tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wc||n===Ac||n===Rc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wc||n===Ac)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cc||n===Pc||n===Ic||n===Dc||n===Lc||n===Uc||n===Oc||n===Nc||n===Fc||n===Bc||n===zc||n===kc||n===Hc||n===Vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ic)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===Gc||n===Wc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ko)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ud||n===Xc||n===qc||n===Yc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var ll=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Xt=class extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},qx={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Yx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zx=`
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

}`,hl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new dn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new jn({vertexShader:Yx,fragmentShader:Zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new Te(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ul=class extends Ni{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,_=null,g=new hl,m=e.getContextAttributes(),p=null,S=null,v=[],y=[],A=new jt,b=null,w=new en;w.viewport=new _e;let C=new en;C.viewport=new _e;let M=[w,C],x=new ll,D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let k=v[N];return k===void 0&&(k=new zr,v[N]=k),k.getTargetRaySpace()},this.getControllerGrip=function(N){let k=v[N];return k===void 0&&(k=new zr,v[N]=k),k.getGripSpace()},this.getHand=function(N){let k=v[N];return k===void 0&&(k=new zr,v[N]=k),k.getHandSpace()};function z(N){let k=y.indexOf(N.inputSource);if(k===-1)return;let J=v[k];J!==void 0&&(J.update(N.inputSource,N.frame,l||o),J.dispatchEvent({type:N.type,data:N.inputSource}))}function W(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",$);for(let N=0;N<v.length;N++){let k=y[N];k!==null&&(y[N]=null,v[N].disconnect(k))}D=null,V=null,g.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,S=null,X.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",W),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){let k={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,k),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new gi(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let k=null,J=null,F=null;m.depth&&(F=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=m.stencil?nr:$s,J=m.stencil?er:ls);let at={colorFormat:e.RGBA8,depthFormat:F,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(at),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new gi(d.textureWidth,d.textureHeight,{format:Vn,type:mi,depthTexture:new Ko(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(N){for(let k=0;k<N.removed.length;k++){let J=N.removed[k],F=y.indexOf(J);F>=0&&(y[F]=null,v[F].disconnect(J))}for(let k=0;k<N.added.length;k++){let J=N.added[k],F=y.indexOf(J);if(F===-1){for(let gt=0;gt<v.length;gt++)if(gt>=y.length){y.push(J),F=gt;break}else if(y[gt]===null){y[gt]=J,F=gt;break}if(F===-1)break}let at=v[F];at&&at.connect(J)}}let O=new U,lt=new U;function Z(N,k,J){O.setFromMatrixPosition(k.matrixWorld),lt.setFromMatrixPosition(J.matrixWorld);let F=O.distanceTo(lt),at=k.projectionMatrix.elements,gt=J.projectionMatrix.elements,Ct=at[14]/(at[10]-1),It=at[14]/(at[10]+1),St=(at[9]+1)/at[5],Ot=(at[9]-1)/at[5],q=(at[8]-1)/at[0],Qt=(gt[8]+1)/gt[0],Wt=Ct*q,kt=Ct*Qt,Dt=F/(-q+Qt),qt=Dt*-q;if(k.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(qt),N.translateZ(Dt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),at[10]===-1)N.projectionMatrix.copy(k.projectionMatrix),N.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let Ut=Ct+Dt,L=It+Dt,T=Wt-qt,et=kt+(F-qt),vt=St*It/L*Ut,wt=Ot*It/L*Ut;N.projectionMatrix.makePerspective(T,et,vt,wt,Ut,L),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function ht(N,k){k===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(k.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;let k=N.near,J=N.far;g.texture!==null&&(g.depthNear>0&&(k=g.depthNear),g.depthFar>0&&(J=g.depthFar)),x.near=C.near=w.near=k,x.far=C.far=w.far=J,(D!==x.near||V!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),D=x.near,V=x.far),w.layers.mask=N.layers.mask|2,C.layers.mask=N.layers.mask|4,x.layers.mask=w.layers.mask|C.layers.mask;let F=N.parent,at=x.cameras;ht(x,F);for(let gt=0;gt<at.length;gt++)ht(at[gt],F);at.length===2?Z(x,w,C):x.projectionMatrix.copy(w.projectionMatrix),rt(N,x,F)};function rt(N,k,J){J===null?N.matrix.copy(k.matrixWorld):(N.matrix.copy(J.matrixWorld),N.matrix.invert(),N.matrix.multiply(k.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(k.projectionMatrix),N.projectionMatrixInverse.copy(k.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Gr*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(N){c=N,d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let xt=null;function Rt(N,k){if(h=k.getViewerPose(l||o),_=k,h!==null){let J=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let F=!1;J.length!==x.cameras.length&&(x.cameras.length=0,F=!0);for(let gt=0;gt<J.length;gt++){let Ct=J[gt],It=null;if(f!==null)It=f.getViewport(Ct);else{let Ot=u.getViewSubImage(d,Ct);It=Ot.viewport,gt===0&&(t.setRenderTargetTextures(S,Ot.colorTexture,d.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(S))}let St=M[gt];St===void 0&&(St=new en,St.layers.enable(gt),St.viewport=new _e,M[gt]=St),St.matrix.fromArray(Ct.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Ct.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(It.x,It.y,It.width,It.height),gt===0&&(x.matrix.copy(St.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),F===!0&&x.cameras.push(St)}let at=i.enabledFeatures;if(at&&at.includes("depth-sensing")){let gt=u.getDepthInformation(J[0]);gt&&gt.isValid&&gt.texture&&g.init(t,gt,i.renderState)}}for(let J=0;J<v.length;J++){let F=y[J],at=v[J];F!==null&&at!==void 0&&at.update(F,k,l||o)}xt&&xt(N,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),_=null}let X=new _d;X.setAnimationLoop(Rt),this.setAnimationLoop=function(N){xt=N},this.dispose=function(){}}},ns=new Cn,$x=new ue;function Jx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),v=S.envMap,y=S.envMapRotation;v&&(m.envMap.value=v,ns.copy(y),ns.x*=-1,ns.y*=-1,ns.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4($x.makeRotationFromEuler(ns)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Kx(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,v){let y=v.program;n.uniformBlockBinding(S,y)}function l(S,v){let y=i[S.id];y===void 0&&(_(S),y=h(S),i[S.id]=y,S.addEventListener("dispose",m));let A=v.program;n.updateUBOMapping(S,A);let b=t.render.frame;r[S.id]!==b&&(d(S),r[S.id]=b)}function h(S){let v=u();S.__bindingPointIndex=v;let y=s.createBuffer(),A=S.__size,b=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,A,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let v=i[S.id],y=S.uniforms,A=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,w=y.length;b<w;b++){let C=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,x=C.length;M<x;M++){let D=C[M];if(f(D,b,M,A)===!0){let V=D.__offset,z=Array.isArray(D.value)?D.value:[D.value],W=0;for(let $=0;$<z.length;$++){let O=z[$],lt=g(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,V+W,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):(O.toArray(D.__data,W),W+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,v,y,A){let b=S.value,w=v+"_"+y;if(A[w]===void 0)return typeof b=="number"||typeof b=="boolean"?A[w]=b:A[w]=b.clone(),!0;{let C=A[w];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return A[w]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function _(S){let v=S.uniforms,y=0,A=16;for(let w=0,C=v.length;w<C;w++){let M=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,D=M.length;x<D;x++){let V=M[x],z=Array.isArray(V.value)?V.value:[V.value];for(let W=0,$=z.length;W<$;W++){let O=z[W],lt=g(O),Z=y%A,ht=Z%lt.boundary,rt=Z+ht;y+=ht,rt!==0&&A-rt<lt.storage&&(y+=A-rt),V.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=lt.storage}}}let b=y%A;return b>0&&(y+=A-b),S.__size=y,S.__cache={},this}function g(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){let v=S.target;v.removeEventListener("dispose",m);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var or=class{constructor(t={}){let{canvas:e=em(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,S=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this.toneMapping=Ui,this.toneMappingExposure=1;let y=this,A=!1,b=0,w=0,C=null,M=-1,x=null,D=new _e,V=new _e,z=null,W=new te(0),$=0,O=e.width,lt=e.height,Z=1,ht=null,rt=null,xt=new _e(0,0,O,lt),Rt=new _e(0,0,O,lt),X=!1,N=new Wr,k=!1,J=!1,F=new ue,at=new ue,gt=new U,Ct=new _e,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},St=!1;function Ot(){return C===null?Z:1}let q=n;function Qt(P,tt){return e.getContext(P,tt)}try{let P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ll}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",E,!1),q===null){let tt="webgl2";if(q=Qt(tt,P),q===null)throw Qt(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Wt,kt,Dt,qt,Ut,L,T,et,vt,wt,pt,ft,Mt,bt,zt,ct,_t,Nt,mt,yt,Ft,ot,G,R;function st(){Wt=new f_(q),Wt.init(),ot=new Xx(q,Wt),kt=new a_(q,Wt,t,ot),Dt=new Vx(q,Wt),kt.reverseDepthBuffer&&d&&Dt.buffers.depth.setReversed(!0),qt=new g_(q),Ut=new Cx,L=new Wx(q,Wt,Dt,Ut,kt,ot,qt),T=new l_(y),et=new d_(y),vt=new Em(q),G=new r_(q,vt),wt=new p_(q,vt,qt,G),pt=new x_(q,wt,vt,qt),mt=new __(q,kt,L),ct=new c_(Ut),ft=new Rx(y,T,et,Wt,kt,G,ct),Mt=new Jx(y,Ut),bt=new Ix,zt=new Fx(Wt),Nt=new s_(y,T,et,Dt,pt,f,c),_t=new kx(y,pt,kt),R=new Kx(q,qt,kt,Dt),yt=new o_(q,Wt,qt),Ft=new m_(q,Wt,qt),qt.programs=ft.programs,y.capabilities=kt,y.extensions=Wt,y.properties=Ut,y.renderLists=bt,y.shadowMap=_t,y.state=Dt,y.info=qt}st();let B=new ul(y,q);this.xr=B,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let P=Wt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Wt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(P){P!==void 0&&(Z=P,this.setSize(O,lt,!1))},this.getSize=function(P){return P.set(O,lt)},this.setSize=function(P,tt,ut=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,lt=tt,e.width=Math.floor(P*Z),e.height=Math.floor(tt*Z),ut===!0&&(e.style.width=P+"px",e.style.height=tt+"px"),this.setViewport(0,0,P,tt)},this.getDrawingBufferSize=function(P){return P.set(O*Z,lt*Z).floor()},this.setDrawingBufferSize=function(P,tt,ut){O=P,lt=tt,Z=ut,e.width=Math.floor(P*ut),e.height=Math.floor(tt*ut),this.setViewport(0,0,P,tt)},this.getCurrentViewport=function(P){return P.copy(D)},this.getViewport=function(P){return P.copy(xt)},this.setViewport=function(P,tt,ut,dt){P.isVector4?xt.set(P.x,P.y,P.z,P.w):xt.set(P,tt,ut,dt),Dt.viewport(D.copy(xt).multiplyScalar(Z).round())},this.getScissor=function(P){return P.copy(Rt)},this.setScissor=function(P,tt,ut,dt){P.isVector4?Rt.set(P.x,P.y,P.z,P.w):Rt.set(P,tt,ut,dt),Dt.scissor(V.copy(Rt).multiplyScalar(Z).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(P){Dt.setScissorTest(X=P)},this.setOpaqueSort=function(P){ht=P},this.setTransparentSort=function(P){rt=P},this.getClearColor=function(P){return P.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(P=!0,tt=!0,ut=!0){let dt=0;if(P){let nt=!1;if(C!==null){let Bt=C.texture.format;nt=Bt===kl||Bt===zl||Bt===Bl}if(nt){let Bt=C.texture.type,Gt=Bt===mi||Bt===ls||Bt===Vr||Bt===er||Bt===Ol||Bt===Nl,Yt=Nt.getClearColor(),Zt=Nt.getClearAlpha(),ee=Yt.r,se=Yt.g,$t=Yt.b;Gt?(_[0]=ee,_[1]=se,_[2]=$t,_[3]=Zt,q.clearBufferuiv(q.COLOR,0,_)):(g[0]=ee,g[1]=se,g[2]=$t,g[3]=Zt,q.clearBufferiv(q.COLOR,0,g))}else dt|=q.COLOR_BUFFER_BIT}tt&&(dt|=q.DEPTH_BUFFER_BIT),ut&&(dt|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",E,!1),bt.dispose(),zt.dispose(),Ut.dispose(),T.dispose(),et.dispose(),pt.dispose(),G.dispose(),R.dispose(),ft.dispose(),B.dispose(),B.removeEventListener("sessionstart",Ht),B.removeEventListener("sessionend",At),K.stop()};function Q(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let P=qt.autoReset,tt=_t.enabled,ut=_t.autoUpdate,dt=_t.needsUpdate,nt=_t.type;st(),qt.autoReset=P,_t.enabled=tt,_t.autoUpdate=ut,_t.needsUpdate=dt,_t.type=nt}function E(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Y(P){let tt=P.target;tt.removeEventListener("dispose",Y),it(tt)}function it(P){H(P),Ut.remove(P)}function H(P){let tt=Ut.get(P).programs;tt!==void 0&&(tt.forEach(function(ut){ft.releaseProgram(ut)}),P.isShaderMaterial&&ft.releaseShaderCache(P))}this.renderBufferDirect=function(P,tt,ut,dt,nt,Bt){tt===null&&(tt=It);let Gt=nt.isMesh&&nt.matrixWorld.determinant()<0,Yt=Jf(P,tt,ut,dt,nt);Dt.setMaterial(dt,Gt);let Zt=ut.index,ee=1;if(dt.wireframe===!0){if(Zt=wt.getWireframeAttribute(ut),Zt===void 0)return;ee=2}let se=ut.drawRange,$t=ut.attributes.position,le=se.start*ee,Se=(se.start+se.count)*ee;Bt!==null&&(le=Math.max(le,Bt.start*ee),Se=Math.min(Se,(Bt.start+Bt.count)*ee)),Zt!==null?(le=Math.max(le,0),Se=Math.min(Se,Zt.count)):$t!=null&&(le=Math.max(le,0),Se=Math.min(Se,$t.count));let Ee=Se-le;if(Ee<0||Ee===1/0)return;G.setup(nt,dt,Yt,ut,Zt);let un,de=yt;if(Zt!==null&&(un=vt.get(Zt),de=Ft,de.setIndex(un)),nt.isMesh)dt.wireframe===!0?(Dt.setLineWidth(dt.wireframeLinewidth*Ot()),de.setMode(q.LINES)):de.setMode(q.TRIANGLES);else if(nt.isLine){let Kt=dt.linewidth;Kt===void 0&&(Kt=1),Dt.setLineWidth(Kt*Ot()),nt.isLineSegments?de.setMode(q.LINES):nt.isLineLoop?de.setMode(q.LINE_LOOP):de.setMode(q.LINE_STRIP)}else nt.isPoints?de.setMode(q.POINTS):nt.isSprite&&de.setMode(q.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)de.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))de.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let Kt=nt._multiDrawStarts,ri=nt._multiDrawCounts,fe=nt._multiDrawCount,Bn=Zt?vt.get(Zt).bytesPerElement:1,Ps=Ut.get(dt).currentProgram.getUniforms();for(let xn=0;xn<fe;xn++)Ps.setValue(q,"_gl_DrawID",xn),de.render(Kt[xn]/Bn,ri[xn])}else if(nt.isInstancedMesh)de.renderInstances(le,Ee,nt.count);else if(ut.isInstancedBufferGeometry){let Kt=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,ri=Math.min(ut.instanceCount,Kt);de.renderInstances(le,Ee,ri)}else de.render(le,Ee)};function j(P,tt,ut){P.transparent===!0&&P.side===Mn&&P.forceSinglePass===!1?(P.side=nn,P.needsUpdate=!0,wn(P,tt,ut),P.side=Oi,P.needsUpdate=!0,wn(P,tt,ut),P.side=Mn):wn(P,tt,ut)}this.compile=function(P,tt,ut=null){ut===null&&(ut=P),p=zt.get(ut),p.init(tt),v.push(p),ut.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(p.pushLight(nt),nt.castShadow&&p.pushShadow(nt))}),P!==ut&&P.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(p.pushLight(nt),nt.castShadow&&p.pushShadow(nt))}),p.setupLights();let dt=new Set;return P.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Bt=nt.material;if(Bt)if(Array.isArray(Bt))for(let Gt=0;Gt<Bt.length;Gt++){let Yt=Bt[Gt];j(Yt,ut,nt),dt.add(Yt)}else j(Bt,ut,nt),dt.add(Bt)}),v.pop(),p=null,dt},this.compileAsync=function(P,tt,ut=null){let dt=this.compile(P,tt,ut);return new Promise(nt=>{function Bt(){if(dt.forEach(function(Gt){Ut.get(Gt).currentProgram.isReady()&&dt.delete(Gt)}),dt.size===0){nt(P);return}setTimeout(Bt,10)}Wt.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Tt=null;function Pt(P){Tt&&Tt(P)}function Ht(){K.stop()}function At(){K.start()}let K=new _d;K.setAnimationLoop(Pt),typeof self<"u"&&K.setContext(self),this.setAnimationLoop=function(P){Tt=P,B.setAnimationLoop(P),P===null?K.stop():K.start()},B.addEventListener("sessionstart",Ht),B.addEventListener("sessionend",At),this.render=function(P,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(tt),tt=B.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,tt,C),p=zt.get(P,v.length),p.init(tt),v.push(p),at.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),N.setFromProjectionMatrix(at),J=this.localClippingEnabled,k=ct.init(this.clippingPlanes,J),m=bt.get(P,S.length),m.init(),S.push(m),B.enabled===!0&&B.isPresenting===!0){let Bt=y.xr.getDepthSensingMesh();Bt!==null&&Et(Bt,tt,-1/0,y.sortObjects)}Et(P,tt,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ht,rt),St=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,St&&Nt.addToRenderList(m,P),this.info.render.frame++,k===!0&&ct.beginShadows();let ut=p.state.shadowsArray;_t.render(ut,P,tt),k===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let dt=m.opaque,nt=m.transmissive;if(p.setupLights(),tt.isArrayCamera){let Bt=tt.cameras;if(nt.length>0)for(let Gt=0,Yt=Bt.length;Gt<Yt;Gt++){let Zt=Bt[Gt];ne(dt,nt,P,Zt)}St&&Nt.render(P);for(let Gt=0,Yt=Bt.length;Gt<Yt;Gt++){let Zt=Bt[Gt];Jt(m,P,Zt,Zt.viewport)}}else nt.length>0&&ne(dt,nt,P,tt),St&&Nt.render(P),Jt(m,P,tt);C!==null&&(L.updateMultisampleRenderTarget(C),L.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(y,P,tt),G.resetDefaultState(),M=-1,x=null,v.pop(),v.length>0?(p=v[v.length-1],k===!0&&ct.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Et(P,tt,ut,dt){if(P.visible===!1)return;if(P.layers.test(tt.layers)){if(P.isGroup)ut=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(tt);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||N.intersectsSprite(P)){dt&&Ct.setFromMatrixPosition(P.matrixWorld).applyMatrix4(at);let Gt=pt.update(P),Yt=P.material;Yt.visible&&m.push(P,Gt,Yt,ut,Ct.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||N.intersectsObject(P))){let Gt=pt.update(P),Yt=P.material;if(dt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ct.copy(P.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),Ct.copy(Gt.boundingSphere.center)),Ct.applyMatrix4(P.matrixWorld).applyMatrix4(at)),Array.isArray(Yt)){let Zt=Gt.groups;for(let ee=0,se=Zt.length;ee<se;ee++){let $t=Zt[ee],le=Yt[$t.materialIndex];le&&le.visible&&m.push(P,Gt,le,ut,Ct.z,$t)}}else Yt.visible&&m.push(P,Gt,Yt,ut,Ct.z,null)}}let Bt=P.children;for(let Gt=0,Yt=Bt.length;Gt<Yt;Gt++)Et(Bt[Gt],tt,ut,dt)}function Jt(P,tt,ut,dt){let nt=P.opaque,Bt=P.transmissive,Gt=P.transparent;p.setupLightsView(ut),k===!0&&ct.setGlobalState(y.clippingPlanes,ut),dt&&Dt.viewport(D.copy(dt)),nt.length>0&&Re(nt,tt,ut),Bt.length>0&&Re(Bt,tt,ut),Gt.length>0&&Re(Gt,tt,ut),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function ne(P,tt,ut,dt){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[dt.id]===void 0&&(p.state.transmissionRenderTarget[dt.id]=new gi(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Yr:mi,minFilter:cs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let Bt=p.state.transmissionRenderTarget[dt.id],Gt=dt.viewport||D;Bt.setSize(Gt.z,Gt.w);let Yt=y.getRenderTarget();y.setRenderTarget(Bt),y.getClearColor(W),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),St&&Nt.render(ut);let Zt=y.toneMapping;y.toneMapping=Ui;let ee=dt.viewport;if(dt.viewport!==void 0&&(dt.viewport=void 0),p.setupLightsView(dt),k===!0&&ct.setGlobalState(y.clippingPlanes,dt),Re(P,ut,dt),L.updateMultisampleRenderTarget(Bt),L.updateRenderTargetMipmap(Bt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let $t=0,le=tt.length;$t<le;$t++){let Se=tt[$t],Ee=Se.object,un=Se.geometry,de=Se.material,Kt=Se.group;if(de.side===Mn&&Ee.layers.test(dt.layers)){let ri=de.side;de.side=nn,de.needsUpdate=!0,Xe(Ee,ut,dt,un,de,Kt),de.side=ri,de.needsUpdate=!0,se=!0}}se===!0&&(L.updateMultisampleRenderTarget(Bt),L.updateRenderTargetMipmap(Bt))}y.setRenderTarget(Yt),y.setClearColor(W,$),ee!==void 0&&(dt.viewport=ee),y.toneMapping=Zt}function Re(P,tt,ut){let dt=tt.isScene===!0?tt.overrideMaterial:null;for(let nt=0,Bt=P.length;nt<Bt;nt++){let Gt=P[nt],Yt=Gt.object,Zt=Gt.geometry,ee=dt===null?Gt.material:dt,se=Gt.group;Yt.layers.test(ut.layers)&&Xe(Yt,tt,ut,Zt,ee,se)}}function Xe(P,tt,ut,dt,nt,Bt){P.onBeforeRender(y,tt,ut,dt,nt,Bt),P.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),nt.onBeforeRender(y,tt,ut,dt,P,Bt),nt.transparent===!0&&nt.side===Mn&&nt.forceSinglePass===!1?(nt.side=nn,nt.needsUpdate=!0,y.renderBufferDirect(ut,tt,dt,nt,P,Bt),nt.side=Oi,nt.needsUpdate=!0,y.renderBufferDirect(ut,tt,dt,nt,P,Bt),nt.side=Mn):y.renderBufferDirect(ut,tt,dt,nt,P,Bt),P.onAfterRender(y,tt,ut,dt,nt,Bt)}function wn(P,tt,ut){tt.isScene!==!0&&(tt=It);let dt=Ut.get(P),nt=p.state.lights,Bt=p.state.shadowsArray,Gt=nt.state.version,Yt=ft.getParameters(P,nt.state,Bt,tt,ut),Zt=ft.getProgramCacheKey(Yt),ee=dt.programs;dt.environment=P.isMeshStandardMaterial?tt.environment:null,dt.fog=tt.fog,dt.envMap=(P.isMeshStandardMaterial?et:T).get(P.envMap||dt.environment),dt.envMapRotation=dt.environment!==null&&P.envMap===null?tt.environmentRotation:P.envMapRotation,ee===void 0&&(P.addEventListener("dispose",Y),ee=new Map,dt.programs=ee);let se=ee.get(Zt);if(se!==void 0){if(dt.currentProgram===se&&dt.lightsStateVersion===Gt)return Xh(P,Yt),se}else Yt.uniforms=ft.getUniforms(P),P.onBeforeCompile(Yt,y),se=ft.acquireProgram(Yt,Zt),ee.set(Zt,se),dt.uniforms=Yt.uniforms;let $t=dt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&($t.clippingPlanes=ct.uniform),Xh(P,Yt),dt.needsLights=Qf(P),dt.lightsStateVersion=Gt,dt.needsLights&&($t.ambientLightColor.value=nt.state.ambient,$t.lightProbe.value=nt.state.probe,$t.directionalLights.value=nt.state.directional,$t.directionalLightShadows.value=nt.state.directionalShadow,$t.spotLights.value=nt.state.spot,$t.spotLightShadows.value=nt.state.spotShadow,$t.rectAreaLights.value=nt.state.rectArea,$t.ltc_1.value=nt.state.rectAreaLTC1,$t.ltc_2.value=nt.state.rectAreaLTC2,$t.pointLights.value=nt.state.point,$t.pointLightShadows.value=nt.state.pointShadow,$t.hemisphereLights.value=nt.state.hemi,$t.directionalShadowMap.value=nt.state.directionalShadowMap,$t.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,$t.spotShadowMap.value=nt.state.spotShadowMap,$t.spotLightMatrix.value=nt.state.spotLightMatrix,$t.spotLightMap.value=nt.state.spotLightMap,$t.pointShadowMap.value=nt.state.pointShadowMap,$t.pointShadowMatrix.value=nt.state.pointShadowMatrix),dt.currentProgram=se,dt.uniformsList=null,se}function Cs(P){if(P.uniformsList===null){let tt=P.currentProgram.getUniforms();P.uniformsList=Ks.seqWithValue(tt.seq,P.uniforms)}return P.uniformsList}function Xh(P,tt){let ut=Ut.get(P);ut.outputColorSpace=tt.outputColorSpace,ut.batching=tt.batching,ut.batchingColor=tt.batchingColor,ut.instancing=tt.instancing,ut.instancingColor=tt.instancingColor,ut.instancingMorph=tt.instancingMorph,ut.skinning=tt.skinning,ut.morphTargets=tt.morphTargets,ut.morphNormals=tt.morphNormals,ut.morphColors=tt.morphColors,ut.morphTargetsCount=tt.morphTargetsCount,ut.numClippingPlanes=tt.numClippingPlanes,ut.numIntersection=tt.numClipIntersection,ut.vertexAlphas=tt.vertexAlphas,ut.vertexTangents=tt.vertexTangents,ut.toneMapping=tt.toneMapping}function Jf(P,tt,ut,dt,nt){tt.isScene!==!0&&(tt=It),L.resetTextureUnits();let Bt=tt.fog,Gt=dt.isMeshStandardMaterial?tt.environment:null,Yt=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:hr,Zt=(dt.isMeshStandardMaterial?et:T).get(dt.envMap||Gt),ee=dt.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,se=!!ut.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),$t=!!ut.morphAttributes.position,le=!!ut.morphAttributes.normal,Se=!!ut.morphAttributes.color,Ee=Ui;dt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ee=y.toneMapping);let un=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,de=un!==void 0?un.length:0,Kt=Ut.get(dt),ri=p.state.lights;if(k===!0&&(J===!0||P!==x)){let An=P===x&&dt.id===M;ct.setState(dt,P,An)}let fe=!1;dt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==ri.state.version||Kt.outputColorSpace!==Yt||nt.isBatchedMesh&&Kt.batching===!1||!nt.isBatchedMesh&&Kt.batching===!0||nt.isBatchedMesh&&Kt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Kt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Kt.instancing===!1||!nt.isInstancedMesh&&Kt.instancing===!0||nt.isSkinnedMesh&&Kt.skinning===!1||!nt.isSkinnedMesh&&Kt.skinning===!0||nt.isInstancedMesh&&Kt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Kt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Kt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Kt.instancingMorph===!1&&nt.morphTexture!==null||Kt.envMap!==Zt||dt.fog===!0&&Kt.fog!==Bt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==ct.numPlanes||Kt.numIntersection!==ct.numIntersection)||Kt.vertexAlphas!==ee||Kt.vertexTangents!==se||Kt.morphTargets!==$t||Kt.morphNormals!==le||Kt.morphColors!==Se||Kt.toneMapping!==Ee||Kt.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Kt.__version=dt.version);let Bn=Kt.currentProgram;fe===!0&&(Bn=wn(dt,tt,nt));let Ps=!1,xn=!1,wr=!1,be=Bn.getUniforms(),$n=Kt.uniforms;if(Dt.useProgram(Bn.program)&&(Ps=!0,xn=!0,wr=!0),dt.id!==M&&(M=dt.id,xn=!0),Ps||x!==P){Dt.buffers.depth.getReversed()?(F.copy(P.projectionMatrix),im(F),sm(F),be.setValue(q,"projectionMatrix",F)):be.setValue(q,"projectionMatrix",P.projectionMatrix),be.setValue(q,"viewMatrix",P.matrixWorldInverse);let bi=be.map.cameraPosition;bi!==void 0&&bi.setValue(q,gt.setFromMatrixPosition(P.matrixWorld)),kt.logarithmicDepthBuffer&&be.setValue(q,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&be.setValue(q,"isOrthographic",P.isOrthographicCamera===!0),x!==P&&(x=P,xn=!0,wr=!0)}if(nt.isSkinnedMesh){be.setOptional(q,nt,"bindMatrix"),be.setOptional(q,nt,"bindMatrixInverse");let An=nt.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),be.setValue(q,"boneTexture",An.boneTexture,L))}nt.isBatchedMesh&&(be.setOptional(q,nt,"batchingTexture"),be.setValue(q,"batchingTexture",nt._matricesTexture,L),be.setOptional(q,nt,"batchingIdTexture"),be.setValue(q,"batchingIdTexture",nt._indirectTexture,L),be.setOptional(q,nt,"batchingColorTexture"),nt._colorsTexture!==null&&be.setValue(q,"batchingColorTexture",nt._colorsTexture,L));let Ar=ut.morphAttributes;if((Ar.position!==void 0||Ar.normal!==void 0||Ar.color!==void 0)&&mt.update(nt,ut,Bn),(xn||Kt.receiveShadow!==nt.receiveShadow)&&(Kt.receiveShadow=nt.receiveShadow,be.setValue(q,"receiveShadow",nt.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&($n.envMap.value=Zt,$n.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),dt.isMeshStandardMaterial&&dt.envMap===null&&tt.environment!==null&&($n.envMapIntensity.value=tt.environmentIntensity),xn&&(be.setValue(q,"toneMappingExposure",y.toneMappingExposure),Kt.needsLights&&Kf($n,wr),Bt&&dt.fog===!0&&Mt.refreshFogUniforms($n,Bt),Mt.refreshMaterialUniforms($n,dt,Z,lt,p.state.transmissionRenderTarget[P.id]),Ks.upload(q,Cs(Kt),$n,L)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(Ks.upload(q,Cs(Kt),$n,L),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&be.setValue(q,"center",nt.center),be.setValue(q,"modelViewMatrix",nt.modelViewMatrix),be.setValue(q,"normalMatrix",nt.normalMatrix),be.setValue(q,"modelMatrix",nt.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){let An=dt.uniformsGroups;for(let bi=0,Ti=An.length;bi<Ti;bi++){let qh=An[bi];R.update(qh,Bn),R.bind(qh,Bn)}}return Bn}function Kf(P,tt){P.ambientLightColor.needsUpdate=tt,P.lightProbe.needsUpdate=tt,P.directionalLights.needsUpdate=tt,P.directionalLightShadows.needsUpdate=tt,P.pointLights.needsUpdate=tt,P.pointLightShadows.needsUpdate=tt,P.spotLights.needsUpdate=tt,P.spotLightShadows.needsUpdate=tt,P.rectAreaLights.needsUpdate=tt,P.hemisphereLights.needsUpdate=tt}function Qf(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,tt,ut){Ut.get(P.texture).__webglTexture=tt,Ut.get(P.depthTexture).__webglTexture=ut;let dt=Ut.get(P);dt.__hasExternalTextures=!0,dt.__autoAllocateDepthBuffer=ut===void 0,dt.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),dt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,tt){let ut=Ut.get(P);ut.__webglFramebuffer=tt,ut.__useDefaultFramebuffer=tt===void 0},this.setRenderTarget=function(P,tt=0,ut=0){C=P,b=tt,w=ut;let dt=!0,nt=null,Bt=!1,Gt=!1;if(P){let Zt=Ut.get(P);if(Zt.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(q.FRAMEBUFFER,null),dt=!1;else if(Zt.__webglFramebuffer===void 0)L.setupRenderTarget(P);else if(Zt.__hasExternalTextures)L.rebindTextures(P,Ut.get(P.texture).__webglTexture,Ut.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let $t=P.depthTexture;if(Zt.__boundDepthTexture!==$t){if($t!==null&&Ut.has($t)&&(P.width!==$t.image.width||P.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(P)}}let ee=P.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Gt=!0);let se=Ut.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(se[tt])?nt=se[tt][ut]:nt=se[tt],Bt=!0):P.samples>0&&L.useMultisampledRTT(P)===!1?nt=Ut.get(P).__webglMultisampledFramebuffer:Array.isArray(se)?nt=se[ut]:nt=se,D.copy(P.viewport),V.copy(P.scissor),z=P.scissorTest}else D.copy(xt).multiplyScalar(Z).floor(),V.copy(Rt).multiplyScalar(Z).floor(),z=X;if(Dt.bindFramebuffer(q.FRAMEBUFFER,nt)&&dt&&Dt.drawBuffers(P,nt),Dt.viewport(D),Dt.scissor(V),Dt.setScissorTest(z),Bt){let Zt=Ut.get(P.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Zt.__webglTexture,ut)}else if(Gt){let Zt=Ut.get(P.texture),ee=tt||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Zt.__webglTexture,ut||0,ee)}M=-1},this.readRenderTargetPixels=function(P,tt,ut,dt,nt,Bt,Gt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=Ut.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Gt!==void 0&&(Yt=Yt[Gt]),Yt){Dt.bindFramebuffer(q.FRAMEBUFFER,Yt);try{let Zt=P.texture,ee=Zt.format,se=Zt.type;if(!kt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=P.width-dt&&ut>=0&&ut<=P.height-nt&&q.readPixels(tt,ut,dt,nt,ot.convert(ee),ot.convert(se),Bt)}finally{let Zt=C!==null?Ut.get(C).__webglFramebuffer:null;Dt.bindFramebuffer(q.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(P,tt,ut,dt,nt,Bt,Gt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=Ut.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Gt!==void 0&&(Yt=Yt[Gt]),Yt){let Zt=P.texture,ee=Zt.format,se=Zt.type;if(!kt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(tt>=0&&tt<=P.width-dt&&ut>=0&&ut<=P.height-nt){Dt.bindFramebuffer(q.FRAMEBUFFER,Yt);let $t=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,$t),q.bufferData(q.PIXEL_PACK_BUFFER,Bt.byteLength,q.STREAM_READ),q.readPixels(tt,ut,dt,nt,ot.convert(ee),ot.convert(se),0);let le=C!==null?Ut.get(C).__webglFramebuffer:null;Dt.bindFramebuffer(q.FRAMEBUFFER,le);let Se=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await nm(q,Se,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,$t),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Bt),q.deleteBuffer($t),q.deleteSync(Se),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,tt=null,ut=0){P.isTexture!==!0&&(Or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),tt=arguments[0]||null,P=arguments[1]);let dt=Math.pow(2,-ut),nt=Math.floor(P.image.width*dt),Bt=Math.floor(P.image.height*dt),Gt=tt!==null?tt.x:0,Yt=tt!==null?tt.y:0;L.setTexture2D(P,0),q.copyTexSubImage2D(q.TEXTURE_2D,ut,0,0,Gt,Yt,nt,Bt),Dt.unbindTexture()},this.copyTextureToTexture=function(P,tt,ut=null,dt=null,nt=0){P.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture function signature has changed."),dt=arguments[0]||null,P=arguments[1],tt=arguments[2],nt=arguments[3]||0,ut=null);let Bt,Gt,Yt,Zt,ee,se,$t,le,Se,Ee=P.isCompressedTexture?P.mipmaps[nt]:P.image;ut!==null?(Bt=ut.max.x-ut.min.x,Gt=ut.max.y-ut.min.y,Yt=ut.isBox3?ut.max.z-ut.min.z:1,Zt=ut.min.x,ee=ut.min.y,se=ut.isBox3?ut.min.z:0):(Bt=Ee.width,Gt=Ee.height,Yt=Ee.depth||1,Zt=0,ee=0,se=0),dt!==null?($t=dt.x,le=dt.y,Se=dt.z):($t=0,le=0,Se=0);let un=ot.convert(tt.format),de=ot.convert(tt.type),Kt;tt.isData3DTexture?(L.setTexture3D(tt,0),Kt=q.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(L.setTexture2DArray(tt,0),Kt=q.TEXTURE_2D_ARRAY):(L.setTexture2D(tt,0),Kt=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,tt.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,tt.unpackAlignment);let ri=q.getParameter(q.UNPACK_ROW_LENGTH),fe=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Bn=q.getParameter(q.UNPACK_SKIP_PIXELS),Ps=q.getParameter(q.UNPACK_SKIP_ROWS),xn=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,Ee.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ee.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Zt),q.pixelStorei(q.UNPACK_SKIP_ROWS,ee),q.pixelStorei(q.UNPACK_SKIP_IMAGES,se);let wr=P.isDataArrayTexture||P.isData3DTexture,be=tt.isDataArrayTexture||tt.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let $n=Ut.get(P),Ar=Ut.get(tt),An=Ut.get($n.__renderTarget),bi=Ut.get(Ar.__renderTarget);Dt.bindFramebuffer(q.READ_FRAMEBUFFER,An.__webglFramebuffer),Dt.bindFramebuffer(q.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Ti=0;Ti<Yt;Ti++)wr&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ut.get(P).__webglTexture,nt,se+Ti),P.isDepthTexture?(be&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ut.get(tt).__webglTexture,nt,Se+Ti),q.blitFramebuffer(Zt,ee,Bt,Gt,$t,le,Bt,Gt,q.DEPTH_BUFFER_BIT,q.NEAREST)):be?q.copyTexSubImage3D(Kt,nt,$t,le,Se+Ti,Zt,ee,Bt,Gt):q.copyTexSubImage2D(Kt,nt,$t,le,Se+Ti,Zt,ee,Bt,Gt);Dt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else be?P.isDataTexture||P.isData3DTexture?q.texSubImage3D(Kt,nt,$t,le,Se,Bt,Gt,Yt,un,de,Ee.data):tt.isCompressedArrayTexture?q.compressedTexSubImage3D(Kt,nt,$t,le,Se,Bt,Gt,Yt,un,Ee.data):q.texSubImage3D(Kt,nt,$t,le,Se,Bt,Gt,Yt,un,de,Ee):P.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,nt,$t,le,Bt,Gt,un,de,Ee.data):P.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,nt,$t,le,Ee.width,Ee.height,un,Ee.data):q.texSubImage2D(q.TEXTURE_2D,nt,$t,le,Bt,Gt,un,de,Ee);q.pixelStorei(q.UNPACK_ROW_LENGTH,ri),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,fe),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Bn),q.pixelStorei(q.UNPACK_SKIP_ROWS,Ps),q.pixelStorei(q.UNPACK_SKIP_IMAGES,xn),nt===0&&tt.generateMipmaps&&q.generateMipmap(Kt),Dt.unbindTexture()},this.copyTextureToTexture3D=function(P,tt,ut=null,dt=null,nt=0){return P.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ut=arguments[0]||null,dt=arguments[1]||null,P=arguments[2],tt=arguments[3],nt=arguments[4]||0),Or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,tt,ut,dt,nt)},this.initRenderTarget=function(P){Ut.get(P).__webglFramebuffer===void 0&&L.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),Dt.unbindTexture()},this.resetState=function(){b=0,w=0,C=null,Dt.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var Fi=class extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var dl=class extends dn{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Sn,h=Sn,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qo=class extends Fe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Xs=new ue,Zu=new ue,Lo=[],$u=new _i,Qx=new ue,Dr=new Lt,Lr=new hs,he=class extends Lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),$u.copy(t.boundingBox).applyMatrix4(Xs),this.boundingBox.union($u)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),Lr.copy(t.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(n),t.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xs),Zu.multiplyMatrices(n,Xs),Dr.matrixWorld=Zu,Dr.raycast(t,Lo);for(let o=0,a=Lo.length;o<a;o++){let c=Lo[o];c.instanceId=r,c.object=this,e.push(c)}Lo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new dl(new Float32Array(i*this.count),i,this.count,Fl,Qn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Pe=class extends dn{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new jt:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new U,i=[],r=[],o=[],a=new U,c=new ue;for(let f=0;f<=t;f++){let _=f/t;i[f]=this.getTangentAt(_,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Ye(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,_))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ye(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},jo=class extends Wn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new jt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},fl=class extends jo{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Gl(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Uo=new U,sc=new Gl,rc=new Gl,oc=new Gl,xi=class extends Wn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Uo.subVectors(i[0],i[1]).add(i[0]),l=Uo);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Uo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Uo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),sc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,g,m),rc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,g,m),oc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),rc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),oc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(sc.calc(c),rc.calc(c),oc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ju(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function jx(s,t){let e=1-s;return e*e*t}function ty(s,t){return 2*(1-s)*s*t}function ey(s,t){return s*s*t}function kr(s,t,e,n){return jx(s,t)+ty(s,e)+ey(s,n)}function ny(s,t){let e=1-s;return e*e*e*t}function iy(s,t){let e=1-s;return 3*e*e*s*t}function sy(s,t){return 3*(1-s)*s*s*t}function ry(s,t){return s*s*s*t}function Hr(s,t,e,n,i){return ny(s,t)+iy(s,e)+sy(s,n)+ry(s,i)}var pl=class extends Wn{constructor(t=new jt,e=new jt,n=new jt,i=new jt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new jt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hr(t,i.x,r.x,o.x,a.x),Hr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ml=class extends Wn{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hr(t,i.x,r.x,o.x,a.x),Hr(t,i.y,r.y,o.y,a.y),Hr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},gl=class extends Wn{constructor(t=new jt,e=new jt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new jt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new jt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_l=class extends Wn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xl=class extends Wn{constructor(t=new jt,e=new jt,n=new jt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new jt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(kr(t,i.x,r.x,o.x),kr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ar=class extends Wn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(kr(t,i.x,r.x,o.x),kr(t,i.y,r.y,o.y),kr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yl=class extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new jt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ju(a,c.x,l.x,h.x,u.x),Ju(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new jt().fromArray(i))}return this}},oy=Object.freeze({__proto__:null,ArcCurve:fl,CatmullRomCurve3:xi,CubicBezierCurve:pl,CubicBezierCurve3:ml,EllipseCurve:jo,LineCurve:gl,LineCurve3:_l,QuadraticBezierCurve:xl,QuadraticBezierCurve3:ar,SplineCurve:yl});var Bi=class s extends ke{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],_=0,g=[],m=n/2,p=0;S(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(f,2));function S(){let y=new U,A=new U,b=0,w=(e-t)/n;for(let C=0;C<=r;C++){let M=[],x=C/r,D=x*(e-t)+t;for(let V=0;V<=i;V++){let z=V/i,W=z*c+a,$=Math.sin(W),O=Math.cos(W);A.x=D*$,A.y=-x*n+m,A.z=D*O,u.push(A.x,A.y,A.z),y.set($,w,O).normalize(),d.push(y.x,y.y,y.z),f.push(z,1-x),M.push(_++)}g.push(M)}for(let C=0;C<i;C++)for(let M=0;M<r;M++){let x=g[M][C],D=g[M+1][C],V=g[M+1][C+1],z=g[M][C+1];(t>0||M!==0)&&(h.push(x,D,z),b+=3),(e>0||M!==r-1)&&(h.push(D,V,z),b+=3)}l.addGroup(p,b,0),p+=b}function v(y){let A=_,b=new jt,w=new U,C=0,M=y===!0?t:e,x=y===!0?1:-1;for(let V=1;V<=i;V++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),_++;let D=_;for(let V=0;V<=i;V++){let W=V/i*c+a,$=Math.cos(W),O=Math.sin(W);w.x=M*O,w.y=m*x,w.z=M*$,u.push(w.x,w.y,w.z),d.push(0,x,0),b.x=$*.5+.5,b.y=O*.5*x+.5,f.push(b.x,b.y),_++}for(let V=0;V<i;V++){let z=A+V,W=D+V;y===!0?h.push(W,W+1,z):h.push(W+1,W,z),C+=3}l.addGroup(p,C,y===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vl=class s extends ke{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let v=new U,y=new U,A=new U;for(let b=0;b<e.length;b+=3)f(e[b+0],v),f(e[b+1],y),f(e[b+2],A),c(v,y,A,S)}function c(S,v,y,A){let b=A+1,w=[];for(let C=0;C<=b;C++){w[C]=[];let M=S.clone().lerp(y,C/b),x=v.clone().lerp(y,C/b),D=b-C;for(let V=0;V<=D;V++)V===0&&C===b?w[C][V]=M:w[C][V]=M.clone().lerp(x,V/D)}for(let C=0;C<b;C++)for(let M=0;M<2*(b-C)-1;M++){let x=Math.floor(M/2);M%2===0?(d(w[C][x+1]),d(w[C+1][x]),d(w[C][x])):(d(w[C][x+1]),d(w[C+1][x+1]),d(w[C+1][x]))}}function l(S){let v=new U;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(S),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){let S=new U;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];let y=m(S)/2/Math.PI+.5,A=p(S)/Math.PI+.5;o.push(y,1-A)}_(),u()}function u(){for(let S=0;S<o.length;S+=6){let v=o[S+0],y=o[S+2],A=o[S+4],b=Math.max(v,y,A),w=Math.min(v,y,A);b>.9&&w<.1&&(v<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),A<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,v){let y=S*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function _(){let S=new U,v=new U,y=new U,A=new U,b=new jt,w=new jt,C=new jt;for(let M=0,x=0;M<r.length;M+=9,x+=6){S.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),b.set(o[x+0],o[x+1]),w.set(o[x+2],o[x+3]),C.set(o[x+4],o[x+5]),A.copy(S).add(v).add(y).divideScalar(3);let D=m(A);g(b,x+0,S,D),g(w,x+2,v,D),g(C,x+4,y,D)}}function g(S,v,y,A){A<0&&S.x===1&&(o[v]=S.x-1),y.x===0&&y.z===0&&(o[v]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Xn=class s extends vl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Pn=class s extends ke{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new U,d=new U,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){let S=[],v=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){let b=A/e;u.x=-t*Math.cos(i+b*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+b*r)*Math.sin(o+v*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(b+y,1-v),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let v=h[p][S+1],y=h[p][S],A=h[p+1][S],b=h[p+1][S+1];(p!==0||o>0)&&f.push(v,y,b),(p!==n-1||c<Math.PI)&&f.push(y,A,b)}this.setIndex(f),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(g,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var In=class s extends ke{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new U,u=new U,d=new U;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){let g=_/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){let g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,S=(i+1)*f+_;o.push(g,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},ta=class s extends ke{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],c=[],l=[],h=[],u=new U,d=new U,f=new U,_=new U,g=new U,m=new U,p=new U;for(let v=0;v<=n;++v){let y=v/n*r*Math.PI*2;S(y,r,o,t,f),S(y+.01,r,o,t,_),m.subVectors(_,f),p.addVectors(_,f),g.crossVectors(m,p),p.crossVectors(g,m),g.normalize(),p.normalize();for(let A=0;A<=i;++A){let b=A/i*Math.PI*2,w=-e*Math.cos(b),C=e*Math.sin(b);u.x=f.x+(w*p.x+C*g.x),u.y=f.y+(w*p.y+C*g.y),u.z=f.z+(w*p.z+C*g.z),c.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),l.push(d.x,d.y,d.z),h.push(v/n),h.push(A/i)}}for(let v=1;v<=n;v++)for(let y=1;y<=i;y++){let A=(i+1)*(v-1)+(y-1),b=(i+1)*v+(y-1),w=(i+1)*v+y,C=(i+1)*(v-1)+y;a.push(A,b,C),a.push(b,w,C)}this.setIndex(a),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(h,2));function S(v,y,A,b,w){let C=Math.cos(v),M=Math.sin(v),x=A/y*v,D=Math.cos(x);w.x=b*(2+D)*.5*C,w.y=b*(2+D)*M*.5,w.z=b*Math.sin(x)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},qn=class s extends ke{constructor(t=new ar(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,c=new U,l=new jt,h=new U,u=[],d=[],f=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(f,2));function g(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),S(),p()}function m(v){h=t.getPointAt(v/e,h);let y=o.normals[v],A=o.binormals[v];for(let b=0;b<=i;b++){let w=b/i*Math.PI*2,C=Math.sin(w),M=-Math.cos(w);c.x=M*y.x+C*A.x,c.y=M*y.y+C*A.y,c.z=M*y.z+C*A.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let y=1;y<=i;y++){let A=(i+1)*(v-1)+(y-1),b=(i+1)*v+(y-1),w=(i+1)*v+y,C=(i+1)*(v-1)+y;_.push(A,b,C),_.push(b,w,C)}}function S(){for(let v=0;v<=e;v++)for(let y=0;y<=i;y++)l.x=v/e,l.y=y/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new oy[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ye=class extends us{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dd,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ds=class extends ye{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new jt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Oo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function ay(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var cr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ml=class extends cr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kh,endingEnd:Kh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qh:r=t,a=2*e-n;break;case jh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Qh:o=t,c=2*n-e;break;case jh:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,S=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,v=(-1-f)*m+(1.5+f)*g+.5*_,y=f*m-f*g;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+S*o[l+A]+v*o[c+A]+y*o[u+A];return r}},Sl=class extends cr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},El=class extends cr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Yn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Oo(e,this.TimeBufferType),this.values=Oo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Oo(t.times,Array),values:Oo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ml(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ho:e=this.InterpolantFactoryMethodDiscrete;break;case Zc:e=this.InterpolantFactoryMethodLinear;break;case Ia:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ho;case this.InterpolantFactoryMethodLinear:return Zc;case this.InterpolantFactoryMethodSmooth:return Ia}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&ay(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ia,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[d+_]||g!==e[f+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Zc;var fs=class extends Yn{constructor(t,e,n){super(t,e,n)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Ho;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Yn{};bl.prototype.ValueTypeName="color";var Tl=class extends Yn{};Tl.prototype.ValueTypeName="number";var wl=class extends cr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)Gn.slerpFlat(r,0,o,l-a,o,l,c);return r}},ea=class extends Yn{InterpolantFactoryMethodLinear(t){return new wl(this.times,this.values,this.getValueSize(),t)}};ea.prototype.ValueTypeName="quaternion";ea.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends Yn{constructor(t,e,n){super(t,e,n)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Ho;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends Yn{};Al.prototype.ValueTypeName="vector";var Rl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],_=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}},cy=new Rl,Cl=class{constructor(t){this.manager=t!==void 0?t:cy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xr=class extends ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},lr=class extends Xr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ac=new ue,Ku=new U,Qu=new U,na=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ku.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ku),Qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qu),e.updateMatrixWorld(),ac.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ju=new ue,Ur=new U,cc=new U,Pl=class extends na{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new jt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ur),cc.copy(n.position),cc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(cc),n.updateMatrixWorld(),i.makeTranslation(-Ur.x,-Ur.y,-Ur.z),ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju)}},ms=class extends Xr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Il=class extends na{constructor(){super(new sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zi=class extends Xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.shadow=new Il}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Wl="\\[\\]\\.:\\/",ly=new RegExp("["+Wl+"]","g"),Xl="[^"+Wl+"]",hy="[^"+Wl.replace("\\.","")+"]",uy=/((?:WC+[\/:])*)/.source.replace("WC",Xl),dy=/(WCOD+)?/.source.replace("WCOD",hy),fy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),py=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),my=new RegExp("^"+uy+dy+fy+py+"$"),gy=["material","materials","bones","map"],Dl=class{constructor(t,e,n){let i=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ly,"")}static parseTrackName(t){let e=my.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);gy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Dl;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var s1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ll}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ll);var oa={high:{dpr:1.6,blocks:18,grid:5,bevel:3,fps:60},medium:{dpr:1.25,blocks:12,grid:4,bevel:2,fps:60},low:{dpr:1,blocks:8,grid:3,bevel:1,fps:30}};function Zr(){let s="auto";try{s=localStorage.getItem("portfolio-quality")||"auto"}catch{}if(oa[s])return s;let t=navigator.hardwareConcurrency||4,e=navigator.deviceMemory||4;return t<=2||e<=2?"low":innerWidth<900||e<=4?"medium":"high"}var $r=new U;function Dn(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;$r.copy(t),$r[n]=0,$r.normalize();let l=.5*o/(o+a),h=1-$r.angleTo(s)/c;return Math.sign($r[e])===1?h*l:a/(o+a)+l+l*(1-h)}var Ge=class extends pe{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new U,c=new U,l=new U(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,_=new U,g=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:_.set(1,0,0),d[p+0]=Dn(_,c,"z","y",r,n),d[p+1]=1-Dn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),d[p+0]=1-Dn(_,c,"z","y",r,n),d[p+1]=1-Dn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),d[p+0]=1-Dn(_,c,"x","z",r,t),d[p+1]=Dn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[p+0]=1-Dn(_,c,"x","z",r,t),d[p+1]=1-Dn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[p+0]=1-Dn(_,c,"x","y",r,t),d[p+1]=1-Dn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),d[p+0]=Dn(_,c,"x","y",r,t),d[p+1]=1-Dn(_,c,"y","x",r,e);break}}};var aa=class extends Fi{constructor(){super();let t=new pe;t.deleteAttribute("uv");let e=new ye({side:nn}),n=new ye,i=new ms(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Lt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Lt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Lt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new Lt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Lt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Lt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Lt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Lt(t,fr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Lt(t,fr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let _=new Lt(t,fr(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);let g=new Lt(t,fr(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);let m=new Lt(t,fr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Lt(t,fr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function fr(s){let t=new Ce;return t.color.setScalar(s),t}function ca({size:s=2,software:t=!1,orange:e}={}){let n=new Xt,i=new Xt,r=[],o=e||new ds({color:"#e96c0c",metalness:.48,roughness:.38,clearcoat:.08,clearcoatRoughness:.5,envMapIntensity:.7}),a=new ds({color:"#e96c0c",metalness:.5,roughness:.46,envMapIntensity:.65}),c=new ye({color:"#211e19",metalness:.5,roughness:.4}),l=t?new pe(1,1,1):new Ge(1,1,1,4,.0325),h=t?new Te(.91*s,.91*s):new Ge(.91*s,.91*s,.0125*s,3,.006*s),u=new pe(.006*s,.0225*s,.0015*s),d=new Lt(l,a);d.scale.setScalar(s),d.renderOrder=2,n.add(d,i);let f=new te(t?"#dc630c":"#e96c0c"),_=new te("#25211c");for(let[p,S]of[[0,0,1],[0,0,-1],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0]].entries()){let v=new Lt(h,o),y=new U(...S);if(v.renderOrder=3,v.quaternion.setFromUnitVectors(new U(0,0,1),y),v.position.copy(y).multiplyScalar(.504*s),i.add(v),r.push({part:v,normal:y}),p===0)for(let A=0;A<7;A++){let b=new Lt(u,c);b.renderOrder=4,b.position.set((-.325+A*.012)*s,-.325*s,.008*s),v.add(b)}}function g({fracture:p=0,spread:S=0}={}){let v=Be.clamp(p,0,1),y=Be.clamp(S,0,1);d.visible=i.visible=v<.8,d.scale.setScalar(s*Math.max(.001,1-v)),i.scale.setScalar(Math.max(.001,1-v)),r.forEach(({part:A,normal:b})=>A.position.copy(b).multiplyScalar((.504+y*.31)*s)),a.color.copy(f).lerp(_,y)}function m(){l.dispose(),h.dispose(),u.dispose(),a.dispose(),c.dispose(),e||o.dispose()}return{group:n,core:d,panelsGroup:i,panels:r,orange:o,update:g,dispose:m}}function la(s,t){let e=new rr(s),n=new aa,i=e.fromScene(n,.04);return t.environment=i.texture,e.dispose(),n.dispose(),i}var pr=class{constructor(t){if(this.canvas=t,this.context=t.getContext("2d",{alpha:!0}),!this.context)throw new Error("Canvas unavailable");this.capabilities={getMaxAnisotropy:()=>1},this.pixelRatio=1,this.mvp=new ue,this.normalMatrix=new ie,this.vector=new U,this.normal=new U,this.light=new U(-.5,.8,.9).normalize(),this.half=new U(-.2,.4,1).normalize()}setPixelRatio(t){this.pixelRatio=Math.min(t,1.25)}setSize(t,e){this.width=t,this.height=e,this.canvas.width=Math.round(t*this.pixelRatio),this.canvas.height=Math.round(e*this.pixelRatio)}render(t,e){let n=this.context,i=this.width,r=this.height,o=this.pixelRatio;n.setTransform(o,0,0,o,0,0),n.clearRect(0,0,i,r),t.updateMatrixWorld(),e.updateMatrixWorld(),e.matrixWorldInverse.copy(e.matrixWorld).invert();let a=[],c=new ue().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),l=(f,_,g=null)=>{if(!f.isMesh||f.userData.skipSoftware)return;let m=f.material;if(!m||m.opacity<.005)return;let p=f.geometry,S=p.attributes.position,v=p.attributes.uv,y=p.attributes.normal,A=p.index;if(!S)return;this.mvp.multiplyMatrices(c,_),this.normalMatrix.getNormalMatrix(_);let b=[];for(let x=0;x<S.count;x++)this.vector.fromBufferAttribute(S,x).applyMatrix4(this.mvp),b.push({x:(this.vector.x*.5+.5)*i,y:(-.5*this.vector.y+.5)*r,z:this.vector.z});let w=A?A.count:S.count,C=Math.max(0,p.drawRange.start||0),M=Math.min(w,C+p.drawRange.count);for(let x=C;x<M;x+=3){let D=A?A.getX(x):x,V=A?A.getX(x+1):x+1,z=A?A.getX(x+2):x+2,W=b[D],$=b[V],O=b[z];if(W.z>1||W.z<-1||$.z>1||O.z>1)continue;let lt=($.x-W.x)*(O.y-W.y)-($.y-W.y)*(O.x-W.x);if(m.side!==Mn&&lt>=0||Math.max(W.x,$.x,O.x)<0||Math.min(W.x,$.x,O.x)>i||Math.max(W.y,$.y,O.y)<0||Math.min(W.y,$.y,O.y)>r)continue;let Z=1,ht=0,rt=0;!m.isMeshBasicMaterial&&y&&(this.normal.set(y.getX(D)+y.getX(V)+y.getX(z),y.getY(D)+y.getY(V)+y.getY(z),y.getZ(D)+y.getZ(V)+y.getZ(z)).applyMatrix3(this.normalMatrix).normalize(),Z=.26+Math.max(0,this.normal.dot(this.light))*.9,ht=Math.pow(Math.max(0,this.normal.dot(this.half)),24)*.05,rt=Math.pow(1-Math.abs(this.normal.z),4)*.035);let xt=m.color.clone();g&&xt.multiply(g),xt.convertLinearToSRGB();let Rt=[xt.r,xt.g,xt.b].map((k,J)=>Math.round(Math.min(1,k*Z+ht*(J===0?1:J===1?.82:.63)+rt*(J===0?.9:J===1?.36:.16))*255)),X=null;if(m.map?.image&&v){let k=m.map.image;X={img:k,uv:[D,V,z].map(J=>({x:v.getX(J)*k.width,y:(1-v.getY(J))*k.height}))}}let N=null;if(!X&&p.type==="BoxGeometry"&&A&&x%6===0&&x+6<=M){N=[...new Set(Array.from({length:6},(at,gt)=>A.getX(x+gt)))].map(at=>b[at]);let J=N.reduce((at,gt)=>at+gt.x,0)/4,F=N.reduce((at,gt)=>at+gt.y,0)/4;N.sort((at,gt)=>Math.atan2(at.y-F,at.x-J)-Math.atan2(gt.y-F,gt.x-J)),x+=3}a.push({a:W,b:$,c:O,z:N?N.reduce((k,J)=>k+J.z,0)/4:(W.z+$.z+O.z)/3,color:`rgb(${Rt.join(",")})`,alpha:m.opacity,order:f.renderOrder,tex:X,quad:N})}},h=new ue,u=new ue,d=new te;t.traverseVisible(f=>{if(!(!f.isMesh||f.userData.skipSoftware))if(f.isInstancedMesh)for(let _=0;_<f.count;_++)f.getMatrixAt(_,h),u.multiplyMatrices(f.matrixWorld,h),f.instanceColor&&f.getColorAt(_,d),l(f,u,f.instanceColor?d:null);else l(f,f.matrixWorld)}),a.sort((f,_)=>f.order-_.order||_.z-f.z);for(let f of a){if(n.globalAlpha=f.alpha,f.tex){this.drawTexture(f);continue}n.fillStyle=f.color,n.strokeStyle=f.color,n.lineWidth=.5,n.beginPath();let _=f.quad||[f.a,f.b,f.c];n.moveTo(_[0].x,_[0].y);for(let g of _.slice(1))n.lineTo(g.x,g.y);n.closePath(),n.fill(),n.stroke()}n.globalAlpha=1}drawTexture(t){let e=this.context,[n,i,r]=t.tex.uv,[o,a,c]=[t.a,t.b,t.c],l=n.x*(i.y-r.y)+i.x*(r.y-n.y)+r.x*(n.y-i.y);if(Math.abs(l)<.001)return;let h=(o.x*(i.y-r.y)+a.x*(r.y-n.y)+c.x*(n.y-i.y))/l,u=(o.y*(i.y-r.y)+a.y*(r.y-n.y)+c.y*(n.y-i.y))/l,d=(o.x*(r.x-i.x)+a.x*(n.x-r.x)+c.x*(i.x-n.x))/l,f=(o.y*(r.x-i.x)+a.y*(n.x-r.x)+c.y*(i.x-n.x))/l,_=(o.x*(i.x*r.y-r.x*i.y)+a.x*(r.x*n.y-n.x*r.y)+c.x*(n.x*i.y-i.x*n.y))/l,g=(o.y*(i.x*r.y-r.x*i.y)+a.y*(r.x*n.y-n.x*r.y)+c.y*(n.x*i.y-i.x*n.y))/l;e.save(),e.beginPath();let m=(o.x+a.x+c.x)/3,p=(o.y+a.y+c.y)/3,S=v=>{let y=v.x-m,A=v.y-p,b=Math.hypot(y,A)||1;return[v.x+y/b*.7,v.y+A/b*.7]};e.moveTo(...S(o)),e.lineTo(...S(a)),e.lineTo(...S(c)),e.closePath(),e.clip(),e.transform(h,u,d,f,_,g),e.drawImage(t.tex.img,0,0),e.restore()}};function Sd(){if(!document.querySelector("#world"))return;let s=document.documentElement,t=document.querySelector(".art"),e=document.querySelector("#world"),n=document.querySelector(".portrait-opening")||document.querySelector("#journey"),i=document.querySelector("#portrait"),r=matchMedia("(prefers-reduced-motion: reduce)"),o=()=>r.matches||s.classList.contains("reduced-motion"),a=(N,k,J)=>{let F=Be.clamp((J-N)/(k-N),0,1);return F*F*(3-2*F)},c,l=!1;try{c=new or({canvas:e,alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{l=!0;try{c=new pr(e)}catch{s.dataset.renderer="static"}}let h=new Fi,u=new sr(-4,4,2.7,-2.7,.1,30);u.position.z=10;let d;c&&!l&&(c.outputColorSpace=ge,c.toneMapping=qr,c.toneMappingExposure=1,d=la(c,h)),h.add(new lr("#fff5e5","#635446",1.6));let f=new zi("#fff8ee",2.8);f.position.set(-3,6,5),h.add(f);let _=ca({size:1.85,software:l});h.add(_.group),_.group.rotation.set(.22,-.49,-.05),_.group.traverse(N=>{N.isMesh&&(N.material.transparent=!0)});let g=JSON.parse(document.querySelector("#samples").textContent),m=Zr(),p=l?448:m==="low"?224:m==="medium"||innerWidth<700?448:896,S=new pe(1,1,1),v=new ye({color:"#ffffff",metalness:.35,roughness:.48,transparent:!0}),y=new he(S,v,p);y.instanceMatrix.setUsage(Ze),y.frustumCulled=!1,h.add(y);let A=new U,b=new ae,w=new te,C=N=>{let k=Math.sin((N+1)*127.1)*43758.5453;return k-Math.floor(k)},M=Array.from({length:p},(N,k)=>{let J=g[Math.floor(k*g.length/p)],F=Math.ceil(Math.cbrt(p));return{start:new U((k%F/(F-1)-.5)*1.72,(Math.floor(k/F)%F/(F-1)-.5)*1.72,(Math.floor(k/F/F)/(F-1)-.5)*1.72).applyEuler(_.group.rotation),target:new U((J[0]-.5)*2.85,(.5-J[1])*3.8,0),color:new te(J[2]),phase:C(k)*Math.PI*2,radius:.8+C(k+9)*.9,height:(C(k+28)-.5)*3.5,speed:.45+C(k+7)*.4}}),x=0,D=0,V=0,z=0,W=!0,$=!0,O=[["Seu neg\xF3cio tem<br>um <em>problema?</em>","Eu transformo em<br>solu\xE7\xE3o digital.","01 / O PONTO DE PARTIDA"],["Separar para<br><em>entender.</em>","Cada parte revela<br>um caminho poss\xEDvel.","02 / INVESTIGA\xC7\xC3O"],["Conectar faz<br><em>tomar forma.</em>","O movimento encontra dire\xE7\xE3o.","03 / CONEX\xC3O"],["Por tr\xE1s da solu\xE7\xE3o,<br><em>Abra\xE3o.</em>","Abra\xE3o Lima Ribeiro<br>Desenvolvedor de solu\xE7\xF5es digitais.","04 / QUEM RESOLVE"]],lt=-1;function Z(){let N=x<.24?0:x<.57?1:x<.83?2:3;N!==lt&&(lt=N,document.querySelector("#headline").innerHTML=O[N][0],document.querySelector("#subline").innerHTML=O[N][1],document.querySelector("#chapter").textContent=O[N][2]),s.style.setProperty("--progress",x),i.style.opacity=a(.82,.97,x),i.setAttribute("aria-hidden",String(x<.83)),i.style.filter=`blur(${(1-a(.8,.96,x))*9}px)`,n.dataset.progress=x.toFixed(3),n.dataset.phase=String(N)}function ht(){let N=n.getBoundingClientRect();D=Be.clamp(-N.top/(N.height-innerHeight),0,1),$=!0}addEventListener("scroll",ht,{passive:!0});let rt=()=>{if(!c)return;let N=t.getBoundingClientRect();c.setPixelRatio(Math.min(devicePixelRatio||1,l?1:innerWidth<700?1.25:1.6)),c.setSize(N.width,N.height,!1),u.left=-2.7*N.width/N.height,u.right=2.7*N.width/N.height,u.updateProjectionMatrix(),$=!0,ht()},xt=new ResizeObserver(rt);xt.observe(t),rt();function Rt(N){if(V=requestAnimationFrame(Rt),!W||document.hidden)return;let k=Math.min((N-z)/1e3||.016,.06);if(k<(l?1/24:1/60)*.85||(z=N,x=o()?D:Be.damp(x,D,9,k),Math.abs(x-D)<1e-4&&(x=D),Z(),!c))return;if(o()){if(_.group.visible=x<.5,y.visible=!1,i.style.opacity=x<.5?0:1,!$)return;$=!1,c.render(h,u);return}let J=a(.12,.43,x),F=a(.53,.78,x),at=a(.83,.98,x);_.group.visible=x<.17,_.group.position.y=Math.sin(N*5e-4)*.025;let gt=1-a(.08,.17,x);_.group.traverse(It=>{It.isMesh&&(It.material.opacity=gt)}),y.visible=x>.17&&x<.985,v.opacity=a(.17,.23,x)*(1-at);let Ct=N*25e-5;if(y.visible)for(let It=0;It<p;It++){let St=M[It],Ot=St.phase+Ct*St.speed,q=Math.cos(Ot)*St.radius,Qt=St.height+Math.sin(Ot*1.65+St.phase)*.32,Wt=Math.sin(Ot)*.8;b.position.copy(St.start).lerp(A.set(q,Qt,Wt),J).lerp(St.target,F);let kt=Math.sin(N*.0017+St.phase)*.14*J*(1-F);b.position.y+=kt;let Dt=Be.lerp(.205,l?.1:.088,F);b.scale.setScalar(Dt*(1-at*.25)),b.rotation.set(Ot*(1-F),Ot*.8*(1-F),Ot*.6*(1-F)),b.updateMatrix(),y.setMatrixAt(It,b.matrix),w.set("#ed790e").lerp(St.color,a(.67,.86,x)),y.setColorAt(It,w)}y.instanceMatrix.needsUpdate=!0,y.instanceColor&&(y.instanceColor.needsUpdate=!0),c.render(h,u),s.dataset.renderer=l?"canvas":"webgl"}V=requestAnimationFrame(Rt);let X=new IntersectionObserver(([N])=>{W=N.isIntersecting,s.dataset.portraitVisible=String(W)});X.observe(n),r.addEventListener("change",()=>{$=!0}),addEventListener("pagehide",N=>{N.persisted||(cancelAnimationFrame(V),xt.disconnect(),X.disconnect(),_.dispose(),S.dispose(),v.dispose(),d?.dispose(),c?.dispose?.())}),ht(),Z()}var Ed=s=>Math.max(0,Math.min(1,s)),ki=(s,t,e)=>{let n=Ed((e-s)/(t-s));return n*n*(3-2*n)},$e=(s,t,e)=>s.map((n,i)=>n+(t[i]-n)*e),Hi=[[-2,.65,1.6],[2,.65,.35],[-.35,.65,-2.25]],_y=.43,xy=.61;function ql(s){let t=Ed(s),[e,n,i]=Hi,r=$e(e,n,.36),o=$e(n,i,.36),a=$e(i,e,.36),c,l=t<.35?0:t<.7?1:2;if(t<.2)c=$e(e,r,ki(0,.2,t));else if(t<.3)c=[...r];else if(t<.4){let u=ki(.3,.4,t);c=$e(r,n,u),c[1]+=Math.sin(u*Math.PI)*1.05}else if(t<.55)c=$e(n,o,ki(.4,.55,t));else if(t<.65)c=[...o];else if(t<.75){let u=ki(.65,.75,t);c=$e(o,i,u),c[1]+=Math.sin(u*Math.PI)*1.05}else c=$e(i,a,ki(.75,.9,t));let h=$e([0,.3,0],c,.24+ki(.12,.92,t)*.18);return{p:t,phase:l,actor:c,focus:h,blocked:t>=.2&&t<=.3||t>=.55&&t<=.65||t>=.9,yaw:-.45+t*1.3,zoom:1-ki(.08,.95,t)*.24}}function bd({scene:s,software:t=!1,quality:e="high"}){let n=new Xt;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=[],a=rt=>(i.add(rt),rt),c=rt=>(r.add(rt),rt),l=a(new pe(1,1,1)),h=t||e==="low"?l:a(new Ge(1,1,1,2,.045)),u=c(new ye({color:"#272824",metalness:.36,roughness:.57})),d=c(new ye({color:"#111310",metalness:.25,roughness:.72})),f=c(new ye({color:"#e1d6c3",metalness:.26,roughness:.48})),_=c(new ye({color:"#635341",metalness:.6,roughness:.46})),g=c(new Ce({color:"#fa760d",toneMapped:!1})),m=c(new Ce({color:"#7d3e14",toneMapped:!1})),p=c(new Ce({color:"#e8ceb0",toneMapped:!1}));function S(rt,xt,Rt=u,X=!1){let N=new Lt(X?h:l,Rt);return N.position.set(...rt),N.scale.set(...xt),n.add(N),N}function v(rt,xt,Rt,X){let N=new U(...rt),k=new U(...xt),J=k.clone().sub(N),F=S(N.clone().add(k).multiplyScalar(.5).toArray(),[Rt,J.length(),Rt],X);return F.quaternion.setFromUnitVectors(new U(0,1,0),J.normalize()),F}S([0,-.34,-.2],[6.8,.28,6.2],d,!0).renderOrder=-20,S([0,-.5,-.2],[7.05,.08,6.45],u).renderOrder=-21;let y=new he(l,u,t||e==="low"?32:80),A=new ae;n.add(y),y.renderOrder=-19;for(let rt=0;rt<y.count;rt++){let xt=(rt%10-4.5)*.64,Rt=(Math.floor(rt/10)-3.5)*.7;A.position.set(xt,-.16,Rt),A.scale.set(.61,.025,.67),A.updateMatrix(),y.setMatrixAt(rt,A.matrix)}let b=[];for(let rt=0;rt<3;rt++){let[xt,,Rt]=Hi[rt];S([xt,.04,Rt],[1.56,.34,1.5],u,!0),S([xt,.23,Rt],[1.38,.1,1.31],_),S([xt,.32,Rt],[1.26,.1,1.18],d,!0),S([xt,.39,Rt],[1.1,.045,.99],f,!0);for(let k=0;k<(t||e==="low"?3:6);k++)S([xt-.43+k*.17,.48,Rt-.38],[.055,.17,.16],u);S([xt,.5,Rt+.45],[.92,.035,.025],m);let X=S([xt,.505,Rt+.45],[.6,.04,.032],g);b.push(X);let N=[.9,1.35,1.08][rt];S([xt+.48,.4+N/2,Rt-.38],[.28,N,.3],u,!0),S([xt+.48,.42+N,Rt-.38],[.24,.025,.24],f);for(let k=0;k<3;k++)S([xt+.48,.65+k*.21,Rt-.212],[.15,.025,.012],k===rt?g:_)}let w=[],C=[];for(let rt=0;rt<3;rt++){let xt=Hi[rt],Rt=Hi[(rt+1)%3],X=new U(...Rt).sub(new U(...xt)).normalize(),N=new U(-X.z,0,X.x);for(let[at,gt]of[[.12,_y],[xy,.88]]){for(let St of[-1,1]){let Ot=new U(...$e(xt,Rt,at)).addScaledVector(N,St*.15),q=new U(...$e(xt,Rt,gt)).addScaledVector(N,St*.15);Ot.y=q.y=.39,v(Ot.toArray(),q.toArray(),.075,u),Ot.y=q.y=.438,v(Ot.toArray(),q.toArray(),.018,at===.12?g:m)}let Ct=$e(xt,Rt,at),It=$e(xt,Rt,gt);Ct[1]=It[1]=.35,v(Ct,It,.16,_)}for(let at of[.21,.78]){let gt=$e(xt,Rt,at);S([gt[0],.03,gt[2]],[.18,.6,.18],u)}let k=$e(xt,Rt,.48),J=S([k[0],.79,k[2]],[.035,.68,.52],u,!0);J.rotation.y=-Math.atan2(X.z,X.x),w.push(J);let F=S([k[0]-.018,.81,k[2]],[.018,.49,.025],g);F.rotation.y=J.rotation.y,C.push(F);for(let at=0;at<3;at++){let gt=$e(xt,Rt,.49+at*.035);S([gt[0],.2-at*.12,gt[2]],[.07,.07,.07],at===0?_:u)}}for(let[rt,xt,Rt]of[[-2.9,-1.1,.8],[2.8,1.9,.65],[1.6,-2.9,.5]]){S([rt,Rt/2-.14,xt],[.55,Rt,.7],u,!0);for(let X=0;X<3;X++)S([rt-.16+X*.16,Rt-.12,xt+.355],[.045,.12,.014],f)}for(let rt=0;rt<4;rt++)S([-2.6+rt*.16,-.135,2.6],[.07,.02,.14],rt===0?g:_);let M=t||e==="low"?12:24,x=new he(l,g,M);if(x.frustumCulled=!1,n.add(x),!t){let rt=document.createElement("canvas");rt.width=rt.height=64;let xt=rt.getContext("2d"),Rt=xt.createRadialGradient(32,32,0,32,32,32);Rt.addColorStop(0,"rgba(255,110,15,.32)"),Rt.addColorStop(1,"rgba(255,110,15,0)"),xt.fillStyle=Rt,xt.fillRect(0,0,64,64);let X=new Pe(rt);o.push(X);let N=c(new Ce({map:X,transparent:!0,depthWrite:!1,toneMapped:!1})),k=a(new Te(2.7,2.7));for(let J of Hi){let F=new Lt(k,N);F.position.set(J[0],-.115,J[2]),F.rotation.x=-Math.PI/2,n.add(F)}}let D=document.querySelector(".cinematic-flow"),V=[...D?.querySelectorAll(".film-act")||[]],z=[...D?.querySelectorAll("[data-island]")||[]],W=-1,$=-1,O=0,lt=new U;function Z(rt,xt,Rt){let X=ql(rt);n.visible=!0;let N=M/3;for(let k=0;k<M;k++){let J=Math.floor(k/N),F=J===X.phase,at=((F?xt*12e-5:0)+k%N/N)%1*.38,gt=Hi[J],Ct=Hi[(J+1)%3],It=$e(gt,Ct,at),St=ki(.3,.38,at),Ot=.065*(F?1:.35)*(1-St*.85);A.position.set(It[0],.52,It[2]),A.rotation.set(0,xt*2e-4+k,0),A.scale.set(Ot,.025,Ot),A.updateMatrix(),x.setMatrixAt(k,A.matrix)}return x.instanceMatrix.needsUpdate=!0,w.forEach((k,J)=>{k.position.y=.79+(J===X.phase?Math.sin(xt*.0018)*.025:0)}),C.forEach((k,J)=>{k.visible=J===X.phase,k.scale.y=X.blocked?.44+Math.sin(xt*.004)*.06:.28}),b.forEach((k,J)=>{k.scale.x=J===X.phase?.6+Math.sin(xt*.002)*.09:.3}),D&&(D.dataset.rendered="true",D.dataset.cinemaPhase=String(X.phase),D.dataset.cinemaProgress=X.p.toFixed(3),D.dataset.cinemaBlocked=String(X.blocked),W!==X.phase&&(W=X.phase,V.forEach((k,J)=>k.dataset.active=String(J===X.phase))),($!==rt||O!==Rt.aspect)&&(Rt.updateMatrixWorld(),$=rt,O=Rt.aspect,z.forEach((k,J)=>{let F=Hi[J];lt.set(F[0],1.95,F[2]).project(Rt),k.style.left=(lt.x*.5+.5)*100+"%",k.style.top=(-lt.y*.5+.5)*100+"%",k.style.opacity=lt.z<1&&Math.abs(lt.x)<.85?"1":"0"}))),X}function ht(){s.remove(n),i.forEach(rt=>rt.dispose()),r.forEach(rt=>rt.dispose()),o.forEach(rt=>rt.dispose())}return{group:n,update:Z,dispose:ht}}var Yl=(s,t=0,e=1)=>Math.max(t,Math.min(e,s)),ti=(s,t,e)=>{let n=Yl((e-s)/(t-s));return n*n*n*(n*(n*6-15)+10)};function ha(s,t=4){let e=Yl(Number.isFinite(s)?s:0),n=Yl((e-.055)/.91,0,1)*t,i=Math.min(t-1,Math.floor(n)),r=n-i;return{p:e,time:n,index:i,local:r,dock:ti(.19,.64,r),cameraDock:ti(.19,.64,r)*(1-ti(.87,1,r)),phase:r<.24?0:r<.7?1:2,entrance:ti(0,.075,e),finish:ti(.95,1,e),pulse:Math.sin(Math.PI*ti(.48,.76,r))}}function Td(s,t){let e=s-t,n=Math.max(0,-e),i=ti(0,.19,e),r=ti(.19,.64,e),o=n*1.75,a=[1.35*Math.cos(o)-1.5*Math.sin(o),3.1+Math.sin(n*1.2)*.65+n*.05,-1.25-n*.65],c=[-.1,3.12,1.35];return{t:e,dock:r,visible:e<.64,position:a.map((l,h)=>l+(c[h]-l)*i),scale:.79/(1+n*.12)+(1-.79/(1+n*.12))*i,yaw:(-.24-n*.08)*(1-i)+.09*i,roll:(.055+n*.025)*(1-i)}}function wd({scene:s,software:t=!1,quality:e="medium"}){let n=new Xt;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=new Set,a=t||e==="low",c=document.querySelector("[data-notebook-stage]"),l=c.querySelector(".notebook-world"),h=[...c.querySelectorAll("[data-project-screen]")],u=mt=>(i.add(mt),mt),d=(mt,yt=!1)=>{let Ft=yt?new Ce(mt):new ye({roughness:.38,metalness:.65,...mt});return r.add(Ft),Ft},f=d({color:"#53534e",roughness:.32,metalness:.85}),_=d({color:"#a8a79e",roughness:.23,metalness:.88}),g=d({color:"#20221f",roughness:.5}),m=d({color:"#10120f",roughness:.7}),p=d({color:"#ed791d",roughness:.3,metalness:.56}),S=d({color:"#f18c36",toneMapped:!1},!0),v=u(a?new pe(1,1,1):new Ge(1,1,1,2,.035)),y=u(new pe(1,1,1)),A=u(new Te(4.22,2.6375,a?8:12,a?5:8));function b(mt,yt,Ft,ot,G=n,R=!1){let st=new Lt(R?y:v,ot);return st.scale.set(mt,yt,Ft),G.add(st),st}function w(mt,yt,Ft){let ot=new he(v,yt,mt);return ot.frustumCulled=!1,Ft.add(ot),ot}let C=new ae;function M(mt,yt,Ft,ot,G,R,st,B){C.position.set(Ft,ot,G),C.rotation.set(0,0,0),C.scale.set(R,st,B),C.updateMatrix(),mt.setMatrixAt(yt,C.matrix)}let x=new Xt;n.add(x),b(4.88,.16,3.22,f,x).position.set(0,-.94,.72);let D=b(4.75,.045,3.08,_,x);D.position.set(0,-.847,.7),D.renderOrder=1;let V=b(4.65,.025,2.94,f,x);V.position.set(0,-.817,.7),V.renderOrder=2;let z=b(4.4,.018,1.49,m,x);z.position.set(0,-.796,.24),z.renderOrder=3;let W=w(65,g,x);W.renderOrder=4;for(let mt=0;mt<5;mt++)for(let yt=0;yt<13;yt++)M(W,mt*13+yt,-1.91+yt*.319,-.775,-.32+mt*.272,.278,.038,.222);let $=b(1.7,.024,.18,g,x);$.position.set(0,-.765,.98),$.renderOrder=4;let O=b(1.64,.012,.83,_,x);O.position.set(0,-.789,1.67),O.renderOrder=3;let lt=b(1.59,.015,.78,f,x);lt.position.set(0,-.777,1.67),lt.renderOrder=4;let Z=w(a?16:32,m,x);Z.renderOrder=4;for(let mt=0;mt<Z.count;mt++){let yt=mt<Z.count/2?-1:1,Ft=mt%(Z.count/2);M(Z,mt,yt*2.3,-.78,-.35+Ft*(1.35/(Z.count/2)),.022,.008,.035)}for(let mt of[-1.58,1.58])b(.76,.18,.2,g,x).position.set(mt,-.78,-.78);for(let mt of[-2.446,2.446])for(let yt of[.05,.5])b(.008,.05,.23,m,x).position.set(mt,-.94,yt);b(.065,.026,.016,S,x).position.set(2.14,-.91,2.337),b(1.1,.018,.014,g,x).position.set(0,-.87,2.34);let ht=new Xt;ht.position.set(0,-.76,-.78),ht.rotation.x=-.105,x.add(ht);let rt=b(4.88,3.05,.105,f,ht);rt.position.y=1.51,rt.renderOrder=5;let xt=b(4.74,2.92,.024,_,ht);xt.position.set(0,1.52,.065),xt.renderOrder=6;let Rt=b(4.68,2.86,.025,m,ht);Rt.position.set(0,1.52,.084),Rt.renderOrder=7;let X=d({color:"#171b16",toneMapped:!1},!0),N=document.createElement("canvas");N.width=768,N.height=480;let k=N.getContext("2d");k.fillStyle="#171b16",k.fillRect(0,0,768,480),k.fillStyle="#e6ded0",k.font="500 40px Arial",k.fillText("dev.abraao",66,209),k.fillStyle="#f58a2b",k.fillRect(68,244,48,2),k.font="10px Arial",k.fillText("O PROBLEMA ENCONTRA SEU CAMINHO.",68,282);let J=new Pe(N);J.colorSpace=ge,o.add(J),X.map=J,X.color.set("#ffffff");let F=new Lt(A,X);F.position.set(0,1.53,.105),F.renderOrder=8,ht.add(F);let at=new ae;at.position.copy(F.position),at.position.z-=.055,ht.add(at);let gt=b(.045,.023,.006,g,ht);gt.position.set(0,2.913,.103),gt.renderOrder=8;for(let mt=0;mt<9;mt++){let yt=b(.009,.025,.005,mt===8?p:_,ht);yt.position.set(-.09+mt*.021,.095,.104),yt.renderOrder=8}let Ct=d({color:"#e48639",transparent:!0,opacity:.08,toneMapped:!1},!0),It=b(4.35,.018,.016,Ct,ht);It.position.set(0,.175,.112),It.renderOrder=9;let St=document.createElement("canvas");St.width=St.height=64;let Ot=St.getContext("2d"),q=Ot.createRadialGradient(32,32,0,32,32,32);q.addColorStop(0,"#25221990"),q.addColorStop(1,"#25221900"),Ot.fillStyle=q,Ot.fillRect(0,0,64,64);let Qt=new Pe(St);o.add(Qt);let Wt=new Lt(u(new Te(6.4,4.5)),d({map:Qt,transparent:!0,depthWrite:!1},!0));Wt.rotation.x=-Math.PI/2,Wt.position.set(0,-1.125,.5),n.add(Wt),Wt.renderOrder=-7;let kt=h.map((mt,yt)=>{let Ft=new Xt;n.add(Ft);let ot=d({color:yt===0?"#d88034":"#a3a093",roughness:.32,metalness:.7}),G=b(4.34,2.76,.065,ot,Ft),R=b(4.27,2.69,.022,m,Ft);R.position.z=.039;let st=d({color:"#f4f0e8",toneMapped:!1},!0),B=new Lt(A,st);B.position.z=.055,Ft.add(B);let Q=b(.22,.06,.016,p,Ft);return Q.position.set(-1.9,1.405,.01),{board:Ft,frame:G,inset:R,face:B,tab:Q,faceMat:st,border:ot,texture:null,el:mt}}),Dt=0;n.traverse(mt=>{mt.isMesh&&Dt++}),c.dataset.notebookMeshes=String(Dt);let qt=new U,Ut=new Gn,L=new Gn,T=new Cn,et=new U,vt=new U,wt=new U,pt=-1,ft=!1,Mt=!1,bt=0;function zt(mt,yt){let Ft=document.createElement("canvas");Ft.width=a?768:1024,Ft.height=Ft.width/1.6;let ot=Ft.getContext("2d");if(yt!=="nexa")ot.drawImage(mt,0,0,mt.width,Math.min(mt.height,mt.width/1.6),0,0,Ft.width,Ft.height);else{let st=function(B,Q){let[I,E,Y]=B,[it,H,j]=Q,Tt=I[0]*(E[1]-Y[1])+E[0]*(Y[1]-I[1])+Y[0]*(I[1]-E[1]),Pt=K=>[(it[K]*(E[1]-Y[1])+H[K]*(Y[1]-I[1])+j[K]*(I[1]-E[1]))/Tt,(it[K]*(Y[0]-E[0])+H[K]*(I[0]-Y[0])+j[K]*(E[0]-I[0]))/Tt,(it[K]*(E[0]*Y[1]-Y[0]*E[1])+H[K]*(Y[0]*I[1]-I[0]*Y[1])+j[K]*(I[0]*E[1]-E[0]*I[1]))/Tt],Ht=Pt(0),At=Pt(1);ot.save(),ot.beginPath(),ot.moveTo(...it),ot.lineTo(...H),ot.lineTo(...j),ot.closePath(),ot.clip(),ot.transform(Ht[0],At[0],Ht[1],At[1],Ht[2],At[2]),ot.drawImage(mt,0,0),ot.restore()},R=[[188,38],[735,38],[749,375],[177,375]].map(([B,Q])=>[B/1100*mt.width,Q/434*mt.height]);st([R[0],R[1],R[2]],[[0,0],[Ft.width,0],[Ft.width,Ft.height]]),st([R[0],R[2],R[3]],[[0,0],[Ft.width,Ft.height],[0,Ft.height]])}let G=new Pe(Ft);return G.colorSpace=ge,G.anisotropy=a?1:4,o.add(G),G}function ct(){Mt||ft||(Mt=!0,kt.forEach(mt=>{let yt=new Image;yt.decoding="async",yt.onload=()=>{ft||(mt.texture=zt(yt,mt.el.dataset.projectKind),mt.faceMat.map=mt.texture,mt.faceMat.needsUpdate=!0,c.dataset.screensReady=String(++bt))},yt.onerror=()=>{c.dataset.screenError="true"},yt.src=mt.el.dataset.projectScreen}))}let _t=new IntersectionObserver(mt=>{mt.some(yt=>yt.isIntersecting)&&(ct(),_t.disconnect())},{rootMargin:"1200px"});_t.observe(l);function Nt(mt,yt,Ft){ct();let ot=ha(mt,kt.length),G=innerWidth<=700;n.rotation.y=.07-Math.sin(ot.p*Math.PI)*.07,n.position.y=-.12+ot.entrance*.12,x.rotation.y=Math.sin(ot.local*Math.PI)*.025,ht.rotation.x=-.105-Math.sin(ot.local*Math.PI)*.025,s.updateMatrixWorld(!0),at.getWorldPosition(et),at.getWorldQuaternion(Ut);let R=.012*Math.sin(yt*75e-5);kt.forEach((B,Q)=>{let I=Td(ot.time,Q);if(B.board.visible=I.visible,!I.visible)return;let E=30-(Q-ot.index)*4;B.frame.renderOrder=E,B.inset.renderOrder=E+1,B.face.renderOrder=E+2,B.tab.renderOrder=E+2,qt.set(...I.position),qt.y+=R*(1-I.dock),G&&(qt.x*=.72);let Y=n.worldToLocal(et.clone());vt.copy(qt).add(new U(-.4,.2,0)),wt.copy(Y).add(new U(.25,.72,1.1));let it=I.dock,H=1-it;B.board.position.copy(qt).multiplyScalar(H**3).addScaledVector(vt,3*H*H*it).addScaledVector(wt,3*H*it*it).addScaledVector(Y,it**3),T.set(.035,I.yaw,I.roll),L.setFromEuler(T);let j=n.quaternion.clone().invert().multiply(Ut);B.board.quaternion.copy(L).slerp(j,it),B.board.scale.setScalar(I.scale+(1-I.scale)*it);let Tt=1-ti(.76,1,it);B.frame.material.transparent=!0,B.frame.material.opacity=Tt,B.inset.visible=Tt>.01,B.tab.visible=Tt>.2});let st=ot.dock>.998?ot.index:Math.max(0,ot.index-1);return kt[st].texture&&(pt!==st||F.material.map!==kt[st].texture)&&(F.material=kt[st].faceMat,pt=st),ot.index===0&&ot.dock<=.998&&(F.material=X,pt=-1),F.visible=!0,Ct.opacity=.12+ot.pulse*.7,l.dataset.rendered="true",c.dataset.docking=ot.dock.toFixed(3),ot}return{group:n,update:Nt,dispose(){ft=!0,_t.disconnect(),s.remove(n),n.traverse(mt=>{mt.isInstancedMesh&&mt.dispose()}),i.forEach(mt=>mt.dispose()),r.forEach(mt=>mt.dispose()),o.forEach(mt=>mt.dispose())}}}var Zl=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0));function yy(s,t=6){let e=Zl(s),n=Math.max(1,Math.floor(t)||1),i=Math.min(n-1,Math.floor(e*n)),r=e===1?1:e*n-i;return{index:i,local:r,beat:r<.26?0:r<.53?1:2,builds:[-.1,.26,.53].map(o=>{let a=Zl((r-o)/.18);return a*a*(3-2*a)})}}var Ln=(s,t,e)=>{let n=Zl((e-s)/(t-s));return n*n*n*(n*(n*6-15)+10)};function Ad(s){let t=yy(s),e=t.local,n=t.index<5?Ln(.84,1,e):0,i=t.index+n,r=Ln(.04,.76,e);return{...t,travel:n,focus:i,x:i*14,yaw:(.44-r*.68)*(1-n)+.44*n,zoom:(1-Ln(.1,.51,e)*.17)*(1-n)+n,assemble:Ln(.025,.43,e),connect:Ln(.25,.69,e),resolve:Ln(.52,.78,e),copyOpacity:Ln(0,.07,e)*(1-Ln(.84,.98,e))}}function Rd({scene:s,software:t=!1,quality:e="medium"}){let n=new Xt;n.visible=!1,s.add(n);let i=new Set,r=new Set,o=new Set,a=[],c=t||e==="low",l=document.querySelector(".solutions-world"),h=X=>(i.add(X),X),u=(X,N=!1)=>{let k=N?new Ce(X):new ye({roughness:.37,metalness:.68,...X});return r.add(k),k},d=u({color:"#454b40"}),f=u({color:"#b6a382",roughness:.28,metalness:.8}),_=u({color:"#171e18",roughness:.6}),g=u({color:"#d1742b",roughness:.3,metalness:.75}),m=u({color:"#ffa04a",toneMapped:!1},!0),p=u({color:"#b98245",toneMapped:!1,transparent:!0,opacity:.25},!0),S=h(c?new pe(1,1,1):new Ge(1,1,1,2,.045)),v=h(new Te(1,1,c?2:8,c?2:5)),y=h(new Pn(1,c?10:18,c?7:12)),A=h(new In(1,.012,c?3:5,c?32:64)),b=new ae;function w(X,N,k,J,F){let at=new Lt(S,J);return at.scale.set(X,N,k),F.add(at),at}function C(X,N,k=p){let J=new Lt(A,k);return J.scale.setScalar(X),N.add(J),J}function M(X,N,k,J,F,at,gt,Ct){b.position.set(k,J,F),b.scale.set(at,gt,Ct),b.rotation.set(0,0,0),b.updateMatrix(),X.setMatrixAt(N,b.matrix)}function x(X,N,k,J,F,at,gt){X.fillStyle=gt,X.beginPath(),X.roundRect(N,k,J,F,at),X.fill()}function D(X,N,k,J,F=18,at="#e6e0d0",gt=!1){X.fillStyle=at,X.font=`${gt?700:400} ${F}px Arial`,X.fillText(N,k,J)}function V(X,N,k,J,F="#464b3f"){X.fillStyle=F,X.fillRect(N,k,J,1)}function z(X,N,k=""){let J=document.createElement("canvas");J.width=X==="main"?1024:640,J.height=X==="main"?640:380;let F=J.getContext("2d"),at=J.width,gt=J.height;if(x(F,0,0,at,gt,16,"#162019"),F.strokeStyle="#77674c",F.lineWidth=2,F.strokeRect(1,1,at-2,gt-2),X==="main"){x(F,0,0,at,53,12,"#293025"),[0,1,2].forEach(St=>{F.fillStyle=St?"#766b56":"#ef984b",F.beginPath(),F.arc(29+St*19,27,4,0,7),F.fill()}),x(F,350,17,320,22,5,"#151e17"),D(F,"seunegocio.com.br",440,33,12,"#aea891"),D(F,"seu.neg\xF3cio",55,108,28,"#f1ebdc",!0),D(F,"UM PR\xD3XIMO PASSO.",56,163,12,"#e79b58"),D(F,"Uma boa ideia",55,231,48,"#f3eddf",!0),D(F,"ganha presen\xE7a.",55,287,48,"#ed9b52",!0),D(F,"Clareza para entender. Um caminho para agir.",57,335,18,"#a9b19f"),x(F,55,370,235,48,7,"#de883d"),D(F,"Vamos conversar  \u2197",81,401,18,"#152018",!0);let It=F.createLinearGradient(660,150,850,440);It.addColorStop(0,"#d4914b"),It.addColorStop(1,"#694324"),F.fillStyle=It,F.beginPath(),F.arc(789,282,125,0,7),F.fill(),F.strokeStyle="#f2c99b",F.lineWidth=2,F.beginPath(),F.ellipse(789,282,145,39,-.45,0,7),F.stroke();for(let St=0;St<3;St++)x(F,55+St*310,481,285,110,8,"#263027"),D(F,["Seu neg\xF3cio","Sua hist\xF3ria","Seu pr\xF3ximo passo"][St],75+St*310,520,18,"#e5deca",!0),V(F,75+St*310,545,185,"#7c785e"),V(F,75+St*310,561,140,"#535d4b")}else if(X==="dashboard"){x(F,0,0,at,gt,12,"#e8e2d4"),x(F,0,0,125,gt,12,"#1d291f"),D(F,"opera\xE7\xE3o",18,40,21,"#f0e8d5",!0),["Vis\xE3o geral","Clientes","Pedidos","Relat\xF3rios"].forEach((It,St)=>{St||x(F,11,72,103,30,4,"#d58a43"),D(F,It,23,93+St*53,13,St?"#aab29d":"#122015",!St)}),D(F,"A rotina, conectada.",151,44,25,"#202b20",!0),["CLIENTES","PEDIDOS","EQUIPE"].forEach((It,St)=>{x(F,150+St*158,68,145,68,6,"#d6d4c3"),D(F,It,164+St*158,91,10,"#75745e"),D(F,["Organizados","Em dia","No mesmo fluxo"][St],164+St*158,117,14,"#293226",!0)}),D(F,"PEDIDOS EM ANDAMENTO",153,170,11,"#686b55");for(let It=0;It<4;It++){let St=204+It*43;D(F,["Pedido recebido","Dados conferidos","Em prepara\xE7\xE3o","Pronto para seguir"][It],153,St,15,"#343c2e"),x(F,486,St-17,121,24,4,It===3?"#c99155":"#d8d5c6"),D(F,["Recebido","Conferido","Em andamento","Conclu\xEDdo"][It],498,St,10,"#5c492f"),V(F,153,St+14,454,"#c8c6b5")}}else D(F,"dev.abraao / SOLU\xC7\xD5ES",34,42,11,"#b6a480"),V(F,34,63,at-68,"#605c46"),D(F,N,34,128,X==="module"?N.length>18?35:52:N.length>24?24:30,"#f1e7d2",!0),D(F,k,34,169,16,"#a8b19c"),X==="code"?["quando uma mensagem chegar","  \u2192 conferir os dados","  \u2192 registrar o pedido","  \u2192 enviar a confirma\xE7\xE3o"].forEach((It,St)=>D(F,It,35,218+St*30,16,St===3?"#f0a05a":"#a7b99d")):X==="answer"?(x(F,32,200,at-64,128,7,"#29392a"),D(F,"PR\xD3XIMO PASSO",49,229,11,"#e5a15e"),D(F,"Organizar a informa\xE7\xE3o.",49,267,23,"#f0e6ce",!0),D(F,"A decis\xE3o continua com voc\xEA.",49,300,15,"#acb89b")):X==="module"?[0,1,2].forEach(It=>{x(F,33,204+It*43,at-66,31,5,It===2?"#b97936":"#304330"),D(F,["CONTEXTO","FLUXO","PRONTO PARA SEGUIR"][It],49,225+It*43,12,It===2?"#fff1d3":"#bfc6ae")}):(x(F,33,207,at-66,89,7,"#283a2b"),D(F,"Informa\xE7\xE3o conectada",50,243,20,"#dcdcc4",!0),D(F,"Tudo segue no mesmo caminho.",50,274,15,"#a6b79b"),F.fillStyle="#e99546",F.fillRect(34,gt-29,at-68,3));let Ct=new Pe(J);return Ct.colorSpace=ge,Ct.anisotropy=c?1:4,o.add(Ct),Ct}function W(X,N,k,J,F,at){let gt=new Xt;at.add(gt);let Ct=w(X+.1,N+.1,.1,f,gt);Ct.renderOrder=5;let It=w(X+.045,N+.045,.04,_,gt);It.position.z=.065,It.renderOrder=6;let St=u({color:"#ffffff",map:z(k,J,F),toneMapped:!1},!0),Ot=new Lt(v,St);Ot.scale.set(X,N,1),Ot.position.z=.092,Ot.renderOrder=8,gt.add(Ot);let q=w(.45,.025,.035,m,gt);return q.position.set(-X/2+.36,N/2+.07,.03),q.renderOrder=9,gt}function $(X,N,k,J=2.12){return W(J,J*.59375,"module",X,N,k)}function O(X,N,k,J=.6){let F=new U(...X),at=new U(...N),gt=F.clone().lerp(at,.5);gt.z+=J,gt.y+=.24;let Ct=new ar(F,gt,at),It=new Lt(h(new qn(Ct,c?12:24,.018,c?3:5,!1)),g);It.renderOrder=2,k.add(It);let St=new Lt(y,m);return St.scale.setScalar(.065),k.add(St),{mesh:It,path:Ct,packet:St}}function lt(X){let N=new Xt;N.position.x=X*14,n.add(N);let k=w(9,.07,5,_,N);k.position.set(0,-1.75,-.1),k.renderOrder=-10,w(8.3,.012,.035,p,N).position.set(0,-1.7,2.2);let F=C(2.9,N,p);F.rotation.x=-Math.PI/2,F.position.y=-1.69,F.renderOrder=-5;let at=new he(S,f,c?12:24);N.add(at);for(let Ct=0;Ct<at.count;Ct++){let It=Ct/at.count*Math.PI*2;M(at,Ct,Math.cos(It)*3.02,-1.69,Math.sin(It)*2.1,.035,.018,.1)}let gt={g:N,items:[],wires:[],rings:[F]};return a.push(gt),gt}function Z(X,N,k,J,F,at=0,gt=0,Ct=0){return N.userData.pose={x:k,y:J,z:F,order:at,rx:gt,ry:Ct},X.items.push(N),N}{let X=lt(0),N=W(5.55,3.47,"main","","",X.g);Z(X,N,-.35,.15,-.35,0,0,.08);let k=W(1.05,2.1,"module","Seu neg\xF3cio","Feito para conectar.",X.g);Z(X,k,2.35,-.56,1.1,2,-.03,-.18);let J=$("PRESEN\xC7A","Um caminho claro para o cliente.",X.g,2.25);Z(X,J,-2.2,1.58,.95,1,.02,.13);let F=O([1.5,-1.5,.1],[2.35,-.7,1],X.g,.2);X.wires.push(F)}{let X=lt(1),N=W(5.65,3.36,"dashboard","","",X.g);Z(X,N,0,.2,-.2,0,0,-.08);let k=$("PEDIDO ORGANIZADO","Do atendimento \xE0 opera\xE7\xE3o.",X.g,2.5);Z(X,k,-1.95,-.63,1.25,1,.05,.15);let J=$("EQUIPE CONECTADA","A mesma informa\xE7\xE3o para todos.",X.g,2.35);Z(X,J,2.2,1.28,.65,2,-.02,-.15),X.wires.push(O([-2,-.9,1.1],[1.3,-1.1,.15],X.g,.35))}{let X=lt(2),N=[[-2.35,.85,-.35],[-.6,1.15,-.85],[1.6,.55,-.25],[2.15,-1,1.15]];["MENSAGEM","CONFERIR","REGISTRAR","CONFIRMAR"].forEach((J,F)=>{let at=$(J,["O cliente inicia.","O contexto \xE9 verificado.","O pedido encontra seu lugar.","A resposta chega ao cliente."][F],X.g,1.85);Z(X,at,...N[F],F,.02,(F-1.5)*-.09),F&&X.wires.push(O(N[F-1],N[F],X.g,.7))});let k=W(2.75,1.64,"code","UMA REGRA. UM CAMINHO.","O trabalho segue entre as etapas.",X.g);Z(X,k,-1.5,-.95,1.3,2,.03,.18)}{let X=lt(3),N=new Lt(h(new Xn(.68,c?0:1)),g);X.g.add(N),Z(X,N,0,.15,.1,0);for(let F=0;F<3;F++){let at=C(1.05+F*.22,X.g,F===1?m:p);at.rotation.set(.4+F*.8,.5+F*.6,.1),X.rings.push(at)}let k=[[-2.1,.9,-.15],[1.8,1.22,-.65],[-2.05,-.95,.85]];["DOCUMENTOS","HIST\xD3RICO","SEU PROCESSO"].forEach((F,at)=>{let gt=$(F,"Informa\xE7\xE3o com o contexto certo.",X.g,1.75);Z(X,gt,...k[at],at,.02,at===1?-.15:.16),X.wires.push(O(k[at],[0,.15,.1],X.g,.5))});let J=W(2.85,1.69,"answer","INFORMA\xC7\xC3O QUE AJUDA A AGIR","Uma resposta nasce do contexto.",X.g);Z(X,J,1.65,-.85,1.1,3,0,-.14)}{let X=lt(4),N=new Xt;X.g.add(N),Z(X,N,0,0,.1,0),w(1.2,1.75,.65,d,N),w(1.29,1.84,.12,f,N).position.z=-.27,$("CONECTAR","A informa\xE7\xE3o continua.",N,1.6).position.set(0,0,.43);for(let at=0;at<5;at++)w(.045,.13,.03,m,N).position.set(-.43+at*.215,-1.02,.36);let J=[[-2.5,1,-.65],[.15,1.8,-.85],[2.6,.95,-.45],[-2.5,-.9,.9],[.15,-1.45,1.2],[2.55,-.85,1]];["ATENDIMENTO","CLIENTES","VENDAS","FINANCEIRO","PEDIDOS","ESTOQUE"].forEach((at,gt)=>{let Ct=$(at,"Dados no mesmo fluxo.",X.g,1.62);Z(X,Ct,...J[gt],1+gt*.2,0,(gt%3-1)*-.16),X.wires.push(O([0,.05,.28],J[gt],X.g,.7))});let F=C(2.25,X.g,p);F.rotation.x=1.1,F.position.set(0,-.1,0),X.rings.push(F)}{let X=lt(5);w(5.6,3.5,.1,d,X.g).position.set(0,.15,-.55);let k=[[-1.73,.64,0],[.2,.64,.1],[2.02,.64,.05],[-1.35,-.83,.55],[1.25,-.83,.65]];["ATENDIMENTO","OPERA\xC7\xC3O","AUTOMA\xC7\xC3O","INFORMA\xC7\xC3O","EVOLU\xC7\xC3O"].forEach((F,at)=>{let gt=at<3?1.65:2.35,Ct=$(F,"Constru\xEDdo para o seu cen\xE1rio.",X.g,gt);Z(X,Ct,...k[at],at*.6,0,(at-2)*.025)});let J=$("SEU NEG\xD3CIO","Cada parte tem um motivo.",X.g,2.3);Z(X,J,.75,1.7,1.05,3,-.04,-.13);for(let F=0;F<4;F++)X.wires.push(O(k[F],k[F+1],X.g,.15))}let ht=new he(y,p,c?18:40);n.add(ht);let rt=new U,xt=0;n.traverse(X=>{X.isMesh&&xt++}),l.dataset.cinemaMeshes=xt,a.forEach(X=>X.rings.forEach(N=>N.userData.rest=N.rotation.toArray().slice(0,3)));function Rt(X,N,k){let J=Ad(X),F=innerWidth<=700,at=k.aspect,gt=new U(J.x,.1,.05),It=Math.max(6.25,(F?8.5:8.1)/at)*(1-(1-J.zoom)*.7)/(2*Math.tan(Be.degToRad(k.fov/2))),St=J.yaw*(F?.7:1);k.position.set(Math.sin(St)*It,1.25+It*.12,Math.cos(St)*It).add(gt),k.lookAt(gt),k.updateProjectionMatrix(),a.forEach((Ot,q)=>{if(Ot.g.visible=Math.abs(q-J.focus)<1.06,!Ot.g.visible)return;let Qt=q===J.index?J.local:q>J.index?0:1,Wt=Ln(.025,.43,Qt),kt=Ln(.25,.69,Qt);Ot.items.forEach((Dt,qt)=>{let Ut=Dt.userData.pose,L=Ln(.02+Ut.order*.045,.43+Ut.order*.045,Qt),T=1-L;Dt.position.set(Ut.x+T*(qt%2?2.3:-2.3),Ut.y+T*(1.45+Ut.order*.2),Ut.z-T*(2.6+Ut.order*.3)),Dt.rotation.set(Ut.rx+T*.18,Ut.ry+T*(qt%2?.5:-.5),T*(qt%2?.09:-.09)),Dt.scale.setScalar(.76+L*.24),q===3&&qt===0&&(Dt.rotation.y=N*12e-5,Dt.rotation.z=N*8e-5)}),Ot.wires.forEach((Dt,qt)=>{Dt.mesh.scale.setScalar(Math.max(.001,kt)),Dt.mesh.visible=kt>.02,Dt.packet.visible=kt>.7,Dt.path.getPoint((N*18e-5+qt*.17)%1,rt),Dt.packet.position.copy(rt),Dt.packet.scale.setScalar(.045+J.resolve*.025)}),Ot.rings.forEach((Dt,qt)=>{if(qt){let Ut=Dt.userData.rest;Dt.rotation.set(Ut[0],Ut[1]+N*4e-5,Ut[2]+N*6e-5)}})});for(let Ot=0;Ot<ht.count;Ot++){let q=J.x+Math.sin(Ot*23.4)*5.5,Qt=Math.sin(Ot*5.1+N*1e-4)*2.4,Wt=Math.cos(Ot*6.8)*3.8-1;M(ht,Ot,q,Qt,Wt,.012,.012,.012)}return ht.instanceMatrix.needsUpdate=!0,l.dataset.rendered="true",l.dataset.cameraShot=J.index,l.dataset.cameraTravel=J.travel.toFixed(3),J}return{group:n,update:Rt,dispose(){s.remove(n),n.traverse(X=>{X.isInstancedMesh&&X.dispose()}),i.forEach(X=>X.dispose()),r.forEach(X=>X.dispose()),o.forEach(X=>X.dispose())}}}var Cd=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0)),$l=s=>{let t=Cd(s);return t*t*(3-2*t)};function Pd(s,t=0){let e=Cd(s),n=Math.max(0,Number.isFinite(t)?t:0)*.001;return{p:e,t:n,open:$l(e/.42),plan:$l((e-.18)/.65),finish:$l((e-.68)/.3),yaw:-.24+.6*Math.sin(e*Math.PI*.85),lift:Math.sin(n*.65)*.045,flow:n*.16%1,phase:Math.min(2,Math.floor(e*3))}}var vy=s=>Math.max(0,Math.min(1,s)),gs=s=>{let t=vy(s);return t*t*(3-2*t)},Jl=(s,t,e)=>gs((s-t)/.035)*(1-gs((s-e+.035)/.035));function Id({parent:s,low:t,geo:e,mat:n,textures:i,boxGeo:r,planeGeo:o,palette:a}){let{graphite:c,black:l,copper:h,silver:u,ceramic:d,light:f,pale:_,violet:g}=a,m=n({color:"#163b30",roughness:.65,metalness:.23}),p=n({color:"#373a37",roughness:.63,metalness:.35}),S=n({color:"#83728d",roughness:.15,metalness:.75}),v=n({color:"#202823",roughness:.14,metalness:.7}),y=e(new In(1,.075,t?3:6,t?20:48)),A=e(new Bi(1,1,1,t?12:32)),b=e(new Xn(1,t?0:1)),w=[],C=[],M=[],x=new ae,D=new U,V=new U,z=new U,W=(E=0,Y=0,it=0)=>new U(E,Y,it),$=(E,Y,it,H,j,Tt,Pt=0)=>({x:E,y:Y,z:it,w:H,h:j,d:Tt,rz:Pt});function O(E,Y,it,H,j,Tt=0,Pt=0,Ht=0){let At=new Lt(r,H);return At.scale.set(E,Y,it),At.position.set(Tt,Pt,Ht),At.renderOrder=5,j.add(At),At}function lt(E,Y,it,H,j=0,Tt=0,Pt=0){let Ht=new Lt(A,it);return Ht.rotation.x=Math.PI/2,Ht.scale.set(E,Y,E),Ht.position.set(j,Tt,Pt),Ht.renderOrder=5,H.add(Ht),Ht}function Z(E,Y,it,H=0,j=0,Tt=0){let Pt=new Lt(y,Y);return Pt.scale.setScalar(E),Pt.position.set(H,j,Tt),Pt.renderOrder=5,it.add(Pt),Pt}function ht(E,Y,it,H=r){let j=new he(H,Y,E.length);return j.renderOrder=7,it.add(j),E.forEach((Tt,Pt)=>{x.position.set(Tt.x,Tt.y,Tt.z),x.rotation.set(0,0,Tt.rz||0),x.scale.set(Tt.w,Tt.h,Tt.d),x.updateMatrix(),j.setMatrixAt(Pt,x.matrix)}),j}function rt(E,Y,it,H,j=[0,0,0],Tt=s){let Pt=new Xt;Pt.name=`contact-${E}`,Pt.position.copy(Y),Tt.add(Pt);let Ht={g:Pt,home:Y,destination:it,start:H,rotation:j};return w.push(Ht),Pt}function xt(E,Y,it){let H=document.createElement("canvas");H.width=E,H.height=Y;let j=H.getContext("2d");it(j,E,Y);let Tt=new Pe(H);return Tt.colorSpace=ge,Tt.anisotropy=t?1:4,i.add(Tt),Tt}function Rt(E,Y,it,H,j,Tt,Pt){let Ht=new Lt(o,n({map:it,color:"#ffffff",toneMapped:!1},!0));return Ht.scale.set(E,Y,1),Ht.position.set(j,Tt,Pt),Ht.renderOrder=6,H.add(Ht),Ht}let X=xt(512,512,(E,Y,it)=>{E.fillStyle="#14372c",E.fillRect(0,0,Y,it),E.strokeStyle="#719275",E.lineWidth=2;for(let H=0;H<52;H++){let j=H%4,Tt=Math.floor(H/4),Pt=28+Tt*35,Ht=25+Tt*35;E.beginPath(),j<2?(E.moveTo(Pt,j?0:it),E.lineTo(Pt,j?60:430),E.lineTo(Pt+18,j?78:412),E.lineTo(Pt+18,256+Tt%3*25)):(E.moveTo(j===2?0:Y,Ht),E.lineTo(j===2?65:440,Ht),E.lineTo(j===2?85:420,Ht+20),E.lineTo(256+Tt%3*18,Ht+20)),E.stroke()}E.fillStyle="#d8b77c";for(let H=0;H<90;H++)E.beginPath(),E.arc(18+H*67%475,17+H*101%475,2.3,0,Math.PI*2),E.fill();E.fillStyle="#b9c4a7",E.font="13px Manrope, Arial",E.fillText("AB / LOGIC ASSEMBLY",22,487)}),N=xt(384,512,(E,Y,it)=>{E.fillStyle="#30352f",E.fillRect(0,0,Y,it),E.fillStyle="#e7dfc9",E.font="600 30px Manrope, Arial",E.fillText("Li-ion",31,71),E.font="15px Manrope, Arial",["RECHARGEABLE CELL","POWER / 01","NOMINAL 3.85 V","ILLUSTRATIVE ASSEMBLY"].forEach((H,j)=>E.fillText(H,32,111+j*28)),E.strokeStyle="#9da28f",E.lineWidth=2,E.strokeRect(33,277,98,49),E.fillStyle="#9da28f",E.fillRect(131,290,8,21),E.fillRect(42,286,78,31),E.font="34px Manrope, Arial",E.fillText("+",294,72),E.fillText("\u2212",294,119),E.fillStyle="#c4b998";for(let H=0;H<49;H++)E.fillRect(32+H*6.4,374,1+H%3,47+H%4*3);E.font="12px Manrope, Arial",E.fillText("ENERGY MODULE  /  AB-01",32,465)}),k=xt(256,256,(E,Y,it)=>{E.fillStyle="#323a38",E.fillRect(0,0,Y,it),E.strokeStyle="#a0a69c",E.lineWidth=3,E.strokeRect(10,10,Y-20,it-20),E.fillStyle="#e7dfcb",E.font="600 47px Manrope, Arial",E.fillText("AB",28,93),E.font="17px Manrope, Arial",E.fillText("PROCESSOR",29,135),E.font="12px Manrope, Arial",E.fillText("SYSTEM / CORE",29,166),E.fillText("MEMORY STACK",29,187),E.beginPath(),E.arc(222,226,4,0,7),E.fill()}),J=rt("chassis",W(0,0,-.12),W(.2,.02,-.88),.14,[.05,-.16,0]);O(1.54,3.22,.035,c,J);let F=[];for(let E of[-1,1]){F.push($(E*.77,0,.03,.035,3.2,.09));for(let Y=0;Y<5;Y++)F.push($(E*.74,-1.43+Y*.7,.058,.08,.12,.08))}ht(F,u,J);let at=rt("thermal",W(0,-.09,-.055),W(-.47,-.04,-.44),.2,[0,-.22,-.04]);O(1.36,2.83,.025,d,at),O(1.23,2.68,.012,c,at,0,0,.023);for(let E=0;E<(t?10:15);E++)Z(.27+E*.015,h,at,0,-.23,.047+E*.001);let gt=[];for(let E=0;E<8;E++)gt.push($(-.54+E*.022,.69,.055,.01,1.04,.009));ht(gt,h,at),O(.33,.29,.015,u,at,-.34,1.07,.05);let Ct=rt("battery",W(0,-.47,.06),W(.72,-.62,.84),.18,[.03,-.32,-.08]);O(1.17,1.54,.17,d,Ct),O(1.11,1.46,.025,p,Ct,0,0,.095),Rt(1.04,1.37,N,Ct,0,0,.112);let It=[];for(let E of[-1,1])It.push($(E*.576,0,.09,.022,1.49,.026)),It.push($(0,E*.748,.09,1.14,.025,.027));ht(It,u,Ct);for(let E of[-1,1])O(.18,.24,.02,_,Ct,E*.33,-.84,.02),O(.13,.034,.025,h,Ct,E*.33,-.87,.036);let St=[];for(let E=0;E<6;E++)St.push($(-.13+E*.051,.84,.07,.028,.1,.018));ht(St,h,Ct),O(.38,.11,.075,l,Ct,0,.78,.015);let Ot=rt("logic-board",W(.03,.94,.06),W(.45,1,.52),.29,[-.11,.2,.03]);O(1.43,.96,.07,m,Ot),Rt(1.4,.93,X,Ot,0,0,.041);let q=[],Qt=[],Wt=[],kt=[];for(let E=0;E<(t?44:88);E++){let Y=E%4,it=Math.floor(E/4),H=t?11:22,j=it/(H-1),Tt=Y<2?-.62+j*1.24:Y===2?-.61:.61,Pt=Y<2?Y===0?-.37:.37:-.3+j*.6;q.push($(Tt,Pt,.071,.04+E%3*.007,.027,.037,E%2*Math.PI/2)),Qt.push($(Tt-.014,Pt,.075,.009,.032,.045)),Qt.push($(Tt+.014,Pt,.075,.009,.032,.045))}for(let E=0;E<(t?24:48);E++)Wt.push($(-.65+E%12*.118,-.43+Math.floor(E/12)*.275,.053,.017,.017,.015));ht(q,c,Ot),ht(Qt,u,Ot),ht(Wt,h,Ot,b),O(.23,.27,.065,u,Ot,-.48,.06,.078),O(.21,.25,.018,c,Ot,-.48,.06,.12),O(.24,.31,.07,u,Ot,.48,.06,.078),O(.18,.24,.015,d,Ot,.48,.06,.12);for(let E=0;E<8;E++)O(.015,.019,.011,l,Ot,-.55+E%4*.045,.005+Math.floor(E/4)*.1,.134);let Dt=O(.74,.65,.035,l,Ot,0,.015,.064);Dt.name="contact-cpu-socket";for(let E=0;E<(t?48:80);E++){let Y=E%(t?12:20),it=t?12:20,H=Math.floor(E/it),j=Y/(it-1);kt.push($(H<2?-.35+j*.7:H===2?-.37:.37,H<2?H===0?-.322:.352:-.29+j*.61,.095,H<2?.018:.055,H<2?.055:.018,.019))}ht(kt,h,Ot);let qt=rt("processor",W(0,.015,.12),W(.07,.04,.73),.4,[-.22,.28,-.08],Ot);O(.59,.55,.033,h,qt),O(.55,.51,.055,c,qt,0,0,.04),Rt(.52,.48,k,qt,0,0,.071),qt.children.forEach(E=>{E.renderOrder=E.material?.map?8:7});let Ut=[],L=t?7:12;for(let E=0;E<L;E++)for(let Y=0;Y<L;Y++)Ut.push($((Y/(L-1)-.5)*.48,(E/(L-1)-.5)*.44,-.037,.013,.013,.013));ht(Ut,u,qt,b);let T=rt("memory",W(0,0,-.017),W(-.4,-.2,-.23),.41,[.06,-.11,.05],qt);O(.51,.47,.04,m,T),O(.44,.39,.025,l,T,0,0,.03);let et=[];for(let E=0;E<20;E++)et.push($(-.22+E%10*.049,E<10?-.23:.23,.015,.024,.049,.022));ht(et,h,T);let vt=rt("camera-array",W(-.48,1.18,-.1),W(1.03,1.18,1.03),.53,[-.04,.13,.04]),wt=O(.79,.88,.045,c,vt,.13,-.14,-.05);wt.name="contact-camera-mount";for(let E=0;E<3;E++){let Y=new Xt;Y.name=`contact-optics-${E}`,Y.position.set(E===1?.43:0,E===2?-.44:0,0),vt.add(Y),O(.33,.33,.045,h,Y),O(.25,.25,.017,l,Y,0,0,.034),O(.17,.17,.012,S,Y,0,0,.049);let it=[];for(let j=0;j<(t?4:6);j++){let Tt=new Xt;Tt.name=`contact-lens-${E}-${j}`,Y.add(Tt);let Pt=.142-j*.009;if(lt(Pt,.025,j%2?v:S,Tt),Z(Pt+.01,u,Tt,0,0,.015),j===1){let Ht=[];for(let At=0;At<6;At++){let K=At*Math.PI/3;Ht.push($(Math.cos(K)*.07,Math.sin(K)*.07,.019,.027,.065,.008,K+.35))}ht(Ht,l,Tt)}it.push({piece:Tt,home:.07+j*.027,index:j})}let H=lt(.178,.13,c,Y,0,0,.12);Z(.18,h,Y,0,0,.2),M.push({assembly:Y,lensParts:it,barrel:H,index:E})}vt.traverse(E=>{E.isMesh&&(E.renderOrder=7)});let pt=rt("io-board",W(0,-1.38,.065),W(.25,-1.48,.51),.65,[.1,-.12,-.03]);O(1.35,.36,.065,m,pt),Rt(1.3,.32,X,pt,0,0,.039);let ft=new Xt;pt.add(ft),ft.name="contact-usb-c",ft.position.set(0,-.13,.12),O(.38,.025,.19,u,ft,0,.073,0),O(.38,.025,.19,u,ft,0,-.073,0),O(.027,.12,.19,u,ft,-.182,0,0),O(.027,.12,.19,u,ft,.182,0,0),O(.27,.022,.16,l,ft,0,0,.008);let Mt=[];for(let E=0;E<12;E++)Mt.push($(-.123+E*.022,0,.092,.009,.025,.022));ht(Mt,h,ft);let bt=[];for(let E=0;E<20;E++)bt.push($(-.57+E%10*.126,.075+Math.floor(E/10)*.086,.071,.038,.025,.045));ht(bt,d,pt);let zt=rt("speaker",W(-.47,-.12,.12),W(-.86,-.22,.38),.68,[.09,-.16,-.05],pt);O(.43,.28,.16,l,zt),O(.39,.25,.012,u,zt,0,0,.09);let ct=[];for(let E=0;E<3;E++)for(let Y=0;Y<7;Y++)ct.push($(-.15+Y*.05,-.075+E*.075,.102,.016,.016,.008));ht(ct,l,zt,b);let _t=rt("haptic",W(.48,-.1,.11),W(.89,-.15,.39),.71,[.02,.19,.1],pt);O(.43,.23,.15,u,_t),O(.37,.19,.025,c,_t,0,0,.085);let Nt=[];for(let E=0;E<(t?12:24);E++)Nt.push($(-.15+E/(t?11:23)*.3,0,.108,.008,.14,.011));ht(Nt,h,_t);let mt=O(.13,.16,.027,d,_t,0,0,.13);for(let E of[ft,zt,_t])E.traverse(Y=>{Y.isMesh&&(Y.renderOrder=7)});let yt=new Xt;yt.name="contact-fasteners",s.add(yt);for(let E=0;E<10;E++){let Y=(E%2?1:-1)*.71,it=-1.45+Math.floor(E/2)*.72,H=new Xt;H.position.set(Y,it,.03),yt.add(H),lt(.036,.055,u,H),O(.042,.008,.006,l,H,0,0,.031),O(.008,.042,.006,l,H,0,0,.031),C.push({g:H,x:Y,y:it})}let Ft=xt(128,64,(E,Y,it)=>{E.fillStyle="#7c431c",E.fillRect(0,0,Y,it),E.fillStyle="#dca65a";for(let H=0;H<6;H++)E.fillRect(8+H*20,0,5,it)}),ot=n({map:Ft,color:"#ffffff",side:Mn,toneMapped:!1},!0),G=[];for(let[E,Y,it]of[[Ot,Ct,-.27],[Ot,pt,.43],[Ot,vt,-.42]]){let H=t?14:28,j=e(new ke),Tt=new Float32Array((H+1)*6),Pt=new Float32Array((H+1)*4),Ht=[];for(let K=0;K<=H;K++)if(Pt.set([0,K/H,1,K/H],K*4),K<H){let Et=K*2;Ht.push(Et,Et+1,Et+2,Et+1,Et+3,Et+2)}j.setAttribute("position",new Fe(Tt,3).setUsage(Ze)),j.setAttribute("uv",new Fe(Pt,2)),j.setIndex(Ht);let At=new Lt(j,ot);At.frustumCulled=!1,At.renderOrder=5,s.add(At),G.push({mesh:At,from:E,to:Y,offset:it,n:H,positions:Tt})}let R=[Ct,Ot,qt,vt,pt],st=["BATERIA E ALIMENTA\xC7\xC3O","PLACA L\xD3GICA","PROCESSADOR E MEM\xD3RIA","LENTES E SENSORES","CONEX\xD5ES, SOM E VIBRA\xC7\xC3O"],B=[[.19,.32],[.32,.44],[.44,.56],[.56,.69],[.69,.83]],Q=new U;function I(E,Y,it){let H=1-gs((E-.84)/.14);w.forEach(({g:Pt,home:Ht,destination:At,start:K,rotation:Et})=>{let Jt=gs((E-K)/.11)*H;Pt.position.lerpVectors(Ht,At,Jt),Pt.rotation.set(Et[0]*Jt,Et[1]*Jt,Et[2]*Jt),Pt.scale.setScalar(1),Pt.userData.separation=Jt}),C.forEach(({g:Pt,x:Ht,y:At},K)=>{let Et=gs((E-.12-K*.004)/.13)*H;Pt.position.set(Ht*(1+Et*.08),At,.03+Et*(.3+K%3*.045)),Pt.rotation.z=Et*Math.PI*3}),M.forEach(({lensParts:Pt,barrel:Ht,index:At})=>{let K=gs((E-.54-At*.018)/.12)*H;Pt.forEach(({piece:Et,home:Jt,index:ne})=>{Et.position.z=Jt+K*(.08+ne*.11),Et.rotation.set(K*.08*Math.sin(ne),K*.09*Math.cos(ne),0)}),Ht.position.z=.12-K*.13,Ht.scale.y=.13*(1-K*.6)}),mt.position.x=Math.sin(Y*13)*.023*Jl(E,.68,.84);let j=-1,Tt=0;if(B.forEach(([Pt,Ht],At)=>{let K=Jl(E,Pt,Ht);K>Tt&&(Tt=K,j=At)}),j>=0){let Pt=R[j];Pt.scale.setScalar(1+Tt*(j===2?.23:.1)),Pt.position.z+=Tt*.13,j===2&&(Pt.rotation.y+=Math.PI*.95*Jl(E,.47,.55))}s.updateMatrixWorld(!0);for(let Pt of G){s.worldToLocal(Pt.from.getWorldPosition(D)),s.worldToLocal(Pt.to.getWorldPosition(V)),D.x+=Pt.offset,D.z+=.1,V.z+=.1;for(let Ht=0;Ht<=Pt.n;Ht++){let At=Ht/Pt.n;z.lerpVectors(D,V,At),z.x+=Math.sin(At*Math.PI)*.13*it,z.z+=Math.sin(At*Math.PI)*(.12+it*.19),Pt.positions.set([z.x-.047,z.y,z.z,z.x+.047,z.y,z.z],Ht*6)}Pt.mesh.geometry.attributes.position.needsUpdate=!0}return Q.set(0,0,0),j>=0&&(s.worldToLocal(R[j].getWorldPosition(Q)),Q.multiplyScalar(Tt)),{focus:Q,weight:Tt,index:j,label:j>=0?st[j]:"",open:gs((E-.14)/.14)*H}}return{update:I,layers:w}}var My=s=>{let t=Math.max(0,Math.min(1,s));return t*t*(3-2*t)};function Dd({scene:s,software:t=!1,quality:e="medium"}){let n=new Xt;n.visible=!1,s.add(n);let i=document.querySelector(".contact-world"),r=t||e==="low",o=new Set,a=new Set,c=new Set,l=G=>(o.add(G),G),h=(G,R=!1)=>{let st=R?new Ce(G):new ye({roughness:.3,metalness:.62,...G});return a.add(st),st},u=h({color:"#282c31",roughness:.33,metalness:.72}),d=h({color:"#0c1414"}),f=h({color:"#cf833c",roughness:.23,metalness:.8}),_=h({color:"#d6dce3",roughness:.22,metalness:.84}),g=_,m=h({color:"#8a96a8",metalness:.72,roughness:.28}),p=h({color:"#ffd297",toneMapped:!1},!0),S=h({color:"#e4e7ee",toneMapped:!1},!0),v=h({color:"#c6a9ff",toneMapped:!1},!0),y=h({color:"#a3e2eb",toneMapped:!1},!0),A=h({color:"#b38ff0",transparent:!0,opacity:.3,depthWrite:!1,toneMapped:!1},!0),b=l(r?new pe(1,1,1):new Ge(1,1,1,3,.065)),w=l(new Te(1,1,r?2:6,r?3:8)),C=l(new Xn(1,r?0:1)),M=l(new In(1,.012,r?3:5,r?36:80)),x=new ae,D=new U,V=new U(0,1,0);function z(G,R,st,B,Q,I=0,E=0,Y=0,it=0){let H=new Lt(b,B);return H.scale.set(G,R,st),H.position.set(I,E,Y),H.renderOrder=it,Q.add(H),H}function W(G,R,st,B,Q,I,E){G.fillStyle=E,G.beginPath(),G.roundRect(R,st,B,Q,I),G.fill()}function $(G,R,st,B,Q=22,I="#e3d9c4",E=!1){G.font=`${E?700:400} ${Q}px Arial`,G.fillStyle=I,G.fillText(R,st,B)}function O(G,R=0){let st=document.createElement("canvas");st.width=G==="phone"?512:640,st.height=G==="phone"?1024:350;let B=st.getContext("2d"),Q=st.width,I=st.height;if(W(B,0,0,Q,I,G==="phone"?34:12,"#1b211b"),G==="phone")W(B,0,0,Q,172,32,"#252f25"),B.fillStyle="#f19343",B.beginPath(),B.arc(65,102,28,0,7),B.fill(),$(B,"a.",48,113,29,"#241a0d",!0),$(B,"dev.abraao",110,99,30,"#f3e6cc",!0),$(B,"CONVERSA INICIAL",112,130,13,"#aaa58b"),$(B,"O pr\xF3ximo passo come\xE7a aqui.",29,214,18,"#b6b69a"),W(B,25,255,385,176,18,"#333c2d"),["Quero melhorar","a rotina do meu","neg\xF3cio."].forEach((Y,it)=>$(B,Y,48,305+it*45,30,"#eee4cd")),W(B,89,471,396,179,18,"#ce823a"),["Me conta onde","o processo est\xE1","travando."].forEach((Y,it)=>$(B,Y,112,522+it*45,30,"#201d11",!0)),W(B,25,691,385,133,18,"#333c2d"),["Vamos encontrar","um caminho."].forEach((Y,it)=>$(B,Y,48,741+it*44,30,"#eee4cd")),W(B,23,905,466,70,30,"#30392a"),$(B,"Conte seu desafio...",47,948,21,"#9eaa8d"),B.fillStyle="#dc9449",B.beginPath(),B.arc(454,940,24,0,7),B.fill(),$(B,"\u2197",441,950,29,"#201f12",!0);else{let Y=["ENTENDER","DEFINIR","CONSTRUIR"],it=["Seu contexto. Sua rotina.","Um caminho que fa\xE7a sentido.","Uma solu\xE7\xE3o com prop\xF3sito."];$(B,`0${R+1} / DO CONTEXTO \xC0 A\xC7\xC3O`,30,43,14,"#c69664"),B.fillStyle="#6b6952",B.fillRect(30,66,Q-60,1),$(B,Y[R],30,128,47,"#f1e3c8",!0),$(B,it[R],31,175,23,"#acb497");for(let H=0;H<3;H++)W(B,30,213+H*34,(Q-60)*[.94,.74,.5][H],11,3,H===2?"#b47b3c":"#46553a");B.fillStyle="#dd9a53",B.fillRect(Q-44,104,9,55)}let E=new Pe(st);return E.colorSpace=ge,E.anisotropy=r?1:4,c.add(E),E}function lt(G,R,st,B,Q,I=8){let E=new Lt(w,h({map:st,color:"#fff",toneMapped:!1},!0));return E.scale.set(G,R,1),E.position.z=Q,E.renderOrder=I,B.add(E),E}let Z=new Xt;n.add(Z);let ht=z(1.89,3.79,.22,f,Z,0,0,-.055,3),rt=z(1.83,3.73,.25,u,Z,0,0,0,4),xt=z(1.72,3.58,.025,d,Z,0,0,.136,6),Rt=O("phone");z(.57,.083,.018,d,Z,0,1.61,.171,9),z(.38,.018,.025,_,Z,0,1.605,.186,10),z(.4,.032,.02,S,Z,0,-1.69,.179,9),z(.045,.44,.09,f,Z,.963,.5,-.01,3),z(.04,.22,.09,_,Z,-.963,.68,-.01,3),z(.04,.36,.09,_,Z,-.963,.18,-.01,3);let X=[];for(let G=0;G<3;G++){let R=new Lt(C,p);R.scale.setScalar(.025),R.position.set(-.54+G*.09,-1.19,.178),R.renderOrder=10,Z.add(R),X.push(R)}let N=new Xt;Z.add(N);let k=Id({parent:N,low:r,geo:l,mat:h,textures:c,boxGeo:b,planeGeo:w,palette:{graphite:u,black:d,copper:f,silver:g,ceramic:m,light:p,pale:S,violet:v}}),J=new Xt;N.add(J),J.position.set(0,.65,.28);let F=new Lt(l(new ta(.26,.085,r?40:88,r?5:9,2,3)),g);J.add(F);let at=new Lt(l(new Xn(.19,r?0:2)),v);J.add(at);let gt=[];for(let G=0;G<3;G++){let R=new Lt(M,G===1?y:p);R.scale.setScalar(.42+G*.085),R.rotation.set(G*.7,.5+G*.6,0),J.add(R),gt.push(R)}let Ct=new Xt;Z.add(Ct),Ct.position.set(-.48,1.18,-.2);for(let G=0;G<3;G++){let R=new Xt;R.position.set(G===1?.45:0,G===2?-.46:0,0),Ct.add(R);let st=new Lt(l(new Bi(.18,.2,.1,r?12:32)),u);st.rotation.x=Math.PI/2,R.add(st);let B=new Lt(M,g);B.scale.setScalar(.155),B.position.z=-.07,R.add(B);let Q=new Lt(l(new Pn(.12,r?8:20,r?6:12)),m);Q.scale.z=.35,Q.position.z=-.09,R.add(Q)}let It=r?6:8,St=r?12:16,Ot=[],q=h({map:Rt,color:"#fff",toneMapped:!1},!0),Qt=new he(b,u,It*St);Qt.frustumCulled=!1,Qt.instanceMatrix.setUsage(Ze),Z.add(Qt),Qt.renderOrder=7;for(let G=0;G<St;G++)for(let R=0;R<It;R++){let st=1.62/It,B=3.39/St,Q=l(new Te(st*.992,B*.992)),I=Q.attributes.uv;for(let Y=0;Y<I.count;Y++)I.setXY(Y,(R+I.getX(Y))/It,1-(G+1-I.getY(Y))/St);let E=new Lt(Q,q);E.renderOrder=8,Z.add(E),Ot.push({mesh:E,x:(R+.5-It/2)*st,y:(St/2-G-.5)*B,w:st,h:B,row:G,col:R})}let Wt=new Xt;n.add(Wt);let kt=[];for(let G=0;G<(r?22:36);G++){let R=new Xt;Wt.add(R);let st=.66+G%6*.105;z(.13,st,.055,G%3===0?f:g,R,0,st*.28,0,1),z(.023,st*.85,.018,G%4===0?v:m,R,0,st*.26,.04,2),z(.046,.047,.028,p,R,0,-st*.18,.043,3),kt.push({g:R,length:st})}let Dt=[],qt=r?48:96,Ut=r?3:6;for(let G=0;G<4;G++){let R=[];for(let I=0;I<=48;I++){let E=I/48,Y=E*Math.PI*2*(1.15+G*.04)+G*Math.PI/3,it=1.4+.12*Math.sin(E*Math.PI*2+G);R.push(new U(Math.cos(Y)*it,(E-.5)*4.75,Math.sin(Y)*it*.72))}let st=new xi(R),B=l(new qn(st,qt,.012+G%2*.005,Ut,!1)),Q=new Lt(B,G%3===0?y:G%3===1?p:A);n.add(Q),Q.renderOrder=-1,Dt.push({curve:st,mesh:Q})}let L=new he(C,p,r?36:72);L.frustumCulled=!1,L.instanceMatrix.setUsage(Ze),n.add(L);let T=new he(b,g,r?44:92);T.frustumCulled=!1,T.instanceMatrix.setUsage(Ze),n.add(T);let et=document.createElement("canvas");et.width=et.height=128;let vt=et.getContext("2d"),wt=vt.createRadialGradient(64,64,0,64,64,64);wt.addColorStop(0,"#b9b9ff38"),wt.addColorStop(.25,"#b7865422"),wt.addColorStop(1,"#b7865400"),vt.fillStyle=wt,vt.fillRect(0,0,128,128);let pt=new Pe(et);c.add(pt);let ft=new Lt(l(new Te(7,7)),h({map:pt,color:"#fff",transparent:!0,opacity:.7,depthWrite:!1,toneMapped:!1},!0));if(ft.renderOrder=-30,n.add(ft),!t){let G=new ms("#e0d2ff",13,12);G.position.set(-2,3,4),n.add(G);let R=new ms("#a7e6f0",9,12);R.position.set(3,-1,-2),n.add(R)}J.traverse(G=>{G.isMesh&&(G.renderOrder=5)});let Mt=document.createElement("canvas");Mt.width=768,Mt.height=64;let bt=Mt.getContext("2d"),zt=new Pe(Mt);zt.colorSpace=ge,c.add(zt);let ct=new Lt(l(new Te(4.4,.367)),h({map:zt,color:"#fff",transparent:!0,depthWrite:!1,toneMapped:!1},!0));ct.renderOrder=12,n.add(ct);let _t=-2,Nt=new U,mt=new U;function yt(G,R,st,B,Q,I,E=0,Y=0,it=0){x.position.copy(st),x.rotation.set(E,Y,it),x.scale.set(B,Q,I),x.updateMatrix(),G.setMatrixAt(R,x.matrix)}function Ft(G,R,st,B={}){let Q=Pd(G,R),{t:I,p:E}=Q,Y=B.mobile??st.aspect<1.2,it=Math.sin(Math.PI*My((E-.03)/.94))**2,H=-.16-.38*Math.sin(E*Math.PI)+.12*Math.sin(E*Math.PI*2);Z.position.set(-.08+Math.sin(I*.33)*.035,.06+Q.lift,.1),Z.rotation.set(.06+it*.1,H+Math.sin(I*.23)*.028,-.11+.17*it),rt.position.z=-it*.38,ht.position.z=-.055-it*.38,xt.visible=it<.025,N.position.z=.07+it*.22;let j=k.update(E,I,it);J.position.set(-.82*j.open,.65,.28),J.rotation.set(I*.12,I*.32,-I*.13),J.scale.setScalar((.82+it*.9)*(1-.64*j.open)),F.rotation.z=-I*.4,at.scale.setScalar(.92+Math.sin(I*1.4)*.08),gt.forEach((At,K)=>{At.rotation.set(.4+K*.65+I*(K%2?.25:-.22),K*.52+I*.15,I*(K%2?-.24:.17))}),Ot.forEach((At,K)=>{let Et=(At.col+.5)/It,Jt=(At.row+.5)/St,ne=(Et-.5)*1.16,Re=Math.sin(ne)*1.95+.28*Math.sin(Jt*Math.PI),Xe=At.y+.12*Math.sin(Jt*Math.PI*2+I*.55),wn=.17+it*(1.17+.38*Math.cos(ne)+.15*Math.sin(Jt*Math.PI*2+I*.5));At.mesh.position.set(At.x+(Re-At.x)*it-1.15*j.open,At.y+(Xe-At.y)*it,wn),At.mesh.rotation.set(Math.cos(Jt*Math.PI*2+I*.5)*it*.1,-ne*it*.75,Math.sin(Jt*Math.PI)*it*.035),At.mesh.updateMatrix(),x.position.copy(At.mesh.position),x.quaternion.copy(At.mesh.quaternion),x.position.addScaledVector(D.set(0,0,-1).applyQuaternion(At.mesh.quaternion),.025),x.scale.set(At.w*(.99-.04*it),At.h*(.99-.04*it),.035),x.updateMatrix(),Qt.setMatrixAt(K,x.matrix)}),Qt.instanceMatrix.needsUpdate=!0,X.forEach((At,K)=>{At.visible=it<.18,At.scale.setScalar(.018+(.5+.5*Math.sin(I*3.1-K*.9))*.015)}),Wt.rotation.set(.08,H*.55+Math.sin(I*.19)*.05,0),kt.forEach((At,K)=>{let Et=K%2?1:-1,Jt=Math.floor(K/2),ne=kt.length/2,Re=Jt/(ne-1),Xe=-1.25+Re*2.5,wn=1.05+it*(.4+.14*Math.sin(Re*Math.PI));At.g.position.set(Et*(.65+Math.cos(Xe)*wn),Math.sin(Xe)*2.12+Math.sin(I*.5+K)*.035,-.55-Math.sin(Re*Math.PI)*.58+it*.32),At.g.rotation.set(.2*Math.sin(I*.3+K),Et*(.3+it*.42),Et*(-Xe*.45+.4+Math.sin(I*.35+K)*.05)),At.g.scale.setScalar(.68+it*.36)}),Dt.forEach((At,K)=>{At.mesh.rotation.y=I*(K%2?.07:-.055)+H*.15,At.mesh.scale.set(1+it*.35,1+it*.08,1+it*.2)});let Tt=L.count/Dt.length;for(let At=0;At<L.count;At++){let K=Math.floor(At/Tt),Et=At%Tt,Jt=Dt[K],ne=(I*(.12+K*.007)+K*.14-Et*.016+1)%1;Jt.curve.getPoint(ne,D),D.multiply(Jt.mesh.scale).applyAxisAngle(V,Jt.mesh.rotation.y);let Re=Et===0?.062:Math.max(.01,.034-Et*.002);yt(L,At,D,Re,Re,Re)}L.instanceMatrix.needsUpdate=!0;for(let At=0;At<T.count;At++){let K=At*2.39996+I*(At%2?.045:-.038),Et=1.28+At%9*.1+it*.66;D.set(Math.cos(K)*Et,Math.sin(At*2.3+I*.27)*2.24,Math.sin(K)*Et*.65-.25);let Jt=.028+At%4*.008;yt(T,At,D,Jt,Jt*(1.5+At%3*.7),Jt*.35,I*.1+At,I*.16+At,I*.11)}T.instanceMatrix.needsUpdate=!0,Nt.set(0,.02+it*.12,.1),N.localToWorld(D.copy(j.focus)),Nt.lerp(D,j.weight*.16);let Ht=Math.max(Y?5.8:6.45,(Y?8:8.2)/st.aspect)*(1.04-it*.15)*(1-j.weight*.09)/(2*Math.tan(Be.degToRad(st.fov/2)));return mt.set(.1+it*.14,.17+it*.25,1).normalize(),st.position.copy(mt).multiplyScalar(Ht).add(Nt),st.lookAt(Nt),st.updateProjectionMatrix(),st.updateMatrixWorld(!0),ft.position.set(0,.18,-1.7),ft.quaternion.copy(st.quaternion),ft.scale.setScalar(.9+it*.2+Math.sin(I*.4)*.035),ct.visible=j.weight>.05,ct.position.set(.12,2.14,.25),ct.quaternion.copy(st.quaternion),_t!==j.index&&(_t=j.index,bt.clearRect(0,0,768,64),bt.fillStyle="#e5b785",bt.font="500 24px Manrope, Arial",bt.textAlign="center",bt.fillText(`${String(j.index+1).padStart(2,"0")}  /  ${j.label}`,384,38),bt.fillStyle="#ca965960",bt.fillRect(245,53,278,1),zt.needsUpdate=!0),i.dataset.rendered="true",i.dataset.filmProgress=E.toFixed(4),i.dataset.motionTime=I.toFixed(2),i.dataset.packetPhase=Q.flow.toFixed(4),i.dataset.cameraYaw=H.toFixed(4),i.dataset.explosion=it.toFixed(4),i.dataset.internalPart=j.index>=0?j.label:"assembled",Q}let ot=0;return n.traverse(G=>{G.isMesh&&ot++}),i.dataset.contactMeshes=ot,{group:n,update:Ft,dispose(){s.remove(n),n.traverse(G=>{G.isInstancedMesh&&G.dispose()}),o.forEach(G=>G.dispose()),a.forEach(G=>G.dispose()),c.forEach(G=>G.dispose())}}}var Ld=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0)),_s=s=>{let t=Ld(s);return t*t*(3-2*t)},Jr=(s,t,e)=>_s((s-t)/(e-t));function Ud(s,t=0){let e=Ld(s),n=Math.max(0,Number.isFinite(t)?t:0)*.001,i=[[-.55,.22,1.06],[-.18,.65,.94],[.24,.28,.89],[.53,.48,1.02],[.6,.45,1.03]],r=Math.min(3,Math.floor(e*4)),o=e===1?1:e*4-r,a=_s(o),c=i[r].map((l,h)=>l+(i[r+1][h]-l)*a);return{p:e,t:n,index:r,local:o,organize:Jr(e,.08,.38),connect:Jr(e,.28,.59),operate:Jr(e,.49,.73),evolve:Jr(e,.7,.94),yaw:c[0],elevation:c[1],zoom:c[2],pulse:n*.17%1,drift:Math.sin(n*.5)*.045,copyOpacity:1-.75*Jr(o,.9,1)*(r<3?1:0)}}function Od({scene:s,software:t=!1,quality:e="medium"}){let n=new Xt;n.visible=!1,s.add(n);let i=document.querySelector(".result-world"),r=t||e==="low",o=new Set,a=new Set,c=new Set,l=I=>(o.add(I),I),h=(I,E=!1)=>{let Y=E?new Ce(I):new ye({roughness:.35,metalness:.62,...I});return a.add(Y),Y},u=h({color:"#2a3e37"}),d=h({color:"#819a82",metalness:.8}),f=h({color:"#101e1b"}),_=h({color:"#d08843",roughness:.25,metalness:.72}),g=h({color:"#ffc27a",toneMapped:!1},!0),m=h({color:"#a4cbb3",toneMapped:!1},!0),p=h({color:"#d38f4d",transparent:!0,opacity:.6,toneMapped:!1},!0),S=h({color:"#8daf9a",transparent:!0,opacity:.16,toneMapped:!1,depthWrite:!1},!0),v=l(r?new pe(1,1,1):new Ge(1,1,1,2,.045)),y=l(new Te(1,1,r?3:9,r?2:5)),A=l(new Pn(1,r?6:10,r?4:7)),b=l(new In(1,.013,r?3:5,r?44:80)),w=new ae,C=new U,M=new U(0,1,0);function x(I,E,Y,it,H,j=0,Tt=0,Pt=0,Ht=0){let At=new Lt(v,it);return At.scale.set(I,E,Y),At.position.set(j,Tt,Pt),At.renderOrder=Ht,H.add(At),At}function D(I,E,Y,it=0,H=0,j=0){let Tt=new Lt(b,E);return Tt.scale.setScalar(I),Tt.position.set(it,H,j),Y.add(Tt),Tt}function V(I,E,Y,it,H=18,j="#dbdfc9",Tt=!1){I.font=`${Tt?700:400} ${H}px Arial`,I.fillStyle=j,I.fillText(E,Y,it)}function z(I,E,Y,it,H,j,Tt){I.fillStyle=Tt,I.beginPath(),I.roundRect(E,Y,it,H,j),I.fill()}function W(I,E,Y=[]){let it=document.createElement("canvas");it.width=I==="dashboard"?1024:512,it.height=I==="dashboard"?640:340;let H=it.getContext("2d"),j=it.width,Tt=it.height;if(z(H,0,0,j,Tt,14,I==="dashboard"?"#e4e0d1":"#152b25"),I==="dashboard"){z(H,0,0,j,65,12,"#243e33"),V(H,"seu.neg\xF3cio",30,43,27,"#efe4c9",!0),V(H,"OPERA\xC7\xC3O CONECTADA",690,41,16,"#b7c5a7"),V(H,"Uma vis\xE3o. O mesmo caminho.",35,118,32,"#253a2b",!0),V(H,"Do primeiro contato \xE0 pr\xF3xima entrega.",36,152,19,"#7a8069"),["RECEBER","PREPARAR","ENTREGAR"].forEach((At,K)=>{let Et=34+K*325;z(H,Et,187,306,205,9,"#d3d6c1"),z(H,Et+17,204,272,30,5,K===2?"#bf8a4e":"#bfc8ad"),V(H,At,Et+30,225,14,"#31452c",!0),V(H,["Pedido recebido","Equipe em a\xE7\xE3o","Pronto para seguir"][K],Et+18,275,20,"#253c2a",!0),V(H,["Cliente e contexto","Informa\xE7\xE3o dispon\xEDvel","Atualiza\xE7\xE3o registrada"][K],Et+18,307,15,"#6a795e"),z(H,Et+18,343,270,4,2,"#bac3a7"),z(H,Et+18,343,270*(K===0?1:K===1?.7:.45),4,2,"#b47d40")}),V(H,"CLAREZA PARA O PR\xD3XIMO PASSO",37,440,15,"#6b795e",!0),H.strokeStyle="#c4c9b3",H.lineWidth=1;for(let At=0;At<3;At++)H.beginPath(),H.moveTo(36,470+At*55),H.lineTo(640,470+At*55),H.stroke();H.strokeStyle="#aa6c2a",H.lineWidth=4,H.beginPath(),[[40,558],[130,540],[210,548],[310,502],[420,509],[520,475],[635,455]].forEach(([At,K],Et)=>Et?H.lineTo(At,K):H.moveTo(At,K)),H.stroke(),z(H,690,428,300,175,9,"#294332"),V(H,"EQUIPE",715,466,14,"#d8b576"),V(H,"Contexto",715,511,27,"#e3e0c8",!0),V(H,"compartilhado.",715,547,27,"#e3e0c8",!0),V(H,"Cada parte sabe o pr\xF3ximo passo.",715,577,12,"#acbc9d")}else V(H,"SEU NEG\xD3CIO / "+E,26,38,12,"#bba97d",!0),H.fillStyle="#6f805f",H.fillRect(26,55,j-52,1),V(H,E,26,108,34,"#f0e4c9",!0),V(H,Y[0]||"A informa\xE7\xE3o encontra dire\xE7\xE3o.",26,145,17,"#a4b89c"),Y.slice(1,4).forEach((Ht,At)=>{let K=181+At*47;z(H,24,K,j-48,36,5,At===2?"#73572e":"#2a4534"),H.fillStyle=At===2?"#e8b673":"#8da37b",H.beginPath(),H.arc(42,K+18,3,0,7),H.fill(),V(H,Ht,56,K+24,15,At===2?"#f2deb6":"#c1ceb0")});let Pt=new Pe(it);return Pt.colorSpace=ge,Pt.anisotropy=r?1:4,c.add(Pt),Pt}function $(I,E,Y,it,H,j){let Tt=new Xt;j.add(Tt),x(I+.12,E+.12,.12,d,Tt,0,0,0,5),x(I+.055,E+.055,.045,f,Tt,0,0,.075,6);let Pt=new Lt(y,h({map:W(Y,it,H),color:"#fff",toneMapped:!1},!0));return Pt.scale.set(I,E,1),Pt.position.z=.108,Pt.renderOrder=8,Tt.add(Pt),x(.32,.023,.025,g,Tt,-I/2+.24,E/2+.085,.08,9),Tt}let O=new Xt;n.add(O);let lt=[];for(let I=0;I<9;I++){let E=new Xt;O.add(E);let Y=I%3,it=Math.floor(I/3);x(2.24,.17,1.5,u,E,0,0,0,-10),x(2.26,.027,1.51,_,E,0,-.11,0,-10),x(1.88,.014,.018,p,E,0,.095,.59,-8),x(.018,.015,1.18,S,E,-.96,.095,0,-8);let H=x(.12,.035,.07,g,E,.84,.08,.61,-7);lt.push({g:E,x:(Y-1)*2.34,y:-1.72,z:(it-1)*1.6,led:H})}let Z=[];[["CLIENTES",["Um s\xF3 hist\xF3rico.","Contato","Contexto","Pr\xF3ximo passo"],[-2.78,.6,.2],[-4.1,1.65,1.4]],["PEDIDOS",["O caminho da entrega.","Receber","Preparar","Entregar"],[2.78,.63,.1],[4.2,-.4,1.8]],["ESTOQUE",["A opera\xE7\xE3o acompanha.","Entrada","Reserva","Sa\xEDda"],[-2.65,-.85,1.5],[-3.25,-1.25,3]],["FINANCEIRO",["O registro continua.","Registrar","Conferir","Acompanhar"],[2.65,-.82,1.45],[3.75,2.1,-.8]]].forEach(([I,E,Y,it],H)=>{let j=new Xt;n.add(j);let Tt=$(1.87,1.24,"station",I,E,j);Tt.rotation.y=H%2?-.1:.1,x(1.92,.08,.7,f,j,0,-.73,-.06,-3),x(1.92,.025,.045,p,j,0,-.68,.3,2);let Pt=D(.12,g,j,0,-.78,.34);Pt.rotation.x=Math.PI/2;let Ht=x(.12,.55,.12,d,j,0,-1,-.17,-4),At=[];for(let Et=0;Et<3;Et++)At.push(x(.11,.018,.035,m,j,-.55+Et*.21,-.69,.26,4));let K=x(1.68,.009,.007,p,Tt,0,-.48,.119,9);Z.push({g:j,panel:Tt,pedestal:Ht,port:Pt,beacons:At,scan:K,pose:new U(...Y),scatter:new U(...it)})});let rt=new Xt;n.add(rt);let xt=$(3.5,2.18,"dashboard","",[],rt);xt.position.set(0,.55,-.15);let Rt=x(.14,.9,.18,_,rt,0,-.98,-.2,-4),X=x(3.7,.13,1.45,u,rt,0,-1.4,.12,-5),N=new he(v,d,r?12:24);rt.add(N),N.renderOrder=3;for(let I=0;I<N.count;I++)w.position.set(-1.52+I%8*.43,-1.31,-.24+Math.floor(I/8)*.29),w.rotation.set(0,0,0),w.scale.set(.28,.025,.14),w.updateMatrix(),N.setMatrixAt(I,w.matrix);let k=[];for(let I=0;I<3;I++){let E=D(.56+I*.17,I===1?p:S,rt,0,-.89,.48);E.rotation.x=Math.PI/2,E.renderOrder=-1,k.push(E)}let J=new Lt(l(new Bi(.47,.47,.1,r?16:32)),_);J.position.set(0,-.87,.48),rt.add(J);let F=new Xt;n.add(F);let at=[];for(let I=0;I<3;I++){let E=D(2.65+I*.28,I===0?p:S,F,0,-1.65-I*.13,0);E.rotation.x=-Math.PI/2,E.scale.y*=.69,E.renderOrder=-12,at.push(E)}let gt=new he(v,d,16);gt.renderOrder=-11,F.add(gt);for(let I=0;I<16;I++){let E=I/16*Math.PI*2;w.position.set(Math.cos(E)*3,-1.99,Math.sin(E)*1.9),w.rotation.set(0,-E,0),w.scale.set(.055,.45,.055),w.updateMatrix(),gt.setMatrixAt(I,w.matrix)}let Ct=new he(v,p,r?32:64);Ct.renderOrder=-12,F.add(Ct);let It=r?16:28,St=r?3:5,Ot=[];function q(I,E,Y){let it=new Float32Array((It+1)*(St+1)*3),H=[];for(let Ht=0;Ht<It;Ht++)for(let At=0;At<St;At++){let K=Ht*(St+1)+At,Et=K+St+1;H.push(K,Et,K+1,Et,Et+1,K+1)}let j=l(new ke);j.setAttribute("position",new Fe(it,3)),j.setIndex(H);let Tt=new Lt(j,I%3===0?m:p);Tt.frustumCulled=!1,Tt.renderOrder=2,n.add(Tt);let Pt={mesh:Tt,geometry:j,positions:it,a:new U,b:new U,c:new U,from:E,to:Y,index:I};return Ot.push(Pt),Pt}for(let I=0;I<4;I++)q(I,I,-1);for(let I=0;I<4;I++)q(I+4,I,(I+1)%4);let Qt=new U,Wt=new U,kt=new U,Dt=new U;function qt(I,E,Y){let it=1-E;return Y.copy(I.a).multiplyScalar(it*it).addScaledVector(I.c,2*it*E).addScaledVector(I.b,E*E)}function Ut(I,E,Y){I.a.copy(Z[I.from].g.position),I.a.y-=.73,I.a.z+=.15,I.to===-1?I.b.set(0,-1+rt.position.y,.5):(I.b.copy(Z[I.to].g.position),I.b.y-=.73,I.b.z+=.15),I.c.copy(I.a).lerp(I.b,.5),I.c.y-=.35,I.c.z+=.35+Math.sin(E*.42+I.index)*.18;for(let it=0;it<=It;it++){let H=it/It;qt(I,H,C),Qt.copy(I.c).sub(I.a).multiplyScalar(2*(1-H)).addScaledVector(Dt.copy(I.b).sub(I.c),2*H).normalize(),Wt.crossVectors(Qt,M),Wt.lengthSq()<.01?Wt.set(1,0,0):Wt.normalize(),kt.crossVectors(Qt,Wt).normalize();for(let j=0;j<=St;j++){let Tt=j/St*Math.PI*2,Pt=(it*(St+1)+j)*3,Ht=.012;I.positions[Pt]=C.x+Ht*(Wt.x*Math.cos(Tt)+kt.x*Math.sin(Tt)),I.positions[Pt+1]=C.y+Ht*(Wt.y*Math.cos(Tt)+kt.y*Math.sin(Tt)),I.positions[Pt+2]=C.z+Ht*(Wt.z*Math.cos(Tt)+kt.z*Math.sin(Tt))}}I.geometry.attributes.position.needsUpdate=!0,I.geometry.setDrawRange(0,Math.floor(Y*It)*St*6),I.mesh.visible=Y>.005}let L=new he(A,g,Ot.length*4);L.frustumCulled=!1,L.instanceMatrix.setUsage(Ze),L.renderOrder=4,n.add(L);let T=[];for(let I=0;I<4;I++){let E=new Xt;n.add(E),x(.45,.29,.025,f,E,0,0,0,5),x(.42,.018,.009,g,E,0,.116,.017,6);for(let Y=0;Y<3;Y++)x(Y===2?.17:.32,.012,.009,Y===2?g:m,E,Y===2?-.075:0,.052-Y*.052,.017,6);T.push(E)}let et=new Xt;n.add(et);let vt=[],wt=[.5,.85,1.25,1.75,2.3,2.85,3.45];for(let I=0;I<7;I++){let E=new Xt;et.add(E);let Y=x(.43,1,.48,I%3===0?_:u,E,0,.5,0,-3),it=x(.46,.035,.51,g,E,0,1.02,0,0);vt.push({g:E,column:Y,cap:it,height:wt[I],x:-2.45+I*.81})}let pt=vt.map(I=>new U(I.x,-1.58+I.height+.14,-2)),ft=new xi(pt),Mt=new Lt(l(new qn(ft,r?32:72,.023,r?3:5,!1)),g);Mt.renderOrder=2,et.add(Mt);let bt=$(2.7,.89,"station","PR\xD3XIMO PASSO",["Clareza para continuar.","Ajustar \xB7 conectar \xB7 evoluir"],et);bt.position.set(.3,2.2,-2.4),bt.scale.setScalar(.8);let zt=new Lt(A,g);zt.scale.setScalar(.07),et.add(zt);let ct=new he(v,_,r?18:36);ct.frustumCulled=!1,ct.instanceMatrix.setUsage(Ze),n.add(ct);let _t=new he(A,S,r?26:64);_t.frustumCulled=!1,n.add(_t);let Nt=document.createElement("canvas");Nt.width=Nt.height=128;let mt=Nt.getContext("2d"),yt=mt.createRadialGradient(64,64,1,64,64,64);yt.addColorStop(0,"#eab46d38"),yt.addColorStop(.3,"#72b59a16"),yt.addColorStop(1,"#72b59a00"),mt.fillStyle=yt,mt.fillRect(0,0,128,128);let Ft=new Pe(Nt);c.add(Ft);let ot=new Lt(l(new Te(10,8)),h({map:Ft,color:"#fff",transparent:!0,opacity:.65,depthWrite:!1,toneMapped:!1},!0));ot.renderOrder=-30,n.add(ot);let G=new U,R=new U;function st(I,E,Y,it,H,j,Tt,Pt,Ht=0,At=0,K=0){w.position.set(Y,it,H),w.rotation.set(Ht,At,K),w.scale.set(j,Tt,Pt),w.updateMatrix(),I.setMatrixAt(E,w.matrix)}function B(I,E,Y,it={}){let H=Ud(I,E),{t:j}=H,Tt=it.mobile??Y.aspect<1.2;n.rotation.set(0,0,0),n.position.set(0,0,0),lt.forEach((K,Et)=>{let Jt=_s((H.organize-Et*.025)/.8),ne=1-Jt;K.g.position.set(K.x+Math.sin(Et*3.3)*ne*2.6,K.y-ne*(1.8+Et*.13),K.z+Math.cos(Et*2.1)*ne*2.4),K.g.rotation.set(ne*(Et%2?.65:-.65),ne*(Et-4)*.26,0),K.g.scale.setScalar(.45+.55*Jt),K.led.visible=H.connect>.1}),Z.forEach((K,Et)=>{let Jt=_s((H.organize-Et*.035)/.84),ne=1-Jt,Re=Math.sin(Jt*Math.PI);K.g.position.lerpVectors(K.scatter,K.pose,Jt),K.g.position.y+=Math.sin(j*.57+Et)*(.12*ne+.025)+Re*(Et%2?.7:-.5),K.g.position.z+=Re*.8,K.g.rotation.set(ne*(Et%2?.26:-.2),ne*(Et%2?-.42:.42),ne*(Et%2?.12:-.1)),K.panel.rotation.x=-.04+ne*.14,K.pedestal.scale.y=Math.max(.01,H.organize),K.port.rotation.z=j*.5+Et,K.beacons.forEach((Xe,wn)=>Xe.scale.y=.018*(.5+.5*Math.sin(j*2.3+Et+wn))),K.scan.position.y=-.5+(j*.18+Et*.25)%1*1,K.scan.visible=H.connect>.2}),rt.position.set(0,-2.7*(1-H.organize),-.15*(1-H.operate)),rt.scale.setScalar(.3+.7*H.organize),rt.visible=H.organize>.005,xt.position.y=.55+.7*(1-H.operate),xt.rotation.x=-.22*(1-H.operate),xt.rotation.y=Math.sin(j*.27)*.012,X.position.y=-1.4-.75*(1-H.operate),Rt.scale.y=.9+.5*(1-H.operate),k.forEach((K,Et)=>{K.rotation.z=j*(Et%2?-.32:.22)+Et*.7,K.scale.setScalar((.56+Et*.17)*(1+Math.sin(j*.8+Et)*.04))}),J.rotation.y=j*.3,F.position.y=-1.2*(1-H.organize),F.scale.setScalar(.8+.2*H.organize),F.visible=H.organize>.01,at.forEach((K,Et)=>K.rotation.z=j*(Et%2?.025:-.035));for(let K=0;K<Ct.count;K++){let Et=K/Ct.count*Math.PI*2+j*.025;st(Ct,K,Math.cos(Et)*3.62,-1.8,Math.sin(Et)*2.4,.028,.018,K%4===0?.19:.075,0,-Et,0)}Ct.instanceMatrix.needsUpdate=!0,Ot.forEach((K,Et)=>{let Jt=_s((H.connect-Et*.028)/.78);Ut(K,j,Jt);for(let ne=0;ne<4;ne++){let Re=(j*(.15+Et*.006)-ne*.035+Et*.107+1)%1;qt(K,Re,C);let Xe=Jt*(H.operate*.6+.4)*(ne===0?.066:.038-ne*.006);st(L,Et*4+ne,C.x,C.y,C.z,Xe,Xe,Xe)}}),L.instanceMatrix.needsUpdate=!0,L.visible=H.connect>.001,T.forEach((K,Et)=>{let Jt=(j*.12+Et*.23)%1;qt(Ot[Et],Jt,K.position),K.position.y+=.12,K.scale.setScalar(H.operate*(.6+.4*Math.sin(Jt*Math.PI))),K.visible=H.operate>.005}),et.visible=H.evolve>.001,et.scale.setScalar(Math.max(.001,H.evolve)),vt.forEach((K,Et)=>{let Jt=_s((H.evolve-Et*.04)/.72),ne=Math.max(.02,K.height*Jt);K.g.position.set(K.x,-1.58,-2),K.column.scale.y=ne,K.column.position.y=ne/2,K.cap.position.y=ne+.025}),Mt.geometry.setDrawRange(0,Math.floor(H.evolve*(r?32:72))*(r?3:5)*6),ft.getPointAt(j*.13%1,zt.position),bt.position.y=2.15+Math.sin(j*.6)*.045;for(let K=0;K<ct.count;K++){let Et=K*2.39996+j*.035,Jt=3.2+K%4*.34,ne=1-H.organize,Re=Math.cos(Et)*Jt*(.5+ne*.8),Xe=-1.1+Math.sin(Et)*.5+ne*(Math.cos(K)*2.7),wn=Math.sin(Et)*Jt*.7,Cs=.042+K%3*.015;st(ct,K,Re,Xe,wn,Cs,Cs*.38,Cs,j*.12+K,j*.16+K,0)}ct.instanceMatrix.needsUpdate=!0;for(let K=0;K<_t.count;K++){let Et=K*2.39996+j*.014,Jt=3.7+K%7*.17;st(_t,K,Math.cos(Et)*Jt,Math.sin(K*4.7+j*.12)*2.4,Math.sin(Et)*2.7-1,.012,.012,.012)}_t.instanceMatrix.needsUpdate=!0;let Pt=H.yaw*(Tt?.63:1)+Math.sin(j*.13)*.018;G.set(0,-.2+H.evolve*.26,0);let At=Math.max(Tt?5.5:7.2,(Tt?10.7:11.8)/Y.aspect)*H.zoom/(2*Math.tan(Be.degToRad(Y.fov/2)));return R.set(Math.sin(Pt),H.elevation*(Tt?.76:1),Math.cos(Pt)).normalize(),Y.position.copy(R).multiplyScalar(At).add(G),Y.lookAt(G),Y.updateProjectionMatrix(),Y.updateMatrixWorld(!0),T.forEach(K=>K.quaternion.copy(Y.quaternion)),ot.position.set(0,-.4,-3),ot.quaternion.copy(Y.quaternion),ot.scale.setScalar(.9+Math.sin(j*.45)*.04),i.dataset.rendered="true",i.dataset.filmProgress=H.p.toFixed(4),i.dataset.motionTime=j.toFixed(2),i.dataset.packetPhase=H.pulse.toFixed(4),i.dataset.cameraYaw=Pt.toFixed(4),H}let Q=0;return n.traverse(I=>{I.isMesh&&Q++}),i.dataset.resultMeshes=Q,{group:n,update:B,dispose(){s.remove(n),n.traverse(I=>{I.isInstancedMesh&&I.dispose()}),o.forEach(I=>I.dispose()),a.forEach(I=>I.dispose()),c.forEach(I=>I.dispose())}}}var Sy=s=>Math.max(0,Math.min(1,Number.isFinite(s)?s:0));function Ey(s,t){let e=Math.max(0,Number.isFinite(t)?t:0)*.001,n=Sy(s);return{t:e,p:n,breath:.5+.5*Math.sin(e*.82),yaw:e*.22+n*.7,orbit:.26*Math.sin(e*.15)+n*.55,lift:Math.sin(e*.72)*.13,phase:Math.floor((e/9+n*1.4)%3),active:Math.floor(e/3.8)%4}}function Nd({scene:s,software:t=!1,quality:e="medium"}){let n=new Xt;n.visible=!1,s.add(n);let i=t||e==="low",r=new Set,o=new Set,a=new Set,c=document.querySelector(".intelligence-world"),l=[...c.querySelectorAll("[data-reactor-label]")],h=document.querySelector("[data-reactor-phase]"),u=document.querySelector("[data-reactor-copy]"),d=ft=>(r.add(ft),ft),f=(ft,Mt=!1)=>{let bt=Mt?new Ce(ft):new ye({roughness:.28,metalness:.65,...ft});return o.add(bt),bt},_=f({color:"#f68a27",roughness:.27,metalness:.64}),g=f({color:"#35413a",metalness:.8}),m=f({color:"#cbd9ca",roughness:.3,metalness:.72}),p=f({color:"#ffb85b",toneMapped:!1},!0),S=f({color:"#e9f4d9",toneMapped:!1},!0),v=f({color:"#d67d31",toneMapped:!1,transparent:!0,opacity:.68},!0),y=f({color:"#69a99f",toneMapped:!1,transparent:!0,opacity:.34},!0),A=f({color:"#af9a66",toneMapped:!1,transparent:!0,opacity:.19},!0),b=d(i?new pe(1,1,1):new Ge(1,1,1,2,.07)),w=d(new Pn(1,i?7:12,i?5:9)),C=d(new In(1,.009,i?3:5,i?44:80)),M=new ae,x=new U,D=new U,V=new Xt;n.add(V);let z=i?3:4,W=z**3,$=new he(b,_,W);$.frustumCulled=!1,$.instanceMatrix.setUsage(Ze),V.add($);let O=new Lt(d(new Xn(.4,i?0:1)),p);V.add(O);let lt=new Xt;V.add(lt);function Z(ft,Mt,bt,zt,ct){let _t=new U(...ft),Nt=new U(...Mt),mt=Nt.clone().sub(_t),yt=new Lt(b,zt);return yt.position.copy(_t).add(Nt).multiplyScalar(.5),yt.scale.set(bt,mt.length(),bt),yt.quaternion.setFromUnitVectors(new U(0,1,0),mt.normalize()),ct.add(yt),yt}let ht=[];for(let ft of[-1,1])for(let Mt of[-1,1])for(let bt of[-1,1])ht.push([ft*.85,Mt*.85,bt*.85]);for(let ft=0;ft<ht.length;ft++)for(let Mt=ft+1;Mt<ht.length;Mt++)ht[ft].filter((bt,zt)=>bt!==ht[Mt][zt]).length===1&&Z(ht[ft],ht[Mt],.012,v,lt);let rt=[];for(let ft=0;ft<5;ft++){let Mt=new Lt(C,ft===1?v:ft===3?y:A),bt=1.28+ft*.34;Mt.scale.setScalar(bt),n.add(Mt),rt.push(Mt)}let xt=Array.from({length:4},(ft,Mt)=>{let bt=new Xt;n.add(bt);let zt=new Lt(b,Mt%2?m:_);zt.scale.setScalar(.25),bt.add(zt);let ct=new Lt(C,Mt%2?y:v);ct.scale.setScalar(.43),bt.add(ct);let _t=new Lt(C,A);_t.scale.setScalar(.53),_t.rotation.x=Math.PI/2,bt.add(_t);let Nt=new Lt(w,p);return Nt.scale.setScalar(.075),bt.add(Nt),{g:bt,cube:zt,rim:ct,rim2:_t,nucleus:Nt,base:[-2.45,2.45,-2.15,2.35][Mt],y:[1.25,.95,-1.25,-1.3][Mt],z:[-.5,-.2,.65,.8][Mt]}}),Rt=i?18:30,X=i?3:5;function N(ft){let Mt=d(new ke),bt=new Float32Array((Rt+1)*(X+1)*3),zt=[];for(let _t=0;_t<Rt;_t++)for(let Nt=0;Nt<X;Nt++){let mt=_t*(X+1)+Nt,yt=mt+X+1;zt.push(mt,yt,mt+1,yt,yt+1,mt+1)}Mt.setAttribute("position",new Fe(bt,3)),Mt.setIndex(zt);let ct=new Lt(Mt,ft%3===1?y:v);return ct.frustumCulled=!1,ct.renderOrder=-1,n.add(ct),{mesh:ct,positions:bt,geometry:Mt,a:new U,b:new U,c:new U,index:ft}}let k=Array.from({length:8},(ft,Mt)=>N(Mt)),J=new he(w,p,k.length*4);J.frustumCulled=!1,J.instanceMatrix.setUsage(Ze),n.add(J);let F=new he(w,A,i?62:128);F.frustumCulled=!1,F.instanceMatrix.setUsage(Ze),n.add(F);let at=new he(b,v,i?32:64);at.frustumCulled=!1,n.add(at);let gt=document.createElement("canvas");gt.width=gt.height=128;let Ct=gt.getContext("2d"),It=Ct.createRadialGradient(64,64,0,64,64,64);It.addColorStop(0,"#ffb04b60"),It.addColorStop(.25,"#ec872620"),It.addColorStop(1,"#ec872600"),Ct.fillStyle=It,Ct.fillRect(0,0,128,128);let St=new Pe(gt);a.add(St);let Ot=f({map:St,color:"#ffffff",transparent:!0,depthWrite:!1,opacity:.75,toneMapped:!1},!0),q=new Lt(d(new Te(5,5)),Ot);q.renderOrder=-20,n.add(q);let Qt=new U,Wt=new U,kt=new U,Dt=new U,qt=new U(0,1,0);function Ut(ft,Mt,bt){let zt=1-Mt;return bt.copy(ft.a).multiplyScalar(zt*zt).addScaledVector(ft.c,2*zt*Mt).addScaledVector(ft.b,Mt*Mt)}function L(ft,Mt){let{a:bt,b:zt,c:ct,positions:_t}=ft;ft.index<4?(bt.set(0,Math.sin(Mt*.72)*.13,0),zt.copy(xt[ft.index].g.position)):(bt.copy(xt[ft.index-4].g.position),zt.copy(xt[(ft.index-3)%4].g.position)),ct.copy(bt).lerp(zt,.5),ct.z+=Math.sin(Mt*.41+ft.index*.9)*.72+(ft.index<4?.75:-.6),ct.y+=Math.sin(Mt*.55+ft.index)*.38;for(let Nt=0;Nt<=Rt;Nt++){let mt=Nt/Rt;Ut(ft,mt,Qt),Wt.copy(ct).sub(bt).multiplyScalar(2*(1-mt)).addScaledVector(x.copy(zt).sub(ct),2*mt).normalize(),kt.crossVectors(Wt,qt),kt.lengthSq()<.01?kt.set(1,0,0):kt.normalize(),Dt.crossVectors(Wt,kt).normalize();for(let yt=0;yt<=X;yt++){let Ft=yt/X*Math.PI*2,ot=(Nt*(X+1)+yt)*3,G=.011;_t[ot]=Qt.x+G*(kt.x*Math.cos(Ft)+Dt.x*Math.sin(Ft)),_t[ot+1]=Qt.y+G*(kt.y*Math.cos(Ft)+Dt.y*Math.sin(Ft)),_t[ot+2]=Qt.z+G*(kt.z*Math.cos(Ft)+Dt.z*Math.sin(Ft))}}ft.geometry.attributes.position.needsUpdate=!0}function T(ft,Mt,bt,zt,ct=0){M.position.copy(bt),M.rotation.set(ct,ct*.7,0),M.scale.setScalar(zt),M.updateMatrix(),ft.setMatrixAt(Mt,M.matrix)}let et=[["01 / CONTEXTO","A informa\xE7\xE3o encontra suas conex\xF5es."],["02 / INTELIG\xCANCIA","O contexto ajuda a enxergar o pr\xF3ximo passo."],["03 / A\xC7\xC3O","Atendimento e opera\xE7\xE3o seguem no mesmo fluxo."]],vt=-1;function wt(ft,Mt,bt,zt={width:800,height:600}){let ct=Ey(ft,Mt),{t:_t}=ct;V.position.y=ct.lift,V.rotation.set(.18+Math.sin(_t*.27)*.12,ct.yaw,Math.sin(_t*.31)*.13),O.rotation.set(_t*.12,-_t*.18,_t*.08),O.scale.setScalar(.84+ct.breath*.23),lt.rotation.set(-_t*.06,_t*.04,.1),lt.scale.setScalar(1.03+ct.breath*.07);let Nt=.13+ct.breath*.29,mt=1.16/z;for(let G=0;G<W;G++){let R=(G%z-(z-1)/2)*mt,st=(Math.floor(G/z)%z-(z-1)/2)*mt,B=(Math.floor(G/(z*z))-(z-1)/2)*mt;Qt.set(R,st,B);let Q=Qt.length()||1;Qt.multiplyScalar(1+Nt/Q),Qt.y+=Math.sin(_t*1.1+G*.7)*.015,T($,G,Qt,mt*.83,.035*Math.sin(_t*.6+G))}$.instanceMatrix.needsUpdate=!0,rt.forEach((G,R)=>{G.position.y=ct.lift*.4,G.rotation.set(.3+R*.46+Math.sin(_t*.15+R)*.12,.25+R*.52+_t*(R%2?.045:-.036),_t*(R%2?-.085:.055)+R*.62)}),xt.forEach((G,R)=>{G.g.position.set(G.base+Math.sin(_t*.38+R*1.7)*.22,G.y+Math.cos(_t*.46+R)*.22,G.z+Math.sin(_t*.34+R*1.1)*.4),G.cube.rotation.set(_t*(R%2?.25:-.22),_t*.35+R,.25+Math.sin(_t*.4+R)*.2),G.rim.rotation.set(.2+Math.sin(_t*.3+R)*.35,_t*.18+R,_t*.12),G.rim2.rotation.z=-_t*.12,G.nucleus.position.set(Math.cos(_t*.7+R)*.36,Math.sin(_t*.7+R)*.36,.04)}),k.forEach(G=>{L(G,_t);for(let R=0;R<4;R++){let st=(_t*(.11+G.index*.003)+R*.035+G.index*.137)%1;Ut(G,st,Qt),T(J,G.index*4+R,Qt,R===0?.072:.044-R*.008)}}),J.instanceMatrix.needsUpdate=!0;for(let G=0;G<F.count;G++){let R=G*2.39996+_t*(G%2?.024:-.019),st=1.4+G%19*.12;Qt.set(Math.cos(R)*st,Math.sin(R)*st*.7,Math.sin(G*5.1+_t*.09)*1.7-.7),T(F,G,Qt,.012+G%4*.003)}F.instanceMatrix.needsUpdate=!0;for(let G=0;G<at.count;G++){let R=G/at.count*Math.PI*2+_t*.1;Qt.set(Math.cos(R)*2.9,Math.sin(R)*2.9*.66,-.7),M.position.copy(Qt),M.rotation.set(.2,0,R),M.scale.set(.017,.065,.012),M.updateMatrix(),at.setMatrixAt(G,M.matrix)}at.instanceMatrix.needsUpdate=!0;let yt=new U(0,.04,0),ot=Math.max(5.15,6.9/bt.aspect)*(1-.055*Math.sin(_t*.21))/(2*Math.tan(Be.degToRad(bt.fov/2)));return bt.position.set(Math.sin(ct.orbit)*ot,.62+Math.sin(_t*.17)*.18,Math.cos(ct.orbit)*ot).add(yt),bt.lookAt(yt),bt.updateProjectionMatrix(),bt.updateMatrixWorld(!0),q.position.set(0,ct.lift*.4,-1.1),q.quaternion.copy(bt.quaternion),q.scale.setScalar(.92+ct.breath*.1),s.updateMatrixWorld(!0),xt.forEach((G,R)=>{D.copy(G.g.position),D.y+=R<2?.52:-.48,D.project(bt);let st=Math.max(.15,Math.min(.85,D.x*.5+.5))*zt.width,B=Math.max(.12,Math.min(.88,-D.y*.5+.5))*zt.height;l[R]&&(l[R].style.transform=`translate3d(${st.toFixed(2)}px,${B.toFixed(2)}px,0) translate(-50%,-50%)`,l[R].dataset.active=String(ct.active===R))}),ct.phase!==vt&&(h&&(h.textContent=et[ct.phase][0]),u&&(u.textContent=et[ct.phase][1]),vt=ct.phase),c.dataset.rendered="true",c.dataset.motionTime=_t.toFixed(2),c.dataset.coreYaw=ct.yaw.toFixed(3),c.dataset.packetPhase=(_t*.11%1).toFixed(3),ct}let pt=0;return n.traverse(ft=>{ft.isMesh&&pt++}),c.dataset.reactorMeshes=pt,{group:n,update:wt,dispose(){s.remove(n),n.traverse(ft=>{ft.isInstancedMesh&&ft.dispose()}),r.forEach(ft=>ft.dispose()),o.forEach(ft=>ft.dispose()),a.forEach(ft=>ft.dispose())}}}function Fd(s){let t=[...document.querySelectorAll("[data-scene-window]")].map(o=>({el:o,id:o.dataset.sceneWindow,section:o.closest("[data-chapter]")})),e=!0,n=null,i=()=>{e=!0},r=new ResizeObserver(i);return t.forEach(({el:o})=>r.observe(o)),addEventListener("scroll",i,{passive:!0}),addEventListener("resize",i,{passive:!0}),{read(){if(!e)return n;e=!1;let o=document.getElementById("header").offsetHeight,a=null,c=0;for(let S of t){let v=S.el.getBoundingClientRect(),y=Math.max(0,Math.min(innerHeight,v.bottom)-Math.max(o,v.top)),A=Math.max(0,Math.min(innerWidth,v.right)-Math.max(0,v.left));A*y>c&&(c=A*y,a={...S,rect:v})}if(!a||c<800)return s.style.visibility="hidden",n=null,null;let{rect:l,section:h,id:u}=a,d=h.getBoundingClientRect(),f=h.querySelector(".section-pin"),_=h.querySelector(".cinematic-intro")?.offsetHeight||0,g=f&&getComputedStyle(f).position==="sticky",m=Math.max(0,Math.min(1,g?(-d.top-_)/Math.max(1,d.height-_-f.offsetHeight):(innerHeight*.45-d.top)/Math.max(1,d.height)));s.parentElement!==a.el&&a.el.appendChild(s),Object.assign(s.style,{left:"0",top:"0",width:`${l.width}px`,height:`${l.height}px`});let p=u==="problema"&&!g?Math.max(0,Math.min(1,(innerHeight*.85-l.top)/(l.height+innerHeight*.35))):m;return n={id:u,progress:p,width:Math.round(l.width),height:Math.round(l.height),rect:l},s.dataset.scene=u,s.dataset.progress=p.toFixed(4),n},invalidate:i,dispose(){r.disconnect(),removeEventListener("scroll",i),removeEventListener("resize",i)}}}function yi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Xd(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},gr={duration:.5,overwrite:!1,delay:0},mh,Ke,Ae,On=1e8,Me=1/On,sh=Math.PI*2,by=sh/4,Ty=0,qd=Math.sqrt,wy=Math.cos,Ay=Math.sin,We=function(t){return typeof t=="string"},Le=function(t){return typeof t=="function"},Mi=function(t){return typeof t=="number"},va=function(t){return typeof t>"u"},ii=function(t){return typeof t=="object"},mn=function(t){return t!==!1},gh=function(){return typeof window<"u"},ua=function(t){return Le(t)||We(t)},Yd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},sn=Array.isArray,rh=/(?:-?\.?\d|\.)+/gi,_h=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Kl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,xh=/[+-]=-?[.\d]+/,Zd=/[^,'"\[\]\s]+/gi,Ry=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ie,ei,oh,yh,bn={},ma={},$d,Jd=function(t){return(ma=_r(t,bn))&&rn},Ma=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},no=function(t,e){return!e&&console.warn(t)},Kd=function(t,e){return t&&(bn[t]=e)&&ma&&(ma[t]=e)||bn},io=function(){return 0},Cy={suppressEvents:!0,isStart:!0,kill:!1},da={suppressEvents:!0,kill:!1},Py={suppressEvents:!0},vh={},Gi=[],ah={},Qd,fn={},Ql={},Bd=30,fa=[],Mh="",Sh=function(t){var e=t[0],n,i;if(ii(e)||Le(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=fa.length;i--&&!fa[i].targetTest(e););n=fa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new wh(t[i],n)))||t.splice(i,1);return t},Wi=function(t){return t._gsap||Sh(Nn(t))[0]._gsap},Eh=function(t,e,n){return(n=t[e])&&Le(n)?t[e]():va(n)&&t.getAttribute&&t.getAttribute(e)||n},ln=function(t,e){return(t=t.split(",")).forEach(e)||t},Ue=function(t){return Math.round(t*1e5)/1e5||0},ze=function(t){return Math.round(t*1e7)/1e7||0},Ss=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Iy=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ga=function(){var t=Gi.length,e=Gi.slice(0),n,i;for(ah={},Gi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},bh=function(t){return!!(t._initted||t._startAt||t.add)},jd=function(t,e,n,i){Gi.length&&!Ke&&ga(),t.render(e,n,i||!!(Ke&&e<0&&bh(t))),Gi.length&&!Ke&&ga()},tf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Zd).length<2?e:We(t)?t.trim():t},ef=function(t){return t},Tn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Dy=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},_r=function(t,e){for(var n in e)t[n]=e[n];return t},zd=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ii(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},_a=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},jr=function(t){var e=t.parent||Ie,n=t.keyframes?Dy(sn(t.keyframes)):Tn;if(mn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Ly=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},nf=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Sa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Xi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},xs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Uy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ch=function(t,e,n,i){return t._startAt&&(Ke?t._startAt.revert(da):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Oy=function s(t){return!t||t._ts&&s(t.parent)},kd=function(t){return t._repeat?xr(t._tTime,t=t.duration()+t._rDelay)*t:0},xr=function(t,e){var n=Math.floor(t=ze(t/e));return t&&n===t?n-1:n},xa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ea=function(t){return t._end=ze(t._start+(t._tDur/Math.abs(t._ts||t._rts||Me)||0))},ba=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ze(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ea(t),n._dirty||xs(n,t)),t},sf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=xa(t.rawTime(),e),(!e._dur||oo(0,e.totalDuration(),n)-e._tTime>Me)&&e.render(n,!0)),xs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Me}},ni=function(t,e,n,i){return e.parent&&Xi(e),e._start=ze((Mi(n)?n:n||t!==Ie?Un(t,n,e):t._time)+e._delay),e._end=ze(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),nf(t,e,"_first","_last",t._sort?"_start":0),lh(e)||(t._recent=e),i||sf(t,e),t._ts<0&&ba(t,t._tTime),t},rf=function(t,e){return(bn.ScrollTrigger||Ma("scrollTrigger",e))&&bn.ScrollTrigger.create(e,t)},of=function(t,e,n,i,r){if(Ch(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Ke&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Qd!==pn.frame)return Gi.push(t),t._lazy=[r,i],1},Ny=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},lh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Fy=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Ny(t)&&!(!t._initted&&lh(t))||(t._ts<0||t._dp._ts<0)&&!lh(t))?0:1,a=t._rDelay,c=0,l,h,u;if(a&&t._repeat&&(c=oo(0,t._tDur,e),h=xr(c,a),t._yoyo&&h&1&&(o=1-o),h!==xr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Ke||i||t._zTime===Me||!e&&t._zTime){if(!t._initted&&of(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?Me:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&ch(t,e,n,!0),t._onUpdate&&!n&&En(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&En(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Xi(t,1),!n&&!Ke&&(En(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},By=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},yr=function(t,e,n,i){var r=t._repeat,o=ze(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:ze(o*(r+1)+t._rDelay*r):o,a>0&&!i&&ba(t,t._tTime=t._tDur*a),t.parent&&Ea(t),n||xs(t.parent,t),t},Hd=function(t){return t instanceof Je?xs(t):yr(t,t._dur)},zy={_start:0,endTime:io,totalDuration:io},Un=function s(t,e,n){var i=t.labels,r=t._recent||zy,o=t.duration()>=On?r.endTime(!1):t._dur,a,c,l;return We(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(sn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},to=function(t,e,n){var i=Mi(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=mn(c.vars.inherit)&&c.parent;o.immediateRender=mn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Oe(e[0],o,e[r+1])},qi=function(t,e){return t||t===0?e(t):e},oo=function(t,e,n){return n<t?t:n>e?e:n},Qe=function(t,e){return!We(t)||!(e=Ry.exec(t))?"":e[1]},ky=function(t,e,n){return qi(n,function(i){return oo(t,e,i)})},hh=[].slice,af=function(t,e){return t&&ii(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ii(t[0]))&&!t.nodeType&&t!==ei},Hy=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return We(i)&&!e||af(i,1)?(r=n).push.apply(r,Nn(i)):n.push(i)})||n},Nn=function(t,e,n){return Ae&&!e&&Ae.selector?Ae.selector(t):We(t)&&!n&&(oh||!vr())?hh.call((e||yh).querySelectorAll(t),0):sn(t)?Hy(t,n):af(t)?hh.call(t,0):t?[t]:[]},uh=function(t){return t=Nn(t)[0]||no("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Nn(e,n.querySelectorAll?n:n===t?no("Invalid scope")||yh.createElement("div"):t)}},cf=function(t){return t.sort(function(){return .5-Math.random()})},lf=function(t){if(Le(t))return t;var e=ii(t)?t:{each:t},n=ys(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,h=i,u=i;return We(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,m=o[g],p,S,v,y,A,b,w,C,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,On])[1],!M){for(w=-On;w<(w=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],p=c?Math.min(M,g)*h-.5:i%M,S=M===On?0:c?g*u/M-.5:i/M|0,w=0,C=On,b=0;b<g;b++)v=b%M-p,y=S-(b/M|0),m[b]=A=l?Math.abs(l==="y"?y:v):qd(v*v+y*y),A>w&&(w=A),A<C&&(C=A);i==="random"&&cf(m),m.max=w-C,m.min=C,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(M>g?g-1:l?l==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Qe(e.amount||e.each)||0,n=n&&g<0?xf(n):n}return g=(m[d]-m.min)/m.max||0,ze(m.b+(n?n(g):g)*m.v)+m.u}},dh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ze(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Mi(n)?0:Qe(n))}},hf=function(t,e){var n=sn(t),i,r;return!n&&ii(t)&&(i=n=t.radius||On,t.values?(t=Nn(t.values),(r=!Mi(t[0]))&&(i*=i)):t=dh(t.increment)),qi(e,n?Le(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),c=parseFloat(r?o.y:0),l=On,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-a,f=t[u].y-c,d=d*d+f*f):d=Math.abs(t[u]-a),d<l&&(l=d,h=u);return h=!i||l<=i?t[h]:o,r||h===o||Mi(o)?h:h+Qe(o)}:dh(t))},uf=function(t,e,n,i){return qi(sn(t)?!e:n===!0?!!(n=0):!i,function(){return sn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Vy=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Gy=function(t,e){return function(n){return t(parseFloat(n))+(e||Qe(n))}},Wy=function(t,e,n){return ff(t,e,0,1,n)},df=function(t,e,n){return qi(n,function(i){return t[~~e(i)]})},Xy=function s(t,e,n){var i=e-t;return sn(t)?df(t,s(0,t.length),e):qi(n,function(r){return(i+(r-t)%i)%i+t})},qy=function s(t,e,n){var i=e-t,r=i*2;return sn(t)?df(t,s(0,t.length-1),e):qi(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Mr=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?Zd:rh),n+=t.substr(e,i-e)+uf(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},ff=function(t,e,n,i,r){var o=e-t,a=i-n;return qi(r,function(c){return n+((c-t)/o*a||0)})},Yy=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=We(t),a={},c,l,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(sn(t)&&!sn(e)){for(h=[],u=t.length,d=u-2,l=1;l<u;l++)h.push(s(t[l-1],t[l]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=_r(sn(t)?[]:{},t));if(!h){for(c in e)Ah.call(a,t,c,"get",e[c]);r=function(_){return Dh(_,a)||(o?t.p:t)}}}return qi(n,r)},Vd=function(t,e,n){var i=t.labels,r=On,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(c=o,r=a);return c},En=function(t,e,n){var i=t.vars,r=i[e],o=Ae,a=t._ctx,c,l,h;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&Gi.length&&ga(),a&&(Ae=a),h=c?r.apply(l,c):r.call(l),Ae=o,h},Kr=function(t){return Xi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ke),t.progress()<1&&En(t,"onInterrupt"),t},mr,pf=[],mf=function(t){if(t)if(t=!t.name&&t.default||t,gh()||t.headless){var e=t.name,n=Le(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:io,render:Dh,add:Ah,kill:lv,modifier:cv,rawVars:0},o={targetTest:0,get:0,getSetter:Ta,aliases:{},register:0};if(vr(),t!==i){if(fn[e])return;Tn(i,Tn(_a(t,r),o)),_r(i.prototype,_r(r,_a(t,o))),fn[i.prop=e]=i,t.targetTest&&(fa.push(i),vh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Kd(e,i),t.register&&t.register(rn,i,hn)}else pf.push(t)},ve=255,Qr={aqua:[0,ve,ve],lime:[0,ve,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ve],navy:[0,0,128],white:[ve,ve,ve],olive:[128,128,0],yellow:[ve,ve,0],orange:[ve,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ve,0,0],pink:[ve,192,203],cyan:[0,ve,ve],transparent:[ve,ve,ve,0]},jl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ve+.5|0},gf=function(t,e,n){var i=t?Mi(t)?[t>>16,t>>8&ve,t&ve]:0:Qr.black,r,o,a,c,l,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Qr[t])i=Qr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ve,i&ve,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ve,t&ve]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(rh),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(l+1):h+l-h*l,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=jl(c+1/3,r,o),i[1]=jl(c,r,o),i[2]=jl(c-1/3,r,o);else if(~t.indexOf("="))return i=t.match(_h),n&&i.length<4&&(i[3]=1),i}else i=t.match(rh)||Qr.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/ve,o=i[1]/ve,a=i[2]/ve,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?c=l=0:(f=u-d,l=h>.5?f/(2-u-d):f/(u+d),c=u===r?(o-a)/f+(o<a?6:0):u===o?(a-r)/f+2:(r-o)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},_f=function(t){var e=[],n=[],i=-1;return t.split(vi).forEach(function(r){var o=r.match(Ms)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Gd=function(t,e,n){var i="",r=(t+i).match(vi),o=e?"hsla(":"rgba(",a=0,c,l,h,u;if(!r)return t;if(r=r.map(function(d){return(d=gf(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=_f(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(vi,"1").split(Ms),u=l.length-1;a<u;a++)i+=l[a]+(~c.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!l)for(l=t.split(vi),u=l.length-1;a<u;a++)i+=l[a]+r[a];return i+l[u]},vi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Qr)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Zy=/hsl[a]?\(/,Th=function(t){var e=t.join(" "),n;if(vi.lastIndex=0,vi.test(e))return n=Zy.test(e),t[1]=Gd(t[1],n),t[0]=Gd(t[0],n,_f(t[1])),!0},so,pn=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],c,l,h,u,d,f,_=function g(m){var p=s()-i,S=m===!0,v,y,A,b;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,v=A-o,(v>0||S)&&(b=++u.frame,d=A-u.time*1e3,u.time=A=A/1e3,o+=v+(v>=r?4:r-v),y=1),S||(c=l(g)),y)for(f=0;f<a.length;f++)a[f](A,d,b,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){$d&&(!oh&&gh()&&(ei=oh=window,yh=ei.document||{},bn.gsap=rn,(ei.gsapVersions||(ei.gsapVersions=[])).push(rn.version),Jd(ma||ei.GreenSockGlobals||!ei.gsap&&ei||{}),pf.forEach(mf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},so=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),so=0,l=io},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,p,S){var v=p?function(y,A,b,w){m(y,A,b,w),u.remove(v)}:m;return u.remove(m),a[S?"unshift":"push"](v),vr(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u}(),vr=function(){return!so&&pn.wake()},oe={},$y=/^[\d.\-M][\d.\-,\s]/,Jy=/["']/g,Ky=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,c,l;r<o;r++)c=n[r],a=r!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(Jy,"").trim():+l,i=c.substr(a+1).trim();return e},Qy=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},jy=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Ky(e[1])]:Qy(t).split(",").map(tf)):oe._CE&&$y.test(t)?oe._CE("",t):n},xf=function(t){return function(e){return 1-t(1-e)}},yf=function s(t,e){for(var n=t._first,i;n;)n instanceof Je?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},ys=function(t,e){return t&&(Le(t)?t:oe[t]||jy(t))||e},Es=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return ln(t,function(a){oe[a]=bn[a]=r,oe[o=a.toLowerCase()]=n;for(var c in r)oe[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=oe[a+"."+c]=r[c]}),r},vf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},th=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/sh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Ay((h-o)*r)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:vf(a);return r=sh/r,c.config=function(l,h){return s(t,l,h)},c},eh=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:vf(n);return i.config=function(r){return s(t,r)},i};ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Es(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Es("Elastic",th("in"),th("out"),th());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Es("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Es("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Es("Circ",function(s){return-(qd(1-s*s)-1)});Es("Sine",function(s){return s===1?1:-wy(s*by)+1});Es("Back",eh("in"),eh("out"),eh());oe.SteppedEase=oe.steps=bn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Me;return function(a){return((i*oo(0,o,a)|0)+r)*n}}};gr.ease=oe["quad.out"];ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Mh+=s+","+s+"Params,"});var wh=function(t,e){this.id=Ty++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Eh,this.set=e?e.getSetter:Ta},ro=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,yr(this,+e.duration,1,1),this.data=e.data,Ae&&(this._ctx=Ae,Ae.data.push(this)),so||pn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,yr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(vr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ba(this,n),!r._dp||r.parent||sf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Me||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),jd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+kd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+kd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?xr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Me?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?xa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Me?0:this._rts,this.totalTime(oo(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Ea(this),Uy(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(vr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Me&&(this._tTime-=Me)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ni(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Py);var i=Ke;return Ke=n,bh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ke=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Hd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Hd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Un(this,n),mn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,mn(i)),this._dur||(this._zTime=-Me),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Me:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Me,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Me)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=Le(n)?n:ef,a=function(){var l=i.then;i.then=null,Le(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),r(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Kr(this)},s}();Tn(ro.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Me,_prom:0,_ps:!1,_rts:1});var Je=function(s){Xd(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=mn(n.sortChildren),Ie&&ni(n.parent||Ie,yi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&rf(yi(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return to(0,arguments,this),this},e.from=function(i,r,o){return to(1,arguments,this),this},e.fromTo=function(i,r,o,a){return to(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,jr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Oe(i,r,Un(this,o),1),this},e.call=function(i,r,o){return ni(this,Oe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,c,l,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=h,o.parent=this,new Oe(i,o,Un(this,c)),this},e.staggerFrom=function(i,r,o,a,c,l,h){return o.runBackwards=1,jr(o).immediateRender=mn(o.immediateRender),this.staggerTo(i,r,o,a,c,l,h)},e.staggerFromTo=function(i,r,o,a,c,l,h,u){return a.startAt=o,jr(a).immediateRender=mn(a.immediateRender),this.staggerTo(i,r,a,c,l,h,u)},e.render=function(i,r,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:ze(i),u=this._zTime<0!=i<0&&(this._initted||!l),d,f,_,g,m,p,S,v,y,A,b,w;if(this!==Ie&&h>c&&i>=0&&(h=c),h!==this._tTime||o||u){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),d=h,y=this._start,v=this._ts,p=!v,u&&(l||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=ze(h%m),h===c?(g=this._repeat,d=l):(A=ze(h/m),g=~~A,g&&g===A&&(d=l,g--),d>l&&(d=l)),A=xr(this._tTime,m),!a&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),b&&g&1&&(d=l-d,w=1),g!==A&&!this._lock){var C=b&&A&1,M=C===(b&&g&1);if(g<A&&(C=!C),a=C?0:h%l?l:h,this._lock=1,this.render(a||(w?0:ze(g*m)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&En(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,M&&(this._lock=2,a=C?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;yf(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=By(this,ze(a),ze(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!r&&!A&&(En(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!p){S=0,_&&(h+=this._zTime=-Me);break}}f=_}else{f=this._last;for(var x=i<0?i:d;f;){if(_=f._prev,(f._act||x<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,r,o||Ke&&bh(f)),d!==this._time||!this._ts&&!p){S=0,_&&(h+=this._zTime=x?-Me:Me);break}}f=_}}if(S&&!r&&(this.pause(),S.render(d>=a?0:-Me)._zTime=d>=a?1:-1,this._ts))return this._start=y,Ea(this),this.render(i,r,o);this._onUpdate&&!r&&En(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Xi(this,1),!r&&!(i<0&&!a)&&(h||a||!c)&&(En(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Mi(r)||(r=Un(this,r,i)),!(i instanceof ro)){if(sn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(We(i))return this.addLabel(i,r);if(Le(i))i=Oe.delayedCall(0,i);else return this}return this!==i?ni(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-On);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Oe?r&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,o)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return We(i)?this.removeLabel(i):Le(i)?this.killTweensOf(i):(i.parent===this&&Sa(this,i),i===this._recent&&(this._recent=this._last),xs(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ze(pn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Un(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Oe.delayedCall(0,r||io,o);return a.data="isPause",this._hasPause=1,ni(this,a,Un(this,i))},e.removePause=function(i){var r=this._first;for(i=Un(this,i);r;)r._start===i&&r.data==="isPause"&&Xi(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Vi!==a[c]&&a[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Nn(i),c=this._first,l=Mi(r),h;c;)c instanceof Oe?Iy(c._targets,a)&&(l?(!Vi||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&o.push(c):(h=c.getTweensOf(a,r)).length&&o.push.apply(o,h),c=c._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Un(o,i),c=r,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,f,_=Oe.to(o,Tn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Me,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());_._dur!==m&&yr(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,Tn({startAt:{time:Un(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Vd(this,Un(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Vd(this,Un(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Me)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(l in c)c[l]>=o&&(c[l]+=i);return xs(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xs(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,c=On,l,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,ni(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>r&&a._ts&&(r=a._end),a=l;yr(o,o===Ie&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ie._ts&&(jd(Ie,xa(i,Ie)),Qd=pn.frame),pn.frame>=Bd){Bd+=gn.autoSleep||120;var r=Ie._first;if((!r||!r._ts)&&gn.autoSleep&&pn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||pn.sleep()}}},t}(ro);Tn(Je.prototype,{_lock:0,_hasPause:0,_forcing:0});var tv=function(t,e,n,i,r,o,a){var c=new hn(this._pt,t,e,0,1,Ih,null,r),l=0,h=0,u,d,f,_,g,m,p,S;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Mr(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),d=n.match(Kl)||[];u=Kl.exec(i);)_=u[0],g=i.substring(l,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Ss(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},l=Kl.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(xh.test(i)||p)&&(c.e=0),this._pt=c,c},Ah=function(t,e,n,i,r,o,a,c,l,h){Le(i)&&(i=i(r||0,t,o));var u=t[e],d=n!=="get"?n:Le(u)?l?t[e.indexOf("set")||!Le(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,f=Le(u)?l?rv:Ef:Ph,_;if(We(i)&&(~i.indexOf("random(")&&(i=Mr(i)),i.charAt(1)==="="&&(_=Ss(d,i)+(Qe(d)||0),(_||_===0)&&(i=_))),!h||d!==i||fh)return!isNaN(d*i)&&i!==""?(_=new hn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?av:bf,0,f),l&&(_.fp=l),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&Ma(e,i),tv.call(this,t,e,d,i,f,c||gn.stringFilter,l))},ev=function(t,e,n,i,r){if(Le(t)&&(t=eo(t,r,e,n,i)),!ii(t)||t.style&&t.nodeType||sn(t)||Yd(t))return We(t)?eo(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=eo(t[a],r,e,n,i);return o},Rh=function(t,e,n,i,r,o){var a,c,l,h;if(fn[t]&&(a=new fn[t]).init(r,a.rawVars?e[t]:ev(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=c=new hn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==mr))for(l=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)l[a._props[h]]=c;return a},Vi,fh,Ch=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,S=p&&p.data==="nested"?p.vars.targets:m,v=t._overwrite==="auto"&&!mh,y=t.timeline,A,b,w,C,M,x,D,V,z,W,$,O,lt;if(y&&(!d||!r)&&(r="none"),t._ease=ys(r,gr.ease),t._yEase=u?xf(ys(u===!0?r:u,gr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(V=m[0]?Wi(m[0]).harness:0,O=V&&i[V.prop],A=_a(i,vh),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?da:Cy),g._lazy=0),o){if(Xi(t._startAt=Oe.set(m,Tn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&mn(c),startAt:null,delay:0,onUpdate:l&&function(){return En(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ke||!a&&!f)&&t._startAt.revert(da),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),w=Tn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&mn(c),immediateRender:a,stagger:0,parent:p},A),O&&(w[V.prop]=O),Xi(t._startAt=Oe.set(m,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ke?t._startAt.revert(da):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Me,Me);else if(!e)return}for(t._pt=t._ptCache=0,c=_&&mn(c)||c&&!_,b=0;b<m.length;b++){if(M=m[b],D=M._gsap||Sh(m)[b]._gsap,t._ptLookup[b]=W={},ah[D.id]&&Gi.length&&ga(),$=S===m?b:S.indexOf(M),V&&(z=new V).init(M,O||A,t,$,S)!==!1&&(t._pt=C=new hn(t._pt,M,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(Z){W[Z]=C}),z.priority&&(x=1)),!V||O)for(w in A)fn[w]&&(z=Rh(w,A,t,$,M,S))?z.priority&&(x=1):W[w]=C=Ah.call(t,M,w,"get",A[w],$,S,0,i.stringFilter);t._op&&t._op[b]&&t.kill(M,t._op[b]),v&&t._pt&&(Vi=t,Ie.killTweensOf(M,W,t.globalTime(e)),lt=!t.parent,Vi=0),t._pt&&c&&(ah[D.id]=1)}x&&Lh(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!lt,d&&e<=0&&y.render(On,!0,!0)},nv=function(t,e,n,i,r,o,a,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return fh=1,t.vars[e]="+=0",Ch(t,a),fh=0,c?no(e+" not eligible for reset"):1;l.push(h)}for(f=l.length;f--;)u=l[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Ue(n)+Qe(u.e)),u.b&&(u.b=h.s+Qe(u.b))},iv=function(t,e){var n=t[0]?Wi(t[0]).harness:0,i=n&&n.aliases,r,o,a,c;if(!i)return e;r=_r({},e);for(o in i)if(o in r)for(c=i[o].split(","),a=c.length;a--;)r[c[a]]=r[o];return r},sv=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(sn(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},eo=function(t,e,n,i,r){return Le(t)?t.call(e,n,i,r):We(t)&&~t.indexOf("random(")?Mr(t):t},Mf=Mh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Sf={};ln(Mf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Sf[s]=1});var Oe=function(s){Xd(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:jr(i))||this;var c=a.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,f=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,S=i.parent||Ie,v=(sn(n)||Yd(n)?Mi(n[0]):"length"in i)?[n]:Nn(n),y,A,b,w,C,M,x,D;if(a._targets=v.length?Sh(v):no("GSAP target "+n+" not found. https://gsap.com",!gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||ua(l)||ua(h)){if(i=a.vars,y=a.timeline=new Je({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:v}),y.kill(),y.parent=y._dp=yi(a),y._start=0,d||ua(l)||ua(h)){if(w=v.length,x=d&&lf(d),ii(d))for(C in d)~Mf.indexOf(C)&&(D||(D={}),D[C]=d[C]);for(A=0;A<w;A++)b=_a(i,Sf),b.stagger=0,p&&(b.yoyoEase=p),D&&_r(b,D),M=v[A],b.duration=+eo(l,yi(a),A,M,v),b.delay=(+eo(h,yi(a),A,M,v)||0)-a._delay,!d&&w===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),y.to(M,b,x?x(A,M,v):0),y._ease=oe.none;y.duration()?l=h=0:a.timeline=0}else if(_){jr(Tn(y.vars.defaults,{ease:"none"})),y._ease=ys(_.ease||i.ease||"none");var V=0,z,W,$;if(sn(_))_.forEach(function(O){return y.to(v,O,">")}),y.duration();else{b={};for(C in _)C==="ease"||C==="easeEach"||sv(C,_[C],b,_.easeEach);for(C in b)for(z=b[C].sort(function(O,lt){return O.t-lt.t}),V=0,A=0;A<z.length;A++)W=z[A],$={ease:W.e,duration:(W.t-(A?z[A-1].t:0))/100*l},$[C]=W.v,y.to(v,$,V),V+=$.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||a.duration(l=y.duration())}else a.timeline=0;return f===!0&&!mh&&(Vi=yi(a),Ie.killTweensOf(v),Vi=0),ni(S,yi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!l&&!_&&a._start===ze(S._time)&&mn(u)&&Oy(yi(a))&&S.data!=="nested")&&(a._tTime=-Me,a.render(Math.max(0,-h)||0)),m&&rf(yi(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-Me&&!h?c:i<Me?0:i,d,f,_,g,m,p,S,v,y;if(!l)Fy(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,v=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(d=ze(u%g),u===c?(_=this._repeat,d=l):(m=ze(u/g),_=~~m,_&&_===m?(d=l,_--):d>l&&(d=l)),p=this._yoyo&&_&1,p&&(y=this._yEase,d=l-d),m=xr(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(v&&this._yEase&&yf(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(ze(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(of(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(l!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(d/l),this._from&&(this.ratio=S=1-S),!a&&u&&!r&&!m&&(En(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&ch(this,i,r,o),En(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&En(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ch(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Xi(this,1),!r&&!(h&&!a)&&(u||a||p)&&(En(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,c){so||pn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ch(this,l),h=this._ease(l/this._dur),nv(this,i,r,o,a,h,l,c)?this.resetTo(i,r,o,a,1):(ba(this,0),this.parent||nf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Kr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ke),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Vi&&Vi.vars.overwrite!==!0)._first||Kr(this),this.parent&&o!==this.timeline.totalDuration()&&yr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?Nn(i):a,l=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!r||r==="all")&&Ly(a,c))return r==="all"&&(this._pt=0),Kr(this);for(u=this._op=this._op||[],r!=="all"&&(We(r)&&(g={},ln(r,function(S){return g[S]=1}),r=g),r=iv(a,r)),p=a.length;p--;)if(~c.indexOf(a[p])){d=l[p],r==="all"?(u[p]=r,_=d,f={}):(f=u[p]=u[p]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Sa(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&Kr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return to(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return to(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Ie.killTweensOf(i,r,o)},t}(ro);Tn(Oe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ln("staggerTo,staggerFrom,staggerFromTo",function(s){Oe[s]=function(){var t=new Je,e=hh.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Ph=function(t,e,n){return t[e]=n},Ef=function(t,e,n){return t[e](n)},rv=function(t,e,n,i){return t[e](i.fp,n)},ov=function(t,e,n){return t.setAttribute(e,n)},Ta=function(t,e){return Le(t[e])?Ef:va(t[e])&&t.setAttribute?ov:Ph},bf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},av=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ih=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Dh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},cv=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},lv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Sa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},hv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Lh=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},hn=function(){function s(e,n,i,r,o,a,c,l,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||bf,this.d=c||this,this.set=l||Ph,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=hv,this.m=n,this.mt=r,this.tween=i},s}();ln(Mh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return vh[s]=1});bn.TweenMax=bn.TweenLite=Oe;bn.TimelineLite=bn.TimelineMax=Je;Ie=new Je({sortChildren:!1,defaults:gr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gn.stringFilter=Th;var vs=[],pa={},uv=[],Wd=0,dv=0,nh=function(t){return(pa[t]||uv).map(function(e){return e()})},ph=function(){var t=Date.now(),e=[];t-Wd>2&&(nh("matchMediaInit"),vs.forEach(function(n){var i=n.queries,r=n.conditions,o,a,c,l;for(a in i)o=ei.matchMedia(i[a]).matches,o&&(c=1),o!==r[a]&&(r[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),nh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Wd=t,nh("matchMedia"))},Tf=function(){function s(e,n){this.selector=n&&uh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=dv++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Le(n)&&(r=i,i=n,n=Le);var o=this,a=function(){var l=Ae,h=o.selector,u;return l&&l!==o&&l.data.push(o),r&&(o.selector=uh(r)),Ae=o,u=i.apply(o,arguments),Le(u)&&o._r.push(u),Ae=l,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Le?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},t.ignore=function(n){var i=Ae;Ae=null,n(this),Ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Oe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof Je?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Oe)&&l.revert&&l.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=vs.length;o--;)vs[o].id===this.id&&vs.splice(o,1)},t.revert=function(n){this.kill(n||{})},s}(),fv=function(){function s(e){this.contexts=[],this.scope=e,Ae&&Ae.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){ii(n)||(n={matches:n});var o=new Tf(0,r||this.scope),a=o.conditions={},c,l,h;Ae&&!o.selector&&(o.selector=Ae.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?h=1:(c=ei.matchMedia(n[l]),c&&(vs.indexOf(o)<0&&vs.push(o),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener(ph):c.addEventListener("change",ph)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),ya={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return mf(i)})},timeline:function(t){return new Je(t)},getTweensOf:function(t,e){return Ie.getTweensOf(t,e)},getProperty:function(t,e,n,i){We(t)&&(t=Nn(t)[0]);var r=Wi(t||{}).get,o=n?ef:tf;return n==="native"&&(n=""),t&&(e?o((fn[e]&&fn[e].get||r)(t,e,n,i)):function(a,c,l){return o((fn[a]&&fn[a].get||r)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=Nn(t),t.length>1){var i=t.map(function(h){return rn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=fn[e],a=Wi(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(h){var u=new o;mr._pt=0,u.init(t,n?h+n:h,mr,0,[t]),u.render(1,u),mr._pt&&Dh(1,mr)}:a.set(t,c);return o?l:function(h){return l(t,c,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=rn.to(t,Tn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,l,h){return r.resetTo(e,c,l,h)};return o.tween=r,o},isTweening:function(t){return Ie.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ys(t.ease,gr.ease)),zd(gr,t||{})},config:function(t){return zd(gn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!fn[a]&&!bn[a]&&no(e+" effect requires "+a+" plugin.")}),Ql[e]=function(a,c,l){return n(Nn(a),Tn(c||{},r),l)},o&&(Je.prototype[e]=function(a,c,l){return this.add(Ql[e](a,ii(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){oe[t]=ys(e)},parseEase:function(t,e){return arguments.length?ys(t,e):oe},getById:function(t){return Ie.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Je(t),i,r;for(n.smoothChildTiming=mn(t.smoothChildTiming),Ie.remove(n),n._dp=0,n._time=n._tTime=Ie._time,i=Ie._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Oe&&i.vars.onComplete===i._targets[0]))&&ni(n,i,i._start-i._delay),i=r;return ni(Ie,n,0),n},context:function(t,e){return t?new Tf(t,e):Ae},matchMedia:function(t){return new fv(t)},matchMediaRefresh:function(){return vs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ph()},addEventListener:function(t,e){var n=pa[t]||(pa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=pa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Xy,wrapYoyo:qy,distribute:lf,random:uf,snap:hf,normalize:Wy,getUnit:Qe,clamp:ky,splitColor:gf,toArray:Nn,selector:uh,mapRange:ff,pipe:Vy,unitize:Gy,interpolate:Yy,shuffle:cf},install:Jd,effects:Ql,ticker:pn,updateRoot:Je.updateRoot,plugins:fn,globalTimeline:Ie,core:{PropTween:hn,globals:Kd,Tween:Oe,Timeline:Je,Animation:ro,getCache:Wi,_removeLinkedListItem:Sa,reverting:function(){return Ke},context:function(t){return t&&Ae&&(Ae.data.push(t),t._ctx=Ae),Ae},suppressOverwrites:function(t){return mh=t}}};ln("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ya[s]=Oe[s]});pn.add(Je.updateRoot);mr=ya.to({},{duration:0});var pv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},mv=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=pv(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},ih=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var c,l;if(We(r)&&(c={},ln(r,function(h){return c[h]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}mv(a,r)}}}},rn=ya.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Ke?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ih("roundProps",dh),ih("modifiers"),ih("snap",hf))||ya;Oe.version=Je.version=rn.version="3.13.0";$d=1;gh()&&vr();var gv=oe.Power0,_v=oe.Power1,xv=oe.Power2,yv=oe.Power3,vv=oe.Power4,Mv=oe.Linear,Sv=oe.Quad,Ev=oe.Cubic,bv=oe.Quart,Tv=oe.Quint,wv=oe.Strong,Av=oe.Elastic,Rv=oe.Back,Cv=oe.SteppedEase,Pv=oe.Bounce,Iv=oe.Sine,Dv=oe.Expo,Lv=oe.Circ;var wf,Yi,Er,zh,As,Uv,Af,kh,Ov=function(){return typeof window<"u"},Ei={},ws=180/Math.PI,br=Math.PI/180,Sr=Math.atan2,Rf=1e8,Hh=/([A-Z])/g,Nv=/(left|right|width|margin|padding|x)/i,Fv=/[\s,\(]\S/,si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Oh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Bv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},zv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},kv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Nf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Ff=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Hv=function(t,e,n){return t.style[e]=n},Vv=function(t,e,n){return t.style.setProperty(e,n)},Gv=function(t,e,n){return t._gsap[e]=n},Wv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Xv=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},qv=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},De="transform",_n=De+"Origin",Yv=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in Ei&&r){if(this.tfm=this.tfm||{},t!=="transform")t=si[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Si(i,a)}):this.tfm[t]=o.x?o[t]:Si(i,t),t===_n&&(this.tfm.zOrigin=o.zOrigin);else return si.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(De)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(_n,e,"")),t=De}(r||e)&&this.props.push(t,e,r[t])},Bf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Zv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Hh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=kh(),(!r||!r.isStart)&&!n[De]&&(Bf(n),i.zOrigin&&n[_n]&&(n[_n]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},zf=function(t,e){var n={target:t,props:[],revert:Zv,save:Yv};return t._gsap||rn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},kf,Nh=function(t,e){var n=Yi.createElementNS?Yi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Yi.createElement(t);return n&&n.style?n:Yi.createElement(t)},Fn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Hh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Tr(e)||e,1)||""},Cf="O,Moz,ms,Ms,Webkit".split(","),Tr=function(t,e,n){var i=e||As,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Cf[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Cf[o]:"")+t},Fh=function(){Ov()&&window.document&&(wf=window,Yi=wf.document,Er=Yi.documentElement,As=Nh("div")||{style:{}},Uv=Nh("div"),De=Tr(De),_n=De+"Origin",As.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kf=!!Tr("perspective"),kh=rn.core.reverting,zh=1)},Pf=function(t){var e=t.ownerSVGElement,n=Nh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Er.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Er.removeChild(n),r},If=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Hf=function(t){var e,n;try{e=t.getBBox()}catch{e=Pf(t),n=1}return e&&(e.width||e.height)||n||(e=Pf(t)),e&&!e.width&&!e.x&&!e.y?{x:+If(t,["x","cx","x1"])||0,y:+If(t,["y","cy","y1"])||0,width:0,height:0}:e},Vf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Hf(t))},Rs=function(t,e){if(e){var n=t.style,i;e in Ei&&e!==_n&&(e=De),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Hh,"-$1").toLowerCase())):n.removeAttribute(e)}},Zi=function(t,e,n,i,r,o){var a=new hn(t._pt,e,n,0,1,o?Ff:Nf);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Df={deg:1,rad:1,turn:1},$v={grid:1,flex:1},$i=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=As.style,c=Nv.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,m,p;if(i===o||!r||Df[i]||Df[o])return r;if(o!=="px"&&!d&&(r=s(t,e,n,"px")),p=t.getCTM&&Vf(t),(f||o==="%")&&(Ei[e]||~e.indexOf("adius")))return _=p?t.getBBox()[c?"width":"height"]:t[h],Ue(f?r/_*u:r/100*_);if(a[c?"width":"height"]=u+(d?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Yi||!g.appendChild)&&(g=Yi.body),m=g._gsap,m&&f&&m.width&&c&&m.time===pn.time&&!m.uncache)return Ue(r/m.width*u);if(f&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+i,_=t[h],S?t.style[e]=S:Rs(t,e)}else(f||o==="%")&&!$v[Fn(g,"display")]&&(a.position=Fn(t,"position")),g===t&&(a.position="static"),g.appendChild(As),_=As[h],g.removeChild(As),a.position="absolute";return c&&f&&(m=Wi(g),m.time=pn.time,m.width=g[h]),Ue(d?_*r/u:_&&r?u/_*r:0)},Si=function(t,e,n,i){var r;return zh||Fh(),e in si&&e!=="transform"&&(e=si[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ei[e]&&e!=="transform"?(r=lo(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Aa(Fn(t,_n))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=wa[e]&&wa[e](t,e,n)||Fn(t,e)||Eh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?$i(t,e,r,n)+n:r},Jv=function(t,e,n,i){if(!n||n==="none"){var r=Tr(e,t,1),o=r&&Fn(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Fn(t,"borderTopColor"))}var a=new hn(this._pt,t.style,e,0,1,Ih),c=0,l=0,h,u,d,f,_,g,m,p,S,v,y,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Fn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Fn(t,e)||i,g?t.style[e]=g:Rs(t,e)),h=[n,i],Th(h),n=h[0],i=h[1],d=n.match(Ms)||[],A=i.match(Ms)||[],A.length){for(;u=Ms.exec(i);)m=u[0],S=i.substring(c,u.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=d[l++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),m.charAt(1)==="="&&(m=Ss(f,m)+y),p=parseFloat(m),v=m.substr((p+"").length),c=Ms.lastIndex-v.length,v||(v=v||gn.units[e]||y,c===i.length&&(i+=v,a.e+=v)),y!==v&&(f=$i(t,e,g,v)||0),a._pt={_next:a._pt,p:S||l===1?S:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?Ff:Nf;return xh.test(i)&&(a.e=0),this._pt=a,a},Lf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Kv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Lf[n]||n,e[1]=Lf[i]||i,e.join(" ")},Qv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)a=r[l],Ei[a]&&(c=1,a=a==="transformOrigin"?_n:De),Rs(n,a);c&&(Rs(n,De),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",lo(n,1),o.uncache=1,Bf(i)))}},wa={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new hn(t._pt,e,n,0,0,Qv);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},co=[1,0,0,1,0,0],Gf={},Wf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Uf=function(t){var e=Fn(t,De);return Wf(e)?co:e.substr(7).match(_h).map(Ue)},Vh=function(t,e){var n=t._gsap||Wi(t),i=t.style,r=Uf(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?co:r):(r===co&&!t.offsetParent&&t!==Er&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,a=t.nextElementSibling,Er.appendChild(t)),r=Uf(t),c?i.display=c:Rs(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):Er.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Bh=function(t,e,n,i,r,o){var a=t._gsap,c=r||Vh(t,!0),l=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=c[0],_=c[1],g=c[2],m=c[3],p=c[4],S=c[5],v=e.split(" "),y=parseFloat(v[0])||0,A=parseFloat(v[1])||0,b,w,C,M;n?c!==co&&(w=f*m-_*g)&&(C=y*(m/w)+A*(-g/w)+(g*S-m*p)/w,M=y*(-_/w)+A*(f/w)-(f*S-_*p)/w,y=C,A=M):(b=Hf(t),y=b.x+(~v[0].indexOf("%")?y/100*b.width:y),A=b.y+(~(v[1]||v[0]).indexOf("%")?A/100*b.height:A)),i||i!==!1&&a.smooth?(p=y-l,S=A-h,a.xOffset=u+(p*f+S*g)-p,a.yOffset=d+(p*_+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[_n]="0px 0px",o&&(Zi(o,a,"xOrigin",l,y),Zi(o,a,"yOrigin",h,A),Zi(o,a,"xOffset",u,a.xOffset),Zi(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+A)},lo=function(t,e){var n=t._gsap||new wh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),l=Fn(t,_n)||"0",h,u,d,f,_,g,m,p,S,v,y,A,b,w,C,M,x,D,V,z,W,$,O,lt,Z,ht,rt,xt,Rt,X,N,k;return h=u=d=g=m=p=S=v=y=0,f=_=1,n.svg=!!(t.getCTM&&Vf(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[De]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[De]!=="none"?c[De]:"")),i.scale=i.rotate=i.translate="none"),w=Vh(t,n.svg),n.svg&&(n.uncache?(Z=t.getBBox(),l=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",lt=""):lt=!e&&t.getAttribute("data-svg-origin"),Bh(t,lt||l,!!lt||n.originIsAbsolute,n.smooth!==!1,w)),A=n.xOrigin||0,b=n.yOrigin||0,w!==co&&(D=w[0],V=w[1],z=w[2],W=w[3],h=$=w[4],u=O=w[5],w.length===6?(f=Math.sqrt(D*D+V*V),_=Math.sqrt(W*W+z*z),g=D||V?Sr(V,D)*ws:0,S=z||W?Sr(z,W)*ws+g:0,S&&(_*=Math.abs(Math.cos(S*br))),n.svg&&(h-=A-(A*D+b*z),u-=b-(A*V+b*W))):(k=w[6],X=w[7],rt=w[8],xt=w[9],Rt=w[10],N=w[11],h=w[12],u=w[13],d=w[14],C=Sr(k,Rt),m=C*ws,C&&(M=Math.cos(-C),x=Math.sin(-C),lt=$*M+rt*x,Z=O*M+xt*x,ht=k*M+Rt*x,rt=$*-x+rt*M,xt=O*-x+xt*M,Rt=k*-x+Rt*M,N=X*-x+N*M,$=lt,O=Z,k=ht),C=Sr(-z,Rt),p=C*ws,C&&(M=Math.cos(-C),x=Math.sin(-C),lt=D*M-rt*x,Z=V*M-xt*x,ht=z*M-Rt*x,N=W*x+N*M,D=lt,V=Z,z=ht),C=Sr(V,D),g=C*ws,C&&(M=Math.cos(C),x=Math.sin(C),lt=D*M+V*x,Z=$*M+O*x,V=V*M-D*x,O=O*M-$*x,D=lt,$=Z),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Ue(Math.sqrt(D*D+V*V+z*z)),_=Ue(Math.sqrt(O*O+k*k)),C=Sr($,O),S=Math.abs(C)>2e-4?C*ws:0,y=N?1/(N<0?-N:N):0),n.svg&&(lt=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Wf(Fn(t,De)),lt&&t.setAttribute("transform",lt))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(f*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ue(f),n.scaleY=Ue(_),n.rotation=Ue(g)+a,n.rotationX=Ue(m)+a,n.rotationY=Ue(p)+a,n.skewX=S+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[_n]=Aa(l)),n.xOffset=n.yOffset=0,n.force3D=gn.force3D,n.renderTransform=n.svg?t1:kf?Xf:jv,n.uncache=0,n},Aa=function(t){return(t=t.split(" "))[0]+" "+t[1]},Uh=function(t,e,n){var i=Qe(e);return Ue(parseFloat(e)+parseFloat($i(t,"x",n+"px",i)))+i},jv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Xf(t,e)},bs="0deg",ao="0px",Ts=") ",Xf=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,v=n.zOrigin,y="",A=p==="auto"&&t&&t!==1||p===!0;if(v&&(u!==bs||h!==bs)){var b=parseFloat(h)*br,w=Math.sin(b),C=Math.cos(b),M;b=parseFloat(u)*br,M=Math.cos(b),o=Uh(S,o,w*M*-v),a=Uh(S,a,-Math.sin(b)*-v),c=Uh(S,c,C*M*-v+v)}m!==ao&&(y+="perspective("+m+Ts),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(A||o!==ao||a!==ao||c!==ao)&&(y+=c!==ao||A?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+Ts),l!==bs&&(y+="rotate("+l+Ts),h!==bs&&(y+="rotateY("+h+Ts),u!==bs&&(y+="rotateX("+u+Ts),(d!==bs||f!==bs)&&(y+="skew("+d+", "+f+Ts),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Ts),S.style[De]=y||"translate(0, 0)"},t1=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,v=parseFloat(o),y=parseFloat(a),A,b,w,C,M;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=br,l*=br,A=Math.cos(c)*u,b=Math.sin(c)*u,w=Math.sin(c-l)*-d,C=Math.cos(c-l)*d,l&&(h*=br,M=Math.tan(l-h),M=Math.sqrt(1+M*M),w*=M,C*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),A*=M,b*=M)),A=Ue(A),b=Ue(b),w=Ue(w),C=Ue(C)):(A=u,C=d,b=w=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=$i(f,"x",o,"px"),y=$i(f,"y",a,"px")),(_||g||m||p)&&(v=Ue(v+_-(_*A+g*w)+m),y=Ue(y+g-(_*b+g*C)+p)),(i||r)&&(M=f.getBBox(),v=Ue(v+i/100*M.width),y=Ue(y+r/100*M.height)),M="matrix("+A+","+b+","+w+","+C+","+v+","+y+")",f.setAttribute("transform",M),S&&(f.style[De]=M)},e1=function(t,e,n,i,r){var o=360,a=We(r),c=parseFloat(r)*(a&&~r.indexOf("rad")?ws:1),l=c-i,h=i+l+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),u==="cw"&&l<0?l=(l+o*Rf)%o-~~(l/o)*o:u==="ccw"&&l>0&&(l=(l-o*Rf)%o-~~(l/o)*o)),t._pt=d=new hn(t._pt,e,n,i,l,Bv),d.e=h,d.u="deg",t._props.push(n),d},Of=function(t,e){for(var n in e)t[n]=e[n];return t},n1=function(t,e,n){var i=Of({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,h,u,d,f,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[De]=e,a=lo(n,1),Rs(n,De),n.setAttribute("transform",l)):(l=getComputedStyle(n)[De],o[De]=e,a=lo(n,1),o[De]=l);for(c in Ei)l=i[c],h=a[c],l!==h&&r.indexOf(c)<0&&(f=Qe(l),_=Qe(h),u=f!==_?$i(n,c,l,_):parseFloat(l),d=parseFloat(h),t._pt=new hn(t._pt,a,c,u,d-u,Oh),t._pt.u=_||0,t._props.push(c));Of(a,i)};ln("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});wa[t>1?"border"+s:s]=function(a,c,l,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return Si(a,_,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(c,f,u)}});var Gh={name:"css",register:Fh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,c=n.vars.startAt,l,h,u,d,f,_,g,m,p,S,v,y,A,b,w,C;zh||Fh(),this.styles=this.styles||zf(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(fn[g]&&Rh(g,e,n,i,t,r)))){if(f=typeof h,_=wa[g],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Mr(h)),_)_(this,t,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",vi.lastIndex=0,vi.test(l)||(m=Qe(l),p=Qe(h)),p?m!==p&&(l=$i(t,g,l,p)+p):m&&(h+=m),this.add(a,"setProperty",l,h,i,r,0,0,g),o.push(g),C.push(g,0,a[g]);else if(f!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,t,r):c[g],We(l)&&~l.indexOf("random(")&&(l=Mr(l)),Qe(l+"")||l==="auto"||(l+=gn.units[g]||Qe(Si(t,g))||""),(l+"").charAt(1)==="="&&(l=Si(t,g))):l=Si(t,g),d=parseFloat(l),S=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),g in si&&(g==="autoAlpha"&&(d===1&&Si(t,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,a.visibility),Zi(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=si[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Ei,v){if(this.styles.save(g),f==="string"&&h.substring(0,6)==="var(--"&&(h=Fn(t,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),y||(A=t._gsap,A.renderTransform&&!e.parseTransform||lo(t,e.parseTransform),b=e.smoothOrigin!==!1&&A.smooth,y=this._pt=new hn(this._pt,a,De,0,1,A.renderTransform,A,0,-1),y.dep=1),g==="scale")this._pt=new hn(this._pt,A,"scaleY",A.scaleY,(S?Ss(A.scaleY,S+u):u)-A.scaleY||0,Oh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(_n,0,a[_n]),h=Kv(h),A.svg?Bh(t,h,0,b,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&Zi(this,A,"zOrigin",A.zOrigin,p),Zi(this,a,g,Aa(l),Aa(h)));continue}else if(g==="svgOrigin"){Bh(t,h,1,b,0,this);continue}else if(g in Gf){e1(this,A,g,d,S?Ss(d,S+h):h);continue}else if(g==="smoothOrigin"){Zi(this,A,"smooth",A.smooth,h);continue}else if(g==="force3D"){A[g]=h;continue}else if(g==="transform"){n1(this,h,t);continue}}else g in a||(g=Tr(g)||g);if(v||(u||u===0)&&(d||d===0)&&!Fv.test(h)&&g in a)m=(l+"").substr((d+"").length),u||(u=0),p=Qe(h)||(g in gn.units?gn.units[g]:m),m!==p&&(d=$i(t,g,l,p)),this._pt=new hn(this._pt,v?A:a,g,d,(S?Ss(d,S+u):u)-d,!v&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?kv:Oh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=zv);else if(g in a)Jv.call(this,t,g,l,S?S+h:h);else if(g in t)this.add(t,g,l||t[g],S?S+h:h,i,r);else if(g!=="parseTransform"){Ma(g,h);continue}v||(g in a?C.push(g,0,a[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,l||t[g])),o.push(g)}}w&&Lh(this)},render:function(t,e){if(e.tween._time||!kh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Si,aliases:si,getSetter:function(t,e,n){var i=si[e];return i&&i.indexOf(",")<0&&(e=i),e in Ei&&e!==_n&&(t._gsap.x||Si(t,"x"))?n&&Af===n?e==="scale"?Wv:Gv:(Af=n||{})&&(e==="scale"?Xv:qv):t.style&&!va(t.style[e])?Hv:~e.indexOf("-")?Vv:Ta(t,e)},core:{_removeProperty:Rs,_getMatrix:Vh}};rn.utils.checkPrefix=Tr;rn.core.getStyleSaver=zf;(function(s,t,e,n){var i=ln(s+","+t+","+e,function(r){Ei[r]=1});ln(t,function(r){gn.units[r]="deg",Gf[r]=1}),si[i[13]]=s+","+t,ln(n,function(r){var o=r.split(":");si[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){gn.units[s]="px"});rn.registerPlugin(Gh);var Ra=rn.registerPlugin(Gh)||rn,Z1=Ra.core.Tween;var J1=Math.PI*2,ho=(s,t=0,e=1)=>Math.min(e,Math.max(t,s));function Wh(s){let t=s*s*s,e=[],n=[],i=[],r=[],o=[],a=[],c=new Set,l=(h,u,d)=>{let f=[h,u,d].join(":");c.has(f)||(c.add(f),a.push([h,u,d]))};for(let h=-5;h<=5;h++)for(let u=-2;u<=2;u++)l(h*.4,.9,u*.4);for(let h of[-1.6,1.6])for(let u of[-.4,.4])for(let d=-3;d<=1;d++)l(h,d*.4,u);for(let h of[-2.4,2.4])for(let u=-2;u<=3;u++)for(let d of[-.8,0,.8])l(h,u*.4,d);for(let h of[-2.8,2.8])for(let u=-2;u<=1;u++)for(let d of[-.4,.4])l(h,u*.4,d);for(let h=0;h<t;h++){let u=h%s,d=Math.floor(h/s)%s,f=Math.floor(h/(s*s)),_=[(u-(s-1)/2)*1.65/s,(d-(s-1)/2)*1.65/s,(f-(s-1)/2)*1.65/s];e.push(_);let g=h*2.399963229728653,m=1.25+h*37%17/17*.95;n.push([Math.cos(g)*m,Math.sin(h*1.7)*1.45,Math.sin(g)*m*.75]),i.push([Math.cos(g)*1.75,Math.sin(h*1.7)*1.15,Math.sin(g)*1.3]);let p=1-(h+.5)/t*2,S=Math.sqrt(1-p*p);r.push([Math.cos(g)*S*1.6,p*1.6,Math.sin(g)*S*1.6]),o.push(a[Math.round(h/(t-1)*(a.length-1))])}return{count:t,n:s,formations:[e,n,i,r,o,e]}}function qf(s){let t=[0,1,1.15,2,3,4],e=0;for(;e<t.length-2&&s>t[e+1];)e++;return{from:e,to:e+1,weight:ho((s-t[e])/(t[e+1]-t[e]))}}function Yf(s){if(s<=0||s>=4)return 0;let t=ho(s/.3),e=1-ho((s-3.72)/.28);return Math.min(t,e)}function Zf(s){let t=ho(s)*5,e=Math.min(4,Math.floor(t)),n=ho((t-e)/.38),i=n*n*(3-2*n),r=[0,1,1.15,2,3,4];return r[e]+(r[e+1]-r[e])*i}var Ca=s=>Math.max(0,Math.min(1,s)),Ji=["inicio","problema","diagnostico","transformacao","solucoes","projetos","processo","inteligencia","sobre","resultado","contato"];function $f(){let s={cx:4.5,cy:3.3,cz:8.4,tx:0,ty:-.1,tz:-.1,actorX:0,actorY:0,actorZ:0,yaw:.18,actorScale:1,pose:1,shape:0,order:.52,props:1,panel:1,path:1,wire:0,network:0,portal:0,opacity:1,screenX:.74,screenY:.52,mobileX:.49,mobileY:.76,mobileDistance:1.4,light:1.1,walk:0,walkAmp:.25},t={inicio:{...s},problema:{...s,cx:3.4,cy:2.6,cz:8.8,actorX:-.35,yaw:.25,order:0,path:.2,mobileY:.69,mobileDistance:1.35},diagnostico:{...s,cx:2.4,cy:2.2,cz:8.8,yaw:.2,order:.25,props:.28,path:.15,wire:1,pose:.1,mobileY:.76,mobileDistance:1.55,light:1.35,walkAmp:0},transformacao:{...s,cx:2.3,cy:2.1,cz:12,actorY:.4,props:.15,order:.7,path:.5,pose:1,wire:0,screenX:.73,screenY:.5,mobileY:.65,mobileDistance:1.55,light:1.2,walkAmp:0},solucoes:{...s,opacity:0,props:0,walkAmp:0},projetos:{...s,opacity:0,props:0,walkAmp:0},processo:{...s,cx:0,cy:1.8,cz:12,actorScale:.6,props:0,path:0,screenX:.14,screenY:.54,mobileX:.87,mobileY:.44,mobileDistance:1.1,walkAmp:1},inteligencia:{...s,cx:3.2,cy:3.6,cz:11.5,actorScale:.62,pose:0,props:0,path:0,network:1,screenX:.74,screenY:.53,mobileY:.72,mobileDistance:1.55,light:1.25,walkAmp:0},sobre:{...s,opacity:0,props:0,walkAmp:0},resultado:{...s,cx:4.5,cy:4,cz:10.2,order:1,yaw:0,path:1,mobileY:.73,mobileDistance:1.4,walkAmp:0},contato:{...s,cx:5.2,cy:3.5,cz:11,tx:1,ty:.1,tz:-1,actorX:-.4,actorZ:.2,order:1,props:.3,path:1,portal:1,screenX:.77,mobileY:.73,mobileDistance:1.5,light:1.2,walkAmp:.6}};for(let a of Ji)a!=="inicio"&&(t[a].panel=0);let e={...s},n={time:0},i=Ra.timeline({paused:!0}).to(n,{time:Ji.length,duration:Ji.length,ease:"none"}),r=Ra.parseEase("power2.inOut");function o(a,c){let l=Math.max(0,Ji.indexOf(a)),h=Ca(c);i.time(l+h,!0);let u=Ca(n.time-l),d=t[Ji[l]],f={...t[Ji[Math.max(0,l-1)]]};Ji[l-1]==="processo"&&(f.screenX=.86,f.mobileY=.79);let _=d.opacity===0?.08:Ji[l]==="transformacao"?.1:.28,g=l===0?1:r(Ca(u/_));for(let m of Object.keys(d))e[m]=f[m]+(d[m]-f[m])*g;if(e.shape=a==="transformacao"?Zf(u):0,a==="transformacao"){e.order=u,e.actorY=.4,e.yaw=-.2+u*.7;let m=S=>{let v=Ca(S);return v*v*(3-2*v)},p=m((e.shape-2.2)/.6)*(1-m((e.shape-3.6)/.4));e.cz=12+p*1.5,e.mobileDistance=1.55+p*.25}return a==="problema"&&(e.walk=u*Math.PI*3),a==="inicio"&&(e.walk=u*Math.PI*2),a==="processo"&&(e.screenX=.14+u*.72,e.mobileY=.44+u*.35,e.walk=u*Math.PI*16,e.opacity=1),a==="contato"&&(e.actorX=-.4+u*2.6,e.actorZ=.2-u*2.7,e.walk=u*Math.PI*5),e}return{state:e,seek:o,dispose(){i.kill()}}}Sd();var on=document.documentElement;on.classList.contains("reduced-motion")||i1();function i1(){let s=document.getElementById("sceneStage"),t=document.getElementById("sceneCanvas"),e,n=!1,i=Zr(),r=oa[i],o=innerWidth<=700;try{e=new or({canvas:t,alpha:!0,antialias:i!=="low",powerPreference:"high-performance"}),e.outputColorSpace=ge,e.toneMapping=qr,e.toneMappingExposure=1.1}catch{n=!0;let ot=t.cloneNode();t.replaceWith(ot),t=ot;try{e=new pr(t)}catch{dispatchEvent(new Event("portfolio:graphics-fallback"));return}}on.dataset.renderer=n?"canvas":"webgl";let a=new Fi,c=new en(38,1,.1,100),l=new Set,h=new Set,u=new Set,d=new pe(1,1,1);l.add(d);let f=n?d:new Ge(1,1,1,3,.0325);l.add(f);function _(ot={},G=!1){let R=G?new Ce(ot):new ye({roughness:.7,metalness:.08,...ot});return h.add(R),R}let g=new ds({color:"#e96c0c",roughness:.38,metalness:.48,clearcoat:.08,clearcoatRoughness:.5,envMapIntensity:.7}),m=_({color:"#272623",roughness:.85}),p=_({color:"#f4f0e8",roughness:.72}),S=_({color:"#111111",roughness:.6}),v=_({color:"#ff7a00",toneMapped:!1},!0),y=_({color:"#ff9b35",transparent:!0,opacity:.6,toneMapped:!1},!0);h.add(g);let A=null;function b(ot,G,R,st,B=a,Q=!0){let I=new Lt(Q?f:d,st);return I.scale.set(ot,G,R),B.add(I),I}function w(ot,G,R,st,B=a){let Q=new U(...ot),I=new U(...G),E=I.clone().sub(Q),Y=b(R,E.length(),R,st,B,!1);return Y.position.copy(Q).add(I).multiplyScalar(.5),Y.quaternion.setFromUnitVectors(new U(0,1,0),E.normalize()),Y}if(!n){A=la(e,a),a.add(new lr("#fff4e5","#5d4937",1.4));let ot=new zi("#fff6e8",2.5);ot.position.set(-4,7,6),a.add(ot);let G=new zi("#ff9c44",.45);G.position.set(5,4,-4),a.add(G);let R=new zi("#ffffff",.5);R.position.set(3,2,7),a.add(R)}let C=new Xt,M=new Xt;a.add(C),C.add(M);let x=ca({size:1.65,software:n,orange:g});M.add(x.group),on.dataset.cubeDesign="premium-modular";let D=new he(f,g,125);D.instanceMatrix.setUsage(Ze),D.frustumCulled=!1,M.add(D);let V=Wh(n?3:r.grid);D.count=V.count;let z=new Pn(1.6,n?10:28,n?7:18);l.add(z);let W=new Lt(z,g);M.add(W),W.visible=!1;let $=new Xt;M.add($);let O=1.02;for(let[ot,G]of[[[-O,-O,-O],[O,-O,-O]],[[-O,O,-O],[O,O,-O]],[[-O,-O,O],[O,-O,O]],[[-O,O,O],[O,O,O]],[[-O,-O,-O],[-O,O,-O]],[[O,-O,-O],[O,O,-O]],[[-O,-O,O],[-O,O,O]],[[O,-O,O],[O,O,O]],[[-O,-O,-O],[-O,-O,O]],[[O,-O,-O],[O,-O,O]],[[-O,O,-O],[-O,O,O]],[[O,O,-O],[O,O,O]]])w(ot,G,.012,y,$);let lt=new Xt;a.add(lt);let Z=[];for(let ot=0;ot<18;ot++){let G=.35+ot%4*.34,R=b(.68,G,.68,ot%3===0?m:p,lt),st=ot*2.39996+.4,B=new U(Math.sign(Math.cos(st))*(2+Math.abs(Math.cos(st))*.9),-1.5+G/2,-2.2-Math.abs(Math.sin(st))*1.2),Q=new U([-3.7,-2.5,-1.3,1.3,2.5,3.7][ot%6],-1.5+G/2,-3.8+Math.floor(ot/6)*1.25);Z.push({mesh:R,height:G,chaos:B,ordered:Q,angle:(ot%5-2)*.18})}let ht=new Xt;a.add(ht);let rt=[[-5,-1.49,3],[-3.3,-1.49,2.2],[-2,-1.49,.9],[-.7,-1.49,.35],[.4,-1.49,-.5],[1.1,-1.49,-1.1],[2.3,-1.49,-1.7],[3.1,-1.49,-2.6]],xt=new xi(rt.map(ot=>new U(...ot))),Rt=[];if(n){let ot=xt.getPoints(24),G=_({color:"#ff7a00",transparent:!0,opacity:.08},!0);for(let R=0;R<ot.length-1;R++)Rt.push(w(ot[R].toArray(),ot[R+1].toArray(),.045,v,ht)),w(ot[R].toArray(),ot[R+1].toArray(),.14,G,ht)}else{let ot=new qn(xt,64,.025,6,!1);l.add(ot),ht.add(new Lt(ot,v));let G=new qn(xt,48,.08,6,!1);l.add(G),ht.add(new Lt(G,_({color:"#ff7a00",transparent:!0,opacity:.07,depthWrite:!1},!0)))}C.traverse(ot=>{ot.isMesh&&(ot.renderOrder=Math.max(2,ot.renderOrder))});let X=document.createElement("canvas");X.width=X.height=64;let N=X.getContext("2d"),k=N.createRadialGradient(32,32,1,32,32,32);k.addColorStop(0,"#00000060"),k.addColorStop(1,"#00000000"),N.fillStyle=k,N.fillRect(0,0,64,64);let J=new Pe(X);u.add(J);let F=_({map:J,transparent:!0,depthWrite:!1},!0),at=new Te(3.6,3.6);l.add(at);let gt=new Lt(at,F);gt.rotation.x=-Math.PI/2,gt.position.y=-1.51,gt.userData.skipSoftware=!0,a.add(gt);let Ct=new Xt;a.add(Ct);let It=[[0,0,0],[-2,1,-.5],[2,.8,-.1],[-1.6,-.65,1.2],[1.8,-.65,1.1],[-.7,1.5,-1.4],[.6,-.85,-1.1]];It.slice(1).forEach((ot,G)=>{let R=b(.3,.3,.3,G%2?p:g,Ct);R.position.set(...ot),R.rotation.y=G*.5});for(let[ot,G]of[[0,1],[0,2],[0,3],[0,4],[1,5],[2,5],[3,6],[4,6]])w(It[ot],It[G],.025,v,Ct);let St=new Xt;a.add(St),St.position.set(3.5,.1,-3.1),St.rotation.y=-.12;let Ot=_({color:"#fff7df",toneMapped:!1},!0);b(.16,3.8,.25,v,St).position.x=-1.14,b(.16,3.8,.25,v,St).position.x=1.14,b(2.4,.16,.25,v,St).position.y=1.82,b(2.12,3.52,.04,Ot,St,!1).position.set(0,-.02,-.12),b(2.5,.1,1.4,p,St).position.set(0,-1.84,.4);let Wt=$f(),kt=new ae,Dt=new U,qt=Fd(s),Ut=0,L=0,T=!1,et=0,vt=0,wt=0,pt=0,ft=0,Mt=0;function bt(){o=innerWidth<=700,qt.invalidate(),Ut=L=0,i=Zr(),r=oa[i],on.dataset.quality=i,e.setPixelRatio(Math.min(devicePixelRatio||1,r.dpr,n?1.25:2)),V=Wh(n?3:r.grid),D.count=V.count,on.dataset.microcubes=String(D.count),on.dataset.graphicsInitialized="true"}let zt=bd({scene:a,software:n,quality:i}),ct=wd({scene:a,software:n,quality:i}),_t=Rd({scene:a,software:n,quality:i}),Nt=Nd({scene:a,software:n,quality:i}),mt=Od({scene:a,software:n,quality:i}),yt=Dd({scene:a,software:n,quality:i});bt(),addEventListener("resize",bt,{passive:!0}),addEventListener("portfolio:quality",bt),matchMedia("(hover:hover) and (pointer:fine)").matches&&addEventListener("pointermove",ot=>{ft=(ot.clientX/innerWidth-.5)*.1,Mt=(ot.clientY/innerHeight-.5)*.05},{passive:!0});function Ft(ot){if(T||(vt=requestAnimationFrame(Ft),document.hidden||on.classList.contains("reduced-motion")))return;let G=1e3/(n?30:r.fps);if(ot-et<G-.5)return;et=ot-(ot-et)%G;let R=qt.read();if(!R){on.dataset.cinemaImmersive="false";return}on.dataset.cinemaImmersive=String(R.id==="problema"&&R.rect.top<=2&&R.rect.bottom>Math.min(innerHeight*.45,300)),(Ut!==R.width||L!==R.height)&&(Ut=R.width,L=R.height,e.setSize(Ut,L,!1),c.aspect=Ut/L);let st=performance.now(),B=R.id,Q=R.progress,I=Wt.seek(B,Q),E=Ut/L;s.style.setProperty("--scene-opacity","1"),on.dataset.morphShape=I.shape.toFixed(3),on.dataset.sceneOrder=I.order.toFixed(3),c.clearViewOffset(),Dt.set(0,-.3,0);let Y=Math.max(4,4.4/E);if(B==="transformacao"&&(Dt.y=.25,Y=Math.max(4.5,6.8/E)),B==="inteligencia"&&(Y=Math.max(4.5,5.7/E)),B==="contato"&&(Dt.set(1.15,-.2,-1.1),Y=Math.max(5.3,8.5/E)),B==="processo"){I.actorScale=1,Y=o?2.9/E:3.25;let K=[...document.querySelectorAll(".process-node")],Et=K[0].getBoundingClientRect(),Jt=K.at(-1).getBoundingClientRect(),ne=Math.max(0,Math.min(1,(Q-.1)/.8)),Re=o?.5:(Et.x+Et.width/2+(Jt.x-Et.x)*ne-R.rect.left)/Ut,Xe=o?Math.max(.1,Math.min(.85,(Et.y+Et.height/2+(Jt.y-Et.y)*ne-R.rect.top)/L)):.48;c.setViewOffset(Ut,L,(.5-Re)*Ut,(.5-Xe)*L,Ut,L)}let it=Y/(2*Math.tan(Be.degToRad(c.fov/2)));c.position.set(I.cx+ft,I.cy+Mt,I.cz).sub(Dt).normalize().multiplyScalar(it).add(Dt);let H=ql(Q);if(zt.group.visible=B==="problema",ct.group.visible=B==="projetos",_t.group.visible=B==="solucoes",Nt.group.visible=B==="inteligencia",mt.group.visible=B==="resultado",yt.group.visible=B==="contato",B==="problema"){let Et=Math.max(6.4,5.8/E)*H.zoom/(2*Math.tan(Be.degToRad(c.fov/2)));Dt.set(...H.focus);let Jt=.52+Q*.3;c.position.set(Math.sin(Jt)*.77,.78,Math.cos(Jt)*.9).normalize().multiplyScalar(Et).add(Dt)}if(B==="projetos"){let K=ha(Q),Jt=Math.max(7,6.3/E)*(1-K.cameraDock*.16)/(2*Math.tan(Be.degToRad(c.fov/2)));Dt.set(0,1.1-K.cameraDock*.6,.18),c.position.set(.18-K.cameraDock*.13,.2+Math.sin(K.local*Math.PI)*.035,1).normalize().multiplyScalar(Jt).add(Dt)}if(c.lookAt(Dt),c.updateProjectionMatrix(),C.position.set(I.actorX,I.actorY+(B==="inicio"?Math.sin(ot*8e-4)*.018:0),I.actorZ),C.rotation.y=I.yaw+(B==="inicio"?Math.sin(ot*7e-4)*.075:0),C.scale.setScalar(I.actorScale),B==="problema"){let K=zt.update(Q,ot,c);C.position.set(...K.actor),C.position.y+=.3,C.scale.setScalar(.45),C.rotation.set(0,K.yaw,0)}else C.rotation.x=0;M.rotation.z=0;let j=Yf(I.shape),Tt=Math.max(0,1-Math.abs(I.shape-2)/.34),Pt=qf(I.shape),Ht=V.formations[Pt.from],At=V.formations[Pt.to];if(x.update({fracture:j,spread:B==="problema"&&H.blocked?.2:B==="diagnostico"?Math.sin(Q*Math.PI)**2*.45:0}),D.visible=j>.005&&Tt<.98,D.visible){let K=(1.65/V.n-.016)*(I.shape>1.2&&I.shape<3.7?.72:1);for(let Et=0;Et<D.count;Et++)kt.position.set(Ht[Et][0]+(At[Et][0]-Ht[Et][0])*Pt.weight,Ht[Et][1]+(At[Et][1]-Ht[Et][1])*Pt.weight,Ht[Et][2]+(At[Et][2]-Ht[Et][2])*Pt.weight),kt.rotation.set(Et%3*.23*j,Et%5*.3*j,Et%4*.13*j),(I.shape<.05||I.shape>3.95)&&kt.rotation.set(0,0,0),kt.scale.setScalar(K*j*(1-Tt*.9)),kt.updateMatrix(),D.setMatrixAt(Et,kt.matrix);D.instanceMatrix.needsUpdate=!0}W.visible=Tt>.01,W.scale.setScalar(Tt),$.visible=I.wire>.02,$.scale.setScalar(Math.max(.01,I.wire)),lt.visible=I.props>.02&&B!=="inicio"&&B!=="problema",lt.scale.setScalar(Math.max(.01,I.props)),Z.forEach((K,Et)=>{if(K.mesh.visible=Et<(B==="inicio"?3:n?8:r.blocks),K.mesh.scale.set(.68,K.height,.68),K.mesh.position.lerpVectors(K.chaos,K.ordered,I.order),B==="inicio"&&Et<3){let Jt=[[-2.05,-1.25,-.75],[1.9,-1.3,-1.6],[.6,-1.38,-3.2]];K.mesh.position.set(...Jt[Et]),K.mesh.scale.set(.64,Et===0?.48:.34,.64)}K.mesh.rotation.set(K.angle*(1-I.order),K.angle*2*(1-I.order),K.angle*(1-I.order))}),ht.visible=I.path>.02&&B!=="processo"&&B!=="problema",ht.scale.setScalar(Math.max(.02,I.path)),Ct.visible=I.network>.02,Ct.scale.setScalar(Math.max(.01,I.network)),St.visible=I.portal>.02,St.scale.setScalar(Math.max(.01,I.portal)),gt.visible=B!=="problema",gt.position.x=C.position.x,gt.position.z=C.position.z,gt.scale.setScalar(I.actorScale),F.opacity=(1-j*.6)*.85,C.visible=B!=="projetos"&&B!=="solucoes"&&B!=="inteligencia"&&B!=="resultado"&&B!=="contato",B==="projetos"&&(lt.visible=ht.visible=Ct.visible=St.visible=gt.visible=!1,ct.update(Q,ot,c)),B==="solucoes"&&(lt.visible=ht.visible=Ct.visible=St.visible=gt.visible=!1,_t.update(Q,ot,c)),B==="inteligencia"&&(lt.visible=ht.visible=Ct.visible=St.visible=gt.visible=!1,Nt.update(Q,ot,c,{width:Ut,height:L})),B==="resultado"&&(lt.visible=ht.visible=Ct.visible=St.visible=gt.visible=!1,mt.update(Q,ot,c,{mobile:o})),B==="contato"&&(lt.visible=ht.visible=Ct.visible=St.visible=gt.visible=!1,yt.update(Q,ot,c,{mobile:o})),n?e.render(a,c):(e.toneMappingExposure=B==="problema"?.88:B==="solucoes"?1.05:B==="inteligencia"?1.12:B==="resultado"?1.04:B==="contato"?1.06:I.light*.92,e.render(a,c),on.dataset.drawCalls=String(e.info.render.calls),on.dataset.triangles=String(e.info.render.triangles)),s.style.visibility="visible",on.dataset.frameMs=String(Math.round((performance.now()-st)*10)/10),s.classList.contains("is-ready")||(s.classList.add("is-ready"),on.dataset.sceneReady="true"),wt++,pt||(pt=ot),ot-pt>1600&&(on.dataset.fps=String(Math.round(wt*1e3/(ot-pt)*10)/10),wt=0,pt=ot)}t.addEventListener("webglcontextlost",ot=>{ot.preventDefault(),dispatchEvent(new Event("portfolio:graphics-fallback"))}),addEventListener("pagehide",ot=>{if(!ot.persisted){T=!0,cancelAnimationFrame(vt),removeEventListener("resize",bt),removeEventListener("portfolio:quality",bt),qt.dispose(),Wt.dispose(),x.dispose(),zt.dispose(),ct.dispose(),_t.dispose(),Nt.dispose(),mt.dispose(),yt.dispose(),A?.dispose();for(let G of l)G.dispose();for(let G of h)G.dispose();for(let G of u)G.dispose();e.dispose?.()}}),vt=requestAnimationFrame(Ft)}})();
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
