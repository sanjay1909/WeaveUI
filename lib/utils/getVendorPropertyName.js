'use strict';

var div = document.createElement('div');
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
var domVendorPrefix;

// Helper function to get the proper vendor property name. (transition => WebkitTransition)
module.exports = function (prop) {

    if (prop in div.style) return prop;

    var prop = prop.charAt(0).toUpperCase() + prop.substr(1);
    if (domVendorPrefix) {
        return domVendorPrefix + prop;
    } else {
        for (var i = 0; i < prefixes.length; ++i) {
            var vendorProp = prefixes[i] + prop;
            if (vendorProp in div.style) {
                domVendorPrefix = prefixes[i];
                return vendorProp;
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldFZlbmRvclByb3BlcnR5TmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJLE1BQU0sU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQU47QUFDSixJQUFJLFdBQVcsQ0FBQyxLQUFELEVBQVEsUUFBUixFQUFrQixHQUFsQixFQUF1QixJQUF2QixDQUFYO0FBQ0osSUFBSSxlQUFKOzs7QUFHQSxPQUFPLE9BQVAsR0FBaUIsVUFBVSxJQUFWLEVBQWdCOztBQUU3QixRQUFJLFFBQVEsSUFBSSxLQUFKLEVBQVcsT0FBTyxJQUFQLENBQXZCOztBQUVBLFFBQUksT0FBTyxLQUFLLE1BQUwsQ0FBWSxDQUFaLEVBQWUsV0FBZixLQUErQixLQUFLLE1BQUwsQ0FBWSxDQUFaLENBQS9CLENBSmtCO0FBSzdCLFFBQUksZUFBSixFQUFxQjtBQUNqQixlQUFPLGtCQUFrQixJQUFsQixDQURVO0tBQXJCLE1BRU87QUFDSCxhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxTQUFTLE1BQVQsRUFBaUIsRUFBRSxDQUFGLEVBQUs7QUFDdEMsZ0JBQUksYUFBYSxTQUFTLENBQVQsSUFBYyxJQUFkLENBRHFCO0FBRXRDLGdCQUFJLGNBQWMsSUFBSSxLQUFKLEVBQVc7QUFDekIsa0NBQWtCLFNBQVMsQ0FBVCxDQUFsQixDQUR5QjtBQUV6Qix1QkFBTyxVQUFQLENBRnlCO2FBQTdCO1NBRko7S0FISjtDQUxhIiwiZmlsZSI6ImdldFZlbmRvclByb3BlcnR5TmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xudmFyIHByZWZpeGVzID0gWydNb3onLCAnV2Via2l0JywgJ08nLCAnbXMnXTtcbnZhciBkb21WZW5kb3JQcmVmaXg7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIHByb3BlciB2ZW5kb3IgcHJvcGVydHkgbmFtZS4gKHRyYW5zaXRpb24gPT4gV2Via2l0VHJhbnNpdGlvbilcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHByb3ApIHtcblxuICAgIGlmIChwcm9wIGluIGRpdi5zdHlsZSkgcmV0dXJuIHByb3A7XG5cbiAgICB2YXIgcHJvcCA9IHByb3AuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wLnN1YnN0cigxKTtcbiAgICBpZiAoZG9tVmVuZG9yUHJlZml4KSB7XG4gICAgICAgIHJldHVybiBkb21WZW5kb3JQcmVmaXggKyBwcm9wO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciB2ZW5kb3JQcm9wID0gcHJlZml4ZXNbaV0gKyBwcm9wO1xuICAgICAgICAgICAgaWYgKHZlbmRvclByb3AgaW4gZGl2LnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgZG9tVmVuZG9yUHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlbmRvclByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
