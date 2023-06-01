const productModel = require('../models/productsModel');

const idValidation = async (data) => {
  const result = await Promise.all(data.map((product) => productModel.getById(product.productId)));
  const resultErro = result.every((product) => product.length === 1);
  return resultErro;
};

module.exports = idValidation;