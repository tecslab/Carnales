import React, { Component, useState } from 'react';
import OrderCard from './orderCardGen';
import Mesa from './mesaGen';
import conf from '../conf';

let urlBack =  conf.urlBack;

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
        fetch(urlBack + '/api/newPedidos/mesa/' + idMesa)
            .then(res => console.log(res))
            .then(data => {
                this.setState({ pedidos: data });
                console.log(this.state.pedidos);
                console.log('..recibido');
            })            
    }

    render() {
        return (
            <div className="canvas-container">
                <div id="plano">
                    {this.state.modal === true &&
                        <div id="modalBackground" clickeable="true" className="modal-background" onClick={(e) => this.toggleLayout(e, this.state.mesaActiva)}>
                            <HorizontalSliderContainer clickeable={"true"} pedidos={this.state.pedidos} />;
                        </div>
                    }
                    <Mesa toggleLayout={this.toggleLayout} modalID='modal' value='Ventana' mesaType='ventana' id="ventana" />
                    <Mesa toggleLayout={this.toggleLayout} modalID='modal' value="Mesa 1" mesaType="mesa" id="mesa1" />
                    <Mesa toggleLayout={this.toggleLayout} modalID='modal' value="Mesa 2" mesaType="mesa" id="mesa2" />
                    <Mesa toggleLayout={this.toggleLayout} modalID='modal' value="Mesa 3" mesaType="mesa" id="mesa3" />
                    <Mesa toggleLayout={this.toggleLayout} modalID='modal' value="Mesa 4" mesaType="mesa" id="mesa4" />
                    <Mesa toggleLayout={this.toggleLayout} modalID='modal' value="Mesa 5" mesaType="mesa" id="mesa5" />
                    <Mesa toggleLayout={this.toggleLayout} modalID='modal' value="Mesa 6" mesaType="mesa" id="mesa6" />
                    <Mesa toggleLax yout={this.toggleLayout} modalID='modal' value="Mesa 7" mesaType="mesaV" id="mesa7" />
                </div>
            </div>
        )
    }
}

const HorizontalSliderContainer = ({ clickeable, pedidos }) => {
    const [higherThanVP, setHigher] = useState(
        false
    );

    const bigOrder = new CustomEvent('bigOrder');

    const handleCEvent = (event) => {
        setHigher(true);
        console.log('Custom event launched');
    }

    const getClass = () => {
        let elementClass = "horizontal-slider-container";
        if (higherThanVP == true) {
            elementClass = "horizontal-slider-container-big-card";
        }
        return elementClass;
    }

    // useReducer to use toggles
    React.useEffect(() => {
        window.addEventListener('bigOrder', handleCEvent);
        // cleanup this component
        return () => {
            window.removeEventListener('bigOrder', handleCEvent);
        };
        // [] this is to execute it only the first time
    }, []);

    return <div clickeable={clickeable} className={getClass()}>
        {
            pedidos.map(pedido => {
                return (
                    <div className="modal-card" key={pedido.numPedido}>
                        <OrderCard pedido={pedido} winEvent={bigOrder} />
                    </div>
                )
            })
        }
    </div>
};

export default Canvas;