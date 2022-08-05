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

function getProductByName(productName){
  return productos.find(producto => producto.name === productName);
}

function getTotalPrice(productFromOrder){
  let cantidad = productFromOrder.cantidad;
  let precioProducto = getProductByName(productFromOrder.name).precio;
  return (precioProducto*cantidad).toFixed(2);
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
    lineCharacter: '-', // Use custom character for drawing lines - default: -
  });

  const isConnected = await printer.isPrinterConnected();
  
  console.log('Printer connected:', isConnected);

  //printer.alignCenter();
  //await printer.printImage('./assets/olaii-logo-black-small.png');

  printer.alignCenter();
  printer.bold(true);
  printer.setTextDoubleHeight();
  printer.println('Carnales');

  printer.alignLeft();
  printer.bold(true);
  printer.setTextNormal();

  for (let i = 0; i <productosPedido.length; i++) {
    let labelProducto = getProductByName(productosPedido[i].name).alias?getProductByName(productosPedido[i].name).alias:productosPedido[i].name;
    printer.println(labelProducto + "     " + productosPedido[i].cantidad + "     " + getTotalPrice(productosPedido[i]));
  }

  //printer.println('______________________');
  printer.drawLine();
  printer.println('Total: ' + cuentaTotal);


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