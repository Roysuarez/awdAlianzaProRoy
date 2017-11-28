var producto = require('../Model/productos')

exports.add = function(req, res) {
    var product = new producto({
        Nombre: req.body.nombre,
        Precio: req.body.precio,
        Fecha: req.body.fecha,
        Descripcion: req.body.descripcion
    });
    product.save(function(err, producto){
    if(err) return res.send(500, err.message);
    res.status(200).jsonp(producto);
    });
};

exports.update = function(req, res){
    producto.findById(req.params.id, function(err, Producto){
        if(err) return res.send(500, err.message);
        Producto.nombre = req.body.nombre;
        Producto.precio = req.body.precio;
        Producto.fecha = req.body.fecha;
        Producto.descripcion = req.body.descripcion;

        Producto.save(function(err) {
        if(err) return res.send(500, err.message);
        res.status(200).jsonp(producto);
    });
    });
};

exports.findAll = function(req, res) {
    producto.find(function(err, Producto){
        if(err){
             res.send(500, err.message);
        }
        res.status(200).jsonp(Producto);
    });
};

exports.findById = function(req, res){
    producto.findById(req.params.id, function(err, Producto){
        if(err)
            return res.send(500, err.message);
            res.status(200).jsonp(Producto);
    });

};

exports.findByName = function(req, res){
    producto.findByName(req.params.nombre, function(err, Producto){
        if(err)
            return res.send(500, err.message);
            res.status(200).jsonp(Producto);
    });
};

//lista de productos ordenados por precio(asc), en un rango de precios, se pasa el min y el max.

//dada  una lista de productos(id), determinar cuales se encuentran a menos de una semana de la fecha de caducidad y aplicarle una rebaja del 50% precio.