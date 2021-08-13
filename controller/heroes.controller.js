const Heroes = require('../models/heroes.model');
const errors = require('../config/errors/errors.info.json');
const ServerError = require('../middlewares/errorHandler/error-handler');

exports.getHeroes = async (req, res, next) => {

}

exports.createHero = async (req, res, next) => {
    const type = req.body.type;
    console.log(typeof type);
    const name = req.body.name;
    const role = req.body.role;
    const health = req.body.health;
    const mana = req.body.mana;
    const nameOfFirstSkill = req.body.nameOfFirstSkill;
    const nameOfSecondSkill = req.body.nameOfSecondSkill;
    const nameOfThirdSkill = req.body.nameOfThirdSkill;
    const nameOfFourthSkill = req.body.nameOfFourthSkill;
    const nameOfFifthSkill = req.body.nameOfFifthSkill;
    const nameOfSixthSkill = req.body.nameOfSixthSkill;
    const damage = req.body.damage;
    const damageFromFirstSkill = req.body.damageOfFirstSkill;
    const damageFromSecondSkill = req.body.damageOfSecondSkill;
    const damageFromThirdSkill = req.body.damageOfThirdSkill;
    const damageFromFourthSkill = req.body.damageOfFourthSkill;
    const damageFromFifthSkill = req.body.damageOfFifthSkill;
    const damageFromSixthSkill = req.body.damageOfSixthSkill;
    const manaCostOfFirstSkill = req.body.damageOfFirstSkill;
    const manaCostOfSecondSkill = req.body.damageOfSecondSkill;
    const manaCostOfThirdSkill = req.body.damageOfThirdSkill;
    const manaCostOfFourthSkill = req.body.damageOfFourthSkill;
    const manaCostOfFifthSkill = req.body.damageOfFifthSkill;
    const manaCostOfSixthSkill = req.body.damageOfSixthSkill;

    // console.log(typeOFHero === 'strengthHeroes')

    if( type === 'strength' || type === 'agility' || type === 'intelligence' ) {
        throw new ServerError(errors.TypeOfHero);
    }

    const heroes = new Heroes({
        type: type,
        name: name,
        role: role,
        health: health,
        mana: mana,
        name_of_first_Skill: nameOfFirstSkill,
        name_of_second_Skill: nameOfSecondSkill,
        name_of_third_Skill: nameOfThirdSkill,
        name_of_fourth_Skill: nameOfFourthSkill,
        name_of_fifth_Skill: nameOfFifthSkill,
        name_of_sixth_Skill: nameOfSixthSkill,
        damage: damage,
        damage_from_first_skill: damageFromFirstSkill,
        damage_from_second_skill: damageFromSecondSkill,
        damage_from_third_skill: damageFromThirdSkill,
        damage_from_fourth_skill: damageFromFourthSkill,
        damage_from_fifth_skill: damageFromFifthSkill,
        damage_from_sixth_skill: damageFromSixthSkill,
        manaCost_of_first_skill: manaCostOfFirstSkill,
        manaCost_of_second_skill: manaCostOfSecondSkill,
        manaCost_of_third_skill: manaCostOfThirdSkill,
        manaCost_of_fourth_skill: manaCostOfFourthSkill,
        manaCost_of_fifth_skill: manaCostOfFifthSkill,
        manaCost_of_sixth_skill: manaCostOfSixthSkill
    });

    if(!heroes) {
        throw new ServerError(errors.HeroesNotFound);
    }

    try {
        

        await heroes.save();

        return heroes;

    } catch (err) {
        throw new ServerError(errors.InternalServerError);
    }
} 

exports.updateHero = async (req, res, next) => {

}

exports.deleteHero = async (req, res, next) => {

}