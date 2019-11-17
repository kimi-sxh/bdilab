webpackJsonp([18],{"+o7y":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("ZoQJ"),i={data:function(){return{selectedMerchant:"",detailDialogVisible:!1,addDialogVisible:!1,detailForm:{},addForm:{},tableData:[],formInline:{name:null}}},mounted:function(){this.query()},methods:{query:function(){var e=this;this.$axios({methods:"get",url:"/pod/getNodes",params:this.formInline}).then(function(t){e.tableData=t}).catch(function(e){})},onDetailClick:function(e){var t=this;this.$axios({methods:"get",url:"/service/getAllInfo/"+e.name}).then(function(e){t.detailDialogVisible=!0;var l=e.apiVersion,a=e.state,i=e.metadata,o=e.spec,n=o.ports,r=o.clusterIP,s=i.namespace,c=null;n.length>0&&(c=n[0].port);var d={apiVersion:l,state:a,namespace:s,clusterIP:r,port:c};t.detailForm=d}).catch(function(e){})},onAddClick:function(){this.addDialogVisible=!0},handleAdd:function(){var e=this;this.$axios({methods:"get",url:"/service/createservice",params:this.addForm}).then(function(t){e.addDialogVisible=!1,Object(a.b)("操作成功！",{type:"success"}),e.query()}).catch(function(e){Object(a.b)("操作失败！",{type:"error"})})}}},o={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"container"},[l("div",{staticClass:"handle-box"},[l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"服务名称"}},[l("el-input",{model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name",t)},expression:"formInline.name"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.query}},[e._v("查询")])],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.onAddClick}},[e._v("创建")])],1)],1)],1),e._v(" "),l("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{width:50,fixed:"",type:"index",label:"序号",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"服务名称",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"version",label:"服务标签 ",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"state",label:"服务状态",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text"},on:{click:function(l){e.onDetailClick(t.row)}}},[l("i",{staticClass:"el-icon-info"},[e._v("详情")])])]}}])})],1),e._v(" "),l("el-dialog",{attrs:{title:"详情",visible:e.detailDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.detailDialogVisible=t}}},[l("el-form",{ref:"detailForm",attrs:{model:e.detailForm,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"版本信息:"}},[l("el-tag",[e._v(e._s(e.detailForm.apiVersion))])],1),e._v(" "),l("el-form-item",{attrs:{label:"服务状态:"}},[l("el-tag",[e._v(e._s(e.detailForm.state))])],1),e._v(" "),l("el-form-item",{attrs:{label:"命令空间:"}},[l("el-tag",[e._v(e._s(e.detailForm.namespace)+"\n          ")])],1),e._v(" "),l("el-form-item",{attrs:{label:"服务端口:"}},[l("el-tag",[e._v(e._s(e.detailForm.port))])],1),e._v(" "),l("el-form-item",{attrs:{label:"集群IP:"}},[l("el-tag",[e._v(e._s(e.detailForm.clusterIP))])],1)],1),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.detailDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.detailDialogVisible=!1}}},[e._v("确 定")])],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"添加",visible:e.addDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.addDialogVisible=t}}},[l("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"服务名称:"}},[l("el-input",{model:{value:e.addForm.srName,callback:function(t){e.$set(e.addForm,"srName",t)},expression:"addForm.srName"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"选择器key:"}},[l("el-input",{model:{value:e.addForm.lbkey,callback:function(t){e.$set(e.addForm,"lbkey",t)},expression:"addForm.lbkey"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"选择器value:"}},[l("el-input",{model:{value:e.addForm.lbvalue,callback:function(t){e.$set(e.addForm,"lbvalue",t)},expression:"addForm.lbvalue"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"容器端口:"}},[l("el-input",{model:{value:e.addForm.cnPort,callback:function(t){e.$set(e.addForm,"cnPort",t)},expression:"addForm.cnPort"}})],1)],1),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleAdd()}}},[e._v("确 定")])],1)],1)],1)])},staticRenderFns:[]};var n=l("VU/8")(i,o,!1,function(e){l("gq6l")},"data-v-49b47ec8",null);t.default=n.exports},gq6l:function(e,t){}});