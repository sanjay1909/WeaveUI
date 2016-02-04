
import React from "react";
import weavereact from "weavereact";


class TreeSection extends React.Component {

  constructor(props) {
    super(props);
    this.settings = this.props.settings;

  }

  componentDidMount(){
    weavejs.WeaveAPI.SessionManager.addTreeCallback(this, this.forceUpdate);
    this.settings.activeNodeValue.addImmediateCallback(this, this.forceUpdate);
  }

  componentWillUnmount () {
    weavejs.WeaveAPI.SessionManager.removeTreeCallback(this, this.forceUpdate);
    this.settings.activeNodeValue.removeCallback(this, this.forceUpdate);
  }




  render() {

    var treeUI = "";
    if(this.props.tree){
        treeUI = <weavereact.Tree data={this.props.tree} label="label" nodes="children"  clickCallback={this.props.nodeClick} settings={this.settings.treeConfig} dataTypesMap={this.settings.dataTypesMap} getDataType={this.settings.getDataType}/>
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


    return ( <div style={treeContainerStyle}>
                            {treeUI}
                </div>
            );
    }

}
export default TreeSection;
