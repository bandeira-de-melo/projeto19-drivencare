import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import errors from "./errors/errors.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
