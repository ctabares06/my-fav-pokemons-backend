const { Router } = require('express');
const router = Router();
const users = require('./users.route');
const auth = require('./auth.route');

router.use('/users', users);
router.use('/auth', auth);

module.exports = router;