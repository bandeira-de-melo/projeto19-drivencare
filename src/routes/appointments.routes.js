import {Router} from 'express';

const appointmentsRouter = Router()

appointmentsRouter.post("/schedule", appointmentsController)

export default appointmentsRouter;