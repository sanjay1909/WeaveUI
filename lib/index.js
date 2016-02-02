"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _sessionStateEditorSessionEditor = require("./sessionStateEditor/SessionEditor");

var _sessionStateEditorSessionEditor2 = _interopRequireDefault(_sessionStateEditorSessionEditor);

var _sessionStateEditorSessionEditorConfig = require("./sessionStateEditor/SessionEditorConfig");

var _sessionStateEditorSessionEditorConfig2 = _interopRequireDefault(_sessionStateEditorSessionEditorConfig);

var _utilsApp = require("./utils/App");

var _utilsApp2 = _interopRequireDefault(_utilsApp);

exports.SessionEditor = _sessionStateEditorSessionEditor2["default"];
exports.SessionEditorConfig = _sessionStateEditorSessionEditorConfig2["default"];

exports.getToolForConfigName = function (name) {
    if (_utilsApp2["default"].getToolImplementation(name)) {
        return _utilsApp2["default"].getToolImplementation(name);
    } else {
        console.warn("No Tool is registered for " + name);
    }
};