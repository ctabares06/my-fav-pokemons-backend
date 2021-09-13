const Joi = require('joi');

const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const createUserSchema = Joi.object({
  firstName: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

module.exports = {
  loginUserSchema,
  createUserSchema,
}