var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

const host = 'http://qtest.hellotalk.org/htmall_jordanlu/fastadmin/public/index.php';

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HEAD_HOST: 'http://ht-head.oss-cn-shenzhen.aliyuncs.com/',  // 原host:http://cn-head-cdn.nihaotalk.com/
  QR_TOKEN_URL: host+'/lesson/teacher/token',
  CHECK_SERVER_LOGIN: host+'/lesson/teacher/login'
})
