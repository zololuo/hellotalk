const meta          = weex.requireModule('meta');
const dom           = weex.requireModule('dom');
const modal        = weex.requireModule('modal');

const navigatorObj  = weex.requireModule('navigator');
//加载图标字体文件
dom.addRule('fontFace', {
  'fontFamily': 'iconfont',
  'src': "url('https://at.alicdn.com/t/font_678541_5789boqu0k1vpldi.ttf')"
})
meta.setViewport({width: weex.config.viewport || 750})
// 
// modal.alert({
// 	message: weex.config.viewport,
// 	duration: 800
// })
// 返回上一级
export function goBackAct() {
  navigatorObj.pop({
    'animated': 'true'
  }, function(event) {
    // console.log(event);
  })
}