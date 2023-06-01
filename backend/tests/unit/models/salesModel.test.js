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
});