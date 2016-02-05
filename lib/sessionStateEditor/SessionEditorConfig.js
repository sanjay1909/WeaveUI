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
