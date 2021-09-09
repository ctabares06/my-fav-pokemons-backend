const { Router } = require('express');
const router = Router();
const { loginController, logoutController } = require('../controllers/auth.controller');

router.post('/', loginController);
router.get('/logout', logoutController);

module.exports = router;