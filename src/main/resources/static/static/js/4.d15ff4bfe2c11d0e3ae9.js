webpackJsonp([4],{"8+FI":function(t,e,s){"use strict";var n=new(s("7+uW").default);e.a=n},Ap3z:function(t,e){},MpTN:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("8+FI"),i={data:function(){return{collapse:!1,fullscreen:!1,name:"linxin",message:2}},computed:{username:function(){var t=localStorage.getItem("ms_username");return t||this.name}},methods:{handleCommand:function(t){this.$router.push("login"),"editpassword"==t&&this.$router.push("/editpassword")},collapseChage:function(){this.collapse=!this.collapse,n.a.$emit("collapse",this.collapse)},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},mounted:function(){document.body.clientWidth<1300&&this.collapseChage()}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[s("i",{staticClass:"el-icon-menu"})]),t._v(" "),s("div",{staticClass:"logo"},[t._v("微服务可靠性运行平台")]),t._v(" "),s("div",{staticClass:"header-right"},[s("div",{staticClass:"header-user-con"},[s("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[s("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[s("i",{staticClass:"el-icon-rank"})])],1),t._v(" "),s("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[t._v("\n            "+t._s(t.username)+" "),s("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{divided:"",command:"editpassword"}},[t._v("修改密码")]),t._v(" "),s("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[t._v("退出登录")])],1)],1)],1)])])},staticRenderFns:[]};var a=[{icon:"el-icon-lx-friendadd",index:"system_namespace",title:"系统命名空间",subs:[{index:"system_namespace",title:"系统命名空间"}]},{icon:"el-icon-lx-searchlist",index:"system_pod_info",title:"系统Pod信息",subs:[{index:"system_pod_info",title:"系统Pod信息"}]},{icon:"el-icon-lx-searchlist",index:"service_inquiry",title:"服务查询",subs:[{index:"service_inquiry",title:"服务查询"}]},{icon:"el-icon-setting",index:"service_management",title:"服务管理",subs:[{index:"service_setting",title:"服务设置"},{index:"multi-version_control",title:"多版本控制"},{index:"service_priority_setting",title:"服务优先级设置"},{index:"failure_recovery",title:"故障恢复"}]}],o={data:function(){return{collapse:!1,item:a}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},mounted:function(){},methods:{isLogin:function(){this.$axios.get("/isLogin").then(function(t){0===t&&route.push("/login")}).catch(function(t){console.log("error",t)})}},created:function(){var t=this;n.a.$on("collapse",function(e){t.collapse=e})}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.item,function(e){return[[s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[s("i",{class:e.icon}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._v(" "),t._l(e.subs,function(e){return[e.subs?s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[s("i",{class:e.icon}),t._v(" "),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._v(" "),t._l(e.subs,function(e,n){return s("el-menu-item",{key:n,attrs:{index:e.index}},[t._v(t._s(e.title))])})],2):s("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v(t._s(e.title))])]})],2)]]})],2)],1)},staticRenderFns:[]};var r={data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],s=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];s?e.path===this.$route.fullPath&&this.$router.push(s.path):this.$router.push("/")},closeAll:function(){this.tagsList=[],this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter(function(e){return e.path===t.$route.fullPath});this.tagsList=e},setTags:function(t){this.tagsList.some(function(e){return e.path===t.fullPath})||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.matched[1].components.default.name})),n.a.$emit("tags",this.tagsList)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){this.setTags(this.$route)}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showTags?s("div",{staticClass:"tags"},[s("ul",t._l(t.tagsList,function(e,n){return s("li",{key:n,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[s("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v("\n              "+t._s(e.title)+"\n          ")]),t._v(" "),s("span",{staticClass:"tags-li-icon",on:{click:function(e){t.closeTags(n)}}},[s("i",{staticClass:"el-icon-close"})])],1)})),t._v(" "),s("div",{staticClass:"tags-close-box"},[s("el-dropdown",{on:{command:t.handleTags}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n        标签选项"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),t._v(" "),s("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},staticRenderFns:[]};var d={data:function(){return{tagsList:[],collapse:!1}},components:{vHead:s("VU/8")(i,l,!1,function(t){s("jOWt")},"data-v-42d2f39c",null).exports,vSidebar:s("VU/8")(o,c,!1,function(t){s("dPXT")},"data-v-9ff3abce",null).exports,vTags:s("VU/8")(r,u,!1,function(t){s("Ap3z")},null,null).exports},created:function(){var t=this;n.a.$on("collapse",function(e){t.collapse=e}),n.a.$on("tags",function(e){for(var s=[],n=0,i=e.length;n<i;n++)e[n].name&&s.push(e[n].name);t.tagsList=s})},mounted:function(){},methods:{getAreaList:function(){}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("v-head"),this._v(" "),e("v-sidebar"),this._v(" "),e("div",{staticClass:"content-box",class:{"content-collapse":this.collapse}},[e("v-tags"),this._v(" "),e("div",{staticClass:"content"},[e("transition",{attrs:{name:"move",mode:"out-in"}},[e("keep-alive",{attrs:{include:this.tagsList}},[e("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]},h=s("VU/8")(d,m,!1,null,null,null);e.default=h.exports},dPXT:function(t,e){},jOWt:function(t,e){}});