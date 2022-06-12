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

let productsData = [
  {nombre:'Taco Pollo Asado', alias: "Pollo Asado", idCategoria: 1,  eliminables:['Aguacate','Cebolla']},
  {nombre:'Taco Carne Asada', alias: "Carne Asada", idCategoria: 1, eliminables:['Aguacate','Cebolla']},
  {nombre:'Taco Carne Guisada', alias: "Carne Guisada", idCategoria: 1, eliminables:['Aguacate','Cebolla']},
  {nombre:'Taco Al Pastor', alias: "Carne Asada", idCategoria: 1, eliminables:['Aguacate','Cebolla','Piña']},
  {nombre:'Taco Cerdo Asado Picante', alias: "Carne Asada", idCategoria: 1, eliminables:['Aguacate','Cebolla']},
  {nombre:'Taco Barbacoa de Res Picante', alias: "Carne Asada", idCategoria: 1, eliminables:['Aguacate','Cebolla']},
  {nombre:'Taco Chicharron', alias: "Carne Asada", idCategoria: 1, eliminables:['Aguacate','Cebolla']},
  {nombre:'Taco Carnitas', alias: "Carne Asada", idCategoria: 1, eliminables:['Aguacate','Cebolla']},
  {nombre:'Taco Cabeza', alias: "Carne Asada", idCategoria: 1, eliminables:['Aguacate','Cebolla']},
  
  {nombre:'Taco Chingón Pollo Asado', alias: "Pollo Asado", idCategoria: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Taco Chingón Carne Asada', alias: "Carne Asada", idCategoria: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Taco Chingón Carne Guisada', alias: "Carne Guisada", idCategoria: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Taco Chingón Al Pastor', alias: "Al Pastor", idCategoria: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla', 'Piña']},
  {nombre:'Taco Chingón Cerdo Asado Picante', alias: "Cerdo Asado Picante", idCategoria: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Taco Chingón Barbacoa de Res Picante', alias: "Barbacoa de Res Picante", idCategoria: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Taco Chingón Chicharron', alias: "Chicharron", idCategoria: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Taco Chingón Carnitas', alias: "Carnitas", idCategoria: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Taco Chingón Cabeza', alias: "Cabeza", idCategoria: 2, eliminables:['Frejol','Queso','Ensalada','Arroz','Aguacate','Cebolla']},
  
  {nombre:'Burrito Pollo Asado', alias: "Pollo Asado", idCategoria: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {nombre:'Burrito Carne Asada', alias: "Carne Asada", idCategoria: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {nombre:'Burrito Carne Guisada', alias: "Carne Guisada", idCategoria: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {nombre:'Burrito Al Pastor', alias: "Al Pastor", idCategoria: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña'], agregables:['Dividido']},
  {nombre:'Burrito Cerdo Asado Picante', alias: "Cerdo Asado Picante", idCategoria: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {nombre:'Burrito Barbacoa de Res Picante', alias: "Barbacoa de Res Picante", idCategoria: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {nombre:'Burrito Chicharron', alias: "Chicharron", idCategoria: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña'], agregables:['Dividido']},
  {nombre:'Burrito Carnitas', alias: "Carnitas", idCategoria: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  {nombre:'Burrito Cabeza', alias: "Cabeza", idCategoria: 3, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla'], agregables:['Dividido']},
  
  {nombre:'Quesadilla Pollo Asado', alias: "Carne Asada", idCategoria: 4, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Quesadilla Carne Asada', alias: "Carne Asada", idCategoria: 4, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Quesadilla Carne Guisada', alias: "Carne Asada", idCategoria: 4, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Quesadilla Al Pastor', alias: "Al Pastor", idCategoria: 4, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña']},
  {nombre:'Quesadilla Cerdo Asado Picante', alias: "Cerdo Asado Picante", idCategoria: 4, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Quesadilla Barbacoa de Res Picante', alias: "Barbacoa de Res Picante", idCategoria: 4, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Quesadilla Chicharron', alias: "Chicharron", idCategoria: 4, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla','Piña']},
  {nombre:'Quesadilla Carnitas', alias: "Carnitas", idCategoria: 4, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},
  {nombre:'Quesadilla Cabeza', alias: "Cabeza", idCategoria: 4, eliminables:['Frejol','Ensalada','Arroz','Aguacate','Cebolla']},

  {nombre:'Tortillas artesanales', idCategoria: 5},
  {nombre: "Cola", idCategoria: 6},
  {nombre: "Horchata", idCategoria: 6},
  {nombre: "Cerveza", idCategoria: 6}
  ];

class PoS extends Component {
  constructor(props){
    super(props);
    this.state = {
      mesaSeleccionada: mesas[0].nombre,
      clienteSeleccionado: clientes[0].nombre,
      categoriaSelecciona: categorias[0].nombre,
    };
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
    this.setState({
      categoriaSeleccionada: event.target.text
    });
  }

	render() {
		return (
			<>
        <Header />
        <div class="container-md py-1">
          <div class="row">
            <div class="col-8">
              <div class="btn-group w-100">
                <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  {this.state.mesaSeleccionada}
                </button>
                <ul class="dropdown-menu pos-dropdown-list">
                  {mesas.map(mesa => (
                    <li><a class="dropdown-item pos-dropdown-item" href="#" onClick={this.onSelectMesa}>{mesa.nombre}</a></li>
                  ))
                  }
                </ul>
              </div>
            </div>
            <div class="col-4">
              <div class="btn-group w-100">
                <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  {this.state.clienteSeleccionado}
                </button>
                <ul class="dropdown-menu pos-dropdown-list">
                  {clientes.map(cliente => (
                    <li><a class="dropdown-item pos-dropdown-item" href="#" onClick={this.onSelectCliente}>{cliente.nombre}</a></li>
                  ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>



        <div class="container-md d-flex flex-column">
          <div class="row">
            <div class="col">

              <div class="btn-group-vertical">
                {categorias.map(categoria => (
                  <>
                    <input type="radio" class="btn-check" name="btnradio" id={categoria.nombre} autocomplete="off"/>
                    <label class="btn btn-outline-success pos-radio-button" for={categoria.nombre}>{categoria.nombre}</label>
                  </>
                ))
                }

              </div>

            </div>
          </div>
        </div>
        
			</>
		)
	}
}
export default PoS;