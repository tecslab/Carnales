var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var pedidosSchema = new Schema({
   productos: [{
       categoria:String,
       variedad:String,
       observacion:String,
       cantidad:Number
   }],
   mesa: {type: String},
   hora: {type:Date},
   numPedido: {type: Number},
   total: {type: Number}
});

module.exports=mongoose.model('Pedidos',pedidosSchema);