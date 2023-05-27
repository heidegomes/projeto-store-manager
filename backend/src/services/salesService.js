const salesModel = require('../models/salesModel');

const getAll = async () => {
  const result = await salesModel.getAll();
  return result;
};

const getById = async (id) => {
  const result = await salesModel.getById(id);
  // const resultTemp = await salesModel.getById(id);
  // const result = [];
  // for (let index = 0; index < resultTemp.length; index += 1) {
  //   const element = resultTemp[index];
  //   result.push({
  //     date: element.date,
  //     productId: element.productId,
  //     quantity: element.quantity,
  //   });
  // }
  console.log('service', result);
  return result;
};

module.exports = { getAll, getById };