var express = require('express');
var router = express.Router();
var casasCtrl = require('../Controller/casas');

router.post('/casas', casasCtrl.add);
router.get('/casas', casasCtrl.findAll);
router.get('/casas/:id', casasCtrl.findById);   
router.get('/', function(req, res){
        res.send("Ejercicio de cero!");
});

module.exports = router;