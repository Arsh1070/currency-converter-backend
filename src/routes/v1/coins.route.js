const express = require('express');
const { coinListController } = require('../../controllers');

const router = express.Router();

router.route('/').get(coinListController.getCoinList);

module.exports = router;
