webpackJsonp([28],{NLd9:function(e,t){},xPwA:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("ZoQJ"),l={scanCodeTacticsStartTime:null,scanCodeTacticsEndTime:null,marketingStrategyID:null,scanCodeDate:null,scanCodeTacticsId:null,scanCodeTacticsName:null,scanCodeTimes:0},o=[{id:1,label:"助力红包"},{id:4,label:"支付返券"},{id:5,label:"扫码返券"}],i={data:function(){return{checkAll:!1,scanCodeDialog:!1,scanCodeDetailDialog:!1,total:0,merchantCouponOptions:o,selectedCouponList:[],scanCodeFormData:Object(n.b)(l),formInline:{name:"",current:1},tableData:[]}},mounted:function(){this.query()},methods:{query:function(){var e=this;this.$axios.get("/marketingStrategy/getRestaurantAndStrategy",{params:this.formInline}).then(function(t){e.total=t.total;var a=t.data.map(function(e){var t=e.map,a=e.id,n=e.name,l=e.address,o=[],i=[],r=null;for(var s in t)if(t.hasOwnProperty(s)){var c=t[s];o.push(parseInt(s)),i.push(c)}return i.length>0&&(r=i.join(";")),{id:a,name:n,address:l,activeIdList:o,activeName:r}});console.log("ddd",a),e.tableData=a}).catch(function(e){console.log(e)})},handleCurrentChange:function(e){this.formInline.current=e,this.query()},handleSettingClick:function(e){this.scanCodeFormData=e,this.selectedCouponList=e.activeIdList,this.scanCodeDialog=!0},onCloseClick:function(){this.scanCodeDialog=!1},submitScanCodeForm:function(e){var t=this,a=this.scanCodeFormData.id;this.$refs[e].validate(function(e){if(e){var l="/marketingStrategy/setStrategyByRes/"+a,o={marketingStrategyType:t.selectedCouponList};t.$axios.post(l,o).then(function(e){1===e.code?(Object(n.d)("设置成功！",{type:"success"}),t.scanCodeDialog=!1,t.query()):Object(n.d)(e.mes,{type:"warning"})}).catch(function(e){console.log("error",e),Object(n.d)("请稍后再试或联系系统管理员！",{type:"error"})})}})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"商家名称"}},[a("el-input",{attrs:{placeholder:"请输入商家名称"},model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name",t)},expression:"formInline.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.query}},[e._v("查询")])],1)],1)],1),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{width:50,fixed:"",type:"index",label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.$index+10*(e.formInline.current-1)+1))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"商家名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"activeName",label:"活动策略",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.handleSettingClick(t.row)}}},[e._v("\n            设置\n          ")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.formInline.current,lauut:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.formInline,"current",t)}}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"设置",visible:e.scanCodeDialog},on:{"update:visible":function(t){e.scanCodeDialog=t}}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:22}},[a("el-form",{ref:"scanCodeForm",attrs:{model:e.scanCodeFormData,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"商家名称:",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入商家名称"},model:{value:e.scanCodeFormData.name,callback:function(t){e.$set(e.scanCodeFormData,"name",t)},expression:"scanCodeFormData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"活动策略:",prop:"couponList"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:"请选择"},model:{value:e.selectedCouponList,callback:function(t){e.selectedCouponList=t},expression:"selectedCouponList"}},e._l(e.merchantCouponOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.id}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{"margin-left":"120px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitScanCodeForm("scanCodeForm")}}},[e._v("确认")]),e._v(" "),a("el-button",{on:{click:function(t){e.onCloseClick()}}},[e._v("取消")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var s=a("VU/8")(i,r,!1,function(e){a("NLd9")},"data-v-8c3abe6c",null);t.default=s.exports}});