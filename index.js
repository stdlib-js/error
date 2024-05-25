// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,t,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);o=r.arg}switch(r.specifier){case"e":case"E":t=o.toExponential(r.precision);break;case"f":case"F":t=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),t=o.toExponential(e)):t=o.toPrecision(r.precision),r.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,h,"e"),t=p.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,v,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,d,"$1.e")),o>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):l.call(t)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=Array.isArray;function O(r){return r!=r}function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,u,f,l,s,p,y,v,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,g=void 0,(g=y-p.length)<0?p:p=v?p+E(g):E(g)+p)),u+=n.arg||"",f+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function _(r){var e,t,n,o;for(t=[],o=0,n=x.exec(r);n;)(e=r.slice(o,x.lastIndex-n[0].length)).length&&t.push(e),t.push(U(n)),o=x.lastIndex,n=x.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function T(r){var e,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[_(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var k,F=Object.prototype,P=F.toString,V=F.__defineGetter__,R=F.__defineSetter__,C=F.__lookupGetter__,$=F.__lookupSetter__;k=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(C.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var B=k;function N(r,e,t){B(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}function M(r){return Object.keys(Object(r))}var L=void 0!==Object.keys;var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return G&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&X.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof D?D.toStringTag:"";var q,H=z()?function(r){var e,t,n;if(null==r)return W.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return W.call(r)};function J(r){return"[object Arguments]"===H(r)}q=function(){return J(arguments)}();var K=q;function Q(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function rr(r){return"string"==typeof r}var er=String.prototype.valueOf;var tr=z();function nr(r){return"object"==typeof r&&(r instanceof String||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object String]"===H(r)))}function or(r){return rr(r)||nr(r)}function ir(r){return"number"==typeof r}Q(or,"isPrimitive",rr),Q(or,"isObject",nr);var ar=Number,ur=ar.prototype.toString;var cr=z();function fr(r){return"object"==typeof r&&(r instanceof ar||(cr?function(r){try{return ur.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function lr(r){return ir(r)||fr(r)}function sr(r){return r!=r}function pr(r){return ir(r)&&sr(r)}function yr(r){return fr(r)&&sr(r.valueOf())}function vr(r){return pr(r)||yr(r)}Q(lr,"isPrimitive",ir),Q(lr,"isObject",fr),Q(vr,"isPrimitive",pr),Q(vr,"isObject",yr);var gr=Number.POSITIVE_INFINITY,dr=ar.NEGATIVE_INFINITY,br=Math.floor;function hr(r){return br(r)===r}function wr(r){return r<gr&&r>dr&&hr(r)}function mr(r){return ir(r)&&wr(r)}function Er(r){return fr(r)&&wr(r.valueOf())}function jr(r){return mr(r)||Er(r)}Q(jr,"isPrimitive",mr),Q(jr,"isObject",Er);var Ar=Object.prototype.propertyIsEnumerable;var Or=!Ar.call("beep","0");function Ir(r,e){var t;return null!=r&&(!(t=Ar.call(r,e))&&Or&&or(r)?!pr(e=+e)&&mr(e)&&e>=0&&e<r.length:t)}var Sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)},xr=4294967295;var Ur=K?J:function(r){return null!==r&&"object"==typeof r&&!Sr(r)&&"number"==typeof r.length&&hr(r.length)&&r.length>=0&&r.length<=xr&&Z(r,"callee")&&!Ir(r,"callee")},_r=Array.prototype.slice;function Tr(r){return null!==r&&"object"==typeof r}Q(Tr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Sr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Tr));var kr=Ir((function(){}),"prototype"),Fr=!Ir({toString:null},"toString"),Pr=9007199254740991;function Vr(r,e,t){var n,o,i;if(!(i=r,"object"==typeof i&&null!==i&&"number"==typeof i.length&&hr(i.length)&&i.length>=0&&i.length<=Pr||rr(r)))throw new TypeError(T("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!mr(t))throw new TypeError(T("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(vr(e)){for(;o<n;o++)if(vr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Rr=/./;function Cr(r){return"boolean"==typeof r}var $r=Boolean,Br=Boolean.prototype.toString;var Nr=z();function Mr(r){return"object"==typeof r&&(r instanceof $r||(Nr?function(r){try{return Br.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function Lr(r){return Cr(r)||Mr(r)}Q(Lr,"isPrimitive",Cr),Q(Lr,"isObject",Mr);var Gr="object"==typeof self?self:null,zr="object"==typeof window?window:null,Wr="object"==typeof global?global:null,Xr="object"==typeof globalThis?globalThis:null;var Zr=function(r){if(arguments.length){if(!Cr(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Xr)return Xr;if(Gr)return Gr;if(zr)return zr;if(Wr)return Wr;throw new Error("unexpected error. Unable to resolve global object.")}(),Dr=Zr.document&&Zr.document.childNodes,Yr=Int8Array;function qr(){return/^\s*function\s*([^(]*)/i}var Hr=/^\s*function\s*([^(]*)/i;function Jr(r){return Tr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function Kr(r){var e,t,n;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Hr.exec(n.toString()))return e[1]}return Jr(r)?"Buffer":t}Q(qr,"REGEXP",Hr);var Qr="function"==typeof Rr||"object"==typeof Yr||"function"==typeof Dr?function(r){return Kr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Kr(r).toLowerCase():e};function re(r){return r.constructor&&r.constructor.prototype===r}var ee=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],te="undefined"==typeof window?void 0:window;var ne=function(){var r;if("undefined"===Qr(te))return!1;for(r in te)try{-1===Vr(ee,r)&&Z(te,r)&&null!==te[r]&&"object"===Qr(te[r])&&re(te[r])}catch(r){return!0}return!1}(),oe="undefined"!=typeof window;var ie,ae=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ie=L?function(){return 2!==(M(arguments)||"").length}(1,2)?function(r){return Ur(r)?M(_r.call(r)):M(r)}:M:function(r){var e,t,n,o,i,a,u;if(o=[],Ur(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!Z(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Tr(r))return o;t=kr&&n}for(i in r)t&&"prototype"===i||!Z(r,i)||o.push(String(i));if(Fr)for(e=function(r){if(!1===oe&&!ne)return re(r);try{return re(r)}catch(r){return!1}}(r),u=0;u<ae.length;u++)a=ae[u],e&&"constructor"===a||!Z(r,a)||o.push(String(a));return o};var ue=ie,ce={Error:Error,TypeError:TypeError,SyntaxError:SyntaxError,ReferenceError:ReferenceError,URIError:URIError,EvalError:EvalError,RangeError:RangeError};function fe(r){return mr(r)&&r>=0}function le(r){return Er(r)&&r.valueOf()>=0}function se(r){return fe(r)||le(r)}Q(se,"isPrimitive",fe),Q(se,"isObject",le);var pe=Object;function ye(r){return"function"===Qr(r)}var ve,ge=Object.getPrototypeOf;ve=ye(Object.getPrototypeOf)?ge:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var de=ve;function be(r){return null==r?null:(r=pe(r),de(r))}function he(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===H(r))return!0;r=be(r)}return!1}function we(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}Q(we,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/);var me=void 0!==Object.getOwnPropertyNames,Ee=pe.getOwnPropertyNames;var je=me?function(r){return Ee(pe(r))}:function(r){return ue(pe(r))},Ae=void 0!==Object.getOwnPropertyDescriptor,Oe=Object.getOwnPropertyDescriptor;var Ie=Ae?function(r,e){var t;return null==r||void 0===(t=Oe(r,e))?null:t}:function(r,e){return Z(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null},Se="function"==typeof Buffer?Buffer:null;var xe,Ue=r.Buffer;xe=function(){var r,e;if("function"!=typeof Se)return!1;try{r=Jr(e="function"==typeof Se.from?Se.from([1,2,3,4]):new Se([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?Ue:function(){throw new Error("not implemented")};var _e=xe;var Te=ye(_e.from)?function(r){if(!Jr(r))throw new TypeError(T("invalid argument. Must provide a Buffer. Value: `%s`.",r));return _e.from(r)}:function(r){if(!Jr(r))throw new TypeError(T("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new _e(r)},ke="function"==typeof Int8Array;var Fe="function"==typeof Int8Array?Int8Array:null;var Pe,Ve="function"==typeof Int8Array?Int8Array:void 0;Pe=function(){var r,e,t;if("function"!=typeof Fe)return!1;try{e=new Fe([1,3.14,-3.14,128]),t=e,r=(ke&&t instanceof Int8Array||"[object Int8Array]"===H(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Ve:function(){throw new Error("not implemented")};var Re=Pe,Ce="function"==typeof Uint8Array;var $e="function"==typeof Uint8Array?Uint8Array:null;var Be,Ne="function"==typeof Uint8Array?Uint8Array:void 0;Be=function(){var r,e,t;if("function"!=typeof $e)return!1;try{e=new $e(e=[1,3.14,-3.14,256,257]),t=e,r=(Ce&&t instanceof Uint8Array||"[object Uint8Array]"===H(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ne:function(){throw new Error("not implemented")};var Me=Be,Le="function"==typeof Uint8ClampedArray;var Ge="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var ze,We="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;ze=function(){var r,e,t;if("function"!=typeof Ge)return!1;try{e=new Ge([-1,0,1,3.14,4.99,255,256]),t=e,r=(Le&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===H(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?We:function(){throw new Error("not implemented")};var Xe=ze,Ze="function"==typeof Int16Array;var De="function"==typeof Int16Array?Int16Array:null;var Ye,qe="function"==typeof Int16Array?Int16Array:void 0;Ye=function(){var r,e,t;if("function"!=typeof De)return!1;try{e=new De([1,3.14,-3.14,32768]),t=e,r=(Ze&&t instanceof Int16Array||"[object Int16Array]"===H(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?qe:function(){throw new Error("not implemented")};var He=Ye,Je="function"==typeof Uint16Array;var Ke="function"==typeof Uint16Array?Uint16Array:null;var Qe,rt="function"==typeof Uint16Array?Uint16Array:void 0;Qe=function(){var r,e,t;if("function"!=typeof Ke)return!1;try{e=new Ke(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Je&&t instanceof Uint16Array||"[object Uint16Array]"===H(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rt:function(){throw new Error("not implemented")};var et=Qe,tt="function"==typeof Int32Array;var nt="function"==typeof Int32Array?Int32Array:null;var ot,it="function"==typeof Int32Array?Int32Array:void 0;ot=function(){var r,e,t;if("function"!=typeof nt)return!1;try{e=new nt([1,3.14,-3.14,2147483648]),t=e,r=(tt&&t instanceof Int32Array||"[object Int32Array]"===H(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?it:function(){throw new Error("not implemented")};var at=ot,ut="function"==typeof Uint32Array;var ct="function"==typeof Uint32Array?Uint32Array:null;var ft,lt="function"==typeof Uint32Array?Uint32Array:void 0;ft=function(){var r,e,t;if("function"!=typeof ct)return!1;try{e=new ct(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ut&&t instanceof Uint32Array||"[object Uint32Array]"===H(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?lt:function(){throw new Error("not implemented")};var st=ft,pt="function"==typeof Float32Array;var yt="function"==typeof Float32Array?Float32Array:null;var vt,gt="function"==typeof Float32Array?Float32Array:void 0;vt=function(){var r,e,t;if("function"!=typeof yt)return!1;try{e=new yt([1,3.14,-3.14,5e40]),t=e,r=(pt&&t instanceof Float32Array||"[object Float32Array]"===H(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===gr}catch(e){r=!1}return r}()?gt:function(){throw new Error("not implemented")};var dt=vt,bt="function"==typeof Float64Array;var ht="function"==typeof Float64Array?Float64Array:null;var wt,mt="function"==typeof Float64Array?Float64Array:void 0;wt=function(){var r,e,t;if("function"!=typeof ht)return!1;try{e=new ht([1,3.14,-3.14,NaN]),t=e,r=(bt&&t instanceof Float64Array||"[object Float64Array]"===H(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?mt:function(){throw new Error("not implemented")};var Et=wt;function jt(r){return new Re(r)}function At(r){return new Me(r)}function Ot(r){return new Xe(r)}function It(r){return new He(r)}function St(r){return new et(r)}function xt(r){return new at(r)}function Ut(r){return new st(r)}function _t(r){return new dt(r)}function Tt(r){return new Et(r)}var kt={int8array:jt,uint8array:At,uint8clampedarray:Ot,int16array:It,uint16array:St,int32array:xt,uint32array:Ut,float32array:_t,float64array:Tt};function Ft(r,e,t,n,o){var i,a,u,c,f,l,s,p,y,v;if(o-=1,"object"!=typeof r||null===r)return r;if(Jr(r))return Te(r);if(he(r))return function(r){var e,t,n,o,i,a,u=[],c=[];for(i=new r.constructor(r.message),u.push(r),c.push(i),r.stack&&(i.stack=r.stack),r.code&&(i.code=r.code),r.errno&&(i.errno=r.errno),r.syscall&&(i.syscall=r.syscall),e=ue(r),a=0;a<e.length;a++)o=e[a],Z(t=Ie(r,o),"value")&&(n=Sr(r[o])?[]:{},t.value=Ft(r[o],n,u,c,-1)),B(i,o,t);return i}(r);if("date"===(u=Qr(r)))return new Date(+r);if("regexp"===u)return function(r){if(!rr(r))throw new TypeError(T("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}(r.toString());if("set"===u)return new Set(r);if("map"===u)return new Map(r);if("string"===u||"boolean"===u||"number"===u)return r.valueOf();if(f=kt[u])return f(r);if("array"!==u&&"object"!==u)return"function"==typeof Object.freeze?function(r){var e,t,n,o,i,a,u,c;for(e=[],o=[],u=Object.create(be(r)),e.push(r),o.push(u),t=je(r),c=0;c<t.length;c++)n=t[c],Z(i=Ie(r,n),"value")&&(a=Sr(r[n])?[]:{},i.value=Ft(r[n],a,e,o,-1)),B(u,n,i);return Object.isExtensible(r)||Object.preventExtensions(u),Object.isSealed(r)&&Object.seal(u),Object.isFrozen(r)&&Object.freeze(u),u}(r):{};if(a=ue(r),o>0)for(i=u,v=0;v<a.length;v++)p=r[l=a[v]],u=Qr(p),"object"!=typeof p||null===p||"array"!==u&&"object"!==u||Jr(p)?"object"===i?(Z(c=Ie(r,l),"value")&&(c.value=Ft(p)),B(e,l,c)):e[l]=Ft(p):-1===(y=Vr(t,p))?(s=Sr(p)?new Array(p.length):{},t.push(p),n.push(s),"array"===i?e[l]=Ft(p,s,t,n,o):(Z(c=Ie(r,l),"value")&&(c.value=Ft(p,s,t,n,o)),B(e,l,c))):e[l]=n[y];else if("array"===u)for(v=0;v<a.length;v++)e[l=a[v]]=r[l];else for(v=0;v<a.length;v++)l=a[v],c=Ie(r,l),B(e,l,c);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}function Pt(r,e){var t;if(arguments.length>1){if(!fe(e))throw new TypeError(T("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(0===e)return r}else e=gr;return Ft(r,t=Sr(r)?new Array(r.length):{},[r],[t],e)}function Vt(r,e){if("function"!=typeof e)throw new TypeError(T("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}var Rt=[[TypeError,"TypeError"],[SyntaxError,"SyntaxError"],[ReferenceError,"ReferenceError"],[RangeError,"RangeError"],[URIError,"URIError"],[EvalError,"EvalError"],[Error,"Error"]];var Ct={};return N(Ct,"reviveError",(function(r,e){var t,n,o,i,a,u;if(e&&e.type&&rr(e.message)&&(n=ce[e.type])){for(i=new n(e.message),o=ue(e),u=0;u<o.length;u++)if("type"!==(a=o[u])&&"message"!==a&&"name"!==a){if("stack"===a){if(!rr(e[a]))continue;t=!0}i[a]=e[a]}return!t&&rr(i.stack)&&(i.stack=""),i}return e})),N(Ct,"error2json",(function(r){var e,t,n;if(!he(r))throw new TypeError(T("invalid argument. Must provide an error object. Value: `%s`.",r));for((t={}).type=function(r){var e,t;for(t=0;t<Rt.length;t++)if(Vt(r,Rt[t][0]))return Rt[t][1];for(;r;){for(e=Kr(r),t=0;t<Rt.length;t++)if(e===Rt[t][1])return Rt[t][1];r=be(r)}}(r),t.message=r.message,r.name&&(t.name=r.name),r.stack&&(t.stack=r.stack),r.code&&(t.code=r.code),r.errno&&(t.errno=r.errno),r.syscall&&(t.syscall=r.syscall),e=ue(r),n=0;n<e.length;n++)t[e[n]]=Pt(r[e[n]]);return t})),Ct}));
//# sourceMappingURL=index.js.map