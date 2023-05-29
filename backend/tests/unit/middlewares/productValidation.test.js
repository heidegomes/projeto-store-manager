const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const productValidation = require('../../../src/middlewares/productValidation');

chai.use(sinonChai);
const { expect } = chai;

describe('testes da validação de middleawers de products', function () {
  let req = {};
  const res = {};
  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  it('Testa se a requisição retorna um erro se a chave name não existir', async function () {
    req = { body: { item: 'anel do lanterna verde' } };
    await productValidation(req, res);
    expect(res.status).to.be.calledWith(400);
    expect(res.json).to.be.calledWith({
        message: '"name" is required',
      });
  });

  it(
'Testa se a requisição retorna um erro se o produto tiver menos de 5 caracteres', 
    async function () {
    req = { body: { name: 'lua' } };

    await productValidation(req, res);
    expect(res.status).to.be.calledWith(422);
    expect(res.json).to.be.calledWith({
      message: '"name" length must be at least 5 characters long',
    });
  },
);
});