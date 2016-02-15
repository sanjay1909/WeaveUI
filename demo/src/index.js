import ReactDOM from "react-dom";
import App from "./App";





exports.init = function (container, session) {
    ReactDOM.render( <App root = {session}/> , document.getElementById(container)
    );
}
