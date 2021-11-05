import Inventario from './inventario.js';


// Create an instance of model SomeModel
var awesome_instance = new Inventario({ nombre: 'awesome', tipo:'test', cantDisponible:7, unidades:'kg' });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
