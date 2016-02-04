(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ReactDOM"), require("Weave"), require("weavejs"), require("React"), require("weaveui"));
	else if(typeof define === 'function' && define.amd)
		define(["ReactDOM", "Weave", "weavejs", "React", "weaveui"], factory);
	else if(typeof exports === 'object')
		exports["weaveuidemo"] = factory(require("ReactDOM"), require("Weave"), require("weavejs"), require("React"), require("weaveui"));
	else
		root["weaveuidemo"] = factory(root["ReactDOM"], root["Weave"], root["weavejs"], root["React"], root["weaveui"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Weave = __webpack_require__(2);

	var _Weave2 = _interopRequireDefault(_Weave);

	var _weavejs = __webpack_require__(3);

	var _weavejs2 = _interopRequireDefault(_weavejs);

	var _App = __webpack_require__(4);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_weavejs2.default.util.JS.JSZip = JSZip;

	exports.init = function (container, session) {
	    _reactDom2.default.render(React.createElement(_App2.default, { root: session
	    }), document.getElementById(container));
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _weaveui = __webpack_require__(6);

	var _weaveui2 = _interopRequireDefault(_weaveui);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App(props) {
	        _classCallCheck(this, App);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

	        _this.openSettings = _this.openSettings.bind(_this);
	        _this.sessionConfig = new _weaveui2.default.SessionEditorConfig();

	        return _this;
	    }

	    _createClass(App, [{
	        key: "openSettings",
	        value: function openSettings(e) {
	            if (e.code === "Enter") {
	                this.sessionConfig.modalConfig.open.value = true;
	            } else if (e.code === "KeyQ") {
	                this.sessionConfig.modalConfig.open.value = false;
	            }
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.props.root.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
	            window.addEventListener('keydown', this.openSettings);
	        }
	    }, {
	        key: "componentWillUnMount",
	        value: function componentWillUnMount() {
	            this.props.root.childListCallbacks.removeCallback(this, this.forceUpdate);
	            window.removeEventListener('keydown', this.openSettings);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var sessionChildren = this.props.root.getNames();
	            var toolUI = [];
	            for (var i = 0; i < sessionChildren.length; i++) {
	                var sessionName = sessionChildren[i];
	                var sessionObj = this.props.root.getObject(sessionName);
	                var configClassName = Weave.getPath(sessionObj).getType();
	                var ToolClass = _weaveui2.default.getToolForConfigName(configClassName);
	                var ui;
	                if (ToolClass) {
	                    ui = _react2.default.createElement(ToolClass, { settings: sessionObj, index: i, key: i });
	                }
	                toolUI.push(ui);
	            }

	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_weaveui2.default.SessionEditor, { sessionState: this.props.root, keyPress: "true", settings: this.sessionConfig }),
	                this.props.children,
	                toolUI
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	exports.default = App;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=demo.js.map