webpackJsonp([21],{0:function(t,e){},"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},1:function(t,e){},"2REM":function(t,e,n){var r=n("LEUR");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("0259c26d",r,!1,{sourceMap:!1})},"4Atj":function(t,e,n){var r={"./auth.js":"4K/y"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="4Atj"},"4K/y":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("lbHh"),o=n.n(r);e.default=function(t){t.error,t.redirect;console.log(o.a.get("token"))}},"6qQi":function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},AOsL:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"mutations",function(){return o});var r=n("lbHh"),o=(n.n(r),{SET_USER:function(t,e){t.authUser=e},SET_TOKEN:function(t,e){t.TOKEN=e},GET_FILMSLIST:function(t,e){t.filmList=e},ADD_SINGLE_SEAT:function(t,e){1==e.selected?t.selectedSingleSeatList.push(e):t.selectedSingleSeatList.forEach(function(n,r){n.row==e.row&&n.column==e.column&&t.selectedSingleSeatList.splice(r,1)})},ADD_COUPLE_SEAT:function(t,e){1==e.coupleSelected?e.seatArr&&e.seatArr!=[]&&(t.selectedCoupleSeatList=t.selectedCoupleSeatList.concat(e.seatArr)):e.seatArr.forEach(function(e,n){t.selectedCoupleSeatList.forEach(function(n,r){e.row==n.row&&e.column==n.column&&t.selectedCoupleSeatList.splice(r,1)})})},DELETE_SINGLE_SEAT:function(t,e){t.selectedSingleSeatList.forEach(function(n,r){n.row==e.row&&n.column==e.column&&t.selectedSingleSeatList.splice(r,1)}),t.seatInfo.seatCharts.single.forEach(function(t,n){t.forEach(function(t,r){e.row==n&&e.column==r&&(t.selected=!1)})})},DELETE_COUPLE_SEAT:function(t,e){e.seatArr.forEach(function(e,n){t.selectedCoupleSeatList.forEach(function(n,r){e.row==n.row&&e.column==n.column&&t.selectedCoupleSeatList.splice(r,1)}),t.seatInfo.seatCharts.couple.forEach(function(n,r){var o=e.row-t.seatInfo.seatCharts.single.length;n.forEach(function(t,n){var a=e.column;o==r&&a==n&&(t.selected=!1)})})})}});e.default=o},F88d:function(t,e,n){"use strict";var r=n("6qQi"),o=n("P+aQ"),a=!1;var i=function(t){a||n("kTZ7")},u=n("VU/8")(r.a,o.a,!1,i,null,null);u.options.__file=".nuxt/components/nuxt-loading.vue",e.a=u.exports},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,a=e.data,i=e.props;a.nuxtChild=!0;for(var u=n,s=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;a.nuxtChildDepth=f;var l=s[f]||c,d={};r.forEach(function(t){void 0!==l[t]&&(d[t]=l[t])});var p={};o.forEach(function(t){"function"==typeof l[t]&&(p[t]=l[t].bind(u))});var h=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(u,t)};var m=[t("router-view",a)];return void 0!==i.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:d,on:p},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return b});var r=n("woOf"),o=n.n(r),a=n("BO1k"),i=n.n(a),u=n("/5sW"),s=n("NYxO");u.default.use(s.default);var c=n("QA5y"),f=c.keys(),l={},d=void 0;if(f.forEach(function(t){-1!==t.indexOf("./index.")&&(d=t)}),d&&(l=_(d)),"function"!=typeof l){l.modules||(l.modules={});var p=!0,h=!1,m=void 0;try{for(var x,v=i()(f);!(p=(x=v.next()).done);p=!0){var y=x.value,g=y.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==g){var w=g.split(/\//);(t=C(l,w))[g=w.pop()]=_(y),t[g].namespaced=!0}}}catch(t){h=!0,m=t}finally{try{!p&&v.return&&v.return()}finally{if(h)throw m}}}var b=l instanceof Function?l:function(){return new s.default.Store(o()({strict:!1},l,{state:l.state instanceof Function?l.state():{}}))};function _(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function C(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},C(t.modules[n],e)}},Jk2X:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'dd,dl,dt,h1,h2,h3,h4,h5,h6,li,p,ul{margin:0;padding:0}*{font-family:Microsoft YaHei}a{text-decoration:none}button,img,input{border:none;outline:none}li{list-style:none}address,cite,dfn,em,i,var{font-style:italic}.clearfix:after,.clearfix:before{content:" ";display:table}',""])},KX8D:function(t,e,n){"use strict";var r=n("nFqq"),o=n.n(r),a=n("fBpl"),i=n.n(a);e.a={headers:{post:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},"X-Requested-With":"XMLHttpRequest"},timeout:1e4,withCredentials:!0,responseType:"json",xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",httpAgent:new o.a.Agent({keepAlive:!0}),httpsAgent:new i.a.Agent({keepAlive:!0})}},KZJh:function(t,e,n){var r=n("Jk2X");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("17e32870",r,!1,{sourceMap:!1})},LEUR:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".__nuxt-error-page{padding:16px;padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:24px;font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},LV3i:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},QA5y:function(t,e,n){var r={"./actions.js":"QlVn","./getters.js":"eGmw","./index.js":"vdRI","./mutations.js":"AOsL","./state.js":"e3SH"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="QA5y"},QhKw:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?e("p",{staticClass:"description"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};e.a=o},QlVn:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"actions",function(){return o});var r=n("YFWx"),o={nuxtServerInit:function(t,e){t.commit,e.req},getFilms:function(t,e){var n=t.commit;Object(r.b)("//www.meetingshop.cn/film/getFilms","get",e).then(function(t){t&&0==t.status?n("GET_FILMSLIST",t):t.msg&&alert(t.msg)},function(t){console.log(t)})},addToSingleSeatList:function(t,e){(0,t.commit)("ADD_SINGLE_SEAT",e)},addToCoupleSeatList:function(t,e){(0,t.commit)("ADD_COUPLE_SEAT",e)},deleteSingleSeat:function(t,e){(0,t.commit)("DELETE_SINGLE_SEAT",e)},deleteCoupleSeat:function(t,e){(0,t.commit)("DELETE_COUPLE_SEAT",e)}};e.default=o},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,a,i=n("pFYg"),u=n.n(i),s=n("//Fk"),c=n.n(s),f=n("Xxa5"),l=n.n(f),d=n("mvHQ"),p=n.n(d),h=n("exGp"),m=n.n(h),x=n("fZjL"),v=n.n(x),y=n("woOf"),g=n.n(y),w=n("/5sW"),b=n("unZF"),_=n("qcny"),C=n("YLfZ"),E=(r=m()(l.a.mark(function t(e,n,r){var o,a,i=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!$.nuxt.err||n.path!==e.path,this._queryChanged=p()(e.query)!==p()(n.query),this._diffQuery=this._queryChanged?Object(C.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(C.k)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])})),function(t,e,n){return r.apply(this,arguments)}),k=(o=m()(l.a.mark(function t(e,n,r){var o,a,i,u,s,f,d,p,h=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){if(n.path===t.path&&h.$loading.finish&&h.$loading.finish(),n.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!o){o=!0;var e=[];j=Object(C.e)(n,e).map(function(t,r){return Object(C.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(C.m)($,{route:e,from:n,next:a.bind(this)});case 6:if(this._dateLastError=$.nuxt.dateErr,this._hadError=!!$.nuxt.err,i=[],(u=Object(C.e)(e,i)).length){t.next=24;break}return t.next=13,F.call(this,u,$.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof _.a.layout?_.a.layout($.context):_.a.layout);case 17:return s=t.sent,t.next=20,F.call(this,u,$.context,s);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return $.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return u.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(A(u,e,n)),t.prev=26,t.next=29,F.call(this,u,$.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!$.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(f=u[0].options.layout)&&(f=f($.context)),t.next=37,this.loadLayout(f);case 37:return f=t.sent,t.next=40,F.call(this,u,$.context,f);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!$.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(d=!0,u.forEach(function(t){d&&"function"==typeof t.options.validate&&(d=t.options.validate({params:e.params||{},query:e.query||{},store:L}))}),d){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,c.a.all(u.map(function(t,n){if(t._path=Object(C.b)(e.matched[i[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==j[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return c.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,u=!!t.options.fetch,s=a&&u?30:45;if(a){var f=Object(C.j)(t.options.asyncData,$.context).then(function(e){Object(C.a)(t,e),h.$loading.increase&&h.$loading.increase(s)});o.push(f)}if(u){var l=t.options.fetch($.context);l&&(l instanceof c.a||"function"==typeof l.then)||(l=c.a.resolve(l)),l.then(function(t){h.$loading.increase&&h.$loading.increase(s)}),o.push(l)}return c.a.all(o)}));case 51:o||(this.$loading.finish&&this.$loading.finish(),j=u.map(function(t,n){return Object(C.b)(e.matched[i[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),j=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(p=_.a.layout)&&(p=p($.context)),t.next=63,this.loadLayout(p);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])})),function(t,e,n){return o.apply(this,arguments)}),S=(a=m()(l.a.mark(function t(e){var n,r,o,a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return $=e.app,T=e.router,L=e.store,t.next=5,c.a.all(q(T));case 5:return n=t.sent,r=new w.default($),o=O.layout||"default",t.next=10,r.loadLayout(o);case 10:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),w.default.nextTick(function(){I(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(A(n,T.currentRoute)),j=T.currentRoute.matched.map(function(t){return Object(C.b)(t.path)(T.currentRoute.params)})),r.$loading={},O.error&&r.error(O.error),T.beforeEach(E.bind(r)),T.beforeEach(k.bind(r)),T.afterEach(N),T.afterEach(D.bind(r)),!O.serverRendered){t.next=23;break}return a(),t.abrupt("return");case 23:k.call(r,T.currentRoute,T.currentRoute,function(t){if(!t)return N(T.currentRoute,T.currentRoute),M.call(r,T.currentRoute),void a();T.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 24:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)}),j=[],$=void 0,T=void 0,L=void 0,O=window.__NUXT__||{};function A(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=g()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);v()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function R(t,e){return O.serverRendered&&e&&Object(C.a)(t,e),t._Ctor=t,t}function q(t){var e,n=this,r=Object(C.d)(t.options.base,t.options.mode);return Object(C.c)(t.match(r),(e=m()(l.a.mark(function t(e,r,o,a,i){var u;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return u=R(Object(C.l)(e),O.data?O.data[i]:null),o.components[a]=u,t.abrupt("return",u);case 7:case"end":return t.stop()}},t,n)})),function(t,n,r,o,a){return e.apply(this,arguments)}))}function F(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof b.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),b.a[t])}),!a)return Object(C.i)(o,e)}function N(t,e){Object(C.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":u()(t))||t.options||((t=w.default.extend(t))._Ctor=t,n.components[r]=t),t})}function M(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?_.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e($.context)),this.setLayout(e)}function D(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||w.default.nextTick(function(){Object(C.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&j[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)w.default.set(t.$data,r,n[r])}}),M.call(n,t)})}function I(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),T.afterEach(function(e,n){w.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(_.b)().then(S).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YFWx:function(t,e,n){"use strict";e.b=function(t,e,n){return r={url:t,method:e,params:n},new o.a(function(t,e){var n=i.a.create();n.interceptors.request.use(function(t){var e=s.a.get("token");return e&&(t.headers.Authorization="Bearer "+e),"post"===t.method&&(t.data=f.a.stringify(t.data)),t},function(t){return o.a.reject(t)}),n.interceptors.response.use(function(t){return t.data},function(t){return o.a.reject(t)}),n(r).then(function(e){t(e)}).catch(function(t){e(t)})});var r};var r=n("//Fk"),o=n.n(r),a=n("mtWM"),i=n.n(a),u=n("lbHh"),s=n.n(u),c=n("mw3O"),f=n.n(c)},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||y;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),x()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=g,e.e=w,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=b,e.k=_,n.d(e,"h",function(){return k}),n.d(e,"m",function(){return S}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return d.a.resolve();return j(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=j,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},u=r||{},s=u.pretty?T:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var l,d=i[f.name];if(null==d){if(f.optional){f.partial&&(a+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(d)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+o()(d)+"`");if(0===d.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var p=0;p<d.length;p++){if(l=s(d[p]),!e[c].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+o()(l)+"`");a+=(0===p?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(d).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(d),!e[c].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');a+=f.prefix+l}}else a+=f}return a}}(function(t,e){var n,r=[],o=0,a=0,i="",u=e&&e.delimiter||"/";for(;null!=(n=$.exec(t));){var s=n[0],c=n[1],f=n.index;if(i+=t.slice(a,f),a=f+s.length,c)i+=c[1];else{var l=t[a],d=n[2],p=n[3],h=n[4],m=n[5],x=n[6],v=n[7];i&&(r.push(i),i="");var y=null!=d&&null!=l&&l!==d,g="+"===x||"*"===x,w="?"===x||"*"===x,b=n[2]||u,_=h||m;r.push({name:p||o++,prefix:d||"",delimiter:b,optional:w,repeat:g,partial:y,asterisk:!!v,pattern:_?O(_):v?".*":"[^"+L(b)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=x()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n};var r=n("mvHQ"),o=n.n(r),a=n("pFYg"),i=n.n(a),u=n("Xxa5"),s=n.n(u),c=n("exGp"),f=n.n(c),l=n("//Fk"),d=n.n(l),p=n("fZjL"),h=n.n(p),m=n("Dd8w"),x=n.n(m),v=n("/5sW"),y=function(){return{}};function g(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=v.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function b(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function _(t){var e,n=this;return d.a.all(b(t,(e=f()(s.a.mark(function t(e,r,o,a){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",o.components[a]=g(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,o){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var C,E,k=(C=f()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",x()({},e,{meta:w(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return C.apply(this,arguments)}),S=(E=f()(s.a.mark(function t(e,n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!0,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={baseUrl:"//www.meetingshop.cn"},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},o=void 0===(n=t)?"undefined":i()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=A(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,k(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,k(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)})),function(t,e){return E.apply(this,arguments)});function j(t,e){var n=void 0;return(n=2===t.length?new d.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof d.a||"function"==typeof n.then)||(n=d.a.resolve(n)),n}var $=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function T(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function L(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function O(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function A(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(n?n+"://":"//")+a.shift(),u=a.filter(Boolean).join("/"),s=void 0;return 2===(a=u.split("#")).length&&(u=a[0],s=a[1]),i+=u?"/"+u:"",e&&"{}"!==o()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=s?"#"+s:""}},ct3O:function(t,e,n){"use strict";var r=n("LV3i"),o=n("QhKw"),a=!1;var i=function(t){a||n("2REM")},u=n("VU/8")(r.a,o.a,!1,i,null,null);u.options.__file=".nuxt/components/nuxt-error.vue",e.a=u.exports},ct5c:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])},e3SH:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return r});var r=function(){return{authUser:null,TOKEN:"",filmList:[],seatInfo:{price:60,quantity:1,seatCharts:{limit:5,single:[],couple:[]}},selectedSingleSeatList:[],selectedCoupleSeatList:[],showDialogFlag:!1,xSeatList:[]}};e.default=r},eGmw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"getters",function(){return r});var r={userInfo:function(t){return t.userInfo},TOKEN:function(t){return t.TOKEN},selectedSingleSeatList:function(t){return t.selectedSingleSeatList},selectedCoupleSeatList:function(t){return t.selectedCoupleSeatList},totalPrice:function(t){var e=0,n=0;return t.selectedSingleSeatList.forEach(function(n,r){e=t.ticketPrice*(r+1)}),t.selectedCoupleSeatList.forEach(function(e,r){n=t.ticketPrice*(r+1)}),e+n}};e.default=r},kTZ7:function(t,e,n){var r=n("ct5c");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("80fc28bc",r,!1,{sourceMap:!1})},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:S,routes:[{path:"/login",component:u,name:"login"},{path:"/xseats",component:s,name:"xseats",children:[{path:":id?",component:c,name:"xseats-id"}]},{path:"/filmItem",component:f,name:"filmItem",children:[{path:":id?",component:l,name:"filmItem-id"}]},{path:"/profile",component:d,name:"profile"},{path:"/films",component:p,name:"films"},{path:"/cinema",component:h,name:"cinema",children:[{path:":id?",component:m,name:"cinema-id"}]},{path:"/board",component:x,name:"board"},{path:"/query",component:v,name:"query",children:[{path:":kw?",component:y,name:"query-kw"}]},{path:"/myorder",component:g,name:"myorder"},{path:"/register",component:w,name:"register"},{path:"/news",component:b,name:"news"},{path:"/order",component:_,name:"order",children:[{path:":id?",component:C,name:"order-id"}]},{path:"/cinemas",component:E,name:"cinemas"},{path:"/",component:k,name:"index"}],fallback:!1})};var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("/ocq");a.default.use(i.default);var u=function(){return n.e(13).then(n.bind(null,"bIR0")).then(function(t){return t.default||t})},s=function(){return n.e(2).then(n.bind(null,"ezZc")).then(function(t){return t.default||t})},c=function(){return n.e(15).then(n.bind(null,"6fQ5")).then(function(t){return t.default||t})},f=function(){return n.e(1).then(n.bind(null,"YEwy")).then(function(t){return t.default||t})},l=function(){return n.e(18).then(n.bind(null,"z3jG")).then(function(t){return t.default||t})},d=function(){return n.e(11).then(n.bind(null,"7PhA")).then(function(t){return t.default||t})},p=function(){return n.e(5).then(n.bind(null,"H/ns")).then(function(t){return t.default||t})},h=function(){return n.e(4).then(n.bind(null,"351N")).then(function(t){return t.default||t})},m=function(){return n.e(19).then(n.bind(null,"w5Ng")).then(function(t){return t.default||t})},x=function(){return n.e(14).then(n.bind(null,"jueO")).then(function(t){return t.default||t})},v=function(){return n.e(8).then(n.bind(null,"df6T")).then(function(t){return t.default||t})},y=function(){return n.e(16).then(n.bind(null,"uSo1")).then(function(t){return t.default||t})},g=function(){return n.e(9).then(n.bind(null,"UX8Y")).then(function(t){return t.default||t})},w=function(){return n.e(10).then(n.bind(null,"Y5Gu")).then(function(t){return t.default||t})},b=function(){return n.e(12).then(n.bind(null,"ZSW0")).then(function(t){return t.default||t})},_=function(){return n.e(7).then(n.bind(null,"YVbR")).then(function(t){return t.default||t})},C=function(){return n.e(17).then(n.bind(null,"Xjvx")).then(function(t){return t.default||t})},E=function(){return n.e(6).then(n.bind(null,"vE0d")).then(function(t){return t.default||t})},k=function(){return n.e(0).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var S=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new o.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return O});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),u=n.n(i),s=n("woOf"),c=n.n(s),f=n("Dd8w"),l=n.n(f),d=n("exGp"),p=n.n(d),h=n("MU8w"),m=(n.n(h),n("/5sW")),x=n("p3jY"),v=n.n(x),y=n("mtxM"),g=n("0F0d"),w=n("HBB+"),b=n("WRRc"),_=n("ct3O"),C=n("Hot+"),E=n("yTq1"),k=n("YLfZ"),S=n("J2Ti"),j=n("KX8D"),$=n("YFWx"),T=n("zZ5Z");n.d(e,"a",function(){return _.a});var L,O=(L=p()(o.a.mark(function t(e){var n,r,a,i,s,f,d;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(y.a)(e),(r=Object(S.a)(e)).$router=n,a=l()({router:n,store:r,nuxt:{defaultTransition:A,transitions:[A],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},A,{name:t}):c()({},A,t):A}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,a.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},E.a),r.app=a,i=e?e.next:function(t){return a.router.push(t)},s=void 0,e?s=n.resolve(e.url).route:(f=Object(k.d)(n.options.base),s=n.resolve(f).route),t.next=10,Object(k.m)(a,{route:s,next:i,error:a.nuxt.error.bind(a),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:if(d=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");a[t="$"+t]=e,r[t]=a[t];var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||u()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof j.a){t.next=15;break}return t.next=15,Object(j.a)(a.context,d);case 15:if("function"!=typeof $.default){t.next=18;break}return t.next=18,Object($.default)(a.context,d);case 18:if("function"!=typeof T.default){t.next=21;break}return t.next=21,Object(T.default)(a.context,d);case 21:t.next=24;break;case 24:return t.abrupt("return",{app:a,router:n,store:r});case 25:case"end":return t.stop()}},t,this)})),function(t){return L.apply(this,arguments)});m.default.component(g.a.name,g.a),m.default.component(w.a.name,w.a),m.default.component(b.a.name,b.a),m.default.component(C.a.name,C.a),m.default.use(v.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var A={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},unZF:function(t,e,n){"use strict";var r=n("BO1k"),o=n.n(r),a=n("4Atj"),i=a.keys();function u(t){var e=a(t);return e.default?e.default:e}var s={},c=!0,f=!1,l=void 0;try{for(var d,p=o()(i);!(c=(d=p.next()).done);c=!0){var h=d.value;s[h.replace(/^\.\//,"").replace(/\.(js)$/,"")]=u(h)}}catch(t){f=!0,l=t}finally{try{!c&&p.return&&p.return()}finally{if(f)throw l}}e.a=s},vdRI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("/5sW"),o=n("NYxO"),a=n("e3SH"),i=n("eGmw"),u=n("AOsL"),s=n("QlVn");r.default.use(o.default);e.default=function(){return new o.default.Store({state:a.default,getters:i.default,mutations:u.default,actions:s.default})}},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("F88d"),u=n("KZJh"),s=(n.n(u),{_default:function(){return n.e(3).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}}),c={};e.a={head:{title:"meeting_film_front",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Meeting_film前端应用程序"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&c["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=c[e],this.layout},loadLayout:function(t){var e=this;t&&(s["_"+t]||c["_"+t])||(t="default");var n="_"+t;return c[n]?o.a.resolve(c[n]):s[n]().then(function(t){return c[n]=t,delete s[n],c[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}},zZ5Z:function(t,e,n){"use strict";var r=n("/5sW"),o=n("sUu7"),a=n("+8+3"),i=n.n(a);o.a.localize(i.a);r.default.use(o.b,{locale:"zh_CN"});o.a.localize({zh_CN:{messages:{password:function(){return"请输入6-16位数字、字母登录密码"},email:function(){return"请输入正确的邮箱格式"},mobile:function(){return"请输入11位正确的手机号"},required:function(t){return"请输入"+t}},attributes:{username:"用户名",password:"密码",mobile:"手机号",email:"邮箱",address:"地址"}}}),o.a.extend("username",{validate:function(t){return""!=t}}),o.a.extend("password",{validate:function(t){return/^[0-9A-Za-z]{6,20}$/.test(t)}}),o.a.extend("mobile",{validate:function(t){return 11==t.length&&/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(t)}}),o.a.extend("email",{validate:function(t){return/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t)}}),o.a.extend("address",{validate:function(t){return""!=t}})}},["T23V"]);