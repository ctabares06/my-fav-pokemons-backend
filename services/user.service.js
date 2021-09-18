const { User, FavoritePokemons } = require('../models');

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
    where: {id}
   });

const AddFavoritePokemon = (data) =>
   FavoritePokemons.create(data);

module.exports = {
  createUser,
  getUserById,
  getUsers, 
  AddFavoritePokemon,
}