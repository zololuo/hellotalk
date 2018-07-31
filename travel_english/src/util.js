
import pageMap from   './pageMap.js'
import langs   from   '@/languagePack'

import {getHpUserInfo }  from  '@/api'
const globalEvent   = weex.requireModule('globalEvent');
const modal = weex.requireModule('modal')
let lang = '';   
// 获取语言
if(weex.config.env.platform=='Web') {
  lang = navigator.language;
}else{
  weex.requireModule('languageModule').getAppLanguage(res=>{
    res = JSON.parse(res);
    if (res&&res.language&&Object.keys(langs[res.language]).length>0) {
        lang = res.language;
    }else{
        lang = 'en';  // 默认英文
    }
  });
}
export function getLang() {
  return lang;
}

let xtea    = require('customize_xtea');//加密
let Buffer  = require('buffer/').Buffer

// 提取页面上的参数
export function parseQueryString(str) {
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

// arrayBuffer to buffer
function toBuffer(ab) {
  var buffer = new Buffer(ab.byteLength);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buffer.length; ++i) {
      buffer[i] = view[i];
  }
  return buffer;
}

//加密组装queryString
function stringifyParamets(obj, token) {
  var str = '';
  if (!obj||Object.keys(obj).length===0) {
    return str;
  }
  for(var key in obj) {
    str += (key+'='+encodeURIComponent(obj[key])+'&');
  }
  var stringifyStr = xtea.xTEAEncryptWithKey(str.substr(0,str.length-1), token);//进行加密
  stringifyStr = toBuffer(stringifyStr);
  return new Buffer(token).toString('hex')+stringifyStr.toString('hex');
}

// 跳转远程bundle的url
let timer = null;
export function jumpRemotePage(options, querystring) {
  var bundleUrl = typeof options==='strind'?options:(pageMap[options.weexPage?options.weexPage:'']);
  var str = '';
  if (typeof querystring==='object'&&querystring!==null) {
    var buffer = new Buffer(bundleUrl,'hex');
    var token = buffer.toString().slice(0,16);
    str = stringifyParamets(querystring, token)?('/'+stringifyParamets(querystring, token)):'';
  }
  // console.log(pageMap[options.weexPage?options.weexPage:'']+str);
  clearTimeout(timer);
  timer = setTimeout(()=>{
    weex.requireModule('navigator').push({
      'url': typeof options==='string'?(options+str):('wxhellotalk://weex/'+pageMap[options.weexPage?options.weexPage:'']+str),
      'animated': 'true'
    }, function (event) {
      // console.log(event);
    }); 
  },200)
}

export function setCacheValue(obj, callback) {
  weex.requireModule('valueModule').setCacheValue(obj, callback)
}

// 获取多语言文字
export function translate(attr,data) {
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

// 获取路径
export function readWeexUrl(weexPage) {
  if (!weexPage||!pageMap[weexPage]) {
    return '';
  }
  return pageMap[weexPage];
}
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
          alertAct('JSON解析出错'+e);
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
// 增加事件监听
export function addEventListen(eventName, callback) {
  globalEvent.addEventListener(eventName, function (e) {
    if (callback) {
      callback(e);
    }
  });
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

// 神策数据上报
export function sensorsAct(event,data) {
  
  if (weex.requireModule('WeexSensorsDataAnalyticsModule')) {
    getHpUserInfo().then(hpUserInfo=>{
      weex.requireModule('WeexSensorsDataAnalyticsModule').track(event,Object.assign(data,{
        public_account_id: hpUserInfo.hpUserId-0
      }))
    });
  }
}
