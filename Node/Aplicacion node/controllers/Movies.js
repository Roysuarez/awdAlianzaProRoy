var movie = require('../models/Movies')

//GET - Devuelve todos los registros. Siempre preguntar el error primero
exports.findAll = function(req, res) {
    movie.find(function(err, Movies){
        if(err){
             res.send(500, err.message);
        }
        res.status(200).jsonp(Movies);
    });
};
//.GET - Devuelve un registro especifico
exports.findById = function(req, res){
    movie.findById(req.params.id, function(err, Movie){
        if(err)
            return res.send(500, err.message);
            res.status(200).jsonp(Movie);
    });
;}

//POST - Insertar un nuevo registro
exports.add = function(req, res) {
    console.log(req);
    var pelicula = new movie({
        title: req.body.title,
        writer: req.body.writer,
        year: req.body.year,
        actors: req.body.actors,
        synopsis: req.body.synopsis,
        franchise: req.body.franchise
    });
    pelicula.save(function(err, movie){
    if(err) return res.send(500, err.message);
    res.status(200).jsonp(movie);
    });
};

//PUT - Actualizar un registro que ya existe
exports.update = function(req, res){
    movie.findById(req.params.id, function(err, Movie){
        if(err) return res.send(500, err.message);
        //console.log('PUT');
        //console.log(req.body);
        Movie.title = req.body.title;
        Movie.writer = req.body.writer;
        Movie.year = req.body.year;
        Movie.actors = req.body.actors;
        Movie.synopsis = req.body.synopsis;
        Movie.franchise = req.body.franchise;
        Movie.save(function(err) {
        if(err) return res.send(500, err.message);
        res.status(200).jsonp(movie);
    });
    });
};

exports.delete = function(req, res){
    movie.findById(req.params.id, function(err, Movies){
        Movies.remove(function(err){
        if(err) return res.send(500, err.message);
        res.json({ message: 'Borrado completamente'});
        });
    });
};
