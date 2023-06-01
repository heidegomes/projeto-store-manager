const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(`SELECT sp.sale_id AS saleId, s.date,
  sp.product_id AS productId,sp.quantity 
  FROM StoreManager.sales s join StoreManager.sales_products sp on s.id  = sp.sale_id`);
  return result;
};

const getById = async (id) => {
  const [result] = await connection
    .execute(`SELECT s.date, sp.product_id AS productId, sp.quantity 
    FROM StoreManager.sales s join StoreManager.sales_products sp 
    on s.id = sp.sale_id WHERE s.id = ?`, [id]);
  return result;
};

const registerInSales = async () => {
  const query = 'INSERT INTO StoreManager.sales VALUES(); ';
  const [result] = await connection.execute(query, []);
  return result.insertId;
};

const registerInSaleProducts = async (saleId, productId, quantity) => {
  const query = `INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity) 
  VALUES(?, ?, ?);`; 
  const [result] = await connection.execute(query, [saleId, productId, quantity]);
  return result;
};

module.exports = { getAll, getById, registerInSales, registerInSaleProducts };