import Joi from 'joi';

export const doctorSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'io'] } }),
  password: Joi.string().min(5).required(),
  specialty: Joi.string().min(3).required(),
  location: Joi.string().min(3).required()
})