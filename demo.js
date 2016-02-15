(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ReactDOM"), require("React"), require("weaveui"));
	else if(typeof define === 'function' && define.amd)
		define(["ReactDOM", "React", "weaveui"], factory);
	else if(typeof exports === 'object')
		exports["weaveuidemo"] = factory(require("ReactDOM"), require("React"), require("weaveui"));
	else
		root["weaveuidemo"] = factory(root["ReactDOM"], root["React"], root["weaveui"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
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

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.init = function (container, session) {
	    _reactDom2.default.render(React.createElement(_App2.default, { root: session }), document.getElementById(container));
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQU9BLFFBQVEsSUFBUixHQUFlLFVBQVUsU0FBVixFQUFxQixPQUFyQixFQUE4QjtBQUN6Qyx1QkFBUyxNQUFULENBQWlCLHFDQUFLLE1BQVEsT0FBUixFQUFMLENBQWpCLEVBQTJDLFNBQVMsY0FBVCxDQUF3QixTQUF4QixDQUEzQyxFQUR5QztDQUE5QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FuamF5L2dpdC9XZWF2ZVVJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5cblxuXG5cblxuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgc2Vzc2lvbikge1xuICAgIFJlYWN0RE9NLnJlbmRlciggPEFwcCByb290ID0ge3Nlc3Npb259Lz4gLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpXG4gICAgKTtcbn1cbiJdfQ==

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _weaveui = __webpack_require__(4);

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
	            window.addEventListener('keydown', this.openSettings);
	        }
	    }, {
	        key: "componentWillUnMount",
	        value: function componentWillUnMount() {
	            window.removeEventListener('keydown', this.openSettings);
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_weaveui2.default.SessionEditor, { root: this.props.root, keyPress: "true", settings: this.sessionConfig }),
	                this.props.children
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	exports.default = App;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07OztBQUtGLGFBTEUsR0FLRixDQUFZLEtBQVosRUFBbUI7OEJBTGpCLEtBS2lCOzsyRUFMakIsZ0JBTVEsUUFEUzs7QUFFZixjQUFLLFlBQUwsR0FBb0IsTUFBSyxZQUFMLENBQWtCLElBQWxCLE9BQXBCLENBRmU7QUFHZixjQUFLLGFBQUwsR0FBcUIsSUFBSSxrQkFBUSxtQkFBUixFQUF6QixDQUhlOzs7S0FBbkI7O2lCQUxFOztxQ0FXVyxHQUFFO0FBQ1gsZ0JBQUcsRUFBRSxJQUFGLEtBQVcsT0FBWCxFQUFtQjtBQUNsQixxQkFBSyxhQUFMLENBQW1CLFdBQW5CLENBQStCLElBQS9CLENBQW9DLEtBQXBDLEdBQTRDLElBQTVDLENBRGtCO2FBQXRCLE1BRU0sSUFBRyxFQUFFLElBQUYsS0FBVyxNQUFYLEVBQWtCO0FBQ2xCLHFCQUFLLGFBQUwsQ0FBbUIsV0FBbkIsQ0FBK0IsSUFBL0IsQ0FBb0MsS0FBcEMsR0FBNEMsS0FBNUMsQ0FEa0I7YUFBckI7Ozs7NENBS1M7QUFDZixtQkFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxLQUFLLFlBQUwsQ0FBbkMsQ0FEZTs7OzsrQ0FJRztBQUNsQixtQkFBTyxtQkFBUCxDQUEyQixTQUEzQixFQUFzQyxLQUFLLFlBQUwsQ0FBdEMsQ0FEa0I7Ozs7aUNBTWI7O0FBR0wsbUJBQVE7OztnQkFDSSxnREFBUyxhQUFULElBQXVCLE1BQU0sS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFpQixVQUFTLE1BQVQsRUFBZ0IsVUFBVSxLQUFLLGFBQUwsRUFBeEUsQ0FESjtnQkFFSyxLQUFLLEtBQUwsQ0FBVyxRQUFYO2FBRmIsQ0FISzs7OztXQTdCUDtFQUFZLGdCQUFNLFNBQU47O2tCQXlDSCIsImZpbGUiOiJBcHAuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlVUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2VhdmV1aSBmcm9tIFwid2VhdmV1aVwiO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5vcGVuU2V0dGluZ3MgPSB0aGlzLm9wZW5TZXR0aW5ncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlc3Npb25Db25maWcgPSBuZXcgd2VhdmV1aS5TZXNzaW9uRWRpdG9yQ29uZmlnKCk7XG5cbiAgICB9XG4gICAgb3BlblNldHRpbmdzKGUpe1xuICAgICAgICBpZihlLmNvZGUgPT09IFwiRW50ZXJcIil7XG4gICAgICAgICAgICB0aGlzLnNlc3Npb25Db25maWcubW9kYWxDb25maWcub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgICAgIH1lbHNlIGlmKGUuY29kZSA9PT0gXCJLZXlRXCIpe1xuICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb25Db25maWcubW9kYWxDb25maWcub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9wZW5TZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVuTW91bnQoKXtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9wZW5TZXR0aW5ncyk7XG4gICAgfVxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICBcblxuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDx3ZWF2ZXVpLlNlc3Npb25FZGl0b3Igcm9vdD17dGhpcy5wcm9wcy5yb290fSBrZXlQcmVzcz1cInRydWVcIiBzZXR0aW5ncz17dGhpcy5zZXNzaW9uQ29uZmlnfS8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=demo.js.map
