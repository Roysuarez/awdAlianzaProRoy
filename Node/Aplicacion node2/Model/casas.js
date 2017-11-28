var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var casasSchema = new Schema({
    numero: {type: Number},
    direccion: {type: String},
    precio: {type: Number}
});

module.exports = mongoose.model('casas', casasSchema, 'casas');