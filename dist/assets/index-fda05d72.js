import{c as d,p as P,b,l as v,n as i,w as I}from"./index-9c8f557a.js";import{j as x,E as S,h as _,b as r,m as $}from"./index-7c8fba1a.js";const[j,B]=d("config-provider"),z=Symbol(j),[E,l]=d("icon"),N=e=>e==null?void 0:e.includes("/"),O={dot:Boolean,tag:v("i"),name:String,size:i,badge:i,color:String,badgeProps:Object,classPrefix:String};var h=x({name:E,props:O,setup(e,{slots:n}){const o=S(z,null),s=_(()=>e.classPrefix||(o==null?void 0:o.iconPrefix)||l());return()=>{const{tag:m,dot:g,name:a,size:u,badge:f,color:p}=e,t=N(a);return r(b,$({dot:g,tag:m,class:[s.value,t?"":`${s.value}-${a}`],style:{color:p,fontSize:P(u)},content:f},e.badgeProps),{default:()=>{var c;return[(c=n.default)==null?void 0:c.call(n),t&&r("img",{class:l("image"),src:a},null)]}})}}});const C=I(h);export{C as I};