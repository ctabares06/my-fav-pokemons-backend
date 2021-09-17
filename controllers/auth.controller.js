const authService = require('../services/auth.service');
const { encription: { encode64 } } = require('../utils');

const login = (req, res, next) => {
  const { email, password } = req.body;
  return authService.login(email, password)
    .then(user => res.cookie("auth_pok", encode64(user.id.toString()), {
      expires: new Date(Date.now() + 900000), httpOnly: true
    })
    .send(user))
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
