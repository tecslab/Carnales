const express = require('express');
const router = express.Router();
const Ingrediente = require('../models/ingrediente');

router.get('/', async (req, res)=>{
  const ingredientes = await Ingrediente.find();
  res.json(ingredientes);
});

router.get('/:id', async (req, res)=>{
    const ingrediente = await Ingrediente.findById(req.params.id);
    res.json(ingrediente);
});

router.post('/', async(req,res)=>{
    const {nombre, unidad } = req.body;
    const ingrediente = new Ingrediente({nombre, unidad });
    await ingrediente.save();
    res.json('Ingrediente Creado');
});

router.put('/:id', async(req, res)=>{
    const {nombre, unidad } = req.body;
    const newIngrediente = {nombre, unidad };
    await Ingrediente.findByIdAndUpdate(req.params.id, newIngrediente);
    res.json('Ingrediente actualizado');
});

router.delete('/:id', async(req, res)=>{
    await Ingrediente.findByIdAndRemove(req.params.id);
    res.json('Ingrediente borrado');
});

module.exports = router;