webpackJsonp([80],{EFKa:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={data:function(){return{total:0,pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var a=new Date,t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",[t,a])}},{text:"最近一个月",onClick:function(e){var a=new Date,t=new Date;t.setTime(t.getTime()-2592e6),e.$emit("pick",[t,a])}},{text:"最近三个月",onClick:function(e){var a=new Date,t=new Date;t.setTime(t.getTime()-7776e6),e.$emit("pick",[t,a])}}]},area:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"ziyuan",label:"资源",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"jiaohu",label:"组件交互文档"}]}],formInline:{datatime:[],operName:""},params:{current:1},tableData:[]}},created:function(){this.getLogs()},methods:{getLogs:function(){var e=this;this.$axios.get("/log/list",{params:this.params}).then(function(a){e.tableData=a.records,e.total=a.total})},onSubmit:function(){this.params={current:1,startTime:this.formInline.datatime[0],endTime:this.formInline.datatime[1],userName:this.formInline.userName,requestUri:this.formInline.requestUri},this.getLogs()},handleCurrentChange:function(e){this.params.current=e,this.getLogs()},areaChange:function(e){console.log(e)}}},n={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"container"},[t("div",{staticClass:"handle-box"},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[t("el-form-item",{attrs:{label:"选择日期"}},[t("el-date-picker",{attrs:{type:"datetimerange","unlink-panels":"","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.formInline.datatime,callback:function(a){e.$set(e.formInline,"datatime",a)},expression:"formInline.datatime"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"操作人员"}},[t("el-input",{attrs:{placeholder:"请输入操作人员姓名"},model:{value:e.formInline.operName,callback:function(a){e.$set(e.formInline,"operName",a)},expression:"formInline.operName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"操作人员"}},[t("el-input",{attrs:{placeholder:"请输入操作人员姓名"},model:{value:e.formInline.operName,callback:function(a){e.$set(e.formInline,"operName",a)},expression:"formInline.operName"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),e._v(" "),t("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""}},[t("el-table-column",{attrs:{width:50,type:"index",label:"序号",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"userId",label:"操作员编号",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"userName",label:"操作员名称",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"requestUri",label:"请求地址",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"params",label:"请求参数",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"resultParams",label:"返回值",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"method",label:"操作方法",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"operateDate",label:"操作时间",align:"center"}})],1),e._v(" "),t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)])},staticRenderFns:[]},r=t("VU/8")(l,n,!1,null,null,null);a.default=r.exports}});