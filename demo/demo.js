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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0Esa0JBQVEsSUFBUixDQUFhLEVBQWIsQ0FBZ0IsS0FBaEIsR0FBd0IsS0FBeEI7O0FBRUEsUUFBUSxJQUFSLEdBQWUsVUFBVSxTQUFWLEVBQXFCLE9BQXJCLEVBQThCO0FBQ3pDLHVCQUFTLE1BQVQsQ0FBaUIscUNBQU0sTUFDZixPQURlO0tBQU4sQ0FBakIsRUFHUyxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FIVCxFQUR5QztDQUE5QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FuamF5L2dpdC9XZWF2ZVVJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBXZWF2ZSBmcm9tIFwiV2VhdmVcIjtcbmltcG9ydCB3ZWF2ZWpzIGZyb20gXCJ3ZWF2ZWpzXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuXG5cblxud2VhdmVqcy51dGlsLkpTLkpTWmlwID0gSlNaaXA7XG5cbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uIChjb250YWluZXIsIHNlc3Npb24pIHtcbiAgICBSZWFjdERPTS5yZW5kZXIoIDwgQXBwIHJvb3QgPSB7XG4gICAgICAgICAgICBzZXNzaW9uXG4gICAgICAgIH1cbiAgICAgICAgLz4gLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpXG4gICAgKTtcbn1cbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07OztBQUtGLGFBTEUsR0FLRixDQUFZLEtBQVosRUFBbUI7OEJBTGpCLEtBS2lCOzsyRUFMakIsZ0JBTVEsUUFEUzs7QUFFZixjQUFLLFlBQUwsR0FBb0IsTUFBSyxZQUFMLENBQWtCLElBQWxCLE9BQXBCLENBRmU7QUFHZixjQUFLLGFBQUwsR0FBcUIsSUFBSSxrQkFBUSxtQkFBUixFQUF6QixDQUhlOzs7S0FBbkI7O2lCQUxFOztxQ0FXVyxHQUFFO0FBQ1gsZ0JBQUcsRUFBRSxJQUFGLEtBQVcsT0FBWCxFQUFtQjtBQUNsQixxQkFBSyxhQUFMLENBQW1CLFdBQW5CLENBQStCLElBQS9CLENBQW9DLEtBQXBDLEdBQTRDLElBQTVDLENBRGtCO2FBQXRCLE1BRU0sSUFBRyxFQUFFLElBQUYsS0FBVyxNQUFYLEVBQWtCO0FBQ2xCLHFCQUFLLGFBQUwsQ0FBbUIsV0FBbkIsQ0FBK0IsSUFBL0IsQ0FBb0MsS0FBcEMsR0FBNEMsS0FBNUMsQ0FEa0I7YUFBckI7Ozs7NENBS1M7QUFDZixpQkFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixrQkFBaEIsQ0FBbUMsb0JBQW5DLENBQXdELElBQXhELEVBQTZELEtBQUssV0FBTCxDQUE3RCxDQURlO0FBRWYsbUJBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsS0FBSyxZQUFMLENBQW5DLENBRmU7Ozs7K0NBS0c7QUFDbEIsaUJBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0Isa0JBQWhCLENBQW1DLGNBQW5DLENBQWtELElBQWxELEVBQXVELEtBQUssV0FBTCxDQUF2RCxDQURrQjtBQUVsQixtQkFBTyxtQkFBUCxDQUEyQixTQUEzQixFQUFzQyxLQUFLLFlBQUwsQ0FBdEMsQ0FGa0I7Ozs7aUNBT2I7QUFDTCxnQkFBSSxrQkFBa0IsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixRQUFoQixFQUFsQixDQURDO0FBRUwsZ0JBQUksU0FBUyxFQUFULENBRkM7QUFHTCxpQkFBSSxJQUFJLElBQUUsQ0FBRixFQUFLLElBQUUsZ0JBQWdCLE1BQWhCLEVBQXdCLEdBQXZDLEVBQTJDO0FBQ3ZDLG9CQUFJLGNBQWMsZ0JBQWdCLENBQWhCLENBQWQsQ0FEbUM7QUFFdkMsb0JBQUksYUFBYSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFNBQWhCLENBQTBCLFdBQTFCLENBQWIsQ0FGbUM7QUFHdkMsb0JBQUksa0JBQWtCLE1BQU0sT0FBTixDQUFjLFVBQWQsRUFBMEIsT0FBMUIsRUFBbEIsQ0FIbUM7QUFJdkMsb0JBQUksWUFBWSxrQkFBUSxvQkFBUixDQUE2QixlQUE3QixDQUFaLENBSm1DO0FBS3RDLG9CQUFJLEVBQUosQ0FMc0M7QUFNdkMsb0JBQUcsU0FBSCxFQUFhO0FBQ1QseUJBQUssOEJBQUMsU0FBRCxJQUFXLFVBQVUsVUFBVixFQUFzQixPQUFPLENBQVAsRUFBVyxLQUFLLENBQUwsRUFBNUMsQ0FBTCxDQURTO2lCQUFiO0FBSUEsdUJBQU8sSUFBUCxDQUFZLEVBQVosRUFWdUM7YUFBM0M7O0FBYUEsbUJBQVE7OztnQkFDSSxnREFBUyxhQUFULElBQXVCLGNBQWUsS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFpQixVQUFTLE1BQVQsRUFBZ0IsVUFBVSxLQUFLLGFBQUwsRUFBakYsQ0FESjtnQkFFSyxLQUFLLEtBQUwsQ0FBVyxRQUFYO2dCQUNBLE1BSEw7YUFBUixDQWhCSzs7OztXQS9CUDtFQUFZLGdCQUFNLFNBQU47O2tCQXlESCIsImZpbGUiOiJBcHAuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlVUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2VhdmV1aSBmcm9tIFwid2VhdmV1aVwiO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5vcGVuU2V0dGluZ3MgPSB0aGlzLm9wZW5TZXR0aW5ncy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlc3Npb25Db25maWcgPSBuZXcgd2VhdmV1aS5TZXNzaW9uRWRpdG9yQ29uZmlnKCk7XG5cbiAgICB9XG4gICAgb3BlblNldHRpbmdzKGUpe1xuICAgICAgICBpZihlLmNvZGUgPT09IFwiRW50ZXJcIil7XG4gICAgICAgICAgICB0aGlzLnNlc3Npb25Db25maWcubW9kYWxDb25maWcub3Blbi52YWx1ZSA9IHRydWU7XG4gICAgICAgIH1lbHNlIGlmKGUuY29kZSA9PT0gXCJLZXlRXCIpe1xuICAgICAgICAgICAgICAgICB0aGlzLnNlc3Npb25Db25maWcubW9kYWxDb25maWcub3Blbi52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5wcm9wcy5yb290LmNoaWxkTGlzdENhbGxiYWNrcy5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub3BlblNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5Nb3VudCgpe1xuICAgICAgICB0aGlzLnByb3BzLnJvb3QuY2hpbGRMaXN0Q2FsbGJhY2tzLnJlbW92ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vcGVuU2V0dGluZ3MpO1xuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBzZXNzaW9uQ2hpbGRyZW4gPSB0aGlzLnByb3BzLnJvb3QuZ2V0TmFtZXMoKTtcbiAgICAgICAgdmFyIHRvb2xVSSA9IFtdO1xuICAgICAgICBmb3IodmFyIGk9MDsgaTxzZXNzaW9uQ2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdmFyIHNlc3Npb25OYW1lID0gc2Vzc2lvbkNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgdmFyIHNlc3Npb25PYmogPSB0aGlzLnByb3BzLnJvb3QuZ2V0T2JqZWN0KHNlc3Npb25OYW1lKTtcbiAgICAgICAgICAgIHZhciBjb25maWdDbGFzc05hbWUgPSBXZWF2ZS5nZXRQYXRoKHNlc3Npb25PYmopLmdldFR5cGUoKTtcbiAgICAgICAgICAgIHZhciBUb29sQ2xhc3MgPSB3ZWF2ZXVpLmdldFRvb2xGb3JDb25maWdOYW1lKGNvbmZpZ0NsYXNzTmFtZSk7XG4gICAgICAgICAgICAgdmFyIHVpO1xuICAgICAgICAgICAgaWYoVG9vbENsYXNzKXtcbiAgICAgICAgICAgICAgICB1aSA9IDxUb29sQ2xhc3Mgc2V0dGluZ3M9e3Nlc3Npb25PYmp9IGluZGV4PXtpfSAga2V5PXtpfS8+XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvb2xVSS5wdXNoKHVpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHdlYXZldWkuU2Vzc2lvbkVkaXRvciBzZXNzaW9uU3RhdGU9eyB0aGlzLnByb3BzLnJvb3R9IGtleVByZXNzPVwidHJ1ZVwiIHNldHRpbmdzPXt0aGlzLnNlc3Npb25Db25maWd9Lz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIHt0b29sVUl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==

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
