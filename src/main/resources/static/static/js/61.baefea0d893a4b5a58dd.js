webpackJsonp([61],{"87w6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("ZoQJ"),l=(n("zL8q"),[{label:"未使用",value:!1},{label:"已使用",value:!0}]),r=[30,15,5],o={data:function(){return{pickerOptions:a.g,statusOptions:l,expireOptions:r,merchantOptions:[],statistic:{},dialogVisible:!1,total:1,tableData:[],formInline:{beginDate:null,endDate:null,brand:null,current:1}}},mounted:function(){"2"===localStorage.userType&&this.query()},methods:{query:function(){var e=this;this.$axios({methods:"post",url:"/group/getGroupRefundInfo",params:this.formInline}).then(function(t){var n=t.data,a={totalNum:t.totalNum,totalMoney:t.totalMoney,bargainMoney:t.bargainMoney,refundMoney:t.refundMoney};e.statistic=a;var l=n.records,r=n.total;e.tableData=l,e.total=r}).catch(function(e){})},onDetailClick:function(e){this.$router.push({path:"/return_flow/"+e.rId})},handleExcelDownload:function(){var e=this.formInline,t=e.beginDate,n=e.endDate;if(t&&n)if(Object(a.c)(t,n))Object(a.e)("不能超过一个月！",{type:"warning"});else{var l=localStorage.selectedShop;window.open(this.$axios.defaults.baseURL+"/downloadExcel/getCouponRecord/"+l).then(function(e){0===e.code?Object(a.e)("导出成功",{type:"success"}):Object(a.e)("导出失败",{type:"error"})}).catch(function(e){console.log("error",e)})}else Object(a.e)("请选择时间段，不能超过一个月！",{type:"warning"})},handleCurrentChange:function(e){this.formInline.current=e,this.query()}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"handle-box"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"选择日期"}},[[n("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss","picker-options":e.pickerOptions,placeholder:"开始时间"},model:{value:e.formInline.beginDate,callback:function(t){e.$set(e.formInline,"beginDate",t)},expression:"formInline.beginDate"}}),e._v(" "),n("el-date-picker",{attrs:{"arrow-control":"",type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss","picker-options":e.pickerOptions,placeholder:"结束时间"},model:{value:e.formInline.endDate,callback:function(t){e.$set(e.formInline,"endDate",t)},expression:"formInline.endDate"}})]],2),e._v(" "),n("el-form-item",{attrs:{label:"品牌名称"}},[n("el-input",{model:{value:e.formInline.brand,callback:function(t){e.$set(e.formInline,"brand",t)},expression:"formInline.brand"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.query}},[e._v("查询")])],1)],1)],1),e._v(" "),n("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[n("el-table-column",{attrs:{width:50,fixed:"",type:"index",label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.$index+10*(e.formInline.current-1)+1))])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"rId",label:"商家ID",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"rNo",label:"商家编号",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"rName",label:"商家名称",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"accountNum",label:"账单总数",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"totalMoney",label:"消费金额",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"totalBargainMoney",label:"助力金额",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"totalRefundMoney",label:"返款金额",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"130",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){e.onDetailClick(t.row)}}},[e._v("详情\n          ")])]}}])})],1),e._v(" "),n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{background:"","current-page":e.formInline.current,layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.formInline,"current",t)}}})],1),e._v(" "),n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"140px",model:e.statistic}},[n("el-form-item",{attrs:{label:"商家总数："}},[e._v(e._s(e.statistic.totalNum))]),e._v(" "),n("el-form-item",{attrs:{label:"消费金额总计："}},[e._v(e._s(e.statistic.totalMoney)+"元")]),e._v(" "),n("el-form-item",{attrs:{label:"助力金额总计："}},[e._v(e._s(e.statistic.bargainMoney)+"元")]),e._v(" "),n("el-form-item",{attrs:{label:"返款金额总计："}},[e._v(e._s(e.statistic.refundMoney)+"元")])],1)],1)])},staticRenderFns:[]};var s=n("VU/8")(o,i,!1,function(e){n("SOu5")},"data-v-1e977b26",null);t.default=s.exports},SOu5:function(e,t){}});