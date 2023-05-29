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
  const salesPromisse = data.map((sale) => salesModel.registerInSaleProducts(sale));
  console.log(salesPromisse);
  const result = await Promise.all(salesPromisse);
  console.log('service', result);
  return result;
};

module.exports = { getAll, getById, registerSale };