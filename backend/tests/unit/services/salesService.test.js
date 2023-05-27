const chai = require('chai');
const sinon = require('sinon');
const listSales = require('../../../src/mocks/sales.mock');
const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService');

const { expect } = chai;

describe('testes da camada service de sales', function () {
  it('Testa se a função getAll retorna todas as vendas do banco', async function () {
    // Arrange
    sinon.stub(salesModel, 'getAll').resolves(listSales);
    // Act
    const result = await salesService.getAll();
    // Assert
    expect(result).to.be.deep.equal(listSales);
  });
  it('Testa se a função getById retorna a venda referente ao id passado', async function () {
    // Arrange
    sinon.stub(salesModel, 'getById').resolves([listSales[0]]);
    // Act
    const result = await salesService.getById(1);
    // Assert
    expect(result).to.be.deep.equal(listSales[0]);
  });
});