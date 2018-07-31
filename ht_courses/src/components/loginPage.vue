<template>
  <section class="full-page color-tertiary-font-color">
      <div id="login_box">
        <div class="reBtn" v-if="isFailure" @click="drawQrCode"><img src="https://ali-hk-cdn.hellotalk8.com/yingyutalk/static/qr_refresh.png" alt=""></div>
        <div id="qrcode" :class="{hideqr:isFailure}"></div>
        <div class="remind_title">
          <p class="sub_desc" v-if="isFailure">
            {{t('qrcode_timeout')}}.
          </p>
          <p class="sub_desc" v-else>
            {{t('scan_title')}}
          </p>
        </div>
        <div class="icon-box">
          <!-- <img src="https://ali-hk-cdn.hellotalk8.com/yingyutalk/static/ic-web-icon-normal@3x.png"
               class="ic-web-icon-normal"> -->
        </div>
      </div>
  </section>
</template>

<script>
import * as msgApi from './../api';
import { Message } from 'element-ui'

export default {
  name: 'loginPage',
  data(){
    return {
      _checked_ok : 0, //1 正在请求，2=失败，3=成功登陆 , 4=有错误信息，
      tokenLogin:' ',
      requesting : false,
      isFailure  : false,
      failureIndex:0
    }
  },
  mounted(){
    this.drawQrCode();
  },
  methods:{
    openLogin(){
      console.log('openLogin')
      axios({url:this.tokenLogin,
        headers:{
          'X-HT-Service':'ht-qr-scan'
        }
      })
    },
    drawQrCode() {
      this._checked_ok = 0;
      this.isFailure  = false;
      var _self   = this
      if(this.requesting){
        console.error('drawQrCode is under handle');
        return;
      }
      _self.requesting = true;
      msgApi.getQrcodeTokenURL('',(data)=>{
        if(!data || !data.url){
           _self.handleQRError(data)
           console.error('getQrcodeTokenURL',data)
           _self.requesting = false;
           return;
        }
        _self.drawQRImageAndCheck.call(_self,data);
      },(data)=>{
        _self.isFailure  = true;
        _self.requesting = false;
      })
    },
    drawQRImageAndCheck(data){
      var qrCodeNode = document.getElementById("qrcode")
      var childs     = qrCodeNode.childNodes;
      for(var i = childs.length - 1; i >= 0; i--) {
        qrCodeNode.removeChild(childs[i]);
      }
      console.log('drawQrCode  ',childs);
      var qrcode = new QRCode(document.getElementById("qrcode"), {
          text: data.url,
          width: 280,
          height: 280,
          colorDark : "#000000",
          colorLight : "#ffffff",
          correctLevel : QRCode.CorrectLevel.H
      });
      this.startCheckQRScan(data.check_url,data)
    },
    handleQRError(data){

    },
    startCheckQRScan(check_url,data){
      console.log('startCheckQRScan',check_url)
      if(window.location.pathname!='/'){
        this.tokenLogin  =  check_url.replace(/\/c\/\S*/,'/y/'+data.token) +'?userid='+window.location.pathname.substr(1,10)+'&from=file_upload';
        this.openLogin();
      }
      var _checked_ok  =  false;
      var _self       = this;
      var timer       = 9;

      _self.reqQRChecker(check_url)
      timer = setInterval(()=>{

        if(_self._checked_ok==3){
          _self.requesting = false;
          clearInterval(timer)
          console.log('startCheckQRScan','logined success ', _self.checked_data)
          var _tokendata  = Object.assign({},_self.checked_data,data);

          _self.$store.commit('setToken',data.token);
          msgApi.checkLoginSuccess();
          msgApi.checkServerLogin(()=>{
            msgApi.moveTokenToLocal(_tokendata);
            _self.$router.push('/coursesClass')
          },(msg)=>{
            Message({
              message: msg,
              type: 'error',
              duration: 5 * 1000
            })
          });
        }else{
          if(_self._checked_ok==2){

            if (_self.failureIndex>3) {
              _self.isFailure  = true;
              _self.requesting = false;
              clearInterval(timer);
              _self.failureIndex = 0;
              return;
            }

            _self._checked_ok = 0
            _self.reqQRChecker.call(_self,check_url)
            _self.failureIndex++;
          }
        }
      },500)
    },
    reqQRChecker(url){
      console.log('reqQRChecker',url)
      var _self = this
      axios(url)
      .then(function (response) {
        var res = response.data
        if(res&&res.checked_ok){
          _self._checked_ok  = res.checked_ok;
          _self.checked_data = res;
          console.log('reqQRChecker done',res);
        }
      })
      .catch(function (error) {
        _self.isFailure  = true;
        _self.requesting = false;
        _self.failureIndex = 6;
        console.error('reqQRChecker',error)
      })
    }
  }
}
</script>
<style>
.full-page{
  height: 100%;
  width:100%;
  background-color: #2d378d;
}
#login_box{
  overflow:hidden;
  position: absolute;
  width: 21%;
  /*height: 54%;*/
  top: 22.5%;
  left: 50%;
  margin-left: -10.5%;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  background-color: #fff;
}
#qrcode{
  overflow:hidden;
  min-height: 288px;
}
#qrcode img{
  display: block;
  width:57.5%;
  margin:28px auto;
}
.remind_title{
  overflow:hidden;
  width:96%;
  margin:0 auto;
  font-family: 'PingFangSC';
  text-align: center;
  color: #333333;
  font-size: 14px;
  /*transform: scale(.75);
  -moz-transform: scale(.75);
  -webkit-transform: scale(.75);*/
}
.ic-web-icon-normal {
  width: 114px;
  height: 18px;
  object-fit: contain;
}
.icon-box{
  text-align: center;
  margin: 30px 0;
}
#login_box .mask{
  width:100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  background-color: #ddd;
  opacity: .8;
}
#login_box .reBtn{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  z-index: 99;
}
#login_box .reBtn img{
  display: block;
  width:57.5%;
  margin:28px auto;
  cursor: pointer;
}
.hideqr img{
  visibility: hidden
}
</style>
