const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido');
const parametrosGlobales = require('../parametrosGlobalesBack')
const ThermalPrinter = require('node-thermal-printer').printer;
const Types = require('node-thermal-printer').types;
let numPedido = 0;
let productos = parametrosGlobales.constants.productos;
let ingredientes = parametrosGlobales.constants.ingredientes;


function getProductByName(productName){
  let producto = productos.find(producto => producto.name === productName);
  if (producto==undefined){
    producto = {name: productName, variedad: "Burrito", precio: 3.50}
  }
  return producto;
}

function getTotalPrice(productFromOrder){
  let cantidad = productFromOrder.cantidad;
  let precioProducto = getProductByName(productFromOrder.name).precio;
  return (precioProducto*cantidad).toFixed(2);
}


function getIngredienteById(ingredienteId){
  return ingredientes.find(ingrediente => ingrediente.id===ingredienteId)
}

function getDetallesProducto(producto){
// Imprime los detalles del producto en una nueva línea con letra más pequeña
  let detalles = "";
  let detEliminables = "";
  let detOpciones = "";
  let contEliminables = 0;
  producto.eliminables.forEach( eliminable => {
    if (eliminable.estado===false){
      let ingrediente = getIngredienteById(eliminable.idIngrediente);
      detEliminables = detEliminables + ingrediente.nombre + ", ";
      contEliminables +=1;
    }
  });
  detEliminables = detEliminables.slice(0,detEliminables.length-2); //Para borrar la ultima ", "
  if (contEliminables>1){
    detEliminables = "**Sin (" + detEliminables + ")";
  }else if(contEliminables===1){
    detEliminables = "**Sin " + detEliminables;
  }

  producto.opciones.forEach(opcion=>{
    if (opcion.estado!==opcion.default){
      detOpciones = detOpciones + opcion.nombre + ", ";
    }
  })
  detOpciones = detOpciones.slice(0,detOpciones.length-2);

  detalles = detEliminables + " - " + detOpciones;
  
  if (detalles!==" - "){
    return "   " + detalles;
  }
  return("");
  // **Sin (Aguacate, Cebolla) - Dividido ->36 caracteres
}



async function imprimirPedido(pedido) {
  //  {productos:[{name, cantidad, observacion}]}
  const {cuentaTotal, paraLlevar, mesa} = pedido;
  let productosPedido = pedido.canastas[0].productos;

  let lineWidth = 48

  const printer = new ThermalPrinter({
    type: Types.EPSON, // 'star' or 'epson'
    interface: '/dev/usb/lp1',
    //interface: process.argv[2],
    options: {
      timeout: 1000,
    },
    width: lineWidth, // Number of characters in one line - default: 48
    characterSet: 'SLOVENIA', // Character set - default: SLOVENIA
    removeSpecialCharacters: false, // Removes special characters - default: false
    lineCharacter: '_', // Use custom character for drawing lines - default: -
  });

  const isConnected = await printer.isPrinterConnected();
  
  console.log('Printer connected:', isConnected);

  //printer.alignCenter();
  //await printer.printImage('./assets/olaii-logo-black-small.png');

  printer.alignCenter();
  printer.bold(true);
  printer.setTextDoubleHeight();
  printer.println('CARNALES MEXICAN GRILL');

  printer.setTextNormal();
  printer.println('Av. Gonzales Suarez 8-58');
  printer.println('RUC: 3050103781001   Tel: 0984348665');

  printer.bold(true);
  printer.setTextDoubleHeight();
  if (paraLlevar){
    printer.println('Llevar');
  }else{
    printer.println('Servirse');
  }

  printer.setTextNormal();
  printer.println(mesa);

  for (let i = 0; i <productosPedido.length; i++) {
    // Esto va a fallar con las mezclas
    let producto_i = getProductByName(productosPedido[i].name)
    let labelProducto = producto_i.alias?producto_i.alias:productosPedido[i].name;
    /* 
    printer.println( productosPedido[i].cantidad + "     " + labelProducto + "     " + getTotalPrice(productosPedido[i]));
    */
    printer.alignLeft();
    let ladoIzq = productosPedido[i].cantidad + "  " + labelProducto
    //Va a fallar con las mezclas
    let ladoDer = getTotalPrice(productosPedido[i])
    let puntos = lineWidth - (ladoIzq.length + ladoDer.length)// funciona mientras ladoIzq sea menos a los espacio restantes
    for (let j=0; j < puntos; j++){
      ladoDer = "." + ladoDer
    }

    printer.print(ladoIzq); 
    printer.alignRight();

    printer.print(ladoDer);
    printer.newLine();
    // Imprime los detalles del producto en una nueva línea con letra más pequeña
    let detalles = getDetallesProducto(productosPedido[i]);
    if (detalles!==""){
      //printer.setTextSize(1,1);
      printer.setTypeFontB(); 
      printer.println(detalles);
      printer.setTextNormal();
    }
  }

  //printer.println('_____________________');
  printer.drawLine();
  printer.alignRight();
  printer.bold(true);
  printer.setTextDoubleHeight();
  printer.print('Total: ' + cuentaTotal);

  printer.beep(); 
  printer.partialCut();

  try {
    await printer.execute();
    console.log('Print success.');
  } catch (error) {
    console.error('Print error:', error);
  }
}

router.get('/', async (req, res)=>{
    var pedidos = await Pedido.find();
    res.json(pedidos);
});

router.get('/:id', async (req, res)=>{
    var pedido = await Pedido.findById(req.params.id);
    res.json(pedido);  
});

router.get('/mesa/:num', async (req, res)=>{
    var pedido = await Pedido.find({mesa:req.params.num}).populate({path:'canasta.producto_id'});
    res.json(pedido);
}); 

router.post('/', async(req,res)=>{
    const pedido = req.body;  
    const {canastas, mesa, cuentaTotal, fecha, paraLlevar} = pedido;
    // la cuentaTotal debería ser recalculada aquí
    console.log(req.body)
    //const pedidoModelInstance = new Pedido({canastas, mesa, fecha, numPedido: numPedido++, cuentaTotal, paraLlevar, estado:"Pendiente"});
    const pedidoModelInstance = new Pedido({canastas, mesa, numPedido: numPedido++, cuentaTotal, paraLlevar, estado:"Pendiente"});
    await pedidoModelInstance.save();
    //imprimirPedido(pedido);
    console.log("Pedido Guardado")
    res.json({msj:'Tarea guardada e impresa'});
  });

router.put('/:id', async(req, res)=>{
    const { mesa, total, fecha, canasta, cantClientes } = req.body;
    const newPedido = {mesa, total, fecha, canasta};
    await Pedido.findByIdAndUpdate(req.params.id, newPedido);
    res.json('recibido');
});

router.delete('/:id', async(req, res)=>{
    await Pedido.findByIdAndRemove(req.params.id);
    res.json('Pedido borrado');
});

module.exports = router;