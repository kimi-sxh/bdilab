webpackJsonp([70],{rh4d:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{editorOption:{placeholder:""},total:0,fileList:[],disabled:!1,editDialog:!1,addDialog:!1,ruleForm:{agreementFileName:"",agreementFilePath:"",agreementName:"",agreementNo:"",agreementStatus:"",agreementId:""},addRuleForm:{agreementFileName:"",agreementFilePath:"",agreementName:"",agreementNo:"",agreementStatus:""},rules:{agreementNo:[{required:!0,message:"请输入协议编号",trigger:"blur"}],agreementName:[{required:!0,message:"请输入协议名称",trigger:"blur"}],agreementFileName:[{required:!0,message:"请上传文件",trigger:"blur"}],agreementStatus:[{required:!0,message:"请选择状态",trigger:"change"}]},formInline:{agreementName:"",agreementStatus:"",current:1},delVisible:!1,tableData:[]}},created:function(){this.getAgreement()},methods:{fileUploadSuccess:function(e,t,l){l=[t],this.fileList=l,this.addDialog?(this.addRuleForm.agreementFilePath=t.response,this.addRuleForm.agreementFileName=t.name):(this.ruleForm.agreementFilePath=t.response,this.ruleForm.agreementFileName=t.name)},getAgreement:function(){var e=this;this.$axios.get("/agreement/list",{params:this.formInline}).then(function(t){console.log(t),e.tableData=t.records,e.total=t.total})},handleAdd:function(){this.fileList=[],this.addDialog=!0},onSubmit:function(){this.getAgreement()},handleEdit:function(e,t){this.idx=e,this.ruleForm=t,this.fileList=[{name:t.agreementFileName,url:t.agreementFilePath}],this.editDialog=!0},submitForm:function(e){var t=this;this.$refs[e].validate(function(l){if(l){var a={};a="ruleForm"===e?t.ruleForm:t.addRuleForm,t.$axios.get("/agreement/add",{params:a}).then(function(l){t.$message({message:"ruleForm"===e?"修改成功":"新增成功",type:"success"}),t.editDialog=!1,t.addDialog=!1,t.getAgreement()})}})},resetForm:function(e){this.$refs[e].resetFields()},handleDelete:function(e,t){this.idx=e,this.row=t,this.delVisible=!0},deleteRow:function(){var e=this;this.$axios.get("/agreement/delete",{params:{agreementId:this.row.agreementId}}).then(function(t){e.tableData.splice(e.idx,1),e.$message.success("删除成功"),e.delVisible=!1})},handleCurrentChange:function(e){this.formInline.current=e,this.getAgreement()}}},r={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"container"},[l("div",{staticClass:"handle-box"},[l("el-button",{staticClass:"handle-del mr10 right",attrs:{type:"primary",icon:"add"},on:{click:e.handleAdd}},[e._v("新增")]),e._v(" "),l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[l("el-form-item",{attrs:{label:"名称"}},[l("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.formInline.agreementName,callback:function(t){e.$set(e.formInline,"agreementName",t)},expression:"formInline.agreementName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"状态"}},[l("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"请选择"},model:{value:e.formInline.agreementStatus,callback:function(t){e.$set(e.formInline,"agreementStatus",t)},expression:"formInline.agreementStatus"}},[l("el-option",{attrs:{label:"可用",value:1}}),e._v(" "),l("el-option",{attrs:{label:"不可用",value:0}})],1)],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),e._v(" "),l("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{width:50,type:"index",label:"序号",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"agreementNo",label:"协议编号",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"agreementName",label:"协议名称",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"agreementFileName",label:"内容",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"agreementStatus",label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(1===t.row.agreementStatus?"可用":"不可用"))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(l){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),l("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(l){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),l("div",{staticClass:"pagination"},[l("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[l("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)]),e._v(" "),l("el-dialog",{attrs:{title:"修改协议",width:"500px",visible:e.editDialog},on:{close:function(t){e.resetForm("ruleForm")},"update:visible":function(t){e.editDialog=t}}},[l("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"协议编号",prop:"agreementNo"}},[l("el-input",{model:{value:e.ruleForm.agreementNo,callback:function(t){e.$set(e.ruleForm,"agreementNo",t)},expression:"ruleForm.agreementNo"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"协议名称",prop:"agreementName"}},[l("el-input",{model:{value:e.ruleForm.agreementName,callback:function(t){e.$set(e.ruleForm,"agreementName",t)},expression:"ruleForm.agreementName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"状态",prop:"agreementStatus"}},[l("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"请选择"},model:{value:e.ruleForm.agreementStatus,callback:function(t){e.$set(e.ruleForm,"agreementStatus",t)},expression:"ruleForm.agreementStatus"}},[l("el-option",{attrs:{label:"可用",value:1}}),e._v(" "),l("el-option",{attrs:{label:"不可用",value:0}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"协议内容上传"}},[l("el-upload",{staticClass:"upload-demo",attrs:{"on-success":e.fileUploadSuccess,drag:"","file-list":e.fileList,multiple:!1,action:e.$axios.defaults.baseURL+"/fileController/uploadFile",name:"file"}},[l("i",{staticClass:"el-icon-upload"}),e._v(" "),l("div",{staticClass:"el-upload__text"},[e._v("\n            将文件拖到此处，或\n            "),l("em",[e._v("点击上传")])])])],1),e._v(" "),l("el-form-item",{attrs:{label:"协议内容",prop:"agreementFileName"}},[l("el-input",{attrs:{readonly:""},model:{value:e.ruleForm.agreementFileName,callback:function(t){e.$set(e.ruleForm,"agreementFileName",t)},expression:"ruleForm.agreementFileName"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),l("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"新增协议",width:"500px",visible:e.addDialog},on:{close:function(t){e.resetForm("addRuleForm")},"update:visible":function(t){e.addDialog=t}}},[l("el-form",{ref:"addRuleForm",attrs:{model:e.addRuleForm,rules:e.rules,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"协议编号",prop:"agreementNo"}},[l("el-input",{model:{value:e.addRuleForm.agreementNo,callback:function(t){e.$set(e.addRuleForm,"agreementNo",t)},expression:"addRuleForm.agreementNo"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"协议名称",prop:"agreementName"}},[l("el-input",{model:{value:e.addRuleForm.agreementName,callback:function(t){e.$set(e.addRuleForm,"agreementName",t)},expression:"addRuleForm.agreementName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"状态",prop:"agreementStatus"}},[l("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"请选择"},model:{value:e.addRuleForm.agreementStatus,callback:function(t){e.$set(e.addRuleForm,"agreementStatus",t)},expression:"addRuleForm.agreementStatus"}},[l("el-option",{attrs:{label:"可用",value:1}}),e._v(" "),l("el-option",{attrs:{label:"不可用",value:0}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"协议内容上传"}},[l("el-upload",{staticClass:"upload-demo",attrs:{"on-success":e.fileUploadSuccess,drag:"","file-list":e.fileList,multiple:!1,action:e.$axios.defaults.baseURL+"/fileController/uploadFile",name:"file"}},[l("i",{staticClass:"el-icon-upload"}),e._v(" "),l("div",{staticClass:"el-upload__text"},[e._v("\n            将文件拖到此处，或\n            "),l("em",[e._v("点击上传")])])])],1),e._v(" "),l("el-form-item",{attrs:{label:"协议内容",prop:"agreementFileName"}},[l("el-input",{attrs:{readonly:""},model:{value:e.addRuleForm.agreementFileName,callback:function(t){e.$set(e.addRuleForm,"agreementFileName",t)},expression:"addRuleForm.agreementFileName"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("addRuleForm")}}},[e._v("提交")]),e._v(" "),l("el-button",{on:{click:function(t){e.resetForm("addRuleForm")}}},[e._v("重置")])],1)],1)],1)],1)},staticRenderFns:[]},n=l("VU/8")(a,r,!1,null,null,null);t.default=n.exports}});