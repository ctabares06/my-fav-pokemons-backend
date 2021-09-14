const { User } = require('../models');
const { encription: { checkPassword } } = require('../utils');

const login = (email, password) =>
  User.findOne({
    where: { email },
    attributes: ['firstName', 'lastname', 'email', 'password'],
  })
    .then(user => {
      if (user) {
        return checkPassword(password, user.password)
          .then(isSame => {
            if (isSame) {
              return { ...user.dataValues, password: "" };
            }

            throw new Error("Wrong email or password");
          });
      }

      throw new Error("Wrong email or password");
    })

module.exports = {
  login,
}