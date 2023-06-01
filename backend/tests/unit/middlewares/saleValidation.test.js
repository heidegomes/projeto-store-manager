const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const quantityValidation = require('../../../src/middlewares/quantityV');
const quantityValidationValue = require('../../../src/middlewares/quantityValue');
const productIdValidation = require('../../../src/middlewares/productIdV');

chai.use(sinonChai);
const { expect } = chai;

describe('testes da validação de middleawers de sales', function () {
  let req = {};
  const res = {};
  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  it('Testa se a requisição retorna um erro se a chave productId não existir', async function () {
    req = {
      body: [
        {
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ] };
    await productIdValidation(req, res);
    expect(res.status).to.be.calledWith(400);
    expect(res.json).to.be.calledWith({
      message: '"productId" is required',
    });
  });

  it('Testa se a requisição retorna um erro se a chave quantity não existir', async function () {
    req = {
      body: [
        {
          productId: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    };
    await quantityValidation(req, res);
    expect(res.status).to.be.calledWith(400);
    expect(res.json).to.be.calledWith({
      message: '"quantity" is required',
    });
  });

  it(
'Testa se a requisição retorna um erro se a chave quantity for menor ou igual a 0 (zero)', 
  async function () {
    req = {
      body: [
        {
          productId: 1,
          quantity: 0,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    };
    await quantityValidationValue(req, res);
    expect(res.status).to.be.calledWith(422);
    expect(res.json).to.be.calledWith({
      message: '"quantity" must be greater than or equal to 1',
    });
  },
);
});