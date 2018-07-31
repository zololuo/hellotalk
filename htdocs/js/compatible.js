if(!Array.prototype.some) {
	Array.prototype.some = function(callback) { //  兼容
	    // 获取数组长度
	    var len = this.length;
	    if(typeof callback != "function") {
	        throw new TypeError();
	    }
	    // thisArg为callback 函数的执行上下文环境
	    var thisArg = arguments[1];
	    for(var i = 0; i < len; i++) {
	        if(i in this && callback.call(thisArg, this[i], i, this)) {
	            return true;
	        }
	    }
	    return false;
	}
}

if ( !Array.prototype.forEach) {
  Array.prototype.forEach = function forEach(callback) {
      // 获取数组长度
    var len = this.length;
    if(typeof callback != "function") {
        throw new TypeError();
    }
    // thisArg为callback 函数的执行上下文环境
    var thisArg = arguments[1];
    for(var i = 0; i < len; i++) {
        if(i in this) {
            // callback函数接收三个参数：当前项的值、当前项的索引和数组本身
            callback.call(thisArg, this[i], i, this);
        }
    }
  }
}

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
