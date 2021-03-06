var mongoose = require('mongoose'),
    {Schema} = mongoose;

var productoSchema = new Schema({
   nombre: {type: String, required:true},
   categoria: {type: String, required:true},
   /* the 'nombre' field es being redundant*/
   ingredientBowl: [{ingredientId: {type: Schema.Types.ObjectId, ref:'Inventario'}, nombre:String, cantidad:Number}]
});


module.exports=mongoose.model('Producto',productoSchema);
