export function countDown() {
	return `
		function Countdown(hBox,mBox,sBox,endTime,callback) {
			this.hBox = hBox;
			this.mBox = mBox;
			this.sBox = sBox;
			this.endTime = endTime;
			this.callback  = callback||null;
			this.timer = null;
			this.setTime(endTime - this.getServerTime().getTime()/1000 );
			var self = this;
			setTimeout(function() {
				self.startTiming();
			},200);
		}
		Countdown.prototype = {
			init: function() {
				this.hBox.innerText = '00',
				this.mBox.innerText = '00',
				this.sBox.innerText = '00'
			},
			getServerTime: function() {
				var xmlHttp = new XMLHttpRequest();
				if(!xmlHttp) {
					xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
				}
				console.log( window.location.href);
				xmlHttp.open("HEAD", window.location.href, false);
				xmlHttp.send();
				var severtime = new Date(xmlHttp.getResponseHeader("Date"));
				return severtime;
			},
			setTime: function(leftTime) { // 设置倒计时
			
				if(leftTime<0){this.closeCountDown();return false;}
				var s = Math.floor(leftTime%60); 
				var m = Math.floor(leftTime/60%60); 
				var h = Math.floor(leftTime/60/60);
				this.hBox.innerText =  ("0"+h.toString()).substr(-2);
				this.mBox.innerText =  ("0"+m.toString()).substr(-2);
				this.sBox.innerText  =  ("0"+s.toString()).substr(-2);
				console.log(h+':'+m+':'+s);
			},
			closeCountDown: function(){
				this.init();
				this.action();
			},
			startTiming: function() { // 开始计时
				var self = this;
				if(this.timer!==null) clearInterval(this.timer);
				var self = this;
				this.timer = setInterval(function() {
					var syTime = Number(self.hBox.innerText)*60*60 + Number(self.mBox.innerText)*60+Number(self.sBox.innerText); // 服务器请求返回剩余时间秒
					syTime = syTime -1;
					if( syTime>= 0) {
						self.setTime(syTime);
					} else {
						clearInterval(self.timer);
						self.closeCountDown();
					}
				},1000);
			},
			action: function() { // 倒计时期间的活动
				if(!this.callback){return;}
				try{
					this.callback();
				}catch(e){
					console.log(e);
				}
				
			}
		 	
		};
		var hBox = document.getElementById('hour')||null,
			mBox = document.getElementById('minute')||null,
			sBox = document.getElementById('second')||null;
		var btn = document.getElementById('panic-buy-btn')||null;
		console.log(new Date('2018-03-12 09:00:00').getTime());
		if(hBox&&mBox&&sBox&&btn&&endTime){
			var aa = new Countdown(hBox,mBox,sBox,endTime);
		}
	`
}
