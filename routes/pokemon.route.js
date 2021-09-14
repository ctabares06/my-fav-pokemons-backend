const { Router } = require('express');
const pokemonController = require('../controllers/pokemon.controller');

const router = Router();

router.get('/generations', pokemonController.getGenerations);

module.exports = router;