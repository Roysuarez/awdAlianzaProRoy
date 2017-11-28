var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rangosSchema = new Schema({
    min: {type: Number},
    max: {type: Number},
    categoria: {type: String}
});

module.exports = mongoose.model('rangos', rangosSchema, 'rangos'); 