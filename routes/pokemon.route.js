const { Router } = require('express');
const pokemonController = require('../controllers/pokemon.controller');
const checkCookie = require('../middlewares/session');

const router = Router();

router.get('/generations', checkCookie, pokemonController.getGenerations);
router.get('/generations/:name', checkCookie, pokemonController.getPokemonsByGeneration);

module.exports = router;