const userService = require('../services/user.service');

module.exports = {
  createUser(req, res, next) {
    return userService.createUser(req.body)
      .then(user => res.send(user))
      .catch(next);
  },
  getusers(req, res, next) {
    return userService.getUsers()
      .then(users => res.send(users))
      .catch(next);
  },
  getUserById(req, res, next) {
    const { id } = req.params;
    return userService.getUserById(id)
      .then(user => res.send(user))
      .catch(next);
  },
  AddFavoritePokemon(req, res, next){
    return userService.AddFavoritePokemon(req.body)
      .then(favorite => res.send(favorite))
      .catch(next);
  }
}