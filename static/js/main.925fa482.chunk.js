(this.webpackJsonptodoslist=this.webpackJsonptodoslist||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(18),i=n.n(c),o=(n(25),n(11)),r=n(20),l=(n(26),n(8)),d=n(0);function b(e){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(l.b,{className:"navbar-brand",to:"#",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar&&Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})}function j(e){return Object(d.jsxs)("div",{className:"container  my-3",children:[Object(d.jsx)("h4",{children:e.todoitem.title}),Object(d.jsx)("p",{children:e.todoitem.desc}),Object(d.jsx)("button",{class:"btn btn-sm btn-danger",onClick:function(){return e.onDelete(e.todoitem)},children:"Delete"}),Object(d.jsx)("hr",{})]})}function u(e){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{className:"text-center my-3",children:"Todos List"}),0!==e.todos.length?e.todos.map((function(t){return Object(d.jsx)(j,{todoitem:t,onDelete:e.onDelete},t.sno)})):"No Todos left"]})}function m(){return Object(d.jsx)("div",{className:"bg-dark text-light text-center py-3",style:{position:"relative",top:"100vh",width:"100%"},children:"Copyright \xa9 MyTodosList.com @2021"})}function h(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(""),r=Object(o.a)(i,2),l=r[0],b=r[1];return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h3",{children:"Add a todo"}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s&&l||alert("title or description can't be empty."),e.addTodo(s,l),c(""),b("")},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"title",value:s,onChange:function(e){return c(e.target.value)}})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"desc",value:l,onChange:function(e){return b(e.target.value)}})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add Todo"})]})]})}var x=n(2);function O(){return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h3",{children:"This is about page"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi modi eius officiis quisquam assumenda dicta deserunt, illo ipsam adipisci perferendis fugiat voluptatem iusto perspiciatis ex, doloribus natus recusandae quia reprehenderit animi deleniti facilis rem?"})]})}var p=function(){var e=[];null!==localStorage.getItem("todos")&&(e=JSON.parse(localStorage.getItem("todos")));var t=Object(a.useState)(e),n=Object(o.a)(t,2),s=n[0],c=n[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(s))}),[s]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(b,{title:"My Todos List",searchBar:!0}),Object(d.jsxs)(x.c,{children:[Object(d.jsx)(x.a,{exact:!0,path:"/",children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{addTodo:function(e,t){var n={sno:0===s.length?0:s[s.length-1].sno+1,title:e,desc:t};c([].concat(Object(r.a)(s),[n]))}}),Object(d.jsx)(u,{todos:s,onDelete:function(e){c(s.filter((function(t){return e!==t}))),localStorage.setItem("todos",JSON.stringify(s))}})]})}),Object(d.jsx)(x.a,{exact:!0,path:"/about",children:Object(d.jsx)(O,{})})]}),Object(d.jsx)(m,{})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.925fa482.chunk.js.map