const { loginService } = require('../services/auth.service');

const loginController = (req, res, next) => {
  const { email, password } = req.body;
  return loginService(email, password)
    .then(user => res.send(user));
}
 
module.exports = {
  loginController,
}
