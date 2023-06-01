const { Router } = require('express');
const productsController = require('../controllers/productsController');
const nameValidation = require('../middlewares/nameV');

const productsRouter = Router();
  productsRouter.get('/', productsController.getAll);
  productsRouter.get('/:id', productsController.getById);
  productsRouter.post('/', nameValidation, productsController.registerProduct);
  productsRouter.put('/:id', nameValidation, productsController.updateProduct);

module.exports = productsRouter;