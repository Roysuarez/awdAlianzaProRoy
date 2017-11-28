var express = require('express');
var router = express.Router();
var productosCtrl = require('../Controller/productos');

router.route('/productos')
.post(productosCtrl.add)
.get(productosCtrl.findAll);

router.route('/productos/:id')
.put(productosCtrl.update)
.get(productosCtrl.findById)
.get(productosCtrl.findByName);

router.route('/')
.get(function(req, res){
        res.send("Laboratorio final");
});

module.exports = router;