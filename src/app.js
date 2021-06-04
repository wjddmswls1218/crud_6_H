import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyparser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 7000;
app.set("view enine", "pug");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(morgan(`dev`));
app.use(helmet());

app.listen(PORT, () => [console.log(`${PORT} server start`)]);
