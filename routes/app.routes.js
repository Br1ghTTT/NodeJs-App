const express = require('express');

const app = module.exports = express();

const heroesRouter = require('./heroes.routes');
const loginRouter = require('./login.routes');
const challengeRoute = require('./challenge.routes');

app.use('/app', heroesRouter, loginRouter, challengeRoute);

// router.use('/app', loginRouter);

module.exports = app;