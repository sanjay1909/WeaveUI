import React from "react";
import weaveui from "weaveui";


class App extends React.Component {




    constructor(props) {
        super(props)
        this.openSettings = this.openSettings.bind(this);
        this.sessionConfig = new weaveui.SessionEditorConfig();

    }
    openSettings(e){
        if(e.code === "Enter"){
            this.sessionConfig.modalConfig.open.value = true;
        }else if(e.code === "KeyQ"){
                 this.sessionConfig.modalConfig.open.value = false;
        }
    }

    componentDidMount(){
        window.addEventListener('keydown', this.openSettings);
    }

    componentWillUnMount(){
        window.removeEventListener('keydown', this.openSettings);
    }



    render() {


        return (<div>
                    <weaveui.SessionEditor isDashboard={false} weave={this.props.weave} keyPress="true" settings={this.sessionConfig}/>
                    {this.props.children}
                </div>
        );

    }
}

export default App;
