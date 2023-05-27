const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const listSales = require('../../../src/mocks/sales.mock');
const salesController = require('../../../src/controllers/salesController');
const salesService = require('../../../src/services/salesService');

chai.use(sinonChai);
const { expect } = chai;

describe('testes da camada controller de sales', function () {
  const req = { params: { id: 1 } };
  const res = {};

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  it('Testa se a função getAll retorna todos as vendas do banco', async function () {
    // Arrange
    sinon.stub(salesService, 'getAll').resolves(listSales);
    // Act
    await salesController.getAll(req, res);
    // Assert
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(listSales);
  });
  it('Testa se a função getById retorna a venda referente ao id passado', async function () {
    // Arrange
    sinon.stub(salesService, 'getById').resolves(listSales);
    // Act
    await salesController.getById(req, res);
    // Assert
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(listSales);
  });
});