import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyparser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import globalRouter from "./routers/globalRouter";

const app = express();
const PORT = process.env.PORT;
app.set("view enine", "pug");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(morgan(`dev`));
app.use(helmet());

app.use("/", globalRouter);

app.listen(PORT, () => [console.log(`${PORT} server start`)]);
