import React, { Component, useState } from 'react';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        mesaActiva: undefined,
        pedidos: []
    };
  }

  render() {
    return (
      <div className="text-center d-flex flex-column align-items-center">
        <a className="w-75" style={{color: '#f0ad4e'}} href="/ingresarPedidos">
          <button className="btn btn-primary btn-lg w-100 my-3" type="button">Ingreso de Pedidos</button></a>
        <a className="w-75" style={{color: '#f0ad4e'}} href="/pendientes">
          <button className="btn btn-primary btn-lg w-100 my-3" type="button">Pedidos Pendientes</button></a>
        <a className="w-75" style={{color: '#f0ad4e'}} href="/inventario">
          <button className="btn btn-primary btn-lg w-100 my-3" type="button">Inventario de Ingredientes</button></a>
        <a className="w-75" style={{color: '#f0ad4e'}} href="/layout">
          <button className="btn btn-primary btn-lg w-100 my-3" type="button">Layout</button></a>
        <button className="btn btn-primary btn-lg w-75 my-3" type="button" data-toggle="modal" data-target="#pswModal">Registro</button>
        <div className="modal fade" id="pswModal" tabIndex={-1} role="dialog" aria-labelledby="pswModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="pswModalLabel">Ingresar Contraseña</h5><button className="close" type="button" data-dismiss="modal"><span aria-hidden="true">×</span></button>
              </div>
              <div className="modal-body"><span>Contraseña: <input type="password" size={10} maxLength={10} /></span><br /><a className="w-75" style={{color: '#f0ad4e'}} href="/registro"><button className="btn btn-primary my-2 w-50" type="button">Entrar</button></a></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default IndexPage;