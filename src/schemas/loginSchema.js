import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'io'] } }).required(), 
  password: Joi.string().min(5).required(),
})