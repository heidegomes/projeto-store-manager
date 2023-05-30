const chai = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const listSales = require('../../../src/mocks/sales.mock');
const salesModel = require('../../../src/models/salesModel');

const { expect } = chai;

describe('testes da camada model de sales', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testa se a função getAll retorna todos as vendas do banco', async function () {
    sinon.stub(connection, 'execute').resolves([listSales]);
    const result = await salesModel.getAll();
    expect(result).to.be.deep.equal(listSales);
  });

  it('Testa se a função getById retorna a venda referente ao id passado', async function () {
    sinon.stub(connection, 'execute').resolves([listSales[0]]);
    const result = await salesModel.getById(1);
    expect(result).to.be.deep.equal(listSales[0]);
  });

  // it('Testa se a função registerInSaleProducts cadastra uma venda', async function () {
  //   // const insertId = await salesModel.registerInSales();
  //   const mockSale = {
  //     id: 13,
  //     itemsSold: [
  //       {
  //         productId: 1,
  //         quantity: 1,
  //       },
  //       {
  //         productId: 2,
  //         quantity: 5,
  //       },
  //     ],
  //   };
  //   sinon.stub(connection, 'execute').resolves([{ insertId: 13 }]);
  //   const result = await salesModel.registerInSaleProducts([
  //     {
  //       productId: 1,
  //       quantity: 1,
  //     },
  //     {
  //       productId: 2,
  //       quantity: 5,
  //     },
  //   ]);
  //   expect(result).to.deep.equal(mockSale);
  // });
});