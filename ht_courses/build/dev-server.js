require('./check-versions')()
var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
var fs = require('fs');
var http = require('http');
var https = require('https');

var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')
console.log(' process.env.NODE_ENV='+ process.env.NODE_ENV)
// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
var autoOpenBrowser = !!config.dev.autoOpenBrowser;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({action: 'reload'});
        cb()
    })
});

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))


// var httpServer = http.createServer(app);
// var httpsServer = https.createServer({
//     key: fs.readFileSync('./config/imdev.hellotalk.org.key', 'utf8'),
//     cert: fs.readFileSync('./config/fullchain.cer', 'utf8')
// }, app);

// var SSLPORT=443
// httpServer.listen(port, function() {
//     console.log('HTTP Server is running on: http://localhost:%s', port);
// });

// httpsServer.listen(SSLPORT, function(err) {
//     console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
//     if (err) {
//       console.log(err)
//       return
//     }
//     var uri = 'https://imdev.hellotalk.org:' + SSLPORT
//     console.log('Listening at ' + uri + '\n')

//     // when env is testing, don't need open it
//     if (process.env.NODE_ENV !== 'testing') {
//       opn(uri)
//     }
// });

var uri = 'http://localhost:' + port
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  // var uri = 'https://imdev.hellotalk.org:' + port
  // console.log('Listening at ' + uri + '\n')

  // when env is testing, don't need open it
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})

