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
    mongoose.connect('mongodb://localhost/roydb', function(err, res){
        if(err) throw err;
        console.log('Conectado a la base de datos');
    });

    var usuarios = require('./Router/usuarios');
    var productos = require('./Router/productos');

    app.use(usuarios);
    app.use(productos);
    app.listen(3000, function() {
        console.log("Servicio de node corriendo en la dirección http://localhost:3000");
    }); 