const { Router } = require('express');
const router = Router();
const authController = require('../controllers/auth.controller');
const validationMiddleware = require('../middlewares/validateFields');
const checkCookie = require('../middlewares/session');
const { loginUserSchema } = require('../validations');

router.post('/', validationMiddleware(loginUserSchema), authController.login);
router.get('/logout', authController.logout);
router.get('/me', checkCookie, authController.me);

module.exports = router;