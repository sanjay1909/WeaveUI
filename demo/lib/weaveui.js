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
	        _this.saveFile = _this.saveFile.bind(_this);
	        _this.textAreaChange = _this.textAreaChange.bind(_this);
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
	            weavejs.WeaveAPI.SessionManager.addTreeCallback(this, this.forceUpdate);
	            this.settings.activeNodeValue.addImmediateCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            Weave.getCallbacks(this.settings).removeCallback(this, this.forceUpdate);
	            this.settings.activeNodeValue.removeCallback(this, this.forceUpdate);
	            weavejs.WeaveAPI.SessionManager.removeTreeCallback(this, this.forceUpdate);
	            // Weave.getCallbacks(this.tree).removeCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: "nodeClick",
	        value: function nodeClick(node) {
	            this.selectedData = node.data;
	            var sessionState = Weave.getState(node.data);
	            var sessionStateAsString = Weave.stringify(sessionState, null, 3);
	            this.settings.activeNodeValue.state = sessionStateAsString;
	        }
	    }, {
	        key: "changeSessionValue",
	        value: function changeSessionValue(e) {
	            var value = this.refs["sessionView"].value;
	            var ss = this.selectedData.state; //to identify the state of the object so that view wont affect
	            if (typeof ss !== 'number' && typeof ss !== 'string' && typeof ss !== 'boolean') {
	                value = JSON.parse(this.refs["sessionView"].value);
	                Weave.setState(this.selectedData, value);
	            } else {
	                this.selectedData.state = value;
	            }

	            this.forceUpdate();
	        }
	    }, {
	        key: "saveFile",
	        value: function saveFile() {
	            var archive = weavejs.core.WeaveArchive.createArchive(weave);
	            window.saveAs(this.serialize(archive), "test.weave");
	        }
	    }, {
	        key: "serialize",
	        value: function serialize(archive) {
	            var zip = new weavejs.util.JS.JSZip();
	            var name;
	            var folder;
	            folder = zip.folder(weavejs.core.WeaveArchive.FOLDER_FILES);
	            for (name in archive.files) {
	                folder.file(name, this.files[name]);
	            }folder = zip.folder(weavejs.core.WeaveArchive.FOLDER_JSON);
	            for (name in archive.objects) {
	                folder.file(name, JSON.stringify(archive.objects[name]));
	            }return zip.generate({ type: 'blob' });
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
	        key: "textAreaChange",
	        value: function textAreaChange(e) {
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

	            return React.createElement(
	                weavereact.Modal,
	                { settings: this.settings.modalConfig, keyPress: "true", title: "Session State Editor" },
	                React.createElement(
	                    "div",
	                    { style: { height: "90%", width: "100%", display: "flex", position: "relative", overflow: "hidden" } },
	                    React.createElement(
	                        weavereact.SplitPane,
	                        { split: "vertical", minSize: "50", defaultSize: "100" },
	                        React.createElement(
	                            "div",
	                            { style: treeContainerStyle },
	                            treeUI
	                        ),
	                        React.createElement(
	                            "div",
	                            { style: resultContainerStyle },
	                            React.createElement("textarea", { ref: "sessionView", style: { width: "100%", height: "100%", border: "none" }, value: this.settings.activeNodeValue.state, onChange: this.textAreaChange })
	                        )
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { style: applyButtonStyle, onClick: this.changeSessionValue },
	                    " Apply "
	                ),
	                React.createElement(
	                    "div",
	                    { style: applyButtonStyle, onClick: this.saveFile },
	                    React.createElement(
	                        "i",
	                        { className: "fa fa-fw fa-download" },
	                        " "
	                    ),
	                    " Download "
	                ),
	                React.createElement(
	                    "div",
	                    { style: applyButtonStyle },
	                    React.createElement("input", { onChange: this.openFile, type: "file", style: inputButtonStyle }),
	                    React.createElement(
	                        "i",
	                        { className: "fa fa-fw fa-upload" },
	                        " "
	                    ),
	                    " Uplaod"
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
