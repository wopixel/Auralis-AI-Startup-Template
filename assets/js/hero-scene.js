(()=>{var w1=0,Ka=1,C1=2;var hs=1,R1=2,Ci=3,kn=0,Le=1,dn=2,fn=0,Ri=1,Qa=2,ja=3,to=4,I1=5;var ei=100,P1=101,L1=102,D1=103,N1=104,U1=200,F1=201,O1=202,B1=203,eo=204,no=205,z1=206,V1=207,k1=208,G1=209,H1=210,W1=211,X1=212,q1=213,Y1=214,Zs=0,Js=1,$s=2,Mi=3,Ks=4,Qs=5,js=6,tr=7,io=0,Z1=1,J1=2,tn=0,so=1,ro=2,ao=3,us=4,oo=5,lo=6,co=7;var ho=300,Gn=301,ni=302,Tr=303,Er=304,ds=306,er=1e3,ln=1001,nr=1002,xe=1003,$1=1004;var fs=1005;var Se=1006,Ar=1007;var Hn=1008;var ke=1009,uo=1010,fo=1011,Ii=1012,wr=1013,en=1014,nn=1015,sn=1016,Cr=1017,Rr=1018,Pi=1020,po=35902,mo=35899,go=1021,_o=1022,Xe=1023,cn=1026,Wn=1027,xo=1028,Ir=1029,Xn=1030,Pr=1031;var Lr=1033,ps=33776,ms=33777,gs=33778,_s=33779,Dr=35840,Nr=35841,Ur=35842,Fr=35843,Or=36196,Br=37492,zr=37496,Vr=37488,kr=37489,xs=37490,Gr=37491,Hr=37808,Wr=37809,Xr=37810,qr=37811,Yr=37812,Zr=37813,Jr=37814,$r=37815,Kr=37816,Qr=37817,jr=37818,ta=37819,ea=37820,na=37821,ia=36492,sa=36494,ra=36495,aa=36283,oa=36284,vs=36285,la=36286;var Hi=2300,ir=2301,qs=2302,Ga=2303,Ha=2400,Wa=2401,Xa=2402;var K1=3200;var vo=0,Q1=1,bn="",ve="srgb",Wi="srgb-linear",Xi="linear",Jt="srgb";var Ys=7680;var j1=519,t0=512,e0=513,n0=514,ca=515,i0=516,s0=517,ha=518,r0=519,a0=35044;var yo="300 es",Ke=2e3,qi=2001;function K0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Q0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Yi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function o0(){let i=Yi("canvas");return i.style.display="block",i}var s1={},bi=null;function So(...i){let t="THREE."+i.shift();bi?bi("log",t,...i):console.log(t,...i)}function l0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ct(...i){i=l0(i);let t="THREE."+i.shift();if(bi)bi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Rt(...i){i=l0(i);let t="THREE."+i.shift();if(bi)bi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Kn(...i){let t=i.join(" ");t in s1||(s1[t]=!0,Ct(...i))}function c0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var h0={[Zs]:Js,[$s]:js,[Ks]:tr,[Mi]:Qs,[Js]:Zs,[js]:$s,[tr]:Ks,[Qs]:Mi},hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],r1=1234567,ki=Math.PI/180,Ti=180/Math.PI;function Li(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function kt(i,t,e){return Math.max(t,Math.min(e,i))}function Mo(i,t){return(i%t+t)%t}function j0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function t2(i,t,e){return i!==t?(e-i)/(t-i):0}function Gi(i,t,e){return(1-e)*i+e*t}function e2(i,t,e,n){return Gi(i,t,1-Math.exp(-e*n))}function n2(i,t=1){return t-Math.abs(Mo(i,t*2)-t)}function i2(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function s2(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function r2(i,t){return i+Math.floor(Math.random()*(t-i+1))}function a2(i,t){return i+Math.random()*(t-i)}function o2(i){return i*(.5-Math.random())}function l2(i){i!==void 0&&(r1=i);let t=r1+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function c2(i){return i*ki}function h2(i){return i*Ti}function u2(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function d2(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function f2(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function p2(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),d=a((t+n)/2),g=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*d,c*g,c*h,o*l);break;case"YZY":i.set(c*h,o*d,c*g,o*l);break;case"ZXZ":i.set(c*g,c*h,o*d,o*l);break;case"XZX":i.set(o*d,c*p,c*f,o*l);break;case"YXY":i.set(c*f,o*d,c*p,o*l);break;case"ZYZ":i.set(c*p,c*f,o*d,o*l);break;default:Ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Tn={DEG2RAD:ki,RAD2DEG:Ti,generateUUID:Li,clamp:kt,euclideanModulo:Mo,mapLinear:j0,inverseLerp:t2,lerp:Gi,damp:e2,pingpong:n2,smoothstep:i2,smootherstep:s2,randInt:r2,randFloat:a2,randFloatSpread:o2,seededRandom:l2,degToRad:c2,radToDeg:h2,isPowerOfTwo:u2,ceilPowerOfTwo:d2,floorPowerOfTwo:f2,setQuaternionFromProperEuler:p2,normalize:Re,denormalize:yi},wo=class wo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wo.prototype.isVector2=!0;var Xt=wo,un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],g=n[s+3],h=r[a+0],f=r[a+1],p=r[a+2],S=r[a+3];if(g!==S||c!==h||l!==f||d!==p){let m=c*h+l*f+d*p+g*S;m<0&&(h=-h,f=-f,p=-p,S=-S,m=-m);let u=1-o;if(m<.9995){let T=Math.acos(m),w=Math.sin(T);u=Math.sin(u*T)/w,o=Math.sin(o*T)/w,c=c*u+h*o,l=l*u+f*o,d=d*u+p*o,g=g*u+S*o}else{c=c*u+h*o,l=l*u+f*o,d=d*u+p*o,g=g*u+S*o;let T=1/Math.sqrt(c*c+l*l+d*d+g*g);c*=T,l*=T,d*=T,g*=T}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],g=r[a],h=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+d*g+c*f-l*h,t[e+1]=c*p+d*h+l*g-o*f,t[e+2]=l*p+d*f+o*h-c*g,t[e+3]=d*p-o*g-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),g=o(r/2),h=c(n/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=h*d*g+l*f*p,this._y=l*f*g-h*d*p,this._z=l*d*p+h*f*g,this._w=l*d*g-h*f*p;break;case"YXZ":this._x=h*d*g+l*f*p,this._y=l*f*g-h*d*p,this._z=l*d*p-h*f*g,this._w=l*d*g+h*f*p;break;case"ZXY":this._x=h*d*g-l*f*p,this._y=l*f*g+h*d*p,this._z=l*d*p+h*f*g,this._w=l*d*g-h*f*p;break;case"ZYX":this._x=h*d*g-l*f*p,this._y=l*f*g+h*d*p,this._z=l*d*p-h*f*g,this._w=l*d*g+h*f*p;break;case"YZX":this._x=h*d*g+l*f*p,this._y=l*f*g+h*d*p,this._z=l*d*p-h*f*g,this._w=l*d*g-h*f*p;break;case"XZY":this._x=h*d*g-l*f*p,this._y=l*f*g-h*d*p,this._z=l*d*p+h*f*g,this._w=l*d*g+h*f*p;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],d=e[6],g=e[10],h=n+o+g;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>g){let f=2*Math.sqrt(1+n-o-g);this._w=(d-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>g){let f=2*Math.sqrt(1+o-n-g);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+d)/f}else{let f=2*Math.sqrt(1+g-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,e=Math.sin(e*l)/d,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Co=class Co{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(a1.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(a1.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),d=2*(o*e-r*s),g=2*(r*n-a*e);return this.x=e+c*l+a*g-o*d,this.y=n+c*d+o*l-r*g,this.z=s+c*g+r*d-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Co.prototype.isVector3=!0;var G=Co,Ma=new G,a1=new un,Ro=class Ro{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],g=n[7],h=n[2],f=n[5],p=n[8],S=s[0],m=s[3],u=s[6],T=s[1],w=s[4],y=s[7],M=s[2],b=s[5],C=s[8];return r[0]=a*S+o*T+c*M,r[3]=a*m+o*w+c*b,r[6]=a*u+o*y+c*C,r[1]=l*S+d*T+g*M,r[4]=l*m+d*w+g*b,r[7]=l*u+d*y+g*C,r[2]=h*S+f*T+p*M,r[5]=h*m+f*w+p*b,r[8]=h*u+f*y+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8];return e*a*d-e*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],g=d*a-o*l,h=o*c-d*r,f=l*r-a*c,p=e*g+n*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/p;return t[0]=g*S,t[1]=(s*l-d*n)*S,t[2]=(o*n-s*a)*S,t[3]=h*S,t[4]=(d*e-s*c)*S,t[5]=(s*r-o*e)*S,t[6]=f*S,t[7]=(n*c-l*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Kn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ba.makeScale(t,e)),this}rotate(t){return Kn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ba.makeRotation(-t)),this}translate(t,e){return Kn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ro.prototype.isMatrix3=!0;var It=Ro,ba=new It,o1=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l1=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m2(){let i={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Jt&&(s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bn?Xi:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Kn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Kn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wi]:{primaries:t,whitePoint:n,transfer:Xi,toXYZ:o1,fromXYZ:l1,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:o1,fromXYZ:l1,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}}),i}var Vt=m2();function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var oi,sr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{oi===void 0&&(oi=Yi("canvas")),oi.width=t.width,oi.height=t.height;let s=oi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=oi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mn(e[n]/255)*255):e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},g2=0,Ei=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:g2++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ta(s[a].image)):r.push(Ta(s[a]))}else r=Ta(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}var _2=0,Ea=new G,Ne=class i extends hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ln,s=ln,r=Se,a=Hn,o=Xe,c=ke,l=i.DEFAULT_ANISOTROPY,d=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_2++}),this.uuid=Li(),this.name="",this.source=new Ei(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ea).x}get height(){return this.source.getSize(Ea).y}get depth(){return this.source.getSize(Ea).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ho)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case er:t.x=t.x-Math.floor(t.x);break;case ln:t.x=t.x<0?0:1;break;case nr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case er:t.y=t.y-Math.floor(t.y);break;case ln:t.y=t.y<0?0:1;break;case nr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=ho;Ne.DEFAULT_ANISOTROPY=1;var Io=class Io{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],d=c[4],g=c[8],h=c[1],f=c[5],p=c[9],S=c[2],m=c[6],u=c[10];if(Math.abs(d-h)<.01&&Math.abs(g-S)<.01&&Math.abs(p-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(g+S)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,y=(f+1)/2,M=(u+1)/2,b=(d+h)/4,C=(g+S)/4,x=(p+m)/4;return w>y&&w>M?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=C/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=x/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=C/r,s=x/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-p)*(m-p)+(g-S)*(g-S)+(h-d)*(h-d));return Math.abs(T)<.001&&(T=1),this.x=(m-p)/T,this.y=(g-S)/T,this.z=(h-d)/T,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Io.prototype.isVector4=!0;var oe=Io,rr=class extends hn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ne(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Se,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ei(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ue=class extends rr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zi=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xe,this.minFilter=xe,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ar=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xe,this.minFilter=xe,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var br=class br{constructor(t,e,n,s,r,a,o,c,l,d,g,h,f,p,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,d,g,h,f,p,S,m)}set(t,e,n,s,r,a,o,c,l,d,g,h,f,p,S,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=d,u[10]=g,u[14]=h,u[3]=f,u[7]=p,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new br().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/li.setFromMatrixColumn(t,0).length(),r=1/li.setFromMatrixColumn(t,1).length(),a=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let h=a*d,f=a*g,p=o*d,S=o*g;e[0]=c*d,e[4]=-c*g,e[8]=l,e[1]=f+p*l,e[5]=h-S*l,e[9]=-o*c,e[2]=S-h*l,e[6]=p+f*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*d,f=c*g,p=l*d,S=l*g;e[0]=h+S*o,e[4]=p*o-f,e[8]=a*l,e[1]=a*g,e[5]=a*d,e[9]=-o,e[2]=f*o-p,e[6]=S+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*d,f=c*g,p=l*d,S=l*g;e[0]=h-S*o,e[4]=-a*g,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*d,e[9]=S-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*d,f=a*g,p=o*d,S=o*g;e[0]=c*d,e[4]=p*l-f,e[8]=h*l+S,e[1]=c*g,e[5]=S*l+h,e[9]=f*l-p,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,f=a*l,p=o*c,S=o*l;e[0]=c*d,e[4]=S-h*g,e[8]=p*g+f,e[1]=g,e[5]=a*d,e[9]=-o*d,e[2]=-l*d,e[6]=f*g+p,e[10]=h-S*g}else if(t.order==="XZY"){let h=a*c,f=a*l,p=o*c,S=o*l;e[0]=c*d,e[4]=-g,e[8]=l*d,e[1]=h*g+S,e[5]=a*d,e[9]=f*g-p,e[2]=p*g-f,e[6]=o*d,e[10]=S*g+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(x2,t,v2)}lookAt(t,e,n){let s=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Cn.crossVectors(n,Fe),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Cn.crossVectors(n,Fe)),Cn.normalize(),Es.crossVectors(Fe,Cn),s[0]=Cn.x,s[4]=Es.x,s[8]=Fe.x,s[1]=Cn.y,s[5]=Es.y,s[9]=Fe.y,s[2]=Cn.z,s[6]=Es.z,s[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],g=n[5],h=n[9],f=n[13],p=n[2],S=n[6],m=n[10],u=n[14],T=n[3],w=n[7],y=n[11],M=n[15],b=s[0],C=s[4],x=s[8],A=s[12],L=s[1],U=s[5],z=s[9],N=s[13],D=s[2],k=s[6],J=s[10],q=s[14],nt=s[3],W=s[7],Q=s[11],tt=s[15];return r[0]=a*b+o*L+c*D+l*nt,r[4]=a*C+o*U+c*k+l*W,r[8]=a*x+o*z+c*J+l*Q,r[12]=a*A+o*N+c*q+l*tt,r[1]=d*b+g*L+h*D+f*nt,r[5]=d*C+g*U+h*k+f*W,r[9]=d*x+g*z+h*J+f*Q,r[13]=d*A+g*N+h*q+f*tt,r[2]=p*b+S*L+m*D+u*nt,r[6]=p*C+S*U+m*k+u*W,r[10]=p*x+S*z+m*J+u*Q,r[14]=p*A+S*N+m*q+u*tt,r[3]=T*b+w*L+y*D+M*nt,r[7]=T*C+w*U+y*k+M*W,r[11]=T*x+w*z+y*J+M*Q,r[15]=T*A+w*N+y*q+M*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],d=t[2],g=t[6],h=t[10],f=t[14],p=t[3],S=t[7],m=t[11],u=t[15],T=c*f-l*h,w=o*f-l*g,y=o*h-c*g,M=a*f-l*d,b=a*h-c*d,C=a*g-o*d;return e*(S*T-m*w+u*y)-n*(p*T-m*M+u*b)+s*(p*w-S*M+u*C)-r*(p*y-S*b+m*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],d=t[10];return e*(a*d-o*l)-n*(r*d-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],d=t[8],g=t[9],h=t[10],f=t[11],p=t[12],S=t[13],m=t[14],u=t[15],T=e*o-n*a,w=e*c-s*a,y=e*l-r*a,M=n*c-s*o,b=n*l-r*o,C=s*l-r*c,x=d*S-g*p,A=d*m-h*p,L=d*u-f*p,U=g*m-h*S,z=g*u-f*S,N=h*u-f*m,D=T*N-w*z+y*U+M*L-b*A+C*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/D;return t[0]=(o*N-c*z+l*U)*k,t[1]=(s*z-n*N-r*U)*k,t[2]=(S*C-m*b+u*M)*k,t[3]=(h*b-g*C-f*M)*k,t[4]=(c*L-a*N-l*A)*k,t[5]=(e*N-s*L+r*A)*k,t[6]=(m*y-p*C-u*w)*k,t[7]=(d*C-h*y+f*w)*k,t[8]=(a*z-o*L+l*x)*k,t[9]=(n*L-e*z-r*x)*k,t[10]=(p*b-S*y+u*T)*k,t[11]=(g*y-d*b-f*T)*k,t[12]=(o*A-a*U-c*x)*k,t[13]=(e*U-n*A+s*x)*k,t[14]=(S*w-p*M-m*T)*k,t[15]=(d*M-g*w+h*T)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,d=a+a,g=o+o,h=r*l,f=r*d,p=r*g,S=a*d,m=a*g,u=o*g,T=c*l,w=c*d,y=c*g,M=n.x,b=n.y,C=n.z;return s[0]=(1-(S+u))*M,s[1]=(f+y)*M,s[2]=(p-w)*M,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(h+u))*b,s[6]=(m+T)*b,s[7]=0,s[8]=(p+w)*C,s[9]=(m-T)*C,s[10]=(1-(h+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=li.set(s[0],s[1],s[2]).length(),o=li.set(s[4],s[5],s[6]).length(),c=li.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ye.copy(this);let l=1/a,d=1/o,g=1/c;return Ye.elements[0]*=l,Ye.elements[1]*=l,Ye.elements[2]*=l,Ye.elements[4]*=d,Ye.elements[5]*=d,Ye.elements[6]*=d,Ye.elements[8]*=g,Ye.elements[9]*=g,Ye.elements[10]*=g,e.setFromRotationMatrix(Ye),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Ke,c=!1){let l=this.elements,d=2*r/(e-t),g=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),p,S;if(c)p=r/(a-r),S=a*r/(a-r);else if(o===Ke)p=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===qi)p=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=g,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ke,c=!1){let l=this.elements,d=2/(e-t),g=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),p,S;if(c)p=1/(a-r),S=a/(a-r);else if(o===Ke)p=-2/(a-r),S=-(a+r)/(a-r);else if(o===qi)p=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=g,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};br.prototype.isMatrix4=!0;var le=br,li=new G,Ye=new le,x2=new G(0,0,0),v2=new G(1,1,1),Cn=new G,Es=new G,Fe=new G,c1=new le,h1=new un,je=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],g=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-g,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return c1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(c1,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return h1.setFromEuler(this),this.setFromQuaternion(h1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};je.DEFAULT_ORDER="XYZ";var Ji=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},y2=0,u1=new G,ci=new un,gn=new le,As=new G,Oi=new G,S2=new G,M2=new un,d1=new G(1,0,0),f1=new G(0,1,0),p1=new G(0,0,1),m1={type:"added"},b2={type:"removed"},hi={type:"childadded",child:null},Aa={type:"childremoved",child:null},Be=class i extends hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y2++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new je,n=new un,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new It}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ji,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(d1,t)}rotateY(t){return this.rotateOnAxis(f1,t)}rotateZ(t){return this.rotateOnAxis(p1,t)}translateOnAxis(t,e){return u1.copy(t).applyQuaternion(this.quaternion),this.position.add(u1.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(d1,t)}translateY(t){return this.translateOnAxis(f1,t)}translateZ(t){return this.translateOnAxis(p1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?As.copy(t):As.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Oi,As,this.up):gn.lookAt(As,Oi,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),ci.setFromRotationMatrix(gn),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Rt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(m1),hi.child=t,this.dispatchEvent(hi),hi.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(b2),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(m1),hi.child=t,this.dispatchEvent(hi),hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,t,S2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,M2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let g=c[l];r(t.shapes,g)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),d=a(t.images),g=a(t.shapes),h=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),g.length>0&&(n.shapes=g),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let c=[];for(let l in o){let d=o[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Be.DEFAULT_UP=new G(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},T2={type:"move"},Ai=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let S of t.hand.values()){let m=e.getJointPose(S,n),u=this._getHandJoint(l,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let d=l.joints["index-finger-tip"],g=l.joints["thumb-tip"],h=d.position.distanceTo(g.position),f=.02,p=.005;l.inputState.pinching&&h>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T2)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},u0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},ws={h:0,s:0,l:0};function wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Vt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Vt.workingColorSpace){if(t=Mo(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wa(a,r,t+1/3),this.g=wa(a,r,t),this.b=wa(a,r,t-1/3)}return Vt.colorSpaceToWorking(this,s),this}setStyle(t,e=ve){function n(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){let n=u0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return Vt.workingToColorSpace(Ee.copy(this),t),Math.round(kt(Ee.r*255,0,255))*65536+Math.round(kt(Ee.g*255,0,255))*256+Math.round(kt(Ee.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.workingToColorSpace(Ee.copy(this),e);let n=Ee.r,s=Ee.g,r=Ee.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,d=(o+a)/2;if(o===a)c=0,l=0;else{let g=a-o;switch(l=d<=.5?g/(a+o):g/(2-a-o),a){case n:c=(s-r)/g+(s<r?6:0);break;case s:c=(r-n)/g+2;break;case r:c=(n-s)/g+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=Vt.workingColorSpace){return Vt.workingToColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=ve){Vt.workingToColorSpace(Ee.copy(this),t);let e=Ee.r,n=Ee.g,s=Ee.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(ws);let n=Gi(Rn.h,ws.h,e),s=Gi(Rn.s,ws.s,e),r=Gi(Rn.l,ws.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ee=new Ft;Ft.NAMES=u0;var $i=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ze=new G,_n=new G,Ca=new G,xn=new G,ui=new G,di=new G,g1=new G,Ra=new G,Ia=new G,Pa=new G,La=new oe,Da=new oe,Na=new oe,Dn=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ze.subVectors(t,e),s.cross(Ze);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ze.subVectors(s,e),_n.subVectors(n,e),Ca.subVectors(t,e);let a=Ze.dot(Ze),o=Ze.dot(_n),c=Ze.dot(Ca),l=_n.dot(_n),d=_n.dot(Ca),g=a*l-o*o;if(g===0)return r.set(0,0,0),null;let h=1/g,f=(l*c-o*d)*h,p=(a*d-o*c)*h;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(a,xn.y),c.addScaledVector(o,xn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return La.setScalar(0),Da.setScalar(0),Na.setScalar(0),La.fromBufferAttribute(t,e),Da.fromBufferAttribute(t,n),Na.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(La,r.x),a.addScaledVector(Da,r.y),a.addScaledVector(Na,r.z),a}static isFrontFacing(t,e,n,s){return Ze.subVectors(n,e),_n.subVectors(t,e),Ze.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Ze.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ui.subVectors(s,n),di.subVectors(r,n),Ra.subVectors(t,n);let c=ui.dot(Ra),l=di.dot(Ra);if(c<=0&&l<=0)return e.copy(n);Ia.subVectors(t,s);let d=ui.dot(Ia),g=di.dot(Ia);if(d>=0&&g<=d)return e.copy(s);let h=c*g-d*l;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(ui,a);Pa.subVectors(t,r);let f=ui.dot(Pa),p=di.dot(Pa);if(p>=0&&f<=p)return e.copy(r);let S=f*l-c*p;if(S<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(n).addScaledVector(di,o);let m=d*p-f*g;if(m<=0&&g-d>=0&&f-p>=0)return g1.subVectors(r,s),o=(g-d)/(g-d+(f-p)),e.copy(s).addScaledVector(g1,o);let u=1/(m+S+h);return a=S*u,o=h*u,e.copy(n).addScaledVector(ui,a).addScaledVector(di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nn=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Je):Je.fromBufferAttribute(r,a),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bi),Rs.subVectors(this.max,Bi),fi.subVectors(t.a,Bi),pi.subVectors(t.b,Bi),mi.subVectors(t.c,Bi),In.subVectors(pi,fi),Pn.subVectors(mi,pi),Yn.subVectors(fi,mi);let e=[0,-In.z,In.y,0,-Pn.z,Pn.y,0,-Yn.z,Yn.y,In.z,0,-In.x,Pn.z,0,-Pn.x,Yn.z,0,-Yn.x,-In.y,In.x,0,-Pn.y,Pn.x,0,-Yn.y,Yn.x,0];return!Ua(e,fi,pi,mi,Rs)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,fi,pi,mi,Rs))?!1:(Is.crossVectors(In,Pn),e=[Is.x,Is.y,Is.z],Ua(e,fi,pi,mi,Rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vn=[new G,new G,new G,new G,new G,new G,new G,new G],Je=new G,Cs=new Nn,fi=new G,pi=new G,mi=new G,In=new G,Pn=new G,Yn=new G,Bi=new G,Rs=new G,Is=new G,Zn=new G;function Ua(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zn.fromArray(i,r);let o=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),c=t.dot(Zn),l=e.dot(Zn),d=n.dot(Zn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}var de=new G,Ps=new Xt,E2=0,Ie=class extends hn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:E2++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=a0,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ki=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}},Qi=class extends Ie{constructor(t,e,n){super(new Int32Array(t),e,n)}},ji=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ye=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},A2=new Nn,zi=new G,Fa=new G,Qn=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):A2.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zi.subVectors(t,this.center);let e=zi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zi.copy(t.center).add(Fa)),this.expandByPoint(zi.copy(t.center).sub(Fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},w2=0,He=new le,Oa=new Be,gi=new G,Oe=new Nn,Vi=new Nn,_e=new G,Pe=class i extends hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w2++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(K0(t)?ji:Ki)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return Oa.lookAt(t),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Oe.min,Vi.min),Oe.expandByPoint(_e),_e.addVectors(Oe.max,Vi.max),Oe.expandByPoint(_e)):(Oe.expandByPoint(Vi.min),Oe.expandByPoint(Vi.max))}Oe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)_e.fromBufferAttribute(o,l),c&&(gi.fromBufferAttribute(t,l),_e.add(gi)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ie(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new G,c[x]=new G;let l=new G,d=new G,g=new G,h=new Xt,f=new Xt,p=new Xt,S=new G,m=new G;function u(x,A,L){l.fromBufferAttribute(n,x),d.fromBufferAttribute(n,A),g.fromBufferAttribute(n,L),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,L),d.sub(l),g.sub(l),f.sub(h),p.sub(h);let U=1/(f.x*p.y-p.x*f.y);isFinite(U)&&(S.copy(d).multiplyScalar(p.y).addScaledVector(g,-f.y).multiplyScalar(U),m.copy(g).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(U),o[x].add(S),o[A].add(S),o[L].add(S),c[x].add(m),c[A].add(m),c[L].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let x=0,A=T.length;x<A;++x){let L=T[x],U=L.start,z=L.count;for(let N=U,D=U+z;N<D;N+=3)u(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let w=new G,y=new G,M=new G,b=new G;function C(x){M.fromBufferAttribute(s,x),b.copy(M);let A=o[x];w.copy(A),w.sub(M.multiplyScalar(M.dot(A))).normalize(),y.crossVectors(b,A);let U=y.dot(c[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,U)}for(let x=0,A=T.length;x<A;++x){let L=T[x],U=L.start,z=L.count;for(let N=U,D=U+z;N<D;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new G,r=new G,a=new G,o=new G,c=new G,l=new G,d=new G,g=new G;if(t)for(let h=0,f=t.count;h<f;h+=3){let p=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),d.subVectors(a,r),g.subVectors(s,r),d.cross(g),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,r),g.subVectors(s,r),d.cross(g),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,c){let l=o.array,d=o.itemSize,g=o.normalized,h=new l.constructor(c.length*d),f=0,p=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?f=c[S]*o.data.stride+o.offset:f=c[S]*d;for(let u=0;u<d;u++)h[p++]=l[f++]}return new Ie(h,d,g)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let d=0,g=l.length;d<g;d++){let h=l[d],f=t(h,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let g=0,h=l.length;g<h;g++){let f=l[g];d.push(f.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(e))}let r=t.morphAttributes;for(let l in r){let d=[],g=r[l];for(let h=0,f=g.length;h<f;h++)d.push(g[h].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,d=a.length;l<d;l++){let g=a[l];this.addGroup(g.start,g.count,g.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ba=new G,C2=new G,R2=new It,$e=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ba.subVectors(n,e).cross(C2.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ba),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||R2.getNormalMatrix(t),s=this.coplanarPoint(Ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},I2=0,Un=class extends hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I2++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Ri,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=no,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new $e().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var yn=new G,za=new G,Ls=new G,Ds=new G,ts=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){za.copy(t).add(e).multiplyScalar(.5),Ls.copy(e).sub(t).normalize(),Ds.copy(this.origin).sub(za);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ls),o=Ds.dot(this.direction),c=-Ds.dot(Ls),l=Ds.lengthSq(),d=Math.abs(1-a*a),g,h,f,p;if(d>0)if(g=a*c-o,h=a*o-c,p=r*d,g>=0)if(h>=-p)if(h<=p){let S=1/d;g*=S,h*=S,f=g*(g+a*h+2*o)+h*(a*g+h+2*c)+l}else h=r,g=Math.max(0,-(a*h+o)),f=-g*g+h*(h+2*c)+l;else h=-r,g=Math.max(0,-(a*h+o)),f=-g*g+h*(h+2*c)+l;else h<=-p?(g=Math.max(0,-(-a*r+o)),h=g>0?-r:Math.min(Math.max(-r,-c),r),f=-g*g+h*(h+2*c)+l):h<=p?(g=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(g=Math.max(0,-(a*r+o)),h=g>0?r:Math.min(Math.max(-r,-c),r),f=-g*g+h*(h+2*c)+l);else h=a>0?-r:r,g=Math.max(0,-(a*h+o)),f=-g*g+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(za).addScaledVector(Ls,h),f}intersectSphere(t,e){if(t.radius<0)return null;yn.subVectors(t.center,this.origin);let n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,d=1/this.direction.y,g=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),d>=0?(r=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(o=(t.min.z-h.z)*g,c=(t.max.z-h.z)*g):(o=(t.max.z-h.z)*g,c=(t.min.z-h.z)*g),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,g=t.x-a.x,h=t.y-a.y,f=t.z-a.z,p=e.x-a.x,S=e.y-a.y,m=e.z-a.z,u=n.x-a.x,T=n.y-a.y,w=n.z-a.z,y=Math.abs(c),M=Math.abs(l),b=Math.abs(d),C,x,A,L,U,z,N,D,k,J,q,nt;if(y>=M&&y>=b?(A=c,z=g,k=p,nt=u,c>=0?(C=l,x=d,L=h,U=f,N=S,D=m,J=T,q=w):(C=d,x=l,L=f,U=h,N=m,D=S,J=w,q=T)):M>=b?(A=l,z=h,k=S,nt=T,l>=0?(C=d,x=c,L=f,U=g,N=m,D=p,J=w,q=u):(C=c,x=d,L=g,U=f,N=p,D=m,J=u,q=w)):(A=d,z=f,k=m,nt=w,d>=0?(C=c,x=l,L=g,U=h,N=p,D=S,J=u,q=T):(C=l,x=c,L=h,U=g,N=S,D=p,J=T,q=u)),A===0)return null;let W=C/A,Q=x/A,tt=1/A,At=L-W*z,Tt=U-Q*z,jt=N-W*k,Gt=D-Q*k,qt=J-W*nt,Y=q-Q*nt,j=qt*Gt-Y*jt,_t=At*Y-Tt*qt,Pt=jt*Tt-Gt*At;if(s){if(j<0||_t<0||Pt<0)return null}else if((j<0||_t<0||Pt<0)&&(j>0||_t>0||Pt>0))return null;let mt=j+_t+Pt;if(mt===0)return null;let Ut=tt*(j*z+_t*k+Pt*nt);return(mt>0?Ut<0:Ut>0)?null:this.at(Ut/mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},es=class extends Un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},_1=new le,Jn=new ts,Ns=new Qn,x1=new G,Us=new G,Fs=new G,Os=new G,Va=new G,Bs=new G,v1=new G,zs=new G,We=class extends Be{constructor(t=new Pe,e=new es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Bs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=o[c],g=r[c];d!==0&&(Va.fromBufferAttribute(g,t),a?Bs.addScaledVector(Va,d):Bs.addScaledVector(Va.sub(e),d))}e.add(Bs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(Ns.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Ns,x1)===null||Jn.origin.distanceToSquared(x1)>(t.far-t.near)**2))&&(_1.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(_1),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,g=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,S=h.length;p<S;p++){let m=h[p],u=a[m.materialIndex],T=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,M=w;y<M;y+=3){let b=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);s=Vs(this,u,t,n,l,d,g,b,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=p,u=S;m<u;m+=3){let T=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);s=Vs(this,a,t,n,l,d,g,T,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,S=h.length;p<S;p++){let m=h[p],u=a[m.materialIndex],T=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,M=w;y<M;y+=3){let b=y,C=y+1,x=y+2;s=Vs(this,u,t,n,l,d,g,b,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let m=p,u=S;m<u;m+=3){let T=m,w=m+1,y=m+2;s=Vs(this,a,t,n,l,d,g,T,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function P2(i,t,e,n,s,r,a,o){let c;if(t.side===Le?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===kn,o),c===null)return null;zs.copy(o),zs.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(zs);return l<e.near||l>e.far?null:{distance:l,point:zs.clone(),object:i}}function Vs(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Us),i.getVertexPosition(c,Fs),i.getVertexPosition(l,Os);let d=P2(i,t,e,n,Us,Fs,Os,v1);if(d){let g=new G;Dn.getBarycoord(v1,Us,Fs,Os,g),s&&(d.uv=Dn.getInterpolatedAttribute(s,o,c,l,g,new Xt)),r&&(d.uv1=Dn.getInterpolatedAttribute(r,o,c,l,g,new Xt)),a&&(d.normal=Dn.getInterpolatedAttribute(a,o,c,l,g,new G),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new G,materialIndex:0};Dn.getNormal(Us,Fs,Os,h.normal),d.face=h,d.barycoord=g}return d}var or=class extends Ne{constructor(t=null,e=1,n=1,s,r,a,o,c,l=xe,d=xe,g,h){super(null,a,o,c,l,d,s,r,g,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=new Qn,L2=new Xt(.5,.5),ks=new G,ns=class{constructor(t=new $e,e=new $e,n=new $e,s=new $e,r=new $e,a=new $e){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ke,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],g=r[5],h=r[6],f=r[7],p=r[8],S=r[9],m=r[10],u=r[11],T=r[12],w=r[13],y=r[14],M=r[15];if(s[0].setComponents(l-a,f-d,u-p,M-T).normalize(),s[1].setComponents(l+a,f+d,u+p,M+T).normalize(),s[2].setComponents(l+o,f+g,u+S,M+w).normalize(),s[3].setComponents(l-o,f-g,u-S,M-w).normalize(),n)s[4].setComponents(c,h,m,y).normalize(),s[5].setComponents(l-c,f-h,u-m,M-y).normalize();else if(s[4].setComponents(l-c,f-h,u-m,M-y).normalize(),e===Ke)s[5].setComponents(l+c,f+h,u+m,M+y).normalize();else if(e===qi)s[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){$n.center.set(0,0,0);let e=L2.distanceTo(t.center);return $n.radius=.7071067811865476+e,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ks.x=s.normal.x>0?t.max.x:t.min.x,ks.y=s.normal.y>0?t.max.y:t.min.y,ks.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fn=class extends Un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},y1=new le,qa=new ts,Gs=new Qn,Hs=new G,jn=class extends Be{constructor(t=new Pe,e=new Fn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Gs.radius+=r,t.ray.intersectsSphere(Gs)===!1)return;y1.copy(s).invert(),qa.copy(t.ray).applyMatrix4(y1);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,g=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=h,S=f;p<S;p++){let m=l.getX(p);Hs.fromBufferAttribute(g,m),S1(Hs,m,c,s,t,e,this)}}else{let h=Math.max(0,a.start),f=Math.min(g.count,a.start+a.count);for(let p=h,S=f;p<S;p++)Hs.fromBufferAttribute(g,p),S1(Hs,p,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function S1(i,t,e,n,s,r,a){let o=qa.distanceSqToPoint(i);if(o<e){let c=new G;qa.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var is=class extends Ne{constructor(t=[],e=Gn,n,s,r,a,o,c,l,d){super(t,e,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var On=class extends Ne{constructor(t,e,n=en,s,r,a,o=xe,c=xe,l,d=cn,g=1){if(d!==cn&&d!==Wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:g};super(h,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ei(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},lr=class extends On{constructor(t,e=en,n=Gn,s,r,a=xe,o=xe,c,l=cn){let d={width:t,height:t,depth:1},g=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,o,c,l),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ss=class extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},wi=class i extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],d=[],g=[],h=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(g,2));function p(S,m,u,T,w,y,M,b,C,x,A){let L=y/C,U=M/x,z=y/2,N=M/2,D=b/2,k=C+1,J=x+1,q=0,nt=0,W=new G;for(let Q=0;Q<J;Q++){let tt=Q*U-N;for(let At=0;At<k;At++){let Tt=At*L-z;W[S]=Tt*T,W[m]=tt*w,W[u]=D,l.push(W.x,W.y,W.z),W[S]=0,W[m]=0,W[u]=b>0?1:-1,d.push(W.x,W.y,W.z),g.push(At/C),g.push(1-Q/x),q+=1}}for(let Q=0;Q<x;Q++)for(let tt=0;tt<C;tt++){let At=h+tt+k*Q,Tt=h+tt+k*(Q+1),jt=h+(tt+1)+k*(Q+1),Gt=h+(tt+1)+k*Q;c.push(At,Tt,Gt),c.push(Tt,jt,Gt),nt+=6}o.addGroup(f,nt,A),f+=nt,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var rs=class i extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,g=t/o,h=e/c,f=[],p=[],S=[],m=[];for(let u=0;u<d;u++){let T=u*h-a;for(let w=0;w<l;w++){let y=w*g-r;p.push(y,-T,0),S.push(0,0,1),m.push(w/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let T=0;T<o;T++){let w=T+l*u,y=T+l*(u+1),M=T+1+l*(u+1),b=T+1+l*u;f.push(w,y,b),f.push(y,M,b)}this.setIndex(f),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(S,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function ii(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(M1(s))s.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(M1(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function we(i){let t={};for(let e=0;e<i.length;e++){let n=ii(i[e]);for(let s in n)t[s]=n[s]}return t}function M1(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function D2(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bo(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}var d0={clone:ii,merge:we},N2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends Un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N2,this.fragmentShader=U2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ii(t.uniforms),this.uniformsGroups=D2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ft().setHex(s.value);break;case"v2":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new oe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new It().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},cr=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var hr=class extends Un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ur=class extends Un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _i(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ka(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Bn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dr=class extends Bn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ha,endingEnd:Ha}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wa:r=t,o=2*e-n;break;case Xa:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wa:a=t,c=2*n-e;break;case Xa:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,d=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,d=this._offsetPrev,g=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),S=p*p,m=S*p,u=-h*m+2*h*S-h*p,T=(1+h)*m+(-1.5-2*h)*S+(-.5+h)*p+1,w=(-1-f)*m+(1.5+f)*S+.5*p,y=f*m-f*S;for(let M=0;M!==o;++M)r[M]=u*a[d+M]+T*a[l+M]+w*a[c+M]+y*a[g+M];return r}},fr=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,d=(n-e)/(s-e),g=1-d;for(let h=0;h!==o;++h)r[h]=a[l+h]*g+a[c+h]*d;return r}},pr=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},mr=class extends Bn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,d=this.inTangents,g=this.outTangents;if(!d||!g){let p=(n-e)/(s-e),S=1-p;for(let m=0;m!==o;++m)r[m]=a[l+m]*S+a[c+m]*p;return r}let h=o*2,f=t-1;for(let p=0;p!==o;++p){let S=a[l+p],m=a[c+p],u=f*h+p*2,T=g[u],w=g[u+1],y=t*h+p*2,M=d[y],b=d[y+1],C=O2(n,e,T,M,s);r[p]=f0(C,S,w,b,m)}return r}};function f0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function F2(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function O2(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=f0(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=F2(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Ve=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_i(e,this.TimeBufferType),this.values=_i(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_i(t.times,Array),values:_i(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ka(t.settings)&&(n.settings={inTangents:_i(t.settings.inTangents,Array),outTangents:_i(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new pr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new mr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Hi:e=this.InterpolantFactoryMethodDiscrete;break;case ir:e=this.InterpolantFactoryMethodLinear;break;case qs:e=this.InterpolantFactoryMethodSmooth;break;case Ga:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ct("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hi;case this.InterpolantFactoryMethodLinear:return ir;case this.InterpolantFactoryMethodSmooth:return qs;case this.InterpolantFactoryMethodBezier:return Ga}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ka(this.settings)&&(b1(this.settings.inTangents,t),b1(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Rt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Rt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Rt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Rt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Q0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Rt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qs,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],d=t[o+1];if(l!==d&&(o!==1||l!==t[0]))if(s)c=!0;else{let g=o*n,h=g-n,f=g+n;for(let p=0;p!==n;++p){let S=e[g+p];if(S!==e[h+p]||S!==e[f+p]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let g=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[g+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ka(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function b1(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ve.prototype.ValueTypeName="";Ve.prototype.TimeBufferType=Float32Array;Ve.prototype.ValueBufferType=Float32Array;Ve.prototype.DefaultInterpolation=ir;var zn=class extends Ve{constructor(t,e,n){super(t,e,n)}};zn.prototype.ValueTypeName="bool";zn.prototype.ValueBufferType=Array;zn.prototype.DefaultInterpolation=Hi;zn.prototype.InterpolantFactoryMethodLinear=void 0;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var gr=class extends Ve{constructor(t,e,n,s){super(t,e,n,s)}};gr.prototype.ValueTypeName="color";var _r=class extends Ve{constructor(t,e,n,s){super(t,e,n,s)}};_r.prototype.ValueTypeName="number";var xr=class extends Bn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let d=l+o;l!==d;l+=4)un.slerpFlat(r,0,a,l-o,a,l,c);return r}},as=class extends Ve{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new xr(this.times,this.values,this.getValueSize(),t)}};as.prototype.ValueTypeName="quaternion";as.prototype.InterpolantFactoryMethodSmooth=void 0;var Vn=class extends Ve{constructor(t,e,n){super(t,e,n)}};Vn.prototype.ValueTypeName="string";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=Hi;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var vr=class extends Ve{constructor(t,e,n,s){super(t,e,n,s)}};vr.prototype.ValueTypeName="vector";var Ya={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(T1(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!T1(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function T1(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var yr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,g){return l.push(d,g),this},this.removeHandler=function(d){let g=l.indexOf(d);return g!==-1&&l.splice(g,2),this},this.getHandler=function(d){for(let g=0,h=l.length;g<h;g+=2){let f=l[g],p=l[g+1];if(f.global&&(f.lastIndex=0),f.test(d))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},p0=new yr,ti=class{constructor(t){this.manager=t!==void 0?t:p0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sn={},Za=class extends Error{constructor(t,e){super(t),this.response=e}},os=class extends ti{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Ya.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Sn[t]!==void 0){Sn[t].push({onLoad:e,onProgress:n,onError:s});return}Sn[t]=[],Sn[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ct("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let d=Sn[t],g=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,p=f!==0,S=0,m=new ReadableStream({start(u){T();function T(){g.read().then(({done:w,value:y})=>{if(w)u.close();else{S+=y.byteLength;let M=new ProgressEvent("progress",{lengthComputable:p,loaded:S,total:f});for(let b=0,C=d.length;b<C;b++){let x=d[b];x.onProgress&&x.onProgress(M)}u.enqueue(y),T()}},w=>{u.error(w)})}}});return new Response(m)}else throw new Za(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o==="")return l.text();{let g=/charset="?([^;"\s]*)"?/i.exec(o),h=g&&g[1]?g[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Ya.add(`file:${t}`,l);let d=Sn[t];delete Sn[t];for(let g=0,h=d.length;g<h;g++){let f=d[g];f.onLoad&&f.onLoad(l)}}).catch(l=>{let d=Sn[t];if(d===void 0)throw this.manager.itemError(t),l;delete Sn[t];for(let g=0,h=d.length;g<h;g++){let f=d[g];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ws=new G,Xs=new un,on=new G,ls=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Ke,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ws,Xs,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ws,Xs,on.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ws,Xs,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ws,Xs,on.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ln=new G,E1=new Xt,A1=new Xt,Ae=class extends ls{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ti*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ki*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ti*2*Math.atan(Math.tan(ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,E1,A1),e.subVectors(A1,E1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ki*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var cs=class extends ls{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var xi=-90,vi=1,Sr=class extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ae(xi,vi,t,e);s.layers=this.layers,this.add(s);let r=new Ae(xi,vi,t,e);r.layers=this.layers,this.add(r);let a=new Ae(xi,vi,t,e);a.layers=this.layers,this.add(a);let o=new Ae(xi,vi,t,e);o.layers=this.layers,this.add(o);let c=new Ae(xi,vi,t,e);c.layers=this.layers,this.add(c);let l=new Ae(xi,vi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Ke)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,d]=this.children,g=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(g,h,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Mr=class extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var To="\\[\\]\\.:\\/",B2=new RegExp("["+To+"]","g"),Eo="[^"+To+"]",z2="[^"+To.replace("\\.","")+"]",V2=/((?:WC+[\/:])*)/.source.replace("WC",Eo),k2=/(WCOD+)?/.source.replace("WCOD",z2),G2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eo),H2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eo),W2=new RegExp("^"+V2+k2+G2+H2+"$"),X2=["material","materials","bones","map"],Ja=class{constructor(t,e,n){let s=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(B2,"")}static parseTrackName(t){let e=W2.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);X2.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===l){l=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Rt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=Ja;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z5=new Float32Array(1);var Po=class Po{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Po.prototype.isMatrix2=!0;var $a=Po;function Ao(i,t,e,n){let s=q2(n);switch(e){case go:return i*t;case xo:return i*t/s.components*s.byteLength;case Ir:return i*t/s.components*s.byteLength;case Xn:return i*t*2/s.components*s.byteLength;case Pr:return i*t*2/s.components*s.byteLength;case _o:return i*t*3/s.components*s.byteLength;case Xe:return i*t*4/s.components*s.byteLength;case Lr:return i*t*4/s.components*s.byteLength;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gs:case _s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nr:case Fr:return Math.max(i,16)*Math.max(t,8)/4;case Dr:case Ur:return Math.max(i,8)*Math.max(t,8)/2;case Or:case Br:case Vr:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zr:case xs:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Zr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $r:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Kr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ta:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ea:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case na:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ia:case sa:case ra:return Math.ceil(i/4)*Math.ceil(t/4)*16;case aa:case oa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case vs:case la:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function q2(i){switch(i){case ke:case uo:return{byteLength:1,components:1};case Ii:case fo:case sn:return{byteLength:2,components:1};case Cr:case Rr:return{byteLength:2,components:4};case en:case wr:case nn:return{byteLength:4,components:1};case po:case mo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function F0(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Z2(i){let t=new WeakMap;function e(o,c){let l=o.array,d=o.usage,g=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,c,l){let d=c.array,g=c.updateRanges;if(i.bindBuffer(l,o),g.length===0)i.bufferSubData(l,0,d);else{g.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<g.length;f++){let p=g[h],S=g[f];S.start<=p.start+p.count+1?p.count=Math.max(p.count,S.start+S.count-p.start):(++h,g[h]=S)}g.length=h+1;for(let f=0,p=g.length;f<p;f++){let S=g[f];i.bufferSubData(l,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var J2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$2=`#ifdef USE_ALPHAHASH
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
#endif`,K2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,el=`#ifdef USE_AOMAP
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
#endif`,nl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,il=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,sl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,al=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ol=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ll=`#ifdef USE_IRIDESCENCE
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
#endif`,cl=`#ifdef USE_BUMPMAP
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
#endif`,hl=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ul=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ml=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_l=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xl=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,vl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yl=`vec3 transformedNormal = objectNormal;
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
#endif`,Sl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ml=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,El="gl_FragColor = linearToOutputTexel( gl_FragColor );",Al=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rl=`#ifdef USE_ENVMAP
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
#endif`,Il=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ll=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ul=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fl=`#ifdef USE_GRADIENTMAP
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
}`,Ol=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vl=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,kl=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Gl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ql=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Yl=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zl=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jl=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$l=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kl=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ql=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ec=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ic=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rc=`#if defined( USE_POINTS_UV )
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
#endif`,ac=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uc=`#ifdef USE_MORPHTARGETS
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
#endif`,dc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pc=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_c=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xc=`#ifdef USE_NORMALMAP
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
#endif`,vc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tc=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ec=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ac=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ic=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Lc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Dc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Nc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Uc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fc=`#ifdef USE_SKINNING
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
#endif`,Oc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bc=`#ifdef USE_SKINNING
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
#endif`,zc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gc=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hc=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wc=`#ifdef USE_TRANSMISSION
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
#endif`,Xc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$c=`uniform sampler2D t2D;
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
}`,Kc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e3=`#include <common>
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
}`,n3=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i3=`#define DISTANCE
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
}`,s3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,r3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o3=`uniform float scale;
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
}`,l3=`uniform vec3 diffuse;
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
}`,c3=`#include <common>
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
}`,h3=`uniform vec3 diffuse;
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
}`,u3=`#define LAMBERT
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
}`,d3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,f3=`#define MATCAP
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
}`,p3=`#define MATCAP
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
}`,m3=`#define NORMAL
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
}`,g3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_3=`#define PHONG
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
}`,x3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,v3=`#define STANDARD
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
}`,y3=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,S3=`#define TOON
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
}`,M3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,b3=`uniform float size;
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
}`,T3=`uniform vec3 diffuse;
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
}`,E3=`#include <common>
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
}`,A3=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,w3=`uniform float rotation;
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
}`,C3=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:J2,alphahash_pars_fragment:$2,alphamap_fragment:K2,alphamap_pars_fragment:Q2,alphatest_fragment:j2,alphatest_pars_fragment:tl,aomap_fragment:el,aomap_pars_fragment:nl,batching_pars_vertex:il,batching_vertex:sl,begin_vertex:rl,beginnormal_vertex:al,bsdfs:ol,iridescence_fragment:ll,bumpmap_pars_fragment:cl,clipping_planes_fragment:hl,clipping_planes_pars_fragment:ul,clipping_planes_pars_vertex:dl,clipping_planes_vertex:fl,color_fragment:pl,color_pars_fragment:ml,color_pars_vertex:gl,color_vertex:_l,common:xl,cube_uv_reflection_fragment:vl,defaultnormal_vertex:yl,displacementmap_pars_vertex:Sl,displacementmap_vertex:Ml,emissivemap_fragment:bl,emissivemap_pars_fragment:Tl,colorspace_fragment:El,colorspace_pars_fragment:Al,envmap_fragment:wl,envmap_common_pars_fragment:Cl,envmap_pars_fragment:Rl,envmap_pars_vertex:Il,envmap_physical_pars_fragment:kl,envmap_vertex:Pl,fog_vertex:Ll,fog_pars_vertex:Dl,fog_fragment:Nl,fog_pars_fragment:Ul,gradientmap_pars_fragment:Fl,lightmap_pars_fragment:Ol,lights_lambert_fragment:Bl,lights_lambert_pars_fragment:zl,lights_pars_begin:Vl,lights_toon_fragment:Gl,lights_toon_pars_fragment:Hl,lights_phong_fragment:Wl,lights_phong_pars_fragment:Xl,lights_physical_fragment:ql,lights_physical_pars_fragment:Yl,lights_fragment_begin:Zl,lights_fragment_maps:Jl,lights_fragment_end:$l,lightprobes_pars_fragment:Kl,logdepthbuf_fragment:Ql,logdepthbuf_pars_fragment:jl,logdepthbuf_pars_vertex:tc,logdepthbuf_vertex:ec,map_fragment:nc,map_pars_fragment:ic,map_particle_fragment:sc,map_particle_pars_fragment:rc,metalnessmap_fragment:ac,metalnessmap_pars_fragment:oc,morphinstance_vertex:lc,morphcolor_vertex:cc,morphnormal_vertex:hc,morphtarget_pars_vertex:uc,morphtarget_vertex:dc,normal_fragment_begin:fc,normal_fragment_maps:pc,normal_pars_fragment:mc,normal_pars_vertex:gc,normal_vertex:_c,normalmap_pars_fragment:xc,clearcoat_normal_fragment_begin:vc,clearcoat_normal_fragment_maps:yc,clearcoat_pars_fragment:Sc,iridescence_pars_fragment:Mc,opaque_fragment:bc,packing:Tc,premultiplied_alpha_fragment:Ec,project_vertex:Ac,dithering_fragment:wc,dithering_pars_fragment:Cc,roughnessmap_fragment:Rc,roughnessmap_pars_fragment:Ic,shadowmap_pars_fragment:Pc,shadowmap_pars_vertex:Lc,shadowmap_vertex:Dc,shadowmask_pars_fragment:Nc,skinbase_vertex:Uc,skinning_pars_vertex:Fc,skinning_vertex:Oc,skinnormal_vertex:Bc,specularmap_fragment:zc,specularmap_pars_fragment:Vc,tonemapping_fragment:kc,tonemapping_pars_fragment:Gc,transmission_fragment:Hc,transmission_pars_fragment:Wc,uv_pars_fragment:Xc,uv_pars_vertex:qc,uv_vertex:Yc,worldpos_vertex:Zc,background_vert:Jc,background_frag:$c,backgroundCube_vert:Kc,backgroundCube_frag:Qc,cube_vert:jc,cube_frag:t3,depth_vert:e3,depth_frag:n3,distance_vert:i3,distance_frag:s3,equirect_vert:r3,equirect_frag:a3,linedashed_vert:o3,linedashed_frag:l3,meshbasic_vert:c3,meshbasic_frag:h3,meshlambert_vert:u3,meshlambert_frag:d3,meshmatcap_vert:f3,meshmatcap_frag:p3,meshnormal_vert:m3,meshnormal_frag:g3,meshphong_vert:_3,meshphong_frag:x3,meshphysical_vert:v3,meshphysical_frag:y3,meshtoon_vert:S3,meshtoon_frag:M3,points_vert:b3,points_frag:T3,shadow_vert:E3,shadow_frag:A3,sprite_vert:w3,sprite_frag:C3},ht={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},mn={basic:{uniforms:we([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:we([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:we([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:we([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:we([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:we([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:we([ht.points,ht.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:we([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:we([ht.common,ht.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:we([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:we([ht.sprite,ht.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:we([ht.common,ht.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:we([ht.lights,ht.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};mn.physical={uniforms:we([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var ua={r:0,b:0,g:0},R3=new le,O0=new It;O0.set(-1,0,0,0,1,0,0,0,1);function I3(i,t,e,n,s,r){let a=new Ft(0),o=s===!0?0:1,c,l,d=null,g=0,h=null;function f(T){let w=T.isScene===!0?T.background:null;if(w&&w.isTexture){let y=T.backgroundBlurriness>0;w=t.get(w,y)}return w}function p(T){let w=!1,y=f(T);y===null?m(a,o):y&&y.isColor&&(m(y,1),w=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(T,w){let y=f(w);y&&(y.isCubeTexture||y.mapping===ds)?(l===void 0&&(l=new We(new wi(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:ii(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(R3.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(O0),l.material.toneMapped=Vt.getTransfer(y.colorSpace)!==Jt,(d!==y||g!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,g=y.version,h=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new We(new rs(2,2),new ze({name:"BackgroundMaterial",uniforms:ii(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(y.colorSpace)!==Jt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||g!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,g=y.version,h=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,w){T.getRGB(ua,bo(i)),e.buffers.color.setClear(ua.r,ua.g,ua.b,w,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:p,addToRenderList:S,dispose:u}}function P3(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(U,z,N,D,k){let J=!1,q=g(U,D,N,z);r!==q&&(r=q,l(r.object)),J=f(U,D,N,k),J&&p(U,D,N,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(U,z,N,D),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function d(U){return i.deleteVertexArray(U)}function g(U,z,N,D){let k=D.wireframe===!0,J=n[z.id];J===void 0&&(J={},n[z.id]=J);let q=U.isInstancedMesh===!0?U.id:0,nt=J[q];nt===void 0&&(nt={},J[q]=nt);let W=nt[N.id];W===void 0&&(W={},nt[N.id]=W);let Q=W[k];return Q===void 0&&(Q=h(c()),W[k]=Q),Q}function h(U){let z=[],N=[],D=[];for(let k=0;k<e;k++)z[k]=0,N[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:N,attributeDivisors:D,object:U,attributes:{},index:null}}function f(U,z,N,D){let k=r.attributes,J=z.attributes,q=0,nt=N.getAttributes();for(let W in nt)if(nt[W].location>=0){let tt=k[W],At=J[W];if(At===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(At=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(At=U.instanceColor)),tt===void 0||tt.attribute!==At||At&&tt.data!==At.data)return!0;q++}return r.attributesNum!==q||r.index!==D}function p(U,z,N,D){let k={},J=z.attributes,q=0,nt=N.getAttributes();for(let W in nt)if(nt[W].location>=0){let tt=J[W];tt===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor));let At={};At.attribute=tt,tt&&tt.data&&(At.data=tt.data),k[W]=At,q++}r.attributes=k,r.attributesNum=q,r.index=D}function S(){let U=r.newAttributes;for(let z=0,N=U.length;z<N;z++)U[z]=0}function m(U){u(U,0)}function u(U,z){let N=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;N[U]=1,D[U]===0&&(i.enableVertexAttribArray(U),D[U]=1),k[U]!==z&&(i.vertexAttribDivisor(U,z),k[U]=z)}function T(){let U=r.newAttributes,z=r.enabledAttributes;for(let N=0,D=z.length;N<D;N++)z[N]!==U[N]&&(i.disableVertexAttribArray(N),z[N]=0)}function w(U,z,N,D,k,J,q){q===!0?i.vertexAttribIPointer(U,z,N,k,J):i.vertexAttribPointer(U,z,N,D,k,J)}function y(U,z,N,D){S();let k=D.attributes,J=N.getAttributes(),q=z.defaultAttributeValues;for(let nt in J){let W=J[nt];if(W.location>=0){let Q=k[nt];if(Q===void 0&&(nt==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),nt==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){let tt=Q.normalized,At=Q.itemSize,Tt=t.get(Q);if(Tt===void 0)continue;let jt=Tt.buffer,Gt=Tt.type,qt=Tt.bytesPerElement,Y=Gt===i.INT||Gt===i.UNSIGNED_INT||Q.gpuType===wr;if(Q.isInterleavedBufferAttribute){let j=Q.data,_t=j.stride,Pt=Q.offset;if(j.isInstancedInterleavedBuffer){for(let mt=0;mt<W.locationSize;mt++)u(W.location+mt,j.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let mt=0;mt<W.locationSize;mt++)m(W.location+mt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let mt=0;mt<W.locationSize;mt++)w(W.location+mt,At/W.locationSize,Gt,tt,_t*qt,(Pt+At/W.locationSize*mt)*qt,Y)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<W.locationSize;j++)u(W.location+j,Q.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<W.locationSize;j++)m(W.location+j);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let j=0;j<W.locationSize;j++)w(W.location+j,At/W.locationSize,Gt,tt,At*qt,At/W.locationSize*j*qt,Y)}}else if(q!==void 0){let tt=q[nt];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(W.location,tt);break;case 3:i.vertexAttrib3fv(W.location,tt);break;case 4:i.vertexAttrib4fv(W.location,tt);break;default:i.vertexAttrib1fv(W.location,tt)}}}}T()}function M(){A();for(let U in n){let z=n[U];for(let N in z){let D=z[N];for(let k in D){let J=D[k];for(let q in J)d(J[q].object),delete J[q];delete D[k]}}delete n[U]}}function b(U){if(n[U.id]===void 0)return;let z=n[U.id];for(let N in z){let D=z[N];for(let k in D){let J=D[k];for(let q in J)d(J[q].object),delete J[q];delete D[k]}}delete n[U.id]}function C(U){for(let z in n){let N=n[z];for(let D in N){let k=N[D];if(k[U.id]===void 0)continue;let J=k[U.id];for(let q in J)d(J[q].object),delete J[q];delete k[U.id]}}}function x(U){for(let z in n){let N=n[z],D=U.isInstancedMesh===!0?U.id:0,k=N[D];if(k!==void 0){for(let J in k){let q=k[J];for(let nt in q)d(q[nt].object),delete q[nt];delete k[J]}delete N[D],Object.keys(N).length===0&&delete n[z]}}}function A(){L(),a=!0,r!==s&&(r=s,l(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:L,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:T}}function L3(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),e.update(l,n,d))}function o(c,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let f=0;f<d;f++)h+=l[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function D3(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Xe&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ke&&C!==nn&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",d=c(l);d!==l&&(Ct("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let g=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:g,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:y,maxSamples:M,samples:b}}function N3(i){let t=this,e=null,n=0,s=!1,r=!1,a=new $e,o=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,h){let f=g.length!==0||h||n!==0||s;return s=h,n=g.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,h){e=d(g,h,0)},this.setState=function(g,h,f){let p=g.clippingPlanes,S=g.clipIntersection,m=g.clipShadows,u=i.get(g);if(!s||p===null||p.length===0||r&&!m)r?d(null):l();else{let T=r?0:n,w=T*4,y=u.clippingState||null;c.value=y,y=d(p,h,w,f);for(let M=0;M!==w;++M)y[M]=e[M];u.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(g,h,f,p){let S=g!==null?g.length:0,m=null;if(S!==0){if(m=c.value,p!==!0||m===null){let u=f+S*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<u)&&(m=new Float32Array(u));for(let w=0,y=f;w!==S;++w,y+=4)a.copy(g[w]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}var Ni=4,U3=6,F3=20,O3=256,ys=new cs,m0=new Ft,Lo=null,Do=0,No=0,Uo=!1,B3=new G,si=new G,fa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=B3}=r;Lo=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lo,Do,No),this._renderer.xr.enabled=Uo,t.scissorTest=!1,Di(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gn||t.mapping===ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lo=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:sn,format:Xe,colorSpace:Wi,depthBuffer:!1},s=g0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g0(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=z3(r)),this._blurMaterial=k3(r,t,e),this._ggxMaterial=V3(r,t,e)}return s}_compileMaterial(t){let e=new We(new Pe,t);this._renderer.compile(e,ys)}_sceneToCubeUV(t,e,n,s,r){let c=new Ae(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],g=this._renderer,h=g.autoClear,f=g.toneMapping;g.getClearColor(m0),g.toneMapping=tn,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new We(new wi,new es({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,u=!1,T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,u=!0):(m.color.copy(m0),u=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[w],r.y,r.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[w]));let M=this._cubeSize;Di(s,y*M,w>2?M:0,M,M),g.setRenderTarget(s),u&&g.render(S,c),g.render(t,c)}g.toneMapping=f,g.autoClear=h,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gn||t.mapping===ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=x0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_0());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Di(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ys)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),g=Math.sqrt(l*l-d*d),h=l*1.25,f=g*h,{_lodMax:p}=this,S=this._sizeLods[n],m=3*S*(n>p-Ni?n-p+Ni:0),u=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=p-e,Di(r,m,u,3*S,2*S),s.setRenderTarget(r),s.render(o,ys),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,Di(t,m,u,3*S,2*S),s.setRenderTarget(t),s.render(o,ys)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],g=3*d*(s>this._lodMax-Ni?s-this._lodMax+Ni:0),h=4*(this._cubeSize-d);Di(e,g,h,3*d,2*d),a.setRenderTarget(e),a.render(c,ys)}};function z3(i){let t=[],e=[],n=i,s=i-Ni+1+U3;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,d=[c,c,l,c,l,l,c,c,l,l,c,l],g=6,h=6,f=3,p=new Float32Array(f*h*g),S=new Float32Array(f*h*g);for(let u=0;u<g;u++){let T=u%3*2/3-1,w=u>2?0:-1,y=[T,w,0,T+2/3,w,0,T+2/3,w+1,0,T,w,0,T+2/3,w+1,0,T,w+1,0];p.set(y,f*h*u);for(let M=0;M<h;M++){let b=d[M*2]*2-1,C=d[M*2+1]*2-1;u===0?si.set(1,C,b):u===1?si.set(-b,1,-C):u===2?si.set(-b,C,1):u===3?si.set(-1,C,-b):u===4?si.set(-b,-1,C):si.set(b,C,-1),si.toArray(S,(u*h+M)*f)}}let m=new Pe;m.setAttribute("position",new Ie(p,f)),m.setAttribute("outputDirection",new Ie(S,f)),e.push(new We(m,null)),n>Ni&&n--}return{lodMeshes:e,sizeLods:t}}function g0(i,t,e){let n=new Ue(i,t,e);return n.texture.mapping=ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Di(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function V3(i,t,e){return new ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ga(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function k3(i,t,e){return new ze({name:"SphericalGaussianBlur",defines:{SAMPLES:F3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ga(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function _0(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function x0(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function ga(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pa=class extends Ue{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new is(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wi(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:fn});r.uniforms.tEquirect.value=e;let a=new We(s,r),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=Se),new Sr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function G3(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Tr||f===Er)if(t.has(h)){let p=t.get(h).texture;return o(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let S=new pa(p.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,p=f===Tr||f===Er,S=f===Gn||f===ni;if(p||S){let m=e.get(h),u=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new fa(i)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let T=h.image;return p&&T&&T.height>0||S&&T&&c(T)?(n===null&&(n=new fa(i)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,f){return f===Tr?h.mapping=Gn:f===Er&&(h.mapping=ni),h}function c(h){let f=0,p=6;for(let S=0;S<p;S++)h[S]!==void 0&&f++;return f===p}function l(h){let f=h.target;f.removeEventListener("dispose",l);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(h){let f=h.target;f.removeEventListener("dispose",d);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function H3(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Kn("WebGLRenderer: "+n+" extension not supported."),s}}}function W3(i,t,e,n){let s={},r=new WeakMap;function a(g){let h=g.target;h.index!==null&&t.remove(h.index);for(let p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(g,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(g){let h=g.attributes;for(let f in h)t.update(h[f],i.ARRAY_BUFFER)}function l(g){let h=[],f=g.index,p=g.attributes.position,S=0;if(p===void 0)return;if(f!==null){let T=f.array;S=f.version;for(let w=0,y=T.length;w<y;w+=3){let M=T[w+0],b=T[w+1],C=T[w+2];h.push(M,b,b,C,C,M)}}else{let T=p.array;S=p.version;for(let w=0,y=T.length/3-1;w<y;w+=3){let M=w+0,b=w+1,C=w+2;h.push(M,b,b,C,C,M)}}let m=new(p.count>=65535?ji:Ki)(h,1);m.version=S;let u=r.get(g);u&&t.remove(u),r.set(g,m)}function d(g){let h=r.get(g);if(h){let f=g.index;f!==null&&h.version<f.version&&l(g)}else l(g);return r.get(g)}return{get:o,update:c,getWireframeAttribute:d}}function X3(i,t,e){let n;function s(g){n=g}let r,a;function o(g){r=g.type,a=g.bytesPerElement}function c(g,h){i.drawElements(n,h,r,g*a),e.update(h,n,1)}function l(g,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,g*a,f),e.update(h,n,f))}function d(g,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,g,0,f);let S=0;for(let m=0;m<f;m++)S+=h[m];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function q3(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Rt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Y3(i,t,e){let n=new WeakMap,s=new oe;function r(a,o,c){let l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=d!==void 0?d.length:0,h=n.get(o);if(h===void 0||h.count!==g){let A=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),S===!0&&(w=3);let y=o.attributes.position.count*w,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*M*4*g),C=new Zi(b,y,M,g);C.type=nn,C.needsUpdate=!0;let x=w*4;for(let L=0;L<g;L++){let U=m[L],z=u[L],N=T[L],D=y*M*4*L;for(let k=0;k<U.count;k++){let J=k*x;f===!0&&(s.fromBufferAttribute(U,k),b[D+J+0]=s.x,b[D+J+1]=s.y,b[D+J+2]=s.z,b[D+J+3]=0),p===!0&&(s.fromBufferAttribute(z,k),b[D+J+4]=s.x,b[D+J+5]=s.y,b[D+J+6]=s.z,b[D+J+7]=0),S===!0&&(s.fromBufferAttribute(N,k),b[D+J+8]=s.x,b[D+J+9]=s.y,b[D+J+10]=s.z,b[D+J+11]=N.itemSize===4?s.w:1)}}h={count:g,texture:C,size:new Xt(y,M)},n.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let S=0;S<l.length;S++)f+=l[S];let p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Z3(i,t,e,n,s){let r=new WeakMap;function a(l){let d=s.render.frame,g=l.geometry,h=t.get(l,g);if(r.get(h)!==d&&(t.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function o(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}var J3={[so]:"LINEAR_TONE_MAPPING",[ro]:"REINHARD_TONE_MAPPING",[ao]:"CINEON_TONE_MAPPING",[us]:"ACES_FILMIC_TONE_MAPPING",[lo]:"AGX_TONE_MAPPING",[co]:"NEUTRAL_TONE_MAPPING",[oo]:"CUSTOM_TONE_MAPPING"};function $3(i,t,e,n,s,r){let a=new Ue(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Pe;l.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ye([0,2,0,0,2,0],2));let d=new cr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new We(l,d),h=new cs(-1,1,1,-1,0,1),f=null,p=null,S=!1,m,u=null,T=[],w=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),c!==null&&c.setSize(y,M);for(let b=0;b<T.length;b++){let C=T[b];C.setSize&&C.setSize(y,M)}},this.setEffects=function(y){T=y,w=T.length>0&&T[0].isRenderPass===!0;let M=a.width,b=a.height;T.length>0&&o===null&&(o=new Ue(M,b,{type:sn,depthBuffer:!1,stencilBuffer:!1}),c=new Ue(M,b,{type:sn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<T.length;C++){let x=T[C];x.setSize&&x.setSize(M,b)}},this.begin=function(y,M){if(S||y.toneMapping===tn&&T.length===0)return!1;if(u=M,M!==null){let b=M.width,C=M.height;(a.width!==b||a.height!==C)&&this.setSize(b,C)}return w===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=tn,!0},this.hasRenderPass=function(){return w},this.end=function(y,M){y.toneMapping=m,S=!0;let b=a,C=o;for(let x=0;x<T.length;x++){let A=T[x];A.enabled!==!1&&(A.render(y,C,b,M),A.needsSwap!==!1&&(b=C,C=C===o?c:o))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,d.defines={},Vt.getTransfer(f)===Jt&&(d.defines.SRGB_TRANSFER="");let x=J3[p];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(u),y.render(g,h),u=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}var B0=new Ne,Bo=new On(1,1),z0=new Zi,V0=new ar,k0=new is,v0=[],y0=[],S0=new Float32Array(16),M0=new Float32Array(9),b0=new Float32Array(4);function Fi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=v0[s];if(r===void 0&&(r=new Float32Array(s),v0[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _a(i,t){let e=y0[t];e===void 0&&(e=new Int32Array(t),y0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function K3(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Q3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function j3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function th(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function eh(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;b0.set(n),i.uniformMatrix2fv(this.addr,!1,b0),me(e,n)}}function nh(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;M0.set(n),i.uniformMatrix3fv(this.addr,!1,M0),me(e,n)}}function ih(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;S0.set(n),i.uniformMatrix4fv(this.addr,!1,S0),me(e,n)}}function sh(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function rh(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function ah(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function oh(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function lh(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ch(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function hh(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function uh(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function dh(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bo.compareFunction=e.isReversedDepthBuffer()?ha:ca,r=Bo):r=B0,e.setTexture2D(t||r,s)}function fh(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||V0,s)}function ph(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||k0,s)}function mh(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||z0,s)}function gh(i){switch(i){case 5126:return K3;case 35664:return Q3;case 35665:return j3;case 35666:return th;case 35674:return eh;case 35675:return nh;case 35676:return ih;case 5124:case 35670:return sh;case 35667:case 35671:return rh;case 35668:case 35672:return ah;case 35669:case 35673:return oh;case 5125:return lh;case 36294:return ch;case 36295:return hh;case 36296:return uh;case 35678:case 36198:case 36298:case 36306:case 35682:return dh;case 35679:case 36299:case 36307:return fh;case 35680:case 36300:case 36308:case 36293:return ph;case 36289:case 36303:case 36311:case 36292:return mh}}function _h(i,t){i.uniform1fv(this.addr,t)}function xh(i,t){let e=Fi(t,this.size,2);i.uniform2fv(this.addr,e)}function vh(i,t){let e=Fi(t,this.size,3);i.uniform3fv(this.addr,e)}function yh(i,t){let e=Fi(t,this.size,4);i.uniform4fv(this.addr,e)}function Sh(i,t){let e=Fi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mh(i,t){let e=Fi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function bh(i,t){let e=Fi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Th(i,t){i.uniform1iv(this.addr,t)}function Eh(i,t){i.uniform2iv(this.addr,t)}function Ah(i,t){i.uniform3iv(this.addr,t)}function wh(i,t){i.uniform4iv(this.addr,t)}function Ch(i,t){i.uniform1uiv(this.addr,t)}function Rh(i,t){i.uniform2uiv(this.addr,t)}function Ih(i,t){i.uniform3uiv(this.addr,t)}function Ph(i,t){i.uniform4uiv(this.addr,t)}function Lh(i,t,e){let n=this.cache,s=t.length,r=_a(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Bo:a=B0;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Dh(i,t,e){let n=this.cache,s=t.length,r=_a(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||V0,r[a])}function Nh(i,t,e){let n=this.cache,s=t.length,r=_a(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||k0,r[a])}function Uh(i,t,e){let n=this.cache,s=t.length,r=_a(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||z0,r[a])}function Fh(i){switch(i){case 5126:return _h;case 35664:return xh;case 35665:return vh;case 35666:return yh;case 35674:return Sh;case 35675:return Mh;case 35676:return bh;case 5124:case 35670:return Th;case 35667:case 35671:return Eh;case 35668:case 35672:return Ah;case 35669:case 35673:return wh;case 5125:return Ch;case 36294:return Rh;case 36295:return Ih;case 36296:return Ph;case 35678:case 36198:case 36298:case 36306:case 35682:return Lh;case 35679:case 36299:case 36307:return Dh;case 35680:case 36300:case 36308:case 36293:return Nh;case 36289:case 36303:case 36311:case 36292:return Uh}}var zo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gh(e.type)}},Vo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fh(e.type)}},ko=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Fo=/(\w+)(\])?(\[|\.)?/g;function T0(i,t){i.seq.push(t),i.map[t.id]=t}function Oh(i,t,e){let n=i.name,s=n.length;for(Fo.lastIndex=0;;){let r=Fo.exec(n),a=Fo.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){T0(e,l===void 0?new zo(o,i,t):new Vo(o,i,t));break}else{let g=e.map[o];g===void 0&&(g=new ko(o),T0(e,g)),e=g}}}var Ui=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Oh(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function E0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Bh=37297,zh=0;function Vh(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var A0=new It;function kh(i){Vt._getMatrix(A0,Vt.workingColorSpace,i);let t=`mat3( ${A0.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(i)){case Xi:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function w0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Vh(i.getShaderSource(t),o)}else return r}function Gh(i,t){let e=kh(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Hh={[so]:"Linear",[ro]:"Reinhard",[ao]:"Cineon",[us]:"ACESFilmic",[lo]:"AgX",[co]:"Neutral",[oo]:"Custom"};function Wh(i,t){let e=Hh[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var da=new G;function Xh(){Vt.getLuminanceCoefficients(da);let i=da.x.toFixed(4),t=da.y.toFixed(4),e=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qh(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function Yh(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zh(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ms(i){return i!==""}function C0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function R0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(i){return i.replace(Jh,Kh)}var $h=new Map;function Kh(i,t){let e=Nt[t];if(e===void 0){let n=$h.get(t);if(n!==void 0)e=Nt[n],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Go(e)}var Qh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I0(i){return i.replace(Qh,jh)}function jh(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function P0(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var t5={[hs]:"SHADOWMAP_TYPE_PCF",[Ci]:"SHADOWMAP_TYPE_VSM"};function e5(i){return t5[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var n5={[Gn]:"ENVMAP_TYPE_CUBE",[ni]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE_UV"};function i5(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":n5[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var s5={[ni]:"ENVMAP_MODE_REFRACTION"};function r5(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":s5[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var a5={[io]:"ENVMAP_BLENDING_MULTIPLY",[Z1]:"ENVMAP_BLENDING_MIX",[J1]:"ENVMAP_BLENDING_ADD"};function o5(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":a5[i.combine]||"ENVMAP_BLENDING_NONE"}function l5(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function c5(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=e5(e),l=i5(e),d=r5(e),g=o5(e),h=l5(e),f=qh(e),p=Yh(r),S=s.createProgram(),m,u,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ms).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ms).join(`
`),u.length>0&&(u+=`
`)):(m=[P0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),u=[P0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==tn?"#define TONE_MAPPING":"",e.toneMapping!==tn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==tn?Wh("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Gh("linearToOutputTexel",e.outputColorSpace),Xh(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),a=Go(a),a=C0(a,e),a=R0(a,e),o=Go(o),o=C0(o,e),o=R0(o,e),a=I0(a),o=I0(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let w=T+m+a,y=T+u+o,M=E0(s,s.VERTEX_SHADER,w),b=E0(s,s.FRAGMENT_SHADER,y);s.attachShader(S,M),s.attachShader(S,b),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(U){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(S)||"",N=s.getShaderInfoLog(M)||"",D=s.getShaderInfoLog(b)||"",k=z.trim(),J=N.trim(),q=D.trim(),nt=!0,W=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,M,b);else{let Q=w0(s,M,"vertex"),tt=w0(s,b,"fragment");Rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+Q+`
`+tt)}else k!==""?Ct("WebGLProgram: Program Info Log:",k):(J===""||q==="")&&(W=!1);W&&(U.diagnostics={runnable:nt,programLog:k,vertexShader:{log:J,prefix:m},fragmentShader:{log:q,prefix:u}})}s.deleteShader(M),s.deleteShader(b),x=new Ui(s,S),A=Zh(s,S)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(S,Bh)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zh++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=M,this.fragmentShader=b,this}var h5=0,Ho=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wo(t),e.set(t,n)),n}},Wo=class{constructor(t){this.id=h5++,this.code=t,this.usedTimes=0}};function u5(i){return i===Xn||i===xs||i===vs}function d5(i,t,e,n,s,r){let a=new Ji,o=new Ho,c=new Set,l=[],d=new Map,g=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function S(x,A,L,U,z,N){let D=U.fog,k=z.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||J,q),W=nt&&nt.mapping===ds?nt.image.height:null,Q=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ct("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let tt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,At=tt!==void 0?tt.length:0,Tt=0;k.morphAttributes.position!==void 0&&(Tt=1),k.morphAttributes.normal!==void 0&&(Tt=2),k.morphAttributes.color!==void 0&&(Tt=3);let jt,Gt,qt,Y;if(Q){let ee=mn[Q];jt=ee.vertexShader,Gt=ee.fragmentShader}else{jt=x.vertexShader,Gt=x.fragmentShader;let ee=o.getVertexShaderStage(x),Yt=o.getFragmentShaderStage(x);o.update(x,ee,Yt),qt=ee.id,Y=Yt.id}let j=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Pt=z.isInstancedMesh===!0,mt=z.isBatchedMesh===!0,Ut=!!x.map,fe=!!x.matcap,Ot=!!nt,Wt=!!x.aoMap,te=!!x.lightMap,zt=!!x.bumpMap&&x.wireframe===!1,re=!!x.normalMap,ge=!!x.displacementMap,De=!!x.emissiveMap,ae=!!x.metalnessMap,he=!!x.roughnessMap,P=x.anisotropy>0,Me=x.clearcoat>0,$t=x.dispersion>0,E=x.retroreflectivity>0,_=x.iridescence>0,F=x.sheen>0,V=x.transmission>0,X=P&&!!x.anisotropyMap,it=Me&&!!x.clearcoatMap,st=Me&&!!x.clearcoatNormalMap,Z=Me&&!!x.clearcoatRoughnessMap,K=_&&!!x.iridescenceMap,rt=_&&!!x.iridescenceThicknessMap,Mt=F&&!!x.sheenColorMap,ct=F&&!!x.sheenRoughnessMap,at=!!x.specularMap,bt=!!x.specularColorMap,wt=!!x.specularIntensityMap,Lt=V&&!!x.transmissionMap,I=V&&!!x.thicknessMap,ot=!!x.gradientMap,$=!!x.alphaMap,lt=x.alphaTest>0,ft=!!x.alphaHash,et=!!x.extensions,Et=tn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Et=i.toneMapping);let yt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:jt,fragmentShader:Gt,defines:x.defines,customVertexShaderID:qt,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:mt,batchingColor:mt&&z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&z.instanceColor!==null,instancingMorph:Pt&&z.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Vt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ut,matcap:fe,envMap:Ot,envMapMode:Ot&&nt.mapping,envMapCubeUVHeight:W,aoMap:Wt,lightMap:te,bumpMap:zt,normalMap:re,displacementMap:ge,emissiveMap:De,normalMapObjectSpace:re&&x.normalMapType===Q1,normalMapTangentSpace:re&&x.normalMapType===vo,packedNormalMap:re&&x.normalMapType===vo&&u5(x.normalMap.format),metalnessMap:ae,roughnessMap:he,anisotropy:P,anisotropyMap:X,clearcoat:Me,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:Z,dispersion:$t,retroreflection:E,iridescence:_,iridescenceMap:K,iridescenceThicknessMap:rt,sheen:F,sheenColorMap:Mt,sheenRoughnessMap:ct,specularMap:at,specularColorMap:bt,specularIntensityMap:wt,transmission:V,transmissionMap:Lt,thicknessMap:I,gradientMap:ot,opaque:x.transparent===!1&&x.blending===Ri&&x.alphaToCoverage===!1,alphaMap:$,alphaTest:lt,alphaHash:ft,combine:x.combine,mapUv:Ut&&p(x.map.channel),aoMapUv:Wt&&p(x.aoMap.channel),lightMapUv:te&&p(x.lightMap.channel),bumpMapUv:zt&&p(x.bumpMap.channel),normalMapUv:re&&p(x.normalMap.channel),displacementMapUv:ge&&p(x.displacementMap.channel),emissiveMapUv:De&&p(x.emissiveMap.channel),metalnessMapUv:ae&&p(x.metalnessMap.channel),roughnessMapUv:he&&p(x.roughnessMap.channel),anisotropyMapUv:X&&p(x.anisotropyMap.channel),clearcoatMapUv:it&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:ct&&p(x.sheenRoughnessMap.channel),specularMapUv:at&&p(x.specularMap.channel),specularColorMapUv:bt&&p(x.specularColorMap.channel),specularIntensityMapUv:wt&&p(x.specularIntensityMap.channel),transmissionMapUv:Lt&&p(x.transmissionMap.channel),thicknessMapUv:I&&p(x.thicknessMap.channel),alphaMapUv:$&&p(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(re||P),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(Ut||$),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&re===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:_t,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Tt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:Ut&&x.map.isVideoTexture===!0&&Vt.getTransfer(x.map.colorSpace)===Jt,decodeVideoTextureEmissive:De&&x.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(x.emissiveMap.colorSpace)===Jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===dn,flipSided:x.side===Le,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:et&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&x.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function m(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)A.push(L),A.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(u(A,x),T(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function u(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function T(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){let A=f[x.type],L;if(A){let U=mn[A];L=d0.clone(U.uniforms)}else L=x.uniforms;return L}function y(x,A){let L=d.get(A);return L!==void 0?++L.usedTimes:(L=new c5(i,A,x,s),l.push(L),d.set(A,L)),L}function M(x){if(--x.usedTimes===0){let A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:M,releaseShaderCache:b,programs:l,dispose:C}}function f5(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function p5(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function L0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function D0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,S,m,u){let T=i[t];return T===void 0?(T={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:u},i[t]=T):(T.id=h.id,T.object=h,T.geometry=f,T.material=p,T.materialVariant=a(h),T.groupOrder=S,T.renderOrder=h.renderOrder,T.z=m,T.group=u),t++,T}function c(h,f,p,S,m,u,T){T.reversedDepth===!0&&(m=-m);let w=o(h,f,p,S,m,u);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function l(h,f,p,S,m,u){let T=o(h,f,p,S,m,u);p.transmission>0?n.unshift(T):p.transparent===!0?s.unshift(T):e.unshift(T)}function d(h,f){e.length>1&&e.sort(h||p5),n.length>1&&n.sort(f||L0),s.length>1&&s.sort(f||L0)}function g(){for(let h=t,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:g,sort:d}}function m5(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new D0,i.set(n,[a])):s>=r.length?(a=new D0,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function g5(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Ft};break;case"SpotLight":e={position:new G,direction:new G,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function _5(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var x5=0;function v5(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function y5(i){let t=new g5,e=_5(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);let s=new G,r=new le,a=new le;function o(l){let d=0,g=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,p=0,S=0,m=0,u=0,T=0,w=0,y=0,M=0,b=0,C=0,x=0,A=0,L=0;l.sort(v5);for(let z=0,N=l.length;z<N;z++){let D=l[z],k=D.color,J=D.intensity,q=D.distance,nt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Xn?nt=D.shadow.map.texture:nt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=k.r*J,g+=k.g*J,h+=k.b*J;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],J);L++}else if(D.isSunLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,tt=e.get(D);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=tt,n.sunShadowMap[p]=nt;let At=Q.getViewportCount();for(let Tt=0;Tt<At;Tt++)n.sunShadowMatrix[S+Tt]=Q.getMatrix(Tt),n.sunShadowCascade[S+Tt]=Q._cascadeData[Tt];S+=At,p++}n.sun[f]=W,f++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Q=D.shadow,tt=e.get(D);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=D.shadow.matrix,M++}n.directional[m]=W,m++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(k).multiplyScalar(J),W.distance=q,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[T]=W;let Q=D.shadow;if(D.map&&(n.spotLightMap[x]=D.map,x++,Q.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[T]=Q.matrix,D.castShadow){let tt=e.get(D);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.spotShadow[T]=tt,n.spotShadowMap[T]=nt,C++}T++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(k).multiplyScalar(J),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=W,w++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let Q=D.shadow,tt=e.get(D);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,n.pointShadow[u]=tt,n.pointShadowMap[u]=nt,n.pointShadowMatrix[u]=D.shadow.matrix,b++}n.point[u]=W,u++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(J),W.groundColor.copy(D.groundColor).multiplyScalar(J),n.hemi[y]=W,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=g,n.ambient[2]=h;let U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==u||U.spotLength!==T||U.rectAreaLength!==w||U.hemiLength!==y||U.numSunShadows!==p||U.numDirectionalShadows!==M||U.numPointShadows!==b||U.numSpotShadows!==C||U.numSpotMaps!==x||U.numLightProbes!==L)&&(n.sun.length=f,n.directional.length=m,n.spot.length=T,n.rectArea.length=w,n.point.length=u,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,U.sunLength=f,U.directionalLength=m,U.pointLength=u,U.spotLength=T,U.rectAreaLength=w,U.hemiLength=y,U.numSunShadows=p,U.numDirectionalShadows=M,U.numPointShadows=b,U.numSpotShadows=C,U.numSpotMaps=x,U.numLightProbes=L,n.version=x5++)}function c(l,d){let g=0,h=0,f=0,p=0,S=0,m=0,u=d.matrixWorldInverse;for(let T=0,w=l.length;T<w;T++){let y=l[T];if(y.isSunLight){let M=n.sun[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(u),g++}else if(y.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(u),h++}else if(y.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(u),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(u),p++}else if(y.isRectAreaLight){let M=n.rectArea[S];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(u),a.identity(),r.copy(y.matrixWorld),r.premultiply(u),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(u),f++}else if(y.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(u),m++}}}return{setup:o,setupView:c,state:n}}function N0(i){let t=new y5(i),e=[],n=[],s=[];function r(h){g.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function d(h){t.setupView(e,h)}let g={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function S5(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new N0(i),t.set(s,[o])):r>=a.length?(o=new N0(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var M5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,T5=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],E5=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],U0=new le,Ss=new G,Oo=new G;function A5(i,t,e){let n=new ns,s=new Xt,r=new Xt,a=new oe,o=new hr,c=new ur,l={},d=e.maxTextureSize,g={[kn]:Le,[Le]:kn,[dn]:dn},h=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:M5,fragmentShader:b5}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new Pe;p.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new We(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hs;let u=this.type;this.render=function(b,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===R1&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hs);let A=i.getRenderTarget(),L=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(fn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let N=u!==this.type;N&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=b.length;D<k;D++){let J=b[D],q=J.shadow;if(q===void 0){Ct("WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let nt=q.getFrameExtents();s.multiply(nt),r.copy(q.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/nt.x),s.x=r.x*nt.x,q.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/nt.y),s.y=r.y*nt.y,q.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=W,q.map===null||N===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ci){if(J.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Ue(s.x,s.y,{format:Xn,type:sn,minFilter:Se,magFilter:Se,generateMipmaps:!1}),q.map.texture.name=J.name+".shadowMap",q.map.depthTexture=new On(s.x,s.y,nn),q.map.depthTexture.name=J.name+".shadowMapDepth",q.map.depthTexture.format=cn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=xe,q.map.depthTexture.magFilter=xe}else J.isPointLight?(q.map=new pa(s.x),q.map.depthTexture=new lr(s.x,en)):(q.map=new Ue(s.x,s.y),q.map.depthTexture=new On(s.x,s.y,en)),q.map.depthTexture.name=J.name+".shadowMap",q.map.depthTexture.format=cn,this.type===hs?(q.map.depthTexture.compareFunction=W?ha:ca,q.map.depthTexture.minFilter=Se,q.map.depthTexture.magFilter=Se):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=xe,q.map.depthTexture.magFilter=xe);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let Q=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();J.isPointLight!==!0&&q.updateMatrices(J,x);for(let tt=0;tt<Q;tt++){let At=q.getCamera(tt);if(J.isPointLight){let Tt=q.camera,jt=q.matrix,Gt=J.distance||Tt.far;Gt!==Tt.far&&(Tt.far=Gt,Tt.updateProjectionMatrix()),Ss.setFromMatrixPosition(J.matrixWorld),Tt.position.copy(Ss),Oo.copy(Tt.position),Oo.add(T5[tt]),Tt.up.copy(E5[tt]),Tt.lookAt(Oo),Tt.updateMatrixWorld(),jt.makeTranslation(-Ss.x,-Ss.y,-Ss.z),U0.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(U0,Tt.coordinateSystem,Tt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(q.map),i.clear());let Tt=q.getViewport(tt);a.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),z.viewport(a)}n=q.getFrustum(tt),y(C,x,At,J,this.type)}q.isPointLightShadow!==!0&&this.type===Ci&&T(q,x),q.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(A,L,U)};function T(b,C){let x=t.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ue(s.x,s.y,{format:Xn,type:sn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,S,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,x,f,S,null)}function w(b,C,x,A){let L=null,U=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)L=U;else if(L=x.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let z=L.uuid,N=C.uuid,D=l[z];D===void 0&&(D={},l[z]=D);let k=D[N];k===void 0&&(k=L.clone(),D[N]=k,C.addEventListener("dispose",M)),L=k}if(L.visible=C.visible,L.wireframe=C.wireframe,A===Ci?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:g[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let z=i.properties.get(L);z.light=x}return L}function y(b,C,x,A,L){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===Ci)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let N=t.update(b),D=b.material;if(Array.isArray(D)){let k=N.groups;for(let J=0,q=k.length;J<q;J++){let nt=k[J],W=D[nt.materialIndex];if(W&&W.visible){let Q=w(b,W,A,L);b.onBeforeShadow(i,b,C,x,N,Q,nt),i.renderBufferDirect(x,null,N,Q,b,nt),b.onAfterShadow(i,b,C,x,N,Q,nt)}}}else if(D.visible){let k=w(b,D,A,L);b.onBeforeShadow(i,b,C,x,N,k,null),i.renderBufferDirect(x,null,N,k,b,null),b.onAfterShadow(i,b,C,x,N,k,null)}}let z=b.children;for(let N=0,D=z.length;N<D;N++)y(z[N],C,x,A,L)}function M(b){b.target.removeEventListener("dispose",M);for(let x in l){let A=l[x],L=b.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}function w5(i,t){function e(){let I=!1,ot=new oe,$=null,lt=new oe(0,0,0,0);return{setMask:function(ft){$!==ft&&!I&&(i.colorMask(ft,ft,ft,ft),$=ft)},setLocked:function(ft){I=ft},setClear:function(ft,et,Et,yt,ee){ee===!0&&(ft*=yt,et*=yt,Et*=yt),ot.set(ft,et,Et,yt),lt.equals(ot)===!1&&(i.clearColor(ft,et,Et,yt),lt.copy(ot))},reset:function(){I=!1,$=null,lt.set(-1,0,0,0)}}}function n(){let I=!1,ot=!1,$=null,lt=null,ft=null;return{setReversed:function(et){if(ot!==et){let Et=t.get("EXT_clip_control");et?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),ot=et;let yt=ft;ft=null,this.setClear(yt)}},getReversed:function(){return ot},setTest:function(et){et?j(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(et){$!==et&&!I&&(i.depthMask(et),$=et)},setFunc:function(et){if(ot&&(et=h0[et]),lt!==et){switch(et){case Zs:i.depthFunc(i.NEVER);break;case Js:i.depthFunc(i.ALWAYS);break;case $s:i.depthFunc(i.LESS);break;case Mi:i.depthFunc(i.LEQUAL);break;case Ks:i.depthFunc(i.EQUAL);break;case Qs:i.depthFunc(i.GEQUAL);break;case js:i.depthFunc(i.GREATER);break;case tr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=et}},setLocked:function(et){I=et},setClear:function(et){ft!==et&&(ft=et,ot&&(et=1-et),i.clearDepth(et))},reset:function(){I=!1,$=null,lt=null,ft=null,ot=!1}}}function s(){let I=!1,ot=null,$=null,lt=null,ft=null,et=null,Et=null,yt=null,ee=null;return{setTest:function(Yt){I||(Yt?j(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(Yt){ot!==Yt&&!I&&(i.stencilMask(Yt),ot=Yt)},setFunc:function(Yt,qe,rn){($!==Yt||lt!==qe||ft!==rn)&&(i.stencilFunc(Yt,qe,rn),$=Yt,lt=qe,ft=rn)},setOp:function(Yt,qe,rn){(et!==Yt||Et!==qe||yt!==rn)&&(i.stencilOp(Yt,qe,rn),et=Yt,Et=qe,yt=rn)},setLocked:function(Yt){I=Yt},setClear:function(Yt){ee!==Yt&&(i.clearStencil(Yt),ee=Yt)},reset:function(){I=!1,ot=null,$=null,lt=null,ft=null,et=null,Et=null,yt=null,ee=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,d={},g={},h={},f=new WeakMap,p=[],S=null,m=!1,u=null,T=null,w=null,y=null,M=null,b=null,C=null,x=new Ft(0,0,0),A=0,L=!1,U=null,z=null,N=null,D=null,k=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,nt=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=nt>=2);let Q=null,tt={},At=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),jt=new oe().fromArray(At),Gt=new oe().fromArray(Tt);function qt(I,ot,$,lt){let ft=new Uint8Array(4),et=i.createTexture();i.bindTexture(I,et),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<$;Et++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ot+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return et}let Y={};Y[i.TEXTURE_2D]=qt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Mi),zt(!1),re(Ka),j(i.CULL_FACE),Wt(fn);function j(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function _t(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Pt(I,ot){return h[I]!==ot?(i.bindFramebuffer(I,ot),h[I]=ot,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function mt(I,ot){let $=p,lt=!1;if(I){$=f.get(ot),$===void 0&&($=[],f.set(ot,$));let ft=I.textures;if($.length!==ft.length||$[0]!==i.COLOR_ATTACHMENT0){for(let et=0,Et=ft.length;et<Et;et++)$[et]=i.COLOR_ATTACHMENT0+et;$.length=ft.length,lt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,lt=!0);lt&&i.drawBuffers($)}function Ut(I){return S!==I?(i.useProgram(I),S=I,!0):!1}let fe={[ei]:i.FUNC_ADD,[P1]:i.FUNC_SUBTRACT,[L1]:i.FUNC_REVERSE_SUBTRACT};fe[D1]=i.MIN,fe[N1]=i.MAX;let Ot={[U1]:i.ZERO,[F1]:i.ONE,[O1]:i.SRC_COLOR,[eo]:i.SRC_ALPHA,[H1]:i.SRC_ALPHA_SATURATE,[k1]:i.DST_COLOR,[z1]:i.DST_ALPHA,[B1]:i.ONE_MINUS_SRC_COLOR,[no]:i.ONE_MINUS_SRC_ALPHA,[G1]:i.ONE_MINUS_DST_COLOR,[V1]:i.ONE_MINUS_DST_ALPHA,[W1]:i.CONSTANT_COLOR,[X1]:i.ONE_MINUS_CONSTANT_COLOR,[q1]:i.CONSTANT_ALPHA,[Y1]:i.ONE_MINUS_CONSTANT_ALPHA};function Wt(I,ot,$,lt,ft,et,Et,yt,ee,Yt){if(I===fn){m===!0&&(_t(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),I!==I1){if(I!==u||Yt!==L){if((T!==ei||M!==ei)&&(i.blendEquation(i.FUNC_ADD),T=ei,M=ei),Yt)switch(I){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFunc(i.ONE,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case to:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Rt("WebGLState: Invalid blending: ",I);break}else switch(I){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ja:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case to:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",I);break}w=null,y=null,b=null,C=null,x.set(0,0,0),A=0,u=I,L=Yt}return}ft=ft||ot,et=et||$,Et=Et||lt,(ot!==T||ft!==M)&&(i.blendEquationSeparate(fe[ot],fe[ft]),T=ot,M=ft),($!==w||lt!==y||et!==b||Et!==C)&&(i.blendFuncSeparate(Ot[$],Ot[lt],Ot[et],Ot[Et]),w=$,y=lt,b=et,C=Et),(yt.equals(x)===!1||ee!==A)&&(i.blendColor(yt.r,yt.g,yt.b,ee),x.copy(yt),A=ee),u=I,L=!1}function te(I,ot){I.side===dn?_t(i.CULL_FACE):j(i.CULL_FACE);let $=I.side===Le;ot&&($=!$),zt($),I.blending===Ri&&I.transparent===!1?Wt(fn):Wt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let lt=I.stencilWrite;o.setTest(lt),lt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),De(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(I){U!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),U=I)}function re(I){I!==w1?(j(i.CULL_FACE),I!==z&&(I===Ka?i.cullFace(i.BACK):I===C1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),z=I}function ge(I){I!==N&&(q&&i.lineWidth(I),N=I)}function De(I,ot,$){I?(j(i.POLYGON_OFFSET_FILL),(D!==ot||k!==$)&&(D=ot,k=$,a.getReversed()&&(ot=-ot),i.polygonOffset(ot,$))):_t(i.POLYGON_OFFSET_FILL)}function ae(I){I?j(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function he(I){I===void 0&&(I=i.TEXTURE0+J-1),Q!==I&&(i.activeTexture(I),Q=I)}function P(I,ot,$){$===void 0&&(Q===null?$=i.TEXTURE0+J-1:$=Q);let lt=tt[$];lt===void 0&&(lt={type:void 0,texture:void 0},tt[$]=lt),(lt.type!==I||lt.texture!==ot)&&(Q!==$&&(i.activeTexture($),Q=$),i.bindTexture(I,ot||Y[I]),lt.type=I,lt.texture=ot)}function Me(){let I=tt[Q];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $t(){try{i.compressedTexImage2D(...arguments)}catch(I){Rt("WebGLState:",I)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(I){Rt("WebGLState:",I)}}function _(){try{i.texSubImage2D(...arguments)}catch(I){Rt("WebGLState:",I)}}function F(){try{i.texSubImage3D(...arguments)}catch(I){Rt("WebGLState:",I)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Rt("WebGLState:",I)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Rt("WebGLState:",I)}}function it(){try{i.texStorage2D(...arguments)}catch(I){Rt("WebGLState:",I)}}function st(){try{i.texStorage3D(...arguments)}catch(I){Rt("WebGLState:",I)}}function Z(){try{i.texImage2D(...arguments)}catch(I){Rt("WebGLState:",I)}}function K(){try{i.texImage3D(...arguments)}catch(I){Rt("WebGLState:",I)}}function rt(I){return g[I]!==void 0?g[I]:i.getParameter(I)}function Mt(I,ot){g[I]!==ot&&(i.pixelStorei(I,ot),g[I]=ot)}function ct(I){jt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),jt.copy(I))}function at(I){Gt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Gt.copy(I))}function bt(I,ot){let $=l.get(ot);$===void 0&&($=new WeakMap,l.set(ot,$));let lt=$.get(I);lt===void 0&&(lt=i.getUniformBlockIndex(ot,I.name),$.set(I,lt))}function wt(I,ot){let lt=l.get(ot).get(I);c.get(ot)!==lt&&(i.uniformBlockBinding(ot,lt,I.__bindingPointIndex),c.set(ot,lt))}function Lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},g={},Q=null,tt={},h={},f=new WeakMap,p=[],S=null,m=!1,u=null,T=null,w=null,y=null,M=null,b=null,C=null,x=new Ft(0,0,0),A=0,L=!1,U=null,z=null,N=null,D=null,k=null,jt.set(0,0,i.canvas.width,i.canvas.height),Gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:_t,bindFramebuffer:Pt,drawBuffers:mt,useProgram:Ut,setBlending:Wt,setMaterial:te,setFlipSided:zt,setCullFace:re,setLineWidth:ge,setPolygonOffset:De,setScissorTest:ae,activeTexture:he,bindTexture:P,unbindTexture:Me,compressedTexImage2D:$t,compressedTexImage3D:E,texImage2D:Z,texImage3D:K,pixelStorei:Mt,getParameter:rt,updateUBOMapping:bt,uniformBlockBinding:wt,texStorage2D:it,texStorage3D:st,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:V,compressedTexSubImage3D:X,scissor:ct,viewport:at,reset:Lt}}function C5(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xt,d=new WeakMap,g=new Set,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,_){return p?new OffscreenCanvas(E,_):Yi("canvas")}function m(E,_,F){let V=1,X=$t(E);if((X.width>F||X.height>F)&&(V=F/Math.max(X.width,X.height)),V<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let it=Math.floor(V*X.width),st=Math.floor(V*X.height);h===void 0&&(h=S(it,st));let Z=_?S(it,st):h;return Z.width=it,Z.height=st,Z.getContext("2d").drawImage(E,0,0,it,st),Ct("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+it+"x"+st+")."),Z}else return"data"in E&&Ct("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),E;return E}function u(E){return E.generateMipmaps}function T(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,_,F,V,X,it=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let st;V&&(st=t.get("EXT_texture_norm16"),st||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===i.RED&&(F===i.FLOAT&&(Z=i.R32F),F===i.HALF_FLOAT&&(Z=i.R16F),F===i.UNSIGNED_BYTE&&(Z=i.R8),F===i.UNSIGNED_SHORT&&st&&(Z=st.R16_EXT),F===i.SHORT&&st&&(Z=st.R16_SNORM_EXT)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.R8UI),F===i.UNSIGNED_SHORT&&(Z=i.R16UI),F===i.UNSIGNED_INT&&(Z=i.R32UI),F===i.BYTE&&(Z=i.R8I),F===i.SHORT&&(Z=i.R16I),F===i.INT&&(Z=i.R32I)),_===i.RG&&(F===i.FLOAT&&(Z=i.RG32F),F===i.HALF_FLOAT&&(Z=i.RG16F),F===i.UNSIGNED_BYTE&&(Z=i.RG8),F===i.UNSIGNED_SHORT&&st&&(Z=st.RG16_EXT),F===i.SHORT&&st&&(Z=st.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RG8UI),F===i.UNSIGNED_SHORT&&(Z=i.RG16UI),F===i.UNSIGNED_INT&&(Z=i.RG32UI),F===i.BYTE&&(Z=i.RG8I),F===i.SHORT&&(Z=i.RG16I),F===i.INT&&(Z=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),F===i.UNSIGNED_INT&&(Z=i.RGB32UI),F===i.BYTE&&(Z=i.RGB8I),F===i.SHORT&&(Z=i.RGB16I),F===i.INT&&(Z=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),F===i.UNSIGNED_INT&&(Z=i.RGBA32UI),F===i.BYTE&&(Z=i.RGBA8I),F===i.SHORT&&(Z=i.RGBA16I),F===i.INT&&(Z=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_SHORT&&st&&(Z=st.RGB16_EXT),F===i.SHORT&&st&&(Z=st.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),_===i.RGBA){let K=it?Xi:Vt.getTransfer(X);F===i.FLOAT&&(Z=i.RGBA32F),F===i.HALF_FLOAT&&(Z=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Z=K===Jt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&st&&(Z=st.RGBA16_EXT),F===i.SHORT&&st&&(Z=st.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function M(E,_){let F;return E?_===null||_===en||_===Pi?F=i.DEPTH24_STENCIL8:_===nn?F=i.DEPTH32F_STENCIL8:_===Ii&&(F=i.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===en||_===Pi?F=i.DEPTH_COMPONENT24:_===nn?F=i.DEPTH_COMPONENT32F:_===Ii&&(F=i.DEPTH_COMPONENT16),F}function b(E,_){return u(E)===!0||E.isFramebufferTexture&&E.minFilter!==xe&&E.minFilter!==Se?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function C(E){let _=E.target;_.removeEventListener("dispose",C),A(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&g.delete(_)}function x(E){let _=E.target;_.removeEventListener("dispose",x),U(_)}function A(E){let _=n.get(E);if(_.__webglInit===void 0)return;let F=E.source,V=f.get(F);if(V){let X=V[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&L(E),Object.keys(V).length===0&&f.delete(F)}n.remove(E)}function L(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let F=E.source,V=f.get(F);delete V[_.__cacheKey],a.memory.textures--}function U(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let X=0;X<_.__webglFramebuffer[V].length;X++)i.deleteFramebuffer(_.__webglFramebuffer[V][X]);else i.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)i.deleteFramebuffer(_.__webglFramebuffer[V]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=E.textures;for(let V=0,X=F.length;V<X;V++){let it=n.get(F[V]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(F[V])}n.remove(E)}let z=0;function N(){z=0}function D(){return z}function k(E){z=E}function J(){let E=z;return E>=s.maxTextures&&Ct("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,E}function q(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function nt(E,_){let F=n.get(E);if(E.isVideoTexture&&P(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){let V=E.image;if(V===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(F,E,_);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function W(E,_){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){_t(F,E,_);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function Q(E,_){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){_t(F,E,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function tt(E,_){let F=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){Pt(F,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}let At={[er]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[nr]:i.MIRRORED_REPEAT},Tt={[xe]:i.NEAREST,[$1]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[Se]:i.LINEAR,[Ar]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},jt={[t0]:i.NEVER,[r0]:i.ALWAYS,[e0]:i.LESS,[ca]:i.LEQUAL,[n0]:i.EQUAL,[ha]:i.GEQUAL,[i0]:i.GREATER,[s0]:i.NOTEQUAL};function Gt(E,_){if(_.type===nn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Se||_.magFilter===Ar||_.magFilter===fs||_.magFilter===Hn||_.minFilter===Se||_.minFilter===Ar||_.minFilter===fs||_.minFilter===Hn)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,At[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,At[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,At[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Tt[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Tt[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,jt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===xe||_.minFilter!==fs&&_.minFilter!==Hn||_.type===nn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function qt(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",C));let V=_.source,X=f.get(V);X===void 0&&(X={},f.set(V,X));let it=q(_);if(it!==E.__cacheKey){X[it]===void 0&&(X[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),X[it].usedTimes++;let st=X[E.__cacheKey];st!==void 0&&(X[E.__cacheKey].usedTimes--,st.usedTimes===0&&L(_)),E.__cacheKey=it,E.__webglTexture=X[it].texture}return F}function Y(E,_,F){return Math.floor(Math.floor(E/F)/_)}function j(E,_,F,V){let it=E.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,V,_.data);else{it.sort((Mt,ct)=>Mt.start-ct.start);let st=0;for(let Mt=1;Mt<it.length;Mt++){let ct=it[st],at=it[Mt],bt=ct.start+ct.count,wt=Y(at.start,_.width,4),Lt=Y(ct.start,_.width,4);at.start<=bt+1&&wt===Lt&&Y(at.start+at.count-1,_.width,4)===wt?ct.count=Math.max(ct.count,at.start+at.count-ct.start):(++st,it[st]=at)}it.length=st+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),rt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Mt=0,ct=it.length;Mt<ct;Mt++){let at=it[Mt],bt=Math.floor(at.start/4),wt=Math.ceil(at.count/4),Lt=bt%_.width,I=Math.floor(bt/_.width),ot=wt,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Lt,I,ot,$,F,V,_.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,rt)}}function _t(E,_,F){let V=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=i.TEXTURE_3D);let X=qt(E,_),it=_.source;e.bindTexture(V,E.__webglTexture,i.TEXTURE0+F);let st=n.get(it);if(it.version!==st.__version||X===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let $=Vt.getPrimaries(Vt.workingColorSpace),lt=_.colorSpace===bn?null:Vt.getPrimaries(_.colorSpace),ft=_.colorSpace===bn||$===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let K=m(_.image,!1,s.maxTextureSize);K=Me(_,K);let rt=r.convert(_.format,_.colorSpace),Mt=r.convert(_.type),ct=y(_.internalFormat,rt,Mt,_.normalized,_.colorSpace,_.isVideoTexture);Gt(V,_);let at,bt=_.mipmaps,wt=_.isVideoTexture!==!0,Lt=st.__version===void 0||X===!0,I=it.dataReady,ot=b(_,K);if(_.isDepthTexture)ct=M(_.format===Wn,_.type),Lt&&(wt?e.texStorage2D(i.TEXTURE_2D,1,ct,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,ct,K.width,K.height,0,rt,Mt,null));else if(_.isDataTexture)if(bt.length>0){wt&&Lt&&e.texStorage2D(i.TEXTURE_2D,ot,ct,bt[0].width,bt[0].height);for(let $=0,lt=bt.length;$<lt;$++)at=bt[$],wt?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,at.width,at.height,rt,Mt,at.data):e.texImage2D(i.TEXTURE_2D,$,ct,at.width,at.height,0,rt,Mt,at.data);_.generateMipmaps=!1}else wt?(Lt&&e.texStorage2D(i.TEXTURE_2D,ot,ct,K.width,K.height),I&&j(_,K,rt,Mt)):e.texImage2D(i.TEXTURE_2D,0,ct,K.width,K.height,0,rt,Mt,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){wt&&Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ct,bt[0].width,bt[0].height,K.depth);for(let $=0,lt=bt.length;$<lt;$++)if(at=bt[$],_.format!==Xe)if(rt!==null)if(wt){if(I)if(_.layerUpdates.size>0){let ft=Ao(at.width,at.height,_.format,_.type);for(let et of _.layerUpdates){let Et=at.data.subarray(et*ft/at.data.BYTES_PER_ELEMENT,(et+1)*ft/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,et,at.width,at.height,1,rt,Et)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,at.width,at.height,K.depth,rt,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,ct,at.width,at.height,K.depth,0,at.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,at.width,at.height,K.depth,rt,Mt,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,ct,at.width,at.height,K.depth,0,rt,Mt,at.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{wt&&Lt&&e.texStorage2D(i.TEXTURE_2D,ot,ct,bt[0].width,bt[0].height);for(let $=0,lt=bt.length;$<lt;$++)at=bt[$],_.format!==Xe?rt!==null?wt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,at.width,at.height,rt,at.data):e.compressedTexImage2D(i.TEXTURE_2D,$,ct,at.width,at.height,0,at.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,at.width,at.height,rt,Mt,at.data):e.texImage2D(i.TEXTURE_2D,$,ct,at.width,at.height,0,rt,Mt,at.data)}else if(_.isDataArrayTexture)if(wt){if(Lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ct,K.width,K.height,K.depth),I)if(_.layerUpdates.size>0){let $=Ao(K.width,K.height,_.format,_.type);for(let lt of _.layerUpdates){let ft=K.data.subarray(lt*$/K.data.BYTES_PER_ELEMENT,(lt+1)*$/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,K.width,K.height,1,rt,Mt,ft)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,rt,Mt,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,K.width,K.height,K.depth,0,rt,Mt,K.data);else if(_.isData3DTexture)wt?(Lt&&e.texStorage3D(i.TEXTURE_3D,ot,ct,K.width,K.height,K.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,rt,Mt,K.data)):e.texImage3D(i.TEXTURE_3D,0,ct,K.width,K.height,K.depth,0,rt,Mt,K.data);else if(_.isFramebufferTexture){if(Lt)if(wt)e.texStorage2D(i.TEXTURE_2D,ot,ct,K.width,K.height);else{let $=K.width,lt=K.height;for(let ft=0;ft<ot;ft++)e.texImage2D(i.TEXTURE_2D,ft,ct,$,lt,0,rt,Mt,null),$>>=1,lt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),K.parentNode!==$){$.appendChild(K),g.add(_),$.onpaint=lt=>{let ft=lt.changedElements;for(let et of g)ft.includes(et.image)&&(et.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let ft=i.RGBA,et=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ft,et,Et,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(bt.length>0){if(wt&&Lt){let $=$t(bt[0]);e.texStorage2D(i.TEXTURE_2D,ot,ct,$.width,$.height)}for(let $=0,lt=bt.length;$<lt;$++)at=bt[$],wt?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,rt,Mt,at):e.texImage2D(i.TEXTURE_2D,$,ct,rt,Mt,at);_.generateMipmaps=!1}else if(wt){if(Lt){let $=$t(K);e.texStorage2D(i.TEXTURE_2D,ot,ct,$.width,$.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt,Mt,K)}else e.texImage2D(i.TEXTURE_2D,0,ct,rt,Mt,K);u(_)&&T(V),st.__version=it.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Pt(E,_,F){if(_.image.length!==6)return;let V=qt(E,_),X=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);let it=n.get(X);if(X.version!==it.__version||V===!0){e.activeTexture(i.TEXTURE0+F);let st=Vt.getPrimaries(Vt.workingColorSpace),Z=_.colorSpace===bn?null:Vt.getPrimaries(_.colorSpace),K=_.colorSpace===bn||st===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let rt=_.isCompressedTexture||_.image[0].isCompressedTexture,Mt=_.image[0]&&_.image[0].isDataTexture,ct=[];for(let et=0;et<6;et++)!rt&&!Mt?ct[et]=m(_.image[et],!0,s.maxCubemapSize):ct[et]=Mt?_.image[et].image:_.image[et],ct[et]=Me(_,ct[et]);let at=ct[0],bt=r.convert(_.format,_.colorSpace),wt=r.convert(_.type),Lt=y(_.internalFormat,bt,wt,_.normalized,_.colorSpace),I=_.isVideoTexture!==!0,ot=it.__version===void 0||V===!0,$=X.dataReady,lt=b(_,at);Gt(i.TEXTURE_CUBE_MAP,_);let ft;if(rt){I&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Lt,at.width,at.height);for(let et=0;et<6;et++){ft=ct[et].mipmaps;for(let Et=0;Et<ft.length;Et++){let yt=ft[Et];_.format!==Xe?bt!==null?I?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,0,0,yt.width,yt.height,bt,yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,Lt,yt.width,yt.height,0,yt.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,0,0,yt.width,yt.height,bt,wt,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,Lt,yt.width,yt.height,0,bt,wt,yt.data)}}}else{if(ft=_.mipmaps,I&&ot){ft.length>0&&lt++;let et=$t(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Lt,et.width,et.height)}for(let et=0;et<6;et++)if(Mt){I?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ct[et].width,ct[et].height,bt,wt,ct[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Lt,ct[et].width,ct[et].height,0,bt,wt,ct[et].data);for(let Et=0;Et<ft.length;Et++){let ee=ft[Et].image[et].image;I?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,0,0,ee.width,ee.height,bt,wt,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,Lt,ee.width,ee.height,0,bt,wt,ee.data)}}else{I?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,bt,wt,ct[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Lt,bt,wt,ct[et]);for(let Et=0;Et<ft.length;Et++){let yt=ft[Et];I?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,0,0,bt,wt,yt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,Lt,bt,wt,yt.image[et])}}}u(_)&&T(i.TEXTURE_CUBE_MAP),it.__version=X.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function mt(E,_,F,V,X,it){let st=r.convert(F.format,F.colorSpace),Z=r.convert(F.type),K=y(F.internalFormat,st,Z,F.normalized,F.colorSpace),rt=n.get(_),Mt=n.get(F);if(Mt.__renderTarget=_,!rt.__hasExternalTextures){let ct=Math.max(1,_.width>>it),at=Math.max(1,_.height>>it);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?e.texImage3D(X,it,K,ct,at,_.depth,0,st,Z,null):e.texImage2D(X,it,K,ct,at,0,st,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),he(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,X,Mt.__webglTexture,0,ae(_)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,X,Mt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(E,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){let V=_.depthTexture,X=V&&V.isDepthTexture?V.type:null,it=M(_.stencilBuffer,X),st=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(_),it,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(_),it,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,it,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,E)}else{let V=_.textures;for(let X=0;X<V.length;X++){let it=V[X],st=r.convert(it.format,it.colorSpace),Z=r.convert(it.type),K=y(it.internalFormat,st,Z,it.normalized,it.colorSpace);he(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae(_),K,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae(_),K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(E,_,F){let V=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=n.get(_.depthTexture);if(X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(X.__webglInit===void 0&&(X.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,_.depthTexture);let rt=r.convert(_.depthTexture.format),Mt=r.convert(_.depthTexture.type),ct;_.depthTexture.format===cn?ct=i.DEPTH_COMPONENT24:_.depthTexture.format===Wn&&(ct=i.DEPTH24_STENCIL8);for(let at=0;at<6;at++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ct,_.width,_.height,0,rt,Mt,null)}}else nt(_.depthTexture,0);let it=X.__webglTexture,st=ae(_),Z=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,K=_.depthTexture.format===Wn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===cn)he(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,it,0);else if(_.depthTexture.format===Wn)he(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(E){let _=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let V=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){let X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",X)};V.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=V}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let V=0;V<6;V++)fe(_.__webglFramebuffer[V],E,V);else{let V=E.texture.mipmaps;V&&V.length>0?fe(_.__webglFramebuffer[0],E,0):fe(_.__webglFramebuffer,E,0)}else if(F){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=i.createRenderbuffer(),Ut(_.__webglDepthbuffer[V],E,!1);else{let X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=_.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,it)}}else{let V=E.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ut(_.__webglDepthbuffer,E,!1);else{let X=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(E,_,F){let V=n.get(E);_!==void 0&&mt(V.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ot(E)}function te(E){let _=E.texture,F=n.get(E),V=n.get(_);E.addEventListener("dispose",x);let X=E.textures,it=E.isWebGLCubeRenderTarget===!0,st=X.length>1;if(st||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=_.version,a.memory.textures++),it){F.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[Z]=[];for(let K=0;K<_.mipmaps.length;K++)F.__webglFramebuffer[Z][K]=i.createFramebuffer()}else F.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)F.__webglFramebuffer[Z]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(st)for(let Z=0,K=X.length;Z<K;Z++){let rt=n.get(X[Z]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&he(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Z=0;Z<X.length;Z++){let K=X[Z];F.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Z]);let rt=r.convert(K.format,K.colorSpace),Mt=r.convert(K.type),ct=y(K.internalFormat,rt,Mt,K.normalized,K.colorSpace,E.isXRRenderTarget===!0),at=ae(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ct,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,F.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)mt(F.__webglFramebuffer[Z][K],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else mt(F.__webglFramebuffer[Z],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);u(_)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let Z=0,K=X.length;Z<K;Z++){let rt=X[Z],Mt=n.get(rt),ct=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Mt.__webglTexture),Gt(ct,rt),mt(F.__webglFramebuffer,E,rt,i.COLOR_ATTACHMENT0+Z,ct,0),u(rt)&&T(ct)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Z=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,V.__webglTexture),Gt(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)mt(F.__webglFramebuffer[K],E,_,i.COLOR_ATTACHMENT0,Z,K);else mt(F.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,Z,0);u(_)&&T(Z),e.unbindTexture()}E.depthBuffer&&Ot(E)}function zt(E){let _=E.textures;for(let F=0,V=_.length;F<V;F++){let X=_[F];if(u(X)){let it=w(E),st=n.get(X).__webglTexture;e.bindTexture(it,st),T(it),e.unbindTexture()}}}let re=[],ge=[];function De(E){if(E.samples>0){if(he(E)===!1){let _=E.textures,F=E.width,V=E.height,X=i.COLOR_BUFFER_BIT,it=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(E),Z=_.length>1;if(Z)for(let rt=0;rt<_.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let K=E.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<_.length;rt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let Mt=n.get(_[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Mt,0)}i.blitFramebuffer(0,0,F,V,0,0,F,V,X,i.NEAREST),c===!0&&(re.length=0,ge.length=0,re.push(i.COLOR_ATTACHMENT0+rt),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(re.push(it),ge.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let rt=0;rt<_.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let Mt=n.get(_[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,Mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ae(E){return Math.min(s.maxSamples,E.samples)}function he(E){let _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function P(E){let _=a.render.frame;d.get(E)!==_&&(d.set(E,_),E.update())}function Me(E,_){let F=E.colorSpace,V=E.format,X=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Wi&&F!==bn&&(Vt.getTransfer(F)===Jt?(V!==Xe||X!==ke)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",F)),_}function $t(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=N,this.getTextureUnits=D,this.setTextureUnits=k,this.setTexture2D=nt,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=tt,this.rebindTextures=Wt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function R5(i,t){function e(n,s=bn){let r,a=Vt.getTransfer(s);if(n===ke)return i.UNSIGNED_BYTE;if(n===Cr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===po)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uo)return i.BYTE;if(n===fo)return i.SHORT;if(n===Ii)return i.UNSIGNED_SHORT;if(n===wr)return i.INT;if(n===en)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===sn)return i.HALF_FLOAT;if(n===go)return i.ALPHA;if(n===_o)return i.RGB;if(n===Xe)return i.RGBA;if(n===cn)return i.DEPTH_COMPONENT;if(n===Wn)return i.DEPTH_STENCIL;if(n===xo)return i.RED;if(n===Ir)return i.RED_INTEGER;if(n===Xn)return i.RG;if(n===Pr)return i.RG_INTEGER;if(n===Lr)return i.RGBA_INTEGER;if(n===ps||n===ms||n===gs||n===_s)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dr||n===Nr||n===Ur||n===Fr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Or||n===Br||n===zr||n===Vr||n===kr||n===xs||n===Gr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Or||n===Br)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vr)return r.COMPRESSED_R11_EAC;if(n===kr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xs)return r.COMPRESSED_RG11_EAC;if(n===Gr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Hr||n===Wr||n===Xr||n===qr||n===Yr||n===Zr||n===Jr||n===$r||n===Kr||n===Qr||n===jr||n===ta||n===ea||n===na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$r)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ta)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ea)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===na)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ia||n===sa||n===ra)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ia)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===aa||n===oa||n===vs||n===la)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===la)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var I5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P5=`
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

}`,Xo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ss(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:I5,fragmentShader:P5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new We(new rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qo=class extends hn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,g=null,h=null,f=null,p=null,S=typeof XRWebGLBinding<"u",m=new Xo,u={},T=e.getContextAttributes(),w=null,y=null,M=[],b=[],C=new Xt,x=null,A=null,L=new Ae;L.viewport=new oe;let U=new Ae;U.viewport=new oe;let z=[L,U],N=new Mr,D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=M[Y];return j===void 0&&(j=new Ai,M[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=M[Y];return j===void 0&&(j=new Ai,M[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=M[Y];return j===void 0&&(j=new Ai,M[Y]=j),j.getHandSpace()};function J(Y){let j=b.indexOf(Y.inputSource);if(j===-1)return;let _t=M[j];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,l||a),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",nt);for(let Y=0;Y<M.length;Y++){let j=b[Y];j!==null&&(b[Y]=null,M[Y].disconnect(j))}D=null,k=null,m.reset();for(let Y in u)delete u[Y];if(t.setRenderTarget(w),f=null,h=null,g=null,s=null,y=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),A!==null){let Y=A.camera;Y.fov=A.fov,Y.zoom=A.zoom,Y.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return g===null&&S&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",q),s.addEventListener("inputsourceschange",nt),T.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Pt=null,mt=null;T.depth&&(mt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=T.stencil?Wn:cn,Pt=T.stencil?Pi:en);let Ut={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};g=this.getBinding(),h=g.createProjectionLayer(Ut),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Ue(h.textureWidth,h.textureHeight,{format:Xe,type:ke,depthTexture:new On(h.textureWidth,h.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let _t={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ue(f.framebufferWidth,f.framebufferHeight,{format:Xe,type:ke,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(Y){for(let j=0;j<Y.removed.length;j++){let _t=Y.removed[j],Pt=b.indexOf(_t);Pt>=0&&(b[Pt]=null,M[Pt].disconnect(_t))}for(let j=0;j<Y.added.length;j++){let _t=Y.added[j],Pt=b.indexOf(_t);if(Pt===-1){for(let Ut=0;Ut<M.length;Ut++)if(Ut>=b.length){b.push(_t),Pt=Ut;break}else if(b[Ut]===null){b[Ut]=_t,Pt=Ut;break}if(Pt===-1)break}let mt=M[Pt];mt&&mt.connect(_t)}}let W=new G,Q=new G;function tt(Y,j,_t){W.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(_t.matrixWorld);let Pt=W.distanceTo(Q),mt=j.projectionMatrix.elements,Ut=_t.projectionMatrix.elements,fe=mt[14]/(mt[10]-1),Ot=mt[14]/(mt[10]+1),Wt=(mt[9]+1)/mt[5],te=(mt[9]-1)/mt[5],zt=(mt[8]-1)/mt[0],re=(Ut[8]+1)/Ut[0],ge=fe*zt,De=fe*re,ae=Pt/(-zt+re),he=ae*-zt;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(he),Y.translateZ(ae),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),mt[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let P=fe+ae,Me=Ot+ae,$t=ge-he,E=De+(Pt-he),_=Wt*Ot/Me*P,F=te*Ot/Me*P;Y.projectionMatrix.makePerspective($t,E,_,F,P,Me),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function At(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let j=Y.near,_t=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),N.near=U.near=L.near=j,N.far=U.far=L.far=_t,(D!==N.near||k!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),D=N.near,k=N.far),N.layers.mask=Y.layers.mask|6,L.layers.mask=N.layers.mask&-5,U.layers.mask=N.layers.mask&-3;let Pt=Y.parent,mt=N.cameras;At(N,Pt);for(let Ut=0;Ut<mt.length;Ut++)At(mt[Ut],Pt);mt.length===2?tt(N,L,U):N.projectionMatrix.copy(L.projectionMatrix),A===null&&Y.isPerspectiveCamera&&(A={camera:Y,fov:Y.fov,zoom:Y.zoom}),Tt(Y,N,Pt)};function Tt(Y,j,_t){_t===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ti*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Y){return u[Y]};let jt=null;function Gt(Y,j){if(d=j.getViewerPose(l||a),p=j,d!==null){let _t=d.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Pt=!1;_t.length!==N.cameras.length&&(N.cameras.length=0,Pt=!0);for(let Ot=0;Ot<_t.length;Ot++){let Wt=_t[Ot],te=null;if(f!==null)te=f.getViewport(Wt);else{let re=g.getViewSubImage(h,Wt);te=re.viewport,Ot===0&&(t.setRenderTargetTextures(y,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(y))}let zt=z[Ot];zt===void 0&&(zt=new Ae,zt.layers.enable(Ot),zt.viewport=new oe,z[Ot]=zt),zt.matrix.fromArray(Wt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Wt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(te.x,te.y,te.width,te.height),Ot===0&&(N.matrix.copy(zt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Pt===!0&&N.cameras.push(zt)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){g=n.getBinding();let Ot=g.getDepthInformation(_t[0]);Ot&&Ot.isValid&&Ot.texture&&m.init(Ot,s.renderState)}if(mt&&mt.includes("camera-access")&&S){t.state.unbindTexture(),g=n.getBinding();for(let Ot=0;Ot<_t.length;Ot++){let Wt=_t[Ot].camera;if(Wt){let te=u[Wt];te||(te=new ss,u[Wt]=te);let zt=g.getCameraImage(Wt);te.sourceTexture=zt}}}}for(let _t=0;_t<M.length;_t++){let Pt=b[_t],mt=M[_t];Pt!==null&&mt!==void 0&&mt.update(Pt,j,l||a)}jt&&jt(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),p=null}let qt=new F0;qt.setAnimationLoop(Gt),this.setAnimationLoop=function(Y){jt=Y},this.dispose=function(){}}},L5=new le,G0=new It;G0.set(-1,0,0,0,1,0,0,0,1);function D5(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,bo(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,T,w,y){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(m,u):u.isMeshLambertMaterial?(r(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(m,u),g(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(m,u),h(m,u),u.isMeshPhysicalMaterial&&f(m,u,y)):u.isMeshMatcapMaterial?(r(m,u),p(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),S(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,T,w):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Le&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Le&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let T=t.get(u),w=T.envMap,y=T.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(L5.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(G0),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,T,w){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*T,m.scale.value=w*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function g(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,T){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Le&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.retroreflectivity>0&&(m.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){let T=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function N5(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let b=M.program;n.uniformBlockBinding(y,b)}function l(y,M){let b=s[y.id];b===void 0&&(m(y),b=d(y),s[y.id]=b,y.addEventListener("dispose",T));let C=M.program;n.updateUBOMapping(y,C);let x=t.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function d(y){let M=g();y.__bindingPointIndex=M;let b=i.createBuffer(),C=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function g(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let M=s[y.id],b=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,A=b.length;x<A;x++){let L=b[x];if(Array.isArray(L))for(let U=0,z=L.length;U<z;U++)f(L[U],x,U,C);else f(L,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,M,b,C){if(S(y,M,b,C)===!0){let x=y.__offset,A=y.value;if(Array.isArray(A)){let L=0;for(let U=0;U<A.length;U++){let z=A[U],N=u(z);p(z,y.__data,L),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(L+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function p(y,M,b){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,b)}function S(y,M,b,C){let x=y.value,A=M+"_"+b;if(C[A]===void 0)return typeof x=="number"||typeof x=="boolean"?C[A]=x:ArrayBuffer.isView(x)?C[A]=x.slice():C[A]=x.clone(),!0;{let L=C[A];if(typeof x=="number"||typeof x=="boolean"){if(L!==x)return C[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(L.equals(x)===!1)return L.copy(x),!0}}return!1}function m(y){let M=y.uniforms,b=0,C=16;for(let A=0,L=M.length;A<L;A++){let U=Array.isArray(M[A])?M[A]:[M[A]];for(let z=0,N=U.length;z<N;z++){let D=U[z],k=Array.isArray(D.value)?D.value:[D.value];for(let J=0,q=k.length;J<q;J++){let nt=k[J],W=u(nt),Q=b%C,tt=Q%W.boundary,At=Q+tt;b+=tt,At!==0&&C-At<W.storage&&(b+=C-At),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=W.storage}}}let x=b%C;return x>0&&(b+=C-x),y.__size=b,y.__cache={},this}function u(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",y),M}function T(y){let M=y.target;M.removeEventListener("dispose",T);let b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function w(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:w}}var U5=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pn=null;function F5(){return pn===null&&(pn=new or(U5,16,16,Xn,sn),pn.name="DFG_LUT",pn.minFilter=Se,pn.magFilter=Se,pn.wrapS=ln,pn.wrapT=ln,pn.generateMipmaps=!1,pn.needsUpdate=!0),pn}var ma=class{constructor(t={}){let{canvas:e=o0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:h=!1,outputBufferType:f=ke}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let S=f,m=new Set([Lr,Pr,Ir]),u=new Set([ke,en,Ii,Pi,Cr,Rr]),T=new Uint32Array(4),w=new Int32Array(4),y=new G,M=null,b=null,C=[],x=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,U=!1,z=null,N=null,D=null,k=null;this._outputColorSpace=ve;let J=0,q=0,nt=null,W=-1,Q=null,tt=new oe,At=new oe,Tt=null,jt=new Ft(0),Gt=0,qt=e.width,Y=e.height,j=1,_t=null,Pt=null,mt=new oe(0,0,qt,Y),Ut=new oe(0,0,qt,Y),fe=!1,Ot=new ns,Wt=!1,te=!1,zt=new le,re=new G,ge=new oe,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function he(){return nt===null?j:1}let P=n;function Me(v,R){return e.getContext(v,R)}let $t,E,_,F,V,X,it,st,Z,K,rt,Mt,ct,at,bt,wt,Lt,I,ot,$,lt,ft,et;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ee,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",qe,!1),P===null){let R="webgl2";if(P=Me(R,v),P===null)throw Me(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Et()}catch(v){throw e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",qe,!1),Rt("WebGLRenderer: "+v.message),v}function Et(){$t=new H3(P),$t.init(),lt=new R5(P,$t),E=new D3(P,$t,t,lt),_=new w5(P,$t),E.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),N=P.createFramebuffer(),D=P.createFramebuffer(),k=P.createFramebuffer(),F=new q3(P),V=new f5,X=new C5(P,$t,_,V,E,lt,F),it=new G3(L),st=new Z2(P),ft=new P3(P,st),Z=new W3(P,st,F,ft),K=new Z3(P,Z,st,ft,F),I=new Y3(P,E,X),bt=new N3(V),rt=new d5(L,it,$t,E,ft,bt),Mt=new D5(L,V),ct=new m5,at=new S5($t),Lt=new I3(L,it,_,K,p,c),wt=new A5(L,K,E),et=new N5(P,F,E,_),ot=new L3(P,$t,F),$=new X3(P,$t,F),F.programs=rt.programs,L.capabilities=E,L.extensions=$t,L.properties=V,L.renderLists=ct,L.shadowMap=wt,L.state=_,L.info=F}S!==ke&&(A=new $3(S,e.width,e.height,o,s,r));let yt=new qo(L,P);this.xr=yt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let v=$t.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=$t.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(qt,Y,!1))},this.getSize=function(v){return v.set(qt,Y)},this.setSize=function(v,R,H=!0){if(yt.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}qt=v,Y=R,e.width=Math.floor(v*j),e.height=Math.floor(R*j),H===!0&&(e.style.width=v+"px",e.style.height=R+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,v,R)},this.getDrawingBufferSize=function(v){return v.set(qt*j,Y*j).floor()},this.setDrawingBufferSize=function(v,R,H){qt=v,Y=R,j=H,e.width=Math.floor(v*H),e.height=Math.floor(R*H),this.setViewport(0,0,v,R)},this.setEffects=function(v){if(S===ke){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let R=0;R<v.length;R++)if(v[R].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(tt)},this.getViewport=function(v){return v.copy(mt)},this.setViewport=function(v,R,H,O){v.isVector4?mt.set(v.x,v.y,v.z,v.w):mt.set(v,R,H,O),_.viewport(tt.copy(mt).multiplyScalar(j).round())},this.getScissor=function(v){return v.copy(Ut)},this.setScissor=function(v,R,H,O){v.isVector4?Ut.set(v.x,v.y,v.z,v.w):Ut.set(v,R,H,O),_.scissor(At.copy(Ut).multiplyScalar(j).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(v){_.setScissorTest(fe=v)},this.setOpaqueSort=function(v){_t=v},this.setTransparentSort=function(v){Pt=v},this.getClearColor=function(v){return v.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(v=!0,R=!0,H=!0){let O=0;if(v){let B=!1;if(nt!==null){let dt=nt.texture.format;B=m.has(dt)}if(B){let dt=nt.texture.type,gt=u.has(dt),ut=Lt.getClearColor(),xt=Lt.getClearAlpha(),St=ut.r,Dt=ut.g,Bt=ut.b;gt?(T[0]=St,T[1]=Dt,T[2]=Bt,T[3]=xt,P.clearBufferuiv(P.COLOR,0,T)):(w[0]=St,w[1]=Dt,w[2]=Bt,w[3]=xt,P.clearBufferiv(P.COLOR,0,w))}else O|=P.COLOR_BUFFER_BIT}R&&(O|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&P.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),z=v},this.dispose=function(){e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",qe,!1),Lt.dispose(),ct.dispose(),at.dispose(),V.dispose(),it.dispose(),K.dispose(),ft.dispose(),et.dispose(),rt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",Jo),yt.removeEventListener("sessionend",$o),qn.stop()};function ee(v){v.preventDefault(),So("WebGLRenderer: Context Lost."),U=!0}function Yt(){So("WebGLRenderer: Context Restored."),U=!1;let v=F.autoReset,R=wt.enabled,H=wt.autoUpdate,O=wt.needsUpdate,B=wt.type;Et(),F.autoReset=v,wt.enabled=R,wt.autoUpdate=H,wt.needsUpdate=O,wt.type=B}function qe(v){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function rn(v){let R=v.target;R.removeEventListener("dispose",rn),W0(R)}function W0(v){X0(v),V.remove(v)}function X0(v){let R=V.get(v).programs;R!==void 0&&(R.forEach(function(H){rt.releaseProgram(H)}),v.isShaderMaterial&&rt.releaseShaderCache(v))}this.renderBufferDirect=function(v,R,H,O,B,dt){R===null&&(R=De);let gt=B.isMesh&&B.matrixWorld.determinantAffine()<0,ut=Z0(v,R,H,O,B);_.setMaterial(O,gt);let xt=H.index,St=1;if(O.wireframe===!0){if(xt=Z.getWireframeAttribute(H),xt===void 0)return;St=2}let Dt=H.drawRange,Bt=H.attributes.position,vt=Dt.start*St,Zt=(Dt.start+Dt.count)*St;dt!==null&&(vt=Math.max(vt,dt.start*St),Zt=Math.min(Zt,(dt.start+dt.count)*St)),xt!==null?(vt=Math.max(vt,0),Zt=Math.min(Zt,xt.count)):Bt!=null&&(vt=Math.max(vt,0),Zt=Math.min(Zt,Bt.count));let ue=Zt-vt;if(ue<0||ue===1/0)return;ft.setup(B,O,ut,H,xt);let ie,Qt=ot;if(xt!==null&&(ie=st.get(xt),Qt=$,Qt.setIndex(ie)),B.isMesh)O.wireframe===!0?(_.setLineWidth(O.wireframeLinewidth*he()),Qt.setMode(P.LINES)):Qt.setMode(P.TRIANGLES);else if(B.isLine){let be=O.linewidth;be===void 0&&(be=1),_.setLineWidth(be*he()),B.isLineSegments?Qt.setMode(P.LINES):B.isLineLoop?Qt.setMode(P.LINE_LOOP):Qt.setMode(P.LINE_STRIP)}else B.isPoints?Qt.setMode(P.POINTS):B.isSprite&&Qt.setMode(P.TRIANGLES);if(B.isBatchedMesh)if($t.get("WEBGL_multi_draw"))Qt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let be=B._multiDrawStarts,pt=B._multiDrawCounts,Ce=B._multiDrawCount,Ht=xt?st.get(xt).bytesPerElement:1,Ge=V.get(O).currentProgram.getUniforms();for(let an=0;an<Ce;an++)Ge.setValue(P,"_gl_DrawID",an),Qt.render(be[an]/Ht,pt[an])}else if(B.isInstancedMesh)Qt.renderInstances(vt,ue,B.count);else if(H.isInstancedBufferGeometry){let be=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,pt=Math.min(H.instanceCount,be);Qt.renderInstances(vt,ue,pt)}else Qt.render(vt,ue)};function Zo(v,R,H,O){z!==null&&v.isNodeMaterial&&z.setObject(O,v),Wt===!0&&bt.setState(v,H,!1),v.transparent===!0&&v.side===dn&&v.forceSinglePass===!1?(v.side=Le,v.needsUpdate=!0,Ts(v,R,O),v.side=kn,v.needsUpdate=!0,Ts(v,R,O),v.side=dn):Ts(v,R,O)}this.compile=function(v,R,H=null){H===null&&(H=v),z!==null&&z.renderStart(v,R,H),b=at.get(H),b.init(R),x.push(b),H.traverseVisible(function(B){B.isLight&&B.layers.test(R.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),v!==H&&v.traverseVisible(function(B){B.isLight&&B.layers.test(R.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),b.setupLights(),z!==null&&z.updateLights(b.state.lightsArray),te=this.localClippingEnabled,Wt=bt.init(this.clippingPlanes,te),Wt===!0&&bt.setGlobalState(this.clippingPlanes,R),z!==null&&wt.render(b.state.shadowsArray,H,R);let O=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let dt=B.material;if(dt)if(Array.isArray(dt))for(let gt=0;gt<dt.length;gt++){let ut=dt[gt];Zo(ut,H,R,B),O.add(ut)}else Zo(dt,H,R,B),O.add(dt)}),b=x.pop(),z!==null&&z.renderEnd(),O},this.compileAsync=function(v,R,H=null){let O=this.compile(v,R,H);return new Promise(B=>{function dt(){if(O.forEach(function(gt){let xt=V.get(gt).currentProgram;(xt===void 0||xt.isReady())&&O.delete(gt)}),O.size===0){B(v);return}setTimeout(dt,10)}$t.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let ya=null;function q0(v){ya&&ya(v)}function Jo(){qn.stop()}function $o(){qn.start()}let qn=new F0;qn.setAnimationLoop(q0),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(v){ya=v,yt.setAnimationLoop(v),v===null?qn.stop():qn.start()},yt.addEventListener("sessionstart",Jo),yt.addEventListener("sessionend",$o),this.render=function(v,R){if(R!==void 0&&R.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(v,R);let H=yt.enabled===!0&&yt.isPresenting===!0,O=A!==null&&(nt===null||H)&&A.begin(L,nt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(R),R=yt.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,R,nt),b=at.get(v,x.length),b.init(R),b.state.textureUnits=X.getTextureUnits(),x.push(b),zt.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Ot.setFromProjectionMatrix(zt,Ke,R.reversedDepth),te=this.localClippingEnabled,Wt=bt.init(this.clippingPlanes,te),M=ct.get(v,C.length),M.init(),C.push(M),yt.enabled===!0&&yt.isPresenting===!0){let gt=L.xr.getDepthSensingMesh();gt!==null&&Sa(gt,R,-1/0,L.sortObjects)}Sa(v,R,0,L.sortObjects),M.finish(),z!==null&&z.updateLights(b.state.lightsArray),L.sortObjects===!0&&M.sort(_t,Pt),ae=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,ae&&Lt.addToRenderList(M,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Wt===!0&&bt.beginShadows();let B=b.state.shadowsArray;if(wt.render(B,v,R),Wt===!0&&bt.endShadows(),(O&&A.hasRenderPass())===!1){let gt=M.opaque,ut=M.transmissive;if(b.setupLights(),R.isArrayCamera){let xt=R.cameras;if(ut.length>0)for(let St=0,Dt=xt.length;St<Dt;St++){let Bt=xt[St];Qo(gt,ut,v,Bt)}ae&&Lt.render(v);for(let St=0,Dt=xt.length;St<Dt;St++){let Bt=xt[St];Ko(M,v,Bt,Bt.viewport)}}else ut.length>0&&Qo(gt,ut,v,R),ae&&Lt.render(v),Ko(M,v,R)}nt!==null&&q===0&&(X.updateMultisampleRenderTarget(nt),X.updateRenderTargetMipmap(nt)),O&&A.end(L),v.isScene===!0&&v.onAfterRender(L,v,R),ft.resetDefaultState(),W=-1,Q=null,x.pop(),x.length>0?(b=x[x.length-1],X.setTextureUnits(b.state.textureUnits),Wt===!0&&bt.setGlobalState(L.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,z!==null&&z.renderEnd()};function Sa(v,R,H,O){if(v.visible===!1)return;if(v.layers.test(R.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(R);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Ot)){O&&ge.setFromMatrixPosition(v.matrixWorld).applyMatrix4(zt);let gt=K.update(v),ut=v.material;ut.visible&&M.push(v,gt,ut,H,ge.z,null,R)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Ot))){let gt=K.update(v),ut=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ge.copy(v.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),ge.copy(gt.boundingSphere.center)),ge.applyMatrix4(v.matrixWorld).applyMatrix4(zt)),Array.isArray(ut)){let xt=gt.groups;for(let St=0,Dt=xt.length;St<Dt;St++){let Bt=xt[St],vt=ut[Bt.materialIndex];vt&&vt.visible&&M.push(v,gt,vt,H,ge.z,Bt,R)}}else ut.visible&&M.push(v,gt,ut,H,ge.z,null,R)}}let dt=v.children;for(let gt=0,ut=dt.length;gt<ut;gt++)Sa(dt[gt],R,H,O)}function Ko(v,R,H,O){let{opaque:B,transmissive:dt,transparent:gt}=v;b.setupLightsView(H),Wt===!0&&bt.setGlobalState(L.clippingPlanes,H),O&&_.viewport(tt.copy(O)),B.length>0&&bs(B,R,H),dt.length>0&&bs(dt,R,H),gt.length>0&&bs(gt,R,H),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Qo(v,R,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[O.id]===void 0){let vt=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[O.id]=new Ue(1,1,{generateMipmaps:!0,type:vt?sn:ke,minFilter:Hn,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Vt.workingColorSpace})}let dt=b.state.transmissionRenderTarget[O.id],gt=O.viewport||tt;dt.setSize(gt.z*L.transmissionResolutionScale,gt.w*L.transmissionResolutionScale);let ut=L.getRenderTarget(),xt=L.getActiveCubeFace(),St=L.getActiveMipmapLevel();L.setRenderTarget(dt),L.getClearColor(jt),Gt=L.getClearAlpha(),Gt<1&&L.setClearColor(16777215,.5),L.clear(),ae&&Lt.render(H);let Dt=L.toneMapping;L.toneMapping=tn;let Bt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),b.setupLightsView(O),Wt===!0&&bt.setGlobalState(L.clippingPlanes,O),bs(v,H,O),X.updateMultisampleRenderTarget(dt),X.updateRenderTargetMipmap(dt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let Zt=0,ue=R.length;Zt<ue;Zt++){let ie=R[Zt],{object:Qt,geometry:be,material:pt,group:Ce}=ie;if(pt.side===dn&&Qt.layers.test(O.layers)){let Ht=pt.side;pt.side=Le,pt.needsUpdate=!0,jo(Qt,H,O,be,pt,Ce),pt.side=Ht,pt.needsUpdate=!0,vt=!0}}vt===!0&&(X.updateMultisampleRenderTarget(dt),X.updateRenderTargetMipmap(dt))}L.setRenderTarget(ut,xt,St),L.setClearColor(jt,Gt),Bt!==void 0&&(O.viewport=Bt),L.toneMapping=Dt}function bs(v,R,H){let O=R.isScene===!0?R.overrideMaterial:null;for(let B=0,dt=v.length;B<dt;B++){let gt=v[B],{object:ut,geometry:xt,group:St}=gt,Dt=gt.material;Dt.allowOverride===!0&&O!==null&&(Dt=O),ut.layers.test(H.layers)&&jo(ut,R,H,xt,Dt,St)}}function jo(v,R,H,O,B,dt){z!==null&&B.isNodeMaterial&&z.setObject(v,B),v.onBeforeRender(L,R,H,O,B,dt),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(L,R,H,O,v,dt),B.transparent===!0&&B.side===dn&&B.forceSinglePass===!1?(B.side=Le,B.needsUpdate=!0,L.renderBufferDirect(H,R,O,B,v,dt),B.side=kn,B.needsUpdate=!0,L.renderBufferDirect(H,R,O,B,v,dt),B.side=dn):L.renderBufferDirect(H,R,O,B,v,dt),v.onAfterRender(L,R,H,O,B,dt)}function Ts(v,R,H){R.isScene!==!0&&(R=De);let O=V.get(v),B=b.state.lights,dt=b.state.shadowsArray,gt=B.state.version,ut=rt.getParameters(v,B.state,dt,R,H,b.state.lightProbeGridArray),xt=rt.getProgramCacheKey(ut),St=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,O.fog=R.fog;let Dt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;O.envMap=it.get(v.envMap||O.environment,Dt),O.envMapRotation=O.environment!==null&&v.envMap===null?R.environmentRotation:v.envMapRotation,St===void 0&&(v.addEventListener("dispose",rn),St=new Map,O.programs=St);let Bt=St.get(xt);if(Bt!==void 0){if(O.currentProgram===Bt&&O.lightsStateVersion===gt)return e1(v,ut),Bt}else ut.uniforms=rt.getUniforms(v),z!==null&&v.isNodeMaterial&&z.build(v,H,ut),v.onBeforeCompile(ut,L),Bt=rt.acquireProgram(ut,xt),St.set(xt,Bt),O.uniforms=ut.uniforms;let vt=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(vt.clippingPlanes=bt.uniform),e1(v,ut),O.needsLights=$0(v),O.lightsStateVersion=gt,O.needsLights&&(vt.ambientLightColor.value=B.state.ambient,vt.lightProbe.value=B.state.probe,vt.sunLights.value=B.state.sun,vt.sunLightShadows.value=B.state.sunShadow,vt.directionalLights.value=B.state.directional,vt.directionalLightShadows.value=B.state.directionalShadow,vt.spotLights.value=B.state.spot,vt.spotLightShadows.value=B.state.spotShadow,vt.rectAreaLights.value=B.state.rectArea,vt.ltc_1.value=B.state.rectAreaLTC1,vt.ltc_2.value=B.state.rectAreaLTC2,vt.pointLights.value=B.state.point,vt.pointLightShadows.value=B.state.pointShadow,vt.hemisphereLights.value=B.state.hemi,vt.sunShadowMatrix.value=B.state.sunShadowMatrix,vt.sunShadowCascade.value=B.state.sunShadowCascade,vt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,vt.spotLightMatrix.value=B.state.spotLightMatrix,vt.spotLightMap.value=B.state.spotLightMap,vt.pointShadowMatrix.value=B.state.pointShadowMatrix),O.lightProbeGrid=b.state.lightProbeGridArray.length>0,O.currentProgram=Bt,O.uniformsList=null,Bt}function t1(v){if(v.uniformsList===null){let R=v.currentProgram.getUniforms();v.uniformsList=Ui.seqWithValue(R.seq,v.uniforms)}return v.uniformsList}function e1(v,R){let H=V.get(v);H.outputColorSpace=R.outputColorSpace,H.batching=R.batching,H.batchingColor=R.batchingColor,H.instancing=R.instancing,H.instancingColor=R.instancingColor,H.instancingMorph=R.instancingMorph,H.skinning=R.skinning,H.morphTargets=R.morphTargets,H.morphNormals=R.morphNormals,H.morphColors=R.morphColors,H.morphTargetsCount=R.morphTargetsCount,H.numClippingPlanes=R.numClippingPlanes,H.numIntersection=R.numClipIntersection,H.vertexAlphas=R.vertexAlphas,H.vertexTangents=R.vertexTangents,H.toneMapping=R.toneMapping}function Y0(v,R){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(R.matrixWorld);for(let H=0,O=v.length;H<O;H++){let B=v[H];if(B.texture!==null&&B.boundingBox.containsPoint(y))return B}return null}function Z0(v,R,H,O,B){R.isScene!==!0&&(R=De),X.resetTextureUnits();let dt=R.fog,gt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?R.environment:null,ut=nt===null?L.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Vt.workingColorSpace,xt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,St=it.get(O.envMap||gt,xt),Dt=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Bt=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),vt=!!H.morphAttributes.position,Zt=!!H.morphAttributes.normal,ue=!!H.morphAttributes.color,ie=tn;O.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ie=L.toneMapping);let Qt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,be=Qt!==void 0?Qt.length:0,pt=V.get(O),Ce=b.state.lights;if(Wt===!0&&(te===!0||v!==Q)){let ne=v===Q&&O.id===W;bt.setState(O,v,ne)}let Ht=!1;O.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Ce.state.version||pt.outputColorSpace!==ut||B.isBatchedMesh&&pt.batching===!1||!B.isBatchedMesh&&pt.batching===!0||B.isBatchedMesh&&pt.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&pt.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&pt.instancing===!1||!B.isInstancedMesh&&pt.instancing===!0||B.isSkinnedMesh&&pt.skinning===!1||!B.isSkinnedMesh&&pt.skinning===!0||B.isInstancedMesh&&pt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&pt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&pt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&pt.instancingMorph===!1&&B.morphTexture!==null||pt.envMap!==St||O.fog===!0&&pt.fog!==dt||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==bt.numPlanes||pt.numIntersection!==bt.numIntersection)||pt.vertexAlphas!==Dt||pt.vertexTangents!==Bt||pt.morphTargets!==vt||pt.morphNormals!==Zt||pt.morphColors!==ue||pt.toneMapping!==ie||pt.morphTargetsCount!==be||!!pt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Ht=!0):(Ht=!0,pt.__version=O.version);let Ge=pt.currentProgram;Ht===!0&&(Ge=Ts(O,R,B),z&&O.isNodeMaterial&&z.onUpdateProgram(O,Ge,pt));let an=!1,En=!1,ri=!1,Kt=Ge.getUniforms(),ce=pt.uniforms;if(_.useProgram(Ge.program)&&(an=!0,En=!0,ri=!0),O.id!==W&&(W=O.id,En=!0),pt.needsLights){let ne=Y0(b.state.lightProbeGridArray,B);pt.lightProbeGrid!==ne&&(pt.lightProbeGrid=ne,En=!0)}if(an||Q!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Kt.setValue(P,"projectionMatrix",v.projectionMatrix),Kt.setValue(P,"viewMatrix",v.matrixWorldInverse);let wn=Kt.map.cameraPosition;wn!==void 0&&wn.setValue(P,re.setFromMatrixPosition(v.matrixWorld)),E.logarithmicDepthBuffer&&Kt.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Kt.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,En=!0,ri=!0)}if(pt.needsLights&&(Ce.state.sunShadowMap.length>0&&Kt.setValue(P,"sunShadowMap",Ce.state.sunShadowMap,X),Ce.state.directionalShadowMap.length>0&&Kt.setValue(P,"directionalShadowMap",Ce.state.directionalShadowMap,X),Ce.state.spotShadowMap.length>0&&Kt.setValue(P,"spotShadowMap",Ce.state.spotShadowMap,X),Ce.state.pointShadowMap.length>0&&Kt.setValue(P,"pointShadowMap",Ce.state.pointShadowMap,X)),B.isSkinnedMesh){Kt.setOptional(P,B,"bindMatrix"),Kt.setOptional(P,B,"bindMatrixInverse");let ne=B.skeleton;ne&&(ne.boneTexture===null&&ne.computeBoneTexture(),Kt.setValue(P,"boneTexture",ne.boneTexture,X))}B.isBatchedMesh&&(Kt.setOptional(P,B,"batchingTexture"),Kt.setValue(P,"batchingTexture",B._matricesTexture,X),Kt.setOptional(P,B,"batchingIdTexture"),Kt.setValue(P,"batchingIdTexture",B._indirectTexture,X),Kt.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&Kt.setValue(P,"batchingColorTexture",B._colorsTexture,X));let An=H.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&I.update(B,H,Ge),(En||pt.receiveShadow!==B.receiveShadow)&&(pt.receiveShadow=B.receiveShadow,Kt.setValue(P,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&R.environment!==null&&(ce.envMapIntensity.value=R.environmentIntensity),ce.dfgLUT!==void 0&&(ce.dfgLUT.value=F5()),En){if(Kt.setValue(P,"toneMappingExposure",L.toneMappingExposure),pt.needsLights&&J0(ce,ri),dt&&O.fog===!0&&Mt.refreshFogUniforms(ce,dt),Mt.refreshMaterialUniforms(ce,O,j,Y,b.state.transmissionRenderTarget[v.id]),pt.needsLights&&pt.lightProbeGrid){let ne=pt.lightProbeGrid;ce.probesSH.value=ne.texture,ce.probesMin.value.copy(ne.boundingBox.min),ce.probesMax.value.copy(ne.boundingBox.max),ce.probesResolution.value.copy(ne.resolution)}Ui.upload(P,t1(pt),ce,X)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ui.upload(P,t1(pt),ce,X),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Kt.setValue(P,"center",B.center),Kt.setValue(P,"modelViewMatrix",B.modelViewMatrix),Kt.setValue(P,"normalMatrix",B.normalMatrix),Kt.setValue(P,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){let ne=O.uniformsGroups;for(let wn=0,ai=ne.length;wn<ai;wn++){let i1=ne[wn];et.update(i1,Ge),et.bind(i1,Ge)}}return Ge}function J0(v,R){v.ambientLightColor.needsUpdate=R,v.lightProbe.needsUpdate=R,v.sunLights.needsUpdate=R,v.sunLightShadows.needsUpdate=R,v.directionalLights.needsUpdate=R,v.directionalLightShadows.needsUpdate=R,v.pointLights.needsUpdate=R,v.pointLightShadows.needsUpdate=R,v.spotLights.needsUpdate=R,v.spotLightShadows.needsUpdate=R,v.rectAreaLights.needsUpdate=R,v.hemisphereLights.needsUpdate=R}function $0(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(v,R,H){let O=V.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),V.get(v.texture).__webglTexture=R,V.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,R){let H=V.get(v);H.__webglFramebuffer=R,H.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(v,R=0,H=0){nt=v,J=R,q=H;let O=null,B=!1,dt=!1;if(v){let ut=V.get(v);if(ut.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(P.FRAMEBUFFER,ut.__webglFramebuffer),tt.copy(v.viewport),At.copy(v.scissor),Tt=v.scissorTest,_.viewport(tt),_.scissor(At),_.setScissorTest(Tt),W=-1;return}else if(ut.__webglFramebuffer===void 0)X.setupRenderTarget(v);else if(ut.__hasExternalTextures)X.rebindTextures(v,V.get(v.texture).__webglTexture,V.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Dt=v.depthTexture;if(ut.__boundDepthTexture!==Dt){if(Dt!==null&&V.has(Dt)&&(v.width!==Dt.image.width||v.height!==Dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(v)}}let xt=v.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(dt=!0);let St=V.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(St[R])?O=St[R][H]:O=St[R],B=!0):v.samples>0&&X.useMultisampledRTT(v)===!1?O=V.get(v).__webglMultisampledFramebuffer:Array.isArray(St)?O=St[H]:O=St,tt.copy(v.viewport),At.copy(v.scissor),Tt=v.scissorTest}else tt.copy(mt).multiplyScalar(j).floor(),At.copy(Ut).multiplyScalar(j).floor(),Tt=fe;if(H!==0&&(O=N),_.bindFramebuffer(P.FRAMEBUFFER,O)&&_.drawBuffers(v,O),_.viewport(tt),_.scissor(At),_.setScissorTest(Tt),B){let ut=V.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+R,ut.__webglTexture,H)}else if(dt){let ut=R;for(let xt=0;xt<v.textures.length;xt++){let St=V.get(v.textures[xt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+xt,St.__webglTexture,H,ut)}}else if(v!==null&&H!==0){let ut=V.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ut.__webglTexture,H)}W=-1};function n1(v){let R=V.get(v);return(R.__readFormat!==v.format||R.__readType!==v.type)&&(R.__readFormat=v.format,R.__readType=v.type,R.__formatReadable=E.textureFormatReadable(v.format),R.__typeReadable=E.textureTypeReadable(v.type)),R}this.readRenderTargetPixels=function(v,R,H,O,B,dt,gt,ut=0){if(!(v&&v.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt){_.bindFramebuffer(P.FRAMEBUFFER,xt);try{let St=v.textures[ut],Dt=St.format,Bt=St.type;v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ut);let vt=n1(St);if(vt.__formatReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(vt.__typeReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=v.width-O&&H>=0&&H<=v.height-B&&P.readPixels(R,H,O,B,lt.convert(Dt),lt.convert(Bt),dt)}finally{let St=nt!==null?V.get(nt).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(v,R,H,O,B,dt,gt,ut=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&gt!==void 0&&(xt=xt[gt]),xt)if(R>=0&&R<=v.width-O&&H>=0&&H<=v.height-B){_.bindFramebuffer(P.FRAMEBUFFER,xt);let St=v.textures[ut],Dt=St.format,Bt=St.type;v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ut);let vt=n1(St);if(vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Zt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Zt),P.bufferData(P.PIXEL_PACK_BUFFER,dt.byteLength,P.STREAM_READ),P.readPixels(R,H,O,B,lt.convert(Dt),lt.convert(Bt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let ue=nt!==null?V.get(nt).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,ue);let ie=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await c0(P,ie,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Zt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,dt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Zt),P.deleteSync(ie),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,R=null,H=0){let O=Math.pow(2,-H),B=Math.floor(v.image.width*O),dt=Math.floor(v.image.height*O),gt=R!==null?R.x:0,ut=R!==null?R.y:0;X.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,gt,ut,B,dt),_.unbindTexture()},this.copyTextureToTexture=function(v,R,H=null,O=null,B=0,dt=0){let gt,ut,xt,St,Dt,Bt,vt,Zt,ue,ie=v.isCompressedTexture?v.mipmaps[dt]:v.image;if(H!==null)gt=H.max.x-H.min.x,ut=H.max.y-H.min.y,xt=H.isBox3?H.max.z-H.min.z:1,St=H.min.x,Dt=H.min.y,Bt=H.isBox3?H.min.z:0;else{let ce=Math.pow(2,-B);gt=Math.floor(ie.width*ce),ut=Math.floor(ie.height*ce),v.isDataArrayTexture?xt=ie.depth:v.isData3DTexture?xt=Math.floor(ie.depth*ce):xt=1,St=0,Dt=0,Bt=0}O!==null?(vt=O.x,Zt=O.y,ue=O.z):(vt=0,Zt=0,ue=0);let Qt=lt.convert(R.format),be=lt.convert(R.type),pt;R.isData3DTexture?(X.setTexture3D(R,0),pt=P.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(X.setTexture2DArray(R,0),pt=P.TEXTURE_2D_ARRAY):(X.setTexture2D(R,0),pt=P.TEXTURE_2D),_.activeTexture(P.TEXTURE0),_.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,R.flipY),_.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),_.pixelStorei(P.UNPACK_ALIGNMENT,R.unpackAlignment);let Ce=_.getParameter(P.UNPACK_ROW_LENGTH),Ht=_.getParameter(P.UNPACK_IMAGE_HEIGHT),Ge=_.getParameter(P.UNPACK_SKIP_PIXELS),an=_.getParameter(P.UNPACK_SKIP_ROWS),En=_.getParameter(P.UNPACK_SKIP_IMAGES);_.pixelStorei(P.UNPACK_ROW_LENGTH,ie.width),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ie.height),_.pixelStorei(P.UNPACK_SKIP_PIXELS,St),_.pixelStorei(P.UNPACK_SKIP_ROWS,Dt),_.pixelStorei(P.UNPACK_SKIP_IMAGES,Bt);let ri=v.isDataArrayTexture||v.isData3DTexture,Kt=R.isDataArrayTexture||R.isData3DTexture;if(v.isDepthTexture){let ce=V.get(v),An=V.get(R),ne=V.get(ce.__renderTarget),wn=V.get(An.__renderTarget);_.bindFramebuffer(P.READ_FRAMEBUFFER,ne.__webglFramebuffer),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let ai=0;ai<xt;ai++)ri&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,V.get(v).__webglTexture,B,Bt+ai),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,V.get(R).__webglTexture,dt,ue+ai)),P.blitFramebuffer(St,Dt,gt,ut,vt,Zt,gt,ut,P.DEPTH_BUFFER_BIT,P.NEAREST);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||V.has(v)){let ce=V.get(v),An=V.get(R);_.bindFramebuffer(P.READ_FRAMEBUFFER,D),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,k);for(let ne=0;ne<xt;ne++)ri?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ce.__webglTexture,B,Bt+ne):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ce.__webglTexture,B),Kt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,An.__webglTexture,dt,ue+ne):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,An.__webglTexture,dt),B!==0?P.blitFramebuffer(St,Dt,gt,ut,vt,Zt,gt,ut,P.COLOR_BUFFER_BIT,P.NEAREST):Kt?P.copyTexSubImage3D(pt,dt,vt,Zt,ue+ne,St,Dt,gt,ut):P.copyTexSubImage2D(pt,dt,vt,Zt,St,Dt,gt,ut);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Kt?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(pt,dt,vt,Zt,ue,gt,ut,xt,Qt,be,ie.data):R.isCompressedArrayTexture?P.compressedTexSubImage3D(pt,dt,vt,Zt,ue,gt,ut,xt,Qt,ie.data):P.texSubImage3D(pt,dt,vt,Zt,ue,gt,ut,xt,Qt,be,ie):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,dt,vt,Zt,gt,ut,Qt,be,ie.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,dt,vt,Zt,ie.width,ie.height,Qt,ie.data):P.texSubImage2D(P.TEXTURE_2D,dt,vt,Zt,gt,ut,Qt,be,ie);_.pixelStorei(P.UNPACK_ROW_LENGTH,Ce),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ht),_.pixelStorei(P.UNPACK_SKIP_PIXELS,Ge),_.pixelStorei(P.UNPACK_SKIP_ROWS,an),_.pixelStorei(P.UNPACK_SKIP_IMAGES,En),dt===0&&R.generateMipmaps&&P.generateMipmap(pt),_.unbindTexture()},this.initRenderTarget=function(v){V.get(v).__webglFramebuffer===void 0&&X.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?X.setTextureCube(v,0):v.isData3DTexture?X.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?X.setTexture2DArray(v,0):X.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){J=0,q=0,nt=null,_.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Vt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Vt._getUnpackColorSpace()}};var xa=class extends ti{constructor(t){super(t),this.littleEndian=!0}load(t,e,n,s){let r=this,a=new os(r.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}_getDataView(t,e,n,s){switch(n){case"F":return s===8?t.getFloat64(e,this.littleEndian):t.getFloat32(e,this.littleEndian);case"I":return s===1?t.getInt8(e):s===2?t.getInt16(e,this.littleEndian):t.getInt32(e,this.littleEndian);case"U":return s===1?t.getUint8(e):s===2?t.getUint16(e,this.littleEndian):t.getUint32(e,this.littleEndian)}}parse(t){function e(f,p){let S=f.length,m=new Uint8Array(p),u=0,T=0,w,y,M;do if(w=f[u++],w<32){if(w++,T+w>p)throw new Error("THREE.PCDLoader: Output buffer is not large enough");if(u+w>S)throw new Error("THREE.PCDLoader: Invalid compressed data");do m[T++]=f[u++];while(--w)}else{if(y=w>>5,M=T-((w&31)<<8)-1,u>=S)throw new Error("THREE.PCDLoader: Invalid compressed data");if(y===7&&(y+=f[u++],u>=S))throw new Error("THREE.PCDLoader: Invalid compressed data");if(M-=f[u++],T+y+2>p)throw new Error("THREE.PCDLoader: Output buffer is not large enough");if(M<0)throw new Error("THREE.PCDLoader: Invalid compressed data");if(M>=T)throw new Error("THREE.PCDLoader: Invalid compressed data");do m[T++]=m[M++];while(--y+2)}while(u<S);return m}function n(f){let p={},S=new Uint8Array(f),m="",u="",T=0,w=!1,y=S.length;for(;T<y&&w===!1;){let x=String.fromCharCode(S[T++]);x===`
`||x==="\r"?(u.trim().toLowerCase().startsWith("data")&&(w=!0),u=""):u+=x,m+=x}let M=m.search(/[\r\n]DATA\s(\S*)\s/i),b=/[\r\n]DATA\s(\S*)\s/i.exec(m.slice(M-1));if(p.data=b[1],p.headerLen=b[0].length+M,p.str=m.slice(0,p.headerLen),p.str=p.str.replace(/^#.*/gm,""),p.version=/^VERSION (.*)/im.exec(p.str),p.fields=/^FIELDS (.*)/im.exec(p.str),p.size=/^SIZE (.*)/im.exec(p.str),p.type=/^TYPE (.*)/im.exec(p.str),p.count=/^COUNT (.*)/im.exec(p.str),p.width=/^WIDTH (.*)/im.exec(p.str),p.height=/^HEIGHT (.*)/im.exec(p.str),p.viewpoint=/^VIEWPOINT (.*)/im.exec(p.str),p.points=/^POINTS (.*)/im.exec(p.str),p.version!==null&&(p.version=parseFloat(p.version[1])),p.fields=p.fields!==null?p.fields[1].split(" "):[],p.type!==null&&(p.type=p.type[1].split(" ")),p.width!==null&&(p.width=parseInt(p.width[1])),p.height!==null&&(p.height=parseInt(p.height[1])),p.viewpoint!==null&&(p.viewpoint=p.viewpoint[1]),p.points!==null&&(p.points=parseInt(p.points[1],10)),p.points===null&&(p.points=p.width*p.height),p.size!==null&&(p.size=p.size[1].split(" ").map(function(x){return parseInt(x,10)})),p.count!==null)p.count=p.count[1].split(" ").map(function(x){return parseInt(x,10)});else{p.count=[];for(let x=0,A=p.fields.length;x<A;x++)p.count.push(1)}p.offset={};let C=0;for(let x=0,A=p.fields.length;x<A;x++)p.data==="ascii"?p.offset[p.fields[x]]=x:(p.offset[p.fields[x]]=C,C+=p.size[x]*p.count[x]);return p.rowSize=C,p}let s=n(t),r=[],a=[],o=[],c=[],l=[],d=new Ft;if(s.data==="ascii"){let f=s.offset,m=new TextDecoder().decode(t).slice(s.headerLen).split(`
`);for(let u=0,T=m.length;u<T;u++){if(m[u]==="")continue;let w=m[u].split(" ");if(f.x!==void 0&&(r.push(parseFloat(w[f.x])),r.push(parseFloat(w[f.y])),r.push(parseFloat(w[f.z]))),f.rgb!==void 0){let y=s.fields.findIndex(U=>U==="rgb"),M=s.type[y],b=parseFloat(w[f.rgb]),C=b;if(M==="F"){let U=new Float32Array(1);U[0]=b,C=new Int32Array(U.buffer)[0]}let x=(C>>16&255)/255,A=(C>>8&255)/255,L=(C>>0&255)/255;d.setRGB(x,A,L,ve),o.push(d.r,d.g,d.b)}f.normal_x!==void 0&&(a.push(parseFloat(w[f.normal_x])),a.push(parseFloat(w[f.normal_y])),a.push(parseFloat(w[f.normal_z]))),f.intensity!==void 0&&c.push(parseFloat(w[f.intensity])),f.label!==void 0&&l.push(parseInt(w[f.label]))}}if(s.data==="binary_compressed"){let f=new Uint32Array(t.slice(s.headerLen,s.headerLen+8)),p=f[0],S=f[1],m=e(new Uint8Array(t,s.headerLen+8,p),S),u=new DataView(m.buffer),T=s.offset;for(let w=0;w<s.points;w++){if(T.x!==void 0){let y=s.fields.indexOf("x"),M=s.fields.indexOf("y"),b=s.fields.indexOf("z");r.push(this._getDataView(u,s.points*T.x+s.size[y]*w,s.type[y],s.size[y])),r.push(this._getDataView(u,s.points*T.y+s.size[M]*w,s.type[M],s.size[M])),r.push(this._getDataView(u,s.points*T.z+s.size[b]*w,s.type[b],s.size[b]))}if(T.rgb!==void 0){let y=s.fields.indexOf("rgb"),M=u.getUint8(s.points*T.rgb+s.size[y]*w+2)/255,b=u.getUint8(s.points*T.rgb+s.size[y]*w+1)/255,C=u.getUint8(s.points*T.rgb+s.size[y]*w+0)/255;d.setRGB(M,b,C,ve),o.push(d.r,d.g,d.b)}if(T.normal_x!==void 0){let y=s.fields.indexOf("normal_x"),M=s.fields.indexOf("normal_y"),b=s.fields.indexOf("normal_z");a.push(this._getDataView(u,s.points*T.normal_x+s.size[y]*w,s.type[y],s.size[y])),a.push(this._getDataView(u,s.points*T.normal_y+s.size[M]*w,s.type[M],s.size[M])),a.push(this._getDataView(u,s.points*T.normal_z+s.size[b]*w,s.type[b],s.size[b]))}if(T.intensity!==void 0){let y=s.fields.indexOf("intensity");c.push(this._getDataView(u,s.points*T.intensity+s.size[y]*w,s.type[y],s.size[y]))}if(T.label!==void 0){let y=s.fields.indexOf("label");l.push(this._getDataView(u,s.points*T.label+s.size[y]*w,s.type[y],s.size[y]))}}}if(s.data==="binary"){let f=new DataView(t,s.headerLen),p=s.offset;for(let S=0,m=0;S<s.points;S++,m+=s.rowSize){if(p.x!==void 0){let u=s.fields.indexOf("x"),T=s.fields.indexOf("y"),w=s.fields.indexOf("z");r.push(this._getDataView(f,m+p.x,s.type[u],s.size[u])),r.push(this._getDataView(f,m+p.y,s.type[T],s.size[T])),r.push(this._getDataView(f,m+p.z,s.type[w],s.size[w]))}if(p.rgb!==void 0){let u=f.getUint8(m+p.rgb+2)/255,T=f.getUint8(m+p.rgb+1)/255,w=f.getUint8(m+p.rgb+0)/255;d.setRGB(u,T,w,ve),o.push(d.r,d.g,d.b)}if(p.normal_x!==void 0){let u=s.fields.indexOf("normal_x"),T=s.fields.indexOf("normal_y"),w=s.fields.indexOf("normal_z");a.push(this._getDataView(f,m+p.normal_x,s.type[u],s.size[u])),a.push(this._getDataView(f,m+p.normal_y,s.type[T],s.size[T])),a.push(this._getDataView(f,m+p.normal_z,s.type[w],s.size[w]))}if(p.intensity!==void 0){let u=s.fields.indexOf("intensity");c.push(this._getDataView(f,m+p.intensity,s.type[u],s.size[u]))}if(p.label!==void 0){let u=s.fields.indexOf("label");l.push(this._getDataView(f,m+p.label,s.type[u],s.size[u]))}}}let g=new Pe;r.length>0&&g.setAttribute("position",new ye(r,3)),a.length>0&&g.setAttribute("normal",new ye(a,3)),o.length>0&&g.setAttribute("color",new ye(o,3)),c.length>0&&g.setAttribute("intensity",new ye(c,1)),l.length>0&&g.setAttribute("label",new Qi(l,1)),g.computeBoundingSphere();let h=new Fn({size:.005});return o.length>0&&(h.vertexColors=!0),new jn(g,h)}};var H0=16985077240514583e-21,va=new Int16Array([14604,-11012,2218,14719,-10809,2563,14514,-11329,2563,14378,-11214,2563,15155,-10869,2908,14949,-11099,2816,15064,-11214,2837,15179,-11214,2995,15198,-11329,2908,15177,-11214,3022,15127,-11559,3022,15341,-11214,3137,15409,-11559,3091,-15040,-10984,-1347,-14949,-10984,-1050,-16099,-10869,-3359,-14489,-10934,1412,-14489,-10794,1183,-14577,-10869,1297,-16316,-10984,-3072,-14489,-10984,1457,-14604,-11099,1560,-12419,-9029,-3358,-14750,-11559,1642,-12764,-9029,-3235,-14550,-11329,1642,-8969,-10984,2985,-14719,-11486,1528,-14374,-11214,1796,-13109,-9029,-2984,-14317,-11329,1873,-14489,-11545,1757,-12994,-9144,-3042,-14144,-11329,2022,-9889,-10869,2805,-11154,-10824,2792,-13914,-11099,2287,-13559,-9260,-2957,-11021,-10869,2908,-10785,-10984,3367,-14213,-11444,1987,-14029,-9301,-2497,-10924,-10869,3107,-14039,-11329,2218,-9084,-11013,3022,-9314,-10984,2973,-9774,-11011,2908,-13454,-10869,2757,-14259,-9346,-2382,-11614,-10889,3137,-13761,-11099,2563,-10169,-11099,3137,-13224,-10785,2792,-13569,-9006,-2497,-13885,-9260,-2612,-13799,-9489,-3013,-13851,-9489,-2842,-10924,-11099,3225,-11384,-10984,3178,-13914,-11559,2325,-13569,-8938,-2382,-10297,-10869,3367,-15862,-10524,-3187,-13799,-9374,-2809,-13224,-11190,3137,-10809,-10984,3349,-11499,-11001,3252,-13609,-11674,2908,-10349,-10869,3585,-13940,-9144,-2382,-13224,-10984,2969,-14029,-9432,-2727,-11687,-10984,3367,-14259,-9605,-2612,-13815,-9029,-2152,-14057,-9144,-2268,-12649,-10984,3118,-13109,-11034,3022,-9544,-10869,2817,-15869,-10641,-3302,-12372,-10869,3252,-14259,-9365,-1807,7129,-8976,3827,-13530,-11329,2908,-13224,-11444,3266,-12649,-11071,3137,-15869,-10646,-3187,-13718,-11444,2792,7820,-9029,4e3,-12304,-11099,3366,-15447,-9949,-2152,-14144,-9719,-2520,-12994,-11214,3208,-14259,-9138,-1462,-12189,-10984,3377,-13914,-8942,-1807,-14489,-9267,-1923,-16099,-10676,-2957,-13467,-11559,3137,-12419,-11214,3324,-12994,-11329,3278,-14259,-9785,-2268,-15754,-10224,-2497,-16148,-10754,-2842,-14144,-9685,-2382,-13308,-11444,3252,7589,-9159,4057,7015,-9166,4057,-12649,-11329,3367,-14144,-8976,-1578,-15639,-10223,-2382,-14551,-9144,-1692,-14987,-9489,-2037,8165,-9275,4287,7934,-9260,4204,-14144,-9268,-1233,-14144,-9029,-1505,-14414,-9144,-1578,-14175,-9719,-2152,-15754,-10409,-2698,8542,-9029,4517,-16099,-10639,-2918,-14032,-9029,-1347,-14316,-9260,-1462,-14137,-9834,-2268,8414,-9144,4402,-15839,-10409,-2612,-13914,-9088,-888,-15439,-9834,-2037,-14029,-9029,-1208,8049,-9374,4315,7704,-9489,4352,7360,-9388,4287,6784,-9397,4287,7129,-9510,4402,-14489,-10179,-2114,-14259,-9665,-1923,-15178,-9719,-1692,8165,-9452,4402,-13904,-9029,-1117,9200,-9129,4977,-14135,-9260,-1233,8624,-9260,4673,9314,-9017,4862,8855,-9029,4885,-14604,-9045,-657,8407,-9489,4517,-14604,-8992,-888,-14562,-10179,-1923,-14144,-9260,-1061,-14374,-10084,-1923,8538,-9489,4632,-14374,-9374,-1384,-15179,-9949,-1805,8739,-9260,4870,9429,-9349,5092,-14949,-9758,-1347,-15409,-10064,-1702,8648,-9489,4747,7820,-9605,4454,-11844,-10984,3515,-14374,-9921,-1692,-15064,-9719,-1493,9314,-9144,4981,-14029,-9154,-888,-14604,-10389,-1923,-14604,-10179,-1591,8725,-9374,4862,8739,-9605,4999,7934,-9719,4530,7475,-9719,4562,-15021,-9605,-1347,9643,-9144,5092,-15754,-10754,-1621,10190,-9029,5322,-11729,-10885,3252,-14029,-9302,-312,-14639,-9489,-1002,-15409,-10409,-1719,8510,-9629,4632,9659,-9260,5210,-13741,-9029,-543,-14079,-9260,-657,-15179,-10294,-1595,9164,-9374,5092,-14374,-9452,-888,-14949,-9834,-1277,8510,-9665,4747,-14834,-9663,-1117,-14029,-9709,-2612,-15064,-10096,-1347,9623,-9374,5322,-14489,-9569,-772,-14998,-9949,-1233,10234,-9260,5517,-13709,-9029,-312,-14949,-10064,-1150,-15376,-10524,-1692,9760,-9374,5437,-15409,-10580,-1692,-14719,-9719,-854,-13967,-9260,-312,-14949,-10179,-1058,-13569,-9125,262,-14259,-9441,-543,-15064,-10294,-1274,-15294,-10545,-1462,-13454,-9108,378,-13573,-9029,33,-14882,-10179,-888,-15294,-10639,-1363,-15064,-10505,-1002,-14444,-9719,-543,-15064,-10294,-928,-13854,-9260,33,-13109,-9046,607,-13224,-8930,262,-14761,-10064,-657,-14006,-9374,-83,-14290,-9605,-312,-15042,-10409,-772,-14764,-10064,-543,-13968,-9374,33,-14973,-10524,-888,-14395,-9719,-198,-14834,-10165,-428,-14604,-10007,-198,-13339,-9287,838,-14279,-9605,-83,-14724,-10064,-312,-13599,-9260,492,-13339,-9338,952,-14890,-10294,-428,-14719,-10179,-145,-13827,-9374,378,-13224,-9340,1068,-12871,-9029,838,-14280,-9719,147,-8624,-8968,838,-13914,-9497,492,-13903,-9489,492,-15064,-10570,-428,-14842,-10294,-198,-14667,-10179,33,-13914,-9543,607,-13705,-9374,607,-12534,-9029,1122,-8165,-9029,986,-8969,-9034,952,-13605,-9374,723,-8394,-9165,1068,-12447,-9029,1183,-8739,-9141,1068,-9199,-9029,1077,-14604,-10104,262,-14277,-9834,378,-12879,-9180,1068,-14029,-9751,838,-11844,-9029,1331,-14489,-10070,378,-14355,-9949,492,-13646,-9489,952,-9451,-9029,1297,-13914,-9605,719,-13454,-9436,1068,-14949,-11674,1626,-8969,-9339,1297,-9084,-9374,1344,-14489,-10064,654,-13455,-9489,1183,-12304,-9260,1453,-12534,-9260,1420,-8739,-9466,1412,-9199,-9400,1412,-11457,-9029,1528,-13807,-9605,952,-13224,-9489,1366,-14604,-10294,656,-14604,-11789,1835,-14834,-11679,1757,-9519,-9374,1528,-8855,-9489,1456,-8010,-9029,1297,-11384,-9144,1675,-10924,-8972,1757,-14489,-10298,723,-14719,-11898,1873,-14259,-11789,1964,-14489,-11789,1900,-9084,-9553,1528,-12189,-9374,1572,-13853,-9719,1183,-11039,-9029,1790,-8739,-9605,1598,-10004,-8961,1873,-10694,-9001,1873,-14259,-10179,987,-14029,-9881,1068,-11320,-9260,1757,-9694,-9374,1757,-12074,-9445,1642,-12764,-9456,1642,-11614,-9489,1699,-10694,-9029,1921,-11071,-9144,1873,-9084,-9646,1642,-14604,-10754,1012,-14418,-10294,952,-13944,-9834,1183,-11039,-9234,1987,-13914,-9129,-657,-12534,-9474,1757,-14144,-11698,2102,-14604,-12019,1939,-11384,-9489,1809,-9429,-9698,1757,-9889,-9174,1987,-10391,-9029,1987,-8624,-9719,1782,-9084,-9722,1757,-14144,-10120,1183,-12764,-9584,1873,-13879,-9834,1297,-10809,-9184,2102,-11154,-9419,1987,-9751,-9489,1873,-14489,-12019,2010,-10119,-9119,2102,-8394,-9605,1941,-8533,-9719,1873,-9581,-9719,1873,-11614,-9748,1873,-14489,-10524,1045,-13914,-9949,1453,-10694,-9201,2218,-9795,-9489,1987,-13339,-9808,1987,-14259,-12019,2165,-11332,-9719,1987,-11729,-9719,1867,-13055,-9605,1757,-10349,-9252,2332,-8061,-9260,1757,-10119,-9260,2259,-13995,-11789,2447,-8624,-9834,1955,-9174,-9834,1873,-9845,-9489,2102,-8302,-9605,2102,-14593,-12134,1987,-6670,-9029,2016,-14821,-12249,2102,-8739,-10029,2102,-11499,-10030,2102,-12304,-9605,1944,-13300,-9719,1873,-14087,-10294,1412,-13719,-9834,1642,-10694,-9282,2332,-8624,-9949,2057,-8969,-9949,2024,-9429,-9921,1987,-11499,-9949,2041,-6670,-9136,2102,-8142,-9489,2218,-13897,-12019,2447,-7839,-9029,2102,-14374,-12134,2180,-14719,-12249,2116,-8510,-9964,2218,-12304,-9719,2074,-12534,-9623,1987,-12994,-9696,1987,-14029,-10313,1528,-6554,-9144,2070,-10579,-9345,2447,-9774,-9834,2103,-10119,-9414,2447,-10579,-9374,2491,-10004,-9489,2380,-5749,-8986,2218,-8279,-9719,2414,-13799,-10064,1778,-14029,-10409,1746,-6325,-9260,2185,-6650,-9144,2102,-9854,-9834,2218,-11154,-9949,2269,-9084,-10064,2130,-11499,-10064,2138,-14143,-10754,1757,-8165,-9535,2447,-10004,-9605,2432,-5635,-8996,2332,-10932,-9719,2447,-14175,-10639,1642,-11825,-9834,1987,-6325,-9306,2218,-8394,-9936,2332,-6209,-9253,2218,-8575,-10064,2218,-9084,-10191,2218,6726,-9029,3827,-11269,-10179,2271,-11614,-10179,2286,-10349,-9489,2633,-13722,-10179,1987,-10087,-9605,2563,-14029,-10639,1782,-12189,-9834,2152,-13224,-9838,2102,-8279,-9834,2535,-10977,-9949,2447,-8534,-10064,2332,-11039,-10179,2417,-8049,-9374,2332,-7934,-9241,2332,-12074,-10027,2332,-6784,-9374,2301,-7359,-9081,2563,-10464,-9605,2770,-12419,-9841,2218,-13109,-9880,2218,-11959,-9260,1461,-7716,-9029,2563,-8279,-9988,2677,-11021,-10179,2447,-8366,-9949,2563,-10809,-9834,2617,-9199,-10409,2409,-9774,-10409,2429,-11269,-10294,2346,-5749,-9181,2447,-13940,-10754,2102,-13477,-10179,2218,-12534,-9949,2377,-12994,-9949,2358,-6670,-9489,2352,-13724,-10409,2102,-5404,-9131,2677,-4600,-9029,2774,-4830,-8972,2677,-10234,-9719,2783,-11844,-10228,2447,-10938,-10179,2563,-8189,-9834,2677,-10752,-9834,2677,-9889,-10409,2473,-11614,-10409,2538,-7359,-9144,2614,-11959,-10092,2332,-13224,-10088,2332,-6325,-9529,2447,-4485,-9049,2792,-6670,-9605,2417,-10050,-10179,2677,-9889,-10489,2563,-10135,-9949,2792,-12074,-10179,2538,-13109,-10083,2447,-9996,-10294,2563,-5439,-9144,2677,-13799,-10754,2435,-13454,-10409,2389,-5980,-9489,2657,-8279,-10003,3022,-6670,-9719,2475,-8357,-10064,2792,-10119,-10090,2792,-8183,-9834,2908,-10464,-9834,2938,-12879,-10210,2677,-14259,-9692,147,-12879,-10106,2563,-10924,-10409,2667,-5290,-9260,2839,-7704,-9260,2843,-13281,-10294,2447,-13684,-10754,2527,-9659,-10524,2502,-5980,-9500,2677,-7359,-9374,2737,-6398,-9719,2563,-7244,-9605,2660,-12807,-10179,2677,-10234,-10179,2983,-10587,-9949,3022,-13109,-10294,2600,-8510,-10409,2843,-10866,-10409,2792,-7820,-9360,2908,-13454,-10524,2488,-4485,-9260,2985,-4600,-9151,2908,-4945,-9260,2922,-11729,-10459,2677,-8862,-10524,2563,-9774,-10639,2597,-11154,-10639,2605,-9314,-10670,2677,-11039,-10754,2702,-5569,-9374,2792,-7475,-9489,2839,-6439,-9802,2677,-7260,-9719,2677,-10349,-10064,3064,-8200,-9834,3137,-12189,-10294,2741,-13454,-10639,2564,-8394,-10221,3137,-8608,-10524,2677,-9064,-10639,2677,-10951,-10524,2677,-8739,-10731,2792,-5749,-9560,2908,-5584,-9489,2908,7015,-8993,3827,-12074,-10409,2878,-14374,-9932,378,-5864,-9605,2879,-7475,-9605,2884,-10464,-10179,3187,-8165,-9834,3335,10004,-9144,5380,-8438,-10294,3022,-8394,-10239,3252,10119,-9348,5552,-8707,-10639,2792,-10958,-10639,2792,-14489,-10754,1159,-11614,-10754,3011,-4444,-9374,3022,-4830,-9489,3088,-7694,-9489,3022,-12304,-10354,2908,-8332,-10179,3252,-12879,-10639,2873,-12994,-10639,2813,-5864,-9625,2908,-8049,-9640,2908,-10266,-10409,3137,-12879,-10760,2908,-10140,-10524,2908,-11698,-10639,2908,-11614,-10761,3022,-12074,-10524,2988,-4830,-9605,3127,-5404,-9605,3071,-5900,-9719,3022,-7589,-9612,3022,-10326,-10409,3252,-15179,-10064,-1702,-8658,-10639,3022,-14301,-9949,-1807,-11790,-10639,3022,6899,-9144,4009,-12534,-10524,3051,-8303,-10179,3482,-4600,-9719,3192,-4945,-9719,3209,-5290,-9719,3210,-7661,-9719,3137,-8510,-10409,3423,-10731,-10524,3137,-12304,-10754,3248,14719,-11375,2908,-12189,-10639,3184,-8093,-10179,3597,-4485,-9765,3252,-8279,-10268,3712,-8346,-10294,3482,-10291,-10524,3252,-12074,-10714,3252,-8455,-10524,3597,-10338,-10639,3367,-10349,-10754,3516,-8165,-10294,3724,-8551,-10639,3597,-6696,-9834,2563,-7015,-9869,2563,-6492,-9834,2677,-7130,-9949,2677,-6554,-9949,2809,-7015,-10064,2734,-6325,-9892,2908,-7015,-10196,2908,-7015,-10148,2792,-7359,-10179,2892,-7539,-9949,3022,-7410,-10064,2908,-5864,-9834,3220,-6670,-10252,3137,-7589,-10179,3108,-7015,-10294,2976,-4600,-9834,3305,-5175,-9834,3313,-5749,-9949,3343,-5973,-9949,3252,-6209,-10064,3193,-6554,-10132,3137,-4600,-10064,3486,-8049,-10026,3482,-4714,-9949,3411,-5175,-9949,3396,-7987,-9834,3367,-7172,-10409,3022,-7463,-10294,3022,-6155,-10064,3252,-7747,-10064,3252,-6784,-10452,3367,-6670,-10294,3216,-7704,-10294,3186,-6094,-10294,3549,-4591,-10064,3482,-5749,-10064,3427,-6209,-10179,3378,-7728,-10409,3252,-4714,-10064,3495,-5001,-10064,3482,-5404,-10179,3535,-5635,-10142,3482,-5980,-10173,3482,-8049,-10179,3568,-7934,-10524,3526,-6670,-10409,3457,-7244,-10524,3166,-7475,-10639,3210,-7887,-10294,3482,-7722,-10524,3252,-8031,-10294,3597,13684,-9029,2031,13655,-9029,2102,-3105,-9064,2908,13799,-9190,2102,-3335,-10064,3451,-3679,-10010,3367,-4024,-9976,3367,-2990,-9029,2883,-3679,-9029,2817,-4140,-9015,2792,13541,-9029,2332,-3450,-9281,3022,-8969,-10309,2332,-2415,-9949,3369,-2645,-9898,3367,-9753,-10294,2332,-12803,-10639,2908,-4140,-9949,3385,13454,-9029,2426,13441,-9144,2447,-3679,-9260,2988,-3910,-9168,2908,-4255,-9260,2982,-4140,-10064,3455,-1840,-9029,3188,-2415,-9260,3088,-2990,-9260,3062,-3335,-9540,3137,-1495,-9029,3271,-2120,-9144,3137,13297,-9260,2792,-2990,-9489,3130,-3565,-9489,3058,-3910,-9489,3064,13626,-9260,2332,-920,-9029,3426,-1265,-9011,3367,-1905,-9260,3252,14489,-8962,1642,-2185,-9374,3162,-2760,-9486,3137,-3069,-9489,3137,14401,-9029,1642,-4369,-9834,3225,-1495,-9260,3436,-3679,-9605,3124,-1840,-9489,3327,13119,-9029,3022,-2530,-9834,3339,-2760,-9724,3252,-3335,-9834,3299,-3679,-9834,3254,13139,-9144,3022,-1057,-9144,3482,-1380,-9260,3492,-2415,-9719,3243,-9429,-9949,2019,-2760,-9719,3248,-2990,-9719,3218,-3565,-9719,3220,-3900,-9605,3137,-4369,-9632,3137,-1150,-9605,3634,-2070,-9779,3367,-805,-9260,3607,-2070,-9658,3252,-3886,-9719,3252,-1380,-9489,3550,-1495,-9489,3506,-1725,-9828,3597,7704,-9011,3942,-1840,-9719,3460,14259,-9119,2102,14144,-9190,1987,-8396,-9949,2447,12245,-10064,4747,14144,-9260,2205,-1380,-9719,3662,12245,-9949,4747,12074,-9949,4915,11844,-8993,4402,3220,-9029,3522,2990,-9131,3597,3565,-9134,3712,2875,-9029,3490,2645,-9009,3482,3565,-9029,3622,5864,-9129,3827,2415,-9029,3621,11958,-9489,4402,115,-9105,3827,6554,-9029,3786,6094,-9029,3823,5864,-9002,3712,5635,-9018,3712,-14604,-10179,549,2070,-9029,3790,0,-9029,3798,2760,-9356,3827,575,-9304,3942,3335,-9144,3653,2990,-9144,3609,11844,-9489,4549,5635,-9029,3862,1955,-9052,3942,2814,-9260,3712,2530,-9210,3712,-657,-9260,3712,3680,-9144,3751,3220,-9260,3734,3220,-9360,3827,1725,-9069,4057,-5635,-9405,2792,11220,-9029,4977,2185,-9171,3827,230,-9144,3869,-345,-9260,3885,1927,-9374,4172,3795,-9151,3827,11729,-9552,4747,2142,-9260,3942,-6009,-9605,2792,11154,-9131,5092,11269,-9247,5092,6043,-9144,3942,3910,-9260,3974,2079,-9260,4057,1150,-9174,4057,4255,-9029,4180,2760,-9374,3848,2530,-9374,3850,11427,-9374,4977,3058,-9605,4057,-14604,-10409,783,6439,-9260,4122,6094,-9260,4116,5635,-9214,4057,1610,-9260,4239,1380,-9224,4172,-14374,-9648,-428,2875,-9489,3952,2150,-9489,4057,4369,-9029,4356,5290,-9095,4517,3565,-9595,4172,5635,-9250,4172,11729,-9562,5092,3565,-9489,4035,3335,-9489,3948,11384,-9374,5258,10809,-9172,5437,4213,-9260,4287,14374,-9988,2102,3844,-9374,4057,11384,-9347,5322,11729,-9719,5134,10694,-9128,5552,6899,-9029,3873,-14305,-9605,-2037,11154,-9247,5552,14834,-9834,2115,4600,-9062,4632,6094,-9374,4236,3830,-9489,4172,11171,-9260,5437,11959,-9786,4977,11651,-9719,5207,6209,-9552,4402,5404,-9210,4517,14259,-10524,2170,15064,-9949,2204,5059,-9029,4835,6209,-9489,4359,-14719,-10524,949,4306,-9374,4402,5059,-9128,4977,10924,-9290,5667,11844,-9834,5137,5404,-9329,4747,6344,-9605,4632,14316,-10524,2218,14834,-9867,2332,4945,-8995,4862,14259,-10409,2168,5725,-9489,4402,10809,-9374,5774,5290,-9260,4810,14571,-10179,2332,5864,-9708,4402,14604,-10294,2285,14561,-10754,2218,-10755,-10524,3022,6670,-9605,4481,14489,-10721,2332,13799,-7994,1263,14834,-10409,2463,13914,-8109,1330,13799,-8071,1297,14701,-10639,2447,13569,-8109,1449,15064,-10754,2726,14949,-10524,2627,13960,-8454,1412,13799,-8426,1528,14144,-8454,1330,14029,-8530,1412,11614,-7097,-1692,13799,-8580,1642,-3910,-9834,3311,-3910,-9949,3357,12130,-7420,-1923,11844,-7137,-1578,13569,-8461,1757,-7359,-7190,-5065,14903,-10984,2677,13390,-8339,1873,11897,-7304,-1807,14374,-8799,1717,11959,-7194,-1578,-7583,-7190,-5027,-7589,-7134,-4912,13417,-8225,2102,-7934,-7420,-4969,-8739,-7765,-4824,5635,-9260,4183,12304,-7224,-1233,12189,-7087,-1117,13706,-8915,1987,5404,-9168,4402,-7860,-7190,-4682,13339,-8454,2251,13339,-8339,2358,-8165,-7304,-4681,13569,-8895,2102,13409,-8570,2332,13528,-8915,2218,-2875,-9260,3062,13374,-8454,2447,13416,-8799,2332,13145,-8339,2677,-8739,-7473,-4337,-8739,-7605,-4567,12879,-8109,2915,-8510,-7257,-4222,-9199,-7880,-4404,-9084,-7649,-4351,13109,-8454,2852,13493,-8915,2677,-8610,-7420,-4452,-9314,-7765,-4252,-9177,-7649,-4337,13224,-8634,2908,13480,-8915,2792,13339,-8754,2792,-9199,-7535,-4117,-8855,-7268,-3877,-8394,-7108,-4107,-9516,-7765,-4107,-8779,-7420,-4222,-13569,-8990,-83,12534,-8339,3356,12189,-8189,3482,-8640,-7304,-4107,13115,-8684,3022,12074,-8125,3482,-9084,-7267,-3647,13104,-7075,262,-8855,-7326,-3992,7934,-9605,4450,-9508,-7649,-3877,12189,-8225,3495,12649,-8570,3462,13339,-7136,492,-10028,-7880,-3762,-10464,-7931,-3417,-9544,-7603,-3762,12649,-8617,3482,12620,-8570,3482,11959,-8183,3827,-8855,-7151,-3647,-9084,-7327,-3762,12764,-8735,3367,-10119,-7738,-3302,12189,-8454,3655,-8969,-7190,-3500,-9143,-7304,-3647,13684,-7420,501,12649,-8684,3488,12001,-8225,3827,-8855,-7098,-3417,-10119,-7793,-3417,-9357,-7420,-3532,12304,-8684,3619,-9314,-7254,-3072,12189,-8480,3827,-10163,-7765,-3302,-9199,-7304,-3462,12200,-8684,3712,-9429,-7267,-2957,-10305,-7765,-3187,11844,-8421,4172,-9520,-7420,-3302,12189,-8799,3827,11614,-8094,4287,-7359,-7190,-2283,11959,-8498,4057,-10389,-7765,-3072,-7015,-7135,-2268,-7475,-7190,-2251,-11154,-7959,-2612,-9544,-7376,-3072,13569,-7649,1186,-7820,-7190,-2079,11269,-8172,4632,11782,-8454,4287,-9314,-7190,-2859,-9544,-7347,-2957,11959,-8749,4172,-8624,-7197,-2497,-10694,-7722,-2497,13684,-7880,1352,11729,-8454,4432,-8855,-7147,-2727,-9324,-7190,-2727,-7129,-7301,-2037,-7589,-7313,-2037,-9702,-7420,-2842,11844,-8921,4287,13569,-7765,1329,11039,-8069,4747,6899,-7190,1669,-9659,-7515,-2382,-8624,-7159,-2612,-10694,-7781,-2612,-7244,-7391,-1923,-9199,-7304,-2637,-9701,-7420,-2727,11959,-8863,4402,13224,-7339,1642,13109,-7273,1757,13454,-7880,1457,10809,-8109,4882,-11384,-7931,-2152,-13914,-9235,-198,-8609,-7190,-2497,11614,-8464,4632,-7704,-7419,-1807,-9199,-7323,-2612,-9807,-7420,-2612,-10464,-7623,-2497,13339,-7765,1495,12994,-7282,1873,-10809,-7737,-2152,7092,-7190,1873,-9544,-9374,1543,10924,-8225,4889,-9544,-8109,-4279,11614,-8653,4747,11039,-8341,4977,-11729,-9949,2060,-6915,-7304,-1692,-9314,-7412,-2497,-9774,-7518,-2382,-10349,-7535,-2382,12764,-7190,2061,11844,-8892,4632,-10349,-7700,-2037,-11614,-7969,-1923,-8969,-7426,-2037,-10694,-8157,-3647,10809,-8339,4969,10464,-8319,4977,-7589,-7536,-1692,10694,-8399,5092,-9084,-7394,-2382,11154,-8570,4920,-9444,-7535,-2268,-2990,-7145,838,-8049,-7217,-1923,-9774,-7667,-1923,-10349,-7738,-1923,-575,-7269,1297,7284,-7190,2102,13339,-7907,1873,-8520,-7190,-2152,-9850,-7994,-4107,-11154,-7850,-2152,10579,-8225,5106,-7704,-7584,-1578,-9078,-7420,-2268,-10714,-7649,-2152,-6899,-7316,-1462,10958,-8454,4977,13364,-7880,1873,-4098,-7190,952,-6784,-7219,-1347,-9084,-7492,-1807,-8279,-7151,-2037,-10947,-7765,-2037,-10004,-8001,-3992,-8757,-7304,-2152,11269,-8799,4926,-4255,-7304,1006,-9774,-7643,-2037,-8016,-7535,-1462,13031,-7649,2102,6784,-7563,2102,-1380,-7190,1145,-1955,-7190,1156,-13569,-11329,2967,7244,-7377,2218,-8969,-7464,-1692,-10809,-7817,-1923,13224,-7912,2102,-10924,-8129,-3302,-9314,-7566,-1923,-9889,-8254,-4222,-10119,-8339,-4164,-115,-7190,1357,11200,-8799,4977,-8969,-7273,-3762,-1610,-7268,1183,7244,-7420,2265,6899,-7592,2218,12419,-7084,-888,-7704,-7917,-1002,-10349,-7775,-1807,-805,-7118,1183,-3105,-7087,1183,12419,-7190,2501,-10924,-7974,-1462,-8049,-7434,-1578,-13055,-9144,-3072,-9429,-7621,-1807,-9429,-9260,1412,-690,-7304,1288,-1380,-7420,1275,-1610,-7304,1199,-2070,-7304,1208,-4140,-7409,1183,-15639,-10409,-1749,7324,-7420,2332,-10015,-7765,-1692,7475,-7190,2382,-345,-7304,1366,12879,-7600,2332,-7820,-7967,-888,12304,-7190,2614,-3565,-7190,1342,-10809,-7978,-1347,-8739,-7431,-1462,-12189,-9077,1297,-9199,-7573,-1692,10941,-8915,5207,-11269,-8184,-3072,-10579,-8116,-3647,-10579,-8339,-3953,-1840,-7450,1297,-2645,-7262,1412,-690,-7420,1369,-1111,-7420,1297,-2185,-7357,1297,-9797,-7765,-1578,-10349,-7834,-1578,10809,-8732,5207,-8624,-7333,-1692,12768,-7535,2447,-7589,-7798,-1233,-345,-7332,1412,-6670,-7190,-796,-9336,-7649,-1578,-2760,-7190,1471,2875,-7273,1873,-8739,-7462,-1347,-3795,-9374,3034,10809,-8915,5338,-2530,-7283,1528,-1955,-7440,1412,0,-7167,1642,-10234,-7849,-1462,-3565,-7420,1496,12994,-7880,2484,-7328,-7765,-1117,-8983,-7535,-1462,-448,-7420,1528,7704,-7190,2870,-2875,-7116,1528,-10234,-7939,-1117,12994,-7980,2563,7129,-7765,2504,-10579,-8002,-3417,5749,-7116,1068,-1380,-7535,1346,-10694,-8225,-3729,-10924,-8339,-3719,-9774,-7809,-1347,7589,-7420,2664,-1725,-7521,1528,2645,-7190,1835,-7132,-7649,-888,-3450,-7304,1518,12879,-7787,2563,-8279,-7535,-1267,-6899,-7396,-772,-7960,-7880,-1002,-9199,-7672,-1117,7129,-7825,2563,-11729,-10984,3434,-9889,-7894,-1002,12009,-9719,4862,-345,-7213,2102,-11614,-8179,-2727,-1035,-7535,1387,-3910,-7535,1453,-10898,-8109,-3302,-10004,-7869,-1233,-7820,-7880,-1053,-10809,-8225,-3621,2415,-7138,1873,-690,-7497,1642,7820,-7097,3022,-2185,-7362,1642,-9199,-10754,2795,-8394,-7535,-1191,12534,-7649,2853,-2530,-7282,1183,-9314,-7729,-1002,-575,-7420,1804,11269,-7087,3022,-2645,-7150,1757,7377,-7765,2677,-9459,-7765,-1117,-838,-7535,1528,-3565,-7535,1603,-3910,-7586,1528,-10809,-8023,-3187,6325,-7171,1297,-11104,-8339,-3532,-8739,-7529,-1117,1955,-7146,1987,1495,-7190,2008,1150,-7190,2017,805,-7190,2059,-690,-7474,1757,12534,-7718,2908,-11039,-8570,-3819,-2990,-7304,1844,-9084,-10869,2908,12469,-7649,2908,-6774,-7304,-543,-7385,-7880,-772,10924,-7102,3137,7849,-7190,3137,-575,-7389,1873,7475,-7828,2792,-9429,-7776,-1002,-9832,-7880,-1002,-2875,-7190,1860,-4024,-7705,1642,-805,-7543,1642,-1265,-7576,1642,-3565,-7649,1719,-8624,-7570,-1002,-11267,-8339,-3417,-14259,-11329,1924,-2990,-7439,1873,627,-7190,2102,-345,-7190,2162,-2947,-7304,1873,12534,-7765,2956,-6875,-7420,-428,-7244,-7768,-657,11098,-7190,3252,10809,-7137,3252,7918,-7190,3252,-9712,-7880,-888,2530,-7334,1987,12657,-7994,3022,-2455,-7190,1987,-2645,-7190,2049,7639,-7765,2908,-1035,-7562,1757,-3220,-7535,1772,7810,-7420,3137,12304,-7694,3137,323,-7190,2218,-3910,-7765,1734,-7015,-7560,-428,-1265,-7514,1987,-8466,-7765,-772,6899,-7994,2614,-690,-7394,1987,-2090,-7304,1987,-2774,-7304,1987,12034,-7535,3137,-5749,-7122,-198,-5980,-7190,-126,-8739,-7733,-657,8624,-7220,3367,8043,-7190,3367,12544,-7994,3137,1495,-7304,2137,920,-7304,2132,11614,-7420,3330,-2415,-7175,2102,-9774,-7976,-543,-1035,-7543,1873,-2990,-7649,1958,-3202,-7649,1873,5980,-7190,1231,5749,-7190,1199,-8510,-7830,-657,-9569,-7880,-657,-11269,-8225,-3144,-3910,-9374,3029,-11384,-8498,-3532,-115,-7190,2379,-512,-7190,2332,-3679,-7765,1800,-4024,-7812,1757,-1035,-7466,2102,12304,-7765,3204,7129,-7994,2730,-1610,-7395,2102,-2600,-7304,2102,10587,-7190,3482,-6325,-7229,-83,-7317,-7880,-428,9200,-7364,3367,2875,-7535,2087,1495,-7420,2296,805,-7420,2242,345,-7420,2307,11039,-7304,3468,-8624,-7880,-505,2070,-7420,2326,-8624,-7938,-428,-11457,-8109,-2727,-2070,-7260,2332,-2875,-7649,2024,5635,-7304,1372,5127,-7190,1297,-10004,-7538,-2842,-11499,-8454,-3387,-345,-7190,2484,-11724,-8684,-3417,-3335,-7765,1914,-1150,-7447,2218,11692,-7535,3367,-6682,-7304,-83,-5864,-7247,33,7129,-8070,2792,-1339,-7420,2218,-1725,-7341,2218,-2398,-7304,2218,-14144,-10998,1873,9889,-7190,3674,8624,-7304,3509,11959,-8016,3482,-10004,-7649,-3157,2645,-7649,2207,1725,-7420,2351,0,-7420,2407,11039,-7313,3482,-9084,-7799,-428,-1840,-7230,2447,-11546,-8109,-2612,-7244,-7913,147,-2645,-7649,2135,9429,-7464,3482,-11614,-8454,-3339,-2990,-7765,2030,-9328,-7535,-2152,3565,-7117,1873,9314,-7578,3482,11384,-7535,3534,-6325,-7304,77,-6554,-7283,33,-5404,-7190,148,8739,-7397,3597,9990,-7190,3712,-1265,-7403,2332,-2070,-7420,2397,11844,-7994,3533,-8969,-9555,1528,7475,-8006,2908,-6899,-7507,147,10579,-7304,3659,9314,-7190,3317,690,-7682,2447,7129,-8109,2846,-345,-7420,2525,-805,-7296,2563,11614,-7722,3597,5175,-7344,1528,-2415,-7649,2250,6452,-7304,1528,8624,-7420,3649,-7055,-7649,33,11729,-7880,3576,8969,-7539,3597,-11729,-8701,-3417,-2760,-7765,2129,-5840,-7304,147,-4945,-7088,262,9889,-7304,3751,-6784,-7460,262,-1840,-7420,2533,6784,-8274,2908,10809,-7383,3712,-7086,-7535,-1117,1035,-7548,2332,690,-7539,2332,345,-7535,2356,2070,-7704,2563,-432,-7420,2563,-1380,-7284,2677,-11844,-8570,-3374,-11614,-8066,-2382,-8165,-7257,-1807,-11269,-8356,33,11614,-7880,3666,-5672,-520,-1117,11154,-7543,3712,2879,-3510,-1578,10004,-6335,1873,6094,-7420,1619,575,-8109,2865,-8969,-7094,-3187,-5864,-7448,378,-6670,-7435,378,-12764,-8862,-3072,-4987,-7420,838,3680,-6614,1301,-1725,-7420,2600,7723,-7994,3137,-1035,55,4081,1265,-7649,2453,-345,-7649,2551,-11729,-8498,-3302,-3431,4999,2677,-1840,-7535,2536,-6899,-7518,262,6784,-8454,3124,11553,-7880,3712,-6338,7414,33,-5204,-8684,2218,-4255,7257,2447,1610,9901,-2382,460,5689,2299,6554,-6269,238,-1840,-520,4587,5749,-7493,1642,5270,-7535,1642,2347,-7765,2447,460,-7765,2500,-920,-7420,2719,-1380,-7304,2743,8855,-5993,147,9084,-7806,3712,115,-8454,3213,-11646,-7994,-2152,10004,-7460,3942,-115,-7255,1528,3565,-7190,1938,2990,-7304,1925,5520,-7612,1757,7015,-8454,3210,-12764,-8799,-3004,10866,-7535,3942,9200,-7880,3672,6325,-7482,1757,-2875,-2547,1528,1200,-7649,2447,4945,-5642,-4912,-5501,-7420,492,2367,-7880,2563,11844,-6326,33,1150,-7817,2563,575,-7880,2624,-115,-7880,2600,-345,-7765,2568,-7129,-7784,262,2621,-4890,-657,11039,-7737,4057,3384,-4315,-3762,3105,-7365,1987,-11384,-8006,-2497,3565,-7304,2079,-6691,8679,-1807,-1955,-2820,1642,-5846,-7535,492,7423,-8339,3252,-1495,-7649,2700,5005,-7420,1873,-1958,5114,3137,8056,-7880,3712,-1725,-7765,2601,-13822,-11214,2447,7818,-8225,3367,9659,-6614,-2640,8855,-7831,3942,-2760,-5695,659,7873,-7880,3367,3613,-7304,2102,9850,-7649,3942,8739,-7765,3983,11064,-8570,4977,7244,-8536,3367,-5980,5114,1009,38,-2590,1068,7704,-8351,3367,-5749,-7592,607,-6136,9024,-428,-6784,-7586,607,-7244,-7970,838,-12764,-8684,-2769,1265,-5135,378,-13224,-8858,-2612,-9314,-7765,-826,-8739,-7190,-3825,10809,-6701,2563,-11384,-8124,-1117,4747,-7304,2218,5404,-7799,1987,-5241,10519,378,8624,-7765,4119,8510,-7732,4057,-12764,-9111,1068,4271,-5580,-4912,7820,-8399,3482,-8228,-7304,-1692,1955,-7190,2041,11039,-7783,4172,-5980,-7905,952,-6325,-6385,-5371,-345,11124,147,8855,-7880,3993,-2791,12014,-2152,-11844,-8308,-2842,-13454,-8915,-2431,-4908,4654,2102,4485,-7190,2419,5980,-7774,2102,9314,-8016,3712,-7178,-7880,607,-11614,-8190,-1002,-12649,-9144,1220,6209,-7765,2126,-12225,-8454,-2727,10234,-7649,4188,-1840,-175,4532,8279,-6959,3100,-11154,-7994,-1586,-4600,-7433,1068,-6554,-6305,-5257,10464,-7765,4309,-2507,2585,4057,-12829,-8684,-2612,11154,-6214,-428,9811,-7880,4057,1725,8752,-657,1725,42,492,-11844,-8277,-2727,-1495,5913,2563,6209,-7836,2218,-4600,-7420,1046,-4716,-405,2792,9587,-6155,-2037,-11499,-8530,723,8049,-8369,3712,6094,-6614,235,-5749,5459,1466,-4066,-5005,-312,-4945,-7535,1007,-5980,-7469,378,-6907,-9144,2218,10924,-7880,4384,10464,-7817,4402,-6710,-7420,262,9774,-6335,1873,5404,-8102,2447,11269,-7937,4517,-5059,-4479,-1807,6439,-7880,2302,5864,-7920,2218,-4024,-2705,-263,8510,-7880,4245,4255,-7304,2617,590,-2130,492,5635,-8225,2514,-4369,-7420,1135,-12534,-8466,-2497,5059,-7765,2405,3565,-7649,2411,7765,-8570,3597,-8076,-7420,-1578,-5290,11490,-1347,-5175,-7703,1068,-11384,-8067,-1462,-6554,-7440,378,-8279,-6816,-3762,7360,-8339,3227,-5059,-7649,1078,9314,-8200,3942,6554,-8083,2563,11384,-6665,2332,-5635,10864,-1944,6670,-7880,2361,7704,-5754,-2382,-1380,5230,2606,9363,-8225,3942,3795,7058,-4222,-14719,-9260,-743,5635,-8275,2563,5477,-8225,2563,7704,-8759,3712,9774,-7994,4116,2772,6494,-1117,3565,-7708,2447,-5453,-7765,952,-1475,-7880,2677,-7129,-7880,927,4038,-7420,2563,-13109,-8624,-2152,9429,-8339,4019,-11269,-8061,-1347,-5290,11231,-3532,1767,8794,-772,4140,-8225,3492,10694,-7871,4632,-4669,-7535,1183,-6899,-6245,-4567,-115,-5350,1036,9093,-8109,4057,-6899,-6902,-5257,10835,-7994,4747,5322,-7994,2447,1757,9024,-1002,-5404,-2360,-2446,9249,-8225,4057,7589,-8799,3727,7015,-8915,3722,-5980,-7545,492,6281,-8225,2677,2724,9024,-3187,-11959,-8281,-2612,-6955,-7649,492,3220,-8225,2713,-1725,8077,2563,-10464,-8118,-543,-11039,-8185,-543,-5749,661,-2382,-13109,-8454,-1433,8165,-8684,3920,7129,-8454,3245,6670,-6802,952,345,9139,1090,-13109,-8599,-2037,11959,-6333,723,-8279,-6920,-3992,607,975,2792,9503,-8339,4057,-11039,-8036,-1233,-2990,-8570,2592,7863,-8339,3482,3565,-8122,2792,-690,-2935,1496,-1495,11964,-657,-6209,5358,607,5749,-8428,2792,5061,-7880,2563,-6670,6182,-543,9659,-8225,4193,460,10555,-543,-1677,11439,723,-12534,-8339,-2054,-7244,-7075,-5075,-7244,-6656,-4682,-5735,630,-2268,-13595,-11559,3022,-575,8739,1987,4620,-7535,2792,-2530,12193,-772,-8279,-6886,-3877,-7129,-6614,-4617,-4830,-643,2563,2260,6494,-83,10809,-7450,3827,5175,-8159,2908,9544,-8454,4213,-8061,-9374,2563,-5713,-7420,378,-5749,2815,1564,3480,7299,-3302,-6325,-7674,723,3335,-4906,-1807,-3795,10660,723,-730,11094,607,-4054,2125,3367,3964,-8684,3597,-6393,2700,-1923,1751,630,1068,8049,-8915,3953,-7244,-6638,-4567,-7129,-8915,2296,2663,-865,-2842,2990,1361,-1692,-3795,5804,2286,-7081,-6500,-4567,-10464,-7994,-1036,-7704,-7021,-4682,-11959,-8109,-2094,2760,-8799,3198,-13799,-8861,-1692,8739,-8179,4402,-7359,-6890,-4912,-4600,-8570,2349,5290,-8305,3022,-1380,4885,2747,115,-5005,921,-10349,-8202,-198,-12304,-8218,-1807,-6209,-7765,820,3135,-8454,2908,-4715,-7765,1412,4185,-7649,2908,-11959,-8090,-2037,2446,-3510,-772,-7129,-6548,-4452,-10260,-7994,-888,-4485,-5119,-921,-6554,7926,-1233,1725,3160,1564,-5387,-2590,-2268,-7359,-6759,-4682,5265,-8339,3137,3737,-8339,3137,3947,-7880,2908,10621,-7420,3827,-1380,11974,-2382,-12304,-8194,-1692,6554,-8454,3052,5635,-8570,3042,3450,-8570,3094,603,-5925,838,-11384,-8045,-1578,-7015,-6385,-4245,-5635,11039,-1347,3795,7184,-4222,-7704,-8214,-312,-13914,-8884,-1462,-5749,10749,-3097,-8165,-7190,-4514,8739,-8367,4517,-7502,-6845,-4682,-5864,515,-1771,-12116,-8109,-1807,5059,-8230,3252,4931,-7994,3022,-8243,-6730,-3532,-11844,-8127,-1578,-9084,-7304,-3724,3105,-8684,3087,5404,-8469,3137,-12649,-8336,-1578,8464,-8570,4402,-7414,-6614,-4222,-4714,8214,1642,-7359,3735,-4077,-3679,-2082,1642,-7015,-6405,-4222,-4485,-7880,1660,-7820,-8339,-133,-9527,-8684,1183,-3679,10864,1105,-13400,-8570,-1462,5584,-8454,2908,-11384,-8364,33,-11959,-8109,-1613,4485,-7786,3252,-5553,2010,1642,-7820,-9172,2792,-7323,-7994,33,4140,-7880,3134,-8279,-8079,-543,-10234,-8079,-543,-10349,-8107,-543,-11844,-8164,-1462,-7897,-7075,-4567,5749,-8684,3160,115,4650,2677,-1128,11784,-1002,3795,-8570,3353,8510,-8799,4461,-15900,-10409,-2268,9200,-8648,4517,9429,-8761,4517,-13454,-8570,-1399,4369,-8031,3482,-13914,-8915,-1205,3105,-1097,-2842,10004,-8417,4747,-7704,-6889,-4452,-13652,-8684,-1233,-12419,-8305,-1347,-6899,8966,-2152,-10119,-8095,-428,-6702,-7190,-888,-8165,-6594,-3072,-1955,11324,981,1725,9058,-1002,-8279,-8225,-361,4836,-7994,3252,4255,-7994,3335,-8049,-7075,-4462,-7244,-6447,-3992,5980,-8706,3252,690,10885,-1807,1907,8219,-198,-13261,-8454,-1233,-920,11324,437,14029,-9374,2209,-2875,-2513,1642,4485,-8066,3597,-8855,-7031,-3072,-5351,-3050,-2268,1908,8104,-83,-12189,-8279,-1233,-3795,-8359,2332,-8691,-7994,-312,-9774,-8026,-312,-10004,-8109,-256,-11039,-8255,-312,-7704,-6790,-4222,8739,-6434,-3072,10004,-7911,4287,4369,-7994,3427,-13224,-9144,-3008,3567,-8799,3367,-7589,-6618,-3877,-2185,-2488,1757,-11039,-8438,378,3992,-8454,3482,9544,-8800,4632,11661,-7765,3597,11614,-7765,3635,-7541,-8225,147,-1265,5112,2677,-12327,-8339,-1117,-7820,-8454,66,-13587,-8799,-1002,-13454,-9199,-2957,-6094,10457,-2727,-8739,-8109,-125,-9544,-7994,-119,-7820,-6852,-4222,-6439,-6236,-3532,-10924,-8270,-198,12074,-7030,-1117,-7704,-6730,-4040,-8394,-6775,-3072,4963,-8339,3712,4485,-8225,3755,-7409,-8109,378,-1725,12028,-2382,4485,-7961,3482,13405,-8684,2563,-7704,-6614,-3716,-2070,5203,3252,9708,-8799,4747,4860,-8225,3597,-4830,-175,2680,-88,-2475,1297,-10579,-8265,-83,-9199,-8799,887,-3220,-8,4172,6554,-8915,3624,-230,1434,3599,-12994,-10320,2677,0,2930,3164,-7761,-6730,-3992,-12764,-8498,-888,-7140,6610,-1692,268,-405,3022,4830,-8306,3827,-9889,-7880,-3915,4557,-8225,3827,2645,-1440,-1730,345,-8339,3097,-7820,-6652,-3647,-7710,-6614,-3647,-8899,-8109,33,-9774,-8109,107,10179,-8570,4977,-8775,-8225,33,-10694,-8339,123,-10924,-8331,33,-7820,-8502,262,-8510,-7075,-2679,-1610,8104,2540,-6209,-6250,-3302,-8049,-6781,-3877,1150,8716,378,-7364,-8109,607,-8394,-8464,33,230,-8454,3213,-9659,-8075,147,-15524,-10179,-1708,-8855,-8282,147,-7820,-6643,-3532,-3450,12014,467,-1035,1550,3694,4024,-8799,3798,6899,-6121,-4107,-10349,-8109,-3881,3335,-5172,-1347,-6439,2819,-1462,6482,-5580,-3417,10349,-8684,5180,-13177,-8684,-657,2070,-8163,3022,-8049,-8539,147,-8510,-8570,216,7162,-7075,1873,7069,-6385,-4337,-12566,-8454,-657,-10004,-8239,262,2300,-7994,2744,1035,-8109,2777,5175,-7264,1412,-3105,-2590,1229,-575,-8109,2735,-1265,-290,4393,-7475,-6385,-3385,-6231,2585,-3417,9544,-6903,-2957,-13339,-8528,-1347,-13224,-8717,-543,12764,-6875,1528,-11729,-8147,-1462,4140,-8890,3942,-5691,5459,1528,-12764,-8539,-543,3220,-7330,1987,-230,-8385,3022,-6047,2700,838,10464,-7304,3737,7015,-6313,-4337,6784,-5865,-3762,1610,-7994,2879,-4945,-1407,-657,230,-8077,2792,5635,-5343,-3417,8279,-6155,1324,-7704,-6500,-3264,2774,7644,-1462,-8165,-8684,384,-11729,-8208,-1002,-11844,-8302,-543,-7129,8610,-4222,-4934,-5350,-1807,5290,-8799,4013,-10579,-8613,952,-4714,-8454,2185,13808,-9489,2332,-13224,-8717,-428,3335,7032,-2382,345,10864,-1101,11384,-6385,-791,10197,-8799,5207,-12189,-8385,-428,-13454,-8611,-1462,-12534,-8378,-2152,13378,-7075,838,-8739,-8713,492,-15141,-10294,-1347,8510,-7765,4123,-6340,-6385,-3187,1955,-8109,3009,-7374,-6614,-3187,-7704,-6614,-3180,-10579,-8454,568,11844,-6348,1068,6784,-6040,-4127,-11959,-8339,-395,-5290,10519,334,4600,-8522,4172,2865,-8339,2792,1035,-8225,2865,-10924,-8648,1068,-13224,-8743,-312,-7244,-8155,1528,-10042,-8339,607,13109,-7880,2234,-1840,-1325,4130,-2636,-6040,723,-12074,-8380,-312,-5864,-7994,1068,-6209,-7999,1068,-6325,-7994,1094,-4334,-4200,-543,-7244,-6696,-3072,-6325,-6405,-3072,4369,-8262,3712,-9199,-8454,640,-6752,-6614,-3072,-8042,-6614,-3072,-8279,-7248,-4567,4830,-8570,4361,-9887,-8339,723,2990,-981,-2727,1185,-8225,2908,920,-8263,2908,4797,-7535,2563,-5749,-5245,-3762,-7704,-8529,838,1380,3160,2076,12593,-6959,1873,-1840,-8339,2694,-12649,-8552,-198,5175,-8858,4287,-4369,-1844,492,6784,-6500,-4765,-12316,-8454,-198,-5864,-6225,-2727,-6325,-8066,1183,0,285,3365,-9314,-8454,762,7300,-6040,-3762,-6738,-8109,1412,3105,2355,-1466,5864,-5350,-3106,-6425,-6500,-2957,-7934,-6889,-4222,1237,9139,-657,-13457,-8915,-83,5059,-8799,4362,-12764,-8612,-83,2070,-8225,3080,-6134,5114,723,575,-8339,3045,3105,-7994,2461,4800,-7649,2677,-2530,-2752,1528,-13224,-8781,-83,11729,-6392,-428,-1801,-9144,3252,-11729,-8376,-83,-2300,4770,3888,-7475,-6730,-3006,-920,-4359,1297,-4714,515,2745,-10234,-8492,838,-10579,-8561,838,-11154,-8548,838,-4941,2585,2447,-6773,-7994,1297,-6554,-6614,-2861,-8510,-10453,3137,3220,6610,-1980,-5241,-60,1528,7205,-6040,-3877,-7589,-8454,1115,-1840,-9190,3252,-13170,-8799,33,-6014,2355,723,1610,-8225,3137,-11499,-8915,1424,-7893,-8915,1412,4600,-8901,4517,2530,-8570,3088,3105,-7420,2028,-345,-8454,3054,-575,-8532,3022,-7244,-6783,-2957,-7704,-6761,-2957,-5559,5230,1528,-9429,-8521,952,-10349,-8570,936,-6670,-5695,-4037,-252,170,3597,7820,-6323,-3762,-3487,5459,2332,-6474,-6614,-2727,5980,-5344,-2842,-5864,-8370,1412,-6209,-8339,1382,-6439,-8225,1366,-7475,-8339,1360,3680,-7535,2353,7244,-6010,-3762,-13224,-8915,224,-12994,-8769,147,-12994,-8799,215,-12189,-8491,147,-11976,-8454,147,-7888,-8799,1068,2323,-8454,3137,1035,-8570,3238,920,-8570,3217,805,-8500,3137,575,-8570,3240,-230,-8463,3137,7589,-6845,-3933,-6784,-6759,-2842,-10215,-10984,3137,-4830,-7994,1592,-2062,-2015,2218,1610,-8339,3255,-7475,-6845,-2826,6784,-6155,-4120,-7359,-8430,1873,-5635,-8277,1412,-7475,-8349,1412,-5749,-8646,1757,615,4080,2677,-6063,-6385,-2612,8165,-6112,-3187,-12994,-8819,262,-3759,1434,3367,-12879,-8763,262,-10464,-8915,1740,-10809,-8915,1681,-7820,-8877,1642,-7763,-8684,1183,-10694,-8684,1159,-3795,2355,3446,-4666,-5810,-1002,-1840,-2001,2332,1806,3160,1297,7704,-6845,-3877,-4467,2585,2792,2185,-8570,3329,1265,-8570,3356,345,-8527,3252,-6627,3735,-1578,-4589,-1670,-83,7244,-6269,-4044,7104,-5810,-3532,-14719,-11329,1490,-2645,285,4344,-2185,-5235,959,-6670,-8339,1563,-7303,-8225,1528,-7421,-8339,1528,-6209,-6500,-2496,-3910,-8129,2102,949,-520,1757,-5329,-7420,607,-12994,-8859,378,-6209,-8454,1468,2471,-8915,3482,-460,-8847,3482,12074,-6411,33,-9872,-8915,1757,-7112,-7765,262,-10299,-8684,1297,-5887,2585,1183,-6899,-6930,-2612,-7704,-6959,-2561,-7820,-6959,-2553,2070,-8570,3426,-1380,-7562,1642,6899,-5750,-3417,6706,-5695,-3417,-5455,-1900,-2382,-5440,-1210,-2268,1840,-7880,2810,3565,-8684,3243,11959,-7194,2908,7704,-5849,-2842,-5864,-6341,-2382,-8082,-7190,-4567,-8394,-6845,-3469,1955,8618,-772,1302,-5235,378,8166,-7765,3827,2185,-4774,-254,-12419,-8684,560,2251,-8915,3597,-2760,10519,857,-575,-3050,1400,-10234,-8309,262,-6554,-8915,1911,-10464,-8763,1412,-10924,-8799,1484,-11269,-8799,1430,-7589,-7075,-2398,-6784,-6918,-2497,-13779,-8915,-1117,7589,-6269,-3873,2125,1550,33,9084,-5983,147,7244,-5624,-2268,-3910,515,3403,-7173,-7994,1183,9084,-7304,3324,-5290,-8643,2102,-12074,-8589,607,-6209,-6565,-2268,-5864,-6385,-2208,-6029,-5350,-5027,2319,-8684,3367,805,-8738,3367,-3434,-7994,2102,-270,-8684,3367,-12304,-8684,693,1955,-8948,3827,-6414,-6155,-5257,-6784,-8915,2026,-9774,-8799,1564,-7704,-7057,-2382,8799,-7880,4057,8394,-6315,-3187,7589,-6167,-3762,-6209,-5951,-5372,1955,4309,699,-5058,-8339,1873,-3411,-60,4057,-6223,-6614,-2152,-5749,-6385,-2080,5059,-5440,-2382,-7015,-6312,-4337,690,-3280,451,-1610,12039,-1578,-5635,-8591,1757,-4140,11669,662,1150,-8725,3482,2990,-8482,2908,115,-8699,3482,7934,-6500,-3859,7704,-6385,-3844,-4024,-8400,2332,-5473,4540,1528,-5404,-9260,2797,-5980,-5476,-5142,-6094,-8684,1653,-5290,-175,1353,-8049,-7053,-2268,3910,-5350,-4844,-1725,-7649,2589,7820,-6242,-3647,7704,-6755,-3992,7360,-5645,-2037,-9889,-8051,-4107,-6670,4080,-1086,-3910,-8253,2218,-4140,-8339,2238,-1955,9497,1757,2236,10174,-4797,-6094,-5350,-4769,-6185,-5810,-5142,-7074,-8454,1873,-7244,-8454,1933,-5417,170,1183,7864,-6385,-3762,1955,-8719,3597,-2990,10529,838,-40,-8799,3597,-6595,-6155,-5027,-5980,-8799,1827,-6094,-8799,1785,-6398,-6730,-2152,9774,-5834,-543,-690,-7353,2102,7831,-6155,-3532,-11844,-8652,952,7934,-6614,-3873,805,-8899,3597,7360,-5755,-2957,7244,-5695,-2957,9429,-6026,492,9084,-6046,492,6899,-5625,-1923,8855,-6598,-3072,-7449,6265,-3647,-3679,-8339,2336,-6094,6494,830,8279,-5881,-2382,-5404,-6269,-1835,-6094,-6591,-1923,-10349,-8013,-888,413,285,2908,3680,5583,-3417,-7082,-8570,1987,11729,-7090,2908,11614,-7142,3022,6439,-7535,1844,-4369,-8109,1941,7015,-7304,1913,1903,-8799,3712,-2530,-1900,3231,-6139,-5465,-4912,1045,7759,1297,-8049,-6853,-3992,-6364,-6730,-2037,-4024,8909,1681,-8570,-8109,-312,-575,3160,3295,-4600,3274,2594,-4656,3274,2563,3795,4999,-2419,9251,-6614,-2842,-575,285,3754,-3450,-5235,232,-7991,-7304,-4797,-8279,-7809,-888,-7119,4540,-3072,11039,-9029,5135,-1685,3619,4172,-6325,-5732,-4912,-3335,8261,2332,-6809,4999,-1578,-1380,-8109,2722,-3795,-8454,2412,-4255,-8454,2341,-4830,-8454,2146,7129,-7258,1987,-11959,-8799,1117,1035,-6845,1794,-5264,-8915,2447,-3751,1780,3597,-3168,-5925,378,6952,-5580,-2842,-6670,-7011,-1923,-1380,-1895,3137,-1707,10289,952,8279,-6293,-3302,7667,-5810,-2727,-5519,-7429,492,1223,2585,2218,-1955,-8225,2620,-10004,-8326,607,8510,-5895,-2152,-3910,-6845,753,-11959,-8915,1227,4897,-7765,2677,-9614,-8799,1412,-3335,-8454,2497,-3679,-8464,2447,-11729,-8769,1183,-4485,11494,-3762,-4600,11482,-3762,-11844,-9260,1476,-4830,-520,2585,-7589,-8709,2102,8394,-6614,-3442,8739,-5908,-312,8510,-5933,-312,-6458,-6845,-1807,8279,-6196,-3187,7704,-5774,-2612,6784,-5611,-1578,-1610,-8225,2694,11269,-7765,3887,10694,-6461,-1462,-6135,1320,-543,-6209,-7535,478,2347,4654,-83,-4485,-8515,2332,-2148,630,4287,345,5230,2289,-3335,-8570,2567,8668,-6040,-2612,8279,-5925,-2571,-10579,-8225,-3864,-3679,-8842,2677,-4024,-8856,2677,2530,-3395,-908,-3220,7874,2521,-1610,4999,2805,11729,-7316,3137,8530,-6730,-3417,-12304,-9474,1757,-4369,-1795,838,-6439,4885,-132,-6554,-6943,-1692,-6325,-6760,-1692,8510,-6855,-3532,7875,-5810,-2497,10004,-7075,-2948,-5980,-6690,-1462,-805,-8225,2795,-1035,-8240,2792,3565,4195,-2820,-5404,-6439,-1462,-5519,-6500,-1510,-5635,-6614,-1406,-9774,-7765,-3870,8855,-6402,-2957,8510,-5983,-2497,8574,-6385,-3187,-2645,-8898,2792,-5290,-8799,2322,-2760,-8684,2657,-2875,-8684,2636,-3795,-8799,2637,-4024,-8799,2631,4699,-7304,2332,-6094,-5350,-4062,7157,-5580,-2497,-12189,-9605,1892,8510,-6614,-3224,-6325,-6792,-1578,-9889,-7994,-578,2146,1550,-83,10234,-7117,3597,-5590,-6614,-1347,501,-8799,3482,7841,-7765,3252,-1725,-8570,2861,-1955,-8570,2810,-2099,-8570,2792,8510,-5946,-2382,-460,241,3712,3105,-4378,-3647,-2265,-8915,2908,-920,11029,838,-2300,-8684,2777,-2760,-8799,2712,-2530,10634,872,-3450,-8799,2691,9284,-6730,-3072,-13799,-9090,-312,8969,-6269,-2812,-6325,-6824,-1462,9429,-6959,-3237,10004,-6574,-2382,4485,-5592,-1578,-2990,-6385,517,-6670,-5837,-4337,-6899,8371,-2268,9084,-6019,-2268,3500,6610,-2842,8969,-6511,-2957,4954,-7190,1642,-4369,-8766,2563,-15524,-10100,-2612,-115,11324,-1404,3416,6839,-2612,-6554,-6995,-1347,-5980,-6726,-1347,-5519,-6675,-1117,9774,-6113,-1692,-5141,-5119,-2842,-5980,571,-312,3105,7184,-1943,-5290,10714,147,3493,6610,-2727,-4714,11535,-2957,-1610,-8684,2956,5268,-7649,1873,-5519,-5384,-3762,-5470,-750,-772,-2415,-1349,4057,8936,-6155,-2612,-6094,-6797,-1233,7934,-8454,3622,-5635,9484,189,-5070,-6385,-1002,-6604,-5695,-4107,-6899,-6107,-3992,12649,-7114,2102,-5254,-5119,-3762,-3028,-8339,2447,2573,-5005,-543,-12416,-8799,838,-3679,6954,2779,-6272,-5580,-3992,8165,-6411,-3532,1495,-3740,114,-3679,12014,331,-3335,7131,2792,-5980,-5264,-3877,8049,-5781,-2152,7934,-5768,-2152,-2300,-8109,2477,-5001,-6385,-888,9084,-5925,-1821,-11269,-8723,1297,3728,-8225,3022,9544,-6733,-2727,-805,-8684,3147,-1035,-8713,3137,6784,-7420,1899,1911,9254,-1462,1759,9369,-1462,-6209,-6868,-1002,8510,-7994,4308,-6554,-5579,-3877,-5530,-6730,-1002,9200,-5857,-1233,-5496,9139,378,-5980,-5860,-3877,-1380,-2340,2102,-5459,-5350,-3762,6784,-5644,-772,7820,-7190,3089,575,-3280,502,4140,-7649,2859,3910,-7994,2979,9544,-6385,-2434,-690,-8779,3252,9314,-6162,-2268,-2530,-3510,1155,-8049,-6583,-3302,8510,-6363,-3302,-5635,-6814,-888,-6439,1432,-2382,10234,-6137,-1233,-5431,-5350,-3647,-6209,-5925,-3848,-6439,-6040,-3771,-6554,-5925,-3799,-4717,-6269,-657,345,6724,2506,6784,-5656,-657,-4337,-3855,-543,9200,-5925,-1622,-6371,-5810,-3762,-6554,-5695,-3728,-6325,-6123,-3647,9821,-6500,-2382,-740,-8799,3252,-9889,-10718,2792,-7820,-6574,-3187,-5655,-5580,-3647,3795,2355,-2402,-5519,-6827,-772,8049,-5841,-1002,9314,-6109,838,7475,-5746,-1578,-8624,-8892,723,-7475,3964,-3996,-6372,9254,-1347,-6611,-5925,-3762,-9314,-10202,2218,-3565,-2198,1412,9544,-6001,-1578,8624,-8684,4594,9989,-6500,-2268,-4235,10519,607,10060,-6730,-2382,10075,-6845,-2497,-5864,-6939,-657,-6094,-6981,-657,8624,-6393,-3072,-5619,-980,-2842,8165,-5844,-888,-5936,6265,1183,-4024,3274,2872,8227,-5695,-1462,7022,-5695,-1462,9008,-8454,4402,-8394,-7065,-2612,-7386,6724,-2497,-3565,-7686,1757,10040,-6500,-2152,-5635,-5810,-3577,2070,860,-588,-6325,-8109,1223,10004,-6269,-1851,10228,-6845,-2382,8279,-5853,-772,7934,-5864,-772,-6094,-7019,-543,1538,1550,1642,-6670,3872,-1807,8624,-5744,-1347,-2415,11669,913,10106,-6385,-2037,-5864,-6074,-3302,7934,-5793,-2382,-1955,5526,2677,-5290,-6882,-428,8394,-5861,-657,-5830,6265,1412,-5980,-7046,-428,8969,-6325,-2842,-5175,-6845,-405,10464,-6127,1183,3565,2218,-2037,1878,1434,1068,7015,-5699,-1233,-5749,-5972,-3417,2185,-6293,952,9774,-5977,-1233,10119,-6238,-1692,-5444,-5580,-3187,-5404,-6975,-312,-5635,-7045,-312,10004,-5902,-543,8279,-5895,-543,-5404,-3740,-2645,-14437,-10984,1528,8165,-5793,-1117,8080,-5810,-1117,805,-1210,1024,-4600,-6603,-83,-8279,-8179,-428,-1610,11403,723,11959,-9261,4287,8969,-5859,-428,8394,-5910,-428,7589,-5812,-428,8279,-6345,2102,9560,-5810,-1002,8739,-5733,-1002,-1725,6265,2783,7015,-5695,-966,10004,-6e3,-1002,-805,400,3842,-5519,-5864,-2957,-4485,-6704,147,9544,-5871,-312,9084,-5883,-312,7589,-5828,-312,-4737,-6730,-83,115,-1555,1952,8739,-5755,-888,8394,-5801,-888,10234,-6039,-888,-5635,4654,1334,-5430,-5695,-2957,10119,-5880,-198,7820,-5882,-198,-5175,-7075,83,-2875,-2069,2677,7360,-5763,-772,10004,-5951,-772,-5373,-5695,-2842,-5756,-6155,-2727,10004,-5885,-83,7934,-5915,-83,-7253,-7649,-1233,7589,-5847,-83,7475,-5835,33,1902,-750,-888,9200,-5752,-657,8969,-5790,-657,7360,-5765,-657,-5519,-5925,-2790,-5635,-6102,-2612,7704,-5888,33,-14949,-10471,-312,-7252,-8109,1412,9704,-5810,-543,-6496,9714,-3187,9314,-5770,-543,9025,-5810,-543,7558,-5810,-543,10119,-5961,-543,-5519,-5949,-2727,-5589,-6845,-772,-4485,-6913,378,7015,-5873,147,6784,-5711,-428,-5118,-5350,-2382,-5290,-5766,-2497,-5519,-6869,-657,-147,-7075,2332,-5980,-7880,921,6094,-8570,3079,8739,-5925,-251,599,2240,2908,9314,-5837,-1117,7015,-5755,-198,8969,-5915,-198,-10119,-8109,-4017,-6554,7299,-361,-3450,-6040,151,-2300,-9089,3022,-5082,-5465,-2152,485,10519,-543,1955,-6500,1225,7015,-5810,-14,9544,-5925,-1,9314,-5925,-45,-6094,1320,-1314,-4763,-1210,1068,9429,-5785,-888,7704,-5685,-1807,7015,-6064,607,9659,-5938,33,8279,-5958,33,6784,-5925,77,-5290,-5963,-2152,9429,-6081,723,8969,-6092,723,-5123,-1210,-1233,8624,-5991,147,-5343,-1095,-1807,-2530,-7190,1045,9429,-6108,838,-5864,-8613,1642,-5864,-8694,1757,9774,-5967,262,9314,-6e3,262,7015,-5605,-2152,14144,-8406,1297,7934,-5947,262,6899,-5959,262,3220,-7880,2403,7820,-5747,-1462,9200,-6137,952,8739,-6135,952,7475,-6063,952,-4881,-5350,-1578,-2760,-1464,3942,-2070,1062,4287,10119,-5978,378,8969,-6040,429,8624,-6028,378,-4714,-6709,-83,7820,-5958,378,-1955,-1900,3243,690,-8915,3599,9659,-6138,1068,8049,-6099,1068,-5059,-5925,-1640,725,7989,1528,-3679,11990,378,9659,-6008,492,4945,-5356,-4337,3220,-8109,2606,7129,-5971,492,-12419,-8487,-2612,-805,-7346,1297,-5037,-5925,-1578,-1955,1205,4272,8165,-6136,1183,7475,-6133,1183,3680,-5371,-5142,-6528,3850,-657,2875,7504,-1692,9889,-6039,607,-2760,515,4226,2990,7874,-2304,7129,-6014,607,3450,-5669,-5372,8165,-6146,1297,7704,-6133,1297,9583,-5810,-888,-5030,-6155,-1233,-13799,-11160,2563,-3155,6034,2792,7704,-6009,723,-5003,-6040,-1347,3910,-5714,-5372,-4683,-5580,-1117,-4589,-290,3022,7589,-6040,895,-4945,-6040,-1213,3300,-5695,-5257,-7820,-6565,-3417,4140,-5487,-4912,4024,-5643,-5142,9544,-7765,3655,4024,-5416,-4797,3954,-5350,-4797,6899,-6244,723,6784,-6415,723,805,-8570,3201,5059,-8644,4057,220,9369,952,-8933,-7420,-1807,4485,-5410,-4682,-10234,-9089,2102,-4542,-5695,-888,-4433,-5465,-772,7068,-6155,838,4369,-6614,1496,4714,-5526,-4682,5520,-6040,-5199,4369,-5363,-4567,-4438,-5695,-772,-4714,-6155,-795,-6670,-7313,33,6701,-5810,-3877,-6094,-5379,-4797,8855,-7994,4135,3463,7184,-3187,6720,-6269,-4452,9084,-6027,378,4140,-5260,-4452,5059,-5424,-4452,12649,-8109,3095,-12189,-8570,-3111,-6094,-7798,838,-6439,-7340,147,9889,-6301,1757,9544,-6307,1757,7704,-6291,1757,5059,-6155,-751,5787,-5465,-3762,5404,-5904,-1347,5410,-5925,-5027,-7359,-6845,-4846,9314,-6030,492,1610,5804,1099,5138,-5580,-4682,4830,-5391,-4337,-6899,-7367,-1117,10119,-6336,1873,8739,-6284,1873,7934,-6295,1873,7589,-6371,1873,7965,-5695,-1923,1314,6610,1297,9659,-6155,1203,230,-4085,820,8739,-6170,1183,7188,-6269,1183,8510,-6063,607,5404,-6028,-1117,-4945,4425,2139,-4830,11387,-198,5520,-5660,-4567,-8739,-7033,-3417,10694,-6750,2677,8855,-6306,1987,8049,-6320,1987,5476,-8339,2792,10119,-6155,1270,9084,-6203,1297,-6661,4195,-2268,5864,-5888,-4797,5520,-5595,-4452,6670,-6213,-4337,6720,-6959,1183,1380,-7487,2332,9084,-6335,2102,8049,-6375,2102,-11614,-11099,3383,-3335,-7304,1593,7589,-6179,1412,5635,-5465,-3996,11286,-9489,5552,-6378,2930,-312,5864,-5678,-4337,-4714,2815,2599,8624,-6359,2218,5884,-5695,-4337,-4024,5344,2282,9659,-6253,1528,8165,-6205,1528,690,9820,-657,-5480,-750,-657,5980,-5884,-4567,5175,-5273,-3877,10234,-6076,952,7129,-6730,1572,-7244,6034,-2515,4369,-8386,3827,6209,-5849,-772,7360,-6385,1622,-6670,9254,-1746,5864,-5506,-3877,8510,-7256,3482,-2066,-2705,1642,-6805,9254,-1923,6325,-5994,-4452,7340,-7075,2102,8739,-6269,1731,337,-1440,1642,6325,-5841,-657,6554,-6040,-4389,-10856,-10179,2677,7467,-6385,1757,-9544,-7922,-428,6094,-5631,-3992,11656,-7075,2908,7091,-6959,1642,7244,-6691,1757,-4714,-1555,-152,4714,-6040,-479,9889,-6543,2563,8049,-6575,2563,6439,-5737,-3877,6439,-5695,-3812,2109,-5465,33,7589,-6448,1987,-115,-5580,1049,-575,-8684,3197,5864,-5448,-3417,-10579,-7716,-2612,9774,-6547,2677,6325,-5646,-3762,1689,10174,-3532,9732,-6385,2102,7589,-9605,4439,9544,-6566,2792,6325,-5582,-3647,6670,-5737,-3647,-4255,-5465,-561,9889,-6447,2218,-7391,4309,-3647,2017,-865,-1002,94,-1555,1987,-12764,-9260,1299,6209,-5429,-3187,5980,-5417,-3187,-4369,-5695,-706,2645,6954,-854,9659,-6445,2332,-2530,-2015,2880,-5808,6379,1412,115,6494,2660,-14541,-9144,-1117,6327,-5465,-3187,2149,3964,492,8049,-6811,2908,10234,-6269,1693,7436,-6959,2218,-5635,6954,1426,-1725,-1210,4243,8969,-6447,2447,-6325,-6113,-5257,2350,7299,-428,5980,-5337,-2957,5290,-5265,-2957,-3894,-5350,-198,9200,-6821,3022,11745,-9605,4862,9429,-6475,2563,15179,-11329,2890,2267,7414,-312,-4749,-1785,-772,-4255,-6307,-312,2185,-520,-1334,5290,-5286,-2842,2300,170,-1625,8165,-7559,3712,819,3850,2563,10004,-6783,3137,9429,-6840,3137,8510,-6614,2649,-6670,-6269,-5157,-345,-8225,2820,-14662,-9949,-772,-4966,-1095,723,5290,-5307,-2727,-5720,1205,952,4830,-5325,-2727,-4255,-6040,-461,-9528,-8799,1297,9774,-6840,3252,12011,-9834,4862,8510,-7020,3137,10109,-6614,2677,8510,-6631,2677,-8510,-10575,3597,7015,-6385,1092,1285,6724,1297,5290,-5330,-2612,4714,-5350,-2536,-3795,-6269,-83,-5519,7069,1507,-3795,-5810,-120,-3450,-5350,215,6465,-5465,-2727,1840,9254,-1367,3910,-5810,-5475,10349,-5933,-198,9084,-6644,2792,8394,-6730,2805,8165,-6720,2792,460,4195,2757,-4778,-1210,952,5980,-5357,-2497,3712,-5005,-2268,460,-6920,1757,-3386,-5350,262,-8165,-8056,-657,-6957,-6845,-5257,9111,-6730,2908,-5519,6610,1807,357,4195,2792,-12994,-8809,-2727,-3450,-6102,147,5404,-5350,-2397,4600,-5361,-2382,4564,-5350,-2382,-3795,-5925,-127,460,-6908,1873,10234,-7075,3549,9774,-7075,3538,9544,-6713,3022,-3565,-6500,126,7589,-5872,-2957,8739,-6845,2933,11499,-8570,4845,5635,-5348,-2268,8739,-9175,4862,-3335,-6420,262,460,-6932,1987,-805,-7304,2679,4184,-6155,723,1380,-6490,1412,-3105,-5580,458,-3910,-6717,147,11039,-7075,-2205,9981,-7075,3597,9084,-6959,3084,8855,-6942,3022,1301,-1440,-198,-920,-8943,3367,5864,-5372,-2152,4255,-5318,-2152,-3105,-6385,427,-4714,7299,2148,-3335,-5769,262,4945,-5498,-2268,-82,7414,2447,-3450,-6680,262,10571,-6845,-2152,10119,-6845,3204,6325,-5443,-2037,5749,-5402,-2037,-5635,3964,1677,-8279,-7028,-2612,-4657,11439,-4682,-6094,-8225,1273,-6325,-6696,-2037,-3105,-5810,436,-9429,-10524,2506,-3450,10196,952,-6325,-5842,-5027,-3910,-6763,262,-3105,-6614,472,-2300,-7365,1412,10119,-6876,3252,9659,-6959,3363,9544,-6916,3252,-5635,-8339,1481,-2875,-5810,591,-3019,-5810,492,5749,-5440,-1923,4024,-5300,-1923,-2760,-6385,686,-6361,5230,147,-2661,-5465,723,6554,-5540,-2037,10694,-6820,-1923,-3105,-6697,492,-1955,-7420,1718,-2070,9502,1757,1871,4309,838,-2300,9484,1773,1955,10309,-5027,460,-4660,718,5290,-6312,-428,10119,-6933,3367,-2867,-5695,607,5980,-5417,-1807,5864,-5440,-1807,-2417,-5465,838,2601,-8799,3252,11114,-7075,-1807,-7934,-7018,-2382,-3335,-6845,412,-4369,11495,-4337,805,10440,-1692,4714,-5555,-1923,5175,-5695,-1815,9432,-9489,5207,-2415,-1822,3367,230,11324,-2547,8510,-7652,3942,11039,-6914,-1807,-2760,-6614,712,-2875,-6614,633,-4945,-5407,-1807,-2639,-5810,723,-2645,-5769,723,-1380,-5350,1170,-2875,-5925,581,11614,-7075,-1633,-4235,-2475,-428,3910,-5350,-1589,4105,-4890,-3417,-14259,-9498,-2152,-3335,-6959,492,-2300,9361,1873,-1265,-1670,3492,-1380,6175,2677,-6554,-5925,-4646,5059,-5703,-1807,11300,-6959,-1692,-12074,-8426,-83,5197,-5695,-1807,4600,-5580,-1749,10713,-6614,-1807,10694,-6500,-1609,4945,-6293,-198,-1205,-5350,1183,-3105,6954,2865,-1955,-6155,954,-5519,11123,-1692,-1725,-5580,1076,1621,7759,607,-5635,-5646,-3762,-2875,6839,2933,4140,-4890,-3412,10694,-6614,-1811,-5265,-4429,-2612,-1495,-8684,2983,7244,-5925,461,-4140,-6959,712,-13569,-9837,1873,5404,-5710,-1692,-7015,4540,-2785,4485,-5556,-1692,3777,6724,-3877,2731,6034,-888,10832,-6614,-1692,-2795,-6730,723,-2300,-6614,909,-2415,-6614,879,-2465,-6500,838,-6899,2010,-3532,-1955,-5695,997,-2070,-5695,958,-1035,-6155,1091,8631,-7880,4287,-6231,2700,-3072,9774,-6633,2908,-5626,-5580,-3762,-2415,6839,2992,-2875,-7075,816,-5078,-3855,-1578,-2875,-6897,723,-4003,-6845,723,10694,-6281,-1233,11499,-6959,-1457,-3105,-8684,2653,11384,-6845,-1387,-1380,-8915,3253,7360,-6614,1897,-1265,-6614,1035,1578,4425,1528,-1495,-6500,1022,-4945,8334,1414,-1955,-6534,952,-1955,-6614,959,5520,-5746,-1578,4945,-5767,-1578,6325,-5492,-1578,6094,-5461,-1578,-3064,-5350,492,-1150,-5810,1134,-1495,-5810,1090,5864,-5554,-1578,4830,-6309,33,-1610,-1247,4172,-3335,-7043,838,-2760,-6998,838,-3565,-6919,838,-4003,-6959,838,-5519,11439,-1299,3910,-5451,-1347,10464,-6097,-888,-4369,10445,607,11052,-6614,-1462,10464,-6232,-1347,-6683,4309,-2037,-1265,-6730,1045,4830,-5777,-1462,-7095,-9029,2332,-1265,-5580,1154,-7244,-7923,378,5864,-5632,-1462,1840,9758,-2497,-2e3,-6040,952,1036,3505,2447,11959,-7026,-1233,-5175,11288,-3302,-3335,1665,3755,-1380,-6845,1051,-2185,-6959,1038,-2528,-6959,952,-3880,-6959,952,-6699,5575,-888,-2567,-3050,1297,-16061,-10639,-2957,10349,-6059,-772,10694,-6269,-1181,2875,4972,-1578,5515,-5810,-1462,5059,-5842,-1462,-2300,-7284,1183,4714,-5761,-1347,5980,-5639,-1347,-5059,-10179,3526,-2300,7069,2985,-1150,-5925,1115,-1495,-5973,1068,-1495,-7075,1101,10999,-8109,4747,5749,-6594,147,-5081,-6155,-1347,12189,-7075,-1066,4369,-5235,-4372,-7359,-6423,-3532,11039,-6385,-1098,-6668,4195,-2037,-1495,-6959,1069,10722,-6269,-1117,5635,-6803,607,5635,-6232,-657,-2575,-7304,1297,6670,-6155,-4273,5290,-5915,-1347,5175,-5910,-1347,-7562,7529,-4682,4024,-5516,-1233,-9429,-7420,-3430,-3450,-6963,1183,-460,9484,1453,12189,-7042,-1002,12002,-6959,-1002,7589,-7447,2677,11270,-6614,-1117,-2990,-2139,2332,5059,-5925,-1280,5635,-5915,-1233,2530,7240,-772,1265,-6269,696,-3450,-7075,1387,6674,-5580,-1117,6110,-5695,-1117,10610,-8454,5207,-2645,1550,4147,12102,-6845,-888,11384,-6526,-888,10694,-6175,-888,5091,-6269,-428,5520,-6040,-1069,8510,-6696,-3302,10809,-6109,-428,3105,-5286,-888,-14834,-10826,838,10004,-6938,-2727,-3450,-1798,2908,2530,-6269,789,-6243,1320,-2037,-8969,-10533,2563,-15179,-10179,-1595,5290,-5265,-3532,4369,-5714,-1002,-5547,-8339,1528,3450,-5465,-931,4312,-5695,-1002,4830,-6202,-312,12419,-6977,-772,-4369,3274,2713,-5290,5575,1900,11499,-6638,-888,2760,-6329,838,-5404,-3510,-2526,5661,-6040,-1002,5059,-6039,-1002,-9185,-7420,-3877,1035,3735,2413,-2875,-4774,623,7244,-6094,-3877,-10842,-9719,2563,-6303,6610,378,-2518,3964,4747,-3220,-7056,1528,1265,3619,2186,956,6034,1987,2574,-865,-1807,6339,-5695,-888,-2070,3735,4588,4884,-6269,-198,-6554,-6527,-3072,12074,-6749,-657,9928,-7535,3942,9774,-6086,838,-2047,-4315,1183,1725,9714,-2087,1495,-6359,952,3105,-5427,-657,-8049,-8799,570,1380,1665,1920,4485,-6315,723,4519,-5810,-888,2592,-5350,-312,5749,-6446,-198,5404,-6424,-198,1150,-6455,838,-3105,-7070,1642,-5924,1205,378,6209,-9116,3942,3450,-5562,-772,1971,1550,838,12425,-6959,-543,-7448,7529,-3647,11321,-6269,-543,10958,-6155,-543,12074,-6730,-604,-6670,-10111,2908,3335,-2820,-1883,-3795,11706,-2612,-115,-6269,1074,7782,-7190,3022,5520,-6782,607,3450,-6322,838,1610,2585,1686,5980,-6500,-47,5864,-6493,-83,5290,-6435,-83,6325,-5810,-709,4600,-5887,-772,3220,8116,-3302,2530,-6385,957,-6670,4309,-1508,732,-6500,952,690,-6455,952,575,-6385,969,2300,-5350,-116,986,975,2332,-7524,6379,-3877,-6325,-5580,-4637,4060,-5695,-657,12323,-6845,-428,12649,-6966,-428,11039,-6155,-391,-10349,-9144,2190,11729,-6315,-198,2875,-5465,-392,-7589,-6836,-4567,6209,-6455,33,4945,-6388,33,805,1205,2598,2530,-6461,1068,4024,-8252,3367,-2845,-5810,607,-5749,-6040,-3143,-5894,-6155,-3072,-230,-6385,1094,3149,5230,-1923,-14029,-11099,2147,7704,-6040,-3441,12304,-6762,-312,4902,-6155,-543,12534,-6876,-312,690,-6730,1077,460,-6614,1082,230,-6614,1122,-230,-6730,1161,-460,10519,578,-345,-6614,1117,-575,-6730,1107,946,-1785,147,-7244,-7714,-1002,-14422,-9260,-2037,-5281,-3740,-2268,2300,-6540,1183,6282,-6500,147,4830,-6385,200,8510,-6187,1412,-6784,-10216,3022,6439,-5810,-568,4369,-5828,-543,4600,-6269,351,-3335,-8915,2776,-7244,-6959,-2671,3335,-5715,-428,-2990,-1998,2677,230,-6759,1183,12272,-6730,-312,-11039,-8043,-2957,1067,-6614,1183,2645,-5580,-122,5864,-6614,185,4369,-6187,607,1725,-6475,1297,1380,-6450,1297,-4106,-2015,723,13051,-7075,33,1610,-5350,236,2598,4770,-1002,3046,5230,-1692,2990,-8622,3022,4485,-6167,378,1955,-6845,1606,-5864,6265,1328,4830,-6269,-106,-460,-6919,1183,12172,-6500,-83,6094,-5394,-2037,1983,975,492,11499,-6229,-83,2990,-5580,-342,690,-6819,1297,2415,-6614,1304,3105,-6951,1642,12304,-6574,147,1395,-405,838,1150,-6561,1412,-6094,-6464,-2382,5864,-7026,952,5404,-7075,1059,10234,-5925,-107,7475,-5695,-2644,4830,-6470,378,1380,-6500,1429,-690,8449,2189,5864,-8638,3137,-7129,-6500,-4336,4462,-5925,-312,-5231,-1325,-1692,-2415,6610,2992,-920,8531,2218,11499,-6210,33,-6325,5920,336,-4024,9369,1367,11269,-6088,378,575,-6886,1297,805,-6765,1412,2760,-6730,1449,-6670,-6614,-3001,2070,-6730,1441,920,-6678,1412,2070,-5465,48,1265,-6559,1528,-2760,745,4192,11817,-6269,147,2990,-6606,1297,6094,-7075,1078,2013,4999,492,-5635,-8109,1228,12376,-6614,33,6209,-6730,460,-9544,-8515,1068,5749,-6691,378,5404,-6634,378,1412,10289,-2727,-2530,8334,2451,3946,-5810,-198,3565,-6203,607,3220,-6215,607,2875,-5709,-83,651,-6845,1412,2875,-6813,1528,2530,-6794,1528,2070,-6784,1528,2300,1895,-574,805,-6752,1528,12419,-6595,378,1495,-6730,1579,11925,-9029,4287,10464,-5930,-83,6264,-5465,-1692,12074,-6416,262,11729,-6245,262,-5952,630,-2842,-1150,-7304,2724,4714,-6455,607,5081,-7075,1183,2783,-3970,-1117,5404,-6730,581,401,3390,2908,4945,-6614,596,-6554,-7987,1183,4140,-5845,-83,3680,-5908,-83,-7129,-7686,-428,-5427,-980,-1923,3680,-6269,788,-3897,-6040,-198,115,-8799,3603,4686,-5465,-4567,2760,-6845,1556,2645,-6845,1571,2415,-6845,1588,2300,-5417,-83,690,-6795,1642,-10261,-10524,3137,345,-2935,700,345,7069,2305,-1495,-7765,2691,-7129,5920,-1742,12189,-6481,378,11614,-6178,378,-173,-3165,1068,12534,-6671,262,10924,-6029,33,12994,-6959,402,12879,-6790,378,-1495,-2071,2908,690,-5350,702,-230,-7765,2563,10490,-6040,-657,10123,-5925,-657,2109,-8684,3482,-345,4425,2889,2724,-5810,147,2070,-5695,183,920,-6747,1757,11269,-6078,723,4255,-8776,4057,8394,-9374,4455,2415,-6889,1642,2185,-6845,1607,617,-6845,1642,-1339,5689,2563,-2482,-7649,2218,11614,-6167,492,-7015,5851,-1462,3680,-5983,147,3450,-6023,147,3105,-6040,238,12994,-6959,557,2530,-7075,1785,-4945,8219,1485,-6670,-5925,-3710,6209,-6845,695,-1610,-1991,3022,3565,-6836,1528,3105,-6824,1528,6575,-6730,723,-4421,-5925,-657,-7704,-9029,2604,-50,8909,1642,11844,-9038,4402,2351,-5810,262,1610,-5695,331,11844,-6276,607,1789,1090,1183,-6094,5920,963,3450,-6063,262,-2760,3045,4136,2275,-5580,33,1610,-6959,1757,1265,-6888,1757,2645,-1332,-1923,-1265,1895,3925,3910,-5956,262,12994,-6909,607,1035,-5465,548,1762,170,607,1265,-7075,1894,11959,-6358,838,6209,-6856,723,3612,-6385,952,3335,-6392,952,6670,-6716,838,-7129,-7708,-198,2300,-7420,2167,-1955,-8799,2976,13339,-7075,799,13109,-7023,723,4255,-6052,378,3335,-6119,378,3220,-6118,378,13013,-6959,723,5175,-8016,2677,345,-6933,1873,4140,-6040,470,11269,-6103,952,10924,-6064,952,-11844,-8127,-2268,-2760,6034,2974,2990,-5946,147,2875,-5925,184,11154,-6057,378,-15729,-10524,-1807,0,-8454,3167,10579,-5963,378,8279,-5970,147,17,-7075,1987,-4873,7184,2102,11614,-6172,838,-5474,-5465,-3417,266,6954,2447,-5635,-7954,1068,6094,-6959,855,5404,-6959,909,6554,-6845,879,5091,-6845,838,3910,-6385,1101,3680,-6442,1068,115,-5354,952,4830,-6730,937,12879,-6856,838,1035,-5695,584,3680,-6155,539,1150,-8540,3252,460,-6959,2024,8165,-5951,33,11269,-6128,1068,8071,-8570,3827,-4485,-7860,1642,-3632,-6269,33,717,-5580,723,575,-5465,779,6924,-8339,3022,12304,-6500,968,18,-7075,2102,1265,-6155,637,12649,-6768,952,-3220,-1382,3827,4140,-6385,1242,6325,-5553,-3532,987,-5695,607,920,-5810,666,4776,-7075,1757,920,-8127,2792,12074,-8225,3641,-3679,9369,1536,3910,-6155,682,-5930,5459,1183,9774,-8727,4747,1725,-5925,401,455,-5465,838,230,-5465,925,11154,-6021,607,11729,-7420,3194,2415,-6155,720,-4714,-6518,-312,1265,4540,1926,4255,-6449,1297,6670,-6889,1068,6670,-5616,-888,12419,-6614,1115,-1035,-3280,1535,4369,-6838,1987,-460,-6845,1158,-2990,-7699,1987,-1840,-2063,2218,-6899,-6090,-4107,11959,-6385,1194,14972,-9949,2332,2530,-6040,534,2415,-5951,492,-4140,-1512,2677,4714,-8034,3597,10579,-5997,723,10464,-6040,807,12926,-6845,1297,2070,-6123,838,742,-6155,838,5864,-5394,-3187,-13767,-11329,2563,4140,-6500,1476,404,1090,3022,3795,-6614,1357,3450,-6744,1412,-6027,4654,952,11499,-6246,1297,11154,-6174,1297,-690,-8651,3137,-3795,-7075,1108,3910,-7075,2029,-1725,-5465,1084,-5599,-405,147,-11729,-8079,-1692,9774,-8897,4977,2185,-5988,607,1150,-5987,607,-6209,-6342,-3072,12887,-6959,1412,-5229,-980,147,-11269,-9001,1642,12667,-6730,1297,12534,-6697,1297,-5059,6265,2268,-8165,-6898,-3992,-460,9254,1625,12534,-7031,-543,6209,-5477,-3417,2565,4540,-1002,238,-5695,952,-5250,-4429,-2497,10119,-6040,-1042,-8855,-7041,-3187,841,-5925,723,690,-5925,799,-1840,-8454,2752,-5791,6954,1183,12785,-6845,1412,115,6724,2653,5635,-8454,2861,12304,-6614,1449,1437,6724,1068,-4255,55,3340,-1610,-6968,1068,-115,-8746,3482,-230,-8764,3482,6209,-5482,-3302,7704,-5810,-2690,10464,-6217,1528,7129,-5724,-1578,-575,-5695,1127,-1610,-4660,1215,-5399,-1440,-2152,690,-6062,838,-3335,-8249,2332,6670,-5742,-428,-4369,8104,1908,12465,-6730,1528,-3781,-6845,607,3105,-6845,1549,-4255,6034,2372,-6885,-6155,-3647,10694,-6251,1642,10464,-6252,1642,-3120,-6730,492,-6163,6494,723,11154,-6354,1757,1265,-1095,3,10119,-7841,4287,0,-6040,1049,-5749,7184,1132,-4239,7874,2102,-4255,7989,2040,-6103,8334,-312,4732,-6959,1642,-920,400,3910,-1035,8219,2384,3680,-6882,1642,3105,-6959,1650,-7359,6724,-2334,-4495,-6040,-657,-460,-5925,1094,-575,-5925,1106,6670,-5841,-198,12534,-6885,1757,-6961,3619,-3532,12189,-6730,1825,4658,-6959,1757,-6670,-6446,-3302,6670,-7238,1528,-2070,12089,-312,-5298,-1555,-1923,4600,-5967,-543,5980,-8799,3348,12419,-6838,1873,12304,-6802,1873,345,9024,1203,2070,10273,-5142,11959,-6632,1873,-12649,-8360,-1923,12189,-6906,-772,1495,-8067,2908,11269,-6462,1987,-690,3274,3282,2457,4309,-428,4024,-6776,1757,12649,-7075,2039,2300,10163,-5027,-2070,2700,4146,1725,-1325,-551,-11844,-11099,3568,4526,-6959,1987,11175,-6500,2102,10694,-6441,2102,12074,-6773,2102,2405,9944,-4912,5111,-8454,3597,-3335,-6997,1068,4140,-6875,1987,10464,-6500,2240,10349,-6500,2280,4369,-6932,2102,12551,-7075,2218,11499,-6845,-1311,3335,-6746,1412,11614,-6664,2218,11344,-6614,2218,-1455,12014,-888,5025,-8570,3827,12280,-6959,2332,11959,-6845,2384,-12994,-8422,-1462,12419,-6944,-543,-15131,-10409,-1117,11066,-6614,2332,10924,-6614,2376,12074,-6910,2447,-8510,-7118,-3992,-3335,8449,2248,11269,-6784,2563,12074,-6975,2563,11959,-6959,2614,11499,-6845,2580,2100,1205,33,10924,-6730,2576,10694,-6692,2563,26,-6269,1068,-1495,7529,2857,0,8564,1820,11729,-6959,2720,-13112,-8570,-1117,10593,-6730,2677,5114,-8799,4287,-6094,-6959,-716,-3886,9254,1528,6275,-5925,-4452,11154,-6902,2792,10924,-6864,2792,10809,-6845,2802,10464,-6828,2908,8510,-7340,3597,-4140,6954,2650,4485,-7306,2677,10579,-6870,2908,10924,-7075,3101,11269,-6155,-12,-6554,-5580,-3853,-6670,-5580,-3751,690,-1722,607,3105,-4680,-4682,3220,-4684,-4567,2990,-4774,-4737,-3388,3850,3827,3247,-4774,-4682,-11729,-8915,-3589,-8969,-7880,-253,-6918,-6269,-4567,-6899,-7649,701,3439,-4890,-4567,-3105,-7994,2182,2760,2806,-1692,1725,-290,-276,5980,-8454,2948,8739,-5993,147,3680,-4774,-4370,-2990,-8109,2298,3450,-4851,-4452,9889,-7133,-3072,3220,-4506,-4222,1380,-6614,1544,3335,-4578,-4222,2990,-3896,-3072,9429,-6845,-3002,4076,-5235,-4452,3682,-5005,-4452,-1610,-2475,1884,9659,-8799,4676,3565,-4798,-4222,-920,1550,3662,3680,-4647,-4107,3450,-3510,-3353,3220,-4315,-3924,-4005,-6614,33,4369,-5119,-4239,3795,-4613,-3992,3450,-3459,-3302,3396,-4429,-3877,9774,-6845,3257,1035,8185,1068,-1840,11324,944,-286,1090,3597,-7055,7874,-2497,-5980,-8454,1456,4255,-5350,-4614,-5749,5389,1412,4066,-4774,-3877,7129,-7075,1818,2530,1665,-1120,4369,-5141,-4107,8358,-8684,4172,1725,-8958,3942,4024,-4660,-3754,3450,-4382,-3647,3220,4309,-2320,4255,-4939,-3762,115,-7036,1873,-7015,-6269,-3788,-3795,-7012,1068,4369,-5005,-3928,-6670,-6040,-3792,4255,-5005,-3912,-5025,1550,2332,3680,-4583,-3647,1725,-62,378,3105,-4412,-3532,3335,-4315,-3461,4290,-4890,-3647,-2645,6149,2973,4600,-5119,-3872,3915,-4660,-3532,3910,-4660,-3515,3220,-4429,-3386,3091,-4200,-3417,8165,-5958,147,4140,-4863,-3532,4752,-5119,-3762,3778,-4660,-3417,3148,-4429,-3302,3286,3619,-2268,-11269,-8101,-1117,3565,-4185,-3302,14029,-8390,1297,4024,-4890,-3423,690,-8225,2941,3220,-3947,-3072,-4600,10289,601,-14843,-10179,-772,3696,-4429,-3187,3495,-4429,-3187,3105,-4200,-3128,2185,8909,-1341,3910,-4779,-3302,3190,-3970,-2957,3220,-3815,-2727,4746,-7994,3367,4573,-5005,-3532,2415,8525,-1233,3795,-4696,-2957,3220,-4444,-3072,4255,-4990,-3187,-11499,-8189,-888,-1380,-2301,2218,3910,-4855,-3187,3187,-3855,-2842,-6262,1780,-2268,4714,-5088,-3417,7397,-5810,-3187,2875,-3631,-1578,3680,-4485,-2957,3105,-4085,-2894,3335,-3798,-2497,3220,-3753,-2497,-2070,6494,2958,5268,-5235,-3302,-10119,-10294,2837,-7359,-7198,-2268,-1380,-7470,2102,-10004,-8225,192,3220,-4492,-2842,-3335,7299,2731,3335,-3666,-2382,9889,-5933,-1002,3827,-4774,-2957,4492,-5005,-3187,4140,-5005,-3129,-2300,-2189,2447,-1610,7529,2873,-5404,-5235,-3920,-6279,4770,378,-7874,-8684,723,1610,-6272,723,9095,-5925,-1807,4255,-5034,-3072,2765,-3510,-1233,-14489,-9122,-1347,-14604,-9088,-1347,-2300,-2162,2563,3220,-4441,-2612,-5749,-5235,-3753,3098,-3740,-2152,9774,-5864,-772,4485,-5148,-2957,6388,-6500,262,-9889,-7803,-1462,2729,-3625,-1117,3615,-4660,-2612,-14604,-9094,-1233,-5519,-461,262,720,4885,2218,9659,-5810,-601,4255,-5119,-2874,2645,-3674,-1002,2631,-3625,-1002,7360,-5823,-3302,-7834,-9144,2447,10349,-6172,-1233,4255,-5161,-2727,4140,-5119,-2727,2760,-3855,-1075,-5519,-6614,-1250,-1035,-2820,1631,-4255,-4429,-475,4255,-5207,-2612,4024,-5119,-2558,-5225,-4660,-3072,-5749,9139,-19,2856,-3970,-1233,3193,-4429,-2152,3009,-3855,-1923,3087,-4085,-2152,-5864,-9374,2683,3981,-5119,-2497,6439,-8109,2570,2760,-4052,-1117,6899,-7515,2102,-5175,-4774,-3014,3023,-3970,-1807,10004,-8454,4763,-7704,-9164,2792,-5749,11002,-3647,4162,-5235,-2382,4024,-5168,-2382,2956,-4315,-1462,-5749,9024,-32,2415,-3855,-673,-1610,9139,2001,-11988,-9029,1297,11971,-6385,1183,345,4080,2819,-3390,2585,3712,5980,-8252,2677,-3910,-4429,-106,1553,975,1528,-7204,3850,-3647,3680,-5005,-2217,3335,-6959,1659,-3396,2470,3827,2185,-3510,-444,-115,-4315,1017,2530,-3970,-809,2046,745,-888,-5370,-4085,-2727,3076,-4200,-1807,3795,-4543,-3877,3385,-4890,-1923,3335,-4890,-1843,3335,-4847,-1923,-3565,12150,-1117,-3220,-7765,1948,3680,-5034,-2152,2312,-3740,-543,2034,630,-888,-5175,-4660,-2573,-5167,-4890,-2727,2474,-1670,-1462,3016,1895,-1233,-1840,9944,1343,6784,-7002,1297,-5175,-4464,-2037,2645,1579,-1233,2714,-4429,-1117,-1840,8909,2153,1955,-3510,-218,-5191,-4660,-2497,2300,-3970,-593,-5519,5114,1547,-5193,-4774,-2612,-6920,8794,-3187,-5257,-3510,-2037,3210,-4890,-1692,3686,-5119,-1923,-3565,-3280,203,-1495,-2225,2332,-3679,12010,-1233,-2300,-3740,1234,-5175,-4457,-1923,-3910,8104,2148,2990,-4545,-1544,1791,-3510,-83,-5300,-3625,-2268,2185,-4085,-476,-12419,-8371,-1002,2530,-2130,-1358,-13645,-8915,-772,3683,-8915,3597,-8855,-7381,-1923,-10909,-9144,1987,1840,-3855,-137,-4600,-6996,378,2070,10318,-5372,-7624,-7075,-4797,-5193,-3510,-1807,4485,-6500,1126,-2990,9024,2039,3759,-9029,3712,-9314,-8915,1095,9774,-5821,-428,3105,-4890,-1436,-10119,-8638,1297,3335,7644,-2873,-8739,-7354,-1807,-5452,-1440,-2382,1265,-3625,234,-1955,-8109,2578,-12207,-8339,-772,2070,7069,85,-4162,-5005,-428,2195,-4200,-428,2760,-4905,-888,4600,-5405,-4452,3335,-5030,-1578,-3795,-1210,3667,-3910,7874,2259,-3795,-4774,-13,-5099,-1210,-657,2415,-4315,-657,-3450,-6614,243,2235,10174,-5257,-4024,-5005,-270,-5059,-5005,-2212,2760,-4890,-908,2990,-4890,-1233,4335,-7304,2677,-3450,-4660,251,1436,-3740,147,1265,-3740,245,-7778,-8684,1068,1761,-3970,-83,11384,-6269,1426,2070,-4509,-198,-115,9714,926,-5048,-5119,-2152,2645,-4774,-821,2645,-4943,-657,1071,-6614,1068,1035,-6634,1068,-6506,2010,-2727,10716,-6500,-1578,1227,-3740,262,-8219,-6614,-3302,3910,-5810,-243,-6040,975,-1117,-3220,-4660,405,-4945,-4774,-1853,4369,-7535,2946,-3795,-5005,-30,3370,-5235,-1233,7820,-7890,3252,2345,-4545,-543,-7244,4063,-3417,524,10059,-772,-2530,-4429,892,2106,-4429,-312,5864,-6555,33,-5002,-4545,-1692,2875,-5161,-772,-6899,-7828,1068,-7134,4425,-3072,3236,-5235,-1117,2875,-5005,-918,-5212,-4200,-1923,-7057,6149,-1462,-4255,11642,-2612,805,-3855,484,5864,-7765,2060,-8279,-7726,-1002,1297,-4085,262,-5059,-3740,-1507,-8510,-7483,-1233,8394,-5951,-83,-4369,7181,2447,-5059,-3970,-1540,3105,-5210,-1002,-3594,-5005,147,-6006,170,-888,2875,-5119,-825,2300,-4951,-312,8969,-6155,976,-7169,4195,-3187,460,-3740,657,-14196,-9260,-2268,-2245,-4429,1068,1895,-4429,-83,3105,7069,-1909,-4316,-3510,-543,2990,-8853,3252,920,-3970,436,2746,-5235,-543,3047,-5235,-888,-4558,-4429,-888,4255,-7461,2792,2834,-5119,-772,5635,-7420,1528,345,-3740,724,-7082,4080,-3072,-1955,3151,4172,3105,6954,-1892,-7188,6610,-1807,-13224,-8554,-1692,805,-3970,500,-5635,8909,321,-4140,-3510,-339,2799,6724,-1233,-4843,-4774,-1462,-6261,2700,-2957,5749,-5544,-4107,-4969,-3970,-1347,-4853,-5235,-1578,-194,-3510,1068,10349,-5984,-312,1927,-4545,-83,-2185,12014,-2865,-7025,4195,-2957,-3105,12175,-198,1544,-4429,147,604,-3970,607,-11384,-10937,3022,-4140,-1460,2908,-7475,6839,-2780,-4844,-3740,-1117,7475,-6013,-3647,-2723,-4774,723,1265,-5925,548,14374,-9223,1757,3305,-4660,-4337,-4945,-4315,-1433,-4485,-3510,-713,-4830,-5247,-1462,8049,-5982,-3072,-4255,-3740,-440,-460,-3625,1264,-2990,-5119,555,-29,-3740,952,1725,-4660,69,1265,-4315,289,920,6610,1839,869,6724,1873,11269,-6289,1528,-1840,-4660,1159,-2190,-4545,1068,6899,-5538,-2612,-6784,4425,-2579,1610,1895,1558,-6795,4770,-1923,1265,-6040,588,3029,5114,-1692,4140,-7699,2908,-3220,6610,2891,1969,-4774,-83,575,-4200,628,-4582,-4660,-1002,1102,-4429,378,863,-4315,492,2990,-6274,723,-4651,-3625,-888,-1495,-4660,1233,-2070,-4890,1041,-2300,-4822,952,-2351,-3165,1412,-9774,-10434,2447,-4714,-3970,-982,8279,-6e3,-2842,-4024,-3740,-235,-4714,-5005,-1257,-460,-3740,1252,1797,-4890,33,230,-4200,820,-4830,11251,378,3335,-3937,-3072,885,-4429,492,5059,-5119,-3479,-3723,-3510,33,-9429,-7965,-83,-9611,-7994,-198,-2061,-4774,1068,-7129,-6590,-4567,-115,10059,472,-4140,-5465,-446,12598,-7420,2563,12764,-6794,1297,204,-4200,838,-690,11439,-267,6209,-5628,-1117,-4444,-4660,-772,-4196,11439,838,575,-4315,637,-9066,-7075,-2842,-3220,6379,2871,2415,-6045,607,7934,-6007,-3187,10242,-7190,3712,1725,10174,-3646,-4535,-3970,-772,-3795,-3625,-33,2070,-5122,-83,-12150,-8225,-2268,-2202,-5235,952,13339,-9068,2908,0,-4278,952,-4378,-4660,-657,-4093,-3970,-312,-1955,-5119,1049,-2235,-5119,952,-6209,-8915,1899,-6899,-6123,-3762,-460,-3970,1230,-4735,-4200,-1002,-4369,-4890,-693,-3335,-3560,378,-4369,-3855,-577,-4485,-5235,-870,-3735,-3740,33,-3728,-3625,33,1725,-5119,123,7475,-6269,1530,-6595,5689,-657,-3986,-3855,-198,-1227,-405,4402,7015,-5925,-3818,575,-4545,655,11269,-7190,3203,-1892,-5119,1068,-1840,-5119,1082,583,2470,2908,3450,-7994,2620,8855,-6269,1741,-12879,-8593,-428,5858,-6040,-4912,9622,-6155,1183,3910,-8031,3022,-575,-4200,1255,-5404,11353,-1692,8739,-7649,3915,2090,-405,-1233,345,-4545,770,-4830,11523,-1692,-1265,-5119,1203,5351,-7765,1987,-4485,-4200,-707,-3316,-1440,3712,1035,-5137,492,-6094,-8404,1412,206,-4545,838,214,-4660,838,-5980,-8532,1528,-3565,-7570,1642,-345,11554,-1329,-4369,-8270,2102,-2618,11899,723,-7752,-9029,2447,-3910,-4085,-109,-115,-4660,1012,-115,-4545,1012,-3565,-3855,183,-460,-4366,1183,-575,-4315,1234,920,-5119,554,-3879,-4085,-83,-5404,-1095,-1870,-345,-4545,1120,-3749,-4315,33,345,-5167,838,14,-4774,952,-501,-4545,1183,-3679,-4200,84,460,-5119,774,1616,285,1183,10119,-7307,3827,5404,-5283,-3072,-1150,11863,-2612,-398,-1210,3367,-3274,-4315,378,-2875,-3855,713,-5465,-6269,-1923,-2848,-3970,723,12189,-6893,2218,-2990,-4200,576,-10119,-7994,-797,12879,-8014,2792,-2185,-3419,1412,-1725,9369,1857,-2300,-3625,1265,-1495,-3510,1521,-4255,-7075,724,-690,-3625,1354,-2185,-3625,1327,-2484,-3855,1068,700,860,2677,-920,-3708,1412,-10809,-8133,-657,-11154,-8142,-772,-2298,-3855,1183,-2530,-4213,952,-9659,-7396,-2727,9200,-5967,-1807,-1725,-3970,1362,-1955,-3976,1297,-6252,3619,492,-1840,-4315,1243,-1380,-3855,1431,1610,4080,1616,-1955,-4085,1273,-2190,-4085,1183,-805,-4264,1297,9659,-6127,-1923,-4830,-1479,-312,-10924,-10792,3022,-1725,-4085,1331,-5404,414,1297,2167,1320,-1347,-5468,-1670,-2612,-5490,-1785,-2497,-690,7069,2888,2168,1320,-1117,-5443,-1670,-2382,-5429,-1785,-2268,-6772,9024,-3877,14604,-11125,2218,-6502,3160,-1462,-3910,-8225,2190,10161,-7649,4172,-5404,400,1282,-5448,-2360,-2612,11154,-7649,3926,-5437,-2360,-2497,249,9944,147,-5317,-2015,-2037,-5513,-60,838,-5519,-60,821,10809,-6269,-1064,-2293,4999,3597,-258,2930,3252,-3450,-8454,2477,-5059,-1670,-1368,-3565,-6557,147,-6746,6839,-428,-5310,-2360,-2037,1626,6494,838,-6367,8334,-1117,-1955,-8358,2677,-1150,-4315,1329,-5225,-2130,-1807,-5174,-2130,-1692,-9314,-10354,2332,-4760,-1670,-772,-4221,-8109,1987,2415,-1670,-1320,1955,10263,-3877,-12764,-8445,-1233,-4737,-1670,-657,-4830,-2015,-1045,2415,-7765,2409,-6387,8104,-1002,2594,-1785,-1692,-4683,11439,-4107,-4644,-1785,-543,2875,-4948,-1002,2875,-2418,-1923,2779,-2015,-1692,11269,-6147,33,-3910,-6787,492,-3910,-3855,-113,-10654,-7880,-3072,-7934,-7247,-4797,3393,-3740,-2727,-4600,-1670,-236,1955,9369,-1754,-5290,-1095,-1750,-4738,-2360,-1002,-4820,11439,-3762,-7125,3160,-4107,5868,-7994,2332,-4485,-2031,-543,2070,-4890,-143,-4853,11439,-3647,-3910,11612,-1923,-4439,-2015,-428,2644,-2245,-1578,2303,-1785,-1117,-3450,12159,-1117,-220,-5925,1068,-12189,-8339,-738,-4451,-1900,-312,2451,-2130,-1233,-4888,7529,1873,-7475,4195,-3815,-4571,-1670,147,5290,-5444,-2268,-5404,-3129,-2497,-13109,-8690,-2268,-5864,-8502,1528,1530,-865,-428,6899,-6071,492,-4407,-1785,262,1610,-1670,-392,10234,-7994,4480,2481,-2245,-1233,-7386,6265,-2842,-12074,-9620,1873,6899,-8225,2887,2232,-2130,-888,3277,-3050,-3302,1380,-1670,-207,1265,-1670,-115,-5404,-3050,-2528,-3621,-2820,262,-13888,-9144,-428,2143,-2130,-772,-4485,-1714,607,11039,-6070,33,345,-4200,759,-9889,-8167,147,-2185,4654,3868,2044,-2130,-657,1955,-2130,-564,5059,-5592,-2037,-6402,2930,-543,-5368,-3050,-2382,-14604,-9301,-1923,-7129,-6779,-2957,-5277,-2590,-1923,-6720,-5925,-3992,1929,-2130,-543,3450,-6500,1104,-6344,2470,-1117,-5519,-658,-312,2087,-2245,-657,690,-7351,2218,-3565,-750,4076,10004,-7190,-3128,3220,-3050,-2889,1265,-1947,-83,3298,-3165,-3072,-127,-1325,2908,624,1090,2792,-5709,-6959,-543,-5266,-2820,-1923,-3450,3933,3597,-3493,-7190,1412,-5182,-2475,-1692,1035,-1900,71,1874,-2360,-428,1840,-2252,-428,-13224,-8827,-2497,-3335,-8934,2792,5520,-6514,33,3450,-5068,-1692,920,-3534,378,-7258,5575,-2727,2614,5230,-772,-10119,-7616,-2957,805,-1900,302,-6206,2585,-3072,1610,-2360,-218,-5059,-2475,-1443,-5059,-2590,-1450,1380,-2245,-95,-10306,-7649,-2842,1035,-2130,111,8624,-6385,2278,-5676,8564,492,-4369,-2130,-383,230,-1325,1946,-1752,-2130,2447,-5749,8419,492,2727,-2820,-1578,-13454,-8799,-2163,-5068,-2820,-1462,-7516,-7994,-657,-12764,-9976,2447,-10234,-7579,-2268,-4266,-2935,-543,1035,-2384,147,-2070,-6155,924,-6709,4195,-1692,5059,-6299,-312,-7516,6954,-4107,3076,-3395,-2382,3795,-5921,33,-4008,-2590,-198,-4063,-2705,-312,805,-2245,295,345,-5350,866,2645,5114,-915,-10119,-7635,-2152,541,-1670,952,-1265,-4424,1297,-4357,-3050,-657,1495,3619,1902,69,6610,2677,2916,-3395,-1692,7129,-5960,-3762,-6209,-5850,-5257,-3921,-2590,-83,-31,-7075,2218,3105,-3280,-2212,-7244,-8059,1183,-4734,-2590,-1002,-4714,-2590,-975,3078,-2590,-1692,-4361,-1900,33,64,-1325,2332,-4215,-2245,-198,-115,-9144,3878,-1328,9944,1297,-1150,7874,2608,2533,4080,-1002,-6149,1895,-657,3335,-3280,-2115,3220,-3280,-2114,-3984,-2475,-83,-805,-7391,2102,-4024,11961,-657,-4627,-2590,-888,-345,-8430,3022,4485,-6385,903,-4154,-3050,-428,3105,-2621,-1578,575,-2360,503,1446,-6385,1068,2415,4999,-461,-4140,-2247,-83,-3822,-2705,33,-7612,6724,-4567,2530,-2820,-1107,-5059,-3280,-1482,-5488,-1095,-2382,2824,-3280,-1578,2816,-3165,-1578,-3850,-2935,-83,3105,2585,-1622,-4180,-3165,-428,-4600,-3395,-835,-4255,-1973,262,-4638,-4890,-1117,8855,-9281,4977,5059,-5695,-4965,2339,-2590,-888,1806,3505,1297,2185,5114,-29,-6593,7184,-312,-5175,-9640,3137,2415,-2705,-960,-12534,-10236,2792,1265,10404,-2740,-4075,-2130,262,2990,-3205,-1923,-345,11589,-1578,-4369,-2590,-627,-4078,-3395,-312,-179,-3395,1068,-4369,-1845,607,3450,-5810,-5512,-3910,-2360,239,-460,3505,3191,2300,4999,-254,2645,-3050,-1190,2185,-2475,-708,-5905,400,147,428,1780,3022,2743,-3165,-1347,-3450,-2537,723,-4736,-2935,-1002,-13599,-8915,-543,0,-8632,3367,-7244,9537,-2957,7934,-5902,-312,-7244,-7894,33,-3565,-2738,378,2601,-3050,-1117,3335,-4637,-2268,-4890,-865,1412,2070,-2475,-584,-14096,-11444,2102,2680,-3165,-1233,2645,-3165,-1154,-5659,1205,1068,-4369,-1706,952,-7129,6149,-1661,5520,-6959,878,-3450,-2705,533,-5135,-2245,-1578,-6091,-6040,-3647,2300,-5593,33,-7022,1780,-3647,-3105,-1440,3838,-4714,-3280,-969,-3626,-3050,147,2645,-3307,-1117,-4255,-1817,952,-3679,-3280,76,-115,2470,3282,-3412,-2590,723,-4945,-6563,-543,-3335,-2512,1068,-5220,-4660,-2957,4255,-5543,-1462,115,-1907,1528,-4626,-3165,-888,2117,-2820,-543,-3220,-1325,3944,-6670,9235,-3762,-3450,-3050,352,-3309,-2705,723,-3910,-290,3796,-5171,-405,1412,-10809,-7994,-1273,-3283,-2935,607,-3565,-2452,723,-11729,-8079,-2268,-4714,-1213,1297,-4639,-1325,1297,2300,-2935,-739,1725,-2475,-261,-3077,-6614,492,-115,-6959,1246,-3428,-3050,378,-4140,-1900,1003,-1150,-7354,2447,-13684,-8842,-1117,-1495,9473,1757,-4600,-1440,1205,-4255,-1651,1528,-4024,-2015,1026,1966,-2245,-543,-4369,-3280,-616,-4140,-1785,1385,2240,-2935,-657,2185,-2935,-585,1676,-2590,-198,3565,-5873,-198,-5519,11134,-3072,-230,-1885,1987,-4255,3194,2792,-3380,-3395,378,-42,-1670,2102,2372,-3165,-772,-3220,-2590,1030,-1035,9254,1841,2160,-3050,-543,-115,-1928,1873,1610,-2705,-122,8969,-8034,4057,2530,4279,-772,0,2010,3294,-115,-1690,2218,-3105,-2620,1183,-920,-7765,2709,-11039,-8717,1297,1320,-2590,33,2070,-3060,-428,-3137,-3050,723,-230,-2130,1690,-4926,-750,1528,5980,-6415,-198,1610,-2820,-99,-4140,-1670,1718,-4024,-1900,1295,7198,-5695,-3072,6784,-5556,-2957,-230,-1687,2332,-2875,-2705,1253,2215,-3280,-543,1610,-7304,2162,-5741,1090,838,9463,-6959,3252,6439,-8915,3622,6784,-5794,-198,1955,-3395,-238,-4024,-1652,1987,-1610,-520,4563,-2875,-882,4402,-5175,-3280,-1719,-5677,8219,723,-2875,-2630,1412,8855,-6024,378,-7832,-9029,1987,-3910,-1785,1834,-6325,3274,-238,11614,-6918,2677,-6670,-7853,1068,-2875,-3209,952,-1380,11324,714,-1610,-2492,1873,-2300,-2508,1873,-2530,-2521,1873,-7105,4885,-2727,-4255,4425,2428,7360,-7075,2141,3516,5230,-2268,575,-6866,1642,-2875,-750,4437,-2760,-2634,1528,-2185,-2705,1640,3450,-5703,-5487,-460,-1735,2563,-3652,-2130,1528,-2760,-3234,1068,-3142,-2475,1412,10579,-9260,5612,-6865,6379,-772,-2415,-5810,826,7405,-7075,2218,-5059,-1170,33,3795,-6500,1211,4140,-6783,1873,-12571,-8454,-2382,-2415,-2935,1436,3565,-5417,-1117,-2645,-2590,1708,-7523,6610,-4107,8279,-5944,-198,9390,-6385,-2612,3731,-4429,-3302,-12157,-8339,-2612,2300,-7649,2379,-2300,3850,4724,-634,-1900,2447,-4022,-1670,2102,-767,-2590,1757,-805,-2590,1776,7360,-8830,3712,-2070,-2594,1757,-4440,1895,3022,-4485,-5350,-896,6716,-7535,1987,-1380,-2705,1789,3712,-7880,2677,-2760,-8490,2563,367,-5235,838,9084,-5962,-1923,-3335,-2245,1648,10119,-6500,-2076,-2959,-2475,1642,460,-2848,607,-1437,-2590,1873,-1150,-2935,1656,-7244,-6607,-4452,-7359,-6641,-4452,-12951,-9144,952,-4024,-1602,2447,-9544,-7420,-2530,4945,-8043,3137,4883,-7994,3137,9774,-6168,-1807,14374,-9949,2038,356,-2475,723,-3105,-2338,1757,-3220,-2287,1757,-4631,-5005,-1117,-1380,-2474,1757,7129,-5695,-3109,-2185,-2360,1797,7129,-5889,262,-2780,-2475,1757,-2990,-2360,1833,345,-2862,723,-2415,-3345,1297,345,-1670,1324,-5593,55,723,-3679,-1967,1987,115,6839,2632,-1955,-2133,1987,2699,-4890,-772,2346,-1670,-1233,9429,-5901,-1347,-1150,-3050,1608,-6670,7915,-1462,3565,-4540,-2842,-6362,2700,-2382,-1209,-8454,2908,1551,-290,492,12910,-7765,2447,-805,-3280,1463,230,10792,-312,115,10925,-312,-2070,-3395,1463,12691,-7765,2792,-1035,-2475,1934,-1725,-2475,1875,-2300,12070,-2382,1927,1434,952,1610,-5810,374,-2185,-2015,2165,-12649,-8320,-1462,1380,-6385,794,1035,-3280,286,-4628,-5235,-1117,451,6149,2447,-2192,-2130,2102,1840,-7249,2102,-2530,11669,936,-3762,-1785,2447,-1495,-3050,1662,5520,-7649,1801,115,-2590,993,-10924,-7871,-1807,-1479,-2245,1987,-1840,-2245,1987,-3220,-2084,2218,-3795,-1670,2657,1035,4999,1952,-14259,-9260,-1576,-1610,-3395,1545,7589,-6845,2459,-5527,-1210,-2612,4600,-6500,912,5864,-5486,-3647,-1380,-2402,1987,828,-3280,378,-805,-2130,2271,8855,-6683,2792,460,-2965,607,-1035,-1601,3482,-11614,-8339,-205,-7244,8597,-4452,9659,-6352,1987,3960,-5005,-4222,7475,-7075,2317,-3910,2930,3003,-2165,-3740,1297,-805,-2015,2394,9889,-6169,1297,9774,-6017,-1347,-3450,-1956,2332,9429,-5800,-1002,575,-3165,495,3828,-5005,-4222,2583,-635,-2037,-3910,-7907,1873,9429,-6192,1297,-2665,-2360,2102,-4485,-6385,-345,-5321,-4200,-2612,-2066,-2130,2332,-7934,-6905,-2727,-33,-2820,1068,-115,-2820,1114,2929,-3165,-1807,2433,-405,-1692,-4255,3602,2677,-3450,11899,-1384,-11844,-8039,-1807,-7472,-9260,2792,-2070,-2317,2218,402,-3280,607,8049,-5728,-1923,-2415,12158,-1117,-3165,-3280,607,-2185,-2015,2531,-13569,-11287,3137,-5749,6587,1412,-889,-5350,1183,3057,6265,-1578,-1253,-2130,2447,10637,-6269,-1233,920,9742,-1002,-2875,-2150,2447,-1725,-2130,2578,10579,-6309,-1347,4600,-9260,4780,11729,-6204,607,-4714,-520,2779,-2875,-2099,2563,-1114,-2015,2563,-2014,-2015,2563,9200,-5707,-888,-2185,-1900,2586,-6209,-7225,-83,-5686,6610,1528,-115,-3050,1012,-3679,-1621,3137,-1725,-2136,2563,-1610,-3863,1412,-6266,2240,-1347,-805,-1799,2908,-30,-3395,952,-690,-1723,3022,-1725,-2100,2677,-2300,-2084,2677,-11384,-8213,-657,-3105,12244,-908,-13799,-11329,2524,8165,-5728,-1692,-1265,-3625,1487,-3220,-1901,2677,5001,-5925,-5257,-115,-3165,1005,-575,-2590,1619,-805,-1804,3022,15157,-11099,2908,-12074,-8454,84,-230,-3395,1101,9659,-5804,-543,-5550,6610,1757,-575,-2764,1528,-980,-1900,2792,-6941,6724,-1002,-3220,-1900,2847,-1265,-2072,2792,-1840,-2092,2792,-3565,3160,3664,-11269,-8223,-543,-2875,-2027,2792,-1840,-5925,1003,-14259,-9547,-312,-7599,-8339,492,-1150,-1890,3137,9889,-5876,-543,-7142,-9144,2447,14489,-9913,2102,-3513,-1670,3252,345,3274,2953,-5874,3619,1412,-3565,12133,-657,-7556,6954,-3302,8855,-5768,-1347,2504,4540,-543,115,7414,2290,-3679,-1245,3712,-520,-2935,1412,-5825,-5810,-5717,-1495,-1843,3252,-1725,-1878,3252,-2185,-1887,3252,10286,-5925,-428,10004,-5867,-428,-1009,-1670,3367,-1840,9756,1528,-1035,-1922,3022,-1495,-2015,3020,-2530,-2001,3022,0,7414,2384,4830,-6413,262,-3105,-1601,3597,2185,2010,-219,-2185,-1785,3434,3105,-2635,-1692,13459,-8225,1642,-1610,-1670,3564,-2070,-1761,3482,-2530,-1754,3482,-7611,-8570,1412,-4677,-1325,1068,-1610,-1942,3137,1610,-885,-543,3847,-6385,1068,-1193,3619,3367,-690,-3307,1412,5404,-7420,1472,-2760,-1618,3712,-2070,-1676,3597,-2645,-1670,3671,-2902,-1670,3597,4625,-6730,1297,-4485,3390,2622,-2415,-6385,840,-4714,9829,587,8165,-7075,3271,2635,-60,-2497,2222,-1785,-1002,5446,-9260,4517,-14374,-9981,-2037,2617,-175,-2497,2600,-175,-2382,5404,-9374,4795,-6439,9714,-1632,11635,-6269,-83,-3565,-1640,3252,2490,-60,-1923,-5675,7069,1297,2530,-297,-2037,-7111,6724,-1578,-7129,6724,-1633,-5290,-6269,-1585,3564,-4774,-2382,2875,-604,-1692,2875,-2935,-1867,2376,55,-1692,14719,-10754,2549,9314,-6175,1183,3251,2470,-1807,2185,170,-1481,-4369,-2054,-312,2088,170,-1347,614,-9144,3827,-5787,170,-3072,3946,7759,-4222,2491,-520,-1807,2030,170,-1233,-5749,170,-2881,9263,-5925,-83,0,-6758,1183,2005,170,-1117,-5768,-60,-3072,2185,-290,-1390,2040,-60,-1233,2875,-494,-1578,170,9944,262,-2645,7299,2853,2139,-175,-1347,-2760,10059,1254,-5635,-550,-2727,-5749,-175,-2890,0,7526,2332,-5749,-116,-1807,-4050,-980,3597,1955,-69,-1002,2185,-405,-1367,-5635,270,-2497,-5675,-60,-2727,4255,-5387,-4682,1955,42,-888,4369,-5490,-4797,-5635,-6768,-1002,-9014,-7075,-2957,2645,-865,-3302,-4600,8679,1484,-7129,-9260,2495,3532,6149,-4797,-110,9944,607,1935,170,-543,1851,-290,-888,1898,-60,-657,-5749,170,-2072,1955,-405,-1024,-3795,-9144,2909,-5519,-175,-2449,-1840,4662,3367,2645,-750,-3043,-13454,-8952,33,1853,-290,-772,1855,-520,-888,11959,-8169,3712,2665,-750,-2957,2078,7529,33,-5635,-405,-2687,-5635,17,-2268,-3565,-8109,2180,4875,-5235,-3877,1840,-60,-453,-345,9829,1007,-5592,-290,-2268,-6747,5114,-1233,3335,-6026,147,1801,-290,-543,2645,-658,-2727,1743,-520,-657,-5635,-175,-2101,-3795,12023,33,3335,-6067,262,1725,138,723,2530,-6306,838,1725,-405,-558,1910,170,33,-5563,-405,-2382,-5519,-520,-2340,1035,2355,2442,-1350,11784,-428,-13224,-8442,-1233,-8279,-9409,1528,8855,-6155,1059,-4714,-8960,2677,7233,-6730,1757,-4024,-9612,3137,-5360,1320,1757,-2238,-3625,1297,2760,-923,-2727,7244,-6614,1707,-9889,-7805,-3762,-5765,-290,-1692,-3565,5948,2447,1150,2010,2264,-6670,-7121,-1233,-5749,-6542,-1692,4024,-8225,3337,11959,-6918,-1117,1610,-472,-198,-5729,-750,-3072,8222,-7649,3827,2985,-865,-2612,1752,-60,262,-3679,-5580,4,1610,-433,-83,2530,9655,-5487,-5749,-1050,-2957,2760,-873,-2497,6094,-5379,-2497,-6325,4540,-83,-230,11476,-1578,-5864,-10,-1347,1589,-405,33,-2530,6494,2986,-5842,-175,-1347,-7015,6610,-1281,2716,-635,-1807,13109,-8915,3186,7015,-5848,-3647,-1150,-6959,1088,-5864,-60,-1284,-5608,-750,-2727,-5764,-290,-1233,-6968,6494,-1117,-6968,6610,-1117,3220,2125,-1523,-5894,-60,-1117,1497,-520,262,-5635,-576,-888,-7281,4540,-4222,-4485,6265,2481,7015,-8741,3482,-1610,-5840,1068,-1840,-1210,4258,3450,1780,-1759,-8938,-7075,-3187,-5654,-865,-2957,2305,-635,-1462,-5846,-175,-1002,5980,-5385,-2037,2875,-750,-1512,-6969,6379,-1117,-6094,3160,1029,2760,-980,-1788,8624,-6286,1873,-690,-2316,1987,-6553,3619,-1923,-6670,4080,-1998,2219,-635,-1347,4714,-8487,4057,-6670,2700,-3576,1150,-5810,560,-5404,-3831,-2612,-3679,-1440,3485,1610,271,1183,-5585,-980,-2727,5520,-7420,1493,2139,-635,-1233,-4140,-2935,-426,-1265,11272,723,-5414,-635,-2152,1447,-290,838,2446,-980,-1578,-5797,-290,-657,-4830,-5350,-1486,2070,-635,-1135,-13339,-9044,378,2645,-1123,-1807,2593,-1555,-1692,11997,-8570,4057,-6209,-9010,1987,-1955,12107,-1233,1350,-520,838,460,-1220,1757,-5528,-980,-2497,-920,-5350,1184,2376,-980,-1462,-1894,12014,33,-12534,-8744,607,-5749,-6885,-772,2530,-1220,-1692,9429,-7649,3536,11971,-8570,4172,1380,-290,1055,-7538,7299,-3762,-7506,7414,-3762,-230,-2590,1379,-4945,-1325,-264,-115,11148,-543,1840,-635,-831,-1955,-7994,2537,-5635,8512,607,11959,-8684,4254,-5175,-4200,-1820,-4140,11888,-1002,2597,-1325,-1807,-5864,7184,935,1380,170,1603,12599,-7535,2677,-5800,-175,-312,183,6149,2563,-575,-1730,2677,-5454,-865,-2152,8739,-6257,1642,1035,-580,1528,1319,-60,1528,-5519,-520,147,2645,4059,-1692,1265,-405,1235,-5483,-1325,-2497,-5749,-225,-198,8969,-6783,2908,-5408,-1210,-2152,1725,-635,-657,8279,-6710,2792,8478,-8454,4402,-11959,-10472,2908,1150,-520,1324,-345,10749,665,-460,3735,3115,-5404,975,1579,1035,-9260,4232,-11614,-8728,1183,-5504,-865,-1807,-401,3619,3137,-5404,-1122,-1923,-1150,-2078,2447,-452,-3165,1297,3105,2010,-1368,-5725,-175,33,575,-7075,2056,-575,-1610,3137,-5290,-1210,-1714,-5404,1090,1614,-10004,-8029,-543,2530,-3165,-983,3220,-8580,3022,-5492,-750,-1117,575,9107,838,-5278,-1095,-1692,1840,-980,-747,-1955,-1801,3367,-5749,55,356,2070,-1095,-981,-7244,8104,-3633,9084,-7075,3162,-5339,860,1642,-7620,5689,-3992,-5663,170,607,1725,-865,-669,-5693,-175,262,-14719,-9181,-1462,1150,7529,1232,-5392,-865,-1347,-5699,-60,378,2015,-1210,-888,2220,-1440,-1117,1077,55,2102,1840,-877,-772,-6116,6379,838,-5283,-980,-1233,-3529,2240,3827,3002,-750,-1462,-5102,-1555,-1462,2760,-7765,2261,2645,-989,-2957,1840,-1095,-712,-3104,-4200,492,-3024,3160,4172,938,-290,1987,6554,-7304,1564,2530,3045,-1081,-5864,3390,1454,-4755,-2245,-1002,1810,-1210,-657,-2875,3390,4599,-5635,30,607,2070,-1442,-888,920,55,2352,1475,-865,-312,-1725,-9374,3383,1445,-635,147,-5077,-1325,-1347,1663,-1095,-543,1610,-1095,-494,11844,-7075,2858,0,3129,3137,-7589,7644,-4914,4541,-6040,-198,-454,-7535,2563,-2875,-2444,1757,-1832,3964,4172,1511,8449,147,1435,-635,262,-4107,11899,-312,1495,-1095,-398,4024,-8114,3252,575,170,2749,-2185,-2003,3022,-6378,2585,-1923,11391,-6269,-428,3220,4999,-1997,-2415,-2015,2963,-5059,-1394,-1117,-4530,-7880,1642,-4024,6610,2717,-7452,6724,-2842,-5350,-865,-543,6259,-8915,3597,532,170,2792,11154,-6163,-198,-4945,-1555,-1046,-5519,-405,545,-5494,-175,838,345,-330,2908,7565,-5695,-2382,2760,-8312,2792,-5635,-6441,-1807,623,-60,2677,-5404,170,1282,-14489,-10018,262,1610,-1482,-428,1265,-1e3,147,-4830,-1580,-888,-5519,-6471,-1578,-5290,-923,-312,1615,2700,1642,13084,-8225,2677,-4945,-1409,-772,2418,-1900,-1233,7662,-7649,2908,-5290,170,1479,12120,-7075,-1233,641,-290,2563,5290,-9221,4747,1035,-1555,94,-5404,-175,1085,-4832,-1555,-772,1265,-635,809,-5404,55,1201,10119,-6543,2447,-5425,-635,262,2586,-60,-2268,-11019,-7880,-2497,-4945,5230,2035,-8624,-6959,-3426,1265,-895,378,-3910,2240,3427,543,-290,2677,7360,-7374,2332,-5361,-175,1183,-4802,-1555,-657,-4255,6143,2447,-5350,-750,378,-5290,-750,477,12649,-6647,838,4496,-6845,1873,271,55,3022,-11499,-10716,2792,-5059,-544,1528,345,-175,2899,-7475,-6686,-3072,-8470,-7420,-4567,-7015,-8799,2137,460,-405,2757,-4869,-1440,-543,10234,-6645,2677,4255,-6127,607,13368,-8570,2563,-6670,-7535,544,2663,-750,-2842,-4743,-3625,-1002,-12189,-8464,33,3450,-4935,-1923,-4092,2355,3137,3565,-8570,3181,3220,8679,-3842,-1495,8679,2242,-7129,-6614,-3169,-6325,6034,367,-6238,2240,-2037,-4859,-1440,-312,-4485,149,3137,-2875,8564,2309,2364,-5465,-83,-2875,8757,2218,1057,-1095,607,-3105,-7109,1068,1035,-1095,712,795,-1555,607,-5129,-175,1642,-460,-2820,1403,-5014,-1210,33,2300,-8940,3597,-5519,8909,480,6899,-7420,1987,2645,7529,-1133,2645,2846,-1462,-5261,-635,838,-4485,9387,1068,920,-1287,723,-115,55,3482,3601,-4774,-4222,0,-175,3352,978,-980,1068,2223,2010,-428,-5175,-918,492,-4989,-1210,147,115,-405,3247,-6209,-7114,-312,920,-1213,838,1751,1780,1297,-230,-60,3675,690,-1503,838,3930,-7190,2218,-1495,-2245,1982,-6943,7069,-1117,-5124,-1095,147,423,1665,3022,920,-928,1297,-4945,259,2332,-12649,-9635,1987,-4904,-1325,147,-5059,-1015,607,1610,-2063,-312,-2415,12054,378,575,-1555,951,2185,-5286,-83,-115,-175,3536,-5059,55,2109,-1955,6724,3029,-7359,-6849,-2842,230,-9287,3942,1035,-7075,1940,-12534,-9731,2102,535,-1555,1068,805,-750,1779,-146,-290,3597,-1035,2355,3852,-4600,5230,2205,-5087,-865,838,-4830,-1301,492,2185,-5515,33,-4750,-1440,262,1495,-2935,-4,-4830,-1325,444,-10694,-8339,-3891,-5059,-692,1297,-4945,-1059,838,3910,-5195,-2037,805,-865,1630,9659,-6091,838,4878,-5235,-3992,-10234,-7765,-3254,-4899,-1210,607,-139,-405,3597,-4714,-1467,378,-4972,-980,952,-5059,-653,1412,-4830,-1187,838,-1495,-8570,2889,575,-750,2067,-338,-175,3827,10924,-6269,-979,-6039,9829,-543,-191,-4200,1068,621,-1095,1528,230,6819,2563,1636,-7075,1873,-3679,-6155,-24,575,-1210,1454,-4830,-1128,952,375,-1555,1412,-6899,-9998,2677,-4841,-60,2563,1610,5868,1068,-4036,-2935,-312,-4600,-1555,670,-5404,-9719,3192,10349,-8415,4977,-6682,4309,-1578,575,-674,2447,-460,-8454,2989,9200,-5896,-1578,460,-787,2218,-10234,-8019,-772,805,-6753,1642,-4663,-1440,723,-4830,-1014,1297,-3355,-980,4172,494,-1325,1528,-3910,975,3304,-4714,55,2786,-4369,-7994,1805,-5012,-520,2332,-2185,-2820,1591,1150,-290,1711,-5926,9714,-312,460,-635,2723,-4998,-750,1873,-4140,-8454,2362,-4945,-520,2445,-690,-1937,2447,460,-809,2447,-6713,4195,-1578,-3450,9599,1466,-5022,-750,1987,9659,-6376,2102,-3150,5230,3137,8855,-6730,2839,230,-1408,1873,-4369,170,3237,13618,-7304,607,433,-865,2563,230,-1060,2332,5088,-8339,3482,-4600,-212,3022,-14029,-9507,262,-4804,-980,1757,-5864,8564,125,4255,-5500,-1578,-4606,-1440,1183,-5059,-6845,-279,3125,8219,-2957,-14489,-11444,1680,-920,4770,2827,2252,-9374,3942,-4080,170,3367,4455,-6155,378,-4495,-290,3252,-4485,-175,3306,-3541,3505,3827,115,-1376,2218,230,-890,2908,-4369,-1555,1447,9774,-5872,-657,-4369,-60,3347,115,-1276,2332,-4812,-980,2102,-4694,-980,2332,920,-2590,255,-4485,-1440,1520,-4140,-60,3463,11154,-6863,-1692,143,-1210,2447,4600,-5437,-2152,-4642,-1210,1873,11614,-8684,4766,-4741,-980,2218,8165,-6978,3137,-6209,6724,583,-4369,-1505,1642,-1035,-7535,1906,10187,-7304,3827,-230,-1538,2563,0,-1158,2908,11106,-6959,-1923,-5175,4195,2057,460,-2005,723,-345,-635,3726,-6600,3505,-1117,-345,-1503,2677,11154,-7001,-1807,-4600,-7649,1346,-2415,-9174,3022,-14259,-11561,1873,-920,170,3974,-4485,-1349,1987,-3741,55,3712,-3679,-6730,167,-345,-1440,2884,-8969,-8169,147,-4837,11324,147,-67,-1095,3137,-9889,-7743,-1692,-1035,170,4037,-4485,-1325,2080,-4625,-1095,2447,-1955,2355,4261,-1610,9620,1642,-11039,-8497,607,1081,-1555,33,12074,-7880,3361,-345,-947,3597,9544,-8684,4455,-4132,-290,3597,5873,-5350,-2497,-4444,-1325,2218,-920,55,4016,-345,5230,2744,-5444,-2590,-2727,304,1320,3137,2185,4885,193,-179,-980,3367,-230,-1066,3367,-4024,-339,3712,-4010,-290,3712,2020,7414,147,-920,-8454,2935,-920,-4200,1331,0,-3395,927,-4485,-1145,2677,-1380,11727,-198,-5201,-10064,3482,-4255,-405,3534,-395,-1440,3137,12534,-6674,1183,959,-1555,262,-7421,6379,-3187,-12189,-8753,952,-5749,-6959,-566,-2415,257,4402,5864,-7620,1873,-4354,-1325,2677,-1955,6839,3042,-1150,55,4152,-3170,55,4172,11729,-6500,-643,-4600,537,2908,-345,-1210,3327,-7359,-6541,-3302,9774,-8348,4402,-4369,-1325,2563,12600,-8454,3367,-4140,-1490,2792,-1265,-62,4287,-4485,11499,607,13914,-8884,1757,-8739,-7613,-888,-6899,8823,-3187,-4379,-635,3367,-575,-1095,3698,-920,-290,4138,-4369,-1107,3022,-4255,-1325,2986,-1725,55,4426,-1955,55,4467,-2185,55,4477,-2300,55,4470,-2530,-60,4478,-2645,55,4424,1265,9665,-1347,-568,-1325,3482,-4218,10979,838,-4255,-750,3497,-1035,-175,4165,11227,-7075,3022,-4223,-1325,3022,-394,-8454,3022,-4024,-635,3701,-3164,-175,4287,-5864,-73,-312,-805,-520,4114,-4013,-635,3712,2645,8996,-2842,2645,-5397,-312,-1610,-175,4502,-2875,-290,4449,-4024,-1381,3252,-1035,-405,4254,-3795,-750,3911,-8279,-6959,-2819,2827,-2820,-1807,2832,-2935,-1807,1975,3619,952,-5519,-717,-1347,-3450,-1555,3462,-5980,-9785,3022,-1150,-405,4336,-3679,-635,4028,5215,-8339,3252,-4139,2125,3252,3910,-5537,-1117,-1840,3735,4339,-3450,12129,-1248,7589,-6831,2447,14424,-9260,1757,-690,-865,3997,-9995,-9719,2447,-6335,2470,-772,2875,8712,-2842,-890,-1440,3597,-5923,7989,492,-7475,-7994,-590,-4830,10749,617,345,-8109,2853,7015,-6361,1068,-2070,-2245,2291,10924,-6845,-1820,2875,8248,-2037,-1265,-1520,3712,-1495,-1555,3729,-690,11673,-2268,-12879,-9144,-3128,253,-3165,723,-5179,-2820,-1692,-3220,-1477,3712,-1107,-750,4287,7820,-6670,-3992,-7015,1665,-3628,920,3160,2598,-3335,-1016,4172,-6328,1320,-2152,-4971,-750,1757,-1035,-1325,3869,-3335,-1350,3827,-3335,-1325,3870,-1495,-1440,3900,2462,5114,-543,-2760,-1555,3864,-6165,2010,-888,2214,-2820,-657,-2185,3619,4578,-7129,5764,-1923,-2875,-635,4467,-3731,2700,3252,-7020,6265,-1347,-3282,1090,3942,-4616,11669,-1233,-2185,-980,4383,-3199,-980,4287,12764,-9029,3264,-1495,-1140,4287,-1725,-1141,4287,10694,-6565,2332,-4218,-5580,-543,-2645,-1140,4287,-1265,-1353,3942,-3105,-1367,3942,-2645,-1503,3942,-11269,-8195,-657,-3725,-290,3942,-1725,-635,4567,1610,8410,33,2530,9791,-4337,-6374,9139,-1233,-1725,-750,4530,-4255,11784,-1138,-4140,10289,530,-6810,4425,-2612,0,55,3339,-1380,9484,1738,22,10864,33,-2106,-980,4402,-2645,3505,4719,4815,-7190,1873,-7475,-8901,2447,-14259,-9286,-2268,-1840,-1376,4057,3238,6724,-2037,3105,8909,-4042,-4714,11360,-5027,-6958,4080,-2842,-4329,-5695,-657,690,-8570,3224,2033,2010,492,-7589,7759,-4375,3220,-7649,2243,-135,-1440,2677,9314,-8580,4287,7475,-5731,-2727,-6899,1780,-3494,-6899,1533,-3417,-575,11567,-1117,-1610,-2245,2033,7244,-5695,-1815,-1591,860,4172,-6601,2010,-3072,-6209,2240,-3384,-6628,3735,-888,2645,-4179,-1002,-6209,1741,-2152,-3605,-2130,1642,-6512,1550,-2612,-7934,-9029,1598,1955,1320,799,1321,9714,-1462,-6328,1780,-2382,3185,2585,-1807,-6258,2010,-2268,-6286,1665,-2268,-4369,2700,2839,731,9944,-1117,4024,-5005,-3071,-6179,1780,-2037,-9889,-7621,-2152,-6364,1434,-2268,-5635,-8517,1642,837,9714,-772,-6080,1550,-1807,-5418,2010,1873,-5290,1719,1987,920,9523,-543,-6079,1665,-1578,-9544,-8183,492,-6209,2064,-1462,1380,10302,-2612,-6206,2010,-1347,-6064,1320,-1462,-6177,2010,-1117,2760,-6500,1152,3565,-5185,-1578,-6094,1602,-1002,1035,-4200,387,1523,3390,1873,-4714,-6040,-893,-5059,-2820,-1448,-115,1434,3507,1035,-4429,408,-3910,11899,335,-6103,1665,-543,-6127,1895,-428,4024,1954,-3532,26,-2015,1528,-6100,1780,-312,-1903,3390,4287,-345,11265,-3647,3487,5804,-4452,-12304,-8415,-2612,3501,6034,-4337,-690,-6730,1089,-12304,-8380,-2497,5520,-5314,-3417,7360,-8627,3482,-6819,7644,-1347,-7625,7874,-4567,7360,-8750,3597,-3016,4080,4517,3570,6034,-3992,-6082,1320,-83,3526,5920,-3992,-11269,-8325,-83,-6730,7529,-1002,-1610,-2249,2218,1495,-2820,-26,-4507,9254,1183,-5959,1550,492,690,8616,1183,-805,-3740,1380,-7273,6954,-2037,-5864,562,-2842,4140,-5761,-428,9544,-6095,-1923,-2718,-3625,952,1840,-4890,0,-5749,-8725,1873,-5749,1550,1025,-5749,1780,1140,9659,-6069,723,-5792,1320,838,-1380,11899,-3154,-805,10177,838,3105,-8836,3252,-6554,1373,-2612,-6554,6265,-207,-12304,-8737,838,-6094,505,-2842,-5635,1780,1387,-2551,-3740,1068,10520,-6845,-2268,115,-4774,900,-6209,4425,348,-5635,475,-2727,-6531,4885,-772,-12994,-8731,33,-544,4080,3022,2159,-750,-1233,2760,1172,-1923,-1380,-9144,3412,345,5689,2366,115,3619,2978,-3679,11752,723,7360,-5880,262,-5864,-5992,-3532,13109,-6915,1068,-6209,745,-2533,-805,4770,2833,2561,745,-2152,-5060,8794,1068,-5864,400,-3120,-5437,11209,-2268,-115,6954,2710,-4024,4999,2355,-4024,5065,2332,-5785,285,-1923,-3795,12070,-1002,2284,8564,-1117,-5404,1550,1741,-7180,5804,-2152,-7330,4770,-4107,-4140,11860,-1117,-6209,839,-2382,-5404,11027,-657,2534,285,-2037,-7125,5689,-2152,-6046,-5810,-5372,2645,1320,-1603,-2875,-2245,2172,-8394,-9426,1412,-5404,1320,1676,2760,1780,-1104,-3934,-980,3712,-6325,814,-2268,2278,1205,-1692,2312,860,-1807,-575,7184,2819,-7037,5344,-2152,286,10059,-83,4830,-5112,-3302,-2171,5459,3022,-5175,1895,2180,-8855,-7361,-2037,-8969,-7420,-2071,-11384,-8191,-772,-6481,3160,-2037,2236,975,-1692,-6094,975,-2164,-7570,2700,-4452,-6439,2797,-2037,2156,8334,-772,-4024,11616,-1462,-3220,-1115,4172,-5245,860,1987,2378,630,-1807,1840,10424,-4222,2530,1434,-1433,3380,1895,-1692,3403,1780,-1692,2415,1659,-1117,-5175,1665,2143,-6510,9714,-3417,-3434,-4545,262,230,5230,2390,-575,11509,-888,1894,285,262,2185,1347,-1347,-4485,3274,2659,-6554,9566,-3532,-1035,-4660,1258,-1150,2729,3597,-2090,4770,3597,-5864,800,-1923,-15754,-10409,-1767,-4255,-8915,2689,-6354,9024,-772,4830,-7535,2495,-920,1090,3758,3184,1780,-1462,-5864,630,-1807,-5904,745,-1807,-14259,-9421,-2497,3220,-4478,-2268,-6209,1426,-2037,2185,1366,-1117,-345,-1994,1987,2278,1665,-772,-5926,860,-1692,-5519,3390,1900,-6899,-7485,33,-7820,-9058,2218,12074,-6500,-264,2990,1895,-1209,3298,5459,-2152,-4830,1665,2587,1380,10059,-2279,-5065,1434,2332,2070,515,-1193,-4759,1665,2677,-4945,1434,2535,-6554,3241,-1233,-9429,-7567,-3762,-6585,1780,-2727,2760,-5646,-83,8855,-6337,2102,10694,-6135,-772,-4945,1378,2563,-6569,3274,-1117,2011,400,-1002,10119,-6269,1689,3335,-7535,2196,8855,-6361,2218,-6554,2089,-3302,-4945,-1288,33,551,9139,838,-4600,1550,2965,283,8334,1757,-6899,-6845,-2790,-5635,-1325,-2991,-6373,3045,-3302,2070,890,-657,-5980,524,-543,-2300,-635,4515,-6564,3160,-1002,-5290,-4085,-2215,-5624,-1210,-2957,-6670,3964,-2014,-3105,12067,378,-4196,9944,723,-7310,8449,-4337,805,4626,2332,1981,400,-772,-4490,1550,3137,-6769,9139,-2957,460,9944,-241,2192,4654,262,3203,7644,-2612,2252,10174,-4912,-5991,400,-888,-6094,819,-888,2129,1665,33,2133,1205,-312,1985,400,-543,7360,-6221,-3992,3193,7414,-2497,2116,1665,147,-5765,745,607,-6554,-5842,-3762,-3873,-290,3827,-2530,4634,4172,1250,-6500,952,2185,2470,-47,3315,7069,-2382,-10391,-9949,3022,-5980,400,-622,-2300,-2245,2384,2040,1780,492,10349,-8454,5017,2102,1320,33,-5998,630,-543,7150,-8454,3252,-4255,2010,3214,-2990,12143,33,1996,515,-198,2709,-7535,2102,-12994,-8630,-2268,2099,1434,147,-4214,2010,3252,-805,-1758,2792,7129,-5983,-3877,1953,285,-83,-5868,285,147,-9774,-7943,-657,-733,-2015,2332,2079,1434,262,-1910,8334,2447,2875,1895,-1127,2016,745,147,-7549,5689,-3762,-5864,4309,1148,144,7759,2102,-805,2010,3865,1817,2010,1183,-6899,8909,-2226,9544,-7190,3445,-805,11047,723,-4897,-6500,-543,526,-3625,607,9774,-7008,3482,1495,1944,1757,-5963,400,-198,1739,2010,1297,2003,630,147,1265,9437,-1002,-4945,-6614,-481,-11384,-8749,1297,-6094,-5580,-4232,-2645,-9144,2982,4306,-8915,4172,-6172,3964,723,-1840,-816,4517,2300,-4429,-510,-12419,-8570,202,-5995,285,-657,-460,4654,2842,-4024,1525,3367,-6784,5114,-1319,2875,4080,-2043,-6220,3619,607,-6415,9599,-1578,1955,608,262,-5482,1665,1642,-3565,8679,2024,-1725,-7535,1633,5749,-7535,1701,4024,-5045,-2842,-5442,1780,1757,1955,1205,688,460,-1397,1528,-7168,2470,-3877,-3795,1665,3489,9659,-5968,147,-6356,7644,-198,-4024,1090,3273,-6568,3274,-888,-4255,1064,3252,1622,2010,1528,-4485,11439,661,11320,-6730,-1233,-1035,1895,3805,-2415,-669,4517,11499,-7044,2908,-9556,-7304,-2612,1729,3735,1412,1902,745,607,1945,1205,723,-15581,-10064,-2497,-5290,-6593,-1002,-4727,7184,2218,-5404,-6668,-1002,12189,-8454,3872,-6094,1115,-1002,1380,-3443,147,-3565,1665,3613,1883,515,492,12419,-8754,3597,-1150,1895,3848,1938,975,723,-11959,-9771,1987,1380,5344,1502,591,2125,2908,-5258,55,1528,3220,-4817,-1807,-5943,860,262,-2990,2010,4085,-7475,7414,-3600,-14489,-9784,-428,1840,1665,1134,2372,2470,-888,-5980,170,-677,-1610,11612,-3532,-4255,745,3218,1646,-3625,33,-345,4080,2991,-3712,975,3482,-4024,10059,730,-4485,-2360,-652,-6832,8679,-2037,1035,3390,2475,-1496,1895,4057,4255,-7168,2447,6822,-6040,-3992,-5728,975,838,1883,1090,952,1981,285,-888,-1610,630,4201,-1035,-5005,1219,-4830,-8418,2102,-1380,1550,3926,-3118,1665,3942,-6110,6034,952,-4369,3505,2651,-3275,4540,3367,8739,-5893,-2037,920,3390,2584,3458,7414,-3417,2570,2930,-1233,4444,-7190,2447,-3064,-2935,838,-2530,1890,4172,-7618,6379,-5027,7129,-8351,3137,-8394,-7339,-4567,1840,975,1038,-3795,-9029,2826,2070,1389,378,-3375,1205,3827,-5749,860,705,-1583,11554,492,3335,-3050,-2889,-1150,1090,3910,-1938,515,4287,7244,-8570,3398,-3220,8449,2283,345,4540,2629,-966,975,3827,-2809,9484,1757,3105,-9494,3942,-1658,4309,3482,-1035,1403,3712,-6439,4080,-457,690,6494,2232,-3986,400,3367,-5749,975,790,-1955,1665,4172,4618,-7304,2447,230,2700,3097,-6439,-5580,-4265,5177,-7765,2218,-6478,7299,-198,-5635,400,776,-5980,786,-2497,-1610,400,4247,-3679,630,3606,5290,-7734,1987,2200,9254,-2037,-2300,1780,4177,-2645,-2046,2792,1380,1780,1931,-3795,11554,-1997,-4830,-5580,-1407,1725,950,1297,13454,-7649,1306,-9889,-7919,-3992,-4255,6839,2643,690,-1325,1048,5237,-7880,2332,-1380,1029,4057,-3342,4195,3597,3795,5377,-2612,-406,9714,1183,-2990,975,4125,-3092,860,4057,-3105,918,4057,-5614,400,838,-1610,1205,4167,-2990,-9540,3137,-13512,-9144,-2842,584,-865,1873,1096,2010,2332,1610,1090,1476,-3105,1434,3991,-345,3619,3125,-4945,11439,-3035,-575,-1443,3367,574,6034,2332,345,-290,2886,-2530,-4315,913,6899,-7075,1537,-7145,4654,-2957,-2049,1205,4287,-5864,10741,-1462,-2530,975,4252,8053,-8684,3827,-13940,-9374,147,-6094,856,-2382,9889,-5839,-312,-6689,9484,-4107,-5595,170,-2497,-6670,7184,-452,-5749,-9029,2279,1516,1320,1642,575,-7828,2563,55,8794,1642,460,6034,2397,-2185,955,4287,1955,4885,675,-3910,-1382,3367,4714,-6916,1528,-3450,285,3850,11614,-8339,4365,-690,-1596,3252,-5658,285,-2382,-460,-2130,1947,-2185,1434,4265,2530,-5741,147,1955,-2633,-428,-3220,-9260,3069,-230,11439,-1291,-5519,630,1225,-2990,745,4106,-2415,11554,988,-5980,9369,-320,4830,-7420,2301,5635,-5780,-4682,8165,-5689,-1578,-7595,7184,-4797,-6069,975,-888,-14124,-9489,-83,460,-3050,590,7589,-5847,-198,6670,-8570,3193,-5175,285,1744,-115,4885,2709,3500,-3625,-3187,-2151,1320,4287,-6520,3274,-1923,-5635,4425,1432,1405,285,1642,-1578,1780,4057,2163,-9144,3827,1417,515,1642,-2990,400,4142,-2530,9139,2004,-230,-7219,2447,1316,975,1873,-2645,8449,2391,-805,-7350,2218,230,1665,3219,-805,11714,-1807,-4945,11222,-4797,-805,3964,3099,-3448,-5925,147,-1725,-5810,1048,-12419,-8570,-2858,1911,2125,952,-1495,515,4183,9889,-6614,-2497,-4965,1895,2447,-5238,975,1873,-4600,-6269,-544,-5635,484,838,8855,-6289,1873,-1495,1665,4005,-5175,-9,1642,-2185,285,4398,3795,-8799,3603,-10349,-8339,-4049,-2530,4938,3827,-1840,400,4311,0,4540,2757,-10349,-8786,1528,-2760,-2705,1361,1941,4309,723,-4485,2010,2927,-5749,-8684,1815,-1955,6954,3044,6439,-5532,-1347,-15064,-9847,-1692,9724,-9260,5322,-5364,975,1642,-2012,4654,3597,805,1550,2628,673,1895,2792,2185,5230,-43,2070,-8799,3625,4255,-9172,4287,-11844,-8453,262,-12419,-8365,-1117,-7475,-8236,492,1265,170,1797,3335,4195,-2397,-920,3619,3222,1419,5114,1528,-4255,9714,905,1195,1205,2102,2070,8909,-1216,-5877,10634,-1692,2070,10005,-3532,-6026,6494,952,830,1205,2563,-6812,5344,-1233,-7359,-7994,-230,-5239,1090,2102,2875,2832,-1923,-5187,1205,2218,1519,6724,952,2493,9254,-2957,-5175,515,2037,920,630,2396,2287,4885,-198,1840,10404,-3825,-5125,1205,2332,-5953,2815,1183,-5290,-9771,3252,345,9688,378,173,1780,3252,-2990,6379,2935,634,1205,2792,-4024,1320,3296,-6325,8074,-772,-5313,11209,-3532,-1150,-6385,1054,773,515,2563,-5059,643,2332,23,9369,1183,-5083,860,2332,4024,-9049,3942,2415,1873,-888,-2645,6265,2979,1725,10417,-4107,10004,-6385,-2070,-230,1895,3543,-4959,1090,2563,-5682,6839,1412,5749,-5925,-1138,56,1550,3367,-4723,6494,2447,-285,1895,3597,-345,1895,3661,-4830,1090,2740,-2185,3045,4197,2645,840,-2612,345,698,3022,-4945,745,2548,-6675,5114,-1002,-6693,5230,-1002,444,400,2908,2185,8794,-1221,2530,466,-2037,-4830,386,2563,-5749,1895,1224,-3910,8564,1918,-4802,630,2677,5784,-5810,-4682,-1610,3390,4035,-6145,2010,-657,9544,-6730,3049,8279,-6979,3137,-1688,3274,4057,-7482,5920,-3532,3220,-6825,1528,-14422,-10869,1412,-345,-5005,1102,2530,-520,-1930,-5,745,3367,-13454,-9260,-2984,-4600,745,2944,-234,-5235,1068,1840,8909,-959,-460,-5005,1140,5635,-5993,-1117,-690,1205,3664,-1840,9637,1642,3049,-6959,1642,103,515,3252,-230,745,3569,-345,1434,3682,2185,10032,-3647,6209,-5810,-4276,-2645,-865,4441,-460,1090,3634,-6421,9024,-1233,3230,7299,-2497,-7475,-6647,-4222,-318,860,3597,-460,860,3633,3591,6379,-3532,-575,-5465,1142,-6222,3160,147,4024,3274,-2904,-4386,400,3137,-6899,2930,-3512,-303,630,3597,-5421,7414,1412,6899,-7765,2382,1380,-8634,3482,2670,9714,-4222,-14259,-10802,1642,-7513,3505,-4337,-7244,2679,-4222,-7320,3505,-4222,-993,10979,952,2875,3850,-2220,-3804,975,3367,9835,-7304,3712,-8969,-8299,262,-7406,3735,-4107,-10234,-8368,492,-7129,2125,-3791,-7589,5658,-3877,-4485,-1238,2447,4069,3619,-2957,2070,605,-1347,3450,2802,-2152,4880,-6385,147,10579,-7799,4402,3795,3619,-2822,-6554,-5814,-4567,-6554,3321,-2842,-1955,-1615,3712,-6439,2153,-3417,2875,-3395,-1624,3639,7299,-4107,920,3505,2574,-7015,3528,-3647,-7015,3619,-3603,3527,3735,-2612,-6957,3390,-3532,-1035,-5580,1166,-8165,-6841,-2957,-6554,3160,-3278,2602,7644,-1117,-6106,1665,-1117,2583,3850,-1692,7260,-8225,3022,-7589,-6896,-4682,3680,-5740,-543,-6209,2171,-3187,11269,-6122,147,9314,-5810,-467,-6554,3208,-3187,-6719,9599,-2268,3377,7069,-2842,-6971,3735,-3417,-3012,-6269,492,2613,3619,-2037,3242,1780,-1578,-11154,-8844,1528,2070,2930,723,3430,6839,-2727,-5232,-7304,492,-9659,-7625,-2037,9200,-7994,3775,2063,1665,378,11045,-6040,838,3156,-4085,-2382,-5235,-8454,1873,3105,3619,-2245,-2415,-5005,872,-6670,3390,-3160,7589,-6225,1528,-4024,-1325,3341,-6899,3735,-3223,2567,8909,-1807,1942,1895,838,1896,9829,-2842,3450,-6266,723,-6947,8104,-2268,-6646,3390,-3072,-6717,3505,-3072,2632,-980,-2842,-6325,2125,-2739,9200,-6173,-2497,-4485,-1751,147,-6439,3201,-2727,-1454,-1555,3712,1495,1550,1725,-7475,2930,-4407,3680,-5868,-198,3835,2930,-2612,-5692,4309,1412,3910,2647,-2727,-7542,7069,-3532,606,-2935,492,-6554,7759,-968,-6670,7607,-1002,-1840,12051,-2497,3737,1665,-3532,-3462,-3740,262,-6094,6265,903,-7190,4770,-3532,460,-985,1987,12994,-8225,2814,12419,-7785,3137,11384,-6130,838,-1586,-750,4517,12649,-6936,-198,-7193,3045,-4222,-6325,6906,262,-1822,4425,3597,2551,3619,-1347,-1495,10059,1193,-6772,9254,-4797,3642,3274,-2497,-5519,3964,1781,3545,6494,-3187,-7706,-8684,1412,-6732,3735,-2612,-903,11784,-2037,9544,-6261,1528,3531,2930,-2268,-6648,5344,-888,2990,3049,-2268,-6274,2125,-2268,6737,-5925,-3992,-6325,2654,-2497,-7129,2572,-3877,-7610,-8684,1987,3578,3160,-2382,3450,3274,-2327,3105,3274,-2316,-5404,3964,1920,-2070,975,4279,9269,-6040,-2037,-1725,9639,1642,-6348,2700,-428,6784,-5607,-1923,-2415,975,4278,1897,3735,1068,-6554,9714,-3787,2555,3390,-1347,8394,-5810,-859,2516,3619,-1117,2760,-2130,-1742,-5175,11357,-3072,1840,-9260,4130,1840,-9144,4080,-6450,2355,-3532,-5235,3964,2102,-7102,2815,-3877,-7072,3045,-3877,-2127,5689,2792,-13914,-9353,147,805,-8454,3107,-13520,-9029,147,3105,-4056,-2268,-5446,515,1297,-6541,3505,-2268,-5249,4195,1987,2793,-4315,-1233,-6899,2585,-3615,-7055,2815,-3762,3910,2815,-2611,-9429,-8652,1068,-4485,-2397,-657,-6620,3735,-2152,2530,-1095,-1703,2870,8679,-3072,-2070,7299,2962,-805,-5695,1150,2384,3850,-312,-3220,10289,923,-6648,3850,-2152,-3679,4145,2792,-25,-635,3367,-4485,11094,800,-6124,1895,262,6899,-6385,904,-6424,4195,-428,-13569,-8853,-772,2875,8664,-3072,-5519,-290,589,-4800,11439,-312,3702,2815,-2382,-1265,-8225,2778,2645,1278,-1692,-5749,3390,1625,-6325,2930,-3382,-6325,-6269,-5400,3585,2815,-2268,-7015,2990,-3647,-690,2010,3867,-4140,6265,2550,-7784,5344,-4337,12419,-8069,3252,-6207,2125,-1578,4485,-7609,3022,-5404,-1555,-2188,-6241,2355,-2957,-6439,4999,-164,-4600,9599,822,3450,2700,-2132,-805,-175,4046,9314,-5885,-1462,-4830,55,2518,2248,1550,-888,2300,3850,129,-6359,4770,33,-6249,8219,-772,2200,9484,-2497,-4255,11818,33,-6670,3812,-1578,-7015,8591,-3762,-2185,12069,-2037,-6687,3850,-1578,-10579,-7720,-2727,2146,9484,-2382,-7574,7644,-4452,2373,3274,-428,-6256,2470,-2842,-2185,-2189,2447,-4343,8679,1642,2185,3816,378,-13109,-8865,262,3098,2700,-1807,-343,-3740,1183,-9889,-7594,-3187,-5980,448,-3072,-7991,-6500,-3187,1035,8697,607,11154,-6155,-153,-3795,11899,-1251,3450,-4774,-4386,460,3619,2831,-6269,2930,-2842,-6439,2930,-3476,3680,2240,-2233,6439,-5557,-1117,-6615,3505,-1233,13454,-8915,2817,-5334,-980,-1462,617,-2015,492,-6766,9139,-3187,1746,3045,1412,-5371,-750,-83,-6287,2930,-2727,-920,-816,4172,2302,3505,-83,2300,3505,-43,9889,-6096,952,12431,-6614,952,-6209,2112,-888,-10809,-10590,3022,3571,2470,-2152,-8739,-8871,723,2150,1320,-772,-14604,-9195,-1692,-6104,1434,-657,2026,3850,723,-4024,10519,540,2206,5114,-83,1795,-9260,4172,-6456,5689,-83,13298,-8684,2792,-7116,6839,-1578,-7475,3609,-4222,-7129,6954,-1589,2255,3274,33,-6313,2585,-2382,1962,3850,838,1124,9484,-888,2760,2240,-1151,-6899,7529,-1413,-3910,-2130,838,-5708,7184,1183,-6325,2700,-2514,-6295,9484,-1347,13237,-8799,2908,460,1434,2999,-8438,-6845,-3417,-7093,6839,-1462,7980,-9374,4287,-5290,1895,2016,3220,2585,-1873,-2070,-175,4537,-3480,285,3827,-690,-1523,3367,-5635,7184,1276,-6336,2930,-2382,-1265,11646,-198,96,285,3252,805,860,2558,2088,3274,723,-7500,6839,-2957,-7539,6839,-3072,2530,2470,-1084,-6209,2212,-543,-8510,-9260,1188,1150,-2015,14,-2530,10864,1351,-2300,-1250,4172,-6517,3505,-657,-5212,-1095,-888,12278,-8570,3827,2159,3274,378,1801,3850,1183,12994,-6845,1281,-6439,3045,-2099,4024,4540,-2878,-3105,8334,2370,-4255,11439,809,-5187,2815,2218,-1290,3505,3597,-6420,3390,-428,-6439,2936,-2037,-5068,-6959,-83,-7244,3698,-3992,1265,5459,1628,-3393,1665,3712,14604,-9374,1609,2300,5689,-96,-1610,8449,2368,-3105,-9260,3080,-5479,-5810,-2957,3006,2585,-1462,-6369,3505,-312,1840,10037,-3417,115,10816,-83,-7407,7414,-3302,-7934,5289,-4452,2415,2010,-906,-7583,7644,-4797,-5441,7874,1183,2077,3505,723,1446,-3970,147,-4792,4540,2218,-920,-1276,3827,-6272,2240,-1462,-6386,2700,-1807,-6044,745,-657,-920,-1162,3942,-14259,-9949,-2567,-4369,-1301,2677,-6257,3160,33,10924,-6282,-1002,1402,6494,1183,-7144,4540,-3532,7820,-5709,-2037,-6209,3256,147,-5546,11439,-1233,2316,2815,-428,2318,2700,-428,-5635,5804,1727,2567,4770,-772,-6312,2355,-1233,-5864,1205,576,-1725,12014,-2906,-6784,9254,-4735,1855,3619,1183,-6203,3274,262,272,-635,3022,9774,-6246,1528,1957,3274,952,-6325,2585,-1363,-6555,7414,-428,10607,-6500,-1692,-1840,6030,2677,2530,4999,-676,-3373,5459,2447,-4714,11548,-2152,-4255,-9344,3022,2095,2125,147,-6500,3045,-1347,-3450,-1325,3807,2185,2240,-198,-6253,3505,262,3630,3045,-2382,1872,3390,1183,-5349,-5235,-3647,-3910,-7672,1642,-2166,4654,3827,-6670,-7361,147,690,6149,2265,-460,6265,2749,1874,3274,1183,-4369,11499,-3877,6507,-6845,838,1840,3390,1267,1150,-6385,792,-3220,-6269,334,-3795,7414,2554,-6206,3390,492,1823,3274,1297,-6160,3274,723,805,-3395,415,1765,3505,1412,1725,3505,1476,-3316,7989,2447,9429,-8406,4057,7557,-6155,1297,5635,-8145,2447,10924,-7758,4172,-6371,9714,-1578,-15984,-10754,-3244,-6356,2585,-657,1455,9024,-772,460,6149,2444,-5576,9944,262,-7119,6494,-1578,-4255,9024,1480,2115,2355,262,-6339,2585,-543,-5937,7759,607,-1840,11969,-3302,98,-1670,1873,1380,8979,-657,-4365,11669,-1923,-6305,2585,-428,10349,-6155,1297,-6487,9829,-1807,1380,9024,-724,-6099,3274,1068,-10119,-9374,2418,-5864,1981,952,10004,-6196,1412,-1725,9502,1757,345,9484,662,2102,2585,378,1610,3160,1739,1522,3505,1873,2140,-2475,-657,-6955,6265,-1117,1326,3735,2102,12649,-6732,147,-3105,4309,4174,-5175,10315,492,-6325,2815,-256,5290,-5307,-3992,-5635,6265,1780,-5802,2125,1183,-3335,-1928,2563,-5635,-5119,-3851,-8969,-7075,-3112,1973,170,-772,656,1550,2792,-7671,6149,-4682,-4255,11485,-3992,-7563,7414,-4797,-6281,2930,-83,8739,-7320,3482,-2645,9254,1933,2543,4195,-888,-4255,3850,2608,-1610,4309,3422,-6979,6724,-1117,1986,2355,723,2415,8564,-1254,-5980,3735,1219,1814,2930,1297,-1265,6265,2726,-6172,2585,147,-7616,5920,-4107,-14273,-10639,1528,-2415,2815,4039,-7589,-8641,1987,-1150,10530,723,-2185,11324,1064,-4024,3850,2694,-5941,3735,1297,723,-635,1987,-7129,5716,-2037,1725,3045,1463,6720,-6155,-4222,3680,-5697,-657,2185,-5235,-101,-6085,2355,492,-5864,3505,1439,-1725,12049,-1807,-5749,3160,1619,-1265,6494,2872,-3776,-6730,147,0,1823,3367,-4369,11439,-3675,583,-2475,492,-4024,3619,2775,-5797,3619,1528,-2990,-1642,3597,-4700,-1440,607,-6170,2700,378,-5653,3160,1757,1265,10323,-2497,1035,1090,2263,2921,8334,-2268,1087,4309,2218,-4714,-5810,-1059,-3910,3714,2792,-4341,2125,3022,492,6954,2218,-5749,3619,1609,-690,3850,3124,385,9484,607,462,-2475,607,-7589,7640,-4912,1821,2585,1183,949,3274,2563,3795,-8735,3482,-3709,3735,2908,-3679,3619,2928,-10924,-7789,-2268,-5635,3505,1793,-3565,3566,3712,-5059,6711,2218,-5946,2355,952,-6439,2899,-2037,9429,-6730,-2776,-2902,-5119,607,1968,2585,838,-5404,3160,2028,-6325,-6444,-2957,690,3274,2762,-805,-3855,1365,-6325,2527,-1578,587,-2360,492,8394,-5768,-1807,-13382,-8799,-428,-3910,3505,2855,-2070,12112,-1002,-805,745,3785,-230,3619,3098,2677,3619,-2268,3508,-5695,-5602,2167,1780,-198,1610,9568,-1578,-3450,2510,3712,-5953,2470,952,-3626,-2475,607,-14719,-11662,1757,-5404,7529,1376,1610,2240,1598,-4543,5230,2218,-3679,3505,2944,1265,2930,2184,-7533,7069,-3302,2112,3045,492,-1035,11151,723,-2063,-1900,2218,-7268,7529,-2842,3507,-3740,-3532,1610,2815,1678,12302,-8109,3367,1380,2125,1977,1725,9139,-1104,-6899,1895,-3499,-5864,2585,1239,2415,9082,-1923,1955,3964,823,2474,9829,-3992,-6439,2783,-1233,-10644,-8339,147,-6031,3045,1068,-5030,3274,2332,-1725,4654,3228,0,3274,3104,-11384,-9029,1594,-4024,8969,1642,1495,2240,1820,115,-9029,3769,9755,-6845,3252,-6094,10404,-2664,-7475,5459,-3594,3450,7529,-3691,-1453,3850,3597,-1495,3850,3651,-920,5575,2702,-5336,8334,1068,-7015,8895,-4567,-345,3160,3243,-5140,3850,2218,-5404,6954,1724,8855,-8684,4719,3105,-3510,-2511,-4255,2930,2858,501,860,2908,1380,2930,2050,-4830,3505,2422,1380,3045,2054,-6899,6149,-1016,2645,285,-2551,11729,-6614,2036,2448,9829,-4682,-920,3493,3252,-2070,-7420,1483,-4945,2125,2455,-4140,-1647,1757,-7528,6724,-3187,8565,-6959,-3532,-2530,5689,3058,-5749,10864,-862,-7566,7184,-4682,3680,7299,-4144,-4140,3160,2852,-4218,3274,2792,920,7060,1642,1937,400,147,-4024,6262,2563,-5864,-8249,1297,1103,2125,2332,-5864,2815,1380,260,10979,-1117,-5869,3045,1412,-12879,-8454,-1692,3515,7069,-3417,3366,3964,-2382,-4600,11579,-1807,-5290,-932,-428,-5533,2240,1757,-4608,3390,2563,1326,2815,2102,5062,-7994,2792,1265,2240,2149,-9659,-7420,-2542,12304,-6824,-428,-3679,6265,2661,-4011,3160,2908,1035,2125,2427,509,10519,-888,-5635,2470,1663,-6638,6724,-312,-5789,2930,1528,-5749,2930,1588,-7475,-7537,-1692,-6355,9944,-2037,-4727,10404,607,575,6379,2376,-6505,9599,-1692,805,2930,2699,1306,2470,2102,575,-4890,690,-4776,-8225,1873,-4485,-7190,723,-5864,745,-1875,2793,6954,-1233,-5473,2355,1873,-7025,4770,-2612,-7704,7414,-5083,4830,-8610,4402,-345,11439,-3557,-1495,3688,3827,-3749,11324,1068,-3487,3619,3827,53,10519,262,-6705,9369,-2727,-5404,-750,-158,-6656,5920,-657,5404,-7535,1606,-115,-6730,1164,2565,4195,-1117,-2760,-8570,2613,-1266,3390,3597,-13,515,3367,-4741,11554,-2268,-805,3045,3343,-345,11461,-3417,-3679,2460,3482,-5519,2585,1857,1128,2585,2332,2092,2010,262,-5980,995,-2037,345,2930,3009,-3267,3850,4172,-6742,9024,-3992,-4140,2470,3012,4819,-7420,2332,115,-2205,1183,-805,2930,3379,-5635,10917,-1807,-3649,2930,3367,1150,9112,-428,690,2125,2806,-3400,3619,4057,-1035,6265,2734,-2185,12142,-1117,1035,2585,2438,460,-4315,700,-2415,2852,4057,-1840,-290,4560,-4024,-5465,-317,-3910,11669,-1432,-3795,4770,2426,-1610,-4890,1177,-7472,6494,-3187,-7015,-6959,-5083,-3910,8427,1987,-2645,-1555,3877,460,2125,3016,-7129,6265,-1622,-1095,3274,3367,-1150,3160,3414,920,2470,2588,-7359,7228,-2612,30,3045,3137,-5897,515,262,10464,-6762,2792,-14604,-9890,-543,-6670,-7234,-428,-1939,3850,4402,-14393,-9949,262,1918,-7994,2908,5980,-7538,1757,-4485,-8225,2019,-5230,630,1987,-5059,11519,-1233,920,4885,2094,5980,-6766,492,-1495,11094,1036,-7535,6494,-4682,-460,-2360,1744,-8394,-7210,-1923,-1382,-8684,3022,10809,-7626,4057,10859,-7649,4057,-1035,11258,607,-3281,3619,4287,7224,-7880,2677,-4600,-1210,2179,-2530,539,4287,-5749,5344,1385,-5175,-865,667,-7244,8564,-4356,-575,2930,3336,-2300,-1134,4287,707,2355,2792,706,2240,2792,2155,2470,33,575,2700,2896,-4255,2240,3038,-3795,2470,3355,-9199,-8225,435,-4161,2240,3137,11384,-6123,1068,-605,-2360,1873,-5059,5689,2069,-7126,3505,-3992,-1265,3274,3564,2517,9484,-3532,9084,-6001,-2152,-3304,-3740,378,-5635,-7994,1108,558,2700,2908,460,2815,2967,2106,860,-888,-7359,4289,-3992,4600,-5235,-4251,-3268,3390,4172,230,2404,3137,-7041,5230,-2268,2563,5575,-543,-7244,4195,-3331,7875,-6500,2332,-805,2815,3415,-2990,-4545,557,466,6610,2447,-4024,6379,2643,-1566,11899,-198,-4945,-1511,-1002,-3795,10807,952,-805,5079,2792,2130,2240,33,-384,-2245,1757,-3795,2186,3597,-5064,2700,2332,1265,-2820,109,-5048,3045,2332,-3964,1780,3482,122,10864,-198,-3565,2585,3501,-5059,-6956,-83,2875,1434,-1493,-4546,11439,-4452,-3910,8334,2036,2185,8546,-1002,2530,5575,-477,-45,11094,-543,2070,10323,-5487,-230,5362,2677,-5951,515,-428,156,2700,3137,-115,2815,3228,-3722,10864,1068,-1221,-1440,3827,-2990,-980,4365,-3973,-7075,952,0,2470,3233,5980,-5695,-4276,-4714,11565,-1923,-4714,2585,2617,10694,-6067,-428,1150,8971,-83,12524,-7420,2677,-4600,55,2950,-1035,2585,3628,6784,-5601,-2037,-7032,8679,-2612,-3220,3505,4384,-1114,2700,3597,-920,-422,4172,551,400,2792,-8394,-7254,-4452,-115,11483,-2727,2070,774,-198,-575,2815,3356,-10119,-7684,-3072,-1840,12040,-428,-2185,2930,4083,-2300,2930,4099,-2530,2930,4082,-15754,-10328,-2612,-3335,3185,3942,-79,2585,3252,-5272,-2015,-1923,719,7414,1757,-2645,-980,4389,9429,-6032,-1807,2719,2930,-2037,1688,-7765,2677,-4600,2470,2711,5749,-6614,203,-1035,2484,3712,9148,-6040,-2268,-5404,-8462,1757,-1265,2585,3737,-13995,-11789,2332,230,3505,2957,-1150,-1325,3927,-3795,2010,3646,-3024,3390,4517,-13339,-8915,109,-6120,1780,-1462,-3220,2815,3792,-3795,-635,3933,-690,2585,3473,-2120,3045,4172,2300,-6969,1757,-2415,3045,4223,-115,9241,1412,6094,-6092,-543,115,-7190,2292,-3220,3180,4057,-3335,2125,4004,-575,2125,3739,4485,-6959,2058,-4830,5851,2218,9659,-6092,-1692,-4614,2700,2677,-3684,2355,3597,-1380,2585,3842,345,55,2963,2376,3505,-428,-7475,8122,-4222,-690,2564,3482,-12879,-8711,-2612,7704,-6252,1642,-4524,-1325,1873,-4830,-1670,-916,-575,2240,3602,-6104,1090,-772,-4735,-865,2563,-3795,2240,3569,-3105,3188,4172,-920,8334,2303,-4703,11439,33,-10464,-7924,-1347,-5149,3735,2218,-4369,2815,2818,-805,2341,3712,-4830,11324,201,-3105,2470,4047,-2737,-520,4517,187,285,3137,2300,-1002,-1347,-5941,400,-428,-2760,2815,4025,-2990,2815,3972,1955,2700,912,-3450,-5695,177,5749,-7328,1412,575,-557,2563,-6923,6034,-1117,6670,-7152,1412,1595,-520,-312,2820,7069,-1347,-6013,860,33,-1495,2540,4057,2537,4654,-657,-1265,11865,-1002,5864,-8827,3367,-4714,-1837,-772,-3070,2470,4057,-2300,2700,4109,-7129,-7947,1183,1379,3274,2102,-2415,3242,4402,2990,2324,-1347,-6043,-5580,-5142,-6037,860,-83,-2875,-3395,890,-11499,-8263,-543,-341,2470,3367,-460,2585,3387,-1840,2585,4215,-137,170,3482,-1840,-3050,1632,115,-7075,1328,6899,-5559,-2268,1859,2240,1068,1495,-7270,2102,-115,3390,3125,-32,-2245,1412,819,2240,2677,-6439,3160,-604,-4069,11094,952,-5980,3001,1183,4369,-5216,-2727,-2185,2240,4231,-2846,2240,4172,-7475,4978,-4222,-7589,4744,-4682,2315,3160,-198,-6209,-6269,-3265,2011,10289,-4337,2366,-865,-1462,12879,-8684,3290,-7359,4765,-4222,9955,-7649,4057,10234,-6109,1068,-7820,5344,-4380,1980,9369,-1807,-5490,-750,-1002,-7475,5373,-3647,690,-8599,3252,-6209,-5810,-3830,-7155,4540,-3877,-7820,-6840,-2842,2162,7529,-198,-7359,4353,-3762,-7154,4540,-3762,5749,-6951,838,-12189,-8146,-1923,-9544,-7385,-3187,-1265,10679,952,-5099,-8454,1987,-115,-7200,1873,-1840,9006,2102,-7604,5230,-4107,-7015,-7689,492,2142,9024,-1462,-10694,-8253,-3762,-5175,5230,1855,-1150,-2050,2792,-3795,9310,1528,-7648,5459,-4107,-2990,-5810,511,-1610,-2236,2332,-4724,11554,-2037,-4140,6123,2447,-5404,11065,-772,-6623,4885,-1117,-7244,4879,-3417,-5316,11094,-657,-7475,5230,-3811,-7140,4540,-3302,2070,2010,368,-7015,4940,-2497,11499,-6643,-1002,1203,2240,2218,-345,-4890,1104,2439,4195,-312,-3565,-7459,1528,2195,1434,-543,-5980,10519,-2524,-7320,4999,-3532,-7519,5689,-3647,-7510,5575,-3647,-7129,5197,-2612,-6700,4309,-1807,-7286,4999,-3417,-7129,4617,-2957,2701,3735,-2152,2185,-6701,1412,2208,-2015,-888,-7273,4999,-3302,-7475,5689,-3417,-4830,9563,723,-2760,285,4300,8624,-6021,-2612,-11124,-8570,-3762,-7446,5689,-3302,-920,-1210,3900,-7084,4770,-2727,-4255,3045,2828,1725,-3855,-54,-6003,4309,952,1439,3274,1987,-6906,4540,-2612,534,285,2792,-11269,-11181,3252,-12074,-8799,-3363,-6670,4080,-2457,1955,-3598,-198,-494,7184,2792,-6726,4309,-2497,-805,4540,2897,-5635,6149,1788,-6085,1090,-312,6209,-7535,1795,-6832,4540,-2497,-230,11470,-3302,-1840,12026,-2727,-10464,-8063,-772,-6306,3735,33,2645,5230,-826,-4945,6915,2218,4255,-5871,-198,-7151,5114,-2727,-13529,-9029,-2612,-7172,5230,-2727,2849,4770,-1692,2530,5114,-627,10119,-6966,-2497,-690,-4774,1201,2990,-2632,-1807,3795,-4676,-3417,-6871,4770,-2268,5175,-6258,-543,-13454,-9867,1987,-6899,4195,-2779,-6694,4309,-2152,-4830,-8570,2262,-1380,7632,2792,-5669,-175,-2727,-7015,4999,-2431,-3565,1638,3597,2613,5459,-657,-345,11624,-2152,2875,9222,-3877,-3910,-4545,-102,-7079,5230,-2382,-1265,-6385,1048,3680,4478,-2727,2557,5459,-543,2326,5114,-312,-5519,8104,967,-575,9254,1680,-4971,7414,1873,-6027,-5695,-5372,1526,5344,1297,1840,-8447,3367,6867,-6614,1068,0,1895,3357,10598,-8225,5092,-1495,9944,1313,-5864,975,551,-7359,-6385,-3385,-3910,745,3338,-3910,170,3505,-6948,4999,-2152,-5519,4962,1528,-2875,7299,2806,-5290,-980,-969,-7159,5689,-2268,3680,2700,-2306,8985,-5810,-1462,-7496,7069,-3072,-4140,11894,-543,3105,7333,-2037,-4369,-7616,1412,-6554,1665,-2669,-5254,11094,-543,-2070,-635,4536,-2070,-520,4553,-1258,11899,-2842,-690,10884,838,9774,-8482,4517,-4362,-6040,-543,1610,-2590,-150,10464,-8684,5275,-12879,-10984,3054,-6094,-5810,-3902,7589,-5999,723,3680,4616,-2612,3565,4540,-2631,-7001,5344,-1923,2645,4540,-1365,-5940,285,-428,-5145,-3510,-1692,-6439,-5465,-3814,-623,-3165,1412,-256,11554,-2842,11154,-6614,-1389,-1035,400,3968,-5164,-3280,-1692,-5749,-6451,-1923,-6757,4885,-1578,-4024,-8714,2563,-4600,8119,1757,-1035,-581,4287,5635,-6625,262,9691,-8570,4517,3408,4540,-2497,-6760,4080,-1462,-7515,6610,-4912,-6165,2125,-312,3051,5920,-1578,-5026,-5695,-1807,-1260,11899,-2497,4024,4080,-2935,2690,8909,-2268,3795,4195,-2882,-3795,10736,838,2185,4996,147,2070,5114,219,2581,4654,-1002,3450,4309,-2697,-6548,3274,-1692,2579,3964,-1692,2487,9829,-4107,-6825,9139,-1923,2415,-8425,3022,-3066,-405,4402,-6670,4250,-1347,2094,9829,-3302,4024,-5331,-1807,4945,-8454,3880,-4903,6724,2332,2043,5114,262,2074,5344,147,-6774,4999,-1462,715,2470,2792,-12074,-8303,-888,-7040,5689,-1578,2645,2470,-1152,-5500,-520,-2268,-5795,9369,-83,805,-4085,513,-5519,9944,318,-460,-4545,1170,1610,-8647,3597,2583,3964,-1578,11919,-8799,4172,-6717,4080,-1233,-8432,-7880,-657,9595,-7190,3482,-6670,4195,-1154,-4024,-3280,-278,2760,-2590,-1605,3450,5764,-4452,1473,-6385,1183,-4369,11493,-4222,-5774,2470,1412,-6580,4425,-1233,7475,-5778,-2842,-345,-520,3768,8739,-5735,-1347,-460,-7075,1237,-6564,4540,-1233,-3450,-6959,429,2647,4309,-1462,2218,4540,262,-575,4425,2919,2896,8679,-2842,1840,-5715,262,-115,-2015,1741,-6784,5230,-1220,-6899,5529,-1347,-6656,4195,-1117,-7234,3274,-4222,-1265,-520,4452,2232,4080,378,805,3735,2609,1049,-8915,3712,805,-1271,952,-2760,-9374,3110,-2070,4770,3570,-1725,1780,4101,-3795,6034,2431,-6554,4770,-1121,-6899,-7880,1172,-12879,-8500,-1002,-8165,-7105,-2152,-7129,-6304,-3647,-189,9024,1642,756,1320,2677,-7265,3390,-4222,-13914,-10704,2102,-5745,11324,-1462,1953,4999,723,-6564,4309,-1002,7475,-6681,2102,-5494,11439,-1578,-15524,-10639,-1658,1840,5230,700,-6674,-7304,-198,-1035,-1124,4057,2185,5071,33,-6405,6149,147,12142,-6500,1183,-6505,4540,-1002,-6497,4654,-1002,-6554,4800,-1002,6063,-6040,-657,-4369,3160,2746,-6587,4999,-888,2371,4770,-198,1413,-4890,262,2600,4080,-1347,5290,-8587,3482,-3335,9254,1770,-5749,-5580,-4119,-2070,11094,1160,5317,-5235,-3417,3079,4425,-2152,-13799,-10607,2218,-4952,285,2332,5404,-5407,-4222,4485,-6845,1895,-6569,5114,-772,2645,5575,-740,-1610,2930,3792,-575,1780,3814,-6490,4654,-888,-6554,4885,-850,2630,5114,-888,3387,-3855,-3187,11269,-7994,4619,4140,-6269,1011,-7494,5804,-3532,9429,-9260,5058,1725,4999,1065,-4361,1895,3137,7360,-5890,-3417,-7340,6149,-2727,2391,4654,-198,-7129,2976,-4107,-6521,8794,-1462,-6532,5230,-543,-7445,7184,-2957,-5290,11446,-1002,-3679,9656,1297,-2990,11209,1279,1955,5459,477,-666,10404,492,-6439,4520,-657,-6503,4999,-428,1612,5230,1183,7360,-5666,-2727,-1495,10864,1136,2530,4309,-739,-3910,11324,1004,-7312,4309,-4107,-3910,11419,952,-4714,11364,-4912,-3105,-7130,838,-6921,5459,-1462,2530,4195,-842,-6439,5637,-83,-6581,3390,-1233,-485,2700,3367,1545,5575,1297,-1330,4309,3137,1495,5575,1359,1536,5689,1297,-6477,4770,-543,-6524,8679,-1462,5179,-8109,2792,-6474,3964,-428,-6439,3964,-356,-3402,3274,3942,2456,3964,-772,-1150,10519,700,-460,-6959,1197,-11154,-7939,-2497,12252,-6730,1757,1334,4999,1642,-5923,10634,-1233,-7129,8449,-3850,401,-750,2792,3635,6379,-3762,2476,4309,-543,-13848,-11559,2677,-6439,5438,-198,-6439,-7015,-772,-7555,7989,-4452,2037,4885,492,1184,5114,1757,-6364,4425,-312,298,8679,1528,-575,7989,2375,5404,-8339,2889,-3022,-3855,607,-5864,-8570,1595,-11844,-10869,3281,-6439,4654,-253,3531,5689,-3417,-6331,4080,-198,2463,4195,-543,-6719,1205,-3072,-690,11609,-3187,-7220,-6730,-4912,2760,1282,-1692,2215,2355,-312,-5635,-5580,-3928,-3565,6954,2799,3560,5920,-3877,-9659,-9971,2102,-11959,-8225,-2502,3565,5575,-3305,-9389,-8454,838,-1955,7644,2816,-3220,-7081,952,-4830,11524,-2268,-1495,-4429,1280,-3220,2010,4014,12419,-7190,-1108,-5314,-5465,-2957,2059,4654,492,1910,4770,723,-1150,1665,3769,920,5459,1956,-11455,-8109,-1347,460,4999,2289,-4369,7529,2220,3583,6034,-3762,-7258,6494,-1923,-6670,-7636,723,-7359,-7903,-543,1069,1665,2332,3795,5548,-3187,-5323,-5580,-2842,-3910,11784,-2507,-4830,11094,492,3626,3505,-2612,-6271,4080,33,2191,2125,-198,4024,-5755,-428,3735,1665,-3417,-13018,-9374,1297,2990,-7190,1815,-5980,-9320,2447,3565,2355,-2100,460,9829,-35,-6301,4540,33,-4485,11407,-4797,-690,11525,-772,-6386,4885,33,2300,4540,136,-5290,-5719,-2612,-6310,5575,378,-6349,5459,378,-5172,-2590,-1692,608,5689,2218,2382,4309,-83,-5255,1090,1873,-6869,-6155,-4337,-1200,11899,-2037,690,-3483,492,1801,4885,952,6439,-5543,-1233,1804,4770,952,1817,7414,492,-97,8564,1873,-6325,2452,-1807,-2760,-2984,1183,-805,-4085,1332,-6268,4540,147,115,5632,2447,2606,4080,-1578,-10119,-8178,-83,2990,9024,-3998,-4970,11554,-1233,-3910,1514,3367,0,5344,2538,2143,4540,378,2185,-8726,3482,-6268,2240,-1692,-3335,8334,2303,2875,2784,-1692,-2210,975,4287,4381,-5235,-4337,-1380,-3165,1611,920,4999,2035,-1150,1550,3764,-3145,4770,3482,-7244,-6959,-5079,-6234,4425,262,-1840,3105,4057,-6784,5440,-1117,-10394,-8225,-3992,3734,-4545,-3187,-1035,9969,1183,-460,8564,2038,3450,5689,-2813,460,5459,2249,1840,10317,-5602,-7015,9e3,-4912,2351,2930,-543,-12304,-8364,-772,1617,8679,-428,-7173,7184,-1923,-7148,7299,-1923,1380,7931,838,-9544,-7831,-888,-575,5230,2775,3795,5561,-3302,-276,5459,2677,-575,5459,2735,-6209,5575,723,-3488,-2015,2102,2530,-5810,261,1724,2470,1412,-3565,-2590,482,-5059,6149,2245,-4369,11628,-2727,-1380,-4545,1266,-5162,860,2218,3565,5459,-2646,-4600,1895,2778,-6399,9829,-1692,13224,-8484,2677,3680,5317,-2727,12304,-8799,3614,2319,4195,147,-1215,-635,4402,5404,-6249,-657,-6180,5689,838,-575,10156,723,4140,-7190,2394,2956,-3855,-1692,8049,-6959,3091,2185,4239,378,1061,9369,-657,11858,-8684,4517,-4369,1895,3125,-4882,3160,2447,-5519,-8839,2218,2353,9599,-3417,2300,4074,262,1693,4654,1183,8510,-6331,2102,3105,1542,-1462,-5871,5230,1183,-5496,2125,1757,-5059,-5465,-2101,3420,5689,-2497,3565,5325,-2497,-1725,-9069,3252,-7064,7299,-1578,7129,-5925,-3695,-345,2930,3281,-6264,8449,-888,-6136,4770,723,5254,-7420,1528,-5821,5344,1297,3704,5230,-2382,-7244,4399,-3762,-2300,630,4299,115,5414,2447,-2645,3964,4756,-6054,4309,838,1380,4861,1642,-1495,11046,1068,-6325,5613,378,-7244,7836,-3187,-1265,-980,4325,4714,-8799,4524,-3593,-750,4057,-3795,-9834,3267,-2300,-9834,3347,2875,-8751,3137,1437,-520,492,-4830,9829,550,343,6494,2563,-6064,4080,952,3770,6724,-3992,-115,-2360,1410,2415,2774,-888,1265,4770,1817,-4754,-5810,-1117,-13921,-11214,2332,-5635,253,-2382,-14312,-9374,-1347,-6359,2585,-888,2060,4195,607,-321,11439,-1002,11844,-6447,-428,3417,4999,-2152,-3335,-1900,2634,-5980,4654,1008,-6155,9944,-1117,3313,5575,-2152,3335,5230,-2119,-11154,-8339,-3486,-5404,5061,1642,805,-993,1412,-6576,3390,-1462,1218,4770,1873,-5864,4654,1127,3261,5114,-2037,5749,-7649,1874,-5175,4999,1830,-5635,5575,1625,2760,-704,-2152,-660,11554,-888,-3335,5459,2485,5635,-6500,-31,1495,1047,1642,8394,-7561,3827,-3679,4770,2483,2092,3964,607,1741,170,723,-5059,4999,1940,3795,1840,-3417,7820,-6040,780,-4714,11673,-772,-8165,-8140,-543,-5519,5689,1784,-5175,5344,1920,-6611,7874,-1347,-5864,4069,1297,4915,-5810,-1462,-5175,5625,1987,-7359,2585,-4319,-6049,1434,147,2078,9714,-2957,-5059,1320,2404,-6491,5575,-312,1879,3964,952,2875,-8799,3188,-2941,-4200,607,-5707,4770,1297,-5404,5679,1873,2185,-8608,3367,-5837,3964,1412,-13736,-9029,-428,575,497,2792,116,-3050,838,2440,-4200,-772,1610,515,1373,1725,2801,1412,575,4885,2291,2070,4540,464,10004,-6730,-2438,-1725,7759,2746,-5175,5689,2010,-4830,5344,2113,-1955,527,4287,-5635,4266,1528,-345,4309,2923,-5598,4309,1528,-3666,4654,2563,-3525,170,3827,-920,-980,4077,-4945,5558,2102,-3269,-4429,378,-6609,9369,-3877,-4485,-8684,2496,-5519,4425,1556,-1380,4770,2809,-3742,6724,2792,-4999,5689,2102,-14489,-9329,-1117,-7487,6610,-4337,-6784,9139,-3568,-1791,10634,838,-5404,4770,1563,-7820,-8763,1183,-3910,-8339,2306,-1265,-5810,1122,2300,-6730,1448,-4485,5459,2236,-5661,285,-2268,-4485,5689,2244,2040,5575,262,-8241,-9719,2563,829,5920,2102,-11269,-8339,-27,-5708,1895,1297,-5178,11439,-2268,1265,10391,-2612,436,4770,2447,1035,-4315,397,-6094,905,-888,-4116,8219,1987,8049,-6155,-3319,-3105,-2715,1068,6094,-7517,1757,-2645,7989,2590,-4773,-5465,-1347,12764,-6793,262,-5346,4425,1757,-4140,3964,2609,-4255,3964,2574,2530,-8620,3137,1495,745,1577,1955,-9374,4142,-5635,-105,-2268,2669,5459,-772,3565,-4901,-2152,2990,5689,-1310,-6498,4770,-772,-1610,9599,1661,-1150,4540,2911,-5181,2240,2218,-7015,8578,-3647,-9112,-8684,723,-3875,2930,3022,6325,-6547,262,-2415,-1681,3597,575,4654,2434,-1610,6379,2830,-5628,-175,-2268,-2070,12080,-1692,-4024,4080,2606,-3459,-7765,1873,-1150,-7330,2563,64,-1440,2218,-1825,4770,3252,-1495,4540,3059,-14029,-9159,-1002,-6771,9024,-3762,2616,9024,-2842,8165,-6017,-2957,-575,4770,2833,-6209,2470,-126,-5059,4770,1959,-2760,-4774,700,-4485,7069,2450,230,4654,2613,-6145,2010,147,-3679,4371,2677,-7479,6149,-3762,1349,4425,1873,-1380,-4774,1227,-3342,4654,3137,-1443,7069,3022,-575,2355,3498,1071,-1210,378,-3335,1988,3942,6209,-7880,2268,7758,-7880,3137,-6670,-8570,1729,6094,-5943,-4567,-14259,-9924,-2152,-2311,-1670,3597,9889,-9296,5437,7704,-6845,2648,-6209,-5465,-4394,-1221,3505,3482,-7015,-6298,-3877,1495,4885,1492,-345,6149,2700,12304,-6475,492,-1681,4540,3252,1150,2585,2305,-6119,7759,262,-805,-3625,1394,-345,630,3616,141,11439,-2152,7360,-6269,-4070,-4069,-1325,3252,2041,400,-1233,115,1550,3317,-3105,-7190,1711,-12879,-10007,2447,3296,5689,-2037,1431,3619,1987,-6644,1665,-2842,-805,4425,2944,12189,-7994,3364,-9659,-9605,1823,-4707,11669,-1002,3035,4309,-2152,-1759,4540,3367,-6670,4241,-1233,345,11224,-2037,-1725,9178,1987,1035,7299,1457,-3679,7644,2465,-6274,4309,33,-4369,4080,2502,5290,-6155,-853,5175,-8454,3514,10234,-5975,378,-805,4080,3073,-575,975,3649,-3795,10090,838,-1955,11354,952,-12649,-9493,1757,-6209,7989,-256,-5519,11026,-4682,1380,-8570,3405,2015,8104,-312,732,-4774,607,230,4540,2667,11269,-6915,2792,-1955,4470,3712,-1035,5738,2677,-2300,4726,3942,3402,5689,-2382,5635,-7765,1994,-1495,4425,3166,-345,11580,-2497,-5465,-6155,-2152,-3565,4150,3137,1150,-4890,394,-422,-1555,2792,-2266,4770,3827,-3844,-3395,-83,3105,5575,-1782,1177,3964,2218,-7016,8564,-3072,-3450,5615,2332,-1450,4309,3252,-5989,10289,-657,-3450,4299,3252,-3387,4425,3252,3450,-5580,-5279,-2026,4540,3712,-3105,4654,3737,-2738,-2705,1412,-2415,4805,3942,575,-5235,737,-2645,4770,4034,-4485,-1738,492,575,-1367,1297,-4255,4885,2378,-1150,11703,-543,10119,-6033,723,-1840,860,4242,-15754,-10468,-3302,-2415,5114,3592,-7359,-7703,-1347,-7475,7966,-4107,690,7299,1828,7380,-6730,1987,-4024,5114,2314,-4255,5114,2306,-4485,9786,723,10464,-6014,723,-1452,4195,3367,-7734,6149,-4797,-12534,-8615,-2842,-5635,1205,1151,-5749,11009,-4107,-1610,-6269,1016,-2075,4540,3827,-5059,-7185,378,2990,-8570,2972,-3623,4885,2447,-4830,860,2719,-3565,5344,2305,4830,-8415,3942,-4369,8425,1757,-6481,5114,-312,3450,6802,-2727,805,4080,2525,-1955,5689,2647,-2875,1434,4140,-3758,-1900,1873,-115,11291,-3532,-6956,8679,-2382,-4140,-8799,2620,-4349,4999,2332,-7359,-8061,378,-4903,-865,1873,-3450,9484,1550,10809,-7304,3568,-1840,7184,3011,-4140,1434,3343,-2126,4540,3942,-5404,10979,-582,3947,-5580,-5142,-5682,-520,-772,-6784,7874,-1637,-6314,3274,-198,1097,-865,952,1955,-5695,215,-1035,5689,2683,-920,-3970,1373,-3105,-1174,4172,-1332,5575,2563,-6470,3160,-1923,-4925,2815,2447,-14949,-10294,-557,-5980,515,-2894,-3283,630,3942,-7042,8564,-3187,0,4309,2854,-7589,7973,-4567,-1380,11993,-1807,-13454,-9144,-2909,-1495,5359,2563,-4941,-175,2332,-1725,5459,2543,-115,7643,2332,-3291,5459,2563,-2185,4540,4074,1380,4654,1727,-1495,12041,-1578,-6149,2125,-428,-6491,5230,-312,2242,5114,-198,-2185,5689,2849,-1495,5114,2658,597,4195,2677,-4485,4770,2334,1380,-8720,3597,-3220,4375,3712,1081,-980,838,-1035,5575,2686,-5864,6650,1183,-516,-1900,2332,-1495,-6385,1024,-2645,4647,4172,-2895,4540,4172,-920,4972,2792,-7290,6149,-2497,-3450,10979,1243,1840,-2820,-270,-920,5459,2709,2817,8909,-3417,-4879,1205,2677,3335,-4703,-4452,3450,4885,-2236,2541,4309,-1002,-1725,5344,2634,-6439,5475,-198,-7517,6610,-4452,-6094,-7075,-398,-690,4425,2931,10119,-6015,607,-3335,3964,3862,3335,4080,-2360,7454,-5810,-3072,-1380,4999,2695,-2262,5689,2908,-2300,5689,2959,-5339,-3625,-2382,402,4080,2792,-10349,-10710,3482,-1840,4195,3864,11844,-8225,4151,-3175,5459,2792,-2760,-8225,2422,-5989,2470,838,2185,9202,-1807,-1380,-865,4417,-4932,-290,2447,-1701,5114,2792,-8165,-9492,2102,-3337,5114,2792,-3097,-635,4402,-3271,3964,4057,-3779,1090,3367,-2827,5689,3022,-7704,-8799,1952,-5588,11094,-1233,-5921,-5925,-5602,-10809,-8631,-3877,-7085,8334,-3072,-5519,11127,-2957,1771,7184,607,0,-5119,982,-1610,-1779,3367,1324,9139,-772,-3253,5344,2792,-3108,5459,2908,-1495,7639,2792,-4600,3850,2465,5980,-5350,-2636,-7704,5114,-4335,-2029,4309,4057,10464,-8339,5038,-5652,10979,-2957,-2185,5479,3022,-2990,5527,3022,-1955,4195,4105,-10809,-8799,1452,-2530,-2315,2218,-6304,2470,-543,-6418,2815,-657,2137,9944,-3532,-4024,11669,-1419,2686,-635,-2497,8624,-6248,1642,-460,-5465,1122,-2167,4425,4172,-2990,4425,4218,-3007,4425,4172,-9774,-7569,-2268,-2760,5575,3151,-230,630,3563,-3167,4080,4172,-8624,-9260,1201,-1976,5230,3022,-4024,2010,3457,-2645,1320,4233,1035,-6434,838,7589,-9029,3943,-2875,11669,1042,-14259,-11955,1987,-2255,4425,4287,2300,3045,-215,-2990,4309,4324,11851,-6500,-543,-6325,-5810,-4992,-2779,1434,4172,-8624,-9364,1297,-4899,-175,2447,-2070,3964,4510,-2139,5344,3137,-2037,5114,3252,0,-60,3341,-6568,3390,-1692,-920,-6959,1114,-1610,5459,2528,-2760,4408,4402,-4714,3045,2571,-2990,4243,4402,-2185,3964,4599,-2875,5344,3301,-6120,4885,723,-3118,4999,3367,9084,-6084,-2382,-7247,7069,-2037,998,10174,-1692,1265,7989,923,4617,-7880,3367,245,745,3137,-230,-5119,1066,14834,-11214,2737,-6155,1895,-1692,-2415,5344,3392,-5749,10634,-603,4714,-8026,3482,-6051,1550,262,-2875,3964,4727,-2560,11094,1297,8029,-7649,3597,-2415,4132,4632,-2760,4153,4632,8279,-5795,-2152,-2645,5230,3540,-2865,5230,3482,3680,-7649,2467,4024,-5480,-1347,-575,11622,-1578,-2760,5164,3597,-2300,4885,3749,8969,-6328,2102,-2530,5042,3712,-14259,-11904,1911,4485,-6155,318,10234,-8225,4697,-345,-7304,1820,3416,5804,-4797,-5728,-290,-2957,4024,4309,-2903,115,11324,-1711,3450,5804,-4495,460,-3625,644,-6439,2010,-2553,-1955,-1993,2563,-1495,2585,3990,1840,2355,1112,1840,9944,-3071,-14176,-10179,1297,-14154,-10409,1412,3523,5804,-3762,-5656,10634,-428,3519,6034,-4107,-2645,-6500,758,3565,6143,-4107,-773,11554,-657,-805,-6959,1130,-805,-7075,1168,2676,5230,-888,-5844,285,262,-2875,12244,-729,-10924,-8060,-3187,7820,-6614,2518,-115,8973,1642,3680,6494,-3688,3175,9024,-4107,3795,-7190,2084,-3220,6034,2747,3555,6265,-3417,3489,5804,-2842,1495,8843,-543,3910,3029,-2727,2992,8449,-2842,3372,-4315,-3417,2386,6494,-312,-4485,6839,2535,3520,6494,-3072,90,11439,-2382,3483,5920,-2957,3463,6034,-2957,2809,8104,-1807,-8969,-9489,1446,-10349,-8225,-116,3486,6034,-2842,9429,-6412,-2612,3698,6610,-3647,115,-952,3022,3502,6379,-2727,345,-1274,1873,-4347,-1325,2792,3450,7461,-3532,3665,6724,-3417,3450,6034,-2457,3220,6099,-1923,-1840,12069,-888,-5519,-6385,-1769,-5644,55,607,-6439,8794,-1142,3795,6839,-4046,3469,6494,-2382,-115,11456,-1692,3335,-3510,-3646,10234,-9144,5408,230,-1073,2677,-4265,-750,3482,-4024,10289,579,-5519,-9191,2677,2677,6610,-888,3565,7373,-3992,-4714,4425,2276,1495,4770,1528,3220,-4463,-2382,-1380,-5810,1110,3510,6610,-2957,11115,-7649,3942,-3538,8564,2102,230,-980,2780,3729,6839,-3762,-8847,-8570,378,-2364,4770,3942,2467,2815,-1002,2530,7759,-1033,3450,2125,-1852,3479,6724,-2842,6016,-5580,-3992,2111,2010,147,3518,7299,-3762,-3175,5230,3022,1495,-9029,4015,-4830,4999,2130,-5132,-175,1757,3220,-6010,147,-5662,515,-2382,11614,-6226,1068,-5775,10864,-1578,-13569,-9350,723,6439,-7456,1757,5520,-6930,838,2185,1434,-269,612,860,2792,-230,-4774,1059,3119,6494,-1807,3105,6379,-1742,-5290,11035,-4912,3144,6149,-1807,6521,-7535,1873,3419,7529,-3532,-5864,10605,-2612,-690,860,3699,1265,4409,1987,2645,-8053,2563,8510,-8225,4379,1168,4654,1987,-920,2930,3402,958,3160,2563,1204,4309,2102,412,1205,3022,3463,6610,-2382,3455,6724,-2382,-4369,3045,2771,3503,6839,-3187,-4600,11576,-2497,-115,11420,-1462,-4714,3619,2462,3437,7184,-3072,-8112,-8339,-198,-3679,10678,838,3430,7529,-3072,-6209,10127,-2152,3460,7414,-3072,3256,6610,-2037,-1380,11706,-83,3450,7299,-2982,-7129,-7825,723,-2866,1780,4057,-5290,10802,33,3326,5575,-4797,-3612,1434,3482,-5195,11439,-2037,-605,5114,2792,2645,-7930,2447,-7068,8794,-4337,-2990,2355,4139,-2990,2240,4151,3384,6954,-2612,-7015,-8122,1528,9774,-8813,4862,594,-3280,492,-2410,-8799,2792,-6033,630,-657,-1380,-3395,1553,3364,6954,-2382,1860,9714,-2382,3220,7174,-2268,3349,6839,-2268,-575,10336,492,3203,7069,-2152,1380,9599,-1376,2530,3390,-1176,2519,3390,-1117,1265,5604,1642,2530,-4786,-657,7678,-5695,-2268,8624,-6200,1412,-6899,5689,-1214,1725,-3970,-55,1695,-8109,3022,3004,7184,-1807,-3795,3735,2852,2990,6954,-1707,13310,-7649,1757,2990,6839,-1659,2990,7184,-1775,-4600,11669,-1242,2891,6839,-1462,-4772,-1095,1297,6554,-8570,3149,-5059,10174,557,-5059,10289,543,1914,2240,952,8624,-5830,-1807,2927,7414,-1692,2861,7414,-1578,2830,7529,-1578,-6379,8794,-888,-3795,7819,2332,759,9484,-83,-5404,11396,-1002,-7934,5230,-4384,2676,7069,-1002,2645,7184,-956,-5232,-5235,-3187,2965,8334,-2382,2628,7299,-1002,-5664,3964,1642,-345,-9144,3838,-6899,3045,-3470,-3450,-5465,199,7076,-5695,-888,-6328,9139,-772,6209,-5762,-4222,10694,-7420,3807,-1035,745,3898,-10464,-7624,-2268,-3220,-2508,1297,-1495,-2590,1849,12649,-6989,1873,2083,6839,147,-4430,-3510,-657,-5059,2010,2350,-4714,-8383,2102,2090,7299,33,7129,-5842,-3532,2031,7299,147,6325,-7325,1528,1779,6839,607,-6670,7763,-1233,2800,5804,-1002,3730,-8109,2908,-690,-4429,1247,-5330,-865,-198,-6520,-6959,-1462,-553,1895,3827,5520,-8646,3252,886,9714,-888,-3450,8408,2218,1265,-8177,2908,1698,7529,607,1648,7414,723,1610,7493,723,-3105,3366,4402,1536,7414,838,-5445,9944,378,-3450,9254,1724,13256,-7994,1757,1447,7299,952,1267,6839,1297,1419,7414,952,1380,7414,989,2875,1632,-1233,-230,11360,-3532,-5635,2815,1732,-6629,9714,-2037,9314,-6402,2332,-3184,3964,4287,1102,7184,1412,-3910,2302,3367,-14259,-9398,-1807,3450,6610,-2316,-15409,-10179,-1757,-1265,11836,-3417,-2714,-6500,723,-4024,-6337,-198,-12649,-9903,2332,-690,5230,2772,-1725,8909,2152,6094,-8454,2968,-2760,10634,890,-6094,-7880,933,487,9369,607,-2645,9484,1777,345,11151,-1923,2810,8449,-1923,-690,-5350,1161,1035,7529,1369,-3220,10174,1024,2530,-9532,3942,-1955,11209,1077,-6439,8074,-1117,-6784,-8109,1429,1873,10404,-4222,7360,-9065,3942,-7704,6235,-5142,-1380,8909,2122,483,10979,-1578,-7934,6724,-4501,-6478,8679,-1347,2070,2465,492,2808,6610,-1233,-4497,3619,2563,-4117,-5465,-428,2584,9599,-5372,-6670,9317,-4107,3450,-4422,-3187,-7851,-8570,378,-2875,10174,1108,-3565,8449,2139,3565,-5580,-5341,11844,-6792,-888,-5290,2930,2140,-9889,-7552,-2957,-2875,-3740,757,-7589,6309,-4567,4255,-6229,838,2009,630,33,-3503,11209,1183,-6439,4386,-657,3565,2010,-1939,-1495,-2296,2102,-230,11185,-198,-5980,3390,1311,2300,6494,-146,-2185,-9144,3111,322,7069,2332,-13109,-9233,952,3164,5459,-1923,2645,6610,-822,1380,-6595,1528,-7589,6698,-4567,2626,6149,-657,-3450,-120,4057,-7704,7299,-5064,-7704,-6988,-4567,-963,11784,-1578,-6742,9484,-4337,2218,1090,-1578,-7708,5920,-4337,-2760,12144,33,-5575,-635,-2612,-1380,-6959,1076,2475,6034,-312,-7371,6954,-2382,149,7299,2332,-7417,5804,-3187,-4990,-3625,-1347,-7612,6149,-4222,2740,5114,-1117,-6209,8150,-428,-6567,5920,-312,-5635,9024,231,2475,6379,-428,-4485,1320,3156,-5290,5920,2031,-14029,-9991,1297,2497,6610,-543,1769,8219,33,-3877,10404,607,-7820,6839,-4540,11959,-6458,-312,-2530,-7994,2352,-385,7069,2792,-460,7069,2817,12764,-7649,2524,5452,-8454,3022,-1150,11784,-1222,-6670,-6938,-2152,3105,8298,-3302,2418,6724,-428,-13079,-9029,607,-7563,7184,-4567,-345,7490,2563,-920,5804,2701,2645,-2130,-1762,-7530,6034,-3877,11154,-6959,2880,-6964,8679,-3647,-12419,-8405,-657,3680,-5207,-1692,-4753,-1900,-888,-4830,10519,597,-1212,11899,-2957,2875,5781,-1117,-3679,9769,1183,2760,1140,-2037,474,7759,1873,-4369,11488,-3532,-4824,-290,2677,-7486,6954,-4337,2990,9021,-3992,5430,-8570,3252,-115,11375,-3187,-7533,7184,-4337,-6488,2930,-1347,-4647,-1440,838,1035,-8454,3088,1338,-1555,-198,-6784,-10125,2908,-4600,-6806,147,-3034,-1555,3712,2849,6610,-1347,345,7171,2218,2185,6149,117,-6597,3735,-1807,-5290,11137,-3877,-1725,4203,3712,2070,-7342,2218,-3036,6839,2908,-7015,-7994,1359,-4945,11248,-4682,-6670,9327,-3417,-2875,-4660,622,2070,6494,232,-2760,55,4385,-6209,2087,-1117,-6554,3350,-2037,-4140,8200,1987,-3220,9634,1528,-7475,6494,-3460,2050,6494,262,1898,5920,492,1840,6034,561,2113,6610,147,690,7989,1563,-2698,-3395,1068,-4714,1090,2863,-6934,5230,-1692,2034,630,-543,-2645,4999,3774,5404,-8225,2628,1380,-7605,2447,-7550,6839,-3647,-2185,-2015,2584,2797,-3050,-1578,575,-6966,1987,-5164,6379,2218,-2835,-7075,838,-5672,975,952,-10809,-8417,378,-7475,-6845,-4705,7244,-5753,-1117,-4788,-60,2677,-7553,6839,-3532,-2138,5804,2792,-7359,7502,-3187,3082,6379,-1692,389,7299,2102,-3679,-2475,473,-2875,5575,3108,-2300,-1603,3712,-2277,5804,2908,2990,6265,-1427,2530,9714,-5223,-4361,9484,1068,-6439,3619,-490,-4763,860,2792,2645,9714,-4279,-7300,5920,-2727,-6253,2240,-1117,-7426,7414,-3417,-7475,-6717,-4337,8165,-6019,492,2070,794,-888,11614,-6845,2523,7927,-7994,3482,-3157,9024,1987,4024,4195,-2917,8394,-6228,1642,1563,6379,952,1056,9139,-198,-4714,-3625,-971,-3910,5689,2225,-9138,-8799,838,3335,-3290,-3302,-4518,-1670,607,7704,-5708,-2268,-4255,-8109,1979,1495,6379,1055,2559,-1325,-1692,-7365,6610,-2497,166,10864,-312,-6750,5804,-888,-6539,9599,-3302,-3151,4425,3827,-4255,11569,-2842,-4485,7184,2384,-5635,10313,33,-4714,-3510,-968,-7224,6034,-2152,-7351,6494,-2382,-1035,-2130,2344,-6586,3619,-1692,1955,9210,-1462,-7338,7414,-2957,-1955,4425,3781,-3105,-7125,952,1422,6265,1297,1265,6034,1589,2300,-7592,2332,-7589,-8160,-312,-5028,400,2218,-7820,-9103,2563,-3410,1320,3712,3450,-8799,3326,1150,515,2050,230,-7994,2714,-7422,6954,-2612,-1035,-2e3,2563,-3054,3850,4632,1265,6724,1327,2415,-4085,-727,-1035,5920,2663,-1150,5920,2628,-1840,9139,2019,2645,6265,-722,920,9599,-679,-6449,4654,-543,-7244,4540,-4107,2300,-6106,723,12152,-6730,1873,-4024,11705,607,690,6724,2112,-3450,5114,2620,8969,-6116,838,-6185,2240,-312,-14374,-11958,1987,-6784,5804,-945,-5541,3964,1757,8049,-6385,2134,1732,-2360,-312,-7428,6149,-3417,-2990,-3395,763,-2415,12057,-2612,3535,6265,-2957,1150,6149,1702,-5864,10703,-3187,1035,5942,1873,-3220,-8533,2563,-3679,-5810,-29,-7129,7476,-2037,-7142,5920,-1807,-4600,3619,2514,8624,-5860,-1923,-4140,6563,2677,-2875,12184,-198,-7314,7184,-2382,-4618,-1325,1412,-2300,5920,2893,-5442,11094,-3647,5520,-5298,-3072,2653,3045,-2037,-6498,-6500,-3072,-11844,-8411,33,-6784,8219,-1866,-6670,5804,-734,-6094,9714,-666,-4714,-4085,-978,2300,-5925,481,-7129,6379,-1619,1495,-4315,174,-6905,8794,-3762,-750,-4200,1297,1035,9164,-198,985,9829,-1233,-5519,-9949,3392,11614,-7925,3712,1610,6175,952,256,-750,3022,-4024,11704,-1347,-3022,1434,4057,951,6724,1757,-1725,8679,2264,-5892,5344,1183,-7244,7181,-2152,-9889,-7950,-772,-3795,11784,-1317,-4024,-1807,1642,-2185,6294,2908,-6144,8219,-312,716,6034,2218,183,1205,3252,2133,-4085,-428,-7218,7299,-2152,575,3539,2792,3798,3390,-2727,-2530,11899,-1731,-7244,6825,-1923,3843,3619,-2842,-5950,8679,-198,10694,-6112,-657,2979,7644,-2037,-6554,-7236,-198,-7475,3453,-4337,6899,-5539,-2497,0,2815,3185,690,6379,2247,-1610,11439,674,2300,-4085,-619,-7015,3913,-3187,-3769,2355,3482,-313,2355,3367,-3450,-2360,1196,-3565,8219,2256,8394,-6344,2102,-1265,11834,-3302,-5635,11345,-1578,-7015,6724,-1202,-9774,-7615,-2152,13109,-7994,2413,604,6149,2332,-4369,11628,-2382,-6325,8016,-657,-3679,4016,2908,-2530,7644,2755,2593,6379,-657,805,-2590,331,-3335,-1603,3482,-6410,2700,-1347,-7015,9722,-2957,-4369,11554,655,-230,-2705,1290,3497,3390,-2382,345,6379,2550,10004,-6114,1068,-5404,1951,1873,-2170,4770,3712,-2757,11899,-2382,10349,-6737,2792,-1955,10174,1116,115,6379,2638,3220,3145,-2268,0,6265,2655,-7525,6954,-3072,-2070,4885,3453,-3220,7488,2677,12646,-6730,147,-7820,-8031,-772,2103,6724,147,6965,-8225,2908,-1150,10864,1096,0,11035,-428,575,2930,2878,-230,6494,2772,-575,6265,2756,-2875,-1588,3712,-8599,-9834,1987,-3603,10519,723,655,3160,2792,1610,-5235,202,-6155,2125,262,690,9944,-985,-4140,10565,607,0,11427,-2727,10579,-6018,-428,-4530,4080,2447,-3876,7989,2218,3923,8104,-4797,920,9924,-1233,4790,-5465,-2268,-5404,11483,-1347,-9774,-7760,-1578,-6439,-6553,-2842,-2070,-1440,3966,-1725,6034,2636,-4945,11492,-2957,-3296,9599,1528,-5519,10947,-2152,-1475,6149,2677,-1955,-1785,2580,-3450,6265,2751,-6784,6379,-626,-3501,-3395,262,-6986,6839,-1117,-115,1205,3500,-4024,6464,2677,-7589,7184,-4931,-6651,6149,-543,-7129,4770,-2819,-5416,2585,1987,1495,2930,1870,-5648,6724,1528,-2760,12227,-888,-4438,-4200,-657,-5106,6610,2218,2530,9196,-2957,-6264,8104,-543,-5074,2355,2332,1675,6149,838,-690,6494,2839,-3450,10519,788,-5059,-6155,-1298,-1610,6494,2902,3357,-4200,-3532,-5716,630,-2382,-7589,6494,-5101,762,1434,2677,-4981,-1210,262,-5672,-7765,838,-7129,6034,-1699,-460,9714,1232,-4024,3964,2645,-11614,-10633,2792,-4255,7529,2283,-2415,-1609,3712,6325,-6614,348,-1725,6488,2908,-5749,-9374,2734,-6151,2010,-543,3287,6839,-2152,-6139,10404,-2842,-2760,6494,2976,3105,1895,-1313,-6325,10044,-1807,-6554,6034,-234,3551,6839,-3302,-3105,-1095,4272,-4140,7414,2412,-4255,7414,2348,805,5459,2043,-6620,6610,-312,1035,-3395,311,-15167,-10294,-1578,-1035,6589,2908,12994,-6915,952,14585,-10984,2447,-1840,6610,2986,10697,-6959,-2037,1150,-175,1798,8969,-7666,3712,2530,1130,-1923,11729,-6730,-828,-920,11751,-1462,-4366,7184,2447,-8624,-10605,3137,-690,-7535,2630,-6072,8449,-312,-4024,7299,2538,-1725,9139,2011,-4140,7357,2447,-6554,6379,-159,-3288,12129,33,-5059,11492,-2727,-6439,5920,-24,575,-7994,2757,-10618,-8109,-657,345,10774,-657,115,1780,3296,-6281,6379,492,-2953,6034,2908,-2070,6701,3022,-2300,-4429,1039,-2760,-6155,663,-216,2125,3367,-5877,10749,-888,-4938,-4774,-1807,-6094,-9260,2279,-3175,-3740,492,920,-3050,339,13052,-7880,2332,-7475,5804,-3463,-4919,11439,-3072,3565,3444,-2497,920,-2820,296,2415,9003,-1692,-4537,860,3022,-3335,7414,2681,-8049,-9307,1987,-6439,6379,127,-3450,5531,2332,-2760,7529,2751,3795,1965,-2842,-5175,-8684,2240,-1794,3619,4287,-1380,9254,1908,-10004,-7974,-772,-403,11439,-3762,2447,7414,-657,-4981,-2935,-1347,3546,6954,-3302,-14719,-9190,-1578,-3565,9829,1196,230,11103,-1692,-3105,7184,2810,-6015,1090,-1462,-3846,-1555,3022,-5950,8449,33,-6899,3918,-2842,1622,9484,-1462,-115,8449,1953,-4024,11634,723,6439,-9029,3771,2300,-6446,1068,-345,4770,2806,2302,7644,-543,7820,-5726,-2152,-13339,-9374,1041,-1265,1320,3926,-2300,7529,2837,230,10051,33,-6670,7150,-428,-6040,8104,147,-6899,9024,-4349,-10694,-10409,3137,-10579,-8646,1068,3680,-4799,-2497,-1035,-2533,1873,2229,-4660,-312,460,4770,2434,4600,-5479,-4682,5175,-5565,-4567,-5864,10790,-3302,6970,-6730,1297,-3094,3619,4632,5361,-7994,2332,-5959,1665,607,-12074,-8225,-1373,-3795,12014,132,-12189,-9489,1742,-4830,3160,2482,-6592,7299,-428,-5980,-9150,2218,-7533,-8570,1873,-2185,7299,2945,-5071,11094,-83,-5749,8835,147,1664,4540,1297,-3641,8909,1873,-3679,-2109,1528,12609,-8225,3252,-11039,-7892,-1807,-2140,6954,3022,-6209,10351,-3187,1681,7069,723,-115,9878,723,1689,4080,1412,2189,6610,33,10464,-8799,5308,-6278,5920,492,-6283,6034,492,920,-1331,607,5864,-7243,1297,-2245,2585,4172,-6441,7184,-83,-1373,975,4057,-9084,-10720,2792,3484,6265,-2612,-4714,6610,2459,-3289,-750,4287,5371,-8225,2677,2760,3850,-2163,2730,8449,-1578,-575,8679,2019,-6196,6724,607,2819,7759,-1692,1685,4770,1183,-6209,5920,723,-5713,8334,607,11844,-6688,-772,-13569,-8799,-957,-6051,5459,952,157,-3625,838,-5519,5804,1837,-1725,6149,2713,-7820,6610,-4760,1651,-175,378,-7704,-7873,-1117,-6111,10174,-1233,-4714,11209,584,-1725,-2171,2447,-6020,6149,1068,1035,-8684,3331,1035,-1049,838,-6178,7184,492,-6138,6954,607,-6798,-6155,-4452,-5980,6034,1195,-5926,6379,1183,-5290,6930,1873,0,1320,3427,-5290,975,1789,-5915,2010,838,-6040,6839,838,-4024,6149,2487,7820,-5824,-1233,6325,-6471,147,-6325,3570,-83,5980,-9260,4065,-12189,-9988,2332,-5059,9484,654,1035,6693,1642,3910,-7333,2332,8855,-8400,4517,12304,-6579,33,-6209,10059,-1965,-5980,3505,1298,7129,-7940,2677,-4830,11512,-2727,-3335,6724,2868,-5749,7529,961,-1265,9254,1893,-1610,3274,3995,-5635,6565,1642,-364,-1785,2332,14719,-10639,2523,-2875,9254,1905,-4714,-3740,-984,7820,-6730,-3863,-5749,3045,1610,-4221,-7994,1873,115,-7081,1757,-5519,6265,1912,230,-5350,909,-3679,-3855,87,-115,7268,2563,-6813,8909,-3992,-7589,5891,-3992,-495,9254,1642,3254,-4200,-3762,-6325,9992,-2152,-2806,-3740,838,7820,-6959,2921,115,7069,2507,-5251,6610,2102,-6119,8449,-428,-6975,3964,-2957,2514,-3395,-888,-11384,-7946,-2268,10004,-6155,-1610,-3220,-5119,414,-3021,6149,2908,-6899,-6614,-5168,4255,-6325,1068,-6554,-6959,-1602,7914,-6500,-3877,-6391,7529,-198,4945,-7457,2102,-5245,4999,1757,-12304,-8212,-1923,-4945,6308,2332,-5749,-6715,-1233,2885,8564,-2382,11154,-8915,5008,-4369,6178,2447,-6713,9139,-1807,-5980,10540,-888,-2185,-4890,994,-4945,7529,1829,-3565,10634,786,-12764,-8570,-281,2760,9599,-3771,-4369,6494,2588,-5864,740,-2497,-6094,10174,-2081,-115,6494,2735,-5059,6839,2172,-6094,5312,838,11269,-8339,4791,-5152,-5810,-2037,12304,-6845,-578,1495,-1325,-365,1380,1895,1950,12419,-7002,2218,-4714,7069,2296,-12804,-9029,-3187,-7015,8603,-3187,-2645,1895,4172,-4587,6954,2447,-4600,6935,2447,691,10404,-1347,-7307,7644,-3187,12189,-8684,4107,-6554,9599,-3848,-847,-2015,2447,-6899,9085,-4452,-230,11474,-1462,3680,6954,-3901,2978,9139,-3992,-3475,10174,952,-1955,7874,2693,-6670,9693,-1923,-1840,9829,1465,-4837,-3395,-1117,-1840,-9260,3280,-3450,10404,814,-9659,-8660,1297,-7129,8702,-4337,-9889,-8230,378,3910,-6600,1412,-7015,8765,-4222,2530,9060,-2037,-2530,10665,952,-3105,8144,2447,-3220,10979,1336,840,10749,-2037,3220,8104,-3286,-3880,-2360,378,-6670,9230,-3992,115,11076,-888,-10579,-8225,-219,-369,7299,2677,-6190,2010,-2037,-1840,3619,4342,468,9484,492,-575,6954,2886,-5749,10716,-2497,3220,-4369,-3992,8279,-9489,4435,-5864,-9144,2299,419,-865,2218,-2415,6494,2975,-3971,9599,1183,3386,8219,-3762,-4140,-2093,262,3680,-5580,-911,8165,-6959,3109,13507,-9144,2677,3136,8449,-3417,-7397,-8915,2447,2234,8219,-772,479,5114,2218,-6670,3684,-1233,5059,-5286,-2842,1448,-3625,147,-2530,-4660,851,-5980,630,-2854,-3240,4654,3367,-6417,4540,-428,2760,8828,-2497,2235,1665,-428,-4369,11641,-2612,-11384,-10416,2447,3565,-5672,-657,1660,3274,1642,1576,6034,1068,-3910,-8720,2563,-5192,11094,-4682,42,7069,2563,-2990,9254,1886,-4354,3850,2563,1725,-2245,-330,2470,-750,-3302,10924,-7304,3502,2185,400,-1510,-2053,-2015,3022,-1795,-1670,3597,-6094,-9605,2643,2627,6034,-657,3220,-5810,-5369,-8798,-7190,-3762,-2875,10404,872,3450,3045,-2256,-5507,-5119,-3877,-5175,8794,971,-5702,-175,147,0,11324,-3045,-2185,-1934,3137,3788,7759,-4107,-5673,4654,1297,-7208,8564,-4567,-1610,-2820,1753,-9544,-7579,-3647,-14008,-11904,2332,1292,-60,1642,2645,8875,-2037,1955,8104,-163,-4830,11515,-2842,-6971,8679,-3877,2760,1532,-1347,-4024,5920,2326,-7475,7989,-4129,-5277,-2130,-1923,9314,-8444,4172,1384,-8339,3137,13224,-7971,2218,1035,8564,755,-4255,11515,-4337,5059,-5235,-4006,-4485,9269,1183,-5465,8679,723,-5175,7414,1671,5404,-9253,4632,-5772,-290,-1462,9314,-6252,1528,-5031,-1210,-83,10694,-7304,3601,-6729,9254,-2842,8624,-6942,3022,9774,-6114,952,-2415,12104,-1462,-4847,-2245,-1117,-7589,-7224,-2152,1840,2470,1158,-6291,4654,262,-5635,-290,-2628,-5982,8564,-198,-7244,8515,-4222,-7277,8449,-4222,-8969,-7457,-4107,-2990,7989,2532,8523,-9605,4632,3335,8564,-3724,0,-1521,2218,12479,-7765,3022,-115,400,3477,-6170,6149,723,1927,9944,-3302,-14288,-9489,-2037,9429,-5875,-198,-6657,-6385,-5257,-6094,-9745,2908,-2134,-2360,1873,2344,4195,33,-7216,8449,-4107,-345,11600,-2842,3220,-3342,-3417,-1380,3903,3482,-5404,7971,1183,-1035,3556,3252,-2229,12129,-888,-5125,-2590,-1578,-2875,-3280,918,-7359,7989,-3908,-6870,7529,-1347,4369,-5465,-4763,-4255,860,3233,-2300,-2475,1970,-7403,7759,-3762,2944,8564,-2957,-4427,-3395,-657,-5864,10989,-3417,-4600,3045,2634,-575,-7003,1183,-7072,8564,-3877,4485,-5883,-543,3466,3619,-2382,-3910,1665,3452,1307,10059,-2037,-4513,11669,-83,-12963,-10984,3022,3680,-7909,2677,-6554,-7535,543,2480,3160,-1002,3450,5860,-4682,-5175,11446,-2037,2990,-7115,1757,-6932,8909,-2382,-2415,9369,1865,-1265,9369,1804,3162,-4315,-2497,-7129,7261,-1807,355,2815,3022,920,2125,2553,2760,-6451,1068,-6325,-5549,-4452,-6209,8069,-312,-7324,5459,-2957,-7295,7874,-3417,-6899,8679,-2225,-7027,8564,-3647,2032,5344,262,-2552,-3395,1183,-1150,-1406,3827,-1955,9599,1681,-4496,-6614,33,-2990,-3050,906,3910,3274,-2805,-5370,2240,1987,-5980,43,-543,2371,-1785,-1233,-5519,10864,-587,-6697,6610,-428,-6209,3310,262,3105,9024,-4048,2990,7702,-2152,-13569,-10179,2153,-1610,10289,937,-1035,11848,-1923,2645,9005,-2382,2530,9139,-2508,-7129,8147,-3072,-4830,-941,1528,-7129,8219,-3258,2990,8449,-3007,-5213,-1095,-1002,-7271,7759,-3187,-3220,-7009,1183,-7427,6265,-3302,3072,8909,-3992,-6784,-6218,-4682,-8576,-6959,-2842,1150,4080,2218,8180,-6269,-3417,-4792,1434,2792,-1380,4621,2908,3105,8731,-3762,-4485,8517,1642,8739,-6614,-3072,3450,-4440,-3302,2875,8449,-2183,1035,-2705,212,-4255,11680,-2497,2272,9369,-2382,-3433,-4200,262,9200,-5970,-1692,-8394,-8905,723,-5669,9024,147,-6140,10404,-3072,-7429,8219,-4337,-11384,-8339,-3327,1035,-7994,2684,-4600,9308,1068,-3679,5114,2345,2501,9139,-2268,-7094,8219,-3072,-7044,3390,-3762,10924,-7492,3827,-7098,8449,-3187,1380,4770,1674,-6617,5459,-772,-14228,-9260,-2152,-6149,10289,-2957,-5519,9714,334,-6209,7529,206,-6356,3274,-312,2185,9369,-2212,-2300,12065,-1807,-7076,8334,-2957,-6731,5689,-888,-5432,11209,-2957,-2070,7046,3022,1741,7644,492,-9429,-7674,-1578,-6957,-6845,-5142,4255,-6959,2204,3745,6954,-3992,7820,-6845,-3877,3072,8104,-2612,690,5114,2126,-6680,8909,-1807,-805,10081,952,-7044,8564,-3762,-8365,-9489,1642,-4647,400,2792,-3335,2355,3957,5749,-7765,2042,-1610,11216,952,726,-60,2563,8855,-5862,-1807,8969,-7880,3873,-4024,-9605,3133,-3450,6724,2845,-5175,8825,952,-7129,7759,-2699,2990,8476,-2612,-4600,-1633,147,1840,-6189,952,-9544,-8018,33,-7015,8334,-2740,1610,8838,-657,-6457,5575,-198,10694,-8915,5354,-2530,5145,3597,-575,11669,-2632,-5635,7414,1167,-6191,8679,-657,-1840,6839,3044,2629,5920,-657,2185,10118,-3877,-8049,-8339,-203,1652,285,1068,-5920,10404,-2037,2110,5689,147,-4271,-7190,838,99,11324,-1692,-5592,10404,33,-1363,11554,-3187,2311,6149,-83,-5980,7874,471,3503,6724,-3072,1955,2355,793,2688,3850,-2037,-460,4540,2877,2996,7989,-2268,-3910,4425,2504,-15645,-9949,-1807,-5635,-6941,-543,2240,5575,-83,-7015,8074,-2497,-1265,8564,2269,-12074,-9214,1412,-8165,-8621,262,-13339,-9260,789,-1265,5804,2593,2328,5920,-83,2593,8104,-1233,3450,5575,-2876,470,10404,-428,-1109,11899,-2957,-230,11430,-3417,-6946,4309,-2842,-6406,5344,-83,9544,-6186,-2152,115,3045,3107,-5175,11083,-4797,2300,7759,-604,4140,3964,-2919,-690,-7304,2610,-4313,-1555,1642,-6144,10174,-1462,-3220,9829,1361,-805,8209,2332,-2530,-8799,2756,-5980,10566,-3072,1380,8823,-312,1210,9484,-1002,-5519,10966,-2497,-4527,1895,2908,-3220,285,4036,-6152,1895,33,1380,5804,1458,3162,8794,-3992,-6439,8679,-1217,-1495,8971,2102,-6554,9599,-2919,2003,9254,-1578,-920,3045,3363,3795,-4676,-3532,-5059,3735,2263,-5993,860,-1462,-230,10404,320,1265,-5350,416,-6900,-6155,-3647,-6325,9254,-1189,-2760,3619,4779,-2645,5920,2992,3220,-6959,1656,-1380,-1555,3686,-6554,9599,-2969,-6899,8564,-2223,2192,8909,-1347,-5404,11324,-2062,2185,7823,-428,2453,8449,-1233,0,8909,1611,-7704,5230,-4251,690,9457,147,-13684,-8799,-1749,-5200,6724,2102,-12304,-8409,-428,3795,-5886,-83,-6138,6724,723,3795,-6338,952,-1955,4770,3420,4293,-5465,-1692,920,515,2388,-5088,-1440,-1347,1515,4195,1757,575,-8159,2908,-3335,7529,2630,2760,1895,-1054,-6335,8679,-888,2637,7874,-1233,-6832,7989,-1807,-7556,7529,-4452,-6752,8219,-1807,-6721,8334,-1807,-401,2585,3367,-6787,8564,-1923,2822,8449,-2037,-6349,9139,-888,969,7644,1412,-4945,3619,2345,-7154,4654,-3417,-3296,-1785,3137,-6325,2240,-3446,-575,11554,-1065,-5059,7688,1642,2990,4309,-2116,-230,285,3564,-5565,-290,492,-14544,-9949,-83,-6810,9254,-2037,-6473,7644,-543,-5791,9254,-83,-4600,9484,905,-60,11324,-3302,-6732,8564,-1807,2176,3160,378,4255,-6090,492,-5290,8679,923,7820,-5973,492,1870,8794,-888,-5980,170,-981,1978,7874,33,11614,-6543,1987,-2760,10833,1297,-6936,9024,-4452,1610,9024,-863,-4255,9296,1297,-6202,2355,-3302,-3745,-2475,378,-6670,7989,-1508,-12705,-9144,-3302,920,8664,838,-1840,8679,2271,2530,-4593,-772,-1035,-1345,3827,11294,-8225,4632,-6197,2470,-3302,1035,-4774,441,-2875,9714,1555,1495,-6006,492,-920,-6698,1068,-2185,5114,3423,-3450,9516,1528,-6325,2115,-3187,1891,8679,-772,11499,-6283,-312,-2645,11439,1151,-2415,-2094,2677,-3595,-4774,147,0,6149,2618,-2645,2355,4153,10464,-6279,-1462,-690,7523,2677,1610,7776,607,1495,9024,-798,2820,8219,-1807,-7420,-7075,-5027,-6094,8679,-484,-2760,-175,4458,-3795,10174,776,1380,9210,-888,9200,-7926,3712,-14144,-9834,-2470,-3105,7644,2643,4140,-5580,-1184,-14604,-9489,-1071,2160,2010,-83,-5519,-5492,-3532,3105,7989,-2596,7129,-8339,3117,115,9024,1425,1921,3390,1068,-3869,2240,3482,-7080,-6730,-5027,-9429,-8022,147,-6209,8909,-549,-7339,-7880,-543,805,-9237,3942,-4840,-2360,-1117,-5635,11002,-3762,-4369,-1900,-96,2868,1205,-1923,3910,-4900,-3072,-6740,1665,-3072,2300,2064,-772,-10464,-7703,-2037,-6670,7874,-1436,-4369,-6230,-428,2070,9254,-1738,3795,-4697,-3072,-12534,-9029,-3377,-4741,-7994,1642,5864,-5333,-2957,-6481,8219,-1347,-5404,7184,1562,-5221,-1095,-1233,920,8679,819,-6402,4770,-83,-575,6494,2832,2530,3712,-1117,845,6034,2102,7704,-6959,2737,-4731,-2705,-1002,-744,11439,-198,-6646,3850,-1923,805,-8998,3712,-4485,11673,-312,-6085,1550,-1692,11614,-7535,3426,-6250,3045,33,-1495,11432,607,-6393,9024,-1002,-7514,6610,-4567,-1495,11899,-454,-12975,-8570,-2152,-3679,8334,2146,-3679,8427,2102,-3795,8545,1987,-4369,9726,838,-2875,-8757,2677,-3248,4080,3942,-1955,7759,2757,13109,-8799,3041,-4600,-1646,33,5635,-5437,-3877,4945,-8225,3504,-575,11681,-2152,-460,-6155,1082,-4628,7874,1873,1971,8219,-312,-5757,2700,1528,-5864,10989,-3647,3479,6494,-2497,1955,8247,-312,-2185,7888,2677,3220,4818,-2037,2990,-4774,-1380,-2185,7644,2800,3680,3619,-2765,-2300,7644,2792,3680,3850,-2875,3497,-7765,2447,2645,9599,-3706,-6128,1780,-772,-10234,-7686,-2037,-805,9091,1873,3031,7644,-2268,-3450,7759,2491,2013,6954,262,805,8334,1254,1845,8104,33,7475,-5695,-2507,-5059,11516,-1347,1650,7874,492,1610,7874,538,10924,-7893,4747,-7503,-10179,3022,11269,-6841,2677,-3910,5114,2326,-4485,-1565,1183,2875,7989,-2108,-7359,-7585,-1578,5749,-5344,-2268,-920,8219,2352,-1030,8334,2332,-6532,1205,-2497,3680,-6130,492,-115,11284,-1117,-1265,8429,2332,8920,-7075,3137,-3679,11546,-2268,-7589,5205,-4107,11269,-6249,1412,3622,8104,-3762,-5635,-599,-772,10349,-6676,2677,-7560,6034,-3992,-8087,-6614,-3417,9544,-5795,-657,-4369,7874,2034,4369,-6658,1642,-805,7785,2563,-977,7874,2563,135,11439,-2037,-2760,-7236,1987,-5123,-4545,-2037,-2760,7732,2677,-5290,5459,1859,-6670,3769,-1347,230,-520,3113,2415,9820,-5027,-13799,-8988,-1002,-1840,11899,311,-2760,-6730,749,-7129,8494,-3992,-7168,8449,-3992,2726,8909,-2727,-2415,-1443,3942,-1725,9348,1873,1725,-2590,-232,-4485,7299,2306,-2875,9300,1873,-1380,3160,3723,-1150,9066,1987,167,8679,1642,1840,7989,146,-2415,-3740,1154,2376,9254,-2268,-3910,9139,1590,-5782,2010,1183,-2728,-4660,723,-1725,9829,1453,1725,8449,-206,-2645,11977,607,-6325,3064,-2842,-4255,10501,607,2185,8334,-817,-4524,-290,3137,-1150,8861,2102,-1725,8449,2375,2645,-1325,-1932,59,-2245,1297,-6899,8219,-2261,-1610,-5005,1161,14029,-9145,1873,-6670,3679,-1117,2826,5689,-1002,-2530,12057,-2037,-1955,-6730,979,-8394,-8746,492,-14374,-9260,-2074,1869,860,838,0,-981,3137,11039,-9260,5292,-6965,-7304,-1807,3463,3964,-2612,-3335,3160,3922,-5864,5114,1159,-6842,-6959,-5142,-12879,-8972,723,-3335,3803,4057,-2464,-8570,2677,-5059,11324,-3721,1412,-750,33,-4945,11406,-543,4600,-8570,4248,2645,-6247,723,-3335,9429,1642,-7934,-7765,-1188,-4830,7644,1850,-7820,-7215,-2037,-5032,11209,-4452,-1682,7874,2677,-1725,7874,2680,230,-1807,1412,-2070,7759,2749,2300,9411,-2497,-5999,3735,1183,-2990,8909,2108,-2645,7759,2689,-4830,-4545,-1326,-6899,8334,-2338,-1495,-1210,4225,1874,8909,-1002,-2710,-5005,723,575,5603,2218,-7041,7644,-1923,-3335,-6155,247,-1265,5230,2644,-6670,6149,-576,2875,-3855,-1333,-115,7024,2677,-13930,-8915,-1233,-1224,11899,-1233,-5290,8621,952,1734,7989,262,-6672,9024,-1807,7360,-5691,-2612,-12879,-9911,2332,-4830,1205,2738,-7004,9829,-2727,7129,-7691,2447,-4255,11506,-4107,1976,400,-312,1938,5344,492,4485,-5364,-2268,1001,9254,-312,-5635,7154,1297,-2415,7989,2615,1840,707,838,-7475,3390,-4397,-771,9254,1757,-7589,-7420,-1871,-5290,11324,-3038,-3623,3619,3252,-5404,11209,-3127,230,-8171,2908,-7070,8564,-3992,-2760,-405,4505,-2645,9369,1855,2875,-3970,-1266,-6716,-7190,-1002,-3150,9369,1757,8855,-7765,3885,-4369,11472,723,3220,8625,-3762,4830,-5865,-1233,1389,-2820,33,1672,8334,33,2760,9369,-3682,-5111,-1210,-772,-2300,8117,2563,-4600,8601,1528,1610,-7785,2677,-889,9139,1873,-1035,9139,1913,1380,55,1502,-1265,9139,1970,-2875,-4200,659,1495,-2475,-106,-5980,657,-83,703,7759,1642,-3910,-2820,-147,-3105,9221,1873,-373,1780,3712,-2645,-6087,723,-690,5804,2732,9618,-8454,4287,-8049,-8454,11,-6077,10289,-1233,5473,-5465,-4222,0,-8723,3482,-7475,-7034,-2497,7820,-5770,-2382,-3220,8679,2168,1495,-8570,3459,-5245,11094,-4567,-12790,-8570,-2382,222,10059,33,13454,-8043,1528,-3565,12135,-198,-6385,4654,-83,607,-635,2332,-7359,-6455,-3877,3233,7414,-2612,-460,-6385,1081,-5290,9679,492,-2300,9139,2013,-3795,-2935,-21,3629,6265,-3992,-8228,-9949,3137,3565,2930,-2295,-12189,-10179,2597,11729,-8042,3942,11384,-7237,3252,1868,10404,-3992,-9199,-9013,1068,860,8909,607,-5050,-635,1642,1610,9678,-1807,-3450,-7190,1449,-5088,-1210,-312,-4735,10519,607,-10579,-8996,1873,0,8449,1896,1035,157,2218,-105,11094,-312,-7015,9781,-2727,-2530,8909,2159,-6094,8517,-428,2760,2544,-1233,-7934,-6500,-3144,1725,-5810,344,8969,-8625,4632,-8216,-8684,378,-8279,-7075,-2408,-3220,2669,3827,-4167,-2130,33,1610,9599,-1629,345,3045,2999,-4830,11241,-5027,-10119,-8229,-4107,2415,3850,-465,2325,3045,-312,7795,-7535,3137,-6417,7759,-543,2645,-7381,1987,1002,9024,147,1179,-2245,33,10694,-6497,2218,-8279,-9260,1228,-2760,860,4193,13489,-8799,2677,704,630,2677,7360,-5898,-3532,-2431,-4429,952,115,-6845,1220,11499,-9260,4816,345,-3510,693,1380,8334,482,-5281,9714,492,1046,8909,262,3795,-4511,-3647,-5519,5459,1687,-1150,3735,3238,1380,7989,780,-8510,-10456,3367,-5175,10902,147,920,-4429,473,-5519,8889,492,1001,8909,378,-4638,11439,-4797,1940,5230,492,-5290,9254,589,2645,3390,-2169,3383,-4429,-3187,-3296,11899,723,775,-405,2218,-3679,-2254,1068,5175,-8570,3628,-5465,-1555,-2497,1761,5804,723,6209,-7110,1183,-656,6839,2908,-5911,10634,-1462,-3105,975,4064,-6620,7529,-772,-1840,-980,4436,1905,1090,838,12419,-7075,-913,862,9024,492,9429,-6730,3037,-5290,9214,607,-5404,8784,723,959,8794,607,-7240,6149,-2037,-2990,12216,-1233,-5980,10555,-2727,-1124,3390,3367,1301,2125,2102,13799,-9029,1938,805,8975,607,0,11284,-3302,-6899,8794,-3586,-5059,9254,766,-6725,7299,-772,976,8679,723,-2070,2585,4212,1214,8334,723,-4255,5920,2309,-4972,9254,838,-8969,-8799,713,1610,-8570,3507,2437,4885,-428,-2415,-6959,985,-14873,-9834,-1117,-1035,11784,-1459,-5978,860,-2268,2590,3735,-1807,2415,3160,-702,-5943,515,33,-690,1525,3712,-4600,2700,2687,-3795,11858,492,-1804,4999,3022,-4830,9139,1028,-3105,-405,4386,-1610,6321,2792,3105,8577,-3532,-1035,-4545,1275,-3881,-1095,3712,-6209,7759,19,-7066,3619,-3762,-5198,-5005,-3417,8049,-6071,838,10924,-6155,1270,5995,-5350,-2612,-1725,10292,952,2645,-5961,378,1840,1e4,-3302,-3450,8794,2019,-2415,5804,2968,-7015,-7572,-198,2163,7874,-428,978,8449,952,-8510,-7341,-1578,2138,9599,-2727,-920,-1855,3022,1265,-687,723,-4714,9024,1201,-6784,-7357,-198,-4369,6379,2559,2070,-8339,3194,-4369,9254,1260,-4024,11899,125,-11499,-10639,2712,-1417,11784,-312,-8237,-9949,2677,-5980,-6269,-2807,8969,-6150,952,-8969,-7611,-1002,-6030,7989,262,3463,6265,-2382,-4776,11324,-4912,-6628,7069,-312,-5301,11094,-4337,-1495,-6730,1029,-12273,-8339,-1002,-4369,9139,1343,-6325,6149,375,-1150,2010,3906,2070,-7931,2792,121,9369,1068,460,8679,1363,3105,-5749,-198,2518,4885,-657,-12764,-8974,838,922,8219,1183,230,9024,1319,690,-9260,3956,2278,7299,-312,-6163,8104,-198,-2875,1550,4080,-6439,7299,-140,11959,-6525,1642,2530,7529,-958,-3795,12014,-1178,2847,7759,-1807,10579,-6485,-1692,-1265,2455,3942,805,9369,21,-3910,-2276,492,-3795,-1325,3554,-4945,9369,782,2578,9714,-4912,-6574,9829,-1923,3690,-5005,-4222,-3503,4080,3367,230,8766,1528,-5175,-3165,-1705,1615,10289,-3187,-115,9139,1509,-2070,9645,1642,2007,10289,-4107,9429,-6909,-3187,690,8258,1412,-6325,7644,-147,-5893,7874,607,5059,-7535,2056,5046,-7190,1412,-3640,12014,-1233,-575,-60,3885,-5005,11209,-4567,-7417,6265,-3187,2518,9139,-2727,-230,7874,2272,-7475,-6385,-3432,7934,-6437,2218,2378,4080,-198,-2185,12089,-2268,-5864,7831,723,-434,10864,607,5980,-6100,-657,11614,-6155,1010,4945,-7141,1528,1155,8909,33,-345,-980,3582,-3399,3505,4057,2249,285,-1578,-345,7759,2398,849,170,2447,-5128,10864,262,-1725,7879,2677,417,8334,1642,11039,-7107,3137,198,-4315,838,2645,8999,-2612,441,10634,-888,-6534,6034,-198,-9889,-7737,-3532,575,9517,262,0,7959,2102,-267,9369,1412,-6899,-9155,2218,-508,8679,1987,-5472,-2245,-2612,1725,381,952,-3105,12136,33,-6670,8779,-1807,-5404,8193,1068,-15904,-10409,-2382,-1495,10374,838,118,8334,1873,2575,170,-2268,1803,4309,1068,7421,-5810,-83,-2185,-1755,3482,7934,-6087,1068,3680,-5350,-1366,-7563,5920,-3877,8049,-9507,4402,-5980,975,-1427,-5059,-8525,2102,-3450,8449,2195,-10429,-8799,1528,-5220,8334,1183,-345,11608,-3072,-199,8219,2102,-338,8334,2102,-2645,12196,-428,3450,5505,-2497,1924,-1210,-772,-5944,515,-83,1610,10174,-2905,-4369,10845,723,-2875,11324,1251,712,8219,1412,-1380,11556,-3417,3400,8104,-3647,-2070,9888,1412,-3335,10412,838,-11729,-8242,-772,-4945,7874,1644,-1035,860,3891,1150,8293,838,-3220,-6845,481,3565,-5387,-5027,-3450,4770,2792,8165,-5925,-2688,-7496,6954,-2957,-4714,7777,1873,-3335,-4660,333,351,10059,-198,-4538,8449,1642,10694,-5989,33,9544,-6422,2332,4369,-6802,1873,-5059,7759,1605,-2185,6265,2898,-4485,11714,-543,-7475,7797,-3992,-1150,6034,2629,1327,8794,-83,157,9714,607,-190,-2820,1183,-8739,-7075,-2813,1840,10419,-4107,-4556,11554,262,4945,-5406,-2497,-11307,-9834,2102,-6219,2240,-2957,-2990,-5235,543,-4140,9608,1068,805,7874,1505,-4140,11669,-2660,1150,4309,2159,-5867,6149,1412,2185,10206,-4797,2399,9829,-4912,2278,1665,-657,-13880,-9949,1528,-7704,-8570,990,399,10059,-428,-6769,3964,-2612,-13454,-11214,3173,3160,-3050,-3072,-3850,11554,-2727,-2415,12070,-2268,3565,7874,-3848,690,7874,1607,-1260,7989,2563,2760,9472,-3762,1294,8449,492,-5980,10404,-2339,-5464,-635,-2268,690,7161,1873,2775,9714,-4107,427,-6959,1528,-345,-2475,1548,-7359,-6693,-3072,-3496,4540,2908,-2913,-175,4402,-2760,10340,952,-1160,3505,3367,-4024,-3970,-225,-7475,6954,-4528,-3679,-175,3917,1777,10059,-3187,-608,10174,723,13536,-9374,2447,12879,-7075,1722,-2760,12014,-2400,-5175,9944,526,2185,10136,-3992,1840,-2935,-238,2300,9530,-3187,2398,9829,-3762,-6484,7989,-1117,-6569,9369,-1692,3220,8429,-3532,-165,-7075,1297,-7553,6839,-3877,-6630,9714,-3877,-12764,-8522,-2268,-7190,5575,-2497,115,8449,1831,-1840,11554,687,5175,-5955,-5257,-6439,10059,-3647,4600,-5672,-1462,-5946,-9374,2563,3482,3505,-2382,-4600,285,2917,2185,9570,-2957,-5059,7184,1936,-5980,9944,-461,-3754,-3970,33,-7386,-8225,1297,575,7759,1779,2236,9599,-3187,-6094,10661,-3417,939,55,2332,1655,10289,-3417,230,-1964,1183,2666,-3740,-1002,-4714,-4660,-1236,2245,9484,-2612,2154,9599,-2957,1380,5575,1498,-1955,5892,2677,-4255,-7649,1496,1955,9867,-3072,1035,10457,-2152,2070,9700,-2842,-5842,9944,-198,-6439,-5810,-4811,3911,7989,-4452,-5519,11369,-1692,0,11299,-3072,-6434,-8454,1528,-2530,12187,-312,-6121,1205,-772,-6656,6379,-428,2185,-7765,2545,805,-6385,883,1172,10634,-2612,-4140,11554,781,-2070,-1900,3240,-5329,-865,-312,3542,6265,-3187,-5298,10864,-83,-2185,-520,4537,-6439,8104,-1208,-3950,-3280,-198,7828,-6730,2677,7360,-5810,-16,1840,10289,-3708,8049,-5989,378,-5937,285,-83,12764,-8522,3252,-10694,-8026,-1002,-1150,11882,-1692,-3679,400,3612,3374,-4315,-3647,-1610,2585,4116,-4870,7989,1642,-5864,-5758,-3877,-13339,-10705,2677,-115,-2935,1063,-5059,11369,-3072,-6353,5114,147,-5948,8564,-83,-10924,-9374,2255,-3795,-1765,2447,11154,-7765,3962,-3795,-1157,3712,7820,-6359,1987,-2185,11630,838,3565,-5831,-312,-690,-2416,1873,1335,10059,-2152,1533,1434,1642,8394,-6096,838,1265,10196,-2152,6439,-7152,1297,-1150,8334,2360,616,6379,2332,-11787,-8225,-1002,805,10727,-1923,-1840,4080,4027,-4830,-9374,3004,-1380,-635,4497,3349,5920,-2152,-1725,-290,4549,509,10289,-657,-11499,-10913,3137,-4756,-1095,1412,-12304,-9029,-3357,-3220,9599,1556,1495,6195,1183,460,11032,-1807,320,11094,-1807,4780,-5580,-4797,2875,8679,-2761,-2185,12111,-543,-432,-2590,1528,1194,9024,-312,2931,9139,-3877,-3335,-7994,2129,-7536,-8454,1528,2875,-3832,-1347,-5520,8564,723,-1150,8909,2079,690,10519,-1545,873,1665,2563,-2300,3118,4287,-5404,6379,2021,-6151,5575,838,-13642,-9605,1297,-3769,7414,2563,8969,-8109,4196,-1955,1895,4165,-3105,2815,3894,575,9958,-772,1184,9829,-1462,-6439,-5739,-3762,258,10519,-83,-1265,-635,4432,3795,-5610,-888,-6209,10059,-1581,2852,6724,-1347,-2415,2585,4090,-6687,3735,-1233,-5290,11354,-2727,-5864,-7880,929,-230,-4085,1104,-460,10881,607,-1265,11796,-657,805,10339,-1578,-2990,12221,-657,1089,9829,-1347,-2875,4425,4321,-2185,10481,838,460,10749,-1178,-4714,6265,2412,-5749,-7360,262,-6479,8909,-1347,-2645,9903,1412,-4024,11753,-1233,1610,5425,1183,-1265,11957,-1923,1035,55,2145,996,55,2218,-2185,-175,4524,-2391,1205,4287,1420,-175,1068,-690,6265,2756,4255,-5119,-4187,2431,4080,-428,5290,-5395,-2382,-316,10174,492,6491,-7075,1183,-1265,-4429,1296,-3478,2355,3827,-29,-2130,1528,1265,9316,-888,382,10749,-888,-4024,10700,723,13454,-9029,2824,2417,7529,-657,-115,11277,-1002,2645,3619,-2210,-4255,11324,873,4369,-5785,-657,809,9714,-657,-12879,-10294,2749,-6070,10404,-1002,3335,3045,-2216,-14026,-12019,2218,4024,-7792,2908,920,6724,1801,1840,-5580,199,-3450,10059,1056,2530,9795,-3992,-4024,11537,838,-5864,7874,693,-3795,8219,2147,2126,4654,378,2990,8950,-3877,-8279,-10294,3752,-805,2700,3461,-3565,285,3749,-5635,8334,713,607,10174,-888,-7583,6954,-3762,-230,11275,-657,-12649,-8707,378,1774,9944,-2842,2555,-290,-2152,-13473,-8799,-772,-11269,-7934,-2382,-12994,-8607,-657,2990,7494,-1923,2053,4540,492,-5175,1780,2155,10234,-5983,492,-1840,-8306,2677,5749,-7248,1297,805,400,2537,86,10979,-428,520,10174,-657,-115,-7234,1412,-1380,10174,1038,7360,-9300,4172,-14130,-9374,-1807,460,8266,1642,6094,-7304,1459,-9659,-8799,1490,-3910,11460,-1692,3507,6494,-2957,-115,-8136,2792,3220,-4085,-3514,-4600,11582,-2382,2990,-6269,714,-5621,170,-2612,-690,9207,1757,-4485,11439,-3422,-5519,10668,-198,3006,-4085,-1578,-4140,4770,2398,-1003,2470,3712,2645,7257,-1002,-5775,170,-2037,218,10634,-83,-2645,7135,2908,2778,-5119,-657,345,10174,-365,-7475,5570,-3532,729,9484,33,6784,-9144,3988,115,-6614,1142,-5298,11094,-4452,575,9736,-83,-4369,10174,525,-1610,7414,2923,7934,-9216,4172,-1605,11899,-83,-89,10979,33,2334,3505,-198,-3335,10097,1068,-1835,4654,3367,230,2585,3120,2070,10220,-3762,132,10519,147,1840,10303,-3762,9446,-6155,-2152,-2645,-2480,1873,-6554,-5742,-4222,1380,400,1674,-7475,8219,-4620,-920,2010,3846,-1150,11828,-3072,-14144,-10952,1873,3220,-3168,-3302,-2645,12100,262,-5128,11209,-4222,-7397,6610,-2612,2195,4195,378,-11039,-8102,-888,-4024,-1827,1528,12328,-6500,492,-2415,11742,838,-2185,12129,-336,12489,-7535,2792,10004,-6641,2792,-3565,-1814,2677,-7369,7069,-2497,-4830,8518,1412,-10579,-7772,-1923,2990,8564,-3257,1380,5689,1493,-6670,-6981,-2037,-3968,9484,1297,-6325,2815,-3474,-3679,3206,3482,156,10289,33,1636,10289,-3302,10113,-8225,4632,1784,-2475,-312,-10579,-8020,-1002,1626,5804,1068,-5980,-5810,-5424,230,9890,262,-13483,-9719,1757,-6036,7644,492,1968,1320,723,-2445,-5350,838,-6568,9484,-3072,-14144,-11541,2102,-1035,1320,3736,-6958,7874,-2037,-3220,3894,4287,-4200,-1900,838,-5098,-4429,-1807,2601,3505,-1923,-2760,8449,2382,349,9599,492,-7015,8564,-3482,306,9484,723,-6079,1205,-1117,-7704,4958,-4452,498,9599,262,-5519,10711,-312,-7099,-7649,-428,852,-290,2218,-2875,7184,2840,3028,1665,-1233,-2070,-5350,988,-4140,55,3388,-5779,7989,723,-1150,11821,-1117,-4369,5230,2262,-1840,-8225,2639,1495,10039,-2497,-5290,11209,-3658,-6262,5689,607,-115,8385,1987,11391,-8454,4747,-4830,-8738,2447,-5635,10404,-37,2530,1837,-1002,-12678,-8799,-3072,0,10749,199,-7538,5114,-4107,-3565,10749,1022,-1265,11840,-2957,-2070,3661,4517,5635,-5925,-4931,-5635,11324,-1209,-11039,-7844,-1923,-6209,10483,-3532,-5519,11015,-3417,-4140,11669,-1850,-8165,-9446,1987,-4485,-7765,1550,534,10519,-1117,-5572,10979,-888,-8394,-10064,2429,460,7011,2218,-5980,-7261,33,1922,-290,-1002,-9659,-7622,-3647,-5669,-290,-83,-3450,4309,3244,12189,-8401,3942,-2760,6954,2930,-10119,-8109,-358,2875,8794,-3488,-2300,-7075,1068,-5380,11209,-3302,3309,7874,-3302,-4879,-2015,-1117,-2451,-3280,1297,-12649,-9719,2082,5803,-6155,-5027,-5361,11209,-3187,-575,9895,1068,-4404,-5119,-772,-4140,-5925,-401,2415,6149,-255,7244,-5648,-2152,-5749,10670,-2268,230,170,3086,-4989,4425,2102,1610,-7161,1987,-6798,9254,-4337,-3056,5344,3137,-3910,-1563,2908,2925,7644,-1923,-2185,12129,-198,-3450,12163,-312,-5980,10634,-3250,-6151,10519,-3302,-13109,-9374,1211,-115,711,3482,2586,-2360,-1347,-2990,9574,1642,-3450,-1619,3367,-805,-2183,2218,-5290,10918,-198,13569,-7254,492,-11269,-8526,723,-1265,11937,-1347,10464,-7880,4530,-1495,8334,2411,9889,-6500,2391,-115,-1755,2102,-1610,9492,1757,575,9919,-657,-805,-290,4070,3910,-5465,-1283,-4140,9729,952,8394,-5894,-543,-7630,6149,-4452,11499,-6959,-1490,-345,8449,2052,-5290,-7304,451,345,7184,2210,280,9599,607,9084,-6306,1987,-11039,-8491,-3762,-230,9829,906,-4255,515,3195,-5175,-8992,2563,-4024,11605,-2842,0,11483,-2037,345,9714,332,-6067,975,-198,-5131,-4774,-2382,0,-8339,3035,-6711,4654,-1807,2300,-7880,2614,-3795,11721,-2382,-4830,11388,-3992,-4600,11709,-772,-5313,10404,378,1519,9714,-1692,-230,8794,1821,3565,5575,-3042,420,9599,378,-4369,3412,2677,-4128,2470,3022,2185,3031,262,1618,6149,952,-3679,10054,952,3416,5804,-4682,-690,10123,838,-5785,400,-3072,835,9599,-428,50,-1785,1757,345,-3165,641,-6325,10289,-3579,258,11324,-2268,-5932,10289,-543,-3556,9599,1412,2185,7366,-198,-7407,6610,-2727,-115,10634,436,-9429,-7578,-2037,-7211,6034,-2268,-6010,975,33,-983,11669,-772,-3105,10289,938,-6150,1780,-1923,-3450,10375,838,11978,-6730,2102,-2760,8104,2528,-6071,1205,-312,1380,8104,683,-1610,3429,4057,12304,-6936,-772,1432,8449,262,-3450,2930,3638,-10579,-8470,607,-3679,-6935,1068,-1610,-2130,2604,11154,-6226,-543,-3565,9944,1109,-3679,9829,1131,-4485,8735,1528,-7303,7299,-2497,-3335,11439,1145,2052,9714,-2842,7244,-5764,-1347,-6391,-5810,-4912,7129,-5728,-1347,-2300,-865,4448,-7704,7069,-4600,-5788,6724,1297,-2839,630,4172,856,4540,2332,-4600,7702,1987,-3105,9683,1528,230,10930,-888,5749,-6209,-657,0,8334,1951,9429,-8454,4111,-2398,-3050,1412,-460,10372,378,-8049,-6688,-3647,920,-6705,1183,-4807,2585,2563,-4859,11324,-83,-805,6671,2908,-7820,-9118,2447,-3679,-8654,2563,-4024,-1785,1694,-4388,-405,3367,-1265,7529,2822,-5749,10566,-543,-4600,-4484,-1002,-10004,-8915,1810,-2990,10519,833,6828,-8454,3137,-304,10634,607,11154,-7880,4591,1416,7989,723,-4255,-3510,-475,3910,4885,-2646,-5903,7069,952,-13569,-8700,-1117,-3973,-3395,-198,2415,1217,-1807,-6096,8219,-83,-5059,8104,1443,230,-4315,820,-1150,10005,1183,-5864,10999,-3877,-5519,-7190,80,-2530,-4890,822,345,9429,723,-2185,-1124,4287,465,-2360,607,90,400,3252,-4024,-8225,2155,-1610,-4774,1193,345,3850,2844,-690,9858,1183,-12304,-8287,-2268,6784,-5588,-2152,-1265,9944,1287,-3450,9829,1254,-3795,11554,895,690,-8684,3327,10579,-7994,4655,-4551,-1440,1297,1380,7299,1029,-11959,-8570,-3301,-5404,10749,-122,-2150,-5465,952,-345,-8716,3367,-920,11718,-3072,-6325,8909,-686,5864,-6385,-309,-3910,7184,2639,1955,9024,-1246,-3335,11094,1267,-4969,7069,2102,2300,-1555,-1222,-1035,11094,817,-5434,-2820,-2612,2990,8807,-3647,2185,10059,-3668,920,-1900,161,-2415,10634,890,-6864,9829,-2957,-6899,9829,-2870,8510,-6906,-3647,-7121,5230,-2497,115,8794,1603,-6739,6379,-543,-1495,12034,-2037,-2645,6494,2986,-93,11209,-772,-2645,10059,1269,1799,4654,952,-2875,11960,-1462,-5290,11384,-1807,-1495,10404,805,-3795,578,3482,10694,-6959,3034,-7359,-7844,-888,-3256,-1555,3597,-2185,10016,1297,9084,-6401,2332,-7758,6954,-4452,13362,-9029,2908,-2875,6265,2959,11844,-6878,-1002,-4502,-175,3252,-7011,7529,-1692,1550,-405,262,-1725,9944,1341,-4830,3850,2370,575,-6855,1183,2990,7644,-2083,-115,11356,-3302,-13165,-9260,-3072,-3251,-5235,378,4140,-5626,-1002,-2667,11899,-2037,425,10749,-1117,-575,11062,492,-1475,515,4172,-2300,11439,1016,3335,-5112,-1462,-2875,-3165,968,460,-6269,984,9889,-8339,4535,929,2700,2563,-5519,4999,1536,-5865,10749,-1233,-8505,-9949,2218,575,9918,-543,-2185,10749,1117,6632,-8225,2792,11039,-7246,3367,-3795,9484,1396,-4140,11209,926,-5519,11094,-1826,-6073,10404,-2727,-5771,10864,-1233,5864,-5879,-4682,3795,-4519,-3762,-690,11596,-1002,-460,3660,3137,11499,-9427,5092,-4714,-1356,838,-14604,-10064,480,-1380,-7880,2716,-3403,11669,952,-3966,-60,3597,-2875,10475,838,3313,-4890,-1807,-3291,10404,838,-5650,-6155,-2497,-5541,10634,-198,-1150,-4200,1358,-6386,9944,-2268,8394,-7457,3712,-14248,-9949,-2268,2070,10059,-3575,2245,6610,-83,-2070,12050,-2612,102,5459,2447,2445,7069,-543,-5635,4885,1397,-13194,-8915,262,-5361,5920,1987,2530,7874,-1032,-6899,9139,-4966,-6568,2010,-2957,2645,-4200,-1016,-5864,10488,-2152,-3105,12014,-1484,-5749,10680,-2152,-7359,8241,-4107,-115,3160,3169,-920,3390,3268,920,6303,1987,-6554,9689,-2612,-2875,11740,952,-4369,-1874,147,-3679,3045,3114,-5635,11018,-3647,-1725,12050,-2037,-1150,10684,952,-1495,10679,952,-991,10059,1068,-1380,11925,-772,-775,-1785,3022,-5519,10519,14,-2760,9829,1469,-6784,9105,-2957,-1035,9714,1467,-4853,11554,-657,-4024,11281,952,-1495,11209,925,-1840,11209,1030,-115,-8931,3712,1380,-451,838,2415,9948,-5257,-6325,8794,-734,0,10029,378,-6439,10059,-3626,-5980,-6242,-2957,-2185,9599,1683,10579,-8454,5277,-6094,919,-1002,-6784,1310,-3072,690,-6959,1950,-7129,9599,-2815,3842,3274,-2727,-2760,12044,-2152,-5175,10404,473,-2760,3120,4287,399,7874,1873,-1610,11852,147,2707,-2245,-1692,-230,9202,1528,-2070,-9260,3183,12304,-6959,-796,-1319,10749,1068,1840,6610,549,-1610,-60,4450,1725,-5253,147,848,6149,2102,-805,10511,607,-5175,7069,1901,-230,5575,2641,-1840,11158,1068,10119,-5914,-312,-4945,-8464,2102,-6388,2585,-1692,-2990,12210,-428,-6094,10243,-1347,-6529,5114,-543,-4485,9024,1350,3220,-4689,-4452,2070,1320,243,-3839,10519,607,-4749,11554,-1923,2415,4601,-198,-3105,10823,1183,2080,5575,147,-4485,9654,838,-6273,10404,-3532,3105,-5826,-83,2218,3274,147,-5307,5230,1757,-230,9877,838,-2300,11094,1237,-555,55,3827,-12128,-8570,-3187,-1725,10059,1215,-5223,-2590,-1807,-3795,10634,693,805,8909,704,-2070,6066,2792,3220,2930,-2115,-6473,3160,-657,-3897,-5580,-198,-7589,-8100,-543,-4926,11554,-1117,230,10896,-772,-3105,9484,1685,-2783,12014,-2382,-6896,-8570,1873,2645,2323,-1117,2530,4770,-616,230,-1287,1987,-5372,8679,838,-805,10634,800,11553,-6845,-1117,-683,9024,1873,-3565,12014,-1241,9200,-6021,-2037,-4369,11439,748,-2415,10979,1320,-2990,11094,1325,-6393,8909,-888,-6361,10174,-3302,-8009,-9260,1873,-4945,10174,584,-4369,-1358,2447,-6670,9599,-2416,8739,-6269,-2922,-4830,11607,-1117,-7015,-6472,-4912,9200,-6282,1757,-5749,-8225,1317,-690,11414,-198,2990,-6216,607,-9286,-7765,-772,-6060,1090,-83,-5519,9484,339,-5567,-6500,-1578,-575,-7304,1321,-1380,2125,4084,-6266,10174,-2957,2645,-6594,1297,2855,5344,-1117,2185,9449,-2382,-5519,10979,-3078,2898,7989,-2152,-6565,7529,-657,2574,6494,-657,3878,-5580,-5257,3125,5114,-1923,-1150,6494,2862,1265,-425,1183,-5980,10588,-1117,-4714,2700,2612,2990,3695,-2268,-5875,10749,-1117,8279,-9029,4220,-5328,11324,-2727,8969,-6236,1528,-6209,10055,-1578,3335,-5646,-543,14719,-10179,2470,-4600,-635,2884,1,2240,3252,4803,-7880,3022,805,-3625,451,1725,10139,-3532,-1725,11632,492,2262,-405,-1462,3236,7874,-2957,10809,-6385,1939,-10119,-8684,1424,2070,-3970,-359,-5864,10634,-1729,1725,5344,968,-6899,9107,-2152,-3565,11439,1061,-3105,-2884,838,2070,8235,-543,-5059,11209,-372,7820,-8799,3786,0,-4367,952,-690,11457,-312,5864,-5757,-4452,-6554,5689,-576,-6209,9714,-1210,694,6954,1987,-8510,-8036,-428,1916,400,262,-6268,10059,-2152,-2185,9484,1772,733,3619,2677,-5749,10519,-470,-5997,2125,723,-4830,-6845,-51,-4192,11669,-2612,920,7874,1388,-2645,1500,4172,-6554,-10018,2908,-1610,9968,1297,-6439,3045,-3364,-5980,5689,1225,-4369,3619,2622,5864,-5496,-3762,7820,-6136,1297,-1495,10979,1112,-4945,11490,-2037,-6094,10034,-772,714,10289,-1233,-4011,-4315,-198,-9659,-7567,-3532,-5175,2355,2238,6094,-5661,-4107,1380,2355,1985,309,-2245,838,2760,3200,-2268,575,5344,2163,-3450,12001,492,-11614,-8225,-833,1888,6034,492,893,6379,1987,-5130,11439,-2842,-1150,6954,2991,-12074,-8233,-2382,-6291,7184,262,933,4654,2218,1963,10289,-5487,2875,-2820,-1849,-3335,4195,3621,-230,11324,-3642,10924,-8799,5152,-1265,2010,3977,-5582,10864,-2497,7244,-5872,262,8394,-5973,-2612,2760,-671,-1923,-988,-1900,3022,13569,-8372,1642,-6094,10298,-888,-3220,170,4078,4485,-5507,-1807,2130,975,-1462,-6432,6379,147,-1035,-1824,3137,-6637,4540,-1692,2498,-1785,-1462,-6439,2831,-3532,3795,-5995,262,2530,7184,-709,-1840,3850,4245,-3220,12061,378,-7086,4999,-2612,-345,-9029,3762,-3450,10648,838,1642,5114,1183,-2645,8679,2274,-4605,285,2908,-7704,7094,-4567,-5920,10519,-772,14852,-10064,2332,-6452,5920,-83,115,9599,832,-5298,-6155,-1807,-4255,-3054,-543,-6109,10174,-888,-2875,4693,4057,-1725,630,4238,-7486,5114,-3992,3420,3964,-2497,-5794,10404,-428,2454,3850,-772,11154,-6831,2677,-2990,12179,-198,-6367,2125,-2612,-5519,9599,339,2193,3619,378,4600,-6312,492,115,11386,-1923,2112,1090,-198,-5712,-405,-1347,-5059,11466,-1807,-6554,9829,-2100,55,11209,-1462,1840,-7994,2922,8165,-8500,3942,-5826,10174,-312,-5761,10864,-1462,9429,-9492,5207,10809,-6e3,147,-7015,-7515,-772,-1150,11784,-1241,-4369,-4315,-625,-5749,-8207,1297,1495,-2015,-232,-6209,9369,-856,5290,-6500,101,-3500,9484,1528,-4600,9944,537,5175,-7649,2040,-9199,-7880,-220,115,-1221,2677,3045,8334,-2727,9774,-8057,4172,2123,-8454,3252,6094,-7128,1183,-4140,11707,-2152,2300,9944,-3619,460,2585,2992,1265,-7535,2352,1665,8449,-83,1035,-7880,2603,-2875,9997,1297,-1955,6149,2780,9084,-8390,4287,1495,-520,138,-1265,5344,2613,-1955,12012,-3187,-3565,10864,1152,4485,-6658,1412,1035,8334,951,3054,7989,-2497,1112,515,2102,-12879,-8396,-1462,-4830,10289,604,-11817,-8799,-3417,115,11307,-1692,3110,6610,-1807,6439,-7910,2332,690,-4315,584,-6067,2930,838,-4830,-6155,-923,2602,3274,-1807,7820,-7880,3249,-1571,12014,-2268,-3679,9599,1347,-4600,11427,-4567,3231,8104,-3302,8165,-6385,2188,-805,8679,2114,0,-635,3341,-6043,10404,-1347,-6554,7874,-1164,-6839,4770,-2152,9200,-6278,1873,-5059,11324,-3925,-5175,-9029,2616,-5579,10864,-2268,-5980,6494,1034,8969,-8454,4438,-5404,-5985,-2382,-12304,-8504,33,3320,2355,-1807,-60,-3165,952,575,10864,-1559,3565,-4429,-3698,-7015,3274,-3652,-7129,7718,-2612,-10809,-9144,2043,-230,11314,-772,4485,-5580,-1625,-2875,10104,1183,575,-6040,885,-920,-6845,1084,3698,-4545,-2957,-404,11324,-3647,-5864,7161,952,2760,2010,-1089,-5290,-6091,-1923,-6670,7255,-543,2145,9599,-2842,-5591,9599,262,2449,1434,-1462,-3679,-2890,147,-5265,11324,-3072,-1955,-2015,2080,2417,9254,-2612,-7958,-9605,3137,4714,-8601,4402,2415,10130,-5372,-1495,4115,3482,-4369,9853,723,3335,5648,-2152,-3105,7069,2841,3795,-5506,-1117,-1035,-2590,1812,-869,11554,-428,2530,5689,-488,-5290,11467,-1578,-3910,11583,-2842,3335,4770,-2228,-4339,11439,-3647,-1035,9868,1297,-3999,-3970,-198,9544,-8742,4517,1495,10289,-2912,-5404,3850,1956,-4776,1090,2792,-1150,9829,1370,9774,-6456,2332,-4600,7143,2332,-345,6494,2805,2415,9944,-4939,2760,-8570,2995,-6197,2700,-3187,115,11360,-2727,1041,10289,-1923,2383,9944,-4567,-4600,4540,2307,-3220,10395,838,-8739,-7372,-1692,-1725,7184,3017,-4714,11525,-2842,-6932,8794,-2382,-2185,4271,4402,521,10404,-888,5175,-5344,-2612,5059,-6959,1013,-4945,-7765,1263,-2070,9829,1471,1932,5575,492,-6123,10059,-888,1307,-4315,262,-1840,11895,-3417,-4945,11507,-2727,12074,-6471,-198,-7359,-8454,1920,-5643,10289,33,-1495,11887,-3302,-1955,12016,147,-4140,-1210,3321,-2300,-1325,4097,-2945,5804,2908,2220,-7420,2218,1845,2930,1183,-9029,-8225,262,2326,5230,-312,-1629,-5810,1068,-4485,11408,-4682,-1955,11964,262,-5404,11343,-1807,-2185,5804,2843,-5290,11135,-657,-1495,9840,1412,-10579,-8339,189,-4024,-1508,2908,-5877,2700,1297,-7150,5459,-2382,-1610,-8915,3138,1380,-925,-83,3565,6421,-3302,-11602,-8339,-198,1955,-2935,-342,-6152,1205,-1923,-12189,-9336,1528,-2530,-3970,1003,-6561,4999,-772,3487,6724,-2957,575,7299,1931,-9314,-8064,262,-2057,-5810,952,-1610,11996,-2957,575,3390,2819,-3295,-4085,378,-1380,12020,-1347,-3565,4309,3003,-162,10979,147,11844,-7190,2963,-4600,-2820,-863,-6209,-6395,-2842,-6591,9599,-2727,-115,11485,-2842,4255,-5948,33,-230,-7535,2507,12649,-6677,378,-5033,-5465,-2037,8049,-9605,4504,-5815,630,-1923,-2645,12014,-2393,-5519,2815,1856,10694,-6346,1873,-1150,10404,719,-6544,5459,-543,1809,285,607,-4945,9599,661,11499,-8082,4402,11387,-9374,5092,-2645,12067,-2268,-559,11439,-428,-1265,-750,4392,-4485,11632,-1578,-4369,-5925,-611,-4830,11407,-3877,-1265,11899,-2297,-2559,1550,4172,230,11324,-1861,-5257,-6040,-1923,-3795,8074,2218,8165,-8057,3942,-4714,-7403,952,185,11324,-1807,1742,8104,147,5980,-5560,-3762,9314,-6385,-2649,246,9714,492,-4140,11676,-1692,230,-5580,939,-3105,3964,4504,1678,-60,492,-4485,10519,623,-2645,12058,-2152,6784,-5630,-888,-2185,-8799,2882,-3585,9829,1183,-4660,-4545,-1117,-6293,2125,-3187,-1725,3274,4091,-5980,6149,1159,-4945,-3395,-1288,-3543,-60,3942,-5871,10404,-543,345,1434,3121,-3105,1090,4069,9889,-6224,-1807,-4880,8219,1528,1610,7967,492,-2875,4770,3983,-7129,-6701,-4912,3105,-7190,1839,-2033,5230,3137,1963,-8570,3482,11269,-9029,4933,-1035,-3740,1429,-12100,-8109,-1923,-4630,8564,1528,-2530,3194,4402,-5175,-7535,865,-1955,4309,3913,-2760,5045,3712,-2155,4309,4287,9659,-8841,4747,-5626,-520,-1578,-5059,-8697,2332,-7704,6149,-5027,-11729,-9097,1412,977,10059,-1462,-6784,4568,-2152,-1265,11675,-3417,1035,1895,2391,2415,8009,-888,-7475,6189,-3762,1610,8104,314,-3220,-7235,1642,-1943,12014,147,5864,-6835,607,230,10586,-83,115,-1721,1757,-4140,-6681,262,-2990,10864,1322,4600,-6614,1145,-6094,5230,815,-8394,-10345,3827,-183,11554,-2268,-4830,11521,-1923,2568,6149,-543,-3105,-1555,3692,647,9024,838,-5290,11324,-903,-2300,9649,1642,-8855,-8225,106,8394,-6638,2677,-9659,-8454,1029,-6325,2700,-269,-4945,9484,711,11384,-6942,2792,-2415,8219,2506,-4600,11572,33,-4830,-948,1757,-1150,11439,425,-13579,-8684,-1462,10234,-5929,-83,2530,9089,-2152,-12879,-8460,-2037,-1840,-1440,3986,-4140,10059,669,-257,2010,3482,4600,-5177,-2957,-460,11703,-2268,230,-6500,1089,6554,-7420,1769,-5175,-8799,2396,-3910,10979,1019,-6899,-6155,-4286,1944,3964,838,-3296,-405,4287,-5059,11277,-4107,1955,745,324,-1150,11324,597,-5787,5459,1412,-3795,5575,2225,-2990,11761,952,-3795,9700,1183,-690,11603,-1117,-4830,11569,-657,-10809,-10717,3137,6670,-8402,3022,-2760,12186,-312,-805,8104,2382,3108,8219,-3072,-4140,5946,2332,10119,-9144,5397,-4369,11652,-1692,-5404,11439,-1051,-3064,10059,1183,-575,11538,-1002,-1265,-1262,4057,-4989,11324,-428,3493,4080,-2727,230,9599,679,-345,11580,-2382,115,-3970,879,-11614,-8339,-3099,-7228,6265,-1807,-1725,12021,-2727,-4830,7808,1757,-1265,11934,-2152,-1955,11723,607,-6439,9910,-2268,-12963,-9144,-3072,-3795,2930,3069,-690,11669,-2449,4587,-8915,4517,3105,-8109,2563,-5519,10749,-386,-5519,6149,1916,11410,-9605,5437,1152,285,1987,5290,-7296,1297,-4600,-8037,1757,-425,11669,-2382,-690,11145,492,3220,-4545,-2113,-4448,6494,2563,-4024,11554,827,10234,-8390,4862,9544,-8541,4287,-805,170,3909,-6855,3964,-2727,-1486,10749,1068,-5980,10376,-2268,-1367,3505,3712,-4714,11439,-3647,-3795,7989,2251,-6899,3964,-2789,460,-520,2759,-7327,7874,-3532,-4600,11608,-1578,2196,-7075,1873,-5290,9005,723,-7248,8104,-3647,-4255,11823,-657,1840,7759,303,-805,11662,-1233,-5957,10404,-2268,-4971,-1095,607,-3795,400,3506,4668,-6385,492,10143,-6730,2908,2070,9755,-3072,2400,9944,-4797,-345,11473,-1117,-1610,11669,347,1280,-865,378,920,9314,-198,-1380,12001,-1923,4368,-5810,-5142,-6325,8130,-888,-3220,2700,3810,-1380,10979,1080,-431,11324,-312,-6094,8366,-312,3306,7989,-3302,1447,9944,-2152,-6640,4080,-1002,-7725,-8915,2102,-5404,11145,-3187,-2785,285,4287,-3655,3850,3137,-4116,10174,607,690,8056,1528,-4248,8564,1757,-3613,3850,3252,-1380,10998,1068,-4714,11554,-2075,3795,-4660,-3543,-6e3,-6385,-2497,10579,-7844,4517,-4485,11692,-428,-5918,6724,1068,4600,-5658,-5027,-4140,11899,-628,-460,11460,-888,-2530,12177,-1233,-3795,11209,1079,-3910,-1767,1873,-8104,-8684,378,115,-5810,1002,-5901,8219,378,-5175,7874,1448,-2415,12086,262,-6798,8104,-1807,-5078,11324,-3877,-5059,9139,832,2110,7874,-312,1610,-3625,54,-174,-3050,1068,10694,-5940,492,-9544,-7603,-2037,7360,-5997,-3647,-9774,-8570,1258,1725,6839,670,-1495,5344,2569,-7475,7184,-3116,1931,7644,262,-2398,11439,1068,-5290,1313,1873,-5635,11267,-1347,1955,-7304,2172,-12534,-8487,-312,2645,-3625,-1022,-6711,5344,-1002,-794,-7535,2677,-5659,10059,147,-4620,8334,1642,-6155,1895,-888,-2415,3964,4720,-5393,-865,-1462,7820,-8454,3518,-3202,1895,3942,-4255,11554,-2875,-3231,3964,4172,1496,8564,33,-2760,12221,-1002,-4945,-775,1412,-898,11439,33,431,9254,838,5059,-5145,-3762,-6927,-7765,952,-4889,-7765,1297,-5894,55,-1233,-5749,9714,37,-3890,4309,2563,690,8794,1022,-3335,11669,986,-3565,8297,2218,-6439,6494,70,-1265,11847,-3187,-6439,-6668,-2497,-3795,6724,2782,-6120,10289,-2382,920,10016,-1347,-1495,-4351,1297,-3565,12134,-83,-13339,-10294,2401,-3795,55,3664,8969,-5759,-1002,-6554,-6980,-1462,-5635,-6988,-428,-4830,-1400,33,-345,-9374,3912,-6094,-6680,-1578,3974,-5465,-5027,-3840,11899,378,-6703,9599,-2037,-4319,11784,-428,-4945,11209,-4936,-2645,-8694,2677,-3450,-8270,2332,-575,11681,-1923,-752,-405,4057,3910,-5507,-5142,-4312,-4315,-543,-7414,6379,-2957,-4024,11949,-428,-1380,11532,378,-3450,9208,1757,-2185,8679,2282,-3910,10059,789,-5175,-1014,262,-6325,2470,-3472,-2300,1002,4287,-6554,-8454,1574,460,8104,1724,-115,9695,952,-2070,12052,33,10809,-9155,5322,11499,-6210,147,-4119,-3740,-312,-4928,-5235,-1807,6209,-5655,-3877,670,1780,2792,10579,-6614,-1964,-4714,-2935,-971,-2530,-7765,2239,-7393,-8454,1873,174,11209,-1692,-6193,2470,-83,-4140,11865,33,3565,-5098,-4682,-7463,-9374,2792,-4024,-1095,3558,-115,-8109,2763,-14029,-8942,-1578,-11154,-8570,-3589,-4608,11439,492,-2415,12166,-312,-4870,11554,-772,8279,-6040,-2906,-2185,12094,33,-4519,-4660,-888,575,10520,-1233,1035,515,2243,11844,-6295,378,-9314,-10464,2447,-3565,12129,-1182,-3450,4392,3137,-4485,11611,-2497,-3910,11669,-1951,-5290,11439,-1734,-6784,6494,-571,11384,-7693,3712,-6478,3160,-1807,3376,5804,-2268,-3335,-60,4120,10464,-6048,838,-4369,2342,2908,-7244,-7304,-2080,460,10289,-432,-575,-6500,1085,-1955,-7430,1297,2415,7874,-852,-1035,11739,-1002,-994,-1325,3827,-10004,-10984,2976,5142,-7994,2677,-1374,11669,33,2678,7874,-1347,3329,-5235,-4912,-5686,10864,-2842,3565,-6730,1417,-12189,-8225,-1443,6094,-6564,147,-5674,860,838,-7475,-7603,-1578,-1495,11986,-2612,-9774,-7487,-2842,-6094,653,-2727,-5418,3735,1987,-5519,10769,-428,2300,-5695,113,2330,3850,33,-6696,4195,-1923,1265,-952,262,-2060,12014,262,-2230,4309,4402,690,-2360,402,11269,-6845,-1633,-3105,4080,4324,-8279,-9338,1297,-2760,4951,3827,-5519,5384,1642,10349,-7010,3367,836,-6730,1528,-6209,6379,674,6094,-6632,262,-5749,-8454,1535,1840,-6155,783,2763,9714,-3762,5167,-7190,1183,-4714,-1487,262,-6779,4654,-2037,-2070,5230,3231,2170,2125,-83,-690,11459,-428,-7704,-8485,607,-3335,10749,992,2021,7874,-83,8049,-6040,-3133]);var Yo=document.querySelector("#hero-canvas"),B5=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(Yo&&!B5){let i=Yo.parentElement,t=document.querySelector(".hero-copy"),e=document.documentElement,n=new $i,s=new Ae(32,1,.1,100),r=new ma({canvas:Yo,antialias:!0,alpha:!0,powerPreference:"high-performance"}),a=new Qe,o=new Qe,c=new Qe,l=new Ft("#c34b9a"),d=new Fn({color:l,size:.0055,transparent:!0,opacity:.92,sizeAttenuation:!0}),g,h=1.9,f=0;r.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),r.setClearColor(0,0),r.toneMapping=us,r.toneMappingExposure=1.05,s.position.set(0,.1,10);let p=new je(Tn.degToRad(0),Tn.degToRad(-85),Tn.degToRad(0)),S=new je(Tn.degToRad(0),Tn.degToRad(0),Tn.degToRad(0)),m=p.clone();a.rotation.copy(p),a.add(c,o),n.add(a);let u=new Pe,T=new Float32Array(va.length);for(let N=0;N<va.length;N+=1)T[N]=va[N]*H0;u.setAttribute("position",new Ie(T,3)),u.computeBoundingSphere();let w=new jn(u,d);w.scale.setScalar(12.6),h=u.boundingSphere.radius*w.scale.x,c.add(w),c.visible=!0,new xa().load("assets/models/pcd/Zaghetto.pcd",N=>{N.geometry.center(),N.geometry.rotateX(Math.PI),N.name="Zaghetto point cloud",N.material.size=.0055,N.material.sizeAttenuation=!0,N.material.transparent=!0,N.material.opacity=.92,N.material.color.set(l),N.scale.setScalar(12.6),N.geometry.computeBoundingSphere(),h=N.geometry.boundingSphere.radius*N.scale.x,o.add(N),g=N,c.visible=!1,U()},void 0,()=>{c.visible=!0});let M=()=>{let N=e.dataset.theme==="light";l.set(N?"#8e4f78":"#ffffff"),d.color.copy(l),d.opacity=N?.46:.72,g&&(g.material.color.copy(l),g.material.opacity=N?.82:.92)};M(),new MutationObserver(M).observe(e,{attributes:!0,attributeFilter:["data-theme"]});let b={x:0,y:0},C=0,x=0,A=!1,L=document.querySelector(".hero--home")||i;window.addEventListener("pointermove",N=>{b.x=N.clientX/window.innerWidth-.5,b.y=N.clientY/window.innerHeight-.5},{passive:!0}),L.addEventListener("pointerenter",()=>{A=!0},{passive:!0}),L.addEventListener("pointerleave",()=>{A=!1},{passive:!0});let U=()=>{let N=i.clientWidth||600,D=i.clientHeight||500;s.aspect=N/D,s.updateProjectionMatrix(),r.setSize(N,D,!1),a.scale.setScalar(N<560?.78:N<1e3?.9:1);let k=s.position.z*Math.tan(Tn.degToRad(s.fov/2)),J=k*s.aspect,q=h*a.scale.x*.82,nt=J-q-.08,W=N>=1200?1.65:N>=760?1.2:1.05;if(a.position.x=N<760?1.05:Math.max(0,Math.min(W,nt)),t&&N<760){let Q=t.offsetTop,tt=h*a.scale.x*.62;a.position.y=Math.max(0,k-tt-Q*(k*2)/D)}else if(t&&N>=760){let Q=t.offsetTop+t.offsetHeight/2;a.position.y=(D/2-Q)*(k*2/D)}else a.position.y=0};U(),window.addEventListener("resize",U,{passive:!0});let z=()=>{f+=.006,C+=(b.y*.08-C)*.035,x+=(b.x*.11-x)*.035;let N=A?S:p;m.x+=(N.x-m.x)*.028,m.y+=(N.y-m.y)*.028,m.z+=(N.z-m.z)*.028,a.rotation.x=m.x+C*.12,a.rotation.y=m.y+x*(A?.08:.55),a.rotation.z=m.z+Math.sin(f*.28)*.008,o.rotation.z=Math.sin(f*.5)*.012,c.rotation.z=Math.sin(f*.5)*.012,r.render(n,s),requestAnimationFrame(z)};z()}})();
