// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-max@v0.3.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-min@v0.3.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros2d@v0.2.2-esm/index.mjs";function r(r,i,m,n){var a,d,o,f,l,h,j;if(o=r.length,f=r[0].length,n){for(a=e([f,i+m+1]),h=0;h<f;h++)for(d=a[h],j=i-h,l=s(0,h-i);l<t(o,h+m+1);l++)d[j+l]=r[l][h];return a}for(a=e([i+m+1,f]),h=0;h<f;h++)for(j=i-h,l=s(0,h-i);l<t(o,h+m+1);l++)a[j+l][h]=r[l][h];return a}export{r as default};
//# sourceMappingURL=index.mjs.map
