const bcrypt = require('bcrypt');

const encriptPassword = (password) =>
  new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          return reject(err);
        }

        return resolve(hash);
      })
  });

const checkPassword = (password, hash) =>
  new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        return reject(err);
      }

      return resolve(result);
    })
  })

module.exports = {
  encriptPassword,
  checkPassword,
}