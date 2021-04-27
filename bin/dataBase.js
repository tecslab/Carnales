/*var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/Carnales";
var url = "mongodb://localhost:27017/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("cliente", function(err,res){
  	if (err) throw err;
  	console.log("collection created");
  	db.close();
  });
});*/


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  var objeto = {nombre:"Falopa",precio:"2,12"};
  dbo.collection("clientes").insertOne(objeto,function(err,res){
  	if (err) throw err;



    var start = new Date(2010, 11, 1);
    var end = new Date(2010, 11, 30);
    db.posts.find({created_on: {$gte: start, $lt: end}});




    
    console.log("One document inserted");
    db.close();
  });

  /*dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });*/

});




/*MongoClient.connect(url, function(err, db) {

    var cursor = db.collection('Employee').find();

    cursor.each(function(err, doc) {

        console.log(doc);

    });
});*/


//var cursor=db.collection('Employee').find({EmployeeName: "guru99"})

/*MongoClient.connect(url, function(err, db) {

    db.collection('Employee').insertOne({
        Employeeid: 4,
        EmployeeName: "NewEmployee"
    });
});*/


/*db.collection('Employee').deleteOne(

        {
            "EmployeeName": "Mohan"
        }

    );
*/

