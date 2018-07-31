<template>
  <div class='tinymce-container editor-container' v-model="this.defaultStyle">
    <textarea class='tinymce-textarea' :id="tinymceId"></textarea>
    <transition name="fade">
    <div class="buy-window-wrap"  v-show="flag||showAddLink">
        <div class="buy-window">
          <span class="close el-icon-close" @click="closeBuyWindow"></span>
          <h3>添加购买按钮</h3>
          <el-select v-model="optionValue" filterable placeholder="请选择HT_Item_product" >
            <el-option
              v-for="(item,index) in productList"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
          <el-input
              v-model="btnTitle"
              placeholder="请输入title"
              id="btn-title"
              v-show="flag"></el-input>
          <el-input type="text"
                    v-show="showAddLink"
                    v-model="link"
                    placeholder="请输入跳转URL,例：//www.hellotalk.com"></el-input>
          <div class="block ">
            <span class="demonstration">FC</span>
            <el-color-picker v-model="color" ></el-color-picker>
            <span class="demonstration">BC</span>
            <el-color-picker v-model="bgColor" ></el-color-picker>
          </div>
          <div class="platform">
            <el-radio v-model="radio" label="1">WeChat</el-radio>
            <el-radio v-model="radio" label="2">Brain Tree</el-radio>
            <transition name="fade">
              <div v-show="radio!==0">
                <el-input v-model="successTip" placeholder="请输入购买成功后的提示语！(必填)"  :disabled="false" ></el-input>
                <el-input v-model="failTip" placeholder="请输入购买失败后的提示语！(必填)"  :disabled="false"></el-input>
              </div>
            </transition>
          </div>
          <el-checkbox v-model="webClose">web close</el-checkbox>
          <div class="btn">
            <el-button  type="success"
                        v-show="flag"
                        :disabled="optionValue.length===0 || btnTitle.length===0 || radio===0 || successTip.length===0 || failTip.length===0"
                        @click="addBuyBtn">确认</el-button>
            <el-button type="primary" @click="addPic" v-show="showAddLink&&!flag">确认</el-button>
            <el-button type="info" @click="closeBuyWindow">取消</el-button>
          </div>
        </div>
    </div>
    </transition>
    <transition name="fade">
      <div class="course-list-wrap" v-show="flag1">
          <div class="course-list">
            <span class="close el-icon-close" @click="closeListWindow"></span>
            <h3>添加课程列表</h3>
            <div class="list-item-wrap">
              <el-collapse v-model="listItem" accordion>
                <el-collapse-item  :name="item.courseIndex" v-for="item in courseList" :title="item.courseName" :key="item.courseIndex">
                  <el-input placeholder="Title: 标题" v-model="item.title" @blur="valid(item.title)"></el-input>
                  <el-input placeholder="Intro: 介绍" v-model="item.intro" @blur="valid(item.intro)"></el-input>
                  <el-input type="text" v-model="item.url"  placeholder="请输入跳转链接,例：//www.hellotalk.com" @blur="valid(item.url,true)"></el-input>
                  <el-input type="text" v-model="item.pic" placeholder="请输入图片地址,例：//www.xxx.jpg" @blur="valid(item.pic,true)"></el-input>
                  <div class="switch-container">
                    <span>试听:&nbsp;&nbsp;</span>
                    <el-switch v-model="item.isAudition"></el-switch>
                  </div>
                  <div class="switch-container">
                    <span>分割线:&nbsp;&nbsp;</span>
                    <el-switch v-model="item.showSplitLine"></el-switch>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
            <div class="btn">
              <el-button  type="success" @click="submitListInfo">确认</el-button>
              <el-button type="info" @click="closeListWindow">取消</el-button>
              <el-button type="primary" @click="addCourseItem" :disabled="true">添加课程</el-button>
              <el-button @click="delCourseItem" :disabled="true">删除课程</el-button>
            </div>
          </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="course-list-wrap" v-show="flag2">
        <div class="course-list">
          <span class="close el-icon-close" @click="closeListWindow2"></span>
          <h3>选择预购买课程</h3>
          <div class="list-item-wrap">
            <div class="list-item" v-for="item in permissionList">
              <el-checkbox v-model="item.permission" @change="setPermission()"></el-checkbox>
              <el-input type="text" v-model="item.productId" :disabled="true"></el-input>
              <!--<el-input type="url" v-model="item.link" placeholder="//www.hellotalk.com"></el-input>-->
            </div>
            <el-input type="text" v-model="pLink" v-show="perm" placeholder="请输入未购买链接!" ></el-input>
          </div>
          <div class="btn">
            <el-button  type="success" @click="updatePermission">确认</el-button>
            <el-button type="info" @click="closeListWindow2">取消</el-button>
          </div>
        </div>
      </div>
    </transition>
    <!--<transition name="fade">-->
      <!--<div class="addLink" v-show="showAddLink">-->
        <!--<el-input type="text" v-model="link" placeholder="请输入跳转URL,例：//www.hellotalk.com"></el-input>-->
        <!--<span class="close el-icon-close" @click="showAddLink=false"></span>-->
        <!--<el-button type="primary" @click="addPic">确认</el-button>-->
      <!--</div>-->
    <!--</transition>-->

    <el-progress :text-inside="true"
                 :stroke-width="18"
                 v-if="percent!=0"
                 :percentage="percent"
                 class="progressBar"></el-progress>
    <el-upload
      class="file_mainUpload"
      :action="apiList.UPLOAD_FILE"
      :headers="{'X-Auth-Token':'xuan'}"
      :file-list="fileList"
      :on-change="handleChange"
      :on-progress="handleProgress"
      :on-success="handleSuccess"
      :on-error="handleError"
      :show-file-list="false"
      :accept="this.acceptFileType()">
      <el-button size="small" type="primary" ref="uploadBtn">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Message } from 'element-ui'
import * as msgApi 	from '../../api'
export default {
  name: 'tinymce',
  computed:{
    ...mapGetters([ 'apiList', 'token' ])
  },
  props: {
    id: {
      type: String
    },
    value: {
      type: String,
      default: ''
    },
    toolbar: {
      type: Array,
      required: false,
      default() {
        return ['removeformat undo redo | fontsizeselect | fontselect |  formatselect | bullist numlist | outdent indent | forecolor backcolor | bold italic blockquote |  media link | alignleft aligncenter alignright | imgBtn | audBtn | vudBtn | code | addBtn | addBottomPic | addList | editProdcut']
      }
    },
    menubar: {
      default () {
        return ''
      }
    },
    height: {
      type: Number,
      required: false,
      default: 630
    },
    defaultStyle: {
      type: Boolean,
      required: false
    },
    jumpLink: '',
    preBuyProduct: ''
  },
  data() {
    return {
      hasChange: false,
      hasInit: false,
      tinymceId: this.id || 'vue-tinymce-' + +new Date(),
      fileList:[],
      fileType: 'image',
      percent: 0,
      flag: null,
      productList: [],
      optionValue: '',
      btnTitle: '',
      radio: 0,
      successTip: '',
      failTip:'',
      webClose: false,
      color: '#fff',
      bgColor: '#EB2F09',
      showAddLink: false,
      link: '',
      flag1: null,
      listItem: 1,
      courseList:[
        {
          courseName: 'list1',
          courseIndex: '1',
          title1: '第1课',
          title: 'Small troubles on the plane',
          intro: '最晚登机时间？行李怎么就超重了？航站楼去哪一座？',
          datetime: '2018年1月5日 16:25',
          permission:false,
          isAudition: true,
          showSplitLine: true,
          url: '//www.hellotalk.com',
          pic: '//ali-hk-cdn.hellotalk8.com/class_share/20180105/6a0a34d5bb1d7c7fbbac61e7bc51ea63.jpg'
        }
      ],
      flag2: null,
      permissionList: [],
      perm: false,
      pLink: ''
    }
  },
  watch: {
    value(val) {
      if (!this.hasChange && this.hasInit) {
        this.$nextTick(() => window.tinymce.get(this.tinymceId).setContent(val))
      }
    }
  },
  mounted() {
    const _this = this
    window.tinymce.init({
      selector: `#${this.tinymceId}`,
      // auto_focus:`${this.tinymceId}`,
      // min_height:120,
      // max_height:500,
      theme: 'modern',
      body_class: 'panel-body ',
      toolbar: this.toolbar,
      menubar: this.menubar,
      plugins: 'colorpicker,advlist,autolink,textcolor,link,lists,media,wordcount,code',
      // code_dialog_height: 450,
      // code_dialog_width: 1000,
      advlist_bullet_styles: 'square',
      advlist_number_styles: 'default',
      default_link_target: '_blank',
      fontsize_formats: '8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 17pt 18pt 20pt 22pt 24pt 36pt',
      link_title: true,
      init_instance_callback: editor => {
        if (_this.value) {
          editor.setContent(_this.value)
        }
        _this.hasInit = true
        editor.on('NodeChange Change KeyUp', () => {
          this.hasChange = true
          this.$emit('input', editor.getContent())
        })
      },
      setup(editor) {
        editor.addButton('imgBtn', {
          icon: 'image',
          tooltip: 'Upload image',
          onclick: function () {
            _this.fileType = 'image';
            setTimeout(function(){
              _this.$refs.uploadBtn.$el.click();
            }, 100);
          }
        })
        editor.addButton('audBtn', {
          icon: 'media',
          tooltip: 'Upload audio',
          onclick: function () {
            _this.fileType = 'audio';
            setTimeout(function(){
              _this.$refs.uploadBtn.$el.click();
            }, 100);
          }
        })
        editor.addButton('vudBtn', {
          icon: 'media',
          tooltip: 'Upload media',
          onclick: function () {
            _this.fileType = 'video';
            setTimeout(function(){
              _this.$refs.uploadBtn.$el.click();
            }, 100);
          }
        })
        editor.addButton('addBtn', {
          icon: 'hr',
          tooltip: 'Buy button',
          onclick: function () {
            _this.flag = true;
          }
        })
        editor.addButton('addBottomPic',{
          icon: 'image',
          tooltip: 'Bottom Pic',
          onclick: function () {
            _this.showAddLink = true ;
          }
        })
        editor.addButton('addList', {
          icon: 'hr',
          tooltip: 'Course List',
          onclick: function () {
            _this.flag1 = true;
          }
        })
        editor.addButton('editProdcut', {
          icon: 'hr',
          tooltip: 'Edit Product Permissions',
          onclick: function () {
            _this.flag2 = true;
            _this.pLink = _this.jumpLink;
            _this.permissionList.forEach(function (val,index) {
              _this.preBuyProduct.forEach(function (item,i) {
                if(val["productId"]===item){
                  val["permission"] = true;
                  _this.perm = true;
                }
              })
            })
          }
        })

      }
    })
    _this.getProductList()

  },
  methods: {
    acceptFileType() {
      let _fileType = '';
      switch (this.fileType) {
        case 'audio' : _fileType = 'audio/mpeg,audio/x-wav,audio/x-ms-wma';break;
        case 'image' : _fileType = 'image/jpeg,image/png';break;
        case 'video' : _fileType = 'video/mp4,video/webm,video/ogg';break;

      }
      return _fileType;
    },
    handleChange(file,fileList) {
      // console.log(file);
    },
    handleProgress(event,file,fileList) {
      // console.log(event);
      // console.log(file);
      if (event&& typeof event.percent==='number') {
        this.percent = parseInt(event.percent);
      }else{
        this.percent = 0;
      }
    },
    handleSuccess(response,file,fileList) {
      console.log('heihe:');
       console.log(response);
      this.percent = 0;
      if (response.status !== 0) {
        Message({
          message: response.message,
          type: 'error',
          duration: 5 * 1000
        })
        return;
      }
      Message({
        message: '上传成功',
        duration: 5 * 1000
      })
      if (this.fileType === 'image') {
        window.tinymce.get(this.tinymceId).insertContent('<img id="testImg" class="wscnph" src="'+response.fileLoc+'?x-oss-process=image/resize,w_750/quality,q_88" >')
      }else if(this.fileType === 'audio'){
        let self = this;
        let audio =  document.createElement('audio');
        audio.setAttribute("src",response.fileLoc);
        audio.setAttribute("preload","metadata");
        audio.addEventListener("loadedmetadata",function () {
          let duration = this.duration;
          if(duration){
            let mDiv =  '<div class="voice-template audios">\n' +
              '        <audio  src="" data-src="'+response.fileLoc+'" data-duration="'+duration+'" >您的浏览器不支持audio标签。</audio>\n' +
              '        <div class="aplay-animation-box oval-2" ></div>\n' +
              '        <div class="progress"></div>\n' +
              '        <button class="duration" style="-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;"></button>\n' +
              '       <div class="loading"></div></div>';
            mDiv = self.defaultStyle?mDiv:'<audio  src="'+response.fileLoc+'" preload="metadata" controls style="display: block;" >您的浏览器不支持audio标签。</audio>'
            window.tinymce.get(self.tinymceId).insertContent(mDiv);
          }
        });
      }
    },
    handleError(err,file,fileList) {
      this.percent = 0;
      Message({
        message: '上传出错啦,请检查',
        type: 'error',
        duration: 5 * 1000
      })
    },
    closeBuyWindow() {
      this.flag = false;
      this.optionValue = '';
      this.btnTitle = '';
      this.radio = 0;
      this.successTip = '';
      this.failTip = '';
      this.webClose = false;
      this.showAddLink = false;
    },
    addBuyBtn() {
        let className;
        if(this.radio==1) className = 'buyWithHelloTalk';
        if(this.radio==2) className = 'buyWithBraintree';
        let closewebview = this.webClose?1:0;
        let btn = `<input type="button"
                          data-productid="${this.optionValue}"
                          data-paysuccess="${this.successTip}"
                          data-payfail="${this.failTip}"
                          data-closewebview="${closewebview}"
                          value=" ${this.btnTitle}"
                          class="${className}"
                          style="border-radius: 4px; display: inline-block; padding: 5px 20px; color: ${this.color}; background-color:${this.bgColor}; box-sizing: border-box;" >
                    </input>`;
        window.tinymce.get(this.tinymceId).insertContent(btn);
        this.flag = false;
        this.optionValue = '';
        this.btnTitle = '';
        this.radio = 0;
        this.successTip = '';
        this.failTip = '';
        this.webClose = false;
    },
    getProductList () {
      let self = this;
      msgApi.getProductList({
      }).then(data=>{
        var res = data.data;
        if (res&&res.status===0) {
          this.productList=res.data;
          let self = this;
          for (let i = 0;i<self.productList.length;i++){
            let permission = false;
            self.permissionList.push({"permission": permission, "productId": self.productList[i] });
          }

        }else{
          Message({
            message: 'get productList error',
            type: 'error',
            duration: 5 * 1000
          })
        }
      }).catch(err=>{ console.log(err); })
    },
    addPic() {
      let className;
      if(this.radio==1) className = 'buyWithHelloTalk';
      if(this.radio==2) className = 'buyWithBraintree';
      let closewebview = this.webClose?1:0;
      let pic = `<a href="${this.link}" class="${className}"
                  style="display: block;width:100%;position: fixed;left:0;bottom: 0;height: 60px;z-index:999999;"
                  data-productid="${this.optionValue}"
                  data-paysuccess="${this.successTip}"
                  data-payfail="${this.failTip}"
                  data-closewebview="${closewebview}">
                  <img src="https://ali-hk-cdn.hellotalk8.com/class_share/20171215/c1daf3cf38c2671c40ca0b323bc70305.png" alt="支付" width="100%" height="100%"></a>`;
      window.tinymce.get(this.tinymceId).insertContent(pic);
      this.showAddLink = false;
    },
    closeListWindow () {
      this.flag1 = false;
    },
    addCourseItem () {
      let index = this.courseList.length + 1;
      let name = ' list'+index;
      let data = {
        courseName: name,
        courseIndex: index,
        title1: '',
        title2: '',
        teacher: '',
        datetime: '',
        permission:false,
        url: '',
        pic: ''
      };
      this.courseList.push(data);
    },
    delCourseItem () {
      if (this.courseList.length > 0) {
        this.courseList.pop();
      }
    },
    submitListInfo () {
      let lists = '';
      this.courseList.forEach((item,index) => {
        let listItem = `
          <section class="course-list-item" style="display: flex; background-color: #ffffff; padding: 17.5px 30px 17.5px 15px; justify-content: flex-start; flex-direction: row; align-items: flex-start; border-bottom: ${item.showSplitLine ? 1: 0}px solid #cccccc; position: relative;">
            <a href="${item.url}?{param}" class="resetHref" style="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; color: transparent; background: transparent; z-index: 10" >1</a>
            <img style="width: 90px;height: 90px; margin-right: 22.5px; border-radius: 3%;" src="${item.pic}?x-oss-process=image/resize,m_fixed,h_90,w_90">
            <div class="content" style="display: flex; flex-direction: column; width: 100%; overflow: visible;">
              <div class="title" style="font-family: Helvetica; font-size: 20px; line-height: 20px; font-weight: bold; color: black; text-align: left; padding: 0; margin: -1.5px 0 5.5px 0;">
                ${item.title}
                ${item.isAudition ? `
                  <div class="tag" style="display: inline-flex; position: relative; width: 20px; height: 20px; vertical-align: middle;">
                    <span style="display: inline-flex; position: absolute; top: 0; left: 0; background: #405bd3; border-radius: 3px; font-size: 12px; letter-spacing: 3.4px; padding: 3.5px 1.1px 2.5px 4.5px; height: 12px; line-height: 12px; white-space: nowrap; color: white; vertical-align: middle;">试听</span>
                  </div>
                  ` : ''
                }
              </div>
              <p class="intro" style="font-family: NotoSansHans; font-size: 12.5px; color: #969696; text-align: left; line-height: 17.5px; padding: 0; bottom: -2.5px; position: relative; pointer-events: none;">${item.intro}</p>
            </div>
          </section>
          <p>&nbsp;</p>
        `
        lists+= listItem;
      });
      window.tinymce.get(this.tinymceId).insertContent(lists);
      this.flag1 = false;
    },
    updatePermission() {
      let json = {
        pre_buy_product : [],
        jump_link: ''
      };
      this.permissionList.forEach(function (value,index) {
        if(value["permission"]) {
          json.pre_buy_product.push(value["productId"]);
        }
      });
      if(this.perm&&this.pLink.trim().length>0) {
        json.jump_link = this.pLink;
      }
      this.$emit("getChildSendData",json);
      this.flag2 = false;
    },
    closeListWindow2 () {
      this.flag2 = false;
    },
    setPermission() {
      this.perm = this.permissionList.some(function (ele) {
        return  ele["permission"] !== false;
      })
    },
    valid(data) {
      if(!data||data.length<0) {
        console.log('不能为空');
      }
    }

  }
}
</script>

<style scoped>
.tinymce-container {
  position: relative;
  /*height: 80%;*/
  min-width: 695px;
  margin:10px auto;
}
.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}
.editor-custom-btn-container {
  position: absolute;
  right: 15px;
  /*z-index: 2005;*/
  top: 18px;
}
.editor-upload-btn {
  display: inline-block;
}
.file_mainUpload{
  display: none;
}
.progressBar{
  position: absolute;
  bottom:0;
  left:0;
  width:100%;
}
#tinymce .audios > div{
  display: none;
}
.buy-window-wrap,.course-list-wrap{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.7);
}
.buy-window,.course-list{
  position:absolute ;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 80%;
  padding: 15px 0 25px 0;
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  -o-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  z-index: 2000;
  background: #fff;
  border-radius: 10px;
}
.list-item-wrap{
  width: 90%;
  padding:0 5%;
  height: 80%;
  overflow-y: scroll;
  box-shadow: 0 0 2px #137ecc;
}
.buy-window h3,.course-list h3{
  text-align: center;
}
.close{
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  color: #555;
  cursor: pointer;
}
.list-item{
  padding-left: 60px;
  box-sizing: border-box;
}
.list-item .el-input,.list-item .el-checkbox{
  width: auto;
  margin-left: 0;
}
.list-item .el-input{width: 80%}
.el-select,.el-input,.el-checkbox,.platform,.el-radio-group,.el-date-picker{
  width: 80%;
  margin-left: 10%;
  margin-top: 10px;
}
.course-list-wrap .btn{
  padding-left: 5%;
  position: absolute;
  bottom:10%;
}
.list-item-wrap .switch-container {
  display: flex;
  margin-left: 10%;
  margin-top: 10px;
}
.buy-window .btn{
  position: absolute;
  left: 60px;
  bottom: 10%;
}
.block{
  position: absolute;
  right: 60px;
  bottom: 10%;
}
.demonstration{
  font-size: 12px;
}

.platform .el-input{
  margin-left: 0;
}
.addLink{
  position: absolute;
  top: 50%;
  left:50%;
  margin-top: -50px;
  -webkit-transform: translate(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 300px;
  height: 100px;
  background: #fff;
  box-shadow: 0 0 0 1px #d7d7d7;
}
.addLink .el-button{
  float: right;
  margin-top: 10px;
  margin-right: 30px;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
