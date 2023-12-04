const express = require('express');

const { renewAccessToken } = require('../controllers/tokenController');

const router = express.Router();

router.route('/token/renew').post(renewAccessToken);

module.exports = router;