const { User } = require('../models');

const createUserService = (user) =>
  User.create(user);

module.exports = {
  createUserService,
}