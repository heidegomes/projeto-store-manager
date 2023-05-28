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
  
  // const result = [];
  // for (let index = 0; index < resultTemp.length; index += 1) {
  //   const element = resultTemp[index];
  //   result.push({
  //     date: element.date,
  //     productId: element.productId,
  //     quantity: element.quantity,
  //   });
  // }
  // if (!result) {
  //   return false;
  // }
};

module.exports = { getAll, getById };