(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,t,c){},119:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),s=c.n(a),r=c(10),i=c.n(r),j=c(17),d=(c(88),c(27)),l=[{link:"/europe",value:"\u0414\u0435\u0448\u0435\u0432\u044b\u0435 \u0431\u0438\u043b\u0435\u0442\u044b"},{link:"/ukraine",value:"\u0427\u0442\u043e \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u044c - \u0423\u043a\u0440\u0430\u0438\u043d\u0430"},{link:"/news",value:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"},{link:"/blog",value:"\u0413\u043e\u0434\u043d\u043e\u0442\u0430/\u0411\u043b\u043e\u0433"}],o=(c(89),function(){return Object(n.jsx)("header",{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)(j.b,{to:"/",children:"Logo"})}),Object(n.jsx)("div",{className:"links",children:Object(n.jsx)("ul",{children:l.map((function(e,t){var c=e.link,a=e.value;return Object(n.jsx)(j.b,{to:c,children:Object(n.jsx)("li",{children:a})},t)}))})}),Object(n.jsx)("div",{className:"login",children:Object(n.jsx)(j.b,{to:"/admin",children:"\u0410\u0434\u043c\u0438\u043d\u043a\u0430"})})]})})})}),b=(c(95),function(){return Object(n.jsx)("footer",{children:Object(n.jsx)("div",{className:"container",children:"Footer"})})}),u=c(13),O=c(162),x=c(167),h=c(165),m=c(168),p=c(169),f=c(173),v=c(170),g=c(74),N=c.n(g),_=c(75),y=c.n(_),k=c(73),w=c.n(k),S=Object(O.a)((function(e){return{root:{width:"100%",height:"100%",maxWidth:275,backgroundColor:"lightgray"},nested:{paddingLeft:e.spacing(4)}}})),R=function(){var e=S(),t=s.a.useState(!1),c=Object(u.a)(t,2),a=c[0],r=c[1];return Object(n.jsxs)(h.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:Object(n.jsx)(x.a,{component:"div",id:"nested-list-subheader",children:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u043c\u0435\u043d\u044e"}),className:e.root,children:[Object(n.jsx)(m.a,{button:!0,children:Object(n.jsx)(f.a,{primary:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0441\u0442\u043e\u0432"})}),Object(n.jsx)(m.a,{button:!0,children:Object(n.jsx)(f.a,{primary:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442"})}),Object(n.jsxs)(m.a,{button:!0,onClick:function(){r(!a)},children:[Object(n.jsx)(p.a,{children:Object(n.jsx)(w.a,{})}),Object(n.jsx)(f.a,{primary:"\u041f\u043e\u0441\u0442\u044b"}),a?Object(n.jsx)(N.a,{}):Object(n.jsx)(y.a,{})]}),Object(n.jsx)(v.a,{in:a,timeout:"auto",unmountOnExit:!0,children:Object(n.jsxs)(h.a,{component:"div",disablePadding:!0,children:[Object(n.jsx)(m.a,{button:!0,className:e.nested,children:Object(n.jsx)(f.a,{primary:"\u0412\u0441\u0435 \u043f\u043e\u0441\u0442\u044b"})}),Object(n.jsx)(m.a,{button:!0,className:e.nested,children:Object(n.jsx)(j.b,{to:"/admin/add-post",children:Object(n.jsx)(f.a,{primary:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})})}),Object(n.jsx)(m.a,{button:!0,className:e.nested,children:Object(n.jsx)(f.a,{primary:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})}),Object(n.jsx)(m.a,{button:!0,className:e.nested,children:Object(n.jsx)(j.b,{to:"/admin/delete-post",children:Object(n.jsx)(f.a,{primary:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u0442"})})})]})})]})},E=c(47),F=c(54),P=c(23),C=c.n(P),D=function(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)("posts"),i=Object(u.a)(r,2),j=i[0],d=i[1],l=Object(a.useRef)(),o=Object(a.useRef)(),b=Object(a.useRef)(),O=Object(a.useRef)(),x=Object(a.useRef)(),h=Object(a.useRef)(),m=Object(a.useRef)(),p=Object(a.useRef)();return Object(n.jsxs)("div",{children:[Object(n.jsxs)("select",{ref:l,value:j,onChange:function(e){var t=e.target;d(t.value)},children:[Object(n.jsx)("option",{value:"posts",children:"Europe Post"}),Object(n.jsx)("option",{value:"ukraine",children:"Ukraine Post"})]}),Object(n.jsxs)("form",{className:"fd-c",onSubmit:function(e){e.preventDefault(),console.log("selectType",j),console.log("state",c),C.a.post("http://localhost:5000/".concat(j),c)},onChange:function(e){var t=e.target;s(Object(F.a)(Object(F.a)({},c),{},Object(E.a)({},t.name,t.value)))},children:[Object(n.jsx)("input",{ref:o,name:"title",placeholder:"title"}),Object(n.jsx)("input",{ref:b,name:"titleStatus",placeholder:"titleStatus"}),Object(n.jsx)("input",{ref:O,name:"price",placeholder:"price"}),Object(n.jsx)("input",{ref:x,name:"description",placeholder:"description"}),Object(n.jsx)("input",{ref:h,name:"date",placeholder:"date"}),Object(n.jsx)("input",{ref:m,type:"number",name:"readingTime",placeholder:"readingTime"}),Object(n.jsx)("input",{ref:p,name:"image",placeholder:"\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 16:9 (jpg/png)"}),Object(n.jsx)("button",{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})]})},I=function(){var e=Object(a.useRef)(),t=Object(a.useState)({userId:null,title:""}),c=Object(u.a)(t,2),s=c[0],r=c[1],i=function(){C.a.delete("http://localhost:5000/posts",s)};return Object(n.jsxs)("div",{children:["Delete Post",Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i()},onChange:function(e){var t=e.target,c=s;c[t.name]=t.value,r(c)},children:[Object(n.jsx)("input",{ref:e,name:"postID",placeholder:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u0442 \u0441 ID:"}),Object(n.jsx)("button",{children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})]})},B=c(37),L=c.n(B),T=c(48),M=(c(118),function(e){var t=e.card,c=t.title,a=t.price,s=t.description,r=t.date,i=t.readingTime,j=t.image,d=t.titleStatus;return Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"card__wrapper",children:[Object(n.jsxs)("div",{className:"card__body",children:[Object(n.jsx)("div",{className:"card__body--img",children:Object(n.jsx)("img",{src:j,alt:"abc"})}),Object(n.jsx)("div",{className:"card__body--rating"}),Object(n.jsxs)("div",{className:"card__body--details",children:[Object(n.jsx)("div",{className:"date",children:"\u0421\u0430\u043c\u043e\u043b\u0435\u0442 + \u0410\u0432\u0442\u043e\u0431\u0443\u0441"}),Object(n.jsx)("div",{className:"reading",children:"1 \u041f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"})]})]}),Object(n.jsxs)("div",{className:"card__footer",children:[Object(n.jsxs)("div",{className:"jc-sb pb-15",children:[Object(n.jsx)("div",{className:"card__footer--destination ".concat(d),children:c}),Object(n.jsxs)("div",{className:"card__footer--price ".concat(d),children:[a," \u20ac"]})]}),Object(n.jsx)("div",{className:"card__footer--description pb-15",children:s}),Object(n.jsxs)("div",{className:"jc-sb",children:[Object(n.jsx)("div",{className:"card__footer--date",children:r}),Object(n.jsxs)("div",{className:"card__footer--reading",children:["\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u0435\u0448\u044c \u0437\u0430 ",i," \u043c\u0438\u043d"]})]})]})]})})}),J=c(172),U=Object(O.a)((function(e){return{input:{"& > *":{marginBottom:"15px",width:"100%"}}}})),z=function(e){var t=e.label,c=U();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(J.a,{className:c.input,label:t,id:"standard-basic",variant:"outlined"})})},A=c(171),W=Object(O.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}})),q=function(e){var t=e.text,c=W();return Object(n.jsx)(A.a,{variant:"contained",size:"large",color:"primary",className:c.margin,children:t})},G=(c(119),function(){return Object(n.jsx)("aside",{children:Object(n.jsx)("div",{className:"filter",children:Object(n.jsxs)("form",{className:"",children:[Object(n.jsx)(z,{label:"\u041e\u0442\u043a\u0443\u0434\u0430"}),Object(n.jsx)(z,{label:"\u041a\u0443\u0434\u0430"}),Object(n.jsx)(q,{text:"\u041f\u043e\u0438\u0441\u043a"})]})})})}),H=(c(120),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(!1),i=Object(u.a)(r,2),j=i[0],d=i[1];return Object(a.useEffect)((function(){(function(){var e=Object(T.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("http://localhost:5000/ukraine").then((function(e){return s(e.data)}));case 2:return e.next=4,d(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),j?Object(n.jsx)("main",{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"content",children:Object(n.jsx)("div",{className:"cards",children:c.map((function(e,t){return Object(n.jsx)(M,{card:e},t)}))})}),Object(n.jsx)(G,{})]})})}):Object(n.jsx)("div",{children:"Loading..."})}),K=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(H,{})})},Q=(c(121),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(!0),i=Object(u.a)(r,2),j=i[0],d=i[1];return Object(a.useEffect)((function(){(function(){var e=Object(T.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/posts").then((function(e){return s(e.data)}));case 2:return e.next=4,d(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),j?Object(n.jsx)("main",{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"content",children:Object(n.jsx)("div",{className:"cards",children:c.map((function(e,t){return Object(n.jsx)(M,{card:e},t)}))})}),Object(n.jsx)(G,{})]})})}):Object(n.jsx)("div",{children:"Loading..."})}),V=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(Q,{})})},X=(c(122),function(){return Object(n.jsx)("h1",{children:"Main Page"})}),Y=(c(123),function(){return Object(n.jsx)("h1",{children:"Blog info"})}),Z=(c(124),function(){return Object(n.jsx)("h1",{children:"News info"})}),$=(c(125),[{name:"Main",component:X,path:"/",exact:!0},{name:"Ukraine",component:K,path:"/ukraine",exact:!0},{name:"Europe",component:V,path:"/europe",exact:!0},{name:"Blog",component:Y,path:"/blog",exact:!0},{name:"News",component:Z,path:"/news",exact:!0},{name:"AdminPanel",component:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"admin-panel row",children:Object(n.jsx)("div",{className:"left",children:Object(n.jsx)(R,{})})})})},path:"/admin",exact:!0}]);var ee=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o,{}),Object(n.jsxs)(d.c,{children:[$.map((function(e){var t=e.path,c=e.exact,a=e.component,s=e.name;return Object(n.jsx)(d.a,{path:t,exact:c,component:a},s)})),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)(R,{}),Object(n.jsxs)("div",{className:"right-c",children:[Object(n.jsx)(d.a,{path:"/admin/add-post",exact:!0,component:D}),Object(n.jsx)(d.a,{path:"/admin/delete-post",exact:!0,component:I})]})]})]}),Object(n.jsx)(b,{})]})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(j.a,{children:Object(n.jsx)(ee,{})})}),document.getElementById("root"))},88:function(e,t,c){},89:function(e,t,c){},95:function(e,t,c){}},[[126,1,2]]]);
//# sourceMappingURL=main.34f27b68.chunk.js.map