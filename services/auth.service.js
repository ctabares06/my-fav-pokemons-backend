const { UnauthorizedError } = require('../errors');
const userService = require('./user.service');
const { encription: { checkPassword, encriptPassword, encode64 } } = require('../utils');

const login = (email, password) =>
  userService.getUserByMail(email)
    .then(user => {
      if (user) {
        return checkPassword(password, user.password)
          .then(isSame => {
            if (isSame) {
              return encriptPassword(user.id.toString());
            }
            
            throw new UnauthorizedError("Wrong email or password");
          })
          .then((cryptId) => {
            return { ...user.dataValues, password: "", token: encode64(cryptId.toString()) };
          })
      }

      throw new UnauthorizedError("Wrong email or password");
    })

module.exports = {
  login,
}