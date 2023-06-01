const quantityValidation = (req, res, next) => {
  const data = req.body;
  const result = data.every((product) => ('quantity' in product));
  console.log('required', result);
  if (result === false) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  next();
};

module.exports = quantityValidation;
