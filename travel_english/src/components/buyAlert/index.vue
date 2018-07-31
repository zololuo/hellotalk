<template>
	<div class="mask" :style="{width:fullWidth,height:fullHeight+'px'}" >
		<div class="maskTop" @click="cancelAction"></div>
		<div class="alert" :style="{width:fullWidth}" ref="alert" @click="defaultClick">
			<text class="title">{{$t('BUY_LESSONS')}}</text>
			<div class="buySeparately" @click="buyCourse(0)" :class="[select===0?'selected':'']">
				<text class="text">{{$t('BUY_SINGLE_LESSON')}}</text>
				<text class="text">{{priceInfo.symbol+' '+priceInfo.price}}</text>
			</div>
			<div class="buyAll" @click="buyCourse(1)" :class="[select===1?'selected':'']" v-if="count>1">
				<div class="buyAllTitle">
					<text class="text">{{$t('BUNDLE')}}</text>
					<div class="priceInfo">
						<text class="discount">{{discount}}% OFF</text>
						<text class="text">{{totalPrice.symbol+' '+totalPrice.price}}</text>
					</div>
				</div>
				<text class="subText">{{translateSentence(count,priceInfo.symbol+' '+originPrice)}}</text>
			</div>
			<text class="cancel" @click="cancelAction">{{$t('CANCEL')}}</text>
		</div>
	</div>
</template>
<script>
	const animation = weex.requireModule('animation')
	import {fetch} from '@/api'
	import * as util from '@/util'
	export default {
			props:{
				totalPrice:{
					type: Object,
					default: {
						symbol: '',
						price: ''
					}
				},
				priceInfo:{
					type: Object,
					default: {
						price: '',
						symbol: ''
					}
				},
				count: {
					type: Number,
					default: 0
				},
				lang: {
					type: String,
					default: ''
				},
				alertHeight: {
					type: Number,
					default: 0
				},
				fullHeight:{
					type: Number,
					default: 0
				}
				
			},
// ,paddingTop: count<1?'70px':0
    		created:function () {
    		},
    		data(){
				return {
					select: null,
				}
			},
    		methods:{
				cancelAction() {
					this.$emit('cancel');
				},
				defaultClick() {},
				animation(ele,height) {
					animation.transition(ele, {
						styles: {
							transform: `translateY(${height}px)`,
						},
						duration: 300, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					})
				},
				buyCourse(flag){
					this.select = flag;
					this.$emit('buyCourse',flag);
				},
				
				$t(attr,...data) {
                    return util.translate(attr, data);
				},
				translateSentence(num,price){
					var sentence = {
						'zh-CN': `剩${num}节课程，原价${price}`,
						'zh-Hans': `剩${num}节课程，原价${price}`,
						zh_CN: `剩${num}节课程，原价${price}`,
						en: `Remaining ${num} lessons, originally ${price}`,
						pt: `Restando ${num} aulas, originalmente ${price}`,
						tr: `Baştaki ${price} dersten kalan ${num} ders`,
						ja: `残りのレッスンは${num}回、原価は${price}`
					};
					return sentence[this.lang];
				}
    		},
			computed:{
				fullWidth() {
                    return weex.config.env.platform=='Web'?'100%':weex.config.viewport+'px';
                },
				// fullHeight() {
				// 	return weex.config.env.platform=='Web'?'100%':weex.config.screenHeight+'px';
				// },
				discount() {
					return parseInt((this.count*parseFloat(this.priceInfo.price)-parseFloat(this.totalPrice.price))/(this.count*parseFloat(this.priceInfo.price))*100);
				},
				originPrice() {
					return ((this.priceInfo.price-0)*10000*this.count)/10000;
				}
			},
			mounted() {
				var height = weex.config.env.platform=='Web'?this.alertHeight*2:this.alertHeight;				
				this.animation(this.$refs.alert,-height);

			},
			destroyed() { 
				this.select = null;
			}

    }
</script>

<style scoped>
	.mask{
		background-color: rgba(0,0,0, 0.4);
		overflow: hidden;
	}
	.maskTop{
		flex: 1;
	}
	.alert{
		position: absolute;
		bottom: -222px;
		height: 222px;
	}
	.title{
		font-family: PingFangSC;
  		font-size: 14px;
		height: 50px;
		text-align: center;
		line-height: 50px;
	}
	.buySeparately{
		height: 52px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-left: 45px;
		padding-right: 45px;
	}
	.title,.buySeparately,.buyAll{
		
		background-color: #ffffff;
		border-bottom-style: solid;
		border-bottom-color: #e5e5e5;
		border-bottom-width: 1px;
	}
	.text{
		font-family: PingFangSC-Semibold;
		font-size: 17px;
		color: #484848;
	}
	.subText{
		font-family: PingFangSC-Regular;
		font-size: 12px;
		color: #999999;
	}
	.buyAll{
		height: 70px;
		padding-left: 45px;
		padding-right: 45px;
		justify-content: center;
	}
	.buyAllTitle{
		justify-content: space-between;
		flex-direction: row;
		height: 26px;
		
	}
	.priceInfo{
		flex-direction: row;
		align-items: center;
	}
	.discount{
		padding-left: 4.5px;
		padding-right: 4.5px;
		margin-right: 5px;
		padding-top: 2px;
		padding-bottom: 3px;
		border-radius: 9.5px;
		background-color: #f54a41;
		font-size: 12px;
		color: #ffffff;
	}
	.cancel{
		height: 50px;
		background-color: #ffffff;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #999999;
		text-align: center;
		line-height: 50px;
	}
	.selected{
		background-color: #f6f6f6;
	}
</style>