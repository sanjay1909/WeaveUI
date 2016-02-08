"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _weavereact = require("weavereact");

var _weavereact2 = _interopRequireDefault(_weavereact);

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
            var sessionState = Weave.getState(node.data);
            var sessionStateAsString = Weave.stringify(sessionState, null, 3);
            this.settings.activeNodeValue.state = sessionStateAsString;
        }
    }, {
        key: "changeSessionValue",
        value: function changeSessionValue(e) {
            var value = this.settings.activeNodeValue.state;
            // var ss = this.selectedData.state ;//to identify the state of the object so that view wont affect
            value = JSON.parse(value);
            Weave.setState(this.selectedData, value);
            /* if((typeof(ss) !== 'number' ) && (typeof(ss) !== 'string' ) && (typeof(ss) !== 'boolean' )){
                 value = JSON.parse(value);
                 Weave.setState(this.selectedData,value);
             }else{
                this.selectedData.state = value;
             }*/

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
                        { split: "vertical", minSize: "50", defaultSize: "100" },
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
                    " Download "
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
                    " Uplaod"
                )
            );
        }
    }]);

    return SessionEditor;
}(_react2.default.Component);

exports.default = SessionEditor;
//# sourceMappingURL=data:application/json;base64,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aUJBVEg7Z0JBVUc7O3NCQUFLLE9BQU8sZ0JBQVAsRUFBTDtvQkFDSSx5Q0FBTyxVQUFVLEtBQUssUUFBTCxFQUFlLE1BQUssTUFBTCxFQUFZLE9BQU8sZ0JBQVAsRUFBNUMsQ0FESjtvQkFFSTs7MEJBQUksV0FBWSxvQkFBWixFQUFKOztxQkFGSjs7aUJBVkg7YUFBVCxDQTNCTzs7OztXQWxGTDtFQUFzQixnQkFBTSxTQUFOOztrQkFpSWIiLCJmaWxlIjoiU2Vzc2lvbkVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB3ZWF2ZXJlYWN0IGZyb20gXCJ3ZWF2ZXJlYWN0XCI7XG5pbXBvcnQgU2Vzc2lvbkVkaXRvckNvbmZpZyBmcm9tIFwiLi9TZXNzaW9uRWRpdG9yQ29uZmlnXCI7XG5pbXBvcnQgVHJlZVNlY3Rpb24gZnJvbSBcIi4vVHJlZVNlY3Rpb25cIjtcbmltcG9ydCBOb2RlVmlldyBmcm9tIFwiLi9Ob2RlVmlld1wiO1xuXG5cbmNsYXNzIFNlc3Npb25FZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSAgdGhpcy5wcm9wcy5zZXR0aW5ncz90aGlzLnByb3BzLnNldHRpbmdzOm5ldyBTZXNzaW9uRWRpdG9yQ29uZmlnKCk7XG5cbiAgICB0aGlzLmNoYW5nZVNlc3Npb25WYWx1ZSA9IHRoaXMuY2hhbmdlU2Vzc2lvblZhbHVlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ub2RlQ2xpY2sgPSB0aGlzLm5vZGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2F2ZUZpbGUgPSB0aGlzLnNhdmVGaWxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50cmVlID0gIHdlYXZlanMuV2VhdmVBUEkuU2Vzc2lvbk1hbmFnZXIuZ2V0U2Vzc2lvblN0YXRlVHJlZSh0aGlzLnByb3BzLnNlc3Npb25TdGF0ZSk7XG4gICAgdGhpcy50cmVlLmxhYmVsID0gXCJXZWF2ZVwiO1xuICAgIHRoaXMubm9kZVZhbHVlID0gXCJcIjtcbiAgICB0aGlzLnNlbGVjdGVkRGF0YTsvLyB0by1kbzp0cnkgd2l0aCBsaW5rYWJsZVdhdGNoZXIgYW5kIGFkZCBmb3JjZVVwZGF0ZSB0byB0aGF0IHdhdGNoZXJcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgfVxuXG5cbiBub2RlQ2xpY2sobm9kZSl7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRhID0gbm9kZS5kYXRhO1xuICAgICAgICB2YXIgc2Vzc2lvblN0YXRlID0gV2VhdmUuZ2V0U3RhdGUobm9kZS5kYXRhKTtcbiAgICAgICAgdmFyIHNlc3Npb25TdGF0ZUFzU3RyaW5nID0gV2VhdmUuc3RyaW5naWZ5KHNlc3Npb25TdGF0ZSxudWxsLDMpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IHNlc3Npb25TdGF0ZUFzU3RyaW5nO1xuICB9XG5cblxuICBjaGFuZ2VTZXNzaW9uVmFsdWUoZSl7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc2V0dGluZ3MuYWN0aXZlTm9kZVZhbHVlLnN0YXRlO1xuICAgICAgIC8vIHZhciBzcyA9IHRoaXMuc2VsZWN0ZWREYXRhLnN0YXRlIDsvL3RvIGlkZW50aWZ5IHRoZSBzdGF0ZSBvZiB0aGUgb2JqZWN0IHNvIHRoYXQgdmlldyB3b250IGFmZmVjdFxuICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICBXZWF2ZS5zZXRTdGF0ZSh0aGlzLnNlbGVjdGVkRGF0YSx2YWx1ZSk7XG4gICAgICAgLyogaWYoKHR5cGVvZihzcykgIT09ICdudW1iZXInICkgJiYgKHR5cGVvZihzcykgIT09ICdzdHJpbmcnICkgJiYgKHR5cGVvZihzcykgIT09ICdib29sZWFuJyApKXtcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICBXZWF2ZS5zZXRTdGF0ZSh0aGlzLnNlbGVjdGVkRGF0YSx2YWx1ZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0YS5zdGF0ZSA9IHZhbHVlO1xuICAgICAgICB9Ki9cblxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBzYXZlRmlsZSgpe1xuICAgIHZhciBhcmNoaXZlICA9IHdlYXZlanMuY29yZS5XZWF2ZUFyY2hpdmUuY3JlYXRlQXJjaGl2ZSh3ZWF2ZSlcbiAgICB2YXIgdWludDhBcnJheSA9IGFyY2hpdmUuc2VyaWFsaXplKCk7XG4gICAgdmFyIGFycmF5QnVmZmVyICA9IHVpbnQ4QXJyYXkuYnVmZmVyO1xuICAgIHdpbmRvdy5zYXZlQXMobmV3IEJsb2IoW2FycmF5QnVmZmVyXSksIFwidGVzdC53ZWF2ZVwiKTtcbiAgfVxuXG5cblxuICBvcGVuRmlsZShlKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAvLyBCdWlsZCBQcm9taXNlIExpc3QsIGVhY2ggcHJvbWlzZSByZXNvbHZlZCBieSBGaWxlUmVhZGVyLm9ubG9hZC5cblxuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc29sdmUgYm90aCB0aGUgRmlsZVJlYWRlciByZXN1bHQgYW5kIGl0cyBvcmlnaW5hbCBmaWxlLlxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtldmVudCwgc2VsZWN0ZWRmaWxlXSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIFJlYWQgdGhlIGZpbGUuXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHNlbGVjdGVkZmlsZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHppcHBlZFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAvLyBSdW4gdGhlIGNhbGxiYWNrIGFmdGVyIGFsbCBmaWxlcyBoYXZlIGJlZW4gcmVhZC5cbiAgICAgICAgICAgICAgICB2YXIgZSA9IHppcHBlZFJlc3VsdHNbMF07XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAvLyByZWFkIHRoZSBjb250ZW50IG9mIHRoZSBmaWxlIHdpdGggSlNaaXBcbiAgICAgICAgICAgICAgICAgd2VhdmVqcy5jb3JlLldlYXZlQXJjaGl2ZS5sb2FkRmlsZUNvbnRlbnQod2VhdmUscmVzdWx0KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gIFxuXG4gIHJlbmRlcigpIHtcblxuXG5cbiAgICB2YXIgYXBwbHlCdXR0b25TdHlsZSA9IHtcbiAgICAgICAgbWFyZ2luVG9wOlwiNHB4XCIsXG4gICAgICAgIG1hcmdpbkxlZnQ6XCIycHhcIixcbiAgICAgICAgYm9yZGVyU3R5bGU6XCJzb2xpZFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcbiAgICAgICAgYm9yZGVyV2lkdGg6XCIxcHhcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6XCJncmV5XCIsXG4gICAgICAgIGZsb2F0OlwicmlnaHRcIixcbiAgICAgICAgcGFkZGluZzpcIjRweFwiLFxuICAgICAgICBjdXJzb3I6XCJwb2ludGVyXCIsXG4gICAgICAgIGZvbnRTaXplOlwiMTJweFwiLFxuICAgICAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCJcbiAgICB9XG4gICAgdmFyIGlucHV0QnV0dG9uU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgb3BhY2l0eTogXCIwXCIsXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBsZWZ0OlwiMFwiLFxuICAgICAgICB0b3A6XCIycHhcIixcbiAgICAgICAgYm90dG9tOlwiMnB4XCJcbiAgICB9XG5cbiAgICByZXR1cm4gKCA8d2VhdmVyZWFjdC5Nb2RhbCBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5tb2RhbENvbmZpZ30ga2V5UHJlc3M9XCJ0cnVlXCIgdGl0bGU9XCJTZXNzaW9uIFN0YXRlIEVkaXRvclwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDpcIjkwJVwiLHdpZHRoOlwiMTAwJVwiLGRpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIn19PlxuICAgICAgICAgICAgICAgICAgICA8d2VhdmVyZWFjdC5TcGxpdFBhbmUgc3BsaXQ9XCJ2ZXJ0aWNhbFwiIG1pblNpemU9XCI1MFwiIGRlZmF1bHRTaXplPVwiMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJlZVNlY3Rpb24gdHJlZT17dGhpcy50cmVlfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5nc30gbm9kZUNsaWNrPXt0aGlzLm5vZGVDbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVWaWV3IGFjdGl2ZU5vZGVWYWx1ZT17dGhpcy5zZXR0aW5ncy5hY3RpdmVOb2RlVmFsdWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC93ZWF2ZXJlYWN0LlNwbGl0UGFuZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXthcHBseUJ1dHRvblN0eWxlfSBvbkNsaWNrPXt0aGlzLmNoYW5nZVNlc3Npb25WYWx1ZX0+IEFwcGx5IDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2FwcGx5QnV0dG9uU3R5bGV9IG9uQ2xpY2s9e3RoaXMuc2F2ZUZpbGV9PjwgaSBjbGFzc05hbWUgPSBcImZhIGZhLWZ3IGZhLWRvd25sb2FkXCIgID4gPCAvaSA+IERvd25sb2FkIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2FwcGx5QnV0dG9uU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMub3BlbkZpbGV9IHR5cGU9J2ZpbGUnIHN0eWxlPXtpbnB1dEJ1dHRvblN0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwgaSBjbGFzc05hbWUgPSBcImZhIGZhLWZ3IGZhLXVwbG9hZFwiICA+IDwgL2kgPiBVcGxhb2RcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC93ZWF2ZXJlYWN0Lk1vZGFsPlxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFNlc3Npb25FZGl0b3I7XG4iXX0=
