"use strict";(self.webpackChunkpreventasweb=self.webpackChunkpreventasweb||[]).push([[854],{854:(J,p,s)=>{s.r(p),s.d(p,{ClientesModule:()=>q});var g=s(9808),r=s(2382),d=s(7917),e=s(4893),l=s(1980),C=s(8372),m=s(6784),_=s(5018);function f(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(){const i=e.CHM(t).$implicit;return e.oxw(3).onArmarFiltro(i)}),e.TgZ(1,"span"),e._uU(2),e.qZA()()}if(2&n){const t=a.$implicit;e.xp6(2),e.Oqu(t.RazonSocial)}}function v(n,a){if(1&n&&(e.ynx(0),e.YNc(1,f,3,1,"button",7),e.BQk()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.resultado)}}function Z(n,a){if(1&n&&(e.TgZ(0,"div",3)(1,"c-card",4)(2,"c-card-body")(3,"div",5),e.YNc(4,v,2,1,"ng-container",6),e.qZA()()()()),2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngIf",t.resultado.length)}}let h=(()=>{class n{constructor(t,o){this.servicioVentas=t,this.carritoService=o,this.txtbuscar=new r.NI(""),this.item={IdCliente:0,Codigo:"",RazonSocial:"",NroDocumento:""},this.value="",this.resultado=[],this.propagar=new e.vpe}ngOnInit(){this.txtbuscar.valueChanges.pipe((0,C.b)(500)).subscribe(t=>{this.onCargarDatos()})}onCargarDatos(){this.value.length>0?this.servicioVentas.suggestGet(this.value).subscribe(t=>{this.resultado=t}):this.resultado=[]}onArmarFiltro(t){this.servicioVentas.clientesGetOne(t.IdCliente).subscribe(o=>{this.carritoService.loadCarrrito(o[0].IdCliente),this.propagar.emit(o)}),this.resultado=[],this.value=""}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.v),e.Y36(_.z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-clientes"]],outputs:{propagar:"propagar"},decls:5,vars:3,consts:[["xs","12"],["type","search","spellcheck","false","autocomplete","off","placeholder","Buscar por,Codigo Razon social Cuit, Dni",1,"form-control",3,"formControl","ngModel","ngModelChange"],["class","c-header-nav-item suggestions","dropdown","","placement","bottom left",4,"ngIf"],["dropdown","","placement","bottom left",1,"c-header-nav-item","suggestions"],[1,"mb-4"],["cListGroup",""],[4,"ngIf"],["cListGroupItem","","class","d-flex justify-content-between align-items-center",3,"routerLink","click",4,"ngFor","ngForOf"],["cListGroupItem","",1,"d-flex","justify-content-between","align-items-center",3,"routerLink","click"]],template:function(t,o){1&t&&(e.TgZ(0,"c-row")(1,"c-col",0)(2,"input",1),e.NdJ("ngModelChange",function(i){return o.value=i}),e.qZA()()(),e._UZ(3,"c-row"),e.YNc(4,Z,5,1,"div",2)),2&t&&(e.xp6(2),e.Q6J("formControl",o.txtbuscar)("ngModel",o.value),e.xp6(2),e.Q6J("ngIf",o.resultado.length))},directives:[l.iok,l.Yp0,r.Fj,r.JJ,r.oH,g.O5,l.AkF,l.yue,l.Xre,g.sg,l.Ow$],styles:[""]}),n})();function M(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",4)(1,"c-col",5)(2,"c-card",1)(3,"c-card-header"),e._uU(4,"\n              "),e.TgZ(5,"c-row"),e._uU(6,"\n                "),e.TgZ(7,"strong"),e._uU(8,"Cuenta"),e.qZA(),e._uU(9,"\n              "),e.qZA(),e._uU(10,"\n              "),e.TgZ(11,"c-row"),e._uU(12,"\n                "),e.TgZ(13,"small"),e._uU(14),e.qZA(),e._uU(15,"\n              "),e.qZA(),e._uU(16,"\n              "),e.TgZ(17,"c-row"),e._uU(18,"\n                "),e.TgZ(19,"small"),e._uU(20),e.qZA(),e._uU(21,"\n              "),e.qZA(),e._uU(22,"\n              "),e.TgZ(23,"c-row"),e._uU(24,"\n                "),e.TgZ(25,"small"),e._uU(26),e.qZA(),e._uU(27,"\n              "),e.qZA(),e._uU(28,"\n              "),e.TgZ(29,"c-row"),e._uU(30,"\n                "),e.TgZ(31,"small"),e._uU(32),e.qZA(),e._uU(33,"\n                "),e.TgZ(34,"small"),e._uU(35),e.qZA(),e._uU(36,"\n              "),e.qZA(),e._uU(37,"\n              "),e.TgZ(38,"c-row"),e._uU(39,"\n                "),e.TgZ(40,"small"),e._uU(41),e.qZA(),e._uU(42,"\n              "),e.qZA(),e._uU(43,"\n            "),e.qZA(),e.TgZ(44,"c-card-body")(45,"c-row")(46,"button",6),e.NdJ("click",function(){return e.CHM(t),e.oxw().abrirNotaDeVenta()}),e._uU(47," Nuevo Pedido "),e.qZA()(),e._UZ(48,"br")(49,"c-row"),e.qZA()()()()}if(2&n){const t=e.oxw();e.xp6(14),e.AsE("",t.datosDeCliente.Codigo," - ",t.datosDeCliente.RazonSocial,""),e.xp6(6),e.hij("DNI-CUIT: ",t.datosDeCliente.NroDocumento,""),e.xp6(6),e.hij("Lista: ",t.datosDeCliente.Lista,""),e.xp6(6),e.hij("Dto1: ",t.datosDeCliente.Dtos,""),e.xp6(3),e.hij("Dto2: ",t.datosDeCliente.Dto2,""),e.xp6(6),e.hij("Cond.Venta: ",t.datosDeCliente.CondicionVenta,"")}}let T=(()=>{class n{constructor(t){this.router=t,this.myDate=new Date}ngOnInit(){}procesaPropagar(t){this.datosDeCliente=t[0]}abrirNotaDeVenta(){var t;this.router.navigate(["ventas/notadeventa/"+(null===(t=this.datosDeCliente)||void 0===t?void 0:t.IdCliente)])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-listado"]],decls:6,vars:1,consts:[[1,"fade-in"],[1,"mb-4"],[3,"propagar"],["class","c-header-nav-item","dropdown","","placement","bottom left",4,"ngIf"],["dropdown","","placement","bottom left",1,"c-header-nav-item"],["xs","12"],["cButton","","color","primary","type","submit",1,"me-1",3,"routerLink","click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"c-card",1)(2,"c-card-header")(3,"app-clientes",2),e.NdJ("propagar",function(i){return o.procesaPropagar(i)}),e.qZA()(),e.TgZ(4,"c-card-body"),e.YNc(5,M,50,7,"div",3),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("ngIf",o.datosDeCliente))},directives:[l.AkF,l.nkx,h,l.yue,g.O5,l.Yp0,l.iok,l.Hq3,d.rH],styles:[""]}),n})();var D=s(5226),b=s.n(D);const u=function(){return{standalone:!0}},A=[{path:"",data:{title:"Clientes"},children:[{path:"",redirectTo:"listado"},{path:"listado",component:T,data:{title:"Listado De Clientes"}},{path:"nuevocliente",component:(()=>{class n{constructor(t,o){this.ventaService=t,this.router=o,this.cliente={RazonSocial:"",Calle:"",CalleNro:"",idTipoDeDocuemento:0,NroDocumento:"",IdCondicionIva:0,IdVendedor:0,telefono:"",celular:"",email:""},this.browserDefaultsValidated=!1,this.tooltipValidated=!1}ngOnInit(){}onSubmit(){this.ventaService.clientePosibleNew(this.cliente).subscribe(t=>{this.mostrarMensaje()}),this.browserDefaultsValidated=!0}onReset(){this.browserDefaultsValidated=!1}mostrarMensaje(){b().fire({icon:"success",title:"Nuevo Cliente",text:"Cliente agregado correctamente",confirmButtonText:"Ok"}).then(t=>{t.isConfirmed&&this.redireccionarAlInicio()})}redireccionarAlInicio(){this.router.navigate([""])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.v),e.Y36(d.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-nuevocliente"]],decls:76,vars:28,consts:[["xs","12"],[1,"mb-4"],["cForm","","ngNativeValidate","",1,"row","g-3",3,"validated","ngSubmit"],["browserDefaultsForm","ngForm"],["md","4"],["cLabel","","for","validationDefault01"],["cFormControl","","id","validationDefault01","required","","type","text",3,"ngModel","ngModelOptions","ngModelChange"],["md","6"],["cLabel","","for","validationDefault02"],["cFormControl","","id","validationDefault02","required","","type","text",3,"ngModel","ngModelOptions","ngModelChange"],["md","2"],["cLabel","","for","validationDefault03"],["cFormControl","","id","validationDefault03","required","","type","text",3,"ngModel","ngModelOptions","ngModelChange"],["cLabel","","for","validationDefault04"],["cFormControl","","id","validationDefault04","required","","type","text",3,"ngModel","ngModelOptions","ngModelChange"],["cLabel","","for","validationDefault05"],["cFormControl","","id","validationDefault05","required","","type","tel",3,"ngModel","ngModelOptions","ngModelChange"],["cLabel","","for","validationDefault06"],["cFormControl","","id","validationDefault06","required","","type","email",3,"ngModel","ngModelOptions","ngModelChange"],["cLabel","","for","validationDefault07"],["cSelect","","id","validationDefault07","required","",3,"ngModel","ngModelOptions","ngModelChange"],["value",""],["value","99"],["value","96"],["value","80"],["cLabel","","for","validationDefault08"],["cFormControl","","id","validationDefault08","required","","type","text",3,"ngModel","ngModelOptions","ngModelChange"],["cLabel","","for","validationDefault09"],["cSelect","","id","validationDefault09","required","",3,"ngModel","ngModelOptions","ngModelChange"],["value","1"],["value","6"],["value","5"],["cLabel","","for","validationDefault10"],["cSelect","","id","validationDefault10","required","","disabled","true"],["cButton","","color","primary","type","submit",1,"me-1"],["cButton","","color","secondary","type","reset",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"c-col",0)(1,"c-card",1)(2,"c-card-header"),e._uU(3,"\n            "),e.TgZ(4,"strong"),e._uU(5,"Complear los datos"),e.qZA(),e._uU(6," "),e.TgZ(7,"small"),e._uU(8,"Nuevo Cliente"),e.qZA(),e._uU(9,"\n        "),e.qZA(),e.TgZ(10,"c-card-body")(11,"form",2,3),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(13,"c-col",4)(14,"label",5),e._uU(15,"Raz\xf3n Social"),e.qZA(),e.TgZ(16,"input",6),e.NdJ("ngModelChange",function(i){return o.cliente.RazonSocial=i}),e.qZA()(),e.TgZ(17,"c-col",7)(18,"label",8),e._uU(19,"Calle"),e.qZA(),e.TgZ(20,"input",9),e.NdJ("ngModelChange",function(i){return o.cliente.Calle=i}),e.qZA()(),e.TgZ(21,"c-col",10)(22,"label",11),e._uU(23,"Calle Nro"),e.qZA(),e.TgZ(24,"input",12),e.NdJ("ngModelChange",function(i){return o.cliente.CalleNro=i}),e.qZA()(),e.TgZ(25,"c-col",4)(26,"label",13),e._uU(27,"Tel\xe9fono"),e.qZA(),e.TgZ(28,"input",14),e.NdJ("ngModelChange",function(i){return o.cliente.telefono=i}),e.qZA()(),e.TgZ(29,"c-col",4)(30,"label",15),e._uU(31,"Celular"),e.qZA(),e.TgZ(32,"input",16),e.NdJ("ngModelChange",function(i){return o.cliente.celular=i}),e.qZA()(),e.TgZ(33,"c-col",4)(34,"label",17),e._uU(35,"E-Mail"),e.qZA(),e.TgZ(36,"input",18),e.NdJ("ngModelChange",function(i){return o.cliente.email=i}),e.qZA()(),e.TgZ(37,"c-col",4)(38,"label",19),e._uU(39,"Tipo Documento"),e.qZA(),e.TgZ(40,"select",20),e.NdJ("ngModelChange",function(i){return o.cliente.idTipoDeDocuemento=i}),e.TgZ(41,"option",21),e._uU(42,"Seleccione..."),e.qZA(),e.TgZ(43,"option",22),e._uU(44,"Sin Identificar"),e.qZA(),e.TgZ(45,"option",23),e._uU(46,"DNI"),e.qZA(),e.TgZ(47,"option",24),e._uU(48,"CUIT"),e.qZA()()(),e.TgZ(49,"c-col",4)(50,"label",25),e._uU(51,"Nro Documento"),e.qZA(),e.TgZ(52,"input",26),e.NdJ("ngModelChange",function(i){return o.cliente.NroDocumento=i}),e.qZA()(),e.TgZ(53,"c-col",4)(54,"label",27),e._uU(55,"IVA"),e.qZA(),e.TgZ(56,"select",28),e.NdJ("ngModelChange",function(i){return o.cliente.IdCondicionIva=i}),e.TgZ(57,"option",21),e._uU(58,"Seleccione..."),e.qZA(),e.TgZ(59,"option",29),e._uU(60,"RESPONSABLE INSCRITO"),e.qZA(),e.TgZ(61,"option",30),e._uU(62,"MONOTRIBUTO"),e.qZA(),e.TgZ(63,"option",31),e._uU(64,"CONSUMIDOR FINAL"),e.qZA()()(),e.TgZ(65,"c-col",4)(66,"label",32),e._uU(67,"Lista Precio"),e.qZA(),e.TgZ(68,"select",33)(69,"option",29),e._uU(70,"PUBLICO"),e.qZA()()(),e.TgZ(71,"c-col",0)(72,"button",34),e._uU(73," Grabar "),e.qZA(),e.TgZ(74,"button",35),e.NdJ("click",function(){return o.onReset()}),e._uU(75," Cancelar "),e.qZA()()()()()()),2&t&&(e.xp6(11),e.Q6J("validated",o.browserDefaultsValidated),e.xp6(5),e.Q6J("ngModel",o.cliente.RazonSocial)("ngModelOptions",e.DdM(19,u)),e.xp6(4),e.Q6J("ngModel",o.cliente.Calle)("ngModelOptions",e.DdM(20,u)),e.xp6(4),e.Q6J("ngModel",o.cliente.CalleNro)("ngModelOptions",e.DdM(21,u)),e.xp6(4),e.Q6J("ngModel",o.cliente.telefono)("ngModelOptions",e.DdM(22,u)),e.xp6(4),e.Q6J("ngModel",o.cliente.celular)("ngModelOptions",e.DdM(23,u)),e.xp6(4),e.Q6J("ngModel",o.cliente.email)("ngModelOptions",e.DdM(24,u)),e.xp6(4),e.Q6J("ngModel",o.cliente.idTipoDeDocuemento)("ngModelOptions",e.DdM(25,u)),e.xp6(12),e.Q6J("ngModel",o.cliente.NroDocumento)("ngModelOptions",e.DdM(26,u)),e.xp6(4),e.Q6J("ngModel",o.cliente.IdCondicionIva)("ngModelOptions",e.DdM(27,u)))},directives:[l.Yp0,l.AkF,l.nkx,l.yue,r.JL,r.F,l.$_X,l.eFW,l.oHf,r.Fj,r.Q7,r.JJ,r.On,l.nqR,r.EJ,r.YN,r.Kr,l.Hq3],styles:[""]}),n})(),data:{title:"Nuevo Cliente"}}]}];let U=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.Bz.forChild(A)],d.Bz]}),n})();var N=s(6575);let q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.ez,U,N.n,l.ga2,l.hJ1,l.dTQ,l.kWm,l.ejP,l.zE6,l.Xo8,l.q4M,l.m81,r.u5,r.UX]]}),n})()}}]);