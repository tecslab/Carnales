import React, { Component } from 'react';

class Mesa extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
    }

    classPositionSize() {
      //color: "white",
      //backgroundColor: "DodgerBlue",
      return {
        position: "absolute",
        height:this.props.mesaInfo.height,
        width:this.props.mesaInfo.width,
        left: this.props.mesaInfo.left,
        top: this.props.mesaInfo.top,}
    };

    classSize() {
      return {
        height:this.props.mesaInfo.height,
        width:this.props.mesaInfo.width}
    };

    render() {
        return (
            // <div className={this.props.mesaType + ' mesa-wrapper'} id={this.props.id}>
            <div className='mesa-wrapper'  style={this.classPositionSize()}>
                {/* <input clickeable="true" onClick={(e) => this.props.toggleLayout(e, this.props.id)} className={this.props.mesaType + ' btn btn-info py-0 px-0'} type="button" value={this.props.value} /> */}
                <input clickeable="true" onClick={(e) => this.props.toggleLayout(e, this.props.id)} className={'btn btn-info py-0 px-0'} style={this.classSize()} type="button" value={this.props.value} />
            </div>
        )
    }
}

export default Mesa;