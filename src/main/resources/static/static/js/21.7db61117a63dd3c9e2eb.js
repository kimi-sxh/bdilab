webpackJsonp([21],{AuNd:function(e,t){},TKVZ:function(e,t){},olHi:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"form",staticClass:"father",attrs:{model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:e.form.manager_name,callback:function(t){e.$set(e.form,"manager_name",t)},expression:"form.manager_name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电话"}},[a("el-input",{model:{value:e.form.manager_tel,callback:function(t){e.$set(e.form,"manager_tel",t)},expression:"form.manager_tel"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"账号"}},[a("el-input",{model:{value:e.form.manager_count,callback:function(t){e.$set(e.form,"manager_count",t)},expression:"form.manager_count"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{model:{value:e.form.manager_password,callback:function(t){e.$set(e.form,"manager_password",t)},expression:"form.manager_password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"具有的角色",width:"100"}}),e._v(" "),a("el-form-item",e._l(e.chexboxdata,function(t){return a("dd",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"item.selected"}],attrs:{type:"checkbox"},domProps:{value:t.roles_id,checked:Array.isArray(t.selected)?e._i(t.selected,t.roles_id)>-1:t.selected},on:{click:e.change,change:function(a){var n=t.selected,l=a.target,i=!!l.checked;if(Array.isArray(n)){var o=t.roles_id,r=e._i(n,o);l.checked?r<0&&e.$set(t,"selected",n.concat([o])):r>-1&&e.$set(t,"selected",n.slice(0,r).concat(n.slice(r+1)))}else e.$set(t,"selected",i)}}}),e._v(e._s(t.roles_name)+"\n            ")])}))],1),e._v(" "),a("span",{staticClass:"dialog-footer center",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancel}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1)},staticRenderFns:[]};var l={name:"sys_role_set",data:function(){return{edit_tips:!1,lines:0,tableData:[],cropImg:"",cur_page:1,multipleSelection:[],select_word:"",del_list:[],is_search:!1,editVisible:!1,addVisible:!1,delVisible:!1,role_manager_add:!0,role_manager_del:!0,role_manager_edit:!0,form:{manager_name:"",manager_tel:"",manager_count:"",manager_password:"",manager_roles:""},idx:-1}},created:function(){this.getData()},computed:{data:function(){var e=this;return this.tableData.filter(function(t){for(var a=0;a<e.del_list.length;a++)if(t.name===e.del_list[a].name){!0;break}})}},components:{role_manager_pop:a("VU/8")({name:"sys_role_pop",data:function(){return{visible:!1,chexboxdata:null}},props:["form"],created:function(){this.getData()},computed:{},components:{},methods:{saveEdit:function(){this.listen()},cancel:function(){this.listen()},listen:function(){this.$emit("listenToChildEvent","edit||add")},getData:function(){var e=this;e.$axios({method:"get",url:"./static/json_data/roles.json",dataType:"json",crossDomain:!0,cache:!1}).then(function(t){e.chexboxdata=t.data.list,e.chexboxdata.forEach(function(t){t.selected=!1,e.form.manager_roles&&e.form.manager_roles.length>0&&e.form.manager_roles.forEach(function(e){t.roles_id==e.roles_id&&(t.selected=!0)})})})},change:function(){}}},n,!1,function(e){a("TKVZ")},"data-v-d9e47898",null).exports},methods:{handleCurrentChange:function(e){this.cur_page=e,this.getData()},getData:function(){var e=this;e.$axios({method:"get",url:"./static/json_data/role_manager_concat.json",dataType:"json",crossDomain:!0,cache:!1}).then(function(t){var a=t.data.list;a.forEach(function(e,t){e.roles="",e.manager_roles.forEach(function(t){t.roles_name+=" ",e.roles+=t.roles_name})}),e.tableData=a,console.log(e.tableData),e.lines=t.data.lines})},search:function(){this.is_search=!0},filterTag:function(e,t){return t.tag===e},handleEdit:function(e,t){this.idx=e;var a=this.tableData[e];this.form={manager_name:a.manager_name,manager_tel:a.manager_tel,manager_count:a.manager_count,manager_password:a.manager_password,manager_roles:a.manager_roles},this.editVisible=!0},handleAdd:function(){this.form={manager_name:"",manager_tel:"",manager_count:"",manager_password:"",manager_roles:""},this.addVisible=!0},handleDelete:function(e,t){this.idx=e,this.delVisible=!0},handleSelectionChange:function(e){this.multipleSelection=e},dataFromChild:function(e){this.seeVisible=!1,this.editVisible=!1,this.addVisible=!1,"see"!=e&&(this.edit_tips=!0)},deleteRow:function(){this.tableData.splice(this.idx,1),this.$message.success("删除成功"),this.delVisible=!1},editbtn:function(){this.edit_tips=!1}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[e._v("管理员和角色信息")])],1)],1),e._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[e.role_manager_add?a("el-button",{staticClass:"handle-del mr10 right",attrs:{type:"primary",icon:"add"},on:{click:function(t){e.handleAdd()}}},[e._v("添加\n            ")]):e._e(),e._v(" "),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"输入姓名或名称或电话"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")])],1),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"manager_name",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"manager_tel",label:"电话"}}),e._v(" "),a("el-table-column",{attrs:{prop:"manager_count",label:"账号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"manager_password",label:"密码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"roles",label:"具有的角色",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.role_manager_edit?a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑\n                    ")]):e._e(),e._v(" "),e.role_manager_del?a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除\n                    ")]):e._e()]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.lines},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"600px"},on:{"update:visible":function(t){e.editVisible=t}}},[a("role_manager_pop",{attrs:{form:e.form},on:{listenToChildEvent:e.dataFromChild}})],1),e._v(" "),a("el-dialog",{attrs:{title:"添加",visible:e.addVisible,width:"600px"},on:{"update:visible":function(t){e.addVisible=t}}},[a("role_manager_pop",{attrs:{form:e.form},on:{listenToChildEvent:e.dataFromChild}})],1),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[a("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.edit_tips,width:"300px",center:""},on:{"update:visible":function(t){e.edit_tips=t}}},[a("div",{staticClass:"del-dialog-cnt"},[e._v("如果添加或者修改了数据，请刷新页面")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.editbtn}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var o=a("VU/8")(l,i,!1,function(e){a("AuNd")},"data-v-36448475",null);t.default=o.exports}});