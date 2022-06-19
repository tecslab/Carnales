import React, { Component } from 'react';
import Header from '../components/headerGen';
import "../stylesheets/pos.css";

let mesas = [
  {nombre: "Ventana"},
  {nombre: "Mesa 1"},
  {nombre: "Mesa 2"},
  {nombre: "Mesa 3"},
  {nombre: "Mesa 4"},
  {nombre: "Mesa 5"},
  {nombre: "Mesa 6"},
  {nombre: "Mesa 7"}
];

let clientes = [
  {nombre: "General"},
  {nombre: "Cliente 1"},
  {nombre: "Cliente 2"},
  {nombre: "Cliente 3"},
  {nombre: "Cliente 4"},
  {nombre: "Cliente 5"},
  {nombre: "Cliente 6"},
  {nombre: "Cliente 7"},
  {nombre: "Cliente 8"},
];

let categorias = [
  {_id: 1, nombre: "Taco"},
  {_id: 2, nombre: "Taco Chingón"},
  {_id: 3, nombre: "Burrito"},
  {_id: 4, nombre: "Quesadilla"},
  {_id: 5, nombre: "Especiales"},
  {_id: 6, nombre: "Bebidas"}
];

let productos = [
  {nombre:'Taco Pollo Asado', alias: "Pollo Asado", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla']},
  {nombre:'Taco Carne Asada', alias: "Carne Asada", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla']},
  {nombre:'Taco Carne Guisada', alias: "Carne Guisada", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla']},
  {nombre:'Taco Al Pastor', alias: "Al Pastor", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla','Piña']},
  {nombre:'Taco Cerdo Asado Picante', alias: "Cerdo Asado Picante", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla']},
  {nombre:'Taco Barbacoa de Res Picante', alias: "Barbacoa de Res Picante", idCategoria: 1, precio: 1, eliminables:['Aguacate','Cebolla']},
  {nombre:'Taco Chicharron', alias: "Chicharron", idCategoria: 1, precio: 1.5, eliminables:['Aguacate','Cebolla']},
  {nombre:'Taco Carnitas', alias: "Carnitas", idCategoria: 1, precio: 1.5, eliminables:['Aguacate','Cebolla']},
  {nombre:'Taco Cabeza', alias: "Cabeza", idCategoria: 1, precio: 1.5, eliminables:['Aguacate','Cebolla']},
  
  {nombre:'Taco Chingón Pollo Asado', alias: "Pollo Asado", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Taco Chingón Carne Asada', alias: "Carne Asada", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Taco Chingón Carne Guisada', alias: "Carne Guisada", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Taco Chingón Al Pastor', alias: "Al Pastor", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla', 'Piña']},
  {nombre:'Taco Chingón Cerdo Asado Picante', alias: "Cerdo Asado Picante", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Taco Chingón Barbacoa de Res Picante', alias: "Barbacoa de Res Picante", idCategoria: 2, precio: 1.5, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Taco Chingón Chicharron', alias: "Chicharron", idCategoria: 2, precio: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Taco Chingón Carnitas', alias: "Carnitas", idCategoria: 2, precio: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Taco Chingón Cabeza', alias: "Cabeza", idCategoria: 2, precio: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  
  {nombre:'Burrito Pollo Asado', alias: "Pollo Asado", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {nombre:'Burrito Carne Asada', alias: "Carne Asada", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {nombre:'Burrito Carne Guisada', alias: "Carne Guisada", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {nombre:'Burrito Al Pastor', alias: "Al Pastor", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña'], agregables:['Dividido']},
  {nombre:'Burrito Cerdo Asado Picante', alias: "Cerdo Asado Picante", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {nombre:'Burrito Barbacoa de Res Picante', alias: "Barbacoa de Res Picante", idCategoria: 3, precio: 2.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {nombre:'Burrito Chicharron', alias: "Chicharron", idCategoria: 3, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña'], agregables:['Dividido']},
  {nombre:'Burrito Carnitas', alias: "Carnitas", idCategoria: 3, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {nombre:'Burrito Cabeza', alias: "Cabeza", idCategoria: 3, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  
  {nombre:'Quesadilla Pollo Asado', alias: "Carne Asada", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Quesadilla Carne Asada', alias: "Carne Asada", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Quesadilla Carne Guisada', alias: "Carne Asada", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Quesadilla Al Pastor', alias: "Al Pastor", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña']},
  {nombre:'Quesadilla Cerdo Asado Picante', alias: "Cerdo Asado Picante", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Quesadilla Barbacoa de Res Picante', alias: "Barbacoa de Res Picante", idCategoria: 4, precio: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Quesadilla Chicharron', alias: "Chicharron", idCategoria: 4, precio: 3.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña']},
  {nombre:'Quesadilla Carnitas', alias: "Carnitas", idCategoria: 4, precio: 3.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Quesadilla Cabeza', alias: "Cabeza", idCategoria: 4, precio: 3.5, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},

  {nombre:'Tortillas artesanales', idCategoria: 5, precio: 1},
  {nombre: "Cola", idCategoria: 6, precio: 0.5},
  {nombre: "Horchata", idCategoria: 6, precio: 0.5},
  {nombre: "Cerveza", idCategoria: 6, precio: 2}
  ];

class PoS extends Component {
  constructor(props){
    super(props);
    this.state = {
      mesaSeleccionada: mesas[0].nombre,
      clienteSeleccionado: clientes[0].nombre,
      categoriaSeleccionada: categorias[0].nombre,
      productosActivos: productos.filter(producto => producto.idCategoria===1), // Se inicializa con los tacos
      //productoVisible: null
      focusedProduct: null,
      selectorCantidad: 1,
      canasta:[]
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
      categoriaSeleccionada: categoria.nombre,
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
    if (this.state.focusedProduct && this.state.focusedProduct===event.target.textContent){
      console.log('1');
      this.setState({focusedProduct:null});
    }else{
      console.log('2');
      this.setState({
        focusedProduct:event.target.textContent,
        selectorCantidad: 1
      });
    }
  }

  getProductColor = nombreProducto => {
    if (this.state.focusedProduct && this.state.focusedProduct===nombreProducto){
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
                    <li key={mesa.nombre}><a className="dropdown-item pos-dropdown-item" href="#" onClick={this.onSelectMesa}>{mesa.nombre}</a></li>
                  ))
                  }
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="btn-group w-100">
                <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  {this.state.clienteSeleccionado}
                </button>
                <ul className="dropdown-menu pos-dropdown-list">
                  {clientes.map(cliente => (
                    <li key={cliente.nombre}><a className="dropdown-item pos-dropdown-item" href="#" onClick={this.onSelectCliente}>{cliente.nombre}</a></li>
                  ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="container-md">
          <div className="row">
            <div className="col-3">
              <div className="btn-group-vertical">
                {categorias.map(categoria => (
                  <>
                    <input type="radio" className="btn-check" name="btnradio" id={categoria._id} autoComplete="off" onChange={this.onSelectCategoria} checked={this.checkRadioButton(categoria.nombre)}/>
                    <label className="btn btn-outline-success pos-radio-button" htmlFor={categoria._id}>{categoria.nombre}</label>
                  </>
                ))
                }

              </div>
            </div>


            <div className="col-9">
              <div className="row">
                {this.state.productosActivos.map(producto => (
                  //<div className={this.getProductVisibility(producto.alias?producto.alias:producto.nombre)} key={producto.nombre}>
                  <div className="col-6 col-md-4 py-1" key={producto.nombre}>
                    <div className="row">

                      <div className="col-12">
                        <button className={this.getProductColor(producto.alias?producto.alias:producto.nombre)} onClick={this.setFocusedProduct}>                        
                          {producto.alias?producto.alias:producto.nombre}
                        </button>
                      </div>
                      {this.state.focusedProduct && this.state.focusedProduct===(producto.alias?producto.alias:producto.nombre)?
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
                          <button className="btn btn-success btn-sm w-100">
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
			</>
		)
	}
}
export default PoS;