"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _weavereact = require("weavereact");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeSection = function (_React$Component) {
    _inherits(TreeSection, _React$Component);

    function TreeSection(props) {
        _classCallCheck(this, TreeSection);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TreeSection).call(this, props));
    }

    _createClass(TreeSection, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            Weave.getCallbacks(this.props.tree).addGroupedCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            Weave.getCallbacks(this.props.tree).removeCallback(this, this.forceUpdate);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.tree !== nextProps.tree) {
                // tree value will swithc between null and sessionstate tree, when new file is loaded
                if (this.props.tree) Weave.getCallbacks(this.props.tree).removeCallback(this, this.forceUpdate);
                if (nextProps.tree) {
                    Weave.getCallbacks(nextProps.tree).addGroupedCallback(this, this.forceUpdate);
                } else {
                    this.props.settings.treeConfig.rootNode.reset();
                }
            }
        }
    }, {
        key: "render",
        value: function render() {

            var treeUI = "";
            if (this.props.tree) {
                treeUI = _react2.default.createElement(_weavereact.Tree, { data: this.props.tree, label: "label", nodes: "children", clickCallback: this.props.nodeClick, settings: this.props.settings.treeConfig, dataTypesMap: this.props.settings.dataTypesMap, getDataType: this.props.settings.getDataType });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyZWVTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLTTs7O0FBRUosYUFGSSxXQUVKLENBQVksS0FBWixFQUFtQjs4QkFGZixhQUVlOztzRUFGZix3QkFHSSxRQURXO0tBQW5COztpQkFGSTs7NENBT2U7QUFDakIsa0JBQU0sWUFBTixDQUFtQixLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQW5CLENBQW9DLGtCQUFwQyxDQUF1RCxJQUF2RCxFQUE2RCxLQUFLLFdBQUwsQ0FBN0QsQ0FEaUI7Ozs7K0NBSUs7QUFDdEIsa0JBQU0sWUFBTixDQUFtQixLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQW5CLENBQW9DLGNBQXBDLENBQW1ELElBQW5ELEVBQXlELEtBQUssV0FBTCxDQUF6RCxDQURzQjs7OztrREFJSSxXQUFVO0FBQ2hDLGdCQUFHLEtBQUssS0FBTCxDQUFXLElBQVgsS0FBb0IsVUFBVSxJQUFWLEVBQWU7O0FBQ2pDLG9CQUFHLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBZ0IsTUFBTSxZQUFOLENBQW1CLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBbkIsQ0FBb0MsY0FBcEMsQ0FBbUQsSUFBbkQsRUFBeUQsS0FBSyxXQUFMLENBQXpELENBQW5CO0FBQ0Qsb0JBQUcsVUFBVSxJQUFWLEVBQWU7QUFDZCwwQkFBTSxZQUFOLENBQW1CLFVBQVUsSUFBVixDQUFuQixDQUFtQyxrQkFBbkMsQ0FBc0QsSUFBdEQsRUFBNEQsS0FBSyxXQUFMLENBQTVELENBRGM7aUJBQWxCLE1BR0k7QUFDQSx5QkFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixVQUFwQixDQUErQixRQUEvQixDQUF3QyxLQUF4QyxHQURBO2lCQUhKO2FBRko7Ozs7aUNBYUc7O0FBRVAsZ0JBQUksU0FBUyxFQUFULENBRkc7QUFHUCxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWdCO0FBQ2YseUJBQVMsa0RBQU0sTUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLE9BQU0sT0FBTixFQUFjLE9BQU0sVUFBTixFQUFrQixlQUFlLEtBQUssS0FBTCxDQUFXLFNBQVgsRUFBc0IsVUFBVSxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLFVBQXBCLEVBQWdDLGNBQWMsS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixZQUFwQixFQUFrQyxhQUFhLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsV0FBcEIsRUFBek0sQ0FBVCxDQURlO2FBQW5COztBQUlBLGdCQUFJLHFCQUFxQjtBQUNyQix1QkFBTSxNQUFOO0FBQ0Esd0JBQU8sTUFBUDtBQUNBLDZCQUFZLE9BQVo7QUFDQSw4QkFBYSxLQUFiO0FBQ0EsNkJBQVksS0FBWjtBQUNBLDZCQUFZLE1BQVo7QUFDQSwyQkFBVyxRQUFYO0FBQ0EsMkJBQVcsUUFBWDtBQUNBLHlCQUFRLEtBQVI7YUFUQSxDQVBHOztBQW1CUCxtQkFBUzs7a0JBQUssT0FBTyxrQkFBUCxFQUFMO2dCQUNnQixNQURoQjthQUFULENBbkJPOzs7O1dBN0JMO0VBQW9CLGdCQUFNLFNBQU47O2tCQXVEWCIsImZpbGUiOiJUcmVlU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtUcmVlfSBmcm9tIFwid2VhdmVyZWFjdFwiO1xuXG5cbmNsYXNzIFRyZWVTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5wcm9wcy50cmVlKS5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgV2VhdmUuZ2V0Q2FsbGJhY2tzKHRoaXMucHJvcHMudHJlZSkucmVtb3ZlQ2FsbGJhY2sodGhpcywgdGhpcy5mb3JjZVVwZGF0ZSk7XG4gIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgaWYodGhpcy5wcm9wcy50cmVlICE9PSBuZXh0UHJvcHMudHJlZSl7Ly8gdHJlZSB2YWx1ZSB3aWxsIHN3aXRoYyBiZXR3ZWVuIG51bGwgYW5kIHNlc3Npb25zdGF0ZSB0cmVlLCB3aGVuIG5ldyBmaWxlIGlzIGxvYWRlZFxuICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMudHJlZSlXZWF2ZS5nZXRDYWxsYmFja3ModGhpcy5wcm9wcy50cmVlKS5yZW1vdmVDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIGlmKG5leHRQcm9wcy50cmVlKXtcbiAgICAgICAgICAgICAgICBXZWF2ZS5nZXRDYWxsYmFja3MobmV4dFByb3BzLnRyZWUpLmFkZEdyb3VwZWRDYWxsYmFjayh0aGlzLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXR0aW5ncy50cmVlQ29uZmlnLnJvb3ROb2RlLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciB0cmVlVUkgPSBcIlwiO1xuICAgIGlmKHRoaXMucHJvcHMudHJlZSl7XG4gICAgICAgIHRyZWVVSSA9IDxUcmVlIGRhdGE9e3RoaXMucHJvcHMudHJlZX0gbGFiZWw9XCJsYWJlbFwiIG5vZGVzPVwiY2hpbGRyZW5cIiAgY2xpY2tDYWxsYmFjaz17dGhpcy5wcm9wcy5ub2RlQ2xpY2t9IHNldHRpbmdzPXt0aGlzLnByb3BzLnNldHRpbmdzLnRyZWVDb25maWd9IGRhdGFUeXBlc01hcD17dGhpcy5wcm9wcy5zZXR0aW5ncy5kYXRhVHlwZXNNYXB9IGdldERhdGFUeXBlPXt0aGlzLnByb3BzLnNldHRpbmdzLmdldERhdGFUeXBlfS8+XG4gICAgfVxuXG4gICAgdmFyIHRyZWVDb250YWluZXJTdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDpcIjEwMCVcIixcbiAgICAgICAgYm9yZGVyU3R5bGU6XCJzb2xpZFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6XCI0cHhcIixcbiAgICAgICAgYm9yZGVyV2lkdGg6XCIxcHhcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6XCJncmV5XCIsXG4gICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgIG92ZXJmbG93WDogJ3Njcm9sbCcsXG4gICAgICAgIHBhZGRpbmc6XCI0cHhcIlxuICAgIH1cblxuICAgIHJldHVybiAoIDxkaXYgc3R5bGU9e3RyZWVDb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyZWVVSX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBUcmVlU2VjdGlvbjtcbiJdfQ==
