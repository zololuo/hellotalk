<template>
  <div class="createCourses-box">
    <div class="createCourses-content">
      <h1>添加课程内容</h1>
      <div class="coursesTitle">
        <input type="text" placeholder="输入标题" v-model="courseTitle">
      </div>
      <div class="pageInfo">
        <el-radio-group v-model="abstract.type" @change="setCourseType">
          <el-radio :label="1">试听课</el-radio>
          <el-radio :label="2">收费课</el-radio>
          <el-radio :label="3" >课程介绍</el-radio>
          <el-radio :label="4" >课程列表</el-radio>
          <el-radio :label="5" >推送文章</el-radio>
          <el-radio :label="6" >其它</el-radio>
        </el-radio-group>
        <el-input type="text" placeholder="html页面标题" v-model="abstract.pageTitle"></el-input>
      </div>
      <div class="addHtmlWindow" style="width: 80%;height: 490px;" v-show="addHTML">
        <el-input
          type="textarea"
          placeholder="请HTML源码"
          v-model="textArea" >
        </el-input>
        <el-button type="primary" @click="createHtml" >确认</el-button>
      </div>
      <tinymce v-show="!addHTML" :height='200' :default-style="styleFlag" :jumpLink="jump_link" :pre-buy-product="pre_buy_product" v-model="courseContent" v-on:getChildSendData="set_pre_buy_product" ></tinymce>
      <el-button type="primary" @click="confirmCourseContent"
                 :disabled="courseTitle==''||courseContent==''||abstract.type==null||abstract.pageTitle==''">确定</el-button>
      <el-button type="primary" @click="DeveloperUpload"
                 :disabled="courseTitle==''||abstract.type==null||abstract.pageTitle==''">添加Html</el-button>
      <el-button type="primary" @click="openPreview"
                 :disabled="courseTitle.length===0||courseContent.length===0">预览</el-button>
      <el-button @click="cancelEdit">取消</el-button>
      <el-checkbox v-model="onlyHT" >Only_HT</el-checkbox>
      <el-checkbox v-model="checked" @change="useDefaultStyle">UseAudioStyle</el-checkbox>
      <el-checkbox :checked="countDown" @change="showCountDown=!showCountDown;countDown=!countDown">Add CountDown</el-checkbox>
    </div>
    <el-dialog :visible.sync="dialogTableVisible" custom-class="preview-wrapper" :show-close="false">
      <div class="preview-box">
        <iframe id="huoduan_frame"
                frameborder="0"
                scrolling="auto"
                :srcdoc="currentCode"
                style="display:block;height:76%;width:86%; z-index: 1;overflow: visible;"></iframe>
      </div>
    </el-dialog>
    <transition name="fade">
      <div class="box-shadow" v-show="showCountDown">
        <el-date-picker  v-model="end_time" type="datetime"  placeholder="选择结束时间" @change="checkTime"></el-date-picker>
        <div class="btn_wrap">
          <el-button type="primary" @click="addCountDown">确认</el-button>
          <el-button type="text" @click="showCountDown = false">取消</el-button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import * as msgApi 							from './../api'
  import { Message, MessageBox}   from 'element-ui'
  import Tinymce     							from './Tinymce'
  import * as mergeContent 				from './../api/courseContentHTMLconfig'
  import * as mergeHtml           from './../api/developerUploadHTML'
  import * as audioConfig         from './../api/audio.js'
  import * as countDownConfig     from './../api/countDown.js'
  import ElCheckbox from "../../node_modules/element-ui/packages/checkbox/src/checkbox.vue";
  import ElRadio from "../../node_modules/element-ui/packages/radio/src/radio.vue";
  export default {
    data() {
      return {
        courseTitle:'',
        courseContent:'',
        mode: 'create',
        abstract: {
          type: null,
          pageTitle: ''
        },
        content_id: null,
        dialogTableVisible: false,
        currentCode: null,
        checked: true,
        styleFlag: true,
        onlyHT: null,
        pre_buy_product: [],
        jump_link: '',
        arg: {},   // 传入html模板的style和js
        countDown: false,  // 是否添加倒计时活动
        end_time: null,
        showCountDown: false,
        textArea: '',
        addHTML: false,
        courseType: null   // 默认课程类型为其它
      }
    },
    components:{
      ElRadio,
      ElCheckbox, Tinymce },
    mounted() {
      if (!this.$route.params.mode) {
        this.$router.push('/coursesClass');
      }else if(this.$route.params.mode === 'edit') {
        this.mode = 'edit';
        this.openCourseContent();
        // console.log(this.$route.params);
      }else{
        // console.log(this.$route.params);
      }
      this.setArgs();
    },
    computes:{

    },
    beforeRouteLeave(to, from, next) {
      if (to.name === 'coursesDetail') {
        to.params.id 					= this.$route.params.faId;
        to.params.name        =	this.$route.params.faName;
        to.params.coursesList = this.$route.params.faCoursesList;
      }
      next();
    },
    methods:{
      openCourseContent() {
        var self = this;
        msgApi.getCourseContentInfo({
          content_id: this.$route.params.id
        }).then(data=>{
          var res = data.data;
          var abs = self.abstract;
          var reg = /&quot;/g;
          if(reg.test(res.data.abstract)) {
            abs = JSON.parse(res.data.abstract.replace(/&quot;/g,"\""))
          }
          if (res&&res.status===0) {
            self.courseTitle = res.data.title;
            self.courseContent = /<body>([\s\S]*?)<\/body>/gi.exec(res.data.content)[1];
            self.abstract = abs;
            self.content_id = res.data.id;
            self.onlyHT = res.data.only_ht?true:false;
            self.pre_buy_product = res.data.pre_buy_product;
            self.jump_link = res.data.jump_link;
          }else{
            Message({
              message: res.message,
              type: 'error',
              duration: 5 * 1000
            })
          }
        }).catch(err=>{ console.log(err); })
      },
      cancelEdit() {
        this.$router.push({
          name:'coursesDetail',
          params:{
            id:this.$route.params.faId,
            name:this.$route.params.faName,
            coursesList:this.$route.params.faCoursesList
          }
        })
      },
      confirmCourseContent() {
        var self = this;
        // MessageBox.prompt(self.abstract?'请输入课程描述':' ', ' ', {
        //      cancelButtonText: '取消',
        //      confirmButtonText: '确认',
        //      inputPlaceholder: '请输入课程描述',
        //      inputPattern: /^\S+$/,
        //      inputErrorMessage: '请正确输入课程描述',
        //      inputValue: self.abstract
        //    }).then(({ value }) => {
        if(self.mode === 'create'){
          self.createAction();
        }else{
          self.editAction();
        }
        // }).catch(() => {});
      },
      DeveloperUpload(){
          if(this.mode === 'create') {
            this.addHTML = true;

          }
      },
      createHtml(abstract){
        var self = this;
        if(!self.textArea) return false;
        msgApi.createCourseContent({
          lessonid:self.$route.params.faId,
          title:self.courseTitle,
          content: mergeHtml.contentConfig(self.textArea),
          abstract: JSON.stringify(self.abstract),
          only_ht: self.onlyHT?1:0,
          pre_buy_product: self.pre_buy_product,
          jump_link: self.jump_link

        }).then(data=>{
          var res = data.data;
          if (res.status === 0) {
            Message({
              message: '添加内容成功',
              duration: 5 * 1000
            })
            setTimeout(function() {
              self.cancelEdit();
            },500);
          }else{
            Message({
              message: res.message,
              type: 'error',
              duration: 5 * 1000
            })
          }
        }).catch(err=>{ console.log(err); })
      },
      createAction(abstract) {
        var self = this;
        msgApi.createCourseContent({
          lessonid:self.$route.params.faId,
          title:self.courseTitle,
          content: mergeContent.contentConfig(self.courseContent,self.arg,self.abstract.pageTitle),
          abstract: JSON.stringify(self.abstract),
          only_ht: self.onlyHT?1:0,
          pre_buy_product: self.pre_buy_product,
          jump_link: self.jump_link

        }).then(data=>{
          var res = data.data;
          if (res.status === 0) {
            Message({
              message: '添加内容成功',
              duration: 5 * 1000
            })
            setTimeout(function() {
              self.cancelEdit();
            },500);
          }else{
            Message({
              message: res.message,
              type: 'error',
              duration: 5 * 1000
            })
          }
        }).catch(err=>{ console.log(err); })
      },
      editAction(abstract) {
        var self = this;
        msgApi.editCourseContent({
          content_id:self.content_id,
          title:self.courseTitle,
          content:mergeContent.contentConfig(self.courseContent,self.arg,self.abstract.pageTitle),
          abstract: JSON.stringify(self.abstract),
          only_ht: self.onlyHT,
          pre_buy_product: self.pre_buy_product,
          jump_link: self.jump_link
        }).then(data=>{
          var res = data.data;
          if (res.status === 0) {
            Message({
              message: '修改内容成功',
              duration: 5 * 1000
            })
            setTimeout(function() {
              self.cancelEdit();
            },500);
          }else{
            Message({
              message: res.message,
              type: 'error',
              duration: 5 * 1000
            })
          }
        }).catch(err=>{ console.log(err); })
      },
      openPreview() {
        this.currentCode        = mergeContent.contentConfig(this.courseContent,this.arg);
        this.dialogTableVisible = true;
      },
      useDefaultStyle() {
          this.styleFlag = !this.styleFlag ;
          this.setArgs();
      },
      onlyHelloTalk() {
        if(this.onoff){
          this.onlyHT = 1;
        }else{
          this.onlyHT = 0;
        }
      },
      set_pre_buy_product(data) {
          this.pre_buy_product = data.pre_buy_product;
          this.jump_link = data.jump_link;
      },
      addCountDown() {
        this.setArgs();
        this.showCountDown = false;
      },
      setArgs() {
        if(this.styleFlag) {
          this.arg.audioStyle = audioConfig.audioStyle();
          this.arg.audioJs = audioConfig.audioJs();
        }else{
          this.arg.audioStyle = '';
          this.arg.audioJs = '';
        }
        this.arg.countDownJs = this.countDown?countDownConfig.countDown():'';
        this.arg.endTime = this.end_time/1000;
      },
      setCourseType() {
        var type = '';
//        switch(this.abstract.type){
//          case 1: type='Audition Course';break;
//          case 2: type='Charge Course';break;
//          case 3: type='Course Introduction';break;
//          case 4: type='Course List';break;
//          case 5: type='';break;
//        }
        this.arg.courseType = this.abstract.type;
      },
      checkTime(e) {
        let date = new Date(this.end_time);
        this.end_time = date.getTime();
      },
    }
  }
</script>
<style scoped>
  .createCourses-box{
    width:100%;
    height: 100%;
    background-color: #ddd;
    overflow:hidden;
  }
  .createCourses-content{
    width:80%;
    height: 92%;
    min-width: 785px;
    background-color: #fff;
    margin:4% auto;
    border-radius: 6px;
    position: relative;
    padding:1% 4%;
    padding-bottom: 0;
    box-sizing: border-box;
  }
  h1{
    font-size: 22px;
    margin-bottom: 1%;
  }
  .coursesTitle input{
    width:100%;
    height: 30px;
    font-size: 20px;
    border:none;
    outline: none;
    transition: all .1s;
    box-sizing: border-box;
  }
  .coursesTitle input:focus{
    border-radius: 4px;
    border:1px solid rgb(66,95,208);
    box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
    text-indent: 10px;
  }
  .el-button:last-of-type:focus, .el-button:last-of-type:hover{
    color: rgb(66,95,208);
    border-color: rgb(66,95,208);
  }
  .box-shadow {
    position:absolute ;
    top: 50%;
    left: 50%;
    width: 260px;
    height: 150px;
    box-sizing: border-box;
    padding: 40px 30px 15px 30px;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 2000;
    background: #fff;
  }
  .btn_wrap{
    margin-top: 20px;
  }
</style>
