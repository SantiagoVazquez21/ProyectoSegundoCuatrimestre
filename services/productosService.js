const supabase = require('../config/supabase');

const obtenerTodos = async () => {
  const { data, error } = await supabase.from('productos').select('*');
  if (error) throw error;
  return data;
};

const obtenerPorId = async (id) => {
  const { data, error } = await supabase
    .from('productos')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

const crear = async (producto) => {
  const { data, error } = await supabase.from('productos').insert(producto).select();
  if (error) throw error;
  return data[0];
};

const actualizar = async (id, cambios) => {
  const { data, error } = await supabase
    .from('productos')
    .update(cambios)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data[0];
};

const eliminar = async (id) => {
  const { error } = await supabase.from('productos').delete().eq('id', id);
  if (error) throw error;
};

module.exports = { obtenerTodos, obtenerPorId, crear, actualizar, eliminar };
