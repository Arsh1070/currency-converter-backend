const Joi = require('joi');

const getCurrencyInputs = {
  query: Joi.object().keys({
    amount: Joi.number().required(),
    coinId: Joi.string().required(),
    targetCurrency: Joi.string().required(),
  }),
};

module.exports = {
  getCurrencyInputs,
};
