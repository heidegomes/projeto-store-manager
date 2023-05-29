const chai = require('chai');
const sinon = require('sinon');
const listProducts = require('../../../src/mocks/products.mock');
const productsModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService');

const { expect } = chai;

describe('testes da camada service de products', function () {
  it('Testa se a função getAll retorna todos os produtos do banco', async function () {
    sinon.stub(productsModel, 'getAll').resolves(listProducts);
    const result = await productsService.getAll();
    expect(result).to.be.deep.equal(listProducts);
  });
  it('Testa se a função getById retorna o produto referente ao id passado', async function () {
    sinon.stub(productsModel, 'getById').resolves([listProducts[0]]);
    const result = await productsService.getById(1);
    expect(result).to.be.deep.equal(listProducts[0]);
  });
});