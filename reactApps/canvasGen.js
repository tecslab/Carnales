import React, { Component } from 'react';
import OrderCard from './orderCardGen';
import Mesa from './mesaGen';


class Canvas extends Component {
    constructor(props){
        super(props);
        this.setModal = this.setModal.bind(this);
        this.state = { modal: false };
    }

    setModal(e){
        if (e.target.className=="modal-background" || e.target.className.slice(0,4)=='mesa'){
            this.setState({modal:!this.state.modal});
        }
    }
    
    render(){
        return(
        <div id="plano">
            {this.state.modal==true &&
                <div className="modal-background" onClick={this.setModal}>
                    <div className="modal-card">
                        <OrderCard/>
                    </div>
                </div>
            }
            <Mesa setModal={this.setModal} modalID='modal' value="Mesa 1" mesaType="mesa" id ="mesa1"/>
            <Mesa setModal={this.setModal} modalID='modal' value="Mesa 2" mesaType="mesa" id ="mesa2" />
            <Mesa setModal={this.setModal} modalID='modal' value="Mesa 3" mesaType="mesa" id ="mesa3" />
            <Mesa setModal={this.setModal} modalID='modal' value="Mesa 4" mesaType="mesa" id ="mesa4" />
            <Mesa setModal={this.setModal} modalID='modal' value="Mesa 5" mesaType="mesa" id ="mesa5" />
            <Mesa setModal={this.setModal} modalID='modal' value="Mesa 6" mesaType="mesa" id ="mesa6" />
            <Mesa setModal={this.setModal} modalID='modal' value="Mesa 7" mesaType="mesaV" id ="mesa7" /> 
        </div>
        )
    }    
}

export default Canvas;