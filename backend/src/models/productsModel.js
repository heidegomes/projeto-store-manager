const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

const getById = async (id) => {
  const [result] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
    console.info('#### getByIdModel product: ', result);
  return result;
};

const registerProduct = async ({ name }) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [{ insertId }] = await connection.execute(query, [name]);
  return { id: insertId, name };
};

const updateProduct = async ({ id, name }) => {
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
  const [result] = await connection.execute(query, [name, id]);
  return result;
};

const deleteProduct = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  console.log('modelDelete', result);
  return result;
};

module.exports = { getAll, getById, registerProduct, updateProduct, deleteProduct };