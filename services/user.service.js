const { User } = require('../models');

const createUser = (user) =>
  User.create(user);

const getUsers = () =>
  User.findAll({
    attributes: [
      'firstName',
      'lastname',
      'email',
    ]
  })

const getUserById = (id) =>
  User.findOne({ 
    where: {id},
    attributes: [
      'firstName',
      'lastname',
      'email',
    ]
   });

module.exports = {
  createUser,
  getUserById,
  getUsers, 
}