var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: { type: String},
    writer: { type: String}, 
    year: { type: Number},
    actors: { type: Array},
    synopsis: {type: String},
    franchise: {type: String} 
});

module.exports = mongoose.model('Movies', movieSchema, 'movies'); //modelo, esquema, coleccion