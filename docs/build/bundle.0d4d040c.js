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

/***/ "./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Badge&file=.%2Fi-badge.js&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/i-badge/Readme.md":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Badge&file=.%2Fi-badge.js&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/i-badge/Readme.md ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\nvar requireMap = {};\nvar requireInRuntimeBase = __webpack_require__(/*! ./node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime */ \"./node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime.js\");\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! ./node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext */ \"./node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext.js\");\nvar evalInContext = evalInContextBase.bind(null, \n\t\"\", \n\tnull, null)\nmodule.exports = [\n    {\n        'type': 'markdown',\n        'content': '### Usage\\n\\nTo create a badge, use the **_i-badge_** component.'\n    },\n    {\n        'type': 'code',\n        'content': '<template>\\n    <i-badge\\n        :count=\"35\"/>\\n</template>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\n;return {\\ntemplate: \"\\\\n    <i-badge\\\\n        :count=\\\\\"35\\\\\"/>\\\\n\" }\\n',\n            'template': void 0,\n            'style': void 0\n        }\n    }\n]\n\n//# sourceURL=webpack:///./src/components/i-badge/Readme.md?./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Badge&file=.%252Fi-badge.js&shouldShowDefaultExample=false&customLangs=vue%257Cjs%257Cjsx");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Button&file=.%2Fi-button.js&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/i-button/Readme.md":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Button&file=.%2Fi-button.js&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/i-button/Readme.md ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nif (false) {}\nvar requireMap = {};\nvar requireInRuntimeBase = __webpack_require__(/*! ./node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime */ \"./node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime.js\");\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! ./node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext */ \"./node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext.js\");\nvar evalInContext = evalInContextBase.bind(null, \n\t\"\", \n\tnull, null)\nmodule.exports = [\n    {\n        'type': 'markdown',\n        'content': '### Usage\\n\\nTo create a button, use the **_uis-button_** component.'\n    },\n    {\n        'type': 'code',\n        'content': '<template>\\n    <i-button>Default</i-button>\\n</template>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\n;return {\\ntemplate: \"\\\\n    <i-button>Default</i-button>\\\\n\" }\\n',\n            'template': void 0,\n            'style': void 0\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': '### Color modifiers\\n\\nThere are several style modifiers applied with the **_:color_** prop.'\n    },\n    {\n        'type': 'code',\n        'content': '<template>\\n    <div>\\n        <i-button\\n            :color=\"\\'primary\\'\">\\n            Primary\\n        </i-button>\\n\\n        <i-button\\n            :color=\"\\'secondary\\'\">\\n            Secondary\\n        </i-button>\\n\\n        <i-button\\n            :color=\"\\'success\\'\">\\n            Success\\n        </i-button>\\n\\n        <i-button\\n            :color=\"\\'warning\\'\">\\n            Warning\\n        </i-button>\\n\\n        <i-button\\n            :color=\"\\'danger\\'\">\\n            Danger\\n        </i-button>\\n    </div>\\n</template>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\n;return {\\ntemplate: \"\\\\n    <div>\\\\n        <i-button\\\\n            :color=\\\\\"\\'primary\\'\\\\\">\\\\n            Primary\\\\n        </i-button>\\\\n\\\\n        <i-button\\\\n            :color=\\\\\"\\'secondary\\'\\\\\">\\\\n            Secondary\\\\n        </i-button>\\\\n\\\\n        <i-button\\\\n            :color=\\\\\"\\'success\\'\\\\\">\\\\n            Success\\\\n        </i-button>\\\\n\\\\n        <i-button\\\\n            :color=\\\\\"\\'warning\\'\\\\\">\\\\n            Warning\\\\n        </i-button>\\\\n\\\\n        <i-button\\\\n            :color=\\\\\"\\'danger\\'\\\\\">\\\\n            Danger\\\\n        </i-button>\\\\n    </div>\\\\n\" }\\n',\n            'template': void 0,\n            'style': void 0\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': '### Full Width modifiers\\n\\nSetting the **_:fillWidth_** prop as true it will apply a full width class.'\n    },\n    {\n        'type': 'code',\n        'content': '<template>\\n    <i-button\\n        :fullWidth=\"true\">\\n        Full Width\\n    </i-button>\\n</template>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\n;return {\\ntemplate: \"\\\\n    <i-button\\\\n        :fullWidth=\\\\\"true\\\\\">\\\\n        Full Width\\\\n    </i-button>\\\\n\" }\\n',\n            'template': void 0,\n            'style': void 0\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': '### Link modifiers\\n\\nIf you want anchor with a button style, create **_:href_** and pass a URL it will automatically convert anchor tag with a button style.'\n    },\n    {\n        'type': 'code',\n        'content': '<template>\\n    <i-button\\n        :href=\"\\'https://www.google.com\\'\">\\n        Link Button\\n    </i-button>\\n</template>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\n;return {\\ntemplate: \"\\\\n    <i-button\\\\n        :href=\\\\\"\\'https://www.google.com\\'\\\\\">\\\\n        Link Button\\\\n    </i-button>\\\\n\" }\\n',\n            'template': void 0,\n            'style': void 0\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': '### Loading modifiers\\n\\nMake the **_:loading_** prop as true it will automatically disabled and change the label into loading icon.'\n    },\n    {\n        'type': 'code',\n        'content': '<template>\\n    <i-button\\n        :loading=\"true\">\\n        Loading Button\\n    </i-button>\\n</template>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\n;return {\\ntemplate: \"\\\\n    <i-button\\\\n        :loading=\\\\\"true\\\\\">\\\\n        Loading Button\\\\n    </i-button>\\\\n\" }\\n',\n            'template': void 0,\n            'style': void 0\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': '### Outline modifiers\\n\\nIf you want outline button style, just pass true boolean on **_:outline_** prop it will remove the background and change preserve the border. The color of border will be dependent on **_:color_** prop.'\n    },\n    {\n        'type': 'code',\n        'content': '<template>\\n    <i-button\\n        :color=\"\\'primary\\'\"\\n        :outline=\"true\">\\n        Outline Primary\\n    </i-button>\\n</template>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\n;return {\\ntemplate: \"\\\\n    <i-button\\\\n        :color=\\\\\"\\'primary\\'\\\\\"\\\\n        :outline=\\\\\"true\\\\\">\\\\n        Outline Primary\\\\n    </i-button>\\\\n\" }\\n',\n            'template': void 0,\n            'style': void 0\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': '### Size modifiers\\n\\nThere are several size modifiers applied with the **_:size_** prop.'\n    },\n    {\n        'type': 'code',\n        'content': '<template>\\n    <i-button\\n        :size=\"\\'large\\'\">\\n        Large Size\\n    </i-button>\\n</template>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\n;return {\\ntemplate: \"\\\\n    <i-button\\\\n        :size=\\\\\"\\'large\\'\\\\\">\\\\n        Large Size\\\\n    </i-button>\\\\n\" }\\n',\n            'template': void 0,\n            'style': void 0\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': '### Text modifiers\\n\\nThese will remove the background and padding. The color will be dependent on **_:color_** prop.'\n    },\n    {\n        'type': 'code',\n        'content': '<template>\\n    <i-button\\n        :color=\"\\'primary\\'\"\\n        :text=\"true\">\\n        Text Button\\n    </i-button>\\n</template>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\n;return {\\ntemplate: \"\\\\n    <i-button\\\\n        :color=\\\\\"\\'primary\\'\\\\\"\\\\n        :text=\\\\\"true\\\\\">\\\\n        Text Button\\\\n    </i-button>\\\\n\" }\\n',\n            'template': void 0,\n            'style': void 0\n        }\n    }\n]\n\n//# sourceURL=webpack:///./src/components/i-button/Readme.md?./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Button&file=.%252Fi-button.js&shouldShowDefaultExample=false&customLangs=vue%257Cjs%257Cjsx");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/i-avatar/i-avatar.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/i-avatar/i-avatar.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n\t\tif (false) {}\n\n\t\tmodule.exports = {\n    'displayName': 'Avatar',\n    'functional': true,\n    'description': 'Create a dynamic avatar that render a string or image for users',\n    'tags': {},\n    'exportName': 'default',\n    'props': [\n        {\n            'name': 'label',\n            'description': 'Text for the avatar, atleast 1 or 2 characters mostly used\\nfor user Initials',\n            'type': { 'name': 'string' },\n            'required': true\n        },\n        {\n            'name': 'color',\n            'description': 'The color for the avatar background',\n            'tags': {},\n            'values': [\n                'primary',\n                'secondary'\n            ],\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': 'null'\n            }\n        },\n        {\n            'name': 'size',\n            'description': 'Specific size or dimension',\n            'tags': {},\n            'values': [\n                'xsmall',\n                'small',\n                'medium',\n                'large',\n                'xlarge'\n            ],\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': 'null'\n            }\n        },\n        {\n            'name': 'src',\n            'description': 'Image source of path',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': 'null'\n            }\n        }\n    ],\n    'events': void 0,\n    'methods': void 0,\n    'slots': void 0,\n    'examples': __webpack_require__(/*! !./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Avatar&file=.%2Fi-avatar.js&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/i-avatar/Readme.md */ \"./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Avatar&file=.%2Fi-avatar.js&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/i-avatar/Readme.md\")\n}\n\t\n\n//# sourceURL=webpack:///./src/components/i-avatar/i-avatar.js?./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/i-badge/i-badge.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/i-badge/i-badge.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n\t\tif (false) {}\n\n\t\tmodule.exports = {\n    'displayName': 'Badge',\n    'functional': true,\n    'description': 'Display a number as notifications',\n    'tags': {},\n    'exportName': 'default',\n    'props': [{\n            'name': 'count',\n            'description': 'The color for the badge background',\n            'type': { 'name': 'number' },\n            'required': true,\n            'defaultValue': {\n                'func': false,\n                'value': 'null'\n            }\n        }],\n    'events': void 0,\n    'methods': void 0,\n    'slots': void 0,\n    'examples': __webpack_require__(/*! !./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Badge&file=.%2Fi-badge.js&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/i-badge/Readme.md */ \"./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Badge&file=.%2Fi-badge.js&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/i-badge/Readme.md\")\n}\n\t\n\n//# sourceURL=webpack:///./src/components/i-badge/i-badge.js?./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/i-button/i-button.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/i-button/i-button.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n\t\tif (false) {}\n\n\t\tmodule.exports = {\n    'exportName': 'default',\n    'displayName': 'Button',\n    'functional': false,\n    'description': 'Classic button with different color, sizes and states',\n    'tags': {},\n    'props': [\n        {\n            'name': 'color',\n            'description': 'The color for the background background',\n            'tags': {},\n            'values': [\n                'default',\n                'primary',\n                'secondary',\n                'success',\n                'warning',\n                'danger'\n            ],\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'default\\''\n            }\n        },\n        {\n            'name': 'disabled',\n            'description': 'This will be disabled the button',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        },\n        {\n            'name': 'fullWidth',\n            'description': 'It will set 100% of the width',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        },\n        {\n            'name': 'ghost',\n            'description': 'Make the button dashed outline without any selector modifiers',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        },\n        {\n            'name': 'href',\n            'description': 'If the button is anchor you can specify the URL',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': 'null'\n            }\n        },\n        {\n            'name': 'icon',\n            'description': 'Make the dimension equal, Must contain icon only',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        },\n        {\n            'name': 'loading',\n            'description': 'You can set to the button if the form is loading\\nto avoid clickable and change into loading icon',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        },\n        {\n            'name': 'outline',\n            'description': 'It will remove the background and change into\\nborder. The color will be based on :color prop',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        },\n        {\n            'name': 'size',\n            'description': 'Specify the specific dimension',\n            'tags': {},\n            'values': [\n                'small',\n                'large'\n            ],\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': 'null'\n            }\n        },\n        {\n            'name': 'text',\n            'description': 'If this button is text without background',\n            'type': { 'name': 'boolean' },\n            'defaultValue': {\n                'func': false,\n                'value': 'false'\n            }\n        }\n    ],\n    'events': {\n        'click': {\n            'name': 'click',\n            'type': { 'names': ['undefined'] }\n        }\n    },\n    'methods': void 0,\n    'slots': { 'default': { 'name': 'default' } },\n    'examples': __webpack_require__(/*! !./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Button&file=.%2Fi-button.js&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/i-button/Readme.md */ \"./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?displayName=Button&file=.%2Fi-button.js&shouldShowDefaultExample=false&customLangs=vue%7Cjs%7Cjsx!./src/components/i-button/Readme.md\")\n}\n\t\n\n//# sourceURL=webpack:///./src/components/i-button/i-button.js?./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js");

/***/ }),

/***/ "./src/components sync recursive i-[\\w-]+\\.(?!(vue|js|jsx))?[^.]*$":
/*!***************************************************************!*\
  !*** ./src/components sync i-[\w-]+\.(?!(vue|js|jsx))?[^.]*$ ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./i-avatar/i-avatar.js\": \"./src/components/i-avatar/i-avatar.js\",\n\t\"./i-badge/i-badge.js\": \"./src/components/i-badge/i-badge.js\",\n\t\"./i-button/i-button.js\": \"./src/components/i-button/i-button.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/components sync recursive i-[\\\\w-]+\\\\.(?!(vue|js|jsx))?[^.]*$\";\n\n//# sourceURL=webpack:///(vue%7Cjs%7Cjsx))?./src/components_sync_i-%5B\\w-%5D+\\.(?");

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

/***/ "./src/components/i-badge/i-badge.js":
/*!*******************************************!*\
  !*** ./src/components/i-badge/i-badge.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\r\n * Display a number as notifications\r\n * @displayName Badge\r\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'IBadge',\n  functional: true,\n  inheritAttrs: false,\n  props: {\n    /**\r\n     * The color for the badge background\r\n     */\n    count: {\n      type: Number,\n      default: null,\n      required: true\n    }\n  },\n  render: function render(h, _ref) {\n    var data = _ref.data,\n        props = _ref.props;\n    return h('div', {\n      staticClass: data.staticClass,\n      class: ['i-badge']\n    }, props.count);\n  }\n});\n\n//# sourceURL=webpack:///./src/components/i-badge/i-badge.js?");

/***/ }),

/***/ "./src/components/i-button/i-button.js":
/*!*********************************************!*\
  !*** ./src/components/i-button/i-button.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_mixins_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/mixins/button */ \"./src/components/mixins/button.js\");\n/* harmony import */ var _components_mixins_mouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/mixins/mouse */ \"./src/components/mixins/mouse.js\");\n\n\n/**\r\n * Classic button with different color, sizes and states\r\n * @displayName Button\r\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'IButton',\n  functional: false,\n  inheritAttrs: true,\n  mixins: [_components_mixins_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _components_mixins_mouse__WEBPACK_IMPORTED_MODULE_1__[\"default\"]],\n  render: function render(h) {\n    return h(this.isAnchor ? 'a' : 'button', {\n      class: this.classes,\n      attrs: {\n        disabled: this.disabled || this.loading,\n        href: this.isAnchor ? this.href : false\n      },\n      on: {\n        /**\r\n         * Emits when user clicks\r\n         */\n        click: this.onClick\n      }\n    }, [this.loading ? h('span', {\n      class: 'i-animate i-animate-infinite i-animate-rotate'\n    }, '⌛') : this.$slots.default]);\n  }\n});\n\n//# sourceURL=webpack:///./src/components/i-button/i-button.js?");

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

/***/ "./src/components/mixins/button.js":
/*!*****************************************!*\
  !*** ./src/components/mixins/button.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/class */ \"./src/utils/class.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    /**\r\n     * The color for the background background\r\n     * @values default, primary, secondary, success, warning, danger\r\n     */\n    color: {\n      type: String,\n      default: 'default'\n    },\n\n    /**\r\n     * This will be disabled the button\r\n     */\n    disabled: {\n      type: Boolean,\n      default: false\n    },\n\n    /**\r\n     * Make the dimension equal, Must contain icon only\r\n     */\n    icon: {\n      type: Boolean,\n      default: false\n    },\n\n    /**\r\n     * It will set 100% of the width\r\n     */\n    fullWidth: {\n      type: Boolean,\n      default: false\n    },\n\n    /**\r\n     * Make the button dashed outline without any selector modifiers\r\n     */\n    ghost: {\n      type: Boolean,\n      default: false\n    },\n\n    /**\r\n     * If the button is anchor you can specify the URL\r\n     */\n    href: {\n      type: String,\n      default: null\n    },\n\n    /**\r\n     * You can set to the button if the form is loading\r\n     * to avoid clickable and change into loading icon\r\n     */\n    loading: {\n      type: Boolean,\n      default: false\n    },\n\n    /**\r\n     * It will remove the background and change into\r\n     * border. The color will be based on :color prop\r\n     */\n    outline: {\n      type: Boolean,\n      default: false\n    },\n\n    /**\r\n     * Specify the specific dimension\r\n     * @values small, large\r\n     */\n    size: {\n      type: String,\n      default: null\n    },\n\n    /**\r\n     * If this button is text without background\r\n     */\n    text: {\n      type: Boolean,\n      default: false\n    }\n  },\n  computed: {\n    classes: function classes() {\n      return Object(_utils_class__WEBPACK_IMPORTED_MODULE_0__[\"joinClass\"])('i-button', this.text ? \"i-button-text i-button-text-\".concat(this.color) : this.ghost ? 'i-button-ghost' : this.outline ? \"i-button-outline i-button-outline-\".concat(this.color) : this.color && \"i-button-\".concat(this.color), this.size && \"i-button-\".concat(this.size), this.icon ? 'i-button-icon' : this.fullWidth && 'i-width-1-1');\n    },\n    isAnchor: function isAnchor() {\n      return this.href !== null;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/mixins/button.js?");

/***/ }),

/***/ "./src/components/mixins/mouse.js":
/*!****************************************!*\
  !*** ./src/components/mixins/mouse.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  methods: {\n    /**\r\n     * Emits the function that has been passed.\r\n     */\n    onClick: function onClick(event) {\n      this.$emit('click', event);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/mixins/mouse.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/scss/app.scss?");

/***/ }),

/***/ "./src/utils/class.js":
/*!****************************!*\
  !*** ./src/utils/class.js ***!
  \****************************/
/*! exports provided: joinClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"joinClass\", function() { return joinClass; });\n/**\r\n * @param Array arguments\r\n * @return String classnames\r\n */\nvar joinClass = function joinClass() {\n  var classnames = '';\n\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  for (var i = 0; i < args.length; i++) {\n    if (args[i]) {\n      classnames += \"\".concat(args[i], \" \");\n    }\n  }\n\n  return classnames;\n};\n\n//# sourceURL=webpack:///./src/utils/class.js?");

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