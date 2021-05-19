import React, { Component } from 'react';

const styleObj = {
    fontSize: 14,
    color: "#4a54f1",
    textAlign: "center",
    paddingTop: "100px",
}

class OrderCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            test: '2'
        };
        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
        this.myInput = React.createRef();
    }

    componentDidMount() {
        let cardSize = this.myInput.current.offsetHeight;
        let viewPortHeight = window.innerHeight;
        if (cardSize > viewPortHeight) {
            dispatchEvent(this.props.winEvent);
        }
    }

    getKey() {
        return this.keyCount++;
    }

    getMesaName(idMesa) {
        var name = '';
        if (idMesa == 'ventana') {
            name = 'Ventana';
        } else {
            name = 'Mesa ' + idMesa.slice(4);
        }
        return name;
    }

    /*  //*
      las personas que se han convertido en un ser tracendental a medias, un ser tracendental no puede
  */
    render() {
        return (
            <div ref={this.myInput}>
                <div className="card rounded border-dark">
                    <div className="card-header p-1" style={{ backgroundColor: "green", }}>
                        <span className="m-0" style={{ fontSize: "18px" }}><strong>#{this.props.pedido.numPedido}</strong></span>
                        <span className="crono" style={{ color: "white", marginLeft: "25%" }}>1min21seg</span>
                        <p className="m-0 text-center"><strong>{this.getMesaName(this.props.pedido.mesa)}</strong></p>
                    </div>

                    {
                        this.props.pedido.clientes.map(cliente => {
                            return (
                                //Review if this key is right
                                <div className="cliente" key={cliente.nombre}>
                                    <ul className="list-group list-group-flush">
                                        {
                                            cliente.productos.map(producto => {
                                                return (
                                                    <li className="list-group-item" style={{ margin: "0", padding: '1px' }} key={this.getKey()}>
                                                        <p className="mx-1" style={{ marginBottom: "5px" }}>
                                                            {producto.Categoria + ' ' + producto.Variedad}
                                                            <span className="badge badge-pill badge-warning">
                                                                x{producto.Cantidad}
                                                            </span>

                                                            {
                                                                producto.Observacion != "" &&
                                                                <span>
                                                                    <br></br><span className="my-0 mx-4" style={{ color: "red" }}>
                                                                        {producto.Observacion}
                                                                    </span>
                                                                </span>
                                                            }
                                                        </p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    {
                                        this.props.pedido.separarCuentas == true &&
                                        <h4 className="text-center" style={{ margin: "0" }}>${cliente.cuenta}</h4>
                                    }
                                </div>
                            )
                        })
                    }
                    {
                        this.props.pedido.separarCuentas != true &&
                        <h4 className="text-center" style={{ margin: "0" }}>${this.props.pedido.total}</h4>
                    }
                    <div className="card-footer">
                        <button style={{ marginBottom: "5px" }} className="btn btn-success w-100 listo">Listo ✔</button>
                        <button style={{ marginBottom: "5px" }} className="btn btn-success w-100 listo">Editar</button>
                        <button style={{ margingBottom: "5px" }} className="btn btn-success w-100 listo">Eliminar </button>
                    </div>
                </div>
            </div>


        )
    }
}


{/* <ul className="list-group list-group-flush">
                    {
                        this.state.pedidos.canasta.map(producto =>{
                            return(
                                <p className="mx-1" style={{marginBottom:"5px",}}>Taco Chingón
                                    <span className="badge badge-pill badge-warning text-right">x2</span>
                                    <br/>
                                    <span className="my-0 mx-4" style={{color:"red",}}>Sin Cebolla</span>
                                </p>
                            )
                        })
                    }
                </ul> */}




export default OrderCard;