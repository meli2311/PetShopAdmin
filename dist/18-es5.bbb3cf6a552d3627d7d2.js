!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{VC8i:function(e,i,c){"use strict";c.r(i),c.d(i,"SalesModule",function(){return M});var o=c("ofXK"),a=c("tyNb"),b=c("fXoL"),r=c("1kSV");function l(t,e){if(1&t&&(b.Wb(0),b.Tb(1,"br"),b.Yb(2,"small"),b.Nc(3),b.Xb(),b.Tb(4,"br"),b.Yb(5,"small"),b.Nc(6),b.Xb(),b.Tb(7,"br"),b.Yb(8,"del"),b.Nc(9),b.Xb(),b.Vb()),2&t){var n=b.mc().$implicit,i=b.mc();b.Fb(3),b.Pc("CUPON: ",n.code_cupon,""),b.Fb(3),b.Qc("DESCUENTO: ",n.discount," ",1==n.type_discount?"%":i.sale.currency_payment,""),b.Fb(3),b.Qc("PRECIO UNITARIO: ",n.precio_unitario," ",i.sale.currency_payment,"")}}function s(t,e){if(1&t&&(b.Yb(0,"tr"),b.Yb(1,"td"),b.Nc(2),b.Xb(),b.Yb(3,"td"),b.Tb(4,"img",13),b.Xb(),b.Yb(5,"td",14),b.Nc(6),b.Xb(),b.Yb(7,"td",14),b.Nc(8),b.Lc(9,l,10,5,"ng-container",15),b.Xb(),b.Yb(10,"td",14),b.Nc(11),b.Xb(),b.Xb()),2&t){var n=e.$implicit,i=b.mc();b.Fb(2),b.Oc(n.title),b.Fb(2),b.sc("src",n.imagen,b.Ec),b.Fb(2),b.Oc(n.cantidad),b.Fb(2),b.Qc(" ",n.subtotal," ",i.sale.currency_payment," "),b.Fb(1),b.sc("ngIf",n.code_cupon),b.Fb(2),b.Qc("",n.total," ",i.sale.currency_payment,"")}}var d,u,h=((d=function(){function e(n){t(this,e),this.modal=n}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||d)(b.Sb(r.d))},d.\u0275cmp=b.Mb({type:d,selectors:[["app-detail-sales-list"]],inputs:{sale:"sale"},decls:27,vars:2,consts:[[1,"modal-content"],[1,"modal-header"],["id","example-modal-sizes-title-lg",1,"modal-title","h4"],[1,"icon-2x","text-dark-50","flaticon-cart","mx-2"],[1,"overlay","overlay-block","cursor-default","modal-body"],[1,"row"],[1,"col-12"],[1,"table-responsive"],["id","kt_advance_table_widget_1",1,"table","table-head-custom","table-vertical-center"],[1,"text-left"],[4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["width","90","alt","","srcset","",3,"src"],[1,"text-nowrap"],[4,"ngIf"]],template:function(t,e){1&t&&(b.Yb(0,"div",0),b.Yb(1,"div",1),b.Yb(2,"div",2),b.Tb(3,"i",3),b.Nc(4),b.Xb(),b.Xb(),b.Yb(5,"div",4),b.Yb(6,"div",5),b.Yb(7,"div",6),b.Yb(8,"div",7),b.Yb(9,"table",8),b.Yb(10,"thead"),b.Yb(11,"tr",9),b.Yb(12,"th"),b.Nc(13,"PRODUCTO"),b.Xb(),b.Yb(14,"th"),b.Nc(15,"PORTADA"),b.Xb(),b.Yb(16,"th"),b.Nc(17,"CANTIDAD"),b.Xb(),b.Yb(18,"th"),b.Nc(19,"SUBTOTAL"),b.Xb(),b.Yb(20,"th"),b.Nc(21,"TOTAL"),b.Xb(),b.Xb(),b.Xb(),b.Yb(22,"tbody"),b.Lc(23,s,12,8,"tr",10),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Yb(24,"div",11),b.Yb(25,"button",12),b.ic("click",function(){return e.modal.dismiss()}),b.Nc(26," Cerrar "),b.Xb(),b.Xb(),b.Xb()),2&t&&(b.Fb(4),b.Pc(" VER ORDEN: #",e.sale.n_transaccion," "),b.Fb(19),b.sc("ngForOf",e.sale.items))},directives:[o.m,o.n],styles:[""]}),d),p=c("0np6"),f=c("tk/3"),g=c("2Vo4"),v=c("nYR2"),m=c("tmEo"),X=((u=function(){function e(n,i){t(this,e),this.http=n,this.authservice=i,this.isLoadingSubject=new g.a(!1),this.isLoading$=this.isLoadingSubject.asObservable()}return n(e,[{key:"allSales",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0;this.isLoadingSubject.next(!0);var i=new f.d({Authorization:"Bearer "+this.authservice.token});return this.http.post(p.b+"/sales/all?page="+e,n,{headers:i}).pipe(Object(v.a)(function(){return t.isLoadingSubject.next(!1)}))}}]),e}()).\u0275fac=function(t){return new(t||u)(b.fc(f.b),b.fc(m.a))},u.\u0275prov=b.Ob({token:u,factory:u.\u0275fac,providedIn:"root"}),u),Y=c("3Pt+");function _(t,e){1&t&&(b.Wb(0),b.Tb(1,"span",27),b.Vb())}function y(t,e){if(1&t&&(b.Wb(0),b.Yb(1,"option",28),b.Nc(2),b.Xb(),b.Vb()),2&t){var n=e.$implicit;b.Fb(1),b.sc("value",n.id),b.Fb(1),b.Oc(n.name)}}function N(t,e){if(1&t){var n=b.Zb();b.Yb(0,"tr"),b.Yb(1,"td"),b.Nc(2),b.Xb(),b.Yb(3,"td"),b.Nc(4),b.Xb(),b.Yb(5,"td"),b.Nc(6),b.Xb(),b.Yb(7,"td"),b.Nc(8),b.Xb(),b.Yb(9,"td"),b.Nc(10),b.Xb(),b.Yb(11,"td"),b.Yb(12,"a",29),b.ic("click",function(){b.Cc(n);var t=e.$implicit;return b.mc().showDetail(t)}),b.Yb(13,"span",30),b.lc(),b.Yb(14,"svg",31),b.Yb(15,"g",32),b.Tb(16,"rect",33),b.Tb(17,"path",34),b.Tb(18,"path",35),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb()}if(2&t){var i=e.$implicit;b.Fb(2),b.Oc(i.n_transaccion),b.Fb(2),b.Oc(i.method_payment),b.Fb(2),b.Oc(i.currency_total),b.Fb(2),b.Oc(i.user.full_name.toUpperCase()),b.Fb(2),b.Qc("",i.total," ",i.currency_payment,"")}}var T,w,C,k,O=((T=function(){function e(n,i){t(this,e),this._salesServices=n,this._modelService=i,this.SALES=[],this.isLoading$=null,this.search=null,this.categories=[],this.categorie_id="",this.start_date=null,this.end_date=null}return n(e,[{key:"ngOnInit",value:function(){this.isLoading$=this._salesServices.isLoadingSubject,this.allSales()}},{key:"allSales",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this._salesServices.allSales(e,{search:this.search,categorie_id:this.categorie_id,start_date:this.start_date,end_date:this.end_date}).subscribe(function(e){console.log(e),t.SALES=e.orders.data,t.categorie_id||(t.categories=e.categories)})}},{key:"export",value:function(){var t="?=";this.search&&(t+="&search="+this.search),this.categorie_id&&(t+="&categorie_id="+this.categorie_id),this.start_date&&this.end_date&&(t+="&start_date="+this.start_date+"&end_date="+this.end_date),window.open(p.b+"/sales/export"+t,"_blank")}},{key:"reset",value:function(){this.search=null,this.categorie_id=null,this.start_date=null,this.end_date=null,this.allSales()}},{key:"showDetail",value:function(t){var e=this._modelService.open(h,{centered:!0,size:"md"});e.componentInstance.sale=t,e.result.then(function(){},function(){})}}]),e}()).\u0275fac=function(t){return new(t||T)(b.Sb(X),b.Sb(r.y))},T.\u0275cmp=b.Mb({type:T,selectors:[["app-sales-list"]],decls:61,vars:12,consts:[[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"icon-2x","text-dark-50","flaticon-presentation-1","mx-2"],[1,"card-toolbar"],[1,"card-body"],[4,"ngIf"],[1,"row"],[1,"col-3"],["type","text","name","searchText","placeholder","Buscar","value","",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-text","text-muted"],[1,"form-label"],["name","categorie_id",1,"form-control","form-control-solid","form-control-lg",3,"ngModel","ngModelChange"],["value",""],[4,"ngFor","ngForOf"],[1,"col-12"],[1,"input-group","input-group-solid"],["type","date",1,"form-control","form-control-lg","form-control-solid",3,"ngModel","ngModelChange"],["placement","top",1,"btn","btn-primary","ml-2",3,"ngbTooltip","click"],[1,"icon","text-white","flaticon-search-1"],["placement","top",1,"btn","btn-dark","ml-2",3,"ngbTooltip","click"],[1,"icon","text-white","flaticon-refresh"],["placement","top",1,"btn","btn-success","ml-2",3,"ngbTooltip","click"],[1,"table-responsive"],["id","kt_advance_table_widget_1",1,"table","table-head-custom","table-vertical-center"],[1,"text-left"],[1,"spinner","spinner-primary","ml-5"],[3,"value"],["ngbTooltip","Detalle de la Orden","ngbTooltipClass","kt-tooltip",1,"btn","btn-icon","btn-light","btn-hover-info","btn-sm",3,"click"],[1,"svg-icon","svg-icon-md","svg-icon-info"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","24px","height","24px","viewBox","0 0 24 24","version","1.1"],["stroke","none","stroke-width","1","fill","none","fill-rule","evenodd"],["x","0","y","0","width","24","height","24"],["d","M18.1446364,11.84388 L17.4471627,16.0287218 C17.4463569,16.0335568 17.4455155,16.0383857 17.4446387,16.0432083 C17.345843,16.5865846 16.8252597,16.9469884 16.2818833,16.8481927 L4.91303792,14.7811299 C4.53842737,14.7130189 4.23500006,14.4380834 4.13039941,14.0719812 L2.30560137,7.68518803 C2.28007524,7.59584656 2.26712532,7.50338343 2.26712532,7.4104669 C2.26712532,6.85818215 2.71484057,6.4104669 3.26712532,6.4104669 L16.9929851,6.4104669 L17.606173,3.78251876 C17.7307772,3.24850086 18.2068633,2.87071314 18.7552257,2.87071314 L20.8200821,2.87071314 C21.4717328,2.87071314 22,3.39898039 22,4.05063106 C22,4.70228173 21.4717328,5.23054898 20.8200821,5.23054898 L19.6915238,5.23054898 L18.1446364,11.84388 Z","fill","#000000","opacity","0.3"],["d","M6.5,21 C5.67157288,21 5,20.3284271 5,19.5 C5,18.6715729 5.67157288,18 6.5,18 C7.32842712,18 8,18.6715729 8,19.5 C8,20.3284271 7.32842712,21 6.5,21 Z M15.5,21 C14.6715729,21 14,20.3284271 14,19.5 C14,18.6715729 14.6715729,18 15.5,18 C16.3284271,18 17,18.6715729 17,19.5 C17,20.3284271 16.3284271,21 15.5,21 Z","fill","#000000"]],template:function(t,e){1&t&&(b.Yb(0,"div",0),b.Yb(1,"div",1),b.Yb(2,"div",2),b.Yb(3,"h3",3),b.Tb(4,"i",4),b.Nc(5," Lista de ordenes de compras"),b.Xb(),b.Xb(),b.Tb(6,"div",5),b.Xb(),b.Yb(7,"div",6),b.Lc(8,_,2,0,"ng-container",7),b.nc(9,"async"),b.Yb(10,"div",8),b.Yb(11,"div",9),b.Yb(12,"input",10),b.ic("ngModelChange",function(t){return e.search=t}),b.Xb(),b.Yb(13,"small",11),b.Yb(14,"b"),b.Nc(15,"Buscar"),b.Xb(),b.Nc(16," por nombre de CLIENTE"),b.Xb(),b.Xb(),b.Yb(17,"div",9),b.Yb(18,"label",12),b.Nc(19,"CATEGORIA : *"),b.Xb(),b.Yb(20,"select",13),b.ic("ngModelChange",function(t){return e.categorie_id=t}),b.Yb(21,"option",14),b.Nc(22,"Ninguno"),b.Xb(),b.Lc(23,y,3,2,"ng-container",15),b.Xb(),b.Xb(),b.Yb(24,"div",9),b.Yb(25,"div",8),b.Yb(26,"div",16),b.Yb(27,"label"),b.Nc(28,"Fecha inicio: *"),b.Xb(),b.Yb(29,"div",17),b.Yb(30,"input",18),b.ic("ngModelChange",function(t){return e.start_date=t}),b.Xb(),b.Xb(),b.Xb(),b.Yb(31,"div",16),b.Yb(32,"label"),b.Nc(33,"Fecha fin: *"),b.Xb(),b.Yb(34,"div",17),b.Yb(35,"input",18),b.ic("ngModelChange",function(t){return e.end_date=t}),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Yb(36,"div",9),b.Yb(37,"button",19),b.ic("click",function(){return e.allSales()}),b.Tb(38,"i",20),b.Xb(),b.Yb(39,"button",21),b.ic("click",function(){return e.reset()}),b.Tb(40,"i",22),b.Xb(),b.Yb(41,"button",23),b.ic("click",function(){return e.export()}),b.Nc(42," EXPORT "),b.Xb(),b.Xb(),b.Xb(),b.Yb(43,"div",24),b.Yb(44,"table",25),b.Yb(45,"thead"),b.Yb(46,"tr",26),b.Yb(47,"th"),b.Nc(48,"N\xb0 TRANSACCI\xd3N"),b.Xb(),b.Yb(49,"th"),b.Nc(50,"METODO DE PAGO"),b.Xb(),b.Yb(51,"th"),b.Nc(52,"TIPO DE MONEDA DE LA VENTA"),b.Xb(),b.Yb(53,"th"),b.Nc(54,"CLIENTE"),b.Xb(),b.Yb(55,"th"),b.Nc(56,"TOTAL"),b.Xb(),b.Yb(57,"th"),b.Nc(58,"ACCI\xd3N"),b.Xb(),b.Xb(),b.Xb(),b.Yb(59,"tbody"),b.Lc(60,N,19,6,"tr",15),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Xb()),2&t&&(b.Fb(8),b.sc("ngIf",b.oc(9,10,e.isLoading$)),b.Fb(4),b.sc("ngModel",e.search),b.Fb(8),b.sc("ngModel",e.categorie_id),b.Fb(3),b.sc("ngForOf",e.categories),b.Fb(7),b.sc("ngModel",e.start_date),b.Fb(5),b.sc("ngModel",e.end_date),b.Fb(2),b.sc("ngbTooltip","Filtro"),b.Fb(2),b.sc("ngbTooltip","Reset"),b.Fb(2),b.sc("ngbTooltip","Export"),b.Fb(19),b.sc("ngForOf",e.SALES))},directives:[o.n,Y.d,Y.n,Y.q,Y.v,Y.r,Y.x,o.m,r.Y],pipes:[o.b],styles:[""]}),T),F=[{path:"",component:(w=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}(),w.\u0275fac=function(t){return new(t||w)},w.\u0275cmp=b.Mb({type:w,selectors:[["app-sales"]],decls:1,vars:0,template:function(t,e){1&t&&b.Tb(0,"router-outlet")},directives:[a.l],styles:[""]}),w),children:[{path:"lista-de-ordenes",component:O},{path:"",redirectTo:"lista-de-ordenes",pathMatch:"full"},{path:"**",redirectTo:"lista-de-ordenes",pathMatch:"full"}]}],L=((C=n(function e(){t(this,e)})).\u0275mod=b.Qb({type:C}),C.\u0275inj=b.Pb({factory:function(t){return new(t||C)},imports:[[a.k.forChild(F)],a.k]}),C),x=c("e8Ap"),S=c("Br0f"),M=((k=n(function e(){t(this,e)})).\u0275mod=b.Qb({type:k}),k.\u0275inj=b.Pb({factory:function(t){return new(t||k)},imports:[[o.c,L,f.c,Y.j,r.A,Y.t,x.b,S.a,r.z,r.r]]}),k)}}])}();