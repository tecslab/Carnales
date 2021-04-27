var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var inventarioSchema = new Schema({
   nombre: {type: String, required:true},
   tipo: {type: String},
   cantDisponible: {type: Number, min:0},
   unidades: {type: String},
   registro:{
       type:mongoose.Schema.Types.ObjectId,
       ref: 'Registro'
   }
}, { collection: 'inventario' });

module.exports=mongoose.model('Inventario',inventarioSchema);
