var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  QR_TOKEN_URL:'https://qtest.hellotalk.org/api/wbfile/qrToken'
})
