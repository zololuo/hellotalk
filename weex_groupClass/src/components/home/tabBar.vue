<template>
	<div class="top" :style="{width:fullWidth}">
		<!-- <div 	class="ipx-box"
					v-if="isIphoneX"></div> -->
		<!-- <div 	class="iosTop"  
					v-if="isIphone5"></div> -->
		<div 	class="tabBar"
					:style="{width:fullWidth}">
			<text class="title">{{title}}</text>
			<div class="icons-wrapper"
						:style="{width:fullWidth}">
				<div class="icon back-wrapper" @touchstart="backEvent">
					<text class="icon icon_back">&#xe62a;</text>
				</div>
			</div>
		</div>
	</div>
	
</template>
<style scoped>
.top{
  height: 80px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.iosTop{
	height: 20px;
	background-color: transparent;
}
.ipx-box{
	height: 10px;
	background-color: transparent;
}
.tabBar{
	height: 44px;
	align-items: center;

}
.title{
	line-height: 44px;
	text-align: center;
	font-size: 18px;
	font-weight: 600;
	color: #ffffff;
	width: 209px;
	lines: 1;
	text-overflow: ellipsis;
}
.icons-wrapper{
	height: 44px;
	position: absolute;
	top:0;
	left:0;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}
.icons{
	flex-direction: row;
}
.icon{
	font-family: iconfont;
}
.icon_back{
	font-size: 20px;
	color: #ffffff;
}
.back-wrapper{
	width: 50px;
	height: 44px;
	/*align-items: center;*/
	justify-content: center;
	padding-left: 15px;
	background-color: transparent;
}

</style>
<script>
	import * as util 	from '../../util'

	export default{
		name: 'tabBar',
		props: {
			title: {
				default: '【官方】HelloTalk口语课'
			},
		},
		data() {
			return {
				startTime: null,
			}
		},
		computed: {
			osName() {//系统
				return WXEnvironment.osName;
			},
			fullWidth() {//全屏宽度
				if(weex.config.env.platform==='Web') {//web平台
	  			return '100%';
	  		}else{
	  			return weex.config.viewport+'px';
	  		}
			},
			isIphoneX() {
				return weex.config.env.deviceModel==='iPhone10,3'||weex.config.env.deviceModel==='iPhone10,6';
			},
			isIphone5() {
				// let device = weex.config.env.deviceModel;
				return /^(iPhone)5|6,./gi.test(weex.config.env.deviceModel);
			}
		},
		methods: {
			backEvent() { // 返回
				util.goBackAct();
				util.moduleCall('playerModule','clear');
			},
			
		},
		mounted() {
			this.startTime = new Date();
		}
	}
</script>
