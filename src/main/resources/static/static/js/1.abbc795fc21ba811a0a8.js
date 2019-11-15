webpackJsonp([1],{W4QS:function(t,e){},ZTyv:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ZoQJ"),l={data:function(){return{pickerOptions:n.g,merchantNo:"系统用户",merchantName:"系统用户",isGroupQuery:!1,merchantOptions:[],statistic:{},selectedMerchant:"",dialogVisible:!1,total:1,datatime:[],tableData:[],formInline:{rId:null,startDate:null,endDate:null,current:1}}},mounted:function(){"2"===localStorage.userType&&(this.initMerchantData(),this.query()),this.$route.params.id&&(localStorage.selectedShop=this.$route.params.id,this.formInline.rId=this.$route.params.id,this.isGroupQuery=!0)},methods:{initMerchantData:function(){var t=localStorage,e=t.merchant_no,a=t.merchant_name,n=t.selectedShop;this.merchantNo=e,this.merchantName=a,this.formInline.rId=n},query:function(){var t=this,e=this.datatime;if(e){var a=e[0],n=e[1];this.formInline.startDate=a,this.formInline.endDate=n}else this.formInline.startDate=null,this.formInline.endDate=null;this.$axios.post("/payPlatformFee/queryTotalByRId",this.formInline).then(function(e){var a=e.data,n={money:e.money,total:e.total};t.statistic=n,t.tableData=a.records,t.total=a.total}).catch(function(t){})},onSelectedMerchantClick:function(){var t=this;this.$axios.get("/restaurantInfo/getResByWx").then(function(e){t.merchantOptions=e.res,e.res.length>1?t.dialogVisible=!0:Object(n.e)("当前账号只绑定一个商家！",{type:"warning"})}).catch(function(t){console.log(t)})},handleConfirmLogin:function(){var t=this.selectedMerchant,e=this.merchantOptions;if(t){for(var a=window.localStorage,n=0;n<e.length;n++){var l=e[n];l.id===parseInt(t)&&(a.merchant_name=l.name,a.merchant_no=l.no)}a.selectedShop=t,this.initMerchantData(),location.reload()}},handleCurrentChange:function(t){this.formInline.current=t,this.query()},handleExcelDownload:function(){var t=localStorage.selectedShop;window.open(this.$axios.defaults.baseURL+"/downloadExcel/getPlatformMoney/"+t).then(function(t){0===t.code?Object(n.e)("导出成功",{type:"success"}):Object(n.e)("导出失败",{type:"error"})}).catch(function(t){console.log("error",t)})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[t.isGroupQuery?t._e():a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"120px",model:t.formInline}},[a("el-form-item",{attrs:{label:"商家编号"}},[t._v(t._s(t.merchantNo))]),t._v(" "),a("el-form-item",{attrs:{label:"商家名称"}},[t._v(t._s(t.merchantName))]),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSelectedMerchantClick}},[t._v("切换商家")])],1)],1),t._v(" "),a("hr",{staticStyle:{"margin-bottom":"20px"}}),t._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"选择日期"}},[a("el-date-picker",{staticStyle:{width:"470px"},attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetimerange","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},model:{value:t.datatime,callback:function(e){t.datatime=e},expression:"datatime"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.query}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"warning"},on:{click:t.handleExcelDownload}},[t._v("导出Excel")])],1)],1)],1),t._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{width:50,fixed:"",type:"index",label:"序号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.$index+10*(t.formInline.current-1)+1))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"payId",label:"付费编号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"payWay","min-width":"100px",label:"付费方式",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"payAmount","min-width":"100px",label:"付费金额",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"payWay",label:"付费类型",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"payTime",label:"付费时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"startDate","min-width":"100px",label:"生效时间",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"endDate","min-width":"100px",label:"到期时间",align:"center"}})],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":t.formInline.current,layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.formInline,"current",e)}}})],1),t._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"160px",model:t.statistic}},[a("el-form-item",{attrs:{label:"总计："}},[t._v(t._s(t.statistic.total)+"条")]),t._v(" "),a("el-form-item",{attrs:{label:"付费总计："}},[t._v(t._s(t.statistic.money)+"元")])],1),t._v(" "),a("el-dialog",{attrs:{title:"店铺选择",visible:t.dialogVisible,width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-select",{attrs:{placeholder:"请选择您要切换的店铺"},model:{value:t.selectedMerchant,callback:function(e){t.selectedMerchant=e},expression:"selectedMerchant"}},t._l(t.merchantOptions,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.handleConfirmLogin}},[t._v("确 定")])],1)],1)],1)])},staticRenderFns:[]};var r=a("VU/8")(l,i,!1,function(t){a("W4QS")},"data-v-f9d7ad2c",null);e.default=r.exports}});