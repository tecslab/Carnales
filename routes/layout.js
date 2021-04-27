var express = require('express');
var router = express.Router();
var path = require('path');


/* GET Mapa. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/../public/layout.html'));
});

module.exports = router;