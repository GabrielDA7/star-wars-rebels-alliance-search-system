const Joi = require('@hapi/joi');

const loginPayloadValidations = {
  payload: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = {
  loginPayloadValidations,
};
