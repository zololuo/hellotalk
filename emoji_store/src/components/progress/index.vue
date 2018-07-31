<template>
	<div>
		<div class="progressWrapper"  @click="downloadEvent" ref="progressWrapper" :style="{borderWidth:downloaded?'0':'1px'} ">
	         <div class="progress" 
	              :style="{width: getProgressWidth, backgroundColor: downloaded?'#dddddd':'#405bd3'}">
	         </div>
	         <div class="text" :style="{width:getProgressWrapperWidth}">
	             <text class="download-text">{{percent==null?'下载':(downloaded?'已下载':percent+'%')}}</text>
	         </div>
	     </div>	
	</div>
	
</template>
<style scoped>
    
    .progressWrapper{
        flex-direction: row;
        height: 50px;
        border-radius: 100px;
        border-style: solid;
        border-width: 1px;
        border-color: #405bd3;
        overflow: hidden;

    }
    .progress{
        height: 50px;
    }
    .text{
        position: absolute;
        left: 0;
        width: 100px;
    }
    .download-text{
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        color: #000000;
    }

</style>
<script>
    import * as util from '../../util'
    export default {
    		name: 'progress',
            created:function () {

            },
            data(){
            	return {
            		downloaded: false,
	                percent: null,
	                timer: null,
            	}
            },
            methods:{
                downloadEvent() {
                    if(this.timer!==null) return false;
                    this.percent = 0;
                    this.timer =  setInterval(function() {
                        if(this.percent==100) {
                            clearInterval(this.timer);
                            this.downloaded = true;
                            return false;
                        }
                        this.percent +=10 ;
                    }.bind(this),1000);
                },
            },
            computed: {
                isWeb() {
                    return weex.config.env.platform==='Web';
                },
                getProgressWrapperWidth() {
                    return this.isWeb?'100%':(weex.config.viewport-60)+'px';
                },
                getProgressWidth() {
                    if(this.percent==null) return 0;
                    var width = this.isWeb?this.$refs.progressWrapper.getBoundingClientRect().width:weex.config.viewport-60;
                    return (this.percent/100)*width+'px';
                },
            }


    }
</script>

