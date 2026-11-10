"use strict";var g=function(o,e){return function(){try{return e||o((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var p=g(function(z,q){
var u=require('@stdlib/math-base-special-fast-max/dist'),c=require('@stdlib/math-base-special-fast-min/dist'),m=require('@stdlib/array-base-zeros2d/dist');function h(o,e,a,x){var i,f,s,v,t,r,n;if(s=o.length,v=o[0].length,x){for(i=m([v,e+a+1]),r=0;r<v;r++)for(f=i[r],n=e-r,t=u(0,r-e);t<c(s,r+a+1);t++)f[n+t]=o[t][r];return i}for(i=m([e+a+1,v]),r=0;r<v;r++)for(n=e-r,t=u(0,r-e);t<c(s,r+a+1);t++)i[n+t][r]=o[t][r];return i}q.exports=h
});var d=p();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
