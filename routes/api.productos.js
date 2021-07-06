const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');

router.get('/', async (req, res)=>{
    const productos = await Producto.find();
    res.json(productos);
});

router.get('/:id', async (req, res)=>{
    const producto = await Producto.findById(req.params.id);
    res.json(producto);  
});

router.post('/', async(req,res)=>{
    const {nombre, categoria, variedad, ingredietBowl} = req.body;
    const producto = new Producto({nombre, categoria, variedad, ingredietBowl});
    await producto.save();
    res.json('Producto Creado');
});

router.put('/:id', async(req, res)=>{
    const {nombre, categoria, variedad, ingredietBowl} = req.body;
    const newProducto = {nombre, categoria, variedad, ingredietBowl};
    await Producto.findByIdAndUpdate(req.params.id, newProducto);
    res.json('Producto actualizado');
});

router.delete('/:id', async(req, res)=>{
    await Producto.findByIdAndRemove(req.params.id);
    res.json('Producto borrado');
});

module.exports = router;