(this["webpackJsonpjuanjosebernalvillamarin-rewards"]=this["webpackJsonpjuanjosebernalvillamarin-rewards"]||[]).push([[0],{47:function(e,a,t){},49:function(e,a,t){e.exports=t.p+"static/media/logo.cf518ba3.png"},58:function(e,a,t){e.exports=t(70)},63:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),o=t.n(c),i=(t(47),t(63),t(36)),l=t(9),s=t(19),u=t.n(s),p=t(28),m=t(18),d=r.a.createContext(),g="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjRkMjYyMzc0MjM1MjAwMWVkOTA5OWMiLCJpYXQiOjE1OTg4OTE1NTV9.PQhZhUEYKTvxQnf2eF47t1cHiOaIbbX0_iM7O4N9i0w",f={"Content-Type":"application/json",Authorization:"Bearer "+g},h=new Headers;function b(e){var a=e.children,t=Object(n.useState)(""),c=Object(m.a)(t,2),o=c[0],i=c[1],l=Object(n.useState)(""),s=Object(m.a)(l,2),g=s[0],b=s[1],E=Object(n.useState)(""),v=Object(m.a)(E,2),x=v[0],j=v[1],w=function(){var e=Object(p.a)(u.a.mark((function e(a,t,n){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a,{method:t,body:JSON.stringify(n),headers:h});case 2:return r=e.sent,e.next=5,r.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,w("https://coding-challenge-api.aerolab.co/products","GET");case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=b,e.next=8,w("https://coding-challenge-api.aerolab.co/user/me","GET");case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=j,e.next=13,w("https://coding-challenge-api.aerolab.co/user/history","GET");case 13:e.t5=e.sent,(0,e.t4)(e.t5);case 15:case"end":return e.stop()}}),e)})))()}),[]);var O=function(){console.log("user"),Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=b,e.next=3,w("https://coding-challenge-api.aerolab.co/user/me","GET");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()},y=function(){var e=Object(p.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("points",a),{}.amount=a,e.next=5,w("https://coding-challenge-api.aerolab.co/user/points","POST",{amount:a});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),C=Object(n.useMemo)((function(){return{products:o,userData:g,recordData:x,setUserData:b,refrehUser:O,headers:f,addPoints:y}}),[o,g,x]);return r.a.createElement(d.Provider,{value:{providerValue:C}},a)}h.append("Content-Type","application/json"),h.append("X-Custom-Header","ProcessThisImmediately"),h.append("Authorization","Bearer "+g);var E=t(93),v=t(49),x=t.n(v),j=t(95),w=t(96),O=t(97),y=t(98),C=t(99),T=t(71),k=t(100),N=t(101),P=t(105);var S=function(e,a){var t=Object(n.useState)(1),r=Object(m.a)(t,2),c=r[0],o=r[1],i=Math.ceil(e.length/a);return{next:function(){o((function(e){return Math.min(e+1,i)}))},prev:function(){o((function(e){return Math.max(e-1,1)}))},jump:function(e){var a=Math.max(1,e);o((function(e){return Math.min(a,i)}))},currentData:function(){var t=(c-1)*a,n=t+a;return e.slice(t,n)},currentPage:c,maxPage:i}},I=Object(E.a)((function(e){return{root:{flexGrow:1},rootbar:{position:"fixed",width:"100%",zIndex:1e3},rootAlert:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},rootButton:{"& > *":{margin:e.spacing(1)}},menuButton:{marginRight:e.spacing(2)},toolbar:{minHeight:128,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(2),background:"linear-gradient(45deg, #8fb243 30%, #d36c1c 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 10px",zIndex:1e3},title:{flexGrow:1,alignSelf:"flex-end"},container:{paddingTop:e.spacing(20)}}}));var M=function(e){var a=e.isRedeemable,t=e.products,n=e.userData,c=I(),o=S(t,16),i=r.a.useState(1),l=Object(m.a)(i,2),s=l[0],u=l[1],p=t.length>16?Math.ceil(t.length/16):1;return r.a.createElement(r.a.Fragment,null,o.currentData()&&s&&o.currentData().map((function(e){return r.a.createElement(r.a.Fragment,{key:e._id},r.a.createElement(j.a,{item:!0,xs:3},r.a.createElement(w.a,{className:c.root,variant:"outlined"},r.a.createElement(O.a,null,r.a.createElement(y.a,{key:e._id,component:"img",image:e.img.url,title:e.name}),r.a.createElement(C.a,null,r.a.createElement(T.a,{variant:"body2",color:"textSecondary",component:"p"},e.category),r.a.createElement(T.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name))),a&&r.a.createElement(k.a,null,n.points>e.cost?r.a.createElement(N.a,{variant:"contained",color:"primary","aria-label":"Canjear"},"Canjear ",r.a.createElement("span",{role:"img","aria-labelledby":"coin"},"\ud83d\udc5c")):r.a.createElement(N.a,{variant:"outlined",disabled:!0},"Te faltan ",n.points-e.cost," \ud83d\udcb0")))))})),r.a.createElement("div",{className:"box-center"},r.a.createElement(P.a,{count:p,page:o.currentPage,onChange:function(e,a){u(a),o.jump(a)}})))},D=Object(E.a)((function(e){return{root:{flexGrow:1},container:{paddingTop:e.spacing(20)}}})),R=function(){var e=D(),a=Object(n.useContext)(d),t=a.providerValue.products,c=void 0===t?[]:t,o=a.providerValue.userData,i=void 0===o?{}:o;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.container},r.a.createElement("h2",null,"Productos Disponibles Para Canje"),r.a.createElement(j.a,{container:!0,spacing:1},r.a.createElement(j.a,{container:!0,item:!0,xs:12,spacing:4},r.a.createElement(M,{isRedeemable:!0,products:c,userData:i})))))};var G=function(){var e=Object(n.useContext)(d).providerValue.userData,a=void 0===e?[]:e;return r.a.createElement("div",{className:"box-user"},r.a.createElement("strong",null," ",a.name)," :: ",a.points,"\ud83d\udcb0")},A=t(109),V=t(55),B=t(110),z=t(107),L=t(106),H=t(102);function J(e){return r.a.createElement(A.a,Object.assign({},e,{direction:"down"}))}var F=Object(E.a)((function(e){return{root:{flexGrow:1},rootPaper:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(16),height:e.spacing(16)}},rootAlert:{"& > * + *":{marginTop:e.spacing(2)},marginLeft:e.spacing(20),paddingLeft:e.spacing(5),marginRight:e.spacing(20),paddingRight:e.spacing(5)},title:{flexGrow:1,alignSelf:"flex-end"},container:{paddingTop:e.spacing(20)},paper:{marginTop:e.spacing(10),marginBottom:e.spacing(10),marginLeft:e.spacing(20),paddingLeft:e.spacing(5),marginRight:e.spacing(20),paddingRight:e.spacing(5),backgroundColor:"rgba(143, 178, 67, 0.7)"},close:{padding:e.spacing(.5)}}})),W=[{value:1e3,label:"1000"},{value:5e3,label:"5000"},{value:7500,label:"7500"}];function U(e){return"".concat(e)}var Q=function(){var e=r.a.useState(!1),a=Object(m.a)(e,2),t=a[0],c=a[1],o=r.a.useState(""),i=Object(m.a)(o,2),l=i[0],s=i[1],g=r.a.useState(1e3),f=Object(m.a)(g,2),h=f[0],b=f[1],E=Object(n.useContext)(d).providerValue,v=E.addPoints,x=E.refrehUser,j=F(),w=function(){var e=Object(p.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(h);case 2:return a=e.sent,console.log(a),s(a.message+", Nuevo Puntaje: "+a["New Points"]),c(!0),e.next=8,x();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){c(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:j.container},r.a.createElement("h1",null,"Agregar M\xe1s Puntos"),r.a.createElement("div",{className:j.root},r.a.createElement(L.a,{severity:"info",className:j.rootAlert},r.a.createElement(H.a,null,"Recuerda: "),"Recuerda que solo puedes agregar 1000, 5000 o 7500 puntos :: Vas a agregar: ",r.a.createElement("strong",null,h," ")),r.a.createElement(V.a,{elevation:3,className:j.paper},r.a.createElement(B.a,{defaultValue:1e3,onChange:function(e,a){b(a)},getAriaValueText:U,"aria-labelledby":"discrete-slider-restrict",step:null,valueLabelDisplay:"on",marks:W,min:0,max:7500})),r.a.createElement(N.a,{variant:"contained",color:"primary",onClick:function(){return w()}},"Agregar: ",r.a.createElement("strong",null," ",h," ")," \ud83d\udcb0"),r.a.createElement(z.a,{open:t,onClose:O,TransitionComponent:J,message:l,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{color:"secondary",size:"small",onClick:O},"Cerrar"))}))))},X=Object(E.a)((function(e){return{root:{flexGrow:1},container:{paddingTop:e.spacing(20)}}})),Y=function(){var e=X(),a=Object(n.useContext)(d),t=a.providerValue.recordData,c=void 0===t?[]:t,o=a.providerValue.userData,i=void 0===o?{}:o;return r.a.createElement("div",{className:e.container},r.a.createElement("h2",null,"Historial de Canjes"),r.a.createElement(j.a,{container:!0,spacing:1},r.a.createElement(j.a,{container:!0,item:!0,xs:12,spacing:4},r.a.createElement(M,{isRedeemable:!1,products:c,userData:i}))))},_=t(103),Z=t(104),q=Object(E.a)((function(e){return{root:{flexGrow:1},rootbar:{position:"fixed",width:"100%",zIndex:1e3},rootAlert:{width:"100%","& > * + *":{marginTop:e.spacing(2)}},menuButton:{marginRight:e.spacing(2)},toolbar:{minHeight:128,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(2),background:"linear-gradient(45deg, #8fb243 30%, #d36c1c 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 10px",zIndex:1e3},title:{flexGrow:1,alignSelf:"flex-end"},container:{paddingTop:e.spacing(20)},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto"},content:{flexGrow:1,padding:e.spacing(3)}}}));function K(){var e=function(e){Array.from(document.getElementsByClassName("active")).map((function(e){return e.classList.remove("active"),e.classList.remove("show"),null})),document.getElementById(e.currentTarget.id).classList.add("active")},a=q();return r.a.createElement(b,null,r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement("div",{className:a.rootbar},r.a.createElement(_.a,{position:"static"},r.a.createElement(Z.a,{className:a.toolbar},r.a.createElement("img",{src:x.a,alt:"logo"}),r.a.createElement(T.a,{className:a.title,variant:"h5",noWrap:!0},r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{id:"lProduct",to:"/",onClick:function(a){return e(a)},className:"active"},"Productos")),r.a.createElement("li",null,r.a.createElement(i.b,{id:"lPerson",to:"/person",onClick:function(a){return e(a)}},"Persona")),r.a.createElement("li",null,r.a.createElement(i.b,{id:"lHistory",to:"/history",onClick:function(a){return e(a)}},"Historial")))))),r.a.createElement(T.a,{className:a.title,variant:"h5",noWrap:!0},r.a.createElement(G,null)," ")))),r.a.createElement(l.c,null," ",r.a.createElement(l.a,{path:"/",component:R,exact:!0})," ",r.a.createElement(l.a,{path:"/person",component:Q,exact:!0}),r.a.createElement(l.a,{path:"/history",component:Y,exact:!0})))))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.dc65b1dc.chunk.js.map