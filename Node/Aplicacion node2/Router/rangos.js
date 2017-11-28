var express = require('express');
var router = express.Router();
var rangosCtrl = require('../Controller/rangos');

router.route('/rangos')
.post(rangosCtrl.add)
.get(rangosCtrl.findAll);

router.route('/rangos/:id')
.get(rangosCtrl.findById);   

router.get('/', function(req, res){
        res.send("Ejercicio rango de cero!");
});

module.exports = router;