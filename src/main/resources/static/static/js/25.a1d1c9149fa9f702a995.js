webpackJsonp([25],{"1/Fd":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("ZoQJ"),n={data:function(){return{pickerOptions:l.g,merchantNo:"系统用户",merchantName:"系统用户",active:0,statistic:{},merchantOptions:[],datatime:[],initData:"0.00",selectedMerchant:"",dialogVisible:!1,total:1,tableData:[],formInline:{qrCode:null,rId:null,beginDate:null,endDate:null,current:1},formData:{qrCode:null,rId:null,beginDate:null,endDate:null,current:1}}},mounted:function(){"2"===localStorage.userType&&(this.initMerchantData(),this.query())},methods:{initMerchantData:function(){var t=localStorage,e=t.merchant_no,a=t.merchant_name,l=t.selectedShop;this.merchantNo=e,this.merchantName=a,this.formInline.rId=l,this.formData.rId=l},query:function(){var t=this,e=this.datatime;if(e){var a=e[0],l=e[1];this.formInline.beginDate=a,this.formInline.endDate=l}else this.formInline.beginDate=null,this.formInline.endDate=null;this.$axios({methods:"get",url:"/tableAccountInfo/payTacticsReport",params:this.formInline}).then(function(e){var a=e.data,l=e.actual,n=e.couponFee,o=e.couponMoney,r={total:e.total,actual:l,couponFee:n,couponMoney:o};t.statistic=r,a?(t.tableData=a.records,t.total=a.total):(t.tableData=[],t.total=0)}).catch(function(t){})},queryDetail:function(){var t=this,e=this.datatime;if(e){var a=e[0],l=e[1];this.formData.beginDate=a,this.formData.endDate=l}else this.formData.beginDate=null,this.formData.endDate=null;this.$axios({methods:"get",url:"/tableAccountInfo/payTacticsReportDetail",params:this.formData}).then(function(e){var a=e.data,l=e.actual,n=e.couponFee,o=e.couponMoney,r={total:e.total,actual:l,couponFee:n,couponMoney:o};t.statistic=r,t.tableData=a.records,t.total=a.total}).catch(function(t){})},handleDetailClick:function(t){this.formData.qrCode=t.qrCode,this.formData.rId=this.formInline.rId,this.active=1,this.queryDetail()},handleReturn:function(){this.active=0,this.query()},onSelectedMerchantClick:function(){var t=this;this.$axios.get("/restaurantInfo/getResByWx").then(function(e){t.merchantOptions=e.res,e.res.length>1?t.dialogVisible=!0:Object(l.e)("当前账号只绑定一个商家！",{type:"warning"})}).catch(function(t){console.log(t)})},handleConfirmLogin:function(){var t=this.selectedMerchant,e=this.merchantOptions;if(t){for(var a=window.localStorage,l=0;l<e.length;l++){var n=e[l];n.id===parseInt(t)&&(a.merchant_name=n.name,a.merchant_no=n.no)}a.selectedShop=t,this.initMerchantData(),location.reload()}},handleCurrentChange:function(t){this.formInline.current=t,this.query()},handleCurrentDetailChange:function(t){this.formData.current=t,this.queryDetail()},handleExcelDownload:function(){var t=this.datatime,e=null,a=null;if(t)if(e=t[0],a=t[1],isMoreThanThreeMonth(e,a))Object(l.e)("不能超过一个月！",{type:"warning"});else{var n=localStorage.selectedShop;window.open(this.$axios.defaults.baseURL+"/downloadExcel/payConponReport/$"+n+"?beginDate="+e+"&&endDate="+a).then(function(t){0===t.code?Object(l.e)("导出成功",{type:"success"}):Object(l.e)("导出失败",{type:"error"})}).catch(function(t){console.log("error",t)})}else Object(l.e)("请选择时间段，不能超过一个月！",{type:"warning"})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[0===this.active?a("el-row",[a("div",{staticClass:"handle-box"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"120px",model:t.formInline}},[a("el-form-item",{attrs:{label:"商家编号"}},[t._v(t._s(t.merchantNo))]),t._v(" "),a("el-form-item",{attrs:{label:"商家名称"}},[t._v(t._s(t.merchantName))]),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSelectedMerchantClick}},[t._v("切换商家")])],1)],1),t._v(" "),a("hr",{staticStyle:{"margin-bottom":"20px"}}),t._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"二维码编号"}},[a("el-input",{attrs:{placeholder:"二维码编号"},model:{value:t.formInline.qrCode,callback:function(e){t.$set(t.formInline,"qrCode",e)},expression:"formInline.qrCode"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"选择日期"}},[a("el-date-picker",{staticStyle:{width:"470px"},attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetimerange","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},model:{value:t.datatime,callback:function(e){t.datatime=e},expression:"datatime"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.query}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"warning"},on:{click:t.handleExcelDownload}},[t._v("导出Excel")])],1)],1)],1),t._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{width:50,fixed:"",type:"index",label:"序号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.$index+10*(t.formInline.current-1)+1))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"qrCode",label:"二维码编号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"desc",label:"描述",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"totalAmount",label:"应收金额",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"couponMoney",label:"代金券金额",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"couponFee",label:"抽成金额",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"actualAmount",label:"实收金额",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){t.handleDetailClick(e.row)}}},[t._v("\n              详情\n            ")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":t.formInline.current,layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.formInline,"current",e)}}})],1),t._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"140px",model:t.statistic}},[a("el-form-item",{attrs:{label:"应收金额总计："}},[t._v(t._s(t.statistic.total)+"元")]),t._v(" "),a("el-form-item",{attrs:{label:"实收金额总计："}},[t._v(t._s(t.statistic.actual)+"元")]),t._v(" "),a("el-form-item",{attrs:{label:"代金券："}},[t._v(t._s(t.statistic.couponMoney)+"元")]),t._v(" "),a("el-form-item",{attrs:{label:"提成总计："}},[t._v(t._s(t.statistic.couponFee)+"元")])],1)],1):t._e(),t._v(" "),1===this.active?a("el-row",[a("div",{staticClass:"handle-box"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"120px",model:t.formInline}},[a("el-form-item",{attrs:{label:"商家编号"}},[t._v(t._s(t.merchantNo))]),t._v(" "),a("el-form-item",{attrs:{label:"商家名称"}},[t._v(t._s(t.merchantName))]),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSelectedMerchantClick}},[t._v("切换商家")])],1)],1),t._v(" "),a("hr",{staticStyle:{"margin-bottom":"20px"}}),t._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formData,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"二维码编号"}},[a("el-input",{attrs:{disabled:"",placeholder:"二维码编号"},model:{value:t.formData.qrCode,callback:function(e){t.$set(t.formData,"qrCode",e)},expression:"formData.qrCode"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"选择日期"}},[a("el-date-picker",{staticStyle:{width:"470px"},attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetimerange","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},model:{value:t.datatime,callback:function(e){t.datatime=e},expression:"datatime"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.queryDetail}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"warning"},on:{click:t.handleExcelDownload}},[t._v("导出Excel")]),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-back"},on:{click:t.handleReturn}},[t._v("返回")])],1)],1)],1),t._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{width:50,fixed:"",type:"index",label:"序号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.$index+10*(t.formData.current-1)+1))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"payDate",label:"日期",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"totalAmount",label:"应收金额",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"couponMoney",label:"代金券金额",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"couponFee",label:"抽成金额",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"actualAmount",label:"实收金额",align:"center"}})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":t.formData.current,layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentDetailChange,"update:currentPage":function(e){t.$set(t.formData,"current",e)}}})],1),t._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"140px",model:t.statistic}},[a("el-form-item",{attrs:{label:"应收金额总计："}},[t._v(t._s(t.statistic.total))]),t._v(" "),a("el-form-item",{attrs:{label:"实收金额总计："}},[t._v(t._s(t.statistic.actual))]),t._v(" "),a("el-form-item",{attrs:{label:"代金券："}},[t._v(t._s(t.statistic.couponMoney))]),t._v(" "),a("el-form-item",{attrs:{label:"提成总计："}},[t._v(t._s(t.statistic.couponFee))])],1)],1):t._e(),t._v(" "),a("el-dialog",{attrs:{title:"店铺选择",visible:t.dialogVisible,width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-select",{attrs:{placeholder:"请选择您要切换的店铺"},model:{value:t.selectedMerchant,callback:function(e){t.selectedMerchant=e},expression:"selectedMerchant"}},t._l(t.merchantOptions,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.handleConfirmLogin}},[t._v("确 定")])],1)],1)],1)])},staticRenderFns:[]};var r=a("VU/8")(n,o,!1,function(t){a("mAfj")},"data-v-b9113f54",null);e.default=r.exports},mAfj:function(t,e){}});