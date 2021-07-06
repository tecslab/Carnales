const mongoose = require('mongoose'),
    {Schema} = mongoose;

const ingredienteSchema = new Schema({
   nombre: {type: String, required:true},
   unidad: {type: String, required:true}
});

module.exports=mongoose.model('Ingrediente',ingredienteSchema);