import ReactDOM from "react-dom";
import App from "./App";





exports.init = function (container, session) {
    ReactDOM.render( <App weave = {session}/> , document.getElementById(container)
    );
}
