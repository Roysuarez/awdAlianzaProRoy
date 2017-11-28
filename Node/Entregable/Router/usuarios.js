var express = require('express');
var router = express.Router();
var usuariosCtrl = require('../Controller/usuarios');

router.route('/usuarios')
.post(usuariosCtrl.add)
.get(usuariosCtrl.findAll);

router.route('/usuarios/:id')
.put(usuariosCtrl.update)
.delete(usuariosCtrl.delete)
.get(usuariosCtrl.findById);

module.exports = router;