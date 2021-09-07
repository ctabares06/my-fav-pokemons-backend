'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavoritePokemons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FavoritePokemons.init({
    user_id: DataTypes.INTEGER,
    pokemon_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FavoritePokemons',
  });
  return FavoritePokemons;
};