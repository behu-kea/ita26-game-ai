var oc=Object.defineProperty;var lc=(i,e,t)=>e in i?oc(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var W=(i,e,t)=>lc(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ma="187",cc=0,Ka=1,hc=2,ki=1,uc=2,Oi=3,ei=0,Ht=1,Rn=2,vi=0,Gi=1,Za=2,$a=3,Ja=4,dc=5,xi=100,fc=101,pc=102,mc=103,gc=104,_c=200,xc=201,vc=202,Mc=203,al=204,ol=205,Sc=206,Ec=207,yc=208,Tc=209,bc=210,wc=211,Ac=212,Rc=213,Cc=214,Tr=0,br=1,wr=2,Vi=3,Ar=4,Rr=5,Cr=6,Pr=7,ga=0,Pc=1,Lc=2,Pn=0,ll=1,cl=2,hl=3,ul=4,dl=5,fl=6,pl=7,ml=300,Si=301,Wi=302,Ks=303,Zs=304,Lr=1e3,Cn=1001,Dr=1002,Lt=1003,Dc=1004,is=1005,Gt=1006,$s=1007,kn=1008,qt=1009,gl=1010,_l=1011,Xi=1012,_a=1013,vn=1014,ln=1015,Mn=1016,xa=1017,va=1018,Ei=1020,xl=35902,vl=35899,Ml=1021,Sl=1022,_n=1023,Vn=1026,Gn=1027,Ma=1028,Sa=1029,ti=1030,Ea=1031,ya=1033,Rs=33776,Cs=33777,Ps=33778,Ls=33779,Ir=35840,Nr=35841,Ur=35842,Fr=35843,Or=36196,Br=37492,zr=37496,kr=37488,Gr=37489,Ns=37490,Hr=37491,Vr=37808,Wr=37809,Xr=37810,qr=37811,Yr=37812,Kr=37813,Zr=37814,$r=37815,Jr=37816,Qr=37817,jr=37818,ea=37819,ta=37820,na=37821,ia=36492,sa=36494,ra=36495,aa=36283,oa=36284,Us=36285,la=36286,Ic=3200,ca=0,Nc=1,zn="",Xt="srgb",Fs="srgb-linear",Os="linear",nt="srgb",Js=7680,Uc=519,Fc=512,Oc=513,Bc=514,El=515,zc=516,kc=517,yl=518,Tl=519,Gc=35044,Hc=35048,Qa="300 es",cn=2e3,qi=2001;function Vc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wc(){const i=Bs("canvas");return i.style.display="block",i}const ja={};function eo(...i){const e="THREE."+i.shift();console.log(e,...i)}function bl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=bl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=bl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ds(...i){const e=i.join(" ");e in ja||(ja[e]=!0,Ie(...i))}function Xc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const qc={[Tr]:Tr,[wr]:Cr,[Ar]:Ar,[Vi]:Rr,[br]:br,[Cr]:wr,[Pr]:Pr,[Rr]:Vi};class ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qs=Math.PI/180,ha=180/Math.PI;function Ki(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function Yc(i,e){return(i%e+e)%e}function js(i,e,t){return(1-t)*i+t*e}function Kc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ta(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Zc(i,e){if(e.constructor===Float32Array)return i;const t=Ta(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function $c(i,e){if(e.constructor===Float32Array)return i;const t=Ta(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Ia=class Ia{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ia.prototype.isVector2=!0;let Ge=Ia;class bi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],g=n[s+3],u=r[a+0],m=r[a+1],_=r[a+2],y=r[a+3];if(g!==y||c!==u||l!==m||h!==_){let f=c*u+l*m+h*_+g*y;f<0&&(u=-u,m=-m,_=-_,y=-y,f=-f);let d=1-o;if(f<.9995){const M=Math.acos(f),A=Math.sin(M);d=Math.sin(d*M)/A,o=Math.sin(o*M)/A,c=c*d+u*o,l=l*d+m*o,h=h*d+_*o,g=g*d+y*o}else{c=c*d+u*o,l=l*d+m*o,h=h*d+_*o,g=g*d+y*o;const M=1/Math.sqrt(c*c+l*l+h*h+g*g);c*=M,l*=M,h*=M,g*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],g=r[a],u=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+h*g+c*m-l*u,e[t+1]=c*_+h*u+l*g-o*m,e[t+2]=l*_+h*m+o*u-c*g,e[t+3]=h*_-o*g-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),g=o(r/2),u=c(n/2),m=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=u*h*g+l*m*_,this._y=l*m*g-u*h*_,this._z=l*h*_+u*m*g,this._w=l*h*g-u*m*_;break;case"YXZ":this._x=u*h*g+l*m*_,this._y=l*m*g-u*h*_,this._z=l*h*_-u*m*g,this._w=l*h*g+u*m*_;break;case"ZXY":this._x=u*h*g-l*m*_,this._y=l*m*g+u*h*_,this._z=l*h*_+u*m*g,this._w=l*h*g-u*m*_;break;case"ZYX":this._x=u*h*g-l*m*_,this._y=l*m*g+u*h*_,this._z=l*h*_-u*m*g,this._w=l*h*g+u*m*_;break;case"YZX":this._x=u*h*g+l*m*_,this._y=l*m*g+u*h*_,this._z=l*h*_-u*m*g,this._w=l*h*g-u*m*_;break;case"XZY":this._x=u*h*g-l*m*_,this._y=l*m*g-u*h*_,this._z=l*h*_+u*m*g,this._w=l*h*g+u*m*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],g=t[10],u=n+o+g;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>g){const m=2*Math.sqrt(1+n-o-g);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>g){const m=2*Math.sqrt(1+o-n-g);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+g-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Na=class Na{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(to.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(to.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),g=2*(r*n-a*t);return this.x=t+c*l+a*g-o*h,this.y=n+c*h+o*l-r*g,this.z=s+c*g+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return er.copy(this).projectOnVector(e),this.sub(er)}reflect(e){return this.sub(er.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Na.prototype.isVector3=!0;let F=Na;const er=new F,to=new bi,Ua=class Ua{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],g=n[7],u=n[2],m=n[5],_=n[8],y=s[0],f=s[3],d=s[6],M=s[1],A=s[4],E=s[7],b=s[2],T=s[5],p=s[8];return r[0]=a*y+o*M+c*b,r[3]=a*f+o*A+c*T,r[6]=a*d+o*E+c*p,r[1]=l*y+h*M+g*b,r[4]=l*f+h*A+g*T,r[7]=l*d+h*E+g*p,r[2]=u*y+m*M+_*b,r[5]=u*f+m*A+_*T,r[8]=u*d+m*E+_*p,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],g=h*a-o*l,u=o*c-h*r,m=l*r-a*c,_=t*g+n*u+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=g*y,e[1]=(s*l-h*n)*y,e[2]=(o*n-s*a)*y,e[3]=u*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=m*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tr.makeScale(e,t)),this}rotate(e){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tr.makeRotation(-e)),this}translate(e,t){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ua.prototype.isMatrix3=!0;let Ue=Ua;const tr=new Ue,no=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),io=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jc(){const i={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?Os:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fs]:{primaries:e,whitePoint:n,transfer:Os,toXYZ:no,fromXYZ:io,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:no,fromXYZ:io,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}const Ze=Jc();function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class Qc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ri===void 0&&(ri=Bs("canvas")),ri.width=e.width,ri.height=e.height;const s=ri.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ln(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ln(t[n]/255)*255):t[n]=Ln(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jc=0;class ba{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nr(s[a].image)):r.push(nr(s[a]))}else r=nr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function nr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let eh=0;const ir=new F;class Ft extends ii{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=Cn,s=Cn,r=Gt,a=kn,o=_n,c=qt,l=Ft.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Ki(),this.name="",this.source=new ba(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ir).x}get height(){return this.source.getSize(ir).y}get depth(){return this.source.getSize(ir).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lr:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lr:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=ml;Ft.DEFAULT_ANISOTROPY=1;const Fa=class Fa{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],g=c[8],u=c[1],m=c[5],_=c[9],y=c[2],f=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(g-y)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(g+y)<.1&&Math.abs(_+f)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,E=(m+1)/2,b=(d+1)/2,T=(h+u)/4,p=(g+y)/4,S=(_+f)/4;return A>E&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=p/n):E>b?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=S/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=p/r,s=S/r),this.set(n,s,r,t),this}let M=Math.sqrt((f-_)*(f-_)+(g-y)*(g-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(f-_)/M,this.y=(g-y)/M,this.z=(u-h)/M,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fa.prototype.isVector4=!0;let mt=Fa;class th extends ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ft({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ba(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends th{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wl extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nh extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Vs=class Vs{constructor(e,t,n,s,r,a,o,c,l,h,g,u,m,_,y,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,g,u,m,_,y,f)}set(e,t,n,s,r,a,o,c,l,h,g,u,m,_,y,f){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=g,d[14]=u,d[3]=m,d[7]=_,d[11]=y,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ai.setFromMatrixColumn(e,0).length(),r=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),g=Math.sin(r);if(e.order==="XYZ"){const u=a*h,m=a*g,_=o*h,y=o*g;t[0]=c*h,t[4]=-c*g,t[8]=l,t[1]=m+_*l,t[5]=u-y*l,t[9]=-o*c,t[2]=y-u*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,m=c*g,_=l*h,y=l*g;t[0]=u+y*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*g,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=y+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,m=c*g,_=l*h,y=l*g;t[0]=u-y*o,t[4]=-a*g,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,m=a*g,_=o*h,y=o*g;t[0]=c*h,t[4]=_*l-m,t[8]=u*l+y,t[1]=c*g,t[5]=y*l+u,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,m=a*l,_=o*c,y=o*l;t[0]=c*h,t[4]=y-u*g,t[8]=_*g+m,t[1]=g,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*g+_,t[10]=u-y*g}else if(e.order==="XZY"){const u=a*c,m=a*l,_=o*c,y=o*l;t[0]=c*h,t[4]=-g,t[8]=l*h,t[1]=u*g+y,t[5]=a*h,t[9]=m*g-_,t[2]=_*g-m,t[6]=o*h,t[10]=y*g+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ih,e,sh)}lookAt(e,t,n){const s=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Nn.crossVectors(n,Vt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Nn.crossVectors(n,Vt)),Nn.normalize(),ss.crossVectors(Vt,Nn),s[0]=Nn.x,s[4]=ss.x,s[8]=Vt.x,s[1]=Nn.y,s[5]=ss.y,s[9]=Vt.y,s[2]=Nn.z,s[6]=ss.z,s[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],g=n[5],u=n[9],m=n[13],_=n[2],y=n[6],f=n[10],d=n[14],M=n[3],A=n[7],E=n[11],b=n[15],T=s[0],p=s[4],S=s[8],D=s[12],C=s[1],I=s[5],U=s[9],X=s[13],L=s[2],G=s[6],$=s[10],k=s[14],ne=s[3],Y=s[7],j=s[11],te=s[15];return r[0]=a*T+o*C+c*L+l*ne,r[4]=a*p+o*I+c*G+l*Y,r[8]=a*S+o*U+c*$+l*j,r[12]=a*D+o*X+c*k+l*te,r[1]=h*T+g*C+u*L+m*ne,r[5]=h*p+g*I+u*G+m*Y,r[9]=h*S+g*U+u*$+m*j,r[13]=h*D+g*X+u*k+m*te,r[2]=_*T+y*C+f*L+d*ne,r[6]=_*p+y*I+f*G+d*Y,r[10]=_*S+y*U+f*$+d*j,r[14]=_*D+y*X+f*k+d*te,r[3]=M*T+A*C+E*L+b*ne,r[7]=M*p+A*I+E*G+b*Y,r[11]=M*S+A*U+E*$+b*j,r[15]=M*D+A*X+E*k+b*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],g=e[6],u=e[10],m=e[14],_=e[3],y=e[7],f=e[11],d=e[15],M=c*m-l*u,A=o*m-l*g,E=o*u-c*g,b=a*m-l*h,T=a*u-c*h,p=a*g-o*h;return t*(y*M-f*A+d*E)-n*(_*M-f*b+d*T)+s*(_*A-y*b+d*p)-r*(_*E-y*T+f*p)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],g=e[9],u=e[10],m=e[11],_=e[12],y=e[13],f=e[14],d=e[15],M=t*o-n*a,A=t*c-s*a,E=t*l-r*a,b=n*c-s*o,T=n*l-r*o,p=s*l-r*c,S=h*y-g*_,D=h*f-u*_,C=h*d-m*_,I=g*f-u*y,U=g*d-m*y,X=u*d-m*f,L=M*X-A*U+E*I+b*C-T*D+p*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/L;return e[0]=(o*X-c*U+l*I)*G,e[1]=(s*U-n*X-r*I)*G,e[2]=(y*p-f*T+d*b)*G,e[3]=(u*T-g*p-m*b)*G,e[4]=(c*C-a*X-l*D)*G,e[5]=(t*X-s*C+r*D)*G,e[6]=(f*E-_*p-d*A)*G,e[7]=(h*p-u*E+m*A)*G,e[8]=(a*U-o*C+l*S)*G,e[9]=(n*C-t*U-r*S)*G,e[10]=(_*T-y*E+d*M)*G,e[11]=(g*E-h*T-m*M)*G,e[12]=(o*D-a*I-c*S)*G,e[13]=(t*I-n*D+s*S)*G,e[14]=(y*A-_*b-f*M)*G,e[15]=(h*b-g*A+u*M)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,g=o+o,u=r*l,m=r*h,_=r*g,y=a*h,f=a*g,d=o*g,M=c*l,A=c*h,E=c*g,b=n.x,T=n.y,p=n.z;return s[0]=(1-(y+d))*b,s[1]=(m+E)*b,s[2]=(_-A)*b,s[3]=0,s[4]=(m-E)*T,s[5]=(1-(u+d))*T,s[6]=(f+M)*T,s[7]=0,s[8]=(_+A)*p,s[9]=(f-M)*p,s[10]=(1-(u+y))*p,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ai.set(s[0],s[1],s[2]).length();const o=ai.set(s[4],s[5],s[6]).length(),c=ai.set(s[8],s[9],s[10]).length();r<0&&(a=-a),tn.copy(this);const l=1/a,h=1/o,g=1/c;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=g,tn.elements[9]*=g,tn.elements[10]*=g,t.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=cn,c=!1){const l=this.elements,h=2*r/(t-e),g=2*r/(n-s),u=(t+e)/(t-e),m=(n+s)/(n-s);let _,y;if(c)_=r/(a-r),y=a*r/(a-r);else if(o===cn)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===qi)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=g,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=cn,c=!1){const l=this.elements,h=2/(t-e),g=2/(n-s),u=-(t+e)/(t-e),m=-(n+s)/(n-s);let _,y;if(c)_=1/(a-r),y=a/(a-r);else if(o===cn)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===qi)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=g,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Vs.prototype.isMatrix4=!0;let rt=Vs;const ai=new F,tn=new rt,ih=new F(0,0,0),sh=new F(1,1,1),Nn=new F,ss=new F,Vt=new F,so=new rt,ro=new bi;class Wn{constructor(e=0,t=0,n=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],g=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-g,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return so.makeRotationFromQuaternion(e),this.setFromRotationMatrix(so,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ro.setFromEuler(this),this.setFromQuaternion(ro,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class wa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rh=0;const ao=new F,oi=new bi,En=new rt,rs=new F,Ci=new F,ah=new F,oh=new bi,oo=new F(1,0,0),lo=new F(0,1,0),co=new F(0,0,1),ho={type:"added"},lh={type:"removed"},li={type:"childadded",child:null},sr={type:"childremoved",child:null};class Ct extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new F,t=new Wn,n=new bi,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ue}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(oo,e)}rotateY(e){return this.rotateOnAxis(lo,e)}rotateZ(e){return this.rotateOnAxis(co,e)}translateOnAxis(e,t){return ao.copy(e).applyQuaternion(this.quaternion),this.position.add(ao.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oo,e)}translateY(e){return this.translateOnAxis(lo,e)}translateZ(e){return this.translateOnAxis(co,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rs.copy(e):rs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Ci,rs,this.up):En.lookAt(rs,Ci,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(En),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ho),li.child=e,this.dispatchEvent(li),li.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lh),sr.child=e,this.dispatchEvent(sr),sr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ho),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,e,ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,oh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const g=c[l];r(e.shapes,g)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),g=a(e.shapes),u=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),g.length>0&&(n.shapes=g),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ct.DEFAULT_UP=new F(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zt extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ch={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const f=t.getJointPose(y,n),d=this._getHandJoint(l,y);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const h=l.joints["index-finger-tip"],g=l.joints["thumb-tip"],u=h.position.distanceTo(g.position),m=.02,_=.005;l.inputState.pinching&&u>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ch)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},as={h:0,s:0,l:0};function ar(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=Yc(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ar(a,r,e+1/3),this.g=ar(a,r,e),this.b=ar(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=Al[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ze.workingToColorSpace(Ut.copy(this),e),Math.round($e(Ut.r*255,0,255))*65536+Math.round($e(Ut.g*255,0,255))*256+Math.round($e(Ut.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Ut.copy(this),t);const n=Ut.r,s=Ut.g,r=Ut.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const g=a-o;switch(l=h<=.5?g/(a+o):g/(2-a-o),a){case n:c=(s-r)/g+(s<r?6:0);break;case s:c=(r-n)/g+2;break;case r:c=(n-s)/g+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Xt){Ze.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,s=Ut.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(as);const n=js(Un.h,as.h,t),s=js(Un.s,as.s,t),r=js(Un.l,as.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new He;He.NAMES=Al;class Aa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=n}clone(){return new Aa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hh extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const nn=new F,yn=new F,or=new F,Tn=new F,ci=new F,hi=new F,uo=new F,lr=new F,cr=new F,hr=new F,ur=new mt,dr=new mt,fr=new mt;class on{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),nn.subVectors(e,t),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){nn.subVectors(s,t),yn.subVectors(n,t),or.subVectors(e,t);const a=nn.dot(nn),o=nn.dot(yn),c=nn.dot(or),l=yn.dot(yn),h=yn.dot(or),g=a*l-o*o;if(g===0)return r.set(0,0,0),null;const u=1/g,m=(l*c-o*h)*u,_=(a*h-o*c)*u;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(a,Tn.y),c.addScaledVector(o,Tn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ur.setScalar(0),dr.setScalar(0),fr.setScalar(0),ur.fromBufferAttribute(e,t),dr.fromBufferAttribute(e,n),fr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ur,r.x),a.addScaledVector(dr,r.y),a.addScaledVector(fr,r.z),a}static isFrontFacing(e,t,n,s){return nn.subVectors(n,t),yn.subVectors(e,t),nn.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),nn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return on.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ci.subVectors(s,n),hi.subVectors(r,n),lr.subVectors(e,n);const c=ci.dot(lr),l=hi.dot(lr);if(c<=0&&l<=0)return t.copy(n);cr.subVectors(e,s);const h=ci.dot(cr),g=hi.dot(cr);if(h>=0&&g<=h)return t.copy(s);const u=c*g-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(ci,a);hr.subVectors(e,r);const m=ci.dot(hr),_=hi.dot(hr);if(_>=0&&m<=_)return t.copy(r);const y=m*l-c*_;if(y<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(hi,o);const f=h*_-m*g;if(f<=0&&g-h>=0&&m-_>=0)return uo.subVectors(r,s),o=(g-h)/(g-h+(m-_)),t.copy(s).addScaledVector(uo,o);const d=1/(f+y+u);return a=y*d,o=u*d,t.copy(n).addScaledVector(ci,a).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class si{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(e.matrixWorld),this.union(os)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pi),ls.subVectors(this.max,Pi),ui.subVectors(e.a,Pi),di.subVectors(e.b,Pi),fi.subVectors(e.c,Pi),Fn.subVectors(di,ui),On.subVectors(fi,di),Kn.subVectors(ui,fi);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-Kn.z,Kn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,Kn.z,0,-Kn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-Kn.y,Kn.x,0];return!pr(t,ui,di,fi,ls)||(t=[1,0,0,0,1,0,0,0,1],!pr(t,ui,di,fi,ls))?!1:(cs.crossVectors(Fn,On),t=[cs.x,cs.y,cs.z],pr(t,ui,di,fi,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bn=[new F,new F,new F,new F,new F,new F,new F,new F],sn=new F,os=new si,ui=new F,di=new F,fi=new F,Fn=new F,On=new F,Kn=new F,Pi=new F,ls=new F,cs=new F,Zn=new F;function pr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zn.fromArray(i,r);const o=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),c=e.dot(Zn),l=t.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const vt=new F,hs=new Ge;let uh=0;class Hn extends ii{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gc,this.updateRanges=[],this.gpuType=ln,this.version=0,this._normalizationScale=e!==void 0?Ta(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):$c(e,this.array)}}class Rl extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cl extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const dh=new si,Li=new F,mr=new F;class Zi{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Li.subVectors(e,this.center);const t=Li.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Li,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Li.copy(e.center).add(mr)),this.expandByPoint(Li.copy(e.center).sub(mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let fh=0;const Qt=new rt,gr=new Ct,pi=new F,Wt=new si,Di=new si,At=new F;class jt extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vc(e)?Cl:Rl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return gr.lookAt(e),gr.updateMatrix(),this.applyMatrix4(gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ut(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Di.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Wt.min,Di.min),Wt.expandByPoint(At),At.addVectors(Wt.max,Di.max),Wt.expandByPoint(At)):(Wt.expandByPoint(Di.min),Wt.expandByPoint(Di.max))}Wt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)At.fromBufferAttribute(o,l),c&&(pi.fromBufferAttribute(e,l),At.add(pi)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new F,c[D]=new F;const h=new F,g=new F,u=new F,m=new Ge,_=new Ge,y=new Ge,f=new F,d=new F;function M(D,C,I){l[D]=l[C]=l[I]=1,h.fromBufferAttribute(n,D),g.fromBufferAttribute(n,C),u.fromBufferAttribute(n,I),m.fromBufferAttribute(r,D),_.fromBufferAttribute(r,C),y.fromBufferAttribute(r,I),g.sub(h),u.sub(h),_.sub(m),y.sub(m);const U=1/(_.x*y.y-y.x*_.y);isFinite(U)&&(f.copy(g).multiplyScalar(y.y).addScaledVector(u,-_.y).multiplyScalar(U),d.copy(u).multiplyScalar(_.x).addScaledVector(g,-y.x).multiplyScalar(U),o[D].add(f),o[C].add(f),o[I].add(f),c[D].add(d),c[C].add(d),c[I].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,C=A.length;D<C;++D){const I=A[D],U=I.start,X=I.count;for(let L=U,G=U+X;L<G;L+=3)M(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const E=new F,b=new F,T=new F,p=new F;function S(D){T.fromBufferAttribute(s,D),p.copy(T);const C=o[D];E.copy(C),E.sub(T.multiplyScalar(T.dot(C))).normalize(),b.crossVectors(p,C);const U=b.dot(c[D])<0?-1:1;a.setXYZW(D,E.x,E.y,E.z,U)}for(let D=0,C=n.count;D<C;++D)l[D]&&S(D);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,h=new F,g=new F;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),y=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,f),h.subVectors(a,r),g.subVectors(s,r),h.cross(g),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),g.subVectors(s,r),h.cross(g),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,g=o.normalized,u=new l.constructor(c.length*h);let m=0,_=0;for(let y=0,f=c.length;y<f;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*h;for(let d=0;d<h;d++)u[_++]=l[m++]}return new Hn(u,h,g)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,g=l.length;h<g;h++){const u=l[h],m=e(u,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let g=0,u=l.length;g<u;g++){const m=l[g];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],g=r[l];for(let u=0,m=g.length;u<m;u++)h.push(g[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const g=a[l];this.addGroup(g.start,g.count,g.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _r=new F,ph=new F,mh=new Ue;class An{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=_r.subVectors(n,t).cross(ph.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(_r),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||mh.getNormalMatrix(e),s=this.coplanarPoint(_r).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let gh=0;class $i extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Gi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ol,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new An().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wn=new F,xr=new F,us=new F,ds=new F;class Pl{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xr.copy(e).add(t).multiplyScalar(.5),us.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(xr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(us),o=ds.dot(this.direction),c=-ds.dot(us),l=ds.lengthSq(),h=Math.abs(1-a*a);let g,u,m,_;if(h>0)if(g=a*c-o,u=a*o-c,_=r*h,g>=0)if(u>=-_)if(u<=_){const y=1/h;g*=y,u*=y,m=g*(g+a*u+2*o)+u*(a*g+u+2*c)+l}else u=r,g=Math.max(0,-(a*u+o)),m=-g*g+u*(u+2*c)+l;else u=-r,g=Math.max(0,-(a*u+o)),m=-g*g+u*(u+2*c)+l;else u<=-_?(g=Math.max(0,-(-a*r+o)),u=g>0?-r:Math.min(Math.max(-r,-c),r),m=-g*g+u*(u+2*c)+l):u<=_?(g=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(g=Math.max(0,-(a*r+o)),u=g>0?r:Math.min(Math.max(-r,-c),r),m=-g*g+u*(u+2*c)+l);else u=a>0?-r:r,g=Math.max(0,-(a*u+o)),m=-g*g+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(xr).addScaledVector(us,u),m}intersectSphere(e,t){if(e.radius<0)return null;wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,g=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(o=(e.min.z-u.z)*g,c=(e.max.z-u.z)*g):(o=(e.max.z-u.z)*g,c=(e.min.z-u.z)*g),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,g=e.x-a.x,u=e.y-a.y,m=e.z-a.z,_=t.x-a.x,y=t.y-a.y,f=t.z-a.z,d=n.x-a.x,M=n.y-a.y,A=n.z-a.z,E=Math.abs(c),b=Math.abs(l),T=Math.abs(h);let p,S,D,C,I,U,X,L,G,$,k,ne;if(E>=b&&E>=T?(D=c,U=g,G=_,ne=d,c>=0?(p=l,S=h,C=u,I=m,X=y,L=f,$=M,k=A):(p=h,S=l,C=m,I=u,X=f,L=y,$=A,k=M)):b>=T?(D=l,U=u,G=y,ne=M,l>=0?(p=h,S=c,C=m,I=g,X=f,L=_,$=A,k=d):(p=c,S=h,C=g,I=m,X=_,L=f,$=d,k=A)):(D=h,U=m,G=f,ne=A,h>=0?(p=c,S=l,C=g,I=u,X=_,L=y,$=d,k=M):(p=l,S=c,C=u,I=g,X=y,L=_,$=M,k=d)),D===0)return null;const Y=p/D,j=S/D,te=1/D,q=C-Y*U,me=I-j*U,V=X-Y*G,fe=L-j*G,Se=$-Y*ne,Re=k-j*ne,ge=Se*fe-Re*V,Me=q*Re-me*Se,We=V*me-fe*q;if(s){if(ge<0||Me<0||We<0)return null}else if((ge<0||Me<0||We<0)&&(ge>0||Me>0||We>0))return null;const Pe=ge+Me+We;if(Pe===0)return null;const je=te*(ge*U+Me*G+We*ne);return(Pe>0?je<0:je>0)?null:this.at(je/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt extends $i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fo=new rt,$n=new Pl,fs=new Zi,po=new F,ps=new F,ms=new F,gs=new F,vr=new F,_s=new F,mo=new F,xs=new F;class ye extends Ct{constructor(e=new jt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){_s.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],g=r[c];h!==0&&(vr.fromBufferAttribute(g,e),a?_s.addScaledVector(vr,h):_s.addScaledVector(vr.sub(t),h))}t.add(_s)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(r),$n.copy(e.ray).recast(e.near),!(fs.containsPoint($n.origin)===!1&&($n.intersectSphere(fs,po)===null||$n.origin.distanceToSquared(po)>(e.far-e.near)**2))&&(fo.copy(r).invert(),$n.copy(e.ray).applyMatrix4(fo),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,g=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){const f=u[_],d=a[f.materialIndex],M=Math.max(f.start,m.start),A=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let E=M,b=A;E<b;E+=3){const T=o.getX(E),p=o.getX(E+1),S=o.getX(E+2);s=vs(this,d,e,n,l,h,g,T,p,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let f=_,d=y;f<d;f+=3){const M=o.getX(f),A=o.getX(f+1),E=o.getX(f+2);s=vs(this,a,e,n,l,h,g,M,A,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){const f=u[_],d=a[f.materialIndex],M=Math.max(f.start,m.start),A=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let E=M,b=A;E<b;E+=3){const T=E,p=E+1,S=E+2;s=vs(this,d,e,n,l,h,g,T,p,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let f=_,d=y;f<d;f+=3){const M=f,A=f+1,E=f+2;s=vs(this,a,e,n,l,h,g,M,A,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function _h(i,e,t,n,s,r,a,o){let c;if(e.side===Ht?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ei,o),c===null)return null;xs.copy(o),xs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(xs);return l<t.near||l>t.far?null:{distance:l,point:xs.clone(),object:i}}function vs(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ps),i.getVertexPosition(c,ms),i.getVertexPosition(l,gs);const h=_h(i,e,t,n,ps,ms,gs,mo);if(h){const g=new F;on.getBarycoord(mo,ps,ms,gs,g),s&&(h.uv=on.getInterpolatedAttribute(s,o,c,l,g,new Ge)),r&&(h.uv1=on.getInterpolatedAttribute(r,o,c,l,g,new Ge)),a&&(h.normal=on.getInterpolatedAttribute(a,o,c,l,g,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new F,materialIndex:0};on.getNormal(ps,ms,gs,u.normal),h.face=u,h.barycoord=g}return h}class Ll extends Ft{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Lt,h=Lt,g,u){super(null,a,o,c,l,h,s,r,g,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class go extends Hn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mi=new rt,_o=new rt,Ms=[],xo=new si,xh=new rt,Ii=new ye,Ni=new Zi;class Dl extends ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new go(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),xo.copy(e.boundingBox).applyMatrix4(mi),this.boundingBox.union(xo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),Ni.copy(e.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(Ni)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ii.geometry=this.geometry,Ii.material=this.material,Ii.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ni.copy(this.boundingSphere),Ni.applyMatrix4(n),e.ray.intersectsSphere(Ni)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mi),_o.multiplyMatrices(n,mi),Ii.matrixWorld=_o,Ii.raycast(e,Ms);for(let a=0,o=Ms.length;a<o;a++){const c=Ms[a];c.instanceId=r,c.object=this,t.push(c)}Ms.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new go(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ll(new Float32Array(s*this.count),s,this.count,Ma,ln));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Jn=new Zi,vh=new Ge(.5,.5),Ss=new F;class Yi{constructor(e=new An,t=new An,n=new An,s=new An,r=new An,a=new An){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],g=r[5],u=r[6],m=r[7],_=r[8],y=r[9],f=r[10],d=r[11],M=r[12],A=r[13],E=r[14],b=r[15];if(s[0].setComponents(l-a,m-h,d-_,b-M).normalize(),s[1].setComponents(l+a,m+h,d+_,b+M).normalize(),s[2].setComponents(l+o,m+g,d+y,b+A).normalize(),s[3].setComponents(l-o,m-g,d-y,b-A).normalize(),n)s[4].setComponents(c,u,f,E).normalize(),s[5].setComponents(l-c,m-u,d-f,b-E).normalize();else if(s[4].setComponents(l-c,m-u,d-f,b-E).normalize(),t===cn)s[5].setComponents(l+c,m+u,d+f,b+E).normalize();else if(t===qi)s[5].setComponents(c,u,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){Jn.center.set(0,0,0);const t=vh.distanceTo(e.center);return Jn.radius=.7071067811865476+t,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ss.x=s.normal.x>0?e.max.x:e.min.x,Ss.y=s.normal.y>0?e.max.y:e.min.y,Ss.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const vo=new rt;class Ra{constructor(){this.coordinateSystem=cn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];vo.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Yi),n[s].setFromProjectionMatrix(vo,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Yi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Ra().copy(this)}}class Il extends Ft{constructor(e=[],t=Si,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mh extends Ft{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yi extends Ft{constructor(e,t,n=vn,s,r,a,o=Lt,c=Lt,l,h=Vn,g=1){if(h!==Vn&&h!==Gn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:g};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ba(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Nl extends yi{constructor(e,t=vn,n=Si,s,r,a=Lt,o=Lt,c,l=Vn){const h={width:e,height:e,depth:1},g=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ul extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xe extends jt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],g=[];let u=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(g,2));function _(y,f,d,M,A,E,b,T,p,S,D){const C=E/p,I=b/S,U=E/2,X=b/2,L=T/2,G=p+1,$=S+1;let k=0,ne=0;const Y=new F;for(let j=0;j<$;j++){const te=j*I-X;for(let q=0;q<G;q++){const me=q*C-U;Y[y]=me*M,Y[f]=te*A,Y[d]=L,l.push(Y.x,Y.y,Y.z),Y[y]=0,Y[f]=0,Y[d]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),g.push(q/p),g.push(1-j/S),k+=1}}for(let j=0;j<S;j++)for(let te=0;te<p;te++){const q=u+te+G*j,me=u+te+G*(j+1),V=u+(te+1)+G*(j+1),fe=u+(te+1)+G*j;c.push(q,me,fe),c.push(me,V,fe),ne+=6}o.addGroup(m,ne,D),m+=ne,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jn extends jt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new F,h=new Ge;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let g=0,u=3;g<=t;g++,u+=3){const m=n+g/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let g=1;g<=t;g++)r.push(g,g+1,0);this.setIndex(r),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(o,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yt extends jt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],g=[],u=[],m=[];let _=0;const y=[],f=n/2;let d=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(m,2));function M(){const E=new F,b=new F;let T=0;const p=(t-e)/n;for(let S=0;S<=r;S++){const D=[],C=S/r,I=C*(t-e)+e;for(let U=0;U<=s;U++){const X=U/s,L=X*c+o,G=Math.sin(L),$=Math.cos(L);b.x=I*G,b.y=-C*n+f,b.z=I*$,g.push(b.x,b.y,b.z),E.set(G,p,$).normalize(),u.push(E.x,E.y,E.z),m.push(X,1-C),D.push(_++)}y.push(D)}for(let S=0;S<s;S++)for(let D=0;D<r;D++){const C=y[D][S],I=y[D+1][S],U=y[D+1][S+1],X=y[D][S+1];(e>0||D!==0)&&(h.push(C,I,X),T+=3),(t>0||D!==r-1)&&(h.push(I,U,X),T+=3)}l.addGroup(d,T,0),d+=T}function A(E){const b=_,T=new Ge,p=new F;let S=0;const D=E===!0?e:t,C=E===!0?1:-1;for(let U=1;U<=s;U++)g.push(0,f*C,0),u.push(0,C,0),m.push(.5,.5),_++;const I=_;for(let U=0;U<=s;U++){const L=U/s*c+o,G=Math.cos(L),$=Math.sin(L);p.x=D*$,p.y=f*C,p.z=D*G,g.push(p.x,p.y,p.z),u.push(0,C,0),T.x=G*.5+.5,T.y=$*.5*C+.5,m.push(T.x,T.y),_++}for(let U=0;U<s;U++){const X=b+U,L=I+U;E===!0?h.push(L,L+1,X):h.push(L+1,L,X),S+=3}l.addGroup(d,S,E===!0?1:2),d+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ji extends Yt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ji(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ca extends jt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const A=new F,E=new F,b=new F;for(let T=0;T<t.length;T+=3)m(t[T+0],A),m(t[T+1],E),m(t[T+2],b),c(A,E,b,M)}function c(M,A,E,b){const T=b+1,p=[];for(let S=0;S<=T;S++){p[S]=[];const D=M.clone().lerp(E,S/T),C=A.clone().lerp(E,S/T),I=T-S;for(let U=0;U<=I;U++)U===0&&S===T?p[S][U]=D:p[S][U]=D.clone().lerp(C,U/I)}for(let S=0;S<T;S++)for(let D=0;D<2*(T-S)-1;D++){const C=Math.floor(D/2);D%2===0?(u(p[S][C+1]),u(p[S+1][C]),u(p[S][C])):(u(p[S][C+1]),u(p[S+1][C+1]),u(p[S+1][C]))}}function l(M){const A=new F;for(let E=0;E<r.length;E+=3)A.x=r[E+0],A.y=r[E+1],A.z=r[E+2],A.normalize().multiplyScalar(M),r[E+0]=A.x,r[E+1]=A.y,r[E+2]=A.z}function h(){const M=new F;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];const E=f(M)/2/Math.PI+.5,b=d(M)/Math.PI+.5;a.push(E,1-b)}_(),g()}function g(){for(let M=0;M<a.length;M+=6){const A=a[M+0],E=a[M+2],b=a[M+4],T=Math.max(A,E,b),p=Math.min(A,E,b);T>.9&&p<.1&&(A<.2&&(a[M+0]+=1),E<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function m(M,A){const E=M*3;A.x=e[E+0],A.y=e[E+1],A.z=e[E+2]}function _(){const M=new F,A=new F,E=new F,b=new F,T=new Ge,p=new Ge,S=new Ge;for(let D=0,C=0;D<r.length;D+=9,C+=6){M.set(r[D+0],r[D+1],r[D+2]),A.set(r[D+3],r[D+4],r[D+5]),E.set(r[D+6],r[D+7],r[D+8]),T.set(a[C+0],a[C+1]),p.set(a[C+2],a[C+3]),S.set(a[C+4],a[C+5]),b.copy(M).add(A).add(E).divideScalar(3);const I=f(b);y(T,C+0,M,I),y(p,C+2,A,I),y(S,C+4,E,I)}}function y(M,A,E,b){b<0&&M.x===1&&(a[A]=M.x-1),E.x===0&&E.z===0&&(a[A]=b/2/Math.PI+.5)}function f(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.vertices,e.indices,e.radius,e.detail)}}class zs extends Ca{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zs(e.radius,e.detail)}}class Qi extends jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,g=e/o,u=t/c,m=[],_=[],y=[],f=[];for(let d=0;d<h;d++){const M=d*u-a;for(let A=0;A<l;A++){const E=A*g-r;_.push(E,-M,0),y.push(0,0,1),f.push(A/o),f.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<o;M++){const A=M+l*d,E=M+l*(d+1),b=M+1+l*(d+1),T=M+1+l*d;m.push(A,E,T),m.push(E,b,T)}this.setIndex(m),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.widthSegments,e.heightSegments)}}class wi extends jt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],g=new F,u=new F,m=[],_=[],y=[],f=[];for(let d=0;d<=n;d++){const M=[],A=d/n,E=a+A*o,b=e*Math.cos(E),T=Math.sqrt(e*e-b*b);let p=0;d===0&&a===0?p=.5/t:d===n&&c===Math.PI&&(p=-.5/t);for(let S=0;S<=t;S++){const D=S/t,C=s+D*r;g.x=-T*Math.cos(C),g.y=b,g.z=T*Math.sin(C),_.push(g.x,g.y,g.z),u.copy(g).normalize(),y.push(u.x,u.y,u.z),f.push(D+p,1-A),M.push(l++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){const A=h[d][M+1],E=h[d][M],b=h[d+1][M],T=h[d+1][M+1];(d!==0||a>0)&&m.push(A,E,T),(d!==n-1||c<Math.PI)&&m.push(E,b,T)}this.setIndex(m),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ji extends jt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],h=[],g=[],u=new F,m=new F,_=new F;for(let y=0;y<=n;y++){const f=a+y/n*o;for(let d=0;d<=s;d++){const M=d/s*r;m.x=(e+t*Math.cos(f))*Math.cos(M),m.y=(e+t*Math.cos(f))*Math.sin(M),m.z=t*Math.sin(f),l.push(m.x,m.y,m.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),_.subVectors(m,u).normalize(),h.push(_.x,_.y,_.z),g.push(d/s),g.push(y/n)}}for(let y=1;y<=n;y++)for(let f=1;f<=s;f++){const d=(s+1)*y+f-1,M=(s+1)*(y-1)+f-1,A=(s+1)*(y-1)+f,E=(s+1)*y+f;c.push(d,M,E),c.push(M,A,E)}this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ti(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Mo(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Mo(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=Ti(i[t]);for(const s in n)e[s]=n[s]}return e}function Mo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Sh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Eh={clone:Ti,merge:Bt};var yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Th=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends $i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yh,this.fragmentShader=Th,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=Sh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new rt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class bh extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class St extends $i{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=ga,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wh extends $i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ah extends $i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Pa extends Ct{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Rh extends Pa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Mr=new rt,So=new F,Eo=new F;class Ol{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yi,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;So.setFromMatrixPosition(e.matrixWorld),t.position.copy(So),Eo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Mr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Mr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===qi||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Mr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Es=new F,ys=new bi,un=new F;class Bl extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Es,ys,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Es,ys,un.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Es,ys,un),un.x===1&&un.y===1&&un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Es,ys,un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new F,yo=new Ge,To=new Ge;class an extends Bl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,yo,To),t.subVectors(To,yo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ch extends Ol{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}}class zl extends Pa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ch}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class La extends Bl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ph extends Ol{constructor(){super(new La(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lh extends Pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Ph}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const gi=-90,_i=1;class ua extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(gi,_i,e,t);s.layers=this.layers,this.add(s);const r=new an(gi,_i,e,t);r.layers=this.layers,this.add(r);const a=new an(gi,_i,e,t);a.layers=this.layers,this.add(a);const o=new an(gi,_i,e,t);o.layers=this.layers,this.add(o);const c=new an(gi,_i,e,t);c.layers=this.layers,this.add(c);const l=new an(gi,_i,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,g=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(g,u,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Dh extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const bo=new rt;class Ih{constructor(e,t,n=0,s=1/0){this.ray=new Pl(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bo),this}intersectObject(e,t=!0,n=[]){return da(e,this,n,t),n.sort(wo),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)da(e[s],this,n,t);return n.sort(wo),n}}function wo(i,e){return i.distance-e.distance}function da(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)da(r[a],e,t,!0)}}function Ao(i,e,t,n){const s=Nh(n);switch(t){case Ml:return i*e;case Ma:return i*e/s.components*s.byteLength;case Sa:return i*e/s.components*s.byteLength;case ti:return i*e*2/s.components*s.byteLength;case Ea:return i*e*2/s.components*s.byteLength;case Sl:return i*e*3/s.components*s.byteLength;case _n:return i*e*4/s.components*s.byteLength;case ya:return i*e*4/s.components*s.byteLength;case Rs:case Cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nr:case Fr:return Math.max(i,16)*Math.max(e,8)/4;case Ir:case Ur:return Math.max(i,8)*Math.max(e,8)/2;case Or:case Br:case kr:case Gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zr:case Ns:case Hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case qr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Kr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $r:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ta:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case na:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ia:case sa:case ra:return Math.ceil(i/4)*Math.ceil(e/4)*16;case aa:case oa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Us:case la:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nh(i){switch(i){case qt:case gl:return{byteLength:1,components:1};case Xi:case _l:case Mn:return{byteLength:2,components:1};case xa:case va:return{byteLength:2,components:4};case vn:case _a:case ln:return{byteLength:4,components:1};case xl:case vl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kl(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Uh(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,g=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,c,l){const h=c.array,g=c.updateRanges;if(i.bindBuffer(l,o),g.length===0)i.bufferSubData(l,0,h);else{g.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<g.length;m++){const _=g[u],y=g[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,g[u]=y)}g.length=u+1;for(let m=0,_=g.length;m<_;m++){const y=g[m];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oh=`#ifdef USE_ALPHAHASH
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
#endif`,Bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hh=`#ifdef USE_AOMAP
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
#endif`,Vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wh=`#ifdef USE_BATCHING
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
#endif`,Xh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zh=`#ifdef USE_IRIDESCENCE
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
#endif`,$h=`#ifdef USE_BUMPMAP
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
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,su=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ru=`#define PI 3.141592653589793
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
} // validated`,au=`vec3 transformedNormal = objectNormal;
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
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",du=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fu=`#ifdef USE_ENVMAP
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
#endif`,pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
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
#endif`,gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_u=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Su=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eu=`#ifdef USE_GRADIENTMAP
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
}`,yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wu=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Au=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
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
				#ifdef ENVMAP_TYPE_PMREM
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
#endif`,Ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Du=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
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
#endif`,Iu=`uniform sampler2D dfgLUT;
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,Nu=`
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
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
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ou=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,Bu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ku=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xu=`#if defined( USE_POINTS_UV )
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
#endif`,qu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ku=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zu=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ju=`#ifdef USE_MORPHTARGETS
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
#endif`,Qu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sd=`#ifdef USE_NORMALMAP
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
#endif`,rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ld=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Md=`float getShadowMask() {
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
}`,Sd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Td=`#ifdef USE_SKINNING
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
#endif`,bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ad=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cd=`#ifdef USE_TRANSMISSION
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
#endif`,Pd=`#ifdef USE_TRANSMISSION
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
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ud=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fd=`uniform sampler2D t2D;
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
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`#include <common>
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
}`,Hd=`#if DEPTH_PACKING == 3200
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
}`,Vd=`#define DISTANCE
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
}`,Wd=`#define DISTANCE
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`uniform float scale;
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
}`,Kd=`uniform vec3 diffuse;
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
}`,Zd=`#include <common>
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
}`,$d=`uniform vec3 diffuse;
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
}`,Jd=`#define LAMBERT
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
}`,Qd=`#define LAMBERT
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
}`,jd=`#define MATCAP
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
}`,ef=`#define MATCAP
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
}`,tf=`#define NORMAL
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
}`,nf=`#define NORMAL
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
}`,sf=`#define PHONG
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
}`,rf=`#define PHONG
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
}`,af=`#define STANDARD
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
}`,of=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
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
}`,lf=`#define TOON
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
}`,cf=`#define TOON
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
}`,hf=`uniform float size;
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
}`,uf=`uniform vec3 diffuse;
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
}`,df=`#include <common>
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
}`,ff=`uniform vec3 color;
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
}`,pf=`uniform float rotation;
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
}`,mf=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Fh,alphahash_pars_fragment:Oh,alphamap_fragment:Bh,alphamap_pars_fragment:zh,alphatest_fragment:kh,alphatest_pars_fragment:Gh,aomap_fragment:Hh,aomap_pars_fragment:Vh,batching_pars_vertex:Wh,batching_vertex:Xh,begin_vertex:qh,beginnormal_vertex:Yh,bsdfs:Kh,iridescence_fragment:Zh,bumpmap_pars_fragment:$h,clipping_planes_fragment:Jh,clipping_planes_pars_fragment:Qh,clipping_planes_pars_vertex:jh,clipping_planes_vertex:eu,color_fragment:tu,color_pars_fragment:nu,color_pars_vertex:iu,color_vertex:su,common:ru,defaultnormal_vertex:au,displacementmap_pars_vertex:ou,displacementmap_vertex:lu,emissivemap_fragment:cu,emissivemap_pars_fragment:hu,colorspace_fragment:uu,colorspace_pars_fragment:du,envmap_fragment:fu,envmap_common_pars_fragment:pu,envmap_pars_fragment:mu,envmap_pars_vertex:gu,envmap_physical_pars_fragment:Au,envmap_vertex:_u,fog_vertex:xu,fog_pars_vertex:vu,fog_fragment:Mu,fog_pars_fragment:Su,gradientmap_pars_fragment:Eu,lightmap_pars_fragment:yu,lights_lambert_fragment:Tu,lights_lambert_pars_fragment:bu,lights_pars_begin:wu,lights_toon_fragment:Ru,lights_toon_pars_fragment:Cu,lights_phong_fragment:Pu,lights_phong_pars_fragment:Lu,lights_physical_fragment:Du,lights_physical_pars_fragment:Iu,lights_fragment_begin:Nu,lights_fragment_maps:Uu,lights_fragment_end:Fu,lightprobes_pars_fragment:Ou,logdepthbuf_fragment:Bu,logdepthbuf_pars_fragment:zu,logdepthbuf_pars_vertex:ku,logdepthbuf_vertex:Gu,map_fragment:Hu,map_pars_fragment:Vu,map_particle_fragment:Wu,map_particle_pars_fragment:Xu,metalnessmap_fragment:qu,metalnessmap_pars_fragment:Yu,morphinstance_vertex:Ku,morphcolor_vertex:Zu,morphnormal_vertex:$u,morphtarget_pars_vertex:Ju,morphtarget_vertex:Qu,normal_fragment_begin:ju,normal_fragment_maps:ed,normal_pars_fragment:td,normal_pars_vertex:nd,normal_vertex:id,normalmap_pars_fragment:sd,clearcoat_normal_fragment_begin:rd,clearcoat_normal_fragment_maps:ad,clearcoat_pars_fragment:od,iridescence_pars_fragment:ld,opaque_fragment:cd,packing:hd,premultiplied_alpha_fragment:ud,project_vertex:dd,dithering_fragment:fd,dithering_pars_fragment:pd,roughnessmap_fragment:md,roughnessmap_pars_fragment:gd,shadowmap_pars_fragment:_d,shadowmap_pars_vertex:xd,shadowmap_vertex:vd,shadowmask_pars_fragment:Md,skinbase_vertex:Sd,skinning_pars_vertex:Ed,skinning_vertex:yd,skinnormal_vertex:Td,specularmap_fragment:bd,specularmap_pars_fragment:wd,tonemapping_fragment:Ad,tonemapping_pars_fragment:Rd,transmission_fragment:Cd,transmission_pars_fragment:Pd,uv_pars_fragment:Ld,uv_pars_vertex:Dd,uv_vertex:Id,worldpos_vertex:Nd,background_vert:Ud,background_frag:Fd,backgroundCube_vert:Od,backgroundCube_frag:Bd,cube_vert:zd,cube_frag:kd,depth_vert:Gd,depth_frag:Hd,distance_vert:Vd,distance_frag:Wd,equirect_vert:Xd,equirect_frag:qd,linedashed_vert:Yd,linedashed_frag:Kd,meshbasic_vert:Zd,meshbasic_frag:$d,meshlambert_vert:Jd,meshlambert_frag:Qd,meshmatcap_vert:jd,meshmatcap_frag:ef,meshnormal_vert:tf,meshnormal_frag:nf,meshphong_vert:sf,meshphong_frag:rf,meshphysical_vert:af,meshphysical_frag:of,meshtoon_vert:lf,meshtoon_frag:cf,points_vert:hf,points_frag:uf,shadow_vert:df,shadow_frag:ff,sprite_vert:pf,sprite_frag:mf},xe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},mn={basic:{uniforms:Bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Bt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Bt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Bt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new He(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Bt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Bt([xe.points,xe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Bt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Bt([xe.common,xe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Bt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Bt([xe.sprite,xe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Bt([xe.common,xe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Bt([xe.lights,xe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};mn.physical={uniforms:Bt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ts={r:0,b:0,g:0},gf=new rt,Gl=new Ue;Gl.set(-1,0,0,0,1,0,0,0,1);function _f(i,e,t,n,s,r){const a=new He(0);let o=s===!0?0:1,c,l,h=null,g=0,u=null;function m(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const E=M.backgroundBlurriness>0;A=e.get(A,E)}return A}function _(M){let A=!1;const E=m(M);E===null?f(a,o):E&&E.isColor&&(f(E,1),A=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,A){const E=m(A);E&&E.isCubeTexture?(l===void 0&&(l=new ye(new Xe(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Ti(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,T,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(gf.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Gl),l.material.toneMapped=Ze.getTransfer(E.colorSpace)!==nt,(h!==E||g!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,g=E.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ye(new Qi(2,2),new ni({name:"BackgroundMaterial",uniforms:Ti(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(E.colorSpace)!==nt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||g!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,g=E.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,A){M.getRGB(Ts,Fl(i)),t.buffers.color.setClear(Ts.r,Ts.g,Ts.b,A,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,f(a,o)},render:_,addToRenderList:y,dispose:d}}function xf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(I,U,X,L,G){let $=!1;const k=g(I,L,X,U);r!==k&&(r=k,l(r.object)),$=m(I,L,X,G),$&&_(I,L,X,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,E(I,U,X,L),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function g(I,U,X,L){const G=L.wireframe===!0;let $=n[U.id];$===void 0&&($={},n[U.id]=$);const k=I.isInstancedMesh===!0?I.id:0;let ne=$[k];ne===void 0&&(ne={},$[k]=ne);let Y=ne[X.id];Y===void 0&&(Y={},ne[X.id]=Y);let j=Y[G];return j===void 0&&(j=u(c()),Y[G]=j),j}function u(I){const U=[],X=[],L=[];for(let G=0;G<t;G++)U[G]=0,X[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:L,object:I,attributes:{},index:null}}function m(I,U,X,L){const G=r.attributes,$=U.attributes;let k=0;const ne=X.getAttributes();for(const Y in ne)if(ne[Y].location>=0){const te=G[Y];let q=$[Y];if(q===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),te===void 0||te.attribute!==q||q&&te.data!==q.data)return!0;k++}return r.attributesNum!==k||r.index!==L}function _(I,U,X,L){const G={},$=U.attributes;let k=0;const ne=X.getAttributes();for(const Y in ne)if(ne[Y].location>=0){let te=$[Y];te===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(te=I.instanceColor));const q={};q.attribute=te,te&&te.data&&(q.data=te.data),G[Y]=q,k++}r.attributes=G,r.attributesNum=k,r.index=L}function y(){const I=r.newAttributes;for(let U=0,X=I.length;U<X;U++)I[U]=0}function f(I){d(I,0)}function d(I,U){const X=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;X[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),G[I]!==U&&(i.vertexAttribDivisor(I,U),G[I]=U)}function M(){const I=r.newAttributes,U=r.enabledAttributes;for(let X=0,L=U.length;X<L;X++)U[X]!==I[X]&&(i.disableVertexAttribArray(X),U[X]=0)}function A(I,U,X,L,G,$,k){k===!0?i.vertexAttribIPointer(I,U,X,G,$):i.vertexAttribPointer(I,U,X,L,G,$)}function E(I,U,X,L){y();const G=L.attributes,$=X.getAttributes(),k=U.defaultAttributeValues;for(const ne in $){const Y=$[ne];if(Y.location>=0){let j=G[ne];if(j===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){const te=j.normalized,q=j.itemSize,me=e.get(j);if(me===void 0)continue;const V=me.buffer,fe=me.type,Se=me.bytesPerElement,Re=fe===i.INT||fe===i.UNSIGNED_INT||j.gpuType===_a;if(j.isInterleavedBufferAttribute){const ge=j.data,Me=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,We=j.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Pe=0;Pe<Y.locationSize;Pe++)d(Y.location+Pe,ge.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Pe=0;Pe<Y.locationSize;Pe++)f(Y.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,V);for(let Pe=0;Pe<Y.locationSize;Pe++)A(Y.location+Pe,q/Y.locationSize,fe,te,Me*Se,(We+q/Y.locationSize*Pe)*Se,Re)}else{if(j.isInstancedBufferAttribute){for(let ge=0;ge<Y.locationSize;ge++)d(Y.location+ge,j.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<Y.locationSize;ge++)f(Y.location+ge);i.bindBuffer(i.ARRAY_BUFFER,V);for(let ge=0;ge<Y.locationSize;ge++)A(Y.location+ge,q/Y.locationSize,fe,te,q*Se,q/Y.locationSize*ge*Se,Re)}}else if(k!==void 0){const te=k[ne];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(Y.location,te);break;case 3:i.vertexAttrib3fv(Y.location,te);break;case 4:i.vertexAttrib4fv(Y.location,te);break;default:i.vertexAttrib1fv(Y.location,te)}}}}M()}function b(){D();for(const I in n){const U=n[I];for(const X in U){const L=U[X];for(const G in L){const $=L[G];for(const k in $)h($[k].object),delete $[k];delete L[G]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;const U=n[I.id];for(const X in U){const L=U[X];for(const G in L){const $=L[G];for(const k in $)h($[k].object),delete $[k];delete L[G]}}delete n[I.id]}function p(I){for(const U in n){const X=n[U];for(const L in X){const G=X[L];if(G[I.id]===void 0)continue;const $=G[I.id];for(const k in $)h($[k].object),delete $[k];delete G[I.id]}}}function S(I){for(const U in n){const X=n[U],L=I.isInstancedMesh===!0?I.id:0,G=X[L];if(G!==void 0){for(const $ in G){const k=G[$];for(const ne in k)h(k[ne].object),delete k[ne];delete G[$]}delete X[L],Object.keys(X).length===0&&delete n[U]}}}function D(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:p,initAttributes:y,enableAttribute:f,disableUnusedAttributes:M}}function vf(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let m=0;m<h;m++)u+=l[m];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Mf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const p=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(p){return!(p!==_n&&n.convert(p)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(p){const S=p===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(p!==qt&&p!==ln&&!S&&n.convert(p)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(p){if(p==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ie("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&g===!1;t.reversedDepthBuffer===!0&&g===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&g===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:E,maxSamples:b,samples:T}}function Sf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new An,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,u){const m=g.length!==0||u||n!==0||s;return s=u,n=g.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,u){t=h(g,u,0)},this.setState=function(g,u,m){const _=g.clippingPlanes,y=g.clipIntersection,f=g.clipShadows,d=i.get(g);if(!s||_===null||_.length===0||r&&!f)r?h(null):l();else{const M=r?0:n,A=M*4;let E=d.clippingState||null;c.value=E,E=h(_,u,A,m);for(let b=0;b!==A;++b)E[b]=t[b];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(g,u,m,_){const y=g!==null?g.length:0;let f=null;if(y!==0){if(f=c.value,_!==!0||f===null){const d=m+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<d)&&(f=new Float32Array(d));for(let A=0,E=m;A!==y;++A,E+=4)a.copy(g[A]).applyMatrix4(M,o),a.normal.toArray(f,E),f[E+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,f}}class Da extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Il(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xe(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:vi});r.uniforms.tEquirect.value=t;const a=new ye(s,r),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=Gt),new ua(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Ro=256,Ef=3,yf=20,Hl=256,Vl=16,Tf=3,bf=new F,wf=new He;class ks{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ua(1,10,null),this._boxMesh=new ye(new Xe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=bf}=r,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const g=c.autoClear,u=c.autoClearColor,m=c.autoClearDepth,_=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(wf));const f=new ua(n,s,h);return f.position.copy(o),f.update(c,e),c.autoClear=g,c.autoClearColor=u,c.autoClearDepth=m,c.autoClearStencil=_,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ro,Kc(e))}_fromTexture(e,t){e.mapping===Si||e.mapping===Wi?this._setSize(e.image.length===0?Ro:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Co(e,!1,!1),n=Math.log2(e)-Ef;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Co(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Si||e.mapping===Wi?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lo()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Po()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Af(),this._integrationMaterial=Rf());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Vl);for(let a=0;a<=n;a++){const o=ks.lodToRoughness(a,n);if(a>n-Tf)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(Hl*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Cf());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function Co(i,e,t){return new Da(i,{minFilter:kn,generateMipmaps:e,type:Mn,colorSpace:Fs,depthBuffer:t})}function es(i,e,t){return new ni({name:i,uniforms:e,vertexShader:ke.cube_vert,fragmentShader:t,side:Ht,blending:vi,depthTest:!1,depthWrite:!1})}function Af(){return es("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hl}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Rf(){return es("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vl}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Cf(){return es("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${yf}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

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

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Po(){return es("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Lo(){return es("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Pf(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){const m=u.mapping;if(m===Ks||m===Zs)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const y=new Da(_.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const m=u.mapping,_=m===Ks||m===Zs,y=m===Si||m===Wi;if(_||y){let f=t.get(u);const d=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new ks(i)),f=_?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),f.texture;if(f!==void 0)return f.texture;{const M=u.image;return _&&M&&M.height>0||y&&M&&c(M)?(n===null&&(n=new ks(i)),f=_?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,m){return m===Ks?u.mapping=Si:m===Zs&&(u.mapping=Wi),u}function c(u){let m=0;const _=6;for(let y=0;y<_;y++)u[y]!==void 0&&m++;return m===_}function l(u){const m=u.target;m.removeEventListener("dispose",l);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function h(u){const m=u.target;m.removeEventListener("dispose",h);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function Lf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ds("WebGLRenderer: "+n+" extension not supported."),s}}}function Df(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(const f in _.attributes)e.remove(_.attributes[f]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);const y=r.get(_);y&&(e.remove(y),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(_){const y=_.attributes;for(const f in y)e.update(y[f],i.ARRAY_BUFFER)}function g(_){const y=_.index,f=_.attributes.position;let d=0;if(f===void 0)return;const M=y!==null?y.array.length:f.array.length/3-1,A=f.count>=65535?Cl:Rl,E=new A(Math.ceil(M/3)*6,1),b=E.array;if(y!==null){const p=y.array;d=y.version;for(let S=0,D=0;S<M;S+=3){const C=p[S+0],I=p[S+1],U=p[S+2];b[D++]=C,b[D++]=I,b[D++]=I,b[D++]=U,b[D++]=U,b[D++]=C}}else{d=f.version;for(let p=0,S=0;p<M;p+=3){const D=p+0,C=p+1,I=p+2;b[S++]=D,b[S++]=C,b[S++]=C,b[S++]=I,b[S++]=I,b[S++]=D}}E.version=d;const T=r.get(_);T&&e.remove(T),r.set(_,E)}function u(_){const y=r.get(_);if(y){const f=_.index;f!==null&&y.version<f.version&&g(_)}else g(_);return r.get(_)}function m(){for(const _ in s){const y=s[_].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:u,dispose:m}}function If(i,e,t){let n;function s(g){n=g}let r,a;function o(g){r=g.type,a=g.bytesPerElement}function c(g,u){i.drawElements(n,u,r,g*a),t.update(u,n,1)}function l(g,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,g*a,m),t.update(u,n,m))}function h(g,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,g,0,m);let y=0;for(let f=0;f<m;f++)y+=u[f];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Nf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Uf(i,e,t){const n=new WeakMap,s=new mt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==g){let C=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var m=C;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),y===!0&&(E=2),f===!0&&(E=3);let b=o.attributes.position.count*E,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const p=new Float32Array(b*T*4*g),S=new wl(p,b,T,g);S.type=ln,S.needsUpdate=!0;const D=E*4;for(let I=0;I<g;I++){const U=d[I],X=M[I],L=A[I],G=b*T*4*I;for(let $=0;$<U.count;$++){const k=$*D;_===!0&&(s.fromBufferAttribute(U,$),p[G+k+0]=s.x,p[G+k+1]=s.y,p[G+k+2]=s.z,p[G+k+3]=0),y===!0&&(s.fromBufferAttribute(X,$),p[G+k+4]=s.x,p[G+k+5]=s.y,p[G+k+6]=s.z,p[G+k+7]=0),f===!0&&(s.fromBufferAttribute(L,$),p[G+k+8]=s.x,p[G+k+9]=s.y,p[G+k+10]=s.z,p[G+k+11]=L.itemSize===4?s.w:1)}}u={count:g,texture:S,size:new Ge(b,T)},n.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let f=0;f<l.length;f++)_+=l[f];const y=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Ff(i,e,t,n,s){let r=new WeakMap;function a(l){const h=s.render.frame,g=l.geometry,u=e.get(l,g);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Of={[ll]:"LINEAR_TONE_MAPPING",[cl]:"REINHARD_TONE_MAPPING",[hl]:"CINEON_TONE_MAPPING",[ul]:"ACES_FILMIC_TONE_MAPPING",[fl]:"AGX_TONE_MAPPING",[pl]:"NEUTRAL_TONE_MAPPING",[dl]:"CUSTOM_TONE_MAPPING"};function Bf(i,e,t,n,s,r){const a=new xn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const h=new jt;h.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ut([0,2,0,0,2,0],2));const g=new bh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ye(h,g),m=new La(-1,1,1,-1,0,1);let _=null,y=null,f=!1,d,M=null,A=[],E=!1;this.setSize=function(b,T){a.setSize(b,T),o!==null&&o.setSize(b,T),c!==null&&c.setSize(b,T);for(let p=0;p<A.length;p++){const S=A[p];S.setSize&&S.setSize(b,T)}},this.setEffects=function(b){A=b,E=A.length>0&&A[0].isRenderPass===!0;const T=a.width,p=a.height;A.length>0&&o===null&&(o=new xn(T,p,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),c=new xn(T,p,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));const S=s===!0&&A.some(D=>D.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new yi(T,p),r===!0&&(l.format=Gn,l.type=Ei)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let D=0;D<A.length;D++){const C=A[D];C.setSize&&C.setSize(T,p),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(b,T){if(f||b.toneMapping===Pn&&A.length===0)return!1;if(M=T,T!==null){const p=T.width,S=T.height;(a.width!==p||a.height!==S)&&this.setSize(p,S)}return E===!1&&b.setRenderTarget(a),d=b.toneMapping,b.toneMapping=Pn,!0},this.hasRenderPass=function(){return E},this.end=function(b,T){b.toneMapping=d,f=!0;let p=a,S=o;for(let D=0;D<A.length;D++){const C=A[D];C.enabled!==!1&&(C.render(b,S,p,T),C.needsSwap!==!1&&(p=S,S=S===o?c:o))}if(_!==b.outputColorSpace||y!==b.toneMapping){_=b.outputColorSpace,y=b.toneMapping,g.defines={},Ze.getTransfer(_)===nt&&(g.defines.SRGB_TRANSFER="");const D=Of[y];D&&(g.defines[D]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=p.texture,b.setRenderTarget(M),b.render(u,m),M=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),g.dispose()}}const Wl=new Ft,Xl=new yi(1,1),ql=new Nl(1),Yl=new wl,Kl=new nh,Zl=new Il,Do=[],Io=[],No=new Float32Array(16),Uo=new Float32Array(9),Fo=new Float32Array(4);function Ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Do[s];if(r===void 0&&(r=new Float32Array(s),Do[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ws(i,e){let t=Io[e];t===void 0&&(t=new Int32Array(e),Io[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function Gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function Hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function Vf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,n))return;Fo.set(n),i.uniformMatrix2fv(this.addr,!1,Fo),yt(t,n)}}function Wf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,n))return;Uo.set(n),i.uniformMatrix3fv(this.addr,!1,Uo),yt(t,n)}}function Xf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,n))return;No.set(n),i.uniformMatrix4fv(this.addr,!1,No),yt(t,n)}}function qf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function Kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function Zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function $f(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function Qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function Xs(i){return i.version===0&&(i.compareFunction=Tl,i.needsUpdate=!0),i}function ep(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Xs(Xl):r=Wl,t.setTexture2D(e||r,s)}function tp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Kl,s)}function np(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Xs(ql):r=Zl,t.setTextureCube(e||r,s)}function ip(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yl,s)}function sp(i){switch(i){case 5126:return zf;case 35664:return kf;case 35665:return Gf;case 35666:return Hf;case 35674:return Vf;case 35675:return Wf;case 35676:return Xf;case 5124:case 35670:return qf;case 35667:case 35671:return Yf;case 35668:case 35672:return Kf;case 35669:case 35673:return Zf;case 5125:return $f;case 36294:return Jf;case 36295:return Qf;case 36296:return jf;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}function rp(i,e){i.uniform1fv(this.addr,e)}function ap(i,e){const t=Ai(e,this.size,2);i.uniform2fv(this.addr,t)}function op(i,e){const t=Ai(e,this.size,3);i.uniform3fv(this.addr,t)}function lp(i,e){const t=Ai(e,this.size,4);i.uniform4fv(this.addr,t)}function cp(i,e){const t=Ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hp(i,e){const t=Ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function up(i,e){const t=Ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dp(i,e){i.uniform1iv(this.addr,e)}function fp(i,e){i.uniform2iv(this.addr,e)}function pp(i,e){i.uniform3iv(this.addr,e)}function mp(i,e){i.uniform4iv(this.addr,e)}function gp(i,e){i.uniform1uiv(this.addr,e)}function _p(i,e){i.uniform2uiv(this.addr,e)}function xp(i,e){i.uniform3uiv(this.addr,e)}function vp(i,e){i.uniform4uiv(this.addr,e)}function Mp(i,e,t){const n=this.cache,s=e.length,r=Ws(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Xs(Xl):a=Wl;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Sp(i,e,t){const n=this.cache,s=e.length,r=Ws(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Kl,r[a])}function Ep(i,e,t){const n=this.cache,s=e.length,r=Ws(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Xs(ql):a=Zl;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function yp(i,e,t){const n=this.cache,s=e.length,r=Ws(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Yl,r[a])}function Tp(i){switch(i){case 5126:return rp;case 35664:return ap;case 35665:return op;case 35666:return lp;case 35674:return cp;case 35675:return hp;case 35676:return up;case 5124:case 35670:return dp;case 35667:case 35671:return fp;case 35668:case 35672:return pp;case 35669:case 35673:return mp;case 5125:return gp;case 36294:return _p;case 36295:return xp;case 36296:return vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return Sp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return yp}}class bp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sp(t.type)}}class wp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tp(t.type)}}class Ap{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function Oo(i,e){i.seq.push(e),i.map[e.id]=e}function Rp(i,e,t){const n=i.name,s=n.length;for(Sr.lastIndex=0;;){const r=Sr.exec(n),a=Sr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Oo(t,l===void 0?new bp(o,i,e):new wp(o,i,e));break}else{let g=t.map[o];g===void 0&&(g=new Ap(o),Oo(t,g)),t=g}}}class Is{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Rp(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Bo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Cp=37297;let Pp=0;function Lp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const zo=new Ue;function Dp(i){Ze._getMatrix(zo,Ze.workingColorSpace,i);const e=`mat3( ${zo.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case Os:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ko(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Lp(i.getShaderSource(e),o)}else return r}function Ip(i,e){const t=Dp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Np={[ll]:"Linear",[cl]:"Reinhard",[hl]:"Cineon",[ul]:"ACESFilmic",[fl]:"AgX",[pl]:"Neutral",[dl]:"Custom"};function Up(i,e){const t=Np[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bs=new F;function Fp(){Ze.getLuminanceCoefficients(bs);const i=bs.x.toFixed(4),e=bs.y.toFixed(4),t=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Op(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bi).join(`
`)}function Bp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Bi(i){return i!==""}function Go(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ho(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(i){return i.replace(kp,Gp)}function Gp(i,e){const t=ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return fa(t)}const Hp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vo(i){return i.replace(Hp,Vp)}function Vp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wo(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Wp={[ki]:"SHADOWMAP_TYPE_PCF",[Oi]:"SHADOWMAP_TYPE_VSM"};function Xp(i){return Wp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qp={[Wi]:"ENVMAP_MODE_REFRACTION"};function Yp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Kp={[ga]:"ENVMAP_BLENDING_MULTIPLY",[Pc]:"ENVMAP_BLENDING_MIX",[Lc]:"ENVMAP_BLENDING_ADD"};function Zp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Kp[i.combine]||"ENVMAP_BLENDING_NONE"}function $p(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Xp(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Yp(t),g=Zp(t),u=Op(t),m=Bp(r),_=s.createProgram();let y,f,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Bi).join(`
`),y.length>0&&(y+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Bi).join(`
`),f.length>0&&(f+=`
`)):(y=[Wo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),f=[Wo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Up("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Ip("linearToOutputTexel",t.outputColorSpace),Fp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bi).join(`
`)),a=fa(a),a=Go(a,t),a=Ho(a,t),o=fa(o),o=Go(o,t),o=Ho(o,t),a=Vo(a),o=Vo(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,f=["#define varying in",t.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=d+y+a,A=d+f+o,E=Bo(s,s.VERTEX_SHADER,M),b=Bo(s,s.FRAGMENT_SHADER,A);s.attachShader(_,E),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(C){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(E)||"",X=s.getShaderInfoLog(b)||"",L=I.trim(),G=U.trim(),$=X.trim();let k=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,b);else{const Y=ko(s,E,"vertex"),j=ko(s,b,"fragment");Qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+Y+`
`+j)}else L!==""?Ie("WebGLProgram: Program Info Log:",L):(G===""||$==="")&&(ne=!1);ne&&(C.diagnostics={runnable:k,programLog:L,vertexShader:{log:G,prefix:y},fragmentShader:{log:$,prefix:f}})}s.deleteShader(E),s.deleteShader(b),p=new Is(s,_),S=zp(s,_)}let p;this.getUniforms=function(){return p===void 0&&T(this),p};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(_,Cp)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=b,this}let Jp=0;class Qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jp(e),t.set(e,n)),n}}class jp{constructor(e){this.id=Jp++,this.code=e,this.usedTimes=0}}function em(i){return i===ti||i===Ns||i===Us}function tm(i,e,t,n,s,r){const a=new wa,o=new Qp,c=new Set,l=[],h=new Map,g=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(p){return c.add(p),p===0?"uv":`uv${p}`}function _(p,S,D,C,I,U){const X=C.fog,L=I.geometry,G=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?C.environment:null,$=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,k=e.get(p.envMap||G,$),ne=u[p.type];let Y=n.precision;p.precision!==null&&(Y=n.getMaxPrecision(p.precision),Y!==p.precision&&Ie("WebGLProgram.getParameters:",p.precision,"not supported, using",Y,"instead."));const j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,te=j!==void 0?j.length:0;let q=0;L.morphAttributes.position!==void 0&&(q=1),L.morphAttributes.normal!==void 0&&(q=2),L.morphAttributes.color!==void 0&&(q=3);let me,V,fe,Se;if(ne){const _e=mn[ne];me=_e.vertexShader,V=_e.fragmentShader}else{me=p.vertexShader,V=p.fragmentShader;const _e=o.getVertexShaderStage(p),tt=o.getFragmentShaderStage(p);o.update(p,_e,tt),fe=_e.id,Se=tt.id}const Re=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Me=I.isInstancedMesh===!0,We=I.isBatchedMesh===!0,Pe=!!p.map,je=!!p.matcap,it=!!k,Ve=it&&k.isPMREMTexture===!0,gt=!!p.aoMap,dt=!!p.lightMap,kt=!!p.bumpMap&&p.wireframe===!1,ft=!!p.normalMap,hn=!!p.displacementMap,Tt=!!p.emissiveMap,Kt=!!p.metalnessMap,Zt=!!p.roughnessMap,$t=p.anisotropy>0,N=p.clearcoat>0,Jt=p.diffuseRoughness>0,lt=p.dispersion>0,ct=p.retroreflectivity>0,pe=p.iridescence>0,Mt=p.sheen>0,Le=p.transmission>0,Ne=$t&&!!p.anisotropyMap,w=N&&!!p.clearcoatMap,x=N&&!!p.clearcoatNormalMap,B=N&&!!p.clearcoatRoughnessMap,ie=Jt&&!!p.diffuseRoughnessMap,ee=pe&&!!p.iridescenceMap,ae=pe&&!!p.iridescenceThicknessMap,ue=Mt&&!!p.sheenColorMap,Z=Mt&&!!p.sheenRoughnessMap,J=!!p.specularMap,le=!!p.specularColorMap,R=!!p.specularIntensityMap,Q=Le&&!!p.transmissionMap,K=Le&&!!p.thicknessMap,ce=!!p.gradientMap,re=!!p.alphaMap,oe=p.alphaTest>0,Ae=!!p.alphaHash,ze=!!p.extensions;let se=Pn;p.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(se=i.toneMapping);const Ce=Ve?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,Be={shaderID:ne,shaderType:p.type,shaderName:p.name,vertexShader:me,fragmentShader:V,defines:p.defines,customVertexShaderID:fe,customFragmentShaderID:Se,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:Y,batching:We,batchingColor:We&&I._colorsTexture!==null,instancing:Me,instancingColor:Me&&I.instanceColor!==null,instancingMorph:Me&&I.morphTexture!==null,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!p.alphaToCoverage,map:Pe,matcap:je,envMap:it,envMapMode:it&&k.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?Ce.length-1:null,envMapSize:Ve?Ce[0].width:null,aoMap:gt,lightMap:dt,bumpMap:kt,normalMap:ft,displacementMap:hn,emissiveMap:Tt,normalMapObjectSpace:ft&&p.normalMapType===Nc,normalMapTangentSpace:ft&&p.normalMapType===ca,packedNormalMap:ft&&p.normalMapType===ca&&em(p.normalMap.format),metalnessMap:Kt,roughnessMap:Zt,anisotropy:$t,anisotropyMap:Ne,clearcoat:N,clearcoatMap:w,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:Jt,diffuseRoughnessMap:ie,dispersion:lt,retroreflection:ct,iridescence:pe,iridescenceMap:ee,iridescenceThicknessMap:ae,sheen:Mt,sheenColorMap:ue,sheenRoughnessMap:Z,specularMap:J,specularColorMap:le,specularIntensityMap:R,transmission:Le,transmissionMap:Q,thicknessMap:K,gradientMap:ce,opaque:p.transparent===!1&&p.blending===Gi&&p.alphaToCoverage===!1,alphaMap:re,alphaTest:oe,alphaHash:Ae,combine:p.combine,mapUv:Pe&&m(p.map.channel),aoMapUv:gt&&m(p.aoMap.channel),lightMapUv:dt&&m(p.lightMap.channel),bumpMapUv:kt&&m(p.bumpMap.channel),normalMapUv:ft&&m(p.normalMap.channel),displacementMapUv:hn&&m(p.displacementMap.channel),emissiveMapUv:Tt&&m(p.emissiveMap.channel),metalnessMapUv:Kt&&m(p.metalnessMap.channel),roughnessMapUv:Zt&&m(p.roughnessMap.channel),anisotropyMapUv:Ne&&m(p.anisotropyMap.channel),clearcoatMapUv:w&&m(p.clearcoatMap.channel),clearcoatNormalMapUv:x&&m(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&m(p.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&m(p.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&m(p.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&m(p.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&m(p.sheenColorMap.channel),sheenRoughnessMapUv:Z&&m(p.sheenRoughnessMap.channel),specularMapUv:J&&m(p.specularMap.channel),specularColorMapUv:le&&m(p.specularColorMap.channel),specularIntensityMapUv:R&&m(p.specularIntensityMap.channel),transmissionMapUv:Q&&m(p.transmissionMap.channel),thicknessMapUv:K&&m(p.thicknessMap.channel),alphaMapUv:re&&m(p.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ft||$t),vertexNormals:!!L.attributes.normal,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Pe||re),fog:!!X,useFog:p.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:p.wireframe===!1&&(p.flatShading===!0||L.attributes.normal===void 0&&ft===!1&&(p.isMeshLambertMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isMeshPhysicalMaterial)),sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ge,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:q,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(_e=>_e.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:p.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:Pe&&p.map.isVideoTexture===!0&&Ze.getTransfer(p.map.colorSpace)===nt,decodeVideoTextureEmissive:Tt&&p.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(p.emissiveMap.colorSpace)===nt,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Rn,flipSided:p.side===Ht,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:ze&&p.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&p.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function y(p){const S=[];if(p.shaderID?S.push(p.shaderID):(S.push(p.customVertexShaderID),S.push(p.customFragmentShaderID)),p.defines!==void 0)for(const D in p.defines)S.push(D),S.push(p.defines[D]);return p.isRawShaderMaterial===!1&&(f(S,p),d(S,p),S.push(i.outputColorSpace)),S.push(p.customProgramCacheKey),S.join()}function f(p,S){p.push(S.precision),p.push(S.outputColorSpace),p.push(S.envMapMode),p.push(S.envMapPMREM),p.push(S.envMapMaxLod),p.push(S.envMapSize),p.push(S.mapUv),p.push(S.alphaMapUv),p.push(S.lightMapUv),p.push(S.aoMapUv),p.push(S.bumpMapUv),p.push(S.normalMapUv),p.push(S.displacementMapUv),p.push(S.emissiveMapUv),p.push(S.metalnessMapUv),p.push(S.roughnessMapUv),p.push(S.anisotropyMapUv),p.push(S.clearcoatMapUv),p.push(S.clearcoatNormalMapUv),p.push(S.clearcoatRoughnessMapUv),p.push(S.diffuseRoughnessMapUv),p.push(S.iridescenceMapUv),p.push(S.iridescenceThicknessMapUv),p.push(S.sheenColorMapUv),p.push(S.sheenRoughnessMapUv),p.push(S.specularMapUv),p.push(S.specularColorMapUv),p.push(S.specularIntensityMapUv),p.push(S.transmissionMapUv),p.push(S.thicknessMapUv),p.push(S.combine),p.push(S.fogExp2),p.push(S.sizeAttenuation),p.push(S.morphTargetsCount),p.push(S.numSunLights),p.push(S.numDirLights),p.push(S.numPointLights),p.push(S.numSpotLights),p.push(S.numSpotLightMaps),p.push(S.numHemiLights),p.push(S.numRectAreaLights),p.push(S.numSunLightShadows),p.push(S.numDirLightShadows),p.push(S.numPointLightShadows),p.push(S.numSpotLightShadows),p.push(S.numSpotLightShadowsWithMaps),p.push(S.numLightProbes),p.push(S.numLightProbeGrids),p.push(S.shadowMapType),p.push(S.toneMapping),p.push(S.numClippingPlanes),p.push(S.numClipIntersection),p.push(S.depthPacking)}function d(p,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),p.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),p.push(a.mask)}function M(p){const S=u[p.type];let D;if(S){const C=mn[S];D=Eh.clone(C.uniforms)}else D=p.uniforms;return D}function A(p,S){let D=h.get(S);return D!==void 0?++D.usedTimes:(D=new $p(i,S,p,s),l.push(D),h.set(S,D)),D}function E(p){if(--p.usedTimes===0){const S=l.indexOf(p);l[S]=l[l.length-1],l.pop(),h.delete(p.cacheKey),p.destroy()}}function b(p){o.remove(p)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:M,acquireProgram:A,releaseProgram:E,releaseShaderCache:b,programs:l,dispose:T}}function nm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function im(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Xo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,_,y,f,d){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:m,material:_,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:f,group:d},i[e]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=_,M.materialVariant=a(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=f,M.group=d),e++,M}function c(u,m,_,y,f,d,M){M.reversedDepth===!0&&(f=-f);const A=o(u,m,_,y,f,d);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):t.push(A)}function l(u,m,_,y,f,d){const M=o(u,m,_,y,f,d);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,m){t.length>1&&t.sort(u||im),n.length>1&&n.sort(m||Xo),s.length>1&&s.sort(m||Xo)}function g(){for(let u=e,m=i.length;u<m;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:g,sort:h}}function sm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new qo,i.set(n,[a])):s>=r.length?(a=new qo,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function rm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new He};break;case"SpotLight":t={position:new F,direction:new F,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function am(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let om=0;function lm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cm(i){const e=new rm,t=am(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const s=new F,r=new rt,a=new rt;function o(l){let h=0,g=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,_=0,y=0,f=0,d=0,M=0,A=0,E=0,b=0,T=0,p=0,S=0,D=0,C=0;l.sort(lm);for(let U=0,X=l.length;U<X;U++){const L=l[U],G=L.color,$=L.intensity,k=L.distance;let ne=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ti?ne=L.shadow.map.texture:ne=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=G.r*$,g+=G.g*$,u+=G.b*$;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],$);C++}else if(L.isSunLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,te=t.get(L);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[_]=te,n.sunShadowMap[_]=ne;const q=j.getViewportCount();for(let me=0;me<q;me++)n.sunShadowMatrix[y+me]=j.getMatrix(me),n.sunShadowCascade[y+me]=j._cascadeData[me];y+=q,_++}n.sun[m]=Y,m++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,te=t.get(L);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,n.directionalShadow[f]=te,n.directionalShadowMap[f]=ne,n.directionalShadowMatrix[f]=L.shadow.matrix,b++}n.directional[f]=Y,f++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(G).multiplyScalar($),Y.distance=k,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[M]=Y;const j=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,j.updateMatrices(L),L.castShadow&&D++),n.spotLightMatrix[M]=j.matrix,L.castShadow){const te=t.get(L);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,n.spotShadow[M]=te,n.spotShadowMap[M]=ne,p++}M++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(G).multiplyScalar($),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=Y,A++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const j=L.shadow,te=t.get(L);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,n.pointShadow[d]=te,n.pointShadowMap[d]=ne,n.pointShadowMatrix[d]=L.shadow.matrix,T++}n.point[d]=Y,d++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar($),Y.groundColor.copy(L.groundColor).multiplyScalar($),n.hemi[E]=Y,E++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=g,n.ambient[2]=u;const I=n.hash;(I.sunLength!==m||I.directionalLength!==f||I.pointLength!==d||I.spotLength!==M||I.rectAreaLength!==A||I.hemiLength!==E||I.numSunShadows!==_||I.numDirectionalShadows!==b||I.numPointShadows!==T||I.numSpotShadows!==p||I.numSpotMaps!==S||I.numLightProbes!==C)&&(n.sun.length=m,n.directional.length=f,n.spot.length=M,n.rectArea.length=A,n.point.length=d,n.hemi.length=E,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=p,n.spotShadowMap.length=p,n.spotLightMatrix.length=p+S-D,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=C,I.sunLength=m,I.directionalLength=f,I.pointLength=d,I.spotLength=M,I.rectAreaLength=A,I.hemiLength=E,I.numSunShadows=_,I.numDirectionalShadows=b,I.numPointShadows=T,I.numSpotShadows=p,I.numSpotMaps=S,I.numLightProbes=C,n.version=om++)}function c(l,h){let g=0,u=0,m=0,_=0,y=0,f=0;const d=h.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){const E=l[M];if(E.isSunLight){const b=n.sun[g];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(d),g++}else if(E.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),u++}else if(E.isSpotLight){const b=n.spot[_];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),_++}else if(E.isRectAreaLight){const b=n.rectArea[y];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(E.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){const b=n.hemi[f];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(d),f++}}}return{setup:o,setupView:c,state:n}}function Yo(i){const e=new cm(i),t=[],n=[],s=[];function r(g){h.camera=g,t.length=0,n.length=0,s.length=0}function a(g){g.isLightProbeGrid?s.push(g):t.push(g)}function o(g){n.push(g)}function c(){e.setup(t),s.sort((g,u)=>g.priority-u.priority||g.id-u.id)}function l(g){e.setupView(t,g)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function hm(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Yo(i),e.set(s,[o])):r>=a.length?(o=new Yo(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const um=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dm=`uniform sampler2D shadow_pass;
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
}`,fm=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],pm=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Ko=new rt,Ui=new F,Er=new F;function mm(i,e,t){let n=new Yi;const s=new Ge,r=new Ge,a=new mt,o=new wh,c=new Ah,l={},h=t.maxTextureSize,g={[ei]:Ht,[Ht]:ei,[Rn]:Rn},u=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:um,fragmentShader:dm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new jt;_.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ye(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ki;let d=this.type;this.render=function(T,p,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;this.type===uc&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ki);const D=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(vi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const X=d!==this.type;X&&p.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=T.length;L<G;L++){const $=T[L],k=$.shadow;if(k===void 0){Ie("WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ne=k.getFrameExtents();s.multiply(ne),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,k.mapSize.y=r.y));const Y=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Y,k.map===null||X===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Oi){if($.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new xn(s.x,s.y,{format:ti,type:Mn,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),k.map.texture.name=$.name+".shadowMap",k.map.depthTexture=new yi(s.x,s.y,ln),k.map.depthTexture.name=$.name+".shadowMapDepth",k.map.depthTexture.format=Vn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Lt,k.map.depthTexture.magFilter=Lt}else $.isPointLight?(k.map=new Da(s.x),k.map.depthTexture=new Nl(s.x,vn)):(k.map=new xn(s.x,s.y),k.map.depthTexture=new yi(s.x,s.y,vn)),k.map.depthTexture.name=$.name+".shadowMap",k.map.depthTexture.format=Vn,this.type===ki?(k.map.depthTexture.compareFunction=Y?yl:El,k.map.depthTexture.minFilter=Gt,k.map.depthTexture.magFilter=Gt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Lt,k.map.depthTexture.magFilter=Lt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const j=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();$.isPointLight!==!0&&k.updateMatrices($,S);const te=k.camera.layers.mask&4294967294?k.camera.layers:S.layers;for(let q=0;q<j;q++){const me=k.getCamera(q);if($.isPointLight){const V=k.camera,fe=k.matrix,Se=$.distance||V.far;Se!==V.far&&(V.far=Se,V.updateProjectionMatrix()),Ui.setFromMatrixPosition($.matrixWorld),V.position.copy(Ui),Er.copy(V.position),Er.add(fm[q]),V.up.copy(pm[q]),V.lookAt(Er),V.updateMatrixWorld(),fe.makeTranslation(-Ui.x,-Ui.y,-Ui.z),Ko.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Ko,V.coordinateSystem,V.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,q),i.clear();else{q===0&&(i.setRenderTarget(k.map),i.clear());const V=k.getViewport(q);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),U.viewport(a)}n=k.getFrustum(q),E(p,S,me,$,te,this.type)}k.isPointLightShadow!==!0&&this.type===Oi&&M(k,S),k.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(D,C,I)};function M(T,p){const S=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new xn(s.x,s.y,{format:ti,type:Mn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(p,null,S,u,y,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(p,null,S,m,y,null)}function A(T,p,S,D){let C=null;const I=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)C=I;else if(C=S.isPointLight===!0?c:o,i.localClippingEnabled&&p.clipShadows===!0&&Array.isArray(p.clippingPlanes)&&p.clippingPlanes.length!==0||p.displacementMap&&p.displacementScale!==0||p.alphaMap&&p.alphaTest>0||p.map&&p.alphaTest>0||p.alphaToCoverage===!0){const U=C.uuid,X=p.uuid;let L=l[U];L===void 0&&(L={},l[U]=L);let G=L[X];G===void 0&&(G=C.clone(),L[X]=G,p.addEventListener("dispose",b)),C=G}if(C.visible=p.visible,C.wireframe=p.wireframe,D===Oi?C.side=p.shadowSide!==null?p.shadowSide:p.side:C.side=p.shadowSide!==null?p.shadowSide:g[p.side],C.alphaMap=p.alphaMap,C.alphaTest=p.alphaToCoverage===!0?.5:p.alphaTest,C.map=p.map,C.clipShadows=p.clipShadows,C.clippingPlanes=p.clippingPlanes,C.clipIntersection=p.clipIntersection,C.displacementMap=p.displacementMap,C.displacementScale=p.displacementScale,C.displacementBias=p.displacementBias,C.wireframeLinewidth=p.wireframeLinewidth,C.linewidth=p.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=i.properties.get(C);U.light=S}return C}function E(T,p,S,D,C,I){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Oi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const L=e.update(T),G=T.material;if(Array.isArray(G)){const $=L.groups;for(let k=0,ne=$.length;k<ne;k++){const Y=$[k],j=G[Y.materialIndex];if(j&&j.visible){const te=A(T,j,D,I);T.onBeforeShadow(i,T,p,S,L,te,Y),i.renderBufferDirect(S,null,L,te,T,Y),T.onAfterShadow(i,T,p,S,L,te,Y)}}}else if(G.visible){const $=A(T,G,D,I);T.onBeforeShadow(i,T,p,S,L,$,null),i.renderBufferDirect(S,null,L,$,T,null),T.onAfterShadow(i,T,p,S,L,$,null)}}const X=T.children;for(let L=0,G=X.length;L<G;L++)E(X[L],p,S,D,C,I)}function b(T){T.target.removeEventListener("dispose",b);for(const S in l){const D=l[S],C=T.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function gm(i,e){function t(){let R=!1;const Q=new mt;let K=null;const ce=new mt(0,0,0,0);return{setMask:function(re){K!==re&&!R&&(i.colorMask(re,re,re,re),K=re)},setLocked:function(re){R=re},setClear:function(re,oe,Ae,ze,se){se===!0&&(re*=ze,oe*=ze,Ae*=ze),Q.set(re,oe,Ae,ze),ce.equals(Q)===!1&&(i.clearColor(re,oe,Ae,ze),ce.copy(Q))},reset:function(){R=!1,K=null,ce.set(-1,0,0,0)}}}function n(){let R=!1,Q=!1,K=null,ce=null,re=null;return{setReversed:function(oe){if(Q!==oe){const Ae=e.get("EXT_clip_control");oe?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Q=oe;const ze=re;re=null,this.setClear(ze)}},getReversed:function(){return Q},setTest:function(oe){oe?ge(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(oe){K!==oe&&!R&&(i.depthMask(oe),K=oe)},setFunc:function(oe){if(Q&&(oe=qc[oe]),ce!==oe){switch(oe){case Tr:i.depthFunc(i.NEVER);break;case br:i.depthFunc(i.ALWAYS);break;case wr:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Ar:i.depthFunc(i.EQUAL);break;case Rr:i.depthFunc(i.GEQUAL);break;case Cr:i.depthFunc(i.GREATER);break;case Pr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=oe}},setLocked:function(oe){R=oe},setClear:function(oe){re!==oe&&(re=oe,Q&&(oe=1-oe),i.clearDepth(oe))},reset:function(){R=!1,K=null,ce=null,re=null,Q=!1}}}function s(){let R=!1,Q=null,K=null,ce=null,re=null,oe=null,Ae=null,ze=null,se=null;return{setTest:function(Ce){R||(Ce?ge(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(Ce){Q!==Ce&&!R&&(i.stencilMask(Ce),Q=Ce)},setFunc:function(Ce,Be,_e){(K!==Ce||ce!==Be||re!==_e)&&(i.stencilFunc(Ce,Be,_e),K=Ce,ce=Be,re=_e)},setOp:function(Ce,Be,_e){(oe!==Ce||Ae!==Be||ze!==_e)&&(i.stencilOp(Ce,Be,_e),oe=Ce,Ae=Be,ze=_e)},setLocked:function(Ce){R=Ce},setClear:function(Ce){se!==Ce&&(i.clearStencil(Ce),se=Ce)},reset:function(){R=!1,Q=null,K=null,ce=null,re=null,oe=null,Ae=null,ze=null,se=null}}}const r=new t,a=new n,o=new s;let c={};const l=new WeakMap;let h={},g={},u={},m=new WeakMap,_=[],y=null,f=!1,d=null,M=null,A=null,E=null,b=null,T=null,p=null,S=new He(0,0,0),D=0,C=!1,I=null,U=null,X=null,L=null,G=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ne=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=ne>=1):Y.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=ne>=2);let j=null,te={};const q=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),V=new mt().fromArray(q),fe=new mt().fromArray(me);function Se(R,Q,K,ce){const re=new Uint8Array(4),oe=i.createTexture();i.bindTexture(R,oe),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<K;Ae++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(Q+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return oe}const Re={};Re[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(i.DEPTH_TEST),a.setFunc(Vi),kt(!1),ft(Ka),ge(i.CULL_FACE),gt(vi);function ge(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Me(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function We(R,Q){return u[R]!==Q?(i.bindFramebuffer(R,Q),u[R]=Q,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Q),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Pe(R,Q){let K=_,ce=!1;if(R){K=m.get(Q),K===void 0&&(K=[],m.set(Q,K));const re=R.textures;if(K.length!==re.length||K[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ae=re.length;oe<Ae;oe++)K[oe]=i.COLOR_ATTACHMENT0+oe;K.length=re.length,ce=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ce=!0);ce&&i.drawBuffers(K)}function je(R){return y!==R?(i.useProgram(R),y=R,!0):!1}const it={[xi]:i.FUNC_ADD,[fc]:i.FUNC_SUBTRACT,[pc]:i.FUNC_REVERSE_SUBTRACT};it[mc]=i.MIN,it[gc]=i.MAX;const Ve={[_c]:i.ZERO,[xc]:i.ONE,[vc]:i.SRC_COLOR,[al]:i.SRC_ALPHA,[bc]:i.SRC_ALPHA_SATURATE,[yc]:i.DST_COLOR,[Sc]:i.DST_ALPHA,[Mc]:i.ONE_MINUS_SRC_COLOR,[ol]:i.ONE_MINUS_SRC_ALPHA,[Tc]:i.ONE_MINUS_DST_COLOR,[Ec]:i.ONE_MINUS_DST_ALPHA,[wc]:i.CONSTANT_COLOR,[Ac]:i.ONE_MINUS_CONSTANT_COLOR,[Rc]:i.CONSTANT_ALPHA,[Cc]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(R,Q,K,ce,re,oe,Ae,ze,se,Ce){if(R===vi){f===!0&&(Me(i.BLEND),f=!1);return}if(f===!1&&(ge(i.BLEND),f=!0),R!==dc){if(R!==d||Ce!==C){if((M!==xi||b!==xi)&&(i.blendEquation(i.FUNC_ADD),M=xi,b=xi),Ce)switch(R){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Za:i.blendFunc(i.ONE,i.ONE);break;case $a:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ja:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",R);break}else switch(R){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Za:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $a:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ja:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",R);break}A=null,E=null,T=null,p=null,S.set(0,0,0),D=0,d=R,C=Ce}return}re=re||Q,oe=oe||K,Ae=Ae||ce,(Q!==M||re!==b)&&(i.blendEquationSeparate(it[Q],it[re]),M=Q,b=re),(K!==A||ce!==E||oe!==T||Ae!==p)&&(i.blendFuncSeparate(Ve[K],Ve[ce],Ve[oe],Ve[Ae]),A=K,E=ce,T=oe,p=Ae),(ze.equals(S)===!1||se!==D)&&(i.blendColor(ze.r,ze.g,ze.b,se),S.copy(ze),D=se),d=R,C=!1}function dt(R,Q){R.side===Rn?Me(i.CULL_FACE):ge(i.CULL_FACE);let K=R.side===Ht;Q&&(K=!K),kt(K),R.blending===Gi&&R.transparent===!1?gt(vi):gt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);const ce=R.stencilWrite;o.setTest(ce),ce&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Tt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(R){I!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),I=R)}function ft(R){R!==cc?(ge(i.CULL_FACE),R!==U&&(R===Ka?i.cullFace(i.BACK):R===hc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),U=R}function hn(R){R!==X&&(k&&i.lineWidth(R),X=R)}function Tt(R,Q,K){R?(ge(i.POLYGON_OFFSET_FILL),(L!==Q||G!==K)&&(L=Q,G=K,a.getReversed()&&(Q=-Q,K=-K),i.polygonOffset(Q,K))):Me(i.POLYGON_OFFSET_FILL)}function Kt(R){R?ge(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function Zt(R){R===void 0&&(R=i.TEXTURE0+$-1),j!==R&&(i.activeTexture(R),j=R)}function $t(R,Q,K){K===void 0&&(j===null?K=i.TEXTURE0+$-1:K=j);let ce=te[K];ce===void 0&&(ce={type:void 0,texture:void 0},te[K]=ce),(ce.type!==R||ce.texture!==Q)&&(j!==K&&(i.activeTexture(K),j=K),i.bindTexture(R,Q||Re[R]),ce.type=R,ce.texture=Q)}function N(){const R=te[j];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Jt(){try{i.compressedTexImage2D(...arguments)}catch(R){Qe("WebGLState:",R)}}function lt(){try{i.compressedTexImage3D(...arguments)}catch(R){Qe("WebGLState:",R)}}function ct(){try{i.texSubImage2D(...arguments)}catch(R){Qe("WebGLState:",R)}}function pe(){try{i.texSubImage3D(...arguments)}catch(R){Qe("WebGLState:",R)}}function Mt(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Qe("WebGLState:",R)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Qe("WebGLState:",R)}}function Ne(){try{i.texStorage2D(...arguments)}catch(R){Qe("WebGLState:",R)}}function w(){try{i.texStorage3D(...arguments)}catch(R){Qe("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){Qe("WebGLState:",R)}}function B(){try{i.texImage3D(...arguments)}catch(R){Qe("WebGLState:",R)}}function ie(R){return g[R]!==void 0?g[R]:i.getParameter(R)}function ee(R,Q){g[R]!==Q&&(i.pixelStorei(R,Q),g[R]=Q)}function ae(R){V.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),V.copy(R))}function ue(R){fe.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),fe.copy(R))}function Z(R,Q){let K=l.get(Q);K===void 0&&(K=new WeakMap,l.set(Q,K));let ce=K.get(R);ce===void 0&&(ce=i.getUniformBlockIndex(Q,R.name),i.uniformBlockBinding(Q,ce,ce),K.set(R,ce))}function J(R,Q,K){const re=l.get(Q).get(R);c[re]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,re,K),c[re]=K)}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},g={},j=null,te={},u={},c={},m=new WeakMap,_=[],y=null,f=!1,d=null,M=null,A=null,E=null,b=null,T=null,p=null,S=new He(0,0,0),D=0,C=!1,I=null,U=null,X=null,L=null,G=null,V.set(0,0,i.canvas.width,i.canvas.height),fe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ge,disable:Me,bindFramebuffer:We,drawBuffers:Pe,useProgram:je,setBlending:gt,setMaterial:dt,setFlipSided:kt,setCullFace:ft,setLineWidth:hn,setPolygonOffset:Tt,setScissorTest:Kt,activeTexture:Zt,bindTexture:$t,unbindTexture:N,compressedTexImage2D:Jt,compressedTexImage3D:lt,texImage2D:x,texImage3D:B,pixelStorei:ee,getParameter:ie,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:Ne,texStorage3D:w,texSubImage2D:ct,texSubImage3D:pe,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Le,scissor:ae,viewport:ue,reset:le}}function _m(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,h=new WeakMap,g=new Set;let u;const m=new WeakMap,_=new Set,y=new FinalizationRegistry(w=>_.delete(w));let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(w,x){return f?new OffscreenCanvas(w,x):Bs("canvas")}function M(w,x,B){let ie=1;const ee=Ne(w);if((ee.width>B||ee.height>B)&&(ie=B/Math.max(ee.width,ee.height)),ie<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ae=Math.floor(ie*ee.width),ue=Math.floor(ie*ee.height);u===void 0&&(u=d(ae,ue));const Z=x?d(ae,ue):u;return Z.width=ae,Z.height=ue,Z.getContext("2d").drawImage(w,0,0,ae,ue),Ie("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ae+"x"+ue+")."),Z}else return"data"in w&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function A(w){return w.generateMipmaps}function E(w){i.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,x,B,ie,ee,ae=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue;ie&&(ue=e.get("EXT_texture_norm16"),ue||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8),B===i.UNSIGNED_SHORT&&ue&&(Z=ue.R16_EXT),B===i.SHORT&&ue&&(Z=ue.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),x===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8),B===i.UNSIGNED_SHORT&&ue&&(Z=ue.RG16_EXT),B===i.SHORT&&ue&&(Z=ue.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&ue&&(Z=ue.RGB16_EXT),B===i.SHORT&&ue&&(Z=ue.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),x===i.RGBA){const J=ae?Os:Ze.getTransfer(ee);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=J===nt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ue&&(Z=ue.RGBA16_EXT),B===i.SHORT&&ue&&(Z=ue.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function p(w,x){let B;return w?x===null||x===vn||x===Ei?B=i.DEPTH24_STENCIL8:x===ln?B=i.DEPTH32F_STENCIL8:x===Xi&&(B=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vn||x===Ei?B=i.DEPTH_COMPONENT24:x===ln?B=i.DEPTH_COMPONENT32F:x===Xi&&(B=i.DEPTH_COMPONENT16),B}function S(w,x){return A(w)===!0||w.isFramebufferTexture&&w.minFilter!==Lt&&w.minFilter!==Gt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function D(w){const x=new WeakRef(w);n.get(w).__ref=x,_.add(x),y.register(w,x,x)}function C(w){const x=n.get(w).__ref;x!==void 0&&(_.delete(x),y.unregister(x))}function I(w){X(w.target)}function U(w){L(w.target)}function X(w){w.removeEventListener("dispose",I),C(w),$(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&g.delete(w)}function L(w){w.removeEventListener("dispose",U),C(w),ne(w)}function G(){for(const w of _){const x=w.deref();x!==void 0&&(x.isRenderTarget===!0?L(x):X(x))}_.clear(),g.clear()}function $(w){const x=n.get(w);if(x.__webglInit===void 0)return;const B=w.source,ie=m.get(B);if(ie){const ee=ie[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&k(w),Object.keys(ie).length===0&&m.delete(B)}n.remove(w)}function k(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const B=w.source,ie=m.get(B);delete ie[x.__cacheKey],a.memory.textures--}function ne(w){const x=n.get(w);x.__depthDisposeCallback&&x.__depthDisposeCallback();const B=w.depthTexture;if(B&&B.renderTarget===w&&X(B),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(x.__webglFramebuffer[ee]))for(let ae=0;ae<x.__webglFramebuffer[ee].length;ae++)i.deleteFramebuffer(x.__webglFramebuffer[ee][ae]);else i.deleteFramebuffer(x.__webglFramebuffer[ee]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[ee])}else{if(Array.isArray(x.__webglFramebuffer))for(let ee=0;ee<x.__webglFramebuffer.length;ee++)i.deleteFramebuffer(x.__webglFramebuffer[ee]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ee=0;ee<x.__webglColorRenderbuffer.length;ee++)x.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[ee]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const ie=w.textures;for(let ee=0,ae=ie.length;ee<ae;ee++){const ue=n.get(ie[ee]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(ie[ee])}n.remove(w)}let Y=0;function j(){Y=0}function te(){return Y}function q(w){Y=w}function me(){const w=Y;return w>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,w}function V(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.mipmapsAutoUpdate),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function fe(w,x){const B=n.get(w);if(w.isVideoTexture&&Mt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){const ie=w.image;if(ie===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(B,w,x);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function Se(w,x){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){dt(B,w,x);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Re(w,x){const B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){dt(B,w,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function ge(w,x){const B=n.get(w);if(w.version>0&&B.__version!==w.version){kt(B,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const Me={[Lr]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[Dr]:i.MIRRORED_REPEAT},We={[Lt]:i.NEAREST,[Dc]:i.NEAREST_MIPMAP_NEAREST,[is]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[$s]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},Pe={[Fc]:i.NEVER,[Tl]:i.ALWAYS,[Oc]:i.LESS,[El]:i.LEQUAL,[Bc]:i.EQUAL,[yl]:i.GEQUAL,[zc]:i.GREATER,[kc]:i.NOTEQUAL};function je(w,x){if(x.type===ln&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Gt||x.magFilter===$s||x.magFilter===is||x.magFilter===kn||x.minFilter===Gt||x.minFilter===$s||x.minFilter===is||x.minFilter===kn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Me[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Me[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Me[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,We[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,We[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Pe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Lt||x.minFilter!==is&&x.minFilter!==kn||x.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function it(w,x){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",I),D(x));const ie=x.source;let ee=m.get(ie);ee===void 0&&(ee={},m.set(ie,ee));const ae=V(x);if(ae!==w.__cacheKey){ee[ae]===void 0&&(ee[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ee[ae].usedTimes++;const ue=ee[w.__cacheKey];ue!==void 0&&(ee[w.__cacheKey].usedTimes--,ue.usedTimes===0&&k(x)),w.__cacheKey=ae,w.__webglTexture=ee[ae].texture}return B}function Ve(w,x,B){return Math.floor(Math.floor(w/B)/x)}function gt(w,x,B,ie){const ae=w.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,ie,x.data);else{ae.sort((R,Q)=>R.start-Q.start);let ue=0;for(let R=1;R<ae.length;R++){const Q=ae[ue],K=ae[R],ce=Q.start+Q.count,re=Ve(K.start,x.width,4),oe=Ve(Q.start,x.width,4);K.start<=ce+1&&re===oe&&Ve(K.start+K.count-1,x.width,4)===re?Q.count=Math.max(Q.count,K.start+K.count-Q.start):(++ue,ae[ue]=K)}ae.length=ue+1;const Z=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,Q=ae.length;R<Q;R++){const K=ae[R],ce=Math.floor(K.start/4),re=Math.ceil(K.count/4),oe=ce%x.width,Ae=Math.floor(ce/x.width),ze=re,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae),t.texSubImage2D(i.TEXTURE_2D,0,oe,Ae,ze,se,B,ie,x.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function dt(w,x,B){let ie=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=i.TEXTURE_3D);const ee=it(w,x),ae=x.source;t.bindTexture(ie,w.__webglTexture,i.TEXTURE0+B);const ue=n.get(ae);if(ae.version!==ue.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const se=Ze.getPrimaries(Ze.workingColorSpace),Ce=x.colorSpace===zn?null:Ze.getPrimaries(x.colorSpace),Be=x.colorSpace===zn||se===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let J=M(x.image,!1,s.maxTextureSize);J=Le(x,J);const le=r.convert(x.format,x.colorSpace),R=r.convert(x.type);let Q=T(x.internalFormat,le,R,x.normalized,x.colorSpace,x.isVideoTexture);je(ie,x);let K;const ce=x.mipmaps,re=x.isVideoTexture!==!0,oe=ue.__version===void 0||ee===!0,Ae=ae.dataReady,ze=S(x,J);if(x.isDepthTexture)Q=p(x.format===Gn,x.type),oe&&(re?t.texStorage2D(i.TEXTURE_2D,1,Q,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,le,R,null));else if(x.isDataTexture)if(ce.length>0){re&&oe&&t.texStorage2D(i.TEXTURE_2D,ze,Q,ce[0].width,ce[0].height);for(let se=0,Ce=ce.length;se<Ce;se++)K=ce[se],re?Ae&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,K.width,K.height,le,R,K.data):t.texImage2D(i.TEXTURE_2D,se,Q,K.width,K.height,0,le,R,K.data);x.generateMipmaps=!1}else re?(oe&&t.texStorage2D(i.TEXTURE_2D,ze,Q,J.width,J.height),Ae&&gt(x,J,le,R)):t.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,le,R,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){re&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,Q,ce[0].width,ce[0].height,J.depth);for(let se=0,Ce=ce.length;se<Ce;se++)if(K=ce[se],x.format!==_n)if(le!==null)if(re){if(Ae)if(x.layerUpdates.size>0){const Be=Ao(K.width,K.height,x.format,x.type);for(const _e of x.layerUpdates){const tt=K.data.subarray(_e*Be/K.data.BYTES_PER_ELEMENT,(_e+1)*Be/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,_e,K.width,K.height,1,le,tt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,K.width,K.height,J.depth,le,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Q,K.width,K.height,J.depth,0,K.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,K.width,K.height,J.depth,le,R,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Q,K.width,K.height,J.depth,0,le,R,K.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{re&&oe&&t.texStorage2D(i.TEXTURE_2D,ze,Q,ce[0].width,ce[0].height);for(let se=0,Ce=ce.length;se<Ce;se++)K=ce[se],x.format!==_n?le!==null?re?Ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,K.width,K.height,le,K.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Q,K.width,K.height,0,K.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Ae&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,K.width,K.height,le,R,K.data):t.texImage2D(i.TEXTURE_2D,se,Q,K.width,K.height,0,le,R,K.data)}else if(x.isDataArrayTexture)if(re){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,Q,J.width,J.height,J.depth),Ae)if(x.layerUpdates.size>0){const se=Ao(J.width,J.height,x.format,x.type);for(const Ce of x.layerUpdates){const Be=J.data.subarray(Ce*se/J.data.BYTES_PER_ELEMENT,(Ce+1)*se/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,J.width,J.height,1,le,R,Be)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,le,R,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,J.width,J.height,J.depth,0,le,R,J.data);else if(x.isData3DTexture)re?(oe&&t.texStorage3D(i.TEXTURE_3D,ze,Q,J.width,J.height,J.depth),Ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,le,R,J.data)):t.texImage3D(i.TEXTURE_3D,0,Q,J.width,J.height,J.depth,0,le,R,J.data);else if(x.isFramebufferTexture){if(oe)if(re)t.texStorage2D(i.TEXTURE_2D,ze,Q,J.width,J.height);else{let se=J.width,Ce=J.height;for(let Be=0;Be<ze;Be++)t.texImage2D(i.TEXTURE_2D,Be,Q,se,Ce,0,le,R,null),se>>=1,Ce>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),J.parentNode!==se){se.appendChild(J),g.add(x),se.onpaint=Ce=>{const Be=Ce.changedElements;for(const _e of g)Be.includes(_e.image)&&(_e.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const Be=i.RGBA,_e=i.RGBA,tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Be,_e,tt,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ce.length>0){if(re&&oe){const se=Ne(ce[0]);t.texStorage2D(i.TEXTURE_2D,ze,Q,se.width,se.height)}for(let se=0,Ce=ce.length;se<Ce;se++)K=ce[se],re?Ae&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,le,R,K):t.texImage2D(i.TEXTURE_2D,se,Q,le,R,K);x.generateMipmaps=!1}else if(re){if(oe){const se=Ne(J);t.texStorage2D(i.TEXTURE_2D,ze,Q,se.width,se.height)}Ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,R,J)}else t.texImage2D(i.TEXTURE_2D,0,Q,le,R,J);A(x)&&x.mipmapsAutoUpdate===!0&&E(ie),ue.__version=ae.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function kt(w,x,B){if(x.image.length!==6)return;const ie=it(w,x),ee=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const ae=n.get(ee);if(ee.version!==ae.__version||ie===!0){t.activeTexture(i.TEXTURE0+B);const ue=Ze.getPrimaries(Ze.workingColorSpace),Z=x.colorSpace===zn?null:Ze.getPrimaries(x.colorSpace),J=x.colorSpace===zn||ue===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const le=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,Q=[];for(let _e=0;_e<6;_e++)!le&&!R?Q[_e]=M(x.image[_e],!0,s.maxCubemapSize):Q[_e]=R?x.image[_e].image:x.image[_e],Q[_e]=Le(x,Q[_e]);const K=Q[0],ce=r.convert(x.format,x.colorSpace),re=r.convert(x.type);let oe=T(x.internalFormat,ce,re,x.normalized,x.colorSpace);const Ae=x.isVideoTexture!==!0,ze=ae.__version===void 0||ie===!0,se=ee.dataReady;let Ce=S(x,K);je(i.TEXTURE_CUBE_MAP,x);let Be;if(x.isDepthTexture){if(oe=p(x.format===Gn,x.type),ze)if(Ae)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,oe,K.width,K.height);else for(let _e=0;_e<6;_e++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,oe,K.width,K.height,0,ce,re,null)}else if(le){Ae&&ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,oe,K.width,K.height);for(let _e=0;_e<6;_e++){Be=Q[_e].mipmaps;for(let tt=0;tt<Be.length;tt++){const bt=Be[tt];x.format!==_n?ce!==null?Ae?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt,0,0,bt.width,bt.height,ce,bt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt,oe,bt.width,bt.height,0,bt.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt,0,0,bt.width,bt.height,ce,re,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt,oe,bt.width,bt.height,0,ce,re,bt.data)}}}else{if(Be=x.mipmaps,Ae&&ze){Be.length>0&&Ce++;const _e=Ne(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,oe,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(R){Ae?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Q[_e].width,Q[_e].height,ce,re,Q[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,oe,Q[_e].width,Q[_e].height,0,ce,re,Q[_e].data);for(let tt=0;tt<Be.length;tt++){const Dn=Be[tt].image[_e].image;Ae?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt+1,0,0,Dn.width,Dn.height,ce,re,Dn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt+1,oe,Dn.width,Dn.height,0,ce,re,Dn.data)}}else{Ae?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ce,re,Q[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,oe,ce,re,Q[_e]);for(let tt=0;tt<Be.length;tt++){const bt=Be[tt];Ae?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt+1,0,0,ce,re,bt.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,tt+1,oe,ce,re,bt.image[_e])}}}A(x)&&x.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),ae.__version=ee.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ft(w,x,B,ie,ee,ae){const ue=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),J=T(B.internalFormat,ue,Z,B.normalized,B.colorSpace),le=n.get(x),R=n.get(B);if(R.__renderTarget=x,!le.__hasExternalTextures){const Q=Math.max(1,x.width>>ae),K=Math.max(1,x.height>>ae);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ae,J,Q,K,x.depth,0,ue,Z,null):t.texImage2D(ee,ae,J,Q,K,0,ue,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),pe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ee,R.__webglTexture,0,ct(x)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ee,R.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function hn(w,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const ie=x.depthTexture,ee=ie&&ie.isDepthTexture?ie.type:null,ae=p(x.stencilBuffer,ee),ue=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(x),ae,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(x),ae,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ae,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,w)}else{const ie=x.textures;for(let ee=0;ee<ie.length;ee++){const ae=ie[ee],ue=r.convert(ae.format,ae.colorSpace),Z=r.convert(ae.type),J=T(ae.internalFormat,ue,Z,ae.normalized,ae.colorSpace);pe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(x),J,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(x),J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(w,x,B){const ie=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=n.get(x.depthTexture);ee.__renderTarget=x;const ae=ie?x.depthTexture.image[0]:x.depthTexture.image;(!ee.__webglTexture||ae.width!==x.width||ae.height!==x.height)&&(ae.width=x.width,ae.height=x.height,x.depthTexture.needsUpdate=!0),ie?ge(x.depthTexture,0):fe(x.depthTexture,0);const ue=ee.__webglTexture,Z=ct(x),J=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,le=x.depthTexture.format===Gn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Vn)pe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,J,ue,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,le,J,ue,0);else if(x.depthTexture.format===Gn)pe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,J,ue,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,le,J,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(w){const x=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const ie=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ie){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ie.removeEventListener("dispose",ee)};ie.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=ie}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let ie=0;ie<6;ie++)Tt(x.__webglFramebuffer[ie],w,ie);else w.texture.mipmaps.length>0?Tt(x.__webglFramebuffer[0],w,0):Tt(x.__webglFramebuffer,w,0);else if(B){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]===void 0)x.__webglDepthbuffer[ie]=i.createRenderbuffer(),hn(x.__webglDepthbuffer[ie],w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ae)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),hn(x.__webglDepthbuffer,w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(w,x,B){const ie=n.get(w);x!==void 0&&ft(ie.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Kt(w)}function $t(w){const x=w.texture,B=n.get(w),ie=n.get(x);w.addEventListener("dispose",U),D(w);const ee=w.textures,ae=w.isWebGLCubeRenderTarget===!0,ue=ee.length>1;if(ue||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=x.version,a.memory.textures++),ae){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let J=0;J<x.mipmaps.length;J++)B.__webglFramebuffer[Z][J]=i.createFramebuffer()}else B.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[Z]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ue)for(let Z=0,J=ee.length;Z<J;Z++){const le=n.get(ee[Z]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&pe(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<ee.length;Z++){const J=ee[Z];B.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);const le=r.convert(J.format,J.colorSpace),R=r.convert(J.type),Q=T(J.internalFormat,le,R,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),K=ct(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,Q,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),hn(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),je(i.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)ft(B.__webglFramebuffer[Z][J],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else ft(B.__webglFramebuffer[Z],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);A(x)?E(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let Z=0,J=ee.length;Z<J;Z++){const le=ee[Z],R=n.get(le);let Q=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,R.__webglTexture),je(Q,le),ft(B.__webglFramebuffer,w,le,i.COLOR_ATTACHMENT0+Z,Q,0),A(le)&&E(Q)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,ie.__webglTexture),je(Z,x),x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)ft(B.__webglFramebuffer[J],w,x,i.COLOR_ATTACHMENT0,Z,J);else ft(B.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,Z,0);A(x)?E(Z):x.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&Kt(w)}function N(w){const x=w.textures;for(let B=0,ie=x.length;B<ie;B++){const ee=x[B];if(A(ee)&&ee.mipmapsAutoUpdate===!0){const ae=b(w),ue=n.get(ee).__webglTexture;t.bindTexture(ae,ue),E(ae),t.unbindTexture()}}}const Jt=[];function lt(w){if(w.samples>0){if(pe(w)===!1){const x=w.textures,B=w.width,ie=w.height;let ee=i.COLOR_BUFFER_BIT;const ae=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(w),Z=x.length>1;if(Z)for(let le=0;le<x.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let le=0;le<x.length;le++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const R=n.get(x[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,B,ie,0,0,B,ie,ee,i.NEAREST),c===!0&&(Jt.length=0,Jt.push(i.COLOR_ATTACHMENT0+le),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Jt.push(ae),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Jt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let le=0;le<x.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const R=n.get(x[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ct(w){return Math.min(s.maxSamples,w.samples)}function pe(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Mt(w){const x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Le(w,x){const B=w.colorSpace,ie=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Fs&&B!==zn&&(Ze.getTransfer(B)===nt?(ie!==_n||ee!==qt)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",B)),x}function Ne(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=me,this.resetTextureUnits=j,this.getTextureUnits=te,this.setTextureUnits=q,this.setTexture2D=fe,this.setTexture2DArray=Se,this.setTexture3D=Re,this.setTextureCube=ge,this.rebindTextures=Zt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=pe,this.dispose=G}function xm(i,e){function t(n,s=zn){let r;const a=Ze.getTransfer(s);if(n===qt)return i.UNSIGNED_BYTE;if(n===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gl)return i.BYTE;if(n===_l)return i.SHORT;if(n===Xi)return i.UNSIGNED_SHORT;if(n===_a)return i.INT;if(n===vn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===Ml)return i.ALPHA;if(n===Sl)return i.RGB;if(n===_n)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===Gn)return i.DEPTH_STENCIL;if(n===Ma)return i.RED;if(n===Sa)return i.RED_INTEGER;if(n===ti)return i.RG;if(n===Ea)return i.RG_INTEGER;if(n===ya)return i.RGBA_INTEGER;if(n===Rs||n===Cs||n===Ps||n===Ls)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ir||n===Nr||n===Ur||n===Fr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ir)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Or||n===Br||n===zr||n===kr||n===Gr||n===Ns||n===Hr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Or||n===Br)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===kr)return r.COMPRESSED_R11_EAC;if(n===Gr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ns)return r.COMPRESSED_RG11_EAC;if(n===Hr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Vr||n===Wr||n===Xr||n===qr||n===Yr||n===Kr||n===Zr||n===$r||n===Jr||n===Qr||n===jr||n===ea||n===ta||n===na)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$r)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ea)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ta)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===na)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ia||n===sa||n===ra)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ia)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===aa||n===oa||n===Us||n===la)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Us)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===la)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const vm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mm=`
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

}`;class Sm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ul(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ni({vertexShader:vm,fragmentShader:Mm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ye(new Qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Em extends ii{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,g=null,u=null,m=null,_=null;const y=typeof XRWebGLBinding<"u",f=new Sm,d={},M=t.getContextAttributes();let A=null,E=null;const b=[],T=[],p=new Ge;let S=null,D=null;const C=new an;C.viewport=new mt;const I=new an;I.viewport=new mt;const U=[C,I],X=new Dh;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let fe=b[V];return fe===void 0&&(fe=new rr,b[V]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(V){let fe=b[V];return fe===void 0&&(fe=new rr,b[V]=fe),fe.getGripSpace()},this.getHand=function(V){let fe=b[V];return fe===void 0&&(fe=new rr,b[V]=fe),fe.getHandSpace()};function $(V){const fe=T.indexOf(V.inputSource);if(fe===-1)return;const Se=b[fe];Se!==void 0&&(Se.update(V.inputSource,V.frame,l||a),Se.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",ne);for(let V=0;V<b.length;V++){const fe=T[V];fe!==null&&(T[V]=null,b[V].disconnect(fe))}L=null,G=null,f.reset();for(const V in d)delete d[V];if(e.setRenderTarget(A),m=null,u=null,g=null,s=null,E=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(p.width,p.height,!1),D!==null){const V=D.camera;V.fov=D.fov,V.zoom=D.zoom,V.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return g===null&&y&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",k),s.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(p),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Re=null,ge=null;M.depth&&(ge=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=M.stencil?Gn:Vn,Re=M.stencil?Ei:vn);const Me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};g=this.getBinding(),u=g.createProjectionLayer(Me),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new xn(u.textureWidth,u.textureHeight,{format:_n,type:qt,depthTexture:new yi(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Se={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new xn(m.framebufferWidth,m.framebufferHeight,{format:_n,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ne(V){for(let fe=0;fe<V.removed.length;fe++){const Se=V.removed[fe],Re=T.indexOf(Se);Re>=0&&(T[Re]=null,b[Re].disconnect(Se))}for(let fe=0;fe<V.added.length;fe++){const Se=V.added[fe];let Re=T.indexOf(Se);if(Re===-1){for(let Me=0;Me<b.length;Me++)if(Me>=T.length){T.push(Se),Re=Me;break}else if(T[Me]===null){T[Me]=Se,Re=Me;break}if(Re===-1)break}const ge=b[Re];ge&&ge.connect(Se)}}function Y(V,fe){fe===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(fe.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let fe=V.near,Se=V.far;f.texture!==null&&(f.depthNear>0&&(fe=f.depthNear),f.depthFar>0&&(Se=f.depthFar)),X.near=I.near=C.near=fe,X.far=I.far=C.far=Se,(L!==X.near||G!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),L=X.near,G=X.far),X.layers.mask=V.layers.mask|6,C.layers.mask=X.layers.mask&-5,I.layers.mask=X.layers.mask&-3;const Re=V.parent,ge=X.cameras;Y(X,Re);for(let Me=0;Me<ge.length;Me++)Y(ge[Me],Re);X.projectionMatrix.copy(C.projectionMatrix),X.projectionMatrixInverse.copy(C.projectionMatrixInverse),D===null&&V.isPerspectiveCamera&&(D={camera:V,fov:V.fov,zoom:V.zoom}),j(V,X,Re)};function j(V,fe,Se){Se===null?V.matrix.copy(fe.matrixWorld):(V.matrix.copy(Se.matrixWorld),V.matrix.invert(),V.matrix.multiply(fe.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(fe.projectionMatrix),V.projectionMatrixInverse.copy(fe.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ha*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(V){c=V,u!==null&&(u.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(X)},this.getCameraTexture=function(V){return d[V]};let te=null;function q(V,fe){if(h=fe.getViewerPose(l||a),_=fe,h!==null){const Se=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Re=!1;Se.length!==X.cameras.length&&(X.cameras.length=0,Re=!0);for(let Pe=0;Pe<Se.length;Pe++){const je=Se[Pe];let it=null;if(m!==null)it=m.getViewport(je);else{const gt=g.getViewSubImage(u,je);it=gt.viewport,Pe===0&&(e.setRenderTargetTextures(E,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(E))}let Ve=U[Pe];Ve===void 0&&(Ve=new an,Ve.layers.enable(Pe),Ve.viewport=new mt,U[Pe]=Ve),Ve.matrix.fromArray(je.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(je.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(it.x,it.y,it.width,it.height),Pe===0&&(X.matrix.copy(Ve.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Re===!0&&X.cameras.push(Ve)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){g=n.getBinding();const Pe=g.getDepthInformation(Se[0]);Pe&&Pe.isValid&&Pe.texture&&f.init(Pe,s.renderState)}if(ge&&ge.includes("camera-access")&&y){e.state.unbindTexture(),g=n.getBinding();for(let Pe=0;Pe<Se.length;Pe++){const je=Se[Pe].camera;if(je){let it=d[je];it||(it=new Ul,d[je]=it);const Ve=g.getCameraImage(je);it.sourceTexture=Ve}}}}for(let Se=0;Se<b.length;Se++){const Re=T[Se],ge=b[Se];Re!==null&&ge!==void 0&&ge.update(Re,fe,l||a)}te&&te(V,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),_=null}const me=new kl;me.setAnimationLoop(q),this.setAnimationLoop=function(V){te=V},this.dispose=function(){}}}const ym=new rt,$l=new Ue;$l.set(-1,0,0,0,1,0,0,0,1);function Tm(i,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Fl(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,M,A,E){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),g(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),u(f,d),d.isMeshPhysicalMaterial&&m(f,d,E)):d.isMeshMatcapMaterial?(r(f,d),_(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),y(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?c(f,d,M,A):d.isSpriteMaterial?l(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Ht&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Ht&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const M=e.get(d),A=M.envMap,E=M.envMapRotation;A&&(f.envMap.value=A,f.envMapRotation.value.setFromMatrix4(ym.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply($l),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function c(f,d,M,A){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*M,f.scale.value=A*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function l(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function g(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,M){f.ior.value=d.ior,d.diffuseRoughness>0&&(f.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ht&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.retroreflectivity>0&&(f.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,d){d.matcap&&(f.matcap.value=d.matcap)}function y(f,d){const M=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bm(i,e,t,n){let s={},r={};function a(M,A){const E=A.program;n.uniformBlockBinding(M,E,s[M.id])}function o(M,A){let E=s[M.id];E===void 0&&(_(M),E=c(M),s[M.id]=E,M.addEventListener("dispose",f));const b=A.program;n.updateUBOMapping(M,b);const T=e.render.frame;r[M.id]!==T&&(l(M),r[M.id]=T)}function c(M){const A=i.createBuffer(),E=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,E,b),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function l(M){const A=s[M.id],E=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let T=0,p=E.length;T<p;T++){const S=E[T];if(Array.isArray(S))for(let D=0,C=S.length;D<C;D++)h(S[D],T,D,b);else h(S,T,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,A,E,b){if(u(M,A,E,b)===!0){const T=M.__offset,p=M.value;if(Array.isArray(p)){let S=0;for(let D=0;D<p.length;D++){const C=p[D],I=y(C,!0);g(C,M.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else g(p,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function g(M,A,E){typeof M=="number"||typeof M=="boolean"?A[E]=M:M.isMatrix3?(A[E]=M.elements[0],A[E+1]=M.elements[1],A[E+2]=M.elements[2],A[E+3]=0,A[E+4]=M.elements[3],A[E+5]=M.elements[4],A[E+6]=M.elements[5],A[E+7]=0,A[E+8]=M.elements[6],A[E+9]=M.elements[7],A[E+10]=M.elements[8],A[E+11]=0):ArrayBuffer.isView(M)?A.set(M.subarray(0,A.length-E),E):M.toArray(A,E)}function u(M,A,E,b){const T=M.value,p=A+"_"+E;if(Array.isArray(T)){b[p]===void 0&&(b[p]=[]);const S=b[p];let D=!1;for(let C=0;C<T.length;C++)m(T[C],S,C)===!0&&(D=!0);return D}return m(T,b,p)}function m(M,A,E){if(A[E]===void 0)return typeof M=="number"||typeof M=="boolean"?A[E]=M:ArrayBuffer.isView(M)?A[E]=M.slice():A[E]=M.clone(),!0;{const b=A[E];if(typeof M=="number"||typeof M=="boolean"){if(b!==M)return A[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(b.equals(M)===!1)return b.copy(M),!0}}return!1}function _(M){const A=M.uniforms;let E=0;const b=16;for(let p=0,S=A.length;p<S;p++){const D=Array.isArray(A[p])?A[p]:[A[p]];for(let C=0,I=D.length;C<I;C++){const U=D[C],X=Array.isArray(U.value)?U.value:[U.value],L=Array.isArray(A[p])||Array.isArray(U.value);let G=E;for(let k=0,ne=X.length;k<ne;k++){const Y=X[k],j=y(Y,L),te=E%b,q=te%j.boundary,me=te+q;E+=q,me!==0&&b-me<j.storage&&(E+=b-me),k===0&&(G=E),E+=j.storage}const $=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new $((E-G)/Float32Array.BYTES_PER_ELEMENT),U.__offset=G}}const T=E%b;return T>0&&(E+=b-T),M.__size=E,M.__cache={},this}function y(M,A){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=16,E.storage=48):M.isMatrix4?(E.boundary=16,E.storage=64):M.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",M),A===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function f(M){const A=M.target;A.removeEventListener("dispose",f),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:d}}const wm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let dn=null;function Am(){return dn===null&&(dn=new Ll(wm,16,16,ti,Mn),dn.name="DFG_LUT",dn.minFilter=Gt,dn.magFilter=Gt,dn.wrapS=Cn,dn.wrapT=Cn,dn.generateMipmaps=!1,dn.needsUpdate=!0),dn}class Rm{constructor(e={}){const{canvas:t=Wc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:u=!1,outputBufferType:m=qt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const y=m,f=new Set([ya,Ea,Sa]),d=new Set([qt,vn,Xi,Ei,xa,va]),M=new Uint32Array(4),A=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let b=null,T=null;const p=[],S=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,U=null,X=null,L=null,G=null;this._outputColorSpace=Xt;let $=0,k=0,ne=null,Y=-1,j=null;const te=new mt,q=new mt;let me=null;const V=new He(0);let fe=0,Se=t.width,Re=t.height,ge=1,Me=null,We=null;const Pe=new mt(0,0,Se,Re),je=new mt(0,0,Se,Re);let it=!1;const Ve=new Yi,gt=new Ra;let dt=!1,kt=!1;const ft=new rt,hn=new F,Tt=new mt,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function $t(){return ne===null?ge:1}let N=n;function Jt(v,P){return t.getContext(v,P)}let lt,ct,pe,Mt,Le,Ne,w,x,B,ie,ee,ae,ue,Z,J,le,R,Q,K,ce,re,oe,Ae;try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ma}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",_e,!1),N===null){const P="webgl2";if(N=Jt(P,v),N===null)throw Jt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(v){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Qe("WebGLRenderer: "+v.message),v}function ze(){lt=new Lf(N),lt.init(),re=new xm(N,lt),ct=new Mf(N,lt,e,re),pe=new gm(N,lt),ct.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),X=N.createFramebuffer(),L=N.createFramebuffer(),G=N.createFramebuffer(),Mt=new Nf(N),Le=new nm,Ne=new _m(N,lt,pe,Le,ct,re,Mt),w=new Pf(C),x=new Uh(N),oe=new xf(N,x),B=new Df(N,x,Mt,oe),ie=new Ff(N,B,x,oe,Mt),Q=new Uf(N,ct,Ne),J=new Sf(Le),ee=new tm(C,w,lt,ct,oe,J),ae=new Tm(C,Le),ue=new sm,Z=new hm(lt),R=new _f(C,w,pe,ie,_,c),le=new mm(C,ie,ct),Ae=new bm(N,Mt,ct,pe),K=new vf(N,lt,Mt),ce=new If(N,lt,Mt),Mt.programs=ee.programs,C.capabilities=ct,C.extensions=lt,C.properties=Le,C.renderLists=ue,C.shadowMap=le,C.state=pe,C.info=Mt}y!==qt&&(D=new Bf(y,t.width,t.height,o,s,r));const se=new Em(C,N);this.xr=se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const v=lt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=lt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(v){v!==void 0&&(ge=v,this.setSize(Se,Re,!1))},this.getSize=function(v){return v.set(Se,Re)},this.setSize=function(v,P,H=!0){if(se.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=v,Re=P,t.width=Math.floor(v*ge),t.height=Math.floor(P*ge),H===!0&&(t.style.width=v+"px",t.style.height=P+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(Se*ge,Re*ge).floor()},this.setDrawingBufferSize=function(v,P,H){Se=v,Re=P,ge=H,t.width=Math.floor(v*H),t.height=Math.floor(P*H),this.setViewport(0,0,v,P)},this.setEffects=function(v){if(y===qt){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let P=0;P<v.length;P++)if(v[P].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(te)},this.getViewport=function(v){return v.copy(Pe)},this.setViewport=function(v,P,H,O){v.isVector4?Pe.set(v.x,v.y,v.z,v.w):Pe.set(v,P,H,O),pe.viewport(te.copy(Pe).multiplyScalar($t()).round())},this.getScissor=function(v){return v.copy(je)},this.setScissor=function(v,P,H,O){v.isVector4?je.set(v.x,v.y,v.z,v.w):je.set(v,P,H,O),pe.scissor(q.copy(je).multiplyScalar($t()).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(v){pe.setScissorTest(it=v)},this.setOpaqueSort=function(v){Me=v},this.setTransparentSort=function(v){We=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,P=!0,H=!0){let O=0;if(v){let z=!1;if(ne!==null){const de=ne.texture.format;z=f.has(de)}if(z){const de=ne.texture.type,Ee=d.has(de),he=R.getClearColor(),ve=R.getClearAlpha(),we=he.r,Fe=he.g,qe=he.b;Ee?(M[0]=we,M[1]=Fe,M[2]=qe,M[3]=ve,N.clearBufferuiv(N.COLOR,0,M)):(A[0]=we,A[1]=Fe,A[2]=qe,A[3]=ve,N.clearBufferiv(N.COLOR,0,A))}else O|=N.COLOR_BUFFER_BIT}P&&(O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),R.dispose(),ue.dispose(),Z.dispose(),Ne.dispose(),Le.dispose(),w.dispose(),ie.dispose(),B.dispose(),oe.dispose(),Ae.dispose(),ee.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ba),se.removeEventListener("sessionend",za),Xn.stop()};function Ce(v){v.preventDefault(),eo("WebGLRenderer: Context Lost."),I=!0}function Be(){eo("WebGLRenderer: Context Restored."),I=!1;const v=Mt.autoReset,P=le.enabled,H=le.autoUpdate,O=le.needsUpdate,z=le.type;ze(),Mt.autoReset=v,le.enabled=P,le.autoUpdate=H,le.needsUpdate=O,le.type=z}function _e(v){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function tt(v){const P=v.target;P.removeEventListener("dispose",tt),bt(P)}function bt(v){Dn(v),Le.remove(v)}function Dn(v){const P=Le.get(v).programs;P!==void 0&&(P.forEach(function(H){ee.releaseProgram(H)}),v.isShaderMaterial&&ee.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,H,O,z,de){P===null&&(P=Kt);const Ee=z.isMesh&&z.matrixWorld.determinantAffine()<0,he=sc(v,P,H,O,z);pe.setMaterial(O,Ee);let ve=H.index,we=1;if(O.wireframe===!0){if(ve=B.getWireframeAttribute(H),ve===void 0)return;we=2}const Fe=H.drawRange,qe=H.attributes.position;let Te=Fe.start*we,Ye=(Fe.start+Fe.count)*we;de!==null&&(Te=Math.max(Te,de.start*we),Ye=Math.min(Ye,(de.start+de.count)*we)),ve!==null?(Te=Math.max(Te,0),Ye=Math.min(Ye,ve.count)):qe!=null&&(Te=Math.max(Te,0),Ye=Math.min(Ye,qe.count));const xt=Ye-Te;if(xt<0||xt===1/0)return;oe.setup(z,O,he,H,ve);let at,st=K;if(ve!==null&&(at=x.get(ve),st=ce,st.setIndex(at)),z.isMesh)O.wireframe===!0?(pe.setLineWidth(O.wireframeLinewidth*$t()),st.setMode(N.LINES)):st.setMode(N.TRIANGLES);else if(z.isLine){let Dt=O.linewidth;Dt===void 0&&(Dt=1),pe.setLineWidth(Dt*$t()),z.isLineSegments?st.setMode(N.LINES):z.isLineLoop?st.setMode(N.LINE_LOOP):st.setMode(N.LINE_STRIP)}else z.isPoints?st.setMode(N.POINTS):z.isSprite&&st.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Dt=z._multiDrawStarts,be=z._multiDrawCounts,Ot=z._multiDrawCount,et=ve?x.get(ve).bytesPerElement:1,qn=Le.get(O).currentProgram.getUniforms();for(let It=0;It<Ot;It++)qn.setValue(N,"_gl_DrawID",It),st.render(Dt[It]/et,be[It])}else if(z.isInstancedMesh)st.renderInstances(Te,xt,z.count);else if(H.isInstancedBufferGeometry){const Dt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,be=Math.min(H.instanceCount,Dt);st.renderInstances(Te,xt,be)}else st.render(Te,xt)};function Oa(v,P,H,O){U!==null&&v.isNodeMaterial&&U.setObject(O,v),dt===!0&&J.setState(v,H,!1),v.transparent===!0&&v.side===Rn&&v.forceSinglePass===!1?(v.side=Ht,v.needsUpdate=!0,Ri(v,P,O),v.side=ei,v.needsUpdate=!0,Ri(v,P,O),v.side=Rn):Ri(v,P,O)}this.compile=function(v,P,H=null){H===null&&(H=v),U!==null&&U.renderStart(v,P,H),T=Z.get(H),T.init(P),S.push(T),H.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),v!==H&&v.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),kt=this.localClippingEnabled,dt=J.init(this.clippingPlanes,kt),dt===!0&&J.setGlobalState(this.clippingPlanes,P),U!==null&&le.render(T.state.shadowsArray,H,P);const O=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const de=z.material;if(de)if(Array.isArray(de))for(let Ee=0;Ee<de.length;Ee++){const he=de[Ee];Oa(he,H,P,z),O.add(he)}else Oa(de,H,P,z),O.add(de)}),T=S.pop(),U!==null&&U.renderEnd(),O},this.compileAsync=function(v,P,H=null){const O=this.compile(v,P,H);return new Promise(z=>{function de(){if(O.forEach(function(Ee){const ve=Le.get(Ee).currentProgram;(ve===void 0||ve.isReady())&&O.delete(Ee)}),O.size===0){z(v);return}setTimeout(de,10)}lt.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let qs=null;function nc(v){qs&&qs(v)}function Ba(){Xn.stop()}function za(){Xn.start()}const Xn=new kl;Xn.setAnimationLoop(nc),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(v){qs=v,se.setAnimationLoop(v),v===null?Xn.stop():Xn.start()},se.addEventListener("sessionstart",Ba),se.addEventListener("sessionend",za),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(v,P);const H=se.enabled===!0&&se.isPresenting===!0,O=D!==null&&(ne===null||H)&&D.begin(C,ne);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(P),P=se.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,P,ne),T=Z.get(v,S.length),T.init(P),T.state.textureUnits=Ne.getTextureUnits(),S.push(T),ft.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?gt.setFromArrayCamera(P):Ve.setFromProjectionMatrix(ft,cn,P.reversedDepth),kt=this.localClippingEnabled,dt=J.init(this.clippingPlanes,kt),b=ue.get(v,p.length),b.init(),p.push(b),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){const Ee=C.xr.getDepthSensingMesh();Ee!==null&&Ys(Ee,P,-1/0,C.sortObjects)}Ys(v,P,0,C.sortObjects),b.finish(),U!==null&&U.updateLights(T.state.lightsArray),C.sortObjects===!0&&b.sort(Me,We),Zt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Zt&&R.addToRenderList(b,v),this.info.autoReset===!0&&this.info.reset(),dt===!0&&J.beginShadows();const z=T.state.shadowsArray;if(le.render(z,v,P),dt===!0&&J.endShadows(),(O&&D.hasRenderPass())===!1){const Ee=b.opaque,he=b.transmissive;if(T.setupLights(),P.isArrayCamera){const ve=P.cameras;if(he.length>0)for(let we=0,Fe=ve.length;we<Fe;we++){const qe=ve[we];Ga(Ee,he,v,qe)}Zt&&R.render(v);for(let we=0,Fe=ve.length;we<Fe;we++){const qe=ve[we];ka(b,v,qe,qe.viewport)}}else he.length>0&&Ga(Ee,he,v,P),Zt&&R.render(v),ka(b,v,P)}ne!==null&&k===0&&(Ne.updateMultisampleRenderTarget(ne),Ne.updateRenderTargetMipmap(ne)),O&&D.end(C),v.isScene===!0&&v.onAfterRender(C,v,P),oe.resetDefaultState(),Y=-1,j=null,S.pop(),S.length>0?(T=S[S.length-1],Ne.setTextureUnits(T.state.textureUnits),dt===!0&&J.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,p.pop(),p.length>0?b=p[p.length-1]:b=null,U!==null&&U.renderEnd()};function Ys(v,P,H,O){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){const Ee=P.isArrayCamera?gt:Ve;if(!v.frustumCulled||v.intersectsFrustum(Ee)){O&&Tt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ft);const he=ie.update(v),ve=v.material;ve.visible&&b.push(v,he,ve,H,Tt.z,null,P)}}else if(v.isMesh||v.isLine||v.isPoints){const Ee=P.isArrayCamera?gt:Ve;if(!v.frustumCulled||v.intersectsFrustum(Ee)){const he=ie.update(v),ve=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Tt.copy(v.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Tt.copy(he.boundingSphere.center)),Tt.applyMatrix4(v.matrixWorld).applyMatrix4(ft)),Array.isArray(ve)){const we=he.groups;for(let Fe=0,qe=we.length;Fe<qe;Fe++){const Te=we[Fe],Ye=ve[Te.materialIndex];Ye&&Ye.visible&&b.push(v,he,Ye,H,Tt.z,Te,P)}}else ve.visible&&b.push(v,he,ve,H,Tt.z,null,P)}}}const de=v.children;for(let Ee=0,he=de.length;Ee<he;Ee++)Ys(de[Ee],P,H,O)}function ka(v,P,H,O){const{opaque:z,transmissive:de,transparent:Ee}=v;T.setupLightsView(H),dt===!0&&J.setGlobalState(C.clippingPlanes,H),O&&pe.viewport(te.copy(O)),z.length>0&&ts(z,P,H),de.length>0&&ts(de,P,H),Ee.length>0&&ts(Ee,P,H),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Ga(v,P,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){const Te=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new xn(1,1,{generateMipmaps:!0,type:Te?Mn:qt,minFilter:kn,samples:Math.max(4,ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const de=T.state.transmissionRenderTarget[O.id],Ee=O.viewport||te;de.setSize(Ee.z*C.transmissionResolutionScale,Ee.w*C.transmissionResolutionScale);const he=C.getRenderTarget(),ve=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(de),C.getClearColor(V),fe=C.getClearAlpha(),fe<1&&C.setClearColor(16777215,.5),C.clear(),Zt&&R.render(H);const Fe=C.toneMapping;C.toneMapping=Pn;const qe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),dt===!0&&J.setGlobalState(C.clippingPlanes,O),ts(v,H,O),Ne.updateMultisampleRenderTarget(de),Ne.updateRenderTargetMipmap(de),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Ye=0,xt=P.length;Ye<xt;Ye++){const at=P[Ye],{object:st,geometry:Dt,material:be,group:Ot}=at;if(be.side===Rn&&st.layers.test(O.layers)){const et=be.side;be.side=Ht,be.needsUpdate=!0,Ha(st,H,O,Dt,be,Ot),be.side=et,be.needsUpdate=!0,Te=!0}}Te===!0&&(Ne.updateMultisampleRenderTarget(de),Ne.updateRenderTargetMipmap(de))}C.setRenderTarget(he,ve,we),C.setClearColor(V,fe),qe!==void 0&&(O.viewport=qe),C.toneMapping=Fe}function ts(v,P,H){const O=P.isScene===!0?P.overrideMaterial:null;for(let z=0,de=v.length;z<de;z++){const Ee=v[z],{object:he,geometry:ve,group:we}=Ee;let Fe=Ee.material;Fe.allowOverride===!0&&O!==null&&(Fe=O),he.layers.test(H.layers)&&Ha(he,P,H,ve,Fe,we)}}function Ha(v,P,H,O,z,de){U!==null&&z.isNodeMaterial&&U.setObject(v,z),v.onBeforeRender(C,P,H,O,z,de),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(C,P,H,O,v,de),z.transparent===!0&&z.side===Rn&&z.forceSinglePass===!1?(z.side=Ht,z.needsUpdate=!0,C.renderBufferDirect(H,P,O,z,v,de),z.side=ei,z.needsUpdate=!0,C.renderBufferDirect(H,P,O,z,v,de),z.side=Rn):C.renderBufferDirect(H,P,O,z,v,de),v.onAfterRender(C,P,H,O,z,de)}function Va(v){let P=0;for(const H of v)H.texture!==null&&P++;return P}function Ri(v,P,H){P.isScene!==!0&&(P=Kt);const O=Le.get(v),z=T.state.lights,de=T.state.shadowsArray,Ee=z.state.version,he=ee.getParameters(v,z.state,de,P,H,T.state.lightProbeGridArray),ve=ee.getProgramCacheKey(he);let we=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,O.fog=P.fog;const Fe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;O.envMap=w.get(v.envMap||O.environment,Fe),O.envMapRotation=O.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,we===void 0&&(v.addEventListener("dispose",tt),we=new Map,O.programs=we,O.programVariants=new Map);let qe=we.get(ve);if(qe!==void 0){if(O.currentProgram===qe&&O.lightsStateVersion===Ee)return Xa(v,he),qe}else he.uniforms=ee.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,H,he),v.onBeforeCompile(he,C),qe=ee.acquireProgram(he,ve),we.set(ve,qe),O.uniforms=he.uniforms;const Te=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Te.clippingPlanes=J.uniform),Xa(v,he),O.needsLights=ac(v),O.lightsStateVersion=Ee,O.needsLights&&(Te.ambientLightColor.value=z.state.ambient,Te.lightProbe.value=z.state.probe,Te.sunLights.value=z.state.sun,Te.sunLightShadows.value=z.state.sunShadow,Te.directionalLights.value=z.state.directional,Te.directionalLightShadows.value=z.state.directionalShadow,Te.spotLights.value=z.state.spot,Te.spotLightShadows.value=z.state.spotShadow,Te.rectAreaLights.value=z.state.rectArea,Te.ltc_1.value=z.state.rectAreaLTC1,Te.ltc_2.value=z.state.rectAreaLTC2,Te.pointLights.value=z.state.point,Te.pointLightShadows.value=z.state.pointShadow,Te.hemisphereLights.value=z.state.hemi,Te.sunShadowMatrix.value=z.state.sunShadowMatrix,Te.sunShadowCascade.value=z.state.sunShadowCascade,Te.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Te.spotLightMatrix.value=z.state.spotLightMatrix,Te.spotLightMap.value=z.state.spotLightMap,Te.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=Va(T.state.lightProbeGridArray),O.currentProgram=qe,O.uniformsList=null,qe}function ic(v,P,H,O,z){const de=Le.get(v),Ee=de.currentProgram.id+","+O+","+z;let he=de.programVariants.get(Ee);return he===void 0?(he=Ri(v,P,H),de.programVariants.set(Ee,he)):(de.currentProgram=he,de.uniformsList=null,de.outputColorSpace=O,de.toneMapping=z),he}function Wa(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=Is.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Xa(v,P){const H=Le.get(v);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function sc(v,P,H,O,z){P.isScene!==!0&&(P=Kt),Ne.resetTextureUnits();const de=P.fog,Ee=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?P.environment:null,he=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ze.workingColorSpace,ve=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,we=w.get(O.envMap||Ee,ve),Fe=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,qe=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Te=!!H.morphAttributes.position,Ye=!!H.morphAttributes.normal,xt=!!H.morphAttributes.color;let at=Pn;O.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(at=C.toneMapping);const st=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Dt=st!==void 0?st.length:0,be=Le.get(O),Ot=T.state.lights;if(dt===!0&&(kt===!0||v!==j)){const pt=v===j&&O.id===Y;J.setState(O,v,pt)}let et=!1,qn=!1;O.version===be.__version?be.needsLights&&be.lightsStateVersion!==Ot.state.version||z.isBatchedMesh&&be.batching===!1||!z.isBatchedMesh&&be.batching===!0||z.isBatchedMesh&&be.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&be.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&be.instancing===!1||!z.isInstancedMesh&&be.instancing===!0||z.isSkinnedMesh&&be.skinning===!1||!z.isSkinnedMesh&&be.skinning===!0||z.isInstancedMesh&&be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&be.instancingMorph===!1&&z.morphTexture!==null||be.envMap!==we||O.fog===!0&&be.fog!==de||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==J.numPlanes||be.numIntersection!==J.numIntersection)||be.vertexAlphas!==Fe||be.vertexTangents!==qe||be.morphTargets!==Te||be.morphNormals!==Ye||be.morphColors!==xt||be.morphTargetsCount!==Dt||be.numLightProbeGrids!==Va(T.state.lightProbeGridArray)?et=!0:(be.outputColorSpace!==he||be.toneMapping!==at)&&(qn=!0):(et=!0,be.__version=O.version);let It=be.currentProgram;(et===!0||qn===!0)&&(It=qn===!0?ic(O,P,z,he,at):Ri(O,P,z),U&&O.isNodeMaterial&&U.onUpdateProgram(O,It,be));let ns=!1,In=!1,Yn=!1;const Je=It.getUniforms(),Pt=be.uniforms;if(pe.useProgram(It.program)&&(ns=!0,In=!0,Yn=!0),O.id!==Y&&(Y=O.id,In=!0),ns||j!==v){pe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Je.setValue(N,"projectionMatrix",v.projectionMatrix),Je.setValue(N,"viewMatrix",v.matrixWorldInverse);const wt=Je.map.cameraPosition;wt!==void 0&&wt.setValue(N,hn.setFromMatrixPosition(v.matrixWorld)),ct.logarithmicDepthBuffer&&Je.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Je.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),j!==v&&(j=v,In=!0,Yn=!0)}if(be.needsLights&&(Ot.state.sunShadowMap.length>0&&Je.setValue(N,"sunShadowMap",Ot.state.sunShadowMap,Ne),Ot.state.directionalShadowMap.length>0&&Je.setValue(N,"directionalShadowMap",Ot.state.directionalShadowMap,Ne),Ot.state.spotShadowMap.length>0&&Je.setValue(N,"spotShadowMap",Ot.state.spotShadowMap,Ne),Ot.state.pointShadowMap.length>0&&Je.setValue(N,"pointShadowMap",Ot.state.pointShadowMap,Ne)),z.isSkinnedMesh){Je.setOptional(N,z,"bindMatrix"),Je.setOptional(N,z,"bindMatrixInverse");const pt=z.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),Je.setValue(N,"boneTexture",pt.boneTexture,Ne))}z.isBatchedMesh&&(Je.setOptional(N,z,"batchingTexture"),Je.setValue(N,"batchingTexture",z._matricesTexture,Ne),Je.setOptional(N,z,"batchingIdTexture"),Je.setValue(N,"batchingIdTexture",z._indirectTexture,Ne),Je.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&Je.setValue(N,"batchingColorTexture",z._colorsTexture,Ne));const en=H.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Q.update(z,H,It),(In||be.receiveShadow!==z.receiveShadow)&&(be.receiveShadow=z.receiveShadow,Je.setValue(N,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&P.environment!==null&&(Pt.envMapIntensity.value=P.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=Am()),In){if(Je.setValue(N,"toneMappingExposure",C.toneMappingExposure),be.needsLights&&rc(Pt,Yn),de&&O.fog===!0&&ae.refreshFogUniforms(Pt,de),ae.refreshMaterialUniforms(Pt,O,ge,Re,T.state.transmissionRenderTarget[v.id]),be.needsLights&&be.numLightProbeGrids>0){const pt=E;let wt=0;for(const Sn of T.state.lightProbeGridArray)Sn.texture!==null&&(pt.textures[wt]=Sn.texture,pt.min[wt]=Sn.boundingBox.min,pt.max[wt]=Sn.boundingBox.max,pt.resolution[wt]=Sn.resolution,wt++);for(const Sn in pt)pt[Sn].length=wt;Pt.probesSH.value=pt.textures,Pt.probesMin.value=pt.min,Pt.probesMax.value=pt.max,Pt.probesResolution.value=pt.resolution}Is.upload(N,Wa(be),Pt,Ne)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Is.upload(N,Wa(be),Pt,Ne),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Je.setValue(N,"center",z.center),Je.setValue(N,"modelViewMatrix",z.modelViewMatrix),Je.setValue(N,"normalMatrix",z.normalMatrix),Je.setValue(N,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){const pt=O.uniformsGroups;for(let wt=0,Sn=pt.length;wt<Sn;wt++){const Ya=pt[wt];Ae.update(Ya,It),Ae.bind(Ya,It)}}return It}function rc(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.sunLights.needsUpdate=P,v.sunLightShadows.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function ac(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(v,P,H){const O=Le.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Le.get(v.texture).__webglTexture=P,Le.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,P){const H=Le.get(v);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,H=0){ne=v,$=P,k=H;let O=null,z=!1,de=!1;if(v){const he=Le.get(v);if(he.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(N.FRAMEBUFFER,he.__webglFramebuffer),te.copy(v.viewport),q.copy(v.scissor),me=v.scissorTest,pe.viewport(te),pe.scissor(q),pe.setScissorTest(me),Y=-1;return}else if(he.__webglFramebuffer===void 0)Ne.setupRenderTarget(v);else if(he.__hasExternalTextures)Ne.rebindTextures(v,Le.get(v.texture).__webglTexture,Le.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Fe=v.depthTexture;if(he.__boundDepthTexture!==Fe){if(Fe!==null&&Le.has(Fe)&&(v.width!==Fe.image.width||v.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(v)}}const ve=v.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(de=!0);const we=Le.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(we[P])?O=we[P][H]:O=we[P],z=!0):v.samples>0&&Ne.useMultisampledRTT(v)===!1?O=Le.get(v).__webglMultisampledFramebuffer:Array.isArray(we)?O=we[H]:O=we,te.copy(v.viewport),q.copy(v.scissor),me=v.scissorTest}else te.copy(Pe).multiplyScalar(ge).floor(),q.copy(je).multiplyScalar(ge).floor(),me=it;if(H!==0&&(O=X),pe.bindFramebuffer(N.FRAMEBUFFER,O)&&pe.drawBuffers(v,O),pe.viewport(te),pe.scissor(q),pe.setScissorTest(me),z){const he=Le.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,he.__webglTexture,H)}else if(de){const he=P;for(let ve=0;ve<v.textures.length;ve++){const we=Le.get(v.textures[ve]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ve,we.__webglTexture,H,he)}}else if(v!==null&&H!==0){const he=Le.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,he.__webglTexture,H)}Y=-1};function qa(v){const P=Le.get(v);return(P.__readFormat!==v.format||P.__readType!==v.type)&&(P.__readFormat=v.format,P.__readType=v.type,P.__formatReadable=ct.textureFormatReadable(v.format),P.__typeReadable=ct.textureTypeReadable(v.type)),P}this.readRenderTargetPixels=function(v,P,H,O,z,de,Ee,he=0){if(!(v&&v.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Le.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ee!==void 0&&(ve=ve[Ee],Array.isArray(ve)&&(ve=ve[0])),ve){pe.bindFramebuffer(N.FRAMEBUFFER,ve);try{const we=v.textures[he],Fe=we.format,qe=we.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+he);const Te=qa(we);if(Te.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-O&&H>=0&&H<=v.height-z&&N.readPixels(P,H,O,z,re.convert(Fe),re.convert(qe),de)}finally{const we=ne!==null?Le.get(ne).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(v,P,H,O,z,de,Ee,he=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Le.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ee!==void 0&&(ve=ve[Ee],Array.isArray(ve)&&(ve=ve[0])),ve)if(P>=0&&P<=v.width-O&&H>=0&&H<=v.height-z){pe.bindFramebuffer(N.FRAMEBUFFER,ve);const we=v.textures[he],Fe=we.format,qe=we.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+he);const Te=qa(we);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ye),N.bufferData(N.PIXEL_PACK_BUFFER,de.byteLength,N.STREAM_READ),N.readPixels(P,H,O,z,re.convert(Fe),re.convert(qe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const xt=ne!==null?Le.get(ne).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,xt);const at=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Xc(N,at,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ye),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,de),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Ye),N.deleteSync(at),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,P=null,H=0){const O=Math.pow(2,-H),z=Math.floor(v.image.width*O),de=Math.floor(v.image.height*O),Ee=P!==null?P.x:0,he=P!==null?P.y:0;Ne.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,Ee,he,z,de),pe.unbindTexture()},this.copyTextureToTexture=function(v,P,H=null,O=null,z=0,de=0){let Ee,he,ve,we,Fe,qe,Te,Ye,xt;const at=v.isCompressedTexture?v.mipmaps[de]:v.image;if(H!==null)Ee=H.max.x-H.min.x,he=H.max.y-H.min.y,ve=H.isBox3?H.max.z-H.min.z:1,we=H.min.x,Fe=H.min.y,qe=H.isBox3?H.min.z:0;else{const Je=Math.pow(2,-z);Ee=Math.floor(at.width*Je),he=Math.floor(at.height*Je),v.isDataArrayTexture?ve=at.depth:v.isData3DTexture?ve=Math.floor(at.depth*Je):ve=1,we=0,Fe=0,qe=0}O!==null?(Te=O.x,Ye=O.y,xt=O.z):(Te=0,Ye=0,xt=0);const st=re.convert(P.format),Dt=re.convert(P.type);let be;P.isData3DTexture?(Ne.setTexture3D(P,0),be=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Ne.setTexture2DArray(P,0),be=N.TEXTURE_2D_ARRAY):(Ne.setTexture2D(P,0),be=N.TEXTURE_2D),pe.activeTexture(N.TEXTURE0),pe.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),pe.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),pe.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);const Ot=pe.getParameter(N.UNPACK_ROW_LENGTH),et=pe.getParameter(N.UNPACK_IMAGE_HEIGHT),qn=pe.getParameter(N.UNPACK_SKIP_PIXELS),It=pe.getParameter(N.UNPACK_SKIP_ROWS),ns=pe.getParameter(N.UNPACK_SKIP_IMAGES);pe.pixelStorei(N.UNPACK_ROW_LENGTH,at.width),pe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at.height),pe.pixelStorei(N.UNPACK_SKIP_PIXELS,we),pe.pixelStorei(N.UNPACK_SKIP_ROWS,Fe),pe.pixelStorei(N.UNPACK_SKIP_IMAGES,qe);const In=v.isDataArrayTexture||v.isData3DTexture,Yn=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){const Je=Le.get(v),Pt=Le.get(P),en=Le.get(Je.__renderTarget),pt=Le.get(Pt.__renderTarget);pe.bindFramebuffer(N.READ_FRAMEBUFFER,en.__webglFramebuffer),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let wt=0;wt<ve;wt++)In&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.get(v).__webglTexture,z,qe+wt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.get(P).__webglTexture,de,xt+wt)),N.blitFramebuffer(we,Fe,we+Ee,Fe+he,Te,Ye,Te+Ee,Ye+he,N.DEPTH_BUFFER_BIT,N.NEAREST);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||Le.has(v)){const Je=Le.get(v),Pt=Le.get(P);pe.bindFramebuffer(N.READ_FRAMEBUFFER,L),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,G);for(let en=0;en<ve;en++)In?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Je.__webglTexture,z,qe+en):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Je.__webglTexture,z),Yn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pt.__webglTexture,de,xt+en):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pt.__webglTexture,de),z!==0?N.blitFramebuffer(we,Fe,we+Ee,Fe+he,Te,Ye,Te+Ee,Ye+he,N.COLOR_BUFFER_BIT,N.NEAREST):Yn?N.copyTexSubImage3D(be,de,Te,Ye,xt+en,we,Fe,Ee,he):N.copyTexSubImage2D(be,de,Te,Ye,we,Fe,Ee,he);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Yn?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(be,de,Te,Ye,xt,Ee,he,ve,st,Dt,at.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(be,de,Te,Ye,xt,Ee,he,ve,st,at.data):N.texSubImage3D(be,de,Te,Ye,xt,Ee,he,ve,st,Dt,at):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,de,Te,Ye,Ee,he,st,Dt,at.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,de,Te,Ye,at.width,at.height,st,at.data):N.texSubImage2D(N.TEXTURE_2D,de,Te,Ye,Ee,he,st,Dt,at);pe.pixelStorei(N.UNPACK_ROW_LENGTH,Ot),pe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,et),pe.pixelStorei(N.UNPACK_SKIP_PIXELS,qn),pe.pixelStorei(N.UNPACK_SKIP_ROWS,It),pe.pixelStorei(N.UNPACK_SKIP_IMAGES,ns),de===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&N.generateMipmap(be),pe.unbindTexture()},this.initRenderTarget=function(v){Le.get(v).__webglFramebuffer===void 0&&Ne.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ne.setTextureCube(v,0):v.isData3DTexture?Ne.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ne.setTexture2DArray(v,0):Ne.setTexture2D(v,0),pe.unbindTexture()},this.resetState=function(){$=0,k=0,ne=null,pe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}const De={map:{half:60,seed:1720},camera:{viewHeight:22,offsetY:24,offsetZ:17,shakeDecay:7},player:{maxHp:100,baseMana:100,upgradedMana:150,manaRegen:9,radius:.45,speed:4.6,dashSpeed:13.5,dashTime:.22,dashCooldown:1.1,hitIFrames:.8,interactRange:2.2,heal:35,sword:{damage:22,upgradedDamage:34,range:2.4,upgradedRange:2.8,arcHalf:.95,cooldown:.42,swingTime:.26},pistol:{damage:70,reload:1.8,range:22},holy:{manaCost:35,cooldown:7,damage:45,length:7,halfAngle:.6,stun:1.8,flashTime:.5},seal:{manaCost:40,cooldown:2,duration:9,radius:4.2,upgradedRadius:5.5,reduction:.5,upgradedReduction:.7}},enemies:{soldier:{hp:45,speed:2.5,damage:14,range:1.9,windup:.8,cooldown:1.3,detect:12,radius:.45,towerDamage:8},musketeer:{hp:32,speed:2,damage:13,minRange:4.5,maxRange:9,windup:1.1,cooldown:2.4,detect:15,radius:.45,towerDamage:6,shotSpeed:9,shotRange:18},executioner:{hp:300,speed:2,enragedSpeed:2.8,damage:30,pursuitDamage:20,range:3,windup:1.3,cooldown:1.8,chargeCooldown:7,chargeWindup:1.3,chargeSpeed:11,chargeTime:.7,chargeDamage:24,radius:.6,towerDamage:25,chargeTowerDamage:15,pursuitSpeed:3.1,pursuitTime:45,stunTime:2.5,pursuitStuns:3}},tower:{x:0,z:-44,radius:3.4,maxProtection:100,defenseRadius:10,approachRadius:14,interactDistance:6.5,waveDelay:4,bossDelay:3},waves:[{soldiers:4,musketeers:2},{soldiers:5,musketeers:3}]};class Cm{constructor(){W(this,"ctx",null);W(this,"master",null);W(this,"noise",null);W(this,"muted",!1);W(this,"paused",!1);W(this,"bellTimer",0);W(this,"music",null)}get isMuted(){return this.muted}unlock(){if(!this.paused){if(!this.ctx){const e=window.AudioContext??window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.6,this.master.connect(this.ctx.destination),this.noise=this.makeNoise(),this.startDrone()}this.ctx.state==="suspended"&&this.ctx.resume(),this.startMusic()}}setMuted(e){this.muted=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?0:.6,this.ctx.currentTime,.05),this.music&&(this.music.muted=e)}toggleMuted(){return this.setMuted(!this.muted),this.muted}suspend(){this.paused=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend(),this.music?.pause()}resume(){this.paused=!1,this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.startMusic()}startMusic(){this.paused||(this.music||(this.music=new Audio("./music.mp3"),this.music.loop=!0,this.music.volume=.45,this.music.muted=this.muted),this.music.paused&&this.music.play().catch(()=>{}))}update(e){this.ctx&&(this.bellTimer-=e,this.bellTimer<=0&&(this.bellTimer=28+Math.random()*14,this.play("bell")))}play(e){const t=this.ctx,n=this.master;if(!t||!n||t.state!=="running")return;const s=t.currentTime;switch(e){case"swing":this.noiseBurst(.18,.25,1800,s,"bandpass");break;case"shot":this.noiseBurst(.25,.7,900,s,"lowpass"),this.tone(160,.2,"sawtooth",.25,s,60);break;case"reload":this.tone(900,.05,"square",.12,s),this.tone(640,.06,"square",.12,s+.35);break;case"holy":this.tone(520,.9,"sine",.18,s,1040),this.tone(780,.8,"triangle",.1,s+.05,1560);break;case"seal":this.tone(330,1.2,"sine",.22,s,660),this.tone(495,1.2,"sine",.12,s+.1,990);break;case"hit":this.noiseBurst(.12,.45,2400,s,"highpass"),this.tone(220,.12,"square",.12,s,90);break;case"hurt":this.tone(180,.35,"sawtooth",.3,s,70),this.noiseBurst(.2,.3,700,s,"lowpass");break;case"pickup":this.tone(660,.12,"sine",.2,s),this.tone(990,.18,"sine",.2,s+.08);break;case"upgrade":[392,523,659,784].forEach((r,a)=>this.tone(r,.5,"triangle",.18,s+a*.09));break;case"stomp":this.tone(70,.3,"sine",.7,s,40),this.noiseBurst(.1,.25,400,s,"lowpass");break;case"bell":this.tone(196,3.2,"sine",.16,s),this.tone(293,3,"sine",.07,s+.02);break;case"twig":this.noiseBurst(.06,.5,3200,s,"highpass"),this.tone(900,.05,"square",.08,s+.02,300);break;case"heartbeat":this.tone(60,.18,"sine",.6,s,45),this.tone(55,.16,"sine",.45,s+.22,40);break;case"warn":this.tone(440,.25,"square",.12,s),this.tone(440,.25,"square",.12,s+.35);break;case"death":this.tone(300,1,"sawtooth",.2,s,50),this.noiseBurst(.6,.3,500,s,"lowpass");break;case"victory":[523,659,784,1046].forEach((r,a)=>this.tone(r,.8,"triangle",.2,s+a*.2));break;case"defeat":[330,277,220,165].forEach((r,a)=>this.tone(r,.9,"sawtooth",.14,s+a*.35,r*.8));break}}makeNoise(){const e=this.ctx,t=e.sampleRate*2,n=e.createBuffer(1,t,e.sampleRate),s=n.getChannelData(0);for(let r=0;r<t;r++)s[r]=Math.random()*2-1;return n}startDrone(){const e=this.ctx,t=this.master,n=e.createOscillator();n.type="sine",n.frequency.value=52;const s=e.createGain();s.gain.value=.05,n.connect(s).connect(t),n.start();const r=e.createBufferSource();r.buffer=this.noise,r.loop=!0;const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=380,a.Q.value=.7;const o=e.createGain();o.gain.value=.05,r.connect(a).connect(o).connect(t),r.start()}tone(e,t,n,s,r,a){const o=this.ctx,c=this.master,l=o.createOscillator(),h=o.createGain();l.type=n,l.frequency.setValueAtTime(e,r),a!==void 0&&l.frequency.exponentialRampToValueAtTime(Math.max(20,a),r+t),h.gain.setValueAtTime(1e-4,r),h.gain.exponentialRampToValueAtTime(s,r+.01),h.gain.exponentialRampToValueAtTime(1e-4,r+t),l.connect(h).connect(c),l.start(r),l.stop(r+t+.05)}noiseBurst(e,t,n,s,r){const a=this.ctx,o=this.master,c=a.createBufferSource();c.buffer=this.noise;const l=a.createBiquadFilter();l.type=r,l.frequency.value=n;const h=a.createGain();h.gain.setValueAtTime(t,s),h.gain.exponentialRampToValueAtTime(1e-4,s+e),c.connect(l).connect(h).connect(o),c.start(s,Math.random()),c.stop(s+e+.05)}}function Gs(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const Pm=(i,e,t)=>Math.min(t,Math.max(e,i)),_t=(i,e,t,n)=>Math.hypot(i-t,e-n);function Jl(i,e){let t=(i-e)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function Zo(i,e,t){const n=Jl(e,i);return Math.abs(n)<=t?e:i+Math.sign(n)*t}const zi={x:0,z:48},$o=[[zi,{x:0,z:38},{x:-14,z:32},{x:-28,z:26}],[{x:-28,z:26},{x:-12,z:22},{x:8,z:20},{x:30,z:14}],[{x:30,z:14},{x:16,z:0},{x:-4,z:-10},{x:-26,z:-18}],[{x:-26,z:-18},{x:-14,z:-28},{x:-6,z:-38},{x:0,z:-44}]],Jo=[{x:-8,z:31},{x:14,z:18},{x:6,z:-6},{x:-18,z:-24}],Hi={x:-26,z:-18},pn={camp:{name:"den forladte lejr",center:{x:-28,z:26},radius:11,seal:{x:-31,z:24},spawns:[{kind:"soldier",count:3}]},lund:{name:"De dødes lund",center:{x:30,z:14},radius:12,seal:{x:33,z:12},spawns:[{kind:"soldier",count:2},{kind:"musketeer",count:3}]},chapel:{name:"det ødelagte kapel",center:Hi,radius:11,seal:{x:Hi.x,z:Hi.z+.5},spawns:[{kind:"soldier",count:2},{kind:"musketeer",count:1}]}};function Lm(i,e,t){let n=1/0;for(let s=0;s<t.length-1;s++){const r=t[s],a=t[s+1],o=a.x-r.x,c=a.z-r.z,l=o*o+c*c||1,h=Math.max(0,Math.min(1,((i-r.x)*o+(e-r.z)*c)/l));n=Math.min(n,_t(i,e,r.x+o*h,r.z+c*h))}return n}function Dm(){const i=Gs(De.map.seed),e=De.map.half,t={x:De.tower.x,z:De.tower.z,r:De.tower.radius},n={};Object.keys(pn).forEach(u=>{n[u]={id:u,...pn[u]}});const s=[],r=[t],a=[zi,...Jo,...Object.values(n).map(u=>u.seal)],o=u=>{s.push(u),u.solid&&r.push(u)};for(let u=0;u<9;u++){const m=u/9*Math.PI*2+.2;if(u===0||u===8)continue;const _=5.5;o({kind:"ruinWall",x:Hi.x+Math.cos(m)*_,z:Hi.z+Math.sin(m)*_,r:1,rot:m,scale:.8+u*37%5*.12,solid:!0})}o({kind:"wreck",x:-34,z:31,r:1.3,rot:.4,scale:1,solid:!0});const c=(u,m,_,y)=>{if(Math.abs(u)>e-4||Math.abs(m)>e-4)return!1;for(const f of r)if(_t(u,m,f.x,f.z)<f.r+_+y)return!1;for(const f of a)if(_t(u,m,f.x,f.z)<2.8)return!1;for(const f of $o)if(Lm(u,m,f)<3.4+_)return!1;if(_t(u,m,t.x,t.z)<7.5||_t(u,m,zi.x,zi.z)<7)return!1;for(const f of Object.values(n))if(_t(u,m,f.center.x,f.center.z)<f.radius*.7)return!1;return!0},l={camp:4,lund:12,chapel:4};Object.keys(l).forEach(u=>{const m=n[u];let _=0;for(let y=0;y<400&&_<l[u];y++){const f=i()*Math.PI*2,d=4+i()*(m.radius-4.5),M=m.center.x+Math.cos(f)*d,A=m.center.z+Math.sin(f)*d;c(M,A,.4,.4)&&(o({kind:"grave",x:M,z:A,r:.38,rot:i()*.5-.25,scale:.9+i()*.3,solid:!0}),_++)}});let h=0;for(let u=0;u<900&&h<185;u++){const m=(i()*2-1)*(e-4),_=(i()*2-1)*(e-4),y=.55;if(!c(m,_,y,.8))continue;const f=i()<.18;o({kind:f?"dead":"tree",x:m,z:_,r:f?.42:y,rot:i()*Math.PI*2,scale:.85+i()*.45,solid:!0}),h++}let g=0;for(let u=0;u<800&&g<90;u++){const m=(i()*2-1)*(e-4),_=(i()*2-1)*(e-4);c(m,_,.5,.2)&&(o({kind:"bush",x:m,z:_,r:.5,rot:i()*6,scale:.7+i()*.6,solid:!1}),g++)}return{zones:n,props:s,solids:r,paths:$o,start:zi,pickups:Jo,tower:t}}function pa(i,e,t,n){const s=n-1;i.x=Math.max(-s,Math.min(s,i.x)),i.z=Math.max(-s,Math.min(s,i.z));for(const r of t){const a=i.x-r.x,o=i.z-r.z,c=Math.hypot(a,o),l=r.r+e;if(c<l&&c>1e-6){const h=(l-c)/c;i.x+=a*h,i.z+=o*h}else c<=1e-6&&(i.x+=l)}}function Hs(i,e,t,n,s){if(Math.abs(i)>s-1||Math.abs(e)>s-1)return!1;for(const r of n)if(_t(i,e,r.x,r.z)<r.r+t)return!1;return!0}const Qo=1.3,Im=.25,jo="#d9523a",Qn="#7dff6a";function ws(i,e,t,n,s,r,a,o){const c=r-i,l=a-e,h=Math.hypot(c,l);if(h>s+o)return!1;if(h<=o)return!0;const g=Math.atan2(c,l);return Math.abs(Jl(g,t))<=n+Math.asin(Math.min(1,o/h))}class Nm{constructor(e,t,n){W(this,"projectiles",[]);W(this,"shotGeo",new wi(.14,8,6));W(this,"playerMat",new Rt({color:"#ffd27a"}));W(this,"enemyMat",new Rt({color:Qn}));this.scene=e,this.fx=t,this.sfx=n}swing(e,t){this.fx.sector(e.x,e.z,e.facing,e.arcHalf,e.range,De.player.sword.swingTime,"#f2e6b8"),this.sfx("swing");let n=0;for(const s of t)s.alive&&ws(e.x,e.z,e.facing,e.arcHalf,e.range,s.x,s.z,s.radius)&&s.receiveHit(e.damage,0,e.x,e.z)&&(n++,this.fx.burst(s.x,1,s.z,"#c83a2b",10,4));return n>0&&this.sfx("hit"),n}fire(e){this.fx.flash(e.x+e.dirX*.6,Qo,e.z+e.dirZ*.6,"#ffd27a"),this.sfx("shot"),this.spawn(e.x,e.z,e.dirX,e.dirZ,!1,e.damage,0,42,De.player.pistol.range)}holy(e,t){this.fx.cone(e.x,e.z,e.facing,e.length,e.halfAngle,De.player.holy.flashTime,"#c9ffb0"),this.sfx("holy");let n=0;for(const s of t)s.alive&&ws(e.x,e.z,e.facing,e.halfAngle,e.length,s.x,s.z,s.radius)&&s.receiveHit(e.damage,e.stun,e.x,e.z)&&(n++,this.fx.burst(s.x,1,s.z,"#c9ffb0",12,3.5));return n}update(e,t){const n={playerDamage:0,towerDamage:0};for(const s of t.enemies)for(const r of s.takeEvents())switch(r.type){case"telegraph":this.showTelegraph(r.telegraph);break;case"strike":this.resolveStrike(r.strike,t,n);break;case"enraged":this.fx.ring(s.x,s.z,3,.6,Qn),this.sfx("warn");break;case"died":this.fx.burst(s.x,1,s.z,Qn,16,3),this.sfx("death");break;case"vanished":this.fx.burst(s.x,1,s.z,Qn,24,2),this.sfx("warn");break}for(const s of t.enemies){if(!s.chargeCanHit)continue;const r=t.tower;t.towerExposed&&_t(s.x,s.z,r.x,r.z)<=s.radius+r.r?(n.towerDamage+=De.enemies.executioner.chargeTowerDamage,s.markChargeHit(),this.fx.ring(r.x,r.z,r.r+.5,.5,Qn),this.sfx("stomp")):_t(s.x,s.z,t.player.x,t.player.z)<=s.radius+De.player.radius+.1&&(n.playerDamage+=this.hurtPlayer(De.enemies.executioner.chargeDamage,t.player),s.markChargeHit(),this.sfx("stomp"))}return this.stepProjectiles(e,t,n),n}clear(){for(const e of this.projectiles)this.scene.remove(e.mesh);this.projectiles.length=0}dispose(){this.clear(),this.shotGeo.dispose(),this.playerMat.dispose(),this.enemyMat.dispose()}showTelegraph(e){e.shape==="sector"?this.fx.sector(e.x,e.z,e.facing,e.arcHalf,e.radius,e.duration,jo):this.fx.line(e.x,e.z,e.facing,e.length,e.width,e.duration,jo)}resolveStrike(e,t,n){if(e.kind==="shot"){this.spawn(e.x,e.z,e.dirX,e.dirZ,!0,e.damage,e.towerDamage,De.enemies.musketeer.shotSpeed,De.enemies.musketeer.shotRange,e.y);return}const s=t.player;if(ws(e.x,e.z,e.facing,e.arcHalf,e.range,s.x,s.z,De.player.radius)){n.playerDamage+=this.hurtPlayer(e.damage,s);return}const r=t.tower;t.towerExposed&&e.towerDamage>0&&ws(e.x,e.z,e.facing,e.arcHalf,e.range,r.x,r.z,r.r)&&(n.towerDamage+=e.towerDamage,this.fx.burst(r.x,2,r.z,Qn,8,2.5),this.sfx("hit"))}hurtPlayer(e,t){const n=t.takeDamage(e);return n>0&&(this.fx.burst(t.x,1.2,t.z,"#ff5a4a",12,4),this.sfx("hurt")),n}spawn(e,t,n,s,r,a,o,c,l,h=Qo){const g=new ye(this.shotGeo,r?this.enemyMat:this.playerMat);g.position.set(e,h,t),g.scale.setScalar(r?1:.8),this.scene.add(g),this.projectiles.push({mesh:g,x:e,y:h,z:t,dx:n,dz:s,speed:c,travelled:0,maxRange:l,damage:a,towerDamage:o,fromEnemy:r})}stepProjectiles(e,t,n){for(let s=this.projectiles.length-1;s>=0;s--){const r=this.projectiles[s],a=r.speed*e,o=Math.max(1,Math.ceil(a/Im)),c=a/o;let l=!1;for(let h=0;h<o&&!l;h++){const g=r.x,u=r.z;if(r.x+=r.dx*c,r.z+=r.dz*c,r.travelled+=c,r.travelled>=r.maxRange||!Hs(r.x,r.z,.05,t.solids,t.half)){l=!0;break}if(r.fromEnemy)t.towerExposed&&_t(r.x,r.z,t.tower.x,t.tower.z)<=t.tower.r+.15?(n.towerDamage+=r.towerDamage,this.fx.burst(r.x,r.y,r.z,Qn,8,2.5),l=!0):_t(r.x,r.z,t.player.x,t.player.z)<=De.player.radius+.15&&(n.playerDamage+=this.hurtPlayer(r.damage,t.player),l=!0);else for(const m of t.enemies)if(m.alive&&_t(r.x,r.z,m.x,m.z)<=m.radius+.2){m.receiveHit(r.damage,0,g,u)&&this.fx.burst(m.x,1.2,m.z,"#c83a2b",10,4),this.sfx("hit"),l=!0;break}}r.mesh.position.set(r.x,r.y,r.z),l&&(this.scene.remove(r.mesh),this.projectiles.splice(s,1))}}}const el=220;class Um{constructor(e){W(this,"items",[]);W(this,"root",new zt);e.add(this.root)}sector(e,t,n,s,r,a,o){const c=new jn(r,28,n-Math.PI/2-s,s*2);c.rotateX(-Math.PI/2);const l=new Rt({color:o,transparent:!0,opacity:.2,depthWrite:!1}),h=new ye(c,l);h.position.set(e,.05,t),this.add({obj:h,mat:l,geo:c,life:a,rampUp:!0,baseOpacity:.55,gravity:0,grow:0})}line(e,t,n,s,r,a,o){const c=new Xe(r,.02,s);c.translate(0,0,s/2);const l=new Rt({color:o,transparent:!0,opacity:.2,depthWrite:!1}),h=new ye(c,l);h.position.set(e,.06,t),h.rotation.y=n,this.add({obj:h,mat:l,geo:c,life:a,rampUp:!0,baseOpacity:.7,gravity:0,grow:0})}ring(e,t,n,s,r){const a=new ji(1,.08,6,40);a.rotateX(Math.PI/2);const o=new Rt({color:r,transparent:!0,opacity:.9,depthWrite:!1}),c=new ye(a,o);c.position.set(e,.3,t),c.scale.setScalar(.2),this.add({obj:c,mat:o,geo:a,life:s,rampUp:!1,baseOpacity:.9,gravity:0,grow:n})}cone(e,t,n,s,r,a,o){const c=new jn(s,24,n-Math.PI/2-r,r*2);c.rotateX(-Math.PI/2);const l=new Rt({color:o,transparent:!0,opacity:.6,depthWrite:!1}),h=new ye(c,l);h.position.set(e,.9,t),this.add({obj:h,mat:l,geo:c,life:a,rampUp:!1,baseOpacity:.6,gravity:0,grow:0})}disc(e,t,n,s,r,a){const o=new jn(n,36);o.rotateX(-Math.PI/2);const c=new Rt({color:r,transparent:!0,opacity:a,depthWrite:!1}),l=new ye(o,c);return l.position.set(e,.07,t),this.add({obj:l,mat:c,geo:o,life:s,rampUp:!1,baseOpacity:a,gravity:0,grow:0}),l}burst(e,t,n,s,r,a){for(let o=0;o<r;o++){if(this.items.length>=el)return;const c=new Xe(.12,.12,.12),l=new Rt({color:s,transparent:!0,opacity:1,depthWrite:!1}),h=new ye(c,l);h.position.set(e,t,n);const g=Math.random()*Math.PI*2,u=a*(.4+Math.random()*.6),m=new F(Math.cos(g)*u,1+Math.random()*a*.6,Math.sin(g)*u);this.add({obj:h,mat:l,geo:c,life:.45+Math.random()*.25,vel:m,gravity:9,rampUp:!1,baseOpacity:1,grow:0})}}flash(e,t,n,s){const r=new wi(.35,8,6),a=new Rt({color:s,transparent:!0,opacity:1,depthWrite:!1}),o=new ye(r,a);o.position.set(e,t,n),this.add({obj:o,mat:a,geo:r,life:.12,rampUp:!1,baseOpacity:1,gravity:0,grow:0})}update(e){for(let t=this.items.length-1;t>=0;t--){const n=this.items[t];n.age+=e;const s=Math.min(1,n.age/n.life);n.vel&&(n.vel.y-=n.gravity*e,n.obj.position.addScaledVector(n.vel,e),n.obj.position.y<.05&&n.vel.set(0,0,0)),n.grow>0&&n.obj.scale.setScalar(.2+(n.grow-.2)*s),n.rampUp?n.mat.opacity=n.baseOpacity*(.25+.75*s):n.mat.opacity=n.baseOpacity*(1-s),s>=1&&this.remove(t)}}clear(){for(let e=this.items.length-1;e>=0;e--)this.remove(e)}add(e){this.items.length>=el&&this.remove(0),this.root.add(e.obj),this.items.push({...e,age:0})}remove(e){const t=this.items[e];this.root.remove(t.obj),t.geo.dispose(),t.mat.dispose(),this.items.splice(e,1)}}const Fm={KeyQ:"holy",KeyE:"seal",Space:"dash",KeyF:"interact",Escape:"pause",KeyM:"mute"},Om={KeyW:[0,-1],ArrowUp:[0,-1],KeyS:[0,1],ArrowDown:[0,1],KeyA:[-1,0],ArrowLeft:[-1,0],KeyD:[1,0],ArrowRight:[1,0]};class Bm{constructor(e){W(this,"held",new Set);W(this,"pending",new Set);W(this,"pointer",{x:0,y:0});W(this,"canvas");this.canvas=e,window.addEventListener("keydown",t=>this.onKeyDown(t)),window.addEventListener("keyup",t=>this.held.delete(t.code)),window.addEventListener("blur",()=>this.held.clear()),window.addEventListener("mousemove",t=>this.onMove(t)),e.addEventListener("mousedown",t=>this.onMouseDown(t)),e.addEventListener("contextmenu",t=>t.preventDefault())}get move(){let e=0,t=0;for(const s of this.held){const r=Om[s];r&&(e+=r[0],t+=r[1])}const n=Math.hypot(e,t);return n>0?{x:e/n,z:t/n}:{x:0,z:0}}consume(e){return this.pending.has(e)?(this.pending.delete(e),!0):!1}clearPending(){this.pending.clear()}onKeyDown(e){if((e.code==="Space"||e.code.startsWith("Arrow"))&&e.preventDefault(),e.repeat)return;this.held.add(e.code);const t=Fm[e.code];t&&this.pending.add(t)}onMove(e){const t=this.canvas.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height*2-1)}onMouseDown(e){this.onMove(e),e.button===0?this.pending.add("attack"):e.button===2&&this.pending.add("fire")}}const ot={leg:new Xe(.22,.9,.22),torso:new Xe(.6,.8,.36),skirt:new Xe(.66,.5,.44),cape:new Xe(.72,1.25,.08),head:new Xe(.32,.34,.32),wig:new Xe(.36,.2,.34),arm:new Xe(.2,.7,.2),hand:new Xe(.16,.14,.16),belt:new Xe(.64,.07,.4),trim:new Xe(.62,.08,.38),hat:new Xe(.5,.12,.24),crown:new Yt(.2,.22,.12,8),crownSpike:new Ji(.05,.16,4),eye:new wi(.045,6,4),blade:new Xe(.04,.9,.03),guard:new Xe(.3,.04,.06),hilt:new Xe(.06,.16,.06),pistol:new Xe(.08,.12,.42),musket:new Xe(.08,.09,1.5),musketTip:new Xe(.05,.05,.25),axeHandle:new Xe(.07,1.5,.07),axeHead:new Xe(.34,.42,.07),mask:new Xe(.34,.4,.34),slit:new Xe(.08,.04,.02)},zm={christian:{coat:"#4a1216",trim:"#d6a84a",pants:"#1d1f2b",skin:"#d9b38c",hat:"wig",weapon:"sword",cape:"#9c1c1f",scale:1},soldier:{coat:"#1f3d7a",trim:"#d8b43a",pants:"#2a2e3a",skin:"#aab8a0",hat:"tricorn",weapon:"sword",eyeColor:"#7dff6a",scale:1},musketeer:{coat:"#18305f",trim:"#c9a733",pants:"#25293a",skin:"#a7b59b",hat:"tricorn",weapon:"musket",eyeColor:"#8dff7a",scale:1},executioner:{coat:"#141218",trim:"#3a2f2a",pants:"#0d0c10",skin:"#d6cfbf",hat:"hood",weapon:"axe",eyeColor:"#9dff5a",scale:1.2}};function Ql(i){const e=zm[i],t=[],n=[],s=[],r=b=>{const T=new St({color:b,flatShading:!0});return t.push(T),n.push(T),T},a=new zt,o=new zt;a.add(o);const c=b=>{const T=new zt;T.position.set(b,.9,0);const p=new ye(ot.leg,r(e.pants));return p.position.y=-.45,p.castShadow=!0,T.add(p),o.add(T),T},l=c(.14),h=c(-.14),g=new ye(ot.torso,r(e.coat));g.position.set(0,1.3,0),g.castShadow=!0,o.add(g);const u=new ye(ot.skirt,r(e.coat));u.position.set(0,.7,0),i==="executioner"&&o.add(u);const m=new ye(ot.trim,r(e.trim));if(m.position.set(0,1.72,0),o.add(m),i!=="executioner"){const b=new ye(ot.belt,r(e.trim));b.position.set(0,.98,0),o.add(b)}if(e.cape){const b=new ye(ot.cape,r(e.cape));b.position.set(0,1.2,-.22),b.castShadow=!0,o.add(b)}const _=new zt;_.position.set(0,1.9,0),o.add(_);const y=new ye(ot.head,r(e.skin));if(y.position.y=.05,_.add(y),e.hat==="wig"){const b=new ye(ot.wig,r("#e6e2d6"));b.position.set(0,.22,-.02),_.add(b);const T=new ye(ot.crown,r("#e0b64c"));T.position.set(0,.36,0),_.add(T);for(let p=0;p<4;p++){const S=p/4*Math.PI*2,D=new ye(ot.crownSpike,r("#e0b64c"));D.position.set(Math.cos(S)*.16,.48,Math.sin(S)*.16),_.add(D)}}else if(e.hat==="tricorn"){const b=new ye(ot.hat,r("#15151c"));b.position.set(0,.24,0),_.add(b)}else{const b=new ye(ot.head,r("#0c0b0f"));b.scale.set(1.15,1.2,1.15),b.position.set(0,.12,-.02),_.add(b);const T=new ye(ot.mask,r(e.skin));T.position.set(0,.02,.1),_.add(T);for(const p of[-.08,.08]){const S=new ye(ot.slit,r("#050505"));S.position.set(p,.06,.19),_.add(S)}}if(e.eyeColor)for(const b of[-.08,.08]){const T=new St({color:"#000",emissive:e.eyeColor,emissiveIntensity:1.6});t.push(T);const p=new ye(ot.eye,T);p.position.set(b,.04,.17),_.add(p),s.push(p)}const f=b=>{const T=new zt;T.position.set(b,1.6,0);const p=new ye(ot.arm,r(e.coat));p.position.y=-.35,p.castShadow=!0,T.add(p);const S=new ye(ot.hand,r(e.skin));return S.position.y=-.76,T.add(S),o.add(T),T},d=f(.42),M=f(-.42);if(((b,T)=>{if(T==="sword"){const p=new ye(ot.hilt,r("#d6a84a"));p.position.set(0,-.8,0),b.add(p);const S=new ye(ot.guard,r("#d6a84a"));S.position.set(0,-.72,0),b.add(S);const D=new ye(ot.blade,r("#c8d4e0"));D.position.set(0,-1.3,0),D.castShadow=!0,b.add(D)}else if(T==="musket"){const p=new ye(ot.musket,r("#3b2a1c"));p.position.set(0,-.8,.45),b.add(p)}else if(T==="axe"){const p=new ye(ot.axeHandle,r("#4a3322"));p.position.set(0,-1.2,0),b.add(p);const S=new ye(ot.axeHead,r("#8a929c"));S.position.set(0,-1.9,.12),b.add(S)}})(d,e.weapon),i==="christian"){const b=new ye(ot.pistol,r("#6b4a2a"));b.position.set(0,-.82,.22),M.add(b)}if(i==="musketeer"){const b=new ye(ot.musketTip,r("#8a929c"));b.position.set(0,-.8,1),d.add(b)}d.rotation.x=-1.2,M.rotation.x=-1.2,e.weapon==="axe"&&(d.rotation.x=-1.5,M.rotation.x=-1.5),e.weapon==="musket"&&(d.rotation.x=-1.5,M.rotation.x=-1.5),a.scale.setScalar(e.scale);const E=2.1*e.scale;return{root:a,body:o,armR:d,armL:M,legR:l,legL:h,head:_,flashMats:n,ownedMats:t,eyes:s,height:E}}function jl(i){for(const e of i.ownedMats)e.dispose()}function ec(i,e){for(const t of i.flashMats)t.emissive.setRGB(e*.9,e*.1,e*.05)}function tc(i,e){i.legR.rotation.x=0,i.legL.rotation.x=0,i.body.position.y=Math.sin(e*2.2)*.02}const As=.6,km=1.4,Gm=.9,Hm=1.1,Vm=[0,.4,-.4,.8,-.8,1.2,-1.2,1.7,-1.7,2.4,-2.4];class Wm{constructor(e,t,n,s,r="normal"){W(this,"kind");W(this,"mode");W(this,"humanoid");W(this,"maxHp");W(this,"radius");W(this,"hp");W(this,"x");W(this,"z");W(this,"facing",0);W(this,"state");W(this,"c");W(this,"scene");W(this,"baseScale");W(this,"events",[]);W(this,"timer",0);W(this,"cool",.8);W(this,"chargeCool",0);W(this,"plan","melee");W(this,"windupTotal",1);W(this,"plannedFacing",0);W(this,"plannedReach",0);W(this,"chargeHitDone",!1);W(this,"stunsTaken",0);W(this,"pursuitLeft",0);W(this,"enrageSent",!1);W(this,"flash",0);W(this,"attackAnim",0);W(this,"walk",0);W(this,"age",0);W(this,"kx",0);W(this,"kz",0);this.scene=e,this.kind=t,this.mode=r,this.c=De.enemies[t],this.maxHp=this.c.hp,this.hp=this.c.hp,this.radius=this.c.radius,this.x=n,this.z=s,this.humanoid=Ql(t),this.humanoid.root.rotation.order="YXZ",this.baseScale=this.humanoid.root.scale.x,e.add(this.humanoid.root),r==="pursuit"?(this.pursuitLeft=this.c.pursuitTime??45,this.state="chase"):this.state="idle",r==="boss"&&(this.chargeCool=3),this.updateModel(0,!1)}get alive(){return this.state!=="dying"&&this.state!=="vanish"}get done(){return!this.alive&&this.timer<=0}get enraged(){return this.mode==="boss"&&this.hp<=this.maxHp*.5}get chargeCanHit(){return this.state==="charge"&&!this.chargeHitDone}markChargeHit(){this.chargeHitDone=!0}alert(){this.state==="idle"&&(this.state="chase")}takeEvents(){const e=this.events.slice();return this.events.length=0,e}receiveHit(e,t,n,s){if(!this.alive)return!1;if(this.alert(),this.mode==="pursuit")return this.stunsTaken++,this.stunsTaken>=(this.c.pursuitStuns??3)?this.startVanish():this.startStun(this.c.stunTime??2.5),!0;this.hp=Math.max(0,this.hp-e),this.flash=.2;const r=Math.atan2(this.x-n,this.z-s);return this.kx+=Math.sin(r)*3.5,this.kz+=Math.cos(r)*3.5,this.hp<=0?(this.die(),!0):(this.mode==="boss"&&this.enraged&&!this.enrageSent&&(this.enrageSent=!0,this.events.push({type:"enraged"})),t>0&&this.startStun(t),!0)}update(e,t,n,s,r){this.age+=e,this.flash=Math.max(0,this.flash-e),this.attackAnim=Math.max(0,this.attackAnim-e),this.cool=Math.max(0,this.cool-e),this.chargeCool=Math.max(0,this.chargeCool-e),this.applyKnockback(e,s,r);let a=!1;switch(this.state){case"dying":case"vanish":this.timer-=e;break;case"idle":this.c.detect!==void 0&&_t(this.x,this.z,t.x,t.z)<=this.c.detect&&this.alert();break;case"stunned":this.timer-=e,this.timer<=0&&(this.state="chase");break;case"windup":this.timer-=e,this.timer<=0&&this.finishWindup();break;case"recover":this.timer-=e,this.timer<=0&&(this.state="chase");break;case"charge":a=this.updateCharge(e,s,r);break;case"chase":a=this.updateChase(e,n,s,r);break}this.mode==="pursuit"&&this.alive&&this.state!=="idle"&&(this.pursuitLeft-=e,this.pursuitLeft<=0&&this.startVanish()),this.updateModel(e,a)}dispose(){this.scene.remove(this.humanoid.root),jl(this.humanoid)}updateChase(e,t,n,s){const r=this.c,a=_t(this.x,this.z,t.x,t.z);if(this.kind==="musketeer"){const c=r.minRange??4,l=r.maxRange??8;return a<c?(this.steer(e,this.x+(this.x-t.x),this.z+(this.z-t.z),this.moveSpeed*.9,n,s),this.faceToward(t.x,t.z,e),!0):a>l?(this.steer(e,t.x,t.z,this.moveSpeed,n,s),this.faceToward(t.x,t.z,e),!0):(this.faceToward(t.x,t.z,e),this.cool<=0&&a<=(r.shotRange??l)&&this.beginWindup("shot",t),!1)}if(this.mode==="boss"&&this.chargeCool<=0&&a>=4&&a<=13)return this.beginWindup("charge",t),!1;const o=(r.range??0)+t.r;return a<=o?(this.faceToward(t.x,t.z,e),this.cool<=0&&this.beginWindup("melee",t),!1):(this.steer(e,t.x,t.z,this.moveSpeed,n,s),!0)}beginWindup(e,t){const n=this.c;this.plan=e,this.state="windup",this.plannedFacing=Math.atan2(t.x-this.x,t.z-this.z),this.facing=this.plannedFacing,e==="melee"?(this.windupTotal=n.windup,this.plannedReach=(n.range??0)+t.r,this.timer=n.windup,this.events.push({type:"telegraph",telegraph:{shape:"sector",x:this.x,z:this.z,facing:this.plannedFacing,radius:this.plannedReach,arcHalf:this.arc,duration:n.windup}})):e==="shot"?(this.windupTotal=n.windup,this.timer=n.windup,this.events.push({type:"telegraph",telegraph:{shape:"line",x:this.x,z:this.z,facing:this.plannedFacing,length:n.shotRange??16,width:.22,duration:n.windup}})):(this.windupTotal=n.chargeWindup??1.3,this.timer=this.windupTotal,this.events.push({type:"telegraph",telegraph:{shape:"line",x:this.x,z:this.z,facing:this.plannedFacing,length:(n.chargeSpeed??11)*(n.chargeTime??.7)+.5,width:1.2,duration:this.windupTotal}}))}finishWindup(){const e=this.c;if(this.plan==="charge"){this.state="charge",this.timer=e.chargeTime??.7,this.chargeHitDone=!1,this.chargeCool=e.chargeCooldown??7;return}if(this.plan==="shot"){const t=Math.sin(this.plannedFacing),n=Math.cos(this.plannedFacing);this.events.push({type:"strike",strike:{kind:"shot",x:this.x+t*.8,y:km,z:this.z+n*.8,dirX:t,dirZ:n,damage:e.damage,towerDamage:e.towerDamage}})}else{const t=this.mode==="pursuit"?e.pursuitDamage??e.damage:e.damage;this.events.push({type:"strike",strike:{kind:"melee",x:this.x,z:this.z,facing:this.plannedFacing,range:this.plannedReach,arcHalf:this.arc,damage:t,towerDamage:e.towerDamage}})}this.attackAnim=.25,this.enterRecover(e.cooldown)}enterRecover(e){this.state="recover",this.timer=.35,this.cool=e}updateCharge(e,t,n){const s=this.c.chargeSpeed??11,r=this.x+Math.sin(this.plannedFacing)*s*e,a=this.z+Math.cos(this.plannedFacing)*s*e;return Hs(r,a,this.radius,t,n)?(this.x=r,this.z=a):this.timer=0,this.timer-=e,this.timer<=0&&this.enterRecover(this.c.cooldown),!0}startStun(e){this.state="stunned",this.timer=e}die(){this.state="dying",this.timer=As,this.events.push({type:"died"})}startVanish(){this.state!=="vanish"&&(this.state="vanish",this.timer=As,this.events.push({type:"vanished"}))}get arc(){return this.kind==="executioner"?Hm:Gm}get moveSpeed(){return this.mode==="pursuit"?this.c.pursuitSpeed??this.c.speed:this.enraged?this.c.enragedSpeed??this.c.speed:this.c.speed}steer(e,t,n,s,r,a){const o=Math.atan2(t-this.x,n-this.z),c=s*e+.15;for(const l of Vm){const h=o+l,g=this.x+Math.sin(h)*c,u=this.z+Math.cos(h)*c;if(Hs(g,u,this.radius,r,a)){this.x+=Math.sin(h)*s*e,this.z+=Math.cos(h)*s*e,this.facing=Zo(this.facing,h,8*e),pa(this,this.radius,r,a);return}}}faceToward(e,t,n){this.facing=Zo(this.facing,Math.atan2(e-this.x,t-this.z),10*n)}applyKnockback(e,t,n){if(Math.abs(this.kx)<.01&&Math.abs(this.kz)<.01)return;this.x+=this.kx*e,this.z+=this.kz*e;const s=Math.exp(-10*e);this.kx*=s,this.kz*=s,pa(this,this.radius,t,n)}updateModel(e,t){const n=this.humanoid,s=n.root;if(s.position.set(this.x,0,this.z),s.rotation.y=this.facing,this.state==="dying"){const c=1-this.timer/As;s.rotation.x=Math.min(1.5,c*1.6)}else s.rotation.x=0;if(this.state==="vanish"){const c=Math.max(.001,this.timer/As);s.scale.setScalar(this.baseScale*c)}else s.scale.setScalar(this.baseScale);t&&(this.walk+=e*7),tc(n,this.age);const r=t?Math.sin(this.walk)*.6:0;n.legR.rotation.x=r,n.legL.rotation.x=-r;const a=this.kind==="musketeer"?-1.5:-1.2;let o=a;if(this.state==="windup"&&this.plan!=="shot"){const c=1-this.timer/this.windupTotal;o=a-c*.8}this.attackAnim>0&&(o=a-.8*(this.attackAnim/.25)),n.armR.rotation.x=o,n.armL.rotation.x=a,ec(n,this.flash/.2)}}const Oe=De.player,tl=.18,Xm=1.3,nl={sword:!1,mana:!1,shield:!1};class il{constructor(e,t){W(this,"humanoid");W(this,"x",0);W(this,"z",0);W(this,"facing",0);W(this,"hp",Oe.maxHp);W(this,"mana",Oe.baseMana);W(this,"maxMana",Oe.baseMana);W(this,"upgrades",{...nl});W(this,"swordDamage",Oe.sword.damage);W(this,"swordRange",Oe.sword.range);W(this,"sealRadius",Oe.seal.radius);W(this,"sealReduction",Oe.seal.reduction);W(this,"cd",{sword:0,pistol:0,holy:0,seal:0,dash:0});W(this,"swing",0);W(this,"dashTime",0);W(this,"dashDx",0);W(this,"dashDz",0);W(this,"iFrames",0);W(this,"flash",0);W(this,"sealTime",0);W(this,"sealX",0);W(this,"sealZ",0);W(this,"walkPhase",0);W(this,"age",0);W(this,"scene");W(this,"sealGeo");W(this,"sealMat");W(this,"sealMesh");this.scene=e,this.humanoid=Ql("christian"),e.add(this.humanoid.root),this.sealGeo=new jn(1,40),this.sealGeo.rotateX(-Math.PI/2),this.sealMat=new Rt({color:"#7dff8a",transparent:!0,opacity:.2,depthWrite:!1}),this.sealMesh=new ye(this.sealGeo,this.sealMat),this.sealMesh.visible=!1,e.add(this.sealMesh),this.restore({x:t.x,z:t.z,hp:Oe.maxHp,mana:Oe.baseMana,upgrades:{...nl}})}get sealActive(){return this.sealTime>0}get dashing(){return this.dashTime>0}get invulnerable(){return this.iFrames>0}get alive(){return this.hp>0}restore(e){this.x=e.x,this.z=e.z,this.hp=e.hp,this.upgrades={...e.upgrades},this.applyStats(),this.mana=Math.min(this.maxMana,e.mana),this.cd.sword=0,this.cd.pistol=0,this.cd.holy=0,this.cd.seal=0,this.cd.dash=0,this.swing=0,this.dashTime=0,this.iFrames=0,this.flash=0,this.sealTime=0,this.humanoid.root.position.set(this.x,0,this.z)}snapshot(){return{x:this.x,z:this.z,hp:this.hp,mana:this.mana,upgrades:{...this.upgrades}}}update(e,t,n,s,r){this.age+=e;for(const l of Object.keys(this.cd))this.cd[l]=Math.max(0,this.cd[l]-e);this.swing=Math.max(0,this.swing-e),this.iFrames=Math.max(0,this.iFrames-e),this.flash=Math.max(0,this.flash-e),this.sealTime=Math.max(0,this.sealTime-e),this.dashTime=Math.max(0,this.dashTime-e),this.mana=Math.min(this.maxMana,this.mana+Oe.manaRegen*e);let a,o;this.dashTime>0?(a=this.dashDx*Oe.dashSpeed,o=this.dashDz*Oe.dashSpeed):(a=t.x*Oe.speed,o=t.z*Oe.speed);const c=Math.hypot(a,o)>.1;this.x+=a*e,this.z+=o*e,pa(this,Oe.radius,s,r),Math.hypot(n.x-this.x,n.z-this.z)>.01&&(this.facing=Math.atan2(n.x-this.x,n.z-this.z)),c&&(this.walkPhase+=e*9),this.updateModel(c),this.updateSealMesh()}trySwing(){return this.cd.sword>0||this.dashing?null:(this.cd.sword=Oe.sword.cooldown,this.swing=Oe.sword.swingTime,{x:this.x,z:this.z,facing:this.facing,range:this.swordRange,arcHalf:Oe.sword.arcHalf,damage:this.swordDamage})}tryFire(){if(this.cd.pistol>0||this.dashing)return null;this.cd.pistol=Oe.pistol.reload;const e=Math.sin(this.facing),t=Math.cos(this.facing);return{x:this.x+e*.7,y:Xm,z:this.z+t*.7,dirX:e,dirZ:t,damage:Oe.pistol.damage}}tryHoly(){const e=Oe.holy;return this.cd.holy>0||this.mana<e.manaCost?null:(this.mana-=e.manaCost,this.cd.holy=e.cooldown,{x:this.x,z:this.z,facing:this.facing,length:e.length,halfAngle:e.halfAngle,damage:e.damage,stun:e.stun})}trySeal(){return this.cd.seal>0||this.mana<Oe.seal.manaCost?!1:(this.mana-=Oe.seal.manaCost,this.cd.seal=Oe.seal.cooldown,this.sealTime=Oe.seal.duration,this.sealX=this.x,this.sealZ=this.z,!0)}tryDash(e){if(this.cd.dash>0||this.dashing)return!1;let t=e.x,n=e.z;return t===0&&n===0&&(t=Math.sin(this.facing),n=Math.cos(this.facing)),this.dashDx=t,this.dashDz=n,this.dashTime=Oe.dashTime,this.iFrames=Math.max(this.iFrames,Oe.dashTime+.05),this.cd.dash=Oe.dashCooldown,!0}takeDamage(e){if(this.iFrames>0||this.hp<=0)return 0;let t=e;return this.isInSeal(this.x,this.z)&&(t*=1-this.sealReduction),this.hp=Math.max(0,this.hp-t),this.iFrames=Oe.hitIFrames,this.flash=tl,t}heal(){this.hp=Math.min(Oe.maxHp,this.hp+Oe.heal)}isInSeal(e,t){return this.sealTime<=0?!1:Math.hypot(e-this.sealX,t-this.sealZ)<=this.sealRadius}applyUpgrade(e){this.upgrades[e]=!0,this.applyStats(),e==="mana"&&(this.mana=Math.min(this.maxMana,this.mana+(Oe.upgradedMana-Oe.baseMana)))}dispose(){this.scene.remove(this.humanoid.root),jl(this.humanoid),this.scene.remove(this.sealMesh),this.sealGeo.dispose(),this.sealMat.dispose()}applyStats(){const e=this.upgrades;this.swordDamage=e.sword?Oe.sword.upgradedDamage:Oe.sword.damage,this.swordRange=e.sword?Oe.sword.upgradedRange:Oe.sword.range,this.maxMana=e.mana?Oe.upgradedMana:Oe.baseMana,this.sealRadius=e.shield?Oe.seal.upgradedRadius:Oe.seal.radius,this.sealReduction=e.shield?Oe.seal.upgradedReduction:Oe.seal.reduction}updateModel(e){const t=this.humanoid,n=t.root;n.position.set(this.x,0,this.z),n.rotation.y=this.facing,n.visible=this.iFrames>0?Math.floor(this.iFrames*20)%2===0:!0,tc(t,this.age);const s=e?Math.sin(this.walkPhase)*.7:0;t.legR.rotation.x=s,t.legL.rotation.x=-s;const r=this.swing>0?1-this.swing/Oe.sword.swingTime:0;t.armR.rotation.x=-1.2-Math.sin(r*Math.PI)*.9,ec(t,this.flash>0?this.flash/tl:0)}updateSealMesh(){const e=this.sealTime>0;this.sealMesh.visible=e,e&&(this.sealMesh.position.set(this.sealX,.08,this.sealZ),this.sealMesh.scale.setScalar(this.sealRadius),this.sealMat.opacity=.16+.06*Math.sin(this.age*4))}}function Ke(i){const e=document.getElementById(i);if(!e)throw new Error(`Mangler element i HTML: #${i}`);return e}class qm{constructor(e){W(this,"hud",Ke("hud"));W(this,"hpFill",Ke("hp-fill"));W(this,"hpText",Ke("hp-text"));W(this,"manaFill",Ke("mana-fill"));W(this,"manaText",Ke("mana-text"));W(this,"sealCount",Ke("seal-count"));W(this,"objective",Ke("objective"));W(this,"hint",Ke("hint"));W(this,"message",Ke("message"));W(this,"towerPanel",Ke("tower-panel"));W(this,"towerFill",Ke("tower-fill"));W(this,"towerText",Ke("tower-text"));W(this,"bossPanel",Ke("boss-panel"));W(this,"bossFill",Ke("boss-fill"));W(this,"countdown",Ke("countdown"));W(this,"indicator",Ke("indicator"));W(this,"cooldownEls",new Map);W(this,"screens",{menu:Ke("screen-menu"),pause:Ke("screen-pause"),end:Ke("screen-end"),error:Ke("screen-error")});W(this,"messageTimer",0);W(this,"lastHint",null);for(const t of Array.from(document.querySelectorAll("[data-cd]")))this.cooldownEls.set(t.dataset.cd??"",t);Ke("btn-start").addEventListener("click",()=>e.onStart()),Ke("btn-sound").addEventListener("click",()=>e.onToggleSound()),Ke("btn-sound-pause").addEventListener("click",()=>e.onToggleSound()),Ke("mute-btn").addEventListener("click",()=>e.onToggleSound()),Ke("btn-resume").addEventListener("click",()=>e.onResume()),Ke("btn-restart").addEventListener("click",()=>e.onRestart()),Ke("btn-retry").addEventListener("click",()=>e.onRetry()),Ke("btn-new").addEventListener("click",()=>e.onNewGame())}showHud(e){this.hud.classList.toggle("hidden",!e)}showScreen(e){for(const t of Object.keys(this.screens))this.screens[t].classList.toggle("hidden",t!==e)}setEnd(e,t,n){Ke("end-title").textContent=e,Ke("end-text").textContent=t,Ke("btn-retry").classList.toggle("hidden",!n)}setError(e){Ke("error-text").textContent=e}setSoundLabel(e){const t=e?"Lyd: fra":"Lyd: til";Ke("btn-sound").textContent=t,Ke("btn-sound-pause").textContent=t,Ke("mute-btn").textContent=t}showMessage(e,t=4){this.message.textContent=e,this.message.classList.remove("hidden"),this.messageTimer=t}clearMessage(){this.messageTimer=0,this.message.classList.add("hidden")}tickMessage(e){this.messageTimer<=0||(this.messageTimer-=e,this.messageTimer<=0&&this.message.classList.add("hidden"))}update(e){const t=e.maxHp>0?e.hp/e.maxHp:0,n=e.maxMana>0?e.mana/e.maxMana:0;this.hpFill.style.width=`${Math.max(0,t)*100}%`,this.manaFill.style.width=`${Math.max(0,n)*100}%`,this.hpText.textContent=`${Math.ceil(e.hp)}`,this.manaText.textContent=`${Math.floor(e.mana)}`;for(const[s,r]of this.cooldownEls){const a=e.cooldowns[s]??0;r.classList.toggle("ready",a<=0);const o=r.querySelector("i");o&&(o.style.height=`${Math.min(1,Math.max(0,a))*100}%`)}if(this.sealCount.textContent=`${e.sealCount}/3`,this.objective.textContent=e.objective,e.hint!==this.lastHint&&(this.lastHint=e.hint,this.hint.textContent=e.hint??"",this.hint.classList.toggle("hidden",!e.hint)),this.towerPanel.classList.toggle("hidden",!e.tower.visible),e.tower.visible){const s=Math.round(Math.max(0,e.tower.protection)*100);this.towerFill.style.width=`${s}%`,this.towerText.textContent=`${s}%`}this.bossPanel.classList.toggle("hidden",!e.boss.visible),e.boss.visible&&(this.bossFill.style.width=`${Math.max(0,e.boss.hp)*100}%`),e.countdown?(this.countdown.textContent=e.countdown,this.countdown.classList.remove("hidden")):this.countdown.classList.add("hidden"),this.updateIndicator(e.indicator)}updateIndicator(e){if(!e.visible){this.indicator.classList.add("hidden");return}const t=Math.max(Math.abs(e.ndcX),Math.abs(e.ndcY),1e-6),n=e.ndcX/t*.86,s=e.ndcY/t*.86,r=(n+1)/2*window.innerWidth,a=(1-s)/2*window.innerHeight,o=Math.atan2(e.ndcX,e.ndcY)*180/Math.PI;this.indicator.style.left=`${r}px`,this.indicator.style.top=`${a}px`,this.indicator.style.transform=`translate(-50%, -50%) rotate(${o}deg)`,this.indicator.classList.remove("hidden")}}const ht={ground:"#141b22",trunk:"#2a2220",dead:"#3a342e",grave:"#5d6168",stone:"#4b4f57",stoneDark:"#2b2e35",wood:"#4a3322",amber:"#ffb347",seal:"#ffcf5a",ghost:"#7dff6a",crowns:["#17301f","#1c3a2a","#132a2c","#1e2c35"],bushes:["#1d3324","#21382a","#1a2b2b"]},gn=new Ct;function Ym(i,e){const t=new He;e.forEach((n,s)=>{gn.position.set(n.x,n.y,n.z),gn.rotation.set(0,n.ry??0,n.rz??0),gn.scale.set(n.sx,n.sy,n.sz),gn.updateMatrix(),i.setMatrixAt(s,gn.matrix),n.color&&i.setColorAt(s,t.set(n.color))}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}function Fi(i,e,t){const n=new Dl(i,e,Math.max(1,t.length));return n.count=t.length,n.castShadow=!0,n.receiveShadow=!0,t.some(s=>s.color)&&n.setColorAt(0,new He(1,1,1)),Ym(n,t),n}function Km(i){const e=De.map.half,t=1024,n=document.createElement("canvas");n.width=t,n.height=t;const s=n.getContext("2d");if(!s)throw new Error("2D-kontekst kunne ikke oprettes");const r=l=>(l+e)*t/(e*2),a=t/(e*2);s.fillStyle=ht.ground,s.fillRect(0,0,t,t);const o=Gs(De.map.seed);for(let l=0;l<9e3;l++){const h=o()*t,g=o()*t,u=o()<.5;s.fillStyle=u?`rgba(44,58,68,${.2+o()*.35})`:`rgba(6,8,12,${.25+o()*.4})`,s.fillRect(h,g,2+o()*5,2+o()*5)}for(const l of Object.values(i.zones)){const h=r(l.center.x),g=r(l.center.z),u=l.radius*a,m=s.createRadialGradient(h,g,0,h,g,u*1.15);m.addColorStop(0,"rgba(60,64,58,0.55)"),m.addColorStop(1,"rgba(60,64,58,0)"),s.fillStyle=m,s.beginPath(),s.arc(h,g,u*1.15,0,Math.PI*2),s.fill()}s.strokeStyle="#3a3a36",s.lineCap="round",s.lineJoin="round",s.lineWidth=2.2*a;for(const l of i.paths)s.beginPath(),l.forEach((h,g)=>{const u=r(h.x),m=r(h.z);g===0?s.moveTo(u,m):s.lineTo(u,m)}),s.stroke();const c=new Mh(n);return c.colorSpace=Xt,c.anisotropy=4,c}function Zm(i,e,t){const n=new zt;n.position.set(i,0,e);const s=new ye(new Yt(.08,.1,2,6),new St({color:ht.wood,flatShading:!0}));s.position.y=1,s.castShadow=!0,n.add(s);const r=new ye(new Yt(.22,.12,.26,6),new St({color:"#2a2a2e",flatShading:!0}));r.position.y=2.1,n.add(r);const a=new ye(new Ji(.22,.6,6),new Rt({color:ht.amber}));a.position.y=2.5,n.add(a);const o=new zl(ht.amber,t,16,1.6);return o.position.set(0,2.6,0),n.add(o),{group:n,flame:a,light:o}}function $m(){const i=new zt,e=new ye(new Yt(.42,.42,.08,12),new St({color:ht.seal,emissive:ht.seal,emissiveIntensity:.9,flatShading:!0}));i.add(e);const t=new ye(new ji(.62,.05,6,20),new Rt({color:ht.seal}));return t.rotation.x=Math.PI/2,i.add(t),{group:i,ring:t}}function Jm(i){const e=new zt;e.position.set(i.x,0,i.z),e.rotation.y=i.rot;const t=new St({color:ht.wood,flatShading:!0}),n=new ye(new Xe(1.8,.5,1.1),t);n.position.set(0,.7,0),n.rotation.z=.12,n.castShadow=!0,e.add(n);const s=new St({color:"#2c1f16",flatShading:!0});for(const a of[-1,1]){const o=new ye(new Yt(.42,.42,.12,8),s);o.rotation.z=Math.PI/2,o.rotation.x=.35*a,o.position.set(0,.42,.62*a),o.castShadow=!0,e.add(o)}const r=new ye(new Xe(.1,.1,1.9),t);return r.position.set(1.3,.3,0),r.rotation.y=.4,e.add(r),e}function Qm(i,e,t){const n=new zt;n.position.set(i,0,e);const s=new St({color:ht.stone,flatShading:!0}),r=new St({color:ht.stoneDark,flatShading:!0}),a=new ye(new Yt(t*1.12,t*1.22,1.2,24),r);a.position.y=.6,a.receiveShadow=!0,n.add(a);const o=new ye(new Yt(t,t*1.06,9,24),s);o.position.y=5.7,o.castShadow=!0,o.receiveShadow=!0,n.add(o);const c=new Rt({color:"#0a0c10"});for(let M=0;M<8;M++){const A=M/8*Math.PI*2,E=new ye(new Xe(.42,.9,.14),c);E.position.set(Math.sin(A)*(t+.02),6.2,Math.cos(A)*(t+.02)),E.rotation.y=A,n.add(E)}for(let M=0;M<14;M++){const A=M/14*Math.PI*2,E=new ye(new Xe(.5,.7,.5),s);E.position.set(Math.sin(A)*(t-.1),10.35,Math.cos(A)*(t-.1)),E.castShadow=!0,n.add(E)}const l=new Rt({color:"#c8ff9a",transparent:!0,opacity:.85}),h=new ye(new Yt(1.5,1.7,2,12),l);h.position.y=11.6,n.add(h);const g=new Rt({color:"#7dff9a",transparent:!0,opacity:0,depthWrite:!1}),u=new ye(new wi(1.9,16,10,0,Math.PI*2,0,Math.PI/2),g);u.position.y=12.7,n.add(u);const m=new ye(new Ji(.35,2.6,8),new St({color:ht.seal,emissive:ht.seal,emissiveIntensity:.4,flatShading:!0}));m.position.y=14.5,n.add(m);const _=new Rt({color:ht.ghost,transparent:!0,opacity:0,depthWrite:!1}),y=new ye(new jn(De.tower.defenseRadius,48),_);y.rotation.x=-Math.PI/2,y.position.y=.05,n.add(y);const f=new Rt({color:ht.ghost,transparent:!0,opacity:0}),d=new ye(new ji(De.tower.defenseRadius,.07,6,72),f);return d.rotation.x=Math.PI/2,d.position.y=.1,n.add(d),{group:n,ringMat:f,domeMat:g,discMat:_,lanternMat:l}}function jm(i){const e=De.map.half,t=new hh;t.background=new He("#0a1018"),t.fog=new Aa("#0a1018",34,92);const n=new Rh("#5a7aa8","#0a0a12",.9);t.add(n);const s=new Lh("#a9c4ff",1.1);s.castShadow=!0,s.shadow.mapSize.set(1024,1024);const r=s.shadow.camera;r.left=-26,r.right=26,r.top=26,r.bottom=-26,r.near=1,r.far=120,s.shadow.bias=-8e-4,t.add(s),t.add(s.target);const a=new Qi(e*2,e*2);a.rotateX(-Math.PI/2);const o=new ye(a,new St({map:Km(i)}));o.receiveShadow=!0,t.add(o);const c=i.props.filter(q=>q.kind==="tree"),l=i.props.filter(q=>q.kind==="dead"),h=i.props.filter(q=>q.kind==="bush"),g=i.props.filter(q=>q.kind==="grave"),u=new Yt(.2,.3,2.6,6);u.translate(0,1.3,0);const m=Fi(u,new St({color:ht.trunk,flatShading:!0}),c.map(q=>({x:q.x,y:0,z:q.z,sx:q.scale,sy:q.scale,sz:q.scale})));t.add(m);const _=new zs(1,0),y=new St({color:"#ffffff",flatShading:!0}),f=new Dl(_,y,Math.max(1,c.length));f.count=c.length,f.castShadow=!0,f.instanceMatrix.setUsage(Hc);const d=new He,M=Gs(De.map.seed+7);c.forEach((q,me)=>{f.setColorAt(me,d.set(ht.crowns[Math.floor(M()*ht.crowns.length)]))}),t.add(f);const A=new Float32Array(c.length).fill(1),E=c.map(q=>({x:q.x,z:q.z,s:q.scale})),b=new Yt(.14,.22,3.4,5);b.translate(0,1.7,0),t.add(Fi(b,new St({color:ht.dead,flatShading:!0}),l.map(q=>({x:q.x,y:0,z:q.z,sx:q.scale,sy:q.scale,sz:q.scale,ry:q.rot}))));const T=new Xe(.09,1,.09);T.translate(0,.5,0);const p=[];for(const q of l)for(const me of[-1,1])p.push({x:q.x,y:2*q.scale,z:q.z,sx:q.scale,sy:q.scale,sz:q.scale,rz:-me*.9,ry:q.rot});t.add(Fi(T,new St({color:ht.dead,flatShading:!0}),p));const S=new zs(.9,0);t.add(Fi(S,new St({color:"#ffffff",flatShading:!0}),h.map((q,me)=>({x:q.x,y:.45*q.scale,z:q.z,sx:1.1*q.scale,sy:.7*q.scale,sz:1.1*q.scale,color:ht.bushes[me%ht.bushes.length]}))));const D=new Xe(.5,.85,.16);D.translate(0,.42,0),t.add(Fi(D,new St({color:ht.grave,flatShading:!0}),g.map(q=>({x:q.x,y:0,z:q.z,sx:1,sy:1,sz:1,ry:q.rot}))));for(const q of i.props.filter(me=>me.kind==="wreck"))t.add(Jm(q));for(const q of i.props.filter(me=>me.kind==="ruinWall")){const me=1.2+q.scale*1.6,V=new ye(new Xe(2.2,me,.6),new St({color:ht.stone,flatShading:!0}));V.position.set(q.x,me/2,q.z),V.rotation.y=q.rot,V.castShadow=!0,V.receiveShadow=!0,t.add(V)}const C=Qm(i.tower.x,i.tower.z,i.tower.r);t.add(C.group);const I=new zl(ht.ghost,0,18,1.6);I.position.set(i.tower.x,12,i.tower.z),t.add(I);const U=[],X=[],L=[{x:i.zones.camp.center.x+4,z:i.zones.camp.center.z-3},{x:i.zones.lund.center.x-4,z:i.zones.lund.center.z+2},{x:i.zones.chapel.center.x+3,z:i.zones.chapel.center.z+3},{x:i.tower.x+4.5,z:i.tower.z+4.5}];for(const q of L){const me=Zm(q.x,q.z,22);t.add(me.group),U.push(me.light),X.push(me.flame)}const G={},$=[];for(const q of Object.values(i.zones)){const me=$m();me.group.position.set(q.seal.x,.9,q.seal.z),G[q.id]=me.group,$.push(me.ring),t.add(me.group)}const k=i.pickups.map(q=>{const me=new zt;me.position.set(q.x,.6,q.z);const V=new St({color:"#e8e4d8",emissive:"#7a1212",emissiveIntensity:.8,flatShading:!0}),fe=new ye(new Xe(.46,.12,.12),V),Se=new ye(new Xe(.12,.12,.46),V);return me.add(fe,Se),t.add(me),me}),ne=Gs(De.map.seed+13),Y=U.map(()=>ne()*10);let j=0;function te(q,me,V){const fe=Math.sin(q*.05)*5;s.position.set(V.x-18+fe,42,V.z+14),s.target.position.set(V.x,0,V.z),s.target.updateMatrixWorld();const Se=Math.min(1,me*12);let Re=!1;for(let Me=0;Me<c.length;Me++){const We=E[Me],Pe=We.z-V.z,je=Math.abs(We.x-V.x),Ve=Pe>.6&&Pe<8&&je<1.5*We.s+1?0:1,gt=A[Me];if(A[Me]=gt+(Ve-gt)*Se,Math.abs(A[Me]-gt)>5e-4){const dt=Math.max(1e-4,A[Me]);gn.position.set(We.x,3*We.s,We.z),gn.rotation.set(0,0,0),gn.scale.set(1.5*We.s*dt,2.1*We.s*dt,1.5*We.s*dt),gn.updateMatrix(),f.setMatrixAt(Me,gn.matrix),Re=!0}}Re&&(f.instanceMatrix.needsUpdate=!0);for(let Me=0;Me<U.length;Me++){Y[Me]+=me*9;const We=.88+Math.sin(Y[Me])*.07+Math.sin(Y[Me]*2.7)*.05;U[Me].intensity=22*We,X[Me].scale.set(1,We+.1,1)}const ge=.5+Math.sin(q*2.2)*.5;I.intensity=j*(22+ge*6),C.ringMat.opacity=j*(.5+ge*.3),C.domeMat.opacity=j*.16,C.discMat.opacity=j*.12;for(const Me of Object.values(i.zones)){const We=G[Me.id];We.visible&&(We.position.y=.9+Math.sin(q*2+Me.seal.x)*.12,We.rotation.y+=me*.8)}for(const Me of $)Me.rotation.z+=me*.5;for(const Me of k)Me.visible&&(Me.position.y=.6+Math.sin(q*2.5+Me.position.x)*.08,Me.rotation.y+=me*1.2)}return{scene:t,update:te,setSealCollected(q){G[q].visible=!1},setPickupTaken(q){k[q].visible=!1},setTowerProtection(q){j=Math.max(0,Math.min(1,q))},reset(){for(const q of Object.values(G))q.visible=!0;for(const q of k)q.visible=!0;j=0}}}const rn=De.player,fn=["camp","lund","chapel"],eg={camp:"sword",lund:"mana",chapel:"shield"},tg={sword:"Din sabel er skærpet: større skade og længere rækkevidde.",mana:"Din magi er stærkere: mere maksimal mana.",shield:"Beskyttelsesmagien er forbedret: større felt og mindre skade."},ng={camp:"Den forladte lejr. Ildstederne er slukket, men soldaterne er vågnet.",lund:"De dødes lund. Musketererne sigter fra mellem gravene.",chapel:"Det ødelagte kapel. Her ligger det sidste segl."},ig=["Bevæg dig med WASD eller piletasterne. Sigt med musen.","Venstre museknap: sabelangreb. Højre museknap: flintlåspistol (genladning efter skud).","Q: helligt lys · E: beskyttelsessegl · Mellemrum: undvig · F: interagér · Esc: pause"],sg=9,rg=5,ag=1.3,og=1.4,lg=12;function sl(){return{camp:{spawned:!1,sealed:!1},lund:{spawned:!1,sealed:!1},chapel:{spawned:!1,sealed:!1}}}function rl(i){return{camp:{...i.camp},lund:{...i.lund},chapel:{...i.chapel}}}function cg(i){return i.charAt(0).toLowerCase()+i.slice(1)}class hg{constructor(e){W(this,"map");W(this,"world");W(this,"renderer");W(this,"camera",new La(-1,1,1,-1,.1,200));W(this,"input");W(this,"audio",new Cm);W(this,"fx");W(this,"combat");W(this,"hud");W(this,"raycaster",new Ih);W(this,"ground",new An(new F(0,1,0),0));W(this,"aimPoint",new F);W(this,"ndc",new Ge);W(this,"projected",new F);W(this,"enemies",[]);W(this,"tags",new Map);W(this,"focus");W(this,"pickupTaken");W(this,"player");W(this,"phase","menu");W(this,"stage","explore");W(this,"zones",sl());W(this,"protection",De.tower.maxProtection);W(this,"pending",null);W(this,"timer",0);W(this,"waveIndex",0);W(this,"boss",null);W(this,"aim");W(this,"shake",0);W(this,"time",0);W(this,"last");W(this,"checkpoint",null);W(this,"endResult",null);W(this,"endText","");W(this,"endTimer",0);W(this,"tutorialStep",-1);W(this,"tutorialTimer",0);W(this,"tutorialMoved",0);W(this,"heartTimer",0);W(this,"ambientTimer",14);W(this,"frame",e=>{requestAnimationFrame(this.frame);const t=Pm((e-this.last)/1e3,0,.05);this.last=e,this.input.consume("mute")&&this.toggleSound(),this.input.consume("pause")&&this.togglePause();const n=this.phase==="playing",s=n?t:0;this.updateCamera(s),n&&this.simulate(t),this.time+=s,this.world.update(this.time,s,this.player),this.fx.update(s),this.audio.update(s),this.hud.tickMessage(s),this.phase!=="menu"&&this.phase!=="ended"&&this.hud.update(this.buildView()),this.renderer.render(this.world.scene,this.camera),this.input.clearPending()});this.map=Dm(),this.world=jm(this.map),this.renderer=new Rm({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ki,e.appendChild(this.renderer.domElement),this.input=new Bm(this.renderer.domElement),this.fx=new Um(this.world.scene),this.combat=new Nm(this.world.scene,this.fx,t=>this.audio.play(t)),this.hud=new qm({onStart:()=>this.start(),onToggleSound:()=>this.toggleSound(),onResume:()=>this.resume(),onRestart:()=>this.newGame(),onRetry:()=>this.retry(),onNewGame:()=>this.newGame()}),this.player=new il(this.world.scene,this.map.start),this.pickupTaken=this.map.pickups.map(()=>!1),this.focus={x:this.map.start.x,z:this.map.start.z},this.aim={x:this.map.start.x,z:this.map.start.z-1},this.last=performance.now(),this.hud.setSoundLabel(this.audio.isMuted),this.hud.showHud(!1),this.hud.showScreen("menu"),this.onResize(),this.updateCamera(0),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("pointerdown",()=>this.audio.unlock()),this.renderer.domElement.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.phase="ended",this.hud.setError("Grafikken blev afbrudt. Genindlæs siden for at fortsætte."),this.hud.showHud(!1),this.hud.showScreen("error")}),requestAnimationFrame(this.frame)}start(){this.audio.unlock(),this.newGame()}newGame(){this.resetState(),this.player.dispose(),this.player=new il(this.world.scene,this.map.start),this.checkpoint=null,this.focus.x=this.map.start.x,this.focus.z=this.map.start.z,this.tutorialStep=0,this.tutorialTimer=0,this.tutorialMoved=0,this.beginPlay("Skovens udkant. Find de tre kongelige segl og vend tilbage til Rundetårn.",6)}retry(){const e=this.checkpoint;if(!e){this.newGame();return}this.resetState(),this.zones=rl(e.zones),this.pickupTaken.splice(0,this.pickupTaken.length,...e.pickups),this.player.restore({...e.player,hp:rn.maxHp,mana:this.player.maxMana});for(const t of fn)this.zones[t].sealed&&this.world.setSealCollected(t);this.pickupTaken.forEach((t,n)=>{t&&this.world.setPickupTaken(n)}),this.beginPlay("Du er tilbage ved Rundetårn. Tryk F for at tænde beskyttelsen igen.",5)}beginPlay(e,t){this.phase="playing",this.hud.showScreen(null),this.hud.showHud(!0),this.hud.showMessage(e,t)}togglePause(){this.phase==="playing"?(this.phase="paused",this.hud.showScreen("pause"),this.audio.suspend()):this.phase==="paused"&&this.resume()}resume(){this.phase==="paused"&&(this.phase="playing",this.hud.showScreen(null),this.audio.resume())}toggleSound(){this.hud.setSoundLabel(this.audio.toggleMuted())}resetState(){for(const e of this.enemies)e.dispose();this.enemies.length=0,this.tags.clear(),this.combat.clear(),this.fx.clear(),this.world.reset(),this.hud.clearMessage(),this.zones=sl(),this.pickupTaken.fill(!1),this.stage="explore",this.protection=De.tower.maxProtection,this.pending=null,this.timer=0,this.waveIndex=0,this.boss=null,this.shake=0,this.endResult=null,this.endText="",this.endTimer=0,this.heartTimer=0,this.ambientTimer=14,this.aim={x:this.player.x,z:this.player.z-1}}simulate(e){const t=this.player,n=this.input.move,s=this.map.solids,r=De.map.half;if(t.update(e,n,this.computeAim(),s,r),this.input.consume("attack")){const h=t.trySwing();h&&this.combat.swing(h,this.enemies)}if(this.input.consume("fire")){const h=t.tryFire();h&&this.combat.fire(h)}if(this.input.consume("holy")){const h=t.tryHoly();h&&this.combat.holy(h,this.enemies)}this.input.consume("seal")&&t.trySeal()&&this.audio.play("seal"),this.input.consume("dash")&&t.tryDash(n),this.input.consume("interact")&&this.interact();const a={x:t.x,z:t.z,r:rn.radius},o=this.enemyGoal(a);for(const h of this.enemies)h.update(e,a,o,s,r);const c={player:t,enemies:this.enemies,tower:this.map.tower,towerExposed:this.stage!=="explore",solids:s,half:r},l=this.combat.update(e,c);l.towerDamage>0&&(this.protection=Math.max(0,this.protection-l.towerDamage)),l.playerDamage>0&&(this.shake=Math.min(1,this.shake+.6));for(const h of[...this.enemies])h.done&&this.removeEnemy(h);this.collectPickups(),this.updateZones(),this.updateDefense(e),this.updateTutorial(e,n),this.updateAmbient(e),this.checkOutcome(),this.endResult&&(this.endTimer-=e,this.endTimer<=0&&this.finish())}computeAim(){this.ndc.set(this.input.pointer.x,this.input.pointer.y),this.raycaster.setFromCamera(this.ndc,this.camera);const e=this.raycaster.ray.intersectPlane(this.ground,this.aimPoint);return e&&(this.aim={x:e.x,z:e.z}),this.aim}updateCamera(e){const t=this.player,n=1-Math.exp(-5.5*e);this.focus.x+=(t.x-this.focus.x)*n,this.focus.z+=(t.z-this.focus.z)*n,this.shake=Math.max(0,this.shake-De.camera.shakeDecay*e);const s=e>0?this.shake*.35:0,r=this.focus.x+(Math.random()*2-1)*s,a=this.focus.z+(Math.random()*2-1)*s;this.camera.position.set(r,De.camera.offsetY,a+De.camera.offsetZ),this.camera.lookAt(r,0,a),this.camera.updateMatrixWorld()}onResize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1);const n=De.camera.viewHeight/2,s=n*(e/Math.max(1,t));this.camera.left=-s,this.camera.right=s,this.camera.top=n,this.camera.bottom=-n,this.camera.updateProjectionMatrix()}interact(){const e=this.player;for(const n of fn){if(this.zones[n].sealed||!this.zoneCleared(n))continue;const s=pn[n].seal;if(_t(e.x,e.z,s.x,s.z)<=rn.interactRange+.6){this.takeSeal(n);return}}const t=this.map.tower;if(_t(e.x,e.z,t.x,t.z)<=De.tower.interactDistance&&this.stage==="explore"){const n=this.sealCount();if(n<fn.length){this.hud.showMessage(`Rundetårn kræver alle tre segl. Du har ${n}/3.`,3);return}this.activateTower()}}takeSeal(e){this.zones[e].sealed=!0,this.world.setSealCollected(e);const t=eg[e];this.player.applyUpgrade(t);const n=pn[e].seal;this.fx.burst(n.x,1,n.z,"#f2c14e",18,3),this.audio.play("seal"),this.audio.play("upgrade"),this.hud.showMessage(`Kongeligt segl ${this.sealCount()}/3 fundet. ${tg[t]}`,6)}activateTower(){this.checkpoint={player:this.player.snapshot(),zones:rl(this.zones),pickups:this.pickupTaken.slice()},this.stage="defense",this.protection=De.tower.maxProtection,this.world.setTowerProtection(1);for(const e of[...this.enemies])this.tags.get(e)==="pursuit"&&this.removeEnemy(e);this.pending="wave",this.timer=De.tower.waveDelay,this.waveIndex=0,this.hud.showMessage("Rundetårns beskyttelse er tændt! Advarsel: Tårnet kan kun tage skade nu. Brydes beskyttelsen, er spillet tabt.",6),this.audio.play("warn")}updateZones(){const e=this.player;for(const t of fn){if(this.zones[t].spawned||!this.unlocked(t))continue;const n=pn[t];_t(e.x,e.z,n.center.x,n.center.z)>n.radius||this.spawnZone(t)}}unlocked(e){return e==="camp"?!0:e==="lund"?this.zones.camp.sealed:this.zones.lund.sealed}spawnZone(e){const t=pn[e];this.zones[e].spawned=!0;for(const n of t.spawns)for(let s=0;s<n.count;s++){const r=this.freePoint(t.center,t.radius*.45,t.radius*.75);this.addEnemy(n.kind,r.x,r.z,e,"normal")}e!=="camp"&&this.spawnPursuer(),this.hud.showMessage(ng[e],4)}spawnPursuer(){const e=this.freePoint(this.player,12,14,De.enemies.executioner.radius);this.addEnemy("executioner",e.x,e.z,"pursuit","pursuit"),this.hud.showMessage("Tunge skridt bag dig. Bøddelen forfølger dig, løb!",4),this.shake=Math.max(this.shake,.4),this.audio.play("warn")}updateDefense(e){if(this.stage==="explore")return;if(this.pending){if(this.timer-=e,this.timer>0)return;this.pending==="wave"?this.spawnWave():this.spawnBoss();return}this.stage!=="defense"||this.enemies.some(n=>this.tags.get(n)==="wave"&&n.alive)||(this.waveIndex<De.waves.length?(this.pending="wave",this.timer=De.tower.waveDelay):(this.pending="boss",this.timer=De.tower.bossDelay))}spawnWave(){const e=De.waves[this.waveIndex];this.waveIndex++,this.pending=null;const t=this.map.tower;for(let n=0;n<e.soldiers;n++){const s=this.freePoint(t,De.tower.approachRadius-1.5,De.tower.approachRadius+1.5);this.addEnemy("soldier",s.x,s.z,"wave","normal")}for(let n=0;n<e.musketeers;n++){const s=this.freePoint(t,De.tower.approachRadius-1.5,De.tower.approachRadius+1.5);this.addEnemy("musketeer",s.x,s.z,"wave","normal")}this.hud.showMessage(`Bølge ${this.waveIndex} af ${De.waves.length} nærmer sig tårnet.`,3)}spawnBoss(){this.pending=null,this.stage="boss";const e=this.freePoint(this.map.tower,13,15,De.enemies.executioner.radius);this.boss=this.addEnemy("executioner",e.x,e.z,"boss","boss"),this.hud.showMessage("Bøddelen træder frem af tågen. Besejr ham for at redde Rundetårn.",5),this.audio.play("warn"),this.shake=Math.max(this.shake,.6)}addEnemy(e,t,n,s,r){const a=new Wm(this.world.scene,e,t,n,r);return a.alert(),this.enemies.push(a),this.tags.set(a,s),a}removeEnemy(e){const t=this.enemies.indexOf(e);t>=0&&this.enemies.splice(t,1),this.tags.delete(e),e.dispose()}freePoint(e,t,n,s=De.enemies.soldier.radius){for(let r=0;r<40;r++){const a=Math.random()*Math.PI*2,o=t+Math.random()*(n-t),c=e.x+Math.sin(a)*o,l=e.z+Math.cos(a)*o;if(Hs(c,l,s,this.map.solids,De.map.half))return{x:c,z:l}}return{x:e.x,z:e.z}}zoneCleared(e){return this.zones[e].spawned&&!this.enemies.some(t=>this.tags.get(t)===e&&t.alive)}sealCount(){return fn.filter(e=>this.zones[e].sealed).length}collectPickups(){const e=this.player;this.map.pickups.forEach((t,n)=>{this.pickupTaken[n]||_t(e.x,e.z,t.x,t.z)>ag||(this.pickupTaken[n]=!0,this.world.setPickupTaken(n),e.heal(),this.audio.play("pickup"),this.hud.showMessage("Du finder en helbredende urt.",2.5))})}updateTutorial(e,t){if(!(this.tutorialStep<0)){if(this.tutorialStep===0){this.tutorialMoved+=Math.hypot(t.x,t.z)*rn.speed*e,this.tutorialMoved>=rg&&(this.tutorialStep=1);return}this.tutorialTimer+=e,!(this.tutorialTimer<sg)&&(this.tutorialTimer=0,this.tutorialStep=this.tutorialStep===1?2:-1)}}updateAmbient(e){this.ambientTimer-=e,this.ambientTimer<=0&&(this.ambientTimer=12+Math.random()*14,this.audio.play("twig")),this.player.alive&&this.player.hp<30&&(this.heartTimer-=e,this.heartTimer<=0&&(this.heartTimer=.9,this.audio.play("heartbeat")))}checkOutcome(){this.endResult||(this.player.alive?this.stage!=="explore"&&this.protection<=0?this.conclude("lost","Beskyttelsen brød sammen, og de forbandte soldater nåede Rundetårn."):this.stage==="boss"&&this.boss&&!this.boss.alive&&this.conclude("won","Bøddelen er besejret. Rundetårn står stadig, og natten er forbi."):this.conclude("lost","Christian d. 6. faldt i skoven, og Rundetårn står uden sin konge."))}conclude(e,t){this.endResult=e,this.endText=t,this.endTimer=og}finish(){const e=this.endResult==="won";this.phase="ended",this.endResult=null,this.hud.showHud(!1),this.hud.setEnd(e?"Rundetårn står":"Forbandelsen vandt",this.endText,!e&&this.checkpoint!==null),this.hud.showScreen("end"),this.audio.play(e?"victory":"defeat")}enemyGoal(e){const t=this.map.tower;return this.stage!=="explore"&&_t(e.x,e.z,t.x,t.z)>De.tower.defenseRadius?t:e}objective(){if(this.stage==="boss")return"Besejr bøddelen";if(this.stage==="defense")return"Forsvar Rundetårn";for(const e of fn){if(this.zones[e].sealed)continue;const t=cg(pn[e].name);return this.zones[e].spawned?this.zoneCleared(e)?"Tag det kongelige segl (F)":`Ryd ${t}`:`Find ${t}`}return"Vend tilbage til Rundetårn og tænd beskyttelsen (F)"}indicatorTarget(){if(this.stage==="boss")return this.boss?.alive?this.boss:null;if(this.stage==="defense")return this.map.tower;if(this.sealCount()>=fn.length)return this.map.tower;for(const e of fn)if(!this.zones[e].sealed)return this.zones[e].spawned?this.zoneCleared(e)?pn[e].seal:null:pn[e].center;return null}indicatorView(){const e=this.indicatorTarget();if(!e)return{visible:!1,ndcX:0,ndcY:0};this.projected.set(e.x,.5,e.z).project(this.camera);const t=this.projected.x,n=this.projected.y;return{visible:!(Math.abs(t)<=.9&&Math.abs(n)<=.9),ndcX:t,ndcY:n}}currentHint(){const e=this.player,t=this.map.tower;if(this.stage==="explore"&&_t(e.x,e.z,t.x,t.z)<=lg&&this.sealCount()<fn.length)return"Rundetårn kan først tændes, når du har alle tre segl.";for(const n of fn){if(this.zones[n].sealed||!this.zoneCleared(n))continue;const s=pn[n].seal;if(_t(e.x,e.z,s.x,s.z)<=rn.interactRange+.6)return"Tryk F for at tage det kongelige segl."}return this.enemies.some(n=>this.tags.get(n)==="pursuit"&&n.alive)?"Bøddelen forfølger dig. Forsink ham med sabel eller helligt lys, eller undvig.":this.stage==="defense"?"Bliv tæt på Rundetårn, så fjenderne jagter dig dér.":this.stage==="boss"?"Bøddelen laver varslede stormløb. Undgå hans linje og lamm ham med helligt lys.":this.tutorialStep>=0?ig[this.tutorialStep]:null}countdownText(){if(!this.pending)return null;const e=Math.ceil(Math.max(0,this.timer));return this.pending==="wave"?`Bølge ${this.waveIndex+1} af ${De.waves.length} om ${e} s`:`Bøddelen kommer om ${e} s`}buildView(){const e=this.player,t=e.cd;return{hp:e.hp,maxHp:rn.maxHp,mana:e.mana,maxMana:e.maxMana,cooldowns:{sword:t.sword/rn.sword.cooldown,pistol:t.pistol/rn.pistol.reload,holy:t.holy/rn.holy.cooldown,seal:t.seal/rn.seal.cooldown,dash:t.dash/rn.dashCooldown},sealCount:this.sealCount(),objective:this.objective(),hint:this.currentHint(),tower:{visible:this.stage!=="explore",protection:this.protection/De.tower.maxProtection},boss:{visible:this.stage==="boss"&&!!this.boss&&this.boss.alive,hp:this.boss?this.boss.hp/this.boss.maxHp:0},countdown:this.countdownText(),indicator:this.indicatorView()}}}function yr(i){const e=document.getElementById("screen-error"),t=document.getElementById("error-text");t&&(t.textContent=i),e?.classList.remove("hidden")}function ug(){try{return document.createElement("canvas").getContext("webgl2")!==null}catch{return!1}}function dg(){const i=document.getElementById("app");if(!i){yr("Spillet kunne ikke starte: mangler spillets rodelement.");return}if(!ug()){yr("Din browser understøtter ikke WebGL 2, som spillet kræver. Prøv en nyere version af Chrome, Edge eller Firefox.");return}try{new hg(i)}catch(e){console.error(e),yr("Spillet kunne ikke starte. Din grafikdriver eller browser blokerer muligvis WebGL.")}}dg();
