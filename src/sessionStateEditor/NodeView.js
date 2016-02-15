import React from "react";


class NodeView extends React.Component {

  constructor(props) {
    super(props);


    this.textAreaChange = this.textAreaChange.bind(this);

  }

  componentDidMount(){
    this.props.activeNodeValue.addImmediateCallback(this,this.forceUpdate);
  }

  componentWillUnmount () {
    this.props.activeNodeValue.removeCallback(this,this.forceUpdate);
  }



  textAreaChange(e){
    this.props.activeNodeValue.state = e.target.value;
  }

  render() {

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


    return ( <div style={resultContainerStyle}>
                <textarea style={{width:"100%",height:"100%",border:"none"}} value={this.props.activeNodeValue.state} onChange={this.textAreaChange} />
            </div>
            );
    }

}
export default NodeView;
