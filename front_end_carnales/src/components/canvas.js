import React, { Component, useState } from 'react';
import OrderCard from './orderCard';
import Mesa from './mesa';
import conf from '../conf';

let urlBack =  conf.urlBack;

let planoSize = {height: "932px", width:"623px"}

let mesas = [
    {nombre: "Ventana", height:"30px", width:"205px", left:"39px", top:"0px", giro:"359deg", mesaType:"ventana", id:"ventana"},
    {nombre: "Mesa 1", height:"51px", width:"120px", left:"292px", top:"93px", giro:"0turn", mesaType:"mesa", id:"mesa1"},
    {nombre: "Mesa 2", height:"51px", width:"120px", left:"500px", top:"93px", giro:"0turn", mesaType:"mesa", id:"mesa2"},
    {nombre: "Mesa 3", height:"51px", width:"120px", left:"292px", top:"263px", giro:"0turn", mesaType:"mesa", id:"mesa3"},
    {nombre: "Mesa 4", height:"51px", width:"120px", left:"500px", top:"342px", giro:"0turn", mesaType:"mesa", id:"mesa4"},
    {nombre: "Mesa 5", height:"51px", width:"120px", left:"476px", top:"629px", giro:"0turn", mesaType:"mesa", id:"mesa5"},
    {nombre: "Mesa 6", height:"51px", width:"120px", left:"476px", top:"810px", giro:"0turn", mesaType:"mesa", id:"mesa6"},
    {nombre: "Mesa 7", height:"120px", width:"60px", left:"261px", top:"647px", giro:"0turn", mesaType:"mesa", id:"mesa7"},
]

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
        console.log(urlBack + '/api/newPedidos/mesa/' + idMesa);
        fetch(urlBack + '/api/newPedidos/mesa/' + idMesa)
            .then(response => response.json())
            .then(data => {
                this.setState({ pedidos: data });
                console.log(data);
            }).catch(e=>{
                console.log(e);
            });
            /* .then(res => {
                console.log('Respuesta: ');
                console.log(res.json());
            })
            .then(data => {
                this.setState({ pedidos: data });
                console.log(this.state.pedidos);
                console.log('..recibido');
            }).catch(e=>{
                console.log(e);
            }) */
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
                    {mesas.map(mesa => (
                        <Mesa toggleLayout={this.toggleLayout} modalID='modal' value={mesa.nombre} mesaType={mesa.mesaType} id={mesa.id} mesaInfo={mesa}/>
                    ))
                    }
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
        if (higherThanVP === true) {
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
        {pedidos!==undefined &&
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