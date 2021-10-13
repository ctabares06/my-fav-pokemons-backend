const authService = require('../services/auth.service');
const userService = require('../services/user.service');

const login = (req, res, next) => {
  const { email, password } = req.body;
  return authService.login(email, password)
    .then(user => {
      req.session.user = user;
      return res.send(user);
    })
    .catch(next);
}

const me = (req, res, next) => {
  const { id } = req.session.user;
  return userService.getUserById(id)
    .then(user => res.send(user));
}

const logout = (req, res, next) => {
  req.session.destroy(err => {
    return res.send();
  })
}
 
module.exports = {
  login,
  logout,
  me,
}
