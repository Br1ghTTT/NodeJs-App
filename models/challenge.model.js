const Sequelize = require('sequelize');

const sequelize = require('../dataBase/database');

const Challenge = sequelize.define('challenge', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    result_Of_Fight: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Challenge;