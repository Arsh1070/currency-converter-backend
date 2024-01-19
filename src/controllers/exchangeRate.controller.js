// const httpStatus = require('http-status');
// const ApiError = require('../utils/ApiError');
// const { userService } = require('../services');

const { exchangeRateService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const getExchangeRate = catchAsync(async (req, res) => {
  const result = await exchangeRateService.CurrentMarketPrice(req.query);
  res.send(result);
});

module.exports = {
  getExchangeRate,
};
