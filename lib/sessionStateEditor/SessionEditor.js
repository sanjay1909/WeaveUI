"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _weavereact = require("weavereact");

var _SessionEditorConfig = require("./SessionEditorConfig");

var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

var _TreeSection = require("./TreeSection");

var _TreeSection2 = _interopRequireDefault(_TreeSection);

var _NodeView = require("./NodeView");

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
        _this.tree = weavejs.WeaveAPI.SessionManager.getSessionStateTree(_this.props.weave.root);
        _this.tree.label = _this.props.isDashboard ? "WeaveDashboard" : "Weave";

        _this.changeSessionValue = _this.changeSessionValue.bind(_this);
        _this.nodeClick = _this.nodeClick.bind(_this);
        _this.saveFile = _this.saveFile.bind(_this);
        _this.openFile = _this.openFile.bind(_this);
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
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.settings !== nextProps.settings) {
                this.settings = nextProps.settings;
            }
            if (this.props.weave !== nextProps.weave) {
                this.tree = weavejs.WeaveAPI.SessionManager.getSessionStateTree(nextProps.weave.root);
                this.tree.label = nextProps.isDashboard ? "WeaveDashboard" : "Weave";
                this.selectedData = null;
            }
        }
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
            var archive = weavejs.core.WeaveArchive.createArchive(this.props.weave);
            var uint8Array = archive.serialize();
            var arrayBuffer = uint8Array.buffer;
            if (this.props.isDashboard) window.saveAs(new Blob([arrayBuffer]), "dashboardTest.weavedb");else window.saveAs(new Blob([arrayBuffer]), "test.weave");
        }
    }, {
        key: "openFile",
        value: function openFile(e) {
            var selectedfile = e.target.files[0];
            // this indicated new weave is getting loaded
            // important to set
            this.tree = null;
            this.settings.activeNodeValue.state = "";
            this.forceUpdate();
            var that = this;
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

                weavejs.core.WeaveArchive.loadFileContent(that.props.weave, result);
                that.tree = weavejs.WeaveAPI.SessionManager.getSessionStateTree(that.props.weave.root);
                that.tree.label = that.props.isDashboard ? "WeaveDashboard" : "Weave";
                that.selectedData = null; // to-do:try with linkableWatcher and add forceUpdate to that watcher
                that.forceUpdate();
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
                _weavereact.Modal,
                { settings: this.settings.modalConfig, keyPress: "true", title: this.props.title },
                _react2.default.createElement(
                    "div",
                    { style: { height: "90%", width: "100%", display: "flex", position: "relative", overflow: "hidden" } },
                    _react2.default.createElement(
                        _weavereact.SplitPane,
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
//# sourceMappingURL=data:application/json;base64,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QUFVLGlCQUFpQixLQUFLLFFBQUwsQ0FBYyxlQUFkLEVBQTNCLENBRko7cUJBREo7aUJBRkg7Z0JBUUc7O3NCQUFLLE9BQU8sZ0JBQVAsRUFBeUIsU0FBUyxLQUFLLGtCQUFMLEVBQXZDOztpQkFSSDtnQkFTRzs7c0JBQUssT0FBTyxnQkFBUCxFQUF5QixTQUFTLEtBQUssUUFBTCxFQUF2QztvQkFBc0Q7OzBCQUFJLFdBQVksc0JBQVosRUFBSjs7cUJBQXREOztpQkFUSDtnQkFVRzs7c0JBQUssT0FBTyxnQkFBUCxFQUFMO29CQUNJLHlDQUFPLFVBQVUsS0FBSyxRQUFMLEVBQWUsTUFBSyxNQUFMLEVBQVksT0FBTyxnQkFBUCxFQUE1QyxDQURKO29CQUVJOzswQkFBSSxXQUFZLG9CQUFaLEVBQUo7O3FCQUZKOztpQkFWSDthQUFULENBNUJPOzs7O1dBekdVO0VBQXNCLGdCQUFNLFNBQU47O2tCQUF0QiIsImZpbGUiOiJTZXNzaW9uRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtNb2RhbH0gZnJvbSBcIndlYXZlcmVhY3RcIjtcbmltcG9ydCB7U3BsaXRQYW5lfSBmcm9tIFwid2VhdmVyZWFjdFwiO1xuaW1wb3J0IFNlc3Npb25FZGl0b3JDb25maWcgZnJvbSBcIi4vU2Vzc2lvbkVkaXRvckNvbmZpZ1wiO1xuaW1wb3J0IFRyZWVTZWN0aW9uIGZyb20gXCIuL1RyZWVTZWN0aW9uXCI7XG5pbXBvcnQgTm9kZVZpZXcgZnJvbSBcIi4vTm9kZVZpZXdcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9ICB0aGlzLnByb3BzLnNldHRpbmdzP3RoaXMucHJvcHMuc2V0dGluZ3M6bmV3IFNlc3Npb25FZGl0b3JDb25maWcoKTtcbiAgICAgICAgdGhpcy50cmVlID0gIHdlYXZlanMuV2VhdmVBUEkuU2Vzc2lvbk1hbmFnZXIuZ2V0U2Vzc2lvblN0YXRlVHJlZSh0aGlzLnByb3BzLndlYXZlLnJvb3QpO1xuICAgICAgICB0aGlzLnRyZWUubGFiZWwgPSB0aGlzLnByb3BzLmlzRGFzaGJvYXJkP1wiV2VhdmVEYXNoYm9hcmRcIjpcIldlYXZlXCI7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTZXNzaW9uVmFsdWUgPSB0aGlzLmNoYW5nZVNlc3Npb25WYWx1ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGVDbGljayA9IHRoaXMubm9kZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2F2ZUZpbGUgPSB0aGlzLnNhdmVGaWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3BlbkZpbGUgPSB0aGlzLm9wZW5GaWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRhOy8vIHRvLWRvOnRyeSB3aXRoIGxpbmthYmxlV2F0Y2hlciBhbmQgYWRkIGZvcmNlVXBkYXRlIHRvIHRoYXQgd2F0Y2hlclxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG5cbiAgICB9XG5cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnNldHRpbmdzICE9PSBuZXh0UHJvcHMuc2V0dGluZ3Mpe1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IG5leHRQcm9wcy5zZXR0aW5ncztcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLndlYXZlICE9PSBuZXh0UHJvcHMud2VhdmUpe1xuICAgICAgICAgICAgdGhpcy50cmVlID0gIHdlYXZlanMuV2VhdmVBUEkuU2Vzc2lvbk1hbmFnZXIuZ2V0U2Vzc2lvblN0YXRlVHJlZShuZXh0UHJvcHMud2VhdmUucm9vdCk7XG4gICAgICAgICAgICB0aGlzLnRyZWUubGFiZWwgPSBuZXh0UHJvcHMuaXNEYXNoYm9hcmQ/XCJXZWF2ZURhc2hib2FyZFwiOlwiV2VhdmVcIjtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRhID0gbnVsbCA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub2RlQ2xpY2sobm9kZSl7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRhID0gbm9kZS5kYXRhO1xuICAgICAgICB2YXIgc3RhdGUgPSBXZWF2ZS5nZXRTdGF0ZShub2RlLmRhdGEpO1xuICAgICAgICB2YXIgc3RyO1xuICAgICAgICBpZiAobm9kZS5kYXRhIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKVxuICAgICAgICBcdHN0ciA9IHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgIFx0c3RyID0gV2VhdmUuc3RyaW5naWZ5KHN0YXRlLCBudWxsLCAnXFx0JywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlTm9kZVZhbHVlLnN0YXRlID0gc3RyO1xuICB9XG5cblxuICBjaGFuZ2VTZXNzaW9uVmFsdWUoZSl7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc2V0dGluZ3MuYWN0aXZlTm9kZVZhbHVlLnN0YXRlO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGEgaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcpXG4gICAgICAgIFx0dGhpcy5zZWxlY3RlZERhdGEudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICBcdFdlYXZlLnNldFN0YXRlKHRoaXMuc2VsZWN0ZWREYXRhLCBKU09OLnBhcnNlKHZhbHVlKSk7XG5cbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgc2F2ZUZpbGUoKXtcbiAgICB2YXIgYXJjaGl2ZSAgPSB3ZWF2ZWpzLmNvcmUuV2VhdmVBcmNoaXZlLmNyZWF0ZUFyY2hpdmUodGhpcy5wcm9wcy53ZWF2ZSlcbiAgICB2YXIgdWludDhBcnJheSA9IGFyY2hpdmUuc2VyaWFsaXplKCk7XG4gICAgdmFyIGFycmF5QnVmZmVyICA9IHVpbnQ4QXJyYXkuYnVmZmVyO1xuICAgIGlmKHRoaXMucHJvcHMuaXNEYXNoYm9hcmQpXG4gICAgICAgIHdpbmRvdy5zYXZlQXMobmV3IEJsb2IoW2FycmF5QnVmZmVyXSksIFwiZGFzaGJvYXJkVGVzdC53ZWF2ZWRiXCIpO1xuICAgIGVsc2VcbiAgICAgICAgd2luZG93LnNhdmVBcyhuZXcgQmxvYihbYXJyYXlCdWZmZXJdKSwgXCJ0ZXN0LndlYXZlXCIpO1xuICB9XG5cblxuXG4gIG9wZW5GaWxlKGUpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIC8vIHRoaXMgaW5kaWNhdGVkIG5ldyB3ZWF2ZSBpcyBnZXR0aW5nIGxvYWRlZFxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gc2V0XG4gICAgICAgIHRoaXMudHJlZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlTm9kZVZhbHVlLnN0YXRlID0gXCJcIjtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBib3RoIHRoZSBGaWxlUmVhZGVyIHJlc3VsdCBhbmQgaXRzIG9yaWdpbmFsIGZpbGUuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoW2V2ZW50LCBzZWxlY3RlZGZpbGVdKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gUmVhZCB0aGUgZmlsZS5cbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoc2VsZWN0ZWRmaWxlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoemlwcGVkUmVzdWx0cykge1xuICAgICAgICAgICAgICAgIC8vIFJ1biB0aGUgY2FsbGJhY2sgYWZ0ZXIgYWxsIGZpbGVzIGhhdmUgYmVlbiByZWFkLlxuICAgICAgICAgICAgICAgIHZhciBlID0gemlwcGVkUmVzdWx0c1swXTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIC8vIHJlYWQgdGhlIGNvbnRlbnQgb2YgdGhlIGZpbGUgd2l0aCBKU1ppcFxuXG4gICAgICAgICAgICAgICAgd2VhdmVqcy5jb3JlLldlYXZlQXJjaGl2ZS5sb2FkRmlsZUNvbnRlbnQodGhhdC5wcm9wcy53ZWF2ZSxyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRoYXQudHJlZSA9ICB3ZWF2ZWpzLldlYXZlQVBJLlNlc3Npb25NYW5hZ2VyLmdldFNlc3Npb25TdGF0ZVRyZWUodGhhdC5wcm9wcy53ZWF2ZS5yb290KTtcbiAgICAgICAgICAgICAgICB0aGF0LnRyZWUubGFiZWwgPSB0aGF0LnByb3BzLmlzRGFzaGJvYXJkP1wiV2VhdmVEYXNoYm9hcmRcIjpcIldlYXZlXCI7XG4gICAgICAgICAgICAgICAgdGhhdC5zZWxlY3RlZERhdGEgPSBudWxsIDsvLyB0by1kbzp0cnkgd2l0aCBsaW5rYWJsZVdhdGNoZXIgYW5kIGFkZCBmb3JjZVVwZGF0ZSB0byB0aGF0IHdhdGNoZXJcbiAgICAgICAgICAgICAgICB0aGF0LmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gIHJlbmRlcigpIHtcblxuXG5cbiAgICB2YXIgYXBwbHlCdXR0b25TdHlsZSA9IHtcbiAgICAgICAgbWFyZ2luVG9wOlwiNHB4XCIsXG4gICAgICAgIG1hcmdpbkxlZnQ6XCIycHhcIixcbiAgICAgICAgYm9yZGVyU3R5bGU6XCJzb2xpZFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcbiAgICAgICAgYm9yZGVyV2lkdGg6XCIxcHhcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6XCJncmV5XCIsXG4gICAgICAgIGZsb2F0OlwicmlnaHRcIixcbiAgICAgICAgcGFkZGluZzpcIjRweFwiLFxuICAgICAgICBjdXJzb3I6XCJwb2ludGVyXCIsXG4gICAgICAgIGZvbnRTaXplOlwiMTJweFwiLFxuICAgICAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCJcbiAgICB9XG4gICAgdmFyIGlucHV0QnV0dG9uU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgb3BhY2l0eTogXCIwXCIsXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBsZWZ0OlwiMFwiLFxuICAgICAgICB0b3A6XCIycHhcIixcbiAgICAgICAgYm90dG9tOlwiMnB4XCJcbiAgICB9XG5cblxuICAgIHJldHVybiAoIDxNb2RhbCBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5tb2RhbENvbmZpZ30ga2V5UHJlc3M9XCJ0cnVlXCIgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDpcIjkwJVwiLHdpZHRoOlwiMTAwJVwiLGRpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIn19PlxuICAgICAgICAgICAgICAgICAgICA8U3BsaXRQYW5lIHNwbGl0PVwidmVydGljYWxcIiBtaW5TaXplPVwiNTBcIiBkZWZhdWx0U2l6ZT1cIjI1NlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWVTZWN0aW9uIHRyZWU9e3RoaXMudHJlZX0gc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3N9ICBub2RlQ2xpY2s9e3RoaXMubm9kZUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZVZpZXcgYWN0aXZlTm9kZVZhbHVlPXt0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L1NwbGl0UGFuZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXthcHBseUJ1dHRvblN0eWxlfSBvbkNsaWNrPXt0aGlzLmNoYW5nZVNlc3Npb25WYWx1ZX0+IEFwcGx5IDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2FwcGx5QnV0dG9uU3R5bGV9IG9uQ2xpY2s9e3RoaXMuc2F2ZUZpbGV9PjwgaSBjbGFzc05hbWUgPSBcImZhIGZhLWZ3IGZhLWRvd25sb2FkXCIgID4gPCAvaSA+IFNhdmUgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YXBwbHlCdXR0b25TdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5vcGVuRmlsZX0gdHlwZT0nZmlsZScgc3R5bGU9e2lucHV0QnV0dG9uU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPCBpIGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtdXBsb2FkXCIgID4gPCAvaSA+IExvYWRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG59XG4iXX0=
