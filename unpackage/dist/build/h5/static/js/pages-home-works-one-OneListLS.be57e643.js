(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-works-one-OneListLS"],{2166:function(t,e,n){var i=n("f6d5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0565aa66",i,!0,{sourceMap:!1,shadowMode:!1})},"22ab":function(t,e,n){var i=n("5c4e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("24c1332c",i,!0,{sourceMap:!1,shadowMode:!1})},"25c7":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("841c");var i={data:function(){return{search:"",Data:[]}},onBackPress:function(){return uni.navigateTo({url:"../work.1"}),!0},created:function(){this.init()},methods:{init:function(){var t=this,e={url:this.$store.state.url+"WO/GetWOsFArea",method:"GET",header:this.$store.state.token,data:{pageNum:"1",numPerPage:"",orderField:"",orderDirection:"",search:this.search}};this.$http(e).then((function(e){t.Data=e.Data.Dtos,console.log(t.Data)}))},ClickGongDan:function(t){this.$store.state.codeurlid=t,uni.navigateTo({url:"./OneAddGcs"})}}};e.default=i},"355e":function(t,e,n){"use strict";n.r(e);var i=n("3d95"),a=n("b574");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("727a");var o=n("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"bcc6c970",null,!1,i["a"],void 0);e["default"]=c.exports},"3d95":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uIcon:n("70d4").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-search",style:{margin:t.margin},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-content",style:{backgroundColor:t.bgColor,borderRadius:"round"==t.shape?"100rpx":"10rpx",border:t.borderStyle,height:t.height+"rpx"}},[n("v-uni-view",{staticClass:"u-icon-wrap"},[n("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:t.searchIcon,color:t.searchIconColor?t.searchIconColor:t.color}})],1),n("v-uni-input",{staticClass:"u-input",style:[{textAlign:t.inputAlign,color:t.color,backgroundColor:t.bgColor},t.inputStyle],attrs:{"confirm-type":"search",value:t.value,disabled:t.disabled,focus:t.focus,maxlength:t.maxlength,"placeholder-class":"u-placeholder-class",placeholder:t.placeholder,"placeholder-style":"color: "+t.placeholderColor,type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.getFocus.apply(void 0,arguments)}}}),t.keyword&&t.clearabled&&t.focused?n("v-uni-view",{staticClass:"u-close-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[n("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close-circle-fill",size:"34",color:"#c0c4cc"}})],1):t._e()],1),n("v-uni-view",{staticClass:"u-action",class:[t.showActionBtn||t.show?"u-action-active":""],style:[t.actionStyle],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.custom.apply(void 0,arguments)}}},[t._v(t._s(t.actionText))])],1)},r=[]},"40fa":function(t,e,n){"use strict";n.r(e);var i=n("e127"),a=n("5004");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("d380");var o=n("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"fe280d88",null,!1,i["a"],void 0);e["default"]=c.exports},5004:function(t,e,n){"use strict";n.r(e);var i=n("25c7"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"5c4e":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box .search[data-v-fe280d88]{width:100%;position:fixed;top:30;left:0;z-index:100;background-color:#f6f6f6}.box .hezi[data-v-fe280d88]{width:97%;height:80px;background:#fff;margin:auto;border-radius:10px;margin-top:5px;padding:5px;box-sizing:border-box;-webkit-box-shadow:3px 3px 6px #c1c1c1;-moz-box-shadow:3px 3px 6px #c1c1c1;box-shadow:3px 3px 6px #c1c1c1}.box .hezi .left[data-v-fe280d88]{width:75%;height:100%;float:left;padding-right:20px;box-sizing:border-box}.box .hezi .left uni-text[data-v-fe280d88]{display:block}.box .hezi .left .text1[data-v-fe280d88]{width:100%;height:30px;line-height:30px;font-weight:700;overflow:hidden}.box .hezi .left .text2[data-v-fe280d88]{font-size:12px;height:20px;line-height:20px}.box .hezi .left .text3[data-v-fe280d88]{float:left}.box .hezi .left .text4[data-v-fe280d88]{float:right}.box .hezi .right[data-v-fe280d88]{width:25%;height:100%;float:left}.box .hezi .right uni-button[data-v-fe280d88]{width:50px;display:block;margin:auto;margin-top:20px;height:30px;line-height:30px;text-align:center;padding:0}',""]),t.exports=e},"727a":function(t,e,n){"use strict";var i=n("2166"),a=n.n(i);a.a},"833c":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"u-search",props:{shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},value:{type:String,default:""},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}},maxlength:{type:[Number,String],default:"-1"},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String,default:"0"},searchIcon:{type:String,default:"search"}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(t){this.$emit("input",t),this.$emit("change",t)},value:{immediate:!0,handler:function(t){this.keyword=t}}},computed:{showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"}},methods:{inputChange:function(t){this.keyword=t.detail.value},clear:function(){var t=this;this.keyword="",this.$nextTick((function(){t.$emit("clear")}))},search:function(t){this.$emit("search",t.detail.value);try{uni.hideKeyboard()}catch(t){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(t){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var t=this;setTimeout((function(){t.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")}}};e.default=i},b574:function(t,e,n){"use strict";n.r(e);var i=n("833c"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},d380:function(t,e,n){"use strict";var i=n("22ab"),a=n.n(i);a.a},e127:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uSearch:n("355e").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"box"},[n("u-search",{staticClass:"search",attrs:{placeholder:"客户名称、单号"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.init()}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),n("v-uni-view",{staticStyle:{width:"100%",height:"40px"}}),t._l(t.Data,(function(e,i){return n("v-uni-view",{key:i,staticClass:"hezi",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.ClickGongDan(e)}}},[n("v-uni-view",{staticClass:"left"},[n("v-uni-view",{staticClass:"text1"},[t._v(t._s(e.CustomerName))]),n("v-uni-view",{staticClass:"text3"},[t._v(t._s(e.WorkOrderCode))]),n("v-uni-view",{staticClass:"text4"},[t._v(t._s(e.OrderTypeStr))]),n("v-uni-view",{staticClass:"text3"},[t._v(t._s(e.CreateDate))]),n("v-uni-view",{staticClass:"text4"},[t._v(t._s(e.StatusStr))])],1),n("v-uni-view",{staticClass:"right"})],1)}))],2)},r=[]},f6d5:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-search[data-v-bcc6c970]{display:flex;flex-direction:row;align-items:center;flex:1}.u-content[data-v-bcc6c970]{display:flex;flex-direction:row;align-items:center;padding:0 %?18?%;flex:1}.u-clear-icon[data-v-bcc6c970]{display:flex;flex-direction:row;align-items:center}.u-input[data-v-bcc6c970]{flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-bcc6c970]{width:%?40?%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;border-radius:50%}.u-placeholder-class[data-v-bcc6c970]{color:#909399}.u-action[data-v-bcc6c970]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-bcc6c970]{width:%?80?%;margin-left:%?10?%}',""]),t.exports=e}}]);