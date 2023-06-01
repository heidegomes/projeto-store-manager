const chai = require('chai');
const sinon = require('sinon');
const listSales = require('../../../src/mocks/sales.mock');
const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService');

const { expect } = chai;

describe('testes da camada service de sales', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Testa se a função getAll retorna todas as vendas do banco', async function () {
    sinon.stub(salesModel, 'getAll').resolves(listSales);
    const result = await salesService.getAll();
    expect(result).to.be.deep.equal(listSales);
  });
  it('Testa se a função getById retorna a venda referente ao id passado', async function () {
    sinon.stub(salesModel, 'getById').resolves(listSales[0]);
    const result = await salesService.getById(1);
    expect(result).to.be.deep.equal(listSales[0]);
  });
  it(
'Testa se a função getById não retorna uma venda referente a um id inexistente', 
  async function () {
    sinon.stub(salesModel, 'getById').resolves(false);
    const result = await salesService.getById(999);
    expect(result).to.be.equal(false);
  },
);
//   it(
// 'Testa se a função registerSale retorna um erro se o productId nao existir', 
//   async function () {
//     sinon.stub(salesModel, 'registerInSaleProducts').resolves(listSales[0]);
//     const result = await salesService.registerSale(1);
//     expect(result).to.be.deep.equal(listSales[0]);
//   },
// );
});