var usuario = require('../Model/usuarios')


exports.add = function(req, res) {
    console.log(req);
    var user = new usuario({
        User: req.body.user,
        Password: req.body.password,
        Email: req.body.email,
        Role: req.body.role
    });
    user.save(function(err, Usuarios){
    if(err) return res.send(500, err.message);
    res.status(200).jsonp(Usuarios);
    });
};

exports.update = function(req, res){
    usuario.findById(req.params.id, function(err, User){
        if(err) return res.send(500, err.message);
        User.User = req.body.user;
        User.Password = req.body.password;
        User.Email = req.body.email;
        User.Role = req.body.role;
        User.save(function(err) {
        if(err) return res.send(500, err.message);
        res.status(200).jsonp(usuario);
    });
    });
};

exports.findAll = function(req, res) {
    usuario.find(function(err, Usuarios){
        if(err){
             res.send(500, err.message);
        }
        res.status(200).jsonp(Usuarios);
    });
};

exports.delete = function(req, res){
    usuario.findById(req.params.id, function(err, Usuario){
        Usuario.remove(function(err){
        if(err) return res.send(500, err.message);
        res.json({ message: 'Borrado completamente'});
        });
    });
};

exports.findById = function(req, res){
    usuario.findById(req.params.id, function(err, Usuario){
        if(err)
            return res.send(500, err.message);
            res.status(200).jsonp(Usuario);
    });
;}

