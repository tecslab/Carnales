var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var pedidoSchema = new Schema({
   canasta: [{
       producto_id:{type:Schema.Types.ObjectId, ref:'Producto',required:true},
       observacion:String,
       cantidad:{type:Number, required:true}
   }],
   mesa: {type: String, required:true},
   fecha: {type:Date, required:true},
   numPedido: {type: Number},
   total: {type: Number, required:true},
   cantClientes: Number,
});


// abstraer la hora
module.exports=mongoose.model('Pedido',pedidoSchema);