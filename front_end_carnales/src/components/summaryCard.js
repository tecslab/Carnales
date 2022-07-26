import React, { Component } from 'react';
import parametrosGlobales from "../parametrosGlobales.js";

let productos = parametrosGlobales.constants.productos;
let ingredientes = parametrosGlobales.constants.ingredientes;


//FORMATO: {canastas:[ { productos:[ {name, cantidad, eliminables, opciones} ] } ], mesa}

class SummaryCard extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  getProductByName = productName => {
    let productoEncontrado = productos.find(producto => producto.name = productName)[0];
    return productoEncontrado;
  }

  getIngredienteById = ingredienteId =>{
    return ingredientes.find(ingrediente => ingrediente.id===ingredienteId)
  }

  getDetallesProducto = producto => {
    let detalles = "";
    producto.eliminables.forEach( eliminable => {
      let ingrediente = this.getIngredienteById(eliminable.idIngrediente);
      if (eliminable.estado===false){
        detalles = detalles + "Sin " + ingrediente.nombre + ", ";
      }
    });

    producto.opciones.forEach(opcion=>{
      if (opcion.estado!==opcion.default){
        detalles = detalles + opcion.nombre + ", ";
      }
    })
    if (detalles!==""){
      detalles = detalles.slice(0,detalles.length-2)
      return(<span>
        <br></br><span className="my-0 mx-4" style={{ color: "red" }}>
            {detalles}
        </span>
      </span>)
    }
    return(<></>)
  }

  render() {
    return (
      <div>
        <div className="card rounded border-dark">
          <div className="card-header p-1" style={{ backgroundColor: "green", }}>
            {/* <span className="crono" style={{ color: "white", marginLeft: "25%" }}>1min21seg</span> */}
            <p className="m-0 text-center"><strong>{this.props.pedido.mesa}</strong></p>
          </div>
          {
            this.props.pedido.canastas.map(canasta => {
              return (
                //Review if this key is right
                <div className="canasta">
                    <ul className="list-group list-group-flush">
                      {
                        canasta.productos.map(producto => {
                            return (
                                <li className="list-group-item" style={{ margin: "0", padding: '1px' }}>
                                    <p className="mx-1" style={{ marginBottom: "5px" }}>
                                        {producto.name}
                                        <span className="badge text-bg-warning">
                                            x{producto.cantidad}
                                        </span>

                                        {this.getDetallesProducto(producto)
                                            
                                        }
                                    </p>
                                </li>
                            )
                        })
                      }
                    </ul>
                    {/* {
                        this.props.pedido.separarCuentas == true &&
                        <h4 className="text-center" style={{ margin: "0" }}>${canasta.cuenta}</h4>
                    } */}
                </div>
              )
            })
          }
          {/* {
            this.props.pedido.separarCuentas != true &&
            <h4 className="text-center" style={{ margin: "0" }}>${this.props.pedido.total}</h4>
          } */}
          <h4 className="text-center" style={{ margin: "0" }}>${this.props.pedido.cuentaTotal}</h4>
          <div className="card-footer">
            <button style={{ marginBottom: "5px" }} className="btn btn-success w-100 listo" onClick={this.props.onClickConfirmarOrden}>Confirmar ✔</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SummaryCard;