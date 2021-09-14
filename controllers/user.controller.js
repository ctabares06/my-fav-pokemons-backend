const userService = require('../services/user.service'); 

module.exports = {
  createUser(req, res, next) {
    return userService.createUser(req.body)
      .then(user => res.send(user))
      .catch(console.error);
  },
  getusers(req, res, next) {
    return userService.getUsers()
      .then(users => res.send(users))
      .catch(console.error);
  },
  getUserById(req, res, next) {
    const { id } = req.params;
    return userService.getUserById(id)
      .then(user => res.send(user))
      .catch(console.error);
  }
}