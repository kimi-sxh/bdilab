webpackJsonp([53],{f8pI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Dd8w"),n=a.n(r),o=a("ZoQJ"),l={id:null,shareBonus:"",couponBonus:"",startDate:"",standardCharge:"",discountCharge:"",discountEndDate:""},s={rNo:null,rName:null,operateType:null,address:null,register:2,current:1},i={data:function(){return{total:0,formData:Object(o.b)(l),dialogVisible:!1,formInline:s,tableData:[],isTipCouponBonus:!1,areaList:[]}},mounted:function(){this.query(),this.getAreaTree()},methods:{query:function(){var e=this;this.$axios.post("/restaurantInfo/getRestaurantAndSalesByPage",this.formInline).then(function(t){var a=t.records;e.tableData=a,e.total=t.total}).catch(function(e){})},getAreaTree:function(){var e=this;this.$axios.get("/area/getTree").then(function(t){e.areaList=t.result})},handleCurrentChange:function(e){this.formInline.current=e,this.query()},handleCancel:function(){this.dialogVisible=!1},onUpdateClick:function(e){var t=this;this.$axios.post("/platformBonus/getBasicByBonusType?id="+e.rId).then(function(a){if(0===a.code){var r=e.rNo,l=e.rName,s=e.rId;t.formData=n()({rNo:r,rName:l,id:s},a.data),t.formData.id=s,t.formData.restaurantBonusId=a.data.restaurantBonusId}else Object(o.d)("获取列表失败!",{type:"error"})}),this.dialogVisible=!0},handleUpdate:function(){var e=this,t=this.formData,a=t.couponBonus;parseFloat(a)>.05?this.isTipCouponBonus=!0:(delete t.rNo,delete t.rName,this.$axios.post("/restaurantPlatformBonus/addPlatformBonus",t).then(function(t){0===t.code?(Object(o.d)("修改成功！",{type:"success"}),e.dialogVisible=!1,e.query()):Object(o.d)("修改失败！",{type:"error"})}).catch(function(e){console.log("error",e)}))}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"商家编号"}},[a("el-input",{attrs:{placeholder:"请输入商家编号"},model:{value:e.formInline.rNo,callback:function(t){e.$set(e.formInline,"rNo",t)},expression:"formInline.rNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商家名称"}},[a("el-input",{attrs:{placeholder:"请输入商家名称"},model:{value:e.formInline.rName,callback:function(t){e.$set(e.formInline,"rName",t)},expression:"formInline.rName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"业态状态"}},[a("el-input",{attrs:{placeholder:"请输入业态状态"},model:{value:e.formInline.operateType,callback:function(t){e.$set(e.formInline,"operateType",t)},expression:"formInline.operateType"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"所属区域"}},[e.areaList?a("el-cascader",{attrs:{clearable:"",options:e.areaList},model:{value:e.formInline.address,callback:function(t){e.$set(e.formInline,"address",t)},expression:"formInline.address"}}):a("el-input",{model:{value:e.formInline.address,callback:function(t){e.$set(e.formInline,"address",t)},expression:"formInline.address"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.query}},[e._v("查询")])],1)],1)],1),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{width:"50",type:"index",label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.$index+10*(e.formInline.current-1)+1))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"rNo",label:"商家编号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"rName",label:"商家名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"principalName",label:"负责人姓名",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"principalTelephone",label:"联系方式",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"所属区域",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"saleName",label:"销售负责人",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"130",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.onUpdateClick(t.row)}}},[e._v("修改\n          ")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.formInline.current,layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.formInline,"current",t)}}})],1),e._v(" "),a("el-dialog",{attrs:{title:"修改",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:22}},[a("el-form",{ref:"formData",attrs:{model:e.formData,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"商家编号:",prop:"rNo"}},[a("el-input",{attrs:{disabled:""},model:{value:e.formData.rNo,callback:function(t){e.$set(e.formData,"rNo",t)},expression:"formData.rNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商家名称:",prop:"rName"}},[a("el-input",{attrs:{disabled:""},model:{value:e.formData.rName,callback:function(t){e.$set(e.formData,"rName",t)},expression:"formData.rName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"分享抽成比例:",prop:"shareBonus"}},[a("el-input",{model:{value:e.formData.shareBonus,callback:function(t){e.$set(e.formData,"shareBonus",t)},expression:"formData.shareBonus"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"核券抽成比例:",prop:"couponBonus"}},[a("el-input",{model:{value:e.formData.couponBonus,callback:function(t){e.$set(e.formData,"couponBonus",t)},expression:"formData.couponBonus"}}),e._v(" "),a("font",{directives:[{name:"show",rawName:"v-show",value:e.isTipCouponBonus,expression:"isTipCouponBonus"}],attrs:{color:"red"}},[e._v("(抽成比例最多为5%, 即0.05)")]),e._v(" "),a("span",[e._v("(请输入百分比：如0.12代表12%)")])],1),e._v(" "),a("el-form-item",{attrs:{label:"生效日期:",prop:"startDate"}},[[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择时间"},model:{value:e.formInline.startDate,callback:function(t){e.$set(e.formInline,"startDate",t)},expression:"formInline.startDate"}})]],2),e._v(" "),a("el-form-item",{attrs:{label:"标准手续费:",prop:"standardCharge"}},[a("el-input",{attrs:{placeholder:"请输入标准手续费"},model:{value:e.formData.standardCharge,callback:function(t){e.$set(e.formData,"standardCharge",t)},expression:"formData.standardCharge"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"优惠手续费:",prop:"discountCharge"}},[a("el-input",{attrs:{placeholder:"请输入优惠手续费"},model:{value:e.formData.discountCharge,callback:function(t){e.$set(e.formData,"discountCharge",t)},expression:"formData.discountCharge"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"优惠到期日:",prop:"discountEndDate"}},[[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择时间"},model:{value:e.formInline.discountEndDate,callback:function(t){e.$set(e.formInline,"discountEndDate",t)},expression:"formInline.discountEndDate"}})]],2),e._v(" "),a("el-form-item",{staticStyle:{"margin-left":"120px"}},[a("el-button",{on:{click:e.handleCancel}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleUpdate()}}},[e._v("确定")])],1)],1)],1)],1)],1)],1)])},staticRenderFns:[]};var u=a("VU/8")(i,c,!1,function(e){a("qzFx")},"data-v-28f10e78",null);t.default=u.exports},qzFx:function(e,t){}});