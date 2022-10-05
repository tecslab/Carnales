var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var pedidoSchema = new Schema({
    // Se tiene una canasta por cada cliente
    /* canastas: [{productos:[{
        producto_id:{type:Schema.Types.ObjectId, ref:'Producto',required:true},
        observacion:String, //Definir observaciones como objeto, analizar si es viable definir un esquema
        cantidad:{type:Number, required:true},
    }]}], */ //Deshabilitado temporalmente hasta que se asigne un código a las mezclas
    canastas: [{productos:[{
        name: String,
        observacion:String, //Definir observaciones como objeto, analizar si es viable definir un esquema
        cantidad:{type:Number, required:true},
    }]}],
    mesa: {type: String, required:true},
    fecha: {type:Date, required:true, default: Date.now },
    numPedido: {type: Number}, //Número de pedido en el día
    cuentaTotal: {type: Number, required:true},
    paraLlevar: {type: Boolean, required:true},
    /* cantClientes: Number, */
    estado: {
        type: String,
        enum: {
            values: ['Pendiente', 'Pagado', 'Cancelado'],
            message: '{VALUE} is not supported'
        }
    }
});
//  {name: productoAProcesar.name, cantidad: selectedProducts.length, eliminables: productoAProcesar.eliminables, opciones: productoAProcesar.opciones };
// let pedido = {
//     mesa: props.mesaSeleccionada,
//     canastas: canastas,
//     cuentaTotal: props.cuentaTotal,
//     paraLlevar: props.paraLlevar
//   }

// abstraer la hora
module.exports=mongoose.model('Pedido',pedidoSchema);