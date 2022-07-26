import React, { Component } from 'react';
import Header from '../components/header';
import "../stylesheets/pos.css";
import _ from 'lodash';
import SummaryCard from '../components/summaryCard.js'
import parametrosGlobales from "../parametrosGlobales.js";
import Modal from 'react-bootstrap/Modal'

let mesas = parametrosGlobales.constants.mesas;
let clientes = parametrosGlobales.constants.clientes;
let productos = parametrosGlobales.constants.productos;
let categorias = parametrosGlobales.constants.categorias;
let ingredientes = parametrosGlobales.constants.ingredientes;

class PoS extends Component {
  constructor(props){
    super(props);
    this.state = {
      mesaSeleccionada: mesas[0].name,
      clienteSeleccionado: clientes[0].name,
      categoriaSeleccionada: categorias[0].name,
      productosActivos: productos.filter(producto => producto.idCategoria===1), // Se inicializa con los tacos
      //productoVisible: null
      focusedProduct: null,
      selectorCantidad: 1,
      bufferProductos:[],
      cuentasClientes: [],
      cuentaTotal: (0).toFixed(2),
      //productoVisible: "Carne Asada"
      showSummaryModal: false,
      orden: {canastas:[], mesa: mesas[0].name, cuentaTotal:(0).toFixed(2)}
    };
  }


  handleCloseSummaryModal = () => {console.log('test');this.setState({showSummaryModal:false})};
  handleShowSummaryModal = () => this.setState({showSummaryModal:true});
  

  componentDidMount() {
  }

  onSelectMesa = (event) => {
    this.setState({
      mesaSeleccionada: event.target.text
    });
  }

  onSelectCliente = (event) => {
    this.setState({
      clienteSeleccionado: event.target.text
    });
  }

  onSelectCategoria = event => {
    let categoria = categorias.find(categoria => categoria._id === Number(event.target.id));
    let productosActivos = productos.filter(producto => producto.idCategoria===categoria._id);
    
    this.setState({
      categoriaSeleccionada: categoria.name,
      focusedProduct: null,
      productosActivos
    });
  }

  checkRadioButton = focusedCategory => {
    // check the selected radio button
    if(this.state.categoriaSeleccionada===focusedCategory){
      return true;
    }else{
      return null;
    }
  }

  setFocusedProduct = (event) => {
    let producto = JSON.parse(event.target.value);
    if (this.state.focusedProduct && this.state.focusedProduct.name===producto.name){
      this.setState({focusedProduct:null});
    }else{
      this.setState({
        focusedProduct: producto,
        selectorCantidad: 1
      });
    }
  }

  isFocusedProduct = (producto) => {
    if (this.state.focusedProduct && this.state.focusedProduct.name===producto.name){
      return true;
    }else{
      return false
    }
  }

  getProductColor = producto => {
    if (this.state.focusedProduct && this.state.focusedProduct.name===producto.name){
      return "btn btn-danger w-100"
    }else{
      return "btn btn-secondary w-100"
    }
  }

  getIngredienteById = ingredienteId =>{
    return ingredientes.find(ingrediente => ingrediente.id===ingredienteId)
  }

  getImageName = (elementInstance, label) => {
    let sufix = elementInstance.estado===true?"On":"Off";
    let prefix="";
    if (label === "ingrediente" ){
      let ingrediente = this.getIngredienteById(elementInstance.idIngrediente);
      prefix = ingrediente.nombre;
    }else if(label === "opcion"){
      prefix = elementInstance.nombre;
    }
    return prefix + sufix + '.png';
  }

  toggleOnOffButton = (event, productIntanceID, elementInstance, label) =>{
    let product = this.state.bufferProductos.find(producto => producto.instanceID === productIntanceID);
    let element = {};
    if (label === "ingrediente" ){
      let productEliminables = product.eliminables;
      element = productEliminables.find(eliminable=>eliminable.idIngrediente===elementInstance.idIngrediente);
    }else if(label === "opcion"){
      let productOpciones = product.opciones;
      element = productOpciones.find(opcion=>opcion.nombre===elementInstance.nombre);
    }
    element.estado = !element.estado;
    this.setState({
      bufferProductos:this.state.bufferProductos
    });
  }

  setCantidad = event =>{
    let operador = event.target.value;
    let cantidadActualizada;
    if (operador==="+"){
      cantidadActualizada = this.state.selectorCantidad+1
      if (cantidadActualizada<=10){
        this.setState({
          selectorCantidad: cantidadActualizada
        })
      }
    }else if (operador==="-"){
      cantidadActualizada = this.state.selectorCantidad-1;
      if (cantidadActualizada< 1){
        this.setState({
          focusedProduct: null // la cantidad debería estar en 1 y quedarse ahí
        })
      }else{
        this.setState({
          selectorCantidad: cantidadActualizada
        })
      }
    }
  }

  onClickAceptarProducto = event =>{
    let cliente = this.state.clienteSeleccionado;
    let product = this.state.focusedProduct;
    let cantidad = this.state.selectorCantidad;
    let addBuffer = [];
    for (let i=0; i< cantidad; i++){
      // se suma i al instanceID para evitar ids repetidos en la misma iteración
      // Es necesario un copiado profundo
      let eliminables = product.ingredientes?JSON.parse(JSON.stringify(product.ingredientes.filter(ingrediente => ingrediente.eliminable===true))):[];
      eliminables.forEach(eliminable => eliminable.estado=true);
      let opciones = product.opciones?JSON.parse(JSON.stringify(product.opciones)):[];
      opciones.forEach(opcion => opcion.estado=opcion.default)
      let newProduct = {instanceID: + new Date() + i, name: product.name, precio:product.precio, cliente, eliminables, opciones}; //Definir el formato para eliminables
      addBuffer.push(newProduct);
    }
    let {cuentaTotal, cuentasClientes} = this.getCuentas([...this.state.bufferProductos, ...addBuffer]);
    this.setState({
      cuentaTotal: cuentaTotal.toFixed(2),
      cuentasClientes,
      bufferProductos: [...this.state.bufferProductos, ...addBuffer],
      focusedProduct: null
    });
  }

  onClickEliminar = event => {
    let instanceID = event.target.id;
    console.log(instanceID);
    let productos = this.state.bufferProductos;
    let newBufferProductos = productos.filter(producto => producto.instanceID!==Number(instanceID));
    let {cuentaTotal, cuentasClientes} = this.getCuentas(newBufferProductos);
    this.setState({
      bufferProductos: newBufferProductos,
      cuentaTotal: cuentaTotal.toFixed(2),
      cuentasClientes,
    })
  }

  onClickContinuar = event =>{
    //in:  producto:{instanceID, name, precio, cliente, observaciones}[];
    // Los pedidos están compuestos por varias canastas de productos según cada cliente
    let canastas = [];
    let productosNoProcesados = this.state.bufferProductos;
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
      let resumenProductos = this.resumirProductos(productos);
      //let newCanasta = {cliente: nombreClienteProducto, productos:resumenProductos};
      let newCanasta = {productos:resumenProductos};
      canastas.push(newCanasta);
    }

    let pedido = {
      mesa:this.state.mesaSeleccionada,
      canastas: canastas,
      cuentaTotal: this.state.cuentaTotal
    }

    this.setState({
      pedido,
      showSummaryModal:true
    })

    //this.reiniciarPoS();
  }

  onClickConfirmarOrden = () => {
    fetch('http://localhost:4000/api/print', {
      method: 'POST', 
      body: JSON.stringify(this.state.pedido),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      this.reiniciarPoS();
      console.log(response);
    }).catch(error =>{
      console.log(error);
    });
  }

  reiniciarPoS = () => {
    //Reinicia el PoS para un nuevo pedido
    this.setState ({
      mesaSeleccionada: mesas[0].name,
      clienteSeleccionado: clientes[0].name,
      categoriaSeleccionada: categorias[0].name,
      productosActivos: productos.filter(producto => producto.idCategoria===1), // Se inicializa con los tacos
      //productoVisible: null
      focusedProduct: null,
      selectorCantidad: 1,
      bufferProductos:[],
      cuentasClientes: [],
      cuentaTotal: (0).toFixed(2),
      showSummaryModal: false,
      orden: {canastas:[ { productos:[] } ], mesa: mesas[0].name}
    });
  }

  resumirProductos = arrayProductos => {
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

  getCuentas = productosNoProcesados => {
    //in: {instanceID, name, precio, cliente}
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
    //this.setState({cuentaTotal, cuentasClientes});
    return {cuentaTotal, cuentasClientes}
  }
  

	render() {
		return (
			<>
        <Header />
        <Modal show={this.state.showSummaryModal} onHide={this.handleCloseSummaryModal}>
          <Modal.Header closeButton>
            <Modal.Title>Resumen</Modal.Title>
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

        <div className="container-md py-1">
          <div className="row">
            <div className="col-8 col-lg-4">
              <div className="btn-group w-100">
                <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  {this.state.mesaSeleccionada}
                </button>
                <ul className="dropdown-menu pos-dropdown-list">
                  {mesas.map(mesa => (
                    <li key={mesa.name}><a className="dropdown-item pos-dropdown-item" href="#" onClick={this.onSelectMesa}>{mesa.name}</a></li>
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
          </div>
        </div>


        <div className="container-md">
          <div className="row">
            {/* Selección de Productos */}
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-3">
                  <div className="btn-group-vertical pb-1">
                    {categorias.map(categoria => (
                      <>
                        <input type="radio" className="btn-check" name="btnradio" id={categoria._id} autoComplete="off" onChange={this.onSelectCategoria} checked={this.checkRadioButton(categoria.name)}/>
                        <label className="btn btn-outline-success pos-radio-button" htmlFor={categoria._id}>{categoria.name}</label>
                      </>
                    ))
                    }
                  </div>
                </div>

                <div className="col-9">
                  <div className="row">
                    {this.state.productosActivos.map(producto => (
                      <div className="col-6 col-md-4 producto-activo" key={producto.name}>
                        <div className="row">
                          <div className="col-12">
                            <button className={this.getProductColor(producto)} value={JSON.stringify(producto)} onClick={this.setFocusedProduct}>                        
                              {producto.variedad?producto.variedad:producto.name}
                            </button>
                          </div>
                          {this.isFocusedProduct(producto)?
                          <>
                            <div className="col-3 selector-cant-l">
                              <button className="btn btn-light w-100 selector-border-l" value="-" onClick={this.setCantidad}>
                                -
                              </button>
                            </div>
                            <div className="col-6 px-0">
                              <input type="text" className="form-control text-center" disabled value={this.state.selectorCantidad} />
                            </div>
                            <div className="col-3 selector-cant-r">
                              <button className="btn btn-light w-100 selector-border-r" value="+" onClick={this.setCantidad}>
                                +
                              </button>
                            </div>
                            <div className="col-12">
                              <button className="btn btn-success btn-sm w-100" onClick={this.onClickAceptarProducto}>
                                ACEPTAR
                              </button>
                            </div>
                          </>:null
                          }
                        </div>                  
                      </div>                  
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Buffer de productos en el carrito*/}
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-12 canasta-container">
                  <div className="card">
                    <div className="card-body text-center px-0">
                      <table className="products-table">
                        <tbody>
                        {this.state.bufferProductos.map(product=>(
                          <tr>
                            <td className="products-cell delete-cell">
                              <button className="btn btn-danger products-control" id={product.instanceID} onClick={this.onClickEliminar}>
                              X
                              </button>
                            </td>
                            <td className="products-cell">{product.name}</td>
                            {product.eliminables.map(eliminable =>
                              <td className="products-cell">
                                <button className='btn btn-light px-0 py-0' onClick={(event) => this.toggleOnOffButton(event, product.instanceID, eliminable, "ingrediente")}>
                                  <img className="eliminable" src={"/images/eliminables/" + this.getImageName(eliminable, "ingrediente")} />
                                </button>
                              </td>
                            )}
                            {product.opciones.map(opcion =>
                              <td className="products-cell">
                                <button className='btn btn-light px-0 py-0' onClick={(event) => this.toggleOnOffButton(event, product.instanceID, opcion, "opcion")}>
                                  <img className="opcion" src={"/images/opciones/" + this.getImageName(opcion, "opcion")} />
                                </button>
                              </td>
                            )}
                          </tr>
                        ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* Resumen precio y continuar*/}
        <div className="container-md pt-3">
          <div className="row">
            <div className="col-6 checkout-container text-end">
              <h2>
                Total: ${this.state.cuentaTotal}
              </h2>
            </div>
            <div className="col-6 checkout-container">
              <button className="btn btn-success btn-lg w-75" onClick={this.onClickContinuar}>
              CONTINUAR
              </button>
            </div>
          </div>
        </div>
			</>
		)
	}
}
export default PoS;