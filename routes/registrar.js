// It is needed to implement the query with ID instead of 'nombre field'
// Se necesita bloquear la base de datos cuando se reealiza un update
//  sobre el campo 'cantDisponible' de 'Inventario'
// like a transaction
var express = require('express');
var router = express.Router();
const Producto = require('../models/producto');
const Egreso = require('../models/egreso');
const Inventario = require('../models/inventario');

//Convert from dollars to cents. Data will saved on cents.
function conv2Cent(number){
  var numberString=number.toString();
  var length = numberString.length;
  var dotIndex = numberString.indexOf('.');
  if(dotIndex==-1){
    return Number(numberString+"00");
  }else if(dotIndex==length-2){
    var replace = numberString.replace('.',"")+"0";
    return Number(replace);
  }else if(dotIndex==length-3){
    var replace = numberString.replace('.',"");
    return Number(replace);
  }else{
    return "error"
  }
}

function conv2Grams(number){
  var numberString=number.toString();
  var length = numberString.length;
  var dotIndex = numberString.indexOf('.');
  if(dotIndex==-1){
    return Number(numberString+"000");
  }else if(dotIndex==length-2){
    var replace = numberString.replace('.',"")+"00";
    return Number(replace);
  }else if(dotIndex==length-3){
    var replace = numberString.replace('.',"")+"0";
    return Number(replace);
  }else if(dotIndex==length-4){
    var replace = numberString.replace('.',"");
    return Number(replace);
  }else{
    return "error";
  } 
}

router.post('/', async(req, res)=>{
  console.log(req.body);
  var { tipo } = req.body;
  console.log(tipo);
  if (tipo=='registro-general'){
    var { comentario }=req.body;
    if (comentario==''){
      var {nombre, monto} = req.body;
      monto=conv2Cent(monto);
      var egreso = new Egreso({nombre, tipo, monto});

    }else{
      var {nombre, monto} = req.body;
      console.log(monto);
      monto=conv2Cent(monto);
      console.log(monto);
      var egreso = new Egreso({nombre, tipo, monto, comentario});        
    }
    await egreso.save();
    res.redirect(302,'/registraregreso');
    console.log('1 Document inserted');
  }else if (tipo=='agregar-item' || tipo=='agregar-ingrediente'){
    // Update the inventory register
    // Add the ingredient to cantDisponible and add one register to registros
    // Then one document to egresos
    var {nombre, precio, cantidad} = req.body;
    var  registerInventario = await Inventario.findOne({ nombre }).populate('registro');;
    var cantidadPrevia = registerInventario.cantDisponible;
    var { unidades } = registerInventario;
    var { registros } = registerInventario.registro;
    // Kg just to test it
    if (unidades=='g' || unidades =='Kg'){
      var cantDisponible  = conv2Grams(cantidad) + cantidadPrevia;
      registros.push({"fecha":new Date(),"precio":precio,"cantComprada":conv2Grams(cantidad)});
    }else if (unidades=='u'){
      var cantDisponible = Number(cantidad) + cantidadPrevia;
      registros.push({"fecha":new Date(),"precio":precio,"cantComprada":cantidad});
    }    
    await Inventario.findOneAndUpdate({nombre}, {$set: {cantDisponible,registros}});
    var monto = conv2Cent(precio*cantidad);
    var egreso = new Egreso({nombre,tipo, monto});
    await egreso.save();
    console.log('2 Document inserted');
    res.redirect(302,'/registraregreso');

  }else if(tipo=='establecer-item' || tipo=='establecer-ingrediente'){
    //update Inventory register cantDisponible
    var {nombre, cantidad} =  req.body;
    await Inventario.findOneAndUpdate({nombre},{$set:{cantDisponible:cantidad}});
    console.log('1 Document inserted');
    res.redirect(302,'/registraregreso');
  }else if(tipo=='produccion'){
    // Update the inventory register of the produced item...
    var { nombre, cantidad } = req.body;
    var registerInventario = await Inventario.findOne({nombre}).populate('registro');
    var cantPrevia = registerInventario.cantDisponible;
    var cantDisponible = cantPrevia + Number(cantidad);
    var registros= registerInventario.registro.registros;
    registros.push({"fecha":new Date(), "cantProducida":cantidad});
    await Inventario.findOneAndUpdate({nombre},{$set:{cantDisponible:cantDisponible, registros}});
    // and its ingredients registers
    // It is needed to search the quatites of the ingredients in the
    // products collection
    var { ingredientBowl }= await Producto.findOne({nombre}).populate('ingredientBowl.ingredientId');
    //var query = await Producto.find().populate('ingredientBowl.ingredientID');
    for (let i in ingredientBowl){
     var ingredientName = ingredientBowl[i].nombre;
     var ingredientCant = Number(ingredientBowl[i].cantidad);
     //var ingredientInventario = await Inventario.findOne({nombre:ingredientName});
     var ingredientPrevCant= ingredientBowl[i].ingredientId.cantDisponible;
     var ingredientCurrentCant=ingredientPrevCant - ingredientCant*Number(cantidad);
     await Inventario.findOneAndUpdate({nombre:ingredientName},{$set:{cantDisponible:ingredientCurrentCant}});
    }
    console.log('1 Document inserted');
    res.redirect(302,'/registraregreso');
  }else{
      console.log('Failded Operation');
  }
});

module.exports = router;