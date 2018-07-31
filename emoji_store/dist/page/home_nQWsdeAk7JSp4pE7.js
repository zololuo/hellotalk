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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
var isWeb = exports.isWeb = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
var isNode = exports.isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
var isWeex = exports.isWeex = typeof callNative === 'function' || (typeof WXEnvironment === 'undefined' ? 'undefined' : _typeof(WXEnvironment)) === 'object' && WXEnvironment.platform !== 'Web';
var isReactNative = exports.isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
exports['default'] = module.exports;
exports.default = module.exports;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function (fn) {
  if (( false ? "undefined" : _typeof2(exports)) === "object" && typeof module !== "undefined") {
    module.exports = fn();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
      module.exports = fn();
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    var root;
    if (typeof window !== "undefined") {
      root = window;
    } else if (typeof self !== "undefined") {
      root = self;
    } else if (typeof global !== "undefined") {
      root = global;
    } else {
      // NOTICE: In JavaScript strict mode, this is null
      root = this;
    }
    root["index"] = fn();
  }
})(function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /**
       Copyright 2018 Alibaba Group
      
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
      
       http://www.apache.org/licenses/LICENSE-2.0
      
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License.
       */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      };

      var _universalEnv = __webpack_require__(1);

      var _bindingxParser = __webpack_require__(3);

      function requireModule(moduleName) {
        try {
          if ((typeof weex === 'undefined' ? 'undefined' : _typeof(weex)) !== undefined && weex.requireModule) {
            // eslint-disable-line
            return weex.requireModule(moduleName); // eslint-disable-line
          }
        } catch (err) {}
        return window.require('@weex-module/' + moduleName);
      };

      var isSupportNewBinding = true;
      var isSupportBinding = true;
      var WeexBinding = void 0;
      var WebBinding = {};
      if (_universalEnv.isWeb) {
        WebBinding = __webpack_require__(4);
      } else {
        try {
          WeexBinding = requireModule('bindingx');
          isSupportNewBinding = true;
        } catch (e) {
          isSupportNewBinding = false;
        }
        if (!WeexBinding || !WeexBinding.bind) {
          try {
            WeexBinding = requireModule('binding');
            isSupportNewBinding = true;
          } catch (e) {
            isSupportNewBinding = false;
          }
        }
        isSupportNewBinding = !!(WeexBinding && WeexBinding.bind && WeexBinding.unbind);
        if (!isSupportNewBinding) {
          try {
            WeexBinding = requireModule('expressionBinding');
            isSupportBinding = true;
          } catch (err) {
            isSupportBinding = false;
          }
        }
        isSupportBinding = !!(WeexBinding && (WeexBinding.bind || WeexBinding.createBinding));
      }

      function formatExpression(expression) {
        if (expression === undefined) return;
        try {
          expression = JSON.parse(expression);
        } catch (err) {}
        var resultExpression = {};
        if (typeof expression === 'string') {
          resultExpression.origin = expression;
        } else if (expression) {
          resultExpression.origin = expression.origin;
          resultExpression.transformed = expression.transformed;
        }
        if (!resultExpression.transformed && !resultExpression.origin) return;
        resultExpression.transformed = resultExpression.transformed || (0, _bindingxParser.parse)(resultExpression.origin);
        return resultExpression;
      }

      // 统一回调参数
      function fixCallback(callback) {
        return function () {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (typeof callback === 'function') {
            return callback({
              state: params.state === 'end' ? 'exit' : params.state,
              t: params.t !== undefined ? params.t : params.deltaT
            });
          }
        };
      }

      exports.default = {
        // 是否支持新版本的binding
        isSupportNewBinding: isSupportNewBinding,
        // 是否支持binding
        isSupportBinding: isSupportBinding,
        _bindingInstances: [],
        /**
         * 绑定
         * @param options 参数
         * @example
         {
           anchor:blockRef,
           eventType:'pan',
           props: [
           {
             element:blockRef,
             property:'transform.translateX',
             expression:{
               origin:"x+1",
               transformed:"{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":1}]}"
             }
           }
          ]
         }
         */
        bind: function bind(options) {
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

          if (!options) {
            throw new Error('should pass options for binding');
          }

          options.exitExpression = formatExpression(options.exitExpression);

          if (options.props) {
            options.props.forEach(function (prop) {
              prop.expression = formatExpression(prop.expression);
            });
          }

          if (_universalEnv.isWeex) {
            if (WeexBinding && isSupportBinding) {
              if (isSupportNewBinding) {
                return WeexBinding.bind(options, options && options.eventType === 'timing' ? fixCallback(callback) : callback);
              } else {
                WeexBinding.enableBinding(options.anchor, options.eventType);
                // 处理expression的参数格式
                var expressionArgs = options.props.map(function (prop) {
                  return {
                    element: prop.element,
                    property: prop.property,
                    expression: prop.expression.transformed
                  };
                });
                WeexBinding.createBinding(options.anchor, options.eventType, '', expressionArgs, callback);
              }
            }
          } else {
            return WebBinding.bind(options, callback);
          }
        },

        /**
         *  @param {object} options
         *  @example
         *  {eventType:'pan',
         *   token:self.gesToken}
         */
        unbind: function unbind(options) {
          if (!options) {
            throw new Error('should pass options for binding');
          }
          if (_universalEnv.isWeex) {
            if (WeexBinding && isSupportBinding) {
              if (isSupportNewBinding) {
                return WeexBinding.unbind(options);
              } else {
                return WeexBinding.disableBinding(options.anchor, options.eventType);
              }
            }
          } else {
            return WebBinding.unbind(options);
          }
        },
        unbindAll: function unbindAll() {
          if (_universalEnv.isWeex) {
            if (WeexBinding && isSupportBinding) {
              if (isSupportNewBinding) {
                return WeexBinding.unbindAll();
              } else {
                return WeexBinding.disableAll();
              }
            }
          } else {
            return WebBinding.unbindAll();
          }
        },
        prepare: function prepare(options) {
          if (_universalEnv.isWeex) {
            if (WeexBinding && isSupportBinding) {
              if (isSupportNewBinding) {
                return WeexBinding.prepare(options);
              } else {
                return WeexBinding.enableBinding(options.anchor, options.eventType);
              }
            }
          }
        },
        getComputedStyle: function getComputedStyle(el) {
          if (_universalEnv.isWeex) {
            if (isSupportNewBinding) {
              return WeexBinding.getComputedStyle(el);
            } else {
              return {};
            }
          } else {
            return WebBinding.getComputedStyle(el);
          }
        }
      };
      module.exports = exports['default'];

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (process) {

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
          return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
        };

        // https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
        var isWeb = exports.isWeb = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
        var isNode = exports.isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
        var isWeex = exports.isWeex = typeof callNative === 'function' || (typeof WXEnvironment === 'undefined' ? 'undefined' : _typeof(WXEnvironment)) === 'object' && WXEnvironment.platform !== 'Web';
        var isReactNative = exports.isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
        exports['default'] = module.exports;
        exports.default = module.exports;
        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(2));

      /***/
    },
    /* 2 */
    /***/function (module, exports) {

      // shim for using process in browser
      var process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      (function webpackUniversalModuleDefinition(root, factory) {
        if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else {
          var a = factory();
          for (var i in a) {
            ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
          }
        }
      })(typeof self !== 'undefined' ? self : this, function () {
        return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
              /******/
              /******/ // Check if module is in cache
              /******/if (installedModules[moduleId]) {
                /******/return installedModules[moduleId].exports;
                /******/
              }
              /******/ // Create a new module (and put it into the cache)
              /******/var module = installedModules[moduleId] = {
                /******/i: moduleId,
                /******/l: false,
                /******/exports: {}
                /******/ };
              /******/
              /******/ // Execute the module function
              /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
              /******/
              /******/ // Flag the module as loaded
              /******/module.l = true;
              /******/
              /******/ // Return the exports of the module
              /******/return module.exports;
              /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
              /******/if (!__webpack_require__.o(exports, name)) {
                /******/Object.defineProperty(exports, name, {
                  /******/configurable: false,
                  /******/enumerable: true,
                  /******/get: getter
                  /******/ });
                /******/
              }
              /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
              /******/var getter = module && module.__esModule ?
              /******/function getDefault() {
                return module['default'];
              } :
              /******/function getModuleExports() {
                return module;
              };
              /******/__webpack_require__.d(getter, 'a', getter);
              /******/return getter;
              /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 0);
            /******/
          }(
          /************************************************************************/
          /******/[
          /* 0 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
              return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            } : function (obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };

            var lex = {
              InputElementDiv: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
              InputElementRegExp: '<WhiteSpace>|<LineTerminator>|<ReservedWord>|<Identifier>|<NumericLiteral>|<Punctuator>|<StringLiteral>',
              ReservedWord: '<Keyword>|<NullLiteral>|<BooleanLiteral>',
              WhiteSpace: /[\t\v\f\u0020\u00A0\u1680\u180E\u2000-\u200A\u202F\u205f\u3000\uFEFF]/,
              LineTerminator: /[\n\r\u2028\u2029]/,
              Keyword: /new(?![_$a-zA-Z0-9])|void(?![_$a-zA-Z0-9])|delete(?![_$a-zA-Z0-9])|in(?![_$a-zA-Z0-9])|instanceof(?![_$a-zA-Z0-9])|typeof(?![_$a-zA-Z0-9])/,
              NullLiteral: /null(?![_$a-zA-Z0-9])/,
              BooleanLiteral: /(?:true|false)(?![_$a-zA-Z0-9])/,
              Identifier: /[_$a-zA-Z][_$a-zA-Z0-9]*/,
              Punctuator: /\/|=>|\*\*|>>>=|>>=|<<=|===|!==|>>>|<<|%=|\*=|-=|\+=|<=|>=|==|!=|\^=|\|=|\|\||&&|&=|>>|\+\+|--|\:|}|\*|&|\||\^|!|~|-|\+|\?|%|=|>|<|,|;|\.(?![0-9])|\]|\[|\)|\(|{/,
              DivPunctuator: /\/=|\//,
              NumericLiteral: /(?:0[xX][0-9a-fA-F]*|\.[0-9]+|(?:[1-9]+[0-9]*|0)(?:\.[0-9]*|\.)?)(?:[eE][+-]{0,1}[0-9]+)?(?![_$a-zA-Z0-9])/,
              StringLiteral: /"(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"|'(?:[^'\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'/,
              RegularExpressionLiteral: /\/(?:\[(?:\\[\s\S]|[^\]])*\]|[^*\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])(?:\[(?:\\[\s\S]|[^\]])*\]|[^\/\\\n\r\u2028\u2029]|\\[^\n\r\u2028\u2029])*\/[0-9a-zA-Z]*/
            };

            function XRegExp(xregexps, rootname, flag) {
              var expnames = [rootname];

              function buildRegExp(source) {
                var regexp = new RegExp();
                regexp.compile(source.replace(/<([^>]+)>/g, function (all, expname) {
                  if (!xregexps[expname]) return '';
                  expnames.push(expname);
                  if (xregexps[expname] instanceof RegExp) return '(' + xregexps[expname].source + ')';
                  return '(' + buildRegExp(xregexps[expname]).source + ')';
                }), flag);
                return regexp;
              }

              var regexp = buildRegExp(xregexps[rootname]);
              this.exec = function (string) {
                var matches = regexp.exec(string);
                if (matches == null) return null;
                var result = new String(matches[0]);
                for (var i = 0; i < expnames.length; i++) {
                  if (matches[i]) result[expnames[i]] = matches[i];
                }return result;
              };
              Object.defineProperty(this, 'lastIndex', {
                'get': function get() {
                  return regexp.lastIndex;
                },
                'set': function set(v) {
                  regexp.lastIndex = v;
                }
              });
            }

            function LexicalParser() {
              var inputElementDiv = new XRegExp(lex, 'InputElementDiv', 'g');
              var inputElementRegExp = new XRegExp(lex, 'InputElementRegExp', 'g');
              var source;
              Object.defineProperty(this, 'source', {
                'get': function get() {
                  return source;
                },
                'set': function set(v) {
                  source = v;
                  inputElementDiv.lastIndex = 0;
                  inputElementRegExp.lastIndex = 0;
                }
              });
              this.reset = function () {
                inputElementDiv.lastIndex = 0;
                inputElementRegExp.lastIndex = 0;
              };
              this.getNextToken = function (useDiv) {
                var lastIndex = inputElementDiv.lastIndex;
                var inputElement;
                if (useDiv) inputElement = inputElementDiv;else inputElement = inputElementRegExp;
                var token = inputElement.exec(source);
                if (token && inputElement.lastIndex - lastIndex > token.length) {
                  throw new SyntaxError('Unexpected token ILLEGAL');
                }
                inputElementDiv.lastIndex = inputElement.lastIndex;
                inputElementRegExp.lastIndex = inputElement.lastIndex;
                return token;
              };
            }

            var rules = {
              'IdentifierName': [['Identifier']],
              'Literal': [['NullLiteral'], ['BooleanLiteral'], ['NumericLiteral'], ['StringLiteral'], ['RegularExpressionLiteral']],
              'PrimaryExpression': [['Identifier'], ['Literal'], ['(', 'Expression', ')']],
              'CallExpression': [['PrimaryExpression', 'Arguments'], ['CallExpression', 'Arguments']],
              'Arguments': [['(', ')'], ['(', 'ArgumentList', ')']],
              'ArgumentList': [['ConditionalExpression'], ['ArgumentList', ',', 'ConditionalExpression']],
              'LeftHandSideExpression': [['PrimaryExpression'], ['CallExpression']],
              'UnaryExpression': [['LeftHandSideExpression'], ['void', 'UnaryExpression'], ['+', 'UnaryExpression'], ['-', 'UnaryExpression'], ['~', 'UnaryExpression'], ['!', 'UnaryExpression']],
              'ExponentiationExpression': [['UnaryExpression'], ['ExponentiationExpression', '**', 'UnaryExpression']],
              'MultiplicativeExpression': [['MultiplicativeExpression', '/', 'ExponentiationExpression'], ['ExponentiationExpression'], ['MultiplicativeExpression', '*', 'ExponentiationExpression'], ['MultiplicativeExpression', '%', 'ExponentiationExpression']],
              'AdditiveExpression': [['MultiplicativeExpression'], ['AdditiveExpression', '+', 'MultiplicativeExpression'], ['AdditiveExpression', '-', 'MultiplicativeExpression']],
              'ShiftExpression': [['AdditiveExpression'], ['ShiftExpression', '<<', 'AdditiveExpression'], ['ShiftExpression', '>>', 'AdditiveExpression'], ['ShiftExpression', '>>>', 'AdditiveExpression']],
              'RelationalExpression': [['ShiftExpression'], ['RelationalExpression', '<', 'ShiftExpression'], ['RelationalExpression', '>', 'ShiftExpression'], ['RelationalExpression', '<=', 'ShiftExpression'], ['RelationalExpression', '>=', 'ShiftExpression'], ['RelationalExpression', 'instanceof', 'ShiftExpression'], ['RelationalExpression', 'in', 'ShiftExpression']],
              'EqualityExpression': [['RelationalExpression'], ['EqualityExpression', '==', 'RelationalExpression'], ['EqualityExpression', '!=', 'RelationalExpression'], ['EqualityExpression', '===', 'RelationalExpression'], ['EqualityExpression', '!==', 'RelationalExpression']],
              'BitwiseANDExpression': [['EqualityExpression'], ['BitwiseANDExpression', '&', 'EqualityExpression']],
              'BitwiseXORExpression': [['BitwiseANDExpression'], ['BitwiseXORExpression', '^', 'BitwiseANDExpression']],
              'BitwiseORExpression': [['BitwiseXORExpression'], ['BitwiseORExpression', '|', 'BitwiseXORExpression']],
              'LogicalANDExpression': [['BitwiseORExpression'], ['LogicalANDExpression', '&&', 'BitwiseORExpression']],
              'LogicalORExpression': [['LogicalANDExpression'], ['LogicalORExpression', '||', 'LogicalANDExpression']],
              'ConditionalExpression': [['LogicalORExpression'], ['LogicalORExpression', '?', 'LogicalORExpression', ':', 'LogicalORExpression']],
              'Expression': [['ConditionalExpression'], ['Expression', ',', 'ConditionalExpression']],
              'Program': [['Expression']]

            };

            function _Symbol(symbolName, token) {
              this.name = symbolName;
              this.token = token;
              this.childNodes = [];
              this.toString = function (indent) {
                if (!indent) indent = '';
                if (this.childNodes.length == 1) return this.childNodes[0].toString(indent);
                var str = indent + this.name + (this.token != undefined && this.name != this.token ? ':' + this.token : '') + '\n';
                for (var i = 0; i < this.childNodes.length; i++) {
                  str += this.childNodes[i].toString(indent + '    ');
                }return str;
              };
            }

            function SyntacticalParser() {
              var currentRule;
              var root = {
                Program: '$'
              };
              var hash = {};

              function closureNode(node) {

                hash[JSON.stringify(node)] = node;

                var queue = Object.getOwnPropertyNames(node);
                while (queue.length) {
                  var symbolName = queue.shift();
                  if (!rules[symbolName]) continue;
                  rules[symbolName].forEach(function (rule) {
                    if (!node[rule[0]]) queue.push(rule[0]);
                    var rulenode = node;
                    var lastnode = null;
                    rule.forEach(function (symbol) {
                      if (!rulenode[symbol]) rulenode[symbol] = {};
                      lastnode = rulenode;
                      rulenode = rulenode[symbol];
                    });
                    if (node[symbolName].$div) rulenode.$div = true;
                    rulenode.$reduce = symbolName;
                    rulenode.$count = rule.length;
                  });
                }

                for (var p in node) {
                  if (_typeof(node[p]) != 'object' || p.charAt(0) == '$' || node[p].$closure) continue;
                  if (hash[JSON.stringify(node[p])]) node[p] = hash[JSON.stringify(node[p])];else {
                    closureNode(node[p]);
                  }
                }
                node.$closure = true;
              }

              closureNode(root);
              var symbolStack = [];
              var statusStack = [root];
              var current = root;
              this.insertSymbol = function insertSymbol(symbol, haveLineTerminator) {
                while (!current[symbol.name] && current.$reduce) {
                  var count = current.$count;
                  var newsymbol = new _Symbol(current.$reduce);
                  while (count--) {
                    newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();
                  }current = statusStack[statusStack.length - 1];
                  this.insertSymbol(newsymbol);
                }
                current = current[symbol.name];
                symbolStack.push(symbol), statusStack.push(current);
                if (!current) throw new Error();
                return current.$div;
              };
              this.reset = function () {
                current = root;
                symbolStack = [];
                statusStack = [root];
              };
              Object.defineProperty(this, 'grammarTree', {
                'get': function get() {
                  try {
                    while (current.$reduce) {
                      var count = current.$count;
                      var newsymbol = new _Symbol(current.$reduce);
                      while (count--) {
                        newsymbol.childNodes.push(symbolStack.pop()), statusStack.pop();
                      }current = statusStack[statusStack.length - 1];
                      this.insertSymbol(newsymbol);
                    }
                    if (symbolStack.length > 0 && current[';']) {
                      this.insertSymbol(new _Symbol(';', ';'));
                      return this.grammarTree;
                    }
                    if (symbolStack.length != 1 || symbolStack[0].name != 'Program') throw new Error();
                  } catch (e) {
                    throw new SyntaxError('Unexpected end of input');
                  }
                  return symbolStack[0];
                }
              });
            }

            function Parser() {
              this.lexicalParser = new LexicalParser();
              this.syntacticalParser = new SyntacticalParser();
              var terminalSymbols = ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'RegularExpressionLiteral', 'Identifier', '**', '=>', '{', '}', '(', ')', '[', ']', '.', ';', ',', '<', '>', '<=', '>=', '==', '!=', '===', '!==', '+', '-', '*', '%', '++', '--', '<<', '>>', '>>>', '&', '|', '^', '!', '~', '&&', '||', '?', ':', '=', '+=', '-=', '*=', '%=', '<<=', '>>=', '>>>=', '&=', '|=', '^=', '/', '/=', 'instanceof', 'typeof', 'new', 'void', 'debugger', 'this', 'delete', 'in'];
              var terminalSymbolIndex = {};
              terminalSymbols.forEach(function (e) {
                Object.defineProperty(terminalSymbolIndex, e, {});
              });
              this.reset = function () {
                this.lexicalParser.reset();
                this.syntacticalParser.reset();
              };
              this.parse = function (source, onInputElement) {
                var _this = this;

                var token;
                var haveLineTerminator = false;
                this.lexicalParser.source = source;
                var useDiv = false;
                while (token = this.lexicalParser.getNextToken(useDiv)) {
                  if (onInputElement) onInputElement(token);
                  try {
                    if (Object.getOwnPropertyNames(token).some(function (e) {
                      if (terminalSymbolIndex.hasOwnProperty(e)) {
                        useDiv = _this.syntacticalParser.insertSymbol(new _Symbol(e, token), haveLineTerminator);
                        haveLineTerminator = false;
                        return true;
                      } else return false;
                    })) continue;
                    if ((token.Keyword || token.Punctuator || token.DivPunctuator) && terminalSymbolIndex.hasOwnProperty(token.toString())) {
                      useDiv = this.syntacticalParser.insertSymbol(new _Symbol(token.toString(), token), haveLineTerminator);
                    }
                  } catch (e) {
                    throw new SyntaxError('Unexpected token ' + token);
                  }
                }
                return this.syntacticalParser.grammarTree;
              };
            }

            var parser = new Parser();

            function JavaScriptExpression(text) {
              parser.reset();
              this.tree = parser.parse(text);
              this.paths = [];
              var context = Object.create(null);
              var me = this;
              var pathIndex = Object.create(null);
              this.isSimple;
              this.isConst;
              walk(this.tree);
              checkSimple(this.tree);
              if (this.paths.length === 0) {
                this.isConst = true;
              }
              this.setter = function (path) {
                var curr = context;
                for (var i = 0; i < path.length - 1; i++) {
                  if (!curr[path[i]]) curr[path[i]] = Object.create(null);
                  curr = curr[path[i]];
                }
                return {
                  isCompleted: function isCompleted() {
                    for (var p in pathIndex) {
                      if (!pathIndex[p]) return false;
                    }return true;
                  },
                  set: function set(value) {
                    if (!pathIndex[path.join('.')]) {
                      pathIndex[path.join('.')] = true;
                    }
                    curr[path[i]] = value;
                    if (this.isCompleted()) {
                      return me.exec();
                    } else {
                      return undefined;
                    }
                  }
                };
              };

              this.valueOf = this.exec = function () {
                try {
                  return function () {
                    return eval(text);
                  }.call(context);
                } catch (e) {}
              };

              function checkSimple(symbol) {

                var curr = symbol;
                while (curr.childNodes.length <= 1 && curr.name !== 'MemberExpression') {
                  curr = curr.childNodes[0];
                }
                // TODO: need to point out "[……]"
                if (curr.name === 'MemberExpression') {
                  me.isSimple = true;
                } else {
                  me.isSimple = false;
                }
              }

              function walk(symbol) {
                if (symbol.name === 'CallExpression' && symbol.childNodes[symbol.childNodes.length - 1].name !== 'CallExpression') {
                  var path = getPath(symbol.childNodes[1]);
                  walk(symbol.childNodes[0]);
                } else if (symbol.name === 'NewExpression' && symbol.childNodes.length === 1) {
                  var path = getPath(symbol.childNodes[0]);
                } else if (symbol.name === 'MemberExpression' && symbol.childNodes.length === 1) {
                  var path = getPath(symbol);
                } else {
                  for (var i = 0; i < symbol.childNodes.length; i++) {
                    walk(symbol.childNodes[i]);
                  }
                }
              }

              function getPath(symbol) {
                // [["PrimaryExpression"], ["MemberExpression", "[", "Expression", "]"], ["MemberExpression", ".", "IdentifierName"], ["new", "MemberExpression", "Arguments"]],

                if (symbol.childNodes[0].name === 'IdentifierName') {
                  // MemberExpression : MemberExpression "." IdentifierName
                  var path = getPath(symbol.childNodes[2]);
                  if (path) path = path.concat(symbol.childNodes[0].childNodes[0].token.toString());
                  createPath(path);
                  return path;
                } else if (symbol.childNodes[0].name === 'PrimaryExpression') {
                  // MemberExpression : PrimaryExpression
                  if (symbol.childNodes[0].childNodes[0].name === 'Identifier') {
                    var path = [symbol.childNodes[0].childNodes[0].token.toString()];
                    createPath(path);
                    return path;
                  } else {
                    return null;
                  }
                } else if (symbol.childNodes[0].name === ']') {
                  // MemberExpression : MemberExpression "[" Expression "]"
                  getPath(symbol.childNodes[3]);
                  walk(symbol.childNodes[1]);
                  return null;
                } else if (symbol.childNodes[0].name === 'Arguments') {
                  // MemberExpression : "new" MemberExpression Arguments
                  walk(symbol.childNodes[0]);
                  walk(symbol.childNodes[1]);
                  return null;
                } else {
                  for (var i = 0; i < symbol.childNodes.length; i++) {
                    walk(symbol.childNodes[i]);
                  }
                }
              }

              function createPath(path) {
                var curr = context;
                for (var i = 0; i < path.length - 1; i++) {
                  if (!curr[path[i]]) curr[path[i]] = Object.create(null);
                  curr = curr[path[i]];
                }
                me.paths.push(path);
                pathIndex[path.join('.')] = false;
              }
            }

            function visit(tree) {
              var childNodes = tree.childNodes.slice().reverse();
              var children = childNodes.filter(function (e) {
                return !e.token || !e.token.Punctuator;
              });
              if (tree.name === 'UnaryExpression') {
                // negative number support
                if (childNodes.length === 2 && childNodes[0].name === '-' && children.length === 1) {
                  var res = visit(children[0]);
                  res.value = -res.value;
                  return res;
                }
              }

              if (tree.name === 'Arguments') {
                var argumentList = [];
                var listNode = children[0];
                while (listNode) {
                  if (listNode.childNodes.length === 3) {
                    argumentList.unshift(listNode.childNodes[0]);
                    listNode = listNode.childNodes[2];
                  }
                  if (listNode.childNodes.length === 1) {
                    argumentList.unshift(listNode.childNodes[0]);
                    listNode = null;
                  }
                }
                return {
                  type: 'Arguments',
                  children: argumentList.map(function (e) {
                    return visit(e);
                  })
                };
              }

              if (children && children.length === 1) {
                var res = visit(children[0]);
                return res;
              }

              if (tree.token && ['NullLiteral', 'BooleanLiteral', 'NumericLiteral', 'StringLiteral', 'Identifier'].some(function (e) {
                return tree.token[e];
              })) {
                var type = Object.keys(tree.token).filter(function (e) {
                  return e.match(/Literal/) || e.match(/Identifier/);
                })[0];
                var value = {
                  'NullLiteral': null,
                  'BooleanLiteral': Boolean(tree.token),
                  'NumericLiteral': Number(tree.token),
                  'StringLiteral': tree.token,
                  'Identifier': tree.token
                }[type];

                return {
                  type: type,
                  value: value
                };
              }

              if (tree.name === 'CallExpression') return {
                type: 'CallExpression',
                children: [visit(childNodes[0]), visit(childNodes[1])]
              };

              return {
                type: childNodes.filter(function (e) {
                  return e.token && e.token.Punctuator;
                })[0].name,
                children: childNodes.filter(function (e) {
                  return !e.token || !e.token.Punctuator;
                }).map(function (e) {
                  return visit(e);
                })
              };
            }

            function parse(originExp) {
              var exp = new JavaScriptExpression(originExp);
              return JSON.stringify(visit(exp.tree), null);
            }

            module.exports = {
              parse: parse
            };

            /***/
          }]
          /******/)
        );
      });

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      (function webpackUniversalModuleDefinition(root, factory) {
        if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else {
          var a = factory();
          for (var i in a) {
            ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
          }
        }
      })(typeof self !== 'undefined' ? self : this, function () {
        return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
              /******/
              /******/ // Check if module is in cache
              /******/if (installedModules[moduleId]) {
                /******/return installedModules[moduleId].exports;
                /******/
              }
              /******/ // Create a new module (and put it into the cache)
              /******/var module = installedModules[moduleId] = {
                /******/i: moduleId,
                /******/l: false,
                /******/exports: {}
                /******/ };
              /******/
              /******/ // Execute the module function
              /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
              /******/
              /******/ // Flag the module as loaded
              /******/module.l = true;
              /******/
              /******/ // Return the exports of the module
              /******/return module.exports;
              /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
              /******/if (!__webpack_require__.o(exports, name)) {
                /******/Object.defineProperty(exports, name, {
                  /******/configurable: false,
                  /******/enumerable: true,
                  /******/get: getter
                  /******/ });
                /******/
              }
              /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
              /******/var getter = module && module.__esModule ?
              /******/function getDefault() {
                return module['default'];
              } :
              /******/function getModuleExports() {
                return module;
              };
              /******/__webpack_require__.d(getter, 'a', getter);
              /******/return getter;
              /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 8);
            /******/
          }(
          /************************************************************************/
          /******/[
          /* 0 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */

            /* eslint-disable no-unused-vars */

            var getOwnPropertySymbols = Object.getOwnPropertySymbols;
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            var propIsEnumerable = Object.prototype.propertyIsEnumerable;

            function toObject(val) {
              if (val === null || val === undefined) {
                throw new TypeError('Object.assign cannot be called with null or undefined');
              }

              return Object(val);
            }

            function shouldUseNative() {
              try {
                if (!Object.assign) {
                  return false;
                }

                // Detect buggy property enumeration order in older V8 versions.

                // https://bugs.chromium.org/p/v8/issues/detail?id=4118
                var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
                test1[5] = 'de';
                if (Object.getOwnPropertyNames(test1)[0] === '5') {
                  return false;
                }

                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test2 = {};
                for (var i = 0; i < 10; i++) {
                  test2['_' + String.fromCharCode(i)] = i;
                }
                var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
                  return test2[n];
                });
                if (order2.join('') !== '0123456789') {
                  return false;
                }

                // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                var test3 = {};
                'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
                  test3[letter] = letter;
                });
                if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
                  return false;
                }

                return true;
              } catch (err) {
                // We don't expect any of the above to throw, but better to be safe.
                return false;
              }
            }

            module.exports = shouldUseNative() ? Object.assign : function (target, source) {
              var from;
              var to = toObject(target);
              var symbols;

              for (var s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);

                for (var key in from) {
                  if (hasOwnProperty.call(from, key)) {
                    to[key] = from[key];
                  }
                }

                if (getOwnPropertySymbols) {
                  symbols = getOwnPropertySymbols(from);
                  for (var i = 0; i < symbols.length; i++) {
                    if (propIsEnumerable.call(from, symbols[i])) {
                      to[symbols[i]] = from[symbols[i]];
                    }
                  }
                }
              }

              return to;
            };

            /***/
          },
          /* 1 */
          /***/function (module, exports, __webpack_require__) {

            (function webpackUniversalModuleDefinition(root, factory) {
              if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else {
                var a = factory();
                for (var i in a) {
                  ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
                }
              }
            })(typeof self !== 'undefined' ? self : this, function () {
              return (/******/function (modules) {
                  // webpackBootstrap
                  /******/ // The module cache
                  /******/var installedModules = {};
                  /******/
                  /******/ // The require function
                  /******/function __webpack_require__(moduleId) {
                    /******/
                    /******/ // Check if module is in cache
                    /******/if (installedModules[moduleId]) {
                      /******/return installedModules[moduleId].exports;
                      /******/
                    }
                    /******/ // Create a new module (and put it into the cache)
                    /******/var module = installedModules[moduleId] = {
                      /******/i: moduleId,
                      /******/l: false,
                      /******/exports: {}
                      /******/ };
                    /******/
                    /******/ // Execute the module function
                    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                    /******/
                    /******/ // Flag the module as loaded
                    /******/module.l = true;
                    /******/
                    /******/ // Return the exports of the module
                    /******/return module.exports;
                    /******/
                  }
                  /******/
                  /******/
                  /******/ // expose the modules object (__webpack_modules__)
                  /******/__webpack_require__.m = modules;
                  /******/
                  /******/ // expose the module cache
                  /******/__webpack_require__.c = installedModules;
                  /******/
                  /******/ // define getter function for harmony exports
                  /******/__webpack_require__.d = function (exports, name, getter) {
                    /******/if (!__webpack_require__.o(exports, name)) {
                      /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                      /******/
                    }
                    /******/
                  };
                  /******/
                  /******/ // getDefaultExport function for compatibility with non-harmony modules
                  /******/__webpack_require__.n = function (module) {
                    /******/var getter = module && module.__esModule ?
                    /******/function getDefault() {
                      return module['default'];
                    } :
                    /******/function getModuleExports() {
                      return module;
                    };
                    /******/__webpack_require__.d(getter, 'a', getter);
                    /******/return getter;
                    /******/
                  };
                  /******/
                  /******/ // Object.prototype.hasOwnProperty.call
                  /******/__webpack_require__.o = function (object, property) {
                    return Object.prototype.hasOwnProperty.call(object, property);
                  };
                  /******/
                  /******/ // __webpack_public_path__
                  /******/__webpack_require__.p = "";
                  /******/
                  /******/ // Load entry module and return exports
                  /******/return __webpack_require__(__webpack_require__.s = 0);
                  /******/
                }(
                /************************************************************************/
                /******/[
                /* 0 */
                /***/function (module, exports, __webpack_require__) {

                  "use strict";

                  function findIndex(o, condition) {
                    return o.indexOf(find(o, condition));
                  }

                  function dropWhile(o, condition) {
                    var result = [];
                    map(o, function (v, k) {
                      if (!condition(v, k)) {
                        result.push(v);
                      }
                    });
                    return result;
                  }

                  function filter(o, condition) {
                    var result = [];
                    forEach(o, function (v, k) {
                      if (condition(v, k)) {
                        result.push(v);
                      }
                    });
                    return result;
                  }

                  function map(o, fn) {
                    if (o instanceof Array) {
                      return Array.prototype.map.call(o, fn);
                    } else {
                      var result = [];
                      forEach(o, function (v, k) {
                        result.push(fn(v, k));
                      });
                      return result;
                    }
                  }

                  /*
                   forEach({a: 1, b: 2}, (v, k) => {
                   console.log({
                   v, k
                   })
                   })
                  
                   forEach([1,2,3],(v,k)=>{
                   console.log({
                   v,k
                   })
                   })
                   */

                  function forEach(o, fn) {
                    if (o instanceof Array) {
                      return Array.prototype.forEach.call(o, fn);
                    }
                    Object.keys(o).forEach(function (key) {
                      fn(o[key], key);
                    });
                  }

                  /* console.log(
                   find([{name: 1}, {name: 2}], (o) => {
                   return o.name === 2;
                   }))
                  
                   console.log(find([{name: 1,age:2}, {name: 2}], {name:1}))
                   */
                  function find(o, condition) {
                    var result = null;
                    forEach(o, function (v, k) {
                      if (typeof condition === 'function') {
                        if (condition(v, k)) {
                          result = v;
                        }
                      } else {
                        var propName = Object.keys(condition)[0];
                        if (propName && v[propName] === condition[propName]) {
                          result = v;
                        }
                      }
                    });
                    return result;
                  }

                  module.exports = {
                    find: find,
                    forEach: forEach,
                    map: map,
                    filter: filter,
                    dropWhile: dropWhile,
                    findIndex: findIndex
                  };

                  /***/
                }]
                /******/)
              );
            });

            /***/
          },
          /* 2 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _slicedToArray = function () {
              function sliceIterator(arr, i) {
                var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                  for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);if (i && _arr.length === i) break;
                  }
                } catch (err) {
                  _d = true;_e = err;
                } finally {
                  try {
                    if (!_n && _i["return"]) _i["return"]();
                  } finally {
                    if (_d) throw _e;
                  }
                }return _arr;
              }return function (arr, i) {
                if (Array.isArray(arr)) {
                  return arr;
                } else if (Symbol.iterator in Object(arr)) {
                  return sliceIterator(arr, i);
                } else {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
              };
            }();

            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            /**
             * Transforms matrix into an object
             *
             * @param string matrix
             * @return object
             */

            // TODO matrix4 for 3D
            var matrixToTransformObj = function matrixToTransformObj(matrix) {
              // this happens when there was no rotation yet in CSS
              if (matrix === 'none') {
                matrix = 'matrix(0,0,0,0,0)';
              }
              var obj = {},
                  values = matrix.match(/([-+]?[\d\.]+)/g);

              var _values = _slicedToArray(values, 6),
                  a = _values[0],
                  b = _values[1],
                  c = _values[2],
                  d = _values[3],
                  e = _values[4],
                  f = _values[5];

              obj.rotate = obj.rotateZ = Math.round(Math.atan2(parseFloat(b), parseFloat(a)) * (180 / Math.PI)) || 0;
              obj.translateX = e !== undefined ? pxTo750(e) : 0;
              obj.translateY = f !== undefined ? pxTo750(f) : 0;
              obj.scaleX = Math.sqrt(a * a + b * b);
              obj.scaleY = Math.sqrt(c * c + d * d);
              return obj;
            };

            function pxTo750(n) {
              return n / document.body.clientWidth * 750;
            }

            function px(n) {
              return n / 750 * document.body.clientWidth;
              // return Math.round(n / 750 * document.body.clientWidth);
            }

            function clamp(n, min, max) {
              return n < min ? min : n > max ? max : n;
            }

            var vendor = function () {
              var el = document.createElement('div').style;
              var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
                  transform,
                  i = 0,
                  l = vendors.length;
              for (; i < l; i++) {
                transform = vendors[i] + 'ransform';
                if (transform in el) return vendors[i].substr(0, vendors[i].length - 1);
              }
              return false;
            }();

            /**
             *  add vendor to attribute
             *  @memberOf Util
             *  @param {String} attrName name of attribute
             *  @return { String }
             **/
            function prefixStyle(attrName) {
              if (vendor === false) return false;
              if (vendor === '') return attrName;
              return vendor + attrName.charAt(0).toUpperCase() + attrName.substr(1);
            }

            exports.matrixToTransformObj = matrixToTransformObj;
            exports.pxTo750 = pxTo750;
            exports.px = px;
            exports.clamp = clamp;
            exports.prefixStyle = prefixStyle;

            /***/
          },
          /* 3 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
              }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
            }(); /**
                  Copyright 2018 Alibaba Group
                 
                  Licensed under the Apache License, Version 2.0 (the "License");
                  you may not use this file except in compliance with the License.
                  You may obtain a copy of the License at
                 
                  http://www.apache.org/licenses/LICENSE-2.0
                 
                  Unless required by applicable law or agreed to in writing, software
                  distributed under the License is distributed on an "AS IS" BASIS,
                  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                  See the License for the specific language governing permissions and
                  limitations under the License.
                  */

            var _simpleLodash = __webpack_require__(1);

            var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

            var _utils = __webpack_require__(2);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            var TimingHandler = function () {
              function TimingHandler(binding) {
                _classCallCheck(this, TimingHandler);

                this.binding = null;

                this.binding = binding;
                var props = binding.options.props;

                _simpleLodash2.default.map(props, function (prop) {
                  var element = prop.element,
                      config = prop.config;

                  if (config && element) {
                    if (config.perspective) {
                      if (element.parentNode) {
                        element.parentNode.style[(0, _utils.prefixStyle)('transformStyle')] = 'preserve-3d';
                        element.parentNode.style[(0, _utils.prefixStyle)('perspective')] = config.perspective + 'px';
                        element.parentNode.style[(0, _utils.prefixStyle)('perspectiveOrigin')] = '0 0';
                      }
                    }
                    if (config.transformOrigin) {
                      element.style[(0, _utils.prefixStyle)('transformOrigin')] = config.transformOrigin;
                    }
                  }
                });
              }

              _createClass(TimingHandler, [{
                key: 'destroy',
                value: function destroy() {}
              }]);

              return TimingHandler;
            }();

            exports.default = TimingHandler;
            ;

            /***/
          },
          /* 4 */
          /***/function (module, exports, __webpack_require__) {

            (function webpackUniversalModuleDefinition(root, factory) {
              if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else {
                var a = factory();
                for (var i in a) {
                  ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
                }
              }
            })(this, function () {
              return (/******/function (modules) {
                  // webpackBootstrap
                  /******/ // The module cache
                  /******/var installedModules = {};
                  /******/
                  /******/ // The require function
                  /******/function __webpack_require__(moduleId) {
                    /******/
                    /******/ // Check if module is in cache
                    /******/if (installedModules[moduleId]) {
                      /******/return installedModules[moduleId].exports;
                      /******/
                    }
                    /******/ // Create a new module (and put it into the cache)
                    /******/var module = installedModules[moduleId] = {
                      /******/i: moduleId,
                      /******/l: false,
                      /******/exports: {}
                      /******/ };
                    /******/
                    /******/ // Execute the module function
                    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                    /******/
                    /******/ // Flag the module as loaded
                    /******/module.l = true;
                    /******/
                    /******/ // Return the exports of the module
                    /******/return module.exports;
                    /******/
                  }
                  /******/
                  /******/
                  /******/ // expose the modules object (__webpack_modules__)
                  /******/__webpack_require__.m = modules;
                  /******/
                  /******/ // expose the module cache
                  /******/__webpack_require__.c = installedModules;
                  /******/
                  /******/ // define getter function for harmony exports
                  /******/__webpack_require__.d = function (exports, name, getter) {
                    /******/if (!__webpack_require__.o(exports, name)) {
                      /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                      /******/
                    }
                    /******/
                  };
                  /******/
                  /******/ // getDefaultExport function for compatibility with non-harmony modules
                  /******/__webpack_require__.n = function (module) {
                    /******/var getter = module && module.__esModule ?
                    /******/function getDefault() {
                      return module['default'];
                    } :
                    /******/function getModuleExports() {
                      return module;
                    };
                    /******/__webpack_require__.d(getter, 'a', getter);
                    /******/return getter;
                    /******/
                  };
                  /******/
                  /******/ // Object.prototype.hasOwnProperty.call
                  /******/__webpack_require__.o = function (object, property) {
                    return Object.prototype.hasOwnProperty.call(object, property);
                  };
                  /******/
                  /******/ // __webpack_public_path__
                  /******/__webpack_require__.p = "";
                  /******/
                  /******/ // Load entry module and return exports
                  /******/return __webpack_require__(__webpack_require__.s = 3);
                  /******/
                }(
                /************************************************************************/
                /******/[
                /* 0 */
                /***/function (module, exports, __webpack_require__) {

                  "use strict";

                  var PI = Math.PI,
                      sin = Math.sin,
                      cos = Math.cos,
                      sqrt = Math.sqrt,
                      pow = Math.pow;

                  var c1 = 1.70158;
                  var c2 = c1 * 1.525;
                  var c3 = c1 + 1;
                  var c4 = 2 * PI / 3;
                  var c5 = 2 * PI / 4.5;

                  // x is the fraction of animation progress, in the range 0..1
                  function bounceOut(x) {
                    var n1 = 7.5625,
                        d1 = 2.75;
                    if (x < 1 / d1) {
                      return n1 * x * x;
                    } else if (x < 2 / d1) {
                      return n1 * (x -= 1.5 / d1) * x + .75;
                    } else if (x < 2.5 / d1) {
                      return n1 * (x -= 2.25 / d1) * x + .9375;
                    } else {
                      return n1 * (x -= 2.625 / d1) * x + .984375;
                    }
                  }

                  var Easing = {
                    linear: function linear(x) {
                      return x;
                    },
                    easeInQuad: function easeInQuad(x) {
                      return x * x;
                    },
                    easeOutQuad: function easeOutQuad(x) {
                      return 1 - (1 - x) * (1 - x);
                    },
                    easeInOutQuad: function easeInOutQuad(x) {
                      return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
                    },
                    easeInCubic: function easeInCubic(x) {
                      return x * x * x;
                    },
                    easeOutCubic: function easeOutCubic(x) {
                      return 1 - pow(1 - x, 3);
                    },
                    easeInOutCubic: function easeInOutCubic(x) {
                      return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
                    },
                    easeInQuart: function easeInQuart(x) {
                      return x * x * x * x;
                    },
                    easeOutQuart: function easeOutQuart(x) {
                      return 1 - pow(1 - x, 4);
                    },
                    easeInOutQuart: function easeInOutQuart(x) {
                      return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
                    },
                    easeInQuint: function easeInQuint(x) {
                      return x * x * x * x * x;
                    },
                    easeOutQuint: function easeOutQuint(x) {
                      return 1 - pow(1 - x, 5);
                    },
                    easeInOutQuint: function easeInOutQuint(x) {
                      return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
                    },
                    easeInSine: function easeInSine(x) {
                      return 1 - cos(x * PI / 2);
                    },
                    easeOutSine: function easeOutSine(x) {
                      return sin(x * PI / 2);
                    },
                    easeInOutSine: function easeInOutSine(x) {
                      return -(cos(PI * x) - 1) / 2;
                    },
                    easeInExpo: function easeInExpo(x) {
                      return x === 0 ? 0 : pow(2, 10 * x - 10);
                    },
                    easeOutExpo: function easeOutExpo(x) {
                      return x === 1 ? 1 : 1 - pow(2, -10 * x);
                    },
                    easeInOutExpo: function easeInOutExpo(x) {
                      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
                    },
                    easeInCirc: function easeInCirc(x) {
                      return 1 - sqrt(1 - pow(x, 2));
                    },
                    easeOutCirc: function easeOutCirc(x) {
                      return sqrt(1 - pow(x - 1, 2));
                    },
                    easeInOutCirc: function easeInOutCirc(x) {
                      return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
                    },
                    easeInElastic: function easeInElastic(x) {
                      return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
                    },
                    easeOutElastic: function easeOutElastic(x) {
                      return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
                    },
                    easeInOutElastic: function easeInOutElastic(x) {
                      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
                    },
                    easeInBack: function easeInBack(x) {
                      return c3 * x * x * x - c1 * x * x;
                    },
                    easeOutBack: function easeOutBack(x) {
                      return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
                    },
                    easeInOutBack: function easeInOutBack(x) {
                      return x < 0.5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
                    },
                    easeInBounce: function easeInBounce(x) {
                      return 1 - bounceOut(1 - x);
                    },
                    easeOutBounce: bounceOut,
                    easeInOutBounce: function easeInOutBounce(x) {
                      return x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
                    },
                    cubicBezier: function cubicBezier() {}
                  };

                  module.exports = Easing;

                  /***/
                },
                /* 1 */
                /***/function (module, exports, __webpack_require__) {

                  "use strict";

                  function Bezier(x1, y1, x2, y2, epsilon) {
                    var curveX = function curveX(t) {
                      var v = 1 - t;
                      return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
                    };

                    var curveY = function curveY(t) {
                      var v = 1 - t;
                      return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
                    };

                    var derivativeCurveX = function derivativeCurveX(t) {
                      var v = 1 - t;
                      return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (-t * t * t + 2 * v * t) * x2;
                    };

                    return function (t) {

                      var x = t,
                          t0,
                          t1,
                          t2,
                          x2,
                          d2,
                          i;

                      // First try a few iterations of Newton's method -- normally very fast.
                      for (t2 = x, i = 0; i < 8; i++) {
                        x2 = curveX(t2) - x;
                        if (Math.abs(x2) < epsilon) return curveY(t2);
                        d2 = derivativeCurveX(t2);
                        if (Math.abs(d2) < 1e-6) break;
                        t2 = t2 - x2 / d2;
                      }

                      t0 = 0, t1 = 1, t2 = x;

                      if (t2 < t0) return curveY(t0);
                      if (t2 > t1) return curveY(t1);

                      // Fallback to the bisection method for reliability.
                      while (t0 < t1) {
                        x2 = curveX(t2);
                        if (Math.abs(x2 - x) < epsilon) return curveY(t2);
                        if (x > x2) t0 = t2;else t1 = t2;
                        t2 = (t1 - t0) * .5 + t0;
                      }

                      // Failure
                      return curveY(t2);
                    };
                  };

                  module.exports = Bezier;

                  /***/
                },
                /* 2 */
                /***/function (module, exports, __webpack_require__) {

                  "use strict";

                  var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                  };

                  var cancelRAF = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout;

                  module.exports = {
                    raf: raf,
                    cancelRAF: cancelRAF
                  };

                  /***/
                },
                /* 3 */
                /***/function (module, exports, __webpack_require__) {

                  "use strict";

                  module.exports = __webpack_require__(4);

                  /***/
                },
                /* 4 */
                /***/function (module, exports, __webpack_require__) {

                  "use strict";

                  var easing = __webpack_require__(0);
                  var bezier = __webpack_require__(1);

                  var _require = __webpack_require__(2),
                      raf = _require.raf,
                      cancelRAF = _require.cancelRAF;

                  var assign = __webpack_require__(5);

                  var TYPES = {
                    START: 'start',
                    END: 'end',
                    RUN: 'run',
                    STOP: 'stop'
                  };

                  var noop = function noop() {};

                  var MIN_DURATION = 1;

                  function Timer(cfg) {
                    this.init(cfg);
                  }

                  Timer.prototype = {
                    init: function init(cfg) {
                      this.cfg = assign({
                        easing: 'linear',
                        duration: Infinity,
                        onStart: noop,
                        onRun: noop,
                        onStop: noop,
                        onEnd: noop
                      }, cfg);
                    },
                    run: function run() {
                      var _cfg = this.cfg,
                          duration = _cfg.duration,
                          onStart = _cfg.onStart,
                          onRun = _cfg.onRun;

                      if (duration <= MIN_DURATION) {
                        this.isfinished = true;
                        typeof onRun === 'function' ? onRun({ percent: 1 }) : null;
                        this.stop();
                      }
                      if (this.isfinished) return;
                      this._hasFinishedPercent = this._stop && this._stop.percent || 0;
                      this._stop = null;
                      this.start = Date.now();
                      this.percent = 0;
                      typeof onStart === 'function' ? onStart({ percent: 0, type: TYPES.START }) : null;
                      // epsilon determines the precision of the solved values
                      var epsilon = 1000 / 60 / duration / 4;
                      var b = this.cfg.bezierArgs;
                      this.easingFn = b && b.length === 4 ? bezier(b[0], b[1], b[2], b[3], epsilon) : easing[this.cfg.easing];
                      this._run();
                    },

                    _run: function _run() {
                      var _this = this;

                      var _cfg2 = this.cfg,
                          onRun = _cfg2.onRun,
                          onStop = _cfg2.onStop;

                      cancelRAF(this._raf);
                      this._raf = raf(function () {
                        _this.now = Date.now();
                        _this.t = _this.now - _this.start;
                        _this.duration = _this.now - _this.start >= _this.cfg.duration ? _this.cfg.duration : _this.now - _this.start;
                        _this.progress = _this.easingFn(_this.duration / _this.cfg.duration);
                        _this.percent = _this.duration / _this.cfg.duration + _this._hasFinishedPercent;
                        if (_this.percent >= 1 || _this._stop) {
                          _this.percent = _this._stop && _this._stop.percent ? _this._stop.percent : 1;
                          _this.duration = _this._stop && _this._stop.duration ? _this._stop.duration : _this.duration;

                          typeof onRun === 'function' ? onRun({
                            percent: _this.progress,
                            originPercent: _this.percent,
                            t: _this.t,
                            type: TYPES.RUN
                          }) : null;

                          typeof onStop === 'function' ? onStop({
                            percent: _this.percent,
                            t: _this.t,
                            type: TYPES.STOP
                          }) : null;

                          if (_this.percent >= 1) {
                            _this.isfinished = true;
                            _this.stop();
                          }
                          return;
                        }

                        typeof onRun === 'function' ? onRun({
                          percent: _this.progress,
                          originPercent: _this.percent,
                          t: _this.t,
                          type: TYPES.RUN
                        }) : null;

                        _this._run();
                      });
                    },

                    stop: function stop() {
                      var onEnd = this.cfg.onEnd;

                      this._stop = {
                        percent: this.percent,
                        now: this.now
                      };
                      typeof onEnd === 'function' ? onEnd({
                        percent: 1,
                        t: this.t,
                        type: TYPES.END
                      }) : null;
                      cancelRAF(this._raf);
                    }
                  };

                  Timer.Easing = easing;
                  Timer.Bezier = bezier;
                  Timer.raf = raf;
                  Timer.cancelRAF = cancelRAF;
                  module.exports = Timer;

                  /***/
                },
                /* 5 */
                /***/function (module, exports, __webpack_require__) {

                  "use strict";
                  /*
                  object-assign
                  (c) Sindre Sorhus
                  @license MIT
                  */

                  /* eslint-disable no-unused-vars */

                  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
                  var hasOwnProperty = Object.prototype.hasOwnProperty;
                  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

                  function toObject(val) {
                    if (val === null || val === undefined) {
                      throw new TypeError('Object.assign cannot be called with null or undefined');
                    }

                    return Object(val);
                  }

                  function shouldUseNative() {
                    try {
                      if (!Object.assign) {
                        return false;
                      }

                      // Detect buggy property enumeration order in older V8 versions.

                      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
                      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
                      test1[5] = 'de';
                      if (Object.getOwnPropertyNames(test1)[0] === '5') {
                        return false;
                      }

                      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                      var test2 = {};
                      for (var i = 0; i < 10; i++) {
                        test2['_' + String.fromCharCode(i)] = i;
                      }
                      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
                        return test2[n];
                      });
                      if (order2.join('') !== '0123456789') {
                        return false;
                      }

                      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                      var test3 = {};
                      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
                        test3[letter] = letter;
                      });
                      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
                        return false;
                      }

                      return true;
                    } catch (err) {
                      // We don't expect any of the above to throw, but better to be safe.
                      return false;
                    }
                  }

                  module.exports = shouldUseNative() ? Object.assign : function (target, source) {
                    var from;
                    var to = toObject(target);
                    var symbols;

                    for (var s = 1; s < arguments.length; s++) {
                      from = Object(arguments[s]);

                      for (var key in from) {
                        if (hasOwnProperty.call(from, key)) {
                          to[key] = from[key];
                        }
                      }

                      if (getOwnPropertySymbols) {
                        symbols = getOwnPropertySymbols(from);
                        for (var i = 0; i < symbols.length; i++) {
                          if (propIsEnumerable.call(from, symbols[i])) {
                            to[symbols[i]] = from[symbols[i]];
                          }
                        }
                      }
                    }

                    return to;
                  };

                  /***/
                }]
                /******/)
              );
            });

            /***/
          },
          /* 5 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _quaternion = __webpack_require__(6);

            var _quaternion2 = _interopRequireDefault(_quaternion);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function Vector3(x, y, z) {

              this.x = x || 0;
              this.y = y || 0;
              this.z = z || 0;
            }

            Vector3.prototype = {

              constructor: Vector3,

              isVector3: true,

              set: function set(x, y, z) {

                this.x = x;
                this.y = y;
                this.z = z;

                return this;
              },

              applyEuler: function () {

                var quaternion;

                return function applyEuler(euler) {

                  if ((euler && euler.isEuler) === false) {

                    console.error('THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.');
                  }

                  if (quaternion === undefined) quaternion = new _quaternion2.default();

                  return this.applyQuaternion(quaternion.setFromEuler(euler));
                };
              }(),

              applyQuaternion: function applyQuaternion(q) {

                var x = this.x,
                    y = this.y,
                    z = this.z;
                var qx = q.x,
                    qy = q.y,
                    qz = q.z,
                    qw = q.w;

                // calculate quat * vector

                var ix = qw * x + qy * z - qz * y;
                var iy = qw * y + qz * x - qx * z;
                var iz = qw * z + qx * y - qy * x;
                var iw = -qx * x - qy * y - qz * z;

                // calculate result * inverse quat

                this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
                this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
                this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

                return this;
              }

            };

            exports.default = Vector3;

            /***/
          },
          /* 6 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _objectAssign = __webpack_require__(0);

            var _objectAssign2 = _interopRequireDefault(_objectAssign);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function Quaternion(x, y, z, w) {

              this._x = x || 0;
              this._y = y || 0;
              this._z = z || 0;
              this._w = w !== undefined ? w : 1;
            }

            Quaternion.prototype = {

              constructor: Quaternion,

              get x() {

                return this._x;
              },

              set x(value) {

                this._x = value;
                this.onChangeCallback();
              },

              get y() {

                return this._y;
              },

              set y(value) {

                this._y = value;
                this.onChangeCallback();
              },

              get z() {

                return this._z;
              },

              set z(value) {

                this._z = value;
                this.onChangeCallback();
              },

              get w() {

                return this._w;
              },

              set w(value) {

                this._w = value;
                this.onChangeCallback();
              },

              set: function set(x, y, z, w) {

                this._x = x;
                this._y = y;
                this._z = z;
                this._w = w;

                this.onChangeCallback();

                return this;
              },

              clone: function clone() {

                return new this.constructor(this._x, this._y, this._z, this._w);
              },

              copy: function copy(quaternion) {

                this._x = quaternion.x;
                this._y = quaternion.y;
                this._z = quaternion.z;
                this._w = quaternion.w;

                this.onChangeCallback();

                return this;
              },

              setFromEuler: function setFromEuler(euler, update) {

                if ((euler && euler.isEuler) === false) {

                  throw new Error('THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.');
                }

                // http://www.mathworks.com/matlabcentral/fileexchange/
                //  20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
                //  content/SpinCalc.m

                var c1 = Math.cos(euler._x / 2);
                var c2 = Math.cos(euler._y / 2);
                var c3 = Math.cos(euler._z / 2);
                var s1 = Math.sin(euler._x / 2);
                var s2 = Math.sin(euler._y / 2);
                var s3 = Math.sin(euler._z / 2);

                var order = euler.order;

                if (order === 'XYZ') {

                  this._x = s1 * c2 * c3 + c1 * s2 * s3;
                  this._y = c1 * s2 * c3 - s1 * c2 * s3;
                  this._z = c1 * c2 * s3 + s1 * s2 * c3;
                  this._w = c1 * c2 * c3 - s1 * s2 * s3;
                } else if (order === 'YXZ') {

                  this._x = s1 * c2 * c3 + c1 * s2 * s3;
                  this._y = c1 * s2 * c3 - s1 * c2 * s3;
                  this._z = c1 * c2 * s3 - s1 * s2 * c3;
                  this._w = c1 * c2 * c3 + s1 * s2 * s3;
                } else if (order === 'ZXY') {

                  this._x = s1 * c2 * c3 - c1 * s2 * s3;
                  this._y = c1 * s2 * c3 + s1 * c2 * s3;
                  this._z = c1 * c2 * s3 + s1 * s2 * c3;
                  this._w = c1 * c2 * c3 - s1 * s2 * s3;
                } else if (order === 'ZYX') {

                  this._x = s1 * c2 * c3 - c1 * s2 * s3;
                  this._y = c1 * s2 * c3 + s1 * c2 * s3;
                  this._z = c1 * c2 * s3 - s1 * s2 * c3;
                  this._w = c1 * c2 * c3 + s1 * s2 * s3;
                } else if (order === 'YZX') {

                  this._x = s1 * c2 * c3 + c1 * s2 * s3;
                  this._y = c1 * s2 * c3 + s1 * c2 * s3;
                  this._z = c1 * c2 * s3 - s1 * s2 * c3;
                  this._w = c1 * c2 * c3 - s1 * s2 * s3;
                } else if (order === 'XZY') {

                  this._x = s1 * c2 * c3 - c1 * s2 * s3;
                  this._y = c1 * s2 * c3 - s1 * c2 * s3;
                  this._z = c1 * c2 * s3 + s1 * s2 * c3;
                  this._w = c1 * c2 * c3 + s1 * s2 * s3;
                }

                if (update !== false) this.onChangeCallback();

                return this;
              },

              setFromAxisAngle: function setFromAxisAngle(axis, angle) {

                // http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

                // assumes axis is normalized

                var halfAngle = angle / 2,
                    s = Math.sin(halfAngle);

                this._x = axis.x * s;
                this._y = axis.y * s;
                this._z = axis.z * s;
                this._w = Math.cos(halfAngle);

                this.onChangeCallback();

                return this;
              },

              // normalize: function() {
              //
              //   var l = this.length();
              //
              //   if (l === 0) {
              //
              //     this._x = 0;
              //     this._y = 0;
              //     this._z = 0;
              //     this._w = 1;
              //
              //   } else {
              //
              //     l = 1 / l;
              //
              //     this._x = this._x * l;
              //     this._y = this._y * l;
              //     this._z = this._z * l;
              //     this._w = this._w * l;
              //
              //   }
              //
              //   this.onChangeCallback();
              //
              //   return this;
              //
              // },

              multiply: function multiply(q, p) {

                if (p !== undefined) {

                  console.warn('THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.');
                  return this.multiplyQuaternions(q, p);
                }

                return this.multiplyQuaternions(this, q);
              },

              multiplyQuaternions: function multiplyQuaternions(a, b) {

                // from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

                var qax = a._x,
                    qay = a._y,
                    qaz = a._z,
                    qaw = a._w;
                var qbx = b._x,
                    qby = b._y,
                    qbz = b._z,
                    qbw = b._w;

                this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
                this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
                this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
                this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

                this.onChangeCallback();

                return this;
              },

              slerp: function slerp(qb, t) {

                if (t === 0) return this;
                if (t === 1) return this.copy(qb);

                var x = this._x,
                    y = this._y,
                    z = this._z,
                    w = this._w;

                // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

                var cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

                if (cosHalfTheta < 0) {

                  this._w = -qb._w;
                  this._x = -qb._x;
                  this._y = -qb._y;
                  this._z = -qb._z;

                  cosHalfTheta = -cosHalfTheta;
                } else {

                  this.copy(qb);
                }

                if (cosHalfTheta >= 1.0) {

                  this._w = w;
                  this._x = x;
                  this._y = y;
                  this._z = z;

                  return this;
                }

                var sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);

                if (Math.abs(sinHalfTheta) < 0.001) {

                  this._w = 0.5 * (w + this._w);
                  this._x = 0.5 * (x + this._x);
                  this._y = 0.5 * (y + this._y);
                  this._z = 0.5 * (z + this._z);

                  return this;
                }

                var halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
                var ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta,
                    ratioB = Math.sin(t * halfTheta) / sinHalfTheta;

                this._w = w * ratioA + this._w * ratioB;
                this._x = x * ratioA + this._x * ratioB;
                this._y = y * ratioA + this._y * ratioB;
                this._z = z * ratioA + this._z * ratioB;

                this.onChangeCallback();

                return this;
              },

              onChange: function onChange(callback) {

                this.onChangeCallback = callback;

                return this;
              },

              onChangeCallback: function onChangeCallback() {}

            };

            (0, _objectAssign2.default)(Quaternion, {

              slerp: function slerp(qa, qb, qm, t) {

                return qm.copy(qa).slerp(qb, t);
              },

              slerpFlat: function slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {

                // fuzz-free, array-based Quaternion SLERP operation

                var x0 = src0[srcOffset0 + 0],
                    y0 = src0[srcOffset0 + 1],
                    z0 = src0[srcOffset0 + 2],
                    w0 = src0[srcOffset0 + 3],
                    x1 = src1[srcOffset1 + 0],
                    y1 = src1[srcOffset1 + 1],
                    z1 = src1[srcOffset1 + 2],
                    w1 = src1[srcOffset1 + 3];

                if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {

                  var s = 1 - t,
                      cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
                      dir = cos >= 0 ? 1 : -1,
                      sqrSin = 1 - cos * cos;

                  // Skip the Slerp for tiny steps to avoid numeric problems:
                  if (sqrSin > Number.EPSILON) {

                    var sin = Math.sqrt(sqrSin),
                        len = Math.atan2(sin, cos * dir);

                    s = Math.sin(s * len) / sin;
                    t = Math.sin(t * len) / sin;
                  }

                  var tDir = t * dir;

                  x0 = x0 * s + x1 * tDir;
                  y0 = y0 * s + y1 * tDir;
                  z0 = z0 * s + z1 * tDir;
                  w0 = w0 * s + w1 * tDir;

                  // Normalize in case we just did a lerp:
                  if (s === 1 - t) {

                    var f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);

                    x0 *= f;
                    y0 *= f;
                    z0 *= f;
                    w0 *= f;
                  }
                }

                dst[dstOffset] = x0;
                dst[dstOffset + 1] = y0;
                dst[dstOffset + 2] = z0;
                dst[dstOffset + 3] = w0;
              }

            });

            exports.default = Quaternion;

            /***/
          },
          /* 7 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            var _Math = {
              DEG2RAD: Math.PI / 180,
              RAD2DEG: 180 / Math.PI,
              degToRad: function degToRad(degrees) {
                return degrees * _Math.DEG2RAD;
              },
              radToDeg: function radToDeg(radians) {
                return radians * _Math.RAD2DEG;
              }
            };

            exports.default = _Math;

            /***/
          },
          /* 8 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            var _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
              }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
            }();

            var _simpleLodash = __webpack_require__(1);

            var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

            var _expression = __webpack_require__(9);

            var _expression2 = _interopRequireDefault(_expression);

            var _handlers = __webpack_require__(10);

            var _utils = __webpack_require__(2);

            var _fn = __webpack_require__(18);

            var _fn2 = _interopRequireDefault(_fn);

            var _objectAssign = __webpack_require__(0);

            var _objectAssign2 = _interopRequireDefault(_objectAssign);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            // transform
            var vendorTransform = (0, _utils.prefixStyle)('transform');

            var Binding = function () {
              function Binding(options, callback) {
                _classCallCheck(this, Binding);

                this._eventHandler = null;
                this.elTransforms = [];
                this.token = null;

                this.options = options;
                this.callback = callback;
                this.token = this.genToken();
                this._initElTransforms();
                var eventType = options.eventType;

                switch (eventType) {
                  case 'pan':
                    this._eventHandler = new _handlers.PanHandler(this);
                    break;
                  case 'orientation':
                    this._eventHandler = new _handlers.OrientationHandler(this);
                    break;
                  case 'timing':
                    this._eventHandler = new _handlers.TimingHandler(this);
                    break;
                  case 'scroll':
                    this._eventHandler = new _handlers.ScrollHandler(this);
                    break;
                }
              }

              _createClass(Binding, [{
                key: 'genToken',
                value: function genToken() {
                  return parseInt(Math.random() * 10000000);
                }
              }, {
                key: '_initElTransforms',
                value: function _initElTransforms() {
                  var _options$props = this.options.props,
                      props = _options$props === undefined ? [] : _options$props;

                  var elTransforms = this.elTransforms;
                  props.forEach(function (prop) {
                    var element = prop.element;

                    if (!_simpleLodash2.default.find(elTransforms, function (o) {
                      return o.element === element && element instanceof HTMLElement;
                    })) {
                      elTransforms.push({
                        element: element,
                        transform: {
                          translateX: 0,
                          translateY: 0,
                          translateZ: 0,
                          scaleX: 1,
                          scaleY: 1,
                          scaleZ: 1,
                          rotateX: 0,
                          rotateY: 0,
                          rotateZ: 0
                        }
                      });
                    }
                  });
                }
              }, {
                key: 'getValue',
                value: function getValue(params, expression) {
                  return _expression2.default.execute(expression, (0, _objectAssign2.default)(_fn2.default, params));
                }

                // TODO scroll.contentOffset 待确认及补全

              }, {
                key: 'setProperty',
                value: function setProperty(el, property, val) {

                  if (el instanceof HTMLElement) {
                    var elTransform = _simpleLodash2.default.find(this.elTransforms, function (o) {
                      return o.element === el;
                    });
                    switch (property) {
                      case 'transform.translateX':
                        elTransform.transform.translateX = (0, _utils.px)(val);
                        break;
                      case 'transform.translateY':
                        elTransform.transform.translateY = (0, _utils.px)(val);
                        break;
                      case 'transform.translateZ':
                        elTransform.transform.translateZ = (0, _utils.px)(val);
                        break;
                      case 'transform.rotateX':
                        elTransform.transform.rotateX = val;
                        break;
                      case 'transform.rotateY':
                        elTransform.transform.rotateY = val;
                        break;
                      case 'transform.rotateZ':
                        elTransform.transform.rotateZ = val;
                        break;
                      case 'transform.rotate':
                        elTransform.transform.rotateZ = val;
                        break;
                      case 'transform.scaleX':
                        elTransform.transform.scaleX = val;
                        break;
                      case 'transform.scaleY':
                        elTransform.transform.scaleY = val;
                        break;
                      case 'transform.scale':
                        elTransform.transform.scaleX = val;
                        elTransform.transform.scaleY = val;
                        break;
                      case 'opacity':
                        el.style.opacity = val;
                        break;
                      case 'background-color':
                        el.style['background-color'] = val;
                        break;
                      case 'color':
                        el.style.color = val;
                        break;
                      case 'width':
                      case 'height':
                      case 'border-top-left-radius':
                      case 'border-top-right-radius':
                      case 'border-bottom-left-radius':
                      case 'border-bottom-right-radius':
                      case 'border-radius':
                      case 'margin-top':
                      case 'margin-bottom':
                      case 'margin-left':
                      case 'margin-right':
                      case 'padding-top':
                      case 'padding-bottom':
                      case 'padding-left':
                      case 'padding-right':
                        el.style[property] = (0, _utils.px)(val) + 'px';
                        break;
                    }
                    el.style[vendorTransform] = ['translateX(' + elTransform.transform.translateX + 'px)', 'translateY(' + elTransform.transform.translateY + 'px)', 'translateZ(' + elTransform.transform.translateZ + 'px)', 'scaleX(' + elTransform.transform.scaleX + ')', 'scaleY(' + elTransform.transform.scaleY + ')', 'rotateX(' + elTransform.transform.rotateX + 'deg)', 'rotateY(' + elTransform.transform.rotateY + 'deg)', 'rotateZ(' + elTransform.transform.rotateZ + 'deg)'].join(' ');
                  } else if (el instanceof SVGElement) {
                    var _elTransform = _simpleLodash2.default.find(this.elTransforms, function (o) {
                      return o.element === el;
                    });
                    switch (property) {
                      case 'svg-dashoffset':
                        el.setAttribute('stroke-dashoffset', (0, _utils.px)(val));
                        break;
                      case 'svg-transform.translateX':
                        _elTransform.transform.translateX = (0, _utils.px)(val);
                        break;
                      case 'svg-transform.translateY':
                        _elTransform.transform.translateY = (0, _utils.px)(val);
                        break;
                      case 'svg-transform.translateZ':
                        _elTransform.transform.translateZ = (0, _utils.px)(val);
                        break;
                      case 'svg-transform.rotateX':
                        _elTransform.transform.rotateX = val;
                        break;
                      case 'svg-transform.rotateY':
                        _elTransform.transform.rotateY = val;
                        break;
                      case 'svg-transform.rotateZ':
                        _elTransform.transform.rotateZ = val;
                        break;
                      case 'svg-transform.rotate':
                        _elTransform.transform.rotateZ = val;
                        break;
                      case 'svg-transform.scaleX':
                        _elTransform.transform.scaleX = val;
                        break;
                      case 'svg-transform.scaleY':
                        _elTransform.transform.scaleY = val;
                        break;
                      case 'svg-transform.scale':
                        _elTransform.transform.scaleX = val;
                        _elTransform.transform.scaleY = val;
                        break;
                    }

                    el.style[vendorTransform] = ['translateX(' + _elTransform.transform.translateX + 'px)', 'translateY(' + _elTransform.transform.translateY + 'px)', 'translateZ(' + _elTransform.transform.translateZ + 'px)', 'scaleX(' + _elTransform.transform.scaleX + ')', 'scaleY(' + _elTransform.transform.scaleY + ')', 'rotateX(' + _elTransform.transform.rotateX + 'deg)', 'rotateY(' + _elTransform.transform.rotateY + 'deg)', 'rotateZ(' + _elTransform.transform.rotateZ + 'deg)'].join(' ');
                  } else {

                    switch (property) {
                      case 'lottie-progress':
                        // for lottie
                        if (typeof el.setProgress == 'function') {
                          el.setProgress(val);
                        }
                        break;
                    }
                  }
                }
              }, {
                key: 'destroy',
                value: function destroy() {
                  this._eventHandler.destroy();
                }
              }]);

              return Binding;
            }();

            module.exports = {
              _bindingInstances: [],
              /**
               * 绑定
               * @param options 参数
               * @example
               {
                 anchor:blockRef,
                 eventType:'pan',
                 props: [
                 {
                   element:blockRef,
                   property:'transform.translateX',
                   expression:{
                     origin:"x+1",
                     transformed:"{\"type\":\"+\",\"children\":[{\"type\":\"Identifier\",\"value\":\"x\"},{\"type\":\"NumericLiteral\",\"value\":1}]}"
                   }
                 }
                ]
               }
               */
              bind: function bind(options) {
                var _this = this;

                var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

                if (!options) {
                  throw new Error('should pass options for binding');
                }
                var existInstances = _simpleLodash2.default.filter(this._bindingInstances, function (instance) {
                  if (options.anchor) {
                    return instance.options.anchor === options.anchor && instance.options.eventType === options.eventType;
                  }
                });
                // 销毁上次实例
                if (existInstances) {
                  _simpleLodash2.default.forEach(existInstances, function (inst) {
                    inst.destroy();
                    _this._bindingInstances = _simpleLodash2.default.dropWhile(_this._bindingInstances, function (bindInst) {
                      return bindInst === inst;
                    });
                  });
                }
                var binding = new Binding(options, callback);
                this._bindingInstances.push(binding);
                return { token: binding.token };
              },

              /**
               *  @param {object} options
               *  @example
               *  {eventType:'pan',
               *   token:self.gesToken}
               */
              unbind: function unbind(options) {
                if (!options) {
                  throw new Error('should pass options for binding');
                }
                var inst = _simpleLodash2.default.find(this._bindingInstances, function (instance) {
                  return instance.options.eventType === options.eventType && instance.token === options.token;
                });
                if (inst) {
                  inst.destroy();
                }
              },
              unbindAll: function unbindAll() {
                this._bindingInstances.forEach(function (inst) {
                  inst.destroy({
                    eventType: inst.options.eventType,
                    token: inst.token
                  });
                });
              },
              getComputedStyle: function getComputedStyle(elRef) {
                if (elRef instanceof HTMLElement) {
                  var computedStyle = window.getComputedStyle(elRef);
                  var style = (0, _utils.matrixToTransformObj)(computedStyle[vendorTransform]);
                  style.opacity = Number(computedStyle.opacity);
                  style['background-color'] = computedStyle['background-color'];
                  style.color = computedStyle.color;
                  style.width = (0, _utils.pxTo750)(computedStyle.width.replace('px', ''));
                  style.height = (0, _utils.pxTo750)(computedStyle.height.replace('px', ''));
                  style['border-top-left-radius'] = (0, _utils.pxTo750)(computedStyle['border-top-left-radius'].replace('px', ''));
                  style['border-top-right-radius'] = (0, _utils.pxTo750)(computedStyle['border-top-right-radius'].replace('px', ''));
                  style['border-bottom-left-radius'] = (0, _utils.pxTo750)(computedStyle['border-bottom-left-radius'].replace('px', ''));
                  style['border-bottom-right-radius'] = (0, _utils.pxTo750)(computedStyle['border-bottom-right-radius'].replace('px', ''));
                  style['margin-top'] = (0, _utils.pxTo750)(computedStyle['margin-top'].replace('px', ''));
                  style['margin-bottom'] = (0, _utils.pxTo750)(computedStyle['margin-bottom'].replace('px', ''));
                  style['margin-left'] = (0, _utils.pxTo750)(computedStyle['margin-left'].replace('px', ''));
                  style['margin-right'] = (0, _utils.pxTo750)(computedStyle['margin-right'].replace('px', ''));
                  style['padding-top'] = (0, _utils.pxTo750)(computedStyle['padding-top'].replace('px', ''));
                  style['padding-bottom'] = (0, _utils.pxTo750)(computedStyle['padding-bottom'].replace('px', ''));
                  style['padding-left'] = (0, _utils.pxTo750)(computedStyle['padding-left'].replace('px', ''));
                  style['padding-right'] = (0, _utils.pxTo750)(computedStyle['padding-right'].replace('px', ''));
                  return style;
                } else {
                  // TODO lottie support
                  // if(typeof elRef.setProgress == 'function') {
                  //   return {
                  // 'lottie-progress':
                  // }
                  // }
                }
              }
            };

            /***/
          },
          /* 9 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            function toNumber(value) {
              return Number(value);
            }

            function toBoolean(value) {
              return !!value;
            }

            function equal(v1, v2) {
              return v1 == v2;
            }

            function strictlyEqual(v1, v2) {
              return v1 === v2;
            }

            function execute(node, scope) {

              var type = node.type;
              var children = node.children;
              switch (type) {
                case 'StringLiteral':
                  return String(node.value);
                case 'NumericLiteral':
                  return parseFloat(node.value);
                case 'BooleanLiteral':
                  return !!node.value;
                case 'Identifier':
                  return scope[node.value];
                case 'CallExpression':
                  var fn = execute(children[0], scope);
                  // console.log('fn:',fn)
                  var args = [];
                  var jsonArguments = children[1].children;
                  for (var i = 0; i < jsonArguments.length; i++) {
                    args.push(execute(jsonArguments[i], scope));
                  }
                  return fn.apply(null, args);
                case '?':
                  if (execute(children[0], scope)) {
                    return execute(children[1], scope);
                  }
                  return execute(children[2], scope);
                case '+':
                  return toNumber(execute(children[0], scope)) + toNumber(execute(children[1], scope));
                case '-':
                  return toNumber(execute(children[0], scope)) - toNumber(execute(children[1], scope));
                case '*':
                  return toNumber(execute(children[0], scope)) * toNumber(execute(children[1], scope));
                case '/':
                  return toNumber(execute(children[0], scope)) / toNumber(execute(children[1], scope));
                case '%':
                  return toNumber(execute(children[0], scope)) % toNumber(execute(children[1], scope));
                case '**':
                  return Math.pow(toNumber(execute(children[0], scope)), toNumber(execute(children[1], scope)));

                case '>':
                  return toNumber(execute(children[0], scope)) > toNumber(execute(children[1], scope));
                case '<':
                  return toNumber(execute(children[0], scope)) < toNumber(execute(children[1], scope));
                case '>=':
                  return toNumber(execute(children[0], scope)) >= toNumber(execute(children[1], scope));
                case '<=':
                  return toNumber(execute(children[0], scope)) <= toNumber(execute(children[1], scope));

                case '==':
                  return equal(execute(children[0], scope), execute(children[1], scope));
                case '===':
                  return strictlyEqual(execute(children[0], scope), execute(children[1], scope));
                case '!=':
                  return !equal(execute(children[0], scope), execute(children[1], scope));
                case '!==':
                  return !strictlyEqual(execute(children[0], scope), execute(children[1], scope));

                case '&&':
                  var result = void 0;
                  result = execute(children[0], scope);
                  if (!toBoolean(result)) return result;
                  return execute(children[1], scope);
                case '||':
                  result = execute(children[0], scope);
                  if (toBoolean(result)) return result;
                  return execute(children[1], scope);
                case '!':
                  return !toBoolean(execute(children[0], scope));

              }
              return null;
            }

            exports.default = {
              execute: execute
            };

            /***/
          },
          /* 10 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.ScrollHandler = exports.TimingHandler = exports.OrientationHandler = exports.PanHandler = undefined;

            var _pan = __webpack_require__(11);

            var _pan2 = _interopRequireDefault(_pan);

            var _orientation = __webpack_require__(13);

            var _orientation2 = _interopRequireDefault(_orientation);

            var _timing = __webpack_require__(16);

            var _timing2 = _interopRequireDefault(_timing);

            var _scroll = __webpack_require__(17);

            var _scroll2 = _interopRequireDefault(_scroll);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            exports.PanHandler = _pan2.default;
            exports.OrientationHandler = _orientation2.default;
            exports.TimingHandler = _timing2.default;
            exports.ScrollHandler = _scroll2.default;

            /***/
          },
          /* 11 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
              }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
            }();

            var _pan = __webpack_require__(12);

            var _pan2 = _interopRequireDefault(_pan);

            var _common = __webpack_require__(3);

            var _common2 = _interopRequireDefault(_common);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            function _possibleConstructorReturn(self, call) {
              if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
              }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var PanHandler = function (_CommonHandler) {
              _inherits(PanHandler, _CommonHandler);

              function PanHandler(binding) {
                _classCallCheck(this, PanHandler);

                var _this = _possibleConstructorReturn(this, (PanHandler.__proto__ || Object.getPrototypeOf(PanHandler)).call(this, binding));

                _this._onPan = function (e) {
                  var x = e.deltaX;
                  var y = e.deltaY;
                  var _this$binding$options = _this.binding.options.props,
                      props = _this$binding$options === undefined ? [] : _this$binding$options;

                  props.forEach(function (prop) {
                    var element = prop.element,
                        property = prop.property,
                        expression = prop.expression;

                    var transformed = JSON.parse(expression.transformed);
                    var val = _this.binding.getValue({ x: x, y: y }, transformed);
                    _this.binding.setProperty(element, property, val);
                  });
                };

                _this._onPanStart = function () {
                  _this.binding.callback({ deltaX: 0, state: 'start', deltaY: 0 });
                };

                _this._onPanEnd = function (e) {
                  _this.binding.callback({ deltaX: parseInt(e.deltaX), state: 'end', deltaY: parseInt(e.deltaY) });
                };

                var anchor = binding.options.anchor;

                var panGesture = _this.panGesture = new _pan2.default(anchor, binding.options.options);
                panGesture.on('pan', _this._onPan);
                panGesture.on('panstart', _this._onPanStart);
                panGesture.on('panend', _this._onPanEnd);
                return _this;
              }

              _createClass(PanHandler, [{
                key: 'destroy',
                value: function destroy() {
                  var panGesture = this.panGesture;
                  panGesture.off('pan', this._onPan);
                  panGesture.off('panstart', this._onPanStart);
                  panGesture.off('panend', this._onPanEnd);
                  panGesture.destroy();
                }
              }]);

              return PanHandler;
            }(_common2.default);

            exports.default = PanHandler;
            ;

            /***/
          },
          /* 12 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
              }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
            }();

            var _simpleLodash = __webpack_require__(1);

            var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

            var _objectAssign = __webpack_require__(0);

            var _objectAssign2 = _interopRequireDefault(_objectAssign);

            var _utils = __webpack_require__(2);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            var abs = Math.abs;

            var DEFAULT_CONFIG = {
              thresholdX: 10,
              thresholdY: 10,
              touchAction: 'auto',
              touchActionRatio: 1 / 2
            };

            var PanGesture = function () {
              function PanGesture(el, config) {
                var _this = this;

                _classCallCheck(this, PanGesture);

                this.startX = null;
                this.startY = null;
                this.panStartX = null;
                this.panStartY = null;
                this.deltaX = 0;
                this.deltaY = 0;
                this.events = {
                  'panstart': [],
                  'pan': [],
                  'panend': [],
                  'pancancel': []
                };

                this.onTouchStart = function (e) {
                  // e.preventDefault();
                };

                this.handlePanStart = function (e) {
                  e.preventDefault();
                  if (_this.panStartX === null || _this.panStartY === null) {
                    _this.panStartX = (0, _utils.pxTo750)(e.touches[0].pageX);
                    _this.panStartY = (0, _utils.pxTo750)(e.touches[0].pageY);
                    _this.events.panstart.forEach(function (handler) {
                      handler(e);
                    });
                    return;
                  }
                };

                this.onTouchMove = function (e) {
                  var _config = _this.config,
                      thresholdX = _config.thresholdX,
                      thresholdY = _config.thresholdY,
                      touchAction = _config.touchAction,
                      touchActionRatio = _config.touchActionRatio;

                  if (_this.startX === null || _this.startY === null) {
                    _this.startX = e.touches[0].pageX;
                    _this.startY = e.touches[0].pageY;
                  }
                  var dx = e.touches[0].pageX - _this.startX;
                  var dy = e.touches[0].pageY - _this.startY;

                  switch (touchAction) {
                    case 'auto':
                      e.preventDefault();
                      if (abs(dx) >= thresholdX || abs(dy) >= thresholdY) {
                        _this.handlePanStart(e);
                      }
                      break;
                    case 'pan-x':
                      if (abs(dx) >= thresholdX && abs(dy / dx) < touchActionRatio && abs(dy) < thresholdY) {
                        _this.handlePanStart(e);
                      }
                      break;
                    case 'pan-y':
                      if (abs(dy) >= thresholdY && abs(dx / dy) < touchActionRatio && abs(dx) < thresholdX) {
                        _this.handlePanStart(e);
                      }
                      break;
                  }

                  if (_this.panStartX !== null && _this.panStartY !== null) {
                    switch (touchAction) {
                      case 'auto':
                        _this.deltaX = (0, _utils.pxTo750)(e.touches[0].pageX) - _this.panStartX;
                        _this.deltaY = (0, _utils.pxTo750)(e.touches[0].pageY) - _this.panStartY;
                        break;
                      case 'pan-x':
                        _this.deltaX = (0, _utils.pxTo750)(e.touches[0].pageX) - _this.panStartX;
                        _this.deltaY = 0;
                        break;
                      case 'pan-y':
                        _this.deltaX = 0;
                        _this.deltaY = (0, _utils.pxTo750)(e.touches[0].pageY) - _this.panStartY;
                        break;
                    }
                    e.deltaX = _this.deltaX;
                    e.deltaY = _this.deltaY;
                    _this.events.pan.forEach(function (handler) {
                      handler(e);
                    });
                  }
                };

                this.onTouchEnd = function (e) {
                  e.deltaX = _this.deltaX;
                  e.deltaY = _this.deltaY;
                  _this.events.panend.forEach(function (handler) {
                    handler(e);
                  });
                };

                this.onTouchCancel = function (e) {
                  e.deltaX = _this.deltaX;
                  e.deltaY = _this.deltaY;
                  _this.events.pancancel.forEach(function (handler) {
                    handler(e);
                  });
                };

                this.el = el;
                this.config = (0, _objectAssign2.default)(DEFAULT_CONFIG, config);
                this.el.addEventListener('touchstart', this.onTouchStart);
                this.el.addEventListener('touchmove', this.onTouchMove);
                this.el.addEventListener('touchend', this.onTouchEnd);
                this.el.addEventListener('touchcancel', this.onTouchCancel);
              }

              _createClass(PanGesture, [{
                key: 'on',
                value: function on(fn, handler) {
                  if (!this.events[fn]) return;
                  this.events[fn].push(handler);
                }
              }, {
                key: 'destroy',
                value: function destroy() {
                  this.el.removeEventListener('touchstart', this.onTouchStart);
                  this.el.removeEventListener('touchmove', this.onTouchMove);
                  this.el.removeEventListener('touchend', this.onTouchEnd);
                  this.el.removeEventListener('touchcancel', this.onTouchCancel);
                  this.offAll();
                  this.startX = null;
                  this.startY = null;
                  this.panStartX = null;
                  this.panStartY = null;
                }
              }, {
                key: 'offAll',
                value: function offAll() {
                  var _this2 = this;

                  _simpleLodash2.default.map(this.events, function (handlers, fn) {
                    _simpleLodash2.default.forEach(handlers, function (handler) {
                      _this2.off(fn, handler);
                    });
                  });
                }
              }, {
                key: 'off',
                value: function off(fn, handler) {
                  if (!fn) return;
                  if (fn && this.events[fn] && this.events[fn].length) {
                    if (!handler) return;
                    var h = _simpleLodash2.default.find(this.events[fn], function (o) {
                      return o === handler;
                    });
                    var i = _simpleLodash2.default.findIndex(this.events[fn], function (o) {
                      return o === handler;
                    });
                    if (h) {
                      this.events[fn].splice(i, 1);
                    }
                  }
                }
              }]);

              return PanGesture;
            }();

            exports.default = PanGesture;

            /***/
          },
          /* 13 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
              }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
            }();

            var _vector = __webpack_require__(5);

            var _vector2 = _interopRequireDefault(_vector);

            var _orientation_controls = __webpack_require__(14);

            var _orientation_controls2 = _interopRequireDefault(_orientation_controls);

            var _math = __webpack_require__(7);

            var _math2 = _interopRequireDefault(_math);

            var _animationUtil = __webpack_require__(4);

            var _common = __webpack_require__(3);

            var _common2 = _interopRequireDefault(_common);

            var _objectAssign = __webpack_require__(0);

            var _objectAssign2 = _interopRequireDefault(_objectAssign);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            function _possibleConstructorReturn(self, call) {
              if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
              }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var OrientationHandler = function (_CommonHandler) {
              _inherits(OrientationHandler, _CommonHandler);

              function OrientationHandler(binding) {
                _classCallCheck(this, OrientationHandler);

                var _this = _possibleConstructorReturn(this, (OrientationHandler.__proto__ || Object.getPrototypeOf(OrientationHandler)).call(this, binding));

                _this.binding = null;
                _this.control = null;
                _this.start = null;
                _this.timer = null;

                _this._onOrientation = function (e) {
                  var props = _this.binding.options.props;

                  props.forEach(function (prop) {
                    var element = prop.element,
                        property = prop.property,
                        expression = prop.expression;

                    var transformed = JSON.parse(expression.transformed);
                    var val = _this.binding.getValue(e, transformed);
                    _this.binding.setProperty(element, property, val);
                  });
                };

                _this.options = (0, _objectAssign2.default)({
                  sceneType: '2d'
                }, binding.options.options);
                _this.binding = binding;
                if (_this.options.sceneType.toLowerCase() === '2d') {
                  _this.controlX = new _orientation_controls2.default({ beta: 90 });
                  _this.controlY = new _orientation_controls2.default({ gamma: 90, alpha: 0 });
                } else {
                  _this.control = new _orientation_controls2.default();
                }
                _this.run();
                return _this;
              }

              _createClass(OrientationHandler, [{
                key: 'run',
                value: function run() {
                  var _this2 = this;

                  // 2d场景
                  if (this.options.sceneType.toLowerCase() === '2d') {
                    this.controlX.update();
                    this.controlY.update();
                    var _controlX$deviceOrien = this.controlX.deviceOrientation,
                        alpha = _controlX$deviceOrien.alpha,
                        beta = _controlX$deviceOrien.beta,
                        gamma = _controlX$deviceOrien.gamma,
                        dalpha = _controlX$deviceOrien.dalpha,
                        dbeta = _controlX$deviceOrien.dbeta,
                        dgamma = _controlX$deviceOrien.dgamma;

                    var vecX = new _vector2.default(0, 0, 1);
                    vecX.applyQuaternion(this.controlX.quaternion);
                    var vecY = new _vector2.default(0, 1, 1);
                    vecY.applyQuaternion(this.controlY.quaternion);
                    // 0,180 -> -90,90
                    var x = _math2.default.radToDeg(Math.acos(vecX.x)) - 90;
                    var y = _math2.default.radToDeg(Math.acos(vecY.y)) - 90;
                    if (!this.start && !isNaN(x) && !isNaN(y)) {
                      this.start = {
                        x: x,
                        y: y
                      };
                    }
                    if (this.start) {
                      var dx = x - this.start.x;
                      var dy = y - this.start.y;
                      this._onOrientation({
                        x: x, y: y, dx: dx, dy: dy, alpha: alpha, beta: beta, gamma: gamma, dalpha: dalpha, dbeta: dbeta, dgamma: dgamma
                      });
                    }
                  } else {
                    // 3d场景
                    this.control.update();
                    var _control$deviceOrient = this.control.deviceOrientation,
                        _alpha = _control$deviceOrient.alpha,
                        _beta = _control$deviceOrient.beta,
                        _gamma = _control$deviceOrient.gamma,
                        _dalpha = _control$deviceOrient.dalpha,
                        _dbeta = _control$deviceOrient.dbeta,
                        _dgamma = _control$deviceOrient.dgamma;
                    var _control$quaternion = this.control.quaternion,
                        _x = _control$quaternion.x,
                        _y = _control$quaternion.y,
                        z = _control$quaternion.z;

                    this._onOrientation({ alpha: _alpha, beta: _beta, gamma: _gamma, dalpha: _dalpha, dbeta: _dbeta, dgamma: _dgamma, x: _x, y: _y, z: z });
                  }
                  this.timer = (0, _animationUtil.raf)(function () {
                    _this2.run();
                  });
                }
              }, {
                key: 'destroy',
                value: function destroy() {
                  if (this.timer) {
                    (0, _animationUtil.cancelRAF)(this.timer);
                    this.timer = null;
                  }
                }
              }]);

              return OrientationHandler;
            }(_common2.default);

            exports.default = OrientationHandler;

            /***/
          },
          /* 14 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _quaternion = __webpack_require__(6);

            var _quaternion2 = _interopRequireDefault(_quaternion);

            var _vector = __webpack_require__(5);

            var _vector2 = _interopRequireDefault(_vector);

            var _euler = __webpack_require__(15);

            var _euler2 = _interopRequireDefault(_euler);

            var _math = __webpack_require__(7);

            var _math2 = _interopRequireDefault(_math);

            var _objectAssign = __webpack_require__(0);

            var _objectAssign2 = _interopRequireDefault(_objectAssign);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function isNaNOrUndefined(n) {
              return n === undefined || isNaN(n) || n === null;
            }

            function DeviceOrientationControls(object) {
              var scope = this;
              this.object = (0, _objectAssign2.default)({
                alphaOffsetAngle: 0,
                betaOffsetAngle: 0,
                gammaOffsetAngle: 0
              }, object);

              this.alphaOffsetAngle = this.object.alphaOffsetAngle;
              this.betaOffsetAngle = this.object.betaOffsetAngle;
              this.gammaOffsetAngle = this.object.gammaOffsetAngle;

              this.quaternion = new _quaternion2.default(0, 0, 0, 1);
              this.enabled = true;
              this.deviceOrientation = {};
              this.screenOrientation = 0;
              this.start = null;

              this.recordsAlpha = [];

              function formatRecords(records, threshold) {
                var l = records.length;
                var times = 0;
                if (l > 1) {
                  for (var i = 0; i < l; i++) {
                    if (records[i - 1] != undefined && records[i] != undefined) {
                      if (records[i] - records[i - 1] < -threshold / 2) {
                        times = Math.floor(records[i - 1] / threshold) + 1;
                        records[i] = records[i] + times * threshold;
                      }
                      if (records[i] - records[i - 1] > threshold / 2) {
                        records[i] = records[i] - threshold;
                      }
                    }
                  }
                }
                return records;
              }

              var onDeviceOrientationChangeEvent = function onDeviceOrientationChangeEvent(e) {

                var alpha = e.alpha;
                var beta = e.beta;
                var gamma = e.gamma;
                var recordsAlpha = scope.recordsAlpha;

                if (!scope.start) {
                  scope.start = {
                    alpha: alpha,
                    beta: beta,
                    gamma: gamma
                  };
                }
                recordsAlpha.push(alpha);
                if (recordsAlpha.length > 5) {
                  recordsAlpha = formatRecords(recordsAlpha, 360);
                  recordsAlpha.shift();
                }

                var formatAlpha = (recordsAlpha[recordsAlpha.length - 1] - scope.start.alpha) % 360;
                if (!isNaNOrUndefined(alpha) && !isNaNOrUndefined(beta) && !isNaNOrUndefined(gamma)) {
                  scope.enabled = true;
                }

                scope.deviceOrientation = {
                  alpha: alpha,
                  beta: beta,
                  gamma: gamma,
                  formatAlpha: formatAlpha,
                  dalpha: alpha - scope.start.alpha,
                  dbeta: beta - scope.start.beta,
                  dgamma: gamma - scope.start.gamma
                };
              };

              var onScreenOrientationChangeEvent = function onScreenOrientationChangeEvent() {

                scope.screenOrientation = window.orientation || 0;
              };

              // The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

              var setObjectQuaternion = function () {

                var zee = new _vector2.default(0, 0, 1);

                var euler = new _euler2.default();

                var q0 = new _quaternion2.default();

                var q1 = new _quaternion2.default(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5)); // - PI/2 around the x-axis

                return function (quaternion, alpha, beta, gamma, orient) {

                  euler.set(beta, alpha, -gamma, 'YXZ'); // 'ZXY' for the device, but 'YXZ' for us

                  quaternion.setFromEuler(euler); // orient the device

                  quaternion.multiply(q1); // camera looks out the back of the device, not the top

                  quaternion.multiply(q0.setFromAxisAngle(zee, -orient)); // adjust for screen orientation
                };
              }();

              this.connect = function () {
                onScreenOrientationChangeEvent(); // run once on load
                window.addEventListener('orientationchange', onScreenOrientationChangeEvent, false);
                window.addEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);
              };

              this.disconnect = function () {
                window.removeEventListener('orientationchange', onScreenOrientationChangeEvent, false);
                window.removeEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);
                scope.enabled = false;
              };

              this.update = function () {
                if (scope.enabled === false) return;
                var alpha = !isNaNOrUndefined(scope.deviceOrientation.formatAlpha) ? _math2.default.degToRad(!isNaNOrUndefined(scope.object.alpha) ? scope.object.alpha : scope.deviceOrientation.formatAlpha + scope.alphaOffsetAngle) : 0; // Z
                var beta = !isNaNOrUndefined(scope.deviceOrientation.beta) ? _math2.default.degToRad(!isNaNOrUndefined(scope.object.beta) ? scope.object.beta : scope.deviceOrientation.beta + scope.betaOffsetAngle) : 0; // X'
                var gamma = !isNaNOrUndefined(scope.deviceOrientation.gamma) ? _math2.default.degToRad(!isNaNOrUndefined(scope.object.gamma) ? scope.object.gamma : scope.deviceOrientation.gamma + scope.gammaOffsetAngle) : 0; // Y''
                var orient = scope.screenOrientation ? _math2.default.degToRad(scope.screenOrientation) : 0; // O
                setObjectQuaternion(scope.quaternion, alpha, beta, gamma, orient);
              };

              this.updateAlphaOffsetAngle = function (angle) {
                this.alphaOffsetAngle = angle;
                this.update();
              };
              this.updateBetaOffsetAngle = function (angle) {
                this.betaOffsetAngle = angle;
                this.update();
              };
              this.updateGammaOffsetAngle = function (angle) {
                this.gammaOffsetAngle = angle;
                this.update();
              };

              this.dispose = function () {
                this.disconnect();
              };

              this.connect();
            };

            exports.default = DeviceOrientationControls;

            /***/
          },
          /* 15 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
              }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
            }();

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            var Euler = function () {
              function Euler(x, y, z, order) {
                _classCallCheck(this, Euler);

                this.isEuler = true;
                this._x = 0;
                this._y = 0;
                this._z = 0;

                this._x = x || 0;
                this._y = y || 0;
                this._z = z || 0;
                this._order = order || Euler.DefaultOrder;
              }

              _createClass(Euler, [{
                key: 'set',
                value: function set(x, y, z, order) {
                  this._x = x;
                  this._y = y;
                  this._z = z;
                  this._order = order || this._order;
                  this.onChangeCallback();
                  return this;
                }
              }, {
                key: 'onChange',
                value: function onChange(callback) {
                  this.onChangeCallback = callback;
                  return this;
                }
              }, {
                key: 'onChangeCallback',
                value: function onChangeCallback() {}
              }, {
                key: 'order',
                get: function get() {
                  return this._order;
                },
                set: function set(value) {
                  this._order = value;
                  this.onChangeCallback();
                }
              }]);

              return Euler;
            }();

            Euler.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
            Euler.DefaultOrder = 'XYZ';
            exports.default = Euler;

            /***/
          },
          /* 16 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _extends = Object.assign || function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }return target;
            };

            var _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
              }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
            }();

            var _animationUtil = __webpack_require__(4);

            var _animationUtil2 = _interopRequireDefault(_animationUtil);

            var _common = __webpack_require__(3);

            var _common2 = _interopRequireDefault(_common);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            function _possibleConstructorReturn(self, call) {
              if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
              }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var TimingHandler = function (_CommonHandler) {
              _inherits(TimingHandler, _CommonHandler);

              function TimingHandler(binding) {
                _classCallCheck(this, TimingHandler);

                var _this = _possibleConstructorReturn(this, (TimingHandler.__proto__ || Object.getPrototypeOf(TimingHandler)).call(this, binding));

                var _this$binding$options = _this.binding.options,
                    _this$binding$options2 = _this$binding$options.props,
                    props = _this$binding$options2 === undefined ? [] : _this$binding$options2,
                    exitExpression = _this$binding$options.exitExpression;

                props.forEach(function (prop) {
                  var expression = prop.expression;

                  if (expression && expression.transformed && typeof expression.transformed === 'string') {
                    expression.transformed = JSON.parse(expression.transformed);
                  }
                });

                var exitTransformed = void 0;
                if (exitExpression && exitExpression.transformed) {
                  exitTransformed = JSON.parse(exitExpression.transformed);
                }

                var animation = _this.animation = new _animationUtil2.default({
                  duration: Infinity,
                  easing: 'linear',
                  onStart: function onStart() {
                    _this.binding.callback({ state: 'start', t: 0 });
                  },
                  onRun: function onRun(e) {
                    if (exitTransformed && _this.binding.getValue({ t: e.t }, exitTransformed)) {
                      _this.animation.stop();
                    }
                    props.forEach(function (prop) {
                      _this.animate(_extends({
                        exitTransformed: exitTransformed,
                        t: e.t
                      }, prop));
                    });
                  },
                  onStop: function onStop(e) {
                    _this.binding.callback({ state: 'exit', t: e.t - 1000 / 60 });
                  }
                });
                animation.run();
                return _this;
              }

              _createClass(TimingHandler, [{
                key: 'animate',
                value: function animate(args) {
                  var element = args.element,
                      property = args.property,
                      expression = args.expression,
                      t = args.t;

                  var value = this.binding.getValue({ t: t }, expression.transformed);
                  this.binding.setProperty(element, property, value);
                }
              }, {
                key: 'destroy',
                value: function destroy() {
                  if (this.animation) {
                    this.animation.stop();
                  }
                }
              }]);

              return TimingHandler;
            }(_common2.default);

            exports.default = TimingHandler;

            /***/
          },
          /* 17 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _createClass = function () {
              function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
              }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
            }();

            var _common = __webpack_require__(3);

            var _common2 = _interopRequireDefault(_common);

            var _utils = __webpack_require__(2);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }

            function _possibleConstructorReturn(self, call) {
              if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
              if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
              }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            function isTurner(prev, now) {

              return prev / now < 0;
            }

            var ScrollHandler = function (_CommonHandler) {
              _inherits(ScrollHandler, _CommonHandler);

              function ScrollHandler(binding) {
                _classCallCheck(this, ScrollHandler);

                var _this = _possibleConstructorReturn(this, (ScrollHandler.__proto__ || Object.getPrototypeOf(ScrollHandler)).call(this, binding));

                _this.dx = 0;
                _this.dy = 0;
                _this.prevX = null;
                _this.prevY = null;
                _this.tx = 0;
                _this.ty = 0;
                _this.tdx = 0;
                _this.tdy = 0;

                _this._onScroll = function (e) {
                  var props = _this.binding.options.props;

                  var callback = _this.binding.callback;
                  var x = (0, _utils.pxTo750)(e.target.scrollLeft);
                  var y = (0, _utils.pxTo750)(e.target.scrollTop);
                  props.forEach(function (prop) {
                    var element = prop.element,
                        property = prop.property,
                        expression = prop.expression;

                    var transformed = JSON.parse(expression.transformed);
                    var val = _this.binding.getValue({
                      x: x,
                      y: y,
                      dx: _this.dx,
                      dy: _this.dy,
                      tdx: _this.tdx,
                      tdy: _this.tdy
                    }, transformed);

                    _this.binding.setProperty(element, property, val);
                  });

                  if (_this.prevX !== null && _this.prevY !== null) {
                    var dx = x - _this.prevX;
                    var dy = y - _this.prevY;
                    var cbParams = {
                      x: x,
                      y: y
                    };
                    // 拐点
                    if (isTurner(_this.dx, dx)) {
                      _this.tx = x;
                      cbParams.state = 'turn';
                    }
                    if (isTurner(_this.dy, dy)) {
                      _this.ty = y;
                      cbParams.state = 'turn';
                    }

                    _this.dx = cbParams.dx = x - _this.prevX;
                    _this.dy = cbParams.dy = y - _this.prevY;
                    _this.tdx = cbParams.tdx = x - _this.tx;
                    _this.tdy = cbParams.tdy = y - _this.ty;
                    if (cbParams.state) {
                      callback(cbParams);
                    }
                  }

                  _this.prevX = x;
                  _this.prevY = y;
                };

                var anchor = binding.options.anchor;

                _this.tx = (0, _utils.pxTo750)(anchor.scrollLeft);
                _this.ty = (0, _utils.pxTo750)(anchor.scrollTop);
                anchor.addEventListener('scroll', _this._onScroll);
                return _this;
              }

              _createClass(ScrollHandler, [{
                key: 'destroy',
                value: function destroy() {
                  var anchor = this.binding.options.anchor;

                  anchor.removeEventListener('scroll', this._onScroll);
                }
              }]);

              return ScrollHandler;
            }(_common2.default);

            exports.default = ScrollHandler;

            /***/
          },
          /* 18 */
          /***/function (module, exports, __webpack_require__) {

            "use strict";
            /**
             Copyright 2018 Alibaba Group
            
             Licensed under the Apache License, Version 2.0 (the "License");
             you may not use this file except in compliance with the License.
             You may obtain a copy of the License at
            
             http://www.apache.org/licenses/LICENSE-2.0
            
             Unless required by applicable law or agreed to in writing, software
             distributed under the License is distributed on an "AS IS" BASIS,
             WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             See the License for the specific language governing permissions and
             limitations under the License.
             */

            Object.defineProperty(exports, "__esModule", {
              value: true
            });

            var _simpleLodash = __webpack_require__(1);

            var _simpleLodash2 = _interopRequireDefault(_simpleLodash);

            var _animationUtil = __webpack_require__(4);

            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }

            // inset function
            function colorToDecimal(hexColor) {
              var hex = hexColor.replace(/'|"|#/g, '');
              return parseInt(hex, 16);
            }

            function decToHex(dec) {
              var hex = dec.toString(16);
              var a = [];
              for (var i = 0; i < 6 - hex.length; i++) {
                a.push('0');
              }
              return a.join('') + hex;
            }

            function parseColor(hexColor) {
              var hex = hexColor.replace(/'|"|#/g, '');
              hex = hex.length === 3 ? [hex[0], hex[0], hex[1], hex[1], hex[2], hex[2]].join('') : hex;
              var r = '' + hex[0] + hex[1];
              var g = '' + hex[2] + hex[3];
              var b = '' + hex[4] + hex[5];
              return {
                r: r,
                g: g,
                b: b,
                dr: colorToDecimal(r),
                dg: colorToDecimal(g),
                db: colorToDecimal(b)
              };
            }

            var Fn = {
              max: Math.max,
              min: Math.min,
              sin: Math.sin,
              cos: Math.cos,
              tan: Math.tan,
              sqrt: Math.sqrt,
              cbrt: Math.cbrt,
              log: Math.log,
              abs: Math.abs,
              atan: Math.atan,
              floor: Math.floor,
              ceil: Math.ceil,
              pow: Math.pow,
              exp: Math.exp,
              PI: Math.PI,
              E: Math.E,
              acos: Math.acos,
              asin: Math.asin,
              sign: Math.sign,
              atan2: Math.atan2,
              round: Math.round,
              rgb: function rgb(r, g, b) {
                return 'rgb(' + parseInt(r) + ',' + parseInt(g) + ',' + parseInt(b) + ')';
              },
              rgba: function rgba(r, g, b, a) {
                return 'rgb(' + parseInt(r) + ',' + parseInt(g) + ',' + parseInt(b) + ',' + a + ')';
              },
              getArgs: function getArgs() {
                return arguments;
              },
              evaluateColor: function evaluateColor(colorFrom, colorTo, percent) {
                percent = percent > 1 ? 1 : percent;
                var from = parseColor(colorFrom);
                var to = parseColor(colorTo);
                var dr = parseInt((to.dr - from.dr) * percent + from.dr);
                var dg = parseInt((to.dg - from.dg) * percent + from.dg);
                var db = parseInt((to.db - from.db) * percent + from.db);
                var resDec = dr * 16 * 16 * 16 * 16 + dg * 16 * 16 + db;
                return '#' + decToHex(resDec);
              }
            };

            // inset all easing functions
            _simpleLodash2.default.map(_animationUtil.Easing, function (v, k) {
              if (k !== 'cubicBezier') {
                Fn[k] = function (t, begin, offset, duration) {
                  t = Math.max(Math.min(t / duration, 1));
                  return v(t) * offset + begin;
                };
              }
            });

            Fn.cubicBezier = function (t, begin, offset, duration, x1, y1, x2, y2) {
              t = Math.max(Math.min(t / duration, 1));
              var epsilon = 1000 / 60 / duration / 4;
              return (0, _animationUtil.Bezier)(x1, y1, x2, y2, epsilon)(t) * offset + begin; // eslint-disable-line
            };

            exports.default = Fn;

            /***/
          }]
          /******/)
        );
      });

      /***/
    }]
    /******/)
  );
});;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goBackAct = goBackAct;
var meta = weex.requireModule('meta');
var dom = weex.requireModule('dom');
var modal = weex.requireModule('modal');

var navigatorObj = weex.requireModule('navigator');
//加载图标字体文件
dom.addRule('fontFace', {
  'fontFamily': 'iconfont',
  'src': "url('https://at.alicdn.com/t/font_678541_5789boqu0k1vpldi.ttf')"
});
meta.setViewport({ width: weex.config.viewport || 750 });
// 
// modal.alert({
// 	message: weex.config.viewport,
// 	duration: 800
// })
// 返回上一级
function goBackAct() {
  navigatorObj.pop({
    'animated': 'true'
  }, function (event) {
    // console.log(event);
  });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(4)
)

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(38)
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
/* 4 */
/***/ (function(module, exports) {

module.exports = {
  "webWrapper": {
    "height": 100
  },
  "tabBar": {
    "height": "40"
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
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

var _progress = __webpack_require__(6);

var _progress2 = _interopRequireDefault(_progress);

var _emojiList = __webpack_require__(10);

var _emojiList2 = _interopRequireDefault(_emojiList);

var _orientation = __webpack_require__(14);

var _orientation2 = _interopRequireDefault(_orientation);

var _ball = __webpack_require__(18);

var _ball2 = _interopRequireDefault(_ball);

var _banList = __webpack_require__(22);

var _banList2 = _interopRequireDefault(_banList);

var _lastSwapList = __webpack_require__(26);

var _lastSwapList2 = _interopRequireDefault(_lastSwapList);

var _testScreen = __webpack_require__(30);

var _testScreen2 = _interopRequireDefault(_testScreen);

var _tabBar = __webpack_require__(34);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    created: function created() {},
    components: { progress: _progress2.default, emojiList: _emojiList2.default, orientation: _orientation2.default, ball: _ball2.default, banList: _banList2.default, lsatSwapList: _lastSwapList2.default, testSrceen: _testScreen2.default, topBar: _tabBar2.default },
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
//
//
//
//

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(2);

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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(11)
)

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(13)
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
/* 11 */
/***/ (function(module, exports) {

module.exports = {
  "list": {
    "flexDirection": "column",
    "overflowY": "hidden"
  },
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
  "cell": {
    "position": "absolute",
    "height": "70"
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
    "flexDirection": "row",
    "justifyContent": "space-between",
    "height": "70",
    "paddingBottom": "10"
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
    "lineHeight": "60",
    "fontSize": "14"
  },
  "icon": {
    "fontFamily": "iconfont",
    "fontSize": "24"
  },
  "icon-drag": {
    "width": "45",
    "height": "60",
    "lineHeight": "60",
    "paddingRight": "15",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dddddd"
  },
  "dragBox": {
    "opacity": 0.7
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _universalEnv = __webpack_require__(0);

var _weexBindingx = __webpack_require__(1);

var _weexBindingx2 = _interopRequireDefault(_weexBindingx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var animation = weex.requireModule('animation');
var dom = weex.requireModule('dom');
var modal = weex.requireModule('modal');
var navigatorObj = weex.requireModule('navigator');

function getEl(el) {
    if (typeof el === 'string' || typeof el === 'number') return el;
    return _universalEnv.isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
}
exports.default = {
    data: function data() {
        return {
            emojiList: [{
                title: 'HelloTalk手宝宝0', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id: 0
            }, {
                title: 'HelloTalk手宝宝1', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id: 1
            }, {
                title: 'HelloTalk手宝宝2', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id: 2
            }, {
                title: 'HelloTalk手宝宝3', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id: 3
            }, {
                title: 'HelloTalk手宝宝4', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id: 4
            }, {
                title: 'HelloTalk手宝宝5', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id: 5
            }, {
                title: 'HelloTalk手宝宝6', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id: 6
            }],
            copyList: [], // emojiList
            cellDoms: [], // 保存cell 的dom信息
            topArr: [], // 保存cell的top值
            posArr: [], // 在list里的顺序
            movingIndex: null, // 当前移动的list的索引
            touchIndex: null,
            startY: 0, // 按下时的y坐标
            endY: 0, // 抬起时的y坐标
            curItem: null,
            dragBoxTop: 0, // 辅助用的拖动盒子的top值
            changeY: 0, // 拖动盒子在Y轴上的变化值
            size: {},
            lastItem: null,
            parentY: null, // 父容器距离页面顶部的距离
            parentTop: 44, // list的父容器距离页面顶部的距离
            showDragBox: false, // 控制拖动盒子的显示与隐藏 
            cellHeight: 70
        };
    },
    created: function created() {
        this.topArr = this.emojiList.map(function (item, index) {
            return index * 70;
        });
        this.posArr = this.topArr.map(function (item) {
            return item;
        });
    },

    computed: {
        isWeb: function isWeb() {
            return weex.config.env.platform === 'Web';
        },
        isAndroid: function isAndroid() {
            return weex.config.env.platform === 'android';
        },
        fullWidth: function fullWidth() {
            //百分比宽度
            return this.isWeb ? '100%' : weex.config.viewport + 'px';
        }
    },
    methods: {
        getBoundingClientRect: function getBoundingClientRect(ele) {
            var _this = this;

            return dom.getComponentRect(ele, function (option) {
                _this.size = option.size;
            });
        },
        ontouchstart: function ontouchstart(n) {
            var e = arguments[1][0];
            e.stopPropagation();
            this.curItem = {
                title: '', imgUrl: ''
                //. android获取pageY为相对该dom的值
            };var _y = e.changedTouches[0].pageY;
            this.startY = _y;
            // 父容器距离页面顶部的距离 weex环境下直接获取e.changedTouches[0].pageY
            this.preY = this.isAndroid ? _y : _y - this.parentY;
            console.log('n:' + n);
            // console.log(this.cellDoms[n]);
            this.movingIndex = this._getIdByEle(this.cellDoms[n]);
            this.touchIndex = n;
            var self = this;
            //  modal.alert({
            //   message: self.movingIndex
            // })
            if (this.movingIndex != -1) {
                // this.dragBoxTop  = this._getTopValueYById(this.movingIndex);
                this.dragBoxTop = this._getDragBoxTopByEle(this.cellDoms[n]);
                this.curItem = this.emojiList[n];
                this.showDragBox = true;
            }
        },
        ontouchmove: function ontouchmove(e) {
            if (this.curItem == null) return;
            var _y = this.isAndroid ? e.changedTouches[0].pageY : e.changedTouches[0].pageY - this.parentY;
            this.changeY = e.changedTouches[0].pageY - this.startY;
            var collideIndex = this._getIdByPosition(_y);
            // if(collideIndex!=-1) {
            //   this.move(this.$refs.dragBox,this.changeY);
            // }
        },
        ontouchend: function ontouchend(e) {
            if (this.movingIndex == -1) return;
            this.endY = this.isAndroid ? e.changedTouches[0].pageY : e.changedTouches[0].pageY - this.parentY;
            this.showDragBox = false;
            // 拖动结束，交换两个item的位置
            var collideIndex = this._getIdByPosition(this.endY);
            var curIndex = this.movingIndex;
            if (collideIndex !== curIndex && collideIndex !== -1) {
                var _ref = [this.topArr[collideIndex], this.topArr[curIndex]];
                this.topArr[curIndex] = _ref[0];
                this.topArr[collideIndex] = _ref[1];
            }

            // this.emojiList = JSON.parse(JSON.stringify(this.copyList));
            this.movingIndex = null;
            this.touchIndex = null;
            this.curItem = null;
        },
        move: function move(ele, changeY) {
            animation.transition(ele, {
                styles: {
                    transform: 'translate(0, ' + changeY + 'px)',
                    transformOrigin: 'center center'
                },
                duration: 60, //ms
                timingFunction: 'linear',
                delay: 0 //ms
            }, function () {});
        },
        _getIdByPosition: function _getIdByPosition(pageY) {
            // 根据触摸点在列表区域的Y坐标获取cell的索引
            var id = -1;
            var height = this.cellHeight;
            pageY = this.isWeb ? pageY / 2 : pageY;
            var maxH = this.posArr[this.posArr.length - 1] + height;
            if (pageY < this.posArr[0] || pageY > maxH) {
                return -1;
            };
            this.topArr.some(function (item, index) {
                if (pageY <= item + height && pageY > item) {
                    id = index;
                    return true;
                }
            });
            return id;
        },
        _getDragBoxTopByEle: function _getDragBoxTopByEle(ele) {
            // 根据位置序号获取对应的top值
            var height = _universalEnv.isWeex ? this.cellHeight : this.cellHeight * 2;
            var id = -1;
            var _top = this.isAndroid ? this.getTopByEle(ele) : this.getTopByEle(ele) - this.parentY;
            _top = _universalEnv.isWeex ? _top : _top / 2;
            this.posArr.some(function (item, index) {
                if (_top == item) {
                    id = index;
                    return true;
                }
            });
            return id * height;
        },
        _getIdByEle: function _getIdByEle(ele) {
            // 根据dom获取top值，再比较top值在数组中的位置，确定当前移动的是哪一个cell
            var id = -1;
            var _top = this.isAndroid ? this.getTopByEle(ele) : this.getTopByEle(ele) - this.parentY;
            _top = _universalEnv.isWeex ? _top : _top / 2;
            // modal.alert({
            //  message: _top
            // })
            this.topArr.some(function (item, index) {
                if (_top == item) {
                    id = index;
                    return true;
                }
            });
            return id;
        },
        getTopByEle: function getTopByEle(ele) {
            var top = 0;
            if (!_universalEnv.isWeex) {
                dom.getComponentRect(ele, function (option) {
                    top = option.size.top;
                });
            } else {
                var c = _weexBindingx2.default.getComputedStyle(ele);
                top = c.translateY;
                // modal.alert({
                //     message: top
                // })
            }

            // console.log(ele);

            return parseInt(top);
        },
        leftMove: function leftMove() {}
    },
    beforeMount: function beforeMount() {},
    mounted: function mounted() {
        this.$nextTick().then(function () {
            if (this.$refs.cell) {
                this.cellDoms = this.$refs.cell.map(function (item) {
                    return item;
                }.bind(this));
            }
            // this.getBoundingClientRect(this.$refs.scroller);
            this.parentY = _universalEnv.isWeex ? this.parentTop : this.getTopByEle(this.$refs.scroller);
            this.copyList = JSON.parse(JSON.stringify(this.emojiList));

            // this.copyList.map(function(item,index){
            //    var obj = {id:item.id}
            //    this.idArr.push(obj);
            // }.bind(this));
        }.bind(this));
    }
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "scroller",
    staticClass: ["list"],
    style: {
      width: _vm.fullWidth,
      height: _vm.isWeb ? _vm.emojiList.length * 70 * 2 + 'px' : _vm.emojiList.length * 70 + 'px'
    },
    on: {
      "touchmove": _vm.ontouchmove,
      "touchend": _vm.ontouchend
    }
  }, [_vm._l((_vm.emojiList), function(item, index) {
    return _c('div', {
      ref: "cell",
      refInFor: true,
      staticClass: ["cell"],
      class: ['cell' + index],
      style: {
        transform: _vm.isWeb ? 'translateY(' + _vm.topArr[index] * 2 + 'px)' : 'translateY(' + _vm.topArr[index] + 'px)',
        width: _vm.fullWidth
      },
      on: {
        "touchstart": _vm.leftMove
      }
    }, [_c('div', {
      staticClass: ["scroller"]
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
    }, [_vm._v(_vm._s(item.title))])]), _c('text', {
      staticClass: ["icon-drag", "icon"],
      on: {
        "touchstart": function($event) {
          _vm.ontouchstart(index, arguments)
        }
      }
    }, [_vm._v("")]), _c('div', {
      staticClass: ["delete"]
    })])])])
  }), (_vm.showDragBox) ? _c('div', {
    ref: "dragBox",
    staticClass: ["dragBox"],
    style: {
      top: _vm.dragBoxTop + 'px',
      transform: 'translateY(' + _vm.changeY + 'px)'
    }
  }, [_c('div', {
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
      "src": _vm.curItem.imgUrl
    }
  })]), _c('div', {
    staticClass: ["emoji-info"]
  }, [_c('text', {
    staticClass: ["emoji-title"]
  }, [_vm._v(_vm._s(_vm.curItem.title))])]), _c('text', {
    staticClass: ["icon-drag", "icon"]
  }, [_vm._v("")]), _c('div', {
    staticClass: ["delete"]
  })])])]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(17)
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
__vue_options__.__file = "/Users/mac/Documents/BLHT/emoji_store/src/components/orientation/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3bef9926"
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
/* 15 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flex": 1
  },
  "box": {
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#BBBBBB",
    "width": "250",
    "height": "250",
    "marginTop": "250",
    "marginLeft": "250",
    "backgroundColor": "#EEEEEE",
    "marginBottom": "500"
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(0);

var _weexBindingx = __webpack_require__(1);

var _weexBindingx2 = _interopRequireDefault(_weexBindingx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function getEl(el) {
  if (typeof el === 'string' || typeof el === 'number') return el;
  return _universalEnv.isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
}

exports.default = {
  data: function data() {
    return {
      x: 0,
      y: 0,
      flag: 0
    };
  },
  mounted: function mounted() {
    this.bind();
  },

  methods: {
    bind: function bind() {
      var box = getEl(this.$refs.box);
      console.log(box);
      _weexBindingx2.default.bind({
        eventType: 'orientation',
        props: [{
          element: box,
          property: 'transform.translateX',
          expression: 'x+0'
        }, {
          element: box,
          property: 'transform.translateY',
          expression: {
            origin: 'y+0'
          }
        }]
      }, function (e) {
        console.log(e);
      });
    },
    ontouchstart: function ontouchstart(event) {
      this.bind();
    }
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    ref: 'box',
    staticClass: ["box"],
    on: {
      "touchstart": _vm.ontouchstart,
      "appear": _vm.onappear
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(19)
)

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(21)
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
__vue_options__.__file = "/Users/mac/Documents/BLHT/emoji_store/src/components/ball/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7b3c1302"
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
/* 19 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flex": 1,
    "backgroundColor": "#eeeeee"
  },
  "box": {
    "marginTop": "300",
    "width": 375,
    "height": 50,
    "backgroundColor": "#651FFF",
    "marginBottom": "10"
  },
  "text": {
    "color": "#ffffff",
    "fontSize": "14",
    "textAlign": "center",
    "lineHeight": "50"
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(0);

var _weexBindingx = __webpack_require__(1);

var _weexBindingx2 = _interopRequireDefault(_weexBindingx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function getEl(el) {
  if (typeof el === 'string' || typeof el === 'number') return el;
  return _universalEnv.isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
}

exports.default = {
  data: function data() {
    return {
      x: 0,
      y: 0,
      lastY: 0,
      isInAnimation: false,
      gesToken: 0,
      opacity: 1,
      moveH: 30 // 设置元素移动30px就改变位置 ,cell的高度+距离下一个的距离 再除以2
    };
  },

  methods: {

    touchStart: function touchStart() {
      var self = this;
      if (this.isInAnimation === true) {
        if (this.gesToken) {
          _weexBindingx2.default.unbind({
            eventType: 'pan',
            token: self.gesToken
          });
          this.gesToken = undefined;
        }
        return;
      }
      var n = 2;
      var my = getEl(this.$refs.my);
      var translate_y_origin = 'y+' + this.y;
      var opacity_y_origin = '1-abs(y)/600';
      var gesTokenObj = _weexBindingx2.default.bind({
        anchor: my,
        eventType: 'pan',
        props: [{
          element: my,
          property: 'transform.translateY',
          expression: translate_y_origin
        }]
      }, function (e) {
        if (e.state === 'end') {
          self.y += e.deltaY; // deltaY是指相对于元素原来位置的y轴上的偏移值
          self.opacity = 1 - Math.abs(e.deltaY) / 600;
          // self.bindTiming(e.deltaY,n);
        }
      });
      self.gesToken = gesTokenObj.token;
    },
    bindTiming: function bindTiming(offsetX, n) {
      this.isInAnimation = true;
      var my = getEl(this.$refs.my);
      var self = this;
      // should equal with timing duration
      var exit_origin = 't>1000';
      var changed_y;
      var final_y;
      var final_opacity;
      var translate_y_origin;
      var shouldDismiss = false;
      var eleHeight = 60;
      console.log('累计：' + self.y);
      console.log(offsetX);
      final_y = offsetX;
      changed_y = offsetX;

      final_opacity = 1;
      shouldDismiss = true;
      translate_y_origin = 'easeOutExpo(t,' + self.y + ',' + changed_y + ',1000)';
      //     if(offsetX > -this.moveH && offsetX < this.moveH){
      // final_y = 0;
      // shouldDismiss = true;
      // changed_y = 0 - self.y;
      // final_opacity = 1;
      // translate_y_origin = `easeOutExpo(t,${self.y},${changed_y},1000)`
      //     }else{
      //     	var index =  Math.floor(offsetX/this.moveH); 
      //     	console.log('偏移来几个item:'+index);
      //     	console.log('最小偏移值：'+-n*eleHeight);
      //     	console.log('offsetX：'+offsetX);
      //     	var changeValue =  index*eleHeight ;
      //     	changeValue = Math.min(changeValue,4*eleHeight);
      //     	changeValue = Math.max(changeValue,-n*eleHeight);
      //     	console.log('changeValue:'+changeValue);
      //     	final_y = changeValue;
      // shouldDismiss = true;
      // changed_y = changeValue;
      // final_opacity = 1;
      // translate_y_origin = `easeOutExpo(t,${self.y},${changed_y},1000)`
      //     }

      // if (self.y >= 0 && self.y <= eleHeight / 2) {
      //   shouldDismiss = false;
      //   final_y = 0;
      //   changed_y = 0 - self.y;
      //   final_opacity = 1;
      //   translate_y_origin = `easeOutElastic(t,${self.y},${changed_y},1000)`
      // } else if (self.y < -eleHeight / 2) {
      //   shouldDismiss = true;
      //   final_y = -eleHeight;
      //   changed_y = -eleHeight - self.y;
      //   final_opacity = 1;
      //   translate_y_origin = `easeOutExpo(t,${self.y},${changed_y},1000)`
      // } else {
      //   final_y = 0;
      //   shouldDismiss = true;
      //   changed_y = 0 - self.y;
      //   final_opacity = 1;
      //   translate_y_origin = `easeOutExpo(t,${self.y},${changed_y},1000)`
      // }
      var changed_opacity = final_opacity - self.opacity;
      var opacity_origin = 'linear(t,0,' + changed_opacity + ',1000)';
      var result = _weexBindingx2.default.bind({
        eventType: 'timing',
        exitExpression: exit_origin,
        props: [{
          element: my,
          property: 'transform.translateY',
          expression: translate_y_origin
        }]

      }, function (e) {
        if (e.state === 'end' || e.state === 'exit') {
          // reset y
          // self.y = final_y;
          console.log('final:' + self.y);
          self.isInAnimation = false;
        }
      });
    }
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    ref: "my",
    staticClass: ["box"],
    on: {
      "touchstart": _vm.touchStart
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("item1")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(23)
)

/* script */
__vue_exports__ = __webpack_require__(24)

/* template */
var __vue_template__ = __webpack_require__(25)
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
__vue_options__.__file = "/Users/mac/Documents/BLHT/emoji_store/src/components/banList/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e68efc3a"
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
/* 23 */
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "marginTop": "100",
    "width": "375",
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "flex-start"
  },
  "dragBox": {
    "opacity": 0.5
  },
  "box": {
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#BBBBBB",
    "width": "375",
    "height": "50",
    "backgroundColor": "#54b79f",
    "position": "absolute"
  },
  "text": {
    "color": "#ffffff",
    "fontSize": "14",
    "textAlign": "center",
    "lineHeight": "50"
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(0);

var _weexBindingx = __webpack_require__(1);

var _weexBindingx2 = _interopRequireDefault(_weexBindingx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var animation = weex.requireModule('animation');
var dom = weex.requireModule('dom');
var modal = weex.requireModule('modal');
function getEl(el) {
  if (typeof el === 'string' || typeof el === 'number') return el;
  return _universalEnv.isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
}

exports.default = {
  created: function created() {
    this.names.map(function (ele, i) {
      this.order.push(i);
    }.bind(this));
  },
  data: function data() {
    return {
      opacity: 1,
      flag: 0,
      y: 0,
      cellList: ['item1', 'item2', 'item3', 'item4'],
      names: ['Android', 'iOS', '前端', '拓展资源', '休息视频'],
      order: [],
      itmes: [],
      movingIndex: null, // 当前移动的item的索引
      startY: 0, // 按下时的y坐标
      endY: 0, // 抬起时的y坐标
      curItem: null, // 当前item的内容   
      dragBoxTop: -120, // 辅助用的拖动盒子的top值
      goalListIndex: null, // 目标item的索引
      changeY: 0, // 拖动盒子在Y轴上的变化值
      size: {},
      lastItem: null,
      parentY: null
    };
  },

  computed: {
    isWeb: function isWeb() {
      return weex.config.env.platform === 'Web';
    }
  },
  methods: {
    getListParentTop: function getListParentTop(ele) {
      var _this = this;

      if (_universalEnv.isWeex) {
        this.parentY = 100;
      } else {
        dom.getComponentRect(ele, function (option) {
          _this.parentY = option.size.top;
        });
      }
    },
    ontouchstart: function ontouchstart() {
      var e = arguments[1][0];
      this.startY = e.changedTouches[0].pageY;
      this.preY = e.changedTouches[0].pageY - this.parentY;
      this.movingIndex = this._getIdByPosition(this.preY);
      // this.dragBoxTop = 500;
      this.curItem = this.names[this.movingIndex];
      this.bind(this.movingIndex);
    },
    bind: function bind(n) {
      var self = this;
      if (this.isInAnimation === true) {
        if (this.gesToken) {
          _weexBindingx2.default.unbind({
            eventType: 'pan',
            token: self.gesToken
          });
          this.gesToken = undefined;
        }
        return;
      }
      console.log(n);
      var my = getEl(this.items[n]);
      var translate_y_origin = 'y+0';
      var gesTokenObj = _weexBindingx2.default.bind({
        anchor: my,
        eventType: 'pan',
        props: [{
          element: my,
          property: 'transform.translateY',
          expression: translate_y_origin
        }]
      }, function (e) {
        if (e.state === 'end') {
          console.log(self.y);
          self.y += e.deltaY; // deltaY是指相对于元素原来位置的y轴上的偏移值
        }
      });
      self.gesToken = gesTokenObj.token;
    },
    _getIdByPosition: function _getIdByPosition(pageY) {
      var id = -1;
      var height = _universalEnv.isWeex ? 50 : 50 * 2;

      if (pageY >= 0 && pageY < height) id = 0;else if (pageY >= height && pageY < height * 2) id = 1;else if (pageY >= height * 2 && pageY < height * 3) id = 2;else if (pageY >= height * 3 && pageY < height * 4) id = 3;else if (pageY >= height * 4 && pageY < height * 5) id = 4;

      return id;
    },
    _getTopValueYById: function _getTopValueYById(id) {
      var height = _universalEnv.isWeex ? 50 : 50 * 2;
      return id * height;
    }
  },
  mounted: function mounted() {
    this.$nextTick().then(function () {
      this.items = this.$refs.box.map(function (item) {
        return item;
      }.bind(this));
      console.log(this.items);
      this.getListParentTop(this.$refs.scroller);
    }.bind(this));
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "scroller",
    staticClass: ["scroller"]
  }, _vm._l((_vm.names), function(item, index) {
    return _c('div', {
      ref: "box",
      refInFor: true,
      staticClass: ["box"],
      class: [_vm.movingIndex == index ? 'movingBox' : ''],
      style: {
        top: _vm.isWeb ? _vm.order[index] * 50 * 2 + 'px' : _vm.order[index] * 50
      },
      on: {
        "touchstart": function($event) {
          _vm.ontouchstart(index, arguments)
        }
      }
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(item))])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(29)
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
__vue_options__.__file = "/Users/mac/Documents/BLHT/emoji_store/src/components/lastSwapList/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5b216707"
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
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "height": "600"
  },
  "dragBox": {
    "opacity": 0.5
  },
  "box": {
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#BBBBBB",
    "width": "375",
    "height": "50",
    "backgroundColor": "#54b79f",
    "position": "absolute"
  },
  "text": {
    "color": "#ffffff",
    "fontSize": "14",
    "textAlign": "center",
    "lineHeight": "50"
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(0);

var _weexBindingx = __webpack_require__(1);

var _weexBindingx2 = _interopRequireDefault(_weexBindingx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var animation = weex.requireModule('animation');
var dom = weex.requireModule('dom');
var modal = weex.requireModule('modal');
var navigatorObj = weex.requireModule('navigator');
function getEl(el) {
  if (typeof el === 'string' || typeof el === 'number') return el;
  return _universalEnv.isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
}
exports.default = {
  created: function created() {
    this.names.map(function (ele, i) {
      this.order.push(i);
    }.bind(this));
  },
  data: function data() {
    return {
      cellList: ['item1', 'item2', 'item3', 'item4'],
      names: ['Android', 'iOS', '前端', '拓展资源', '休息视频'],
      order: [],
      itmes: [],
      movingIndex: null, // 当前移动的list的索引
      startY: 0, // 按下时的y坐标
      endY: 0, // 抬起时的y坐标
      curItem: '',
      dragBoxTop: 0, // 辅助用的拖动盒子的top值
      changeY: 0, // 拖动盒子在Y轴上的变化值
      size: {},
      lastItem: null,
      parentY: null, // 父容器距离页面顶部的距离
      parentTop: 44, // list的父容器距离页面顶部的距离
      showDragBox: false // 控制拖动盒子的显示与隐藏 
    };
  },

  computed: {
    isWeb: function isWeb() {
      return weex.config.env.platform === 'Web';
    },
    isAndroid: function isAndroid() {
      return weex.config.env.platform === 'android';
    }
  },
  methods: {
    getBoundingClientRect: function getBoundingClientRect(ele) {
      var _this = this;

      return dom.getComponentRect(ele, function (option) {
        _this.size = option.size;
      });
    },
    ontouchstart: function ontouchstart(e) {
      this.startY = e.changedTouches[0].pageY;

      // 父容器距离页面顶部的距离 weex环境下直接获取e.changedTouches[0].pageY
      this.preY = this.isAndroid ? e.changedTouches[0].pageY : e.changedTouches[0].pageY - this.parentY;
      // modal.toast({
      //    message: 'preY: '+this.preY,
      //    duration: 500
      //  });

      this.movingIndex = this._getIdByPosition(this.preY);
      if (this.movingIndex != -1) {
        this.dragBoxTop = this._getTopValueYById(this.movingIndex);
        this.curItem = this.names[this.movingIndex];
        this.showDragBox = true;
      }
    },
    ontouchmove: function ontouchmove(e) {
      if (this.curItem == '') return;
      var _y = this.isAndroid ? e.changedTouches[0].pageY : e.changedTouches[0].pageY - this.parentY;
      this.changeY = e.changedTouches[0].pageY - this.startY;
      var collideIndex = this._getIdByPosition(_y);
      // if(this.lastItem!==null) {
      //   animation.transition(this.lastItem,{
      //     styles: {
      //        transform: `scale(1)`,
      //     },
      //     duration: 5,
      //   })
      // }

      // if(collideIndex !== this.movingIndex && collideIndex !== -1) {
      //     let collideItem = this.items[collideIndex];
      //     animation.transition(collideItem,{
      //       styles: {
      //          transform: `scale(1.5)`,
      //       },
      //       duration: 5,
      //     });
      //     this.lastItem = this.items[collideIndex];
      // }
      if (collideIndex != -1) {
        this.move(this.$refs.dragBox, this.changeY);
      }
    },
    ontouchend: function ontouchend(e) {
      this.endY = this.isAndroid ? e.changedTouches[0].pageY : e.changedTouches[0].pageY - this.parentY;
      this.showDragBox = false;
      // 父容器距离页面顶部的距离 weex环境下要手动计算
      var collideIndex = this._getIdByPosition(this.endY);
      // if(this.lastItem!==null) {
      //   animation.transition(this.lastItem,{
      //     styles: {
      //        transform: `scale(1)`,
      //     },
      //     duration: 5,
      //   })
      // }
      if (collideIndex !== this.movingIndex && collideIndex !== -1) {
        var collideItem = this.items[collideIndex];

        var _ref = [this.items[collideIndex], this.items[this.movingIndex]];
        this.items[this.movingIndex] = _ref[0];
        this.items[collideIndex] = _ref[1];
        var _ref2 = [this.names[collideIndex], this.names[this.movingIndex]];
        this.names[this.movingIndex] = _ref2[0];
        this.names[collideIndex] = _ref2[1];

        this.items = this.$refs.box.map(function (item) {
          return item;
        }.bind(this));
        this.movingIndex = collideIndex;
      }
      this.movingIndex = null;
    },
    move: function move(ele, changeY) {
      animation.transition(ele, {
        styles: {
          transform: 'translate(0, ' + changeY + 'px)',
          transformOrigin: 'center center'
        },
        duration: 60, //ms
        timingFunction: 'linear',
        delay: 0 //ms
      }, function () {});
    },
    _getIdByPosition: function _getIdByPosition(pageY) {
      var id = -1;
      var height = _universalEnv.isWeex ? 50 : 50 * 2;
      if (pageY >= 0 && pageY < height) id = 0;else if (pageY >= height && pageY < height * 2) id = 1;else if (pageY >= height * 2 && pageY < height * 3) id = 2;else if (pageY >= height * 3 && pageY < height * 4) id = 3;else if (pageY >= height * 4 && pageY < height * 5) id = 4;
      return id;
    },
    _getTopValueYById: function _getTopValueYById(id) {
      var height = _universalEnv.isWeex ? 50 : 50 * 2;
      return id * height;
    },
    changeAnimation: function changeAnimation(ele, mul) {
      animation.transition(ele, {
        styles: {
          transform: 'scale(' + mul + ')'
        },
        duration: 5
      });
    }
  },
  mounted: function mounted() {
    this.$nextTick().then(function () {
      this.items = this.$refs.box.map(function (item) {
        return item;
      }.bind(this));
      this.getBoundingClientRect(this.$refs.scroller);
      this.parentY = _universalEnv.isWeex ? this.parentTop : this.size.top;
      console.log(weex.config);
    }.bind(this));
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "scroller",
    staticClass: ["scroller"],
    on: {
      "touchstart": _vm.ontouchstart,
      "touchmove": _vm.ontouchmove,
      "touchend": _vm.ontouchend
    }
  }, [_vm._l((_vm.names), function(item, index) {
    return _c('div', {
      ref: "box",
      refInFor: true,
      staticClass: ["box"],
      class: [_vm.movingIndex == index ? 'movingBox' : ''],
      style: {
        top: _vm.isWeb ? index * 50 * 2 + 'px' : index * 50
      }
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(item))])])
  }), (_vm.showDragBox) ? _c('div', {
    ref: "dragBox",
    staticClass: ["box", "dragBox"],
    style: {
      top: _vm.dragBoxTop + 'px'
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v(_vm._s(_vm.curItem))])]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(31)
)

/* script */
__vue_exports__ = __webpack_require__(32)

/* template */
var __vue_template__ = __webpack_require__(33)
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
__vue_options__.__file = "/Users/mac/Documents/BLHT/emoji_store/src/components/testScreen/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2753fcc4"
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
/* 31 */
/***/ (function(module, exports) {

module.exports = {
  "scroller": {
    "height": "600",
    "flex": 1,
    "flexDirection": "column",
    "alignItems": "center"
  },
  "content": {
    "width": "300",
    "height": "300",
    "backgroundColor": "#54b79f"
  }
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _universalEnv = __webpack_require__(0);

var _weexBindingx = __webpack_require__(1);

var _weexBindingx2 = _interopRequireDefault(_weexBindingx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var animation = weex.requireModule('animation');
var dom = weex.requireModule('dom');
var modal = weex.requireModule('modal');
function getEl(el) {
  if (typeof el === 'string' || typeof el === 'number') return el;
  return _universalEnv.isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
}

exports.default = {
  created: function created() {
    this.names.map(function (ele, i) {
      this.order.push(i);
    }.bind(this));
  },
  data: function data() {
    return {
      opacity: 1,
      flag: 0,
      cellList: ['item1', 'item2', 'item3', 'item4'],
      names: ['Android', 'iOS', '前端', '拓展资源', '休息视频'],
      order: [],
      itmes: [],
      movingEle: null,
      movingIndex: null, // 当前移动的list的索引
      startY: 0, // 按下时的y坐标
      endY: 0, // 抬起时的y坐标
      curItem: '',
      dragBoxTop: -120, // 辅助用的拖动盒子的top值
      goalListIndex: null, // 目标list的索引
      changeY: 0, // 拖动盒子在Y轴上的变化值
      size: {},
      lastItem: null,
      parentY: null // 父容器距离页面顶部的距离
    };
  },

  computed: {
    isWeb: function isWeb() {
      return weex.config.env.platform === 'Web';
    }
  },
  methods: {
    getBoundingClientRect: function getBoundingClientRect(ele) {
      var _this = this;

      return dom.getComponentRect(ele, function (option) {
        _this.size = option.size;
      });
    },
    ontouchstart: function ontouchstart(e) {
      this.startY = e.changedTouches[0].screenY;
      // 父容器距离页面顶部的距离 weex环境下直接获取e.changedTouches[0].pageY
      this.preY = e.changedTouches[0].screenY;
      modal.alert({
        message: e.changedTouches[0].pageY,
        duration: 500
      });
    }
  },
  mounted: function mounted() {}
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "scroller",
    staticClass: ["scroller"]
  }, [_c('div', {
    staticClass: ["content"],
    on: {
      "touchstart": _vm.ontouchstart
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(35)
)

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(37)
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
__vue_options__.__file = "/Users/mac/Documents/BLHT/emoji_store/src/components/tabBar/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-009b98be"
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
/* 35 */
/***/ (function(module, exports) {

module.exports = {
  "iosTop": {
    "height": "20",
    "backgroundColor": "#ffffff"
  },
  "ipx-box": {
    "height": "10",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "tabBar": {
    "height": "44",
    "backgroundColor": "#ffffff"
  },
  "title": {
    "lineHeight": "44",
    "textAlign": "center",
    "fontSize": "18",
    "fontWeight": "600",
    "color": "#333333"
  },
  "icons-wrapper": {
    "height": "44",
    "position": "absolute",
    "top": 0,
    "left": 0,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "icons": {
    "flexDirection": "row"
  },
  "icon": {
    "fontFamily": "iconfont",
    "fontSize": "25",
    "lineHeight": "44",
    "width": "35",
    "color": "#626262",
    "textAlign": "center"
  },
  "icon-back": {
    "width": "50"
  },
  "icon-share": {
    "width": "50"
  },
  "icon-punch": {
    "marginRight": "5"
  },
  "operate": {
    "paddingRight": "15",
    "fontSize": "16",
    "color": "#405bd3"
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(2);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
	name: 'tabBar',
	props: {
		title: {
			default: 'Emoji Store'
		}

	},
	data: function data() {
		return {
			icon: {
				back: '\uE601'
			},
			startTime: null,
			editStatus: false
		};
	},

	computed: {
		osName: function osName() {
			//系统
			return WXEnvironment.osName;
		},
		fullWidth: function fullWidth() {
			//全屏宽度
			if (weex.config.env.platform === 'Web') {
				//web平台
				return '100%';
			} else {
				return weex.config.viewport + 'px';
			}
		},
		isIphoneX: function isIphoneX() {
			return weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6';
		}
	},
	methods: {
		backEvent: function backEvent() {
			// 返回
			util.goBackAct();
		}
	},
	mounted: function mounted() {}
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

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["top"],
    style: {
      width: _vm.fullWidth
    }
  }, [_c('div', {
    staticClass: ["tabBar"],
    style: {
      width: _vm.fullWidth
    }
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
    staticClass: ["icons-wrapper"],
    style: {
      width: _vm.fullWidth
    }
  }, [_c('text', {
    staticClass: ["icon", "icon-back"],
    on: {
      "click": _vm.backEvent
    }
  }, [_vm._v(_vm._s(_vm.icon.back))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["home"],
    class: [_vm.isWeb ? 'webWrapper' : ''],
    style: {
      width: _vm.fullWidth
    }
  }, [_c('topBar'), _c('emojiList')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);