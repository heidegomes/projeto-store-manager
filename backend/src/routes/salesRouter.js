const { Router } = require('express');
const salesController = require('../controllers/salesController');
const productIdValidation = require('../middlewares/productIdV');
const quantityValidation = require('../middlewares/quantityV');
const quantityValidationValue = require('../middlewares/quantityValue');

const salesRouter = Router();
salesRouter.get('/', salesController.getAll);
salesRouter.get('/:id', salesController.getById);
salesRouter.post(
'/', 
productIdValidation,
quantityValidation,
quantityValidationValue,
salesController.registerSale,
);

module.exports = salesRouter;