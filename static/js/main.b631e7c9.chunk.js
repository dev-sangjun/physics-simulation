(this["webpackJsonpphysics-simulation"]=this["webpackJsonpphysics-simulation"]||[]).push([[0],{15:function(t,n,e){"use strict";var a=e(33);e.d(n,"Rectangle",(function(){return a.a}));e(26)},184:function(t,n,e){},185:function(t,n,e){"use strict";e.r(n);var a=e(1),r=e(0),i=e(34),c=e.n(i),s=e(21),o=e(5),u=e(2),l=e(3);function d(){var t=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: auto;\n  padding: 2rem;\n"]);return d=function(){return t},t}function b(){var t=Object(u.a)(["\n  list-style: none;\n  a {\n    text-decoration: none;\n    padding: 0.5rem;\n    border-bottom: 1px solid transparent;\n    transition: border 100ms ease-in-out;\n    &:hover {\n      border-bottom: 1px solid #2d3436;\n    }\n  }\n"]);return b=function(){return t},t}function f(){var t=Object(u.a)([""]);return f=function(){return t},t}var h=l.a.h1(f()),y=l.a.ul(b()),m=Object(l.a)((function(t){var n=t.className;return Object(a.jsxs)("nav",{className:n,children:[Object(a.jsx)(h,{className:"logo",children:"2D Motion Simulation"}),Object(a.jsx)(y,{children:Object(a.jsx)("li",{children:Object(a.jsx)(s.b,{to:"/calculator",children:"Calculator"})})})]})}))(d()),x=e(75);function j(){var t=Object(u.a)(["\n  position: relative;\n  width: calc(752px + 4rem);\n  height: calc(752px + 4rem);\n  background-color: white;\n  padding: 2rem;\n  border-radius: 12px;\n\n  canvas {\n    position: absolute;\n  }\n"]);return j=function(){return t},t}var v=Object(l.a)((function(t){var n=t.className,e=Object(r.useRef)(null),i=Object(r.useRef)(null),c={x:10,y:20};return Object(r.useLayoutEffect)((function(){i&&i.current&&e&&e.current&&x.CanvasStore.initCanvas(i.current,e.current,c,25)}),[e,i]),Object(a.jsxs)("div",{className:n,children:[Object(a.jsx)("canvas",{className:"body-canvas",width:750,height:750,ref:i}),Object(a.jsx)("canvas",{className:"axes-canvas",width:750,height:750,style:{border:"1px solid black"},ref:e})]})}))(j()),p=e(6),g=e(10),O=e(38),w=e(8);function N(){var t=Object(u.a)(["\n  width: 1088px;\n  margin: auto;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  .chart-mode-btn {\n    width: 5rem;\n    padding: 0.25rem;\n    margin: auto;\n    margin-top: 1rem;\n  }\n"]);return N=function(){return t},t}var k=Object(l.a)((function(t){var n=t.className,e=Object(g.c)((function(t){return t.body})),i=Object(r.useState)(),c=Object(p.a)(i,2),s=c[0],o=c[1],u=Object(r.useState)("X"),l=Object(p.a)(u,2),d=l[0],b=l[1];return Object(r.useEffect)((function(){o({datasets:[{label:"Position ".concat(d),data:Object(w.e)(e,d),fill:!1,showLine:!0,backgroundColor:e.color,borderColor:e.color,borderWidth:1}]})}),[e,d]),Object(a.jsxs)("div",{className:n,children:[s&&Object(a.jsx)(O.Scatter,{data:s}),s&&Object(a.jsxs)("button",{className:"chart-mode-btn",onClick:function(){b("X"===d?"Y":"X")},children:["Plot ","X"===d?"Y":"X"]})]})}))(N());function C(){var t=Object(u.a)(["\n  width: 1088px;\n  margin: auto;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  .chart-mode-btn {\n    width: 10rem;\n    padding: 0.25rem;\n    margin: auto;\n    margin-top: 1rem;\n  }\n"]);return C=function(){return t},t}var _=Object(l.a)((function(t){var n=t.className,e=Object(g.c)((function(t){return t.body})),i=Object(r.useState)(),c=Object(p.a)(i,2),s=c[0],o=c[1],u=Object(r.useState)("Kinetic"),l=Object(p.a)(u,2),d=l[0];l[1];return Object(r.useEffect)((function(){o({datasets:[{label:"Potential Energy",data:Object(w.c)(e,"Potential"),fill:!1,showLine:!0,backgroundColor:"#FC766AFF",borderColor:"#FC766AFF",borderWidth:1},{label:"Kinetic Energy",data:Object(w.c)(e,"Kinetic"),fill:!1,showLine:!0,backgroundColor:"#5B84B1FF",borderColor:"#5B84B1FF",borderWidth:1}]})}),[e,d]),Object(a.jsx)("div",{className:n,children:s&&Object(a.jsx)(O.Scatter,{data:s})})}))(C()),P=e(186);function S(){var t=Object(u.a)(["\n  position: relative;\n  input {\n    width: 100%;\n    padding: 0.5rem 2rem 0.5rem 0.5rem;\n    border-radius: 6px;\n    border: 1px solid #2d3436;\n  }\n  label {\n    position: absolute;\n    top: 50%;\n    right: 0.5rem;\n    transform: translateY(-50%);\n    font-family: sans-serif;\n    text-align: center;\n    width: 1.5rem;\n  }\n"]);return S=function(){return t},t}var F=Object(l.a)((function(t){var n=t.className,e=t.paramType,i=t.onChange,c="input-".concat(Object(P.a)()),s=Object(r.useState)("0"),o=Object(p.a)(s,2),u=o[0],l=o[1];return Object(a.jsx)("div",{className:n,children:Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("input",{id:c,type:"number",step:.1,onChange:function(t){isNaN(parseFloat(t.target.value))||i(e,parseFloat(t.target.value)),l(t.target.value)},value:u,required:!0}),Object(a.jsx)("label",{htmlFor:c,children:e})]})})}))(S()),G="SET_BODY",M="REMOVE_BODY";function E(){var t=Object(u.a)(["\n  padding: 0.25rem;\n  border: 1px solid gray;\n  border-radius: 0.25rem;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return E=function(){return t},t}var T=Object(l.a)((function(t){var n=t.className,e=t.color,r=t.body,i=Object(g.b)();return Object(a.jsx)("button",{className:n,style:{backgroundColor:e},onClick:function(t){i({type:G,payload:r})}})}))(E()),R=e(78),A=e(20),B=e(22),q=e(7),J=e(15),K=["#63b598","#ce7d78","#ea9e70","#a48a9e","#c6e1e8","#648177","#0d5ac1","#f205e6","#1c0365","#14a9ad","#4ca2f9","#a4e43f","#d298e2","#6119d0","#d2737d","#c0a43c","#f2510e","#651be6","#79806e","#61da5e","#cd2f00","#9348af","#01ac53","#c5a4fb","#996635","#b11573","#4bb473","#75d89e","#2f3f94","#2f7b99","#da967d","#34891f","#b0d87b","#ca4751","#7e50a8","#c4d647","#e0eeb8","#11dec1","#289812","#566ca0","#ffdbe1","#2f1179","#935b6d","#916988","#513d98","#aead3a","#9e6d71","#4b5bdc","#0cd36d","#250662","#cb5bea","#228916","#ac3e1b","#df514a","#539397","#880977","#f697c1","#ba96ce","#679c9d","#c6c42c","#5d2c52","#48b41b","#e1cf3b","#5be4f0","#57c4d8","#a4d17a","#225b8","#be608b","#96b00c","#088baf","#f158bf","#e145ba","#ee91e3","#05d371","#5426e0","#4834d0","#802234","#6749e8","#0971f0","#8fb413","#b2b4f0","#c3c89d","#c9a941","#41d158","#fb21a3","#51aed9","#5bb32d","#807fb","#21538e","#89d534","#d36647","#7fb411","#0023b8","#3b8c2a","#986b53","#f50422","#983f7a","#ea24a3","#79352c","#521250","#c79ed2","#d6dd92","#e33e52","#b2be57","#fa06ec","#1bb699","#6b2e5f","#64820f","#1c271","#21538e","#89d534","#d36647","#7fb411","#0023b8","#3b8c2a","#986b53","#f50422","#983f7a","#ea24a3","#79352c","#521250","#c79ed2","#d6dd92","#e33e52","#b2be57","#fa06ec","#1bb699","#6b2e5f","#64820f","#1c271","#9cb64a","#996c48","#9ab9b7","#06e052","#e3a481","#0eb621","#fc458e","#b2db15","#aa226d","#792ed8","#73872a","#520d3a","#cefcb8","#a5b3d9","#7d1d85","#c4fd57","#f1ae16","#8fe22a","#ef6e3c","#243eeb","#1dc18","#dd93fd","#3f8473","#e7dbce","#421f79","#7a3d93","#635f6d","#93f2d7","#9b5c2a","#15b9ee","#0f5997","#409188","#911e20","#1350ce","#10e5b1","#fff4d7","#cb2582","#ce00be","#32d5d6","#17232","#608572","#c79bc2","#00f87c","#77772a","#6995ba","#fc6b57","#f07815","#8fd883","#060e27","#96e591","#21d52e","#d00043","#b47162","#1ec227","#4f0f6f","#1d1d58","#947002","#bde052","#e08c56","#28fcfd","#bb09b","#36486a","#d02e29","#1ae6db","#3e464c","#a84a8f","#911e7e","#3f16d9","#0f525f","#ac7c0a","#b4c086","#c9d730","#30cc49","#3d6751","#fb4c03","#640fc1","#62c03e","#d3493a","#88aa0b","#406df9","#615af0","#4be47","#2a3434","#4a543f","#79bca0","#a8b8d4","#00efd4","#7ad236","#7260d8","#1deaa7","#06f43a","#823c59","#e3d94c","#dc1c06","#f53b2a","#b46238","#2dfff6","#a82b89","#1a8011","#436a9f","#1a806a","#4cf09d","#c188a2","#67eb4b","#b308d3","#fc7e41","#af3101","#ff065","#71b1f4","#a2f8a5","#e23dd0","#d3486d","#00f7f9","#474893","#3cec35","#1c65cb","#5d1d0c","#2d7d2a","#ff3420","#5cdd87","#a259a4","#e4ac44","#1bede6","#8798a4","#d7790f","#b2c24f","#de73c2","#d70a9c","#25b67","#88e9b8","#c2b0e2","#86e98f","#ae90e2","#1a806b","#436a9e","#0ec0ff","#f812b3","#b17fc9","#8d6c2f","#d3277a","#2ca1ae","#9685eb","#8a96c6","#dba2e6","#76fc1b","#608fa4","#20f6ba","#07d7f6","#dce77a","#77ecca"];function I(){var t=Object(u.a)(["\n  background-color: white;\n  border-radius: 12px;\n  margin-left: 1rem;\n  width: 20rem;\n  height: calc(752px + 4rem);\n  padding: 2rem;\n  .grid {\n    display: grid;\n    grid-gap: 0.5rem;\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .buttons-container {\n    margin-bottom: 1rem;\n  }\n  .container-header {\n    margin-bottom: 0.5rem;\n  }\n  .inputs-container {\n    margin-bottom: 1rem;\n  }\n  .actions-container {\n    margin-bottom: 1rem;\n    button {\n      padding: 0.25rem;\n    }\n    button:last-child {\n      grid-column: 1 / 3;\n    }\n  }\n  .settings-container {\n    .checkbox-container {\n      display: flex;\n      align-items: center;\n      label {\n        font-weight: bold;\n        margin-right: 1rem;\n      }\n    }\n    margin-bottom: 1rem;\n  }\n  .keys-container {\n    h4 {\n      font-weight: normal;\n      margin-bottom: 0.5rem;\n    }\n    .key-buttons {\n      display: grid;\n      grid-gap: 0.5rem;\n      grid-template-columns: repeat(8, 1fr);\n      grid-auto-rows: 1rem;\n    }\n  }\n  .tools-container {\n    h4 {\n      font-weight: normal;\n      margin-bottom: 0.5rem;\n    }\n    .links {\n      list-style: none;\n    }\n  }\n"]);return I=function(){return t},t}var X={x:0,y:0,w:0,h:0,m:0,v_x:0,v_y:0,a_x:0,a_y:0},D=Object(l.a)((function(t){var n=t.className,e=Object(r.useState)(!1),i=Object(p.a)(e,2),c=i[0],s=i[1],o=Object(r.useState)(X),u=Object(p.a)(o,2),l=u[0],d=u[1],b=Object(r.useState)([]),f=Object(p.a)(b,2),h=f[0],y=f[1],m=Object(g.b)(),x=function(t,n){d((function(e){return Object(B.a)(Object(B.a)({},e),{},Object(A.a)({},t,n))}))};return Object(r.useEffect)((function(){}),[]),Object(a.jsxs)("div",{className:n,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"container-header",children:"Coordinates"}),Object(a.jsx)("div",{className:"inputs-container grid",children:["x","y","w","h"].map((function(t,n){return Object(a.jsx)(F,{paramType:t,onChange:x},n)}))})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"container-header",children:"Constants"}),Object(a.jsx)("div",{className:"inputs-container grid",children:["m"].map((function(t,n){return Object(a.jsx)(F,{paramType:t,onChange:x},n)}))})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"container-header",children:"Vectors"}),Object(a.jsx)("div",{className:"inputs-container grid",children:["v_x","v_y","a_x"].map((function(t,n){return Object(a.jsx)(F,{paramType:t,onChange:x},n)}))})]}),Object(a.jsxs)("div",{className:"actions-container grid",children:[Object(a.jsx)("button",{className:"actions-btn",onClick:function(){var t=q.a.ctx;if(t){var n=K[q.a.id],e=new J.Rectangle(t,l,n);q.a.addBody(e),y([].concat(Object(R.a)(h),[e]))}},children:"Draw"}),Object(a.jsx)("button",{className:"actions-btn",onClick:function(){q.a.eraseAll(),m({type:M}),y([])},children:"Erase All"}),Object(a.jsx)("button",{className:"actions-btn",onClick:c?function(){q.a.reset(),s(!1)}:function(){q.a.animateAll(),s(!0)},children:c?"Reset":"Animate"})]}),Object(a.jsxs)("div",{className:"keys-container",children:[Object(a.jsx)("h3",{className:"container-header",children:"Plot"}),Object(a.jsx)("h4",{children:"Select the color to plot the graph"}),Object(a.jsx)("div",{className:"key-buttons",children:h.map((function(t){return Object(a.jsx)(T,{body:t,color:t.color},t.id)}))})]})]})}))(I()),V=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(k,{}),Object(a.jsx)(_,{})]})};function W(){var t=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 1200px;\n  padding: 2rem;\n  .top-container {\n    display: flex;\n    justify-content: center;\n  }\n"]);return W=function(){return t},t}var Y=Object(l.a)((function(t){var n=t.className,e=Object(g.c)((function(t){return t.body}));return Object(a.jsxs)("div",{className:n,children:[Object(a.jsxs)("div",{className:"top-container",children:[Object(a.jsx)(v,{}),Object(a.jsx)(D,{})]}),Object(a.jsx)("div",{className:"btm-container",children:e&&Object(a.jsx)(V,{})})]})}))(W());function z(){var t=Object(u.a)(["\n  width: 100%;\n  height: 2rem;\n  .input-container {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    input {\n      width: 300px;\n      height: 100%;\n      padding: 0.25rem 2rem 0.25rem 0.5rem;\n    }\n    .input-type {\n      font-family: sans-serif;\n      text-align: center;\n      width: 1.5rem;\n      margin-right: 1rem;\n    }\n  }\n  margin-bottom: 1rem;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);return z=function(){return t},t}function L(){var t=Object(u.a)(["\n  width: 3rem;\n  margin-left: 1rem;\n  text-align: left;\n"]);return L=function(){return t},t}var H=function(t){switch(t){case"x":case"y":return"m";case"m":return"kg";case"v_x":case"v_y":return"m/s";case"a_x":case"a_y":return"m/s^2";case"t":return"s";default:return""}},Q=l.a.label(L()),U=Object(l.a)((function(t){var n=t.className,e=t.inputType,i=t.onChange,c="input-".concat(Object(P.a)()),s=Object(r.useState)("0"),o=Object(p.a)(s,2),u=o[0],l=o[1];return Object(r.useEffect)((function(){l("0")}),[e]),Object(a.jsx)("div",{className:n,children:Object(a.jsx)("div",{className:n,children:Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("label",{className:"input-type",htmlFor:c,children:e}),Object(a.jsx)("input",{id:c,type:"text",onChange:function(t){isNaN(parseFloat(t.target.value))||i(e,parseFloat(t.target.value)),l(t.target.value)},value:u,required:!0}),Object(a.jsx)(Q,{htmlFor:c,children:H(e)})]})})})}))(z()),Z=e(4),$={x:0,y:0},tt=function(t,n,e,a){return{x:n.x*a+.5*e.x*(a*a)+t.x,y:n.y*a+.5*e.y*(a*a)+t.y}},nt=function(t,n,e){return{x:t.x+n.x*e,y:t.y+n.y*e}},et=function(t){return Math.sqrt(Math.abs(2*t/Z.a.y))};function at(){var t=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 1rem;\n  .inputs {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 30%;\n    min-width: 30rem;\n    margin-bottom: 1rem;\n  }\n"]);return at=function(){return t},t}function rt(){var t=Object(u.a)(["\n  font-size: 1.2em;\n"]);return rt=function(){return t},t}function it(){var t=Object(u.a)(["\n  width: 8rem;\n  height: 2rem;\n  margin: auto;\n  margin-bottom: 1rem;\n"]);return it=function(){return t},t}function ct(){var t=Object(u.a)(["\n  text-align: center;\n  margin-bottom: 1rem;\n"]);return ct=function(){return t},t}var st={x:0,y:0,m:0,v_x:0,v_y:0,a_x:0,a_y:0,t:0},ot=l.a.h3(ct()),ut=l.a.button(it()),lt=l.a.span(rt()),dt=Object(l.a)((function(t){var n=t.className,e=t.calculatorType,i=Object(r.useState)(st),c=Object(p.a)(i,2),s=c[0],o=c[1],u=Object(r.useState)(null),l=Object(p.a)(u,2),d=l[0],b=l[1],f=function(t,n){o(Object(B.a)(Object(B.a)({},s),{},Object(A.a)({},t,n)))};return Object(r.useEffect)((function(){o(st),b(null)}),[e]),Object(a.jsxs)("div",{className:n,children:[Object(a.jsx)(ot,{children:e}),Object(a.jsx)("div",{className:"inputs",children:{Position:["x","y","v_x","v_y","a_x","a_y","t"],Velocity:["v_x","v_y","a_x","a_y","t"],"Free Fall":["y"],"Kinetic Energy":["m","v_x","v_y"],"Potential Energy":["y","m"]}[e].map((function(t,n){return function(t,n){return Object(a.jsx)(U,{inputType:t,onChange:f},n)}(t,n)}))}),Object(a.jsx)(ut,{onClick:function(){var t=s.x,n=s.y,a=s.m,r=s.v_x,i=s.v_y,c=s.a_x,o=s.a_y,u=s.t,l={x:t,y:n},d={x:r,y:i},f={x:c,y:o};switch(e){case"Position":b("x: ".concat(tt(l,d,f,u).x,", y: ").concat(tt(l,d,f,u).y," (m)"));break;case"Velocity":b("x: ".concat(nt(d,f,u).x,", y: ").concat(nt(d,f,u).y," (m/s)"));break;case"Free Fall":var h=et(n),y=function(t){var n=et(t);return nt($,Z.a,n).y}(n);b("".concat(h.toFixed(3)," (s),   ").concat(y.toFixed(3)," (m/s)"));break;case"Kinetic Energy":b("".concat(function(t,n,e){var a=Object(w.d)({x:n,y:e});return console.log(a),.5*t*(a*a)}(a,r,i).toFixed(3)," (J)"));break;case"Potential Energy":b("".concat(function(t,n){return n*Math.abs(Z.a.y)*t}(n,a).toFixed(3)," (J)"))}},children:"Calculate"}),d&&Object(a.jsxs)(lt,{children:[Object(a.jsx)("strong",{children:"Result: "}),function(){if(!d)return"";if("number"===typeof d||"string"===typeof d)return d;var t=d;return"x: ".concat(t.x," y: ").concat(t.y)}()]})]})}))(at());function bt(){var t=Object(u.a)(["\n  width: 100%;\n  .button-container {\n    margin: auto;\n    margin-top: 10rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 1rem;\n  }\n"]);return bt=function(){return t},t}function ft(){var t=Object(u.a)(["\n  text-align: center;\n"]);return ft=function(){return t},t}function ht(){var t=Object(u.a)(["\n  width: 10rem;\n  height: 2rem;\n  margin-right: 1rem;\n  &:last-child {\n    margin-right: 0;\n  }\n"]);return ht=function(){return t},t}var yt=[{type:"Position"},{type:"Velocity"},{type:"Free Fall"},{type:"Kinetic Energy"},{type:"Potential Energy"}],mt=l.a.button(ht()),xt=l.a.div(ft()),jt=Object(l.a)((function(t){var n=t.className,e=Object(r.useState)("Position"),i=Object(p.a)(e,2),c=i[0],o=i[1];return Object(a.jsxs)("div",{className:n,children:[Object(a.jsx)("div",{className:"button-container",children:yt.map((function(t,n){return Object(a.jsx)(mt,{onClick:function(){return o(t.type)},children:t.type},n)}))}),Object(a.jsx)(dt,{calculatorType:c}),Object(a.jsx)(xt,{children:Object(a.jsx)(s.b,{to:"/",children:"Go Back"})})]})}))(bt());e(184);var vt=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(s.a,{children:[Object(a.jsx)(m,{}),Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{path:"/calculator",children:Object(a.jsx)(jt,{})}),Object(a.jsx)(o.a,{exact:!0,path:"/",children:Object(a.jsx)(Y,{})})]})]})})},pt=e(19),gt=e(77),Ot=Object(pt.combineReducers)({body:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case G:return n.payload;case M:return null;default:return t}}}),wt=Object(pt.createStore)(Ot,Object(gt.composeWithDevTools)());c.a.render(Object(a.jsx)(g.a,{store:wt,children:Object(a.jsx)(vt,{})}),document.getElementById("root"))},26:function(t,n){},33:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var a=e(35),r=e(36),i=e(7),c=e(8),s=e(4),o=function(){function t(n,e,r){Object(a.a)(this,t),this.id=void 0,this.ctx=void 0,this.originalParams=void 0,this.params=void 0,this.color=void 0,this.animating=!1,this.colliding=!1,this.applyGround=!0,this.applyGravity=!0,this.id=i.a.getId(),this.ctx=n,this.originalParams={x:e.x,y:e.y,w:e.w,h:e.h,m:e.m,v:{x:e.v_x,y:e.v_y},a:{x:e.a_x,y:e.a_y}},this.params=JSON.parse(JSON.stringify(this.originalParams)),this.color=r}return Object(r.a)(t,[{key:"draw",value:function(){var t=this.params,n=t.x,e=t.y,a=t.w,r=t.h,c=i.a.origin,s=i.a.gridSize;n=(n+c.x)*s,e=(c.y-e)*s,a*=s,r*=-s,this.ctx.fillStyle=this.color,this.ctx.beginPath(),this.ctx.fillRect(n,e,a,r),this.ctx.closePath()}},{key:"update",value:function(){if(this.animating){var t=Object(c.f)(this.params.v,this.applyGravity?Object(c.a)(this.originalParams.a,s.a):this.originalParams.a,1/i.a.fps),n=t.x/i.a.fps,e=t.y/i.a.fps;this.params.x+=n,this.applyGround?this.params.y+e>0?this.params.y+=e:(this.params.y=0,this.params.v={x:this.params.v.x,y:this.applyGravity?-Object(c.b)(this.originalParams.y,this.originalParams.v.y,!0):-this.originalParams.v.y}):this.params.y+=e,this.params.v=Object(c.f)(this.params.v,this.applyGravity?Object(c.a)(this.originalParams.a,s.a):this.originalParams.a,1/i.a.fps)}this.draw()}},{key:"reset",value:function(){this.animating=!1,this.params=JSON.parse(JSON.stringify(this.originalParams)),this.draw()}},{key:"isInBoundary",value:function(t){var n=t.x>=this.params.x&&t.x<=this.params.x+this.params.w,e=t.y>=this.params.y&&t.x<=this.params.y+this.params.h;return n&&e}}]),t}()},4:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var a={x:0,y:-9.80665}},7:function(t,n,e){"use strict";var a=e(35),r=e(36),i=function(){function t(){Object(a.a)(this,t),this.id=0,this.canvas=null,this.ctx=null,this.axesCanvas=null,this.axesCtx=null,this.chartCanvas=null,this.chartCtx=null,this.bodies=[],this.hasAxes=!1,this.origin={x:0,y:0},this.gridSize=1,this.animating=!1,this.applyGround=!0,this.applyGravity=!0,this.collisions=[],this.fps=58}return Object(r.a)(t,[{key:"getId",value:function(){return this.id++}},{key:"initCanvas",value:function(t,n,e,a){this.canvas=t,this.ctx=t.getContext("2d"),this.axesCanvas=n,this.axesCtx=n.getContext("2d"),this.origin=e,this.gridSize=a,this.axesCtx&&function(t,n,e,a){n.strokeStyle="#a6a6a6",n.lineWidth=1,n.beginPath();for(var r=a;r<t.width;r+=a)r!==e.x*a&&(n.moveTo(r,0),n.lineTo(r,t.height),n.stroke());for(var i=a;i<t.height;i+=a)i!==e.y*a&&(n.moveTo(0,i),n.lineTo(t.width,i),n.stroke());n.closePath(),n.strokeStyle="#000000",n.beginPath(),n.moveTo(e.x*a,0),n.lineTo(e.x*a,t.height),n.stroke(),n.moveTo(0,e.y*a),n.lineTo(t.width,e.y*a),n.stroke(),n.closePath();var c=3,s=10;n.font="10px Aerial";for(var o=Math.floor(e.x),u=Math.floor(e.y),l=0;l<t.width;l++){var d=l-o;n.fillText("".concat(d),l*a+c,e.y*a+s)}for(var b=0;b<t.width;b++){var f=u-b;0!==f&&n.fillText("".concat(f),e.x*a+c,b*a+s)}}(n,this.axesCtx,e,a)}},{key:"initChart",value:function(t){this.chartCanvas=t,this.chartCtx=t.getContext("2d")}},{key:"addBody",value:function(t){this.bodies.push(t),t.applyGround=this.applyGround,t.applyGravity=this.applyGravity,t.draw()}},{key:"draw",value:function(){this.bodies.forEach((function(t){return t.draw()}))}},{key:"animateAll",value:function(){this.animating=!0;for(var t=0;t<this.bodies.length;t++)this.collisions[t]=!1,this.bodies[t].animating=!0;this.animate()}},{key:"animate",value:function(){var t=this;if(this.canvas&&this.ctx&&this.animating){requestAnimationFrame((function(){return t.animate()})),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(var n=0;n<this.bodies.length;n++)this.bodies[n].colliding=this.collisions[n],this.bodies[n].update()}}},{key:"eraseAll",value:function(){this.animating=!1,this.canvas&&this.ctx&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.bodies=[])}},{key:"reset",value:function(){this.animating=!1,this.canvas&&this.ctx&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.bodies.forEach((function(t){t.reset()})))}},{key:"setGround",value:function(t){console.log("Setting applyGround:",t),this.applyGround=t,this.bodies.forEach((function(n){return n.applyGround=t}))}},{key:"setGravity",value:function(t){console.log("Setting applyGravity:",t),this.applyGravity=t,this.bodies.forEach((function(n){return n.applyGravity=t}))}}],[{key:"getInstance",value:function(){return t.instance||(t.instance=new t),t.instance}}]),t}();i.instance=void 0;n.a=i.getInstance()},75:function(t,n,e){"use strict";var a=e(7);e.d(n,"CanvasStore",(function(){return a.a}));e(26)},8:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"f",(function(){return l})),e.d(n,"d",(function(){return b})),e.d(n,"e",(function(){return y})),e.d(n,"c",(function(){return m})),e.d(n,"b",(function(){return x}));var a=e(15),r=e(4),i=function(t,n){return{x:t.x+n.x,y:t.y+n.y}},c=function(t){if(t instanceof a.Rectangle){var n=t.originalParams,e=n.y,i=n.v,c=n.a,s=t.applyGravity?c.y+r.a.y:c.y,o=i.y>0?Math.abs(i.y/r.a.y):0,u=i.y>0?Math.abs(i.y)*o+.5*r.a.y*(o*o):0;if(i.y>0){var l=e+u;return Math.sqrt(Math.abs(2*l/s))}return i.y<0?x(e,i.y,!1)/r.a.y:Math.abs(Math.sqrt(-2*r.a.y*e)/r.a.y)}return 0},s=function(t,n){return t>0?t/r.a.y:t<0?(-t-Math.sqrt(t*t-2*r.a.y*n))/r.a.y:0},o=function(t,n,e,a){return t>0?!(e<Math.abs(a))&&Math.floor((e+a)/n)%2===0:t<0?e<a||Math.floor((e-a)/n)%2!==0:Math.floor(e/n)%2===0},u=function(t,n){var e=c(t);if(t instanceof a.Rectangle){var u=t.originalParams,l=u.x,d=u.y,b=u.v,f=u.a,h=t.applyGravity?i(f,r.a):f,y=h.x*Math.pow(n,2)*.5+b.x*n+l,m=s(b.y,d),j=t.applyGround?(n+m)%e:n,v=!t.applyGround||o(b.y,e,n,m);if(b.y>0){if(n<Math.abs(m))return{x:y,y:b.y*n+.5*h.y*(n*n)+d};if(v){var p=-x(d,b.y,!1)*e+.5*r.a.y*(e*e);return{x:y,y:.5*h.y*(j*j)+p}}return{x:y,y:-x(d,b.y,!1)*j+.5*h.y*(j*j)}}if(b.y<0){if(n<m)return{x:y,y:b.y*n+.5*h.y*(n*n)+d};if(v){var g=(n-m)%e,O=-x(d,b.y,!1)*e+.5*r.a.y*(e*e);return{x:y,y:.5*h.y*(g*g)+O}}var w=(n-m)%e;return{x:y,y:-x(d,b.y,!1)*w+.5*h.y*(w*w)}}return v?{x:y,y:.5*h.y*(j*j)+d}:{x:y,y:-x(d,b.y,!1)*j+.5*h.y*(j*j)}}return{x:0,y:0}},l=function(t,n,e){return{x:t.x+n.x*e,y:t.y+n.y*e}},d=function(t,n){var e=c(t);if(t instanceof a.Rectangle){var u=t.originalParams,l=u.y,d=u.v,b=u.a,f=t.applyGravity?i(b,r.a):b,h=s(d.y,l),y=t.applyGround?(n+h)%e:n,m=!t.applyGround||o(d.y,e,n,h);if(d.y>0&&n<Math.abs(h)||d.y<0&&n<h)return{x:d.x+f.x*n,y:d.y+f.y*n};if(m){if(d.y<0){var j=(n-h)%e;return{x:d.x+f.x*n,y:f.y*j}}return{x:d.x+f.x*n,y:f.y*y}}if(d.y<0){var v=(n-h)%e;return{x:d.x+f.x*n,y:-x(l,d.y,!1)+f.y*v}}return{x:d.x+f.x*n,y:-x(l,d.y,!1)+f.y*y}}return{x:0,y:0}},b=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},f=function(t,n){var e=b(n);return.5*t*(e*e)},h=function(t,n){return t*-r.a.y*n},y=function(t,n){var e=[];if(t instanceof a.Rectangle){for(var r=0;r<15;r+=.02){var i=u(t,r);e.push({x:r,y:"X"===n?i.x:i.y})}return e}return[]},m=function(t,n){var e=[];if(t instanceof a.Rectangle){for(var r=0;r<15;r+=.02){var i=t.originalParams.m;e.push({x:r,y:"Kinetic"===n?f(i,d(t,r)):h(i,u(t,r).y)})}return e}return[]},x=function(t,n,e){var a=Math.abs(n/r.a.y),i=t+Math.abs(n)*a+.5*r.a.y*Math.pow(a,2),c=Math.sqrt(2*i/-r.a.y);return r.a.y*c*(e?j(i):1)},j=function(t){return t<1?1.07:t<3?1.0375:t<5?1.027:t<7?1.024:t<9?1.021:t<11?1.018:t<13?1.017:t<15?1.0155:t<17?1.0145:t<19?1.01325:t<21?1.013:t<23?1.0125:t<25?1.012125:1.011}}},[[185,1,2]]]);
//# sourceMappingURL=main.b631e7c9.chunk.js.map