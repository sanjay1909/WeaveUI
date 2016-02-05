'use strict';

var _appendVendorPrefix = require('./appendVendorPrefix');

var _appendVendorPrefix2 = _interopRequireDefault(_appendVendorPrefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        return (0, _appendVendorPrefix2.default)(style);
    };

    Style.appendVendorPrefix = function (style) {
        return (0, _appendVendorPrefix2.default)(style);
    };

    // due to bootstrap Navbar zindex (1029) value we have to give 1030 for overlay
    Style.overlayContainer = function (isOpen) {
        return (0, _appendVendorPrefix2.default)({
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
        return (0, _appendVendorPrefix2.default)({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsQ0FBQyxVQUFVLE1BQVYsRUFBa0I7O0FBR2YsYUFBUyxLQUFULEdBQWlCLEVBQWpCOztBQU1BLGFBQVMsS0FBVCxDQUFlLElBQWYsRUFBcUIsR0FBckIsRUFBMEI7QUFDdEIsYUFBSyxJQUFJLElBQUosSUFBWSxHQUFqQixFQUFzQjtBQUNsQixpQkFBSyxJQUFMLElBQWEsSUFBSSxJQUFKLENBQWIsQ0FEa0I7U0FBdEI7O0FBSUEsZUFBTyxJQUFQLENBTHNCO0tBQTFCOztBQVFBLFVBQU0saUJBQU4sR0FBMEIsVUFBVSxJQUFWLEVBQWdCLEdBQWhCLEVBQXFCLGtCQUFyQixFQUF5QztBQUMvRCxZQUFJLGNBQWMsTUFBTSxJQUFOLEVBQVksR0FBWixDQUFkLENBRDJEO0FBRS9ELFlBQUksa0JBQUosRUFDSSxPQUFPLE1BQU0sa0JBQU4sQ0FBeUIsV0FBekIsQ0FBUCxDQURKLEtBRUssT0FBTyxXQUFQLENBRkw7S0FGc0IsQ0FqQlg7O0FBMkJmLFVBQU0sUUFBTixHQUFpQixVQUFVLEtBQVYsRUFBaUI7QUFDOUIsZUFBTyxrQ0FBbUIsS0FBbkIsQ0FBUCxDQUQ4QjtLQUFqQixDQTNCRjs7QUErQmYsVUFBTSxrQkFBTixHQUEyQixVQUFVLEtBQVYsRUFBaUI7QUFDeEMsZUFBTyxrQ0FBbUIsS0FBbkIsQ0FBUCxDQUR3QztLQUFqQjs7O0FBL0JaLFNBMENmLENBQU0sZ0JBQU4sR0FBeUIsVUFBVSxNQUFWLEVBQWtCO0FBQ3ZDLGVBQU8sa0NBQW1CO0FBQ3RCLHNCQUFVLE9BQVY7QUFDQSxtQkFBTyxNQUFQO0FBQ0Esb0JBQVEsTUFBUjtBQUNBLGtCQUFNLENBQU47QUFDQSxpQkFBSyxDQUFMO0FBQ0Esd0JBQVksb0JBQVo7QUFDQSxxQkFBUyxTQUFTLENBQVQsR0FBYSxDQUFiO0FBQ1QsdUJBQVcsU0FBUyxzQkFBVCxHQUFrQywwQkFBbEM7QUFDWCx3QkFBWSxTQUFTLGNBQVQsR0FBMEIsbUNBQTFCO0FBQ1osb0JBQVEsSUFBUjtTQVZHLENBQVAsQ0FEdUM7S0FBbEIsQ0ExQ1Y7O0FBeURmLFVBQU0sS0FBTixHQUFjLFVBQVUsTUFBVixFQUFrQjtBQUM1QixlQUFPLGtDQUFtQjtBQUN0QixzQkFBVSxPQUFWO0FBQ0Esb0JBQVEsSUFBUjtBQUNBLG1CQUFPLE1BQVA7QUFDQSxvQkFBUSxNQUFSO0FBQ0Esa0JBQU0sQ0FBTjtBQUNBLGlCQUFLLENBQUw7QUFDQSx1QkFBVyxTQUFTLHNCQUFULEdBQWtDLDBCQUFsQztBQUNYLHdCQUFZLFVBQVo7O1NBUkcsQ0FBUCxDQUQ0QjtLQUFsQixDQXpEQzs7QUEyRWYsV0FBTyxPQUFQLEdBQWlCLEtBQWpCLENBM0VlO0NBQWxCLEVBNkVDLE1BN0VELENBQUQiLCJmaWxlIjoiU3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwZW5kVmVuZG9yUHJlZml4IGZyb20gJy4vYXBwZW5kVmVuZG9yUHJlZml4JztcblxuXG5cbihmdW5jdGlvbiAobW9kdWxlKSB7XG5cblxuICAgIGZ1bmN0aW9uIFN0eWxlKCkge1xuXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIG1lcmdlKGludG8sIG9iaikge1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iaikge1xuICAgICAgICAgICAgaW50b1thdHRyXSA9IG9ialthdHRyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnRvO1xuICAgIH1cblxuICAgIFN0eWxlLm1lcmdlU3R5bGVPYmplY3RzID0gZnVuY3Rpb24gKGludG8sIG9iaiwgYXBwZW5kVmVuZG9yUHJlZml4KSB7XG4gICAgICAgIHZhciBzdHlsZU9iamVjdCA9IG1lcmdlKGludG8sIG9iaik7XG4gICAgICAgIGlmIChhcHBlbmRWZW5kb3JQcmVmaXgpXG4gICAgICAgICAgICByZXR1cm4gU3R5bGUuYXBwZW5kVmVuZG9yUHJlZml4KHN0eWxlT2JqZWN0KVxuICAgICAgICBlbHNlIHJldHVybiBzdHlsZU9iamVjdDtcbiAgICB9XG5cblxuXG5cbiAgICBTdHlsZS5nZXRTdHlsZSA9IGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgICByZXR1cm4gYXBwZW5kVmVuZG9yUHJlZml4KHN0eWxlKTtcbiAgICB9XG5cbiAgICBTdHlsZS5hcHBlbmRWZW5kb3JQcmVmaXggPSBmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIGFwcGVuZFZlbmRvclByZWZpeChzdHlsZSk7XG4gICAgfVxuXG5cblxuXG5cblxuXG4gICAgLy8gZHVlIHRvIGJvb3RzdHJhcCBOYXZiYXIgemluZGV4ICgxMDI5KSB2YWx1ZSB3ZSBoYXZlIHRvIGdpdmUgMTAzMCBmb3Igb3ZlcmxheVxuICAgIFN0eWxlLm92ZXJsYXlDb250YWluZXIgPSBmdW5jdGlvbiAoaXNPcGVuKSB7XG4gICAgICAgIHJldHVybiBhcHBlbmRWZW5kb3JQcmVmaXgoe1xuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4xKScsXG4gICAgICAgICAgICBvcGFjaXR5OiBpc09wZW4gPyAxIDogMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogaXNPcGVuID8gJ3RyYW5zbGF0ZTNkKDAsIDAsIDApJyA6ICd0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCknLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogaXNPcGVuID8gJ29wYWNpdHkgMC41cycgOiAnb3BhY2l0eSAwLjVzLCB0cmFuc2Zvcm0gMC4xcyAwLjVzJyxcbiAgICAgICAgICAgIHpJbmRleDogMTAzMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBTdHlsZS5tb2RhbCA9IGZ1bmN0aW9uIChpc09wZW4pIHtcbiAgICAgICAgcmV0dXJuIGFwcGVuZFZlbmRvclByZWZpeCh7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIHpJbmRleDogMTA1MCxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGlzT3BlbiA/ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScgOiAndHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApJyxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC41cycsXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFN0eWxlO1xuXG59KG1vZHVsZSkpO1xuIl19
