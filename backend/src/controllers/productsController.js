const getAll = (_req, res) => {
  res.status(200).json({ message: 'controller' });
};

module.exports = { getAll };