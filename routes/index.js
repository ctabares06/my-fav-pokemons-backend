const { Router } = require('express');
const router = Router();
const users = require('./users.route');
const auth = require('./auth.route');
const pokemon = require('./pokemon.route');

router.use('/users', users);
router.use('/auth', auth);
router.use('/pokemon', pokemon);

module.exports = router;