const validationMiddleware = (schema) => (req, res, next) =>
  schema.validateAsync(req.body)
    .then(() => next())
    .catch(err => res.status(401).send(err));

module.exports = validationMiddleware;