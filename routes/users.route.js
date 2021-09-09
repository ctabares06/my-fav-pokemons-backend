const { Router } = require('express');
const router = Router();
const { 
  createUserController, 
  getUserByIdController,
  getusersController, 
} = require('../controllers/user.controller');

router.get('/:id', getUserByIdController);
router.get('/', getusersController);
router.post('/', createUserController);

module.exports = router;