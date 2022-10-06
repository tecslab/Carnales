var express = require('express');
var router = express.Router();
const Producto = require('../models/producto');
const Egreso = require('../models/egreso');
const Inventario = require('../models/inventario');
const Registro = require('../models/registro');
const Pedido = require('../models/pedido');

// API to get the needed data to create the charts
router.get('/', async(req, res, next) =>{
    //var query = await Inventario.find({'tipo':'Ingrediente'}).select('nombre cantDisponible -_id');
    //var query = await Inventario.find().populate('registro');
    //var query = await Producto.find().populate({path:'ingredientBowl.ingredientId'});

    let currentDate = new Date();

    let start = new Date(new Date(new Date(new Date(currentDate.setMinutes(0)).setHours(0)).setSeconds(0)));
    let end = new Date(new Date(start.getTime()).setDate(start.getDate()+1));

    let pedidosDía = await Pedido.find({
        createdAt: {
            $gte: start, 
            $lt: end
        }
    });

    let cantPedidos = pedidosDía.length;

    let ingresoTotal = 0

    pedidosDía.forEach(pedido => {
        ingresoTotal += pedido.cuentaTotal;
    })

    ingresoPromedioXPedido = cantPedidos!==0?ingresoTotal/cantPedidos:0;

    res.json({cantPedidos, ingresoTotal, ingresoPromedioXPedido});
});
  
module.exports = router;