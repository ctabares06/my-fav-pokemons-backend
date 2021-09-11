const { loginService } = require('../services/auth.service');

const loginController = (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  return loginService(email, password)
    .then(user => res.cookie("auth_pok", "want some cookies?", {
      expires: new Date(Date.now() + 900000), httpOnly: true
    }).send(user));
}

const logoutController = (req, res, next) => {
  res.clearCookie('auth_pok');
  return res.send();
}
 
module.exports = {
  loginController,
  logoutController,
}
