"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NodeView = function (_React$Component) {
  _inherits(NodeView, _React$Component);

  function NodeView(props) {
    _classCallCheck(this, NodeView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NodeView).call(this, props));

    _this.textAreaChange = _this.textAreaChange.bind(_this);

    return _this;
  }

  _createClass(NodeView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.activeNodeValue.addImmediateCallback(this, this.forceUpdate);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.activeNodeValue.removeCallback(this, this.forceUpdate);
    }
  }, {
    key: "textAreaChange",
    value: function textAreaChange(e) {
      this.props.activeNodeValue.state = e.target.value;
    }
  }, {
    key: "render",
    value: function render() {

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

      return _react2.default.createElement(
        "div",
        { style: resultContainerStyle },
        _react2.default.createElement("textarea", { style: { width: "100%", height: "100%", border: "none" }, value: this.props.activeNodeValue.state, onChange: this.textAreaChange })
      );
    }
  }]);

  return NodeView;
}(_react2.default.Component);

exports.default = NodeView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vZGVWaWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR007OztBQUVKLFdBRkksUUFFSixDQUFZLEtBQVosRUFBbUI7MEJBRmYsVUFFZTs7dUVBRmYscUJBR0ksUUFEVzs7QUFJakIsVUFBSyxjQUFMLEdBQXNCLE1BQUssY0FBTCxDQUFvQixJQUFwQixPQUF0QixDQUppQjs7O0dBQW5COztlQUZJOzt3Q0FVZTtBQUNqQixXQUFLLEtBQUwsQ0FBVyxlQUFYLENBQTJCLG9CQUEzQixDQUFnRCxJQUFoRCxFQUFxRCxLQUFLLFdBQUwsQ0FBckQsQ0FEaUI7Ozs7MkNBSUs7QUFDdEIsV0FBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixjQUEzQixDQUEwQyxJQUExQyxFQUErQyxLQUFLLFdBQUwsQ0FBL0MsQ0FEc0I7Ozs7bUNBTVQsR0FBRTtBQUNmLFdBQUssS0FBTCxDQUFXLGVBQVgsQ0FBMkIsS0FBM0IsR0FBbUMsRUFBRSxNQUFGLENBQVMsS0FBVCxDQURwQjs7Ozs2QkFJUjs7QUFFUCxVQUFJLHVCQUF1QjtBQUN2QixlQUFNLE1BQU47QUFDQSxnQkFBTyxNQUFQO0FBQ0EscUJBQVksT0FBWjtBQUNBLHNCQUFhLEtBQWI7QUFDQSxxQkFBWSxLQUFaO0FBQ0EscUJBQVksTUFBWjtBQUNBLG1CQUFXLFFBQVg7QUFDQSxtQkFBVyxRQUFYO0FBQ0EsaUJBQVEsS0FBUjtPQVRBLENBRkc7O0FBZVAsYUFBUzs7VUFBSyxPQUFPLG9CQUFQLEVBQUw7UUFDRyw0Q0FBVSxPQUFPLEVBQUMsT0FBTSxNQUFOLEVBQWEsUUFBTyxNQUFQLEVBQWMsUUFBTyxNQUFQLEVBQW5DLEVBQW1ELE9BQU8sS0FBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixLQUEzQixFQUFrQyxVQUFVLEtBQUssY0FBTCxFQUFoSCxDQURIO09BQVQsQ0FmTzs7OztTQXhCTDtFQUFpQixnQkFBTSxTQUFOOztrQkE4Q1IiLCJmaWxlIjoiTm9kZVZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuY2xhc3MgTm9kZVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG5cbiAgICB0aGlzLnRleHRBcmVhQ2hhbmdlID0gdGhpcy50ZXh0QXJlYUNoYW5nZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMucHJvcHMuYWN0aXZlTm9kZVZhbHVlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHRoaXMsdGhpcy5mb3JjZVVwZGF0ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgdGhpcy5wcm9wcy5hY3RpdmVOb2RlVmFsdWUucmVtb3ZlQ2FsbGJhY2sodGhpcyx0aGlzLmZvcmNlVXBkYXRlKTtcbiAgfVxuXG5cblxuICB0ZXh0QXJlYUNoYW5nZShlKXtcbiAgICB0aGlzLnByb3BzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHJlc3VsdENvbnRhaW5lclN0eWxlID0ge1xuICAgICAgICB3aWR0aDpcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OlwiMTAwJVwiLFxuICAgICAgICBib3JkZXJTdHlsZTpcInNvbGlkXCIsXG4gICAgICAgIGJvcmRlclJhZGl1czpcIjRweFwiLFxuICAgICAgICBib3JkZXJXaWR0aDpcIjFweFwiLFxuICAgICAgICBib3JkZXJDb2xvcjpcImdyZXlcIixcbiAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcbiAgICAgICAgb3ZlcmZsb3dYOiAnc2Nyb2xsJyxcbiAgICAgICAgcGFkZGluZzpcIjRweFwiXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKCA8ZGl2IHN0eWxlPXtyZXN1bHRDb250YWluZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLGJvcmRlcjpcIm5vbmVcIn19IHZhbHVlPXt0aGlzLnByb3BzLmFjdGl2ZU5vZGVWYWx1ZS5zdGF0ZX0gb25DaGFuZ2U9e3RoaXMudGV4dEFyZWFDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBOb2RlVmlldztcbiJdfQ==
