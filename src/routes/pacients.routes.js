//resposability: center all HTTP verbs for a resource in a single router func.
import { Router } from "express";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { pacientSchema } from "../schemas/pacientSchema.js";
import pacientsControllers from "../controllers/pacientsControllers.js";

const pacientsRouter = Router();

pacientsRouter.post("/signup",schemaValidator(pacientSchema), pacientsControllers.create);
pacientsRouter.get("/");

export default pacientsRouter;
