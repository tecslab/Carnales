var express = require('express');
var router = express.Router();

/* GET Registro Page. */
router.get('/', function(req, res, next) {
  res.render('registrarEgreso', { title: 'Registrar Egreso' });
});

module.exports = router;