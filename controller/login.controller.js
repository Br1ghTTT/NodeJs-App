const User = require('../models/user.model');
const Errors = require('../config/errors/errors.info.json');
exports.login = async (req, res, next) => {
    console.log('Hello Am Back!');
}

exports.signUp = async (req, res, next) => {
    console.log('Another link)');
}

exports.logout = async (req, res, next) => {
    console.log('Hello');
}