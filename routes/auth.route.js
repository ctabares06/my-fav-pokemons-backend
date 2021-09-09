const { Router } = require('express');
const router = Router();
const { loginController } = require('../controllers/auth.controller');

router.post('/', loginController);

module.exports = router;