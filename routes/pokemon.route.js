const { Router } = require('express');
const { getGenerationsController } = require('../controllers/pokemon.controller');

const router = Router();

router.get('/generations', getGenerationsController);

module.exports = router;