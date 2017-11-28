var casa = require('../Model/casas')
var rangos = require('../Model/rangos')

function ObtenerCatDadoPrecio(precio){
rangos.find({max: {$gt: precio}, min: {$lt: precio}}, function (err, rangos){
    if(err) return rangos.send(500, err.message);
    console.log(rangos[0].categoria);
    return rangos[0].categoria;
    });
}

exports.add = function(req, res) {
    var home = new casa({
        numero: req.body.numero,
        direccion: req.body.direccion,
        precio: req.body.precio
    });
    home.save(function(err, casa){
    if(err) return res.send(500, err.message);
    res.status(200).jsonp(casa);
    });
};

exports.findAll = function(req, res) {
    casa.find(function(err, Casa){
        if(err){
             res.send(500, err.message);
        }
        res.status(200).jsonp(Casa);
    });
};

exports.findById = function(req, res){
    var precio = 0;
    casa.findById(req.params.id, function(err, Casa){
        if(err)
            return res.send(500, err.message);
            //res.status(200).jsonp(Casa);
        precio = Casa.precio;
        console.log(precio);
    });
    rangos.find({}, function(err,Rangos){
    if(err)
            return res.send(500, err.message);
    var categoria = ObtenerCatDadoPrecio(precio);                       
    return res.send(categoria);
    
    });
};



/*rangos.find(function(err, Rangos){
        if(err){
        res.send(500, err.message);
    }
    var categoria = ObtenerCatDadoPrecio(precio);
    res.status(200).jsonp(categoria);
    });*/