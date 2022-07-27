/* var printer = require("node-thermal-printer");

printer.init({
    type: "epson",
    interface: '/dev/usb/lp0'
}); */

//printer.beep();
//printer.alignCenter();


/* const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;

let printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  //type: "epson",
  interface: '/dev/usb/lp0'
  //interface: 'printer: auto'
});


printer.println("Hello world");

//await printer.printImage('./assets/olaii-logo-black.png')
printer.cut();

try {
  await printer.execute();
  console.error("Print done!");
} catch (error) {
  console.log("Print failed:", error);
} */



const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido');

const parametrosGlobales = require('../parametrosGlobalesBack')
let productos = parametrosGlobales.constants.productos;
let ingredientes = parametrosGlobales.constants.ingredientes;

function getProductByName(productName){
  return productos.find(producto => producto.name === productName);
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
    return detalles;
  }
  return("");
  // **Sin (Aguacate, Cebolla) - Dividido ->36 caracteres
}

const ThermalPrinter = require('node-thermal-printer').printer;
const Types = require('node-thermal-printer').types;

async function imprimirPedido(pedido) {
  //  {productos:[{name, cantidad, observacion}]}
  const {cuentaTotal} = pedido;
  let productosPedido = pedido.canastas[0].productos;

  const printer = new ThermalPrinter({
    type: Types.EPSON, // 'star' or 'epson'
    interface: '/dev/usb/lp1',
    //interface: process.argv[2],
    options: {
      timeout: 1000,
    },
    width: 48, // Number of characters in one line - default: 48
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
  printer.println('Carnales');

  printer.setTextNormal();
  printer.println('Mexican Grill');
  printer.alignLeft();
  printer.bold(true);
  

  for (let i = 0; i <productosPedido.length; i++) {
    let labelProducto = getProductByName(productosPedido[i].name).alias?getProductByName(productosPedido[i].name).alias:productosPedido[i].name;
    /* 
    printer.println( productosPedido[i].cantidad + "     " + labelProducto + "     " + getTotalPrice(productosPedido[i]));
    */
    printer.alignLeft();
    printer.print(productosPedido[i].cantidad + "  " + labelProducto); 
    printer.alignRight();
    printer.print(getTotalPrice(productosPedido[i]));
    printer.newLine();
    // Imprime los detalles del producto en una nueva línea con letra más pequeña
    let detalles = getDetallesProducto(productosPedido[i]);
    if (detalles!==""){
      printer.setTextSize(3,3);
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

  printer.cut();

  try {
    await printer.execute();
    console.log('Print success.');
  } catch (error) {
    console.error('Print error:', error);
  }
}

//imprimirPedido();


router.post('/', async(req,res)=>{
  
  //const pedido = JSON.parse(req.body);
  const pedido = req.body;
  console.log(pedido);
  imprimirPedido(pedido);
  res.json('Impreso');
});

module.exports = router;