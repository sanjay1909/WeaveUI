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
        value: function componentWillReceiveProps(nextProps) {}
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
                { settings: this.settings.modalConfig, keyPress: "true", title: "Session State Editor" },
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
//# sourceMappingURL=data:application/json;base64,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QUFNLFNBQU47O2tCQUF0QiIsImZpbGUiOiJTZXNzaW9uRWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtNb2RhbH0gZnJvbSBcIndlYXZlcmVhY3RcIjtcbmltcG9ydCB7U3BsaXRQYW5lfSBmcm9tIFwid2VhdmVyZWFjdFwiO1xuaW1wb3J0IFNlc3Npb25FZGl0b3JDb25maWcgZnJvbSBcIi4vU2Vzc2lvbkVkaXRvckNvbmZpZ1wiO1xuaW1wb3J0IFRyZWVTZWN0aW9uIGZyb20gXCIuL1RyZWVTZWN0aW9uXCI7XG5pbXBvcnQgTm9kZVZpZXcgZnJvbSBcIi4vTm9kZVZpZXdcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9ICB0aGlzLnByb3BzLnNldHRpbmdzP3RoaXMucHJvcHMuc2V0dGluZ3M6bmV3IFNlc3Npb25FZGl0b3JDb25maWcoKTtcbiAgICAgICAgdGhpcy50cmVlID0gIHdlYXZlanMuV2VhdmVBUEkuU2Vzc2lvbk1hbmFnZXIuZ2V0U2Vzc2lvblN0YXRlVHJlZSh0aGlzLnByb3BzLndlYXZlLnJvb3QpO1xuICAgICAgICB0aGlzLnRyZWUubGFiZWwgPSB0aGlzLnByb3BzLmlzRGFzaGJvYXJkP1wiV2VhdmVEYXNoYm9hcmRcIjpcIldlYXZlXCI7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VTZXNzaW9uVmFsdWUgPSB0aGlzLmNoYW5nZVNlc3Npb25WYWx1ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGVDbGljayA9IHRoaXMubm9kZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2F2ZUZpbGUgPSB0aGlzLnNhdmVGaWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3BlbkZpbGUgPSB0aGlzLm9wZW5GaWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRhOy8vIHRvLWRvOnRyeSB3aXRoIGxpbmthYmxlV2F0Y2hlciBhbmQgYWRkIGZvcmNlVXBkYXRlIHRvIHRoYXQgd2F0Y2hlclxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG5cbiAgICB9XG5cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xuXG4gICAgfVxuXG4gICAgbm9kZUNsaWNrKG5vZGUpe1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgICAgdmFyIHN0YXRlID0gV2VhdmUuZ2V0U3RhdGUobm9kZS5kYXRhKTtcbiAgICAgICAgdmFyIHN0cjtcbiAgICAgICAgaWYgKG5vZGUuZGF0YSBpbnN0YW5jZW9mIHdlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZylcbiAgICAgICAgXHRzdHIgPSBzdGF0ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICBcdHN0ciA9IFdlYXZlLnN0cmluZ2lmeShzdGF0ZSwgbnVsbCwgJ1xcdCcsIHRydWUpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IHN0cjtcbiAgfVxuXG5cbiAgY2hhbmdlU2Vzc2lvblZhbHVlKGUpe1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRhIGluc3RhbmNlb2Ygd2VhdmVqcy5jb3JlLkxpbmthYmxlU3RyaW5nKVxuICAgICAgICBcdHRoaXMuc2VsZWN0ZWREYXRhLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgXHRXZWF2ZS5zZXRTdGF0ZSh0aGlzLnNlbGVjdGVkRGF0YSwgSlNPTi5wYXJzZSh2YWx1ZSkpO1xuXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHNhdmVGaWxlKCl7XG4gICAgdmFyIGFyY2hpdmUgID0gd2VhdmVqcy5jb3JlLldlYXZlQXJjaGl2ZS5jcmVhdGVBcmNoaXZlKHRoaXMucHJvcHMud2VhdmUpXG4gICAgdmFyIHVpbnQ4QXJyYXkgPSBhcmNoaXZlLnNlcmlhbGl6ZSgpO1xuICAgIHZhciBhcnJheUJ1ZmZlciAgPSB1aW50OEFycmF5LmJ1ZmZlcjtcbiAgICBpZih0aGlzLnByb3BzLmlzRGFzaGJvYXJkKVxuICAgICAgICB3aW5kb3cuc2F2ZUFzKG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0pLCBcImRhc2hib2FyZFRlc3Qud2VhdmVkYlwiKTtcbiAgICBlbHNlXG4gICAgICAgIHdpbmRvdy5zYXZlQXMobmV3IEJsb2IoW2FycmF5QnVmZmVyXSksIFwidGVzdC53ZWF2ZVwiKTtcbiAgfVxuXG5cblxuICBvcGVuRmlsZShlKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAvLyB0aGlzIGluZGljYXRlZCBuZXcgd2VhdmUgaXMgZ2V0dGluZyBsb2FkZWRcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIHNldFxuICAgICAgICB0aGlzLnRyZWUgPSBudWxsO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc29sdmUgYm90aCB0aGUgRmlsZVJlYWRlciByZXN1bHQgYW5kIGl0cyBvcmlnaW5hbCBmaWxlLlxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtldmVudCwgc2VsZWN0ZWRmaWxlXSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIFJlYWQgdGhlIGZpbGUuXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHNlbGVjdGVkZmlsZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHppcHBlZFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAvLyBSdW4gdGhlIGNhbGxiYWNrIGFmdGVyIGFsbCBmaWxlcyBoYXZlIGJlZW4gcmVhZC5cbiAgICAgICAgICAgICAgICB2YXIgZSA9IHppcHBlZFJlc3VsdHNbMF07XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAvLyByZWFkIHRoZSBjb250ZW50IG9mIHRoZSBmaWxlIHdpdGggSlNaaXBcblxuICAgICAgICAgICAgICAgIHdlYXZlanMuY29yZS5XZWF2ZUFyY2hpdmUubG9hZEZpbGVDb250ZW50KHRoYXQucHJvcHMud2VhdmUscmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aGF0LnRyZWUgPSAgd2VhdmVqcy5XZWF2ZUFQSS5TZXNzaW9uTWFuYWdlci5nZXRTZXNzaW9uU3RhdGVUcmVlKHRoYXQucHJvcHMud2VhdmUucm9vdCk7XG4gICAgICAgICAgICAgICAgdGhhdC50cmVlLmxhYmVsID0gdGhhdC5wcm9wcy5pc0Rhc2hib2FyZD9cIldlYXZlRGFzaGJvYXJkXCI6XCJXZWF2ZVwiO1xuICAgICAgICAgICAgICAgIHRoYXQuc2VsZWN0ZWREYXRhID0gbnVsbCA7Ly8gdG8tZG86dHJ5IHdpdGggbGlua2FibGVXYXRjaGVyIGFuZCBhZGQgZm9yY2VVcGRhdGUgdG8gdGhhdCB3YXRjaGVyXG4gICAgICAgICAgICAgICAgdGhhdC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuICByZW5kZXIoKSB7XG5cblxuXG4gICAgdmFyIGFwcGx5QnV0dG9uU3R5bGUgPSB7XG4gICAgICAgIG1hcmdpblRvcDpcIjRweFwiLFxuICAgICAgICBtYXJnaW5MZWZ0OlwiMnB4XCIsXG4gICAgICAgIGJvcmRlclN0eWxlOlwic29saWRcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOlwiNHB4XCIsXG4gICAgICAgIGJvcmRlcldpZHRoOlwiMXB4XCIsXG4gICAgICAgIGJvcmRlckNvbG9yOlwiZ3JleVwiLFxuICAgICAgICBmbG9hdDpcInJpZ2h0XCIsXG4gICAgICAgIHBhZGRpbmc6XCI0cHhcIixcbiAgICAgICAgY3Vyc29yOlwicG9pbnRlclwiLFxuICAgICAgICBmb250U2l6ZTpcIjEycHhcIixcbiAgICAgICAgcG9zaXRpb246XCJyZWxhdGl2ZVwiXG4gICAgfVxuICAgIHZhciBpbnB1dEJ1dHRvblN0eWxlID0ge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIG9wYWNpdHk6IFwiMFwiLFxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgbGVmdDpcIjBcIixcbiAgICAgICAgdG9wOlwiMnB4XCIsXG4gICAgICAgIGJvdHRvbTpcIjJweFwiXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKCA8TW9kYWwgc2V0dGluZ3M9e3RoaXMuc2V0dGluZ3MubW9kYWxDb25maWd9IGtleVByZXNzPVwidHJ1ZVwiIHRpdGxlPVwiU2Vzc2lvbiBTdGF0ZSBFZGl0b3JcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6XCI5MCVcIix3aWR0aDpcIjEwMCVcIixkaXNwbGF5OiBcImZsZXhcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPFNwbGl0UGFuZSBzcGxpdD1cInZlcnRpY2FsXCIgbWluU2l6ZT1cIjUwXCIgZGVmYXVsdFNpemU9XCIyNTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlU2VjdGlvbiB0cmVlPXt0aGlzLnRyZWV9IHNldHRpbmdzPXt0aGlzLnNldHRpbmdzfSAgbm9kZUNsaWNrPXt0aGlzLm5vZGVDbGlja30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5vZGVWaWV3IGFjdGl2ZU5vZGVWYWx1ZT17dGhpcy5zZXR0aW5ncy5hY3RpdmVOb2RlVmFsdWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9TcGxpdFBhbmU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YXBwbHlCdXR0b25TdHlsZX0gb25DbGljaz17dGhpcy5jaGFuZ2VTZXNzaW9uVmFsdWV9PiBBcHBseSA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXthcHBseUJ1dHRvblN0eWxlfSBvbkNsaWNrPXt0aGlzLnNhdmVGaWxlfT48IGkgY2xhc3NOYW1lID0gXCJmYSBmYS1mdyBmYS1kb3dubG9hZFwiICA+IDwgL2kgPiBTYXZlIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2FwcGx5QnV0dG9uU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMub3BlbkZpbGV9IHR5cGU9J2ZpbGUnIHN0eWxlPXtpbnB1dEJ1dHRvblN0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwgaSBjbGFzc05hbWUgPSBcImZhIGZhLWZ3IGZhLXVwbG9hZFwiICA+IDwgL2kgPiBMb2FkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICApO1xuICAgIH1cblxufVxuIl19
