const pokemonService = require('../services/pokemon.service');

module.exports = {
  getGenerations(req, res, next) {
    return pokemonService.getFullGenerations()
      .then(generations => res.send(generations))
      .catch(err => next(err));
  },
  getPokemonsByGeneration(req, res, next) {
    return pokemonService.getPokemonsByGeneration(req.params.name)
      .then(response => res.send(response))
      .catch(err => next(err));
  }
  
}