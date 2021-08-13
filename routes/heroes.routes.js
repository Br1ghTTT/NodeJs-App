const express = require('express');
const router = express.Router();

const responseInterceptor = require('../middlewares/interceptor/response.interceptor');
const { routerInterceptor } = require('../common/decorator/router.decorator'); 

const heroesController = require('../controller/heroes.controller')

// router.post('/create-hero', heroesController.createHero);

const routes = [
    {
        http: 'get',
        endpoint: '/get-heroes',
        method: heroesController.getHeroes
    },

    {
        http: 'get',
        endpoint: '/get-strength-heroes',
        method: heroesController.getHeroes
    },

    {
        http: 'get',
        endpoint: '/get-agility-heroes',
        method: heroesController.getHeroes
    },

    {
        http: 'get',
        endpoint: '/get-intelligence-heroes',
        method: heroesController.getHeroes
    },

    {
        http: 'post',
        endpoint: '/create-hero',
        method: heroesController.createHero
    },

    {
        http: 'put',
        endpoint: '/update-hero',
        method: heroesController.updateHero
    },

    {
        http: 'delete',
        endpoint: '/delete-hero',
        method: heroesController.deleteHero
    }
]

routerInterceptor(router)({routes, interceptor: responseInterceptor});

module.exports = router;