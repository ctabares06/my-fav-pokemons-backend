const { User, FavoritePokemons } = require('../models');
const { getPokemonById } = require('./pokemon.service');

const createUser = (user) =>
  User.create(user);

const getUsers = () =>
  User.findAll({
    attributes: [
      'firstName',
      'lastname',
      'email',
    ]
  }).then(user => user.dataValues);

const reducePokemonToId = (pokemons) => pokemons.reduce((acc, { pokemon_id }) => {
  acc.push(pokemon_id)
  return acc;
}, [])

const FavoritePokemonsByUser = (user) => {
  const pokemonIds = reducePokemonToId(user.FavoritePokemons)

  return Promise.all(pokemonIds.map(getPokemonById)).then(pokemons => {
    return { ...user.dataValues, FavoritePokemons: pokemons };
  })
}

const getUserById = (id) =>
  User.findByPk(id, {
    attributes: ['id', 'firstName', 'lastname', 'email'],
    include: [
      {
        model: FavoritePokemons,
        attributes: ['user_id', 'pokemon_id']
      }
    ]
  }).then(FavoritePokemonsByUser)

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
  }).then(FavoritePokemonsByUser)

const getUserPokemonsByIds = (ids) =>
  Promise.all(ids.map(id =>
    getPokemonById(id)
  ))


const AddFavoritePokemon = (data) =>
  FavoritePokemons.create(data)
    .then(() => FavoritePokemons.findAll({
      attributes: [
        'user_id',
        'pokemon_id',
      ]
    }))
    .then(reducePokemonToId)
    .then(getUserPokemonsByIds);

const removeFavoritePokemon = (data) =>
  FavoritePokemons.destroy({
    where: {
      user_id: data.user_id,
      pokemon_id: data.pokemon_id
    }
  })
    .then(() => FavoritePokemons.findAll({
      attributes: [
        'user_id',
        'pokemon_id',
      ]
    }))
    .then(reducePokemonToId)
    .then(getUserPokemonsByIds);

module.exports = {
  createUser,
  getUserById,
  getUsers,
  AddFavoritePokemon,
  removeFavoritePokemon,
  getUserByMail,
}