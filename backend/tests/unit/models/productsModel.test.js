const chai = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const listProducts = require('../../../src/mocks/player.mock');
const productsModel = require('../../../src/models/productsModel');

const { expect } = chai;

describe('testes da camada model de products', function () {
  it('Testa se a função getAll retorna todos os produtos do banco', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([listProducts]);
    // Act
    const result = await productsModel.getAll();
    // Assert
    expect(result).to.be.deep.equal(listProducts);
  });
});