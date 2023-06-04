const productModel = require('../models/productsModel');

const idValidation = async (data) => {
  const result = await Promise.all(data.map((product) => productModel.getById(product.productId)));
  console.log('idValidation', result);
  const resultErro = result.every((product) => product.length === 1);
  console.log('idValidation', resultErro);
  return resultErro;
};

module.exports = idValidation;