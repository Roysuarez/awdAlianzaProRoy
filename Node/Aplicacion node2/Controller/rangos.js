var rangos = require('../Model/rangos')

exports.add = function(req, res) {
    var rango = new rangos({
        min: req.body.min,
        max: req.body.max,
        categoria: req.body.categoria
    });
    rango.save(function(err, Rango){
    if(err) return res.send(500, err.message);
    res.status(200).jsonp(Rango);
    });
};

exports.findAll = function(req, res) {
    rangos.find(function(err, Rango){
        if(err){
             res.send(500, err.message);
        }
        res.status(200).jsonp(Rango);
    });
};

exports.findById = function(req, res){
    rangos.findById(req.params.id, function(err, Rango){
        if(err)
            return res.send(500, err.message);
            res.status(200).jsonp(Rango);
    });

;}