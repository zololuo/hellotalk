<template>
  <div class="wrapper" :class="[isWeb?'web_warpper':'']"   >
      <div 	class="ipx-box"
					v-if="isIphoneX"></div>
      <div class="video_wrapper" ref="video_wrapper" :class="[isIphoneX?'ipx-box':isIos?'iosTop':'']">
          <image :src="defaultPPTUrl" class="ppt_img" v-if="!currentPPTUrl"></image>
          <image :src="'https:'+item.Url" 
                 class="ppt_img" 
                 :style="{width:fullWidth}"
                 v-for="(item,index) in pptInfo.recordppt" 
                 v-if="index==currentPPTIndex"
                 :key="index"
                 @appear="appear"
                 @disappear="disappear(index)"></image>
          <webAudio class="video" :audioSrc="audioSrc" v-if="isWeb" @receive="playPPT" :pptInfo="pptInfo" :pptIndex="currentPPTIndex"></webAudio>
          <weexAudio class="video" 
                     :audioSrc="audioSrc" 
                     :duration="recordDuration" 
                     :durationText="durationText" 
                     v-if="!isWeb" @receive="playPPT" 
                     :pptInfo="pptInfo" 
                     :pptIndex="currentPPTIndex"></weexAudio> 
          <topBar class="topBar" :title="curTitle" :style="{width:fullWidth}"></topBar> 
      </div>
      <div class="bottom" :style="{width:fullWidth,}">
        <list class="list" @loadmore="loadmore" loadmoreoffset="10" ref="list" >
            <cell>
                <div class="course_time_wrapper">
                  <text class="icon icon_time">&#xe629;</text>
                  <text class="course_time_text">{{gl_lesson_time+'：'}}</text>
                  <text class="course_time_text">{{courseTime}}</text>
                </div>
            </cell>
            <cell>
                <div class="ppt_content" @click="alertInfoMask(true)">
                    <image :src="pptHeadUrl" class="ppt_head_pic"></image>
                    <div class="info_content">
                        <text class="title">{{curTitle}}</text>
                        <text class="intro">{{class_introduce}}</text>
                    </div>
                </div>
            </cell>
            <cell v-for="(item,index) in chatInfo" :key="index" >
                <div :class="[index==chatInfo.length-1?'':'']">
                    <div class="chat_info" v-if="item.role!=2" >
                        <div class="head_wrapper">
                            <div class="head_pic_wrapper">
                              <image class="head_pic" :src="item.headUrl" resize="cover"></image>
                              <image class="pic_mask" src="https://ali-hk-cdn.hellotalk8.com/class_share/20180621/0a5d87a9b0e257f0b604b6caaadada90.png"></image>
                            </div>
                            <div class="flag_wrapper">
                                <image class="flag_pic" :src="item.flagUrl"></image>
                            </div>
                        </div>
                        <div class="info_wrapper">
                            <text class="nick_name">{{item.nickName}}</text>
                            <text class="chat" :class="[item.isMe?'me':'']">{{item.info}}</text>
                        </div>
                    </div>
                    <div class="chat_info chat_info_role2" v-if="item.role==2" >
                        <div class="info_wrapper info_wrapper_role2" >
                            <div class=" nick_name_wrapper">
                              <text class="nick_name nick_name_role2">{{item.nickName}}</text>
                            </div>
                            <div class="role2_chat_wrapper">
                                <text class="role2_chat" :class="[item.isMe?'me':'']">{{item.info}}</text>
                            </div>
                        </div>
                        <div class="head_wrapper">
                            <div class="head_pic_wrapper">
                              <image class="head_pic" :src="item.headUrl" resize="cover"></image>
                              <image class="pic_mask" src="https://ali-hk-cdn.hellotalk8.com/class_share/20180621/0a5d87a9b0e257f0b604b6caaadada90.png"></image>
                            </div>
                            <div class="flag_wrapper">
                                <image class="flag_pic" :src="item.flagUrl"></image>
                            </div>
                        </div>
                    </div> 
                </div>
            </cell>
            <loading v-if="!noMore" 
                     class="loading_box" 
                     :display="isLoading?'show':'hide'">
                  <loadingTmp :style="{width: fullWidth}"></loadingTmp>
            </loading>
        </list>
        <scroller class="mask" :style="{width:fullWidth, height:alertMaskHeight, bottom:'-'+alertMaskHeight}"  ref="mask" @touchstart="cancelMove">
           <div class="hide_btn"  @click="alertInfoMask(false)">
             <text class="icon icon_down">&#xe62d;</text>
           </div>
           <div class="mask_head">
              <text class="class_title">{{curTitle}}</text>
              <div class="class_time">
                <text class="time_text">{{gl_lesson_time}}</text>
                <div class="time_wrapper">
                   <text class="icon icon_time">&#xe629;</text>
                   <text class="class_time_text">{{courseTime}}</text>
                </div>
              </div>
           </div>
           <div class="course_intro_wrapper">
              <text class="course_intro_title intro_title">{{gl_lesson_description}}</text>
              <text class="course_intro">{{class_introduce}}</text>
           </div>
           <div class="teacher_intro_wrapper">
              <text class="teacher_intro_title intro_title">{{gl_teacher_description}}</text>
              <text class="teacher_intro">{{teacher_introduce}}</text>
           </div>
        </scroller>
      </div>
      
  </div>
</template>

<script>
  
  const animation = weex.requireModule('animation');
  const dom = weex.requireModule('dom');
  import * as util from '../util'
  import webAudio from '../components/home/audio.vue'
  import weexAudio from '../components/home/weexAudio.vue'
  import loadingTmp from '../components/home/loading.vue'
  import topBar  from   '../components/home/tabBar.vue'
  
  export default {
    components:{webAudio, loadingTmp, weexAudio, topBar},
    data() {
      return {
       
        // 客户端传参
        
        record_id : "5b4c473e372cbf1a8ba1f74e",               // record_obid
        lesson_id: "5b48a85a372cbf1a8ba1f726",                // lessonobid

        room_id : "",                 // room_id
        open_id : "",                 // openid
        // 请求后端接口
        adminList : [],               // 管理员ID列表
        teacher_openid : "",          // 老师的openid
        ppt_url: '',                  // pptUrl                        
        audioSrc: '',                 // 音频URL           
        recordDuration: 0,   
        durationText: '',   
        courseTime: '',               // 上课时间
        pptHeadUrl: '',               // ppt首张图片
        curTitle: '',                 // 课程标题
        class_introduce: '',          // 课程简介
        teacher_introduce: '',        // 老师简介
        
        pptInfo: {},                  // ppt信息
        chatInfo: [],                 // 聊天信息
        userInfo: {},                 // 用户基本信息
        localUserInfo: '',            // 本地模拟数据
        msg_length: 0,                // 聊天消息长度 
        recordMsg: '',                // 聊天信息

        defaultPPTUrl: '',            // 默认pptURL
        currentPPTUrl: '',            // 当前播放的pptURl
        nextPPTUrl: '',               // 下一张pptURl
        currentPPTIndex: null,        // 当前播放的ppt索引
        
        seq: '0',
        noMore: false,                                
        isLoading: false,
        change: false,
        
        // 多语言翻译
        gl_lesson_time: '',           // 上课时间
        gl_lesson_description:'',     // 课程简介
        gl_teacher_description: '',   // 老师简介
        
        alertMaskHeight: '',          // 弹出信息框的高度
      }
    },
    methods:{
        getLessonRecordInfo(){
          var param = '/'+this.lesson_id+'/'+this.record_id+'?openid='+this.open_id;
           util.$get('lessonRecordInfo',param).then(res=>{
                if(res&&res.data){
                   var data = res.data.data; 
                   var cdn_host = data.CDN_HOST;
                    this.curTitle = data.LessonTitle;
                    this.courseTime = data.LessonTime;
                    this.pptHeadUrl = 'http:'+data.LessonCover;
                    this.class_introduce = data.LessonAbstract;
                    this.teacher_introduce = data.TeacherAbstract;
                    this.room_id = data.RoomOpenid;
                    this.teacher_openid = data.TeacherOpenid;
                    this.adminList = data.adminList;
                    this.defaultPPTUrl = 'http:'+data.frontEndConfig.pptPicDefault;
                    this.ppt_url = data.pptUrl;
                    this.audioSrc = 'http://'+data.voiceUrl;
                    this.recordDuration = data.recordDuration;
                    this.durationText = util.transform_time(data.recordDuration);
                    this.getFileData();
                    // // 浏览器环境 同源策略限制 使用本地数据
                    // this.pptInfo.recordppt.some(function(ele,index,arr){
                    //       if(ele.Url&&ele.Url!='') {
                    //           this.currentPPTIndex = index;
                    //           this.currentPPTUrl = ele.Url;
                    //           this.nextPPTUrl = arr[index+1].Url;
                    //           return true;
                    //       }
                    // }.bind(this));  
                    this.getChatMsg();
                } 
            });
        },
        getFileData() {
            // 模拟器或真实环境
            if(!this.ppt_url){ return false;}
            var self = this;
            var param = '?url=http://'+this.ppt_url;
            util.$get('getFileData',param).then(res=>{
                if(res&&res.data){
                    var data = res.data;
                    this.pptInfo = data;
                    this.pptInfo.recordppt.some(function(ele,index,arr){
                            if(ele.Url&&ele.Url!='') {
                                this.currentPPTIndex = index;
                                this.currentPPTUrl = ele.Url;
                                this.nextPPTUrl = arr[index+1].Url;
                                return true;
                            }
                    }.bind(this)); 
                    // this.currentPPTUrl = this.pptInfo.recordppt[0].Url?this.pptInfo.recordppt[0].Url:this.defaultPPTUrl;
                } 
            });
        },
        getChatMsg() {
            if(!this.room_id||!this.record_id) {return false;}
            var params = '/'+this.record_id+'?cliseq='+this.seq+'&roomid='+this.room_id;
            util.$get('recordMsg',params).then(res=>{
                if(res&&res.data){
                    if(this.seq==res.data.cur_max_seq) {
                        this.noMore = true;
                        this.isLoading = false;
                        return;
                    }
                    if(res.data.data.length>0) {
                        var data = res.data.data;
                        this.seq = res.data.cur_max_seq;
                        var self = this;
                        this.msg_length+= data.length;
                        this.recordMsg = this.recordMsg.concat(data);
                        this.recordMsg.forEach((val,index)=>{
                            self.userInfo[val.sender_id] = {};
                        });
                        this.getUserInfo();
                        setTimeout(function(){
                         this.isLoading = false;
                        }.bind(this),500);
                    }
                }else{
                    
                    setTimeout(function(){
                        this.noMore = true;
                        this.isLoading = false;
                    }.bind(this),500);
                }
            });
        },
        playPPT(data){
            this.currentPPTUrl = data.url;
            this.currentPPTIndex = data.index;
            this.nextPPTUrl = data.nextUrl;
            this.change = true;
        },
        setChatMsg() {
            for(var i=0; i<this.msg_length; i++){
                  var obj = {};
                  var userid = this.recordMsg[i].sender_id;
                  var pic = '', flagName = '', role= '', isMe= null ;
                  for (var j=0,len = this.adminList.length;j<len;j++) {
                      if (userid===this.teacher_openid){
                          role = '0';  // 老师
                      }else if(userid!==this.teacher&&userid===this.adminList[j]) {
                          role = '1';  // 管理员
                      }else{
                          role = '2';  // 学生
                      }
                  }
                  isMe = userid===this.open_id?true:false;
                  for (var key in this.userInfo) {
                      if(userid===key) {
                          pic = this.userInfo[key].pic;
                          flagName = this.userInfo[key].flag;
                      }
                  }
                  obj = {
                      headUrl: 'https:'+pic, 
                      nickName: this.recordMsg[i].sender_name,
                      info: util.androidStrToEmoji(this.recordMsg[i].text.text),
                      role: role,
                      isMe: isMe,
                      flagUrl: flagName
                  };
                  this.chatInfo.push(obj);
            }
        },
        getUserInfo() {
            var params = '?openid=';
            for(var key in this.userInfo) {
                params+= key+',';
            }
            params = params.replace(/\,$/,'');
            util.$get('userInfo',params).then(res=>{
               if(res&&res.data) {
                  this.setUserInfo(res.data);
               }
            })
        },
        setUserInfo(data) {
            data = data.data;
            for (var key in data) {
                this.userInfo[key] = {
                  pic: data[key].HU,
                  flag: util.getFlagUrl(data[key].CN)
                } 
            }
            this.setChatMsg();
        },
        loadmore() {
            this.isLoading = true;
            if(!this.noMore) {
                this.getChatMsg();
            }
        },
        alertInfoMask(flag) {
          var value = flag?(this.alertMaskHeight):0;
          animation.transition(this.$refs.mask, {
            styles: {
               transform: `translateY(-${value})`,
            },
            duration: 500, //ms
            timingFunction: 'ease',
            delay: 0 //ms
          });
        },
        cancelMove() {},
        getTranslate(){
          // 翻译多语言
          var self = this;
          util.translate('GL_LESSON_TIME').then(res=>{
             self.gl_lesson_time = res;
          });
          util.translate('GL_LESSON_DESCRIPTION').then(res=>{
             self.gl_lesson_description = res;
          });
          util.translate('GL_TEACHER_DESCRIPTION').then(res=>{
             self.gl_teacher_description = res;
          });
        },

    },
    computed: {
        isWeb() {
          return weex.config.env.platform=='Web';
        },
        isIos() {
          return /ios/gi.test(WXEnvironment.osName);
        },
        fullWidth(){
           if(weex.config.env.platform==='Web') {//web平台
                return '100%';
            }else{
                return weex.config.viewport+'px';
            }
        },
        isIphone5() {
          // let device = weex.config.env.deviceModel;
          return /^(iPhone)5|6,./gi.test(weex.config.env.deviceModel);
        },
        isIphoneX() {
            return weex.config.env.deviceModel==='iPhone10,3'||weex.config.env.deviceModel==='iPhone10,6';
        },
        isIosUnder11() {
            return /ios/gi.test(WXEnvironment.osName)&&Number((weex.config.env.osVersion).split('.')[0])<11;
        }
    },
    mounted() {
        util. moduleCall('weexUtility','userInfo').then(res=>{
            if(res&&res.userid){
                this.open_id = res.userid;
            }
            var obj =  util.extractData(weex.config.bundleUrl);   // 获取页面参数
            // util.alertAct(weex.config.bundleUrl);
            // util.alertAct(weex.config.env.osVersion);
            if(obj.roomid&&obj.recordid&&obj.lessonid) {
                this.room_id = obj.roomid;
                this.record_id = obj.recordid;
                this.lesson_id = obj.lessonid;   
            }
            this.getLessonRecordInfo();
            this.getTranslate();
            // 设置alertmask的高度
            this.alertMaskHeight = this.isWeb?'100%':(this.isIos?weex.config.screenHeight-20:weex.config.screenHeight) - 210+'px'; 
            weex.requireModule('globalEvent').addEventListener("onBackPressed",function(){
                util.moduleCall('playerModule','clear');
            });
        });
       
    },
    created() {
       
    }
  }
</script>
<style scoped>
    .iosTop{
        margin-top: 20px;
    }
    .ipx-box{
        margin-top: 30px;
    }
    .web_warpper{
      height: 100%;
    }
    .video_wrapper{
        background-color: #ffffff;
        height: 210px;
    }
    .topBar{
      position: absolute;
      top: 0;
      height: 44px;
    }
    .ppt_img{
        height: 210px;
    }
    .bottom{
        /*padding-bottom:74px;*/
        flex:1;
        background-color: #f7f7fb;
        overflow: hidden;
    }
    
    .list{
        flex: 1;
        background-color: #f7f7fb;
    }

    .mask{
      position: absolute;
      background-color: #ffffff;
      border-radius: 12px;
    }

    .mask_head{
       border-bottom-width: 10px;
       border-bottom-color: #f6f6f6;
       border-bottom-style: solid; 
       padding-left: 15px;
       padding-right: 15px;
    }
    .hide_btn{
       height: 42px;
       align-items: center;
       justify-content: center;
    }
    .class_title{
      color: #333333;
      font-size: 20px;
      font-weight: 600;
    }
    .class_time{
      padding-top: 16px;
      padding-bottom: 15px;
      margin-top: 5.5px;
    }
    .time_text{
      font-size: 17px;
      font-weight: 600;
      color: #333333;
    }
    .time_wrapper{
      flex-direction: row;
      height: 30px;
      padding-top: 13px;
    }
    .class_time_text{
      color: #484848;
      font-size: 16px;
    }
    .course_intro_wrapper{
      padding-left: 15px;
      padding-right: 15px; 
      padding-top: 16px;
      padding-bottom: 15px;
      border-bottom-width: 10px;
      border-bottom-color: #f6f6f6;
      border-bottom-style: solid; 
    }
    .course_intro{
      color: #484848;
    }
    .teacher_intro_wrapper{
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 12.5px;
      padding-bottom: 15px;
    }
    .course_time_wrapper{
        flex-direction: row;
        height: 40px;
        background-color: #ffffff;
        padding-left: 15px;
        padding-right: 15px;
        align-items: center;
    }
    .intro_title{
       font-size: 17px;
       color: #333333;
       font-weight: 600;
    }
    .course_intro,.teacher_intro{
       padding-top: 13px;
       font-size: 16px;
       color: #484848;
    }
    .course_time_text{
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #484848;
    }
    .ppt_content{
        flex-direction: row;
        margin-left: 20px;
        margin-right: 20px;
        height: 95px;
        border-radius: 6px;
        background-color: #ffffff;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.18);
        margin-left: 12px;
        padding-left: 10px;
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        margin-bottom: 9.5px;
        margin-top: 15px;
    }

    .ppt_head_pic{
        width: 75px;
        height: 70px;
    }

    .info_content{
       flex: 1;
       height: 75px;
       margin-left: 12.5px;
    }
    .title{
        lines:2;
        font-size: 16px;
        font-weight: 500;
        color: #484848;
        text-overflow: ellipsis;
        line-height: 19.04px;
    }
    .icon_time{
        width: 17px;
        height: 17px;
    }
    .intro{
        margin-top: 3.5px;
        color: #7e7e7e;
        font-size: 14px;
        lines: 2;
        line-height: 15.4px;
        text-overflow: ellipsis;
    }

    .chat_info{
        margin-bottom: 5px; 
        padding-left: 12px;
        padding-right: 15px;
        flex-direction: row;
    }
    .head_wrapper{
        margin-top: 19.5px;
        width: 40px;
        height: 40px;
    }
    .head_pic_wrapper{
        width: 40px;
        height: 40px;
        border-radius: 20px;
        overflow:hidden;

    }
    .head_pic{
        position: absolute;
        width: 40px;
        height: 40px;
    }
    .pic_mask{
        position: absolute;
        width: 40px;
        height: 40px;
        
    }
    
    .flag_pic{
      position: absolute;
      width: 10px;
      height: 10px;
    }
    .flag_wrapper{
      position: absolute;
      bottom: 0;
      width: 13px;
      height: 13px;
      padding: 1.5px;
      border-radius: 6.5px;
      background-color: #ffffff;
    }
    .info_wrapper{
        margin-left: 13px;
        max-width: 237px;
    }
    .role2_chat_wrapper{
        width: 237px;
        flex-direction: row;
        justify-content: flex-end;
    }
    .nick_name{
        font-size: 12px;
        line-height: 15px;
        color: #7e7e7e;
        margin-bottom: 4.5px;
        margin-left: 7px;
    } 
    .chat{
        max-width: 237px;
        color: #333333;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 15px;
        padding-right: 12.5px;
        background-color: #ffffff;
        border: solid 1px rgba(0, 0, 0, 0.18); 
        border-radius: 20px;
        font-size: 16px;
    }
    .chat_info_role2{
        flex-direction: row;
        justify-content: flex-end;
    }
    .info_wrapper_role2{
       margin-right: 13px;
    }
    .nick_name_wrapper{
       width: 237px;
       height: 15px;
       margin-bottom: 4.5px;
    }
    .nick_name_role2{
       position: absolute;
       right: 7.5px;
    }
    .role2_chat{
        max-width: 209.5px;
        color: #333333;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 15px;
        padding-right: 12.5px;
        background-color: #ffffff;
        border-radius: 20px;
        border: 1px solid rgba(0,0,0,0.18); 
    }
    .me{
      background-color: #dbebff;
    }
    .video{
        position: absolute;
        top: 0;
        left: 0;
        height: 210px;
    }
    .loading_box{
       height: 25px;
       padding-top: 5px;
    }
    .icon{
      font-family: iconfont;
    }
    .icon_time{
      color: #a4a4a4;
      font-size: 17px;
      margin-right: 10px;
    }
    .icon_down{
      font-size: 16px;
      color: #dcdcdc;
      text-align: center;
    }
</style>