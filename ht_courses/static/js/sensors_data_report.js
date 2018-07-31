(function(){
  // 1:试听课 2:收费课 3:课程介绍 4:课程列表 5:推送文章 6:其它
  var p = document.createElement('p');
  p.innerHTML = courseType;
  p.style.display = 'none';
  p.id='courseType';
  document.body.appendChild(p);
  // 跳转按钮的链接URL的规范处理
  var resetHref = document.querySelectorAll('a.resetHref');
  if(resetHref.length>0){
    for(var i=0,length=resetHref.length;i<length;i++){
      var newHref = 'http://lesson.hellotalk.org/';
      var src = resetHref[i].getAttribute('href');
      var reg = /source=\d/;
      src = resetLocation(src);
      if(reg.test(src)){
        src  = src.replace(/source=\d/,"source=${courseType}");
      }else {
        if(src.indexOf('?')!==-1){
          src += src.lastIndexOf('?')!=src.length-1?'&source='+courseType:'source='+courseType;
        }else{
          src += '?source='+courseType;
        }
      }
      if(window.location.host=='lesson.hellotalk.org') {
        src  = newHref+src;
      }
      resetHref[i].setAttribute('href',src);
    }
  };
  var saStartTime = new Date();
  var course_id = location.href.match(/[0-9]+\.html/gi)[0].match(/^\d+/)[0];
  var course_source = getPageSource(window.location.search);
  console.log('source:'+course_source);
  // 推送文章上报
  isPushArticle();
  function isPushArticle() {
    var href = window.location.search;
    var sourceId = urlGet('source');
    if(sourceId=='5') {
      document.getElementById('courseType').innerText = 'PushArticle';
      console.log('enter PushArticle');
      sa.track('enterPAPushArticle', {
        public_account_id: 999999,
        article_id: course_id,
        article_title: document.title,
      });
    }
  }
  // 页面进入上报
  sa.track('enterTECoursePage', {
    pageUrl: location.href,
    source: course_source,
    course_name: document.title,
  });
  // 页面离开上报
  window.onbeforeunload = function() {
    var end = new Date();
    var duration = (end.getTime() - saStartTime.getTime()) / 1000;
    sa.track('leaveTECoursePage', {
      source: course_source,
      course_id: course_id,
      course_name: document.title,
      stay_duration: duration,
    });
  };
  // 购买按钮点击 上报
  var buyBtn = document.querySelectorAll('.buyWithHelloTalk');
  if(buyBtn.length>0) {
    for(var i=0;i<buyBtn.length;i++){
      buyBtn[i].addEventListener('click',function(){
        var course_source = getBuySource(document.getElementById('courseType').innerText);
        sa.track('TECourseBuyClick',{
          purchase_button_position: document.title,
          source: course_source
        });
      })
    }
  }
  // 获取购买按钮来源
  function getBuySource(id) {
    switch(id) {
      case '1': return 'Audition Course';break;
      case '2': return 'Charge Course';break;
      case '3': return 'Course Introduction';break;
      default: return '';break;
    }
  }
  // 获取页面来源
  function getPageSource(href) {
    var name = 'source';
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = href.substr(1).match(reg);
    if(r==null) return '';
    switch(decodeURIComponent(r[2]).split('?')[0]) {
      case '1': return 'Next Course';break;
      case '2': return 'Next Course';break;
      case '3': return 'Course Introduction';break;
      case '4': return 'Course List';break;
      case '5': return 'Push Article';break;
      default: return '';break;
    }
  }
  // 清理URL
  function resetLocation(localHref) {
    if(localHref.indexOf('?')!=localHref.lastIndexOf('?')) {
      var s = '';
      for(var j=1,length = localHref.split('?').length;j<length;j++) {
        s += localHref.split('?')[j];
        if(j!==length-1&&localHref.split('?')[length-1]!=''){
          s +='&'
        }
      }
      localHref =   localHref.split('?')[0]+'?'+s;
    }
    return localHref;
  }
  // 获取URL参数
  function urlGet(key, def) {
    var href = resetLocation(window.location.href);
    var aQuery = href.split("?"); //取得Get参数
    var aGET = new Array();
    if (aQuery.length > 1) {
      var aBuf = aQuery[1].split("&");
      for (var i = 0, iLoop = aBuf.length; i < iLoop; i++) {
        var aTmp = aBuf[i].split("="); //分离key与Value
        aGET[aTmp[0]] = aTmp[1];
      }
    }
    if (key == '*')
      return aGET
    var start = def;
    if (aGET.length < 1 && aGET.hasOwnProperty(key)) {
      start = aGET[key];
    }
    return start;
  }
})(sa,courseType);
