var express = require('express');
var router = express.Router();

//console.log(testing);
//var app = express();
/* GET home page. */
router.get('/', function(req, res, next) {
	//console.log(globalOrders);
	
	//console.log(globalOrders);
	//console.log(globalOrders[0].Productos[0]);
  console.log(JSON.stringify(globalOrders));
  res.render('pendientes', { title: 'Pedidos Pendientes', pedidos: JSON.stringify(globalOrders), date:new Date()});
});

module.exports = router;