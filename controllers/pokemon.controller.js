const { getFullGenerations } = require('../services/pokemon.service');

module.exports = {
  getGenerationsController(req, res, next) {
    return getFullGenerations()
      .then(generations => res.send(generations))
      .catch(err => next(err));
  }
}