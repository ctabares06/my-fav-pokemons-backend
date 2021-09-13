const { Router } = require('express');
const router = Router();
const { loginController, logoutController } = require('../controllers/auth.controller');
const validationMiddleware = require('../middlewares/validateFields');
const { loginUserSchema } = require('../validations');

router.post('/', validationMiddleware(loginUserSchema), loginController);
router.get('/logout', logoutController);

module.exports = router;