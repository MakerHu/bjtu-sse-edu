import{E as he,F as X,G as me,I as Oe,r as He,v as be,c as D,n as z,l as ge,m as p,A as ye,J as we,e as xe,g as De,z as Se,K as Y,h as E,d as Te,f as Fe,w as ee,L as q,t as j,u as Me,o as We,p as se,q as Q,B as Ue,M as Ze,N as re,b as Ve,s as Ke,a as je,O as qe,Q as ce}from"./index-2823c140.js";import{S as Ge,a as Je}from"./index-7e7bc82a.js";import{k as T,E as Xe,x as Ye,q as Qe,j as F,C as te,h as R,p as _,n as A,b as g,f as Ce,z as et,G as tt,H as nt,I as at,J as ot,A as lt,s as it,y as st,m as rt,l as ct,e as dt,u as ut,a as ft,v as de,w as ue,o as G,c as vt,K as ht,F as mt,g as bt,L as gt}from"./index-bebe609b.js";import{u as ke}from"./use-id-6a54f1cb.js";import{c as yt,a as wt,r as xt}from"./use-route-23e9a145.js";import{a as ne}from"./use-touch-2bd0881a.js";function St(e,a,l){let o,r=0;const t=e.scrollLeft,i=l===0?1:Math.round(l*1e3/16);function c(){he(o)}function u(){e.scrollLeft+=(a-t)/i,++r<i&&(o=X(u))}return u(),c}function Tt(e,a,l,o){let r,t=me(e);const i=t<a,c=l===0?1:Math.round(l*1e3/16),u=(a-t)/c;function b(){he(r)}function y(){t+=u,(i&&t>a||!i&&t<a)&&(t=a),Oe(e,t),i&&t<a||!i&&t>a?r=X(y):o&&(r=X(o))}return y(),b}function Ct(){const e=T([]),a=[];return Xe(()=>{e.value=[]}),[e,o=>(a[o]||(a[o]=r=>{e.value[o]=r}),a[o])]}function Re(e,a){if(!He||!window.IntersectionObserver)return;const l=new IntersectionObserver(t=>{a(t[0].intersectionRatio>0)},{root:document.body}),o=()=>{e.value&&l.observe(e.value)},r=()=>{e.value&&l.unobserve(e.value)};Ye(r),Qe(r),be(o)}const[kt,Rt]=D("sticky"),It={zIndex:z,position:ge("top"),container:Object,offsetTop:p(0),offsetBottom:p(0)};var Bt=F({name:kt,props:It,emits:["scroll","change"],setup(e,{emit:a,slots:l}){const o=T(),r=ye(o),t=te({fixed:!1,width:0,height:0,transform:0}),i=T(!1),c=R(()=>we(e.position==="top"?e.offsetTop:e.offsetBottom)),u=R(()=>{if(i.value)return;const{fixed:v,height:C,width:f}=t;if(v)return{width:`${f}px`,height:`${C}px`}}),b=R(()=>{if(!t.fixed||i.value)return;const v=xe(De(e.zIndex),{width:`${t.width}px`,height:`${t.height}px`,[e.position]:`${c.value}px`});return t.transform&&(v.transform=`translate3d(0, ${t.transform}px, 0)`),v}),y=v=>a("scroll",{scrollTop:v,isFixed:t.fixed}),I=()=>{if(!o.value||Y(o))return;const{container:v,position:C}=e,f=E(o),S=me(window);if(t.width=f.width,t.height=f.height,C==="top")if(v){const d=E(v),B=d.bottom-c.value-t.height;t.fixed=c.value>f.top&&d.bottom>0,t.transform=B<0?B:0}else t.fixed=c.value>f.top;else{const{clientHeight:d}=document.documentElement;if(v){const B=E(v),m=d-B.top-c.value-t.height;t.fixed=d-c.value<f.bottom&&d>B.top,t.transform=m<0?-m:0}else t.fixed=d-c.value<f.bottom}y(S)};return _(()=>t.fixed,v=>a("change",v)),Se("scroll",I,{target:r,passive:!0}),Re(o,I),_([Te,Fe],()=>{!o.value||Y(o)||!t.fixed||(i.value=!0,A(()=>{const v=E(o);t.width=v.width,t.height=v.height,i.value=!1}))}),()=>{var v;return g("div",{ref:o,style:u.value},[g("div",{class:Rt({fixed:t.fixed&&!i.value}),style:b.value},[(v=l.default)==null?void 0:v.call(l)])])}}});const _t=ee(Bt),[$t,fe]=D("tabs");var Pt=F({name:$t,props:{count:q(Number),inited:Boolean,animated:Boolean,duration:q(z),swipeable:Boolean,lazyRender:Boolean,currentIndex:q(Number)},emits:["change"],setup(e,{emit:a,slots:l}){const o=T(),r=c=>a("change",c),t=()=>{var c;const u=(c=l.default)==null?void 0:c.call(l);return e.animated||e.swipeable?g(Ge,{ref:o,loop:!1,class:fe("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:r},{default:()=>[u]}):u},i=c=>{const u=o.value;u&&u.state.active!==c&&u.swipeTo(c,{immediate:!e.inited})};return _(()=>e.currentIndex,i),Ce(()=>{i(e.currentIndex)}),ne({swipeRef:o}),()=>g("div",{class:fe("content",{animated:e.animated||e.swipeable})},[t()])}});const[Ie,K]=D("tabs"),At={type:ge("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:p(0),duration:p(.3),animated:Boolean,ellipsis:j,swipeable:Boolean,scrollspy:Boolean,offsetTop:p(0),background:String,lazyRender:j,lineWidth:z,lineHeight:z,beforeChange:Function,swipeThreshold:p(5),titleActiveColor:String,titleInactiveColor:String},Be=Symbol(Ie);var zt=F({name:Ie,props:At,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:a,slots:l}){let o,r,t,i,c;const u=T(),b=T(),y=T(),I=T(),v=ke(),C=ye(u),[f,S]=Ct(),{children:d,linkChildren:B}=Me(Be),m=te({inited:!1,position:"",lineStyle:{},currentIndex:-1}),L=R(()=>d.length>+e.swipeThreshold||!e.ellipsis||e.shrink),M=R(()=>({borderColor:e.color,background:e.background})),O=(n,s)=>{var h;return(h=n.name)!=null?h:s},W=R(()=>{const n=d[m.currentIndex];if(n)return O(n,m.currentIndex)}),N=R(()=>we(e.offsetTop)),ae=R(()=>e.sticky?N.value+o:0),H=n=>{const s=b.value,h=f.value;if(!L.value||!s||!h||!h[m.currentIndex])return;const x=h[m.currentIndex].$el,w=x.offsetLeft-(s.offsetWidth-x.offsetWidth)/2;i&&i(),i=St(s,w,n?0:+e.duration)},$=()=>{const n=m.inited;A(()=>{const s=f.value;if(!s||!s[m.currentIndex]||e.type!=="line"||Y(u.value))return;const h=s[m.currentIndex].$el,{lineWidth:x,lineHeight:w}=e,k=h.offsetLeft+h.offsetWidth/2,P={width:se(x),backgroundColor:e.color,transform:`translateX(${k}px) translateX(-50%)`};if(n&&(P.transitionDuration=`${e.duration}s`),Q(w)){const V=se(w);P.height=V,P.borderRadius=V}m.lineStyle=P})},_e=n=>{const s=n<m.currentIndex?-1:1;for(;n>=0&&n<d.length;){if(!d[n].disabled)return n;n+=s}},U=(n,s)=>{const h=_e(n);if(!Q(h))return;const x=d[h],w=O(x,h),k=m.currentIndex!==null;m.currentIndex!==h&&(m.currentIndex=h,s||H(),$()),w!==e.active&&(a("update:active",w),k&&a("change",w,x.title)),t&&!e.scrollspy&&Ze(Math.ceil(re(u.value)-N.value))},Z=(n,s)=>{const h=d.find((w,k)=>O(w,k)===n),x=h?d.indexOf(h):0;U(x,s)},oe=(n=!1)=>{if(e.scrollspy){const s=d[m.currentIndex].$el;if(s&&C.value){const h=re(s,C.value)-ae.value;r=!0,c&&c(),c=Tt(C.value,h,n?0:+e.duration,()=>{r=!1})}}},$e=(n,s,h)=>{const{title:x,disabled:w}=d[s],k=O(d[s],s);w||(yt(e.beforeChange,{args:[k],done:()=>{U(s),oe()}}),wt(n)),a("clickTab",{name:k,title:x,event:h,disabled:w})},Pe=n=>{t=n.isFixed,a("scroll",n)},Ae=n=>{A(()=>{Z(n),oe(!0)})},ze=()=>{for(let n=0;n<d.length;n++){const{top:s}=E(d[n].$el);if(s>ae.value)return n===0?0:n-1}return d.length-1},Ne=()=>{if(e.scrollspy&&!r){const n=ze();U(n)}},pe=()=>{if(e.type==="line"&&d.length)return g("div",{class:K("line"),style:m.lineStyle},null)},le=()=>{var n,s,h;const{type:x,border:w,sticky:k}=e,P=[g("div",{ref:k?void 0:y,class:[K("wrap"),{[Ue]:x==="line"&&w}]},[g("div",{ref:b,role:"tablist",class:K("nav",[x,{shrink:e.shrink,complete:L.value}]),style:M.value,"aria-orientation":"horizontal"},[(n=l["nav-left"])==null?void 0:n.call(l),d.map(V=>V.renderTitle($e)),pe(),(s=l["nav-right"])==null?void 0:s.call(l)])]),(h=l["nav-bottom"])==null?void 0:h.call(l)];return k?g("div",{ref:y},[P]):P},ie=()=>{$(),A(()=>{var n,s;H(!0),(s=(n=I.value)==null?void 0:n.swipeRef.value)==null||s.resize()})};_(()=>[e.color,e.duration,e.lineWidth,e.lineHeight],$),_(Te,ie),_(()=>e.active,n=>{n!==W.value&&Z(n)}),_(()=>d.length,()=>{m.inited&&(Z(e.active),$(),A(()=>{H(!0)}))});const Ee=()=>{Z(e.active,!0),A(()=>{m.inited=!0,y.value&&(o=E(y.value).height),H(!0)})},Le=(n,s)=>a("rendered",n,s);return ne({resize:ie,scrollTo:Ae}),et($),We($),be(Ee),Re(u,$),Se("scroll",Ne,{target:C,passive:!0}),B({id:v,props:e,setLine:$,scrollable:L,onRendered:Le,currentName:W,setTitleRefs:S,scrollIntoView:H}),()=>g("div",{ref:u,class:K([e.type])},[e.sticky?g(_t,{container:u.value,offsetTop:N.value,onScroll:Pe},{default:()=>[le()]}):le(),g(Pt,{ref:I,count:d.length,inited:m.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:m.currentIndex,onChange:U},{default:()=>{var n;return[(n=l.default)==null?void 0:n.call(l)]}})])}});const Nt=Symbol(),[pt,ve]=D("tab"),Et=F({name:pt,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:z,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:j},setup(e,{slots:a}){const l=R(()=>{const r={},{type:t,color:i,disabled:c,isActive:u,activeColor:b,inactiveColor:y}=e;i&&t==="card"&&(r.borderColor=i,c||(u?r.backgroundColor=i:r.color=i));const v=u?b:y;return v&&(r.color=v),r}),o=()=>{const r=g("span",{class:ve("text",{ellipsis:!e.scrollable})},[a.title?a.title():e.title]);return e.dot||Q(e.badge)&&e.badge!==""?g(Ve,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[r]}):r};return()=>g("div",{id:e.id,role:"tab",class:[ve([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:l.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[o()])}}),[Lt,J]=D("tab"),Ot=xe({},xt,{dot:Boolean,name:z,badge:z,title:String,disabled:Boolean,titleClass:Ke,titleStyle:[String,Object],showZeroBadge:j});var Ht=F({name:Lt,props:Ot,setup(e,{slots:a}){const l=ke(),o=T(!1),r=ct(),{parent:t,index:i}=je(Be);if(!t)return;const c=()=>{var f;return(f=e.name)!=null?f:i.value},u=()=>{o.value=!0,t.props.lazyRender&&A(()=>{t.onRendered(c(),e.title)})},b=R(()=>{const f=c()===t.currentName.value;return f&&!o.value&&u(),f}),y=T(""),I=T("");tt(()=>{const{titleClass:f,titleStyle:S}=e;y.value=f?nt(f):"",I.value=S&&typeof S!="string"?at(ot(S)):S});const v=f=>g(Et,rt({key:l,id:`${t.id}-${i.value}`,ref:t.setTitleRefs(i.value),style:I.value,class:y.value,isActive:b.value,controls:l,scrollable:t.scrollable.value,activeColor:t.props.titleActiveColor,inactiveColor:t.props.titleInactiveColor,onClick:S=>f(r.proxy,i.value,S)},ce(t.props,["type","color","shrink"]),ce(e,["dot","badge","title","disabled","showZeroBadge"])),{title:a.title}),C=T(!b.value);return _(b,f=>{f?C.value=!1:qe(()=>{C.value=!0})}),_(()=>e.title,()=>{t.setLine(),t.scrollIntoView()}),lt(Nt,b),ne({id:l,renderTitle:v}),()=>{var f;const S=`${t.id}-${i.value}`,{animated:d,swipeable:B,scrollspy:m,lazyRender:L}=t.props;if(!a.default&&!d)return;const M=m||b.value;if(d||B)return g(Je,{id:l,role:"tabpanel",class:J("panel-wrapper",{inactive:C.value}),tabindex:b.value?0:-1,"aria-hidden":!b.value,"aria-labelledby":S},{default:()=>{var N;return[g("div",{class:J("panel")},[(N=a.default)==null?void 0:N.call(a)])]}});const W=o.value||m||!L?(f=a.default)==null?void 0:f.call(a):null;return it(g("div",{id:l,role:"tabpanel",class:J("panel"),tabindex:M?0:-1,"aria-labelledby":S},[W]),[[st,M]])}}});const Dt=ee(Ht),Ft=ee(zt);const jt={__name:"Expand",setup(e){const a=dt();ut(),ft();const l=R({get(){return a.getters["common/getActivePage"]},set(t){a.dispatch("common/asyncUpdateActivePage",t)}}),o=T("a"),r=te([{tag:"documentary",tagName:"纪录片",content:"纪录片内容"},{tag:"knowledge",tagName:"趣味知识",content:"趣味知识内容"}]);return Ce(()=>{l.value="expand"}),(t,i)=>{const c=Dt,u=Ft;return G(),de(u,{active:o.value,"onUpdate:active":i[0]||(i[0]=b=>o.value=b)},{default:ue(()=>[(G(!0),vt(mt,null,ht(r,(b,y)=>(G(),de(c,{title:b.tagName,name:b.tag},{default:ue(()=>[bt(gt(b.content),1)]),_:2},1032,["title","name"]))),256))]),_:1},8,["active"])}}};export{jt as default};