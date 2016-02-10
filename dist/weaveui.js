(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("weavereact"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "weavereact"], factory);
	else if(typeof exports === 'object')
		exports["weaveui"] = factory(require("React"), require("weavereact"));
	else
		root["weaveui"] = factory(root["React"], root["weavereact"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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

	var _SessionEditor = __webpack_require__(1);

	var _SessionEditor2 = _interopRequireDefault(_SessionEditor);

	var _SessionEditorConfig = __webpack_require__(4);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

	var _App = __webpack_require__(8);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.SessionEditor = _SessionEditor2.default;
	exports.SessionEditorConfig = _SessionEditorConfig2.default;

	exports.getToolForConfigName = function (name) {
	    if (_App2.default.getToolImplementation(name)) {
	        return _App2.default.getToolImplementation(name);
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsUUFBUSxhQUFSO0FBQ0EsUUFBUSxtQkFBUjs7QUFHQSxRQUFRLG9CQUFSLEdBQStCLFVBQVUsSUFBVixFQUFnQjtBQUMzQyxRQUFJLGNBQUkscUJBQUosQ0FBMEIsSUFBMUIsQ0FBSixFQUFxQztBQUNqQyxlQUFPLGNBQUkscUJBQUosQ0FBMEIsSUFBMUIsQ0FBUCxDQURpQztLQUFyQztDQUQyQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FuamF5L2dpdC9XZWF2ZVVJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlc3Npb25FZGl0b3IgZnJvbSBcIi4vc2Vzc2lvblN0YXRlRWRpdG9yL1Nlc3Npb25FZGl0b3JcIjtcbmltcG9ydCBTZXNzaW9uRWRpdG9yQ29uZmlnIGZyb20gXCIuL3Nlc3Npb25TdGF0ZUVkaXRvci9TZXNzaW9uRWRpdG9yQ29uZmlnXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL3V0aWxzL0FwcFwiO1xuXG5cbmV4cG9ydHMuU2Vzc2lvbkVkaXRvciA9IFNlc3Npb25FZGl0b3I7XG5leHBvcnRzLlNlc3Npb25FZGl0b3JDb25maWcgPSBTZXNzaW9uRWRpdG9yQ29uZmlnO1xuXG5cbmV4cG9ydHMuZ2V0VG9vbEZvckNvbmZpZ05hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmIChBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKG5hbWUpKSB7XG4gICAgICAgIHJldHVybiBBcHAuZ2V0VG9vbEltcGxlbWVudGF0aW9uKG5hbWUpO1xuICAgIH1cblxufVxuIl19

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _weavereact = __webpack_require__(3);

	var _weavereact2 = _interopRequireDefault(_weavereact);

	var _SessionEditorConfig = __webpack_require__(4);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

	var _TreeSection = __webpack_require__(6);

	var _TreeSection2 = _interopRequireDefault(_TreeSection);

	var _NodeView = __webpack_require__(7);

	var _NodeView2 = _interopRequireDefault(_NodeView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SessionEditor = function (_React$Component) {
	    _inherits(SessionEditor, _React$Component);

	    function SessionEditor(props) {
	        _classCallCheck(this, SessionEditor);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SessionEditor).call(this, props));

	        _this.settings = _this.props.settings ? _this.props.settings : new _SessionEditorConfig2.default();

	        _this.changeSessionValue = _this.changeSessionValue.bind(_this);
	        _this.nodeClick = _this.nodeClick.bind(_this);
	        _this.saveFile = _this.saveFile.bind(_this);
	        _this.tree = weavejs.WeaveAPI.SessionManager.getSessionStateTree(_this.props.sessionState);
	        _this.tree.label = "Weave";
	        _this.nodeValue = "";
	        _this.selectedData; // to-do:try with linkableWatcher and add forceUpdate to that watcher
	        return _this;
	    }

	    _createClass(SessionEditor, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {}
	    }, {
	        key: "nodeClick",
	        value: function nodeClick(node) {
	            this.selectedData = node.data;
	            var state = Weave.getState(node.data);
	            var str;
	            if (node.data instanceof weavejs.core.LinkableString) str = state;else str = Weave.stringify(state, null, '\t', true);
	            this.settings.activeNodeValue.state = str;
	        }
	    }, {
	        key: "changeSessionValue",
	        value: function changeSessionValue(e) {
	            var value = this.settings.activeNodeValue.state;
	            if (this.selectedData instanceof weavejs.core.LinkableString) this.selectedData.value = value;else Weave.setState(this.selectedData, JSON.parse(value));

	            this.forceUpdate();
	        }
	    }, {
	        key: "saveFile",
	        value: function saveFile() {
	            var archive = weavejs.core.WeaveArchive.createArchive(weave);
	            var uint8Array = archive.serialize();
	            var arrayBuffer = uint8Array.buffer;
	            window.saveAs(new Blob([arrayBuffer]), "test.weave");
	        }
	    }, {
	        key: "openFile",
	        value: function openFile(e) {
	            var selectedfile = e.target.files[0];
	            // Build Promise List, each promise resolved by FileReader.onload.

	            new Promise(function (resolve, reject) {
	                var reader = new FileReader();

	                reader.onload = function (event) {
	                    // Resolve both the FileReader result and its original file.
	                    resolve([event, selectedfile]);
	                };

	                // Read the file.
	                reader.readAsArrayBuffer(selectedfile);
	            }).then(function (zippedResults) {
	                // Run the callback after all files have been read.
	                var e = zippedResults[0];
	                var result = e.target.result;
	                // read the content of the file with JSZip
	                weavejs.core.WeaveArchive.loadFileContent(weave, result);
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            var applyButtonStyle = {
	                marginTop: "4px",
	                marginLeft: "2px",
	                borderStyle: "solid",
	                borderRadius: "4px",
	                borderWidth: "1px",
	                borderColor: "grey",
	                float: "right",
	                padding: "4px",
	                cursor: "pointer",
	                fontSize: "12px",
	                position: "relative"
	            };
	            var inputButtonStyle = {
	                width: "100%",
	                opacity: "0",
	                overflow: "hidden",
	                position: "absolute",
	                left: "0",
	                top: "2px",
	                bottom: "2px"
	            };

	            return _react2.default.createElement(
	                _weavereact2.default.Modal,
	                { settings: this.settings.modalConfig, keyPress: "true", title: "Session State Editor" },
	                _react2.default.createElement(
	                    "div",
	                    { style: { height: "90%", width: "100%", display: "flex", position: "relative", overflow: "hidden" } },
	                    _react2.default.createElement(
	                        _weavereact2.default.SplitPane,
	                        { split: "vertical", minSize: "50", defaultSize: "256" },
	                        _react2.default.createElement(_TreeSection2.default, { tree: this.tree, settings: this.settings, nodeClick: this.nodeClick }),
	                        _react2.default.createElement(_NodeView2.default, { activeNodeValue: this.settings.activeNodeValue })
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: applyButtonStyle, onClick: this.changeSessionValue },
	                    " Apply "
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: applyButtonStyle, onClick: this.saveFile },
	                    _react2.default.createElement(
	                        "i",
	                        { className: "fa fa-fw fa-download" },
	                        " "
	                    ),
	                    " Save "
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { style: applyButtonStyle },
	                    _react2.default.createElement("input", { onChange: this.openFile, type: "file", style: inputButtonStyle }),
	                    _react2.default.createElement(
	                        "i",
	                        { className: "fa fa-fw fa-upload" },
	                        " "
	                    ),
	                    " Load"
	                )
	            );
	        }
	    }]);

	    return SessionEditor;
	}(_react2.default.Component);

	exports.default = SessionEditor;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXNzaW9uU3RhdGVFZGl0b3IvU2Vzc2lvbkVkaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPcUI7OztBQUVuQixhQUZtQixhQUVuQixDQUFZLEtBQVosRUFBbUI7OEJBRkEsZUFFQTs7MkVBRkEsMEJBR1gsUUFEVzs7QUFFakIsY0FBSyxRQUFMLEdBQWlCLE1BQUssS0FBTCxDQUFXLFFBQVgsR0FBb0IsTUFBSyxLQUFMLENBQVcsUUFBWCxHQUFvQixtQ0FBeEMsQ0FGQTs7QUFJakIsY0FBSyxrQkFBTCxHQUEwQixNQUFLLGtCQUFMLENBQXdCLElBQXhCLE9BQTFCLENBSmlCO0FBS2pCLGNBQUssU0FBTCxHQUFpQixNQUFLLFNBQUwsQ0FBZSxJQUFmLE9BQWpCLENBTGlCO0FBTWpCLGNBQUssUUFBTCxHQUFnQixNQUFLLFFBQUwsQ0FBYyxJQUFkLE9BQWhCLENBTmlCO0FBT2pCLGNBQUssSUFBTCxHQUFhLFFBQVEsUUFBUixDQUFpQixjQUFqQixDQUFnQyxtQkFBaEMsQ0FBb0QsTUFBSyxLQUFMLENBQVcsWUFBWCxDQUFqRSxDQVBpQjtBQVFqQixjQUFLLElBQUwsQ0FBVSxLQUFWLEdBQWtCLE9BQWxCLENBUmlCO0FBU2pCLGNBQUssU0FBTCxHQUFpQixFQUFqQixDQVRpQjtBQVVqQixjQUFLLFlBQUw7QUFWaUI7S0FBbkI7O2lCQUZtQjs7NENBZUE7OzsrQ0FJSzs7O2tDQUlmLE1BQUs7QUFDUixpQkFBSyxZQUFMLEdBQW9CLEtBQUssSUFBTCxDQURaO0FBRVIsZ0JBQUksUUFBUSxNQUFNLFFBQU4sQ0FBZSxLQUFLLElBQUwsQ0FBdkIsQ0FGSTtBQUdSLGdCQUFJLEdBQUosQ0FIUTtBQUlSLGdCQUFJLEtBQUssSUFBTCxZQUFxQixRQUFRLElBQVIsQ0FBYSxjQUFiLEVBQ3hCLE1BQU0sS0FBTixDQURELEtBR0MsTUFBTSxNQUFNLFNBQU4sQ0FBZ0IsS0FBaEIsRUFB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Q0FBYyxlQUFkLEVBQTNCLENBRko7cUJBREo7aUJBRkg7Z0JBUUc7O3NCQUFLLE9BQU8sZ0JBQVAsRUFBeUIsU0FBUyxLQUFLLGtCQUFMLEVBQXZDOztpQkFSSDtnQkFTRzs7c0JBQUssT0FBTyxnQkFBUCxFQUF5QixTQUFTLEtBQUssUUFBTCxFQUF2QztvQkFBc0Q7OzBCQUFJLFdBQVksc0JBQVosRUFBSjs7cUJBQXREOztpQkFUSDtnQkFVRzs7c0JBQUssT0FBTyxnQkFBUCxFQUFMO29CQUNJLHlDQUFPLFVBQVUsS0FBSyxRQUFMLEVBQWUsTUFBSyxNQUFMLEVBQVksT0FBTyxnQkFBUCxFQUE1QyxDQURKO29CQUVJOzswQkFBSSxXQUFZLG9CQUFaLEVBQUo7O3FCQUZKOztpQkFWSDthQUFULENBM0JPOzs7O1dBakZVO0VBQXNCLGdCQUFNLFNBQU47O2tCQUF0QiIsImZpbGUiOiJTZXNzaW9uRWRpdG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW5qYXkvZ2l0L1dlYXZlVUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2VhdmVyZWFjdCBmcm9tIFwid2VhdmVyZWFjdFwiO1xuaW1wb3J0IFNlc3Npb25FZGl0b3JDb25maWcgZnJvbSBcIi4vU2Vzc2lvbkVkaXRvckNvbmZpZ1wiO1xuaW1wb3J0IFRyZWVTZWN0aW9uIGZyb20gXCIuL1RyZWVTZWN0aW9uXCI7XG5pbXBvcnQgTm9kZVZpZXcgZnJvbSBcIi4vTm9kZVZpZXdcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNldHRpbmdzID0gIHRoaXMucHJvcHMuc2V0dGluZ3M/dGhpcy5wcm9wcy5zZXR0aW5nczpuZXcgU2Vzc2lvbkVkaXRvckNvbmZpZygpO1xuXG4gICAgdGhpcy5jaGFuZ2VTZXNzaW9uVmFsdWUgPSB0aGlzLmNoYW5nZVNlc3Npb25WYWx1ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubm9kZUNsaWNrID0gdGhpcy5ub2RlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnNhdmVGaWxlID0gdGhpcy5zYXZlRmlsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudHJlZSA9ICB3ZWF2ZWpzLldlYXZlQVBJLlNlc3Npb25NYW5hZ2VyLmdldFNlc3Npb25TdGF0ZVRyZWUodGhpcy5wcm9wcy5zZXNzaW9uU3RhdGUpO1xuICAgIHRoaXMudHJlZS5sYWJlbCA9IFwiV2VhdmVcIjtcbiAgICB0aGlzLm5vZGVWYWx1ZSA9IFwiXCI7XG4gICAgdGhpcy5zZWxlY3RlZERhdGE7Ly8gdG8tZG86dHJ5IHdpdGggbGlua2FibGVXYXRjaGVyIGFuZCBhZGQgZm9yY2VVcGRhdGUgdG8gdGhhdCB3YXRjaGVyXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gIH1cblxuXG4gbm9kZUNsaWNrKG5vZGUpe1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgICAgdmFyIHN0YXRlID0gV2VhdmUuZ2V0U3RhdGUobm9kZS5kYXRhKTtcbiAgICAgICAgdmFyIHN0cjtcbiAgICAgICAgaWYgKG5vZGUuZGF0YSBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZylcbiAgICAgICAgXHRzdHIgPSBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICBcdHN0ciA9IFdlYXZlLnN0cmluZ2lmeShzdGF0ZSwgbnVsbCwgJ1xcdCcsIHRydWUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IHN0cjtcbiAgfVxuXG5cbiAgY2hhbmdlU2Vzc2lvblZhbHVlKGUpe1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRhIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKVxuICAgICAgICBcdHRoaXMuc2VsZWN0ZWREYXRhLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgXHRXZWF2ZS5zZXRTdGF0ZSh0aGlzLnNlbGVjdGVkRGF0YSwgSlNPTi5wYXJzZSh2YWx1ZSkpO1xuXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHNhdmVGaWxlKCl7XG4gICAgdmFyIGFyY2hpdmUgID0gd2VhdmVqcy5jb3JlLldlYXZlQXJjaGl2ZS5jcmVhdGVBcmNoaXZlKHdlYXZlKVxuICAgIHZhciB1aW50OEFycmF5ID0gYXJjaGl2ZS5zZXJpYWxpemUoKTtcbiAgICB2YXIgYXJyYXlCdWZmZXIgID0gdWludDhBcnJheS5idWZmZXI7XG4gICAgd2luZG93LnNhdmVBcyhuZXcgQmxvYihbYXJyYXlCdWZmZXJdKSwgXCJ0ZXN0LndlYXZlXCIpO1xuICB9XG5cblxuXG4gIG9wZW5GaWxlKGUpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIC8vIEJ1aWxkIFByb21pc2UgTGlzdCwgZWFjaCBwcm9taXNlIHJlc29sdmVkIGJ5IEZpbGVSZWFkZXIub25sb2FkLlxuXG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBib3RoIHRoZSBGaWxlUmVhZGVyIHJlc3VsdCBhbmQgaXRzIG9yaWdpbmFsIGZpbGUuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoW2V2ZW50LCBzZWxlY3RlZGZpbGVdKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gUmVhZCB0aGUgZmlsZS5cbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoc2VsZWN0ZWRmaWxlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoemlwcGVkUmVzdWx0cykge1xuICAgICAgICAgICAgICAgIC8vIFJ1biB0aGUgY2FsbGJhY2sgYWZ0ZXIgYWxsIGZpbGVzIGhhdmUgYmVlbiByZWFkLlxuICAgICAgICAgICAgICAgIHZhciBlID0gemlwcGVkUmVzdWx0c1swXTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIC8vIHJlYWQgdGhlIGNvbnRlbnQgb2YgdGhlIGZpbGUgd2l0aCBKU1ppcFxuICAgICAgICAgICAgICAgICB3ZWF2ZWpzLmNvcmUuV2VhdmVBcmNoaXZlLmxvYWRGaWxlQ29udGVudCh3ZWF2ZSxyZXN1bHQpO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gIHJlbmRlcigpIHtcblxuXG5cbiAgICB2YXIgYXBwbHlCdXR0b25TdHlsZSA9IHtcbiAgICAgICAgbWFyZ2luVG9wOlwiNHB4XCIsXG4gICAgICAgIG1hcmdpbkxlZnQ6XCIycHhcIixcbiAgICAgICAgYm9yZGVyU3R5bGU6XCJzb2xpZFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcbiAgICAgICAgYm9yZGVyV2lkdGg6XCIxcHhcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6XCJncmV5XCIsXG4gICAgICAgIGZsb2F0OlwicmlnaHRcIixcbiAgICAgICAgcGFkZGluZzpcIjRweFwiLFxuICAgICAgICBjdXJzb3I6XCJwb2ludGVyXCIsXG4gICAgICAgIGZvbnRTaXplOlwiMTJweFwiLFxuICAgICAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCJcbiAgICB9XG4gICAgdmFyIGlucHV0QnV0dG9uU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgb3BhY2l0eTogXCIwXCIsXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBsZWZ0OlwiMFwiLFxuICAgICAgICB0b3A6XCIycHhcIixcbiAgICAgICAgYm90dG9tOlwiMnB4XCJcbiAgICB9XG5cbiAgICByZXR1cm4gKCA8d2VhdmVyZWFjdC5Nb2RhbCBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5tb2RhbENvbmZpZ30ga2V5UHJlc3M9XCJ0cnVlXCIgdGl0bGU9XCJTZXNzaW9uIFN0YXRlIEVkaXRvclwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDpcIjkwJVwiLHdpZHRoOlwiMTAwJVwiLGRpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIn19PlxuICAgICAgICAgICAgICAgICAgICA8d2VhdmVyZWFjdC5TcGxpdFBhbmUgc3BsaXQ9XCJ2ZXJ0aWNhbFwiIG1pblNpemU9XCI1MFwiIGRlZmF1bHRTaXplPVwiMjU2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJlZVNlY3Rpb24gdHJlZT17dGhpcy50cmVlfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5nc30gbm9kZUNsaWNrPXt0aGlzLm5vZGVDbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVWaWV3IGFjdGl2ZU5vZGVWYWx1ZT17dGhpcy5zZXR0aW5ncy5hY3RpdmVOb2RlVmFsdWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC93ZWF2ZXJlYWN0LlNwbGl0UGFuZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXthcHBseUJ1dHRvblN0eWxlfSBvbkNsaWNrPXt0aGlzLmNoYW5nZVNlc3Npb25WYWx1ZX0+IEFwcGx5IDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2FwcGx5QnV0dG9uU3R5bGV9IG9uQ2xpY2s9e3RoaXMuc2F2ZUZpbGV9PjwgaSBjbGFzc05hbWUgPSBcImZhIGZhLWZ3IGZhLWRvd25sb2FkXCIgID4gPCAvaSA+IFNhdmUgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YXBwbHlCdXR0b25TdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5vcGVuRmlsZX0gdHlwZT0nZmlsZScgc3R5bGU9e2lucHV0QnV0dG9uU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPCBpIGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtdXBsb2FkXCIgID4gPCAvaSA+IExvYWRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC93ZWF2ZXJlYWN0Lk1vZGFsPlxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==

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

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _weavereact = __webpack_require__(3);

	var _weavereact2 = _interopRequireDefault(_weavereact);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (module) {

	    function SessionEditorConfig() {

	        Object.defineProperties(this, {

	            "treeConfig": {
	                value: new _weavereact2.default.TreeConfig()
	            },
	            showTree: {
	                value: new weavejs.core.LinkableBoolean(false)
	            },
	            activeNodeValue: {
	                value: new weavejs.core.LinkableVariable()
	            },
	            modalConfig: {
	                value: new _weavereact2.default.ModalConfig()
	            }

	        });

	        this.dataTypesMap = {
	            "weavejs.core.LinkableString": "S",
	            "weavejs.core.LinkableNumber": "N",
	            "weavejs.core.LinkableBoolean": "B",
	            "weavejs.data.source.WeaveDataSource": "fa fa-database"

	        };
	    }

	    SessionEditorConfig.prototype.getDataType = function (treeItem) {
	        return treeItem.data.FLEXJS_CLASS_INFO.names[0].qName;
	    };

	    module.exports = SessionEditorConfig;
	})(module);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXNzaW9uU3RhdGVFZGl0b3IvU2Vzc2lvbkVkaXRvckNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLENBQUMsVUFBVSxNQUFWLEVBQWtCOztBQUlmLGFBQVMsbUJBQVQsR0FBK0I7O0FBRTNCLGVBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7O0FBRTFCLDBCQUFjO0FBQ1YsdUJBQU8sSUFBSSxxQkFBVyxVQUFYLEVBQVg7YUFESjtBQUdBLHNCQUFVO0FBQ04sdUJBQU8sSUFBSSxRQUFRLElBQVIsQ0FBYSxlQUFiLENBQTZCLEtBQWpDLENBQVA7YUFESjtBQUdBLDZCQUFpQjtBQUNiLHVCQUFPLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBWDthQURKO0FBR0EseUJBQWE7QUFDVCx1QkFBTyxJQUFJLHFCQUFXLFdBQVgsRUFBWDthQURKOztTQVhKLEVBRjJCOztBQW1CM0IsYUFBSyxZQUFMLEdBQW9CO0FBQ2hCLDJDQUErQixHQUEvQjtBQUNBLDJDQUErQixHQUEvQjtBQUNBLDRDQUFnQyxHQUFoQztBQUNBLG1EQUF1QyxnQkFBdkM7O1NBSkosQ0FuQjJCO0tBQS9COztBQStCQSx3QkFBb0IsU0FBcEIsQ0FBOEIsV0FBOUIsR0FBNEMsVUFBVSxRQUFWLEVBQW9CO0FBQzVELGVBQU8sU0FBUyxJQUFULENBQWMsaUJBQWQsQ0FBZ0MsS0FBaEMsQ0FBc0MsQ0FBdEMsRUFBeUMsS0FBekMsQ0FEcUQ7S0FBcEIsQ0FuQzdCOztBQXlDZixXQUFPLE9BQVAsR0FBaUIsbUJBQWpCLENBekNlO0NBQWxCLEVBMkNDLE1BM0NELENBQUQiLCJmaWxlIjoiU2Vzc2lvbkVkaXRvckNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FuamF5L2dpdC9XZWF2ZVVJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlYXZlcmVhY3QgZnJvbSBcIndlYXZlcmVhY3RcIjtcbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cblxuXG4gICAgZnVuY3Rpb24gU2Vzc2lvbkVkaXRvckNvbmZpZygpIHtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG5cbiAgICAgICAgICAgIFwidHJlZUNvbmZpZ1wiOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyB3ZWF2ZXJlYWN0LlRyZWVDb25maWcoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dUcmVlOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuKGZhbHNlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGl2ZU5vZGVWYWx1ZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgd2VhdmVqcy5jb3JlLkxpbmthYmxlVmFyaWFibGUoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGFsQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyB3ZWF2ZXJlYWN0Lk1vZGFsQ29uZmlnKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRhdGFUeXBlc01hcCA9IHtcbiAgICAgICAgICAgIFwid2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nXCI6IFwiU1wiLFxuICAgICAgICAgICAgXCJ3ZWF2ZWpzLmNvcmUuTGlua2FibGVOdW1iZXJcIjogXCJOXCIsXG4gICAgICAgICAgICBcIndlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW5cIjogXCJCXCIsXG4gICAgICAgICAgICBcIndlYXZlanMuZGF0YS5zb3VyY2UuV2VhdmVEYXRhU291cmNlXCI6IFwiZmEgZmEtZGF0YWJhc2VcIlxuXG4gICAgICAgIH1cblxuXG4gICAgfVxuXG5cbiAgICBTZXNzaW9uRWRpdG9yQ29uZmlnLnByb3RvdHlwZS5nZXREYXRhVHlwZSA9IGZ1bmN0aW9uICh0cmVlSXRlbSkge1xuICAgICAgICByZXR1cm4gdHJlZUl0ZW0uZGF0YS5GTEVYSlNfQ0xBU1NfSU5GTy5uYW1lc1swXS5xTmFtZTtcbiAgICB9XG5cblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBTZXNzaW9uRWRpdG9yQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _weavereact = __webpack_require__(3);

	var _weavereact2 = _interopRequireDefault(_weavereact);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TreeSection = function (_React$Component) {
	  _inherits(TreeSection, _React$Component);

	  function TreeSection(props) {
	    _classCallCheck(this, TreeSection);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TreeSection).call(this, props));

	    _this.settings = _this.props.settings;

	    return _this;
	  }

	  _createClass(TreeSection, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      weavejs.WeaveAPI.SessionManager.addTreeCallback(this, this.forceUpdate);
	      this.settings.activeNodeValue.addImmediateCallback(this, this.forceUpdate);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      weavejs.WeaveAPI.SessionManager.removeTreeCallback(this, this.forceUpdate);
	      this.settings.activeNodeValue.removeCallback(this, this.forceUpdate);
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var treeUI = "";
	      if (this.props.tree) {
	        treeUI = _react2.default.createElement(_weavereact2.default.Tree, { data: this.props.tree, label: "label", nodes: "children", clickCallback: this.props.nodeClick, settings: this.settings.treeConfig, dataTypesMap: this.settings.dataTypesMap, getDataType: this.settings.getDataType });
	      }

	      var treeContainerStyle = {
	        width: "100%",
	        height: "100%",
	        borderStyle: "solid",
	        borderRadius: "4px",
	        borderWidth: "1px",
	        borderColor: "grey",
	        overflowY: 'scroll',
	        overflowX: 'scroll',
	        padding: "4px"
	      };

	      return _react2.default.createElement(
	        "div",
	        { style: treeContainerStyle },
	        treeUI
	      );
	    }
	  }]);

	  return TreeSection;
	}(_react2.default.Component);

	exports.default = TreeSection;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXNzaW9uU3RhdGVFZGl0b3IvVHJlZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS007OztBQUVKLFdBRkksV0FFSixDQUFZLEtBQVosRUFBbUI7MEJBRmYsYUFFZTs7dUVBRmYsd0JBR0ksUUFEVzs7QUFFakIsVUFBSyxRQUFMLEdBQWdCLE1BQUssS0FBTCxDQUFXLFFBQVgsQ0FGQzs7O0dBQW5COztlQUZJOzt3Q0FRZTtBQUNqQixjQUFRLFFBQVIsQ0FBaUIsY0FBakIsQ0FBZ0MsZUFBaEMsQ0FBZ0QsSUFBaEQsRUFBc0QsS0FBSyxXQUFMLENBQXRELENBRGlCO0FBRWpCLFdBQUssUUFBTCxDQUFjLGVBQWQsQ0FBOEIsb0JBQTlCLENBQW1ELElBQW5ELEVBQXlELEtBQUssV0FBTCxDQUF6RCxDQUZpQjs7OzsyQ0FLSztBQUN0QixjQUFRLFFBQVIsQ0FBaUIsY0FBakIsQ0FBZ0Msa0JBQWhDLENBQW1ELElBQW5ELEVBQXlELEtBQUssV0FBTCxDQUF6RCxDQURzQjtBQUV0QixXQUFLLFFBQUwsQ0FBYyxlQUFkLENBQThCLGNBQTlCLENBQTZDLElBQTdDLEVBQW1ELEtBQUssV0FBTCxDQUFuRCxDQUZzQjs7Ozs2QkFRZjs7QUFFUCxVQUFJLFNBQVMsRUFBVCxDQUZHO0FBR1AsVUFBRyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWdCO0FBQ2YsaUJBQVMsbURBQVksSUFBWixJQUFpQixNQUFNLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBaUIsT0FBTSxPQUFOLEVBQWMsT0FBTSxVQUFOLEVBQWtCLGVBQWUsS0FBSyxLQUFMLENBQVcsU0FBWCxFQUFzQixVQUFVLEtBQUssUUFBTCxDQUFjLFVBQWQsRUFBMEIsY0FBYyxLQUFLLFFBQUwsQ0FBYyxZQUFkLEVBQTRCLGFBQWEsS0FBSyxRQUFMLENBQWMsV0FBZCxFQUF4TSxDQUFULENBRGU7T0FBbkI7O0FBSUEsVUFBSSxxQkFBcUI7QUFDckIsZUFBTSxNQUFOO0FBQ0EsZ0JBQU8sTUFBUDtBQUNBLHFCQUFZLE9BQVo7QUFDQSxzQkFBYSxLQUFiO0FBQ0EscUJBQVksS0FBWjtBQUNBLHFCQUFZLE1BQVo7QUFDQSxtQkFBVyxRQUFYO0FBQ0EsbUJBQVcsUUFBWDtBQUNBLGlCQUFRLEtBQVI7T0FUQSxDQVBHOztBQW9CUCxhQUFTOztVQUFLLE9BQU8sa0JBQVAsRUFBTDtRQUNnQixNQURoQjtPQUFULENBcEJPOzs7O1NBckJMO0VBQW9CLGdCQUFNLFNBQU47O2tCQWdEWCIsImZpbGUiOiJUcmVlU2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FuamF5L2dpdC9XZWF2ZVVJIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2VhdmVyZWFjdCBmcm9tIFwid2VhdmVyZWFjdFwiO1xuXG5cbmNsYXNzIFRyZWVTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5wcm9wcy5zZXR0aW5ncztcblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB3ZWF2ZWpzLldlYXZlQVBJLlNlc3Npb25NYW5hZ2VyLmFkZFRyZWVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5hZGRJbW1lZGlhdGVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICB3ZWF2ZWpzLldlYXZlQVBJLlNlc3Npb25NYW5hZ2VyLnJlbW92ZVRyZWVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgfVxuXG5cblxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciB0cmVlVUkgPSBcIlwiO1xuICAgIGlmKHRoaXMucHJvcHMudHJlZSl7XG4gICAgICAgIHRyZWVVSSA9IDx3ZWF2ZXJlYWN0LlRyZWUgZGF0YT17dGhpcy5wcm9wcy50cmVlfSBsYWJlbD1cImxhYmVsXCIgbm9kZXM9XCJjaGlsZHJlblwiICBjbGlja0NhbGxiYWNrPXt0aGlzLnByb3BzLm5vZGVDbGlja30gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MudHJlZUNvbmZpZ30gZGF0YVR5cGVzTWFwPXt0aGlzLnNldHRpbmdzLmRhdGFUeXBlc01hcH0gZ2V0RGF0YVR5cGU9e3RoaXMuc2V0dGluZ3MuZ2V0RGF0YVR5cGV9Lz5cbiAgICB9XG5cbiAgICB2YXIgdHJlZUNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgICB3aWR0aDpcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxuICAgICAgICBib3JkZXJTdHlsZTpcInNvbGlkXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxuICAgICAgICBib3JkZXJXaWR0aDpcIjFweFwiLFxuICAgICAgICBib3JkZXJDb2xvcjpcImdyZXlcIixcbiAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcbiAgICAgICAgb3ZlcmZsb3dYOiAnc2Nyb2xsJyxcbiAgICAgICAgcGFkZGluZzpcIjRweFwiXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKCA8ZGl2IHN0eWxlPXt0cmVlQ29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmVlVUl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgVHJlZVNlY3Rpb247XG4iXX0=

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _weavereact = __webpack_require__(3);

	var _weavereact2 = _interopRequireDefault(_weavereact);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NodeView = function (_React$Component) {
	  _inherits(NodeView, _React$Component);

	  function NodeView(props) {
	    _classCallCheck(this, NodeView);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NodeView).call(this, props));

	    _this.textAreaChange = _this.textAreaChange.bind(_this);

	    return _this;
	  }

	  _createClass(NodeView, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.props.activeNodeValue.addImmediateCallback(this, this.forceUpdate);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this.props.activeNodeValue.removeCallback(this, this.forceUpdate);
	    }
	  }, {
	    key: "textAreaChange",
	    value: function textAreaChange(e) {
	      this.props.activeNodeValue.state = e.target.value;
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var resultContainerStyle = {
	        width: "100%",
	        height: "100%",
	        borderStyle: "solid",
	        borderRadius: "4px",
	        borderWidth: "1px",
	        borderColor: "grey",
	        overflowY: 'scroll',
	        overflowX: 'scroll',
	        padding: "4px"
	      };

	      return _react2.default.createElement(
	        "div",
	        { style: resultContainerStyle },
	        _react2.default.createElement("textarea", { style: { width: "100%", height: "100%", border: "none" }, value: this.props.activeNodeValue.state, onChange: this.textAreaChange })
	      );
	    }
	  }]);

	  return NodeView;
	}(_react2.default.Component);

	exports.default = NodeView;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zZXNzaW9uU3RhdGVFZGl0b3IvTm9kZVZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSU07OztBQUVKLFdBRkksUUFFSixDQUFZLEtBQVosRUFBbUI7MEJBRmYsVUFFZTs7dUVBRmYscUJBR0ksUUFEVzs7QUFJakIsVUFBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QixDQUppQjs7O0dBQW5COztlQUZJOzt3Q0FVZTtBQUNqQixXQUFLLEtBQUwsQ0FBVyxlQUFYLENBQTJCLG9CQUEzQixDQUFnRCxJQUFoRCxFQUFxRCxLQUFLLFdBQUwsQ0FBckQsQ0FEaUI7Ozs7MkNBSUs7QUFDdEIsV0FBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixjQUEzQixDQUEwQyxJQUExQyxFQUErQyxLQUFLLFdBQUwsQ0FBL0MsQ0FEc0I7Ozs7bUNBTVQsR0FBRTtBQUNmLFdBQUssS0FBTCxDQUFXLGVBQVgsQ0FBMkIsS0FBM0IsR0FBbUMsRUFBRSxNQUFGLENBQVMsS0FBVCxDQURwQjs7Ozs2QkFJUjs7QUFFUCxVQUFJLHVCQUF1QjtBQUN2QixlQUFNLE1BQU47QUFDQSxnQkFBTyxNQUFQO0FBQ0EscUJBQVksT0FBWjtBQUNBLHNCQUFhLEtBQWI7QUFDQSxxQkFBWSxLQUFaO0FBQ0EscUJBQVksTUFBWjtBQUNBLG1CQUFXLFFBQVg7QUFDQSxtQkFBVyxRQUFYO0FBQ0EsaUJBQVEsS0FBUjtPQVRBLENBRkc7O0FBZVAsYUFBUzs7VUFBSyxPQUFPLG9CQUFQLEVBQUw7UUFDRyw0Q0FBVSxPQUFPLEVBQUMsT0FBTSxNQUFOLEVBQWEsUUFBTyxNQUFQLEVBQWMsUUFBTyxNQUFQLEVBQW5DLEVBQW1ELE9BQU8sS0FBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixLQUEzQixFQUFrQyxVQUFVLEtBQUssY0FBTCxFQUFoSCxDQURIO09BQVQsQ0FmTzs7OztTQXhCTDtFQUFpQixnQkFBTSxTQUFOOztrQkE4Q1IiLCJmaWxlIjoiTm9kZVZpZXcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbmpheS9naXQvV2VhdmVVSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB3ZWF2ZXJlYWN0IGZyb20gXCJ3ZWF2ZXJlYWN0XCI7XG5cblxuY2xhc3MgTm9kZVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG5cbiAgICB0aGlzLnRleHRBcmVhQ2hhbmdlID0gdGhpcy50ZXh0QXJlYUNoYW5nZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMucHJvcHMuYWN0aXZlTm9kZVZhbHVlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgdGhpcy5wcm9wcy5hY3RpdmVOb2RlVmFsdWUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgfVxuXG5cblxuICB0ZXh0QXJlYUNoYW5nZShlKXtcbiAgICB0aGlzLnByb3BzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHJlc3VsdENvbnRhaW5lclN0eWxlID0ge1xuICAgICAgICB3aWR0aDpcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxuICAgICAgICBib3JkZXJTdHlsZTpcInNvbGlkXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxuICAgICAgICBib3JkZXJXaWR0aDpcIjFweFwiLFxuICAgICAgICBib3JkZXJDb2xvcjpcImdyZXlcIixcbiAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcbiAgICAgICAgb3ZlcmZsb3dYOiAnc2Nyb2xsJyxcbiAgICAgICAgcGFkZGluZzpcIjRweFwiXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKCA8ZGl2IHN0eWxlPXtyZXN1bHRDb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLGJvcmRlcjpcIm5vbmVcIn19IHZhbHVlPXt0aGlzLnByb3BzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZX0gb25DaGFuZ2U9e3RoaXMudGV4dEFyZWFDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBOb2RlVmlldztcbiJdfQ==

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	(function (module) {

	    function App() {}

	    var toolRegistry = {};

	    App.registerToolImplementation = function (asClassName, jsClass) {
	        if (!toolRegistry[asClassName]) toolRegistry[asClassName] = jsClass;
	    };

	    App.getToolImplementation = function (asClassName) {
	        return toolRegistry[asClassName];
	    };

	    module.exports = App;
	})(module);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9BcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFVBQVUsTUFBVixFQUFrQjs7QUFHZixhQUFTLEdBQVQsR0FBZSxFQUFmOztBQUlBLFFBQUksZUFBZSxFQUFmLENBUFc7O0FBVWYsUUFBSSwwQkFBSixHQUFpQyxVQUFVLFdBQVYsRUFBdUIsT0FBdkIsRUFBZ0M7QUFDN0QsWUFBSSxDQUFDLGFBQWEsV0FBYixDQUFELEVBQ0EsYUFBYSxXQUFiLElBQTRCLE9BQTVCLENBREo7S0FENkIsQ0FWbEI7O0FBZWYsUUFBSSxxQkFBSixHQUE0QixVQUFVLFdBQVYsRUFBdUI7QUFDL0MsZUFBTyxhQUFhLFdBQWIsQ0FBUCxDQUQrQztLQUF2QixDQWZiOztBQW1CZixXQUFPLE9BQVAsR0FBaUIsR0FBakIsQ0FuQmU7Q0FBbEIsRUFxQkMsTUFyQkQsQ0FBRCIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbmpheS9naXQvV2VhdmVVSSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAobW9kdWxlKSB7XG5cblxuICAgIGZ1bmN0aW9uIEFwcCgpIHtcblxuICAgIH1cblxuICAgIHZhciB0b29sUmVnaXN0cnkgPSB7fTtcblxuXG4gICAgQXBwLnJlZ2lzdGVyVG9vbEltcGxlbWVudGF0aW9uID0gZnVuY3Rpb24gKGFzQ2xhc3NOYW1lLCBqc0NsYXNzKSB7XG4gICAgICAgIGlmICghdG9vbFJlZ2lzdHJ5W2FzQ2xhc3NOYW1lXSlcbiAgICAgICAgICAgIHRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV0gPSBqc0NsYXNzO1xuICAgIH1cblxuICAgIEFwcC5nZXRUb29sSW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbiAoYXNDbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRvb2xSZWdpc3RyeVthc0NsYXNzTmFtZV07XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cbn0obW9kdWxlKSk7XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=weaveui.js.map
