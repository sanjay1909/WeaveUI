
import SessionEditorConfig from "./SessionEditorConfig";
import React from "react";
import weavereact from "weavereact";


class SessionEditor extends React.Component {

  constructor(props) {
    super(props);
    this.settings =  this.props.settings?this.props.settings:new SessionEditorConfig();
    this.nodeClick = this.nodeClick.bind(this);
    this.changeSessionValue = this.changeSessionValue.bind(this);
    this.saveFile = this.saveFile.bind(this);
    this.textAreaChange = this.textAreaChange.bind(this);
    this.tree =  weavejs.WeaveAPI.SessionManager.getSessionStateTree(this.props.sessionState);
    this.tree.label = "Weave";
    this.nodeValue = "";
    this.selectedData;
  }

  componentDidMount(){
    Weave.getCallbacks(this.settings).addGroupedCallback(this, this.forceUpdate);
    weavejs.WeaveAPI.SessionManager.addTreeCallback(this, this.forceUpdate);
    this.settings.activeNodeValue.addImmediateCallback(this, this.forceUpdate);
  }

  componentWillUnmount () {
    Weave.getCallbacks(this.settings).removeCallback(this, this.forceUpdate);
    this.settings.activeNodeValue.removeCallback(this, this.forceUpdate);
    weavejs.WeaveAPI.SessionManager.removeTreeCallback(this, this.forceUpdate);
 // Weave.getCallbacks(this.tree).removeCallback(this, this.forceUpdate);
  }


  nodeClick(node){
        this.selectedData = node.data;
        var sessionState = Weave.getState(node.data);
        var sessionStateAsString = Weave.stringify(sessionState,null,3);
        this.settings.activeNodeValue.state = sessionStateAsString;
  }

  changeSessionValue(e){
        var value = this.settings.activeNodeValue.state;
        var ss = this.selectedData.state ;//to identify the state of the object so that view wont affect
        if((typeof(ss) !== 'number' ) && (typeof(ss) !== 'string' ) && (typeof(ss) !== 'boolean' )){
            value = JSON.parse(value);
            Weave.setState(this.selectedData,value);
        }else{
           this.selectedData.state = value;
        }

        this.forceUpdate();
  }

  saveFile(){
    var archive  = weavejs.core.WeaveArchive.createArchive(weave)
    window.saveAs(this.serialize(archive), "test.weave");
  }

  serialize(archive){
      var  zip = new weavejs.util.JS.JSZip();
      var  name;
      var  folder;
      folder = zip.folder(weavejs.core.WeaveArchive.FOLDER_FILES);
      for (name in archive.files)
        folder.file(name, archive.files[name]);
      folder = zip.folder(weavejs.core.WeaveArchive.FOLDER_JSON);
      for (name in archive.objects)
        folder.file(name, JSON.stringify(archive.objects[name]));
      return zip.generate({type:'blob'});
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

  textAreaChange(e){
        this.settings.activeNodeValue.state = e.target.value;
        this.forceUpdate()
  }

  render() {

    var treeUI = "";
    if(this.tree){
        treeUI = <weavereact.Tree data={this.tree} label="label" nodes="children"  clickCallback={this.nodeClick} settings={this.settings.treeConfig} dataTypesMap={this.settings.dataTypesMap} getDataType={this.settings.getDataType}/>
    }

    var treeContainerStyle = {
        width:"100%",
        height:"100%",
        borderStyle:"solid",
        borderRadius:"4px",
        borderWidth:"1px",
        borderColor:"grey",
        overflowY: 'scroll',
        overflowX: 'scroll',
        padding:"4px"
    }
    var resultContainerStyle = {
        width:"100%",
        height:"100%",
        borderStyle:"solid",
        borderRadius:"4px",
        borderWidth:"1px",
        borderColor:"grey",
        overflowY: 'scroll',
        overflowX: 'scroll',
        padding:"4px"
    }
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
                        <div style={treeContainerStyle}>
                            {treeUI}
                        </div>
                        <div style={resultContainerStyle}>
                            <textarea style={{width:"100%",height:"100%",border:"none"}} value={this.settings.activeNodeValue.state} onChange={this.textAreaChange} />
                        </div>
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
