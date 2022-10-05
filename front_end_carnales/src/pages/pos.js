import React, { Component } from 'react';
import Header from '../components/header';
import "../stylesheets/pos.css";
import SummaryCard from '../components/summaryCard.js';
import CanastaProductos from '../components/canastaProductos.js';
import MenuPoS from '../components/menuPoS';
import PoSFooter from '../components/PoSFooter';
import SelectorProductos from '../components/selectorProductos';
import parametrosGlobales from "../parametrosGlobales.js";
import Modal from 'react-bootstrap/Modal'

let mesas = parametrosGlobales.constants.mesas;
let clientes = parametrosGlobales.constants.clientes;

class PoS extends Component {
  constructor(props){
    super(props);
    this.state = {
      mesaSeleccionada: mesas[0].name,
      paraLlevar: false,
      clienteSeleccionado: clientes[0].name,
      bufferProductos:[],
      cuentasClientes: [],
      cuentaTotal: (0).toFixed(2),
      showSummaryModal: false,
      //orden: {canastas:[], mesa: mesas[0].name, cuentaTotal:(0).toFixed(2)}
    };
  }

  handleCloseSummaryModal = () => {this.setState({showSummaryModal:false})};

  lanzarModalResumen = (pedido) =>{
    this.setState({
      pedido,
      showSummaryModal:true
    })
  }

  onSelectMesa = (event) => {
    this.setState({ mesaSeleccionada: event.target.text });
  }

  onClickParaLLevar = (event) => {
    this.setState({paraLlevar:!this.state.paraLlevar})
  }

  onClickConfirmarOrden = () => {
    //fetch('http://localhost:4000/api/print', {
    fetch('http://localhost:4000/api/pedidos', {
      method: 'POST', 
      body: JSON.stringify(this.state.pedido),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data =>{
        this.reiniciarPoS();
        console.log(data)
      }).catch(error =>{
      console.log(error);
    });
  }

  reiniciarPoS = () => {
    //Reinicia el PoS para un nuevo pedido
    this.setState ({
      mesaSeleccionada: mesas[0].name,
      paraLlevar:false,
      clienteSeleccionado: clientes[0].name,
      bufferProductos:[],
      cuentasClientes: [],
      cuentaTotal: (0).toFixed(2),
      showSummaryModal: false,
      reiniciarSelectorProductos: true
      //orden: {canastas:[ { productos:[] } ], mesa: mesas[0].name}
    });
  }

  selectorReiniciado = () => {
    this.setState({reiniciarSelectorProductos:false})
  }

  actualizarBufferProductos = bufferProductos => {
    // Actualiza el buffer de productos, la cuenta total y de todos los clientes
    //in: bufferProductos
    let productosNoProcesados = JSON.parse(JSON.stringify(bufferProductos)); // Deep Copy
    let cuentasClientes =[];
    while (productosNoProcesados.length>0){
      let nombreProductoActual = productosNoProcesados[0].name;
      let selectedProducts = productosNoProcesados.filter(producto => producto.name===nombreProductoActual);
      productosNoProcesados = productosNoProcesados.filter(producto => producto.name!==nombreProductoActual); // Actualiza productos sin procesar
      //Calcula la cuenta de todos los productos
      let cuentaTotalCliente = 0;
      selectedProducts.forEach(producto => { cuentaTotalCliente = cuentaTotalCliente + producto.precio });
      let cuentaTemp = { total: cuentaTotalCliente, cliente:selectedProducts[0].cliente }
      cuentasClientes.push(cuentaTemp);      
    }
    let cuentaTotal = 0;
    cuentasClientes.forEach(cuenta => { cuentaTotal = cuentaTotal + cuenta.total });
    this.setState({cuentaTotal, cuentasClientes, bufferProductos});
  }

	render() {
		return (
			<>
        <Header />
        <Modal show={this.state.showSummaryModal} onHide={this.handleCloseSummaryModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.paraLlevar?"LLEVAR":"SERVIRSE"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SummaryCard pedido={this.state.pedido} onClickConfirmarOrden={this.onClickConfirmarOrden}/>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseSummaryModal}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={this.handleCloseSummaryModal}>
              Confirmar
            </Button>
          </Modal.Footer> */}
        </Modal>

        <MenuPoS
          paraLlevar={this.state.paraLlevar}
          mesaSeleccionada={this.state.mesaSeleccionada}
          onSelectMesa={this.onSelectMesa}
          onClickParaLLevar={this.onClickParaLLevar}
        />
        
        <div className="container-md">
          <div className="row">
            {/* Selección de Productos */}
            <SelectorProductos
              clienteSeleccionado ={this.state.clienteSeleccionado}
              bufferProductos={this.state.bufferProductos}
              actualizarBufferProductos={this.actualizarBufferProductos}
              reiniciarSelectorProductos={this.state.reiniciarSelectorProductos}
              selectorReiniciado = {this.selectorReiniciado}
            />

            {/* muestra el buffer de productos en la canasta*/}
            <CanastaProductos
              bufferProductos={this.state.bufferProductos}
              actualizarBufferProductos={this.actualizarBufferProductos}
            />
          </div>
        </div>

        {/* Resumen precio y continuar*/}
        <PoSFooter
          bufferProductos={this.state.bufferProductos}
          mesaSeleccionada={this.state.mesaSeleccionada}
          cuentaTotal={this.state.cuentaTotal}
          paraLlevar={this.state.paraLlevar}
          lanzarModalResumen={this.lanzarModalResumen}
        />
			</>
		)
	}
}
export default PoS;