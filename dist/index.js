"use strict";var i=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var y=i(function(J,f){
var j={Error:Error,TypeError:TypeError,SyntaxError:SyntaxError,ReferenceError:ReferenceError,URIError:URIError,EvalError:EvalError,RangeError:RangeError};f.exports=j
});var m=i(function(L,p){
var w=require('@stdlib/utils/keys/dist'),v=require('@stdlib/assert/is-string/dist').isPrimitive,I=y();function U(r,t){var e,o,E,n,a,c;if(t&&t.type&&v(t.message)&&(o=I[t.type],o)){for(n=new o(t.message),E=w(t),c=0;c<E.length;c++)if(a=E[c],!(a==="type"||a==="message"||a==="name")){if(a==="stack"){if(!v(t[a]))continue;e=!0}n[a]=t[a]}return!e&&v(n.stack)&&(n.stack=""),n}return t}p.exports=U
});var g=i(function(Q,q){
var b=m();q.exports=b
});var x=i(function(W,R){
var C=[[TypeError,"TypeError"],[SyntaxError,"SyntaxError"],[ReferenceError,"ReferenceError"],[RangeError,"RangeError"],[URIError,"URIError"],[EvalError,"EvalError"],[Error,"Error"]];R.exports=C
});var l=i(function(X,k){
var N=require('@stdlib/assert/instance-of/dist'),K=require('@stdlib/utils/constructor-name/dist'),P=require('@stdlib/utils/get-prototype-of/dist'),s=x();function M(r){var t,e;for(e=0;e<s.length;e++)if(N(r,s[e][0]))return s[e][1];for(;r;){for(t=K(r),e=0;e<s.length;e++)if(t===s[e][1])return s[e][1];r=P(r)}}k.exports=M
});var T=i(function(Y,S){
var V=require('@stdlib/utils/keys/dist'),z=require('@stdlib/utils/copy/dist'),A=require('@stdlib/assert/is-error/dist'),B=require('@stdlib/string/format/dist'),D=l();function F(r){var t,e,o;if(!A(r))throw new TypeError(B('0Nh3o',r));for(e={},e.type=D(r),e.message=r.message,r.name&&(e.name=r.name),r.stack&&(e.stack=r.stack),r.code&&(e.code=r.code),r.errno&&(e.errno=r.errno),r.syscall&&(e.syscall=r.syscall),t=V(r),o=0;o<t.length;o++)e[t[o]]=z(r[t[o]]);return e}S.exports=F
});var d=i(function(Z,h){
var G=T();h.exports=G
});var O=require('@stdlib/utils/define-read-only-property/dist'),u={};O(u,"reviveError",g());O(u,"error2json",d());module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
