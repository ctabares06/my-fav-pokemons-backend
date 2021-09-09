'use strict';
const { Model } = require('sequelize');
const { encription } = require('../utils');

module.exports = (sequelize, DataTypes) => {

  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  User.init({
    firstName: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, options) => {
        return encription.encriptPassword(user.password)
          .then(hash => {
            user.password = hash;
          })
      }
    }
  });

  return User;
};