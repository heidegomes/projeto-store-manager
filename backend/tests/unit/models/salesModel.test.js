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
    // Arrange
    sinon.stub(connection, 'execute').resolves([listSales]);
    // Act
    const result = await salesModel.getAll();
    // Assert
    expect(result).to.be.deep.equal(listSales);
  });
  it('Testa se a função getById retorna a venda referente ao id passado', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([listSales[0]]);
    // Act
    const result = await salesModel.getById(1);
    // Assert
    expect(result).to.be.deep.equal(listSales[0]);
  });
});