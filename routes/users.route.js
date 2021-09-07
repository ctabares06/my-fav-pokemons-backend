const { Router } = require('express');
const router = Router();

router.get('/', () => {
  console.log('users');
})

router.post('/', () => {
  console.log('users');
})

module.exports = router;