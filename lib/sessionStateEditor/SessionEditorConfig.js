"use strict";

var _weavereact = require("weavereact");

var _weavereact2 = _interopRequireDefault(_weavereact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (module) {

    function SessionEditorConfig() {

        Object.defineProperties(this, {

            "treeConfig": {
                value: new _weavereact2.default.TreeConfig()
            },
            showTree: {
                value: new weavejs.core.LinkableBoolean(false)
            },
            activeNodeValue: {
                value: new weavejs.core.LinkableVariable()
            },
            modalConfig: {
                value: new _weavereact2.default.ModalConfig()
            }

        });

        this.dataTypesMap = {
            "weavejs.core.LinkableString": "S",
            "weavejs.core.LinkableNumber": "N",
            "weavejs.core.LinkableBoolean": "B",
            "weavejs.data.source.WeaveDataSource": "fa fa-database"

        };
    }

    SessionEditorConfig.prototype.getDataType = function (treeItem) {
        return treeItem.data.FLEXJS_CLASS_INFO.names[0].qName;
    };

    module.exports = SessionEditorConfig;
})(module);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlc3Npb25FZGl0b3JDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxDQUFDLFVBQVUsTUFBVixFQUFrQjs7QUFJZixhQUFTLG1CQUFULEdBQStCOztBQUUzQixlQUFPLGdCQUFQLENBQXdCLElBQXhCLEVBQThCOztBQUUxQiwwQkFBYztBQUNWLHVCQUFPLElBQUkscUJBQVcsVUFBWCxFQUFYO2FBREo7QUFHQSxzQkFBVTtBQUNOLHVCQUFPLElBQUksUUFBUSxJQUFSLENBQWEsZUFBYixDQUE2QixLQUFqQyxDQUFQO2FBREo7QUFHQSw2QkFBaUI7QUFDYix1QkFBTyxJQUFJLFFBQVEsSUFBUixDQUFhLGdCQUFiLEVBQVg7YUFESjtBQUdBLHlCQUFhO0FBQ1QsdUJBQU8sSUFBSSxxQkFBVyxXQUFYLEVBQVg7YUFESjs7U0FYSixFQUYyQjs7QUFtQjNCLGFBQUssWUFBTCxHQUFvQjtBQUNoQiwyQ0FBK0IsR0FBL0I7QUFDQSwyQ0FBK0IsR0FBL0I7QUFDQSw0Q0FBZ0MsR0FBaEM7QUFDQSxtREFBdUMsZ0JBQXZDOztTQUpKLENBbkIyQjtLQUEvQjs7QUErQkEsd0JBQW9CLFNBQXBCLENBQThCLFdBQTlCLEdBQTRDLFVBQVUsUUFBVixFQUFvQjtBQUM1RCxlQUFPLFNBQVMsSUFBVCxDQUFjLGlCQUFkLENBQWdDLEtBQWhDLENBQXNDLENBQXRDLEVBQXlDLEtBQXpDLENBRHFEO0tBQXBCLENBbkM3Qjs7QUF5Q2YsV0FBTyxPQUFQLEdBQWlCLG1CQUFqQixDQXpDZTtDQUFsQixFQTJDQyxNQTNDRCxDQUFEIiwiZmlsZSI6IlNlc3Npb25FZGl0b3JDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VhdmVyZWFjdCBmcm9tIFwid2VhdmVyZWFjdFwiO1xuKGZ1bmN0aW9uIChtb2R1bGUpIHtcblxuXG5cbiAgICBmdW5jdGlvbiBTZXNzaW9uRWRpdG9yQ29uZmlnKCkge1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcblxuICAgICAgICAgICAgXCJ0cmVlQ29uZmlnXCI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlcmVhY3QuVHJlZUNvbmZpZygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1RyZWU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aXZlTm9kZVZhbHVlOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kYWxDb25maWc6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlcmVhY3QuTW9kYWxDb25maWcoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGF0YVR5cGVzTWFwID0ge1xuICAgICAgICAgICAgXCJ3ZWF2ZWpzLmNvcmUuTGlua2FibGVTdHJpbmdcIjogXCJTXCIsXG4gICAgICAgICAgICBcIndlYXZlanMuY29yZS5MaW5rYWJsZU51bWJlclwiOiBcIk5cIixcbiAgICAgICAgICAgIFwid2VhdmVqcy5jb3JlLkxpbmthYmxlQm9vbGVhblwiOiBcIkJcIixcbiAgICAgICAgICAgIFwid2VhdmVqcy5kYXRhLnNvdXJjZS5XZWF2ZURhdGFTb3VyY2VcIjogXCJmYSBmYS1kYXRhYmFzZVwiXG5cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cblxuICAgIFNlc3Npb25FZGl0b3JDb25maWcucHJvdG90eXBlLmdldERhdGFUeXBlID0gZnVuY3Rpb24gKHRyZWVJdGVtKSB7XG4gICAgICAgIHJldHVybiB0cmVlSXRlbS5kYXRhLkZMRVhKU19DTEFTU19JTkZPLm5hbWVzWzBdLnFOYW1lO1xuICAgIH1cblxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IFNlc3Npb25FZGl0b3JDb25maWc7XG5cbn0obW9kdWxlKSk7XG4iXX0=
