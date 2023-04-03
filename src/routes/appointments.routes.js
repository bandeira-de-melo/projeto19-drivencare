import {Router} from 'express';
import { schemaValidator } from '../middlewares/schemaValidator.js';
import { appointmentsSchema } from '../schemas/appointmentsSchema.js';
import appointmentsControllers from '../controllers/appointmentsControllers.js';
import { pacientAuthMiddleware } from '../middlewares/pacientAuthMiddleware.js';

const appointmentsRouter = Router()

appointmentsRouter.get("/doctors", pacientAuthMiddleware, appointmentsControllers.getDoctors)

export default appointmentsRouter;