import flagName   from './flagName.js'
import langs      from './langPack.js'
import {isWeex}   from 'universal-env'


const dom           = weex.requireModule('dom');
const stream        = weex.requireModule('stream');
const modal         = weex.requireModule('modal');
const meta          = weex.requireModule('meta');
const navigatorObj  = weex.requireModule('navigator');
const animation     = weex.requireModule('animation');

let lang = '';    // 默认英文
// 获取语言
if(weex.config.env.platform=='Web') {
  lang = navigator.language;
}

//加载图标字体文件
dom.addRule('fontFace', {
  'fontFamily': 'iconfont',
  'src': "url('https://ali-hk-cdn.hellotalk8.com/Weex_GroupClass/font_713449_1iqh9c3yt35.ttf')"
})
// 封装客户端的module的调用方法
export function moduleCall(moduleName, method, options) {
  return new Promise(resolve=>{
    if (weex.requireModule(moduleName)&&weex.requireModule(moduleName)[method]) {
      var callback = res=>{
        try{
          if (res) {
            res = JSON.parse(res);
          }
          resolve(res);
        }catch(e){
          moduleCall('logUtils','log',{
            tag: 'json parse error',
            message: '解析客户端json参数出错',
            level: 3
          });
        }
      };
      if (options!==null&& typeof options==='object') {
        weex.requireModule(moduleName)[method].call(weex.requireModule(moduleName),options,callback)
      }else{
        weex.requireModule(moduleName)[method].call(weex.requireModule(moduleName),callback)
      }
      
    }else{
      resolve();
    }
  })
}


meta.setViewport({width: weex.config.viewport || 375});



// http://qtest.hellotalk.org/s/gl/lessonRecordInfo/5b29d97d372cbf4adef571dd/5b29d981372cbf4adef571de?openid=24R4R0RPH4pD
const flagHost = 'https://ali-hk-cdn.hellotalk8.com/pub/flags/'; // 国旗URL路径


var pathObj = {
  getFileData:  "/s/gl/getFileData",    // pptInfo
  groupLesson:  "/s/gl/groupLesson",
  lessonRecord: "/s/gl/lessonRecord",    
  recordMsg:    "/s/gl/recordMsg",      // chatInfo
  userInfo:     "/s/gl/userInfo",       // userInfo
  lessonRecordInfo: "/s/gl/lessonRecordInfo",
}
function getNetPath(host, api) {
  if (pathObj[api]) {
    return host+pathObj[api];
  }else{
    return '';
  }
}
let host = 'https://qtest.hellotalk.org';   // http://www.hellotalk.com
// get请求
export function $get(apiAdress,paramets) {
  if(typeof paramets !='string') return;
  return new Promise(resolve=>{
     
      // if (weex.config.env.platform==='Web') {//测试使用
      //   host = 'https://qtest.hellotalk.org';//测试使用
      // }
      // if (res&&res.url) {
      //   host = res.url;
      // }else if(weex.config.env.platform!=='Web'){
      //   moduleCall('logUtils','log',{
      //     tag: 'wns config error',
      //     message: '维纳斯配置出错',
      //     level: 3
      //   });
      //   return;
      // }
      if(!getNetPath(host,apiAdress)) return;
      var GET_URL_JSONP = getNetPath(host,apiAdress)+paramets;
     
      stream.fetch({
          method: 'GET',
          url: GET_URL_JSONP,
          type:'json',
      }, function(ret) {
          if(!ret.ok||!ret.data){
            alertAct('network error!');
            alertAct(GET_URL_JSONP);
          }else{
            resolve(ret);
          }
      },function(response){
          console.log(response);
          
      });
      
  })
  
}
 
// 组装queryString
export function stitchingParamets(obj) {
  var str = '';
  if (!obj||Object.keys(obj).length===0) {
    return str;
  }
  for(var key in obj) {
    str += (key+'='+obj[key]+'&');
  }
  return str.substr(0,str.length-1);
}
//  获取国旗URL
export function getFlagUrl(params) {
    var areaCode = params;
    var url = '';
    if (!(/^[A-Z]+$/.test(areaCode))) {
      return '';
    }
    flagName.source.some((ele, index) =>{
        if( ele['code']==areaCode) {
          url = flagHost+ele['en']+'@2x.png';
          return true;
        }
    });
    return url;
}

// 表情转码
export function strToEmoji(str) {
    return String.fromCharCode(parseInt(str.substr(0,4),16),parseInt(str.substr(4,4),16))
}
export function androidStrToEmoji(str){
    var newStr = '';
    newStr = str.replace(/\[[^\[]*\]/gi,function(emojiTag){
        var unicodeEmoji = emojiTag.match(/\[(.*)\]/)[1];
          if (!(/^[0-9a-zA-Z]+$/gi.test(unicodeEmoji))||unicodeEmoji.length%4!==0) {
                return emojiTag;
          }
          if (!/^A-Za-z0-9+$/.test(unicodeEmoji)&&unicodeEmoji.length%4!==0) {
                return '';
          }
          return strToEmoji(unicodeEmoji)
    })
    return newStr;
}

// weex自带的弹窗模块
export function alertAct(messageOrType, options) {
  if (messageOrType&&modal[messageOrType]) {
    return new Promise(resolve=>{
      modal[messageOrType].call(modal, options, result=>{
        if (typeof resolve==='function') {
          resolve(result);
        }
      });
    })
  }
  modal.alert({
    message: messageOrType,
    callback:()=>{}
  })
}
// 返回上一级
export function goBackAct() {
  navigatorObj.pop({
    'animated': 'true'
  }, function(event) {
    // console.log(event);
  })
}


// 获取多语言文字
export function translate(attr, data) {
  return new Promise((resolve,reject)=>{
     let str = ''; 
     if(lang!='') {
       str = getTranslate(lang,attr,data);
       resolve(str);
     }else{
      moduleCall('languageModule','getAppLanguage').then(res=>{
         if (res&&res.language&&Object.keys(langs[res.language]).length>0) {
            lang = res.language;
         }else{
          lang = 'en';
         }
         str = getTranslate(lang,attr,data);
         resolve(str);
      }); 
     }
  });
}
function getTranslate(lang,attr,data) {
  var str = '';
  if (langs[lang]&&Object.keys(langs[lang]).length>0) {
    let source = langs[lang];
      if (typeof source[attr]==='string') {
       str = source[attr];
       if (data&&data.forEach) {
         data.forEach((item,i)=>{
           str = str.replace(new RegExp(`{{num${i+1}}}`,'g'),item);
         });
       }
      }
    }
  return str;
} 

// 时间格式转换
export function transform_time(time){
    time = parseFloat( time );
    var h,m,s;
    h = Math.floor( time/3600 ); 
    m = Math.floor( time%3600/60 ); 
    s = Math.floor( time%60 ); 
    return twoDigits(h)+':'+twoDigits(m)+':'+twoDigits(s);
}

export function twoDigits(num) {
    return num>=10?num:'0'+num;
}
export function getEl(el) {
  if (typeof el === 'string' || typeof el === 'number') return el;
  return isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
}
// 提取页面上的参数
export function extractData(str) {
  var obj = {};
  if (typeof str!=='string'||!/\?/g.test(str)) {
    return '';
  }
  var arr = str.split('?');
  str = arr[arr.length-1];
  if (str) {
    str.split('&').forEach(item=>{
      obj[item.split('=')[0]] = decodeURIComponent(item.split('=')[1]);
    })
  }
  return obj;
}
