webpackJsonp([13],{"6XMT":function(e,t){},SzPm:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s("Dd8w"),a=s.n(l),r=s("mvHQ"),o=s.n(r),n=s("ZoQJ"),i=[{label:"系统人员",value:"1"},{label:"代理商",value:2},{label:"销售员",value:3}],m={data:function(){return{addDialog:!1,editDialog:!1,delVisible:!1,preeDialog:!1,isVisibleAgent:!1,systemTypeOptions:i,total:0,setRuleForm:{systemNo:"",systemRealName:"",roleIds:[]},options:[{value:"1",label:"可用"},{value:"0",label:"不可用"}],value:"",agentOptions:[],agentValue:"",formInline:{systemNo:"",systemRealName:"",systemUserStatus:"",adCode:[],current:1},rules:{systemNo:[{required:!0,message:"请输入人员编号",trigger:"blur"}],systemUserName:[{required:!0,message:"请输入登录名",trigger:"blur"}],systemRealName:[{required:!0,message:"请输入人员名称",trigger:"blur"}],systemPhone:[{required:!0,message:"请输入人员电话",trigger:"blur"}],systemUserPassword:[{required:!0,message:"请输入密码",trigger:"blur"}],systemUserStatus:[{required:!0,message:"请选择人员状态",trigger:"change"}],systemSex:[{required:!0,message:"请选择人员性别",trigger:"change"}]},addRuleForm:{systemNo:"",systemRealName:"",systemPhone:"",systemUserPassword:"",systemUserStatus:"",systemSex:"",adCode:[],systemUserName:""},ruleForm:{},tableData:[],areaList:[],roleOption:[]}},created:function(){this.getSystemUser(),this.getAreaTree(),this.getRoles(),this.getAgentOptions()},methods:{getRoles:function(){var e=this;this.$axios.get("/role/getRoles").then(function(t){e.roleOption=JSON.parse(o()(t).replace(/roleId/g,"value").replace(/name/g,"label"))})},getSystemUser:function(){var e=this,t=JSON.parse(o()(this.formInline));t.adCode=t.adCode.join(","),this.$axios.get("/systemUserInfo/getAllCanSeeSystemUsers",{params:t}).then(function(t){var s=t.records.map(function(e){var t=[],s=[];return e.roles.forEach(function(e){t.push(e.roleId),s.push(e.name)}),t=t.join(","),s=s.join(","),a()({roleIds:t,names:s},e)});e.tableData=s,e.total=t.total})},handleAddPermission:function(e,t){this.setRuleForm.systemNo=t.systemNo,this.setRuleForm.systemRealName=t.systemRealName,this.setRuleForm.systemUserID=t.systemUserID,this.setRuleForm.roleIds=t.roleIds.split(",").map(function(e){return Number(e)}),this.preeDialog=!0},handleSystemTypeChange:function(e){3===e&&(this.isVisibleAgent=!0)},handleEdit:function(e,t){if(this.idx=e,this.ruleForm=t,"string"==typeof t.adCode){var s=t.adCode.split(",").map(function(e){return Number(e)});this.ruleForm.adCode=s}this.isVisibleAgent=!1,3===t.systemType&&(this.isVisibleAgent=!0),this.editDialog=!0},getAreaTree:function(){var e=this;this.$axios.get("/area/getTree").then(function(t){e.areaList=t.result})},getAgentOptions:function(){var e=this;this.$axios.get("/systemUserInfo/getAllAgent").then(function(t){e.agentOptions=t.records})},onSubmit:function(){this.getSystemUser()},handleChange:function(e){console.log(e)},handleAdd:function(){this.isVisibleAgent=!1,3===this.addRuleForm.systemType&&(this.isVisibleAgent=!0),this.addDialog=!0},handleCurrentChange:function(e){this.formInline.current=e,this.getSystemUser()},submitForm:function(e){var t=this;if("setRuleForm"!==e)this.$refs[e].validate(function(s){if(s){var l={};"ruleForm"===e?(delete(l=t.ruleForm).ids,delete l.names,delete l.roles):l=t.addRuleForm;var a=JSON.parse(o()(l));a.adCode=a.adCode.join(","),t.$axios.post("/systemUserInfo/addSUser",a).then(function(e){0===e.code?(Object(n.d)("添加成功",{type:"success"}),t.editDialog=!1,t.addDialog=!1,t.getSystemUser()):Object(n.d)(e.errMsg,{type:"error"})})}});else{var s=JSON.parse(o()(this.setRuleForm));this.$axios.get("/role/bindRole",{params:{systemUserID:this.setRuleForm.systemUserID,roleIds:s.roleIds.join(",")}}).then(function(e){t.$message({message:"授权成功",type:"success"}),t.preeDialog=!1,t.getSystemUser()})}},resetForm:function(e){this.$refs[e].resetFields()},handleDelete:function(e,t){this.idx=e,this.row=t,this.delVisible=!0},deleteRow:function(){var e=this;this.$axios.get("/systemUserInfo/deleteSystemUser",{params:{systemUserID:this.row.systemUserID}}).then(function(t){e.tableData.splice(e.idx,1),e.$message.success("删除成功"),e.delVisible=!1})}}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"handle-box"},[s("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[s("el-form-item",{attrs:{label:"人员编号"}},[s("el-input",{attrs:{placeholder:"请输入人员编号"},model:{value:e.formInline.systemNo,callback:function(t){e.$set(e.formInline,"systemNo",t)},expression:"formInline.systemNo"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"人员名称"}},[s("el-input",{attrs:{placeholder:"请输入人员名称"},model:{value:e.formInline.systemRealName,callback:function(t){e.$set(e.formInline,"systemRealName",t)},expression:"formInline.systemRealName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"人员状态"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formInline.systemUserStatus,callback:function(t){e.$set(e.formInline,"systemUserStatus",t)},expression:"formInline.systemUserStatus"}},e._l(e.options,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),s("el-form-item",{attrs:{label:"所属区域"}},[s("el-cascader",{attrs:{options:e.areaList},on:{change:e.handleChange},model:{value:e.formInline.adCode,callback:function(t){e.$set(e.formInline,"adCode",t)},expression:"formInline.adCode"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1),e._v(" "),s("el-button",{staticClass:"right",attrs:{type:"primary",icon:"add"},on:{click:e.handleAdd}},[e._v("增加")])],1)],1),e._v(" "),s("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[s("el-table-column",{attrs:{width:"50",type:"index",label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.$index+10*(e.formInline.current-1)+1))])]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"systemNo",label:"人员编号",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{prop:"systemRealName",label:"人员名称",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{label:"人员类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(1===t.row.systemType?"系统人员":2===t.row.systemType?"代理商":3===t.row.systemType?"销售员":"")+"\n        ")]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"systemSex",label:"性别",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(0===t.row.systemUserStatus?"不可用":"可用"))]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"adCode",label:"区域编号",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{prop:"systemPhone",label:"电话",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{prop:"systemUserPassword",label:"密码",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{prop:"names",label:"用户角色",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(s){e.handleDelete(t.$index,t.row)}}},[e._v("删除")]),e._v(" "),s("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(s){e.handleEdit(t.$index,t.row)}}},[e._v("修改")]),e._v(" "),s("el-button",{staticClass:"warning",attrs:{type:"text",icon:"el-icon-setting"},on:{click:function(s){e.handleAddPermission(t.$index,t.row)}}},[e._v("授权")])]}}])})],1),e._v(" "),s("div",{staticClass:"pagination"},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"增加人员",visible:e.addDialog},on:{close:function(t){e.resetForm("addRuleForm")},"update:visible":function(t){e.addDialog=t}}},[s("el-form",{ref:"addRuleForm",staticClass:"demo-form-inline",attrs:{inline:!0,rules:e.rules,"label-width":"100px",model:e.addRuleForm}},[s("el-form-item",{attrs:{label:"人员名称",prop:"systemRealName"}},[s("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入人员名称"},model:{value:e.addRuleForm.systemRealName,callback:function(t){e.$set(e.addRuleForm,"systemRealName",t)},expression:"addRuleForm.systemRealName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"人员编号",prop:"systemNo"}},[s("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入人员编号"},model:{value:e.addRuleForm.systemNo,callback:function(t){e.$set(e.addRuleForm,"systemNo",t)},expression:"addRuleForm.systemNo"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"人员类型",prop:"systemType"}},[s("el-select",{staticClass:"handle-input",attrs:{placeholder:"请选择人员类型"},on:{change:function(t){e.handleSystemTypeChange(e.ruleForm.systemType)}},model:{value:e.addRuleForm.systemType,callback:function(t){e.$set(e.addRuleForm,"systemType",t)},expression:"addRuleForm.systemType"}},e._l(e.systemTypeOptions,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),s("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.isVisibleAgent,expression:"isVisibleAgent"}],attrs:{label:"所属代理商"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addRuleForm.parentId,callback:function(t){e.$set(e.addRuleForm,"parentId",t)},expression:"addRuleForm.parentId"}},e._l(e.agentOptions,function(e){return s("el-option",{key:e.parentId,attrs:{label:e.systemRealName,value:e.parentId}})}))],1),s("br"),e._v(" "),s("el-form-item",{attrs:{label:"电话",prop:"systemPhone"}},[s("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入人员电话"},model:{value:e.addRuleForm.systemPhone,callback:function(t){e.$set(e.addRuleForm,"systemPhone",t)},expression:"addRuleForm.systemPhone"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"登录名",prop:"systemUserName"}},[s("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入登录名"},model:{value:e.addRuleForm.systemUserName,callback:function(t){e.$set(e.addRuleForm,"systemUserName",t)},expression:"addRuleForm.systemUserName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"systemUserPassword"}},[s("el-input",{staticClass:"handle-input",attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.addRuleForm.systemUserPassword,callback:function(t){e.$set(e.addRuleForm,"systemUserPassword",t)},expression:"addRuleForm.systemUserPassword"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"性别",prop:"systemSex"}},[s("el-select",{staticClass:"handle-input",attrs:{placeholder:"请选择性别",clearable:""},model:{value:e.addRuleForm.systemSex,callback:function(t){e.$set(e.addRuleForm,"systemSex",t)},expression:"addRuleForm.systemSex"}},[s("el-option",{attrs:{label:"男",value:1}}),e._v(" "),s("el-option",{attrs:{label:"女",value:0}})],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"人员状态",prop:"systemUserStatus"}},[s("el-select",{staticClass:"handle-input",attrs:{clearable:"",placeholder:"请选择人员状态"},model:{value:e.addRuleForm.systemUserStatus,callback:function(t){e.$set(e.addRuleForm,"systemUserStatus",t)},expression:"addRuleForm.systemUserStatus"}},e._l(e.options,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),s("el-form-item",{attrs:{label:"所属区域",prop:"adCode"}},[s("el-cascader",{staticClass:"handle-input",attrs:{clearable:"",options:e.areaList,placeholder:"搜索地名","show-all-levels":!1,filterable:""},model:{value:e.addRuleForm.adCode,callback:function(t){e.$set(e.addRuleForm,"adCode",t)},expression:"addRuleForm.adCode"}})],1),e._v(" "),s("br"),e._v(" "),s("el-form-item",{staticStyle:{"margin-left":"100px"}},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("addRuleForm")}}},[e._v("确定")]),e._v(" "),s("el-button",{on:{click:function(t){e.resetForm("addRuleForm")}}},[e._v("重置")])],1)],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"修改人员",visible:e.editDialog},on:{close:function(t){e.resetForm("ruleForm")},"update:visible":function(t){e.editDialog=t}}},[s("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{inline:!0,rules:e.rules,"label-width":"100px",model:e.ruleForm}},[s("el-form-item",{attrs:{label:"人员编号",prop:"systemNo"}},[s("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入人员编号"},model:{value:e.ruleForm.systemNo,callback:function(t){e.$set(e.ruleForm,"systemNo",t)},expression:"ruleForm.systemNo"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"人员名称",prop:"systemRealName"}},[s("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入人员名称"},model:{value:e.ruleForm.systemRealName,callback:function(t){e.$set(e.ruleForm,"systemRealName",t)},expression:"ruleForm.systemRealName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"人员类型",prop:"systemType"}},[s("el-select",{staticClass:"handle-input",attrs:{placeholder:"请选择人员类型"},on:{change:function(t){e.handleSystemTypeChange(e.ruleForm.systemType)}},model:{value:e.ruleForm.systemType,callback:function(t){e.$set(e.ruleForm,"systemType",t)},expression:"ruleForm.systemType"}},e._l(e.systemTypeOptions,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),s("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.isVisibleAgent,expression:"isVisibleAgent"}],attrs:{label:"所属代理商",prop:"parentId"}},[s("el-select",{staticClass:"handle-input",attrs:{placeholder:"请选择所属代理商"},model:{value:e.ruleForm.parentId,callback:function(t){e.$set(e.ruleForm,"parentId",t)},expression:"ruleForm.parentId"}},e._l(e.agentOptions,function(e){return s("el-option",{key:e.parentId,attrs:{label:e.systemRealName,value:e.parentId}})}))],1),s("br"),e._v(" "),s("el-form-item",{attrs:{label:"电话",prop:"systemPhone"}},[s("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入人员电话"},model:{value:e.ruleForm.systemPhone,callback:function(t){e.$set(e.ruleForm,"systemPhone",t)},expression:"ruleForm.systemPhone"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"登录名",prop:"systemUserName"}},[s("el-input",{staticClass:"handle-input",attrs:{readonly:"",placeholder:"请输入登录名"},model:{value:e.ruleForm.systemUserName,callback:function(t){e.$set(e.ruleForm,"systemUserName",t)},expression:"ruleForm.systemUserName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"systemUserPassword"}},[s("el-input",{staticClass:"handle-input",attrs:{type:"password",placeholder:"请输入人员电话"},model:{value:e.ruleForm.systemUserPassword,callback:function(t){e.$set(e.ruleForm,"systemUserPassword",t)},expression:"ruleForm.systemUserPassword"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"性别",prop:"systemSex"}},[s("el-select",{staticClass:"handle-input",attrs:{placeholder:"请选择性别"},model:{value:e.ruleForm.systemSex,callback:function(t){e.$set(e.ruleForm,"systemSex",t)},expression:"ruleForm.systemSex"}},[s("el-option",{attrs:{label:"男",value:1}}),e._v(" "),s("el-option",{attrs:{label:"女",value:0}})],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"人员状态",prop:"systemUserStatus"}},[s("el-select",{staticClass:"handle-input",attrs:{placeholder:"请选择人员状态"},model:{value:e.ruleForm.systemUserStatus,callback:function(t){e.$set(e.ruleForm,"systemUserStatus",t)},expression:"ruleForm.systemUserStatus"}},e._l(e.options,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),s("el-form-item",{attrs:{label:"所属区域",prop:"adCode"}},[s("el-cascader",{staticClass:"handle-input",attrs:{options:e.areaList,placeholder:"搜索地名","show-all-levels":!1,filterable:""},model:{value:e.ruleForm.adCode,callback:function(t){e.$set(e.ruleForm,"adCode",t)},expression:"ruleForm.adCode"}})],1),e._v(" "),s("br"),e._v(" "),s("el-form-item",{staticStyle:{"margin-left":"100px"}},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确定")]),e._v(" "),s("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[s("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)]),e._v(" "),s("el-dialog",{attrs:{title:"角色授权",width:"400px",visible:e.preeDialog},on:{close:function(t){e.resetForm("setRuleForm")},"update:visible":function(t){e.preeDialog=t}}},[s("el-form",{ref:"setRuleForm",attrs:{model:e.setRuleForm,rules:e.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"人员编号",prop:"systemNo"}},[s("el-input",{attrs:{readonly:""},model:{value:e.setRuleForm.systemNo,callback:function(t){e.$set(e.setRuleForm,"systemNo",t)},expression:"setRuleForm.systemNo"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"人员名称",prop:"systemRealName"}},[s("el-input",{attrs:{readonly:""},model:{value:e.setRuleForm.systemRealName,callback:function(t){e.$set(e.setRuleForm,"systemRealName",t)},expression:"setRuleForm.systemRealName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"角色选择"}},[s("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.setRuleForm.roleIds,callback:function(t){e.$set(e.setRuleForm,"roleIds",t)},expression:"setRuleForm.roleIds"}},e._l(e.roleOption,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("setRuleForm")}}},[e._v("确定")]),e._v(" "),s("el-button",{on:{click:function(t){e.resetForm("setRuleForm")}}},[e._v("重置")])],1)],1)],1)],1)},staticRenderFns:[]};var d=s("VU/8")(m,u,!1,function(e){s("6XMT")},"data-v-cb9acb4c",null);t.default=d.exports},mvHQ:function(e,t,s){e.exports={default:s("qkKv"),__esModule:!0}},qkKv:function(e,t,s){var l=s("FeBl"),a=l.JSON||(l.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}}});