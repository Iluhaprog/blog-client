(this["webpackJsonpblog-client"]=this["webpackJsonpblog-client"]||[]).push([[2],{105:function(t,n,e){"use strict";e.r(n);var r=e(1),c=e.n(r),a=e(35),u=e.n(a),o=(e(75),e(76),e(48)),i=e(7),s=e(33),d=e(2),f=e(6),O=e(3);var l,b="SET_LOCALES",E=Object(d.a)((function(){return{type:"TOGGLE_LOCALE_FETCH"}}),f.c)((function(t){return O.a.get("/locale").then((function(n){var e=n.data;t({type:b,locales:e})}))})),j=e(46),p=e(47),h=e(8),T=p.a.div(l||(l=Object(j.a)(['\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .spinner-block {\n    width: 125px;\n    text-align: center;\n    margin-right: 0;\n\n    .spinner {\n      position: relative;\n      width: 125px;\n      height: 125px;\n\n      &:before,\n      &:after {\n        content: "";\n        display: block;\n        position: absolute;\n        border-width: 4px;\n        border-style: solid;\n        border-radius: 50%;\n      }\n    }\n    \n    .spinner.spinner-3 {\n\n      @keyframes scale-2 {\n        0% {\n          transform: scale(0);\n          opacity: 0;\n        }\n\n        50% {\n          transform: scale(0.7);\n          opacity: 1;\n        }\n\n        100% {\n          transform: scale(1);\n          opacity: 0;\n        }\n      }\n\n      &:before {\n        width: 125px;\n        height: 125px;\n        border-color: #000;\n        top: 0;\n        left: 0;\n        animation: scale-2 1s linear 0s infinite;\n      }\n\n      &:after {\n        width: 125px;\n        height: 125px;\n        border-color: #000;\n        top: 0;\n        left: 0;\n        opacity: 0;\n        animation: scale-2 1s linear 0.5s infinite;\n      }\n    }\n\n  }\n']))),S=function(){return Object(h.jsx)(T,{children:Object(h.jsx)("div",{className:"spinner-block",children:Object(h.jsx)("div",{className:"spinner spinner-3"})})})},_=c.a.lazy((function(){return Promise.all([e.e(0),e.e(1),e.e(5),e.e(8)]).then(e.bind(null,510))})),v=c.a.lazy((function(){return Promise.all([e.e(0),e.e(1),e.e(6)]).then(e.bind(null,509))})),A=c.a.lazy((function(){return Promise.all([e.e(0),e.e(7)]).then(e.bind(null,514))}));var g=Object(s.b)((function(t){return{lang:t.settings.lang,theme:t.settings.theme,isAuthorized:t.auth.isAuthorized}}),(function(t){return{getLocales:function(){t(E())}}}))((function(t){var n=t.lang,e=t.theme,a=t.isAuthorized,u=t.getLocales;return Object(r.useEffect)((function(){u()}),[]),Object(h.jsx)(c.a.Suspense,{fallback:Object(h.jsx)(S,{}),children:Object(h.jsx)(o.BrowserRouter,{children:Object(h.jsx)("div",{className:"App ".concat(e),children:Object(h.jsxs)(i.g,{children:[Object(h.jsx)(i.d,{path:"/admin",children:Object(h.jsx)(_,{lang:n,theme:e,isAuthorized:a})}),Object(h.jsx)(i.d,{path:"/login",children:Object(h.jsx)(A,{})}),Object(h.jsx)(i.d,{path:"/",children:Object(h.jsx)(v,{})})]})})})})})),R=function(t){t&&t instanceof Function&&e.e(9).then(e.bind(null,508)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,u=n.getTTFB;e(t),r(t),c(t),a(t),u(t)}))},I=e(0),L=e(25),C="state",y=e(67),m=e(20),P={accessToken:"",refreshToken:"",isAuthorized:!1,isFetch:!1},D=e(4),N=e(30);function F(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};return n(t)?t.slice(0,t.length-1):Object(D.a)(t)}var w={directories:[],total:0,isFetch:!1},M=e(32),G={files:[],total:0,isFetch:!1},k=e(21),H={selected:{},homes:[],isFetch:!1},U={messages:[],messageLiveTime:"10000"},x=e(34),W=e(27),J={successHandler:function(){},title:"",description:"",formType:x.a.NONE,isVisible:!1},K=e(15),V={selected:[],posts:[],total:0,isFetch:!1},B=e(17),Y={projects:[],selected:{},isFetch:!1},z=e(26),q=e(24),Q={socials:[],isFetch:!1},X=e(28),Z={tags:[],isFetch:!1},$=e(18),tt={data:{},users:[],isFetch:!1,passIsFetch:!1},nt="ADD_WINDOW",et="REMOVE_WINDOW",rt="UPDATE_WINDOW",ct={windowList:[]},at={array:[]},ut=e(29),ot=e(106),it={bookmarks:[],isView:!0,unviewedBookmarksNumber:0},st=e(44),dt=e.n(st),ft=e(68),Ot=e(19),lt=e(22),bt=200,Et=function(){var t=Object(ft.a)(dt.a.mark((function t(n,e){var r,c,a;return dt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(lt.d)(e);case 4:if(r=t.sent,c=r.status,a=r.data,c!==bt){t.next=9;break}return t.abrupt("return",a);case 9:throw new Error("Unauthorized");case 10:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}();var jt=Object(L.c)({auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m.c:return Object(I.a)(Object(I.a)({},t),{},{isFetch:!t.isFetch});case m.b:return Object(I.a)(Object(I.a)(Object(I.a)({},t),n.auth),{},{isAuthorized:!0});case m.a:return Object(I.a)({},P);default:return Object(I.a)({},t)}},dir:function(){var t,n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case N.d:return Object(I.a)(Object(I.a)({},e),{},{isFetch:!e.isFetch});case N.a:return Object(I.a)(Object(I.a)({},e),{},{directories:[r.dir].concat(Object(D.a)(F(e.directories,(function(t){return t.length>="10"}))))});case N.b:return Object(I.a)(Object(I.a)({},e),{},{directories:(null===(t=r.dirs)||void 0===t?void 0:t.data)||[],total:(null===(n=r.dirs)||void 0===n?void 0:n.total)||0});case N.c:return Object(I.a)(Object(I.a)({},e),{},{directories:e.directories.filter((function(t){return t.id!==r.id}))});default:return Object(I.a)({},e)}},file:function(){var t,n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case M.d:return Object(I.a)(Object(I.a)({},e),{},{isFetch:!e.isFetch});case M.b:return Object(I.a)(Object(I.a)({},e),{},{files:(null===(t=r.files)||void 0===t?void 0:t.data)||[],total:(null===(n=r.files)||void 0===n?void 0:n.total)||0});case M.a:return Object(I.a)(Object(I.a)({},e),{},{files:[r.file].concat(Object(D.a)(e.files))});case M.c:return Object(I.a)(Object(I.a)({},e),{},{files:e.files.filter((function(t){return t.id!==r.id}))});default:return Object(I.a)({},e)}},home:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case k.e:return Object(I.a)(Object(I.a)({},t),{},{isFetch:!0});case k.d:return Object(I.a)(Object(I.a)({},t),{},{selected:n.home});case k.b:return Object(I.a)(Object(I.a)({},t),{},{homes:Object(D.a)(n.homes)});case k.a:return Object(I.a)(Object(I.a)({},t),{},{homes:[n.home].concat(Object(D.a)(t.homes))});case k.f:return Object(I.a)(Object(I.a)({},t),{},{homes:t.homes.map((function(t){return t.id===n.home.id?n.home:t}))});case k.c:return Object(I.a)(Object(I.a)({},t),{},{homes:t.homes.filter((function(t){return t.id!==n.id}))});default:return Object(I.a)({},t)}},message:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f.a:return Object(I.a)(Object(I.a)({},t),{},{messages:[].concat(Object(D.a)(t.messages),[n.message])});case f.b:return Object(I.a)(Object(I.a)({},t),{},{messages:t.messages.filter((function(t){return t.id!==n.id}))});default:return Object(I.a)({},t)}},modal:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case W.b:return Object(I.a)(Object(I.a)({},t),{},{title:n.title,description:n.description,successHandler:n.successHandler});case W.c:return Object(I.a)(Object(I.a)({},t),{},{formType:n.formType});case W.d:return Object(I.a)(Object(I.a)({},t),{},{isVisible:n.isVisible});case W.a:return Object(I.a)({},J);default:return Object(I.a)({},t)}},post:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case K.f:return Object(I.a)(Object(I.a)({},t),{},{isFetch:!t.isFetch});case K.d:return Object(I.a)(Object(I.a)({},t),{},{selected:n.post});case K.a:return Object(I.a)(Object(I.a)({},t),{},{posts:[n.post].concat(Object(D.a)(F(t.posts,(function(t){return t.length>="10"}))))});case K.g:return Object(I.a)(Object(I.a)({},t),{},{selected:Object(I.a)(Object(I.a)({},t.selected),n.post),posts:t.posts.map((function(t){return t.id===n.post.id?n.post:t}))});case K.b:return Object(I.a)(Object(I.a)({},t),{},{posts:n.posts});case K.e:return Object(I.a)(Object(I.a)({},t),{},{total:n.total});case K.c:return Object(I.a)(Object(I.a)({},t),{},{posts:t.posts.filter((function(t){return t.id!==n.id}))});default:return Object(I.a)({},t)}},project:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case B.e:return Object(I.a)(Object(I.a)({},t),{},{isFetch:!t.isFetch});case B.d:return Object(I.a)(Object(I.a)({},t),{},{selected:t.projects.find((function(t){return t.id===n.id}))});case B.a:return Object(I.a)(Object(I.a)({},t),{},{projects:[n.project].concat(Object(D.a)(t.projects))});case B.f:return Object(I.a)(Object(I.a)({},t),{},{selected:Object(I.a)({},n.project),projects:t.projects.map((function(t){return t.id===n.project.id?n.project:t}))});case B.b:return Object(I.a)(Object(I.a)({},t),{},{projects:Object(D.a)(n.projects)});case B.c:return Object(I.a)(Object(I.a)({},t),{},{projects:t.projects.filter((function(t){return t.id!==n.id}))});default:return Object(I.a)({},t)}},settings:z.a,social:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case q.d:return Object(I.a)(Object(I.a)({},t),{},{isFetch:!t.isFetch});case q.a:return Object(I.a)(Object(I.a)({},t),{},{socials:[n.social].concat(Object(D.a)(t.socials))});case q.e:return Object(I.a)(Object(I.a)({},t),{},{socials:t.socials.map((function(t){return t.id===n.social.id?n.social:t}))});case q.b:return Object(I.a)(Object(I.a)({},t),{},{socials:Object(D.a)(n.socials)});case q.c:return Object(I.a)(Object(I.a)({},t),{},{socials:t.socials.filter((function(t){return t.id!==n.id}))});default:return Object(I.a)({},t)}},tag:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case X.d:return Object(I.a)(Object(I.a)({},t),{},{isFetch:!t.isFetch});case X.a:return Object(I.a)(Object(I.a)({},t),{},{tags:[n.tag].concat(Object(D.a)(t.tags))});case X.b:return Object(I.a)(Object(I.a)({},t),{},{tags:Object(D.a)(n.tags)});case X.c:return Object(I.a)(Object(I.a)({},t),{},{tags:t.tags.filter((function(t){return t.id!==n.id}))});default:return Object(I.a)({},t)}},user:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case $.e:return Object(I.a)(Object(I.a)({},t),{},{isFetch:!t.isFetch});case $.d:return Object(I.a)(Object(I.a)({},t),{},{passIsFetch:!t.passIsFetch});case $.c:return Object(I.a)(Object(I.a)({},t),{},{data:n.user});case $.a:return Object(I.a)(Object(I.a)({},t),{},{users:[n.user].concat(Object(D.a)(t.users))});case $.b:return Object(I.a)(Object(I.a)({},t),{},{users:Object(D.a)(n.users)});case $.f:return Object(I.a)(Object(I.a)({},t),{},{data:t.data.id?n.user:{},users:t.users.map((function(t){return t.id===n.user.id?n.user:t}))});default:return Object(I.a)({},t)}},window:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case nt:return{windowList:[].concat(Object(D.a)(t.windowList),[n.windowData])};case et:return{windowList:t.windowList.filter((function(t){return t.id!==n.id}))};case rt:return{windowList:t.windowList.map((function(t){return t.id===n.id?Object(I.a)(Object(I.a)({},t),{},{content:n.content}):t}))};default:return Object(I.a)({},t)}},locale:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b:return{array:n.locales};default:return Object(I.a)({},t)}},bookmark:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ut.d:return Object(I.a)(Object(I.a)({},t),{},{unviewedBookmarksNumber:0});case ut.c:return Object(I.a)(Object(I.a)({},t),{},{isView:n.isView});case ut.a:return Object(I.a)(Object(I.a)({},t),{},{unviewedBookmarksNumber:++t.unviewedBookmarksNumber,bookmarks:[{id:Object(ot.a)(),data:n.data}].concat(Object(D.a)(t.bookmarks))});case ut.b:return Object(I.a)(Object(I.a)({},t),{},{bookmarks:t.bookmarks.filter((function(t){return t.id!==n.id}))});default:return Object(I.a)({},t)}}}),pt=function(){try{var t=localStorage.getItem(C);if(!t)return;return JSON.parse(t)}catch(n){console.error(n)}}(),ht=Object(L.d)(jt,pt,Object(L.a)(y.a,(function(t){return function(n){return function(e){var r;return e.type===f.a&&Et((r=e.message,r.type===Ot.a.ERROR),t.getState().user.data.id).then((function(n){t.dispatch(Object(m.g)(n))})).catch((function(){t.dispatch(Object(m.d)())})),n(e)}}})));ht.subscribe((function(){!function(t){try{var n=JSON.stringify(t);localStorage.setItem(C,n)}catch(e){console.error(e)}}(Object(I.a)({},ht.getState()))})),u.a.render(Object(h.jsx)(s.a,{store:ht,children:Object(h.jsx)(g,{})}),document.getElementById("root")),R()},13:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={DESC:"DESC",ASC:"ASC"}},15:function(t,n,e){"use strict";e.d(n,"f",(function(){return s})),e.d(n,"d",(function(){return d})),e.d(n,"a",(function(){return f})),e.d(n,"g",(function(){return O})),e.d(n,"b",(function(){return l})),e.d(n,"e",(function(){return b})),e.d(n,"c",(function(){return E})),e.d(n,"k",(function(){return S})),e.d(n,"i",(function(){return _})),e.d(n,"l",(function(){return v})),e.d(n,"j",(function(){return A})),e.d(n,"h",(function(){return g})),e.d(n,"n",(function(){return R})),e.d(n,"m",(function(){return I}));var r=e(0),c=e(3),a=e(2),u=e(13),o="/post";var i=e(6),s="TOGGLE_POST_FETCH",d="SELECT_POST",f="ADD_POST",O="UPDATE_POST",l="FILL_POSTS_ARRAY",b="SET_POST_TOTAL",E="REMOVE_POST",j=Object(a.b)(s),p=function(t){return{type:l,posts:t}},h=function(t){return{type:b,total:t}},T=Object(a.a)(j,i.c),S=T((function(t,n,e,r){return function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"10";return c.a.post("".concat(o,"/by-tags/").concat(n,"/").concat(e),t,{headers:{Accept:"application/json","Content-Type":"application/json"}})}(n,e,r).then((function(n){var e=n.data;t(p(e[0])),t(h(e[1]))}))})),_=T((function(t,n,e,r){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"10",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.a.DESC;return c.a.get("".concat(o,"/").concat(t,"/").concat(n,"/").concat(e))}(n,e,r).then((function(n){var e=n.data;t(p(e.data)),t(h(e.total))}))})),v=T((function(t,n,e,r){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"10",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.a.DESC;return c.a.get("".concat(o,"/visible/").concat(t,"/").concat(n,"/").concat(e))}(n,e,r).then((function(n){var e=n.data;t(p(e.data)),t(h(e.total))}))})),A=T((function(t,n){return function(t){return c.a.get("".concat(o,"/").concat(t))}(n).then((function(n){var e=n.data;t({type:d,post:e})}))})),g=(T((function(t){return c.a.get(o).then((function(n){var e=n.data;t(p(e))}))})),T((function(t,n){return(e=n,Object(a.c)((function(t){return c.a.post(o,e,{headers:Object(r.a)({Accept:"application/json","Content-Type":"application/json"},t)})}))).then((function(n){var e=n.data;t(function(t){return{type:f,post:t}}(e))}));var e}))),R=T((function(t,n){return(e=n,Object(a.c)((function(t){return c.a.put(o,e,{headers:Object(r.a)({Accept:"application/json","Content-Type":"application/json"},t)})}))).then((function(e){t(function(t){return{type:O,post:t}}(n))}));var e})),I=T((function(t,n){return function(t){return Object(a.c)((function(n){return c.a.delete("".concat(o,"/").concat(t),{headers:n})}))}(n).then((function(e){t(function(t){return{type:E,id:t}}(n))}))}))},17:function(t,n,e){"use strict";e.d(n,"e",(function(){return s})),e.d(n,"a",(function(){return d})),e.d(n,"d",(function(){return f})),e.d(n,"f",(function(){return O})),e.d(n,"b",(function(){return l})),e.d(n,"c",(function(){return b})),e.d(n,"j",(function(){return j})),e.d(n,"h",(function(){return h})),e.d(n,"g",(function(){return T})),e.d(n,"k",(function(){return S})),e.d(n,"i",(function(){return _}));var r=e(0),c=e(3),a=e(2),u=e(13),o="/project";var i=e(6),s="TOGGLE_PROJECT_FETCH",d="ADD_PROJECT",f="SELECT_PROJECT",O="UPDATE_PROJECT",l="FILL_PROJECTS_ARRAY",b="REMOVE_PROJECT",E=Object(a.b)(s),j=function(t){return{type:f,id:t}},p=Object(a.a)(E,i.c),h=p((function(t,n){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.a.DESC;return c.a.get("".concat(o,"/").concat(t))}(n).then((function(n){var e=n.data;t({type:l,projects:e})}))})),T=p((function(t,n){return(e=n,Object(a.c)((function(t){return c.a.post(o,e,{headers:Object(r.a)({Accept:"application/json","Content-Type":"application/json"},t)})}))).then((function(n){var e=n.data;t(function(t){return{type:d,project:t}}(e))}));var e})),S=p((function(t,n){return(e=n,Object(a.c)((function(t){return c.a.put(o,e,{headers:Object(r.a)({Accept:"application/json","Content-Type":"application/json"},t)})}))).then((function(){t(function(t){return{type:O,project:t}}(n))}));var e})),_=p((function(t,n){return function(t){return Object(a.c)((function(n){return c.a.delete("".concat(o,"/").concat(t),{headers:n})}))}(n).then((function(){t(function(t){return{type:b,id:t}}(n))}))}))},18:function(t,n,e){"use strict";e.d(n,"e",(function(){return i})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return d})),e.d(n,"b",(function(){return f})),e.d(n,"f",(function(){return O})),e.d(n,"d",(function(){return l})),e.d(n,"g",(function(){return T})),e.d(n,"h",(function(){return S})),e.d(n,"i",(function(){return _})),e.d(n,"j",(function(){return v}));var r=e(0),c=e(3),a=e(2),u="/user";var o=e(6),i="TOGGLE_USER_FETCH",s="SET_USER_DATA",d="ADD_USER",f="FILL_USERS_ARRAY",O="UPDATE_USER",l="SET_PASS_FETCH",b=Object(a.b)(i),E=Object(a.b)(l),j=function(t){return{type:s,user:t}},p=Object(a.a)(b,o.c),h=Object(a.a)(E,o.c),T=p((function(t){return c.a.get(u).then((function(n){var e=n.data;t({type:f,users:e})}))})),S=p((function(t){return Object(a.c)((function(t){return c.a.get("".concat(u,"/current"),{headers:t})})).then((function(n){var e=n.data;t(j(e))}))})),_=(p((function(t,n){return function(t){return c.a.get(u,{params:{id:t}})}(n).then((function(n){var e=n.data;t(j(e))}))})),p((function(t,n){return(e=n,c.a.post(u,e,{headers:{Accept:"application/json","Content-Type":"application/json"}})).then((function(n){var e=n.data;t(function(t){return{type:d,user:t}}(e))}));var e})),p((function(t,n){return(e=n,Object(a.c)((function(t){return c.a.put(u,e,{headers:Object(r.a)({Accept:"application/json","Content-Type":"application/json"},t)})}))).then((function(){t(function(t){return{type:O,user:t}}(n))}));var e}))),v=h((function(t,n){return e=n,Object(a.c)((function(t){return c.a.put("".concat(u,"/password"),e,{headers:Object(r.a)({Accept:"application/json","Content-Type":"application/json"},t)})}));var e}))},19:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={SUCCESS:"SUCCESS",ERROR:"ERROR",WARNING:"WARNING",DEFAULT:"DEFAULT"}},2:function(t,n,e){"use strict";e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return u}));var r=e(19);function c(t){var n=localStorage.getItem("asfdsghjf");return t({Authorization:n?"Bearer ".concat(n):""})}function a(t,n){return function(e){return function(t,n,e){return function(){for(var c=arguments.length,a=new Array(c),u=0;u<c;u++)a[u]=arguments[u];return function(c){return c(t()),n.apply(void 0,[c].concat(a)).then((function(n){return c(t()),c(e(r.a.SUCCESS)),n}),(function(n){c(t()),c(e(r.a.ERROR,n))}))}}}(t,e,n)}}function u(t){return function(){return{type:t}}}},20:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"a",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"g",(function(){return d})),e.d(n,"d",(function(){return f})),e.d(n,"e",(function(){return l})),e.d(n,"f",(function(){return b}));var r=e(22),c=e(6),a=e(2),u="MAKE_AUTH",o="CLEAR_AUTH",i="TOGGLE_AUTH_FETCH",s=Object(a.b)(i),d=function(t){return{type:u,auth:t}},f=function(){return{type:o}},O=Object(a.a)(s,c.c),l=O((function(t,n,e){return r.a(n,e).then((function(n){var e=n.data;t(d(e))}))})),b=(O((function(t){return r.d().then((function(n){var e=n.data;t(d(e))}))})),O((function(t){return r.b().then((function(){t(f()),localStorage.clear()}))})));O((function(t){return r.c().then((function(){t(f()),localStorage.clear()}))}))},21:function(t,n,e){"use strict";e.d(n,"e",(function(){return i})),e.d(n,"d",(function(){return s})),e.d(n,"a",(function(){return d})),e.d(n,"f",(function(){return f})),e.d(n,"b",(function(){return O})),e.d(n,"c",(function(){return l})),e.d(n,"h",(function(){return j})),e.d(n,"i",(function(){return p})),e.d(n,"g",(function(){return h})),e.d(n,"k",(function(){return T})),e.d(n,"j",(function(){return S}));var r=e(0),c=e(3),a=e(2),u="/home";var o=e(6),i="TOGGLE_HOME_FETCH",s="SELECT_HOME",d="ADD_HOME",f="UPDATE_HOME",O="FILL_HOMES_ARRAY",l="REMOVE_HOME",b=Object(a.b)(i),E=Object(a.a)(b,o.c),j=E((function(t){return c.a.get(u).then((function(n){var e=n.data;t({type:O,homes:e})}))})),p=E((function(t){return c.a.get("".concat(u,"/one")).then((function(n){var e=n.data;t({type:s,home:e})}))})),h=E((function(t,n){return(e=n,Object(a.c)((function(t){return c.a.post(u,e,{headers:Object(r.a)({Accept:"application/json","Content-Type":"application/json"},t)})}))).then((function(n){var e=n.data;t(function(t){return{type:d,home:t}}(e))}));var e})),T=E((function(t,n){return(e=n,Object(a.c)((function(t){return c.a.put(u,e,{headers:Object(r.a)({Accept:"application/json","Content-Type":"application/json"},t)})}))).then((function(){t(function(t){return{type:f,home:t}}(n))}));var e})),S=E((function(t,n){return function(t){return Object(a.c)((function(n){return c.a.delete("".concat(u,"/").concat(t),{headers:n})}))}(n).then((function(){t(function(t){return{type:l,id:t}}(n))}))}))},22:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"d",(function(){return u})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i}));var r=e(3),c=e(2);function a(t,n){return r.a.post("/auth/login",null,{withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"},auth:{username:t,password:n}}).then((function(t){return localStorage.setItem("asddgr",t.data.refreshToken),localStorage.setItem("asfdsghjf",t.data.accessToken),t}))}function u(t){return Object(c.c)((function(n){return r.a.get("/auth/refresh-token",{headers:n,params:{token:localStorage.getItem("asddgr"),userId:t}}).then((function(t){var n=t.data;return localStorage.setItem("asfdsghjf",n.accessToken),localStorage.setItem("asddgr",n.refreshToken),t}))}))}function o(){return Object(c.c)((function(t){return r.a.get("/auth/logout",{headers:t,params:{token:localStorage.getItem("asddgr")}})}))}function i(){return Object(c.c)((function(t){return r.a.get("/auth/logoutAll",{headers:t})}))}},24:function(t,n,e){"use strict";e.d(n,"d",(function(){return s})),e.d(n,"a",(function(){return d})),e.d(n,"b",(function(){return f})),e.d(n,"e",(function(){return O})),e.d(n,"c",(function(){return l})),e.d(n,"g",(function(){return j})),e.d(n,"f",(function(){return p})),e.d(n,"i",(function(){return h})),e.d(n,"h",(function(){return T}));var r=e(0),c=e(3),a=e(2),u=e(13),o="/social";var i=e(6),s="TOGGLE_SOCIAL_FETCH",d="ADD_SOCIAL",f="FILL_SOCIALS_ARRAY",O="UPDATE_SOCIAL",l="REMOVE_SOCIAL",b=Object(a.b)(s),E=Object(a.a)(b,i.c),j=E((function(t,n){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.a.DESC;return c.a.get("".concat(o,"/").concat(t))}(n).then((function(n){var e=n.data;t({type:f,socials:e})}))})),p=E((function(t,n){return(e=n,Object(a.c)((function(t){return c.a.post(o,e,{headers:Object(r.a)({Accept:"application/json","Content-Type":"application/json"},t)})}))).then((function(n){var e=n.data;t(function(t){return{type:d,social:t}}(e))}));var e})),h=E((function(t,n){return(e=n,Object(a.c)((function(t){return c.a.put(o,e,{headers:Object(r.a)({Accept:"application/json","Content-Type":"application/json"},t)})}))).then((function(){t(function(t){return{type:O,social:t}}(n))}));var e})),T=E((function(t,n){return function(t){return Object(a.c)((function(n){return c.a.delete("".concat(o,"/").concat(t),{headers:n})}))}(n).then((function(){t(function(t){return{type:l,id:t}}(n))}))}))},26:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"a",(function(){return i}));var r=e(0),c=e(36),a=e(38),u={DARK:"dark",LIGHT:"light"},o={lang:c.a.en,theme:u.LIGHT},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.a:return Object(r.a)(Object(r.a)({},t),{},{lang:n.lang});case a.b:return Object(r.a)(Object(r.a)({},t),{},{theme:n.theme});default:return Object(r.a)({},t)}}},27:function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return u})),e.d(n,"a",(function(){return o})),e.d(n,"f",(function(){return i})),e.d(n,"g",(function(){return s})),e.d(n,"h",(function(){return d})),e.d(n,"e",(function(){return f}));var r=e(34),c="INIT_MODAL",a="SET_FORM_TYPE",u="SET_VISIBLE",o="CLEAR_MODAL",i=function(t){var n=t.title,e=void 0===n?"":n,r=t.description,a=void 0===r?"":r,u=t.successHandler;return{type:c,title:e,description:a,successHandler:void 0===u?function(){}:u}},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.a.NONE;return{type:a,formType:t}},d=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:u,isVisible:t}},f=function(){return{type:o}}},28:function(t,n,e){"use strict";e.d(n,"d",(function(){return i})),e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return d})),e.d(n,"c",(function(){return f})),e.d(n,"f",(function(){return b})),e.d(n,"e",(function(){return E})),e.d(n,"g",(function(){return j}));var r=e(3),c=e(2),a=e(13),u="/tag";var o=e(6),i="TOGGLE_TAG_FETCH",s="ADD_TAG",d="FILL_TAGS_ARRAY",f="REMOVE_TAG",O=Object(c.b)(i),l=Object(c.a)(O,o.c),b=l((function(t){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.a.DESC;return r.a.get("".concat(u,"/").concat(t))}().then((function(n){var e=n.data;t({type:d,tags:e})}))})),E=l((function(t,n){return(e=n,Object(c.c)((function(t){return r.a.post(u,e,{headers:t})}))).then((function(n){var e=n.data;t(function(t){return{type:s,tag:t}}(e))}));var e})),j=l((function(t,n){return function(t){return Object(c.c)((function(n){return r.a.delete("".concat(u,"/").concat(t),{headers:n})}))}(n).then((function(e){t(function(t){return{type:f,id:t}}(n))}))}))},29:function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return a})),e.d(n,"d",(function(){return u})),e.d(n,"g",(function(){return o})),e.d(n,"e",(function(){return i})),e.d(n,"f",(function(){return s}));var r="SET_VIEW",c="ADD_BOOKMARK",a="REMOVE_BOOKMARK",u="VIEW",o=function(){return{type:u}},i=function(t){return{type:c,data:t}},s=function(t){return{type:a,id:t}}},3:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(63),c=e.n(r),a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://api.injs.club",REACT_APP_TIMEOUT:"3000",REACT_APP_ACCESS_TOKEN_KEY:"asfdsghjf",REACT_APP_REFRESH_TOKEN_KEY:"asddgr",REACT_APP_PAGINATION_LIMIT:"10",REACT_APP_MESSAGE_LIVETIME:"10000"}),u=a.REACT_APP_API_URL,o=a.REACT_APP_TIMEOUT,i=c.a.create({baseURL:u,timeout:o})},30:function(t,n,e){"use strict";e.d(n,"d",(function(){return i})),e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return d})),e.d(n,"c",(function(){return f})),e.d(n,"f",(function(){return b})),e.d(n,"e",(function(){return E})),e.d(n,"g",(function(){return j}));var r=e(0),c=e(3),a=e(2),u="/directory";var o=e(6),i="TOGGLE_DIR_FETCH",s="ADD_DIR",d="FILL_DIRS_ARRAY",f="REMOVE_DIR",O=Object(a.b)(i),l=Object(a.a)(O,o.c),b=l((function(t,n,e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"10";return c.a.get("".concat(u,"/").concat(t,"/").concat(n))}(n,e).then((function(n){var e=n.data;t({type:d,dirs:e})}))})),E=l((function(t,n){return function(t){return Object(a.c)((function(n){return c.a.post(u,t,{headers:Object(r.a)({Accept:"application/json","Content-Type":"application/json"},n)})}))}(n).then((function(n){var e=n.data;t(function(t){return{type:s,dir:t}}(e))}))})),j=l((function(t,n){return function(t){return Object(a.c)((function(n){return c.a.delete("".concat(u,"/").concat(t),{headers:n})}))}(n).then((function(e){t(function(t){return{type:f,id:t}}(n))}))}))},32:function(t,n,e){"use strict";e.d(n,"d",(function(){return i})),e.d(n,"b",(function(){return s})),e.d(n,"a",(function(){return d})),e.d(n,"c",(function(){return f})),e.d(n,"e",(function(){return E})),e.d(n,"f",(function(){return j}));var r=e(3),c=e(2),a=e(13),u="/file";var o=e(6),i="TOGGLE_FILE_FETCH",s="FILL_FILES_ARRAY",d="ADD_FILE",f="REMOVE_FILE",O=Object(c.b)(i),l=function(t){return{type:s,files:t}},b=Object(c.a)(O,o.c),E=(b((function(t,n,e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"10",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.a.DESC;return r.a.get("".concat(u,"/").concat(t,"/").concat(n,"/").concat(e))}(n,e).then((function(n){var e=n.data;t(l(e))}))})),b((function(t,n){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.a.DESC;return r.a.get("".concat(u,"/by-dir"),{params:{dirId:t,order:n}})}(n).then((function(n){var e=n.data;t(l(e))}))})),b((function(t,n,e){return function(t,n){return Object(c.c)((function(e){return r.a.post(u,t,{params:{dir:n},headers:e})}))}(n,e).then((function(n){var e=n.data;t({type:d,file:e})}))}))),j=b((function(t,n){return function(t){return Object(c.c)((function(n){return r.a.delete("".concat(u,"/").concat(t),{headers:n})}))}(n).then((function(e){t(function(t){return{type:f,id:t}}(n))}))}))},34:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={NONE:"NONE",ONE_INPUT:"ONE_INPUT",FILE_SELECT:"FILE_SELECT",INPUT:"INPUT",CONFIRM:"CONFIRM"}},36:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={en:{title:"en",adminNav:{PROFILE:"Profile",POSTS:"Posts",PROJECTS:"Projects",DIRS:"Dirs",HOMES:"Homes",TAGS:"Tags"},nav:{POSTS:"Posts",PROJECTS:"Projects",ABOUT_ME:"About me",HOME:"Home"},button:{SELECT:"Select",SELECT_PICTURE:"Select picture",SEND:"Send",DELETE:"Delete",CLOSE:"Close",READ:"Read",EDIT:"Edit",MORE_PROJECTS:"More projects"},label:{FIRST_NAME:"First name",LAST_NAME:"Last name",LOGIN:"Login",EMAIL:"Email",ABOUT_ME:"About me",PASSWORD:"Password",OLD_PASSWORD:"Old password",NEW_PASSWORD:"New password",NEW_REPEAT_PASSWORD:"Repeat new password",SKILLS:"Skills",TITLE:"Title",LINK:"Link",DESCRIPTION:"Description",SELECT_TAGS:"Select tags",PROJECT_LINK:"Project link",GITHUB_LINK:"Github link",WRITE_TAG_TITLE:"Write tag title"},text:{CHANGE_PASSWORD:"Change password",EDIT_PROFILE:"Edit profile",SIGN_IN:"Sign In",SUCCESS:"Success",SOCIALS:"Socials",POST_CREATE_TITLE:"Enter your post title",POST_CREATE_DESCRIPTION:"You must enter a unique title for your new post.",CONFIRM_POST_DELETE:"Are you sure you want to delete the post",PROJECT_CREATE_TITLE:"Enter your project title",PROJECT_CREATE_DESCRIPTION:"You must enter a unique title for your new project.",DIR_CREATE_TITLE:"Enter dirname",DIR_CREATE_DESCRIPTION:"You must enter a unique dirname.",LAST_POSTS:"Last posts",LAST_PROJECTS:"Last projects",WRITE_TAGS:"Enter tags separated by commas",SEARCH:"Search",ALL:"All",NOT_FOUND:"Nothing found, try again.",EMPTY:"Empty.",DELETE_DIR:"Are you sure you want to delete the dir?",DELETE_PROJECT:"Are you sure you want to delete the project?",DELETE_HOME:"Are you sure you want to delete the home text?"}},ru:{title:"ru",adminNav:{PROFILE:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442",POSTS:"\u041f\u043e\u0441\u0442\u044b",PROJECTS:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b",DIRS:"\u0424\u0430\u0439\u043b\u044b",HOMES:"\u0413\u043b\u0430\u0432\u043d\u044b\u0435",TAGS:"\u0422\u0435\u0433\u0438"},nav:{POSTS:"\u041f\u043e\u0441\u0442\u044b",PROJECTS:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b",ABOUT_ME:"\u041e\u0431\u043e \u043c\u043d\u0435",HOME:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},button:{SELECT:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",SELECT_PICTURE:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",SEND:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",DELETE:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",CLOSE:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",READ:"\u0427\u0438\u0442\u0430\u0442\u044c",EDIT:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",MORE_PROJECTS:"\u0415\u0449\u0451 \u043f\u0440\u043e\u0435\u043a\u0442\u044b"},label:{FIRST_NAME:"\u0418\u043c\u044f",LAST_NAME:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",LOGIN:"\u041b\u043e\u0433\u0438\u043d",EMAIL:"\u0415\u043c\u0430\u0439\u043b",ABOUT_ME:"\u041e\u0431\u043e \u043c\u043d\u0435",PASSWORD:"\u041f\u0430\u0440\u043e\u043b\u044c",OLD_PASSWORD:"\u0421\u0442\u0430\u0440\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",NEW_PASSWORD:"\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",NEW_REPEAT_PASSWORD:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",SKILLS:"\u0423\u043c\u0435\u043d\u0438\u044f",TITLE:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",LINK:"\u0421\u0441\u044b\u043b\u043a\u0430",DESCRIPTION:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",SELECT_TAGS:"\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0442\u0435\u0433\u0438",PROJECT_LINK:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0435\u043a\u0442",GITHUB_LINK:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 Github",WRITE_TAG_TITLE:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u0433\u0430"},text:{CHANGE_PASSWORD:"\u0421\u043c\u0435\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f",EDIT_PROFILE:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",SIGN_IN:"\u0412\u043e\u0439\u0442\u0438",SUCCESS:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e",SOCIALS:"\u0421\u043e\u0446. \u0441\u0435\u0442\u0438",POST_CREATE_TITLE:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u043e\u0441\u0442\u0430",POST_CREATE_DESCRIPTION:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u0432\u0435\u0441\u0442\u0438 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a \u0434\u043b\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u0441\u0442\u0430.",CONFIRM_POST_DELETE:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u0442",PROJECT_CREATE_TITLE:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u0440\u043e\u0435\u043a\u0442\u0430",PROJECT_CREATE_DESCRIPTION:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u0432\u0435\u0441\u0442\u0438 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a \u0434\u043b\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430.",DIR_CREATE_TITLE:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438",DIR_CREATE_DESCRIPTION:"\u0412\u044b \u0434\u043e\u043b\u0436\u0438 \u0432\u0432\u0435\u0441\u0442\u0438 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0438\u043c\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438.",LAST_POSTS:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u044b",LAST_PROJECTS:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b",WRITE_TAGS:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u0433\u0438 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u044f\u0442\u043e\u0439",SEARCH:"\u041f\u043e\u0438\u0441\u043a",ALL:"\u0412\u0441\u0435",NOT_FOUND:"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",EMPTY:"\u041f\u0443\u0441\u0442\u043e.",DELETE_DIR:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u0438\u0440\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e?",DELETE_PROJECT:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442?",DELETE_HOME:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u0433\u043b\u0430\u0432\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b?"}}}},38:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return u})),e.d(n,"d",(function(){return o})),e.d(n,"e",(function(){return i})),e.d(n,"c",(function(){return s}));var r=e(26),c=e(36),a="SET_LANG",u="SET_THEME",o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.a.en;return{type:a,lang:t}},i=function(){return{type:u,theme:r.b.LIGHT}},s=function(){return{type:u,theme:r.b.DARK}}},6:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return i}));var r=e(19),c=e(106),a="ADD_MESSAGE",u="REMOVE_MESSAGE",o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.a.DEFAULT,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{type:a,message:{id:Object(c.a)(),data:n,type:t}}},i=function(t){return{type:u,id:t}}},75:function(t,n,e){},76:function(t,n,e){}},[[105,3,4]]]);
//# sourceMappingURL=main.086d5744.chunk.js.map