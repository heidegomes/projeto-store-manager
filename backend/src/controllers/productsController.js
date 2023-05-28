const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const result = await productsService.getAll();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.getById(id);
  if (result) {
    return res.status(200).json(result);
  }
  res.status(404).json({ message: 'Product not found' });
};

const registerProduct = async (req, res) => {
  const data = req.body;
  const result = await productsService.registerProduct(data);
  // console.log('controller', result);
  if (result) {
    return res.status(201).json(result);
  }
  res.status(404).json({ message: 'Product not found' });
};

module.exports = { getAll, getById, registerProduct };