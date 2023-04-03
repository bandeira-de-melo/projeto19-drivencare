import { Router } from "express";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { doctorSchema } from "../schemas/doctorSchema.js";
import doctorsControllers from "../controllers/doctorsControllers.js";

const doctorsRouter = Router();

doctorsRouter.post("/signup", schemaValidator(doctorSchema), doctorsControllers.create);
doctorsRouter.get("/");

export default doctorsRouter;
