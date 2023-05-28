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
    sinon.stub(connection, 'execute').resolves([listProducts]);
    const result = await productsModel.getAll();
    expect(result).to.be.deep.equal(listProducts);
  });
  it('Testa se a função getById retorna o produto referente ao id passado', async function () {
    sinon.stub(connection, 'execute').resolves([listProducts[0]]);
    const result = await productsModel.getById(1);
    expect(result).to.be.deep.equal(listProducts[0]);
  });
    it('Testa se a função registerProduct cadastra um produto', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 10 }]);
      const result = await productsModel.registerProduct({ name: 'anel do lanterna verde' });
      expect(result).to.deep.equal(
        {
          id: 10,
          name: 'anel do lanterna verde',
        },
      );
  });
});