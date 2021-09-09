const { loginService } = require('../services/auth.service');

const loginController = (req, res, next) => {
  const { email, password } = req.body;
  return loginService(email, password)
    .then(user => res.cookie("auth_pok", "want some cookies?", {
      expires: new Date(Date.now() + 900000), httpOnly: true
    }).send(user));
}
 
module.exports = {
  loginController,
}
