
import React from "react";
import {Tree} from "weavereact";


class TreeSection extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount(){
    Weave.getCallbacks(this.props.tree).addGroupedCallback(this, this.forceUpdate);
  }

  componentWillUnmount () {
    Weave.getCallbacks(this.props.tree).removeCallback(this, this.forceUpdate);
  }

    componentWillReceiveProps(nextProps){
        if(this.props.tree !== nextProps.tree){// tree value will swithc between null and sessionstate tree, when new file is loaded
             if(this.props.tree)Weave.getCallbacks(this.props.tree).removeCallback(this, this.forceUpdate);
            if(nextProps.tree){
                Weave.getCallbacks(nextProps.tree).addGroupedCallback(this, this.forceUpdate);
            }
            else{
                this.props.settings.treeConfig.rootNode.reset();
            }

        }
    }


  render() {

    var treeUI = "";
    if(this.props.tree){
        treeUI = <Tree data={this.props.tree} label="label" nodes="children"  clickCallback={this.props.nodeClick} settings={this.props.settings.treeConfig} dataTypesMap={this.props.settings.dataTypesMap} getDataType={this.props.settings.getDataType}/>
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
