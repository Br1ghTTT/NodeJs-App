const express = require('express');

const router = express.Router();

const { startFight, resultOfFight } = require('../controller/challenge.controller.');

router.get('/fight', startFight);

router.get('result-of-fights', resultOfFight);

module.exports = router;