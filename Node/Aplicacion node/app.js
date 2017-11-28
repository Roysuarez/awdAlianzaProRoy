
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

    //Middlewares
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use (methodOverride());

    //Conexión con Mongo
    mongoose.connect('mongodb://localhost/roydb', function(err, res){
        if(err) throw err;
        console.log('Connected to Database');
    });

    var router = express.Router();

    router.get('/', function(req, res){
        res.send("TA prontoooooooooooooooo!");
    });
    // Importar Models y Controllers
    
    var movieCtrl = require('./controllers/Movies');

    var api = express.Router();

    api.route('/movies')
    .get(movieCtrl.findAll)
    .post(movieCtrl.add);

    api.route('/movies/:id')
    .get(movieCtrl.findById)
    .put(movieCtrl.update)
    .delete(movieCtrl.delete);

    app.use(router);
    app.use(api);
    app.listen(3000, function() {
        console.log("Node server running on http://localhost:3000");
    });
