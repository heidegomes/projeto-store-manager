const productSchema = require('./joiSchema');

const productValidation = (req, res, next) => {
  const { name } = req.body;
  const result = productSchema.validate({ name });
  console.log('productVValidation', result);
  next();
};

module.exports = productValidation;