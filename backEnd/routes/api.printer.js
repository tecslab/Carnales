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

function findProductByName(productName){
  return productos.find(producto => producto.name === productName);
}

function getTotalPrice(productFromOrder){
  let cantidad = productFromOrder.cantidad;
  let precioProducto = findProductByName(productFromOrder.name).precio;
  return (precioProducto*cantidad).toFixed(2);
}

/* const ThermalPrinter = require('node-thermal-printer').printer;
const Types = require('node-thermal-printer').types; */

async function imprimirPedido(pedido) {
  //  {productos:[{name, cantidad, observacion}]}
  const {cuentaTotal} = pedido;
  let productos = pedido.canastas[0].productos;

  const printer = new ThermalPrinter({
    type: Types.EPSON, // 'star' or 'epson'
    interface: '/dev/usb/lp0',
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
  printer.setTextDoubleHeight();
  printer.newLine();
  printer.println('Carnales');
  printer.newLine();
  printer.alignLeft();
  printer.setTextNormal();

  for (let i = 0; i <productos.length; i++) {
    printer.println(productos[i].name + "x" + productos[i].cantidad + ":" + getTotalPrice(productos[i]));
  }

  printer.println('_____________________');
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
  console.log('test');
  //const pedido = JSON.parse(req.body);
  const pedido = req.body;
  console.log(pedido);
  res.json('Impreso');
});

module.exports = router;