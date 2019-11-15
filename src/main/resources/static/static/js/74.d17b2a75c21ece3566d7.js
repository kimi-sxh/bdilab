webpackJsonp([74],{YOFm:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={mounted:function(){this.getGroupOrganizationInit(),this.getAllGroups(),this.userType=localStorage.getItem("userType")},data:function(){return{loading:!1,userType:"",groupSelect:"",registStatus:"",totalCount:1,curentPage:1,editDialog:!1,ruleForm:{code:"",mcname:"",name:""},rules:{},tableData:[],restaurantId:"1",allGroups:[],options:[{value:"1",label:"已认领"},{value:"0",label:"未认领"}]}},methods:{remoteMethod:function(e){var t=this;""!==e?(this.loading=!0,setTimeout(function(){t.loading=!1,t.allGroups=t.list.filter(function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1})},200)):this.allGroups=[]},getAllGroups:function(){this.$axios({method:"get",url:"/group/queryAllGroup",dataType:"json",crossDomain:!0,cache:!1}).then(function(e){console.log(">>>res>",e)})},getGroupOrganization:function(){this.curentPage=curentPage,this.getGroupOrganizationInit()},getGroupOrganizationInit:function(){var e=this;this.$axios({method:"get",url:"/group/querySameRestaurantGroup?restaurantStatus="+this.registStatus+"&groupId="+this.groupSelect,dataType:"json",crossDomain:!0,cache:!1}).then(function(t){e.tableData=t.result,console.log(">>>tableData>",e.tableData)})},addGroupOrganization:function(){this.$axios({url:"/group/add",method:"post",data:{groupName:this.groupName,Id:this.Id},headers:{"Content-Type":"multipart/form-data"}}).then(function(e){console.log(">>>",e)})},onSubmit:function(){console.log("submit!")},handleCurrentChange:function(){},areaChange:function(e){console.log(e)},handleEdit:function(e,t){this.idx=e,this.ruleForm=this.tableData[e],this.editDialog=!0},submitForm:function(e){this.$refs[e].validate(function(e){})},resetForm:function(e){this.$refs[e].resetFields()}}},r={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"container"},[l("div",{staticClass:"handle-box"},[l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[l("el-form-item",{attrs:{label:"状态"}},[l("el-select",{attrs:{ha:"",placeholder:"请选择"},model:{value:e.registStatus,callback:function(t){e.registStatus=t},expression:"registStatus"}},e._l(e.options,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),l("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"1"===e.userType,expression:"userType === '1'"}],attrs:{label:"集团"}},[l("el-select",{attrs:{filterable:"",remote:"","remote-method":e.remoteMethod,loading:e.loading,placeholder:"请选择"},model:{value:e.groupSelect,callback:function(t){e.groupSelect=t},expression:"groupSelect"}},e._l(e.allGroups,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),e._v(" "),l("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{width:50,fixed:"",type:"index",fixed:"",label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.$index+10*(e.formInline.current-1)+1))])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"id",label:"商家编号","show-overflow-tooltip":"",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"principalName","min-width":"80px",label:"负责人名称",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"registStatus",label:"状态",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"brand",label:"商家名称",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"area",label:"所属区域",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"地址",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"100",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(l){e.handleEdit(t.$index,t.row)}}},[e._v("详情")])]}}])})],1),e._v(" "),l("div",{staticClass:"pagination"},[l("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.totalCount},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"商家审核",visible:e.editDialog},on:{"update:visible":function(t){e.editDialog=t}}},[l("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,inline:!0,rules:e.rules,"label-width":"120px"}},[l("el-form-item",{attrs:{label:"商家编号",prop:"id"}},[l("el-input",{attrs:{readonly:""},model:{value:e.ruleForm.id,callback:function(t){e.$set(e.ruleForm,"id",t)},expression:"ruleForm.id"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"商家名称",prop:"brand"}},[l("el-input",{attrs:{readonly:""},model:{value:e.ruleForm.mcname,callback:function(t){e.$set(e.ruleForm,"mcname",t)},expression:"ruleForm.mcname"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"负责人",prop:"principalName"}},[l("el-input",{attrs:{readonly:""},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),l("br"),e._v(" "),l("el-form-item",{staticStyle:{"margin-left":"120px"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("确认")]),e._v(" "),l("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1)},staticRenderFns:[]},o=l("VU/8")(a,r,!1,null,null,null);t.default=o.exports}});