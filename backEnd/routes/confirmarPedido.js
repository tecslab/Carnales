var express = require('express');
var router = express.Router();
const _ = require('../public/javascripts/lodash.min.js');
/* GET home page. */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.post('/', function(req, response, next) {
	var pedido = JSON.parse(req.body["pedido[pedido]"]);
  var clientes=pedido.Clientes;
  delete pedido.Clientes;

  // Extraemos todos los productos y los agrupamos
  var productosNew=[];
  for (let i in clientes){
    var productosOld=clientes[i].productos;
    for (let j=0;j<productosOld.length;j++){
      var prod = {...productosOld[j]};
      var cantidad = prod.Cantidad;
      delete prod['Cantidad'];
      delete prod['Observacion'];

      if (productosNew.length>0){
        for (let k=0;k<productosNew.length;k++){
          var productComp = {...productosNew[k]};
          delete productComp.Cantidad;
          if (_.isEqual(productComp, prod)==true){
              // Si está repetido le suma 1 a la cantidad
              productosNew[k].Cantidad+=cantidad;
              // console.log(products[j].Cantidad);
              break;
            }else if(k==productosNew.length-1){
              // Si es un producto nuevo crea ese producto
              prod.Cantidad=cantidad;
              productosNew.push({...prod});
              break;
            }
        }
      }else{
          prod.Cantidad=cantidad;
          productosNew.push({...prod});
      }
    }
  }

	pedido.Hora=new Date();
  pedido.productos=productosNew;
  pedido.clientes=clientes.length;

	MongoClient.connect(url, function(err, db) {
  	if (err) throw err;
		var dbo = db.db("Carnales");
  	dbo.collection("pedidos").insertOne(pedido, function(err, res) {
    	//if (err) throw err;
    	if (!err) {
    		//307 is to preserve the send method, but now we have post->get
    		response.redirect(302,'/ingresarPedidos');
    		console.log("1 document inserted");
    	}else{
    		response.status(204).send();
			throw err;
    	}
    	db.close();
  		});
	});

});

module.exports = router;
