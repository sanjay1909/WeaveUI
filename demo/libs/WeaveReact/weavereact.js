(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["weavereact"] = factory(require("react"));
	else
		root["weavereact"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_27__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(1)["default"];

	var _componentsTreeTreeConfig = __webpack_require__(2);

	var _componentsTreeTreeConfig2 = _interopRequireDefault(_componentsTreeTreeConfig);

	var _componentsModalModalConfig = __webpack_require__(7);

	var _componentsModalModalConfig2 = _interopRequireDefault(_componentsModalModalConfig);

	var _componentsTreeTree = __webpack_require__(11);

	var _componentsTreeTree2 = _interopRequireDefault(_componentsTreeTree);

	var _componentsModalModal = __webpack_require__(33);

	var _componentsModalModal2 = _interopRequireDefault(_componentsModalModal);

	var _utilsAppJs = __webpack_require__(10);

	var _utilsAppJs2 = _interopRequireDefault(_utilsAppJs);

	exports.Tree = _componentsTreeTree2["default"];
	exports.Modal = _componentsModalModal2["default"];
	exports.TreeConfig = _componentsTreeTreeConfig2["default"];
	exports.ModalConfig = _componentsModalModalConfig2["default"];

	exports.getToolForConfigName = function (name) {
	    if (_utilsAppJs2["default"].getToolImplementation(name)) {
	        return _utilsAppJs2["default"].getToolImplementation(name);
	    } else {
	        console.warn("No Tool is registered for " + name);
	    }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _Object$defineProperties = __webpack_require__(4)["default"];

	(function (module) {

	    function TreeConfig() {

	        _Object$defineProperties(this, {
	            "folderIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-folder"))
	            },
	            "folderOpenIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-folder-open"))
	            },
	            "fileIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-file-text"))
	            },
	            "fileOpenIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("fa fa-file-text-o"))
	            },
	            "enableDataTypeIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            }
	        });

	        this.activeNode = null;
	        this.dataTypesMap = null;
	        this.getDataType = null;
	    }

	    var p = TreeConfig.prototype;

	    p.changeActiveNode = function (nodeConfig) {
	        if (this.activeNode) {
	            this.activeNode.active.value = false;
	        }
	        this.activeNode = nodeConfig;
	        this.activeNode.active.value = true;
	    };

	    p.getFileIcon = function (data) {
	        var datType = this.getDataType ? this.getDataType(data) : data.constructor.name;
	        if (this.dataTypesMap[datType]) return this.dataTypesMap[datType];
	        return this.fileOpenIcon.value;
	    };

	    p.getFileIconStyle = function () {
	        return {
	            fontStyle: "bold",
	            borderStyle: "solid",
	            borderColor: "#7fd6f9",
	            borderWidth: "1px",
	            borderRadius: "4px",
	            paddingLeft: "3px",
	            paddingRight: "3px",
	            fontSize: "11px"
	        };
	    };

	    p.getNodeIconStyle = function () {
	        return {
	            color: "#7fd6f9",
	            textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
	        };
	    };

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.TreeConfig', TreeConfig);

	    module.exports = TreeConfig;
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

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function defineProperties(T, D){
	  return $.setDescs(T, D);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _Object$defineProperties = __webpack_require__(4)["default"];

	var _interopRequireDefault = __webpack_require__(1)["default"];

	var _ModalPanelConfig = __webpack_require__(8);

	var _ModalPanelConfig2 = _interopRequireDefault(_ModalPanelConfig);

	(function (module) {

	    function ModalConfig() {

	        _Object$defineProperties(this, {
	            "panelConfig": {
	                value: Weave.linkableChild(this, new _ModalPanelConfig2["default"]())
	            },
	            "open": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            },
	            "buttonIcon": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            }

	        });
	    }

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.ModalConfig', ModalConfig);

	    module.exports = ModalConfig;
	})(module);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _Object$defineProperties = __webpack_require__(4)["default"];

	var _interopRequireDefault = __webpack_require__(1)["default"];

	var _configsBorderConfig = __webpack_require__(9);

	var _configsBorderConfig2 = _interopRequireDefault(_configsBorderConfig);

	(function (module) {

	    function ModalPanelConfig() {

	        _Object$defineProperties(this, {
	            "border": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableDynamicObject(_configsBorderConfig2["default"]))
	            },
	            "title": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            }

	        });

	        _Object$defineProperties(this, {
	            "width": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("60%"))
	            },
	            "height": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("80%"))
	            },
	            "marginLeft": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("-20%"))
	            },
	            "marginTop": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("-20%"))
	            },
	            "left": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("40%"))
	            },
	            "top": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString("40%"))
	            }

	        });
	    }

	    var p = ModalPanelConfig.prototype;

	    p.getLayoutState = function () {
	        return {
	            "top": this.top.value,
	            "left": this.left.value,
	            "marginTop": this.marginTop.value,
	            "marginLeft": this.marginLeft.value,
	            "width": this.width.value,
	            "height": this.height.value
	        };
	    };

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.ModalPanelConfig', ModalPanelConfig);

	    module.exports = ModalPanelConfig;
	})(module);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _Object$defineProperties = __webpack_require__(4)["default"];

	var _interopRequireDefault = __webpack_require__(1)["default"];

	var _utilsApp = __webpack_require__(10);

	var _utilsApp2 = _interopRequireDefault(_utilsApp);

	(function (module) {

	    function BorderConfig() {

	        _Object$defineProperties(this, {
	            "borderColor": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString('#bebebe'))
	            },
	            "borderWidth": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString('1px'))
	            },
	            "borderRadius": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString('5px'))
	            },
	            "borderStyle": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString('solid'))
	            }
	        });
	    }

	    var p = BorderConfig.prototype;

	    p.getBorderStateFor = function (properties) {
	        if (!properties) properties = ["borderColor", "borderWidth", "borderRadius", "borderStyle"];
	        return _utilsApp2["default"].getStateFor(this, properties);
	    };

	    Weave.registerClass('weavereact.BorderConfig', BorderConfig);

	    module.exports = BorderConfig;
	})(module);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 10 */
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

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _inherits = __webpack_require__(12)["default"];

	var _classCallCheck = __webpack_require__(26)["default"];

	var _interopRequireDefault = __webpack_require__(1)["default"];

	exports.__esModule = true;

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _utilsApp = __webpack_require__(10);

	var _utilsApp2 = _interopRequireDefault(_utilsApp);

	var _utilsStyle = __webpack_require__(28);

	var _utilsStyle2 = _interopRequireDefault(_utilsStyle);

	var _Node = __webpack_require__(31);

	var _Node2 = _interopRequireDefault(_Node);

	var Tree = (function (_React$Component) {
	    _inherits(Tree, _React$Component);

	    function Tree(props) {
	        _classCallCheck(this, Tree);

	        _React$Component.call(this, props);
	        this.settings = this.props.settings ? this.props.settings : new TreeConfig();
	        this.settings.dataTypesMap = this.props.dataTypesMap;
	        this.settings.getDataType = this.props.getDataType;
	    }

	    Tree.prototype.componentDidMount = function componentDidMount() {};

	    Tree.prototype.componentWillUnmount = function componentWillUnmount() {};

	    Tree.prototype.render = function render() {

	        return _react2["default"].createElement(_Node2["default"], { data: this.props.data, label: this.props.label, nodes: this.props.nodes, treeConfig: this.settings, clickCallback: this.props.clickCallback });
	    };

	    return Tree;
	})(_react2["default"].Component);

	_utilsApp2["default"].registerToolImplementation("reactweave.TreeConfig", Tree);
	exports["default"] = Tree;
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(13)["default"];

	var _Object$setPrototypeOf = __webpack_require__(15)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(14), __esModule: true };

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(16), __esModule: true };

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(17);
	module.exports = __webpack_require__(20).Object.setPrototypeOf;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(18);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(23).set});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(19)
	  , core      = __webpack_require__(20)
	  , ctx       = __webpack_require__(21)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 19 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 20 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(22);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(6).getDesc
	  , isObject = __webpack_require__(24)
	  , anObject = __webpack_require__(25);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(21)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _appendVendorPrefix = __webpack_require__(29);

	var _appendVendorPrefix2 = _interopRequireDefault(_appendVendorPrefix);

	(function (module) {

	    function Style() {}

	    function merge(into, obj) {
	        for (var attr in obj) {
	            into[attr] = obj[attr];
	        }

	        return into;
	    }

	    Style.mergeStyleObjects = function (into, obj, appendVendorPrefix) {
	        var styleObject = merge(into, obj);
	        if (appendVendorPrefix) return Style.appendVendorPrefix(styleObject);else return styleObject;
	    };

	    Style.getStyle = function (style) {
	        return _appendVendorPrefix2['default'](style);
	    };

	    Style.appendVendorPrefix = function (style) {
	        return _appendVendorPrefix2['default'](style);
	    };

	    // due to bootstrap Navbar zindex (1029) value we have to give 1030 for overlay
	    Style.overlayContainer = function (isOpen) {
	        return _appendVendorPrefix2['default']({
	            position: 'fixed',
	            width: '100%',
	            height: '100%',
	            left: 0,
	            top: 0,
	            background: 'rgba(0, 0, 0, 0.1)',
	            opacity: isOpen ? 1 : 0,
	            transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
	            transition: isOpen ? 'opacity 0.5s' : 'opacity 0.5s, transform 0.1s 0.5s',
	            zIndex: 1030
	        });
	    };

	    Style.modal = function (isOpen) {
	        return _appendVendorPrefix2['default']({
	            position: 'fixed',
	            zIndex: 1050,
	            width: '100%',
	            height: '100%',
	            left: 0,
	            top: 0,
	            transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)',
	            transition: 'all 0.5s'

	        });
	    };

	    module.exports = Style;
	})(module);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getVendorPropertyName = __webpack_require__(30);

	module.exports = function (target, sources) {
	    var to = Object(target);
	    var hasOwnProperty = Object.prototype.hasOwnProperty;

	    for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	        var nextSource = arguments[nextIndex];
	        if (nextSource == null) {
	            continue;
	        }

	        var from = Object(nextSource);

	        for (var key in from) {
	            if (hasOwnProperty.call(from, key)) {
	                to[key] = from[key];
	            }
	        }
	    }

	    var prefixed = {};
	    for (var key in to) {
	        prefixed[getVendorPropertyName(key)] = to[key];
	    }

	    return prefixed;
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	var div = document.createElement('div');
	var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
	var domVendorPrefix;

	// Helper function to get the proper vendor property name. (transition => WebkitTransition)
	module.exports = function (prop) {

	    if (prop in div.style) return prop;

	    var prop = prop.charAt(0).toUpperCase() + prop.substr(1);
	    if (domVendorPrefix) {
	        return domVendorPrefix + prop;
	    } else {
	        for (var i = 0; i < prefixes.length; ++i) {
	            var vendorProp = prefixes[i] + prop;
	            if (vendorProp in div.style) {
	                domVendorPrefix = prefixes[i];
	                return vendorProp;
	            }
	        }
	    }
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _inherits = __webpack_require__(12)["default"];

	var _classCallCheck = __webpack_require__(26)["default"];

	var _interopRequireDefault = __webpack_require__(1)["default"];

	exports.__esModule = true;

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _utilsApp = __webpack_require__(10);

	var _utilsApp2 = _interopRequireDefault(_utilsApp);

	var _utilsStyle = __webpack_require__(28);

	var _utilsStyle2 = _interopRequireDefault(_utilsStyle);

	var _NodeConfig = __webpack_require__(32);

	var _NodeConfig2 = _interopRequireDefault(_NodeConfig);

	var Node = (function (_React$Component) {
	    _inherits(Node, _React$Component);

	    function Node(props) {
	        _classCallCheck(this, Node);

	        _React$Component.call(this, props);
	        this.settings = this.props.settings ? this.props.settings : new _NodeConfig2["default"]();
	        this.toggle = this.toggle.bind(this);
	        this.getTreeNodes = this.getTreeNodes.bind(this);
	        this.getTreeLabel = this.getTreeLabel.bind(this);
	        this.setSessionStateFromTree();
	    }

	    Node.prototype.componentDidMount = function componentDidMount() {
	        this.settings.open.addImmediateCallback(this, this.forceUpdate);
	        this.settings.children.childListCallbacks.addImmediateCallback(this, this.forceUpdate);
	        this.settings.label.addImmediateCallback(this, this.forceUpdate);
	        this.settings.active.addImmediateCallback(this, this.forceUpdate);
	    };

	    Node.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.settings.open.removeCallback(this, this.forceUpdate);
	        this.settings.children.childListCallbacks.removeCallback(this, this.forceUpdate);
	        this.settings.label.removeCallback(this, this.forceUpdate);
	        this.settings.active.removeCallback(this, this.forceUpdate);
	    };

	    Node.prototype.toggle = function toggle() {
	        this.settings.open.value = !this.settings.open.value;
	        if (this.props.clickCallback) this.props.clickCallback.call(this, this.props.data);
	        this.props.treeConfig.changeActiveNode(this.settings);
	    };

	    Node.prototype.setSessionStateFromTree = function setSessionStateFromTree() {
	        this.settings.label.value = this.getTreeLabel();
	        var treeNodes = this.getTreeNodes();
	        if (treeNodes && treeNodes.length !== this.settings.children.getNames().length) {
	            this.settings.children.delayCallbacks();
	            for (var i = 0; i < treeNodes.length; i++) {
	                var objectName = "node" + i;
	                this.settings.children.requestObject(objectName, _NodeConfig2["default"]);
	            }
	            this.settings.children.resumeCallbacks();
	        }
	    };

	    Node.prototype.getTreeNodes = function getTreeNodes() {
	        if (this.props.data[this.props.nodes] instanceof Function) {
	            return this.props.data[this.props.nodes]();
	        } else {
	            return this.props.data[this.props.nodes];
	        }
	    };

	    Node.prototype.getTreeLabel = function getTreeLabel() {
	        if (this.props.data[this.props.label] instanceof Function) {
	            return this.props.data[this.props.label]();
	        } else {
	            return this.props.data[this.props.label];
	        }
	    };

	    Node.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.setSessionStateFromTree();
	    };

	    Node.prototype.render = function render() {
	        var nodesUI = [];
	        var folderIcon = this.props.treeConfig.folderIcon.value;
	        //var activeLeafColor = "black";

	        var nodeUI = "";
	        var nodes = this.settings.getNodes();
	        if (this.settings.open.value) {
	            folderIcon = this.props.treeConfig.folderOpenIcon.value;

	            if (nodes.length > 0) {
	                var treeNodes = this.getTreeNodes();
	                for (var i = 0; i < nodes.length; i++) {
	                    var treeItem = treeNodes[i];
	                    var nodeConfig = this.settings.children.getObject(nodes[i]);
	                    var active = false;
	                    nodesUI.push(_react2["default"].createElement(Node, { key: i, data: treeItem, label: this.props.label, nodes: this.props.nodes, treeConfig: this.props.treeConfig, settings: nodeConfig, clickCallback: this.props.clickCallback }));
	                }
	            }
	        }

	        if (nodes.length > 0) {
	            //folder
	            var nodeIconStyleObject = _utilsStyle2["default"].appendVendorPrefix(this.props.treeConfig.getNodeIconStyle());
	            nodeUI = _react2["default"].createElement(
	                "span",
	                null,
	                _react2["default"].createElement(
	                    "span",
	                    { onClick: this.toggle },
	                    _react2["default"].createElement("i", { className: folderIcon, style: nodeIconStyleObject }),
	                    " ",
	                    this.settings.label.value
	                ),
	                _react2["default"].createElement(
	                    "ul",
	                    { style: { listStyleType: "none", paddingLeft: "20px" } },
	                    nodesUI
	                )
	            );
	        } else {
	            //leaf
	            var leaf = this.settings.label.value;
	            var fileIcon = this.props.treeConfig.getFileIcon(this.props.data);
	            var fileIconStyle = this.props.treeConfig.getFileIconStyle();
	            var activeLeafColor = this.settings.active.value ? "#8e8d8d" : "black";
	            if (fileIcon.indexOf("fa fa-") > -1) nodeUI = _react2["default"].createElement(
	                "li",
	                { style: { color: activeLeafColor }, onClick: this.toggle },
	                _react2["default"].createElement("i", { className: fileIcon }),
	                " ",
	                leaf
	            );else nodeUI = _react2["default"].createElement(
	                "li",
	                { style: { color: activeLeafColor }, onClick: this.toggle },
	                _react2["default"].createElement(
	                    "span",
	                    { style: fileIconStyle },
	                    fileIcon
	                ),
	                " ",
	                leaf
	            );
	        }

	        return nodeUI;
	    };

	    return Node;
	})(_react2["default"].Component);

	_utilsApp2["default"].registerToolImplementation("weavereact.NodeConfig", Node);
	exports["default"] = Node;
	module.exports = exports["default"];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _Object$defineProperties = __webpack_require__(4)["default"];

	(function (module) {

	    function NodeConfig() {

	        _Object$defineProperties(this, {
	            "label": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableString(""))
	            },
	            "children": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableHashMap()) // important to be prototype as type restriction is compared with prototype
	            },
	            "open": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            },
	            "active": {
	                value: Weave.linkableChild(this, new weavejs.core.LinkableBoolean(false))
	            }
	        });
	    }

	    var p = NodeConfig.prototype;

	    p.getNodes = function () {
	        return this.children.getNames();
	    };

	    p.reset = function () {
	        this.label.value = "";
	        this.open.value = false;
	        this.children.removeAllObjects();
	    };

	    //This Function makes this class as SessionClass
	    Weave.registerClass('weavereact.NodeConfig', NodeConfig);

	    module.exports = NodeConfig;
	})(module);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _inherits = __webpack_require__(12)["default"];

	var _classCallCheck = __webpack_require__(26)["default"];

	var _interopRequireDefault = __webpack_require__(1)["default"];

	exports.__esModule = true;

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _utilsStyle = __webpack_require__(28);

	var _utilsStyle2 = _interopRequireDefault(_utilsStyle);

	var _ModalConfig = __webpack_require__(7);

	var _ModalConfig2 = _interopRequireDefault(_ModalConfig);

	var _ModalPanel = __webpack_require__(34);

	var _ModalPanel2 = _interopRequireDefault(_ModalPanel);

	var Modal = (function (_React$Component) {
	    _inherits(Modal, _React$Component);

	    function Modal(props) {
	        _classCallCheck(this, Modal);

	        _React$Component.call(this, props);
	        this.settings = this.props.settings ? this.props.settings : new _ModalConfig2["default"]();

	        this.openModal = this.openModal.bind(this);
	    }

	    Modal.prototype.componentDidMount = function componentDidMount() {
	        this.settings.open.addImmediateCallback(this, this.forceUpdate);
	        this.settings.buttonIcon.addImmediateCallback(this, this.forceUpdate);
	    };

	    Modal.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.settings.open.removeCallback(this, this.forceUpdate);
	        this.settings.buttonIcon.removeCallback(this, this.forceUpdate);
	    };

	    Modal.prototype.openModal = function openModal() {
	        this.settings.open.value = true;
	    };

	    Modal.prototype.render = function render() {
	        var isOpen = this.settings.open.value;
	        var overlay = _utilsStyle2["default"].overlayContainer(isOpen);
	        var modal = _utilsStyle2["default"].modal(isOpen);
	        var modalButtonUI = "";

	        if (!this.props.keyPress) {
	            if (this.settings.buttonIcon.value) {
	                modalButtonUI = _react2["default"].createElement(
	                    "span",
	                    { style: { cursor: "pointer" }, onClick: this.openModal },
	                    _react2["default"].createElement("i", { className: this.settings.buttonIcon.value })
	                );
	            } else {
	                modalButtonUI = _react2["default"].createElement(
	                    "span",
	                    { type: "button", className: "btn btn-primary", onClick: this.openModal },
	                    "Open"
	                );
	            }
	        }
	        return _react2["default"].createElement(
	            "span",
	            null,
	            _react2["default"].createElement(
	                "span",
	                { type: "button", className: "btn btn-primary", onClick: this.openModal },
	                "Open"
	            ),
	            _react2["default"].createElement("div", { style: overlay }),
	            _react2["default"].createElement(
	                "div",
	                { style: modal },
	                _react2["default"].createElement(
	                    _ModalPanel2["default"],
	                    { sessionOpen: this.settings.open, settings: this.settings.panelConfig },
	                    this.props.children
	                )
	            )
	        );
	    };

	    return Modal;
	})(_react2["default"].Component);

	exports["default"] = Modal;
	module.exports = exports["default"];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _inherits = __webpack_require__(12)["default"];

	var _classCallCheck = __webpack_require__(26)["default"];

	var _interopRequireDefault = __webpack_require__(1)["default"];

	exports.__esModule = true;

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _ModalPanelConfig = __webpack_require__(8);

	var _ModalPanelConfig2 = _interopRequireDefault(_ModalPanelConfig);

	var ModalPanel = (function (_React$Component) {
	    _inherits(ModalPanel, _React$Component);

	    function ModalPanel(props) {
	        _classCallCheck(this, ModalPanel);

	        _React$Component.call(this, props);
	        this.settings = this.props.settings ? this.props.settings : new _ModalPanelConfig2["default"]();
	        window.modalLayout = this.settings; // for testing
	        this.sessionOpen = this.props.sessionOpen;

	        this.state = this.settings.getLayoutState();

	        this.closeModal = this.closeModal.bind(this);
	        this.updateState = this.updateState.bind(this);
	    }

	    ModalPanel.prototype.componentDidMount = function componentDidMount() {
	        var cc = Weave.getCallbacks(this.settings);
	        cc.addImmediateCallback(this, this.updateState);
	    };

	    ModalPanel.prototype.componentWillUnmount = function componentWillUnmount() {
	        var cc = Weave.getCallbacks(this.settings);
	        cc.removeCallback(this, this.updateState);
	    };

	    ModalPanel.prototype.updateState = function updateState() {
	        this.setState(this.settings.getLayoutState());
	    };

	    ModalPanel.prototype.closeModal = function closeModal() {
	        this.sessionOpen.value = false;
	    };

	    ModalPanel.prototype.render = function render() {
	        //we could have used this.state.layout, but style of div will get the same reference, which is deprecated in react
	        var layoutStyle = this.settings.getLayoutState(); // this will make sure we get new object everytime

	        var bodyStyle = {
	            height: this.settings.height.value,
	            width: "100%",
	            overflowY: 'scroll',
	            overflowX: 'hidden'
	        };

	        layoutStyle["position"] = 'absolute';
	        this.sessionOpen.value ? layoutStyle["display"] = 'block' : layoutStyle["display"] = 'none';

	        return _react2["default"].createElement(
	            "div",
	            { style: layoutStyle },
	            _react2["default"].createElement(
	                "div",
	                { className: "modal-content" },
	                _react2["default"].createElement(
	                    "div",
	                    { className: "modal-header" },
	                    _react2["default"].createElement(
	                        "button",
	                        { type: "button", className: "close", onClick: this.closeModal },
	                        "×"
	                    ),
	                    _react2["default"].createElement(
	                        "h4",
	                        { className: "modal-title" },
	                        "Title"
	                    )
	                ),
	                _react2["default"].createElement(
	                    "div",
	                    { className: "modal-body", style: bodyStyle },
	                    this.props.children
	                )
	            )
	        );
	    };

	    return ModalPanel;
	})(_react2["default"].Component);

	exports["default"] = ModalPanel;
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
