import { Router } from "express";

const doctorsRouter = Router();

doctorsRouter.post("/signup");
doctorsRouter.get("/");

export default doctorsRouter;
