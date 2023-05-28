const productsModel = require('../models/productsModel');

const getAll = async () => {
  const result = await productsModel.getAll();
  return result;
};

const getById = async (id) => {
  const [result] = await productsModel.getById(id);
  return result;
};

const registerProduct = async ({ name }) => {
  // const productsPromisse = data.map((product) => productsModel.registerProduct(product));
  // console.log(productsPromisse);
  // const result = await Promise.all(productsPromisse);
  // console.log('service', result);
  const result = await productsModel.registerProduct({ name });
  return result;
};

module.exports = { getAll, getById, registerProduct };