const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const result = await productsService.getAll();
  res.status(200).json(result);
};

module.exports = { getAll };