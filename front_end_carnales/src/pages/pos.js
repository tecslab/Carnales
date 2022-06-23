import React, { Component } from 'react';
import Header from '../components/headerGen';
import "../stylesheets/pos.css";
import _ from 'lodash';

let mesas = [
  {name: "Ventana"},
  {name: "Mesa 1"},
  {name: "Mesa 2"},
  {name: "Mesa 3"},
  {name: "Mesa 4"},
  {name: "Mesa 5"},
  {name: "Mesa 6"},
  {name: "Mesa 7"}
];

let clientes = [
  {name: "General"},
  {name: "Cliente 1"},
  {name: "Cliente 2"},
  {name: "Cliente 3"},
  {name: "Cliente 4"},
  {name: "Cliente 5"},
  {name: "Cliente 6"},
  {name: "Cliente 7"},
  {name: "Cliente 8"},
];

let categorias = [
  {_id: 1, name: "Taco"},
  {_id: 2, name: "Taco Chingón"},
  {_id: 3, name: "Burrito"},
  {_id: 4, name: "Quesadilla"},
  {_id: 5, name: "Especiales"},
  {_id: 6, name: "Bebidas"}
];

let productos = [
  {name:'Taco Pollo Asado', alias: "Pollo Asado", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla']},
  {name:'Taco Carne Asada', alias: "Carne Asada", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla']},
  {name:'Taco Carne Guisada', alias: "Carne Guisada", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla']},
  {name:'Taco Al Pastor', alias: "Al Pastor", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla','Piña']},
  {name:'Taco Cerdo Asado Picante', alias: "Cerdo Asado Picante", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla']},
  {name:'Taco Barbacoa de Res Picante', alias: "Barbacoa de Res Picante", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla']},
  {name:'Taco Chicharron', alias: "Chicharron", idCategoria: 1, precio: 1.5, eliminables:['Aguacate','Cebolla']},
  {name:'Taco Carnitas', alias: "Carnitas", idCategoria: 1, precio: 1.5, eliminables:['Aguacate','Cebolla']},
  {name:'Taco Cabeza', alias: "Cabeza", idCategoria: 1, precio: 1.5, eliminables:['Aguacate','Cebolla']},
  
  {name:'Taco Chingón Pollo Asado', alias: "Pollo Asado", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {name:'Taco Chingón Carne Asada', alias: "Carne Asada", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {name:'Taco Chingón Carne Guisada', alias: "Carne Guisada", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {name:'Taco Chingón Al Pastor', alias: "Al Pastor", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla', 'Piña']},
  {name:'Taco Chingón Cerdo Asado Picante', alias: "Cerdo Asado Picante", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {name:'Taco Chingón Barbacoa de Res Picante', alias: "Barbacoa de Res Picante", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {name:'Taco Chingón Chicharron', alias: "Chicharron", idCategoria: 2, precio: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {name:'Taco Chingón Carnitas', alias: "Carnitas", idCategoria: 2, precio: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {name:'Taco Chingón Cabeza', alias: "Cabeza", idCategoria: 2, precio: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  
  {name:'Burrito Pollo Asado', alias: "Pollo Asado", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {name:'Burrito Carne Asada', alias: "Carne Asada", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {name:'Burrito Carne Guisada', alias: "Carne Guisada", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {name:'Burrito Al Pastor', alias: "Al Pastor", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña'], agregables:['Dividido']},
  {name:'Burrito Cerdo Asado Picante', alias: "Cerdo Asado Picante", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {name:'Burrito Barbacoa de Res Picante', alias: "Barbacoa de Res Picante", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {name:'Burrito Chicharron', alias: "Chicharron", idCategoria: 3, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña'], agregables:['Dividido']},
  {name:'Burrito Carnitas', alias: "Carnitas", idCategoria: 3, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {name:'Burrito Cabeza', alias: "Cabeza", idCategoria: 3, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  
  {name:'Quesadilla Pollo Asado', alias: "Carne Asada", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {name:'Quesadilla Carne Asada', alias: "Carne Asada", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {name:'Quesadilla Carne Guisada', alias: "Carne Asada", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {name:'Quesadilla Al Pastor', alias: "Al Pastor", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña']},
  {name:'Quesadilla Cerdo Asado Picante', alias: "Cerdo Asado Picante", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {name:'Quesadilla Barbacoa de Res Picante', alias: "Barbacoa de Res Picante", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {name:'Quesadilla Chicharron', alias: "Chicharron", idCategoria: 4, precio: 3.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña']},
  {name:'Quesadilla Carnitas', alias: "Carnitas", idCategoria: 4, precio: 3.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {name:'Quesadilla Cabeza', alias: "Cabeza", idCategoria: 4, precio: 3.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},

  {name:'Tortillas artesanales', idCategoria: 5, precio: 1},
  {name: "Cola", idCategoria: 6, precio: 0.5},
  {name: "Horchata", idCategoria: 6, precio: 0.5},
  {name: "Cerveza", idCategoria: 6, precio: 2}
  ];

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
      canastas:[]
      //productoVisible: "Carne Asada"
    };
  }

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
      // se suma i al id para evitar ids repetidos en la misma iteración
      let newProduct = {id: + new Date() + i, name: product.name, cliente: cliente};
      addBuffer.push(newProduct);
    }
    this.setState({
      bufferProductos: [...this.state.bufferProductos, ...addBuffer],
      focusedProduct: null
    });
  }

  onClickContinuar = event =>{
    let bufferCanastas = [];
    //FORMATO: {cliente, productos}
    let bufferProductos = JSON.parse(JSON.stringify(this.state.bufferProductos)); // para hacer una copia profunda
    // Separa los productos en el buffer en diferentes canastas según los clientes
    for (let i=0; i< bufferProductos.length; i++){
      if (i===0){
        let newCanasta = {cliente: bufferProductos[i].cliente, productos:[]}
        delete bufferProductos[i].cliente;
        newCanasta.productos.push(bufferProductos[i]);
        bufferCanastas.push(newCanasta);
        continue;
      }
      // Compara si el cliente del producto coincide con una canasta existente, y si no crea una nueva
      for(let j=0; j< bufferCanastas.length; j++){
        if (bufferProductos[i].cliente===bufferCanastas[j].cliente){
          delete bufferProductos[i].cliente;
          bufferCanastas[j].productos.push(bufferProductos[i]);
          break;
        }else if (j === bufferCanastas.length-1){
          let newCanasta = {cliente: bufferProductos[i].cliente, productos:[]}          
          delete bufferProductos[i].cliente;
          newCanasta.productos.push(bufferProductos[i]);
          bufferCanastas.push(newCanasta);
        }
      }
    }
    // Se establecerá el formato de las canastas como:
    // {cliente, productos:[{nombre, cantidad, observacion}]}
    // previamente productos llega como productos:[{id, name, observacion}]
    let canastas = [];
    for (let i=0; i< bufferCanastas.length; i++){
      let productosCanasta = [];
      let productosBuffer = bufferCanastas[i].productos;
      for (let j=0; j< productosBuffer.length; j++){
        let productCompBuffer = {...productosBuffer[j]};
        delete productCompBuffer.id;
        if (j>0){
          for(let k=0; k< productosCanasta.length; k++){
            let productCompCanasta = {...productosCanasta[k]};
						delete productCompCanasta.cantidad;
						if (_.isEqual(productCompCanasta, productCompBuffer)){
							// Si está repetido le suma 1 a la cantidad
							productosCanasta[k].cantidad++;
							break;
						}else if(k==productosCanasta.length-1){
							// Si es un producto nuevo crea ese producto
							productCompBuffer.cantidad=1;
							productosCanasta.push({...productCompBuffer});
              break; // Es necesario porque se modifica el tamaño de productosCanasta
						}
          }
        }else{
          productCompBuffer.cantidad=1;
					productosCanasta.push({...productCompBuffer});
        }
      }
      bufferCanastas[i].productos=productosCanasta;
      canastas.push(bufferCanastas[i]);
    }
    this.setState({canastas})

    fetch('http://localhost:4000/api/print', {
      method: 'POST', 
      body: JSON.stringify(canastas[0]),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      }).then(console.log('s'));
  }

	render() {
		return (
			<>
        <Header />
        <div className="container-md py-1">
          <div className="row">
            <div className="col-8">
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
            <div className="col-3">
              <div className="btn-group-vertical">
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
                  <div className="col-6 col-md-4 py-1" key={producto.name}>
                    <div className="row">
                      <div className="col-12">
                        <button className={this.getProductColor(producto)} value={JSON.stringify(producto)} onClick={this.setFocusedProduct}>                        
                          {producto.alias?producto.alias:producto.name}
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
        <div className="container-md">
          <div className="row">
            <div className="col-8 canasta-container">
              <div className="card">
                <div className="card-body text-center">
                  <table className="products-table">
                    <tbody>
                    {this.state.bufferProductos.map(product=>(
                      <tr>
                        <td className="products-cell">
                          <button className="btn btn-danger products-control">
                          X
                          </button>
                        </td>
                        <td className="products-cell">{product.name}</td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-md">
          <div className="row">
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