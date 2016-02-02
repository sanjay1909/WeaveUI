import React from "react";
import SessionEditor from "./sessionStateEditor/SessionEditor";
import TestSpan from "./TestSpan";


class App extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount(){
        this.props.root.childListCallbacks.addImmediateCallback(this,this.forceUpdate);
    }

    componentWillUnMount(){
        this.props.root.childListCallbacks.removeCallback(this,this.forceUpdate);
    }



    render() {
        var sessionChildren = this.props.root.getNames();
        var toolUI = [];
        for(var i=0; i<sessionChildren.length; i++){
            var sessionName = sessionChildren[i];
            var sessionObj = this.props.root.getObject(sessionName);
            var configClassName = Weave.getPath(sessionObj).getType();
            var ToolClass = getToolForConfigName(configClassName);
             var ui;
            if(ToolClass){
                ui = <ToolClass settings={sessionObj} index={i}  key={i}/>

            }else{
               ui =  <TestSpan settings={sessionObj} index={i}  key={i}/>
            }
            toolUI.push(ui);
        }

        return (<div>
                    <SessionEditor sessionState={ this.props.root}/>
                    {this.props.children}
                    {toolUI}
                </div>
        );

    }
}

export default App;
