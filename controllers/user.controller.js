const { 
  createUserService, 
  getUsersService, 
  getUserByIdService 
} = require('../services/user.service'); 

module.exports = {
  createUserController(req, res, next) {
    return createUserService(req.body)
      .then(user => res.send(user))
      .catch(console.error);
  },
  getusersController(req, res, next) {
    return getUsersService()
      .then(users => res.send(users))
      .catch(console.error);
  },
  getUserByIdController(req, res, next) {
    const { id } = req.params;
    return getUserByIdService(id)
      .then(user => res.send(user))
      .catch(console.error);
  }
}