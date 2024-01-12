import{A as _,B as P,C as K,D as Q,E as L,F as W,G as D,H as y,I as X,J as Y,K as Z,O as ee,Q as te,R as ie,S as $,V as w,W as b,Y as ne,a as O,b as A,c as V,d as U,e as I,f as q,g as T,h as z,i as f,j as B,k as J,l as H,m as R,n as s,o as g,p as m,q as u,r,s as n,t as p,u as G,v as x,w as C,x as F,y as a,z as d}from"./chunk-ZTHPB5SN.js";var v=(()=>{let e=class e{constructor(i){this.http=i,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStorage",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStorage")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStorage")))}getCountriesRequest(i){return this.http.get(i).pipe(V(()=>O([])))}searchCountryByAlphaCode(i){let o=`${this.apiUrl}/alpha/${i}`;return this.http.get(o).pipe(A(c=>c.length>0?c[0]:null),V(()=>O(null)))}search(i,o){let c=`${this.apiUrl}/${o}/${i}`;return this.getCountriesRequest(c).pipe(I(h=>{o==="capital"?this.cacheStore.byCapital={term:i,countries:h}:this.cacheStore.byCountries={term:i,countries:h}}),I(()=>this.saveToLocalStorage()))}searchRegion(i){let o=`${this.apiUrl}/region/${i}`;return this.getCountriesRequest(o).pipe(I(c=>this.cacheStore.byRegion={region:i,countries:c}),I(()=>this.saveToLocalStorage()))}};e.\u0275fac=function(o){return new(o||e)(z(Z))},e.\u0275prov=q({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function pe(t,e){t&1&&(r(0,"div",2),a(1,` No hay pa\xEDses que mostrar
`),n())}var de=t=>["/countries/by/",t];function ue(t,e){if(t&1&&(r(0,"tr")(1,"td"),a(2),n(),r(3,"td"),a(4),n(),r(5,"td"),p(6,"img",5),n(),r(7,"td"),a(8),n(),r(9,"td"),a(10),n(),r(11,"td"),a(12),K(13,"number"),n(),r(14,"td")(15,"a",6),a(16,"+ info"),n()()()),t&2){let l=e.$implicit,i=e.index;s(2),d(i+1),s(2),d(l.flag),s(2),m("src",l.flags.svg,R)("alt",l.name.common),s(2),d(l.name.common),s(2),d(l.capital),s(2),d(Q(13,8,l.population)),s(3),m("routerLink",P(10,de,l.cca3))}}function he(t,e){if(t&1&&(r(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),n(),r(5,"th"),a(6,"Icon"),n(),r(7,"th"),a(8,"Bandera"),n(),r(9,"th"),a(10,"Nombre"),n(),r(11,"th"),a(12,"Capital"),n(),r(13,"th"),a(14,"Poblaci\xF3n"),n(),r(15,"th"),a(16,"Acciones"),n()()(),r(17,"tbody"),u(18,ue,17,12,"tr",4),n()()),t&2){let l=C();s(18),m("ngForOf",l.countries)}}var E=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=f({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],["height","16",3,"src","alt"],[3,"routerLink"]],template:function(o,c){if(o&1&&u(0,pe,2,0,"div",0)(1,he,19,1,"ng-template",null,1,L),o&2){let h=F(2);m("ngIf",c.countries.length===0)("ngIfElse",h)}},dependencies:[D,y,ie,X]});let t=e;return t})();function ge(t,e){t&1&&p(0,"shared-loader")}var re=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(i){this.isLoading=!0,this.countriesService.search(i,"capital").subscribe(o=>{this.countries=o,this.isLoading=!1})}};e.\u0275fac=function(o){return new(o||e)(g(v))},e.\u0275cmp=f({type:e,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Busqueda por capital...",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(o,c){o&1&&(r(0,"h2"),a(1,"Por Capital"),n(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search",2),x("onDebounce",function(j){return c.searchByCapital(j)}),n()()(),p(6,"hr"),r(7,"div",0)(8,"div",1),u(9,ge,1,0,"shared-loader",3),p(10,"countries-table",4),n()()),o&2&&(s(5),m("initialValue",c.initialValue),s(4),m("ngIf",c.isLoading),s(1),m("countries",c.countries))},dependencies:[y,w,b,E]});let t=e;return t})();function ye(t,e){t&1&&p(0,"shared-loader")}var ae=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(i){this.isLoading=!0,this.countriesService.search(i,"name").subscribe(o=>{this.countries=o,this.isLoading=!1})}};e.\u0275fac=function(o){return new(o||e)(g(v))},e.\u0275cmp=f({type:e,selectors:[["app-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Busqueda por pa\xEDs...",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(o,c){o&1&&(r(0,"h2"),a(1,"Por Pa\xEDs"),n(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search",2),x("onDebounce",function(j){return c.searchByCountry(j)}),n()()(),p(6,"hr"),r(7,"div",0)(8,"div",1),u(9,ye,1,0,"shared-loader",3),p(10,"countries-table",4),n()()),o&2&&(s(5),m("initialValue",c.initialValue),s(4),m("ngIf",c.isLoading),s(1),m("countries",c.countries))},dependencies:[y,w,b,E]});let t=e;return t})();var ve=t=>({"btn-outline-primary":t});function Ce(t,e){if(t&1){let l=G();r(0,"button",6),x("click",function(){let c=J(l).$implicit,h=C();return H(h.searchByRegion(c))}),a(1),n()}if(t&2){let l=e.$implicit,i=C();m("ngClass",P(2,ve,i.selectedRegion===l)),s(1),_(" ",l," ")}}function Se(t,e){t&1&&p(0,"shared-loader")}var se=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.isLoading=!1,this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(i){this.selectedRegion=i,this.isLoading=!0,this.countriesService.searchRegion(i).subscribe(o=>{this.countries=o,this.isLoading=!1})}};e.\u0275fac=function(o){return new(o||e)(g(v))},e.\u0275cmp=f({type:e,selectors:[["app-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(o,c){o&1&&(r(0,"h2"),a(1,"Por Regi\xF3n"),n(),p(2,"hr"),r(3,"div",0)(4,"div",1),u(5,Ce,2,4,"button",2),n()(),p(6,"hr"),r(7,"div",0)(8,"div",3),u(9,Se,1,0,"shared-loader",4),p(10,"countries-table",5),n()()),o&2&&(s(5),m("ngForOf",c.regions),s(4),m("ngIf",c.isLoading),s(1),m("countries",c.countries))},dependencies:[W,D,y,b,E]});let t=e;return t})();function xe(t,e){t&1&&(r(0,"div",2),a(1," Espere por favor "),n())}function be(t,e){if(t&1&&(r(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4,"Pa\xEDs: "),r(5,"strong"),a(6),n()(),p(7,"hr"),n()(),r(8,"div",3)(9,"div",5)(10,"h3"),a(11,"Bandera"),n(),p(12,"img",6),n(),r(13,"div",7)(14,"h3"),a(15,"Informaci\xF3n"),n(),r(16,"ul",8)(17,"li",9)(18,"strong"),a(19,"C\xF3digo"),n(),a(20),n(),r(21,"li",9)(22,"strong"),a(23,"Poblaci\xF3n"),n(),a(24),n()()()(),r(25,"div",3)(26,"div",7)(27,"h3"),a(28,"Traducciones"),n(),r(29,"div",10)(30,"span",11),a(31),n(),r(32,"span",11),a(33),n(),r(34,"span",11),a(35),n(),r(36,"span",11),a(37),n(),r(38,"span",11),a(39),n()()()()()),t&2){let l=C();s(6),d(l.country.name.common),s(6),m("src",l.country.flags.svg,R)("alt",l.country.name.common),s(8),_(" ",l.country.cca3," "),s(4),_(" ",l.country.population," "),s(7),d(l.country.translations.ara.common),s(2),d(l.country.translations.kor.common),s(2),d(l.country.translations.ces.common),s(2),d(l.country.translations.jpn.common),s(2),d(l.country.translations.spa.common)}}var ce=(()=>{let e=class e{constructor(i,o,c){this.activatedRoute=i,this.countriesService=o,this.router=c}ngOnInit(){this.activatedRoute.params.pipe(U(({id:i})=>this.countriesService.searchCountryByAlphaCode(i))).subscribe(i=>i?this.country=i:this.router.navigateByUrl(""))}};e.\u0275fac=function(o){return new(o||e)(g(ee),g(v),g(te))},e.\u0275cmp=f({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(o,c){if(o&1&&u(0,xe,2,0,"ng-template",null,0,L)(2,be,40,10,"div",1),o&2){let h=F(1);s(2),m("ngIf",c.country)("ngIfElse",h)}},dependencies:[y]});let t=e;return t})();var Ee=[{path:"by-capital",component:re},{path:"by-country",component:ae},{path:"by-region",component:se},{path:"by/:id",component:ce},{path:"**",redirectTo:"by-capital"}],le=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=B({type:e}),e.\u0275inj=T({imports:[$.forChild(Ee),$]});let t=e;return t})();var We=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=B({type:e}),e.\u0275inj=T({imports:[Y,le,ne]});let t=e;return t})();export{We as CountriesModule};
