const { UnauthorizedError } = require('../errors');
const { User, FavoritePokemons } = require('../models');
const { encription: { checkPassword } } = require('../utils');

const login = (email, password) =>
  User.findOne({
    where: { email },
    include: [
      { model: FavoritePokemons }
    ],
  })
    .then(user => {
      if (user) {
        return checkPassword(password, user.password)
          .then(isSame => {
            if (isSame) {
              return { ...user.dataValues, password: "" };
            }

            throw new UnauthorizedError("Wrong email or password");
          });
      }

      throw new UnauthorizedError("Wrong email or password");
    })

module.exports = {
  login,
}