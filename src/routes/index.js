//resposability: center all resource Routers in a single routes func.
import { Router } from "express";
import doctorsRouter from "./doctors.routes.js";
import pacientsRouter from "./pacients.routes.js";

const routes = Router();

routes.use("/pacients", pacientsRouter);
routes.use("/doctors", doctorsRouter);

export default routes;
