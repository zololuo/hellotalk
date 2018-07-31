<template>
	<list class="list" :style="{width:fullWidth}">
        <cell class="course"  
             v-for="(item,index) in courseList" 
             :key="index"
             @click="buyAction(item,index)" >
            <div class="picWrapper">
                <image class="pic" :src="item.head_image" resize="cover"></image>
            </div>
            <div class="courseInfo">
                <div class="infoHead">
                    <text class="courseTitle">{{item.title}}</text>
                    <image class="audioFree" v-if="item.course_type==0&&!isBuy" :src="audioFreeSrc" ></image>
                    <!-- <text class="price" 
                          v-if="item.course_type!==0&&priceData.price&&priceData.price&&!isBuy">{{priceData.symbol+' '+priceData.price}}</text> -->
                </div>
                <text class="courseIntro">{{item.abstract}}</text>
            </div>
        </cell>
    </list>
</template>

<style scoped>
    .list{
        flex: 1;
    }
    .course{
        flex-direction: row;
        padding-bottom: 25px;
        padding-top: 25px;
        padding-left: 15px;
        padding-right: 15px;
        border-bottom-color: #e5e5e5;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }
    .picWrapper{
        width: 90px;
        height: 90px;
        border-radius: 2px;
        background-color: #d8d8d8;
        overflow: hidden;
    }
    .pic{
        width: 90px;
        height: 90px;
    }
    .courseInfo{
        margin-left: 15px;
        flex: 1;
        /* height: 90px; */
    }
    .infoHead{
        flex-direction: row;
    }
    .courseTitle{
        font-size: 17px;
        color: #484848;
        line-height: 19px;
        font-weight: 600;
        font-family: Helvetica-Bold;
        lines: 2;
        flex: 1;
    }
    .courseIntro{
        flex: 1;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999999;
        letter-spacing: 0;
        line-height: 18px;
        height: 54px;
        margin-top: 5px;
        lines: 3;
    }
    .audioFree{
        width: 48px;
        height: 16px;
    }
    .price{
        font-family: PingFangSC-Regular;
        /* width: 65px; */
        font-size: 20px;
        line-height: 20px;
        color: #484848;
        text-align: right;
    }
</style>
<script>
    import * as util from '@/util'
	export default {
    props:{
        courseList:{
            type: Array,
            default: []
        },
        isBuy: {
            type: Boolean,
            default: false
        },
        userInfo: {
            type: Object,
            default: {}
        },
        source: {
            type: String,
            default: ''
        },
        hpUserinfo: {
            type: Object,
            default: {}
        }
    },
    computed: {
      osType() {
				return WXEnvironment.osName;
			},
      isIphoneX() {
				return WXEnvironment.deviceModel==='iPhone10,3'||WXEnvironment.deviceModel==='iPhone10,6';
      },
      fullWidth() {
        return weex.config.env.platform=='Web'?'100%':weex.config.viewport+'px';
      },
    },
    data() {
      return {
        audioFreeSrc:'http://ht-blog.oss-cn-hongkong.aliyuncs.com/class_share/20180629/36775fb3a07b691e3ab65956931af765.png?x-oss-process=image/resize,w_750/quality,q_88',
        
      }
    },
    created:function () {

    },
    methods:{
      buyAction(obj,n) {
          var type = obj.course_type,
              url  = obj.goto_url+'&htdisablemenu'+'&source='+this.source+'&hpid='+this.hpUserinfo.hpUserId;
        if(this.isBuy||!type) {
            // util.jumpRemotePage(url);
            weex.requireModule('weexRouter').openUrl({
                url: url,
                animated: true
            });
            
        }
      }
    }
  }
</script>
