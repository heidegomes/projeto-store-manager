const productsModel = require('../models/productsModel');

const getAll = async () => {
  const result = await productsModel.getAll();
  return result;
};

const getById = async (id) => {
  const [result] = await productsModel.getById(id);
  console.log(result);
  return result;
};

const registerProduct = async ({ name }) => {
  const result = await productsModel.registerProduct({ name });
  return result;
};

const updateProduct = async () => {
  const [result] = await productsModel.getById(id);
};

module.exports = { getAll, getById, registerProduct };