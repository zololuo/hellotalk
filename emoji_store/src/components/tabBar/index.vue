<template>
	<div class="top" :style="{width:fullWidth}">
		<!-- <div 	class="ipx-box"
					v-if="isIphoneX"></div>
		<div 	class="iosTop"  
					v-if="/ios/gi.test(osName)"></div> -->
		<div 	class="tabBar"
					:style="{width:fullWidth}">
			<text class="title">{{title}}</text>
			<div class="icons-wrapper"
						:style="{width:fullWidth}">
				<text class="icon icon-back"  
							@click="backEvent">{{icon.back}}</text>
				
			</div>
		</div>
	</div>
	
</template>
<script>
	import * as util 	from '../../util'

	export default{
		name: 'tabBar',
		props: {
			title: {
				default: 'Emoji Store'
			},
			
		},
		data() {
			return {
				icon: {
					back: "\ue601",
				},
				startTime: null,
				editStatus: false,
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
			}
		},
		methods: {
			backEvent() { // 返回
				util.goBackAct();
			},
			
		},
		mounted() {

		}
	}
</script>
<style scoped>
.top{}
.iosTop{
	height: 20px;
	background-color: #ffffff;
}
.ipx-box{
	height: 10px;
	background-color: transparent;
}
.tabBar{
	height: 44px;
	background-color: #ffffff;
}
.title{
	line-height: 44px;
	text-align: center;
	font-size: 18px;
	font-weight: 600;
	color: #333333;
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
	font-size: 25px;
	line-height: 44px;
	width:35px;
	color: #626262;
	text-align: center;
}
.icon-back,.icon-share{
	width: 50px;
}
.icon-punch{
	margin-right: 5px;
}
.operate{
	padding-right: 15px;
	font-size: 16px;
	color: #405bd3;
}
</style>