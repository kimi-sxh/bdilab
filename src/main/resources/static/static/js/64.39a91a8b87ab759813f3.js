webpackJsonp([64],{lg4t:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=[{label:"未用",value:0},{label:"使用",value:1},{label:"停用",value:2}],n={created:function(){this.getRqCodeList(),this.queryUnitOptions()},data:function(){return{total:0,editDialog:!1,options:o,downloadDialogVisible:!1,downloadNum:1,ruleRqForm:{},unitOptions:[],rqRules:{qrNun:[{required:!0,message:"请输入二维码编号",trigger:"blur"}]},rules:{endNum:[{required:!0,message:"请输入生成数量",trigger:"blur"}],type:[{required:!0,message:"请选择二维码类型",trigger:"change"}]},rqcodeDialog:!1,ruleForm:{type:"",startNum:"",endNum:""},formInline:{qrNun:"",current:1,type:"",qrFlag:"",qrDownload:"",name:""},delVisible:!1,tableData:[],endId:0,startId:0}},methods:{getRqCodeList:function(){var e=this;this.$axios.get("/qrCode/listAll",{params:this.formInline}).then(function(t){var l=t.records;e.tableData=l,e.total=t.total}).catch(function(e){})},queryUnitOptions:function(){var e=this;this.$axios.get("/qrCode/getAllListName").then(function(t){e.unitOptions=t}).catch(function(e){})},handleAdd:function(){this.rqcodeDialog=!0},query:function(){var e=this;this.$axios.get("/qrCode/filterQrCode",{params:this.formInline}).then(function(t){var l=t.records;e.tableData=l,e.total=t.total}).catch(function(e){})},handleEdit:function(e,t){this.idx=e,this.ruleRqForm=t,this.editDialog=!0},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var l=parseInt(t.ruleForm.endNum);t.$axios.post("/qrCode/add","num="+l).then(function(e){if(0===e.code){t.$notify.success({title:"成功",message:e.message});var l=e.startId,o=e.endId;t.startId=l,t.endId=o,t.getRqCodeList()}else t.$notify.error({title:"失败",message:e.message})}).catch(function(e){console.log("error",e)})})},handleDownload:function(e){var t=this,l=this.downloadNum;if(l>0){this.downloadDialogVisible=!1;var o=this.$axios.defaults.baseURL+"/qrCode/downQrCodes/"+l;window.open(o).then(function(e){0===e.code?(t.$notify.success({title:"成功",message:e.message}),t.getRqCodeList()):t.$notify.error({title:"失败",message:e.message})}).catch(function(e){console.log("error",e)})}else this.$notify.warning({title:"warning",message:"请输入下载数量"})},submitRqForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$axios.post("/qrCode/updateById",t.ruleRqForm).then(function(e){0===e.code?(t.$notify.success({title:"成功",message:e.message}),t.editDialog=!1,t.query()):t.$notify.error({title:"失败",message:e.message})}).catch(function(e){console.log("error",e)})})},resetForm:function(e){this.$refs[e].resetFields()},handleCurrentChange:function(e){this.formInline.current=e,this.query()}}},r={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"container"},[l("div",{staticClass:"handle-box"},[l("el-row",[l("el-col",{attrs:{span:4}},[l("el-input",{attrs:{placeholder:"请输入二维码编号"},model:{value:e.formInline.qrNun,callback:function(t){e.$set(e.formInline,"qrNun",t)},expression:"formInline.qrNun"}})],1),e._v(" "),l("el-col",{attrs:{span:4}},[l("el-select",{attrs:{placeholder:"请选择二维码类型",clearable:""},model:{value:e.formInline.type,callback:function(t){e.$set(e.formInline,"type",t)},expression:"formInline.type"}},[l("el-option",{attrs:{label:"桌面二维码",value:"T"}}),e._v(" "),l("el-option",{attrs:{label:"人员二维码",value:"S"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:4}},[l("el-select",{attrs:{placeholder:"请选择使用状态",clearable:""},model:{value:e.formInline.qrFlag,callback:function(t){e.$set(e.formInline,"qrFlag",t)},expression:"formInline.qrFlag"}},[l("el-option",{attrs:{label:"使用",value:"1"}}),e._v(" "),l("el-option",{attrs:{label:"未用",value:"0"}}),e._v(" "),l("el-option",{attrs:{label:"停用",value:"2"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:4}},[l("el-select",{attrs:{filterable:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请选择使用单位"},model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name",t)},expression:"formInline.name"}},e._l(e.unitOptions,function(e){return l("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),l("el-col",{attrs:{span:4}},[l("el-select",{attrs:{placeholder:"请选择下载状态",clearable:""},model:{value:e.formInline.qrDownload,callback:function(t){e.$set(e.formInline,"qrDownload",t)},expression:"formInline.qrDownload"}},[l("el-option",{attrs:{label:"未下载",value:"0"}}),e._v(" "),l("el-option",{attrs:{label:"已下载",value:"1"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:3,offset:1}},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.query()}}},[e._v("查询")])],1)],1),e._v(" "),l("el-row",[l("el-col",{staticStyle:{"margin-top":"10px"},attrs:{span:4}},[l("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("生成")]),e._v(" "),l("el-button",{attrs:{type:"warning"},on:{click:function(t){e.downloadDialogVisible=!0}}},[e._v("下载")])],1)],1)],1),e._v(" "),l("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{width:50,type:"index",label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.$index+10*(e.formInline.current-1)+1))])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"qrNun",label:"二维码编号",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"二维码使用标记",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(0===t.row.qrFlag?"未用":1===t.row.qrFlag?"使用":"停用"))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"二维码下载状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(0===t.row.qrDownload?"未下载":"已下载"))]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"qrPath",label:"二维码存放路径",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"使用单位",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(l){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")])]}}])})],1),e._v(" "),l("div",{staticClass:"pagination"},[l("el-pagination",{attrs:{background:"","current-page":e.formInline.current,layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.formInline,"current",t)}}})],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"二维码生成",width:"400px",visible:e.rqcodeDialog},on:{"update:visible":function(t){e.rqcodeDialog=t}}},[l("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"生成类型",prop:"type"}},[l("el-select",{attrs:{placeholder:"请选择二维码类型"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[l("el-option",{attrs:{label:"桌面二维码",value:"桌面二维码"}}),e._v(" "),l("el-option",{attrs:{label:"人员二维码",value:"人员二维码"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"生成数量",prop:"endNum"}},[l("el-input",{model:{value:e.ruleForm.endNum,callback:function(t){e.$set(e.ruleForm,"endNum",t)},expression:"ruleForm.endNum"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"warning"},on:{click:function(t){e.downloadDialogVisible=!0}}},[e._v("一键下载")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("立即生成")]),e._v(" "),l("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"二维码修改",width:"400px",visible:e.editDialog},on:{"update:visible":function(t){e.editDialog=t}}},[l("el-form",{ref:"rqRuleForm",attrs:{model:e.ruleRqForm,rules:e.rqRules,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"二维码编号",prop:"qrNun"}},[l("el-input",{attrs:{disabled:""},model:{value:e.ruleRqForm.qrNun,callback:function(t){e.$set(e.ruleRqForm,"qrNun",t)},expression:"ruleRqForm.qrNun"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"使用标志",prop:"qrFlag"}},[l("el-select",{attrs:{placeholder:"请选择使用标志"},model:{value:e.ruleRqForm.qrFlag,callback:function(t){e.$set(e.ruleRqForm,"qrFlag",t)},expression:"ruleRqForm.qrFlag"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"使用单位",prop:"name"}},[l("el-input",{attrs:{disabled:""},model:{value:e.ruleRqForm.name,callback:function(t){e.$set(e.ruleRqForm,"name",t)},expression:"ruleRqForm.name"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitRqForm("rqRuleForm")}}},[e._v("提交")]),e._v(" "),l("el-button",{on:{click:function(t){e.resetForm("rqRuleForm")}}},[e._v("重置")])],1)],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"下载二维码",visible:e.downloadDialogVisible,width:"20%"},on:{"update:visible":function(t){e.downloadDialogVisible=t}}},[l("el-input",{attrs:{placeholder:"请输入下载数量"},model:{value:e.downloadNum,callback:function(t){e.downloadNum=t},expression:"downloadNum"}}),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.downloadDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleDownload("test")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]},a=l("VU/8")(n,r,!1,null,null,null);t.default=a.exports}});