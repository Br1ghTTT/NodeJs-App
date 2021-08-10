const Sequelize = require('sequelize');

const sequelize = require('../dataBase/database');

const Heroes = sequelize.define('heroes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: False
    },

    role: {
        type: Sequelize.STRING,
        allowNull: false
    },

    health: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    mana: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    name_of_first_Skill:{
        type: Sequelize.STRING,
        allowNull: true
    },

    name_of_second_Skill:{
        type: Sequelize.STRING,
        allowNull: true
    },

    name_of_third_Skill:{
        type: Sequelize.STRING,
        allowNull: true
    },

    name_of_fourth_Skill:{
        type: Sequelize.STRING,
        allowNull: true
    },

    name_of_fifth_Skill:{
        type: Sequelize.STRING,
        allowNull: true
    },
    
    name_of_sixth_Skill:{
        type: Sequelize.STRING,
        allowNull: true
    },

    damage: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    damage_from_first_skill: {   // need to be random damage, witch randomize on backend
        type: Sequelize.BOOLEAN,
        allowNull: true
    },

    damage_from_second_skill: {   // need to be random damage, witch randomize on backend
        type: Sequelize.BOOLEAN,
        allowNull: true 
    },

    damage_from_third_skill: {   // need to be random damage, witch randomize on backend
        type: Sequelize.BOOLEAN,
        allowNull: true 
    },

    damage_from_forth_skill: {   // need to be random damage, witch randomize on backend
        type: Sequelize.BOOLEAN,
        allowNull: true 
    },

    damage_from_fifth_skill: {   // need to be random damage, witch randomize on backend
        type: Sequelize.BOOLEAN,
        allowNull: true 
    },
    
    damage_from_sixth_skill: {   // need to be random damage, witch randomize on backend
        type: Sequelize.BOOLEAN,
        allowNull: true 
    },
});

module.exports = Heroes;