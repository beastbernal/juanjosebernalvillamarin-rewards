(this["webpackJsonpjuanjosebernalvillamarin-rewards"]=this["webpackJsonpjuanjosebernalvillamarin-rewards"]||[]).push([[0],{24:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/logo.cf518ba3.png"},46:function(e,t,a){e.exports=a(75)},51:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),i=(a(24),a(51),a(22)),l=a(18),s=a.n(l),u=a(21),m=(a(53),r.a.createContext()),p="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjRkMjYyMzc0MjM1MjAwMWVkOTA5OWMiLCJpYXQiOjE1OTg4OTE1NTV9.PQhZhUEYKTvxQnf2eF47t1cHiOaIbbX0_iM7O4N9i0w",d=new Headers;d.append("Content-Type","application/json"),d.append("X-Custom-Header","ProcessThisImmediately"),d.append("Authorization","Bearer "+p);function f(e){var t=e.children;Object(n.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://coding-challenge-api.aerolab.co/products",{method:"GET",headers:d}).then((function(e){return e.json()})).then((function(e){l(e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://coding-challenge-api.aerolab.co/user/me",{method:"GET",headers:d}).then((function(e){return e.json()})).then((function(t){g(t),e()})).catch((function(e){console.log(e)}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){}),[]);var a=Object(n.useState)(""),c=Object(i.a)(a,2),o=c[0],l=c[1],p=Object(n.useState)(""),f=Object(i.a)(p,2),h=f[0],g=f[1],E=Object(n.useMemo)((function(){return{products:o,setProducts:l,userData:h,setUserData:g}}),[o,h]);return r.a.createElement(m.Provider,{value:{providerValue:E}},t)}var h=a(33),g=a(90),E=a(34),b=a.n(E),v=a(92),j=a(93),x=a(94),O=a(95),y=a(96),w=a(97),I=a(98),M=a(99),T=a(100),k=a(101),N=Object(g.a)((function(e){return{root:{flexGrow:1},rootbar:{position:"fixed",width:"100%",zIndex:1e3},menuButton:{marginRight:e.spacing(2)},toolbar:{minHeight:128,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(2),background:"linear-gradient(45deg, #8fb243 30%, #d36c1c 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 10px",zIndex:1e3},title:{flexGrow:1,alignSelf:"flex-end"},container:{paddingTop:e.spacing(20)}}}));function C(e){Object(h.a)(e);var t=Object(n.useContext)(m).providerValue.userData,a=void 0===t?[]:t;return r.a.createElement("div",null," ",a.name)}function S(e){e.title;var t=Object(n.useContext)(m).providerValue.products,a=void 0===t?[]:t,c=N();return r.a.createElement(r.a.Fragment,null,a&&a.map((function(e){return r.a.createElement(r.a.Fragment,{key:e._id},r.a.createElement(O.a,{item:!0,xs:3},r.a.createElement(y.a,{className:c.root},r.a.createElement(w.a,null,r.a.createElement(I.a,{key:e._id,component:"img",image:e.img.url,title:e.name}),r.a.createElement(M.a,null,r.a.createElement(x.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),r.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},e.category))),r.a.createElement(T.a,null,r.a.createElement(k.a,{size:"small",color:"primary"},"Share"),r.a.createElement(k.a,{size:"small",color:"primary"},"Learn More")))))})))}var z=function(){var e=N();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.rootbar},r.a.createElement(v.a,{position:"static"},r.a.createElement(j.a,{className:e.toolbar},r.a.createElement("img",{src:b.a,alt:"logo"}),r.a.createElement(x.a,{className:e.title,variant:"h5",noWrap:!0},"Dinosaur Store"),r.a.createElement(x.a,{className:e.title,variant:"h5",noWrap:!0},r.a.createElement(C,null)," hola")))),r.a.createElement("div",{className:e.container},r.a.createElement(O.a,{container:!0,spacing:1},r.a.createElement(O.a,{container:!0,item:!0,xs:12,spacing:4},r.a.createElement(S,{title:"Libros por leer"})))))};function J(){return r.a.createElement(f,null,r.a.createElement("div",{className:"App"},r.a.createElement(z,null)))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.024b2777.chunk.js.map