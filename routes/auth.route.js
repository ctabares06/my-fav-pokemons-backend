const { Router } = require('express');
const router = Router();
const authController = require('../controllers/auth.controller');
const validationMiddleware = require('../middlewares/validateFields');
const { loginUserSchema } = require('../validations');

router.post('/', validationMiddleware(loginUserSchema), authController.login);
router.get('/logout', authController.logout);

module.exports = router;