import React from "react";
import weaveui from "weaveui";
import TestSpan from "./TestSpan";


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
        this.props.root.childListCallbacks.addImmediateCallback(this,this.forceUpdate);
        window.addEventListener('keydown', this.openSettings);
    }

    componentWillUnMount(){
        this.props.root.childListCallbacks.removeCallback(this,this.forceUpdate);
        window.removeEventListener('keydown', this.openSettings);
    }



    render() {
        var sessionChildren = this.props.root.getNames();
        var toolUI = [];
        for(var i=0; i<sessionChildren.length; i++){
            var sessionName = sessionChildren[i];
            var sessionObj = this.props.root.getObject(sessionName);
            var configClassName = Weave.getPath(sessionObj).getType();
            var ToolClass = weaveui.getToolForConfigName(configClassName);
             var ui;
            if(ToolClass){
                ui = <ToolClass settings={sessionObj} index={i}  key={i}/>

            }else{
               ui =  <TestSpan settings={sessionObj} index={i}  key={i}/>
            }
            toolUI.push(ui);
        }

        return (<div>
                    <weaveui.SessionEditor sessionState={ this.props.root} keyPress="true" settings={this.sessionConfig}/>
                    {this.props.children}
                    {toolUI}
                </div>
        );

    }
}

export default App;
