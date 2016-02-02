(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["weaveui"] = factory();
	else
		root["weaveui"] = factory();
})(this, function() {
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

	var _SessionEditorConfig = __webpack_require__(2);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

	var _App = __webpack_require__(4);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.SessionEditor = _SessionEditor2.default;
	exports.SessionEditorConfig = _SessionEditorConfig2.default;

	exports.getToolForConfigName = function (name) {
	    if (_App2.default.getToolImplementation(name)) {
	        return _App2.default.getToolImplementation(name);
	    } else {
	        console.warn("No Tool is registered for " + name);
	    }
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _SessionEditorConfig = __webpack_require__(2);

	var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

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
	        _this.nodeClick = _this.nodeClick.bind(_this);
	        _this.changeSessionValue = _this.changeSessionValue.bind(_this);
	        _this.tree = weavejs.WeaveAPI.SessionManager.getSessionStateTree(_this.props.sessionState);
	        _this.tree.label = "Weave";
	        _this.nodeValue = "";
	        _this.selectedData;
	        return _this;
	    }

	    _createClass(SessionEditor, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            Weave.getCallbacks(this.settings).addGroupedCallback(this, this.forceUpdate);
	            this.settings.activeNodeValue.addImmediateCallback(this, this.forceUpdate);

	            Weave.getCallbacks(this.tree).addGroupedCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            Weave.getCallbacks(this.settings).removeCallback(this, this.forceUpdate);
	            this.settings.activeNodeValue.removeCallback(this, this.forceUpdate);

	            Weave.getCallbacks(this.tree).removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "nodeClick",
	        value: function nodeClick(node) {
	            if (node.children) {} else {
	                this.selectedData = node.data;
	                this.settings.activeNodeValue.state = node.data.value;
	            }
	        }
	    }, {
	        key: "changeSessionValue",
	        value: function changeSessionValue(e) {
	            this.selectedData.state = e.target.value;
	            this.settings.activeNodeValue.state = e.target.value;
	            this.forceUpdate();
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            var treeUI = "";
	            if (this.tree) {
	                treeUI = React.createElement(weavereact.Tree, { data: this.tree, label: "label", nodes: "children", clickCallback: this.nodeClick, settings: this.settings.treeConfig, dataTypesMap: this.settings.dataTypesMap, getDataType: this.settings.getDataType });
	            }

	            var treeContainerStyle = {
	                width: "72%",
	                height: "100%",
	                borderStyle: "solid",
	                borderRadius: "2px",
	                borderWidth: "1px",
	                borderColor: "grey",
	                float: "left",
	                overflowY: 'scroll',
	                overflowX: 'scroll',
	                padding: "4px"
	            };
	            var resultContainerStyle = {
	                width: "24%",
	                height: "100%",
	                borderStyle: "solid",
	                borderRadius: "2px",
	                borderWidth: "1px",
	                borderColor: "grey",
	                float: "right",
	                overflowY: 'scroll',
	                overflowX: 'scroll',
	                padding: "4px"
	            };

	            return React.createElement(
	                weavereact.Modal,
	                { settings: this.settings.modalConfig, keyPress: "true" },
	                React.createElement(
	                    "div",
	                    { style: { display: "inline-block", width: "100%" } },
	                    React.createElement(
	                        "div",
	                        { style: treeContainerStyle },
	                        treeUI
	                    ),
	                    React.createElement(
	                        "span",
	                        { style: resultContainerStyle },
	                        React.createElement("textarea", { style: { width: "100%", height: "100%", border: "none" }, value: this.settings.activeNodeValue.state, onChange: this.changeSessionValue })
	                    )
	                )
	            );
	        }
	    }]);

	    return SessionEditor;
	}(React.Component);

	exports.default = SessionEditor;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	(function (module) {

	    function SessionEditorConfig() {

	        Object.defineProperties(this, {

	            "treeConfig": {
	                value: new weavereact.TreeConfig()
	            },
	            showTree: {
	                value: new weavejs.core.LinkableBoolean(false)
	            },
	            activeNodeValue: {
	                value: new weavejs.core.LinkableVariable()
	            },
	            modalConfig: {
	                value: new weavereact.ModalConfig()
	            }

	        });

	        this.dataTypesMap = {
	            "weavejs.core.LinkableString": "S",
	            "weavejs.core.LinkableNumber": "N",
	            "weavejs.core.LinkableBoolean": "B"
	        };
	    }

	    SessionEditorConfig.prototype.getDataType = function (treeItem) {
	        return treeItem.data.FLEXJS_CLASS_INFO.names[0].qName;
	    };

	    module.exports = SessionEditorConfig;
	})(module);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
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
/* 4 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=weaveui.js.map
