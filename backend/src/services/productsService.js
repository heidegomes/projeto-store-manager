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

const updateProduct = async ({ id, name }) => {
  const verifiedId = await productsModel.getById(id);
  if (verifiedId.length === 0) {
    return false;
  }
  const result = await productsModel.updateProduct({ id, name });
  return result;
};

const deleteProduct = async (id) => {
  const verifiedId = await productsModel.getById(id);
  console.log('idDelete', verifiedId);
  if (verifiedId.length === 0) {
    return false;
  }
  const result = await productsModel.deleteProduct(id);
  console.log('service', result);
  return result;
};
module.exports = { getAll, getById, registerProduct, updateProduct, deleteProduct };