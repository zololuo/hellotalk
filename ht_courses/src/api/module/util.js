import * as i18n from './i18n'

export function get_suffix(filename) {
    pos = filename.lastIndexOf('.')
    suffix = ''
    if (pos != -1) {
        suffix = filename.substring(pos)
    }
    return suffix;
}

export function random_string(len) {
　　len = len || 32;
　　var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
　　var maxPos = chars.length;
　　var pwd = '';
　　for (var i = 0; i < len; i++) {
    　　pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}


var _LOCAL_TS_DIFF = 0
export function getNowTS(tf){
	var timestamp =(new Date()).valueOf();
	if(tf){
		var day = moment.unix((timestamp - _LOCAL_TS_DIFF)/1000)
		return day.format('YYYY-MM-DD hh:mm:ss');
	}else{
			 return timestamp - _LOCAL_TS_DIFF
	}
}

export function setServerTS(server_ts){
	_LOCAL_TS_DIFF  =(new Date()).valueOf()-  server_ts
}

export function bindVueFilter(Vue){

	Vue.prototype._CUSTOMER_ID 	=	'0SxAzLOputt'

	Vue.filter('datetime', timestamp => {
	  return  moment(timestamp).format("YYYY MMM Do");
	})

	Vue.filter('msgShowDate', timestamp => {
	  return moment(timestamp).calendar()
	})
	Vue.filter('time', timestamp => {
	  return new Date(timestamp).toLocaleTimeString()
	})
}

export function getBLOBFileHeader(blob, callback) {
  var fileReader = new FileReader();
  fileReader.onloadend = function(e) {
    var arr = (new Uint8Array(e.target.result)).subarray(0, 4);
    var header = "";
    for (var i = 0; i < arr.length; i++) {
      header += arr[i].toString(16);
    }
    callback(mimeType(header));
  };
  fileReader.readAsArrayBuffer(blob);
}
function mimeType(headerString) {
	var type = '';
  if (/^504B34/gi.test(headerString)||/^504B56/gi.test(headerString)||/^504B78/gi.test(headerString)) {
    type = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  }else if(/^25504446/gi.test(headerString)){
    type = "application/pdf";
  }else{
    type = "unknown";
  }
  return type;
}

export function restTime(loaded,timeStamp,restLoad) {
  if (loaded === 0 || typeof loaded != 'number'||typeof timeStamp != 'number'||typeof restLoad != 'number') {
    return '00:00:00';
  }
  var timeDifference = timeStamp/1000;
  var speed = loaded/timeDifference;
  var timer = Math.round(restLoad/speed);
  if (timer<60) {
    var sec = timer<10?'0'+timer:timer;
    return '00:00:'+sec;
  }else if(timer<60*60) {
    var sec = timer%60<10?'0'+timer%60:timer%60;
    var min = parseInt(timer/60)<10?'0'+parseInt(timer/60):parseInt(timer/60);
    return '00:'+min+':'+sec;
  }else{
    var hours = parseInt(timer/3600)<10?'0'+parseInt(timer/3600):parseInt(timer/3600);
    var min   = parseInt(timer%3600/60)<10?'0'+parseInt(timer%3600/60):parseInt(timer%3600/60);
    var sec   = timer%3600%60<10?'0'+timer%3600%60:timer%3600%60;
    return hours+':'+min+':'+sec;
  }
}

export function calSpeed(loaded,timeStamp) {  
  var timeDifference = timeStamp/1000;
  var speed = Math.abs(loaded/timeDifference);
  if (speed<1024) {
    return speed.toFixed(2)+'Byte/s';
  }else if (speed<1024*1024) {
    return (speed/1024).toFixed(2)+'KB/s';
  }else{
    return (speed/1024/1024).toFixed(2)+'M/s';
  }
}

export function typeFormat(type) {
  if (type=='application/msword'||type=='application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    return 'worldbg';
  }else if(type=='application/vnd.ms-powerpoint'||type=='application/vnd.openxmlformats-officedocument.presentationml.presentation'){
    return 'pptbg';
  }else if(type=='application/pdf'){
    return 'pdfbg';
  }else{
    return '';
  }
}
