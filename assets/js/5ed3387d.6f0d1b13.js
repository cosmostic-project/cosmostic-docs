"use strict";(self.webpackChunkcosmostic_docs=self.webpackChunkcosmostic_docs||[]).push([[802],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,y=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const o={sidebar_label:"Requirements",sidebar_position:2},i="Requirements",l={unversionedId:"requirements",id:"requirements",title:"Requirements",description:"For COSMOSTIC to work, you'll need only two things:",source:"@site/docs/requirements.md",sourceDirName:".",slug:"/requirements",permalink:"/cosmostic-docs/requirements",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Requirements",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/cosmostic-docs/"},next:{title:"Installation",permalink:"/cosmostic-docs/installation"}},p={},s=[{value:"Minecraft",id:"minecraft",level:2},{value:"Optifine",id:"optifine",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"requirements"},"Requirements"),(0,a.yg)("p",null,"For COSMOSTIC to work, you'll need only two things:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#minecraft"},"Minecraft")," (",(0,a.yg)("em",{parentName:"li"},"Java Edition"),")"),(0,a.yg)("li",{parentName:"ul"},"and ",(0,a.yg)("a",{parentName:"li",href:"#optifine"},"Optifine"))),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Windows 10 or higher")," is also required."),(0,a.yg)("h2",{id:"minecraft"},"Minecraft"),(0,a.yg)("p",null,"You obviously need ",(0,a.yg)("strong",{parentName:"p"},"Minecraft")," to get started."),(0,a.yg)("p",null,"Ensure you have the ",(0,a.yg)("em",{parentName:"p"},"Java Edition")," installed on your system. If not, you can purchase and download it from the ",(0,a.yg)("a",{parentName:"p",href:"https://www.minecraft.net/en-us/"},"official Minecraft website"),"."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"If you have already ",(0,a.yg)("strong",{parentName:"p"},"Minecraft")," ",(0,a.yg)("em",{parentName:"p"},"Bedrock Edition"),", you ",(0,a.yg)("strong",{parentName:"p"},"don't need to purshase")," the ",(0,a.yg)("em",{parentName:"p"},"Java Edition"),". Just install it from the launcher.")),(0,a.yg)("h2",{id:"optifine"},"Optifine"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Optifine")," is a mod for Minecraft that enhances performance and adds various graphical improvements. It is recommended for all Minecraft instances but it is an ",(0,a.yg)("strong",{parentName:"p"},"required")," for ",(0,a.yg)("em",{parentName:"p"},"COSMOSTIC")," to work."),(0,a.yg)("p",null,"You can get more information and download ",(0,a.yg)("em",{parentName:"p"},"Optifine")," from the ",(0,a.yg)("a",{parentName:"p",href:"https://optifine.net/downloads"},"official Optifine website"),"."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Make sure to download the ",(0,a.yg)("strong",{parentName:"p"},"compatible version")," with the one you are playing on Minecraft.")),(0,a.yg)("p",null,"To execute Optifine installer (.jar file), ",(0,a.yg)("strong",{parentName:"p"},"you need Java")," 8 or higher. Download the java installer from the ",(0,a.yg)("a",{parentName:"p",href:"https://www.java.com/en/download/windows_manual.jsp"},"official Java website"),"."))}m.isMDXComponent=!0}}]);