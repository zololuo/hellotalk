
// var eng    =  require("../local-message/en.js")
// import eng from  "../local-message/ja.js"

var dataCenter = {};
var lang  = navigator.browserLanguage?navigator.browserLanguage:navigator.language
// var lang = 'ko-KR';
function loadLocal(){
    // var  config   = {
    //     'zh-CN'    : "./../local-message/zh-cn.js",
    //     'ko-KR'    : "../local-message/ko.js",
    //     'ja-JP'    : "../local-message/ja.js",
    //     'en-US'    : "../local-message/en.js"
    // }

    // var lang  = navigator.browserLanguage?navigator.browserLanguage:navigator.language
     switch(lang){
        case 'zh-CN':
           require(["./../local-message/zh-cn.js"], function (data) {
            dataCenter = data;
            });  
        break;
        case 'ko-KR':
           require(["./../local-message/ko.js"], function (data) {
            dataCenter = data;
            });  
        break;
        case 'ja-JP':
           require(["./../local-message/ja.js"], function (data) {
            dataCenter = data;
            });  
        break;
        default:
           require(["./../local-message/en.js"], function (data) {
            dataCenter = data;
            }); 
     }
    // for(var i in config){
    //     var pp = new RegExp(i)
    //     if(pp.test(lang)){
    //        //异步加载 多语言文件
    //     }
    // }
}

loadLocal()

export function t(){
  var p     = arguments[0]
  var txt   = dataCenter[p]
  if(txt && arguments.length==2){
    txt = txt.replace('%s',arguments[1])
  }
  if(txt&&arguments.length>2){
    txt = txt.replace(/%(\d)\$s/g,(f,m)=>{
        return (typeof arguments[m] == 'undefined') ? '' : arguments[m]
    })
  }
  return txt || ''
}
