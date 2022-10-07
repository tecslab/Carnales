import React, { Component } from 'react';
import Header from '../components/header';
import Canvas from '../components/canvas';

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      cantPedidos: 0,
      ingresoTotal: 0,
      ingresoPromedioXPedido: 0
    };
  }

  componentDidMount(){
    fetch('http://localhost:4000/api/dashboard', {
      method: 'GET', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data =>{
        console.log(data)
        this.setState({
          cantPedidos: data.cantPedidos,
          ingresoTotal: data.ingresoTotal, 
          ingresoPromedioXPedido: data.ingresoPromedioXPedido
        })
      }).catch(error =>{
      console.log(error);
    });
  }

	render() {
		return (
			<>
				<Header />
        <div>
          <ul>
            <li>Pedidos: {this.state.cantPedidos}</li>
            <li>Ingresos: {this.state.ingresoTotal}</li>
            <li>Ingreso promedio por pedido: {this.state.ingresoPromedioXPedido}</li>
          </ul>
        </div>
			</>
		)
	}
}

// gráfico de pedidos por horam producto más vendido
export default Dashboard;