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
  User.findByPk(id, {
    attributes: ['id', 'firstName', 'lastname', 'email'],
    include: [
      { 
        model: FavoritePokemons,
        attributes: ['user_id', 'pokemon_id']
      }
    ]
  });

const getUserByMail = (email) =>
User.findOne({
  where: { email },
  attributes: ['id', 'firstName', 'lastname', 'email', 'password'],
  include: [
    { 
      model: FavoritePokemons, 
      attributes: ['user_id', 'pokemon_id']
    },
  ],
})

const AddFavoritePokemon = (data) =>
   FavoritePokemons.create(data);

module.exports = {
  createUser,
  getUserById,
  getUsers, 
  AddFavoritePokemon,
  getUserByMail,
}