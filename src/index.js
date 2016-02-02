import SessionEditor from "./sessionStateEditor/SessionEditor";
import SessionEditorConfig from "./sessionStateEditor/SessionEditorConfig";
import App from "./utils/App";


exports.SessionEditor = SessionEditor;
exports.SessionEditorConfig = SessionEditorConfig;


exports.getToolForConfigName = function (name) {
    if (App.getToolImplementation(name)) {
        return App.getToolImplementation(name);
    } else {
        console.warn("No Tool is registered for " + name);
    }

}
