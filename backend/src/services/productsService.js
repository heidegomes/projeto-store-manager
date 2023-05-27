const productsModel = require('../models/productsModel');

const getAll = async () => {
  const result = await productsModel.getAll();
  return result;
};

const getById = async (id) => {
  const [result] = await productsModel.getById(id);
  return result;
};

const registerProduct = async (data) => {
  const productsPromisse = data.map((product) => productsModel.registerProduct(product));
  const result = await Promise.all(productsPromisse);
  return result;
};

module.exports = { getAll, getById, registerProduct };