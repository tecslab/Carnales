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







const ThermalPrinter = require('node-thermal-printer').printer;
const Types = require('node-thermal-printer').types;

async function example() {
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

  printer.alignLeft();
  printer.newLine();
  printer.println('Hello Richard!!!!');

  printer.cut();

  try {
    await printer.execute();
    console.log('Print success.');
  } catch (error) {
    console.error('Print error:', error);
  }
}

example();