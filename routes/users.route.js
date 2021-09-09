const { Router } = require('express');
const router = Router();
const { createUserController } = require('../controllers/user.controller');

router.get('/', () => {
  console.log('users');
})

router.post('/', createUserController);

module.exports = router;