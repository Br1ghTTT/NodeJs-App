const express = require('express');
const router = express.Router();

const responseInterceptor = require('../middlewares/interceptor/response.interceptor');
const { routerInterceptor } = require('../common/decorator/router.decorator'); 

const { startFight, resultOfFight } = require('../controller/challenge.controller.');

const routes = [
    {
        http: 'get',
        endpoint: '/fight',
        method: startFight
    },
    {
        http: 'get',
        endpoint: '/result-of-fights',
        method: resultOfFight
    }
]

routerInterceptor(router)({routes, interceptor: responseInterceptor});

module.exports = router;