const { createUserService } = require('../services/user.service'); 

module.exports = {
  createUserController(req, res, next) {
    return createUserService(req.body)
      .then(user => res.send(user))
      .catch(console.error);
  }
}