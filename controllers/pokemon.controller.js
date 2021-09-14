const pokemonService = require('../services/pokemon.service');

module.exports = {
  getGenerations(req, res, next) {
    return pokemonService.getFullGenerations()
      .then(generations => res.send(generations))
      .catch(err => next(err));
  }
}