webpackJsonp([44],{KvAM:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{PayStatus:!1,editDialog:!1,delVisible:!1,ruleForm:{code:"",mcname:"",knifeMoney:"",foodCode:"",consumeMoney:"",royaltyType:"",payStartDate:"",returnCashStartDate:""},rules:{foodCode:[{required:!0,message:"请输入餐品编号",trigger:"blur"}],payStartDate:[{required:!0,message:"请选择付费时间",trigger:"change"}],returnCashStartDate:[{required:!0,message:"请选择到期时间",trigger:"change"}],royaltyType:[{required:!0,message:"请选择提成类型",trigger:"change"}],consumeMoney:[{required:!0,message:"请输入提成金额",trigger:"blur"}]},pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-6048e5),e.$emit("pick",[l,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-2592e6),e.$emit("pick",[l,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-7776e6),e.$emit("pick",[l,t])}}]},area:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}],formInline:{code:"",name:"",ytstatus:"",selectedArea:[],datatime:"",cusPhone:"",cusWxId:""},tableData:[{cusMark:"13803838330",code:"R123456789012345",mcname:"佰人王川菜",knifeMoney:"0.2",royaltyType:"年费",foodCode:"bill110100019290",consumeMoney:"200.00",payStartDate:"2019-06-01 12:50:20",returnCashStartDate:"2019-06-01 12:50:20"}]}},methods:{onSubmit:function(){console.log("submit!")},handleEdit:function(e,t){this.idx=e,this.ruleForm=this.tableData[e],this.editDialog=!0},handleDelete:function(e,t){this.idx=e,this.delVisible=!0},deleteRow:function(){this.tableData.splice(this.idx,1),this.$message.success("删除成功"),this.delVisible=!1},handleCurrentChange:function(){},areaChange:function(e){console.log(e)},submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}},r={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"container"},[l("div",{staticClass:"handle-box"},[l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,"label-width":"120px"}},[l("el-form-item",{attrs:{label:"选择日期"}},[l("el-date-picker",{staticStyle:{width:"490px"},attrs:{type:"datetimerange","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.formInline.datatime,callback:function(t){e.$set(e.formInline,"datatime",t)},expression:"formInline.datatime"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"商家编号"}},[l("el-input",{attrs:{placeholder:"请输入商家编号"},model:{value:e.formInline.code,callback:function(t){e.$set(e.formInline,"code",t)},expression:"formInline.code"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"商家名称"}},[l("el-input",{attrs:{placeholder:"请输入商家名称"},model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name",t)},expression:"formInline.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"业态状态"}},[l("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"请选择"},model:{value:e.formInline.ytstatus,callback:function(t){e.$set(e.formInline,"ytstatus",t)},expression:"formInline.ytstatus"}},[l("el-option",{key:"1",attrs:{label:"川菜",value:"川菜"}}),e._v(" "),l("el-option",{key:"2",attrs:{label:"粤菜",value:"粤菜"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"所属区域"}},[l("el-cascader",{staticClass:"handle-select mr10",attrs:{options:e.area},on:{change:e.areaChange},model:{value:e.formInline.selectedArea,callback:function(t){e.$set(e.formInline,"selectedArea",t)},expression:"formInline.selectedArea"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"潜在消费者电话"}},[l("el-input",{attrs:{placeholder:"请输入潜在消费者电话"},model:{value:e.formInline.cusPhone,callback:function(t){e.$set(e.formInline,"cusPhone",t)},expression:"formInline.cusPhone"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"潜在消费者微信"}},[l("el-input",{attrs:{placeholder:"请输入潜在消费者微信号"},model:{value:e.formInline.cusWxId,callback:function(t){e.$set(e.formInline,"cusWxId",t)},expression:"formInline.cusWxId"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),e._v(" "),l("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{width:50,fixed:"",type:"index",label:"序号",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"cusMark","min-width":"100px",label:"消费者标识",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"cusMark","min-width":"120px",label:"潜在消费者标识",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"code",label:"商家编号",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"mcname",label:"商家名称",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"foodCode",label:"餐品编号",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"consumeMoney",label:"消费金额",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"knifeMoney",label:"砍价金额",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"payStartDate",label:"结账时间",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"returnCashStartDate",label:"返现时间",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"180",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(l){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),l("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(l){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),l("div",{staticClass:"pagination"},[l("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"消费者信息修改",visible:e.editDialog},on:{"update:visible":function(t){e.editDialog=t}}},[l("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,inline:!0,rules:e.rules,"label-width":"120px"}},[l("el-form-item",{attrs:{label:"序号"}},[l("el-input",{attrs:{value:"1",readonly:""}})],1),e._v(" "),l("el-form-item",{attrs:{label:"商家编号",prop:"code"}},[l("el-input",{attrs:{readonly:""},model:{value:e.ruleForm.code,callback:function(t){e.$set(e.ruleForm,"code",t)},expression:"ruleForm.code"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"商家名称",prop:"mcname"}},[l("el-input",{attrs:{readonly:""},model:{value:e.ruleForm.mcname,callback:function(t){e.$set(e.ruleForm,"mcname",t)},expression:"ruleForm.mcname"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"餐品编号",prop:"foodCode"}},[l("el-input",{attrs:{readonly:""},model:{value:e.ruleForm.foodCode,callback:function(t){e.$set(e.ruleForm,"foodCode",t)},expression:"ruleForm.foodCode"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"消费金额",prop:"consumeMoney"}},[l("el-input",{attrs:{readonly:""},model:{value:e.ruleForm.consumeMoney,callback:function(t){e.$set(e.ruleForm,"consumeMoney",t)},expression:"ruleForm.consumeMoney"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"开始时间",prop:"payStartDate"}},[l("el-date-picker",{staticClass:"handle-select mr10",attrs:{type:"date",readonly:"",placeholder:"选择开始时间"},model:{value:e.ruleForm.payStartDate,callback:function(t){e.$set(e.ruleForm,"payStartDate",t)},expression:"ruleForm.payStartDate"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"结束时间",prop:"returnCashStartDate"}},[l("el-date-picker",{staticClass:"handle-select mr10",attrs:{type:"date",readonly:"",placeholder:"选择结束时间"},model:{value:e.ruleForm.returnCashStartDate,callback:function(t){e.$set(e.ruleForm,"returnCashStartDate",t)},expression:"ruleForm.returnCashStartDate"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"提成类型",prop:"royaltyType"}},[l("el-select",{staticClass:"handle-select mr10",attrs:{disabled:"",placeholder:"请选择"},model:{value:e.ruleForm.royaltyType,callback:function(t){e.$set(e.ruleForm,"royaltyType",t)},expression:"ruleForm.royaltyType"}},[l("el-option",{key:"1",attrs:{label:"优惠券提成",value:"优惠券提成"}}),e._v(" "),l("el-option",{key:"2",attrs:{label:"年费",value:"年费"}}),e._v(" "),l("el-option",{key:"3",attrs:{label:"返现提成",value:"返现提成"}})],1)],1),e._v(" "),l("br"),e._v(" "),l("el-form-item",{staticStyle:{"margin-left":"120px"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确定")]),e._v(" "),l("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[l("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var n=l("VU/8")(a,r,!1,function(e){l("xjTt")},"data-v-6699b78e",null);t.default=n.exports},xjTt:function(e,t){}});