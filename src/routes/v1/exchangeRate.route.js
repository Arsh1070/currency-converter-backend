const express = require('express');
const validate = require('../../middlewares/validate');
const { exchangeRateController } = require('../../controllers');
const currencyInputValidation = require('../../validations/currency.validation');

const router = express.Router();

router.route('/').post(validate(currencyInputValidation.getCurrencyInputs), exchangeRateController.getExchangeRate);

module.exports = router;
