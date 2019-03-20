webpackJsonp([4],{"0IyC":function(t,a,e){var i=e("XGxa");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("db847b06",i,!1,{sourceMap:!1})},"351N":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("wMhL"),n=e("9vF6"),s=!1;var o=function(t){s||e("0IyC")},r=e("VU/8")(i.a,n.a,!1,o,"data-v-7894c42a",null);r.options.__file="pages/cinema.vue",a.default=r.exports},"6aeV":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"banner cinema-banner"},[t.cinemaBanner&&t.cinemaBanner.data?e("div",{staticClass:"wrapper clearfix"},[e("div",{staticClass:"cinema-left"},[e("div",{staticClass:"avatar-shadow"},[e("img",{staticClass:"avatar",attrs:{src:t.cinemaBanner.imgPre+t.cinemaBanner.data.cinemaInfo.imgUrl}})])]),e("div",{staticClass:"cinema-main clearfix"},[e("div",{staticClass:"cinema-brief-container"},[e("h3",{staticClass:"name text-ellipsis"},[t._v(t._s(t.cinemaBanner.data.cinemaInfo.cinemaName))]),e("div",{staticClass:"address text-ellipsis"},[t._v(t._s(t.cinemaBanner.data.cinemaInfo.cinemaAdress))]),e("div",{staticClass:"telphone"},[t._v("电话："+t._s(t.cinemaBanner.data.cinemaInfo.cinemaPhone))]),e("div",{staticClass:"features-group"},[e("div",{staticClass:"group-title"},[t._v("影院服务")]),e("div",{staticClass:"feature"},[e("span",{staticClass:"tag "},[t._v(t._s(t.cinemaBanner.data.cinemaInfo.cinemaName))]),e("p",{staticClass:"desc text-ellipsis",attrs:{title:"免押金"}},[t._v("免押金")])])])])])]):t._e()])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};a.a=n},"9m5I":function(t,a,e){var i=e("nTh0");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("45af4290",i,!1,{sourceMap:!1})},"9vF6":function(t,a,e){"use strict";var i=function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"container"},[a("div",{staticClass:"cinema-container"},[a("Banner",{attrs:{cinemaBanner:this.cinemasData}}),a("div",{staticClass:"main-content-container clearfix"},[a("CinemaItem",{attrs:{cinemasItem:this.cinemasData}})],1)],1)])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};a.a=n},ClcC:function(t,a,e){"use strict";a.a={props:{cinemaBanner:{}}}},H0EU:function(t,a,e){"use strict";var i=e("b/Dg"),n=e("O2to"),s=!1;var o=function(t){s||e("9m5I")},r=e("VU/8")(i.a,n.a,!1,o,"data-v-720acee2",null);r.options.__file="components/cinema/cinemaList.vue",a.a=r.exports},O2to:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.cinemasItem&&t.cinemasItem.data?e("div",{staticClass:"cinemaList-container"},[e("div",{staticClass:"movie-list-container"},[e("div",{staticClass:"movie-list"},t._l(t.cinemasItem.data.filmList,function(a,i){return e("div",{key:i,staticClass:"movie",class:{active:t.tabShow==i},on:{click:function(a){t.tab(i)}}},[e("img",{attrs:{src:t.cinemasItem.imgPre+a.imgAddress,alt:""}})])}))]),t._l(t.cinemasItem.data.filmList,function(a,i){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.tabShow==i,expression:"tabShow==index"}],key:i,staticClass:"show-list"},[e("div",{staticClass:"movie-info"},[e("div",[e("h3",{staticClass:"movie-name"},[t._v(t._s(a.filmName))])]),e("div",{staticClass:"movie-desc"},[e("div",[e("span",{staticClass:"key"},[t._v("时长 :")]),e("span",{staticClass:"value"},[t._v(t._s(a.filmLength))])]),e("div",[e("span",{staticClass:"key"},[t._v("类型 :")]),e("span",{staticClass:"value"},[t._v(" "+t._s(a.filmCats)+" ")])]),e("div",[e("span",{staticClass:"key"},[t._v("主演 :")]),e("span",{staticClass:"value"},[t._v(" "+t._s(a.actors))])])])]),t._m(0,!0),e("div",{staticClass:"plist-container"},[e("table",{staticClass:"plist"},[t._m(1,!0),e("tbody",t._l(a.filmFields,function(a,i){return e("tr",{key:i},[e("td",[e("span",{staticClass:"begin-time"},[t._v(t._s(a.beginTime))]),e("br"),e("span",{staticClass:"end-time"},[t._v(t._s(a.endTime)+"散场")])]),e("td",[e("span",{staticClass:"lang"},[t._v(t._s(a.language))])]),e("td",[e("span",{staticClass:"hall"},[t._v(t._s(a.hallName))])]),e("td",[e("span",{staticClass:"sell-price"},[e("span",{staticClass:"stonefont"},[t._v(t._s(a.price))])])]),e("td",[e("nuxt-link",{staticClass:"buy-btn normal",attrs:{to:{path:"/xseats/",query:{cinemaId:t.cinemasItem.data.cinemaInfo.cinemaId,fieldId:a.fieldId}}}},[t._v("\n                            选座购票\n                        ")])],1)])}))])])])})],2):t._e()};i._withStripped=!0;var n={render:i,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"show-date"},[a("span",[this._v("观影时间 :")]),a("span",{staticClass:"date-item"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("放映时间")]),a("th",[this._v("语言版本")]),a("th",[this._v("放映厅")]),a("th",[this._v("售价（元）")]),a("th",[this._v("选座购票")])])])}]};a.a=n},QgsG:function(t,a,e){"use strict";var i=e("ClcC"),n=e("6aeV"),s=!1;var o=function(t){s||e("k35v")},r=e("VU/8")(i.a,n.a,!1,o,"data-v-c62b9c02",null);r.options.__file="components/cinema/Banner.vue",a.a=r.exports},XGxa:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.container[data-v-7894c42a]{padding-top:61px;background-color:#fff}.container .main-content-container[data-v-7894c42a]{margin:80px auto;width:1200px}.container .main-content-container[data-v-7894c42a]:after{content:"";display:table;clear:both}.container .main-content-container .related[data-v-7894c42a]{margin-left:840px;width:360px}',""])},"b/Dg":function(t,a,e){"use strict";a.a={props:{cinemasItem:{type:Object,default:function(){}}},data:function(){return{tabShow:0}},methods:{tab:function(t){this.tabShow=t}}}},b6hJ:function(t,a,e){t.exports=e.p+"img/bg-banner.f7fd103.png"},k35v:function(t,a,e){var i=e("purX");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("5fd1a2f8",i,!1,{sourceMap:!1})},kxFB:function(t,a){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},nTh0:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.cinemaList-container[data-v-720acee2]{width:1200px;margin:0 auto}.cinemaList-container .movie-list-container[data-v-720acee2]{height:280px;padding:22px 5px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-webkit-box-shadow:inset 0 0 100px 80px #ededed;box-shadow:inset 0 0 100px 80px #ededed;position:relative}.cinemaList-container .movie-list-container .movie-list[data-v-720acee2]{white-space:nowrap;position:relative;display:table;left:0;-webkit-transition:left .2s ease;transition:left .2s ease}.cinemaList-container .movie-list-container .movie-list .movie[data-v-720acee2]{width:162px;height:227px;border:4px solid #fff;-webkit-box-shadow:0 1px 3px 0 hsla(0,0%,66%,.5);box-shadow:0 1px 3px 0 hsla(0,0%,66%,.5);display:inline-block;-webkit-transform-origin:50%;transform-origin:50%;-webkit-transform:scale(.82);transform:scale(.82);-webkit-transition:-webkit-transform .1s;transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s;word-spacing:0}.cinemaList-container .movie-list-container .movie-list .movie.active[data-v-720acee2]{-webkit-transform:scale(1);transform:scale(1);border-color:#f24030}.cinemaList-container .show-list .movie-info[data-v-720acee2]{margin-top:20px;border-bottom:1px solid #e5e5e5}.cinemaList-container .show-list .movie-info .movie-name[data-v-720acee2]{display:inline-block;margin:0 20px 20px 0;font-size:26px;font-weight:400;color:#333}.cinemaList-container .show-list .movie-info .score[data-v-720acee2]{display:inline-block;font-size:24px;color:#faaf00}.cinemaList-container .show-list .movie-info .score[data-v-720acee2]:after{content:"\\5206";font-size:12px}.cinemaList-container .show-list .movie-info .movie-desc>div[data-v-720acee2]{display:inline-block;font-size:14px;color:#151515;margin-bottom:20px;margin-right:40px}.cinemaList-container .show-list .movie-info .movie-desc .key[data-v-720acee2]{color:#999}.cinemaList-container .show-list .show-date[data-v-720acee2]{padding:30px 0;font-size:14px;color:#999}.cinemaList-container .show-list .show-date .date-item[data-v-720acee2]{display:inline-block;background-color:transparent;border-radius:100px;color:#333;padding:2px 10px;margin-left:12px;cursor:default}.cinemaList-container .show-list .show-date .date-item.active[data-v-720acee2],.cinemaList-container .show-list .show-date .date-item[data-v-720acee2]:hover{color:#fff;background-color:#ff6637}.cinemaList-container .show-list .plist[data-v-720acee2]{width:100%;border:none;border-spacing:0}.cinemaList-container .show-list .plist thead[data-v-720acee2]{background-color:#f7f7f7;color:#333;font-size:16px;padding:18px 0}.cinemaList-container .show-list .plist thead th[data-v-720acee2]{padding:16px 0}.cinemaList-container .show-list .plist tbody tr[data-v-720acee2]{height:82px}.cinemaList-container .show-list .plist tbody tr.even[data-v-720acee2]{background-color:#f9f9f9}.cinemaList-container .show-list .plist tbody tr td[data-v-720acee2]{text-align:center;width:20%}.cinemaList-container .show-list .plist tbody tr td .begin-time[data-v-720acee2]{font-size:18px;color:#333;font-weight:700}.cinemaList-container .show-list .plist tbody tr td .end-time[data-v-720acee2]{font-size:12px;color:#999}.cinemaList-container .show-list .plist tbody tr td .hall[data-v-720acee2],.cinemaList-container .show-list .plist tbody tr td .lang[data-v-720acee2]{font-size:14px;color:#333}.cinemaList-container .show-list .plist tbody tr td .sell-price[data-v-720acee2]{font-size:18px;color:#ff6637;font-weight:700}.cinemaList-container .show-list .plist tbody tr td .sell-price[data-v-720acee2]:before{content:"\\FFE5";font-size:12px}.cinemaList-container .show-list .plist tbody tr td .buy-btn[data-v-720acee2]{display:inline-block;width:80px;height:30px;color:#fff;background-color:#ff6637;font-size:14px;line-height:30px;border-radius:100px;text-align:center}.cinemaList-container .show-list .plist tbody tr td .buy-btn.normal[data-v-720acee2]{-webkit-box-shadow:0 2px 10px -2px #ff6637;box-shadow:0 2px 10px -2px #ff6637}.cinemaList-container .show-list .plist tbody tr td .buy-btn.normal[data-v-720acee2]:hover{background-color:#f35d2f}.cinemaList-container .show-list .plist tbody tr td .buy-btn.full[data-v-720acee2]{background-color:#f3f3f3;color:#999}.cinemaList-container .show-list .plist tbody tr td .buy-btn.unavailable[data-v-720acee2]{background-color:#ffbab8}',""])},purX:function(t,a,e){var i=e("kxFB");(t.exports=e("FZ+f")(!1)).push([t.i,".banner[data-v-c62b9c02]{width:100%;min-width:1200px;background:#392f59 url("+i(e("b6hJ"))+') no-repeat 50%}.banner .wrapper[data-v-c62b9c02]{width:1200px;height:320px;position:relative;top:70px;margin:0 auto}.banner .wrapper .cinema-left[data-v-c62b9c02]{width:360px;float:left;overflow:hidden;z-index:9}.banner .wrapper .cinema-left .avatar-shadow[data-v-c62b9c02]{width:300px;height:332px;position:relative;margin:0 30px;padding-bottom:40px}.banner .wrapper .cinema-left .avatar-shadow .avatar[data-v-c62b9c02]{border:4px solid #fff;height:292px;width:292px}.banner .wrapper .cinema-left .avatar-shadow .avatar-num[data-v-c62b9c02]{position:absolute;left:4px;bottom:44px;width:284px;line-height:32px;background-color:rgba(0,0,0,.6);color:#fff;font-size:14px;text-align:center}.banner .wrapper .cinema-main[data-v-c62b9c02]{position:relative;float:left;max-width:600px}.banner .wrapper .cinema-main .cinema-brief-container[data-v-c62b9c02]{color:#fff}.banner .wrapper .cinema-main .cinema-brief-container .text-ellipsis[data-v-c62b9c02]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.banner .wrapper .cinema-main .cinema-brief-container .name[data-v-c62b9c02]{margin:0;font-size:26px;margin-bottom:9px;font-weight:400}.banner .wrapper .cinema-main .cinema-brief-container .address[data-v-c62b9c02],.banner .wrapper .cinema-main .cinema-brief-container .telphone[data-v-c62b9c02]{font-size:14px;margin-bottom:6px}.banner .wrapper .cinema-main .cinema-brief-container .features-group[data-v-c62b9c02]{position:relative}.banner .wrapper .cinema-main .cinema-brief-container .features-group .group-title[data-v-c62b9c02]{font-size:14px;margin-bottom:5px;overflow:hidden;width:410px}.banner .wrapper .cinema-main .cinema-brief-container .features-group .group-title[data-v-c62b9c02]:after{border-top:1px solid hsla(0,0%,100%,.7);display:block;content:"";position:relative;top:-10px;left:70px}.banner .wrapper .cinema-main .cinema-brief-container .features-group .feature[data-v-c62b9c02]{font-size:12px;margin-bottom:2px;position:relative;min-height:22px;line-height:23px;-webkit-transform-origin:0;transform-origin:0;-webkit-transform:scale(.8);transform:scale(.8)}.banner .wrapper .cinema-main .cinema-brief-container .features-group .feature .tag[data-v-c62b9c02]{display:inline-block;border:1px solid hsla(0,0%,100%,.6);border-radius:2px;min-width:60px;height:22px;line-height:23px;text-align:center}.banner .wrapper .cinema-main .cinema-brief-container .features-group .feature .desc[data-v-c62b9c02]{display:inline-block;max-width:438px;margin-left:5px;vertical-align:middle}',""])},wMhL:function(t,a,e){"use strict";var i=e("QgsG"),n=e("H0EU"),s=e("YFWx");a.a={head:function(){return{title:"详情",meta:[{hid:"详情",name:"详情",content:"详情"}]}},data:function(){return{cinemasData:{cinemaBanner:{},cinemasItem:{}}}},components:{Banner:i.a,CinemaItem:n.a},created:function(){this.getCinema()},methods:{getCinema:function(){var t=this,a={cinemaId:this.$router.history.current.query.cinemaId};Object(s.b)("//www.meetingshop.cn/cinema/getFields","get",a).then(function(a){a&&0==a.status?t.cinemasData=a:a.msg&&alert(a.msg)},function(t){console.log(t)})}}}}});