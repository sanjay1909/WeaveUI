import ReactDOM from "react-dom";
import Weave from "Weave";
import weavejs from "weavejs";
import App from "./App";





exports.init = function (container, session) {
    ReactDOM.render( < App root = {
            session
        }
        /> , document.getElementById(container)
    );
}
