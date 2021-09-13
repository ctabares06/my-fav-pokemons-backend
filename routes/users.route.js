const { Router } = require('express');
const router = Router();
const checkCookie = require('../middlewares/session');
const validationFields = require('../middlewares/validateFields');
const { 
  createUserController, 
  getUserByIdController,
  getusersController, 
} = require('../controllers/user.controller');
const { createUserSchema } = require('../validations')

router.get('/:id', checkCookie, getUserByIdController);
router.get('/', checkCookie, getusersController);
router.post('/', validationFields(createUserSchema), createUserController);

module.exports = router;