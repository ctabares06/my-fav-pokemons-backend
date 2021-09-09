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

module.exports = {
  encriptPassword,
}