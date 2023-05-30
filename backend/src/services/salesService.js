const salesModel = require('../models/salesModel');

const getAll = async () => {
  const result = await salesModel.getAll();
  return result;
};

const getById = async (id) => {
  const result = await salesModel.getById(id);
  if (!result) {
    return false;
  }
  return result;
};

const registerSale = async (data) => {
  const salesId = await salesModel.registerInSales();
  const arrProducts = data.map((product) => (
    salesModel.registerInSaleProducts(salesId, product.productId, product.quantity)
  ));
  await Promise.all(arrProducts);
  console.log('array', arrProducts);
  const objProduct = {
    id: salesId,
    itemsSold: data,
  };
  return objProduct;
};

module.exports = { getAll, getById, registerSale };