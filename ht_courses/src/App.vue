<template>
  <div id="rocket-chat">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
  	return {
  	}
  },
}
</script>
<style>
*{
  margin:0;
  padding:0;
}
html,body{
  height: 100%;
  width:100%;
  margin:0;
  padding:0;
  overflow: hidden;
}
ul,li{
  list-style: none;
}
#rocket-chat{
  height: 100%;
  width: 100%;
  margin:0;
  padding:0;
}
.el-message-box__wrapper{
  z-index: 99999!important;
}
.el-message-box__btns{
  display: flex;
  /*flex-direction: row-reverse;*/
  justify-content: space-around;
}
.el-message-box__message{
  margin-left: 0!important;
}
.el-message-box__content{
  text-align: center;
}
.el-button--primary{
  background-color: rgb(66,95,208)!important;
  border:none;
}
.el-message-box__content{
  padding-bottom: 0!important;
}

.user-center{
  display: flex;
  align-items: center;
  cursor: pointer;
}
.user-center>span{
  margin:0 10px;
}
.user-center i{
  font-size: 12px;
}
.user-center .hu-box img{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
  margin-left: 10px;
}
.cancel-btn{
  color: #fff!important;
}
.el-icon-arrow-down{
  transition: all .3s;
  transform: rotate(0deg);
}
.route-icon{
  transform: rotate(180deg);
}
.tinymce-container{
  margin:20px 0;
}
.tinymce-container .mce-edit-area iframe{
  height: 420px!important;
}
.el-button.is-disabled{
  background-color: #eef1f6!important;
}
.preview-wrapper{
  width:370px;
  height: 750px;
  top:5%!important;
  background-color: transparent;
  box-shadow: none;
  border-radius: 20px;
}
.preview-wrapper .el-dialog__header{
  display: none;
}
.preview-wrapper .el-dialog__body{
  padding:0;
  height: 100%;
}
.mce-tinymce,.mce-container-body{
  /*height: 100%!important;*/
}
.mce-container-body.mce-window-body.mce-abs-layout{
  /*height: 504px!important;*/
}
.mce-edit-area{
  height: 82%!important;
}
.mce-edit-area iframe{
  /*height: 100%!important;*/
}
.mce-statusbar{
  display: none!important;
  /*height: 4%!important;*/
}
.preview-box{
  width:100%;
  height:102%;
  background-image: url('https://ali-hk-cdn.hellotalk8.com/class_share/20171023/a78ad4bb850635c890d0c210b066975a.png');
  background-size:122% auto;
  background-repeat: no-repeat;
  background-position: center -15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
}
.tootlpBox{
  position: relative;
}
.tootlpTitle{
  position: absolute;
  bottom:-120%;
  left:50%;
  margin-left: -111px;
  background: #1f2d3d;
  color: #fff;
  padding:10px 20px;
  border-radius: 6px;
  font-size: 14px;
  z-index: 999;
}
.tootlpTitle:after{
  content: '';
  width:0;
  height: 0;
  position: absolute;
  top:-7px;
  left:50%;
  margin-left: -4px;
  border-left:8px solid transparent;
  border-bottom: 8px solid #1f2d3d;
  border-right:8px solid transparent;
}
</style>
