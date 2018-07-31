<template>
    <div class="weex_audio" :style="{width: fullWidth}" ref="video">
        <div class="mask" v-if="playError"></div>
        <div class="controls_wrap" :style="{width: fullWidth}" @touchmove="touchmoveAct">
            <div class="controls"  ref="controls_wrap" >
                <div class="left">
                     <div class="playBtn" @click="playAudio">
                         <text class="icon icon_pause" v-if="pauseStatus">&#xe628;</text>
                        <text class="icon icon_play" v-if="!pauseStatus">&#xe627;</text>
                    </div>
                    <text class="playTime text">{{playTime}}</text>
                </div>
                <div class="progress_wrap" 
                     @touchend="touchendAct"
                     ref="progress_wrap">         
                     <playRang :level="rangLen"
                             :height="totalHeight"
                             :width="totalWidth"
                             @touchstartAct="isMove=true"/>
                </div>
                <div class="right">
                    <text class="duration text">{{durationText}}</text>
                   <!--  <div class="fullScreen_wrap" @click="fullScreen">
                        <image :src="fullScreenSrc" class="fullScreen"></image>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>

     import * as util from '../../util'
     import {isWeex} from 'universal-env'
     import playRang from '../playRange/index.vue'
     const dom = weex.requireModule('dom');
     const animation  =  weex.requireModule('animation');
     function getEl(el) {
        if (typeof el === 'string' || typeof el === 'number') return el;
        return isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
      }
     export default{
        name: 'weexAudio',
        props: {
            audioSrc: {
                type: String,
                default: ''
            },
            duration: {
                type: Number,
                default: 0
            },
            durationText: {
                type: String,
                default: '00:00'
            },
            pptInfo: {
                type: Object,
                default: {}
            },
            pptIndex: {
                type: Number,
                default: 0
            }
        },
        components:{playRang},
        data() {
            return {
                playError: false,
                playTime: '00:00:00',
                pauseStatus: true,
                pptUrlArr: [],          // ppt url
                pptTimeArr: [],         // ppt播放时间
                currentIndex: 0,        // 当前播放ppt的索引
                intervalArr: [],        // ppt播放的相对时间毫秒
                fullScreenSrc: 'https://ali-hk-cdn.hellotalk8.com/class_share/20180614/e58e522eb4677aaef5428b7d7c0df66b.png?x-oss-process=image/resize,w_750',
                isMove: false,
                rangLen: 0,
                currentTime: 0,         // 单位秒
                timer: null,
            }
        },
        methods: {
            touchmoveAct(e) {
                var offsetLeft = isWeex?90:180;
                if (this.isMove) {
                let num = Math.round((e.changedTouches[0].screenX-offsetLeft)*100/this.totalWidth);
                if (num>=0&&num<=100) {
                    this.rangLen = num;
                    this.currentTime = num/100*this.duration;
                }
                this.changePPt(this.currentTime);
                this.playTime = util.transform_time(this.currentTime); 
                 
              }
            },
            touchendAct(e) {
                this.isMove = false;
                var self = this;
                var curTime = Math.round(this.currentTime)+'' ; 
                var src = this.audioSrc;
                util.moduleCall('playerModule','seek',{url:src,seekTime:curTime}).then(res=>{

                    if(this.pauseStatus) {
                        util.moduleCall('playerModule','pause',{url:src});
                    }
                    util.moduleCall('playerModule','getProgress',{url:src}).then(ret=>{
                        this.currentTime = ret/1000;
                        // util.alertAct({
                        //     message: 'endProgress：'+ret
                        // })
                        if(ret>=Math.round(self.duration)*1000) {
                            util.moduleCall('playerModule','stop',{url:src}).then(()=>{
                                self.pauseStatus = !self.pauseStatus;
                            })
                        }
                    }); 
                }); 
            },
            playAudio(e) {
                var src = this.audioSrc;
                var self = this;
                // this.pauseStatus = !this.pauseStatus;
                //  var src = 'http://sz-ht.oss-cn-shenzhen.aliyuncs.com/accTest.aac';
                // var src = 'http://ht-blog.oss-cn-hongkong.aliyuncs.com/groupclass/18931/m_acfb8a914c687435b4daf40959871283.mp3';
                if(this.pauseStatus) {
                    util.moduleCall('playerModule','play',{url:src}).then(res=>{
                        this.pauseStatus = !this.pauseStatus;
                        if(this.timer!=null) clearInterval(this.timer);
                        if(this.currentTime>=0) {
                            this.autoPlay();
                        }
                        util.moduleCall('playerModule','getProgress',{url:src}).then(ret=>{
                            this.currentTime = ret/1000;
                        });
                    }); 
                }else{
                    util.moduleCall('playerModule','pause',{url:src}).then(res=>{
                        clearInterval(this.timer);
                        this.pauseStatus = !this.pauseStatus;
                    }); 
                }
            },
            changePPt(time) {
                time = time*1000; // 换成毫秒
                var last = this.currentIndex;
                if (this.intervalArr.length<=0) return;
                for (var i=this.intervalArr.length-1;i>0;i--){
                    if(this.intervalArr[i]<=time) {
                        this.currentIndex = i;
                        break;
                    }
                }
                if(this.currentIndex!=last) {
                    this.$emit('receive',{
                        index:this.currentIndex,
                        url:this.pptUrlArr[this.currentIndex],
                        nextUrl: this.pptUrlArr[this.currentIndex+1]
                    })
                }
            },
            getTimeInterval(arr) {
                // 返回ppt播放的相对时间毫秒
                var last = 0;
                var newArr = [0];
                for (var k = 0,length = arr.length;k<length;k++){
                    var val = arr[k];
                    if(k>0) {
                        var interval = val-arr[k-1];
                        newArr.push(last + val-arr[k-1]);
                        last = last + val-arr[k-1];
                    }
                }
                return newArr;
            },
            getIndex(time){
                var index = 0;
                if (this.intervalArr.length<=0) return;
                for (var i=len-1;i>0;i--){
                    if(this.intervalArr[i]<=time*1000) {
                        index = i;
                        break;
                    }
                }
                return index;
            },
            autoPlay(){
                this.timer = setInterval(function(){
                    if(this.currentTime>=this.duration) {
                        this.pauseStatus = true;
                        util.moduleCall('playerModule','getProgress',{url:this.audioSrc}).then(ret=>{
                            // util.alertAct({
                            //     message: 'autoEnd:'+ret
                            // })
                            if(ret>=Math.round(self.duration)*1000) {
                                util.moduleCall('playerModule','stop',{url:this.audioSrc}).then(()=>{
                                    self.pauseStatus = !self.pauseStatus;
                                })
                            }
                        }); 
                        clearInterval(this.timer);
                        return false;
                    }
                    this.currentTime++;
                    this.rangLen = this.currentTime/this.duration*100;
                    this.changePPt(this.currentTime);
                    this.playTime = util.transform_time(this.currentTime); 
                }.bind(this), 1000);
            },
            fullScreen() {

            }
        },
        computed: {
            isWeb() {
              return weex.config.env.platform=='Web';
            },
            fullWidth() {//百分比宽度
                return this.isWeb?'100%':weex.config.viewport+'px';
            },
            totalWidth() {
              if(WXEnvironment.platform==='Web') {//web平台
                return 378;
              }else{
                return weex.config.viewport-187;
              }
            },
            totalHeight() {
              if(WXEnvironment.platform==='Web') {//web平台
                return 56;
              }else{
                return 28;
              }
            }
        },
        mounted() {

            this.$nextTick(()=>{
                if(!this.audioSrc) {
                    console.log('audioSrc is null');
                    return;
                }
                var self = this;

                this.durationText = util.transform_time(this.duration);

                if(this.pptInfo&& this.pptInfo.recordppt.length>0)  {
                    this.pptInfo.recordppt.forEach( function(ele, index) {
                        this.pptUrlArr.push(ele.Url);
                        this.pptTimeArr.push(ele.TimeStamp);
                    }.bind(this));
                    this.intervalArr = this.getTimeInterval(this.pptTimeArr);
                }
            });
        },
       
    }
</script>
<style scoped>
    .weex_audio{
        /*width: 375px;*/
        height: 210px;
    }
    .mask{
        position: absolute;
        left: 0;
        top: 0;
        height: 210px;
    }
    .video{
        position: absolute;
        bottom: 0;
        left: 0;
        
    }
    .controls_wrap{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 80px;
        padding-left: 8px;
        padding-right: 15px;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    }
    .controls{
        margin-top: 49px;
        height: 28px;
        flex-direction: row;
        justify-content: space-between;
    }
    .text{
        color: #ffffff;
        line-height: 28px;
    }
    .left{
        width: 98px;
        flex-direction: row;
        /* background-color: red; */
    }
    .right{
        /*width: 70px;*/
        width: 55px;
        margin-left: 11px;
        flex-direction: row;
        align-items: center;
        /* background-color: blue; */
    }
    .playBtn{
        margin-right: 11px;
        justify-content: center;
        align-items: center;
    }
    .playBtn,.play,.pause{
        width: 28px;
        height: 28px;
    }
    .playTime,.duration{
        font-size: 12px;  
    }
    .fullScreen_wrap{
        padding-left: 20px;
        /*padding-right: 10px;*/
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .fullScreen{
        width: 20px;
        height: 20px;
    }
    .progress_wrap{
        /*width: 190px;*/
        flex: 1;
        height: 28px;
        justify-content: center;
    }
    .progress_mask{
        margin-top: 13px;
        opacity: 0.3;
        height: 2px;
        background-color: #ffffff;
        border-radius: 1.5px;
    }
    .progress{
        position: absolute;
        top: 13px;
        left: 0;
        height: 2px;
        background-color: #ffffff;
        border-radius: 1.5px;
    }
    .progress_dot{
        position: absolute;
        top: 8.5px;
        left: 0;
        width: 11px;
        height: 11px;
        background-color: #ffffff;
        border-radius: 50%;
    }
    .icon{
        font-family: iconfont;
    }
    .icon_pause,.icon_play{
        font-size: 20px;
        color: #ffffff;
    }
</style>