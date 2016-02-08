import React from "react";
import weavereact from "weavereact";
import SessionEditorConfig from "./SessionEditorConfig";
import TreeSection from "./TreeSection";
import NodeView from "./NodeView";


class SessionEditor extends React.Component {

  constructor(props) {
    super(props);
    this.settings =  this.props.settings?this.props.settings:new SessionEditorConfig();

    this.changeSessionValue = this.changeSessionValue.bind(this);
    this.nodeClick = this.nodeClick.bind(this);
    this.saveFile = this.saveFile.bind(this);
    this.tree =  weavejs.WeaveAPI.SessionManager.getSessionStateTree(this.props.sessionState);
    this.tree.label = "Weave";
    this.nodeValue = "";
    this.selectedData;// to-do:try with linkableWatcher and add forceUpdate to that watcher
  }

  componentDidMount(){

  }

  componentWillUnmount () {
  }


 nodeClick(node){
        this.selectedData = node.data;
        var sessionState = Weave.getState(node.data);
        var sessionStateAsString = Weave.stringify(sessionState,null,3);
        this.settings.activeNodeValue.state = sessionStateAsString;
  }


  changeSessionValue(e){
        var value = this.settings.activeNodeValue.state;
       // var ss = this.selectedData.state ;//to identify the state of the object so that view wont affect
        value = JSON.parse(value);
        Weave.setState(this.selectedData,value);
       /* if((typeof(ss) !== 'number' ) && (typeof(ss) !== 'string' ) && (typeof(ss) !== 'boolean' )){
            value = JSON.parse(value);
            Weave.setState(this.selectedData,value);
        }else{
           this.selectedData.state = value;
        }*/

        this.forceUpdate();
  }

  saveFile(){
    var archive  = weavejs.core.WeaveArchive.createArchive(weave)
    var uint8Array = archive.serialize();
    var arrayBuffer  = uint8Array.buffer;
    window.saveAs(new Blob([arrayBuffer]), "test.weave");
  }



  openFile(e) {
        const selectedfile = e.target.files[0];
        // Build Promise List, each promise resolved by FileReader.onload.

        new Promise(function (resolve, reject) {
                let reader = new FileReader();

                reader.onload = function (event) {
                    // Resolve both the FileReader result and its original file.
                    resolve([event, selectedfile]);
                };

                // Read the file.
                reader.readAsArrayBuffer(selectedfile);
            })
            .then(function (zippedResults) {
                // Run the callback after all files have been read.
                var e = zippedResults[0];
                var result = e.target.result;
                // read the content of the file with JSZip
                 weavejs.core.WeaveArchive.loadFileContent(weave,result);

            });
    }



  render() {



    var applyButtonStyle = {
        marginTop:"4px",
        marginLeft:"2px",
        borderStyle:"solid",
        borderRadius:"4px",
        borderWidth:"1px",
        borderColor:"grey",
        float:"right",
        padding:"4px",
        cursor:"pointer",
        fontSize:"12px",
        position:"relative"
    }
    var inputButtonStyle = {
        width: "100%",
        opacity: "0",
        overflow: "hidden",
        position: "absolute",
        left:"0",
        top:"2px",
        bottom:"2px"
    }

    return ( <weavereact.Modal settings={this.settings.modalConfig} keyPress="true" title="Session State Editor">

                <div style={{height:"90%",width:"100%",display: "flex", position: "relative", overflow: "hidden"}}>
                    <weavereact.SplitPane split="vertical" minSize="50" defaultSize="100">
                        <TreeSection tree={this.tree} settings={this.settings} nodeClick={this.nodeClick}/>
                        <NodeView activeNodeValue={this.settings.activeNodeValue}/>
                    </weavereact.SplitPane>
                </div>
                <div style={applyButtonStyle} onClick={this.changeSessionValue}> Apply </div>
                <div style={applyButtonStyle} onClick={this.saveFile}>< i className = "fa fa-fw fa-download"  > < /i > Download </div>
                <div style={applyButtonStyle}>
                    <input onChange={this.openFile} type='file' style={inputButtonStyle}/>
                    < i className = "fa fa-fw fa-upload"  > < /i > Uplaod
                </div>

            </weavereact.Modal>
            );
    }

}
export default SessionEditor;
