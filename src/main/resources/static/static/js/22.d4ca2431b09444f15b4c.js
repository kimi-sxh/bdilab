webpackJsonp([22],{uuQS:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a={render:function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("div",{staticClass:"crumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",[t("i",{staticClass:"el-icon-lx-calendar"}),e._v(" 表单")]),e._v(" "),t("el-breadcrumb-item",[e._v("基本表单")])],1)],1),e._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"form-box"},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"表单名称"}},[t("el-input",{model:{value:e.form.name,callback:function(l){e.$set(e.form,"name",l)},expression:"form.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"选择器"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.region,callback:function(l){e.$set(e.form,"region",l)},expression:"form.region"}},[t("el-option",{key:"bbk",attrs:{label:"步步高",value:"bbk"}}),e._v(" "),t("el-option",{key:"xtc",attrs:{label:"小天才",value:"xtc"}}),e._v(" "),t("el-option",{key:"imoo",attrs:{label:"imoo",value:"imoo"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"日期时间"}},[t("el-col",{attrs:{span:11}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(l){e.$set(e.form,"date1",l)},expression:"form.date1"}})],1),e._v(" "),t("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),t("el-col",{attrs:{span:11}},[t("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.form.date2,callback:function(l){e.$set(e.form,"date2",l)},expression:"form.date2"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"城市级联"}},[t("el-cascader",{attrs:{options:e.options},model:{value:e.form.options,callback:function(l){e.$set(e.form,"options",l)},expression:"form.options"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"选择开关"}},[t("el-switch",{model:{value:e.form.delivery,callback:function(l){e.$set(e.form,"delivery",l)},expression:"form.delivery"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"多选框"}},[t("el-checkbox-group",{model:{value:e.form.type,callback:function(l){e.$set(e.form,"type",l)},expression:"form.type"}},[t("el-checkbox",{attrs:{label:"步步高",name:"type"}}),e._v(" "),t("el-checkbox",{attrs:{label:"小天才",name:"type"}}),e._v(" "),t("el-checkbox",{attrs:{label:"imoo",name:"type"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"单选框"}},[t("el-radio-group",{model:{value:e.form.resource,callback:function(l){e.$set(e.form,"resource",l)},expression:"form.resource"}},[t("el-radio",{attrs:{label:"步步高"}}),e._v(" "),t("el-radio",{attrs:{label:"小天才"}}),e._v(" "),t("el-radio",{attrs:{label:"imoo"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"文本框"}},[t("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:e.form.desc,callback:function(l){e.$set(e.form,"desc",l)},expression:"form.desc"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("表单提交")]),e._v(" "),t("el-button",[e._v("取消")])],1)],1)],1)])])},staticRenderFns:[]},o=t("VU/8")({name:"baseform",data:function(){return{options:[{value:"guangdong",label:"广东省",children:[{value:"guangzhou",label:"广州市",children:[{value:"tianhe",label:"天河区"},{value:"haizhu",label:"海珠区"}]},{value:"dongguan",label:"东莞市",children:[{value:"changan",label:"长安镇"},{value:"humen",label:"虎门镇"}]}]},{value:"hunan",label:"湖南省",children:[{value:"changsha",label:"长沙市",children:[{value:"yuelu",label:"岳麓区"}]}]}],form:{name:"",region:"",date1:"",date2:"",delivery:!0,type:["步步高"],resource:"小天才",desc:"",options:[]}}},methods:{onSubmit:function(){this.$message.success("提交成功！")}}},a,!1,null,null,null);l.default=o.exports}});