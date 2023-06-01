const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const listProducts = require('../../../src/mocks/products.mock');
const productsController = require('../../../src/controllers/productsController');
const productsService = require('../../../src/services/productsService');

chai.use(sinonChai);
const { expect } = chai;

describe('testes da camada controller de products', function () {
  let req = {};
  const res = {};
  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  it('Testa se a função getAll retorna todos os produtos do banco', async function () {
    sinon.stub(productsService, 'getAll').resolves(listProducts);
    await productsController.getAll(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(listProducts);
  });

  it('Testa se a função getById retorna o produto referente ao id passado', async function () {
    req = { params: { id: 1 } };
    
    sinon.stub(productsService, 'getById').resolves(listProducts);
    await productsController.getById(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(listProducts);
  });

  it('Testa se a função registerProduct cadastra o produto', async function () {
    req = { body: { name: 'anel do lanterna verde' } };

    const mockProduct = {
    id: 7,
    name: 'anel do laterna verde',
    };

    sinon.stub(productsService, 'registerProduct').resolves(mockProduct);
    await productsController.registerProduct(req, res);
    expect(res.status).to.be.calledWith(201);
    expect(res.json).to.be.calledWithExactly(mockProduct);
  });

  it('Testa se a função updateProduct atualiza o produto', async function () {
    req = { body: { name: 'Martelo do Batman' }, params: { id: 1 } };
    
    const mockService = { affectedRows: 1 };
    
    const mockProductResult = {
      id: 1,
      name: 'Martelo do Batman',
    };

    sinon.stub(productsService, 'updateProduct').resolves(mockService);
    await productsController.updateProduct(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWithExactly(mockProductResult);
  });
});
