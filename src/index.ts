import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { sequelize } from "./models";
import rootRouter from "./router";

config();
sequelize.sync();
const app = express();
app.use(cors());
app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(rootRouter);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
