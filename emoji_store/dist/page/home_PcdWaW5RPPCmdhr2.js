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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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


/////////////////////////////////////////////////////////////////
//GBridge
/////////////////////////////////////////////////////////////////
var GLog = __webpack_require__(49).GLog;
var GCodec = __webpack_require__(7);

var inWeex = typeof WXEnvironment !== 'undefined';

var debug = true;
var platform;
var canvasModule;

canvasModule = typeof weex !== 'undefined' && weex.requireModule ? weex.requireModule('gcanvas') : typeof __weex_require__ !== 'undefined' ? __weex_require__('@weex-module/gcanvas') : null;

var GBridge = {

    setup: function setup(data) {
        platform = data.platform;
    },

    isIOS: function isIOS() {
        return platform === 1;
    },

    /**
     * 判断是不是浏览器
     *
     **/
    isBrowser: function isBrowser() {
        if (!canvasModule) {
            return true;
        }
        return false;
    },

    callRegisterReattachJSCallback: function callRegisterReattachJSCallback(componentId, cb) {
        if (!inWeex) {
            return;
        }

        if (typeof cb !== 'function') {
            return;
        }

        canvasModule.registerRetachFunction && canvasModule.registerRetachFunction(componentId, cb);
    },

    /**执行render指令*/
    callRender: function callRender(componentId, commands) {
        if (!inWeex) {
            return;
        }
        if (this.isIOS() || this.isBrowser()) {
            // GLog.d('bridge#callrender in iOS');
            canvasModule.render && canvasModule.render(commands, componentId);
        } else {
            if (typeof callGCanvasLinkNative !== 'undefined') {
                // GLog.d('bridge#callGCanvasLinkNative()');
                callGCanvasLinkNative(componentId, 0x20000001, commands);
            } else {
                // GLog.d('bridge#callRender()');
                canvasModule.render && canvasModule.render(commands, componentId);
            }
        }
    },

    callGetImageData: function callGetImageData(componentId, x, y, w, h) {
        if (this.isIOS()) {} else {
            var result = callGCanvasLinkNative(componentId, 0x20000001, "R" + x + "," + y + "," + w + "," + h + ";");
            return { "data": GCodec.Gbase64ToArr(result) };
        }
    },

    /**Android use**/
    callSetup: function callSetup(configObj, componentId, callback) {
        if (!inWeex) {
            return;
        }

        var config = configObj || {};
        //GLog.d('bridge#callRender() commands is ' + commands);
        canvasModule.setup && canvasModule.setup(JSON.stringify(config), componentId, callback);
    },

    /**预加载图片*/
    preLoadImage: function preLoadImage(image, cb) {
        if (!inWeex) {
            return;
        }

        //返回width和height
        //image[src, id]
        canvasModule.preLoadImage(image, function (e) {
            GLog.d('bridge#preLoadImage() callback, e ' + JSON.stringify(e));
            e.url = image[0];
            e.id = image[1];
            cb && cb(e);
        });
    },

    /**绑定纹理*/
    bindImageTexture: function bindImageTexture(componentId, src, callback) {
        if (!inWeex) {
            return;
        }

        canvasModule.bindImageTexture && canvasModule.bindImageTexture(src, componentId, callback);
    },

    /**
     * 获取canvas引用
     * @param ref wx-canvas 引用
     * @param configArray 配置参数
     **/
    callEnable: function callEnable(ref, configArray, callback) {
        if (!inWeex) {
            return;
        }
        var params = {
            componentId: ref,
            config: configArray
        };

        return canvasModule.enable && canvasModule.enable(params);
    },

    callSetDevPixelRatio: function callSetDevPixelRatio(componentId) {
        if (!inWeex) {
            return;
        }
        canvasModule.setDevicePixelRatio && canvasModule.setDevicePixelRatio(componentId);
    },

    /**
     * 获取设备信息(android)
     * @param callback 设备信息
     **/
    getDeviceInfo: function getDeviceInfo(callback) {
        if (!inWeex) {
            return;
        }

        if (this.isBrowser()) {
            //浏览器端不实现
            callback && callback({
                data: { platform: 0 }
            });
        } else {
            canvasModule.getDeviceInfo({}, function (e) {
                GLog.d('bridge#getDeviceInfo() return val:' + JSON.stringify(e));
                callback && callback(e);
            });
        }
    },

    /**
     *
     * 设置context类型,2d或者webgl
     *
     * @param context_type 0代表2d,1代表3d
     * */
    setContextType: function setContextType(componentId, context_type) {
        if (context_type != 0 && context_type != 1) {
            GLog.d('bridge#setContextType(): invalid context type===>' + context_type);
            return;
        }
        GLog.d('bridge#setContextType(): context type is ' + context_type + ' componentId:' + componentId);
        canvasModule.setContextType(context_type, componentId);
    },

    /**
     *
     * 设置日志级别
     * 
     * */
    setLogLevel: function setLogLevel(level) {
        GLog.d('bridge#setLogLevel(): native logLevel ' + level);
        canvasModule.setLogLevel(level);
    },

    /**
     *
     * 设置opengl渲染质量
     *
     * */
    setHiQuality: function setHiQuality(quality) {
        GLog.d('bridge#setHiQuality(): quality: ' + quality);
        canvasModule.setHiQuality(quality);
    },

    resetComponent: function resetComponent(componentId) {
        GLog.d('bridge#resetComponent(): componentId: ' + componentId);
        canvasModule.resetComponent && canvasModule.resetComponent(componentId);
    },

    exeSyncCmd: function exeSyncCmd(componentId, action, args) {
        GLog.d('bridge#exeSyncCmd(): action: ' + action + ',args:' + args);
        return canvasModule.execGcanvaSyncCMD(componentId, action, args);
    },

    callExtendCallNative: function callExtendCallNative(dict) {
        return canvasModule && canvasModule.extendCallNative(dict);
    },

    texImage2D: function texImage2D(componentId, target, level, internalformat, format, type, path) {
        GLog.d('bridge#texImage2D(): ' + path);
        canvasModule.texImage2D && canvasModule.texImage2D(componentId, target, level, internalformat, format, type, path);
    },
    texSubImage2D: function texSubImage2D(componentId, target, level, xoffset, yoffset, format, type, path) {
        GLog.d('bridge#texSubImage2D(): ' + path);
        canvasModule.texSubImage2D && canvasModule.texSubImage2D(componentId, target, level, xoffset, yoffset, format, type, path);
    },
    setAlpha: function setAlpha(componentId, alpha) {
        GLog.d('bridge#setAlpha(): ' + alpha);
        canvasModule.setAlpha && canvasModule.setAlpha(componentId, alpha);
    }
};

module.exports = {
    GBridge: GBridge,
    GLog: GLog
};

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GBridge = __webpack_require__(2).GBridge;
var GHashMap = __webpack_require__(5);

// GCanvasImage
function GCanvasImage() {
  /**
   * The width of the image after it is loaded.
   *
   * @type {number}
   */
  this.width = 0;

  /**
   * The height of the image after it is loaded.
   *
   * @type {number}
   */
  this.height = 0;

  /**
   * A unique id assigned to each image upon creation.
   *
   * @type {number}
   */
  //   this.id = (++GCanvasImage.idCounter);

  // this._id = this.id; // public facing "id" but _id used to internally
  // track image
  this._src = ""; // image source path
  this._complete = true; // "is loading" identifier for complete property
}

/**
 * Iterator for generating id values for GCanvasImage instances
 * internally.
 *
 * @private
 */
GCanvasImage.idCounter = 0;
GCanvasImage.imageMap = new GHashMap();

/**
 * Callback for when an image has successfully loaded a file path assigned
 * to {@link GCanvasImage#src}.
 *
 * @type {function}
 * @name GCanvasImage#onload
 */

/**
 * Callback for when an image has failed to load a file path assigned to
 * {@link GCanvasImage#src}.
 *
 * @type {function}
 * @name GCanvasImage#onerror
 */
GCanvasImage.prototype.removeEventListener = function (type, callback, force) {};

GCanvasImage.prototype.addEventListener = function (type, listener, force) {
  if (type === "load" && typeof listener === 'function') {
    this.onload = listener;
  }

  if (type === "error" && typeof listener === 'function') {
    this.onerror = listener;
  }
};

/**
 * The source property, identifying a URL path to the image's file location.
 * Upon setting this value to a file path value, the file is loaded into the
 * GCanvas plugin. For GCanvas images can be unloaded by setting the
 * src to null or "".
 *
 * @type {string}
 * @name GCanvasImage#src
 * @example var myImage = GCanvas.createImage(); myImage.onload =
 *          function(){ // ... myContext.drawImage(myImage, 0,0,100,100,
 *          0,0,100,100); GCanvas.render(); } myImage.onerror =
 *          function(){ console.log("Could not load image!"); } myImage.src =
 *          "images/spritesheet.jpg";
 */

Object.defineProperty(GCanvasImage.prototype, "src", {
  get: function get() {
    return this._src;
  },
  set: function set(src) {

    if (!src || src === this._src) {
      return;
    }

    this._src = src;

    // Loading
    this.complete = false;

    // callback wrappers
    var me = this;

    var data = GCanvasImage.imageMap.get(src);
    if (data) {
      me.id = data.id;
      me._id = data.id;
      me.complete = true;
      me.width = data.width;
      me.height = data.height;
      var evt = { type: 'load', target: me };
      me.onload && me.onload(evt);
      return;
    }

    this.id = ++GCanvasImage.idCounter;
    this._id = this.id; // public facing "id" but _id used to internally

    GBridge.preLoadImage([src, this.id], function (data) {
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch (err) {}
      }

      if (data.error) {
        var evt = { type: 'error', target: me };
        me.onerror && me.onerror(evt);
      } else {
        me.complete = true;
        me.width = typeof data.width === 'number' ? data.width : 0;
        me.height = typeof data.height === 'number' ? data.height : 0;

        var evt = { type: 'load', target: me };
        me.onload && me.onload(evt);
        GCanvasImage.imageMap.put(src, data);
      }
    });
  }
});

/**
 * False when the image is in the process of loading an image after the src
 * property has been set. True when loading is complete or if src is never
 * set. If an error occurred when attempting to load the image, once the
 * process of loading is complete, despite the error, this value will still
 * become true.
 *
 * @type {boolean}
 * @name GCanvasImage#complete
 */
Object.defineProperty(GCanvasImage.prototype, "complete", {
  get: function get() {
    return this._complete;
  },
  set: function set(value) {
    this._complete = value;
  }
});

GCanvasImage.prototype.tagName = 'img';
GCanvasImage.prototype.getAttribute = function (name) {
  return this[name];
};

module.exports = typeof Image === 'function' ? Image : GCanvasImage;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function GHashMap() {
    /**Map大小**/
    var size = 0;
    /**对象**/
    var entry = new Object();
    /**Map的存put方法**/
    this.put = function (key, value) {
        if (!this.containsKey(key)) {
            size++;
            entry[key] = value;
        }
    };
    /**Map取get方法**/
    this.get = function (key) {
        return this.containsKey(key) ? entry[key] : null;
    };
    /**Map删除remove方法**/
    this.remove = function (key) {
        if (this.containsKey(key) && delete entry[key]) {
            size--;
        }
    };
    /**是否包含Key**/
    this.containsKey = function (key) {
        return key in entry;
    };
    /**是否包含Value**/
    this.containsValue = function (value) {
        for (var prop in entry) {
            if (entry[prop] == value) {
                return true;
            }
        }
        return false;
    };
    /**所有的Value**/
    this.values = function () {
        var values = new Array();
        for (var prop in entry) {
            values.push(entry[prop]);
        }
        return values;
    };
    /**所有的 Key**/
    this.keys = function () {
        var keys = new Array();
        for (var prop in entry) {
            keys.push(prop);
        }
        return keys;
    };
    /**Map size**/
    this.size = function () {
        return size;
    };
    /**清空Map**/
    this.clear = function () {
        size = 0;
        entry = new Object();
    };
}

module.exports = GHashMap;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**

gcanvas.js使用说明:
1、引入gcanvas库
2、调用gcanvas库的createElement(component)接口，创建一个canvas对象。
3、调用canvas对象的getContext(param)，获取用于渲染的context。

扩展用法：
1、对于Android环境，部分机型可能无法运行。建议在页面入口处调用gcanvas库的start(successCallback, errorCallback)函数，进行黑白名单判断。
2、默认每16ms，会自动下发一次渲染指令。某些特殊场景下，希望自行控制下发频率的，可直接调用context.render()接口。调用后会关闭自动下发的操作，切换成每次主动调用render时才下发。

完整示例如下：
var libGCanvas = require('../../core/gcanvas');
libGCanvas.start(function(){
    nativeLog('gcanvas.start success');
    var canvasObj = libGCanvas.createElement(gcanvasComponent);
    var context = canvasObj.getContext('2d');
    //do any action here
},function(){
    nativeLog('gcanvas.start failed');
});

*/

var GImage = __webpack_require__(4);
var GBridge = __webpack_require__(2).GBridge;
var GLog = __webpack_require__(2).GLog;
var GContextWebGL = __webpack_require__(50);
var GContext2D = __webpack_require__(54);
var GHashMap = __webpack_require__(5);
var htmlPlugin = __webpack_require__(55);

///////////////////////////////
var GSupport = {};
var model_check;
var version_check;
GSupport.renderMode = 0; // 0--RENDERMODE_WHEN_DIRTY, 1--RENDERMODE_CONTINUOUSLY
GSupport.hybridLayerType = -1; // 0--LAYER_TYPE_NONE 1--LAYER_TYPE_SOFTWARE 2--LAYER_TYPE_HARDWARE. change hybrid layer type from LAYER_TYPE_SOFTWARE to unset, avoid block when use html5 audio.
GSupport.checkType = 0; // 0--all support, 1--white list check
GSupport.nativeVer = 0;
GSupport.defaultHiQualityMode = true; // false-- normal true--hiQuality
GSupport.supportScroll = false;
GSupport.newCanvasMode = false; //true: GCanvasView in Webview
GSupport.sameLevel = false; //newCanvasMode = true && true: GCanvasView and Webview is same level;
GSupport.clearColor = "white";
GSupport.WHITE_LIST = {

    model_check: [function (info) {
        return info.MODEL == 'GT-I9300';
    }, function (info) {
        return info.MODEL == 'GT-I9500';
    }, function (info) {
        return info.MODEL == 'GT-N7108';
    }, function (info) {
        return info.MODEL == 'HIKe 848A';
    }, function (info) {
        return info.MODEL == 'HTC 601e';
    }, function (info) {
        return info.MODEL == 'HUAWEI C8813';
    }, function (info) {
        return info.MODEL == 'Lenovo K900';
    }, function (info) {
        return info.MODEL == 'M351';
    }, function (info) {
        return info.MODEL == 'M51w';
    }, function (info) {
        return info.MODEL == 'MI 3';
    }, function (info) {
        return info.MODEL == 'MI 3W';
    }, function (info) {
        return info.MODEL == 'SM-G9006V';
    }, function (info) {
        return info.MODEL == 'SM-N9006';
    }],
    version_check: [function (info) {
        GLog.d("info.OS_RELEASE=" + info.OS_RELEASE);return false;
    }, function (info) {
        return info.OS_RELEASE >= '4.1.0' && info.OS_RELEASE <= '4.4.2';
    }]
};

GSupport.checkList = function (successFunc, failureFunc) {
    var checkType = GSupport.checkType;
    GLog.d("[checkList] checkType:" + checkType);
    if (1 == checkType) {
        //white list check
        var whitelist = GSupport.WHITE_LIST;
        var length = whitelist.length;
        for (var i = 0; i < length; i++) {
            var lenSub = whitelist[i].length;
            var found = false;
            for (var j = 0; j < lenSub; j++) {
                if (whitelist[i][j](GDeviceInfo)) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                // unfound in white list
                GLog.d("the device is not supported, " + GDeviceInfo.MODEL);
                failureFunc && failureFunc();
                return;
            }
        }
    }
    successFunc && successFunc();
};
///////////////////////////////

var GDeviceInfo = {};
// var _context = null;
// var _context_type = 0;//0--2d;1--webgl
///////////////////////////////

var GCanvasPlatform = GBridge.isBrowser() ? 0 : 2; //0--H5;1--iOS;2--Android
var currentEl;
var contextTypes = ['2d', 'webgl'];
var currentContextOfType = {};

function GCanvas(componentId) {
    this.componentId = componentId;
    this.id = ++GCanvas.idCounter;
    this.style = {};
}

GCanvas.idCounter = 0;
// GCanvas.canvasMap = new GHashMap();

//-----------------------------
// GCanvas.start
//-----------------------------
GLog.d('gcanvas#=====>>>version: 0.5.49');

GCanvas.start = function (el) {
    GLog.d('gcanvas#start=====>>>');

    if (typeof weex !== 'undefined' && weex.supports && weex.supports('@weex-module/userTrack') || typeof __weex_module_supports__ == "function" && __weex_module_supports__('@weex-module/userTrack')) {
        try {
            var userTrack;
            if (weex && weex.requireModule) {
                userTrack = weex.requireModule('userTrack');
            } else if (__weex_require__) {
                userTrack = __weex_require__('@weex-module/userTrack');
            }
            if (userTrack) {
                userTrack.commitut("expose", 2201, "", '', '/gcanvas.gcanvasweex.start', '', '', {});
            }
        } catch (e) {
            console.error(e);
        }
    }

    if ((typeof WXEnvironment === "undefined" ? "undefined" : _typeof(WXEnvironment)) === 'object' && /ios/i.test(WXEnvironment.platform)) {
        GCanvasPlatform = 1;
    } else if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && /ios/i.test(navigator.userAgent)) {
        GCanvasPlatform = 1;
    } else {
        GCanvasPlatform = GBridge.isBrowser() ? 0 : 2;
    }

    GBridge.setup({ platform: GCanvasPlatform });

    if (GCanvasPlatform === 0) {
        currentEl = el;
        return currentEl;
    } else {
        //bind canvas
        var config = [];
        config.push(GSupport.renderMode);
        config.push(GSupport.hybridLayerType);
        config.push(GSupport.supportScroll);
        config.push(GSupport.newCanvasMode);
        config.push(1); //compatible. 1 will call GCanvasJNI.getAllParameter("gcanvas");
        config.push(GSupport.clearColor);
        config.push(GSupport.sameLevel);

        GBridge.callEnable(el.ref, config);
        var canvas = new GCanvas(el.ref);
        canvas.width = el.style.width;
        canvas.height = el.style.height;
        // GCanvas.canvasMap.put(el.ref, canvas);
        return canvas;
    }
};

//-----------------------------
// Instance Method: getContext
//-----------------------------
GCanvas.prototype.getContext = function (contextID) {
    GLog.d('gcanvas#getContext=====>>>');

    var context = this.context;
    //brower
    if (GCanvasPlatform === 0) {
        if (context) {
            return context; //unsupport change type after create
        } else if (currentEl && currentEl.getContext) {
            context = currentEl.getContext(contextID);
            if (context && !context.render) context.render = function () {};
        }
        return context;
    }

    if (context) {
        return context; //unsupport change type after create
    }

    var context_type;
    if (contextID.match(/webgl/i)) {
        context = new GContextWebGL();
        context_type = 1;
    } else {
        context = new GContext2D();
        context_type = 0;
    }

    // if(context_type == 1) {
    // 	GBridge3d.setLogLevel("debug");
    // 	GBridge3d.callEnable(this.componentId);
    // 	GBridge3d.setContextType(this.componentId, context_type);
    // }else {
    //     GBridge.setLogLevel("debug");
    GBridge.setContextType(this.componentId, context_type);
    // }

    context.componentId = this.componentId;
    // if (!context.timer) {
    //    context.timer = setInterval(this.render.bind(this), 16);
    // }

    this.context = context;

    // if(context_type == 0) {
    GBridge.callRegisterReattachJSCallback(this.componentId, context._clearImageTextures);
    // }

    this.startLoop();

    return context;
};

//-----------------------------
// Instance Method: render
//-----------------------------
GCanvas.prototype.render = function () {
    if (GCanvasPlatform !== 0 && this.context) {
        this.context.render("auto");
    }
};

//-----------------------------
// Instance Method: stopRender
//-----------------------------
GCanvas.prototype.stopRender = function () {
    if (!this.context) {
        return;
    }

    if (this.context.timer) {
        clearInterval(this.context.timer);
        this.context.timer = null;
    }
};

//-----------------------------
// Instance Method: startLoop
//-----------------------------
GCanvas.prototype.startLoop = function (fps) {
    if (!this.context) {
        return;
    }

    fps = parseInt(fps) || 16;
    if (!this.context.timer) {
        this.context.timer = setInterval(this.render.bind(this), fps);
    }
};

//-----------------------------
// Instance Method: stopLoop
//-----------------------------
GCanvas.prototype.stopLoop = function () {
    if (!this.context) {
        return;
    }

    if (this.context.timer) {
        clearInterval(this.context.timer);
        this.context.timer = null;
    }
};

//-----------------------------
// Instance Method: reset
//-----------------------------
GCanvas.prototype.reset = function () {
    if (GCanvasPlatform !== 0) {
        GBridge.resetComponent(this.componentId);
    }
};

//-----------------------------
// Instance Method: setDevicePixelRatio
//-----------------------------
GCanvas.prototype.setDevicePixelRatio = function () {
    if (!this.context) {
        return;
    }

    GBridge.callSetDevPixelRatio(this.componentId);
};

//-----------------------------
// GCanvas.disable
//-----------------------------
GCanvas.disable = function () {
    // GLog.d('gcanvas#disable=====>>>');
    // if(GCanvasPlatform !== 0){
    //     GBridge.callDisable();
    // }
};

GCanvas.prototype.setup = function (support) {
    if (!this.context) {
        return;
    }
    var config = [];
    var mySupport = support || GSupport;

    for (var attr in GSupport) {
        if (mySupport[attr] != undefined) {
            GSupport[attr] = mySupport[attr];
        }
    }

    var config = {
        'renderMode': GSupport.renderMode,
        'hybridLayerType': GSupport.hybridLayerType,
        'supportScroll': GSupport.supportScroll,
        'sameLevel': GSupport.sameLevel,
        'newCanvasMode': GSupport.newCanvasMode,
        'clearColor': GSupport.clearColor
    };

    GBridge.callSetup(config, this.componentId, function (e) {});
};

//-----------------------------
// GCanvas.setHiQuality
//-----------------------------
GCanvas.setHiQuality = function () {
    GLog.d('gcanvas#setHiQuality=====>>>' + quality);
    if (GCanvasPlatform !== 0) {
        GBridge.setHiQuality(quality);
    }
};

//-----------------------------
// GCanvas.setLogLevel
//-----------------------------
GCanvas.setLogLevel = function (level) {
    GLog.d('gcanvas#setLogLevel=====>>> ' + level);
    if (GCanvasPlatform !== 0) {
        GBridge.setLogLevel(level);
    }
};

GCanvas.prototype.toDataURL = function (type, options) {
    //	GLog.d('gcanvas#toDataURL=====>>> ' + type + ',' + options);

    var args;
    if (typeof options == 'undefined') {
        args = type + ';';
    } else {
        args = type + ',' + options + ';';
    }

    return GBridge.exeSyncCmd(this.componentId, 'todataurl', args);
};

//-----------------------------
// GCanvas.htmlPlugin
//-----------------------------
GCanvas.htmlPlugin = htmlPlugin;

module.exports = GCanvas;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function GCodec() {}

GCodec.prototype.GarrToBase64 = function (buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
};

GCodec.prototype.Gbase64ToArr = function (sBase64, nBlocksSize) {
  var self = this;
  var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, ""),
      nInLen = sB64Enc.length,
      nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2,
      taBytes = new Uint8Array(nOutLen);

  for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
    nMod4 = nInIdx & 3;
    nUint24 |= self._GcharDecode(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
    if (nMod4 === 3 || nInLen - nInIdx === 1) {
      for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
      }
      nUint24 = 0;
    }
  }

  return taBytes;
};

GCodec.prototype._GcharDecode = function (nChr) {
  return nChr > 64 && nChr < 91 ? nChr - 65 : nChr > 96 && nChr < 123 ? nChr - 71 : nChr > 47 && nChr < 58 ? nChr + 4 : nChr === 43 ? 62 : nChr === 47 ? 63 : 0;
};

module.exports = new GCodec();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(10)

/* template */
var __vue_template__ = __webpack_require__(58)
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(3);

var util = _interopRequireWildcard(_util);

var _progress = __webpack_require__(11);

var _progress2 = _interopRequireDefault(_progress);

var _emojiList = __webpack_require__(15);

var _emojiList2 = _interopRequireDefault(_emojiList);

var _orientation = __webpack_require__(19);

var _orientation2 = _interopRequireDefault(_orientation);

var _ball = __webpack_require__(23);

var _ball2 = _interopRequireDefault(_ball);

var _banList = __webpack_require__(27);

var _banList2 = _interopRequireDefault(_banList);

var _lastSwapList = __webpack_require__(31);

var _lastSwapList2 = _interopRequireDefault(_lastSwapList);

var _testScreen = __webpack_require__(35);

var _testScreen2 = _interopRequireDefault(_testScreen);

var _tabBar = __webpack_require__(39);

var _tabBar2 = _interopRequireDefault(_tabBar);

var _menuAnimation = __webpack_require__(43);

var _menuAnimation2 = _interopRequireDefault(_menuAnimation);

var _downloading = __webpack_require__(47);

var _downloading2 = _interopRequireDefault(_downloading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
    created: function created() {},
    components: { progress: _progress2.default, emojiList: _emojiList2.default, orientation: _orientation2.default, ball: _ball2.default, banList: _banList2.default, lsatSwapList: _lastSwapList2.default, testSrceen: _testScreen2.default, topBar: _tabBar2.default, menubar: _menuAnimation2.default, downloading: _downloading2.default },
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
//
//

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(12)
)

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(14)
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(16)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(18)
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
/* 16 */
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
/* 17 */
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
            }, {
                title: 'HelloTalk手宝宝3', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id: 3
            }, {
                title: 'HelloTalk手宝宝4', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id: 4
            }, {
                title: 'HelloTalk手宝宝5', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id: 5
            }, {
                title: 'HelloTalk手宝宝6', imgUrl: 'http://ali-hk-cdn.nihaotalk.com/groupclass/lessonShare/img/img-chat-bn-normal.png', id: 6
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
            cellHeight: 70,
            top: null, // 存储使用getTopByEle方法时的元素dom信息
            x: 0
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
            var _this2 = this;

            var e = arguments[1][0];
            e.stopPropagation();
            this.curItem = {
                title: '', imgUrl: ''
                //. android获取pageY为相对该dom的值
            };var _y = e.changedTouches[0].pageY;
            this.startY = _y;
            // 父容器距离页面顶部的距离 weex环境下直接获取e.changedTouches[0].pageY
            this.preY = this.isAndroid ? _y : _y - this.parentY;
            // this.movingIndex = this._getIdByEle();

            var self = this;
            // this.getTopByEle();
            var result = dom.getComponentRect(this.cellDoms[n], function (option) {
                _this2.top = option.size.top - _this2.parentY;
                var _top = _universalEnv.isWeex ? _this2.top : _this2.top / 2;
                self.topArr.some(function (item, index) {
                    if (_top == item) {
                        self.movingIndex = index;
                        return true;
                    }
                });
                _this2.touchIndex = n;
                if (_this2.movingIndex != -1) {
                    // this.dragBoxTop  = this._getTopValueYById(this.movingIndex);
                    _this2.dragBoxTop = _this2._getDragBoxTopByEle(_this2.cellDoms[n]);
                    _this2.curItem = _this2.emojiList[n];
                    _this2.showDragBox = true;
                }
            });
        },
        ontouchmove: function ontouchmove(n) {
            var e = arguments[1][0];
            e.stopPropagation();
            if (this.curItem == null) return;
            var _y = this.isAndroid ? e.changedTouches[0].pageY : e.changedTouches[0].pageY - this.parentY;
            this.changeY = e.changedTouches[0].pageY - this.startY;
            var collideIndex = this._getIdByPosition(_y);
            if (collideIndex != -1) {
                this.move(this.$refs.dragBox, this.changeY);
            }
        },
        ontouchend: function ontouchend(e) {
            if (this.movingIndex == -1 || this.changeY == 0) return;
            console.log(this.changeY);
            this.endY = this.isAndroid ? e.changedTouches[0].pageY : e.changedTouches[0].pageY - this.parentY;
            this.showDragBox = false;
            // 拖动结束，交换两个item的位置
            var collideIndex = this._getIdByPosition(this.endY);
            var curIndex = this.movingIndex;
            if (collideIndex !== curIndex && collideIndex !== -1 && this.changeY != 0) {
                var _ref = [this.topArr[collideIndex], this.topArr[curIndex]];
                this.topArr[curIndex] = _ref[0];
                this.topArr[collideIndex] = _ref[1];

                this.movingIndex = null;
                this.touchIndex = null;
                this.curItem = null;
                // this.changeY = 0;
            }
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
            // this.isAndroid?this.getTopByEle(ele):(this.getTopByEle(ele)-this.parentY);
            this.getTopByEle(ele);
            var _top = _universalEnv.isWeex ? this.top : this.top / 2;
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
            var self = this;
            var id = -1;
            this.getTopByEle(ele);
            var _top = _universalEnv.isWeex ? this.top : this.top / 2;
            var result = self.topArr.some(function (item, index) {
                if (_top == item) {
                    id = index;
                    return true;
                }
            });
            return id;
        },
        getTopByEle: function getTopByEle(ele) {
            var _this3 = this;

            var top = 0;
            var result = dom.getComponentRect(ele, function (option) {
                _this3.top = option.size.top - _this3.parentY;
            });
        },
        getTopByParent: function getTopByParent(ele) {
            var _this4 = this;

            var result = dom.getComponentRect(ele, function (option) {
                _this4.parentY = option.size.top;
            });
        },
        leftMove: function leftMove(n) {
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
            var self = this;
            var my = getEl(this.cellDoms[n]);
            var translate_x_origin = 'x+0';
            var gesTokenObj = _weexBindingx2.default.bind({
                anchor: my,
                eventType: 'pan',
                props: [{
                    element: my,
                    property: 'transform.translateX',
                    expression: translate_x_origin
                }]
            }, function (e) {
                if (e.state === 'end') {
                    console.log(e);
                    self.x += e.deltaX; // deltaY是指相对于元素原来位置的y轴上的偏移值
                    self.bindTime(n);
                }
            });
            self.gesToken = gesTokenObj.token;
        },
        bindTime: function bindTime(n) {
            this.isInAnimation = true;
            var exit_origin = 't>500';
            var changed_x;
            var final_x;
            var translate_x_origin;
            if (this.x >= 375) {
                changed_x = 375 - this.x;
                final_x = 375;
            } else if (this.x < -60) {
                changed_x = -60 - this.x;
                final_x = -60;
            } else {
                changed_x = 0;
                final_x = this.x;
            };
            translate_x_origin = 'easeOutElastic(t,' + this.x + ',' + changed_x + ',1000/60)';
            var self = this;
            var ele = getEl(this.cellDoms[n]);
            var result = _weexBindingx2.default.bind({
                eventType: 'timing',
                exitExpression: exit_origin,
                props: [{
                    element: ele,
                    property: 'width',
                    expression: translate_x_origin
                }]
            }, function (e) {
                if (e.state === 'end' || e.state === 'exit') {
                    self.x = final_x;
                    self.isInAnimation = false;
                    // self.movingAnimation();
                    // 在这里与客户端交互响应播放时间
                }
            });
        }
    },
    beforeMount: function beforeMount() {},
    mounted: function mounted() {
        this.$nextTick().then(function () {
            var _this5 = this;

            if (this.$refs.cell) {
                this.cellDoms = this.$refs.cell.map(function (item) {
                    return item;
                }.bind(this));
            }
            dom.getComponentRect(this.$refs.scroller, function (option) {
                _this5.parentY = _this5.isAndroid ? _this5.parentTop : option.size.top;
            });
            this.copyList = JSON.parse(JSON.stringify(this.emojiList));
        }.bind(this));
    }
};

/***/ }),
/* 18 */
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
      "touchend": _vm.ontouchend
    }
  }, [_vm._l((_vm.emojiList), function(item, index) {
    return _c('div', {
      ref: "cell",
      refInFor: true,
      staticClass: ["cell"],
      class: ['cell' + index],
      style: {
        top: _vm.isWeb ? _vm.topArr[index] * 2 + 'px' : _vm.topArr[index] + 'px',
        width: _vm.fullWidth
      },
      on: {
        "touchstart": function($event) {
          _vm.leftMove(index)
        }
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
        },
        "touchmove": function($event) {
          _vm.ontouchmove(index, arguments)
        }
      }
    }, [_vm._v("")]), _c('div', {
      staticClass: ["delete"]
    })])])])
  }), (_vm.showDragBox) ? _c('div', {
    ref: "dragBox",
    staticClass: ["dragBox"],
    style: {
      top: _vm.dragBoxTop + 'px'
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
  })])])]) : _vm._e(), _c('text', {
    staticStyle: {
      color: "red",
      fontSize: "16px",
      textAlign: "center",
      position: "absolute",
      bottom: "0"
    }
  }, [_vm._v(_vm._s(_vm.top + ',' + _vm.dragBoxTop + ',' + _vm.changeY))])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(20)
)

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(22)
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(24)
)

/* script */
__vue_exports__ = __webpack_require__(25)

/* template */
var __vue_template__ = __webpack_require__(26)
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
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(28)
)

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(30)
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
/* 28 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flex": 1,
    "backgroundColor": "#eeeeee"
  },
  "border": {
    "height": 500,
    "paddingLeft": 17.5,
    "paddingRight": 17.5,
    "paddingTop": 50
  },
  "box": {
    "width": 340,
    "height": 225,
    "backgroundColor": "#651FFF"
  },
  "head": {
    "backgroundColor": "#651FFF",
    "width": 340,
    "height": 60,
    "flexDirection": "row",
    "alignItems": "center"
  },
  "content": {
    "width": 340,
    "height": 120,
    "backgroundColor": "#651FFF",
    "paddingLeft": 12,
    "paddingTop": 12,
    "paddingRight": 12,
    "boxSizing": "border-box"
  },
  "footer": {
    "width": 340,
    "height": 45,
    "backgroundColor": "#ffffff",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "paddingRight": 12.5,
    "flexDirection": "row",
    "boxSizing": "border-box"
  },
  "action": {
    "fontSize": 17,
    "paddingRight": 10
  },
  "desc": {
    "fontSize": 16,
    "color": "#ffffff",
    "paddingLeft": 12
  },
  "avatar": {
    "width": 48,
    "height": 48,
    "borderRadius": 24,
    "backgroundColor": "#CDDC39",
    "marginLeft": 18,
    "marginRight": 24
  },
  "username": {
    "color": "#ffffff",
    "fontSize": 16
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexBindingx = __webpack_require__(1);

var _weexBindingx2 = _interopRequireDefault(_weexBindingx);

var _universalEnv = __webpack_require__(0);

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

exports.default = {
  data: function data() {
    return {
      x: 0,
      y: 0,
      isInAnimation: false,
      gesToken: 0,
      opacity: 1
    };
  },

  methods: {

    getEl: function getEl(el) {
      if (typeof el === 'string' || typeof el === 'number') return el;
      return _universalEnv.isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
    },
    touchStart: function touchStart(e) {
      var self = this;
      if (this.isInAnimation === true) {
        console.log('we are in animation, drop pan gesture...');
        if (this.gesToken) {
          _weexBindingx2.default.unbind({
            eventType: 'pan',
            token: self.gesToken
          });
          this.gesToken = undefined;
        }
        return;
      }

      var my = this.getEl(this.$refs.my);
      var translate_x_origin = 'x+0';

      var opacity_x_origin = '1-abs(x)/300';

      var gesTokenObj = _weexBindingx2.default.bind({
        anchor: my,
        eventType: 'pan',
        props: [{
          element: my,
          property: 'transform.translateX',
          expression: translate_x_origin
        }, {
          element: my,
          property: 'opacity',
          expression: opacity_x_origin
        }]
      }, function (e) {
        if (e.state === 'end') {
          self.x += e.deltaX;
          self.y += e.deltaY;
          self.opacity = 1 - Math.abs(e.deltaX) / 300;

          // anim
          self.bindTiming();
        }
      });

      self.gesToken = gesTokenObj.token;
    },
    bindTiming: function bindTiming() {
      this.isInAnimation = true;

      var my = this.getEl(this.$refs.my);
      var self = this;

      // should equal with timing duration
      var exit_origin = 't>1000';

      var changed_x;
      var final_x;

      var final_opacity;

      var translate_x_origin;

      var shouldDismiss = false;

      if (self.x >= -375 / 2 && self.x <= 375 / 2) {

        shouldDismiss = false;
        final_x = 0;
        changed_x = 0 - self.x;
        final_opacity = 1;
        translate_x_origin = 'easeOutElastic(t,' + self.x + ',' + changed_x + ',1000)';
      } else if (self.x < -375 / 2) {
        shouldDismiss = true;
        final_x = -375;
        changed_x = -375 - self.x;
        final_opacity = 0;
        translate_x_origin = 'easeOutExpo(t,' + self.x + ',' + changed_x + ',1000)';
      } else {
        // x > 750/2
        final_x = 375;
        shouldDismiss = true;
        changed_x = 375 - self.x;
        final_opacity = 0;
        translate_x_origin = 'easeOutExpo(t,' + self.x + ',' + changed_x + ',1000)';
      }

      var changed_opacity = final_opacity - self.opacity;
      var opacity_origin = 'linear(t,' + self.opacity + ',' + changed_opacity + ',1000)';

      var result = _weexBindingx2.default.bind({
        eventType: 'timing',
        exitExpression: exit_origin,
        props: [{
          element: my,
          property: 'transform.translateX',
          expression: translate_x_origin
        }, {
          element: my,
          property: 'opacity',
          expression: opacity_origin
        }]

      }, function (e) {
        if (e.state === 'end' || e.state === 'exit') {
          // reset x
          self.x = final_x;
          self.isInAnimation = false;

          if (shouldDismiss) {
            // remove card from hierarchy
          }
        }
      });
    }
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    staticClass: ["border"]
  }, [_c('div', {
    ref: "my",
    staticClass: ["box"],
    on: {
      "touchstart": _vm.touchStart
    }
  }, [_vm._m(0), _vm._m(1), _vm._m(2)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["head"]
  }, [_c('div', {
    staticClass: ["avatar"]
  }), _c('text', {
    staticClass: ["username"]
  }, [_vm._v("HACKER")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["desc"]
  }, [_vm._v("Google announced a new version of Nearby Connections for fully offline.high\n                bandwidth peer to peer device communications.")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["footer"]
  }, [_c('text', {
    staticClass: ["action"]
  }, [_vm._v("SHARE")]), _c('text', {
    staticClass: ["action"],
    staticStyle: {
      color: "#7C4DFF"
    }
  }, [_vm._v("EXPLORE")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(32)
)

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(34)
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(36)
)

/* script */
__vue_exports__ = __webpack_require__(37)

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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(40)
)

/* script */
__vue_exports__ = __webpack_require__(41)

/* template */
var __vue_template__ = __webpack_require__(42)
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
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _util = __webpack_require__(3);

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
/* 42 */
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(44)
)

/* script */
__vue_exports__ = __webpack_require__(45)

/* template */
var __vue_template__ = __webpack_require__(46)
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
__vue_options__.__file = "/Users/mac/Documents/BLHT/emoji_store/src/components/menuAnimation/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-57212b3b"
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
/* 44 */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flex": 1
  },
  "image": {
    "width": "30",
    "height": "30"
  },
  "text": {
    "color": "#ffffff",
    "fontSize": "15",
    "width": "50",
    "height": "50",
    "borderRadius": "25",
    "textAlign": "center",
    "lineHeight": "50"
  },
  "btn": {
    "width": "50",
    "height": "50",
    "backgroundColor": "#ff0000",
    "alignItems": "center",
    "justifyContent": "center",
    "position": "absolute",
    "borderRadius": "25",
    "left": "175",
    "bottom": "150"
  },
  "desc": {
    "width": "350",
    "height": "50",
    "position": "absolute",
    "top": 0,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "desc_text": {
    "color": "#000000",
    "fontSize": "15"
  },
  "b1": {
    "backgroundColor": "#6A1B9A"
  },
  "b2": {
    "backgroundColor": "#0277BD"
  },
  "b3": {
    "backgroundColor": "#FF9800"
  },
  "b4": {
    "backgroundColor": "#009688"
  },
  "b5": {
    "backgroundColor": "#795548"
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _weexBindingx = __webpack_require__(1);

var _weexBindingx2 = _interopRequireDefault(_weexBindingx);

var _universalEnv = __webpack_require__(0);

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

exports.default = {
  data: function data() {
    return {
      isExpanded: false
    };
  },

  methods: {

    getEl: function getEl(el) {
      // if (typeof el === 'string' || typeof el === 'number') return el;
      // return isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
      if (typeof el === 'string' || typeof el === 'number') return el;
      return _universalEnv.isWeex ? el.ref : el instanceof HTMLElement ? el : el.$el;
    },
    collapse: function collapse() {
      var main_btn = this.getEl(this.$refs.main_btn);
      var main_image = this.getEl(this.$refs.main_image);
      var b1 = this.getEl(this.$refs.b1);
      var b2 = this.getEl(this.$refs.b2);
      var b3 = this.getEl(this.$refs.b3);
      var b4 = this.getEl(this.$refs.b4);
      var b5 = this.getEl(this.$refs.b5);

      var radius = 150;
      var duration = 400;

      _weexBindingx2.default.bind({
        eventType: 'timing',
        exitExpression: {
          origin: 't>' + duration
        },
        props: [{
          element: main_image,
          property: 'transform.rotateZ',
          expression: {
            origin: 'easeOutQuint(t,45,0-45,800)'
          }
        }, {
          element: main_btn,
          property: 'background-color',
          expression: {
            origin: "evaluateColor('#607D8B','#ff0000',min(t,800)/800)"
          }
        }]

      });

      _weexBindingx2.default.bind({
        eventType: 'timing',
        exitExpression: {
          origin: 't>800'
        },
        props: [{
          element: b1,
          property: 'transform.translateY',
          expression: {
            origin: 'easeOutCubic(t,sin(2*PI*18/360)*' + (0 - radius) + ',sin(2*PI*18/360)*' + radius + ',' + duration + ')'
          }
        }, {
          element: b1,
          property: 'transform.translateX',
          expression: {
            origin: 'easeOutCubic(t,cos(2*PI*18/360)*' + (0 - radius) + ',cos(2*PI*18/360)*' + radius + ',' + duration + ')'
          }
        },
        // b2
        {
          element: b2,
          property: 'transform.translateY',
          expression: {
            origin: 'easeOutCubic(t,' + (0 - radius) + ',' + radius + ',' + duration + ')'
          }
        },
        // b3
        {
          element: b3,
          property: 'transform.translateY',
          expression: {
            origin: 'easeOutCubic(t,sin(2*PI*18/360)*' + (0 - radius) + ',sin(2*PI*18/360)*' + radius + ',' + duration + ')'
          }
        }, {
          element: b3,
          property: 'transform.translateX',
          expression: {
            origin: 'easeOutCubic(t,cos(2*PI*18/360)*' + radius + ',cos(2*PI*18/360)*' + (0 - radius) + ',' + duration + ')'
          }
        },
        // b4
        {
          element: b4,
          property: 'transform.translateY',
          expression: {
            origin: 'easeOutCubic(t,sin(2*PI*54/360)*' + radius + ',sin(2*PI*54/360)*' + (0 - radius) + ',' + duration + ')'
          }
        }, {
          element: b4,
          property: 'transform.translateX',
          expression: {
            origin: 'easeOutCubic(t,cos(2*PI*54/360)*' + radius + ',cos(2*PI*54/360)*' + (0 - radius) + ',' + duration + ')'
          }
        },
        // b5
        {
          element: b5,
          property: 'transform.translateY',
          expression: {
            origin: 'easeOutCubic(t,sin(2*PI*54/360)*' + radius + ',sin(2*PI*54/360)*' + (0 - radius) + ',' + duration + ')'
          }
        }, {
          element: b5,
          property: 'transform.translateX',
          expression: {
            origin: 'easeOutCubic(t,cos(2*PI*54/360)*' + (0 - radius) + ',cos(2*PI*54/360)*' + radius + ',' + duration + ')'
          }
        }]
      });
    },
    expand: function expand() {
      var main_btn = this.getEl(this.$refs.main_btn);
      var main_image = this.getEl(this.$refs.main_image);
      var b1 = this.getEl(this.$refs.b1);
      var b2 = this.getEl(this.$refs.b2);
      var b3 = this.getEl(this.$refs.b3);
      var b4 = this.getEl(this.$refs.b4);
      var b5 = this.getEl(this.$refs.b5);

      var radius = 150;
      var duration = 500;

      _weexBindingx2.default.bind({
        eventType: 'timing',
        exitExpression: {
          origin: 't>100'
        },
        props: [{
          element: main_image,
          property: 'transform.rotateZ',
          expression: {
            origin: 'linear(t,0,45,100)'
          }
        }, {
          element: main_btn,
          property: 'background-color',
          expression: {
            origin: "evaluateColor('#ff0000','#607D8B',min(t,100)/100)"
          }
        }]
      });

      _weexBindingx2.default.bind({
        eventType: 'timing',
        exitExpression: {
          origin: 't>' + duration
        },
        props: [{
          element: b1,
          property: 'transform.translateY',
          expression: {
            origin: 'easeOutBack(t,0,sin(2*PI*18/360)*' + (0 - radius) + ',' + duration + ')'
          }
        }, {
          element: b1,
          property: 'transform.translateX',
          expression: {
            origin: 'easeOutBack(t,0,cos(2*PI*18/360)*' + (0 - radius) + ',' + duration + ')'
          }
        },
        // b2
        {
          element: b2,
          property: 'transform.translateY',
          expression: {
            origin: 'easeOutBack(t,0,' + (0 - radius) + ',' + duration + ')'
          }
        },
        // b3
        {
          element: b3,
          property: 'transform.translateY',
          expression: {
            origin: 'easeOutBack(t,0,sin(2*PI*18/360)*' + (0 - radius) + ',' + duration + ')'
          }
        }, {
          element: b3,
          property: 'transform.translateX',
          expression: {
            origin: 'easeOutBack(t,0,cos(2*PI*18/360)*' + radius + ',' + duration + ')'
          }
        },
        // b4
        {
          element: b4,
          property: 'transform.translateY',
          expression: {
            origin: 'easeOutBack(t,0,sin(2*PI*54/360)*' + radius + ',' + duration + ')'
          }
        }, {
          element: b4,
          property: 'transform.translateX',
          expression: {
            origin: 'easeOutBack(t,0,cos(2*PI*54/360)*' + radius + ',' + duration + ')'
          }
        },
        // b5
        {
          element: b5,
          property: 'transform.translateY',
          expression: {
            origin: 'easeOutBack(t,0,sin(2*PI*54/360)*' + radius + ',' + duration + ')'
          }
        }, {
          element: b5,
          property: 'transform.translateX',
          expression: {
            origin: 'easeOutBack(t,0,cos(2*PI*54/360)*' + (0 - radius) + ',' + duration + ')'
          }
        }]
      });
    },

    clickBtn: function clickBtn(e) {
      if (this.isExpanded) {
        this.collapse();
      } else {
        this.expand();
      }
      this.isExpanded = !this.isExpanded;
    }
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('div', {
    ref: "b1",
    staticClass: ["btn", "b1"],
    on: {
      "click": _vm.clickBtn
    }
  }, [_c('text', {
    ref: "main_image",
    staticClass: ["text"]
  }, [_vm._v("A")])]), _c('div', {
    ref: "b2",
    staticClass: ["btn", "b2"],
    on: {
      "click": _vm.clickBtn
    }
  }, [_c('text', {
    ref: "main_image",
    staticClass: ["text"]
  }, [_vm._v("p")])]), _c('div', {
    ref: "b3",
    staticClass: ["btn", "b3"],
    on: {
      "click": _vm.clickBtn
    }
  }, [_c('text', {
    ref: "main_image",
    staticClass: ["text"]
  }, [_vm._v("C")])]), _c('div', {
    ref: "b4",
    staticClass: ["btn", "b4"],
    on: {
      "click": _vm.clickBtn
    }
  }, [_c('text', {
    ref: "main_image",
    staticClass: ["text"]
  }, [_vm._v("D")])]), _c('div', {
    ref: "b5",
    staticClass: ["btn", "b5"],
    on: {
      "click": _vm.clickBtn
    }
  }, [_c('text', {
    ref: "main_image",
    staticClass: ["text"]
  }, [_vm._v("E")])]), _c('div', {
    ref: "main_btn",
    staticClass: ["btn"],
    on: {
      "click": _vm.clickBtn
    }
  }, [_c('image', {
    ref: "main_image",
    staticClass: ["image"],
    attrs: {
      "src": "https://gw.alicdn.com/tfs/TB1PZ25antYBeNjy1XdXXXXyVXa-128-128.png"
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(48)

/* template */
var __vue_template__ = __webpack_require__(57)
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
__vue_options__.__file = "/Users/mac/Documents/BLHT/emoji_store/src/components/downloading/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gcanvas = __webpack_require__(6);

var _shaderProgramCompiler = __webpack_require__(56);

//
//
//
//
//
//
//

var isWeex = typeof callNative === "function";

var dom = weex.requireModule("dom");


function run(canvas, _ref) {
  var requestAnimationFrame = _ref.requestAnimationFrame;

  var fShader = "\n//Ether by nimitz (twitter: @stormoid)\n#define t uTime\n\nprecision highp float;\n\nuniform float uTime;\nuniform vec2 uResolution;\n\nmat2 m(float a){float c=cos(a), s=sin(a);return mat2(c,-s,s,c);}\nfloat map(vec3 p){\n    p.xz*= m(t*0.4);p.xy*= m(t*0.3);\n    vec3 q = p*2.+t;\n    return length(p+vec3(sin(t*0.7)))*log(length(p)+1.) + sin(q.x+sin(q.z+sin(q.y)))*0.5 - 1.;\n}\n\nvoid main(){\n    vec2 p = gl_FragCoord.xy/uResolution.y - vec2(0.4,.5);\n    vec3 cl = vec3(0.);\n    float d = 2.5;\n    for(int i=0; i<=5; i++) {\n        vec3 p = vec3(0,0,5.) + normalize(vec3(p, -1.))*d;\n        float rz = map(p);\n        float f =  clamp((rz - map(p+.1))*0.5, -.1, 1. );\n        vec3 l = vec3(0.1,0.3,.4) + vec3(5., 2.5, 3.)*f;\n        cl = cl*l + (1.-smoothstep(0., 2.5, rz))*.7*l;\n        d += min(rz, 1.);\n    }\n    gl_FragColor = vec4(cl, 1.);\n}\n";

  runFragShader(canvas, fShader);

  function runFragShader(canvas, fShader) {
    var vShader = "\n        attribute vec2 aPosition;\n        void main() {\n          gl_Position = vec4(aPosition, 0, 1);\n        }";

    var gl = canvas.getContext("webgl");
    gl.getExtension("OES_standard_derivatives");

    var _compile = (0, _shaderProgramCompiler.compile)({
      vShader: vShader,
      fShader: fShader,
      gl: gl
    }),
        attributes = _compile.attributes,
        uniforms = _compile.uniforms,
        fillElements = _compile.fillElements,
        drawElements = _compile.drawElements,
        createElementsBuffer = _compile.createElementsBuffer;

    fillElements(createElementsBuffer([0, 1, 2]));
    attributes.aPosition.fill(attributes.aPosition.createBuffer([0, 3, 3, -3, -3, -3]));

    var offsetX = 0;
    var offsetY = 0;

    uniforms.uResolution && uniforms.uResolution.fill([canvas.width, canvas.height]);

    var startTime = void 0;
    function render() {
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      if (uniforms.uTime) {
        if (!startTime) {
          startTime = Date.now();
        }
        var uTime = (Date.now() - startTime) / 1000 % 65532;
        uniforms.uTime.fill([uTime]);
      }
      if (uniforms.uMouse) {
        uniforms.uMouse.fill([offsetX, offsetY]);
      }

      drawElements(3);

      requestAnimationFrame(render);
    }
    render();
  }
}

exports.default = {
  data: function data() {
    return {
      isWeex: isWeex,
      width: 750,
      height: 3000
    };
  },


  mounted: function mounted() {
    var _this = this;

    var start = function start() {

      var ref = _this.$refs.canvas_holder;

      var size = isWeex ? {
        width: parseInt(_this.width),
        height: parseInt(_this.height)
      } : {
        width: parseInt(ref.clientWidth),
        height: parseInt(ref.clientHeight)
      };

      if (isWeex) {
        ref = (0, _gcanvas.enable)(ref, { bridge: _gcanvas.WeexBridge });
      }

      ref.width = size.width;
      ref.height = size.height;

      run(ref, {
        requestAnimationFrame: isWeex ? setTimeout : requestAnimationFrame
      });
    };

    dom.getComponentRect("viewport", function (e) {
      _this.height = e.size.height;
      _this.isReady = true;
      setTimeout(start, 1000);
    });
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/////////////////////////////////////////////////////////////////
//GLog
/////////////////////////////////////////////////////////////////
var GLOG_DEBUG = 0;
var GLOG_INFO = 1;
var GLOG_WARN = 2;
var GLOG_ERROR = 3;
var GLOG_NULL = -1;
var GLog = {};
GLog._nullFunc = function () {};
GLog.d = GLog._nullFunc;
GLog.i = GLog._nullFunc;
GLog.w = GLog._nullFunc;
GLog.e = GLog._nullFunc;
GLog._nativeEnable = false;
GLog._setNativeLevel = function (level) {
	/*
 if (!this._nativeEnable)
 	return;
 if (level == GLOG_DEBUG)
 	GCanvas._toNative(null, null, 'GCanvas', 'setLogLevel', [ "debug" ]);
 else if (level == GLOG_INFO)
 	GCanvas._toNative(null, null, 'GCanvas', 'setLogLevel', [ "info" ]);
 else if (level == GLOG_WARN)
 	GCanvas._toNative(null, null, 'GCanvas', 'setLogLevel', [ "warn" ]);
 else if (level == GLOG_ERROR)
 	GCanvas._toNative(null, null, 'GCanvas', 'setLogLevel', [ "error" ]);
 else 
 	GCanvas._toNative(null, null, 'GCanvas', 'setLogLevel', [ "fatal" ]);	
     */
};
GLog._refresh = function () {

	if (this.enable == false) {
		this._setNativeLevel(GLOG_NULL);
		this.d = this._nullFunc;
		this.i = this._nullFunc;
		this.w = this._nullFunc;
		this.e = this._nullFunc;
	} else {
		if (this.level <= GLOG_ERROR) this.e = function (msg) {
			console.error(msg);
		};else this.e = this._nullFunc;

		if (this.level <= GLOG_WARN) this.w = function (msg) {
			console.warn(msg);
		};else this.w = this._nullFunc;

		if (this.level <= GLOG_INFO) this.i = function (msg) {
			console.info(msg);
			var args = {
				msg: msg
				//WindVane.call("GLog", "writeLog", args || {}, null, null);
			};
		};else this.i = this._nullFunc;

		if (this.level <= GLOG_DEBUG) this.d = function (msg) {
			console.info(msg);
			var args = {
				msg: msg
				//WindVane.call("GLog", "writeLog", args || {}, null, null);
			};
		};else this.d = this._nullFunc;

		this._setNativeLevel(this.level);
	}
};
GLog.enable = function () {
	this.enable = true;
	this._refresh();
};
GLog.disable = function () {
	this.enable = false;
	this._refresh();
};
GLog.setLevel = function (level) {
	console.info("[setLevel] " + this.level + "=>" + level);
	this.level = level;
	this.enable = true;
	this._refresh();
};

// GLog.setLevel(GLOG_WARN);
GLog.setLevel(GLOG_DEBUG);

module.exports.GLog = GLog;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GBridge = __webpack_require__(2).GBridge;
var GLog = __webpack_require__(2).GLog;
var GCanvas = __webpack_require__(6);
var GCanvasImage = __webpack_require__(4);
var GTexture = __webpack_require__(51);
var GBuffer = __webpack_require__(52);
var GProgram = __webpack_require__(53);

/**
 callGCanvasLinkNative中type的定义
 | 0-1(ContextType) | 2 (MethodType) | 3 - 32 (OptionType) |
 */

if (typeof ContextType == "undefined") {
    var ContextType = {
        Context2D: 0,
        ContextWebGL: 1
        // ContextVulkan : 2,
        // ContextMetal  : 3,
    };
}

if (typeof MethodType == "undefined") {
    var MethodType = {
        Async: 0,
        Sync: 1
    };
}

if (typeof CmdType == "undefined") {
    var CmdType = {
        Render: 1
    };
}

var G_NeedRender = true;

function WebGLCallNative(componentId, cmdArgs) {
    G_NeedRender = true;

    var type = 0x60000000; //ContextType.ContextWebGL << 30 | MethodType.Sync << 29
    //GLog.d("WebGLCallNative command: " + cmdArgs);

    if (GBridge.isIOS()) {
        var result = GBridge.callExtendCallNative({ "contextId": componentId, "type": type, "args": cmdArgs });
        if (result) {
            GLog.d("WebGLCallNative result: " + result["result"]);
            return result["result"];
        }
        return null;

        // var result = extendCallNative({"className":"WXGCanvasCallNative", "contextId": componentId, "type":type, "args":cmdArgs});
        // if( result )
        // {
        //        return result["result"];
        // }
        // return null;
    } else {
        var result = callGCanvasLinkNative(componentId, type, cmdArgs);
        //GLog.d("WebGLCallNative result: " + result);
        return result;
    }
}

function GContextWebGL() {
    GInitWebGLFuncId(this);
    GInitWebGLEnum(this);

    GInitWebGLFuncIdExt(this);
    GInitWebGLEnumExt(this);

    this.componentId = null;
}

//////////////////////////////////////////////////////////////////////////

function GInitWebGLFuncId(obj) {
    var i = 1;
    obj.activeTextureId = i++ + ","; //1
    obj.attachShaderId = i++ + ",";
    obj.bindAttribLocationId = i++ + ",";
    obj.bindBufferId = i++ + ",";
    obj.bindFramebufferId = i++ + ",";
    obj.bindRenderbufferId = i++ + ",";
    obj.bindTextureId = i++ + ",";
    obj.blendColorId = i++ + ",";
    obj.blendEquationId = i++ + ",";
    obj.blendEquationSeparateId = i++ + ","; //10
    obj.blendFuncId = i++ + ",";
    obj.blendFuncSeparateId = i++ + ",";
    obj.bufferDataId = i++ + ",";
    obj.bufferSubDataId = i++ + ",";
    obj.checkFramebufferStatusId = i++ + ",";
    obj.clearId = i++ + ",";
    obj.clearColorId = i++ + ",";
    obj.clearDepthId = i++ + ",";
    obj.clearStencilId = i++ + ",";
    obj.colorMaskId = i++ + ","; //20
    obj.compileShaderId = i++ + ",";
    obj.compressedTexImage2DId = i++ + ",";
    obj.compressedTexSubImage2DId = i++ + ",";
    obj.copyTexImage2DId = i++ + ",";
    obj.copyTexSubImage2DId = i++ + ",";
    obj.createBufferId = i++ + ",";
    obj.createFramebufferId = i++ + ",";
    obj.createProgramId = i++ + ",";
    obj.createRenderbufferId = i++ + ",";
    obj.createShaderId = i++ + ","; //30
    obj.createTextureId = i++ + ",";
    obj.cullFaceId = i++ + ",";
    obj.deleteBufferId = i++ + ",";
    obj.deleteFramebufferId = i++ + ",";
    obj.deleteProgramId = i++ + ",";
    obj.deleteRenderbufferId = i++ + ",";
    obj.deleteShaderId = i++ + ",";
    obj.deleteTextureId = i++ + ",";
    obj.depthFuncId = i++ + ",";
    obj.depthMaskId = i++ + ","; //40
    obj.depthRangeId = i++ + ",";
    obj.detachShaderId = i++ + ",";
    obj.disableId = i++ + ",";
    obj.disableVertexAttribArrayId = i++ + ",";
    obj.drawArraysId = i++ + ",";
    obj.drawArraysInstancedANGLEId = i++ + ",";
    obj.drawElementsId = i++ + ",";
    obj.drawElementsInstancedANGLEId = i++ + ",";
    obj.enableId = i++ + ",";
    obj.enableVertexAttribArrayId = i++ + ","; //50
    obj.flushId = i++ + ",";
    obj.framebufferRenderbufferId = i++ + ",";
    obj.framebufferTexture2DId = i++ + ",";
    obj.frontFaceId = i++ + ",";
    obj.generateMipmapId = i++ + ",";
    obj.getActiveAttribId = i++ + ",";
    obj.getActiveUniformId = i++ + ",";
    obj.getAttachedShadersId = i++ + ",";
    obj.getAttribLocationId = i++ + ",";
    obj.getBufferParameterId = i++ + ","; //60
    obj.getContextAttributesId = i++ + ",";
    obj.getErrorId = i++ + ",";
    obj.getExtensionId = i++ + ",";
    obj.getFramebufferAttachmentParameterId = i++ + ",";
    obj.getParameterId = i++ + ",";
    obj.getProgramInfoLogId = i++ + ",";
    obj.getProgramParameterId = i++ + ",";
    obj.getRenderbufferParameterId = i++ + ",";
    obj.getShaderInfoLogId = i++ + ",";
    obj.getShaderParameterId = i++ + ","; //70
    obj.getShaderPrecisionFormatId = i++ + ",";
    obj.getShaderSourceId = i++ + ",";
    obj.getSupportedExtensionsId = i++ + ",";
    obj.getTexParameterId = i++ + ",";
    obj.getUniformId = i++ + ",";
    obj.getUniformLocationId = i++ + ",";
    obj.getVertexAttribId = i++ + ",";
    obj.getVertexAttribOffsetId = i++ + ",";
    obj.isBufferId = i++ + ",";
    obj.isContextLostId = i++ + ","; //80
    obj.isEnabledId = i++ + ",";
    obj.isFramebufferId = i++ + ",";
    obj.isProgramId = i++ + ",";
    obj.isRenderbufferId = i++ + ",";
    obj.isShaderId = i++ + ",";
    obj.isTextureId = i++ + ",";
    obj.lineWidthId = i++ + ",";
    obj.linkProgramId = i++ + ",";
    obj.pixelStoreiId = i++ + ",";
    obj.polygonOffsetId = i++ + ","; //90
    obj.readPixelsId = i++ + ",";
    obj.renderbufferStorageId = i++ + ",";
    obj.sampleCoverageId = i++ + ",";
    obj.scissorId = i++ + ",";
    obj.shaderSourceId = i++ + ",";
    obj.stencilFuncId = i++ + ",";
    obj.stencilFuncSeparateId = i++ + ",";
    obj.stencilMaskId = i++ + ",";
    obj.stencilMaskSeparateId = i++ + ",";
    obj.stencilOpId = i++ + ","; //100
    obj.stencilOpSeparateId = i++ + ",";
    obj.texImage2DId = i++ + ",";
    obj.texParameterfId = i++ + ",";
    obj.texParameteriId = i++ + ",";
    obj.texSubImage2DId = i++ + ",";
    obj.uniform1fId = i++ + ",";
    obj.uniform1fvId = i++ + ",";
    obj.uniform1iId = i++ + ",";
    obj.uniform1ivId = i++ + ",";
    obj.uniform2fId = i++ + ","; //110
    obj.uniform2fvId = i++ + ",";
    obj.uniform2iId = i++ + ",";
    obj.uniform2ivId = i++ + ",";
    obj.uniform3fId = i++ + ",";
    obj.uniform3fvId = i++ + ",";
    obj.uniform3iId = i++ + ",";
    obj.uniform3ivId = i++ + ",";
    obj.uniform4fId = i++ + ",";
    obj.uniform4fvId = i++ + ",";
    obj.uniform4iId = i++ + ","; //120
    obj.uniform4ivId = i++ + ",";
    obj.uniformMatrix2fvId = i++ + ",";
    obj.uniformMatrix3fvId = i++ + ",";
    obj.uniformMatrix4fvId = i++ + ",";
    obj.useProgramId = i++ + ",";
    obj.validateProgramId = i++ + ",";
    obj.vertexAttrib1fId = i++ + ","; //new
    obj.vertexAttrib2fId = i++ + ","; //new
    obj.vertexAttrib3fId = i++ + ","; //new
    obj.vertexAttrib4fId = i++ + ","; //new       //130
    obj.vertexAttrib1fvId = i++ + ","; //new
    obj.vertexAttrib2fvId = i++ + ","; //new
    obj.vertexAttrib3fvId = i++ + ","; //new
    obj.vertexAttrib4fvId = i++ + ","; //new
    obj.vertexAttribPointerId = i++ + ",";
    obj.viewportId = i++ + ",";
}

function GInitWebGLEnum(obj) {
    //GL Constant Define
    obj.NO_ERROR = 0x0;
    obj.ZERO = 0x0;

    obj.NONE = 0x0;
    obj.ONE = 0x1;
    obj.LINES = 0x1;
    obj.LINE_LOOP = 0x2;
    obj.LINE_STRIP = 0x3;
    obj.TRIANGLES = 0x4;
    obj.TRIANGLE_STRIP = 0x5;
    obj.TRIANGLE_FAN = 0x6;
    obj.DEPTH_BUFFER_BIT = 0x100;
    obj.NEVER = 0x200;
    obj.LESS = 0x201;
    obj.EQUAL = 0x202;
    obj.LEQUAL = 0x203;
    obj.GREATER = 0x204;
    obj.NOTEQUAL = 0x205;
    obj.GEQUAL = 0x206;
    obj.ALWAYS = 0x207;
    obj.SRC_COLOR = 0x300;
    obj.ONE_MINUS_SRC_COLOR = 0x301;
    obj.SRC_ALPHA = 0x302;
    obj.ONE_MINUS_SRC_ALPHA = 0x303;
    obj.DST_ALPHA = 0x304;
    obj.ONE_MINUS_DST_ALPHA = 0x305;
    obj.DST_COLOR = 0x306;
    obj.ONE_MINUS_DST_COLOR = 0x307;
    obj.SRC_ALPHA_SATURATE = 0x308;
    obj.STENCIL_BUFFER_BIT = 0x400;
    obj.FRONT = 0x404;
    obj.BACK = 0x405;
    obj.FRONT_AND_BACK = 0x408;
    obj.INVALID_ENUM = 0x500;
    obj.INVALID_VALUE = 0x501;
    obj.INVALID_OPERATION = 0x502;
    obj.OUT_OF_MEMORY = 0x505;
    obj.INVALID_FRAMEBUFFER_OPERATION = 0x506;
    obj.CW = 0x900;
    obj.CCW = 0x901;
    obj.LINE_WIDTH = 0xB21;
    obj.CULL_FACE = 0xB44;
    obj.CULL_FACE_MODE = 0xB45;
    obj.FRONT_FACE = 0xB46;
    obj.DEPTH_RANGE = 0xB70;
    obj.DEPTH_TEST = 0xB71;
    obj.DEPTH_WRITEMASK = 0xB72;
    obj.DEPTH_CLEAR_VALUE = 0xB73;
    obj.DEPTH_FUNC = 0xB74;
    obj.STENCIL_TEST = 0xB90;
    obj.STENCIL_CLEAR_VALUE = 0xB91;
    obj.STENCIL_FUNC = 0xB92;
    obj.STENCIL_VALUE_MASK = 0xB93;
    obj.STENCIL_FAIL = 0xB94;
    obj.STENCIL_PASS_DEPTH_FAIL = 0xB95;
    obj.STENCIL_PASS_DEPTH_PASS = 0xB96;
    obj.STENCIL_REF = 0xB97;
    obj.STENCIL_WRITEMASK = 0xB98;
    obj.VIEWPORT = 0xBA2;
    obj.DITHER = 0xBD0;
    obj.BLEND = 0xBE2;
    obj.SCISSOR_BOX = 0xC10;
    obj.SCISSOR_TEST = 0xC11;
    obj.COLOR_CLEAR_VALUE = 0xC22;
    obj.COLOR_WRITEMASK = 0xC23;
    obj.UNPACK_ALIGNMENT = 0xCF5;
    obj.PACK_ALIGNMENT = 0xD05;
    obj.MAX_TEXTURE_SIZE = 0xD33;
    obj.MAX_VIEWPORT_DIMS = 0xD3A;
    obj.SUBPIXEL_BITS = 0xD50;
    obj.RED_BITS = 0xD52;
    obj.GREEN_BITS = 0xD53;
    obj.BLUE_BITS = 0xD54;
    obj.ALPHA_BITS = 0xD55;
    obj.DEPTH_BITS = 0xD56;
    obj.STENCIL_BITS = 0xD57;
    obj.TEXTURE_2D = 0xDE1;
    obj.DONT_CARE = 0x1100;
    obj.FASTEST = 0x1101;
    obj.NICEST = 0x1102;
    obj.BYTE = 0x1400;
    obj.UNSIGNED_BYTE = 0x1401;
    obj.SHORT = 0x1402;
    obj.UNSIGNED_SHORT = 0x1403;
    obj.INT = 0x1404;
    obj.UNSIGNED_INT = 0x1405;
    obj.FLOAT = 0x1406;
    obj.INVERT = 0x150A;
    obj.TEXTURE = 0x1702;
    obj.STENCIL_INDEX = 0x1901;
    obj.DEPTH_COMPONENT = 0x1902;
    obj.ALPHA = 0x1906;
    obj.RGB = 0x1907;
    obj.RGBA = 0x1908;
    obj.LUMINANCE = 0x1909;
    obj.LUMINANCE_ALPHA = 0x190A;
    obj.KEEP = 0x1E00;
    obj.REPLACE = 0x1E01;
    obj.INCR = 0x1E02;
    obj.DECR = 0x1E03;
    obj.VENDOR = 0x1F00;
    obj.RENDERER = 0x1F01;
    obj.VERSION = 0x1F02;
    obj.NEAREST = 0x2600;
    obj.LINEAR = 0x2601;
    obj.NEAREST_MIPMAP_NEAREST = 0x2700;
    obj.LINEAR_MIPMAP_NEAREST = 0x2701;
    obj.NEAREST_MIPMAP_LINEAR = 0x2702;
    obj.LINEAR_MIPMAP_LINEAR = 0x2703;
    obj.TEXTURE_MAG_FILTER = 0x2800;
    obj.TEXTURE_MIN_FILTER = 0x2801;
    obj.TEXTURE_WRAP_S = 0x2802;
    obj.TEXTURE_WRAP_T = 0x2803;
    obj.REPEAT = 0x2901;
    obj.POLYGON_OFFSET_UNITS = 0x2A00;
    obj.COLOR_BUFFER_BIT = 0x4000;
    obj.CONSTANT_COLOR = 0x8001;
    obj.ONE_MINUS_CONSTANT_COLOR = 0x8002;
    obj.CONSTANT_ALPHA = 0x8003;
    obj.ONE_MINUS_CONSTANT_ALPHA = 0x8004;
    obj.BLEND_COLOR = 0x8005;
    obj.FUNC_ADD = 0x8006;
    obj.BLEND_EQUATION_RGB = 0x8009;
    obj.FUNC_SUBTRACT = 0x800A;
    obj.FUNC_REVERSE_SUBTRACT = 0x800B;
    obj.UNSIGNED_SHORT_4_4_4_4 = 0x8033;
    obj.UNSIGNED_SHORT_5_5_5_1 = 0x8034;
    obj.POLYGON_OFFSET_FILL = 0x8037;
    obj.POLYGON_OFFSET_FACTOR = 0x8038;
    obj.RGBA4 = 0x8056;
    obj.RGB5_A1 = 0x8057;
    obj.TEXTURE_BINDING_2D = 0x8069;
    obj.SAMPLE_ALPHA_TO_COVERAGE = 0x809E;
    obj.SAMPLE_COVERAGE = 0x80A0;
    obj.SAMPLE_BUFFERS = 0x80A8;
    obj.SAMPLES = 0x80A9;
    obj.SAMPLE_COVERAGE_VALUE = 0x80AA;
    obj.SAMPLE_COVERAGE_INVERT = 0x80AB;
    obj.BLEND_DST_RGB = 0x80C8;
    obj.BLEND_SRC_RGB = 0x80C9;
    obj.BLEND_DST_ALPHA = 0x80CA;
    obj.BLEND_SRC_ALPHA = 0x80CB;
    obj.CLAMP_TO_EDGE = 0x812F;
    obj.GENERATE_MIPMAP_HINT = 0x8192;
    obj.DEPTH_COMPONENT16 = 0x81A5;
    obj.DEPTH_STENCIL_ATTACHMENT = 0x821A;
    obj.UNSIGNED_SHORT_5_6_5 = 0x8363;
    obj.MIRRORED_REPEAT = 0x8370;
    obj.ALIASED_POINT_SIZE_RANGE = 0x846D;
    obj.ALIASED_LINE_WIDTH_RANGE = 0x846E;
    obj.TEXTURE0 = 0x84C0;
    obj.TEXTURE1 = 0x84C1;
    obj.TEXTURE2 = 0x84C2;
    obj.TEXTURE3 = 0x84C3;
    obj.TEXTURE4 = 0x84C4;
    obj.TEXTURE5 = 0x84C5;
    obj.TEXTURE6 = 0x84C6;
    obj.TEXTURE7 = 0x84C7;
    obj.TEXTURE8 = 0x84C8;
    obj.TEXTURE9 = 0x84C9;
    obj.TEXTURE10 = 0x84CA;
    obj.TEXTURE11 = 0x84CB;
    obj.TEXTURE12 = 0x84CC;
    obj.TEXTURE13 = 0x84CD;
    obj.TEXTURE14 = 0x84CE;
    obj.TEXTURE15 = 0x84CF;
    obj.TEXTURE16 = 0x84D0;
    obj.TEXTURE17 = 0x84D1;
    obj.TEXTURE18 = 0x84D2;
    obj.TEXTURE19 = 0x84D3;
    obj.TEXTURE20 = 0x84D4;
    obj.TEXTURE21 = 0x84D5;
    obj.TEXTURE22 = 0x84D6;
    obj.TEXTURE23 = 0x84D7;
    obj.TEXTURE24 = 0x84D8;
    obj.TEXTURE25 = 0x84D9;
    obj.TEXTURE26 = 0x84DA;
    obj.TEXTURE27 = 0x84DB;
    obj.TEXTURE28 = 0x84DC;
    obj.TEXTURE29 = 0x84DD;
    obj.TEXTURE30 = 0x84DE;
    obj.TEXTURE31 = 0x84DF;
    obj.ACTIVE_TEXTURE = 0x84E0;
    obj.MAX_RENDERBUFFER_SIZE = 0x84E8;
    obj.DEPTH_STENCIL = 0x84F9;
    obj.INCR_WRAP = 0x8507;
    obj.DECR_WRAP = 0x8508;
    obj.TEXTURE_CUBE_MAP = 0x8513;
    obj.TEXTURE_BINDING_CUBE_MAP = 0x8514;
    obj.TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
    obj.TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
    obj.TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
    obj.TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
    obj.TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
    obj.TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
    obj.MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
    obj.VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
    obj.VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
    obj.VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
    obj.VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
    obj.CURRENT_VERTEX_ATTRIB = 0x8626;
    obj.VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
    obj.NUM_COMPRESSED_TEXTURE_FORMATS = 0x86A2;
    obj.COMPRESSED_TEXTURE_FORMATS = 0x86A3;
    obj.BUFFER_SIZE = 0x8764;
    obj.BUFFER_USAGE = 0x8765;
    obj.STENCIL_BACK_FUNC = 0x8800;
    obj.STENCIL_BACK_FAIL = 0x8801;
    obj.STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
    obj.STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
    obj.BLEND_EQUATION_ALPHA = 0x883D;
    obj.MAX_VERTEX_ATTRIBS = 0x8869;
    obj.VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
    obj.MAX_TEXTURE_IMAGE_UNITS = 0x8872;
    obj.ARRAY_BUFFER = 0x8892;
    obj.ELEMENT_ARRAY_BUFFER = 0x8893;
    obj.ARRAY_BUFFER_BINDING = 0x8894;
    obj.ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
    obj.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;
    obj.STREAM_DRAW = 0x88E0;
    obj.STATIC_DRAW = 0x88E4;
    obj.DYNAMIC_DRAW = 0x88E8;
    obj.FRAGMENT_SHADER = 0x8B30;
    obj.VERTEX_SHADER = 0x8B31;
    obj.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;
    obj.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
    obj.SHADER_TYPE = 0x8B4F;
    obj.FLOAT_VEC2 = 0x8B50;
    obj.FLOAT_VEC3 = 0x8B51;
    obj.FLOAT_VEC4 = 0x8B52;
    obj.INT_VEC2 = 0x8B53;
    obj.INT_VEC3 = 0x8B54;
    obj.INT_VEC4 = 0x8B55;
    obj.BOOL = 0x8B56;
    obj.BOOL_VEC2 = 0x8B57;
    obj.BOOL_VEC3 = 0x8B58;
    obj.BOOL_VEC4 = 0x8B59;
    obj.FLOAT_MAT2 = 0x8B5A;
    obj.FLOAT_MAT3 = 0x8B5B;
    obj.FLOAT_MAT4 = 0x8B5C;
    obj.SAMPLER_2D = 0x8B5E;
    obj.SAMPLER_CUBE = 0x8B60;
    obj.DELETE_STATUS = 0x8B80;
    obj.COMPILE_STATUS = 0x8B81;
    obj.LINK_STATUS = 0x8B82;
    obj.VALIDATE_STATUS = 0x8B83;
    obj.INFO_LOG_LENGTH = 0x8B84;
    obj.ATTACHED_SHADERS = 0x8B85;
    obj.ACTIVE_UNIFORMS = 0x8B86;
    obj.ACTIVE_UNIFORM_MAX_LENGTH = 0x8B87;
    obj.SHADER_SOURCE_LENGTH = 0x8B88;
    obj.ACTIVE_ATTRIBUTES = 0x8B89;
    obj.ACTIVE_ATTRIBUTE_MAX_LENGTH = 0x8B8A;
    obj.SHADING_LANGUAGE_VERSION = 0x8B8C;
    obj.CURRENT_PROGRAM = 0x8B8D;
    obj.STENCIL_BACK_REF = 0x8CA3;
    obj.STENCIL_BACK_VALUE_MASK = 0x8CA4;
    obj.STENCIL_BACK_WRITEMASK = 0x8CA5;
    obj.FRAMEBUFFER_BINDING = 0x8CA6;
    obj.RENDERBUFFER_BINDING = 0x8CA7;
    obj.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
    obj.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
    obj.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
    obj.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;
    obj.FRAMEBUFFER_COMPLETE = 0x8CD5;
    obj.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
    obj.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
    obj.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
    obj.FRAMEBUFFER_UNSUPPORTED = 0x8CDD;
    obj.COLOR_ATTACHMENT0 = 0x8CE0;
    obj.DEPTH_ATTACHMENT = 0x8D00;
    obj.STENCIL_ATTACHMENT = 0x8D20;
    obj.FRAMEBUFFER = 0x8D40;
    obj.RENDERBUFFER = 0x8D41;
    obj.RENDERBUFFER_WIDTH = 0x8D42;
    obj.RENDERBUFFER_HEIGHT = 0x8D43;
    obj.RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
    obj.STENCIL_INDEX8 = 0x8D48;
    obj.RENDERBUFFER_RED_SIZE = 0x8D50;
    obj.RENDERBUFFER_GREEN_SIZE = 0x8D51;
    obj.RENDERBUFFER_BLUE_SIZE = 0x8D52;
    obj.RENDERBUFFER_ALPHA_SIZE = 0x8D53;
    obj.RENDERBUFFER_DEPTH_SIZE = 0x8D54;
    obj.RENDERBUFFER_STENCIL_SIZE = 0x8D55;
    obj.RGB565 = 0x8D62;
    obj.LOW_FLOAT = 0x8DF0;
    obj.MEDIUM_FLOAT = 0x8DF1;
    obj.HIGH_FLOAT = 0x8DF2;
    obj.LOW_INT = 0x8DF3;
    obj.MEDIUM_INT = 0x8DF4;
    obj.HIGH_INT = 0x8DF5;
    obj.SHADER_COMPILER = 0x8DFA;
    obj.MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB;
    obj.MAX_VARYING_VECTORS = 0x8DFC;
    obj.MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;

    obj.UNPACK_FLIP_Y_WEBGL = 0x9240;
    obj.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
    // obj.CONTEXT_LOST_WEBGL = 0x9242;
    // obj.UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
    // obj.BROWSER_DEFAULT_WEBGL = 0x9244;
}

/////////////////////////////////////////////
// WebGL Extension
/////////////////////////////////////////////
function GInitWebGLFuncIdExt(obj) {
    var i = 300; //offset=300

    //extension method for ANGLE_instanced_arrays
    obj.drawArraysInstancedANGLEId = i++ + ",";
    obj.drawElementsInstancedANGLEId = i++ + ",";
    obj.vertexAttribDivisorANGLEId = i++ + ",";

    //extension method for OES_vertex_array_object
    obj.createVertexArrayOESId = i++ + ",";
    obj.deleteVertexArrayOESId = i++ + ",";
    obj.isVertexArrayOESId = i++ + ",";
    obj.bindVertexArrayOESId = i++ + ",";
}

function GInitWebGLEnumExt(obj) {
    //extension flag
    obj.OES_vertex_array_object = 1;
    obj.OES_texture_float = 1;
    obj.OES_element_index_uint = 1;

    //extension const for ANGLE_instanced_arrays
    //#define GL_VERTEX_ATTRIB_ARRAY_DIVISOR_EXT    0x88FE
    obj.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88FE;

    //extension const for OES_vertex_array_object
    //#define GL_VERTEX_ARRAY_BINDING_OES           0x85B5
    obj.VERTEX_ARRAY_BINDING_OES = 0x85B5;
}

function GarrToBase64(array) {
    if (!array) {
        return '';
    }

    var str = '';
    if (array.join === 'function') {
        str = array.join();
    } else {
        for (var i = 0; i < array.length; i++) {
            if (i < array.length - 1) {
                //                 str = str + array[i] + ',';
                str = str + array[i].toFixed(3) + ',';
            } else {
                //                 str = str + array[i];
                str = str + array[i].toFixed(3);
            }
        }
    }
    return btoa(str);
}

function Gbase64ToArr(base64) {
    var binary_string = atob(base64);
    var array = binary_string.slice();
    return array;
}

//字符串split使用
function GetArrayType(array) {
    //1 - uint8 array
    //2 - uint16 array
    //4 - uint32 array
    //14 - float32 array
    if (!array) {
        return 2;
    }
    var bytes = array.BYTES_PER_ELEMENT;
    if (bytes == 4 && array instanceof Float32Array) {
        return 10 + bytes;
    }
    return bytes;
}

//////////////////////////////////////////////////////////////////////////
//                        GWebGLActiveInfos
// https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfos
//////////////////////////////////////////////////////////////////////////
function GWebGLActiveInfo() {
    this.name;
    this.size;
    this.type;
}

GWebGLActiveInfo.convertFormString = function (infoString) {
    var activeInfo = new GWebGLActiveInfo();
    if (infoString) {
        var infoArray = infoString.split(",");
        if (infoArray.length >= 3) {
            activeInfo.type = parseInt(infoArray[0]);
            activeInfo.size = parseInt(infoArray[1]);
            activeInfo.name = infoArray[2];
        }
    }

    return activeInfo;
};

//////////////////////////////////////////////////////////////////////////
//                        GWebGLShaderPrecisionFormat
// https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat
//////////////////////////////////////////////////////////////////////////
function GWebGLShaderPrecisionFormat() {
    this.rangeMin;
    this.rangeMax;
    this.precision;
}

//////////////////////////////////////////////////////////////////////////
// GContextWebGLExtension
//////////////////////////////////////////////////////////////////////////
function GContextWebGLExtension(gl) {
    this.gl = gl;
}

GContextWebGL.prototype.render = function () {
    if (G_NeedRender) {
        var type = 0x60000001; //ContextType.ContextWebGL << 30 | MethodType.Sync << 29 | CmdType.Render

        if (GBridge.isIOS()) {
            var result = GBridge.callExtendCallNative({ "className": "WXGCanvasCallNative", "contextId": this.componentId, "type": type });
            G_NeedRender = false;
        } else {
            callGCanvasLinkNative(this.componentId, type, "render");
            G_NeedRender = false;
        }
    }
};

//////////////////////////////////////////////////////////////////////////
//                  WEBGL 1.0 API
// https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext
//////////////////////////////////////////////////////////////////////////

GContextWebGL.prototype.activeTexture = function (texture) {
    var textureId = texture instanceof GTexture ? texture.textureId : texture;
    var cmd = this.activeTextureId + textureId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.attachShader = function (program, shader) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.attachShaderId + programId + "," + shader + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.bindAttribLocation = function (program, index, name) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.bindAttribLocationId + programId + "," + index + "," + name + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.bindBuffer = function (target, buffer) {
    var bufferId = buffer instanceof GBuffer ? buffer.bufferId : buffer;
    var cmd = this.bindBufferId + target + "," + bufferId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.bindFramebuffer = function (target, framebuffer) {
    var framebufferId = framebuffer instanceof GBuffer ? framebuffer.bufferId : framebuffer;
    var cmd = this.bindFramebufferId + target + "," + framebufferId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.bindRenderbuffer = function (target, renderbuffer) {
    var renderbufferId = renderbuffer instanceof GBuffer ? renderbuffer.bufferId : renderbuffer;
    var cmd = this.bindRenderbufferId + target + "," + renderbufferId + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.blendColor = function (red, green, blue, alpha) {
    var cmd = this.blendColorId + red + "," + green + "," + blue + "," + alpha + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.bindTexture = function (target, texture) {
    var textureId = texture instanceof GTexture ? texture.textureId : texture;
    var cmd = this.bindTextureId + target + "," + textureId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.blendEquation = function (mode) {
    var cmd = this.blendEquationId + mode + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.blendEquationSeparate = function (modeRGB, modeAlpha) {
    var cmd = this.blendEquationSeparateId + modeRGB + "," + modeAlpha + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.blendFunc = function (sfactor, dfactor) {
    var cmd = this.blendFuncId + sfactor + "," + dfactor + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.blendFuncSeparate = function (srcRGB, dstRGB, srcAlpha, dstAlpha) {
    var cmd = this.blendFuncSeparateId + srcRGB + "," + dstRGB + "," + srcAlpha + "," + dstAlpha + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new array or size
GContextWebGL.prototype.bufferData = function (target, array, usage) {
    var cmd = this.bufferDataId + target + "," + GetArrayType(array) + "," + GarrToBase64(array) + "," + usage + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.bufferSubData = function (target, offset, array) {
    var cmd = this.bufferSubDataId + target + "," + offset + "," + GetArrayType(array) + "," + GarrToBase64(array) + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.checkFramebufferStatus = function (target) {
    var cmd = this.checkFramebufferStatusId + target + ";";
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.clear = function (mask) {
    var cmd = this.clearId + mask + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.clearColor = function (red, green, blue, alpha) {
    var cmd = this.clearColorId + red + "," + green + "," + blue + "," + alpha + ";";
    if (!GBridge.isIOS()) {
        //GBridge.setAlpha(this.componentId,alpha);
    }
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.clearDepth = function (depth) {
    var cmd = this.clearDepthId + depth + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.clearStencil = function (s) {
    var cmd = this.clearStencilId + s + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.colorMask = function (red, green, blue, alpha) {
    var cmd = this.colorMaskId + (red ? 1 : 0) + "," + (green ? 1 : 0) + "," + (blue ? 1 : 0) + "," + (alpha ? 1 : 0) + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.compileShader = function (shader) {
    var cmd = this.compileShaderId + shader + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.compressedTexImage2D = function (target, level, internalformat, width, height, border, array) {
    var cmd = this.compressedTexImage2DId + target + "," + level + "," + internalformat + "," + width + "," + height + "," + border + "," + GetArrayType(array) + "," + GarrToBase64(array) + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.compressedTexSubImage2D = function (target, level, xoffset, yoffset, width, height, format, array) {
    var cmd = this.compressedTexSubImage2DId + target + "," + level + "," + xoffset + "," + yoffset + "," + width + "," + height + "," + format + "," + GetArrayType(array) + "," + GarrToBase64(array) + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.copyTexImage2D = function (target, level, internalformat, x, y, width, height, border) {
    var cmd = this.copyTexImage2DId + target + "," + level + "," + internalformat + "," + x + "," + y + "," + width + "," + height + "," + border + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.copyTexSubImage2D = function (target, level, xoffset, yoffset, x, y, width, height) {
    var cmd = this.copyTexSubImage2DId + target + "," + level + "," + xoffset + "," + yoffset + "," + x + "," + y + "," + width + "," + height + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.createBuffer = function () {
    var buffer = new GBuffer();
    var cmd = this.createBufferId + ";";
    buffer.bufferId = WebGLCallNative(this.componentId, cmd);
    return buffer;
};

GContextWebGL.prototype.createFramebuffer = function () {
    var buffer = new GBuffer();
    var cmd = this.createFramebufferId + ";";
    buffer.bufferId = WebGLCallNative(this.componentId, cmd);
    return buffer;
};

GContextWebGL.prototype.createProgram = function () {
    var cmd = this.createProgramId + ";";
    var program = new GProgram();
    program.programId = WebGLCallNative(this.componentId, cmd);
    return program;
};

GContextWebGL.prototype.createRenderbuffer = function () {
    var buffer = new GBuffer();
    var cmd = this.createRenderbufferId + ";";
    buffer.bufferId = WebGLCallNative(this.componentId, cmd);
    return buffer;
};

GContextWebGL.prototype.createShader = function (type) {
    var cmd = this.createShaderId + type + ";";
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.createTexture = function () {
    var texture = new GTexture();
    var cmd = this.createTextureId + ";";
    var result = WebGLCallNative(this.componentId, cmd);
    texture.textureId = parseInt(result) || result;
    return texture;
};

GContextWebGL.prototype.cullFace = function (mode) {
    var cmd = this.cullFaceId + mode + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteBuffer = function (buffer) {
    var bufferId = buffer instanceof GBuffer ? buffer.bufferId : buffer;
    var cmd = this.deleteBufferId + bufferId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteFramebuffer = function (framebuffer) {
    var framebufferId = framebuffer instanceof GBuffer ? framebuffer.bufferId : framebuffer;
    var cmd = this.deleteFramebufferId + framebufferId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteProgram = function (program) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.deleteProgramId + programId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteRenderbuffer = function (renderbuffer) {
    var renderBufferId = renderbuffer instanceof GBuffer ? renderbuffer.bufferId : renderbuffer;
    var cmd = this.deleteRenderbufferId + renderBufferId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteShader = function (shader) {
    var cmd = this.deleteShaderId + shader + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.deleteTexture = function (texture) {
    var textureId = texture instanceof GTexture ? texture.textureId : texture;
    var cmd = this.deleteTextureId + textureId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.depthFunc = function (func) {
    var cmd = this.depthFuncId + func + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.depthMask = function (flag) {
    var cmd = this.depthMaskId + (flag ? 1 : 0) + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.depthRange = function (zNear, zFar) {
    var cmd = this.depthRangeId + zNear + "," + zFar + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.detachShader = function (program, shader) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.detachShaderId + programId + "," + shader + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.disable = function (cap) {
    var cmd = this.disableId + cap + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.disableVertexAttribArray = function (index) {
    var cmd = this.disableVertexAttribArrayId + index + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.drawArrays = function (mode, first, count) {
    var cmd = this.drawArraysId + mode + "," + first + "," + count + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.drawElements = function (mode, count, type, offset) {
    var cmd = this.drawElementsId + mode + "," + count + "," + type + "," + offset + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.enable = function (cap) {
    var cmd = this.enableId + cap + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.enableVertexAttribArray = function (index) {
    var cmd = this.enableVertexAttribArrayId + index + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.flush = function () {
    var cmd = this.flushId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.framebufferRenderbuffer = function (target, attachment, renderbuffertarget, renderbuffer) {
    var renderbufferId = renderbuffer instanceof GBuffer ? renderbuffer.bufferId : renderbuffer;
    var cmd = this.framebufferRenderbufferId + target + "," + attachment + "," + renderbuffertarget + "," + renderbufferId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.framebufferTexture2D = function (target, attachment, textarget, texture, level) {
    var textureId = texture instanceof GTexture ? texture.textureId : texture;
    var cmd = this.framebufferTexture2DId + target + "," + attachment + "," + textarget + "," + textureId + "," + level + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.frontFace = function (mode) {
    var cmd = this.frontFaceId + mode + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.generateMipmap = function (target) {
    var cmd = this.generateMipmapId + target + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.getActiveAttrib = function (program, index) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.getActiveAttribId + programId + "," + index + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GWebGLActiveInfo.convertFormString(resultString);
};

GContextWebGL.prototype.getActiveUniform = function (program, index) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.getActiveUniformId + programId + "," + index + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GWebGLActiveInfo.convertFormString(resultString);
};

//new
GContextWebGL.prototype.getAttachedShaders = function (program) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.getAttachedShadersId + programId + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    var resultArray = resultString.split(",");
    return resultArray;
};

GContextWebGL.prototype.getAttribLocation = function (program, name) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.getAttribLocationId + programId + "," + name + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.getBufferParameter = function (target, pname) {
    var cmd = this.getBufferParameterId + target + "," + pname + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new TODO OpenGL ES not Support
GContextWebGL.prototype.getContextAttributes = function () {
    return null;
};

//new
GContextWebGL.prototype.getError = function () {
    var cmd = this.getErrorId + ";";
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.getExtension = function (name) {
    var ext = null;
    if (name == "ANGLE_instanced_arrays") {
        var gl = this;
        ext = new GContextWebGLExtension(gl);
        ext.drawArraysInstancedANGLE = gl.drawArraysInstancedANGLE;
        ext.drawElementsInstancedANGLE = gl.drawElementsInstancedANGLE;
        ext.vertexAttribDivisorANGLE = gl.vertexAttribDivisorANGLE;

        ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88FE;
    } else if (name == "OES_vertex_array_object") {
        var gl = this;
        ext = new GContextWebGLExtension(gl);
        ext.createVertexArrayOES = gl.createVertexArrayOES;
        ext.deleteVertexArrayOES = gl.deleteVertexArrayOES;
        ext.isVertexArrayOES = gl.isVertexArrayOES;
        ext.bindVertexArrayOES = gl.bindVertexArrayOES;

        ext.VERTEX_ARRAY_BINDING_OES = 0x85B5;
        ext.OES_vertex_array_object = 1;
        ext.OES_texture_float = 1;
        ext.OES_element_index_uint = 1;
    } else if (name == "OES_texture_float") {
        var gl = this;
        ext = new GContextWebGLExtension(gl);
    }

    return ext;
};

//new
GContextWebGL.prototype.getFramebufferAttachmentParameter = function (target, attachment, pname) {
    var cmd = this.getFramebufferAttachmentParameterId + target + "," + attachment + "," + pname + ";";
    return WebGLCallNative(this.componentId, cmd);
};

function GetRetrunResultByString(resultString) {
    if (!resultString) return null;

    var resultArray = resultString.split(",");
    if (resultArray.length < 2) return null;

    var retType = parseInt(resultArray[0]);
    /*
    kReturnBoolean = 1,
    kReturnInt,
    kReturnFloat,
    kReturnIntArray,
    kReturnFloatArray,
    kReturnString
    */
    switch (retType) {
        case 1:
            return parseInt(resultArray[1]) == 1;
        case 2:
            return parseInt(resultArray[1]);
        case 3:
            return parseFloat(resultArray[1]);
        case 4:
        case 5:
            {
                var array = resultArray.slice(1);
                return array;
            }
        case 6:
            return resultArray[1];
        default:
            return null;
    }
}

GContextWebGL.prototype.getParameter = function (pname) {
    var cmd = this.getParameterId + pname + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GetRetrunResultByString(resultString);
};

GContextWebGL.prototype.getProgramInfoLog = function (program) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.getProgramInfoLogId + programId + ";";
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.getProgramParameter = function (program, pname) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.getProgramParameterId + programId + "," + pname + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GetRetrunResultByString(resultString);
};

//new
GContextWebGL.prototype.getRenderbufferParameter = function (target, pname) {
    var cmd = this.getRenderbufferParameterId + target + "," + pname + ";";
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.getShaderInfoLog = function (shader) {
    var cmd = this.getShaderInfoLogId + shader + ";";
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.getShaderParameter = function (shader, pname) {
    var cmd = this.getShaderParameterId + shader + "," + pname + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//return range,precision
GContextWebGL.prototype.getShaderPrecisionFormat = function (shaderType, precisionType) {
    var cmd = this.getShaderPrecisionFormatId + shaderType + "," + precisionType + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    var resultArray = resultString.split(",");

    var precisionFormat = new GWebGLShaderPrecisionFormat();

    if (resultArray.length == 3) {
        precisionFormat.rangeMin = parseInt(resultArray[0]);
        precisionFormat.rangeMax = parseInt(resultArray[1]);
        precisionFormat.precision = parseInt(resultArray[2]);
    }
    return precisionFormat;
};

GContextWebGL.prototype.getShaderSource = function (shader) {
    var cmd = this.getShaderSourceId + shader + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new return array
GContextWebGL.prototype.getSupportedExtensions = function () {
    var cmd = this.getSupportedExtensionsId + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    var resultArray = resultString.split(",");
    return resultArray;
};

//new
GContextWebGL.prototype.getTexParameter = function (target, pname) {
    var cmd = this.getTexParameterId + target + "," + pname + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.getUniform = function (program, location) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.getUniformId + programId + "," + location + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GetRetrunResultByString(resultString);
};

GContextWebGL.prototype.getUniformLocation = function (program, name) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.getUniformLocationId + programId + "," + name + ";";
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.getVertexAttrib = function (index, pname) {
    var cmd = this.getVertexAttribId + index + "," + pname + ";";
    var resultString = WebGLCallNative(this.componentId, cmd);
    return GetRetrunResultByString(resultString);

    // if( !resultString ) return null;

    // var resultArray = resultString.split(",");
    // if( resultArray.length <2 ) return null;

    // var retType = parseInt(resultArray[0]);
    // switch( retType )
    // {
    //     case 2: return parseInt(resultArray[1]);
    //     case 5:
    //     {
    //         var array = resultArray.slice(1);
    //         return array;
    //     }
    //     default: return null;
    // }
};

GContextWebGL.prototype.getVertexAttribOffset = function (index, pname) {
    var cmd = this.getVertexAttribOffsetId + index + "," + pname + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isBuffer = function (buffer) {
    var bufferId = buffer instanceof GBuffer ? buffer.bufferId : buffer;
    var cmd = this.isBufferId + bufferId + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//OpenGL ES not support
GContextWebGL.prototype.isContextLost = function () {
    return false;
};

//new
GContextWebGL.prototype.isEnabled = function (cap) {
    var cmd = this.isEnabledId + cap + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isFramebuffer = function (framebuffer) {
    var framebufferId = framebuffer instanceof GBuffer ? framebuffer.bufferId : framebuffer;
    var cmd = this.isFramebufferId + framebufferId + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isProgram = function (program) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.isProgramId + programId + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isRenderbuffer = function (renderbuffer) {
    var renderbufferId = renderbuffer instanceof GBuffer ? renderbuffer.bufferId : renderbuffer;
    var cmd = this.isRenderbufferId + renderbufferId + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isShader = function (shader) {
    var cmd = this.isShaderId + shader + ";";
    return WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.isTexture = function (texture) {
    var textureId = texture instanceof GTexture ? texture.textureId : texture;
    var cmd = this.isTextureId + textureId + ";";
    return WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.lineWidth = function (width) {
    var cmd = this.lineWidthId + width + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.linkProgram = function (program) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.linkProgramId + programId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.pixelStorei = function (pname, param) {
    // UNPACK_FLIP_Y_WEBGL = 0x9240;
    // obj.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
    //filter _WEBGL feature
    if (pname == 0x9240 || pname == 0x9241) return;

    var cmd = this.pixelStoreiId + pname + "," + param + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.polygonOffset = function (factor, units) {
    var cmd = this.polygonOffsetId + factor + "," + units + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.readPixels = function (x, y, width, height, format, type, pixels) {
    var cmd = this.readPixelsId + x + "," + y + "," + width + "," + height + "," + format + "," + type + ";";
    var pixelsString = WebGLCallNative(this.componentId, cmd);
    var pixelsArray = pixelsString.split(",");
};

GContextWebGL.prototype.renderbufferStorage = function (target, internalformat, width, height) {
    var cmd = this.renderbufferStorageId + target + "," + internalformat + "," + width + "," + height + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.sampleCoverage = function (value, invert) {
    var cmd = this.sampleCoverageId + value + "," + (invert ? 1 : 0) + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.scissor = function (x, y, width, height) {
    var cmd = this.scissorId + x + "," + y + "," + width + "," + height + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.shaderSource = function (shader, source) {
    // var cmd = (this.shaderSourceId + shader + "," + btoa(source) + ";");
    var cmd = this.shaderSourceId + shader + "," + source;
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilFunc = function (func, ref, mask) {
    var cmd = this.stencilFuncId + func + "," + ref + "," + mask + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilFuncSeparate = function (face, func, ref, mask) {
    var cmd = this.stencilFuncSeparateId + face + "," + func + "," + ref + "," + mask + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilMask = function (mask) {
    var cmd = this.stencilMaskId + mask + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilMaskSeparate = function (face, mask) {
    var cmd = this.stencilMaskSeparateId + face + "," + mask + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilOp = function (fail, zfail, zpass) {
    var cmd = this.stencilOpId + fail + "," + zfail + "," + zpass + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.stencilOpSeparate = function (face, fail, zfail, zpass) {
    var cmd = this.stencilOpSeparateId + face + "," + fail + "," + zfail + "," + zpass + ";";
    WebGLCallNative(this.componentId, cmd);
};

// void texImage2D(GLenum target, GLint level, GLint internalformat,
//                   GLsizei width, GLsizei height, GLint border, GLenum format,
//                   GLenum type, [AllowShared] ArrayBufferView? pixels);
//   void texImage2D(GLenum target, GLint level, GLint internalformat,
//                   GLenum format, GLenum type, TexImageSource source); // May throw DOMException
//texImage2D(webgl.TEXTURE_2D, 0, webgl.RGB, webgl.RGB, webgl.UNSIGNED_BYTE, img);
//texImage2D(target, level, internalformat, format, type, img);
//texImage2D(target, level, internalformat, width, height, border, format, type, pixels);
GContextWebGL.prototype.texImage2D = function (target, level, internalformat) {
    var argc = arguments.length;
    if (6 == argc) {
        var format = arguments[3];
        var type = arguments[4];
        var imageData = arguments[5];

        //imageData is GCanvasImage
        if (imageData instanceof GCanvasImage) {
            var cmd = this.texImage2DId + argc + "," + target + "," + level + "," + internalformat + "," + format + "," + type + "," + imageData.src + ";";
            if (!GBridge.isIOS()) {
                GBridge.texImage2D(this.componentId, target, level, internalformat, format, type, imageData.src);
            } else {
                WebGLCallNative(this.componentId, cmd);
            }
        }
    } else if (9 == argc) {
        var width = arguments[3];
        var height = arguments[4];
        var border = arguments[5];
        var format = arguments[6];
        var type = arguments[7];
        var array = arguments[8];

        var cmd = this.texImage2DId + argc + "," + target + "," + level + "," + internalformat + "," + width + "," + height + "," + border + "," + format + "," + type + ",";

        if (array == null) {
            cmd = cmd + 0 + ";";
        } else {
            cmd = cmd + GetArrayType(array) + "," + GarrToBase64(array) + ";";
        }

        // var cmd = (this.texImage2DId + argc + "," + target + "," + level + "," + internalformat + "," +
        //            width + "," + height + "," + border + "," + format + "," + type + "," +
        //            GetArrayType(array) + "," + GarrToBase64(array) + ";");
        WebGLCallNative(this.componentId, cmd);
    }
};

//new
GContextWebGL.prototype.texParameterf = function (target, pname, param) {
    var cmd = this.texParameterfId + target + "," + pname + "," + param + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.texParameteri = function (target, pname, param) {
    var cmd = this.texParameteriId + target + "," + pname + "," + param + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
// void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, ArrayBufferView? pixels);
// void gl.texSubImage2D(target, level, xoffset, yoffset, format, type, ImageData? pixels);
GContextWebGL.prototype.texSubImage2D = function (target, level, xoffset, yoffset) {
    var argc = arguments.length;
    if (argc == 7) {
        var format = arguments[4];
        var type = arguments[5];
        var imageData = arguments[6];

        //imageData is GCanvasImage
        if (imageData instanceof GCanvasImage) {
            if (!GBridge.isIOS()) {
                GBridge.texSubImage2D(this.componentId, target, level, xoffset, yoffset, format, type, imageData.src);
            } else {
                var cmd = this.texSubImage2DId + argc + "," + target + "," + level + "," + xoffset + "," + yoffset + "," + type + "," + imageData.src + ";";
                WebGLCallNative(this.componentId, cmd);
            }
        }
    } else if (argc == 9) {
        var width = arguments[4];
        var height = arguments[5];
        var format = arguments[6];
        var type = arguments[7];
        var array = arguments[8];

        var cmd = this.texSubImage2DId + argc + "," + target + "," + level + "," + xoffset + "," + yoffset + "," + width + "," + height + "," + format + "," + type + "," + GetArrayType(array) + "," + GarrToBase64(array) + ";";
        WebGLCallNative(this.componentId, cmd);
    }
};

function trans2ArrayType(type, ar) {
    if (ar instanceof type) return ar;
    var len = ar.length;
    var f32ar = new type(len);
    for (var i = 0; i < len; i++) {
        f32ar[i] = ar[i];
    }
    return f32ar;
}

GContextWebGL.prototype.uniformXXv_ = function (id, value, type, cmdId) {
    if (value.length == 0) return;

    value = trans2ArrayType(type, value);
    var cmd = cmdId + id + "," + 0 + "," + GarrToBase64(value) + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform1f = function (location, value) {
    var cmd = this.uniform1fId + location + "," + value + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform1fv = function (location, value) {
    this.uniformXXv_(location, value, Float32Array, this.uniform1fvId);
};

GContextWebGL.prototype.uniform1i = function (location, value) {
    var cmd = this.uniform1iId + location + "," + value + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform1iv = function (location, value) {
    this.uniformXXv_(location, value, Int32Array, this.uniform1ivId);
};

GContextWebGL.prototype.uniform2f = function (location, x, y) {
    var cmd = this.uniform2fId + location + "," + x + "," + y + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform2fv = function (location, value) {
    this.uniformXXv_(location, value, Float32Array, this.uniform2fvId);
};

GContextWebGL.prototype.uniform2i = function (location, x, y) {
    var cmd = this.uniform2iId + location + "," + x + "," + y + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform2iv = function (location, value) {
    this.uniformXXv_(location, value, Int32Array, this.uniform2ivId);
};

GContextWebGL.prototype.uniform3f = function (location, x, y, z) {
    var cmd = this.uniform3fId + location + "," + x + "," + y + "," + z + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform3fv = function (location, value) {
    this.uniformXXv_(location, value, Float32Array, this.uniform3fvId);
};

GContextWebGL.prototype.uniform3i = function (location, x, y, z) {
    var cmd = this.uniform3iId + location + "," + x + "," + y + "," + z + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform3iv = function (location, value) {
    this.uniformXXv_(location, value, Int32Array, this.uniform3ivId);
};

GContextWebGL.prototype.uniform4f = function (location, x, y, z, w) {
    var cmd = this.uniform4fId + location + "," + x + "," + y + "," + z + "," + w + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform4fv = function (location, value) {
    this.uniformXXv_(location, value, Float32Array, this.uniform4fvId);
};

GContextWebGL.prototype.uniform4i = function (location, x, y, z, w) {
    var cmd = this.uniform4iId + location + "," + x + "," + y + "," + z + "," + w + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniform4iv = function (location, value) {
    this.uniformXXv_(location, value, Int32Array, this.uniform4ivId);
};

GContextWebGL.prototype.uniformMatrixXfv_ = function (location, transpose, value, apiId) {
    if (value.length == 0) return;
    var cmd = apiId + location + "," + (transpose ? 1 : 0) + "," + 0 + "," + GarrToBase64(value) + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.uniformMatrix2fv = function (location, transpose, value) {
    this.uniformMatrixXfv_(location, transpose, value, this.uniformMatrix2fvId);
};

GContextWebGL.prototype.uniformMatrix3fv = function (location, transpose, value) {
    this.uniformMatrixXfv_(location, transpose, value, this.uniformMatrix3fvId);
};

GContextWebGL.prototype.uniformMatrix4fv = function (location, transpose, value) {
    this.uniformMatrixXfv_(location, transpose, value, this.uniformMatrix4fvId);
};

GContextWebGL.prototype.useProgram = function (program) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.useProgramId + programId + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.validateProgram = function (program) {
    var programId = program instanceof GProgram ? program.programId : program;
    var cmd = this.validateProgramId + programId + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.vertexAttrib1f = function (index, v0) {
    var cmd = this.vertexAttrib1fId + index + "," + v0 + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.vertexAttrib2f = function (index, v0, v1) {
    var cmd = this.vertexAttrib2fId + index + "," + v0 + "," + v1 + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.vertexAttrib3f = function (index, v0, v1, v2) {
    var cmd = this.vertexAttrib3fId + index + "," + v0 + "," + v1 + "," + v2 + ";";
    WebGLCallNative(this.componentId, cmd);
};

//new
GContextWebGL.prototype.vertexAttrib4f = function (index, v0, v1, v2, v3) {
    var cmd = this.vertexAttrib4fId + index + "," + v0 + "," + v1 + "," + v2 + "," + v3 + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.vertexAttribXXfv_ = function (index, value, type, cmdId) {
    if (value.length == 0) return;

    value = trans2ArrayType(type, value);
    var cmd = cmdId + index + "," + GarrToBase64(value) + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.vertexAttrib1fv = function (index, valueArray) {
    this.vertexAttribXXfv_(index, valueArray, Float32Array, this.vertexAttrib1fvId);
};

GContextWebGL.prototype.vertexAttrib2fv = function (index, valueArray) {
    this.vertexAttribXXfv_(index, valueArray, Float32Array, this.vertexAttrib2fvId);
};

GContextWebGL.prototype.vertexAttrib3fv = function (index, valueArray) {
    this.vertexAttribXXfv_(index, valueArray, Float32Array, this.vertexAttrib3fvId);
};

GContextWebGL.prototype.vertexAttrib4fv = function (index, valueArray) {
    this.vertexAttribXXfv_(index, valueArray, Float32Array, this.vertexAttrib4fvId);
};

// GContextWebGL.prototype.vertexAttrib2fv = function(index, value){
//     var cmd = this.vertexAttrib2fvId + index;
//     for (var i = 0; i < value.length; i++) {
//         cmd += ",";
//         cmd += value[i].toFixed(3);
//     }
//     cmd += ";";
//     WebGLCallNative(this.componentId, cmd);
// };

GContextWebGL.prototype.vertexAttribPointer = function (index, size, type, normalized, stride, offset) {
    var cmd = this.vertexAttribPointerId + index + "," + size + "," + type + "," + (normalized ? 1 : 0) + "," + stride + "," + offset + ";";
    WebGLCallNative(this.componentId, cmd);
};

GContextWebGL.prototype.viewport = function (x, y, width, height) {
    var cmd = this.viewportId + x + "," + y + "," + width + "," + height + ";";
    WebGLCallNative(this.componentId, cmd);
};

////////////////////////////////////////////
// WebGL Extension
////////////////////////////////////////////


//extension for ANGLE_instanced_arrays
GContextWebGL.prototype.drawArraysInstancedANGLE = function (mode, first, count, primcount) {
    var gl = this;
    if (this instanceof GContextWebGLExtension) {
        gl = this.gl;
    }
    var cmd = gl.drawArraysInstancedANGLEId + mode + "," + first + "," + count + "," + primcount + ";";
    WebGLCallNative(gl.componentId, cmd);
};

GContextWebGL.prototype.drawElementsInstancedANGLE = function (mode, count, type, offset, primcount) {
    var gl = this;
    if (this instanceof GContextWebGLExtension) {
        gl = this.gl;
    }
    var cmd = gl.drawElementsInstancedANGLEId + mode + "," + count + "," + type + "," + offset + "," + primcount + ";";
    WebGLCallNative(gl.componentId, cmd);
};

GContextWebGL.prototype.vertexAttribDivisorANGLE = function (index, divisor) {
    var gl = this;
    if (this instanceof GContextWebGLExtension) {
        gl = this.gl;
    }
    var cmd = gl.vertexAttribDivisorANGLEId + index + "," + divisor + ";";
    WebGLCallNative(gl.componentId, cmd);
};

//extension for OES_vertex_array_object
GContextWebGL.prototype.deleteVertexArrayOES = function (array) {
    var gl = this;
    if (this instanceof GContextWebGLExtension) {
        gl = this.gl;
    }
    var cmd = gl.deleteVertexArrayOESId + array + ";";
    WebGLCallNative(gl.componentId, cmd);
};

GContextWebGL.prototype.createVertexArrayOES = function () {
    var gl = this;
    if (this instanceof GContextWebGLExtension) {
        gl = this.gl;
    }
    var cmd = gl.createVertexArrayOESId + ";";
    return WebGLCallNative(gl.componentId, cmd);
};

GContextWebGL.prototype.isVertexArrayOES = function (array) {
    var gl = this;
    if (this instanceof GContextWebGLExtension) {
        gl = this.gl;
    }
    var cmd = gl.isVertexArrayOESId + array + ";";
    return WebGLCallNative(gl.componentId, cmd);
};

GContextWebGL.prototype.bindVertexArrayOES = function (array) {
    var gl = this;
    if (this instanceof GContextWebGLExtension) {
        gl = this.gl;
    }
    var cmd = gl.bindVertexArrayOESId + array + ";";
    WebGLCallNative(gl.componentId, cmd);
};

module.exports = GContextWebGL;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function GTexture() {
  this.textureId = 0;
  this.image = "";
}

module.exports = GTexture;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function GBuffer() {
  this.bufferId = 0;
}

module.exports = GBuffer;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function GProgram() {
  this.programId = 0;
  this.vertex = "";
  this.fragment = "";
}
GProgram.prototype.attachShader = function (type, shader) {
  if (type === 'vertex') {
    this.vertex = shader;
  } else if (type === 'fragment') {
    this.fragment = shader;
  }
};

module.exports = GProgram;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GBridge = __webpack_require__(2).GBridge;
var GLog = __webpack_require__(2).GLog;
var GHashMap = __webpack_require__(5);
var GCanvasImage = __webpack_require__(4);
var GCodec = __webpack_require__(7);

function GContext2D() {
    this._drawCommands = "";
    this._globalAlpha = 1.0;
    this._fillStyle = "rgb(0,0,0)";
    this._strokeStyle = "rgb(0,0,0)";
    this._lineWidth = 1;
    this._lineCap = "butt";
    this._lineJoin = "miter";
    this._miterLimit = 10;
    this._globalCompositeOperation = "source-over";
    this._textAlign = "start";
    this._textBaseline = "alphabetic";
    this._font = "10px sans-serif";
    // this._images = {};
    // this._canvases1 = {};
    // this._canvases2 = {};
    // this._getImageData = new Array();

    // GCanvas._forbiddenAutoReplaceCanvas =true;
    // this._apiCanvas  = document.createElement('canvas');
    // GCanvas._forbiddenAutoReplaceCanvas =false;
    // console.error("apicanvas="+this._apiCanvas);
    // this._apiContext = this._apiCanvas.getContext("2d");
    // this._apiContext.font = this._font;

    this._savedGlobalAlpha = [];
    this.timer = null;
    this.componentId = null;

    this._imageMap = new GHashMap();
    this._textureMap = new GHashMap();
}

/////////////////////////////////////////////////////////////////
// FillStylePattern
/////////////////////////////////////////////////////////////////
function FillStylePattern(img, pattern) {
    this._style = pattern;
    this._img = img;
}

/////////////////////////////////////////////////////////////////
// FillStyleLinearGradient
/////////////////////////////////////////////////////////////////
function FillStyleLinearGradient(x0, y0, x1, y1) {
    this._start_pos = { _x: x0, _y: y0 };
    this._end_pos = { _x: x1, _y: y1 };
    this._stop_count = 0;
    this._stops = [0, 0, 0, 0, 0];
}

FillStyleLinearGradient.prototype.addColorStop = function (pos, color) {
    if (this._stop_count < 5 && 0.0 <= pos && pos <= 1.0) {
        this._stops[this._stop_count] = { _pos: pos, _color: color };
        this._stop_count++;
    }
};

/////////////////////////////////////////////////////////////////
// FillStyleRadialGradient
/////////////////////////////////////////////////////////////////
function FillStyleRadialGradient(x0, y0, r0, x1, y1, r1) {
    this._start_pos = { _x: x0, _y: y0, _r: r0 };
    this._end_pos = { _x: x1, _y: y1, _r: r1 };
    this._stop_count = 0;
    this._stops = [0, 0, 0, 0, 0];
}

FillStyleRadialGradient.prototype.addColorStop = function (pos, color) {
    if (this._stop_count < 5 && 0.0 <= pos && pos <= 1.0) {
        this._stops[this._stop_count] = { _pos: pos, _color: color };
        this._stop_count++;
    }
};

/**
 * Represents the alpha value to be used with drawing commands where 1 is
 * completely visible and 0 is fully transparent.
 *
 * @type {number}
 * @name GContext2D#globalAlpha
 */
Object.defineProperty(GContext2D.prototype, "globalAlpha", {
    get: function get() {
        return this._globalAlpha;
    },
    set: function set(value) {
        // if (this._globalAlpha != value) {
        this._globalAlpha = value;
        this._drawCommands = this._drawCommands.concat("a" + value.toFixed(2) + ";");
        // }
    }
});

/**
 * Represents the color or style to use inside shapes. It can only be a
 * string which must be parsed as CSS <color> value for now.
 *
 * @type {string}
 * @name GContext2D#fillStyle
 * @example // set context fillStyle context.fillStyle = 'rgb(121,194,245)';
 */
Object.defineProperty(GContext2D.prototype, "fillStyle", {
    get: function get() {
        return this._fillStyle;
    },
    set: function set(value) {
        this._fillStyle = value;

        if (typeof value == 'string') {
            this._drawCommands = this._drawCommands.concat("F" + value + ";");
        } else if (value instanceof FillStylePattern) {
            if (value._img instanceof GCanvasImage) {
                GBridge.bindImageTexture(this.componentId, [value._img.src, value._img.id], function () {});
                this._drawCommands = this._drawCommands.concat("G" + value._img._id + "," + value._style + ";");
            }
        } else if (value instanceof FillStyleLinearGradient) {
            var command = "D" + value._start_pos._x.toFixed(2) + "," + value._start_pos._y.toFixed(2) + "," + value._end_pos._x.toFixed(2) + "," + value._end_pos._y.toFixed(2) + "," + value._stop_count;

            for (var i = 0; i < value._stop_count; ++i) {
                command += "," + value._stops[i]._pos + "," + value._stops[i]._color;
            }
            this._drawCommands = this._drawCommands.concat(command + ";");
        } else if (value instanceof FillStyleRadialGradient) {
            var command = "H" + value._start_pos._x.toFixed(2) + "," + value._start_pos._y.toFixed(2) + "," + value._start_pos._r.toFixed(2) + "," + value._end_pos._x.toFixed(2) + "," + value._end_pos._y.toFixed(2) + "," + value._end_pos._r.toFixed(2) + "," + value._stop_count;

            for (var i = 0; i < value._stop_count; ++i) {
                command += "," + value._stops[i]._pos + "," + value._stops[i]._color;
            }
            this._drawCommands = this._drawCommands.concat(command + ";");
        }
    }
});

/**
 * Represents the color or style for the lines. It can only be a string
 * which must be parsed as CSS <color> value for now.
 *
 * @type {string}
 * @name GContext2D#strokeStyle
 * @example // set context strokeStyle context.strokeStyle = 'rgb(121,194,245)';
 */
Object.defineProperty(GContext2D.prototype, "strokeStyle", {
    get: function get() {
        return this._strokeStyle;
    },
    set: function set(value) {
        this._strokeStyle = value;

        if (typeof value == 'string') {
            this._drawCommands = this._drawCommands.concat("S" + value + ";");
        } else if (value instanceof FillStylePattern) {
            if (value._img instanceof GCanvasImage) {
                GBridge.bindImageTexture(this.componentId, [value._img.src, value._img.id], function () {});
                this._drawCommands = this._drawCommands.concat("G" + value._img._id + "," + value._style + ";");
            }
        } else if (value instanceof FillStyleLinearGradient) {
            var command = "D" + value._start_pos._x.toFixed(2) + "," + value._start_pos._y.toFixed(2) + "," + value._end_pos._x.toFixed(2) + "," + value._end_pos._y.toFixed(2) + "," + value._stop_count;

            for (var i = 0; i < value._stop_count; ++i) {
                command += "," + value._stops[i]._pos + "," + value._stops[i]._color;
            }
            this._drawCommands = this._drawCommands.concat(command + ";");
        } else if (value instanceof FillStyleRadialGradient) {
            var command = "H" + value._start_pos._x.toFixed(2) + "," + value._start_pos._y.toFixed(2) + "," + value._start_pos._r.toFixed(2) + "," + value._end_pos._x.toFixed(2) + "," + value._end_pos._y + ",".toFixed(2) + value._end_pos._r.toFixed(2) + "," + value._stop_count;

            for (var i = 0; i < value._stop_count; ++i) {
                command += "," + value._stops[i]._pos + "," + value._stops[i]._color;
            }
            this._drawCommands = this._drawCommands.concat(command + ";");
        }
    }
});

/**
 * Represents the width of the lines.
 *
 * @type {number}
 * @name GContext2D#lineWidth
 * @example // set context lineWidth context.lineWidth = 2;
 */
Object.defineProperty(GContext2D.prototype, "lineWidth", {
    get: function get() {
        return this._lineWidth;
    },
    set: function set(value) {
        this._lineWidth = value;
        this._drawCommands = this._drawCommands.concat("W" + value + ";");
    }
});
/**
 * The lineCap property sets or returns the style of the end caps for a line.
 *
 * @type {number}
 * @name GContext2D#lineCap
 * @example // set context lineCap context.lineCap="round";
 */
Object.defineProperty(GContext2D.prototype, "lineCap", {
    get: function get() {
        return this._lineCap;
    },
    set: function set(value) {
        this._lineCap = value;
        this._drawCommands = this._drawCommands.concat("C" + value + ";");
    }
});

/**
 * Sets or returns the type of corner created, when two lines meet
 *
 * @type {number}
 * @name GContext2D#lineJoin
 * @example // set context lineJoin context.lineJoin="round";
 */
Object.defineProperty(GContext2D.prototype, "lineJoin", {
    get: function get() {
        return this._lineJoin;
    },
    set: function set(value) {
        this._lineJoin = value;
        this._drawCommands = this._drawCommands.concat("J" + value + ";");
    }
});

/**
 * Sets or returns the maximum miter length
 *
 * @type {number}
 * @name GContext2D#miterLimit
 * @example // set context miterLimit context.miterLimit=10;
 */
Object.defineProperty(GContext2D.prototype, "miterLimit", {
    get: function get() {
        return this._miterLimit;
    },
    set: function set(value) {
        this._miterLimit = value;
        this._drawCommands = this._drawCommands.concat("M" + value + ";");
    }
});

/**
 * Represents the globalCompositeOperation value to be used with drawing
 * commands where 1 is completely visible and 0 is fully transparent.
 *
 * @type {number}
 * @name GContext2D#globalCompositeOperation
 */
Object.defineProperty(GContext2D.prototype, "globalCompositeOperation", {
    get: function get() {
        return this._globalCompositeOperation;
    },

    set: function set(value) {
        // if (this._globalCompositeOperation != value) {

        this._globalCompositeOperation = value;
        var mode = 0;
        switch (value) {
            case "source-over":
                mode = 0;
                break;
            case "source-atop":
                mode = 5;
                break;
            case "source-in":
                mode = 0;
                break;
            case "source-out":
                mode = 2;
                break;
            case "destination-over":
                mode = 4;
                break;
            case "destination-atop":
                mode = 4;
                break;
            case "destination-in":
                mode = 4;
                break;
            case "destination-out":
                mode = 3;
                break;
            case "lighter":
                mode = 1;
                break;
            case "copy":
                mode = 2;
                break;
            case "xor":
                mode = 6;
                break;
            default:
                mode = 0;
        }

        this._drawCommands = this._drawCommands.concat("B" + mode + ";");
        // }
    }
});

/**
 * Represents the textAlign value to be used with drawing commands
 *
 * @type {number}
 * @name GContext2D#textAlign
 */
Object.defineProperty(GContext2D.prototype, "textAlign", {
    get: function get() {
        return this._textAlign;
    },

    set: function set(value) {
        // if (this._textAlign != value) {
        this._textAlign = value;
        var Align = 0;
        switch (value) {
            case "start":
                Align = 0;
                break;
            case "end":
                Align = 1;
                break;
            case "left":
                Align = 2;
                break;
            case "center":
                Align = 3;
                break;
            case "right":
                Align = 4;
                break;
            default:
                Align = 0;
        }

        this._drawCommands = this._drawCommands.concat("A" + Align + ";");
        // }
    }
});

/**
 * Represents the _textBaseline value to be used with drawing commands
 *
 * @type {number}
 * @name GContext2D#_textBaseline
 */
Object.defineProperty(GContext2D.prototype, "textBaseline", {
    get: function get() {
        return this._textBaseline;
    },

    set: function set(value) {
        this._textBaseline = value;
        var baseline = 0;
        switch (value) {
            case "alphabetic":
                baseline = 0;
                break;
            case "middle":
                baseline = 1;
                break;
            case "top":
                baseline = 2;
                break;
            case "hanging":
                baseline = 3;
                break;
            case "bottom":
                baseline = 4;
                break;
            case "ideographic":
                baseline = 5;
                break;
            default:
                baseline = 0;
                break;
        }

        this._drawCommands = this._drawCommands.concat("E" + baseline + ";");
    }
});

/**
 * Represents the textAlign value to be used with drawing commands
 *
 * @type {number}
 * @name GContext2D#textAlign
 */
Object.defineProperty(GContext2D.prototype, "font", {
    get: function get() {
        return this._font;
    },
    set: function set(value) {
        // if (this._font != value) {
        this._font = value;
        this._drawCommands = this._drawCommands.concat("j" + value + ";");
        // }
    }
});

/**
 * Loads an image into the plugin to be used as a texture in the GCanvas.
 * Generally this method is never called directly. Instead, it is called
 * indirectly through GCanvasImage instances upon setting their
 * {@link GCanvasImage#src|GCanvasImage.src} property.
 *
 * @param {GCanvasImage}
 *            image The image to be loaded into the GCanvas plugin.
 * @param {function}
 *            [successCallback] A callback that is fired when the image has
 *            been successfully loaded.
 * @param {function}
 *            [errorCallback] A callback that is fired when there was an
 *            error in loading the image.
 * @example // create a new image and load // it from a relative URL path
 *          var myImage = GCanvas.createImage(); myImage.src =
 *          "images/spritesheet.jpg"; // calls loadTexture for you
 * @private
 */
GContext2D.prototype.loadTexture = function (image, successCallback, errorCallback) {
    var data = this._imageMap.get(image.src);
    if (data) {
        successCallback && successCallback(data);
        return;
    }

    var that = this;
    GBridge.preLoadImage([image.src, image.id], function (e) {
        if (e) {
            that._imageMap.put(image.src, e);
            successCallback && successCallback(e);
        } else {
            errorCallback && errorCallback(e);
        }
    });
};

/**
 * Unloads an image from the GCanvas plugin. Generally this method is
 * never called directly. Instead, it is called indirectly through
 * GCanvasImage instances upon setting their
 * {@link GCanvasImage#src|GCanvasImage.src} property to a false value
 * such as <code>null</code> or an empty string (<code>""</code>).
 *
 * @param {GCanvasImage}
 *            image The image to be unloaded from the GCanvas plugin.
 * @example // unload an image from memory myImage.src = null; // calls
 *          unloadTexture for you
 * @private
 */
GContext2D.prototype.unloadTexture = function (image) {
    this._imageMap.remove(image.src);
};

/**
 * Defines the 2D matrix transform applied to drawings within the context.
 *
 * @param {number}
 *            a The value that affects the positioning of pixels along the x
 *            axis when scaling or rotating the context.
 * @param {number}
 *            b The value that affects the positioning of pixels along the y
 *            axis when rotating or skewing the context.
 * @param {number}
 *            c The value that affects the positioning of pixels along the x
 *            axis when rotating or skewing the context.
 * @param {number}
 *            d The value that affects the positioning of pixels along the y
 *            axis when scaling or rotating the context.
 * @param {number}
 *            tx The distance by which to translate the context along the x
 *            axis.
 * @param {number}
 *            ty The distance by which to translate the context along the y
 *            axis.
 */
GContext2D.prototype.setTransform = function (a, b, c, d, tx, ty) {
    this._drawCommands = this._drawCommands.concat("t" + (a === 1 ? "1" : a.toFixed(2)) + "," + (b === 0 ? "0" : b.toFixed(2)) + "," + (c === 0 ? "0" : c.toFixed(2)) + "," + (d === 1 ? "1" : d.toFixed(2)) + "," + tx.toFixed(2) + "," + ty.toFixed(2) + ";");
};

/**
 * Defines an added 2D matrix transform applied to drawings within the
 * context.
 *
 * @param {number}
 *            a The value added to the value that affects the positioning of
 *            pixels along the x axis when scaling or rotating the context.
 * @param {number}
 *            b The value added to the value that affects the positioning of
 *            pixels along the y axis when rotating or skewing the context.
 * @param {number}
 *            c The value added to the value that affects the positioning of
 *            pixels along the x axis when rotating or skewing the context.
 * @param {number}
 *            d The value added to the value that affects the positioning of
 *            pixels along the y axis when scaling or rotating the context.
 * @param {number}
 *            tx The value added to the distance by which to translate the
 *            context along the x axis.
 * @param {number}
 *            ty The value added to the distance by which to translate the
 *            context along the y axis.
 */
GContext2D.prototype.transform = function (a, b, c, d, tx, ty) {
    this._drawCommands = this._drawCommands.concat("f" + (a === 1 ? "1" : a.toFixed(2)) + "," + (b === 0 ? "0" : b.toFixed(2)) + "," + (c === 0 ? "0" : c.toFixed(2)) + "," + (d === 1 ? "1" : d.toFixed(2)) + "," + tx + "," + ty + ";");
};

/**
 * Restores the 2D matrix transform to the identity matrix. This is
 * equivalent to calling <code>context.setTransform(1,0,0,1,0,0)</code>.
 */
GContext2D.prototype.resetTransform = function () {
    this._drawCommands = this._drawCommands.concat("m;");
};

/**
 * Scales the 2D matrix transform along the x and y axes.
 *
 * @param {number}
 *            a The value added to the value that affects the positioning of
 *            pixels along the x axis when scaling or rotating the context.
 * @param {number}
 *            d The value added to the value that affects the positioning of
 *            pixels along the y axis when scaling or rotating the context.
 */
GContext2D.prototype.scale = function (a, d) {
    this._drawCommands = this._drawCommands.concat("k" + a.toFixed(2) + "," + d.toFixed(2) + ";");
};

/**
 * Rotates the 2D matrix transform by a specified number of radians.
 *
 * @param {number}
 *            angle The value in radians to rotate the context.
 */
GContext2D.prototype.rotate = function (angle) {
    this._drawCommands = this._drawCommands.concat("r" + angle.toFixed(6) + ";");
};

/**
 * Moves the 2D matrix transform along the x and y axes.
 *
 * @param {number}
 *            tx The value added to the distance by which to translate the
 *            context along the x axis.
 * @param {number}
 *            ty The value added to the distance by which to translate the
 *            context along the y axis.
 */
GContext2D.prototype.translate = function (tx, ty) {
    this._drawCommands = this._drawCommands.concat("l" + tx.toFixed(2) + "," + ty.toFixed(2) + ";");
};

/**
 * Sets a save point for the current context transform. This allows you to
 * arbitrarily modify the transform and restore it back to its to its
 * original state at the time save() was called by using restore().
 *
 * @see GContext2D#restore
 */
GContext2D.prototype.save = function () {
    this._savedGlobalAlpha.push(this._globalAlpha);
    this._drawCommands = this._drawCommands.concat("v;");
};

/**
 * Restores the state of the context transform to the state at the point in
 * time when save() was last called.
 *
 * @see GContext2D#save
 */
GContext2D.prototype.restore = function () {
    this._drawCommands = this._drawCommands.concat("e;");
    this._globalAlpha = this._savedGlobalAlpha.pop();
};

GContext2D.prototype._concatDrawCmd = function (numArgs, imageInfo, sx, sy, sw, sh, // source (or destination if fewer args)
dx, dy, dw, dh) {
    // destination

    if (!imageInfo) {
        return;
    }

    if (numArgs === 3) {
        var x = parseFloat(sx) || 0.0;
        var y = parseFloat(sy) || 0.0;

        this._drawCommands += "d" + imageInfo.id + ",0,0," + imageInfo.width + "," + imageInfo.height + "," + x + "," + y + "," + imageInfo.width + "," + imageInfo.height + ";";
    } else if (numArgs === 5) {
        var x = parseFloat(sx) || 0.0;
        var y = parseFloat(sy) || 0.0;
        var width = parseInt(sw) || imageInfo.width;
        var height = parseInt(sh) || imageInfo.height;

        this._drawCommands += "d" + imageInfo.id + ",0,0," + imageInfo.width + "," + imageInfo.height + "," + x + "," + y + "," + width + "," + height + ";";
    } else if (numArgs === 9) {
        var sx = parseFloat(sx) || 0.0;
        var sy = parseFloat(sy) || 0.0;
        var sw = parseInt(sw) || imageInfo.width;
        var sh = parseInt(sh) || imageInfo.height;
        var dx = parseFloat(dx) || 0.0;
        var dy = parseFloat(dy) || 0.0;
        var dw = parseInt(dw) || imageInfo.width;
        var dh = parseInt(dh) || imageInfo.height;

        this._drawCommands += "d" + imageInfo.id + "," + sx + "," + sy + "," + sw + "," + sh + "," + dx + "," + dy + "," + dw + "," + dh + ";";
    }
};

GContext2D.prototype.drawImage = function (image, // image
sx, sy, sw, sh, // source (or destination if fewer args)
dx, dy, dw, dh) {
    // destination

    //GLog.d("[GContext2D.drawImage] start...");

    var that = this;
    var numArgs = arguments.length;

    //Offscreen image is GCanvas instance
    if (typeof image.componentId != 'undefined') {
        var destComponentId = image.componentId;
        var gcanvasImage = new GCanvasImage();
        gcanvasImage.width = image.width;
        gcanvasImage.height = image.height;

        if (GBridge.isIOS()) {
            gcanvasImage.src = "offscreen_" + destComponentId;
            //延迟调用
            setTimeout(function () {
                GBridge.bindImageTexture(that.componentId, [gcanvasImage.src, gcanvasImage.id], function () {});
                that._concatDrawCmd(numArgs, gcanvasImage, sx, sy, sw, sh, dx, dy, dw, dh);
            }, 200);
        } else {
            gcanvasImage.id = 0;
            var destContext = image.context;
            destContext._drawCommands = destContext._drawCommands.concat("X" + this.componentId + ";");
            GBridge.callRender(this.componentId, "Y" + destComponentId + ";");
            this._concatDrawCmd(numArgs, gcanvasImage, sx, sy, sw, sh, dx, dy, dw, dh);
        }
        return;
    }

    var cacheKey = this.componentId + "_" + image.id;
    var imageCache = this._getImageTexture(cacheKey);

    if (imageCache) {
        this._concatDrawCmd(numArgs, image, sx, sy, sw, sh, dx, dy, dw, dh);
        return;
    }

    if (GBridge.isIOS()) {
        GBridge.bindImageTexture(this.componentId, [image.src, image.id], function () {});
        this._concatDrawCmd(numArgs, image, sx, sy, sw, sh, dx, dy, dw, dh);
        this._saveImageTexture(cacheKey, image);
    } else {
        if (typeof callGCanvasLinkNative !== 'undefined') {
            GBridge.bindImageTexture(that.componentId, [image.src, image.id], function (e) {
                if (!e.error) {
                    if (image.width === 0 && e.width > 0) {
                        image.width = e.width;
                    }

                    if (image.height === 0 && e.height > 0) {
                        image.height = e.height;
                    }
                    that._concatDrawCmd(numArgs, image, sx, sy, sw, sh, dx, dy, dw, dh);
                    that._saveImageTexture(cacheKey, image);
                }
            });
        } else {
            // GLog.d('gcontext2d#drawImage()');
            GBridge.bindImageTexture(that.componentId, image.src, function (e) {
                if (!e.error) {
                    if (image.width === 0 && e.width > 0) {
                        image.width = e.width;
                    }

                    if (image.height === 0 && e.height > 0) {
                        image.height = e.height;
                    }
                    that._concatDrawCmd(numArgs, image, sx, sy, sw, sh, dx, dy, dw, dh);
                    that._saveImageTexture(cacheKey, image);
                }
            });
        }
    }
};

GContext2D.prototype._getImageTexture = function (url) {
    if (url) {
        return this._textureMap.get(url);
    }
    return null;
};

GContext2D.prototype._removeImageTexture = function (url) {
    if (url) {
        this._textureMap.remove(url);
    }
};

GContext2D.prototype._saveImageTexture = function (url, e) {
    if (e && e.src) {
        this._textureMap.put(url, e);
    }
};

GContext2D.prototype._clearImageTextures = function () {
    this._textureMap.clear();
};

/**
 * Informs the drawing context that drawing commands have completed for the
 * current frame and the should be sent to the GCanvas plugin for drawing
 * to the screen.
 * <p>
 * This method is unique to GContext2D and does not exist within the HTML
 * 2D context, so the utility method {@link GCanvas.render} should be
 * used to make it easy to call or not call this method depending on the
 * context you are currently working with.
 * </p>
 *
 * @example // makes necessary GCanvas render call // if canvas being
 *          used is GCanvas var myCanvas = GCanvas.create(); var
 *          myContext = myCanvas.getContext("2d");
 *  // ... myContext.translate(10,10); myContext.rotate(Math.PI); //
 * ...
 *  // after all context calls are complete // for the current frame:
 * GCanvas.render(); // calls GContext2D.render()
 */

GContext2D.prototype.render = function (flag) {
    if (this.timer && typeof flag === "undefined") {
        clearInterval(this.timer);
        this.timer = null;
    }

    var commands = this._drawCommands;
    this._drawCommands = "";
    if (commands !== null && commands !== "") {
        GBridge.callRender(this.componentId, commands);
    }
};

/**
 * Implementation of GCanvas.capture.
 *
 * @private
 */
GContext2D.prototype.capture = function (x, y, w, h, fileName, successCallback, errorCallback) {
    // if (successCallback && typeof successCallback !== 'function') {
    //     throw new Error('successCallback parameter not a function');
    // }
    // if (errorCallback && typeof errorCallback !== 'function') {
    //     throw new Error('errorCallback parameter not a function');
    // }

    // GCanvas._toNative(successCallback, errorCallback, 'GCanvas',
    //         'capture', [ x, y, w, h, fileName ]);
};

GContext2D.prototype.createPattern = function (img, pattern) {
    return new FillStylePattern(img, pattern);
};

/**
 * Implementation of GCanvas.createLinearGradient(x0, y0, x1, y1).
 *
 * @private
 */
GContext2D.prototype.createLinearGradient = function (x0, y0, x1, y1) {
    return new FillStyleLinearGradient(x0, y0, x1, y1);
};

/**
 * Implementation of GCanvas.createRadialGradient(x0, y0, x1, y1).
 *
 * @private
 */
GContext2D.prototype.createRadialGradient = function (x0, y0, r0, x1, y1, r1) {
    return new FillStyleRadialGradient(x0, y0, r0, x1, y1, r1);
};

GContext2D.prototype.strokeRect = function (x, y, w, h, successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("s" + x + "," + y + "," + w + "," + h + ";");
};

GContext2D.prototype.clearRect = function (x, y, w, h, successCallback, errorCallback) {
    // TODO: enable it later.
    this._drawCommands = this._drawCommands.concat("c" + x + "," + y + "," + w + "," + h + ";");
};

GContext2D.prototype.clip = function (successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("p;");
};

GContext2D.prototype.resetClip = function (successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("q;");
};

GContext2D.prototype.closePath = function (successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("o;");
};

GContext2D.prototype.moveTo = function (x, y, successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("g" + x.toFixed(2) + "," + y.toFixed(2) + ";");
};

GContext2D.prototype.lineTo = function (x, y, successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("i" + x.toFixed(2) + "," + y.toFixed(2) + ";");
};

GContext2D.prototype.quadraticCurveTo = function (cpx, cpy, x, y, successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("u" + cpx + "," + cpy + "," + x + "," + y + ";");
};

GContext2D.prototype.bezierCurveTo = function (cp1x, cp1y, cp2x, cp2y, x, y, successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("z" + cp1x.toFixed(2) + "," + cp1y.toFixed(2) + "," + cp2x.toFixed(2) + "," + cp2y.toFixed(2) + "," + x.toFixed(2) + "," + y.toFixed(2) + ";");
};

GContext2D.prototype.arcTo = function (x1, y1, x2, y2, radius, successCallback, errorCallback) {
    this._drawCommands = this._drawCommands.concat("h" + x1 + "," + y1 + "," + x2 + "," + y2 + "," + radius + ";");
};

/**
 * Resets the current default path.
 *
 * @param null
 */
GContext2D.prototype.beginPath = function () {
    this._drawCommands = this._drawCommands.concat("b;");
};

/**
 * Paint the specified rectangular area using the fillStyle. If either
 * height or width are zero, this method has no effect.
 *
 * @param {number}
 *            x The x location of the source clipping rectangle
 * @param {number}
 *            y The y location of the source clipping rectangle
 * @param {number}
 *            w The width of the rectangle
 * @param {number}
 *            h The height of the rectangle
 */
GContext2D.prototype.fillRect = function (x, y, w, h) {
    this._drawCommands = this._drawCommands.concat("n" + x + "," + y + "," + w + "," + h + ";");
};

/**
 * Adds a new closed subpath to the path, representing the given rectangle.
 *
 * @param {number}
 *            x The x location of the rectangle
 * @param {number}
 *            y The y location of the rectangle
 * @param {number}
 *            w The width of the rectangle
 * @param {number}
 *            h The height of the rectangle
 */
GContext2D.prototype.rect = function (x, y, w, h) {
    this._drawCommands = this._drawCommands.concat("w" + x + "," + y + "," + w + "," + h + ";");
};

/**
 * Fills the subpaths of the current default path or the given path with the
 * current fill style.
 *
 * @param {string}
 *            path The given path to fill.
 */
GContext2D.prototype.fill = function (path) {
    this._drawCommands = this._drawCommands.concat("L;");
};

/**
 * Strokes the subpaths of the current default path or the given path with
 * the current stroke style.
 *
 * @param {string}
 *            path The given path to stroke.
 */
GContext2D.prototype.stroke = function (path) {
    this._drawCommands = this._drawCommands.concat("x;");
};

/**
 * Adds points to the subpath such that the arc described by the
 * circumference of the circle described by the arguments, starting at the
 * given start angle and ending at the given end angle, going in the given
 * direction (defaulting to clockwise), is added to the path, connected to
 * the previous point by a straight line.
 *
 * @param {number}
 *            x
 * @param {number}
 *            y
 * @param {number}
 *            radius
 * @param {number}
 *            startAngle
 * @param {number}
 *            endAngle
 * @param {string}
 *            anticlockwise
 */
GContext2D.prototype.arc = function (x, y, radius, startAngle, endAngle, anticlockwise) {

    var ianticlockwise = 0;
    if (anticlockwise) ianticlockwise = 1;

    this._drawCommands = this._drawCommands.concat("y" + x.toFixed(2) + "," + y.toFixed(2) + "," + radius.toFixed(2) + "," + startAngle + "," + endAngle + "," + ianticlockwise + ";");
};

GContext2D.prototype.fillText = function (text, x, y) {
    var tmptext = text.replace(/!/g, "!!");
    tmptext = tmptext.replace(/,/g, "!,");
    tmptext = tmptext.replace(/;/g, "!;");
    this._drawCommands = this._drawCommands.concat("T" + tmptext + "," + x + "," + y + ",0.0;");
};

GContext2D.prototype.strokeText = function (text, x, y) {
    this._drawCommands = this._drawCommands.concat("U" + text + "," + x + "," + y + ",0.0;");
};

//TODO:这个api有用需要原生的canvas对象，所以不支持
GContext2D.prototype.measureText = function (text) {
    return -1;
    //return this._apiContext.measureText(text);
};

//TODO:不支持
GContext2D.prototype.isPointInPath = function (x, y) {
    return false;
};

/////////////////////////////////////////////////////////////////
//GImageData
/////////////////////////////////////////////////////////////////
function GImageData(w, h) {
    GLog.d("GImageData wh=" + w + "," + h);
    this.width = w;
    this.height = h;
    this.data = new Uint8Array(w * h * 4);
}

GContext2D.prototype.createImageData = function (w, h) {
    GLog.d("GContext2D::createImageData wh=" + w + "," + h);
    return new GImageData(w, h);
};

GContext2D.prototype._putImageData = function (data, dx, dy, sw, sh, dw, dh) {
    this._drawCommands = this._drawCommands.concat("P" + dx + "," + dy + "," + sw + "," + sh + "," + dw + "," + dh + "," + GCodec.GarrToBase64(data) + ";");
};
GContext2D.prototype.putImageData = function (imgData, x, y, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
    GLog.d("GContext2D::putImageData [" + arguments.length + "] " + "dest_xy=(" + x + "," + y + ") " + "dirty_xy=(" + dirtyX + "," + dirtyY + ") " + "dirty_wh=(" + dirtyWidth + "," + dirtyHeight + ") ");

    if (arguments.length <= 3) {
        this._putImageData(imgData.data, x, y, imgData.width, imgData.height, imgData.width, imgData.height);
    } else {
        var destData = new Uint8Array(dirtyWidth * dirtyHeight * 4);
        var imgPos;
        var destPos = 0;
        for (var i = 0; i < dirtyHeight; i++) {
            imgPos = (imgData.width * (dirtyY + i) + dirtyX) * 4;
            for (var j = 0; j < dirtyWidth; ++j) {
                destData[destPos++] = imgData.data[imgPos++];
                destData[destPos++] = imgData.data[imgPos++];
                destData[destPos++] = imgData.data[imgPos++];
                destData[destPos++] = imgData.data[imgPos++];
            }
        }

        this._putImageData(destData, x + dirtyX, y + dirtyY, dirtyWidth, dirtyHeight, dirtyWidth, dirtyHeight);
    }
};

GContext2D.prototype.getImageData = function (x, y, w, h) {
    this.render();
    return GBridge.callGetImageData(this.componentId, x, y, w, h);
};

GContext2D.prototype.getImageDataAsyn = function (x, y, w, h) {
    return '';
    // GLog.d("GContext2D::getImageDataAsyn xy=(" + x + "," + y + "), wh=(" + w + ","+ h +")");
    // GCanvas._instance.getContext().render("auto");
    // var len = w*h;
    // var imgData = new GImageData(w,h);
    // imgData._x = x;
    // imgData._y = y;
    // imgData._dataGet = 0;
    // imgData._split = 0;
    // var me = this;
    // me._getImageData.push(imgData);

    // var h2 = Math.floor(262144/w);// 2^18
    // if (h2 < h)
    //     imgData._split = 1;

    // function getImageDataAsynSuccess(getData) {
    //     var destData = me._getImageData[0];
    //     GLog.d("GContext2D::getImageDataAsyn: dataGet=" + destData._dataGet);
    //     if (0 == destData._split){// one part
    //         destData.data = Gbase64ToArr(getData);
    //         destData._dataGet += destData.data.length;
    //     }else{// multi parts
    //         var taBytes  = Gbase64ToArr(getData);
    //         destData._dataGet += taBytes.length;
    //         for (var i=0;i<taBytes.length;i++){
    //             destData.data[destData._dataGet+i] = taBytes[i];
    //         }
    //     }

    //     if (destData._dataGet >= (destData._x*destData._y)){
    //         if (typeof destData.onload === 'function') {
    //             GLog.d("GContext2D::getImageDataAsyn: callback exec.");
    //             destData.onload();
    //         }
    //         me._getImageData.splice(0,1);//delete first data
    //     }
    // }

    // for(var i=0; i<h; i+= h2){
    //     GCanvas._toNative(getImageDataAsynSuccess, getImageDataAsynSuccess, 'GCanvas',
    //             'getImageData', [ x, y+i, w, (i+h2>h)?(h-i):h2 ]);
    // }


    // return imgData;
};

module.exports = GContext2D;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var context;
function getProto(Weex) {
  return {
    create: function create() {
      this.node = document.createElement('canvas');
      return this.node;
    },
    getContext: function getContext(type) {
      context = this.node.getContext(type || '2d');
      return context;
    },

    getContextAsyn: function getContextAsyn(type, callback) {
      context = this.node.getContext(type || '2d');
      callback(context);
    },

    drawImage: function drawImage(url) {
      var img = new Image();
      img.src = url;
      arguments[0] = img;
      return context.drawImage.apply(context, arguments);
    }

  };
}

function init(Weex) {
  var Component = Weex.Component;
  var extend = Weex.utils.extend;

  function GCanvas(data) {
    Component.call(this, data);
  }

  GCanvas.prototype = Object.create(Component.prototype);
  extend(GCanvas.prototype, getProto(Weex));

  Weex.registerComponent('gcanvas', GCanvas);
}

module.exports = {
  init: init
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

function compile(_ref) {
    var vShader = _ref.vShader,
        fShader = _ref.fShader,
        gl = _ref.gl,
        options = _ref.options;

    var textureCount = 0;

    function createShaderProgram(vShaderSource, fShaderSource, gl) {

        function loadShader(gl, type, source) {
            var shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                throw 'An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader);
            }
            return shader;
        }

        var fShader = loadShader(gl, gl.FRAGMENT_SHADER, fShaderSource);
        var vShader = loadShader(gl, gl.VERTEX_SHADER, vShaderSource);

        var program = gl.createProgram();
        gl.attachShader(program, vShader);
        gl.attachShader(program, fShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            throw 'Unable to initialize the shader program: ' + gl.getProgramInfoLog(program);
        }

        var uniforms = [];
        var attributes = [];

        var attributeCount = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);

        for (var i = 0; i < attributeCount; i++) {
            var attribute = gl.getActiveAttrib(program, i);
            attributes.push(attribute);
        }
        var uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (var _i = 0; _i < uniformCount; _i++) {
            var uniform = gl.getActiveUniform(program, _i);
            uniforms.push(uniform);
        }

        return {
            program: program,
            uniforms: uniforms, attributes: attributes
        };
    }

    function getType(value, gl) {
        var types = ['FLOAT', 'FLOAT_VEC2', 'FLOAT_VEC3', 'FLOAT_VEC4', 'FLOAT_MAT2', 'FLOAT_MAT3', 'FLOAT_MAT4', 'INT', 'INT_VEC2', 'INT_VEC3', 'INT_VEC4', 'BOOL', 'BOOL_VEC2', 'BOOL_VEC3', 'BOOL_VEC4', 'SAMPLER_2D', 'SAMPLER_CUBE'];

        for (var i = 0; i < types.length; i++) {
            if (gl[types[i]] === value) {
                return types[i];
            }
        }

        throw 'get type failed ' + value;
    }

    function attributeManager(attribute, program, gl) {
        var manager = {};
        var type = getType(attribute.type, gl);
        var position = gl.getAttribLocation(program, attribute.name);

        var baseType = type.split('_')[0];
        var vecType = type.split('_').length > 1 ? type.split('_')[1] : 'VEC1';
        var vecSize = Number(vecType[3]);

        var arrayTypeMap = {
            'FLOAT': Float32Array,
            'INT': Int16Array,
            'BOOL': Uint8Array
        };
        var ArrayType = arrayTypeMap[baseType];

        manager.fill = function (buffer) {
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.vertexAttribPointer(position, vecSize, gl[baseType], false, 0, 0);
            gl.enableVertexAttribArray(position);
        };

        manager.createBuffer = function (value) {
            var buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, new ArrayType(value), gl.STATIC_DRAW);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
            return buffer;
        };

        return _extends({
            type: type }, manager);
    }

    function uniformManager(uniform, program, gl) {
        var manager = {};
        var type = getType(uniform.type, gl);
        var position = gl.getUniformLocation(program, uniform.name);

        var baseType = type.split('_')[0];
        var vecType = type.split('_').length > 1 ? type.split('_')[1] : 'VEC1';
        var baseVecType = vecType.substr(0, 3);
        var vecSize = Number(vecType[3]);

        var arrayTypeMap = {
            'FLOAT': Float32Array,
            'INT': Int32Array,
            'BOOL': Uint8Array
        };
        var ArrayType = arrayTypeMap[baseType];

        var uniformMethodName = void 0;
        switch (baseVecType) {
            case 'VEC':
                uniformMethodName = ['uniform', vecSize, baseType === 'FLOAT' ? 'f' : 'i', 'v'].join('');
                manager.fill = function (data) {
                    gl[uniformMethodName](position, new ArrayType(data));
                };
                break;
            case 'MAT':
                uniformMethodName = ['uniform', 'Matrix', vecSize, 'fv'].join('');
                manager.fill = function (data) {
                    gl[uniformMethodName](position, false, new ArrayType(data));
                };
                break;
            case '2D':
                {
                    var textureUnitIndex = textureCount;
                    var textureUnitName = 'TEXTURE' + textureUnitIndex;
                    if (textureCount === maxTextureImageUnits) {
                        throw 'texture size exceed max texture image units';
                    } else {
                        textureCount++;
                    }

                    manager.createTexture = function (image) {
                        var flipY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                        var texture = gl.createTexture();

                        gl.activeTexture(gl[textureUnitName]);
                        gl.bindTexture(gl.TEXTURE_2D, texture);

                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

                        if (flipY) {
                            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
                        }

                        if (image instanceof Uint8Array) {
                            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, image);
                        } else {
                            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
                        }

                        if (flipY) {
                            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
                        }

                        gl.bindTexture(gl.TEXTURE_2D, null);
                        return texture;
                    };
                    manager.fill = function (texture) {
                        gl.activeTexture(gl[textureUnitName]);
                        gl.bindTexture(gl.TEXTURE_2D, texture);
                        gl.uniform1i(position, textureUnitIndex);
                    };

                    manager.update = function (texture, image) {
                        gl.activeTexture(gl[textureUnitName]);
                        gl.bindTexture(gl.TEXTURE_2D, texture);
                        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
                    };
                    break;
                }
            default:
                throw 'baseVecType invalid';
        }

        return _extends({ type: type }, manager);
    }

    var maxTextureImageUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);

    var _createShaderProgram = createShaderProgram(vShader, fShader, gl),
        program = _createShaderProgram.program,
        attributeList = _createShaderProgram.attributes,
        uniformList = _createShaderProgram.uniforms;

    var attributes = {};
    var uniforms = {};
    attributeList.forEach(function (attribute) {
        attributes[attribute.name] = attributeManager(attribute, program, gl);
    });
    uniformList.forEach(function (uniform) {
        var name = uniform.name;
        if (name.endsWith('[0]')) {
            name = name.replace('[0]', '');
        }
        uniforms[name] = uniformManager(uniform, program, gl);
    });

    gl.useProgram(program);

    return {
        program: program,
        uniforms: uniforms,
        attributes: attributes,

        drawArrays: function drawArrays(count) {
            gl.drawArrays(gl.TRIANGLES, 0, count);
        },

        drawElements: function drawElements(count) {
            gl.drawElements(gl.TRIANGLES, count, gl.UNSIGNED_SHORT, 0);
        },

        createElementsBuffer: function createElementsBuffer(value) {
            var buffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(value), gl.STATIC_DRAW);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
            return buffer;
        },

        fillElements: function fillElements(buffer) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
            return buffer;
        },

        createFramebuffer: function createFramebuffer(width, height) {
            var useColorBuffer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var framebuffer = gl.createFramebuffer();
            gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
            var colorTarget = void 0,
                depthTarget = void 0;

            if (useColorBuffer) {
                var _renderbuffer = gl.createRenderbuffer();
                gl.bindRenderbuffer(gl.RENDERBUFFER, _renderbuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.RGBA4, width, height);
                gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, _renderbuffer);
                colorTarget = _renderbuffer;
            } else {
                var tex = gl.createTexture();
                gl.activeTexture(gl.TEXTURE0);
                gl.bindTexture(gl.TEXTURE_2D, tex);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
                colorTarget = tex;
            }

            var renderbuffer = gl.createRenderbuffer();
            gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);
            depthTarget = renderbuffer;

            if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) != gl.FRAMEBUFFER_COMPLETE) {
                throw new Erroe("this combination of attachments does not work");
            }

            gl.bindFramebuffer(gl.FRAMEBUFFER, null);

            return {
                framebuffer: framebuffer,
                colorTarget: colorTarget, depthTarget: depthTarget
            };
        }
    };
}

exports.compile = compile;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isWeex) ? _c('gcanvas', {
    ref: "canvas_holder",
    style: {
      width: _vm.width,
      height: _vm.height,
      backgroundColor: 'rgba(255,0,0,1)'
    }
  }) : _vm._e(), (!_vm.isWeex) ? _c('canvas', {
    ref: "canvas_holder",
    style: {
      width: _vm.width + 'px',
      height: _vm.height + 'px',
      backgroundColor: 'rgba(255,0,0,1)'
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 58 */
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