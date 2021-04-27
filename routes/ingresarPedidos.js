var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //var id =req.body["pos[id]"];
  //res.render('ingresarPedidos', { title: 'IngresarPedidos', id: id });
  res.render('ingresarPedidos', { title: 'Ingresar Pedidos'});
});

module.exports = router;
