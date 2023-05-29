const productSchema = require('./joiSchema');

const productValidation = (req, res, next) => {
  const { name } = req.body;
  const { error } = productSchema.validate({ name });
  // console.log(error);
  if (!error) {
   return next();
  }
  if (error.details[0].type === 'string.min') {
    return res.status(422).json({ message: error.message });
  } 
  if (error.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.message });
  } 
  next();
};

module.exports = productValidation;
