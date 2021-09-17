const { UnauthorizedError } = require('../errors');
const { User } = require('../models');
const { encription: { checkPassword } } = require('../utils');

const login = (email, password) =>
  User.findOne({
    where: { email },
    attributes: ['id', 'firstName', 'lastname', 'email', 'password'],
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