var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuariosSchema = new Schema({
    User: {type: String},
    Password: {type: String},
    Email: {type: String},
    Role: {type: String }
});

module.exports = mongoose.model('usuarios', usuariosSchema, 'usuarios');