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
            var ss = this.selectedData.state; //to identify the state of the object so that view wont affect
            if (typeof ss !== 'number' && typeof ss !== 'string' && typeof ss !== 'boolean') {
                value = JSON.parse(value);
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
        key: "textAreaChange",
        value: function textAreaChange(e) {
            this.settings.activeNodeValue.state = e.target.value;
            this.forceUpdate();
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
//# sourceMappingURL=data:application/json;base64,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O3dCQUNBLHVEQUFhLE1BQU0sS0FBSyxJQUFMLEVBQVcsVUFBVSxLQUFLLFFBQUwsRUFBZSxXQUFXLEtBQUssU0FBTCxFQUFsRSxDQURBO3dCQUVJLG9EQUFVLGlCQUFpQixLQUFLLFFBQUwsQ0FBYyxlQUFkLEVBQTNCLENBRko7cUJBREo7aUJBRkg7Z0JBUUc7O3NCQUFLLE9BQU8sZ0JBQVAsRUFBeUIsU0FBUyxLQUFLLGtCQUFMLEVBQXZDOztpQkFSSDtnQkFTRzs7c0JBQUssT0FBTyxnQkFBUCxFQUF5QixTQUFTLEtBQUssUUFBTCxFQUF2QztvQkFBc0Q7OzBCQUFJLFdBQVksc0JBQVosRUFBSjs7cUJBQXREOztpQkFUSDtnQkFVRzs7c0JBQUssT0FBTyxnQkFBUCxFQUFMO29CQUNJLHlDQUFPLFVBQVUsS0FBSyxRQUFMLEVBQWUsTUFBSyxNQUFMLEVBQVksT0FBTyxnQkFBUCxFQUE1QyxDQURKO29CQUVJOzswQkFBSSxXQUFZLG9CQUFaLEVBQUo7O3FCQUZKOztpQkFWSDthQUFULENBM0JPOzs7O1dBbkZMO0VBQXNCLGdCQUFNLFNBQU47O2tCQWtJYiIsImZpbGUiOiJTZXNzaW9uRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHdlYXZlcmVhY3QgZnJvbSBcIndlYXZlcmVhY3RcIjtcbmltcG9ydCBTZXNzaW9uRWRpdG9yQ29uZmlnIGZyb20gXCIuL1Nlc3Npb25FZGl0b3JDb25maWdcIjtcbmltcG9ydCBUcmVlU2VjdGlvbiBmcm9tIFwiLi9UcmVlU2VjdGlvblwiO1xuaW1wb3J0IE5vZGVWaWV3IGZyb20gXCIuL05vZGVWaWV3XCI7XG5cblxuY2xhc3MgU2Vzc2lvbkVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZXR0aW5ncyA9ICB0aGlzLnByb3BzLnNldHRpbmdzP3RoaXMucHJvcHMuc2V0dGluZ3M6bmV3IFNlc3Npb25FZGl0b3JDb25maWcoKTtcblxuICAgIHRoaXMuY2hhbmdlU2Vzc2lvblZhbHVlID0gdGhpcy5jaGFuZ2VTZXNzaW9uVmFsdWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm5vZGVDbGljayA9IHRoaXMubm9kZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zYXZlRmlsZSA9IHRoaXMuc2F2ZUZpbGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRyZWUgPSAgd2VhdmVqcy5XZWF2ZUFQSS5TZXNzaW9uTWFuYWdlci5nZXRTZXNzaW9uU3RhdGVUcmVlKHRoaXMucHJvcHMuc2Vzc2lvblN0YXRlKTtcbiAgICB0aGlzLnRyZWUubGFiZWwgPSBcIldlYXZlXCI7XG4gICAgdGhpcy5ub2RlVmFsdWUgPSBcIlwiO1xuICAgIHRoaXMuc2VsZWN0ZWREYXRhOy8vIHRvLWRvOnRyeSB3aXRoIGxpbmthYmxlV2F0Y2hlciBhbmQgYWRkIGZvcmNlVXBkYXRlIHRvIHRoYXQgd2F0Y2hlclxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICB9XG5cblxuIG5vZGVDbGljayhub2RlKXtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGEgPSBub2RlLmRhdGE7XG4gICAgICAgIHZhciBzZXNzaW9uU3RhdGUgPSBXZWF2ZS5nZXRTdGF0ZShub2RlLmRhdGEpO1xuICAgICAgICB2YXIgc2Vzc2lvblN0YXRlQXNTdHJpbmcgPSBXZWF2ZS5zdHJpbmdpZnkoc2Vzc2lvblN0YXRlLG51bGwsMyk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlTm9kZVZhbHVlLnN0YXRlID0gc2Vzc2lvblN0YXRlQXNTdHJpbmc7XG4gIH1cblxuXG4gIGNoYW5nZVNlc3Npb25WYWx1ZShlKXtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5zZXR0aW5ncy5hY3RpdmVOb2RlVmFsdWUuc3RhdGU7XG4gICAgICAgIHZhciBzcyA9IHRoaXMuc2VsZWN0ZWREYXRhLnN0YXRlIDsvL3RvIGlkZW50aWZ5IHRoZSBzdGF0ZSBvZiB0aGUgb2JqZWN0IHNvIHRoYXQgdmlldyB3b250IGFmZmVjdFxuICAgICAgICBpZigodHlwZW9mKHNzKSAhPT0gJ251bWJlcicgKSAmJiAodHlwZW9mKHNzKSAhPT0gJ3N0cmluZycgKSAmJiAodHlwZW9mKHNzKSAhPT0gJ2Jvb2xlYW4nICkpe1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgIFdlYXZlLnNldFN0YXRlKHRoaXMuc2VsZWN0ZWREYXRhLHZhbHVlKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRhLnN0YXRlID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBzYXZlRmlsZSgpe1xuICAgIHZhciBhcmNoaXZlICA9IHdlYXZlanMuY29yZS5XZWF2ZUFyY2hpdmUuY3JlYXRlQXJjaGl2ZSh3ZWF2ZSlcbiAgICB2YXIgdWludDhBcnJheSA9IGFyY2hpdmUuc2VyaWFsaXplKCk7XG4gICAgdmFyIGFycmF5QnVmZmVyICA9IHVpbnQ4QXJyYXkuYnVmZmVyO1xuICAgIHdpbmRvdy5zYXZlQXMobmV3IEJsb2IoW2FycmF5QnVmZmVyXSksIFwidGVzdC53ZWF2ZVwiKTtcbiAgfVxuXG5cblxuICBvcGVuRmlsZShlKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAvLyBCdWlsZCBQcm9taXNlIExpc3QsIGVhY2ggcHJvbWlzZSByZXNvbHZlZCBieSBGaWxlUmVhZGVyLm9ubG9hZC5cblxuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc29sdmUgYm90aCB0aGUgRmlsZVJlYWRlciByZXN1bHQgYW5kIGl0cyBvcmlnaW5hbCBmaWxlLlxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtldmVudCwgc2VsZWN0ZWRmaWxlXSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIFJlYWQgdGhlIGZpbGUuXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHNlbGVjdGVkZmlsZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHppcHBlZFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAvLyBSdW4gdGhlIGNhbGxiYWNrIGFmdGVyIGFsbCBmaWxlcyBoYXZlIGJlZW4gcmVhZC5cbiAgICAgICAgICAgICAgICB2YXIgZSA9IHppcHBlZFJlc3VsdHNbMF07XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAvLyByZWFkIHRoZSBjb250ZW50IG9mIHRoZSBmaWxlIHdpdGggSlNaaXBcbiAgICAgICAgICAgICAgICAgd2VhdmVqcy5jb3JlLldlYXZlQXJjaGl2ZS5sb2FkRmlsZUNvbnRlbnQod2VhdmUscmVzdWx0KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gIHRleHRBcmVhQ2hhbmdlKGUpe1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuXG5cbiAgICB2YXIgYXBwbHlCdXR0b25TdHlsZSA9IHtcbiAgICAgICAgbWFyZ2luVG9wOlwiNHB4XCIsXG4gICAgICAgIG1hcmdpbkxlZnQ6XCIycHhcIixcbiAgICAgICAgYm9yZGVyU3R5bGU6XCJzb2xpZFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcbiAgICAgICAgYm9yZGVyV2lkdGg6XCIxcHhcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6XCJncmV5XCIsXG4gICAgICAgIGZsb2F0OlwicmlnaHRcIixcbiAgICAgICAgcGFkZGluZzpcIjRweFwiLFxuICAgICAgICBjdXJzb3I6XCJwb2ludGVyXCIsXG4gICAgICAgIGZvbnRTaXplOlwiMTJweFwiLFxuICAgICAgICBwb3NpdGlvbjpcInJlbGF0aXZlXCJcbiAgICB9XG4gICAgdmFyIGlucHV0QnV0dG9uU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgb3BhY2l0eTogXCIwXCIsXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBsZWZ0OlwiMFwiLFxuICAgICAgICB0b3A6XCIycHhcIixcbiAgICAgICAgYm90dG9tOlwiMnB4XCJcbiAgICB9XG5cbiAgICByZXR1cm4gKCA8d2VhdmVyZWFjdC5Nb2RhbCBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy5tb2RhbENvbmZpZ30ga2V5UHJlc3M9XCJ0cnVlXCIgdGl0bGU9XCJTZXNzaW9uIFN0YXRlIEVkaXRvclwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDpcIjkwJVwiLHdpZHRoOlwiMTAwJVwiLGRpc3BsYXk6IFwiZmxleFwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIn19PlxuICAgICAgICAgICAgICAgICAgICA8d2VhdmVyZWFjdC5TcGxpdFBhbmUgc3BsaXQ9XCJ2ZXJ0aWNhbFwiIG1pblNpemU9XCI1MFwiIGRlZmF1bHRTaXplPVwiMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmVlU2VjdGlvbiB0cmVlPXt0aGlzLnRyZWV9IHNldHRpbmdzPXt0aGlzLnNldHRpbmdzfSBub2RlQ2xpY2s9e3RoaXMubm9kZUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZVZpZXcgYWN0aXZlTm9kZVZhbHVlPXt0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3dlYXZlcmVhY3QuU3BsaXRQYW5lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2FwcGx5QnV0dG9uU3R5bGV9IG9uQ2xpY2s9e3RoaXMuY2hhbmdlU2Vzc2lvblZhbHVlfT4gQXBwbHkgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YXBwbHlCdXR0b25TdHlsZX0gb25DbGljaz17dGhpcy5zYXZlRmlsZX0+PCBpIGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtZG93bmxvYWRcIiAgPiA8IC9pID4gRG93bmxvYWQgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YXBwbHlCdXR0b25TdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5vcGVuRmlsZX0gdHlwZT0nZmlsZScgc3R5bGU9e2lucHV0QnV0dG9uU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPCBpIGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtdXBsb2FkXCIgID4gPCAvaSA+IFVwbGFvZFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L3dlYXZlcmVhY3QuTW9kYWw+XG4gICAgICAgICAgICApO1xuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgU2Vzc2lvbkVkaXRvcjtcbiJdfQ==
