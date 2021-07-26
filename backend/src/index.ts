import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import express from "express";

config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("<h1>start</h1>");
});
// 루트 라우터
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
