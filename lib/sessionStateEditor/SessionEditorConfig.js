"use strict";

var _Object$defineProperties = require("babel-runtime/core-js/object/define-properties")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _weavejs = require("weavejs");

var _weavejs2 = _interopRequireDefault(_weavejs);

var _weavereact = require("weavereact");

var _weavereact2 = _interopRequireDefault(_weavereact);

var _Weave = require("Weave");

var _Weave2 = _interopRequireDefault(_Weave);

(function (module) {

    function SessionEditorConfig() {

        _Object$defineProperties(this, {

            "treeConfig": {
                value: _Weave2["default"].linkableChild(this, new _weavereact2["default"].TreeConfig())
            },
            showTree: {
                value: new _weavejs2["default"].core.LinkableBoolean(false)
            },
            activeNodeValue: {
                value: new _weavejs2["default"].core.LinkableVariable()
            }

        });

        this.dataTypesMap = {
            "weavejs.core.LinkableString": "S",
            "weavejs.core.LinkableNumber": "N",
            "weavejs.core.LinkableBoolean": "B"
        };
    }

    SessionEditorConfig.prototype.getDataType = function (treeItem) {
        return treeItem.data.FLEXJS_CLASS_INFO.names[0].qName;
    };

    _Weave2["default"].registerClass('weaveui.SessionEditorConfig', SessionEditorConfig);

    module.exports = SessionEditorConfig;
})(module);