(()=>{"use strict";var e,t,r,o,a,n={},c={};function i(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=n,i.c=c,e=[],i.O=(t,r,o,a)=>{if(!r){var n=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var c=!0,d=0;d<r.length;d++)(!1&a||n>=a)&&Object.keys(i.O).every((e=>i.O[e](r[d])))?r.splice(d--,1):(c=!1,a<n&&(n=a));if(c){e.splice(s--,1);var f=o();void 0!==f&&(t=f)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);i.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var c=2&o&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,i.d(a,n),a},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({90:"354ecb58",220:"b696da3b",374:"a3d14aab",401:"17896441",416:"d9e16301",425:"1cf91a6a",581:"935f2afb",714:"1be78505",742:"c377a04b",802:"5ed3387d",803:"3b8c55ea",831:"c3871b2f",873:"9ed00105",969:"14eb3368"}[e]||e)+"."+{90:"024240e0",220:"14257ac3",374:"cce8fca3",401:"b1b36f18",416:"b4d61b5b",425:"8ffe6454",581:"aa1a5d78",714:"4998f1cc",742:"af9da43a",774:"7b431aaf",802:"6f0d1b13",803:"17470db5",831:"6b91dd55",873:"c47fbb41",969:"f43282fb"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="cosmostic-docs:",i.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var c,d;if(void 0!==r)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var u=f[s];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+r){c=u;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",a+r),c.src=e),o[e]=[t];var l=(t,r)=>{c.onerror=c.onload=null,clearTimeout(b);var a=o[e];if(delete o[e],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((e=>e(r))),t)return t(r)},b=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),d&&document.head.appendChild(c)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/cosmostic-docs/",i.gca=function(e){return e={17896441:"401","354ecb58":"90",b696da3b:"220",a3d14aab:"374",d9e16301:"416","1cf91a6a":"425","935f2afb":"581","1be78505":"714",c377a04b:"742","5ed3387d":"802","3b8c55ea":"803",c3871b2f:"831","9ed00105":"873","14eb3368":"969"}[e]||e,i.p+i.u(e)},(()=>{var e={354:0,869:0};i.f.j=(t,r)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=i.p+i.u(t),c=new Error;i.l(n,(r=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,o[1](c)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],c=r[1],d=r[2],f=0;if(n.some((t=>0!==e[t]))){for(o in c)i.o(c,o)&&(i.m[o]=c[o]);if(d)var s=d(i)}for(t&&t(r);f<n.length;f++)a=n[f],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(s)},r=self.webpackChunkcosmostic_docs=self.webpackChunkcosmostic_docs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();