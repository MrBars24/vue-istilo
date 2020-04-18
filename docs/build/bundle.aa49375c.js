/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "build/" + ({"compiler":"compiler"}[chunkId]||chunkId) + "." + {"compiler":"c0aa4ba8"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Avatar&file=.%2Fi-avatar.js&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/i-avatar/Readme.md":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Avatar&file=.%2Fi-avatar.js&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/i-avatar/Readme.md ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\nvar requireMap = {};\nvar requireInRuntimeBase = __webpack_require__(/*! ./node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime */ \"./node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime.js\");\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! ./node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext */ \"./node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext.js\");\nvar evalInContext = evalInContextBase.bind(null, \n\t\"\", \n\tnull, null)\nmodule.exports = [\n    {\n        'type': 'markdown',\n        'content': '### Usage\\n\\nTo create a avatar, use the **_i-avatar_** component.'\n    },\n    {\n        'type': 'code',\n        'content': '<template>\\n    <i-avatar\\n        :label=\"\\'AB\\'\"/>\\n</template>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\n;return {\\ntemplate: \"\\\\n    <i-avatar\\\\n        :label=\\\\\"\\'AB\\'\\\\\"/>\\\\n\" }\\n',\n            'template': void 0,\n            'style': void 0\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': '### Color Modifier\\n\\nThere are several style modifiers applied with the **_:color_** prop.'\n    },\n    {\n        'type': 'code',\n        'content': '<template>\\n    <div>\\n        <i-avatar\\n            :label=\"\\'PR\\'\"\\n            :color=\"\\'primary\\'\"/>\\n\\n        <i-avatar\\n            :label=\"\\'SE\\'\"\\n            :color=\"\\'secondary\\'\"/>\\n    </div>\\n</template>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\n;return {\\ntemplate: \"\\\\n    <div>\\\\n        <i-avatar\\\\n            :label=\\\\\"\\'PR\\'\\\\\"\\\\n            :color=\\\\\"\\'primary\\'\\\\\"/>\\\\n\\\\n        <i-avatar\\\\n            :label=\\\\\"\\'SE\\'\\\\\"\\\\n            :color=\\\\\"\\'secondary\\'\\\\\"/>\\\\n    </div>\\\\n\" }\\n',\n            'template': void 0,\n            'style': void 0\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': '### Size Modifier\\n\\nUse one of the following **_:size_** prop options for additional styles.'\n    },\n    {\n        'type': 'code',\n        'content': '<template>\\n    <i-avatar\\n        :label=\"\\'LG\\'\"\\n        :size=\"\\'large\\'\"/>\\n</template>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\n;return {\\ntemplate: \"\\\\n    <i-avatar\\\\n        :label=\\\\\"\\'LG\\'\\\\\"\\\\n        :size=\\\\\"\\'large\\'\\\\\"/>\\\\n\" }\\n',\n            'template': void 0,\n            'style': void 0\n        }\n    }\n]\n\n//# sourceURL=webpack:///./src/components/i-avatar/Readme.md?./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Avatar&file=.%252Fi-avatar.js&shouldShowDefaultExample=false&customLangs=vue%257Cjs%257Cjsx");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/i-avatar/i-avatar.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/i-avatar/i-avatar.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n\t\tif (false) {}\n\n\t\tmodule.exports = {\n    'displayName': 'Avatar',\n    'functional': true,\n    'description': 'Create a dynamic avatar that render a string or image for users',\n    'tags': {},\n    'exportName': 'default',\n    'props': [\n        {\n            'name': 'label',\n            'description': 'Text for the avatar, atleast 1 or 2 characters mostly used\\nfor user Initials',\n            'type': { 'name': 'string' },\n            'required': true\n        },\n        {\n            'name': 'color',\n            'description': 'The color for the avatar background',\n            'tags': {},\n            'values': [\n                'primary',\n                'secondary'\n            ],\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': 'null'\n            }\n        },\n        {\n            'name': 'size',\n            'description': 'Specific size or dimension',\n            'tags': {},\n            'values': [\n                'xsmall',\n                'small',\n                'medium',\n                'large',\n                'xlarge'\n            ],\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': 'null'\n            }\n        },\n        {\n            'name': 'src',\n            'description': 'Image source of path',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': 'null'\n            }\n        }\n    ],\n    'events': void 0,\n    'methods': void 0,\n    'slots': void 0,\n    'examples': __webpack_require__(/*! !./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Avatar&file=.%2Fi-avatar.js&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/i-avatar/Readme.md */ \"./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Avatar&file=.%2Fi-avatar.js&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/i-avatar/Readme.md\")\n}\n\t\n\n//# sourceURL=webpack:///./src/components/i-avatar/i-avatar.js?./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js");

/***/ }),

/***/ "./src/components sync recursive i-[\\w-]+\\.(?!(vue|js|jsx))?[^.]*$":
/*!***************************************************************!*\
  !*** ./src/components sync i-[\w-]+\.(?!(vue|js|jsx))?[^.]*$ ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./i-avatar/i-avatar.js\": \"./src/components/i-avatar/i-avatar.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/components sync recursive i-[\\\\w-]+\\\\.(?!(vue|js|jsx))?[^.]*$\";\n\n//# sourceURL=webpack:///(vue%7Cjs%7Cjsx))?./src/components_sync_i-%5B\\w-%5D+\\.(?");

/***/ }),

/***/ "./src/components/i-avatar/i-avatar.js":
/*!*********************************************!*\
  !*** ./src/components/i-avatar/i-avatar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * Create a dynamic avatar that render a string or image for users\r\n * @displayName Avatar\r\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'IAvatar',\n  functional: true,\n  inheritAttrs: false,\n  props: {\n    /**\r\n     * The color for the avatar background\r\n     * @values primary, secondary\r\n     */\n    color: {\n      type: String,\n      default: null\n    },\n\n    /**\r\n     * Text for the avatar, atleast 1 or 2 characters mostly used\r\n     * for user Initials\r\n     */\n    label: {\n      type: String,\n      required: true\n    },\n\n    /**\r\n     * Specific size or dimension\r\n     * @values xsmall, small, medium, large, xlarge\r\n     */\n    size: {\n      type: String,\n      default: null\n    },\n\n    /**\r\n     * Image source of path\r\n     */\n    src: {\n      type: String,\n      default: null\n    }\n  },\n  render: function render(h, _ref) {\n    var data = _ref.data,\n        props = _ref.props;\n    return h('div', {\n      staticClass: data.staticClass,\n      class: ['i-avatar', !props.src && !props.color ? '' : \"i-avatar-\".concat(props.color), props.size && \"i-avatar-\".concat(props.size), props.src && 'i-avatar-image']\n    }, [props.src ? h('img', {\n      attrs: {\n        src: props.src,\n        alt: \"\".concat(props.label, \" image\")\n      }\n    }) : props.label]);\n  }\n});\n\n//# sourceURL=webpack:///./src/components/i-avatar/i-avatar.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/upperFirst */ \"./node_modules/lodash/upperFirst.js\");\n/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_upperFirst__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/camelCase */ \"./node_modules/lodash/camelCase.js\");\n/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar requireComponent = __webpack_require__(\"./src/components sync recursive i-[\\\\w-]+\\\\.(?!(vue|js|jsx))?[^.]*$\"); // For each matching file name...\n\n\nrequireComponent.keys().forEach(function (fileName) {\n  // Get the component config\n  var componentConfig = requireComponent(fileName); // Get the PascalCase version of the component name\n\n  var componentName = lodash_upperFirst__WEBPACK_IMPORTED_MODULE_8___default()(lodash_camelCase__WEBPACK_IMPORTED_MODULE_9___default()(fileName // get files on the folder\n  .split('/')[2] // Remove the \"./_\" from the beginning\n  .replace(/^\\.\\/_/, '') // Remove the file extension from the end\n  .replace(/\\.\\w+$/, ''))); // Globally register the component\n\n  vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"].component(componentName, componentConfig.default || componentConfig);\n});\n\n//# sourceURL=webpack:///./src/components/index.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/scss/app.scss?");

/***/ }),

/***/ 0:
/*!************************************************************************************************************!*\
  !*** multi ./src/scss/app.scss ./src/components/index.js ./node_modules/vue-styleguidist/lib/client/index ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\JeraldAustero\\Sitepoint\\vue-istilo\\vue-istilo.loc\\src\\scss\\app.scss */\"./src/scss/app.scss\");\n__webpack_require__(/*! C:\\Users\\JeraldAustero\\Sitepoint\\vue-istilo\\vue-istilo.loc\\src\\components\\index.js */\"./src/components/index.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\JeraldAustero\\Sitepoint\\vue-istilo\\vue-istilo.loc\\node_modules\\vue-styleguidist\\lib\\client\\index */\"./node_modules/vue-styleguidist/lib/client/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/scss/app.scss_./src/components/index.js_./node_modules/vue-styleguidist/lib/client/index?");

/***/ })

/******/ });