import{r as b,s as I,v as A,c as C,n as P,t as o,o as H,I as L,w as N}from"./plugin-vueexport-helper-fba48285.js";import{o as S,H as f,b as y}from"./on-popup-reopen-31dce3e1.js";import{r as h,o as E,n as d,b as O,a as r,d as _}from"./index-a7cc648c.js";const z=(e,i)=>{const t=h(),a=()=>{t.value=A(e).height};return E(()=>{if(d(a),i)for(let c=1;c<=3;c++)setTimeout(a,100*c)}),S(()=>d(a)),O([b,I],a),t};function D(e,i){const t=z(e,!0);return a=>r("div",{class:i("placeholder"),style:{height:t.value?`${t.value}px`:void 0}},[a()])}const[M,n]=C("nav-bar"),p={title:String,fixed:Boolean,zIndex:P,border:o,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:o};var F=_({name:M,props:p,emits:["clickLeft","clickRight"],setup(e,{emit:i,slots:t}){const a=h(),c=D(a,n),u=l=>i("clickLeft",l),g=l=>i("clickRight",l),v=()=>t.left?t.left():[e.leftArrow&&r(L,{class:n("arrow"),name:"arrow-left"},null),e.leftText&&r("span",{class:n("text")},[e.leftText])],x=()=>t.right?t.right():r("span",{class:n("text")},[e.rightText]),s=()=>{const{title:l,fixed:T,border:m,zIndex:k}=e,w=H(k),B=e.leftArrow||e.leftText||t.left,R=e.rightText||t.right;return r("div",{ref:a,style:w,class:[n({fixed:T}),{[y]:m,"van-safe-area-top":e.safeAreaInsetTop}]},[r("div",{class:n("content")},[B&&r("div",{class:[n("left"),e.clickable?f:""],onClick:u},[v()]),r("div",{class:[n("title"),"van-ellipsis"]},[t.title?t.title():l]),R&&r("div",{class:[n("right"),e.clickable?f:""],onClick:g},[x()])])])};return()=>e.fixed&&e.placeholder?c(s):s()}});const Z=N(F);export{Z as N,D as u};