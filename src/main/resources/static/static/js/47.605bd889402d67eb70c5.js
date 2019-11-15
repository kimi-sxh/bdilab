webpackJsonp([47],{HV47:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("ZoQJ"),n={rNo:null,rName:null,principalName:null,address:null,detailAddress:null,brand:null},r={rNo:null,brand:null,operateType:null,address:null},o={data:function(){return{total:0,formData:Object(l.b)(n),dialogVisible:!1,formInline:r,typeOptions:[],tableData:[],areaList:[]}},mounted:function(){this.query(),this.getAreaTree(),this.getTypeTree()},methods:{getTypeTree:function(){var e=this;this.$axios.get("/operateType/listAllname").then(function(t){e.typeOptions=t})},query:function(){var e=this;this.$axios.post("/restaurantInfo/getRestaurantAndSalesByPage",this.formInline).then(function(t){var a=t.records;e.tableData=a,e.total=t.total}).catch(function(e){})},getAreaTree:function(){var e=this;this.$axios.get("/area/getTree").then(function(t){e.areaList=t.result})},handleCurrentChange:function(e){this.formInline.current=e,this.query()},handleCancel:function(){this.dialogVisible=!1},onUpdateClick:function(e){this.formData=Object(l.b)(e),this.dialogVisible=!0},handleUpdate:function(){var e=this,t=this.formData,a=t.brand,n=t.rId;this.$axios.get("/restaurantInfo/changeResBrand?rId="+n+"&&brand="+a).then(function(t){0===t.code?(Object(l.e)("修改成功！",{type:"success"}),e.dialogVisible=!1,e.query()):Object(l.e)("修改失败！",{type:"error"})}).catch(function(e){Object(l.e)("修改失败！",{type:"error"}),console.log("error",e)})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"商家编号"}},[a("el-input",{attrs:{placeholder:"请输入商家编号"},model:{value:e.formInline.rNo,callback:function(t){e.$set(e.formInline,"rNo",t)},expression:"formInline.rNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"品牌名称"}},[a("el-input",{attrs:{placeholder:"请输入品牌名称"},model:{value:e.formInline.brand,callback:function(t){e.$set(e.formInline,"brand",t)},expression:"formInline.brand"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"业态状态"}},[a("el-select",{staticClass:"handle-select mr10",attrs:{clearable:"",placeholder:"请选择"},model:{value:e.formInline.operateType,callback:function(t){e.$set(e.formInline,"operateType",t)},expression:"formInline.operateType"}},e._l(e.typeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.label}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"所属区域"}},[e.areaList?a("el-cascader",{attrs:{clearable:"",options:e.areaList},model:{value:e.formInline.address,callback:function(t){e.$set(e.formInline,"address",t)},expression:"formInline.address"}}):a("el-input",{model:{value:e.formInline.address,callback:function(t){e.$set(e.formInline,"address",t)},expression:"formInline.address"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.query}},[e._v("查询")])],1)],1)],1),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{width:"50",type:"index",label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.$index+10*(e.formInline.current-1)+1))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"rNo",label:"商家编号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"principalName",label:"负责人",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"rName",label:"商家名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"brand",label:"品牌名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"所属区域",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"detailAddress",label:"地址",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"130",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.onUpdateClick(t.row)}}},[e._v("编辑\n          ")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.formInline.current,layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.formInline,"current",t)}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"修改",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:22}},[a("el-form",{ref:"formData",attrs:{model:e.formData,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"商家编号:",prop:"rNo"}},[a("el-input",{attrs:{disabled:""},model:{value:e.formData.rNo,callback:function(t){e.$set(e.formData,"rNo",t)},expression:"formData.rNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商家名称:",prop:"rName"}},[a("el-input",{attrs:{disabled:""},model:{value:e.formData.rName,callback:function(t){e.$set(e.formData,"rName",t)},expression:"formData.rName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"品牌名称:",prop:"brand"}},[a("el-input",{attrs:{placeholder:"请输入品牌名称"},model:{value:e.formData.brand,callback:function(t){e.$set(e.formData,"brand",t)},expression:"formData.brand"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-left":"120px"}},[a("el-button",{on:{click:e.handleCancel}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleUpdate()}}},[e._v("确定")])],1)],1)],1)],1)],1)],1)])},staticRenderFns:[]};var s=a("VU/8")(o,i,!1,function(e){a("Yllv")},"data-v-4b5753e1",null);t.default=s.exports},Yllv:function(e,t){}});