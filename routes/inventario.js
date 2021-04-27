var express = require('express');
var router = express.Router();

/* GET Mapa. */
router.get('/', function(req, res, next) {
  res.render('inventario', { title: 'Inventario' });
});

module.exports = router;