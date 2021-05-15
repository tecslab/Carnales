import React, { Component } from 'react';
import OrderCard from './orderCardGen';
import Mesa from './mesaGen';


class Canvas extends Component {
    constructor(props) {
        super(props);
        this.toggleLayout = this.toggleLayout.bind(this);
        this.state = {
            modal: false,
            mesaActiva: undefined,
            pedidos: []
        };
    }

    toggleLayout(e, idMesa) {
        // Set/unset the modal
        // There was created the attribute 'clickeable' in the elements that must react to the modal
        try {
            var code = e.target.attributes.clickeable.value;
        } catch (e) {
            return null;
        }
        if (code == "true") {
            this.setState({ modal: !this.state.modal });
            this.setState({ mesaActiva: idMesa });
        }
        // Request the orders for the table selected
        console.log('recibiendo pedido...');
        fetch('/api/newPedidos/mesa/' + idMesa)
            .then(res => res.json())
            .then(data => {
                this.setState({ pedidos: data });
                console.log(this.state.pedidos);
                console.log('..recibido');
            });
    }

    render() {
        return (
            <div id="plano">
                {this.state.modal == true &&
                    <div id="modal-background" clickeable="true" className="modal-background" onClick={(e) => this.toggleLayout(e, this.state.mesaActiva)}>
                        <div clickeable="true" className="horizontal-slider-container">
                            {
                                this.state.pedidos.map(pedido => {
                                    return (
                                        <div className="modal-card" key={pedido.numPedido}>
                                            <OrderCard pedido={pedido} />
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                }
                <Mesa toggleLayout={this.toggleLayout} modalID='modal' value='Ventana' mesaType='ventana' id="ventana" />
                <Mesa toggleLayout={this.toggleLayout} modalID='modal' value="Mesa 1" mesaType="mesa" id="mesa1" />
                <Mesa toggleLayout={this.toggleLayout} modalID='modal' value="Mesa 2" mesaType="mesa" id="mesa2" />
                <Mesa toggleLayout={this.toggleLayout} modalID='modal' value="Mesa 3" mesaType="mesa" id="mesa3" />
                <Mesa toggleLayout={this.toggleLayout} modalID='modal' value="Mesa 4" mesaType="mesa" id="mesa4" />
                <Mesa toggleLayout={this.toggleLayout} modalID='modal' value="Mesa 5" mesaType="mesa" id="mesa5" />
                <Mesa toggleLayout={this.toggleLayout} modalID='modal' value="Mesa 6" mesaType="mesa" id="mesa6" />
                <Mesa toggleLayout={this.toggleLayout} modalID='modal' value="Mesa 7" mesaType="mesaV" id="mesa7" />
            </div>
        )
    }
}

export default Canvas;