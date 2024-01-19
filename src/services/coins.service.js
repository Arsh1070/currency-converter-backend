const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { apiConfig } = require('../config/apiConfig');
const apiClient = require('../utils/apiClient');

const coinsListData = async (queryParam) => {
  const { search } = queryParam;
  const payload = { ...apiConfig.GET_AND_SEARCH_COINS_LIST };

  if (search && search.length) {
    payload.url += `&query=${search}`;
    const { data } = await apiClient(payload);

    if (!data) {
      throw new ApiError(httpStatus.NOT_FOUND, `Result not found for ${search || 'query'}!`);
    }
    return data;
  }
};

module.exports = {
  coinsListData,
};
