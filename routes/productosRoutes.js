const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/productosController');

router.get('/', ctrl.obtener);
router.get('/:id', ctrl.obtenerUno);
router.post('/', ctrl.crear);
router.put('/:id', ctrl.actualizar);
router.delete('/:id', ctrl.eliminar);

module.exports = router;
