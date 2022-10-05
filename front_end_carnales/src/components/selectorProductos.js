import React, { useState } from "react";
import parametrosGlobales from "../parametrosGlobales.js";
let productos = parametrosGlobales.constants.productos;
let categorias = parametrosGlobales.constants.categorias;
let variedades = parametrosGlobales.constants.variedades;

function SelectorProductos(props) {

  const [selectorCantProducto, setSelectorCantProducto] = useState(1);
  const [focusedProduct, setFocusedProduct] = useState(null);
  const [mezclar, setMezclar] = useState(false);
  const [variedadesMezclar, setVariedadesMezclar] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categorias[0]);
  const [productosActivos, setProductosActivos] = useState(productos.filter(producto => producto.idCategoria===1));

  React.useEffect(() => {
    // [] this is to execute it only the first time
    if(props.reiniciarSelectorProductos){
      setSelectorCantProducto(1);
      setFocusedProduct(null);
      setCategoriaSeleccionada(categorias[0]);
      setProductosActivos(productos.filter(producto => producto.idCategoria===1));
      props.selectorReiniciado();
    }
  });

  const checkRadioButton = focusedCategory => {
    // check the selected radio button
    if(categoriaSeleccionada.name===focusedCategory){
      return true;
    }else{
      return null;
    }
  }

  const getProductColor = producto => {
    if (mezclar){
      if (variedadesMezclar.includes(producto)){
        //return "btn btn-success w-100"
        return "btn btn-success w-100"
      }
      return "btn btn-success w-100 btn-light-green"
    }else if (focusedProduct && focusedProduct.name===producto.name){
      return "btn btn-danger w-100"
    }else{
      return "btn btn-secondary w-100"
    }
  }

  const onClickMezclar = event =>{
    setMezclar(!mezclar);
    setFocusedProduct(null);
    setVariedadesMezclar([]);
  }

  const setStateMezclaDefault = ()=> {
    setMezclar(false);
    setFocusedProduct(null);
    setVariedadesMezclar([]);
  }

  const getVariedadByName = (nameVariedad) => {
    let variedad = variedades.find(variedad => variedad.nombre === nameVariedad)
    return variedad
  }

  const onClickAceptarMezcla = (event)=>{
    if (variedadesMezclar.length>=2){
      //let aliasVariedad = getVariedad.labelMezcla
      let nombreMezcla = categoriaSeleccionada.alias + " "
      variedadesMezclar.forEach(producto => nombreMezcla += getVariedadByName(producto.variedad).labelMezcla + "+")
      nombreMezcla = nombreMezcla.slice(0,nombreMezcla.length-2)
      let cliente = props.clienteSeleccionado;
      let precio = Number((variedadesMezclar[0].precio + 0.5*(variedadesMezclar.length-1)).toFixed(2))
      let eliminables = getEliminables(variedadesMezclar[0]);
      eliminables.forEach(eliminable => eliminable.estado=true);
      let opciones = variedadesMezclar[0].opciones?JSON.parse(JSON.stringify(variedadesMezclar[0].opciones)):[];
      let newProduct = [{instanceID: + new Date(), name: nombreMezcla, precio, cliente, eliminables, opciones}];
      // Mejorar el precio, sería el precio del más alto mas 0.5.....
      // Mejorar los eliminables: si se selecciono pastor de segunda no se refleja, debe ser una unión.
      props.actualizarBufferProductos([...props.bufferProductos, ...newProduct]);
      setStateMezclaDefault()
    }
  }

  const isFocusedProduct = (producto) => {
    // true on clicked product
    if (focusedProduct && focusedProduct.name===producto.name){
      return true;
    }else{
      return false
    }
  }

  const setCantidad = event =>{
    // actualiza la cantidad de producto que se comprará
    let operador = event.target.value;
    let cantidadActualizada;
    if (operador==="+"){
      cantidadActualizada = selectorCantProducto+1
      if (cantidadActualizada<=10){
        setSelectorCantProducto(cantidadActualizada)
      }
    }else if (operador==="-"){
      cantidadActualizada = selectorCantProducto-1;
      if (cantidadActualizada< 1){
        setFocusedProduct(null) // la cantidad debería estar en 1 y quedarse ahí
      }else{
        setSelectorCantProducto(cantidadActualizada);
      }
    }
  }

  const onSelectCategoria = event => {
    let categoria = categorias.find(categoria => categoria._id === Number(event.target.id));
    let productosActivos = productos.filter(producto => producto.idCategoria===categoria._id);

    setCategoriaSeleccionada(categoria);
    setStateMezclaDefault()
    setProductosActivos(productosActivos);
  }

  const onClickProduct = (event, producto) => {
    if (!mezclar){
      let producto = JSON.parse(event.target.value);
      if (focusedProduct && focusedProduct.name===producto.name){
        setFocusedProduct(null);
      }else{
        setFocusedProduct(producto);
        setSelectorCantProducto(1);
      }
    }else{
      let newVariedadesMezclar = [...variedadesMezclar]
      let indexEliminar = newVariedadesMezclar.findIndex(elemento=> elemento===producto)
      if (indexEliminar===-1){ //Si no está ya seleccionado
        if(variedadesMezclar.length<3){
          newVariedadesMezclar.push(producto)
          setVariedadesMezclar(newVariedadesMezclar)
        }
      }else{
        newVariedadesMezclar.splice(indexEliminar, 1)
        setVariedadesMezclar(newVariedadesMezclar)          
      }
    }
  }

  const getEliminables = (producto) =>{
    console.log(producto)
    let eliminablesCategoria = producto.ingredientesCategoria? JSON.parse(JSON.stringify(producto.ingredientesCategoria.filter(ingrediente => ingrediente.eliminable===true))):[];
    let eliminablesVariedad = producto.ingredientesVariedad? JSON.parse(JSON.stringify(producto.ingredientesVariedad.filter(ingrediente => ingrediente.eliminable===true))):[];
    let eliminables = [...eliminablesCategoria, ...eliminablesVariedad];
    console.log(eliminables)
    return eliminables    
  } 

  const onClickAceptarProducto = event =>{
    let cliente = props.clienteSeleccionado;
    let product = focusedProduct;
    let cantidad = selectorCantProducto;
    let addBuffer = [];
    for (let i=0; i< cantidad; i++){
      // se suma i al instanceID para evitar ids repetidos en la misma iteración
      // Es necesario un copiado profundo
      let eliminables = getEliminables(product);
      eliminables.forEach(eliminable => eliminable.estado=true);
      let opciones = product.opciones?JSON.parse(JSON.stringify(product.opciones)):[];
      opciones.forEach(opcion => opcion.estado=opcion.default)
      let newProduct = {instanceID: + new Date() + i, name: product.name, precio:product.precio, cliente, eliminables, opciones}; //Definir el formato para eliminables
      addBuffer.push(newProduct);
    }
    props.actualizarBufferProductos([...props.bufferProductos, ...addBuffer]);
    setFocusedProduct(null);
  }

  return (
    <div className="col-12 col-lg-6">
      <div className="row">
        <div className="col-3">
          <div className="btn-group-vertical pb-1">
            {categorias.map(categoria => (
              <>
                <input type="radio" className="btn-check" name="btnradio" id={categoria._id} autoComplete="off" onChange={onSelectCategoria} checked={checkRadioButton(categoria.name)}/>
                <label className="btn btn-outline-success pos-radio-button" htmlFor={categoria._id}>{categoria.name}</label>
              </>
            ))
            }
          </div>
        </div>

        <div className="col-9">
          <div className="row">
            {productosActivos.map(producto => (
              <div className="col-6 col-md-4 producto-activo" key={producto.name}>
                <div className="row">
                  <div className="col-12">
                    <button className={getProductColor(producto)} value={JSON.stringify(producto)} onClick={(event)=>onClickProduct(event, producto)}>
                      {producto.variedad?producto.variedad:producto.name}
                    </button>
                  </div>
                  {isFocusedProduct(producto)?
                  <>
                    <div className="col-3 selector-cant-l">
                      <button className="btn btn-light w-100 selector-border-l" value="-" onClick={setCantidad}>
                        -
                      </button>
                    </div>
                    <div className="col-6 px-0">
                      <input type="text" className="form-control text-center" disabled value={selectorCantProducto} />
                    </div>
                    <div className="col-3 selector-cant-r">
                      <button className="btn btn-light w-100 selector-border-r" value="+" onClick={setCantidad}>
                        +
                      </button>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-success btn-sm w-100" onClick={onClickAceptarProducto}>
                        ACEPTAR
                      </button>
                    </div>
                  </>:null
                  }
                </div>                  
              </div>                  
            ))}
            {categoriaSeleccionada.mezclable &&
            <>
              <button type="button" className={mezclar?"col-6 btn btn-danger":"col-12 btn btn-primary"} onClick={onClickMezclar}>{mezclar?"CANCELAR":"MEZCLAR"}</button>
              {mezclar?
                <button type="button" className={variedadesMezclar.length>=2?"col-6 btn btn-success":"col-6 btn btn-secondary"} onClick={onClickAceptarMezcla}>ACEPTAR</button>
                :null
              }
            </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectorProductos;