"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _weavereact = require("weavereact");

var _weavereact2 = _interopRequireDefault(_weavereact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeSection = function (_React$Component) {
  _inherits(TreeSection, _React$Component);

  function TreeSection(props) {
    _classCallCheck(this, TreeSection);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TreeSection).call(this, props));

    _this.settings = _this.props.settings;

    return _this;
  }

  _createClass(TreeSection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      weavejs.WeaveAPI.SessionManager.addTreeCallback(this, this.forceUpdate);
      this.settings.activeNodeValue.addImmediateCallback(this, this.forceUpdate);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      weavejs.WeaveAPI.SessionManager.removeTreeCallback(this, this.forceUpdate);
      this.settings.activeNodeValue.removeCallback(this, this.forceUpdate);
    }
  }, {
    key: "render",
    value: function render() {

      var treeUI = "";
      if (this.props.tree) {
        treeUI = _react2.default.createElement(_weavereact2.default.Tree, { data: this.props.tree, label: "label", nodes: "children", clickCallback: this.props.nodeClick, settings: this.settings.treeConfig, dataTypesMap: this.settings.dataTypesMap, getDataType: this.settings.getDataType });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyZWVTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtNOzs7QUFFSixXQUZJLFdBRUosQ0FBWSxLQUFaLEVBQW1COzBCQUZmLGFBRWU7O3VFQUZmLHdCQUdJLFFBRFc7O0FBRWpCLFVBQUssUUFBTCxHQUFnQixNQUFLLEtBQUwsQ0FBVyxRQUFYLENBRkM7OztHQUFuQjs7ZUFGSTs7d0NBUWU7QUFDakIsY0FBUSxRQUFSLENBQWlCLGNBQWpCLENBQWdDLGVBQWhDLENBQWdELElBQWhELEVBQXNELEtBQUssV0FBTCxDQUF0RCxDQURpQjtBQUVqQixXQUFLLFFBQUwsQ0FBYyxlQUFkLENBQThCLG9CQUE5QixDQUFtRCxJQUFuRCxFQUF5RCxLQUFLLFdBQUwsQ0FBekQsQ0FGaUI7Ozs7MkNBS0s7QUFDdEIsY0FBUSxRQUFSLENBQWlCLGNBQWpCLENBQWdDLGtCQUFoQyxDQUFtRCxJQUFuRCxFQUF5RCxLQUFLLFdBQUwsQ0FBekQsQ0FEc0I7QUFFdEIsV0FBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixjQUE5QixDQUE2QyxJQUE3QyxFQUFtRCxLQUFLLFdBQUwsQ0FBbkQsQ0FGc0I7Ozs7NkJBUWY7O0FBRVAsVUFBSSxTQUFTLEVBQVQsQ0FGRztBQUdQLFVBQUcsS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFnQjtBQUNmLGlCQUFTLG1EQUFZLElBQVosSUFBaUIsTUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLE9BQU0sT0FBTixFQUFjLE9BQU0sVUFBTixFQUFrQixlQUFlLEtBQUssS0FBTCxDQUFXLFNBQVgsRUFBc0IsVUFBVSxLQUFLLFFBQUwsQ0FBYyxVQUFkLEVBQTBCLGNBQWMsS0FBSyxRQUFMLENBQWMsWUFBZCxFQUE0QixhQUFhLEtBQUssUUFBTCxDQUFjLFdBQWQsRUFBeE0sQ0FBVCxDQURlO09BQW5COztBQUlBLFVBQUkscUJBQXFCO0FBQ3JCLGVBQU0sTUFBTjtBQUNBLGdCQUFPLE1BQVA7QUFDQSxxQkFBWSxPQUFaO0FBQ0Esc0JBQWEsS0FBYjtBQUNBLHFCQUFZLEtBQVo7QUFDQSxxQkFBWSxNQUFaO0FBQ0EsbUJBQVcsUUFBWDtBQUNBLG1CQUFXLFFBQVg7QUFDQSxpQkFBUSxLQUFSO09BVEEsQ0FQRzs7QUFvQlAsYUFBUzs7VUFBSyxPQUFPLGtCQUFQLEVBQUw7UUFDZ0IsTUFEaEI7T0FBVCxDQXBCTzs7OztTQXJCTDtFQUFvQixnQkFBTSxTQUFOOztrQkFnRFgiLCJmaWxlIjoiVHJlZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB3ZWF2ZXJlYWN0IGZyb20gXCJ3ZWF2ZXJlYWN0XCI7XG5cblxuY2xhc3MgVHJlZVNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnByb3BzLnNldHRpbmdzO1xuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHdlYXZlanMuV2VhdmVBUEkuU2Vzc2lvbk1hbmFnZXIuYWRkVHJlZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlTm9kZVZhbHVlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIHdlYXZlanMuV2VhdmVBUEkuU2Vzc2lvbk1hbmFnZXIucmVtb3ZlVHJlZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZlTm9kZVZhbHVlLnJlbW92ZUNhbGxiYWNrKHRoaXMsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICB9XG5cblxuXG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHRyZWVVSSA9IFwiXCI7XG4gICAgaWYodGhpcy5wcm9wcy50cmVlKXtcbiAgICAgICAgdHJlZVVJID0gPHdlYXZlcmVhY3QuVHJlZSBkYXRhPXt0aGlzLnByb3BzLnRyZWV9IGxhYmVsPVwibGFiZWxcIiBub2Rlcz1cImNoaWxkcmVuXCIgIGNsaWNrQ2FsbGJhY2s9e3RoaXMucHJvcHMubm9kZUNsaWNrfSBzZXR0aW5ncz17dGhpcy5zZXR0aW5ncy50cmVlQ29uZmlnfSBkYXRhVHlwZXNNYXA9e3RoaXMuc2V0dGluZ3MuZGF0YVR5cGVzTWFwfSBnZXREYXRhVHlwZT17dGhpcy5zZXR0aW5ncy5nZXREYXRhVHlwZX0vPlxuICAgIH1cblxuICAgIHZhciB0cmVlQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOlwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6XCIxMDAlXCIsXG4gICAgICAgIGJvcmRlclN0eWxlOlwic29saWRcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOlwiNHB4XCIsXG4gICAgICAgIGJvcmRlcldpZHRoOlwiMXB4XCIsXG4gICAgICAgIGJvcmRlckNvbG9yOlwiZ3JleVwiLFxuICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICAgICAgICBvdmVyZmxvd1g6ICdzY3JvbGwnLFxuICAgICAgICBwYWRkaW5nOlwiNHB4XCJcbiAgICB9XG5cblxuICAgIHJldHVybiAoIDxkaXYgc3R5bGU9e3RyZWVDb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyZWVVSX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBUcmVlU2VjdGlvbjtcbiJdfQ==
