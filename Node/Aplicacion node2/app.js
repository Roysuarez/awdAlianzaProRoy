var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

    mongoose.Promise = global.Promise;
    
    //Middlewares
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use (methodOverride());

    

    //Conexión con Mongo
    mongoose.connect('mongodb://localhost/roydb2', function(err, res){
        if(err) throw err;
        console.log('Conectado a la base de datos');
    });

    var casas = require('./Router/casas');
    var rangos = require('./Router/rangos');

    app.use(casas);
    app.use(rangos);
    app.listen(3000, function() {
        console.log("Servicio de node corriendo en la dirección http://localhost:3000");
    }); 