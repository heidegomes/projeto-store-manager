const chai = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const listProducts = require('../../../src/mocks/products.mock');
const productsModel = require('../../../src/models/productsModel');

const { expect } = chai;

describe('testes da camada model de products', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Testa se a função getAll retorna todos os produtos do banco', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([listProducts]);
    // Act
    const result = await productsModel.getAll();
    // Assert
    expect(result).to.be.deep.equal(listProducts);
  });
  it('Testa se a função getById retorna o produto referente ao id passado', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([listProducts[0]]);
    // Act
    const result = await productsModel.getById(1);
    // Assert
    expect(result).to.be.deep.equal(listProducts[0]);
  });
});