const config = require('./config');

const apiConfig = {
  GET_AND_SEARCH_COINS_LIST: {
    method: 'GET',
    url: `/search?${config.api_key}`,
  },
  GET_EXCHANGE_PRICE: {
    method: 'GET',
    url: `/simple/price?${config.api_key}`,
  },
};

module.exports = {
  apiConfig,
};
