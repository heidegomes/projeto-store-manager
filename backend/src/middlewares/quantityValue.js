const quantityValidationValue = (req, res, next) => {
  const data = req.body;
  const result = data.every((product) => product.quantity > 0);
  if (result === false) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = quantityValidationValue;