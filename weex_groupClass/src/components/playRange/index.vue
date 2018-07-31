<template>
  <div  class="playRang" 
        ref="wrapper"
        :style="{
          height:height+'px',
          width:width+'px'
        }">
    <div  class="rang-bg"></div>
    <div  class="rang-level-wrapper" 
          ref="level"
          :style="{
              height: height+'px',
              width: width+calPadding+'px',
              transform: `translateX(${currentLevel}px)`,
          }">
      <div class="rang-level"></div>
      <div  class="cal-wrapper" 
            @touchstart="touchstartAct">
        <div class="rang-cal"></div>  
      </div>
    </div>
  </div>
</template>
<style scoped>
	.playRang{
	  overflow: hidden;
	  justify-content: center;
	}
	.rang-bg{
	  height: 2px;
	  border-radius: 3px;
	  background-color: rgba(255,255,255,0.3);
	  
	}
	.rang-level-wrapper{
	  position: absolute;
	  top:0;
	  left:0;
	  flex-direction: row;
	  align-items: center;
	}
	.rang-level{
	  flex: 1;
	  height: 2px;
	  border-radius: 3px;
	  background-color: #ffffff;
	}
	.cal-wrapper{
	  padding-top: 10px;
	  padding-bottom: 10px;
	  padding-left: 10px;
	  padding-right: 10px;
	  margin-left: -15px;
	  /*background-color: rgba(0,0,0,0.5);*/
	}
	.rang-cal{
	  height: 9px;
	  width: 9px;
	  border-radius:5px;
	  background-color: #ffffff;
	}
</style>
<script>

  export default {
    props:{
      width: {
        type: Number,
        default: 0
      },
      height: {
        type: Number,
        default: 0
      },
      level:{
        type:Number,
        default: 0
      }
    },
    data() {
      return {
      }
    },
    computed:{
      realWidth() {
        if(WXEnvironment.platform==='Web') {//web平台
          return this.width-18;
        }else{
          return this.width-9;
        }
      },
      currentLevel() {
        return this.realWidth*(this.level/100)-this.realWidth;
      },
      calPadding() {
        if(WXEnvironment.platform==='Web') {//web平台
          return 20;
        }else{
          return 10;
        }
      }
    },
    created:function () {
    },
    methods:{
      touchstartAct() {
        this.$emit('touchstartAct');
      }
    }
  }
</script>

