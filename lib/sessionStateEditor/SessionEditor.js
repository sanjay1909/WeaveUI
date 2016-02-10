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
//# sourceMappingURL=data:application/json;base64,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QURKO2lCQUZIO2dCQVFHOztzQkFBSyxPQUFPLGdCQUFQLEVBQXlCLFNBQVMsS0FBSyxrQkFBTCxFQUF2Qzs7aUJBUkg7Z0JBU0c7O3NCQUFLLE9BQU8sZ0JBQVAsRUFBeUIsU0FBUyxLQUFLLFFBQUwsRUFBdkM7b0JBQXNEOzswQkFBSSxXQUFZLHNCQUFaLEVBQUo7O3FCQUF0RDs7aUJBVEg7Z0JBVUc7O3NCQUFLLE9BQU8sZ0JBQVAsRUFBTDtvQkFDSSx5Q0FBTyxVQUFVLEtBQUssUUFBTCxFQUFlLE1BQUssTUFBTCxFQUFZLE9BQU8sZ0JBQVAsRUFBNUMsQ0FESjtvQkFFSTs7MEJBQUksV0FBWSxvQkFBWixFQUFKOztxQkFGSjs7aUJBVkg7YUFBVCxDQTNCTzs7OztXQWpGVTtFQUFzQixnQkFBTSxTQUFOOztrQkFBdEIiLCJmaWxlIjoiU2Vzc2lvbkVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB3ZWF2ZXJlYWN0IGZyb20gXCJ3ZWF2ZXJlYWN0XCI7XG5pbXBvcnQgU2Vzc2lvbkVkaXRvckNvbmZpZyBmcm9tIFwiLi9TZXNzaW9uRWRpdG9yQ29uZmlnXCI7XG5pbXBvcnQgVHJlZVNlY3Rpb24gZnJvbSBcIi4vVHJlZVNlY3Rpb25cIjtcbmltcG9ydCBOb2RlVmlldyBmcm9tIFwiLi9Ob2RlVmlld1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlc3Npb25FZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSAgdGhpcy5wcm9wcy5zZXR0aW5ncz90aGlzLnByb3BzLnNldHRpbmdzOm5ldyBTZXNzaW9uRWRpdG9yQ29uZmlnKCk7XG5cbiAgICB0aGlzLmNoYW5nZVNlc3Npb25WYWx1ZSA9IHRoaXMuY2hhbmdlU2Vzc2lvblZhbHVlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ub2RlQ2xpY2sgPSB0aGlzLm5vZGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2F2ZUZpbGUgPSB0aGlzLnNhdmVGaWxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50cmVlID0gIHdlYXZlanMuV2VhdmVBUEkuU2Vzc2lvbk1hbmFnZXIuZ2V0U2Vzc2lvblN0YXRlVHJlZSh0aGlzLnByb3BzLnNlc3Npb25TdGF0ZSk7XG4gICAgdGhpcy50cmVlLmxhYmVsID0gXCJXZWF2ZVwiO1xuICAgIHRoaXMubm9kZVZhbHVlID0gXCJcIjtcbiAgICB0aGlzLnNlbGVjdGVkRGF0YTsvLyB0by1kbzp0cnkgd2l0aCBsaW5rYWJsZVdhdGNoZXIgYW5kIGFkZCBmb3JjZVVwZGF0ZSB0byB0aGF0IHdhdGNoZXJcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgfVxuXG5cbiBub2RlQ2xpY2sobm9kZSl7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRhID0gbm9kZS5kYXRhO1xuICAgICAgICB2YXIgc3RhdGUgPSBXZWF2ZS5nZXRTdGF0ZShub2RlLmRhdGEpO1xuICAgICAgICB2YXIgc3RyO1xuICAgICAgICBpZiAobm9kZS5kYXRhIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKVxuICAgICAgICBcdHN0ciA9IHN0YXRlO1xuICAgICAgICBlbHNlXG4gICAgICAgIFx0c3RyID0gV2VhdmUuc3RyaW5naWZ5KHN0YXRlLCBudWxsLCAnXFx0JywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlTm9kZVZhbHVlLnN0YXRlID0gc3RyO1xuICB9XG5cblxuICBjaGFuZ2VTZXNzaW9uVmFsdWUoZSl7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc2V0dGluZ3MuYWN0aXZlTm9kZVZhbHVlLnN0YXRlO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGEgaW5zdGFuY2VvZiB3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmcpXG4gICAgICAgIFx0dGhpcy5zZWxlY3RlZERhdGEudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICBcdFdlYXZlLnNldFN0YXRlKHRoaXMuc2VsZWN0ZWREYXRhLCBKU09OLnBhcnNlKHZhbHVlKSk7XG5cbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgc2F2ZUZpbGUoKXtcbiAgICB2YXIgYXJjaGl2ZSAgPSB3ZWF2ZWpzLmNvcmUuV2VhdmVBcmNoaXZlLmNyZWF0ZUFyY2hpdmUod2VhdmUpXG4gICAgdmFyIHVpbnQ4QXJyYXkgPSBhcmNoaXZlLnNlcmlhbGl6ZSgpO1xuICAgIHZhciBhcnJheUJ1ZmZlciAgPSB1aW50OEFycmF5LmJ1ZmZlcjtcbiAgICB3aW5kb3cuc2F2ZUFzKG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0pLCBcInRlc3Qud2VhdmVcIik7XG4gIH1cblxuXG5cbiAgb3BlbkZpbGUoZSkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgLy8gQnVpbGQgUHJvbWlzZSBMaXN0LCBlYWNoIHByb21pc2UgcmVzb2x2ZWQgYnkgRmlsZVJlYWRlci5vbmxvYWQuXG5cbiAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXNvbHZlIGJvdGggdGhlIEZpbGVSZWFkZXIgcmVzdWx0IGFuZCBpdHMgb3JpZ2luYWwgZmlsZS5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShbZXZlbnQsIHNlbGVjdGVkZmlsZV0pO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBSZWFkIHRoZSBmaWxlLlxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihzZWxlY3RlZGZpbGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh6aXBwZWRSZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgLy8gUnVuIHRoZSBjYWxsYmFjayBhZnRlciBhbGwgZmlsZXMgaGF2ZSBiZWVuIHJlYWQuXG4gICAgICAgICAgICAgICAgdmFyIGUgPSB6aXBwZWRSZXN1bHRzWzBdO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgLy8gcmVhZCB0aGUgY29udGVudCBvZiB0aGUgZmlsZSB3aXRoIEpTWmlwXG4gICAgICAgICAgICAgICAgIHdlYXZlanMuY29yZS5XZWF2ZUFyY2hpdmUubG9hZEZpbGVDb250ZW50KHdlYXZlLHJlc3VsdCk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuXG5cblxuICAgIHZhciBhcHBseUJ1dHRvblN0eWxlID0ge1xuICAgICAgICBtYXJnaW5Ub3A6XCI0cHhcIixcbiAgICAgICAgbWFyZ2luTGVmdDpcIjJweFwiLFxuICAgICAgICBib3JkZXJTdHlsZTpcInNvbGlkXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxuICAgICAgICBib3JkZXJXaWR0aDpcIjFweFwiLFxuICAgICAgICBib3JkZXJDb2xvcjpcImdyZXlcIixcbiAgICAgICAgZmxvYXQ6XCJyaWdodFwiLFxuICAgICAgICBwYWRkaW5nOlwiNHB4XCIsXG4gICAgICAgIGN1cnNvcjpcInBvaW50ZXJcIixcbiAgICAgICAgZm9udFNpemU6XCIxMnB4XCIsXG4gICAgICAgIHBvc2l0aW9uOlwicmVsYXRpdmVcIlxuICAgIH1cbiAgICB2YXIgaW5wdXRCdXR0b25TdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBvcGFjaXR5OiBcIjBcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgIGxlZnQ6XCIwXCIsXG4gICAgICAgIHRvcDpcIjJweFwiLFxuICAgICAgICBib3R0b206XCIycHhcIlxuICAgIH1cblxuICAgIHJldHVybiAoIDx3ZWF2ZXJlYWN0Lk1vZGFsIHNldHRpbmdzPXt0aGlzLnNldHRpbmdzLm1vZGFsQ29uZmlnfSBrZXlQcmVzcz1cInRydWVcIiB0aXRsZT1cIlNlc3Npb24gU3RhdGUgRWRpdG9yXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OlwiOTAlXCIsd2lkdGg6XCIxMDAlXCIsZGlzcGxheTogXCJmbGV4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIG92ZXJmbG93OiBcImhpZGRlblwifX0+XG4gICAgICAgICAgICAgICAgICAgIDx3ZWF2ZXJlYWN0LlNwbGl0UGFuZSBzcGxpdD1cInZlcnRpY2FsXCIgbWluU2l6ZT1cIjUwXCIgZGVmYXVsdFNpemU9XCIyNTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlU2VjdGlvbiB0cmVlPXt0aGlzLnRyZWV9IHNldHRpbmdzPXt0aGlzLnNldHRpbmdzfSBub2RlQ2xpY2s9e3RoaXMubm9kZUNsaWNrfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZVZpZXcgYWN0aXZlTm9kZVZhbHVlPXt0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3dlYXZlcmVhY3QuU3BsaXRQYW5lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2FwcGx5QnV0dG9uU3R5bGV9IG9uQ2xpY2s9e3RoaXMuY2hhbmdlU2Vzc2lvblZhbHVlfT4gQXBwbHkgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YXBwbHlCdXR0b25TdHlsZX0gb25DbGljaz17dGhpcy5zYXZlRmlsZX0+PCBpIGNsYXNzTmFtZSA9IFwiZmEgZmEtZncgZmEtZG93bmxvYWRcIiAgPiA8IC9pID4gU2F2ZSA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXthcHBseUJ1dHRvblN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLm9wZW5GaWxlfSB0eXBlPSdmaWxlJyBzdHlsZT17aW5wdXRCdXR0b25TdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8IGkgY2xhc3NOYW1lID0gXCJmYSBmYS1mdyBmYS11cGxvYWRcIiAgPiA8IC9pID4gTG9hZFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L3dlYXZlcmVhY3QuTW9kYWw+XG4gICAgICAgICAgICApO1xuICAgIH1cblxufVxuIl19
