const checkCookie = (req, res, next) => {
  if (req.cookies.auth_pok) {
    return next();
  }
  return res.status(401).send({
    message: "Unauthorized",
  });
}

module.exports = checkCookie;