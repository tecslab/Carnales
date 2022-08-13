import React from 'react';
import parametrosGlobales from "../parametrosGlobales.js";
let ingredientes = parametrosGlobales.constants.ingredientes;

function CanastaProductos(props) {

  const onClickEliminar = event => {
    let instanceID = event.target.id;
    let bufferProductos = props.bufferProductos;
    let newBufferProductos = bufferProductos.filter(producto => producto.instanceID!==Number(instanceID));
    props.actualizarBufferProductos(newBufferProductos);
  }

  const toggleOnOffButton = (event, productIntanceID, elementInstance, label) =>{
    let product = props.bufferProductos.find(producto => producto.instanceID === productIntanceID);
    let element = {};
    if (label === "ingrediente" ){
      let productEliminables = product.eliminables;
      element = productEliminables.find(eliminable=>eliminable.idIngrediente===elementInstance.idIngrediente);
    }else if(label === "opcion"){
      let productOpciones = product.opciones;
      element = productOpciones.find(opcion=>opcion.nombre===elementInstance.nombre);
    }
    element.estado = !element.estado;
    props.actualizarBufferProductos(props.bufferProductos);
  }

  const getIngredienteById = ingredienteId =>{
    return ingredientes.find(ingrediente => ingrediente.id===ingredienteId)
  }

  const getImageName = (elementInstance, label) => {
    let sufix = (elementInstance.estado!==undefined && elementInstance.estado===true)?"On":"Off";
    let prefix="";
    if (label === "ingrediente" ){
      let ingrediente = getIngredienteById(elementInstance.idIngrediente);
      prefix = ingrediente.nombre;
    }else if(label === "opcion"){
      prefix = elementInstance.nombre;
    }
    return prefix + sufix + '.png';
  }

  return (
    <div className="col-12 col-lg-6">
      <div className="row">
        {/* <div className="col-12">
          <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked/>
            <label className="btn btn-outline-warning" for="btnradio1">Quitar</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
            <label style={{backgroundColor: "white"}} className="btn btn-outline-warning" for="btnradio2">Extras</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
            <label style={{background: "white"}} className="btn btn-outline-warning" for="btnradio3">Opciones</label>
          </div>
        </div> */}
        <div className="col-12 canasta-container">
          <div className="card">
            <div className="card-body text-center px-0">
              <table className="products-table">
                <tbody>
                {props.bufferProductos.map(product=>(
                  <tr>
                    <td className="products-cell delete-cell">
                      <button className="btn btn-danger products-control" id={product.instanceID} onClick={onClickEliminar}>
                      X
                      </button>
                    </td>
                    <td className="products-cell">{product.name}</td>
                    {product.eliminables.map(eliminable =>
                      <td className="products-cell">
                        <button className='btn btn-light px-0 py-0' onClick={(event) => toggleOnOffButton(event, product.instanceID, eliminable, "ingrediente")}>
                          <img className="eliminable" src={"/images/eliminables/" + getImageName(eliminable, "ingrediente")} />
                        </button>
                      </td>
                    )}
                    {product.opciones.map(opcion =>
                      <td className="products-cell">
                        <button className='btn btn-light px-0 py-0' onClick={(event) => toggleOnOffButton(event, product.instanceID, opcion, "opcion")}>
                          <img className="opcion" src={"/images/opciones/" + getImageName(opcion, "opcion")} />
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
  )
}

export default CanastaProductos;