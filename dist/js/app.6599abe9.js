(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)s=i[d],a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},a={app:0},r=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0361":function(t,e,o){},"08f7":function(t,e,o){"use strict";var n=o("a77e"),a=o.n(n);a.a},"09d8":function(t,e,o){"use strict";var n=o("96f0"),a=o.n(n);a.a},1994:function(t,e,o){"use strict";var n=o("cc12"),a=o.n(n);a.a},"1c58":function(t,e,o){"use strict";var n=o("9dc1"),a=o.n(n);a.a},"29d7":function(t,e,o){"use strict";var n=o("c3f3"),a=o.n(n);a.a},"4b97":function(t,e,o){"use strict";var n=o("d8c8"),a=o.n(n);a.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Navigation"),o("Loader"),o("div",{staticClass:"app-container"},[o("router-view")],1)],1)},r=[],s=o("cebc"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navigation",class:{expanded:t.expanded}},[o("div",{staticClass:"navigation-back",on:{click:t.close}}),o("div",{staticClass:"navigation-container"},[o("button",{staticClass:"navigation-expand menu-btn",on:{click:t.toggle}},[o("font-awesome-icon",{staticClass:"menu-icon",attrs:{icon:["fas","bars"]}})],1),o("button",{staticClass:"menu-btn",on:{click:t.back}},[o("font-awesome-icon",{staticClass:"menu-icon",attrs:{icon:["far","arrow-alt-circle-left"]}})],1),o("button",{staticClass:"menu-btn",on:{click:function(e){t.goToBoards({name:"boards"})}}},[o("font-awesome-icon",{staticClass:"menu-icon",attrs:{icon:["far","star"]}})],1),t.profile.favoriteBoards.length?t._l(t.profile.favoriteBoards,function(e){return o("div",{key:e.board,staticClass:"menu-section"},[o("button",{staticClass:"menu-btn",class:{selected:t.isSelected(e)},on:{click:function(o){t.goToBoard({name:"board",query:{b:e.board}},!0)}}},[t._v("\n          "+t._s(e.board)+"\n        ")]),t._l(t.getOpenBoardThreads(e),function(n){return o("button",{key:n.no,staticClass:"menu-btn block",class:{selected:t.isSelectedThread(n)},on:{click:function(o){t.goToThread({name:"thread",query:{b:e.board,t:n.no}})}}},[t._v("\n          "+t._s(n.no)+"\n          "),o("button",{staticClass:"menu-btn close",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.closeThread(n.no)}}},[o("font-awesome-icon",{staticClass:"menu-icon sm",attrs:{icon:["fas","times"]}})],1)])})],2)}):t._e()],2)])},c=[],l=o("2f62"),u={name:"navigation",data:function(){return{expanded:!1}},computed:Object(s["a"])({},Object(l["b"])({profile:function(t){return t.profile}})),methods:{toggle:function(){this.expanded=!this.expanded},expand:function(){this.expanded=!0},close:function(){this.expanded=!1},closeThread:function(t){this.profile.currentThread&&this.profile.currentThread.no===t&&this.goToBoard({name:"board",query:{b:this.profile.currentBoard.board}}),this.$store.commit("REMOVE_OPEN_THREAD",t)},back:function(){this.close(),this.$router.go(-1)},goToBoards:function(t){this.close(),this.$router.push(t)},goToBoard:function(t,e){this.close(),this.$store.commit("SET_CURRENT_BOARD",null),this.$store.commit("SET_CURRENT_THREAD",null),this.$router.push(t)},goToThread:function(t){this.close(),this.$store.commit("SET_CURRENT_BOARD",null),this.$store.commit("SET_CURRENT_THREAD",null),this.$router.push(t)},isSelected:function(t){return!!this.profile.currentBoard&&t.board===this.profile.currentBoard.board},isSelectedThread:function(t){return!!this.profile.currentThread&&t.no===this.profile.currentThread.no},getOpenBoardThreads:function(t){return this.profile.openThreads.filter(function(e){return e.board===t.board})}}},d=u,p=(o("08f7"),o("2877")),f=Object(p["a"])(d,i,c,!1,null,"48094fd4",null),b=f.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.loading?o("div",{staticClass:"loader"},[t._m(0)]):t._e()},h=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"loader-content"},[o("div",{staticClass:"sk-folding-cube"},[o("div",{staticClass:"sk-cube1 sk-cube"}),o("div",{staticClass:"sk-cube2 sk-cube"}),o("div",{staticClass:"sk-cube4 sk-cube"}),o("div",{staticClass:"sk-cube3 sk-cube"})])])}],_={name:"loader",computed:Object(s["a"])({},Object(l["b"])({loading:function(t){return t.loading}}))},v=_,T=(o("29d7"),Object(p["a"])(v,m,h,!1,null,"6c600ae4",null)),g=T.exports,O={name:"app",mounted:function(){this.$store.dispatch("GET_PROFILE"),this.$store.dispatch("GET_BOARDS")},computed:Object(s["a"])({},Object(l["b"])({profile:function(t){return t.profile}}),{key:function(){var t=this.profile.currentBoard?this.profile.currentBoard.board:"",e=this.profile.currentThread?this.profile.currentThread.no:"";return"".concat(t).concat(e)}}),components:{Navigation:b,Loader:g}},E=O,C=(o("5c0b"),Object(p["a"])(E,a,r,!1,null,null,null)),R=C.exports,y=(o("6b54"),o("8c4f")),S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"boards"},[o("div",{staticClass:"favorite-boards board-list"},[o("div",{staticClass:"board-list-header"},[t._v("Boards")]),o("div",{staticClass:"board-list-actions"},[o("multiselect",{attrs:{options:t.boards,multiple:!0,"close-on-select":!1,"clear-on-select":!1,"preserve-search":!0,taggable:!0,placeholder:"Pick some",label:"title","track-by":"board","preselect-first":!1},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.values,a=(e.search,e.isOpen);return[n.length&&!a?o("span",{staticClass:"multiselect__single"},[t._v("\n            "+t._s(n.length)+" options selected\n          ")]):t._e()]}}]),model:{value:t.profile.favoriteBoards,callback:function(e){t.$set(t.profile,"favoriteBoards",e)},expression:"profile.favoriteBoards"}})],1),o("div",{staticClass:"board-list-items"},t._l(t.profile.favoriteBoards,function(e,n){return o("div",{key:n,staticClass:"board"},[o("router-link",{staticClass:"board-link",attrs:{to:{name:"board",query:{b:e.board}}}},[t._v("\n          "+t._s(e.board)+" "+t._s(e.title)+"\n        ")])],1)}),0)])])},B=[],j={name:"boards",computed:Object(s["a"])({},Object(l["b"])({profile:function(t){return t.profile},boards:function(t){return t.boards}}))},A=j,x=(o("67183"),Object(p["a"])(A,S,B,!1,null,null,null)),D=x.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"board"},[t.profile.currentBoard?o("div",{staticClass:"thread-list"},t._l(t.profile.currentBoard.threads,function(e,n){return o("Thread",{key:n,attrs:{board:t.board,thread:e}})}),1):t._e()])},w=[],N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"thread"},[o("Post",{attrs:{board:t.board,post:t.thread.posts[0]}})],1)},$=[],P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post",attrs:{id:"p"+t.post.no}},[o("PostHeader",{attrs:{board:t.board,post:t.post}}),o("PostContent",{attrs:{board:t.board,post:t.post,isReply:t.isReply}}),o("PostFooter",{attrs:{board:t.board,post:t.post,isReply:t.isReply}})],1)},I=[],q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post-header"},[o("div",{staticClass:"post-header-left"},[t.post.country?o("img",{staticClass:"post-country",attrs:{src:"https://s.4cdn.org/image/country/"+t.post.country.toLowerCase()+".gif",title:t.post.country_name}}):t._e(),t.post.name?o("span",{staticClass:"chip"},[t._v(t._s(t.post.name))]):t._e(),t.post.id?o("span",{staticClass:"chip"},[t._v(t._s(t.post.id))]):t._e(),t.post.no?o("span",{staticClass:"chip"},[t._v(t._s(t.post.no))]):t._e()]),o("timeago",{staticClass:"timestamp",attrs:{datetime:new Date(1e3*t.post.time),"auto-update":60}})],1)},H=[],L={name:"post-header",props:{board:{type:String,required:!0},post:{type:Object,required:!0}}},G=L,U=(o("1c58"),Object(p["a"])(G,q,H,!1,null,"9de9de64",null)),M=U.exports,F=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post-content",class:{reply:t.isReply}},[o("div",{staticClass:"post-thumbnail-container"},[t.post.tim?o("img",{staticClass:"post-thumbnail",attrs:{src:"https://i.4cdn.org/"+t.board+"/"+t.post.tim+"s.jpg",width:t.post.tn_w,height:t.post.tn_h,title:""+t.post.filename+t.post.ext},on:{click:t.openImage}}):t._e()]),t.post.sub||t.post.com?o("div",{staticClass:"post-comment-container",class:{expand:t.expandComment},on:{mouseenter:t.enter,mouseleave:t.leave}},[t.post.sub?o("div",{staticClass:"post-sub"},[t._v("\n      "+t._s(t.post.sub)+"\n    ")]):t._e(),t.post.com?o("div",{staticClass:"post-comment",domProps:{innerHTML:t._s(t.post.com)}}):t._e()]):t._e(),o("Modal",{attrs:{open:t.imageOpen,handleClose:t.handleClose}},[".webm"===t.post.ext?o("video",{attrs:{width:t.post.w,controls:""}},[o("source",{attrs:{src:"https://i.4cdn.org/"+t.board+"/"+t.post.tim+t.post.ext,type:"video/webm"}}),t._v("\n      Your browser does not support HTML5 video.\n    ")]):o("img",{attrs:{src:"https://i.4cdn.org/"+t.board+"/"+t.post.tim+t.post.ext}})])],1)},V=[],J=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.open?"modal open":"modal"},[o("div",{staticClass:"modal-content"},[t._t("default")],2),o("div",{staticClass:"modal-back",on:{click:t.handleClose}})])},z=[],Y={name:"Modal",props:{open:Boolean,handleClose:Function}},K=Y,Q=(o("1994"),Object(p["a"])(K,J,z,!1,null,"679678b6",null)),W=Q.exports,X={name:"post-content",data:function(){return{imageOpen:!1,expandComment:!1,leftComment:!1}},props:{board:{type:String,required:!0},post:{type:Object,required:!0},isReply:{type:Boolean,default:!1}},computed:Object(s["a"])({},Object(l["b"])({profile:function(t){return t.profile}})),methods:{openImage:function(){this.imageOpen=!0},handleClose:function(){this.imageOpen=!1},enter:function(){var t=this;setTimeout(function(){t.leftComment?(t.expandComment=!1,t.leftComment=!1):t.expandComment=!0},1e3)},leave:function(){var t=this;setTimeout(function(){t.expandComment?(t.expandComment=!1,t.leftComment=!1):t.leftComment=!0},200)}},components:{Modal:W}},Z=X,tt=(o("7ec3"),Object(p["a"])(Z,F,V,!1,null,"8a4f1a82",null)),et=tt.exports,ot=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post-footer"},[t.isReply?t._e():[o("div",{staticClass:"post-footer-left"},[o("span",{staticClass:"chip"},[t._v(t._s(t.post.replies))]),o("span",{staticClass:"chip"},[t._v(t._s(t.post.images))])]),o("button",{staticClass:"btn",on:{click:t.goToThread}},[t._v("View Thread")])]],2)},nt=[],at={name:"post-footer",props:{board:{type:String,required:!0},post:{type:Object,required:!0},isReply:{type:Boolean,default:!1}},methods:{goToThread:function(){this.$router.push({name:"thread",query:{b:this.board,t:this.post.no}})}}},rt=at,st=(o("bcd8"),Object(p["a"])(rt,ot,nt,!1,null,"036a55ee",null)),it=st.exports,ct={name:"post",props:{board:{type:String,required:!0},post:{type:Object,required:!0},isReply:{type:Boolean,default:!1}},computed:Object(s["a"])({},Object(l["b"])({profile:function(t){return t.profile}})),components:{PostHeader:M,PostContent:et,PostFooter:it}},lt=ct,ut=(o("631c"),Object(p["a"])(lt,P,I,!1,null,"011b975f",null)),dt=ut.exports,pt={name:"thread",props:{board:{type:String,required:!0},thread:{type:Object,required:!0}},computed:Object(s["a"])({},Object(l["b"])({profile:function(t){return t.profile}})),components:{Post:dt}},ft=pt,bt=(o("4b97"),Object(p["a"])(ft,N,$,!1,null,"77a0c026",null)),mt=bt.exports,ht={name:"board",props:{board:{type:String,required:!0}},computed:Object(s["a"])({},Object(l["b"])({profile:function(t){return t.profile}})),mounted:function(){},methods:{getBoard:function(){this.$store.dispatch("GET_BOARD",{board:this.board})}},watch:{board:{handler:function(t){this.getBoard()},immediate:!0}},components:{Thread:mt}},_t=ht,vt=(o("09d8"),Object(p["a"])(_t,k,w,!1,null,"b9d155e4",null)),Tt=vt.exports,gt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"thread"},[t.profile.currentThread?o("div",{staticClass:"post-list"},t._l(t.profile.currentThread.posts,function(e,n){return o("Post",{key:n,attrs:{board:t.board,post:e,isReply:!0}})}),1):t._e()])},Ot=[],Et={name:"thread",props:{board:{type:String,required:!0},threadNumber:{type:String,required:!0}},computed:Object(s["a"])({},Object(l["b"])({profile:function(t){return t.profile}})),mounted:function(){this.getThread()},methods:{getThread:function(){this.$store.commit("SET_CURRENT_BOARD",{board:this.board,threads:[]}),this.$store.dispatch("GET_THREAD",{board:this.board,threadNumber:this.threadNumber})}},watch:{threadNumber:{handler:function(t){this.getThread()},immediate:!0}},components:{Post:dt}},Ct=Et,Rt=(o("5eb5"),Object(p["a"])(Ct,gt,Ot,!1,null,"00404fe8",null)),yt=Rt.exports;n["a"].use(y["a"]);var St=new y["a"]({mode:"history",base:"/",routes:[{path:"/",name:"boards",component:D},{path:"/board",name:"board",component:Tt,props:function(t){return{board:t.query.b}}},{path:"/thread",name:"thread",component:yt,props:function(t){return{board:t.query.b,threadNumber:t.query.t.toString()}}}],scrollBehavior:function(t,e,o){return{x:0,y:0}}}),Bt={loading:!1,boards:[],profile:{favoriteBoards:[],openThreads:[],currentBoard:null,currentThread:null}},jt=(o("20d6"),{SET_LOADING:function(t,e){t.loading=e},SET_PROFILE:function(t,e){t.profile=e},SET_FAVORITE_BOARDS:function(t,e){t.profile.favoriteBoards=e},SET_BOARDS:function(t,e){t.boards=e},SET_CURRENT_BOARD:function(t,e){t.profile.currentBoard=e},SET_CURRENT_THREAD:function(t,e){t.profile.currentThread=e},ADD_OPEN_THREAD:function(t,e){var o=t.profile.openThreads.findIndex(function(t){return t.no===e.no});o<0&&t.profile.openThreads.push(e)},REMOVE_OPEN_THREAD:function(t,e){var o=t.profile.openThreads.findIndex(function(t){return t.no===e});t.profile.openThreads.splice(o,1)}}),At=o("795b"),xt=o.n(At),Dt=o("f499"),kt=o.n(Dt),wt=o("bc3a"),Nt=o.n(wt),$t={BASE:"https://anon-api.herokuapp.com/api/v1/",ROUTES:{BOARD:"board",THREAD:"thread"}},Pt={GET_PROFILE:function(t){var e=t.commit,o=(t.state,JSON.parse(localStorage.getItem("anon_profile")));o&&e("SET_PROFILE",o)},SET_FAVORITE_BOARDS:function(t,e){var o=t.commit,n=t.state;o("SET_FAVORITE_BOARDS",e),localStorage.setItem("anon_profile",kt()(n.profile))},GET_BOARDS:function(t){var e=t.commit;t.state;return e("SET_LOADING",!0),new xt.a(function(t,o){Nt.a.get("".concat($t.BASE).concat($t.ROUTES.BOARD)).then(function(o){console.log(o),e("SET_BOARDS",o.data.boards),t(o.data.boards)}).catch(function(t){console.log(t),o(t)}).finally(function(){e("SET_LOADING",!1)})})},GET_BOARD:function(t,e){var o=t.commit,n=t.state;return o("SET_LOADING",!0),new xt.a(function(t,a){var r=e.board;Nt.a.get("".concat($t.BASE).concat($t.ROUTES.BOARD,"?board=").concat(r)).then(function(t){o("SET_CURRENT_BOARD",{board:r,threads:t.data.threads}),localStorage.setItem("anon_profile",kt()(n.profile))}).catch(function(t){console.log(t),a(t)}).finally(function(){o("SET_LOADING",!1)})})},GET_THREAD:function(t,e){var o=t.commit,n=t.state;return o("SET_LOADING",!0),new xt.a(function(t,a){var r=e.board,s=e.threadNumber;Nt.a.get("".concat($t.BASE).concat($t.ROUTES.THREAD,"?board=").concat(r,"&threadNumber=").concat(s)).then(function(t){var e={board:r,no:s,posts:t.data.posts},a={board:r,no:s};o("SET_CURRENT_THREAD",e),o("ADD_OPEN_THREAD",a),localStorage.setItem("anon_profile",kt()(n.profile))}).catch(function(t){console.log(t),a(t)}).finally(function(){o("SET_LOADING",!1)})})}};n["a"].use(l["a"]);var It=new l["a"].Store({state:Bt,mutations:jt,actions:Pt}),qt=o("8682"),Ht=o("8e5f"),Lt=o.n(Ht),Gt=o("ecee"),Ut=o("c074"),Mt=o("f2d1"),Ft=o("b702"),Vt=o("ad3d");n["a"].use(qt["a"],{name:"Timeago",locale:"en",locales:{"zh-CN":o("f2d3"),ja:o("b805")}}),n["a"].component("multiselect",Lt.a),Gt["c"].add(Ut["a"]),Gt["c"].add(Mt["a"]),Gt["c"].add(Ft["a"]),n["a"].component("font-awesome-icon",Vt["a"]),n["a"].config.productionTip=!1,new n["a"]({router:St,store:It,render:function(t){return t(R)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var n=o("5e27"),a=o.n(n);a.a},"5e27":function(t,e,o){},"5eb5":function(t,e,o){"use strict";var n=o("a97a"),a=o.n(n);a.a},"631c":function(t,e,o){"use strict";var n=o("f75f"),a=o.n(n);a.a},67183:function(t,e,o){"use strict";var n=o("6d1e"),a=o.n(n);a.a},"6d1e":function(t,e,o){},"7ec3":function(t,e,o){"use strict";var n=o("ecbc"),a=o.n(n);a.a},"96f0":function(t,e,o){},"9dc1":function(t,e,o){},a77e:function(t,e,o){},a97a:function(t,e,o){},bcd8:function(t,e,o){"use strict";var n=o("0361"),a=o.n(n);a.a},c3f3:function(t,e,o){},cc12:function(t,e,o){},d8c8:function(t,e,o){},ecbc:function(t,e,o){},f75f:function(t,e,o){}});
//# sourceMappingURL=app.6599abe9.js.map