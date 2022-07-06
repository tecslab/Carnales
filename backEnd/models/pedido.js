var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var pedidoSchema = new Schema({
    canastas: [{productos:[{
        producto_id:{type:Schema.Types.ObjectId, ref:'Producto',required:true},
        observacion:String, //Definir observaciones como objeto, analizar si es viable definir un esquema
        cantidad:{type:Number, required:true},
        /* cliente: String */
    }]}],
    mesa: {type: String, required:true},
    fecha: {type:Date, required:true, default: Date.now },
    numPedido: {type: Number}, //Número de pedido en el día
    total: {type: Number, required:true},
    /* cantClientes: Number, */
    estado: {
        type: String,
        enum: {
            values: ['Pendiente', 'Pagado', 'Cancelado'],
            message: '{VALUE} is not supported'
        }
    }
});


// abstraer la hora
module.exports=mongoose.model('Pedido',pedidoSchema);