webpackJsonp([6],{CiU3:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"rest_info_manager",data:function(){return{url:"./static/json_data/rest_info_manager.json",tableData:[],rest_info_addsub:!0,defaultSrc:"./static/img/img.jpg",fileList:[],imgSrc:"",cropImg:"",dialogVisible:!1,cur_page:1,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,addVisible:!1,delVisible:!1,form:{rest_num:"",rest_name:"",tel:"",id_number:"",name:""},idx:-1}},created:function(){this.getData(),this.cropImg=this.defaultSrc},computed:{data:function(){var e=this;return this.tableData.filter(function(t){for(var i=0;i<e.del_list.length;i++)if(t.name===e.del_list[i].name){!0;break}})}},components:{rest_info_pop:i("V72d").a},methods:{handleCurrentChange:function(e){this.cur_page=e,this.getData()},getData:function(){var e=this;this.$axios({method:"get",url:"./static/json_data/rest_info_manager.json",dataType:"json",crossDomain:!0,cache:!1}).then(function(t){e.tableData=t.data.list,console.log("----------",t.data.list)})},search:function(){this.is_search=!0},filterTag:function(e,t){return t.tag===e},handleEdit:function(e,t){this.idx=e;var i=this.tableData[e];this.form={rest_num:i.rest_num,rest_name:i.rest_name,tel:i.tel,id_number:i.id_number,name:i.name},this.editVisible=!0},getinfo:function(e){this.editVisible=!1,console.log("son to father:",e)},handleAdd:function(){this.addVisible=!0},handleDelete:function(e,t){this.idx=e,this.delVisible=!0},delAll:function(){var e=this.multipleSelection.length,t="";this.del_list=this.del_list.concat(this.multipleSelection);for(var i=0;i<e;i++)t+=this.multipleSelection[i].name+" ";this.$message.error("删除了"+t),this.multipleSelection=[]},handleSelectionChange:function(e){this.multipleSelection=e},deleteRow:function(){this.tableData.splice(this.idx,1),this.$message.success("删除成功"),this.delVisible=!1},setImage:function(e){var t=this,i=e.target.files[0];if(i.type.includes("image/")){var a=new FileReader;a.onload=function(e){t.dialogVisible=!0,t.imgSrc=e.target.result,t.$refs.cropper&&t.$refs.cropper.replace(e.target.result)},a.readAsDataURL(i)}},cropImage:function(){this.cropImg=this.$refs.cropper.getCroppedCanvas().toDataURL()},cancelCrop:function(){this.dialogVisible=!1,this.cropImg=this.defaultSrc},imageuploaded:function(e){console.log(e)},handleError:function(){this.$notify.error({title:"上传失败",message:"图片上传接口上传失败，可更改为自己的服务器接口"})}}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table"},[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[i("i",{staticClass:"el-icon-lx-shop"}),e._v(" 餐饮店信息")])],1)],1),e._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"handle-box"},[e.rest_info_addsub?i("el-button",{staticClass:"handle-del mr10 right",attrs:{type:"primary",icon:"add"},on:{click:function(t){e.handleAdd()}}},[e._v("添加\n            ")]):e._e(),e._v(" "),i("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"输入编号或名称或电话"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),e._v(" "),i("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")])],1),e._v(" "),i("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{prop:"rest_num",label:"店家编号",width:"200"}}),e._v(" "),i("el-table-column",{attrs:{prop:"rest_name",label:"店家名称"}}),e._v(" "),i("el-table-column",{attrs:{prop:"name",label:"负责人姓名",width:"120"}}),e._v(" "),i("el-table-column",{attrs:{prop:"tel",label:"负责人电话",width:"150"}}),e._v(" "),i("el-table-column",{attrs:{prop:"id_number",label:"负责人身份证号码",width:"200"}}),e._v(" "),i("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(i){e.handleEdit(t.$index,t.row)}}},[e._v("编辑\n                    ")]),e._v(" "),e.rest_info_addsub?i("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(i){e.handleDelete(t.$index,t.row)}}},[e._v("删除\n                    ")]):e._e()]}}])})],1),e._v(" "),i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"编辑",visible:e.editVisible,width:"1000px"},on:{"update:visible":function(t){e.editVisible=t}}},[i("rest_info_pop",{on:{func:e.getinfo}})],1),e._v(" "),i("el-dialog",{attrs:{title:"添加",visible:e.addVisible,width:"1000px"},on:{"update:visible":function(t){e.addVisible=t}}},[i("rest_info_pop")],1),e._v(" "),i("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[i("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var s=i("VU/8")(a,l,!1,function(e){i("z9cD")},"data-v-2903be80",null);t.default=s.exports},V72d:function(e,t,i){"use strict";var a=i("sRoY"),l={name:"pic_upload",data:function(){return{defaultSrc:"../../static/img/img.jpg",fileList:[],imgSrc:"",cropImg:"",dialogVisible:!1}},components:{VueCropper:i.n(a).a},methods:{setImage:function(e){var t=this,i=e.target.files[0];if(i.type.includes("image/")){var a=new FileReader;a.onload=function(e){t.dialogVisible=!0,t.imgSrc=e.target.result,t.$refs.cropper&&t.$refs.cropper.replace(e.target.result)},a.readAsDataURL(i)}},cropImage:function(){this.cropImg=this.$refs.cropper.getCroppedCanvas().toDataURL()},cancelCrop:function(){this.dialogVisible=!1,this.cropImg=this.defaultSrc},imageuploaded:function(e){console.log(e)},handleError:function(){this.$notify.error({title:"上传失败",message:"图片上传接口上传失败，可更改为自己的服务器接口"})}}},s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"crop-demo"},[i("img",{staticClass:"pre-img",attrs:{src:e.cropImg}}),e._v(" "),i("div",{staticClass:"crop-demo-btn"},[e._v("选择图片\n            "),i("input",{staticClass:"crop-input",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:e.setImage}})])]),e._v(" "),i("el-dialog",{attrs:{title:"裁剪图片",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("vue-cropper",{ref:"cropper",staticStyle:{width:"100%",height:"300px"},attrs:{src:e.imgSrc,ready:e.cropImage,zoom:e.cropImage,cropmove:e.cropImage}}),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.cancelCrop}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var r={name:"rest_info_pop",data:function(){return{dialogVisible:!1,cur_page:1,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,tofather:{data:"",close:!0}}},props:["form"],created:function(){console.log("子组件接受到的数据：",this.form)},computed:{},components:{pic_upload:i("VU/8")(l,s,!1,function(e){i("pcCC")},"data-v-75eda76e",null).exports},methods:{saveEdit:function(){this.$emit("func",this.tofather)},editVisible:function(){this.$emit("func",this.tofather)}}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-form",{ref:"form",staticClass:"father",attrs:{model:e.form,"label-width":"130px"}},[i("div",{staticClass:"left"},[i("el-form-item",{attrs:{label:"店家名称"}},[i("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"店家地址"}},[i("el-input",{model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"详细地址"}},[i("el-input",{model:{value:e.form.detailAddress,callback:function(t){e.$set(e.form,"detailAddress",t)},expression:"form.detailAddress"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"负责人姓名"}},[i("el-input",{model:{value:e.form.principalName,callback:function(t){e.$set(e.form,"principalName",t)},expression:"form.principalName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"负责人电话"}},[i("el-input",{model:{value:e.form.principalTelephone,callback:function(t){e.$set(e.form,"principalTelephone",t)},expression:"form.principalTelephone"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"负责人身份证号码"}},[i("el-input",{model:{value:e.form.principalIDCardNo,callback:function(t){e.$set(e.form,"principalIDCardNo",t)},expression:"form.principalIDCardNo"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"负责人身份证正面"}},[i("div",{staticClass:"tupian"},[i("img",{attrs:{src:e.form.principalIDCardAPath,alt:"负责人身份证正面照片"}})])]),e._v(" "),i("el-form-item",{attrs:{label:"负责人身份证背面"}},[i("div",{staticClass:"tupian"},[i("img",{attrs:{src:e.form.principalIDCardBPath,alt:"负责人身份证背面照片"}})])]),e._v(" "),i("el-form-item",{attrs:{label:"餐饮店门头照片"}},[i("div",{staticClass:"tupian"},[i("img",{attrs:{src:e.form.doorheadPhotoPathAndName,alt:"餐饮店门头照片"}})])])],1),e._v(" "),i("div",{staticClass:"margin_left"},[i("el-form-item",{attrs:{label:"店家编号"}},[i("el-input",{model:{value:e.form.no,callback:function(t){e.$set(e.form,"no",t)},expression:"form.no"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"每周营业时间"}},[i("el-input",{model:{value:e.form.businessDay,callback:function(t){e.$set(e.form,"businessDay",t)},expression:"form.businessDay"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"每天营业时间"}},[i("el-input",{model:{value:e.form.businessTime,callback:function(t){e.$set(e.form,"businessTime",t)},expression:"form.businessTime"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"商家服务"}},[i("el-input",{model:{value:e.form.businessService,callback:function(t){e.$set(e.form,"businessService",t)},expression:"form.businessService"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"餐饮店占地面积"}},[i("el-input",{model:{value:e.form.area,callback:function(t){e.$set(e.form,"area",t)},expression:"form.area"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"销售人员编号"}},[i("el-input",{model:{value:e.form.saleID,callback:function(t){e.$set(e.form,"saleID",t)},expression:"form.saleID"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"卫生许可证"}},[i("div",{staticClass:"tupian"},[i("img",{attrs:{src:e.form.hygienicLicensePath,alt:"卫生许可证"}})])]),e._v(" "),i("el-form-item",{attrs:{label:"餐饮店logo"}},[i("div",{staticClass:"tupian"},[i("img",{attrs:{src:e.form.logoPath,alt:"餐饮店logo"}})])]),e._v(" "),i("el-form-item",{attrs:{label:"营业执照"}},[i("div",{staticClass:"tupian"},[i("img",{attrs:{src:e.form.businessLicensePath,alt:"营业执照"}})])])],1)]),e._v(" "),i("span",{staticClass:"dialog-footer center",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1)},staticRenderFns:[]};var n=i("VU/8")(r,o,!1,function(e){i("pkVh")},"data-v-8a32f178",null);t.a=n.exports},pcCC:function(e,t){},pkVh:function(e,t){},z9cD:function(e,t){}});