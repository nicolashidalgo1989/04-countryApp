import{L as d,M as l,N as f,P as u,S as a,T as h,U as C,X as M,Y as g,g as r,i as c,j as i,r as m,s,t as p}from"./chunk-ZTHPB5SN.js";var N=[{path:"about",component:C},{path:"contact",component:h},{path:"countries",loadChildren:()=>import("./chunk-QS2HEXZH.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries"}],b=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a.forRoot(N),a]});let o=t;return o})();var v=(()=>{let t=class t{constructor(){this.title="countryApp"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:6,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-3"],[1,"col","my-2"]],template:function(e,j){e&1&&(m(0,"div",0)(1,"div",1)(2,"div",2),p(3,"shared-sidebar"),s(),m(4,"div",3),p(5,"router-outlet"),s()()())},dependencies:[u,M]});let o=t;return o})();var w=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[v]}),t.\u0275inj=r({imports:[b,f,d,g]});let o=t;return o})();l().bootstrapModule(w).catch(o=>console.error(o));