import React from "react";


class TestSpan extends React.Component {

    constructor(props) {
        super(props)
        this.settings = this.props.settings;

    }

    componentDidMount(){
        this.settings.addImmediateCallback(this,this.forceUpdate);
    }

    componentWillUnMount(){
        this.settings.removeCallback(this,this.forceUpdate);
    }



    render() {

        return (<div>
                    <span>{this.settings.state}</span>
                </div>
        );

    }
}

export default TestSpan;
