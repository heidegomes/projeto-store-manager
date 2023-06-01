const productIdValidation = (req, res, next) => {
  const data = req.body;
  const objReq = data.every((product) => (product.productId));
  if (objReq === false) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  next();
};

module.exports = productIdValidation;