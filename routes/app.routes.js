const express = require('express');

const router = express.Router();

const heroesRouter = require('./heroes.routes');
const loginRouter = require('./login.routes');
const challengeRoute = require('./challenge.routes');

router.use('/app', heroesRouter, loginRouter, challengeRoute);

// router.use('/app', loginRouter);

module.exports = router;