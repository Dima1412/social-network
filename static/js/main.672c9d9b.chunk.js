(this["webpackJsonpfirst-prog"]=this["webpackJsonpfirst-prog"]||[]).push([[0],{104:function(e,t,n){"use strict";t.a=n.p+"static/media/user.24b6ba7b.jpg"},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(33),a=n(5),s="SEND-MESSAGE",c={dialogs:[{id:1,name:"Dimon"},{id:2,name:"Korgikkk"},{id:3,name:"Santella"},{id:4,name:"Eugine"},{id:5,name:"VityaGanstaaaa"}],messages:[{id:1,message:"yo"},{id:2,message:"yoyoyo"},{id:3,message:"i am a ganstaaa shit"},{id:4,message:"fuck you motherfucker"},{id:5,message:"peace of shit"}]},i=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:6,message:t.newMessageBody};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},16:function(e,t,n){e.exports={nav:"navbar_nav__2zp-d",item:"navbar_item__L4BBU",active:"navbar_active__W87q5"}},162:function(e,t,n){},163:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(130),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"82a30656-4e4a-4e44-b90d-5e5d04cc6f09"}}),s={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},c={getProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},287:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,294)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},a=n(0),s=n.n(a),c=n(65),i=n.n(c),o=(n(162),n(34)),u=n(35),l=n(38),d=n(37),j=(n(163),n(5)),f=n(13),b=n(89),p=n.n(b),h=n(1),g=function(e){return Object(h.jsxs)("header",{className:p.a.header,children:[Object(h.jsx)("img",{src:"https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png"}),Object(h.jsx)("div",{className:p.a.loginBlock,children:e.isAuth?Object(h.jsxs)("div",{children:[e.login," - ",Object(h.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(h.jsx)(f.b,{to:"/login",children:"Login"})})]})},O=n(14),m=n(11),v=n.n(m),x=n(20),w=n(21),_=n(56),P="SET_USER_DATA",y={userId:null,email:null,login:null,isAuth:!1},C=function(e,t,n,r){return{type:P,payload:{userId:e,email:t,login:n,isAuth:r}}},S=function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){var n,r,a,s,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,s=r.email,c=r.login,t(C(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},I=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsx)(g,Object(j.a)({},this.props))}}]),n}(s.a.Component),N=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.logout();case 2:0===e.sent.data.resultCode&&t(C(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(I),E=n(16),U=n.n(E),F=function(){return Object(h.jsxs)("nav",{className:U.a.nav,children:[Object(h.jsx)("div",{className:U.a.item,children:Object(h.jsx)(f.b,{to:"/profile",activeClassName:U.a.active,children:"Profile"})}),Object(h.jsx)("div",{className:U.a.item,children:Object(h.jsx)(f.b,{to:"/users",activeClassName:U.a.active,children:"Users"})}),Object(h.jsx)("div",{className:U.a.item,children:Object(h.jsx)(f.b,{to:"/dialogs",activeClassName:U.a.active,children:"Messages"})}),Object(h.jsx)("div",{className:U.a.item,children:Object(h.jsx)(f.b,{to:"/newsfeed",activeClassName:U.a.active,children:"News"})}),Object(h.jsx)("div",{className:U.a.item,children:Object(h.jsx)(f.b,{to:"/music",activeClassName:U.a.active,children:"Music"})}),Object(h.jsx)("div",{className:U.a.item,children:Object(h.jsx)(f.b,{to:"/settings",activeClassName:U.a.active,children:"Settings"})})]})},A=n(10),L=function(){return Object(h.jsx)("div",{children:"Music"})},T=function(){return Object(h.jsx)("div",{children:"Newsfeed"})},z=function(){return Object(h.jsx)("div",{children:"Settings"})},M=n(33),D="FOLLOW",B="UNFOLLOW",R="SET-USERS",G="SET_CURRENT_PAGE",q="SET_TOTAL_USERS_COUNT",X="TOGGLE_IS_FETCHING",W="TOGGLE_FOLLOWING_IN_PROGRESS",J={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},H=function(e){return{type:G,currentPage:e}},K=function(e){return{type:X,isFetching:e}},V=function(e,t){return{type:W,isFetching:e,userId:t}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e}))});case B:return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e}))});case R:return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case G:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case q:return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.totalCount});case X:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case W:return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(M.a)(e.followingInProgress),[t.userId]):Object(M.a)(e.followingInProgress.filter((function(e){return e!=t.userId})))});default:return e}},Q=n(128),Z=n(55),$=n.n(Z),ee=function(e){for(var t=Object(a.useState)(0),n=Object(Q.a)(t,2),r=n[0],s=n[1],c=Math.ceil(e.totalUsersCount/e.pageSize),i=[],o=1;o<=c;o++)i.push(o);return Object(h.jsxs)("div",{className:$.a.paginatorMain,children:[Object(h.jsx)("span",{children:Object(h.jsx)("button",{onClick:function(){return s(r-1)},disabled:r<1,children:"\u2190"})}),Object(h.jsx)("div",{className:$.a.pagesForm,children:i.slice(20*r,20*(r+1)).map((function(t){return Object(h.jsx)("div",{className:$.a.page+" "+(e.currentPage===t?$.a.selectedPage:""),onClick:function(){e.onPageChanged(t)},children:t})}))}),Object(h.jsx)("span",{children:Object(h.jsx)("button",{onClick:function(){return s(r+1)},disabled:r>Math.floor(c/20)-1,children:"\u2192"})})]})},te=n(43),ne=n(104),re=n(51),ae=n.n(re),se=["user"],ce=function(e){var t=e.user,n=Object(te.a)(e,se);return Object(h.jsxs)("div",{className:ae.a.userCard,children:[Object(h.jsxs)("span",{children:[Object(h.jsx)(f.b,{to:"/profile/"+t.id,children:Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:null!=t.photos.small?t.photos.small:ne.a,className:ae.a.userPhoto})})}),Object(h.jsx)("div",{children:t.followed?Object(h.jsx)("button",{disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.unfollow(t.id)},children:"Unfollow"}):Object(h.jsx)("button",{disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.follow(t.id)},children:"Follow"})})]}),Object(h.jsxs)("span",{children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{children:t.name}),Object(h.jsx)("div",{children:t.status})]}),Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{children:"user.location.country"}),Object(h.jsx)("div",{children:"user.location.city"})]})]})]},n.key)},ie=function(e){return Object(h.jsxs)("div",{className:ae.a.usersBlock,children:[Object(h.jsx)(ee,{currentPage:e.currentPage,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,onPageChanged:e.onPageChanged}),e.users.map((function(t){return Object(h.jsx)(ce,{user:t,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow},t.id)}))]})},oe=n(68),ue=n(9),le=function(e){return e.usersPage.users},de=function(e){return e.usersPage.pageSize},je=function(e){return e.usersPage.totalUsersCount},fe=function(e){return e.usersPage.currentPage},be=function(e){return e.usersPage.isFetching},pe=function(e){return e.usersPage.followingInProgress},he=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[this.props.isFetching?Object(h.jsx)(oe.a,{}):null,Object(h.jsx)(ie,{currentPage:this.props.currentPage,users:this.props.users,totalUsersCount:this.props.totalUsersCount,unfollow:this.props.unfollow,follow:this.props.follow,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),ge=Object(ue.d)(Object(O.b)((function(e){return{users:le(e),pageSize:de(e),totalUsersCount:je(e),currentPage:fe(e),isFetching:be(e),followingInProgress:pe(e)}}),{follow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(V(!0,e)),t.next=3,w.c.follow(e);case 3:0==t.sent.resultCode&&n({type:D,userID:e}),n(V(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(V(!0,e)),t.next=3,w.c.unfollow(e);case 3:0==t.sent.resultCode&&n({type:B,userID:e}),n(V(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},requestUsers:function(e,t){return function(){var n=Object(x.a)(v.a.mark((function n(r){var a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(K(!0)),r(H(e)),n.next=4,w.c.getUsers(e,t);case 4:a=n.sent,r(K(!1)),r((c=a.items,{type:R,users:c})),r((s=a.totalCount,{type:q,totalCount:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(he),Oe=n(126),me=n(127),ve=n(74),xe=n(66),we=n(52),_e=n.n(we),Pe=Object(me.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(h.jsxs)("form",{onSubmit:t,children:[Object(h.jsx)("div",{children:Object(h.jsx)(Oe.a,{placeholder:"Email",name:"email",component:xe.a,validate:[ve.b]})}),Object(h.jsx)("div",{children:Object(h.jsx)(Oe.a,{placeholder:"Password",name:"password",component:xe.a,validate:[ve.b],type:"password"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)(Oe.a,{type:"checkbox",name:"rememberMe",component:xe.a})," remember me"]}),n&&Object(h.jsx)("div",{className:_e.a.formSummaryError,children:n}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Login"})})]})})),ye=Object(O.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(x.a)(v.a.mark((function r(a){var s,c;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,w.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(S()):(c=s.data.messages.length>0?s.data.messages[0]:"some error",a(Object(_.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(h.jsx)(A.a,{to:"/profile"}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsx)(Pe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ce="INITIALIZED_SUCCESS",Se={initialized:!1},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ce:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},Ie=n(94),Ne=n(125),Ee={},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee;return e},Fe=n(132),Ae=n(129),Le=Object(ue.c)({profilePage:Ie.b,dialogsPage:Ne.a,sidebar:Ue,usersPage:Y,auth:k,form:Ae.a,app:ke}),Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.d,ze=Object(ue.e)(Le,Te(Object(ue.a)(Fe.a))),Me=s.a.lazy((function(){return n.e(3).then(n.bind(null,295))})),De=s.a.lazy((function(){return n.e(4).then(n.bind(null,296))})),Be=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(h.jsxs)("div",{className:"app-wrapper",children:[Object(h.jsx)(N,{}),Object(h.jsx)(F,{}),Object(h.jsxs)("div",{className:"app-wrapper-content",children:[Object(h.jsx)(A.b,{path:"/dialogs",render:function(){return Object(h.jsx)(s.a.Suspense,{fallback:Object(h.jsx)("div",{children:"Loading..."}),children:Object(h.jsx)(De,{})})}}),Object(h.jsx)(A.b,{path:"/profile/:userId?",render:function(){return Object(h.jsx)(s.a.Suspense,{fallback:Object(h.jsx)("div",{children:"Loading..."}),children:Object(h.jsx)(Me,{})})}}),Object(h.jsx)(A.b,{path:"/users",render:function(){return Object(h.jsx)(ge,{})}}),Object(h.jsx)(A.b,{path:"/login",render:function(){return Object(h.jsx)(ye,{})}}),Object(h.jsx)(A.b,{path:"/music",component:L}),Object(h.jsx)(A.b,{path:"/newsfeed",component:T}),Object(h.jsx)(A.b,{path:"/settings",component:z})]})]}):Object(h.jsx)(oe.a,{})}}]),n}(s.a.Component),Re=Object(O.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(S());Promise.all([t]).then((function(){e({type:Ce})}))}}})(Be),Ge=function(e){return Object(h.jsx)(f.a,{children:Object(h.jsx)(O.a,{store:ze,children:Object(h.jsx)(Re,{})})})};i.a.render(Object(h.jsx)(Ge,{}),document.getElementById("root")),r()},51:function(e,t,n){e.exports={userPhoto:"users_userPhoto__wp0An",usersBlock:"users_usersBlock__1bmd9",userCard:"users_userCard__2bX1Y"}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__13XR-",error:"FormsControls_error__3Q9Ui",formSummaryError:"FormsControls_formSummaryError__i8i8z"}},55:function(e,t,n){e.exports={page:"Paginator_page__3_25o",selectedPage:"Paginator_selectedPage__32RA9",pagesForm:"Paginator_pagesForm__xoPv7",paginatorMain:"Paginator_paginatorMain__1gXw5"}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return f}));var r=n(5),a=n(43),s=(n(0),n(52)),c=n.n(s),i=n(1),o=["input","meta","child"],u=["input","meta","child"],l=["input","meta","child"],d=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,o)),r=t.touched&&t.error;return Object(i.jsxs)("div",{className:c.a.formControl+" "+(r?c.a.error:""),children:[Object(i.jsx)("div",{children:n.children}),r&&Object(i.jsx)("span",{children:t.error})]})},j=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,u));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},68:function(e,t,n){"use strict";var r=n.p+"static/media/puff.385f97b7.svg",a=n(1);t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},89:function(e,t,n){e.exports={header:"header_header__3HJNp",loginBlock:"header_loginBlock__3lFCP"}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return g}));var r=n(11),a=n.n(r),s=n(20),c=n(33),i=n(5),o=n(21),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",j={posts:[{id:1,message:"I love you",likesCount:5},{id:2,message:"I hate you",likesCount:8},{id:3,message:"I fuck you",likesCount:13},{id:4,message:"I love you",likesCount:0},{id:5,message:"I hate you",likesCount:111}],profile:null,status:""},f=function(e){return{type:u,newPostBody:e}},b=function(e){return{type:d,status:e}},p=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n({type:l,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:6,message:t.newPostBody,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}}}},[[287,1,2]]]);
//# sourceMappingURL=main.672c9d9b.chunk.js.map