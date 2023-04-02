import { Router } from "express";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { doctorSchema } from "../schemas/doctorSchema.js";

const doctorsRouter = Router();

doctorsRouter.post("/signup", schemaValidator(doctorSchema), createDoctor);
doctorsRouter.get("/");

export default doctorsRouter;
