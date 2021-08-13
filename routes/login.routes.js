const express = require('express');
const router = express.Router();

const responseInterceptor = require('../middlewares/interceptor/response.interceptor');
const { routerInterceptor } = require('../common/decorator/router.decorator');

const {login, signUp, logout} = require('../controller/login.controller');

const routes = [
    {
        http: 'post',
        endpoint: '/',
        method: login
    },

    {
        http: 'post',
        endpoint: '/signUp',
        method: signUp
    },

    {
        http: 'post',
        endpoint: '/logout',
        method: logout
    }
    

]

// router.post('/', login);

// router.post('/signUp', signUp);

// router.post('/logout', logout)

module.exports = router;