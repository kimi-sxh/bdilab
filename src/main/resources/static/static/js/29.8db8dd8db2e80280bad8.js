webpackJsonp([29],{"5auf":function(e,t){},jEWE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("ZoQJ"),l=(a("zL8q"),[{label:"未使用",value:!1},{label:"已使用",value:!0}]),o=[30,15,5],r={data:function(){return{pickerOptions:n.g,statusOptions:l,expireOptions:o,merchantOptions:[],statistic:{},dialogVisible:!1,total:1,tableData:[],formInline:{restaurantId:null,startDate:null,endDate:null,couponName:null,couponUseFlag:null,expiredDays:null,current:1}}},mounted:function(){"2"===localStorage.userType&&this.query()},methods:{query:function(){var e=this;this.$axios.post("/group/getGroupPayTacticsReport",this.formInline).then(function(t){var a=t.data,n={totalNum:t.totalNum,totalMoney:t.totalMoney,couponMoney:t.couponMoney,bonusFee:t.bonusFee,actualMoney:t.actualMoney};e.statistic=n;var l=a.records,o=a.total;e.tableData=l,console.log("data",a,a.records),e.total=o}).catch(function(e){})},onDetailClick:function(e){this.$router.push({path:"/bill_flow/"+e.rId})},handleExcelDownload:function(){var e=this.formInline,t=e.startDate,a=e.endDate;if(t&&a)if(Object(n.c)(t,a))Object(n.e)("不能超过一个月！",{type:"warning"});else{var l=localStorage.selectedShop;window.open(this.$axios.defaults.baseURL+"/downloadExcel/getCouponRecord/"+l).then(function(e){0===e.code?Object(n.e)("导出成功",{type:"success"}):Object(n.e)("导出失败",{type:"error"})}).catch(function(e){console.log("error",e)})}else Object(n.e)("请选择时间段，不能超过一个月！",{type:"warning"})},handleCurrentChange:function(e){this.formInline.current=e,this.query()}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"选择日期"}},[[a("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss","picker-options":e.pickerOptions,placeholder:"开始时间"},model:{value:e.formInline.startDate,callback:function(t){e.$set(e.formInline,"startDate",t)},expression:"formInline.startDate"}}),e._v(" "),a("el-date-picker",{attrs:{"arrow-control":"",type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss","picker-options":e.pickerOptions,placeholder:"结束时间"},model:{value:e.formInline.endDate,callback:function(t){e.$set(e.formInline,"endDate",t)},expression:"formInline.endDate"}})]],2),e._v(" "),a("el-form-item",{attrs:{label:"品牌名称"}},[a("el-input",{model:{value:e.formInline.brand,callback:function(t){e.$set(e.formInline,"brand",t)},expression:"formInline.brand"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.query}},[e._v("查询")])],1)],1)],1),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{width:50,fixed:"",type:"index",label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.$index+10*(e.formInline.current-1)+1))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"rId",label:"商家ID",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalMoney",label:"商家编号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"couponMoney",label:"商家名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"bonusFee",label:"应收金额",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"actualMoney",label:"实收金额",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"actualMoney",label:"代金券金额",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"actualMoney",label:"抽成金额",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"130",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.onDetailClick(t.row)}}},[e._v("详情\n          ")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.formInline.current,layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.formInline,"current",t)}}})],1),e._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"140px",model:e.statistic}},[a("el-form-item",{attrs:{label:"商家总数："}},[e._v(e._s(e.statistic.totalNum)+"条")]),e._v(" "),a("el-form-item",{attrs:{label:"应收总计："}},[e._v(e._s(e.statistic.totalMoney)+"元")]),e._v(" "),a("el-form-item",{attrs:{label:"代金券金额总计："}},[e._v(e._s(e.statistic.couponMoney)+"元")]),e._v(" "),a("el-form-item",{attrs:{label:"抽成金额总计："}},[e._v(e._s(e.statistic.bonusFee)+"元")]),e._v(" "),a("el-form-item",{attrs:{label:"实收金额总计："}},[e._v(e._s(e.statistic.actualMoney)+"元")])],1)],1)])},staticRenderFns:[]};var s=a("VU/8")(r,i,!1,function(e){a("5auf")},"data-v-d39e72c4",null);t.default=s.exports}});