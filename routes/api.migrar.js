var express = require('express');
var router = express.Router();
const Producto = require('../models/producto');
const Egreso = require('../models/egreso');
const Inventario = require('../models/inventario');
const Registro = require('../models/registro');
// Documents to insert:
var Pollo =  {"nombre" : "Pollo", "tipo" : "Ingrediente", "cantDisponible" : 0, "unidades" : "g"};
var Cebolla =  {"nombre" : "Cebolla", "tipo" : "Ingrediente", "cantDisponible" : 0, "unidades" : "g"};
var Aguacate = {"nombre" : "Aguacate", "tipo" : "Ingrediente", "cantDisponible" : 0, "unidades" : "u"};
var  Tortilla =  {"nombre" : "Tortilla", "tipo" : "Ingrediente", "cantDisponible" : 0, "unidades" : "u"};
var  Harina =  {"nombre" : "Harina", "tipo" : "Ingrediente", "cantDisponible" : 0, "unidades" : "g"};
var  Sal =  {"nombre" : "Sal", "tipo" : "Ingrediente", "cantDisponible" : 0, "unidades" : "g"};
var  Servilletas =  {"nombre" : "Servilletas", "tipo" : "Item", "cantDisponible" : 0, "unidades" : "u"};


var regPollo = new Registro({"registros":[ { "fecha" : Date("2019-03-01T08:24:00Z"), "precio" : 1.21, "cantComprada" : 30 }, { "fecha" : Date("2019-03-05T08:24:00Z"), "precio" : 1.41, "cantComprada" : 27 }, { "fecha" : Date("2019-03-12T08:24:00Z"), "precio" : 1.21, "cantComprada" : 30 }, { "fecha" : Date("2019-03-14T08:24:00Z"), "precio" : 1.21, "cantComprada" : 30 }, { "fecha" : Date("2020-03-02T08:24:00Z"), "precio" : 1.21, "cantComprada" : 30 }, { "fecha" : Date("2020-03-07T08:24:00Z"), "precio" : 1.41, "cantComprada" : 27 }, { "fecha" : Date("2020-03-11T08:24:00Z"), "precio" : 1.21, "cantComprada" : 30 }, { "fecha" : Date("2020-03-12T08:24:00Z"), "precio" : 1.21, "cantComprada" : 30 }, { "fecha" : Date("2021-04-02T06:35:46.724Z"), "precio" : 1.6, "cantComprada" : 10 }, { "fecha" : Date("2021-04-15T10:36:24.583Z"), "precio" : 8, "cantComprada" : 500 }, { "fecha" : Date("2021-04-15T19:41:58.649Z"), "precio" : 1.2, "cantComprada" : 500 }, { "fecha" : Date("2021-04-15T20:42:29.220Z"), "precio" : 1.1, "cantComprada" : 10000 }, { "fecha" : Date("2021-04-15T20:43:17.002Z"), "precio" : 1.1, "cantComprada" : 10000 }]});
var regCebolla = new Registro({"registros":[ { "fecha" : Date("2019-03-01T08:24:00Z"), "precio" : 1.47, "cantComprada" : 30 }, { "fecha" : Date("2019-03-05T08:24:00Z"), "precio" : 1.41, "cantComprada" : 27 }, { "fecha" : Date("2019-03-12T08:24:00Z"), "precio" : 1.21, "cantComprada" : 30 }, { "fecha" : Date("2019-03-14T08:24:00Z"), "precio" : 1.21, "cantComprada" : 30 }, { "fecha" : Date("2020-03-02T08:24:00Z"), "precio" : 1.35, "cantComprada" : 30 }, { "fecha" : Date("2020-03-07T08:24:00Z"), "precio" : 1.41, "cantComprada" : 27 }, { "fecha" : Date("2020-03-11T08:24:00Z"), "precio" : 1.11, "cantComprada" : 30 }, { "fecha" : Date("2020-03-12T08:24:00Z"), "precio" : 1.38, "cantComprada" : 30 } ]});
var regAguacate = new Registro({"registros":[ { "fecha" : Date("2019-03-01T08:24:00Z"), "precio" : 1.27, "cantComprada" : 30 }, { "fecha" : Date("2019-03-05T08:24:00Z"), "precio" : 1.11, "cantComprada" : 27 }, { "fecha" : Date("2019-03-12T08:24:00Z"), "precio" : 1.34, "cantComprada" : 30 }, { "fecha" : Date("2019-03-14T08:24:00Z"), "precio" : 1.21, "cantComprada" : 30 }, { "fecha" : Date("2020-03-02T08:24:00Z"), "precio" : 1.35, "cantComprada" : 30 }, { "fecha" : Date("2020-03-07T08:24:00Z"), "precio" : 1.41, "cantComprada" : 27 }, { "fecha" : Date("2020-03-11T08:24:00Z"), "precio" : 1.11, "cantComprada" : 30 }, { "fecha" : Date("2020-03-12T08:24:00Z"), "precio" : 1.38, "cantComprada" : 30 } ]});
var regTortilla = new Registro({"registros":[ { "fecha" : Date("2019-03-01T08:24:00Z"), "cantProducida" : 30 }, {"fecha" : Date("2019-03-05T08:24:00Z"), "cantProducida" : 27 }, { "fecha" : Date("2019-03-12T08:24:00Z"), "cantProducida" : 30 }, { "fecha" : Date("2019-03-14T08:24:00Z"), "cantProducida" : 30 }, { "fecha" : Date("2020-03-02T08:24:00Z"), "cantProducida" : 30 }, { "fecha" : Date("2020-03-07T08:24:00Z"), "cantProducida" : 27 }, { "fecha" : Date("2020-03-11T08:24:00Z"), "cantProducida" : 30 }, { "fecha" : Date("2020-03-12T08:24:00Z"), "cantProducida" : 30 }, { "fecha" : Date("2021-04-16T04:36:45.556Z"), "cantProducida" : 15 } ]});
var regHarina = new Registro({"registros":[ { "fecha" : Date("2020-03-11T08:24:00Z"), "precio" : 1.11, "cantComprada" : 30000 } ]});
var regSal = new Registro({"registros":[ { "fecha" : Date("2020-03-11T08:24:00Z"), "precio" : 3.11, "cantComprada" : 3000 } ]});
var regServilletas = new Registro({"registros":[ { "fecha" : Date("2021-04-15T21:19:16.784Z"), "precio" : 1, "cantComprada" : 4000 }, { "fecha" : Date("2021-04-15T21:20:25.193Z"), "precio" : 1, "cantComprada" : 1000 }, { "fecha" : Date("2021-04-15T21:40:48.566Z"), "precio" : 2, "cantComprada" : 2 }, { "fecha" : Date("2021-04-15T21:47:33.712Z"), "precio" : 1, "cantComprada" : 5 }, { "fecha" : Date("2021-04-15T21:49:48.401Z"), "precio" : 2, "cantComprada" : 1 }, { "fecha" : Date("2021-04-15T21:52:07.830Z"), "precio" : 1, "cantComprada" : 1 }, { "fecha" : Date("2021-04-15T21:56:37.382Z"), "precio" : 1, "cantComprada" : 3 }, { "fecha" : Date("2021-04-15T21:58:14.712Z"), "precio" : 1, "cantComprada" : 5 }, { "fecha" : Date("2021-04-15T21:59:58.973Z"), "precio" : 1, "cantComprada" : 10 }]});

var itemsArray = [Pollo, Cebolla, Aguacate, Tortilla, Harina, Sal, Servilletas];
var regArray = [regPollo, regCebolla, regAguacate, regTortilla, regHarina, regSal, regServilletas];
var invArray = [];



// API to get the needed data to create the charts
router.get('/', async(req, res, next) =>{
    //var query = await Inventario.find({'tipo':'Ingrediente'}).select('nombre cantDisponible -_id');


    for (let i=0;i<itemsArray.length;i++){
        await regArray[i].save(function(err){
           var invModelInstance = new Inventario(Object.assign({}, itemsArray[i], {"registro":regArray[i]._id}));
           invModelInstance.save(function(err){
            if (err) return handleError(err);
           });
        });      
    }
    /*
    await regPollo.save(function(err){
        if (err) return handleError(err);
        var invPollo = new Inventario(Object.assign({}, Pollo, {"registro":regPollo._id}));
        invPollo.save(function (err) {
            if (err) return handleError(err);
        });        
    });*/

    console.log('API is working');
    res.json('exito');
});
  
module.exports = router;