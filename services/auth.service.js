const { UnauthorizedError } = require('../errors');
const userService = require('./user.service');
const { encription: { checkPassword } } = require('../utils');

const login = (email, password) =>
  userService.getUserByMail(email)
    .then(user => {
      if (user) {
        return checkPassword(password, user.password)
          .then(isSame => {
            if (isSame) {
              delete user.password;
              return user;
            }

            throw new UnauthorizedError("Wrong email or password");
          })
      }

      throw new UnauthorizedError("Wrong email or password");
    })

module.exports = {
  login,
}