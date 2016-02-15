"use strict";

var _weavereact = require("weavereact");

(function (module) {

    function SessionEditorConfig() {

        Object.defineProperties(this, {

            "treeConfig": {
                value: new _weavereact.TreeConfig()
            },
            showTree: {
                value: new weavejs.core.LinkableBoolean(false)
            },
            activeNodeValue: {
                value: new weavejs.core.LinkableVariable()
            },
            modalConfig: {
                value: new _weavereact.ModalConfig()
            }

        });

        this.dataTypesMap = {
            "weavejs.core.LinkableString": "S",
            "weavejs.core.LinkableNumber": "N",
            "weavejs.core.LinkableBoolean": "B",
            "weavejs.data.source.WeaveDataSource": "fa fa-database"

        };
    }

    var p = SessionEditorConfig.prototype;
    p.getDataType = function (treeItem) {
        return treeItem.data.FLEXJS_CLASS_INFO.names[0].qName;
    };

    module.exports = SessionEditorConfig;
})(module);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlc3Npb25FZGl0b3JDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLENBQUMsVUFBVSxNQUFWLEVBQWtCOztBQUlmLGFBQVMsbUJBQVQsR0FBK0I7O0FBRTNCLGVBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7O0FBRTFCLDBCQUFjO0FBQ1YsdUJBQU8sNEJBQVA7YUFESjtBQUdBLHNCQUFVO0FBQ04sdUJBQU8sSUFBSSxRQUFRLElBQVIsQ0FBYSxlQUFiLENBQTZCLEtBQWpDLENBQVA7YUFESjtBQUdBLDZCQUFpQjtBQUNiLHVCQUFPLElBQUksUUFBUSxJQUFSLENBQWEsZ0JBQWIsRUFBWDthQURKO0FBR0EseUJBQWE7QUFDVCx1QkFBTyw2QkFBUDthQURKOztTQVhKLEVBRjJCOztBQW1CM0IsYUFBSyxZQUFMLEdBQW9CO0FBQ2hCLDJDQUErQixHQUEvQjtBQUNBLDJDQUErQixHQUEvQjtBQUNBLDRDQUFnQyxHQUFoQztBQUNBLG1EQUF1QyxnQkFBdkM7O1NBSkosQ0FuQjJCO0tBQS9COztBQThCQSxRQUFJLElBQUksb0JBQW9CLFNBQXBCLENBbENPO0FBbUNmLE1BQUUsV0FBRixHQUFnQixVQUFVLFFBQVYsRUFBb0I7QUFDaEMsZUFBTyxTQUFTLElBQVQsQ0FBYyxpQkFBZCxDQUFnQyxLQUFoQyxDQUFzQyxDQUF0QyxFQUF5QyxLQUF6QyxDQUR5QjtLQUFwQixDQW5DRDs7QUF5Q2YsV0FBTyxPQUFQLEdBQWlCLG1CQUFqQixDQXpDZTtDQUFsQixFQTJDQyxNQTNDRCxDQUFEIiwiZmlsZSI6IlNlc3Npb25FZGl0b3JDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyZWVDb25maWd9IGZyb20gXCJ3ZWF2ZXJlYWN0XCI7XG5pbXBvcnQge01vZGFsQ29uZmlnfSBmcm9tIFwid2VhdmVyZWFjdFwiO1xuXG4oZnVuY3Rpb24gKG1vZHVsZSkge1xuXG5cblxuICAgIGZ1bmN0aW9uIFNlc3Npb25FZGl0b3JDb25maWcoKSB7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuXG4gICAgICAgICAgICBcInRyZWVDb25maWdcIjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgVHJlZUNvbmZpZygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd1RyZWU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IHdlYXZlanMuY29yZS5MaW5rYWJsZUJvb2xlYW4oZmFsc2UpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aXZlTm9kZVZhbHVlOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG5ldyB3ZWF2ZWpzLmNvcmUuTGlua2FibGVWYXJpYWJsZSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kYWxDb25maWc6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IE1vZGFsQ29uZmlnKClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5kYXRhVHlwZXNNYXAgPSB7XG4gICAgICAgICAgICBcIndlYXZlanMuY29yZS5MaW5rYWJsZVN0cmluZ1wiOiBcIlNcIixcbiAgICAgICAgICAgIFwid2VhdmVqcy5jb3JlLkxpbmthYmxlTnVtYmVyXCI6IFwiTlwiLFxuICAgICAgICAgICAgXCJ3ZWF2ZWpzLmNvcmUuTGlua2FibGVCb29sZWFuXCI6IFwiQlwiLFxuICAgICAgICAgICAgXCJ3ZWF2ZWpzLmRhdGEuc291cmNlLldlYXZlRGF0YVNvdXJjZVwiOiBcImZhIGZhLWRhdGFiYXNlXCJcblxuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIHZhciBwID0gU2Vzc2lvbkVkaXRvckNvbmZpZy5wcm90b3R5cGU7XG4gICAgcC5nZXREYXRhVHlwZSA9IGZ1bmN0aW9uICh0cmVlSXRlbSkge1xuICAgICAgICByZXR1cm4gdHJlZUl0ZW0uZGF0YS5GTEVYSlNfQ0xBU1NfSU5GTy5uYW1lc1swXS5xTmFtZTtcbiAgICB9XG5cblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBTZXNzaW9uRWRpdG9yQ29uZmlnO1xuXG59KG1vZHVsZSkpO1xuIl19
