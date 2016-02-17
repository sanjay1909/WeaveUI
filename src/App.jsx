import React from "react";
import weaveui from "weaveui";


class App extends React.Component {




    constructor(props) {
        super(props)
        this.openSettings = this.openSettings.bind(this);
        window.weave = new Weave();
        window.dbWeave = new Weave();

        this.sessionConfigDashdoard = new weaveui.SessionEditorConfig();
        this.sessionConfigWeave = new weaveui.SessionEditorConfig();

    }
    openSettings(e) {
        if (e.code === "KeyD") {
            if(this.sessionConfigWeave.modalConfig.open.value)  this.sessionConfigWeave.modalConfig.open.value= false;
            this.sessionConfigDashdoard.modalConfig.open.value = true;
            this.popUpSessionEditor( this.sessionConfigDashdoard,window.dbWeave,"Session State Editor (Weave Dasboard)",true)
        } else if (e.code === "KeyW") {
            if(this.sessionConfigDashdoard.modalConfig.open.value)  this.sessionConfigDashdoard.modalConfig.open.value= false;
            this.sessionConfigWeave.modalConfig.open.value = true;
            this.popUpSessionEditor( this.sessionConfigWeave,weave,"Session State Editor (Weave)",false)
        } else if (e.code === "KeyQ") {
            this.sessionConfigWeave.modalConfig.open.value = false;
            this.sessionConfigDashdoard.modalConfig.open.value = false;
        }
    }

    componentDidMount(){
        window.addEventListener('keydown', this.openSettings);
    }

    componentWillUnMount(){
        window.removeEventListener('keydown', this.openSettings);
    }

    popUpSessionEditor(config,weaveInstance,title,isDb) {
        ReactDOM.render( < weaveui.SessionEditor title={title} isDashboard={isDb} weave = {weaveInstance} keyPress = "true" settings = {config}/>,document.getElementById("popUp")
                       );
    }


    render() {


        return (<div>
                    <div id="popUp"/>
                    {this.props.children}
                </div>
        );

    }
}

export default App;
