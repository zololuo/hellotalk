// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(4)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/mac/Documents/BLHT/emoji_store/src/page/home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a6f464fa"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "webWrapper": {
    "height": 100
  },
  "home": {
    "flexDirection": "column"
  },
  "content": {
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "progress": {
    "marginTop": "50"
  },
  "emojiList": {
    "marginTop": "50"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(3);

var util = _interopRequireWildcard(_util);

var _progress = __webpack_require__(5);

var _progress2 = _interopRequireDefault(_progress);

var _emojiList = __webpack_require__(9);

var _emojiList2 = _interopRequireDefault(_emojiList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    created: function created() {},
    components: { progress: _progress2.default, emojiList: _emojiList2.default },
    data: {},
    methods: {},
    computed: {
        isWeb: function isWeb() {
            return weex.config.env.platform === 'Web';
        },
        fullWidth: function fullWidth() {
            //百分比宽度
            return this.isWeb ? '100%' : weex.config.viewport + 'px';
        }
    }

}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var meta = weex.requireModule('meta');
var dom = weex.requireModule('dom');

//加载图标字体文件
dom.addRule('fontFace', {
  'fontFamily': 'iconfont',
  'src': "url('https://at.alicdn.com/t/font_678541_wzrjxwrw1h8h0k9.ttf')"
});
meta.setViewport({ width: weex.config.viewport || 750 });
//

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["home"],
    class: [_vm.isWeb ? 'webWrapper' : ''],
    style: {
      width: _vm.fullWidth
    }
  }, [_c('div', {
    staticClass: ["content"]
  }, [_c('progress', {
    staticClass: ["progress"]
  })], 1), _c('emojiList', {
    staticClass: ["emojiList"]
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/mac/Documents/BLHT/emoji_store/src/components/progress/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6b7136ad"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "progressWrapper": {
    "flexDirection": "row",
    "height": "50",
    "borderRadius": "100",
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#405bd3",
    "overflow": "hidden"
  },
  "progress": {
    "height": "50"
  },
  "text": {
    "position": "absolute",
    "left": 0,
    "width": "100"
  },
  "download-text": {
    "textAlign": "center",
    "lineHeight": "50",
    "fontSize": "14",
    "color": "#000000"
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(3);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    name: 'progress',
    created: function created() {},
    data: function data() {
        return {
            downloaded: false,
            percent: null,
            timer: null
        };
    },

    methods: {
        downloadEvent: function downloadEvent() {
            if (this.timer !== null) return false;
            this.percent = 0;
            this.timer = setInterval(function () {
                if (this.percent == 100) {
                    clearInterval(this.timer);
                    this.downloaded = true;
                    return false;
                }
                this.percent += 10;
            }.bind(this), 1000);
        }
    },
    computed: {
        isWeb: function isWeb() {
            return weex.config.env.platform === 'Web';
        },
        getProgressWrapperWidth: function getProgressWrapperWidth() {
            return this.isWeb ? '100%' : weex.config.viewport - 60 + 'px';
        },
        getProgressWidth: function getProgressWidth() {
            if (this.percent == null) return 0;
            var width = this.isWeb ? this.$refs.progressWrapper.getBoundingClientRect().width : weex.config.viewport - 60;
            return this.percent / 100 * width + 'px';
        }
    }

}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    ref: "progressWrapper",
    staticClass: ["progressWrapper"],
    style: {
      borderWidth: _vm.downloaded ? '0' : '1px'
    },
    on: {
      "click": _vm.downloadEvent
    }
  }, [_c('div', {
    staticClass: ["progress"],
    style: {
      width: _vm.getProgressWidth,
      backgroundColor: _vm.downloaded ? '#dddddd' : '#405bd3'
    }
  }), _c('div', {
    staticClass: ["text"],
    style: {
      width: _vm.getProgressWrapperWidth
    }
  }, [_c('text', {
    staticClass: ["download-text"]
  }, [_vm._v(_vm._s(_vm.percent == null ? '下载' : (_vm.downloaded ? '已下载' : _vm.percent + '%')))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(12)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/mac/Documents/BLHT/emoji_store/src/components/emojiList/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-12d7d71a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "pics": {
    "width": "60",
    "height": "60",
    "borderRadius": "30",
    "marginLeft": "20"
  },
  "emoji": {
    "width": "60",
    "height": "60",
    "borderRadius": "30"
  },
  "list": {
    "height": "360",
    "flexDirection": "column"
  },
  "delete": {
    "height": "60",
    "width": "60",
    "backgroundColor": "#FF0000"
  },
  "wrapper": {
    "flexDirection": "row"
  },
  "scroller": {
    "width": "375",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "height": "60",
    "marginBottom": "10"
  },
  "emoji-info": {
    "width": "230",
    "marginLeft": "20",
    "textAlign": "center",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dddddd"
  },
  "emoji-title": {
    "height": "60",
    "lineHeight": "60"
  },
  "icon": {
    "fontFamily": "iconfont",
    "fontSize": "24"
  },
  "icon-drag": {
    "width": "30",
    "height": "60",
    "lineHeight": "60",
    "marginRight": "15",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dddddd"
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
    data: function data() {
        return {
            emojiList: [{
                title: 'HelloTalk手宝宝', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png'
            }, {
                title: 'HelloTalk手宝宝', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png'
            }, {
                title: 'HelloTalk手宝宝', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png'
            }, {
                title: 'HelloTalk手宝宝', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png'
            }, {
                title: 'HelloTalk手宝宝', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png'
            }, {
                title: 'HelloTalk手宝宝', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png'
            }, {
                title: 'HelloTalk手宝宝', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png'
            }, {
                title: 'HelloTalk手宝宝', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png'
            }]
        };
    },

    methods: {}
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"]
  }, _vm._l((_vm.emojiList), function(item, index) {
    return _c('cell', {
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('scroller', {
      staticClass: ["scroller"],
      attrs: {
        "scrollDirection": "horizontal"
      }
    }, [_c('div', {
      staticClass: ["wrapper"]
    }, [_c('div', {
      staticClass: ["pics"]
    }, [_c('image', {
      staticClass: ["emoji"],
      attrs: {
        "src": item.imgUrl
      }
    })]), _c('div', {
      staticClass: ["emoji-info"]
    }, [_c('text', {
      staticClass: ["emoji-title"]
    }, [_vm._v(_vm._s(item.title + index))])]), _c('text', {
      staticClass: ["icon-drag", "icon"]
    }, [_vm._v("")]), _c('div', {
      staticClass: ["delete"]
    })])])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);