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
  return res.status(201).json(result);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const result = await productsService.updateProduct({ id, name });
  if (result) {
    return res.status(200).json({ id: Number(id), name });
  }
  res.status(404).json({ message: 'Product not found' });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const result = await productsService.deleteProduct(id);
  console.info('###### controller id=', id);
  if (result) {
    return res.status(204).json();
  }
  res.status(404).json({ message: 'Product not found' });
};

module.exports = { getAll, getById, registerProduct, updateProduct, deleteProduct };