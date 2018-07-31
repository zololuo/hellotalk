<template>
	<div class="container">
 	    <div ref="my" class="box" @touchstart="touchStart">
         	<text class="text">item1</text>
        </div>
	    
	</div>
</template>

<style>
.container {
  flex: 1;
  background-color: #eeeeee;

}
.box {
	margin-top: 300px;
  width: 375;
  height: 50;
  background-color: #651FFF;
  margin-bottom: 10px;
}
.text{
	color: #ffffff;
	font-size: 14px;
	text-align: center;
	line-height: 50px;
}

</style>

<script>
import {isWeex} from 'universal-env';
import Binding from 'weex-bindingx';


function getEl(el) {
  if (typeof el === 'string' || typeof el === 'number') return el;
  return isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
}

export default {
  data(){
  	return {
	    x: 0,
	    y: 0,
	    lastY: 0,
	    isInAnimation: false,
	    gesToken: 0,
	    opacity: 1,
	    moveH: 30, // 设置元素移动30px就改变位置 ,cell的高度+距离下一个的距离 再除以2
	  }
  },
  methods: {

   
    touchStart: function() {
      var self = this;
      if (this.isInAnimation === true) {
        if (this.gesToken) {
          Binding.unbind({
            eventType: 'pan',
            token: self.gesToken
          });
          this.gesToken = undefined;
        }
        return;
      }
      var n = 2;
      var my = getEl(this.$refs.my);
      var translate_y_origin = `y+${this.y}`;
      var opacity_y_origin = '1-abs(y)/600';
      var gesTokenObj = Binding.bind({
        anchor: my,
        eventType: 'pan',
        props: [{
            element: my,
            property: 'transform.translateY',
            expression: translate_y_origin
          }
        ]
      }, function(e) {
        if (e.state === 'end') {
          self.y += e.deltaY;   // deltaY是指相对于元素原来位置的y轴上的偏移值
          self.opacity = 1 - Math.abs(e.deltaY) / 600;
          // self.bindTiming(e.deltaY,n);
        }
      });
      self.gesToken = gesTokenObj.token;
    },
    bindTiming: function(offsetX,n) {
      this.isInAnimation = true;
      var my = getEl(this.$refs.my);
      var self = this;
      // should equal with timing duration
      var exit_origin = 't>1000';
      var changed_y;
      var final_y;
      var final_opacity;
      var translate_y_origin;
      var shouldDismiss = false;
      var eleHeight = 60;
      console.log('累计：'+self.y);
      console.log(offsetX);
      final_y = offsetX;
	  changed_y = offsetX;

		final_opacity = 1;
		shouldDismiss = true;
		translate_y_origin = `easeOutExpo(t,${self.y},${changed_y},1000)`;
  //     if(offsetX > -this.moveH && offsetX < this.moveH){
		// final_y = 0;
		// shouldDismiss = true;
		// changed_y = 0 - self.y;
		// final_opacity = 1;
		// translate_y_origin = `easeOutExpo(t,${self.y},${changed_y},1000)`
  //     }else{
  //     	var index =  Math.floor(offsetX/this.moveH); 
  //     	console.log('偏移来几个item:'+index);
  //     	console.log('最小偏移值：'+-n*eleHeight);
  //     	console.log('offsetX：'+offsetX);
  //     	var changeValue =  index*eleHeight ;
  //     	changeValue = Math.min(changeValue,4*eleHeight);
  //     	changeValue = Math.max(changeValue,-n*eleHeight);
  //     	console.log('changeValue:'+changeValue);
  //     	final_y = changeValue;
		// shouldDismiss = true;
		// changed_y = changeValue;
		// final_opacity = 1;
		// translate_y_origin = `easeOutExpo(t,${self.y},${changed_y},1000)`
  //     }
      
      // if (self.y >= 0 && self.y <= eleHeight / 2) {
      //   shouldDismiss = false;
      //   final_y = 0;
      //   changed_y = 0 - self.y;
      //   final_opacity = 1;
      //   translate_y_origin = `easeOutElastic(t,${self.y},${changed_y},1000)`
      // } else if (self.y < -eleHeight / 2) {
      //   shouldDismiss = true;
      //   final_y = -eleHeight;
      //   changed_y = -eleHeight - self.y;
      //   final_opacity = 1;
      //   translate_y_origin = `easeOutExpo(t,${self.y},${changed_y},1000)`
      // } else {
      //   final_y = 0;
      //   shouldDismiss = true;
      //   changed_y = 0 - self.y;
      //   final_opacity = 1;
      //   translate_y_origin = `easeOutExpo(t,${self.y},${changed_y},1000)`
      // }
      var changed_opacity = final_opacity - self.opacity;
      var opacity_origin = `linear(t,0,${changed_opacity},1000)`;
      var result = Binding.bind({
        eventType: 'timing',
        exitExpression: exit_origin,
        props: [{
            element: my,
            property: 'transform.translateY',
            expression: translate_y_origin
          }
        ]

      }, function(e) {
        if (e.state === 'end' ||
          e.state === 'exit') {
          // reset y
          // self.y = final_y;
          console.log('final:'+self.y);
          self.isInAnimation = false;
        }
      });
    }
  }
}
</script>