const express = require('express');

const router = express.Router();

const { getHeroes, createHero, updateHero, deleteHero } = require('../controller/heroes.controller')

router.get('/get-heroes', getHeroes);

router.get('/get-strength-heroes', getHeroes);

router.get('/get-agility-heroes', getHeroes);

router.get('/get-intelligence-heroes', getHeroes);

router.post('/create-hero', createHero);

router.put('/update-hero', updateHero); // need to create main route 

router.delete('/delete-hero', deleteHero);