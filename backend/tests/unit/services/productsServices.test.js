const chai = require('chai');
const sinon = require('sinon');
const listProducts = require('../../../src/mocks/player.mock');
const productsModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');

const { expect } = chai;

describe('testes da camada service de products', function () {
  it('Testa se a função getAll retorna todos os produtos do banco', async function () {
    // Arrange
    sinon.stub(productsModel, 'getAll').resolves(listProducts);
    // Act
    const result = await productsService.getAll();
    // Assert
    expect(result).to.be.deep.equal(listProducts);
  });
  it('Testa se a função getById retorna o produto referente ao id passado', async function () {
    // Arrange
    sinon.stub(productsModel, 'getById').resolves([listProducts[0]]);
    // Act
    const result = await productsService.getById(1);
    // Assert
    expect(result).to.be.deep.equal(listProducts[0]);
  });
});