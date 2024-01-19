const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { apiConfig } = require('../config/apiConfig');
const apiClient = require('../utils/apiClient');

const CurrentMarketPrice = async (queryParams) => {
  const { amount, coinId, targetCurrency } = queryParams;
  const payload = { ...apiConfig.GET_EXCHANGE_PRICE };
  payload.url += `&ids=${coinId}&vs_currencies=${targetCurrency}`;
  const { data } = await apiClient(payload);
  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Result not found for selected coin or currency!');
  }
  const exchangeRate = data[coinId][targetCurrency];
  const convertedAmount = amount * exchangeRate;

  const finalData = {
    exchangeRate: convertedAmount,
  };
  return finalData;
};

module.exports = {
  CurrentMarketPrice,
};
