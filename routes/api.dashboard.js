var express = require('express');
var router = express.Router();
const Producto = require('../models/producto');
const Egreso = require('../models/egreso');
const Inventario = require('../models/inventario');
const Registro = require('../models/registro');

// API to get the needed data to create the charts
router.get('/', async(req, res, next) =>{
    //var query = await Inventario.find({'tipo':'Ingrediente'}).select('nombre cantDisponible -_id');
    //var query = await Inventario.find().populate('registro');
    var query = await Producto.find().populate({path:'ingredientBowl.ingredientId'});
    
    console.log('API is working');
    res.json(query);
});
  
module.exports = router;