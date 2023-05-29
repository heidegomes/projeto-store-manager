const nameMin = require('./productValidation');
const nameReq = require('./productValidation');

const productValidation = (req, res, next) => {
  const { name } = req.body;
  if (nameReq === true) {
    return res.status(400).json(nameReq(name));
  }
  if (nameMin === false) {
    return res.status(422).json(nameMin(name));
  }
  next();
};

module.exports = productValidation;