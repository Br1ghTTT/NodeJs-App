const express = require('express');

const router = express.Router();

const responseInterceptor = require('../middlewares/interceptor/response.interceptor');
const { routerInterceptor } = require('../common/decorator/router.decorator');

const { getHeroes, getHero, createHero, updateHero, deleteHero } = require('../controller/heroes.controller');

const routes = [
    {
        http: 'get',
        endpoint: '/get-hero/: hero_id',
        method: getHero
    },

    {
        http: 'get',
        endpoint: '/get-heroes',
        method: getHeroes
    },

    {
        http: 'post',
        endpoint: '/create-hero',
        method: createHero
    },

    {
        http: 'patch',
        endpoint: '/update-hero/: hero_id',
        method: updateHero

    },

    {
        http: 'delete',
        endpoint: '/delete-hero/: hero_id',
        method: deleteHero
    }
];

routerInterceptor(router)({routes, interceptor: responseInterceptor});

module.exports = router;