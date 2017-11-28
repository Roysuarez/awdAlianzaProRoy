var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productosSchema = new Schema({
    Nombre: {type: String},
    Precio: {type: Number},
    Fecha: {type: Date},
    Descripcion: {type: String}
});

module.exports = mongoose.model('productos', productosSchema, 'productos');