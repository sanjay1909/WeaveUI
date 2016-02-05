"use strict";

var _SessionEditor = require("./sessionStateEditor/SessionEditor");

var _SessionEditor2 = _interopRequireDefault(_SessionEditor);

var _SessionEditorConfig = require("./sessionStateEditor/SessionEditorConfig");

var _SessionEditorConfig2 = _interopRequireDefault(_SessionEditorConfig);

var _App = require("./utils/App");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SessionEditor = _SessionEditor2.default;
exports.SessionEditorConfig = _SessionEditorConfig2.default;

exports.getToolForConfigName = function (name) {
    if (_App2.default.getToolImplementation(name)) {
        return _App2.default.getToolImplementation(name);
    }
};
