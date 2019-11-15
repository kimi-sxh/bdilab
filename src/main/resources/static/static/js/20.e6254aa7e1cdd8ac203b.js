webpackJsonp([20],{OU1T:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l("mvHQ"),a=l.n(r),s=l("ZoQJ"),o=[{label:"集团",value:1}],n={data:function(){return{addDialog:!1,editDialog:!1,delVisible:!1,preeDialog:!1,systemTypeOptions:o,total:0,setRuleForm:{userName:"",roleIds:[]},options:[{value:"1",label:"可用"},{value:"0",label:"不可用"}],value:"",agentOptions:[],agentValue:"",formInline:{userName:"",userStatus:"",userTelephone:"",organizateName:null,current:1},rules:{userName:[{required:!0,message:"请输入用户名",trigger:"blur"}],userTelephone:[{required:!0,message:"请输入人员电话",trigger:"blur"}],userPassword:[{required:!0,message:"请输入密码",trigger:"blur"}],userStatus:[{required:!0,message:"请选择人员状态",trigger:"change"}],userType:[{required:!0,message:"请选择人员类型",trigger:"change"}],organizateName:[{required:!0,message:"请输入组织名称",trigger:"change"}]},addRuleForm:{userName:"",userTelephone:"",userPassword:"",userStatus:"",userType:null},ruleForm:{},tableData:[],roleOption:[]}},created:function(){this.getSystemUser(),this.getRoles()},methods:{getRoles:function(){var e=this;this.$axios.get("/role/getRoles").then(function(t){e.roleOption=JSON.parse(a()(t).replace(/roleId/g,"value").replace(/name/g,"label"))})},getSystemUser:function(){var e=this;this.$axios.get("/userInfo/getAllUserInfoForGroup",this.formInline).then(function(t){e.tableData=t.records,e.total=t.total})},handleAddPermission:function(e,t){var l=this;this.setRuleForm.userName=t.userName,this.setRuleForm.userID=t.userID,this.$axios.get("/role/queryRByRoleId?userId="+t.userID).then(function(e){var t=e.map(function(e){return e.roleId});l.setRuleForm.roleIds=t.split(",").map(function(e){return Number(e)}),console.log(l.setRuleForm.roleIds,t)}),this.preeDialog=!0},handleEdit:function(e,t){this.idx=e,this.ruleForm=t,this.editDialog=!0},query:function(){this.getSystemUser()},handleAdd:function(){this.addDialog=!0},handleCurrentChange:function(e){this.formInline.current=e,this.getSystemUser()},submitForm:function(e){var t=this;if("setRuleForm"!==e)"ruleForm"!==e?this.$refs[e].validate(function(e){e&&t.$axios.post("/userInfo/addRUser",t.addRuleForm).then(function(e){0===e.code?(Object(s.e)("添加成功",{type:"success"}),t.addDialog=!1,t.getSystemUser()):Object(s.e)(e.errMsg,{type:"error"})})}):this.$refs[e].validate(function(e){e&&t.$axios.post("/userInfo/addRUser",t.ruleForm).then(function(e){0===e.code?(Object(s.e)(e.mes,{type:"success"}),t.editDialog=!1,t.getSystemUser()):Object(s.e)(e.mes,{type:"error"})})});else{var l=JSON.parse(a()(this.setRuleForm));this.$axios.get("/role/bindRoleForOrganizate",{params:{userID:this.setRuleForm.userID,roleIds:l.roleIds.join(",")}}).then(function(e){t.$message({message:"授权成功",type:"success"}),t.preeDialog=!1,t.getSystemUser()})}},resetForm:function(e){this.$refs[e].resetFields()},handleDelete:function(e,t){this.idx=e,this.row=t,this.delVisible=!0},deleteRow:function(){var e=this;this.$axios.get("/userInfo/deleteRUserById/"+this.row.userID).then(function(t){e.$message.success("删除成功"),e.delVisible=!1,e.query()})}}},i={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"container"},[l("div",{staticClass:"handle-box"},[l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[l("el-form-item",{attrs:{label:"用户名"}},[l("el-input",{attrs:{placeholder:"请输入人员编号"},model:{value:e.formInline.userName,callback:function(t){e.$set(e.formInline,"userName",t)},expression:"formInline.userName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"人员状态"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formInline.userStatus,callback:function(t){e.$set(e.formInline,"userStatus",t)},expression:"formInline.userStatus"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"手机号"}},[l("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.formInline.userTelephone,callback:function(t){e.$set(e.formInline,"userTelephone",t)},expression:"formInline.userTelephone"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"组织名称"}},[l("el-input",{attrs:{placeholder:"请输入组织名称"},model:{value:e.formInline.organizateName,callback:function(t){e.$set(e.formInline,"organizateName",t)},expression:"formInline.organizateName"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.query}},[e._v("查询")])],1),e._v(" "),l("el-button",{staticClass:"right",attrs:{type:"primary",icon:"add"},on:{click:e.handleAdd}},[e._v("增加")])],1)],1),e._v(" "),l("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{width:"50",type:"index",label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.$index+10*(e.formInline.current-1)+1))])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"userName",label:"用户名",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"人员状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(0===t.row.userStatus?"不可用":"可用"))]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"organizateName",label:"组织名称",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"userTelephone",label:"电话",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"userPassword",label:"密码",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"userID",label:"用户编号",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"用户类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(1===t.row.userType?"集团":""))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(l){e.handleDelete(t.$index,t.row)}}},[e._v("删除")]),e._v(" "),l("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(l){e.handleEdit(t.$index,t.row)}}},[e._v("修改")]),e._v(" "),l("el-button",{staticClass:"warning",attrs:{type:"text",icon:"el-icon-setting"},on:{click:function(l){e.handleAddPermission(t.$index,t.row)}}},[e._v("授权")])]}}])})],1),e._v(" "),l("div",{staticClass:"pagination"},[l("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"增加人员",visible:e.addDialog},on:{close:function(t){e.resetForm("addRuleForm")},"update:visible":function(t){e.addDialog=t}}},[l("el-form",{ref:"addRuleForm",staticClass:"demo-form-inline",attrs:{inline:!0,rules:e.rules,"label-width":"100px",model:e.addRuleForm}},[l("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[l("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入用户名"},model:{value:e.addRuleForm.userName,callback:function(t){e.$set(e.addRuleForm,"userName",t)},expression:"addRuleForm.userName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"密码",prop:"userPassword"}},[l("el-input",{staticClass:"handle-input",attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.addRuleForm.userPassword,callback:function(t){e.$set(e.addRuleForm,"userPassword",t)},expression:"addRuleForm.userPassword"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"人员类型",prop:"userType"}},[l("el-select",{staticClass:"handle-input",attrs:{placeholder:"请选择人员类型"},model:{value:e.addRuleForm.userType,callback:function(t){e.$set(e.addRuleForm,"userType",t)},expression:"addRuleForm.userType"}},e._l(e.systemTypeOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"手机号",prop:"userTelephone"}},[l("el-input",{staticClass:"handle-input",attrs:{placeholder:"手机号"},model:{value:e.addRuleForm.userTelephone,callback:function(t){e.$set(e.addRuleForm,"userTelephone",t)},expression:"addRuleForm.userTelephone"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"组织名称",prop:"organizateName"}},[l("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入组织名称"},model:{value:e.addRuleForm.organizateName,callback:function(t){e.$set(e.addRuleForm,"organizateName",t)},expression:"addRuleForm.organizateName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"人员状态",prop:"userStatus"}},[l("el-select",{staticClass:"handle-input",attrs:{clearable:"",placeholder:"请选择人员状态"},model:{value:e.addRuleForm.userStatus,callback:function(t){e.$set(e.addRuleForm,"userStatus",t)},expression:"addRuleForm.userStatus"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),l("br"),e._v(" "),l("el-form-item",{staticStyle:{"margin-left":"100px"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("addRuleForm")}}},[e._v("确定")]),e._v(" "),l("el-button",{on:{click:function(t){e.resetForm("addRuleForm")}}},[e._v("重置")])],1)],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"修改人员",visible:e.editDialog},on:{close:function(t){e.resetForm("ruleForm")},"update:visible":function(t){e.editDialog=t}}},[l("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{inline:!0,rules:e.rules,"label-width":"100px",model:e.ruleForm}},[l("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[l("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入用户名"},model:{value:e.ruleForm.userName,callback:function(t){e.$set(e.ruleForm,"userName",t)},expression:"ruleForm.userName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"密码",prop:"userPassword"}},[l("el-input",{staticClass:"handle-input",attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.addRuleForm.userPassword,callback:function(t){e.$set(e.addRuleForm,"userPassword",t)},expression:"addRuleForm.userPassword"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"人员类型",prop:"userType"}},[l("el-select",{staticClass:"handle-input",attrs:{placeholder:"请选择人员类型"},model:{value:e.ruleForm.userType,callback:function(t){e.$set(e.ruleForm,"userType",t)},expression:"ruleForm.userType"}},e._l(e.systemTypeOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"手机号",prop:"userTelephone"}},[l("el-input",{staticClass:"handle-input",attrs:{placeholder:"手机号"},model:{value:e.ruleForm.userTelephone,callback:function(t){e.$set(e.ruleForm,"userTelephone",t)},expression:"ruleForm.userTelephone"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"组织名称",prop:"organizateName"}},[l("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入组织名称"},model:{value:e.ruleForm.organizateName,callback:function(t){e.$set(e.ruleForm,"organizateName",t)},expression:"ruleForm.organizateName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"人员状态",prop:"userStatus"}},[l("el-select",{staticClass:"handle-input",attrs:{clearable:"",placeholder:"请选择人员状态"},model:{value:e.ruleForm.userStatus,callback:function(t){e.$set(e.ruleForm,"userStatus",t)},expression:"ruleForm.userStatus"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),l("br"),e._v(" "),l("el-form-item",{staticStyle:{"margin-left":"100px"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确定")]),e._v(" "),l("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[l("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)]),e._v(" "),l("el-dialog",{attrs:{title:"角色授权",width:"400px",visible:e.preeDialog},on:{close:function(t){e.resetForm("setRuleForm")},"update:visible":function(t){e.preeDialog=t}}},[l("el-form",{ref:"setRuleForm",attrs:{model:e.setRuleForm,rules:e.rules,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[l("el-input",{attrs:{readonly:""},model:{value:e.setRuleForm.userName,callback:function(t){e.$set(e.setRuleForm,"userName",t)},expression:"setRuleForm.userName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"角色选择"}},[l("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.setRuleForm.roleIds,callback:function(t){e.$set(e.setRuleForm,"roleIds",t)},expression:"setRuleForm.roleIds"}},e._l(e.roleOption,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("setRuleForm")}}},[e._v("确定")]),e._v(" "),l("el-button",{on:{click:function(t){e.resetForm("setRuleForm")}}},[e._v("重置")])],1)],1)],1)],1)},staticRenderFns:[]};var u=l("VU/8")(n,i,!1,function(e){l("QZzh")},"data-v-5f19fa26",null);t.default=u.exports},QZzh:function(e,t){},mvHQ:function(e,t,l){e.exports={default:l("qkKv"),__esModule:!0}},qkKv:function(e,t,l){var r=l("FeBl"),a=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}}});