/**const productos = [
    { id: 1, nombre: 'Notebook', precio: 500000 },
    { id: 2, nombre: 'Mouse', precio: 15000 },
    { id: 3, nombre: 'Teclado', precio: 25000 },
  ];
  
const obtenerTodos = () => productos;
  
const obtenerPorId = (id) =>
    productos.find((p) => p.id === parseInt(id));
  
const crear = (datos) => {
    const nuevo = { id: Date.now(), ...datos };
    productos.push(nuevo);
    return nuevo;
  };

module.exports = { obtenerTodos, obtenerPorId, crear }; **/