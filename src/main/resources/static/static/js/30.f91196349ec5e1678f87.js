webpackJsonp([30],{Ftvx:function(e,t){},zwDX:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={data:function(){return{formInline:{datatime:"",money:"",count:""},addDialog:!1,addRuleForm:{code:"",redPacket:"",count:"",datetime:"",remark:"",radio:""},rules:{code:[{required:!0,message:"请输入策略编号",trigger:"blur"}],redPacket:[{required:!0,message:"请输入红包金额",trigger:"blur"}],count:[{required:!0,message:"请选择红包个数",trigger:"change"}],datetime:[{required:!0,message:"请选择时间",trigger:"change"}]},tableData:[{code:"001",redPacket:"500.00",count:"18",datetime:"2020-06-01",remark:""}]}},methods:{changeMerchant:function(){},handleAdd:function(){this.addDialog=!0},onSubmit:function(){console.log("submit!")},handleCurrentChange:function(){},submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"商家编号"}},[e._v("R110103001200023")]),e._v(" "),a("el-form-item",{attrs:{label:"商家名称"}},[e._v("陕西小吃")]),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.changeMerchant}},[e._v("切换商家")])],1)],1),e._v(" "),a("hr",{staticStyle:{"margin-bottom":"10px"}}),e._v(" "),a("el-button",{staticClass:"right",attrs:{type:"primary",icon:"add"},on:{click:e.handleAdd}},[e._v("新增")]),e._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"发送时间"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择发送红包时间"},model:{value:e.formInline.datatime,callback:function(t){e.$set(e.formInline,"datatime",t)},expression:"formInline.datatime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"发送金额"}},[a("el-input",{attrs:{placeholder:"请输入发送金额"},model:{value:e.formInline.money,callback:function(t){e.$set(e.formInline,"money",t)},expression:"formInline.money"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"发送人数"}},[a("el-input",{attrs:{placeholder:"请输入发送人数"},model:{value:e.formInline.count,callback:function(t){e.$set(e.formInline,"count",t)},expression:"formInline.count"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{width:50,fixed:"",type:"index",label:"序号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"code",label:"人员编号","show-overflow-tooltip":"",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"redPacket",label:"红包金额",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"count",label:"性别",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"datetime",label:"时间",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注",align:"center"}})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增操作员",width:"500px",visible:e.addDialog},on:{"update:visible":function(t){e.addDialog=t}}},[a("el-form",{ref:"addRuleForm",attrs:{model:e.addRuleForm,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"商家编号"}},[e._v("R110103001200023")]),e._v(" "),a("el-form-item",{attrs:{label:"商家名称"}},[e._v("陕西小吃")]),e._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("el-radio",{attrs:{label:"1"},model:{value:e.addRuleForm.radio,callback:function(t){e.$set(e.addRuleForm,"radio",t)},expression:"addRuleForm.radio"}},[e._v("每单固定金额")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.addRuleForm.radio,callback:function(t){e.$set(e.addRuleForm,"radio",t)},expression:"addRuleForm.radio"}},[e._v("按账单金额的百分比")])],1),e._v(" "),a("el-form-item",{attrs:{label:"策略编号",prop:"code"}},[a("el-input",{model:{value:e.addRuleForm.code,callback:function(t){e.$set(e.addRuleForm,"code",t)},expression:"addRuleForm.code"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"红包金额",prop:"redPacket"}},[a("el-input",{model:{value:e.addRuleForm.redPacket,callback:function(t){e.$set(e.addRuleForm,"redPacket",t)},expression:"addRuleForm.redPacket"}},[2==e.addRuleForm.radio?a("span",{attrs:{slot:"suffix"},slot:"suffix"},[e._v("%")]):e._e()])],1),e._v(" "),a("el-form-item",{attrs:{label:"红包个数",prop:"count"}},[a("el-input",{model:{value:e.addRuleForm.count,callback:function(t){e.$set(e.addRuleForm,"count",t)},expression:"addRuleForm.count"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"时间",prop:"datetime"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择发送红包时间"},model:{value:e.formInline.datatime,callback:function(t){e.$set(e.formInline,"datatime",t)},expression:"formInline.datatime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{model:{value:e.addRuleForm.remark,callback:function(t){e.$set(e.addRuleForm,"remark",t)},expression:"addRuleForm.remark"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("addRuleForm")}}},[e._v("确定")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("addRuleForm")}}},[e._v("重置")])],1)],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(l,r,!1,function(e){a("Ftvx")},"data-v-87deb6c6",null);t.default=o.exports}});