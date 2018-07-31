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
  "progressWrapper": {
    "flexDirection": "row",
    "marginTop": "200",
    "height": "50",
    "borderRadius": "100",
    "backgroundColor": "#405bd3",
    "border": "1px solid #405bd3",
    "overflow": "hidden",
    "justifyContent": "flex-end"
  },
  "progress": {
    "textAlign": "center",
    "height": "50"
  },
  "download-text": {
    "textAlign": "center",
    "lineHeight": "50",
    "fontSize": "14",
    "color": "#ffffff"
  },
  "text": {
    "position": "absolute",
    "left": 0,
    "textAlign": "center"
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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    created: function created() {},
    data: {
        downloaded: false,
        percent: null
    },
    methods: {
        downloadEvent: function downloadEvent() {
            this.percent = 0;
            var timer = setInterval(function () {
                if (this.percent == 100) {
                    clearInterval(timer);
                    this.downloaded = true;
                    return false;
                }
                this.percent++;
            }.bind(this), 1000);
        }
    },
    computed: {
        isWeb: function isWeb() {
            return weex.config.env.platform === 'Web';
        },
        fullWidth: function fullWidth() {
            //百分比宽度
            if (weex.config.env.platform === 'Web') {
                //web平台
                return '100%';
            } else {
                return weex.config.viewport + 'px';
            }
        },
        progressWidth: function progressWidth() {
            if (this.percent == null) return 0;
            return this.$refs.progressWrapper.getBoundingClientRect().width * (this.percent / 100) + 'px';
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

meta.setViewport({ width: weex.config.viewport || 750 });

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
  }, [_c('div', {
    ref: "progressWrapper",
    staticClass: ["progressWrapper"],
    on: {
      "click": _vm.downloadEvent
    }
  }, [_c('div', {
    staticClass: ["progress"],
    style: {
      width: _vm.progressWidth,
      backgroundColor: _vm.downloaded ? '#dddddd' : '#ffffff'
    }
  }), _c('div', {
    staticClass: ["text"],
    style: {
      width: _vm.fullWidth
    }
  }, [_c('text', {
    staticClass: ["download-text"]
  }, [_vm._v(_vm._s(_vm.percent == null || _vm.percent == 100 ? (_vm.downloaded ? '已下载' : '下载') : _vm.percent + '%'))])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);