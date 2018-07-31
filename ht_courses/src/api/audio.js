export function audioJs(){
	return `
        ;(function(){
            
          var ovals = document.querySelectorAll('.audios');
          console.log(ovals.length);
           if(ovals.length>0){
              userDefineVoice();
           };
          function userDefineVoice(){
            var audioGroup = document.querySelectorAll('.audios audio');
            var len = audioGroup.length;
            console.log(ovals.length);
            for(var i=0,length=ovals.length;i<length;i++){
              var playBtn = document.createElement('div');
              playBtn.innerHTML = '<div class="play rectangle-4"></div><div class="pause triangle-2"></div>';
              var pwr = document.createElement('div');
              pwr.innerHTML = '<div class="progress-wrap"><span id="drag-bar"></span></div><button class="current-time"></button>';
              ovals[i].querySelector('.oval-2').appendChild(playBtn);
              ovals[i].querySelector('.progress').appendChild(pwr);
              audiosPlay(i);
            }
              var last = -1;  // 表示上一个音频索引
              function audiosPlay(i) {
                var audioBox = document.querySelectorAll('.audios')[i];
                var m_audio = document.querySelectorAll('.audios audio')[i];
                var progress = document.querySelectorAll('.progress')[i],
                  curTime = document.querySelectorAll('.current-time')[i],
                  progressWrap = document.querySelectorAll('.progress-wrap')[i];
                var play = document.querySelectorAll('.play')[i],
                  pause = document.querySelectorAll('.pause')[i];
                var btn = document.querySelectorAll('.oval-2')[i];
                var loadingPic = document.querySelectorAll('.audios .loading')[i];
                var flag = false;
                var pw = window.getComputedStyle?window.getComputedStyle(progress,null)['width']:progress.currentStyle.width;
                pw = parseFloat(pw);
                // 显示音频长度
                var Duration = audioBox.querySelector('.duration');
                Duration.addEventListener('click', function(e){
                  e.preventDefault();
                })
                try{
                  Duration.innerText = time(m_audio.getAttribute("data-duration"));
                }catch(e){
                  console.log(e);
                  console.log(i);
                  console.log(Duration);
                  console.log(audioBox);
                }
                
                // 播放事件
                btn.onclick = function (e) {
                  e = e || window.event;
                  e.stopPropagation();
                  if (!m_audio.paused) {
                    m_audio.pause();
                    play.style.display="block";
                    pause.style.display="none";
                    return;
                  }
                  for (var j = 0; j < len; j++) {
                    if (i!==j) {
                      if (audioGroup[j]) {
                        audioGroup[j].pause();
                      }
                    }
                  }
                  if (!m_audio.getAttribute("src")) {
                    m_audio.src = m_audio.getAttribute('data-src');
                    setTimeout(function() {
                      m_audio.play();

                      start();
                    },100);
                  }else{
                    m_audio.play();
                    start();
                  }
                  if(last>=0&&last!==i){
                    end(last);
                  }
                  last = i;
                };
                document.addEventListener('visibilitychange',function(){
                    m_audio.pause();
                });
                m_audio.onplay=function() {
                  pause.style.display="none";
                  play.style.display="block";
                };
                m_audio.onpause=function() {
                  pause.style.display="block";
                  play.style.display="none";
                };
                m_audio.onplaying = function() {
                  m_audio.play();
                  // document.body.onclick = function () {
                  //   m_audio.pause();
                  //   end(i);
                  //   last = -1;
                  // };
                  progress.onclick = function (e) {
                    e = e || window.event;
                    e.stopPropagation();
                     e.preventDefault();
                    // progressWrap.clientWidth进度条当前长度,相当于当前坐标点 ,e.offsetX目标坐标点
                    // var tarT = e.offsetX/pw*m_audio.duration;
                    // m_audio.currentTime = Math.floor(tarT);
                  }
                };
                m_audio.addEventListener("ended",function () {
                  progress.style.display = "none";
                  this.currentTime = 0;
                  progressWrap.style.width = 0;
                });
                m_audio.addEventListener('timeupdate',autoUpdate);
                function autoUpdate() {
                  if(m_audio.currentTime>=1){
                    loadingPic.style.display = 'none';
                    var curT = time(m_audio.currentTime);
                    curTime.innerText = curT; // 时间变化
                  }else {
                    curTime.innerText = '0"';
                  }
                  if(curT){  // 进度条变化
                    var w = (m_audio.currentTime/Math.floor(m_audio.duration))*pw;
                    progressWrap.style.width = w+'px';
                  }
                }
                function start() {
                  if(parseFloat(m_audio.getAttribute("data-duration"))>5){ // 语音时长超过5s显示进度条，并可拖动
                    loadingPic.style.display = 'block';
                    progress.style.display = 'block';
                    curTime.innerText = time(m_audio.currentTime);
                    drag(progressWrap,progress,pw);
                  }
                }
                function end(index) {
                  document.querySelectorAll('.progress')[index].style.display = 'none';
                  document.querySelectorAll('audio')[index].currentTime = 0;
                  document.querySelectorAll('.progress-wrap')[index].style.width = 0;
                }
                // 拖动进度条
                function drag(obj,mTarget,maxw) {
                  // 移动端拖拽
                  var dx, dw;
                  mTarget.addEventListener("touchstart",function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if( e.targetTouches.length === 1 ){
                      var touch = e.targetTouches[0];
                      //把元素放在手指所在的位置
                      dx = touch.pageX;
                      dw = obj.clientWidth;
                    }
                  });
                  mTarget.addEventListener("touchmove",function (e) {
                    e = e || window.event;
                    e.preventDefault();
                    if( e.targetTouches.length === 1){
                        try {
                          var touch = e.targetTouches[0];
                          var _x = touch.pageX - dx;
                          dw += _x;
                          dw = Math.max(0,dw);
                          dw = Math.min(dw,maxw);
                          obj.style.width = dw+'px';
                          m_audio.currentTime = (dw/maxw)*Math.floor(m_audio.duration);
                        }catch (e){}
                        dx = touch.pageX;
                      }
                  });
                }
                function time( changeTime ){ // 把3213.45432 转换成 00'00"
                  changeTime = parseFloat( changeTime );
                  var m,s;
                  if(changeTime>60){
                    m = Math.floor( changeTime%3600/60 ); //分
                    s = Math.floor( changeTime%60 ); // 秒
                    return m+'\\''+s+'\\"';
                  }else{
                    s = Math.floor(changeTime);
                    return s+'\\"';
                  }
                }
              }
          }
        })();`
};
export function audioStyle() {
	return '/* 音频模板部分 start*/'
        +'.voice-template button{ display:block; border:none; outline:none; background-color:transparent;}'
        +'.voice-template{ margin:10px; position: relative; width: 200px; height: 40px; border-radius: 50px; background-color:#dbebff; border: 1px solid #afbfd2; display: flex; justify-content: space-between; align-items: center; box-sizing: border-box;}'
        +'.aplay-animation-box{position: absolute; display: block !important; top:4px; left: 5.5px; width: 30px; height: 30px; background-color: #405bd3; border-radius: 50%; vertical-align: middle; cursor: pointer;  overflow: hidden;  -webkit-tap-highlight-color: transparent; }'
        +'.duration { position: absolute; display: block !important; top: 8px; right: 7.5px; font-family: "PingFang-SC"; font-size: 16px; font-weight: 600; text-align: center; color: #333333; z-index:99; }'
        +'.rectangle-4 { display: none; position: absolute; top: 10.7px; left: 10.2px; width: 3.2px; height: 8.55px; border-radius: 1.8px; background-color: #ffffff; background-color: #ffffff; z-index:999; }'
        +'.rectangle-4:after { position: absolute; left: 6.4px; display: block; content: ""; width: 3.2px; height: 8.55px; border-radius: 1.8px; background-color: #ffffff; } '
        +'.triangle-2 { position: absolute; top: 30%; left: 20%; width: 0; height: 0; transform: rotate(135deg); border-width: 6px; border-color: #fff transparent transparent #fff; border-style: solid; border-radius: 3px; z-index:999; } '
        +'.progress { display: none; position: absolute; top: 50%; left: 41px; margin-top: -1.5px; height: 3px; width: 112px; border-radius: 5px; background-color: #e0e0e0; margin-top: -10.5px; cursor: pointer; box-sizing: content-box; border-top: 10px solid #dbebff; border-bottom: 10px solid #dbebff; }'
        +'.current-time { position: absolute; top: -17px; left: -0.5px; font-size: 6px; font-style: normal; }'
        +' #drag-bar { position: absolute; top: -4px; right: -3px; height: 12px; width: 3px; background-color: #405bd3; border-radius: 30%; cursor: pointer; }'
        +' .progress-wrap { position: absolute; top: 0; left: 0; width: 0; height: 100%; background-color: #405bd3; border-radius: 5px; }'
        +' .loading{ position: absolute; display: none; top: -10px; right: 7px; width: 30px; height: 30px; transform: scale(.5,.5); background: url("//ht-blog.oss-cn-hongkong.aliyuncs.com/im/static/img/loading.svg") center/cover no-repeat; animation: load 1s infinite linear; }'
        +' @keyframes load{ from { transform: scale(.5,.5) rotate(0); } to{ transform: scale(.5,.5) rotate(360deg); } }'
        +'/* 音频模板部分 end */';

}
