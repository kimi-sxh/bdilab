webpackJsonp([67],{"7/NA":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={data:function(){return{pswTimeout:0,formInline:{phoneNum:"",verifyCode:""}}},methods:{onSubmit:function(){var e=this;this.pswTimeout=60;var n=setInterval(function(){e.pswTimeout>0?e.pswTimeout--:clearInterval(n)},1e3);this.$axios.get("/test/testMessage",{params:{phone:this.formInline.phoneNum}}).then(function(n){console.log(n),e.formInline.verifyCode=n.mesCode}).catch(function(e){})}}},i={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"container"},[t("div",{staticClass:"handle-box"},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[t("el-form-item",{attrs:{label:"手机号"}},[t("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.formInline.phoneNum,callback:function(n){e.$set(e.formInline,"phoneNum",n)},expression:"formInline.phoneNum"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"验证码"}},[t("el-input",{attrs:{readonly:"",placeholder:"请比对验证码"},model:{value:e.formInline.verifyCode,callback:function(n){e.$set(e.formInline,"verifyCode",n)},expression:"formInline.verifyCode"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary",disabled:e.pswTimeout>0||""==e.formInline.phoneNum},on:{click:e.onSubmit}},[e._v("测试生成 "+e._s(e.pswTimeout>0?"("+e.pswTimeout+")":""))])],1)],1)],1)])])},staticRenderFns:[]},l=t("VU/8")(o,i,!1,null,null,null);n.default=l.exports}});