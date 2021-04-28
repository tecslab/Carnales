import React, { Component } from 'react';

class Mesa extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            };
    }

    render(){
        return(
            <div className={this.props.mesaType + ' mesa-wrapper'} id={this.props.id}>
                    <input onClick={(e) => this.props.setModal(e)} className={this.props.mesaType + ' btn btn-info'} type="button" value={this.props.value} />
            </div>
            )
    }    
}

export default Mesa;