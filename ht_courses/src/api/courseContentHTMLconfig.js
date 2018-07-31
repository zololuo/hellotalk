
export function contentConfig(content,obj,title) {
  let audioStyle  = obj.audioStyle||'';
  let audioScript = obj.audioJs||'';
  let countDownJs = obj.countDownJs||'';
  let end_time = obj.endTime|| null;
  let courseTitle = title;
  let courseType = obj.courseType;
	var head = `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
                  <title>${courseTitle}</title>
                  <script src="https://ali-hk-cdn.hellotalk8.com/groupclass/lessonShare/js/sensors_sdk.js"></script>
                  <style>
                      *{margin:0;padding:0;border:none;text-decoration: none;-webkit-tap-highlight-color: transparent;}html,body{width:100%;height:100%;}img{max-width:100%;vertical-align:middle;}audio{width: 100%;}.payLink{z-index: 999;}
                      `+audioStyle+`
                  </style>
              </head>
              <body>
	           `;
	var foot = `
              <script>
               courseType = ${courseType};
              </script>
              <script src="https://ali-hk-cdn.hellotalk8.com/groupclass/lessonShare/js/sensors_data_report.js"></script>
              <script>
              ;(function(){
                  nativeVoice();
                  function nativeVoice() {
                    var voiceGroup = document.querySelectorAll('audio');
                    if(voiceGroup.length<1){return;}
                    for(var i=0,length=voiceGroup.length;i<length;i++){
                      queryAudio(i);
                    }

                    var last = 0;
                    function queryAudio(i) {
                        voiceGroup[i].onplaying = function() {
                          last = i;
                        }
                        voiceGroup[i].onplay = function() {
                            if(i!==last&&!voiceGroup[last].paused){
                              voiceGroup[last].pause();
                            }
                        }
                    }
                    document.addEventListener('visibilitychange',function(){
                        voiceGroup[last].pause();
                    });
                  }
              })();
              // auto scroll head when it too long
              (function() {
                let heads = document.querySelectorAll('.scrollable-head');
                heads.forEach(head => {
                  let step = () => {
                    head.scrollLeft += 1;
                    if (head.scrollLeft < head.scrollWidth - head.clientWidth) {
                      window.requestAnimationFrame(step);
                    } else {
                      window.setTimeout(() => {
                        head.scrollLeft = 0;
                        setTimeout(() => window.requestAnimationFrame(step), 1000);
                      }, 1000);
                    }
                  }
                  setTimeout(() => {
                    window.requestAnimationFrame(step);
                  }, 500);
                })
              })();
              `+audioScript+`</script>
              <script>var endTime = `+end_time+`;`+countDownJs+`</script>
              <script>
              
              </script>
              </body>
              </html>`;

	return head+content+foot;
}
