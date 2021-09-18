const { Router } = require('express');
const router = Router();
const checkCookie = require('../middlewares/session');
const validationFields = require('../middlewares/validateFields');
const userController = require('../controllers/user.controller');
const { createUserSchema } = require('../validations')

router.get('/:id', checkCookie, userController.getUserById);
router.get('/', checkCookie, userController.getusers);
router.post('/', validationFields(createUserSchema), userController.createUser);
router.post('/favorite', userController.AddFavoritePokemon);

module.exports = router;