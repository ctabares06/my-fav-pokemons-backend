const { fetch } = require('../utils');
const { ServerInternalError } = require('../errors');

const pokemonFilterData = (pokemon) => ({
  id: pokemon.id,
  sprite: pokemon.sprites.front_default,
  name: pokemon.name,
  types: pokemon.types.map(({ type }) => type.name),
});

const getGenerationsService = () =>
  fetch.get('/generation')
    .then(response => {
      if (!response.status) {
        throw new ServerInternalError('An error ocurred while executing the request');
      }

      return response.data
    });

const getGenerationByName = (name) =>
  fetch.get(`generation/${name}`)
    .then((response => {
      if (!response.status) {
        throw new ServerInternalError('An error ocurred while executing the request');
      }
      console.log(response.status);
      return response.data;
    }));

const getVersionGroupByName = (name) =>
  fetch.get(`version-group/${name}`)
    .then((response => {
      if (!response.status) {
        throw new ServerInternalError('An error ocurred while executing the request');
      }

      return response.data;
    }));

const getPokemonByName = (name) =>
  fetch.get(`pokemon/${name}`)
    .then((response => {
      if (!response.status) {
        throw new ServerInternalError('An error ocurred while executing the request');
      }
      console.log(response.status);
      return response.data;
    }));

const getPokemonById = (id) =>
  fetch.get(`pokemon/${id}`)
    .then((response => {
      if (!response.status) {
        throw new ServerInternalError('An error ocurred while executing the request');
      }

      return pokemonFilterData(response.data);
    }));

const getFullGenerations = () =>
  getGenerationsService()
    .then(generations => generations.results.map(({ name }) =>
      getGenerationByName(name).then(({ version_groups, main_region, id }) =>
        Promise.all(version_groups.map(({ name: version_name }) => getVersionGroupByName(version_name)
          .then(({ versions }) => versions)
        ))
          .then(games => games.flat())
          .then(games => ({
            id,
            name,
            main_region,
            games,
          }))
      ))
    )
    .then(result => Promise.all(result))

const getPokemonsByGeneration = (text) =>
  getGenerationByName(text)
    .then(({ pokemon_species }) =>
      pokemon_species.map(({ name }) =>
        getPokemonByName(name).then(pokemonFilterData)
      )
    )
    .then(promises => Promise.all(promises));

module.exports = {
  getFullGenerations,
  getPokemonsByGeneration,
  getPokemonById,
}