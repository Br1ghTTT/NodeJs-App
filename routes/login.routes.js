const express = require('express');

const router = express.Router();

const {login, signUp, logout} = require('../controller/login.controller');

router.post('/', login);

router.post('/signUp', signUp);

router.post('/logout', logout)

module.exports = router;