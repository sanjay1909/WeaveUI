"use strict";

(function (module) {

    function App() {}

    var toolRegistry = {};

    App.registerToolImplementation = function (asClassName, jsClass) {
        if (!toolRegistry[asClassName]) toolRegistry[asClassName] = jsClass;
    };

    App.getToolImplementation = function (asClassName) {
        return toolRegistry[asClassName];
    };

    module.exports = App;
})(module);
