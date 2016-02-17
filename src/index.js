import ReactDOM from "react-dom";
import App from "./App";





exports.init = function (container) {
    ReactDOM.render( <App/> , document.getElementById(container)
    );
}
