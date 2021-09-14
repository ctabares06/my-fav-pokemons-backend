const userService = require('../services/user.service'); 

module.exports = {
  createUserController(req, res, next) {
    return userService.createUser(req.body)
      .then(user => res.send(user))
      .catch(console.error);
  },
  getusersController(req, res, next) {
    return userService.getUsers()
      .then(users => res.send(users))
      .catch(console.error);
  },
  getUserByIdController(req, res, next) {
    const { id } = req.params;
    return userService.getUserById(id)
      .then(user => res.send(user))
      .catch(console.error);
  }
}