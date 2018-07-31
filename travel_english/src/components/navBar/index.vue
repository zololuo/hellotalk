<template>
	<div class="head">
    <!-- iphonex抬高状态栏 -->
    <div 	class="ipx-head-height"
					v-if="isIphoneX"></div>
    <!--ios的沉浸式状态栏-->
    <div 	class="ios-status-bar"  
					v-if="/ios/gi.test(osType)"></div>
    <!--状态栏主体-->
    <div class="bar">
      <div class="back-icon" @click="goBack">
        <div class="topRectangle"></div> 
        <div class="botRectangle"></div>   
      </div>
      <text class="title">{{title}}</text>
      <div class="right"></div>
    </div>
  </div>
</template>

<style scoped>
.pic{
	width: 50px;
	height: 50px;
}
.ipx-head-height{
	height: 10px;
}
.ios-status-bar{
	height: 20px;
}
.bar{
	height: 44px;
	background-color:#ffffff;
	flex-direction: row;
	/* justify-content: space-between; */
  align-items: center;
}
.title{
	flex:1;
	line-height: 44px;
	font-size: 18px;
	font-weight: 600;
	color: #333333;
	text-overflow: ellipsis;
	lines: 1;
	text-align: center;
  font-family: PingFangSC-Semibold;
}
.back-icon{
	width: 100px;
  height: 88px;
  justify-content: center;
  padding-left: 15px;
  margin-left: -25px;
  padding-top: 8px;
  transform: scale(0.5);
}
.topRectangle{
  width: 27px;
  height: 6px;
  transform: rotate(-45deg);
  border-radius: 4.5px;
  background-color: #626262;
  transform-origin: 0 0;
}
.botRectangle{
  width: 27px;
  height: 6px;
  transform: rotate(45deg);
  border-radius: 4.5px;
  background-color: #626262;
}
.right{
  width: 100px;
}
</style>
<script>

	export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      backBefore: {
        type: Function,
        default:()=>{}
      }
    },
    computed: {
      osType() {
				return WXEnvironment.osName;
			},
      isIphoneX() {
				return WXEnvironment.deviceModel==='iPhone10,3'||WXEnvironment.deviceModel==='iPhone10,6';
      },
    },
    data() {
      return {
        stopClick: false,//防止连续的点击
      }
    },
    created:function () {

    },
    methods:{
      goBack() {
        weex.requireModule('navigator').pop({
          'animated': 'true'
        });
      },
    }
  }
</script>
