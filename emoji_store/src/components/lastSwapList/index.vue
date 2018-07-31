<template>
    <div class="scroller" ref="scroller" 
         @touchstart="ontouchstart"
         @touchmove="ontouchmove"
         @touchend = "ontouchend">
        <div class="box" 
   			   :style="{top: isWeb?index*50*2+'px':index*50}"
        	 :class="[movingIndex==index?'movingBox':'']"
        	 ref="box"
           :key="index"
        	 v-for="(item,index) in names" 
        	>
        	<text class="text" >{{item}}</text>
        </div>
        <div class="box dragBox" 
        	 v-if="showDragBox" 
        	 ref="dragBox"
        	 :style="{top: dragBoxTop+'px'}"
        	>
        	<text class="text">{{curItem}}</text>
        </div>
    </div>
</template>

<style scoped>
    .scroller {
       /*width: 375px;*/
        flex: 1;
        flex-direction: column;
        justify-content: flex-start;
        height: 600px;
    }
    .dragBox{
    	opacity: 0.5;
    	/*background-color: red;*/
    }
    .box {
        border-width: 2px;
        border-style: solid;
        border-color: #BBBBBB;
        width: 375px;
        height: 50px;
        background-color: #54b79f;
        /*margin-top: 10px;*/
        position: absolute;

    }
    
    .text{
  		color: #ffffff;
  		font-size: 14px;
  		text-align: center;
  		line-height: 50px;
    }
	.movingBox{
		/*z-index: 999;*/
	}
</style>


<script>
  import {isWeex} from 'universal-env';
  import bindingx from 'weex-bindingx';
  const animation = weex.requireModule('animation');
  const dom       = weex.requireModule('dom');
  const modal     = weex.requireModule('modal');
  const navigatorObj  = weex.requireModule('navigator');
  function getEl(el) {
    if (typeof el === 'string' || typeof el === 'number') return el;
    return isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
  }
  export default {
    created(){
      this.names.map(function(ele,i){
          this.order.push(i);
      }.bind(this));
    },
    data () {
      return {
        cellList:['item1','item2','item3','item4'],
        names: ['Android','iOS','前端','拓展资源','休息视频'],
        order: [],
        itmes: [],
        movingIndex: null,    // 当前移动的list的索引
        startY: 0,            // 按下时的y坐标
        endY: 0,              // 抬起时的y坐标
        curItem: '',          
        dragBoxTop: 0,        // 辅助用的拖动盒子的top值
        changeY: 0,           // 拖动盒子在Y轴上的变化值
        size: {},
        lastItem: null,
        parentY: null,        // 父容器距离页面顶部的距离
        parentTop: 44,        // list的父容器距离页面顶部的距离
        showDragBox: false    // 控制拖动盒子的显示与隐藏 
      }
    },
    computed: {
      isWeb() {
        return weex.config.env.platform==='Web';
      },
      isAndroid() {
        return weex.config.env.platform==='android';
      }
    },
    methods: {
      getBoundingClientRect(ele) {
        return dom.getComponentRect(ele, option => {
          this.size = option.size;
        })
      },
      ontouchstart (e) {
        this.startY = e.changedTouches[0].pageY;

        // 父容器距离页面顶部的距离 weex环境下直接获取e.changedTouches[0].pageY
        this.preY  = this.isAndroid?e.changedTouches[0].pageY:e.changedTouches[0].pageY - this.parentY;
         // modal.toast({
         //    message: 'preY: '+this.preY,
         //    duration: 500
         //  });
         
        this.movingIndex = this._getIdByPosition(this.preY);
        if(this.movingIndex!=-1){
          this.dragBoxTop  = this._getTopValueYById(this.movingIndex);
          this.curItem = this.names[this.movingIndex];
          this.showDragBox = true;
        }
        
      },
      ontouchmove(e) {
        if(this.curItem=='') return;
        let _y = this.isAndroid?e.changedTouches[0].pageY:e.changedTouches[0].pageY - this.parentY;
        this.changeY =  e.changedTouches[0].pageY-this.startY;
        let collideIndex = this._getIdByPosition(_y);
        // if(this.lastItem!==null) {
        //   animation.transition(this.lastItem,{
        //     styles: {
        //        transform: `scale(1)`,
        //     },
        //     duration: 5,
        //   })
        // }
        
        // if(collideIndex !== this.movingIndex && collideIndex !== -1) {
        //     let collideItem = this.items[collideIndex];
        //     animation.transition(collideItem,{
        //       styles: {
        //          transform: `scale(1.5)`,
        //       },
        //       duration: 5,
        //     });
        //     this.lastItem = this.items[collideIndex];
        // }
        if(collideIndex!=-1) {
          this.move(this.$refs.dragBox,this.changeY);
        }
        
      },
      ontouchend(e) {
        this.endY = this.isAndroid?e.changedTouches[0].pageY:e.changedTouches[0].pageY - this.parentY;
        this.showDragBox = false;
        // 父容器距离页面顶部的距离 weex环境下要手动计算
        let collideIndex = this._getIdByPosition(this.endY);
        // if(this.lastItem!==null) {
        //   animation.transition(this.lastItem,{
        //     styles: {
        //        transform: `scale(1)`,
        //     },
        //     duration: 5,
        //   })
        // }
        if(collideIndex !== this.movingIndex && collideIndex !== -1) {
            let collideItem = this.items[collideIndex];
    
            [this.items[this.movingIndex],this.items[collideIndex]] = [this.items[collideIndex],this.items[this.movingIndex]];
            [this.names[this.movingIndex],this.names[collideIndex]] = [this.names[collideIndex],this.names[this.movingIndex]];
            this.items = this.$refs.box.map(function(item){
              return item;
            }.bind(this));
            this.movingIndex = collideIndex;
        }
        this.movingIndex = null;

      },
      move(ele,changeY) {
        animation.transition(ele, {
          styles: {
            transform: `translate(0, ${changeY}px)`,
            transformOrigin: 'center center'
          },
          duration: 60, //ms
          timingFunction: 'linear',
          delay: 0       //ms
          }, function () {             

          })
      },
       _getIdByPosition(pageY){
         var id = -1;
         const height = isWeex?50:50*2;
         if(pageY >= 0 && pageY < height)
             id = 0;
         else if(pageY >= height && pageY < height*2)
             id = 1;
         else if(pageY >= height*2 && pageY < height*3)
             id = 2;
         else if(pageY >= height*3 && pageY < height*4)
             id = 3;
         else if(pageY >= height*4 && pageY < height*5)
             id = 4;
         return id;
     },
     _getTopValueYById(id){
         const height = isWeex?50:50*2;
         return id * height;
     },
     changeAnimation(ele,mul) {
       animation.transition(ele,{
         styles: {
            transform: `scale(${mul})`,
         },
         duration: 5,
       })
     }

    },
    mounted() {
      this.$nextTick().then(function () {
          this.items = this.$refs.box.map(function(item){
            return item;
          }.bind(this));
          this.getBoundingClientRect(this.$refs.scroller);
          this.parentY = isWeex?this.parentTop:this.size.top;
            console.log(weex.config);
      }.bind(this));
      

      
    }
  }
</script>