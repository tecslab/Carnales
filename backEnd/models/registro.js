var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var registroSchema = new Schema({
    registros: [{
        fecha: Date, 
        precio: Number, 
        cantComprada: Number, 
        cantProducida: Number
    }]
   });

module.exports=mongoose.model('Registro',registroSchema);