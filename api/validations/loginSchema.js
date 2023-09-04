import Joi from 'joi'

export const loginSchema = Joi.object({
  email: Joi.string()
    .pattern(new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i))
    .max(50)
    .required(),
  password: Joi.string()
    .pattern(new RegExp(/^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*\d]{7,}$/))
    .max(20)
    .required(),
});