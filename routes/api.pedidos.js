const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido');

router.get('/', async (req, res)=>{
    var pedidos = await Pedido.find();
    res.json(pedidos);
});

router.get('/:id', async (req, res)=>{
    var pedido = await Pedido.findById(req.params.id);
    res.json(pedido);  
});

router.get('/mesa/:num', async (req, res)=>{
    var pedido = await Pedido.findOne({mesa:req.params.num}).populate({path:'canasta.producto_id'});
    res.json(pedido);
}); 

router.post('/', async(req,res)=>{
    const {mesa, total, fecha, canasta, cantClientes} = req.body;
    const pedido = new Pedido({mesa, total, fecha, canasta});
    await pedido.save();
    res.json('Tarea guardada');
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

/*{
    "mesa" : "5",
    "total" : "10",
    "fecha" : "2021-04-26T23:22:55.410Z",
    "cantClientes": "2",
     "canasta" : [{
           "producto_id" : "60891d2c3867538f9df1498a",
           "observacion" : "Sin cebolla",
           "cantidad" : "6"
       }, {
           "producto_id" : "60891d2c3867538f9df1498a",
           "cantidad" : "2"
        }]
}*/