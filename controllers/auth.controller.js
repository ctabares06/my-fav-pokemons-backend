const authService = require('../services/auth.service');

const login = (req, res, next) => {
  const { email, password } = req.body;
  return authService.login(email, password)
    .then(user => {
      req.session.user = user.id;
      return res.send(user);
    })
    .catch(next);
}

const logout = (req, res, next) => {
  res.clearCookie('auth_pok');
  return res.send();
}
 
module.exports = {
  login,
  logout,
}
