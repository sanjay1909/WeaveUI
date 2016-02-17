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

	exports.init = function (container) {
	    _reactDom2.default.render(React.createElement(_App2.default, null), document.getElementById(container));
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQU9BLFFBQVEsSUFBUixHQUFlLFVBQVUsU0FBVixFQUFxQjtBQUNoQyx1QkFBUyxNQUFULENBQWlCLHdDQUFqQixFQUEwQixTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBMUIsRUFEZ0M7Q0FBckIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbmpheS9naXQvV2VhdmVVSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuXG5cblxuXG5cbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICBSZWFjdERPTS5yZW5kZXIoIDxBcHAvPiAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcilcbiAgICApO1xufVxuIl19

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
	        window.weave = new Weave();
	        window.dbWeave = new Weave();

	        _this.sessionConfigDashdoard = new _weaveui2.default.SessionEditorConfig();
	        _this.sessionConfigWeave = new _weaveui2.default.SessionEditorConfig();

	        return _this;
	    }

	    _createClass(App, [{
	        key: "openSettings",
	        value: function openSettings(e) {
	            if (e.code === "KeyD") {
	                if (this.sessionConfigWeave.modalConfig.open.value) this.sessionConfigWeave.modalConfig.open.value = false;
	                this.sessionConfigDashdoard.modalConfig.open.value = true;
	                this.popUpSessionEditor(this.sessionConfigDashdoard, window.dbWeave, "Session State Editor (Weave Dasboard)", true);
	            } else if (e.code === "KeyW") {
	                if (this.sessionConfigDashdoard.modalConfig.open.value) this.sessionConfigDashdoard.modalConfig.open.value = false;
	                this.sessionConfigWeave.modalConfig.open.value = true;
	                this.popUpSessionEditor(this.sessionConfigWeave, weave, "Session State Editor (Weave)", false);
	            } else if (e.code === "KeyQ") {
	                this.sessionConfigWeave.modalConfig.open.value = false;
	                this.sessionConfigDashdoard.modalConfig.open.value = false;
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
	        key: "popUpSessionEditor",
	        value: function popUpSessionEditor(config, weaveInstance, title, isDb) {
	            ReactDOM.render(_react2.default.createElement(_weaveui2.default.SessionEditor, { title: title, isDashboard: isDb, weave: weaveInstance, keyPress: "true", settings: config }), document.getElementById("popUp"));
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement("div", { id: "popUp" }),
	                this.props.children
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	exports.default = App;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vc3JjL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07OztBQUtGLGFBTEUsR0FLRixDQUFZLEtBQVosRUFBbUI7OEJBTGpCLEtBS2lCOzsyRUFMakIsZ0JBTVEsUUFEUzs7QUFFZixjQUFLLFlBQUwsR0FBb0IsTUFBSyxZQUFMLENBQWtCLElBQWxCLE9BQXBCLENBRmU7QUFHZixlQUFPLEtBQVAsR0FBZSxJQUFJLEtBQUosRUFBZixDQUhlO0FBSWYsZUFBTyxPQUFQLEdBQWlCLElBQUksS0FBSixFQUFqQixDQUplOztBQU1mLGNBQUssc0JBQUwsR0FBOEIsSUFBSSxrQkFBUSxtQkFBUixFQUFsQyxDQU5lO0FBT2YsY0FBSyxrQkFBTCxHQUEwQixJQUFJLGtCQUFRLG1CQUFSLEVBQTlCLENBUGU7OztLQUFuQjs7aUJBTEU7O3FDQWVXLEdBQUc7QUFDWixnQkFBSSxFQUFFLElBQUYsS0FBVyxNQUFYLEVBQW1CO0FBQ25CLG9CQUFHLEtBQUssa0JBQUwsQ0FBd0IsV0FBeEIsQ0FBb0MsSUFBcEMsQ0FBeUMsS0FBekMsRUFBaUQsS0FBSyxrQkFBTCxDQUF3QixXQUF4QixDQUFvQyxJQUFwQyxDQUF5QyxLQUF6QyxHQUFnRCxLQUFoRCxDQUFwRDtBQUNBLHFCQUFLLHNCQUFMLENBQTRCLFdBQTVCLENBQXdDLElBQXhDLENBQTZDLEtBQTdDLEdBQXFELElBQXJELENBRm1CO0FBR25CLHFCQUFLLGtCQUFMLENBQXlCLEtBQUssc0JBQUwsRUFBNEIsT0FBTyxPQUFQLEVBQWUsdUNBQXBFLEVBQTRHLElBQTVHLEVBSG1CO2FBQXZCLE1BSU8sSUFBSSxFQUFFLElBQUYsS0FBVyxNQUFYLEVBQW1CO0FBQzFCLG9CQUFHLEtBQUssc0JBQUwsQ0FBNEIsV0FBNUIsQ0FBd0MsSUFBeEMsQ0FBNkMsS0FBN0MsRUFBcUQsS0FBSyxzQkFBTCxDQUE0QixXQUE1QixDQUF3QyxJQUF4QyxDQUE2QyxLQUE3QyxHQUFvRCxLQUFwRCxDQUF4RDtBQUNBLHFCQUFLLGtCQUFMLENBQXdCLFdBQXhCLENBQW9DLElBQXBDLENBQXlDLEtBQXpDLEdBQWlELElBQWpELENBRjBCO0FBRzFCLHFCQUFLLGtCQUFMLENBQXlCLEtBQUssa0JBQUwsRUFBd0IsS0FBakQsRUFBdUQsOEJBQXZELEVBQXNGLEtBQXRGLEVBSDBCO2FBQXZCLE1BSUEsSUFBSSxFQUFFLElBQUYsS0FBVyxNQUFYLEVBQW1CO0FBQzFCLHFCQUFLLGtCQUFMLENBQXdCLFdBQXhCLENBQW9DLElBQXBDLENBQXlDLEtBQXpDLEdBQWlELEtBQWpELENBRDBCO0FBRTFCLHFCQUFLLHNCQUFMLENBQTRCLFdBQTVCLENBQXdDLElBQXhDLENBQTZDLEtBQTdDLEdBQXFELEtBQXJELENBRjBCO2FBQXZCOzs7OzRDQU1RO0FBQ2YsbUJBQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsS0FBSyxZQUFMLENBQW5DLENBRGU7Ozs7K0NBSUc7QUFDbEIsbUJBQU8sbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0MsS0FBSyxZQUFMLENBQXRDLENBRGtCOzs7OzJDQUlILFFBQU8sZUFBYyxPQUFNLE1BQU07QUFDaEQscUJBQVMsTUFBVCxDQUFpQixnREFBVSxhQUFWLElBQXdCLE9BQU8sS0FBUCxFQUFjLGFBQWEsSUFBYixFQUFtQixPQUFTLGFBQVQsRUFBd0IsVUFBVyxNQUFYLEVBQWtCLFVBQVksTUFBWixFQUFuRyxDQUFqQixFQUEwSSxTQUFTLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBMUksRUFEZ0Q7Ozs7aUNBTTNDOztBQUdMLG1CQUFROzs7Z0JBQ0ksdUNBQUssSUFBRyxPQUFILEVBQUwsQ0FESjtnQkFFSyxLQUFLLEtBQUwsQ0FBVyxRQUFYO2FBRmIsQ0FISzs7OztXQTVDUDtFQUFZLGdCQUFNLFNBQU47O2tCQXdESCIsImZpbGUiOiJBcHAuanN4Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlVUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2VhdmV1aSBmcm9tIFwid2VhdmV1aVwiO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5vcGVuU2V0dGluZ3MgPSB0aGlzLm9wZW5TZXR0aW5ncy5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cud2VhdmUgPSBuZXcgV2VhdmUoKTtcbiAgICAgICAgd2luZG93LmRiV2VhdmUgPSBuZXcgV2VhdmUoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2Vzc2lvbkNvbmZpZ0Rhc2hkb2FyZCA9IG5ldyB3ZWF2ZXVpLlNlc3Npb25FZGl0b3JDb25maWcoKTtcbiAgICAgICAgdGhpcy5zZXNzaW9uQ29uZmlnV2VhdmUgPSBuZXcgd2VhdmV1aS5TZXNzaW9uRWRpdG9yQ29uZmlnKCk7XG5cbiAgICB9XG4gICAgb3BlblNldHRpbmdzKGUpIHtcbiAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJLZXlEXCIpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc2Vzc2lvbkNvbmZpZ1dlYXZlLm1vZGFsQ29uZmlnLm9wZW4udmFsdWUpICB0aGlzLnNlc3Npb25Db25maWdXZWF2ZS5tb2RhbENvbmZpZy5vcGVuLnZhbHVlPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbkNvbmZpZ0Rhc2hkb2FyZC5tb2RhbENvbmZpZy5vcGVuLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucG9wVXBTZXNzaW9uRWRpdG9yKCB0aGlzLnNlc3Npb25Db25maWdEYXNoZG9hcmQsd2luZG93LmRiV2VhdmUsXCJTZXNzaW9uIFN0YXRlIEVkaXRvciAoV2VhdmUgRGFzYm9hcmQpXCIsdHJ1ZSlcbiAgICAgICAgfSBlbHNlIGlmIChlLmNvZGUgPT09IFwiS2V5V1wiKSB7XG4gICAgICAgICAgICBpZih0aGlzLnNlc3Npb25Db25maWdEYXNoZG9hcmQubW9kYWxDb25maWcub3Blbi52YWx1ZSkgIHRoaXMuc2Vzc2lvbkNvbmZpZ0Rhc2hkb2FyZC5tb2RhbENvbmZpZy5vcGVuLnZhbHVlPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbkNvbmZpZ1dlYXZlLm1vZGFsQ29uZmlnLm9wZW4udmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wb3BVcFNlc3Npb25FZGl0b3IoIHRoaXMuc2Vzc2lvbkNvbmZpZ1dlYXZlLHdlYXZlLFwiU2Vzc2lvbiBTdGF0ZSBFZGl0b3IgKFdlYXZlKVwiLGZhbHNlKVxuICAgICAgICB9IGVsc2UgaWYgKGUuY29kZSA9PT0gXCJLZXlRXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbkNvbmZpZ1dlYXZlLm1vZGFsQ29uZmlnLm9wZW4udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbkNvbmZpZ0Rhc2hkb2FyZC5tb2RhbENvbmZpZy5vcGVuLnZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub3BlblNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5Nb3VudCgpe1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub3BlblNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBwb3BVcFNlc3Npb25FZGl0b3IoY29uZmlnLHdlYXZlSW5zdGFuY2UsdGl0bGUsaXNEYikge1xuICAgICAgICBSZWFjdERPTS5yZW5kZXIoIDwgd2VhdmV1aS5TZXNzaW9uRWRpdG9yIHRpdGxlPXt0aXRsZX0gaXNEYXNoYm9hcmQ9e2lzRGJ9IHdlYXZlID0ge3dlYXZlSW5zdGFuY2V9IGtleVByZXNzID0gXCJ0cnVlXCIgc2V0dGluZ3MgPSB7Y29uZmlnfS8+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wVXBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcblxuXG4gICAgICAgIHJldHVybiAoPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwXCIvPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19

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
