import Joi from 'joi';
import JoiDate from '@joi/date';

const Jois = Joi.extend(JoiDate) 

export const appointmentsSchema = Jois.object({
  date: Jois.date().format('YYYY-MM-DD').utc().required(),
  doctorId: Jois.number().min(1).required(),
  startsAt: Jois.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).required(),
  endsAt: Jois.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/).required()
})