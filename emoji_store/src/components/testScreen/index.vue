<template>
    <div class="scroller" ref="scroller" >
        <div class="content" @touchstart="ontouchstart">
          <!-- <text>aaa</text> -->
        </div>
    </div>
</template>

<style scoped>
    .scroller {
       /*margin-top: 100px;*/
       height: 600px;
       flex: 1;
       flex-direction: column;

  align-items:center;
  /*justify-content:center;*/
       /*justify-content: flex-start;*/
    }
    .content{
      width: 300px;
      height: 300px;
      background-color: #54b79f;
      /*margin:auto;*/
    }

</style>


<script>
  import {isWeex} from 'universal-env';
  import bindingx from 'weex-bindingx';
  const animation = weex.requireModule('animation');
  const dom       = weex.requireModule('dom');
  const modal     = weex.requireModule('modal');
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
        opacity: 1,
        flag: 0,
        cellList:['item1','item2','item3','item4'],
        names: ['Android','iOS','前端','拓展资源','休息视频'],
        order: [],
        itmes: [],
        movingEle: null,
        movingIndex: null,    // 当前移动的list的索引
        startY: 0,            // 按下时的y坐标
        endY: 0,              // 抬起时的y坐标
        curItem: '',          
        dragBoxTop: -120,     // 辅助用的拖动盒子的top值
        goalListIndex: null,  // 目标list的索引
        changeY: 0,           // 拖动盒子在Y轴上的变化值
        size: {},
        lastItem: null,
        parentY: null,        // 父容器距离页面顶部的距离
      }
    },
    computed: {
      isWeb() {
        return weex.config.env.platform==='Web';
      },
    },
    methods: {
      getBoundingClientRect(ele) {
        return dom.getComponentRect(ele, option => {
          this.size = option.size;
        })
      },
      ontouchstart (e) {
        this.startY = e.changedTouches[0].screenY;
        // 父容器距离页面顶部的距离 weex环境下直接获取e.changedTouches[0].pageY
        this.preY  =  e.changedTouches[0].screenY ;  
        modal.alert({
          message: e.changedTouches[0].pageY,
          duration: 500
        })
       
      },
     
    },
    mounted() {
     

      
    }
  }
</script>