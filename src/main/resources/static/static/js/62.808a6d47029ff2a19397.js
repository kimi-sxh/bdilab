webpackJsonp([62],{RedM:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={data:function(){return{tableData:[{key:"平台费用",value:"20000.00",path:"/plat_charge2"},{key:"平台提成",value:"20000.00",path:"/plat_increase2"},{key:"平台总计",value:"40000.00"},{key:"代理商保证金",value:"50000.00",path:"/agent_bail"},{key:"代理商返佣金",value:"20000.00",path:"/agent_return_money"},{key:"金额总计",value:"50000.00"}],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},area:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}],formInline:{code:"",name:"",ytstatus:"",selectedArea:[],datatime:""}}},methods:{onSubmit:function(){console.log("submit!")},areaChange:function(e){console.log(e)},goPage:function(e){this.$router.push(e)}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"选择日期"}},[a("el-date-picker",{staticStyle:{width:"470px"},attrs:{type:"datetimerange","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.formInline.datatime,callback:function(t){e.$set(e.formInline,"datatime",t)},expression:"formInline.datatime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商家编号"}},[a("el-input",{attrs:{placeholder:"请输入商家编号"},model:{value:e.formInline.code,callback:function(t){e.$set(e.formInline,"code",t)},expression:"formInline.code"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商家名称"}},[a("el-input",{attrs:{placeholder:"请输入商家名称"},model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name",t)},expression:"formInline.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"业态状态"}},[a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"请选择"},model:{value:e.formInline.ytstatus,callback:function(t){e.$set(e.formInline,"ytstatus",t)},expression:"formInline.ytstatus"}},[a("el-option",{key:"1",attrs:{label:"川菜",value:"川菜"}}),e._v(" "),a("el-option",{key:"2",attrs:{label:"粤菜",value:"粤菜"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"所属区域"}},[a("el-cascader",{staticClass:"handle-select mr10",attrs:{options:e.area},on:{change:e.areaChange},model:{value:e.formInline.selectedArea,callback:function(t){e.$set(e.formInline,"selectedArea",t)},expression:"formInline.selectedArea"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),e._v(" "),a("hr",{staticStyle:{"margin-bottom":"20px"}}),e._v(" "),a("div",[e._l(e.tableData,function(t,l){return a("el-row",{key:l,attrs:{gutter:20,align:"middle",type:"flex"}},[a("el-col",{attrs:{span:8,push:5}},[a("span",[e._v(e._s(t.key))])]),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{readonly:""},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})],1),e._v(" "),a("el-col",{attrs:{span:8}},[t.path?a("el-button",{attrs:{icon:"el-icon-search",size:"mini",type:"info"},on:{click:function(a){e.goPage(t.path)}}},[e._v("详情")]):e._e()],1)],1)}),e._v(" "),a("el-row",{attrs:{align:"middle",type:"flex"}},[a("el-col",{attrs:{span:15,offset:4}},[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":20,percentage:45,color:"#E6A23C"}})],1)],1)],2)],1)])])},staticRenderFns:[]};var i=a("VU/8")(l,n,!1,function(e){a("V+IY")},"data-v-135100de",null);t.default=i.exports},"V+IY":function(e,t){}});