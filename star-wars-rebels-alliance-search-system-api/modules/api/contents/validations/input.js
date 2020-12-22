const Joi = require('@hapi/joi');

const validTypeOfContent = ['species', 'starships', 'films', 'people', 'vehicles', 'planets'];
const contentsQueryParamsValidations = {
  query: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    type: Joi.string().valid(...validTypeOfContent),
    search: Joi.string(),
  }),
};

const contentPathParamsValidations = {
  params: Joi.object({
    type: Joi.string().required().valid(...validTypeOfContent),
    contentId: Joi.number().integer().required(),
  }),
};

module.exports = {
  contentsQueryParamsValidations,
  contentPathParamsValidations,
};
