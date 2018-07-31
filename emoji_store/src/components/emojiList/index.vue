<template>
    <scroller>
        <div class="list" 
            ref="scroller"
            :style="{width: fullWidth,height: isWeb?emojiList.length*70*2+'px':emojiList.length*70+'px'}" 
            
            @touchend = "ontouchend"
            >
            <div v-for="(item,index) in emojiList" 
                class="cell"
                :class="['cell'+index]" 
                ref="cell"
                :key="index"
                :style="{top: isWeb?topArr[index]*2+'px':topArr[index]+'px', width:fullWidth}">
                <div class="scroller" >
                    <div class="wrapper">
                        <div class="pics">
                            <image :src="item.imgUrl" class="emoji" />
                        </div>
                        <div class="emoji-info">
                            <text class="emoji-title">{{item.title}}</text>
                        </div>
                        <text class="icon-drag icon"  
                            @touchstart="ontouchstart(index,arguments)" 
                            @touchmove="ontouchmove(index,arguments)">&#xe65f;</text>
                        <div class="delete"></div>
                    </div>
                </div>
            </div>  
            <div v-if="showDragBox" ref="dragBox" :style="{top: dragBoxTop+'px'}" class="dragBox">
                <div 
                    class="scroller" 
                    scroll-direction="horizontal">
                    <div class="wrapper">
                        <div class="pics">
                            <image :src="curItem.imgUrl" class="emoji" />
                        </div>
                        <div class="emoji-info">
                            <text class="emoji-title">{{curItem.title}}</text>
                        </div>
                        <text class="icon-drag icon" >&#xe65f;</text>
                        <div class="delete"></div>
                    </div>
                </div>
            </div>  
            <text style="color:red;fontSize: 16px;textAlign:center; position: absolute;bottom:0;">{{top+','+dragBoxTop+','+changeY}}</text>
        </div>
    </scroller>
  
</template>

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
        data () {
          return {
            emojiList: [
                {
                    title:'HelloTalk手宝宝0',imgUrl:'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id:0
                },{
                    title:'HelloTalk手宝宝1',imgUrl:'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id:1
                },{
                    title:'HelloTalk手宝宝2',imgUrl:'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id:2
                },{
                    title:'HelloTalk手宝宝3',imgUrl:'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id:3
                },{
                    title:'HelloTalk手宝宝4',imgUrl:'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id:4
                },{
                    title:'HelloTalk手宝宝5',imgUrl:'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id:5
                },{
                    title:'HelloTalk手宝宝6',imgUrl:'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id:6
                },{
                    title:'HelloTalk手宝宝3',imgUrl:'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id:3
                },{
                    title:'HelloTalk手宝宝4',imgUrl:'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id:4
                },{
                    title:'HelloTalk手宝宝5',imgUrl:'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id:5
                },{
                    title:'HelloTalk手宝宝6',imgUrl:'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id:6
                },{
                    title:'HelloTalk手宝宝3',imgUrl:'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id:3
                },{
                    title:'HelloTalk手宝宝4',imgUrl:'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id:4
                },{
                    title:'HelloTalk手宝宝5',imgUrl:'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id:5
                },{
                    title:'HelloTalk手宝宝6',imgUrl:'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id:6
                }
            ],
            copyList: [],         // emojiList
            cellDoms: [],         // 保存cell 的dom信息
            topArr: [],           // 保存cell的top值
            posArr: [],           // 在list里的顺序
            movingIndex: null,    // 当前移动的list的索引
            touchIndex: null,   
            startY: 0,            // 按下时的y坐标
            endY: 0,              // 抬起时的y坐标
            curItem: null,          
            dragBoxTop: 0,        // 辅助用的拖动盒子的top值
            changeY: 0,           // 拖动盒子在Y轴上的变化值
            size: {},
            lastItem: null,
            parentY: null,        // 父容器距离页面顶部的距离
            parentTop: 44,        // list的父容器距离页面顶部的距离
            showDragBox: false ,  // 控制拖动盒子的显示与隐藏 
            cellHeight: 70    ,
            top: null,              // 存储使用getTopByEle方法时的元素dom信息
            x: 0
          }
        },
        created() {
            this.topArr = this.emojiList.map(function(item,index){
                return index*70;
            });
            this.posArr = this.topArr.map((item)=>{
                return item;
            })
        },
       computed: {
             isWeb() {
               return weex.config.env.platform==='Web';
             },
             isAndroid() {
               return weex.config.env.platform==='android';
             },
             fullWidth() {//百分比宽度
                return this.isWeb?'100%':weex.config.viewport+'px';
             },
           },
           methods: {
             getBoundingClientRect(ele) {
               return dom.getComponentRect(ele, option => {
                 this.size = option.size;
               })
             },
             ontouchstart (n) {
               let e = arguments[1][0];
               e.stopPropagation();
               this.curItem = {
                 title: '',imgUrl:''
               }
               //. android获取pageY为相对该dom的值
               let _y = e.changedTouches[0].pageY; 
               this.startY =  _y;
               // 父容器距离页面顶部的距离 weex环境下直接获取e.changedTouches[0].pageY
               this.preY  = this.isAndroid?_y:_y - this.parentY;
               // this.movingIndex = this._getIdByEle();

               let self = this;
               // this.getTopByEle();
               let result = dom.getComponentRect(this.cellDoms[n], option => {
                  this.top = option.size.top - this.parentY;
                   let _top =  isWeex?this.top:this.top/2;
                   self.topArr.some(function(item,index){
                       if(_top==item) {
                           self.movingIndex = index;
                           return true;
                       }
                   });
                  this.touchIndex = n;
                  if(this.movingIndex!=-1){
                    // this.dragBoxTop  = this._getTopValueYById(this.movingIndex);
                    this.dragBoxTop = this._getDragBoxTopByEle(this.cellDoms[n]);
                    this.curItem = this.emojiList[n];
                    this.showDragBox = true;
                  }
               });
             },
             ontouchmove(n) {
              let e = arguments[1][0];
               e.stopPropagation();
               if(this.curItem== null) return;
               let _y = this.isAndroid?e.changedTouches[0].pageY:e.changedTouches[0].pageY - this.parentY;
               this.changeY =  e.changedTouches[0].pageY-this.startY;
               let collideIndex = this._getIdByPosition(_y);
               if(collideIndex!=-1) {
                 this.move(this.$refs.dragBox,this.changeY);
               }
             },
             ontouchend(e) {
               if(this.movingIndex==-1||this.changeY==0) return;
               console.log(this.changeY);
               this.endY = this.isAndroid?e.changedTouches[0].pageY:e.changedTouches[0].pageY - this.parentY;
               this.showDragBox = false;
               // 拖动结束，交换两个item的位置
               let collideIndex = this._getIdByPosition(this.endY);
               let curIndex = this.movingIndex;
               if(collideIndex !== curIndex && collideIndex !== -1 &&this.changeY!=0) {  
                   [this.topArr[curIndex],this.topArr[collideIndex]] = [this.topArr[collideIndex],this.topArr[curIndex]];
                   this.movingIndex = null;
                   this.touchIndex = null;
                   this.curItem = null;
                   // this.changeY = 0;
               }
               
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
              _getIdByPosition(pageY){ // 根据触摸点在列表区域的Y坐标获取cell的索引
                let id = -1;
                const height = this.cellHeight; 
                pageY = this.isWeb?pageY/2:pageY;
                let maxH = this.posArr[this.posArr.length-1]+height;
                if(pageY<this.posArr[0] || pageY>maxH){
                    return -1;
                };
                this.topArr.some((item,index)=>{
                    if(pageY<=item+height&&pageY>item){
                        
                        id = index;
                        return true;
                    }
                });
                return id;
            },
            _getDragBoxTopByEle(ele){ // 根据位置序号获取对应的top值
                const height = isWeex?this.cellHeight:this.cellHeight*2;
                let id = -1;
                // this.isAndroid?this.getTopByEle(ele):(this.getTopByEle(ele)-this.parentY);
                this.getTopByEle(ele);
                let _top = isWeex?this.top:this.top/2;
                this.posArr.some(function(item,index){
                    if(_top==item) {
                        id = index;
                        return true;
                    }
                });
                return id * height;
            },
            _getIdByEle(ele){ // 根据dom获取top值，再比较top值在数组中的位置，确定当前移动的是哪一个cell
                let self = this;
                let id = -1;
                this.getTopByEle(ele);
                 let _top =  isWeex?this.top:this.top/2;
                let result = self.topArr.some(function(item,index){
                     if(_top==item) {
                         id = index;
                         return true;
                     }
                 });
                return id;
            },
            getTopByEle(ele){
                let top = 0;
                let result = dom.getComponentRect(ele, option => {
                   this.top = option.size.top - this.parentY;
                });

            },
            getTopByParent(ele) {
                 let result = dom.getComponentRect(ele, option => {
                   this.parentY = option.size.top;
                 });

            },
            leftMove(n) {
                if (this.isInAnimation === true) {
                   if (this.gesToken) {
                     bindingx.unbind({
                       eventType: 'pan',
                       token: self.gesToken
                     });
                     this.gesToken = undefined;
                   }
                   return;
                 }
                 var self = this;
                 var my = getEl(this.cellDoms[n]);
                 var translate_x_origin = `x+0`;
                 var gesTokenObj = bindingx.bind({
                   anchor: my,
                   eventType: 'pan',
                   props: [{
                       element: my,
                       property: 'transform.translateX',
                       expression: translate_x_origin
                     }
                   ]
                 }, function(e) {
                   if (e.state === 'end') {
                    console.log(e);
                     self.x += e.deltaX;   // deltaY是指相对于元素原来位置的y轴上的偏移值
                     self.bindTime(n);
                   }
                 });
                 self.gesToken = gesTokenObj.token;
            },
            bindTime(n) {
                this.isInAnimation = true;
                var exit_origin = 't>500';
                var changed_x;
                var final_x;
                var translate_x_origin;
                if(this.x>=375) {
                   changed_x = 375 - this.x;
                   final_x = 375;
                }else if(this.x<-60){
                   changed_x = -60 - this.x;
                   final_x = -60;
                }else{
                   changed_x = 0;
                   final_x = this.x;
                };
                translate_x_origin = `easeOutElastic(t,${this.x},${changed_x},1000/60)`;
                var self = this;
                var ele = getEl(this.cellDoms[n]);
                var result = bindingx.bind({
                  eventType: 'timing',
                  exitExpression: exit_origin,
                  props: [{
                      element: ele,
                      property: 'width',
                      expression: translate_x_origin
                    }
                  ]
                }, function(e) {
                  if (e.state === 'end' || e.state === 'exit') {
                    self.x = final_x;
                    self.isInAnimation = false;
                    // self.movingAnimation();
                    // 在这里与客户端交互响应播放时间
                  }
                });
            }

           },
           beforeMount() {
                
                
           },
           mounted() {
             this.$nextTick().then(function () {
                 if(this.$refs.cell) {
                    this.cellDoms = this.$refs.cell.map(function(item){
                       return item;
                    }.bind(this));
                 }
                 dom.getComponentRect(this.$refs.scroller, option => {
                   this.parentY = this.isAndroid?this.parentTop:option.size.top;
                 });
                 this.copyList = JSON.parse(JSON.stringify(this.emojiList));
             }.bind(this));
             

             
           }
    }
</script>

<style scoped>
    .list{
        /*height: 360px;*/
        flex-direction: column;
        overflow-y: hidden;
    }
    .pics{
        width: 60px;
        height: 60px;
        width: blue;
        border-radius: 30px;
        margin-left: 20px;
    }

   .emoji{
        width: 60px;
        height: 60px;
        width: blue;
        border-radius: 30px;
    }
    
    .cell{
        position: absolute;
        height: 70px;

    }
    .delete{
        height: 60px;
        width: 60px;
        background-color: red;
    }
    .wrapper{
        flex-direction: row;
    }
    .scroller{
        /*width: 375px;*/
        flex-direction: row;
        justify-content: space-between;
        height: 70px;
        padding-bottom: 10px;

    }
    .emoji-info{
        width: 230px;
        /* flex: 1; */
        margin-left: 20px;
        text-align: center;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #dddddd;
    }
    .emoji-title{
        height: 60px;
        line-height: 60px;
        font-size: 14px;
        /*text-align: center;*/

    }
    .icon{
        font-family: iconfont;
        font-size: 24px;
    }
    .icon-drag{
        width: 45px;
        height: 60px;
        line-height: 60px;
        padding-right: 15px;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #dddddd;
    }
    .dragBox{
        opacity: 0.7;
    }
</style>