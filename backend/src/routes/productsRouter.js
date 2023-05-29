const { Router } = require('express');
const productsController = require('../controllers/productsController');
const productValidation = require('../middlewares/productValidation');

const productsRouter = Router();
  productsRouter.get('/', productsController.getAll);
  productsRouter.get('/:id', productsController.getById);
  productsRouter.post('/', productValidation, productsController.registerProduct);

module.exports = productsRouter;