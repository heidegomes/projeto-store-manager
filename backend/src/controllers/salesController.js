const salesService = require('../services/salesService');

const getAll = async (_req, res) => {
  const result = await salesService.getAll();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.getById(id);
  if (result.length > 0) {
    return res.status(200).json(result);
  }
  res.status(404).json({ message: 'Sale not found' });
};

const registerSale = async (req, res) => {
  const data = req.body;
  const result = await salesService.registerSale(data);
  console.log('controller', result);
  if (result) {
    return res.status(201).json(result);
  }
  res.status(404).json({ message: 'Product not found' });
};

module.exports = { getAll, getById, registerSale };