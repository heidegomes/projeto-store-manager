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

// const registerInSales = async ({ quantity }) => {
//   const query = 'INSERT INTO StoreManager.sales (quantity) VALUE (?) ';
//   console.log(query);
//   const [{ productId }] = await connection.execute(query, [quantity]);
//   return { id: productId, quantity };
// };

// const registerInSaleProducts = async ({ quantity }) => {
//   const query = 'INSERT INTO StoreManager.sales_products (quantity) VALUE(?)';
//   console.log(query);
//   const [{ productId }] = await connection.execute(query, [quantity]);
//   return { id: productId, quantity };
// };

module.exports = { getAll, getById };