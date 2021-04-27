import React, { Component } from 'react';

const styleObj = {
    fontSize: 14,
    color: "#4a54f1",
    textAlign: "center",
    paddingTop: "100px",
}

class OrderCard extends Component {

    

    // const styleSpan={
    // }

    render(){
	return(
        <div className="card rounded border-dark">
            <div className="card-header p-1" style={{backgroundColor:"green",}}>
                <span className="m-0" style={{fontSize:"18px"}}><strong>#2</strong></span>
                <span className="crono" style={{color:"white", marginLeft:"25%"}} data="1min21seg">123123</span>
                <p className="m-0 text-center"><strong>Mesa 4</strong></p>
            </div>
            
            <ul className="list-group list-group-flush">
                <p className="mx-1" style={{marginBottom:"5px",}}>Taco Chingón
                    <span className="badge badge-pill badge-warning text-right">x2</span>
                    <br/>
                    <span className="my-0 mx-4" style={{color:"red",}}>Sin Cebolla</span>
                </p>
                <p className="mx-1" style={{marginBottom:"5px",}}>Burrito Chingón
                    <span className="badge badge-pill badge-warning text-right">x2</span>
                </p>
                <p className="mx-1" style={{marginBottom:"5px",}}>Taco al Pastor
                    <span className="badge badge-pill badge-warning text-right">x5</span>
                    <br/>
                    <span className="my-0 mx-4" style={{color:"red",}}>Sin Piña</span>
                </p>
            </ul>
            <div className="card-footer">
                <button style={{marginBottom:"5px"}} className="btn btn-success w-100 listo">Listo ✔</button>
                <button style={{marginBottom:"5px"}} className="btn btn-success w-100 listo">Editar</button>
                <button style={{margingBottom:"5px"}} className="btn btn-success w-100 listo">Eliminar </button>
            </div>
        </div>
        

    )}
}


export default OrderCard;