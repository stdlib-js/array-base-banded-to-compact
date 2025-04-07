// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r,n){return r>n?r:n}function n(r,n){return r<n?r:n}function t(r,n){var t,u;for(t=[],u=0;u<n;u++)t.push(r);return t}function u(r){return function(r,n){var u,f,o,e;for(f=n[1],o=n[0],u=[],e=0;e<o;e++)u.push(t(r,f));return u}(0,r)}function f(t,f,o,e){var i,c,a,h,l,p,s;if(a=t.length,h=t[0].length,e){for(i=u([h,f+o+1]),p=0;p<h;p++)for(c=i[p],s=f-p,l=r(0,p-f);l<n(a,p+o+1);l++)c[s+l]=t[l][p];return i}for(i=u([f+o+1,h]),p=0;p<h;p++)for(s=f-p,l=r(0,p-f);l<n(a,p+o+1);l++)i[s+l][p]=t[l][p];return i}export{f as default};
//# sourceMappingURL=mod.js.map
