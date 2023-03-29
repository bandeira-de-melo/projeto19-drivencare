//resposability: center all HTTP verbs for a resource in a single router func.
import { Router } from "express";

const pacientsRouter = Router();

pacientsRouter.post("/signup");
pacientsRouter.get("/");

export default pacientsRouter;
