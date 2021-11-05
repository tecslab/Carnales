var express = require('express');
var router = express.Router();

//console.log(testing);
//var app = express();
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('dashboard', { title: 'Dashboard'});
});

module.exports = router;