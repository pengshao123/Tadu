(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7501b253"],{"159b":function(t,a,s){var i=s("da84"),e=s("fdbc"),o=s("17c2"),r=s("9112");for(var c in e){var n=i[c],l=n&&n.prototype;if(l&&l.forEach!==o)try{r(l,"forEach",o)}catch(d){l.forEach=o}}},"17c2":function(t,a,s){"use strict";var i=s("b727").forEach,e=s("b301");t.exports=e("forEach")?function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"6d3b":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"particulars"},[s("div",{staticClass:"par-heard"},[s("div",{staticClass:"hread"},[s("van-nav-bar",{attrs:{"left-text":"返回",border:!1,size:"20","left-arrow":""},on:{"click-left":t.back}},[s("van-icon",{attrs:{slot:"right",name:"share",size:"20",color:"black"},slot:"right"})],1)],1)]),s("div",{staticClass:"par-fiction"},[s("div",{staticClass:"fiction-text",attrs:{id:this.partioc.Id}},[s("div",{staticClass:"par-message"},[s("div",{staticClass:"message-heard"},[s("div",{staticClass:"mesg-fl"},[s("img",{staticClass:"max-img",attrs:{src:this.partioc.Img}})]),s("div",{staticClass:"mesg-fr"},[s("div",{staticClass:"mesg-title"},[s("h3",[t._v(t._s(this.partioc.Name))]),s("p",[t._v(t._s(this.partioc.Author))]),s("p",[t._v(" 小说 "),s("span",[t._v("·")]),t._v(" "+t._s(this.partioc.CName)+" "),s("span",[t._v("·")]),t._v("电子竞技 ")])]),s("div",{staticClass:"mesg-grade"},[s("div",{staticClass:"grade-1"},[s("span",[t._v(t._s(this.title))]),s("van-rate",{attrs:{color:"#F1B65A","void-icon":"star",size:"15","void-color":"#BABABA",readonly:""},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1),t._m(0)])])]),s("div",{staticClass:"message-show"},[s("ul",[s("li",[t._m(1),s("p",{staticClass:"p2"},[t._v(t._s(this.partioc.BookStatus))])]),t._m(2),t._m(3)])]),s("div",{staticClass:"book-slidow"},[s("div",{staticClass:"slidow",style:{display:t.display}},[t._v(t._s(this.partioc.Desc))]),s("div",{staticClass:"back-lt"},[s("van-icon",{attrs:{name:t.iconname,color:"#b5b5b5"},on:{click:function(a){return t.sidow(t.display)}}})],1)]),s("div",{staticClass:"book-catalogue",on:{click:function(a){return t.section({name:"section",params:{id:t.toID}})}}},[s("span",{staticClass:"text-t"},[t._v("书籍目录")]),s("div",{staticClass:"cata-fr"},[s("span",[s("strong",[t._v("·")]),t._v(" "+t._s(this.partioc.LastChapter)+" ")]),s("van-icon",{attrs:{name:"arrow",size:"20",color:"#b5b5b5"}})],1)])]),s("div",{staticClass:"par-comment"},[s("div",{staticClass:"comment-title"},[s("div",{staticClass:"com-fl"},[s("span",[t._v("其他推荐作品")]),s("span",[t._v(t._s(this.index)+"部作品")])])]),s("div",{staticClass:"com-img"},[s("ul",t._l(this.partioc.SameCategoryBooks,(function(a,i){return s("li",{key:i,staticClass:"animated heartBeat",attrs:{id:a.Id}},[s("div",{staticClass:"com-logo"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"https://imgapi.jiaston.com/BookFiles/BookImages/"+a.Img,expression:"'https://imgapi.jiaston.com/BookFiles/BookImages/'+item.Img"}],staticClass:"max-img",attrs:{src:"https://imgapi.jiaston.com/BookFiles/BookImages/"+a.Img,loading:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576141964201&di=b65f41ae2c0efca1c382dec9882b63ed&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2F23907369b8a233f4b426d739875621c6b0fc248a1d28c-8V4M0p_fw658"}})]),s("p",[t._v(t._s(a.Name))])])})),0)])])])]),s("div",{staticClass:"book-read"},[s("div",{staticClass:"read-1"},[s("div",{staticClass:"red-sc"},[s("van-icon",{attrs:{name:t.iconn,color:t.iconcolor,size:"22","v-model":t.show},on:{click:function(a){return t.join(t.iconn,t.show)}}}),s("span",[t._v(t._s(t.joinbookrack))])],1)]),s("div",{staticClass:"read-2",on:{click:function(a){return t.torea({name:"interfacered",params:{id:t.id}})}}},[t._v("立即阅读")]),s("div",{staticClass:"read-1"},[s("div",{staticClass:"red-sc"},[s("van-icon",{attrs:{name:"down",size:"22"}}),s("span",[t._v("下载全本")])],1)])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"grade-2"},[s("span",[t._v("5.4万人评分")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"p1"},[s("span",[t._v("534")]),t._v("万字 ")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("p",{staticClass:"p1"},[s("span",[t._v("534")]),t._v("名 ")]),s("p",{staticClass:"p2"},[t._v("霸王票")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("p",{staticClass:"p1"},[s("span",[t._v("6.4")]),t._v("万瓶 ")]),s("p",{staticClass:"p2"},[t._v("灌溉")])])}],o=(s("a434"),s("159b"),{data:function(){return{value:null,title:"",display:"-webkit-box",iconname:"arrow-down",partioc:"",index:0,iconn:"like-o",iconcolor:"black",id:null,toID:null,show:!1,joinbookrack:"加入书架",imgUrl:"https://imgapi.jiaston.com/BookFiles/BookImages/"}},computed:{},methods:{sidow:function(t){this.display="block"==t?"-webkit-box":"block",this.iconname="block"==t?"arrow-down":"arrow-up"},torea:function(t){this.$router.push(t)},section:function(t){this.$router.push(t)},back:function(){this.$router.go(-1)},join:function(t,a){this.iconn="like"==t?"like-o":"like",this.iconcolor="like"==t?"black":"red",this.show=0==a;var s=localStorage.getItem("user");if(s){if(s=JSON.parse(s),!s.isLogin)return this.$toast({message:"请先去登录"}),this.$router.push({name:"register"});var i=localStorage.getItem("likebooks");i=i?JSON.parse(i):{};var e=i[s.username];if(e||(i[s.username]=[]),this.partioc.show=this.show,this.show){for(var o=0;o<i[s.username].length;o++)if(i[s.username][o].Id==this.partioc.Id)return;i[s.username].unshift(this.partioc),localStorage.setItem("likebooks",JSON.stringify(i)),this.joinbookrack="已加书架",this.$toast({message:"已加入书架"})}else{for(var r=0;r<i[s.username].length;r++)i[s.username][r].Id==this.partioc.Id&&i[s.username].splice(r,1);localStorage.setItem("likebooks",JSON.stringify(i)),this.joinbookrack="加入书架",this.$toast({message:"已取消加入书架"})}}else this.$toast({message:"请登录"}),this.$router.push({name:"register"})}},mounted:function(){this.partioc=JSON.parse(localStorage.getItem("book-info")),this.value=this.partioc.BookVote.Score/2,this.title=this.partioc.BookVote.Score},created:function(){var t=this;this.partioc=JSON.parse(localStorage.getItem("book-info"));var a=this.$route.params.id;this.id=a;var s=JSON.parse(localStorage.getItem("user")),i=localStorage.getItem("likebooks");i=i?JSON.parse(i):{};var e=i[s.username];this.$axios({methods:"GET",dataType:"jsonp",url:"http://localhost:1000/getjson/xiaoshuo-info1"}).then((function(s){s.data.forEach((function(s){if(s.data.Img=t.imgUrl+s.data.Img,a==s.data.Id){if(i)for(var o=0;o<e.length;o++)if(e[o].Id==s.data.Id)return t.partioc=e[o],t.iconn="like",t.iconcolor="red",t.show=!0,t.joinbookrack="已加书架",localStorage.setItem("book-info",JSON.stringify(e[o]));t.partioc=s.data,t.toID=s.data.Id,localStorage.setItem("book-info",JSON.stringify(s.data)),t.value=s.data.BookVote.Score/2,t.title=s.data.BookVote.Score}})),t.partioc.SameCategoryBooks.forEach((function(a){t.index+=1}))})),this.toID=this.partioc.Id}}),r=o,c=(s("935e"),s("2877")),n=Object(c["a"])(r,i,e,!1,null,null,null);a["default"]=n.exports},"935e":function(t,a,s){"use strict";var i=s("ea47"),e=s.n(i);e.a},b301:function(t,a,s){"use strict";var i=s("d039");t.exports=function(t,a){var s=[][t];return!s||!i((function(){s.call(null,a||function(){throw 1},1)}))}},b727:function(t,a,s){var i=s("f8c2"),e=s("44ad"),o=s("7b0b"),r=s("50c4"),c=s("65f0"),n=[].push,l=function(t){var a=1==t,s=2==t,l=3==t,d=4==t,u=6==t,m=5==t||u;return function(h,p,v,f){for(var g,k,b=o(h),_=e(b),C=i(p,v,3),S=r(_.length),I=0,w=f||c,L=a?w(h,S):s?w(h,0):void 0;S>I;I++)if((m||I in _)&&(g=_[I],k=C(g,I,b),t))if(a)L[I]=k;else if(k)switch(t){case 3:return!0;case 5:return g;case 6:return I;case 2:n.call(L,g)}else if(d)return!1;return u?-1:l||d?d:L}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},ea47:function(t,a,s){},fdbc:function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-7501b253.aa6953df.js.map