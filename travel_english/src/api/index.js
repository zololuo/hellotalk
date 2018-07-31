import { translate } from '@/util';
var apiPath = {
    courselist: '/lesson/minicourse/courselist',
    mycourse: '/lesson/minicourse/mycourse',
    price: '/lesson/minicourse/price',
    createorder: '/goopenlanguage/v1/createorder',             // 
  }
let lastAlertTime = 0;
var modal = weex.requireModule('modal');
var app_version = WXEnvironment.appVersion.replace(/\./g,'');
    function getWnsConfig() {
      return new Promise((resolve, reject) => {
        if (WXEnvironment.platform==='Web') {
          resolve({url:"https://qtest.hellotalk.org"});
          return;
        }
        // 兼容iOS低版本获取lesson配置信息 无回调
        if(Number(app_version)<267&&/ios/gi.test(WXEnvironment.osName)) { 
            weex.requireModule('weexUtility').wnsConfig({
                key: 'user'
              },res=>{
                res = JSON.parse(res);
                if (res&&res.url&&res.cmd) {
                  if(res.url=='https://qtest.hellotalk.org'){
                    resolve(res);
                  }else{
                    resolve({url:'https://lesson.hellotalk8.com'});  // 正式环境固定
                  }
                }else{//从客户端读取维纳斯配置出错了,写入错误日志
                  weex.requireModule('logUtils').log({
                    tag: 'wns config error',
                    message: '维纳斯配置出错',
                    level: 3
                  },()=>{})
                  reject(res);
                }
            });
            return;
        }
        weex.requireModule('weexUtility').wnsConfig({
          key: 'lesson'
        },res=>{
            if(res){
              res = JSON.parse(res);
              if (res&&res.url&&res.cmd) {
                resolve(res);
              }else{//从客户端读取维纳斯配置出错了,写入错误日志
                weex.requireModule('logUtils').log({
                  tag: 'wns config error',
                  message: '维纳斯配置出错',
                  level: 3
                },()=>{})
              }
            }else{
                // 请求user通道,正式环境取默认值
                weex.requireModule('weexUtility').wnsConfig({
                  key: 'user'
                },res=>{
                  res = JSON.parse(res);
                  if (res&&res.url&&res.cmd) {
                    if(/qtest\.hellotalk\.org/gi.test(res.url)){
                      resolve(res);
                    }else{
                      resolve({url:'https://lesson.hellotalk8.com'});  // 正式环境固定
                    }
                  }else{//从客户端读取维纳斯配置出错了,写入错误日志
                    weex.requireModule('logUtils').log({
                      tag: 'wns config error',
                      message: '维纳斯配置出错',
                      level: 3
                    },()=>{})
                    reject(res);
                  }
                });
              return;
            }   
        })  
      });
    }
    export function getUserInfo() {
      return new Promise((resolve, reject) => {
        if (WXEnvironment.platform==='Web') {
          resolve({userid:5547704});
          return;
        }
        weex.requireModule('weexUtility').userInfo(res=>{
          res = JSON.parse(res);
          if (res&&res.userid) {
            resolve(res);
          }else{//从客户端读取当前用户信息出错了,写入错误日志
            weex.requireModule('logUtils').log({
              tag: 'FAIL_INFORMATION',
              message: '获取用户信息出错',
              level: 3
            },()=>{})
            reject();
          }
        })
      });
    }
    export function getHpUserInfo() {
      return new Promise((resolve, reject) => {
        if (WXEnvironment.platform==='Web') {
          resolve({
            hpUserId:15040,
            hpUserName: 'mini course',
            hpUserHeadurl: '222/HelloTalk_Open_English.png'
          });
          return;
        }
        weex.requireModule('valueModule').getCacheValue({
          key: 'miniCourseHpUserinfo'
        },res=>{
          if (res) {
            resolve(res);      
          }else{
            weex.requireModule('logUtils').log({
              tag: 'FAIL_hpUserInfo',
              message: '获取公众号info失败',
              level: 3
            },()=>{})
            reject();
          }
        })
      });
    }
    let repeat_times = 3;
    export function $get(name, data) {
      if (!data) {
        var data = {};
      }
      return new Promise((resolve, reject) => {
        if (!apiPath[name]||repeat_times<1) {
          reject();
          return;
        }
        let path = apiPath[name];
        // 请求前的准备
        getWnsConfig().then(wns=>{
          getUserInfo().then(userinfo=>{
            getHpUserInfo().then(hpUserinfo=>{
              // 请求的默认参数
              data['userid']   = userinfo.userid;
              data['hp_userid']  = hpUserinfo.hpUserId;
            //   data['appinfo']   = JSON.stringify(WXEnvironment);
            var Url = '';
              if(/lesson\.hellotalk8\.com/gi.test(wns.url)){
                Url = wns.url+'/api'+path+'?'+getQueryString(data)
              }else{
                Url = wns.url+'/htmall/fastadmin/public/index.php'+path+'?'+getQueryString(data)
              }
              weex.requireModule('stream').fetch({
                  method: 'GET',
                  url: Url,
                  type:'text'
                }, function(ret) {
                  if(!ret.ok||!ret.data){ // 请求失败
                    if (new Date().getTime() - lastAlertTime >3000) {
                      weex.requireModule('modal').toast({
                          message: translate('NETWORK_FAILS')
                      }, ()=>{})
                      lastAlertTime = new Date().getTime();
                    }
                  }else{
                    try{
                      let res = JSON.parse(ret.data);
                      if (res&&res.status===0) {
                        resolve(res);
                      }else {
                        reject(res);
                      }
                    }catch(e){
                      weex.requireModule('logUtils').log({
                        tag: 'json parse error',
                        message: `解析网络请求的json出错${e}`,
                        level: 3
                      },()=>{})
                    }
                    
                  }
              });  
            })
          })
        })
      });
    }
  
    export function fetch(name, data) {
        if (!data) {
            var data = {};
        }
        return new Promise((resolve, reject) => {
        if (!apiPath[name]) {
            reject();
            return;
        }
        let path = apiPath[name];
        // 请求前的准备
        getWnsConfig().then(wns=>{
            getUserInfo().then(userinfo=>{
            getHpUserInfo().then(hpUserinfo=>{
                // 请求的默认参数
                data['userid']   = userinfo.userid;
                data['hp_userid']  = hpUserinfo.hpUserId;
                data['appinfo']   = JSON.stringify(WXEnvironment);
                let headers = {
                    'Content-Type':'application/x-www-form-urlencoded',
                    'X-WNS-CMD': wns.cmd
                }
                if (WXEnvironment.platform==='Web') {
                    delete headers['X-WNS-CMD'];
                }
                weex.requireModule('stream').fetch({
                    method: 'POST',
                    headers,
                    url: wns.url+path,
                    type:'text',
                    body: getQueryString(data)
                }, function(ret) {
                    
                    if(!ret.ok||!ret.data){ // 请求失败
                     console.log(ret);
                    }else{
                    try{
                        let res = JSON.parse(ret.data);
                        if (res&&res.status===0) {
                        resolve(res);
                        }else {
                        reject(res);
                        }
                    }catch(e){
                        weex.requireModule('logUtils').log({
                        tag: 'json parse error',
                        message: `解析网络请求的json出错${e}`,
                        level: 3
                        },()=>{})
                    }
                    
                    }
                });  
            })
            })
        })
        });
    }
    
    export function setCache(key,value) {
      getUserInfo().then(userinfo=>{
        getHpUserInfo().then(hpUserinfo=>{
          if (userinfo.userid&&hpUserinfo.hpUserId) {
            weex.requireModule('storage').setItem(`${key}_${userinfo.userid}${hpUserinfo.hpUserId}`,value,e=>{})
          }
        })
      });
    }
    
    export function readCache(key) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(userinfo=>{
          getHpUserInfo().then(hpUserinfo=>{
            if (userinfo.userid&&hpUserinfo.hpUserId) {
              weex.requireModule('storage').getItem(`${key}_${userinfo.userid}${hpUserinfo.hpUserId}`,e=>{
                if (e.data) {
                  resolve(e.data);   
                }
              })
            }
          })
        });   
      });
    }
    
    function getQueryString(obj) {
      var str = '';
      if (!obj||Object.keys(obj).length===0) {
        return str;
      }
      for(var key in obj) {
        str += (key+'='+obj[key]+'&');
      }
      return str.substr(0,str.length-1);
    }
    export function startIap(data) {
      getHpUserInfo().then(hpUserinfo=>{
        weex.requireModule('payUtils').startIap(Object.assign(data,{
          hpUserId: hpUserinfo.hpUserId   
        }),()=>{})
      });
    }
    
    export function startPayment(data) {
      getHpUserInfo().then(hpUserinfo=>{
        weex.requireModule('payUtils').startPayment(Object.assign(data,{
          hpUserId: hpUserinfo.hpUserId
        }),()=>{})
      });
    }

    export function startBraintreePay(data) {
      getHpUserInfo().then(hpUserinfo=>{
          Object.assign(data,{
              hp_userid: hpUserinfo.hpUserId   
          })
        weex.requireModule('payUtils').startBraintreePay(data,()=>{})
      });
    }