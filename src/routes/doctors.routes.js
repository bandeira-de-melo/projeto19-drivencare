import { Router } from "express";

const doctorsRouter = Router();

doctorsRouter.post("/signup", schemaValidator(schema));
doctorsRouter.get("/");

export default doctorsRouter;
