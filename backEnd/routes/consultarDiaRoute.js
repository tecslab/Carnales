var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("Carnales");

	  	var currentDate = new Date();

	  	//var start=new Date(1611434653375);
	  	var start = new Date(new Date(new Date(new Date(currentDate.setMinutes(0)).setHours(0)).setSeconds(0)));
		var end = new Date(new Date(start.getTime()).setDate(start.getDate()+1));
		//db.posts.find({created_on: {$gte: start, $lt: end}});
		


	  dbo.collection("pedidos").find({'Hora': {$gte: start, $lt: end}}).toArray(function(err, result) {
	  //dbo.collection("pedidos").find({created_on: {$gte: start, $lt: end}}).toArray(function(err, result) {
	    if (err) throw err;

	    if (result){
	      console.log(result);
	    } else  {
	      console.log('not found');
	    }

	    //console.log(result);
	    res.render('consultarDia', { title: 'Consultar Día', data:JSON.stringify(result) });
	    db.close();
	  });




	});





  
});

module.exports = router;