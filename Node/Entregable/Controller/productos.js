var producto = require('../Model/productos')

function obtenerPorNombre(nombre){
var respuesta = "";
producto.find({Nombre: new RegExp(nombre, 'i')}, function (err, productos){
    if(err) return productos.send(500, err.message);
    console.log("2" + productos);
    respuesta = "nombre: " + productos[0].Nombre + " " + "precio: $" + productos[0].Precio;
    console.log(respuesta);
    return respuesta;
});

}

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
//recibe parametro nombre
exports.findByName = function(req, res){
    var nombre = "";
    var productos = [];
        nombre= req.query.nombre;
        console.log("1"+nombre);
        productos = obtenerPorNombre(nombre);
        console.log("1.5"+productos);
        //while(!productos){}
        console.log("3"+productos);
        return res.send(productos);       
};







//lista de productos ordenados por precio(asc), en un rango de precios, se pasa el min y el max.

//dada  una lista de productos(id), determinar cuales se encuentran a menos de una semana de la fecha de caducidad y aplicarle una rebaja del 50% precio.