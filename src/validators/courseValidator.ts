import Joi from "joi";

export const courseValidator = Joi.object({
  name: Joi.string().min(3).required(),
});
