import {Router} from 'express';
import { schemaValidator } from '../middlewares/schemaValidator.js';
import { appointmentsSchema } from '../schemas/appointmentsSchema.js';
import appointmentsControllers from '../controllers/appointmentsControllers.js';

const appointmentsRouter = Router()

appointmentsRouter.post("/schedule",schemaValidator(appointmentsSchema), appointmentsControllers.create)

export default appointmentsRouter;