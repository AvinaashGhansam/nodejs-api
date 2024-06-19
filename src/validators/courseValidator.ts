import Joi from "joi";

export const courseValidator = Joi.object({
  name: Joi.string().min(1).required(),
  author: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
  date: Joi.date(),
  isPublished: Joi.boolean().required(),
});
