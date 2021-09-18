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

const addUserFavSchema = Joi.object({
  user_id: Joi.number().required(),
  pokemon_id: Joi.number().required(),
})

module.exports = {
  loginUserSchema,
  createUserSchema,
  addUserFavSchema,
}