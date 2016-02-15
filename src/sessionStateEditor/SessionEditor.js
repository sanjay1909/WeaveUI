import React from "react";
import {Modal} from "weavereact";
import {SplitPane} from "weavereact";
import SessionEditorConfig from "./SessionEditorConfig";
import TreeSection from "./TreeSection";
import NodeView from "./NodeView";


export default class SessionEditor extends React.Component {

    constructor(props) {
        super(props);
        this.settings =  this.props.settings?this.props.settings:new SessionEditorConfig();
        this.tree =  weavejs.WeaveAPI.SessionManager.getSessionStateTree(this.props.root);
        this.tree.label = "Weave";

        this.changeSessionValue = this.changeSessionValue.bind(this);
        this.nodeClick = this.nodeClick.bind(this);
        this.saveFile = this.saveFile.bind(this);
        this.openFile = this.openFile.bind(this);
        this.selectedData;// to-do:try with linkableWatcher and add forceUpdate to that watcher
    }

    componentDidMount(){

    }

    componentWillUnmount () {

    }



    componentWillReceiveProps(nextProps){

    }

    nodeClick(node){
        this.selectedData = node.data;
        var state = Weave.getState(node.data);
        var str;
        if (node.data instanceof weavejs.core.LinkableString)
        	str = state;
        else
        	str = Weave.stringify(state, null, '\t', true);
        this.settings.activeNodeValue.state = str;
  }


  changeSessionValue(e){
        var value = this.settings.activeNodeValue.state;
        if (this.selectedData instanceof weavejs.core.LinkableString)
        	this.selectedData.value = value;
        else
        	Weave.setState(this.selectedData, JSON.parse(value));

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
        // this indicated new weave is getting loaded
        // important to set
        this.tree = null;
        this.settings.activeNodeValue.state = "";
        this.forceUpdate();
        var that = this;
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
                that.tree =  weavejs.WeaveAPI.SessionManager.getSessionStateTree(that.props.root);
                that.tree.label = "Weave";
                that.selectedData = null ;// to-do:try with linkableWatcher and add forceUpdate to that watcher
                that.forceUpdate();
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


    return ( <Modal settings={this.settings.modalConfig} keyPress="true" title="Session State Editor">

                <div style={{height:"90%",width:"100%",display: "flex", position: "relative", overflow: "hidden"}}>
                    <SplitPane split="vertical" minSize="50" defaultSize="256">
                        <TreeSection tree={this.tree} settings={this.settings}  nodeClick={this.nodeClick}/>
                        <NodeView activeNodeValue={this.settings.activeNodeValue}/>
                    </SplitPane>
                </div>
                <div style={applyButtonStyle} onClick={this.changeSessionValue}> Apply </div>
                <div style={applyButtonStyle} onClick={this.saveFile}>< i className = "fa fa-fw fa-download"  > < /i > Save </div>
                <div style={applyButtonStyle}>
                    <input onChange={this.openFile} type='file' style={inputButtonStyle}/>
                    < i className = "fa fa-fw fa-upload"  > < /i > Load
                </div>

            </Modal>
            );
    }

}
