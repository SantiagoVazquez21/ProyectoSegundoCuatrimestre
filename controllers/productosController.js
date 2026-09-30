const service = require('../services/productosService');

const obtener = async (req, res) => {
  try {
    const data = await service.obtenerTodos();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Error al obtener' });
  }
};

const obtenerUno = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await service.obtenerPorId(id);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Error al obtener' });
  }
};

const crear = async (req, res) => {
  try {
    const nuevo = await service.crear(req.body);
    res.status(201).json(nuevo);
  } catch (e) {
    res.status(500).json({ error: 'Error al crear' });
  }
};

const actualizar = async (req, res) => {
  try {
    const data = await service.actualizar(req.params.id, req.body);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Error al actualizar' });
  }
};

const eliminar = async (req, res) => {
  try {
    await service.eliminar(req.params.id);
    res.json({ mensaje: 'Eliminado correctamente' });
  } catch (e) {
    res.status(500).json({ error: 'Error al eliminar' });
  }
};

module.exports = { obtener, obtenerUno, crear, actualizar, eliminar };
