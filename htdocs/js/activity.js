// 设置隐藏属性和可见改变事件的名称，属性需要加浏览器前缀     
if (typeof document.hidden !== "undefined") {  
  visibilityChange = "visibilitychange";  
} else if (typeof document.mozHidden !== "undefined") {  
  visibilityChange = "mozvisibilitychange";  
} else if (typeof document.msHidden !== "undefined") {   
  visibilityChange = "msvisibilitychange";  
} else if (typeof document.webkitHidden !== "undefined") {  
  visibilityChange = "webkitvisibilitychange";  
}  
document.addEventListener(visibilityChange, function(e) {  
  window.location.reload();
}, false);
(function() { // 禁止iOS双击上滑
	var agent = navigator.userAgent.toLowerCase();
	var iLastTouch = null;
	if (agent.indexOf("iphone") >= 0 || agent.indexOf("ipad") >= 0) {
	    document.body.addEventListener("touchend", function (event) {
	        var a = new Date().getTime();
	        iLastTouch = iLastTouch || a + 1;
	        var c = a - iLastTouch;
	        if (c < 500 && c > 0) {
	            event.preventDefault();
	            return false;
	        }
	        iLastTouch = a
	    }, false);
	};
})();
window.onload = function() { // 页面渲染完成才开始加载定时器
		activityTimer();
}
var myInterval = (function(){ //  利用setTimeout封装解决setInteval函数，解决setInteval不准确的方式
    var intervalObj = {};  // 存储每个setInterval
    var intervalId = 0;    // 定时器个数
    var _setInterval = function(fn, interval){
        var thisIntervalId = ++intervalId;
        function next(){
            intervalObj[thisIntervalId] = setTimeout(function(){
                fn();
                next();
            }, interval);
        }
        next();
        return thisIntervalId;
    };
    var _clearInterval = function(intervalId){
        clearTimeout(intervalObj[intervalId])
    };
    return {setInterval: _setInterval, clearInterval: _clearInterval}
})();
var timer = null;
var endTime = 1519142399000;  // endTime 1519142399000
console.log(new Date(1518142399000));
var hBox = document.getElementById('hour'),
	mBox = document.getElementById('minute'),
	sBox = document.getElementById('second'),
	timeBox =  document.getElementById('time-box'),
	dayWrap = document.getElementById('day-wrap'),
	dBox = document.getElementById('day');
var buy_btn = document.getElementById('buyBtn'),
    notBuy_btn = document.getElementById('notBuyBtn');
function activityTimer(){
	myInterval.clearInterval(timer);
	//获取服务器时间
	function getSevertime(){
		var xmlHttp = new XMLHttpRequest();
		if( !xmlHttp ){
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlHttp.open("HEAD",location.href,false);
		xmlHttp.send();
		var severtime=new Date(xmlHttp.getResponseHeader("Date"));
		return severtime;
	}
	var time = (endTime - getSevertime().getTime())/1000;
	if(time<0) {activityEnd();return;}
	setNewSyTime(time);
	timer = myInterval.setInterval(function() {
		var oTimebox = document.getElementById("timebox");
		var syTime = Number(dBox.innerText)*3600*24 + Number(hBox.innerText)*60*60 + Number(mBox.innerText)*60+Number(sBox.innerText); // 服务器请求返回剩余时间秒
		var totalSec = syTime - 1;
		if(totalSec >= 0) {
			setNewSyTime(totalSec);
		} else {
			clearInterval(timer);
			activityEnd();
		}
	}, 1000);
	function setNewSyTime(sec) {
		var s = sec % 60;
		sec = (sec - s) / 60; 
		var m = sec % 60;
		sec = (sec - m) / 60; 
		var h = sec % 24;
		sec = (sec - h) / 24;
		var d = sec;
		console.log(d+'天'+h+'时'+m+'分'+s+'秒');
		if(d>0) {
			timeBox.style.display = 'none';
			dayWrap.style.display = 'block';
			dBox.innerText = d;
		}else{
			timeBox.style.display = 'block';
			dayWrap.style.display = 'none';
		}
	   	hBox.innerText =  ("0"+h.toString()).substr(-2);
		mBox.innerText =  ("0"+m.toString()).substr(-2);
		sBox.innerText =  ("0"+s.toString()).substr(-2);
	}
	function activityEnd() {
		hBox.innerText = '00';
    		mBox.innerText = '00';
    		sBox.innerText = '00';
    		buy_btn.style.display = 'none';
    		notBuy_btn.style.display = 'block';
	}
};
