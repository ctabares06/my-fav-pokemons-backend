const { Router } = require('express');
const router = Router();
const checkCookie = require('../middlewares/session');
const { 
  createUserController, 
  getUserByIdController,
  getusersController, 
} = require('../controllers/user.controller');

router.get('/:id', checkCookie, getUserByIdController);
router.get('/', checkCookie, getusersController);
router.post('/', createUserController);

module.exports = router;