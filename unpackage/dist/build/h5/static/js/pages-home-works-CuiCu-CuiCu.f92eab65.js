(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-works-CuiCu-CuiCu"],{"0776":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={uIcon:n("70d4").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-section"},[n("v-uni-view",{staticClass:"u-section__title",class:{"u-section--line":t.showLine},style:{fontWeight:t.bold?"bold":"normal",color:t.color,fontSize:t.fontSize+"rpx",paddingLeft:t.showLine?.7*t.fontSize+"rpx":0}},[t.showLine?n("v-uni-view",{staticClass:"u-section__title__icon-wrap u-flex",style:[t.lineStyle]},[n("u-icon",{attrs:{top:"0",name:"column-line",size:1.25*t.fontSize,bold:!0,color:t.lineColor?t.lineColor:t.color}})],1):t._e(),n("v-uni-text",{staticClass:"u-flex u-section__title__text"},[t._v(t._s(t.title))])],1),t.right||t.$slots.right?n("v-uni-view",{staticClass:"u-section__right-info",style:{color:t.subColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightClick.apply(void 0,arguments)}}},[t.$slots.right?t._t("right"):[t._v(t._s(t.subTitle)),t.arrow?n("v-uni-view",{staticClass:"u-section__right-info__icon-arrow u-flex"},[n("u-icon",{attrs:{name:"arrow-right",size:"24",color:t.subColor}})],1):t._e()]],2):t._e()],1)},o=[]},"08f7":function(t,e,n){"use strict";n.r(e);var r=n("28db"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"09fd":function(t,e,n){"use strict";n.r(e);var r=n("87fc"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"0d8d":function(t,e,n){var r=n("18d0");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("5714899b",r,!0,{sourceMap:!1,shadowMode:!1})},"0e9d":function(t,e,n){"use strict";n.r(e);var r=n("0776"),i=n("08f7");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("27b0");var a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"1e2b987c",null,!1,r["a"],void 0);e["default"]=s.exports},"0eba":function(t,e,n){"use strict";var r=n("d897"),i=n.n(r);i.a},"18d0":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-section[data-v-1e2b987c]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%}.u-section__title[data-v-1e2b987c]{position:relative;font-size:%?28?%;padding-left:%?20?%;display:flex;flex-direction:row;align-items:center}.u-section__title__icon-wrap[data-v-1e2b987c]{position:absolute}.u-section__title__text[data-v-1e2b987c]{line-height:1}.u-section__right-info[data-v-1e2b987c]{color:#909399;font-size:%?26?%;display:flex;flex-direction:row;align-items:center}.u-section__right-info__icon-arrow[data-v-1e2b987c]{margin-left:%?6?%}',""]),t.exports=e},"27b0":function(t,e,n){"use strict";var r=n("0d8d"),i=n.n(r);i.a},"28db":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var r={name:"u-section",props:{title:{type:String,default:""},subTitle:{type:String,default:"更多"},right:{type:Boolean,default:!0},fontSize:{type:[Number,String],default:28},bold:{type:Boolean,default:!0},color:{type:String,default:"#303133"},subColor:{type:String,default:"#909399"},showLine:{type:Boolean,default:!0},lineColor:{type:String,default:""},arrow:{type:Boolean,default:!0}},computed:{lineStyle:function(){return{left:-.9*Number(this.fontSize)+"rpx",top:-Number(this.fontSize)*("ios"==this.$u.os()?.14:.15)+"rpx"}}},methods:{rightClick:function(){this.$emit("click")}}};e.default=r},"4ebd":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.card[data-v-60c596b0]{width:90%;background-color:#fff;margin:auto;border-radius:7px;overflow:hidden;margin-top:10px;padding:10px;border:.3px solid #d9e7f1;box-sizing:border-box;-webkit-box-shadow:9px 9px 6px #d9e7f1;-moz-box-shadow:9px 9px 6px #d9e7f1;box-shadow:3px 3px 6px #d9e7f1;position:relative}',""]),t.exports=e},6535:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={uSection:n("0e9d").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"box"},t._l(t.Data,(function(e,r){return n("v-uni-view",{staticClass:"card"},[n("h4",[t._v(t._s(e.CusName))]),n("br"),n("u-section",{attrs:{bold:!1,"line-color":"#fff",arrow:!1,title:"区域","sub-title":e.Area}}),n("u-section",{attrs:{bold:!1,"line-color":"#fff",arrow:!1,title:"任务类型","sub-title":e.OrderType}}),n("u-section",{attrs:{bold:!1,"line-color":"#fff",arrow:!1,title:"任务单号","sub-title":e.OrderCode}}),n("u-section",{attrs:{bold:!1,"line-color":"#fff",arrow:!1,title:"接受日期","sub-title":e.AcceptDate.split("T")[0]}}),n("u-section",{attrs:{bold:!1,"line-color":"#fff",arrow:!1,title:"历时天数","sub-title":e.Duration}}),n("u-section",{attrs:{bold:!1,"line-color":"#fff",arrow:!1,title:"预警阈值","sub-title":e.Warn}}),n("u-section",{attrs:{bold:!1,"line-color":"#fff",arrow:!1,title:"工程师","sub-title":e.Engineer}}),n("u-section",{attrs:{bold:!1,"line-color":"#fff",arrow:!1,title:"区域经理","sub-title":e.Manager}}),n("u-section",{attrs:{bold:!1,"line-color":"#fff",arrow:!1,title:"区域经理电话","sub-title":e.ManagerMobile}})],1)})),1)},o=[]},"87fc":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{Data:[]}},created:function(){this.init()},methods:{init:function(){var t=this,e={method:"GET",url:this.$store.state.url+"System/UrgeWorkOrder",header:this.$store.state.token,data:{area:""}};this.$http(e).then((function(e){console.log(e.Data),t.Data=e.Data}))}}};e.default=r},d897:function(t,e,n){var r=n("4ebd");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("7300bccb",r,!0,{sourceMap:!1,shadowMode:!1})},ea4e:function(t,e,n){"use strict";n.r(e);var r=n("6535"),i=n("09fd");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("0eba");var a=n("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"60c596b0",null,!1,r["a"],void 0);e["default"]=s.exports}}]);