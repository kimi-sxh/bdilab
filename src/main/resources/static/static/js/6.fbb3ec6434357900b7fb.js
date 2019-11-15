webpackJsonp([6],{b7rS:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("ZoQJ"),l=[{label:"未使用",value:!1},{label:"已使用",value:!0}],o=[30,15,5],r={data:function(){return{pickerOptions:n.g,statusOptions:l,expireOptions:o,merchantNo:"系统用户",merchantName:"系统用户",isGroupQuery:!1,merchantOptions:[],selectedMerchant:"",dialogVisible:!1,total:1,tableData:[],formInline:{restaurantId:null,startDate:null,endDate:null,couponName:null,couponUseFlag:null,expiredDays:null,current:1},statistic:{}}},mounted:function(){"2"===localStorage.userType&&(this.initMerchantData(),this.query()),this.$route.params.id&&(localStorage.selectedShop=this.$route.params.id,this.formInline.restaurantId=this.$route.params.id,this.isGroupQuery=!0)},methods:{initMerchantData:function(){var e=localStorage,t=e.merchant_no,a=e.merchant_name,n=e.selectedShop;this.merchantNo=t,this.merchantName=a,this.formInline.restaurantId=n},query:function(){var e=this;this.$axios.post("/couponRecord/getCouponRecordByRestaurantId",this.formInline).then(function(t){var a=t.page,n=t.statistic,l=a.records;e.statistic=n,e.tableData=l,e.total=a.total}).catch(function(e){})},onSelectedMerchantClick:function(){var e=this;this.$axios.get("/restaurantInfo/getResByWx").then(function(t){e.merchantOptions=t.res,t.res.length>1?e.dialogVisible=!0:Object(n.e)("当前账号只绑定一个商家！",{type:"warning"})}).catch(function(e){console.log(e)})},handleConfirmLogin:function(){var e=this.selectedMerchant,t=this.merchantOptions;if(e){for(var a=window.localStorage,n=0;n<t.length;n++){var l=t[n];l.id===parseInt(e)&&(a.merchant_name=l.name,a.merchant_no=l.no)}a.selectedShop=e,this.initMerchantData(),location.reload()}},handleExcelDownload:function(){var e=this.formInline,t=e.startDate,a=e.endDate;if(t&&a)if(Object(n.c)(t,a))Object(n.e)("不能超过一个月！",{type:"warning"});else{var l=localStorage.selectedShop;window.open(this.$axios.defaults.baseURL+"/downloadExcel/getCouponRecord/"+l+"?beginDate="+t+"&&endDate="+a).then(function(e){0===e.code?Object(n.e)("导出成功",{type:"success"}):Object(n.e)("导出失败",{type:"error"})}).catch(function(e){console.log("error",e)})}else Object(n.e)("请选择时间段，不能超过一个月！",{type:"warning"})},handleCurrentChange:function(e){this.formInline.current=e,this.query()}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[e.isGroupQuery?e._e():a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"120px",model:e.formInline}},[a("el-form-item",{attrs:{label:"商家编号"}},[e._v(e._s(e.merchantNo))]),e._v(" "),a("el-form-item",{attrs:{label:"商家名称"}},[e._v(e._s(e.merchantName))]),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSelectedMerchantClick}},[e._v("切换商家")])],1)],1),e._v(" "),a("hr",{staticStyle:{"margin-bottom":"20px"}}),e._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"选择日期"}},[[a("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss","picker-options":e.pickerOptions,placeholder:"开始时间"},model:{value:e.formInline.startDate,callback:function(t){e.$set(e.formInline,"startDate",t)},expression:"formInline.startDate"}}),e._v(" "),a("el-date-picker",{attrs:{"arrow-control":"",type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss","picker-options":e.pickerOptions,placeholder:"结束时间"},model:{value:e.formInline.endDate,callback:function(t){e.$set(e.formInline,"endDate",t)},expression:"formInline.endDate"}})]],2),e._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.formInline.couponUseFlag,callback:function(t){e.$set(e.formInline,"couponUseFlag",t)},expression:"formInline.couponUseFlag"}},e._l(e.statusOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("el-input",{attrs:{placeholder:"请输入代金券类型"},model:{value:e.formInline.couponName,callback:function(t){e.$set(e.formInline,"couponName",t)},expression:"formInline.couponName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"到期（天）"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.formInline.expiredDays,callback:function(t){e.$set(e.formInline,"expiredDays",t)},expression:"formInline.expiredDays"}},e._l(e.expireOptions,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.query}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"warning"},on:{click:e.handleExcelDownload}},[e._v("导出Excel")])],1)],1)],1),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{width:50,fixed:"",type:"index",label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.$index+10*(e.formInline.current-1)+1))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"领券人",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"couponName",label:"代金券名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"couponMoney",label:"代金券金额",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"couponBuildTime",label:"领券日期",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"couponValidityTime",label:"券到期日",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"couponUseFlag",label:"使用状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(!1===t.row.couponUseFlag?"未使用":!0===t.row.couponUseFlag?"已使用":"")+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"totalPayment",label:"消费金额",align:"center"}})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.formInline.current,layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.formInline,"current",t)}}})],1),e._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"140px",model:e.statistic}},[a("el-form-item",{attrs:{label:"总数："}},[e._v(e._s(e.statistic.totalNum)+"张")]),e._v(" "),a("el-form-item",{attrs:{label:"代金券已使用："}},[e._v(e._s(e.statistic.usedNum)+"张")]),e._v(" "),a("el-form-item",{attrs:{label:"代金券未到期："}},[e._v(e._s(e.statistic.unExpiredNum)+"张")]),e._v(" "),a("el-form-item",{attrs:{label:"代金券已过期："}},[e._v(e._s(e.statistic.expiredNum)+"张")]),e._v(" "),a("el-form-item",{attrs:{label:"代金券金额："}},[e._v(e._s(e.statistic.couponMoney)+"元")]),e._v(" "),a("el-form-item",{attrs:{label:"消费金额："}},[e._v(e._s(e.statistic.totalMoney)+"元")])],1),e._v(" "),a("el-dialog",{attrs:{title:"店铺选择",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-select",{attrs:{placeholder:"请选择您要切换的店铺"},model:{value:e.selectedMerchant,callback:function(t){e.selectedMerchant=t},expression:"selectedMerchant"}},e._l(e.merchantOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleConfirmLogin}},[e._v("确 定")])],1)],1)],1)])},staticRenderFns:[]};var s=a("VU/8")(r,i,!1,function(e){a("gUvD")},"data-v-3c8a35d2",null);t.default=s.exports},gUvD:function(e,t){}});