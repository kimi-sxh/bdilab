webpackJsonp([40],{Zhx9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("woOf"),n=a.n(o),i=a("ZoQJ"),l={couponEffectiveDay:[{required:!0,message:"请输入领券后天数",trigger:"blur"}],reachAmount:[{required:!0,message:"请输入使用条件",trigger:"blur"}]},c={couponBagID:"",couponBagName:"",couponBagNote:"",rId:"",couponAndNumList:[]},r={data:function(){return{merchantCouponOptions:[],selectedCouponList:[],currentDialogVisible:!1,dialogStatus:"create",total:0,activeValue:1,discountAmount:"",inactiveValue:0,merchant:"测试商户",formData:Object(i.b)(c),detailFormData:{},detailDialogVisible:!1,dialogTitleMap:{update:"修改优惠券包",create:"新增优惠券包"},formInline:{couponBagName:"",pageSize:10,current:1},rules:l,tableData:[]}},mounted:function(){this.query(),this.queryMerchantCoupon(),this.merchant=localStorage.merchant_name},methods:{query:function(){var t=this,e=localStorage.selectedShop;this.$axios.get("couponTacticsBag/getCouponTacticsBagByPage?rId="+e,{params:this.formInline}).then(function(e){var a=e.records;t.tableData=a,t.total=e.total}).catch(function(t){})},handleCurrentChange:function(t){this.formInline.current=t,this.query()},handleBlur:function(){var t=this.discountAmount;this.formData.couponBagName=t+"元优惠券包"},queryMerchantCoupon:function(){var t=this,e=localStorage.selectedShop;this.$axios.get("/couponTactics/getCouponTactics?id="+e).then(function(e){var a=e.records;t.merchantCouponOptions=a}).catch(function(t){})},handleReturnSelect:function(t,e){var a=this,o=this.selectedCouponList;this.formData.couponAndNumList=[],o.map(function(t){var e=a.merchantCouponOptions.filter(function(e){return e.couponID===t})[0],o={couponId:e.couponID,couponName:e.couponName,num:1};a.formData.couponAndNumList.push(o)})},onDetailOpen:function(t){this.detailDialogVisible=!0,this.detailFormData=Object(i.b)(t),console.log("row",t)},onAddOrUpdateOpen:function(t,e){var a=this;if(this.dialogStatus=t,"create"===t)this.currentDialogVisible=!0,this.selectedCouponList=[],this.formData=Object(i.b)(c);else if("update"===t){this.currentDialogVisible=!0;var o=e.couponAndNumList;o&&0===this.selectedCouponList.length&&o.map(function(t){a.selectedCouponList.push(t.couponId)}),this.formData=n()({},e)}},handleCancel:function(){this.currentDialogVisible=!1},onDeleteClick:function(t){var e=this;this.$confirm("此操作将永久删除该内容, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.get("/couponTacticsBag/deleteCouponTacticsBagById?couponBagID="+t.couponBagID).then(function(t){0===t.code?(e.$notify.success({title:"成功",message:t.message}),e.query()):e.$notify.error({title:"失败",message:t.message})}).catch(function(t){})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleAdd:function(t){var e=this,a=this.formData;this.$refs[t].validate(function(t){if(t){var o=localStorage.selectedShop;e.formData.rId=o,e.$axios.post("/couponTacticsBag/addCouponTacticsBag",a).then(function(t){0===t.code?(e.$notify.success({title:"成功",message:t.Mes}),e.currentDialogVisible=!1,e.selectedCouponList=[],e.query()):e.$notify.error({title:"失败",message:t.Mes})}).catch(function(t){console.log("error",t)})}})},resetForm:function(t){this.$refs[t].resetFields()},handleStatusChange:function(t){var e=this;t.rId=localStorage.selectedShop,this.$axios.post("/couponTacticsBag/addCouponTacticsBag",t).then(function(t){if(0===t.code)e.$notify.success({title:"成功",message:"操作成功"}),e.query();else{e.$notify.error({title:"失败",message:"操作失败"});var a=e.inactiveValue;e.inactiveValue=e.activeValue,e.activeValue=a,e.query()}}).catch(function(t){e.query(),console.log("error",t)})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-button",{staticClass:"right",attrs:{type:"primary",icon:"add"},on:{click:function(e){t.onAddOrUpdateOpen("create")}}},[t._v("\n        添加\n      ")]),t._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[a("el-form-item",{attrs:{label:"优惠券包名称"}},[a("el-input",{attrs:{placeholder:"请输入优惠券包名称"},model:{value:t.formInline.couponBagName,callback:function(e){t.$set(t.formInline,"couponBagName",e)},expression:"formInline.couponBagName"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.query}},[t._v("查询")])],1)],1)],1),t._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{width:50,fixed:"",type:"index",label:"序号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.$index+10*(t.formInline.current-1)+1))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"couponBagName",label:"优惠券包名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"couponAndNumList",label:"优惠券包",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.couponAndNumList?e.row.couponAndNumList.map(function(t){return t.couponName}).join(";"):""))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态",width:"280",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":t.activeValue,"inactive-value":t.inactiveValue,"active-text":"使用","inactive-text":"停止","active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(a){t.handleStatusChange(e.row)}},model:{value:e.row.couponBagState,callback:function(a){t.$set(e.row,"couponBagState",a)},expression:"scope.row.couponBagState"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"280",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.onDetailOpen(e.row)}}},[a("i",{staticClass:"el-icon-add"},[t._v("详情")])]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.onAddOrUpdateOpen("update",e.row)}}},[a("i",{staticClass:"el-icon-edit"},[t._v("修改")])]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){t.onDeleteClick(e.row)}}},[a("i",{staticClass:"el-icon-delete"},[t._v("删除")])])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":t.formInline.current,layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.formInline,"current",e)}}})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.dialogTitleMap[t.dialogStatus],visible:t.currentDialogVisible},on:{"update:visible":function(e){t.currentDialogVisible=e}}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:22}},[a("el-form",{ref:"formData",attrs:{model:t.formData,rules:t.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"商家名称:",prop:"merchant"}},[a("el-input",{attrs:{disabled:""},model:{value:t.merchant,callback:function(e){t.merchant=e},expression:"merchant"}}),a("br")],1),t._v(" "),a("el-form-item",{attrs:{label:"优惠券包名称:",prop:"couponBagName"}},[a("el-input",{attrs:{disabled:""},model:{value:t.formData.couponBagName,callback:function(e){t.$set(t.formData,"couponBagName",e)},expression:"formData.couponBagName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"使用条件:",prop:"discountAmount"}},[a("el-input",{on:{blur:t.handleBlur},model:{value:t.discountAmount,callback:function(e){t.discountAmount=e},expression:"discountAmount"}}),a("br")],1),t._v(" "),a("el-form-item",{attrs:{label:"返券选择:",prop:"couponName"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:"请选择"},on:{change:function(e){t.handleReturnSelect()}},model:{value:t.selectedCouponList,callback:function(e){t.selectedCouponList=e},expression:"selectedCouponList"}},t._l(t.merchantCouponOptions,function(t){return a("el-option",{key:t.couponID,attrs:{label:t.couponName,value:t.couponID}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"返券列表:",prop:"couponAndNumList"}},[t._l(t.formData.couponAndNumList,function(e){return a("el-row",{key:e.couponId,attrs:{span:24}},[a("span",[t._v(t._s(e.couponName)+": ")]),t._v(" "),a("el-input-number",{attrs:{min:1,max:20,label:"请选择"},model:{value:e.num,callback:function(a){t.$set(e,"num",a)},expression:"item.num"}})],1)})],2),t._v(" "),a("el-form-item",{attrs:{label:"优惠券备注:",prop:"couponBagNote"}},[a("el-input",{model:{value:t.formData.couponBagNote,callback:function(e){t.$set(t.formData,"couponBagNote",e)},expression:"formData.couponBagNote"}})],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-left":"120px"}},[a("el-button",{on:{click:t.handleCancel}},[t._v("取消")]),t._v(" "),(t.dialogStatus,a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleAdd("formData")}}},[t._v("\n              确定\n            ")]))],1)],1)],1)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"详情",width:"500px",visible:t.detailDialogVisible},on:{"update:visible":function(e){t.detailDialogVisible=e}}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:22}},[a("el-form",{ref:"detailFormData",attrs:{model:t.detailFormData,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"商家名称:",prop:"merchant"}},[a("el-input",{attrs:{disabled:""},model:{value:t.merchant,callback:function(e){t.merchant=e},expression:"merchant"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"优惠券包名称:",prop:"couponBagName"}},[a("el-input",{attrs:{disabled:""},model:{value:t.detailFormData.couponBagName,callback:function(e){t.$set(t.detailFormData,"couponBagName",e)},expression:"detailFormData.couponBagName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"优惠券包:",prop:"couponAndNumList"}},[[a("span",[t._v(t._s(t.detailFormData.couponAndNumList?t.detailFormData.couponAndNumList.map(function(t){return t.couponName+"("+t.num+"张)"}).join(";"):""))])]],2)],1)],1)],1)],1)],1)},staticRenderFns:[]};var u=a("VU/8")(r,s,!1,function(t){a("ihle")},"data-v-4e2b8391",null);e.default=u.exports},ihle:function(t,e){}});