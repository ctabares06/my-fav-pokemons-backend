const { User } = require('../models');

const createUserService = (user) =>
  User.create(user);

const getUsersService = () =>
  User.findAll({
    attributes: [
      'firstName',
      'lastname',
      'email',
    ]
  })

const getUserByIdService = (id) =>
  User.findOne({ 
    where: {id},
    attributes: [
      'firstName',
      'lastname',
      'email',
    ]
   });

module.exports = {
  createUserService,
  getUserByIdService,
  getUsersService, 
}