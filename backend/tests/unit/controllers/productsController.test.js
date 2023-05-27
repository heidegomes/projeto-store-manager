const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const listProducts = require('../../../src/mocks/products.mock');
const productsController = require('../../../src/controllers/productsController');
const productsService = require('../../../src/services/productsService');

chai.use(sinonChai);
const { expect } = chai;

describe('testes da camada controller de products', function () {
  const req = {};
  const res = {};
  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });
  it('Testa se a função getAll retorna todos os produtos do banco', async function () {
    // Arrange
    sinon.stub(productsService, 'getAll').resolves(listProducts);
    // Act
    await productsController.getAll(req, res);
    // Assert
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(listProducts);
  });
  it('Testa se a função getById retorna o produto referente ao id passado', async function () {
    // Arrange
    sinon.stub(productsService, 'getById').resolves(listProducts);
    // Act
    await productsController.getById(req, res);
    // Assert
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(listProducts);
  });
});