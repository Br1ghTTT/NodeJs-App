const Sequelize = require('sequelize');

const sequelize = new Sequelize(`${process.env.DATA_BASE_NAME}`, `${process.env.DATA_BASE_ROOT}`, `${process.env.DATA_BASE_PASSWORD}`, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;

