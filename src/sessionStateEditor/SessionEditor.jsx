
import SessionEditorConfig from "./SessionEditorConfig";



class SessionEditor extends React.Component {

  constructor(props) {
    super(props);
    this.settings =  this.props.settings?this.props.settings:new SessionEditorConfig();
    this.nodeClick = this.nodeClick.bind(this);
    this.changeSessionValue = this.changeSessionValue.bind(this);
    this.tree =  weavejs.WeaveAPI.SessionManager.getSessionStateTree(this.props.sessionState);
    this.tree.label = "Weave";
    this.nodeValue = "";
    this.selectedData;
  }

  componentDidMount(){
    Weave.getCallbacks(this.settings).addGroupedCallback(this, this.forceUpdate);
    this.settings.activeNodeValue.addImmediateCallback(this, this.forceUpdate);

    Weave.getCallbacks(this.tree).addGroupedCallback(this, this.forceUpdate);
  }

  componentWillUnmount () {
    Weave.getCallbacks(this.settings).removeCallback(this, this.forceUpdate);
    this.settings.activeNodeValue.removeCallback(this, this.forceUpdate);

    Weave.getCallbacks(this.tree).removeCallback(this, this.forceUpdate);
  }


  nodeClick(node){
    if(node.children){

    }else{
        this.selectedData =  node.data;
        this.settings.activeNodeValue.state =  node.data.value;
    }
  }

  changeSessionValue(e){
    this.selectedData.state = e.target.value;
    this.settings.activeNodeValue.state = e.target.value;
    this.forceUpdate()
  }

  render() {

    var treeUI = "";
    if(this.tree){
        treeUI = <weavereact.Tree data={this.tree} label="label" nodes="children"  clickCallback={this.nodeClick} settings={this.settings.treeConfig} dataTypesMap={this.settings.dataTypesMap} getDataType={this.settings.getDataType}/>
    }

    var treeContainerStyle = {
        width:"72%",
        height:"100%",
        borderStyle:"solid",
        borderRadius:"2px",
        borderWidth:"1px",
        borderColor:"grey",
        float:"left",
        overflowY: 'scroll',
        overflowX: 'scroll',
        padding:"4px"
    }
    var resultContainerStyle = {
        width:"24%",
        height:"100%",
        borderStyle:"solid",
        borderRadius:"2px",
        borderWidth:"1px",
        borderColor:"grey",
        float:"right",
        overflowY: 'scroll',
        overflowX: 'scroll',
         padding:"4px"
    }

    return ( <weavereact.Modal settings={this.settings.modalConfig} keyPress="true">
                <div style={{display:"inline-block",width:"100%"}}>
                    <div style={treeContainerStyle}>
                        {treeUI}
                    </div>
                    <span style={resultContainerStyle}>
                        <textarea style={{width:"100%",height:"100%",border:"none"}} value={this.settings.activeNodeValue.state} onChange={this.changeSessionValue}/>
                    </span>
                </div>

            </weavereact.Modal>
            );
    }

}
export default SessionEditor;
