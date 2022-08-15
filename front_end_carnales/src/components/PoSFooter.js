import React from 'react';
import _ from 'lodash';

function PoSFooter(props) {

  const onClickContinuar = event =>{
    //in:  producto:{instanceID, name, precio, cliente, observaciones}[];
    // Los pedidos están compuestos por varias canastas de productos según cada cliente
    let canastas = [];
    let productosNoProcesados = props.bufferProductos;
    // Separa los productos en el buffer en diferentes canastas según los comensales
    //FORMATO out: {cliente, productos[]}
    while (productosNoProcesados.length>0){
      let nombreClienteProducto = productosNoProcesados[0].cliente;
      let selectedProducts = productosNoProcesados.filter(producto => producto.cliente === nombreClienteProducto);
      productosNoProcesados = productosNoProcesados.filter(producto => producto.cliente !== nombreClienteProducto);
      // Procesa los elementos seleccionados      
      let productos = [];
      selectedProducts.forEach(producto => productos.push({name:producto.name, eliminables: producto.eliminables, opciones: producto.opciones})) // añadir observaciones aqui
      // Se resumen los productos de cada cliente:
      // Formato: {name, cantidad, eliminables, opciones}]
      let resumenProductos = resumirProductos(productos);
      //let newCanasta = {cliente: nombreClienteProducto, productos:resumenProductos};
      let newCanasta = {productos:resumenProductos};
      canastas.push(newCanasta);
    }

    let pedido = {
      mesa: props.mesaSeleccionada,
      canastas: canastas,
      cuentaTotal: props.cuentaTotal,
      paraLlevar: props.paraLlevar
    }
    props.lanzarModalResumen(pedido);
  }

  const resumirProductos = arrayProductos => {
    //in-> [{instanceID, name, precio, cliente, observaciones}]
    //out-> [{name, cantidad, observaciones}]
    let newArrayProductos = [];
    while (arrayProductos.length>0){
      let productoAProcesar = {...arrayProductos[0]};
      let selectedProducts = arrayProductos.filter(producto => _.isEqual(producto, productoAProcesar)); // Existe forma de contar sin filtrar?
      arrayProductos = arrayProductos.filter(producto => !_.isEqual(producto, productoAProcesar));
      //let newProducto = {name: productoAProcesar.name, observacion:productoAProcesar.observacion, cantidad: selectedProducts.length}
      let newProducto = {name: productoAProcesar.name, cantidad: selectedProducts.length, eliminables: productoAProcesar.eliminables, opciones: productoAProcesar.opciones };
      newArrayProductos.push(newProducto);
    }
    return newArrayProductos;
  }

  return (
    <div className="container-md pt-3">
      <div className="row">
        <div className="col-6 checkout-container text-end">
          <h2>
            Total: ${props.cuentaTotal}
          </h2>
        </div>
        <div className="col-6 checkout-container">
          <button className="btn btn-success btn-lg w-75" onClick={onClickContinuar}>
          CONTINUAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default PoSFooter;