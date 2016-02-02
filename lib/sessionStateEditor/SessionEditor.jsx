"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _weavereact = require("weavereact");

var _weavereact2 = _interopRequireDefault(_weavereact);

var _weavejs = require("weavejs");

var _weavejs2 = _interopRequireDefault(_weavejs);

var _SessionEditorConfig = require("./SessionEditorConfig");

var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

var SessionEditor = (function (_React$Component) {
    _inherits(SessionEditor, _React$Component);

    function SessionEditor(props) {
        _classCallCheck(this, SessionEditor);

        _React$Component.call(this, props);
        this.settings = new _SessionEditorConfig2["default"]();
        this.nodeClick = this.nodeClick.bind(this);
        this.changeSessionValue = this.changeSessionValue.bind(this);
        this.nodeValue = "";
        this.selectedData;
    }

    SessionEditor.prototype.componentDidMount = function componentDidMount() {
        Weave.getCallbacks(this.settings).addGroupedCallback(this, this.forceUpdate);
        this.settings.activeNodeValue.addImmediateCallback(this, this.forceUpdate);
        this.tree = _weavejs2["default"].WeaveAPI.SessionManager.getSessionStateTree(this.props.sessionState);
        this.tree.label = "Weave";
        Weave.getCallbacks(this.tree).addGroupedCallback(this, this.forceUpdate);
    };

    SessionEditor.prototype.componentWillUnmount = function componentWillUnmount() {
        Weave.getCallbacks(this.settings).removeCallback(this, this.forceUpdate);
        this.settings.activeNodeValue.removeCallback(this, this.forceUpdate);

        Weave.getCallbacks(this.tree).removeCallback(this, this.forceUpdate);
    };

    SessionEditor.prototype.nodeClick = function nodeClick(node) {
        if (node.children) {} else {
            this.selectedData = node.data;
            this.settings.activeNodeValue.state = node.data.value;
        }
    };

    SessionEditor.prototype.changeSessionValue = function changeSessionValue(e) {
        this.selectedData.state = e.target.value;
        this.settings.activeNodeValue.state = e.target.value;
        this.forceUpdate();
    };

    SessionEditor.prototype.render = function render() {

        var treeUI = "";
        if (this.tree) {
            treeUI = _react2["default"].createElement(_weavereact2["default"].Tree, { data: this.tree, label: "label", nodes: "children", clickCallback: this.nodeClick, settings: this.settings.treeConfig, dataTypesMap: this.settings.dataTypesMap, getDataType: this.settings.getDataType });
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

        return _react2["default"].createElement(
            _weavereact2["default"].Modal,
            { settings: this.settings.modalConfig },
            _react2["default"].createElement(
                "div",
                { style: { display: "inline-block", width: "100%" } },
                _react2["default"].createElement(
                    "div",
                    { style: treeContainerStyle },
                    treeUI
                ),
                _react2["default"].createElement(
                    "span",
                    { style: resultContainerStyle },
                    _react2["default"].createElement("textarea", { style: { width: "100%", height: "100%", border: "none" }, value: this.settings.activeNodeValue.state, onChange: this.changeSessionValue })
                )
            )
        );
    };

    return SessionEditor;
})(_react2["default"].Component);

exports["default"] = SessionEditor;
module.exports = exports["default"];