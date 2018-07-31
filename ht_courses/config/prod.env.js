const host = 'http://station3.hellotalk.org/htmall/fastadmin/public/index.php';

module.exports = {
  NODE_ENV: '"production"',
  HEAD_HOST: 'http://ht-head.oss-cn-shenzhen.aliyuncs.com/',  // 原host:http://cn-head-cdn.nihaotalk.com/
  QR_TOKEN_URL: host+'/lesson/teacher/token',
  CHECK_SERVER_LOGIN: host+'/lesson/teacher/login'
}
