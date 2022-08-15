import React from 'react';
import parametrosGlobales from "../parametrosGlobales.js";
let mesas = parametrosGlobales.constants.mesas;

function MenuPoS(props) {

  const getImageName = () => {
    let sufix = props.paraLlevar===true?"On":"Off";
    return sufix + '.png';
  }

  const getClassName = () => {
    let className = props.paraLlevar?'btn btn-success px-0 py-0':'btn btn-light px-0 py-0';
    return className;
  }

  return (
    <div className="container-md py-1">
      <div className="row">
        <div className="col-8 col-lg-4">
          <div className="btn-group w-100">
            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              {props.mesaSeleccionada}
            </button>
            <ul className="dropdown-menu pos-dropdown-list">
              {mesas.map(mesa => (
                <li key={mesa.name}><a className="dropdown-item pos-dropdown-item" href="#" onClick={(event)=>props.onSelectMesa(event)}>{mesa.name}</a></li>
              ))
              }
            </ul>
          </div>
        </div>
        {/* <div className="col-4">
          <div className="btn-group w-100">
            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              {this.state.clienteSeleccionado}
            </button>
            <ul className="dropdown-menu pos-dropdown-list">
              {clientes.map(cliente => (
                <li key={cliente.name}><a className="dropdown-item pos-dropdown-item" href="#" onClick={this.onSelectCliente}>{cliente.name}</a></li>
              ))
              }
            </ul>
          </div>
        </div> */}
        <div className="col-1">
          <div className="btn-group w-100">
            <button className={getClassName("paraLlevar")} onClick={props.onClickParaLLevar}>
              <img className="para-llevar" src={"/images/llevar"+ getImageName()} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuPoS;