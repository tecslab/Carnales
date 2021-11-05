const mongoose = require('mongoose');
const URI='mongodb://localhost/Carnales';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err=>console.error(err));
  


function migrar(){
    const Producto = require('../models/producto');
    const Egreso = require('../models/egreso');
    const Inventario = require('../models/inventario');
    const Registro = require('../models/registro');

    // API to get the needed data to create the charts
        //var query = await Inventario.find({'tipo':'Ingrediente'}).select('nombre cantDisponible -_id');
    var query = await Inventario.find().populate('registros');
    console.log('API is working');
    res.json(query[0].nombre);
};