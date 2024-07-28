// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@v0.2.2-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constructor-name@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@v0.2.2-esm/index.mjs";var d={Error:Error,TypeError:TypeError,SyntaxError:SyntaxError,ReferenceError:ReferenceError,URIError:URIError,EvalError:EvalError,RangeError:RangeError};function l(r,t){var o,n,i,a,m,l;if(t&&t.type&&s(t.message)&&(n=d[t.type])){for(a=new n(t.message),i=e(t),l=0;l<i.length;l++)if("type"!==(m=i[l])&&"message"!==m&&"name"!==m){if("stack"===m){if(!s(t[m]))continue;o=!0}a[m]=t[m]}return!o&&s(a.stack)&&(a.stack=""),a}return t}var c=[[TypeError,"TypeError"],[SyntaxError,"SyntaxError"],[ReferenceError,"ReferenceError"],[RangeError,"RangeError"],[URIError,"URIError"],[EvalError,"EvalError"],[Error,"Error"]];function p(r){var s,d,l;if(!o(r))throw new TypeError(n("invalid argument. Must provide an error object. Value: `%s`.",r));for((d={}).type=function(r){var e,s;for(s=0;s<c.length;s++)if(i(r,c[s][0]))return c[s][1];for(;r;){for(e=a(r),s=0;s<c.length;s++)if(e===c[s][1])return c[s][1];r=m(r)}}(r),d.message=r.message,r.name&&(d.name=r.name),r.stack&&(d.stack=r.stack),r.code&&(d.code=r.code),r.errno&&(d.errno=r.errno),r.syscall&&(d.syscall=r.syscall),s=e(r),l=0;l<s.length;l++)d[s[l]]=t(r[s[l]]);return d}var E={};r(E,"reviveError",l),r(E,"error2json",p);export{E as default,p as error2json,l as reviveError};
//# sourceMappingURL=index.mjs.map
