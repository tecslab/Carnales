var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var egresoSchema = new Schema({
   nombre: {type: String, required:true},
   tipo: {type: String},
   monto: {type: Number, min:0},
   comentario: {type: String}
});

module.exports=mongoose.model('Egreso',egresoSchema);
