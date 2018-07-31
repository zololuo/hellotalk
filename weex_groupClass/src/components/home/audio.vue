<template>
    <div class="web_audio">
        <video  :src="audioSrc" 
                class="video"
                :controls="false"
                ref="audio"
                preload="metadata"></video>
        <div class="mask" v-if="playError"></div>
        <div class="controls_wrap" :style="{width: fullWidth}">
            <div class="controls">
                <div class="left">
                     <div class="playBtn" @click="palyAudio">
                        <text class="icon icon_pause" v-if="pauseStatus">&#xe628;</text>
                        <text class="icon icon_play" v-if="!pauseStatus">&#xe627;</text>
                    </div>
                    <text class="playTime text">{{playTime}}</text>
                </div>
                <div class="progress_wrap"  
                     @touchstart="onTouchStart" 
                     @touchmove="onTouchmove">
                  <div class="progress_mask" ref="progress_wrap"></div>
                  <div class="progress" :style="{width: offsetX+'px'}"></div>
                  <div class="progress_dot" :style="{left: offsetX+'px'}" ref="progress_dot"></div>
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
<style scoped>
    .web_audio{
       
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
        width: 82px;
        flex-direction: row;
    }
    .right{
        /*width: 70px;*/
        width: 35px;
        margin-left: 11px;
        flex-direction: row;
        align-items: center;
    }
    .playBtn{
        margin-right: 11px;
        align-items: center;
        justify-content: center;
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
        /*justify-content: center;*/
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
<script>
     import * as util from '../../util'
     export default{
        name: 'web_audio',
        props: {
            audioSrc: {
                type: String,
                default: ''
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
        data() {
            return {
                playError: false,
                playTime: '00:00:00',
                durationText: '00:00:00',
                offsetX: 0,             // 滚动条x坐标偏移值
                startX: null,           // 触摸点
                maxOffsetX: null,
                audioEle: null,
                pauseStatus: true,
                pptUrlArr: [],          // ppt url
                pptTimeArr: [],         // ppt播放时间
                currentIndex: 0,        // 当前播放ppt的索引
                intervalArr: [],        // ppt播放的相对时间毫秒
                fullScreenSrc: 'https://ali-hk-cdn.hellotalk8.com/class_share/20180614/e58e522eb4677aaef5428b7d7c0df66b.png?x-oss-process=image/resize,w_750',
            }
        },
        methods: {
            onTouchStart(e) {

                this.startX = e['changedTouches'][0].pageX;
                
                console.log('max: '+this.startX);
            },
            onTouchmove(e) {
                if(this.startX!==null&&this.maxOffsetX!==null){
                  var offsetX = e['changedTouches'][0].pageX-this.startX;
                  this.startX = e['changedTouches'][0].pageX;
                  this.offsetX += offsetX;
                  this.offsetX = Math.max(this.offsetX,0);
                  this.offsetX = Math.min(this.offsetX,this.maxOffsetX);
                  this.audioEle.currentTime = this.offsetX/this.maxOffsetX * this.audioEle.duration;
                  this.playTime = util.transform_time(this.audioEle.currentTime);
                }
            },
            getMaxOffestX(){
                var moveDot = this.$refs.progress_dot;
                var moveDot_w = null;
                var progress_wrap = this.$refs.progress_wrap;
                var progress_wrap_w = null;
                moveDot_w = this.isWeb?moveDot.getBoundingClientRect().width:moveDot.style.width;
                progress_wrap_w = this.isWeb?progress_wrap.getBoundingClientRect().width:e.target.style.width;
                this.maxOffsetX = parseInt(progress_wrap_w)/weex.config.env.scale - parseInt(moveDot_w)/weex.config.env.scale;
            },
            palyAudio() {
                console.log(this.$refs.audio);
                if(this.audioEle.paused) {
                    this.audioEle.play();
                }else{
                    this.audioEle.pause();
                }
                this.pauseStatus = this.audioEle.paused;
                this.audioEle.ontimeupdate = function(){
                    this.playTime = util.transform_time(this.audioEle.currentTime);
                    this.offsetX  = this.audioEle.currentTime/this.audioEle.duration * this.maxOffsetX;
                    this.changePPt(this.audioEle.currentTime);
                }.bind(this);
                this.audioEle.onended = function() {
                    this.pauseStatus = true;
                }.bind(this);
            },
            changePPt(time) {
                time = time*1000; // 换成毫秒
                // console.log(this.intervalArr);;
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
            }
        },
        computed: {
            isWeb() {
              return weex.config.env.platform=='Web';
            },
            fullWidth() {//百分比宽度
                return this.isWeb?'100%':weex.config.viewport+'px';
            },
        },
        mounted() {
            if(!this.audioSrc) {
                console.log('audioSrc is null');
                return;
            }
            if(this.pptInfo&& this.pptInfo.recordppt.length>0)  {
                this.pptInfo.recordppt.forEach( function(ele, index) {
                    this.pptUrlArr.push(ele.Url);
                    this.pptTimeArr.push(ele.TimeStamp);
                }.bind(this));
                this.intervalArr = this.getTimeInterval(this.pptTimeArr);
            }
            this.audioEle = this.$refs.audio.$el;
            console.log(this.$refs.audio);
            var timer = null;
            this.playTime = util.transform_time(this.audioEle.currentTime);
            timer = setInterval(function() {
                if(this.$refs.audio.$el.duration) {
                    clearInterval(timer);
                    this.durationText = util.transform_time(this.$refs.audio.$el.duration);
                }
            }.bind(this),1000/60);
            this.getMaxOffestX();
           
        }
    }
</script>
