(this["webpackJsonptha-33"]=this["webpackJsonptha-33"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(8),a=n.n(i),o=(n(13),n(2)),l=(n(14),n(4)),j=n(6),d={theme:!1,setTheme:function(e){}},r=Object(c.createContext)(d),b=n(0),u=function(e){var t=e.todo,n=(e.setValue,e.todos),s=e.setTodos,i=e.i,a=(e.value,Object(c.useState)(!1)),l=Object(o.a)(a,2),d=l[0],u=l[1],h=Object(c.useContext)(r),O=h.theme;h.setTheme;return Object(b.jsx)("div",{className:O?"card card_dark":"card",id:i,style:{display:"flex",flexDirection:"column"},children:Object(b.jsxs)("div",{children:[d?Object(b.jsx)("div",{style:{display:"inline-flex"},children:Object(b.jsx)("input",{className:"todo_input",type:"text",placeholder:t.title,onChange:function(e){t.title=e.target.value}})}):Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{className:"todo_title",children:[" ",t.title," "]}),Object(b.jsxs)("p",{className:"todo_done",children:["Completed",Object(b.jsx)("input",{type:"checkbox",className:"todo_chkbx"})]})]}),Object(b.jsxs)("div",{children:[d?Object(b.jsx)("button",{className:"todo_btn",onClick:function(){u(!d),s(Object(j.a)(n))},children:"Done"}):Object(b.jsx)("button",{className:"todo_btn",onClick:function(){return u(!d)},children:"Edit"}),Object(b.jsx)("button",{className:"todo_btn",onClick:function(){var e=n.filter((function(e,t){return i!==t}));s(e)},children:"Delete"})]})]})})},h=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)([]),a=Object(o.a)(i,2),d=a[0],h=a[1],O=Object(c.useState)({title:""}),x=Object(o.a)(O,2),m=x[0],p=x[1],v=Object(c.useContext)(r),f=v.theme;v.setTheme;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"todo",children:[Object(b.jsx)("input",{className:f?"input inp_dark":"input",type:"text",value:n,onChange:function(e){p(Object(l.a)(Object(l.a)({},m),{},{title:e.target.value})),s(e.target.value)}}),Object(b.jsx)("button",{className:f?"btn btn_dark":"btn",onClick:function(){""!==n&&(h([].concat(Object(j.a)(d),[m])),p(Object(l.a)(Object(l.a)({},m),{},{title:""})),s(""))},children:"Add Todo "})]}),0!==d.length?d.map((function(e,t){return Object(b.jsx)(u,{todo:e,setValue:p,todos:d,setTodos:h,i:t,value:m},t)})):Object(b.jsx)("div",{children:"Add New Items"})]})},O=function(){var e=Object(c.useContext)(r),t=e.theme,n=e.setTheme;return Object(b.jsx)("div",{style:{textAlign:"right"},children:Object(b.jsx)("button",{className:t?"theme_btn dark":"theme_btn",onClick:function(){return n(!t)},children:t?"Dark":"Light"})})},x=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(b.jsx)(r.Provider,{value:{theme:n,setTheme:s},children:Object(b.jsxs)("div",{className:n?"appdark App":"App",children:[Object(b.jsx)(O,{}),Object(b.jsx)(h,{})]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.01d7c8ba.chunk.js.map