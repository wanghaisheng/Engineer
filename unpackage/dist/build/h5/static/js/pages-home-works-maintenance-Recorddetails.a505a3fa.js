(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-works-maintenance-Recorddetails"],{"10c4":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uIcon:a("70d4").default,uPopup:a("d367").default,uButton:a("fc48").default,uCellGroup:a("48f8").default,uCellItem:a("0123").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"box"},[a("v-uni-view",{staticClass:"basicinformation"},[a("v-uni-view",{staticClass:"texts"},[a("v-uni-view",{staticClass:"span"},[t._v("客户名称：")]),t._v(t._s(t.data.CustomerName))],1),a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"span"},[t._v("单号：")]),t._v(t._s(t.data.Code))],1),a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"span"},[t._v("联系人：")]),t._v(t._s(t.data.LinkMan))],1),a("v-uni-view",{staticClass:"text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.Tel(t.data.LinkManTel)}}},[a("v-uni-view",{staticClass:"span"},[t._v("电话：")]),t._v(t._s(t.data.LinkManTel)),a("u-icon",{attrs:{name:"phone-fill",color:"#2979ff",size:"28"}}),a("span",[t._v("点击呼叫")])],1),a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"span"},[t._v("预计保养时间：")]),t._v(t._s(t.data.EstimatedTime))],1),a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"span"},[t._v("任务启动时间：")]),t._v(t._s(t.data.ActualTime))],1),a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"span"},[t._v("开始时间：")]),t._v(t._s(t.data.BeginTime))],1),a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"span"},[t._v("完成时间：")]),t._v(t._s(t.data.EndTime))],1)],1),a("u-popup",{attrs:{mode:"bottom",length:"60%",closeable:!0,"close-icon-pos":"top-left","border-radius":"10"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-uni-view",{staticClass:"content"},[a("u-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close()}}},[t._v("确定")]),a("v-uni-scroll-view",{staticClass:"ListView",attrs:{"scroll-y":"true"}},[a("u-cell-group",t._l(t.gcss,(function(e,i){return a("u-cell-item",{key:i,attrs:{arrow:!1,icon:"man-add-fill",title:e.Name}},[a("v-uni-switch",{staticStyle:{transform:"scale(0.6)"},attrs:{value:e.switch,checked:e.switch},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchs(i)}}})],1)})),1)],1)],1)],1),a("u-button",{staticStyle:{float:"right","margin-right":"2.5%"},attrs:{type:"success",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!0}}},[t._v("增派工程师")]),a("v-uni-view",{staticClass:"basicinformation"},t._l(t.EngineerDtos,(function(e,i){return a("v-uni-view",{key:i,staticClass:"text"},[a("v-uni-view",{staticClass:"span"},[t._v(t._s(e.Name))]),t._v(t._s(e.State))],1)})),1),a("v-uni-view",{staticClass:"basicinformation"},t._l(this.EquipmentDtos,(function(e,i){return a("v-uni-view",{key:i,staticClass:"Task1"},[a("v-uni-view",{staticClass:"head"},[t._v(t._s(e.Name))]),t._l(e.EquPhotos,(function(e,i){return e.show?a("v-uni-view",{key:i,staticClass:"EquPhotos"},[a("v-uni-view",{staticClass:"pushimg"},[a("v-uni-view",{staticClass:"left right"},[e.Before?a("v-uni-image",{staticClass:"images",attrs:{src:e.Before,mode:""},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.previewImg(e.Before)}}}):t._e()],1),a("v-uni-view",{staticClass:"left "},[e.After?a("v-uni-image",{staticClass:"images",attrs:{src:e.After,mode:""},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.previewImg(e.After)}}}):t._e()],1)],1)],1):t._e()}))],2)})),1)],1)},o=[]},3474:function(t,e,a){"use strict";a.r(e);var i=a("10c4"),n=a("b1b7");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("5dbb");var r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"59f4a6c2",null,!1,i["a"],void 0);e["default"]=s.exports},"3bd8":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("c975"),a("d3b7"),a("ac1f");var i={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t;return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){var e=this;this.$u.throttle((function(){!0!==e.loading&&!0!==e.disabled&&(e.ripple&&(e.waveActive=!1,e.$nextTick((function(){this.getWaveQuery(t)}))),e.$emit("click",t))}),this.throttleTime)},getWaveQuery:function(t){var e=this;this.getElQuery().then((function(a){var i=a[0];if(i.width&&i.width&&(i.targetWidth=i.height>i.width?i.height:i.width,i.targetWidth)){e.fields=i;var n,o;n=t.touches[0].clientX,o=t.touches[0].clientY,e.rippleTop=o-i.top-i.targetWidth/2,e.rippleLeft=n-i.left-i.targetWidth/2,e.$nextTick((function(){e.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(e){var a="";a=uni.createSelectorQuery().in(t),a.select(".u-btn").boundingClientRect(),a.exec((function(t){e(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=i},"3e51":function(t,e,a){var i=a("e714");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("5c1afdb4",i,!0,{sourceMap:!1,shadowMode:!1})},"3eb7":function(t,e,a){"use strict";var i=a("5235"),n=a.n(i);n.a},5235:function(t,e,a){var i=a("6168");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0ae9d7cd",i,!0,{sourceMap:!1,shadowMode:!1})},"5dbb":function(t,e,a){"use strict";var i=a("3e51"),n=a.n(i);n.a},"5dd8":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("14d9");var i={data:function(){return{data:{},EngineerDtos:[],EquipmentDtos:[],previewImgList:[],gcsName:"",gcss:[],gcs:[],Time:"",show:!1}},created:function(){this.init(),this.httpgcs();var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();this.Time=e+"-"+a+"-"+i},methods:{Tel:function(t){uni.makePhoneCall({phoneNumber:t})},switchs:function(t){this.$set(this.gcss[t],"switch",!this.gcss[t].switch)},close:function(){this.gcs=[],this.gcsName="",this.Gcsscz=!1;for(var t=0;t<this.gcss.length;t++)this.gcss[t].switch&&(this.gcs.push(this.gcss[t].EmployeeId),this.gcsName+="/"+this.gcss[t].Name);for(t=0;t<this.gcss.length;t++)this.gcss[t].switch=!1;this.zhi()},httpgcs:function(){var t=this,e={url:this.$store.state.url+"System/GetEmployeeMini",method:"GET",header:this.$store.state.token,data:{type:"1"}};this.$http(e).then((function(e){t.gcss=e.Data;for(var a=0;a<t.gcss.length;a++)t.gcss[a]["switch"]=!1}))},onKeyInputs:function(t){this.Gcsscz=!0},init:function(){var t=this,e="",a=this.$store.state.MaintenancestatusGoto;1==a&&(e="Maintain/GetMaintainBaseInfo"),2==a&&(e="Maintain/GetMaintainDetailInfo");var i={url:this.$store.state.url+e,method:"GET",header:this.$store.state.token,data:{Id:this.$store.state.MaintenancestatusID}};this.$http(i).then((function(e){t.data=e.Data.BaseInfo,console.log(e.Data),t.EngineerDtos=e.Data.EngineerDtos,t.EquipmentDtos=e.Data.EquipmentDtos;for(var a=0;a<t.EquipmentDtos.length;a++)for(var i=t.EquipmentDtos[a].EquPhotos,n=0;n<i.length;n++)""==i[n].After&&""==i[a].Before?i[n]["show"]=!1:i[n]["show"]=!0;console.log(t.EquipmentDtos)}))},previewImg:function(t){console.log(t),uni.previewImage({current:0,urls:[t]})},zhi:function(){var t=this;if(this.show=!1,0==this.gcs.length)return uni.showToast({title:"请选择工程师",icon:"none"}),!1;var e={url:this.$store.state.url+"Maintain/AssignTaskForM",method:"POST",header:this.$store.state.token,data:{Id:this.$store.state.MaintenancestatusID,EIds:this.gcs,BeginTime:this.Time}};this.$http(e).then((function(e){t.init()}))}}};e.default=i},6168:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-btn[data-v-4ed92bb2]::after{border:none}.u-btn[data-v-4ed92bb2]{position:relative;border:0;display:inline-flex;overflow:visible;line-height:1;display:flex;flex-direction:row;align-items:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;box-sizing:border-box;transition:all .15s}.u-btn--bold-border[data-v-4ed92bb2]{border:1px solid #fff}.u-btn--default[data-v-4ed92bb2]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-4ed92bb2]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-4ed92bb2]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-4ed92bb2]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-4ed92bb2]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-4ed92bb2]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-4ed92bb2]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-4ed92bb2]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-4ed92bb2]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-4ed92bb2]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-4ed92bb2]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-4ed92bb2]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-4ed92bb2]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-4ed92bb2]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-4ed92bb2]:after{content:" ";position:absolute;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-4ed92bb2]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-4ed92bb2]{opacity:0;-webkit-transform:scale(2);transform:scale(2);transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-4ed92bb2]{border-radius:%?100?%}.u-round-circle[data-v-4ed92bb2]::after{border-radius:%?100?%}.u-loading[data-v-4ed92bb2]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-4ed92bb2]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-4ed92bb2]{display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-4ed92bb2]{display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-4ed92bb2]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-4ed92bb2]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-4ed92bb2]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-4ed92bb2]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-4ed92bb2]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-4ed92bb2]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-4ed92bb2]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-4ed92bb2]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-4ed92bb2]{background:#18b566!important;color:#fff}.u-info-hover[data-v-4ed92bb2]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-4ed92bb2]{background:#f29100!important;color:#fff}.u-error-hover[data-v-4ed92bb2]{background:#dd6161!important;color:#fff}',""]),t.exports=e},"768f":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-btn--"+t.type+"--plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-btn--bold-border","u-btn--"+t.type,t.disabled?"u-btn--"+t.type+"--disabled":""],style:[t.customStyle,{overflow:t.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(t.hoverStartTime),"hover-stay-time":Number(t.hoverStayTime),disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click(e)}}},[t._t("default"),t.ripple?a("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},n=[]},a7cf:function(t,e,a){"use strict";a.r(e);var i=a("3bd8"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},b1b7:function(t,e,a){"use strict";a.r(e);var i=a("5dd8"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},e714:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-59f4a6c2]{padding:%?24?%;text-align:center;box-sizing:border-box}.content uni-button[data-v-59f4a6c2]{float:right}.content .ListView[data-v-59f4a6c2]{height:360px}.gcs[data-v-59f4a6c2]{width:80%;height:300px;position:fixed;background-color:#ececec;left:0;right:0;top:0;bottom:0;margin:auto;border-radius:10px;box-sizing:border-box;z-index:99}.gcs .title_Top[data-v-59f4a6c2]{width:100%;height:50px;padding:0 10px;line-height:50px;box-sizing:border-box;text-align:center;line-height:50px;font-size:20px;font-weight:700}.gcs .gcss[data-v-59f4a6c2]{width:100%;height:200px;overflow:auto}.gcs .gcss .kuang[data-v-59f4a6c2]{width:80%;height:33px;background-color:#fff;margin-left:10%;margin-top:3px;line-height:33px;padding-left:10px;box-sizing:border-box;border-radius:3px}.gcs .gcss .kuang uni-switch[data-v-59f4a6c2]{float:right}.gcs .gcss .bottomone[data-v-59f4a6c2]{width:100%;height:85%}.gcs .gcss .bottomone .topone[data-v-59f4a6c2]{width:100%;height:30px;padding:10px}.gcs .gcss .bottomone .topone uni-button[data-v-59f4a6c2]{float:right;margin-right:30px}.gcs .gcss .bottomone .bomone[data-v-59f4a6c2]{width:100%;height:calc(100% - 30px);padding-bottom:20px;box-sizing:border-box}.basicinformation[data-v-59f4a6c2]{width:95%;background:#fff;margin:auto;border-radius:10px;margin-top:10px;margin-left:2.5%;margin-bottom:10px;border:1px solid silver;float:left}.basicinformation .Task1[data-v-59f4a6c2]{width:95%;margin:auto;box-sizing:border-box;background-color:#007aff}.basicinformation .Task1 .head[data-v-59f4a6c2]{width:80%;height:25px;background-color:#007aff;color:#fff;border-radius:5px;font-weight:700;overflow:hidden;line-height:25px;padding-left:15px;box-sizing:border-box;font-size:13px;float:left}.basicinformation .Task1 .ps[data-v-59f4a6c2]{width:25px;height:25px;line-height:25px;box-sizing:border-box;float:left;margin-left:20px}.basicinformation .Task1 .ps uni-image[data-v-59f4a6c2]{display:block;width:25px;height:25px;float:left}.basicinformation .Task1 .EquPhotos[data-v-59f4a6c2]{width:100%;height:115px;background-color:#d8d8d8;border-radius:10px;float:left;margin-top:10px;margin-bottom:10px;padding:5px;box-sizing:border-box}.basicinformation .Task1 .EquPhotos .texts[data-v-59f4a6c2]{width:100%;height:20px;line-height:20px;font-size:13px;font-weight:700}.basicinformation .Task1 .EquPhotos .texts uni-image[data-v-59f4a6c2]{width:20px;height:20px;float:right}.basicinformation .Task1 .EquPhotos .pushimg[data-v-59f4a6c2]{width:100%;height:105px}.basicinformation .Task1 .EquPhotos .pushimg .left[data-v-59f4a6c2]{width:105px;height:105px;float:left;margin-left:20px;overflow:hidden}.basicinformation .Task1 .EquPhotos .pushimg .left .images[data-v-59f4a6c2]{width:100%;height:100%}.basicinformation .Task1 .EquPhotos .pushimg .right[data-v-59f4a6c2]{margin-left:60px}.basicinformation .text[data-v-59f4a6c2]{width:95%;height:30px;display:block;margin:auto;line-height:30px}.basicinformation .text .span[data-v-59f4a6c2]{width:100px;display:block;height:100%;float:left}.basicinformation .texts[data-v-59f4a6c2]{width:95%;display:block;margin:auto;line-height:30px}.basicinformation .texts .span[data-v-59f4a6c2]{width:100px;display:block;height:100%;float:left}.cu-form-group[data-v-59f4a6c2]{width:95%;background:#fff;border:1px solid #ccc;box-sizing:border-box;padding:10px;color:#999;margin:auto;border-radius:10px;margin-top:10px;float:left;margin-left:2.5%}.cu-form-group .title[data-v-59f4a6c2]{width:100px;display:block;color:#333}.cu-form-group uni-input[data-v-59f4a6c2]{font-size:14px}',""]),t.exports=e},fc48:function(t,e,a){"use strict";a.r(e);var i=a("768f"),n=a("a7cf");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("3eb7");var r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"4ed92bb2",null,!1,i["a"],void 0);e["default"]=s.exports}}]);