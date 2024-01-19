// const httpStatus = require('http-status');
// const ApiError = require('../utils/ApiError');
// const { userService } = require('../services');

const { coinListService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const getCoinList = catchAsync(async (req, res) => {
  const result = await coinListService.coinsListData(req.query);
  res.send(result);
});

module.exports = {
  getCoinList,
};
