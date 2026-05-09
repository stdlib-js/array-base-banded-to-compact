"use strict";var g=function(o,e){return function(){return e||o((e={exports:{}}).exports,e),e.exports}};var p=g(function(z,q){
var u=require('@stdlib/math-base-special-fast-max/dist'),c=require('@stdlib/math-base-special-fast-min/dist'),m=require('@stdlib/array-base-zeros2d/dist');function h(o,e,v,x){var a,f,s,i,t,r,n;if(s=o.length,i=o[0].length,x){for(a=m([i,e+v+1]),r=0;r<i;r++)for(f=a[r],n=e-r,t=u(0,r-e);t<c(s,r+v+1);t++)f[n+t]=o[t][r];return a}for(a=m([e+v+1,i]),r=0;r<i;r++)for(n=e-r,t=u(0,r-e);t<c(s,r+v+1);t++)a[n+t][r]=o[t][r];return a}q.exports=h
});var d=p();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
