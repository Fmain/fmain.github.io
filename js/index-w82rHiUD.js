var N=Object.defineProperty,T=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var x=(e,o,t)=>o in e?N(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,j=(e,o)=>{for(var t in o||(o={}))b.call(o,t)&&x(e,t,o[t]);if(f)for(var t of f(o))g.call(o,t)&&x(e,t,o[t]);return e},S=(e,o)=>T(e,y(o));var _=(e,o)=>{var t={};for(var r in e)b.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&f)for(var r of f(e))o.indexOf(r)<0&&g.call(e,r)&&(t[r]=e[r]);return t};var v=(e,o,t)=>new Promise((r,s)=>{var m=a=>{try{c(t.next(a))}catch(u){s(u)}},p=a=>{try{c(t.throw(a))}catch(u){s(u)}},c=a=>a.done?r(a.value):Promise.resolve(a.value).then(m,p);c((t=t.apply(e,o)).next())});import{r as d,j as n,u as D,d as L}from"./index-7WbT3z16.js";import{a2 as P,a3 as R,a4 as B,a5 as W,a6 as C,a7 as A}from"./TextLayer-C19NPC3M.js";import{b as F}from"./books.store-BFuBvAOc.js";import{u as G,T as I}from"./index-BvMobb26.js";import"./with-default-props-kKbqWDQo.js";import"./tslib.es6-stJkEJF-.js";import"./index-DcfIKM1A.js";import"./useEffectWithTarget-8LChVJPK.js";P.workerSrc="/worker/pdf.worker.min.mjs";const O={};function V(e){const h=e||{},{file:o,loadAll:t,pageNumber:r=1,onPageLoadSuccess:s}=h,m=_(h,["file","loadAll","pageNumber","onPageLoadSuccess"]),[p,c]=d.useState(0),[a,u]=d.useState(),w=d.useRef(null),l=R(w);B(()=>{const{width:i}=l||{};i&&u(l==null?void 0:l.width)},[l],{wait:600});function E({numPages:i}){c(i),s&&s(i)}return n.jsx("div",{className:"pdf-viewer",ref:w,children:n.jsx(W,S(j({file:o,options:O,error:"Failed to load Lecture",noData:"No file.",loading:n.jsx(C,{}),onError:i=>{}},m),{onLoadSuccess:E,children:t?Array.from(new Array(p),(i,k)=>n.jsx(A,{pageNumber:k+1,width:a},`page_${k+1}`)):n.jsx(A,{pageNumber:r,width:a})}))})}const $=()=>{const e=L();function o(){I.show({content:"未能找到该书籍，即将返回",afterClose:()=>{e(-1)}})}return{back:o}};function Y(){const{back:e}=$(),{name:o}=D();if(!o)throw e();const[t,r]=d.useState();return G(()=>v(this,null,function*(){const s=yield F.getItem(o);if(!s)throw e();r(s)}),[o]),t?n.jsx("div",{children:n.jsx(V,{loadAll:!0,file:t})}):null}export{Y as default};
